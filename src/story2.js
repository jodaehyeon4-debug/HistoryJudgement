/* ===== 사건 2 「왕검성의 밤」: 검사 모드 + 변호인 모드 ===== */
const EVIDENCE2=[
  {id:'C1',type:'사료',title:'홀과 봉토',body:'“준왕이 위만을 믿어 박사로 삼고 홀을 내려 주었으며, 서쪽 100리 땅을 주어 서쪽 변경을 지키게 하였다.”',src:'「위략」(「삼국지」 위서 동이전 주석에 인용)',trust:3,note:'준왕이 위만을 얼마나 믿었는지 보여 주는 기록이에요.'},
  {id:'C2',type:'증언',title:'거짓 경보',body:'위만이 준왕에게 사람을 보내 “한나라 군대가 여러 길로 쳐들어오니, 들어가 왕을 지키겠다”고 알렸다.',src:'준왕의 증언 · 「위략」',trust:3,note:'위만이 군사를 이끌고 들어온 이유로 댄 말이에요.'},
  {id:'C3',reuse:true,type:'연표',title:'한나라 연표',body:'위만이 왕이 된 무렵(기원전 194년쯤) 한나라가 고조선을 친 기록은 없다. 한나라가 고조선을 친 것은 기원전 109년이고, 기원전 108년에 그 땅에 [[낙랑]] 등의 군을 두었다.',src:'「사기」 조선열전을 바탕으로 정리',trust:3,note:'‘낙랑’이라는 이름이 언제 생겼는지 눈여겨보세요.'},
  {id:'C4',type:'사료',title:'상투와 조선 옷',body:'“위만은 무리 천여 명을 모아 상투를 틀고 오랑캐(조선)의 옷을 입고 동쪽으로 달아났다.”',src:'「사기」 조선열전',trust:3,note:'위만이 조선 사람의 차림으로 왔다는 기록이에요.'},
  {id:'C5',type:'사료',title:'나라 이름 ‘조선’',body:'위만이 왕이 된 뒤에도 나라 이름을 바꾸지 않고 ‘조선’이라 불렀다.',src:'「사기」 조선열전을 바탕으로 정리',trust:3,note:'나라 이름을 그대로 둔 까닭을 생각해 보세요.'},
  {id:'C6',type:'유물',title:'철로 만든 농기구',body:'위만이 다스리던 때 철로 만든 농기구와 무기가 더 널리 쓰이며 나라 힘이 커졌다.',src:'교과서 서술을 바탕으로 정리',trust:2,note:'철기 문화가 퍼지며 고조선이 강해졌어요.'},
  {id:'C7',type:'사료',title:'주변을 아우른 기록',body:'위만은 군사력과 재물을 바탕으로 이웃한 진번, 임둔을 복속시켜 땅을 넓혔다.',src:'「사기」 조선열전',trust:3,note:'위만 조선이 커진 모습이에요.'},
  {id:'C8',type:'사료',title:'남쪽으로 간 준왕',body:'쫓겨난 준왕은 측근과 백성을 이끌고 바닷길로 남쪽에 가서 새로 자리를 잡고 스스로 ‘한왕’이라 하였다.',src:'「위략」',trust:2,note:'같은 시대, 다른 선택을 한 사람이에요.'},
  {id:'C9',type:'유물',title:'비파형 동검',body:'고조선을 대표하는 청동 검. 위만이 오기 훨씬 전부터 쓰였다.',src:'박물관 고조선실',trust:3,note:'고조선 문화를 보여 주는 유물이에요.'},
  {id:'C10',type:'문서',title:'준왕의 밀서',body:'“위만을 없애라. 그리고 [[낙랑]]의 군사로 서쪽을 막으라.” 끝에 준왕의 도장이 찍혀 있다.',src:'피고 위만이 내놓은 문서',trust:1,note:'누가, 언제 쓴 문서일까요? 낱말 하나하나를 의심해 보세요.',
   zoom:{say:['밀서의 귀퉁이를 크게 확대해 보았다.','오른쪽 위에 작은 [[매화 모양 먹 얼룩]]이 있다. 도장과는 다른 먹이다.','…누가 이런 얼룩을 남겼을까?'],plum:true,note:'오른쪽 위에 매화 모양 먹 얼룩이 있다.'}},
  {id:'C11',type:'증언',title:'포구의 뱃사공 이야기',body:'그날 밤 준왕 일행은 허둥지둥 배에 올라 남쪽 바닷길로 떠났다. 누구에게 편지를 남길 틈도 없었다.',src:'바닷가 포구에서 들은 이야기 (상상)',trust:2,note:'그날 밤 준왕이 무엇을 할 수 있었는지 생각해 보세요.'},
  {id:'P1',type:'물건',title:'통행패',body:'서쪽 망루로 올라가는 사람에게 내주던 나무패.',src:'철기 공방',trust:3,note:'잠긴 곳을 여는 물건이에요.'},
  {id:'C12',type:'사료',title:'조선 출신 관리들',body:'위만이 세운 나라에는 ‘조선상’ 노인, ‘니계상’ 참처럼 조선 땅에서 나고 자란 사람들이 높은 벼슬에 있었다.',src:'「사기」 조선열전 · 3일차 법정, 상인의 숨은 말',trust:3,note:'나라를 움직인 사람들이 누구였는지 보여 줘요.'}
];
Object.entries({C1:-195,C2:-194,C3:-108,C4:-195,C5:-194,C6:-180,C7:-150,C8:-194,C11:-194,C12:-110}).forEach(([k,y])=>{ const e=EVIDENCE2.find(x=>x.id===k); if(e) e.y=y; });
EVIDENCE2.find(x=>x.id==='C4').reuse=true;
const EV2_ICON={C12:'alliance',C11:'map',C1:'alliance',C2:'scroll',C3:'timeline',C4:'scroll',C5:'map',C6:'army',C7:'map',C8:'map',C9:'censer',C10:'scroll',P1:'map'};
EVIDENCE2.forEach(e=>{ e.icon=EV2_ICON[e.id]; });
const LOCS2=[
  {id:'wg', name:'왕검성', time:'아침', rooms:[
   {id:'wg-gate', name:'성문', intro:'고조선의 도읍 왕검성의 성문이다. 그날 밤 위만의 군사가 이 문으로 들어왔다.',
    miss:['흙으로 다진 성벽이다.','수레바퀴 자국뿐이다.','횃불 받침이다. 단서는 아니다.','아무것도 없다.','바람에 흙먼지가 인다.'], spots:[
     {x:53,y:31,w:10,h:6, label:'성문 위 현판', ev:'C5', say:['성문 위에 오래된 현판이 걸려 있다.','이 나라의 이름이 새겨져 있다. 위만이 왕이 된 뒤에도 나라 이름은 [[‘조선’ 그대로]]였다.']},
     {x:10,y:48,w:12,h:20, label:'남쪽 길 이정표', ev:'C8', say:['남쪽을 가리키는 낡은 이정표다.','쫓겨난 준왕은 이 길로 [[남쪽]]에 가서 새로 자리를 잡았다고 한다.']},
     {x:37,y:53,w:5,h:16, label:'횃불 받침', say:['돌로 된 횃불 받침이다. 그날 밤에도 불이 타고 있었을까.']},
     {x:42,y:72,w:16,h:24, label:'수레바퀴 자국', say:['깊게 팬 수레바퀴 자국이다. 단서는 아니다.']},
     {x:2,y:36,w:28,h:22, label:'성벽', say:['흙을 단단히 다져 쌓은 성벽이다.']}]},
   {id:'wg-court', name:'궁궐 마당', intro:'왕이 머물던 궁궐 마당이다. 준왕은 이곳에서 위만을 믿고 서쪽을 맡겼다.',
    miss:['돌계단이다.','마당 흙바닥이다.','특별한 건 없다.','바람에 깃발이 펄럭인다.'], spots:[
     {x:27.5,y:38.5,w:6.5,h:6, label:'왕좌 옆 나무 상자', ev:'C1', say:['왕좌 옆 나무 상자 안에 납작한 옥 홀과 접힌 지도가 들어 있다.','준왕이 위만을 믿고 [[높은 자리와 서쪽 100리 땅]]을 내린 증표다.']},
     {x:5,y:55,w:19,h:18, label:'돌우물', say:['마른 우물이다. 아무것도 없다.']},
     {x:73,y:8,w:6,h:55, label:'깃대', say:['깃대에 빛바랜 천이 매달려 있다.']},
     {x:83,y:36,w:10,h:25, label:'큰 북', say:['큰 북이다. 그날 밤 이 북이 울렸을까.']},
     {x:27,y:45,w:13,h:11, label:'돌계단', say:['궁궐로 오르는 돌계단이다.']}]},
   {id:'wg-tower', name:'서쪽 망루', need:'P1', lockedSay:['서쪽 망루로 오르는 사다리 앞을 병사가 막아섰다.','“통행패가 없으면 올라갈 수 없소.”'],
    intro:'위만이 지키던 서쪽 망루다. 창밖으로 서쪽 들판이 끝없이 펼쳐진다.',
    miss:['널빤지 벽이다.','먼지가 쌓였다.','아무것도 없다.','삐걱거리는 바닥이다.'], spots:[
     {x:3,y:15,w:10,h:55, label:'벽에 걸린 옷', ev:'C4', say:['나무 못에 옷 한 벌과 머리띠가 걸려 있다.','위만이 고조선에 올 때 입었다는 차림이다. [[상투를 틀고 조선 옷]]을 입었다고 한다.']},
     {x:64,y:10,w:32,h:42, label:'벽의 지도 판', ev:'C7', say:['나무판에 땅의 모양이 그려져 있다.','가운데에서 이웃 땅으로 화살표가 뻗어 있다. 위만은 [[진번, 임둔]]을 아울러 땅을 넓혔다.']},
     {x:22,y:5,w:33,h:48, label:'서쪽 창', say:['서쪽 들판이 내려다보인다. 한나라 군대는 보이지 않는다.']},
     {x:86,y:59,w:14,h:41, label:'화살통', say:['화살통이다. 단서는 아니다.']},
     {x:10,y:77,w:6,h:9, label:'등잔', say:['흙으로 빚은 등잔이다.']}]}]},
  {id:'forge', name:'철기 공방', time:'낮', intro:'쇠를 녹여 농기구와 무기를 만드는 공방이다. 풀무 바람에 불꽃이 튄다.',
   miss:['뜨거운 숯이다.','쇠 부스러기다.','물이 담긴 통이다.','아무것도 없다.','숫돌이다. 단서는 아니다.'], spots:[
    {x:61,y:20,w:24,h:33, label:'선반의 쇠 농기구', ev:'C6', say:['선반에 쇠로 만든 낫과 보습이 걸려 있다.','철기가 퍼지면서 농사가 잘되고 나라 힘이 커졌다.']},
    {x:3,y:31,w:5,h:13, label:'기둥에 걸린 나무패', ev:'P1', say:['기둥의 못에 작은 나무패가 끈으로 걸려 있다.','망루 그림이 새겨진 [[통행패]]다. 이걸 보여 주면 서쪽 망루에 오를 수 있겠다.']},
    {x:10,y:21,w:19,h:42, label:'용광로', say:['붉게 달아오른 용광로다.']},
    {x:66,y:55,w:20,h:36, label:'모루', say:['단단한 돌 모루다.']},
    {x:0,y:69,w:15,h:31, label:'물통', say:['식힐 때 쓰는 물통이다.']}]},
  {id:'museum2', name:'박물관 고조선실', time:'저녁', intro:'오늘날의 박물관이다. 고조선의 유물과 연표가 전시되어 있다.',
   miss:['반짝이는 바닥이다.','빈 벽이다.','조명이 비칠 뿐이다.','아무것도 없다.'], spots:[
    {x:73,y:30,w:12,h:50, label:'연표 안내판', ev:'C3', say:['고조선의 연표가 그려진 안내판이다.','한나라가 고조선을 친 것은 [[기원전 109년]]. 그 이듬해 그 땅에 [[낙랑]] 등의 군을 두었다.']},
    {x:0,y:28,w:16,h:42, label:'진열장의 청동 검', ev:'C9', say:['비파 모양의 청동 검이다. 고조선을 대표하는 유물이다.','멋진 유물이지만, 위만의 재판과 관계가 있을까?']},
    {x:37,y:43,w:29,h:21, label:'고인돌 모형', say:['커다란 고인돌 모형이다. 위만보다 훨씬 오래전 것이다.']},
    {x:86,y:8,w:14,h:58, label:'창', say:['창밖은 어둡다.']},
    {x:19,y:30,w:11,h:35, label:'청동 거울 진열장', say:['가는 선 무늬가 새겨진 청동 거울이다. 재판과는 관계가 없어 보인다.']}]}
];
const PHASE2={1:'1일차 조사',2:'1일차 법정',3:'2일차 조사',4:'2일차 법정',5:'3일차 조사',6:'3일차 법정',7:'4일차 법정'};
(function(){
  const wg=LOCS2.find(l=>l.id==='wg'); const gate=wg.rooms.find(r=>r.id==='wg-gate'), court=wg.rooms.find(r=>r.id==='wg-court'), tower=wg.rooms.find(r=>r.id==='wg-tower');
  tower.from=2; LOCS2.find(l=>l.id==='forge').from=2;
  /* 변호인 모드: 접견실 (재설계 v3) — 의뢰인이 변호인에게도 거짓말을 한다 */
  const mil=()=>S.flags&&S.flags.mil;
  LOCS2.unshift({id:'meet2',name:'접견실',bg:'lobby',kind:'meet',role:'def',time:'아침',intro:'피고 위만을 만나는 작은 방이다. 변호인과 피고 둘뿐이다.',miss:['아무것도 없다.'],spots:[],
    npcs:[{who:'wiman',expr:'base',place:{x:50,h:72,b:0},until:2,topics:[
      {id:'w-why',t:'군사를 이끌고 들어간 까닭',must:true,until:2,lines:[['wiman','base','한나라 군대가 [[정말로]] 쳐들어오고 있었소. 나는 왕을 지키러 들어갔을 뿐이오.'],['wiman','smug','변호인은 내 편 아니오? 내 말을 믿으시오.'],['ME','think','(변호인에게까지 거짓말을 하는 거라면… 증거로 확인해야 해.)']]},
      {id:'w-dress',t:'처음 조선에 온 날',must:true,until:2,lines:[['wiman','base','상투를 틀고 이 나라 옷을 입고 왔소. 연나라 차림이 아니었지.'],['wiman','base','그 일은 「사기」에도 적혀 있다 들었소. 변호인이 찾아보시오.'],['ME','think','(기록 사본을 찾아 수첩에 적어 두었다.)']],gives:['C4']},
      {id:'w-truth',t:'거짓 경보',lock:'C2',must:true,from:2,lockSay:'(위만은 팔짱을 꼈다. 그날 밤의 경보를 적은 기록과, 한나라가 실제로 언제 쳐들어왔는지를 함께 보여 줘야 입을 열 것 같다.)',
       lines:[['wiman','sweat','…그래. 한나라 군대는 오지 않았소. [[내가 꾸며 낸 말]]이었소.'],['wiman','base','하지만 들어 보시오. 준왕도 나를 없애려 했소. 그 증거가 여기 있지.'],['wiman','smug','준왕의 [[밀서]]요. 이걸 내면 이길 수 있소.'],['ME','think','(의뢰인이 처음으로 거짓을 인정했어. 그리고 밀서… 이건 믿어도 될까?)']],gives:['C10']}],
      present:{C2:{need:['C2','C3'],unlock:'w-truth',lines:[['wiman','angry','…알고 있었구려.']],wait:[['wiman','angry','그 기록 하나로 나를 몰아세울 셈이오?'],['ME','think','(한나라가 그때 정말 쳐들어왔는지 보여 줄 증거도 함께 내밀어야 해.)']]},
               C3:{need:['C2','C3'],unlock:'w-truth',lines:[['wiman','angry','…알고 있었구려.']],wait:[['wiman','smug','한나라 연표? 그게 어쨌다는 거요.'],['ME','think','(그날 밤 피고가 준왕에게 보낸 말을 적은 기록도 함께 보여 줘야 해.)']]}},
      def:[['wiman','base','그건 내 재판과 상관없는 물건이오.']]},
     {who:'wiman',expr:'base',place:{x:50,h:72,b:0},from:3,topics:[
      {id:'w-last',t:'내일의 최후 진술',must:true,cond:()=>mil()!=='growth',lines:[['wiman','angry','변호인이 법정에서 한 일, 다 보았소.'],['wiman','base',"…처음엔 분했소. 그런데 밤새 생각해 보니, 내 거짓은 내가 갚아야 하는 것이더군."],['ME','think','(피고의 마음이 조금 열렸어.)']]},
      {id:'w-closed',t:'내일의 최후 진술',cond:()=>mil()==='growth',lines:[['wiman','smug','…할 말 없소. 변호인은 내 밀서를 쓰지 않았지.'],['ME','think','(피고가 마음을 닫았다. 최후 진술에서 무엇을 말할지 모르겠어.)']]}],
      def:[['wiman','base','…']]}]});
  gate.npcs=[{who:'merchant',expr:'base',place:{x:80,h:60,b:0},until:2,topics:[
    {id:'m-know',t:'위만을 아시오?',lines:[['merchant','base','알다마다! 연나라에서부터 장사하며 오가던 사이지.'],['merchant','base','위만이 무리를 끌고 동쪽으로 갈 때도 내가 봤소.']]},
    {id:'m-night',t:'그날 밤',lines:[['merchant','base','그날 밤 서쪽에서 횃불이 줄지어 들어왔지. 나는 성문 밖에 있었소.'],['merchant','sweat','…한나라 군대? 글쎄, 그런 건 못 봤는데.'],['ME','think','(한나라 군대를 못 봤다… 기억해 두자.)']]},
    {id:'m-dress',t:'위만의 차림',lock:'C5',lockSay:'(상인은 딴청을 피운다. 이 나라의 이름에 얽힌 무언가를 보여 주면 반응할지도 모른다.)',lines:[['merchant','smug','나라 이름이 그대로라고? 흥, 그래도 위만은 [[연나라 사람]]이오.'],['merchant','smug','차림도 연나라 옷 그대로였지! 내 눈으로 봤다니까.'],['ME','think','(정말일까? 기록과 맞대 봐야겠어.)']]}],
    present:{C5:{lines:[['merchant','sweat','성문 현판…? 그게 어쨌다는 거요?']],unlock:'m-dress'},C1:{lines:[['merchant','base','준왕이 위만을 그렇게까지 믿었다니. 흥.']]}},
    def:[['merchant','base','그건 돈이 안 되는 물건이로군.']]}];
  court.npcs=[{who:'jun',expr:'base',place:{x:58,h:62,b:0},from:2,role:'pros',topics:[
    {id:'j-trust',t:'위만을 믿은 까닭',lines:[['jun','base','난리를 피해 온 사람이었소. 우리 옷을 입고, 우리 땅을 지키겠다고 했지.'],['jun','hesitate','그래서 서쪽을 통째로 맡겼소.']]},
    {id:'j-night',t:'그날 밤',lock:'C1',must:true,lockSay:'(준왕은 고개를 돌렸다. 그가 위만에게 내린 증표를 보여 주면 마음을 열지도 모른다.)',lines:[['jun','hesitate','그날 밤… 갑자기 군사들이 몰려왔지.'],['jun','hesitate','아니, 갑자기는 아니었소. 그 전에… 무언가를 들었지. 법정에서 말하겠소.'],['ME','think','(무언가를 들었다… 법정에서 [[더 물어봐야]] 해.)']]}],
    present:{C1:{lines:[['jun','shock','이 홀은… 내가 위만에게 내린 것이오.'],['jun','hesitate','…좋소. 그날 밤 이야기를 하지.']],unlock:'j-night'},C6:{lines:[['jun','base','위만이 다스린 뒤로 쇠붙이가 흔해졌다더군.']]}},
    def:[['jun','base','그건 내가 아는 물건이 아니오.']]}];
  LOCS2.push({id:'harbor',name:'바닷가 포구',time:'새벽',from:3,intro:'준왕이 남쪽으로 떠났다는 바닷가 포구다. 낡은 배들이 묶여 있다.',
    miss:['젖은 모래다.','파도 소리뿐이다.','밧줄 토막이다.','아무것도 없다.'],
    spots:[{x:61,y:42,w:37,h:26,label:'묶여 있는 낡은 배',say:['오래된 나무배다. 단서는 아니다.']},{x:0,y:43,w:27,h:48,label:'그물 더미',say:['말려 둔 그물이다.']},{x:36,y:30,w:24,h:14,label:'수평선',say:['남쪽 바다가 끝없이 펼쳐진다.']},{x:0,y:28,w:35,h:14,label:'돌담',say:['파도를 막는 돌담이다.']}],
    npcs:[{who:'merchant',expr:'base',place:{x:47,h:58,b:4},from:3,role:'def',topics:[
      {id:'h-def',t:'내일 법정에서는?',lines:[['merchant','smug','내일 검사 쪽 증인으로 나가오. 위만이 어떤 사람이었는지 다 말해 주지.'],['merchant','base','말 한 마디에 [[한 냥]]. 법정에서는 공짜로 해 주지만.'],['ME','think','(무엇이든 값을 매기는 버릇이 있네…)']]}],
      def:[['merchant','base','그건 얼마요? …흠, 돈이 안 되는 물건이로군.']]},
     {who:'merchant',expr:'base',place:{x:47,h:58,b:4},from:3,role:'pros',topics:[
      {id:'h-why',t:'포구에는 왜?',lines:[['merchant','base','장사꾼이 포구에 오는 게 이상하오? 남쪽으로 가는 배를 알아보는 중이지. 이 말은 [[한 냥]]이오.']]},
      {id:'h-night',t:'그날 밤의 배',lock:'C10',must:true,lockSay:'(상인은 바다만 바라본다. 피고가 내민 밀서를 보여 주면 무언가 떠올릴지도 모른다.)',
       lines:[['merchant','sweat','밀서? 그날 밤에…? 말도 안 되오.'],['merchant','base','그날 밤 준왕 일행은 [[허둥지둥 배에 올라]] 남쪽으로 떠났소. 뱃사공들이 다 봤지.'],['merchant','sweat','누구한테 편지를 써 줄 틈 같은 건 없었다니까.']],gives:['C11']}],
      present:{C10:{lines:[['merchant','shock','이, 이게 그날 밤 준왕이 썼다는 밀서요?'],['merchant','base','어디 보자… 버릇처럼 값부터 매기게 되는군. 이 종이는… [[낙랑 종이]]값이네. 비싸지.'],['ME','think','(…낙랑? 어디서 들어 본 이름인데.)'],['merchant','sweat','…흠, 그날 밤 일을 말해 주지.']],unlock:'h-night'}},
      def:[['merchant','base','그건 돈이 안 되는 물건이로군.']]}]});
  LOCS2.push({id:'lobby',name:'법정 로비',time:'저녁',from:3,intro:'재판이 끝난 법정 로비다. 누리가 창가에 서 있다.',
    miss:['반들반들한 마룻바닥이다.','빈 의자다.','아무것도 없다.'],
    spots:[{x:5,y:62,w:31,h:22,label:'긴 의자',say:['나무 의자다.']},{x:36,y:28,w:22,h:40,label:'법정 문',say:['내일 다시 열릴 법정의 문이다.']}],
    npcs:[{who:'player',expr:'confident',place:{x:72,h:70,b:0},role:'def',topics:[
      {id:'p-plan',t:'내일 검사의 작전',must:true,lines:[['player','confident','내일 증인은 연나라 상인이야. 상인 말이 틀렸다 해도 끝이 아니야.'],['player','smug','상투랑 옷차림은 꾸밀 수 있잖아? 위만이 데려온 무리가 [[연나라 사람들]]이었다는 건 그대로야.'],['ME','think','(하람은 그렇게 반격하겠구나. 나라를 움직인 사람들이 누구였는지 보여 줄 증거가 필요해.)']]}],
      def:[['player','normal','그걸로 나를 흔들 수 있을까?']]},
     {who:'rival',expr:'smug',place:{x:72,h:70,b:0},role:'pros',topics:[
      {id:'r-letter',t:'준왕의 밀서',lock:'C10',must:true,lockSay:'(누리는 대답 대신 웃기만 한다. 그 밀서를 보여 주며 물어봐야겠다.)',lines:[['rival','smug','그 밀서요? 저도 진짜인지는 몰라요. 피고가 내민 문서니까요.'],['rival','normal','다만… 거기 적힌 [[지명]]이 언제 생긴 이름인지는, 확인해 볼 만하겠죠.'],['ME','think','(지명… 박물관 연표를 다시 떠올려 보자.)']]}],
      present:{C10:{lines:[['rival','normal','어제 그 밀서군요. 피고가 직접 꺼낸 거예요.']],unlock:'r-letter'}},
      def:[['rival','normal','그걸로 절 흔들 수 있을까요?']]}]});
})();
let CASE=1;
const C1DATA={ev:EVIDENCE.slice(), locs:LOCS.slice()};
function setCase(n){
  CASE=n;
  const X=CASE_DATA[n], ev=X?X.ev:n===2?EVIDENCE2:C1DATA.ev, lc=X?X.locs:n===2?LOCS2:C1DATA.locs;
  EVIDENCE.length=0; ev.forEach(e=>EVIDENCE.push(e));
  Object.keys(EV_BY_ID).forEach(k=>delete EV_BY_ID[k]); EVIDENCE.forEach(e=>{ EV_BY_ID[e.id]=e; });
  LOCS.length=0; lc.forEach(l=>LOCS.push(l));
  invLoc=null; invParent=null;
}
const SAVE2=role=>'yj-story-2-'+role;
function hasSave2(role){ try{ const v=JSON.parse(store.get(SAVE2(role))||'null'); return v&&v.phase?v:null; }catch(e){ return null; } }
function saveAt2(phase){ store.set(SAVE2(S.me==='rival'?'def':'pros'),JSON.stringify({phase:phase,found:[...S.found],seen:[...(S.seen||[])],trust:S.trust,misses:S.misses||0,presses:S.presses||0,log:S.log||[],forged:!!S.forged,used:[...(S.used||[])],talked:[...(S.talked||[])],unlocked:[...(S.unlocked||[])],flags:S.flags||{},verdicts:S.verdicts||[],tone:S.tone||'',when:Date.now()})); }
function clearSave2(role){ try{ localStorage.removeItem(SAVE2(role)); }catch(e){} }
function startCase2(role,resume){
  S.storyMode=false; setCase(2); S.case=2; S.role=role; adaptEnter(2); const sub=document.querySelector('.brand small,.brand span'); if(sub) sub.textContent='사건 2 「왕검성의 밤」';
  prepStory(); S.case=2; S.role=role; S.p2at=9; S.me=role==='def'?'rival':'player'; S.lines=[];
  let from=0; const v=resume?hasSave2(role):null;
  if(v){ S.found=new Set(v.found); S.seen=new Set(v.seen||[]); S.trust=v.trust||bellsMax(); S.misses=v.misses||0; S.presses=v.presses||0; S.log=v.log||[]; S.forged=!!v.forged; S.used=new Set(v.used||[]); S.talked=new Set(v.talked||[]); S.unlocked=new Set(v.unlocked||[]); S.flags=v.flags||{}; S.verdicts=v.verdicts||[]; S.tone=v.tone||''; from=v.phase; }
  else clearSave2(role);
  gagEv(); renderGauge(); track('start',{resume:!!v,from:from});
  (async()=>{ if(!from) await caseIntro(); (role==='def'?runDef2:runPros2)(from); })();
}

