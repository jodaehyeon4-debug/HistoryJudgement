/* ===== 사건 10 「독립문 앞의 남자」: 검사 하람 또는 판사 다온 · 변호인 잠금 · 시리즈 결말 =====
   모든 혐의 유죄(확정 사실 잠금). 긴장은 ‘피고의 변명을 어떻게 깨느냐’와 ‘시대 탓’ 변명 배척.
   누리는 피고의 변명을 전하는 사람일 뿐이고, 모든 변명에 반박 증거가 있다.
   민영환·박승환의 일은 장면 없이 사실만. 가짜 편지는 게임 속 가짜이며, 이완용에 대한 실제 사실은 하나도 바뀌지 않는다.
   v3·v4: 가짜 편지는 3일차 끝 절벽, 4일차 최종 퍼즐 3단계 ① 편지의 매화 얼룩 ② 낱장 두 장씩 ‘시대가 안 맞는 말’(3번) ③ 해치가 나머지를 펼침.
   기록관은 사건 1의 굴욕 뒤 서고지기가 되어 사건 2부터 낱장을 끼워 넣었다. 「삼국사기」 같은 정식 기록은 가짜가 아니다. 가짜 편지를 누가 바랐는지는 밝히지 않는다.
   고증: 편지의 시대 안 맞는 말은 ‘광복절’(1949년에 정한 이름). ‘광복’이라는 낱말은 1919년 무렵에도 쓰였으므로(대한광복회 1915) 쓰지 않는다. */
addCast('wanyong',{name:'이완용',label:'피고 이완용',col:'#2a2b33',spec:{skin:'#efc9a2',robe:'#2a2b33',robe2:'#17181d',collar:'blazer',hat:'short',hair:'#1c1a20',beard:'thin',iris:'#3a2a20'}});
addCast('comrade',{name:'독립협회의 옛 동료',label:'증인 옛 동료',col:'#3a4a6a',spec:{skin:'#ecc8a4',robe:'#3a4a6a',robe2:'#2a3450',collar:'blazer',hat:'short',hair:'#8a8a8a',beard:'thin',iris:'#3a2a20'}});
addCast('printer',{name:'늙은 인쇄공',label:'인쇄공',col:'#4a4a4a',spec:{skin:'#d9a77c',robe:'#5a5a5a',robe2:'#3a3a3a',collar:'cross',hat:'short',hair:'#a8a8a8',beard:'thin',iris:'#3a2a20'}});
addCast('guard10',{name:'회의실 호위병',label:'호위병',col:'#2a3a2a',spec:{skin:'#e2b48a',robe:'#2a3a2a',robe2:'#1a261a',collar:'blazer',hat:'short',hair:'#1c1a20',beard:'none',iris:'#3a2a20'}});
addCast('envoyfam',{name:'헤이그 특사의 가족',label:'증인 특사의 가족',col:'#5a4a6a',spec:{skin:'#f0caa4',robe:'#6a5a7a',robe2:'#4a3a5a',collar:'cross',hat:'bun',hair:'#1c1a20',beard:'none',iris:'#3a2a20'}});
addCast('soldier10',{name:'해산된 군대의 군인',label:'피해자 군인',col:'#3a3f2a',spec:{skin:'#e2b48a',robe:'#3a3f2a',robe2:'#262a1c',collar:'blazer',hat:'short',hair:'#1c1a20',beard:'thin',iris:'#3a2a20'}});
addCast('student10',{name:'3·1 운동에 나선 여학생',label:'피해자 여학생',col:'#2a3a5a',spec:{skin:'#f6d6b8',robe:'#e8e4dc',robe2:'#2a3a5a',collar:'blazer',hat:'bob',hair:'#1c1a20',beard:'none',iris:'#3a2a20'}});

