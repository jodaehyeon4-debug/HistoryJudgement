/* ===== 사건 7 「남한산성의 겨울」: 검사 하람 · 새 장치 ‘자기 혐의 내려놓기’ =====
   v3: 혐의 ① 바뀐 정세를 보지 않은 외교로 두 번의 전쟁을 부른 죄 → 책임 있음 (사건 6과 같은 기준)
   혐의 ② 전쟁 대비를 소홀히 해 백성이 큰 피해를 입은 죄 → 책임 있음(무거움, 경고를 알고도 대비하지 않음)
   혐의 ③ 소현세자의 가족에게 지나치게 가혹한 벌을 내린 죄 → 유죄 (이 사건의 진짜 쟁점)
   혐의 ④ 소현세자를 죽게 한 죄 → 증명 부족 (‘안 했다’가 아니라 ‘증명되지 않았다’)
   프롤로그 그림자는 일부러 누구인지, 병인지 독인지 알 수 없게 한다. 어린 손자들의 일은 장면 없이 사실만. */
addCast('injo',{name:'인조',label:'피고 인조',col:'#a8322a',spec:{skin:'#eec8a2',robe:'#b3352b',robe2:'#86241d',collar:'round',hat:'ikseon',hair:'#1c1a20',beard:'king',emblem:true,iris:'#3a2a20'}});
addCast('myeonggil',{name:'최명길',label:'증인 최명길',col:'#2f5d8a',spec:{skin:'#ecc8a4',robe:'#2f5d8a',robe2:'#1f3f60',collar:'round',hat:'gat',hair:'#1c1a20',beard:'long',beardColor:'#2a2220',iris:'#3a2a20'}});
addCast('sangheon',{name:'김상헌',label:'증인 김상헌',col:'#5a2a3a',spec:{skin:'#ecc8a4',robe:'#6a2a3a',robe2:'#4a1c28',collar:'round',hat:'gat',hair:'#d8d8d8',beard:'long',beardColor:'#e6e0d4',iris:'#3a2a20'}});
addCast('danbi',{name:'궁녀 단비',label:'증인 궁녀 단비',col:'#7a4a6a',spec:{skin:'#f0caa4',robe:'#9a6a8a',robe2:'#6a3a5a',collar:'cross',hat:'bun',hair:'#1c1a20',beard:'none',iris:'#3a2a20'}});
addCast('captive',{name:'청으로 끌려간 백성',label:'피해자 백성',col:'#6a5038',spec:{skin:'#d9a77c',robe:'#7a6248',robe2:'#5a4634',collar:'cross',hat:'short',hair:'#2a2220',beard:'thin',iris:'#3a2a20'}});
addCast('kangbin',{name:'세자빈 강씨',label:'피해자 세자빈 강씨',col:'#3a5a6a',spec:{skin:'#f0caa4',robe:'#3a6a7a',robe2:'#2a4a5a',collar:'cross',hat:'bun',hair:'#1c1a20',beard:'none',iris:'#3a2a20'}});
addCast('guard7',{name:'성벽의 늙은 병사',label:'늙은 병사',col:'#3a3a3a',spec:{skin:'#d9a77c',robe:'#4a4a3a',robe2:'#2e2e24',collar:'cross',hat:'short',hair:'#8a8a8a',beard:'thin',iris:'#3a2a20'}});
addCast('servant7',{name:'약방 하인',label:'약방 하인',col:'#5a5a3a',spec:{skin:'#e2b48a',robe:'#6a6a48',robe2:'#4a4a30',collar:'cross',hat:'short',hair:'#1c1a20',beard:'none',iris:'#3a2a20'}});
addCast('daechung',{name:'통역관 대충',label:'청나라 통역관 대충',col:'#5a6a4a',spec:{skin:'#e2b48a',robe:'#5a6a4a',robe2:'#3e4a34',collar:'cross',hat:'short',hair:'#1c1a20',beard:'none',iris:'#3a2a20'}});
addCast('qingenvoy',{name:'청나라 사신',label:'청나라 사신',col:'#3a4a6a',spec:{skin:'#e8c4a0',robe:'#3a4a6a',robe2:'#2a3450',collar:'round',hat:'short',hair:'#1c1a20',beard:'thin',iris:'#3a2a20'}});
addCast('maid7',{name:'강빈의 늙은 몸종',label:'몸종',col:'#6a4a4a',spec:{skin:'#ecc8a4',robe:'#8a6a6a',robe2:'#5a4040',collar:'cross',hat:'bun',hair:'#a8a8a8',beard:'none',iris:'#3a2a20'}});

