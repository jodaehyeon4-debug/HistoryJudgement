// 단서 자리가 인물 그림에 가려 조사할 수 없는 곳을 찾는다
const {JSDOM}=require('jsdom');
const html=require('fs').readFileSync('v03.html','utf8');
const dom=new JSDOM(html,{runScripts:'dangerously',url:'https://example.org/',pretendToBeVisual:true,beforeParse(w){ w.__yjFast=true; }});
setTimeout(()=>{ const Y=dom.window.__yj; let bad=0;
  for(const [n,D] of Object.entries(Y.CASE_DATA)) for(const l of D.locs) for(const r of (l.rooms||[l])) for(const np of (r.npcs||[])){
    const R=Y.npcRect(np);
    for(const p of r.spots){ const cx=p.x+p.w/2, cy=p.y+p.h/2; if(cx>=R.x&&cx<=R.x+R.w&&cy>=R.y&&cy<=R.y+R.h){ bad++; console.log(`case ${n} ${r.id}: '${p.label}' center (${cx.toFixed(0)},${cy.toFixed(0)}) inside ${np.who} [${R.x.toFixed(0)}-${(R.x+R.w).toFixed(0)}, ${R.y.toFixed(0)}-${(R.y+R.h).toFixed(0)}]`); } } }
  console.log(bad?bad+' blocked':'OK no blocked spots'); process.exit(0); },300);
