/* ===== v4 공통 장치 (「역사재판_ClaudeCode_인계_v4」 단계 A·B) =====
   방울(연습 보호·적응형), 3단계 힌트, 판결 네 갈래와 원칙 카드, 수상한 종이 묶음, 법관 등급, 판결 뒤 '가장 중요한 것',
   오늘의 역할·한 줄 배경 카드·지난 사건 회상, 연표(증거 연도), 증거 꼬리표, 개그(똘방·말순 할머니·박수 아저씨·메밀묵),
   판사 모드 다듬기(단계별 주장 가르기, 재증언 명령, 판결 저울), 심화 추궁(명탐정 도장), 이야기 모드 */

/* ---------- 사건별 덧붙임 자료: 사건 3부터는 regCase에, 사건 1·2는 여기 ---------- */
const CASE_EXTRA={};
const XD=n=>Object.assign({},CASE_EXTRA[n]||{},CASE_DATA[n]||{});

/* ---------- 방울: 연습 보호(사건 1·2는 일곱 개)와 적응형 난이도 ---------- */
function practiceCase(){ return (S.case||1)<=2; }
function adaptState(){ try{ return JSON.parse(store.get('yj-adapt')||'null'); }catch(e){ return null; } }
function adaptOn(){ const a=adaptState(); return !!(a&&a.case===(S.case||1)); }
/* 게임 오버 뒤: 그 사건 동안 방울 +1, 힌트 1단계부터. 다음 사건을 시작하면 그 사건 1일차까지 이어 준다 */
function adaptLose(){ store.set('yj-adapt',JSON.stringify({case:S.case||1,carry:false})); track('adapt',{on:true}); }
function adaptEnter(n){ const a=adaptState(); if(!a||a.case===n) return; store.set('yj-adapt',a.carry?'null':JSON.stringify({case:n,carry:true})); }
function adaptDay(day){ const a=adaptState(); if(a&&a.carry&&a.case===(S.case||1)&&day>=2) store.set('yj-adapt','null'); }
function bellsMax(){ return S.storyMode?5:((practiceCase()?7:5)+(adaptOn()?1:0)); }

/* ---------- 힌트 3단계: 거짓 개수 → ○번째 말 → 관련 증거의 종류 (증거 자체는 알려 주지 않음) ---------- */
const EVTYPE_KO={사료:'옛 기록(사료)',물건:'물건',증언:'사람의 증언',유적:'유적',유물:'유물',문서:'문서',연표:'연표'};
async function hintStage(){
  if(!CX||S.trust<=0) return;
  const early=practiceCase()||adaptOn()||S.storyMode;
  const st=Math.min(3,(CX.miss||0)-(early?0:1)+(S.storyMode?1:0));
  if(st<1||st<=(CX.hintSt||0)) return;
  CX.hintSt=st;
  const T=CX.T, R=ROLE_NAME(), open=CX.vis.filter(i=>T.lines[i].lie&&!T.lines[i].broken), k=open.length?CX.vis.indexOf(open[0]):-1;
  track('hint_line',{key:T.key||'',stage:st,line:k+1});
  if(st===1||k<0){ await say('judge','normal',open.length?`…${R}, 힌트를 하나 주겠소. 이 증언에는 아직 깨지 않은 거짓이 [[${open.length}개]] 있소.`:`…${R}, 이 증언에는 아직 끌어내지 못한 말이 있소. [[더 물어]] 보시오.`); return; }
  if(st===2){ await say('judge','normal',`…${R}, 증언 가운데 [[${k+1}번째 말]]을 잘 살펴보시오. 그 말과 어긋나는 증거가 수첩에 있을 것이오.`); return; }
  const L=T.lines[open[0]], ids=L.need2||[].concat(L.ev||[]);
  const types=[...new Set(ids.map(id=>EV_BY_ID[id]&&EV_BY_ID[id].type).filter(Boolean))].map(t=>EVTYPE_KO[t]||t);
  await say('judge','normal',L.need2?`…${k+1}번째 말은 증거 [[두 개를 함께]] 내야 깨지오. ${types.map(t=>'[['+t+']]').join(', ')} 쪽을 살펴보시오.`:`…${k+1}번째 말과 어긋나는 증거는 수첩의 [[${types[0]||'증거'}]] 가운데 있소. 어느 것인지는 스스로 찾으시오.`);
}

/* ---------- 판결 네 갈래와 원칙 카드 「죄와 책임은 다르다」 ---------- */
const VK={guilty:'유죄',resp:'책임 있음',innocent:'무죄',unproven:'증명 부족·판단 보류'};
const VK_DESC={guilty:'법과 도리를 어기고 사람에게 직접 해를 끼친 행위',resp:'나라를 위한 판단이 백성에게 큰 고통을 남김 · 벌하지 않고 역사에 기록',innocent:'증거로 보아 죄도 책임도 묻기 어려움',unproven:'증거가 모자람 · 기준에 따라 판단이 갈림'};
Object.assign(CH_ST,{resp:'책임 있음',unproven:'증명 부족',guilty:'유죄',innocent:'무죄'});
function principleHTML(){ return `<div class="principle"><b>원칙 카드 「죄와 책임은 다르다」</b><p>죄는 ‘한 일’로, 책임은 ‘그 결과’로 따진다.</p><small>친구 물건을 몰래 가져간 것은 죄, 반장이 반을 잘못 이끌어 모두 힘들어진 것은 책임이에요. 책임을 따질 때는 “경고를 알고도 무시했는가”도 봐요.</small></div>`; }
function kindFb(p,a){
  if(p==='guilty'&&a==='resp') return '이것은 나라를 위한 [[판단]]이 낳은 결과요. 죄는 사람에게 직접 해를 끼친 [[행위]]를 따지는 것이오.';
  if(p==='resp'&&a==='guilty') return '이것은 판단의 결과가 아니라, 사람에게 [[직접 해를 끼친 행위]]요. 책임이 아니라 죄로 따져야 하오.';
  if(p==='innocent'&&(a==='guilty'||a==='resp')) return '증거로 보아 피고가 한 일, 또는 그 결과의 [[무게]]가 남아 있소. 없던 일로 할 수는 없소.';
  if(p==='unproven'&&(a==='guilty'||a==='resp')) return '증거는 이미 갖추어져 있소. 판단을 미룰 까닭이 없소.';
  if((p==='guilty'||p==='resp')&&a==='unproven') return '그것을 증명할 증거가 모자라오. 의심만으로 벌하거나 기록할 수는 없소.';
  if((p==='guilty'||p==='resp')&&a==='innocent') return '증거로 보아 죄도 책임도 묻기 어렵소.';
  if(p==='innocent'&&a==='unproven') return '무죄와 증명 부족은 다르오. 증거가 모자랄 뿐, 없던 일이라고 단정할 수는 없소.';
  if(p==='unproven'&&a==='innocent') return '증거로 보아 판단이 갈릴 일이 아니오. 죄도 책임도 묻기 어렵다는 것이 드러났소.';
  return '그 판결은 증거와 맞지 않소.';
}
function kindSheet(charge,okSet,o){
  return new Promise(res=>{
    const keys=o.keys||['guilty','resp','innocent','unproven'];
    const opts=keys.map(k=>({t:VK[k],k:k,ok:okSet.includes(k)})); window.__yjOpts=opts;
    openSheet(`<h2>판결 · ${esc(plain(charge))}</h2>${principleHTML()}<p class="lead">${esc(o.q||'이 혐의는 어떻게 판결할까요?')}</p>
      <div class="choices vk">${opts.map((x,i)=>`<button class="choice vk-${x.k}" type="button" data-i="${i}"><span class="ck">${i+1}</span><span class="vk-t"><b>${x.t}</b><small>${VK_DESC[x.k]}</small></span></button>`).join('')}</div>`,false);
    const fin=i=>{ Music.sting('click'); closeSheet(); res(opts[i].k); };
    sheetCard.querySelectorAll('.choice').forEach(b=>b.addEventListener('click',()=>fin(+b.dataset.i)));
    recNav=k=>{ const n=parseInt(k,10); if(n>=1&&n<=opts.length) fin(n-1); };
  });
}
/* 혐의 하나의 판결 종류를 고른다. 처음 틀리면 방울 대신 원칙 카드로 설명, 두 번째부터 −1 */
async function verdictKind(charge,ans,o){
  o=o||{}; const okSet=[].concat(ans); let tries=0; S.verdicts=S.verdicts||[];
  for(;;){
    const pick=await kindSheet(charge,okSet,o); tries++;
    const ok=okSet.includes(pick);
    track('verdict_kind',{charge:plain(charge).slice(0,40),pick:pick,ans:okSet.join('|'),ok:ok,try:tries});
    if(ok){ S.verdicts.push({charge:plain(charge),kind:pick,first:tries===1}); if(o.idx!==undefined) chargeSt(o.idx,pick,o.note); Music.sting('realize'); if(tries===1) await gainTrust(); return pick; }
    S.vkMiss=(S.vkMiss||0)+1;
    await say('judge','stern',(o.fb&&o.fb[pick])||kindFb(pick,okSet[0]));
    if(S.vkMiss===1){ await say('judge','normal','판결의 종류를 처음 틀렸으니 방울은 깨지 않겠소. [[원칙 카드]]를 다시 보고 고르시오.'); continue; }
    await loseTrust(); if(S.trust<=0){ await loseTrial(); return null; }
  }
}
/* 판결 뒤 '이 재판에서 가장 중요한 것' 고르기 (채점하지 않음) */
async function lessonPick(L){
  if(!L) return;
  const c=await choiceSheet(L.q||'이 재판에서 가장 중요한 것은 무엇이었나요? (정답은 없어요. 세 문장 모두 옳아요.)',L.opts.map(x=>({t:x.t,ok:true,r:x.r,tag:'lesson'})));
  track('lesson',{pick:c.t}); await say('judge','normal',c.r);
}

