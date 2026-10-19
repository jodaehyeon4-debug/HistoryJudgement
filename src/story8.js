/* ===== 사건 8 「장부 속의 이름」: 판사 · 새 장치 ‘헌법 카드’, ‘증거 확대’ 본격 사용 =====
   피고 ‘김 대감’은 안동 김씨 세도가들을 바탕으로 만든 가상 인물(화면에 늘 표시).
   실존 인물(백낙신·유계춘·박규수)은 기록된 행위로만 등장, 대사는 상상.
   v3(실존 인물 보호): 장부에 돈을 바친 사람은 가상 인물들뿐, 백낙신의 이름은 없음. 백낙신의 “장부에 내 이름이 있을 것”은 1일차 증언 → 2일차에 장부로 깸.
   혐의 ① 돈을 받고 벼슬을 판 죄 → 유죄(가상 인물들의 뇌물 기록) / ② 세금 제도가 무너진 것을 내버려 둔 죄 → 책임 있음
   ③ 가문 전체를 벌하라는 요구 → 배척 (헌법 제13조 제3항, 연좌제 금지) */
addCast('daegam',{name:'김 대감',label:'피고 김 대감 (가상 인물)',col:'#2f5d8a',spec:{skin:'#efc9a2',robe:'#2f5d8a',robe2:'#1f3f60',collar:'round',hat:'gat',hair:'#1c1a20',beard:'long',beardColor:'#2a2220',iris:'#3a2a20'}});
addCast('baek',{name:'백낙신',label:'고발인 백낙신',col:'#5a2a2a',spec:{skin:'#e8bf96',robe:'#6a3a2a',robe2:'#4a281c',collar:'round',hat:'gat',hair:'#1c1a20',beard:'thin',iris:'#2e2018'}});
addCast('yugyechun',{name:'유계춘',label:'증인 유계춘',col:'#6a5038',spec:{skin:'#d9a77c',robe:'#e8e4dc',robe2:'#a8a090',collar:'cross',hat:'short',hair:'#1c1a20',beard:'thin',iris:'#3a2a20'}});
addCast('gyeomin',{name:'겸인 아부',label:'김 대감 집 겸인 아부',col:'#4a4a5a',spec:{skin:'#ecc8a4',robe:'#5a5a6a',robe2:'#3e3e4a',collar:'cross',hat:'gat',hair:'#1c1a20',beard:'thin',iris:'#3a2a20'}});
addCast('gyusu',{name:'박규수',label:'증인 박규수 (조사관)',col:'#2a4a3a',spec:{skin:'#ecc8a4',robe:'#2a5a4a',robe2:'#1c3e32',collar:'round',hat:'gat',hair:'#d8d8d8',beard:'long',beardColor:'#e6e0d4',iris:'#3a2a20'}});
addCast('farmwife',{name:'진주의 농민 아낙',label:'피해자 농민 아낙',col:'#7a5a4a',spec:{skin:'#e2b48a',robe:'#c8a890',robe2:'#8a6a5a',collar:'cross',hat:'bun',hair:'#2a2220',beard:'none',iris:'#3a2a20'}});
addCast('merchant8',{name:'진주 장터 상인',label:'장터 상인',col:'#8a6a2a',spec:{skin:'#efc8a0',robe:'#a8803a',robe2:'#7c5e28',collar:'cross',hat:'short',hair:'#1c1a20',beard:'thin',iris:'#2e2018'}});

