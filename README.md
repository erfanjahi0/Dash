# Project Progress Website

A mobile-friendly React + Vite project progress website with a visual admin panel.

## Features

- Public project progress page
- Visual admin panel
- Editable title, subtitle, project description, notice, dates, status, progress, steps, updates, and colors
- White + green default theme
- Mobile-friendly layout
- Uses localStorage for demo saving
- No lucide-react dependency; icons are inline SVGs

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, usually:

```text
http://localhost:5173
```

## Build for hosting

```bash
npm run build
```

The production files will be created in the `dist` folder.

## Free hosting settings

For Cloudflare Pages or similar static hosting:

```text
Build command: npm run build
Output directory: dist
Framework preset: Vite
```

## Important

This version saves admin changes only in the browser using `localStorage`.
For a real public website where everyone sees your saved changes, connect the admin panel to Supabase Auth and Supabase Database later.
