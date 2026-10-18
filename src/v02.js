
(function(){
'use strict';
const OUT='#2a2118';
const $=s=>document.querySelector(s);
const wait=ms=>new Promise(r=>setTimeout(r,ms));
const store={get(k){try{return localStorage.getItem(k);}catch(e){return null;}},set(k,v){try{localStorage.setItem(k,v);}catch(e){}}};
const shuffle=a=>{const b=a.slice();for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));const t=b[i];b[i]=b[j];b[j]=t;}return b;};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

/* ===== BGM 엔진: 모든 곡을 이 페이지가 코드로 직접 연주 (음원 파일·다른 게임 음악 없음) ===== */
const NOTE={C:0,D:2,E:4,F:5,G:7,A:9,B:11};
function nm(s){ const r=/^([A-G])([#b]?)(-?\d)$/.exec(s); if(!r) throw new Error('음 이름 오류: '+s); return 12*(+r[3]+1)+NOTE[r[1]]+(r[2]==='#'?1:r[2]==='b'?-1:0); }
const mf=m=>440*Math.pow(2,(m-69)/12);
function seqParse(str){ const ev=[]; let pos=0; str.trim().split(/\s+/).forEach(tok=>{ if(tok==='|') return; const p=tok.split(':'); const len=p[1]?+p[1]:1; if(p[0]!=='-') ev.push({s:pos,m:nm(p[0]),len:len}); pos+=len; }); return {ev:ev,total:pos}; }

/* 곡 악보. chords: 마디마다 화음 / pat: 한 칸 = 한 박 조각 (r 근음, R 옥타브, 5 오도, 숫자 = 화음 구성음) / seq: 음:길이 */
const TRACKS={
  open:{title:'개정 · 역사 법정이 열린다', scene:'재판 시작, 판결 낭독', meta:'4/4 느림 · 징, 북, 브라스, 현악', bpm:80, spb:2, bar:8, bars:8, gain:.9,
    chords:[['D3','F3','A3'],['Bb3','D4','F4'],['C4','E4','G4'],['D3','F3','A3'],['G3','Bb3','D4'],['Bb3','D4','F4'],['A3','C#4','E4'],['A3','C#4','E4']],
    parts:[{inst:'pad',v:1},{inst:'brass',pat:'x.......',len:3,v:.8},{inst:'bass',pat:'r...r...',len:3.5},
      {inst:'lead',seq:'A4:4 D5:2 C5:2 | Bb4:6 A4:2 | G4:3 A4:1 C5:4 | D5:8 | F5:4 E5:2 D5:2 | D5:3 C5:1 Bb4:4 | A4:2 C#5:2 E5:2 G5:2 | A5:6 -:2'}],
    drums:{buk:'x...x...', tak:'....o...', jing:'x'+'.'.repeat(31)}},
  investigate:{title:'조사 · 사초 서고', scene:'증거 모으기, 증언 가르기', meta:'4/4 보통 · 가야금, 대금', bpm:92, spb:2, bar:8, bars:8, gain:.8,
    chords:[['F3','A3','C4'],['D3','F3','A3'],['Bb3','D4','F4'],['C4','E4','G4'],['F3','A3','C4'],['A3','C4','E4'],['Bb3','D4','F4'],['C4','E4','G4']],
    parts:[{inst:'pluck',pat:'0.1.2.1.',oct:1,v:.6},{inst:'pad',v:.5},{inst:'bass',pat:'r...r...',len:3},
      {inst:'lead',seq:'A4:4 C5:2 D5:2 | F5:6 D5:2 | D5:3 C5:1 F5:4 | G5:8 | A5:4 G5:2 F5:2 | E5:3 C5:1 A4:4 | Bb4:2 C5:2 D5:2 F5:2 | E5:6 -:2'}],
    drums:{kung:'x.......', tak:'....o...'}},
  testimony:{title:'증언 · 진실과 거짓 사이', scene:'피고와 증인의 증언', meta:'4/4 보통 · 가야금 분산화음, 대금', bpm:104, spb:2, bar:8, bars:8, gain:.85,
    chords:[['A3','C4','E4'],['F3','A3','C4'],['G3','B3','D4'],['E3','G3','B3'],['A3','C4','E4'],['F3','A3','C4'],['D3','F3','A3'],['E3','G#3','B3']],
    parts:[{inst:'bass',pat:'r.rr.rR.'},{inst:'pluck',pat:'0.1.2.1.',oct:1,v:.75},{inst:'pad',v:.6},
      {inst:'lead',seq:'E5:3 C5:1 B4:2 A4:2 | C5:4 A4:4 | B4:3 D5:1 G5:4 | E5:8 | A5:3 G5:1 E5:2 C5:2 | D5:2 C5:2 A4:4 | F5:3 E5:1 D5:2 C5:2 | B4:4 G#4:4'}],
    drums:{hat:'x.x.x.x.', tak:'....x...', kung:'x.....x.'}},
  cross:{title:'추궁 · 자진모리', scene:'증언을 흔들 때', meta:'12/8 빠름 · 장구, 북, 브라스, 태평소풍 선율', bpm:108, spb:3, bar:12, bars:8, gain:.9,
    chords:[['E3','G3','B3'],['E3','G3','B3'],['C3','E3','G3'],['D3','F#3','A3'],['E3','G3','B3'],['E3','G3','B3'],['C3','E3','G3'],['B2','D#3','F#3']],
    parts:[{inst:'bass',pat:'rrRrr5rrRr5R',v:.9},{inst:'brass',pat:'x.....x..x..',oct:1,v:.8},{inst:'pluck',pat:'012102012102',oct:1,v:.42},
      {inst:'lead',seq:'E5:3 G5:2 A5:1 B5:3 A5:3 | G5:2 E5:1 D5:3 E5:6 | G5:3 A5:2 B5:1 C6:3 B5:3 | A5:2 F#5:1 D5:3 A5:6 | B5:3 D6:2 E6:1 D6:3 B5:3 | A5:2 G5:1 E5:3 G5:6 | E5:2 G5:1 C6:3 B5:2 A5:1 G5:3 | F#5:3 D#5:3 B4:6'}],
    drums:{buk:'X..x..X..x..', tak:'..x.xx..x.x.', hat:'x.xx.xx.xx.x', crash:'x'+'.'.repeat(95)}},
  crisis:{title:'위기 · 몰린 검사', scene:'재판부 신뢰가 2칸 이하일 때', meta:'4/4 느림 · 심장 박동, 낮은 현악, 종', bpm:66, spb:2, bar:8, bars:4, gain:1,
    chords:[['C3','Eb3','G3'],['Db3','F3','Ab3'],['C3','Eb3','G3'],['B2','D3','F3']],
    parts:[{inst:'pad',v:.9},{inst:'bass',seq:'C2:8 | Db2:8 | C2:8 | B1:8'},
      {inst:'bell',seq:'G5:3 -:1 Ab5:2 -:2 | -:8 | G5:2 F5:2 Eb5:2 D5:2 | -:4 B4:4'}],
    drums:{kung:'x.x.....', hat:'o.o.o.o.'}},
  turnabout:{title:'역전 · 휘모리', scene:'모순을 찔렀을 때', meta:'4/4 아주 빠름 · 북, 장구, 브라스, 태평소풍 선율', bpm:152, spb:4, bar:16, bars:8, gain:.78,
    chords:[['G3','Bb3','D4'],['Eb3','G3','Bb3'],['F3','A3','C4'],['D3','F#3','A3'],['G3','Bb3','D4'],['Eb3','G3','Bb3'],['C3','Eb3','G3'],['D3','F#3','A3']],
    parts:[{inst:'bass',pat:'r.rRr.rRr.rRr.R5'},{inst:'brass',pat:'x..x..x...x..x..',oct:1,len:2,v:.75},{inst:'pad',oct:1,v:.7},
      {inst:'lead',bright:true,seq:'D5:4 G5:4 A5:2 Bb5:2 A5:4 | G5:6 F5:2 Eb5:4 G5:4 | A5:4 C6:4 Bb5:2 A5:2 F5:4 | F#5:8 A5:4 D6:4 | G5:2 A5:2 Bb5:4 D6:4 C6:2 Bb5:2 | Bb5:6 C6:2 Eb6:8 | D6:4 C6:2 Bb5:2 G5:4 Eb6:4 | D6:8 A5:4 F#5:4'}],
    drums:{buk:'X...x...X...x...', snare:'....X.......X...', tak:'..x...x...x.x.x.', hat:'x.x.x.x.x.x.x.x.', crash:'x'+'.'.repeat(63)}},
  verdict:{title:'판결 · 선고', scene:'판결이 내려질 때', meta:'4/4 경쾌 · 징, 브라스, 현악', bpm:116, spb:2, bar:8, bars:8, gain:.85,
    chords:[['C4','E4','G4'],['F3','A3','C4'],['G3','B3','D4'],['C4','E4','G4'],['A3','C4','E4'],['F3','A3','C4'],['G3','B3','D4'],['C4','E4','G4']],
    parts:[{inst:'brass',pat:'x...x...',len:3,v:.7},{inst:'pad',v:.6},{inst:'bass',pat:'r.R.r.R.'},
      {inst:'lead',bright:true,seq:'C5:2 E5:2 G5:4 | A5:3 G5:1 F5:2 A5:2 | G5:4 D5:2 E5:2 | C5:8 | E5:2 A5:2 C6:4 | C6:3 A5:1 G5:2 F5:2 | G5:2 A5:2 B5:2 D6:2 | C6:8'}],
    drums:{buk:'x...x...', snare:'....x...', tak:'..x...x.', hat:'x.x.x.x.', jing:'x'+'.'.repeat(63)}}
};
const TRACK_ORDER=['open','investigate','testimony','cross','crisis','turnabout','verdict'];
const STINGS=[['objection','이의 있습니다!'],['hold','잠깐만요!'],['evidence','증거 제시'],['breakdown','피고 무너짐'],['wrong','헛 제시'],['gavel','의사봉'],['title','장 전환']];

const Music=(function(){
  let ctx=null, master=null, bus=null, timer=null, cur=null, curId=null, step=0, nextT=0, noiseBuf=null;
  let enabled=store.get('yj-sound')!=='off', volume=Math.min(1,Math.max(0,+(store.get('yj-vol')||'60')/100));
  const listeners=[], compiled={}, HEAD=0.45; // 여유 음량: 100%에서도 찢어지지 않게
  function ensure(){
    if(ctx) return ctx;
    const C=window.AudioContext||window.webkitAudioContext; if(!C) return null;
    try{ ctx=new C(); }catch(e){ ctx=null; return null; }
    const comp=ctx.createDynamicsCompressor(); comp.threshold.value=-18; comp.knee.value=10; comp.ratio.value=6; comp.attack.value=0.004; comp.release.value=0.25;
    master=ctx.createGain(); master.gain.value=enabled?volume*HEAD:0; master.connect(comp);
    const sh=ctx.createWaveShaper(), cv=new Float32Array(1024); for(let i=0;i<1024;i++){ const x=i/511.5-1; cv[i]=Math.tanh(1.4*x)/Math.tanh(1.4); } sh.curve=cv; // 부드러운 안전장치
    comp.connect(sh); sh.connect(ctx.destination);
    noiseBuf=ctx.createBuffer(1,ctx.sampleRate*2,ctx.sampleRate); const d=noiseBuf.getChannelData(0); for(let i=0;i<d.length;i++) d[i]=Math.random()*2-1;
    return ctx;
  }
  function resume(){ const c=ensure(); if(c&&c.state==='suspended'&&!document.hidden) c.resume(); }
  const O=(type,f,t)=>{ const o=ctx.createOscillator(); o.type=type; o.frequency.setValueAtTime(f,t); return o; };
  const G=v=>{ const g=ctx.createGain(); g.gain.value=v; return g; };
  const F=(type,f,q)=>{ const x=ctx.createBiquadFilter(); x.type=type; x.frequency.value=f; x.Q.value=q||0.7; return x; };

  /* 악기 */
  function pluck(out,t,m,d,v){ // 가야금 느낌: 밝게 튕기고 빨리 어두워짐, 첫머리에 살짝 꺾임
    const f=mf(m), g=G(0), lp=F('lowpass',Math.min(9000,f*8),5);
    lp.frequency.setValueAtTime(Math.min(9000,f*8),t); lp.frequency.exponentialRampToValueAtTime(Math.max(220,f*1.4),t+0.28);
    const o=O('sawtooth',f*1.012,t); o.frequency.exponentialRampToValueAtTime(f,t+0.05);
    const o2=O('triangle',f*2,t), g2=G(0.25), len=Math.min(1.5,Math.max(0.4,d*1.7));
    g.gain.setValueAtTime(0.0001,t); g.gain.exponentialRampToValueAtTime(0.3*v,t+0.004); g.gain.exponentialRampToValueAtTime(0.0001,t+len);
    o.connect(lp); o2.connect(g2); g2.connect(lp); lp.connect(g); g.connect(out);
    o.start(t); o2.start(t); o.stop(t+len+0.05); o2.stop(t+len+0.05);
  }
  function lead(out,t,m,d,v,bright){ // 대금(부드럽게) / 태평소(밝게): 늦게 걸리는 떨림, 긴 음은 아래에서 밀어 올림
    const f=mf(m), g=G(0), lp=F('lowpass',bright?4200:2400,1.1);
    const o1=O('sawtooth',f,t), o2=O('square',f,t); o2.detune.value=bright?9:-7;
    if(d>0.28){ [o1,o2].forEach(o=>{ o.frequency.setValueAtTime(f*0.97,t); o.frequency.exponentialRampToValueAtTime(f,t+0.07); }); }
    const lfo=O('sine',bright?6.4:5.2,t), lg=G(0);
    lg.gain.setValueAtTime(0,t); lg.gain.linearRampToValueAtTime(f*(bright?0.013:0.009),t+Math.min(0.3,d*0.5)+0.05);
    lfo.connect(lg); lg.connect(o1.frequency); lg.connect(o2.frequency);
    const m2=G(0.45); o1.connect(lp); o2.connect(m2); m2.connect(lp); lp.connect(g); g.connect(out);
    const pk=(bright?0.15:0.13)*v, rel=0.09, hold=Math.max(0.03,d-0.02);
    g.gain.setValueAtTime(0.0001,t); g.gain.exponentialRampToValueAtTime(pk,t+0.02); g.gain.setValueAtTime(pk*0.85,t+hold); g.gain.exponentialRampToValueAtTime(0.0001,t+d+rel);
    [o1,o2,lfo].forEach(o=>{ o.start(t); o.stop(t+d+rel+0.05); });
  }
  function bass(out,t,m,d,v){
    const f=mf(m), g=G(0), lp=F('lowpass',f*10,4);
    lp.frequency.setValueAtTime(f*10,t); lp.frequency.exponentialRampToValueAtTime(f*2.6,t+0.12);
    const o=O('sawtooth',f,t), o2=O('square',f,t), g2=G(0.3); o2.detune.value=-1200;
    const dd=Math.max(0.09,d*0.92);
    g.gain.setValueAtTime(0.0001,t); g.gain.exponentialRampToValueAtTime(0.28*v,t+0.008); g.gain.setValueAtTime(0.24*v,t+dd*0.6); g.gain.exponentialRampToValueAtTime(0.0001,t+dd);
    o.connect(lp); o2.connect(g2); g2.connect(lp); lp.connect(g); g.connect(out);
    o.start(t); o2.start(t); o.stop(t+dd+0.03); o2.stop(t+dd+0.03);
  }
  function pad(out,t,ns,d,v){
    const g=G(0), lp=F('lowpass',1500,0.7); lp.connect(g); g.connect(out);
    const a=Math.min(0.4,d*0.3), hold=Math.max(a+0.01,d-0.05), pk=0.055*v;
    g.gain.setValueAtTime(0.0001,t); g.gain.exponentialRampToValueAtTime(pk,t+a); g.gain.setValueAtTime(pk,t+hold); g.gain.exponentialRampToValueAtTime(0.0001,t+d+0.35);
    ns.forEach(m=>[-8,8].forEach(dt=>{ const o=O('sawtooth',mf(m),t); o.detune.value=dt; o.connect(lp); o.start(t); o.stop(t+d+0.4); }));
  }
  function brass(out,t,ns,d,v){
    const g=G(0), lp=F('lowpass',600,2); lp.connect(g); g.connect(out);
    lp.frequency.setValueAtTime(600,t); lp.frequency.exponentialRampToValueAtTime(3400,t+0.04); lp.frequency.exponentialRampToValueAtTime(1100,t+0.25);
    const dd=Math.max(0.12,d), pk=0.1*v;
    g.gain.setValueAtTime(0.0001,t); g.gain.exponentialRampToValueAtTime(pk,t+0.015); g.gain.exponentialRampToValueAtTime(pk*0.55,t+0.2); g.gain.setValueAtTime(pk*0.55,t+Math.max(0.21,dd-0.03)); g.gain.exponentialRampToValueAtTime(0.0001,t+dd+0.12);
    ns.forEach(m=>[-6,6].forEach(dt=>{ const o=O('sawtooth',mf(m),t); o.detune.value=dt; o.connect(lp); o.start(t); o.stop(t+dd+0.16); }));
  }
  function bell(out,t,m,d,v){
    const f=mf(m);
    [[1,0.16,2.0],[2.76,0.06,1.1],[5.4,0.025,0.5]].forEach(p=>{ const o=O('sine',f*p[0],t), g=G(0); g.gain.setValueAtTime(p[1]*v,t); g.gain.exponentialRampToValueAtTime(0.0001,t+p[2]); o.connect(g); g.connect(out); o.start(t); o.stop(t+p[2]+0.05); });
  }
  function nz(out,t,type,f,q,dec,vol){
    const s=ctx.createBufferSource(); s.buffer=noiseBuf; const fl=F(type,f,q), g=G(0);
    g.gain.setValueAtTime(vol,t); g.gain.exponentialRampToValueAtTime(0.0001,t+dec);
    s.connect(fl); fl.connect(g); g.connect(out); s.start(t,Math.random()*1.5); s.stop(t+dec+0.05);
  }
  function thump(out,t,f0,f1,dec,vol){ const o=O('sine',f0,t), g=G(0); o.frequency.exponentialRampToValueAtTime(f1,t+dec*0.4); g.gain.setValueAtTime(vol,t); g.gain.exponentialRampToValueAtTime(0.0001,t+dec); o.connect(g); g.connect(out); o.start(t); o.stop(t+dec+0.03); }
  const DRUM={
    buk:(out,t,v)=>{ thump(out,t,150,46,0.42,0.9*v); nz(out,t,'lowpass',900,0.7,0.05,0.25*v); },          // 북
    kung:(out,t,v)=>{ thump(out,t,120,70,0.3,0.55*v); },                                                   // 장구 북편
    tak:(out,t,v)=>{ nz(out,t,'bandpass',2600,2.5,0.07,0.55*v); const o=O('triangle',820,t), g=G(0); g.gain.setValueAtTime(0.16*v,t); g.gain.exponentialRampToValueAtTime(0.0001,t+0.04); o.connect(g); g.connect(out); o.start(t); o.stop(t+0.06); }, // 장구 채편
    snare:(out,t,v)=>{ nz(out,t,'highpass',1300,0.7,0.16,0.4*v); thump(out,t,200,160,0.09,0.22*v); },
    hat:(out,t,v)=>{ nz(out,t,'highpass',7500,0.7,0.035,0.15*v); },
    crash:(out,t,v)=>{ nz(out,t,'highpass',4800,0.5,1.4,0.3*v); },
    jing:(out,t,v)=>{ [[1,0.3],[1.012,0.18],[2.01,0.08],[2.98,0.04]].forEach(p=>{ const f=98*p[0], o=O('sine',f*1.02,t), g=G(0); o.frequency.exponentialRampToValueAtTime(f,t+0.6); g.gain.setValueAtTime(0.0001,t); g.gain.exponentialRampToValueAtTime(p[1]*v,t+0.03); g.gain.exponentialRampToValueAtTime(0.0001,t+3.2); o.connect(g); g.connect(out); o.start(t); o.stop(t+3.3); }); } // 징
  };

  /* 악보 → 칸별 사건 목록 */
  function compile(T){
    const len=T.bars*T.bar, sd=60/T.bpm/T.spb, steps=Array.from({length:len},()=>[]);
    const chordAt=s=>T.chords[Math.floor(s/T.bar)%T.chords.length].map(nm);
    T.parts.forEach(p=>{
      const v=p.v||1, oc=(p.oct||0)*12;
      if(p.seq){ seqParse(p.seq).ev.forEach(e=>{ if(e.s<len) steps[e.s].push({k:'n',i:p.inst,m:e.m+oc,d:e.len*sd,v:v,b:!!p.bright}); }); return; }
      if(p.inst==='pad'){ for(let b=0;b<T.bars;b++) steps[b*T.bar].push({k:'c',i:'pad',ns:chordAt(b*T.bar).map(n=>n+oc),d:T.bar*sd,v:v}); return; }
      for(let s=0;s<len;s++){
        const ch=p.pat[s%p.pat.length]; if(ch==='.') continue;
        const c=chordAt(s), d=sd*(p.len||1);
        if(p.inst==='bass'){ const base=36+(c[0]%12); const add={r:0,R:12,'5':7}[ch]||0; steps[s].push({k:'n',i:'bass',m:base+add,d:d,v:v}); }
        else if(p.inst==='brass') steps[s].push({k:'c',i:'brass',ns:c.map(n=>n+oc),d:d,v:v});
        else { const idx=+ch; steps[s].push({k:'n',i:p.inst,m:c[idx%c.length]+12*Math.floor(idx/c.length)+oc,d:d,v:v}); }
      }
    });
    Object.keys(T.drums||{}).forEach(dn=>{ const pat=T.drums[dn]; for(let s=0;s<len;s++){ const ch=pat[s%pat.length]; const v=ch==='X'?1:ch==='x'?.8:ch==='o'?.45:0; if(v) steps[s].push({k:'d',dn:dn,v:v}); } });
    return {steps:steps,len:len,sd:sd};
  }
  function fire(e,t){
    const out=bus; if(!out) return;
    if(e.k==='n'){ if(e.i==='lead') lead(out,t,e.m,e.d,e.v,e.b); else if(e.i==='pluck') pluck(out,t,e.m,e.d,e.v); else if(e.i==='bass') bass(out,t,e.m,e.d,e.v); else if(e.i==='bell') bell(out,t,e.m,e.d,e.v); }
    else if(e.k==='c'){ if(e.i==='pad') pad(out,t,e.ns,e.d,e.v); else brass(out,t,e.ns,e.d,e.v); }
    else DRUM[e.dn](out,t,e.v);
  }
  function tick(){ if(!cur||!ctx) return; while(nextT<ctx.currentTime+0.15){ const evs=cur.steps[step]; for(let i=0;i<evs.length;i++) fire(evs[i],nextT); nextT+=cur.sd; step=(step+1)%cur.len; } }
  function emit(){ listeners.forEach(f=>f(curId)); }
  function stop(fade){
    if(timer){ clearInterval(timer); timer=null; }
    if(bus&&ctx){ const b=bus, t=ctx.currentTime, f=fade||0.04; b.gain.cancelScheduledValues(t); b.gain.setValueAtTime(b.gain.value,t); b.gain.linearRampToValueAtTime(0,t+f); setTimeout(()=>{ try{ b.disconnect(); }catch(e){} },f*1000+600); }
    bus=null; cur=null; curId=null; emit();
  }
  function play(id){
    if(curId===id||!TRACKS[id]) return;
    if(!ensure()){ curId=id; emit(); return; }
    resume(); stop(0.4);
    cur=compiled[id]||(compiled[id]=compile(TRACKS[id])); curId=id;
    bus=G(TRACKS[id].gain||1); bus.connect(master);
    step=0; nextT=ctx.currentTime+0.06; tick(); timer=setInterval(tick,25); emit();
  }
  function sting(kind){
    if(!ensure()||!enabled) return; resume();
    const t=ctx.currentTime+0.02, out=G(1), N=a=>a.map(nm); out.connect(master);
    switch(kind){
      case 'objection': DRUM.crash(out,t,1); DRUM.buk(out,t,1); brass(out,t,N(['E3','B3','E4','G4','B4']),0.55,1.4); DRUM.jing(out,t+0.04,0.9); break;
      case 'hold': DRUM.tak(out,t,1); DRUM.tak(out,t+0.09,0.8); brass(out,t,N(['A3','E4','A4']),0.18,0.9); break;
      case 'evidence': DRUM.buk(out,t,0.9); brass(out,t,N(['D4','F#4','A4','D5']),0.3,1.1); break;
      case 'wrong': brass(out,t,N(['C3','Db3','Gb3']),0.6,1.1); DRUM.buk(out,t,1); break;
      case 'breakdown': ['E5','Eb5','D5','Db5','C5'].forEach((n,i)=>brass(out,t+i*0.13,[nm(n),nm(n)-12],0.13,1)); DRUM.jing(out,t+0.7,1); DRUM.crash(out,t+0.7,1); DRUM.buk(out,t+0.7,1); break;
      case 'gavel': [0,0.26,0.52].forEach(w=>{ DRUM.tak(out,t+w,1); DRUM.kung(out,t+w,1); }); break;
      case 'title': DRUM.jing(out,t,0.6); bell(out,t,nm('A5'),1,0.7); break;
    }
    setTimeout(()=>{ try{ out.disconnect(); }catch(e){} },4500);
  }
  function blip(who){
    if(!ctx||!enabled||ctx.state!=='running') return;
    const t=ctx.currentTime, f={judge:300,player:660,rival:540,defendant:420}[who]||480, o=O('square',f,t), g=G(0);
    g.gain.setValueAtTime(0.025,t); g.gain.exponentialRampToValueAtTime(0.0001,t+0.035); o.connect(g); g.connect(master); o.start(t); o.stop(t+0.05);
  }
  function setEnabled(on){ enabled=!!on; store.set('yj-sound',enabled?'on':'off'); if(master) master.gain.setTargetAtTime(enabled?volume*HEAD:0,ctx.currentTime,0.05); }
  function setVolume(p){ volume=Math.min(1,Math.max(0,p)); store.set('yj-vol',String(Math.round(volume*100))); if(master&&enabled) master.gain.setTargetAtTime(volume*HEAD,ctx.currentTime,0.05); }
  document.addEventListener('visibilitychange',()=>{ if(!ctx) return; if(document.hidden) ctx.suspend(); else ctx.resume(); });
  return {play:play, stop:stop, sting:sting, blip:blip, resume:resume, setEnabled:setEnabled, setVolume:setVolume,
    onChange:f=>listeners.push(f), compile:compile,
    get current(){ return curId; }, get on(){ return enabled; }, get volume(){ return volume; }};
})();
const SFX={ blip:w=>Music.blip(w), gavel:()=>Music.sting('gavel'), wrong:()=>Music.sting('wrong'), title:()=>Music.sting('title') };

/* ===== 캐릭터 찍어내기: 부품 + 공통 표정 ===== */
const EXPR_LABEL={normal:'보통',smug:'으스댐',sweat:'식은땀',shock:'충격',breakdown:'무너짐',angry:'화남',stern:'엄격',confident:'자신만만',present:'증거 제시',think:'생각',smile:'미소'};
const stk=w=>`fill="none" stroke="${OUT}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"`;
function drop(x,y,k){ k=k||1; return `<path d="M${x},${y} C${x-9*k},${y+15*k} ${x-9*k},${y+24*k} ${x},${y+26*k} C${x+9*k},${y+24*k} ${x+9*k},${y+15*k} ${x},${y} Z" fill="#a6dcff" stroke="#2a5d86" stroke-width="3"/>`; }

function bodySVG(sp){
  const r=sp.robe, r2=sp.robe2||r, sk=sp.skin;
  let s=`<path d="M28,420 C32,338 100,300 200,298 C300,300 368,338 372,420 Z" fill="${r}" stroke="${OUT}" stroke-width="6"/>`;
  s+=`<rect x="176" y="246" width="48" height="62" fill="${sk}" stroke="${OUT}" stroke-width="5"/>`;
  if(sp.collar==='cross'){
    s+=`<path d="M254,300 L200,372" stroke="${OUT}" stroke-width="30"/><path d="M254,300 L200,372" stroke="#f6f1e4" stroke-width="20"/>`;
    s+=`<path d="M146,300 L230,420" stroke="${OUT}" stroke-width="30"/><path d="M146,300 L230,420" stroke="#f6f1e4" stroke-width="20"/>`;
    s+=`<path d="M62,420 C72,380 94,352 122,336 M338,420 C328,380 306,352 278,336" fill="none" stroke="${r2}" stroke-width="7" stroke-linecap="round"/>`;
  } else if(sp.collar==='round'){
    s+=`<path d="M144,302 C150,350 250,350 256,302" fill="none" stroke="${OUT}" stroke-width="22"/><path d="M144,302 C150,350 250,350 256,302" fill="none" stroke="${r2}" stroke-width="13"/>`;
    if(sp.emblem) s+=`<circle cx="200" cy="384" r="30" fill="#e3b341" stroke="${OUT}" stroke-width="5"/><path d="M184,390 C184,372 206,368 212,380 C216,392 200,398 196,386" ${stk(4)}/>`;
  } else if(sp.collar==='suit'||sp.collar==='blazer'){
    s+=`<path d="M168,298 L232,298 L200,380 Z" fill="#f7f4ee" stroke="${OUT}" stroke-width="5"/>`;
    if(sp.collar==='suit') s+=`<path d="M193,308 L207,308 L213,364 L200,380 L187,364 Z" fill="${sp.tie||'#5b1f2a'}" stroke="${OUT}" stroke-width="4"/>`;
    else s+=`<path d="M180,310 L200,320 L220,310 L220,330 L200,322 L180,330 Z" fill="${sp.ribbon||'#c9a24e'}" stroke="${OUT}" stroke-width="4"/>`;
    s+=`<path d="M146,304 L172,298 L200,386 L164,354 L176,332 Z" fill="${r2}" stroke="${OUT}" stroke-width="5"/>`;
    s+=`<path d="M254,304 L228,298 L200,386 L236,354 L224,332 Z" fill="${r2}" stroke="${OUT}" stroke-width="5"/>`;
    if(sp.collar==='blazer' && sp.pin!==false) s+=`<path d="M258,360 L282,334" stroke="#c9a24e" stroke-width="7" stroke-linecap="round"/><path d="M282,334 L290,326" stroke="${OUT}" stroke-width="7" stroke-linecap="round"/>`;
  } else if(sp.collar==='robe'){ // 법복
    s+=`<path d="M150,300 L200,384 L250,300" fill="none" stroke="${OUT}" stroke-width="26" stroke-linejoin="round"/><path d="M150,300 L200,384 L250,300" fill="none" stroke="#f4efe2" stroke-width="16" stroke-linejoin="round"/>`;
    s+=`<path d="M178,304 L200,344 L222,304 Z" fill="${r2}"/><circle cx="264" cy="358" r="11" fill="#e3b341" stroke="${OUT}" stroke-width="4"/>`;
  }
  return s;
}
function hairBack(sp){
  if(sp.hat==='student') return `<ellipse cx="200" cy="152" rx="106" ry="88" fill="${sp.hair}" stroke="${OUT}" stroke-width="6"/>`;
  if(sp.hat==='short') return `<ellipse cx="200" cy="150" rx="100" ry="74" fill="${sp.hair}" stroke="${OUT}" stroke-width="6"/>`;
  if(sp.hat==='bob') return `<path d="M94,172 C84,62 316,62 306,172 L310,272 C292,284 268,282 260,266 L140,266 C132,282 108,284 90,272 Z" fill="${sp.hair}" stroke="${OUT}" stroke-width="6" stroke-linejoin="round"/>`;
  if(sp.hat==='bun') return `<circle cx="200" cy="72" r="32" fill="${sp.hair}" stroke="${OUT}" stroke-width="6"/><ellipse cx="200" cy="150" rx="100" ry="76" fill="${sp.hair}" stroke="${OUT}" stroke-width="6"/>`;
  return '';
}
function hairFront(sp){
  const h=sp.hair||'#1c1a20';
  if(sp.hat==='student') return `<path d="M104,168 C90,62 310,58 296,168 C288,140 274,126 264,140 C254,118 232,118 222,134 C206,114 184,116 174,134 C162,116 140,120 134,142 C122,132 110,146 104,168 Z" fill="${h}" stroke="${OUT}" stroke-width="5" stroke-linejoin="round"/><path d="M204,92 C196,58 224,48 232,64" fill="none" stroke="${OUT}" stroke-width="12" stroke-linecap="round"/><path d="M204,92 C196,58 224,48 232,64" fill="none" stroke="${h}" stroke-width="5" stroke-linecap="round"/>`;
  if(sp.hat==='short') return `<path d="M106,168 C96,72 304,66 294,168 C288,132 262,114 216,116 L206,130 L196,116 C150,116 118,134 106,168 Z" fill="${h}" stroke="${OUT}" stroke-width="5" stroke-linejoin="round"/>`;
  if(sp.hat==='bob') return `<path d="M104,174 C92,62 308,62 296,174 C292,152 288,142 280,142 L120,142 C112,142 108,152 104,174 Z" fill="${h}" stroke="${OUT}" stroke-width="5" stroke-linejoin="round"/>`+(sp.band?`<path d="M114,122 C140,80 260,80 286,122" fill="none" stroke="${OUT}" stroke-width="16" stroke-linecap="round"/><path d="M114,122 C140,80 260,80 286,122" fill="none" stroke="${sp.band}" stroke-width="9" stroke-linecap="round"/>`:'');
  if(sp.hat==='bun') return `<path d="M106,170 C96,72 304,66 294,170 C276,126 238,114 200,124 C164,112 124,128 106,170 Z" fill="${h}" stroke="${OUT}" stroke-width="5" stroke-linejoin="round"/>`;
  return `<path d="M111,186 C108,160 116,146 130,142 L128,184 Z" fill="${h}"/><path d="M289,186 C292,160 284,146 270,142 L272,184 Z" fill="${h}"/>`;
}
function hatFront(sp,e){
  const B='#1c1a20'; let s='';
  if(sp.hat==='baekje'){
    s=`<path d="M150,104 C126,74 142,46 130,12 C160,36 174,68 162,104 Z" fill="#e2b33c" stroke="${OUT}" stroke-width="4" stroke-linejoin="round"/>`+
      `<path d="M250,104 C274,74 258,46 270,12 C240,36 226,68 238,104 Z" fill="#e2b33c" stroke="${OUT}" stroke-width="4" stroke-linejoin="round"/>`+
      `<path d="M104,152 C96,54 304,54 296,152 C262,132 138,132 104,152 Z" fill="${B}" stroke="${OUT}" stroke-width="5"/>`+
      `<path d="M106,148 C140,128 260,128 294,148" fill="none" stroke="#e2b33c" stroke-width="4"/>`;
  } else if(sp.hat==='ikseon'){
    s=`<ellipse cx="158" cy="66" rx="30" ry="38" fill="${B}" stroke="${OUT}" stroke-width="5"/><ellipse cx="242" cy="66" rx="30" ry="38" fill="${B}" stroke="${OUT}" stroke-width="5"/>`+
      `<path d="M104,152 C98,66 302,66 296,152 C262,134 138,134 104,152 Z" fill="${B}" stroke="${OUT}" stroke-width="5"/>`+
      `<path d="M108,146 C140,128 260,128 292,146" fill="none" stroke="#3b3644" stroke-width="8"/>`;
  } else if(sp.hat==='gat'){
    s=`<ellipse cx="200" cy="96" rx="18" ry="20" fill="${B}"/>`+
      `<path d="M110,140 C140,122 260,122 290,140 L290,150 C260,134 140,134 110,150 Z" fill="${B}"/>`+
      `<path d="M156,122 L162,50 C182,42 218,42 238,50 L244,122 Z" fill="${B}" fill-opacity=".82" stroke="${OUT}" stroke-width="4"/>`+
      `<ellipse cx="200" cy="122" rx="168" ry="24" fill="${B}" fill-opacity=".8" stroke="${OUT}" stroke-width="4"/>`+
      `<path d="M70,130 C92,214 128,262 172,288 M330,130 C308,214 272,262 228,288" fill="none" stroke="${B}" stroke-width="3"/>`;
  } else return '';
  const tf=e==='breakdown'?' transform="translate(-14 30) rotate(-24 200 110)"':'';
  return `<g class="hat"${tf}>${s}</g>`;
}
function browsSVG(e){
  const b=(x1,y1,x2,y2)=>`<path d="M${x1},${y1} L${x2},${y2}" stroke="${OUT}" stroke-width="8" stroke-linecap="round"/>`;
  switch(e){
    case 'smug': return b(138,164,176,160)+b(224,152,262,160);
    case 'shock': return b(138,150,176,146)+b(224,146,262,150);
    case 'sweat': case 'breakdown': return b(138,166,176,154)+b(224,154,262,166);
    case 'angry': case 'stern': return b(138,154,178,170)+b(222,170,262,154);
    case 'confident': return b(138,158,178,166)+b(222,166,262,158);
    case 'think': return b(138,164,176,162)+b(224,156,262,162);
    default: return b(138,164,176,160)+b(224,160,262,164);
  }
}
function eyesSVG(e){
  const L=158,R=242,Y=194;
  const dot=(x,y)=>`<ellipse cx="${x}" cy="${y}" rx="10" ry="14" fill="${OUT}"/><circle cx="${x+3}" cy="${y-5}" r="3.5" fill="#fff"/>`;
  switch(e){
    case 'smug': { const lid=x=>`<path d="M${x-13},${Y-2} L${x+13},${Y-2} A13,11 0 0 1 ${x-13},${Y-2} Z" fill="${OUT}"/>`; return lid(L)+lid(R); }
    case 'shock': { const b=x=>`<circle cx="${x}" cy="${Y}" r="17" fill="#fff" stroke="${OUT}" stroke-width="4"/><circle cx="${x}" cy="${Y}" r="4" fill="${OUT}"/>`; return b(L)+b(R); }
    case 'breakdown': { const sw=x=>`<path d="M${x-2},${Y} a2,2 0 1,1 4,0 a4,4 0 1,1 -8,0 a6,6 0 1,1 12,0 a8,8 0 1,1 -16,0 a10,10 0 1,1 20,0" fill="none" stroke="${OUT}" stroke-width="3.5"/>`; return sw(L)+sw(R); }
    case 'think': return dot(L+7,Y-3)+dot(R+7,Y-3);
    case 'sweat': return `<ellipse cx="${L}" cy="${Y}" rx="8" ry="11" fill="${OUT}"/><ellipse cx="${R}" cy="${Y}" rx="8" ry="11" fill="${OUT}"/>`;
    default: return dot(L,Y)+dot(R,Y);
  }
}
function mouthSVG(e){
  const IN='#6e2620'; let c,o;
  switch(e){
    case 'smug': c=`<path d="M178,244 Q204,256 226,236" ${stk(5)}/>`; o=`<path d="M178,242 Q204,266 226,236 Q204,250 178,242 Z" fill="${IN}" stroke="${OUT}" stroke-width="4"/>`; break;
    case 'shock': c=o=`<ellipse cx="200" cy="250" rx="14" ry="18" fill="${IN}" stroke="${OUT}" stroke-width="4"/>`; break;
    case 'breakdown': c=o=`<path d="M168,248 Q178,238 188,248 T208,248 T228,248 L230,262 Q200,276 170,262 Z" fill="${IN}" stroke="${OUT}" stroke-width="4"/>`; break;
    case 'sweat': c=`<path d="M182,250 Q191,242 200,250 T218,250" ${stk(5)}/>`; o=`<ellipse cx="200" cy="250" rx="10" ry="7" fill="${IN}" stroke="${OUT}" stroke-width="4"/>`; break;
    case 'angry': case 'stern': c=`<path d="M182,250 L218,250" ${stk(5)}/>`; o=`<rect x="180" y="240" width="40" height="18" rx="5" fill="#fff" stroke="${OUT}" stroke-width="4"/><path d="M180,249 H220" stroke="${OUT}" stroke-width="2"/>`; break;
    case 'confident': c=`<path d="M180,242 Q200,258 220,242" ${stk(5)}/>`; o=`<path d="M180,240 Q200,270 220,240 Z" fill="${IN}" stroke="${OUT}" stroke-width="4"/>`; break;
    case 'think': c=`<path d="M188,250 L212,246" ${stk(5)}/>`; o=`<ellipse cx="200" cy="249" rx="8" ry="6" fill="${IN}" stroke="${OUT}" stroke-width="4"/>`; break;
    default: c=`<path d="M186,246 Q200,254 214,246" ${stk(5)}/>`; o=`<ellipse cx="200" cy="249" rx="11" ry="8" fill="${IN}" stroke="${OUT}" stroke-width="4"/>`;
  }
  return `<g class="m-closed">${c}</g><g class="m-open">${o}</g>`;
}
function faceSVG(sp,e){
  let s='';
  if(sp.blush) s+=`<ellipse cx="140" cy="230" rx="15" ry="9" fill="#f08c8c" opacity=".45"/><ellipse cx="260" cy="230" rx="15" ry="9" fill="#f08c8c" opacity=".45"/>`;
  return s+browsSVG(e)+eyesSVG(e)+`<path d="M200,204 Q208,218 198,224" ${stk(4)}/>`+mouthSVG(e);
}
function beardSVG(sp){
  const c=sp.beardColor||OUT;
  const mus=`<path d="M200,230 C188,220 166,222 156,240 C170,232 186,234 200,238 Z" fill="${c}"/><path d="M200,230 C212,220 234,222 244,240 C230,232 214,234 200,238 Z" fill="${c}"/>`;
  switch(sp.beard){
    case 'king': return mus+`<path d="M190,270 C192,292 200,308 200,308 C200,308 208,292 210,270 Z" fill="${c}"/>`;
    case 'thin': return `<path d="M198,232 C186,226 172,228 162,238 M202,232 C214,226 228,228 238,238" fill="none" stroke="${c}" stroke-width="5" stroke-linecap="round"/>`;
    case 'long': return mus+`<path d="M176,266 C174,312 194,352 200,358 C206,352 226,312 224,266 C212,276 188,276 176,266 Z" fill="${c}" stroke="${OUT}" stroke-width="3"/>`;
    default: return '';
  }
}
function shadeSVG(e){
  if(e!=='breakdown') return '';
  return `<path d="M114,150 C114,106 286,106 286,150 L286,206 C230,196 170,196 114,206 Z" fill="#3446b8" opacity=".22"/><path d="M146,124 V176 M168,116 V180 M232,116 V180 M254,124 V176" stroke="#3446b8" stroke-width="4" opacity=".45"/>`;
}
function extrasSVG(e){
  if(e==='sweat') return drop(310,150)+drop(92,178,0.8);
  if(e==='shock') return `<path d="M88,118 L64,96 M82,160 L54,156 M312,118 L336,96 M318,160 L346,156" stroke="${OUT}" stroke-width="6" stroke-linecap="round"/>`;
  if(e==='breakdown') return drop(312,140)+drop(88,170,0.9)+drop(322,214,0.7);
  return '';
}
function glassesSVG(sp){
  if(!sp.glasses) return '';
  return `<g fill="#ffffff" fill-opacity=".16" stroke="${OUT}" stroke-width="4"><circle cx="158" cy="194" r="23"/><circle cx="242" cy="194" r="23"/></g><path d="M181,190 Q200,182 219,190 M135,188 L110,182 M265,188 L290,182" ${stk(4)}/>`;
}
function propSVG(sp){
  return `<g transform="rotate(-18 310 300)"><rect x="262" y="246" width="96" height="60" rx="6" fill="#f3e6c4" stroke="${OUT}" stroke-width="5"/><path d="M276,264 H344 M276,278 H336 M276,292 H344" stroke="#8a6a3a" stroke-width="3"/><rect x="252" y="238" width="16" height="76" rx="7" fill="#8a5233" stroke="${OUT}" stroke-width="4"/><rect x="352" y="238" width="16" height="76" rx="7" fill="#8a5233" stroke="${OUT}" stroke-width="4"/></g><circle cx="304" cy="326" r="24" fill="${sp.skin}" stroke="${OUT}" stroke-width="5"/>`;
}
function haechiSVG(expr){
  const M='#3f7d89', M2='#2b5b65', F='#f3dc9c', MZ='#fcf1d2', G='#e3b341';
  let s=`<path d="M28,420 C32,338 100,302 200,300 C300,302 368,338 372,420 Z" fill="#242a3b" stroke="${OUT}" stroke-width="6"/>`;
  s+=`<path d="M146,320 L200,398 L254,320" fill="none" stroke="${OUT}" stroke-width="26" stroke-linejoin="round"/><path d="M146,320 L200,398 L254,320" fill="none" stroke="#f4efe2" stroke-width="16" stroke-linejoin="round"/>`;
  for(let i=0;i<18;i++){ const a=i/18*Math.PI*2; s+=`<circle cx="${(200+Math.cos(a)*108).toFixed(1)}" cy="${(180+Math.sin(a)*100).toFixed(1)}" r="34" fill="${M}" stroke="${OUT}" stroke-width="5"/>`; }
  s+=`<ellipse cx="200" cy="180" rx="110" ry="102" fill="${M}"/>`;
  for(let i=0;i<18;i+=2){ const a=i/18*Math.PI*2+0.17; const x=200+Math.cos(a)*116, y=180+Math.sin(a)*108; s+=`<path d="M${(x-7).toFixed(1)},${y.toFixed(1)} a7,7 0 1,1 7,7" fill="none" stroke="${M2}" stroke-width="4" stroke-linecap="round"/>`; }
  s+=`<circle cx="200" cy="306" r="20" fill="${G}" stroke="${OUT}" stroke-width="5"/><path d="M188,310 H212" stroke="${OUT}" stroke-width="4"/>`;
  s+=`<path d="M108,108 C92,72 110,56 142,76 Z" fill="${F}" stroke="${OUT}" stroke-width="5" stroke-linejoin="round"/><path d="M292,108 C308,72 290,56 258,76 Z" fill="${F}" stroke="${OUT}" stroke-width="5" stroke-linejoin="round"/>`;
  s+=`<path d="M186,98 C186,66 198,44 218,26 C215,54 215,76 214,98 Z" fill="${G}" stroke="${OUT}" stroke-width="5" stroke-linejoin="round"/><path d="M189,82 L213,78 M193,64 L214,60" stroke="${OUT}" stroke-width="3"/>`;
  s+=`<ellipse cx="200" cy="188" rx="92" ry="86" fill="${F}" stroke="${OUT}" stroke-width="6"/>`;
  s+=`<path d="M124,230 a10,10 0 1,1 10,10 a5,5 0 1,1 -5,-5" fill="none" stroke="#d99a3a" stroke-width="4" stroke-linecap="round"/><path d="M266,230 a10,10 0 1,1 10,10 a5,5 0 1,1 -5,-5" fill="none" stroke="#d99a3a" stroke-width="4" stroke-linecap="round"/>`;
  s+=`<ellipse cx="200" cy="242" rx="50" ry="32" fill="${MZ}" stroke="${OUT}" stroke-width="5"/>`;
  s+=`<path d="M182,220 Q200,210 218,220 Q214,234 200,236 Q186,234 182,220 Z" fill="#3a2620"/>`;
  const L=162,R=238,Y=182;
  const br=(cx,rot,dy)=>`<ellipse cx="${cx}" cy="${148+(dy||0)}" rx="24" ry="10" fill="${M2}" transform="rotate(${rot} ${cx} ${148+(dy||0)})"/>`;
  const dot=x=>`<ellipse cx="${x}" cy="${Y}" rx="9" ry="12" fill="${OUT}"/><circle cx="${x+3}" cy="${Y-4}" r="3" fill="#fff"/>`;
  let brows,eyes,c,o;
  switch(expr){
    case 'shock': brows=br(L,-6,-10)+br(R,6,-10); eyes=`<circle cx="${L}" cy="${Y}" r="15" fill="#fff" stroke="${OUT}" stroke-width="4"/><circle cx="${L}" cy="${Y}" r="4" fill="${OUT}"/><circle cx="${R}" cy="${Y}" r="15" fill="#fff" stroke="${OUT}" stroke-width="4"/><circle cx="${R}" cy="${Y}" r="4" fill="${OUT}"/>`; c=o=`<ellipse cx="200" cy="256" rx="13" ry="12" fill="#6e2620" stroke="${OUT}" stroke-width="4"/>`; break;
    case 'stern': brows=br(L,18)+br(R,-18); eyes=dot(L)+dot(R); c=`<path d="M186,256 H214" ${stk(4)}/>`; o=`<rect x="184" y="248" width="32" height="14" rx="4" fill="#fff" stroke="${OUT}" stroke-width="4"/>`; break;
    case 'smile': brows=br(L,-10)+br(R,10); eyes=`<path d="M150,186 Q162,172 174,186" ${stk(6)}/><path d="M226,186 Q238,172 250,186" ${stk(6)}/>`; c=`<path d="M182,252 Q200,268 218,252" ${stk(4)}/>`; o=`<path d="M182,250 Q200,276 218,250 Z" fill="#6e2620" stroke="${OUT}" stroke-width="4"/>`; break;
    default: brows=br(L,-6)+br(R,6); eyes=dot(L)+dot(R); c=`<path d="M184,252 Q192,260 200,252 Q208,260 216,252" ${stk(4)}/>`; o=`<ellipse cx="200" cy="256" rx="12" ry="9" fill="#6e2620" stroke="${OUT}" stroke-width="4"/>`;
  }
  s+=brows+eyes+`<g class="m-closed">${c}</g><g class="m-open">${o}</g>`;
  if(expr==='shock') s+=`<path d="M78,110 L56,90 M72,156 L44,152 M322,110 L344,90 M328,156 L356,152" stroke="${OUT}" stroke-width="6" stroke-linecap="round"/>`;
  return s;
}
function charSVG(sp,expr){
  const label=`${esc(sp.name)} ${EXPR_LABEL[expr]||expr}`;
  if(sp.kind==='haechi') return `<svg viewBox="0 0 400 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${label}">${haechiSVG(expr)}</svg>`;
  const e=expr==='present'?'confident':expr;
  const parts=[
    bodySVG(sp), hairBack(sp),
    sp.hat==='bob'?'':`<ellipse cx="110" cy="192" rx="15" ry="22" fill="${sp.skin}" stroke="${OUT}" stroke-width="5"/><ellipse cx="290" cy="192" rx="15" ry="22" fill="${sp.skin}" stroke="${OUT}" stroke-width="5"/>`,
    `<path d="M110,150 C110,82 290,82 290,150 L290,192 C290,262 248,288 200,288 C152,288 110,262 110,192 Z" fill="${sp.skin}" stroke="${OUT}" stroke-width="6"/>`,
    hairFront(sp), shadeSVG(e), faceSVG(sp,e), glassesSVG(sp), beardSVG(sp), hatFront(sp,e), extrasSVG(e),
    expr==='present'?propSVG(sp):''
  ];
  return `<svg viewBox="0 0 400 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${label}">${parts.join('')}</svg>`;
}

/* 등장인물 설정: 새 피고 = 설정 한 줄 */
const CAST={
  judge:{name:'재판장 해치', kind:'haechi'},
  player:{name:'하람 검사', skin:'#f6d2b0', robe:'#2c3f66', robe2:'#1d2b48', collar:'blazer', hat:'student', hair:'#3b2a1e', beard:'none', blush:true},
  rival:{name:'누리 변호인', skin:'#f3cfae', robe:'#6b2737', robe2:'#4a1825', collar:'blazer', ribbon:'#3f7d89', pin:false, hat:'bob', hair:'#2a1f2b', band:'#3f7d89', glasses:true, beard:'none', blush:true},
  daon:{name:'다온 판사', skin:'#efc8a4', robe:'#1f2230', robe2:'#3a2f55', collar:'robe', hat:'bun', hair:'#4a3020', beard:'none', blush:true},
  defendant:{name:'의자왕', skin:'#efc69c', robe:'#6a3d8f', robe2:'#4b2a66', collar:'cross', hat:'baekje', hair:'#1c1a20', beard:'king'}
};
const SAMPLES=[
  CAST.defendant,
  {name:'연산군', skin:'#f0caa4', robe:'#b3352b', robe2:'#86241d', collar:'round', hat:'ikseon', hair:'#1c1a20', beard:'thin', emblem:true},
  {name:'광해군', skin:'#eec8a2', robe:'#a8322a', robe2:'#7c221c', collar:'round', hat:'ikseon', hair:'#1c1a20', beard:'king', emblem:true},
  {name:'조선 관리 예시', skin:'#e8bf96', robe:'#2f5d8a', robe2:'#1f3f60', collar:'cross', hat:'gat', hair:'#1c1a20', beard:'long', beardColor:'#e6e0d4'}
];
const NAMES={judge:'재판장 해치', player:'하람 검사', rival:'누리 변호인', defendant:'피고 의자왕', guide:'안내'};
const VIEW_OF={judge:'judge', player:'player', rival:'def', defendant:'witness'};

/* ===== 배경 ===== */
function dancheong(){
  let s=`<rect width="1600" height="120" fill="#2f6b5e"/>`;
  for(let x=0;x<1600;x+=100) s+=`<circle cx="${x+50}" cy="60" r="26" fill="#c9a24e" stroke="#1d3b34" stroke-width="5"/><circle cx="${x+50}" cy="60" r="11" fill="#b5442e"/><path d="M${x},28 L${x+12},60 L${x},92" fill="none" stroke="#f1e5c8" stroke-width="5"/>`;
  return s+`<rect y="118" width="1600" height="14" fill="#b5442e"/>`;
}
const SV=`<svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">`;
const BG_WITNESS=SV+`<defs><pattern id="latW" width="70" height="70" patternUnits="userSpaceOnUse"><rect width="70" height="70" fill="#f1e5c8"/><path d="M35,0 V70 M0,35 H70" stroke="#94643a" stroke-width="5"/><rect x="2.5" y="2.5" width="65" height="65" fill="none" stroke="#94643a" stroke-width="5"/></pattern><linearGradient id="flW" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a0703f"/><stop offset="1" stop-color="#6a4224"/></linearGradient><linearGradient id="waW" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e3cfa5"/><stop offset="1" stop-color="#cdb487"/></linearGradient></defs><rect width="1600" height="900" fill="url(#waW)"/><rect x="300" y="170" width="1000" height="450" fill="url(#latW)" stroke="#5a341d" stroke-width="16"/><rect x="290" y="612" width="1020" height="24" fill="#5a341d"/>`+dancheong()+`<rect x="70" y="132" width="120" height="600" fill="#8c3b28" stroke="#3a1c10" stroke-width="8"/><rect x="1410" y="132" width="120" height="600" fill="#8c3b28" stroke="#3a1c10" stroke-width="8"/><rect y="690" width="1600" height="210" fill="url(#flW)"/><path d="M0,752 H1600 M0,822 H1600" stroke="#5a3820" stroke-width="4"/></svg>`;
const BG_JUDGE=SV+`<rect width="1600" height="900" fill="#28304a"/>`+dancheong()+`<rect x="140" y="150" width="1320" height="520" fill="#1f2640"/><circle cx="800" cy="340" r="200" fill="#1a2036" stroke="#c9a24e" stroke-width="12"/><circle cx="800" cy="340" r="176" fill="none" stroke="#c9a24e" stroke-width="3" stroke-dasharray="6 10"/><path d="M800,196 V460" stroke="#c9a24e" stroke-width="12"/><path d="M660,250 H940" stroke="#c9a24e" stroke-width="10"/><path d="M660,250 L620,340 M660,250 L700,340 M940,250 L900,340 M940,250 L980,340" stroke="#c9a24e" stroke-width="4"/><path d="M606,340 Q660,382 714,340 Z M886,340 Q940,382 994,340 Z" fill="#c9a24e"/><path d="M740,480 H860 L840,458 H760 Z" fill="#c9a24e"/><circle cx="800" cy="196" r="14" fill="#c9a24e"/><rect x="230" y="170" width="110" height="420" fill="#7a2f24" stroke="#c9a24e" stroke-width="6"/><rect x="1260" y="170" width="110" height="420" fill="#7a2f24" stroke="#c9a24e" stroke-width="6"/><text x="285" y="410" font-size="84" fill="#f1e5c8" text-anchor="middle" font-family="serif">公</text><text x="1315" y="410" font-size="84" fill="#f1e5c8" text-anchor="middle" font-family="serif">正</text></svg>`;
function bgPlayer(){
  let s=SV+`<rect width="1600" height="900" fill="#cfb68c"/>`+dancheong();
  const rib=['#b5442e','#2f6b5e','#c9a24e','#22406d'];
  for(let r=0;r<3;r++){ const y=180+r*165;
    s+=`<rect x="150" y="${y}" width="1300" height="138" fill="#a88a5e"/>`;
    for(let i=0;i<24;i++){ if((i*7+r*3)%9===0) continue; const cx=184+i*53, cy=y+96;
      s+=`<circle cx="${cx}" cy="${cy}" r="22" fill="#f1e2bf" stroke="#6b4423" stroke-width="4"/><circle cx="${cx}" cy="${cy}" r="6" fill="#8a5233"/>`;
      if((i+r)%4===0) s+=`<rect x="${cx-5}" y="${cy-44}" width="10" height="18" fill="${rib[(i+r)%4]}"/>`; }
    s+=`<rect x="140" y="${y+122}" width="1320" height="18" fill="#6b4423"/>`; }
  return s+`<rect x="40" y="132" width="90" height="640" fill="#8c3b28" stroke="#3a1c10" stroke-width="8"/><rect x="1470" y="132" width="90" height="640" fill="#8c3b28" stroke="#3a1c10" stroke-width="8"/></svg>`;
}
const DESK_WITNESS=SV+`<path d="M540,700 L1060,700 L1100,910 L500,910 Z" fill="#6a3a22" stroke="#2a160c" stroke-width="8"/><rect x="510" y="672" width="580" height="40" rx="8" fill="#8f5634" stroke="#2a160c" stroke-width="8"/><circle cx="800" cy="806" r="52" fill="#c9a24e" stroke="#2a160c" stroke-width="8"/><text x="800" y="830" text-anchor="middle" font-size="60" font-family="serif" fill="#2a160c">證</text></svg>`;
const DESK_JUDGE=SV+`<rect x="120" y="640" width="1360" height="280" fill="#4b2618" stroke="#2a160c" stroke-width="8"/><rect x="100" y="612" width="1400" height="44" rx="10" fill="#7a4129" stroke="#2a160c" stroke-width="8"/><rect x="120" y="676" width="1360" height="8" fill="#c9a24e"/><circle cx="800" cy="790" r="62" fill="#c9a24e" stroke="#2a160c" stroke-width="8"/><text x="800" y="818" text-anchor="middle" font-size="72" font-family="serif" fill="#2a160c">判</text></svg>`;
function plate(x,t){ return `<rect x="${x-118}" y="770" width="236" height="76" rx="8" fill="#c9a24e" stroke="#2a160c" stroke-width="6"/><text x="${x}" y="826" text-anchor="middle" font-size="50" font-family="Black Han Sans,Noto Sans KR,sans-serif" fill="#2a160c">${t}</text>`; }
const DESK_DEF=SV+`<rect x="-10" y="718" width="1620" height="200" fill="#6d4126" stroke="#2a160c" stroke-width="8"/><rect x="-10" y="694" width="1620" height="40" fill="#8f5634" stroke="#2a160c" stroke-width="8"/><g stroke="#2a160c" stroke-width="5"><rect x="290" y="644" width="230" height="52" rx="10" fill="#f1e2bf"/><rect x="290" y="600" width="200" height="46" rx="10" fill="#e9d6ab"/><rect x="408" y="608" width="12" height="30" fill="#2f6b5e"/></g>`+plate(1250,'변호인')+`</svg>`;
const DESK_PLAYER=SV+`<rect x="-10" y="718" width="1620" height="200" fill="#6d4126" stroke="#2a160c" stroke-width="8"/><rect x="-10" y="694" width="1620" height="40" fill="#8f5634" stroke="#2a160c" stroke-width="8"/><g stroke="#2a160c" stroke-width="5"><rect x="1080" y="644" width="230" height="52" rx="10" fill="#f1e2bf"/><rect x="1110" y="600" width="200" height="46" rx="10" fill="#e9d6ab"/><rect x="1180" y="608" width="12" height="30" fill="#b5442e"/><rect x="300" y="664" width="180" height="32" rx="6" fill="#2f6b5e"/><rect x="310" y="640" width="160" height="26" rx="6" fill="#22406d"/></g>`+plate(330,'검사')+`</svg>`;
const BG_SIDE=bgPlayer();
const VIEWS={
  witness:{bg:BG_WITNESS, desk:DESK_WITNESS, pos:{left:'50%', bottom:'0%', height:'90%'}},
  judge:{bg:BG_JUDGE, desk:DESK_JUDGE, pos:{left:'50%', bottom:'19%', height:'76%'}},
  player:{bg:BG_SIDE, desk:DESK_PLAYER, pos:{left:'38%', bottom:'0%', height:'90%'}},
  def:{bg:BG_SIDE, desk:DESK_DEF, pos:{left:'62%', bottom:'0%', height:'90%'}}
};

/* ===== 증거 카드 ===== */
const TRUSTW={3:'높음',2:'보통',1:'낮음'};
const EVIDENCE=[
  {id:'E1', type:'연표', title:'642년의 연표', body:'642년, 의자왕이 신라를 쳐서 성 40여 곳을 빼앗았다. 신라의 대야성도 이때 무너졌다.', src:'「삼국사기」 백제본기를 바탕으로 정리', trust:3, note:'같은 내용을 여러 기록이 전해요.'},
  {id:'E2', type:'사료', title:'쳐들어온 군대의 수', body:'“당나라 장군 소정방이 군사 13만 명을, 신라 김유신이 군사 5만 명을 이끌고 왔다.”', src:'「삼국사기」 (660년의 일)', trust:3, note:'고려 때(1145년) 김부식이 옛 기록을 모아 쓴 책이에요.'},
  {id:'E3', type:'사료', title:'성충의 마지막 글', body:'“적이 쳐들어오면 육지에서는 탄현을 넘지 못하게 하고, 바다에서는 기벌포에 들어오지 못하게 하소서.”', src:'「삼국사기」 (656년의 일)', trust:3, note:'신하 성충이 옥에 갇힌 채 왕에게 올린 글이에요.'},
  {id:'E4', type:'사료', title:'옥에 갇힌 성충', body:'“성충이 왕에게 바른말을 하자, 왕이 화가 나서 성충을 옥에 가두었다.”', src:'「삼국사기」 (656년의 일)', trust:3, note:'백제가 망한 뒤 고려 때 쓴 기록이에요. 쓴 사람의 관점도 생각해 보세요.'},
  {id:'E5', type:'사료', title:'고구려와 손잡은 백제', body:'“643년, 백제가 고구려와 사이좋게 지내기로 하고, 신라의 당항성을 치려 하였다.”', src:'「삼국사기」 (643년의 일)', trust:3, note:'백제와 고구려가 손잡은 기록이에요.'},
  {id:'E6', type:'유물', title:'백제 금동대향로', body:'부여 능산리 절터에서 나온 향로. 산과 동물, 악사들이 섬세하게 새겨져 있다.', src:'국립부여박물관 소장 (1993년 발굴)', trust:3, note:'실제로 남아 있는 유물이에요.'},
  {id:'E7', type:'사료', title:'낙화암 이야기', body:'“백제가 망할 때 궁녀들이 큰 바위에서 강으로 몸을 던졌다.” 이 기록에는 ‘3천 명’이라는 숫자가 없다.', src:'「삼국유사」 (고려, 일연)', trust:2, note:'전해 오는 이야기를 모은 책이에요.'},
  {id:'E8', type:'지도', title:'660년, 적이 온 길', body:'당나라 군대는 바다를 건너 기벌포로, 신라 군대는 탄현을 넘어 황산벌로 들어왔다.', src:'교과서 지도를 바탕으로 정리', trust:3, note:'군대가 실제로 지나간 길을 보여 줘요.'},
  {id:'E9', type:'사료', title:'흥수의 건의', body:'“660년, 왕이 귀양 가 있던 흥수에게 사람을 보내 물었다. 흥수는 백강과 탄현을 막으라고 했으나, 대신들이 ‘오래 갇혀 원망을 품은 자의 말’이라며 반대했다.”', src:'「삼국사기」 (660년의 일)', trust:3, note:'왕이 직접 사람을 보내 물었다는 점이 중요해요.'},
  {id:'E10', type:'사료', title:'656년의 향락 기록', body:'“656년, 왕이 궁녀들과 술과 놀이에 빠져 그칠 줄 몰랐다. 성충이 이를 말리자 왕이 화가 나 성충을 옥에 가두었다.”', src:'「삼국사기」 (656년의 일)', trust:3, note:'E4 ‘옥에 갇힌 성충’과 같은 대목이에요.'},
  {id:'E11',reuse:true, type:'사료', title:'「삼국사기」를 쓴 사람', body:'1145년, 고려의 김부식 등이 옛 기록을 모아 엮었다. 그때 남아 있던 기록은 신라 쪽 자료가 훨씬 많았고, 편찬자는 대목마다 자기 평가(평)를 덧붙였다.', src:'「삼국사기」 편찬에 관한 설명', trust:3, note:'기록에는 쓴 사람의 관점이 담길 수 있어요.'},
  {id:'E12', type:'자료', title:'3천 궁녀라는 말', body:'옛 사료 어디에도 ‘3천 궁녀’라는 숫자는 없다. 이 말은 훨씬 뒤 시대의 시와 노래에서 널리 퍼진 표현이다.', src:'역사 연구 성과를 바탕으로 정리', trust:2, note:'이야기가 전해지며 숫자가 부풀려진 예예요.'},
  {id:'K1', type:'물건', title:'녹슨 열쇠', body:'궁터 우물의 두레박 줄 끝에 걸려 있던 오래된 열쇠.', src:'사비성 터 무너진 궁터에서 찾음', trust:1, note:'어딘가 잠긴 것을 열 수 있을 것 같다.'}
];
const EV_BY_ID=Object.fromEntries(EVIDENCE.map(e=>[e.id,e]));

/* ===== 증언: 문장마다 ‘참’ 판과 ‘거짓’ 판. 매 판 하나가 거짓이 됨 ===== */
const LINES={
  L1:{expr:'smug',
    truth:{text:'나는 게으른 왕이 아니었소. 왕이 된 이듬해, 신라의 성 40여 곳을 빼앗았소.', cat:'excuse', why:'사실이에요. 하지만 처음의 승리가 마지막에 나라를 지키지 못한 책임을 덜어 주지는 않아요.',
      press:[['player','normal','40여 곳이나요? 그게 언제였죠?'],['defendant','smug','642년이오. 신라의 대야성도 그때 무너졌지.'],['rival','confident','재판장님, 피고는 처음부터 나라를 내팽개친 왕이 아니었습니다.']]},
    lie:{text:'나는 신라와 한 번도 싸우지 않았소. 평화를 사랑한 왕이었소.', why:'642년에 신라 성 40여 곳을 빼앗은 기록과 맞지 않아요.', ev:'E1',
      press:[['player','normal','정말 한 번도요?'],['defendant','smug','물론이오. 연표를 다 뒤져 봐도 좋소.'],['player','think','(연표라… 한번 살펴볼까?)']],
      hit:[['player','present','연표를 보시죠! 642년, 피고는 신라의 성 40여 곳을 빼앗았습니다.'],['defendant','shock','으윽! 그, 그건…!']]}},
  L5:{expr:'smug',
    truth:{text:'신라는 당나라와 손을 잡았소. 백제도 고구려와 손을 잡았지만, 고구려는 도우러 오지 못했소.', cat:'context', why:'사실이에요. 고구려가 오지 못한 것은 백제 왕 혼자 바꿀 수 없던 사정이에요.',
      press:[['player','normal','고구려는 왜 오지 못했죠?'],['defendant','normal','고구려도 당나라를 막느라 바빴소.']]},
    lie:{text:'백제는 처음부터 혼자였소. 손잡은 나라가 하나도 없었소.', why:'643년에 백제는 고구려와 손을 잡았어요.', ev:'E5',
      press:[['player','normal','손잡은 나라가 정말 하나도 없었어요?'],['defendant','smug','그렇소. 백제는 늘 홀로 싸운 외로운 나라였지.']],
      hit:[['player','present','643년의 기록입니다. 백제는 고구려와 손을 잡았습니다!'],['defendant','shock','그, 그건 아주 오래전 일이오…!']]}},
  L4:{expr:'normal',
    truth:{text:'성충을 옥에 가둔 것은 왕에게 대들었기 때문이오. 왕의 위엄을 지켜야 했소.', cat:'excuse', why:'사실이지만, 바른말을 한 신하를 벌한 것은 왕의 선택이에요.',
      press:[['player','normal','바른말을 했는데 옥에 가두셨다고요?'],['defendant','angry','왕에게 대들면 벌을 받는 것이 마땅하오!']]},
    lie:{text:'나는 바른말 하는 신하를 아꼈소. 누구도 벌을 주지 않았소.', why:'바른말을 한 성충을 옥에 가둔 기록과 맞지 않아요.', ev:'E4',
      press:[['player','normal','정말 누구도 벌하지 않으셨어요?'],['defendant','sweat','그, 그렇다니까. 기록에 뭐라고 적혔든…']],
      hit:[['player','present','「삼국사기」를 보시죠. 피고는 바른말을 한 성충을 옥에 가두었습니다!'],['defendant','shock','으아… 성충, 그자가…!']]}},
  L3:{expr:'smug',
    truth:{text:'탄현과 기벌포를 막으라는 말은 들었소. 하지만 신하들의 생각이 서로 달랐소.', cat:'excuse', why:'경고를 듣고도 다른 길을 고른 것은 왕이에요. 책임을 덜어 주지 못해요.',
      press:[['player','normal','생각이 어떻게 달랐는데요?'],['defendant','normal','적을 좁은 길까지 끌어들여 치자는 신하도 있었소. 나는 그 말을 따랐을 뿐이오.'],['player','think','(그 말을 따르기로 정한 건 누구였을까?)']]},
    lie:{text:'적이 어디로 쳐들어올지, 아무도 내게 알려 주지 않았소.', why:'성충이 탄현과 기벌포를 막으라는 글을 올렸어요.', ev:'E3',
      press:[['player','normal','정말 아무도요? 신하 한 명도요?'],['defendant','sweat','…기억나는 사람은 없소.']],
      hit:[['player','present','성충이 옥에서 남긴 글입니다. “탄현을 넘지 못하게 하고, 기벌포에 들어오지 못하게 하소서.”'],['player','confident','피고는 적이 어디로 올지 알고 있었습니다!'],['defendant','shock','그, 그 글이 남아 있었다니…!']]}},
  L2:{expr:'normal',
    truth:{text:'당나라 군사 13만, 신라 군사 5만이 한꺼번에 쳐들어왔소. 작은 백제가 어찌 막겠소?', cat:'context', why:'사실이에요. 백제 혼자 막기 어려운 큰 군대였어요. 판결에서 헤아려야 할 사정이에요.',
      press:[['player','normal','그 숫자는 어디에 적혀 있나요?'],['defendant','normal','「삼국사기」에 그렇게 적혀 있소. 찾아보시오.'],['rival','confident','검사, 이것은 피고가 어쩔 수 없던 사정입니다.']]},
    lie:{text:'적군은 무려 100만 명이었소! 하늘을 덮을 만큼 많았지.', why:'「삼국사기」에는 당군 13만, 신라군 5만이라고 적혀 있어요.', ev:'E2',
      press:[['player','normal','100만 명이요? 누가 세어 봤나요?'],['defendant','sweat','그, 그만큼 많았다는 뜻이오!']],
      hit:[['player','present','「삼국사기」를 보시죠. 당군 13만, 신라군 5만. 100만이 아닙니다!'],['defendant','shock','크윽… 조금 부풀렸을 뿐이오…!']]}}
};
const ORDER=[LINES.L1, LINES.L5, LINES.L4, LINES.L3, LINES.L2];
const CATS=[['lie','거짓'],['excuse','핑계'],['context','참작할 시대 상황']];
const CAT_NAME=Object.fromEntries(CATS);

const VERDICT_A=[
  {t:'당나라와 신라의 큰 군대가 함께 쳐들어온 것', ok:true, fb:'맞아요. 백제 혼자 막기 어려웠던 사정이에요.'},
  {t:'고구려가 도우러 오지 못한 것', ok:true, fb:'맞아요. 백제 왕이 바꿀 수 없던 사정이에요.'},
  {t:'왕이 된 이듬해 신라의 성을 빼앗은 것', ok:false, fb:'피고가 스스로 한 일이에요. 어쩔 수 없던 사정이 아니에요.'},
  {t:'백제의 금동대향로가 아름다운 것', ok:false, fb:'멋진 유물이지만, 이 재판과는 관계가 없어요.'}
];
const VERDICT_B=[
  {t:'성충의 경고를 듣고도 따르지 않은 것', ok:true, key:true, fb:'맞아요. 경고를 알고도 다른 길을 고른 것은 왕이에요.'},
  {t:'바른말을 한 성충을 옥에 가둔 것', ok:true, fb:'맞아요. 그 벌은 왕이 내린 결정이에요.'},
  {t:'적군의 수가 많았던 것', ok:false, fb:'피고가 고를 수 없던 사정이에요. 책임의 근거가 아니에요.'},
  {t:'궁녀 3천 명과 놀기만 한 것', ok:false, fb:'‘3천 궁녀’는 옛 사료에 나오지 않는 숫자예요. 근거 없는 말로 판결하면 안 돼요.'}
];
const GOJEUNG=[
  '642년(의자왕 2년) 신라 성 40여 곳 공격과 대야성 함락: 「삼국사기」 백제본기 원문 확인',
  '643년(의자왕 3년) 고구려와 화친, 당항성 공격 시도: 원문 확인',
  '656년(의자왕 16년) 성충 투옥과 ‘탄현·기벌포’ 글: 원문과 번역 문구 확인',
  '660년 당군 13만, 신라군 5만: 「삼국사기」 신라본기·백제본기 숫자 대조',
  '‘적을 좁은 길로 끌어들여 치자’는 신하들 의견: 660년 흥수의 건의에 대한 반론으로, 성충의 글(656년)과 시점이 다름. 피고 대사 문구 다듬기 필요',
  '660년 고구려가 백제를 돕지 못한 이유를 ‘당과 대치 중’으로 설명해도 되는지 (교과서 수준 확인)',
  '나당연합군 진격로: 탄현 위치는 학설이 갈림. 교과서 지도 기준으로 맞출 것',
  '낙화암 이야기 출전(「삼국유사」)과 ‘3천 궁녀’ 표현의 출처(후대 문학) 확인',
  '의자왕의 웅진성 피신·항복, 당으로 끌려가 그해 사망: 확인',
  '금동대향로 출토지와 연도(부여 능산리 절터, 1993년) 확인',
  '교과서 쪽 번호: 아직 넣지 않음'
];

/* ===== 화면 요소 ===== */
const stageEl=$('#stage'), sceneEl=$('#scene'), bgEl=$('#bg'), charEl=$('#char'), deskEl=$('#desk');
const flashEl=$('#flash'), gavelEl=$('#gavel'), tcEl=$('#tc'), shoutEl=$('#shout');
const dialogEl=$('#dialog'), nameEl=$('#name'), dtagEl=$('#dtag'), textEl=$('#text'), nextEl=$('#next');
const controlsEl=$('#controls'), rolesEl=$('#roles'), sheetEl=$('#sheet'), sheetCard=$('#sheetCard');

let curView=null;
function setView(view,who,expr){
  const V=VIEWS[view];
  if(view!==curView){
    curView=view; bgEl.innerHTML=V.bg; deskEl.innerHTML=V.desk;
    charEl.style.left=V.pos.left; charEl.style.bottom=V.pos.bottom; charEl.style.height=V.pos.height;
    sceneEl.classList.remove('cut'); void sceneEl.offsetWidth; sceneEl.classList.add('cut');
  }
  const key=who+':'+expr;
  if(charEl.dataset.key!==key){
    charEl.innerHTML=charSVG(CAST[who],expr);
    charEl.dataset.key=key;
    charEl.classList.toggle('break',expr==='breakdown');
  }
}
function setName(who,tag){
  nameEl.textContent=NAMES[who]||who;
  if(tag){ dtagEl.textContent=tag; dtagEl.hidden=false; } else dtagEl.hidden=true;
}

let typing=null, advanceResolver=null, skipCurrent=null;
function typeText(text,who){
  if(typing){ clearTimeout(typing.timer); const old=typing; typing=null; old.resolve(); }
  return new Promise(resolve=>{
    const chars=Array.from(text); let i=0;
    textEl.textContent=''; charEl.classList.add('talking');
    const t={timer:null, resolve:resolve, finish:null};
    t.finish=()=>{ clearTimeout(t.timer); textEl.textContent=text; charEl.classList.remove('talking'); if(typing===t) typing=null; resolve(); };
    const tick=()=>{
      if(typing!==t) return;
      if(i>=chars.length){ t.finish(); return; }
      const ch=chars[i++]; textEl.textContent+=ch;
      if(i%2===1 && ch.trim()) SFX.blip(who);
      t.timer=setTimeout(tick,/[.!?…,]/.test(ch)?110:26);
    };
    typing=t; tick();
  });
}
function onAdvance(){
  if(skipCurrent){ skipCurrent(); return; }
  if(typing){ typing.finish(); return; }
  if(advanceResolver){ const r=advanceResolver; advanceResolver=null; r(); }
}
async function say(view,who,expr,text,opts){
  opts=opts||{};
  setView(view,who,expr); setName(who,opts.tag);
  textEl.className='text'+(opts.testimony?' testimony':'');
  nextEl.hidden=true;
  await typeText(text,who);
  nextEl.hidden=false;
  await new Promise(r=>{ advanceResolver=r; });
  nextEl.hidden=true;
}
async function line(arr){ for(const [who,expr,text] of arr) await say(VIEW_OF[who],who,expr,text); }

function flash(){ flashEl.classList.remove('on'); void flashEl.offsetWidth; flashEl.classList.add('on'); }
function shake(){ stageEl.classList.remove('shake'); void stageEl.offsetWidth; stageEl.classList.add('shake'); }
function overlay(el,ms,setup){
  return new Promise(res=>{
    setup(); el.classList.add('show');
    let done=false;
    const fin=()=>{ if(done) return; done=true; clearTimeout(tm); el.classList.remove('show'); el.className=el.className.replace(/\b(hold|evidence|objection)\b/g,'').trim(); skipCurrent=null; setTimeout(res,140); };
    const tm=setTimeout(fin,ms);
    el.onclick=fin; skipCurrent=fin;
  });
}
function shout(kind){
  const t={objection:'이의 있습니다!', hold:'잠깐만요!', evidence:'이걸 보시죠!'}[kind];
  return overlay(shoutEl,1300,()=>{ $('#shoutText').textContent=t; shoutEl.classList.add(kind); shake(); flash(); Music.sting(kind); });
}
function titleCard(main,sub){
  return overlay(tcEl,1800,()=>{ $('#tcMain').textContent=main; $('#tcSub').textContent=sub||''; SFX.title(); });
}
async function gavel(){
  gavelEl.classList.remove('show'); void gavelEl.offsetWidth; gavelEl.classList.add('show'); SFX.gavel(); shake();
  await wait(1000); gavelEl.classList.remove('show');
}

/* ===== 상태 ===== */
const S={trust:5};
function renderGauge(){
  const n=S.trust;
  $('#gauge').classList.toggle('danger',n<=2);
  $('#pips').innerHTML=Array.from({length:5},(_,i)=>`<span class="pip ${i<n?'on':''}"></span>`).join('');
  $('#gaugeNum').textContent=`${n}/5`+(n<=2?' 위험':'');
}
async function loseTrust(){
  SFX.wrong();
  stageEl.classList.remove('hurt'); void stageEl.offsetWidth; stageEl.classList.add('hurt');
  const on=document.querySelectorAll('.pip.on'); const last=on[on.length-1];
  if(last){ last.classList.add('losing'); await wait(650); }
  S.trust=Math.max(0,S.trust-1); renderGauge(); await wait(150);
}
function resetState(){
  const last=parseInt(store.get('yj-last-variant')||'-1',10);
  const pool=[0,1,2,3,4].filter(v=>v!==last);
  const v=pool[Math.floor(Math.random()*pool.length)];
  store.set('yj-last-variant',String(v));
  S.trust=5; S.variant=v; S.idx=0; S.log=[]; S.presses=0; S.classify={}; S.A=null; S.B=null; S.busy=false; S.done=false;
  S.aOpts=shuffle(VERDICT_A); S.bOpts=shuffle(VERDICT_B);
  S.lines=ORDER.map((L,i)=>({expr:L.expr, truth:L.truth, lieV:L.lie, isLie:i===v, cur:i===v?L.lie:L.truth}));
  renderGauge();
}
const correctCat=L=>L.isLie?'lie':L.truth.cat;

/* ===== 진행 ===== */
let played=false;
async function startTrial(){
  closeSheet(); Music.resume();
  rolesEl.hidden=true; controlsEl.hidden=true;
  resetState(); S.inTrial=true;
  bgm('open');
  if(!played){
    await say('judge','judge','normal','지금부터 역사 법정을 엽니다.');
    await gavel();
    await say('judge','judge','normal','오늘의 피고는 백제의 마지막 왕, 의자왕입니다.');
    await say('witness','defendant','smug','흥. 나라가 망한 게 왜 내 탓이란 말이오?');
    await say('def','rival','confident','변호인 누리입니다. 피고에 대한 소문 가운데에는 부풀려진 것이 많습니다.');
    await say('player','player','confident','검사 하람입니다. 소문이 아니라 증거로, 백제가 무너진 책임을 따지겠습니다.');
    await say('judge','judge','normal','피고는 증언하시오. 검사는 증거로 따지시오.');
    await say('judge','judge','stern','엉뚱한 증거를 내면 재판부의 신뢰가 한 칸 줄어듭니다. 0칸이 되면 재판에서 집니다.');
  } else {
    await say('judge','judge','normal','다시 재판을 엽니다. 피고의 말이 지난번과 다를 수 있습니다.');
    await gavel();
  }
  played=true;
  bgm('testimony');
  await titleCard('― 증언 ―','백제가 망한 것은 내 탓이 아니다');
  for(let i=0;i<S.lines.length;i++){
    const L=S.lines[i];
    await say('witness','defendant',L.expr,L.cur.text,{testimony:true, tag:`증언 ${i+1}/${S.lines.length}`});
  }
  await say('judge','judge','normal','이 증언 가운데 사료와 맞지 않는 말이 있는지 따져 보시오.');
  bgm('cross');
  await titleCard('― 추궁 ―','더 묻고, 틀린 말에는 증거를 내세요');
  enterCross(0);
}
function enterCross(i){
  S.idx=i; const L=S.lines[i];
  setView('witness','defendant',L.expr);
  setName('defendant',`추궁 ${i+1}/${S.lines.length}`);
  textEl.className='text testimony'; nextEl.hidden=true;
  typeText(L.cur.text,'defendant');
  controlsEl.hidden=false;
}
async function doPress(){
  if(S.busy) return; S.busy=true; controlsEl.hidden=true; S.presses++;
  await shout('hold');
  await line(S.lines[S.idx].cur.press);
  S.busy=false; enterCross(S.idx);
}
async function doPresent(id){
  closeSheet(); if(S.busy) return; S.busy=true; controlsEl.hidden=true;
  const L=S.lines[S.idx], card=EV_BY_ID[id];
  const ok=L.isLie && L.cur.ev===id;
  S.log.push({line:S.idx+1, card:id, ok:ok});
  if(ok){
    Music.stop(0.02); await wait(180);
    await shout('objection');
    bgm('turnabout');
    await line(L.cur.hit);
    await say('def','rival','shock','그, 그럴 수가…!');
    Music.stop(0.05); Music.sting('breakdown');
    await say('witness','defendant','breakdown','으아아아…! 내, 내 증언이 무너진다…!');
    bgm('open');
    await say('judge','judge','shock','허어…! 피고의 증언이 사료와 맞지 않는군요.');
    await say('def','rival','sweat','…변호인은 그 기록을 인정합니다.');
    await say('def','rival','normal','다만 피고에게도 어쩔 수 없던 사정이 있었습니다. 그 부분은 판결에서 헤아려 주십시오.');
    await say('judge','judge','normal','좋습니다. 검사, 피고의 말을 하나씩 가려 주시오. 거짓인지, 핑계인지, 헤아려야 할 시대 상황인지.');
    bgm('investigate');
    S.busy=false; openClassify();
  } else {
    await shout('evidence');
    await say('player','player','present',`이 증거를 보시죠. ‘${card.title}’입니다!`);
    await say('judge','judge','stern','그 증거로는 이 증언을 반박할 수 없습니다.');
    await loseTrust();
    if(S.trust<=0){
      bgm('crisis');
      await say('judge','judge','stern','재판부는 더 이상 검사를 믿을 수 없습니다. 오늘 재판은 여기까지입니다.');
      await gavel();
      await say('judge','judge','normal','다만 검사가 졌다고 피고의 책임이 사라지는 것은 아닙니다. 증거를 다시 갖춰 항소하시오.');
      S.busy=false; S.inTrial=false; openGameOver(); return;
    }
    await say('witness','defendant','smug','흥, 엉뚱한 증거로군.');
    await say('def','rival','smug','검사, 증거는 증언과 정확히 맞아야 합니다.');
    if(S.trust<=2 && S.bgm!=='crisis'){ bgm('crisis'); await say('judge','judge','stern','검사, 재판부의 신뢰가 얼마 남지 않았습니다.'); }
    S.busy=false; enterCross(S.idx);
  }
}
async function deliverVerdict(){
  closeSheet(); bgm('open');
  await titleCard('― 판결 ―','');
  await say('judge','judge','normal',`재판부는 ${S.A.t}을, 피고가 어쩔 수 없었던 시대 상황으로 인정합니다.`);
  await say('judge','judge','stern',`그러나 ${S.B.t}은 피고 자신의 선택이었습니다.`);
  await say('judge','judge','normal','따라서 백제가 무너진 책임의 일부는 피고에게 있습니다.');
  bgm('verdict');
  await gavel();
  await say('witness','defendant','sweat','…….');
  S.done=true; S.inTrial=false; openResult();
}

/* ===== 시트 ===== */
let sheetCloseable=true;
function openSheet(html,closeable){
  onSheetClose=null; sheetCard.innerHTML=html; sheetEl.hidden=false; sheetCloseable=!!closeable; sheetCard.scrollTop=0;
  const f=sheetCard.querySelector('button:not([disabled])'); if(f) f.focus({preventScroll:true});
}
let onSheetClose=null;
function closeSheet(){ sheetEl.hidden=true; sheetCard.innerHTML=''; const f=onSheetClose; onSheetClose=null; if(f) f(); }
sheetEl.addEventListener('click',e=>{ if(e.target===sheetEl && sheetCloseable) closeSheet(); });

const dots=n=>`<span class="dots">${'●'.repeat(n)}${'○'.repeat(3-n)}</span>`;
function evHTML(e,selectable){
  const tag=selectable?'button':'div';
  return `<${tag} class="ev" data-id="${e.id}"${selectable?' type="button" aria-pressed="false"':''}>
    <span class="ev-top"><span class="chip">${e.type}</span><span class="ev-mark">✓ 고름</span></span>
    <span class="ev-title">${esc(e.title)}</span>
    <span class="ev-body">${esc(e.body)}</span>
    <span class="ev-src">출처: ${esc(e.src)}</span>
    <span class="ev-trust">믿을 만한 정도 ${dots(e.trust)} ${TRUSTW[e.trust]}. ${esc(e.note)}</span>
  </${tag}>`;
}
function openRecord(presentMode){
  let sel=null; const L=presentMode?S.lines[S.idx]:null;
  openSheet(`<h2>증거 수첩</h2>
    ${presentMode?`<p class="lead">지금 따지는 증언 ${S.idx+1}: <span class="q">“${esc(L.cur.text)}”</span></p>`:`<p class="lead">출처와 믿을 만한 정도를 함께 보세요. 누가, 언제 쓴 기록인지가 중요해요.</p>`}
    <div class="evgrid">${EVIDENCE.map(e=>evHTML(e,presentMode)).join('')}</div>
    <div class="sheet-foot">
      ${presentMode?'<span class="risk-note">틀리면 재판부 신뢰 −1</span>':''}
      <button class="abtn" data-act="close" type="button">닫기</button>
      ${presentMode?'<button class="abtn primary" data-act="present" type="button" disabled>이 증거 제시하기</button>':''}
    </div>`,true);
  if(presentMode){
    const pb=sheetCard.querySelector('[data-act=present]');
    sheetCard.querySelectorAll('button.ev').forEach(b=>b.addEventListener('click',()=>{
      sel=b.dataset.id;
      sheetCard.querySelectorAll('button.ev').forEach(x=>{ const on=x.dataset.id===sel; x.classList.toggle('sel',on); x.setAttribute('aria-pressed',on?'true':'false'); });
      pb.disabled=false;
    }));
    pb.addEventListener('click',()=>{ if(sel) doPresent(sel); });
  }
  sheetCard.querySelector('[data-act=close]').addEventListener('click',closeSheet);
}

function openClassify(){
  S.classify={};
  openSheet(`<h2>증언 가르기</h2>
    <p class="lead">피고의 말 하나하나를 세 갈래로 나누세요.</p>
    <div class="help"><div><b>거짓</b>사실과 다른 말</div><div><b>핑계</b>사실이지만, 책임을 덜어 주지 못하는 말</div><div><b>참작할 시대 상황</b>판결에서 헤아려야 할 진짜 사정</div></div>
    ${S.lines.map((L,i)=>`<div class="cl-row" data-i="${i}">
      <div class="cl-q"><span class="num">${i+1}</span>“${esc(L.cur.text)}”</div>
      <div class="seg">${CATS.map(([c,t])=>`<button type="button" data-c="${c}" aria-pressed="false">${t}</button>`).join('')}</div>
      <div class="cl-fb" hidden></div></div>`).join('')}
    <div class="sheet-foot"><span class="note" id="clNote">다섯 개를 모두 고르면 판정을 받을 수 있어요.</span><button class="abtn primary" id="bJudge" type="button" disabled>판정 받기</button></div>`,false);
  const bJ=$('#bJudge');
  sheetCard.querySelectorAll('.cl-row').forEach(row=>{
    const i=+row.dataset.i;
    row.querySelectorAll('.seg button').forEach(b=>b.addEventListener('click',()=>{
      if(S.classified) return;
      S.classify[i]=b.dataset.c;
      row.querySelectorAll('.seg button').forEach(x=>{ const on=x===b; x.classList.toggle('sel',on); x.setAttribute('aria-pressed',on?'true':'false'); });
      bJ.disabled=Object.keys(S.classify).length<S.lines.length;
    }));
  });
  S.classified=false;
  bJ.addEventListener('click',()=>{
    if(!S.classified){
      S.classified=true; let n=0;
      sheetCard.querySelectorAll('.cl-row').forEach(row=>{
        const i=+row.dataset.i, L=S.lines[i], ans=correctCat(L), got=S.classify[i]===ans; if(got) n++;
        row.querySelectorAll('.seg button').forEach(x=>x.disabled=true);
        const fb=row.querySelector('.cl-fb'); fb.hidden=false; fb.className='cl-fb '+(got?'ok':'no');
        fb.textContent=(got?'○ 맞아요. ':`× 정답은 ‘${CAT_NAME[ans]}’. `)+(L.isLie?L.cur.why:L.truth.why);
      });
      $('#clNote').textContent=`${S.lines.length}개 중 ${n}개를 맞혔어요.`;
      bJ.textContent='판결문 쓰기';
    } else openVerdict();
  });
}

function openVerdict(){
  S.A=null; S.B=null;
  openSheet(`<h2>판결문 쓰기</h2>
    <p class="lead">빈칸에 들어갈 근거를 하나씩 고르세요.</p>
    <div class="vtext" id="vtext"></div>
    <h3>㉠ 시대 상황으로 인정할 것</h3><div class="opts" id="optA">${S.aOpts.map((o,i)=>`<button class="opt" type="button" data-i="${i}" aria-pressed="false">${esc(o.t)}</button>`).join('')}</div>
    <h3>㉡ 피고 자신의 선택이었던 것</h3><div class="opts" id="optB">${S.bOpts.map((o,i)=>`<button class="opt" type="button" data-i="${i}" aria-pressed="false">${esc(o.t)}</button>`).join('')}</div>
    <div class="sheet-foot"><button class="abtn primary" id="bVerdict" type="button" disabled>판결 선고</button></div>`,false);
  const upd=()=>{
    $('#vtext').innerHTML=`재판부는 <span class="blank">${S.A?esc(S.A.t):'㉠ ……'}</span>을, 피고가 어쩔 수 없었던 시대 상황으로 인정한다. 그러나 <span class="blank">${S.B?esc(S.B.t):'㉡ ……'}</span>은 피고 자신의 선택이었다. 따라서 백제가 무너진 책임의 일부는 피고에게 있다.`;
    $('#bVerdict').disabled=!(S.A&&S.B);
  };
  const bind=(boxId,opts,key)=>{ $(boxId).querySelectorAll('.opt').forEach(b=>b.addEventListener('click',()=>{
    S[key]=opts[+b.dataset.i];
    $(boxId).querySelectorAll('.opt').forEach(x=>{ const on=x===b; x.classList.toggle('sel',on); x.setAttribute('aria-pressed',on?'true':'false'); });
    upd();
  })); };
  bind('#optA',S.aOpts,'A'); bind('#optB',S.bOpts,'B'); upd();
  $('#bVerdict').addEventListener('click',deliverVerdict);
}

function score(){
  const cl=S.lines.filter((L,i)=>S.classify[i]===correctCat(L)).length;
  const a=S.A&&S.A.ok?5:0, b=S.B&&S.B.ok?5:0, hidden=S.B&&S.B.key?5:0;
  return {cl:cl, a:a, b:b, hidden:hidden, total:S.trust*10+cl*8+a+b+hidden};
}
function tierOf(t){
  if(t>=95) return {name:'명판관', desc:'사료를 정확히 짚고, 시대 상황과 책임을 깔끔하게 갈랐어요.'};
  if(t>=80) return {name:'공정한 재판관', desc:'근거로 판단했어요. 한두 군데만 다시 보면 완벽해요.'};
  if(t>=60) return {name:'성실한 재판관', desc:'끝까지 따졌어요. 증거와 증언을 한 번 더 맞대 보세요.'};
  return {name:'견습 재판관', desc:'증거 카드를 천천히 다시 읽어 보세요. 단서는 글 속에 있어요.'};
}
function openResult(){
  const sc=score(), tier=tierOf(sc.total), wrongs=S.log.filter(x=>!x.ok).length;
  openSheet(`<h2>재판 기록</h2>
    <div class="tier">${tier.name}</div><p class="lead">${tier.desc}</p>
    <div class="stats">
      <div class="stat">남은 재판부 신뢰<b>${S.trust}/5</b></div>
      <div class="stat">헛 제시<b>${wrongs}번</b></div>
      <div class="stat">증언 가르기<b>${sc.cl}/${S.lines.length}</b></div>
      <div class="stat">판결문 근거<b>${(sc.a?1:0)+(sc.b?1:0)}/2</b></div>
      <div class="stat">점수<b>${sc.total}</b></div>
    </div>
    <div class="vfb">㉠ ${esc(S.A.t)}: ${esc(S.A.fb)}<br>㉡ ${esc(S.B.t)}: ${esc(S.B.fb)}</div>
    <div class="history"><b>실제 역사에서는…</b>
      <p>660년, 당나라와 신라의 군대가 백제로 쳐들어왔어요. 계백 장군이 황산벌에서 맞섰지만 졌고, 수도 사비성이 무너졌어요. 의자왕은 웅진성으로 피했다가 항복했고, 당나라로 끌려가 그해 세상을 떠났어요.</p>
      <p>그런데 의자왕에 대한 기록은 대부분 백제를 무너뜨린 신라와 당, 그리고 훗날 고려 사람들이 남겼어요. ‘3천 궁녀’라는 숫자도 옛 사료에는 나오지 않아요. 그래서 ‘놀기만 한 왕’이라는 모습이 부풀려졌을 수 있다는 의견도 있어요. 증거를 볼 때는 누가 쓴 기록인지도 함께 따져야 해요.</p>
    </div>
    <div class="sheet-foot"><button class="abtn" id="rRoles" type="button">역할 고르기로</button><button class="abtn" id="rTeacher" type="button">교사용 기록</button><button class="abtn primary" id="rRetry" type="button">다른 변형으로 다시 재판</button></div>`,false);
  $('#rRoles').addEventListener('click',backToRoles);
  $('#rTeacher').addEventListener('click',openTeacher);
  $('#rRetry').addEventListener('click',startTrial);
}
function openGameOver(){
  openSheet(`<h2>이번 재판은 검사가 졌습니다</h2>
    <p class="lead">재판부의 신뢰가 0칸이 되었어요. 이 결과는 ‘피고에게 책임이 없다’는 뜻이 아니라 ‘검사가 증거로 증명하지 못했다’는 뜻이에요.</p>
    <p class="lead">증거 카드의 글을 천천히 다시 읽고 항소하세요. 항소심에서는 피고가 다른 곳에서 거짓말을 할 수 있어요.</p>
    <div class="sheet-foot"><button class="abtn" id="gTeacher" type="button">교사용 기록</button><button class="abtn primary" id="gRetry" type="button">항소하기</button></div>`,false);
  $('#gTeacher').addEventListener('click',openTeacher);
  $('#gRetry').addEventListener('click',startTrial);
}

function openTeacher(){
  const back=S.done?openResult:null;
  let body='';
  if(!S.lines){
    body=`<p class="lead">재판을 시작하면 이번 판의 정답과 학생의 증거 제시 기록이 여기에 나옵니다.</p>`;
  } else {
    const v=S.variant, lieL=S.lines[v];
    body=`<p class="lead">이번 판은 변형 ${v+1}/5입니다. 거짓 증언의 위치가 판마다 바뀌고, 같은 기기에서는 직전 변형이 다시 나오지 않습니다.</p>
    <div class="tblwrap"><table><thead><tr><th>번호</th><th>이번 판 증언</th><th>정답 갈래</th><th>반박 증거</th></tr></thead><tbody>
    ${S.lines.map((L,i)=>`<tr><td>${i+1}</td><td>${esc(L.cur.text)}</td><td>${CAT_NAME[correctCat(L)]}</td><td>${L.isLie?L.cur.ev+' '+esc(EV_BY_ID[L.cur.ev].title):'없음'}</td></tr>`).join('')}
    </tbody></table></div>
    <h3>숨은 핵심 (학생 화면에 표시하지 않음)</h3>
    <p>판결문 ㉡에 ‘성충의 경고를 듣고도 따르지 않은 것’을 고르면 +5점. 관련 증거는 E3 「성충의 마지막 글」.${S.B?` 이번 판 선택: ${S.B.key?'사용함':'사용 안 함'}.`:''}</p>
    <h3>증거 제시 기록</h3>
    ${S.log.length?`<div class="tblwrap"><table><thead><tr><th>증언 번호</th><th>낸 증거</th><th>결과</th></tr></thead><tbody>${S.log.map(x=>`<tr><td>${x.line}</td><td>${x.card} ${esc(EV_BY_ID[x.card].title)}</td><td>${x.ok?'맞음':'틀림 (신뢰 −1)'}</td></tr>`).join('')}</tbody></table></div>`:'<p>아직 낸 증거가 없습니다.</p>'}
    <p>더 묻기 횟수: ${S.presses}번</p>
    ${S.classified?`<h3>분류 결과</h3><p>${S.lines.map((L,i)=>`${i+1}번 ${CAT_NAME[S.classify[i]]||'-'} ${S.classify[i]===correctCat(L)?'○':'×'}`).join(', ')}</p>`:''}`;
  }
  openSheet(`<h2>교사용</h2>${body}
    <h3>고증 확인 목록</h3><ol class="check">${GOJEUNG.map(x=>`<li>${esc(x)}</li>`).join('')}</ol>
    <div class="sheet-foot"><button class="abtn primary" id="tClose" type="button">${back?'재판 기록으로':'닫기'}</button></div>`,!back);
  $('#tClose').addEventListener('click',()=>{ if(back) back(); else closeSheet(); });
}

/* ===== 캐릭터 공방 ===== */
const PARTS={
  skin:['#f6d2b0','#efc69c','#e2b48a','#f0caa4','#d9a77c'],
  robe:[['#6a3d8f','#4b2a66'],['#b3352b','#86241d'],['#2f5d8a','#1f3f60'],['#3d6b4a','#284a33'],['#2a2b33','#17181d'],['#8a6a2a','#5e4818']],
  collar:['cross','round','suit','blazer'], hat:['baekje','ikseon','gat','short','student'],
  beard:['none','king','thin','long'], hair:['#1c1a20','#3b2a1e','#5a4636','#2b2b2b']
};
const pick=a=>a[Math.floor(Math.random()*a.length)];
function randomSpec(){
  const r=pick(PARTS.robe);
  const sp={name:'새 피고', skin:pick(PARTS.skin), robe:r[0], robe2:r[1], collar:pick(PARTS.collar), hat:pick(PARTS.hat), hair:pick(PARTS.hair), beard:pick(PARTS.beard)};
  if(sp.collar==='round' && Math.random()<.6) sp.emblem=true;
  if(sp.collar==='suit') sp.tie='#5b1f2a';
  if(sp.beard==='long' && Math.random()<.5) sp.beardColor='#e6e0d4';
  return sp;
}
const DEF_EX=['normal','smug','sweat','shock','breakdown'];
function wsRow(sp,ex,sub){
  return `<div class="ws-row"><div class="ws-name">${esc(sp.name)}<small>${sub||''}</small></div>${ex.map(e=>`<div class="ws-cell">${charSVG(sp,e)}${EXPR_LABEL[e]}</div>`).join('')}</div>`;
}
function openWorkshop(){
  const rows=wsRow(CAST.judge,['normal','smile','stern','shock'],'재판장')+wsRow(CAST.player,['normal','confident','present','sweat','shock'],'검사')+wsRow(CAST.rival,['normal','confident','smug','sweat','shock'],'변호인')+wsRow(CAST.daon,['normal','confident','think','sweat','shock'],'판사 (예정)')+SAMPLES.map(sp=>wsRow(sp,DEF_EX,'피고 후보')).join('');
  openSheet(`<h2>캐릭터 공방</h2>
    <p class="lead">모든 인물은 같은 틀에서 찍어냅니다. 피부, 옷 색, 깃, 관모, 수염만 바꾸면 새 피고가 되고, 표정 다섯 가지는 자동으로 따라옵니다.</p>
    ${rows}
    <h3>새 피고 찍어내기</h3><div id="wsRand"></div>
    <div class="sheet-foot"><button class="abtn" id="wsNew" type="button">한 명 더 찍기</button><button class="abtn primary" id="wsClose" type="button">닫기</button></div>`,true);
  const gen=()=>{ const sp=randomSpec(); $('#wsRand').innerHTML=wsRow(sp,DEF_EX,'무작위')+`<pre class="code">${esc(JSON.stringify(sp,null,2))}</pre>`; };
  gen();
  $('#wsNew').addEventListener('click',gen);
  $('#wsClose').addEventListener('click',closeSheet);
}

/* ===== BGM 연결 ===== */
function bgm(id){ S.bgm=id; Music.play(id); }
function openJukebox(){
  const render=()=>{
    const cur=Music.current;
    sheetCard.innerHTML=`<h2>BGM 주크박스</h2>
      <p class="lead">곡은 모두 이 페이지가 코드로 직접 연주합니다. 음원 파일도, 다른 게임의 음악도 쓰지 않았습니다. 재판이 흘러가는 순서대로 놓았습니다.</p>
      ${Music.on?'':'<p class="mute-note">지금 소리가 꺼져 있어요. 위의 ‘소리 끔’ 단추를 눌러 켜세요.</p>'}
      <ol class="tracks">${TRACK_ORDER.map(id=>{ const T=TRACKS[id], on=cur===id; return `<li class="trk${on?' on':''}"><button class="abtn${on?' primary':''}" type="button" data-play="${id}" aria-pressed="${on}">${on?'■ 멈춤':'▶ 듣기'}</button><div><b>${T.title}</b><span>${T.scene}</span><small>${T.meta}</small></div></li>`; }).join('')}</ol>
      <h3>짧은 효과음</h3>
      <div class="stings">${STINGS.map(x=>`<button class="abtn" type="button" data-sting="${x[0]}">${x[1]}</button>`).join('')}</div>
      <div class="sheet-foot"><button class="abtn primary" type="button" data-close>닫기</button></div>`;
    sheetCard.querySelectorAll('[data-play]').forEach(b=>b.addEventListener('click',()=>{ Music.resume(); if(Music.current===b.dataset.play) Music.stop(0.3); else Music.play(b.dataset.play); render(); }));
    sheetCard.querySelectorAll('[data-sting]').forEach(b=>b.addEventListener('click',()=>{ Music.resume(); Music.sting(b.dataset.sting); }));
    sheetCard.querySelector('[data-close]').addEventListener('click',closeSheet);
  };
  openSheet('',true); render();
  onSheetClose=()=>{ if(S.inTrial && S.bgm && Music.current!==S.bgm) Music.play(S.bgm); };
}

/* ===== 역할 고르기 ===== */
const ROLES=[
  {id:'pros', sp:'player', expr:'confident', name:'검사', who:'하람', goal:'피고의 거짓말을 잡아낸다.', how:'증언을 추궁하고, 모순에 증거를 낸다. 증거 없는 혐의는 세울 수 없다.', ready:true},
  {id:'def', sp:'rival', expr:'normal', name:'변호인', who:'누리', goal:'잘못 알려진 혐의를 벗긴다.', how:'누가 언제 쓴 기록인지 따지고 증거의 힘을 다툰다. 확정된 사실은 부정할 수 없다.', ready:false},
  {id:'judge', sp:'daon', expr:'normal', name:'판사', who:'다온', goal:'모든 정황을 보고 판결한다.', how:'증거를 받아들이거나 물리치고, 혐의마다 판단해 판례를 근거로 판결문을 쓴다.', ready:false}
];
function renderRoles(){
  rolesEl.innerHTML=`<h2 class="roles-h">역할을 고르세요</h2><p class="roles-lead">같은 사건을 세 자리에서 볼 수 있게 만듭니다. 이번 시제품은 검사 자리만 해 볼 수 있어요.</p>
    <div class="role-grid">${ROLES.map(r=>`<div class="role${r.ready?' ready':''}"><div class="role-pic">${charSVG(CAST[r.sp],r.expr)}</div><h3>${r.name}<span>${r.who}</span></h3><p class="goal">${r.goal}</p><p class="how">${r.how}</p>${r.ready?`<button class="btn go" type="button" data-role="${r.id}">맛보기 재판 시작<small>10분 안팎, 소리를 켜 주세요</small></button>`:'<button class="btn" type="button" disabled>기획 확인 뒤 제작</button>'}</div>`).join('')}</div>`;
  rolesEl.querySelector('[data-role=pros]').addEventListener('click',startTrial);
}
function backToRoles(){
  closeSheet(); Music.stop(0.6); S.inTrial=false; S.bgm=null;
  controlsEl.hidden=true; rolesEl.hidden=false;
  setView('witness','defendant','smug'); setName('guide'); textEl.className='text'; nextEl.hidden=true;
  textEl.textContent='역할을 고르면 재판이 시작됩니다. 글상자를 누르면 다음 말로 넘어갑니다.';
}

/* ===== 이벤트 ===== */
dialogEl.addEventListener('click',onAdvance);
$('#shoutSkip').addEventListener('click',e=>{ e.stopPropagation(); if(skipCurrent) skipCurrent(); });
$('#tcSkip').addEventListener('click',e=>{ e.stopPropagation(); if(skipCurrent) skipCurrent(); });
$('#tJuke').addEventListener('click',openJukebox);
$('#tWorkshop').addEventListener('click',openWorkshop);
$('#tTeacher').addEventListener('click',openTeacher);
$('#tRecord').addEventListener('click',()=>openRecord(false));
$('#bPress').addEventListener('click',doPress);
$('#bPresent').addEventListener('click',()=>{ if(!S.busy) openRecord(true); });
$('#bPrev').addEventListener('click',()=>{ if(!S.busy) enterCross((S.idx-1+S.lines.length)%S.lines.length); });
$('#bNext').addEventListener('click',()=>{ if(!S.busy) enterCross((S.idx+1)%S.lines.length); });
const soundBtn=$('#tSound'), volEl=$('#vol');
function renderSound(){ soundBtn.textContent=Music.on?'소리 켬':'소리 끔'; soundBtn.setAttribute('aria-pressed',Music.on?'true':'false'); }
volEl.value=String(Math.round(Music.volume*100));
volEl.addEventListener('input',()=>Music.setVolume(+volEl.value/100));
Music.onChange(id=>{ $('#np').textContent=id?'♪ '+TRACKS[id].title:''; });
soundBtn.addEventListener('click',()=>{ Music.setEnabled(!Music.on); Music.resume(); renderSound(); });
document.addEventListener('keydown',e=>{
  if(!sheetEl.hidden){ if(e.key==='Escape' && sheetCloseable) closeSheet(); return; }
  if((e.key==='Enter'||e.key===' ') && !(e.target instanceof HTMLButtonElement)){ e.preventDefault(); onAdvance(); }
});

/* ===== 첫 화면 ===== */
renderSound(); renderGauge(); renderRoles();
setView('witness','defendant','smug'); setName('guide');
textEl.textContent='역사 법정에 오신 것을 환영합니다. 아래에서 역할을 고르세요. 글상자를 누르면 다음 말로 넘어갑니다.';
})();
