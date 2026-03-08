from bing_image_downloader import downloader

downloader.download(
    "Network School Balaji Srinivasan Forest City Malaysia",
    limit=10,
    output_dir='public/images/life',
    adult_filter_off=True,
    force_replace=False,
    timeout=60,
    verbose=True
)
