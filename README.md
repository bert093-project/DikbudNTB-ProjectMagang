<div align="center">
<h1>Project Magang</h1>
</div>

## Requirements

Pastikan Anda telah menginstal hal-hal berikut pada sistem Anda:

```
Git (2.51.2 atau lebih baru)
Bun (1.3.5 atau lebih baru)
```

## Cara Menjalankan Sistem

1. Clone Repo

```
git clone https://github.com/bert093-project/DikbudNTB-ProjectMagang.git
cd DikbudNTB-ProjectMagang
```

2. Install package/dependency:

```
bun install
```

3. Jalankan development server:

```
bun run dev
```

## Tech Stack
- Next.js
- React.js
- Tailwind CSS
- Typescript
- Bun (Runtime, Package Manager, Test Runner, Bundler, dsb)


## Struktur Folder

```
dikbudntb-projectmagang
├─ src
│  └─ app
│     ├─ globals.css
│     ├─ img
│     │  └─ logo-dikpora.webp
│     ├─ layout.tsx
│     └─ page.tsx
├─ bun.lock
├─ eslint.config.mjs
├─ LICENSE
├─ next.config.ts
├─ package.json
├─ postcss.config.mjs
├─ README.md
└─ tsconfig.json
```

## Referensi
- [Build a User Management App with Next.js](https://supabase.com/docs/guides/getting-started/tutorials/with-nextjs?queryGroups=database-method&database-method=dashboard)
- [Building APIs with Next.js](https://nextjs.org/blog/building-apis-with-nextjs)
- [Use Supabase with Next.js (including query database data from Next.js)](https://nextjs.org/blog/building-apis-with-nextjs)