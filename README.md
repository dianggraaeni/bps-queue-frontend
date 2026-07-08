# BPS Queue Frontend

Antarmuka web untuk sistem antrian dan buku tamu digital Badan Pusat Statistik (BPS) Sidoarjo. Aplikasi ini dibangun menggunakan React.js dan berfungsi sebagai sisi klien dari platform yang mengelola pendaftaran tamu, nomor antrian, dan panel administrasi Customer Service (CS).

> Repository ini merupakan bagian dari satu sistem yang lebih besar. Pastikan [bps-queue-backend](https://github.com/dianggraaeni/bps-queue-backend) juga sudah berjalan sebelum menjalankan aplikasi ini.

---

## Teknologi yang Digunakan

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite_7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-0F172A?style=for-the-badge&logo=tailwind-css&logoColor=38BDF8)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

| Dependensi | Versi | Fungsi |
|---|---|---|
| React | 19 | Library antarmuka utama |
| Vite | 7 | Build tool dan dev server |
| Tailwind CSS | 3 | Framework styling |
| Axios | 1.x | HTTP client untuk pemanggilan API |
| TanStack Query | 5 | Manajemen state data server (caching & fetching) |
| React Router DOM | 7 | Navigasi antar halaman |
| React Toastify | 11 | Notifikasi toast |
| Lucide React | 0.5x | Library ikon |
| jsPDF + html2canvas | - | Cetak/ekspor nomor antrian ke PDF |

---

## Prasyarat

Pastikan berikut sudah terinstall di komputer sebelum memulai:

- [Node.js](https://nodejs.org/) versi 18 ke atas
- [npm](https://www.npmjs.com/) (sudah tersedia bersama Node.js)
- [Git](https://git-scm.com/)
- Backend (`bps-queue-backend`) sudah berjalan di `http://localhost:5001`

---

## Instalasi dan Menjalankan

### 1. Clone Repository

```bash
git clone https://github.com/dianggraaeni/bps-queue-frontend.git
cd bps-queue-frontend
```

### 2. Install Dependensi

```bash
npm install
```

### 3. Jalankan untuk Development

```bash
npm run dev
```

Server development akan berjalan di:
```
http://localhost:5173
```

Semua permintaan ke `/api` akan secara otomatis diteruskan (proxy) ke backend di `http://127.0.0.1:5001` — tidak diperlukan konfigurasi tambahan untuk development lokal.

### 4. Build untuk Produksi (Opsional)

```bash
npm run build
```

Hasil build akan tersimpan di folder `dist/`. Untuk mempratinjau hasil build:

```bash
npm run preview
```

---

## Struktur Direktori

```
bps-queue-frontend/
├── public/                   # Aset statis (favicon, dll.)
├── src/
│   ├── assets/               # Gambar, ikon, dan aset lainnya
│   ├── components/           # Komponen UI yang dapat digunakan ulang
│   │   ├── auth/             # Komponen autentikasi (ProtectedRoute)
│   │   ├── buttons/          # Komponen tombol
│   │   ├── core/             # Komponen inti (countdown, loading overlay)
│   │   ├── export/           # Tombol dan komponen ekspor
│   │   ├── guest/            # Komponen formulir tamu
│   │   ├── layout/           # Sidebar, header, layout utama
│   │   ├── modals/           # Dialog konfirmasi (reset, hapus, dll.)
│   │   └── tables/           # Tabel data (kunjungan, tamu, log CS)
│   ├── pages/
│   │   ├── cs/               # Halaman untuk Admin/Customer Service
│   │   │   ├── Kunjungan.jsx     # Daftar kunjungan aktif
│   │   │   ├── Tamu.jsx          # Daftar biodata tamu
│   │   │   ├── Export.jsx        # Laci arsip laporan mingguan
│   │   │   ├── CSLogs.jsx        # Log aktivitas admin
│   │   │   ├── Antrian.jsx       # Layar antrian untuk monitor TV
│   │   │   └── LoginPage.jsx     # Halaman login
│   │   ├── guest/            # Halaman untuk Tamu
│   │   │   ├── GuestPage.jsx         # Formulir pendaftaran
│   │   │   ├── QueueNumber.jsx       # Tampilan nomor antrian
│   │   │   ├── QueueKunjunganDinas.jsx  # Konfirmasi kunjungan dinas
│   │   │   └── QueueKonfirm.jsx      # Halaman konfirmasi pendaftaran
│   │   ├── home/             # Halaman beranda tamu
│   │   └── error/            # Halaman error (403, 404, 405, 500)
│   ├── service/
│   │   └── api/api.js        # Definisi seluruh fungsi pemanggilan API
│   ├── styles/               # File CSS global
│   ├── utils/                # Fungsi utilitas (auth, countdown, error handler)
│   └── routes.jsx            # Peta rute seluruh halaman aplikasi
├── index.html                # HTML utama
├── vite.config.js            # Konfigurasi Vite dan proxy API
├── tailwind.config.js        # Konfigurasi Tailwind CSS
├── package.json              # Metadata proyek dan dependensi
└── .gitignore
```

---

## Peta Halaman (Routing)

### Halaman Tamu (Publik)

| URL | Halaman | Keterangan |
|---|---|---|
| `/BPS-BukuTamu` | Beranda | Halaman selamat datang, pilihan jenis kunjungan |
| `/Form-Biodata` | Formulir Pendaftaran | Pengisian biodata dan tujuan kunjungan |
| `/Nomor-Antrian` | Nomor Antrian | Tampilan nomor antrian Pelayanan Statistik Terpadu |
| `/queue-kunjungan-dinas` | Kunjungan Dinas | Konfirmasi untuk tamu kunjungan dinas |
| `/queue-konfirm` | Konfirmasi | Halaman konfirmasi setelah pendaftaran |

### Halaman Admin/CS (Memerlukan Login)

| URL | Halaman | Keterangan |
|---|---|---|
| `/login-BukuTamu` | Login | Halaman autentikasi Admin/CS |
| `/visit-guest` | Kunjungan | Daftar dan manajemen kunjungan aktif |
| `/all-guests` | Tamu | Daftar biodata seluruh tamu |
| `/weekly-exports` | Export | Arsip laporan Excel mingguan |
| `/cslogs-BukuTamu` | Log CS | Catatan audit aktivitas admin |
| `/antrian-tamu` | Antrian | Layar antrian untuk diproyeksikan ke monitor |

---

## Konfigurasi Proxy API

Konfigurasi proxy didefinisikan di `vite.config.js`. Semua permintaan dengan awalan `/api` akan diteruskan ke server backend secara otomatis selama development:

```js
// vite.config.js
server: {
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:5001',
      changeOrigin: true,
      secure: false,
    },
  },
},
```

Untuk mengubah port backend, cukup ubah nilai `target` pada file ini.

---

## Sistem Autentikasi

Halaman admin dilindungi menggunakan **JWT (JSON Web Token)**. Alur autentikasi:

1. Admin login melalui `/login-BukuTamu`.
2. Token JWT disimpan di `localStorage` browser.
3. Setiap permintaan API ke endpoint yang dilindungi secara otomatis menyertakan token melalui Axios interceptor.
4. Jika token tidak valid atau kadaluarsa, pengguna diarahkan kembali ke halaman login.

---

## Scripts yang Tersedia

| Perintah | Fungsi |
|---|---|
| `npm run dev` | Menjalankan server development dengan hot-reload |
| `npm run build` | Membuat bundle produksi di folder `dist/` |
| `npm run preview` | Mempratinjau hasil build produksi secara lokal |
| `npm run lint` | Menjalankan ESLint untuk memeriksa kualitas kode |

---

## Hubungan dengan Repository Backend

Aplikasi ini sepenuhnya bergantung pada REST API yang disediakan oleh repository backend. Pastikan backend berjalan terlebih dahulu sebelum menjalankan frontend.

| Komponen | Repository |
|---|---|
| Frontend (repo ini) | `bps-queue-frontend` |
| Backend | [`bps-queue-backend`](https://github.com/dianggraaeni/bps-queue-backend) |
