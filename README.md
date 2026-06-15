# Character Roulette 🎲

A simple web app that rolls a random anime character on every click, pulling live data from the Jikan API (MyAnimeList).

## Live Demo
[Add your GitHub Pages link here once deployed]

## Features
- Fetches a random anime character on demand
- Displays character image, name, and bio
- Handles missing bios gracefully
- Error handling for failed API requests

## Tech Stack
- HTML / CSS
- Vanilla JavaScript
- Jikan API (`/random/characters`)

## How It Works
Clicking "Roll 🎲" sends a request to the Jikan API's random character endpoint, then dynamically renders the result — image, name, and a trimmed bio — into the page using `fetch()` and template literals.

## Run Locally
1. Clone or download this repo
2. Open `index.html` in any browser
3. Click Roll and enjoy

---

Built by REX as part of a JavaScript learning project.
