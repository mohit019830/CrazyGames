# 🎮 CrazyGames Clone

A modern, responsive clone of the [CrazyGames](https://www.crazygames.com) homepage built with **React + Vite** as a BTech CSE Web Application Programming (WAP) course project.

---

## 📸 Preview

> Dark-themed game portal with hero banner, horizontal game sections, category filters, search, and a responsive sidebar navigation.

---

## ✨ Features

- 🔥 **Hero Banner** — Featured game spotlight with a large card and top picks list
- 🔍 **Live Search** — Real-time game search that filters results as you type
- 🏷️ **Category Filters** — One-click filtering by Action, Racing, Puzzle, Shooting, and more
- 📂 **Sidebar Navigation** — Navigate between Home, Trending, New Games, Multiplayer, and Favourites views
- ⚡ **Quick Play** — Category shortcuts in the sidebar that jump straight to filtered games
- ⏱️ **Recently Played** — Persisted via `localStorage`; games you've launched appear at the top
- 🌙 **Dark / Light Mode** — Toggle between themes with a single click
- 🔔 **Toast Notifications** — Smooth slide-up feedback messages for user actions
- 🎞️ **Loading Screen** — Branded splash screen shown on first load
- 🔗 **Real Game Links** — Every game card opens the actual CrazyGames URL in a new tab

---

## 🗂️ Project Structure

```
CrazyGamesCloneAI/
├── public/                  # Static assets
├── src/
│   ├── Components/
│   │   ├── Navbar.jsx       # Top navigation bar with search, dark mode toggle & action buttons
│   │   ├── Sidebar.jsx      # Left sidebar with navigation links and Quick Play categories
│   │   ├── Section.jsx      # Reusable horizontal game section with title
│   │   ├── HorizontalScroll.jsx  # Scrollable game row wrapper
│   │   └── GameCard.jsx     # Individual game card with image, title, tag & play handler
│   ├── Data/
│   │   └── games.js         # Static game data (title, category, tag, image URL, game URL)
│   ├── App.jsx              # Root component — state management, filtering, view routing
│   ├── App.css              # All component styles (dark/light theme, layout, animations)
│   ├── index.css            # Global reset and base styles
│   └── main.jsx             # React entry point
├── index.html
├── vite.config.js
└── package.json
```

---

## 🧱 Components Overview

| Component | Responsibility |
|---|---|
| `App.jsx` | Central state hub — search, category filter, sidebar view, dark mode, recently played, toasts |
| `Navbar.jsx` | Search bar, dark mode toggle, notification/favourites/profile buttons |
| `Sidebar.jsx` | Main navigation links + Quick Play category shortcuts |
| `Section.jsx` | Renders a labelled row of `GameCard` components |
| `HorizontalScroll.jsx` | Horizontal scrolling wrapper for game rows |
| `GameCard.jsx` | Displays a single game with image, title, category tag, and click-to-play |

---

## ⚙️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev) | UI framework (functional components + hooks) |
| [Vite 8](https://vitejs.dev) | Lightning-fast dev server and bundler |
| Vanilla CSS | Styling (no CSS frameworks) |
| `localStorage` | Persist recently played games across sessions |
| `useState` / `useEffect` | Core React hooks for state and side-effects |

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/CrazyGamesCloneAI.git
cd CrazyGamesCloneAI

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Other Scripts

```bash
npm run build    # Production build → dist/
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

---

## 🎮 How It Works

1. **Game Data** — All games are defined as a static array in `src/Data/games.js`. Each entry has an `id`, `title`, `category`, `tag` (`Hot` / `New` / `Top`), `image` URL, `description`, and the real `url` on CrazyGames.

2. **Filtering** — `App.jsx` derives filtered lists from the master games array using `Array.filter()` based on the active search query and selected category.

3. **View Routing** — Instead of a router library, `activeSidebarItem` state drives which JSX block `renderMainContent()` returns — keeping the code simple and beginner-friendly.

4. **Recently Played** — Clicking a game card saves the game object to `localStorage`. On startup, the stored list is validated (ensuring all required fields exist) and loaded back into state.

5. **Dark / Light Mode** — A CSS class (`light-mode`) is toggled on `document.body` via `useEffect`; all theme colours are defined as CSS variables in `App.css`.

---

## 📚 Academic Context

This project was built for the **Web Application Programming (WAP)** course as part of a BTech Computer Science Engineering degree. It demonstrates:

- Component-based architecture in React
- State management with `useState` and side-effects with `useEffect`
- CSS layout techniques (Flexbox, Grid, scroll snapping)
- `localStorage` for client-side data persistence
- Responsive UI design without external CSS libraries

---

## 📄 License

This project is for **educational purposes only**. CrazyGames™️ is a trademark of its respective owners. All game thumbnails and links belong to [crazygames.com](https://www.crazygames.com).