const EVIDENCE7=[
  {id:'I1',reuse:true,type:'사료',icon:'timeline',title:'성 안의 47일',body:'1636년 12월 청이 쳐들어오자 인조는 남한산성으로 피했다. 성 안에서 47일을 버텼지만 먹을 것이 떨어져 갔고, 성 밖 마을들은 큰 피해를 입었다.',src:'「인조실록」 · 「남한일기」를 바탕으로 정리',trust:3,note:'전쟁 대비가 어땠는지 보여 주는 기록이에요.'},
  {id:'I2',reuse:true,type:'사료',icon:'scroll',title:'두 장의 상소',body:'최명길은 “살아야 다음이 있다”며 청과 화해하자고 했고, 김상헌은 “의리를 버리면 나라가 아니다”라며 끝까지 싸우자고 했다. 전쟁 전부터 청의 위협을 알리는 말들이 있었다.',src:'「인조실록」을 바탕으로 정리',trust:3,note:'청이 올 것을 정말 아무도 몰랐을까요?'},
  {id:'I3',reuse:true,type:'유적',icon:'censer',title:'삼전도의 비',body:'1637년 1월 인조는 삼전도에서 청 황제에게 항복했다. 그 뒤 청의 요구로 그 자리에 비석을 세웠다.',src:'서울 송파구 삼전도비',trust:3,note:'항복의 기록이에요.'},
  {id:'I4',type:'사료',icon:'map',title:'청에서 돌아온 세자',body:'소현세자는 8년 동안 청에 볼모로 있다가 1645년 2월 돌아왔다. 청에서 서양 학문과 새 문물을 보고 왔다.',src:'「인조실록」',trust:3,note:'세자는 어떤 사람이었을까요?'},
  {id:'I5',type:'사료',icon:'scroll',title:'두 달 만의 죽음',body:'1645년 4월, 소현세자는 돌아온 지 두 달 만에 병으로 세상을 떠났다.',src:'「인조실록」',trust:3,note:'무엇이 확인되고 무엇이 안 되는지 보세요.'},
  {id:'I6',reuse:true,type:'사료',icon:'scroll',title:'전해 들은 말',body:'실록에는 세자의 몸에 이상한 빛이 돌았다는 말이 적혀 있다. 그러나 그것은 염하는 자리에 있던 종친 부인이 한 말을 전해 들은 것이고, “바깥사람은 자세히 알 수 없었다”고 덧붙여 있다.',src:'「인조실록」 1645년 6월 기사를 바탕으로 정리 · 2일차 법정',trust:2,note:'직접 본 사람의 기록일까요?'},
  {id:'I7',reuse:true,type:'사료',icon:'prison',title:'세자빈의 사약',body:'1646년 세자빈 강씨는 왕의 음식에 독을 넣었다는 의심을 받고 사약을 받았다. 증거는 분명하지 않았다.',src:'「인조실록」',trust:3,note:'세자가 죽은 뒤 피고가 한 일이에요.'},
  {id:'I8',reuse:true,type:'증언',icon:'scroll',title:'반대한 대신들',body:'대신들이 여러 차례 엎드려 세자빈을 벌하지 말라고 말렸지만, 왕은 듣지 않았다.',src:'강빈의 몸종 이야기 · 「인조실록」 바탕',trust:3,note:'‘모두가 원했다’는 말과 맞대 보세요.'},
  {id:'I9',reuse:true,type:'사료',icon:'map',title:'제주로 간 세 손자',body:'1647년 소현세자의 어린 세 아들을 제주도로 귀양 보냈다. 그중 둘이 이듬해 그곳에서 세상을 떠났다.',src:'「인조실록」',trust:3,note:'어린 손자들에게 내린 벌이에요.'},
  {id:'I10',type:'사료',icon:'scroll',trap:'수상한 것과 증명된 것은 다르오.',title:'의원은 벌받지 않았다',body:'대신들이 세자를 치료한 의원을 벌하자고 했지만, 왕이 막았다.',src:'왕실 의원의 방 · 「인조실록」',trust:3,note:'수상하게 보일 수 있어요. 그런데 무엇을 증명할까요?'},
  {id:'IF',type:'문서',icon:'scroll',fake:true,y:1645,title:'단비의 필사본',body:'“1645년 4월, 세자의 몸이 검게 변한 것을 보았다. 이 일은 아우이신 [[효종]]께서도 아신다.” 궁녀 단비가 들고 온, 실록을 베껴 썼다는 종이.',src:'궁녀 단비가 법정에 들고 온 종이',trust:1,note:'원본과 같은 말일까요? 사람을 부르는 이름도 보세요.',
   zoom:{say:['필사본을 크게 확대해 보았다.','‘보았다’라는 글자 아래에 칼로 긁어낸 자국이 있다. 원래는 [[‘들었다’]]였다.','그리고 귀퉁이에 [[매화 모양 먹 얼룩]]. 또… 1645년에 쓴 종이가 봉림대군을 [[‘효종’]]이라 부른다. 왕의 이런 이름(묘호)은 [[세상을 떠난 뒤에]] 붙는데…'],plum:true,note:'‘들었다’를 긁어내고 ‘보았다’로 고침. 매화 얼룩. 1645년 종이에 죽은 뒤 붙는 이름 ‘효종’.'}},
  {id:'ID1',type:'물건',icon:'censer',title:'청의 천문 서적',body:'세자가 청에서 가져온 천문 책.',src:'세자의 거처',trust:3,note:'세자가 새 문물에 관심이 많았다는 것을 보여 줘요. 쟁점과 이어질까요?'},
  {id:'ID2',type:'물건',icon:'censer',title:'빈 약그릇',body:'약을 달여 담던 빈 그릇.',src:'세자의 거처',trust:2,note:'이 그릇이 무엇을 증명할까요?'}
];
Object.entries({I1:1636,I2:1636,I3:1637,I4:1645,I5:1645,I6:1645,I7:1646,I8:1646,I9:1647,I10:1645}).forEach(([k,y])=>{ const e=EVIDENCE7.find(x=>x.id===k); if(e) e.y=y; });
EVIDENCE7.find(x=>x.id==='I6').tag='hearsay';
const LADDER7=`<ol class="ladder"><li><b>청나라 사신</b> “오늘 점심은 고기를 넣은 국을 먹었소. 양이 꽤 많더군.”</li><li><b>통역관 대충</b> “고기… 국… 많이.”</li><li><b>말순 할머니</b> “청나라 사람이 고깃국을 [[백 그릇]] 먹었대!”</li><li><b>소년병</b> “청나라 군대가 [[국을 먹으러]] 쳐들어왔대요!”</li></ol><p>말이 사람을 건널 때마다 조금씩 바뀌었어요. 처음 말한 사람에게 직접 물어보면 어떨까요?</p>`.replace(/\[\[(.*?)\]\]/g,'<b class="kw">$1</b>');
const LOCS7=[
  {id:'namhan',name:'남한산성',time:'겨울',rooms:[
    {id:'nh-palace',name:'행궁',intro:'남한산성 안의 행궁이다. 1636년 겨울, 왕이 이곳에 피해 있었다.',miss:['얼어붙은 마루다.','아무것도 없다.','찬바람이 든다.'],
     spots:[{x:56,y:24,w:26,h:34,label:'벽에 붙은 날짜표',ev:'I1',say:['벽에 날짜를 적은 종이가 붙어 있다.','1636년 12월부터 이듬해 1월까지, 성 안에서 [[47일]]. 먹을 것이 떨어져 갔다.']},{x:10,y:50,w:20,h:28,label:'화로',say:['식은 화로다.']}]},
    {id:'nh-wall',name:'성벽 위',intro:'성벽 위다. 멀리 성 밖 마을이 내려다보인다.',miss:['눈 쌓인 돌이다.','아무것도 없다.'],
     spots:[{x:20,y:50,w:40,h:24,label:'성가퀴',say:['몸을 숨기던 낮은 담이다.']},{x:66,y:14,w:28,h:24,label:'멀리 보이는 마을',say:['연기가 피어오르던 마을 자리다.']}],
     npcs:[{who:'guard7',expr:'base',place:{x:72,h:60,b:2},topics:[
      {id:'g7-hi',t:'그때 여기 계셨나요?',lines:[['guard7','base','이 성벽을 47일 동안 지켰소.']]},
      {id:'g7-out',t:'성 밖의 소리',lock:'I1',must:true,lockSay:'(늙은 병사는 성 밖만 바라본다. 성 안에서 버틴 날들의 기록을 보여 주면 이야기할지도 모른다.)',
       lines:[['guard7','base','성 안도 춥고 배고팠지만…'],['guard7','base','밤마다 성 밖 [[마을들이 불타는 게]] 보였소. 그 사람들은 피할 곳이 없었지.']]}],
      present:{I1:{lines:[['guard7','base','47일… 하루하루가 길었소.']],unlock:'g7-out'}},def:[['guard7','base','모르는 물건이오.']]}]},
    {id:'nh-gate',name:'서문',intro:'남한산성의 서문이다. 1637년 1월, 왕은 이 문으로 나가 항복하러 갔다.',miss:['돌길이다.','아무것도 없다.'],
     spots:[{x:30,y:20,w:40,h:56,label:'낮은 서문',say:['몸을 숙여야 지나갈 만큼 낮은 문이다.']}]},
    {id:'nh-hall',name:'장수들의 회의실',intro:'신하들이 모여 싸울지 화해할지 다투던 방이다.',miss:['방석이다.','아무것도 없다.'],
     spots:[{x:36,y:40,w:28,h:20,label:'탁자 위 두 장의 글',ev:'I2',say:['탁자 위에 상소 두 장이 놓여 있다.','하나는 [[화해하자]], 하나는 [[끝까지 싸우자]]. 전쟁 전부터 청의 위협을 알리는 말이 있었다.']},{x:8,y:20,w:18,h:40,label:'걸린 지도',say:['남한산성 둘레 지도다.']}]}]},
  {id:'samjeon',name:'삼전도 나루',time:'흐린 날',intro:'한강의 삼전도 나루다. 왕이 항복한 자리다.',miss:['강가 모래다.','아무것도 없다.'],
   spots:[{x:40,y:16,w:20,h:56,label:'큰 비석',ev:'I3',say:['커다란 비석이 서 있다.','1637년 1월 왕이 이곳에서 [[청 황제에게 항복]]했다. 비석은 그 뒤 청의 요구로 세웠다.']},{x:6,y:70,w:24,h:18,label:'나룻배',say:['낡은 나룻배다.']}],
   npcs:[{who:'daechung',expr:'base',place:{x:76,h:58,b:2},until:1,topics:[
     {id:'dc-hi',t:'누구세요?',lines:[['daechung','base','통역관… 대충이오. 긴 말… 짧게.'],['ME','think','(정말 말을 줄여서 하시네…)']]},
     {id:'dc-lunch',t:'사신이 무슨 말을 했나요?',must:true,lines:[['daechung','base','청나라 사신… 점심… 고기… 국… 많이.'],['malsun','base','(어디선가) 내가 다 들었다니까! 청나라 사람이 고깃국을 [[백 그릇]] 먹었대!'],['soldier6','base','(멀리서) 이건 비밀인데요! 청나라 군대가 [[국을 먹으러]] 쳐들어왔대요!'],['ttolbang','shock','자, 잠깐만요! 제가 처음 말이랑 마지막 말을 나란히 들고 올게요!']],
      after:async()=>{ await infoCard('말 전하기 사다리',LADDER7); await say('qingenvoy','base','…나는 그냥 [[국밥 한 그릇]] 먹었소.',{view:'inv'}); await say(ME(),'think','(말이 건너갈 때마다 부풀었어. 그렇다면 ‘독살’이라는 말은 누구에게서 시작됐을까?)',{view:'inv'}); }}],
     def:[['daechung','base','그거… 모름.']]}]},
  {id:'seja',name:'소현세자의 거처',time:'봄밤',from:2,rooms:[
    {id:'sj-bed',name:'침실',intro:'소현세자가 머물던 방이다. 청에서 가져온 물건들이 보인다.',miss:['비단 이불이다.','아무것도 없다.'],
     spots:[{x:56,y:20,w:26,h:30,label:'벽에 건 서양 그림',ev:'I4',say:['서양 사람이 그린 그림이 걸려 있다.','세자는 8년 동안 청에 있다가 [[1645년 2월]] 돌아왔다. 새 문물을 소개하려 했다.']},{x:10,y:56,w:20,h:24,label:'천문 책',ev:'ID1',say:['청에서 가져온 천문 책이다.','신기하지만, 이 책이 쟁점과 이어질까?']}]},
    {id:'sj-med',name:'약을 달이던 곳',intro:'약을 달이던 부엌이다.',miss:['그을린 아궁이다.','아무것도 없다.'],
     spots:[{x:30,y:30,w:24,h:30,label:'약탕관 옆 기록',ev:'I5',say:['약탕관 옆에 날짜를 적은 종이가 있다.','1645년 4월, 세자는 돌아온 지 [[두 달 만에]] 병으로 세상을 떠났다.']},{x:8,y:64,w:16,h:16,label:'빈 약그릇',ev:'ID2',say:['빈 약그릇이다.','이 그릇 하나로 무엇을 알 수 있을까?']}],
     npcs:[{who:'servant7',expr:'base',place:{x:78,h:58,b:2},topics:[
      {id:'s7-hi',t:'여기서 일하셨나요?',lines:[['servant7','base','약 심부름을 했지요.']]},
      {id:'s7-night',t:'그날 밤',lock:'I5',must:true,lockSay:'(하인은 눈을 피한다. 세자가 언제 세상을 떠났는지 보여 주면 말할지도 모른다.)',
       lines:[['servant7','base','…저는 그날 거처에 없었습니다.'],['servant7','base','다만 [[단비]]라는 궁녀가 다 봤다고 떠들고 다녔지요.'],['ME','think','(단비… 내일 법정에 부를 증인이야.)']]}],
      present:{I5:{lines:[['servant7','sweat','그날 일을… 아시는군요.']],unlock:'s7-night'}},def:[['servant7','base','잘 모르겠습니다.']]}]},
    {id:'sj-yard',name:'마당',intro:'거처의 마당이다.',miss:['봄풀이다.','아무것도 없다.'],
     spots:[{x:30,y:30,w:30,h:30,label:'매화나무',say:['매화가 피어 있다.']}],
     npcs:[{who:'malsun',expr:'base',place:{x:76,h:60,b:2},topics:[
      {id:'ms7-poison',t:'세자 이야기',lines:[['malsun','base','내가 다 봤다니까! 세자가 [[검게 변한]] 걸!'],['ME','think','직접 보셨어요?'],['malsun','sweat','…아니, 장터에서 누가 [[종이 한 장]]을 돌려 읽던데. 거기 그렇게 적혀 있었어.'],['malsun','base','그 종이가 어디서 나왔냐고? 무슨 법정 [[서고]]에서 흘러나왔다던가?'],['ME','think','(법정 서고…? 소문의 출처가 종이 한 장이라면, 그 종이부터 따져 봐야 해.)']]}],
      def:[['malsun','base','그건 모르는 물건이네.']]}]}]},
  {id:'kangbin',name:'강빈의 옛 집',time:'흐린 날',from:3,rooms:[
    {id:'kb-room',name:'빈 방',intro:'세자빈 강씨가 살던 방이다. 지금은 비어 있다.',miss:['빈 방이다.','아무것도 없다.','바람 소리뿐이다.'],
     spots:[{x:30,y:24,w:30,h:30,label:'벽에 남은 글',ev:'I7',say:['벽에 누군가 적어 둔 글이 남아 있다.','1646년, 세자빈은 왕의 음식에 독을 넣었다는 [[의심]]을 받고 사약을 받았다. 증거는 분명하지 않았다.']},{x:66,y:50,w:20,h:30,label:'빈 경대',say:['거울 없는 경대다.']}],
     npcs:[{who:'maid7',expr:'base',place:{x:16,h:60,b:2},topics:[
      {id:'m7-hi',t:'세자빈은 어떤 분이었나요?',lines:[['maid7','base','청에 볼모로 가서도 농사를 지어 사람들을 먹이신 분이오.']]},
      {id:'m7-against',t:'반대한 대신들',lock:'I7',must:true,lockSay:'(몸종은 고개를 떨군다. 세자빈에게 내려진 벌의 기록을 보여 주면 말할지도 모른다.)',
       lines:[['maid7','base','대신들이 [[줄지어 엎드려]] 말렸소. 여러 번이나.'],['maid7','base','그래도 왕은 듣지 않았소.']],gives:['I8']}],
      present:{I7:{lines:[['maid7','base','…그 기록을 보니 그날이 생각나는구려.']],unlock:'m7-against'}},def:[['maid7','base','모르는 물건이오.']]}]},
    {id:'kb-jar',name:'부서진 장독대',intro:'장독대가 부서져 있다.',miss:['깨진 독이다.','아무것도 없다.'],
     spots:[{x:30,y:40,w:30,h:30,label:'깨진 장독',say:['깨진 장독들이다.']}]},
    {id:'kb-yard',name:'손자들이 놀던 마당',intro:'어린 손자들이 놀던 마당이다. 바람이 분다.',miss:['풀이다.','아무것도 없다.'],
     spots:[{x:40,y:56,w:20,h:20,label:'작은 팽이',ev:'I9',say:['풀숲에 작은 팽이 하나가 남아 있다.','1647년, 세자의 어린 세 아들은 [[제주도로 귀양]]을 갔다. 그중 둘은 그곳에서 세상을 떠났다.']}]}]},
  {id:'physician',name:'왕실 의원의 방',time:'오후',from:3,intro:'세자를 치료한 의원이 쓰던 방이다.',miss:['약재 냄새다.','아무것도 없다.'],
   spots:[{x:50,y:20,w:30,h:36,label:'접힌 상소',ev:'I10',say:['책상 위에 접힌 상소가 있다.','대신들이 [[의원을 벌하자]]고 했지만 왕이 막았다. …수상하긴 한데, 이게 무엇을 증명할까?']},{x:10,y:40,w:20,h:40,label:'약장',say:['약재 서랍이 빼곡하다.']}]}
];
const TERMS7=[
  {w:'정묘호란',d:'1627년 후금(뒤의 청)이 처음 쳐들어온 전쟁이에요.',ic:'⚔️'},
  {w:'병자호란',d:'1636년 청이 다시 쳐들어온 전쟁이에요. 왕은 남한산성으로 피했다가 항복했어요.',ic:'⚔️'},
  {w:'화해',d:'싸움을 멈추고 사이좋게 지내기로 하는 것이에요. 그때는 ‘화친’이라고 했어요.',ic:'🤝'},
  {w:'볼모',d:'약속을 지킨다는 표시로 다른 나라에 보내 머물게 한 사람이에요.',ic:'⛓️'},
  {w:'사약',d:'벌로 목숨을 잃게 하는 약이에요.',ic:'⚠️'},
  {w:'무죄 추정',d:'증명되기 전까지는 죄가 없다고 보는 원칙이에요.',ic:'⚖️'},
  {w:'전해 들은 말',d:'직접 보지 않고 다른 사람에게서 들은 말이에요. 사건 3에서 배웠지요.',ic:'👂'}
];
const C7CH=()=>[{t:'① 외교로 두 번의 전쟁을 부른 죄'},{t:'② 전쟁 대비를 소홀히 한 죄'},{t:'③ 세자의 가족에게 가혹한 벌을 내린 죄'},{t:'④ 소현세자를 죽게 한 죄'}];
const T7injo1=()=>({key:'인조',who:'injo',lines:[
  {text:'나는 나라를 지키려 최선을 다했소.',expr:'base',press:[['player','normal','최선이 무엇이었죠?'],['injo','base','남한산성에서 끝까지 버텼소.']]},
  {text:'청이 그렇게 빨리 쳐들어올 줄은 아무도 몰랐소.',expr:'base',lie:true,ev:'I2',press:[['player','normal','아무도요?'],['injo','sweat','그, 그렇소.']],
   hit:[['player','present','두 장의 상소입니다. 전쟁 전부터 [[청의 위협을 알리는 말]]이 있었어요!'],['player','confident','아무도 몰랐다는 말은 사실과 다릅니다!'],['injo','sweat','크…!']]},
  {text:'그 뒤의 일은 하늘의 뜻이었소.',expr:'base',press:[['player','think','(하늘의 뜻… 그렇게 넘길 수는 없어.)'],['injo','base','…']]}
]});
const T7injo3=()=>({key:'인조',who:'injo',lines:[
  {text:'강빈은 죄를 지었소. 왕의 음식에 독을 넣으려 했지.',expr:'angry',press:[['player','normal','그 증거는요?'],['injo','angry','의심만으로도 충분했소!']]},
  {text:'대신들도 모두 강빈을 벌해야 한다고 했소.',expr:'angry',lie:true,ev:'I8',press:[['player','normal','모두요?'],['injo','angry','그렇소!']],
   hit:[['player','present','강빈의 몸종이 본 일입니다. 대신들은 [[줄지어 엎드려 말렸어요]]!'],['injo','sweat','…!']]},
  {text:'어린 손자들은 편히 지내도록 보냈소.',expr:'base',lie:true,ev:'I9',press:[['player','normal','편히요?'],['injo','base','그렇소.']],
   hit:[['player','present','어린 세 손자는 [[제주도로 귀양]]을 갔고, 그중 둘은 그곳에서 세상을 떠났어요.'],['player','confident','그것은 편히 지내도록 보낸 것이 아닙니다!'],['injo','sweat','…….']]}
]});

