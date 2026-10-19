// Plays a whole case on its own, using the game's own data to find the right moves.
// 사용: node tests/solver.js c1 | c2p | c2d | c3d | c3p | c4p … [갈림길 태그,쉼표로]
//   예) node tests/solver.js c3d sharp,hide    node tests/solver.js c3p keep    node tests/solver.js c7j wait,both
//   역할 글자: p 검사, d 변호인, j 판사 (첫 화면의 cx-사건-역할-new 단추를 누름)
const {JSDOM}=require('jsdom');
const html=require('fs').readFileSync('v03.html','utf8');
const errors=[]; const log=[]; const _p=log.push.bind(log); log.push=(...a)=>{ console.log(...a); return _p(...a); };
const dom=new JSDOM(html,{runScripts:'dangerously',url:'https://example.org/',pretendToBeVisual:true,beforeParse(w){ w.__yjFast=true; w.addEventListener('error',e=>errors.push(e.message)); w.console.error=(...a)=>errors.push(a.join(' ')); }});
const w=dom.window,d=w.document; const $=s=>d.querySelector(s); const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const key=k=>{ d.dispatchEvent(new w.KeyboardEvent('keydown',{key:k,bubbles:true})); if(k.startsWith('Arrow')) d.dispatchEvent(new w.KeyboardEvent('keyup',{key:k,bubbles:true})); };
const Y=()=>w.__yj;
const PREF=(process.argv[3]||'').split(',').filter(Boolean);
/* MEASURE=<파일>: 날마다 읽은 글자 수, 얻은 증거, 조사 장소·단서 자리, 증언의 거짓 수를 JSON으로 남김 (시뮬레이션·증거 표용) */
const MEAS=process.env.MEASURE, M={mode:process.argv[2]||'c1',pref:PREF,days:[]};
const dayNo=()=>{ const S=Y()&&Y().S; return S?(S.day||S.phase||0):0; };
function dayRec(){ const n=dayNo(), S=Y().S; let r=M.days.find(x=>x.day===n); if(!r){ r={day:n,txt:0,lines:0,txtBy:{},inv:null,testi:{},found:[]}; M.days.push(r); } return r; }
w.__yjTxt=(who,t,c)=>{ if(!Y()||!Y().S) return; const r=dayRec(); r.txt+=t.length; r.lines++; r.txtBy[who]=(r.txtBy[who]||0)+t.length; const S=Y().S; S.found&&S.found.forEach(id=>{ if(!M.days.some(x=>x.found.includes(id))) r.found.push(id); }); };
async function idle(){ await sleep(10); for(let i=0;i<900;i++){ const sh=$('#shout.show'),tc=$('#tc.show'); if(sh){sh.click();await sleep(20);continue;} if(tc){tc.click();await sleep(20);continue;} if(!$('#next').hidden){ $('#dialog').click(); await sleep(25); continue; } const t=$('#text').innerHTML; await sleep(40); if($('#next').hidden && $('#text').innerHTML===t && !$('#shout.show') && !$('#tc.show')) return; } }
const lensPos=()=>({x:parseFloat($('#lens').style.left),y:parseFloat($('#lens').style.top)});
async function goTo(x,y){ for(let i=0;i<120;i++){ const p=lensPos(); if(Math.abs(p.x-x)<1.3&&Math.abs(p.y-y)<1.3) return; if(p.x<x-1.3) key('ArrowRight'); else if(p.x>x+1.3) key('ArrowLeft'); else if(p.y<y-1.3) key('ArrowDown'); else key('ArrowUp'); await sleep(3);} }
const eff=p=>{ const S=Y().S; return (S.phase>=(S.p2at||2)&&p.p2)?Object.assign({},p,p.p2):p; };
const avail=x=>{ const S=Y().S; return (!x.from||S.phase>=x.from)&&(!x.until||S.phase<=x.until)&&(!x.role||x.role===S.role)&&(!x.cond||x.cond()); };
/* 조사 중에 뜬 고르기 창(똘방의 요약 바로잡기 등)이나 안내 창을 닫는다 */
async function settle(){ for(let i=0;i<30;i++){ await idle(); if($('#sheet').hidden) return; if($('#sheetGo')){ $('#sheetGo').click(); await sleep(60); continue; } if($('.choice')&&w.__yjOpts&&!$('[data-act=tend]')){ const O=w.__yjOpts; let k=O.findIndex(o=>o.ok&&o.tag&&PREF.includes(o.tag)); if(k<0) k=O.findIndex(o=>o.ok); const b=$(`.choice[data-i="${k}"]`); if(b){ b.click(); await sleep(60); continue; } } return; } }
async function pickEv(id){ for(let i=0;i<80&&!( !$('#sheet').hidden && $(`button.ev[data-id="${id}"]`));i++) await sleep(25); const b=$(`button.ev[data-id="${id}"]`); if(!b) return false; b.click(); await sleep(15); $('[data-act=present]').click(); await sleep(40); return true; }
async function solveInv(){
  await settle();
  if(MEAS){ const S=Y().S, r=dayRec(), I={locs:[],spots:0,real:0,decoy:0,npcs:0,topics:0,must:0};
    for(const loc of Y().availLocs()){ I.locs.push(loc.id); for(const room of Y().roomsOf(loc)){ for(const p0 of room.spots){ const p=eff(p0); if(p.only2&&S.phase<(S.p2at||2)) continue; if(p.role&&p.role!==S.role) continue; if(!avail(p)) continue; I.spots++; const tl=(p.say||[]).reduce((n,x)=>n+String(Array.isArray(x)?x[x.length-1]:x).replace(/\[\[|\]\]/g,'').length,0); if((p.gives&&p.gives.length)||p.ev){ I.real++; } else { I.decoy++; I.decoyTxt=(I.decoyTxt||0)+tl; } } const np=Y().npcOf(room); if(np){ I.npcs++; np.topics.forEach(t=>{ if(avail(t)){ I.topics++; if(t.must) I.must++; } }); } } }
    r.inv=I; }
  for(let pass=0;pass<5;pass++){
    const S=Y().S;
    for(const loc of Y().availLocs()){
      if(!Y().invParent||Y().invParent.id!==loc.id){ const lb=$(`[data-loc="${loc.id}"]`); if(!lb){ log.push('no loc btn '+loc.id); continue; } lb.click(); await sleep(700); await idle(); if(Y().invParent.id!==loc.id){ log.push('loc move failed '+loc.id+' busy='+Y().S.busy); } }
      for(const room of Y().roomsOf(loc)){
        if(Y().invLoc.id!==room.id){ if(room.need && !S.found.has(room.need)) continue; const rb=$(`[data-room="${room.id}"]`); if(!rb){ log.push('no room btn '+room.id+' at '+Y().invParent.id+'/'+Y().invLoc.id+' btns='+[...d.querySelectorAll('[data-room]')].map(b=>b.dataset.room)); continue; } rb.click(); await sleep(650); await idle(); }
        await settle();
        for(const p0 of room.spots){ const p=eff(p0); if(p.only2 && S.phase<(S.p2at||2)) continue; if(p.role && p.role!==S.role) continue; const ids=(p.gives||[]).concat(p.ev?[p.ev]:[]); if(!ids.some(id=>!S.found.has(id))) continue; if(p.need && !S.found.has(p.need)) continue;
          await goTo(p.x+p.w/2,p.y+p.h/2); const lp=lensPos(); key('Enter'); await sleep(60); await idle(); await settle(); if(ids.some(id=>!S.found.has(id))) log.push('miss at '+p.label+' lens '+lp.x+','+lp.y+' busy='+S.busy+' adv='+(!$('#next').hidden)+' room='+Y().invLoc.id); }
        const np=Y().npcOf(room);
        if(np){ S.unlocked=S.unlocked||new Set(); S.talked=S.talked||new Set();
          for(const t of np.topics){ if(!avail(t)) continue; if(t.lock && !S.unlocked.has(t.id)){ const ev=Object.keys(np.present||{}).find(k=>np.present[k].unlock===t.id && S.found.has(k)); if(ev){ const R=np.present[ev], list=(R.need||[ev]).filter(k=>S.found.has(k)); for(const e of list){ key('p'); await sleep(120); await pickEv(e); await idle(); await settle(); log.push('showed '+e+' to '+np.who); } } } }
          key('t'); await sleep(150);
          for(let i=0;i<np.topics.length;i++){ const t=np.topics[i]; if(!avail(t)||S.talked.has(t.id)|| (t.lock&&!S.unlocked.has(t.id))) continue; const b=$(`.choice[data-i="${i}"]`); if(!b) continue; b.click(); await sleep(80); await idle(); await sleep(120); }
          const te=$('[data-act=tend]'); if(te){ te.click(); await sleep(80); }
        }
      }
    }
    if(!Y().missingReq().length) break;
  }
  const miss=Y().missingReq(); if(miss.length) log.push('STILL MISSING '+miss.join(','));
  $('#toCourt').click(); await sleep(300); await idle();
}
async function solveCross(){
  const CX=Y().CX; if(!CX) return; const T=CX.T, S=Y().S;
  if(MEAS){ const r=dayRec(), k=T.key||T.title||'?'; if(!r.testi[k]) r.testi[k]={lines:T.lines.length,lies:T.lines.filter(l=>l.lie).length,pair:T.lines.filter(l=>l.need2).length,hidden:T.lines.filter(l=>l.reveal!==undefined||l.hidden).length,habit:!!T.habit}; }
  const vis=CX.vis, has=L=>(L.need2||[].concat(L.ev||[])).some(id=>S.found.has(id)) && (!L.need2||L.need2.every(id=>S.found.has(id)));
  let target=vis.findIndex(i=>T.lines[i].lie && !T.lines[i].broken && has(T.lines[i])); let act='present';
  if(target<0){ target=vis.findIndex(i=>{ const L=T.lines[i]; return (L.reveal!==undefined && !vis.includes(L.reveal)) || L.endOnPress; }); act='press'; }
  if(target<0){ target=0; act='press'; }
  for(let i=0;i<10 && Y().CX && Y().CX.pos!==target;i++){ key(' '); await sleep(40); }
  const L=T.lines[vis[target]];
  if(T.habit && !L.habitSeen && act==='present'){ key('s'); await sleep(60); await idle(); if(!L.habitSeen) log.push('observe did not mark line'); return; }
  if(act==='press'){ key('f'); await sleep(60); await idle(); return; }
  if(L.need2){ key('e'); await sleep(80); await pickEv(L.need2[0]); await idle(); await pickEv(L.need2[1]); await idle(); return; }
  const ev=[].concat(L.ev).find(id=>S.found.has(id)); key('e'); await sleep(80); await pickEv(ev); await idle();
}
/* 교사용 화면의 학급 연표: 방금 끝낸 사건 칸이 '끝낸 친구 1/1명'으로 채워졌는지, 크게 띄운 판에 영어 낱말이 없는지 */
async function boardCheck(){
  const n=Y().S.case||1; $('#tTeacher').click(); await sleep(60);
  if(!$('#cbWrap')){ errors.push('class board: teacher screen did not open'); return; }
  const card=[...d.querySelectorAll('#cbWrap .cb-i')].find(c=>+((/^사건 (\d+)/.exec(c.querySelector('.cb-t small').textContent)||[])[1])===n);
  const txt=card?card.querySelector('.cb-cnt').textContent:'(칸 없음)'; log.push('BOARD 사건 '+n+': '+txt);
  if(!/끝낸 친구 1\/1명/.test(txt)) errors.push('class board: case '+n+' not filled ('+txt+')');
  $('#cbBig').click(); await sleep(60); const big=$('.cb-big');
  if(!big||!big.querySelector('.cb-tl')) errors.push('class board: big view missing'); else if(/[A-Za-z]/.test(big.textContent)) errors.push('class board: latin text in big view');
}
async function run(start){
  await sleep(150); await start(); let days=0;
  for(let step=0;step<6000;step++){
    if($('#r2back')||$('#rRetry')){ log.push('RESULT '+[...d.querySelectorAll('.tier,.res-list li,.stat')].map(x=>x.textContent).join(' / ')); await boardCheck(); break; }
    if(!$('#invbar').hidden && Y().S.mode==='inv'){ log.push('inv day '+Y().S.phase+' places '+Y().availLocs().map(l=>l.id).join('+')); await solveInv(); continue; }
    if($('#pGo')){ days++; const im=$('[data-imp]'); if(im) im.click(); $('#pGo').click(); await sleep(80); continue; }
    if($('#sheetGo')){ $('#sheetGo').click(); await sleep(60); continue; }
    if($('[data-act=zback]')){ $('[data-act=zback]').click(); await sleep(60); continue; }
    if(!$('#sheet').hidden){
      if($('#bJudge')){ d.querySelectorAll('.cl-row').forEach(r=>r.querySelector('.seg button').click()); $('#bJudge').click(); await sleep(60); continue; }
      const vb=[...d.querySelectorAll('#sheet button')].find(b=>/판결문/.test(b.textContent)); if(vb && !$('#vGo')){ vb.click(); await sleep(60); continue; }
      if($('#vGo')){ ['#oa','#ob','#oc'].forEach(s=>{ const o=d.querySelector(s+' .opt'); if(o) o.click(); }); $('#vGo').click(); await sleep(80); continue; }
      if($('.choice') && w.__yjOpts){ const O=w.__yjOpts; let i=O.findIndex(o=>o.ok&&o.tag&&PREF.includes(o.tag)); if(i<0) i=O.findIndex(o=>o.ok); const b=$(`.choice[data-i="${i}"]`); if(b){ if(O[i].tag) log.push('choice '+O[i].tag); b.click(); await sleep(60); await idle(); continue; } }
      if($('[data-act=present]') && Y().S.expect){ await pickEv(Y().S.expect.find(id=>Y().S.found.has(id))||Y().S.expect[0]); await idle(); continue; }
    }
    if(!$('#controls').hidden && Y().CX){ await solveCross(); continue; }
    await idle(); await sleep(30);
  }
  log.push('days paused '+days+' | bells '+Y().S.trust+' | missed '+(Y().S.misses||0));
  if(MEAS){ const S=Y().S; M.ev=(Y().EVIDENCE||[]).map(e=>({id:e.id,title:e.title,type:e.type,y:e.y,fake:!!e.fake,gag:!!e.gag,tag:e.tag||''})); M.foundAll=[...(S.found||[])]; M.case=S.case||1; M.role=S.role||'pros'; M.misses=S.misses||0; try{ M.events=JSON.parse(w.localStorage.getItem('yj-events')||'[]').filter(e=>e.kind==='ev_found').map(e=>({day:e.day,id:e.detail.id,from:e.detail.from})); }catch(e){ M.events=[]; } require('fs').writeFileSync(MEAS,JSON.stringify(M)); }
  console.log('ERRORS:',errors.length?errors.slice(0,6):'none'); process.exit(0);
}
const mode=process.argv[2]||'c1';
// 막히면 상태를 보여 주고 끝냄 (기본 240초)
setTimeout(()=>{ const S=Y()&&Y().S, CX=Y()&&Y().CX; console.log(log.slice(-8).join('\n')); console.log('STUCK mode='+(S&&S.mode)+' day='+(S&&S.day)+' busy='+(S&&S.busy)+' cx='+(CX?CX.T.key+'@'+CX.pos:'-')+' sheet='+(!$('#sheet').hidden?$('#sheet').textContent.slice(0,160):'-')+' text='+$('#text').textContent.slice(0,120)+' next='+!$('#next').hidden+' controls='+!$('#controls').hidden); console.log('ERRORS:',errors.length?errors.slice(0,6):'none'); process.exit(2); },(+process.env.SOLVER_LIMIT||240)*1000).unref();
run(async()=>{
  const m=/^c(\d+)([pdj])?$/.exec(mode), n=m?+m[1]:1, role={p:'pros',d:'def',j:'judge'}[m&&m[2]||'p'];
  if(n===1){ $('[data-role=story]').click(); }
  else if(n===2){ $('[data-case="2"]').click(); await sleep(50); $(`[data-act=c2-${role}-new]`).click(); }
  else { $(`[data-case="${n}"]`).click(); await sleep(50); const b=$(`[data-act=cx-${n}-${role}-new]`); if(!b) throw new Error('no start button for '+mode); b.click(); }
}).catch(e=>{ console.log(log.join('\n')); console.log('CRASH',e.stack); process.exit(1); });