const EVIDENCE10=[
  {id:'W1',reuse:true,type:'사료',icon:'censer',title:'독립협회',body:'1896년 독립협회가 만들어지고, 1897년 독립문을 세웠다. 이완용은 독립협회의 위원장이었다.',src:'독립협회 관련 기록 · 독립문',trust:3,note:'피고는 처음엔 ‘독립’을 외쳤어요.'},
  {id:'W2',type:'사료',icon:'scroll',title:'독립신문',body:'독립협회 사람들이 함께 만든 한글 신문. 1896년 처음 나왔다.',src:'「독립신문」',trust:3,note:'그때의 분위기를 보여 줘요.'},
  {id:'W3',reuse:true,type:'사료',icon:'scroll',title:'1905년 11월',body:'1905년 11월 일본이 대한제국의 외교권을 빼앗는 조약(을사늑약)을 강요했다. 대신들 가운데 이완용(학부대신)을 비롯한 다섯 사람이 찬성했다.',src:'「고종실록」 · 당시 기록',trust:3,note:'찬성한 다섯 사람 가운데 하나예요.'},
  {id:'W4',reuse:true,type:'증언',icon:'scroll',title:'반대한 사람들',body:'참정대신 한규설은 끝까지 반대하다 회의실에서 끌려 나갔다. 반대한 대신들도 있었다.',src:'중명전 호위병 이야기 · 당시 기록',trust:3,note:'‘모두가 뜻을 모았다’는 말과 맞대 보세요.'},
  {id:'W5',reuse:true,type:'사료',icon:'scroll',title:'민영환의 유서',body:'을사늑약에 반대한 민영환이 남긴 글. “동포 형제들이여, 마음을 합하고 힘을 모아 우리의 자유와 독립을 되찾으라.”',src:'민영환이 남긴 글(1905) · 요약',trust:3,note:'같은 시대, 다른 선택을 한 사람이에요.'},
  {id:'W6',reuse:true,type:'사료',icon:'scroll',title:'시일야방성대곡',body:'“이날을 목 놓아 크게 우노라.” 을사늑약을 슬퍼하며 신문에 실린 글(1905, 황성신문).',src:'「황성신문」 장지연',trust:3,note:'백성은 조용히 받아들였을까요?'},
  {id:'W7',reuse:true,type:'증언',icon:'scroll',title:'헤이그 특사',body:'1907년 고종은 네덜란드 헤이그의 만국 평화 회의에 특사를 보내 을사늑약이 잘못되었음을 세계에 알리려 했다.',src:'특사의 가족 증언 · 당시 기록',trust:3,note:'황제는 그 조약을 원했을까요?'},
  {id:'W8',reuse:true,type:'사료',icon:'scroll',title:'1907년의 일',body:'일본은 헤이그 특사를 빌미로 고종을 물러나게 했다. 총리대신 이완용이 이를 앞장서 몰아붙였다.',src:'「순종실록」 · 당시 기록',trust:3,note:'혐의 ②의 기록이에요.'},
  {id:'W9',reuse:true,type:'사료',icon:'army',title:'군대 해산',body:'1907년 8월 대한제국의 군대가 해산되었다.',src:'「순종실록」',trust:3,note:'나라를 지킬 군대를 잃었어요.'},
  {id:'W10',reuse:true,type:'증언',icon:'army',title:'그날의 총소리',body:'군대가 해산되던 날 대대장 박승환이 스스로 목숨을 끊었고, 군인들은 총을 들고 맞서 싸웠다. 이후 의병 전쟁이 이어졌다.',src:'병영 군인의 이야기 · 당시 기록',trust:3,note:'피가 흐르지 않았을까요?'},
  {id:'W11',reuse:true,type:'사료',icon:'scroll',title:'1910년 8월',body:'1910년 8월 총리대신 이완용이 나라를 일본에 넘기는 조약(병합 조약)에 서명했다.',src:'「순종실록」 · 조약 문서',trust:3,note:'혐의 ③의 기록이에요.'},
  {id:'W12',reuse:true,type:'사료',icon:'censer',title:'작위와 은사금',body:'병합 뒤 이완용은 일본에게서 백작 작위(뒤에 후작)와 큰돈(은사금)을 받았다.',src:'조선총독부 관보 · 당시 기록',trust:3,note:'정말 아무것도 얻지 않았을까요?'},
  {id:'W13',reuse:true,type:'사료',icon:'scroll',title:'1919년의 경고문',body:'1919년 3·1 운동이 일어나자 이완용은 만세를 그만두라는 경고문을 신문에 여러 차례 실었다.',src:'「매일신보」 1919년',trust:3,note:'만세를 부른 사람들과 같은 생각이었을까요?'},
  {id:'WF',type:'문서',icon:'scroll',fake:true,y:1919,title:'피고 쪽 편지',body:'“1919년 3월. 피고는 몰래 독립운동가에게 돈을 보냈다. 언젠가 올 [[광복절]] 아침을 위하여.” 누리가 피고 쪽에서 받았다는 편지.',src:'변호인 누리가 피고 쪽에서 받은 자료',trust:1,note:'누가 쓴 편지일까요? 낱말 하나하나를 보세요.',
   zoom:{say:['편지를 크게 확대해 보았다.','받는 사람이 없다. 그리고 끝에 [[매화 모양 먹 얼룩]]. …이 얼룩, 처음이 아니다.','1919년 편지에 [[‘광복절’]]이라는 말이 있다. 광복은 1945년의 일이고, ‘광복절’이라는 이름은 그 뒤 1949년에 정했는데…'],plum:true,note:'매화 얼룩. 1919년 편지에 1949년에 정한 이름 ‘광복절’.'}},
  {id:'PF2',type:'문서',icon:'scroll',fake:true,title:'(사건 2) 준왕의 밀서',body:'“위만을 없애라. 그리고 [[낙랑]]의 군사로 서쪽을 막으라.” 오른쪽 위에 매화 얼룩.',src:'수상한 종이 묶음 · 사건 2',trust:1,note:'위만 때에는 낙랑이 없었어요.'},
  {id:'PF3',type:'문서',icon:'scroll',fake:true,title:'(사건 3) 익명의 쪽지',body:'“553년 겨울. 진흥왕이 성왕의 목을 베라 했다는 문서가 있다. 머지않아 [[관산성 전투]]가 그 증거가 될 것이다.” 귀퉁이에 매화 얼룩.',src:'수상한 종이 묶음 · 사건 3',trust:1,note:'싸움의 이름은 싸움이 끝난 뒤 붙어요.'},
  {id:'PF4',type:'문서',icon:'scroll',fake:true,title:'(사건 4) 목격담 종이',body:'“927년 겨울, [[후백제]] 왕 견훤이 직접 칼을 들어 왕을 해쳤다.” 귀퉁이에 매화 얼룩.',src:'수상한 종이 묶음 · 사건 4',trust:1,note:'그 시대 사람들은 그냥 ‘백제’라 불렀어요.'},
  {id:'PF5',type:'문서',icon:'scroll',fake:true,title:'(사건 5) 부풀린 잔치 기록',body:'“1240년 봄, 1만 명이 열흘 밤낮을 놀았다. 그 돈이면 [[팔만대장경]]을 두 번 새겼으리라.” 매화 얼룩.',src:'수상한 종이 묶음 · 사건 5',trust:1,note:'그 이름은 훨씬 뒤에 널리 쓰였어요.'},
  {id:'PF6',type:'문서',icon:'scroll',fake:true,title:'(사건 6) 끼워 넣은 종이',body:'“1619년 3월, 광해군이 [[청나라]]에 조선을 바치려 했다.” 매화 얼룩.',src:'수상한 종이 묶음 · 사건 6',trust:1,note:'그때 북쪽 나라는 아직 후금이었어요.'},
  {id:'PF7',type:'문서',icon:'scroll',fake:true,title:'(사건 7) 고친 필사본',body:'“1645년 4월, 세자의 몸이 검게 변한 것을 보았다. 아우이신 [[효종]]께서도 아신다.” 매화 얼룩.',src:'수상한 종이 묶음 · 사건 7',trust:1,note:'임금의 이런 이름은 세상을 떠난 뒤 붙어요.'},
  {id:'PF8',type:'문서',icon:'scroll',fake:true,title:'(사건 8) 끼워 넣은 족보',body:'“1862년, [[철종]] 임금 때 고쳐 엮음.” 백낙신의 이름을 끼워 넣은 족보. 매화 얼룩.',src:'수상한 종이 묶음 · 사건 8',trust:1,note:'살아 있는 임금을 그 이름으로 부를 수 없어요.'},
  {id:'W14',type:'증언',icon:'scroll',title:'말순 할머니가 본 사람',body:'말순 할머니: “이번엔 [[내 눈으로]] 봤어! 법정 서고에서 누가 종이를 끼워 넣는 걸. 소매에 [[꽃 모양 얼룩]]이 있는 사람이었어!”',src:'3일차 조사, 신문사 앞 (상상)',trust:3,note:'시리즈 내내 소문만 말하던 사람이, 처음으로 직접 본 증인이 되었어요.'},
  {id:'WD1',type:'유물',icon:'censer',title:'독립문 돌 조각',body:'독립문을 지을 때 남은 돌 조각.',src:'독립문 앞',trust:3,note:'쟁점과 이어질까요?'},
  {id:'WD2',type:'물건',icon:'scroll',title:'영어 사전',body:'오래된 영어 사전.',src:'신문사',trust:3,note:'피고가 영어를 잘했다는 이야기가 있어요. 쟁점과 이어질까요?'},
  {id:'WD3',type:'물건',icon:'censer',title:'서양식 모자',body:'서양식 모자 하나.',src:'총리대신 집무실',trust:3,note:'무엇을 증명할까요?'},
  {id:'WD4',type:'물건',icon:'censer',title:'대한제국 훈장',body:'대한제국이 준 훈장.',src:'박물관 근대실',trust:3,note:'쟁점과 이어질까요?'}
];
Object.entries({W1:1896,W2:1896,W3:1905,W4:1905,W5:1905,W6:1905,W7:1907,W8:1907,W9:1907,W10:1907,W11:1910,W12:1910,W13:1919,W14:1919,PF2:-194,PF3:553,PF4:927,PF5:1240,PF6:1619,PF7:1645,PF8:1862}).forEach(([k,y])=>{ const e=EVIDENCE10.find(x=>x.id===k); if(e) e.y=y; });
const PFS=['PF2','PF3','PF4','PF5','PF6','PF7','PF8'];
const LOCS10=[
  {id:'dongnimmun',name:'독립문 앞',time:'1896년 · 맑은 날',intro:'독립협회가 세운 독립문 앞이다. 새 돌이 하얗게 빛난다.',miss:['돌바닥이다.','아무것도 없다.','사람들 발자국이다.'],
   spots:[{x:36,y:12,w:28,h:60,label:'독립문',ev:'W1',say:['돌로 쌓은 문 위에 ‘독립문’ 글씨가 있다.','1896년 [[독립협회]]가 만들어지고, 이 문을 세웠다. 독립협회의 위원장은… [[이완용]].']},{x:6,y:70,w:16,h:16,label:'돌 조각',ev:'WD1',say:['공사 때 남은 돌 조각이다.','쟁점과 이어질까?']}]},
  {id:'press',name:'신문사',time:'낮',intro:'신문을 찍어 내는 신문사다. 잉크 냄새가 난다.',miss:['종이 더미다.','잉크 얼룩이다.','아무것도 없다.'],
   spots:[{x:56,y:22,w:24,h:30,label:'벽에 걸린 신문',ev:'W2',say:['벽에 한글 신문이 걸려 있다.','독립협회 사람들이 함께 만든 [[독립신문]]이다.']},{x:8,y:60,w:20,h:20,label:'영어 사전',ev:'WD2',say:['오래된 영어 사전이다.','쟁점과 이어질까?']},
    {x:30,y:66,w:16,h:16,label:'새로 찍은 신문',only2:true,ev:'W6',say:['어제는 없던 신문이 쌓여 있다.','“[[이날을 목 놓아 크게 우노라]].” 을사늑약을 슬퍼한 글(시일야방성대곡)이다.']}],
   npcs:[{who:'printer',expr:'base',place:{x:84,h:58,b:2},until:2,topics:[
    {id:'pr-hi',t:'무엇을 찍으세요?',lines:[['printer','base','속보! 인쇄공, 오늘도 세상 소식을 찍다! …좋은 소식보다 나쁜 소식이 많지.']]},
    {id:'pr-speech',t:'그 사람의 연설',lock:'W1',must:true,lockSay:'(인쇄공은 활자만 고른다. 독립협회 이야기를 꺼내면 대답할지도 모른다.)',
     lines:[['printer','base','속보! 독립협회 위원장, [[자주독립]]을 외치다! …그분도 그때는 그랬지. 내가 연설을 받아 적었소.'],['printer','sweat','속보… 사람이 그렇게 변하다. …이 제목은 찍기 싫었소.']]}],
    present:{W1:{lines:[['printer','base','속보! 독립문, 하얗게 서다! …그때 사람들 얼굴이 다 환했지.']],unlock:'pr-speech'}},def:[['printer','base','속보! 인쇄공, 모르는 물건을 보다!']]},
   {who:'malsun',expr:'base',place:{x:84,h:58,b:2},from:3,topics:[
    {id:'ms10-saw',t:'무엇을 보셨나요?',lock:'PF2',must:true,lockSay:'(말순 할머니가 “이번엔 진짜 봤다니까!”만 되풀이한다. 무엇을 봤는지 짚어 볼 물건을 보여 주면 좋겠다.)',
     lines:[['malsun','angry','이번엔 [[내 눈으로]] 봤어! 소매에 꽃 모양 얼룩이 있는 사람이었다니까!'],['malsun','base','그래, [[이 꽃]]! 바로 이 꽃이었어!'],['ME','think','(시리즈 내내 소문만 말하던 할머니가… 처음으로 직접 본 증인이 되었어.)']],gives:['W14']},
    {id:'ms10-hi',t:'이번엔 무슨 소문인가요?',lines:[['malsun','base','이번엔 진짜 봤다니까! 법정 서고에서 누가 [[종이를 끼워 넣는]] 걸!'],['ME','think','…옆집 사람이 봤죠?'],['ttolbang','base','…옆집 사람이 봤죠?'],['printer','base','(인쇄공이 달려 나온다) 속보! 할머니, 또 소문을 퍼뜨리다!'],['malsun','angry','이번엔 내 눈으로 봤어!! 소매에 [[꽃 모양 얼룩]]이 있는 사람이었어!'],['guide','normal','(신문사 앞이 조용해졌다.)'],['ME','think','(꽃 모양 얼룩… 수상한 종이 묶음의 그 얼룩을 보여 줘 볼까?)']]}],
    present:Object.fromEntries(PFS.map(k=>[k,{lines:[['malsun','shock','그, 그 얼룩…!']],unlock:'ms10-saw'}])),
    def:[['malsun','base','그건 꽃 모양이 아니잖아.']]}]},
  {id:'jungmyeong',name:'중명전',time:'1905년 11월 밤',from:2,rooms:[
    {id:'jm-room',name:'회의실',intro:'1905년 11월, 대신들이 모였던 회의실이다.',miss:['긴 탁자다.','아무것도 없다.'],
     spots:[{x:30,y:30,w:40,h:24,label:'탁자 위 조약 초안',ev:'W3',say:['탁자 위에 조약 초안이 놓여 있다.','외교권을 빼앗는 조약에 [[찬성한 다섯 사람]]. 그 가운데 학부대신 이완용이 있다.']}]},
    {id:'jm-wait',name:'대기실',intro:'대신들이 기다리던 방이다.',miss:['의자다.','아무것도 없다.'],
     spots:[{x:30,y:30,w:30,h:30,label:'빈 의자들',say:['의자들이 흐트러져 있다.']}],
     npcs:[{who:'guard10',expr:'base',place:{x:76,h:60,b:2},topics:[
      {id:'gd-hi',t:'그날 여기 계셨나요?',lines:[['guard10','base','회의실 앞을 지켰소.']]},
      {id:'gd-against',t:'반대한 사람들',lock:'W3',must:true,lockSay:'(호위병은 정면만 본다. 그날의 조약 이야기를 꺼내면 대답할지도 모른다.)',
       lines:[['guard10','base','참정대신 [[한규설]]은 끝까지 반대했소. 그러다 회의실에서 끌려 나갔지.'],['guard10','base','모두가 뜻을 모았다고? 내가 본 건 그게 아니오.']],gives:['W4']}],
      present:{W3:{lines:[['guard10','sweat','그 초안…!']],unlock:'gd-against'}},def:[['guard10','base','모르는 물건이오.']]}]},
    {id:'jm-hall',name:'복도',intro:'회의실로 이어지는 복도다.',miss:['마룻바닥이다.','아무것도 없다.'],
     spots:[{x:40,y:30,w:20,h:40,label:'긴 복도',say:['군홧발 자국이 남아 있다.']}]}]},
  {id:'minhouse',name:'민영환의 집',time:'겨울',from:2,intro:'민영환이 살던 집이다. 조용하다.',miss:['마루다.','아무것도 없다.','바람 소리뿐이다.'],
   spots:[{x:36,y:30,w:28,h:30,label:'남겨진 글',ev:'W5',say:['책상 위에 남겨진 글이 있다.','“동포 형제들이여, [[마음을 합하고 힘을 모아]] 우리의 자유와 독립을 되찾으라.” 살아남은 사람들에게 남긴 당부다.']}]},
  {id:'deoksu',name:'경운궁(덕수궁) 앞',time:'1907년 여름',from:3,intro:'경운궁 앞이다. 1907년, 황제가 물러난 곳이다.',miss:['돌담이다.','아무것도 없다.'],
   spots:[{x:30,y:20,w:40,h:40,label:'대한문 앞 게시',ev:'W8',say:['문 앞에 알림이 붙어 있다.','헤이그 특사를 빌미로 [[황제가 물러났다]]. 총리대신 이완용이 앞장섰다.']}]},
  {id:'barracks',name:'해산된 군대의 병영',time:'1907년 8월',from:3,intro:'해산된 대한제국 군대의 병영이다.',miss:['빈 막사다.','아무것도 없다.'],
   spots:[{x:56,y:24,w:26,h:30,label:'벗어 놓은 군복',ev:'W9',say:['군복이 가지런히 벗어 놓여 있다.','1907년 8월, 대한제국의 [[군대가 해산]]되었다.']}],
   npcs:[{who:'soldier10',expr:'base',place:{x:30,h:60,b:2},topics:[
    {id:'sl-hi',t:'여기 계셨나요?',lines:[['soldier10','base','이 병영의 군인이었소.']]},
    {id:'sl-gun',t:'그날의 총소리',lock:'W9',must:true,lockSay:'(군인은 벗어 놓은 군복만 본다. 그날의 기록을 보여 주면 말할지도 모른다.)',
     lines:[['soldier10','base','해산식 날, 우리 대대장님이… 스스로 목숨을 끊으셨소.'],['soldier10','base','우리는 [[총을 들고 맞섰소]]. 그 뒤로 의병이 되어 싸운 사람이 많았지.']],gives:['W10']}],
    present:{W9:{lines:[['soldier10','base','…그날 일이구려.']],unlock:'sl-gun'}},def:[['soldier10','base','모르는 물건이오.']]}]},
  {id:'pmoffice',name:'총리대신 집무실',time:'1910년 8월',from:3,intro:'총리대신의 집무실이다.',miss:['큰 책상이다.','아무것도 없다.'],
   spots:[{x:36,y:28,w:28,h:28,label:'책상 위 조약문',ev:'W11',say:['책상 위에 조약문이 놓여 있다.','1910년 8월, 나라를 [[일본에 넘기는 조약]]에 서명한 문서다. 서명한 사람은 총리대신 이완용.']},{x:76,y:20,w:16,h:24,label:'서양식 모자',ev:'WD3',say:['모자걸이에 서양식 모자가 걸려 있다.','무엇을 증명할까?']}]},
  {id:'museum10',name:'박물관 근대실',time:'오늘',from:4,intro:'오늘날 박물관의 근대실이다.',miss:['유리 진열장이다.','아무것도 없다.'],
   spots:[{x:8,y:24,w:24,h:40,label:'작위 증서 진열장',ev:'W12',say:['일본이 준 작위 증서가 전시되어 있다.','이완용은 [[백작 작위]](뒤에 후작)와 큰돈(은사금)을 받았다.']},{x:40,y:24,w:24,h:40,label:'옛 신문 진열장',ev:'W13',say:['1919년 신문이 펼쳐져 있다.','3·1 운동 때 이완용이 실은 [[만세를 그만두라는 경고문]]이다.']},{x:72,y:40,w:20,h:30,label:'훈장 진열장',ev:'WD4',say:['대한제국 훈장이다.','쟁점과 이어질까?']}]}
];
const TERMS10=[
  {w:'독립협회',d:'1896년 나라의 자주독립을 위해 만든 모임이에요. 독립문을 세웠어요.',ic:'🏛️'},
  {w:'외교권',d:'다른 나라와 약속하고 사귈 권리예요. 나라의 ‘열쇠’ 같은 것이에요.',ic:'🔑'},
  {w:'을사늑약',d:'1905년 일본이 억지로 맺은 조약이에요. ‘늑’은 억지로라는 뜻이에요. 외교권을 빼앗겼어요.',ic:'📜'},
  {w:'병합',d:'나라를 통째로 합쳐 버리는 것이에요.',ic:'⛓️'},
  {w:'작위',d:'귀족에게 주는 칭호예요. 일본은 나라를 넘긴 사람들에게 작위를 주었어요.',ic:'🎖️'},
  {w:'은사금',d:'일본이 작위와 함께 준 상금이에요.',ic:'💰'},
  {w:'의병',d:'나라를 지키려고 스스로 일어나 싸운 백성의 군대예요.',ic:'⚔️'}
];
const C10CH=()=>[{t:'① 을사늑약에 찬성해 외교권을 넘긴 죄'},{t:'② 고종을 물러나게 하고 군대를 해산하게 한 죄'},{t:'③ 나라를 넘기는 조약에 서명한 죄'},{t:'④ 작위와 돈을 받고 독립운동을 막은 죄'}];
const J10=()=>S.role==='judge';
/* 피고 증언: 검사는 증거로 깨고, 판사는 주장 가르기로 가린다 */
async function wTestimony(title,lines,claims){
  if(!J10()){ const T={key:'이완용',who:'wanyong',lines:lines}; return await testimony(T,title); }
  bgm('testimony'); await titleCard('― 증언 ―',title);
  for(const L of lines) await say('wanyong',L.expr||'base',L.text,{testimony:true,tag:'증언'});
  await say('player','confident','재판장님, 피고의 말에는 증거와 다른 곳이 있습니다. 판사님께서 가려 주십시오.');
  return await sortClaims(claims);
}
async function prologue10(){
  bgm('crisis');
  await say('guide','normal','1919년 3월, 서울.',{view:'prologue10'});
  await say('guide','normal','…그보다 23년 전, 같은 자리에 하얀 돌문 하나가 세워졌다.',{view:'prologue10'});
  await say('voice','normal','역사가 묻는다. 시대가 그렇게 흘렀다면, 나라를 넘긴 사람의 책임은 [[사라지는가]].',{view:'prologue10'});
  await titleCard('사건 10','독립문 앞의 남자');
}
async function run10(from){
  if(from<=0){ await prologue10(); bgm('investigate');
    await say('judge','normal',J10()?'다온 판사, 마지막 사건이오. 피고는 [[이완용]]. 이 사건은 변호인 자리를 잠갔소.':'하람 검사, 마지막 사건이오. 피고는 [[이완용]]. 이 사건은 변호인 자리를 잠갔소.',{view:'lobby'});
    await say('rival','normal','나는 피고의 변명을 전하는 일만 할게. 그것도 법정의 일이니까.',{view:'lobby'});
    await say('player','confident','모든 변명에는 반박할 증거가 있을 거야. 처음부터 끝까지 맞대 보자.',{view:'lobby'}); }
  await playDays([
    {inv:async()=>{ await invDay(1,'[[독립문 앞]]과 [[신문사]]를 조사하자. 1896년의 일부터.'); },court:d1_10,
     learned:['1896년 이완용은 독립문을 세운 독립협회의 위원장이었다.','그때의 일은 사실이다. 그러나 그것이 뒤의 일을 지우지는 않는다.','같은 사람이 10년 사이에 어디로 갔는지 따라가 본다.']},
    {inv:async()=>{ await invDay(2,'[[중명전]]과 [[민영환의 집]]이 열렸어. 신문사에도 새 신문이 나왔대.'); },court:d2_10,
     learned:['1905년 을사늑약에 반대한 대신도 있었다. 한규설은 끌려 나갔다.','백성은 조용히 받아들이지 않았다. 신문은 목 놓아 울었다.','민영환은 살아남은 사람들에게 힘을 모아 독립을 되찾으라고 당부했다.']},
    {inv:async()=>{ await invDay(3,'[[경운궁 앞]], [[병영]], [[총리대신 집무실]]이 열렸어.'); },court:d3_10,
     learned:['1907년 고종이 물러나고 군대가 해산되었고, 군인들은 총을 들고 맞섰다.','황제는 헤이그 특사로 조약이 잘못되었음을 알리려 했다.','1910년 8월 피고는 병합 조약에 서명했다.']},
    {inv:async()=>{ await invDay(4,'오늘은 짧게. [[박물관 근대실]]이 열렸어.'); },court:d4_10}
  ],from);
}
async function d1_10(){
  await courtOpen(1);
  await say('player','confident','피고 이완용의 혐의를 읽겠습니다. 첫째…');
  await shout('hold');
  await say('rival','confident','잠깐만요! 혐의를 듣기 전에 증인을 먼저 부르겠어요. 피고의 [[독립협회 옛 동료]]입니다.',{action:true});
  bgm('testimony');
  await say('comrade','base','이 사람은 [[독립문을 세운 독립협회의 위원장]]이었소.');
  await say('comrade','base','나라의 독립을 외치던 사람이오!');
  Music.sting('murmur'); await wait(900);
  await say('guide','normal','방청석이 술렁였다. “뭐? 이완용이 독립협회?”');
  await say('judge','normal','피고, 증언하시오.');
  bgm('testimony'); await titleCard('― 증언 ―','나는 처음부터 나라의 독립을 위했다');
  await say('wanyong','base','1896년, 나는 독립협회의 위원장으로 독립문을 세웠소.',{testimony:true,tag:'증언 1/2'});
  await say('wanyong','base','그래서 그 뒤의 일도 모두 [[나라를 지키려는 것]]이었소.',{testimony:true,tag:'증언 2/2'});
  if(J10()){ if(!await sortClaims([{who:'wanyong',expr:'base',text:'1896년, 나는 독립협회의 위원장으로 독립문을 세웠소.',ans:'ok',ev:['W1']},{who:'wanyong',expr:'base',text:'그래서 그 뒤의 일도 모두 나라를 지키려는 것이었소.',ans:'no',after:[['judge','normal','그 말은 오늘은 확인할 수 없소. 내일부터 하루씩 따라가 보시오.']]}])) return false; }
  else {
    if(!await choose('피고의 첫째 말(1896년 독립협회)을 어떻게 할까요?',[{t:'사실로 인정한다. 기록과 맞다.',ok:true},{t:'거짓이라고 다툰다.',ok:false,fb:'1896년의 일은 사실이오. 사실을 부정하면 검사의 말도 힘을 잃소.'}])) return false;
    await say('player','think','(둘째 말 ‘그 뒤의 일도 모두 나라를 지키려는 것’… 지금은 깰 증거가 없어.)');
  }
  await say('player','confident','혐의를 다시 읽겠습니다.');
  setCharges(C10CH());
  await say('player','confident','첫째, 을사늑약에 찬성해 [[외교권을 넘긴]] 죄. 둘째, 고종을 물러나게 하고 [[군대를 해산]]하게 한 죄. 셋째, 나라를 넘기는 [[조약에 서명]]한 죄. 넷째, 그 대가로 [[작위와 돈]]을 받고 독립운동을 막은 죄입니다.');
  await say('judge','normal','같은 사람이 10년 사이에 [[어디로 갔는지]], 내일부터 하루씩 따라가 보시오.');
  await say('judge','normal','그리고 하나 더. 지난 아홉 번의 재판에서 법정 서고에 보관한 [[수상한 종이]]들을 증거 수첩에 넣어 두겠소. 해 보지 않은 사건의 종이도 한 줄 설명과 함께 넣었소.');
  { const had=new Set(loadPapers().map(x=>x.case)); PFS.forEach(id=>S.found.add(id)); track('papers_held',{played:[...had]}); toast(`🗂️ 수상한 종이 ${PFS.length}장이 증거 수첩에 들어왔다`); }
  await timeline('이완용의 길',[{y:'1896',t:'독립협회 위원장, 독립문'},{y:'1905',t:'을사늑약'},{y:'1907',t:'고종 퇴위, 군대 해산'},{y:'1910',t:'병합 조약'},{y:'1919',t:'3·1 운동'}],'오늘부터 하루씩 따라갑니다.');
  await gavel(); await titleCard('― 1일차 끝 ―','독립을 외친 사람');
  return true;
}
async function d2_10(){
  await courtOpen(2);
  await say('judge','normal','피고, 1905년의 일을 증언하시오.');
  if(!await wTestimony('을사늑약은 피할 수 없었다',[
    {text:'일본의 힘이 너무 컸소. 피할 수 없었지.',expr:'base',press:[['player','normal','그래서 찬성했나요?'],['wanyong','base','그렇소.']]},
    {text:'대신들 모두가 어쩔 수 없다는 데 뜻을 모았소.',expr:'base',lie:true,ev:'W4',press:[['player','normal','모두가요?'],['wanyong','base','그렇소.']],
     hit:[['player','present','중명전 호위병이 본 일입니다. 참정대신 [[한규설]]은 끝까지 반대하다 끌려 나갔어요!'],['wanyong','sweat','…'] ]},
    {text:'백성들도 조용히 받아들였소.',expr:'base',lie:true,ev:'W6',press:[['player','normal','조용히요?'],['wanyong','base','그렇소.']],
     hit:[['player','present','“[[이날을 목 놓아 크게 우노라]].” 신문이 온 나라에 울었어요!'],['wanyong','sweat','…크흠.']]}],
    [{who:'wanyong',expr:'base',text:'대신들 모두가 어쩔 수 없다는 데 뜻을 모았소.',ans:'no',ev:['W4']},{who:'wanyong',expr:'base',text:'백성들도 조용히 받아들였소.',ans:'no',ev:['W6']}])) return false;
  await say('judge','normal','같은 시대, 다른 선택을 한 사람의 글을 내가 읽겠소. [[민영환의 유서]]요.');
  Music.stop(0.6); Music.sting('wind'); await wait(400);
  showEvidence('W5'); await say('judge','normal','“동포 형제들이여, [[마음을 합하고 힘을 모아]] 우리의 자유와 독립을 되찾으라.”'); hideEvidence();
  await say('judge','normal','…민영환은 그해 스스로 목숨을 끊으며, 살아남은 사람들에게 이 당부를 남겼소.');
  bgm('testimony');
  await say('player','confident','증인을 부르겠습니다. [[헤이그 특사의 가족]]입니다.');
  await say('envoyfam','base','황제께서는 1907년, 이 조약이 [[잘못되었다고 세계에 알리려]] 하셨어요. 그래서 특사를 헤이그로 보내셨지요.');
  await gotEv('W7');
  await say('rival','normal','(피고의 변명을 전합니다) …그래도 피고는 [[피를 흘리지 않게]] 하려고…');
  await say('judge','normal','그 말은 내일 확인하겠소.');
  await gavel(); await titleCard('― 2일차 끝 ―','피할 수 없었는가');
  return true;
}
async function d3_10(){
  await courtOpen(3);
  await say('judge','normal','피고, 1907년과 1910년의 일을 증언하시오.');
  if(!await wTestimony('나는 피를 흘리지 않게 했다',[
    {text:'1907년, 나는 나라를 위해 어려운 일을 맡았소.',expr:'base',press:[['player','normal','어떤 일이죠?'],['wanyong','base','황제의 자리를 옮기는 일이었지.']]},
    {text:'내가 서명했기에 이 땅에 피가 흐르지 않았소.',expr:'base',lie:true,ev:'W10',press:[['player','normal','피가 흐르지 않았다고요?'],['wanyong','base','그렇소.']],
     hit:[['player','present','군대가 해산되던 날, 군인들은 [[총을 들고 맞섰어요]]. 그 뒤로 의병 전쟁이 이어졌어요!'],['wanyong','sweat','…']]},
    {text:'황제께서도 결국 원하셨소.',expr:'base',lie:true,ev:'W7',press:[['player','normal','황제가요?'],['wanyong','base','그렇소.']],
     hit:[['player','present','황제는 헤이그에 특사를 보내 [[조약이 잘못되었다고]] 세계에 알리려 했어요!'],['wanyong','sweat','크흠…']]}],
    [{who:'wanyong',expr:'base',text:'내가 서명했기에 이 땅에 피가 흐르지 않았소.',ans:'no',ev:['W10']},{who:'wanyong',expr:'base',text:'황제께서도 결국 원하셨소.',ans:'no',ev:['W7']}])) return false;
  await victim('soldier10',[['base','해산된 대한제국 군대의 군인이오.'],['base','나라가 넘어간 날, 우리는 [[이미 총을 빼앗긴 뒤]]였소.'],['base','…싸울 수 있는 사람은 산으로 갔지.']]);
  await say('rival','normal','(피고의 변명을 전합니다) 그래도 피고는 [[아무것도 얻지 않았습니다]]. 오직 나라를 위해…');
  bgm('crisis');
  await say('rival','confident','그리고 재판장님. 피고 쪽에서 받은 [[편지]]가 있어요. 피고가 [[몰래 독립운동가에게 돈을 보냈다]]는 내용이에요.');
  S.found.add('WF'); showEvidence('WF'); Music.sting('murmur'); await wait(900); hideEvidence();
  await say('guide','normal','방청석이 크게 술렁였다. 1일차의 독립협회 이야기가 떠오른 사람들이 흔들렸다.');
  await say('player','shock','…그럴 리가. 그런데 정말이라면?');
  await say('judge','normal','그 편지는 내일 따지겠소.');
  await gavel(); await titleCard('― 3일차 끝 ―','몰래 독립운동을 도왔다?');
  return true;
}
async function d4_10(){
  await courtOpen(4);
  await say('rival','normal','(피고의 변명을 전합니다) 피고는 아무것도 얻지 않았습니다.');
  if(J10()){ if(!await sortClaims([{who:'rival',expr:'normal',text:'피고는 아무것도 얻지 않았다.',ans:'no',ev:['W12']}])) return false; }
  else if(!await presentFor('이 변명을 깰 증거를 고르세요.',['W12'],{say:()=>'작위와 은사금입니다! 피고는 일본에게서 [[백작 작위와 큰돈]]을 받았어요!'})) return false;
  await say('judge','normal','피고, 최후 증언을 하시오.');
  if(!await wTestimony('나는 처음과 같은 사람이다',[
    {text:'나는 독립협회 때처럼 나라를 위했을 뿐이오.',expr:'base',press:[['player','think','처음과 같다고요?'],['wanyong','base','그렇소.']]},
    {text:'1919년, 만세를 부르던 젊은이들도 결국 나와 같은 생각이었소.',expr:'base',lie:true,ev:'W13',press:[['player','normal','같은 생각이요?'],['wanyong','base','나라를 걱정했다는 점에서.']],
     hit:[['player','present','1919년의 경고문입니다. 피고는 그 젊은이들에게 [[만세를 그만두라고]] 신문에 여러 번 실었어요!'],['wanyong','sweat','…']]}],
    [{who:'wanyong',expr:'base',text:'1919년, 만세를 부르던 젊은이들도 결국 나와 같은 생각이었소.',ans:'no',ev:['W13']}])) return false;
  // 최대 반전: 독립문
  Music.stop(0.4);
  await say('judge','normal','피해를 입은 사람의 이야기를 듣겠소. 1919년 3월, 만세를 부른 [[여학생]]이오.');
  await playShadow('manse');
  bgm('testimony');
  await say('student10','base','우리는 [[독립문 앞]]에서도 모였어요.',{tag:'피해자 진술'});
  await say('student10','base','독립협회가 세운 그 문이요. 그 문 앞에서 만세를 불렀어요.',{tag:'피해자 진술'});
  await say('student10','base','…그 문을 세운 사람이, 우리에게 그만두라고 했지요.',{tag:'피해자 진술'});
  Music.sting('thud'); flash(); await wait(500);
  await say('judge','normal','독립을 외치며 문을 세운 사람은 그 문 앞의 만세를 막았고, 그 문은 [[다른 사람들이 지켰소]].');
  await say('wanyong','base','……');
  await say('guide','normal','피고는 끝내 잘못을 말하지 않았다.');
  // 붓을 든 자: 최종 퍼즐 3단계
  bgm('crisis');
  await say('rival','confident','재판장님, 어제 낸 [[편지]]를 다시 보겠어요. 피고는 몰래 독립운동을 도왔습니다.');
  const z=await choiceSheet(`${J10()?'판사':'검사'}는 이 편지를 어떻게 할까요?`,[{t:'증거 확대로 살펴본다.',ok:true,tag:'zoom'},{t:'변호인이 낸 것이니 받아들인다.',ok:false,tag:'accept'}]);
  S.flags.letter=z.tag; track('letter',{v:z.tag});
  if(z.tag!=='zoom'){ await say('judge','stern','누가 냈든, 기록은 의심하고 맞대 보아야 하오.'); await loseTrust(); if(S.trust<=0){ await loseTrial(); return false; } }
  await titleCard('최종 퍼즐 ①','편지의 얼룩');
  await openZoomScene('WF');
  await say(ME(),'shock','…[[매화 얼룩]]. 그리고 1919년 편지에 [[광복절]]? 이 얼룩, 처음이 아니야!');
  Music.sting('realize'); flash();
  await titleCard('최종 퍼즐 ②','시대가 안 맞는 말');
  await say('judge','normal','수상한 종이 묶음을 펼치시오. 편지와 한 장씩 [[맞대어]], 그 종이에도 [[시대가 안 맞는 말]]이 있는지 찾으시오.');
  const ROUND=[{id:'PF2',q:'사건 2 준왕의 밀서',w:['위만','낙랑','서쪽'],a:'낙랑',why:'낙랑은 위만보다 80여 년 뒤에 생긴 이름이에요.'},
    {id:'PF6',q:'사건 6 끼워 넣은 종이',w:['광해군','청나라','조선'],a:'청나라',why:'1619년에 북쪽 나라는 아직 후금이었어요. 청은 1636년부터예요.'},
    {id:'PF7',q:'사건 7 고친 필사본',w:['세자','효종','검게'],a:'효종',why:'봉림대군이 ‘효종’이라 불린 것은 세상을 떠난 뒤예요.'}];
  let right=0;
  for(const R of ROUND){
    showEvidence('WF'); await wait(300); showEvidence(R.id);
    await say('judge','normal',`편지와 「${R.q}」를 맞대 보시오. 둘 다 매화 얼룩이 있소.`); hideEvidence();
    for(let k=0;;k++){
      const c=await choiceSheet(`「${R.q}」에서 시대가 안 맞는 말은?`,R.w.map(x=>({t:x,ok:x===R.a})));
      track('puzzle_word',{id:R.id,pick:c.t,ok:c.ok});
      if(c.ok){ if(k===0) right++; Music.sting('get'); await say(ME(),'confident',`‘${R.a}’! ${R.why}`); break; }
      await say('judge','normal','그 말은 그 시대에도 쓰던 말이오. 그 종이가 쓰인 [[해]]를 보고, 그때 아직 없던 이름을 찾으시오.');
    }
  }
  S.flags.puzzle=right;
  await titleCard('최종 퍼즐 ③','같은 붓');
  const filed=new Set(loadPapers().map(x=>x.case));
  await infoCard('해치가 펼친 수상한 종이들',`<p>모든 낱장에 <b>매화 얼룩</b>, 그리고 <b>시대가 안 맞는 말</b> 하나씩.</p><ol class="ladder"><li><b>사건 2</b> 준왕의 밀서 — ‘낙랑’</li><li><b>사건 3</b> 익명의 쪽지 — ‘관산성 전투’ (싸움 전에 붙인 싸움 이름)</li><li><b>사건 4</b> 목격담 종이 — ‘후백제’ (그때는 그냥 ‘백제’)</li><li><b>사건 5</b> 부풀린 잔치 기록 — ‘팔만대장경’ (뒷날 널리 쓴 이름)</li><li><b>사건 6</b> 끼워 넣은 종이 — ‘청나라’</li><li><b>사건 7</b> 고친 필사본 — ‘효종’</li><li><b>사건 8</b> 끼워 넣은 족보 — ‘철종’ (살아 있는 임금)</li><li><b>사건 10</b> 피고 쪽 편지 — ‘광복절’</li></ol>${filed.size<7?'<p>해 보지 않은 사건의 종이는 해치가 한 줄로 알려 주었어요.</p>':''}<p>시간 밖의 서고에 사는 사람만이, 여러 시대의 말을 섞어 쓸 수 있어요.</p>`);
  await say('judge','stern','이 편지를 쓴 사람은 [[이 법정에 있소]].');
  Music.stop(0.02); Music.sting('thud'); shake('quake'); await wait(400);
  bgm('crisis');
  await say('guide','normal','방청석 맨 뒤에서 한 사람이 천천히 일어섰다. 사건 1의 그 [[기록관]]이었다. 소매에 매화 모양 얼룩.');
  if(S.found.has('W14')) await say('malsun','base','(방청석에서) 저 사람이야! 내가 [[내 눈으로]] 봤다니까!',{view:'witness'});
  await say('scribe2','base','…사건 1의 그 법정에서, 내 붓은 무너졌소.',{view:'witness'});
  await say('scribe2','base','그 뒤 이 법정의 서고를 맡았지. 모든 사건의 증거 보관함이 내 손 안에 있었소.',{view:'witness'});
  await say('scribe2','base','기록을 의심하라고 가르친 법정에, [[의심할 기록을 잔뜩 안겨 주고 싶었소]]. 그래서 사건마다 한 장씩 끼워 넣었지.',{view:'witness'});
  await say('rival','sweat','…나는 그 편지를 진짜라고 믿고 냈어. 미안해.');
  await say('player','confident','그러니까 우리가 맞대 보는 거야. [[처음부터 지금까지]].');
  await say('player','normal','그리고 하나만. 우리는 그날 기록을 따졌지, [[당신을 비웃지 않았어]].');
  await say('judge','normal','…그대를 서고에 들인 것은 [[나였소]]. 나 또한 확인하지 않았소. 재판관도 틀릴 수 있소.');
  await say('judge','normal','진실을 묻는 것과 사람을 몰아붙이는 것은 다르오. 그날 나는 그대를 [[위로하지 않았소]].');
  await say('scribe2','sweat','……');
  await say('judge','normal','그리고 모두 들으시오. 「삼국사기」 같은 정식 기록은 [[가짜가 아니오]]. 이 사람이 만든 것은 보관함에 끼워 넣은 낱장들뿐이오.');
  await say('judge','normal','[[대부분의 기록은 진짜요]]. 그래서 여러 기록을 맞대면 가짜가 드러나는 것이오.');
  await say('judge','normal','역사를 지우는 자보다 무서운 것은, 역사를 입맛대로 쓰는 자요. 그래서 우리는 기록을 의심하고, [[맞대고, 확인하는 것]]이오.');
  await say('judge','normal','기록관은 따로 재판하겠소. 이 재판의 피고는 이완용이오. 판결로 돌아가오.');
  bgm('investigate');
  await say('judge','normal',`${J10()?'판사':'검사'}, 혐의마다 판결의 이유와 근거를 대시오.`);
  if(!await verdictKind('혐의 ① 을사늑약에 찬성해 외교권을 넘긴 죄','guilty',{q:'나라를 넘기는 서명과 찬성은 정책 판단이 아니라, 백성의 동의 없이 나라를 내준 행위예요.',idx:0,fb:{resp:'나라를 넘기는 데 찬성한 것은 정책이 아니오. 법과 도리를 어긴 [[행위]]요.'}})) return false;
  if(!await reasonEv('혐의 ①을 유죄로 보는 이유는?',[{t:'반대한 대신도 있었는데, 피고는 외교권을 넘기는 조약에 찬성했다.',ok:true,ev:['W3','W4']},{t:'일본의 힘이 컸으니 어쩔 수 없었다.',ok:false,fb:'그것이 바로 이 사건에서 깨야 할 변명이오.'}])) return false;
  if(!await verdictKind('혐의 ② 고종을 물러나게 하고 군대를 해산하게 한 죄','guilty',{q:'황제를 몰아내는 데 앞장섰어요.',idx:1})) return false;
  if(!await reasonEv('혐의 ②를 유죄로 보는 이유는?',[{t:'헤이그 특사를 빌미로 고종을 물러나게 하는 데 앞장섰고, 이어 군대가 해산되었다.',ok:true,ev:['W8','W9']},{t:'황제가 원했다.',ok:false,fb:'황제는 조약이 잘못되었다고 세계에 알리려 했소.'}])) return false;
  if(!await verdictKind('혐의 ③ 나라를 넘기는 조약에 서명한 죄','guilty',{q:'나라를 넘기는 서명은 정책이 아니에요.',idx:2,fb:{resp:'나라를 넘기는 서명은 정책이 아니오. 백성의 동의 없이 나라를 내준 [[행위]]요.'}})) return false;
  if(!await reasonEv('혐의 ③을 유죄로 보는 이유는?',[{t:'1910년 8월 총리대신으로 병합 조약에 서명했다.',ok:true,ev:['W11']},{t:'피가 흐르지 않게 하려고 서명했으니 무죄다.',ok:false,fb:'군인들은 총을 들고 맞섰고, 의병 전쟁이 이어졌소.'}])) return false;
  if(!await verdictKind('혐의 ④ 작위와 돈을 받고 독립운동을 막은 죄','guilty',{q:'대가를 받았고, 만세를 막는 글을 실었어요.',idx:3})) return false;
  if(!await reasonEv('혐의 ④를 유죄로 보는 이유는?',[{t:'일본에게서 작위와 돈을 받았고, 3·1 운동 때 만세를 그만두라는 경고문을 실었다.',ok:true,ev:['W12','W13']},{t:'몰래 독립운동가에게 돈을 보냈다.',ok:false,fb:'그 편지는 가짜로 밝혀졌소.'}])) return false;
  if(!await reasonEv('‘어차피 그렇게 될 일이었다(시대 탓)’는 변명을 배척하는 이유는? (이 판결 이유가 이 사건에서 가장 중요한 문장이오)',[
    {t:'같은 시대에도 끝까지 반대하고, 세계에 알리고, 힘을 모으라고 당부한 사람들이 있었다. 다른 선택이 있었다.',ok:true,ev:['W5','W7','W4']},
    {t:'피고는 나쁜 사람이기 때문이다.',ok:false,fb:'그것은 의견이오. 같은 시대의 다른 선택으로 답하시오.'},
    {t:'그때 일본이 약했기 때문이다.',ok:false,fb:'증거와 맞지 않소.'}])) return false;
  bgm('verdict'); await gavel();
  const reader=J10()?'daon':'judge', rv=J10()?{view:'judge'}:{};
  if(J10()) await say('judge','normal','판사, 판결을 읽으시오.');
  for(let i=0;i<4;i++) chargeSt(i,'guilty');
  await say(reader,J10()?'base':'stern','혐의 ①, ②, ③, ④. 모두 [[유죄]]입니다.',rv);
  await say(reader,J10()?'base':'normal','‘시대 탓’ 변명은 배척합니다. 같은 시대에 다른 길을 고른 사람들이 있었습니다.',rv);
  await say('judge','normal','피고는 처음엔 독립의 문을 세웠소. 그러나 그 문을 지킨 것은 피고가 아니라, [[같은 시대에 다른 길을 고른 사람들]]이었소.');
  await say('judge','normal','시대는 [[핑계가 될 수 없소]].');
  /* 시리즈 마지막 콜백: 박수 아저씨의 맞는 때 박수, 해치의 마지막 아재개그, 똘방의 메밀묵 */
  Music.sting('clap'); await say('clapper','base','(방청석 맨 앞줄에서, 이번에는 꼭 맞는 때에) …짝, 짝, 짝.',{view:'witness'});
  Music.sting('cheer'); await say('guide','normal','(한 사람, 두 사람… 법정 전체가 따라 박수를 쳤다. 해치는 이번에는 방울을 흔들지 않았다.)');
  await say('judge','normal','…열 번의 재판이 끝났으니, 오늘은 [[재판장]]이 아니라 [[재판 짱]]이라 불러도 좋소.');
  Music.sting('cheer'); await say('guide','normal','(처음으로, [[모두가 웃었다]].)');
  await say('judge','normal','그리고 똘방. 그동안 깎았던 메밀묵을 [[모두 돌려주겠소]].'); mukReturn();
  await say('ttolbang','joy','흐어어엉…! 메밀묵이 법정에 가득해요!');
  await say('rival','normal','열 번의 재판이었어. 처음엔 이기고 지는 줄만 알았는데.',{view:'courtyard'});
  await say('player','normal','증거로 따지고, 기록을 의심하고, 다른 선택을 한 사람들을 기억하는 거였어.',{view:'courtyard'});
  const pts=(S.flags.letter==='zoom'?1:0)+(S.trust>=3?1:0)+((S.log||[]).filter(x=>!x.ok).length<=1?1:0);
  const G=J10()?['역사를 지킨 판사','공정한 판사','견습 판사']:['역사를 지킨 검사','진실을 세운 검사','견습 검사'];
  caseResult({grade:G[pts>=3?0:pts===2?1:2],lead:'독립을 외치던 사람이 어디로 갔는지 하루씩 따라가며 모든 변명을 증거로 깼고, 마지막엔 기록을 입맛대로 쓰던 자를 밝혀냈습니다.',
    items:[`가짜 편지: ${S.flags.letter==='zoom'?'증거 확대로 의심함':'처음엔 받아들임'}`,`시대가 안 맞는 말 찾기: 처음에 맞힌 것 ${S.flags.puzzle||0}/3`,'‘시대 탓’ 변명: 같은 시대의 다른 선택으로 배척','시리즈 비밀 「붓을 든 자」: 정체를 밝힘'],
    real:['「삼국사기」','「삼국유사」','「사기」 조선열전','「위략」','「일본서기」','「고려사」','「광해군일기」','「책중일록」','「인조실록」','「남한일기」','「고종실록」·「순종실록」','박규수의 조사 보고','민영환이 남긴 글','「독립신문」','「황성신문」','「매일신보」','북한산 순수비·삼전도비·척화비'],
    judge:'역사를 지우는 자보다 무서운 것은, 역사를 입맛대로 쓰는 자요.',history:HIST10});
  return true;
}
const HIST10='이완용은 1896년 독립협회의 위원장으로 독립문을 세우는 데 참여했습니다. 그러나 1905년 학부대신으로 을사늑약에 찬성했고, 1907년 총리대신으로 헤이그 특사를 빌미로 고종을 물러나게 하는 데 앞장섰으며, 그해 군대가 해산되었습니다. 1910년 8월 병합 조약에 서명했고, 일본에게서 작위와 은사금을 받았습니다. 1919년 3·1 운동 때는 만세를 그만두라는 경고문을 신문에 실었습니다. 같은 시대에 한규설은 끝까지 반대했고, 민영환은 목숨을 끊으며 독립을 당부했고, 고종은 헤이그에 특사를 보냈습니다. 이 사건의 기록관과 가짜 편지는 게임 속 상상입니다.';
regCase(10,{title:'독립문 앞의 남자',desc:'이완용 · 검사·판사 · 난이도 9 (마지막 사건)',ev:EVIDENCE10,locs:LOCS10,terms:TERMS10,defName:'이완용',time:'100~120분',p2at:2,
  lead:'마지막 사건이에요. 변호인 자리는 잠겨 있어요. 검사나 판사로 피고의 변명을 증거로 깨 보세요. (교사 사전 검토 필수)',
  locked:{def:'변호인 잠금'},
  openLine:'지금부터 [[역사 법정]]을 엽니다. 마지막 피고, 이완용.',history:HIST10,
  views:{prologue10:prologueView('#2c2f3a','#0d0e14')},storyMode:true,
  goal:{pros:'마지막 사건이에요. 피고의 변명을 하루씩 증거로 깨고, ‘시대 탓’이라는 말에 같은 시대의 다른 선택으로 답해요.',judge:'마지막 사건이에요. 피고의 변명을 가르고, ‘시대 탓’이라는 말에 같은 시대의 다른 선택으로 답해요.'},
  recall:{q:'지난 사건에서 1868년 무덤 도굴 사건을 1866년 박해의 이유로 쓸 수 없었던 까닭은?',opts:[{t:'뒤에 일어난 일은 앞의 일의 이유가 될 수 없어서',ok:true},{t:'도굴이 실패했기 때문에'},{t:'다른 나라 사람이 한 일이라서'}],yes:'잘 기억하고 있구려. 이번에도 연도를 따라가 보시오. 1896년부터 1919년까지.',no:'…뒤의 일은 앞의 일의 이유가 될 수 없소. 이번에도 연도를 따라가 보시오.'},
  bgCards:{1:{ic:'🏛️',t:'1896년 독립협회가 만들어지고, 이듬해 독립문을 세웠어요.'},2:{ic:'📜',t:'1905년 일본이 대한제국의 외교권을 빼앗는 조약(을사늑약)을 억지로 맺었어요.'},3:{ic:'⛓️',t:'1907년 고종이 물러나고 군대가 해산되었고, 1910년 나라가 일본에 넘어갔어요.'},4:{ic:'🇰🇷',t:'1919년 3월, 사람들이 독립을 외치며 만세를 불렀어요(3·1 운동). 마지막 판결의 날이에요.'}},
  lesson:{opts:[{t:'시대는 핑계가 될 수 없다.',r:'그렇소. 같은 시대에 다른 길을 고른 사람들이 있었소.'},{t:'대부분의 기록은 진짜다. 맞대면 가짜가 드러난다.',r:'그렇소. 의심은 믿기 위해 하는 것이오.'},{t:'다른 길을 고른 사람들을 기억한다.',r:'그렇소. 그 문을 지킨 것은 그들이었소.'}]},
  paper:{id:'WF',anach:'광복절',say:'이 편지도 [[수상한 종이]] 묶음에 넣겠소. 묶음의 마지막 장이오.'},
  gag:{scene:'말순 할머니 「이번엔 진짜 봤다니까!」',
    inv:{1:[['ttolbang','bang','마지막 사건이에요! 증거 나와라, 뚝딱!'],['guide','normal','(방망이에서… 작은 [[열쇠]] 하나가 떨어졌다.)'],['ttolbang','shock','어? 열쇠? 이건 법정 [[서고 열쇠]] 같은데… 왜 제 방망이에서?'],['ME','think','(서고 열쇠… 지금은 주머니에 넣어 두자.)']],
      2:[['ttolbang','base','중명전에 가면 조용히 하세요. 그날 회의실 앞을 지킨 호위병이 있대요.']],
      3:[['ttolbang','base','신문사 앞에 말순 할머니가 와 계세요. 이번엔 “진짜 봤다”고 하시는데… 또 옆집 사람 아닐까요?']],
      4:[['ttolbang','base','오늘은 짧게, 박물관만 가요. 마지막 날이에요.']]},
    fix:{2:{say:'어제 법정 요약! 이완용은 처음부터 끝까지 [[나라를 판 사람]]이었대요!',opts:[{t:'아니야. 처음엔 독립협회 위원장으로 독립문을 세웠어. 그 뒤에 어디로 갔는지 따라가는 거야.',ok:true},{t:'맞아. 처음부터 그랬어.'}]},
      3:{say:'어제 법정 요약! 을사늑약 때 대신들은 [[모두]] 찬성했대요!',opts:[{t:'아니야. 한규설은 끝까지 반대하다 끌려 나갔어.',ok:true},{t:'맞아. 모두 찬성했어.'}]}},
    clap:'(이번에도 너무 일찍) 짝짝… 아, 아니구나.'},
  gojeung:['독립협회 창립(1896)과 이완용의 직책(위원장), 독립문 건립(1897)','을사늑약 찬성 대신 다섯 명, 한규설의 반대','민영환 자결과 유서, 「시일야방성대곡」(황성신문, 장지연)','헤이그 특사(1907)와 고종 퇴위 과정에서 이완용의 역할','군대 해산과 박승환 자결, 그 뒤 의병 전쟁','병합 조약 서명(1910.8)','작위(백작, 뒤에 후작)와 은사금 액수','1919년 경고문 게재 횟수와 신문(매일신보)','3·1 운동 때 독립문 부근 만세 시위','기록관(붓을 든 자)과 가짜 편지, 말순 할머니는 게임 속 상상','‘광복절’ 명칭 제정(1949) — 가짜 편지의 시대 안 맞는 말 (‘광복’이라는 낱말 자체는 1910년대에도 쓰였으므로 쓰지 않음)'],
  roles:{pros:run10,judge:run10}});
