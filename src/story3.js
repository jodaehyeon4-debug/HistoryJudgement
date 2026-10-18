/* ===== 사건 3 「한강의 배신」: 변호인 모드(기본, 누리) + 검사 모드('지는 검사', 하람) =====
   혐의 ① 동맹을 깨고 한강 하류를 빼앗은 죄 → 유죄(잠금)
   혐의 ② 성왕을 죽이라 명한 죄 → 무죄 (J4 관산성 기록, J5 김무력의 숨은 말)
   혐의 ③ 처음부터 한강을 홀로 차지하려 한 죄 → 무죄 (J2 551년 나누기, J7 순수비 연대)
   실존 인물(진흥왕·성왕·김무력)의 대사는 모두 상상입니다. */
addCast('jinheung',{name:'진흥왕',label:'피고 진흥왕',col:'#7a2430',spec:{skin:'#efc9a2',robe:'#7a2430',robe2:'#5a1822',collar:'cross',hat:'short',hair:'#1c1a20',beard:'none',iris:'#3a2a20'}});
addCast('seong',{name:'성왕',label:'피해자 성왕',col:'#2a5a5a',spec:{skin:'#ebc6a2',robe:'#25505a',robe2:'#1a3a42',collar:'cross',hat:'short',hair:'#d8d8d8',beard:'long',beardColor:'#e6e0d4',iris:'#3a2a20'}});
addCast('muryeok',{name:'김무력',label:'증인 김무력',col:'#5a2a2a',spec:{skin:'#e2b48a',robe:'#6a2a2a',robe2:'#4a1c1c',collar:'cross',hat:'short',hair:'#1c1a20',beard:'thin',iris:'#2e2018'}});
addCast('fisher',{name:'한강 나루 어부',label:'증인 어부',col:'#6a5038',spec:{skin:'#d9a77c',robe:'#7a6248',robe2:'#5a4634',collar:'cross',hat:'short',hair:'#2a2220',beard:'thin',iris:'#3a2a20'}});

const EVIDENCE3=[
  {id:'J1',type:'사료',icon:'alliance',title:'나제 동맹 기록',body:'433년 백제와 신라는 남쪽으로 내려오는 고구려에 맞서 손을 잡았다. 493년에는 백제 동성왕이 신라 귀족의 딸을 왕비로 맞아 동맹을 더 굳혔다.',src:'「삼국사기」',trust:3,note:'두 나라가 120년 넘게 한편이었다는 기록이에요.'},
  {id:'J2',type:'사료',icon:'map',title:'551년 한강 나누기',body:'551년 백제와 신라가 함께 고구려를 쳐서 한강 유역을 되찾았다. 백제는 한강 하류의 옛 땅 6군을, 신라는 한강 상류의 10군을 차지했다.',src:'「삼국사기」 거칠부 열전과 「일본서기」를 바탕으로 정리',trust:3,note:'551년에 한강 하류는 누구의 땅이었을까요?'},
  {id:'J3',type:'사료',icon:'map',title:'신주 설치 기록',body:'553년 7월, 신라가 백제의 동북쪽 땅(한강 하류)을 빼앗아 ‘신주’를 두고 김무력을 군주로 삼았다.',src:'「삼국사기」 신라본기 진흥왕 14년',trust:3,note:'동맹을 맺은 나라가 되찾은 땅을 빼앗은 기록이에요.'},
  {id:'J4',type:'사료',icon:'army',title:'관산성 전투 기록',body:'554년 백제 성왕이 가야·왜의 군사와 함께 신라의 관산성을 먼저 쳤다. 신주의 김무력이 군사를 이끌고 와서 맞섰다. 성왕은 몇십 명의 군사만 데리고 밤길을 가다가 숨어 있던 신라군을 만나 목숨을 잃었다.',src:'「삼국사기」 신라본기와 「일본서기」를 바탕으로 정리',trust:3,note:'누가 먼저 쳤는지, 성왕이 어떻게 목숨을 잃었는지 보세요.'},
  {id:'J5',reuse:true,type:'증언',icon:'scroll',title:'김무력의 증언',body:'“왕께서 내리신 명은 ‘관산성을 구원하라’였소. 성왕을 어찌하라는 말은 없었소.”',src:'2일차 법정, 김무력의 숨은 말 (대사는 상상)',trust:2,note:'왕의 명령과 싸움터에서 일어난 일을 나누어 보세요.'},
  {id:'J6',type:'지도',icon:'map',title:'서해 뱃길 지도',body:'한강 하구는 서해로 나가는 길목이다. 신라는 한강을 얻은 뒤 당항성(지금의 경기도 화성)을 거쳐 바닷길로 중국과 직접 오갈 수 있게 되었다.',src:'접견에서 들은 진흥왕의 이야기 · 사료 바탕',trust:2,note:'진흥왕이 한강을 원한 이유예요. 이유가 있으면 잘못이 사라질까요?'},
  {id:'J7',type:'유물',icon:'scroll',title:'북한산 순수비 탁본',body:'진흥왕이 새로 얻은 땅을 돌아보며(순수) 북한산 봉우리에 세운 비석의 탁본. 기록에 진흥왕이 북한산을 돌아본 것은 555년이고, 비석은 그 무렵이나 그 뒤에 세운 것으로 본다.',src:'북한산 비봉 · 「삼국사기」 진흥왕 16년',trust:3,note:'비석을 세운 해가 553년보다 앞설 수 있을까요?'},
  {id:'J8',type:'증언',icon:'scroll',title:'전해 들은 말',body:'“신라 왕이 성왕의 목을 베라 명했다더라.” 어부가 장터에서 들었다는 말이다. 누가 처음 한 말인지는 아무도 모른다.',src:'1일차 법정, 어부의 숨은 말 (상상)',trust:1,note:'직접 본 사람의 말일까요, 들은 말일까요?'},
  {id:'J9',type:'증언',icon:'scroll',title:'성왕의 진술',body:'“한강 하류는 76년 만에 되찾은 우리 옛 땅이었소. 그 땅을 2년 만에, 120년 넘게 손잡아 온 이웃에게 빼앗겼소.”',src:'3일차 법정, 피해자 진술 (대사는 상상)',trust:2,note:'피해를 입은 사람의 목소리예요.'},
  {id:'J10',type:'문서',icon:'scroll',fake:true,title:'익명의 쪽지',body:'“진흥왕이 성왕의 목을 베라 했다는 문서가 있다.” 보낸 사람의 이름이 없다.',src:'하람 검사가 법정 문틈에서 받은 쪽지 (게임 속 이야기)',trust:1,note:'문서가 있다는 말뿐이에요. 그 문서는 어디 있을까요?',
   zoom:{say:['쪽지의 귀퉁이를 크게 확대해 보았다.','오른쪽 아래에 작은 [[매화 모양 먹 얼룩]]이 찍혀 있다. 일부러 찍은 것처럼 또렷하다.','‘문서가 있다’는 말만 있고, 문서는 어디에도 없다. 누가 이 쪽지를 썼을까?'],plum:true,note:'귀퉁이에 매화 모양 먹 얼룩. 문서가 있다는 말만 있고 문서는 없다.'}},
  {id:'D1',type:'유물',icon:'censer',title:'신라 금관',body:'나뭇가지 모양 장식이 달린 신라의 금관. 경주의 큰 무덤들에서 나왔다.',src:'박물관 신라실',trust:3,note:'멋진 유물이지만, 이 재판의 쟁점과 이어질까요?'},
  {id:'D2',type:'유물',icon:'censer',title:'천마 말다래',body:'말 탄 사람의 다리에 흙이 튀지 않게 막는 말다래. 하늘을 나는 흰 말이 그려져 있다. 경주 천마총에서 나왔다.',src:'박물관 신라실',trust:3,note:'신라의 솜씨를 보여 주는 유물이에요.'},
  {id:'D3',type:'사료',icon:'scroll',title:'화랑 이야기',body:'진흥왕 때 나라에서 젊은이들의 모임인 화랑을 키웠다는 이야기.',src:'박물관 안내판 · 「삼국사기」',trust:3,note:'진흥왕이 한 일이지만, 지금 혐의와 이어질까요?'}
];
const C3CH=()=>[{t:'① 동맹을 깨고 한강 하류를 빼앗은 죄'},{t:'② 성왕을 죽이라 명한 죄'},{t:'③ 처음부터 한강을 홀로 차지하려 한 죄'}];

