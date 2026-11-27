const attractionDescriptions = [
["Around 50 million a year", "A famous entertainment district known for bright billboards, theatres, shopping, and spectacular New Year's Eve celebrations."],
["Around 5–7 million a year", "A famous Christian chapel featuring Michelangelo's remarkable ceiling paintings and The Last Judgement."],
["Around 19–25 million a year", "The holiest pilgrimage destination in Islam, where millions of Muslims gather annually for religious ceremonies."],
["Around 48–49 million a year", "An iconic iron tower offering spectacular views of Paris and symbolising French culture and architecture."],
["Nearly 20 million a year", "An ancient defensive structure stretching across China, originally built to protect territories and control borders."],
["6–8 million a year", "A magnificent white marble mausoleum built by Emperor Shah Jahan in memory of his wife."],
["14–15 million a year", "Ancient Egyptian pyramids built as royal tombs, representing extraordinary engineering and architectural achievements."],
["Nearly 15 million a year", "An ancient Roman amphitheatre once used for gladiator contests and public entertainment."],
["3.5–3.8 million a year", "A famous monument symbolising freedom and democracy, gifted to America by France."],
["1.5 million a year", "An ancient Inca city high in the Andes Mountains, surrounded by breathtaking scenery."],
["Up to 5 million a year", "London's famous clock tower, recognised for its enormous clock face and historic bell."],
["Over 10.9 million a year", "A world-famous performing arts centre recognised for its distinctive sail-shaped roof design."],
["2.3–2.8 million a year", "A giant statue of Jesus Christ overlooking Rio de Janeiro from Corcovado Mountain."],
["Around 1.1 million annually", "An ancient city carved into rose-coloured rock, famous for its impressive buildings and archaeological history."],
["21–22 million a year", "A spectacular group of waterfalls known for powerful rushing water and breathtaking natural scenery."],
["4–5 million visitors annually", "Japan's highest mountain, famous for its symmetrical volcanic shape and cultural significance."],
["17 million", "The world's tallest building, featuring observation decks and remarkable modern architecture."],
["2.5–2.6 million a year", "A vast ancient temple complex famous for its detailed carvings and Khmer architecture."],
["4.4–4.9 million", "A massive natural canyon carved by the Colorado River, featuring colourful rock formations and dramatic landscapes."],
["4.8 million", "A remarkable basilica designed by Antoni Gaudí, known for intricate architecture and towering spires."],
["1.25 million visitors", "A prehistoric monument made of enormous standing stones whose original purpose remains debated."],
["4.6 million", "An ancient hilltop complex containing important Greek monuments, including the famous Parthenon."],
["2.5–2.6 million a year", "An ancient Mayan city famous for its pyramid, astronomical knowledge, and impressive architecture."],
["Around 1 million a year", "One of the world's largest waterfalls, creating enormous clouds of mist as water plunges into a gorge."],
["4.5–4.7 million a year", "A famous national park featuring geysers, hot springs, wildlife, and beautiful volcanic landscapes."],
["8.7–8.9 million a year", "A world-famous art museum housing thousands of artworks, including the Mona Lisa."],
["Around 1 million a year", "A historic bell tower famous for its noticeable tilt and distinctive medieval architecture."],
["Around 10 million a year", "A famous red suspension bridge connecting San Francisco with Marin County across the Golden Gate Strait."],
["Around 50,000 a year", "Africa's highest mountain, featuring dramatic landscapes and a snow-capped summit."],
["3–5 million a year", "A historic mosque famous for its blue interior tiles, impressive domes, and elegant minarets."],
["17–19 million a year", "A vast imperial palace complex that once housed Chinese emperors and their royal households."],
["2–2.5 million a year", "The world's largest coral reef system, home to colourful marine life and underwater ecosystems."],
["Several million a year", "A historic neoclassical monument symbolising German unity and the country's history."],
["1.3–1.5 million a year", "A fairytale-like castle surrounded by mountains, famous for its romantic architecture and picturesque setting."],
["Around 2.8 million a year", "A historic fortress once used as a royal palace, prison, and treasury."],
["350,000–500,000 a year", "A vast wildlife reserve famous for lions, elephants, and the annual wildebeest migration."],
["2.5–3 million a year", "A tall red-and-white communications tower offering panoramic views across Tokyo."],
["Around 500,000 a year", "The official London residence of the British monarch, famous for royal ceremonies and changing of the guard."],
["3–5 million a year", "A historic architectural landmark that has served as a church, mosque, and museum."],
["4–4.5 million a year", "A beautiful mountain park known for turquoise lakes, forests, glaciers, and wildlife."],
["Around 1 million a year", "A flat-topped mountain offering spectacular views of Cape Town and the surrounding coastline."],
["Around 8 million a year", "A magnificent royal palace famous for luxurious rooms, grand gardens, and the Hall of Mirrors."],
["Around 30 million a year", "A famous hotel and entertainment complex recognised for its three towers and rooftop SkyPark."],
["Around 300,000 a year", "A massive sandstone formation sacred to Aboriginal Australians, famous for its changing colours at sunrise and sunset."],
["2.5–3 million a year", "A historic island village crowned by a medieval abbey, surrounded by dramatic tidal waters."],
["1.5–2 million a year", "An enormous waterfall system surrounded by rainforest, featuring hundreds of individual cascades."],
["2.1–2.2 million a year", "A historic fortress overlooking Edinburgh, famous for its royal history and spectacular views."],
["1–2 million a year", "A giant frame-shaped landmark offering views of both old and modern Dubai."],
["Around 4 million a year", "A historic suspension bridge connecting Manhattan and Brooklyn, popular for walking and sightseeing."],
["5–6 million a year", "A historic royal palace featuring traditional Korean architecture, beautiful courtyards, and ceremonial gates."],
["1–2 million a year", "A picturesque lake featuring a small island church and a medieval castle overlooking the water."],
["Around 1 million a year", "A famous pyramid-shaped Alpine mountain known for its dramatic peaks and challenging climbing routes."],
["Around 2.7 million a year", "A historic palace and fortress complex celebrated for intricate Islamic architecture and beautiful gardens."],
["Around 2 million a year", "A famous communications tower featuring observation decks with impressive views across Toronto."],
["Around 2 million a year", "A beautiful riverside Buddhist temple decorated with colourful porcelain and an impressive central tower."],
["Around 2 million a year", "A mountainside sculpture featuring the carved faces of four American presidents."],
["Around 10 million a year", "A spectacular Baroque fountain famous for its sculptures and traditional coin-tossing ritual."],
["5–10 million a year", "A famous Shinto shrine known for thousands of bright red torii gates along forest pathways."],
["3–4 million a year", "A scenic lake surrounded by mountains, elegant villas, charming villages, and beautiful waterfront views."],
["Under 100,000 a year", "Remarkable medieval churches carved directly into solid rock, representing important Ethiopian Christian heritage."],
["Around 1 million a year", "A colourful cathedral famous for its unusual onion-shaped domes and distinctive Russian architecture."],
["1.5–1.8 million a year", "A national park featuring beautiful turquoise lakes, cascading waterfalls, and wooden walking pathways."],
["Around 1 million a year", "A historic palace perched on a hill, formerly serving as the winter residence of the Dalai Lama."],
["Around 1.5 million a year", "Dramatic coastal cliffs offering spectacular views over the Atlantic Ocean."],
["3–4 million a year", "A massive Buddhist temple decorated with detailed stone carvings and numerous Buddha statues."],
["4–4.5 million a year", "An iconic skyscraper featuring observation decks with panoramic views of New York City."],
["7–9 million a year", "A beautiful bay filled with thousands of limestone islands rising dramatically from emerald-green waters."],
["Around 1 million a year", "New Zealand's highest mountain, surrounded by glaciers, alpine scenery, and popular hiking trails."],
["Around 12 million a year", "A historic Gothic cathedral famous for its impressive architecture, stained glass, and detailed sculptures."],
["100,000–150,000 a year", "Enormous stone statues created by the Rapa Nui people, representing their ancestors and cultural heritage."],
["100,000–200,000 a year", "The world's largest salt flat, famous for its mirror-like reflections during the wet season."],
["1.5–2 million a year", "A historic castle complex featuring palaces, churches, gardens, and impressive views over Prague."],
["12–16 million a year", "A futuristic garden featuring enormous Supertrees, indoor conservatories, and spectacular light displays."],
["Around 1 million a year", "A natural coastal formation featuring thousands of unusual hexagonal basalt columns."],
["500,000–1 million a year", "An active volcano famous for its dramatic crater, volcanic landscape, and spectacular sunrise views."],
["2.5–2.7 million a year", "A national museum displaying Dutch masterpieces, historical objects, and famous paintings by Rembrandt."],
["Around 1 million a year", "A high-altitude lake famous for its floating islands and traditional communities."],
["2–3 million a year", "A vast ancient Egyptian temple complex featuring enormous columns, statues, and historic religious monuments."],
["Around 1 million a year", "A sacred Buddhist pagoda covered in gold, famous for its enormous golden stupa."],
["2.5–3 million a year", "A beautifully preserved Japanese castle known for its white exterior and impressive defensive architecture."],
["Around 2 million a year", "A dramatic river viewpoint where the Colorado River curves around a horseshoe-shaped rock formation."],
["Around 1 million a year", "A spectacular fjord featuring towering cliffs, waterfalls, and beautiful surrounding rainforest."],
["600,000–700,000 a year", "A futuristic landmark shaped like an enlarged iron crystal, featuring connected spheres and exhibition spaces."],
["6–8 million a year", "A remarkable national park famous for towering sandstone pillars and misty mountain scenery."],
["4.8 million a year", "A breathtaking church interior featuring colourful stained-glass windows, towering columns, and intricate architectural details."],
["Several million a year", "A lively historic square filled with food stalls, market traders, performers, and traditional entertainment."],
["150,000–300,000 a year", "Ancient hillside rice terraces built by local communities, creating impressive layered agricultural landscapes."],
["1–1.5 million a year", "A picturesque lakeside village famous for its traditional houses, mountain scenery, and historic salt mines."],
["A few thousand a year", "A remarkable flat-topped mountain with unusual rock formations and unique plant life."],
["1.5–1.7 million a year", "A colourful Romantic palace featuring striking architecture and beautiful views across the surrounding hills."],
["Around 2 million a year", "The world's deepest freshwater lake, famous for its extraordinary size, clear water, and unique wildlife."],
["200,000–400,000 a year", "A vast desert landscape featuring red sand dunes, dramatic sandstone mountains, and ancient rock inscriptions."],
["Around 1 million a year", "A dramatic coastal headland known for rugged cliffs, ocean views, and diverse wildlife."],
["Around 30 million a year", "A sacred Sikh shrine famous for its golden exterior, peaceful surroundings, and community kitchen."],
["Around 500,000 a year", "A beautiful series of cascading waterfalls surrounded by tropical greenery."],
["4–5 million a year", "A famous Zen Buddhist temple covered in gold leaf, beautifully reflected in its surrounding pond."]
];

