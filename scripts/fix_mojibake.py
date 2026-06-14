from pathlib import Path
import io

REPLACEMENTS = {
    'Ã¡': 'á',
    'Ã©': 'é',
    'Ã­': 'í',
    'Ã³': 'ó',
    'Ãº': 'ú',
    'Ã±': 'ñ',
    'Ã': 'Á',
    'Ã‰': 'É',
    'Ã“': 'Ó',
    'Ãš': 'Ú',
    'Ã': 'Ñ',
    'â€”': '—',
    'â€“': '–',
    'â€œ': '“',
    'â€�': '”',
    'â€˜': '‘',
    'â€™': '’',
    'Â©': '©',
    'Â·': '·',
    'Ã ': 'à',
    'Ã¼': 'ü',
    'automatizaciÃ³n': 'automatización',
}

def fix_text(text: str) -> str:
    for k, v in REPLACEMENTS.items():
        if k in text:
            text = text.replace(k, v)
    return text

def main():
    root = Path('.').resolve()
    exts = {'.ts', '.tsx', '.js', '.jsx', '.json', '.md', '.html', '.css'}
    changed_files = []
    for p in root.rglob('*'):
        if p.is_file() and p.suffix in exts and 'node_modules' not in p.parts:
            try:
                txt = p.read_text(encoding='utf-8')
            except Exception:
                try:
                    txt = p.read_text(encoding='latin-1')
                except Exception:
                    continue
            fixed = fix_text(txt)
            if fixed != txt:
                p.write_text(fixed, encoding='utf-8')
                changed_files.append(str(p))
    print('fixed', len(changed_files), 'files')
    for f in changed_files[:50]:
        print('-', f)

if __name__ == '__main__':
    main()
