from bing_image_downloader import downloader
import os
import shutil

review_dir = 'public/images/review'
if os.path.exists(review_dir):
    shutil.rmtree(review_dir)
os.makedirs(review_dir, exist_ok=True)

queries = [
    "Network School Forest City Malaysia",
    "Balaji Srinivasan Network School campus",
    "Network School co-living Forest City"
]

for idx, query in enumerate(queries):
    print(f"Downloading images for query: {query}")
    try:
        downloader.download(
            query,
            limit=35,
            output_dir=review_dir,
            adult_filter_off=True,
            force_replace=False,
            timeout=60,
            verbose=False
        )
    except Exception as e:
        print(f"Failed to download for query {query}: {e}")

# Flatten the directory structure
counter = 1
for root, dirs, files in os.walk(review_dir):
    for dir_name in dirs:
        dir_path = os.path.join(root, dir_name)
        for _, _, filenames in os.walk(dir_path):
            for filename in filenames:
                ext = filename.split('.')[-1]
                new_name = f"candidate_{counter}.{ext}"
                try:
                    shutil.move(os.path.join(dir_path, filename), os.path.join(review_dir, new_name))
                    counter += 1
                except Exception as e:
                    print(f"Error moving file: {e}")
        shutil.rmtree(dir_path)

print(f"Downloaded and flattened {counter - 1} images into {review_dir}")
