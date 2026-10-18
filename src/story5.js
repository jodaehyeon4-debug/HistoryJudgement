/* ===== 사건 5 「텅 빈 궁궐」: 판사 모드(첫 판사 사건) + 피고 바꾸기 =====
   처음 피고 고종 → 증거가 ‘결정한 사람은 다른 사람’을 가리키면 판사가 피고를 최우로 바꾼다.
   혐의 ① 백성을 두고 지배층만 강화도로 옮긴 죄 → 일부 유죄(산성·섬으로 피하라는 명령 참작)
   혐의 ② 전쟁 중 사치를 누린 죄 → 유죄(사사로운 잔치만, 대장경은 사치가 아님) / 공: 약 30년의 버팀
   고종·최우·유승단·김윤후는 실존 인물, 대사는 상상. */
addCast('gojong',{name:'고종',label:'피고 고종',col:'#8a2a2a',spec:{skin:'#efc9a2',robe:'#b3352b',robe2:'#86241d',collar:'round',hat:'ikseon',hair:'#1c1a20',beard:'thin',emblem:true,iris:'#3a2a20'}});
addCast('choewoo',{name:'최우',label:'방청석의 최우',col:'#2a2b33',spec:{skin:'#e8bf96',robe:'#2a2b33',robe2:'#17181d',collar:'round',hat:'gat',hair:'#1c1a20',beard:'long',beardColor:'#2a2220',iris:'#2e2018'}});
addCast('yuseungdan',{name:'유승단',label:'증인 유승단',col:'#2f5d8a',spec:{skin:'#ecc8a4',robe:'#2f5d8a',robe2:'#1f3f60',collar:'round',hat:'gat',hair:'#d8d8d8',beard:'long',beardColor:'#e6e0d4',iris:'#3a2a20'}});
addCast('gatekeeper',{name:'궁궐 지기',label:'궁궐 지기',col:'#5a4a3a',spec:{skin:'#d9a77c',robe:'#6a5a48',robe2:'#4a3e30',collar:'cross',hat:'short',hair:'#8a8a8a',beard:'thin',iris:'#3a2a20'}});
addCast('yunhu',{name:'김윤후',label:'증인 김윤후',col:'#6a5a30',spec:{skin:'#e2b48a',robe:'#8a6a2a',robe2:'#5e4818',collar:'cross',hat:'short',hair:'#e2b48a',beard:'none',iris:'#3a2a20'}});
addCast('wallkeeper',{name:'성벽 지기',label:'성벽 지기',col:'#4a4a3a',spec:{skin:'#d9a77c',robe:'#5a5a48',robe2:'#3e3e30',collar:'cross',hat:'short',hair:'#2a2220',beard:'thin',iris:'#3a2a20'}});
addCast('carver',{name:'대장경 장인',label:'장인',col:'#5a3a20',spec:{skin:'#e2b48a',robe:'#7a5a3a',robe2:'#5a3e24',collar:'cross',hat:'short',hair:'#1c1a20',beard:'thin',iris:'#3a2a20'}});
addCast('farmer5',{name:'산성에 피한 농부',label:'피해자 농부',col:'#6a5038',spec:{skin:'#d9a77c',robe:'#7a6248',robe2:'#5a4634',collar:'cross',hat:'short',hair:'#2a2220',beard:'thin',iris:'#3a2a20'}});