/* ---------- 수상한 종이 묶음 (시리즈 비밀 「붓을 든 자」) ---------- */
function loadPapers(){ try{ return JSON.parse(store.get('yj-papers')||'[]')||[]; }catch(e){ return []; } }
function paintPapersBtn(){ const b=$('#tPapers'); if(b) b.hidden=!loadPapers().length; }
async function filePaper(p){
  if(!p||!EV_BY_ID[p.id]) return;
  const e=EV_BY_ID[p.id], L=loadPapers().filter(x=>!(x.case===S.case&&x.id===p.id));
  const rec={case:S.case,id:p.id,title:e.title,body:plain(e.body),anach:p.anach||'',plum:!!(S.plums&&S.plums.has(p.id)),self:!!(p.self!==false&&S.found&&S.found.has(p.id)),t:Date.now()};
  L.push(rec); L.sort((a,b)=>a.case-b.case); store.set('yj-papers',JSON.stringify(L));
  track('paper',{id:p.id,self:rec.self,plum:rec.plum});
  await say('judge','normal',p.say||'법정 서고에서 이런 종이가 나왔소. [[따로 보관하시오]]. ‘수상한 종이’ 묶음에 넣어 두겠소.');
  toast('🗂️ 수상한 종이 묶음에 한 장이 늘었다'); paintPapersBtn();
}
function openPapers(){
  const L=loadPapers();
  openSheet(`<h2>수상한 종이 묶음</h2><p class="lead">사건마다 증거 보관함에 끼워져 있던 낱장이에요. 같은 사람이 끼워 넣은 걸까요?</p>
    ${L.length?`<div class="papers">${L.map(x=>`<div class="paper"><b>사건 ${x.case} · ${esc(x.title)}</b><p>${esc(x.body)}</p><small>${x.plum?'✿ 확대해서 매화 모양 먹 얼룩을 찾음':'아직 확대해 보지 않음'}${x.self?' · 조사에서 스스로 찾음':''}</small></div>`).join('')}</div>`:'<p>아직 모은 종이가 없어요.</p>'}
    <div class="sheet-foot"><button class="abtn primary" type="button" data-act="pclose">닫기</button></div>`,true);
  sheetCard.querySelector('[data-act=pclose]').addEventListener('click',closeSheet);
}

/* ---------- 법관 등급: 정확한 판결 수(처음 고른 판결 종류가 맞은 수)로 오른다 ---------- */
const RANKS=[[0,'새내기 법관'],[4,'수습 법관'],[10,'법관'],[18,'명판관']];
function rankOf(sum){ let name=RANKS[0][1]; RANKS.forEach(r=>{ if(sum>=r[0]) name=r[1]; }); return name; }
function rankUpdate(){
  const n=S.case||1, V=S.verdicts||[], c=V.filter(v=>v.first).length; let R={};
  try{ R=JSON.parse(store.get('yj-rank')||'{}')||{}; }catch(e){}
  R[n]=Math.max(R[n]||0,c); store.set('yj-rank',JSON.stringify(R));
  const sum=Object.values(R).reduce((a,b)=>a+b,0), name=rankOf(sum);
  const nx=RANKS.find(r=>r[0]>sum);
  return {correct:c,total:V.length,sum:sum,name:name,next:nx?`${nx[1]}까지 ${nx[0]-sum}`:''};
}

/* ---------- 학급 연표 (교사 화면): 반 전체가 함께 채우는 연표 판 ----------
   이 기기의 학습 데이터에 다른 기기에서 내려받은 기록 파일을 합쳐, 사건마다 끝낸 친구·내린 판결·모은 수상한 종이를 연표 위에 놓는다.
   합친 기록도 이 기기 안(yj-class)에만 두고, 판에 필요한 기록만 남긴다. 이름 대신 번호나 별명. */