const LOCS3=[
  {id:'banwol',name:'반월성 접견실',time:'아침',role:'def',kind:'meet',intro:'신라의 궁궐 반월성. 피고 진흥왕이 변호인을 기다리고 있다.',miss:['…'],spots:[],
   npcs:[{who:'jinheung',expr:'base',place:{x:52,h:74,b:0},topics:[
     {id:'j1-alli',t:'백제와의 사이',lines:[['jinheung','base','백제와 우리는 백 년 넘게 한편이었소. 고구려가 내려올 때마다 서로 군사를 보냈지.'],['jinheung','serious','…그걸 부정할 생각은 없소.']]},
     {id:'j1-river',t:'한강 하류를 차지한 일',must:true,lines:[['jinheung','serious','553년, 내가 한강 하류를 차지하고 신주를 둔 것은 사실이오.'],['jinheung','serious','변호인이 그걸 감추려 한다면 그만두시오. 기록에 다 남아 있으니.'],['ME','think','(혐의 ①은 기록으로 확정된 일이구나. 그렇다면 다툴 것은 ②와 ③이야.)']]},
     {id:'j1-seong',t:'성왕의 죽음',lock:'J3',lockSay:'(진흥왕은 대답을 피한다. 신라가 한강에 무엇을 두었는지 보여 주면 이야기를 시작할지도 모른다.)',lines:[['jinheung','serious','신주를 두고 김무력을 보냈소. 이듬해 그 김무력이 관산성에서 백제군과 맞섰지.'],['jinheung','sweat','성왕이 그 싸움에서… 그 이야기는 김무력에게 직접 들으시오.']]},
     {id:'j2-gwan',t:'관산성 싸움',from:2,lines:[['jinheung','serious','성왕이 먼저 관산성을 쳤다는 소식을 듣고, 나는 김무력에게 [[구하러 가라]] 했소.'],['jinheung','angry','성왕을 죽이라고? 그런 명을 내린 적은 없소!']]},
     {id:'j2-sea',t:'한강이 왜 필요했나',from:2,lock:'J2',must:true,lockSay:'(진흥왕은 창밖만 본다. 551년에 한강을 어떻게 나누었는지 보여 주면 속마음을 꺼낼지도 모른다.)',
      lines:[['jinheung','serious','551년에 우리가 받은 것은 상류였소. 하류가 없으면 바다로 나갈 수가 없지.'],['jinheung','serious','한강 하구를 쥐면 [[서해 바닷길]]로 중국과 바로 오갈 수 있었소. 신라가 살 길이었지.'],['jinheung','sweat','…그 길이 백제가 76년 만에 되찾은 땅 위에 있었을 뿐이오.']],gives:['J6']}],
    present:{J3:{lines:[['jinheung','serious','신주… 그래, 내가 둔 것이오.']],unlock:'j1-seong'},J2:{lines:[['jinheung','serious','551년의 나누기라… 좋소, 그때 이야기를 하지.']],unlock:'j2-sea'},
      J1:{lines:[['jinheung','serious','그 동맹 문서… 내 할아버지 때보다도 오래된 약속이었지.']]},J8:{lines:[['jinheung','angry','누가 그런 말을 퍼뜨렸소! 나는 그런 명을 내린 적이 없소!']]},J4:{lines:[['jinheung','serious','관산성… 그 싸움으로 동맹은 완전히 끝났소.']]}},
    def:[['jinheung','base','그건 내가 할 말이 없는 물건이오.']]}]},
  {id:'hangang',name:'한강 나루',time:'해 질 녘',intro:'한강 하류의 나루터다. 언덕 위 성책에는 신라의 깃발이 걸려 있다.',
   miss:['젖은 모래다.','물결이 밀려왔다 간다.','갈대가 바람에 흔들린다.','발자국뿐이다.','작은 조개껍데기다. 단서는 아니다.'],
   spots:[
    {x:10,y:75,w:17,h:21,label:'상자 위 죽간 묶음',ev:'J1',say:['나무 상자 위에 죽간 두루마리가 묶여 있다.','백제와 신라가 [[손을 잡은 기록]]이다. 433년부터 이어진 약속, 나제 동맹.']},
    {x:9,y:39,w:11,h:24,label:'빈 나무 팻말',ev:'J2',say:['앞면은 비어 있는 나무 팻말이다.','뒷면에 칼로 긁은 지도가 있다. 551년, 한강 [[하류 6군은 백제]], [[상류 10군은 신라]]가 나누어 가졌다는 표시다.']},
    {x:12,y:4,w:22,h:26,label:'언덕 위 성책의 깃발',ev:'J3',say:['언덕 위 나무 성책에 붉은 깃발이 줄지어 걸려 있다.','문기둥에 나무패가 매달려 있다. “553년, 이곳에 [[신주]]를 둔다.” 신라가 이 땅을 차지한 표시다.']},
    {x:62,y:51,w:36,h:22,label:'묶여 있는 배',say:['지붕이 달린 나룻배다. 단서는 아니다.']},
    {x:55,y:66,w:9,h:11,label:'나무 부두',say:['낡은 나무 부두다. 삐걱거린다.']},
    {x:56,y:36,w:30,h:12,label:'노을 진 강물',say:['강물이 노을에 물들었다. 이 강을 두고 세 나라가 다투었다.']},
    {x:88,y:72,w:12,h:22,label:'갈대숲',say:['갈대가 우거져 있다. 아무것도 없다.']}],
   npcs:[{who:'fisher',expr:'base',place:{x:44,h:56,b:4},until:2,topics:[
     {id:'f-who',t:'누구세요?',lines:[['fisher','base','이 나루에서 고기 잡는 사람이오. 할아버지 때부터 백제 사람이지.']]},
     {id:'f-day',t:'그날의 나루',must:true,lines:[['fisher','base','신라 깃발이 저 성책에 걸리던 날을 잊지 못하오.'],['fisher','angry','함께 싸우자던 놈들이 우리 땅에 깃발을 꽂았지!']]},
     {id:'f-seong',t:'성왕 이야기',lock:'J3',lockSay:'(어부는 성책 쪽을 노려본다. 신라가 이 나루에 무엇을 두었는지 보여 주면 말을 꺼낼지도 모른다.)',lines:[['fisher','angry','신주라… 그 신주의 장수가 성왕을 죽였소.'],['fisher','base','장터에서 다들 그러던데. 신라 왕이 성왕을 베라 명했다고.'],['ME','think','(‘장터에서 다들 그러던데’… 직접 본 건 아닌가 봐.)']]}],
    present:{J3:{lines:[['fisher','angry','이 나무패! 저 성책에 걸려 있던 거요.']],unlock:'f-seong'},J1:{lines:[['fisher','angry','동맹? 그딴 걸 믿은 우리가 바보였지.']]},J2:{lines:[['fisher','base','551년엔 이 나루가 백제 땅이었소. 기뻤지… 2년 동안은.']]}},
    def:[['fisher','base','그건 고기 잡는 데 쓸모가 없겠구려.']]}]},
  {id:'gwansan',name:'관산성 터',time:'저녁',from:2,intro:'554년 백제와 신라가 크게 싸운 관산성의 터다. 무너진 성벽이 산등성이를 따라 남아 있다.',
   miss:['마른 풀이다.','돌 부스러기다.','바람이 차다.','아무것도 없다.','흙길이다.'],
   spots:[
    {x:3,y:60,w:21,h:27,label:'부서진 북',ev:'J4',say:['풀밭에 쓰러진 커다란 북이다. 가죽이 찢어져 있다.','북 안쪽에 접힌 천이 끼어 있다. 펼쳐 보니 [[관산성 싸움]]을 그린 지도다. 화살표가 아래에서 산성 쪽으로 뻗어 있다.']},
    {x:23,y:73,w:17,h:20,label:'흩어진 화살',say:['부러진 화살들이다. 어느 쪽 화살인지는 알 수 없다. 단서는 아니다.']},
    {x:63,y:21,w:20,h:32,label:'쓰러진 망루 문',say:['무너진 망루 문이다. 싸움이 얼마나 거셌는지 알 수 있다.']},
    {x:0,y:2,w:44,h:32,label:'무너진 돌 성벽',say:['산등성이를 따라 쌓은 돌 성벽이 무너져 있다.']},
    {x:40,y:42,w:18,h:30,label:'가운데 오솔길',say:['산성으로 오르는 오솔길이다.']},
    {x:84,y:60,w:12,h:35,label:'골짜기로 난 길',say:['골짜기 아래로 이어진 좁은 길이다. 밤에는 앞이 잘 보이지 않았을 것이다.']}]},
  {id:'bukhan',name:'북한산 비봉',time:'맑은 낮',from:3,intro:'북한산의 바위 봉우리다. 진흥왕이 세웠다는 비석이 서 있다. 아래로 한강이 굽이친다.',
   miss:['단단한 바위다.','이끼가 끼었다.','바람이 시원하다.','아무것도 없다.','작은 돌멩이다.'],
   spots:[
    {x:16,y:80,w:17,h:12,label:'바위 위의 천과 먹',ev:'J7',say:['바위 위에 하얀 천과 먹판이 놓여 있다. 누군가 [[탁본]]을 뜨려던 것 같다.','비석에 종이를 대고 먹을 두드려 글자를 떠냈다. 진흥왕이 이 땅을 돌아보고(순수) 세운 비석이다. 기록에 진흥왕이 북한산에 온 해는 [[555년]].']},
    {x:10,y:20,w:16,h:58,label:'돌비석',say:['오래된 돌비석이다. 글자가 닳아서 맨눈으로는 읽기 어렵다.','종이와 먹이 있으면 탁본을 떠서 읽을 수 있을 텐데.']},
    {x:28,y:22,w:22,h:40,label:'소나무',say:['바위틈에 뿌리를 내린 소나무다.']},
    {x:68,y:58,w:32,h:22,label:'굽이치는 한강',say:['저 아래로 한강이 흐른다. 이 강을 차지한 나라가 서해로 나갈 수 있었다.']},
    {x:50,y:3,w:40,h:22,label:'맑은 하늘',say:['구름 한 점 없다.']}]},
  {id:'museum3',name:'박물관 신라실',time:'저녁',from:3,intro:'오늘날의 박물관 신라실이다. 반짝이는 유물이 많지만, 쟁점과 이어지는 것은 많지 않다.',
   miss:['반질반질한 바닥이다.','어두운 벽이다.','조명이 비칠 뿐이다.','아무것도 없다.'],
   spots:[
    {x:3,y:5,w:25,h:82,label:'금관 진열장',ev:'D1',say:['나뭇가지 모양 장식이 달린 [[신라 금관]]이다. 경주의 큰 무덤에서 나왔다.','멋진 유물이지만, 이 재판의 쟁점과 관계가 있을까?']},
    {x:40,y:49,w:24,h:26,label:'흰 말 그림 진열장',ev:'D2',say:['하늘을 나는 흰 말이 그려진 [[천마 말다래]]다.','신라의 솜씨가 대단하다. 하지만 한강과는 관계가 없어 보인다.']},
    {x:68,y:46,w:28,h:46,label:'안내판',ev:'D3',say:['안내판에 진흥왕 이야기가 적혀 있다. “진흥왕 때 나라에서 [[화랑]]을 키웠다.”','진흥왕이 한 일이긴 한데… 지금 혐의와 이어질까?']},
    {x:61,y:16,w:15,h:28,label:'뒷벽의 탁본 액자',say:['비석 탁본을 본뜬 액자다. 진짜 비석에서 떠 온 것은 아니라고 적혀 있다.','진짜 비석을 직접 보러 가야 확실하겠다.']},
    {x:33,y:13,w:16,h:42,label:'창밖 야경',say:['창밖으로 도시의 불빛과 산이 보인다.']}]},
  {id:'lobby',name:'법정 로비',time:'저녁',from:3,intro:'재판이 끝난 법정 로비다.',
   miss:['반들반들한 마룻바닥이다.','빈 의자다.','아무것도 없다.'],
   spots:[{x:5,y:62,w:31,h:22,label:'긴 의자',say:['나무 의자다.']},{x:36,y:28,w:22,h:40,label:'법정 문',say:['내일 다시 열릴 법정의 문이다.']}],
   npcs:[
    {who:'player',expr:'upset',role:'def',place:{x:72,h:70,b:0},topics:[
      {id:'h-feel',t:'백제 편',lines:[['player','upset','…나도 알아. 법정은 편을 드는 곳이 아니라는 거.'],['player','upset','그래도 76년 만에 되찾은 땅을 2년 만에 빼앗겼잖아. [[나도 백제 편이 되고 싶었어]].']]},
      {id:'h-note',t:'혐의 ②를 세운 까닭',must:true,lines:[['player','upset','…사실, 재판 전에 법정 문틈에서 쪽지를 받았어.'],['player','upset','“진흥왕이 성왕의 목을 베라 했다는 문서가 있다.” 그 말만 믿고 혐의를 세웠지.'],['rival','think','(그 문서는 지금 어디 있지? 이 쪽지, [[확대해서]] 살펴봐야겠어.)']],gives:['J10']}],
     present:{J7:{lines:[['player','upset','555년… 응, 나도 봤어.']]},J10:{lines:[['player','upset','그 쪽지… 누가 보냈는지 나도 몰라.']]}},
     def:[['player','upset','지금은 그걸로 다투고 싶지 않아.']]},
    {who:'rival',expr:'smug',role:'pros',place:{x:72,h:70,b:0},topics:[
      {id:'n-kids',t:'방청석의 아이들',must:true,lines:[['rival','normal','하람, 방청석 아이들이 다 백제 편이지? 그 마음에 맞춰 주고 싶은 거, 나도 알아.'],['rival','confident','그런데 [[아이들 편이 되는 것과 정의 편이 되는 건 달라]].'],['player','upset','…알아. 안다고.']]},
      {id:'n-note',t:'익명의 쪽지',lock:'J10',lockSay:'(누리에게 그 쪽지를 보여 줄까?)',lines:[['rival','think','이 쪽지가 혐의 ②의 근거였어? 문서가 있다면서, 그 문서는 어디 있는데?'],['rival','normal','그리고 하람, 이거 [[확대해]] 봤어? 귀퉁이에 뭔가 찍혀 있는 것 같은데.']]}],
     present:{J10:{lines:[['rival','shock','쪽지…? 보여 줘 봐.']],unlock:'n-note'},J7:{lines:[['rival','normal','555년이지. 553년보다 뒤야.']]}},
     def:[['rival','normal','그걸로 날 흔들 수 있을까?']]}]}
];
const TERMS3=[
  {w:'동맹',d:'서로 돕기로 한 약속이에요.',ic:'🤝'},
  {w:'나제 동맹',d:'백제(제)와 신라(나)가 고구려에 맞서 맺은 동맹이에요. 433년에 시작됐어요.',ic:'🤝'},
  {w:'신주',d:'신라가 553년 한강 하류를 차지하고 새로 둔 행정 구역이에요.',ic:'🏯'},
  {w:'군주',d:'여기서는 신라에서 한 지역의 군대를 맡은 장수를 말해요. 왕(군주)과 헷갈리지 마세요.',ic:'🛡️'},
  {w:'순수',d:'왕이 새로 얻은 땅을 돌아보며 살피는 일이에요.',ic:'👣'},
  {w:'탁본',d:'비석에 종이를 대고 먹을 두드려 새겨진 글자를 떠내는 방법이에요.',ic:'🖌️'},
  {w:'접견',d:'변호인이 피고를 따로 만나 이야기를 듣는 일이에요.',ic:'💬'},
  {w:'논고',d:'검사가 피고의 죄와 그 근거를 법정에서 정리해 말하는 것이에요.',ic:'📜'},
  {w:'취하',d:'검사가 세운 혐의를 스스로 거두는 것이에요.',ic:'↩️'},
  {w:'전해 들은 말',d:'직접 보지 않고 다른 사람에게서 들은 말이에요. 증거로서 힘이 약해요.',ic:'👂'}
];

