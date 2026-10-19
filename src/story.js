
/* ===== 사건 1: 4일 구성 데이터 (조사 중 인물, 날짜별 장소, 새 증거) ===== */
EVIDENCE.push({id:'E13',type:'증언',title:'웅진으로 간 왕',body:'적이 사비성을 에워싸자 의자왕은 태자를 데리고 웅진성으로 피했다가, 며칠 뒤 항복했다.',src:'사비성 백성의 증언 · 「삼국사기」',trust:3,note:'왕이 마지막에 어디에 있었는지 알려 주는 증언이에요.',icon:'map'});
EV_BY_ID.E13=EVIDENCE[EVIDENCE.length-1];
EVIDENCE.push({id:'E14',type:'사료',title:'황산벌의 5천 결사대',body:'660년 계백 장군이 5천 결사대를 이끌고 황산벌에서 신라군과 네 번 싸워 모두 이겼으나, 끝내 패하고 전사하였다.',src:'「삼국사기」 열전 (계백)',trust:3,note:'같은 시대에 끝까지 싸운, 다른 선택이에요.',icon:'army'});
EV_BY_ID.E14=EVIDENCE[EVIDENCE.length-1];
EV_BY_ID.E3.reuse=true;
EVIDENCE.push({id:'E15',type:'증언',tag:'hearsay',title:'전해 들은 말: 3천 궁녀',body:'말순 할머니: “궁녀 3천 명이 강으로 뛰어드는 걸 봤다니까! …아니, 옆집 개똥이 할아버지가 봤대. 그 할아버지의 사촌의 사돈이…”',src:'사비성 터 강가에서 들은 이야기 (상상)',trust:1,note:'직접 본 사람이 없는 이야기예요. 이런 카드를 ‘전해 들은 말’이라고 불러요.',icon:'scroll'});
EV_BY_ID.E15=EVIDENCE[EVIDENCE.length-1];
Object.entries({E1:642,E2:660,E3:656,E4:656,E5:643,E7:660,E8:660,E9:660,E10:656,E11:1145,E13:660,E14:660}).forEach(([k,y])=>{ if(EV_BY_ID[k]) EV_BY_ID[k].y=y; });
Object.assign(PHASE_NAME,{1:'1일차 조사',2:'1일차 법정',3:'2일차 조사',4:'2일차 법정',5:'3일차 조사',6:'3일차 법정',7:'4일차 법정'});
(function(){
  const L=id=>LOCS.find(l=>l.id===id);
  const ru=L('ruins'); const gate=ru.rooms.find(r=>r.id==='ruins'); const cliff=ru.rooms.find(r=>r.id==='ruins-cliff');
  cliff.from=2;
  cliff.npcs=[{who:'malsun',expr:'base',place:{x:30},from:2,topics:[
    {id:'ms-saw',t:'무엇을 보셨나요?',must:true,lines:[['malsun','base','내가 다 봤다니까! 궁녀 [[3천 명]]이 이 강으로 뛰어드는 걸!'],['ME','normal','직접 보셨어요?'],['malsun','base','그럼! …아니, 우리 옆집 개똥이 할아버지가 봤대.'],['ME','think','그 할아버지는 직접 보셨대요?'],['malsun','sweat','…그 할아버지의 사촌의, 사돈의, 옆집 사람이…'],['guide','normal','(말순 할머니의 손가락이 하늘에 가계도를 그린다. 한 칸, 또 한 칸… 끝이 없다.)'],['ttolbang','base','그럼 그 사돈을 증인으로 부를까요?'],['judge','normal','(어디선가 해치의 목소리) …그 사돈은 1,400년 전 사람이오. 딸랑.'],['ME','think','(본 사람은 아무도 없고, 들은 사람만 줄줄이 있네. 이런 건 [[전해 들은 말]]이야.)']],gives:['E15']},
    {id:'ms-who',t:'할머니는 누구세요?',lines:[['malsun','base','이 근처에서 주막을 하는 말순이오. 소문이라면 내가 제일 빠르지!']]}],
    present:{E7:{lines:[['malsun','base','낙화암! 거기서 3천 명이… 응? 기록에는 숫자가 없다고? 이상하네, 다들 그러던데.']]},MUK:{lines:[['malsun','base','어머, 메밀묵! 우리 주막에도 있는데. 한 그릇 두 냥이오.']]}},
    def:[['malsun','base','그건 처음 보는 물건이네. 그런데 내가 들은 얘기로는…']]}];
  gate.npcs=[{who:'citizen',expr:'base',place:{x:40},topics:[
    {id:'c-night',t:'그날의 사비성',lines:[['citizen','base','그날 해 질 녘, 강 쪽에서 북소리가 들렸어요.'],['citizen','plea','성 안은 아수라장이었지요. 다들 어디로 가야 할지 몰랐어요.']]},
    {id:'c-cliff',t:'강가 절벽',lines:[['citizen','base','성 뒤 강가에 큰 바위가 있어요. 궁녀들이 거기서 몸을 던졌다는 이야기가 전해지지요.'],['citizen','base','그런데… 몇 명이었는지 똑똑히 아는 사람은 없어요.']]},
    {id:'c-king',t:'왕의 행방',lock:'E8',must:true,lockSay:'(이 사람은 무언가를 말하기를 망설이고 있다. 적이 어디로 들어왔는지 보여 주면 입을 열지도 모른다.)',
     lines:[['citizen','plea','적이 강과 산길로 몰려오자… 왕께서는 성을 떠나셨어요.'],['citizen','plea','태자를 데리고 [[웅진성]]으로 가셨다고 들었어요. 그리고 며칠 뒤 항복하셨지요.'],['ME','think','(왕이 사비성을 떠났다… 이건 중요한 사실이야.)']],gives:['E13']}],
    present:{E8:{lines:[['citizen','base','이 화살… 바다 쪽에서 날아온 것이군요.'],['citizen','plea','…좋아요. 그날 왕께서 어디로 가셨는지 말씀드리지요.']],unlock:'c-king'},
             E2:{lines:[['citizen','plea','당나라와 신라의 군대가 그렇게 많았군요. 그날 하늘이 깃발로 덮였어요.']]}},
    def:[['citizen','base','그건… 저는 잘 모르는 물건이에요.']]}];
  LOCS.push({id:'hwangsan',name:'황산벌 터',time:'흐린 낮',from:3,intro:'계백의 결사대가 마지막으로 싸운 들판이다. 지금은 바람만 분다.',
    miss:['풀이 무성하다.','진흙투성이 땅이다.','바람이 차다.','아무것도 없다.','작은 돌멩이다.'],
    spots:[{x:44,y:18,w:17,h:50,label:'이끼 낀 비석',ev:'E14',say:['이끼 낀 오래된 비석이다. 칼과 방패가 새겨져 있다.','계백 장군과 [[5천 결사대]]가 이곳에서 신라군과 네 번 싸워 이겼다고 한다. 그리고 끝내…']},
      {x:8,y:75,w:27,h:19,label:'부러진 창 자루',say:['썩은 나무 자루다. 단서는 아니다.']},{x:76,y:53,w:21,h:30,label:'돌무더기',say:['누군가 쌓아 둔 돌무더기다.']},{x:62,y:8,w:36,h:22,label:'흐린 하늘과 까마귀',say:['비가 올 것 같다.']}]});
  LOCS.push({id:'lobby',name:'법정 로비',time:'저녁',from:2,intro:'재판이 끝난 법정 로비다. 긴 의자에 누군가 앉아 있다.',
    miss:['반들반들한 마룻바닥이다.','빈 의자다.','창살 사이로 노을이 든다.','아무것도 없다.'],
    spots:[{x:5,y:62,w:31,h:22,label:'긴 의자',say:['나무 의자다. 오래 기다린 사람들의 손때가 묻어 있다.']},{x:83,y:64,w:13,h:20,label:'항아리',say:['물을 담아 두는 항아리다. 단서는 아니다.']},{x:57,y:45,w:9,h:18,label:'분재',say:['작은 소나무 분재다.']},{x:36,y:28,w:22,h:40,label:'법정 문',say:['내일 다시 열릴 법정의 문이다.']}],
    npcs:[{who:'heungsu',expr:'base',place:{x:72},from:2,until:2,topics:[
      {id:'h-exile',t:'귀양살이',lines:[['heungsu','base','오래 귀양살이를 했소. 서울 일은 바람결에 들을 뿐이지.']]},
      {id:'h-minister',t:'대신들',lines:[['heungsu','base','대신들은 내가 오래 귀양살이를 해서 원망이 깊다고 했지…'],['heungsu','hesitate','그 말이 왕의 귀를 막았을지도 모르오.']]},
      {id:'h-ask',t:'왕의 물음',lock:'E3',must:true,lockSay:'(흥수는 입을 다물었다. 같은 생각을 한 다른 신하의 글을 보여 주면 마음을 열지도 모른다.)',
       lines:[['heungsu','hesitate','성충의 글을 보니… 내가 왕께 드린 말과 같구려.'],['heungsu','base','좋소. 내일 법정에 서겠소. 다만 내 입으로 다 말할 수 있을지는… 모르겠소.'],['ME','think','(무언가 숨기는 게 있어. 법정에서 [[더 물어봐야]] 할 것 같아.)']]}],
      present:{E3:{lines:[['heungsu','shock','이건… 성충의 글이 아니오!']],unlock:'h-ask'},E4:{lines:[['heungsu','hesitate','바른말을 한 신하가 옥에 갇혔지. 나도 그 꼴을 봤소.']]}},
      def:[['heungsu','base','늙은이가 알아볼 만한 물건이 아니구려.']]},
     {who:'rival',expr:'smug',place:{x:72},from:3,topics:[
      {id:'n-656',t:'656년 기록',lines:[['rival','confident','성충이 옥에 갇힌 이야기와, 왕이 놀이에 빠졌다는 이야기는 [[같은 대목]]이에요. 내일 그걸 따져 물을 거예요.']]},
      {id:'n-who',t:'누가 쓴 기록인가',lock:'E10',must:true,lockSay:'(누리는 웃기만 한다. 그 기록을 직접 보여 주며 물어봐야겠다.)',
       lines:[['rival','smug','「삼국사기」요? 고려 때 엮은 책이죠. 그게 어쨌다는 거예요?'],['rival','normal','…흥, 서고의 잠긴 상자에 편찬 기록이 있다던데. 열쇠는 궁터 우물 근처에서 봤다는 소문이 있어요.']]}],
      present:{E10:{lines:[['rival','smug','어제 제가 낸 기록이잖아요. 그래서요?']],unlock:'n-who'}},
      def:[['rival','normal','그걸로 저를 이길 수 있을까요?']]}]});
})();

