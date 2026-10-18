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
    drums:{buk:'x...x...', tak:'....o...', jing:'x'+'.'.repeat(31)},
    intro:{buk:'X.x.X.xx', crash:'x.......', jing:'x.......'}, fill:{tak:'..x.xxxx', buk:'x...x.xX'}},
  investigate:{title:'조사 · 흔적을 따라', scene:'증거 모으기, 증언 가르기', meta:'4/4 보통 · 가야금, 대금', bpm:92, spb:2, bar:8, bars:8, gain:.8,
    chords:[['F3','A3','C4'],['D3','F3','A3'],['Bb3','D4','F4'],['C4','E4','G4'],['F3','A3','C4'],['A3','C4','E4'],['Bb3','D4','F4'],['C4','E4','G4']],
    parts:[{inst:'pluck',pat:'0.1.2.1.',oct:1,v:.6},{inst:'pad',v:.5},{inst:'bass',pat:'r...r...',len:3},
      {inst:'lead',seq:'A4:4 C5:2 D5:2 | F5:6 D5:2 | D5:3 C5:1 F5:4 | G5:8 | A5:4 G5:2 F5:2 | E5:3 C5:1 A4:4 | Bb4:2 C5:2 D5:2 F5:2 | E5:6 -:2'}],
    drums:{kung:'x.......', tak:'....o...'},
    intro:{tak:'x.x.x.xx', kung:'x.......'}, fill:{tak:'..o.o.xx'}},
  testimony:{title:'증언 · 진실과 거짓 사이', scene:'피고와 증인의 증언', meta:'4/4 보통 · 가야금 분산화음, 대금', bpm:104, spb:2, bar:8, bars:8, gain:.85,
    chords:[['A3','C4','E4'],['F3','A3','C4'],['G3','B3','D4'],['E3','G3','B3'],['A3','C4','E4'],['F3','A3','C4'],['D3','F3','A3'],['E3','G#3','B3']],
    parts:[{inst:'bass',pat:'r.rr.rR.'},{inst:'pluck',pat:'0.1.2.1.',oct:1,v:.75},{inst:'pad',v:.6},
      {inst:'lead',seq:'E5:3 C5:1 B4:2 A4:2 | C5:4 A4:4 | B4:3 D5:1 G5:4 | E5:8 | A5:3 G5:1 E5:2 C5:2 | D5:2 C5:2 A4:4 | F5:3 E5:1 D5:2 C5:2 | B4:4 G#4:4'}],
    drums:{hat:'x.x.x.x.', tak:'....x...', kung:'x.....x.'},
    intro:{kung:'X..x.xX.', tak:'..x.x.xx', crash:'x.......'}, fill:{tak:'x.xxx.xx', kung:'x...x.X.'}},
  cross:{title:'추궁 · 자진모리', scene:'증언을 흔들 때', meta:'12/8 빠름 · 장구, 북, 브라스, 태평소풍 선율', bpm:108, spb:3, bar:12, bars:8, gain:.9,
    chords:[['E3','G3','B3'],['E3','G3','B3'],['C3','E3','G3'],['D3','F#3','A3'],['E3','G3','B3'],['E3','G3','B3'],['C3','E3','G3'],['B2','D#3','F#3']],
    parts:[{inst:'bass',pat:'rrRrr5rrRr5R',v:.9},{inst:'brass',pat:'x.....x..x..',oct:1,v:.8},{inst:'pluck',pat:'012102012102',oct:1,v:.42},
      {inst:'lead',seq:'E5:3 G5:2 A5:1 B5:3 A5:3 | G5:2 E5:1 D5:3 E5:6 | G5:3 A5:2 B5:1 C6:3 B5:3 | A5:2 F#5:1 D5:3 A5:6 | B5:3 D6:2 E6:1 D6:3 B5:3 | A5:2 G5:1 E5:3 G5:6 | E5:2 G5:1 C6:3 B5:2 A5:1 G5:3 | F#5:3 D#5:3 B4:6'},
      {inst:'pluck',oct:-1,v:.38,seq:'E5:3 G5:2 A5:1 B5:3 A5:3 | G5:2 E5:1 D5:3 E5:6 | G5:3 A5:2 B5:1 C6:3 B5:3 | A5:2 F#5:1 D5:3 A5:6 | B5:3 D6:2 E6:1 D6:3 B5:3 | A5:2 G5:1 E5:3 G5:6 | E5:2 G5:1 C6:3 B5:2 A5:1 G5:3 | F#5:3 D#5:3 B4:6'}],
    drums:{buk:'X..x..X..x..', tak:'..x.xx..x.x.', hat:'x.xx.xx.xx.x', crash:'x'+'.'.repeat(95)},
    intro:{buk:'X..X..X.XXXX', tak:'xxxxxxxxxxxx', crash:'x...........'}, fill:{tak:'x.xx.xxxxxxx', buk:'X..x..X.XX.X', snare:'......xxxXXX'}},
  crisis:{title:'위기 · 몰린 검사', scene:'재판부 신뢰가 2칸 이하일 때', meta:'4/4 느림 · 심장 박동, 낮은 현악, 종', bpm:66, spb:2, bar:8, bars:4, gain:1,
    chords:[['C3','Eb3','G3'],['Db3','F3','Ab3'],['C3','Eb3','G3'],['B2','D3','F3']],
    parts:[{inst:'pad',v:.9},{inst:'bass',seq:'C2:8 | Db2:8 | C2:8 | B1:8'},
      {inst:'bell',seq:'G5:3 -:1 Ab5:2 -:2 | -:8 | G5:2 F5:2 Eb5:2 D5:2 | -:4 B4:4'}],
    drums:{kung:'x.x.....', hat:'o.o.o.o.'},
    intro:{jing:'x.......', kung:'x.x.....'}},
  turnabout:{title:'역전 · 휘모리', scene:'모순을 찔렀을 때', meta:'4/4 아주 빠름 · 북, 장구, 브라스, 태평소풍 선율', bpm:152, spb:4, bar:16, bars:8, gain:.78,
    chords:[['G3','Bb3','D4'],['Eb3','G3','Bb3'],['F3','A3','C4'],['D3','F#3','A3'],['G3','Bb3','D4'],['Eb3','G3','Bb3'],['C3','Eb3','G3'],['D3','F#3','A3']],
    parts:[{inst:'bass',pat:'r.rRr.rRr.rRr.R5'},{inst:'brass',pat:'x..x..x...x..x..',oct:1,len:2,v:.75},{inst:'pad',oct:1,v:.7},
      {inst:'lead',bright:true,seq:'D5:4 G5:4 A5:2 Bb5:2 A5:4 | G5:6 F5:2 Eb5:4 G5:4 | A5:4 C6:4 Bb5:2 A5:2 F5:4 | F#5:8 A5:4 D6:4 | G5:2 A5:2 Bb5:4 D6:4 C6:2 Bb5:2 | Bb5:6 C6:2 Eb6:8 | D6:4 C6:2 Bb5:2 G5:4 Eb6:4 | D6:8 A5:4 F#5:4'},
      {inst:'pluck',oct:-1,v:.36,seq:'D5:4 G5:4 A5:2 Bb5:2 A5:4 | G5:6 F5:2 Eb5:4 G5:4 | A5:4 C6:4 Bb5:2 A5:2 F5:4 | F#5:8 A5:4 D6:4 | G5:2 A5:2 Bb5:4 D6:4 C6:2 Bb5:2 | Bb5:6 C6:2 Eb6:8 | D6:4 C6:2 Bb5:2 G5:4 Eb6:4 | D6:8 A5:4 F#5:4'}],
    drums:{buk:'X...x...X...x...', snare:'....X.......X...', tak:'..x...x...x.x.x.', hat:'x.x.x.x.x.x.x.x.', crash:'x'+'.'.repeat(63)},
    intro:{buk:'X.......X.X.XXXX', snare:'........xxxxXXXX', crash:'x...............', jing:'x...............'}, fill:{snare:'....X.....xxXXXX', buk:'X...x...X.X.X.X.'}},
  verdict:{title:'판결 · 선고', scene:'판결이 내려질 때', meta:'4/4 경쾌 · 징, 브라스, 현악', bpm:116, spb:2, bar:8, bars:8, gain:.85,
    chords:[['C4','E4','G4'],['F3','A3','C4'],['G3','B3','D4'],['C4','E4','G4'],['A3','C4','E4'],['F3','A3','C4'],['G3','B3','D4'],['C4','E4','G4']],
    parts:[{inst:'brass',pat:'x...x...',len:3,v:.7},{inst:'pad',v:.6},{inst:'bass',pat:'r.R.r.R.'},
      {inst:'lead',bright:true,seq:'C5:2 E5:2 G5:4 | A5:3 G5:1 F5:2 A5:2 | G5:4 D5:2 E5:2 | C5:8 | E5:2 A5:2 C6:4 | C6:3 A5:1 G5:2 F5:2 | G5:2 A5:2 B5:2 D6:2 | C6:8'}],
    drums:{buk:'x...x...', snare:'....x...', tak:'..x...x.', hat:'x.x.x.x.', jing:'x'+'.'.repeat(63)},
    intro:{buk:'X.X.XXXX', snare:'....xxXX', crash:'x.......'}, fill:{snare:'....xxXX', buk:'x...x.xX'}}
};
const TRACK_ORDER=['open','investigate','testimony','cross','crisis','turnabout','verdict'];
const STINGS=[['objection','이의 있습니다!'],['whoosh','외침 직전 휙'],['zoom','근접 화면'],['murmur','방청석 웅성거림'],['realize','깨달음'],['crack','방울 깨짐'],['get','증거 획득'],['heal','방울 회복'],['miss','헛짚음'],['step','구역 이동'],['tick','증언 넘김'],['click','고르기'],['slam','책상 내려치기'],['hold','잠깐만요!'],['evidence','증거 제시'],['breakdown','피고 무너짐'],['wrong','헛 제시'],['gavel','의사봉'],['title','장 전환'],['gasp','컥!'],['cough','기침'],['thud','쿵 (무거운)'],['clash','칼 부딪는 소리'],['door','큰 문 닫힘'],['shovel','삽질'],['cheer','군중의 함성'],['boo','방청석 야유'],['wind','빈 방의 바람'],['clap','박수 아저씨'],['ding','해치 방울 딸랑'],['ttukttak','뚝딱!'],['drip','먹 한 방울'],['splash','물 튐'],['coins','엽전 쏟아짐']];

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
    const bar0=len-T.bar;
    Object.keys(T.drums||{}).forEach(dn=>{ const pat=T.drums[dn]; for(let s=0;s<len;s++){ if(T.fill && T.fill[dn]!==undefined && s>=bar0 && dn!=='crash' && dn!=='jing') continue; const ch=pat[s%pat.length]; const v=ch==='X'?1:ch==='x'?.8:ch==='o'?.45:0; if(v) steps[s].push({k:'d',dn:dn,v:v}); } });
    if(T.fill) Object.keys(T.fill).forEach(dn=>{ const pat=T.fill[dn]; for(let i=0;i<T.bar;i++){ const ch=pat[i]; const v=ch==='X'?1:ch==='x'?.8:ch==='o'?.45:0; if(v) steps[bar0+i].push({k:'d',dn:dn,v:v}); } });
    let intro=[];
    if(T.intro){ intro=Array.from({length:T.bar},()=>[]); Object.keys(T.intro).forEach(dn=>{ const pat=T.intro[dn]; for(let i=0;i<T.bar;i++){ const ch=pat[i]; const v=ch==='X'?1:ch==='x'?.8:ch==='o'?.45:0; if(v) intro[i].push({k:'d',dn:dn,v:v}); } });
      const c0=T.chords[0].map(nm); intro[0].push({k:'c',i:'brass',ns:c0.map(n=>n+12),d:sd*T.bar*0.5,v:.9}); intro[0].push({k:'n',i:'bass',m:36+(c0[0]%12),d:sd*2,v:1}); }
    return {steps:intro.concat(steps),len:intro.length+len,sd:sd,introLen:intro.length};
  }
  function fire(e,t){
    const out=bus; if(!out) return;
    if(e.k==='n'){ if(e.i==='lead') lead(out,t,e.m,e.d,e.v,e.b); else if(e.i==='pluck') pluck(out,t,e.m,e.d,e.v); else if(e.i==='bass') bass(out,t,e.m,e.d,e.v); else if(e.i==='bell') bell(out,t,e.m,e.d,e.v); }
    else if(e.k==='c'){ if(e.i==='pad') pad(out,t,e.ns,e.d,e.v); else brass(out,t,e.ns,e.d,e.v); }
    else DRUM[e.dn](out,t,e.v);
  }
  function tick(){ if(!cur||!ctx) return; while(nextT<ctx.currentTime+0.15){ const evs=cur.steps[step]; for(let i=0;i<evs.length;i++) fire(evs[i],nextT); nextT+=cur.sd; step++; if(step>=cur.len) step=cur.introLen||0; } }
  function progress(){ if(!cur) return 0; const L=cur.len-(cur.introLen||0); return Math.max(0,(step-(cur.introLen||0)))/L; }
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
      case 'heal': ['G5','B5','D6','G6'].forEach((n,i)=>bell(out,t+i*0.08,nm(n),1,0.7)); nz(out,t+0.25,'highpass',7000,0.7,0.35,0.06); break;
      case 'whoosh': { const sN=ctx.createBufferSource(); sN.buffer=noiseBuf; const bp=F('bandpass',300,1.2), g=G(0); bp.frequency.setValueAtTime(300,t); bp.frequency.exponentialRampToValueAtTime(3200,t+0.32); g.gain.setValueAtTime(0.0001,t); g.gain.exponentialRampToValueAtTime(0.9,t+0.26); g.gain.exponentialRampToValueAtTime(0.0001,t+0.36); sN.connect(bp); bp.connect(g); g.connect(out); sN.start(t,Math.random()); sN.stop(t+0.4); break; }
      case 'zoom': { const sN=ctx.createBufferSource(); sN.buffer=noiseBuf; const bp=F('bandpass',3200,1.4), g=G(0); bp.frequency.setValueAtTime(3200,t); bp.frequency.exponentialRampToValueAtTime(380,t+0.24); g.gain.setValueAtTime(0.45,t); g.gain.exponentialRampToValueAtTime(0.0001,t+0.28); sN.connect(bp); bp.connect(g); g.connect(out); sN.start(t,Math.random()); sN.stop(t+0.3); thump(out,t+0.18,110,50,0.3,0.6); break; }
      case 'murmur': { for(let k=0;k<44;k++){ const w=t+Math.random()*1.5, d=0.12+Math.random()*0.22, f=280+Math.random()*700; const sN=ctx.createBufferSource(); sN.buffer=noiseBuf; const bp=F('bandpass',f,5+Math.random()*4), g=G(0); const env=Math.sin(Math.PI*Math.min(1,(w-t)/1.6))*0.9+0.2; g.gain.setValueAtTime(0.0001,w); g.gain.exponentialRampToValueAtTime(env,w+d*0.3); g.gain.exponentialRampToValueAtTime(0.0001,w+d); bp.frequency.setValueAtTime(f,w); bp.frequency.linearRampToValueAtTime(f*(0.8+Math.random()*0.5),w+d); sN.connect(bp); bp.connect(g); g.connect(out); sN.start(w,Math.random()*1.5); sN.stop(w+d+0.02); } break; }
      case 'realize': bell(out,t,nm('E6'),1,0.8); bell(out,t+0.09,nm('B6'),1,0.7); nz(out,t,'highpass',8000,0.7,0.25,0.08); break;
      case 'crack': bell(out,t,nm('A6'),1,0.9); nz(out,t+0.05,'bandpass',3200,3,0.06,0.5); nz(out,t+0.11,'bandpass',2600,3,0.05,0.4); nz(out,t+0.16,'bandpass',3800,3,0.04,0.35); thump(out,t+0.05,160,60,0.35,0.6); break;
      case 'get': ['C6','E6','G6','C7'].forEach((n,i)=>{ const o=O('triangle',mf(nm(n)),t+i*0.07), g=G(0); g.gain.setValueAtTime(0.0001,t+i*0.07); g.gain.exponentialRampToValueAtTime(0.26,t+i*0.07+0.01); g.gain.exponentialRampToValueAtTime(0.0001,t+i*0.07+0.35); o.connect(g); g.connect(out); o.start(t+i*0.07); o.stop(t+i*0.07+0.4); }); nz(out,t+0.2,'highpass',7000,0.7,0.4,0.07); break;
      case 'miss': { const o=O('triangle',190,t), g=G(0); o.frequency.exponentialRampToValueAtTime(120,t+0.08); g.gain.setValueAtTime(0.22,t); g.gain.exponentialRampToValueAtTime(0.0001,t+0.12); o.connect(g); g.connect(out); o.start(t); o.stop(t+0.14); nz(out,t,'lowpass',600,0.7,0.06,0.12); break; }
      case 'step': [0,0.24].forEach(w=>{ thump(out,t+w,130,70,0.14,0.35); nz(out,t+w,'lowpass',700,0.7,0.07,0.14); }); break;
      case 'tick': { const o=O('triangle',1150,t), g=G(0); g.gain.setValueAtTime(0.09,t); g.gain.exponentialRampToValueAtTime(0.0001,t+0.04); o.connect(g); g.connect(out); o.start(t); o.stop(t+0.05); break; }
      case 'click': { const o=O('square',1500,t), g=G(0); g.gain.setValueAtTime(0.04,t); g.gain.exponentialRampToValueAtTime(0.0001,t+0.025); o.connect(g); g.connect(out); o.start(t); o.stop(t+0.03); break; }
      case 'slam': DRUM.buk(out,t,1.1); DRUM.kung(out,t+0.015,1); nz(out,t,'lowpass',420,0.7,0.28,0.6); break;
      /* 그림자 연출용 (공통 규칙 1-4) */
      case 'gasp': { // '컥': 숨이 막히는 짧은 소리
        const o=O('sawtooth',260,t), g=G(0), bp=F('bandpass',900,2); o.frequency.exponentialRampToValueAtTime(150,t+0.12);
        g.gain.setValueAtTime(0.0001,t); g.gain.exponentialRampToValueAtTime(0.35,t+0.01); g.gain.exponentialRampToValueAtTime(0.0001,t+0.16);
        o.connect(bp); bp.connect(g); g.connect(out); o.start(t); o.stop(t+0.2); nz(out,t,'bandpass',1400,3,0.12,0.5); break; }
      case 'cough': [0,0.28].forEach((w,i)=>{ nz(out,t+w,'bandpass',700+i*120,1.6,0.16,0.55); thump(out,t+w,180,110,0.12,0.25); }); break;
      case 'thud': thump(out,t,90,34,0.9,1.2); nz(out,t,'lowpass',300,0.7,0.5,0.55); DRUM.buk(out,t+0.02,0.8); break;              // '쿵(무거운)'
      case 'clash': [0,0.17,0.31].forEach((w,i)=>{ [[2400,0.2],[3650,0.12],[5200,0.07]].forEach(p=>{ const o=O('sine',p[0]*(1+i*0.04),t+w), g=G(0); g.gain.setValueAtTime(p[1],t+w); g.gain.exponentialRampToValueAtTime(0.0001,t+w+0.5); o.connect(g); g.connect(out); o.start(t+w); o.stop(t+w+0.55); }); nz(out,t+w,'highpass',3000,0.7,0.08,0.4); }); break;
      case 'door': { nz(out,t,'bandpass',220,4,0.9,0.25); const o=O('sawtooth',70,t), g=G(0), lp=F('lowpass',300,2); o.frequency.linearRampToValueAtTime(52,t+0.8); g.gain.setValueAtTime(0.0001,t); g.gain.exponentialRampToValueAtTime(0.12,t+0.3); g.gain.exponentialRampToValueAtTime(0.0001,t+0.85); o.connect(lp); lp.connect(g); g.connect(out); o.start(t); o.stop(t+0.9); thump(out,t+0.85,80,30,1.1,1.3); nz(out,t+0.85,'lowpass',500,0.7,0.6,0.6); break; }
      case 'shovel': [0,0.55,1.1].forEach(w=>{ nz(out,t+w,'bandpass',1800,1.2,0.09,0.45); nz(out,t+w+0.05,'lowpass',500,0.7,0.25,0.35); }); break;
      case 'cheer': { for(let k=0;k<70;k++){ const w=t+Math.random()*2.2, d=0.4+Math.random()*0.6, f=380+Math.random()*900; const sN=ctx.createBufferSource(); sN.buffer=noiseBuf; const bp=F('bandpass',f,8), g=G(0); g.gain.setValueAtTime(0.0001,w); g.gain.exponentialRampToValueAtTime(0.5,w+0.08); g.gain.exponentialRampToValueAtTime(0.0001,w+d); sN.connect(bp); bp.connect(g); g.connect(out); sN.start(w,Math.random()*1.5); sN.stop(w+d+0.02); } nz(out,t,'bandpass',600,0.5,2.6,0.25); break; }
      case 'boo': { for(let k=0;k<30;k++){ const w=t+Math.random()*1.2, d=0.35+Math.random()*0.4, o=O('sawtooth',110+Math.random()*90,w), g=G(0), lp=F('lowpass',500,1); o.frequency.linearRampToValueAtTime(80,w+d); g.gain.setValueAtTime(0.0001,w); g.gain.exponentialRampToValueAtTime(0.06,w+0.08); g.gain.exponentialRampToValueAtTime(0.0001,w+d); o.connect(lp); lp.connect(g); g.connect(out); o.start(w); o.stop(w+d+0.02); } break; }
      case 'wind': { const sN=ctx.createBufferSource(); sN.buffer=noiseBuf; const bp=F('bandpass',500,0.8), g=G(0); bp.frequency.setValueAtTime(400,t); bp.frequency.linearRampToValueAtTime(900,t+1.4); bp.frequency.linearRampToValueAtTime(350,t+3); g.gain.setValueAtTime(0.0001,t); g.gain.exponentialRampToValueAtTime(0.3,t+1); g.gain.exponentialRampToValueAtTime(0.0001,t+3.2); sN.connect(bp); bp.connect(g); g.connect(out); sN.start(t,Math.random()); sN.stop(t+3.3); break; }
      /* 개그용 (공통 규칙 12장) */
      case 'clap': for(let k=0;k<9;k++){ const w=t+k*0.13+Math.random()*0.03; nz(out,w,'bandpass',1500+Math.random()*700,1.4,0.05,0.7); } break;
      case 'ding': bell(out,t,nm('E6'),1,0.9); bell(out,t+0.16,nm('E6'),1,0.6); break;
      case 'ttukttak': DRUM.tak(out,t,1); DRUM.tak(out,t+0.16,1); ['C6','G6','C7'].forEach((n,i)=>bell(out,t+0.32+i*0.06,nm(n),1,0.45)); break;
      case 'drip': bell(out,t,nm('A4'),1,0.5); nz(out,t,'lowpass',900,0.7,0.12,0.25); break;
      case 'splash': nz(out,t,'bandpass',2200,0.8,0.35,0.7); nz(out,t+0.1,'highpass',4000,0.7,0.25,0.35); thump(out,t,220,90,0.15,0.4); break;
      case 'coins': for(let k=0;k<16;k++) bell(out,t+k*0.05+Math.random()*0.03,nm(['C7','D7','E7','G7','A7'][k%5]),1,0.25); break;
    }
    setTimeout(()=>{ try{ out.disconnect(); }catch(e){} },4500);
  }
  function blip(who){
    if(!ctx||!enabled||ctx.state!=='running') return;
    const t=ctx.currentTime, f={judge:300,player:660,rival:540,defendant:420}[who]||480, o=O('square',f,t), g=G(0);
    g.gain.setValueAtTime(0.025,t); g.gain.exponentialRampToValueAtTime(0.0001,t+0.035); o.connect(g); g.connect(master); o.start(t); o.stop(t+0.05);
  }
  function duck(ms,level){ if(!bus||!ctx) return; const b=bus, t=ctx.currentTime, g=TRACKS[curId]?(TRACKS[curId].gain||1):1; b.gain.cancelScheduledValues(t); b.gain.setValueAtTime(b.gain.value,t); b.gain.linearRampToValueAtTime(g*(level===undefined?0.22:level),t+0.06); b.gain.setValueAtTime(g*(level===undefined?0.22:level),t+(ms||900)/1000); b.gain.linearRampToValueAtTime(g,t+(ms||900)/1000+0.5); }
  function setEnabled(on){ enabled=!!on; store.set('yj-sound',enabled?'on':'off'); if(master) master.gain.setTargetAtTime(enabled?volume*HEAD:0,ctx.currentTime,0.05); }
  function setVolume(p){ volume=Math.min(1,Math.max(0,p)); store.set('yj-vol',String(Math.round(volume*100))); if(master&&enabled) master.gain.setTargetAtTime(volume*HEAD,ctx.currentTime,0.05); }
  document.addEventListener('visibilitychange',()=>{ if(!ctx) return; if(document.hidden) ctx.suspend(); else ctx.resume(); });
  return {play:play, stop:stop, sting:sting, blip:blip, resume:resume, duck:duck, setEnabled:setEnabled, setVolume:setVolume,
    onChange:f=>listeners.push(f), compile:compile, progress:progress,
    get current(){ return curId; }, get on(){ return enabled; }, get volume(){ return volume; }};
})();
const SFX={ blip:w=>Music.blip(w), gavel:()=>Music.sting('gavel'), wrong:()=>Music.sting('wrong'), title:()=>Music.sting('title') };