/* ---------- 증언 묶음 ---------- */
const T3fish=()=>({key:'어부',who:'fisher',allReveal:true,lines:[
  {text:'나는 이 한강 나루에서 평생 고기를 잡은 사람이오.',expr:'base',press:[['rival','normal','평생이요? 그럼 551년 일도 기억하세요?'],['fisher','base','기억하다마다. 내가 젊을 때였지.']]},
  {text:'551년, 백제와 신라가 함께 고구려를 몰아냈지. 그날은 정말 기뻤소.',expr:'base',press:[['rival','think','(그때까지는 함께 싸웠구나.)'],['fisher','base','그런데 기쁨은 오래가지 않았소.']]},
  {text:'그런데 바로 그해, 신라 놈들이 이 나루까지 몽땅 차지했소!',expr:'angry',lie:true,ev:'J2',press:[['rival','normal','바로 그해에요?'],['fisher','angry','그렇다니까! 551년에!']],
   hit:[['rival','present','551년의 기록입니다. 그해 한강 [[하류 6군]]은 백제가, [[상류 10군]]은 신라가 나누어 가졌어요.'],['rival','confident','이 나루가 신라 땅이 된 건 551년이 아니라 [[553년]]입니다. 증인의 말은 2년이나 앞당겨졌어요!'],['fisher','angry','으, 으윽… 몇 해 차이가 뭐 그리 대수요!']]},
  {text:'그리고 성왕을 죽이라 명한 것도 신라 왕이오. 내가 똑똑히 알지!',expr:'angry',reveal:4,press:[['rival','think','똑똑히 안다고요? 증인, 그걸 [[직접 보셨나요]]?'],['fisher','base','그, 그건…'],['judge','stern','증인, 본 것과 들은 것을 나누어 증언하시오.']]},
  {text:'…직접 본 건 아니오. 장터에서 다들 그렇게 말하더란 말이오.',expr:'base',hidden:true,gives:['J8']}
]});
const T3mu=me=>({key:'김무력',who:'muryeok',allReveal:true,lines:[
  {text:'나는 신주의 군주 김무력이오. 관산성 싸움에 나갔소.',expr:'base',press:[[me,'normal','군주라면 신주의 군대를 맡은 장수군요.'],['muryeok','base','그렇소. 신주를 둔 이듬해의 일이었지.']]},
  {text:'554년 그날, 우리 신라군이 먼저 관산성의 백제군을 들이쳤소.',expr:'base',lie:true,ev:'J4',press:[[me,'normal','신라군이 먼저요?'],['muryeok','base','그렇소. 우리가 먼저 쳤지!']],
   hit:[[me,'present','관산성 싸움의 기록입니다. 554년, 관산성을 [[먼저 친 것은 백제]] 쪽이었어요.'],[me,'confident','신라군이 먼저 들이쳤다는 말은 기록과 맞지 않습니다!'],['muryeok','sweat','크흠… 싸움터에서는 누가 먼저인지 헷갈리기도 하오.']]},
  {text:'나는 왕의 명을 받들어 움직였을 뿐이오.',expr:'base',reveal:3,press:[[me,'normal','그 명이 정확히 무엇이었죠?'],['muryeok','sweat','그, 그건… 꼭 말해야 하오?'],['judge','stern','증인, 받은 명령을 그대로 증언하시오.']]},
  {text:'…왕께서 내리신 명은 ‘관산성을 구원하라’였소. 성왕을 어찌하라는 말은 없었소.',expr:'sweat',hidden:true,gives:['J5']},
  {text:'성왕의 목숨을 거두라는 것도 왕의 뜻이었소!',expr:'base',lie:true,ev:'J5',press:[[me,'think','왕의 뜻이라고요?'],['muryeok','base','그, 그렇게 생각했소!']],
   hit:[[me,'present','증인이 방금 한 말입니다. 왕의 명은 [[‘관산성을 구원하라’]]뿐이었어요.'],[me,'confident','성왕의 목숨을 거두라는 명은 없었습니다. 증인의 말이 서로 어긋나요!'],['muryeok','sweat','으, 으윽…!']]}
]});
const T3haram=reveal=>({key:'하람 논고',who:'player',lines:[
  {text:'혐의 ③. 피고는 처음부터 한강을 홀로 차지할 속셈으로 백제와 손을 잡았습니다.',expr:'stand',press:[['rival','normal','‘처음부터’라는 근거는요?'],['player','stand','다음 말을 들어 보세요.']]},
  {text:'그 증거가 북한산 순수비예요. 피고는 551년, 백제와 함께 싸우던 바로 그해에 벌써 북한산에 자기 비석을 세웠습니다!',expr:'stand',lie:true,ev:'J7',press:[['rival','think','551년에 비석을…?'],['player','stand','그래요. 처음부터 노렸다는 증거죠.']],
   hit:[['rival','present','북한산 순수비의 탁본입니다. 진흥왕이 북한산을 돌아본 것은 [[555년]]이에요.'],['rival','confident','비석은 553년에 신주를 둔 [[뒤에]] 세운 것이지, 551년에 세운 게 아닙니다!'],['player','upset','…그, 그건 들은 이야기라서…']]},
  reveal?{text:'피고가 한강을 원한 까닭은 백제를 괴롭히려는 것 말고는 아무것도 없었어요.',expr:'stand',lie:true,ev:'J6',press:[['rival','think','아무것도 없었다고요?'],['player','stand','네. 미워서 빼앗은 거예요.']],
   hit:[['rival','present','한강 하구는 [[서해 바닷길]]의 문이었어요. 신라는 그 길로 중국과 오가려 했습니다.'],['rival','normal','이유가 있었다고 빼앗은 일이 옳아지는 건 아니에요. 하지만 ‘미워서 빼앗았을 뿐’이라는 말은 사실과 달라요.'],['player','upset','…']]}
   :{text:'피고가 한강을 원한 까닭은 백제를 괴롭히려는 것 말고는 아무것도 없었어요.',expr:'stand',press:[['rival','think','(진흥왕의 이유를 말하면 반박할 수 있는데… 숨기기로 했잖아.)'],['player','stand','반박하지 못하시는군요.']]},
  {text:'551년에 함께 싸운 것도 결국 한강을 노린 속임수였습니다.',expr:'stand',press:[['rival','normal','그때 한강 하류는 누가 가졌죠?'],['player','sweat','…백제요.'],['rival','confident','속임수였다면 왜 하류를 백제에 두었을까요?']]}
]});
const SEONG3=[['base','백제의 왕, 성왕이오.'],['base','한강 하류는 475년 고구려에 빼앗긴 뒤 [[76년 만에]] 되찾은 우리 옛 땅이었소.'],['sad','그 땅을 2년 만에, 120년 넘게 손잡아 온 이웃에게 빼앗겼소.'],['sad','나는 아들을 도우러 관산성으로 가다가… 골짜기에서 목숨을 잃었소.'],['base','내가 바라는 것은 하나요. [[있었던 일]]만큼은 지우지 말아 주시오.']];