/* 판결: 이유를 고르고, 그 이유의 근거 증거를 낸다 */
async function reasonEv(q,opts,prompt){
  S.allowUsed=true;
  for(;;){
    const c=await choiceSheet(q,opts);
    if(!c.ok){ await say('judge','stern',c.fb||'그 이유로는 판결할 수 없소.'); await loseTrust(); if(S.trust<=0){ S.allowUsed=false; await loseTrial(); return false; } continue; }
    S.expect=c.ev; let id=await pickEvidence(prompt||'그 이유를 뒷받침하는 증거를 고르세요.'); S.expect=null;
    while(c.soft && c.soft[id]){ track('soft_ev',{q:q,ev:id}); await line(c.soft[id]); S.expect=c.ev; id=await pickEvidence('함께 낼 다른 근거를 고르세요.'); S.expect=null; }
    track('reason',{q:q,a:c.t,ev:id,ok:c.ev.includes(id)});
    { const be=EV_BY_ID[id]; if(c.before!==undefined && be && typeof be.y==='number' && be.y>c.before && !c.ev.includes(id)){ track('time_order',{q:q,ev:id}); await say('judge','stern',`${yearTxt(be.y)}의 일이 ${yearTxt(c.before)}의 이유가 될 수는 없소. [[시간 순서]]를 보시오.`); await loseTrust(); if(S.trust<=0){ S.allowUsed=false; await loseTrial(); return false; } continue; } }
    if(EV_BY_ID[id]&&EV_BY_ID[id].gag&&!c.ev.includes(id)){ await line([['judge','stern','…판결의 근거로 [[메밀묵]]을 내는 사람은 처음 보오.'],['ttolbang','shock','앗, 그거 제 거예요!']]); await loseTrust(); if(S.trust<=0){ S.allowUsed=false; await loseTrial(); return false; } continue; }
    if(c.ev.includes(id)){ showEvidence(id); await say(ME(),'present',`근거는 ‘${EV_BY_ID[id].title}’입니다.`); hideEvidence(); await say('judge','normal','이유와 근거가 맞소.'); await gainTrust(); S.allowUsed=false; return true; }
    const bad=EV_BY_ID[id];
    if(bad&&bad.fake&&S.zoomed&&S.zoomed.has(id)) await say('judge','stern','확대해 보고도 낸 그 종이에는 [[매화 얼룩]]이 있소. 누가 썼는지 알 수 없는 종이는 근거가 될 수 없소.');
    else if(bad&&bad.fake) await say('judge','stern','그 종이는 누가 썼는지 알 수 없소. [[근거에서 빼시오]].');
    else if(bad&&bad.trap) await say('judge','stern',bad.trap);
    else if(bad&&bad.trust===1) await say('judge','stern','[[전해 들은 말]]은 근거가 약하오. 직접 본 사람의 말이나 기록으로 뒷받침하시오.');
    else await say('judge','stern','그 증거는 이 이유를 뒷받침하지 못하오.');
    await loseTrust(); if(S.trust<=0){ S.allowUsed=false; await loseTrial(); return false; }
  }
}
/* 하루 끝 요약: 찾은 증거, 깬 거짓, 남은 방울, 오늘 알게 된 것, 피고에 대한 인상 */
function dayStart(){ S.dayMark={found:new Set(S.found||[]),log:(S.log||[]).length,t:Date.now()}; }
function dayPause(n,learned){
  const M=S.dayMark||{found:new Set(),log:0,t:Date.now()};
  const newEv=[...(S.found||[])].filter(id=>!M.found.has(id)&&realEv(id));
  const hits=(S.log||[]).slice(M.log).filter(x=>x.ok).length, wrongs=(S.log||[]).slice(M.log).filter(x=>!x.ok).length;
  const D=CASE_DATA[S.case], L=learned||(D&&D.learned&&D.learned[n])||null, who=(D&&D.defName)||(S.case===2?'위만':'의자왕');
  const mins=Math.max(1,Math.round((Date.now()-M.t)/60000));
  track('day_end',{day:n,newEv:newEv.length,hits:hits,wrongs:wrongs,trust:S.trust,mins:mins});
  return new Promise(res=>{
    openSheet(`<h2>${n}일차가 끝났습니다</h2>
      <div class="stats day-sum"><div class="stat">오늘 찾은 증거<b>${newEv.length}개</b></div><div class="stat">깬 거짓<b>${hits}개</b></div><div class="stat">헛 제시<b>${wrongs}번</b></div><div class="stat">남은 해치 방울<b>${S.storyMode?'—':S.trust+'/'+bellsMax()}</b></div></div>
      ${newEv.length?`<p class="day-ev">${newEv.map(id=>`<span class="chip">${esc(EV_BY_ID[id].title)}</span>`).join(' ')}</p>`:''}
      ${L?`<h3>오늘 알게 된 것</h3><ol class="learned">${L.map(x=>`<li>${esc(x)}</li>`).join('')}</ol>`:''}
      <h3>지금 ${esc(who)}에 대한 내 생각은?</h3>
      <div class="seg imp" role="group" aria-label="피고에 대한 인상">${[['good','좋다'],['unsure','모르겠다'],['bad','나쁘다']].map(x=>`<button type="button" data-imp="${x[0]}" aria-pressed="false">${x[1]}</button>`).join('')}</div>
      <p class="lead">여기까지 자동으로 저장했어요. 수업을 여기서 끊어도, 다음 시간에 첫 화면의 <b>이어 하기</b>로 ${n+1}일차부터 이어 갈 수 있어요.</p>
      <div class="sheet-foot"><button class="abtn" id="pStop" type="button">여기서 멈추기</button><button class="abtn primary" id="pGo" type="button">${n+1}일차 시작</button></div>`,false);
    let imp=null;
    sheetCard.querySelectorAll('[data-imp]').forEach(b=>b.addEventListener('click',()=>{ imp=b.dataset.imp; Music.sting('click'); sheetCard.querySelectorAll('[data-imp]').forEach(x=>{ x.classList.toggle('sel',x===b); x.setAttribute('aria-pressed',x===b?'true':'false'); }); }));
    const done=go=>{ track('impression',{day:n,v:imp||'skip'}); closeSheet(); if(!go) backToRoles(); else dayStart(); res(go); };
    $('#pGo').addEventListener('click',()=>done(true));
    $('#pStop').addEventListener('click',()=>done(false));
  });
}
/* ===== 사건 1 본편: 프롤로그 → 의뢰 → 조사 1 → 1일차 → 조사 2 → 2일차 → 판결 → 결말 ===== */
function hasSave(){ try{ const v=JSON.parse(store.get(SAVE_KEY)||'null'); return v&&v.phase?v:null; }catch(e){ return null; } }
function saveAt(phase){
  store.set(SAVE_KEY,JSON.stringify({phase:phase,found:[...(S.found||[])],seen:[...(S.seen||[])],trust:S.trust,variant:S.variant,misses:S.misses||0,presses:S.presses||0,log:S.log||[],used:[...(S.used||[])],talked:[...(S.talked||[])],unlocked:[...(S.unlocked||[])],flags:S.flags||{},verdicts:S.verdicts||[],when:Date.now()}));
}
function clearSave(){ try{ localStorage.removeItem(SAVE_KEY); }catch(e){} }

