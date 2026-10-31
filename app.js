const icons = {
 home:'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',
 search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
 info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v.1"/>',
 close:'<path d="m6 6 12 12M6 18 18 6"/>',
 calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18m-13 5h3"/>',
 down:'<path d="m7 10 5 5 5-5"/>',
 up:'<path d="m7 14 5-5 5 5"/>',
 link:'<path d="M14 3h7v7m-12 5L21 3M10 5H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/>',
 thumb:'<path d="M7 10v11H3V10zm0 0 5-8c2 0 3 2 2 5l-1 3h6a2 2 0 0 1 2 2l-2 7a3 3 0 0 1-3 2H7"/>',
 inbox:'<path d="M3 13 6 4h12l3 9v7H3zM3 13h5l2 3h4l2-3h5"/>'
};
const icon = name => `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[name] || icons.info}</svg>`;
document.querySelectorAll('[data-icon]').forEach(el => el.innerHTML = icon(el.dataset.icon));
const data = window.FEED_DATA;
const issues=window.FEED_ISSUES;
const learning=window.LEARNING_DATA;
const cases=learning.entries;
const issueKey=i=>i.id||i.date;
const issueLabel=id=>{const i=issues.find(x=>issueKey(x)===id);return i?(i.label||i.date):id};
const state = {stream:'all',learningCat:'all',filter:'all',topic:'',sort:'curated',query:'',expanded:new Set(),comments:new Set(),issue:issueKey(issues[0])};
const feed = document.querySelector('#feed');
const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const ratingStorageKey='daily-feed-ratings-v1';
let ratings={},ratingStorageOK=true;
function readRatings(){
 try{const raw=JSON.parse(localStorage.getItem(ratingStorageKey)||'{}');
  if(!raw||typeof raw!=='object'||Array.isArray(raw))return {};
  return Object.fromEntries(Object.entries(raw).filter(([key,r])=>/^(news|case):[\w-]+$/.test(key)&&r&&['up','down'].includes(r.value)&&typeof r.title==='string'&&typeof r.updatedAt==='string'));
 }catch{ratingStorageOK=false;return {}}
}
ratings=readRatings();
function ratingHTML(key){const value=ratings[key]?.value;
 return `<div class="rating-row" data-rating-row="${esc(key)}" role="group" aria-label="评价这条内容"><button class="rating-button ${value==='up'?'positive selected':''}" data-rate="up" data-rating-key="${esc(key)}" aria-pressed="${value==='up'}">${icon('thumb')}有收获</button><button class="rating-button ${value==='down'?'negative selected':''}" data-rate="down" data-rating-key="${esc(key)}" aria-pressed="${value==='down'}">${icon('thumb')}不太喜欢</button><span class="rating-saved">${value?(ratingStorageOK?'已记录':'仅本次有效'):''}</span></div>`;
}
function ratingItems(){return Object.entries(ratings).sort((a,b)=>b[1].updatedAt.localeCompare(a[1].updatedAt))}
function updateRatingCount(){document.querySelector('#rating-count').textContent=Object.keys(ratings).length||''}
function setRating(key,value){
 const type=key.startsWith('case:')?'case':'news',id=key.slice(key.indexOf(':')+1);
 const item=(type==='case'?cases:data).find(x=>x.id===id);if(!item)return;
 if(ratings[key]?.value===value)delete ratings[key];
 else ratings[key]={value,title:item.title,type,topic:item.topic,url:type==='case'?item.sources[0][1]:item.links[0].url,updatedAt:new Date().toISOString()};
 try{localStorage.setItem(ratingStorageKey,JSON.stringify(ratings));ratingStorageOK=true}catch{ratingStorageOK=false}
 document.querySelectorAll('[data-rating-row]').forEach(row=>{if(row.dataset.ratingRow===key){const holder=document.createElement('div');holder.innerHTML=ratingHTML(key);row.replaceWith(holder.firstElementChild)}});
 updateRatingCount();
 document.querySelector('#rating-status').textContent=ratings[key]?(ratingStorageOK?'评价已记录':'浏览器未能保存，评价仅本次有效'):'已取消评价';
 document.querySelector(`[data-rating-key="${key}"][data-rate="${value}"]`)?.focus({preventScroll:true});
}
function showRatings(){
 const list=ratingItems();
 document.querySelector('#rating-list').innerHTML=list.length?list.map(([key,r])=>`<li><span class="rating-verdict ${r.value==='up'?'positive':'negative'}">${r.value==='up'?'有收获':'不太喜欢'}</span><p>${esc(r.title)}</p><small>${r.type==='case'?'研究案例':'业界消息'} · ${esc(r.topic||'')}</small></li>`).join(''):'<p class="rating-empty">还没有评价。读到有收获或不合口味的内容，点一下就好。</p>';
 document.querySelector('#copy-ratings').disabled=!list.length;
 document.querySelector('#rating-storage-note').textContent=ratingStorageOK?'评价保存在当前浏览器，不会自动同步或调整选题。可以复制后发给我，用来调整后续内容。':'浏览器未能保存，当前评价仅本次有效；可以先复制留存。';
 document.querySelector('#rating-export').hidden=true;
 document.querySelector('#rating-copy-status').textContent='';
 document.querySelector('#rating-dialog').showModal();
}
function ratingExportText(){return '我的信息流评价（未评价不代表不喜欢）\n\n'+ratingItems().map(([key,r])=>`${r.value==='up'?'好评 · 有收获':'差评 · 不太喜欢'}｜${r.title}\n${r.type==='case'?'研究案例':'业界消息'} · ${r.topic||''}\n条目：${key}\n${r.url||''}`).join('\n\n')}
async function copyRatings(){const text=ratingExportText();try{await navigator.clipboard.writeText(text);document.querySelector('#rating-copy-status').textContent='已复制，可以粘贴到聊天里。'}catch{const box=document.querySelector('#rating-export');box.value=text;box.hidden=false;box.focus();box.select();document.querySelector('#rating-copy-status').textContent='请复制下方已选中的评价。'}}
window.addEventListener('storage',event=>{if(event.key!==ratingStorageKey&&event.key!==null)return;ratings=readRatings();document.querySelectorAll('[data-rating-row]').forEach(row=>{const holder=document.createElement('div');holder.innerHTML=ratingHTML(row.dataset.ratingRow);row.replaceWith(holder.firstElementChild)});updateRatingCount();if(document.querySelector('#rating-dialog').open)showRatings()});
function emphasize(text,phrases=[]){
 const value=String(text||'');
 const spans=phrases.map(phrase=>({phrase,start:value.indexOf(phrase)})).filter(x=>x.start>=0&&x.phrase.length).sort((a,b)=>a.start-b.start);
 let cursor=0,result='';
 for(const {phrase,start} of spans){if(start<cursor)continue;result+=esc(value.slice(cursor,start))+`<strong class="key-point">${esc(phrase)}</strong>`;cursor=start+phrase.length;}
 return result+esc(value.slice(cursor));
}
function paragraphs(text,phrases=[]){return String(text||'').split(/\n\s*\n/).filter(Boolean).map(t=>`<p>${emphasize(t,phrases)}</p>`).join('')}
function mediaHTML(p,placement='inline'){
 const pictures=(p.images||[]).map((pic,index)=>({pic,index})).filter(({pic})=>(pic.placement||'inline')===placement);
 return pictures.length?`<div class="post-media">${pictures.map(({pic,index})=>`<figure><button class="image-button" data-picture="${esc(p.id)}" data-index="${index}" aria-label="查看大图：${esc(pic.alt)}"><img src="${esc(pic.src)}" alt="${esc(pic.alt)}" loading="lazy" decoding="async"><span class="zoom-hint">查看大图 ↗</span></button><figcaption>${esc(pic.caption)} <a href="${esc(pic.sourceUrl)}" target="_blank" rel="noopener noreferrer">图源：${esc(pic.credit)} ↗</a></figcaption></figure>`).join('')}</div>`:'';
}
function commentsHTML(p){
 if(!(p.comments||[]).length)return '';
 const open=state.comments.has(p.id);
 return `<section class="comments-section"><button class="comments-toggle" data-action="comments" data-id="${esc(p.id)}" aria-expanded="${open}" aria-controls="comments-${esc(p.id)}"><span>评论里的补充 <b>${p.comments.length}</b></span><span>${open?'收起 ↑':'展开 ↓'}</span></button><div class="comment-teaser" ${open?'hidden':''}>${emphasize(p.comments[0].text,p.comments[0].highlights)}</div><div id="comments-${esc(p.id)}" ${open?'':'hidden'}>${p.comments.map(c=>`<div class="comment"><div class="comment-author">${esc(c.author)} <span>${esc(c.mode)}</span></div><small>${esc(c.date)} · ${esc(c.context)}</small><p>${emphasize(c.text,c.highlights)}</p><div class="comment-foot"><a href="${esc(c.url)}" target="_blank" rel="noopener noreferrer">${esc(c.linkLabel||'查看评论来源')} ↗</a></div></div>`).join('')}</div></section>`;
}
function postHTML(p){
 const open=state.expanded.has(p.id);
 const hasDetails=Boolean(p.body||(p.images||[]).some(pic=>pic.placement==='details'));
 return `<article class="post" id="post-${p.id}" aria-labelledby="title-${p.id}">
  <div class="post-head"><div class="avatar ${p.avatarClass}" aria-hidden="true">${esc(p.avatar)}</div><div><div class="source-name">${esc(p.source)}</div><div class="source-meta">${esc(p.time)} · ${esc(p.topic)}</div></div><span class="evidence"><i class="dot ${p.kind}"></i>${esc(p.evidence)}</span></div>
  <h2 id="title-${p.id}">${esc(p.title)}</h2><div class="post-story">${paragraphs(p.summary,p.highlights?.summary)}</div>
  ${mediaHTML(p)}
  ${hasDetails?`<button class="story-more" data-action="expand" data-id="${p.id}" aria-expanded="${open}" aria-controls="detail-${p.id}">${icon(open?'up':'down')}<span>${open?'收起':esc(p.detailLabel||'更多细节')}</span></button><div class="detail" id="detail-${p.id}" ${open?'':'hidden'}>${paragraphs(p.body,p.highlights?.body)}${mediaHTML(p,'details')}</div>`:''}
  ${commentsHTML(p)}
  <div class="story-sources"><button class="story-topic" data-topic="${esc(p.topic)}"># ${esc(p.topic)}</button>${p.links.map(l=>`<a href="${esc(l.url)}" target="_blank" rel="noopener noreferrer">${esc(l.label)} ↗ <small>${esc(new URL(l.url).hostname.replace(/^www\./,''))}</small></a>`).join('')}</div>
 ${ratingHTML('news:'+p.id)}
 </article>`;
}
function caseHTML(a){
 const open=state.expanded.has('case-'+a.id);
 return `<article class="post learning-post" id="case-${esc(a.id)}" aria-labelledby="case-title-${esc(a.id)}">
 <div class="post-head"><div class="avatar learning-avatar" aria-hidden="true">${esc(a.symbol)}</div><div><div class="source-name">拾知 · ${a.cat==='merge'?'模型合并':'AI 拓展'}</div><div class="source-meta">${esc(a.method)} · ${esc(a.year)}</div></div><span class="evidence">研究案例</span></div>
 <h2 id="case-title-${esc(a.id)}">${esc(a.title)}</h2><div class="post-story">${paragraphs(a.lead)}<p><strong class="key-point">${esc(a.insight)}</strong></p></div>
 <button class="story-more" data-action="expand" data-id="case-${esc(a.id)}" aria-expanded="${open}" aria-controls="case-detail-${esc(a.id)}">${icon(open?'up':'down')}<span>${open?'收起案例':'看方法拆解与算例 · 约 '+a.time+' 分钟'}</span></button>
 <div class="case-detail" id="case-detail-${esc(a.id)}" ${open?'':'hidden'}>
 <h3>方法怎样设计</h3><ol>${a.steps.map(([title,text])=>`<li><h4>${esc(title)}</h4>${paragraphs(text)}</li>`).join('')}</ol>
 <section class="case-example"><span class="case-label">教学算例</span><h3>${esc(a.example.title)}</h3>${paragraphs(a.example.text)}${a.example.lab?speculativeLab():''}</section>
 <details class="case-evidence"><summary>实验结果与适用条件</summary>${paragraphs(a.evidence)}${paragraphs(a.limits)}</details>
 <h3>可以借走的思路</h3>${paragraphs(a.transfer)}
 <details class="case-evidence"><summary>${esc(a.counter.q)}</summary>${paragraphs(a.counter.a)}</details>
 </div><div class="story-sources"><span>${esc(a.topic)}</span>${a.sources.map(([label,url])=>`<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>`).join('')}</div>${ratingHTML('case:'+a.id)}</article>`;
}
function render(){
 let visible=data.filter(p=>(state.filter==='all'||state.filter===p.channel)&&(state.issue==='all'||p.issueDate===state.issue)&&(!state.topic||state.topic===p.topic));
 if(state.query.trim()){const query=state.query.trim().toLocaleLowerCase();visible=visible.filter(p=>[p.title,p.source,p.summary,p.body,p.detailLabel,...p.tags,...(p.comments||[]).map(c=>c.text+' '+c.author)].join(' ').toLocaleLowerCase().includes(query))}
 if(state.sort==='latest')visible.sort((a,b)=>b.date.localeCompare(a.date));
 let selectedCases=cases.filter(a=>state.learningCat==='all'||a.cat===state.learningCat);
 if(state.query.trim()){const q=state.query.trim().toLocaleLowerCase();selectedCases=selectedCases.filter(a=>JSON.stringify(a).toLocaleLowerCase().includes(q))}
 if(state.stream==='news'||state.filter!=='all'||state.topic)selectedCases=[];
 else if(state.stream==='all'&&!state.query.trim())selectedCases=selectedCases.filter(a=>learning.featured.includes(a.id));
 if(state.stream==='learning')visible=[];
 const newsHTML=visible.map((p,i)=>(state.sort==='curated'&&state.issue==='all'&&(i===0||visible[i-1].issueDate!==p.issueDate)?`<div class="date-divider"><span>${esc(issueLabel(p.issueDate))}</span></div>`:'')+postHTML(p));
 let cards=[...newsHTML];
 selectedCases.forEach((a,i)=>cards.splice(Math.min(2+i*3,cards.length),0,caseHTML(a)));
 feed.innerHTML=cards.length?cards.join(''):`<div class="empty">${icon('inbox')}<h2>暂时没有匹配的内容。</h2><p>试试其他关键词，或者清除筛选。</p><button data-reset>回到全部内容 →</button></div>`;
 if(document.querySelector('#lab-result'))updateLab();
 feed.querySelectorAll('.post-media img').forEach(img=>img.addEventListener('error',()=>{const button=img.closest('button');button.disabled=true;button.classList.add('image-failed');button.innerHTML='<span>图片暂时无法显示，请从图源查看</span>'}));
 document.querySelector('.result-count').textContent=`${visible.length+selectedCases.length} 条内容`;
 const current=issues.find(i=>issueKey(i)===state.issue)||issues[0];
 document.querySelector('.editor-note h2').textContent=state.stream==='learning'?'从难题里，看见巧妙的方法。':current.title;
 document.querySelector('.editor-note p').textContent=state.stream==='learning'?'来自「每日 AI 新闻」的研究案例：讲清遇到了什么难题、关键洞察在哪里，以及方法为什么这样设计。':current.intro;
 document.querySelector('.edition').textContent='VOL. '+String(current.edition).padStart(3,'0');
 document.querySelector('.note-meta').innerHTML=state.stream==='learning'?`<span>${cases.length} 篇案例 · AI 拓展 ${cases.filter(a=>a.cat==='ai').length} / 模型合并 ${cases.filter(a=>a.cat==='merge').length}</span><span>经典方法 · 标注原始年份</span>`:`<span>${esc(current.label||current.date)}</span><span>${current.count} 条消息${state.stream==='all'?' + '+learning.featured.length+' 篇案例':''}</span>`;
 document.querySelectorAll('[data-filter]').forEach(el=>{el.classList.toggle('active',el.dataset.filter===state.filter);el.setAttribute('aria-pressed',el.dataset.filter===state.filter)});
 document.querySelectorAll('[data-sort]').forEach(el=>{el.classList.toggle('active',el.dataset.sort===state.sort);el.setAttribute('aria-pressed',el.dataset.sort===state.sort)});
 const topic=document.querySelector('#topic-filter');topic.hidden=!state.topic;topic.innerHTML=`正在看：${esc(state.topic)}<button data-clear-topic aria-label="清除话题筛选">× 清除</button>`;
 document.querySelector('.feed-footer').hidden=!cards.length;
 document.querySelector('#browse-cases').hidden=state.stream==='learning';
 document.querySelector('#end-copy').textContent=state.stream==='learning'?'案例库，就先逛到这里。':'今天，就看到这里。';
 document.querySelector('.issue-picker').hidden=state.stream==='learning';
 document.querySelector('.filter-row').hidden=state.stream==='learning';
 document.querySelector('.learning-filters').hidden=state.stream!=='learning';
 document.querySelectorAll('[data-sort]').forEach(el=>el.hidden=state.stream==='learning');
 document.querySelectorAll('.stream-tabs [data-stream]').forEach(el=>{el.classList.toggle('active',el.dataset.stream===state.stream);el.setAttribute('aria-pressed',el.dataset.stream===state.stream)});
 document.querySelectorAll('[data-learning-cat]').forEach(el=>{el.classList.toggle('active',el.dataset.learningCat===state.learningCat);el.setAttribute('aria-pressed',el.dataset.learningCat===state.learningCat)});
}
function reset(){state.stream='all';state.learningCat='all';state.filter='all';state.topic='';state.query='';state.issue='all';document.querySelector('#issue-select').value='all';document.querySelector('#search').value='';render()}
document.addEventListener('click',event=>{
 const el=event.target.closest('button');if(!el)return;
 if(el.dataset.rate){setRating(el.dataset.ratingKey,el.dataset.rate);}
 else if(el.dataset.picture){const p=data.find(p=>p.id===el.dataset.picture),pic=p.images[Number(el.dataset.index)];document.querySelector('#large-image').src=pic.src;document.querySelector('#large-image').alt=pic.alt;document.querySelector('#large-caption').textContent=pic.caption+' 图源：'+pic.credit;document.querySelector('#large-source').href=pic.sourceUrl;document.querySelector('#image-dialog').showModal();}
 else if(el.hasAttribute('data-home')){state.stream='all';state.learningCat='all';state.issue=issueKey(issues[0]);document.querySelector('#issue-select').value=state.issue;state.filter='all';state.topic='';state.query='';document.querySelector('#search').value='';render();window.scrollTo({top:0});}
 else if(el.dataset.stream){state.stream=el.dataset.stream;state.filter='all';state.topic='';state.learningCat='all';render();document.querySelector('.controls').scrollIntoView({block:'start'});}
 else if(el.dataset.learningCat){state.learningCat=el.dataset.learningCat;render();}
 else if(el.dataset.mode){labMode=el.dataset.mode;updateLab();}
 else if(el.dataset.q){labQ=Number(el.dataset.q);updateLab();}
 else if(el.dataset.filter){state.filter=el.dataset.filter;render();}
 else if(el.dataset.sort){state.sort=el.dataset.sort;render();}
 else if(el.dataset.topic){state.stream='news';state.topic=el.dataset.topic;state.filter='all';render();document.querySelector('.controls').scrollIntoView({block:'start'});}
 else if(el.hasAttribute('data-clear-topic')){state.topic='';render()}
 else if(el.hasAttribute('data-reset')){reset();window.scrollTo({top:0})}
 else if(el.dataset.action){const {id,action}=el.dataset;if(action==='comments'){state.comments.has(id)?state.comments.delete(id):state.comments.add(id)}else if(action==='expand'){state.expanded.has(id)?state.expanded.delete(id):state.expanded.add(id)}else {return}render();document.querySelector(`[data-action="${action}"][data-id="${id}"]`)?.focus({preventScroll:true});}
 else if(el.dataset.jump){reset();state.expanded.add(el.dataset.jump);render();document.querySelector(`#post-${el.dataset.jump}`).scrollIntoView({behavior:'smooth',block:'start'});}
});
const searchBox=document.querySelector('.search-box'),search=document.querySelector('#search'),searchToggle=document.querySelector('.search-toggle');
searchToggle.addEventListener('click',()=>{searchBox.hidden=!searchBox.hidden;searchToggle.setAttribute('aria-expanded',!searchBox.hidden);if(!searchBox.hidden)search.focus();else{search.value='';state.query='';render()}});
search.addEventListener('input',()=>{state.query=search.value;render()});
document.addEventListener('keydown',event=>{if(event.key==='/'&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName)&&!document.querySelector('dialog[open]')){event.preventDefault();searchBox.hidden=false;searchToggle.setAttribute('aria-expanded','true');search.focus()}if(event.key==='Escape'&&document.activeElement===search){search.value='';state.query='';searchBox.hidden=true;searchToggle.setAttribute('aria-expanded','false');searchToggle.focus();render()}});
const dialog=document.querySelector('#coverage-dialog');
document.querySelector('#coverage').onclick=()=>dialog.showModal();document.querySelector('#about-mobile').onclick=()=>dialog.showModal();document.querySelector('#coverage-dialog .dialog-close').onclick=()=>dialog.close();
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close()}});
document.querySelector('#back-top').onclick=()=>window.scrollTo({top:0,behavior:'smooth'});