/* ---------- 공통 장면 ---------- */
async function prologue3(){
  bgm('crisis');
  await say('guide','normal','553년 가을, 한강 하류.',{view:'prologue3'});
  await say('guide','normal','백제가 76년 만에 되찾은 땅에, 함께 싸운 신라의 붉은 깃발이 올랐다.',{view:'prologue3'});
  await say('guide','normal','그리고 이듬해, 관산성의 골짜기.',{view:'prologue3'});
  await playShadow('gwansan');
  await wait(400);
  await say('voice','normal','역사가 묻는다. 미운 사람에게도, [[증명된 만큼만]] 죄를 물을 수 있는가.',{view:'prologue3'});
  await titleCard('사건 3','한강의 배신');
}
async function chargesRead(){
  await say('judge','normal','검사는 혐의를 말하시오.');
  await say('player','confident','혐의는 세 가지입니다. 첫째, 120년 넘게 이어 온 [[동맹을 깨고 한강 하류를 빼앗은 죄]].');
  setCharges(C3CH());
  await say('player','confident','둘째, 관산성에서 [[성왕을 죽이라 명한 죄]]. 셋째, [[처음부터 한강을 홀로 차지하려 한 죄]]입니다!');
  Music.sting('murmur'); await wait(700);
  await say('jinheung','base','흥. 하나는 맞고, 둘은 부풀렸군.');
}
async function seongStatement(){
  await victim('seong',SEONG3,'판결에 앞서, 피해를 입은 사람의 이야기를 듣겠습니다. 증인은 백제의 [[성왕]]이오.');
  if(!S.found.has('J9')){ S.found.add('J9'); Music.sting('get'); showEvidence('J9'); await say('guide','normal','증거 수첩에 [[성왕의 진술]]을 넣었다.'); hideEvidence(); }
}
async function verdictLines3(){
  bgm('verdict'); await gavel();
  await say('judge','normal','판결을 내리겠소.');
  chargeSt(0,'guilty'); await say('judge','stern','혐의 ①. 피고는 120년 넘게 이어 온 동맹을 깨고, 백제가 되찾은 한강 하류를 빼앗았소. [[유죄]].');
  if(S.flags.drop&&S.flags.drop[1]) await say('judge','normal','혐의 ②. 검사가 스스로 거두었소. [[더 판단하지 않소]].');
  else { chargeSt(1,'innocent'); await say('judge','normal','혐의 ②. 성왕은 싸움터에서 목숨을 잃었고, 피고가 죽이라 명했다는 증거는 없소. 전해 들은 말과 이름 없는 쪽지로는 벌할 수 없소. [[무죄]].'); }
  if(S.flags.drop&&S.flags.drop[2]) await say('judge','normal','혐의 ③. 검사가 스스로 거두었소. [[더 판단하지 않소]].');
  else { chargeSt(2,'innocent'); await say('judge','normal','혐의 ③. 551년에 한강 하류는 백제 땅이었고, 순수비는 그 뒤에 세운 것이오. ‘처음부터’ 노렸다는 것은 증명되지 않았소. [[무죄]].'); }
  await say('judge','normal','미운 피고에게도, 법정은 [[증명된 만큼만]] 죄를 묻소. 그러나 증명된 죄는 하나도 지우지 않소.');
}
const HIST3='553년 신라는 백제가 76년 만에 되찾은 한강 하류를 빼앗아 신주를 두었고, 이듬해 성왕은 관산성을 치다가 목숨을 잃었습니다. 120년 넘게 이어진 나제 동맹은 이렇게 깨졌습니다. 신라는 한강과 서해 바닷길을 얻어 훗날 삼국 통일의 바탕을 마련했습니다. 진흥왕은 새로 넓힌 땅을 돌아보며 순수비를 세웠는데, 북한산비를 언제 세웠는지는 학자마다 의견이 조금씩 다릅니다.';

