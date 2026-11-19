
document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.createElement("div");
  overlay.id = "attraction-lightbox";

  overlay.innerHTML = `
    <div role="dialog" aria-modal="true"
         aria-label="Attraction details">

      <img id="attraction-large" alt="">

      <button id="attraction-close"
              type="button"
              aria-label="Close attraction details">×</button>

      <div id="attraction-info">
        <h2 id="attraction-name"></h2>
        <p id="attraction-location"></p>
        <p><strong>Annual visitors:</strong>
           <span id="attraction-count"></span></p>
        <p id="attraction-description"></p>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const largeImage = document.getElementById("attraction-large");
  const title = document.getElementById("attraction-name");
  const location = document.getElementById("attraction-location");
  const visitors = document.getElementById("attraction-count");
  const description = document.getElementById("attraction-description");
  const closeButton = document.getElementById("attraction-close");

  let previousFocus = null;

  function closePopup() {
    overlay.style.display = "none";
    document.body.style.overflow = "";
    if (previousFocus) previousFocus.focus();
  }

  // Select gallery photographs, including Page 1 filenames.
  const galleryImages = document.querySelectorAll(
    ".site-card img, .site img, .card img, article img, img[src*='attraction_']"
  );

  galleryImages.forEach(function (img) {
    img.style.cursor = "zoom-in";
    img.tabIndex = 0;
    img.setAttribute("role", "button");
    img.setAttribute("aria-label", "Open attraction photograph");

    function openPopup() {
      const card = img.closest(
        ".site-card, .site, .card, article"
      ) || img.parentElement;

      const heading = card.querySelector("h3, h2");
      const paragraph = card.querySelector("p");

      const name = heading?.textContent.trim()
        || img.alt || "Tourist attraction";

      largeImage.src = img.src;
      largeImage.alt = img.alt || name;

      title.textContent = name;
      location.textContent = paragraph?.textContent.trim() || "";

      visitors.textContent = "Annual figure not yet verified";

      description.textContent =
        "Explore this destination's remarkable scenery, architecture, history, and cultural significance.";

      previousFocus = document.activeElement;
      overlay.style.display = "flex";
      document.body.style.overflow = "hidden";
      closeButton.focus();
    }

    img.addEventListener("click", openPopup);

    img.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openPopup();
      }
    });
  });

  closeButton.addEventListener("click", closePopup);

  overlay.addEventListener("click", function (event) {
    if (event.target === overlay) closePopup();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closePopup();
  });
});
