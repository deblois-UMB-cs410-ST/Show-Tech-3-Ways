import html
import json
import os
import re
import time
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path.home() / "public_html/ST-project/tourism-gallery"

# Each entry: attraction name, location, Commons search phrase
PAGES = {
    5: [
        ("Brooklyn Bridge", "New York, USA", "Brooklyn Bridge New York"),
        ("Gyeongbokgung Palace", "Seoul, South Korea", "Gyeongbokgung Palace"),
        ("Lake Bled", "Bled, Slovenia", "Lake Bled Slovenia"),
        ("Matterhorn", "Zermatt, Switzerland", "Matterhorn mountain"),
        ("Alhambra", "Granada, Spain", "Alhambra Granada"),
        ("CN Tower", "Toronto, Canada", "CN Tower Toronto"),
        ("Wat Arun", "Bangkok, Thailand", "Wat Arun temple"),
        ("Mount Rushmore", "South Dakota, USA", "Mount Rushmore"),
        ("Trevi Fountain", "Rome, Italy", "Trevi Fountain Rome"),
        ("Fushimi Inari Shrine", "Kyoto, Japan", "Fushimi Inari shrine"),
        ("Lake Como", "Lombardy, Italy", "Lake Como Italy"),
        ("Lalibela Churches", "Lalibela, Ethiopia", "Lalibela rock churches"),
    ],
    6: [
        ("St. Basil's Cathedral", "Moscow, Russia", "Saint Basil Cathedral Moscow"),
        ("Plitvice Lakes", "Croatia", "Plitvice Lakes Croatia"),
        ("Potala Palace", "Lhasa, Tibet, China", "Potala Palace Lhasa"),
        ("Cliffs of Moher", "County Clare, Ireland", "Cliffs of Moher"),
        ("Borobudur Temple", "Central Java, Indonesia", "Borobudur temple"),
        ("Empire State Building", "New York, USA", "Empire State Building"),
        ("Ha Long Bay", "Vietnam", "Ha Long Bay Vietnam"),
        ("Mount Cook", "South Island, New Zealand", "Aoraki Mount Cook"),
        ("Notre-Dame Cathedral", "Paris, France", "Notre Dame Paris cathedral"),
        ("Easter Island Moai", "Rapa Nui, Chile", "Easter Island moai"),
        ("Salar de Uyuni", "Bolivia", "Salar de Uyuni"),
        ("Prague Castle", "Prague, Czechia", "Prague Castle"),
    ],
    7: [
        ("Gardens by the Bay", "Singapore", "Gardens by the Bay Singapore"),
        ("Giant's Causeway", "Northern Ireland, UK", "Giants Causeway"),
        ("Mount Bromo", "East Java, Indonesia", "Mount Bromo"),
        ("Rijksmuseum", "Amsterdam, Netherlands", "Rijksmuseum Amsterdam"),
        ("Lake Titicaca", "Peru / Bolivia", "Lake Titicaca"),
        ("Karnak Temple", "Luxor, Egypt", "Karnak Temple"),
        ("Shwedagon Pagoda", "Yangon, Myanmar", "Shwedagon Pagoda"),
        ("Himeji Castle", "Hyogo, Japan", "Himeji Castle"),
        ("Horseshoe Bend", "Arizona, USA", "Horseshoe Bend Arizona"),
        ("Milford Sound", "Fiordland, New Zealand", "Milford Sound"),
        ("Atomium", "Brussels, Belgium", "Atomium Brussels"),
        ("Zhangjiajie National Forest", "Hunan, China", "Zhangjiajie National Forest"),
    ],
    8: [
        ("La Sagrada Família Interior", "Barcelona, Spain", "Sagrada Familia interior"),
        ("Jemaa el-Fnaa", "Marrakesh, Morocco", "Jemaa el Fnaa square"),
        ("Banaue Rice Terraces", "Ifugao, Philippines", "Banaue Rice Terraces"),
        ("Hallstatt", "Austria", "Hallstatt Austria"),
        ("Mount Roraima", "Venezuela / Brazil / Guyana", "Mount Roraima"),
        ("Pena Palace", "Sintra, Portugal", "Pena Palace Sintra"),
        ("Lake Baikal", "Siberia, Russia", "Lake Baikal"),
        ("Wadi Rum", "Jordan", "Wadi Rum desert"),
        ("Cape of Good Hope", "South Africa", "Cape of Good Hope"),
        ("Golden Temple", "Amritsar, India", "Golden Temple Amritsar"),
        ("Dunn's River Falls", "Ocho Rios, Jamaica", "Dunns River Falls"),
        ("Kinkaku-ji", "Kyoto, Japan", "Kinkakuji Golden Pavilion"),
    ],
}