/* ---------- 변호인 모드 (기본) ---------- */
async function runDef3(from){
  if(from<=0){ await prologue3(); bgm('investigate');
    await say('judge','normal','누리 변호인, 이번 사건의 피고는 신라의 [[진흥왕]]이오. 변호를 맡아 주시오.',{view:'lobby'});
    await say('rival','shock','…백제를 배신한 왕이요?',{view:'lobby'});
    await say('player','confident','이번엔 내가 검사야. 봐주지 않을 거야. 혐의가 세 개나 되거든.',{view:'lobby'});
    await say('rival','think','(세 개 다 증명할 수 있을까? 미운 피고라도 [[증명된 만큼만]] 벌받아야 해.)',{view:'lobby'});
    await say('judge','normal','변호인은 피고를 [[접견]]할 수 있소. 반월성에서 피고를 만나 보시오.',{view:'lobby'}); }
  await playDays([
    {inv:async()=>{ await toneScene(); await invDay(1,'반월성의 [[진흥왕]]과 이야기하고, [[한강 나루]]도 조사하자. 피고를 만나는 접견실에는 돋보기가 없어. [[T]]로 이야기, [[P]]로 증거를 보여 줄 수 있어.'); },
     court:defD1_3,learned:['553년 신라가 한강 하류를 빼앗은 것은 기록으로 확정된 사실이다.','551년에는 한강 하류가 백제 땅, 상류가 신라 땅이었다.','‘장터에서 들은 말’은 직접 본 말과 무게가 다르다.']},
    {inv:async()=>{ await invDay(2,'오늘은 [[관산성 터]]가 열렸어. 반월성의 진흥왕에게도 다시 물어볼 게 있어.'); await motiveScene(); },
     court:defD2_3,learned:['554년 관산성 싸움은 백제가 먼저 공격했다.','김무력이 받은 왕의 명령은 ‘관산성을 구원하라’였다.','싸움터에서 일어난 일과 왕이 명한 일은 나누어 따진다.']},
    {inv:async()=>{ await invDay(3,'[[북한산 비봉]]과 [[박물관 신라실]]이 열렸어. 로비에 하람이 혼자 있대.'); },
     court:defD3_3,learned:['북한산 순수비는 553년보다 뒤, 555년 무렵 이후에 세운 것으로 본다.','신라가 한강을 원한 데에는 바닷길이라는 이유가 있었다.','이유가 있다는 것과 잘못이 없다는 것은 다르다.']},
    {court:defD4_3}
  ],from);
}
async function toneScene(){
  bgm('testimony');
  await say('jinheung','base','변호인인가. 어린 변호인을 보냈군.',{view:'banwol'});
  const c=await choiceSheet('진흥왕에게 첫인사를 어떻게 할까요?',[
    {t:'안녕하십니까, 폐하. 변호를 맡은 누리입니다. 사실대로만 말씀해 주시면 끝까지 지키겠습니다.',ok:true,tag:'polite'},
    {t:'백제를 배신하셨다면서요? 저도 변호하기 싫지만 일이니까 하는 거예요.',ok:true,tag:'sharp'}]);
  S.flags.tone=c.tag; track('tone',{tone:c.tag});
  if(c.tag==='polite'){ await say('jinheung','serious','…예를 갖추는군. 좋소, 사실대로 말하지.',{view:'banwol'}); }
  else { await say('jinheung','angry','무례하구나! …변호인이 날 미워한다면, 내 말을 제대로 들을 수 있겠소?',{view:'banwol'}); await say('rival','think','(…미운 피고라도, 말은 끝까지 들어야 하는데.)',{view:'banwol'}); }
}
async function motiveScene(){
  bgm('testimony');
  await say('jinheung','serious','변호인, 내가 한강을 원한 진짜 까닭을 들었지. [[바닷길]] 말이오.',{view:'banwol'});
  await say('jinheung','sweat','욕심처럼 들릴 수도 있소. 법정에서 말할 텐가?',{view:'banwol'});
  const c=await choiceSheet('진흥왕이 한강을 원한 까닭(서해 바닷길)을 법정에서 어떻게 할까요?',[
    {t:'숨기지 않는다. 이유가 있어도 사실은 사실이고, 이유도 사실이다.',ok:true,tag:'reveal'},
    {t:'숨긴다. 욕심처럼 들려 피고에게 불리할 수 있다.',ok:true,tag:'hide'}]);
  S.flags.motive=c.tag; track('path',{motive:c.tag});
  if(c.tag==='reveal') await say('rival','confident','숨기지 않을게요. 법정은 [[있었던 일]]을 다 보는 곳이니까요.',{view:'banwol'});
  else await say('rival','think','(…일단은 말하지 않는 게 낫겠어.)',{view:'banwol'});
}
async function defD1_3(){
  await courtOpen(1);
  await chargesRead();
  await say('judge','normal','변호인, 혐의마다 입장을 밝히시오. 먼저 혐의 ①.');
  if(!await choose('혐의 ①(동맹을 깨고 한강 하류를 빼앗은 죄)에 대해 변호인은?',[
    {t:'혐의 ①은 다툽니다. 진흥왕은 한강을 빼앗지 않았습니다.',ok:false,fb:'553년 신라가 한강 하류를 빼앗아 신주를 둔 것은 기록으로 확정된 사실이오. 변호인도 부정할 수 없소.'},
    {t:'혐의 ①의 사실은 인정합니다. 다만 혐의 ②와 ③은 증거로 다투겠습니다.',ok:true},
    {t:'피고는 나라를 위해 그랬으니 죄가 없습니다.',ok:false,fb:'이유가 있다고 해서 일어난 일이 사라지지는 않소.'}])) return false;
  await say('player','shock','(…혐의 ①을 인정한다고?)');
  await say('jinheung','angry','변호인! 내 편이 아니었소?');
  await say('rival','confident','제 일은 폐하를 무죄로 만드는 게 아니에요. [[증명된 만큼만]] 벌받게 지키는 거예요.');
  await say('player','confident','그럼 증인을 부르죠. 한강 나루에서 평생 고기를 잡은 [[어부]]입니다.');
  Music.sting('murmur'); await wait(800); await gavel();
  bgm('testimony'); await say('fisher','angry','백제 사람이오! 할 말이 많소!');
  const T=T3fish(); T.onHit=async()=>{ bgm('open'); await say('player','sweat','크윽…!'); };
  if(!await testimony(T,'신라가 모든 것을 빼앗았다')) return false;
  await say('judge','normal','증인의 말 가운데 [[직접 본 것]]과 [[들은 것]]을 나누어 들어야 하오.');
  await say('player','sweat','…그래도 성왕이 신라군에게 목숨을 잃은 건 사실이에요! 내일, 그 싸움에 나간 [[신라 장수]]를 부르겠습니다.');
  await say('judge','normal','좋소. 오늘은 여기까지 하겠소.');
  await gavel(); await titleCard('― 1일차 끝 ―','관산성에서 무슨 일이 있었나');
  return true;
}
async function defD2_3(){
  await courtOpen(2);
  await say('player','confident','증인을 부르겠습니다. 신주의 군주, [[김무력]]입니다.');
  Music.sting('murmur'); await wait(800); await gavel();
  bgm('testimony'); await say('muryeok','base','김무력이오. 관산성에서 싸운 장수지.');
  const T=T3mu('rival');
  if(!await testimony(T,'나는 왕의 명을 받들었다')) return false;
  Music.stop(0.02); await shout('objection'); bgm('crisis');
  await say('player','confident','이의 있습니다! 명령에 없었다 해도 신라 장수가 한 일이에요. 그 나라의 왕이 책임져야죠!',{action:true});
  if(!await choose('하람의 말에 어떻게 답할까요?',[
    {t:'싸움터에서 목숨을 잃은 것과, 왕이 죽이라 명한 것은 다릅니다. 혐의 ②는 ‘명한 죄’입니다.',ok:true},
    {t:'성왕이 먼저 쳐들어왔으니 목숨을 잃어도 어쩔 수 없습니다.',ok:false,fb:'그것은 피해자를 탓하는 말이오. 혐의의 내용을 따지시오.'},
    {t:'증인이 한 번 거짓말을 했으니, 증인의 말은 하나도 믿을 수 없습니다.',ok:false,fb:'틀린 말이 있었다고 모든 말이 거짓은 아니오. 무엇이 맞고 틀렸는지 가리시오.'}],{hint:'혐의 ②의 이름을 다시 읽어 보시오. 무엇을 한 죄요?'})) return false;
  if(!await presentFor('왕이 무엇을 명했는지 보여 줄 증거를 고르세요.',['J5'],{say:e=>`왕의 명령은 ‘관산성을 구원하라’였습니다. ‘${e.title}’입니다!`,hint:'김무력이 숨기던 말을 떠올려 보시오.'})) return false;
  bgm('open');
  await say('judge','normal','혐의 ②는 ‘죽이라 명한 죄’요. 싸움터에서 일어난 일과 왕의 명령은 나누어 보겠소.');
  chargeSt(1,'','변호인 쪽 증거');
  await say('player','sweat','…혐의 ③이 남았어요. 내일은 제가 직접 증언대에 서서 [[논고]]를 하겠습니다.');
  await gavel(); await titleCard('― 2일차 끝 ―','처음부터 노렸는가');
  return true;
}
async function defD3_3(){
  await courtOpen(3);
  await say('judge','normal','오늘은 검사가 증언대에 서서 혐의 ③의 [[논고]]를 하시오. 변호인은 그 논고를 따질 수 있소.');
  await say('player','stand','좋아요. 처음부터 끝까지 말해 볼게요.',{view:'witness'});
  const T=T3haram(S.flags.motive==='reveal'); T.onHit=async()=>{ bgm('open'); await say('player','upset','…'); };
  if(!await testimony(T,'처음부터 한강을 노렸다')) return false;
  await say('judge','normal','검사의 논고 가운데 [[증명되지 않은 부분]]이 드러났소.');
  if(S.flags.motive!=='reveal') await say('judge','stern','다만 변호인, 피고가 한강을 원한 까닭은 끝내 말하지 않는군. 숨긴 것은 판결에서 헤아리기 어렵소.');
  chargeSt(2,'','변호인 쪽 증거');
  await seongStatement();
  await say('rival','think','(…있었던 일만큼은 지우지 말아 달라. 그 말은, 혐의 ①을 두고 하는 말이야.)');
  await gavel(); await titleCard('― 3일차 끝 ―','미운 피고를 지키는 법');
  return true;
}
async function defD4_3(){
  await courtOpen(4);
  await say('judge','normal','피고, 최후 진술을 하시오.');
  bgm('testimony');
  if(S.flags.tone==='polite') await say('jinheung','serious','변호인이 처음부터 나를 [[사람으로]] 대해 주었소. 그래서 이 말을 하겠소.');
  if(S.flags.motive==='reveal'){ await say('jinheung','serious','나는 신라가 살 길을 찾았소. 한강과 서해 바닷길이 필요했지.'); await say('jinheung','sweat','그러나… 그 땅이 백제가 되찾은 땅인 줄 알면서 빼앗았소. 그것은 부정하지 않겠소.'); }
  else { await say('jinheung','base','나는… 그저 땅이 필요했을 뿐이오.'); await say('player','normal','(끝까지 이유를 말하지 않는구나.)'); }
  await say('judge','normal','변호인, 혐의마다 판결의 [[이유]]와 [[근거]]를 대시오. 먼저 변호인이 인정한 혐의 ①.');
  if(!await reasonEv('혐의 ①을 유죄로 인정하는 가장 알맞은 이유는?',[
    {t:'120년 넘게 동맹이었던 나라가 되찾은 땅을 빼앗았다는 기록이 있다.',ok:true,ev:['J3','J1']},
    {t:'진흥왕은 신라를 크게 키운 왕이므로 무엇을 해도 괜찮다.',ok:false,fb:'공이 있다고 해서 다른 잘못이 사라지지는 않소.'},
    {t:'백제도 고구려와 싸웠으니 서로 똑같다.',ok:false,fb:'다른 사람의 잘못이 피고의 잘못을 지우지는 않소.'}])) return false;
  if(!await reasonEv('혐의 ②(성왕을 죽이라 명한 죄)가 무죄인 가장 알맞은 이유는?',[
    {t:'성왕은 싸움터에서 목숨을 잃었고, 왕이 죽이라 명했다는 증거는 없다. 왕의 명은 ‘구원하라’였다.',ok:true,ev:['J5','J4']},
    {t:'성왕이 먼저 공격했으니 목숨을 잃어도 어쩔 수 없다.',ok:false,fb:'그것은 피해자를 탓하는 말이오.'},
    {t:'모두가 그렇게 말하니, 진흥왕이 명한 것이 맞다.',ok:false,fb:'여러 사람이 말한다고 증거가 되지는 않소.'}])) return false;
  if(!await reasonEv('혐의 ③(처음부터 한강을 홀로 차지하려 한 죄)가 무죄인 가장 알맞은 이유는?',[
    {t:'551년에 한강 하류는 백제 땅이었고, 순수비는 553년 뒤에 세운 것이라 ‘처음부터’라는 말은 증명되지 않는다.',ok:true,ev:['J2','J7']},
    {t:'진흥왕은 화랑을 키운 훌륭한 왕이다.',ok:false,fb:'그것은 이 혐의와 관계가 없소.'},
    {t:'너무 오래된 일이라 아무것도 알 수 없다.',ok:false,fb:'기록이 남은 부분이 있소. 무엇이 증명되고 무엇이 안 되는지 가리시오.'}])) return false;
  await verdictLines3();
  if(S.found.has('J10')) await say('player','upset','…이름 없는 쪽지 하나로 혐의를 세운 건, 내 잘못이야.',{view:'lobby'});
  await say('rival','normal','미운 피고를 변호하는 게 제일 어렵네요. 그래도 증명된 만큼만이에요.',{view:'lobby'});
  const pts=(S.flags.tone==='polite'?1:0)+(S.flags.motive==='reveal'?1:0)+(S.trust>=3?1:0);
  const grade=pts>=3?'공정한 변호인':pts===2?'노련한 변호인':'견습 변호인';
  caseResult({grade:grade,lead:'혐의 ①은 사실대로 인정하고, 증거가 없는 혐의 ②와 ③은 증거로 무죄를 이끌었습니다.',
    items:[`피고를 대한 말투: ${S.flags.tone==='polite'?'정중함':'날카로움'}`,`진흥왕의 이유(바닷길): ${S.flags.motive==='reveal'?'숨기지 않음':'숨김'}`,`익명의 쪽지 확대: ${S.plums&&S.plums.has('J10')?'매화 얼룩을 찾음':'하지 않음'}`],
    judge:'미운 피고도 증명된 만큼만. 그것을 지킨 변호인이오.',history:HIST3});
  return true;
}

