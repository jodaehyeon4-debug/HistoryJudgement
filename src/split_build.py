# 배포용 빌드: 그림을 페이지 밖 파일로 분리 (dist/index.html + dist/assets/...)
import json, base64, os, shutil
src=open('assets.js',encoding='utf-8').read()
start=src.index('{'); end=src.rindex('}')+1
A=json.loads(src[start:end])
out='dist'; shutil.rmtree(out,ignore_errors=True); os.makedirs(out+'/assets',exist_ok=True)
n=0; total=0
def save(uri,path):
    global n,total
    head,b64=uri.split(',',1); ext='webp' if 'webp' in head else ('png' if 'png' in head else 'jpg')
    data=base64.b64decode(b64); fn=f'{path}.{ext}'; os.makedirs(os.path.dirname(f'{out}/{fn}'),exist_ok=True)
    open(f'{out}/{fn}','wb').write(data); n+=1; total+=len(data); return fn
S={}
for kind,v in A.items():
    S[kind]={}
    for key,val in v.items():
        if isinstance(val,dict): S[kind][key]={e:save(u,f'assets/{kind}/{key}_{e}') for e,u in val.items()}
        else: S[kind][key]=save(val,f'assets/{kind}/{key}')
html=open('v03.html',encoding='utf-8').read()
assert src in html, 'assets block not found verbatim'
split='const ASSETS='+json.dumps(S,ensure_ascii=False)+';\n'
html=html.replace(src,split)
open(out+'/index.html','w',encoding='utf-8').write(html)
print(f'{n} images -> {total//1024} KB in dist/assets ; index.html {len(html.encode())//1024} KB')
