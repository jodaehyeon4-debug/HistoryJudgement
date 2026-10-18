/* ===== 그림 도구 ===== */
let UID=0;
const LINE='#2a1a14';
const hex2rgb=h=>{ h=h.replace('#',''); return [0,2,4].map(i=>parseInt(h.substr(i,2),16)); };
const rgb2hex=a=>'#'+a.map(v=>Math.max(0,Math.min(255,Math.round(v))).toString(16).padStart(2,'0')).join('');
const mix=(a,b,t)=>{ const x=hex2rgb(a), y=hex2rgb(b); return rgb2hex(x.map((v,i)=>v+(y[i]-v)*t)); };
const shade=(c,t)=>mix(c,'#3a1f3d',t);      // 그림자는 따뜻한 보라 쪽으로
const light=(c,t)=>mix(c,'#fff4dc',t);      // 빛은 한지색 쪽으로
const lg=(id,stops,x2,y2)=>`<linearGradient id="${id}" x1="0" y1="0" x2="${x2===undefined?0:x2}" y2="${y2===undefined?1:y2}">${stops.map(s=>`<stop offset="${s[0]}" stop-color="${s[1]}"${s[2]!==undefined?` stop-opacity="${s[2]}"`:''}/>`).join('')}</linearGradient>`;
const ST=(w,c)=>`fill="none" stroke="${c||LINE}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"`;
function drop(x,y,k){ k=k||1; return `<path d="M${x},${y} C${x-9*k},${y+15*k} ${x-9*k},${y+24*k} ${x},${y+26*k} C${x+9*k},${y+24*k} ${x+9*k},${y+15*k} ${x},${y} Z" fill="#c4e8ff" stroke="#3b6e99" stroke-width="2.4"/><ellipse cx="${x-3*k}" cy="${y+17*k}" rx="${2.2*k}" ry="${4*k}" fill="#fff" opacity=".85"/>`; }

const HEAD='M130,150 C128,92 164,58 200,58 C236,58 272,92 270,150 C271,186 262,214 246,236 C230,256 214,264 200,266 C186,264 170,256 154,236 C138,214 129,186 130,150 Z';
const BODY='M38,480 C40,418 56,374 98,352 C126,338 152,322 170,308 C182,302 192,300 200,300 C208,300 218,302 230,308 C248,322 274,338 302,352 C344,374 360,418 362,480 Z';

/* 표정 설정: 눈(open 뜬 정도, iris 눈동자 크기, lx/ly 시선, tilt 눈꼬리), 눈썹[안쪽 높이, 바깥 높이, 굽음], 입 */
const EXPR={
  normal:{open:1,iris:1,bL:[158,156,4],bR:[158,156,4],m:'normal'},
  smug:{open:.55,iris:1,lx:4,ly:1,tilt:-1,bL:[160,161,2],bR:[149,145,6],m:'smug'},
  sweat:{open:.92,iris:.82,lx:-3,ly:2,tilt:3,bL:[149,163,1],bR:[149,163,1],m:'sweat',sweat:true},
  shock:{open:1.25,style:'shock',bL:[143,146,7],bR:[143,146,7],m:'shock',lines:true},
  breakdown:{open:1.2,style:'blank',tilt:2,bL:[145,161,2],bR:[145,161,2],m:'breakdown',pale:true,sweat:true},
  angry:{open:.8,iris:.95,tilt:-4,bL:[168,151,1],bR:[168,151,1],m:'angry',vein:true},
  stern:{open:.82,iris:.95,tilt:-3,bL:[166,153,2],bR:[166,153,2],m:'stern'},
  confident:{open:.8,iris:1,lx:1,tilt:-1,bL:[163,153,3],bR:[163,153,3],m:'confident'},
  think:{open:.85,iris:1,lx:-5,ly:-4,bL:[157,155,4],bR:[149,150,6],m:'think'},
  smile:{style:'happy',bL:[154,152,6],bR:[154,152,6],m:'confident'}
};
EXPR.present=EXPR.confident;
const EXPR_LABEL={normal:'보통',smug:'으스댐',sweat:'식은땀',shock:'충격',breakdown:'무너짐',angry:'화남',stern:'엄격',confident:'자신만만',present:'증거 제시',think:'생각',smile:'미소'};

