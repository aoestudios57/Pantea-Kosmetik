# Pantea Kosmetik – Landingpage

Fertige, responsive Landingpage (reines HTML + Bootstrap 5 + JavaScript, kein Build-Prozess) für das Kosmetikstudio in Wien. Läuft direkt auf GitHub Pages.

## Bereits eingetragen (bestätigt über deinen Treatwell-Connect-Link)

- Name: **Pantea Kosmetik**
- Adresse: **Siebertgasse 36, 1120 Wien**
- Telefon: **0690 10681669**
- Domain: **pantea-kosmetik.at** (bereits überall in `index.html`, `robots.txt` und `sitemap.xml` eingetragen)
- Online-Buchung: dein echter Treatwell-Link `https://trea.tw/CxvAgS8Vir8xBcfVV` ist bereits im Buchungs-Button, im Kontaktbereich und im JSON-LD eingetragen
- 4 echte Google-Bewertungen sind bereits in `js/script.js` unter `REAL_REVIEWS` eingetragen

⚠️ **Korrektur:** Im letzten Schritt hatte ich fälschlicherweise Daten einer gleichnamigen, aber anderen Firma ("Pantea's Kosmetik & Fußpflege" in Wiesloch, Deutschland) übernommen — eine Verwechslung durch die Namensgleichheit bei meiner Websuche. Dein Treatwell-Link hat das klargestellt: dein Studio ist in Wien. Ich habe Adresse, Telefon, Instagram und Facebook der falschen Firma wieder entfernt. Telefonnummer, Instagram/Facebook-Handle, E-Mail, echte Öffnungszeiten und Google Place ID kenne ich für dein Wiener Studio nicht — die musst du unten selbst eintragen.

## Was du VOR dem Veröffentlichen noch ausfüllen musst

### 1. Bilder hinzufügen
Lege diese Dateien im Ordner `assets/` ab (Namen müssen exakt passen):
- `assets/hero.jpg` – Hauptbild oben (z. B. Behandlungsraum, Empfang)
- `assets/about.jpg` – Bild im "Über uns"-Bereich
- `assets/og-image.jpg` – Vorschaubild, wenn der Link z. B. bei WhatsApp/Instagram geteilt wird (1200×630 px empfohlen)

### 2. Noch fehlende Angaben ersetzen
Öffne `index.html` und ersetze folgende Platzhalter (Strg+H / Suchen & Ersetzen):
- `info@pantea-kosmetik.at` ist schon eingetragen — richte dieses Postfach bei deinem Domain-Anbieter ein, oder ersetze es durch eine E-Mail, die du bereits nutzt
- `DEINE_GOOGLE_PLACE_ID` → siehe Punkt 3
- Öffnungszeiten in `index.html` (Kontaktbereich) und im JSON-LD (`openingHoursSpecification`) sind aktuell nur ein generischer Platzhalter (Mo–Fr 09:00–19:00, Sa 09:00–15:00) — bitte durch deine echten Zeiten aus deinem Google-Profil ersetzen

### 3. Google Maps Place ID eintragen
Die Kartenvorschau im Kontaktbereich funktioniert bereits (nutzt deine Adresse). Für die Bewertungs-Buttons und die Verlinkung auf dein echtes Google-Profil fehlt noch deine **Place ID**:
1. Öffne den [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id).
2. Suche dort nach "Pantea Kosmetik, Siebertgasse 36, 1120 Wien".
3. Kopiere die angezeigte Place ID und ersetze überall `DEINE_GOOGLE_PLACE_ID` damit (Bewertungs-Buttons in der Bewertungs-Sektion, JSON-LD `sameAs`, Social-Icon im Kontaktbereich, sowie in `js/script.js` unter `CONFIG.googlePlaceId`, siehe Punkt 4).

### 4. Echte Google-Bewertungen anzeigen
Ich kann eure Google-Bewertungen nicht automatisch für dich auslesen — Google blockiert automatisierte Zugriffe auf Maps-Profile grundsätzlich (Cookie-Consent-Wand, kein öffentliches Bewertungs-API ohne Key). Es gibt zwei Wege, echte Bewertungen zu zeigen:

**Weg A — sofort, ohne Setup (empfohlen für den Start):**
1. Öffne dein Google-Unternehmensprofil oder suche "Pantea Kosmetik" auf Google Maps → Bewertungen.
2. Kopiere 3–6 echte, gute Bewertungen 1:1 (Name, Sterne, Text).
3. Trage sie in `js/script.js` in das Array `REAL_REVIEWS` ein, z. B.:
   ```js
   const REAL_REVIEWS = [
     { author: "Maria S.", rating: 5, text: "Sehr professionell, tolles Ergebnis, komme wieder!" },
     { author: "Julia K.", rating: 5, text: "Immer freundlich, saubere Arbeit, sehr zu empfehlen." },
   ];
   ```
4. Fertig — die Bewertungen erscheinen sofort auf der Website, ganz ohne API-Key oder Google Cloud Konto. Denk daran, die Liste ab und zu zu aktualisieren, wenn neue gute Bewertungen dazukommen.

