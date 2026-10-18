/* ===== 등장인물: 새 인물 = 설정 한 줄 ===== */
const CAST={
  judge:{name:'재판장 해치',kind:'haechi'},
  player:{name:'하람 검사',skin:'#f6d6b8',robe:'#26395f',robe2:'#18264a',collar:'blazer',hat:'student',hair:'#3a271c',iris:'#5b3a22',blush:true},
  rival:{name:'누리 변호인',skin:'#f5d3b6',robe:'#6b2737',robe2:'#4a1825',collar:'blazer',ribbon:'#3f8a8f',pin:false,hat:'bob',hair:'#2a1f2b',band:'#3f8a8f',glasses:true,iris:'#3d5a66',blush:true},
  daon:{name:'다온 판사',skin:'#f1cfae',robe:'#1f2230',robe2:'#3a2f55',collar:'robe',hat:'bun',hair:'#4a3020',iris:'#6a4630',blush:true},
  heungsu:{name:'흥수',skin:'#e8c4a0',robe:'#5a6a80',robe2:'#3e4a5c',collar:'cross',hat:'short',hair:'#e8e4dc',beard:'long',beardColor:'#ece8e0',iris:'#3a2a20'},
  scribe:{name:'기록관',skin:'#ecc8a4',robe:'#3d6b4a',robe2:'#284a33',collar:'round',hat:'short',hair:'#1c1a20',beard:'thin',iris:'#2e2018'},
  citizen:{name:'사비성 백성',skin:'#e6c09a',robe:'#7a6248',robe2:'#5a4634',collar:'cross',hat:'bun',hair:'#2a2220',beard:'none',iris:'#3a2a20'},
  wiman:{name:'위만',skin:'#e9c29c',robe:'#7a3e2c',robe2:'#5a2c1e',collar:'cross',hat:'short',hair:'#1c1a20',beard:'thin',iris:'#2e2018'},
  jun:{name:'준왕',skin:'#ebc6a2',robe:'#2b3d6b',robe2:'#1e2b4d',collar:'cross',hat:'short',hair:'#6a6a70',beard:'long',beardColor:'#8a8a90',iris:'#3a2a20'},
  merchant:{name:'연나라 상인',skin:'#efc8a0',robe:'#a8803a',robe2:'#7c5e28',collar:'cross',hat:'short',hair:'#1c1a20',beard:'thin',iris:'#2e2018'},
  defendant:{name:'의자왕',skin:'#efc9a2',robe:'#6a3d8f',robe2:'#4b2a66',collar:'cross',hat:'baekje',hair:'#1c1a20',beard:'king',iris:'#3a2a20'}
};
const SAMPLES=[CAST.defendant,
  {name:'광해군',skin:'#eec8a2',robe:'#a8322a',robe2:'#7c221c',collar:'round',hat:'ikseon',hair:'#1c1a20',beard:'king',emblem:true,iris:'#3a2a20'},
  {name:'연산군',skin:'#f0caa4',robe:'#b3352b',robe2:'#86241d',collar:'round',hat:'ikseon',hair:'#1c1a20',beard:'thin',emblem:true,iris:'#2e2018'},
  {name:'조선 관리 예시',skin:'#e8bf96',robe:'#2f5d8a',robe2:'#1f3f60',collar:'cross',hat:'gat',hair:'#1c1a20',beard:'long',beardColor:'#e6e0d4',iris:'#3a2a20'}];
const NAMES={judge:'재판장 해치',player:'하람 검사',rival:'누리 변호인',defendant:'피고 의자왕',heungsu:'증인 흥수',scribe:'증인 기록관',citizen:'사비성 백성',wiman:'피고 위만',jun:'증인 준왕',merchant:'증인 연나라 상인',guide:'안내',voice:'???'};
const VIEW_OF={judge:'judge',player:'pros',rival:'def',defendant:'witness',heungsu:'witness',scribe:'witness',citizen:'witness',wiman:'witness',jun:'witness',merchant:'witness'};
const VIEWS={
  witness:{bg:BG.witness,desk:DESK.witness,pos:['50%','0%','92%'],posImg:['50%','8%','86%']},
  judge:{bg:BG.judge,desk:DESK.judge,pos:['50%','22%','76%'],posImg:['50%','20%','70%']},
  pros:{bg:BG.side,desk:DESK.pros,pos:['37%','0%','92%'],posImg:['38%','6%','88%']},
  def:{bg:BG.side,desk:DESK.def,pos:['63%','0%','92%'],posImg:['62%','6%','88%']},
  lobby:{bg:BG.side,desk:'',pos:['50%','-4%','96%'],posImg:['50%','-6%','94%']},
  prologue:{bg:BG.witness,desk:'',pos:['50%','0%','90%'],nochar:true},
  prologue2:{bg:BG.witness,desk:'',pos:['50%','0%','90%'],nochar:true},
  courtyard:{bg:BG.side,desk:'',pos:['50%','-4%','96%'],posImg:['50%','-6%','94%']}
};
const ACTION_COL={player:'#2b4478',rival:'#2f6b6e',defendant:'#5a3480',judge:'#7a5a1e',heungsu:'#4a5a70',scribe:'#2f5a3c',citizen:'#6a5038',wiman:'#7a3e2c',jun:'#2b3d6b',merchant:'#8a6a2a'};
const plain=t=>String(t).replace(/\[\[|\]\]/g,'');
const evArt=e=>(ASSETS.ev&&ASSETS.ev[e.id])?`<img class="evimg" src="${ASSETS.ev[e.id]}" alt="">`:evIcon(e.icon);
/* 스프라이트 팩: 그림 파일이 있으면 그 그림을, 없으면 코드 그림을 씀. 예) SPRITES.defendant={normal:'assets/sprites/uija/normal.png', normal_talk:'assets/sprites/uija/normal_talk.png'} */
const SPRITES={};
/* 표정 그림이 없으면 가장 가까운 표정으로 대신 */
const EXPR_FALLBACK={hesitate:['think','sweat','base'],plea:['sweat','base'],normal:['base'],smug:['base','normal'],confident:['present','base','normal'],present:['base','confident','normal'],think:['normal','base'],angry:['stern','base'],stern:['angry','base','normal'],smile:['base','normal'],shock:['sweat','base'],breakdown:['shock','sweat','base'],sweat:['shock','base']};
const BASE_PREF={wiman:['base','angry'],jun:['base','hesitate'],merchant:['base'],heungsu:['base','hesitate'],scribe:['base','smug'],citizen:['base'],daon:['base'],defendant:['base','angry','sweat'],judge:['base','stern','shock'],rival:['base','sweat','shock'],player:['present','normal','sweat']};
function pickExpr(A,expr,who){ if(typeof A==='string') return A; if(A[expr]) return A[expr]; for(const k of (EXPR_FALLBACK[expr]||[])) if(A[k]) return A[k]; for(const k of (BASE_PREF[who]||[])) if(A[k]) return A[k]; return A.base||A.normal||Object.values(A)[0]; }
function charView(who,sp,expr){
  if(!sp) return '';
  const A=(typeof ASSETS!=='undefined'&&ASSETS.sprites)?ASSETS.sprites[who]:null;
  if(A){ const src=pickExpr(A,expr,who); if(src) return `<div class="spr e-${expr}"><img src="${src}" alt="${esc(sp.name)}"></div>`; }
  const P=SPRITES[who];
  if(P && P[expr]){ const open=P[expr+'_talk']||P[expr]; return `<div class="spr"><img class="m-closed" src="${P[expr]}" alt="${esc(sp.name)}"><img class="m-open" src="${open}" alt=""></div>`; }
  if(['heungsu','scribe','citizen','wiman','jun','merchant'].includes(who)) return `<div class="sil">${charSVG(sp,'normal')}</div>`;
  return charSVG(sp,expr);
}
Object.keys(SPRITES).forEach(who=>Object.keys(SPRITES[who]).forEach(k=>{ const im=new Image(); im.onerror=()=>{ delete SPRITES[who][k]; }; im.src=SPRITES[who][k]; }));

/*DATA*/

/* ===== 화면 요소 ===== */
const stageEl=$('#stage'), sceneEl=$('#scene'), bgEl=$('#bg'), charEl=$('#char'), deskEl=$('#desk');
const flashEl=$('#flash'), gavelEl=$('#gavel'), tcEl=$('#tc'), shoutEl=$('#shout'), bangEl=$('#bang'), titleEl=$('#title');
const dialogEl=$('#dialog'), nameEl=$('#name'), dtagEl=$('#dtag'), textEl=$('#text'), nextEl=$('#next');
const controlsEl=$('#controls'), rolesEl=$('#roles'), sheetEl=$('#sheet'), sheetCard=$('#sheetCard');

let curView=null;
function setPos(p){ charEl.style.left=p[0]; charEl.style.bottom=p[1]; charEl.style.height=p[2]; }
function setView(_v,...rest){ if(_v!=='inv'){ const L=$('#npcl'); if(L) L.hidden=true; } return setView0(_v,...rest); }
function setView0(view,who,expr,action){
  const key=action?'action:'+who:view;
  if(key!==curView){
    curView=key; if(action) Music.sting('zoom');
    if(action){ bgEl.innerHTML=BG.action(ACTION_COL[who]||'#2b4478'); deskEl.innerHTML=''; setPos((ASSETS.sprites&&ASSETS.sprites[who])?['50%','-16%','108%']:['50%','-10%','116%']); sceneEl.classList.add('is-action'); }
    else { const V=VIEWS[view], AB=ASSETS.bg||{}, AD=ASSETS.desk||{}, bk=view==='def'?'pros':view;
      bgEl.innerHTML=AB[bk]?`<img class="bgimg${view==='def'?' flip':''}" src="${AB[bk]}" alt="">`:V.bg;
      deskEl.innerHTML=AD[bk]?`<div class="deskwrap d-${view}"><img class="deskimg${view==='pros'?' flip':''}" src="${AD[bk]}" alt=""></div>${view==='pros'||view==='def'?`<span class="dplate p-${view}">${view==='pros'?'검사':'변호인'}</span>`:''}`:V.desk;
      setPos((ASSETS.sprites&&ASSETS.sprites[who]&&V.posImg)||V.pos); sceneEl.classList.remove('is-action'); }
    if(VIEWS[view]&&VIEWS[view].nochar){ charEl.innerHTML=''; charEl.dataset.key='none'; }
    sceneEl.classList.remove('cut'); void sceneEl.offsetWidth; sceneEl.classList.add('cut');
  }
  const k=who+':'+expr;
  if(VIEWS[view]&&VIEWS[view].nochar) return;
  if(charEl.dataset.key!==k){ charEl.innerHTML=charView(who,CAST[who],expr); charEl.dataset.key=k; charEl.classList.toggle('break',expr==='breakdown'); }
}
function setName(who,tag){
  nameEl.textContent=NAMES[who]||who; dialogEl.dataset.who=({player:'player',rival:'rival',judge:'judge',guide:'guide',voice:'guide'})[who]||'witness';
  if(tag){ dtagEl.textContent=tag; dtagEl.hidden=false; } else dtagEl.hidden=true;
}

