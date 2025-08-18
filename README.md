# Frontend Website Buku Tamu
Aplikasi frontend website buku tamu dirancang untuk memudahkan pengelolaan data kunjungan tamu secara digital. Aplikasi ini membantu mengoptimalkan proses penerimaan tamu, pencatatan data, hingga pelaporan.

## Fitur Utama
- <strong>Form Biodata</strong>: Halaman pendaftaran tamu untuk mengisi data diri dan tujuan kunjungan.
- <strong>Nomor Antrian Pelayanan Statistik Terpadu</strong>: Mendapatkan nomor antrean khusus untuk layanan statistik.
- <strong>Antrian Kunjungan Dinas</strong>: Antrean khusus tanpa nomor untuk kunjungan dari instansi lain.
- <strong>Cetak Fisik Nomor Antrian</strong>: Opsi untuk mencetak nomor antrean yang didapat.
- <strong>Konfirmasi Kunjungan</strong>: Menampilkan informasi singkat sebagai konfirmasi pendaftaran.
- <strong>Lihat Kunjungan Tamu</strong>: Menampilkan daftar tamu yang sedang mengantre.
- <strong>Lihat Semua Tamu</strong>: Melihat daftar lengkap semua data tamu yang pernah berkunjung.
- <strong>Terima Antrian</strong>: Melayani dan menghapus tamu dari daftar antrean.
- <strong>Hapus Tamu</strong>: Menghapus data tamu dari database.
- <strong>CS Logs</strong>: Mencatat seluruh aktivitas CS untuk audit.
- <strong>Filter Section</strong>: Menyaring data tamu berdasarkan kriteria tertentu.
- <strong>Download / Export Database</strong>: Mengunduh data kunjungan dan tamu.
- <strong>Nomor Antrian Tamu</strong>: Menampilkan nomor antrean tamu yang sedang dilayani.
- <strong>Reset Database (Visit Table)</strong>: Menghapus semua data kunjungan secara manual.
- <strong>Countdown Reset Database</strong>: Menampilkan hitungan mundur sebelum database kunjungan direset otomatis.
- <strong>Error Handlers</strong>: Sistem untuk menangani kesalahan dan memberikan pesan yang jelas.
- <strong>Penghapusan Log Berkala</strong>: Menghapus data log aktivitas secara otomatis untuk menjaga kinerja database.
- <strong>Autentifikasi Token</strong>: Mekanisme keamanan yang memvalidasi akses ke API menggunakan token.

## Teknologi yang Digunakan
![JavaScript](https://img.shields.io/badge/JavaScript-1E293B?style=for-the-badge&logo=javascript&logoColor=FACC15)
![React](https://img.shields.io/badge/React-1E293B?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-1E293B?style=for-the-badge&logo=tailwind-css&logoColor=38BDF8)

## Instalasi dan Penggunaan
### Prasyarat
Sebelum menjalankan proyek ini, pastikan Anda telah menginstal:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [BackEnd-QueuePlatformBPS](https://github.com/ramadhan14123/Backend-QueuePlatformBPS)

### Instalasi
1. Clone repository ini:
   ```bash
   git clone https://github.com/zidankusumafirdaus/FrontEnd-QueuePlatformBPS.git
   ```
2. Masuk ke Direktori Proyek:
   ```bash
   cd FrontEnd-QueuePlatformBPS
   ```
3. Instal dependensi:
   ```bash
   npm install
   ```
4. Jalankan Proyek:
   ```
   a. Untuk pengembangan lokal:
   ```
   ```bash
   npm run dev
   ```
   ```
   b. Untuk build produksi:
   ```
   ```bash
   npm run build
   ```

## Struktur Direktori

```
FrontEnd-QueuePlatformBPS/
│
├── dist/                 # Folder build untuk file hasil build produksi
├── node_modules/         # Folder berisi dependensi proyek
├── public/               # Folder untuk file publik (misalnya favicon, gambar statis, dll.)
├── src/                  # Folder utama kode sumber
│   ├── assets/           # Folder untuk aset seperti gambar, ikon, dll.
│   ├── components/       # Folder untuk komponen React
│   ├── pages/            # Folder untuk halaman React
│   ├── service/          # Folder untuk fungsi yang berinterinteraksi dengan API backend atau layanan eksternal.
│   ├── styles/           # Folder untuk file styling global
│   ├── utils/            # Folder untuk fungsi utilitas
│   └── routes.jsx        # File yang mendefinisikan rute-rute navigasi aplikasi
├── .env.production       # Environtment Production (URL BackEnd)
├── .eslintrc.cjs         # Konfigurasi ESLint
├── .gitignore            # File untuk menentukan file/folder yang diabaikan oleh Git
├── index.html            # File HTML utama
├── package-lock.json     # File penguncian dependensi
├── package.json          # File yang berisi metadata proyek dan daftar dependensi
├── pnpm-lock.yaml        # File penguncian dependensi untuk pnpm
├── pnpm-workspace.yaml   # Konfigurasi untuk pnpm workspace
├── postcss.config.js     # Konfigurasi untuk PostCSS
├── README.md             # Dokumentasi proyek
├── tailwind.config.js    # Konfigurasi untuk Tailwind CSS
└── vite.config.js        # Konfigurasi untuk Vite (build tool)
```