/* ---------- 공통: 프롤로그 ---------- */
async function prologue2(){
  bgm('crisis');
  await say('guide','normal','기원전 2세기 초, 고조선의 도읍 [[왕검성]].',{view:'prologue2'});
  await say('guide','normal','한밤중, 서쪽 들판에서 횃불 행렬이 성문으로 다가왔다.',{view:'prologue2'});
  Music.stop(0.6); await wait(500);
  await say('voice','normal','역사가 묻는다. 믿음을 저버린 자에게, [[어디까지가 죄]]인가.',{view:'prologue2'});
  await titleCard('사건 2','왕검성의 밤');
}
async function inv2(day,intro){ await titleCard(day+'일차','조사'); await investigate(day,intro); }

/* ---------- 검사 모드 ---------- */
async function runPros2(from){
  if(from<=0){ await prologue2(); bgm('investigate');
    await say('judge','normal','하람 검사, 두 번째 사건이오. 피고는 고조선의 왕위를 차지한 [[위만]].',{view:'lobby'});
    await say('rival','confident','이번엔 지지 않을 거예요. 피고에게도 할 말이 많거든요.',{view:'lobby'});
    await say('player','confident','증거가 말하게 하자.',{view:'lobby'}); }
  if(from<=1){ saveAt2(1); await inv2(1,'증거를 모으자. 성문 앞의 [[상인]]에게도 물어볼 수 있어. [[T]]로 이야기하고 [[P]]로 증거를 보여 줄 수 있어.'); }
  if(from<=2){ saveAt2(2); if(!await prosD1()) return; saveAt2(3); if(!await dayPause(1)) return; }
  if(from<=3){ saveAt2(3); await inv2(2,'오늘은 [[준왕]]이 궁궐 마당에 와 있어. 철기 공방도 열렸고, 망루에는 [[잠긴 곳]]이 있어.'); }
  if(from<=4){ saveAt2(4); if(!await prosD2()) return; saveAt2(5); if(!await dayPause(2)) return; }
  if(from<=5){ saveAt2(5); await inv2(3,'피고가 꺼낸 [[밀서]]를 따져야 해. 로비의 누리, 그리고 준왕이 떠났다는 [[바닷가 포구]]도 가 보자.'); }
  if(from<=6){ saveAt2(6); if(!await prosD3()) return; saveAt2(7); if(!await dayPause(3)) return; }
  if(from<=7){ saveAt2(7); await prosD4(); }
}
const W1=(phase)=>({key:'위만',who:'wiman',lines:[
  {text:'나는 연나라의 난리를 피해 조선으로 왔소. 준왕께서 나를 반겨 주셨지.',expr:'base',press:[[ME(),'normal','반겨 주셨다고요?'],['wiman','base','그렇소. 높은 자리도 주셨지.']]},
  {text:'서쪽 변경을 맡아 나라를 지켰을 뿐, 딴마음은 없었소.',expr:'base',press:[[ME(),'think','딴마음이 없었다면, 왜 군사를 이끌고 들어갔죠?'],['wiman','base','그건 다음 말을 들어 보시오.']]},
  {text:'그때 한나라 군대가 정말로 쳐들어오고 있었소.',expr:'base',lie:phase===2,need2:['C2','C3'],
   press:phase===1?[[ME(),'sweat','한나라 군대가요…? 그 말은 누구에게서 나온 거죠?'],['wiman','sweat','…의심되면 준왕께 물어보시오!'],['player','think','(준왕… 그날 밤 무슨 말을 들었는지 직접 들어 봐야겠어.)']]:[[ME(),'normal','정말로요?'],['wiman','base','그렇다니까!']],
   endOnPress:phase===1,
   hit:[['player','present','피고는 “한나라 군대가 온다”고 알렸습니다. 그런데 그 무렵 한나라가 고조선을 친 기록은 [[어디에도 없습니다]]!'],['player','confident','한나라가 쳐들어온 것은 그로부터 [[80년도 더 지난]] 기원전 109년입니다. 피고는 있지도 않은 침략을 핑계로 군사를 이끌고 들어온 겁니다!'],['wiman','sweat','크윽…!']]},
  {text:'왕을 지키러 군사를 이끌고 들어갔는데, 왕이 스스로 떠나셨소.',expr:'base',lie:phase===2,ev:'C8',press:[[ME(),'think','스스로 떠나셨다고요?'],['wiman','smug','그렇소.']],
   hit:[['player','present','쫓겨난 준왕은 측근을 이끌고 [[남쪽으로 내려가]] 새로 자리를 잡았습니다.'],['player','confident','스스로 떠난 것이 아니라 쫓겨난 것입니다!'],['wiman','sweat','크흠…!']]},
  {text:'나는 조선을 버린 적이 없소. 나라 이름도 그대로 두었지.',expr:'base',press:[[ME(),'think','(이건… 혐의 ②와 이어지는 말이야.)'],['wiman','base','내가 조선을 이었다는 증거요.']]},
  {text:'준왕께서 내게 맡긴 것은 서쪽 끝의 작은 마을 하나뿐이었소.',expr:'smug',lie:phase===1,ev:'C1',press:[[ME(),'normal','작은 마을 하나요?'],['wiman','smug','그렇소. 대단한 자리도 아니었지.']],
   hit:[['player','present','준왕은 피고를 박사로 삼고 홀을 내렸으며, [[서쪽 100리 땅]]을 맡겼습니다!'],['player','confident','작은 마을 하나라니요. 피고는 왕의 큰 믿음을 받은 사람입니다!'],['wiman','sweat','…크흠.']]}
]});
async function prosD1(){
  await courtOpen(1);
  await say('player','confident','혐의는 두 가지입니다. 첫째, 믿고 맡긴 왕을 속이고 [[왕위를 빼앗은 죄]]. 둘째, 고조선을 [[다른 나라 사람의 나라로 바꾼 죄]]입니다.');
  await say('wiman','smug','허, 거창하군.');
  await say('judge','stern','사건 2까지는 [[연습]]이오. 방울 일곱 개, 첫 실수부터 힌트를 주겠소. 그래도 엉뚱한 증거를 내면 방울이 깨지오.');
  bgm('testimony'); await titleCard('― 증언 ―','나는 왕을 지키러 들어갔을 뿐이다');
  const A=W1(1); for(let i=0;i<A.lines.length;i++) await say('wiman',A.lines[i].expr,A.lines[i].text,{testimony:true,tag:`증언 ${i+1}/5`});
  bgm('cross'); await titleCard('― 추궁 ―','더 묻고, 틀린 말에는 증거를 내세요');
  if(!await runCross(A)) return false;
  await say('judge','normal','증인 준왕은 내일 부르겠소. 오늘은 여기까지.');
  await gavel(); await titleCard('― 1일차 끝 ―','그날 밤, 준왕은 무엇을 들었나');
  return true;
}
async function prosD2(){
  await courtOpen(2);
  // 증인 준왕
  await say('player','confident','재판장님, 증인을 부르겠습니다. 쫓겨난 고조선의 왕, [[준왕]]입니다.');
  Music.sting('murmur'); await wait(1000); await gavel();
  bgm('testimony'); await say('jun','base','준이라 하오. …위만을 믿었던 어리석은 왕이지.');
  await titleCard('― 증언 ―','나는 위만을 믿었다');
  const T2={key:'준왕',who:'jun',solve:'reveal',lines:[
    {text:'나는 위만을 믿고 높은 자리와 땅을 주었소.',expr:'base',press:[['player','normal','얼마나 믿으셨나요?'],['jun','base','서쪽을 통째로 맡길 만큼.']]},
    {text:'위만은 서쪽을 잘 지켰소.',expr:'base',press:[['player','normal','그 뒤에는요?'],['jun','hesitate','…']]},
    {text:'그날 밤, 갑자기 군사들이 몰려왔지.',expr:'hesitate',reveal:3,press:[['player','think','갑자기요? 아무 예고도 없이?'],['jun','hesitate','…아니오. 그 전에…'],['jun','hesitate','하나 말하지 않은 것이 있소.']]},
    {text:'…그 전에 위만이 사람을 보내 왔소. “한나라 군대가 여러 길로 쳐들어오니, 들어가 왕을 지키겠다”고.',expr:'hesitate',hidden:true}
  ],onReveal:async()=>{ S.found.add('C2'); Music.sting('get'); showEvidence('C2'); await say('player','shock','([[거짓 경보]]…! 이게 있으면 피고의 말을 무너뜨릴 수 있어!)'); hideEvidence(); await say('judge','normal','증거 ‘거짓 경보’를 수첩에 넣으시오.'); }};
  bgm('cross'); if(!await runCross(T2)) return false;
  // 증언 1 다시: 두 증거 맞대기
  await say('judge','normal','피고, 다시 증언하시오.');
  const B=W1(2); B.onHit=async()=>{ bgm('open'); await say('rival','shock','그런…!'); };
  bgm('cross'); await titleCard('― 추궁 ―','이번엔 증거 [[두 개]]가 필요할지도 몰라');
  if(!await runCross(B)) return false;
  // 반전: 밀서
  Music.stop(0.05); await say('wiman','angry','잠깐! 내게도 증거가 있소!',{action:true}); flash(); shake();
  S.found.add('C10'); showEvidence('C10');
  await say('wiman','angry','준왕의 밀서요! 준왕이 먼저 [[나를 없애려]] 했소. 나는 살기 위해 움직였을 뿐이오. [[정당방위]]요!');
  hideEvidence(); bgm('crisis');
  await say('rival','smug','흥미롭네요. 검사, 이 문서를 반박하지 못한다면 변호인은 정당방위를 주장하겠습니다.');
  await say('judge','stern','피고가 내민 밀서는 내일 따지겠소. 검사는 반박할 준비를 하시오.');
  await gavel(); await titleCard('― 2일차 끝 ―','준왕의 밀서는 진짜인가');
  return true;
}
async function prosD3(){
  await courtOpen(3);
  S.found.add('C10');
  await say('judge','normal','어제 피고가 내민 [[준왕의 밀서]]부터 따지겠소. 피고, 증언하시오.');
  bgm('testimony');
  const T3={key:'밀서',who:'wiman',lines:[
    {text:'이 밀서에는 준왕의 도장이 찍혀 있소.',expr:'angry',press:[['player','think','도장이라…'],['wiman','angry','틀림없는 준왕의 도장이오!']]},
    {text:'“위만을 없애고, 낙랑의 군사로 서쪽을 막으라”고 적혀 있지.',expr:'angry',lie:true,ev:'C3',press:[['player','think','낙랑의 군사…?'],['wiman','smug','그렇소.']],
     hit:[['player','present','피고, ‘낙랑’은 한나라가 고조선을 무너뜨리고 [[기원전 108년]]에 둔 군의 이름입니다!'],['player','confident','준왕 때에는 있지도 않던 이름이 적힌 밀서. 이 문서는 [[훨씬 뒤에 만든 가짜]]입니다!'],['wiman','breakdown','으아아아악!']]},
    {text:'나는 살기 위해 움직였을 뿐이오.',expr:'angry',press:[['player','normal','살기 위해서요?'],['wiman','angry','그렇소!']]},
    {text:'이 밀서는 그날 밤 준왕의 신하가 몰래 내게 건넨 것이오.',expr:'angry',lie:true,ev:'C11',press:[['player','normal','그날 밤에요?'],['wiman','angry','그렇다니까!']],
     hit:[['player','present','포구의 뱃사공 말로는, 준왕 일행은 그날 밤 [[허둥지둥 배를 타고 떠났습니다]].'],['player','confident','몰래 편지를 꾸며 건넬 틈 따위는 없었습니다!'],['wiman','sweat','크윽…!']]}
  ],onHit:async()=>{ bgm('open'); await say('rival','smug','…역시. 그 정도는 알아봐야 상대할 맛이 나죠. 변호인은 정당방위 주장을 거두겠습니다.'); }};
  bgm('cross'); if(!await runCross(T3)) return false;
  await say('judge','normal','이제 혐의 ②를 다룹니다.');
  await say('rival','confident','피고는 [[상투를 틀고 조선 옷]]을 입고 왔습니다. 나라 이름도 [[조선]] 그대로였고요.');
  await say('rival','confident','고조선을 다른 나라 사람의 나라로 바꿨다는 혐의, 근거가 있나요? 내일 검사의 답을 듣겠어요.');
  await say('judge','normal','검사는 내일, 혐의 ②를 어떻게 할지 답하시오.');
  await gavel(); await titleCard('― 3일차 끝 ―','검사는 무엇을 따라야 하는가');
  return true;
}
async function prosD4(){
  await courtOpen(4);
  await say('judge','stern','검사, 혐의 ②를 계속 유지하겠소?');
  for(;;){
    const c=await choiceSheet('혐의 ②를 어떻게 하겠습니까?',[
      {t:'유지합니다. 피고는 다른 나라 사람이니까요.',ok:false,fb:'출신만으로 죄를 물을 수는 없소.'},
      {t:'유지합니다. 그래도 왕위를 빼앗았으니까요.',ok:false,fb:'그것은 혐의 ①에서 다루었소. 같은 일로 두 번 벌할 수 없소.'},
      {t:'혐의 ②를 거둡니다. 고조선을 이었다는 근거가 있고, ‘다른 나라 사람의 나라로 바꿨다’는 것은 증명되지 않습니다.',ok:true}]);
    if(c.ok){ await gainTrust(); break; }
    await say('judge','stern',c.fb); await loseTrust(); if(S.trust<=0){ await loseTrial(); return false; }
  }
  Music.stop(0.6); bgm('verdict');
  await say('player','normal','검사는 혐의 ②를 [[거둡니다]].');
  await say('judge','normal','검사는 이기려고만 하는 사람이 아니오. [[진실을 따르는 사람]]이오.');
  await say('rival','shock','…!');
  await say('judge','normal','판결에 앞서, 혐의 ①의 [[판결 종류]]와 [[이유]], [[근거]]를 대시오.');
  if(!await verdictKind('혐의 ① 배신과 왕위 찬탈','guilty',{q:'믿고 맡긴 왕을 거짓 경보로 속이고 군사로 몰아냈어요. 어떻게 판결할까요?',idx:0})) return false;
  if(!await reasonEv('혐의 ①(배신과 왕위 찬탈)을 유죄로 보는 가장 알맞은 이유는?',[
    {t:'피고는 있지도 않은 한나라의 침략을 핑계로 군사를 이끌고 들어와 왕을 몰아냈다.',ok:true,ev:['C2','C3']},
    {t:'피고는 연나라에서 온 사람이므로 왕이 될 자격이 없다.',ok:false,fb:'출신만으로 죄를 물을 수는 없소.'},
    {t:'피고가 왕이 된 뒤 나라가 커졌으므로 왕위를 빼앗은 것이 아니다.',ok:false,fb:'그것은 참작할 사정이지, 무죄의 이유가 아니오.'}])) return false;
  await verdict2('pros');
  return true;
}

