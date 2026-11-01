# Oman Travel Guide

## Project description
[Write your own description of this project here.]

## Features
[Describe the features you completed here.]

## File structure

- `index.html` — Photo-led home page
- `places.html` — Six destination profiles
- `culture.html` — Food, architecture, traditions and etiquette
- `plan.html` — Trip preference form with browser-side validation
- `style.css` — Shared responsive design system
- `script.js` — Mobile navigation, mouse interactions and form validation
- `images/ATTRIBUTION.md` — Photo source and license credits

## Images and credits
The pages use photographs served from Wikimedia Commons. The credits and license links are recorded in [`images/ATTRIBUTION.md`](images/ATTRIBUTION.md). Images load from Wikimedia Commons, so an internet connection is needed to see them. The HTML, CSS and JavaScript use relative paths for the project files and work from the repository root on GitHub Pages.

## Opening the website
[Write your own instructions here. For a local preview, open `index.html` in a browser.]

## GitHub Pages
This project is arranged to publish from the root of the `main` branch. In GitHub, open **Settings → Pages**, select **Deploy from a branch**, choose `main` and `/ (root)`, and save.

## Git commands
Run these commands from the project folder after creating an empty GitHub repository. Replace the example remote with your repository URL if needed.

```bash
git init
git add .
git commit -m "Redesign Oman Travel Guide with responsive layouts"
git branch -M main
git remote add origin <your-github-repository-url>
git push -u origin main
```

Meaningful follow-up commit examples:

- `Add original destination descriptions`
- `Refine mobile navigation spacing`
- `Update culture page photo captions`

The trip form validates input in the browser only. It does not send email or store form submissions.