/*
function addAttractionDescriptions() {
    const headings = document.querySelectorAll("h3");

    const pageMatch = window.location.pathname.match(/page(\d+)\.html$/);
    const page = pageMatch ? Number(pageMatch[1]) : 1;

    headings.forEach(function(heading, index) {
        const match = heading.textContent.trim().match(/^(\d+)\./);

        const number = match
            ? Number(match[1])
            : (page - 1) * 12 + index + 1;
        const data = attractionDescriptions[number - 1];

        if (!data) return;

        const card = heading.closest(
            ".site-card, .site, .card, article, figure"
        ) || heading.parentElement;

        const image = card.querySelector("img");

        if (!image) return;

        if (card.querySelector(".attraction-details")) return;

        const details = document.createElement("div");
        details.className = "attraction-details";

        details.style.padding = "10px";
        details.style.fontSize = "14px";
        details.style.lineHeight = "1.5";
        details.style.backgroundColor = "#ffffff";
        details.style.color = "#222222";
        details.style.textAlign = "left";

        const visitors = document.createElement("p");
        visitors.style.fontWeight = "bold";
        visitors.style.margin = "0 0 8px";
        visitors.textContent = "Annual visitors: " + data[0];

        const description = document.createElement("p");
        description.style.margin = "0";
        description.textContent = data[1];

        details.appendChild(visitors);
        details.appendChild(description);

        image.insertAdjacentElement("afterend", details);
    });
}

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        addAttractionDescriptions
    );
} else {
    addAttractionDescriptions();
}
*/
