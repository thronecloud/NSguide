import requests
from bs4 import BeautifulSoup
import os
import re
import urllib.parse

os.makedirs('public/images/life', exist_ok=True)

url = "https://images.search.yahoo.com/search/images;?p=Network+School+Forest+City"
headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}

print("Fetching Yahoo Images...")
r = requests.get(url, headers=headers)
soup = BeautifulSoup(r.text, 'html.parser')

images_downloaded = 0
for img in soup.find_all('img'):
    src = img.get('data-src') or img.get('src')
    if src and src.startswith('http'):
        # Usually yahoo image thumbnails are safe to download
        try:
            print(f"Downloading {src}")
            img_data = requests.get(src, timeout=5).content
            filename = f"public/images/life/image-{images_downloaded+1}.jpg"
            with open(filename, 'wb') as f:
                f.write(img_data)
            images_downloaded += 1
            if images_downloaded >= 10:
                break
        except Exception as e:
            print(f"Failed {src}: {e}")

print(f"Downloaded {images_downloaded} images.")
