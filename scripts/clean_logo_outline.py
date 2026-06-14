from PIL import Image
from pathlib import Path

def clean_outline(p: Path, out: Path, erosion_pixels: int = 2):
    img = Image.open(p).convert("RGBA")
    w, h = img.size
    data = img.getdata()
    mask = [[1 if data[y * w + x][3] > 0 else 0 for x in range(w)] for y in range(h)]

    def erode_once(m):
        new = [[0] * w for _ in range(h)]
        for y in range(h):
            for x in range(w):
                if m[y][x] == 0:
                    continue
                keep = True
                for ny in (y-1, y, y+1):
                    for nx in (x-1, x, x+1):
                        if nx < 0 or ny < 0 or nx >= w or ny >= h:
                            keep = False
                            break
                        if m[ny][nx] == 0:
                            keep = False
                            break
                    if not keep:
                        break
                if keep:
                    new[y][x] = 1
        return new

    m = mask
    for i in range(erosion_pixels):
        m = erode_once(m)

    # apply mask: pixels not in m become transparent
    out_img = Image.new('RGBA', (w, h))
    out_px = out_img.load()
    src_img = Image.open(p).convert('RGBA')
    src_px = src_img.load()
    changes = 0
    for y in range(h):
        for x in range(w):
            if m[y][x] == 1:
                out_px[x, y] = src_px[x, y]
            else:
                if src_px[x, y][3] != 0:
                    changes += 1
                out_px[x, y] = (0, 0, 0, 0)

    out_img.save(out)
    return changes

if __name__ == '__main__':
    base = Path(__file__).resolve().parents[1]
    src = base / 'src' / 'assets' / 'logo.png'
    out = base / 'src' / 'assets' / 'logo.png'
    backup = base / 'src' / 'assets' / 'logo.backup.png'
    if not src.exists():
        raise SystemExit(f'source not found: {src}')
    # ensure backup exists; copy original to backup if missing
    import shutil
    if not backup.exists():
        shutil.copy2(src, backup)
    else:
        # restore fresh source from backup to avoid cumulative edits
        shutil.copy2(backup, src)
    # work on backup file as source
    src = base / 'src' / 'assets' / 'logo.backup.png'
    out = base / 'src' / 'assets' / 'logo.png'
    changes = clean_outline(src, out)
    print('changes', changes)
