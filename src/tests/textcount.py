# 사건 파일의 한글 글자 수를 센다 (대사 줄이기 확인용). 문자열 안의 글자만, [[ ]] 표시는 빼고, 주석은 뺀다.
# 사용: python tests/textcount.py story7.js story8.js …
import re, sys
STR = re.compile(r"'(?:[^'\\\n]|\\.)*'|\"(?:[^\"\\\n]|\\.)*\"|`(?:[^`\\]|\\.)*`")
HAN = re.compile(r'[가-힣]')
def count(path):
    s = open(path, encoding='utf-8').read()
    s = re.sub(r'/\*.*?\*/', '', s, flags=re.S)
    s = re.sub(r'(?m)^\s*//.*$', '', s)
    n = 0
    for m in STR.finditer(s):
        t = m.group(0)[1:-1]
        if not HAN.search(t) or "<svg" in t: continue
        t = re.sub(r'\$\{[^}]*\}', '', t).replace('[[', '').replace(']]', '')
        n += len(t)
    return n
if __name__ == '__main__':
    tot = 0
    for p in sys.argv[1:]:
        c = count(p); tot += c; print(f'{p}\t{c}')
    if len(sys.argv) > 2: print(f'합계\t{tot}')
