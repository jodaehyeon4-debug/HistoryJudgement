# 저장소의 assets/ 폴더(처리된 webp 그림)를 읽어 assets.js(data URI)를 다시 만든다.
# 파일 이름 규칙: sprites/<인물>_<표정>.webp, bg/<id>.webp, desk/<id>.webp, ev/<id>.webp
import os, json, base64
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'assets')
out = {'sprites': {}, 'bg': {}, 'desk': {}, 'ev': {}}
for kind in out:
    d = os.path.join(ROOT, kind)
    if not os.path.isdir(d): continue
    for fn in sorted(os.listdir(d)):
        name, ext = os.path.splitext(fn)
        if ext.lower() not in ('.webp', '.png', '.jpg'): continue
        mime = {'.webp': 'webp', '.png': 'png', '.jpg': 'jpeg'}[ext.lower()]
        uri = f'data:image/{mime};base64,' + base64.b64encode(open(os.path.join(d, fn), 'rb').read()).decode()
        if kind == 'sprites':
            who, expr = name.rsplit('_', 1)
            out[kind].setdefault(who, {})[expr] = uri
        else:
            out[kind][name] = uri
open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'assets.js'), 'w', encoding='utf-8').write('const ASSETS=' + json.dumps(out) + ';\n')
print({k: len(v) for k, v in out.items()})
