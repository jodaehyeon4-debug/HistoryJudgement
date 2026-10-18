import re, os, glob
v02=open('v02.js',encoding='utf-8').read()
i=v02.index('const TRUSTW='); j=v02.index('];',v02.index('const GOJEUNG='))+2
data=v02[i:j]
kw=[('연표를 보시죠! 642년, 피고는','[[연표]]를 보시죠! [[642년]], 피고는'),
    ("643년의 기록입니다. 백제는 고구려와 손을 잡았습니다!","[[643년]]의 기록입니다. 백제는 [[고구려와 손을 잡았습니다]]!"),
    ("피고는 바른말을 한 성충을 옥에 가두었습니다!","피고는 바른말을 한 [[성충을 옥에 가두었습니다]]!"),
    ("성충이 옥에서 남긴 글입니다. “탄현을 넘지 못하게 하고, 기벌포에 들어오지 못하게 하소서.”","[[성충]]이 옥에서 남긴 글입니다. “[[탄현]]을 넘지 못하게 하고, [[기벌포]]에 들어오지 못하게 하소서.”"),
    ("「삼국사기」를 보시죠. 당군 13만, 신라군 5만. 100만이 아닙니다!","「삼국사기」를 보시죠. [[당군 13만, 신라군 5만]]. 100만이 아닙니다!")]
for a,b in kw:
    assert data.count(a)==1,a; data=data.replace(a,b)
data+="\nconst EV_ICON={E1:'timeline',E2:'army',E3:'scroll',E4:'prison',E5:'alliance',E6:'censer',E7:'cliff',E8:'map',E9:'scroll',E10:'prison',E11:'scroll',E12:'cliff',K1:'map'};\nEVIDENCE.forEach(e=>{ e.icon=EV_ICON[e.id]; });\n"
utils="""(function(){
'use strict';
const $=s=>document.querySelector(s);
const wait=ms=>new Promise(r=>setTimeout(r,window.__yjFast?Math.min(ms,15):ms));
const store={get(k){try{return localStorage.getItem(k);}catch(e){return null;}},set(k,v){try{localStorage.setItem(k,v);}catch(e){}}};
const shuffle=a=>{const b=a.slice();for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));const t=b[i];b[i]=b[j];b[j]=t;}return b;};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
"""
game=open('game.js',encoding='utf-8').read().replace('/*DATA*/',data)
assets=open('assets.js',encoding='utf-8').read() if os.path.exists('assets.js') else 'const ASSETS={sprites:{},bg:{},desk:{}};\n'
# 사건 3부터: cases.js(공통 틀) 뒤에 story3.js, story4.js … 차례로
later=sorted(glob.glob('story[0-9]*.js'),key=lambda p:int(re.search(r'(\d+)',p).group(1)))
later=[p for p in later if int(re.search(r'(\d+)',p).group(1))>=3]
script=utils+assets+open('music.js',encoding='utf-8').read()+'\n'+open('art.js',encoding='utf-8').read()+'\n'+open('bg.js',encoding='utf-8').read()+'\n'+game+'\n'+open('story.js',encoding='utf-8').read()+'\n'+open('story2.js',encoding='utf-8').read()+'\n'+open('cases.js',encoding='utf-8').read()+'\n'+open('v4.js',encoding='utf-8').read()+'\n'+''.join(open(p,encoding='utf-8').read()+'\n' for p in later)+'renderRoles();\n})();'
html=open('shell.html',encoding='utf-8').read().replace('/*SCRIPT*/',script)
open('v03.html','w',encoding='utf-8').write(html)
print('ok', len(html), 'bytes', html.count('\n'),'lines', 'cases:', [os.path.basename(p) for p in later])
