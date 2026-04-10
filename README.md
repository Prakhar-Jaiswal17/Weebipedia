# 🎌 Weebipedia

## 📌 Project Overview

Weebipedia is a web application that helps users discover anime and decide what to watch next.
Browse the top rated anime, search by title, or filter by genre — all in a clean, card-based interface with light and dark theme support.

---

## 🚀 Features

* 🔍 **Search anime by title** — Type a name and hit Search to find any anime
* 🎯 **Filter by genre** — Pick from 12 genres (Action, Adventure, Comedy, Fantasy, Romance, Seinen, Shounen, Slice of Life, Space, Time Travel, Vampire, Video Game)
* 📋 **Anime cards** — Each card displays the poster, MAL score, and title
* 🔎 **Hover overlay** — Hover over a card to reveal the full title, score, episode count, and synopsis
* 🌗 **Dark / Light theme toggle** — Switch between themes using an animated icon button in the navbar
* 🎞️ **Animated Lottie icons** — Sun and moon icons animate to indicate the current theme
* ⏳ **Loading spinner** — A spinner is displayed while anime data is being fetched
* ⚠️ **No Results message** — Shows a "No Results" message when the search returns nothing
* ⭐ **Top Rated Anime** — Displays the top rated anime by default on page load

---

## 🛠️ Technologies Used

* React.js
* JavaScript (ES6+)
* CSS
* Vite (build tool)
* Lottie React (animated icons)
* Jikan API (anime data)

---

## 🔌 API Used

* **Jikan API** — https://docs.api.jikan.moe/
  * `/v4/top/anime` — Fetches top rated anime
  * `/v4/genres/anime` — Fetches the list of genres
  * `/v4/anime?genres={id}&order_by=score&sort=desc` — Fetches anime by genre
  * `/v4/anime?q={query}` — Searches anime by title

---

## 📂 Project Structure

```bash
src/
 ├── index.css              # Global styles and theme overrides
 ├── main.jsx               # React entry point
 └── components/
      ├── App.jsx            # Main app with state and API logic
      ├── Navbar.jsx         # Navbar with search, genre filter, and theme toggle
      ├── AnimeDisplay.jsx   # Renders anime cards or loading/error states
      └── Card.jsx           # Individual anime card with hover overlay
icons/
 ├── icons8-sun.json               # Lottie sun animation (dark mode icon)
 └── Weather Icon - Night.json     # Lottie moon animation (light mode icon)
```

---

## 🎯 Objective

The objective of this project is to:

* Practice API integration using `fetch`
* Use array higher-order functions like `map` and `find`
* Build a component-based UI with React
* Implement a theme toggle using CSS class overrides

---
