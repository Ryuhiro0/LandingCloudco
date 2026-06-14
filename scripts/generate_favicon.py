from PIL import Image
from pathlib import Path

def generate_favicon(src_png: Path, out_ico: Path, sizes=(16,32,48,64,128)):
    img = Image.open(src_png).convert("RGBA")
    # Save as multi-size ICO; Pillow will generate the sizes from the original
    img.save(out_ico, format='ICO', sizes=[(s, s) for s in sizes])

if __name__ == '__main__':
    base = Path(__file__).resolve().parents[1]
    src = base / 'src' / 'assets' / 'logo.png'
    out = base / 'src' / 'assets' / 'logo.ico'
    if not src.exists():
        raise SystemExit(f"Source image not found: {src}")
    generate_favicon(src, out)
    print('Generated', out)