function prepStory(){
  { const sub=document.querySelector('.brand span'); if(sub && (S.case||1)===1) sub.textContent='사건 1 「백제는 왜 무너졌나」'; }
  S.p2at=3; S.talked=new Set(); S.unlocked=new Set(); S.hist=[]; S.allowUsed=false; S.expect=null;
  S.flags={}; S.terms=new Set(); S.zoomed=new Set(); S.plums=new Set(); S.observes=0; S.charges=null; setCharges(null); dayStart();
  S.verdicts=[]; S.vkMiss=0; S.claimMiss=0; S.stamps=0; S.gagDone={}; S.clicks={}; S.shown=new Set(); S.mukN=0;
  closeSheet(); Music.resume(); titleEl.hidden=true; rolesEl.hidden=true; controlsEl.hidden=true;
  $('#invbar').hidden=true; $('#lens').hidden=true; stageEl.classList.remove('inv');
  resetState(); S.story=true; S.inTrial=true; S.found=new Set(); S.seen=new Set(); S.misses=0;
  gagEv(); paintMuk();
}
function startStory(){ S.storyMode=false; S.case=1; S.role='pros'; adaptEnter(1); clearSave(); prepStory(); track('start',{resume:false,from:0}); (async()=>{ await caseIntro(); runStory(0); })(); }
function resumeStory(){
  S.storyMode=false; S.case=1; S.role='pros';
  const v=hasSave(); if(!v){ startStory(); return; }
  prepStory();
  if(v.variant!==undefined){ S.variant=v.variant; S.lines=buildLines(v.variant); }
  S.found=new Set(v.found); S.seen=new Set(v.seen||[]); S.trust=v.trust||bellsMax(); S.misses=v.misses||0; S.presses=v.presses||0; S.log=v.log||[]; S.used=new Set(v.used||[]); S.talked=new Set(v.talked||[]); S.unlocked=new Set(v.unlocked||[]); S.p2at=3;
  if(v.flags) S.flags=v.flags; if(v.verdicts) S.verdicts=v.verdicts;
  gagEv(); renderGauge(); track('start',{resume:true,from:v.phase}); runStory(v.phase);
}

async function runStory(from){
  if(from<=0){ await storyPrologue(); }
  if(from<=1){ saveAt(1); await titleCard('1일차','조사'); await investigate(1,'재판 전에 증거부터 모아야 해. [[돋보기]]로 수상한 곳을 조사하고, 사람이 있으면 [[이야기하기]]로 물어보자. 방향키로 움직이고 [[Enter]]로 조사, [[A·D]]로 구역을 옮길 수 있어.'); }
  if(from<=2){ saveAt(2); if(!await storyDay1()) return; saveAt(3); if(!await dayPause(1)) return; }
  if(from<=3){ saveAt(3); await titleCard('2일차','조사'); await investigate(2,'다른 의견을 낸 신하, [[흥수]]가 법정 로비에 와 있다고 들었어. 박물관과 강가 절벽도 이제 둘러볼 수 있어.'); }
  if(from<=4){ saveAt(4); if(!await storyDay2c()) return; saveAt(5); if(!await dayPause(2)) return; }
  if(from<=5){ saveAt(5); await titleCard('3일차','조사'); await storyLobby2(); await investigate(3,'어제 열 수 없던 곳들을 다시 살펴보자. 로비의 [[누리]]에게도 물어볼 게 있고, [[황산벌 터]]도 가 볼 수 있어.'); }
  if(from<=6){ saveAt(6); if(!await storyDay3()) return; saveAt(7); if(!await dayPause(3)) return; }
  if(from<=7){ saveAt(7); await storyDay4(); }
}

async function fillMissing(ids){
  const miss=ids.filter(id=>!S.found.has(id));
  S.missedInv=(S.missedInv||0)+miss.length;
  if(!miss.length) return;
  miss.forEach(id=>S.found.add(id));
  await say('judge','normal',`찾지 못한 증거 ${miss.length}개는 재판부가 모아 둔 기록으로 채웁니다. 다음엔 스스로 찾아보시오.`,{view:'lobby'});
}