/* ---------- 변호인 모드 (재설계 v3): 접견 · 의뢰인의 거짓 · 밀서 세 갈래 · 검사의 반격 · 참작 변론 ---------- */
async function runDef2(from){
  if(from<=0){ await prologue2(); bgm('investigate');
    await say('judge','normal','누리 변호인, 피고 [[위만]]의 변호를 맡아 주시오. 신참 법관이 그대 옆자리에서 함께하오.',{view:'lobby'});
    await say('player','confident','이번엔 내가 상대야. 봐주지 않을 거야.',{view:'lobby'});
    await say('rival','smug','변호인은 무죄를 만드는 사람이 아니에요. 피고가 [[받아야 할 몫보다 더]] 벌받지 않게 지키는 사람이죠.',{view:'lobby'}); }
  if(from<=1){ saveAt2(1); await inv2(1,'먼저 [[접견실]]에서 피고를 만나자. 성문 앞 [[상인]]과 궁궐 마당도 살펴볼 수 있어.'); }
  if(from<=2){ saveAt2(2); if(!await defD1()) return; saveAt2(3); if(!await dayPause(1)) return; }
  if(from<=3){ saveAt2(3); await inv2(2,'철기 공방과 망루, 박물관이 열렸어. 피고를 [[다시 접견]]해서 그날 밤의 진실을 물어보자.'); }
  if(from<=4){ saveAt2(4); if(!await defD2()) return; saveAt2(5); if(!await dayPause(2)) return; }
  if(from<=5){ saveAt2(5); await inv2(3,'내일은 하람이 [[연나라 상인]]을 증인으로 불러. 포구와 로비에서 검사 쪽 생각을 알아 두자. 피고도 한 번 더 만나 볼까?'); }
  if(from<=6){ saveAt2(6); if(!await defD3()) return; saveAt2(7); if(!await dayPause(3)) return; }
  if(from<=7){ saveAt2(7); await defD4(); }
}
async function defD1(){
  await courtOpen(1);
  await say('player','confident','혐의는 두 가지입니다. 첫째, [[왕위를 빼앗은 죄]]. 둘째, 고조선을 [[다른 나라 사람의 나라로 바꾼 죄]]!');
  await say('rival','confident','변호인 누리입니다. 사실은 하나씩 확인하겠습니다.');
  await say('player','confident','증인을 부르겠습니다. 쫓겨난 고조선의 왕, [[준왕]]입니다.');
  Music.sting('murmur'); await wait(900); await gavel();
  bgm('testimony'); await say('jun','base','준이라 하오. …위만을 믿었던 어리석은 왕이지.');
  await say('rival','think','(준왕은 이 사건의 [[피해자]]야. 어떻게 따져야 할까?)');
  const tone=await choiceSheet('피해자인 증인에게 어떤 말투로 물을까요?',[{t:'정중하게. 증인의 아픔은 인정하고, 기록과 다른 부분만 바로잡는다.',ok:true,tag:'polite'},{t:'날카롭게. 틀린 말은 거짓말이라고 몰아붙인다.',ok:true,tag:'sharp'}]);
  S.tone=tone.tag; track('tone',{tone:S.tone});
  const hit=S.tone==='polite'
    ?[['rival','present','증인의 기억을 탓하려는 게 아니에요. 다만 기록에는 위만이 [[상투를 틀고 조선 옷]]을 입고 왔다고 되어 있어요.'],['jun','hesitate','…그랬던가. 오래된 일이라 내 기억이 틀렸구려.'],['judge','normal','변호인, 정중하게 잘 바로잡았소.']]
    :[['rival','present','증인은 거짓말을 하고 있습니다! 기록에는 위만이 [[상투를 틀고 조선 옷]]을 입고 왔다고 되어 있어요!'],['jun','sweat','거, 거짓말이라니…! 나는 기억대로 말했을 뿐이오.'],['judge','stern','변호인, 증인은 이 사건의 피해자요. 틀린 기억과 거짓말은 다르오.']];
  await titleCard('― 증언 ―','나는 위만을 믿었다');
  const T={key:'준왕',who:'jun',allReveal:true,lines:[
    {text:'나는 위만을 믿고 높은 자리와 서쪽 땅을 주었소.',expr:'base',press:[['rival','normal','그만큼 믿으셨군요.'],['jun','base','서쪽을 통째로 맡길 만큼.']]},
    {text:'위만은 처음부터 [[연나라 옷차림]]으로 왔소. 우리와는 달랐지.',expr:'base',lie:true,ev:'C4',press:[['rival','think','연나라 옷차림이요?'],['jun','base','그렇게 기억하오.']],hit:hit},
    {text:'그날 밤, 갑자기 군사들이 몰려왔지.',expr:'hesitate',reveal:3,press:[['rival','think','아무 예고도 없이요?'],['jun','hesitate','…아니오. 그 전에 하나 들은 것이 있소.']]},
    {text:'…그 전에 위만이 사람을 보내 왔소. “한나라 군대가 여러 길로 쳐들어오니, 들어가 왕을 지키겠다”고.',expr:'hesitate',hidden:true,gives:['C2']}
  ],onHit:async()=>{ bgm('open'); await say('rival','think','(거짓 경보… 피고는 나에게도 “한나라 군대가 정말 왔다”고 했는데.)'); }};
  for(let i=0;i<3;i++) await say('jun',T.lines[i].expr,T.lines[i].text,{testimony:true,tag:`증언 ${i+1}/3`});
  bgm('cross'); await titleCard('― 추궁 ―','기억이 틀린 말은 정중하게 바로잡고, 숨은 말을 끌어내요');
  if(!await runCross(T)) return false;
  await say('judge','normal','오늘은 여기까지. 변호인은 피고가 군사를 이끌고 들어간 [[까닭]]을 다시 확인하시오.');
  await gavel(); await titleCard('― 1일차 끝 ―','의뢰인은 변호인에게도 거짓말을 했나');
  return true;
}
async function defD2(){
  await courtOpen(2);
  await say('player','confident','혐의 ①. 피고는 [[거짓 경보]]로 왕을 속이고 군사로 왕위를 빼앗았습니다.');
  for(;;){
    const c=await choiceSheet('변호인은 혐의 ①을 어떻게 다룰까요?',[
      {t:'준왕의 증언을 거짓말로 몰아 혐의를 무너뜨린다.',ok:false,fb:'준왕의 말은 기록과 맞소. 피해자를 거짓말쟁이로 몰지 마시오.'},
      {t:'위만은 왕위를 빼앗지 않았다고 주장한다.',ok:false,fb:'그것은 [[확정된 사실]]이오. 변호인도 부정할 수 없소.'},
      {t:'사실은 인정하고, 피고가 받아야 할 몫을 따지는 참작을 준비한다.',ok:true}]);
    if(c.ok){ await gainTrust(); break; }
    await say('judge','stern',c.fb); await loseTrust(); if(S.trust<=0){ await loseTrial(); return false; }
  }
  await say('rival','normal','변호인은 혐의 ①의 [[사실]]은 인정합니다. 다만 참작할 사정은 따로 말하겠습니다.');
  await say('wiman','angry','변호인! 내가 준 그 밀서를 내시오!',{action:true});
  bgm('crisis');
  const c=await choiceSheet('변호인의 판단: 피고가 건넨 준왕의 밀서를 어떻게 할까요?',[
    {t:'‘진위 미확인’이라고 밝히고, 참고로만 낸다.',ok:true,tag:'note'},
    {t:'밀서는 내지 않고, ‘철기와 나라의 성장’ 증거로 참작부터 세운다.',ok:true,tag:'growth'},
    {t:'밀서의 시대가 안 맞는 곳을 스스로 밝히고, 이 문서는 쓰지 않는다.',ok:true,tag:'reveal'}]);
  S.flags.mil=c.tag; track('mil',{path:c.tag});
  if(c.tag==='note'){
    await say('rival','normal','진위는 아직 확인하지 못했지만, 참고 자료로 [[준왕의 밀서]]를 내겠습니다.'); showEvidence('C10');
    Music.stop(0.02); await slam(); await shout('objection'); hideEvidence();
    await say('player','present','변호인, 그 밀서에 적힌 ‘낙랑’은 [[기원전 108년]]에야 생긴 이름입니다. 준왕 때 쓴 문서일 수 없어요!',{action:true});
    await say('judge','stern','변호인! 확인하지 않은 문서를 법정에 들이다니. [[변호인에게도 진실을 지킬 의무]]가 있소.');
    await loseTrust(); await loseTrust(); if(S.trust<=0){ await loseTrial(); return false; }
    await say('rival','sweat','…죄송합니다. 다시는 확인 없이 내지 않겠습니다.'); S.forged=true;
  } else if(c.tag==='growth'){
    await say('rival','normal','밀서는 내지 않겠습니다. 대신 피고가 다스린 뒤의 일을 보시죠.');
    if(!await presentFor('피고가 다스린 뒤 나라가 어떻게 되었는지 보여 줄 증거를 고르세요.',['C6'],{hint:'쇠로 만든 것들이 널리 쓰인 일을 보시오.',say:()=>'위만이 다스린 뒤 [[철기]]가 널리 퍼지고 나라 힘이 커졌습니다.'})) return false;
    await say('wiman','angry','…내 밀서는 왜 쓰지 않소.'); await say('rival','think','(피고가 마음을 닫았어. 하지만 확인 안 된 문서를 낼 수는 없어.)');
  } else {
    await say('rival','normal','재판장님, 변호인은 피고에게서 받은 문서를 [[스스로 밝히겠습니다]].');
    if(!await presentFor('밀서가 준왕 때 쓴 문서가 아님을 보여 줄 증거를 고르세요.',['C3'],{allowUsed:true,hint:'밀서에 적힌 지명이 언제 생겼는지 보시오.',say:()=>'밀서에는 ‘낙랑’이 적혀 있어요. 낙랑은 [[기원전 108년]]에야 생긴 이름입니다. 이 문서는 준왕이 쓴 것이 아니에요.'})) return false;
    await say('wiman','angry','변호인! 지금 나를 버리는 것이오?!',{action:true});
    await say('rival','normal','버리는 게 아니에요. 가짜로 얻은 판결은 [[피고를 지켜 주지 못해요]].');
    await say('judge','normal','…변호인에게도 진실을 지킬 의무가 있소. 그 의무를 지켰구려.'); S.ethics=true;
  }
  await say('judge','normal','혐의 ②는 내일, 검사의 증인을 들은 뒤에 따지겠소.');
  await gavel(); await titleCard('― 2일차 끝 ―','가짜로 이기는 변호인은 없다');
  return true;
}
async function defD3(){
  await courtOpen(3);
  await say('player','confident','혐의 ②의 증인입니다. 위만을 잘 아는 [[연나라 상인]]!');
  Music.sting('murmur'); await wait(800); await gavel();
  bgm('testimony'); await say('merchant','base','연나라에서 물건을 팔러 다니는 장사꾼이오. 이 말은 [[한 냥]]. 법정이니 공짜로 해 주지.');
  await titleCard('― 증언 ―','위만은 연나라 사람이었다');
  const T={key:'상인',who:'merchant',allReveal:true,wrongR:[[['merchant','smug','그 증거는 얼마요? 내 보기엔 반 냥도 안 되겠는데.']],[['merchant','base','엉뚱한 걸 내면 손해 보는 건 변호인이오. 흐흐.']],[['merchant','smug','그 물건, 내가 사 줄까? 싸게 쳐 주지.']]],lines:[
    {text:'위만은 연나라에서 온 사람이오. 이건 다들 아는 사실이지.',expr:'base',press:[['rival','normal','이의 있… 아니, 잠깐만요!'],['merchant','smug','이의는 [[두 냥]]이오.'],['judge','stern','법정에서 값을 매기지 마시오.'],['merchant','base','그 말씀은 공짜로 해 드리지.'],['rival','sweat','(…정말 못 말리겠네.)']]},
    {text:'위만은 연나라 옷을 입고 연나라 말만 썼소. 이 말은 [[석 냥]]짜리요.',expr:'base',lie:true,ev:'C4',press:[['rival','think','연나라 옷이라…'],['merchant','base','내 눈으로 봤다니까!']],
     hit:[['rival','present','기록에는 위만이 [[상투를 틀고 조선 옷]]을 입고 왔다고 되어 있어요!'],['rival','confident','증인의 말은 기록과 맞지 않습니다!'],['merchant','sweat','어, 어어…!']]},
    {text:'위만이 왕이 되자 조선 사람들은 모두 쫓겨났지.',expr:'base',reveal:3,press:[['rival','think','모두요? 한 사람도 남김없이?'],['merchant','sweat','그, 그게…']]},
    {text:'…뭐, [[조선 사람 관리들]]도 높은 자리에 있긴 했지만. ‘조선상’이니 ‘니계상’이니 하는 벼슬 말이오.',expr:'sweat',hidden:true,gives:['C12']},
    {text:'위만은 왕이 되자 나라 이름도 연나라식으로 바꿨소.',expr:'smug',lie:true,ev:'C5',press:[['rival','normal','나라 이름까지요?'],['merchant','smug','그렇다니까! 이 말은 닷 냥!']],
     hit:[['rival','present','성문 현판을 보세요. 위만이 왕이 된 뒤에도 나라 이름은 [[조선 그대로]]였어요!'],['rival','confident','증인의 말은 사실과 다릅니다!'],['merchant','sweat','아, 아니 그게…!']]}
  ],onHit:async()=>{ Music.sting('coins'); flash(); shake('quake'); await say('merchant','breakdown','내, 내 엽전이이이…!',{action:true}); await say('guide','normal','(상인의 주머니에서 엽전이 우수수 쏟아졌다. 똘방이 엽전을 주우러 뛰어든다.)'); await mukCut(); bgm('open'); }};
  for(const L of T.lines.filter(l=>!l.hidden)) await say('merchant',L.expr,L.text,{testimony:true});
  bgm('cross'); await titleCard('― 추궁 ―','상인의 거짓을 깨고, 숨은 말을 끌어내요');
  if(!await runCross(T)) return false;
  Music.stop(0.02); await shout('objection');
  await say('player','confident','변호인! 상투와 옷차림은 [[꾸밀 수 있습니다]]. 위만이 데려온 무리는 연나라 사람들이었습니다. 이 나라는 결국 연나라 사람의 나라가 된 겁니다!',{action:true});
  bgm('crisis'); await say('rival','sweat','(하람의 반격이야. 나라를 움직인 사람들이 누구였는지, 그리고 나라가 무엇을 이었는지를 함께 보여 줘야 해.)');
  if(!await presentPair('검사의 반격을 막을 두 증거를 고르세요.','C12','C5',{hint:'숨은 말로 얻은 증거와, 나라 이름을 보여 주는 증거를 함께 보시오.',say:'위만의 나라에서는 [[조선 땅에서 나고 자란 관리들]]이 높은 벼슬에 있었고, 나라 이름도 [[조선]] 그대로였어요. 다른 나라 사람의 나라로 바꾼 게 아니에요!'})) return false;
  Music.sting('realize'); bgm('turnabout');
  await say('player','sweat','크윽…! …좋아. 혐의 ②의 근거는 [[더 대지 못하겠어]].');
  await say('judge','normal','내일은 판결이오. 변호인은 피고가 받아야 할 [[몫]]을 따져 오시오.');
  await gavel(); await titleCard('― 3일차 끝 ―','피고가 받아야 할 몫은 얼마인가');
  return true;
}
async function defD4(){
  await courtOpen(4);
  await say('judge','normal','판결에 앞서 피고의 최후 진술을 듣겠소.');
  bgm('testimony');
  if(S.flags.mil==='reveal'){ S.flags.final=true;
    await say('wiman','sweat','…변호인이 내 밀서를 스스로 가짜라고 밝혔을 때, 나는 분했소.');
    await say('wiman','sweat','그러나 알았소. 나는 나를 믿어 준 왕을 [[속였소]]. 그 잘못은 내 것이오.');
    await say('judge','normal','피고의 말, 판결에 헤아리겠소.');
  } else {
    await say('wiman','smug','나는 나라를 키웠소. 그것만 기억해 주시오.');
    await say('judge','normal','…들었소.');
  }
  bgm('investigate');
  await say('judge','normal','변호인, 피고에게 헤아릴 [[참작할 사정]]을 대시오. 근거가 있는 것만 받아들이겠소.');
  const R=[
    {t:'철기를 널리 퍼뜨려 나라 힘을 키웠다.',ev:['C6'],ok:true},
    {t:'이웃 진번·임둔을 아울러 땅을 넓혔다.',ev:['C7'],ok:false,rebut:[['player','confident','이의 있습니다! 그 일은 진번·임둔 사람들에게는 [[침략]]이었습니다!'],['judge','normal','나라에는 공이지만, 다른 이에게는 아픔이었소. 참작으로는 받아들이지 않겠소.']]},
    {t:'연나라의 난리를 피해 떠돌던 처지였다.',ev:['C4'],ok:true}];
  let acc=0;
  for(const r of R){
    const c=await choiceSheet(`참작할 사정: “${r.t}” 이 사유를 주장할까요?`,[{t:'근거 증거와 함께 주장한다.',ok:true,tag:'argue'},{t:'이 사유는 주장하지 않는다.',ok:true,tag:'skip'}]);
    if(c.tag==='skip'){ track('mitig',{t:r.t,argue:false}); continue; }
    if(!await presentFor('이 사유의 근거 증거를 고르세요.',r.ev,{allowUsed:true,noGain:true,hint:'그 일을 적은 기록을 찾아보시오.'})) return false;
    if(r.ok){ acc++; await say('judge','normal','근거가 있소. [[참작]]하겠소.'); }
    else await line(r.rebut);
    track('mitig',{t:r.t,argue:true,ok:r.ok});
  }
  S.flags.mitig=acc+(S.flags.final?1:0);
  await say('judge','normal','변호인, 판결의 종류를 고르시오.');
  if(!await verdictKind('혐의 ① 배신과 왕위 찬탈','guilty',{q:'사실은 확정되었어요. 변호인도 이 판결은 막을 수 없어요. 어떻게 판결할까요?',idx:0})) return false;
  if(!await verdictKind('혐의 ② 다른 나라 사람의 나라로 바꾼 죄','innocent',{q:'관리와 나라 이름을 보면 고조선을 이었어요. 어떻게 판결할까요?',idx:1})) return false;
  if(!await reasonEv('혐의 ②가 무죄인 가장 알맞은 이유는?',[
    {t:'피고는 조선의 차림으로 왔고, 조선 출신 관리를 두고 나라 이름도 조선으로 두는 등 고조선을 이었다.',ok:true,ev:['C4','C5','C12']},
    {t:'피고가 나라를 크게 키웠으므로 무엇을 해도 괜찮다.',ok:false,fb:'공이 있다고 해서 다른 잘못이 사라지지는 않소.'},
    {t:'검사의 증인은 연나라 사람이니 믿을 수 없다.',ok:false,fb:'출신으로 증인을 판단하지 마시오. 증언의 내용을 따지시오.'}])) return false;
  await verdict2('def');
  return true;
}

