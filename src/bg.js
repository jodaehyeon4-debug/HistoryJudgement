/* ===== 배경: 빛과 원근이 있는 법정 ===== */
const SV=`<svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">`;
function dancheong(y,h,p){ // 단청 띠: 머리초 무늬를 단순화
  let s=`<rect x="0" y="${y}" width="1600" height="${h}" fill="url(#${p}dc)"/>`;
  const cy=y+h/2;
  for(let x=0;x<1600;x+=140){
    const cx=x+70;
    s+=`<path d="M${x},${y+6} L${x+18},${cy} L${x},${y+h-6}" fill="none" stroke="#f3ead6" stroke-width="5"/><path d="M${x+10},${y+6} L${x+28},${cy} L${x+10},${y+h-6}" fill="none" stroke="#b8452f" stroke-width="4"/>`;
    for(let k=0;k<8;k++){ const a=k*Math.PI/4; s+=`<ellipse cx="${(cx+Math.cos(a)*24).toFixed(1)}" cy="${(cy+Math.sin(a)*24*h/110).toFixed(1)}" rx="9" ry="${(6*h/110).toFixed(1)}" fill="#f3ead6" opacity=".9" transform="rotate(${k*45} ${(cx+Math.cos(a)*24).toFixed(1)} ${(cy+Math.sin(a)*24*h/110).toFixed(1)})"/>`; }
    s+=`<circle cx="${cx}" cy="${cy}" r="${Math.min(22,h*.24)}" fill="#e7c46a" stroke="#1d3b34" stroke-width="3"/><circle cx="${cx}" cy="${cy}" r="${Math.min(10,h*.11)}" fill="#b8452f"/>`;
  }
  return s+`<rect x="0" y="${y+h-5}" width="1600" height="5" fill="#1d3b34"/>`;
}
function pillar(x,w,p){ return `<rect x="${x}" y="0" width="${w}" height="900" fill="url(#${p}pl)"/><rect x="${x-6}" y="110" width="${w+12}" height="40" fill="#2f6b5e"/><rect x="${x-6}" y="118" width="${w+12}" height="7" fill="#e7c46a"/><rect x="${x-6}" y="136" width="${w+12}" height="6" fill="#b8452f"/>`; }
function commonDefs(p){
  return lg(p+'dc',[[0,'#3f8574'],[.5,'#2f6b5e'],[1,'#21503f']])+
    lg(p+'pl',[[0,'#4a1a12'],[.35,'#9c3f2a'],[.55,'#b5513a'],[1,'#3e140d']],1,0)+
    lg(p+'ray',[[0,'#fff1c9',.38],[1,'#fff1c9',0]])+
    `<filter id="${p}bl" x="-5%" y="-5%" width="110%" height="110%"><feGaussianBlur stdDeviation="2.2"/></filter>`;
}
function floor(p,vx,vy,y0,c1,c2){
  let s=`<rect x="0" y="${y0}" width="1600" height="${900-y0}" fill="url(#${p}fl)"/>`;
  s=`<defs>${lg(p+'fl',[[0,c1],[1,c2]])}</defs>`+s;
  for(let i=-10;i<=10;i++){ const xb=800+i*170, xt=vx+(xb-vx)*(y0-vy)/(900-vy); s+=`<path d="M${xt.toFixed(0)},${y0} L${xb},900" stroke="#1f120a" stroke-width="2" opacity=".35"/>`; }
  for(let k=0;k<6;k++){ const t=Math.pow(k/6,1.8), y=y0+(900-y0)*t; s+=`<path d="M0,${y.toFixed(0)} H1600" stroke="#1f120a" stroke-width="1.5" opacity=".25"/>`; }
  return s;
}
const BG={};
BG.witness=(()=>{ const p='bw';
  let s=SV+`<defs>${commonDefs(p)}${lg(p+'wall',[[0,'#3a2418'],[1,'#5b3826']])}<radialGradient id="${p}glow" cx=".5" cy=".42" r=".62"><stop offset="0" stop-color="#ffe7b0"/><stop offset=".55" stop-color="#f1c47e"/><stop offset="1" stop-color="#b27a44"/></radialGradient>`+
    `<pattern id="${p}lat" width="64" height="64" patternUnits="userSpaceOnUse"><path d="M32,0 V64 M0,32 H64" stroke="#4a2a16" stroke-width="5"/><rect x="2.5" y="2.5" width="59" height="59" fill="none" stroke="#4a2a16" stroke-width="5"/><path d="M32,12 L52,32 L32,52 L12,32 Z" fill="none" stroke="#4a2a16" stroke-width="3"/></pattern></defs>`;
  s+=`<g filter="url(#${p}bl)"><rect width="1600" height="900" fill="url(#${p}wall)"/>`;
  s+=`<rect x="360" y="178" width="880" height="452" fill="url(#${p}glow)"/><rect x="360" y="178" width="880" height="452" fill="url(#${p}lat)"/><rect x="360" y="178" width="880" height="452" fill="none" stroke="#2c170c" stroke-width="20"/><path d="M800,178 V630" stroke="#2c170c" stroke-width="14"/>`;
  s+=`<rect x="200" y="200" width="130" height="420" fill="#2c1a10" opacity=".55"/><rect x="1270" y="200" width="130" height="420" fill="#2c1a10" opacity=".55"/>`;
  s+=pillar(150,120,p)+pillar(1330,120,p)+dancheong(0,110,p);
  s+=floor(p,800,520,640,'#7a4e2c','#2e1b10');
  s+=`<polygon points="430,180 620,180 980,900 560,900" fill="url(#${p}ray)" opacity=".55"/><polygon points="980,180 1150,180 1330,900 1010,900" fill="url(#${p}ray)" opacity=".4"/></g>`;
  return s+`</svg>`;
})();
BG.judge=(()=>{ const p='bj';
  let s=SV+`<defs>${commonDefs(p)}${lg(p+'wall',[[0,'#121829'],[1,'#26304f']])}<radialGradient id="${p}spot" cx=".5" cy=".18" r=".55"><stop offset="0" stop-color="#ffe6a8" stop-opacity=".55"/><stop offset="1" stop-color="#ffe6a8" stop-opacity="0"/></radialGradient>`+
    lg(p+'gold',[[0,'#fbe7a1'],[.5,'#d9a93f'],[1,'#8a5f17']],.7,1)+`<radialGradient id="${p}disk" cx=".5" cy=".4" r=".6"><stop offset="0" stop-color="#2c3760"/><stop offset="1" stop-color="#141a30"/></radialGradient></defs>`;
  s+=`<g filter="url(#${p}bl)"><rect width="1600" height="900" fill="url(#${p}wall)"/>`;
  for(let i=0;i<9;i++){ const x=160+i*160; s+=`<rect x="${x}" y="150" width="120" height="560" fill="#0f1426" opacity=".5"/><rect x="${x+10}" y="160" width="100" height="540" fill="none" stroke="#2c3760" stroke-width="3"/>`; }
  s+=`<circle cx="800" cy="330" r="226" fill="url(#${p}disk)" stroke="url(#${p}gold)" stroke-width="16"/><circle cx="800" cy="330" r="198" fill="none" stroke="#d9a93f" stroke-width="3" stroke-dasharray="4 12"/>`;
  for(let k=0;k<12;k++){ const a=k*30*Math.PI/180; s+=`<circle cx="${(800+Math.cos(a)*212).toFixed(1)}" cy="${(330+Math.sin(a)*212).toFixed(1)}" r="6" fill="#f6d77a"/>`; }
  s+=`<g stroke="url(#${p}gold)" fill="none" stroke-linecap="round"><path d="M800,186 V478" stroke-width="13"/><path d="M650,246 Q800,226 950,246" stroke-width="11"/><path d="M650,246 L610,344 M650,246 L690,344 M950,246 L910,344 M950,246 L990,344" stroke-width="4"/></g>`;
  s+=`<path d="M596,344 Q650,392 704,344 Z M896,344 Q950,392 1004,344 Z" fill="url(#${p}gold)" stroke="#6b4a12" stroke-width="3"/><path d="M736,500 H864 L842,474 H758 Z" fill="url(#${p}gold)"/><path d="M788,198 C788,176 796,160 810,148 C812,166 812,184 810,198 Z" fill="url(#${p}gold)" stroke="#6b4a12" stroke-width="2"/>`;
  s+=`<rect x="200" y="170" width="120" height="460" fill="#6e2a24"/><rect x="1280" y="170" width="120" height="460" fill="#6e2a24"/><rect x="208" y="178" width="104" height="444" fill="none" stroke="#d9a93f" stroke-width="4"/><rect x="1288" y="178" width="104" height="444" fill="none" stroke="#d9a93f" stroke-width="4"/>`;
  s+=`<text x="260" y="430" font-size="92" fill="#f3ead6" text-anchor="middle" font-family="Gowun Batang,Nanum Myeongjo,serif">公</text><text x="1340" y="430" font-size="92" fill="#f3ead6" text-anchor="middle" font-family="Gowun Batang,Nanum Myeongjo,serif">正</text>`;
  s+=pillar(60,110,p)+pillar(1430,110,p)+dancheong(0,110,p)+`<rect width="1600" height="900" fill="url(#${p}spot)"/></g>`;
  return s+`</svg>`;
})();
BG.side=(()=>{ const p='bs';
  let s=SV+`<defs>${commonDefs(p)}${lg(p+'wall',[[0,'#4a2e1c'],[1,'#6b4429']])}${lg(p+'shelf',[[0,'#3a2213'],[1,'#24140a']])}<radialGradient id="${p}lamp" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffe2a0" stop-opacity=".9"/><stop offset="1" stop-color="#ffb860" stop-opacity="0"/></radialGradient>`+
    `<radialGradient id="${p}sc" cx=".4" cy=".35" r=".7"><stop offset="0" stop-color="#fbf1d9"/><stop offset="1" stop-color="#c9b083"/></radialGradient></defs>`;
  s+=`<g filter="url(#${p}bl)"><rect width="1600" height="900" fill="url(#${p}wall)"/>`;
  const rib=['#b8452f','#2f6b5e','#d9a93f','#26395f'];
  for(let r=0;r<3;r++){ const y=168+r*170;
    s+=`<rect x="110" y="${y}" width="1380" height="150" fill="url(#${p}shelf)"/>`;
    for(let i=0;i<26;i++){ if((i*7+r*3)%9===0) continue; const cx=146+i*52, cy=y+104;
      s+=`<circle cx="${cx}" cy="${cy}" r="22" fill="url(#${p}sc)" stroke="#5a3a1e" stroke-width="3"/><circle cx="${cx}" cy="${cy}" r="7" fill="#8a5233"/><circle cx="${cx}" cy="${cy}" r="3" fill="#3a2010"/>`;
      if((i+r)%4===0) s+=`<rect x="${cx-5}" y="${cy-46}" width="10" height="20" fill="${rib[(i+r)%4]}"/>`; }
    s+=`<rect x="100" y="${y+128}" width="1400" height="22" fill="#5a341d"/><rect x="100" y="${y+128}" width="1400" height="4" fill="#8a5a34"/>`; }
  s+=pillar(30,80,p)+pillar(1490,80,p)+dancheong(0,110,p);
  s+=`<circle cx="400" cy="170" r="150" fill="url(#${p}lamp)"/><circle cx="1200" cy="170" r="150" fill="url(#${p}lamp)"/></g>`;
  return s+`</svg>`;
})();
BG.action=(color)=>{ // 결정적인 순간의 집중선: 중심은 밝게, 가장자리는 어둡게, 굵고 가는 선을 섞음
  let s=SV+`<defs><radialGradient id="ac" cx=".5" cy=".46" r=".62"><stop offset="0" stop-color="#fffbe8"/><stop offset=".22" stop-color="${color}"/><stop offset=".75" stop-color="#0b0d18"/><stop offset="1" stop-color="#020308"/></radialGradient></defs><rect width="1600" height="900" fill="url(#ac)"/>`;
  for(let i=0;i<90;i++){ const a=i*4*Math.PI/180+((i*37)%7)*0.004, wdt=0.012+((i*53)%5)*0.008, r1=150+((i*29)%9)*28;
    s+=`<polygon points="${(800+Math.cos(a)*r1).toFixed(0)},${(414+Math.sin(a)*r1).toFixed(0)} ${(800+Math.cos(a-wdt)*1400).toFixed(0)},${(414+Math.sin(a-wdt)*1400).toFixed(0)} ${(800+Math.cos(a+wdt)*1400).toFixed(0)},${(414+Math.sin(a+wdt)*1400).toFixed(0)}" fill="#ffffff" opacity="${(0.16+((i*13)%6)*0.05).toFixed(2)}"/>`; }
  s+=`<ellipse cx="800" cy="414" rx="330" ry="250" fill="#fffbe8" opacity=".22"/>`;
  return s+`</svg>`;
};
/* 책상: 원근이 보이는 윗면 + 조각된 앞판 */
function plate(x,t){ return `<g><rect x="${x-120}" y="782" width="240" height="72" rx="6" fill="url(#dkG)" stroke="#2a160c" stroke-width="5"/><rect x="${x-108}" y="792" width="216" height="52" rx="3" fill="none" stroke="#6b4a12" stroke-width="2"/><text x="${x}" y="834" text-anchor="middle" font-size="44" font-family="Black Han Sans,Noto Sans KR,sans-serif" fill="#2a160c">${t}</text></g>`; }
const DKDEFS=`<defs>${lg('dkW',[[0,'#9a6338'],[1,'#5e3720']])}${lg('dkF',[[0,'#6b3f22'],[1,'#3b2010']])}${lg('dkG',[[0,'#fbe7a1'],[.5,'#e2b54e'],[1,'#a8761f']],.6,1)}${lg('dkP',[[0,'#7a4a2a'],[1,'#4a2a16']])}</defs>`;
const DESK={};
DESK.witness=SV+DKDEFS+`<path d="M520,700 L1080,700 L1110,736 L490,736 Z" fill="url(#dkW)" stroke="#2a160c" stroke-width="6"/><path d="M490,736 L1110,736 L1130,910 L470,910 Z" fill="url(#dkF)" stroke="#2a160c" stroke-width="6"/>`+
  `<rect x="540" y="760" width="200" height="130" rx="6" fill="url(#dkP)" stroke="#2a160c" stroke-width="4"/><rect x="860" y="760" width="200" height="130" rx="6" fill="url(#dkP)" stroke="#2a160c" stroke-width="4"/><path d="M500,742 H1100" stroke="#d9a93f" stroke-width="5"/>`+
  `<circle cx="800" cy="818" r="58" fill="url(#dkG)" stroke="#2a160c" stroke-width="6"/><circle cx="800" cy="818" r="46" fill="none" stroke="#6b4a12" stroke-width="2"/><text x="800" y="842" text-anchor="middle" font-size="64" font-family="Gowun Batang,Nanum Myeongjo,serif" fill="#2a160c">證</text><path d="M560,712 L720,712" stroke="#ffffff" stroke-width="3" opacity=".25"/></svg>`;