document.querySelector('#my-ratings').onclick=showRatings;
document.querySelector('#close-ratings').onclick=()=>document.querySelector('#rating-dialog').close();
document.querySelector('#copy-ratings').onclick=copyRatings;
updateRatingCount();
const latest=issues[0];
const day=new Date(latest.date+'T12:00:00+08:00');
document.querySelector('.feed-header .eyebrow').textContent=latest.date+' · 每日业界';
document.querySelector('.edition').textContent='VOL. '+String(latest.edition).padStart(3,'0');
document.querySelector('.editor-note h2').textContent=latest.title;
document.querySelector('.editor-note p').textContent=latest.intro;
document.querySelector('.note-meta').innerHTML=`<span>${esc(latest.date)}</span><span>本期 ${latest.count} 条精选 · 每天更新</span>`;
document.querySelector('.issue-date strong').textContent=latest.date.slice(8);
document.querySelector('.issue-date>div').innerHTML=`${day.getFullYear()} 年 ${day.getMonth()+1} 月<small>第 ${latest.edition} 期 · 每日更新</small>`;
document.querySelector('.issue-stats b').textContent=data.length;
document.querySelector('.count').textContent=data.length+cases.length;
document.querySelector('#learning-count').textContent=cases.length;
document.querySelector('#updated-label').textContent='更新于 '+window.FEED_META.updatedAt.slice(5,16).replace('T',' ')+'（北京）';
document.querySelector('#issue-select').innerHTML='<option value="all">全部期数</option>'+issues.map(i=>`<option value="${esc(issueKey(i))}">${esc(i.label||i.date)} · ${i.count} 条</option>`).join('');
document.querySelector('#issue-select').value=state.issue;
document.querySelector('#issue-select').onchange=e=>{state.issue=e.target.value;render()};
document.querySelector('#coverage-copy').innerHTML=issues.map(i=>`<h3>${esc(i.label||i.date)}</h3><p>${esc(i.coverage)}</p>`).join('');
document.querySelector('#trends').innerHTML=data.filter(p=>p.issueDate===issueKey(latest)&&((p.comments||[]).length||(p.images||[]).length)).slice(0,3).map((p,i)=>`<button class="trend" data-jump="${esc(p.id)}"><em>0${i+1}</em><div>${esc(p.title)}<small>${esc(p.source)}${p.comments.length?' · 有评论补充':' · 有原文配图'}</small></div></button>`).join('');
const imageDialog=document.querySelector('#image-dialog');
document.querySelector('.image-close').onclick=()=>imageDialog.close();
imageDialog.addEventListener('click',e=>{if(e.target===imageDialog)imageDialog.close()});
// 精确枚举一个位置的概率；不调用模型，不模拟实测加速。
function speculativeDistribution(pA, qA, mode) {
  if (![pA,qA].every(x=>Number.isFinite(x)&&x>=0&&x<=1)) throw new RangeError('概率必须在 0 到 1 之间');
  if (!['draft','resample','residual'].includes(mode)) throw new RangeError('未知的校正方式');
  const p=[pA,1-pA],q=[qA,1-qA];
  const acceptance=q.map((value,i)=>value===0?0:Math.min(1,p[i]/value));
  const accepted=q.map((value,i)=>value*acceptance[i]);
  const reject=Math.max(0,1-accepted[0]-accepted[1]);
  const deficit=p.map((value,i)=>Math.max(value-q[i],0));
  const deficitSum=deficit[0]+deficit[1];
  const correction=mode==='draft'?[0,0]:mode==='resample'?p.map(x=>reject*x):deficit.map(x=>deficitSum>0?reject*x/deficitSum:0);
  const output=mode==='draft'?[...q]:accepted.map((x,i)=>x+correction[i]);
  return {p,q,acceptance,accepted,reject,correction,output,error:Math.abs(output[0]-pA)};
}