/* ---------- 판결과 결과 ---------- */
async function verdict2(role){
  bgm('verdict'); await gavel();
  await say('judge','normal','판결을 내리겠소.');
  const mg=role==='def'?(S.flags.mitig||0):1, mtxt=mg>=3?'참작할 사정을 [[크게]] 헤아리오':mg>=1?'참작할 사정을 [[조금]] 헤아리오':'헤아릴 사정은 [[받아들여지지 않았소]]';
  await say('judge','normal',`혐의 ①. 피고는 믿고 맡긴 왕에게 [[있지도 않은 침략]]을 핑계로 군사를 이끌고 들어가 왕위를 빼앗았소. [[유죄]]. ${role==='def'?mtxt+'.':'다만 그 뒤 나라를 키운 일은 참작하오.'}`);
  await say('judge','normal',role==='pros'?'혐의 ②. 검사가 공소를 거두었으므로 [[더 판단하지 않소]].':'혐의 ②. 피고가 고조선을 이었다는 근거가 있고, 혐의는 증명되지 않았소. [[무죄]].');
  await say('judge','normal','같은 시대, 쫓겨난 준왕은 남쪽으로 가서 [[새로 자리를 잡았소]]. 사람마다 다른 선택이 있었소.');
  if(role==='def') await say('judge','normal','변호인은 피고의 죄를 없애는 사람이 아니라, [[받아야 할 몫만큼만]] 받게 하는 사람이오.');
  await filePaper({id:'C10',anach:'낙랑',say:'그리고 이 밀서는 [[따로 보관하시오]]. 법정 서고에서 흘러나온 종이 같소. ‘수상한 종이’ 묶음의 첫 장이오.'});
  await lessonPick(XD(2).lesson);
  Music.stop(1); clearSave2(role);
  // 포구의 뱃사공 이야기(C11)는 검사 모드 3일차에만 나오므로 변호인 모드의 셈에서 뺀다
  const notCounted=role==='def'?['C2','C10','C11','C12']:['C2','C10','C12'];
  const used=S.log.filter(x=>!x.ok).length, found=EVIDENCE2.filter(e=>!notCounted.includes(e.id)&&S.found.has(e.id)).length;
  const grade=role==='pros'?'진실을 따른 검사':(S.flags.mil==='reveal'&&(S.flags.mitig||0)>=2?'정의로운 변호인':(S.flags.mitig||0)>=1?'노련한 변호인':'견습 변호인');
  track('case_end',{grade:grade,trust:S.trust,wrongs:used,found:found,path:S.flags.mil||'',tone:S.tone||''});
  openSheet(`<h2>사건 2 결과 · ${role==='pros'?'검사':'변호인'}</h2>
    <div class="tier">${grade}</div>
    <p class="lead">${role==='pros'?'거짓 경보를 두 증거로 밝히고, 가짜 밀서의 시대착오를 잡고, 증명되지 않은 혐의를 스스로 거두었습니다.':(S.flags.mil==='reveal'?'의뢰인의 거짓을 깨고, 의뢰인이 건넨 가짜 밀서를 스스로 밝혔습니다.':S.flags.mil==='growth'?'가짜일지 모르는 밀서를 쓰지 않고 참작부터 세웠습니다.':'확인하지 않은 밀서를 냈다가 검사에게 잡혔습니다.')+' 증인의 거짓을 잡고, 확정 사실은 지키면서 참작할 사정을 세웠습니다.'}</p>
    ${v4ResultHTML([])}
    <ul class="res-list"><li>남은 해치 방울 ${S.trust}/${bellsMax()}</li>${role==='def'?`<li>받아들여진 참작 ${S.flags.mitig||0}가지</li><li>피해자 증인에게 ${S.tone==='polite'?'정중하게':'날카롭게'}</li>`:''}<li>헛 제시 ${used}번</li><li>조사에서 헛짚음 ${S.misses||0}번</li><li>스스로 찾은 증거 ${found}/${EVIDENCE2.filter(e=>!notCounted.includes(e.id)).length}</li>${role==='def'?`<li>변호인의 진실 의무 ${S.ethics?'지킴':'놓침'}</li>`:''}</ul>
    <h3>실제 역사에서는</h3>
    <p>위만이 세운 나라(위만 조선)는 철기 문화를 바탕으로 크게 성장했습니다. 그러나 손자 우거왕 때 한나라의 공격을 받아 기원전 108년에 무너졌고, 한나라는 그 땅에 낙랑 등의 군을 두었습니다.</p>
    <div class="sheet-foot"><button class="abtn primary" type="button" id="r2back">처음 화면으로</button></div>`,false);
  $('#r2back').addEventListener('click',()=>{ closeSheet(); backToRoles(); });
}