CSS = """
body {
  margin: 0; padding: 30px;
  background: #07172e; color: white;
  font-family: Arial, sans-serif;
}
h1, .subtitle { text-align: center; }
.subtitle { color: #b5c5da; margin-bottom: 35px; }
.gallery {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px; max-width: 1400px; margin: 0 auto;
}
.card {
  min-width: 0; background: #142b48;
  border-radius: 12px; overflow: hidden;
}
.card img {
  width: 100%; height: 210px;
  object-fit: cover; display: block;
}
.card h3 { margin: 12px 14px 4px; }
.card p { margin: 0 14px 16px; color: #b5c5da; }
nav { text-align: center; margin: 30px; }
nav a { color: #a9d8ff; margin: 0 15px; }
@media(max-width:900px) {
  .gallery { grid-template-columns: repeat(2, 1fr); }
}
@media(max-width:500px) {
  .gallery { grid-template-columns: 1fr; }
}
"""

HEADERS = {
    "User-Agent": "ShowTechGallery/1.0 (student educational project)"
}

def request_json(params):
    url = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=35) as response:
        return json.load(response)

def valid_jpeg(path):
    try:
        with open(path, "rb") as f:
            start = f.read(3)
        return start == b"\xff\xd8\xff" and path.stat().st_size > 1000
    except OSError:
        return False

def download_photo(query, destination):
    try:
        data = request_json({
            "action": "query",
            "generator": "search",
            "gsrsearch": query + " filetype:bitmap",
            "gsrnamespace": 6,
            "gsrlimit": 15,
            "prop": "imageinfo",
            "iiprop": "url|mime|extmetadata",
            "iiurlwidth": 960,
            "format": "json",
        })

        pages = data.get("query", {}).get("pages", {})
        for page in pages.values():
            infos = page.get("imageinfo", [])
            if not infos:
                continue
            info = infos[0]
            if info.get("mime") != "image/jpeg":
                continue

            url = info.get("thumburl") or info.get("url")
            if not url:
                continue

            temp = destination.with_suffix(".tmp")
            try:
                req = urllib.request.Request(url, headers=HEADERS)
                with urllib.request.urlopen(req, timeout=75) as response:
                    with open(temp, "wb") as f:
                        while True:
                            chunk = response.read(65536)
                            if not chunk:
                                break
                            f.write(chunk)

                if valid_jpeg(temp):
                    os.replace(temp, destination)
                    return {
                        "title": page.get("title", ""),
                        "source": info.get("descriptionurl", ""),
                        "metadata": info.get("extmetadata", {}),
                    }
            except Exception:
                pass
            finally:
                if temp.exists():
                    temp.unlink()

    except Exception as error:
        print("Search error:", error, flush=True)

    return None

credits = {}
failures = []

for page_number, attractions in PAGES.items():
    folder = ROOT / "images" / f"page{page_number}"
    folder.mkdir(parents=True, exist_ok=True)

    cards = []
    credits[str(page_number)] = []

    for index, (name, location, query) in enumerate(attractions):
        number = (page_number - 1) * 12 + index + 1
        filename = f"attraction_{number}.jpg"
        destination = folder / filename

        if valid_jpeg(destination):
            print(f"EXISTS: {filename}", flush=True)
            result = None
        else:
            print(f"Downloading {number}: {name}", flush=True)
            result = download_photo(query, destination)

        if valid_jpeg(destination):
            print(f"OK: {filename}", flush=True)
        else:
            print(f"FAILED: {filename} — {name}", flush=True)
            failures.append(f"{page_number}: {name}")

        if result:
            credits[str(page_number)].append({
                "attraction": name,
                "file": filename,
                "commons_page": result["source"],
                "commons_title": result["title"],
                "metadata": result["metadata"],
            })

        cards.append(f"""
<article class="card">
  <img src="images/page{page_number}/{filename}"
       alt="{html.escape(name, quote=True)}" loading="lazy">
  <h3>{number}. {html.escape(name)}</h3>
  <p>{html.escape(location)}</p>
</article>""")

        time.sleep(0.4)

    previous = f"page{page_number - 1}.html"
    next_link = (
        f'<a href="page{page_number + 1}.html">Next: Page {page_number + 1}</a>'
        if page_number < 8 else ""
    )

    page_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Tourist Attractions | Page {page_number} | ShowTech</title>
<style>{CSS}</style>
</head>
<body>
<h1>World Tourist Attractions</h1>
<p class="subtitle">ShowTech | Tourism Gallery | Page {page_number} of 8</p>
<main class="gallery">
{''.join(cards)}
</main>
<nav>
<a href="{previous}">Previous: Page {page_number - 1}</a>
<span>Page {page_number} of 8</span>
{next_link}
</nav>
</body>
</html>
"""

    (ROOT / f"page{page_number}.html").write_text(
        page_html, encoding="utf-8"
    )
    print(f"CREATED: page{page_number}.html", flush=True)

(ROOT / "page5-8-image-sources.json").write_text(
    json.dumps(credits, indent=2, ensure_ascii=False),
    encoding="utf-8"
)

print("\n===== FINAL RESULTS =====")
for page_number in PAGES:
    folder = ROOT / "images" / f"page{page_number}"
    count = sum(
        valid_jpeg(folder / f"attraction_{n}.jpg")
        for n in range((page_number - 1) * 12 + 1, page_number * 12 + 1)
    )
    print(f"Page {page_number}: {count}/12 JPEG files")

print(f"Failed downloads: {len(failures)}")
for failure in failures:
    print("MISSING:", failure)

print("Review photographs visually and check Commons licenses and credits.")