const $=s=>document.querySelector(s);let labMode='draft',labQ=.8;
function speculativeLab(){return `<section class="method-lab" aria-label="推测采样概率实验"><div class="lab-intro"><span>一个可核算的反例</span><strong>目标：A 60% · B 40%</strong></div><div class="lab-question">选择草稿分布 q(A)：</div><div class="lab-presets" role="group" aria-label="草稿分布">${[.8,.6,.3].map(v=>`<button data-q="${v}" aria-pressed="${v===labQ}" class="${v===labQ?'selected':''}">${v*100}%${v===.6?'（与目标相同）':''}</button>`).join('')}</div><div class="lab-question">换一种设计，看最终分布是否仍是 60% / 40%：</div><div class="lab-modes" role="group" aria-label="校正方式"><button data-mode="draft" aria-pressed="true" class="selected"><b>01</b>直接采用草稿</button><button data-mode="resample" aria-pressed="false"><b>02</b>拒绝后按原目标重采样</button><button data-mode="residual" aria-pressed="false"><b>03</b>拒绝后只补概率缺口</button></div><div id="lab-result" aria-live="polite"></div><small class="lab-note">A、B 及概率均为教学设定。结果由公式精确计算；它展示单位置校正机制，不运行模型，也不测量速度。</small></section>`}
const percent=x=>`${(x*100).toFixed(1).replace(/\.0$/,'')}%`;
function updateLab(){const r=speculativeDistribution(.6,labQ,labMode);document.querySelectorAll('[data-mode]').forEach(b=>{b.classList.toggle('selected',b.dataset.mode===labMode);b.setAttribute('aria-pressed',String(b.dataset.mode===labMode))});document.querySelectorAll('[data-q]').forEach(b=>{b.classList.toggle('selected',Number(b.dataset.q)===labQ);b.setAttribute('aria-pressed',String(Number(b.dataset.q)===labQ))});
const rows=labMode==='draft'?[['草稿 q',r.q],['最终输出',r.output],['目标 p',r.p]]:[['草稿 q',r.q],['条件接受率 min(1,p/q)',r.acceptance],['接受路径贡献 q×接受率',r.accepted],['拒绝后补回的贡献',r.correction],['最终输出',r.output],['目标 p',r.p]];
let explain=labMode==='draft'?`直接采用草稿，最终比例就是 ${percent(r.q[0])} / ${percent(r.q[1])}。便宜，但${r.error<1e-10?'这次恰好与目标一致，因为 q=p。':'改变了目标分布。'}`:labMode==='resample'?`接受路径已经贡献 A ${percent(r.accepted[0])}、B ${percent(r.accepted[1])}。剩下 ${percent(r.reject)} 的拒绝概率若再按 60% / 40% 分配，会额外给 A ${percent(r.correction[0])}、B ${percent(r.correction[1])}。${r.reject<1e-10?'此次无需拒绝，因此没有差别。':'这会重复补给已经够量的一边。'}`:`先保留双方重叠的概率 min(p,q)，再把拒绝概率补给 max(p−q,0) 对应的缺口。${r.reject<1e-10?'此次 q=p，没有缺口，也不需要补偿。':`这个例子中，补给 A ${percent(r.correction[0])}、B ${percent(r.correction[1])}，恰好回到目标。`}`;
$('#lab-result').innerHTML=`<div class="probability-result ${r.error<1e-10?'matched':'mismatched'}"><span>最终输出</span><strong>A ${percent(r.output[0])} <i>／</i> B ${percent(r.output[1])}</strong><span>${r.error<1e-10?'✓ 与目标分布一致':`与目标相差 ${(r.error*100).toFixed(1).replace(/\.0$/,'')} 个百分点`}</span></div><div class="table-scroll"><table><caption>逐项核对概率贡献</caption><thead><tr><th scope="col">计算项</th><th scope="col">A</th><th scope="col">B</th></tr></thead><tbody>${rows.map(row=>`<tr><th scope="row">${row[0]}</th><td>${percent(row[1][0])}</td><td>${percent(row[1][1])}</td></tr>`).join('')}</tbody></table></div><p class="lab-explanation">${explain}</p>`}

render();