**Weg B — vollautomatisch live von Google (mehr Aufwand, braucht ein Google Cloud Konto mit hinterlegter Zahlungsmethode):**
1. Gehe zur [Google Cloud Console](https://console.cloud.google.com/), erstelle ein Projekt.
2. Aktiviere die **"Maps JavaScript API"** und die **"Places API"**.
3. Erstelle einen API-Key und **beschränke ihn unbedingt** auf deine Domain (HTTP-Referrer-Einschränkung), damit ihn niemand missbrauchen kann.
4. Öffne `js/script.js`, ganz oben im `CONFIG`-Objekt:
   ```js
   googleMapsApiKey: "DEIN_API_KEY",
   googlePlaceId: "DEINE_PLACE_ID",
   ```
5. Sobald beides gesetzt ist, lädt die Seite automatisch deine echten 4- und 5-Sterne-Bewertungen live von Google nach und ersetzt damit die manuell eingetragenen aus `REAL_REVIEWS`.

Beide Wege zeigen ausschließlich echte, von Google stammende Bewertungen — es werden nirgends erfundene Testimonials angezeigt.

### 5. Terminbuchung mit Treatwell — bereits verbunden ✅
Eine reine GitHub-Pages-Seite hat **keinen eigenen Server**, kann sich also nicht direkt mit der Treatwell-Datenbank verbinden. Die zuverlässige und von Treatwell selbst unterstützte Lösung ist bereits eingebaut:

- Der Button „Termin über Treatwell buchen“ (Sektion `#booking`), das Treatwell-Icon im Kontaktbereich sowie der JSON-LD-`sameAs`-Eintrag verlinken bereits auf deinen echten Treatwell-Connect-Link `https://trea.tw/CxvAgS8Vir8xBcfVV`. **Jede Buchung darüber landet automatisch und ohne Verzögerung direkt in deinem echten Treatwell-Kalender** – es ist ja derselbe Kalender.
- **Noch nahtloser (optional):** Logge dich in dein Treatwell-Partnerportal ein und schau nach, ob dir dort ein offizieller **Einbett-Code ("Book Now"-Widget)** angeboten wird. Falls ja, füge ihn im `<div id="treatwellWidget">`-Block in `index.html` anstelle des Buttons ein – dann läuft die Buchung optisch direkt auf deiner Seite ab, landet aber technisch trotzdem in Treatwell.
- Eine "unsichtbare" Automatisierung, die Treatwell umgeht und trotzdem automatisch in deren Kalender schreibt, gibt es nicht (und würde ohne Treatwell-API-Zugang auch nicht zuverlässig funktionieren) – der Button/Widget-Weg ist der offizielle und stabile Weg.

## Lokal testen

Einfach `index.html` per Doppelklick im Browser öffnen, oder mit einem lokalen Server (z. B. VS Code "Live Server"-Erweiterung) für volle Funktionalität.

## Auf GitHub Pages veröffentlichen (mit eigener Domain pantea-kosmetik.at)

1. Erstelle ein neues Repository auf GitHub und lade alle Dateien hoch (`index.html`, `css/`, `js/`, `assets/`, `robots.txt`, `sitemap.xml`).
2. Erstelle im Repo-Root eine Datei namens `CNAME` (ohne Dateiendung) mit genau diesem Inhalt: `pantea-kosmetik.at`
3. Gehe im Repo zu **Settings → Pages**, wähle als Branch `main` und Ordner `/root`, dann **Save**.
4. Bei deinem Domain-Anbieter (wo du `pantea-kosmetik.at` registriert hast) trägst du folgende DNS-Einträge ein, damit die Domain auf GitHub Pages zeigt:
   - Vier `A`-Records auf den Root (`@`): `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Optional einen `CNAME`-Record für `www` auf `DEIN-GITHUB-NAME.github.io`
5. Zurück in **Settings → Pages**: trage `pantea-kosmetik.at` als Custom Domain ein und aktiviere **Enforce HTTPS**, sobald das Zertifikat ausgestellt wurde (kann bis zu 24h dauern).
6. Danach ist die Seite unter `https://pantea-kosmetik.at/` live — alle Links in `index.html` sind bereits darauf eingestellt.

## SEO-Maßnahmen, die bereits eingebaut sind

- Saubere Meta-Tags (Title, Description, Keywords, Canonical, Open Graph, Twitter Card)
- Strukturierte Daten (JSON-LD): `BeautySalon` (LocalBusiness) mit Adresse, Öffnungszeiten, Preisklasse, Social-Links, sowie `FAQPage` für Rich-Snippets in der Google-Suche
- Semantisches HTML5 (`header`, `section`, `footer`, korrekte Überschriften-Hierarchie H1–H3)
- `robots.txt` + `sitemap.xml` für schnelleres Crawling
- Schnell ladende Seite (CDN für Bootstrap/Icons/Fonts, `loading="lazy"` bei Bildern)
- Mobile-first, responsives Layout
- Lokale Keywords ("Wien" + Leistungsnamen) natürlich im Text verteilt

### Zusätzlich empfohlen (macht den größten SEO-Unterschied):
1. **Google Unternehmensprofil** vollständig pflegen (Fotos, Öffnungszeiten, Kategorie, Beiträge) – das ist der wichtigste Rankingfaktor für lokale Suchen wie "Kosmetikstudio Wien".
2. Aktiv um Google-Bewertungen bitten (Button dafür ist schon eingebaut: „Bewertung hinterlassen“).
3. Backlinks von lokalen Verzeichnissen (dein Treatwell-Profil ist schon verlinkt) und ggf. lokale Branchenbücher.
4. Nach Veröffentlichung die URL in der [Google Search Console](https://search.google.com/search-console) einreichen und die `sitemap.xml` dort hinterlegen.
