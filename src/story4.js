/* ===== 사건 4 「포석정의 그림자」: 숨은 피고 (검사 하람) =====
   1일차 법정은 ‘누가 피고인가’. 용의 증인 셋(김 아찬·능문·견 노인) 가운데 말해서는 안 될 것을 아는 사람을 찾는다.
   혐의 ① 경주를 짓밟고 경애왕을 죽음으로 몬 죄 → 유죄(잠금) / ② 자기가 세운 나라를 무너뜨리는 데 앞장선 죄 → 유죄(아들의 배신은 참작)
   견훤·신검·경순왕은 실존 인물, 대사는 상상. 김 아찬·능문·궁녀·노인·승려·병사는 상상 인물. */
addCast('gyeonhwon',{name:'견 노인',label:'증인 견 노인',col:'#3a2a1a',spec:{skin:'#d9a77c',robe:'#5a4634',robe2:'#3e3024',collar:'cross',hat:'short',hair:'#2a2220',beard:'long',beardColor:'#2a2220',iris:'#3a2a20'}});
addCast('achan',{name:'김 아찬',label:'증인 김 아찬',col:'#4a6a8a',spec:{skin:'#f0caa4',robe:'#6a9ac0',robe2:'#4a7aa0',collar:'round',hat:'gat',hair:'#1c1a20',beard:'thin',iris:'#3a2a20'}});
addCast('neungmun',{name:'능문',label:'증인 능문',col:'#3a3a40',spec:{skin:'#e2b48a',robe:'#3a3020',robe2:'#2a2218',collar:'cross',hat:'short',hair:'#1c1a20',beard:'thin',iris:'#2e2018'}});
addCast('courtlady',{name:'늙은 궁녀',label:'늙은 궁녀',col:'#8a4a5a',spec:{skin:'#ecc8a4',robe:'#d8a8a0',robe2:'#7a2a30',collar:'cross',hat:'bun',hair:'#d8d8d8',beard:'none',iris:'#3a2a20'}});
addCast('villager',{name:'가은 마을 노인',label:'마을 노인',col:'#6a5a40',spec:{skin:'#d9a77c',robe:'#a89a80',robe2:'#7a6a50',collar:'cross',hat:'short',hair:'#e8e4dc',beard:'long',beardColor:'#ece8e0',iris:'#3a2a20'}});
addCast('singeom',{name:'신검',label:'증인 신검',col:'#1e2b4d',spec:{skin:'#eec8a2',robe:'#1e2b4d',robe2:'#5a1c1c',collar:'cross',hat:'short',hair:'#1c1a20',beard:'thin',iris:'#3a2a20'}});
addCast('oldsoldier',{name:'후백제 늙은 병사',label:'늙은 병사',col:'#2a2e40',spec:{skin:'#d9a77c',robe:'#2a2e40',robe2:'#1a1e2c',collar:'cross',hat:'short',hair:'#8a8a8a',beard:'thin',iris:'#3a2a20'}});
addCast('gyeongsun',{name:'경순왕',label:'증인 경순왕',col:'#6a3d8f',spec:{skin:'#efc9a2',robe:'#7a2430',robe2:'#5a1822',collar:'round',hat:'ikseon',hair:'#1c1a20',beard:'thin',emblem:true,iris:'#3a2a20'}});
addCast('monk',{name:'금산사 승려',label:'승려',col:'#7a6a40',spec:{skin:'#ecc8a4',robe:'#8a7a50',robe2:'#5a4a30',collar:'cross',hat:'short',hair:'#ecc8a4',beard:'none',iris:'#3a2a20'}});

