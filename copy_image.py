import shutil
import os

src = "/Users/husnainrafiq/.gemini/antigravity/brain/dfa6cff2-38b1-4e41-9791-5ac855d1eb62/uploaded_media_1_1770750652816.jpg"
dst = "public/husnain.jpg"

try:
    if os.path.exists(src):
        shutil.copy2(src, dst)
        print(f"Successfully copied {src} to {dst}")
    else:
        print(f"Source file not found: {src}")
except Exception as e:
    print(f"Error copying file: {e}")
