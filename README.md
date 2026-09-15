# 🛠️ Snappie Admin Panel

A standalone UI prototype of the Snappie photobooth admin dashboard — manage frames, colors, and view visitor transactions, all wrapped in a playful pixel-retro theme. 🕹️

---

## ✨ Features

-  **Frame management** — add and list frames, filter by All/Premium, with a styled upload popup and live thumbnail preview.
-  **Colour management** — add new colors with a HEX picker and real-time preview, listed in a consistent table UI.
-  **Transactions view** — dashboard stats (total revenue, successful transactions, visitor count), plus a searchable/filterable table with status (Premium/Free) and date-range filtering.
-  **Admin login screen** — Snappie's signature retro-TV themed login page.

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React (Create React App / `react-scripts`) |
| Styling | Tailwind CSS |
| Routing | React Router DOM |
| UI utilities | React Icons, React Datepicker |

## 🎯 Project Purpose

This project was built to practice and demonstrate:

- **Component-driven admin dashboard design** — reusable list/table, form, and stat-card components sharing one consistent visual language.
- **Client-side state management** — CRUD-style interactions (add/filter/list) handled entirely with React state, no backend wiring required.
- **Rapid UI prototyping** — validating the admin panel's layout and interactions with dummy in-memory data before wiring up a real backend.

## 📝 Notes

- This is an **early, standalone prototype** — all data (frames, colours, transactions) is dummy/in-memory React state and resets on every page reload. There is no backend, database, or persistence layer here.
- The current, fully-functional version of this admin panel — backed by real Supabase authentication, database, and storage — now lives inside the [Snappie](https://github.com/ratuqurratul33/Snappie) project as part of one unified app (both the user-facing photobooth and this admin dashboard in a single codebase). This repository is kept for reference/history.

## 🖼️ Preview


**Live demo:** [snappie-delta.vercel.app/admin](https://snappie-delta.vercel.app/admin)

## 🚀 How to Build

```sh
git clone https://github.com/ratuqurratul33/adminSnappie.git
cd adminSnappie
npm install
npm start
```

Open http://localhost:3000

Build for production:

```sh
npm run build
```

## 👩‍💻 Developer

**Ratu Qurratul Aini**
Informatics Engineering Student

- 📧 Email: [ratuquratul@gmail.com](mailto:ratuquratul@gmail.com)
- 🔗 LinkedIn: [linkedin.com/in/ratu-qurratul-aini-885b7a2a6](https://www.linkedin.com/in/ratu-qurratul-aini-885b7a2a6/)
