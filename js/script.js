/* ======================================================================
   KONFIGURATION – hier alles eintragen, was zu deinem Salon gehört.
   ====================================================================== */
const CONFIG = {
  // OPTIONAL, für die volle Automatik: Google Maps JavaScript API Key (Places-Bibliothek aktivieren!)
  // + Place ID deines Salons. Anleitung dazu steht in der README.md.
  // Wenn hier nichts eingetragen ist, nutzt die Seite stattdessen automatisch die
  // Bewertungen aus REAL_REVIEWS weiter unten (die du manuell von Google kopierst).
  googleMapsApiKey: "",
  googlePlaceId: "",

  // Deine echte Google-Gesamtbewertung (siehst du oben auf deinem Google-Unternehmensprofil).
  // Wird angezeigt, solange kein API-Key gesetzt ist bzw. bis die Live-Abfrage sie ersetzt.
  fallbackRatingValue: "5",
  fallbackRatingCount: "auf Google",

  // Nur echte 4- und 5-Sterne-Bewertungen anzeigen (gilt für den API-Modus)
  minStarsToShow: 4,
  maxReviewsToShow: 6
};

/* ======================================================================
   ECHTE GOOGLE-BEWERTUNGEN – manuell eintragen (kein API-Key nötig)
   ======================================================================
   So geht's: Öffne dein Google-Unternehmensprofil (oder suche "Pantea Kosmetik"
   auf Google Maps) → Bewertungen. Kopiere dort 3-6 echte, gute Bewertungen
   1:1 (Name, Sterne, Text) hier rein. Diese werden sofort auf der Website
   angezeigt, ganz ohne API-Key oder Google Cloud Setup.
   Ist CONFIG.googleMapsApiKey UND CONFIG.googlePlaceId gesetzt, werden diese
   hier automatisch durch die live von Google geladenen Bewertungen ersetzt. */
const REAL_REVIEWS = [
  { author: "Fatih Kazan", rating: 5, text: "Meine 3. Sitzung für Laser-Haarentfernung, keine Schmerzen, bin sehr zufrieden…" },
  { author: "Fatma Ülker", rating: 5, text: "Perfekte, saubere Arbeit genauso wie ich es wollte, auf jeden Fall empfehlenswert. Sie geht auf alle Wünsche ein, offen für alles, das finde ich super ❤️" },
  { author: "Elnaz Khanlari", rating: 5, text: "Alles war wirklich großartig. Ich war mit ihrer Arbeit sehr zufrieden und habe mich letztendlich entschieden, für immer hier zu bleiben." },
  { author: "Mert Sevo", rating: 5, text: "Ich bin sehr zufrieden! Super freundliche und professionelle Beratung, man fühlt sich sofort wohl. Die Behandlung war sehr angenehm und das Ergebnis…" },
];

/* ======================================================================
   LEISTUNGEN & PREISE
   ====================================================================== */