/* ---------- 프롤로그와 의뢰 ---------- */
async function storyPrologue(){
  bgm('crisis');
  await say('guide','normal','660년 7월, 백제의 도읍 [[사비성]].',{view:'prologue'});
  await say('guide','normal','당나라와 신라의 군대가 성을 에워쌌고, 왕은 성을 떠나 웅진으로 향했다.',{view:'prologue'});
  Music.stop(0.6); await wait(500);
  await say('voice','normal','역사가 묻는다. 이 나라가 무너진 것은, [[누구의 책임]]인가.',{view:'prologue'});
  await titleCard('사건 1','백제는 왜 무너졌나');
  bgm('investigate');
  await say('judge','normal','이 법정은 [[시간 밖]]에 있소. 기록 속 사람은 누구든 부를 수 있지.',{view:'lobby'});
  await say('judge','normal','그리고 기록 속 이름을 지키고 싶은 마음은, 왕이나 백성이나 [[같소]]. 그래서 증인도 피고도 때로 거짓을 말하오.',{view:'lobby'});
  await say('judge','normal','하람 검사, 이번에 맡을 사건이오. 피고는 백제의 마지막 왕, [[의자왕]]. 오늘은 신참 법관이 그대 옆자리에서 함께하오.',{view:'lobby'});
  await say('judge','stern','재판은 내일 열리오. 그 전에 [[증거]]를 모아 오시오. 증거 없이는 아무것도 증명할 수 없소.',{view:'lobby'});
  await say('rival','confident','변호인 누리예요. 이번 재판, 쉽게 이기진 못할 거예요.',{view:'lobby'});
  await say('rival','smug','백제가 망한 이야기에는 [[부풀려진 소문]]이 많거든요.',{view:'lobby'});
  await say('player','confident','그러니까 더더욱 증거로 따져야지.',{view:'lobby'});
}

/* ---------- 법정 1일차 ---------- */
async function courtOpen(day){
  S.day=day; adaptDay(day); await bgCard(day); await titleCard(day+'일차','법정');
  bgm('open'); Music.sting('murmur'); await wait(900);
  if(day>1 && S.trust<bellsMax()){ S.trust=bellsMax(); S.slip=false; renderGauge(); Music.sting('heal'); }
  const D=CASE_DATA[S.case];
  await say('judge','normal',day===1?(D?D.openLine:S.case===2?'지금부터 [[역사 법정]]을 엽니다. 피고는 고조선의 왕위를 차지한 위만.':'지금부터 [[역사 법정]]을 엽니다. 피고는 백제의 마지막 왕, 의자왕.'):'어제에 이어 재판을 엽니다. 해치 방울이 모두 돌아왔습니다.');
  await gavel(); await gagCourt(day);
}
async function storyDay1(){
  await courtOpen(1);
  await say('judge','normal','검사는 혐의를 말하시오.');
  await say('player','confident','혐의는 두 가지입니다. 첫째, [[나라를 지키지 못한 책임]]. 둘째, [[향락에 빠져 나라를 망친 죄]]입니다.');
  await say('defendant','smug','흥. 터무니없는 소리.');
  await say('rival','confident','변호인 누리입니다. 피고에 대한 소문 가운데에는 부풀려진 것이 많습니다.');
  await say('judge','stern','엉뚱한 증거를 내면 [[해치 방울]]이 하나씩 깨집니다. 처음 재판이니 방울을 [[일곱 개]] 주겠소. 모두 깨지면 검사가 집니다.');
  await say('judge','normal','먼저 혐의 ①부터 다룹니다. 피고, 증언하시오.');

  // 증언 1 (거짓 위치는 판마다 바뀜)
  bgm('testimony');
  await titleCard('― 증언 ―','백제가 망한 것은 내 탓이 아니다');
  for(let i=0;i<S.lines.length;i++){ const L=S.lines[i]; await say('defendant',L.expr,L.cur.text,{testimony:true, tag:`증언 ${i+1}/${S.lines.length}`}); }
  await say('judge','normal','이 증언 가운데 [[사료와 맞지 않는 말]]이 있는지 따져 보시오.');
  bgm('cross'); await titleCard('― 추궁 ―','더 묻고, 틀린 말에는 증거를 내세요');
  const T1=quickT(); T1.onHit=async()=>{ await say('defendant','shock','으윽…!'); await say('rival','shock','그, 그럴 수가…!'); bgm('open'); await say('judge','shock','피고의 증언 하나가 사료와 맞지 않는군요.'); };
  if(!await runCross(T1)) return false;
  await say('defendant','angry','흥, 그 정도로 나를 몰아세울 수는 없소. 다시 말하겠소!');
  bgm('testimony'); await titleCard('― 수정 증언 ―','적은 육지로만 왔다');
  const T1b={key:'수정 증언',who:'defendant',lines:[
    {text:'당나라 군대는 육지로만 쳐들어왔소.',expr:'smug',lie:true,ev:'E8',press:[['player','normal','육지로만요?'],['defendant','smug','그렇소. 바다는 걱정할 필요가 없었지.']],
     hit:[['player','present','성문에 박힌 화살은 [[바다 쪽에서]] 날아왔습니다!'],['player','confident','적은 바다 쪽 [[기벌포]]로도 들어왔습니다. 바다를 걱정할 필요가 없었다는 말은 틀렸습니다!'],['defendant','sweat','으윽…!']]},
    {text:'그러니 탄현 하나만 지키면 되었소. 그 정도는 나도 했지.',expr:'smug',press:[['player','think','탄현은 지켰다…?'],['rival','normal','재판장님, 이 부분은 기록이 엇갈립니다.'],['judge','normal','이 문장은 다른 증거와 함께 따져 보시오.']]}
  ],onHit:async()=>{ bgm('open'); }};
  bgm('cross'); if(!await runCross(T1b)) return false;
  await say('rival','confident','하지만 재판장님, 피고는 [[신하들의 의견]]을 따랐을 뿐입니다.');
  await say('player','think','(신하들의 의견이라… 그때 다른 의견을 낸 신하는 없었을까?)');
  await say('player','confident','재판장님, 그 무렵 다른 의견을 낸 신하를 찾아 [[증인으로 세우겠습니다]].');
  await say('judge','normal','좋소. 오늘은 여기까지 하겠소. 검사는 내일까지 증인을 데려오시오.');
  await gavel(); await titleCard('― 1일차 끝 ―','다른 의견을 낸 신하를 찾아라');
  return true;
}