const EVIDENCE4=[
  {id:'H1',type:'사료',icon:'scroll',title:'927년 그날',body:'927년 겨울, 후백제 군대가 경주에 쳐들어왔다. 경애왕은 목숨을 잃었고, 군대를 이끈 사람이 왕족 김부를 새 왕(경순왕)으로 세웠다.',src:'「삼국사기」 신라본기 경애왕·경순왕',trust:3,note:'새 왕을 고른 사람은 누구였을까요?'},
  {id:'H2',type:'물건',icon:'map',title:'떨어진 투구 깃털',body:'포석정 물길 굽이에 걸려 있던 붉은 꿩 깃털 하나. 높은 장수가 투구에 꽂는 깃털이다.',src:'포석정 (게임 속 단서)',trust:3,note:'이 깃털을 단 사람은 누구일까요?'},
  {id:'H3',type:'유적',icon:'censer',title:'불탄 전각',body:'경주 궁궐의 전각이 불에 탄 흔적. 그날 궁궐이 짓밟혔음을 보여 준다.',src:'경주 궁궐 마당 · 사료 바탕',trust:3,note:'궁궐은 무사했을까요?'},
  {id:'H4',type:'사료',icon:'scroll',title:'고려에 보낸 구원 요청',body:'후백제 군대가 다가오자 경애왕은 고려의 왕건에게 사람을 보내 도움을 청했다. 왕건은 군사를 보냈지만 늦었다.',src:'「삼국사기」·「고려사」를 바탕으로 정리',trust:3,note:'왕은 위험을 알고 있었을까요?'},
  {id:'H5',type:'사료',icon:'scroll',title:'의자왕의 원한',body:'900년 견훤은 완산주에 도읍을 정하며 말했다. “백제가 나라를 연 지 600여 년… 내가 어찌 의자왕의 오래 쌓인 원한을 씻지 않겠는가.”',src:'「삼국사기」 견훤 열전',trust:3,note:'후백제를 세운 이유로 내건 말이에요.'},
  {id:'H6',type:'사료',icon:'map',title:'견훤의 출신',body:'견훤은 상주 가은현에서 태어났다. 자라서 신라의 군인이 되어 서남해 바닷가를 지켰다.',src:'「삼국사기」 견훤 열전',trust:3,note:'백제를 잇겠다던 사람은 어디서 자랐을까요?'},
  {id:'H7',type:'사료',icon:'scroll',title:'포석정은 놀이터였나',body:'「삼국사기」는 그날 경애왕이 포석정에서 잔치를 열었다고 적었다. 그런데 포석정을 제사를 지내던 곳으로 보는 해석도 있다. 한겨울에 물길에서 잔치를 했을지 의문을 품는 학자도 있다.',src:'「삼국사기」와 학계의 해석을 바탕으로 정리',trust:2,note:'기록과 해석이 엇갈리는 증거예요.'},
  {id:'H8',type:'사료',icon:'scroll',title:'금산사의 석 달',body:'935년 견훤이 넷째 아들 금강에게 왕위를 물려주려 하자, 맏아들 신검이 아버지를 금산사에 가두었다. 견훤은 석 달 뒤 몰래 빠져나왔다.',src:'「삼국사기」 견훤 열전',trust:3,note:'아버지와 아들 사이에 무슨 일이 있었나요?'},
  {id:'H9',type:'사료',icon:'army',title:'일리천의 깃발',body:'936년 일리천 싸움에서 견훤은 고려 군대의 앞줄에 서서 아들 신검의 후백제군과 싸웠다. 후백제는 이 싸움으로 무너졌다.',src:'「고려사」·「삼국사기」를 바탕으로 정리',trust:3,note:'자기가 세운 나라를 친 사람은 누구였나요?'},
  {id:'H10',type:'증언',icon:'scroll',title:'신검의 죄',body:'“나는 아버지를 가둔 뒤, 동생 금강을 죽였소.”',src:'3일차 법정, 신검의 숨은 말 (기록 바탕, 대사는 상상)',trust:3,note:'피고가 배신당한 일, 참작할 사정이에요.'},
  {id:'H11',type:'증언',icon:'scroll',title:'경순왕의 선택',body:'“나는 싸우는 대신 나라를 고려에 넘겼소. 백성이 더 피 흘리지 않게.” (935년 신라는 고려에 나라를 넘겼다.)',src:'4일차 법정 · 「삼국사기」 바탕 (대사는 상상)',trust:3,note:'같은 시대, 다른 선택이에요.'},
  {id:'H13',reuse:true,type:'증언',icon:'scroll',title:'능문의 증언',body:'“왕을 포석정에서 궁으로 데려오라는 명은 위에서 내려왔소. 나는 그 어른의 깃털만 보고 따랐소.”',src:'1일차 법정, 능문의 숨은 말 (상상)',trust:2,note:'명을 내린 사람이 따로 있어요.'},
  {id:'H12',type:'문서',icon:'scroll',fake:true,title:'목격담 종이',body:'“견훤이 직접 칼을 들어 왕을 해쳤다. 내가 똑똑히 보았다.” 이름이 적혀 있지 않다.',src:'경주 궁궐 마당에 떨어져 있던 종이',trust:1,note:'누가 쓴 종이일까요?',
   zoom:{say:['종이를 크게 확대해 보았다.','오른쪽 아래 귀퉁이에 작은 [[매화 모양 먹 얼룩]]. 어디서 본 것 같다.','‘똑똑히 보았다’는 사람의 이름은 어디에도 없다.'],plum:true,note:'귀퉁이에 매화 모양 먹 얼룩. 쓴 사람의 이름이 없다.'}},
  {id:'HD1',type:'유물',icon:'censer',title:'포석정의 술잔',body:'포석정 돌 물길 옆에서 나온 작은 술잔.',src:'포석정',trust:2,note:'이 술잔이 쟁점과 이어질까요?'},
  {id:'HD2',type:'유물',icon:'censer',title:'고려의 동전',body:'고려 때 만든 쇠 동전 한 닢. 996년에 처음 만든 ‘건원중보’다.',src:'궁궐 뒷문 근처',trust:3,note:'927년의 일과 시대가 맞을까요?'}
];
const LOCS4=[
  {id:'poseok',name:'포석정',time:'겨울 오후',intro:'굽이진 돌 물길이 남은 포석정이다. 927년 겨울, 이곳에서 무슨 일이 있었을까.',
   miss:['얼어붙은 흙이다.','마른 낙엽이다.','돌 틈에 이끼가 끼었다.','아무것도 없다.','찬 바람이 분다.'],
   spots:[
    {x:57,y:55,w:14,h:19,label:'물길 굽이',ev:'H2',say:['돌 물길이 안쪽으로 굽어지는 곳, 돌 틈에 낙엽이 끼어 있다. 낙엽을 걷어 보니…','[[붉은 꿩 깃털]] 하나다. 높은 장수가 투구에 꽂는 깃털인데…']},
    {x:5,y:55,w:23,h:25,label:'돌거북',ev:'H1',say:['비석은 사라지고 돌거북만 남았다. 받침돌 옆면에 글이 새겨져 있다.','927년 겨울, 후백제 군대가 경주에 들어왔다. 경애왕은 목숨을 잃었고, 군대를 이끈 사람이 [[김부를 새 왕]]으로 세웠다.']},
    {x:48,y:80,w:14,h:10,label:'물길 가장자리의 눈',ev:'HD1',say:['물길 바깥 돌 가장자리, 쌓인 눈 속에 작은 술잔이 묻혀 있다.','잔치에 쓰던 잔일까? 쟁점과 이어지는지는 모르겠다.']},
    {x:31,y:50,w:25,h:28,label:'굽이진 돌 물길',say:['전복 모양으로 굽이진 돌 물길이다. 고인 물이 얼어 가고 있다.']},
    {x:72,y:41,w:12,h:14,label:'무너진 돌담',say:['돌담 한쪽이 무너져 있다. 단서는 아니다.']},
    {x:0,y:0,w:30,h:42,label:'앙상한 나무',say:['잎이 다 떨어진 나무다.']},
    {x:52,y:0,w:22,h:22,label:'흐린 겨울 하늘',say:['눈이 올 것 같다.']}],
   npcs:[{who:'courtlady',expr:'base',place:{x:90,h:60,b:2},from:2,topics:[
     {id:'cl-day2',t:'다시 찾아온 까닭',lines:[['courtlady','base','또 오셨구려. 이곳에 오면 그날이 떠오르오.']]},
     {id:'cl-rite',t:'왕의 제사',lock:'H1',must:true,lockSay:'(궁녀는 물길만 바라본다. 그날의 기록을 보여 주며 물어보면 무언가 말해 줄지도 모른다.)',
      lines:[['courtlady','base','잔치라고들 하지요. 기록에도 그렇게 적혔고.'],['courtlady','base','그런데 한겨울이었소. 이 돌 물길에 술잔을 띄우며 놀았을까요? 이곳에서 [[제사]]를 지냈다는 이야기도 전해 오오.'],['ME','think','(잔치였다는 기록, 제사였다는 해석… 기록이 엇갈리는구나.)']],gives:['H7']}],
    present:{H1:{lines:[['courtlady','base','그날의 기록이구려… 좋소, 내가 아는 것을 말하리다.']],unlock:'cl-rite'}},
    def:[['courtlady','base','늙은이가 알아볼 물건이 아니오.']]}]},
  {id:'gyeongju',name:'경주 궁궐',time:'겨울 오후',rooms:[
    {id:'gj-yard',name:'마당',intro:'신라 궁궐의 넓은 마당이다. 그날의 흔적이 아직 남아 있다.',
     miss:['얼어붙은 마당이다.','깨진 기와 조각이다.','아무것도 없다.','발자국뿐이다.'],
     spots:[
      {x:2,y:78,w:34,h:16,label:'쓰러진 깃발',ev:'H12',say:['쓰러진 깃발 천 아래에 접힌 종이 한 장이 끼어 있다.','“견훤이 직접 칼을 들어 왕을 해쳤다. 내가 [[똑똑히 보았다]].” …쓴 사람의 이름은 없다.']},
      {x:66,y:62,w:19,h:28,label:'찢어진 일산',ev:'H4',say:['왕의 머리 위를 가리던 붉은 일산이 찢어진 채 쓰러져 있다. 그 밑에 붉은 통 하나가 깔려 있다.','통 안에 서찰의 사본이 들어 있다. 경애왕이 [[고려의 왕건에게 도움을 청한]] 글이다. 적이 오는 것을 알고 있었던 것이다.']},
      {x:8,y:16,w:14,h:58,label:'석등',say:['돌로 만든 등이다. 불은 꺼져 있다.']},
      {x:85,y:15,w:12,h:52,label:'깃대의 깃발',say:['깃대에 매달린 깃발이 갈가리 찢겼다. 단서는 아니다.']},
      {x:21,y:44,w:15,h:10,label:'무너진 흙더미',say:['무너진 흙과 부러진 나무가 쌓여 있다.']},
      {x:32,y:10,w:46,h:16,label:'궁궐 지붕',say:['처마 끝이 그을려 있다.']}],
     npcs:[{who:'courtlady',expr:'base',place:{x:50,h:60,b:2},until:1,topics:[
       {id:'cl-who',t:'그날 무엇을 보셨나요?',lines:[['courtlady','base','칼 든 군사들이 몰려왔소. 왕께서는 포석정에 계셨지.'],['courtlady','base','…그 뒤의 일은 말하고 싶지 않소.']]},
       {id:'cl-guest',t:'그날의 손님',lock:'H2',must:true,lockSay:'(궁녀는 입을 다물었다. 포석정에서 찾은 무언가를 보여 주면 기억을 떠올릴지도 모른다.)',
        lines:[['courtlady','base','그 붉은 깃털… 기억하오. 그 깃털을 투구에 꽂은 사람은 [[나이 든 장수]]였소.'],['courtlady','base','다른 장수들이 모두 그 앞에서 고개를 숙였지. 그 사람이 손을 들자…'],['ME','think','(나이 든 장수. 그날 군대를 이끈 사람이야.)']]}],
      present:{H2:{lines:[['courtlady','shock','이, 이 깃털은…!']],unlock:'cl-guest'},H4:{lines:[['courtlady','base','왕께서 고려에 사람을 보내셨지. 하지만 너무 늦었소.']]}},
      def:[['courtlady','base','늙은이가 알아볼 물건이 아니오.']]}]},
    {id:'gj-hall',name:'불탄 전각',intro:'불에 탄 전각이다. 기둥이 검게 그을려 있다.',
     miss:['재가 쌓여 있다.','숯이 된 나무다.','아무것도 없다.'],
     spots:[
      {x:13,y:73,w:23,h:22,label:'떨어진 기와',ev:'H3',say:['지붕에서 떨어진 연꽃무늬 기와다. 새까맣게 그을렸다.','그날 궁궐이 [[불에 탔다]]는 흔적이다. 아무것도 건드리지 않았다는 말은 거짓일 것이다.']},
      {x:0,y:12,w:26,h:60,label:'타다 남은 병풍',say:['병풍 그림은 알아볼 수 없을 만큼 탔다.']},
      {x:56,y:64,w:20,h:16,label:'불탄 대들보',say:['무너져 내린 대들보가 숯처럼 탔다.']},
      {x:80,y:12,w:14,h:50,label:'붉은 휘장',say:['붉은 휘장이 반쯤 타다 남았다.']},
      {x:30,y:0,w:50,h:14,label:'무너진 지붕',say:['지붕이 내려앉아 하늘이 보인다.']}]},
    {id:'gj-back',name:'뒷문',intro:'궁궐 뒷문이다. 그날 누군가 이 문으로 빠져나갔다고 한다.',
     miss:['담장 그늘이다.','풀포기다.','아무것도 없다.'],
     spots:[
      {x:52,y:62,w:14,h:10,label:'담 밑 돌 틈',ev:'HD2',say:['담 밑 돌 틈에 동전 한 닢이 박혀 있다.','고려 때 만든 [[건원중보]]다. 996년에 처음 만든 돈인데… 927년의 일과 시대가 맞을까?']},
      {x:23,y:15,w:24,h:55,label:'열린 뒷문',say:['뒷문의 빗장이 풀려 있다. 서둘러 나간 것처럼 보인다.']},
      {x:25,y:80,w:11,h:10,label:'벗겨진 신발',say:['신발 한 짝이 눈 위에 떨어져 있다. 급히 달아나다 벗겨진 것 같다.']},
      {x:36,y:73,w:16,h:14,label:'발자국',say:['눈 위의 발자국이 뒷문 밖으로 이어진다.']},
      {x:70,y:30,w:28,h:28,label:'눈 덮인 담장',say:['눈이 내려앉은 돌담이다. 단서는 아니다.']}]}]},
  {id:'wansan',name:'완산주 후백제 궁궐',time:'아침',from:2,intro:'견훤이 후백제의 도읍으로 삼은 완산주(지금의 전주)의 궁궐이다.',
   miss:['돌바닥이다.','기둥이다.','아무것도 없다.','먼지가 쌓였다.'],
   spots:[
    {x:70,y:66,w:26,h:16,label:'탁자 위 두루마리',ev:'H5',say:['탁자 위에 두루마리가 펼쳐져 있다. 나라를 세울 때 한 말이 적혀 있다.','“내가 어찌 [[의자왕의 오래 쌓인 원한]]을 씻지 않겠는가.” 백제를 잇겠다는 말이다.']},
    {x:44,y:34,w:12,h:14,label:'빈 왕좌',say:['주인이 없는 왕좌다.']},
    {x:35,y:13,w:30,h:20,label:'해와 산 병풍',say:['둥근 해와 산을 그린 병풍이다.']},
    {x:85,y:0,w:9,h:58,label:'푸른 깃발',say:['후백제의 깃발이 길게 늘어져 있다.']},
    {x:20,y:38,w:8,h:14,label:'타오르는 화로',say:['화로의 불이 활활 타오른다.']}]},
  {id:'gaeun',name:'상주 가은 마을',time:'낮',from:2,intro:'경상도 상주의 가은 마을이다. 산으로 둘러싸인 조용한 시골이다.',
   miss:['논두렁이다.','돌담이다.','아무것도 없다.','닭이 지나간다.'],
   spots:[
    {x:81,y:22,w:14,h:40,label:'마을 어귀의 큰 나무',ev:'H6',say:['마을 어귀의 큰 나무다. 줄기 뒤편에 낡은 나무패가 묶여 있다.','“견훤이 이 마을에서 났다. 자라서 [[신라의 군인]]이 되어 서남해 바닷가를 지켰다.”']},
    {x:2,y:32,w:22,h:26,label:'초가집',say:['낡은 초가집이다.']},
    {x:52,y:54,w:14,h:12,label:'논',say:['추수가 끝난 논이다.']},
    {x:77,y:65,w:16,h:9,label:'나무 의자',say:['누군가 쉬어 가는 나무 의자다.']},
    {x:58,y:80,w:22,h:14,label:'징검다리',say:['냇물을 건너는 징검다리다.']}],
   npcs:[{who:'villager',expr:'base',place:{x:44,h:58,b:2},topics:[
     {id:'v-hi',t:'이 마을은요?',lines:[['villager','base','허허, 산 좋고 물 좋은 가은이라오.']]},
     {id:'v-child',t:'어린 시절',lock:'H5',must:true,lockSay:'(노인은 허허 웃기만 한다. 견훤이 나라를 세우며 한 말을 보여 주면 무언가 말해 줄지도 모른다.)',
      lines:[['villager','base','의자왕의 원한? 백제를 잇는다고?'],['villager','base','허허… 그 아이는 이 마을에서 자란 [[신라 아이]]요. 커서는 신라 군인이 되었지.'],['ME','shock','(백제의 복수자가… 신라에서 자란 신라 군인이었다고?)']]}],
    present:{H5:{lines:[['villager','base','허허, 거창한 말이로구먼.']],unlock:'v-child'},H6:{lines:[['villager','base','그 비석 말이오? 마을 사람이면 다 아오.']]}},
    def:[['villager','base','허허, 그게 뭐요?']]}]},
  {id:'geumsan',name:'금산사',time:'아침',from:3,rooms:[
    {id:'gs-hall',name:'법당',intro:'김제 금산사의 법당이다. 935년, 견훤이 이 절에 갇혔다.',
     miss:['마룻바닥이다.','향 냄새가 난다.','아무것도 없다.'],
     spots:[{x:30,y:30,w:38,h:30,label:'법당',say:['법당 문이 굳게 닫혀 있다. 안에서 염불 소리가 들린다.']},{x:3,y:12,w:15,h:66,label:'석탑',say:['오래된 돌탑이다. 단서는 아니다.']},{x:83,y:50,w:10,h:20,label:'범종',say:['커다란 종이다. 새벽마다 울린다고 한다.']}],
     npcs:[{who:'monk',expr:'base',place:{x:76,h:62,b:2},topics:[
       {id:'m-hi',t:'이 절에서는',lines:[['monk','base','쉿. 법당에서는 조용히 하시오.']]},
       {id:'m-door',t:'뒷문을 연 사람',lock:'H8',must:true,lockSay:'(승려는 손가락을 입에 댄다. 이 절에서 있었던 일을 보여 주면 말해 줄지도 모른다.)',
        lines:[['monk','base','석 달을 갇혀 계셨지요. 어느 밤 뒷문이 열려 있었소.'],['monk','base','탈출하신 뒤 [[곧장 고려의 왕건에게]] 가셨다고 들었소.'],['ME','think','(아들에게 갇힌 아버지가, 적이었던 고려로 갔다…)']]}],
      present:{H8:{lines:[['monk','base','…그 석 달 이야기를 아시는군요.']],unlock:'m-door'}},
      def:[['monk','base','쉿.']]}]},
    {id:'gs-room',name:'갇혔던 방',intro:'견훤이 석 달 동안 갇혀 있던 작은 방이다.',
     miss:['좁은 방바닥이다.','창살 그림자다.','아무것도 없다.'],
     spots:[{x:15,y:35,w:15,h:23,label:'벽에 새긴 줄',ev:'H8',say:['벽에 손톱으로 그은 줄이 빼곡하다. 날을 센 자국이다.','줄 옆에 글이 있다. 넷째 [[금강에게 왕위를 주려 하자]], 맏아들 신검이 아버지를 이곳에 가두었다.']},
      {x:20,y:3,w:18,h:28,label:'창살 창',say:['창살 너머로 달이 보인다. 사람이 빠져나갈 수는 없다.']},{x:8,y:74,w:26,h:20,label:'낡은 이불',say:['얇은 이불 한 채.']},
      {x:50,y:56,w:20,h:18,label:'등잔과 그릇',say:['작은 등잔과 빈 밥그릇이다.']},{x:76,y:6,w:20,h:76,label:'자물쇠 달린 문',say:['밖에서 커다란 자물쇠로 잠그는 문이다. 안에서는 열 수 없다.']}]},
    {id:'gs-back',name:'뒷문',intro:'절의 뒷문이다. 산길로 이어진다.',
     miss:['산길이다.','낙엽이다.','아무것도 없다.'],
     spots:[{x:31,y:26,w:16,h:50,label:'빗장이 풀린 뒷문',say:['빗장이 풀린 채 삐걱거린다.']},{x:48,y:42,w:16,h:30,label:'산길',say:['소나무 숲 사이로 산 아래 길이 이어진다.']},
      {x:11,y:58,w:10,h:26,label:'불 켜진 석등',say:['석등에 불이 켜져 있다. 누군가 길을 밝혀 둔 걸까?']},{x:30,y:82,w:20,h:14,label:'발자국',say:['발자국이 문 밖 산길로 이어진다.']},{x:12,y:7,w:7,h:10,label:'보름달',say:['밝은 보름달이다.']}]}]},
  {id:'iricheon',name:'일리천 들판',time:'새벽',from:3,intro:'936년 고려와 후백제가 마지막으로 싸운 일리천(지금의 구미 부근) 들판이다.',
   miss:['진흙이다.','마른 풀이다.','아무것도 없다.','부러진 나뭇가지다.'],
   spots:[{x:4,y:68,w:46,h:28,label:'쓰러진 깃발',ev:'H9',say:['풀숲에 쓰러진 찢어진 깃발이다. 고려 군대의 깃발이다. 천을 들추니 깃대에 붉은 꿩 깃털이 묶여 있다.','그날 고려군 [[맨 앞줄]]에 선 사람은… 후백제를 세운 견훤이었다.']},
    {x:30,y:40,w:40,h:20,label:'일리천',say:['차가운 냇물이 흐른다.']},{x:0,y:28,w:40,h:12,label:'왼쪽 들판의 깃발들',say:['들판 끝에 깃발이 줄지어 서 있다.']},
    {x:70,y:33,w:30,h:8,label:'오른쪽 들판의 깃발들',say:['건너편에도 붉은 깃발이 줄지어 서 있다.']},{x:68,y:78,w:9,h:10,label:'바위',say:['풀숲 속 바위다.']},{x:30,y:0,w:40,h:22,label:'새벽 하늘',say:['해가 떠오른다.']}]}
];
const TERMS4=[
  {w:'후삼국',d:'신라 말에 후백제·후고구려(고려)·신라 세 나라가 다시 나뉘어 다툰 때예요.',ic:'🗺️'},
  {w:'후백제',d:'900년 견훤이 완산주(전주)에 세운 나라예요. 백제를 잇겠다고 했어요.',ic:'🏯'},
  {w:'사신',d:'나라의 명을 받고 다른 나라에 심부름 가는 사람이에요.',ic:'📨'},
  {w:'아찬',d:'신라의 벼슬 이름이에요.',ic:'🎖️'},
  {w:'참작',d:'벌을 정할 때 피고에게 있었던 딱한 사정을 헤아리는 것이에요. 죄가 없어지는 것은 아니에요.',ic:'⚖️'},
  {w:'숨은 피고',d:'처음에는 증인처럼 나왔지만, 증언 속 실수로 진짜 피고임이 드러난 사람이에요.',ic:'🕵️'}
];
const C4SUS=()=>[{t:'김 아찬',st:'sus'},{t:'능문',st:'sus'},{t:'견 노인',st:'sus'}];
const C4CH=()=>[{t:'① 경주를 짓밟고 경애왕을 죽음으로 몬 죄'},{t:'② 자기가 세운 나라를 무너뜨리는 데 앞장선 죄'}];
const unmask4=on=>{ NAMES.gyeonhwon=on?'피고 견훤':'증인 견 노인'; CAST.gyeonhwon.name=on?'견훤':'견 노인'; };