/* ---------- 검사 모드 ('지는 검사') ---------- */
async function runPros3(from){
  if(from<=0){ await prologue3(); bgm('investigate');
    await say('judge','normal','하람 검사, 이번 사건의 피고는 신라의 [[진흥왕]]이오.',{view:'lobby'});
    await say('rival','confident','이번엔 내가 진흥왕을 변호해. 혐의를 부풀리면 하나씩 무너뜨릴 거야.',{view:'lobby'});
    await say('guide','normal','재판 전날 밤, 법정 문틈에 접힌 쪽지 하나가 끼워져 있었다.',{view:'lobby'});
    S.found.add('J10'); Music.sting('get'); showEvidence('J10');
    await say('player','shock','(“진흥왕이 성왕의 목을 베라 했다는 문서가 있다.” …이거면 혐의를 하나 더 세울 수 있어!)',{view:'lobby'});
    hideEvidence(); await say('guide','normal','증거 수첩에 [[익명의 쪽지]]를 넣었다.',{view:'lobby'}); }
  await playDays([
    {inv:async()=>{ await invDay(1,'백제 유민이 사는 [[한강 나루]]부터 조사하자. 어부에게도 물어볼 수 있어.'); },court:prosD1_3,
     learned:['553년 신라가 한강 하류를 빼앗은 것은 기록으로 확정된 사실이다.','551년에는 한강 하류가 백제 땅이었다.','내 증인의 말도 직접 본 것과 들은 것을 나누어야 한다.']},
    {inv:async()=>{ await invDay(2,'[[관산성 터]]가 열렸어. 성왕이 목숨을 잃은 싸움의 흔적을 찾자.'); },court:prosD2_3,
     learned:['관산성 싸움은 백제가 먼저 공격했다.','김무력이 받은 명령은 ‘관산성을 구원하라’였다.','증거가 없는 혐의는 검사가 스스로 거둘 수 있다.']},
    {inv:async()=>{ await invDay(3,'[[북한산 비봉]]과 [[박물관 신라실]]이 열렸어. 로비에서 누리가 기다린대.'); },court:prosD3_3,
     learned:['북한산 순수비는 553년보다 뒤에 세운 것으로 본다.','검사의 일은 이기는 것이 아니라 사실을 세우는 것이다.','아이들 편이 되는 것과 정의 편이 되는 것은 다르다.']},
    {court:prosD4_3}
  ],from);
}
async function prosD1_3(){
  await courtOpen(1);
  await chargesRead();
  await say('rival','confident','변호인 누리입니다. 혐의 ①의 [[사실]]은 다투지 않겠어요. 하지만 ②와 ③은 증거로 다투겠습니다.');
  await say('player','confident','증인을 부르겠습니다. 한강 나루에서 평생 고기를 잡은 [[어부]]입니다.');
  Music.sting('murmur'); await wait(800); await gavel();
  bgm('testimony'); await titleCard('― 증언 ―','신라가 모든 것을 빼앗았다');
  const T=T3fish(), vis=T.lines.filter(l=>!l.hidden);
  for(let i=0;i<vis.length;i++) await say('fisher',vis[i].expr,vis[i].text,{testimony:true,tag:`증언 ${i+1}/${vis.length}`});
  await say('judge','normal','변호인, 반대 신문을 하시오. 검사는 [[지켜보시오]].');
  bgm('cross');
  await shout('objection'); showEvidence('J2');
  await say('rival','present','551년의 기록입니다. 그해 한강 [[하류 6군은 백제]]가 가졌어요. 이 나루가 신라 땅이 된 건 553년이에요!',{action:true}); hideEvidence();
  await say('fisher','angry','몇 해 차이가 뭐 그리 대수요!');
  await shout('hold');
  await say('rival','think','그리고 증인, 성왕을 죽이라 명한 것이 신라 왕이라는 말… [[직접 보셨나요]]?');
  await say('fisher','base','…직접 본 건 아니오. 장터에서 다들 그렇게 말하더란 말이오.',{testimony:true,tag:'새 증언'});
  S.found.add('J8'); Music.sting('get'); showEvidence('J8'); await say('guide','normal','증거 수첩에 [[전해 들은 말]]이 들어왔다.'); hideEvidence();
  await say('player','sweat','(내 증인의 말이… 들은 이야기였어.)');
  const c=await choiceSheet('검사는 어떻게 할까요?',[{t:'그래도 밀고 간다. 성왕이 목숨을 잃은 건 사실이니까.',ok:true,tag:'push'},{t:'증언을 다시 확인하겠다. 들은 말로는 혐의를 세울 수 없다.',ok:true,tag:'recheck'}]);
  S.flags.d1=c.tag;
  if(c.tag==='push'){ await say('player','confident','그래도 성왕이 신라군에게 목숨을 잃은 건 사실이에요. 혐의는 그대로 갑니다!'); await say('judge','stern','검사, 들은 말로는 아무것도 세울 수 없소. 내일은 [[직접 본 사람]]을 데려오시오.'); }
  else { await say('player','normal','재판장님, 제 증인의 말을 다시 확인하겠습니다. 내일은 그 싸움에 직접 나간 사람을 부르겠습니다.'); await say('judge','normal','좋소. 검사도 자기 증인의 말을 따져야 하오.'); }
  await gavel(); await titleCard('― 1일차 끝 ―','관산성에서 무슨 일이 있었나');
  return true;
}
async function prosD2_3(){
  await courtOpen(2);
  await say('player','confident','증인을 부르겠습니다. 신주의 군주, [[김무력]]입니다. 관산성에서 직접 싸운 사람이에요.');
  Music.sting('murmur'); await wait(800); await gavel();
  bgm('testimony'); await say('muryeok','base','김무력이오. 관산성에서 싸운 장수지.');
  await say('judge','normal','검사, 오늘은 검사가 직접 증인의 말을 따져 보시오. 자기 증인이라도 틀린 말은 틀린 것이오.');
  const T=T3mu('player');
  if(!await testimony(T,'나는 왕의 명을 받들었다','검사도 자기 증인의 말을 따져야 해요')) return false;
  bgm('crisis');
  await say('rival','normal','검사, 방금 들으셨죠? 왕의 명은 ‘구원하라’였어요.');
  if(S.found.has('J10')) await say('rival','think','혐의 ②의 근거가 혹시 그 쪽지라면… 증거 수첩에서 [[확대해]] 보는 게 좋을 거예요.');
  await say('judge','stern','검사, 혐의 ②를 어떻게 하겠소?');
  const drop=await withdrawChoice(1,'혐의 ②(성왕을 죽이라 명한 죄)를 어떻게 할까요?','유지합니다. 성왕은 신라군에게 목숨을 잃었습니다.','거둡니다. 왕이 죽이라 명했다는 증거가 없습니다.');
  if(drop){ await say('guide','normal','방청석에서 야유가 쏟아졌다. “백제 편 아니었어?”'); await say('judge','normal','…용기 있는 검사요.'); await say('rival','shock','하람…!'); }
  else { await say('rival','normal','그럼 판결로 가리죠. 증거로요.'); await say('judge','stern','검사, 지금 가진 증거로 그 혐의를 증명할 수 있는지 잘 생각하시오.'); }
  await gavel(); await titleCard('― 2일차 끝 ―','처음부터 노렸는가');
  return true;
}
async function prosD3_3(){
  await courtOpen(3);
  await say('rival','confident','혐의 ③을 따지겠습니다. 검사, 피고가 ‘처음부터’ 한강을 노렸다는 근거는요?');
  await say('player','think','(북한산 순수비… 551년에 세웠다고 들었는데. 확인해 보자.)');
  if(!await presentFor('순수비를 언제 세웠는지 확인할 증거를 고르세요.',['J7'],{say:()=>'북한산 순수비의 탁본입니다!',hint:'북한산 봉우리에서 뜬 것을 떠올려 보시오.'})) return false;
  await say('player','sweat','진흥왕이 북한산을 돌아본 해는… [[555년]]. 553년보다 뒤야.');
  await say('rival','present','그리고 551년에 한강 하류는 백제 땅이었어요. 처음부터 노렸다면 왜 하류를 백제에 두었을까요?');
  await say('player','upset','(…‘처음부터’라는 건, 내가 그렇게 믿고 싶었던 거야.)');
  await say('judge','stern','검사, 혐의 ③을 어떻게 하겠소?');
  const drop=await withdrawChoice(2,'혐의 ③(처음부터 한강을 홀로 차지하려 한 죄)을 어떻게 할까요?','유지합니다. 결국 한강을 다 차지했으니까요.','거둡니다. ‘처음부터’라는 것은 증명되지 않습니다.');
  if(drop){ await say('guide','normal','방청석이 다시 술렁였다.'); await say('judge','normal','용기 있는 검사요.'); }
  else await say('rival','normal','좋아요. 판결에서 가리죠.');
  await say('player','upset','…나도 백제 편이 되고 싶었어. 76년 만에 되찾은 땅이었잖아.',{view:'lobby'});
  await say('rival','normal','알아. 그래서 증거를 보는 거야.',{view:'lobby'});
  await gavel(); await titleCard('― 3일차 끝 ―','검사는 무엇을 따라야 하는가');
  return true;
}
async function prosD4_3(){
  await courtOpen(4);
  await seongStatement();
  await say('judge','normal','검사, 혐의 ①을 유죄로 볼 [[이유]]와 [[근거]]를 대시오.');
  if(!await reasonEv('혐의 ①을 유죄로 보는 가장 알맞은 이유는?',[
    {t:'120년 넘게 동맹이었던 나라가 되찾은 땅을 빼앗았다는 기록이 있다.',ok:true,ev:['J3','J1']},
    {t:'성왕이 목숨을 잃었으니 신라 왕은 모든 혐의에서 유죄다.',ok:false,fb:'혐의마다 따로 따지시오. 혐의 ①은 땅을 빼앗은 일이오.'},
    {t:'신라 사람이 쓴 기록이니 믿을 수 없다.',ok:false,fb:'그 말이라면 검사의 혐의도 세울 수 없소.'}])) return false;
  const kept=[1,2].filter(i=>!(S.flags.drop&&S.flags.drop[i]));
  for(const i of kept){
    await shout('objection'); bgm('crisis');
    if(i===1){ showEvidence('J5'); await say('rival','present','검사가 유지한 혐의 ②. 왕의 명은 ‘관산성을 [[구원하라]]’였어요. 죽이라는 명은 어디에도 없습니다!',{action:true}); hideEvidence();
      if(S.found.has('J10')){ await say('rival','confident','검사가 믿은 쪽지는 이름도 없고, 말하는 문서도 없어요.'); } }
    else { showEvidence('J7'); await say('rival','present','검사가 유지한 혐의 ③. 순수비는 [[553년 뒤]]에 세웠고, 551년의 하류는 백제 땅이었어요!',{action:true}); hideEvidence(); }
    await say('player','sweat','…!');
  }
  await verdictLines3();
  const drops=2-kept.length, grade=drops===2?'정의로운 검사':drops===1?'고집 센 검사':'감정에 진 검사';
  if(drops===2) await say('rival','normal','하람. 오늘 진 건 혐의 두 개지, 너는 아니야.',{view:'lobby'});
  else if(drops===0) await say('rival','normal','하람, 네가 진 건 증거가 없어서야. 마음이 앞서면 이렇게 돼.',{view:'lobby'});
  await say('player','upset','검사의 일은 이기는 게 아니라… [[사실을 세우는 것]]이었어.',{view:'lobby'});
  caseResult({grade:grade,lead:drops===2?'증거가 없는 혐의 ②와 ③을 스스로 거두고, 증명된 혐의 ①만 끝까지 지켰습니다.':drops===1?'혐의 하나는 스스로 거두었지만, 다른 하나는 증거 없이 밀고 가다 무죄가 났습니다.':'증거가 없는 혐의까지 끝까지 밀고 가다, 재판장이 무죄를 선고했습니다. 검사는 그 두 혐의에서 졌습니다.',
    items:[`혐의 ② ${S.flags.drop&&S.flags.drop[1]?'스스로 취하':'유지 → 무죄 (검사 패소)'}`,`혐의 ③ ${S.flags.drop&&S.flags.drop[2]?'스스로 취하':'유지 → 무죄 (검사 패소)'}`,`1일차 판단: ${S.flags.d1==='recheck'?'증언을 다시 확인':'그래도 밀고 감'}`,`익명의 쪽지 확대: ${S.plums&&S.plums.has('J10')?'매화 얼룩을 찾음':'하지 않음'}`],
    judge:drops===2?'용기 있는 검사요. 이기려는 마음보다 사실을 따랐소.':'검사는 이기려고 법정에 서는 사람이 아니오.',history:HIST3});
  return true;
}