/* ---------- 법정 2일차 ---------- */
async function storyDay2c(){
  await courtOpen(2);
  await say('judge','normal','검사, 증인을 데려왔소?');
  // 증인 흥수
  await say('player','confident','네, 재판장님. 증인을 부르겠습니다. 귀양 가 있던 옛 신하, [[흥수]]입니다.');
  Music.sting('murmur'); await wait(1000); await gavel();
  await say('judge','normal','증인, 증언대로 나오시오.');
  bgm('testimony');
  await say('heungsu','base','흥수라 하오. 오래 귀양살이를 한 늙은이요.');
  await titleCard('― 증언 ―','귀양 간 늙은이가 무엇을 알겠소');
  const T2={key:'흥수',who:'heungsu',solve:'reveal',lines:[
    {text:'나는 오래 귀양살이를 했소. 서울 일은 잘 모르오.',expr:'base',press:[['player','normal','그럼 전쟁 소식도 못 들으셨나요?'],['heungsu','base','…소문은 들었지.']]},
    {text:'왕께서 사람을 보내 물으셨지만, 나는 대답만 했을 뿐이오.',expr:'hesitate',press:[['player','normal','무엇이라고 대답하셨죠?'],['heungsu','hesitate','그, 그건…'],['player','confident','재판장님, 증인에게 그 대답을 증언하게 해 주십시오!'],['judge','stern','증인, 대답한 내용을 증언에 더하시오.']],reveal:2},
    {text:'…[[백강과 탄현을 막으라]]고 했소. 그런데 대신들이 내 말을 ‘원망 품은 자의 말’이라며 막았지.',expr:'hesitate',hidden:true},
    {text:'왕께서는 결국 대신들 쪽을 따르셨소.',expr:'base',press:[['player','normal','결국 왕이 직접 고르신 거군요.'],['heungsu','hesitate','…그렇다고 해야겠지.']]}
  ],onReveal:async()=>{
    S.found.add('E9'); showEvidence('E9'); Music.sting('get');
    await say('guide','normal','증거 수첩에 [[흥수의 건의]]를 넣었다.');
    hideEvidence();
    await say('defendant','sweat','흐, 흥수 그 늙은이가…!');
    await say('judge','normal','증인 흥수, 수고했소.');
  }};
  await say('judge','normal','증인의 말을 [[더 물어]] 보시오. 이 증언에는 아직 나오지 않은 말이 있는 것 같소.');
  bgm('cross');
  if(!await runCross(T2)) return false;

  // 증언 2: 피고
  bgm('testimony');
  await say('judge','normal','피고, 다시 증언하시오.');
  await titleCard('― 증언 ―','경고는 늦게 왔다');
  const T3={key:'증언2',who:'defendant',lines:[
    {text:'성충의 말은 너무 일찍 들었고, 흥수의 말은 너무 늦게 들었소.',expr:'smug',press:[['player','normal','너무 일찍이라니요?'],['defendant','smug','4년이나 전 일이었소. 그때는 적이 오지도 않았지.']]},
    {text:'적이 이미 문 앞에 와 있었으니 어쩔 수 없었소.',expr:'sweat',press:[['player','normal','정말 손쓸 틈이 없었나요?'],['defendant','sweat','그, 그렇소…'],['rival','confident','대군이 몰려온 것은 사실입니다.']]},
    {text:'성충과 흥수가 말한 길목은 서로 달랐소. 누구 말을 따라야 할지 몰랐지.',expr:'sweat',lie:true,ev:'E3',press:[['player','normal','서로 달랐다고요?'],['defendant','sweat','그, 그렇소. 하나는 이쪽, 하나는 저쪽이었지.']],
      hit:[['player','present','성충의 마지막 글입니다. “[[탄현]]과 [[기벌포]]를 막으소서.”'],['player','confident','흥수의 건의도 [[백강(기벌포)과 탄현]]이었습니다. 두 신하는 같은 길목을 짚었습니다!'],['defendant','sweat','그, 그건…!']]},
    {text:'게다가 대신들 대부분이 반대했소. [[왕 혼자 정할 수 있는 일]]이 아니었소.',expr:'smug',lie:true,ev:'E9',
      press:[['player','normal','왕이 정한 일이 아니라는 건가요?'],['defendant','smug','나라의 일은 신하들과 함께 정하는 것이오.']],
      hit:[['player','present','흥수의 건의입니다! 피고는 직접 사람을 보내 [[흥수에게 물었습니다]].'],['player','confident','묻고, 듣고, 고른 것은 피고입니다. 대신들 뒤에 숨을 수 없습니다!']]},
    {text:'나는 끝까지 사비성을 지켰소.',expr:'smug',press:[['player','think','끝까지요…?'],['judge','stern','검사, 이것은 기록으로 [[확정된 사실]]이오. 사비성이 에워싸이자 피고는 [[웅진성으로 피했다가 항복]]했소.'],['defendant','sweat','그, 그건…'],['judge','normal','확정된 사실은 피고도, 변호인도 부정할 수 없소.']]}
  ],onHit:async()=>{
    await say('rival','shock','그, 그럴 수가…!');
    Music.stop(0.05); Music.sting('breakdown'); flash(); shake('quake');
    await say('defendant','breakdown','으아아아…! 내, 내 증언이 무너진다…!',{action:true});
    Music.sting('murmur'); await wait(1300); await gavel();
    bgm('open');
    await say('judge','shock','허어…! 혐의 ①에 대한 피고의 주장은 무너졌습니다.');
  }};
  await say('judge','normal','따져 보시오. 이번에는 쉽지 않을 것이오.');
  bgm('cross');
  if(!await runCross(T3)) return false;

  // 1일차 끝 반전
  await say('judge','normal','이제 혐의 ②, [[향락에 빠져 나라를 망친 죄]]입니다. 검사, 근거를 대시오.');
  await say('player','confident','피고는 [[3천 궁녀]]를 거느리고 놀기만 했습니다. 낙화암 이야기, 그리고 강가에서 들은 이야기가 그 증거입니다!');
  Music.stop(0.02); await wait(200);
  await shout('objection');
  bgm('crisis');
  await say('rival','confident','검사가 말한 [[낙화암 이야기]]를 보시죠. 옛 기록 어디에도 ‘3천 명’이라는 숫자는 없습니다!',{action:true});
  showEvidence('E10'); S.found.add('E10'); Music.sting('get');
  await say('rival','smug','오히려 이런 기록이 있습니다. 「삼국사기」 656년, ‘왕이 궁녀들과 술과 놀이에 빠졌다.’');
  hideEvidence();
  await say('guide','normal','증거 수첩에 [[656년의 향락 기록]]이 들어왔다.');
  await say('rival','smug','그런데 검사는 이 기록이 아니라, [[근거 없는 숫자]]로 혐의를 세웠어요. 강가의 그 이야기도 [[옆집 사람에게 들은 말]]이잖아요? 직접 본 사람은 아무도 없어요.');
  await say('player','sweat','윽…!');
  await say('judge','stern','검사, [[증거 없는 혐의는 세울 수 없습니다]].');
  if(S.trust>1) await loseTrust();
  await say('judge','normal','혐의 ②는 내일 다시 다룹니다. 검사는 근거를 다시 세우시오.');
  await gavel();
  await titleCard('― 2일차 끝 ―','혐의 ②의 근거를 다시 세워라');
  return true;
}
function runCross(T){ return Promise.race([crossExam(T).then(()=>true), new Promise(r=>{ S.onLose=()=>r(false); })]); }

function pauseSheet(){
  return new Promise(res=>{
    openSheet(`<h2>1일차가 끝났습니다</h2>
      <p class="lead">여기까지 자동으로 저장했어요. 수업을 여기서 끊어도, 다음 시간에 첫 화면의 <b>이어 하기</b>로 조사 2부터 시작할 수 있어요.</p>
      <p class="lead">생각해 볼 것: 누리는 왜 ‘3천 궁녀’를 공격했을까요? 검사가 혐의를 세울 때 무엇이 필요할까요?</p>
      <div class="sheet-foot"><button class="abtn" id="pStop" type="button">여기서 멈추기</button><button class="abtn primary" id="pGo" type="button">조사 2 시작</button></div>`,false);
    $('#pGo').addEventListener('click',()=>{ closeSheet(); res(true); });
    $('#pStop').addEventListener('click',()=>{ closeSheet(); backToRoles(); res(false); });
  });
}