const T4achan=()=>({key:'김 아찬',who:'achan',allReveal:true,lines:[
  {text:'나는 신라의 아찬이오. 그날 궁궐에 있었지.',expr:'base',press:[['player','normal','그날 무엇을 보셨죠?'],['achan','base','적이 들이닥치는 것을 보았소.']]},
  {text:'적이 그렇게 가까이 온 줄은 아무도 몰랐소. 하늘에서 뚝 떨어진 것 같았지.',expr:'base',lie:true,ev:'H4',press:[['player','normal','아무도 몰랐다고요?'],['achan','base','그렇소. 아무도!']],
   hit:[['player','present','경애왕이 고려에 보낸 구원 요청입니다. 왕은 이미 [[적이 오는 것을 알고]] 도움을 청했어요!'],['achan','sweat','그, 그건 왕께서만 아셨던 일이오…!']]},
  {text:'나는 끝까지 왕을 지키려 했소.',expr:'base',reveal:3,press:[['player','normal','끝까지요? 그날 어디에 계셨죠?'],['achan','sweat','그, 그건…'],['judge','stern','증인, 있었던 곳을 그대로 증언하시오.']]},
  {text:'…나는 무서워서 뒷문으로 빠져나갔소.',expr:'sweat',hidden:true}
]});
const T4neung=()=>({key:'능문',who:'neungmun',allReveal:true,lines:[
  {text:'나는 후백제의 장수 능문이오. 그날 경주에 들어갔소.',expr:'base',press:[['player','normal','무엇을 하러요?'],['neungmun','base','명을 받았으니 갔소.']]},
  {text:'우리는 궁궐을 하나도 건드리지 않았소.',expr:'base',lie:true,ev:'H3',press:[['player','normal','하나도요?'],['neungmun','base','군사들은 얌전했소.']],
   hit:[['player','present','불탄 전각입니다. 그날 궁궐은 [[불에 탔어요]]!'],['neungmun','sweat','크윽…!']]},
  {text:'나는 명을 따랐을 뿐이오.',expr:'base',reveal:3,press:[['player','normal','누구의 명이죠?'],['neungmun','sweat','그건… 말할 수 없소.'],['judge','stern','증인, 명을 내린 사람을 증언하시오.']]},
  {text:'…왕을 포석정에서 궁으로 데려오라는 명은 위에서 내려왔소. 나는 그 어른의 [[깃털]]만 보고 따랐소.',expr:'sweat',hidden:true,gives:['H13']}
]});
const T4old=()=>({key:'견 노인',who:'gyeonhwon',allReveal:true,lines:[
  {text:'나는 후백제 대왕께서 보낸 늙은 사신이오. 경주에는 심부름으로 왔을 뿐이지.',expr:'disguise',press:[['player','normal','어떤 심부름이었죠?'],['gyeonhwon','disguise','허허, 늙은이의 심부름이 다 그렇지.']]},
  {text:'나는 모든 일이 끝난 뒤에 경주에 왔소. 그날 일은 들은 것밖에 모르오.',expr:'disguise',reveal:2,press:[['player','think','들은 것밖에요? 그럼 새 왕이 어떻게 정해졌는지도 들으셨겠네요.'],['gyeonhwon','disguise','허허, 그거야…']]},
  {text:'새 왕으로 김부를 세운 것은 신라를 위한 일이었소. 그 사람이 [[가장 온순했으니까]].',expr:'disguise',hidden:true,lie:true,ev:'H1',
   hit:[['player','present','927년 그날의 기록입니다. 새 왕을 고른 것은 [[그날 군대를 이끌고 들어온 사람]]이에요.'],['player','confident','늦게 온 사신이 ‘누가 가장 온순한지’ 보고 골랐다고요? 그건 고른 사람만 할 수 있는 말입니다!'],['gyeonhwon','disguise','…허허. 말이 헛나왔구먼.'],['judge','normal','그리고 검사, 증인의 [[모자]]도 살펴보시오.']]},
  {text:'포석정? 나는 그 근처에 가 본 적도 없소.',expr:'disguise',lie:true,ev:'H2',press:[['player','normal','한 번도요?'],['gyeonhwon','disguise','없다니까.']],
   hit:[['player','present','포석정 물길에 걸려 있던 [[붉은 꿩 깃털]]입니다.'],['player','confident','증인의 모자를 보세요. 이 깃털과 똑같은 붉은 꿩 깃털이 꽂혀 있어요. 그날 포석정에 선 장수의 투구에는 깃털이 [[두 개]]였는데, 증인의 것은 [[하나뿐]]이에요!'],['gyeonhwon','disguise','……'],['judge','normal','그리고 검사, 증인은 ‘들은 것밖에 모른다’면서 [[너무 많이]] 알고 있지 않소?']]},
  {text:'다른 증인들을 보시오. 하나는 겁쟁이, 하나는 졸개요. 나무랄 사람은 그들이지.',expr:'disguise',press:[['player','think','(다른 증인을 꾸짖는다… 왜 저렇게 자신만만하지?)'],['gyeonhwon','disguise','허허.']]}
]});
const T4king=()=>({key:'견훤',who:'gyeonhwon',lines:[
  {text:'나는 백제를 잇는 후백제의 왕, 견훤이다.',expr:'base',press:[['player','normal','백제를 잇는다고요?'],['gyeonhwon','base','그렇다. 의자왕의 원한을 씻으려고.']]},
  {text:'나는 백제 땅에서 태어난 백제 사람이오. 그래서 백제의 원한을 갚으려 한 것이지.',expr:'base',lie:true,ev:'H6',press:[['player','normal','백제 땅에서요?'],['gyeonhwon','angry','그렇다!']],
   hit:[['player','present','견훤의 출신 기록입니다. 피고는 [[상주 가은]]에서 태어나…'],['player','confident','자라서 [[신라의 서남해를 지키던 군인]]이었습니다!'],['gyeonhwon','angry','크윽…!']]},
  {text:'백성들은 백제를 잇는 나를 반겼소.',expr:'base',press:[['player','think','(반긴 사람도 있었겠지. 하지만…)'],['gyeonhwon','base','그것이 사실이다.']]},
  {text:'경애왕은 나라가 무너지는데 잔치나 벌이고 있었소. 죽어도 싸오.',expr:'angry',lie:true,ev:'H7',press:[['player','normal','잔치요?'],['gyeonhwon','angry','기록에도 있지 않느냐!']],
   hit:[['player','present','포석정의 기록과 해석입니다. 잔치로 적은 기록도 있지만, [[제사를 지내던 곳]]이었다는 해석도 있어요.'],['player','confident','기록이 엇갈리는 일을 들어 ‘죽어도 싸다’고 할 수는 없습니다!'],['gyeonhwon','angry','흥…!']]}
]});
const T4sin=()=>({key:'신검',who:'singeom',allReveal:true,lines:[
  {text:'나는 견훤의 맏아들, 신검이오.',expr:'base',press:[['player','normal','아버지와 사이가 어땠나요?'],['singeom','base','아버지가 먼저 우리를 버렸소.']]},
  {text:'아버지는 넷째에게 나라를 주려고, 우리 형제들을 죽이려 했소!',expr:'base',lie:true,ev:'H8',press:[['player','normal','죽이려 했다고요?'],['singeom','base','그, 그렇소!']],
   hit:[['player','present','금산사의 기록입니다. 피고는 넷째 [[금강에게 왕위를 물려주려 했을]] 뿐이에요.'],['player','confident','형제들을 죽이려 했다는 기록은 어디에도 없습니다!'],['singeom','sweat','으…!']]},
  {text:'그래서 우리는 나라를 지키려고 아버지를 절에 모셨을 뿐이오.',expr:'base',reveal:3,press:[['player','normal','모셨다고요? 가둔 것 아닌가요? 그리고 동생 금강은요?'],['singeom','sweat','그, 그건…'],['judge','stern','증인, 숨기지 마시오.']]},
  {text:'…나는 아버지를 가둔 뒤, 동생 금강을 죽였소.',expr:'sweat',hidden:true,gives:['H10']},
  {text:'아버지가 고려로 간 것은 배신이오!',expr:'base',press:[['player','think','(그건 피고의 혐의 ②와 이어지는 말이야.)'],['judge','normal','그 일은 피고의 혐의 ②로 따지겠소.']]}
]});