const SERVICE_CATEGORIES = [
  {
    id: "laser",
    label: "✨ Laser Haarentfernung",
    desc: "Dauerhafte Haarentfernung für Gesicht, Körper, Beine und Intimbereich.",
    groups: [
      { name: "Gesicht", items: [
        ["Oberlippe","8 €"], ["Kinn","8 €"], ["Wangen","8 €"], ["Stirn","8 €"],
        ["Hals","10 €"], ["Ganzes Gesicht","35 €"], ["Ganzes Gesicht + Hals","45 €"]
      ]},
      { name: "Oberkörper", items: [
        ["Achseln","15 €"], ["Unterarme","20 €"], ["Oberarme","20 €"], ["Ganze Arme","35 €"],
        ["Bauch","20 €"], ["Rücken / Taille","35 €"]
      ]},
      { name: "Beine", items: [
        ["Unterschenkel","30 €"], ["Oberschenkel","30 €"], ["Ganze Beine","53 €"], ["Fußrücken + Zehen","5 €"]
      ]},
      { name: "Bikini & Intimbereich", items: [
        ["Bikinizone","15 €"], ["Komplett Intim","28 €"], ["Po + Pofalte","25 €"], ["Pubis + Komplett Intim","40 €"]
      ]},
      { name: "Pakete", items: [
        ["Achseln + Bikinizone","25 €"], ["Achseln + Komplett Intim","40 €"],
        ["Achseln + Pubis + Komplett Intim","50 €"], ["Ganze Beine + Komplett Intim","75 €"],
        ["Ganze Beine + Achseln + Komplett Intim","90 €"], ["Ganzkörper ohne Gesicht","120 €"],
        ["Ganzkörper inkl. Gesicht + Hals","165 €"]
      ]}
    ]
  },
  {
    id: "waxing",
    label: "🌸 Waxing",
    desc: "Sanftes und gründliches Waxing für ein langanhaltend glattes Hautgefühl.",
    groups: [
      { name: "Gesicht", items: [
        ["Oberlippe","8 €"], ["Kinn","10 €"], ["Wangen","10 €"], ["Stirn","10 €"],
        ["Hals","12 €"], ["Ganzes Gesicht","25 €"]
      ]},
      { name: "Oberkörper", items: [
        ["Achseln","18 €"], ["Unterarme","22 €"], ["Oberarme","25 €"], ["Ganze Arme","30 €"],
        ["Bauch","25 €"], ["Rücken / unterer Rücken","30 €"], ["Ganzer Rücken","40 €"]
      ]},
      { name: "Beine", items: [
        ["Unterschenkel","30 €"], ["Oberschenkel","32 €"], ["Ganze Beine","50 €"], ["Zehen","8 €"]
      ]},
      { name: "Bikini & Intimbereich", items: [
        ["Bikinizone","18 €"], ["Komplett Intim","30 €"], ["Po","20 €"], ["Pofalte","12 €"],
        ["Komplett Pubis + Intim","38 €"]
      ]},
      { name: "Pakete", items: [
        ["Ganzes Gesicht + Achseln","40 €"], ["Achseln + Bikinizone","32 €"],
        ["Achseln + Komplett Bikini","43 €"], ["Komplett Bikini + ganze Beine","75 €"],
        ["Komplett Intim + Achseln","50 €"], ["Ganze Beine + Achseln + Komplett Bikini","90 €"],
        ["Ganzkörper (ohne Gesicht)","125 €"]
      ]}
    ]
  },
  {
    id: "nails",
    label: "💅 Nails",
    desc: "Maniküre, Nagelmodellage, Verlängerung, Auffüllen und Nail Art.",
    groups: [
      { name: "Maniküre", items: [
        ["Klassische Maniküre","24 €"], ["Russische Maniküre","30 €"],
        ["Chinesische Maniküre","30 €"], ["Maniküre + Gel-Lack","38 €"]
      ]},
      { name: "Nagelmodellage & Verlängerung", items: [
        ["Acrylpulver-Modellage ohne Gel-Lack – Größe M","48 €"],
        ["Acrylpulver-Modellage ohne Gel-Lack – Größe L","55 €"],
        ["Acrylpulver-Modellage + Gel-Lack – Größe M","53 €"],
        ["Acrylpulver-Modellage + Gel-Lack – Größe L","58 €"],
        ["Gel-Modellage ohne Gel-Lack – Größe M","43 €"],
        ["Gel-Modellage ohne Gel-Lack – Größe L","48 €"],
        ["Gel-Modellage + Gel-Lack – Größe M","48 €"],
        ["Gel-Modellage + Gel-Lack – Größe L","53 €"],
        ["Tip-Modellage – kurze Nägel","48 €"], ["Tip-Modellage – lange Nägel","55 €"],
        ["Farbige Modellage","53 €"], ["Naturnagelverstärkung mit Gel","38 €"],
        ["Naturnagelverstärkung mit Acrylpulver","40 €"]
      ]},
      { name: "Auffüllen & Reparatur", items: [
        ["Auffüllen der Acrylpulver-Modellage","38 €"], ["Auffüllen der Gel-Modellage","35 €"],
        ["Auffrischung des Gel-Lacks","32 €"], ["Reparatur eines abgebrochenen Nagels","3 € / Nagel"],
        ["Entfernung des alten Materials + neues Nagelset","65 €"]
      ]},
      { name: "Gel & Removal", items: [
        ["Gel-Lack auf Naturnägeln","30 €"], ["Gel-Removal","15 €"], ["Acryl-/Pulver-Removal","15 €"],
        ["Gel-Lack-Removal","15 €"], ["Removal + Maniküre","28 €"]
      ]},
      { name: "Nail Art & Design", items: [
        ["French","10 €"], ["Ombré","10 €"], ["Chrome","10 €"], ["Spiegel-Chrome","10 €"],
        ["Cat Eye","10 €"], ["Design mit Strasssteinen","ab 3 € / Nagel"],
        ["Design mit Blattgold","ab 3 € / Nagel"], ["Glitzer-Design","ab 3 € / Nagel"],
        ["Design mit Stickern","ab 3 € / Nagel"], ["Design mit Accessoires","ab 3 € / Nagel"]
      ]}
    ]
  },
  {
    id: "lashes",
    label: "👁️ Wimpern & Augenbrauen",
    desc: "Lifting, Färben, Henna Brows und Fadentechnik für den perfekten Blick.",
    groups: [
      { name: "Lifting", items: [
        ["Wimpernlifting","38 €"], ["Wimpernlifting + Färben","45 €"],
        ["Augenbrauenlifting","38 €"], ["Augenbrauenlifting + Färben","40 €"],
        ["Wimpernlifting + Augenbrauenlifting","71 €"],
        ["Wimpernlifting + Färben + Augenbrauenlifting + Färben","80 €"]
      ]},
      { name: "Färben", items: [
        ["Augenbrauen färben","10 €"], ["Wimpern färben","10 €"], ["Henna Brows","20 €"]
      ]},
      { name: "Augenbrauen & Fadentechnik", items: [
        ["Augenbrauen zupfen / formen","10 €"], ["Oberlippe mit Fadentechnik","5 €"],
        ["Oberlippe + Kinn mit Fadentechnik","8 €"], ["Kinn + Hals mit Fadentechnik","10 €"],
        ["Ganzes Gesicht mit Fadentechnik","23 €"]
      ]}
    ]
  }
];

