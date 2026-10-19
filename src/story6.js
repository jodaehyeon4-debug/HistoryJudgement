/* ===== 사건 6 「두 얼굴의 왕」: 변호인 누리 · 새 장치 ‘버릇 살피기’ =====
   혐의 ① 어머니(인목대비)를 가두고 어린 동생(영창대군)이 목숨을 잃게 한 죄 → 유죄(잠금, 변호인도 다툴 수 없음)
   혐의 ② 명의 은혜를 저버리고 오랑캐(후금)와 몰래 통한 죄 → 무죄(외교 판단은 처음부터 죄가 아님, 근거 ‘두 나라 사이’+원칙 카드. ‘형세를 보아라’는 논쟁 있는 기록이라 혼자서는 근거가 못 됨)
   혐의 ③ 무리한 궁궐 공사로 백성을 괴롭힌 죄 → 책임 있음(v3) / 참작: 대동법, 「동의보감」
   영창대군은 어린아이이므로 그림자 연출도 하지 않음(빈 방과 바람). 실존 인물의 대사는 상상. */
addCast('gwanghae',{name:'광해군',label:'피고 광해군',col:'#a8322a',spec:{skin:'#eec8a2',robe:'#a8322a',robe2:'#7c221c',collar:'round',hat:'ikseon',hair:'#1c1a20',beard:'king',emblem:true,iris:'#3a2a20'}});
addCast('inmok',{name:'인목대비',label:'피해자 인목대비',col:'#5a4a6a',spec:{skin:'#f0caa4',robe:'#6a5a7a',robe2:'#4a3a5a',collar:'cross',hat:'bun',hair:'#1c1a20',beard:'none',iris:'#3a2a20'}});
addCast('hongrip',{name:'강홍립',label:'증인 강홍립',col:'#3a3f5c',spec:{skin:'#e2b48a',robe:'#3a3f5c',robe2:'#2a2e44',collar:'cross',hat:'short',hair:'#1c1a20',beard:'long',beardColor:'#2a2220',iris:'#2e2018'}});
addCast('sagwan',{name:'실록청 사관',label:'사관',col:'#2f5a3c',spec:{skin:'#ecc8a4',robe:'#3d6b4a',robe2:'#284a33',collar:'round',hat:'gat',hair:'#1c1a20',beard:'thin',iris:'#3a2a20'}});
addCast('carpenter',{name:'공사에 불려 온 목수',label:'증인 목수',col:'#7a5a3a',spec:{skin:'#d9a77c',robe:'#8a6a48',robe2:'#5a4634',collar:'cross',hat:'short',hair:'#2a2220',beard:'thin',iris:'#3a2a20'}});
addCast('farmer6',{name:'경기도 농부',label:'증인 농부',col:'#6a5038',spec:{skin:'#d9a77c',robe:'#7a6248',robe2:'#5a4634',collar:'cross',hat:'short',hair:'#2a2220',beard:'none',iris:'#3a2a20'}});
addCast('soldier6',{name:'진영의 소년병',label:'소년병',col:'#4a3a2a',spec:{skin:'#f0caa4',robe:'#4a4a3a',robe2:'#2e2e24',collar:'cross',hat:'short',hair:'#1c1a20',beard:'none',iris:'#3a2a20',blush:true}});
if(ASSETS.sprites&&ASSETS.sprites.boysoldier) ASSETS.sprites.soldier6=ASSETS.sprites.boysoldier;

