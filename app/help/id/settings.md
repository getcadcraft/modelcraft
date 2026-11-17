---
title: Pengaturan ModelCraft
summary: Pilih gaya tombol yang Anda kenal, buat trackpad mengorbit dan menggeser tanpa tombol kamera, serta aktifkan atau nonaktifkan snap dan tabrakan solid.
keywords: pengaturan, preferensi, kontrol, gaya tombol, keymap, pintasan, blender, trackpad, touchpad, gulir, orbit, cubit, snap, snapping, tabrakan, tumpang tindih, berpotongan, tembus
from: caf77d5b
---

Buka {{ui:Pengaturan}} dengan ikon roda gigi di bilah aplikasi atau {{key:Mod+,}}. Tab pertama, {{ui:ModelCraft}}, berisi pengaturan milik aplikasi ini; {{ui:Umum}} berisi pengaturan yang dipakai bersama oleh setiap aplikasi CadCraft (tema, bilah alat, panel). Pengaturan ModelCraft hanya berlaku di aplikasi ini: Anda mengubahnya di sini, dan peramban ini mengingatnya.

## Kontrol: tombol keyboard dan tombol mouse

Ada dua gaya tombol. Ganti di sini, dengan {{ui:Tombol: Dorong-tarik}} / {{ui:Tombol: Pemodel}} di kanan bawah tampilan, atau di akhir menu {{ui:Lainnya}} pada bilah alat:

- **Gaya dorong-tarik** (awal; huruf dari pemodel dorong-tarik seperti SketchUp): sebuah huruf memilih alat — {{key:L}} garis, {{key:R}} persegi panjang, {{key:P}} dorong/tarik, {{key:M}} pindahkan, {{key:Q}} putar, {{key:S}} skala, {{key:G}} buat komponen. Lihat [Tombol dan aksi mouse](topic:keyboard).
- **Gaya Pemodel** (tombol dari pemodel mesh seperti Blender): pilih dulu, lalu langsung bertindak pada pilihan. {{key:G}} memindahkannya, {{key:R}} memutarnya dan {{key:S}} menskalakannya dari posisi penunjuk — tanpa klik pertama. Saat sedang dipindahkan, {{key:X}}, {{key:Y}} atau {{key:Z}} mengunci sumbu merah, hijau atau biru, angka yang diketik menetapkan jarak (atau derajat, atau faktor), dan klik atau {{key:Enter}} meletakkannya; {{key:Esc}} atau klik kanan mengembalikannya. Setelah itu Anda kembali ke {{ui:Pilih}}.

Gaya tombol sama dengan pilihan gaya menu: gaya tombol Pemodel adalah gaya menu {{ui:Pemodel}}, dan memilih salah satunya juga memilih yang lain. Lihat [Menu, tombol, dan mouse](topic:menus-keys-and-mouse). Daftar lengkap Pemodel ada di [Tombol dan aksi mouse](topic:keyboard#modeler-keys). Tooltip pada bilah alat dan kartu awal mengikuti gaya yang Anda pilih.

## Menggulir: roda mouse atau trackpad

- **Tentukan sendiri** (awal): ModelCraft memantau guliran. Gulir ke samping atau gulir halus, seperti yang dikirim trackpad, akan mengorbit; putaran roda yang utuh akan memperbesar.
- **Roda mouse**: menggulir selalu memperbesar ke arah penunjuk.
- **Trackpad**: geser dengan dua jari untuk mengorbit, tahan {{key:Shift}} lalu geser untuk menggeser, cubit untuk memperbesar. Anda tidak pernah memerlukan tombol {{ui:Orbit}}, {{ui:Geser}} atau {{ui:Zoom}}.

Cubit selalu memperbesar di setiap pilihan. Jika "Tentukan sendiri" salah menebak mouse atau trackpad Anda, pilih yang sesuai dengan perangkat Anda.

:::tip
Dalam gaya Pemodel, Anda juga dapat mengorbit dengan menahan {{key:Alt}} lalu menyeret, dan menggeser dengan {{key:Alt+Shift}} lalu menyeret — praktis pada laptop tanpa tombol tengah.
:::

## Snapping

**Snap ke titik, tepi dan sumbu** (aktif saat awal) menarik penunjuk ke titik ujung, titik tengah, tepi, garis bantu, serta sumbu merah, hijau dan biru — lihat [Inferensi](topic:inference). Matikan saat Anda ingin menempatkan sesuatu secara bebas di dekat geometri lain tanpa melompat. Muka, lantai, dan kunci sumbu tetap bekerja meskipun snap dimatikan.

Tombol {{ui:Snap}} di kanan bawah tampilan melakukan hal yang sama untuk pekerjaan sesi ini (juga disimpan). Dalam gaya Pemodel, {{key:Shift+Tab}} mengalihkannya.

## Solid berhenti saat bersentuhan

**Hentikan solid saat bersentuhan** (aktif saat awal) mencegah dinding yang diseret menembus dinding lain. Dengan {{ui:Pindahkan}} (dan {{key:G}}, serta tempel-lalu-pindahkan dengan {{key:Mod+D}}) pilihan akan bergeser ke solid lain dan berhenti menyentuhnya; dengan {{ui:Dorong/tarik}} sebuah muka berhenti di tempat ia bertemu solid lain. Bertumpu pada sesuatu dan meluncur di sepanjangnya diperbolehkan — hanya masuk ke bagian dalamnya yang dihentikan. Benda yang sudah tumpang tindih saat Anda mulai tetap bisa ditarik terpisah.

Untuk mendorong sesuatu menembus secara sengaja, klik {{ui:Tabrakan}} di kanan bawah (atau hapus pengaturannya), lakukan pemindahan, lalu klik lagi.

:::note
Tabrakan diperiksa untuk pemindahan dan dorong/tarik. {{ui:Putar}} dan {{ui:Skala}} belum memeriksanya, dan geometri lepas yang bersentuhan tetap menyatu seperti sebelumnya: simpan benda yang terpisah dalam [grup](topic:groups-components) agar tetap terpisah.
:::

## Alas printer 3D

Ukuran alas printer Anda: {{ui:Belum diatur}} (awal), 180 × 180 × 180, 220 × 220 × 250, 256 × 256 × 256 atau 300 × 300 × 400 mm. Pilih ukuran yang paling dekat dengan volume cetak printer Anda. [Periksa untuk pencetakan 3D](topic:print-3d) kemudian menyatakan jika model lebih besar dari alas; dengan {{ui:Belum diatur}}, ukuran tidak diperiksa.

## Orbit dan geser

**Orbit mengelilingi apa yang ada di bawah kursor** (aktif saat awal): orbit berputar di sekitar bagian model di bawah penunjuk, dan geser mempertahankan titik itu di bawah penunjuk; di atas ruang kosong keduanya memakai pusat tampilan. Matikan untuk selalu mengorbit di sekitar pusat tampilan. **Kecepatan orbit** dan **Kecepatan geser** berkisar dari 0.25× sampai 3× (1× adalah awal) dan berlaku untuk mouse, trackpad, sentuh, dan tombol panah. Lihat [Orbit, geser, dan zoom](topic:orbit-pan-zoom).

## Indikator sudut

Yang tampil di sudut tampilan 3D: **Kubus tampilan** (awal; kanan atas — klik muka, tepi atau sudut untuk melihat dari sana, seret untuk mengorbit, seret cincin kompasnya untuk memutar model), **Ikon sumbu** (penanda kecil X, Y, Z di kiri bawah yang berputar mengikuti tampilan: X merah, Y hijau, Z biru) atau **Tidak ada**. Lihat [Kubus tampilan](topic:view-cube).