DESK.judge=SV+DKDEFS+`<path d="M110,622 L1490,622 L1510,664 L90,664 Z" fill="url(#dkW)" stroke="#2a160c" stroke-width="6"/><rect x="90" y="664" width="1420" height="260" fill="url(#dkF)" stroke="#2a160c" stroke-width="6"/>`+
  `<rect x="150" y="694" width="380" height="190" rx="8" fill="url(#dkP)" stroke="#2a160c" stroke-width="4"/><rect x="1070" y="694" width="380" height="190" rx="8" fill="url(#dkP)" stroke="#2a160c" stroke-width="4"/><path d="M100,672 H1500" stroke="#d9a93f" stroke-width="6"/>`+
  `<circle cx="800" cy="790" r="70" fill="url(#dkG)" stroke="#2a160c" stroke-width="6"/><circle cx="800" cy="790" r="56" fill="none" stroke="#6b4a12" stroke-width="2"/><text x="800" y="818" text-anchor="middle" font-size="76" font-family="Gowun Batang,Nanum Myeongjo,serif" fill="#2a160c">判</text>`+
  `<g transform="translate(1180 596)"><rect x="-70" y="10" width="140" height="18" rx="6" fill="#4a2a16" stroke="#2a160c" stroke-width="3"/><rect x="-14" y="-22" width="90" height="26" rx="12" fill="#7a4a2a" stroke="#2a160c" stroke-width="3" transform="rotate(-14)"/></g></svg>`;