/* ---------- 조사 2 전 로비 ---------- */
async function storyLobby2(){
  bgm('investigate');
  await say('rival','normal','어제는 미안했어요. 하지만 법정은 법정이니까요.',{view:'lobby'});
  await say('rival','confident','656년 기록이 있다고 해서, 그게 다 그대로 사실일까요? [[누가, 언제]] 쓴 기록인지도 봐야죠.',{view:'lobby'});
  await say('player','think','(누가 언제 썼는지라… 서고에 잠긴 상자가 있었지. 궁터의 우물도 어제는 열리지 않았고.)',{view:'lobby'});
}

/* ---------- 법정 2일차 ---------- */
async function storyDay3(){
  await courtOpen(3);
  await say('judge','normal','혐의 ②, 향락의 죄를 다룹니다.');
  await say('rival','confident','변호인은 증인을 신청합니다. 「삼국사기」를 엮을 때 일을 도운 [[기록관]]입니다.');
  bgm('testimony');
  await say('scribe','smug','고려 조정의 기록관이오. 우리가 엮은 기록에는 한 치의 틀림도 없소.');
  await titleCard('― 증언 ―','기록은 모두 정확하다');
  const T4={key:'기록관',who:'scribe',lines:[
    {text:'우리는 옛 기록을 하나도 빼지 않고 옮겼소.',expr:'smug',press:[['player','normal','하나도요?'],['scribe','smug','물론이오. 붓 끝이 떨린 적도 없소.'],['scribe','sweat','기록은… 쓰인 그대로요. [[쓰인 그대로]].'],['player','think','(손목에 먹물이 묻어 있네. 꽃 모양 같기도 하고…)']]},
    {text:'백제의 기록도 신라의 기록만큼 [[많이 남아 있었소]].',expr:'smug',lie:true,ev:'E11',
      press:[['player','normal','두 나라 기록이 비슷하게 남아 있었다고요?'],['scribe','smug','그렇소. 공평하게 옮겼지.']],
      hit:[['player','present','「삼국사기」를 엮은 사정입니다. 그때 남아 있던 옛 기록은 [[신라 쪽 자료가 훨씬 많았습니다]].'],['player','confident','백제의 일은, 백제를 무너뜨린 쪽의 눈으로 남은 부분이 많습니다!']]},
    {text:'왕이 술과 놀이에 빠졌다는 것은, 기록에 있는 그대로요.',expr:'smug',press:[['player','normal','기록에 있는 그대로라면… 그 기록 끝에 [[덧붙인 말]]은 없었나요?'],['scribe','sweat','…덧붙인 말?'],['judge','stern','증인, 아는 것을 모두 증언하시오.']],reveal:3},
    {text:'물론 편찬하신 분이 끝에 [[‘평’]]을 덧붙이셨지. 왕을 꾸짖는 말을.',expr:'sweat',hidden:true,press:[['player','think','(기록 안에 쓴 사람의 평가가 섞여 있다는 거구나.)'],['scribe','sweat','그, 그건 흔한 일이오!']]},
    {text:'‘3천 궁녀’ 이야기도 옛 기록에 그대로 실려 있소.',expr:'smug',lie:true,ev:'E12',press:[['player','normal','그대로 실려 있다고요?'],['scribe','smug','그렇소. 다들 아는 이야기 아니오?']],
     hit:[['player','present','‘3천 궁녀’라는 말은 [[훨씬 뒤의 문학]]에서 퍼진 표현입니다!'],['player','confident','옛 기록에 그대로 실렸다는 말은 사실이 아닙니다!'],['scribe','sweat','흐윽…!']]}
  ],onHit:async()=>{
    await say('rival','shock','…!');
    Music.stop(0.05); Music.sting('breakdown'); flash(); shake('quake');
    await say('scribe','breakdown','으아아… 내, 내 붓이…!',{action:true});
    Music.sting('murmur'); await wait(1200); await gavel();
    bgm('open');
    await say('judge','normal','기록에도 [[쓴 사람의 관점]]이 담길 수 있다는 것이 드러났습니다.');
  }};
  await say('judge','normal','검사, 증인의 말을 따져 보시오.');
  bgm('cross');
  if(!await runCross(T4)) return false;

  // 클라이맥스: 사실과 평가
  bgm('crisis');
  await say('rival','confident','재판장님, 검사는 어제 [[‘옥에 갇힌 성충’]]으로 피고를 몰아세웠습니다.');
  await say('rival','smug','그런데 그 기록과 [[‘656년의 향락 기록’은 같은 대목]]입니다. 성충 이야기는 믿고, 향락 이야기는 못 믿겠다는 건가요?');
  await say('player','sweat','(같은 대목… 어떻게 답해야 하지?)');
  for(;;){
    const pick=await choiceSheet('누리의 질문에 어떻게 답할까요?',[
      {t:'같은 대목이니, 둘 다 똑같이 믿어야 한다.',ok:false,fb:'그렇다면 기록에 덧붙은 평가까지 모두 사실로 받아들이게 돼요.'},
      {t:'같은 대목이니, 둘 다 믿을 수 없다.',ok:false,fb:'그렇다면 성충이 옥에 갇힌 일처럼 여러 기록이 함께 전하는 사실까지 버리게 돼요.'},
      {t:'성충이 옥에 갇힌 것은 일어난 일이고, ‘놀이에 빠졌다’는 쓴 사람의 평가가 섞인 말이다. 둘의 무게는 다르다.',ok:true}
    ]);
    if(pick.ok){ await gainTrust(); break; }
    await say('judge','stern','검사, 그 답으로는 변호인의 질문에 답할 수 없습니다. '+pick.fb);
    await loseTrust();
    if(S.trust<=0){ await loseTrial(); return false; }
  }
  await say('player','confident','[[일어난 일]]과 [[쓴 사람의 평가]]는 무게가 다릅니다. 그 근거를 증거로 보이겠습니다.');
  for(;;){
    S.expect=['E11']; const id=await pickEvidence('사실과 평가를 나누는 근거가 될 증거를 고르세요.'); S.expect=null;
    if(id==='E11'){ await gainTrust(); break; }
    await shout('evidence'); showEvidence(id);
    await say('player','present',`‘${EV_BY_ID[id].title}’입니다!`); hideEvidence();
    await say('judge','stern','그 증거로는 기록에 평가가 섞였다는 것을 보일 수 없습니다.');
    await loseTrust();
    if(S.trust<=0){ await loseTrial(); return false; }
  }
  Music.stop(0.02); Music.sting('realize'); await wait(420);
  await slam(); await shout('objection'); bgm('turnabout'); showEvidence('E11');
  await say('player','present','「삼국사기」는 고려 때 엮었고, 대목마다 [[편찬자의 평]]이 붙었습니다.',{action:true});
  await say('player','confident','성충이 갇힌 일과, 그 일을 두고 ‘놀이에 빠졌다’고 평한 말은 무게가 다릅니다!');
  hideEvidence();
  await say('rival','shock','…그렇게 나오시겠다면.');
  await say('rival','normal','좋아요. 그렇다면 [[혐의 ②는 ‘향락’이 나라를 망하게 했다는 것까지]] 증명되어야겠죠.');
  await say('judge','shock','사료 속에서도 [[일어난 일과 평가]]를 나누어 보아야 한다… 재판부도 그렇게 보겠습니다.');

  await say('rival','normal','…하지만 혐의 ①도 아직 끝나지 않았어요. 나라가 무너진 것이 [[피고 혼자의 책임]]인지, 내일 따지겠어요.');
  await say('judge','normal','내일은 피해자의 이야기와 피고의 최후 증언을 듣고 판결하겠소.');
  await gavel(); await titleCard('― 3일차 끝 ―','책임의 무게를 달아라');
  return true;
}

