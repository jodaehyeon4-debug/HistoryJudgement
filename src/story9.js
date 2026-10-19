/* ===== 사건 9 「닫힌 문」: 역할 고르기 (검사 하람 / 변호인 누리 / 판사 다온) · 새 장치 ‘판단 보류’ =====
   v3: 혐의 ① 무리한 경복궁 공사로 백성을 괴롭힌 죄 → 책임 있음(정책 판단, 확정 사실: 당백전과 물가)
   혐의 ② 천주교 신자를 박해해 많은 사람이 목숨을 잃게 한 죄 → 유죄(잠금). 1868년 도굴을 1866년 박해의 이유로 내면 −1(연표 대기)
   혐의 ③ 나라의 문을 닫아 근대화를 늦춘 죄 → 역할별: 검사 ‘책임 있음’ / 변호인 ‘무죄’·‘판단 보류’ / 판사 셋 중 근거가 맞으면 모두 (유죄 선택지 없음)
   공으로 기록: 서원 정리, 호포제. 박해는 장면 없이(빈 강가와 바람), 특정 종교를 좋다·나쁘다 하지 않음. */
addCast('daewon',{name:'흥선대원군',label:'피고 흥선대원군',col:'#3a2a20',spec:{skin:'#efc9a2',robe:'#e8e4dc',robe2:'#a8a090',collar:'round',hat:'gat',hair:'#1c1a20',beard:'long',beardColor:'#2a2220',iris:'#3a2a20'}});
addCast('mason',{name:'경복궁 공사의 석수',label:'증인 석수',col:'#6a6a5a',spec:{skin:'#d9a77c',robe:'#8a8a78',robe2:'#5a5a48',collar:'cross',hat:'short',hair:'#2a2220',beard:'thin',iris:'#3a2a20'}});
addCast('riceman',{name:'장터의 쌀가게 주인',label:'증인 쌀가게 주인',col:'#8a6a2a',spec:{skin:'#efc8a0',robe:'#a8803a',robe2:'#7c5e28',collar:'cross',hat:'short',hair:'#1c1a20',beard:'thin',iris:'#2e2018'}});
addCast('mari',{name:'신자의 딸 마리',label:'피해자 마리',col:'#6a6a8a',spec:{skin:'#f0caa4',robe:'#e8e4dc',robe2:'#a8a8b8',collar:'cross',hat:'bun',hair:'#2a2220',beard:'none',iris:'#3a2a20'}});
addCast('oldservant',{name:'운현궁의 늙은 하인',label:'늙은 하인',col:'#5a4a3a',spec:{skin:'#d9a77c',robe:'#6a5a48',robe2:'#4a3e30',collar:'cross',hat:'short',hair:'#a8a8a8',beard:'thin',iris:'#3a2a20'}});
addCast('commander9',{name:'강화도 수비 장수',label:'증인 강화도 장수',col:'#3a3a40',spec:{skin:'#e2b48a',robe:'#3a3a48',robe2:'#2a2a34',collar:'cross',hat:'short',hair:'#1c1a20',beard:'long',beardColor:'#2a2220',iris:'#2e2018'}});
addCast('scholar9',{name:'개화를 꿈꾼 젊은 선비',label:'증인 젊은 선비',col:'#2f5d8a',spec:{skin:'#f0caa4',robe:'#e8f0f8',robe2:'#a8b8c8',collar:'round',hat:'gat',hair:'#1c1a20',beard:'none',iris:'#3a2a20'}});

const EVIDENCE9=[
  {id:'U1',reuse:true,type:'사료',icon:'scroll',title:'서원 정리',body:'1871년 대원군은 전국의 서원 가운데 47곳만 남기고 정리했다. 서원은 양반들이 세금을 피하고 힘을 모으던 곳이 되어 있었다.',src:'「고종실록」을 바탕으로 정리',trust:3,note:'잘한 일(공)로 기록되는 개혁이에요.'},
  {id:'U2',reuse:true,type:'사료',icon:'scroll',title:'호포제',body:'1871년 그동안 군포(군대 대신 내는 베)를 내지 않던 양반에게도 집집마다 군포를 걷게 했다.',src:'「고종실록」을 바탕으로 정리',trust:3,note:'백성의 부담을 고르게 한 개혁이에요.'},
  {id:'U3',type:'사료',icon:'scroll',title:'원납전',body:'경복궁을 다시 짓는 돈을 ‘스스로 내는 돈(원납전)’이라는 이름으로 걷었다. 나중에는 억지로 걷는 일이 많았다.',src:'「고종실록」을 바탕으로 정리',trust:3,note:'공사비를 어떻게 마련했나요?'},
  {id:'U4',reuse:true,type:'사료',icon:'censer',title:'당백전',body:'1866년 엽전 한 닢을 백 닢 값으로 쓰게 한 돈(당백전)을 만들었다. 돈의 값어치가 떨어지면서 물건값이 크게 올랐다.',src:'「고종실록」을 바탕으로 정리',trust:3,note:'돈이 많아지면 물건값은 어떻게 될까요?'},
  {id:'U5',reuse:true,type:'증언',icon:'scroll',title:'쌀값',body:'“당백전이 나온 뒤로 쌀값이 몇 배로 뛰었소. 쌀 한 가마를 사려면 돈을 지게로 지고 와야 했지.” (쌀 한 가마 가격표: 전 → 후)',src:'장터 쌀가게 주인의 이야기 · 사료 바탕',trust:3,note:'백성이 겪은 물가예요.'},
  {id:'U6',reuse:true,type:'사료',icon:'scroll',title:'러시아를 막을 계획',body:'1866년 초 신하들이 조선에 있던 프랑스 신부들을 통해 프랑스와 손잡고 남쪽으로 내려오는 러시아를 막자고 건의했고, 대원군이 관심을 보였다는 기록이 있다.',src:'「고종실록」과 당시 기록을 바탕으로 정리',trust:3,note:'처음부터 서양 신부들을 적으로 보았을까요?'},
  {id:'U7',reuse:true,type:'사료',icon:'prison',title:'1866년 봄',body:'1866년 봄 천주교를 금하는 명이 내려졌다(병인박해). 프랑스 신부 9명과 수많은 신자가 믿음 때문에 목숨을 잃었다.',src:'「고종실록」 · 천주교 측 기록 (규모는 학계 추정)',trust:3,note:'믿음 때문에 목숨을 잃은 사람들이에요.'},
  {id:'U8',type:'증언',icon:'scroll',tag:'imagined',title:'두려움 (상상 해석)',body:'“궁 안에도 신부를 따르는 사람이 있다는 말이 돌았소. 내가 먼저 치지 않으면 내가 당했을 것이오.”',src:'2일차 법정, 피고의 숨은 말 (해석 바탕, 대사는 상상)',trust:2,note:'참작할 사정이 될 수 있어요. 죄가 사라지는 것은 아니에요.'},
  {id:'U9',reuse:true,type:'사료',icon:'army',title:'병인양요',body:'1866년 가을, 박해 때 신부들이 목숨을 잃은 것을 이유로 프랑스 군함이 강화도에 쳐들어왔다.',src:'「고종실록」',trust:3,note:'무엇이 이 싸움을 불렀나요?'},
  {id:'U10',reuse:true,type:'사료',icon:'army',title:'신미양요',body:'1871년 미국 군함이 강화도에 쳐들어왔다. 그 앞서 1866년 미국 상선 제너럴셔먼호가 평양 대동강에서 불탄 일이 있었다.',src:'「고종실록」',trust:3,note:'서양 배는 어떻게 왔나요?'},
  {id:'U11',reuse:true,type:'사료',icon:'map',title:'무덤 도굴 사건',body:'1868년 독일 상인 오페르트가 대원군의 아버지 남연군의 무덤을 파헤치려다 실패했다.',src:'「고종실록」',trust:3,note:'그 시대 사람들은 서양을 어떻게 느꼈을까요?'},
  {id:'U12',reuse:true,type:'유적',icon:'censer',title:'척화비',body:'1871년 전국에 세운 비석. “서양 오랑캐가 쳐들어오는데 싸우지 않고 화친하자는 것은 나라를 파는 것이다.”',src:'척화비 비문',trust:3,note:'문을 닫겠다는 뜻이에요.'},
  {id:'U13',reuse:true,type:'증언',icon:'scroll',title:'선비의 생각',body:'“나라를 지키려면 오히려 배워야 하오. 문을 열고 남의 좋은 것을 익혀야 하오.”',src:'4일차 법정, 젊은 선비 (상상, 박규수 등의 생각 바탕)',trust:2,note:'같은 시대, 다른 생각이에요.'},
  {id:'U14',reuse:true,type:'증언',icon:'scroll',title:'일당',body:'“처음엔 품삯을 받고 신이 나서 온 사람도 많았소. 돈이 모자라자 억지로 끌려오는 사람이 늘었지.”',src:'경복궁 공사 현장, 석수의 이야기 (상상)',trust:2,note:'처음부터 끝까지 억지였을까요?'},
  {id:'U15',type:'증언',icon:'scroll',tag:'hearsay',trust:1,title:'마님의 기도 (전해 들은 말)',body:'운현궁 늙은 하인: “마님께서 천주교에 마음을 두셨다는 [[말이 있었지요]]. 대감께서도 처음엔 서양 신부를 미워하지 않으셨소.”',src:'운현궁 안채, 늙은 하인의 이야기 (상상)',note:'하인이 직접 본 일이 아니라 들은 말이에요. 반전의 실마리는 되지만 판결의 근거로는 약해요.'},
  {id:'U16',reuse:true,type:'증언',icon:'censer',tag:'imagined',title:'메밀묵 영수증',body:'똘방: “운현궁 앞 주막의 메밀묵이 [[어제는 한 냥]]이었는데 [[오늘은 두 냥]]이던데요?” 당백전이 나온 뒤, 하루 사이에 값이 두 배가 되었다.',src:'1일차 법정, 똘방의 영수증 (게임 속 이야기)',trust:2,note:'8사건 동안 쓸모없던 메밀묵이 남긴 생활 속 증거예요.'},
  {id:'UD1',type:'물건',icon:'censer',title:'서양 망원경',body:'서양에서 들어온 망원경.',src:'광성보',trust:3,note:'쟁점과 이어질까요?'},
  {id:'UD2',type:'유물',icon:'censer',title:'운현궁 현판',body:'운현궁 건물에 걸린 현판.',src:'운현궁 마당',trust:3,note:'무엇을 증명할까요?'},
  {id:'UD3',type:'유물',icon:'censer',title:'경복궁 기와',body:'다시 지은 경복궁의 기와 한 장.',src:'경복궁 공사 현장',trust:3,note:'멋진 기와지만, 쟁점과 이어질까요?'}
];
Object.entries({U1:1871,U2:1871,U3:1865,U4:1866,U5:1866,U6:1866,U7:1866,U8:1866,U9:1866,U10:1871,U11:1868,U12:1871,U13:1870,U14:1865,U15:1866,U16:1866}).forEach(([k,y])=>{ const e=EVIDENCE9.find(x=>x.id===k); if(e) e.y=y; });

