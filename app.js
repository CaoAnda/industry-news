const icons = {
 home:'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',
 search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
 info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v.1"/>',
 close:'<path d="m6 6 12 12M6 18 18 6"/>',
 calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18m-13 5h3"/>',
 down:'<path d="m7 10 5 5 5-5"/>',
 up:'<path d="m7 14 5-5 5 5"/>',
 link:'<path d="M14 3h7v7m-12 5L21 3M10 5H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/>',
 inbox:'<path d="M3 13 6 4h12l3 9v7H3zM3 13h5l2 3h4l2-3h5"/>'
};
const icon = name => `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[name] || icons.info}</svg>`;
document.querySelectorAll('[data-icon]').forEach(el => el.innerHTML = icon(el.dataset.icon));
const data = window.FEED_DATA;
const issues=window.FEED_ISSUES;
const issueKey=i=>i.id||i.date;
const issueLabel=id=>{const i=issues.find(x=>issueKey(x)===id);return i?(i.label||i.date):id};
const state = {filter:'all',topic:'',sort:'curated',query:'',expanded:new Set(),comments:new Set(),issue:issueKey(issues[0])};
const feed = document.querySelector('#feed');
const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
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
 </article>`;
}
function render(){
 let visible=data.filter(p=>(state.filter==='all'||state.filter===p.channel)&&(state.issue==='all'||p.issueDate===state.issue)&&(!state.topic||state.topic===p.topic));
 if(state.query.trim()){const query=state.query.trim().toLocaleLowerCase();visible=visible.filter(p=>[p.title,p.source,p.summary,p.body,p.detailLabel,...p.tags,...(p.comments||[]).map(c=>c.text+' '+c.author)].join(' ').toLocaleLowerCase().includes(query))}
 if(state.sort==='latest')visible.sort((a,b)=>b.date.localeCompare(a.date));
 feed.innerHTML=visible.length?visible.map((p,i)=>(state.sort==='curated'&&state.issue==='all'&&(i===0||visible[i-1].issueDate!==p.issueDate)?`<div class="date-divider"><span>${esc(issueLabel(p.issueDate))}${p.issueDate===issueKey(issues[0])?' · 最新一期':' · 往期'}</span></div>`:'')+postHTML(p)).join(''):`<div class="empty">${icon('inbox')}<h2>暂时没有匹配的内容。</h2><p>试试其他关键词，或者清除筛选。</p><button data-reset>回到全部内容 →</button></div>`;
 feed.querySelectorAll('.post-media img').forEach(img=>img.addEventListener('error',()=>{const button=img.closest('button');button.disabled=true;button.classList.add('image-failed');button.innerHTML='<span>图片暂时无法显示，请从图源查看</span>'}));
 document.querySelector('.result-count').textContent=`${visible.length} 条内容`;
 const current=issues.find(i=>issueKey(i)===state.issue)||issues[0];
 document.querySelector('.editor-note h2').textContent=current.title;
 document.querySelector('.editor-note p').textContent=current.intro;
 document.querySelector('.edition').textContent='VOL. '+String(current.edition).padStart(3,'0');
 document.querySelector('.note-meta').innerHTML=`<span>${esc(current.label||current.date)}</span><span>本期 ${current.count} 条精选 · 每天更新</span>`;
 document.querySelectorAll('[data-filter]').forEach(el=>{el.classList.toggle('active',el.dataset.filter===state.filter);el.setAttribute('aria-pressed',el.dataset.filter===state.filter)});
 document.querySelectorAll('[data-sort]').forEach(el=>{el.classList.toggle('active',el.dataset.sort===state.sort);el.setAttribute('aria-pressed',el.dataset.sort===state.sort)});
 const topic=document.querySelector('#topic-filter');topic.hidden=!state.topic;topic.innerHTML=`正在看：${esc(state.topic)}<button data-clear-topic aria-label="清除话题筛选">× 清除</button>`;
 document.querySelector('.feed-footer').hidden=!visible.length;
}
function reset(){state.filter='all';state.topic='';state.query='';state.issue='all';document.querySelector('#issue-select').value='all';document.querySelector('#search').value='';render()}
document.addEventListener('click',event=>{
 const el=event.target.closest('button');if(!el)return;
 if(el.dataset.picture){const p=data.find(p=>p.id===el.dataset.picture),pic=p.images[Number(el.dataset.index)];document.querySelector('#large-image').src=pic.src;document.querySelector('#large-image').alt=pic.alt;document.querySelector('#large-caption').textContent=pic.caption+' 图源：'+pic.credit;document.querySelector('#large-source').href=pic.sourceUrl;document.querySelector('#image-dialog').showModal();}
 else if(el.hasAttribute('data-home')){state.issue=issueKey(issues[0]);document.querySelector('#issue-select').value=state.issue;state.filter='all';state.topic='';state.query='';document.querySelector('#search').value='';render();window.scrollTo({top:0});}
 else if(el.dataset.filter){state.filter=el.dataset.filter;render();}
 else if(el.dataset.sort){state.sort=el.dataset.sort;render();}
 else if(el.dataset.topic){state.topic=el.dataset.topic;state.filter='all';render();document.querySelector('.controls').scrollIntoView({block:'start'});}
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
document.querySelector('.count').textContent=data.length;
document.querySelector('#image-count').textContent=data.reduce((n,p)=>n+(p.images||[]).length,0);
document.querySelector('#updated-label').textContent='更新于 '+window.FEED_META.updatedAt.slice(5,16).replace('T',' ')+'（北京）';
document.querySelector('#issue-select').innerHTML='<option value="all">全部期数</option>'+issues.map(i=>`<option value="${esc(issueKey(i))}">${esc(i.label||i.date)} · ${i.count} 条</option>`).join('');
document.querySelector('#issue-select').value=state.issue;
document.querySelector('#issue-select').onchange=e=>{state.issue=e.target.value;render()};
document.querySelector('#coverage-copy').innerHTML=issues.map(i=>`<h3>${esc(i.label||i.date)}</h3><p>${esc(i.coverage)}</p>`).join('');
document.querySelector('#trends').innerHTML=data.filter(p=>p.issueDate===issueKey(latest)&&((p.comments||[]).length||(p.images||[]).length)).slice(0,3).map((p,i)=>`<button class="trend" data-jump="${esc(p.id)}"><em>0${i+1}</em><div>${esc(p.title)}<small>${esc(p.source)}${p.comments.length?' · 有评论补充':' · 有原文配图'}</small></div></button>`).join('');
const imageDialog=document.querySelector('#image-dialog');
document.querySelector('.image-close').onclick=()=>imageDialog.close();
imageDialog.addEventListener('click',e=>{if(e.target===imageDialog)imageDialog.close()});
render();