const EVIDENCE5=[
  {id:'Q1',reuse:true,type:'사료',icon:'timeline',title:'1232년 천도',body:'1232년 고려 조정은 몽골의 침입을 피해 수도를 개경에서 강화도로 옮겼다.',src:'「고려사」',trust:3,note:'누가 이 일을 정했을까요?'},
  {id:'Q2',reuse:true,type:'사료',icon:'scroll',title:'최씨 댁의 회의',body:'천도를 정한 회의는 궁궐이 아니라 최우의 집에서 열렸다. 최우가 재상들을 자기 집에 모아 천도를 의논했고, 반대한 신하도 있었다.',src:'「고려사」를 바탕으로 정리',trust:3,note:'결정한 곳이 어디였는지 보세요.'},
  {id:'Q3',type:'사료',icon:'alliance',title:'왕보다 큰 집',body:'최씨 집안은 자기 집에 관청을 두고 벼슬을 정했으며, 많은 군사를 따로 거느리고 나라를 움직였다.',src:'「고려사」를 바탕으로 정리',trust:3,note:'왕보다 힘센 장군 집안이 나라를 움직이던 때예요(무신 정권).'},
  {id:'Q4',type:'사료',icon:'army',title:'처인성의 화살',body:'1232년 처인성(지금의 용인)에서 승려 김윤후와 백성들이 몽골 장수 살리타를 활로 쏘아 쓰러뜨렸다.',src:'「고려사」',trust:3,note:'누가 이긴 싸움이었나요?'},
  {id:'Q5',reuse:true,type:'사료',icon:'map',title:'산성과 섬으로',body:'조정은 백성들에게 산성이나 섬으로 들어가 몽골군을 피하라고 명했다.',src:'「고려사」를 바탕으로 정리',trust:3,note:'백성에게도 피할 길을 열었다는 기록이에요.'},
  {id:'Q6',reuse:true,type:'증언',icon:'scroll',title:'불려 온 백성',body:'강화도에 성을 쌓고 궁궐을 짓는 데 많은 백성이 불려 와 일했다.',src:'성벽 지기의 이야기 · 사료 바탕',trust:2,note:'백성은 그때 무엇을 하고 있었나요?'},
  {id:'Q7',type:'사료',icon:'scroll',title:'대장경 16년',body:'1236년부터 1251년까지 16년 동안 나무판에 불경을 새겼다(팔만대장경). 부처의 힘으로 나라를 지키려는 바람이 담겼다.',src:'「고려사」 · 해인사 대장경판',trust:3,note:'나라를 지키려던 일일까요, 사치일까요?'},
  {id:'Q8',reuse:true,type:'사료',icon:'censer',title:'그해의 잔치',body:'전쟁이 이어지던 때 최우가 자기 집에서 비단과 꽃으로 꾸민 큰 잔치를 열었다는 기록이 있다.',src:'「고려사」 열전을 바탕으로 정리',trust:3,note:'전쟁 중의 잔치예요.'},
  {id:'Q9',type:'증언',icon:'scroll',title:'김윤후의 사양',body:'처인성 싸움 뒤 나라가 높은 벼슬을 내리자, 김윤후는 공을 백성에게 돌리며 사양했다.',src:'「고려사」 김윤후 열전 바탕 · 2일차 법정',trust:3,note:'처인성의 공은 누구의 것인가요?'},
  {id:'QF',type:'문서',icon:'scroll',fake:true,title:'잔치 기록 한 장',body:'“최우의 잔치에 1만 명이 모여 열흘 밤낮을 놀았다.” 쓴 사람과 날짜가 없다.',src:'최씨 집안 정원에 떨어져 있던 종이',trust:1,note:'다른 기록과 숫자가 맞을까요?',
   zoom:{say:['종이를 크게 확대해 보았다.','글씨 끝에 작은 [[매화 모양 먹 얼룩]]. 숫자 ‘1만’과 ‘열흘’은 덧쓴 것처럼 먹 색이 다르다.','진짜 기록보다 [[열 배로 부풀린]] 종이 같다.'],plum:true,note:'매화 얼룩, 숫자를 덧쓴 흔적. 열 배로 부풀린 기록.'}},
  {id:'QD1',type:'유물',icon:'censer',title:'청자 술병',body:'푸른빛이 도는 고려청자 술병.',src:'최씨 집 대문 앞',trust:3,note:'고려의 솜씨예요. 쟁점과 이어질까요?'},
  {id:'QD2',type:'물건',icon:'army',title:'몽골 화살',body:'몽골군이 쓰던 화살 한 대.',src:'최씨 집 대문 앞',trust:3,note:'몽골이 쳐들어왔다는 것은 다들 아는 사실이에요.'}
];
const LOCS5=[
  {id:'gaegyeong',name:'개경 빈 궁궐',time:'흐린 아침',rooms:[
    {id:'gk-throne',name:'왕의 자리',intro:'개경 궁궐의 빈 왕좌. 주인이 떠난 지 오래다.',miss:['먼지 쌓인 바닥이다.','텅 빈 방이다.','아무것도 없다.','바람 소리뿐이다.'],
     spots:[{x:38,y:30,w:24,h:36,label:'빈 왕좌',say:['아무도 앉지 않은 왕좌다. 먼지가 두껍게 쌓였다.']},{x:6,y:20,w:14,h:50,label:'찢어진 휘장',say:['휘장이 바람에 펄럭인다.']},{x:76,y:60,w:16,h:22,label:'깨진 향로',say:['깨진 향로다. 단서는 아니다.']}]},
    {id:'gk-office',name:'빈 관청',intro:'나랏일을 보던 관청이다. 서류가 흩어져 있다.',miss:['흩어진 종이다.','빈 책상이다.','아무것도 없다.'],
     spots:[{x:56,y:22,w:22,h:30,label:'벽에 붙은 방',ev:'Q1',say:['벽에 낡은 방(알리는 글)이 붙어 있다.','“1232년, 서울을 [[강화도로 옮긴다].” 수도를 옮긴다는 알림이다.']},{x:10,y:56,w:24,h:24,label:'빈 책상',say:['관리들이 쓰던 책상이다.']},{x:40,y:70,w:14,h:14,label:'떨어진 붓',say:['말라붙은 붓이다.']}]},
    {id:'gk-gate',name:'궁궐 문',intro:'굳게 닫힌 궁궐 문이다. 늙은 궁궐 지기가 지키고 있다.',miss:['돌계단이다.','문틈의 먼지다.','아무것도 없다.'],
     spots:[{x:20,y:16,w:30,h:60,label:'닫힌 문',say:['커다란 문이 굳게 닫혀 있다.']},{x:6,y:76,w:16,h:14,label:'돌사자',say:['문 앞을 지키는 돌사자다.']}],
     npcs:[{who:'gatekeeper',expr:'base',place:{x:72,h:62,b:2},topics:[
      {id:'gk-hi',t:'궁궐은 왜 비었나요?',lines:[['gatekeeper','base','다들 강화도로 갔소. 나만 남아 문을 지키지.']]},
      {id:'gk-meet',t:'회의는 어디서',lock:'Q1',must:true,lockSay:'(궁궐 지기는 문만 바라본다. 수도를 옮긴 일을 보여 주면 이야기해 줄지도 모른다.)',
       lines:[['gatekeeper','base','천도 말이오? 그건 궁궐에서 정한 게 아니오.'],['gatekeeper','base','대신들이 [[최씨 댁]]에 불려 가서 정했소. 왕께서는… 그 자리에 계셨는지도 모르겠구려.'],['ME','think','(궁궐이 아니라 최씨 댁에서… 결정한 사람은 누구였을까?)']],gives:['Q2']}],
      present:{Q1:{lines:[['gatekeeper','base','그 방 말이오? 내가 붙였지. 그런데 그걸 정한 곳은…']],unlock:'gk-meet'}},
      def:[['gatekeeper','base','늙은이는 잘 모르는 물건이오.']]}]}]},
  {id:'choegate',name:'최씨 집 대문 앞',time:'낮',intro:'최씨 집안의 대문이다. 궁궐 문보다 크고, 군사들이 지키고 있다.',
   miss:['돌바닥이다.','말발굽 자국이다.','아무것도 없다.'],
   spots:[{x:30,y:10,w:40,h:56,label:'커다란 대문',ev:'Q3',say:['궁궐 문보다 큰 대문이다. 문 안쪽으로 관청 같은 건물이 보인다.','최씨 집안은 [[자기 집에 관청을 두고]] 벼슬을 정했다. 왕보다 큰 집이다.']},
    {x:6,y:66,w:14,h:18,label:'청자 술병',ev:'QD1',say:['문 옆에 고려청자 술병이 놓여 있다.','멋진 청자다. 쟁점과 관계가 있을까?']},
    {x:80,y:64,w:14,h:20,label:'박힌 화살',ev:'QD2',say:['담장에 몽골 화살 한 대가 박혀 있다.','몽골이 쳐들어온 건 다 아는 사실인데…']}]},
  {id:'cheoin',name:'처인성',time:'아침',from:2,intro:'1232년 김윤후와 백성들이 몽골군과 싸운 처인성(지금의 용인)이다.',
   miss:['흙 성벽이다.','풀이다.','아무것도 없다.'],
   spots:[{x:56,y:30,w:20,h:30,label:'성벽에 꽂힌 화살',ev:'Q4',say:['성벽 위에 화살 자국이 가득하다.','이곳에서 김윤후와 [[백성들이]] 몽골 장수 살리타를 쓰러뜨렸다.']},{x:8,y:60,w:24,h:24,label:'낮은 흙 성벽',say:['그리 높지 않은 흙 성벽이다. 여기서 이겼다니.']}]},
  {id:'ganghwa',name:'강화도 궁궐',time:'낮',from:2,rooms:[
    {id:'gh-yard',name:'궁궐 마당',intro:'강화도에 새로 지은 궁궐의 마당이다.',miss:['새 돌바닥이다.','아무것도 없다.','바닷바람이 분다.'],
     spots:[{x:60,y:20,w:24,h:30,label:'게시판의 명령',ev:'Q5',say:['게시판에 명령이 붙어 있다.','“백성은 [[산성과 섬으로]] 들어가 몽골군을 피하라.”']},{x:10,y:40,w:20,h:30,label:'새 기둥',say:['새로 세운 기둥이다.']}]},
    {id:'gh-garden',name:'최씨 집안 정원',from:3,intro:'강화도 최씨 집안의 넓은 정원이다. 전쟁 중이라고는 믿기지 않는다.',miss:['잘 가꾼 풀밭이다.','연못이다.','아무것도 없다.'],
     spots:[{x:30,y:22,w:30,h:30,label:'비단 장식',ev:'Q8',say:['나무마다 비단과 꽃 장식이 걸려 있다.','최우가 [[큰 잔치]]를 열었다는 기록이 있다. 전쟁이 이어지던 때다.']},
      {x:70,y:70,w:14,h:12,label:'풀밭의 종이',ev:'QF',say:['풀밭에 종이 한 장이 떨어져 있다.','“최우의 잔치에 1만 명이 모여 열흘 밤낮을 놀았다.” …쓴 사람도 날짜도 없다.']},
      {x:6,y:60,w:20,h:24,label:'연못',say:['잔잔한 연못이다.']}]},
    {id:'gh-wall',name:'성벽',intro:'강화도를 두른 성벽이다. 아직 쌓고 있는 곳도 있다.',miss:['돌무더기다.','흙이다.','아무것도 없다.'],
     spots:[{x:10,y:20,w:40,h:40,label:'쌓다 만 성벽',say:['돌을 쌓다 만 성벽이다.']},{x:40,y:70,w:14,h:16,label:'지게',say:['돌을 나르던 지게다.']}],
     npcs:[{who:'wallkeeper',expr:'base',place:{x:74,h:60,b:2},topics:[
      {id:'wk-hi',t:'성벽은 누가 쌓나요?',lines:[['wallkeeper','base','성벽 쌓는 거 말이오? 바빠서 길게 말 못 하오.']]},
      {id:'wk-work',t:'성벽 공사',lock:'Q1',must:true,lockSay:'(성벽 지기는 돌만 나른다. 수도를 옮긴 일을 보여 주며 물어볼까?)',
       lines:[['wallkeeper','base','수도를 옮기니 성이 있어야 하잖소. 성도 궁궐도 다 [[백성들이 불려 와서]] 쌓았지.'],['wallkeeper','base','농사철에도 불려 왔소.']],gives:['Q6']}],
      present:{Q1:{lines:[['wallkeeper','base','천도라… 그 뒤로 일이 끝이 없었소.']],unlock:'wk-work'}},
      def:[['wallkeeper','base','바쁘오.']]}]}]},
  {id:'carving',name:'대장경 판각소',time:'오후',from:3,intro:'나무판에 불경을 새기는 판각소다. 나무 깎는 소리가 끊이지 않는다.',
   miss:['나무 부스러기다.','먹 냄새가 난다.','아무것도 없다.'],
   spots:[{x:40,y:30,w:24,h:30,label:'쌓인 경판',ev:'Q7',say:['글자를 새긴 나무판이 높이 쌓여 있다.','1236년부터 16년 동안 새긴 [[대장경]]이다. 부처의 힘으로 나라를 지키려 했다.']},{x:8,y:60,w:20,h:24,label:'조각칼',say:['날이 닳은 조각칼이다.']}],
   npcs:[{who:'carver',expr:'base',place:{x:78,h:60,b:2},topics:[
     {id:'cv-hi',t:'무엇을 새기나요?',lines:[['carver','base','부처님 말씀이오. 한 글자 새길 때마다 절을 하지.']]},
     {id:'cv-wood',t:'나무 값',lock:'Q6',must:true,lockSay:'(장인은 칼질만 한다. 백성들이 불려 온 이야기를 꺼내면 대답할지도 모른다.)',
      lines:[['carver','base','나무와 일손은 [[백성에게서]] 나왔지. 그건 맞소.'],['carver','base','그래도 우리는 나라를 지키려고 새겼소. 잔치하고는 다르오.']]}],
    present:{Q6:{lines:[['carver','base','백성들 이야기로군…']],unlock:'cv-wood'}},
    def:[['carver','base','나무판 말고는 잘 모르오.']]}]}
];
const TERMS5=[
  {w:'천도',d:'나라의 수도를 옮기는 일이에요.',ic:'🏯'},
  {w:'무신 정권',d:'왕보다 힘센 장군 집안이 나라를 움직이던 때예요. 최씨 집안이 대표적이에요.',ic:'⚔️'},
  {w:'판사',d:'양쪽 말을 듣고, 증거로 확인된 것과 아닌 것을 가려 판결하는 사람이에요.',ic:'⚖️'},
  {w:'의견일 뿐',d:'좋다·나쁘다처럼 말하는 사람의 생각이에요. 증거로 확인할 수 있는 일이 아니에요.',ic:'💭'},
  {w:'판결 저울',d:'동기·방법·결과·그 뒤의 행동을 하나씩 달아 보는 판사의 도구예요.',ic:'⚖️'},
  {w:'대장경',d:'불교 경전을 나무판에 새긴 것이에요. 고려는 몽골과 싸우던 때 팔만대장경을 새겼어요.',ic:'📜'}
];
const unmask5=on=>{ NAMES.choewoo=on?'피고 최우':'방청석의 최우'; NAMES.gojong=on?'증인 고종':'피고 고종'; };
const C5A=()=>[{t:'고종: 백성을 두고 수도를 강화도로 옮긴 죄'}];
const C5B=()=>[{t:'① 백성을 두고 지배층만 강화도로 옮긴 죄'},{t:'② 전쟁 중 사치를 누린 죄'}];
const T5yu=()=>({key:'유승단',who:'yuseungdan',allReveal:true,lines:[
  {text:'나는 천도에 반대한 신하, 유승단이오.',expr:'base',press:[['daon','normal','왜 반대하셨나요?'],['yuseungdan','base','성을 버리고 섬으로 가면 남은 백성은 어쩌라는 말이오.']]},
  {text:'그날 회의에서 나는 끝까지 반대했소.',expr:'base',press:[['daon','normal','회의는 누가 이끌었나요?'],['yuseungdan','base','…다음 말을 들으시오.']]},
  {text:'그런데 그날 회의에서 말을 끝낸 사람은 왕이 아니었소.',expr:'base',reveal:3,press:[['daon','think','그럼 누구였죠?'],['yuseungdan','base','그, 그것은…'],['judge','normal','판사의 물음이오. 증인은 답하시오.']]},
  {text:'…최우 공이 칼자루를 쥐고 앉아 있었소. 아무도 그 앞에서 다른 말을 하지 못했지.',expr:'base',hidden:true}
]});
const T5go=()=>({key:'고종',who:'gojong',allReveal:true,lines:[
  {text:'내가 천도를 정했다고 하시오.',expr:'base',reveal:1,press:[['daon','think','‘정했다고 하시오’라니… 정했다는 건가요, 그렇게 말하라는 건가요?'],['gojong','sweat','그, 그건…'],['judge','normal','피고, 판사의 물음에 답하시오.']]},
  {text:'…그렇게 말하지 않으면 나도 [[무사하지 못했을]] 것이오.',expr:'sweat',hidden:true},
  {text:'백성을 걱정하지 않은 것은 아니오.',expr:'base',press:[['daon','normal','걱정만으로는 무엇을 했는지 알 수 없어요.'],['gojong','base','…']]}
]});
const T5yh=()=>({key:'김윤후',who:'yunhu',allReveal:true,lines:[
  {text:'처인성의 승려, 김윤후요.',expr:'base',press:[['daon','normal','처인성에서 무엇을 하셨죠?'],['yunhu','base','성을 지켰을 뿐이오.']]},
  {text:'몽골 장수 살리타가 화살에 쓰러졌소.',expr:'base',press:[['daon','normal','큰 공을 세우셨네요. 상을 받으셨나요?'],['yunhu','base','…나라에서 높은 벼슬을 주겠다 했소.']]},
  {text:'그러나 나는 그 벼슬을 받지 않았소.',expr:'base',reveal:3,press:[['daon','think','왜 큰 상을 사양하셨죠?'],['yunhu','base','…']]},
  {text:'싸울 때 내 손에는 활도 칼도 없었소. [[싸운 것은 백성들]]이오.',expr:'base',hidden:true,gives:['Q9']}
]});