const EVIDENCE8=[
  {id:'SC',reuse:true,type:'원칙',icon:'alliance',title:'헌법 카드: 남의 죄로 벌받지 않는다',body:'“모든 국민은 자기의 행위가 아닌 친족의 행위로 인하여 불이익한 처우를 받지 아니한다.”',src:'대한민국 헌법 제13조 제3항',trust:3,note:'집안 사람이 한 일로 벌받지 않는다는 원칙(연좌제 금지).'},
  {id:'S1',reuse:true,type:'유적',icon:'censer',title:'빈 창고',body:'나라가 빌려주던 곡식(환곡)을 두는 진주의 창고가 텅 비었다.',src:'진주 관아 창고',trust:3,note:'곡식은 언제, 누가 빼 갔을까요?'},
  {id:'S2',reuse:true,type:'문서',icon:'scroll',title:'고발장',body:'“김 대감에게 돈을 바치느라 백성에게서 거둘 수밖에 없었다.” 백낙신의 고발장.',src:'진주 관아 마당 (상상)',trust:2,note:'고발한 사람의 말도 따져 봐야 해요.'},
  {id:'S3',type:'사료',icon:'scroll',title:'흰 수건',body:'1862년 봄, 진주 농민들이 흰 수건을 두르고 일어났다고 전한다.',src:'진주 농민 봉기에 관한 기록과 전승',trust:2,note:'농민들이 일어난 날의 모습이에요.'},
  {id:'S4',reuse:true,type:'사료',icon:'map',title:'세 가지 세금',body:'땅 세금(전정), 군대 대신 내는 베(군정), 빌려준 곡식(환곡). 셋 다 엉망이 되어 농민을 괴롭혔다(삼정의 문란).',src:'조선 후기 기록을 바탕으로 정리',trust:3,note:'🌾 논, 🧵 베, 🌰 곡식 자루. 나라가 바로잡아야 할 제도였어요.'},
  {id:'S5',reuse:true,type:'문서',icon:'scroll',title:'장부',body:'김 대감 집 장부. 벼슬을 얻으려고 돈을 바친 사람과 액수가 적혀 있다. (모두 게임 속 가상 인물)',src:'김 대감 침방의 베개 속 (상상)',trust:3,note:'이름 목록과 서명은 확대해야 보여요.',
   zoom:{say:['장부를 확대했다.','[[박 현감]], [[최 군수]], [[이 부사]]… 돈을 바치고 벼슬을 얻은 사람들이다.','[[백낙신]]의 이름은 없다. 줄마다 김 대감의 [[수결(서명)]]. 장부를 본 사람만 남기는 표시다.'],note:'백낙신의 이름은 없다. 줄마다 김 대감의 수결.'}},
  {id:'S10',reuse:true,type:'증언',icon:'scroll',tag:'imagined',title:'고발인의 장담',body:'백낙신: “김 대감에게 바치느라 백성에게 거둘 수밖에 없었소. [[장부를 보면 내 이름이 있을 것]]이오.”',src:'1일차 법정, 고발인 백낙신의 숨은 말 (대사는 상상)',trust:2,note:'고발인이 장담한 말. 장부와 맞대 보세요.'},
  {id:'S6',reuse:true,type:'문서',icon:'scroll',title:'창고 장부',body:'진주 관아 곡식 창고의 장부. 곡식이 줄어든 기록이다.',src:'진주 관아 창고 (상상, 사료 바탕)',trust:3,note:'날짜는 확대해야 보여요.',
   zoom:{say:['창고 장부를 확대했다.','날짜를 보니 곡식은 [[1859년부터]] 해마다 줄었다.','백낙신이 오기 [[훨씬 전부터]] 창고가 비어 갔다.'],note:'곡식은 1859년부터 줄었다. 백낙신이 오기 전부터.'}},
  {id:'S7',reuse:true,type:'증언',icon:'scroll',title:'겸인의 증언',body:'“장부는 주인 어른이 직접 보셨소. 줄마다 서명도 하셨지.”',src:'3일차 법정, 겸인 (상상)',trust:3,note:'피고가 장부를 알았다는 증언이에요.'},
  {id:'S8',reuse:true,type:'사료',icon:'scroll',title:'박규수의 조사',body:'박규수는 진주의 일이 병사와 아전들의 탐욕에서 시작되었다고 보고하고, 세금 제도 전체를 바로잡자고 했다.',src:'박규수의 조사 보고를 바탕으로 정리',trust:3,note:'직접 원인과 자리의 책임을 나누어 보세요.'},
  {id:'S9',reuse:true,type:'증언',icon:'scroll',title:'병사 나리',body:'“창고가 빈 건 그분이 오기 전부터였다는데… 그분이 와서 그걸 메우라고 백성을 몇 배로 쥐어짰지.”',src:'진주 장터 상인의 이야기 (상상)',trust:2,note:'고발인에 대한 이야기예요.'},
  {id:'KEY8',type:'물건',icon:'map',title:'장부 방 열쇠',body:'김 대감 집 장부를 둔 방의 열쇠.',src:'겸인에게서 받음',trust:3,note:'잠긴 방을 여는 물건이에요.'},
  {id:'SF',type:'문서',icon:'scroll',fake:true,y:1862,title:'족보',body:'안동 김씨 족보. 첫 장에 “1862년, [[철종]] 임금 때 고쳐 엮음”. 김 대감과 백낙신이 한 집안으로 나온다.',src:'하람 검사가 낸 종이',trust:1,note:'정말 한 집안일까요? 첫 장의 글도 보세요.',
   zoom:{say:['족보를 확대했다.','백낙신의 이름 줄만 [[먹 색이 다르다]]. 끼워 넣은 이름이다. 그 옆에 [[매화 모양 먹 얼룩]].','1862년 종이가 살아 있는 임금을 [[‘철종’]]이라 부른다. 이런 이름은 임금이 [[세상을 떠난 뒤에]] 붙는데…'],plum:true,note:'끼워 넣은 이름과 매화 얼룩. 1862년 종이가 살아 있는 임금을 ‘철종’이라 부른다.'}},
  {id:'SD1',type:'물건',icon:'censer',title:'김씨 집안의 문패',body:'김 대감 집 대문에 걸린 문패.',src:'김 대감의 집',trust:3,note:'집안 이름이 무엇을 증명할까요?'},
  {id:'SD2',type:'물건',icon:'censer',title:'비단 갓끈',body:'값비싼 비단 갓끈 한 줄.',src:'진주 관아',trust:3,note:'누구의 것일까요? 쟁점과 이어질까요?'}
];
Object.entries({S1:1862,S2:1862,S3:1862,S4:1862,S5:1861,S6:1859,S8:1862,S9:1862,S10:1862}).forEach(([k,y])=>{ const e=EVIDENCE8.find(x=>x.id===k); if(e) e.y=y; });
EVIDENCE8.find(x=>x.id==='S9').tag='hearsay'; EVIDENCE8.find(x=>x.id==='S7').tag='imagined';
const LOCS8=[
  {id:'gwana',name:'진주 관아',time:'아침',rooms:[
    {id:'gw-yard',name:'관아 마당',intro:'진주 관아 마당이다.',miss:['흙 마당이다.','아무것도 없다.','빈 형틀이다.'],
     spots:[{x:56,y:20,w:24,h:34,label:'게시판의 글',ev:'S2',say:['게시판에 백낙신이 김 대감을 고발한 [[고발장]]이 붙어 있다.']},{x:8,y:56,w:24,h:24,label:'형틀',say:['빈 형틀이다.']}]},
    {id:'gw-store',name:'창고',intro:'관아의 곡식 창고다.',miss:['빈 바닥이다.','쥐구멍이다.','아무것도 없다.'],
     spots:[{x:30,y:24,w:40,h:44,label:'텅 빈 곡식 칸',ev:'S1',say:['곡식 칸이 텅 비었다.','나라가 빌려주던 곡식([[환곡]])이 하나도 없다.']},
      {x:76,y:56,w:18,h:22,label:'선반의 장부 묶음',only2:true,ev:'S6',say:['어제는 없던 [[창고 장부]]가 선반에 있다. 날짜는 확대해 봐야겠다.']}]},
    {id:'gw-room',name:'백낙신의 방',intro:'백낙신이 쓰는 방이다.',miss:['방석이다.','아무것도 없다.'],
     spots:[{x:40,y:30,w:20,h:20,label:'걸려 있는 갓끈',ev:'SD2',say:['벽에 값비싼 비단 갓끈이 걸려 있다.','이게 무엇을 증명할까?']},{x:8,y:60,w:24,h:22,label:'문갑',say:['잠긴 문갑이다.']}]}]},
  {id:'market8',name:'진주 장터',time:'낮',intro:'진주의 장터다. 사람들이 수군거린다.',miss:['장바구니다.','아무것도 없다.','짚신이다.'],
   spots:[{x:62,y:24,w:22,h:30,label:'장대에 걸린 흰 수건',ev:'S3',say:['장대에 흰 수건이 잔뜩 걸렸다.','1862년 봄, 농민들이 [[흰 수건]]을 두르고 모였다고 한다.']},{x:8,y:62,w:22,h:22,label:'곡식 자루',say:['비어 가는 곡식 자루다.']}],
   npcs:[{who:'merchant8',expr:'base',place:{x:38,h:60,b:2},topics:[
    {id:'m8-hi',t:'장사는 어떠세요?',lines:[['merchant8','base','요즘은 곡식 값이 하늘을 찌르오.']]},
    {id:'m8-baek',t:'병사 나리',lock:'S1',must:true,lockSay:'(상인은 주변을 살핀다. 관아 창고 이야기라면 입을 열지도.)',
     lines:[['merchant8','base','쉿… 창고가 빈 건 [[그분이 오기 전부터]]였다는데.'],['merchant8','base','그분이 와서 그걸 메우라고 백성을 [[몇 배로]] 쥐어짰지. 고발장? 흥.'],['ME','think','(고발인 이야기야. 기억해 두자.)']],gives:['S9']}],
    present:{S1:{lines:[['merchant8','sweat','창고… 그 얘기라면…']],unlock:'m8-baek'},S2:{lines:[['merchant8','base','고발장이라… 자기 일은 쏙 빼놓았구먼.']]}},def:[['merchant8','base','팔 물건이 아니구려.']]}]},
  {id:'farmhouse',name:'농민의 집',time:'저녁',from:2,intro:'진주의 농민 집이다.',miss:['빈 쌀독이다.','아무것도 없다.','짚단이다.'],
   spots:[{x:56,y:20,w:24,h:36,label:'벽에 붙은 세금 쪽지',ev:'S4',say:['벽에 논, 베, 곡식 자루가 그려진 세금 쪽지 세 장.','[[세 가지 세금]]이 모두 농민을 괴롭혔다.']},{x:8,y:56,w:20,h:26,label:'빈 쌀독',say:['쌀독이 비어 있다.']}],
   npcs:[{who:'farmwife',expr:'base',place:{x:38,h:58,b:2},topics:[
    {id:'fw-hi',t:'살림은 어떠세요?',lines:[['farmwife','base','세금 내고 나면 남는 게 없소.']]},
    {id:'fw-grain',t:'창고의 곡식',lock:'S1',must:true,lockSay:'(아낙은 빈 쌀독만 본다. 관아 창고 이야기라면 대답할지도.)',
     lines:[['farmwife','base','나라가 곡식 빌려주는 거, 그거 말이오?'],['farmwife','base','우리는 [[빌린 적도 없는데]] 갚으라 했소. 그것도 몇 배로.']]}],
    present:{S1:{lines:[['farmwife','base','그 창고…!']],unlock:'fw-grain'}},def:[['farmwife','base','모르는 물건이오.']]}]},
  {id:'daegamhouse',name:'김 대감의 집',time:'밤',from:2,rooms:[
    {id:'dg-sarang',name:'사랑채',intro:'김 대감 집의 사랑채다. 손님이 끊이지 않는다.',miss:['비단 방석이다.','아무것도 없다.'],
     spots:[{x:30,y:14,w:40,h:20,label:'대문 문패',ev:'SD1',say:['김씨 집안 문패가 걸려 있다.','집안 이름이 무엇을 증명할까?']},{x:8,y:56,w:20,h:26,label:'병풍',say:['화려한 병풍이다.']}],
     npcs:[{who:'gyeomin',expr:'base',place:{x:72,h:60,b:2},from:2,topics:[
      {id:'gm-hi',t:'여기서 무슨 일을?',lines:[['gyeomin','base','이 댁 살림과 장부를 맡은 아부라 하오.']]},
      {id:'gm-praise',t:'대감마님은 어떤 분인가요?',must:true,lines:[['gyeomin','base','우리 대감마님은 재채기도 [[나라를 위해]] 하시지요!'],['gyeomin','base','장부도 어찌나 아끼시는지, 밤마다 [[베개 속에 넣고]] 주무신다오!'],['judge','stern','(해치의 목소리) …방금 뭐라고 했소?'],['gyeomin','sweat','…대, 대감마님은 베개를 아끼신다고요.'],['ttolbang','bang','베개! 제가 가져올게요!'],['guide','normal','(똘방이 침방으로 뛰어갔지만, 문이 잠겨 있다.)'],['ME','think','(침방 열쇠는 아부에게 있어…)']]},
      {id:'gm-key',t:'주인 어른의 장부',lock:'S2',must:true,lockSay:'(아부는 열쇠를 꼭 쥐고 있다. 이 집을 고발한 글과, 고발인이 법정에서 한 장담을 함께 보이면?)',
       lines:[['gyeomin','sweat','고발장에, 장부에 자기 이름이 있다고 장담까지…?'],['gyeomin','base','…장부는 거짓말을 하지 않소. 판사께서 직접 보시오.'],['guide','normal','아부가 침방 열쇠를 건넸다.']],gives:['KEY8']}],
      present:{S2:{need:['S2','S10'],unlock:'gm-key',lines:[['gyeomin','shock','이, 이건…!']],wait:[['gyeomin','sweat','고발장만으로는 열쇠를 못 드리오.'],['ME','think','(고발인이 법정에서 장담한 말도 보여 줘야 해.)']]},
               S10:{need:['S2','S10'],unlock:'gm-key',lines:[['gyeomin','shock','이, 이건…!']],wait:[['gyeomin','base','장부에 이름이 있을 거라고요? 그 사람이 어디에 뭘 적었기에?'],['ME','think','(고발장도 함께 보여 줘야 해.)']]}},def:[['gyeomin','base','우리 대감마님 물건만큼 귀하지는 않구려.']]}]},
    {id:'dg-store',name:'곳간',intro:'곳간에 쌀가마가 가득하다.',miss:['쌀가마다.','아무것도 없다.'],
     spots:[{x:30,y:30,w:40,h:40,label:'가득 쌓인 쌀가마',say:['쌀가마가 천장까지 쌓였다. 진주의 빈 창고와 딴판이다.']},
      {x:76,y:54,w:18,h:30,label:'키를 든 하인',say:['곡식 까부는 [[키]]를 든 하인이 꾸벅 인사한다.','“요즘은 부채 대신 키를 씁니다.” …사건 4의 [[하인 병]]?']}]},
    {id:'dg-ledger',name:'대감의 침방',need:'KEY8',lockedSay:['문이 잠겨 있다. 아부의 열쇠가 있어야 한다.'],intro:'김 대감이 자는 방이다.',miss:['비단 이불이다.','아무것도 없다.'],
     spots:[{x:36,y:44,w:28,h:22,label:'비단 베개',ev:'S5',say:['아부가 말한 그 베개다. 속이 딱딱하다.','베개 속에서 [[장부]]가 나왔다! 작은 글씨는 확대해 봐야겠다.']},{x:8,y:20,w:20,h:40,label:'병풍',say:['학이 그려진 병풍이다.']}]}]}
];
const TERMS8=[
  {w:'세도 정치',d:'왕의 외가 같은 몇 집안이 나라를 쥐고 흔든 정치예요.',ic:'🏛️'},
  {w:'매관매직',d:'돈을 받고 벼슬을 주는 일이에요.',ic:'💰'},
  {w:'환곡',d:'나라가 봄에 곡식을 빌려주고 가을에 돌려받던 제도예요.',ic:'🌾'},
  {w:'세 가지 세금',d:'땅 세금, 군대 대신 내는 베, 빌려준 곡식. ‘삼정’이라고 해요.',ic:'🧾'},
  {w:'연좌제',d:'집안 사람의 죄로 함께 벌받는 것. 우리 헌법은 이를 금지해요.',ic:'🚫'},
  {w:'수결',d:'옛날에 이름 대신 쓰던 서명이에요.',ic:'✍️'},
  {w:'조사관',d:'사건을 조사하러 보낸 관리예요. 그때는 ‘안핵사’라고 했어요.',ic:'🔎'}
];
const C8CH=()=>[{t:'① 돈을 받고 벼슬을 판 죄'},{t:'② 세금 제도가 무너진 것을 내버려 둔 죄'},{t:'③ (요구) 안동 김씨 가문 전체를 벌하라'}];
const T8baek=()=>({key:'백낙신',who:'baek',allReveal:true,habit:'갓끈을 만지작거렸다',lines:[
  {text:'나는 경상우병사 백낙신이오. 백성이 굶는 걸 보다 못해 고발했소.',expr:'base',sus:true,press:[['daon','normal','정말 백성을 위해서요?'],['baek','base','그렇소. 나는 백성 편이오.']]},
  {text:'나는 위에서 시키는 대로 했을 뿐이오.',expr:'base',reveal:2,press:[['daon','think','위에서 무엇을 시켰죠?'],['baek','sweat','그, 그건…'],['judge','normal','판사의 물음이오. 답하시오.']]},
  {text:'…김 대감에게 바치느라 백성에게 거둘 수밖에 없었소. [[장부를 보면 내 이름이 있을 것]]이오!',expr:'sweat',hidden:true,gives:['S10']},
  {text:'김 대감에게 바치느라 어쩔 수 없었소. 창고가 빈 것도 다 그 때문이오.',expr:'base',sus:true,press:[['daon','think','창고가 빈 것도요?'],['baek','base','그렇소!']]}
]});
const T8yu=()=>({key:'유계춘',who:'yugyechun',allReveal:true,lines:[
  {text:'진주의 농민, 유계춘이오. 우리는 살려고 일어났소.',expr:'base',press:[['daon','normal','무엇 때문에 일어났나요?'],['yugyechun','base','더는 거둘 것이 없는데 또 거두었으니까.']]},
  {text:'우리가 맞선 것은…',expr:'base',reveal:2,press:[['daon','think','누구에게 맞섰나요?'],['yugyechun','base','분명히 말하리다.']]},
  {text:'…[[진주의 병사와 관리들]]이었소. 서울의 대감 얼굴은 본 적도 없소.',expr:'base',hidden:true}
]});
async function prologue8(){
  bgm('crisis');
  await say('guide','normal','1862년 봄, 경상도 진주.',{view:'prologue8'});
  await say('guide','normal','흰 수건을 두른 농민들이 관아로 몰려갔다.',{view:'prologue8'});
  await infoCard('세도 정치','<p>조선 후기, 왕의 외가 같은 <b>몇 집안</b>이 높은 자리를 쥐고 흔들었어요(<b>세도 정치</b>). 철종 때는 안동 김씨의 힘이 가장 셌어요.</p><p>피고 <b>‘김 대감’은 가상 인물</b>이에요. 기록에 없는 일을 실존 인물에게 씌우지 않으려고 만들었어요.</p>');
  await say('voice','normal','역사가 묻는다. 나쁜 가문이 있다면, [[그 집안 사람은 모두 벌받아야 하는가]].',{view:'prologue8'});
  await titleCard('사건 8','장부 속의 이름');
}
async function runJudge8(from){
  if(from<=0){ await prologue8(); bgm('investigate');
    await say('judge','normal','다온 판사, 다시 판사석이오. 피고는 세도가 [[김 대감]], 가상 인물이오.',{view:'lobby'});
    await say('player','confident','고발인은 진주의 병사 [[백낙신]]이에요. 김 대감 집안을 다 벌해야 해요!',{view:'lobby'});
    await say('rival','normal','다 벌하자는 말, 나는 그게 제일 무서워.',{view:'lobby'}); }
  await playDays([
    {inv:async()=>{ await invDay(1,'[[진주 관아]]와 [[진주 장터]]를 조사하자.'); },court:d1_8,
     learned:['헌법: 가족이 한 일로 벌받지 않는다.','고발한 사람의 말도 증거로 따진다.','고발인은 “장부에 내 이름이 있을 것”이라 장담했다.']},
    {inv:async()=>{ await invDay(2,'[[농민의 집]]과 [[김 대감의 집]]이 열렸어. 겸인 [[아부]]가 장부 있는 곳을 안대.'); },court:d2_8,
     learned:['세 가지 세금이 모두 무너져 농민을 괴롭혔다.','농민들은 진주의 병사와 관리들에게 맞섰다.','장부에 백낙신의 이름은 없었다.']},
    {inv:async()=>{ await invDay(3,'관아 [[창고]]에 새로 놓인 것이 있어. 아부는 내일 증언대에 서.'); },court:d3_8,
     learned:['장부 줄마다 김 대감의 서명이 있었다.','곡식은 백낙신이 오기 전부터 사라졌다.','고발인이 백성을 쥐어짠 것은 자기 선택이었다.']},
    {court:d4_8}
  ],from);
}
async function d1_8(){
  await courtOpen(1);
  setCharges(C8CH());
  await say('player','confident','혐의는 첫째, [[돈을 받고 벼슬을 판 죄]]. 둘째, [[세금 제도가 무너진 것을 내버려 둔 죄]].');
  await say('guide','normal','고발인 백낙신이 들어서자 박수가 터졌다.'); Music.sting('cheer'); await wait(700);
  await say('baek','base','나는 백성을 대신해 고발했소!',{view:'witness'});
  await say('guide','normal','“안동 김씨를 다 벌하라!” 외침이 쏟아졌다.'); Music.sting('murmur'); await wait(600);
  await say('player','confident','셋째, 방청석의 요구예요. 안동 김씨 [[가문 전체]]를 벌해야 합니다!');
  await say('judge','normal','판사, 주장을 가르기 전에 하나를 주겠소.');
  await gotEv('SC','증거 수첩에 [[헌법 카드: 남의 죄로 벌받지 않는다]]가 들어왔다.');
  await say('judge','normal','증거처럼 낼 수 있는 [[원칙]]이오.');
  if(!await sortClaims([
    {who:'player',expr:'confident',text:'김씨 가문 사람들은 모두 같은 죄를 지었다.',ans:'bad',ev:['SC'],fb:{ok:'증거가 있어도 가문 전체를 벌할 수는 없소.',no:'증거 문제가 아니라, 원칙에 어긋나서 안 되오.',op:'법정이 따를 수 없는 요구요. 원칙을 보시오.'},
     after:[['judge','normal','집안 사람의 죄로 벌받지 않는다. [[연좌제 금지]]요.']]},
    {who:'rival',expr:'confident',text:'피고는 가문의 어른일 뿐 아무것도 몰랐다.',ans:'op',after:[['judge','normal','몰랐는지는 증거로 보아야 하오. 아직은 변호인의 생각이오.']]}],{withBad:true})) return false;
  S.flags.firstClaim=(loadEvents().filter(e=>e.kind==='claim'&&e.case===8).slice(-2)[0]||{detail:{}}).detail.pick;
  await say('judge','normal','판사, 고발인에게 [[더 물어]] 보시오. 수상하면 [[살피기]]도 쓰시오.');
  bgm('testimony');
  if(!await testimony(T8baek(),'나는 위에서 시키는 대로 했을 뿐','판사는 더 묻기와 살피기로 따져요')) return false;
  await say('judge','normal','[[고발인의 말이 맞는지]]도 증거로 보시오.');
  await gavel(); await titleCard('― 1일차 끝 ―','고발인의 말');
  return true;
}
async function d2_8(){
  await courtOpen(2);
  await say('player','confident','진주 농민 봉기를 이끈 [[유계춘]]을 부릅니다.');
  bgm('testimony');
  if(!await testimony(T8yu(),'우리는 살려고 일어났소','판사는 더 묻기로 숨은 말을 끌어내요')) return false;
  if(!await sortClaims([{who:'player',expr:'confident',text:'농민은 서울의 김 대감 때문에 일어났다.',ans:'no',after:[['judge','normal','증인은 진주의 병사와 관리들에게 맞섰다 했소. 확인 안 된 주장이오.']]}])) return false;
  await victim('farmwife',[['base','진주에서 농사짓는 사람이오.'],['base','우리는 [[빌리지도 않은 곡식]]을 몇 배로 갚으라는 말을 들었소.'],['base','…아이들이 먹을 쌀을 내주었소.']]);
  bgm('crisis');
  await say('judge','normal','판사, 이제 [[장부]]를 펴 보시오.');
  if(!await presentPair('장부와 고발인의 장담을 맞대 보세요.','S5','S10',{hint:'장부를 [[확대해]] 이름 목록을 보고, 고발인이 어제 한 말과 맞대시오.',say:'장부에는 박 현감, 최 군수, 이 부사… [[백낙신의 이름은 없어요]]! 고발인의 장담은 사실과 달라요.'})) return false;
  await say('baek','sweat','그, 그건… 장부를 누가 고쳤을 것이오!',{view:'witness'});
  await say('judge','normal','줄마다 피고의 수결이 있고, 고친 자국은 없소. 그 핑계는 [[확인되지 않소]].');
  await say('rival','confident','그럼 피고는 무죄군요! 고발인 말이 틀렸잖아요.');
  await say('judge','normal','장부에는 [[다른 사람들]]이 바친 돈이 적혀 있소. 내일 장부를 맡은 자를 부르겠소.');
  await gavel(); await titleCard('― 2일차 끝 ―','장부에 없는 이름');
  return true;
}
async function d3_8(){
  await courtOpen(3);
  await say('player','confident','증인, 장부를 맡은 겸인 [[아부]]입니다.');
  bgm('testimony');
  await say('gyeomin','base','우리 대감마님은 앉아 계셔도 빛이 나시는…',{testimony:true,tag:'증언'});
  await say('judge','stern','증인, 칭찬은 그만. 장부 이야기만 하시오.');
  await say('gyeomin','base','장부는 [[주인 어른이 직접]] 보셨소. 줄마다 서명도 하셨지. 베개에 넣고 주무실 만큼!',{testimony:true,tag:'증언'});
  await gotEv('S7');
  if(!await sortClaims([{who:'daegam',expr:'base',text:'나는 장부를 본 적도 없소.',ans:'no',ev:['S5','S7'],after:[['judge','normal','수결과 겸인의 증언을 보면, 피고의 말은 확인되지 않소.']]}])) return false;
  await say('daegam','sweat','…크흠.');
  bgm('crisis');
  await say('judge','normal','판사, 이제 [[고발인의 말]]을 따져 보시오. 창고는 누가, 어떻게 비웠소?');
  if(!await presentPair('창고가 빈 때와 그 뒤의 일을 맞대 보세요.','S6','S9',{say:'곡식은 백낙신이 오기 전, [[1859년부터]] 줄었어요. 그는 그걸 메운다며 백성에게서 [[몇 배로]] 거뒀어요!',hint:'창고 장부의 날짜를 [[확대해]] 보고, 장터에서 들은 이야기를 떠올리시오.'})) return false;
  Music.stop(0.02); await slam(); Music.sting('breakdown'); flash(); shake('quake');
  await say('baek','breakdown','그, 그건…! 나, 나는…!',{action:true,view:'witness'});
  Music.sting('murmur'); await wait(900); await gavel(); bgm('open');
  await say('judge','normal','“어쩔 수 없었다”는 말은 무너졌소. 백성을 쥐어짠 것은 [[고발인 자신의 선택]]이었소.');
  if(!await choose('고발인 백낙신의 책임은 이 재판에서 어떻게 할까요?',[
    {t:'피고는 김 대감이오. 고발인의 죄는 따로 재판하도록 기록하겠소.',ok:true},
    {t:'지금 이 자리에서 백낙신도 함께 벌하겠소.',ok:false,fb:'백낙신은 이 재판의 피고가 아니오. 따로 재판해야 하오.'},
    {t:'백낙신이 범인이니 김 대감은 무죄요.',ok:false,fb:'백낙신의 죄가 김 대감의 죄를 지우지 않소.'}])) return false;
  await say('player','confident','이런 자들을 판치게 한 건 [[김씨 가문 전체]]예요! 족보를 보면 백낙신도 한 집안이에요!');
  S.found.add('SF'); showEvidence('SF'); await say('guide','normal','하람이 족보를 펼쳤다.'); hideEvidence();
  const z=await choiceSheet('이 족보를 어떻게 할까요?',[{t:'증거 확대로 살펴본다.',ok:true,tag:'zoom'},{t:'족보이니 믿는다.',ok:false,tag:'accept'}]);
  if(z.tag!=='zoom'){ await say('judge','stern','판사, 낸 사람이 검사라도 따져 보시오.'); await loseTrust(); if(S.trust<=0){ await loseTrial(); return false; } }
  await openZoomScene('SF');
  await say('daon','base','백낙신의 이름 줄만 먹 색이 달라요. [[끼워 넣은 이름]]이에요.',{view:'judge'});
  await say('player','shock','이것도… 그 [[매화 얼룩]]이야.');
  await say('rival','normal','하람. 사건마다 [[누가 가짜를 흘리고 있어]].');
  await say('guide','normal','방청석 맨 뒤, 기록관이 붓을 쥔 채 얼어붙었다.');
  await gavel(); await titleCard('― 3일차 끝 ―','고발인이 범인');
  return true;
}
async function d4_8(){
  await courtOpen(4);
  await say('judge','normal','봉기의 원인을 조사한 [[박규수]]를 부르겠소.');
  bgm('testimony');
  await say('gyusu','base','진주의 일은 병사와 아전들의 [[탐욕]]에서 시작되었소.');
  await say('gyusu','base','다만 그런 자들이 자리에 오르게 한 책임도 가볍지 않소.');
  await gotEv('S8');
  if(!await scale('혐의 ② 세금 제도가 무너진 것을 내버려 둔 죄',[
    {k:'동기',q:'피고가 제도를 바로잡지 않은 까닭은?',opts:[{t:'벼슬을 팔아 돈을 받는 쪽이 이로웠다.',ok:true},{t:'백성을 괴롭히려고 일부러 그랬다.',ok:false,fb:'그런 증거는 없소.'}]},
    {k:'방법',q:'피고는 어떻게 했나?',opts:[{t:'벼슬을 팔고, 무너진 세금 제도를 그대로 두었다.',ok:true},{t:'직접 진주에 가서 곡식을 빼앗았다.',ok:false,fb:'피고가 곡식을 빼앗지는 않았소.'}]},
    {k:'결과',q:'무슨 일이 일어났나?',opts:[{t:'돈으로 자리에 오른 관리가 백성을 쥐어짜 농민이 일어났다.',ok:true},{t:'진주는 평화로웠다.',ok:false,fb:'증거를 다시 보시오.'}]},
    {k:'직접 원인',q:'진주 봉기의 직접 원인은?',opts:[{t:'진주의 병사 백낙신과 관리들의 수탈',ok:true},{t:'피고 김 대감의 수탈',ok:false,fb:'직접 원인과 자리의 책임을 나누시오.'}]}])) return false;
  await say('judge','normal','판사, 혐의마다 판결의 종류와 이유, 근거를 대시오.');
  if(!await verdictKind('혐의 ① 돈을 받고 벼슬을 판 죄','guilty',{q:'장부에 돈을 바친 기록과 피고의 수결이 있어요. 뇌물은 직접 해를 끼쳐요.',idx:0})) return false;
  if(!await reasonEv('혐의 ①을 유죄로 보는 가장 알맞은 이유는?',[
    {t:'장부에 돈을 바친 기록과 피고의 수결이 있고, 겸인도 피고가 장부를 직접 보았다고 했다.',ok:true,ev:['S5','S7']},
    {t:'세도가 집안 사람이므로 벼슬을 팔았을 것이다.',ok:false,fb:'집안으로 짐작하지 마시오. 증거로 보시오.'},
    {t:'백낙신이 그렇게 고발했다.',ok:false,fb:'고발인의 말은 무너졌소. 장부와 증언으로 보시오.'}])) return false;
  if(!await verdictKind('혐의 ② 세금 제도가 무너진 것을 내버려 둔 죄','resp',{q:'높은 자리에서 제도를 바로잡지 않았어요. 직접 원인은 백낙신이에요.',idx:1,fb:{guilty:'피고가 곡식을 직접 빼앗지는 않았소. 바로잡지 않은 [[자리의 책임]]이오.'}})) return false;
  if(!await reasonEv('혐의 ②를 ‘책임 있음’으로 보는 가장 알맞은 이유는?',[
    {t:'높은 자리에서 무너진 세금 제도를 바로잡지 않았다. 다만 직접 원인은 백낙신이다.',ok:true,ev:['S4','S8']},
    {t:'피고가 진주의 곡식을 직접 빼앗았다.',ok:false,fb:'피고가 곡식을 빼앗지는 않았소.'},
    {t:'농민이 일어났으니 서울의 대감은 모두 유죄다.',ok:false,fb:'한 사람씩, 그 사람이 한 일로 따지시오.'}])) return false;
  if(!await reasonEv('요구 ③(가문 전체 처벌)을 배척하는 이유는?',[
    {t:'자기 행위가 아닌 친족의 행위로 벌받지 않는다(연좌제 금지). 법정에 서는 것은 한 사람이다.',ok:true,ev:['SC']},
    {t:'안동 김씨 가운데 착한 사람도 있었을 것이다.',ok:false,fb:'그것은 짐작이오. 원칙으로 답하시오.'},
    {t:'족보가 가짜였기 때문이다.',ok:false,fb:'족보가 진짜여도 가문을 벌할 수는 없소.'}])) return false;
  bgm('verdict'); await gavel();
  await say('judge','normal','판사, 판결을 읽으시오.');
  chargeSt(0,'guilty','장부로 증명된 한 건'); await say('daon','base','혐의 ①, [[유죄]]. 장부로 증명된 한 건입니다.',{view:'judge'});
  chargeSt(1,'resp','자리의 책임'); await say('daon','base','혐의 ②, [[책임 있음]]. 제도를 바로잡지 않은 자리의 책임입니다. 백낙신의 수탈은 따로 재판합니다.',{view:'judge'});
  chargeSt(2,'dropped','배척'); await say('daon','base','요구 ③, [[배척]]합니다. 남의 죄로 벌받지 않습니다.',{view:'judge'});
  await say('judge','normal','가문은 법정에 설 수 없소. 김 대감도 백낙신도 [[한 사람]]으로서 자기가 한 일로 벌받소.');
  const fc=S.flags.firstClaim, pts=(fc==='bad'?1:0)+(S.zoomed&&S.zoomed.has('S5')?1:0)+(S.trust>=3?1:0);
  caseResult({grade:pts>=3?'공정한 판사':pts===2?'꼼꼼한 판사':'견습 판사',lead:'가문이 아니라 한 사람이 한 일을 보았고, 고발인의 말까지 증거로 따졌습니다.',
    items:[`가문 처벌 주장 첫 판단: ${({bad:'받아들일 수 없음',ok:'확인됨',no:'확인 안 됨',op:'의견일 뿐'})[fc]||'-'}`,`장부의 이름 목록: ${S.zoomed&&S.zoomed.has('S5')?'증거 확대로 직접 봄':'맞대기로'}`,`끼워 넣은 족보: ${S.plums&&S.plums.has('SF')?'매화 얼룩을 찾음':'-'}`],
    judge:'법정에 서는 것은 언제나 한 사람이오.',history:HIST8});
  return true;
}
const HIST8='19세기 조선에서는 왕의 외가 같은 몇 집안이 높은 자리를 쥔 세도 정치가 이어졌고, 돈으로 벼슬을 사고파는 일이 많았습니다. 땅·군대·곡식에 매기는 세 가지 세금(삼정)이 무너지며 농민의 고통이 커졌습니다. 1862년 진주에서는 경상우병사 백낙신의 수탈에 맞서 농민들이 일어났고(진주 농민 봉기), 조사관 박규수는 그 원인을 보고했습니다. 이 사건의 피고 ‘김 대감’과 장부는 가상이며, 실존 인물은 기록된 행위로만 나옵니다.';
regCase(8,{title:'장부 속의 이름',desc:'김 대감(가상) · 판사 · 난이도 7',ev:EVIDENCE8,locs:LOCS8,terms:TERMS8,defName:'김 대감',time:'100~110분',main:'judge',p2at:3,
  lead:'판사 자리예요. 헌법 카드와 증거 확대를 써요. 피고 ‘김 대감’은 가상 인물이에요.',
  locked:{pros:'판사 사건',def:'판사 사건'},
  openLine:'지금부터 [[역사 법정]]을 엽니다. 피고는 안동 김씨 세도가를 본뜬 가상 인물, 김 대감.',history:HIST8,
  views:{prologue8:prologueView('#2c2a22','#0c0b08')},
  goal:{judge:'가문이 아니라 한 사람이 한 일을 보고, 고발한 사람의 말도 증거로 따져요.'},
  recall:{q:'지난 사건에서 소현세자의 죽음(혐의 ④)은 어떻게 되었나요?',opts:[{t:'증명 부족 — 직접 본 사람의 기록이 없어서',ok:true},{t:'유죄 — 모두가 독살이라 믿어서'},{t:'무죄 — 병이라고 밝혀져서'}],yes:'잘 기억하는구려. 이번에도 많은 사람이 외칠 것이오. 그래도 증거로 보시오.',no:'…직접 본 사람의 기록이 없어 증명이 모자랐소. 이번에도 증거로 보시오.'},
  bgCards:{1:{ic:'🏛️',t:'몇 집안이 높은 자리를 쥐고 흔들던 때(세도 정치), 1862년 진주 농민들이 흰 수건을 두르고 일어났어요.'},2:{ic:'🌾',t:'땅·군대·곡식에 매기는 세 가지 세금(삼정)이 무너져 농민이 괴로웠어요.'},3:{ic:'📒',t:'창고 장부의 날짜를 보면, 곡식이 언제부터 사라졌는지 알 수 있어요.'},4:{ic:'⚖️',t:'판결하는 날이에요. 가문이 아니라 한 사람이 한 일을 판결해요.'}},
  record:['빌리지도 않은 곡식을 몇 배로 갚아야 했던 진주의 농민들','세 가지 세금에 시달린 조선 곳곳의 백성들'],
  lesson:{opts:[{t:'법정에 서는 것은 언제나 한 사람이다.',r:'그렇소. 가문은 법정에 설 수 없소.'},{t:'고발한 사람의 말도 증거로 따진다.',r:'그렇소. 박수 받는 고발인이라도 예외는 없소.'},{t:'직접 원인과 자리의 책임은 나누어 본다.',r:'그렇소. 하나로 뭉뚱그리면 둘 다 흐려지오.'}]},
  paper:{id:'SF',anach:'철종'},
  teaser:'1866년, 닫힌 문 앞에 선 흥선대원군. 이번에는 [[네가 자리를 고른다]]. 검사, 변호인, 판사 가운데.',
  gag:{scene:'겸인 아부 「베개를 아끼시는 분」',
    inv:{1:[['ttolbang','bang','진주에 왔어요! 증거 나와라, 뚝딱!'],['guide','normal','(메밀묵이 나왔다. 장터에서 누가 “그거 얼마요?” 묻는다.)'],['ttolbang','shock','파, 팔 거 아니에요!']],
      2:[['ttolbang','base','겸인 아저씨는 칭찬을 멈추지 않는대요. 그 속에 중요한 말이 섞일지도!']],
      3:[['ttolbang','base','창고에 장부 묶음이 새로 놓였대요. 날짜는 꼭 확대해 보세요!']]},
    fix:{2:{say:'어제 법정 요약! 가문 전체를 벌하자는 주장은 [[증거가 있어서]] 받아들였대요!',opts:[{t:'아니야. 원칙에 어긋나서 받아들이지 않았어.',ok:true},{t:'맞아. 받아들였어.'}]},
      3:{say:'어제 법정 요약! 장부를 펴 보니 [[백낙신의 이름]]이 딱 있었대요!',opts:[{t:'아니야. 백낙신의 이름은 없었어.',ok:true},{t:'맞아. 백낙신 이름이 있었어.'}]}},
    pun:[['judge','normal','장부를 베개 속에 넣고 잤다니… 그 장부는 [[꿈속에서도]] 셈을 했겠구려.'],['ttolbang','joy','꿈속 셈! 하하하!'],['guide','normal','(아부만 진지하게 고개를 끄덕였다.)']],punDay:3},
  gojeung:['1862년 진주 농민 봉기(임술 농민 봉기) 경위와 백낙신의 수탈 기록','박규수의 조사 보고 내용','유계춘의 역할','흰 수건(백건) 이야기의 출처','삼정(전정·군정·환곡)의 문란 내용','헌법 제13조 제3항 문구','백낙신의 경상우병사 부임 시기와 창고(환곡) 결손이 쌓인 때','김 대감·장부(박 현감·최 군수·이 부사)·겸인 아부·족보는 게임 속 가상. 백낙신에게는 기록된 수탈만 남김','묘호 ‘철종’은 세상을 떠난 뒤(1863) 붙음 — 족보의 시대 안 맞는 말'],
  roles:{judge:runJudge8}});
