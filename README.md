# BitVersus

Static website for **BitVersus** (https://bitversus1.com) — independent, plain-English research on
prop trading firms: evaluation rules, payouts and red flags.

## Structure

- `index.html` — home page (latest articles + categories)
- `articles/` — 18 individual article pages, one HTML file per article
- `categories/` — 8 category (pillar) pages
- `legal/` — Privacy Policy, Legal Notice & Terms, Cookie Policy
- `about.html`, `contact.html`
- `css/style.css`, `js/main.js` — shared styles and the cookie-consent banner script
- `assets/logo.png` — site logo (also used as favicon)
- `assets/covers/` — article cover photos go here (see `assets/covers/README-COVERS.md`
  for the exact filename needed per article and licensing notes)
- `sitemap.xml`, `robots.txt` — for Google Search Console
- `CNAME` — custom domain configuration for GitHub Pages
- `.nojekyll` — tells GitHub Pages to serve the site as-is (no Jekyll processing)

## Deploying on GitHub Pages with the custom domain

1. Push the contents of this folder to the root of your GitHub repository (e.g. `main` branch).
2. In the repository settings, go to **Pages** and set the source to the `main` branch, root folder.
3. The `CNAME` file already points to `bitversus1.com`. In your domain registrar's DNS settings, add:
   - An `A` record for the apex domain pointing to GitHub Pages' IP addresses (see GitHub's official
     "Managing a custom domain" documentation for the current IPs), **or**
   - A `CNAME` record for `www` pointing to `<your-github-username>.github.io`.
4. Back in GitHub Pages settings, enter `bitversus1.com` as the custom domain and enable **Enforce HTTPS**
   once the certificate is issued.
5. Wait for DNS propagation (can take up to 24-48 hours), then confirm the site loads at
   `https://bitversus1.com`.

## Before requesting Google AdSense

- Update the contact email if needed (`bitversus1@gmail.com` is used throughout).
- Review and refresh any prop-firm-specific figures (fees, rules, payout terms) mentioned in the
  articles, since this industry changes quickly.
- Verify the domain in Google Search Console and submit `sitemap.xml`.
- Wait until several pages show as indexed before submitting the AdSense application.
