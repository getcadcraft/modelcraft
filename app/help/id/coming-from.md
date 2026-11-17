---
title: Dari pemodel lain
summary: Bagaimana kebiasaan pemodelan push/pull dipetakan ke ModelCraft, tombol demi tombol, dan perbedaan yang sering mengejutkan.
keywords: beralih, migrasi, akrab, perbedaan, pemodel push pull, skp, pintasan, kebiasaan, bandingkan, kotak pengukuran, outliner, info entitas
from: 74ffd4ac
---

Jika Anda pernah memodelkan di SketchUp, ModelCraft akan terasa familier: ide yang sama tentang muka dan push/pull, huruf alat yang sama, kotak nilai tempat Anda mengetik tanpa mengkliknya, inferensi dengan sumbu merah, hijau, dan biru, grup, komponen, Outliner, Info Entitas, dan scene. Halaman ini mencantumkan apa yang langsung terpetakan dan, yang lebih penting, apa yang tidak.

## Kebiasaan yang terbawa

| Anda sudah terbiasa dengan | Di ModelCraft |
|---|---|
| Tekan Spasi untuk Pilih, L Garis, R Persegi panjang, C Lingkaran | Sama: {{key:Space}}, {{key:L}}, {{key:R}}, {{key:C}} |
| Tekan P Dorong/tarik, M Pindahkan, Q Putar, S Skala, E Penghapus, T Meteran | Sama: {{key:P}}, {{key:M}}, {{key:Q}}, {{key:S}}, {{key:E}}, {{key:T}} |
| Tekan O Orbit, H Geser, Z Zoom, Shift+Z Zoom batas | Sama: {{key:O}}, {{key:H}}, {{key:Z}}, {{key:Shift+Z}} |
| Tekan G untuk membuat komponen | Sama: {{key:G}}. {{key:Shift+G}} membuat grup |
| Ketik ke kotak Pengukuran tanpa mengkliknya | Sama, di kotak nilai di bagian bawah. Tekan {{key:Enter}} |
| Ketik `4m,3m` untuk persegi panjang, `12s` untuk sisi | Sama |
| Ketik `3x` atau `/3` setelah salin Pindahkan | Sama; `*3` juga berfungsi |
| Ketik `[x,y,z]` atau `<dx,dy,dz>` untuk titik atau offset | Sama |
| Ketik angka polos di model inci-arsitektur dan dapatkan inci | Sama |
| Seret-tengah untuk orbit, Shift+seret-tengah untuk geser, roda untuk zoom di kursor | Sama |
| Klik-ganda dengan Dorong/tarik untuk mengulang jarak | Sama |
| Tombol panah untuk mengunci merah, hijau, biru, dan sejajar | Sama: {{key:Right}} merah, {{key:Left}} hijau, {{key:Up}} biru, {{key:Down}} sejajar |
| Tahan Shift untuk mengunci inferensi | Sama |
| Ctrl (Option di Mac) untuk menyalin saat memindahkan | {{key:Ctrl}}, {{key:Mod}} atau {{key:Alt}}, di komputer mana pun |
| Shift untuk mengganti, Ctrl untuk menambah, Shift+Ctrl untuk membuang dari pilihan | Tombol yang sama; di Mac gunakan {{key:Mod}} di tempat tertulis Ctrl |
| Jendela kiri-ke-kanan, silang kanan-ke-kiri | Sama |
| Alat Dimensi untuk memberi label panjang | {{key:D}}, dan lebih: ketik panjang baru ke dalam dimensi dan model menyesuaikan ukurannya. Lihat [Dimensi dan ubah ukuran](topic:dimensions) |
| Klik-ganda muka untuk muka plus tepinya; klik-tiga-kali untuk semua yang terhubung | Sama |
| Klik-ganda grup untuk mengeditnya; Esc untuk menutup | Sama |
| Tarik garis melintasi muka untuk membelahnya; hapus tepi di antara muka sebidang untuk menyambungkannya | Sama |
| Dorong persegi jendela menembus dinding untuk memotongnya | Sama |
| Muka belakang berwarna abu-abu kebiruan; Balik Muka | Warna yang sama; {{ui:Balik muka}} di {{ui:Info entitas}} |
| Scene sebagai tab di atas tampilan, Page Up dan Page Down | Sama, dengan {{ui:Putar}} di panel {{ui:Scene}} |
| Bayangan dari tanggal, waktu, lintang dan bujur, dengan utara di hijau | Sama, di panel {{ui:Gaya}} |

## Perbedaan yang sering mengejutkan

### Menyimpan adalah unduhan

Tidak ada Simpan yang menimpa file yang Anda buka, tidak ada dialog Simpan Sebagai dengan nama, tidak ada simpan otomatis, dan tidak ada file cadangan. {{ui:Simpan}} ({{key:Mod+S}}) mengunduh file `.modelcraft` baru setiap kali, biasanya ke folder unduhan Anda. Simpan sering, dan ganti nama atau pindahkan file sendiri. Lihat [Buka, simpan, impor, dan ekspor](topic:files).

### Ia mengimpor file .skp, tetapi tidak menyimpannya

