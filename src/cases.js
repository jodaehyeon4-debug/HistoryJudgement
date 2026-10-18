/* ===== 사건 3~10 공통 틀: 학습 데이터, 혐의 카드, 그림자 연출, 용어 카드, 판사 모드 도구, 사건 진행 ===== */

/* ---------- 학습 데이터 (공통 규칙 2장) ----------
   {t, sid, case, role, day, kind, detail} 를 기기 안에만 쌓는다. 실명은 받지 않고 학급 번호나 별명만.
   교사가 내려받을 때만 밖으로 나간다 (CSV). */
const EVKEY='yj-events', EVMAX=12000;
function loadEvents(){ try{ return JSON.parse(store.get(EVKEY)||'[]')||[]; }catch(e){ return []; } }
function track(kind,detail){
  try{
    const E=loadEvents();
    E.push({t:Date.now(),sid:store.get('yj-sid')||'',case:S.case||1,role:S.role||(S.me==='rival'?'def':S.me==='daon'?'judge':'pros'),day:S.day||S.phase||0,kind:kind,detail:detail||{}});
    if(E.length>EVMAX) E.splice(0,E.length-EVMAX);
    store.set(EVKEY,JSON.stringify(E));
  }catch(e){}
}
const KIND_KO={start:'시작',move:'장소 이동',inv_look:'조사',inv_miss:'헛짚음',ev_found:'증거 얻음',hint_place:'장소 힌트',talk:'이야기',show:'보여 주기',press:'더 묻기',present:'증거 제시',hint_line:'해치 힌트',choice:'고르기',reason:'판결 이유',pick:'증거 고르기',zoom:'증거 확대',observe:'버릇 살피기',claim:'주장 가르기',term:'용어 카드',day_end:'하루 끝',impression:'피고 인상',lose:'방울 모두 깨짐',case_end:'사건 끝',shadow_replay:'그림자 다시 보기'};
function csvCell(v){ const s=String(v===undefined||v===null?'':v); return /[",\n]/.test(s)?'"'+s.replace(/"/g,'""')+'"':s; }
function eventsCSV(E){
  const head=['시각','번호_별명','사건','역할','일차','종류','종류_한글','내용'];
  const pad=n=>String(n).padStart(2,'0');
  const ts=t=>{ const d=new Date(t); return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`; };
  return '﻿'+[head.join(',')].concat(E.map(e=>[ts(e.t),e.sid,e.case,e.role,e.day,e.kind,KIND_KO[e.kind]||e.kind,JSON.stringify(e.detail)].map(csvCell).join(','))).join('\n');
}
const ROLE_KO={pros:'검사',def:'변호인',judge:'판사'};
/* 학생별 요약: 며칠째, 어디서 막혔는지 */
function eventSummary(E){
  const G={};
  E.forEach(e=>{ const k=(e.sid||'(이름표 없음)')+'|'+e.case+'|'+e.role; const g=G[k]||(G[k]={sid:e.sid||'(이름표 없음)',case:e.case,role:e.role,day:0,miss:{},wrong:{},hints:0,first:e.t,last:e.t,end:null,imp:[]});
    g.day=Math.max(g.day,+e.day||0); g.last=Math.max(g.last,e.t); g.first=Math.min(g.first,e.t);
    if(e.kind==='inv_miss') g.miss[e.detail.loc]=(g.miss[e.detail.loc]||0)+1;
    if(e.kind==='present'&&!e.detail.ok){ const w=(e.detail.key||'증언')+' '+e.detail.line+'번째 말'; g.wrong[w]=(g.wrong[w]||0)+1; }
    if(e.kind==='claim'&&!e.detail.ok){ const w='주장 가르기'; g.wrong[w]=(g.wrong[w]||0)+1; }
    if(e.kind==='hint_line'||e.kind==='hint_place') g.hints++;
    if(e.kind==='impression') g.imp.push(({good:'좋다',unsure:'모르겠다',bad:'나쁘다',skip:'-'})[e.detail.v]||'-');
    if(e.kind==='case_end') g.end=e.detail.grade||'끝냄'; });
  const top=o=>{ const a=Object.entries(o).sort((x,y)=>y[1]-x[1])[0]; return a?`${a[0]} (${a[1]}번)`:'-'; };
  return Object.values(G).sort((a,b)=>b.last-a.last).map(g=>({sid:g.sid,cr:`사건 ${g.case} · ${ROLE_KO[g.role]||g.role}`,day:g.end?'끝냄':(g.day?g.day+'일차':'-'),miss:top(g.miss),wrong:top(g.wrong),hints:g.hints,imp:g.imp.join('→')||'-',end:g.end||'-',mins:Math.max(1,Math.round((g.last-g.first)/60000))}));
}
function teacherDataHTML(){
  const E=loadEvents(), sum=eventSummary(E);
  return `<h3>학습 데이터 (이 기기)</h3>
    <p class="lead">학생의 조사·추궁·판단을 사건·날짜·행동 단위로 이 기기 안에만 모읍니다. 이름 대신 첫 화면의 <b>번호나 별명</b>으로 저장합니다. 지금 ${E.length}개의 기록이 있어요.</p>
    ${sum.length?`<div class="tblwrap"><table class="tbl-sm"><thead><tr><th>번호·별명</th><th>사건·역할</th><th>며칠째</th><th>가장 많이 헤맨 곳</th><th>가장 많이 틀린 곳</th><th>힌트</th><th>피고 인상 변화</th><th>걸린 시간</th></tr></thead><tbody>
      ${sum.map(r=>`<tr><td>${esc(r.sid)}</td><td>${esc(r.cr)}</td><td>${esc(r.day)}</td><td>${esc(r.miss)}</td><td>${esc(r.wrong)}</td><td>${r.hints}</td><td>${esc(r.imp)}</td><td>${r.mins}분</td></tr>`).join('')}</tbody></table></div>`:'<p>아직 모인 기록이 없어요.</p>'}
    <div class="sheet-foot" style="justify-content:flex-start"><button class="abtn" type="button" id="tCsv">CSV 내려받기</button><button class="abtn" type="button" id="tClear">이 기기의 기록 지우기</button></div>`;
}
function bindTeacherData(){
  const b=$('#tCsv'); if(b) b.addEventListener('click',()=>{
    const csv=eventsCSV(loadEvents()), sid=(store.get('yj-sid')||'기기').replace(/[^\w가-힣-]/g,'_');
    const d=new Date(), name=`역사재판_학습데이터_${sid}_${d.getFullYear()}${String(d.getMonth()+1).padStart(2,'0')}${String(d.getDate()).padStart(2,'0')}.csv`;
    try{ const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'})); const a=document.createElement('a'); a.href=url; a.download=name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(url),2000); }catch(e){}
  });
  const c=$('#tClear'); if(c) c.addEventListener('click',()=>{ let ok=false; try{ ok=window.confirm('이 기기에 쌓인 학습 데이터를 모두 지울까요? 먼저 CSV로 내려받아 두세요.'); }catch(e){} if(ok){ store.set(EVKEY,'[]'); openTeacher(); } });
}

/* ---------- 알림과 용어 카드 ---------- */
function toast(msg){ const t=$('#toast'); if(!t) return; t.hidden=true; void t.offsetWidth; t.textContent=msg; t.hidden=false; clearTimeout(toast._t); toast._t=setTimeout(()=>{ t.hidden=true; },2300); }
function noteTerms(text){
  const D=CASE_DATA[S.case]; if(!D||!D.terms||!S.terms) return;
  const p=plain(text);
  D.terms.forEach(x=>{ if(!S.terms.has(x.w) && p.includes(x.w)){ S.terms.add(x.w); track('term',{w:x.w}); toast(`📖 새 용어 카드: ${x.w}`); } });
}

/* ---------- 혐의 카드·용의 카드: 화면 위에 늘 띄움 ---------- */
const CH_ST={'':'다투는 중',guilty:'유죄',partial:'일부 유죄',innocent:'무죄',dropped:'취하',held:'판단 보류',sus:'의심',clear:'아님',defendant:'피고'};
function setCharges(list,label){
  S.charges=list?{label:label||'혐의',list:list}:null;
  const el=$('#cards'); if(!el) return;
  if(!list){ el.hidden=true; el.innerHTML=''; return; }
  el.hidden=false;
  el.innerHTML=`<span class="ch-h">${esc(S.charges.label)}</span>`+list.map(c=>`<span class="ch s-${c.st||'open'}">${esc(c.t)}<i>${CH_ST[c.st||'']||c.st}</i>${c.note?`<small>${esc(c.note)}</small>`:''}</span>`).join('');
}
function chargeSt(i,st,note){ if(!S.charges) return; const c=S.charges.list[i]; if(!c) return; c.st=st; if(note!==undefined) c.note=note; setCharges(S.charges.list,S.charges.label); }

/* ---------- 그림자 연출 (공통 규칙 1장): 실루엣과 소리만, 3~5초, 끝은 검은 화면 ---------- */
const SH=`<svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">`;
function shPerson(x,y,k,o){ o=o||{}; k=k||1; const c=o.c||'#000';
  const head=`<circle cx="0" cy="-150" r="30" fill="${c}"/>`;
  const plume=o.plume?`<path d="M0,-180 C20,-240 70,-250 92,-226 C60,-226 34,-206 18,-176 Z" fill="${c}"/>`:'';
  const helm=o.helm?`<path d="M-34,-150 C-34,-196 34,-196 34,-150 Z" fill="${c}"/>`:'';
  const body=o.seated?`<path d="M-44,-118 L44,-118 L58,-30 L90,-30 L90,0 L-60,0 L-52,-60 Z" fill="${c}"/>`:o.lying?'':`<path d="M-40,-118 L40,-118 L52,0 L16,0 L10,80 L-10,80 L-16,0 L-52,0 Z" fill="${c}"/>`;
  const armUp=o.armUp?`<path d="M30,-110 L74,-200 L86,-194 L46,-104 Z" fill="${c}"/>`:'';
  const spear=o.spear?`<rect x="${o.spear>0?44:-50}" y="-290" width="7" height="370" fill="${c}"/><path d="M${o.spear>0?47.5:-46.5},-320 l-12,34 h24 Z" fill="${c}"/>`:'';
  const bowl=o.bowl?`<path d="M40,-92 h56 c0,22 -12,32 -28,32 c-16,0 -28,-10 -28,-32 Z" fill="${c}"/>`:'';
  const shovel=o.shovel?`<rect x="40" y="-150" width="7" height="200" fill="${c}" transform="rotate(25 44 -50)"/><path d="M70,40 l30,12 l-14,34 l-30,-12 Z" fill="${c}"/>`:'';
  const torch=o.torch?`<rect x="44" y="-210" width="8" height="120" fill="${c}"/><ellipse cx="48" cy="-226" rx="16" ry="26" fill="#ff9a3a" opacity=".9"/>`:'';
  const arms=o.manse?`<path d="M-30,-112 L-58,-230 L-44,-234 L-18,-118 Z M30,-112 L58,-230 L44,-234 L18,-118 Z" fill="${c}"/>`:'';
  const lying=o.lying?`<rect x="-150" y="-40" width="300" height="46" rx="22" fill="${c}"/><circle cx="-170" cy="-24" r="28" fill="${c}"/>`:'';
  return `<g class="fig" transform="translate(${x},${y}) scale(${k})"${o.id?` id="${o.id}"`:''}>${o.lying?lying:head+helm+plume+body+armUp+spear+bowl+shovel+torch+arms}</g>`;
}
const SHADOWS={
  gwansan:{cap:'554년, 관산성 골짜기',bg:['#3b2a2a','#140c0c'],
    draw:()=>`<path d="M0,620 C300,560 500,700 800,640 C1100,580 1300,700 1600,620 L1600,900 L0,900 Z" fill="#0d0808"/>`+
      `<g class="fig" id="rider" transform="translate(800,640)"><path d="M-110,-40 C-90,-90 60,-100 110,-60 L130,-110 L150,-104 L134,-40 L120,40 L100,40 L96,0 L-70,0 L-76,40 L-96,40 Z" fill="#000"/>${shPerson(0,-60,0.75,{helm:true})}</g>`+
      [180,330,1270,1420].map((x,i)=>`<g class="fig sp" data-x="${x<800?1:-1}">${shPerson(x,700,1,{spear:x<800?1:-1,helm:true})}</g>`).join(''),
    seq:[[300,'clash'],[1200,'clash'],[1900,'step'],[2600,'thud']],move:(svg)=>{ svg.querySelectorAll('.sp').forEach(g=>{ g.style.transform=`translateX(${(+g.dataset.x)*240}px)`; }); },cut:3600},
  poseok:{cap:'927년 겨울, 포석정',bg:['#2a2e3e','#0b0c14'],
    draw:()=>`<path d="M300,760 C500,700 700,820 900,740 C1100,680 1200,800 1350,760" stroke="#000" stroke-width="40" fill="none" opacity=".8"/>`+shPerson(800,700,1,{seated:true})+
      [260,420,1180,1340].map(x=>`<g class="fig sp" data-x="${x<800?1:-1}">${shPerson(x,720,1,{spear:x<800?1:-1,helm:true})}</g>`).join('')+
      `<g class="fig" id="tall" style="opacity:0">${shPerson(1080,700,1.35,{helm:true,plume:true,armUp:true})}</g>`,
    seq:[[400,'step'],[1500,'murmur'],[2600,'thud']],move:(svg)=>{ svg.querySelectorAll('.sp').forEach(g=>{ g.style.transform=`translateX(${(+g.dataset.x)*170}px)`; }); setTimeout(()=>{ const t=svg.querySelector('#tall'); if(t) t.style.opacity=1; },1300); },cut:3500,after:'plume'},
  emptypalace:{cap:'텅 빈 개경의 궁궐',bg:['#2e2a24','#0e0c0a'],
    draw:()=>`<rect x="640" y="420" width="320" height="300" fill="#000" opacity=".85"/><path d="M600,420 L800,330 L1000,420 Z" fill="#000" opacity=".85"/><rect x="760" y="560" width="80" height="120" fill="#2e2a24"/>`,
    seq:[[100,'wind'],[2400,'wind']],cut:4000},
  door:{cap:'1618년, 서궁',bg:['#2a2620','#0c0a08'],
    draw:()=>`<rect x="420" y="160" width="760" height="620" fill="#000" opacity=".9"/><g class="fig" id="dl" style="transform-origin:420px 470px"><rect x="420" y="160" width="380" height="620" fill="#1a1410"/></g><g class="fig" id="dr" style="transform-origin:1180px 470px"><rect x="800" y="160" width="380" height="620" fill="#1a1410"/></g>`+shPerson(800,760,0.9,{}),
    seq:[[200,'step'],[1400,'door']],move:(svg)=>{ const a=svg.querySelector('#dl'), b=svg.querySelector('#dr'); if(a) a.style.transform='scaleX(1)'; if(b) b.style.transform='scaleX(1)'; },pre:(svg)=>{ const a=svg.querySelector('#dl'), b=svg.querySelector('#dr'); if(a) a.style.transform='scaleX(.08)'; if(b) b.style.transform='scaleX(.08)'; },cut:3300},
  sickbed:{cap:'1645년 봄 밤, 세자의 거처',bg:['#1e2230','#07080e'],
    draw:()=>shPerson(760,700,1,{lying:true})+`<g class="fig" id="bowl" style="transform:translateX(420px)">${shPerson(1000,700,1.1,{bowl:true})}</g>`,
    seq:[[600,'cough'],[1900,'cough'],[2700,'gasp']],move:(svg)=>{ const b=svg.querySelector('#bowl'); if(b) b.style.transform='translateX(0)'; },cut:3900},
  graves:{cap:'1868년 밤, 남연군 묘',bg:['#22281e','#080a06'],
    draw:()=>`<path d="M520,720 C620,560 980,560 1080,720 Z" fill="#000"/>`+[380,560,1040,1220].map(x=>`<g class="fig dig">${shPerson(x,760,0.9,{shovel:true})}</g>`).join('')+`<g class="fig" id="torch" style="opacity:0;transform:translateX(300px)">${shPerson(1480,760,1,{torch:true})}${shPerson(1380,760,1,{torch:true})}</g>`,
    seq:[[200,'shovel'],[1600,'shovel'],[2400,'step'],[3000,'step']],move:(svg)=>{ setTimeout(()=>{ const t=svg.querySelector('#torch'); if(t){ t.style.opacity=1; t.style.transform='translateX(0)'; } setTimeout(()=>svg.querySelectorAll('.dig').forEach((g,i)=>{ g.style.transform=`translateX(${i<2?-500:500}px)`; g.style.opacity=0; }),900); },1500); },cut:4300},
  manse:{cap:'1919년 3월',bg:['#2c2f3a','#0d0e14'],
    draw:()=>`<rect x="650" y="220" width="300" height="420" fill="#000" opacity=".8"/><path d="M720,640 V420 C720,330 880,330 880,420 V640 Z" fill="#2c2f3a"/>`+Array.from({length:16},(_,i)=>`<g class="fig wave" style="opacity:0;transition-delay:${i*90}ms">${shPerson(60+i*100,820+(i%2)*30,0.8,{manse:true})}</g>`).join(''),
    seq:[[300,'cheer'],[2400,'cheer']],move:(svg)=>{ svg.querySelectorAll('.wave').forEach(g=>{ g.style.opacity=1; }); },cut:4400},
  emptyroom:{cap:'빈 방',bg:['#26221e','#0b0a09'],
    draw:()=>`<rect x="560" y="260" width="480" height="380" fill="#000" opacity=".6"/><rect x="600" y="300" width="180" height="300" fill="#26221e" opacity=".7"/><rect x="820" y="300" width="180" height="300" fill="#26221e" opacity=".7"/>`,
    seq:[[100,'wind']],cut:3300}
};
function playShadow(kind,replay){
  const D=SHADOWS[kind]; if(!D) return Promise.resolve();
  if(!replay){ S.hist=S.hist||[]; S.hist.push({n:'장면',t:`(그림자 장면) ${D.cap}`,c:'thought',shadow:kind}); }
  const el=$('#shadow'); controlsEl.hidden=true;
  el.innerHTML=SH+`<defs>${lg('shg',[[0,D.bg[0]],[1,D.bg[1]]])}</defs><rect width="1600" height="900" fill="url(#shg)"/>${D.draw()}</svg><div class="sh-cap">${esc(D.cap)}</div>`;
  el.className='shadow'; el.hidden=false; Music.stop(0.4);
  const svg=el.querySelector('svg'); if(D.pre) D.pre(svg);
  if(window.__yjFast) return new Promise(r=>setTimeout(()=>{ el.hidden=true; el.innerHTML=''; r(); },20));
  return new Promise(res=>{
    const timers=[]; let done=false;
    const fin=()=>{ if(done) return; done=true; timers.forEach(clearTimeout); el.classList.add('cut'); setTimeout(()=>{ el.hidden=true; el.className='shadow'; el.innerHTML=''; skipCurrent=null; res(); },D.after==='plume'?1300:420);
      if(D.after==='plume') setTimeout(()=>{ el.classList.remove('cut'); el.innerHTML=SH+`<rect width="1600" height="900" fill="#000"/><path d="M700,520 C760,360 900,330 960,380 C880,390 820,440 790,520 Z" fill="#7a1f1a" opacity=".85"/></svg><div class="sh-cap">…붉은 꿩 깃털</div>`; },450); };
    timers.push(setTimeout(()=>{ if(D.move) D.move(svg); },80));
    D.seq.forEach(s=>timers.push(setTimeout(()=>Music.sting(s[1]),s[0])));
    timers.push(setTimeout(fin,D.cut));
    el.onclick=fin; skipCurrent=fin;
  });
}

/* 그림이 없는 프롤로그·장면용 어두운 배경 */
function darkBG(a,b){ return SV+`<defs>${lg('dkbg',[[0,a],[1,b]])}</defs><rect width="1600" height="900" fill="url(#dkbg)"/><rect y="700" width="1600" height="200" fill="#000" opacity=".25"/></svg>`; }
const sceneView=(a,b)=>({bg:darkBG(a,b),desk:'',pos:['50%','-4%','96%'],posImg:['50%','-6%','94%']});
const prologueView=(a,b)=>({bg:darkBG(a,b),desk:'',pos:['50%','0%','90%'],nochar:true});
async function gotEv(id,msg){ if(S.found.has(id)) return; S.found.add(id); Music.sting('get'); track('ev_found',{id:id,from:'scene'}); showEvidence(id); await say('guide','normal',msg||`증거 수첩에 [[${EV_BY_ID[id].title}]]을(를) 넣었다.`); hideEvidence(); }
/* 결과용: 어떤 증언에서 처음 맞힌 증거 */
function firstHit(key){ const x=(S.log||[]).find(l=>l.ok&&String(l.line).startsWith(key+' ')); return x?x.card:null; }

/* ---------- 인물 더하기 (그림이 없으면 코드 그림으로 대신) ---------- */
function addCast(id,o){
  CAST[id]=Object.assign({name:o.name},o.spec||{skin:'#e8c4a0',robe:'#5a6a80',robe2:'#3e4a5c',collar:'cross',hat:'short',hair:'#1c1a20',beard:'none',iris:'#3a2a20'});
  NAMES[id]=o.label||o.name; VIEW_OF[id]=o.view||'witness'; ACTION_COL[id]=o.col||'#5a4a3a';
}
NAMES.daon='다온 판사'; VIEW_OF.daon='judge'; ACTION_COL.daon='#3a2f55';

/* ---------- 사건 등록과 저장 ---------- */
function regCase(n,def){
  CASE_DATA[n]=def; def.ev.forEach(e=>{ if(!e.icon) e.icon='scroll'; });
  const i=CASES.findIndex(c=>c.n===n), c={n:n,t:def.title,d:def.desc,ready:Object.keys(def.roles),main:def.main,lead:def.lead,locked:def.locked};
  if(i>=0) CASES[i]=c; else CASES.push(c);
  CASES.sort((a,b)=>a.n-b.n);
  if(def.views) Object.assign(VIEWS,def.views);
}
const SAVEX=(n,role)=>`yj-story-${n}-${role}`;
function hasSaveX(n,role){ try{ const v=JSON.parse(store.get(SAVEX(n,role))||'null'); return v&&v.phase?v:null; }catch(e){ return null; } }
function clearSaveX(n,role){ try{ localStorage.removeItem(SAVEX(n,role)); }catch(e){} }
function phaseNameX(p){ return `${Math.ceil(p/2)}일차 ${p%2?'조사':'법정'}`; }
function saveAtX(phase){
  store.set(SAVEX(S.case,S.role),JSON.stringify({phase:phase,found:[...S.found],seen:[...(S.seen||[])],trust:S.trust,misses:S.misses||0,presses:S.presses||0,log:S.log||[],used:[...(S.used||[])],talked:[...(S.talked||[])],unlocked:[...(S.unlocked||[])],
    flags:S.flags||{},terms:[...(S.terms||[])],zoomed:[...(S.zoomed||[])],plums:[...(S.plums||[])],observes:S.observes||0,charges:S.charges,when:Date.now()}));
}
function startCaseX(n,role,resume){
  const D=CASE_DATA[n]; if(!D||!D.roles[role]) return;
  setCase(n); S.case=n; S.role=role;
  const sub=document.querySelector('.brand span'); if(sub) sub.textContent=`사건 ${n} 「${D.title}」`;
  prepStory(); S.case=n; S.role=role; S.me=role==='def'?'rival':role==='judge'?'daon':'player'; S.p2at=99; S.day=1;
  document.body.classList.toggle('judge-mode',role==='judge');
  let from=0; const v=resume?hasSaveX(n,role):null;
  if(v){ S.found=new Set(v.found); S.seen=new Set(v.seen||[]); S.trust=v.trust||5; S.misses=v.misses||0; S.presses=v.presses||0; S.log=v.log||[]; S.used=new Set(v.used||[]); S.talked=new Set(v.talked||[]); S.unlocked=new Set(v.unlocked||[]);
    S.flags=v.flags||{}; S.terms=new Set(v.terms||[]); S.zoomed=new Set(v.zoomed||[]); S.plums=new Set(v.plums||[]); S.observes=v.observes||0; if(v.charges) setCharges(v.charges.list,v.charges.label); renderGauge(); from=v.phase; }
  else clearSaveX(n,role);
  dayStart(); track('start',{resume:!!v,from:from});
  D.roles[role](from);
}
/* 4일 진행: 날마다 [조사] → [법정] → 하루 끝. days[i] = {inv, court, learned} */
async function playDays(days,from){
  for(let d=1;d<=days.length;d++){
    const D=days[d-1], pi=2*d-1, pc=2*d;
    if(from<=pi && D.inv){ saveAtX(pi); S.day=d; await titleCard(d+'일차','조사'); await D.inv(); }
    if(from<=pc){ saveAtX(pc); S.day=d; if(!await D.court()) return false;
      if(d<days.length){ saveAtX(pc+1); if(!await dayPause(d,D.learned)) return false; } }
  }
  return true;
}
const invDay=(d,intro)=>investigate(d,intro);

/* ---------- 법정 도구 ---------- */
async function testimony(T,title,sub){
  bgm('testimony'); await titleCard('― 증언 ―',title);
  const vis=T.lines.filter(l=>!l.hidden);
  for(let i=0;i<vis.length;i++) await say(T.who,vis[i].expr||'base',vis[i].text,{testimony:true,tag:`증언 ${i+1}/${vis.length}`});
  bgm('cross'); await titleCard('― 추궁 ―',sub||'더 묻고, 틀린 말에는 증거를 내세요');
  return runCross(T);
}
/* 고르기: 틀린 답(ok:false)은 방울 −1 후 다시. 정답이 하나가 아닌 갈림길은 모든 답에 ok:true */
async function choose(q,opts,o){
  o=o||{}; let miss=0;
  for(;;){
    const c=await choiceSheet(q,opts);
    if(c.ok!==false){ if(opts.some(x=>x.ok===false)&&!o.noGain) await gainTrust(); return c; }
    miss++; await say(o.who||'judge',o.expr||'stern',c.fb||'그 답으로는 안 되오.');
    if(miss===2&&o.hint) await say('judge','normal',o.hint);
    await loseTrust(); if(S.trust<=0){ await loseTrial(); return null; }
  }
}
/* 증거 고르기: ids 가운데 하나를 낼 때까지. 전해 들은 말·가짜 기록은 따로 꾸짖음 */
async function presentFor(lead,ids,o){
  o=o||{}; let miss=0;
  for(;;){
    S.expect=ids; if(o.allowUsed) S.allowUsed=true; const id=await pickEvidence(lead); S.expect=null; if(o.allowUsed) S.allowUsed=false;
    const ok=ids.includes(id); track('pick',{lead:lead,ev:id,ok:ok});
    if(ok){ if(!o.quiet){ showEvidence(id); await say(ME(),'present',o.say?o.say(EV_BY_ID[id]):`‘${EV_BY_ID[id].title}’입니다!`); hideEvidence(); } if(!o.noGain) await gainTrust(); return id; }
    const bad=EV_BY_ID[id]; miss++;
    if(bad&&bad.fake) await say('judge','stern','그 종이는 누가 썼는지 알 수 없소. 증거 수첩에서 [[확대해]] 보시오.');
    else if(bad&&bad.trust===1&&!o.allowHearsay) await say('judge','stern','[[전해 들은 말]]은 근거가 약하오.');
    else await say('judge','stern',o.fb||'그 증거로는 보일 수 없소.');
    if(miss===2&&o.hint) await say('judge','normal',o.hint);
    await loseTrust(); if(S.trust<=0){ await loseTrial(); return null; }
  }
}
/* 두 증거 맞대기 (증언 밖에서): 두 증거를 차례로 고른다 */
async function presentPair(lead,a,b,o){
  o=o||{};
  const first=await presentFor(lead+' (첫 번째)',[a,b],{quiet:true,noGain:true,allowUsed:true,hint:o.hint}); if(!first) return null;
  const other=first===a?b:a;
  const second=await presentFor(`‘${EV_BY_ID[first].title}’와(과) 맞댈 두 번째 증거를 고르세요.`,[other],{quiet:true,noGain:true,allowUsed:true,hint:o.hint}); if(!second) return null;
  Music.sting('realize'); showEvidence(first); await wait(500); showEvidence(second);
  await say(ME(),'present',o.say||`‘${EV_BY_ID[first].title}’와 ‘${EV_BY_ID[second].title}’을 맞대 보면…!`); hideEvidence();
  await gainTrust(); track('pair',{a:first,b:second}); return [first,second];
}
async function victim(who,lines,intro){
  Music.stop(0.8); await wait(500);
  await say('judge','normal',intro||'판결에 앞서, 피해를 입은 사람의 이야기를 듣겠습니다.');
  bgm('testimony');
  for(const x of lines) await say(who,x[0],x[1],{tag:'피해자 진술'});
  await say('judge','normal','잘 들었습니다. 이 말은 판결에 반영하겠습니다.');
}
/* 판사 모드: 주장 가르기 (확인됨 / 확인 안 됨 / 의견일 뿐 / 받아들일 수 없음) */
const CLAIM_OPTS={ok:'증거로 확인됨',no:'확인 안 됨',op:'의견일 뿐',bad:'받아들일 수 없는 주장 (원칙에 어긋남)'};
const CLAIM_FB={ok:'증거가 있는 주장을 확인 안 된 것으로 보았소.',no:'그 주장을 뒷받침하는 증거는 아직 없소. 오히려 반대되는 증거가 있지 않소?',op:'그것은 사실이 아니라 말하는 사람의 생각이오. 확인할 수 있는 일이 아니오.',bad:'이 주장은 증거 문제가 아니라, 법의 원칙에 어긋나오.'};
async function sortClaims(list,o){
  o=o||{};
  for(const C of list){
    await say(C.who,C.expr||'confident',C.text,{tag:'주장'});
    const keys=['ok','no','op'].concat(C.ans==='bad'||o.withBad?['bad']:[]);
    let miss=0;
    for(;;){
      const c=await choiceSheet(`주장 가르기: “${plain(C.text)}”`,keys.map(k=>({t:CLAIM_OPTS[k],ok:k===C.ans,k:k})));
      track('claim',{text:plain(C.text).slice(0,60),pick:c.k,ans:C.ans,ok:c.ok});
      if(c.ok){ break; }
      miss++; S.claimMiss=(S.claimMiss||0)+1;
      await say('judge','stern',(C.fb&&C.fb[c.k])||CLAIM_FB[C.ans]);
      if(miss===2) await say('judge','normal','…판사, 하나만 일러 주겠소. [[확인됨]]은 증거가 있을 때, [[확인 안 됨]]은 증거가 없거나 반대 증거가 있을 때, [[의견일 뿐]]은 좋다·나쁘다 같은 생각을 말할 때요.');
      await loseTrust(); if(S.trust<=0){ await loseTrial(); return false; }
    }
    if(C.ev){ const id=await presentFor(C.ans==='ok'?'이 주장을 확인해 주는 증거를 고르세요.':C.ans==='bad'?'이 주장을 막는 원칙 카드를 고르세요.':'이 주장이 확인되지 않는 까닭을 보여 줄 증거를 고르세요.',C.ev,{noGain:true}); if(!id) return false; }
    if(C.after) await line(C.after);
    await gainTrust();
  }
  return true;
}
/* 판결 저울: 동기 / 방법 / 결과 / 그 뒤의 행동 */
async function scale(title,rows){
  S.flags.scale=S.flags.scale||{};
  await say('judge','normal',`${title}. 판결 저울에 올려 보시오. [[동기]], [[방법]], [[결과]], [[그 뒤의 행동]]을 차례로 다시오.`);
  const out={};
  for(const R of rows){ const c=await choose(`판결 저울 · ${R.k}: ${R.q}`,R.opts,{hint:R.hint}); if(!c) return false; out[R.k]=c.t; }
  S.flags.scale[title]=out; track('scale',{title:title,out:out});
  return true;
}
/* 연표 화면 */
function timeline(title,items,lead){
  return new Promise(res=>{
    openSheet(`<h2>${esc(title)}</h2>${lead?`<p class="lead">${esc(lead)}</p>`:''}<div class="tl">${items.map(x=>`<div class="tl-i"><b>${esc(x.y)}</b><span>${esc(x.t)}</span></div>`).join('')}</div>
      <div class="sheet-foot"><button class="abtn primary" type="button" id="sheetGo">계속</button></div>`,false);
    $('#sheetGo').addEventListener('click',()=>{ closeSheet(); res(); });
  });
}
/* 그림 카드 (줄타기, 세 가지 세금 같은 설명 카드) */
function infoCard(title,html){
  return new Promise(res=>{
    openSheet(`<h2>${esc(title)}</h2><div class="history" style="margin-top:0">${html}</div><div class="sheet-foot"><button class="abtn primary" type="button" id="sheetGo">알겠어요</button></div>`,false);
    $('#sheetGo').addEventListener('click',()=>{ closeSheet(); res(); });
  });
}
/* 공소 취하 / 혐의 유지 (사건 2의 장치를 혐의 여러 개로) */
async function withdrawChoice(i,q,keepTxt,dropTxt){
  const c=await choiceSheet(q,[{t:keepTxt,ok:true,tag:'keep'},{t:dropTxt,ok:true,tag:'drop'}]);
  S.flags.drop=S.flags.drop||{}; S.flags.drop[i]=c.tag==='drop'; track('withdraw',{charge:i,drop:c.tag==='drop'});
  if(c.tag==='drop'){ Music.sting('boo'); await wait(600); chargeSt(i,'dropped'); }
  return c.tag==='drop';
}
/* 결과 화면 */
function caseResult(o){
  const n=S.case, D=CASE_DATA[n], wrongs=(S.log||[]).filter(x=>!x.ok).length;
  track('case_end',{grade:o.grade,trust:S.trust,wrongs:wrongs});
  clearSaveX(n,S.role); S.done=true; S.inTrial=false;
  openSheet(`<h2>사건 ${n} 결과 · ${ROLE_KO[S.role]||''}</h2>
    <div class="tier">${esc(o.grade)}</div><p class="lead">${esc(o.lead)}</p>
    <ul class="res-list"><li>남은 해치 방울 ${S.trust}/5</li><li>헛 제시 ${wrongs}번</li><li>조사에서 헛짚음 ${S.misses||0}번</li>${(o.items||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul>
    ${o.judge?`<p class="grade-note">해치: “${esc(o.judge)}”</p>`:''}
    <h3>실제 역사에서는</h3><p>${esc(o.history||D.history||'')}</p>
    <div class="sheet-foot"><button class="abtn" type="button" id="rTeach">교사용 기록</button><button class="abtn primary" type="button" id="r2back">처음 화면으로</button></div>`,false);
  $('#r2back').addEventListener('click',()=>{ closeSheet(); backToRoles(); });
  $('#rTeach').addEventListener('click',openTeacher);
}
async function hitScene(who,breakLine){ await say(ME()==='rival'?'player':'rival','shock','…!'); Music.stop(0.05); Music.sting('breakdown'); flash(); shake('quake'); if(breakLine) await say(who,'breakdown',breakLine,{action:true}); Music.sting('murmur'); await wait(900); await gavel(); bgm('open'); }