/* 쌀가게 주인은 증언하는 동안 쌀값 팻말을 계속 고쳐 쓴다 (이름표의 살아 있는 숫자) */
const riceSign=()=>{ S.flags.sign=(S.flags.sign||0)+1; NAMES.riceman=`증인 쌀가게 주인 (팻말 고친 횟수 ${S.flags.sign}번)`; Music.sting('tick'); };
/* 마리의 그림: 강가에서 사라진 가족 (아이가 그린 크레용 그림, 장면 없이) */
const MARI_ART=`<svg viewBox="0 0 400 240" style="width:min(380px,80vw);height:auto;background:#fffaf0;border:2px solid #d8c8a8;border-radius:10px" aria-label="마리가 그린 그림: 강가에 선 마리와, 점선으로만 그린 빈자리"><path d="M0,170 C80,150 160,190 240,165 C300,148 350,175 400,160 L400,240 L0,240 Z" fill="#9ccbe8" opacity=".8"/><path d="M0,168 C80,148 160,188 240,163 C300,146 350,173 400,158" fill="none" stroke="#5a9ac8" stroke-width="4" stroke-linecap="round"/><circle cx="340" cy="46" r="24" fill="#ffd36a" stroke="#e8a83a" stroke-width="4"/><g stroke="#3a2a20" stroke-width="4" stroke-linecap="round" fill="none"><circle cx="110" cy="96" r="14" fill="#f0caa4"/><path d="M110,110 L110,140 M110,120 L94,132 M110,120 L126,132 M110,140 L98,160 M110,140 L122,160"/></g><path d="M96,112 L124,112 L130,142 L90,142 Z" fill="#e88aa8" opacity=".8"/><g stroke="#8a7a6a" stroke-width="3" stroke-dasharray="6 6" fill="none"><circle cx="190" cy="86" r="16"/><path d="M190,102 L190,140 M190,114 L170,128 M190,114 L210,128 M190,140 L176,162 M190,140 L204,162"/></g><text x="110" y="182" font-size="14" text-anchor="middle" fill="#3a2a20" font-family="Noto Sans KR,sans-serif">나</text><text x="190" y="182" font-size="14" text-anchor="middle" fill="#3a2a20" font-family="Noto Sans KR,sans-serif">아버지</text><path d="M20,200 l6,-22 l6,22 M44,204 l6,-26 l6,26 M360,206 l6,-24 l6,24" stroke="#6a9a4a" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`;
const LOCS9=[
  {id:'unhyeon',name:'운현궁',time:'아침',rooms:[
    {id:'uh-sarang',name:'사랑채(노안당)',intro:'대원군이 나랏일을 보던 사랑채다.',miss:['방석이다.','아무것도 없다.','먹 냄새가 난다.'],
     spots:[{x:56,y:20,w:24,h:32,label:'책상 위 문서',ev:'U1',say:['책상 위에 서원 목록이 펼쳐져 있다.','전국 서원 가운데 [[47곳만]] 남기고 정리했다는 기록이다.']},
      {x:8,y:56,w:22,h:24,label:'잠긴 서랍',only2:true,ev:'U6',say:['어제는 잠겨 있던 서랍이 열려 있다.','편지 묶음이다. 1866년 초, [[러시아를 막으려]] 프랑스 신부들을 통해 프랑스와 손잡을 길을 찾았다는 내용이다.']}]},
    {id:'uh-anchae',name:'안채(노락당)',intro:'운현궁의 안채다.',miss:['마루다.','아무것도 없다.'],
     spots:[{x:30,y:24,w:30,h:30,label:'벽에 붙은 고지',ev:'U2',say:['벽에 고지(알림)가 붙어 있다.','양반에게도 군포를 걷는다는 [[호포제]]다.']}],
     npcs:[{who:'oldservant',expr:'base',place:{x:78,h:60,b:2},from:2,topics:[
      {id:'os-hi',t:'이 집에서 오래 일하셨나요?',lines:[['oldservant','base','대감마님 젊을 때부터지요.']]},
      {id:'os-pray',t:'마님의 기도',lock:'U1',must:true,gives:['U15'],lockSay:'(하인은 고개를 숙이고 마당만 쓴다. 이 집 대감의 일을 보여 주며 물으면 무언가 말할지도 모른다.)',
       lines:[['oldservant','base','이 집 사람들은 무엇을 믿었냐고요? …허허.'],['oldservant','base','마님께서는 [[천주교에 마음을 두셨다]]는 말이 있었지요. 대감께서도 처음엔 서양 신부를 미워하지 않으셨소.'],['ME','think','(처음엔 미워하지 않았다…? 그런데 “말이 있었다”는 건 하인이 직접 본 게 아니라 [[전해 들은 말]]이야.)']]}],
      present:{U1:{lines:[['oldservant','base','서원 일로 시끄러웠지요. …그런데 그건 왜 물으시오?']],unlock:'os-pray'}},def:[['oldservant','base','허허, 모르는 물건이오.']]}]},
    {id:'uh-yard',name:'마당',intro:'운현궁의 마당이다.',miss:['마당 흙이다.','아무것도 없다.'],
     spots:[{x:30,y:10,w:40,h:20,label:'현판',ev:'UD2',say:['건물에 현판이 걸려 있다.','멋진 글씨다. 쟁점과 이어질까?']}]}]},
  {id:'gbgong',name:'경복궁 공사 현장',time:'낮',intro:'경복궁을 다시 짓는 공사 현장이다.',miss:['돌가루다.','나무 조각이다.','아무것도 없다.'],
   spots:[{x:56,y:16,w:26,h:30,label:'공사비 장부',ev:'U3',say:['공사비 장부가 걸려 있다.','‘[[스스로 내는 돈]](원납전)’이라는 이름으로 걷은 돈이다. 뒤로 갈수록 억지로 걷은 기록이 늘어난다.']},{x:8,y:64,w:20,h:20,label:'기와 더미',ev:'UD3',say:['새 기와가 쌓여 있다.','멋진 기와다. 쟁점과 관계가 있을까?']}],
   npcs:[{who:'mason',expr:'base',place:{x:40,h:60,b:2},until:1,topics:[
    {id:'ms-hi',t:'공사는 어떠세요?',lines:[['mason','base','큰 공사요. 평생 이런 건 처음이오.']]},
    {id:'ms-pay',t:'일당',lock:'U3',lockSay:'(석수는 돌만 깎는다. 공사비 이야기를 꺼내면 대답할지도 모른다.)',
     lines:[['mason','base','처음엔 다들 신이 났소. [[품삯]]도 받았지.'],['mason','base','그런데 돈이 모자라자 억지로 끌려오는 사람이 늘었소.']],gives:['U14']}],
    present:{U3:{lines:[['mason','base','원납전… 그 이야기라면.']],unlock:'ms-pay'}},def:[['mason','base','돌 말고는 모르오.']]}]},
  {id:'market9',name:'장터',time:'오후',intro:'한양의 장터다. 쌀가게 앞에 사람들이 웅성거린다.',miss:['짚신이다.','아무것도 없다.','엽전 한 닢이다. 단서는 아니다.'],
   spots:[{x:60,y:20,w:22,h:30,label:'쌓인 엽전 꾸러미',ev:'U4',say:['큰 엽전 꾸러미가 쌓여 있다.','한 닢을 백 닢 값으로 쓰게 한 [[당백전]]이다.']},{x:8,y:60,w:20,h:24,label:'빈 쌀자루',say:['빈 쌀자루다.']}],
   npcs:[{who:'riceman',expr:'base',place:{x:40,h:60,b:2},topics:[
    {id:'rm-hi',t:'장사는 어떠세요?',lines:[['riceman','base','쌀은 있는데 사는 사람이 없소.']]},
    {id:'rm-price',t:'쌀값',lock:'U4',must:true,lockSay:'(쌀가게 주인은 한숨만 쉰다. 요즘 돈 이야기를 꺼내면 대답할지도 모른다.)',
     lines:[['riceman','base','당백전 나온 뒤로 [[쌀값이 몇 배로]] 뛰었소. …잠깐, 팻말부터 고치고.'],['guide','normal','(쌀가게 주인이 쌀값 팻말의 숫자를 지우고 새로 쓴다.)'],['riceman','base','쌀 한 가마를 사려면 돈을 지게로 지고 와야 했지. 말하는 사이에 [[또 올랐소]]!']],gives:['U5']}],
    present:{U4:{lines:[['riceman','angry','그 돈! 그 돈 얘기라면 할 말이 많소.']],unlock:'rm-price'},MUK:{lines:[['riceman','base','메밀묵? 요즘 그것도 값이 하루가 다르게 오른다더군.']]}},def:[['riceman','base','쌀값보다 중요한 게 있소?']]},
    {who:'malsun',expr:'base',place:{x:78,h:60,b:2},from:2,topics:[
     {id:'ms9-ghost',t:'서양 배 이야기',lines:[['malsun','base','내가 다 봤다니까! 서양 배에 [[귀신]]이 타고 있었다니까!'],['ME','think','직접 보셨어요?'],['malsun','sweat','…아니, 강화도에 사는 사돈의 팔촌이… 눈이 파랗고 머리가 노랗더래. 그게 귀신이지 뭐야!'],['ME','think','(낯선 사람을 보고 생긴 소문이 이렇게 무섭게 부풀었구나. 그 시대 사람들의 두려움이 보여.)']]}],
     def:[['malsun','base','그건 모르는 물건이네.']]}]},
  {id:'river9',name:'절두산 아래 강가',time:'흐린 날',from:2,intro:'한강의 절두산 아래 강가다. 바람만 분다.',miss:['젖은 모래다.','바람 소리뿐이다.','아무것도 없다.'],
   spots:[{x:30,y:30,w:30,h:30,label:'강가의 작은 비석',ev:'U7',say:['강가에 작은 비석이 서 있다. 사람은 없고 바람만 분다.','1866년 봄, [[믿음 때문에]] 많은 사람이 목숨을 잃었다. 프랑스 신부 9명도.']},{x:70,y:60,w:24,h:24,label:'갈대',say:['갈대가 흔들린다.']}]},
  {id:'gwangseong',name:'강화도 광성보',time:'바닷바람',from:3,rooms:[
    {id:'gs-wall',name:'성벽',intro:'강화도 광성보의 성벽이다.',miss:['돌 성벽이다.','아무것도 없다.'],
     spots:[{x:30,y:24,w:30,h:30,label:'성벽에 박힌 포탄',ev:'U9',say:['성벽에 포탄 자국이 있다.','1866년 가을, [[박해를 이유로]] 프랑스 군함이 쳐들어왔다(병인양요).']}]},
    {id:'gs-cannon',name:'포대',intro:'대포를 놓던 포대다.',miss:['녹슨 쇠다.','아무것도 없다.'],
     spots:[{x:40,y:30,w:24,h:30,label:'부서진 대포',ev:'U10',say:['부서진 대포가 놓여 있다.','1871년 [[미국 군함]]과 싸운 흔적이다(신미양요). 그 앞서 제너럴셔먼호가 대동강에서 불탔다.']},{x:8,y:60,w:20,h:24,label:'서양 망원경',ev:'UD1',say:['서양 망원경이 떨어져 있다.','신기한 물건이지만 쟁점과 이어질까?']}]},
    {id:'gs-shore',name:'바닷가',intro:'광성보 아래 바닷가다.',miss:['갯벌이다.','아무것도 없다.'],
     spots:[{x:40,y:50,w:30,h:30,label:'갯벌',say:['물이 빠진 갯벌이다.']}]}]},
  {id:'namyeon',name:'남연군 묘',time:'밤',from:3,intro:'대원군의 아버지 남연군의 무덤이다.',miss:['풀이다.','아무것도 없다.'],
   spots:[{x:30,y:40,w:30,h:30,label:'파헤친 흔적',ev:'U11',say:['무덤 둘레에 파헤친 흔적이 남아 있다.','1868년 독일 상인 오페르트가 이 무덤을 [[파헤치려다]] 실패했다.']},{x:70,y:20,w:20,h:30,label:'석등',say:['돌로 만든 등이다.']}]},
  {id:'cheokhwa',name:'척화비 앞',time:'낮',from:3,intro:'1871년 전국에 세운 척화비 앞이다.',miss:['길가 흙이다.','아무것도 없다.'],
   spots:[{x:40,y:16,w:20,h:56,label:'척화비',ev:'U12',say:['비석에 글이 새겨져 있다.','“서양 오랑캐가 쳐들어오는데 싸우지 않고 [[화친하자는 것은 나라를 파는 것]]이다.”']}]}
];
const TERMS9=[
  {w:'대원군',d:'왕의 아버지예요. 고종이 열두 살에 왕이 되자 아버지 흥선대원군이 대신 나라를 다스렸어요.',ic:'👑'},
  {w:'서원',d:'선비들이 공부하고 제사를 지내던 곳이에요. 나중에는 세금을 피하는 곳이 되기도 했어요.',ic:'🏫'},
  {w:'호포제',d:'양반에게도 군포(군대 대신 내는 베)를 걷게 한 제도예요.',ic:'🧵'},
  {w:'당백전',d:'한 닢을 백 닢 값으로 쓰게 한 돈이에요. 물건값이 크게 올랐어요.',ic:'🪙'},
  {w:'박해',d:'믿는다는 이유로 괴롭히고 목숨을 빼앗는 일이에요.',ic:'⚠️'},
  {w:'양요',d:'서양 군함이 쳐들어와 벌어진 싸움이에요. 병인양요(프랑스), 신미양요(미국)가 있어요.',ic:'⚓'},
  {w:'닫힌 문',d:'다른 나라와 장사하고 사귀는 것을 거부한 정책이에요. ‘통상 수교 거부’라고 해요.',ic:'🚪'},
  {w:'판단 보류',d:'판사가 한 혐의에 대해 어느 한쪽으로 정하지 않고, 두 평가를 판결 이유에 함께 남기는 것이에요. 이 사건에서만 쓸 수 있어요.',ic:'⚖️'}
];
const C9CH=()=>[{t:'① 무리한 경복궁 공사로 백성을 괴롭힌 죄'},{t:'② 천주교 신자를 박해한 죄'},{t:'③ 나라의 문을 닫아 근대화를 늦춘 죄'}];
const R9=()=>S.role, OPP9=()=>S.role==='def'?'player':'rival';
const lie9=(o)=>Object.assign({},o,S.role==='judge'?{lie:false,sus:true}:{});
const T9mason=()=>{ const me=ME(); return {key:'석수',who:'mason',lines:[
  {text:'나는 경복궁 공사에서 돌을 깎은 석수요.',expr:'base',press:[[me,'normal','얼마나 일하셨나요?'],['mason','base','공사 내내.']]},
  lie9({text:'공사는 처음부터 끝까지 백성을 억지로 끌고 왔소!',expr:'base',lie:true,ev:'U14',press:[[me,'normal','처음부터 끝까지요?'],['mason','base','그, 그렇소!']],
   hit:[[me,'present','증인이 공사 현장에서 한 말입니다. [[처음엔 품삯을 받고]] 신이 나서 온 사람도 많았다고요.'],[me,'normal','뒤로 갈수록 억지가 늘어난 건 맞아요. 하지만 ‘처음부터 끝까지’는 부풀린 말입니다.'],['mason','sweat','크흠… 뒤가 워낙 힘들어서.']]}),
  {text:'돈이 모자라자 원납전을 억지로 걷었소. 그건 똑똑히 봤지.',expr:'base',press:[[me,'think','(이건 기록과 맞아.)'],['mason','base','사실이오.']]}
]}; };
const T9dw2=()=>{ const me=ME(); return {key:'흥선대원군',who:'daewon',allReveal:true,lines:[
  lie9({text:'나는 처음부터 서양 신부들을 나라의 적으로 보았소.',expr:'angry',lie:true,ev:'U6',press:[[me,'normal','처음부터요?'],['daewon','angry','그렇소!']],
   hit:[[me,'present','1866년 초의 편지입니다. 피고는 러시아를 막으려고 [[프랑스 신부들을 통해]] 프랑스와 손잡을 길을 찾았어요!'],[me,'confident','처음부터 적으로 보았다는 말은 사실이 아닙니다!'],['daewon','sweat','크…!']]}),
  {text:'박해는 나라를 지키기 위한 일이었소.',expr:'base',reveal:2,press:[[me,'think','정말 그것뿐이었나요? 계획이 틀어진 뒤에 무슨 일이 있었죠?'],['daewon','sweat','……'],['judge','stern','피고, 숨기지 마시오.']]},
  {text:'…궁 안에도 신부를 따르는 사람이 있다는 말이 돌았소. [[내가 먼저 치지 않으면 내가 당했을]] 것이오.',expr:'sweat',hidden:true,gives:['U8']}
]}; };