const EVIDENCE6=[
  {id:'G1',reuse:true,type:'사료',icon:'prison',title:'서궁의 문',body:'1618년 조정은 인목대비를 경운궁(서궁)에 가두기로 정하고, 대비의 칭호까지 낮추었다. 왕의 허락이 있어야 할 수 있는 일이었다.',src:'「광해군일기」를 바탕으로 정리',trust:3,note:'어머니를 가둔 결정이에요.'},
  {id:'G2',reuse:true,type:'사료',icon:'map',title:'세 궁궐의 공사',body:'전쟁(임진왜란)이 끝난 지 얼마 되지 않았는데, 창덕궁을 다시 짓고 경덕궁·인경궁을 새로 짓는 공사를 벌였다. 나무와 돌, 일손을 대느라 백성의 부담이 컸다.',src:'「광해군일기」를 바탕으로 정리',trust:3,note:'백성의 부담이 컸다는 기록이에요. 몇 명이 죽었다는 숫자는 없어요.'},
  {id:'G3',reuse:true,type:'증언',icon:'scroll',title:'왕의 고백',body:'“…그래, 내가 허락했소. 왕위를 지키려고.”',src:'접견에서 들은 피고의 말 (사실 바탕, 대사는 상상)',trust:3,note:'의뢰인이 처음엔 숨긴 말이에요.'},
  {id:'G4',reuse:true,type:'사료',icon:'map',title:'두 나라 사이',body:'1619년 명나라가 후금을 치려고 조선에 군사를 요구했다. 조선은 1만 명이 넘는 군사를 보냈다. 북쪽에서는 후금이 빠르게 강해지고 있었다.',src:'「광해군일기」 · 「책중일록」을 바탕으로 정리',trust:3,note:'두 큰 나라 사이에 낀 조선의 처지예요.'},
  {id:'G5',reuse:true,type:'증언',icon:'scroll',title:'장수의 편지',body:'“강홍립 장군이 떠나기 전, 왕께 무언가를 따로 받았다던데…”',src:'압록강 진영 군졸의 이야기 (상상)',trust:2,note:'장군이 왕께 받은 것은 무엇이었을까요?'},
  {id:'G6',type:'증언',icon:'scroll',tag:'disputed',title:'형세를 보아라',body:'“왕께서 떠나기 전에 말씀하셨소. ‘형세를 보아 움직이라’고.”',src:'3일차 법정, 강홍립의 숨은 말 (기록과 해석 바탕)',trust:3,note:'전쟁을 피하려던 왕의 뜻이에요. 학자들 사이에 해석이 엇갈려요.'},
  {id:'G7',reuse:true,type:'사료',icon:'scroll',title:'일기를 쓴 사람들',body:'「광해군일기」는 광해군을 쫓아낸 인조 때 쓰였다. 원고에는 붉은 먹으로 지우고 고친 자리가 많이 남아 있다.',src:'「광해군일기」 중초본·정초본',trust:3,note:'기록을 쓴 사람이 누구인지 보세요.'},
  {id:'G8',type:'증언',icon:'scroll',title:'쌀로 내는 세금',body:'1608년 경기도에서 대동법을 시작해, 지방 특산물로 내던 공물을 쌀로 내게 했다. 땅이 적은 농민의 부담이 줄었다.',src:'4일차 법정, 농부의 증언 · 사료 바탕',trust:3,note:'참작할 만한 일이에요.'},
  {id:'G9',type:'사료',icon:'scroll',title:'「동의보감」',body:'1613년 허준이 엮은 의학책 「동의보감」을 펴냈다.',src:'실록 편찬청 사관의 방',trust:3,note:'혐의와는 다르지만, 참작할 사정이 될 수 있어요.'},
  {id:'G10',type:'사료',icon:'scroll',title:'앞장선 신하들',body:'이이첨 등 신하들이 대비를 몰아내자고 여러 차례 앞장섰다. 영창대군을 맡았던 강화부사도 기록에 남아 있다.',src:'「광해군일기」를 바탕으로 정리',trust:3,note:'신하들에게도 책임이 있었어요. 그렇다면 왕은?'},
  {id:'GF',type:'문서',icon:'scroll',fake:true,y:1619,title:'끼워 넣은 종이',body:'“1619년 3월, 광해군이 [[청나라]]에 조선을 바치려 했다.” 원고 더미 사이에 끼워져 있던 종이 한 장.',src:'실록 편찬청 원고 더미',trust:1,note:'다른 원고와 같은 종이일까요? 나라 이름도 보세요.',
   zoom:{say:['종이를 크게 확대해 보았다.','귀퉁이에 [[매화 모양 먹 얼룩]]. 그리고 다른 원고는 거친 종이인데, 이 종이만 결이 매끈하다.','1619년이라 적혔는데 [[‘청나라’]]라고 쓴다. 그때 북쪽 나라의 이름은 아직 [[후금]]이었고, ‘청’은 1636년부터인데…'],plum:true,note:'매화 얼룩, 원고와 다른 매끈한 종이. 1619년 종이에 1636년부터 쓴 나라 이름 ‘청나라’.'}},
  {id:'GD1',type:'물건',icon:'censer',title:'명나라 비단',body:'명나라에서 들어온 비단 한 필.',src:'실록 편찬청',trust:3,note:'쟁점과 이어질까요?'},
  {id:'GD2',type:'물건',icon:'army',title:'후금의 화살',body:'후금 군사가 쓰던 화살.',src:'압록강 진영',trust:3,note:'후금이 강했다는 것은 다들 알아요.'},
  {id:'GD3',type:'물건',icon:'censer',title:'빈 옥새 상자',body:'옥새를 넣어 두던 빈 상자.',src:'경운궁 마당',trust:2,note:'무엇을 말해 줄까요?'}
];
Object.entries({G1:1618,G2:1615,G3:1618,G4:1619,G5:1619,G6:1619,G7:1633,G8:1608,G9:1613,G10:1613}).forEach(([k,y])=>{ const e=EVIDENCE6.find(x=>x.id===k); if(e) e.y=y; });
EVIDENCE6.find(x=>x.id==='G5').tag='hearsay'; EVIDENCE6.find(x=>x.id==='G3').tag='imagined';
const LOCS6=[
  {id:'exile',name:'유배지 접견실',time:'아침',kind:'meet',intro:'광해군을 만나는 방이다. 의뢰인은 지쳐 보인다.',miss:['…'],spots:[],
   npcs:[{who:'gwanghae',expr:'base',place:{x:52},topics:[
     {id:'gw-deny',t:'대비를 가둔 일',must:true,lines:[['gwanghae','base','나는 대비를 가둔 적 없소. [[신하들이 한 일]]이오.'],['ME','think','(…말할 때 소매 끝을 만지작거렸어. 정말일까?)']]},
     {id:'gw-war',t:'명과 후금',lines:[['gwanghae','base','두 큰 나라 사이에서 조선이 살 길을 찾았을 뿐이오.']]},
     {id:'gw-confess',t:'서궁의 문',from:2,lock:'G1',must:true,lockSay:'(광해군은 고개를 돌렸다. 대비를 가둔 결정을 보여 주면 무너질지도 모른다.)',
      lines:[['gwanghae','sweat','…그 문을 닫는 데 내 허락이 있었는지 묻는 것이오?'],['gwanghae','sweat','…그래, [[내가 허락했소]]. 왕위를 지키려고…'],['ME','think','(의뢰인이 거짓말을 했어. 그렇다면 나는 무엇을 변호해야 하지?)']],gives:['G3']},
     {id:'gw-sin',t:'앞장선 신하들',from:2,must:true,lines:[['gwanghae','base','이이첨 같은 신하들이 대비를 몰아내자고 날마다 상소를 올렸소.'],['gwanghae','base','영창을 맡은 강화부사도 있었지.']],gives:['G10']},
     {id:'gw-heart',t:'왕이 되기까지',from:2,lock:'__angry',lockSay:'(광해군은 아직 변호인에게 서운한 얼굴이다. 이 이야기는 해 주지 않을 것 같다.)',lines:[['gwanghae','base','나는 전쟁 때 세자로서 백성 곁을 떠나지 않았소. 그 백성을 위해 세금도 고쳤지.']]}],
    present:{G1:{lines:[['gwanghae','shock','그, 그 문서는…!']],unlock:'gw-confess'},G2:{lines:[['gwanghae','base','궁궐은 왕의 위엄이오. …백성에게 무거웠다는 건 아오.']]},G4:{lines:[['gwanghae','base','명은 은혜를 갚으라 하고, 후금은 칼을 갈았소.']]}},
    def:[['gwanghae','base','그건 내가 할 말이 없소.']]}]},
  {id:'seogung',name:'경운궁(서궁)',time:'낮',rooms:[
    {id:'sg-hall',name:'대비가 갇혔던 전각',intro:'인목대비가 갇혀 지낸 전각이다. 텅 비어 있다.',miss:['빈 방석이다.','먼지가 쌓였다.','아무것도 없다.'],
     spots:[{x:30,y:40,w:20,h:24,label:'빈 방석',say:['아무도 앉지 않은 방석이다.']},{x:62,y:16,w:24,h:36,label:'창살 창',say:['창살 사이로 바람이 든다.']},{x:8,y:70,w:16,h:16,label:'작은 신발 한 켤레',say:['어린아이의 신발이다. …더 보지 않기로 했다.']}]},
    {id:'sg-door',name:'굳게 닫힌 문',intro:'서궁의 큰 문이다. 빗장이 굵다.',miss:['문틀이다.','돌계단이다.','아무것도 없다.'],
     spots:[{x:30,y:14,w:40,h:60,label:'굵은 빗장과 붙은 글',ev:'G1',say:['굵은 빗장 위에 글이 붙어 있다.','1618년, 대비를 이곳에 [[가두고 칭호를 낮춘다]]는 결정이다. 왕의 허락 없이는 할 수 없는 일이다.']},{x:6,y:76,w:16,h:14,label:'돌계단',say:['닳은 돌계단이다.']}]},
    {id:'sg-yard',name:'마당',intro:'서궁의 마당이다.',miss:['마당 흙이다.','아무것도 없다.','낙엽이다.'],
     spots:[{x:60,y:60,w:16,h:18,label:'빈 상자',ev:'GD3',say:['마당 구석에 빈 상자가 놓여 있다.','옥새를 넣어 두던 상자다. 지금은 비어 있다. 쟁점과 이어질까?']},{x:10,y:30,w:20,h:36,label:'오래된 나무',say:['오래된 나무다.']}]}]},
  {id:'build6',name:'궁궐 공사 터',time:'오후',intro:'새 궁궐을 짓는 공사 터다. 나무와 돌이 산처럼 쌓여 있다.',
   miss:['나무 부스러기다.','돌가루다.','아무것도 없다.'],
   spots:[{x:50,y:18,w:30,h:40,label:'쌓아 둔 큰 나무들',ev:'G2',say:['큰 나무가 산처럼 쌓여 있다.','전쟁이 끝난 지 얼마 안 됐는데 [[세 궁궐]]을 짓고 고치는 공사다. 백성의 부담이 컸다.']},{x:8,y:62,w:20,h:22,label:'돌 수레',say:['돌을 나르는 수레다.']}],
   npcs:[{who:'carpenter',expr:'base',place:{x:34},topics:[
     {id:'cp-hi',t:'무엇을 짓나요?',lines:[['carpenter','base','궁궐이오. 끝이 없지.']]},
     {id:'cp-wood',t:'나무 값',lock:'G2',lockSay:'(목수는 나무만 깎는다. 공사 기록을 보여 주면 속마음을 말할지도 모른다.)',lines:[['carpenter','base','전쟁 끝난 지 얼마 안 됐는데… 나무 값, 품삯 다 백성 몫이오.'],['carpenter','base','힘들었소. 많이들 힘들었지.']]}],
    present:{G2:{lines:[['carpenter','base','그 기록이 맞소.']],unlock:'cp-wood'}},def:[['carpenter','base','난 나무밖에 모르오.']]}]},
  {id:'camp',name:'압록강 출병 진영',time:'새벽',from:2,intro:'1619년 명을 도우러 떠난 조선군의 진영이다. 강 건너가 후금 땅이다.',
   miss:['얼어붙은 땅이다.','천막 줄이다.','아무것도 없다.'],
   spots:[{x:56,y:20,w:28,h:34,label:'장수의 천막에 걸린 지도',ev:'G4',say:['천막 안에 지도가 걸려 있다.','서쪽에는 명, 북쪽에는 새로 세진 후금. 조선은 명의 요구로 [[1만 명이 넘는 군사]]를 보냈다.']},{x:8,y:66,w:16,h:18,label:'꽂힌 화살',ev:'GD2',say:['땅에 후금의 화살이 꽂혀 있다.','후금이 강하다는 건 누구나 안다.']},{x:84,y:70,w:14,h:16,label:'모닥불 자리',say:['꺼진 모닥불이다.']}],
   npcs:[{who:'soldier6',expr:'base',place:{x:38},topics:[
     {id:'sd-hi',t:'싸움은 어땠나요?',lines:[['soldier6','base','이건 [[비밀]]인데요! (진영이 다 들리는 목소리로) 명나라 장수들은 서둘렀고, 후금은 빨랐어요!'],['ME','think','(…비밀이 아닌 것 같은데.)']]},
     {id:'sd-letter',t:'장수의 편지',lock:'G4',must:true,lockSay:'(군졸은 강 건너만 본다. 그때의 형편을 보여 주면 무언가 떠올릴지도 모른다.)',
      lines:[['soldier6','base','그 지도… 떠나기 전 생각이 나요.'],['soldier6','base','이건 비밀인데요! 강홍립 장군님이 떠나기 전 [[왕께 무언가를 따로 받았다]]던데요. 편지였는지 말이었는지는 저도 몰라요.'],['ME','think','(왕이 장군에게 따로 준 것… 법정에서 물어봐야 해.)']],gives:['G5']}],
    present:{G4:{lines:[['soldier6','base','그때 우리 처지가 딱 그랬소.']],unlock:'sd-letter'}},def:[['soldier6','base','모르는 물건이오.']]}]},
  {id:'sillok',name:'실록 편찬청',time:'밤',from:3,rooms:[
    {id:'sl-room',name:'사관의 방',intro:'「광해군일기」를 엮는 사관의 방이다.',miss:['책상이다.','먹 냄새가 난다.','아무것도 없다.'],
     spots:[{x:60,y:20,w:24,h:36,label:'책장의 의학책',ev:'G9',say:['책장에 두꺼운 의학책이 꽂혀 있다.','1613년 펴낸 [[「동의보감」]]이다. 광해군 때 나온 책이다.']},{x:10,y:60,w:22,h:22,label:'벼루',say:['먹이 말라 있다.']}],
     npcs:[{who:'sagwan',expr:'base',place:{x:40},topics:[
      {id:'sg-hi',t:'무엇을 쓰시나요?',lines:[['sagwan','base','지난 임금의 일기요. 날마다 있었던 일을 적지.']]},
      {id:'sg-mark',t:'고친 자국',lock:'G5',must:true,lockSay:'(사관은 붓만 놀린다. 어제 압록강 진영에서 들은 이야기를 꺼내 보면 대답할지도 모른다.)',
       lines:[['sagwan','sweat','장수가 떠나기 전 왕께 따로 받은 것… 그 대목 말이오?'],['sagwan','base','원고에는 그 대목이 있었소. 그런데 [[붉은 먹으로 지우고 고친]] 자리가 많소.'],['sagwan','base','…지금 임금께서 지난 임금을 쫓아내셨으니, 쓰는 손도 조심스러울 수밖에.'],['ME','think','(기록을 쓴 사람이 피고를 쫓아낸 쪽이라면… 원고 더미도 살펴봐야겠어.)']]}],
      present:{G5:{lines:[['sagwan','sweat','그, 그 이야기를 어디서 들었소…?']],unlock:'sg-mark'},G7:{lines:[['sagwan','base','그 원고를 보았구려. 고친 자국이 많지.']]}},def:[['sagwan','base','글이 아니면 모르오.']]}]},
    {id:'sl-pile',name:'원고를 쌓은 곳',intro:'원고가 산처럼 쌓여 있다.',miss:['종이 더미다.','아무것도 없다.','먼지다.'],
     spots:[{x:20,y:24,w:30,h:40,label:'붉은 먹이 묻은 원고',ev:'G7',say:['붉은 먹으로 줄을 긋고 고친 원고다.','이 일기는 [[광해군을 쫓아낸 인조 때]] 쓰였다. 고친 자리가 많다.']},
      {x:62,y:56,w:16,h:16,label:'더미 사이의 종이',ev:'GF',say:['원고 더미 사이에 종이 한 장이 삐죽 나와 있다.','“광해군이 오랑캐에게 [[조선을 바치려 했다]].” …다른 원고와 느낌이 다르다.']}]},
    {id:'sl-dark',name:'불 꺼진 방',intro:'불이 꺼진 방이다. 물건이 쌓여 있다.',miss:['어둡다.','아무것도 없다.'],
     spots:[{x:30,y:40,w:24,h:24,label:'비단 꾸러미',ev:'GD1',say:['명나라 비단 꾸러미다.','명에서 온 물건이다. 쟁점과 이어질까?']},{x:66,y:30,w:20,h:30,label:'빈 궤짝',say:['비어 있다.']}]}]}
];
const TERMS6=[
  {w:'명',d:'서쪽의 오래된 큰 나라예요. 임진왜란 때 조선을 도왔어요.',ic:'🏯'},
  {w:'후금',d:'북쪽에서 새로 세진 나라예요. 뒤에 이름을 ‘청’으로 바꿔요.',ic:'🐎'},
  {w:'반정',d:'신하들이 왕을 몰아내고 새 왕을 세우는 일이에요. 1623년 인조반정으로 광해군이 쫓겨났어요.',ic:'🔄'},
  {w:'실록',d:'나라가 왕마다 있었던 일을 날마다 적어 엮은 공식 기록이에요. 쫓겨난 왕의 기록은 ‘일기’라고 불러요.',ic:'📚'},
  {w:'대동법',d:'지방 특산물로 내던 세금(공물)을 쌀로 내게 한 제도예요.',ic:'🌾'},
  {w:'버릇 살피기',d:'증인이 거짓말할 때만 나오는 몸의 버릇을 찾는 일이에요. 어느 말이 수상한지만 알려 줘요.',ic:'🔍'}
];
const C6CH=()=>[{t:'① 어머니를 가두고 어린 동생이 목숨을 잃게 한 죄'},{t:'② 명을 저버리고 후금과 몰래 통한 죄'},{t:'③ 무리한 궁궐 공사로 백성을 괴롭힌 죄'}];
const T6carp=()=>({key:'목수',who:'carpenter',habit:'망치 자루를 꽉 움켜쥐었다',lines:[
  {text:'나는 새 궁궐 공사에 불려 온 목수요.',expr:'base',press:[['rival','normal','얼마나 일하셨나요?'],['carpenter','base','몇 해째요.']]},
  {text:'전쟁이 끝난 지 얼마 안 됐는데, 왕은 궁궐을 셋이나 짓고 고쳤소.',expr:'base',press:[['rival','think','(이건 기록과 맞아.)'],['carpenter','base','사실이오.']]},
  {text:'왕은 공사로 하루에 백 명씩 백성을 죽게 했소!',expr:'base',lie:true,ev:'G2',press:[['rival','normal','하루에 백 명이요?'],['carpenter','base','그, 그렇다니까!']],
   hit:[['rival','present','공사 기록입니다. 백성의 부담이 [[컸던 것은 사실]]이에요. 그런데 하루에 백 명이 죽었다는 기록은 [[어디에도 없어요]].'],['rival','normal','변호인은 혐의 ③ 자체는 다투지 않아요. 다만 [[부풀린 말]]은 바로잡겠습니다.'],['carpenter','sweat','으… 그만큼 힘들었다는 말이었소.']]}
]});
const T6ha=()=>({key:'하람 논고',who:'player',lines:[
  {text:'혐의 ②, 피고는 명의 은혜를 저버리고 오랑캐와 몰래 통했습니다.',expr:'stand',press:[['rival','normal','몰래 통했다는 증거는요?'],['player','stand','다음 말을 들으세요.']]},
  {text:'피고는 명을 돕는 척하며 처음부터 군사를 보내지 않으려 했습니다!',expr:'stand',lie:true,ev:'G4',press:[['rival','think','처음부터요?'],['player','stand','네.']],
   hit:[['rival','present','두 나라 사이의 기록입니다. 조선은 명의 요구에 [[1만 명이 넘는 군사]]를 보냈어요.'],['rival','confident','군사를 보내지 않으려 했다는 말은 사실과 다릅니다!'],['player','upset','…그래도 결국 항복했잖아!']]},
  {text:'그 군사를 이끈 장수는 오랑캐에게 항복했습니다. 그게 증거예요.',expr:'stand',press:[['rival','normal','항복이 왕의 뜻이었는지는 아직 몰라요.'],['player','stand','내일 그 장수를 부르겠어요.']]}
]});
const T6hong=()=>({key:'강홍립',who:'hongrip',allReveal:true,habit:'투구 끈을 고쳐 맸다',lines:[
  {text:'나는 도원수 강홍립이오. 1619년, 명을 도우러 군사를 이끌고 갔소.',expr:'base',press:[['rival','normal','싸움은 어땠나요?'],['hongrip','base','명나라 군대가 먼저 무너졌소.']]},
  {text:'왕은 아무것도 몰랐소.',expr:'base',press:[['rival','think','아무것도요?'],['hongrip','base','…그렇소.']]},
  {text:'나는 내 마음대로 항복했소. 왕께서는 싸우라고만 하셨소.',expr:'base',lie:true,need2:['G5','G4'],press:[['rival','normal','싸우라고만요?'],['hongrip','base','그, 그렇소.']],
   hit:[['rival','present','군졸의 이야기와 두 나라 사이의 형편을 맞대 보세요. 장군은 떠나기 전 [[왕께 따로 무언가를 받았어요]].'],['rival','confident','명은 군사를 요구하고 후금은 강해지던 때, ‘싸우라고만’ 했을까요? 장군이 받은 것은 무엇이었죠?'],['hongrip','sweat','크…!']]},
  {text:'떠나기 전 왕께 따로 받은 것은 없소.',expr:'sweat',reveal:4,press:[['rival','think','정말 아무것도요?'],['hongrip','sweat','……'],['judge','stern','증인, 사실대로 말하시오.']]},
  {text:'…왕께서 떠나기 전에 말씀하셨소. [[‘형세를 보아 움직이라’]]고.',expr:'sweat',hidden:true,gives:['G6']}
]});

