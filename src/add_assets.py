# 받은 그림(jpg·png)을 게임용 webp로 처리해 저장소 assets/ 폴더에 바로 넣는다.
# 사용: python add_assets.py <원본 폴더>   (원본 폴더 안에 sprites/ bg/ ev/ desk/ 하위 폴더, 파일 이름은 게임 이름 그대로)
import sys, os
from process_assets import bg, sprite, ev, desk
FN = {'bg': bg, 'sprites': sprite, 'ev': ev, 'desk': desk}
Q = {'bg': 76, 'sprites': 80, 'desk': 82, 'ev': 80}
src = sys.argv[1]
dst = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'assets')
for kind, fn in FN.items():
    d = os.path.join(src, kind)
    if not os.path.isdir(d): continue
    os.makedirs(os.path.join(dst, kind), exist_ok=True)
    for f in sorted(os.listdir(d)):
        name, ext = os.path.splitext(f)
        if ext.lower() not in ('.jpg', '.jpeg', '.png'): continue
        im = fn(os.path.join(d, f))
        p = os.path.join(dst, kind, name + '.webp')
        im.save(p, 'WEBP', quality=Q[kind], method=6)
        print(f'{kind}/{name}.webp {im.size[0]}x{im.size[1]} {os.path.getsize(p)//1024}KB')
