# Oman Travel Guide

## Project description
A responsive four-page travel guide website for exploring Oman, built with HTML, CSS, and JavaScript.

## Features
- Photo-led homepage and responsive horizontal navigation
- Destination profiles for Muscat, Nizwa, Wadi Shab, Wahiba Sands, Jebel Akhdar, and Salalah
- Visitor highlights, indicative prices and hours where published, and Google Maps search links
- Editorial culture page covering food, architecture, traditions, and visitor etiquette
- Trip preference form with multiple destination checkboxes and browser-side validation
- Mobile menu, card hover interactions, and responsive layouts

## File structure

- `index.html` — Home page
- `places.html` — Six destination profiles and practical visit information
- `culture.html` — Food, architecture, traditions, and visitor etiquette
- `plan.html` — Trip preference form
- `style.css` — Shared responsive design system
- `script.js` — Navigation, mouse interactions, and form validation
- `images/ATTRIBUTION.md` — Photo sources and license credits

## Opening the website
Open `index.html` in a browser. An internet connection is required for the Wikimedia Commons photographs and Google Fonts.

## GitHub Pages
The project is arranged to publish from the root of the `main` branch. In GitHub, open **Settings → Pages**, select **Deploy from a branch**, choose `main` and `/ (root)`, then save.

## Git commands
Run these commands from the project folder after creating an empty GitHub repository. Replace the placeholder remote with the URL of your repository.

```bash
git init
git add .
git commit -m "Build Oman Travel Guide pages"
git branch -M main
git remote add origin <your-github-repository-url>
git push -u origin main
```

The form validates details in the browser only. It does not send email or store submissions. Visitor prices and opening hours are subject to change; check the linked venue information before travelling.