function eyeSVG(id,k,cx,cy,side,E,iris){
  const w=36, h=14, open=E.open||1, tilt=E.tilt||0;
  const inX=cx-side*w/2, outX=cx+side*w/2, outY=cy-4+tilt;
  if(E.style==='happy') return `<path d="M${cx-w/2},${cy+3} Q${cx},${cy-11} ${cx+w/2},${cy+3}" ${ST(4.2)}/>`;
  const top=`M${inX},${cy-1} C${inX+side*w*.15},${cy-h*open*1.15} ${cx+side*w*.25},${cy-h*open*1.22} ${outX},${outY}`;
  const bot=`C${cx+side*w*.3},${cy+h*.78*open} ${inX-side*w*.08},${cy+h*.62*open} ${inX},${cy-1}`;
  const shape=`${top} ${bot} Z`;
  const cid=`${id}e${k}`;
  let s=`<clipPath id="${cid}"><path d="${shape}"/></clipPath><path d="${shape}" fill="#fffaf2"/>`;
  s+=`<g clip-path="url(#${cid})">`;
  if(E.style==='shock'){ s+=`<circle cx="${cx}" cy="${cy+1}" r="3.6" fill="${LINE}"/>`; }
  else if(E.style==='blank'){ s+=`<circle cx="${cx}" cy="${cy+1}" r="2.3" fill="${LINE}"/>`; }
  else {
    const ic=E.iris||1, x=cx+(E.lx||0), y=cy+2+(E.ly||0);
    s+=`<ellipse cx="${x}" cy="${y}" rx="${10.5*ic}" ry="${13.5*ic}" fill="url(#${id}i)"/><ellipse cx="${x}" cy="${y}" rx="${10.5*ic}" ry="${13.5*ic}" fill="none" stroke="${shade(iris,.6)}" stroke-width="1.4"/>`;
    s+=`<ellipse cx="${x}" cy="${y+1}" rx="${4.6*ic}" ry="${6.4*ic}" fill="${shade(iris,.75)}"/>`;
    s+=`<ellipse cx="${x-4*ic}" cy="${y-6*ic}" rx="${3.6*ic}" ry="${4.6*ic}" fill="#fff"/><circle cx="${x+4*ic}" cy="${y+5*ic}" r="${1.7*ic}" fill="#fff" opacity=".9"/>`;
  }
  s+=`<path d="${top}" fill="none" stroke="#b9a7c4" stroke-width="7" opacity=".55"/></g>`;
  s+=`<path d="${top}" ${ST(4.2)}/>`;
  s+=`<path d="M${outX},${outY} L${outX+side*7},${outY-5} L${outX-side*3},${outY-2.5} Z" fill="${LINE}"/>`;
  s+=`<path d="M${outX-side*2},${outY+4} C${cx+side*w*.28},${cy+h*.7*open+1} ${cx+side*w*.1},${cy+h*.72*open+1} ${cx},${cy+h*.7*open+1.5}" ${ST(1.6)}/>`;
  s+=`<path d="M${inX+side*6},${cy-h*open*1.1-5} C${cx},${cy-h*open*1.35-6} ${cx+side*w*.3},${cy-h*open*1.3-5} ${outX-side*2},${outY-8}" ${ST(1.3)} opacity=".55"/>`;
  return s;
}
function browSVG(side,b,col){
  const inX=200+side*14, outX=200+side*54, inY=b[0], outY=b[1], ar=b[2];
  const mx=(inX+outX)/2, my=(inY+outY)/2;
  return `<path d="M${inX},${inY-3.5} Q${mx},${my-ar-3} ${outX},${outY-1} L${outX-side*1.5},${outY+1.6} Q${mx},${my-ar+2.2} ${inX},${inY+3.6} Z" fill="${col}"/>`;
}
function mouthSVG(k){
  const D='#6b2430', T='#d9707c'; let c,o;
  switch(k){
    case 'smug': c=`<path d="M187,243 Q201,247 213,236" ${ST(2.6)}/>`; o=`<path d="M187,241 Q201,256 213,235 Q201,244 187,241 Z" fill="${D}" stroke="${LINE}" stroke-width="2.2"/>`; break;
    case 'confident': c=`<path d="M186,238 Q200,250 214,238" ${ST(2.6)}/>`; o=`<path d="M185,237 Q200,262 215,237 Q200,242 185,237 Z" fill="${D}" stroke="${LINE}" stroke-width="2.2"/><path d="M192,250 Q200,246 208,250 Q200,256 192,250 Z" fill="${T}"/>`; break;
    case 'shock': c=o=`<path d="M192,240 Q200,228 208,240 Q210,256 200,258 Q190,256 192,240 Z" fill="${D}" stroke="${LINE}" stroke-width="2.4"/><path d="M194,252 Q200,248 206,252 Q200,257 194,252 Z" fill="${T}"/>`; break;
    case 'breakdown': c=o=`<path d="M180,240 Q186,232 193,238 Q200,232 207,238 Q214,232 220,240 Q218,262 200,264 Q182,262 180,240 Z" fill="${D}" stroke="${LINE}" stroke-width="2.4"/><path d="M185,242 L215,242" stroke="#fff" stroke-width="3.2"/>`; break;
    case 'sweat': c=`<path d="M189,243 Q194,238 200,243 T211,243" ${ST(2.4)}/>`; o=`<ellipse cx="200" cy="244" rx="7" ry="5" fill="${D}" stroke="${LINE}" stroke-width="2.2"/>`; break;
    case 'angry': case 'stern': c=`<path d="M189,243 Q200,240 211,243" ${ST(2.6)}/>`; o=`<path d="M186,237 L214,237 L211,250 Q200,254 189,250 Z" fill="${D}" stroke="${LINE}" stroke-width="2.2"/><path d="M188,238 L212,238 L211,242 L189,242 Z" fill="#fff"/>`; break;
    case 'think': c=`<path d="M192,244 Q200,242 208,245" ${ST(2.4)}/>`; o=`<ellipse cx="200" cy="244" rx="6" ry="4.5" fill="${D}" stroke="${LINE}" stroke-width="2"/>`; break;
    default: c=`<path d="M190,241 Q200,245 210,241" ${ST(2.4)}/>`; o=`<path d="M191,239 Q200,252 209,239 Q200,242 191,239 Z" fill="${D}" stroke="${LINE}" stroke-width="2.2"/>`;
  }
  return `<g class="m-closed">${c}</g><g class="m-open">${o}</g>`;
}