async function prologue9(){
  bgm('crisis');
  await say('guide','normal','1863년, 열두 살 고종이 왕이 되었다.',{view:'prologue9'});
  await say('guide','normal','왕의 아버지 흥선대원군이 대신 나라를 다스렸다. 십 년 동안.',{view:'prologue9'});
  await say('voice','normal','역사가 묻는다. 나라를 바로 세운 개혁가와 많은 사람을 죽게 한 권력자가 [[같은 사람]]일 때, 우리는 어떻게 판결하는가.',{view:'prologue9'});
  await titleCard('사건 9','닫힌 문');
}
async function run9(from){
  if(from<=0){ await prologue9(); bgm('investigate');
    const R={pros:'검사 하람',def:'변호인 누리',judge:'판사 다온'}[R9()];
    await say('judge','normal',`이번 사건은 고른 자리에서 하오. 그대는 [[${R}]]이오. 피고는 [[흥선대원군]].`,{view:'lobby'});
    if(R9()==='pros') await say('rival','confident','나는 피고의 변호를 맡을게. 개혁가를 재판한다니, 쉽지 않을걸.',{view:'lobby'});
    else if(R9()==='def') await say('player','confident','나는 검사야. 박해의 책임은 봐주지 않을 거야.',{view:'lobby'});
    else { await say('player','confident','검사 하람이에요.',{view:'lobby'}); await say('rival','confident','변호인 누리예요. 판사님, 셋째 혐의는 쉽게 가를 수 없을 거예요.',{view:'lobby'}); } }
  await playDays([
    {inv:async()=>{ await invDay(1,'[[운현궁]], [[경복궁 공사 현장]], [[장터]]를 조사하자. 개혁의 기록과 백성의 형편을 함께 보자.'); },court:d1_9,
     learned:['서원 정리와 호포제는 기록으로 확인되는 개혁이다.','경복궁 공사의 돈을 마련하려 만든 당백전으로 쌀값이 크게 뛰었다.','같은 해 1866년, 다른 일이 있었다.']},
    {inv:async()=>{ await invDay(2,'운현궁에 다시 가 보자. [[절두산 아래 강가]]도 열렸어.'); },court:d2_9,
     learned:['1866년 봄 박해로 신부 9명과 많은 신자가 목숨을 잃었다.','대원군은 처음엔 프랑스 신부들을 통해 러시아를 막으려 했다.','두려움은 참작할 사정일 수 있지만, 박해의 책임은 사라지지 않는다.']},
    {inv:async()=>{ await invDay(3,'[[강화도 광성보]], [[남연군 묘]], [[척화비 앞]]이 열렸어.'); },court:d3_9,
     learned:['박해가 프랑스의 침입(병인양요)을 불렀다.','서양 상인이 왕의 할아버지 무덤을 파헤치려 했다.','같은 시대에도 문을 열고 배우자는 사람들이 있었다.']},
    {court:d4_9}
  ],from);
}
async function d1_9(){
  await courtOpen(1);
  await say('player','confident','피고 흥선대원군의 혐의는 셋입니다.');
  setCharges(C9CH());
  await say('player','confident','첫째, [[무리한 경복궁 공사]]로 백성을 괴롭힌 죄. 둘째, 천주교 신자를 [[박해]]한 죄. 셋째, 나라의 [[문을 닫아]] 근대화를 늦춘 죄.');
  await say('judge','normal','피고, 증언하시오.');
  bgm('testimony');
  await say('daewon','base','나는 [[썩은 나라를 고쳤소]]. 양반들이 숨던 서원을 정리했고,',{testimony:true,tag:'증언 1/2'});
  await say('daewon','base','양반에게도 군포를 걷어 백성의 짐을 덜었소.',{testimony:true,tag:'증언 2/2'});
  if(R9()==='judge'){
    if(!await sortClaims([{who:'daewon',expr:'base',text:'나는 서원을 정리하고, 양반에게도 군포를 걷었소.',ans:'ok',ev:['U1','U2']}])) return false;
  } else {
    if(!await choose('피고의 이 증언을 어떻게 할까요?',[
      {t:'기록으로 확인되는 사실이다. 사실로 인정한다.',ok:true},
      {t:'거짓이라고 다툰다.',ok:false,fb:'서원 정리와 호포제는 기록으로 확인되는 일이오. 사실은 사실이오.'}])) return false;
    if(R9()==='pros') await say('player','normal','검사는 이 개혁의 사실을 인정합니다. 그러니 혐의 ①에 집중하겠어요.');
    else await say('rival','confident','변호인은 이 개혁을 앞세우겠어요. 피고는 나라를 고친 사람입니다.');
  }
  await say('player','confident','혐의 ①의 증인을 부르겠어요. 경복궁 공사의 [[석수]]입니다.');
  bgm('testimony'); await say('mason','base','석수요.');
  if(R9()==='judge'){
    const T=T9mason();
    for(const L of T.lines.filter(l=>!l.hidden)) await say('mason',L.expr,L.text,{testimony:true,tag:'증언'});
    if(!await sortClaims([{who:'mason',expr:'base',text:'공사는 처음부터 끝까지 백성을 억지로 끌고 왔소.',ans:'no',ev:['U14'],after:[['judge','normal','처음엔 품삯을 받고 온 사람도 많았소. 부풀린 말이오.']]}])) return false;
  } else { const T=T9mason(); T.onHit=async()=>{ bgm('open'); }; if(!await testimony(T,'공사는 백성을 끌고 왔다')) return false; }
  bgm('testimony'); S.flags.sign=0; NAMES.riceman='증인 쌀가게 주인 (팻말 고친 횟수 0번)';
  await say('riceman','angry','당백전 때문에 [[쌀을 살 수 없었소]]!',{testimony:true,tag:'증언'});
  riceSign(); await say('guide','normal','(쌀가게 주인이 들고 온 쌀값 팻말의 숫자를 고쳐 쓴다.)');
  await say('riceman','angry','쌀값이 몇 배로 뛰었단 말이오! …아, 말하는 사이에 [[또 올랐소]]!',{testimony:true,tag:'증언'});
  riceSign(); riceSign();
  await say('judge','stern','증인, 법정에서 팻말을 그만 고치시오.');
  if(R9()==='judge'){ if(!await sortClaims([{who:'riceman',expr:'angry',text:'당백전 때문에 쌀값이 몇 배로 뛰었다.',ans:'ok',ev:['U4','U5']}])) return false; }
  else await say('judge','normal','그 말은 기록과 맞소. 혐의 ①의 근거가 되겠군.');
  /* 피고 쪽은 물가가 하루아침에 오르지는 않았다고 버틴다. 8사건 동안 쓸모없던 메밀묵이 결정적 증거가 된다 */
  await say('daewon','angry','쌀가게 팻말은 엄살이오! 당백전이 나온 뒤에도 [[하루아침에]] 값이 오르는 일은 없었소.',{view:'witness'});
  const MUKHIT=[['guide','normal','(법정이 조용해졌다. 모두가 메밀묵 한 그릇을 바라본다.)'],['judge','stern','…똘방. 그 메밀묵, 어디서 샀소?'],['ttolbang','base','운현궁 앞 주막이요. [[어제는 한 냥]]이었는데, [[오늘은 두 냥]]이던데요?'],['daewon','sweat','크…! 메, 메밀묵 따위로…!'],['judge','normal','하루 사이에 값이 두 배가 되었구려. …똘방, 이번 달 메밀묵은 [[깎지 않겠소]].'],['ttolbang','joy','흐어엉… 재판장님…! (똘방이 울면서 웃는다)']];
  if(R9()==='pros'){
    const T={key:'흥선대원군',who:'daewon',lines:[
      {text:'당백전은 텅 빈 나라 곳간을 채웠소. 공사도 그 덕에 했지.',expr:'base',press:[['player','normal','곳간을 채웠다고요?'],['daewon','base','그렇소.']]},
      {text:'그 돈이 나온 뒤에도 [[하루아침에]] 값이 오르는 일은 없었소.',expr:'angry',lie:true,ev:'MUK',press:[['player','think','하루아침에는 아니라고…? 몇 달에 걸친 쌀값 말고, 하루 사이를 보여 줄 게 있을까?'],['daewon','angry','증거가 있으면 내 보시오!']],
       hit:[['player','present','이의 있습니다! …이걸 보시죠. [[메밀묵]]입니다.']].concat(MUKHIT)}],onHit:async()=>{ bgm('open'); }};
    bgm('testimony'); await titleCard('― 증언 ―','물건값은 그대로였다');
    for(const L of T.lines) await say('daewon',L.expr,L.text,{testimony:true,tag:'증언'});
    bgm('cross'); await titleCard('― 추궁 ―','몇 달이 아니라 하루 사이의 증거가 필요해요');
    if(!await runCross(T)) return false;
  } else if(R9()==='judge'){
    if(!await sortClaims([{who:'daewon',expr:'angry',text:'당백전이 나온 뒤에도 하루아침에 값이 오르는 일은 없었소.',ans:'no',ev:['MUK'],after:MUKHIT}])) return false;
  } else {
    await say('rival','think','(의뢰인이 확정된 사실을 부정하고 있어… 변호인이 막을 수는 없어.)');
    await shout('objection'); await say('player','present','이의 있습니다! …이걸 보시죠. [[메밀묵]]입니다.',{action:true});
    await line(MUKHIT);
    await say('rival','normal','…변호인은 물가가 오른 사실을 다투지 않겠습니다. [[확정된 사실]]이니까요.');
  }
  await gotEv('U16','증거 수첩에 [[메밀묵 영수증]]이 들어왔다. 8사건 동안 들고 다닌 메밀묵이 처음으로 쓸모가 있었다!');
  Music.stop(0.4);
  await say(R9()==='def'?'player':'rival',R9()==='def'?'confident':'normal',R9()==='def'?'개혁가라고요? 그 사람이 [[같은 해]]에 무엇을 했는지 보시죠.':'…그런데 검사, 피고가 [[같은 해]]에 무엇을 했는지도 보게 될 거예요.');
  Music.sting('thud'); flash(); await titleCard('1866','같은 해');
  await gavel(); await titleCard('― 1일차 끝 ―','개혁가의 1866년');
  return true;
}
async function d2_9(){
  await courtOpen(2);
  await say('judge','normal','판결에 앞서 피해를 입은 사람의 말을 듣겠소.');
  Music.stop(0.6); Music.sting('wind'); await wait(500);
  bgm('testimony');
  await infoCard('마리의 그림',`<p>마리가 그림 한 장을 들고 왔어요.</p><div style="display:grid;place-items:center">${MARI_ART}</div>`);
  await say('mari','base','마리라고 해요. 아버지는 천주교를 믿었어요.',{tag:'피해자 진술'});
  await say('mari','base','아버지는 [[누구도 해치지 않았어요]]. 그냥 믿었을 뿐이에요.',{tag:'피해자 진술'});
  await say('mari','base','그해 봄, 아버지는 돌아오지 않았어요.',{tag:'피해자 진술'});
  await say('judge','normal','잘 들었소.');
  await say('judge','normal','피고, 증언하시오.');
  if(R9()==='judge'){
    const T=T9dw2();
    bgm('testimony'); await titleCard('― 증언 ―','나는 처음부터 서양 종교를 막았다');
    for(const L of T.lines.filter(l=>!l.hidden)) await say('daewon',L.expr,L.text,{testimony:true,tag:'증언'});
    bgm('cross'); await titleCard('― 추궁 ―','판사는 더 묻기로 숨은 말을 끌어내요');
    if(!await runCross(T)) return false;
    if(!await sortClaims([{who:'daewon',expr:'angry',text:'나는 처음부터 서양 신부들을 나라의 적으로 보았소.',ans:'no',ev:['U6'],after:[['judge','normal','처음엔 신부들을 통해 프랑스와 손잡으려 했소. 확인되지 않는 말이오.']]}])) return false;
  } else { const T=T9dw2(); if(!await testimony(T,'나는 처음부터 서양 종교를 막았다')) return false; }
  Music.stop(0.02); Music.sting('murmur'); flash(); bgm('turnabout');
  await say('judge','shock','박해는 [[처음부터의 신념]]이 아니었소. 러시아를 막는 계획이 틀어지고, 천주교를 공격하는 목소리가 커지자 방향을 바꾼 것이오.');
  if(R9()==='pros'){
    if(!await choose('검사는 혐의 ②를 어떻게 세울까요?',[
      {t:'피고는 자기 자리를 지키려고 많은 목숨을 앗았다. 두려움은 참작할 수 있어도 박해의 책임은 남는다.',ok:true},
      {t:'피고는 처음부터 잔인한 사람이었다.',ok:false,fb:'처음엔 신부들과 손잡으려 했소. 증거와 맞지 않소.'}])) return false;
  } else if(R9()==='def'){
    if(!await choose('변호인은 혐의 ②에서 무엇을 말할까요?',[
      {t:'피해자의 말을 존중합니다. 유죄는 다투지 않되, 정치적 압박과 두려움을 참작할 사정으로 듭니다.',ok:true},
      {t:'피고는 두려웠으니 무죄입니다.',ok:false,fb:'두려움은 참작할 사정이지 무죄의 이유가 아니오. 목숨을 잃은 사람들이 있소.'},
      {t:'신자들이 나라의 법을 어겼으니 어쩔 수 없었습니다.',ok:false,fb:'믿음 때문에 목숨을 빼앗은 일을 피해자 탓으로 돌리지 마시오.'}])) return false;
  } else {
    if(!await sortClaims([{who:'rival',expr:'confident',text:'피고에게는 정치적 압박과 두려움이 있었다.',ans:'ok',ev:['U8']},{who:'rival',expr:'confident',text:'그러므로 혐의 ②는 무죄다.',ans:'op',after:[['judge','normal','두려움은 참작의 재료요. 무죄라는 것은 변호인의 생각일 뿐이오.']]}])) return false;
  }
  await gavel(); await titleCard('― 2일차 끝 ―','처음부터의 신념이 아니었다');
  return true;
}
async function d3_9(){
  await courtOpen(3);
  await say('judge','normal','혐의 ③, 나라의 문을 닫은 일을 다루오.');
  await say(R9()==='def'?'player':'player','confident','피고는 문을 닫아 나라를 [[늦췄습니다]]. 다른 나라들이 배우는 동안 조선은 멈췄어요.');
  bgm('testimony');
  await say('commander9','base','강화도를 지킨 장수요. 서양 배들은 [[대포를 쏘며]] 왔소.',{testimony:true,tag:'증언'});
  await say('commander9','base','장사하러 온 손님이 아니었소.',{testimony:true,tag:'증언'});
  if(R9()==='judge'){ if(!await sortClaims([{who:'player',expr:'confident',text:'서양 배들은 장사하러 왔을 뿐이다.',ans:'no',ev:['U10','U9']}])) return false; }
  // 반전 3: 무덤 도굴
  Music.stop(0.2);
  await say('guide','normal','1868년 밤, 충청도 덕산의 한 무덤.');
  await playShadow('graves');
  bgm('turnabout');
  if(R9()==='pros'){ showEvidence('U11'); await say('rival','present','무덤 도굴 사건입니다. 서양 상인이 [[왕의 할아버지 무덤을 파헤치려]] 했어요.',{action:true}); hideEvidence(); }
  else if(!await presentFor('그 시대 사람들이 서양을 어떻게 느꼈을지 보여 줄 증거를 고르세요.',['U11'],{say:()=>'무덤 도굴 사건입니다! 서양 상인이 왕의 할아버지 무덤을 파헤치려 했어요.'})) return false;
  Music.sting('murmur'); await wait(700);
  await say('judge','normal','…그 시대 사람들이 서양을 어떻게 느꼈을지, 처음으로 [[그 시대의 눈]]으로 보게 되는군.');
  await say('judge','normal','원인과 결과의 고리를 [[두 증거를 맞대어]] 보이시오.');
  if(!await presentPair('박해와 침입을 잇는 두 증거를 고르세요.','U9','U7',{say:'1866년 봄의 박해가, 그해 가을 프랑스의 침입을 불렀어요. 그리고 침입은 문을 더 굳게 닫게 했어요.',hint:'같은 해, 봄과 가을에 무슨 일이 있었는지 보시오.'})) return false;
  bgm('crisis');
  await say(R9()==='pros'?'player':'judge',R9()==='pros'?'confident':'normal','그러나 같은 시대에도 [[문을 열고 배워야 한다]]고 생각한 사람들이 있었소.'.replace('있었소',R9()==='pros'?'있었어요':'있었소'));
  await gavel(); await titleCard('― 3일차 끝 ―','그 시대의 눈');
  return true;
}
async function d4_9(){
  await courtOpen(4);
  await say('judge','normal','같은 시대에 다른 선택을 한 사람의 말을 듣겠소.');
  bgm('testimony');
  await say('scholar9','base','나라를 지키려면 오히려 [[배워야]] 하오. 문을 열고 남의 좋은 것을 익혀야 하오.');
  await gotEv('U13');
  await say('judge','normal','피고, 최후 진술을 하시오.');
  await say('daewon','base','나는 나라를 지켰다. 서양의 배와 대포 앞에서, 문을 닫지 않았다면 어찌 되었겠느냐.');
  await say('daewon','sweat','…강가의 일은, 할 말이 없다.');
  const who=R9()==='judge'?'판사':R9()==='def'?'변호인':'검사';
  await say('judge','normal',`${who}, 혐의마다 판결의 이유와 근거를 대시오.`);
  if(!await verdictKind('혐의 ① 무리한 경복궁 공사로 백성을 괴롭힌 죄','resp',{q:'궁궐 공사와 당백전은 나라의 정책 판단이었지만, 물가가 뛰어 백성이 크게 고통받았어요.',idx:0,fb:{guilty:'공사와 당백전은 사람에게 직접 해를 끼친 행위가 아니라 [[정책 판단]]이었소. 그러나 그 결과는 무겁소.'}})) return false;
  if(!await reasonEv('혐의 ①을 ‘책임 있음’으로 보는 가장 알맞은 이유는?',[
    {t:'경복궁 공사의 돈을 마련하려 원납전을 걷고 당백전을 만들어 쌀값이 몇 배로 뛰었다.',ok:true,ev:['U4','U5','U3','U16']},
    {t:'궁궐을 다시 지은 것 자체가 죄다.',ok:false,fb:'궁궐을 지은 것보다, 그 돈을 어떻게 마련해 백성이 어떤 일을 겪었는지가 문제요.'},
    {t:'석수가 처음부터 끝까지 억지였다고 했다.',ok:false,fb:'그 말은 부풀린 말이었소.'}])) return false;
  if(!await verdictKind('혐의 ② 천주교 신자를 박해한 죄','guilty',{q:'믿음 때문에 많은 사람이 목숨을 잃었어요. 사람에게 직접 해를 끼친 일이에요.',idx:1,fb:{resp:'처형은 나라를 위한 판단이라 부를 수 없소. 사람에게 [[직접 해를 끼친 행위]]요.'}})) return false;
  if(!await reasonEv('혐의 ②를 유죄로 보는 가장 알맞은 이유는?',[
    {t:'1866년 봄, 믿음 때문에 신부 9명과 많은 신자가 목숨을 잃게 했다. 정치적 두려움은 참작할 수 있어도 책임은 남는다.',ok:true,ev:['U7'],before:1866},
    {t:'처음엔 신부들과 손잡으려 했으니 무죄다.',ok:false,fb:'처음의 생각이 뒤의 박해를 지우지 않소.'},
    {t:'서양이 나중에 쳐들어왔으니 박해는 옳았다.',ok:false,fb:'뒤의 일로 앞의 목숨을 빼앗은 일을 정당화할 수 없소.'}])) return false;
  // 혐의 ③: 역할별
  /* 혐의 ③: 쇄국은 정책 판단이라 유죄 선택지는 없다. 자리마다 이기는 길이 다르다 */
  let concl; const K3=['resp','innocent','unproven'];
  if(R9()==='pros'){
    concl='resp';
    if(!await verdictKind('혐의 ③ 나라의 문을 닫아 근대화를 늦춘 죄','resp',{keys:K3,q:'검사의 이기는 길은 ‘책임 있음’으로 이끄는 거예요. 문을 닫은 것은 정책 판단이었어요.',idx:2,fb:{innocent:'검사는 다른 길(배우는 길)을 막은 [[결과]]를 보여 주려 했소. 그 결과까지 없던 일로 하지는 마시오.',unproven:'검사는 자기 근거로 결론을 세우는 자리요. 같은 시대의 다른 생각이 증거로 있소.'}})) return false;
    if(!await reasonEv('검사로서 혐의 ③을 ‘책임 있음’으로 보는 까닭은?',[
      {t:'침략 앞의 시대 상황은 참작한다. 그러나 문을 열고 배우자는 다른 길을 막은 결과는 역사에 남는다.',ok:true,ev:['U12','U13']},
      {t:'서양은 모두 좋은 나라였으니 문을 열어야 했다.',ok:false,fb:'대포를 쏘며 온 배도 있었소. 시대 상황을 보시오.'}])) return false;
  } else if(R9()==='def'){
    const pick=await verdictKind('혐의 ③ 나라의 문을 닫아 근대화를 늦춘 죄',['innocent','unproven'],{keys:K3,q:'변호인의 이기는 길은 ‘무죄’ 또는 ‘판단 보류’예요. 근거가 맞아야 해요.',idx:2,fb:{resp:'변호인은 시대 상황을 증거로 세우는 자리요. 침략과 도굴의 기록이 있소.'}});
    if(!pick) return false; concl=pick==='unproven'?'held':'innocent';
    if(!await reasonEv('변호인으로서 그렇게 보는 까닭은?',[
      concl==='innocent'?{t:'서양은 대포를 쏘며 왔고, 무덤을 파헤치려 했다. 침략 앞에서 나라를 지키려 한 것이다.',ok:true,ev:['U11','U10','U9']}:{t:'나라를 지켰다는 평가와 늦췄다는 평가가 모두 근거가 있다. 두 평가를 함께 남긴다.',ok:true,ev:['U11','U10','U13','U12']},
      {t:'피고는 개혁가였으니 문을 닫은 것도 옳았다.',ok:false,fb:'다른 혐의의 공으로 이 혐의를 덮을 수 없소.'}])) return false;
  } else {
    const c=await choiceSheet('판사로서 혐의 ③을 어떻게 판결할까요? (유죄는 없어요. 이 사건에서만 판단 보류를 쓸 수 있어요)',[
      {t:'책임 있음: 시대 상황은 참작하되, 다른 길(배우는 길)을 막은 결과가 있다.',ok:true,tag:'resp'},
      {t:'무죄(시대 상황): 침략 앞에서 나라를 지키려 했다.',ok:true,tag:'innocent'},
      {t:'판단 보류: 두 평가를 저울에 올려 판결 이유에 함께 남긴다.',ok:true,tag:'held'}]);
    concl=c.tag; track('verdict3',{v:concl}); S.verdicts.push({charge:'혐의 ③',kind:concl==='held'?'unproven':concl,first:true});
    const ids=concl==='resp'?['U12','U13']:concl==='innocent'?['U11','U10','U9']:['U13','U11','U12','U10'];
    if(!await presentFor(concl==='held'?'두 평가의 근거 가운데 하나를 고르세요. (문을 연 생각, 또는 침략의 기록)':'그 판결의 근거를 고르세요.',ids,{allowUsed:true})) return false;
  }
  S.flags.c3=concl;
  if(!await presentFor('공으로 기록할 일의 근거를 고르세요.',['U1','U2'],{allowUsed:true,say:e=>`공으로 기록합니다. ‘${e.title}’.`})) return false;
  bgm('verdict'); await gavel();
  const reader=R9()==='judge'?'daon':'judge', rv=R9()==='judge'?{view:'judge'}:{};
  if(R9()==='judge') await say('judge','normal','판사, 판결을 읽으시오.');
  chargeSt(0,'resp'); await say(reader,R9()==='judge'?'base':'stern','혐의 ①, [[책임 있음]]. 당백전과 원납전으로 백성의 삶이 무너졌습니다. 그 무게를 역사에 기록합니다.',rv);
  chargeSt(1,'guilty'); await say(reader,R9()==='judge'?'base':'stern','혐의 ②, [[유죄]]. 믿음 때문에 목숨을 잃은 사람들의 일은 지워지지 않습니다. 정치적 두려움은 참작합니다.',rv);
  chargeSt(2,concl,concl==='held'?'두 평가를 함께 남김':'');
  await say(reader,R9()==='judge'?'base':'normal',{resp:'혐의 ③, [[책임 있음]]. 시대 상황은 참작하되, 배우자는 다른 길을 막은 결과를 역사에 기록합니다.',innocent:'혐의 ③, [[무죄]]. 침략 앞에서 나라를 지키려 한 시대 상황을 인정합니다.',held:'혐의 ③, [[판단을 보류]]합니다. 나라를 지켰다는 평가와 늦췄다는 평가를 판결 이유에 함께 남깁니다.'}[concl],rv);
  await say(reader,R9()==='judge'?'base':'normal','공으로 기록합니다. 서원 정리와 호포제.',rv);
  await say('judge','normal','닫힌 문은 나라를 지켰을 수도 있고, 늦게 만들었을 수도 있소. 그러나 그 문 앞에서 [[목숨을 잃은 사람들의 일]]은 어느 쪽으로도 지워지지 않소.');
  await say('guide','normal','방청석 맨 뒤의 기록관이, 처음으로 고개를 들어 [[당신]]을 똑바로 바라보았다.');
  const pts=(S.trust>=3?1:0)+((S.log||[]).filter(x=>!x.ok).length<=1?1:0)+(S.observes>0||S.zoomed&&S.zoomed.size?1:0);
  const RG={pros:['공정한 검사','성실한 검사','견습 검사'],def:['공정한 변호인','노련한 변호인','견습 변호인'],judge:['공정한 판사','꼼꼼한 판사','견습 판사']}[R9()];
  caseResult({grade:RG[pts>=3?0:pts===2?1:2],lead:'개혁의 공과 박해의 과를 나누어 판결했고, 정답이 갈리는 혐의 ③은 자기 자리에서 근거를 세웠습니다.',
    items:[`고른 역할: ${({pros:'검사',def:'변호인',judge:'판사'})[R9()]}`,`혐의 ③의 결론: ${({resp:'책임 있음',innocent:'무죄(시대 상황)',held:'판단 보류'})[concl]}`,`메밀묵 영수증: ${S.found&&S.found.has('U16')?'찾음 — 시리즈 최대의 반전!':'-'}`,'다른 역할로 다시 해 보면, 같은 증거로 다른 결론을 세울 수 있어요.'],
    judge:'같은 증거로도 자리마다 다른 결론이 나올 수 있소. 다만 지워지지 않는 일이 있소.',history:HIST9});
  return true;
}
const HIST9='흥선대원군은 1863년부터 약 10년 동안 어린 고종을 대신해 나라를 다스렸습니다. 세도 정치를 누르고 서원을 정리했으며, 양반에게도 군포를 걷었습니다(호포제). 그러나 경복궁을 다시 지으며 원납전과 당백전으로 백성의 부담을 키웠습니다. 1866년 천주교 박해(병인박해)로 많은 사람이 목숨을 잃었고, 그해 프랑스가(병인양요), 1871년 미국이(신미양요) 강화도에 쳐들어왔습니다. 1868년 오페르트의 남연군 묘 도굴 시도도 있었습니다. 대원군은 척화비를 세워 문을 굳게 닫았는데, 이를 두고는 지금도 평가가 엇갈립니다.';
regCase(9,{title:'닫힌 문',desc:'흥선대원군 · 셋 중 고르기 · 난이도 8',ev:EVIDENCE9,locs:LOCS9,terms:TERMS9,defName:'흥선대원군',time:'100~120분',p2at:2,
  lead:'사건 9는 검사·변호인·판사 가운데 하나를 골라요. 같은 반에서 역할을 나누면 결론을 비교하며 토론할 수 있어요. (교사 사전 확인 권장)',
  openLine:'지금부터 [[역사 법정]]을 엽니다. 피고는 왕의 아버지, 흥선대원군.',history:HIST9,
  views:{prologue9:prologueView('#2a2622','#0c0a09')},
  goal:{pros:'흥선대원군의 혐의를 세운 검사예요. 공과 과를 나누고, 혐의 ③은 ‘책임 있음’으로 이끄는 것이 목표예요.',def:'흥선대원군을 변호해요. 박해의 책임은 지우지 않되, 혐의 ③은 시대 상황으로 다퉈요.',judge:'판사석에 앉아요. 혐의 ③은 근거만 맞으면 셋 가운데 어느 판결도 될 수 있어요. 판단을 보류할 수도 있어요.'},
  recall:{q:'지난 사건에서 ‘가문 전체를 벌하라’는 요구를 받아들이지 않은 원칙은 무엇이었나요?',opts:[{t:'남의 죄로 벌받지 않는다(연좌제 금지)',ok:true},{t:'양반은 벌하지 않는다'},{t:'증거가 너무 많아서 고를 수 없다'}],yes:'잘 기억하고 있구려. 이번에는 그대가 자리를 고르시오.',no:'…남의 죄로 벌받지 않는다, 헌법 카드였소. 이번에는 그대가 자리를 고르시오.'},
  bgCards:{1:{ic:'👑',t:'1863년 열두 살 고종이 왕이 되자, 아버지 흥선대원군이 약 10년 동안 나라를 다스렸어요.'},2:{ic:'📅',t:'1866년은 많은 일이 한꺼번에 일어난 해예요. 증거마다 연도를 잘 보세요.'},3:{ic:'⚓',t:'서양의 배가 강화도에 두 번 쳐들어왔어요(1866년 프랑스, 1871년 미국).'},4:{ic:'⚖️',t:'판결하는 날이에요. 혐의 ③은 자리에 따라 결론이 달라질 수 있어요.'}},
  record:['당백전이 나온 뒤 쌀을 살 수 없었던 한양의 백성들','원납전을 억지로 내고 공사에 끌려간 사람들'],
  lesson:{opts:[{t:'잘한 일과 잘못한 일은 따로 판결한다.',r:'그렇소. 공이 과를 지우지도, 과가 공을 지우지도 않소.'},{t:'그 시대의 눈으로 보되, 목숨을 잃은 일은 지우지 않는다.',r:'그렇소. 이해하는 것과 지우는 것은 다르오.'},{t:'시간 순서를 지켜야 원인과 결과가 보인다.',r:'그렇소. 뒤의 일은 앞의 일의 이유가 될 수 없소.'}]},
  teaser:'1919년 3월, 독립문 앞. 시리즈의 마지막 재판. 그리고 방청석 맨 뒤의 [[그 사람]].',
  gag:{scene:'쌀가게 주인과 똘방 「메밀묵 영수증」',
    inv:{1:[['ttolbang','bang','증거 나와라, 뚝딱!'],['guide','normal','(메밀묵이 나왔다. 여덟 번째 사건, 여전히 메밀묵.)'],['ttolbang','sad','…수첩에 메밀묵이 계속 쌓여요. 언젠가 쓸모가 있겠죠?'],['ttolbang','base','아, 장터 쌀가게 주인 아저씨는 말하는 사이에도 [[쌀값 팻말]]을 고쳐 쓴대요.']],
      2:[['ttolbang','base','어제 메밀묵 덕분에 이번 달 메밀묵을 안 깎였어요! 히히. 오늘은 장터에 말순 할머니도 계세요.']],
      3:[['ttolbang','base','강화도, 남연군 묘, 척화비… 오늘은 갈 곳이 많아요. 연도를 꼭 챙기세요!']]},
    fix:{2:{say:'어제 법정 요약! 당백전이 나온 뒤에도 물건값은 [[그대로]]였대요!',opts:[{t:'아니야. 쌀값이 몇 배로 뛰었고, 메밀묵도 하루 사이에 두 배가 됐어.',ok:true},{t:'맞아. 그대로였어.'}]},
      3:{say:'어제 법정 요약! 대원군은 [[처음부터]] 서양 신부들을 적으로 봤대요!',opts:[{t:'아니야. 처음엔 신부들을 통해 러시아를 막으려는 계획에 관심을 보였어.',ok:true},{t:'맞아. 처음부터 적으로 봤어.'}]}},
    pun:[['judge','normal','닫힌 문 사건이라… 오늘 재판은 [[문전성시]]구려. 문 앞에 사람이 많다는 뜻이오.'],['ttolbang','joy','하하하! 닫힌 문에 문전성시!'],['guide','normal','(방청석 몇 사람이 피식 웃었다. …처음 있는 일이다.)']],punDay:3},
  gojeung:['집권 기간(1863~1873), 서원 정리 규모(47곳), 호포제 시행 연도(1871)','경복궁 중건 기간(1865~1868), 원납전, 당백전 발행(1866)과 물가','병인박해 규모(학계 추정치), 프랑스 신부 수(9명)','1866년 초 러시아 견제를 위한 프랑스 접촉 시도','부대부인 민씨의 천주교 관련 이야기','병인양요(1866), 제너럴셔먼호(1866), 오페르트 도굴 사건(1868), 신미양요(1871), 척화비(1871)','석수·쌀가게 주인·마리·하인·장수·선비는 상상 인물, 메밀묵 값은 게임 속 이야기','‘러시아를 막을 계획’: 1866년 초 신하들의 건의와 대원군이 관심을 보인 기록의 내용'],
  roles:{pros:run9,def:run9,judge:run9}});