async function prologue4(){
  bgm('crisis');
  await say('guide','normal','927년 겨울, 신라의 수도 경주. 포석정.',{view:'poseok'});
  await playShadow('poseok');
  await wait(300);
  await say('guide','normal','…붉은 꿩 깃털 하나가, 물길 위에 떨어졌다.',{view:'prologue4'});
  await infoCard('후삼국 지도','<p><b>백제가 무너지고 240년 뒤.</b> 신라가 약해지자 나라가 다시 셋으로 나뉘었어요.</p><p>🟥 <b>후백제</b> (견훤, 900년, 완산주=전주) · 🟦 <b>고려</b> (왕건, 918년, 송악=개성) · 🟨 <b>신라</b> (경주)</p><p>이 시대를 <b>후삼국</b>이라고 해요.</p>');
  await say('voice','normal','역사가 묻는다. 좋은 명분을 내건 사람이 한 일은, [[모두 옳은가]].',{view:'prologue4'});
  await titleCard('사건 4','포석정의 그림자');
}
async function runPros4(from){
  unmask4(!!S.flags.unmasked);
  if(from<=0){ await prologue4(); bgm('investigate');
    await say('judge','normal','하람 검사, 이번 사건은 조금 다르오. 927년 경주에서 왕이 목숨을 잃은 일이오.',{view:'lobby'});
    await say('judge','stern','그런데 [[피고가 없소]]. 내일 법정에 세 증인을 부를 테니, 그 가운데 누구를 피고로 세울지 검사가 정하시오.',{view:'lobby'});
    await say('rival','smug','범인 찾기라니, 재밌겠는걸. 나는 피고가 정해지면 변호를 맡을게.',{view:'lobby'});
    await say('player','confident','증거를 모아서, 말해서는 안 될 것을 아는 사람을 찾을게.',{view:'lobby'}); }
  await playDays([
    {inv:async()=>{ await invDay(1,'[[포석정]]과 [[경주 궁궐]]을 조사하자. 궁궐은 마당·불탄 전각·뒷문, [[A·D]]로 구역을 옮길 수 있어.'); },court:d1_4,
     learned:['927년 경주에서 경애왕이 목숨을 잃고, 군대를 이끈 사람이 새 왕을 세웠다.','‘들은 것밖에 모른다’면서 너무 많이 아는 사람이 숨은 피고였다.','명을 받은 사람과 명을 내린 사람은 다르다.']},
    {inv:async()=>{ await invDay(2,'오늘은 [[완산주]]와 피고가 자란 [[상주 가은 마을]]이 열렸어. 포석정에 궁녀가 다시 와 있대.'); },court:d2_4,
     learned:['백제의 복수자를 내건 견훤은 원래 신라의 군인이었다.','포석정의 그날은 잔치였다는 기록과 제사였다는 해석이 엇갈린다.','기록이 엇갈려도, 왕을 죽음으로 몰 권리는 없다.']},
    {inv:async()=>{ await invDay(3,'[[금산사]]와 [[일리천 들판]]이 열렸어.'); },court:d3_4,
     learned:['935년 맏아들 신검이 아버지 견훤을 금산사에 가두었다.','936년 견훤은 고려군 앞줄에서 자기가 세운 후백제를 쳤다.','배신당한 아픔은 참작하지만, 그 길을 고른 것은 피고다.']},
    {court:d4_4}
  ],from);
}
async function d1_4(){
  await courtOpen(1);
  await say('guide','normal','방청석 맨 뒤, 붓을 든 [[기록관]] 하나가 조용히 무언가를 적고 있다.');
  await say('judge','normal','오늘은 [[범인 찾기]]요. 세 증인의 말을 듣고, 말해서는 안 될 것을 아는 사람을 찾으시오.');
  setCharges(C4SUS(),'용의 증인');
  await say('judge','normal','화면 위에 세 증인의 카드를 두겠소. 증언을 들을 때마다 카드에 표시가 쌓일 것이오.');
  // 증인 ① 김 아찬
  bgm('testimony'); await say('achan','base','신라의 아찬, 김가요. 그날 궁궐에 있었소.');
  if(!await testimony(T4achan(),'나는 왕을 지키려 했소')) return false;
  chargeSt(0,'clear','도망침 · 왕을 죽음으로 몬 사람은 아님');
  await say('judge','normal','비겁했지만, 왕을 죽음으로 몬 사람은 아니군. 다음 증인.');
  // 증인 ② 능문
  bgm('testimony'); await say('neungmun','base','후백제의 장수, 능문이오.');
  if(!await testimony(T4neung(),'나는 명을 따랐을 뿐')) return false;
  chargeSt(1,'clear','명을 받음 · 명을 내린 사람이 따로 있음');
  await say('judge','normal','명을 내린 사람이 따로 있다… 마지막 증인.');
  // 증인 ③ 견 노인
  bgm('testimony'); await say('gyeonhwon','disguise','허허, 후백제 대왕께서 보낸 늙은 사신이오. 아이들 놀이에 늙은이까지 불렀구먼.');
  const T=T4old(); T.onHit=async()=>{ Music.stop(0.05); Music.sting('realize'); };
  if(!await testimony(T,'나는 늦게 도착한 사신일 뿐')) return false;
  chargeSt(2,'sus','너무 많이 앎 · 깃털 하나가 빠짐');
  S.flags.firstClue=firstHit('견 노인')==='H2'?'feather':'word';
  const c=await choose('누구를 피고로 세우겠습니까?',[
    {t:'김 아찬. 왕을 버리고 도망쳤습니다.',ok:false,fb:'비겁했지만, 왕을 죽음으로 몬 사람은 아니오.'},
    {t:'능문. 군사를 이끌고 왕을 데려왔습니다.',ok:false,fb:'명을 받은 사람이오. 명을 내린 사람이 따로 있다고 하지 않았소?'},
    {t:'견 노인. 늦게 온 사신이 알 수 없는 일을 알고, 그날 떨어진 깃털은 그의 모자에 꽂힌 깃털과 짝입니다.',ok:true}],{hint:'세 사람 가운데 ‘들은 것밖에 모른다’면서 너무 많이 아는 사람이 있소.'});
  if(!c) return false;
  Music.stop(0.02); await slam(); await shout('objection');
  await say('player','present','피고는 당신입니다, 견 노인. 아니, [[그날 군대를 이끈 사람]]!',{action:true});
  Music.sting('thud'); flash(); shake('quake'); await wait(500);
  unmask4(true); S.flags.unmasked=true; chargeSt(2,'defendant','정체: 견훤');
  bgm('crisis');
  await say('gyeonhwon','angry','…그래. 내가 [[견훤]]이다.',{action:true});
  await say('gyeonhwon','angry','그러나 나는 죄인이 아니라 [[백제의 복수자]]다! 의자왕의 원한을 갚으러 왔을 뿐이다!');
  Music.sting('murmur'); await wait(900); await gavel();
  await say('judge','stern','검사, 피고를 세우시오.');
  await say('player','confident','피고 견훤. 혐의는 두 가지입니다. 첫째, [[경주를 짓밟고 경애왕을 죽음으로 몬 죄]]. 둘째, [[자기가 세운 나라를 무너뜨리는 데 앞장선 죄]]입니다.');
  setCharges(C4CH());
  await say('rival','confident','변호인 누리입니다. 지금부터 피고 견훤을 변호하겠습니다.');
  await say('judge','normal','검사, 혐의 ①의 근거로 오늘 낼 증거가 있소?');
  S.expect=['H1','H13']; S.allowUsed=true; const id=await pickEvidence('혐의 ①의 근거로 낼 증거를 고르세요. (근거는 4일차 판결에서 다시 따집니다)'); S.expect=null; S.allowUsed=false;
  showEvidence(id); await say('player','present',`근거는 ‘${EV_BY_ID[id].title}’입니다.`); hideEvidence();
  if(id==='H12'){ S.flags.usedFake=true; await say('rival','think','(그 종이… 쓴 사람의 이름이 없는데.)'); }
  track('basis_d1',{ev:id});
  await say('judge','normal','기록해 두겠소. 오늘은 여기까지.');
  await gavel(); await titleCard('― 1일차 끝 ―','백제의 복수자는 누구인가');
  return true;
}
async function d2_4(){
  await courtOpen(2);
  await say('judge','normal','피고 견훤, 증언하시오.');
  if(!await testimony(T4king(),'나는 백제의 복수자')) return false;
  Music.stop(0.02); Music.sting('breakdown'); flash(); shake('quake');
  await say('gyeonhwon','breakdown','…신라에서 났다고 백제를 이을 수 없단 말이냐!',{action:true});
  await say('player','normal','(백제의 원한을 갚겠다던 사람은… 원래 신라의 군인이었어.)');
  Music.sting('murmur'); await wait(800); await gavel(); bgm('crisis');
  await say('rival','confident','검사, 그럼 그날은 잔치였나요, 제사였나요? 분명히 말해 보시죠.');
  if(!await choose('누리의 물음에 어떻게 답할까요?',[
    {t:'그날은 제사였다! 경애왕은 잔치를 벌이지 않았다.',ok:false,fb:'「삼국사기」에는 잔치를 열었다고 적혀 있어요. 검사가 해석 하나로 단정하면 안 되죠.',tag:'sure'},
    {t:'기록이 엇갈린다. 그러나 설령 잔치였어도, 왕을 죽음으로 몰 권리는 없다.',ok:true,tag:'mixed'},
    {t:'그날은 잔치였으니, 경애왕에게도 책임이 있다.',ok:false,fb:'검사가 피해자를 탓하는 거예요? 잔치였다 해도 피고의 일이 가벼워지지 않죠.'}],{who:'rival',expr:'smug'})) return false;
  await say('judge','normal','엇갈리는 기록은 엇갈리는 대로 두겠소. 그러나 왕이 목숨을 잃은 일은 확정된 사실이오.');
  await say('rival','normal','…그렇다면 내일은 이 이야기를 들어 주세요. 피고는 [[아들에게 배신당한 아버지]]입니다.');
  await gavel(); await titleCard('― 2일차 끝 ―','배신당한 아버지');
  return true;
}
async function d3_4(){
  await courtOpen(3);
  await say('rival','confident','변호인은 증인을 신청합니다. 피고의 맏아들, [[신검]]입니다.');
  Music.sting('murmur'); await wait(800); await gavel();
  bgm('testimony'); await say('singeom','base','…신검이오.');
  if(!await testimony(T4sin(),'아버지가 먼저 우리를 버렸다')) return false;
  bgm('open');
  await say('rival','normal','피고는 아들에게 갇히고, 아들을 잃었어요. 이 아픔은 판결에서 [[참작]]해 주세요.');
  await say('player','normal','그 아픔은 인정해요. 하지만 그 뒤에 피고가 고른 길도 봐야죠.');
  await victim('oldsoldier',[['base','후백제의 늙은 병사요.'],['base','936년 일리천에서, 고려군 맨 앞줄을 보았소.'],['base','거기 [[우리를 세운 왕]]이 서 있었소.'],['base','…우리는 누구를 위해 싸웠던 거요?']]);
  await gavel(); await titleCard('― 3일차 끝 ―','명분과 행동');
  return true;
}
async function d4_4(){
  await courtOpen(4);
  await say('judge','normal','판결에 앞서, 같은 시대에 다른 선택을 한 사람의 말을 듣겠소. 증인은 [[경순왕]]이오.');
  bgm('testimony');
  await say('gyeongsun','base','견훤이 세운 왕이 바로 나요. 그날, 내가 왕이 되었지.');
  await say('gyeongsun','base','935년, 나는 싸우는 대신 나라를 고려에 넘겼소. 백성이 [[더 피 흘리지 않게]].');
  await gotEv('H11');
  if(S.flags.usedFake){
    Music.stop(0.4); await say('judge','stern','검사, 1일차에 낸 그 [[목격담 종이]]를 다시 보겠소.');
    showEvidence('H12'); await say('judge','stern','귀퉁이에 [[매화 모양 먹 얼룩]]이 있소. 쓴 사람의 이름도 없소. 이 종이는 누가 쓴 것인지 알 수 없소. [[근거에서 빼시오]].'); hideEvidence();
    await loseTrust(); if(S.trust<=0){ await loseTrial(); return false; }
    await say('guide','normal','방청석 맨 뒤의 기록관이, 슬쩍 자리를 떴다.');
  } else if(S.found.has('H12')){
    await say('rival','think','(마당에 떨어져 있던 그 종이… 하람이 끝까지 내지 않았네.)');
    await say('guide','normal','방청석 맨 뒤의 기록관이, 붓을 멈추고 하람을 바라보았다.');
  }
  await say('judge','normal','검사, 혐의마다 판결의 [[이유]]와 [[근거]]를 대시오.');
  if(!await reasonEv('혐의 ①(경주를 짓밟고 경애왕을 죽음으로 몬 죄)을 유죄로 보는 가장 알맞은 이유는?',[
    {t:'그날 군대를 이끌고 들어와 왕을 포석정에서 끌어오게 하고 새 왕까지 고른 사람이 피고다.',ok:true,ev:['H13','H1']},
    {t:'피고가 직접 칼을 들었다는 목격담이 있다.',ok:false,fb:'그 목격담은 누가 쓴 것인지 알 수 없소.'},
    {t:'경애왕이 잔치를 벌였기 때문이다.',ok:false,fb:'그것은 피해자를 탓하는 말이오.'}])) return false;
  if(!await reasonEv('혐의 ②(자기가 세운 나라를 무너뜨리는 데 앞장선 죄)를 유죄로 보는 가장 알맞은 이유는?',[
    {t:'936년 피고는 고려군 앞줄에 서서 자기가 세운 후백제를 쳤다.',ok:true,ev:['H9']},
    {t:'피고는 신라에서 태어났으므로 처음부터 백제의 왕이 될 수 없었다.',ok:false,fb:'태어난 곳으로 죄를 묻지 않소. 피고가 한 일을 따지시오.'},
    {t:'피고는 아들에게 배신당했으므로 아무 잘못이 없다.',ok:false,fb:'그것은 참작할 사정이지, 무죄의 이유가 아니오.'}])) return false;
  await say('judge','normal','혐의 ②에서 참작할 사정이 있다면, 그 근거도 대시오.');
  if(!await presentFor('참작할 사정을 보여 줄 증거를 고르세요.',['H10','H8'],{allowUsed:true,say:e=>`참작할 사정은 ‘${e.title}’입니다. 피고는 아들에게 갇히고 아들을 잃었습니다.`})) return false;
  bgm('verdict'); await gavel();
  await say('judge','normal','판결을 내리겠소.');
  chargeSt(0,'guilty'); await say('judge','stern','혐의 ①. 피고는 경주를 짓밟고 경애왕을 죽음으로 몰았으며, 새 왕까지 골랐소. [[유죄]].');
  chargeSt(1,'guilty','아들의 배신은 참작'); await say('judge','stern','혐의 ②. 피고는 자기가 세운 나라를 치는 군대의 앞줄에 섰소. [[유죄]]. 다만 아들에게 갇히고 아들을 잃은 아픔은 참작하오.');
  await say('judge','normal','백제를 잇겠다는 이름은 컸소. 그러나 그 이름 아래 신라의 백성을 짓밟았고, 마지막엔 자기 백성을 쳤소.');
  await say('judge','normal','배신당한 아픔은 참작하되, [[그 길을 고른 것은 피고 자신]]이오.');
  await say('gyeonhwon','breakdown','…….');
  const pts=(S.flags.usedFake?0:1)+(S.trust>=3?1:0)+(S.plums&&S.plums.has('H12')?1:0);
  caseResult({grade:pts>=3?'날카로운 검사':pts===2?'성실한 검사':'견습 검사',lead:'증인 가운데 숨은 피고를 찾아내고, 명분과 행동을 맞대어 두 혐의를 증명했습니다.',
    items:[`숨은 피고를 찾은 첫 단서: ${S.flags.firstClue==='feather'?'물건(깃털)':'말의 실수(새 왕)'}`,`목격담 종이: ${S.flags.usedFake?'근거로 냄 (가짜로 밝혀짐)':'내지 않음'}${S.plums&&S.plums.has('H12')?' · 확대해 매화 얼룩을 찾음':''}`],
    judge:'명분이 크다고 행동이 옳아지지 않소. 그것을 증거로 보인 검사요.',history:HIST4});
  return true;
}
const HIST4='견훤은 상주 가은현에서 태어나 신라의 군인이 되었고, 892년 무리를 모아 일어나 900년 완산주에 후백제를 세우며 “의자왕의 원한을 씻겠다”고 했습니다. 927년 경주를 쳐서 경애왕을 죽음으로 몰고 경순왕을 세웠습니다. 935년 맏아들 신검에게 금산사에 갇혔다가 고려로 갔고, 936년 일리천 싸움에서 고려군과 함께 후백제를 쳤습니다. 후백제는 이 싸움으로 무너졌고, 고려가 후삼국을 통일했습니다. 포석정의 그날이 잔치였는지 제사였는지는 지금도 의견이 엇갈립니다.';
regCase(4,{title:'포석정의 그림자',desc:'숨은 피고 · 검사 · 난이도 4',ev:EVIDENCE4,locs:LOCS4,terms:TERMS4,defName:'피고',time:'90~100분',main:'pros',
  lead:'사건 4는 피고가 숨어 있어요. 증인 셋 가운데 말해서는 안 될 것을 아는 사람을 찾으세요.',
  locked:{def:'검사 사건',judge:'검사 사건'},
  openLine:'지금부터 [[역사 법정]]을 엽니다. 오늘은 피고가 정해지지 않았습니다.',history:HIST4,
  views:{prologue4:prologueView('#2a2e3e','#0b0c14'),poseok:prologueView('#2a2e3e','#0b0c14')},
  gojeung:['견훤의 출신(상주 가은현)과 신라 서남해 방수 군인 경력','892년 거병, 900년 완산주 후백제 건국과 ‘의자왕의 원한’ 발언','927년 경주 공격과 경애왕의 죽음, 김부(경순왕) 옹립','경애왕의 고려 구원 요청과 왕건의 출병','포석정 겨울 연회 기록과 제사 장소 해석','935년 금산사 유폐(석 달)와 탈출, 936년 일리천 전투','신검이 금강을 죽인 기록','건원중보 주조 연도(996년) — 미끼 증거','김 아찬·능문·견 노인 변장은 게임 속 상상'],
  roles:{pros:runPros4}});