async function prologue5(){
  bgm('crisis');
  await say('guide','normal','1232년, 고려의 수도 개경.',{view:'prologue5'});
  await playShadow('emptypalace');
  await say('guide','normal','몽골군이 쳐들어오자, 조정은 바다 건너 강화도로 떠났다. 궁궐은 텅 비었다.',{view:'prologue5'});
  await say('voice','normal','역사가 묻는다. 이름만 왕인 사람과 실제로 결정한 사람이 다르다면, [[누구에게 책임을 물어야 하는가]].',{view:'prologue5'});
  await titleCard('사건 5','텅 빈 궁궐');
}
async function runJudge5(from){
  unmask5(!!S.flags.switched);
  if(from<=0){ await prologue5(); bgm('investigate');
    await say('judge','normal','다온 판사, 이번에는 그대가 [[판사석]]에 앉으시오. 내가 옆에서 돕겠소.',{view:'lobby'});
    await say('player','confident','검사 하람이에요. 피고는 고려의 왕, [[고종]]이에요.',{view:'lobby'});
    await say('rival','confident','변호인 누리예요. 판사가 어느 쪽 말을 받아들일지 기대할게요.',{view:'lobby'});
    await infoCard('판사 모드 규칙','<p><b>1. 주장 가르기</b> — 검사·변호인·증인의 주장마다 <b>증거로 확인됨 / 확인 안 됨 / 의견일 뿐</b>을 고르고, ‘확인됨’이면 증거를 붙여요.</p><p><b>2. 더 묻기</b> — 증인에게 물어 숨은 말을 끌어내요. 판사는 증거로 증언을 공격하지 않아요.</p><p><b>3. 판결 저울</b> — 동기, 방법, 결과, 그 뒤의 행동을 하나씩 달아요.</p><p><b>4. 피고 바꾸기</b> — 증거가 ‘결정한 사람은 다른 사람’을 가리키면, 판사가 피고를 바꿀 수 있어요. (이 사건만)</p><p>증거 없는 주장을 ‘확인됨’으로 고르거나, 근거와 안 맞는 판결 이유를 쓰면 해치 방울이 깨져요.</p>');
    await say('daon','base','재판 전에 증거부터 살펴보겠어요.',{view:'lobby'}); }
  await playDays([
    {inv:async()=>{ await invDay(1,'[[개경 빈 궁궐]]과 [[최씨 집 대문]]을 조사하자. 궁궐은 구역 세 곳이 있어. 판사도 증거를 알아야 가를 수 있어.'); },court:d1_5,
     learned:['1232년 수도를 강화도로 옮기는 결정은 궁궐이 아니라 최우의 집에서 내려졌다.','‘확인 안 됨’과 ‘의견일 뿐’은 다르다.','판사는 겉의 자리가 아니라 실제로 한 일을 본다.']},
    {inv:async()=>{ await invDay(2,'[[처인성]]과 [[강화도 궁궐]]이 열렸어. 강화도에는 마당과 성벽이 있어.'); },court:d2_5,
     learned:['조정은 백성에게 산성과 섬으로 피하라고 명했다.','처인성의 승리는 김윤후와 백성들의 공이다.','‘다르게 할 수도 있었다’는 의견이지, 유죄의 증거가 아니다.']},
    {inv:async()=>{ await invDay(3,'[[대장경 판각소]]가 열렸고, 강화도의 [[최씨 집안 정원]]에도 들어갈 수 있어.'); },court:d3_5,
     learned:['대장경은 나라를 지키려던 일이고, 사사로운 잔치와는 다르다.','백성이 성 쌓기에 불려 가던 때 큰 잔치가 열렸다.','두 증거를 맞대면 하나로는 보이지 않던 것이 보인다.']},
    {court:d4_5}
  ],from);
}
async function switchDefendant(){
  unmask5(true); S.flags.switched=true; setCharges(C5B());
  await say('judge','normal','판사는 겉의 자리가 아니라 [[실제로 한 일]]을 보오.');
  Music.sting('thud'); flash(); await wait(400);
  await say('guide','normal','방청석 앞줄에 앉아 있던 사람이 천천히 일어섰다.');
  await say('choewoo','base','…판사가 나를 부르는군. 좋소. 나는 최우요.',{view:'witness'});
  await say('player','confident','그럼 피고 최우의 혐의를 다시 세우겠어요. 첫째, [[백성을 두고 지배층만 강화도로 옮긴 죄]]. 둘째, [[전쟁 중 사치를 누린 죄]].');
}
async function d1_5(){
  await courtOpen(1);
  setCharges(C5A());
  await say('player','confident','피고 고종은 백성을 버리고 수도를 강화도로 옮겼습니다.');
  await say('rival','confident','왕은 나라를 지키려 했습니다!');
  await say('judge','normal','판사, 첫 연습이오. 두 사람의 주장을 [[가려 보시오]].');
  if(!await sortClaims([
    {who:'player',expr:'confident',text:'왕이 천도를 결정했다.',ans:'no',ev:['Q2'],after:[['judge','normal','그렇소. 결정한 자리는 궁궐이 아니라 최씨 댁이었소.']]},
    {who:'rival',expr:'confident',text:'왕은 백성을 걱정했다.',ans:'op',after:[['judge','normal','걱정했는지는 마음의 일이라 확인할 수 없소. 의견일 뿐이오.']]}])) return false;
  await say('player','normal','그럼 증인을 부를게요. 천도에 반대한 신하 [[유승단]]입니다.');
  bgm('testimony'); await say('yuseungdan','base','유승단이오.');
  if(!await testimony(T5yu(),'나는 반대했소','판사는 더 묻기로 숨은 말을 끌어내요')) return false;
  await say('judge','normal','이번엔 피고 고종에게 물으시오.');
  bgm('testimony'); await say('gojong','base','…고려의 왕이오.');
  if(!await testimony(T5go(),'내가 정했다고 하시오','판사는 더 묻기로 숨은 말을 끌어내요')) return false;
  bgm('crisis');
  const c=await choiceSheet('판사, 피고를 바꾸겠소?',[{t:'예. 천도를 실제로 정한 사람은 최우입니다. 이 재판에서는 최우에게 묻겠습니다.',ok:true,tag:'switch'},{t:'아니요. 그래도 왕은 왕입니다. 고종을 계속 재판하겠습니다.',ok:true,tag:'later'}]);
  S.flags.switchDay=c.tag==='switch'?1:2; track('switch',{day:S.flags.switchDay});
  if(c.tag==='switch') await switchDefendant();
  else { await say('judge','normal','…판사의 판단을 존중하오. 다만 증거가 가리키는 곳을 잘 보시오.'); }
  await gavel(); await titleCard('― 1일차 끝 ―','왕좌 뒤의 사람');
  return true;
}
async function d2_5(){
  await courtOpen(2);
  if(!S.flags.switched){
    await say('player','confident','판사님, 어제의 증거로 다시 요청합니다. 천도를 정한 곳은 [[최씨 댁]]이었고, 회의를 끝낸 사람은 최우였어요.');
    await say('rival','normal','변호인도 같은 생각이에요. 이름만 왕인 사람을 벌하는 건 공정하지 않아요.');
    await say('daon','base','…알겠어요. 피고를 바꾸겠어요.');
    await switchDefendant();
  }
  await say('judge','normal','피고 최우, 증언하시오.');
  bgm('testimony');
  await say('choewoo','base','나는 나라를 지켰소. 몽골에 맞서 강화도에서 버텼지.',{testimony:true,tag:'증언'});
  await say('judge','normal','판사, 피고의 주장을 가르시오.');
  if(!await sortClaims([
    {who:'choewoo',expr:'base',text:'백성에게도 피할 길을 열어 주었소.',ans:'ok',ev:['Q5']},
    {who:'choewoo',expr:'base',text:'그래서 백성은 모두 안전했소.',ans:'no',after:[['judge','normal','‘모두 안전했다’는 증거는 아직 없소. 피해를 입은 사람의 말을 들어 봐야 하오.']]}])) return false;
  await say('player','normal','증인을 부를게요. 처인성의 승려 [[김윤후]]입니다.');
  bgm('testimony'); await say('yunhu','base','김윤후요.');
  if(!await testimony(T5yh(),'처인성에서','판사는 더 묻기로 숨은 말을 끌어내요')) return false;
  if(!await sortClaims([{who:'player',expr:'confident',text:'최우도 김윤후처럼 싸울 수 있었다.',ans:'op',after:[['judge','normal','그것은 ‘그랬으면 좋았겠다’는 생각이오. 참작의 재료일 수는 있어도 유죄의 증거는 아니오.']]}])) return false;
  if(!await scale('혐의 ① 백성을 두고 지배층만 강화도로 옮긴 죄',[
    {k:'동기',q:'최우가 천도를 정한 까닭으로 증거에 맞는 것은?',opts:[{t:'몽골군을 피해 나라의 중심을 지키려 했다.',ok:true},{t:'백성이 미워서 버리려 했다.',ok:false,fb:'그런 증거는 없소. 미워했다는 것은 짐작이오.'}]},
    {k:'방법',q:'어떻게 정했나?',opts:[{t:'자기 집에 재상들을 모아, 반대를 누르고 정했다.',ok:true},{t:'백성의 뜻을 물어 정했다.',ok:false,fb:'그런 기록은 없소.'}]},
    {k:'결과',q:'무슨 일이 일어났나?',opts:[{t:'지배층은 섬으로 갔고, 백성은 산성과 섬으로 피하라는 명을 받았다. 피하지 못한 백성도 있었다.',ok:true},{t:'모든 백성이 무사했다.',ok:false,fb:'그것은 아직 확인되지 않은 주장이었소.'}]},
    {k:'그 뒤의 행동',q:'그 뒤 최우가 한 일은?',opts:[{t:'강화도에서 약 30년을 버티는 바탕을 만들었지만, 성 쌓기에 백성을 불러들였다.',ok:true},{t:'아무 일도 하지 않았다.',ok:false,fb:'증거를 다시 보시오.'}]}])) return false;
  await say('rival','confident','그런데 재판장님, 검사는 내일 [[팔만대장경]]까지 사치라고 할 거예요!');
  await say('player','sweat','그, 그건…!');
  await gavel(); await titleCard('― 2일차 끝 ―','사치와 나라 지키기');
  return true;
}
async function d3_5(){
  await courtOpen(3);
  await say('judge','normal','혐의 ②를 다루오. 판사, 주장을 가르시오.');
  if(!await sortClaims([
    {who:'player',expr:'confident',text:'대장경을 새긴 것도 사치였다.',ans:'no',ev:['Q7'],after:[['judge','normal','대장경은 나라를 지키려는 바람으로 새긴 것이오. 사사로운 잔치와는 다르오.']]},
    {who:'player',expr:'confident',text:'최우는 전쟁 중에 큰 잔치를 열었다.',ans:'ok',ev:['Q8']},
    {who:'rival',expr:'confident',text:'그 잔치도 군사들의 사기를 높이려던 것이었다.',ans:'op',after:[['judge','normal','그렇게 볼 수도 있다는 생각이오. 확인할 기록은 없소.']]}])) return false;
  await say('judge','normal','판사, 잔치가 열린 때가 언제였는지 [[두 증거를 맞대어]] 보이시오.');
  if(!await presentPair('잔치가 열린 때를 보여 줄 두 증거를 고르세요.','Q8','Q6',{say:'백성이 성 쌓기에 불려 가던 바로 그때, 최씨 집에서는 비단으로 꾸민 큰 잔치가 열렸어요!',hint:'잔치 기록과, 그때 백성이 무엇을 하고 있었는지를 함께 보시오.'})) return false;
  bgm('open');
  await victim('farmer5',[['base','산성으로 피했던 농부요.'],['base','산성까지 걸어가는 동안 [[마을이 불탔소]].'],['base','강화도는 멀었소. 우리 같은 사람이 갈 수 있는 곳이 아니었지.'],['base','…그 뒤엔 성 쌓으러 불려 갔소.']]);
  await gavel(); await titleCard('― 3일차 끝 ―','성벽 밖에 남은 사람들');
  return true;
}
async function d4_5(){
  await courtOpen(4);
  await say('judge','normal','판사, 이제 판결의 이유와 근거를 세우시오.');
  if(!await reasonEv('고종을 이 재판의 피고에서 뺀 이유는?',[
    {t:'천도는 최우의 집에서 최우가 정했고, 왕은 그렇게 말하지 않으면 무사하지 못했다.',ok:true,ev:['Q2']},
    {t:'왕은 벌할 수 없는 사람이기 때문이다.',ok:false,fb:'자리 때문이 아니라 증거 때문에 뺀 것이오.'},
    {t:'고종은 착한 왕이었기 때문이다.',ok:false,fb:'그것은 의견일 뿐이오.'}])) return false;
  if(!await reasonEv('혐의 ①을 ‘일부 유죄’로 보는 가장 알맞은 이유는?',[
    {t:'백성을 두고 지배층만 섬으로 옮겼다. 다만 산성과 섬으로 피하라는 명령은 참작한다.',ok:true,ev:['Q1','Q2']},
    {t:'몽골이 쳐들어왔으니 아무 책임이 없다.',ok:false,fb:'몽골의 침입은 상황이지, 피고의 선택을 지우지 않소.'},
    {t:'최우는 김윤후처럼 싸우지 않았으므로 전부 유죄다.',ok:false,fb:'그것은 의견이었소.'}])) return false;
  if(!await presentFor('혐의 ①에서 참작할 사정의 근거를 고르세요.',['Q5'],{allowUsed:true,say:()=>'참작할 사정은 ‘산성과 섬으로’입니다. 백성에게도 피할 길을 열었어요.'})) return false;
  if(!await reasonEv('혐의 ②를 유죄로 보는 가장 알맞은 이유는?',[
    {t:'백성이 성 쌓기에 불려 가던 전쟁 중에, 사사로운 큰 잔치를 열었다.',ok:true,ev:['Q8']},
    {t:'16년 동안 대장경을 새겼다.',ok:false,fb:'대장경은 사치가 아니오.'},
    {t:'1만 명이 열흘 동안 놀았다는 기록이 있다.',ok:false,fb:'그 숫자가 적힌 종이는 누가 쓴 것인지 알 수 없소.'}])) return false;
  const k=await choose('최우의 공으로 판결 이유에 남길 것은?',[
    {t:'몽골에 맞서 약 30년을 버틴 것',ok:true},
    {t:'처인성에서 몽골 장수 살리타를 쓰러뜨린 것',ok:false,fb:'처인성의 공은 김윤후와 백성들의 것이오. 김윤후도 그렇게 말했소.'}]);
  if(!k) return false;
  bgm('verdict'); await gavel();
  await say('judge','normal','판사, 판결을 읽으시오.');
  await say('daon','base','고종은 이 재판의 피고에서 제외합니다. 천도를 결정한 사람은 왕좌에 앉은 사람이 아니었습니다.',{view:'judge'});
  chargeSt(0,'partial','산성·섬으로 피하라는 명령 참작');
  await say('daon','base','혐의 ①, [[일부 유죄]]. 백성을 두고 지배층만 섬으로 옮겼습니다. 다만 산성과 섬으로 피하라는 명령은 참작합니다.',{view:'judge'});
  chargeSt(1,'guilty','사사로운 잔치만');
  await say('daon','base','혐의 ②, [[유죄]]. 사사로운 잔치에 대해서만입니다. 대장경은 사치가 아닙니다.',{view:'judge'});
  await say('daon','base','공으로 기록합니다. 몽골에 맞서 약 30년을 버텼습니다.',{view:'judge'});
  await say('judge','normal','강화도의 성벽은 나라를 지켰소. 그러나 그 성벽 밖에 남은 백성이 있었소. 그리고 그 성벽을 정한 사람은 [[왕좌에 앉은 사람이 아니었소]].');
  const miss=S.claimMiss||0, pts=(S.flags.switchDay===1?1:0)+(miss<=1?1:0)+(S.trust>=3?1:0);
  caseResult({grade:pts>=3?'공정한 판사':pts===2?'꼼꼼한 판사':'견습 판사',lead:'겉의 자리가 아니라 실제로 결정한 사람에게 책임을 물었고, 주장마다 확인된 것과 의견을 가려 판결했습니다.',
    items:[`피고를 바꾼 때: ${S.flags.switchDay===1?'1일차 (스스로)':'2일차 (검사의 요청 뒤)'}`,`주장 가르기에서 헷갈린 횟수: ${miss}번`,`잔치 기록 한 장(가짜): ${S.plums&&S.plums.has('QF')?'확대해 매화 얼룩을 찾음':'확대하지 않음'}`],
    judge:'판사는 겉의 자리가 아니라 실제로 한 일을 보오.',history:HIST5});
  return true;
}
const HIST5='1231년부터 몽골이 여러 차례 고려에 쳐들어왔습니다. 1232년 무신 집권자 최우는 자기 집에서 재상들과 의논해 수도를 강화도로 옮겼고, 백성에게는 산성과 섬으로 피하라고 했습니다. 처인성에서는 김윤후와 백성들이 몽골 장수 살리타를 쓰러뜨렸습니다. 고려는 약 30년을 버티며 팔만대장경을 새겼지만, 육지의 백성은 큰 피해를 입었습니다. 이 무렵 왕은 이름만 있고 실제 권력은 최씨 집안에 있었습니다.';
regCase(5,{title:'텅 빈 궁궐',desc:'최우 · 판사(첫 판사 모드) · 난이도 4',ev:EVIDENCE5,locs:LOCS5,terms:TERMS5,defName:'피고',time:'90~100분',main:'judge',
  lead:'사건 5는 판사 자리예요. 주장을 가르고, 판결 저울을 달고, 필요하면 피고를 바꿀 수 있어요.',
  locked:{pros:'판사 사건',def:'판사 사건'},
  openLine:'지금부터 [[역사 법정]]을 엽니다. 오늘은 판사석에 다온 판사가 앉습니다.',history:HIST5,
  views:{prologue5:prologueView('#2e2a24','#0e0c0a')},
  gojeung:['1232년 천도 결정 과정(최우의 집에서 재상 회의), 유승단의 반대','무신 정권기 왕과 최씨 집권자의 관계(정방·도방)','입보(산성·섬으로 옮기기) 명령','1232년 처인성 전투, 김윤후의 벼슬 사양','대장경 조판 기간(1236~1251)과 목적','최우의 잔치 기록(채붕 등)','잔치 기록 한 장(1만 명·열흘)은 게임 속 가짜'],
  roles:{judge:runJudge5}});