function sideDesk(platex,stackx){ return SV+DKDEFS+`<path d="M-20,700 L1620,700 L1620,738 L-20,738 Z" fill="url(#dkW)" stroke="#2a160c" stroke-width="6"/><rect x="-20" y="738" width="1640" height="180" fill="url(#dkF)" stroke="#2a160c" stroke-width="6"/><path d="M-20,744 H1620" stroke="#d9a93f" stroke-width="5"/>`+
  `<g stroke="#2a160c" stroke-width="4"><rect x="${stackx}" y="650" width="240" height="54" rx="10" fill="#f1e2bf"/><rect x="${stackx+20}" y="606" width="210" height="48" rx="10" fill="#e9d6ab"/><rect x="${stackx+40}" y="566" width="170" height="44" rx="10" fill="#f6ead0"/><rect x="${stackx+120}" y="572" width="12" height="30" fill="#2f6b5e"/></g>`+
  `<g transform="translate(${stackx>800?stackx-260:stackx+330} 664)"><rect x="0" y="10" width="120" height="30" rx="8" fill="#2a2730" stroke="#2a160c" stroke-width="3"/><path d="M20,0 L110,-30" stroke="#5a3a1e" stroke-width="10" stroke-linecap="round"/><path d="M108,-30 L126,-36" stroke="#1c1a20" stroke-width="12" stroke-linecap="round"/></g>`+plate(platex,platex<800?'검사':'변호인')+`</svg>`; }
