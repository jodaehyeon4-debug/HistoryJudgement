"""받은 그림을 게임용으로 처리: 배경(채도 낮춤), 인물·책상(단색 배경 제거, 다듬기, 틀 맞추기) -> assets.js(data URI)"""
import sys, json, base64, io, collections
from PIL import Image, ImageEnhance, ImageFilter
SAT=1.0  # 배경 채도: 원본 그대로 (선생님 결정)
def flood_remove(im, tol=26):
    im=im.convert('RGBA'); w,h=im.size; px=im.load()
    seeds=[(0,0),(w-1,0),(0,h-1),(w-1,h-1),(w//2,0),(0,h//2),(w-1,h//2)]
    ref=[px[x,y][:3] for x,y in seeds]
    base=tuple(sorted(c[i] for c in ref)[len(ref)//2] for i in range(3))
    seen=bytearray(w*h); q=collections.deque()
    for x,y in seeds: q.append((x,y))
    close=lambda c: abs(c[0]-base[0])+abs(c[1]-base[1])+abs(c[2]-base[2])<=tol*3
    strict=lambda c: max(abs(c[0]-base[0]),abs(c[1]-base[1]),abs(c[2]-base[2]))<=9
    while q:
        x,y=q.popleft(); i=y*w+x
        if seen[i]: continue
        seen[i]=1; c=px[x,y]
        if not close(c): continue
        px[x,y]=(c[0],c[1],c[2],0)
        if x>0: q.append((x-1,y))
        if x<w-1: q.append((x+1,y))
        if y>0: q.append((x,y-1))
        if y<h-1: q.append((x,y+1))
    # 갇힌 빈틈(팔과 머리 사이 등)도 배경색이고 충분히 크면 지움
    for y in range(0,h,3):
        for x in range(0,w,3):
            i=y*w+x
            if seen[i]: continue
            c=px[x,y]
            if c[3]==0 or not strict(c): seen[i]=1; continue
            reg=[]; q.append((x,y))
            while q:
                xx,yy=q.popleft(); j=yy*w+xx
                if seen[j]: continue
                seen[j]=1; cc=px[xx,yy]
                if cc[3]==0 or not strict(cc): continue
                reg.append((xx,yy))
                if xx>0: q.append((xx-1,yy))
                if xx<w-1: q.append((xx+1,yy))
                if yy>0: q.append((xx,yy-1))
                if yy<h-1: q.append((xx,yy+1))
            if len(reg)>1500:
                for xx,yy in reg: cc=px[xx,yy]; px[xx,yy]=(cc[0],cc[1],cc[2],0)
    a=im.split()[3].filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(0.7))
    im.putalpha(a); return im
def to_uri(im,q=82):
    b=io.BytesIO(); im.save(b,'WEBP',quality=q,method=6); return 'data:image/webp;base64,'+base64.b64encode(b.getvalue()).decode(), len(b.getvalue())
def bg(path):
    im=Image.open(path).convert('RGB'); im=ImageEnhance.Color(im).enhance(SAT)
    W,H=1600,900; s=max(W/im.width,H/im.height); im=im.resize((round(im.width*s),round(im.height*s)),Image.LANCZOS)
    l=(im.width-W)//2; t=(im.height-H)//2; return im.crop((l,t,l+W,t+H))
def sprite(path):
    im=flood_remove(Image.open(path)); bb=im.getbbox(); im=im.crop(bb)
    W,H=960,1152; s=min(W*0.98/im.width,H*0.97/im.height); im=im.resize((round(im.width*s),round(im.height*s)),Image.LANCZOS)
    c=Image.new('RGBA',(W,H),(0,0,0,0)); c.paste(im,((W-im.width)//2,H-im.height),im); return c
def ev(path):
    im=flood_remove(Image.open(path)); im=im.crop(im.getbbox()); s=min(480/im.width,480/im.height)
    im=im.resize((round(im.width*s),round(im.height*s)),Image.LANCZOS); c=Image.new('RGBA',(512,512),(0,0,0,0)); c.paste(im,((512-im.width)//2,(512-im.height)//2),im); return c
def desk(path):
    im=flood_remove(Image.open(path),tol=18); im=im.crop(im.getbbox())
    s=1600/im.width; return im.resize((1600,round(im.height*s)),Image.LANCZOS)
if __name__=='__main__':
    spec=json.load(open(sys.argv[1])); out={'sprites':{},'bg':{},'desk':{},'ev':{}}; report=[]
    for kind,fn in (('bg',bg),('sprites',sprite),('desk',desk),('ev',ev)):
        for key,val in spec.get(kind,{}).items():
            items=val.items() if isinstance(val,dict) else [(None,val)]
            for sub,path in items:
                im=fn(path); uri,n=to_uri(im, {'bg':76,'sprites':80,'desk':82,'ev':80}[kind])
                if sub is None: out[kind][key]=uri
                else: out[kind].setdefault(key,{})[sub]=uri
                tag=f'{key}_{sub}' if sub else key
                im.save(f'/home/claude/yj/assets_out/{kind}_{tag}.png'); report.append(f'{kind}/{tag}: {im.size[0]}x{im.size[1]}, {n//1024}KB')
    open('/home/claude/yj/assets.js','w').write('const ASSETS='+json.dumps(out)+';\n')
    print('\n'.join(report)); print('total', sum(len(v) for d in out.values() for v in d.values())//1024,'KB')
