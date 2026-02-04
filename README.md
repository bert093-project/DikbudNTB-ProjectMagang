<div align="center">
<h1>Project Magang</h1>
</div>

## Requirements

Pastikan Anda telah menginstal hal-hal berikut pada sistem Anda:

```
Git (2.51.2 atau lebih baru)
Bun (1.3.5 atau lebih baru)
```

## Cara Menjalankan Project

1. Clone Repo

```
git clone https://github.com/bert093-project/DikbudNTB-ProjectMagang.git
cd DikbudNTB-ProjectMagang
```

2. Install package/dependency:

```
bun install
```

3. Setup Supabase Environment Variable:

```
buat file `.env.local` lalu isi seperti ini:

NEXT_PUBLIC_SUPABASE_URL=SUPABASE_URL_ANDA
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=SUPABASE_PUBLISHABLE_DEFAULT_KEY_ANDA
```

4. Jalankan development server:

```
bun run dev
```

> [!IMPORTANT]
> Pastikan sudah membuat RLS Security pada Database atau table anda sebelum menjalankan development server.

<details>
<summary>Klik disini untuk lebih detailnya</summary>

### 1. Buat RLS Policy terlebih dahulu
![alt text](chrome_rsoZtHchZz.png)

### 2. Pilih policy command **Select** dengan target roles all (default) 
![alt text](chrome_3XvnhJSp6A.png)

> [!NOTE]
> Anda dapat copy-paste policy command dari gambar tersebut di bawah ini:

```php
alter policy "Enable read access for all users"
on "public"."dikbud"
to public
using (
    true
);
```

</details>

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

## Todo
- User tidak bisa menggunakan