async function prologue7(){
  bgm('crisis');
  await say('guide','normal','1645년 봄 밤, 한양. 소현세자의 거처.',{view:'prologue7'});
  await playShadow('sickbed');
  const c=await choiceSheet('방금 본 장면, 어떻게 생각하나요? 세자는 독살당했을까요? (정답은 없어요)',[{t:'독살이다.',ok:true,tag:'pre-poison'},{t:'모르겠다.',ok:true,tag:'pre-unknown'},{t:'독살이 아니다.',ok:true,tag:'pre-illness'}]);
  S.flags.pre=c.tag; track('belief',{when:'before',v:c.tag});
  await say('voice','normal','역사가 묻는다. 모두가 ‘그랬을 것’이라 믿는 일도, [[증거가 없으면 벌할 수 없는가]].',{view:'prologue7'});
  await titleCard('사건 7','남한산성의 겨울');
}
async function runPros7(from){
  if(from<=0){ await prologue7(); bgm('investigate');
    await say('judge','normal','하람 검사, 피고는 조선의 왕 [[인조]]이오. 혐의가 넷이오.',{view:'lobby'});
    await say('player','confident','그중에서도 [[소현세자 독살]]! 다들 아는 이야기잖아요. 이번엔 확실히 이길 거예요.',{view:'lobby'});
    await say('rival','normal','다들 안다고 증명되는 건 아니야, 하람.',{view:'lobby'}); }
  await playDays([
    {inv:async()=>{ await invDay(1,'[[남한산성]]과 [[삼전도 나루]]를 조사하자. 남한산성은 구역이 네 곳이야.'); },court:d1_7,
     learned:['1636년 병자호란 때 인조는 남한산성에서 47일을 버티다 삼전도에서 항복했다.','최명길과 김상헌은 다른 길을 말했지만, 둘 다 나라를 위한 선택이었다.','전쟁 전부터 청의 위협을 알리는 말이 있었다.']},
    {inv:async()=>{ await invDay(2,'[[소현세자의 거처]]가 열렸어. 세자의 죽음을 ‘봤다’는 증인이 있대.'); },court:d2_7,
     learned:['‘독살’의 증인은 문밖에서 들은 말뿐이었다.','실록에 적힌 그 말도 들은 말이고, 바깥사람은 자세히 알 수 없었다고 적혀 있다.','필사본의 ‘보았다’는 ‘들었다’를 긁어내고 고친 것이었다.']},
    {inv:async()=>{ await invDay(3,'[[강빈의 옛 집]]과 [[왕실 의원의 방]]이 열렸어. 세자가 죽은 뒤 피고가 한 일을 보자.'); },court:d3_7,
     learned:['세자빈 강씨는 대신들의 반대에도 사약을 받았다.','어린 세 손자는 제주도로 귀양 갔고 둘이 그곳에서 세상을 떠났다.','검사가 스스로 혐의를 내려놓는 것도 용기다.']},
    {court:d4_7}
  ],from);
}
async function d1_7(){
  await courtOpen(1);
  await say('player','confident','피고 인조의 혐의는 넷입니다.');
  setCharges(C7CH());
  await say('player','confident','첫째, 바뀐 정세를 보지 않은 외교로 [[두 번의 전쟁]]을 부른 죄. 둘째, 전쟁 대비를 소홀히 해 [[백성이 큰 피해]]를 입은 죄.');
  await say('player','confident','셋째, 소현세자의 가족에게 [[가혹한 벌]]을 내린 죄. 넷째… 소현세자를 [[죽게 한 죄]]!');
  Music.sting('cheer'); await wait(800);
  await say('guide','normal','방청석이 가장 크게 술렁인 것은 넷째 혐의였다.');
  await say('rival','confident','변호인 누리예요. 증인을 먼저 부르겠어요. 남한산성에서 다투었던 두 신하, [[최명길]]과 [[김상헌]]입니다.');
  bgm('testimony');
  await say('myeonggil','base','최명길이오. 나는 청과 화해하자고 했소. [[살아야 다음이 있소]].');
  await say('sangheon','base','김상헌이오. 나는 끝까지 싸우자고 했소. [[의리를 버리면 나라가 아니오]].');
  await say('rival','smug','자, 검사. 둘 중 누가 [[나쁜 신하]]였나요? 고르세요.');
  const c=await choiceSheet('누가 ‘나쁜 신하’였을까요?',[{t:'최명길. 적과 화해하자고 했다.',ok:true,tag:'myeonggil'},{t:'김상헌. 싸우자고만 해서 백성이 더 다쳤다.',ok:true,tag:'sangheon'},{t:'둘 다 나라를 위한 선택이었다.',ok:true,tag:'both'}]);
  S.flags.badMinister=c.tag; track('bad_minister',{v:c.tag});
  if(c.tag!=='both'){ await say('judge','stern','잠깐! 둘 다 나라를 위한 선택이었소. 그리고 [[이 재판의 피고는 그들이 아니오]].'); await say('player','sweat','(…누리의 유도에 넘어갔어.)'); }
  else await say('judge','normal','그렇소. 정답이 하나가 아닌 물음도 있소. 그리고 이 재판의 피고는 그들이 아니오.');
  await say('judge','normal','피고 인조, 증언하시오.');
  if(!await testimony(T7injo1(),'나는 최선을 다했다')) return false;
  await say('player','confident','재판장님, 내일은 [[세자의 죽음을 직접 본 증인]]을 부르겠습니다!');
  Music.sting('cheer'); await wait(600);
  setCharges([{t:'약을 지은 의원',st:'sus'},{t:'약을 나른 궁녀 단비',st:'sus'},{t:'인조',st:'sus'}],'독살의 용의자');
  await say('player','think','(독살이라면 누가 했을까. 약을 지은 사람, 나른 사람, 그리고 피고.)');
  await gavel(); await titleCard('― 1일차 끝 ―','세자의 죽음을 본 사람');
  return true;
}
async function d2_7(){
  await courtOpen(2);
  setCharges([{t:'약을 지은 의원',st:'sus'},{t:'약을 나른 궁녀 단비',st:'sus'},{t:'인조',st:'sus'}],'독살의 용의자');
  await say('player','confident','증인을 부르겠습니다. 세자의 죽음을 본 궁녀, [[단비]]입니다.');
  bgm('testimony');
  await say('danbi','base','세자 저하의 몸이 [[검게 변해]] 있었습니다!',{testimony:true,tag:'증언 1/2'});
  await say('danbi','base','그날 밤 약을 드신 뒤였어요. 다들 쉬쉬했지요.',{testimony:true,tag:'증언 2/2'});
  Music.sting('murmur'); await wait(700);
  await say('injo','sweat','…!');
  await say('player','confident','(됐어! 직접 본 증인이야!)');
  await say('judge','normal','변호인, 반대 신문을 하시오. 검사는 지켜보시오.');
  bgm('cross'); await shout('hold');
  await say('rival','normal','증인, 하나만 묻겠어요. 그날 거처 [[안에]] 있었나요?',{action:true});
  await say('danbi','base','…아니요. 저는 문밖에 있었습니다.',{testimony:true,tag:'새 증언'});
  await say('danbi','base','염하는 걸 본 [[종친 부인]]이 그렇게 말하는 걸… [[들었어요]].',{testimony:true,tag:'새 증언'});
  Music.sting('realize'); flash();
  await gotEv('I6','증거 수첩에 [[전해 들은 말]]이 들어왔다. 실록에도 이 일은 ‘들은 말’로 적혀 있다.');
  await say('player','shock','(직접 본 게 아니었어…!)');
  await say('danbi','sweat','그, 그래도! 여기 필사본엔 [[‘보았다’]]고 적혀 있어요!');
  S.found.add('IF'); showEvidence('IF'); await say('guide','normal','단비가 종이 한 장을 내밀었다.'); hideEvidence();
  const z=await choiceSheet('검사는 이 필사본을 어떻게 할까요?',[{t:'증거 확대로 자세히 살펴본다.',ok:true,tag:'zoom'},{t:'내 증인이 낸 것이니 그대로 받아들인다.',ok:false,tag:'accept'}]);
  if(z.tag!=='zoom'){ await say('judge','stern','검사, 자기 증인이 낸 종이라도 따져 보아야 하오.'); await loseTrust(); if(S.trust<=0){ await loseTrial(); return false; } }
  await openZoomScene('IF');
  await say('player','sweat','(‘들었다’를 긁어내고 ‘보았다’로 고쳤어. 그리고 또… [[매화 얼룩]].)');
  await say('player','normal','재판장님, 이 필사본은 원래 ‘들었다’였던 것을 고친 것입니다. 증거로 쓰지 않겠습니다.');
  await say('judge','normal','검사가 스스로 밝혔군. 원본 기록은 ‘들은 말’이오.');
  chargeSt(0,'clear','증명할 수 없음'); chargeSt(1,'clear','증명할 수 없음'); chargeSt(2,'clear','증명할 수 없음');
  await say('judge','normal','의원도, 궁녀도, 피고도 [[증명할 수 없소]]. 범인을 못 찾은 것이 아니라, 범죄가 있었는지부터 증명되지 않았소.');
  setCharges(C7CH());
  await victim('captive',[['base','청으로 끌려갔다 돌아온 사람이오.'],['base','몇 해 만에 겨우 돌아왔는데…'],['base','고향 사람들이 [[손가락질]]했소. 끌려간 게 우리 잘못이오?']]);
  await say('player','think','(혐의 ②의 무게야. 백성은 이렇게 다쳤어.)');
  await gavel(); await titleCard('― 2일차 끝 ―','들은 말과 본 것');
  bgm('investigate');
  await say('guide','normal','재판이 끝난 밤, 하람이 혼자 로비에 남았다.',{view:'lobby'});
  await say('player','upset','…증명할 수 없다니. 다들 안다고 생각했는데.',{view:'lobby'});
  await say('judge','normal','검사, 혐의 ④를 [[증명할 수 있소]]?',{view:'lobby'});
  await say('judge','normal','세자가 죽은 뒤, 피고가 [[무엇을 했는지]] 보시오. 모두가 독만 보느라 놓친 것이 있소.',{view:'lobby'});
  await say('guide','normal','하람의 머릿속에 이름 하나가 떠올랐다. [[세자빈 강씨]].',{view:'lobby'});
  return true;
}
async function d3_7(){
  await courtOpen(3);
  await say('judge','stern','검사, 혐의 ④를 계속 유지하겠소?');
  const drop=await withdrawChoice(3,'혐의 ④(소현세자를 죽게 한 죄)를 어떻게 할까요?','끝까지 밀고 갑니다. 모두가 독살이라고 믿어요.','스스로 거둡니다. 직접 본 사람의 기록이 없습니다. 혐의 ③에 집중하겠습니다.');
  if(drop){ await say('guide','normal','방청석에서 야유가 쏟아졌다. “세자를 죽인 왕을 봐주는 거냐!”'); await say('judge','normal','…[[용기 있는 검사요]].'); await say('rival','shock','하람…'); }
  else { await say('rival','normal','그럼 판결로 가리자. 증거로.'); }
  await say('player','confident','그리고 혐의 ③. 모두가 독만 볼 때, [[기록으로 증명되는 비극]]이 있었어요.');
  await say('judge','normal','피고, 증언하시오.');
  if(!await testimony(T7injo3(),'강빈은 죄를 지었다')) return false;
  await victim('kangbin',[['base','소현세자의 아내였던 사람입니다.'],['base','남편은 [[새로운 세상을 보고 왔을 뿐]]입니다.'],['base','저는 그 아내였을 뿐이고요.'],['base','…아이들만은, 기억해 주세요.']],'판결에 앞서, 피해를 입은 사람의 이야기를 듣겠습니다.');
  await playShadow('emptyroom');
  await gavel();
  await say('guide','normal','(재판이 끝난 뒤, 똘방이 아무 말 없이 강빈의 옛 집으로 갔다. 그리고 [[마지막 메밀묵 한 그릇]]을 빈 방 문턱에 놓고 돌아왔다.)',{view:'lobby'});
  store.set('yj-muk',String(Math.max(0,mukCount()-1))); paintMuk(); track('muk',{n:mukCount(),why:'kangbin'});
  await titleCard('― 3일차 끝 ―','놓친 비극');
  return true;
}
async function d4_7(){
  await courtOpen(4);
  await say('judge','normal','피고, 최후 진술을 하시오.');
  if(S.flags.drop&&S.flags.drop[3]) { await say('injo','sweat','…검사가 내 독살 혐의를 거두었구려.'); await say('injo','sweat','그러니 말하겠소. 나는 아들이 [[청을 등에 업고 내 자리를 빼앗을까]] 두려웠소.'); }
  else await say('injo','angry','나는 아들을 죽이지 않았소! …그 이상은 할 말이 없소.');
  await say('rival','normal','판결 전에 하나만. 사건 6에서 우리는 광해군의 외교를 [[죄로 보지 않았어]]. 인조의 외교도 [[같은 기준]]으로 봐야 해.');
  await say('player','think','(같은 기준… 원칙 카드다. 외교는 판단이지 행위가 아니야. 다만 광해군은 위험을 알고 전쟁을 피했고, 인조는 [[경고를 알고도 대비하지 않았어]].)');
  await say('judge','normal','검사, 혐의마다 판결의 종류와 이유, 근거를 대시오. 원칙 카드는 사건이 바뀌어도 [[같은 말]]이오.');
  if(!await verdictKind('혐의 ① 외교로 두 번의 전쟁을 부른 죄','resp',{q:'외교는 나라의 판단이에요. 사건 6과 같은 기준으로 판결해 보세요. 다만 인조는 경고를 알고도 대비하지 않았어요.',idx:0,fb:{guilty:'사건 6의 광해군처럼, 외교는 처음부터 [[죄]]로 볼 수 없소. 같은 기준을 지키시오.',innocent:'광해군은 위험을 알고 전쟁을 피했소. 인조는 [[경고를 알고도]] 대비하지 않았고, 두 번의 전쟁이 났소.'}})) return false;
  if(!await reasonEv('혐의 ①을 ‘책임 있음’으로 보는 가장 알맞은 이유는?',[
    {t:'청의 위협을 알리는 경고가 있었는데도 명만 따르는 외교를 고집했다. 명과의 의리를 중히 여긴 시대 분위기는 참작한다.',ok:true,ev:['I2']},
    {t:'청과 싸운 것 자체가 잘못이었다.',ok:false,fb:'싸울지 화해할지는 그때도 의견이 갈렸소.'},
    {t:'최명길의 말을 들었어야 했으므로 전부 유죄다.',ok:false,fb:'어느 신하가 옳았는지를 가리는 재판이 아니오.'}])) return false;
  if(!await verdictKind('혐의 ② 전쟁 대비를 소홀히 한 죄','resp',{q:'전쟁 대비는 나라의 판단이지만, 경고를 알고도 대비하지 않아 백성이 크게 다쳤어요. 어떻게 판결할까요?',idx:1,fb:{guilty:'대비 소홀은 사람에게 직접 해를 끼친 행위가 아니라 판단의 결과요. 그러나 그 책임은 [[무겁소]].'}})) return false;
  if(!await reasonEv('혐의 ②를 ‘책임 있음(무거움)’으로 보는 가장 알맞은 이유는?',[
    {t:'대비를 소홀히 해 남한산성에서 47일 만에 항복했고, 성 밖 백성이 크게 다치고 끌려갔다.',ok:true,ev:['I1','I3']},
    {t:'왕이 항복했으니 무조건 벌받아야 한다.',ok:false,fb:'항복이라는 결과만 보지 말고, 대비와 피해를 보시오.'},
    {t:'청나라가 너무 강했다.',ok:false,fb:'그것은 참작할 사정이지 유죄의 이유가 아니오.'}])) return false;
  if(!await verdictKind('혐의 ③ 세자의 가족에게 가혹한 벌을 내린 죄','guilty',{q:'분명한 증거 없이 세자빈에게 사약을 내리고 어린 손자들을 귀양 보냈어요. 사람에게 직접 해를 끼친 일이에요.',idx:2,fb:{resp:'이것은 나라를 위한 판단이 아니라, 사람에게 [[직접 해를 끼친 행위]]요.'}})) return false;
  if(!await reasonEv('혐의 ③을 유죄로 보는 가장 알맞은 이유는?',[
    {t:'대신들의 반대에도 분명한 증거 없이 세자빈에게 사약을 내리고, 어린 손자들을 귀양 보냈다.',ok:true,ev:['I7','I8','I9']},
    {t:'세자빈은 청과 가까웠으니 벌받아 마땅했다.',ok:false,fb:'그것은 피고의 의심이었지 증거가 아니오.'},
    {t:'왕의 집안일이니 법정이 따질 일이 아니다.',ok:false,fb:'벌을 내린 것은 왕의 권력이었소.'}])) return false;
  if(!(S.flags.drop&&S.flags.drop[3])){
    await say('judge','stern','검사가 유지한 혐의 ④. 유죄로 볼 근거를 대시오.');
    if(!await choose('혐의 ④의 근거로 무엇을 내겠습니까?',[
      {t:'의원은 벌받지 않았다. 왕이 의원을 감싼 것은 수상하다.',ok:false,fb:'수상한 것과 증명된 것은 다르오.'},
      {t:'궁녀 단비의 증언.',ok:false,fb:'그것은 문밖에서 들은 말이었소.'},
      {t:'…직접 본 사람의 기록이 없어 증명할 수 없습니다.',ok:true}])) return false;
    if(!await verdictKind('혐의 ④ 소현세자를 죽게 한 죄','unproven',{q:'직접 본 사람의 기록이 없어요. ‘안 했다’도 ‘했다’도 증명되지 않았어요.',idx:3,fb:{innocent:'‘안 했다’가 증명된 것이 아니오. 증명이 [[모자란]] 것이오.',guilty:'의심만으로는 벌할 수 없소.'}})) return false;
  }
  await playShadow('sickbed',true);
  await say('judge','normal','여러분은 처음에 이 장면을 보고 무엇을 [[보았다]]고 생각했소? 그림자는 아무것도 증명하지 않았소.');
  const post=await choiceSheet('지금은 어떻게 생각하나요? 세자는 독살당했을까요? (정답은 없어요)',[{t:'독살이다.',ok:true,tag:'post-poison'},{t:'모르겠다. 증거로는 알 수 없다.',ok:true,tag:'post-unknown'},{t:'독살이 아니다.',ok:true,tag:'post-illness'}]);
  S.flags.post=post.tag; track('belief',{when:'after',v:post.tag,before:S.flags.pre});
  bgm('verdict'); await gavel();
  await say('judge','normal','판결을 내리겠소.');
  chargeSt(0,'resp'); await say('judge','normal','혐의 ①, [[책임 있음]]. 경고를 알고도 바뀐 정세를 보지 않았소. 명과의 의리를 중히 여긴 시대 분위기는 참작하오.');
  chargeSt(1,'resp','무거움'); await say('judge','stern','혐의 ②, [[책임 있음]]. 그 무게는 무겁소. 성 밖 백성과 끌려간 백성의 피해를 역사에 크게 기록하오.');
  chargeSt(2,'guilty'); await say('judge','stern','혐의 ③, [[유죄]]. 증거 없이 세자빈에게 사약을 내리고, 어린 손자들을 귀양 보냈소.');
  if(S.flags.drop&&S.flags.drop[3]) await say('judge','normal','혐의 ④. 검사가 스스로 거두었소. 다만 판결 이유에 남기오. [[증명되지 않았다]]는 것이지, [[없었다]]는 뜻은 아니오.');
  else { chargeSt(3,'unproven','증명 부족'); await say('judge','normal','혐의 ④, [[증명 부족]]. 이것은 피고가 ‘안 했다’는 뜻이 아니라 [[증명되지 않았다]]는 뜻이오.'); }
  await say('judge','normal','모두가 독을 의심했소. 그러나 법정은 의심으로 벌하지 않소. 그 대신, [[증명된 잘못은 하나도 놓치지 않소]].');
  const dropped=!!(S.flags.drop&&S.flags.drop[3]), pts=(dropped?1:0)+(S.plums&&S.plums.has('IF')?1:0)+(S.trust>=3?1:0);
  const BL={'pre-poison':'독살이다','pre-illness':'아니다','pre-unknown':'모르겠다','post-poison':'독살이다','post-illness':'아니다','post-unknown':'모르겠다(증거로는 알 수 없다)'};
  caseResult({grade:pts>=3?'진실을 세운 검사':pts===2?'성실한 검사':'견습 검사',lead:dropped?'모두가 믿는 독살 혐의를 스스로 내려놓고, 기록으로 증명되는 진짜 비극을 놓치지 않았습니다.':'독살 혐의를 끝까지 밀었지만 증명하지 못했습니다. 그 대신 증명되는 혐의는 지켰습니다.',
    items:[`혐의 ④: ${dropped?'스스로 취하':'유지 → 증명 부족'}`,`처음 생각 → 지금 생각: ${BL[S.flags.pre]||'-'} → ${BL[S.flags.post]||'-'}`,`‘나쁜 신하’ 고르기: ${({myeonggil:'최명길',sangheon:'김상헌',both:'둘 다 나라를 위한 선택'})[S.flags.badMinister]||'-'}`,`단비의 필사본: ${S.plums&&S.plums.has('IF')?'고친 자국과 매화 얼룩을 찾음':'-'}`],
    judge:'수상한 것과 증명된 것은 다르오. 그것을 아는 검사요.',history:HIST7});
  return true;
}
const HIST7='인조는 1623년 반정으로 왕이 되었습니다. 명과의 의리를 앞세우는 동안 후금(청)이 강해져 1627년 정묘호란, 1636년 병자호란이 일어났습니다. 인조는 남한산성에서 47일을 버티다 1637년 삼전도에서 항복했고, 많은 백성이 청으로 끌려갔습니다. 볼모로 갔던 소현세자는 1645년 돌아와 두 달 만에 세상을 떠났습니다. 독살 의혹은 지금도 이야기되지만, 실록의 관련 기록은 전해 들은 말입니다. 그 뒤 세자빈 강씨는 사약을 받았고, 어린 손자들은 제주도로 귀양 갔습니다.';
regCase(7,{title:'남한산성의 겨울',desc:'인조 · 검사 · 난이도 6',ev:EVIDENCE7,locs:LOCS7,terms:TERMS7,defName:'인조',time:'100~110분',main:'pros',
  lead:'사건 7은 검사 자리예요. 혐의가 넷이에요. 모두가 믿는 이야기를 증거로 따져 보세요. (교사 사전 확인 권장)',
  locked:{def:'검사 사건',judge:'검사 사건'},
  openLine:'지금부터 [[역사 법정]]을 엽니다. 피고는 조선의 왕, 인조.',history:HIST7,
  views:{prologue7:prologueView('#1e2230','#07080e')},
  goal:{pros:'혐의가 넷인 검사예요. 모두가 믿는 이야기도 증거로 따지고, 증명되는 잘못은 하나도 놓치지 않아요.'},
  recall:{q:'지난 사건에서 광해군의 외교(혐의 ②)는 왜 무죄였나요?',opts:[{t:'위험을 알고 전쟁을 피하려 한 외교 판단이었기 때문',ok:true},{t:'명나라가 나쁜 나라였기 때문'},{t:'강홍립이 혼자 항복했기 때문'}],yes:'잘 기억하고 있구려. 이번 사건에서도 그 기준을 쓰게 될 것이오.',no:'…위험을 알고 전쟁을 피한 외교였소. 이번 사건에서도 같은 기준을 쓰게 될 것이오.'},
  bgCards:{1:{ic:'❄️',t:'1627년, 1636년 두 번 북쪽 나라(후금, 뒤의 청)가 쳐들어왔어요. 1636년 겨울 인조는 남한산성으로 피했어요.'},2:{ic:'🏮',t:'소현세자는 8년 동안 청에 볼모로 있다가 1645년 돌아왔고, 두 달 만에 세상을 떠났어요.'},3:{ic:'🏚️',t:'세자가 세상을 떠난 뒤, 세자빈과 어린 손자들에게 무슨 일이 있었는지 봐요.'},4:{ic:'⚖️',t:'판결하는 날이에요. 사건 6과 같은 기준으로 외교를 판결해요.'}},
  record:['남한산성 밖에서 불탄 마을의 사람들','청으로 끌려갔다가 돌아와 손가락질받은 백성들','47일 동안 성 안에서 추위와 굶주림을 견딘 군사와 백성'],
  lesson:{opts:[{t:'의심만으로는 벌할 수 없다.',r:'그렇소. 법정은 의심이 아니라 증명으로 판결하오.'},{t:'모두가 독을 볼 때 놓친 진짜 비극을 찾았다.',r:'그렇소. 증명된 잘못은 하나도 놓치지 않았소.'},{t:'외교는 사건이 바뀌어도 같은 기준으로 판결한다.',r:'그렇소. 기준이 흔들리면 판결이 아니라 기분이오.'}]},
  paper:{id:'IF',anach:'효종'},
  teaser:'1862년 봄, 진주. 흰 수건을 두른 농민들. 고발인은 말한다. “[[장부를 보면 내 이름이 있을 것]]이오.”',
  gag:{scene:'통역관 대충과 말순 할머니 「말 전하기 놀이」',
    inv:{1:[['ttolbang','bang','남한산성은 춥대요. 증거 나와라, 뚝딱!'],['guide','normal','(메밀묵이 나왔다. 꽁꽁 얼어 있다.)'],['ttolbang','sad','…메밀묵 얼음과자가 됐어요.'],['ttolbang','base','아, 삼전도 나루에 통역관 [[대충]] 아저씨가 있대요. 말을 아주 짧게 줄이신대요.']],
      2:[['ttolbang','base','세자의 거처 마당에 말순 할머니가 또 오셨대요. 이번엔 무슨 소문일까요?']],
      3:[['ttolbang','base','…오늘은 강빈의 옛 집에 가요. 저는 오늘 뚝딱 안 할래요.']]},
    fix:{2:{say:'어제 법정 요약! 최명길이랑 김상헌 중에 [[나쁜 신하]]가 누군지 밝혀졌대요!',opts:[{t:'아니야. 둘 다 나라를 위한 선택이었고, 재판의 피고도 그들이 아니야.',ok:true},{t:'맞아. 나쁜 신하가 밝혀졌어.'}]},
      3:{say:'어제 법정 요약! 궁녀 단비가 세자의 몸을 [[직접 봤대요]]!',opts:[{t:'아니야. 문밖에서 들은 말이었고, 필사본도 ‘들었다’를 고친 거였어.',ok:true},{t:'맞아. 직접 봤어.'}]}},
    pun:[['judge','normal','남한산성이 하도 추웠다니… 오늘 재판은 [[산성]]이 아니라 [[한성]]… 아니, 한기가 도는구려.'],['ttolbang','joy','하, 하하… 한기!'],['guide','normal','(법정이 정말로 조금 추워졌다.)']],punDay:2},
  gojeung:['남한산성 농성 기간(1636.12~1637.1, 47일)','최명길·김상헌의 주장','소현세자 귀국(1645.2)과 사망(1645.4), 실록의 사망 관련 기록이 전언(들은 말)이라는 점','의원 이형익 처벌 논의와 인조의 반대','세자빈 강씨 사사(1646) 경위와 대신들의 반대','손자들의 제주 유배(1647)와 그 뒤','청으로 끌려간 백성의 수(통계가 엇갈림)','궁녀 단비와 필사본, 통역관 대충은 게임 속 상상','묘호 ‘효종’은 봉림대군이 세상을 떠난 뒤(1659) 붙음 — 필사본의 시대 안 맞는 말'],
  roles:{pros:runPros7}});