{{ui:Impor}} membaca file SketchUp dengan pembaca milik ModelCraft sendiri, di halaman: grup, komponen, warna, tekstur pada muka, tag, dan tepi lunak ikut terbawa. Lihat [Format file secara rinci](topic:formats#skp-files). ModelCraft tidak bisa menyimpan `.skp`: untuk kembali, ekspor Collada dari ModelCraft dan impor di SketchUp.

### Tidak ada menu klik-kanan

Seret-kanan untuk menggeser; klik-kanan tidak melakukan apa pun. Perintah yang biasanya ada di menu konteks berada di {{ui:Info entitas}} ({{ui:Balik muka}}, {{ui:Edit}}, {{ui:Urai}}, {{ui:Jadikan unik}}, {{ui:Buat komponen}}) dan di grup {{ui:Atur}} pada bilah alat.

### Satuan ada di bilah status

Tidak ada Info Model atau pilihan templat. Pemilih satuan ada di kanan bawah. Model baru dimulai dalam kaki dan inci di AS dan dalam milimeter di tempat lain, berdasarkan pengaturan bahasa peramban Anda. Desimal selalu memakai titik: `2.5m`, bukan `2,5m`, karena koma selalu memisahkan nilai.

### Cat punya material sendiri

{{ui:Cat}} ({{key:B}}) mengecat warna padat dan material di bagian {{ui:Material}}: bata, sirap, atap, kayu, batu, dan lainnya, digambar oleh ModelCraft. Anda belum bisa memuat gambar sendiri sebagai material; tekstur yang datang bersama file impor tetap disimpan. Lihat [Cat dengan warna dan material](topic:paint).

### Skala seragam, tanpa grip

Skala tidak menampilkan kotak dengan grip. Klik titik yang tetap di tempatnya, yaitu titik referensi, lalu ukuran baru atau faktor yang diketik. Skala selalu merata ke semua arah. Untuk meregang ke satu arah, dorong/tarik atau pindahkan muka, ketik ulang lebar, kedalaman, atau tinggi grup di {{ui:Info entitas}}, atau [ubah ukuran dengan dimensi](topic:dimensions).

### Putar memilih bidangnya dari tempat Anda mengklik

Tidak ada busur derajat yang menempel pada muka saat Anda mengarahkan dengan tombol panah untuk memilih bidang. Klik pusat pada sebuah muka untuk berputar di bidang muka itu, atau di tanah untuk berputar terhadap vertikal. Tombol panah mengorbit tampilan sebelum klik pertama.

### Inferensi dari titik yang Anda lewati

ModelCraft melakukan snap ke arah sumbu dari **titik awal Anda**, dan ke titik, tepi, serta muka di bawah penunjuk. Ia tidak melacak arah dari titik yang hanya Anda arahkan (garis putus-putus inferensi "dari titik"). Untuk sejajar dengan sudut yang jauh, kunci sumbu dengan tombol panah dan arahkan ke sudut itu: titik yang terkunci akan bergeser agar sejajar dengannya. Atau letakkan [panduan](topic:guides-measure).

### Sejajar memakai tepi yang Anda lewati sebelum memulai

Inferensi sejajar dan tegak lurus memakai tepi terakhir yang dilintasi penunjuk **sebelum klik pertama**, bukan tepi yang Anda arahkan saat menggambar. Lihat [Inferensi dan snap](topic:inference#parallel-and-perpendicular).

### Salinan grup saling tertaut

Menyalin grup dengan {{ui:Pindahkan}} membuat penempatan kedua dari grup yang sama, sehingga mengedit satu akan mengubah keduanya, seperti komponen. SketchUp membuat grup independen. Lihat [Pemecahan masalah](topic:troubleshooting#editing-one-group-changed-another).

### Spasi tidak menggeser

{{key:Space}} memilih {{ui:Pilih}}, seperti di SketchUp. Di beberapa aplikasi web lain, menahan Spasi menggeser; di sini tidak. Seret-kanan untuk menggeser.

### Gulir dua jari melakukan zoom

Pada trackpad, atur {{ui:Pengaturan}} › {{ui:ModelCraft}} › Gulir ke Trackpad: dua jari mengorbit, {{key:Shift}} dan dua jari menggeser, cubitan melakukan zoom. Lihat [Orbit, geser, dan zoom](topic:orbit-pan-zoom#on-a-trackpad).

Jika tangan Anda terbiasa dengan tombol Blender dan bukan SketchUp, pilih gaya menu {{ui:Pemodel}}: {{key:G}}, {{key:R}}, dan {{key:S}} bekerja pada pilihan sekaligus, {{key:E}} mengekstrusi (dorong/tarik), {{key:Shift+D}} menduplikasi, dan bilah menu di bagian atas (File, Edit, Tampilan, Pilih, Tambah, Objek, Mesh) menggantikan bilah alat. Jika datang dari SketchUp, gaya {{ui:Dorong-tarik}} memberi bilah menu sendiri di atas huruf alat yang sama. Lihat [Menu, tombol, dan mouse](topic:menus-keys-and-mouse).

### Solid yang didorong saling menembus tidak terpotong

Dorong/tarik memotong melalui muka di belakangnya dalam objek yang sama, tetapi dua solid terpisah yang didorong saling menembus tidak berpotongan. Tidak ada Intersect Faces dan tidak ada Solid Tools.

### Yang belum dibuat

Freehand, Trim, Split, dan Outer Shell, material gambar sendiri, ekstensi, dan alat tata letak untuk lembar belum ada di build ini. [Belum dibuat](topic:not-built-yet) mencantumkan apa yang harus dilakukan sebagai gantinya.

## Pintasan yang tetap dipakai peramban

ModelCraft berjalan di peramban, jadi beberapa pintasan milik peramban, bukan aplikasi. {{key:Mod+N}} membuka jendela peramban (gunakan {{ui:Baru}}), dan {{key:Mod+W}} menutup tab. Jika ada perubahan yang belum disimpan, peramban bertanya sebelum menutup. Lihat [Tombol, mouse, dan trackpad](common:keys#shortcuts-the-browser-keeps).
