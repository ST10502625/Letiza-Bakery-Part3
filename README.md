# WEDE5020 Part 3 - Letiza Bakery Website

## Project Overview
This project is Part 3 of the Letiza Bakery website. It builds upon the HTML and CSS structure created in Part 2 by adding advanced JavaScript functionality, form processing, dynamic content, and SEO best practices.

## Part 3 Features Implemented
1. **Dynamic Content & Search:** The homepage features a dynamically rendered menu. Users can type in the search bar to instantly filter products (Bread, Cakes, Pastries) without reloading the page.
2. **Interactive Map:** Implemented Leaflet.js to replace the static iframe map. It shows a dynamic, interactive map with a marker on the bakery's location in Mokopane.
3. **Lightbox Gallery:** Added an interactive image gallery. Clicking on any product or cake image opens a larger modal view (Lightbox).
4. **Form Functionality (JavaScript):**
   - **Enquiry Form:** Includes HTML5 validation (e.g., 10-digit phone number) and uses simulated AJAX to process the form and display a dynamic response regarding cost/availability.
   - **Contact Form:** Validates user input and compiles the data into a structured `mailto:` link, opening the user's email client.
5. **SEO (On-Page):**
   - Added descriptive Title Tags and Meta Descriptions to all pages.
   - Used proper Heading structures (H1, H2, H3).
   - Added descriptive Alt text to all images.
   - Included `sitemap.xml` and `robots.txt` files for search engine indexing.
   - Ensured mobile responsiveness via CSS media queries.

---

## Changelog

### Version 3.0 (Part 3 Submission - 2026-11-02)
- Added interactive Leaflet Map to Home and Contact pages.
- Implemented dynamic product search functionality on the Home page.
- Added Lightbox modal gallery for product images.
- Added AJAX form submission simulation to `enquiry.html`.
- Added Email compilation logic to `contact.html`.
- Created `sitemap.xml` and `robots.txt` for SEO optimization.
- Implemented comprehensive on-page SEO (Meta tags, Alt text).

### Version 2.0 (Part 2 Feedback Implementation)
*[INSTRUCTION: Replace the bullet points below with the ACTUAL feedback you received from your lecturer in Part 2]*
- **[EDIT THIS]:** Fixed the layout of the cake gallery so images wrap correctly on mobile devices.
- **[EDIT THIS]:** Replaced the invalid `<image>` tag on the home page with a correct `<img>` tag.
- **[EDIT THIS]:** Added missing `required` attributes to the form inputs to prevent empty submissions.
- **[EDIT THIS]:** Updated all image `alt` tags to be more descriptive for accessibility and SEO.

### Version 1.0 (Part 1 Initial Setup)
- Initial creation of HTML structure for Home, About, Products, Enquiry, and Contact pages.
- Basic CSS styling applied.

---

## References
- Leaflet. (2024). *Leaflet - a JavaScript library for interactive maps*. Available at: https://leafletjs.com/
- MDN Web Docs. (2024). *Client-side form validation*. Available at: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
- Google Search Central. (2024). *Search Engine Optimization (SEO) Starter Guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Moz. (2024). *What is a Sitemap?* Available at: https://moz.com/learn/seo/sitemap
