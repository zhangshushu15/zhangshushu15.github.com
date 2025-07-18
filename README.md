# Personal Website

This repository contains the source code for a simple personal website built with **Next.js** and **Tailwind CSS**. The site includes pages for About and Contact and demonstrates how to structure a small project with reusable React components.

## Getting Started

1. Install dependencies (requires Node.js and npm):
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   npm start
   ```

## Project Structure

- `pages/` – application pages (`index.tsx`, `about.tsx`, `contact.tsx`)
- `components/` – reusable React components (Header and Footer)
- `styles/` – global styles powered by Tailwind
- `posts/` – Markdown files that power the blog system

The blog is available under `/blog` and new posts can be added by placing
Markdown files in the `posts` directory with front matter fields `title` and
`date`.

Feel free to customize the content under `pages/index.tsx` to suit your needs.