const CLASSKEY='yj-class', CLASSMAX=40000, BOARD_KINDS=['start','day_end','case_end','verdict_kind','paper'];
function loadClassEvents(){ try{ return JSON.parse(store.get(CLASSKEY)||'[]')||[]; }catch(e){ return []; } }
/* 내려받은 파일은 초 단위라서 초까지만 맞춰 같은 기록을 한 번만 센다 */
const boardKey=e=>[Math.floor(e.t/1000),e.sid||'',e.case,e.role,e.kind,JSON.stringify(e.detail||{})].join('|');
function boardEvents(){
  const seen=new Set();
  return loadEvents().concat(loadClassEvents()).filter(e=>{ if(!BOARD_KINDS.includes(e.kind)) return false; const k=boardKey(e); if(seen.has(k)) return false; seen.add(k); return true; }).sort((a,b)=>a.t-b.t);
}
function parseCSV(text){
  const rows=[]; let row=[], cell='', q=false;
  text=String(text).replace(/^﻿/,'');
  for(let i=0;i<text.length;i++){ const ch=text[i];
    if(q){ if(ch==='"'){ if(text[i+1]==='"'){ cell+='"'; i++; } else q=false; } else cell+=ch; }
    else if(ch==='"') q=true;
    else if(ch===','){ row.push(cell); cell=''; }
    else if(ch==='\n'||ch==='\r'){ if(ch==='\r'&&text[i+1]==='\n') i++; row.push(cell); rows.push(row); row=[]; cell=''; }
    else cell+=ch; }
  if(cell||row.length){ row.push(cell); rows.push(row); }
  return rows;
}
/* eventsCSV가 만든 파일을 다시 기록으로. 역사재판 기록 파일이 아니면 null */
function csvEvents(text){
  const R=parseCSV(text), h=R.shift()||[], ix=n=>h.indexOf(n);
  const I={t:ix('시각'),sid:ix('번호_별명'),case:ix('사건'),role:ix('역할'),day:ix('일차'),kind:ix('종류'),detail:ix('내용')};
  if(I.t<0||I.kind<0||I.case<0) return null;
  const out=[];
  R.forEach(r=>{ const kind=r[I.kind]; if(!BOARD_KINDS.includes(kind)) return;
    const m=/(\d{4})[-./]\s*(\d{1,2})[-./]\s*(\d{1,2})\.?\s+(\d{1,2}):(\d{2})(?::(\d{2}))?/.exec(r[I.t]||''); if(!m) return;
    let detail={}; try{ detail=JSON.parse(r[I.detail]||'{}')||{}; }catch(e){}
    out.push({t:new Date(+m[1],m[2]-1,+m[3],+m[4],+m[5],+(m[6]||0)).getTime(),sid:(r[I.sid]||'').trim(),case:+r[I.case]||1,role:r[I.role]||'pros',day:+r[I.day]||0,kind:kind,detail:detail}); });
  return out;
}
const yearNum=s=>{ const m=/(기원전\s*)?(\d+)/.exec(s||''); return m?(m[1]?-m[2]:+m[2]):0; };
const eraOf=y=>y<0?'고조선':y<668?'삼국 시대':y<892?'남북국 시대':y<936?'후삼국 시대':y<1392?'고려':y<1897?'조선':'대한 제국';
const chargeNo=c=>{ const m=/혐의\s*([①-⑩])/.exec(c); return m?m[1]:'·'; };
/* 학생별·사건별로 모은다. 법관 등급은 rankUpdate와 같은 셈: 사건마다 한 판에서 처음 고른 판결이 맞은 수의 가장 큰 값을 더함 */
function boardData(E){
  const CS={}, ST={}, seg={};
  const cs=n=>CS[n]||(CS[n]={on:new Set(),done:new Set(),pick:{},first:{},paper:new Set(),self:new Set(),plum:new Set()});
  const st=s=>ST[s]||(ST[s]={sid:s,on:new Set(),done:new Set(),best:{},papers:new Set(),last:0});
  E.forEach(e=>{
    const sid=e.sid||'(이름표 없음)', n=+e.case||1, c=cs(n), s=st(sid), d=e.detail||{}, k=sid+'|'+n+'|'+e.role;
    s.last=Math.max(s.last,e.t); c.on.add(sid); s.on.add(n);
    if(e.kind==='start'&&!d.resume) seg[k]=new Set();
    else if(e.kind==='verdict_kind'){
      const ch=String(d.charge||''), fk=sid+'|'+e.role+'|'+ch;
      if(d.try===1&&!c.first[fk]) c.first[fk]={ch:ch,ok:!!d.ok,pick:d.pick};
      if(d.ok){ (c.pick[ch]||(c.pick[ch]={}))[sid+'|'+e.role]=d.pick; if(d.try===1) (seg[k]||(seg[k]=new Set())).add(ch); }
    }
    else if(e.kind==='paper'){ c.paper.add(sid); if(d.self) c.self.add(sid); if(d.plum) c.plum.add(sid); s.papers.add(n); }
    else if(e.kind==='case_end'){ c.done.add(sid); s.done.add(n); s.best[n]=Math.max(s.best[n]||0,seg[k]?seg[k].size:0); seg[k]=new Set(); }
  });
  return {CS:CS,ST:ST,n:Object.keys(ST).length};
}
function boardHTML(D,o){
  const N=D.n, pct=x=>N?Math.round(x/N*100):0, tot={done:0,v:0,p:0};
  const cards=CASES.slice().sort((a,b)=>yearNum(CASE_YEAR[a.n])-yearNum(CASE_YEAR[b.n])).map(cc=>{
    const n=cc.n, c=D.CS[n], y=yearNum(CASE_YEAR[n]), who=String(cc.d||'').split(' · ')[0];
    const done=c?c.done.size:0, on=c?[...c.on].filter(s=>!c.done.has(s)).length:0, full=N&&done===N;
    const charges=c?Object.keys(c.pick).sort():[], show=!o.big||o.reveal||full;
    tot.done+=done; if(c){ tot.p+=c.paper.size; charges.forEach(ch=>{ tot.v+=Object.keys(c.pick[ch]).length; }); }
    const vk=charges.map(ch=>{
      const cnt={}; Object.values(c.pick[ch]).forEach(k=>{ cnt[k]=(cnt[k]||0)+1; }); const ks=Object.keys(cnt).sort((a,b)=>cnt[b]-cnt[a]);
      const F=Object.values(c.first).filter(f=>f.ch===ch), wr={}; F.filter(f=>!f.ok).forEach(f=>{ wr[f.pick]=(wr[f.pick]||0)+1; }); const w=Object.keys(wr).sort((a,b)=>wr[b]-wr[a])[0];
      return `<li><span class="cb-no">${chargeNo(ch)}</span><span class="cb-ch">${esc(ch.replace(/^혐의\s*[①-⑩]\s*/,''))}</span><span class="cb-bar">${ks.map(k=>`<i class="k-${k}" style="flex:${cnt[k]}"></i>`).join('')}</span><b>${ks.map(k=>`<span class="t-${k}">${VK[k]||k}${ks.length>1?' '+cnt[k]:''}</span>`).join(' · ')}</b>${o.big?'':`<small>처음에 맞힘 ${F.filter(f=>f.ok).length}/${F.length}명${w?` · 많이 헷갈린 답: ${VK[w]||w} ${wr[w]}명`:''}</small>`}</li>`; }).join('');
    const hasPaper=n===2||!!XD(n).paper;
    return `<li class="cb-i${!c?' none':full?' full':''}">
      <div class="cb-top"><span class="cb-yr">${CASE_YEAR[n]||''}</span><span class="cb-era">${eraOf(y)}</span></div>
      <div class="cb-t"><small>사건 ${n}${n===1?' · 첫 재판':''}</small><b>「${esc(cc.t)}」</b><span>${esc(who)}</span></div>
      <div class="cb-meter" role="img" aria-label="끝낸 친구 ${done}명, 하는 중 ${on}명"><i class="d" style="width:${pct(done)}%"></i><i class="o" style="width:${pct(on)}%"></i></div>
      ${c?`<p class="cb-cnt">끝낸 친구 <b>${done}</b>/${N}명${on?` · 하는 중 ${on}명`:''}</p>`:'<p class="cb-cnt">아직 아무도 열지 않았어요</p>'}
      ${charges.length?(show?`<ul class="cb-vk">${vk}</ul>`:'<p class="cb-hide">판결은 모두 끝내면 보여요</p>'):''}
      ${hasPaper&&c?`<p class="cb-paper">🗂️ 수상한 종이 <b>${c.paper.size}</b>명${!o.big&&c.paper.size?` <small>(스스로 찾음 ${c.self.size} · 매화 얼룩 ${c.plum.size})</small>`:''}</p>`:''}
    </li>`; }).join('');
  const legend=`<div class="cb-legend"><span><i class="d"></i>끝낸 친구</span><span><i class="o"></i>하는 중</span>${Object.keys(VK).map(k=>`<span><i class="k-${k}"></i>${VK[k]}</span>`).join('')}</div>`;
  return `<div class="stats cb-stats"><div class="stat">함께한 신참 법관<b>${N}명</b></div><div class="stat">끝낸 재판<b>${tot.done}번</b></div><div class="stat">내린 판결<b>${tot.v}개</b></div><div class="stat">모은 수상한 종이<b>${tot.p}장</b></div></div>${legend}<ol class="cb-tl">${cards}</ol>`;
}
/* 교사용 화면 안의 학급 연표: 판 + 학생별 표 + 기록 파일 합치기 */
function classBoardInner(msg){
  const D=boardData(boardEvents()), imp=loadClassEvents().length, rows=Object.values(D.ST).sort((a,b)=>a.sid.localeCompare(b.sid,'ko',{numeric:true}));
  const md=t=>{ const d=new Date(t); return `${d.getMonth()+1}월 ${d.getDate()}일 ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`; };
  return `<p class="lead">반 친구들이 재판을 끝낼 때마다 연표가 채워져요. 사건은 일어난 해의 순서로 놓았어요. 학생 기기에서 ‘CSV 내려받기’로 받은 파일을 ‘기록 파일 합치기’로 넣으면 반 전체가 한 판에 모여요. 합친 기록도 이 기기 안에만 남아요.</p>
    <div class="cb-ctl"><button class="abtn primary" type="button" id="cbBig">크게 띄우기</button><button class="abtn" type="button" id="cbAdd">기록 파일 합치기</button>${imp?`<button class="abtn" type="button" id="cbClear">합친 기록 지우기</button>`:''}<input type="file" id="cbFile" accept=".csv,text/csv" multiple hidden><span class="cb-src">이 기기 기록 + 합친 기록 ${imp}개</span></div>
    ${msg?`<p class="cb-msg">${esc(msg)}</p>`:''}
    ${D.n?boardHTML(D,{big:false}):'<p>아직 모인 기록이 없어요.</p>'}
    ${rows.length?`<div class="tblwrap"><table class="tbl-sm cb-tbl"><thead><tr><th>번호·별명</th><th>끝낸 사건</th><th>하는 중</th><th>처음에 맞힌 판결</th><th>법관 등급</th><th>수상한 종이</th><th>마지막 기록</th></tr></thead><tbody>
      ${rows.map(s=>{ const sum=Object.values(s.best).reduce((a,b)=>a+b,0); return `<tr><td>${esc(s.sid)}</td><td><span class="cb-strip">${CASES.map(c=>`<i class="${s.done.has(c.n)?'d':s.on.has(c.n)?'o':''}">${c.n}</i>`).join('')}</span></td><td>${[...s.on].filter(n=>!s.done.has(n)).sort((a,b)=>a-b).map(n=>'사건 '+n).join(', ')||'-'}</td><td>${sum}개</td><td>${rankOf(sum)}</td><td>${s.papers.size}장</td><td>${md(s.last)}</td></tr>`; }).join('')}</tbody></table></div>`:''}`;
}
function classBoardSection(){ return `<h3>학급 연표</h3><section id="cbWrap">${classBoardInner()}</section>`; }
function bindClassBoard(){
  const W=$('#cbWrap'); if(!W) return;
  const redraw=msg=>{ W.innerHTML=classBoardInner(msg); bindClassBoard(); };
  $('#cbBig').addEventListener('click',()=>openClassBoard(false));
  const f=$('#cbFile');
  $('#cbAdd').addEventListener('click',()=>f.click());
  f.addEventListener('change',async()=>{
    const L=loadClassEvents(), have=new Set(L.map(boardKey)); let files=0, bad=0, add=0;
    for(const file of [...(f.files||[])]){ let ev=null; try{ ev=csvEvents(await file.text()); }catch(e){} if(!ev){ bad++; continue; } files++;
      ev.forEach(e=>{ const k=boardKey(e); if(have.has(k)) return; have.add(k); L.push(e); add++; }); }
    L.sort((a,b)=>a.t-b.t); if(L.length>CLASSMAX) L.splice(0,L.length-CLASSMAX);
    let saved=true; try{ localStorage.setItem(CLASSKEY,JSON.stringify(L)); }catch(e){ saved=false; }
    redraw(!saved?'이 기기의 저장 공간이 모자라 합치지 못했어요.':`기록 파일 ${files}개를 합쳤어요. 새 기록 ${add}개.${bad?` 역사재판 기록이 아닌 파일 ${bad}개는 건너뛰었어요.`:''}`);
  });
  const c=$('#cbClear'); if(c) c.addEventListener('click',()=>{ let ok=false; try{ ok=window.confirm('다른 기기에서 합친 기록을 지울까요? 이 기기에서 쌓인 기록은 그대로 남아요.'); }catch(e){} if(ok){ store.set(CLASSKEY,'[]'); redraw('합친 기록을 지웠어요.'); } });
}
/* 교실 화면에 띄우는 큰 연표: 반 전체 숫자만, 학생 이름표는 없음. 판결은 모두 끝낸 사건이거나 선생님이 보이기를 눌렀을 때만 */
function openClassBoard(reveal){
  const D=boardData(boardEvents());
  openSheet(`<div class="cb-big"><h2>우리 반 역사 연표</h2><p class="lead">친구들이 재판을 끝낼 때마다 연표가 한 칸씩 채워져요.</p>${D.n?boardHTML(D,{big:true,reveal:reveal}):'<p class="lead">아직 모인 기록이 없어요.</p>'}</div>
    <div class="sheet-foot"><button class="abtn" type="button" id="cbReveal">${reveal?'판결 가리기':'판결 모두 보이기'}</button><button class="abtn primary" type="button" id="cbBack">교사용으로</button></div>`,false);
  $('#cbReveal').addEventListener('click',()=>openClassBoard(!reveal));
  $('#cbBack').addEventListener('click',openTeacher);
}
/* 결과 화면에 덧붙일 v4 묶음: 정확한 판결, 법관 등급, 명탐정 도장, 「역사 기록부」 */
function v4ResultHTML(record){
  const rk=rankUpdate(), V=S.verdicts||[], resp=V.some(v=>v.kind==='resp');
  return `<div class="stats v4s">${V.length?`<div class="stat">정확한 판결<b>${rk.correct}/${V.length}</b></div>`:''}<div class="stat">법관 등급<b>${rk.name}</b><small>${rk.next?esc(rk.next):''}</small></div>${S.stamps?`<div class="stat">명탐정 도장<b>${S.stamps}개</b></div>`:''}${S.storyMode?'<div class="stat">진행<b>이야기 모드</b></div>':''}</div>
    ${resp&&record&&record.length?`<div class="record-book"><b>「역사 기록부」</b><p>‘책임 있음’은 벌하지 않는다는 뜻이 아니라, <b>영원히 기록한다</b>는 뜻이에요. 그 결정으로 고통받은 사람들:</p><ul>${record.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>`:''}`;
}

/* ---------- 오늘의 역할 카드 · 지난 사건 회상 · 법정 전 한 줄 배경 카드 ---------- */
const SEAT={pros:'하람 선배가 옆자리에서 함께 서요. 법정에서 말은 하람 선배가 하고, 무엇을 묻고 무엇을 낼지는 네가 정해요.',
  def:'누리 선배가 옆자리에서 함께 서요. 법정에서 말은 누리 선배가 하고, 무엇을 묻고 무엇을 낼지는 네가 정해요.',
  judge:'하람(검사)과 누리(변호인)가 앞에 서요. 너는 판사석에 앉아요.'};
const RULE_LINE={pros:'증언의 거짓을 증거로 깨요. 증거 없는 혐의는 세울 수 없어요.',def:'확정된 사실은 부정할 수 없어요. 피고가 받아야 할 몫보다 더 벌받지 않게 지켜요.',judge:'주장을 가르고, 저울에 달고, 판결해요. 증거로 확인된 것만 사실로 받아들여요.'};
function judgeName(){ const s=(store.get('yj-sid')||'').trim(); return (s&&/[^\d\s반번학년.\-]/.test(s))?s:'다온'; }
function roleCard(){
  return new Promise(res=>{
    const X=XD(S.case), r=S.role||'pros', rn=ROLE_KO[r]||'검사';
    openSheet(`<h2>오늘의 역할</h2><div class="rolecard r-${r}"><span class="rc-role">${rn}</span><p>너는 역사 법정의 <b>신참 법관</b>이에요. ${SEAT[r]}</p>${X.goal&&X.goal[r]?`<p class="rc-goal">${esc(X.goal[r])}</p>`:''}<small>${RULE_LINE[r]}</small></div>
      <div class="sheet-foot"><button class="abtn primary" type="button" id="sheetGo">재판 시작</button></div>`,false);
    $('#sheetGo').addEventListener('click',()=>{ closeSheet(); res(); });
  });
}
async function recallQuiz(){
  const R=XD(S.case).recall; if(!R) return;
  const c=await choiceSheet(R.q,R.opts.map(x=>({t:x.t,ok:true,right:!!x.ok,tag:'recall'})));
  track('recall',{ok:c.right});
  await say('judge','normal',c.right?(R.yes||'잘 기억하고 있구려.'):(R.no||'다시 떠올려 보시오.'),{view:'lobby'});
}
async function caseIntro(){ await roleCard(); await textbookCard(); await recallQuiz(); }
/* 교과서와 잇기: 시작할 때 펼 쪽, 끝날 때 교과서 내용과 재판에서 더 알게 된 것을 맞대 보기 */
function textbookCard(){
  const T=TEXTBOOK[S.case]; if(!T) return Promise.resolve();
  return new Promise(res=>{
    openSheet(`<h2>교과서를 펴요</h2><div class="bgcard tbcard"><span class="bg-ic" aria-hidden="true">📖</span><div><p class="tb-where"><b>${TB_BOOK} ${esc(T.pages)}</b><br><small>${esc(T.unit)} · 「${esc(T.topic)}」</small></p><p>${esc(T.book)}</p></div></div><p class="lead">재판에서는 교과서에 짧게 나온 일을 증거로 더 깊이 따져요.</p><div class="sheet-foot"><button class="abtn primary" type="button" id="sheetGo">재판 시작</button></div>`,false);
    $('#sheetGo').addEventListener('click',()=>{ closeSheet(); res(); });
  });
}
function textbookCompare(){
  const T=TEXTBOOK[S.case]; if(!T) return Promise.resolve();
  track('textbook',{pages:T.pages});
  return new Promise(res=>{
    openSheet(`<h2>교과서와 맞대 보기</h2><div class="tbcmp"><section><h3>📖 교과서 ${esc(T.pages)}</h3><p>${esc(T.book)}</p></section><section><h3>⚖️ 재판에서 더 따진 것</h3><ul>${T.more.map(m=>`<li>${esc(m)}</li>`).join('')}</ul></section></div><p class="lead">교과서를 다시 펴서, 재판에서 알게 된 것을 그 쪽 여백에 한 줄 적어 보세요.</p><div class="sheet-foot"><button class="abtn primary" type="button" id="sheetGo">다음</button></div>`,false);
    $('#sheetGo').addEventListener('click',()=>{ closeSheet(); res(); });
  });
}
function textbookTableHTML(){
  return `<h3>교과서 연결 (${TB_BOOK})</h3><div class="tbl-wrap"><table class="tbtable"><thead><tr><th>사건</th><th>쪽</th><th>단원 · 주제</th><th>재판에서 더 따지는 것</th></tr></thead><tbody>${Object.entries(TEXTBOOK).map(([n,T])=>`<tr><td>사건 ${n}</td><td>${esc(T.pages)}</td><td>${esc(T.unit)}<br><small>「${esc(T.topic)}」</small></td><td>${T.more.map(esc).join('<br>')}</td></tr>`).join('')}</tbody></table></div>`;
}
async function bgCard(day){
  const B=XD(S.case).bgCards, C=B&&B[day]; if(!C) return;
  await new Promise(res=>{
    openSheet(`<h2>법정에 들어가기 전에</h2><div class="bgcard"><span class="bg-ic" aria-hidden="true">${C.ic||'🗺️'}</span><p>${esc(C.t)}</p></div><div class="sheet-foot"><button class="abtn primary" type="button" id="sheetGo">법정으로</button></div>`,false);
    $('#sheetGo').addEventListener('click',()=>{ closeSheet(); res(); });
  });
}

/* ---------- 연표: 증거마다 연도 점 (음수는 기원전) ---------- */
const yearTxt=y=>y<0?`기원전 ${-y}년`:`${y}년`;
function yearBar(list){
  const L=list.filter(e=>typeof e.y==='number'); if(L.length<2) return '';
  const lo=Math.min(...L.map(e=>e.y)), hi=Math.max(...L.map(e=>e.y)), sp=Math.max(1,hi-lo);
  return `<div class="ybar" aria-label="증거 연표"><span class="yb-l">${yearTxt(lo)}</span><div class="yb-line">${L.map(e=>`<i style="left:${((e.y-lo)/sp*100).toFixed(1)}%" title="${esc(yearTxt(e.y)+' · '+e.title)}"></i>`).join('')}</div><span class="yb-r">${yearTxt(hi)}</span></div>`;
}
const TAG_KO={hearsay:'전해 들은 말',disputed:'논쟁 있는 기록',imagined:'(상상)'};
function evChips(e){ return [e.y!==undefined?`<span class="chip yr">${yearTxt(e.y)}</span>`:'',e.tag?`<span class="chip tag-${e.tag}">${TAG_KO[e.tag]||e.tag}</span>`:''].join(' '); }

/* ---------- 개그: 똘방 · 말순 할머니 · 박수 아저씨 · 메밀묵 ---------- */
function ttolbangSVG(expr){
  const up=expr==='bang'||expr==='joy', sad=expr==='sad', shock=expr==='shock', ink='#1a1410';
  const eyes=sad?`<path d="M160,292 q16,-12 32,0 M208,292 q16,-12 32,0" stroke="${ink}" stroke-width="7" fill="none" stroke-linecap="round"/>`
    :shock?`<circle cx="176" cy="292" r="17" fill="#fff" stroke="${ink}" stroke-width="5"/><circle cx="224" cy="292" r="17" fill="#fff" stroke="${ink}" stroke-width="5"/><circle cx="176" cy="292" r="5" fill="${ink}"/><circle cx="224" cy="292" r="5" fill="${ink}"/>`
    :`<ellipse cx="176" cy="292" rx="14" ry="18" fill="#fff" stroke="${ink}" stroke-width="5"/><ellipse cx="224" cy="292" rx="14" ry="18" fill="#fff" stroke="${ink}" stroke-width="5"/><circle cx="${up?179:176}" cy="${up?287:295}" r="7" fill="${ink}"/><circle cx="${up?227:224}" cy="${up?287:295}" r="7" fill="${ink}"/>`;
  const mouth=sad?`<path d="M184,340 q16,-12 32,0" stroke="${ink}" stroke-width="6" fill="none" stroke-linecap="round"/>`
    :shock?`<ellipse cx="200" cy="342" rx="12" ry="16" fill="#7a2a2a" stroke="${ink}" stroke-width="5"/>`
    :`<path d="M176,328 q24,30 48,0 Z" fill="#7a2a2a" stroke="${ink}" stroke-width="5" stroke-linejoin="round"/><path d="M188,328 l5,9 l5,-9 M204,328 l5,9 l5,-9" fill="#fff"/>`;
  const club=up?`<g transform="rotate(-30 300 330)"><rect x="292" y="236" width="18" height="110" rx="8" fill="#8a5a2a" stroke="${ink}" stroke-width="5"/><ellipse cx="301" cy="232" rx="27" ry="35" fill="#b07a3e" stroke="${ink}" stroke-width="5"/><circle cx="292" cy="220" r="5" fill="${ink}"/><circle cx="311" cy="242" r="5" fill="${ink}"/></g><path d="M330,180 l14,-22 M350,198 l24,-8 M318,168 l-2,-26" stroke="#ffd36a" stroke-width="6" stroke-linecap="round"/>`
    :`<g transform="rotate(18 300 420)"><rect x="292" y="350" width="16" height="96" rx="7" fill="#8a5a2a" stroke="${ink}" stroke-width="5"/><ellipse cx="300" cy="346" rx="23" ry="29" fill="#b07a3e" stroke="${ink}" stroke-width="5"/></g>`;
  const muk=expr==='sad'?`<g><ellipse cx="106" cy="420" rx="48" ry="16" fill="#e8dcc0" stroke="${ink}" stroke-width="5"/><path d="M76,406 h60 v-20 h-60 Z" fill="#8a7a5a" stroke="${ink}" stroke-width="5"/></g>`:'';
  return `<svg viewBox="0 0 400 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="도깨비 경위 똘방">
    <path d="M128,480 C120,420 140,392 200,392 C260,392 280,420 272,480 Z" fill="#d9952e" stroke="${ink}" stroke-width="6"/>
    <path d="M150,410 l14,26 M188,400 l6,30 M226,404 l-4,30 M256,416 l-12,26" stroke="${ink}" stroke-width="7" stroke-linecap="round"/>
    <path d="M118,360 C96,380 100,420 128,424" fill="none" stroke="${ink}" stroke-width="20" stroke-linecap="round"/><path d="M118,360 C96,380 100,420 128,424" fill="none" stroke="#5fa86a" stroke-width="10" stroke-linecap="round"/>
    <circle cx="200" cy="304" r="96" fill="#5fa86a" stroke="${ink}" stroke-width="6"/>
    <ellipse cx="200" cy="330" rx="62" ry="44" fill="#7cc286" opacity=".55"/>
    <path d="M236,214 L246,166 Q256,150 262,170 L254,218 Z" fill="#f2e6c8" stroke="${ink}" stroke-width="5" stroke-linejoin="round"/>
    <g transform="rotate(-14 196 222)"><path d="M136,232 Q196,190 256,232 L256,246 L136,246 Z" fill="#26395f" stroke="${ink}" stroke-width="5"/><rect x="124" y="242" width="140" height="13" rx="6" fill="#18264a" stroke="${ink}" stroke-width="4"/><circle cx="196" cy="226" r="9" fill="#d9a93f" stroke="${ink}" stroke-width="3"/></g>
    <circle cx="152" cy="322" r="11" fill="#f08a8a" opacity=".6"/><circle cx="248" cy="322" r="11" fill="#f08a8a" opacity=".6"/>
    ${eyes}${mouth}${club}${muk}</svg>`;
}
function addGagCast(){
  if(CAST.ttolbang) return;
  addCast('ttolbang',{name:'똘방',label:'도깨비 경위 똘방',col:'#3a6a3a',spec:{draw:ttolbangSVG}});
  addCast('malsun',{name:'말순 할머니',label:'말순 할머니',col:'#7a4a6a',spec:{skin:'#ecc6a0',robe:'#8a5a7a',robe2:'#6a3e5a',collar:'cross',hat:'bun',hair:'#cfcfd4',beard:'none',iris:'#3a2a20',blush:true}});
  addCast('clapper',{name:'방청석 박수 아저씨',label:'방청석 박수 아저씨',col:'#4a6a8a',spec:{skin:'#efc8a0',robe:'#4a6a8a',robe2:'#33506e',collar:'cross',hat:'short',hair:'#2a2220',beard:'thin',iris:'#3a2a20'}});
  BASE_PREF.ttolbang=['base']; EXPR_FALLBACK.bang=['base']; EXPR_FALLBACK.joy=['base']; EXPR_FALLBACK.sad=['sweat','base'];
  EXPR_FALLBACK.fish=['joy','base']; EXPR_FALLBACK.muk=['joy','base']; EXPR_FALLBACK.broom=['joy','base']; EXPR_FALLBACK.moved=['base'];
}
addGagCast();
/* 메밀묵: 사건 1부터 증거 수첩에 늘 들어 있는 개그 물건 (사건 9에서 결정적 증거) */
const MUK={id:'MUK',type:'물건',icon:'censer',gag:true,title:'메밀묵 한 그릇',body:'똘방이 “증거 나와라, 뚝딱!” 하고 방망이를 두드리자 나온 메밀묵. 도깨비는 메밀묵을 좋아한다는 옛이야기가 있다.',src:'똘방의 방망이 (게임 속 물건)',trust:1,note:'쓸모없어 보이지만… 버리지 말고 들고 다녀 보자.'};
function gagEv(){ if(!EVIDENCE.find(e=>e.id==='MUK')) EVIDENCE.push(MUK); EV_BY_ID.MUK=MUK; S.found=S.found||new Set(); S.found.add('MUK'); }
const realEv=id=>EV_BY_ID[id]&&!EV_BY_ID[id].gag;
function mukCount(){ const v=parseInt(store.get('yj-muk')||'',10); return isNaN(v)?12:v; }
function paintMuk(){ const n=mukCount(); NAMES.ttolbang=`도깨비 경위 똘방 (메밀묵 ${n}그릇)`; const m=$('#muk'); if(m){ m.hidden=!S.inTrial; m.querySelector('b').textContent=n; } }
async function mukCut(){ store.set('yj-muk',String(Math.max(0,mukCount()-1))); paintMuk(); track('muk',{n:mukCount()}); await say('judge','stern','똘방, 이번 달 [[메밀묵 한 그릇]] 깎겠소.'); await say('ttolbang','sad','흐엉… 왜 또 저예요…!'); }
function mukReturn(){ store.set('yj-muk','12'); paintMuk(); }
/* 조사하는 동안 똘방을 화면에 세운다 */
async function tbLines(L){ for(const x of L){ const who=x[0]==='ME'?ME():x[0]; if(['ttolbang','malsun','clapper'].includes(who)) showNpc({who:who,expr:x[1]},x[1]); await say(who,x[1],x[2],{view:'inv'}); } hideNpc(); }
/* 조사일마다 똘방 한 장면 + 둘째 날부터 똘방의 엉뚱한 요약 바로잡기 (채점하지 않음) */
async function gagInv(day){
  const G=XD(S.case).gag; if(!G) return; S.gagDone=S.gagDone||{}; const k='inv'+day; if(S.gagDone[k]) return; S.gagDone[k]=true;
  const L=G.inv&&G.inv[day]; if(L) await tbLines(L);
  const F0=G.fix&&G.fix[day], F=F0&&(F0.say?F0:F0[S.role]);
  if(F){ showNpc({who:'ttolbang',expr:'base'},'base'); await say('ttolbang','base',F.say,{view:'inv'});
    const c=await choiceSheet(F.q||'똘방의 요약, 맞나요? 바로잡아 주세요.',F.opts.map(o=>({t:o.t,ok:true,right:!!o.ok,tag:'fix'})));
    track('fix',{day:day,ok:c.right}); showNpc({who:'ttolbang',expr:c.right?'joy':'shock'},c.right?'joy':'shock');
    await say('ttolbang',c.right?'joy':'shock',c.right?(F.yes||'아, 그렇구나! 바로잡아 줘서 고마워요.'):(F.no||'어? 그게 아닌 것 같은데… 어제 일을 다시 떠올려 봐요.'),{view:'inv'}); hideNpc(); }
}
/* 같은 곳을 자꾸 누르면: 5번째 똘방의 태클, 10번째 드러눕기 */
async function gagRepeat(n){
  if(n===5) await tbLines([['ttolbang','shock','거기 벌써 다섯 번째예요! 거기엔 정말 아무것도 없다니까요.']]);
  else if(n===10) await tbLines([['ttolbang','sad','…저 여기 드러누울게요. 다른 데도 좀 봐 주세요. (똘방이 그 자리에 벌러덩 누웠다.)']]);
}
/* 법정: 1일차 박수 아저씨, 정해진 날 해치의 아재개그 */
async function gagCourt(day){
  const G=XD(S.case).gag; if(!G) return;
  if(day===1&&G.clap!==false){ Music.sting('cheer'); await say('guide','normal','(방청석 맨 앞줄에서 누가 힘차게 박수를 친다. 짝짝짝짝!)');
    await say('clapper','base',G.clap||'아이고, 시작한다길래 그만…!',{view:'witness'}); await say('judge','stern','딸랑. 방청석, 지금은 [[박수 칠 때가 아니오]].'); await say('clapper','sweat','…(슬그머니 손을 내린다)',{view:'witness'}); }
  if(G.pun&&day===(G.punDay||2)){ for(const x of G.pun) await say(x[0],x[1],x[2]); }
}
/* 재판 기록 보는 교사용: 웃음 관찰 (교사가 실제로 웃었는지 표시) */
function laughHTML(){
  const L=[]; Object.keys(Object.assign({},CASE_EXTRA,CASE_DATA)).forEach(n=>{ const G=XD(+n).gag; if(G&&G.scene) L.push({n:+n,s:G.scene}); });
  let R={}; try{ R=JSON.parse(store.get('yj-laugh')||'{}')||{}; }catch(e){}
  if(!L.length) return '';
  return `<h3>웃음 관찰 (빵 장면)</h3><p class="lead">사건마다 하나씩 넣은 웃음 장면이에요. 교실에서 실제로 웃었는지 표시해 두면 CSV와 함께 개선 자료가 돼요.</p>
    <div class="tblwrap"><table class="tbl-sm"><thead><tr><th>사건</th><th>장면</th><th>교실 반응</th></tr></thead><tbody>${L.sort((a,b)=>a.n-b.n).map(x=>`<tr><td>${x.n}</td><td>${esc(x.s)}</td><td class="laugh" data-n="${x.n}">${[['big','빵 터짐'],['some','조금'],['none','안 웃음']].map(v=>`<button type="button" class="abtn${R[x.n]===v[0]?' sel':''}" data-v="${v[0]}">${v[1]}</button>`).join('')}</td></tr>`).join('')}</tbody></table></div>`;
}
function bindLaugh(){ sheetCard.querySelectorAll('.laugh button').forEach(b=>b.addEventListener('click',()=>{ let R={}; try{ R=JSON.parse(store.get('yj-laugh')||'{}')||{}; }catch(e){} const n=b.parentNode.dataset.n; R[n]=b.dataset.v; store.set('yj-laugh',JSON.stringify(R)); track('laugh',{case:+n,v:b.dataset.v}); b.parentNode.querySelectorAll('button').forEach(x=>x.classList.toggle('sel',x===b)); })); }
/* 엉뚱한 증거에 증인마다 다른 반응 3가지, 메밀묵을 내면 매번 다른 반응 */
const MUK_REACT=[
  w=>[[w,'base','…이건 메밀묵이오?'],['judge','stern','…똘방!'],['ttolbang','shock','앗, 제 메밀묵! 어디 갔나 했네요.']],
  w=>[[w,'base','고소한 냄새가 나는구려. 증거보다는 반찬 같은데.'],['judge','stern','법정에 먹을 것을 꺼내지 마시오.']],
  w=>[['judge','stern','이 메밀묵, 누가 증거 수첩에 넣었소?'],['ttolbang','sad','…제가요.']]];
async function wrongReact(card,who){
  if(card&&card.gag){ S.mukN=(S.mukN||0)+1; const L=MUK_REACT[(S.mukN-1)%MUK_REACT.length](who); await line(L); if(S.mukN%3===0) await mukCut(); return true; }
  const W=CX&&CX.T.wrongR; if(W&&W.length){ CX.wrongN=(CX.wrongN||0)+1; const x=W[(CX.wrongN-1)%W.length]; await line(Array.isArray(x[0])?x:[x]); return true; }
  return false;
}

/* ---------- 판사 모드: 판결 저울이 기우는 모습 ---------- */
function scaleViz(title,out){
  return new Promise(res=>{
    const rows=Object.entries(out||{});
    openSheet(`<h2>판결 저울 · ${esc(title)}</h2><div class="scalev"><svg viewBox="0 0 400 220" aria-hidden="true"><rect x="194" y="40" width="12" height="150" fill="#8a6a2a"/><rect x="140" y="188" width="120" height="16" rx="6" fill="#5a3d1a"/><g class="beam"><rect x="60" y="34" width="280" height="10" rx="5" fill="#c9a24e"/><path d="M80,44 L56,110 H104 Z M320,44 L296,110 H344 Z" fill="none" stroke="#c9a24e" stroke-width="3"/><ellipse cx="80" cy="112" rx="34" ry="8" fill="#d9b860"/><ellipse cx="320" cy="112" rx="34" ry="8" fill="#d9b860"/></g><circle cx="200" cy="38" r="9" fill="#d9a93f"/></svg></div>
      <ol class="learned">${rows.map(([k,v])=>`<li><b>${esc(k)}</b> · ${esc(v)}</li>`).join('')}</ol>
      <div class="sheet-foot"><button class="abtn primary" type="button" id="sheetGo">망치 두드리기</button></div>`,false);
    Music.sting('zoom');
    $('#sheetGo').addEventListener('click',async()=>{ closeSheet(); await gavel(); res(); });
  });
}

/* ---------- 결과 화면 앞: 가장 중요한 것 → 수상한 종이 → 등급 ---------- */
async function caseFinale(){ const X=XD(S.case); await textbookCompare(); if(X.lesson) await lessonPick(X.lesson); if(X.paper) await filePaper(X.paper); if(X.teaser) await teaserCard(X.teaser); }
/* 4일차 끝: 다음 사건 예고 한 컷 */
function teaserCard(t){
  return new Promise(res=>{
    Music.sting('title');
    openSheet(`<h2>다음 사건 예고</h2><div class="bgcard teaser"><span class="bg-ic" aria-hidden="true">🔔</span><p>${t.replace(/\[\[(.*?)\]\]/g,'<b class="kw">$1</b>')}</p></div><div class="sheet-foot"><button class="abtn primary" type="button" id="sheetGo">재판 기록 보기</button></div>`,false);
    $('#sheetGo').addEventListener('click',()=>{ closeSheet(); res(); });
  });
}

/* ---------- 기록관 두 벌: 사건 1 법정은 원래 그림, 마지막 장면부터 매화 얼룩 그림(scribe2) ---------- */
addCast('scribe2',{name:'기록관',label:'기록관',col:'#2f5a3c',spec:Object.assign({},CAST.scribe)});
if(ASSETS.sprites&&!ASSETS.sprites.scribe2&&ASSETS.sprites.scribe) ASSETS.sprites.scribe2=ASSETS.sprites.scribe;

/* ---------- 사건 1·2 덧붙임 자료 ---------- */
CASE_EXTRA[1]={
  goal:{pros:'의자왕의 두 혐의를 증거로 따져요. 증명된 것과 증명되지 않은 것을 나눠요.'},
  bgCards:{1:{ic:'🗺️',t:'660년, 당나라와 신라의 군대가 백제로 쳐들어왔어요. 적은 바다 쪽 기벌포와 산길 탄현으로 들어왔어요.'},
    2:{ic:'📜',t:'성충과 흥수, 두 신하는 같은 길목을 막으라고 했어요. 왕은 누구의 말을 따랐을까요?'},
    3:{ic:'📚',t:'「삼국사기」는 백제가 무너지고 480여 년 뒤, 고려에서 엮은 책이에요.'},
    4:{ic:'⚖️',t:'오늘은 판결하는 날이에요. 혐의마다 판결의 종류, 이유, 근거를 함께 대요.'}},
  record:['나라가 무너진 뒤 당나라로 끌려간 사비성 백성들','무너진 집과 흩어진 가족','황산벌에서 끝까지 싸운 계백의 결사대'],
  lesson:{opts:[{t:'경고를 듣고도 따르지 않은 선택에는 책임이 따른다.',r:'그렇소. 왕의 자리는 듣고, 고르는 자리요.'},{t:'소문과 기록은 다르다.',r:'그렇소. ‘3천’이라는 숫자는 어느 옛 기록에도 없었소.'},{t:'기록에도 쓴 사람의 평가가 섞일 수 있다.',r:'그렇소. 누가, 언제 썼는지 함께 보아야 하오.'}]},
  gag:{scene:'말순 할머니 「옆집의 옆집의 옆집」',
    inv:{1:[['ttolbang','bang','도깨비 경위 [[똘방]]입니다! 증거 찾는 걸 도와 드릴게요. 증거 나와라, 뚝딱!'],['guide','normal','(방망이에서 툭 떨어진 것은… [[메밀묵]] 한 그릇이다.)'],['ttolbang','sad','…또 메밀묵이네. 이건 증거 수첩에 넣어 두세요. 혹시 모르잖아요?'],['ME','think','(메밀묵이 증거가 될 리가… 일단 넣어 두자.)']],
      2:[['ttolbang','base','오늘은 강가 절벽에 [[말순 할머니]]가 와 계세요. 소문이라면 할머니가 제일 빠르대요!']],
      3:[['ttolbang','bang','오늘이야말로! 증거 나와라, 뚝딱!'],['ttolbang','sad','…메밀묵. 또 메밀묵.']]},
    fix:{2:{say:'어제 법정 요약! 피고가 그랬잖아요. 적은 [[육지로만]] 왔다고. 그러니까 바다는 걱정 안 해도 됐던 거죠?',opts:[{t:'아니야. 적은 바다 쪽 기벌포로도 들어왔어.',ok:true},{t:'맞아. 적은 육지로만 왔어.'}]},
      3:{say:'어제 흥수 할아버지 말로는, 왕은 아무한테도 [[묻지 않고]] 혼자 정했대요. 맞죠?',opts:[{t:'아니야. 왕은 흥수에게 사람을 보내 물었고, 그러고도 대신들 쪽을 따랐어.',ok:true},{t:'맞아. 왕은 아무에게도 묻지 않았어.'}]}},
    pun:[['judge','normal','재판을 하도 오래 했더니 다리가 저리오. 그래서 오늘 나는 [[재판장]]이 아니라 [[저린장]]이오.'],['ttolbang','joy','하, 하하하! 재판장님 정말 최고예요!'],['guide','normal','(방청석은 조용하다. 똘방 혼자 웃었다.)']],punDay:3}};
CASE_EXTRA[2]={
  goal:{pros:'위만의 두 혐의를 증거로 따져요. 증명되지 않은 혐의는 스스로 거둘 줄도 알아야 해요.',def:'의뢰인 위만을 지켜요. 의뢰인의 거짓도, 가짜 증거도 그냥 넘기지 않아요.'},
  recall:{q:'지난 사건에서 ‘3천 궁녀’ 이야기는 왜 판결의 근거가 될 수 없었나요?',opts:[{t:'옛 기록에 없고, 직접 본 사람 없이 전해 들은 말이었기 때문',ok:true},{t:'의자왕이 착한 왕이었기 때문'},{t:'궁녀가 3천 명보다 훨씬 많았기 때문'}],
    yes:'잘 기억하고 있구려. 이번에는 [[훨씬 더 먼 옛날]]로 가겠소.',no:'…‘3천’이라는 숫자는 옛 기록 어디에도 없었고, 직접 본 사람도 없었소. 자, 이번에는 [[훨씬 더 먼 옛날]]로 가겠소.'},
  bgCards:{1:{ic:'🏯',t:'기원전 2세기 초, 고조선. 난리를 피해 온 위만을 준왕이 믿고 서쪽 땅을 맡겼어요.'},
    2:{ic:'🌙',t:'그날 밤 위만은 “한나라 군대가 온다”며 군사를 이끌고 왕검성에 들어갔어요.'},
    3:{ic:'📜',t:'한나라가 고조선을 실제로 친 것은 그로부터 80여 년 뒤, 기원전 109년이에요.'},
    4:{ic:'⚖️',t:'오늘은 판결하는 날이에요. 혐의마다 판결의 종류와 이유, 근거를 대요.'}},
  lesson:{opts:[{t:'믿음을 저버리고 거짓으로 왕위를 빼앗은 것은 죄다.',r:'그렇소. 나라를 키운 공이 있어도 그 죄는 사라지지 않소.'},{t:'증명되지 않은 혐의는 거둘 줄 알아야 한다.',r:'그렇소. 검사든 변호인이든 증거를 따르는 사람이오.'},{t:'낱말 하나로도 가짜 문서를 가려낼 수 있다.',r:'그렇소. ‘낙랑’이라는 이름 하나가 밀서를 무너뜨렸소.'}]},
  gag:{scene:'연나라 상인 「이의는 두 냥이오」',
    inv:{1:[['ttolbang','bang','도깨비 경위 똘방, 오늘도 출동! 증거 나와라, 뚝딱!'],['guide','normal','(방망이에서 나온 것은… 역시 메밀묵.)'],['ttolbang','sad','…고조선에도 메밀묵이 있었을까요?']],
      3:[['ttolbang','base','포구에 연나라 상인이 와 있대요. 그 아저씨는 무슨 말이든 값을 매긴대요. 제 말은 공짜예요!']]},
    fix:{2:{pros:{say:'어제 법정 요약! 위만이 그랬잖아요. 준왕이 맡긴 건 [[작은 마을 하나]]뿐이었다고!',opts:[{t:'아니야. 준왕은 위만에게 홀을 내리고 서쪽 100리 땅을 맡겼어.',ok:true},{t:'맞아. 작은 마을 하나였어.'}]},
        def:{say:'어제 법정 요약! 준왕이 그랬잖아요. 위만은 처음부터 [[연나라 옷]]을 입고 왔다고!',opts:[{t:'아니야. 기록에는 상투를 틀고 조선 옷을 입고 왔다고 되어 있어.',ok:true},{t:'맞아. 연나라 옷을 입고 왔어.'}]}},
      3:{pros:{say:'어제 법정 요약! 한나라 군대가 정말 쳐들어와서, 위만이 왕을 지키러 들어간 거래요!',opts:[{t:'아니야. 그때 한나라가 고조선을 친 기록은 없어. 거짓 경보였어.',ok:true},{t:'맞아. 한나라 군대가 쳐들어왔어.'}]},
        def:{say:'어제 법정 요약! 피고가 준 밀서는 [[진짜]] 준왕이 쓴 거래요!',opts:[{t:'아니야. 밀서에는 위만보다 뒤에 생긴 ‘낙랑’이 적혀 있었어.',ok:true},{t:'맞아. 준왕이 직접 썼어.'}]}}},
    pun:[['judge','normal','고조선 재판이라 그런지 오늘따라 법정이 아주… [[고요조선]]하구려.'],['ttolbang','joy','푸하하! 고요조선! 재판장님 천재세요!'],['guide','normal','(아무도 웃지 않았다.)']],punDay:2}};