/* ---------- 법정 4일차: 피해자 진술, 최후 증언, 판결 ---------- */
async function storyDay4(){
  await courtOpen(4);
  // 피해자 진술
  Music.stop(0.8); await wait(600);
  await say('judge','normal','판결에 앞서, 피해를 입은 사람의 이야기를 듣겠습니다.');
  bgm('testimony');
  await say('citizen','base','사비성에서 살던 사람입니다.');
  await say('citizen','base','전쟁이 끝나고, 많은 사람이 [[당나라로 끌려갔습니다]].');
  await say('citizen','plea','왕이 무엇을 했든, 우리에게 남은 건 무너진 집뿐입니다.');
  await say('citizen','plea','왕이 그때 신하들의 말을 들었다면… 저는 그것만 묻고 싶습니다.');
  await say('judge','normal','증언, 잘 들었습니다. 이 말은 판결에 반영하겠습니다.');

  await say('judge','normal','피고, 최후 증언을 하시오.');
  bgm('testimony'); await titleCard('― 최후 증언 ―','나는 왕으로서 할 일을 다 했다');
  const T5={key:'최후 증언',who:'defendant',lines:[
    {text:'나는 왕으로서 할 일을 다 했소.',expr:'smug',press:[['player','normal','할 일을 다 했다면, 왜 경고를 듣지 않았죠?'],['defendant','angry','결과만 보고 함부로 말하지 마시오!']]},
    {text:'적이 성을 에워쌌을 때도 나는 끝까지 백성 곁에 있었소.',expr:'smug',lie:true,ev:'E13',press:[['player','think','끝까지 백성 곁에…?'],['defendant','smug','그렇소.']],
     hit:[['player','present','피고는 사비성이 에워싸이자 태자를 데리고 [[웅진성으로 떠났습니다]]!'],['player','confident','성에 남은 백성의 증언입니다. ‘끝까지 백성 곁에 있었다’는 말은 사실이 아닙니다!'],['defendant','breakdown','으… 으으…!']]},
    {text:'백성이 끌려간 것은 당나라의 잘못이오.',expr:'angry',press:[['player','think','당나라의 잘못이 큰 건 맞아. 하지만…'],['judge','normal','그 말에는 일리가 있소. 다만 그것으로 피고의 선택에 대한 책임이 사라지지는 않소.']]},
    {text:'그때 나라를 위해 끝까지 싸운 자는 아무도 없었소. 누가 왕이었어도 마찬가지였을 것이오.',expr:'angry',lie:true,ev:'E14',press:[['player','think','아무도…?'],['defendant','angry','그렇소!']],
     hit:[['player','present','계백 장군과 [[5천 결사대]]는 황산벌에서 끝까지 싸웠습니다!'],['player','confident','같은 때, 다른 선택을 한 사람들이 있었습니다. 누가 했어도 마찬가지였다는 말은 틀렸습니다!'],['defendant','breakdown','…!']]}
  ],onHit:async()=>{ Music.sting('murmur'); await wait(1000); await gavel(); bgm('open'); }};
  bgm('cross'); if(!await runCross(T5)) return false;
  await say('judge','normal','이제 판결합니다. 그 전에 신참 법관에게 줄 것이 있소.');
  Music.sting('realize');
  await say('judge','normal','모든 잘못이 [[죄]]는 아니오. 그러나 죄가 아니라고 [[책임]]까지 사라지는 것도 아니오.');
  await infoCard('원칙 카드 「죄와 책임은 다르다」',`${principleHTML()}<p>판결은 네 갈래예요. <b>유죄</b>(사람에게 직접 해를 끼친 행위) · <b>책임 있음</b>(나라를 위한 판단이 낳은 큰 고통, 벌하지 않고 역사에 기록) · <b>무죄</b> · <b>증명 부족·판단 보류</b>.</p><p>이 카드는 앞으로 모든 판결 화면에 늘 나와요.</p>`);
  store.set('yj-principle','1'); track('principle',{});
  await say('judge','normal','검사, 혐의마다 [[판결의 종류]]를 먼저 고르고, 그 [[이유]]와 [[근거가 되는 증거]]를 대시오.');
  bgm('investigate');
  if(!await verdictKind('혐의 ① 나라를 지키지 못한 책임','resp',{q:'나라를 지키는 판단을 잘못해 백성이 큰 고통을 겪었어요. 어떻게 판결할까요?'})) return false;
  if(!await reasonEv('혐의 ①을 ‘책임 있음’으로 보는 가장 알맞은 이유는?',[
    {t:'피고는 같은 길목을 막으라는 신하들의 경고를 여러 번 듣고도 따르지 않았다.',ok:true,ev:['E3','E9','E4']},
    {t:'피고는 나라를 잃은 왕이므로 무조건 유죄다.',ok:false,fb:'결과만으로 죄를 물을 수는 없소. 피고가 무엇을 선택했는지를 따져야 하오.'},
    {t:'당나라와 신라의 군대가 너무 많았다.',ok:false,fb:'그것은 피고에게 유리한 참작 사유이지, 책임의 이유가 아니오.'}])) return false;
  if(!await verdictKind('혐의 ② 향락에 빠져 나라를 망친 죄','unproven',{q:'‘3천 궁녀’는 근거가 없고, 656년 기록에는 쓴 사람의 평가가 섞여 있어요. 어떻게 판결할까요?'})) return false;
  if(!await reasonEv('혐의 ②를 증명 부족으로 보는 가장 알맞은 이유는?',[
    {t:'‘3천 궁녀’는 옛 기록에 없고, 656년 기록에는 고려 때 쓴 사람의 평가가 섞여 있다.',ok:true,ev:['E12','E11']},
    {t:'의자왕은 훌륭한 왕이었으므로 향락에 빠졌을 리 없다.',ok:false,fb:'그것은 증거가 아니라 믿음이오.'},
    {t:'너무 오래된 일이라 아무것도 알 수 없다.',ok:false,fb:'기록이 남은 부분도 있소. 무엇이 증명되고 무엇이 안 되는지 가려야 하오.'}])) return false;
  bgm('open');
  await say('judge','normal','피고, 마지막으로 할 말이 있으면 하시오.');
  await say('defendant','sweat','나는 백제를 지키려 했소.');
  await say('defendant','sweat','그러나… 내 귀가 닫혀 있었는지도 모르오.');
  await say('judge','normal','이제 판결만 남았습니다. 검사, 피고의 첫 증언부터 가려 주시오.');
  bgm('investigate');
  openClassify();
  return true;
}