/* ======================================================================
   RENDER: Leistungen (Tabs + Accordion)
   ====================================================================== */
function renderServices(){
  const tabsEl = document.getElementById("serviceTabs");
  const accordionEl = document.getElementById("serviceAccordion");
  const descEl = document.getElementById("serviceCategoryDesc");

  tabsEl.innerHTML = SERVICE_CATEGORIES.map((cat, i) => `
    <li class="nav-item" role="presentation">
      <button class="nav-link ${i === 0 ? "active" : ""}" data-cat="${cat.id}" type="button">${cat.label}</button>
    </li>
  `).join("");

  function renderCategory(catId){
    const cat = SERVICE_CATEGORIES.find(c => c.id === catId);
    descEl.textContent = cat.desc;
    accordionEl.innerHTML = cat.groups.map((group, gi) => {
      const itemId = `${cat.id}-${gi}`;
      const rows = group.items.map(([name, price]) => `
        <div class="service-row">
          <span class="service-name">${name}</span>
          <span class="service-price">${price}</span>
        </div>
      `).join("");
      return `
        <div class="accordion-item">
          <h3 class="accordion-header">
            <button class="accordion-button ${gi === 0 ? "" : "collapsed"}" type="button"
              data-bs-toggle="collapse" data-bs-target="#collapse-${itemId}">
              ${group.name}
            </button>
          </h3>
          <div id="collapse-${itemId}" class="accordion-collapse collapse ${gi === 0 ? "show" : ""}"
            data-bs-parent="#serviceAccordion">
            <div class="accordion-body">${rows}</div>
          </div>
        </div>
      `;
    }).join("");
  }

  tabsEl.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-cat]");
    if (!btn) return;
    tabsEl.querySelectorAll(".nav-link").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderCategory(btn.dataset.cat);
  });

  renderCategory(SERVICE_CATEGORIES[0].id);
}