/* 글자 하나씩: [[낱말]]은 강조색 */
function segs(t){ const out=[]; String(t).split(/(\[\[.*?\]\])/).forEach(p=>{ if(!p) return; if(p.startsWith('[[')) out.push({t:Array.from(p.slice(2,-2)),kw:true}); else out.push({t:Array.from(p),kw:false}); }); return out; }
function partial(sg,n){ let html='', left=n; for(const s of sg){ if(left<=0) break; const take=s.t.slice(0,left).join(''); left-=s.t.length; html+=s.kw?`<span class="kw">${esc(take)}</span>`:esc(take); } return html; }
let typing=null, advanceResolver=null, skipCurrent=null;
function typeText(text,who){
  textEl.classList.toggle('thought',/^\s*[(（]/.test(String(text)));
  if(typing){ clearTimeout(typing.timer); const old=typing; typing=null; old.resolve(); }
  return new Promise(resolve=>{
    const sg=segs(text), total=sg.reduce((a,s)=>a+s.t.length,0), flat=sg.flatMap(s=>s.t);
    let n=0; textEl.innerHTML=''; charEl.classList.add('talking');
    const t={timer:null,resolve:resolve,finish:null};
    if(window.__yjFast){ textEl.innerHTML=partial(sg,total); typing=null; resolve(); return; }
    t.finish=()=>{ clearTimeout(t.timer); textEl.innerHTML=partial(sg,total); charEl.classList.remove('talking'); if(typing===t) typing=null; resolve(); };
    const tick=()=>{
      if(typing!==t) return;
      if(n>=total){ t.finish(); return; }
      const ch=flat[n++]; textEl.innerHTML=partial(sg,n);
      if(n%2===1 && ch.trim()) SFX.blip(who);
      t.timer=setTimeout(tick,(/[.!?…,]/.test(ch)?110:26)*TEXT_SPEED[textSpeed].f);
    };
    if(TEXT_SPEED[textSpeed].f===0){ typing=t; t.finish(); return; }
    typing=t; tick();
  });
}
function onAdvance(){
  if(skipCurrent){ skipCurrent(); return; }
  if(typing){ typing.finish(); return; }
  if(advanceResolver){ const r=advanceResolver; advanceResolver=null; r(); }
}
function logLine(who,text,o){
  S.hist=S.hist||[]; const t=plain(text); const e={n:NAMES[who]||'',t:t,c:(o&&o.testimony)?'testi':(/^\s*[(（]/.test(t)?'thought':'')};
  const L=S.hist[S.hist.length-1]; if(L&&L.t===e.t&&L.n===e.n) return;
  if(e.c==='testi' && S.hist.some(x=>x.c==='testi'&&x.t===e.t)) return; S.hist.push(e); if(S.hist.length>250) S.hist.shift();
}
function openHistory(back){
  const H=S.hist||[];
  openSheet(`<h2>대화 기록</h2><p class="lead">지금까지 나온 말을 다시 볼 수 있어요. 증언은 초록, 속마음은 하늘색이에요.</p>
    <div class="hist" id="histBox">${H.length?H.map(e=>`<div class="hl ${e.c}"><b>${esc(e.n)}</b><span>${esc(e.t)}${e.shadow?` <button class="abtn replay" type="button" data-shadow="${e.shadow}">▶ 다시 보기</button>`:''}</span></div>`).join(''):'<p>아직 기록이 없어요.</p>'}</div>
    <div class="sheet-foot"><button class="abtn primary" type="button" data-act="hclose">${back?'증거 수첩으로 돌아가기':'닫기'}</button></div>`,true);
  const box=$('#histBox'); if(box) box.scrollTop=box.scrollHeight;
  sheetCard.querySelector('[data-act=hclose]').addEventListener('click',closeSheet);
  sheetCard.querySelectorAll('[data-shadow]').forEach(b=>b.addEventListener('click',async()=>{ const k=b.dataset.shadow; onSheetClose=null; closeSheet(); track('shadow_replay',{scene:k}); await playShadow(k,true); openHistory(back); }));
  onSheetClose=back?()=>setTimeout(back,40):null;
}
async function say(who,expr,text,opts){
  opts=opts||{}; logLine(who,text,opts); noteTerms(text);
  if(opts.view!=='inv' && (opts.view||VIEW_OF[who])) setView(opts.view||VIEW_OF[who],who,expr,opts.action); setName(who,opts.tag);
  textEl.className='text'+(opts.testimony?' testimony':'');
  nextEl.hidden=true;
  await typeText(text,who);
  nextEl.hidden=false;
  await new Promise(r=>{ advanceResolver=r; });
  nextEl.hidden=true;
}
async function line(arr){ for(const x of arr) await say(x[0],x[1],x[2],x[3]); }

/* ===== 연출 ===== */
function flash(){ flashEl.classList.remove('on'); void flashEl.offsetWidth; flashEl.classList.add('on'); }
function shake(cls){ cls=cls||'shake'; stageEl.classList.remove('shake','quake'); void stageEl.offsetWidth; stageEl.classList.add(cls); }
function setMood(m){ stageEl.dataset.mood=m; }
async function slam(){ bangEl.classList.remove('show'); void bangEl.offsetWidth; bangEl.classList.add('show'); Music.sting('slam'); shake(); await wait(420); }
function showEvidence(id){ const e=EV_BY_ID[id]; if(!e) return; $('#evIc').innerHTML=evArt(e); $('#evT').textContent=e.title; $('#evwin').classList.add('show'); }
function hideEvidence(){ $('#evwin').classList.remove('show'); }
function shoutSVG(text,kind){
  const P={objection:['#fbf1da','#120d0a','#d9a93f',880],hold:['#1f3358','#fbf1da','#8fd3ff',600],evidence:['#24524f','#fbf1da','#f6d77a',700]}[kind];
  let sp=''; [[90,70,14],[930,80,10],[60,300,9],[950,286,16],[150,40,6],[880,320,7],[520,30,8]].forEach(c=>{ sp+=`<circle cx="${c[0]}" cy="${c[1]}" r="${c[2]}" fill="${P[0]}"/>`; });
  return `<svg viewBox="0 0 1000 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${text}"><defs><filter id="shTorn" x="-5%" y="-10%" width="110%" height="120%"><feTurbulence type="fractalNoise" baseFrequency=".035" numOctaves="3" seed="7"/><feDisplacementMap in="SourceGraphic" scale="30"/></filter><filter id="shInk" x="-5%" y="-10%" width="110%" height="120%"><feTurbulence type="fractalNoise" baseFrequency=".7" numOctaves="2" seed="3"/><feDisplacementMap in="SourceGraphic" scale="4"/></filter></defs>`+
    `<g filter="url(#shTorn)"><path d="M70,96 L930,58 L952,294 L48,310 Z" fill="${P[2]}"/><path d="M84,108 L916,72 L936,282 L62,296 Z" fill="${P[0]}"/></g>${sp}`+
    `<text x="500" y="236" text-anchor="middle" font-size="138" font-family="Black Han Sans,Noto Sans KR,sans-serif" textLength="${P[3]}" lengthAdjust="spacingAndGlyphs" fill="${P[1]}" stroke="${P[2]}" stroke-width="9" paint-order="stroke" filter="url(#shInk)">${text}</text></svg>`;
}
function overlay(el,ms,setup,cls){
  return new Promise(res=>{
    setup(); el.className=el.className.split(' ')[0]+' show'+(cls?' '+cls:'');
    let done=false;
    const fin=()=>{ if(done) return; done=true; clearTimeout(tm); el.className=el.className.split(' ')[0]; skipCurrent=null; setTimeout(res,120); };
    const tm=setTimeout(fin,ms);
    el.onclick=fin; skipCurrent=fin;
  });
}
function shout(kind){
  const t={objection:'이의 있습니다!',hold:'잠깐만요!',evidence:'이걸 보시죠!'}[kind];
  if(kind!=='objection') Music.duck(1100);
  Music.sting('whoosh');
  return wait(240).then(()=>overlay(shoutEl,kind==='objection'?1500:1150,()=>{ $('#shoutBub').innerHTML=shoutSVG(t,kind); shake(); flash(); Music.sting(kind); },kind));
}
function titleCard(main,sub){ return overlay(tcEl,1800,()=>{ $('#tcMain').textContent=main; $('#tcSub').textContent=sub||''; SFX.title(); }); }
async function gavel(){ gavelEl.classList.remove('show'); void gavelEl.offsetWidth; gavelEl.classList.add('show'); SFX.gavel(); shake(); await wait(1050); gavelEl.classList.remove('show'); }

/* ===== 재판부 신뢰: 해치 방울 다섯 개 ===== */
const BELL=on=>`<svg class="bell${on?'':' off'}" viewBox="0 0 40 46" aria-hidden="true"><defs><linearGradient id="bg${on?1:0}" x1="0" y1="0" x2=".7" y2="1"><stop offset="0" stop-color="#fff1b8"/><stop offset=".5" stop-color="#e2b54e"/><stop offset="1" stop-color="#8a5f17"/></linearGradient></defs><path d="M20,2 C24,2 26,5 25,8 C32,10 35,17 35,25 L38,36 H2 L5,25 C5,17 8,10 15,8 C14,5 16,2 20,2 Z" fill="url(#bg${on?1:0})" stroke="#2a1a14" stroke-width="2.4"/><path d="M6,30 H34" stroke="#7a5414" stroke-width="2"/><circle cx="20" cy="40" r="4.4" fill="#5a3d10" stroke="#2a1a14" stroke-width="2"/><path d="M12,16 C13,12 16,10 19,10" stroke="#fff6d0" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`;
const S={trust:5};
const ME=()=>S.me||'player';
const ROLE_NAME=()=>S.me==='rival'?'변호인':S.me==='daon'?'판사':'검사';
/* 사건 3부터: 사건 데이터 등록부 (story3.js~가 채움). 첫 화면이 먼저 그려지므로 여기 둔다 */
const CASE_DATA={};
const SAVE_KEY='yj-story-1';
const PHASE_NAME={1:'조사 1',2:'법정 1일차',3:'조사 2',4:'법정 2일차'};
function renderGauge(){
  const n=S.trust;
  $('#hud').classList.toggle('danger',n<=2);
  $('#bells').innerHTML=Array.from({length:5},(_,i)=>BELL(i<n)).join('');
  $('#gaugeNum').textContent=`${n}/5`;
}
function markUsed(ids){ S.used=S.used||new Set(); ids.forEach(id=>{ const e=EV_BY_ID[id]; if(e && !e.reuse) S.used.add(id); }); }
const isUsed=id=>!S.allowUsed && !!(S.used&&S.used.has(id));
async function gainTrust(){
  if(S.slip){ S.slip=false; return; }
  if(S.trust>=5) return;
  S.trust=Math.min(5,S.trust+1); renderGauge(); Music.sting('heal');
  const on=document.querySelectorAll('.bell:not(.off)'); const b=on[on.length-1]; if(b) b.classList.add('gaining');
  const t=document.createElement('div'); t.className='heal-toast'; t.textContent='해치 방울 +1'; $('#hud').appendChild(t); setTimeout(()=>t.remove(),1500);
  await wait(500);
}
async function loseTrust(){
  S.slip=true;
  SFX.wrong(); setTimeout(()=>Music.sting('crack'),380);
  stageEl.classList.remove('hurt'); void stageEl.offsetWidth; stageEl.classList.add('hurt');
  const on=document.querySelectorAll('.bell:not(.off)'); const last=on[on.length-1];
  if(last){ last.classList.add('losing'); await wait(700); }
  S.trust=Math.max(0,S.trust-1); renderGauge(); await wait(150);
}
function buildLines(v){ return ORDER.map((L,i)=>({expr:L.expr, truth:L.truth, lieV:L.lie, isLie:i===v, cur:i===v?L.lie:L.truth})); }
function resetState(){
  const last=parseInt(store.get('yj-last-variant')||'-1',10);
  const pool=[0,1,2,3,4].filter(v=>v!==last);
  const v=pool[Math.floor(Math.random()*pool.length)];
  store.set('yj-last-variant',String(v));
  S.trust=5; S.variant=v; S.idx=0; S.log=[]; S.used=new Set(); S.presses=0; S.classify={}; S.A=null; S.B=null; S.busy=false; S.done=false;
  S.aOpts=shuffle(VERDICT_A); S.bOpts=shuffle(VERDICT_B);
  S.lines=buildLines(v); S.story=false; S.onLose=null; S.found=S.found||new Set();
  renderGauge();
}
const correctCat=L=>L.isLie?'lie':L.truth.cat;
function bgm(id){ S.bgm=id; Music.play(id); setMood(id); }

/* ===== 진행 ===== */
let played=false;
async function startTrial(fromInv){
  closeSheet(); Music.resume(); titleEl.hidden=true;
  rolesEl.hidden=true; controlsEl.hidden=true,$('#pips')&&($('#pips').hidden=true); $('#invbar').hidden=true; $('#lens').hidden=true; stageEl.classList.remove('inv');
  const inv=fromInv===true?S.invFound:null;
  resetState(); S.inTrial=true; S.invFound=inv;
  bgm('open');
  if(!played){
    Music.sting('murmur'); await wait(900);
    await say('judge','normal','지금부터 [[역사 법정]]을 엽니다.');
    await gavel();
    await say('judge','normal','오늘의 피고는 백제의 마지막 왕, [[의자왕]]입니다.');
    await say('defendant','smug','흥. 나라가 망한 게 왜 내 탓이란 말이오?');
    await say('rival','confident','변호인 누리입니다. 피고에 대한 소문 가운데에는 부풀려진 것이 많습니다.');
    await say('player','confident','검사 하람입니다. 소문이 아니라 [[증거]]로, 백제가 무너진 책임을 따지겠습니다.');
    await say('judge','normal','피고는 증언하시오. 검사는 증거로 따지시오.');
    await say('judge','stern','엉뚱한 증거를 내면 [[해치 방울]]이 하나씩 깨집니다. 다섯 개가 모두 깨지면 검사가 집니다.');
  } else {
    await say('judge','normal','다시 재판을 엽니다. 피고의 말이 지난번과 다를 수 있습니다.');
    await gavel();
  }
  played=true;
  bgm('testimony');
  await titleCard('― 증언 ―','백제가 망한 것은 내 탓이 아니다');
  for(let i=0;i<S.lines.length;i++){ const L=S.lines[i]; await say('defendant',L.expr,L.cur.text,{testimony:true, tag:`증언 ${i+1}/${S.lines.length}`}); }
  await say('judge','normal','이 증언 가운데 [[사료와 맞지 않는 말]]이 있는지 따져 보시오.');
  bgm('cross');
  await titleCard('― 추궁 ―','더 묻고, 틀린 말에는 증거를 내세요');
  await crossExam(quickT());
}
/* 추궁: 증언 묶음 T를 받아 풀릴 때까지 진행. 숨은 증언(reveal), 확정 사실 안내(fact), 거짓(lie+ev)을 처리 */
let CX=null;
function crossExam(T){ return new Promise(res=>{ CX={T:T,res:res,vis:T.lines.map((l,i)=>l.hidden?-1:i).filter(i=>i>=0),pos:-1}; enterCross(0); }); }
function quickT(){ return {key:'T1',who:'defendant',lines:S.lines.map(L=>({text:L.cur.text,expr:L.expr,press:L.cur.press,lie:L.isLie,ev:L.cur.ev,hit:L.cur.hit})),onHit:quickHit}; }
function curLine(){ return CX.T.lines[CX.vis[CX.pos]]; }
function enterCross(pos){
  if(!CX) return;
  if(CX.pos!==pos) Music.sting('tick');
  CX.pos=pos; S.idx=CX.vis[pos]; const L=curLine(), who=CX.T.who;
  setView('witness',who,L.expr||'normal');
  setName(who,`추궁 ${pos+1}/${CX.vis.length}`);
  CX.seen=CX.seen||new Set(); CX.seen.add(CX.vis[pos]);
  { const ob=$('#bObserve'); if(ob) ob.hidden=!CX.T.habit; }
  $('#pips').innerHTML=CX.vis.map((li,k)=>{ const l=CX.T.lines[li]; const st=l.broken?'broken':(l.pressed?'pressed':(CX.seen.has(li)?'seen':'')); return `<button class="pip ${st}${l.habitSeen&&!l.broken?' habit':''}${k===pos?' cur':''}" type="button" data-k="${k}" aria-label="${k+1}번째 증언${l.broken?' (깸)':l.pressed?' (물어봄)':''}">${l.broken?'✓':k+1}</button>`; }).join('');
  $('#pips').hidden=false;
  $('#pips').querySelectorAll('.pip').forEach(b=>b.addEventListener('click',()=>{ if(!S.busy && CX) enterCross(+b.dataset.k); }));
  textEl.className='text testimony'; nextEl.hidden=true;
  typeText(L.text,who); logLine(who,L.text,{testimony:true});
  controlsEl.hidden=false;
}
function crossStep(d){ if(!CX||S.busy) return; enterCross((CX.pos+d+CX.vis.length)%CX.vis.length); }
/* 버릇 살피기: 증인을 확대해 거짓말할 때만 나오는 버릇을 찾는다. 어느 문장이 수상한지만 알려 주고, 깰 증거는 알려 주지 않는다 */
async function doObserve(){
  if(S.busy||!CX||!CX.T.habit) return; S.busy=true; controlsEl.hidden=true; $('#pips').hidden=true;
  const L=curLine(), hit=!!((L.lie||L.sus)&&!L.broken); S.observes=(S.observes||0)+1;
  track('observe',{key:CX.T.key||'',line:CX.vis[CX.pos]+1,hit:hit});
  Music.sting('zoom'); stageEl.classList.add('observe');
  if(hit){ L.habitSeen=true; Music.sting('realize'); await say(ME(),'shock',`(…지금! 증인이 [[${CX.T.habit}]]. 이 말을 할 때만 그래. 이 문장이 수상해!)`); }
  else await say(ME(),'think','(증인을 자세히 살펴봤다. 이 말을 할 때는 특별한 버릇이 보이지 않는다.)');
  stageEl.classList.remove('observe'); S.busy=false; enterCross(CX.pos);
}
async function doPress(){
  if(CX){ const l=curLine(); if(l) l.pressed=true; }
  if(S.busy||!CX) return; S.busy=true; controlsEl.hidden=true,$('#pips')&&($('#pips').hidden=true); S.presses++;
  const L=curLine();
  await shout('hold');
  if(L.press) await line(L.press);
  if(L.endOnPress && !CX.T.lines.some(l=>l.lie&&!l.broken)){ controlsEl.hidden=true,$('#pips')&&($('#pips').hidden=true); S.busy=false; const res=CX.res; CX=null; res(); return; }
  track('press',{key:CX.T.key||'',line:CX.vis[CX.pos]+1,reveal:L.reveal!==undefined&&!CX.vis.includes(L.reveal)});
  if(L.reveal!==undefined && !CX.vis.includes(L.reveal)){
    Music.sting('realize'); flash();
    CX.vis.splice(CX.pos+1,0,L.reveal);
    await say('judge','stern','증언에 [[새 문장]]이 더해졌습니다.');
    const NL=CX.T.lines[L.reveal];
    if(NL.gives && CX.T.solve!=='reveal'){ await say(CX.T.who,NL.expr||'normal',NL.text,{testimony:true,tag:'새 증언'}); for(const id of NL.gives){ if(S.found.has(id)) continue; S.found.add(id); Music.sting('get'); showEvidence(id); await say('guide','normal',`증거 수첩에 [[${EV_BY_ID[id].title}]]을(를) 넣었다.`); hideEvidence(); track('ev_found',{id:id,from:'testimony'}); } }
    if(CX.T.solve==='reveal'){ CX.pos=CX.pos+1; S.idx=CX.vis[CX.pos]; const R=curLine();
      await say(CX.T.who,R.expr||'normal',R.text,{testimony:true,tag:'새 증언'});
      controlsEl.hidden=true,$('#pips')&&($('#pips').hidden=true); S.busy=false; const T=CX.T, res=CX.res; CX=null; if(T.onReveal) await T.onReveal(); res(); return; }
    if(CX.T.allReveal && !crossLeft(CX)){ controlsEl.hidden=true; $('#pips').hidden=true; S.busy=false; const T=CX.T, res=CX.res; CX=null; if(T.onHit) await T.onHit(); res(); return; }
    S.busy=false; enterCross(CX.pos+1); return;
  }
  S.busy=false; enterCross(CX.pos);
}
/* 아직 깰 거짓이 남았는가. allReveal이면 숨은 말을 다 끌어낼 때까지 끝나지 않는다 */
function crossLeft(cx){ const T=cx.T; return T.lines.some(l=>l.lie&&!l.broken) || (!!T.allReveal && T.lines.some(l=>l.reveal!==undefined && !cx.vis.includes(l.reveal))); }
async function doPresent(id){
  const pend=S.combo; onSheetClose=null; closeSheet(); S.combo=pend; if(S.busy||!CX) return; S.busy=true; controlsEl.hidden=true,$('#pips')&&($('#pips').hidden=true);
  const L=curLine(), card=EV_BY_ID[id];
  if(L.lie && L.need2){
    if(L.need2.includes(id) && !S.combo){
      S.combo=id; showEvidence(id); await say(ME(),'present',`‘${card.title}’…!`); hideEvidence();
      await say('judge','stern','그 증거 하나로는 [[모자라오]]. 함께 낼 증거가 있다면 하나 더 고르시오.');
      S.busy=false; openRecord(true); const h=sheetCard.querySelector('.lead'); if(h) h.innerHTML='함께 낼 <b>두 번째 증거</b>를 고르세요.';
      onSheetClose=()=>{ if(S.combo&&CX){ S.combo=null; S.log.push({line:(CX.T.key||'')+' '+(CX.vis[CX.pos]+1),card:id,ok:false}); enterCross(CX.pos); } };
      return;
    }
    const pair=S.combo; S.combo=null; onSheetClose=null;
    const ok2=pair && pair!==id && L.need2.includes(id) && L.need2.includes(pair);
    S.log.push({line:(CX.T.key?CX.T.key+' ':'')+(CX.vis[CX.pos]+1), card:(pair?pair+'+':'')+id, ok:ok2});
    if(!ok2){ track('present',{key:CX.T.key||'',line:CX.vis[CX.pos]+1,ev:(pair?pair+'+':'')+id,ok:false}); await wrongPresent(card); return; }
  }
  const ok=!!L.lie && (L.need2?true:(Array.isArray(L.ev)?L.ev.includes(id):L.ev===id));
  if(!L.need2) S.log.push({line:(CX.T.key?CX.T.key+' ':'')+(CX.vis[CX.pos]+1), card:id, ok:ok});
  { const lg=S.log[S.log.length-1]; track('present',{key:CX.T.key||'',line:CX.vis[CX.pos]+1,ev:lg.card,ok:lg.ok}); }
  if(ok){
    const cx=CX, T=CX.T, res=CX.res; CX=null; L.broken=true;
    const left=crossLeft(cx);
    Music.stop(0.02); Music.sting('realize'); await wait(420);
    await slam();
    await shout('objection');
    bgm('turnabout');
    showEvidence(id);
    const hit=L.hit||[];
    for(let k=0;k<hit.length;k++){ const x=hit[k]; await say(x[0],x[1],x[2],{action:k===0 && x[0]===ME()}); }
    hideEvidence();
    markUsed(L.need2?[id,...L.need2]:[id]);
    await gainTrust();
    if(left){ CX=cx; S.busy=false; bgm('cross'); await say('judge','stern','증언에 아직 [[따져 볼 곳]]이 남아 있소. 계속하시오.'); enterCross(cx.pos); return; }
    S.busy=false;
    if(T.onHit) await T.onHit(L,id);
    res(); return;
  }
  await wrongPresent(card);
}
async function wrongPresent(card){
  const who=CX?CX.T.who:'defendant';
  await shout('evidence');
  showEvidence(card.id);
  await say(ME(),'present',`이 증거를 보시죠. ‘${card.title}’입니다!`);
  hideEvidence();
  await say('judge','stern','그 증거로는 이 증언을 반박할 수 없습니다.');
  await loseTrust();
  if(CX){ CX.miss=(CX.miss||0)+1;
    if(CX.miss===2 && S.trust>0){ const k=CX.vis.findIndex(i=>CX.T.lines[i].lie&&!CX.T.lines[i].broken);
      if(k>=0) track('hint_line',{key:CX.T.key||'',line:k+1});
      if(k>=0) await say('judge','normal',`…검사, 힌트를 하나 주겠소. 증언 가운데 [[${k+1}번째 말]]을 잘 살펴보시오. 그 말과 어긋나는 증거가 수첩에 있을 것이오.`.replace('검사',ROLE_NAME())); } }
  if(S.trust<=0){ CX=null; await loseTrial(); return; }
  await say(who,['defendant','wiman'].includes(who)?'smug':'base','…엉뚱한 증거로군.');
  if(ME()==='rival') await say('player','smug','변호인, 증거는 증언과 [[정확히]] 맞아야 해.'); else await say('rival','smug','검사, 증거는 증언과 [[정확히]] 맞아야 합니다.');
  if(S.trust<=2 && S.bgm!=='crisis'){ bgm('crisis'); await say('judge','stern',ROLE_NAME()+', 해치 방울이 얼마 남지 않았습니다.'); }
  S.busy=false; enterCross(CX.pos);
}
async function loseTrial(){
  bgm('crisis'); track('lose',{});
  await say('judge','stern',`재판부는 더 이상 ${ROLE_NAME()}의 말을 믿을 수 없습니다. 오늘 재판은 여기까지입니다.`);
  await gavel();
  await say('judge','normal',S.me==='player'||!S.me?'다만 검사가 졌다고 피고의 책임이 사라지는 것은 아닙니다. 증거를 다시 갖춰 [[항소]]하시오.':'증거를 다시 살피고, 이어 하기로 이 날부터 다시 하시오.');
  S.busy=false; S.inTrial=false; openGameOver(); if(S.onLose){ const f=S.onLose; S.onLose=null; f(); }
}
async function quickHit(L,id){
  await say('rival','shock','그, 그럴 수가…!');
  Music.stop(0.05); Music.sting('breakdown'); flash(); shake('quake');
  await say('defendant','breakdown','으아아아…! 내, 내 증언이 무너진다…!',{action:true});
  Music.sting('murmur'); await wait(1300); await gavel();
  bgm('open');
  await say('judge','shock','허어…! 피고의 증언이 사료와 맞지 않는군요.');
  await say('rival','sweat','…변호인은 그 기록을 인정합니다.');
  await say('rival','normal','다만 피고에게도 어쩔 수 없던 사정이 있었습니다. 그 부분은 판결에서 헤아려 주십시오.');
  await say('judge','normal','좋습니다. 검사, 피고의 말을 하나씩 가려 주시오. [[거짓]]인지, [[핑계]]인지, 헤아려야 할 [[시대 상황]]인지.');
  bgm('investigate');
  openClassify();
}
async function deliverVerdict(){
  closeSheet(); bgm('open');
  await titleCard('― 판결 ―','');
  await say('judge','normal',`재판부는 ${S.A.t}을, 피고가 어쩔 수 없었던 시대 상황으로 인정합니다.`);
  await say('judge','stern',`그러나 ${S.B.t}은 피고 자신의 선택이었습니다.`);
  await say('judge','normal','따라서 백제가 무너진 책임의 일부는 피고에게 있습니다.');
  bgm('verdict');
  await gavel();
  await say('defendant','sweat','…….');
  S.done=true; S.inTrial=false; openResult();
}

/* ===== 조사 파트: 장소를 옮겨 다니며 단서를 눌러 증거를 모은다 ===== */
const LOCS=[
  {id:'archive', name:'사초 서고', time:'밤', intro:'옛 기록을 모아 둔 서고다. 이 많은 책과 두루마리 가운데 진짜 단서는 몇 개뿐이다.',
   miss:['먼지 쌓인 바닥이다.','평범한 나무 기둥이다.','책등에 아무 글씨도 없다.','특별한 건 없어 보인다.','등불이 흔들릴 뿐이다.'], spots:[
    {x:60,y:62,w:19,h:11, label:'탁자 위 펼친 두루마리', ev:'E3', say:['펼쳐진 두루마리다. 글씨가 빽빽하다.','[[성충]]이라는 신하가 옥에서 왕에게 올린 글이다. “[[탄현]]과 [[기벌포]]를 막으소서.”']},
    {x:11,y:45,w:5,h:10, label:'파란 표지의 책', ev:'E4', say:['서가에서 유독 파란 표지의 책 한 권이 튀어나와 있다.','「삼국사기」다. 바른말을 한 성충이 [[옥에 갇혔다]]는 대목에 접은 자국이 있다.']},
    {x:75,y:18.5,w:5,h:8, label:'오른쪽 서가 맨 위 두루마리', ev:'E5', say:['맨 위 칸 두루마리 하나에만 붉은 끈이 묶여 있다.','643년의 기록이다. 백제가 [[고구려와 손을 잡았다]]고 한다.']},
    {x:54,y:29,w:4,h:6, label:'창밖의 달', say:['달이 밝다. 단서는 아니다.']},
    {x:92,y:59,w:8,h:10, label:'붉은 상자', say:['자물쇠가 단단히 잠겨 있다. 지금은 열 수 없다.'],
      p2:{need:'K1', lockedSay:['붉은 상자다. 자물쇠가 잠겨 있다. 열쇠가 있으면 열 수 있을 텐데.'], say:['녹슨 열쇠를 넣고 돌리자… 딸깍, 자물쇠가 열렸다!','안에는 고려 때 엮은 책 한 묶음과, 훨씬 뒤에 찍은 얇은 시집이 들어 있다.'], gives:['E11','E12']}},
    {x:2,y:83,w:12,h:10, label:'바닥에 떨어진 종이', only2:true, say:['누가 떨어뜨린 종이다. 서고 정리 목록일 뿐이다.']},
    {x:45,y:49,w:8,h:5, label:'안쪽 탁자의 두루마리', say:['안쪽 탁자의 두루마리들은 모두 백지다.']}]},
  {id:'ruins', name:'사비성 터', time:'해 질 녘', rooms:[
   {id:'ruins', name:'성문 앞', intro:'백제의 마지막 도읍이 무너진 자리다. 1300년도 더 지난 흔적을 찾아야 한다.',
    miss:['흙과 돌뿐이다.','바람이 차다.','부서진 돌 조각이다. 단서는 아니다.','이 근처엔 아무것도 없다.','발자국 하나 남아 있지 않다.'], spots:[
     {x:21.5,y:38.5,w:9,h:7.5, label:'성문 판자에 박힌 막대', ev:'E8', say:['성문 판자에 비스듬히 박힌 막대가 있다. 자세히 보니 [[부러진 화살대]]다. 끝에 녹슨 화살촉이 깊이 박혀 있다.','바다 쪽에서 날아온 방향이다. 적은 [[바다 쪽 기벌포]]와 [[산길 탄현]]으로 들어왔다고 한다.']},
     {x:79,y:15,w:9,h:22, label:'깃발의 무늬', ev:'E2', say:['깃발 한가운데 낯선 무늬가 있다. 백제의 깃발이 아니다.','기록에는 [[당군 13만, 신라군 5만]]이 왔다고 한다.']},
     {x:56,y:45,w:13,h:8, label:'멀리 보이는 강', say:['멀리 강이 흐른다. 저쪽 강가로 가 보면 뭔가 있을지도 모른다.']},
     {x:14,y:76,w:18,h:14, label:'연꽃무늬 기와', say:['연꽃무늬 기와 조각이다. 백제 사람들의 솜씨가 보인다. 재판과는 관계가 없다.']},
     {x:82,y:70,w:15,h:12, label:'부서진 기와', say:['부서진 지붕 기와다. 단서는 아니다.']},
     {x:7,y:20,w:14,h:42, label:'성문 판자', say:['불에 그을린 판자다. 다른 데를 더 보자.']},
     {x:44,y:62,w:12,h:10, label:'흙길의 바퀴 자국', only2:true, say:['수레바퀴 자국이다. 오늘 지나간 것 같다. 단서는 아니다.']}]},
   {id:'ruins-cliff', name:'강가 절벽', intro:'성 뒤편 강가다. 깎아지른 바위 아래로 강물이 흐른다.',
    miss:['바위틈에 풀이 자라 있다.','강바람이 세다.','물소리만 들린다.','아무것도 없다.'], spots:[
     {x:66,y:61,w:13,h:33, label:'절벽 끝 바위', ev:'E7', say:['강 쪽으로 툭 튀어나온 큰 바위다.','[[낙화암]] 이야기가 전해지는 곳이다. 그런데 ‘3천 명’이라는 숫자는 옛 기록에 없다. 누가 언제 쓴 이야기일까?']},
     {x:12,y:38,w:8,h:31, label:'글자 없는 비석', say:['글자가 다 닳아 없어진 비석이다. 읽을 수 없다.']},
     {x:0,y:63,w:10,h:14, label:'바위틈의 꽃', say:['바위틈에 핀 진달래다. 단서는 아니다.']},
     {x:82,y:42,w:18,h:30, label:'강물', say:['강물이 노을에 붉게 물들었다. 강 위에는 아무것도 없다.']},
     {x:40,y:78,w:12,h:10, label:'길 위의 발자국', only2:true, say:['새 발자국이다. 누군가 어제 이 길을 지나갔나 보다. 단서는 아니다.']}]},
   {id:'ruins-palace', name:'무너진 궁터', intro:'왕이 머물던 궁궐 자리다. 기둥은 사라지고 주춧돌만 남았다.',
    miss:['풀만 무성하다.','평범한 흙바닥이다.','깨진 돌이다.','특별한 건 없다.'], spots:[
     {x:81,y:47,w:15,h:17, label:'돌우물', say:['나무 뚜껑이 덮인 우물이다. 뚜껑이 너무 무거워 열 수 없다.'],
       p2:{say:['어제는 닫혀 있던 우물 뚜껑이 옆으로 밀려나 있다.','두레박 줄 끝에 뭔가 걸려 반짝인다… [[녹슨 열쇠]]다!'], ev:'K1'}},
     {x:20,y:61,w:14,h:9, label:'주춧돌', say:['기둥을 받치던 주춧돌이다. 줄지어 놓인 것을 보면 큰 건물이었나 보다.']},
     {x:10,y:40,w:15,h:16, label:'돌계단', say:['궁궐로 오르던 돌계단이다. 여기엔 단서가 없다.']},
     {x:78,y:50,w:3,h:24, label:'불탄 기둥', say:['불에 탄 기둥 밑동이다. 궁궐이 불탔던 흔적이다.']}]}]},
  {id:'museum', name:'박물관 전시실', time:'저녁', intro:'오늘날의 박물관이다. 유물은 많지만, 쟁점과 이어지는 것은 많지 않다.',
   miss:['반짝이는 바닥이다.','빈 벽이다.','조명이 비칠 뿐이다.','관람객 안내선이다. 단서는 아니다.','아무것도 없다.'], spots:[
    {x:63.5,y:40,w:8,h:33, label:'금동대향로', ev:'E6', say:['[[백제 금동대향로]]다. 부여 능산리 절터에서 나왔다.','멋진 유물이지만, 이 재판의 쟁점과 관계가 있을까?']},
    {x:80.5,y:63.5,w:6.5,h:5, label:'진열장 앞 작은 안내판', ev:'E1', say:['진열장 앞에 작은 안내판이 붙어 있다.','연표다. [[642년]], 의자왕이 신라의 성 40여 곳을 빼앗았다.']},
    {x:1,y:21,w:17,h:30, label:'벽의 그림', say:['산수화 같은 그림이다. 재판과는 관계가 없다.']},
    {x:0,y:56,w:26,h:10, label:'왼쪽 진열장', say:['기와와 토기 조각이다. 지금 재판과는 관계가 없어 보인다.']},
    {x:25,y:18,w:13,h:35, label:'창밖 풍경', say:['창밖으로 도시의 불빛이 보인다.']},
    {x:40,y:30,w:10,h:24, label:'가운데 벽의 그림', only2:true, say:['오늘 새로 건 그림이다. 재판과는 관계가 없다.']}]}
];
function locBG(id){
  const A=ASSETS.bg||{}; if(A[id]) return `<img class="bgimg" src="${A[id]}" alt="">`;
  const C={archive:['#1b2238','#3a2a20','#f0b860'],museum:['#141a26','#2a3040','#d8c890']}[id]||['#e8925a','#6a3a52','#4a3a2a'];
  /* 그림이 아직 없는 장소: 조사할 물건을 모두(단서·미끼 구별 없이) 스케치처럼 그려 둔다 */
  let room=null; LOCS.forEach(l=>(l.rooms||[l]).forEach(r=>{ if(r.id===id) room=r; }));
  const items=room&&room.spots?room.spots.map(p=>{ const x=p.x*16, y=p.y*9, w=p.w*16, h=p.h*9;
    return `<g><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="#fff4dc" fill-opacity=".14" stroke="#fff4dc" stroke-opacity=".55" stroke-width="4" stroke-dasharray="14 10"/><text x="${x+w/2}" y="${y+h/2+12}" text-anchor="middle" font-size="${Math.max(24,Math.min(38,w/7))}" font-family="Noto Sans KR,sans-serif" font-weight="700" fill="#fff4dc" fill-opacity=".8">${esc(p.label)}</text></g>`; }).join(''):'';
  return SV+`<defs>${lg('lc',[[0,C[0]],[1,C[1]]])}</defs><rect width="1600" height="900" fill="url(#lc)"/><circle cx="800" cy="300" r="260" fill="${C[2]}" opacity=".12"/><rect y="700" width="1600" height="200" fill="#000" opacity=".25"/>${items}${room?`<text x="1580" y="880" text-anchor="end" font-size="30" font-family="Noto Sans KR,sans-serif" fill="#fff4dc" fill-opacity=".6">${esc(room.name||'')} · 그림 준비 중</text>`:''}</svg>`;
}
let invLoc=null, invParent=null;
const locSpots=l=>(l.rooms?l.rooms.flatMap(r=>r.spots):l.spots);
const totalEv=()=>LOCS.reduce((a,l)=>a+locSpots(l).filter(p=>p.ev).length,0);
let invDone=null;
function investigate(phase,intro){
  return new Promise(async res=>{
    preloadBG(); invDone=res; S.phase=phase; S.mode='inv';
    const first=LOCS[0].id; S.seen=S.seen||new Set(); S.misses=S.misses||0;
    controlsEl.hidden=true,$('#pips')&&($('#pips').hidden=true); bgm('investigate'); hideEvidence();
    goLoc(first,true); $('#invbar').hidden=false;
    await say(ME(),'normal',intro||'증거를 모으자.',{view:'inv'});
  });
}
async function startInvestigation(){
  preloadBG();
  closeSheet(); Music.resume(); titleEl.hidden=true; rolesEl.hidden=true; controlsEl.hidden=true,$('#pips')&&($('#pips').hidden=true);
  resetState(); S.inTrial=true; S.found=new Set(); S.seen=new Set(); S.misses=0; S.mode='inv'; S.phase=1;
  bgm('investigate'); hideEvidence();
  goLoc('archive',true);
  $('#invbar').hidden=false;
  await say('player','normal','재판 전에 증거부터 모아야 해. [[돋보기]]를 움직여 수상한 곳을 조사하자. 방향키로 움직이고 [[Enter]]로 조사할 수도 있어.',{view:'inv'});
}
const TEXT_SPEED=[{n:'보통',f:1},{n:'빠르게',f:.45},{n:'바로',f:0}];
let textSpeed=+(store.get('yj-speed')||0)||0;
const QUICK_EV=['E1','E2','E3','E4','E5','E6','E7','E8'];
let moving=false;
const P2=()=>S.p2at||2;
const avail=x=>!!x && (!x.from||S.phase>=x.from) && (!x.until||S.phase<=x.until) && (!x.role||x.role===S.role);
const availLocs=()=>LOCS.filter(avail);
const roomsOf=l=>(l.rooms||[l]).filter(avail);
/* 조사 중 대사가 나오는 동안 장소·구역을 누르면, 남은 대사를 건너뛰고 바로 옮긴다 */
function invInterrupt(){ S.invSkip=true; if(skipCurrent){ skipCurrent(); } if(typing) typing.finish(); if(advanceResolver){ const r=advanceResolver; advanceResolver=null; r(); } }
async function invGo(fn){
  if(moving) return;
  if(S.busy){ for(let i=0;i<60&&S.busy;i++){ invInterrupt(); await wait(20); } }
  S.invSkip=false; if(!S.busy && !moving) fn();
}
const BGNODE={};
function preloadBG(){ Object.entries(ASSETS.bg||{}).forEach(([k,src])=>{ if(BGNODE[k]) return; const im=new Image(); im.className='bgimg'; im.alt=''; im.src=src; if(im.decode) im.decode().catch(()=>{}); BGNODE[k]=im; }); }
/* 미리 해독해 둔 그림 요소를 그대로 옮겨 써서, 이동할 때 새 그림이 늦게 뜨지 않게 한다 */
function putBG(host,id){ host.innerHTML=''; const n=BGNODE[id]; if(n){ host.appendChild(n); } else host.innerHTML=locBG(id); }
function goLoc(id,silent){
  const next=LOCS.find(l=>l.id===id);
  if(silent||!invParent){ invParent=next; goRoom(next.rooms?roomsOf(next)[0]:next,silent,'fade'); return; }
  if(next===invParent) return;
  invParent=next; goRoom(next.rooms?roomsOf(next)[0]:next,false,'fade');
}
function roomLocked(r){
  if(!r||!r.need||S.found.has(r.need)) return false;
  (async()=>{ S.busy=true; Music.sting('miss'); for(const t of (r.lockedSay||['잠겨 있다.'])){ if(S.invSkip) break; await say(ME(),'think',t,{view:'inv'}); } S.busy=false; })();
  return true;
}
function roomStep(d){
  if(!invParent||!invParent.rooms||S.busy||moving) return;
  const R=roomsOf(invParent), i=R.indexOf(invLoc), j=i+d; if(j<0||j>=R.length) return;
  if(roomLocked(R[j])) return;
  goRoom(R[j],false,d>0?'r':'l');
}
function goRoom(room,silent,how){
  const id=room.id, from=invLoc; if(from&&from.id===id&&!silent) return;
  invLoc=room; if(!room.miss&&invParent.miss) room.miss=invParent.miss;
  track('move',{to:id});
  stageEl.classList.toggle('meet',room.kind==='meet');
  curView='loc:'+id; deskEl.innerHTML=''; charEl.innerHTML=''; charEl.dataset.key='';
  preloadBG();
  if(silent||!from){ putBG(bgEl,id); sceneEl.classList.remove('cut'); void sceneEl.offsetWidth; sceneEl.classList.add('cut'); }
  else {
    moving=true; $('#lens').hidden=true;
    if(how==='fade'){ Music.sting('step'); const f=$('#fade'); $('#fadeT').textContent=invParent.name+(invParent.rooms?' · '+room.name:''); f.classList.add('on');
      setTimeout(()=>{ putBG(bgEl,id); },200); setTimeout(()=>{ f.classList.remove('on'); moving=false; $('#lens').hidden=false; placeLens(); renderNpcLayer(); },500); }
    else { Music.sting('step');
      const outL=document.createElement('div'), inL=document.createElement('div'); outL.className=`bgl out ${how}`; inL.className=`bgl in ${how}`;
      while(bgEl.firstChild) outL.appendChild(bgEl.firstChild);
      putBG(inL,id); bgEl.appendChild(outL); bgEl.appendChild(inL);
      setTimeout(()=>{ const keep=inL.firstChild; bgEl.innerHTML=''; if(keep) bgEl.appendChild(keep); moving=false; $('#lens').hidden=false; placeLens(); renderNpcLayer(); },520); }
  }
  renderSpots(); renderInvBar();
  if(!silent){ setName('guide',(invParent.rooms?invParent.name+' · '+room.name:invParent.name)+' · '+invParent.time); textEl.className='text'; nextEl.hidden=true; typeText(room.intro||invParent.intro,'player'); }
}
/* 돋보기: 마우스·손가락·방향키로 움직이고, 누르거나 Enter·E로 조사한다. 단서는 화면에 표시되지 않는다. */
const lens={x:50,y:55};
/* 방향키를 누르고 있으면 돋보기가 부드럽게 계속 움직인다 (Shift: 빠르게) */
const LENS_DIR={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]};
const lensHeld={}; let lensFast=false, lensRAF=null, lensLast=0;
function startLensLoop(){ if(lensRAF) return; lensLast=performance.now(); lensRAF=requestAnimationFrame(lensTick); }
function lensTick(now){
  const keys=Object.keys(lensHeld); if(!keys.length||S.mode!=='inv'){ lensRAF=null; return; }
  const dt=Math.min(.05,(now-lensLast)/1000); lensLast=now; let vx=0,vy=0;
  for(const k of keys){ if(now-lensHeld[k]<160) continue; vx+=LENS_DIR[k][0]; vy+=LENS_DIR[k][1]; }
  if((vx||vy) && !S.busy && !moving){ const sp=(lensFast?70:36)*dt; moveLens(vx*sp,vy*sp*1.6); }
  lensRAF=requestAnimationFrame(lensTick);
}
document.addEventListener('keyup',e=>{ delete lensHeld[e.key]; if(e.key==='Shift') lensFast=false; });
window.addEventListener('blur',()=>{ for(const k in lensHeld) delete lensHeld[k]; });
const spotsHere=()=>invLoc?invLoc.spots.filter(p=>!p.only2||S.phase>=P2()):[];
/* 정확히 겹치면 그 단서, 아니면 돋보기 둘레(가로 4%, 세로 6%) 안의 가장 가까운 단서 */
const spotAt=(x,y)=>{ const L=spotsHere(); const hit=L.find(p=>x>=p.x&&x<=p.x+p.w&&y>=p.y&&y<=p.y+p.h); if(hit) return hit;
  let best=null,bd=1e9; for(const p of L){ const dx=Math.max(p.x-x,0,x-(p.x+p.w))/4, dy=Math.max(p.y-y,0,y-(p.y+p.h))/6; if(dx<=1&&dy<=1){ const d=dx*dx+dy*dy; if(d<bd){bd=d;best=p;} } } return best; };
const spotKey=p=>invLoc.id+':'+p.label;
function placeLens(){
  const L=$('#lens'); L.style.left=lens.x+'%'; L.style.top=lens.y+'%';
  const nh=npcHit(lens.x,lens.y), p=nh?null:spotAt(lens.x,lens.y); L.classList.toggle('done',!!(p&&S.seen&&S.seen.has(spotKey(p)))); L.classList.toggle('talk',!!nh);
}
function renderSpots(){ renderNpcLayer(); $('#lens').hidden=moving; stageEl.classList.add('inv'); placeLens(); }
function moveLens(dx,dy){ lens.x=Math.max(1,Math.min(99,lens.x+dx)); lens.y=Math.max(3,Math.min(97,lens.y+dy)); placeLens(); }
async function examineAt(){
  if(S.busy||S.mode!=='inv') return;
  if(invLoc&&invLoc.kind==='meet'){ if(npcOf(invLoc)) talkTo(); return; }
  if(npcHit(lens.x,lens.y)){ Music.sting('click'); talkTo(); return; }
  const p=spotAt(lens.x,lens.y);
  if(p){ Music.sting('click'); examine(p); return; }
  Music.sting('miss');
  S.busy=true; const m=invLoc.miss; S.misses=(S.misses||0)+1; S.missStreak=(S.missStreak||0)+1;
  track('inv_miss',{loc:invLoc.id,x:Math.round(lens.x),y:Math.round(lens.y)});
  await say(ME(),'normal',m[Math.floor(Math.random()*m.length)],{view:'inv'});
  if(S.story && S.missStreak%10===0 && !S.invSkip){ const miss=missingReq(); if(miss.length) track('hint_place',{to:locOf(miss[0])}); if(miss.length) await say(ME(),'think',`(헛짚기만 하네… [[${locOf(miss[Math.floor(Math.random()*miss.length)])}]] 쪽을 다시 살펴볼까?)`,{view:'inv'}); }
  S.busy=false;
}
/* ===== 조사 중 인물: 이야기하기·보여 주기 ===== */
const josa=(w,a,b)=>{ const c=String(w).charCodeAt(String(w).length-1); return w+((c>=0xAC00&&c<=0xD7A3&&(c-0xAC00)%28)?b:a); };
function npcOf(r){ if(!r) return null; const L=r.npcs||(r.npc?[r.npc]:[]); return L.find(avail)||null; }
/* 조사 화면 그림 안에 인물을 세운다. 돋보기를 대고 Enter·클릭하면 말을 건다 */
function npcPlace(np){ return np.place||{x:70,h:66,b:0}; }
function npcRect(np){ const pl=npcPlace(np), w=pl.h*0.469*0.62; return {x:pl.x-w/2,y:100-(pl.b||0)-pl.h*0.93,w:w,h:pl.h*0.93}; }
function npcHit(x,y){ if(S.mode!=='inv') return null; const np=npcOf(invLoc); if(!np) return null; const r=npcRect(np); return (x>=r.x&&x<=r.x+r.w&&y>=r.y&&y<=r.y+r.h)?np:null; }
function renderNpcLayer(){
  const L=$('#npcl'); if(!L) return;
  const np=(S.mode==='inv'&&!moving)?npcOf(invLoc):null;
  if(!np){ L.innerHTML=''; L.hidden=true; return; }
  const pl=npcPlace(np), A=ASSETS.sprites&&ASSETS.sprites[np.who], src=A?pickExpr(A,np.expr||'base',np.who):null;
  L.hidden=false;
  L.innerHTML=src?`<img class="npc-img" src="${src}" alt="${esc(NAMES[np.who]||'')}" style="left:${pl.x}%;height:${pl.h}%;bottom:${pl.b||0}%">`:'';
}
function showNpc(np,expr){ const L=$('#npcl'); if(L) L.hidden=true; $('#lens').hidden=true; setPos((ASSETS.sprites&&ASSETS.sprites[np.who])?['50%','-6%','94%']:['50%','-4%','96%']); charEl.innerHTML=charView(np.who,CAST[np.who],expr||np.expr||'base'); charEl.dataset.key=np.who+':'+(expr||np.expr); }
function hideNpc(){ charEl.innerHTML=''; charEl.dataset.key=''; renderNpcLayer(); if(S.mode==='inv'&&!moving){ $('#lens').hidden=false; placeLens(); } }
async function npcLines(np,lines){
  for(const x of lines){ if(S.invSkip) break; const who=x[0]==='ME'?ME():x[0]; if(who===np.who) showNpc(np,x[1]); await say(who,x[1],x[2],{view:'inv'}); }
}
async function npcGives(ids){ for(const id of (ids||[])){ if(S.found.has(id)) continue; S.found.add(id); Music.sting('get'); S.missStreak=0; track('ev_found',{id:id,from:'talk'}); showEvidence(id); await say('guide','normal',`증거 수첩에 [[${EV_BY_ID[id].title}]]을(를) 넣었다.`,{view:'inv'}); hideEvidence(); } }
function talkTo(){
  const np=npcOf(invLoc); if(!np||S.busy||moving) return;
  S.talked=S.talked||new Set(); S.unlocked=S.unlocked||new Set();
  showNpc(np); S.busy=true;
  const list=()=>{
    openSheet(`<h2>${esc(String(NAMES[np.who]||CAST[np.who].name).replace(/^(증인|피고|피해자) /,''))}에게 묻기</h2><p class="lead">물어볼 것을 고르세요. 🔒은 증거를 보여 줘야 열리는 이야기예요.</p>
      <div class="choices">${np.topics.map((t,i)=>{ if(!avail(t)) return ''; const lk=t.lock&&!S.unlocked.has(t.id); return `<button class="choice${S.talked.has(t.id)?' done':''}" type="button" data-i="${i}"><span class="ck">${lk?'🔒':S.talked.has(t.id)?'✓':i+1}</span>${esc(t.t)}</button>`; }).join('')}</div>
      <div class="sheet-foot"><button class="abtn" type="button" data-act="tshow">증거 보여 주기 <span class="ckey">P</span></button><button class="abtn primary" type="button" data-act="tend">그만 묻기</button></div>`,true);
    onSheetClose=()=>{ hideNpc(); S.busy=false; renderInvBar(); };
    sheetCard.querySelector('[data-act=tend]').addEventListener('click',closeSheet);
    sheetCard.querySelector('[data-act=tshow]').addEventListener('click',()=>{ onSheetClose=null; closeSheet(); S.busy=false; showTo(list); });
    recNav=k=>{ const i=parseInt(k,10)-1; const b=sheetCard.querySelector(`.choice[data-i="${i}"]`); if(b) b.click(); };
    sheetCard.querySelectorAll('.choice').forEach(b=>b.addEventListener('click',async()=>{
      const t=np.topics[+b.dataset.i]; onSheetClose=null; closeSheet(); Music.sting('click');
      track('talk',{who:np.who,topic:t.id,locked:!!(t.lock&&!S.unlocked.has(t.id))});
      if(t.lock && !S.unlocked.has(t.id)){ await say(ME(),'think',t.lockSay||'(지금은 말해 주지 않을 것 같다.)',{view:'inv'}); list(); return; }
      await npcLines(np,t.lines); S.talked.add(t.id); await npcGives(t.gives); list();
    }));
  };
  list();
}
function showTo(back){
  const np=npcOf(invLoc); if(!np||S.busy||moving) return;
  S.unlocked=S.unlocked||new Set(); showNpc(np); S.busy=true; S.allowUsed=true;
  openRecord(true);
  const h=sheetCard.querySelector('.lead'); if(h) h.innerHTML=`${esc(NAMES[np.who]||'')}에게 보여 줄 증거를 고르세요. 조사 중에는 틀려도 방울이 깨지지 않아요.`;
  onSheetClose=()=>{ S.allowUsed=false; hideNpc(); S.busy=false; if(back) setTimeout(()=>{ S.busy=false; talkTo(); },40); };
  presentHandler=async id=>{
    S.allowUsed=false; onSheetClose=null; closeSheet(); showEvidence(id);
    await say(ME(),'present',`이걸 봐 주세요. ‘${EV_BY_ID[id].title}’예요.`,{view:'inv'}); hideEvidence();
    const r=(np.present||{})[id];
    track('show',{who:np.who,ev:id,ok:!!r,unlock:r&&r.unlock||''});
    if(r){ await npcLines(np,r.lines); if(r.unlock && !S.unlocked.has(r.unlock)){ S.unlocked.add(r.unlock); Music.sting('realize'); await say('guide','normal','새로 물어볼 이야기가 생겼다.',{view:'inv'}); } await npcGives(r.gives); }
    else await npcLines(np,np.def||[[np.who,'base','…글쎄요. 잘 모르겠군요.']]);
    S.busy=false; if(back){ talkTo(); } else hideNpc();
  };
}
function renderInvBar(){
  const total=totalEv(), locs=availLocs(), np=npcOf(invLoc);
  const R=invParent&&invParent.rooms?roomsOf(invParent):null, ri=R?R.indexOf(invLoc):-1;
  const lockd=r=>r.need&&!S.found.has(r.need);
  const rooms=R?`<div class="ib-rooms" role="group" aria-label="구역 이동">
      <button class="ib-arrow" type="button" data-step="-1"${ri<=0?' disabled':''} aria-label="왼쪽 구역으로 (A)"><span aria-hidden="true">◀</span><span class="ckey">A</span></button>
      ${R.map(r=>`<button class="ib-room${invLoc.id===r.id?' on':''}${lockd(r)?' locked':''}" type="button" data-room="${r.id}" aria-pressed="${invLoc.id===r.id}">${lockd(r)?'<span aria-hidden="true">🔒</span> ':''}${esc(r.name)}</button>`).join('<span class="ib-dot" aria-hidden="true"></span>')}
      <button class="ib-arrow" type="button" data-step="1"${ri>=R.length-1?' disabled':''} aria-label="오른쪽 구역으로 (D)"><span class="ckey">D</span><span aria-hidden="true">▶</span></button>
    </div>`:`<div class="ib-rooms ib-single">${esc(invParent?invParent.name:'')}</div>`;
  const people=np?`<div class="ib-people"><button class="ib-act talk" type="button" data-act="talk">${esc(josa(String(NAMES[np.who]||CAST[np.who].name).replace(/^(증인|피고|피해자) /,''),'와','과'))} 이야기하기<span class="ckey">T</span></button><button class="ib-act" type="button" data-act="show">증거 보여 주기<span class="ckey">P</span></button></div>`:'';
  $('#invbar').innerHTML=`<div class="ib-top">${rooms}${people}</div>
    <div class="ib-bottom"><div class="ib-locs" role="group" aria-label="장소 이동">${locs.map((l,k)=>{ const n=locSpots(l).filter(p=>(p.ev&&S.found.has(p.ev))||(p.p2&&p.p2.ev&&S.found.has(p.p2.ev))).length;
        return `<button class="ib-loc${invParent&&invParent.id===l.id?' on':''}" type="button" data-loc="${l.id}" aria-pressed="${!!(invParent&&invParent.id===l.id)}"><span class="ib-k" aria-hidden="true">${k+1}</span><span class="ib-n">${esc(l.name)}</span><span class="ib-c">증거 ${n}</span></button>`; }).join('')}</div>
      <button class="go court" type="button" id="toCourt">법정으로<small>모은 증거 ${S.found.size}${S.story?'':'/'+total}</small></button></div>`;
  const blur=b=>()=>{ if(b.blur) b.blur(); };
  $('#invbar').querySelectorAll('[data-loc]').forEach(b=>b.addEventListener('click',()=>{ blur(b)(); invGo(()=>goLoc(b.dataset.loc)); }));
  $('#invbar').querySelectorAll('[data-room]').forEach(b=>b.addEventListener('click',()=>{ blur(b)(); invGo(()=>{ const R=roomsOf(invParent), to=R.find(r=>r.id===b.dataset.room); if(roomLocked(to)) return; goRoom(to,false,R.indexOf(to)>R.indexOf(invLoc)?'r':'l'); }); }));
  $('#invbar').querySelectorAll('[data-step]').forEach(b=>b.addEventListener('click',()=>{ blur(b)(); invGo(()=>roomStep(+b.dataset.step)); }));
  $('#toCourt').addEventListener('click',toCourt);
  const tb=$('#invbar').querySelector('[data-act=talk]'); if(tb) tb.addEventListener('click',()=>{ blur(tb)(); invGo(talkTo); });
  const sb=$('#invbar').querySelector('[data-act=show]'); if(sb) sb.addEventListener('click',()=>{ blur(sb)(); invGo(()=>showTo(null)); });
}
async function examine(p0){
  if(S.busy) return; S.busy=true; S.seen.add(spotKey(p0));
  const p=(S.phase>=P2()&&p0.p2)?Object.assign({},p0,p0.p2):p0;
  track('inv_look',{loc:invLoc.id,spot:p.label,ev:p.ev||''});
  if(p.need && !S.found.has(p.need)){ for(const t of (p.lockedSay||['잠겨 있다.'])){ if(S.invSkip) break; await say(ME(),'think',t,{view:'inv'}); } renderSpots(); S.busy=false; return; }
  for(const t of p.say){ if(S.invSkip) break; await say(ME(),'think',t,{view:'inv'}); }
  const gets=(p.gives||[]).concat(p.ev?[p.ev]:[]).filter(id=>!S.found.has(id));
  for(const id of gets){
    S.found.add(id); Music.sting('get'); S.missStreak=0; track('ev_found',{id:id,from:invLoc.id});
    if(S.invSkip) continue;
    showEvidence(id);
    await say('guide','normal',`증거 수첩에 [[${EV_BY_ID[id].title}]]을(를) 넣었다.`,{view:'inv'});
    hideEvidence();
  }
  renderSpots(); renderInvBar(); S.busy=false;
}
function reqSpots(){ const out=[]; availLocs().forEach(l=>roomsOf(l).forEach(r=>{ if(r.need && !S.found.has(r.need)) return; const nm=l.name+(l.rooms?' · '+r.name:''); const np=npcOf(r); if(np){ (np.topics||[]).filter(avail).forEach(t=>{ (t.gives||[]).forEach(id=>out.push({id:id,loc:nm})); if(t.must) out.push({id:'talk:'+t.id,loc:nm}); }); Object.values(np.present||{}).forEach(x=>(x.gives||[]).forEach(id=>out.push({id:id,loc:nm}))); } r.spots.forEach(p0=>{ const p=(S.phase>=P2()&&p0.p2)?Object.assign({},p0,p0.p2):p0; if(p.only2&&S.phase<P2()) return; (p.gives||[]).concat(p.ev?[p.ev]:[]).forEach(id=>out.push({id:id,loc:nm})); }); })); return out; }
function missingReq(){ return [...new Set(reqSpots().map(x=>x.id))].filter(id=>id.startsWith('talk:')?!(S.talked&&S.talked.has(id.slice(5))):!S.found.has(id)); }
function locOf(id){ const x=reqSpots().find(s=>s.id===id); return x?x.loc:'다른 장소'; }
async function toCourt(){
  if(S.busy||moving) return;
  if(S.story){
    const miss=missingReq();
    if(miss.length){ S.busy=true; S.courtTries=(S.courtTries||0)+1;
      const loc=locOf(miss[0]);
      await say(ME(),'think',S.courtTries<2?'(아직 법정에 서기엔 증거가 모자라. 더 살펴봐야 해.)':`(아직 다 살펴보지 않았어. [[${loc}]] 쪽을 더 꼼꼼히 조사해 보자.)`,{view:'inv'});
      S.busy=false; return; }
    S.courtTries=0; S.mode='trial'; $('#invbar').hidden=true; $('#lens').hidden=true; stageEl.classList.remove('inv'); const f=invDone; invDone=null; if(f) f(); return; }
  const total=totalEv();
  if(S.found.size<total){ S.busy=true; await say(ME(),'sweat',`아직 못 찾은 단서가 ${total-S.found.size}개 있어. 그래도 법정으로 갈까? 못 찾은 증거는 해치가 모아 둔 기록으로 채워진다.`,{view:'inv'}); S.busy=false; }
  S.invFound=[...S.found]; $('#invbar').hidden=true; $('#lens').hidden=true; stageEl.classList.remove('inv'); S.mode='trial';
  startTrial(true);
}

/* ===== 시트 ===== */
let sheetCloseable=true, onSheetClose=null, recNav=null, presentHandler=null;
function openSheet(html,closeable){
  onSheetClose=null; recNav=null; sheetCard.innerHTML=html; sheetEl.hidden=false; sheetCloseable=!!closeable; sheetCard.scrollTop=0;
  const f=sheetCard.querySelector('button:not([disabled])'); if(f) f.focus({preventScroll:true});
}
function closeSheet(){ recNav=null; presentHandler=null; sheetEl.hidden=true; sheetCard.innerHTML=''; const f=onSheetClose; onSheetClose=null; if(f) f(); }
sheetEl.addEventListener('click',e=>{ if(e.target===sheetEl && sheetCloseable) closeSheet(); });

const dots=n=>`<span class="dots">${'●'.repeat(n)}${'○'.repeat(3-n)}</span>`;
function recDetail(e,picked){
  return `<div class="big">${evArt(e)}</div><span class="chip">${e.type}</span>${isUsed(e.id)?' <span class="usedmark">✕ 이미 쓴 증거 · 다시 낼 수 없어요</span>':picked?' <span class="selmark">✓ 고름</span>':''}
    <h4>${esc(e.title)}</h4><p class="body">${esc(e.body)}</p>${S.zoomed&&S.zoomed.has(e.id)&&e.zoom?`<p class="zoomnote">🔍 ${esc(plain(e.zoom.note||e.zoom.say[e.zoom.say.length-1]))}</p>`:''}
    <p class="src">출처: ${esc(e.src)}</p><p class="rel">믿을 만한 정도 ${dots(e.trust)} ${TRUSTW[e.trust]}. ${esc(e.note)}</p>
    <button class="abtn zoomb" type="button" data-zoom="${e.id}">🔍 확대해 보기</button>`;
}
/* 증거 확대: 증거 그림을 크게 보고, 확대해야만 보이는 단서(날짜 칸, 서명, 매화 얼룩)를 찾는다 */
async function openZoom(id,back){
  const e=EV_BY_ID[id]; S.zoomed=S.zoomed||new Set(); const first=!S.zoomed.has(id); S.zoomed.add(id);
  track('zoom',{ev:id,hit:!!e.zoom,plum:!!(e.zoom&&e.zoom.plum)});
  Music.sting('zoom');
  openSheet(`<h2>증거 확대 · ${esc(e.title)}</h2><div class="zoombig">${evArt(e)}${e.zoom&&e.zoom.plum?'<span class="plum" aria-label="매화 모양 먹 얼룩">✿</span>':''}</div>
    <div class="zoomtxt">${(e.zoom?e.zoom.say:['구석구석 살펴보았다. 카드에 적힌 것 말고 새로 보이는 것은 없다.']).map(t=>`<p>${t.replace(/\[\[(.*?)\]\]/g,'<b class="kw">$1</b>').replace(/^\(|\)$/g,'')}</p>`).join('')}</div>
    <div class="sheet-foot"><button class="abtn primary" type="button" data-act="zback">돌아가기</button></div>`,true);
  if(e.zoom && first){ Music.sting('realize'); if(e.zoom.plum){ S.plums=S.plums||new Set(); S.plums.add(id); } if(e.zoom.gives) e.zoom.gives.forEach(g=>{ if(!S.found.has(g)){ S.found.add(g); track('ev_found',{id:g,from:'zoom'}); } }); }
  sheetCard.querySelector('[data-act=zback]').addEventListener('click',closeSheet);
  onSheetClose=back?()=>setTimeout(back,40):null;
}
/* 용어 카드: 처음 나온 어려운 말을 쉬운 말로. 증거가 아니라서 제시할 수 없다 */
function openTerms(back){
  const D=CASE_DATA[S.case], all=(D&&D.terms)||[], got=all.filter(x=>S.terms&&S.terms.has(x.w));
  openSheet(`<h2>용어 카드</h2><p class="lead">처음 나온 어려운 말을 모아 두었어요. 용어 카드는 증거가 아니라서 법정에 낼 수는 없어요.</p>
    ${got.length?`<div class="terms">${got.map(x=>`<div class="term"><span class="term-ic" aria-hidden="true">${x.ic||'📖'}</span><b>${esc(x.w)}</b><p>${esc(x.d)}</p></div>`).join('')}</div>`:'<p>아직 모은 용어 카드가 없어요.</p>'}
    <div class="sheet-foot"><button class="abtn primary" type="button" data-act="tback">${back?'증거 수첩으로':'닫기'}</button></div>`,true);
  sheetCard.querySelector('[data-act=tback]').addEventListener('click',closeSheet);
  onSheetClose=back?()=>setTimeout(back,40):null;
}
function openRecord(presentMode){
  const LIST=(S.mode==='inv'||S.story)?EVIDENCE.filter(e=>S.found&&S.found.has(e.id)):EVIDENCE.filter(e=>QUICK_EV.includes(e.id));
  if(presentMode && !LIST.length){ closeSheet(); return; }
  if(!LIST.length){ openSheet(`<h2>증거 수첩</h2><p class="lead">아직 모은 증거가 없어요. 장소의 수상한 곳을 눌러 조사하세요.</p><div class="sheet-foot"><button class="abtn primary" data-act="close" type="button">닫기</button></div>`,true); sheetCard.querySelector('[data-act=close]').addEventListener('click',closeSheet); return; }
  let sel=null, view=LIST[0].id; const L=presentMode&&CX?curLine():null;
  openSheet(`<h2>증거 수첩</h2>
    ${presentMode&&L?`<p class="lead">지금 따지는 증언: <span class="q">“${esc(plain(L.text))}”</span></p>`:`<p class="lead">카드를 눌러 자세히 보세요. 누가, 언제 쓴 기록인지가 중요해요.</p>`}
    <div class="rec"><div class="rec-grid">${LIST.map(e=>`<button class="tile ev${isUsed(e.id)?' used':''}" type="button" data-id="${e.id}" aria-pressed="false"><span class="ic">${evArt(e)}</span>${esc(e.title)}${isUsed(e.id)?'<span class="usedx" aria-label="이미 쓴 증거">✕</span>':''}</button>`).join('')}</div><div class="rec-d" id="recD"></div></div>
    <div class="sheet-foot">
      ${presentMode?'<span class="risk-note">틀리면 해치 방울 하나가 깨져요</span>':''}
      <button class="abtn" data-act="hist" type="button">대화 다시 보기 <span class="ckey">L</span></button>
      ${S.terms&&S.terms.size?'<button class="abtn" data-act="terms" type="button">용어 카드</button>':''}
      <button class="abtn" data-act="close" type="button">닫기</button>
      ${presentMode?'<button class="abtn primary" data-act="present" type="button" disabled>이 증거 제시하기</button>':''}
    </div>`,true);
  const pb=sheetCard.querySelector('[data-act=present]'), D=$('#recD');
  const backTo=()=>presentHandler?S.pickOpen:(()=>openRecord(presentMode));
  const paint=()=>{ D.innerHTML=recDetail(EV_BY_ID[view],sel===view); sheetCard.querySelectorAll('.tile').forEach(x=>{ x.classList.toggle('on',x.dataset.id===view); x.classList.toggle('sel',x.dataset.id===sel); x.setAttribute('aria-pressed',x.dataset.id===sel?'true':'false'); });
    const zb=D.querySelector('[data-zoom]'); if(zb){ const back=backTo(); if(presentMode&&!back) zb.remove(); else zb.addEventListener('click',()=>openZoom(zb.dataset.zoom,back)); } };
  { const tb=sheetCard.querySelector('[data-act=terms]'); if(tb){ const back=backTo(); if(presentMode&&!back) tb.remove(); else tb.addEventListener('click',()=>openTerms(back)); } }
  sheetCard.querySelectorAll('.tile').forEach(b=>b.addEventListener('click',()=>{ Music.sting('click'); view=b.dataset.id; if(presentMode){ sel=b.dataset.id; pb.disabled=isUsed(sel); } paint(); }));
  recNav=(k)=>{ const ids=LIST.map(e=>e.id); let i=ids.indexOf(view); const cols=Math.max(1,Math.round(sheetCard.querySelector('.rec-grid').clientWidth/114));
    if(k==='ArrowRight') i++; else if(k==='ArrowLeft') i--; else if(k==='ArrowDown') i+=cols; else if(k==='ArrowUp') i-=cols;
    else if(k==='Enter'||k==='e'||k==='E'){ if(presentMode){ if(sel===view && !isUsed(sel)) (presentHandler||doPresent)(sel); else { sel=view; pb.disabled=isUsed(sel); paint(); } } return; }
    i=(i+ids.length)%ids.length; view=ids[i]; Music.sting('click'); if(presentMode){ sel=view; pb.disabled=false; } paint(); const t=sheetCard.querySelector(`.tile[data-id="${view}"]`); if(t) t.focus({preventScroll:false}); };
  if(pb) pb.addEventListener('click',()=>{ if(sel && !isUsed(sel)) (presentHandler||doPresent)(sel); });
  const hb=sheetCard.querySelector('[data-act=hist]'); if(hb) hb.addEventListener('click',()=>{ const back=presentHandler?S.pickOpen:(()=>openRecord(presentMode)); openHistory(back); });
  sheetCard.querySelector('[data-act=close]').addEventListener('click',closeSheet);
  paint();
}
function openClassify(){
  S.classify={};
  openSheet(`<h2>증언 가르기</h2>
    <p class="lead">피고의 말 하나하나를 세 갈래로 나누세요.</p>
    <div class="help"><div><b>거짓</b>사실과 다른 말</div><div><b>핑계</b>사실이지만, 책임을 덜어 주지 못하는 말</div><div><b>참작할 시대 상황</b>판결에서 헤아려야 할 진짜 사정</div></div>
    ${S.lines.map((L,i)=>`<div class="cl-row" data-i="${i}">
      <div class="cl-q"><span class="num">${i+1}</span>“${esc(plain(L.cur.text))}”</div>
      <div class="seg">${CATS.map(c=>`<button type="button" data-c="${c[0]}" aria-pressed="false">${c[1]}</button>`).join('')}</div>
      <div class="cl-fb" hidden></div></div>`).join('')}
    <div class="sheet-foot"><span class="note" id="clNote">다섯 개를 모두 고르면 판정을 받을 수 있어요.</span><button class="abtn primary" id="bJudge" type="button" disabled>판정 받기</button></div>`,false);
  const bJ=$('#bJudge');
  sheetCard.querySelectorAll('.cl-row').forEach(row=>{
    const i=+row.dataset.i;
    row.querySelectorAll('.seg button').forEach(b=>b.addEventListener('click',()=>{
      if(S.classified) return;
      S.classify[i]=b.dataset.c;
      row.querySelectorAll('.seg button').forEach(x=>{ const on=x===b; x.classList.toggle('sel',on); x.setAttribute('aria-pressed',on?'true':'false'); });
      bJ.disabled=Object.keys(S.classify).length<S.lines.length;
    }));
  });
  S.classified=false;
  bJ.addEventListener('click',()=>{
    if(!S.classified){
      S.classified=true; let n=0;
      sheetCard.querySelectorAll('.cl-row').forEach(row=>{
        const i=+row.dataset.i, L=S.lines[i], ans=correctCat(L), got=S.classify[i]===ans; if(got) n++;
        row.querySelectorAll('.seg button').forEach(x=>x.disabled=true);
        const fb=row.querySelector('.cl-fb'); fb.hidden=false; fb.className='cl-fb '+(got?'ok':'no');
        fb.textContent=(got?'○ 맞아요. ':`× 정답은 ‘${CAT_NAME[ans]}’. `)+(L.isLie?L.cur.why:L.truth.why);
      });
      $('#clNote').textContent=`${S.lines.length}개 중 ${n}개를 맞혔어요.`;
      bJ.textContent='판결문 쓰기';
    } else (S.story?openVerdictStory():openVerdict());
  });
}
function openVerdict(){
  S.A=null; S.B=null;
  openSheet(`<h2>판결문 쓰기</h2>
    <p class="lead">빈칸에 들어갈 근거를 하나씩 고르세요.</p>
    <div class="vtext" id="vtext"></div>
    <h3>㉠ 시대 상황으로 인정할 것</h3><div class="opts" id="optA">${S.aOpts.map((o,i)=>`<button class="opt" type="button" data-i="${i}" aria-pressed="false">${esc(o.t)}</button>`).join('')}</div>
    <h3>㉡ 피고 자신의 선택이었던 것</h3><div class="opts" id="optB">${S.bOpts.map((o,i)=>`<button class="opt" type="button" data-i="${i}" aria-pressed="false">${esc(o.t)}</button>`).join('')}</div>
    <div class="sheet-foot"><button class="abtn primary" id="bVerdict" type="button" disabled>판결 선고</button></div>`,false);
  const upd=()=>{
    $('#vtext').innerHTML=`재판부는 <span class="blank">${S.A?esc(S.A.t):'㉠ ……'}</span>을, 피고가 어쩔 수 없었던 시대 상황으로 인정한다. 그러나 <span class="blank">${S.B?esc(S.B.t):'㉡ ……'}</span>은 피고 자신의 선택이었다. 따라서 백제가 무너진 책임의 일부는 피고에게 있다.`;
    $('#bVerdict').disabled=!(S.A&&S.B);
  };
  const bind=(boxId,opts,key)=>{ $(boxId).querySelectorAll('.opt').forEach(b=>b.addEventListener('click',()=>{
    S[key]=opts[+b.dataset.i];
    $(boxId).querySelectorAll('.opt').forEach(x=>{ const on=x===b; x.classList.toggle('sel',on); x.setAttribute('aria-pressed',on?'true':'false'); });
    upd();
  })); };
  bind('#optA',S.aOpts,'A'); bind('#optB',S.bOpts,'B'); upd();
  $('#bVerdict').addEventListener('click',deliverVerdict);
}
function score(){
  const cl=S.lines.filter((L,i)=>S.classify[i]===correctCat(L)).length;
  const a=S.A&&S.A.ok?5:0, b=S.B&&S.B.ok?5:0, hidden=S.B&&S.B.key?5:0;
  const c=S.story&&S.C&&S.C.ok?10:0;
  return {cl:cl,a:a,b:b,c:c,hidden:hidden,total:S.trust*10+cl*8+a+b+hidden+c};
}
function tierOf(t){
  if(t>=95) return {name:'명판관',desc:'사료를 정확히 짚고, 시대 상황과 책임을 깔끔하게 갈랐어요.'};
  if(t>=80) return {name:'공정한 재판관',desc:'근거로 판단했어요. 한두 군데만 다시 보면 완벽해요.'};
  if(t>=60) return {name:'성실한 재판관',desc:'끝까지 따졌어요. 증거와 증언을 한 번 더 맞대 보세요.'};
  return {name:'견습 재판관',desc:'증거 카드를 천천히 다시 읽어 보세요. 단서는 글 속에 있어요.'};
}
function openResult(){
  const sc=score(), tier=tierOf(sc.total), wrongs=S.log.filter(x=>!x.ok).length;
  openSheet(`<h2>재판 기록</h2>
    <div class="tier">${tier.name}</div><p class="lead">${tier.desc}</p>
    <div class="stats">
      <div class="stat">남은 해치 방울<b>${S.trust}/5</b></div>
      <div class="stat">헛 제시<b>${wrongs}번</b></div>
      <div class="stat">증언 가르기<b>${sc.cl}/${S.lines.length}</b></div>
      <div class="stat">판결문 근거<b>${(sc.a?1:0)+(sc.b?1:0)+(S.story?(sc.c?1:0):0)}/${S.story?3:2}</b></div>
      ${S.story?`<div class="stat">조사에서 헛짚음<b>${S.misses||0}번</b></div><div class="stat">찾은 증거<b>${S.found?[...S.found].filter(id=>EV_BY_ID[id]).length:0}개</b></div><div class="stat">들은 이야기<b>${S.talked?S.talked.size:0}개</b></div>`:''}
      <div class="stat">점수<b>${sc.total}</b></div>
    </div>
    <div class="vfb">㉠ ${esc(S.A.t)}: ${esc(S.A.fb)}<br>㉡ ${esc(S.B.t)}: ${esc(S.B.fb)}${S.story&&S.C?`<br>혐의 ②: ${esc(S.C.fb)}`:''}</div>
    <div class="history"><b>실제 역사에서는…</b>
      <p>660년, 당나라와 신라의 군대가 백제로 쳐들어왔어요. 계백 장군이 황산벌에서 맞섰지만 졌고, 수도 사비성이 무너졌어요. 의자왕은 웅진성으로 피했다가 항복했고, 당나라로 끌려가 그해 세상을 떠났어요.</p>
      <p>그런데 의자왕에 대한 기록은 대부분 백제를 무너뜨린 신라와 당, 그리고 훗날 고려 사람들이 남겼어요. ‘3천 궁녀’라는 숫자도 옛 사료에는 나오지 않아요. 그래서 ‘놀기만 한 왕’이라는 모습이 부풀려졌을 수 있다는 의견도 있어요. 증거를 볼 때는 누가 쓴 기록인지도 함께 따져야 해요.</p>
    </div>
    <div class="sheet-foot"><button class="abtn" id="rRoles" type="button">역할 고르기로</button><button class="abtn" id="rTeacher" type="button">교사용 기록</button><button class="abtn primary" id="rRetry" type="button">다른 변형으로 다시 재판</button></div>`,false);
  $('#rRoles').addEventListener('click',backToRoles);
  $('#rTeacher').addEventListener('click',openTeacher);
  $('#rRetry').addEventListener('click',()=>S.story?startStory():startTrial());
  if(S.story) $('#rRetry').textContent='본편 처음부터 다시';
}
function openGameOver(){
  openSheet(`<h2>이번 재판은 검사가 졌습니다</h2>
    <p class="lead">해치 방울이 모두 깨졌어요. 이 결과는 ‘피고에게 책임이 없다’는 뜻이 아니라 ‘검사가 증거로 증명하지 못했다’는 뜻이에요.</p>
    <p class="lead">증거 카드의 글을 천천히 다시 읽고 항소하세요. 항소심에서는 피고가 다른 곳에서 거짓말을 할 수 있어요.</p>
    <div class="sheet-foot"><button class="abtn" id="gTeacher" type="button">교사용 기록</button><button class="abtn primary" id="gRetry" type="button">항소하기</button></div>`,false);
  $('#gTeacher').addEventListener('click',openTeacher);
  $('#gRetry').addEventListener('click',()=>S.story?resumeStory():startTrial());
}
function openTeacher(){
  const back=S.done?openResult:null;
  let body='';
  if(!S.lines){ body=`<p class="lead">재판을 시작하면 이번 판의 정답과 학생의 증거 제시 기록이 여기에 나옵니다.</p>`; }
  else {
    const v=S.variant;
    body=`<p class="lead">이번 판은 변형 ${v+1}/5입니다. 거짓 증언의 위치가 판마다 바뀌고, 같은 기기에서는 직전 변형이 다시 나오지 않습니다.</p>
    <div class="tblwrap"><table><thead><tr><th>번호</th><th>이번 판 증언</th><th>정답 갈래</th><th>반박 증거</th></tr></thead><tbody>
    ${S.lines.map((L,i)=>`<tr><td>${i+1}</td><td>${esc(plain(L.cur.text))}</td><td>${CAT_NAME[correctCat(L)]}</td><td>${L.isLie?L.cur.ev+' '+esc(EV_BY_ID[L.cur.ev].title):'없음'}</td></tr>`).join('')}
    </tbody></table></div>
    <h3>숨은 핵심 (학생 화면에 표시하지 않음)</h3>
    <p>판결문 ㉡에 ‘성충의 경고를 듣고도 따르지 않은 것’을 고르면 +5점. 관련 증거는 E3 「성충의 마지막 글」.${S.B?` 이번 판 선택: ${S.B.key?'사용함':'사용 안 함'}.`:''}</p>
    <h3>증거 제시 기록</h3>
    ${S.log.length?`<div class="tblwrap"><table><thead><tr><th>증언 번호</th><th>낸 증거</th><th>결과</th></tr></thead><tbody>${S.log.map(x=>`<tr><td>${x.line}</td><td>${x.card} ${esc(EV_BY_ID[x.card].title)}</td><td>${x.ok?'맞음':'틀림 (방울 −1)'}</td></tr>`).join('')}</tbody></table></div>`:'<p>아직 낸 증거가 없습니다.</p>'}
    <p>더 묻기 횟수: ${S.presses}번</p>
    ${S.invFound?`<p>조사에서 헛짚은 횟수: ${S.misses||0}번</p><p>조사에서 스스로 찾은 증거: ${S.invFound.length}/8 (${S.invFound.map(id=>id+' '+esc(EV_BY_ID[id].title)).join(', ')||'없음'})</p>`:''}
    ${S.classified?`<h3>분류 결과</h3><p>${S.lines.map((L,i)=>`${i+1}번 ${CAT_NAME[S.classify[i]]||'-'} ${S.classify[i]===correctCat(L)?'○':'×'}`).join(', ')}</p>`:''}`;
  }
  if(S.case>=2) body=`<p class="lead">사건 ${S.case}을(를) 하고 있어요. 이번 판의 증거 제시 기록은 아래 ‘학습 데이터’에 모입니다.</p>`;
  const gj=(CASE_DATA[S.case]&&CASE_DATA[S.case].gojeung)||GOJEUNG;
  openSheet(`<h2>교사용</h2>${teacherDataHTML()}<h3>이번 판</h3>${body}
    <h3>고증 확인 목록${S.case>=3?` (사건 ${S.case})`:''}</h3><ol class="check">${gj.map(x=>`<li>${esc(x)}</li>`).join('')}</ol>
    <div class="sheet-foot"><button class="abtn primary" id="tClose" type="button">${back?'재판 기록으로':'닫기'}</button></div>`,!back);
  bindTeacherData();
  $('#tClose').addEventListener('click',()=>{ if(back) back(); else closeSheet(); });
}

/* ===== 캐릭터 공방 ===== */
const PARTS={
  skin:['#f6d6b8','#efc9a2','#e2b48a','#f0caa4','#d9a77c'],
  robe:[['#6a3d8f','#4b2a66'],['#b3352b','#86241d'],['#2f5d8a','#1f3f60'],['#3d6b4a','#284a33'],['#2a2b33','#17181d'],['#8a6a2a','#5e4818']],
  collar:['cross','round','blazer','robe'], hat:['baekje','ikseon','gat','short','student','bob','bun'],
  beard:['none','king','thin','long'], hair:['#1c1a20','#3a271c','#5a4636','#2b2b2b'], iris:['#3a2a20','#5b3a22','#3d5a66','#4a5a2a']
};
const pick=a=>a[Math.floor(Math.random()*a.length)];
function randomSpec(){
  const r=pick(PARTS.robe);
  const sp={name:'새 피고',skin:pick(PARTS.skin),robe:r[0],robe2:r[1],collar:pick(PARTS.collar),hat:pick(PARTS.hat),hair:pick(PARTS.hair),beard:pick(PARTS.beard),iris:pick(PARTS.iris)};
  if(sp.collar==='round' && Math.random()<.6) sp.emblem=true;
  if(sp.beard==='long' && Math.random()<.5) sp.beardColor='#e6e0d4';
  if(sp.hat==='bob' && Math.random()<.5) sp.band=pick(['#3f8a8f','#d9a93f','#6a3d8f']);
  return sp;
}
const DEF_EX=['normal','smug','sweat','shock','breakdown','angry'];
function wsRow(sp,ex,sub){ return `<div class="ws-row"><div class="ws-name">${esc(sp.name)}<small>${sub||''}</small></div>${ex.map(e=>`<div class="ws-cell">${charSVG(sp,e)}${EXPR_LABEL[e]}</div>`).join('')}</div>`; }
function openWorkshop(){
  const A=ASSETS.sprites||{}, NM={judge:'재판장 해치',player:'하람 검사',rival:'누리 변호인',daon:'다온 판사',defendant:'피고 의자왕'};
  const order=['judge','player','rival','daon','defendant'].filter(k=>A[k]);
  const rows=order.map(k=>{ const set=typeof A[k]==='string'?{base:A[k]}:A[k]; return `<div class="gal-row"><div class="ws-name">${NM[k]}<small>${Object.keys(set).length}장</small></div><div class="gal">${Object.entries(set).map(([e,src])=>`<figure><img src="${src}" alt="${NM[k]} ${EXPR_LABEL[e]||e}" loading="lazy"><figcaption>${EXPR_LABEL[e]||({base:'기본',present:'증거 제시'}[e]||e)}</figcaption></figure>`).join('')}</div></div>`; }).join('');
  openSheet(`<h2>인물 갤러리</h2>
    <p class="lead">게임에 들어간 인물 그림입니다. 모두 같은 그림체 기준 그림에서 표정만 바꿔 만들었습니다. 없는 표정은 게임이 가장 가까운 표정으로 대신합니다.</p>
    ${rows||'<p>아직 넣은 그림이 없습니다.</p>'}
    <div class="sheet-foot"><button class="abtn primary" id="wsClose" type="button">닫기</button></div>`,true);
  $('#wsClose').addEventListener('click',closeSheet);
}

/* ===== BGM 주크박스 ===== */
const TRACK_SCENE={open:'judge',investigate:'archive',testimony:'witness',cross:'witness',crisis:'pros',turnabout:'witness',verdict:'judge'};
let jukeTimer=null;
function openJukebox(){
  const B=ASSETS.bg||{};
  const render=()=>{
    const cur=Music.current;
    sheetCard.innerHTML=`<h2>BGM 주크박스</h2>
      <p class="lead">곡은 모두 이 페이지가 코드로 직접 연주합니다. 재판이 흘러가는 순서대로 놓았고, 곡마다 처음 한 마디는 장면을 여는 도입부, 4마디마다 장단 넘김이 들어갑니다.</p>
      ${Music.on?'':'<p class="mute-note">지금 소리가 꺼져 있어요. 위의 ‘소리 끔’ 단추를 눌러 켜세요.</p>'}
      <div class="jb">${TRACK_ORDER.map((id,n)=>{ const T=TRACKS[id], on=cur===id, bg=B[TRACK_SCENE[id]]; return `<button class="jb-t${on?' on':''}" type="button" data-play="${id}" aria-pressed="${on}">
        <span class="jb-art${id==='turnabout'?' act':''}${id==='crisis'?' red':''}" ${bg?`style="background-image:url('${bg}')"`:''}><span class="jb-no">${n+1}</span><span class="jb-eq" aria-hidden="true"><i></i><i></i><i></i><i></i></span><span class="jb-pl">${on?'■':'▶'}</span></span>
        <span class="jb-tx"><b>${T.title}</b><span>${T.scene}</span><small>${T.meta}</small><span class="jb-bar"><i data-bar="${id}"></i></span></span></button>`; }).join('')}</div>
      <h3>효과음</h3>
      <div class="stings">${STINGS.map(x=>`<button class="abtn" type="button" data-sting="${x[0]}">${x[1]}</button>`).join('')}</div>
      <div class="sheet-foot"><button class="abtn primary" type="button" data-close>닫기</button></div>`;
    sheetCard.querySelectorAll('[data-play]').forEach(b=>b.addEventListener('click',()=>{ Music.resume(); if(Music.current===b.dataset.play){ Music.stop(0.3); } else { Music.play(b.dataset.play); setMood(b.dataset.play); } render(); }));
    sheetCard.querySelectorAll('[data-sting]').forEach(b=>b.addEventListener('click',()=>{ Music.resume(); Music.sting(b.dataset.sting); }));
    sheetCard.querySelector('[data-close]').addEventListener('click',closeSheet);
  };
  openSheet('',true); render();
  clearInterval(jukeTimer);
  jukeTimer=setInterval(()=>{ if(sheetEl.hidden){ clearInterval(jukeTimer); return; } const id=Music.current; sheetCard.querySelectorAll('[data-bar]').forEach(x=>{ x.style.width=(x.dataset.bar===id?Math.round(Music.progress()*100):0)+'%'; }); },200);
  onSheetClose=()=>{ clearInterval(jukeTimer); if(S.inTrial && S.bgm && Music.current!==S.bgm){ Music.play(S.bgm); setMood(S.bgm); } };
}

/* ===== 역할 고르기와 첫 화면 ===== */
const ROLES=[
  {id:'pros',sp:'player',expr:'present',glow:'#3a5aa8',name:'검사',who:'하람',goal:'피고의 거짓말을 잡아낸다.',how:'증언을 추궁하고, 모순에 증거를 낸다. 증거 없는 혐의는 세울 수 없다.',ready:true},
  {id:'def',sp:'rival',expr:'smug',glow:'#2f7a7e',name:'변호인',who:'누리',goal:'잘못 알려진 혐의를 벗긴다.',how:'누가 언제 쓴 기록인지 따지고 증거의 힘을 다툰다. 확정된 사실은 부정할 수 없다.',ready:false},
  {id:'judge',sp:'daon',expr:'stern',glow:'#5a4a8e',name:'판사',who:'다온',goal:'모든 정황을 보고 판결한다.',how:'증거를 받아들이거나 물리치고, 혐의마다 판단해 판례를 근거로 판결문을 쓴다.',ready:false}
];
function rolePic(r){
  const A=ASSETS.sprites||{}, B=ASSETS.bg||{}, bgk=r.id==='judge'?'judge':'pros', bg=B[bgk]?`<div class="rp-bg${r.id==='pros'?' flip':''}" style="background-image:url('${B[bgk]}')"></div>`:'';
  const who=r.sp, src=A[who]?pickExpr(A[who],r.expr,who):null;
  if(src) return bg+`<img class="rp-img" src="${src}" alt="${esc(CAST[who].name)}">`;
  if(bg) return bg+`<div class="rp-wait"><b>?</b><span>그림 준비 중</span></div>`;
  return charSVG(CAST[who],r.expr);
}
let CASE_SEL=+(store.get('yj-case')||1)||1;
function storyButtons(r){
  if(CASE_DATA[CASE_SEL]){
    const D=CASE_DATA[CASE_SEL], v=hasSaveX(CASE_SEL,r.id);
    return `${v?`<button class="go" type="button" data-act="cx-${CASE_SEL}-${r.id}-resume">이어 하기<small>${phaseNameX(v.phase)}부터</small></button>`:''}<button class="go${v?' alt':''}" type="button" data-act="cx-${CASE_SEL}-${r.id}-new">본편 ${v?'처음부터':'시작'}<small>사건 ${CASE_SEL} · ${D.time||'90~110분'} · 자동 저장</small></button>`;
  }
  if(CASE_SEL===2){
    const v=hasSave2(r.id);
    return `${v?`<button class="go" type="button" data-act="c2-${r.id}-resume">이어 하기<small>${PHASE2[v.phase]||''}부터</small></button>`:''}<button class="go${v?' alt':''}" type="button" data-act="c2-${r.id}-new">본편 ${v?'처음부터':'시작'}<small>사건 2 · 90~110분 · 자동 저장</small></button>`;
  }
  const v=hasSave();
  return `${v?`<button class="go" type="button" data-role="resume">이어 하기<small>${PHASE_NAME[v.phase]||''}부터</small></button>`:''}<button class="go${v?' alt':''}" type="button" data-role="story">본편 ${v?'처음부터':'시작'}<small>사건 1 · 75~100분 · 자동 저장</small></button><button class="go alt" type="button" data-role="pros">맛보기 재판<small>증언 하나만, 10분</small></button>`;
}
const CASES=[{n:1,t:'백제는 왜 무너졌나',d:'의자왕 · 튜토리얼',ready:['pros']},{n:2,t:'왕검성의 밤',d:'위만 · 난이도 2',ready:['pros','def']}];
function renderRoles(){
  const C=CASES.find(c=>c.n===CASE_SEL)||CASES[0];
  rolesEl.innerHTML=`<h2 class="roles-h">사건과 역할을 고르세요</h2>
    <label class="sid-row">내 번호나 별명 <input id="sidIn" type="text" maxlength="12" autocomplete="off" placeholder="예) 5반 12번" value="${esc(store.get('yj-sid')||'')}"> <small>이름은 쓰지 마세요. 선생님이 기록을 모을 때만 써요.</small></label>
    <div class="case-tabs" role="tablist">${CASES.map(c=>`<button class="case-tab${c.n===C.n?' on':''}" type="button" role="tab" aria-selected="${c.n===C.n}" data-case="${c.n}"><b>사건 ${c.n}</b>${c.t}<small>${c.d}</small></button>`).join('')}</div>
    <p class="roles-lead">${C.n===1?'사건 1은 검사 자리에서 해 볼 수 있어요.':C.lead||'사건 2부터는 변호인 자리도 열립니다. 같은 사건을 다른 자리에서 다시 해 보세요.'}</p>
    <div class="role-grid">${ROLES.map(r=>{ const ok=C.ready.includes(r.id), lockTxt=(C.locked&&C.locked[r.id])||'준비 중'; return `<div class="role${ok?' ready':''}${C.main===r.id?' main':''}">${ok?(C.main===r.id?'<span class="lock main">기본</span>':''):`<span class="lock">${esc(lockTxt)}</span>`}<div class="role-pic" style="--glow:${r.glow}">${rolePic(r)}</div><h3>${r.name}<span>${r.who}</span></h3><p class="goal">${r.goal}</p><p class="how">${r.how}</p>${ok?storyButtons(r):`<button class="go" type="button" disabled>${C.locked&&C.locked[r.id]?esc(C.locked[r.id])+'이에요':'기획 확인 뒤 제작'}</button>`}</div>`; }).join('')}</div>`;
  { const si=$('#sidIn'); if(si) si.addEventListener('change',()=>store.set('yj-sid',si.value.trim().slice(0,12))); }
  rolesEl.querySelectorAll('[data-case]').forEach(b=>b.addEventListener('click',()=>{ CASE_SEL=+b.dataset.case; store.set('yj-case',CASE_SEL); Music.sting('click'); renderRoles(); }));
  const one=(sel,fn)=>{ const b=rolesEl.querySelector(sel); if(b) b.addEventListener('click',fn); };
  one('[data-role=pros]',()=>{ setCase(1); S.me='player'; S.case=1; startTrial(); });
  one('[data-role=story]',()=>{ setCase(1); S.me='player'; S.case=1; startStory(); });
  one('[data-role=resume]',()=>{ setCase(1); S.me='player'; S.case=1; resumeStory(); });
  rolesEl.querySelectorAll('[data-act^=c2-]').forEach(b=>b.addEventListener('click',()=>{ const [,role,kind]=b.dataset.act.split('-'); startCase2(role,kind==='resume'); }));
  rolesEl.querySelectorAll('[data-act^=cx-]').forEach(b=>b.addEventListener('click',()=>{ const [,n,role,kind]=b.dataset.act.split('-'); startCaseX(+n,role,kind==='resume'); }));
}

function showTitle(){
  titleEl.hidden=false;
  $('#titleIn').innerHTML=logoSVG()+`<p>사료로 묻고, 증거로 판결한다</p><small>아래에서 역할을 고르면 재판이 시작됩니다</small>`;
}
function backToRoles(){
  closeSheet(); Music.stop(0.6); S.inTrial=false; S.bgm=null; setMood('open'); setCharges(null); stageEl.classList.remove('meet'); document.body.classList.remove('judge-mode');
  { const sub=document.querySelector('.brand span'); if(sub) sub.textContent='사료로 묻고, 증거로 판결한다'; }
  controlsEl.hidden=true,$('#pips')&&($('#pips').hidden=true); rolesEl.hidden=false; hideEvidence(); $('#invbar').hidden=true; $('#lens').hidden=true; stageEl.classList.remove('inv'); S.mode=null;
  setView('judge','judge','smile'); setName('guide'); textEl.className='text'; nextEl.hidden=true;
  textEl.textContent='역할을 고르면 재판이 시작됩니다. 글상자를 누르면 다음 말로 넘어갑니다.';
  showTitle();
}

/* ===== 이벤트 ===== */
dialogEl.addEventListener('click',onAdvance);
$('#shoutSkip').addEventListener('click',e=>{ e.stopPropagation(); if(skipCurrent) skipCurrent(); });
$('#tcSkip').addEventListener('click',e=>{ e.stopPropagation(); if(skipCurrent) skipCurrent(); });
$('#tWorkshop').addEventListener('click',openWorkshop);
$('#tTeacher').addEventListener('click',openTeacher);
$('#tRecord').addEventListener('click',()=>{ if(S.pendingPick){ S.pendingPick(); return; } if(CX && !controlsEl.hidden && !S.busy){ openRecord(!document.body.classList.contains('judge-mode')); return; } openRecord(false); });
$('#tLog').addEventListener('click',()=>openHistory(null));
const spB=$('#tSpeed'); const paintSpeed=()=>{ spB.textContent='글자 '+TEXT_SPEED[textSpeed].n; }; paintSpeed();
spB.addEventListener('click',()=>{ textSpeed=(textSpeed+1)%TEXT_SPEED.length; store.set('yj-speed',textSpeed); paintSpeed(); Music.sting('click'); });
$('#pickHint').addEventListener('click',()=>{ if(S.pendingPick) S.pendingPick(); });
$('#tJuke').addEventListener('click',openJukebox);
$('#bPress').addEventListener('click',doPress);
$('#bPresent').addEventListener('click',()=>{ if(!S.busy&&CX) openRecord(true); });
$('#bPrev').addEventListener('click',()=>crossStep(-1));
$('#bNext').addEventListener('click',()=>crossStep(1));
$('#bObserve').addEventListener('click',doObserve);
const soundBtn=$('#tSound'), volEl=$('#vol');
function renderSound(){ soundBtn.textContent=Music.on?'소리 켬':'소리 끔'; soundBtn.setAttribute('aria-pressed',Music.on?'true':'false'); }
volEl.value=String(Math.round(Music.volume*100));
volEl.addEventListener('input',()=>Music.setVolume(+volEl.value/100));
soundBtn.addEventListener('click',()=>{ Music.setEnabled(!Music.on); Music.resume(); renderSound(); });
Music.onChange(id=>{ $('#np').textContent=id?'♪ '+TRACKS[id].title:''; });
document.addEventListener('keydown',e=>{
  if(e.target instanceof HTMLInputElement) return;
  const k=e.key;
  if(!sheetEl.hidden){
    if(k==='Escape' && sheetCloseable){ closeSheet(); return; }
    if((k==='l'||k==='L'||k==='ㅣ') && sheetCard.querySelector('[data-act=hist]')){ e.preventDefault(); sheetCard.querySelector('[data-act=hist]').click(); return; }
    if(recNav && (['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Enter','e','E'].includes(k)||/^[1-9]$/.test(k))){ e.preventDefault(); recNav(k); }
    return;
  }
  if((k==='l'||k==='L'||k==='ㅣ')){ e.preventDefault(); openHistory(null); return; }
  if(S.pendingPick && (k==='e'||k==='E'||k==='ㄷ')){ e.preventDefault(); S.pendingPick(); return; }
  // 돋보기 조사
  if(S.mode==='inv' && !moving){
    if(k==='a'||k==='A'||k==='ㅁ'){ e.preventDefault(); invGo(()=>roomStep(-1)); return; }
    if(k==='d'||k==='D'||k==='ㅇ'){ e.preventDefault(); invGo(()=>roomStep(1)); return; }
    if((k==='t'||k==='T'||k==='ㅅ') && npcOf(invLoc)){ e.preventDefault(); invGo(talkTo); return; }
    if((k==='p'||k==='P'||k==='ㅔ') && npcOf(invLoc)){ e.preventDefault(); invGo(()=>showTo(null)); return; }
    if(['1','2','3'].includes(k)){ e.preventDefault(); const L=availLocs()[+k-1]; if(L) invGo(()=>goLoc(L.id)); return; }
  }
  if(S.mode==='inv' && !moving && sheetEl.hidden){
    if(LENS_DIR[k]){ e.preventDefault(); if(document.activeElement&&document.activeElement.blur) document.activeElement.blur();
      if(!S.busy){ if(!lensHeld[k]){ lensHeld[k]=performance.now(); const d=LENS_DIR[k]; moveLens(d[0]*1.2,d[1]*1.2); } lensFast=e.shiftKey; startLensLoop(); } return; }
    if(k==='Enter'||k===' '||k==='e'||k==='E'){ e.preventDefault(); if(document.activeElement&&document.activeElement.blur) document.activeElement.blur();
      if(advanceResolver||typing||skipCurrent) onAdvance(); else if(!S.busy) examineAt(); return; }
  }
  // 추궁 단축키: Space·→ 다음, ← 이전, F 더 묻기, E 증거 제시
  if(!controlsEl.hidden && !S.busy && !skipCurrent){
    if(k===' '||k==='ArrowRight'){ e.preventDefault(); $('#bNext').click(); return; }
    if(k==='ArrowLeft'){ e.preventDefault(); $('#bPrev').click(); return; }
    if(k==='f'||k==='F'||k==='ㄹ'){ e.preventDefault(); doPress(); return; }
    if(k==='e'||k==='E'||k==='ㄷ'){ e.preventDefault(); if(CX) openRecord(!document.body.classList.contains('judge-mode')); return; }
    if((k==='s'||k==='S'||k==='ㄴ') && CX && CX.T.habit){ e.preventDefault(); doObserve(); return; }
  }
  if((k==='Enter'||k===' ') && !(e.target instanceof HTMLButtonElement)){ e.preventDefault(); onAdvance(); }
});
stageEl.addEventListener('pointermove',e=>{ if(S.mode!=='inv') return; const r=stageEl.getBoundingClientRect(); lens.x=Math.max(1,Math.min(99,(e.clientX-r.left)/r.width*100)); lens.y=Math.max(3,Math.min(97,(e.clientY-r.top)/r.height*100)); placeLens(); });
let lensDrag=null;
stageEl.addEventListener('pointerdown',e=>{ if(S.mode==='inv' && !moving && (advanceResolver||typing) && !e.target.closest('.evwin,.np,.hud')){ onAdvance(); return; } if(S.mode!=='inv'||S.busy||moving) return; if(e.target.closest('.evwin,.np,.hud')) return;
  const r=stageEl.getBoundingClientRect(); lens.x=Math.max(1,Math.min(99,(e.clientX-r.left)/r.width*100)); lens.y=Math.max(3,Math.min(97,(e.clientY-r.top)/r.height*100)); placeLens();
  lensDrag={id:e.pointerId}; try{ stageEl.setPointerCapture(e.pointerId); }catch(_){} $('#lens').classList.add('drag'); e.preventDefault(); });
const endDrag=e=>{ if(!lensDrag||lensDrag.id!==e.pointerId) return; lensDrag=null; $('#lens').classList.remove('drag'); try{ stageEl.releasePointerCapture(e.pointerId); }catch(_){} if(e.type==='pointerup' && S.mode==='inv' && !S.busy && !moving) examineAt(); };
stageEl.addEventListener('pointerup',endDrag); stageEl.addEventListener('pointercancel',endDrag);

/* ===== 첫 화면 ===== */
(function dust(){ let h=''; for(let i=0;i<18;i++){ const l=(i*53)%100, t=40+(i*37)%60, d=8+(i*7)%9, dl=-(i*1.3)%12; h+=`<i style="left:${l}%;top:${t}%;animation-duration:${d}s;animation-delay:${dl}s"></i>`; } $('#dust').innerHTML=h; })();
renderSound(); renderGauge(); renderRoles();
setView('judge','judge','smile'); setName('guide');
textEl.textContent='역사 법정에 오신 것을 환영합니다. 아래에서 역할을 고르세요. 글상자를 누르면 다음 말로 넘어갑니다.';
showTitle();

if(location.hash==='#dbg') window.__dbg={setView:setView,setName:setName,titleCard:titleCard};
window.__yj={S:S,CASE_DATA:CASE_DATA,npcRect:npcRect,get CX(){return CX;},get invLoc(){return invLoc;},get invParent(){return invParent;},LOCS:LOCS,availLocs:availLocs,roomsOf:roomsOf,npcOf:npcOf,missingReq:missingReq,get pickExpect(){return S.expect;}};