regCase(3,{title:'한강의 배신',desc:'진흥왕 · 변호인(기본)·검사 · 난이도 3',ev:EVIDENCE3,locs:LOCS3,terms:TERMS3,defName:'진흥왕',time:'90~110분',main:'def',
  lead:'사건 3은 변호인 자리가 기본이에요. 미운 피고를 변호해 보세요. 검사 자리에서는 ‘지는 법’을 배워요.',
  openLine:'지금부터 [[역사 법정]]을 엽니다. 피고는 신라의 진흥왕.',history:HIST3,
  views:{prologue3:{bg:BG.witness,desk:'',pos:['50%','0%','90%'],nochar:true},banwol:{bg:BG.side,desk:'',pos:['50%','-4%','96%'],posImg:['50%','-6%','94%']}},
  gojeung:['433년 나제 동맹 결성, 493년 혼인 동맹','475년 한성 함락부터 551년 회복까지의 기간(76년)','551년 한강 유역 회복과 백제 6군·신라 10군 (「일본서기」·거칠부 열전)','553년 신주 설치와 김무력 군주 임명','554년 관산성 전투 경위: 백제의 선공, 성왕이 목숨을 잃은 상황(「일본서기」)','진흥왕의 북한산 순행(555)과 북한산 순수비 건립 연대(555년설·568년설 등)','당항성을 통한 신라의 대중국 교통','김무력이 받은 명령 ‘관산성 구원’은 게임 속 상상 대사임(기록상 구원하러 간 것은 사실)'],
  roles:{def:runDef3,pros:runPros3}});