/* 머리 모양: back(머리 뒤), front(앞머리), sh(이마에 지는 그림자), hi(윤기) */
function hairParts(sp,id){
  const H=`url(#${id}h)`, hl=light(sp.hair||'#1c1a20',.55), out=`stroke="${LINE}" stroke-width="3" stroke-linejoin="round"`;
  const shine=(d)=>`<path d="${d}" ${ST(4,hl)} opacity=".75"/>`;
  switch(sp.hat){
    case 'student': return {
      back:`<path d="M118,176 C104,96 148,40 202,40 C256,40 298,96 282,176 C276,196 268,206 262,212 L262,150 L138,150 L138,212 C130,206 122,196 118,176 Z" fill="${H}" ${out}/>`,
      front:`<path d="M124,170 C116,104 150,56 202,54 C254,56 288,104 276,168 L268,140 L262,160 L250,128 L240,156 L226,122 L214,152 L200,118 L190,150 L176,124 L166,154 L154,128 L146,158 L136,136 Z" fill="${H}" ${out}/>`+
        `<path d="M124,164 C120,186 124,206 132,222 L138,196 C134,184 134,172 136,160 Z M276,164 C280,186 276,206 268,222 L262,196 C266,184 266,172 264,160 Z" fill="${H}" ${out}/>`+
        `<path d="M200,56 C192,30 212,18 226,30 C212,30 206,40 208,56 Z" fill="${H}" ${out}/>`+shine('M152,90 C166,76 182,70 194,71')+shine('M214,71 C228,72 240,80 248,92'),
      sh:'M130,150 L146,172 L154,142 L166,168 L176,140 L190,164 L200,134 L214,166 L226,138 L240,170 L250,144 L262,174 L270,152 L270,110 L130,110 Z'};
    case 'bob': return {
      back:`<path d="M112,180 C98,92 148,40 200,40 C252,40 302,92 288,180 L294,276 C278,290 254,288 246,272 L154,272 C146,288 122,290 106,276 Z" fill="${H}" ${out}/>`,
      front:`<path d="M122,170 C114,96 154,50 200,50 C246,50 286,96 278,170 C274,150 268,142 260,140 L252,146 L240,140 L226,146 L212,140 L200,146 L188,140 L174,146 L160,140 L148,146 L140,140 C130,144 124,154 122,170 Z" fill="${H}" ${out}/>`+
        `<path d="M122,150 C112,196 116,240 130,276 L150,272 C138,234 136,192 142,150 Z M278,150 C288,196 284,240 270,276 L250,272 C262,234 264,192 258,150 Z" fill="${H}" ${out}/>`+
        (sp.band?`<path d="M120,118 C140,64 260,64 280,118" ${ST(15)}/><path d="M120,118 C140,64 260,64 280,118" ${ST(9,sp.band)}/><path d="M134,104 C156,74 196,66 222,70" ${ST(2.4,light(sp.band,.6))}/>`:'')+shine('M150,100 C164,88 178,84 190,84')+shine('M212,84 C226,86 238,92 248,102'),
      sh:'M130,150 L148,160 L160,152 L174,160 L188,152 L200,160 L212,152 L226,160 L240,152 L252,160 L270,150 L270,110 L130,110 Z'};
    case 'bun': return {
      back:`<circle cx="200" cy="40" r="31" fill="${H}" ${out}/><path d="M180,30 C192,20 214,22 222,38 M178,46 C192,56 214,56 224,44" ${ST(2.2,shade(sp.hair,.4))}/>`+
        `<path d="M118,174 C106,96 150,48 200,48 C250,48 294,96 282,174 C276,192 268,200 262,206 L262,150 L138,150 L138,206 C132,200 124,192 118,174 Z" fill="${H}" ${out}/>`+
        `<path d="M162,30 L242,54" ${ST(4,'#d9a93f')}/><circle cx="162" cy="30" r="5" fill="#f6d77a" stroke="${LINE}" stroke-width="2"/><circle cx="242" cy="54" r="4" fill="#f6d77a" stroke="${LINE}" stroke-width="2"/>`,
      front:`<path d="M122,168 C114,96 156,52 204,52 C250,54 286,96 278,168 C268,130 238,108 204,112 C178,116 160,128 150,146 C146,138 134,142 122,168 Z" fill="${H}" ${out}/><path d="M150,146 C142,170 140,196 146,220" ${ST(4,sp.hair)}/>`+shine('M156,96 C172,80 190,74 206,74'),
      sh:'M130,162 C150,152 170,134 204,126 C238,122 262,140 270,170 L270,110 L130,110 Z'};
    case 'short': return {
      back:`<path d="M122,170 C112,96 152,48 202,48 C252,48 290,96 278,170 L272,150 L128,150 Z" fill="${H}" ${out}/>`,
      front:`<path d="M124,166 C118,96 156,52 204,52 C250,54 284,96 276,166 C270,136 252,118 218,112 L208,128 L200,112 C162,114 136,134 124,166 Z" fill="${H}" ${out}/>`+shine('M150,96 C166,80 184,72 200,72'),
      sh:'M130,162 C150,138 170,126 200,124 L208,138 L218,126 C248,132 266,148 270,168 L270,110 L130,110 Z'};
    default: return { // 관모를 쓴 인물: 귀밑머리만
      back:'',
      front:`<path d="M131,148 C128,92 164,60 200,60 C236,60 272,92 269,148 C240,138 160,138 131,148 Z" fill="${H}"/><path d="M131,140 C126,160 128,178 134,192 L141,190 L143,140 Z M269,140 C274,160 272,178 266,192 L259,190 L257,140 Z" fill="${H}"/>`,
      sh:'M130,150 C160,141 240,141 270,150 L270,170 C240,160 160,160 130,170 Z'};
  }
}
function hatSVG(sp,id,e){
  const G=`url(#${id}g)`, K=`url(#${id}k)`; let s='';
  if(sp.hat==='baekje'){
    s=`<path d="M120,152 C112,86 156,46 200,46 C244,46 288,86 280,152 C254,138 146,138 120,152 Z" fill="${K}" stroke="${LINE}" stroke-width="3"/>`+
      `<path d="M142,110 C152,80 178,62 206,60" ${ST(6,'#ffffff')} opacity=".18"/><path d="M122,148 C150,134 250,134 278,148" ${ST(6,'#d9a93f')}/>`+
      `<path d="M168,112 C152,96 160,78 150,60 C166,70 172,58 168,40 C184,56 184,76 178,90 C188,84 190,72 188,62 C200,80 192,100 180,112 Z" fill="${G}" stroke="#6b4a12" stroke-width="2.5" stroke-linejoin="round"/>`+
      `<path d="M232,112 C248,96 240,78 250,60 C234,70 228,58 232,40 C216,56 216,76 222,90 C212,84 210,72 212,62 C200,80 208,100 220,112 Z" fill="${G}" stroke="#6b4a12" stroke-width="2.5" stroke-linejoin="round"/>`+
      `<path d="M170,104 C164,88 170,72 166,56 M230,104 C236,88 230,72 234,56" ${ST(1.6,'#fff3c0')} opacity=".8"/>`;
  } else if(sp.hat==='ikseon'){
    s=`<ellipse cx="156" cy="48" rx="28" ry="36" fill="${K}" stroke="${LINE}" stroke-width="3"/><ellipse cx="244" cy="48" rx="28" ry="36" fill="${K}" stroke="${LINE}" stroke-width="3"/>`+
      `<path d="M146,30 C150,22 160,20 166,26 M234,26 C240,20 250,22 254,30" ${ST(3,'#ffffff')} opacity=".2"/>`+
      `<path d="M120,154 C114,86 158,56 200,56 C242,56 286,86 280,154 C252,140 148,140 120,154 Z" fill="${K}" stroke="${LINE}" stroke-width="3"/>`+
      `<path d="M142,112 C150,86 176,70 204,68" ${ST(6,'#ffffff')} opacity=".16"/><path d="M124,148 C150,136 250,136 276,148" ${ST(7,'#3d3846')}/>`;
  } else if(sp.hat==='gat'){
    let tex=''; for(let x=168;x<=232;x+=6) tex+=`M${x},44 L${x+(x-200)*.08},124 `;
    let beads=''; [[72,152],[80,174],[90,196],[102,218],[116,238],[132,256],[150,274],[168,290]].forEach(p=>{ beads+=`<circle cx="${p[0]}" cy="${p[1]}" r="4.6" fill="#3a2a30" stroke="${LINE}" stroke-width="1.5"/><circle cx="${400-p[0]}" cy="${p[1]}" r="4.6" fill="#3a2a30" stroke="${LINE}" stroke-width="1.5"/>`; });
    s=`<ellipse cx="200" cy="92" rx="16" ry="18" fill="${sp.hair||'#1c1a20'}"/>`+
      `<path d="M128,144 C150,128 250,128 272,144 L272,156 C250,142 150,142 128,156 Z" fill="#15131a"/>`+
      `<path d="M160,128 L166,40 C186,32 214,32 234,40 L240,128 Z" fill="#15131a" fill-opacity=".74" stroke="${LINE}" stroke-width="2.5"/><path d="${tex}" stroke="#000" stroke-width="1" opacity=".35"/>`+
      `<ellipse cx="200" cy="128" rx="172" ry="26" fill="#15131a" fill-opacity=".68" stroke="${LINE}" stroke-width="2.5"/><ellipse cx="200" cy="128" rx="150" ry="20" fill="none" stroke="#000" stroke-width="1" opacity=".3"/>`+
      `<path d="M68,134 C94,214 134,268 178,300 M332,134 C306,214 266,268 222,300" ${ST(2,LINE)}/>`+beads;
  } else return '';
  const tf=e==='breakdown'?' transform="translate(22 -26) rotate(16 200 100)"':'';
  return `<g class="hat"${tf}>${s}</g>`;
}
function collarSVG(sp,id){
  const r=sp.robe, r2=sp.robe2||shade(r,.3), W='#f6efe0';
  switch(sp.collar){
    case 'cross': return `<path d="M176,300 L200,352 L224,300 Z" fill="#efe5d0" stroke="${LINE}" stroke-width="2.5"/>`+
      `<path d="M234,302 L196,358" ${ST(18)}/><path d="M234,302 L196,358" ${ST(12,W)}/>`+
      `<path d="M166,302 Q198,362 248,446" ${ST(18)}/><path d="M166,302 Q198,362 248,446" ${ST(12,W)}/><path d="M172,312 Q200,364 244,436" ${ST(2,'#d6cbb4')}/>`;
    case 'round': return `<path d="M148,308 C158,348 242,348 252,308" ${ST(19)}/><path d="M148,308 C158,348 242,348 252,308" ${ST(13,r2)}/><path d="M154,312 C164,338 236,338 246,312" ${ST(2.2,W)}/>`+
      (sp.emblem?`<circle cx="200" cy="410" r="42" fill="url(#${id}g)" stroke="${LINE}" stroke-width="3"/><circle cx="200" cy="410" r="34" fill="none" stroke="#7a5414" stroke-width="2"/>`+
        `<path d="M176,420 C176,398 196,390 206,402 C214,412 206,424 196,420 C188,416 192,404 200,406 M212,392 C220,386 230,392 226,402 M180,432 C190,440 210,440 222,428" ${ST(3,'#7a5414')}/>`:'');
    case 'blazer': case 'suit': return `<path d="M174,300 L226,300 L200,374 Z" fill="${W}" stroke="${LINE}" stroke-width="2.5"/><path d="M176,300 L192,322 L200,312 Z M224,300 L208,322 L200,312 Z" fill="#ffffff" stroke="${LINE}" stroke-width="2"/>`+
      (sp.collar==='suit'||sp.tie?`<path d="M194,314 L206,314 L212,366 L200,382 L188,366 Z" fill="${sp.tie||'#5b1f2a'}" stroke="${LINE}" stroke-width="2.4"/>`:`<path d="M178,318 L200,328 L222,318 L222,340 L200,330 L178,340 Z" fill="${sp.ribbon||'#c9a24e'}" stroke="${LINE}" stroke-width="2.4"/><circle cx="200" cy="329" r="5" fill="${shade(sp.ribbon||'#c9a24e',.25)}" stroke="${LINE}" stroke-width="2"/>`)+
      `<path d="M148,310 L176,300 L200,388 L166,358 L178,336 Z" fill="${r2}" stroke="${LINE}" stroke-width="2.6" stroke-linejoin="round"/><path d="M252,310 L224,300 L200,388 L234,358 L222,336 Z" fill="${r2}" stroke="${LINE}" stroke-width="2.6" stroke-linejoin="round"/>`+
      (sp.pin!==false?`<path d="M262,366 L286,340" ${ST(6,'#d9a93f')}/><path d="M286,340 L293,332" ${ST(6,LINE)}/>`:'');
    case 'robe': return `<path d="M178,302 L200,348 L222,302 Z" fill="${r2}"/><path d="M150,304 L200,392 L250,304" ${ST(22)}/><path d="M150,304 L200,392 L250,304" ${ST(14,W)}/>`+
      `<circle cx="266" cy="364" r="11" fill="url(#${id}g)" stroke="${LINE}" stroke-width="2.4"/><path d="M262,366 L266,356 L270,366" ${ST(1.8,'#7a5414')}/>`;
  }
  return '';
}
function beardSVG(sp){
  const c=sp.beardColor||'#241a1c';
  const mus=`<path d="M198,226 C190,220 176,220 166,228 C160,233 156,232 152,228 C156,240 172,242 186,234 C192,231 196,230 198,230 Z" fill="${c}"/><path d="M202,226 C210,220 224,220 234,228 C240,233 244,232 248,228 C244,240 228,242 214,234 C208,231 204,230 202,230 Z" fill="${c}"/>`;
  switch(sp.beard){
    case 'king': return mus+`<path d="M190,262 C192,280 198,296 200,304 C202,296 208,280 210,262 C204,266 196,266 190,262 Z" fill="${c}"/>`;
    case 'thin': return `<path d="M198,231 C188,226 176,227 166,235 M202,231 C212,226 224,227 234,235" ${ST(3.6,c)}/>`;
    case 'long': return mus+`<path d="M176,256 C172,300 188,342 200,358 C212,342 228,300 224,256 C214,268 186,268 176,256 Z" fill="${c}" stroke="${LINE}" stroke-width="2"/><path d="M190,276 C190,300 194,322 198,340 M210,276 C210,300 206,322 202,340" ${ST(1.4,shade(c,.3))}/>`;
  }
  return '';
}
function poseSVG(sp,id,pose){
  const sk=sp.skin, R=`url(#${id}r)`, robe=sp.robe;
  if(pose==='present') return `<path d="M296,480 C302,420 300,370 290,334 L332,320 C346,366 352,420 354,480 Z" fill="${R}" stroke="${LINE}" stroke-width="3"/>`+
    `<g transform="rotate(-9 300 270)"><rect x="252" y="218" width="96" height="78" rx="4" fill="#f6edd8" stroke="${LINE}" stroke-width="3"/><path d="M264,236 H336 M264,250 H330 M264,264 H336 M264,278 H316" ${ST(2,'#8a7350')}/><rect x="318" y="270" width="18" height="18" rx="2" fill="#d9a93f" stroke="${LINE}" stroke-width="2"/></g>`+
    `<path d="M280,312 C276,294 290,284 306,288 L324,296 C332,300 332,314 322,318 L296,328 C288,328 282,322 280,312 Z" fill="${sk}" stroke="${LINE}" stroke-width="3"/><path d="M292,296 L304,300 M290,306 L304,308" ${ST(1.8,shade(sk,.5))}/>`;
  if(pose==='think') return `<path d="M226,300 L266,284 C292,334 314,404 330,480 L282,480 C268,412 248,348 226,300 Z" fill="${R}" stroke="${LINE}" stroke-width="3"/><path d="M262,300 C282,350 300,410 312,470" ${ST(2,shade(robe,.5))} opacity=".7"/>`+
    `<path d="M206,264 C204,250 218,244 232,248 L254,258 C262,264 258,278 248,280 L222,282 C212,282 206,274 206,264 Z" fill="${sk}" stroke="${LINE}" stroke-width="3"/><path d="M216,256 C214,248 222,242 228,248" ${ST(2.4)}/><path d="M220,266 L240,268 M220,274 L238,276" ${ST(1.6,shade(sk,.5))}/>`;
  return '';
}
function charSVG(sp,expr){
  if(sp.kind==='haechi') return haechiSVG(expr);
  const id='c'+(++UID), E=EXPR[expr]||EXPR.normal;
  const sk=sp.skin, skS=shade(sk,.3), hair=sp.hair||'#1c1a20', iris=sp.iris||'#5a3a26', robe=sp.robe;
  const pose=expr==='present'?'present':expr==='think'?'think':'';
  const H=hairParts(sp,id);
  let s=`<defs><clipPath id="${id}f"><path d="${HEAD}"/></clipPath><clipPath id="${id}s"><path d="${HEAD}"/><path d="${BODY}"/><rect x="176" y="230" width="48" height="80"/></clipPath>`+
    lg(id+'l',[[0,'#ffffff',0],[.55,'#3b2550',0],[1,'#3b2550',.34]],.7,1)+
    lg(id+'h',[[0,light(hair,.18)],[1,shade(hair,.25)]])+
    lg(id+'i',[[0,shade(iris,.55)],[.55,iris],[1,light(iris,.5)]])+
    lg(id+'r',[[0,light(robe,.14)],[.55,robe],[1,shade(robe,.32)]],1,.4)+
    lg(id+'g',[[0,'#fbe7a1'],[.5,'#e2b54e'],[1,'#a8761f']],.6,1)+
    lg(id+'k',[[0,'#3a3542'],[.6,'#17151c'],[1,'#0c0b10']])+
    `<radialGradient id="${id}b"><stop offset="0" stop-color="#f2848c" stop-opacity=".6"/><stop offset="1" stop-color="#f2848c" stop-opacity="0"/></radialGradient>`+
    lg(id+'p',[[0,'#3446b8',.5],[1,'#3446b8',0]])+`</defs>`;
  s+=H.back;
  s+=`<path d="${BODY}" fill="url(#${id}r)" stroke="${LINE}" stroke-width="3.4"/>`;
  s+=`<path d="M304,354 C338,374 356,414 362,480 L306,480 C310,440 310,396 304,354 Z" fill="${shade(robe,.38)}" opacity=".55"/>`;
  s+=`<path d="M118,400 C124,430 126,456 124,480 M282,392 C274,430 272,456 274,480" ${ST(2,shade(robe,.5))} opacity=".7"/><path d="M52,430 C60,388 80,364 112,346" ${ST(3,light(robe,.45))} opacity=".6"/>`;
  s+=`<path d="M180,236 L178,306 L222,306 L220,236 Z" fill="${sk}" stroke="${LINE}" stroke-width="3"/><path d="M178,240 C186,266 214,266 222,240 L222,272 C210,284 190,284 178,272 Z" fill="${skS}" opacity=".85"/>`;
  s+=collarSVG(sp,id);
  if(sp.hat!=='bob') s+=`<path d="M134,168 C118,160 112,176 116,192 C119,204 126,210 136,208 Z" fill="${sk}" stroke="${LINE}" stroke-width="3"/><path d="M128,176 C122,182 124,194 130,198" ${ST(2,skS)}/>`+
    `<path d="M266,168 C282,160 288,176 284,192 C281,204 274,210 264,208 Z" fill="${sk}" stroke="${LINE}" stroke-width="3"/><path d="M272,176 C278,182 276,194 270,198" ${ST(2,skS)}/>`;
  s+=`<path d="${HEAD}" fill="${sk}"/>`;
  s+=`<g clip-path="url(#${id}f)"><path d="M258,100 C268,150 262,200 244,230 C230,250 214,260 196,268 L300,300 L300,100 Z" fill="${skS}" opacity=".5"/><path d="${H.sh}" fill="${skS}" opacity=".6"/>`+
    (E.pale?`<rect x="120" y="60" width="160" height="150" fill="url(#${id}p)"/><path d="M150,110 V170 M166,104 V176 M234,104 V176 M250,110 V170" ${ST(3,'#3446b8')} opacity=".45"/>`:'')+
    `<ellipse cx="150" cy="200" rx="12" ry="6" fill="#fff" opacity=".22"/></g>`;
  s+=`<path d="${HEAD}" fill="none" stroke="${LINE}" stroke-width="3.4"/>`;
  if(sp.blush && !E.pale) s+=`<ellipse cx="154" cy="216" rx="19" ry="10" fill="url(#${id}b)"/><ellipse cx="246" cy="216" rx="19" ry="10" fill="url(#${id}b)"/><path d="M146,213 l-3,6 M153,213 l-3,6 M160,213 l-3,6 M240,213 l-3,6 M247,213 l-3,6 M254,213 l-3,6" ${ST(1.4,'#e0737c')}/>`;
  s+=`<path d="M203,204 Q208,214 201,220" ${ST(2.4,shade(sk,.55))}/><path d="M197,206 L196,212" ${ST(1.6,'#ffffff')} opacity=".5"/>`;
  s+=mouthSVG(E.m);
  s+=eyeSVG(id,'L',167,188,-1,E,iris)+eyeSVG(id,'R',233,188,1,E,iris);
  const bc=sp.browCol||shade(hair,.15);
  s+=browSVG(-1,E.bL,bc)+browSVG(1,E.bR,bc);
  s+=H.front;
  if(sp.glasses) s+=`<g fill="#ffffff" fill-opacity=".14" stroke="${LINE}" stroke-width="3"><circle cx="167" cy="190" r="23"/><circle cx="233" cy="190" r="23"/></g><path d="M190,188 Q200,182 210,188 M144,186 L122,180 M256,186 L278,180" ${ST(3)}/><path d="M154,178 L162,172 M220,178 L228,172" ${ST(2.4,'#ffffff')} opacity=".7"/>`;
  s+=beardSVG(sp);
  s+=hatSVG(sp,id,expr);
  if(E.sweat) s+=drop(292,150)+drop(108,176,.8)+(E.pale?drop(300,214,.7):'');
  if(E.lines) s+=`<path d="M106,104 L86,84 M98,140 L72,132 M112,70 L100,46 M294,104 L314,84 M302,140 L328,132 M288,70 L300,46" ${ST(4.5)}/>`;
  if(E.vein) s+=`<path d="M252,92 q6,-2 6,-8 M262,92 q-6,-2 -6,-8 M252,98 q6,2 6,8 M262,98 q-6,2 -6,8" ${ST(3,'#c0392b')}/>`;
  s+=`<g clip-path="url(#${id}s)"><rect x="0" y="0" width="400" height="480" fill="url(#${id}l)" style="mix-blend-mode:multiply"/><path d="M135,158 C130,198 140,236 160,256" ${ST(3.5,'#ffffff')} opacity=".32"/></g>`;
  s+=poseSVG(sp,id,pose);
  return `<svg viewBox="0 0 400 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(sp.name)} ${EXPR_LABEL[expr]||expr}">${s}</svg>`;
}

