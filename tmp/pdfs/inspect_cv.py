import sys
from pathlib import Path

folder = Path(__file__).resolve().parent
sys.path.insert(0, str(folder / 'deps'))
import pymupdf

doc = pymupdf.open(folder / 'cv-audit.pdf')
print('Pages:', len(doc))
for index, page in enumerate(doc, 1):
    page.get_pixmap(matrix=pymupdf.Matrix(1.5, 1.5)).save(folder / f'cv-page-{index}.png')
    print(f'PAGE {index}:')
    print(page.get_text().encode('ascii', 'backslashreplace').decode())