DESK.pros=sideDesk(330,1040);
DESK.def=sideDesk(1270,320);

/* 증거 그림 */
function evIcon(k){
  const W='#f6edd8', B='#2a1a14', Gd='#d9a93f', svg=b=>`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${b}</svg>`;
  switch(k){
    case 'scroll': return svg(`<rect x="18" y="22" width="64" height="56" fill="${W}" stroke="${B}" stroke-width="3"/><path d="M28,34 H72 M28,44 H68 M28,54 H72 M28,64 H60" stroke="#7a6446" stroke-width="2.4"/><rect x="10" y="16" width="12" height="68" rx="5" fill="#8a5233" stroke="${B}" stroke-width="3"/><rect x="78" y="16" width="12" height="68" rx="5" fill="#8a5233" stroke="${B}" stroke-width="3"/>`);
    case 'book': return svg(`<rect x="22" y="12" width="58" height="78" rx="3" fill="#c9b083" stroke="${B}" stroke-width="3"/><rect x="26" y="14" width="52" height="74" fill="#e8d7b0"/><path d="M26,24 H22 M26,40 H22 M26,56 H22 M26,72 H22" stroke="${B}" stroke-width="3"/><rect x="50" y="22" width="20" height="44" fill="${W}" stroke="${B}" stroke-width="2"/><path d="M60,28 V60" stroke="#7a6446" stroke-width="2"/><path d="M10,70 L36,92 M18,62 L44,84" stroke="#3d4566" stroke-width="5" stroke-linecap="round"/>`);
    case 'prison': return svg(`<rect x="16" y="18" width="68" height="64" rx="4" fill="#5a3a26" stroke="${B}" stroke-width="3"/><path d="M30,18 V82 M44,18 V82 M58,18 V82 M72,18 V82" stroke="#2a2730" stroke-width="6"/><path d="M16,40 H84" stroke="#2a2730" stroke-width="6"/><rect x="34" y="52" width="32" height="24" fill="${W}" stroke="${B}" stroke-width="2"/>`);
    case 'timeline': return svg(`<rect x="8" y="44" width="84" height="12" rx="6" fill="#d9c49a" stroke="${B}" stroke-width="3"/><circle cx="26" cy="50" r="7" fill="${W}" stroke="${B}" stroke-width="3"/><circle cx="60" cy="50" r="11" fill="${Gd}" stroke="${B}" stroke-width="3"/><circle cx="84" cy="50" r="7" fill="${W}" stroke="${B}" stroke-width="3"/><text x="60" y="30" font-size="18" font-weight="900" text-anchor="middle" fill="${B}" font-family="Noto Sans KR,sans-serif">642</text><path d="M60,62 V78" stroke="${B}" stroke-width="3"/>`);
    case 'army': return svg(`<path d="M24,86 V18 M50,86 V12 M76,86 V18" stroke="#5a3a1e" stroke-width="4"/><path d="M24,18 L46,26 L24,36 Z" fill="#3f8a8f" stroke="${B}" stroke-width="2.5"/><path d="M50,12 L74,20 L50,30 Z" fill="${Gd}" stroke="${B}" stroke-width="2.5"/><path d="M76,18 L96,26 L76,36 Z" fill="#3f8a8f" stroke="${B}" stroke-width="2.5"/><text x="50" y="72" font-size="17" font-weight="900" text-anchor="middle" fill="${B}" font-family="Noto Sans KR,sans-serif">13만+5만</text>`);
    case 'alliance': return svg(`<path d="M18,88 L58,14 M82,88 L42,14" stroke="#5a3a1e" stroke-width="5"/><path d="M58,14 L80,22 L66,36 Z" fill="#26395f" stroke="${B}" stroke-width="2.5"/><path d="M42,14 L20,22 L34,36 Z" fill="#6a3d8f" stroke="${B}" stroke-width="2.5"/><circle cx="50" cy="56" r="10" fill="${Gd}" stroke="${B}" stroke-width="3"/>`);
    case 'censer': return svg(`<path d="M50,8 C56,18 62,20 60,30 C66,30 70,36 68,42 L32,42 C30,36 34,30 40,30 C38,20 44,18 50,8 Z" fill="${Gd}" stroke="${B}" stroke-width="2.5"/><path d="M28,44 H72 C72,62 62,70 50,70 C38,70 28,62 28,44 Z" fill="#c99a3b" stroke="${B}" stroke-width="2.5"/><path d="M44,70 L40,84 H60 L56,70" fill="#a8761f" stroke="${B}" stroke-width="2.5"/><rect x="30" y="84" width="40" height="8" rx="3" fill="#8a5f17" stroke="${B}" stroke-width="2.5"/><path d="M36,52 Q50,58 64,52" stroke="#7a5414" stroke-width="2" fill="none"/>`);
    case 'cliff': return svg(`<rect x="0" y="62" width="100" height="38" fill="#4f88a6"/><path d="M0,70 Q25,64 50,70 T100,70" stroke="#d6eef8" stroke-width="2" fill="none"/><path d="M4,62 L16,30 L34,18 L52,26 L58,62 Z" fill="#7d7468" stroke="${B}" stroke-width="3"/><path d="M60,22 C66,16 74,16 76,24" stroke="#d47b8a" stroke-width="4" stroke-linecap="round" fill="none"/>`);
    case 'map': return svg(`<rect x="8" y="12" width="84" height="76" rx="3" fill="#efe2c2" stroke="${B}" stroke-width="3"/><path d="M8,40 C24,34 30,52 44,50 C56,48 54,30 66,28 C76,26 84,34 92,30 L92,88 L8,88 Z" fill="#cfe0b8"/><path d="M14,30 C30,40 40,44 52,56" stroke="#26395f" stroke-width="4" stroke-dasharray="6 4" fill="none"/><path d="M88,20 C78,40 70,52 58,60" stroke="#2f6b5e" stroke-width="4" stroke-dasharray="6 4" fill="none"/><circle cx="56" cy="60" r="6" fill="${Gd}" stroke="${B}" stroke-width="2.5"/>`);
  }
  return svg('');
}
function logoSVG(){
  return `<svg viewBox="0 0 900 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="역사재판"><defs>${lg('lgG',[[0,'#fff1b8'],[.45,'#f0c75e'],[1,'#a8761f']])}<filter id="lgR" x="-5%" y="-10%" width="110%" height="120%"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="4"/><feDisplacementMap in="SourceGraphic" scale="5"/></filter></defs>`+
    `<path d="M40,170 C180,130 420,150 860,120" stroke="#26395f" stroke-width="34" stroke-linecap="round" opacity=".9" filter="url(#lgR)"/>`+
    `<text x="450" y="176" text-anchor="middle" font-size="168" font-family="Black Han Sans,Noto Sans KR,sans-serif" fill="url(#lgG)" stroke="#1a110b" stroke-width="12" paint-order="stroke" filter="url(#lgR)" letter-spacing="8">역사재판</text></svg>`;
}