/* ---------- 고르기 창 ---------- */
function choiceSheet(q,opts){
  return new Promise(res=>{
    const o=shuffle(opts); window.__yjOpts=o;
    openSheet(`<h2>답하기</h2><p class="lead">${esc(q)}</p><div class="choices">${o.map((x,i)=>`<button class="choice" type="button" data-i="${i}"><span class="ck">${i+1}</span>${esc(x.t)}</button>`).join('')}</div>`,false);
    const fin=x=>{ track('choice',{q:q,a:x.t,ok:x.ok===undefined?'':!!x.ok,tag:x.tag||''}); res(x); };
    sheetCard.querySelectorAll('.choice').forEach(b=>b.addEventListener('click',()=>{ Music.sting('click'); closeSheet(); fin(o[+b.dataset.i]); }));
    recNav=k=>{ const n=parseInt(k,10); if(n>=1&&n<=o.length){ closeSheet(); fin(o[n-1]); } };
  });
}
function pickEvidence(lead){
  return new Promise(res=>{
    const open=()=>{
      S.pendingPick=null; $('#pickHint').hidden=true; S.pickOpen=open;
      openRecord(true);
      const h=sheetCard.querySelector('.lead'); if(h) h.innerHTML=esc(lead);
      presentHandler=id=>{ S.pendingPick=null; S.pickOpen=null; $('#pickHint').hidden=true; onSheetClose=null; closeSheet(); res(id); };
      onSheetClose=()=>{ S.pendingPick=open; $('#pickHint').hidden=false; };   // 닫으면 대화를 다시 볼 수 있고, 수첩 단추·E로 다시 연다
    };
    open();
  });
}

/* ---------- 판결 (혐의별) ---------- */
function openVerdictStory(){
  const A=shuffle(VERDICT_A), B=shuffle(VERDICT_B);
  const C=shuffle([
    {t:'증명 부족: ‘3천 궁녀’는 근거가 없고, 656년 기록 하나로는 향락이 나라를 망하게 했다는 것까지 증명되지 않는다.',ok:true,fb:'맞아요. 기록이 있다는 것과, 그 기록으로 혐의가 증명된다는 것은 달라요.'},
    {t:'유죄: 「삼국사기」에 술과 놀이에 빠졌다고 적혀 있다.',ok:false,fb:'그 대목에는 편찬자의 평가가 섞여 있고, 나라를 망하게 했다는 인과까지 보여 주지는 못해요.'},
    {t:'유죄: 낙화암 이야기가 지금까지 전해진다.',ok:false,fb:'낙화암 이야기에는 ‘3천 명’이 없고, 향락을 증명하는 기록도 아니에요.'}
  ]);
  let a=null,b=null,c=null;
  openSheet(`<h2>판결문 쓰기</h2>
    <p class="lead">혐의마다 따로 판결합니다. 판결은 처벌이 아니라, 증거로 책임을 따지는 일입니다.</p>
    <div class="vpart"><h3>혐의 ① 나라를 지키지 못한 책임 — 책임 있음</h3>
      <p class="lead">재판부는 ㉠을 피고가 어쩔 수 없었던 시대 상황으로 인정합니다. 그러나 ㉡은 피고 자신의 선택이었습니다.</p>
      <p><b>㉠ 참작할 시대 상황</b></p><div class="opts" id="oa">${A.map((x,i)=>`<button class="opt" type="button" data-i="${i}">${esc(x.t)}</button>`).join('')}</div>
      <p><b>㉡ 피고의 선택</b></p><div class="opts" id="ob">${B.map((x,i)=>`<button class="opt" type="button" data-i="${i}">${esc(x.t)}</button>`).join('')}</div></div>
    <div class="vpart"><h3>혐의 ② 향락에 빠져 나라를 망친 죄</h3>
      <div class="opts" id="oc">${C.map((x,i)=>`<button class="opt" type="button" data-i="${i}">${esc(x.t)}</button>`).join('')}</div></div>
    <div class="sheet-foot"><button class="abtn primary" id="vGo" type="button" disabled>판결 내리기</button></div>`,false);
  const upd=()=>{ $('#vGo').disabled=!(a&&b&&c); };
  const wire=(sel,arr,set)=>sheetCard.querySelectorAll(sel+' .opt').forEach(btn=>btn.addEventListener('click',()=>{ sheetCard.querySelectorAll(sel+' .opt').forEach(x=>x.classList.remove('sel')); btn.classList.add('sel'); Music.sting('click'); set(arr[+btn.dataset.i]); upd(); }));
  wire('#oa',A,v=>a=v); wire('#ob',B,v=>b=v); wire('#oc',C,v=>c=v);
  $('#vGo').addEventListener('click',()=>{ S.A=a; S.B=b; S.C=c; deliverVerdictStory(); });
}
async function deliverVerdictStory(){
  closeSheet(); bgm('open');
  await titleCard('― 판결 ―','혐의마다 따로 판결합니다');
  await say('judge','normal',`혐의 ①. 재판부는 ${S.A.t}을, 피고가 어쩔 수 없었던 시대 상황으로 인정합니다.`);
  await say('judge','stern',`그러나 ${S.B.t}은 피고 자신의 선택이었습니다. 혐의 ①은 [[책임 있음]]입니다. 벌하지는 않지만, 역사에 [[영원히 기록]]합니다.`);
  await say('judge','normal','사비성 백성의 진술처럼, 그 선택의 무게는 백성이 짊어졌습니다.');
  await say('judge','normal','혐의 ②. ‘3천 궁녀’는 근거가 없고, 656년 기록 하나로는 향락이 나라를 망하게 했다는 것까지 증명되지 않습니다. [[증명 부족]]입니다.');
  await say('judge','stern','다만 판결 이유에 남깁니다. 656년의 향락 기록은 있으며, 그것이 고려 때 쓴 기록이라는 점을 함께 따졌습니다.');
  bgm('verdict'); await gavel();
  await say('defendant','sweat','…….');
  if(!S.C.ok) await say('judge','normal','(검사의 판결문 초안은 혐의 ②를 다르게 보았지만, 재판부는 증거에 따라 판결했습니다.)');
  await storyEnding();
}
async function storyEnding(){
  bgm('verdict');
  await say('rival','normal','혐의 ①은 졌지만, 혐의 ②를 지킨 건 저예요.',{view:'courtyard'});
  await say('player','confident','덕분에 증거로 따진다는 게 뭔지 알았어.',{view:'courtyard'});
  await say('judge','normal','역사 법정에서 이기는 쪽은 언제나 [[증거]]요.',{view:'courtyard'});
  await scribeArchive();
  await caseFinale();
  track('case_end',{grade:tierOf(score().total).name,trust:S.trust,wrongs:S.log.filter(x=>!x.ok).length});
  S.done=true; S.inTrial=false; clearSave(); openResult();
}
/* 재판이 끝난 빈 법정: 기록관이 붓을 줍다 소매에 매화 모양 먹이 번진다. 해치가 서고를 맡긴다 */
async function scribeArchive(){
  Music.stop(1); await wait(600);
  await say('guide','normal','(모두가 돌아간 빈 법정. 기록관이 바닥에 떨어진 붓을 천천히 줍는다.)',{view:'witness'});
  await say('scribe2','sweat','…내 붓이.');
  Music.sting('drip'); flash();
  await say('guide','normal','(붓끝에 남은 먹이 소매에 번졌다. 작은 [[매화 모양]]이다.)');
  await say('judge','normal','그대는 기록을 아끼는 사람이오. 오늘은 그대를 몰아세웠지만, 그 마음까지 틀린 것은 아니오.');
  await say('judge','normal','이제부터 이 법정의 [[서고]]를 지키시오. 모든 사건의 증거 보관함이 그곳에 있소.');
  await say('scribe2','base','…분부대로 하겠소.');
  await say('scribe2','base','(…기록이 틀릴 수 있다면… 기록은 [[무엇이든 될 수 있는]] 것 아니오?)',{tag:'혼잣말'});
  Music.sting('thud'); await wait(500);
}
