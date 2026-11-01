# Sunil Nutakki — Java Full Stack Developer Portfolio

Responsive single-page Angular 19 portfolio based on the supplied visual references and the uploaded resume. All sections are implemented in one standalone `AppComponent`; navigation uses anchor links and smooth scrolling.

## Run locally

```bash
npm install
npm start
```

Open http://localhost:4200.

## Add your resume PDF

Copy your PDF to `public/assets/resume.pdf`. The Resume button downloads `assets/resume.pdf`.

## Personalize before publishing

- Replace the LinkedIn and GitHub placeholder URLs in `src/app/app.component.html` with your actual profile URLs.
- Replace the initials card (`SN`) with your own profile photo if desired.
- Verify public contact details before publishing.

## GitHub Pages deployment

Create a public GitHub repository named `sunil-portfolio`, then:

```bash
git init
git add .
git commit -m "Create responsive developer portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sunil-portfolio.git
git push -u origin main
npm run deploy
```

In GitHub: Settings → Pages → Deploy from a branch → `gh-pages` → `/ (root)`.

The deploy script uses `/sunil-portfolio/` as the base href. If your repository has a different name, update the `deploy` script in `package.json` accordingly.