/* 해치: 정의를 지키는 상상의 동물 */
function haechiSVG(expr){
  const id='c'+(++UID), M='#3f8a8f', M2='#28585f', M3='#8fd0c4', F='#f4dfa4', FS='#d9b46c', MZ='#fff4d8';
  let s=`<defs>`+lg(id+'g',[[0,'#fbe7a1'],[.5,'#e2b54e'],[1,'#a8761f']],.6,1)+lg(id+'m',[[0,M3],[.45,M],[1,M2]])+lg(id+'f',[[0,'#fff0c4'],[.7,F],[1,FS]])+lg(id+'r',[[0,'#34406a'],[.6,'#1d2340'],[1,'#121629']],1,.4)+
    `<clipPath id="${id}c"><path d="M128,170 C126,118 160,92 200,92 C240,92 274,118 272,170 C272,214 244,250 200,252 C156,250 128,214 128,170 Z"/></clipPath></defs>`;
  s+=`<path d="${BODY}" fill="url(#${id}r)" stroke="${LINE}" stroke-width="3.4"/><path d="M150,306 L200,396 L250,306" ${ST(22)}/><path d="M150,306 L200,396 L250,306" ${ST(14,'#f6efe0')}/>`;
  s+=`<path d="M304,354 C338,374 356,414 362,480 L306,480 C310,440 310,396 304,354 Z" fill="#0b0e1c" opacity=".5"/>`;
  for(let i=0;i<16;i++){ const a=i*22.5; s+=`<g transform="rotate(${a} 200 172)"><path d="M200,26 C234,36 250,72 234,104 C224,92 210,90 200,96 C190,90 176,92 166,104 C150,72 166,36 200,26 Z" fill="url(#${id}m)" stroke="${LINE}" stroke-width="2.8"/><path d="M200,44 C214,50 218,68 206,76" ${ST(2.6,M3)}/></g>`; }
  s+=`<circle cx="200" cy="172" r="94" fill="${M2}"/>`;
  s+=`<circle cx="200" cy="318" r="19" fill="url(#${id}g)" stroke="${LINE}" stroke-width="3"/><path d="M188,320 H212 M200,320 V334" ${ST(2.4,'#6b4a12')}/><path d="M192,310 Q198,306 204,309" ${ST(2.4,'#fff6d0')}/>`;
  s+=`<path d="M122,108 C102,80 114,52 148,70 C144,86 136,98 122,108 Z M278,108 C298,80 286,52 252,70 C256,86 264,98 278,108 Z" fill="${F}" stroke="${LINE}" stroke-width="3"/><path d="M124,96 C118,84 124,72 138,76 M276,96 C282,84 276,72 262,76" ${ST(2.4,'#e7a4a0')}/>`;
  s+=`<path d="M188,96 C186,62 196,38 216,16 C219,44 219,70 214,96 Z" fill="url(#${id}g)" stroke="${LINE}" stroke-width="3"/><path d="M190,80 L214,74 M192,62 L215,56 M196,44 L216,38" ${ST(2,'#7a5414')}/>`;
  s+=`<path d="M128,170 C126,118 160,92 200,92 C240,92 274,118 272,170 C272,214 244,250 200,252 C156,250 128,214 128,170 Z" fill="url(#${id}f)"/>`;
  s+=`<g clip-path="url(#${id}c)"><path d="M256,110 C268,160 262,210 236,240 L300,280 L300,100 Z" fill="${FS}" opacity=".6"/></g>`;
  s+=`<path d="M128,170 C126,118 160,92 200,92 C240,92 274,118 272,170 C272,214 244,250 200,252 C156,250 128,214 128,170 Z" fill="none" stroke="${LINE}" stroke-width="3.4"/>`;
  s+=`<path d="M130,192 C110,198 106,218 122,226 C120,214 126,206 138,206 Z M270,192 C290,198 294,218 278,226 C280,214 274,206 262,206 Z" fill="url(#${id}m)" stroke="${LINE}" stroke-width="2.4"/>`;
  s+=`<path d="M140,214 a9,9 0 1,1 9,9 a4.5,4.5 0 1,1 -4.5,-4.5 M260,214 a9,9 0 1,0 -9,9 a4.5,4.5 0 1,0 4.5,-4.5" ${ST(2.6,'#c8902f')}/>`;
  s+=`<path d="M162,214 C160,192 180,182 200,184 C220,182 240,192 238,214 C238,236 220,248 200,248 C180,248 162,236 162,214 Z" fill="${MZ}" stroke="${LINE}" stroke-width="3"/>`;
  s+=`<circle cx="176" cy="222" r="2.2" fill="${FS}"/><circle cx="170" cy="230" r="2.2" fill="${FS}"/><circle cx="224" cy="222" r="2.2" fill="${FS}"/><circle cx="230" cy="230" r="2.2" fill="${FS}"/>`;
  s+=`<path d="M184,198 C184,186 216,186 216,198 C216,208 206,214 200,214 C194,214 184,208 184,198 Z" fill="#3a2622"/><ellipse cx="194" cy="195" rx="5" ry="2.6" fill="#fff" opacity=".6"/>`;
  const L=166, R=234, Y=162;
  const brow=(cx,rot,dy)=>`<g transform="rotate(${rot} ${cx} ${136+(dy||0)})"><path d="M${cx-22},${140+(dy||0)} C${cx-26},${128+(dy||0)} ${cx-12},${122+(dy||0)} ${cx-4},${128+(dy||0)} C${cx},${120+(dy||0)} ${cx+16},${120+(dy||0)} ${cx+20},${130+(dy||0)} C${cx+26},${132+(dy||0)} ${cx+24},${142+(dy||0)} ${cx+16},${142+(dy||0)} L${cx-16},${144+(dy||0)} C${cx-20},${144+(dy||0)} ${cx-22},${142+(dy||0)} ${cx-22},${140+(dy||0)} Z" fill="${M2}" stroke="${LINE}" stroke-width="2"/></g>`;
  const eye=(cx,k)=>{
    if(expr==='smile') return `<path d="M${cx-15},${Y+4} Q${cx},${Y-12} ${cx+15},${Y+4}" ${ST(4.4)}/>`;
    let e=`<ellipse cx="${cx}" cy="${Y}" rx="16" ry="18" fill="#fffaf0" stroke="${LINE}" stroke-width="3"/>`;
    if(expr==='shock') return e+`<circle cx="${cx}" cy="${Y}" r="3.6" fill="${LINE}"/>`;
    e+=`<circle cx="${cx}" cy="${Y+2}" r="11" fill="#c9852b"/><circle cx="${cx}" cy="${Y+2}" r="11" fill="none" stroke="#6b3d12" stroke-width="1.6"/><circle cx="${cx}" cy="${Y+3}" r="5.4" fill="#2a1408"/><circle cx="${cx-4}" cy="${Y-3}" r="3.6" fill="#fff"/><circle cx="${cx+4}" cy="${Y+7}" r="1.6" fill="#fff"/>`;
    if(expr==='stern') e+=`<path d="M${cx-18},${Y-20} L${cx+18},${Y-20} L${cx+18},${Y-4+(k<0?6:-2)} L${cx-18},${Y-4+(k<0?-2:6)} Z" fill="${F}"/><path d="M${cx-17},${Y-4+(k<0?-2:6)} L${cx+17},${Y-4+(k<0?6:-2)}" ${ST(3.4)}/>`;
    return e;
  };
  let brows, c, o;
  switch(expr){
    case 'shock': brows=brow(L,-8,-10)+brow(R,8,-10); c=o=`<ellipse cx="200" cy="232" rx="11" ry="10" fill="#6b2430" stroke="${LINE}" stroke-width="2.4"/>`; break;
    case 'stern': brows=brow(L,16)+brow(R,-16); c=`<path d="M188,232 H212" ${ST(3)}/>`; o=`<path d="M186,226 L214,226 L211,238 Q200,242 189,238 Z" fill="#6b2430" stroke="${LINE}" stroke-width="2.2"/><path d="M188,227 L212,227 L211,231 L189,231 Z" fill="#fff"/>`; break;
    case 'smile': brows=brow(L,-10)+brow(R,10); c=`<path d="M182,226 Q200,244 218,226" ${ST(3)}/>`; o=`<path d="M182,224 Q200,252 218,224 Q200,232 182,224 Z" fill="#6b2430" stroke="${LINE}" stroke-width="2.2"/>`; break;
    default: brows=brow(L,-5)+brow(R,5); c=`<path d="M186,226 Q193,234 200,226 Q207,234 214,226" ${ST(3)}/>`; o=`<ellipse cx="200" cy="232" rx="10" ry="8" fill="#6b2430" stroke="${LINE}" stroke-width="2.2"/>`;
  }
  s+=eye(L,-1)+eye(R,1)+brows+`<g class="m-closed">${c}</g><g class="m-open">${o}</g>`;
  if(expr==='shock') s+=`<path d="M100,96 L78,76 M90,136 L62,128 M300,96 L322,76 M310,136 L338,128" ${ST(4.5)}/>`;
  return `<svg viewBox="0 0 400 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="재판장 해치 ${EXPR_LABEL[expr]||expr}">${s}</svg>`;
}
