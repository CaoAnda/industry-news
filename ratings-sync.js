(function(root){
  const STORE='daily-feed-ratings-v2', LEGACY='daily-feed-ratings-v1', CONNECTION='daily-feed-connection-v1';
  const valid=r=>r&&/^(news|case):[\w-]{1,120}$/.test(r.key)&&['up','down',null].includes(r.value)&&Number.isSafeInteger(r.updatedAt)&&/^[a-zA-Z0-9-]{1,80}$/.test(r.opId);
  const compare=(a,b)=>a.updatedAt-b.updatedAt||(a.opId===b.opId?0:(a.opId>b.opId?1:-1));
  class FeedbackStore {
    constructor({endpoint,storage,fetcher=root.fetch.bind(root),onChange=()=>{}}){
      this.endpoint=endpoint;this.fetcher=fetcher;this.onChange=onChange;this.records={};this.key='';this.storageOK=true;this.state='disconnected';this.busy=false;this.retry=null;this.delay=10000;
      try{this.storage=storage||root.localStorage}catch{this.storage={getItem(){throw new Error('storage_unavailable')},setItem(){throw new Error('storage_unavailable')}};this.storageOK=false}
      this.restore();
      try{this.key=this.storage.getItem(CONNECTION)||''}catch{this.storageOK=false}
      if(this.key)this.state='pending';
    }
    read(){try{return JSON.parse(this.storage.getItem(STORE)||'null')}catch{this.storageOK=false;return null}}
    restore(){
      const saved=this.read();
      for(const r of Object.values(saved?.records||{}))if(valid(r)&&(!this.records[r.key]||compare(r,this.records[r.key])>0||compare(r,this.records[r.key])===0&&!r.pending))this.records[r.key]=r;
      if(!saved?.migrated){
        try{for(const [key,r] of Object.entries(JSON.parse(this.storage.getItem(LEGACY)||'{}'))){
          const changed=Date.parse(r.updatedAt),entry={key,value:r.value,updatedAt:changed,opId:'legacy-'+changed,pending:true};
          if(valid(entry)&&(!this.records[key]||compare(entry,this.records[key])>0))this.records[key]=entry;
        }}catch{this.storageOK=false}
        this.save();
      }
    }
    save(){
      // Merge another tab's newer edits before writing this tab's snapshot.
      const saved=this.read();
      for(const r of Object.values(saved?.records||{}))if(valid(r)&&(!this.records[r.key]||compare(r,this.records[r.key])>0))this.records[r.key]=r;
      try{this.storage.setItem(STORE,JSON.stringify({migrated:true,records:this.records}));this.storageOK=true}catch{this.storageOK=false}
    }
    notify(){this.onChange(this)}
    set(key,value){
      this.restore();
      const old=this.records[key];
      const r={key,value:old?.value===value?null:value,updatedAt:Math.max(Date.now(),(old?.updatedAt||0)+1),opId:crypto.randomUUID(),pending:true};
      if(!valid(r))return;
      this.records[key]=r;this.save();this.state=this.key?'pending':'disconnected';this.notify();void this.sync();
    }
    pending(){return Object.values(this.records).filter(r=>r.pending)}
    merge(remote){
      if(!Array.isArray(remote)||!remote.every(valid))throw new Error('invalid_response');
      this.restore();
      for(const r of remote){const local=this.records[r.key];if(!local||compare(r,local)>=0)this.records[r.key]={...r,pending:false}}
      this.save();
    }
    async request(key,changes){
      const abort=new AbortController(),timer=setTimeout(()=>abort.abort(),12000);
      try{
        const response=await this.fetcher(this.endpoint,{method:changes?'POST':'GET',headers:{Authorization:'Bearer '+key,...(changes?{'Content-Type':'application/json'}:{})},body:changes?JSON.stringify({changes:changes.map(({key,value,updatedAt,opId})=>({key,value,updatedAt,opId}))}):undefined,signal:abort.signal,credentials:'omit',cache:'no-store'});
        if(!response.ok)throw new Error(response.status===401?'connection_invalid':'network_error');
        const result=await response.json();if(!Array.isArray(result.records)||!result.records.every(valid))throw new Error('invalid_response');return result.records;
      }finally{clearTimeout(timer)}
    }
    async connect(key){
      if(!/^[a-f0-9]{64}$/.test(key))throw new Error('connection_invalid');
      this.state='connecting';this.notify();
      try{
        const remote=await this.request(key);
        this.key=key;try{this.storage.setItem(CONNECTION,key)}catch{this.storageOK=false}
        this.merge(remote);this.state='pending';this.notify();await this.sync();
      }catch(error){this.state=error.message==='connection_invalid'?'invalid':'offline';this.notify();throw error}
    }
    async sync(){
      if(!this.key)return;
      if(this.busy){this.again=true;return}
      this.busy=true;clearTimeout(this.retry);this.retry=null;
      try{
        do{
          this.again=false;this.restore();const batch=this.pending().slice(0,100);
          this.state='syncing';this.notify();
          this.merge(await this.request(this.key,batch.length?batch:undefined));
          if(batch.length&&batch.some(sent=>this.records[sent.key]?.opId===sent.opId&&this.records[sent.key]?.pending))throw new Error('missing_acknowledgement');
        }while(this.pending().length||this.again);
        this.state='synced';this.delay=10000;
      }catch(error){
        this.state=error.message==='connection_invalid'?'invalid':'offline';
        if(this.state==='offline'){this.retry=setTimeout(()=>void this.sync(),this.delay);this.delay=Math.min(this.delay*2,60000)}
      }finally{this.busy=false;this.notify()}
    }
    status(key){const r=this.records[key];if(!r)return '';if(!this.storageOK&&r.pending)return '待同步 · 本机未保存';if(r.pending)return this.key?(this.state==='offline'?'待同步':'同步中…'):'已存本机';return r.value?'已同步':'已取消 · 已同步'}
  }
  root.FeedbackStore=FeedbackStore;
})(typeof window==='undefined'?globalThis:window);