async function prologue6(){
  bgm('crisis');
  await say('guide','normal','1618년, 한양의 경운궁.',{view:'prologue6'});
  await playShadow('door');
  await say('guide','normal','왕의 어머니가 그 문 안에 갇혔다.',{view:'prologue6'});
  await say('voice','normal','역사가 묻는다. 한 사람에게 잘한 일과 잘못한 일이 함께 있을 때, [[무엇이 다시 평가되고 무엇이 여전히 죄인가]].',{view:'prologue6'});
  await titleCard('사건 6','두 얼굴의 왕');
}
async function runDef6(from){
  if(S.flags.clientAngry===false) S.unlocked.add('__angry');
  if(from<=0){ await prologue6(); bgm('investigate');
    await say('judge','normal','누리 변호인, 피고는 조선의 왕이었던 [[광해군]]이오. 쫓겨난 왕이지.',{view:'lobby'});
    await say('player','confident','혐의는 모두 「광해군일기」에 적혀 있어요. 이번엔 기록이 내 편이야.',{view:'lobby'});
    await say('rival','think','(기록을 쓴 사람은 누구였을까. 먼저 의뢰인을 만나 봐야겠어.)',{view:'lobby'}); }
  await playDays([
    {inv:async()=>{ await invDay(1,'[[유배지 접견실]]에서 의뢰인을 만나고, [[경운궁]]과 [[궁궐 공사 터]]를 조사하자. 의뢰인의 말도 증거와 맞대 봐야 해.'); },court:d1_6,
     learned:['혐의 ①(어머니를 가두고 동생이 목숨을 잃게 한 일)은 기록으로 확인된다.','공사의 부담은 컸지만, 부풀린 숫자는 바로잡아야 한다.','거짓말할 때만 나오는 버릇을 살피면 수상한 말을 찾을 수 있다.']},
    {inv:async()=>{ await infoCard('두 나라 사이 줄타기','<p>🏯 <b>명</b> — 서쪽의 오래된 큰 나라. “임진왜란 때 도와준 은혜를 갚으라.”</p><p>🐎 <b>후금</b> — 북쪽에서 새로 세진 나라. 빠르게 강해지는 중.</p><p>🤸 <b>조선</b> — 두 나라 사이 줄 위에 선 처지. 한쪽 편만 들면 다른 쪽과 전쟁이 날 수 있었어요. 양쪽 다 화나지 않게 하려는 외교를 ‘중립 외교’라고 불러요.</p>'); await invDay(2,'[[압록강 출병 진영]]이 열렸어. 접견실의 의뢰인에게도 다시 물어보자.'); },court:d2_6,
     learned:['피고는 대비를 가두는 데 허락했다고 털어놓았다.','신하들에게 책임이 있어도, 허락한 왕의 책임은 사라지지 않는다.','조선은 명의 요구로 1만 명이 넘는 군사를 보냈다.']},
    {inv:async()=>{ await invDay(3,'[[실록 편찬청]]이 열렸어. 「광해군일기」를 쓰는 곳이야.'); },court:d3_6,
     learned:['강홍립은 왕에게서 ‘형세를 보아 움직이라’는 말을 들었다.','「광해군일기」는 광해군을 쫓아낸 쪽이 썼다.','편향된 기록이라도, 다른 증거로 확인된 사실은 지워지지 않는다.']},
    {court:d4_6}
  ],from);
}
async function d1_6(){
  await courtOpen(1);
  await say('judge','normal','검사는 혐의를 말하시오.');
  await say('player','confident','혐의는 세 가지! 첫째, [[어머니를 가두고 어린 동생이 목숨을 잃게 한 죄]].');
  setCharges(C6CH());
  await say('player','confident','둘째, [[명을 저버리고 오랑캐와 몰래 통한 죄]]. 셋째, [[무리한 궁궐 공사로 백성을 괴롭힌 죄]]. 모두 「광해군일기」에 있어요!');
  await say('judge','normal','변호인, 혐의 ①에 대한 입장은?');
  const c=await choiceSheet('혐의 ①을 어떻게 할까요?',[
    {t:'처음부터 인정한다. 기록으로 확인되는 일은 다투지 않는다.',ok:true,tag:'admit'},
    {t:'일단 다툰다. 의뢰인은 신하들이 한 일이라고 했다.',ok:true,tag:'fight'}]);
  S.flags.d1=c.tag; track('d1',{v:c.tag});
  if(c.tag==='admit'){
    await say('rival','normal','변호인은 혐의 ①의 사실을 인정합니다.');
    await say('judge','normal','확인된 사실을 인정하는 것도 변호인의 일이오.'); await gainTrust();
    await say('gwanghae','angry','변호인! 내 편이 아니었소?!');
    S.flags.clientAngry=true; await say('rival','think','(의뢰인이 화가 났어. 내일 접견 때 이야기 하나는 들려주지 않겠지.)');
  } else {
    S.flags.clientAngry=false; S.unlocked.add('__angry');
    await say('rival','confident','변호인은 다툽니다. 피고는 대비를 가둔 적이 없고, 신하들이 한 일입니다.');
    await shout('objection'); showEvidence('G1');
    await say('player','present','서궁의 문입니다! 대비를 가두는 결정에는 [[왕의 허락]]이 있어야 해요!',{action:true}); hideEvidence();
    await say('judge','stern','변호인, 그것은 기록으로 확인된 일이오.'); await loseTrust(); if(S.trust<=0){ await loseTrial(); return false; }
    await say('gwanghae','base','…변호인, 고맙소. 끝까지 내 말을 믿어 주어서.');
  }
  await say('player','confident','혐의 ③의 증인을 부를게요. 공사에 불려 온 [[목수]]입니다.');
  await say('judge','normal','변호인, 이번 재판부터 [[살피기]]를 쓸 수 있소. 증인이 거짓말을 할 때만 나오는 [[버릇]]이 있다면, 어느 말이 수상한지 알 수 있소. 무엇으로 깰지는 스스로 찾아야 하오.');
  bgm('testimony'); await say('carpenter','base','목수요. 할 말이 많소.');
  const T=T6carp(); T.onHit=async()=>{ bgm('open'); await say('player','sweat','윽… 숫자는 부풀렸어도, 부담이 컸던 건 사실이야!'); };
  if(!await testimony(T,'궁궐 공사는 백성을 죽였다','살피기(S)로 버릇을 찾아보세요')) return false;
  await say('judge','normal','혐의 ③은 부풀린 말을 걷어 내고 다시 보겠소. 오늘은 여기까지.');
  await gavel(); await titleCard('― 1일차 끝 ―','의뢰인의 말은 진실인가');
  return true;
}
async function boySecrets(){
  await say('player','confident','그 군대에 있던 증인을 하나 더 부를게요. 압록강 진영의 [[소년병]]입니다.');
  bgm('testimony'); Music.sting('murmur');
  await say('soldier6','base','열여섯 살 소년병이에요! 이건 [[비밀]]인데요…! (법정이 다 들리는 목소리로)');
  await say('judge','stern','증인, [[조용히]] 말하시오.');
  await say('guide','normal','(소년병이 증언대를 넘어와 해치의 귀에 대고 속삭였다. “비! 밀! 인! 데! 요!”)'); Music.sting('ding'); shake('quake');
  await say('guide','normal','(해치가 깜짝 놀라 고개를 흔들자, 목에 단 [[방울]]이 떨어져 데굴데굴 굴러갔다.)');
  Music.sting('clap'); await say('clapper','base','오오! 짝짝짝짝!',{view:'witness'});
  await say('judge','stern','방청석, 박수 칠 때가 아…  (방울을 흔들려다 손이 허공을 젓는다) …쉿.');
  await say('ttolbang','joy','재판장님 방울 찾았어요! …어? 방울 안에서 [[메밀묵 조각]]이 나와요. 언제 들어갔지?');
  await say('judge','stern','……이번 달 메밀묵은 나중에 따지겠소. 증인, 그 비밀들을 하나씩 말하시오. 판단은 재판부가 하오.');
  await say('rival','think','(비밀이라고 한 말 가운데 [[직접 본 것]]과 [[들은 소문]]을 갈라내야 해.)');
  const SEC=[
    {t:'강홍립 장군님이 떠나기 전날 밤, 왕께 따로 불려 가는 걸 제가 봤어요!',a:'saw',why:'증인이 그 자리에서 직접 본 일이에요.'},
    {t:'장군님이 오랑캐 왕이랑 형님 아우 하기로 했대요!',a:'heard',why:'“했대요” — 누군가에게 들은 소문이에요.'},
    {t:'우리 군사가 1만 명도 넘게 강을 건넜어요. 저도 그중 하나였고요!',a:'saw',why:'증인이 직접 겪은 일이에요.'},
    {t:'왕이 처음부터 싸울 생각이 없었대요!',a:'heard',why:'“없었대요” — 왕의 속마음을 들은 말이에요. 직접 볼 수 없는 일이죠.'}];
  let right=0;
  for(const x of SEC){
    await say('soldier6','base',`이건 비밀인데요! ${x.t}`,{tag:'소년병의 비밀'});
    for(let k=0;;k++){
      const c=await choiceSheet(`“${x.t}” — 이 말은?`,[{t:'직접 본 것',ok:x.a==='saw',k:'saw'},{t:'전해 들은 말 (소문)',ok:x.a==='heard',k:'heard'}]);
      track('secret',{t:x.t.slice(0,30),pick:c.k,ok:c.ok});
      if(c.ok){ if(k===0) right++; await say('judge','normal',x.why); break; }
      await say('judge','normal','다시 보시오. 그 말을 한 사람이 [[그 자리에 있었는지]] 생각해 보시오.');
    }
  }
  S.flags.secrets=right;
  await say('judge','normal','본 것은 증언으로 듣고, 들은 소문은 소문으로 두겠소. 증인, 수고했소.');
  await say('soldier6','base','이건 비밀인데요… 저 오늘 엄청 떨었어요!');
}
async function d2_6(){
  await courtOpen(2);
  await say('judge','normal','판결에 앞서 피해를 입은 사람의 말을 듣겠소. 인목대비는 증인석에 서지 않고 [[편지]]를 보냈소. 검사가 읽으시오.');
  await playShadow('emptyroom');
  bgm('testimony');
  await say('player','normal','“나는 아들을 잃었소.”',{tag:'인목대비의 편지 · 하람이 읽음'});
  await say('player','normal','“어린 아들이 귀양 간 곳에서 목숨을 잃었다는 소식을, 갇힌 방에서 들었소. 그 뒤로 나는 그 문 안에서 다섯 해를 지냈소.”',{tag:'인목대비의 편지 · 하람이 읽음'});
  await say('inmok','base','…그 문이 닫히던 소리를, 나는 아직도 듣소.',{tag:'편지 끝 한 줄 · 대비의 목소리'});
  const c=await choiceSheet('변호인은 어떻게 할까요?',[{t:'의뢰인 대신 사과의 말을 전한다.',ok:true,tag:'apology'},{t:'아무 말 없이 듣는다.',ok:true,tag:'silent'}]);
  S.flags.apology=c.tag==='apology'; track('apology',{v:c.tag});
  if(S.flags.apology) await say('rival','normal','…피고를 대신해, 깊이 사과드립니다. 변호인은 이 일을 다투지 않겠습니다.');
  else await say('rival','think','(…지금은 듣는 것밖에 할 수 없어.)');
  await say('judge','normal','잘 들었소.');
  // 용의자 여럿: 진짜 책임은 신하들에게?
  bgm('crisis');
  await say('rival','confident','재판장님, 혐의 ①에 대해 하나 묻겠습니다. 대비를 몰아내자고 [[앞장선 사람]]은 누구였을까요?');
  setCharges([{t:'이이첨 (신하, 기록만)',st:'sus'},{t:'강화부사 (영창대군을 맡은 관리, 기록만)',st:'sus'},{t:'광해군',st:'sus'}],'누구의 책임인가');
  if(!await presentFor('신하들이 앞장섰다는 증거를 고르세요.',['G10'],{say:()=>'‘앞장선 신하들’입니다. 이이첨 같은 신하들이 여러 차례 대비를 몰아내자고 했어요!'})) return false;
  chargeSt(0,'sus','앞장섬'); chargeSt(1,'sus','맡았던 관리');
  await say('player','confident','그 말은 맞아요. 그런데 변호인, 마지막 결정은 누가 했죠?');
  if(!await presentFor('마지막 결정을 누가 했는지 보여 줄 증거를 고르세요. (변호인으로서 정직하게)',['G3','G1'],{allowUsed:true,say:e=>`…‘${e.title}’. 피고는 허락했다고 말했어요.`})) return false;
  chargeSt(2,'sus','허락함');
  if(!await choose('그렇다면 혐의 ①의 결론은?',[
    {t:'신하들에게 책임이 있어도, 허락한 왕의 책임은 사라지지 않는다.',ok:true},
    {t:'신하들이 앞장섰으니 왕은 무죄다.',ok:false,fb:'앞장선 사람이 있다고 허락한 사람의 책임이 사라지지 않소.'},
    {t:'모두 똑같이 유죄이니 누구 책임인지 따질 필요가 없다.',ok:false,fb:'법정은 한 사람씩, 그 사람이 한 일을 따지오.'}])) return false;
  setCharges(C6CH());
  await say('rival','normal','(의뢰인에게 유리한 ‘다른 범인’을 찾고 싶었어. 하지만 진실은 진실이야.)');
  await say('judge','normal','이제 혐의 ②. 검사, 논고를 하시오.');
  await say('player','stand','좋아요.',{view:'witness'});
  if(!await testimony(T6ha(),'광해군은 오랑캐와 내통했다')) return false;
  /* 빵 장면 ⑥ 「귓속말 대참사」: 비밀 넷 가운데 둘은 직접 본 것, 둘은 들은 소문 (무거운 장면과 떨어진 곳에 둠) */
  await boySecrets();
  await say('player','confident','내일, 오랑캐에게 항복한 장수 [[강홍립]]을 부르겠습니다. 그가 직접 내통을 증언할 거예요.');
  await gavel(); await titleCard('― 2일차 끝 ―','항복한 장수');
  return true;
}
async function d3_6(){
  await courtOpen(3);
  await say('player','confident','증인, 도원수 [[강홍립]]입니다.');
  bgm('testimony'); await say('hongrip','base','강홍립이오.');
  if(!await testimony(T6hong(),'나는 왕의 뜻을 어기고 항복했다','살피기(S)로 버릇을 찾아보세요')) return false;
  Music.stop(0.02); Music.sting('murmur'); flash(); await wait(600); bgm('turnabout');
  await say('judge','shock','검사가 ‘내통’의 증인으로 부른 사람이, 전쟁을 피하려던 [[왕의 외교]]를 증언했소…!');
  await shout('objection'); bgm('crisis');
  await say('player','confident','이의 있습니다! 그 말도 결국 [[명을 배신한]] 거예요!',{action:true});
  if(!await choose('하람의 말에 어떻게 답할까요?',[
    {t:'명을 도우러 군사를 보낸 것도 사실이고, 형세를 보아 전쟁을 피하려 한 것도 사실이다. 나라를 지키려는 외교를 ‘몰래 통했다’고 할 수는 없다.',ok:true},
    {t:'명은 나쁜 나라였으니 배신해도 된다.',ok:false,fb:'나라를 좋다·나쁘다로 나누는 것은 의견이오. 증거로 따지시오.'},
    {t:'후금이 이길 것을 알았으니 후금 편이 옳았다.',ok:false,fb:'결과를 알고 하는 말이오. 그때의 형편으로 따지시오.'}])) return false;
  { const id=await presentFor('그 답의 근거를 고르세요.',['G4','G6'],{allowUsed:true}); if(!id) return false;
    if(id==='G6'){ track('disputed_alone',{ev:'G6'}); await shout('objection'); await say('player','confident','이의 있습니다! ‘형세를 보아라’는 [[학자들 사이에 논쟁이 있는]] 기록이에요!',{action:true});
      await say('judge','normal','그렇소. 논쟁 있는 기록은 [[혼자서는]] 근거가 되지 못하오. 다른 근거와 함께라면 받아들이겠소.');
      if(!await presentFor('함께 낼 다른 근거를 고르세요.',['G4'],{allowUsed:true,say:()=>'‘두 나라 사이’입니다. 명은 군사를 요구하고 후금은 강해지던 때였어요. 위험을 알고 [[전쟁을 피하려 한]] 외교였습니다.'})) return false;
      await say('judge','normal','두 근거를 함께 받아들이겠소.'); } }
  // 가짜 종이
  bgm('crisis');
  await say('player','confident','그럼 이건 어때요? 실록 편찬청의 원고 사이에서 나온 종이예요!');
  if(!S.found.has('GF')){ S.found.add('GF'); }
  showEvidence('GF'); await say('player','present','“광해군이 오랑캐에게 [[조선을 바치려 했다]].”'); hideEvidence();
  const z=await choiceSheet('이 종이를 어떻게 할까요?',[{t:'증거 확대로 종이를 자세히 살펴본다.',ok:true,tag:'zoom'},{t:'실록 편찬청에서 나온 것이니 받아들인다.',ok:false,fb:'어디서 나왔는지보다, 무엇이 쓰였고 누가 썼는지를 보시오.',tag:'accept'}]);
  if(z.tag!=='zoom'){ await say('judge','stern',z.fb); await loseTrust(); if(S.trust<=0){ await loseTrial(); return false; } }
  await openZoomScene('GF');
  if(!await presentFor('그 종이와 다른 원고를 견주어 볼 증거를 고르세요.',['G7'],{allowUsed:true,say:()=>'‘일기를 쓴 사람들’의 원고는 거친 종이에 붉은 먹으로 고친 자국투성이예요. 이 종이만 결이 다르고, 고친 자국도 없어요!'})) return false;
  await say('player','shock','…이 종이, [[누가 넣어 둔 거지]]?');
  await say('guide','normal','방청석 맨 뒤, 기록관의 붓끝이 멈추었다.');
  // 3일차 끝 반전 2
  bgm('turnabout');
  await say('rival','confident','재판장님. 그런데 이 모든 혐의를 적은 「광해군일기」, 그 일기를 쓴 사람이 [[누구인지]] 아십니까?');
  showEvidence('G7'); await say('rival','present','「광해군일기」는 피고를 [[쫓아낸 인조 때]] 쓰였습니다. 고친 자국도 많고요.',{action:true}); hideEvidence();
  await say('judge','normal','…기록을 쓴 사람이 피고를 쫓아낸 쪽이라면, 그 기록은 [[조심해서]] 읽어야 하오.');
  await say('judge','stern','다만 혐의 ①은 다른 기록과 피해자의 진술로도 확인되오. 그것은 그대로요.');
  await gavel(); await titleCard('― 3일차 끝 ―','기록을 쓴 사람');
  return true;
}
async function openZoomScene(id){ await new Promise(res=>{ openZoom(id,null); onSheetClose=()=>setTimeout(res,40); }); }
async function d4_6(){
  await courtOpen(4);
  await say('rival','confident','변호인은 참작할 사정을 위해 증인을 신청합니다. 경기도의 [[농부]]입니다.');
  bgm('testimony');
  await say('farmer6','base','경기도에서 농사짓는 사람이오.');
  await say('farmer6','base','예전엔 우리 고을에 없는 특산물까지 사서 바쳐야 했소. 대동법 뒤로는 [[쌀로 내게]] 됐지.');
  await say('farmer6','base','땅이 적은 우리 같은 사람은 숨통이 트였소.');
  await gotEv('G8');
  await say('judge','normal','피고, 최후 진술을 하시오.');
  if(S.flags.d1==='fight') await say('gwanghae','base','변호인은 처음에 내 말을 믿어 주었소. 그래서 이제 사실대로 말하겠소.');
  else await say('gwanghae','base','변호인은 처음부터 나를 다그쳤지. …하지만 그 말이 맞았소.');
  await say('gwanghae','sweat','나는 나라를 전쟁에서 지키려 했소. 그리고… 왕위를 지키려 어머니를 가두었소.');
  if(S.flags.apology) await say('gwanghae','sweat','변호인이 대비께 사과를 전했다 들었소. …그 말은, 내가 했어야 했소.');
  await say('judge','normal','변호인, 혐의마다 판결의 종류와 이유, 근거를 대시오.');
  if(!await verdictKind('혐의 ① 어머니를 가두고 어린 동생이 목숨을 잃게 한 죄','guilty',{q:'왕이 허락해 어머니를 가두었어요. 사람에게 직접 해를 끼친 일이에요. 변호인도 이 판결은 막을 수 없어요.',idx:0})) return false;
  if(!await reasonEv('혐의 ①을 유죄로 보는 가장 알맞은 이유는?',[
    {t:'신하들이 앞장섰어도, 왕이 대비를 가두는 데 허락했고 그렇게 털어놓았다.',ok:true,ev:['G1','G3']},
    {t:'「광해군일기」는 반대편이 썼으니 혐의 ①도 믿을 수 없다. 무죄다.',ok:false,fb:'기록의 편향은 다른 증거로 확인된 사실을 지우지 못하오.'},
    {t:'이이첨이 앞장섰으니 이이첨만 유죄다.',ok:false,fb:'이 재판의 피고는 광해군이오. 허락한 책임은 남소.'}])) return false;
  if(!await verdictKind('혐의 ② 명을 저버리고 후금과 몰래 통한 죄','innocent',{q:'두 나라 사이에서 위험을 알고 전쟁을 피하려 한 외교였어요. 원칙 카드로 판결해 보세요.',idx:1,fb:{resp:'위험을 알고 [[전쟁을 피했소]]. 경고를 무시해 백성이 고통받은 것이 아니니 책임을 물을 일이 아니오.',guilty:'외교 판단은 처음부터 죄로 볼 수 없소. 원칙 카드를 보시오.'}})) return false;
  if(!await reasonEv('혐의 ②가 무죄인 가장 알맞은 이유는?',[
    {t:'명에 군사를 보내면서도 위험을 알고 전쟁을 피하려 한 외교였다. 외교 판단은 처음부터 죄가 아니고, 몰래 통했다는 증거는 끼워 넣은 가짜 종이뿐이다.',ok:true,ev:['G4'],soft:{G6:[['player','confident','이의 있습니다! ‘형세를 보아라’는 학자들 사이에 [[논쟁이 있는]] 기록이에요!'],['judge','normal','논쟁 있는 기록은 혼자서는 판결의 근거가 되지 못하오. [[다른 근거]]와 함께 내시오. (방울은 깨지 않겠소.)']]}},
    {t:'명은 은혜를 갚을 필요가 없는 나라였다.',ok:false,fb:'그것은 의견이오.'},
    {t:'강홍립이 혼자 항복했으니 왕과는 관계가 없다.',ok:false,fb:'강홍립은 왕의 말을 증언했소. 증언을 다시 보시오.'}])) return false;
  if(!await verdictKind('혐의 ③ 무리한 궁궐 공사로 백성을 괴롭힌 죄','resp',{q:'궁궐 공사는 나라의 정책 판단이었지만, 전쟁 직후 백성의 고통이 컸어요. 어떻게 판결할까요?',idx:2,fb:{guilty:'궁궐 공사는 사람에게 직접 해를 끼친 행위가 아니라 [[정책 판단]]이었소. 그러나 그 결과는 무겁소.'}})) return false;
  if(!await reasonEv('혐의 ③을 ‘책임 있음’으로 보는 가장 알맞은 이유는?',[
    {t:'전쟁이 끝난 지 얼마 안 된 때 세 궁궐을 짓고 고쳐 백성의 부담을 크게 했다.',ok:true,ev:['G2']},
    {t:'공사로 하루에 백 명씩 죽었다.',ok:false,fb:'그 숫자는 부풀린 말이었소.'},
    {t:'궁궐은 왕의 위엄이니 괜찮다.',ok:false,fb:'그것은 의견이오. 백성의 부담은 기록에 있소.'}])) return false;
  if(!await presentFor('참작할 사정의 근거를 고르세요.',['G8','G9'],{allowUsed:true,say:e=>`참작할 사정은 ‘${e.title}’입니다.`})) return false;
  bgm('verdict'); await gavel();
  await say('judge','normal','판결을 내리겠소.');
  chargeSt(0,'guilty'); await say('judge','stern','혐의 ①. 어머니를 가두고 어린 동생이 목숨을 잃게 한 일에 피고의 허락이 있었소. [[유죄]].');
  chargeSt(1,'innocent'); await say('judge','normal','혐의 ②. 위험을 알고 전쟁을 피했소. 그런 외교를 ‘몰래 통했다’고 할 수 없소. [[무죄]].');
  chargeSt(2,'resp'); await say('judge','stern','혐의 ③. 전쟁 뒤 무리한 궁궐 공사로 백성의 부담을 키웠소. [[책임 있음]]. 대동법과 「동의보감」은 참작하되, 그 무게는 역사에 기록하오.');
  await say('judge','normal','두 얼굴이라 했소. 그러나 [[한 사람]]이오. 나라를 전쟁에서 지키려 한 왕도, 어머니를 가둔 아들도 모두 광해군이오.');
  const pts=(S.flags.d1==='admit'?1:0)+(S.flags.apology?1:0)+(S.plums&&S.plums.has('GF')?1:0)+(S.trust>=3?1:0);
  caseResult({grade:pts>=4?'공정한 변호인':pts>=2?'노련한 변호인':'견습 변호인',lead:'의뢰인의 잘못은 인정하면서, 다시 평가받아야 할 외교를 증거로 지켰습니다.',
    items:[`1일차 혐의 ①: ${S.flags.d1==='admit'?'처음부터 인정':'일단 다툼'}`,`소년병의 비밀 가르기: 처음에 맞힌 것 ${S.flags.secrets||0}/4`,`인목대비에게: ${S.flags.apology?'사과의 말을 전함':'침묵'}`,`버릇 살피기를 쓴 횟수: ${S.observes||0}번`,`끼워 넣은 종이: ${S.plums&&S.plums.has('GF')?'매화 얼룩을 찾음':'—'}`],
    judge:'의뢰인의 잘못을 지우지 않고, 다시 볼 것만 다시 본 변호인이오.',history:HIST6});
  return true;
}
const HIST6='광해군은 임진왜란 때 세자로서 백성을 돌보았고, 왕이 된 뒤 대동법을 시작하고 「동의보감」을 펴냈습니다. 명과 후금 사이에서 전쟁을 피하려는 외교를 폈지만, 영창대군이 목숨을 잃고 인목대비가 서궁에 갇히는 일이 있었고, 궁궐 공사로 백성의 부담도 컸습니다. 1623년 인조반정으로 쫓겨났고, 그의 시대를 적은 「광해군일기」는 반정 세력이 엮었습니다. 그래서 광해군의 외교는 오늘날 다시 평가되고 있습니다.';
regCase(6,{title:'두 얼굴의 왕',desc:'광해군 · 변호인 · 난이도 5',ev:EVIDENCE6,locs:LOCS6,terms:TERMS6,defName:'광해군',time:'90~100분',main:'def',
  lead:'사건 6은 변호인 자리예요. 의뢰인도 거짓말을 할 수 있어요. 새 장치 ‘살피기’로 증인의 버릇을 찾아보세요.',
  locked:{pros:'변호인 사건',judge:'변호인 사건'},
  openLine:'지금부터 [[역사 법정]]을 엽니다. 피고는 쫓겨난 왕, 광해군.',history:HIST6,
  views:{prologue6:prologueView('#2a2620','#0c0a08')},
  goal:{def:'쫓겨난 왕 광해군을 변호해요. 의뢰인의 잘못은 인정하고, 다시 볼 것만 증거로 다시 봐요.'},
  recall:{q:'지난 사건에서 판사가 공소장 변경을 허가한 근거는 무엇이었나요?',opts:[{t:'천도를 정한 회의가 최씨 댁에서 열렸다는 기록',ok:true},{t:'최우가 무서워 보였다는 것'},{t:'고종이 왕이라는 것'}],yes:'잘 기억하고 있구려. 이번에는 다시 변호인 자리요. 의뢰인의 말도 증거로 맞대 보시오.',no:'…‘최씨 댁의 회의’라는 기록이었소. 이번에는 변호인 자리요. 의뢰인의 말도 증거로 맞대 보시오.'},
  bgCards:{1:{ic:'🏯',t:'임진왜란이 끝나고 10년 뒤 광해군이 왕이 되었어요. 1618년 왕의 어머니 인목대비가 서궁에 갇혔어요.'},2:{ic:'🤸',t:'서쪽의 명과 북쪽의 후금 사이에서, 조선은 줄 위에 선 처지였어요.'},3:{ic:'📚',t:'광해군은 1623년 쫓겨났어요. 그의 시대를 적은 「광해군일기」는 쫓아낸 쪽이 엮었어요.'},4:{ic:'⚖️',t:'판결하는 날이에요. 다시 평가할 것과 그대로인 것을 나눠요.'}},
  record:['전쟁이 끝난 지 얼마 안 되어 궁궐 공사에 불려 간 백성들','나무와 돌 값을 떠안은 고을 사람들'],
  lesson:{opts:[{t:'잘한 일과 잘못한 일이 한 사람 안에 함께 있을 수 있다.',r:'그렇소. 두 얼굴이 아니라 한 사람이오.'},{t:'기록을 쓴 사람이 누구인지 함께 본다.',r:'그렇소. 다만 편향이 확인된 사실까지 지우지는 못하오.'},{t:'논쟁 있는 기록은 다른 근거와 함께 쓴다.',r:'그렇소. 혼자 선 기록은 흔들리기 쉽소.'}]},
  paper:{id:'GF',anach:'청나라'},
  teaser:'1636년 겨울, 남한산성. 모두가 ‘독살’이라 믿는 일이 있다. 그 믿음은 [[증명될까]]?',
  gag:{scene:'소년병 「귓속말 대참사」',
    inv:{1:[['ttolbang','bang','변호인님 출동! 증거 나와라, 뚝딱!'],['guide','normal','(메밀묵이 나왔다. …그런데 오늘따라 크다.)'],['ttolbang','joy','오늘은 왕족용 메밀묵인가 봐요!']],
      2:[['ttolbang','base','압록강 진영에 소년병이 있대요. 무슨 말이든 “이건 비밀인데요!” 하고 크게 말한대요.']],
      3:[['ttolbang','base','실록 편찬청은 조용히 해야 해요. 붉은 먹이 묻은 원고가 많대요. 저는 먹물만 보면 재채기가… 에취!']]},
    fix:{2:{say:'어제 법정 요약! 목수 아저씨 말로는 궁궐 공사로 [[하루에 백 명씩]] 죽었대요!',opts:[{t:'아니야. 부담이 컸던 건 사실이지만, 그 숫자는 부풀린 말이었어.',ok:true},{t:'맞아. 하루에 백 명씩 죽었어.'}]},
      3:{say:'어제 법정 요약! 조선은 명을 돕는 척만 하고 [[군사를 한 명도]] 안 보냈대요!',opts:[{t:'아니야. 명의 요구로 1만 명이 넘는 군사를 보냈어.',ok:true},{t:'맞아. 한 명도 안 보냈어.'}]}},
    pun:[['judge','normal','두 나라 사이 줄타기라… 오늘 재판도 [[줄줄이]] 이어지겠구려.'],['ttolbang','joy','줄타기, 줄줄이! 하하하!'],['guide','normal','(누리가 한숨을 쉬었다.)']],punDay:3},
  gojeung:['영창대군 사망(1614)과 인목대비 서궁 유폐(1618) 경위','1619년 사르후 전투 출병 규모(1만 명 이상)와 강홍립의 항복','‘형세를 보아 움직이라’는 지시의 기록 여부와 해석(학계 논쟁)','「광해군일기」 편찬 시기와 중초본·정초본','대동법 경기도 시행(1608), 「동의보감」 간행(1613)','궁궐 공사의 범위(창덕궁 재건, 경덕궁·인경궁)','이이첨 등 대북 세력의 폐모론','목수의 버릇, 끼워 넣은 종이, 소년병은 게임 속 상상','‘청’이라는 나라 이름이 쓰인 때(1636) — 끼워 넣은 종이의 시대 안 맞는 말'],
  roles:{def:runDef6}});