/* ======================================================================
   GOOGLE REVIEWS
   Standard: zeigt die manuell eingetragenen REAL_REVIEWS (echte, von Google
   kopierte Bewertungen) an — sofort sichtbar, ohne API-Key.
   Ist ein API-Key + Place ID gesetzt, werden diese durch live von Google
   geladene Bewertungen ersetzt.
   ====================================================================== */
function escapeHtml(str){
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function renderReviewCards(reviews){
  const grid = document.getElementById("reviewsGrid");
  grid.innerHTML = reviews.map(r => `
    <div class="col-md-4">
      <div class="review-card h-100">
        <div class="stars mb-2">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</div>
        <p class="mb-3">„${escapeHtml(r.text)}“</p>
        <div class="reviewer d-flex align-items-center gap-2">
          <i class="bi bi-google"></i> ${escapeHtml(r.author)}
        </div>
      </div>
    </div>
  `).join("");
}

function initGoogleReviews(){
  // 1) Sofort: manuell eingetragene echte Bewertungen anzeigen, falls vorhanden
  if (REAL_REVIEWS.length > 0) {
    renderReviewCards(REAL_REVIEWS);
  }
  document.getElementById("aggRatingValue").textContent = CONFIG.fallbackRatingValue;
  document.getElementById("aggRatingCount").textContent = CONFIG.fallbackRatingCount;
  document.getElementById("heroRatingText").textContent =
    `${CONFIG.fallbackRatingValue} Sterne · ${CONFIG.fallbackRatingCount}`;

  // 2) Optional: falls API-Key + Place ID gesetzt sind, live von Google nachladen
  //    und die manuellen Karten ersetzen, sobald die Antwort da ist.
  if (!CONFIG.googleMapsApiKey || !CONFIG.googlePlaceId) return;

  document.getElementById("reviewsLoading").classList.remove("d-none");

  window.__initGooglePlaces = function () {
    const map = new google.maps.Map(document.createElement("div"));
    const service = new google.maps.places.PlacesService(map);

    service.getDetails(
      { placeId: CONFIG.googlePlaceId, fields: ["reviews", "rating", "user_ratings_total"] },
      (place, status) => {
        document.getElementById("reviewsLoading").classList.add("d-none");
        if (status !== google.maps.places.PlacesServiceStatus.OK || !place) return;

        document.getElementById("aggRatingValue").textContent = place.rating ?? CONFIG.fallbackRatingValue;
        document.getElementById("aggRatingCount").textContent = place.user_ratings_total ?? CONFIG.fallbackRatingCount;
        document.getElementById("heroRatingText").textContent =
          `${place.rating ?? CONFIG.fallbackRatingValue}/5 · ${place.user_ratings_total ?? CONFIG.fallbackRatingCount} Google Bewertungen`;

        const goodReviews = (place.reviews || [])
          .filter(r => r.rating >= CONFIG.minStarsToShow)
          .sort((a, b) => b.rating - a.rating || b.time - a.time)
          .slice(0, CONFIG.maxReviewsToShow)
          .map(r => ({ author: r.author_name, rating: r.rating, text: r.text }));

        if (goodReviews.length > 0) renderReviewCards(goodReviews);
      }
    );
  };

  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${CONFIG.googleMapsApiKey}&libraries=places&callback=__initGooglePlaces`;
  script.async = true;
  document.head.appendChild(script);
}

/* ======================================================================
   UI: Navbar-Verhalten, Scroll-Reveal, Back-to-top
   ====================================================================== */
function initUI(){
  document.getElementById("year").textContent = new Date().getFullYear();

  // Navbar collapse schließen nach Klick (mobil)
  document.querySelectorAll("#navMenu .nav-link, #navMenu .btn").forEach(link => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("navMenu");
      if (menu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });

  // Back to top
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("show", window.scrollY > 400);
  });

  // Scroll reveal
  const revealEls = document.querySelectorAll("[data-reveal]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  initGoogleReviews();
  initUI();
});
