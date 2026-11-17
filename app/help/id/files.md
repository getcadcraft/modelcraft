---
title: Buka, simpan, impor, dan ekspor
summary: File ModelCraft, apa yang bisa Anda bawa masuk dan kirim keluar, ke mana file disimpan, serta apa yang berubah saat offline dan antar peramban.
keywords: buka, simpan, impor, ekspor, file, 3dm, skp, pulihkan, simpan otomatis, terbaru, desktop, buka di 3D, serah terima, unduh, file modelcraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, format, offline, simpan sebagai
from: 3f09ab72
---

ModelCraft membaca dan menulis file di komputer Anda. Tidak ada yang diunggah: file yang Anda buka dibaca di dalam peramban Anda, dan file yang Anda simpan menjadi unduhan. Lihat [Lokasi file Anda](common:your-files).

## Ringkasan format

| Format | Buka | Impor | Ekspor | Untuk apa |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | ya | tidak | {{ui:Save}} | File kerja Anda. Menyimpan semuanya. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | ya | ya | {{ui:Save as}}, {{ui:Export}} | Program rendering dan perakitan adegan. USD milik ModelCraft menyimpan semuanya. Lihat [Simpan, buka, dan ekspor USD](topic:usd). |
| SketchUp (`.skp`) | tidak | ya | tidak | Membawa model dari SketchUp. Menyimpan grup, komponen, warna, tekstur pada muka, tag, dan tepi lunak. Lihat [Impor model SKP](topic:import-sketchup-files). |
| Collada (`.dae`) | tidak | ya | ya | Bertukar model dengan pemodel 3D lain. Menyimpan grup, komponen, dan warna. |
| OBJ (`.obj`) | tidak | ya | ya | Program rendering dan visualisasi. |
| glTF (`.glb`, `.gltf`) | tidak | ya | hanya `.glb` | Penampil web, mesin game, AR. |
| STL (`.stl`) | tidak | ya | ya | Pencetakan 3D (dalam milimeter). |
| PLY (`.ply`) | tidak | ya | ya | Mesh dengan warna: hasil pemindaian, pencetakan warna. |
| FBX (`.fbx`) | tidak | ya | tidak | Model dari program animasi dan game (FBX 2011 ke atas). |
| Alembic (`.abc`) | tidak | ya | tidak | Cache geometri, pada sampel pertamanya. |
| STEP (`.step`, `.stp`) | tidak | ya | tidak | Part dari pemodel part dan pemasok, sebagai mesh tertutup pada ukuran sebenarnya. Lihat [Format file](topic:formats). |
| `.3dm` | tidak | ya | tidak | Model NURBS: polisurface, mesh, kurva, blok, dan layer, sebagai mesh, tepi, komponen, dan tag. Lihat [Impor model .3dm](topic:import-3dm-files). |
| 3MF (`.3mf`) | tidak | tidak | ya | Pencetakan 3D, dengan warna (dalam milimeter). Dari {{ui:Check for 3D printing (STL or 3MF)…}}: lihat [Siapkan model untuk pencetakan 3D](topic:print-3d). |
| IFC (`.ifc`) | tidak | tidak | ya | Program BIM, dan BimCraft. |
| DWG (`.dwg`) | tidak | ya | ya | Denah situs atau denah lantai untuk dimodelkan; mengirim model ke program CAD. |
| DXF (`.dxf`) | tidak | ya | ya | Sama, untuk program CAD apa pun. |

[Format file secara rinci](topic:formats) mencantumkan apa yang disimpan dan ditinggalkan oleh setiap format.

## File ModelCraft

File `.modelcraft` menyimpan seluruh model: geometri, grup, komponen, panduan, adegan, satuan, serta kamera dan gaya yang Anda gunakan saat menyimpan. File itu tidak menyimpan riwayat urungkan.

### Buka model

1. Klik {{ui:Open}} di grup {{ui:File}}, atau tekan {{key:Mod+O}}.
2. Jika model di layar memiliki perubahan yang belum disimpan, ModelCraft bertanya: "Model ini memiliki perubahan yang belum disimpan. Simpan salinan dulu?" Pilih {{ui:Save a copy}}, {{ui:Discard changes}} atau {{ui:Cancel}}.
3. Pilih file `.modelcraft`.

Model dibuka dalam satuan saat disimpan, dengan kamera yang digunakan saat disimpan. Anda juga dapat menjatuhkan file `.modelcraft` ke tampilan 3D, atau mengklik salah satu di daftar file terbaru pada kartu awal (peramban yang dapat membuka ulang file, dan aplikasi desktop).

:::desktop
Di aplikasi desktop, klik ganda file `.modelcraft` akan membukanya di ModelCraft, dan begitu pula **Buka dengan** pada file Collada, OBJ, glTF, DWG, atau DXF (file itu diimpor ke model baru).
:::

### Simpan model

Klik {{ui:Save}} atau tekan {{key:Mod+S}}. Peramban mengunduh `<name>.modelcraft`, dengan `<name>` adalah nama file yang Anda buka, atau "Untitled" untuk model baru.

:::desktop
Di aplikasi desktop, {{ui:Save}} menulis file yang Anda buka langsung di tempatnya. Model baru akan meminta Anda memilih lokasi penyimpanan.
:::

- {{ui:Save as}} ({{key:Mod+Shift+S}}) menyimpan salinan sebagai file `.modelcraft` atau sebagai [USD](topic:usd); jika peramban mendukung, ia meminta nama dan lokasi. Jika tidak, ganti nama file yang diunduh: penyimpanan berikutnya, setelah Anda membuka file yang sudah diganti namanya, memakai nama baru.
- Setiap penyimpanan adalah unduhan baru. Bergantung pada pengaturan peramban, unduhan langsung masuk ke folder unduhan atau bertanya lokasi penyimpanan. Jika file dengan nama itu sudah ada, sebagian besar peramban menambahkan angka, seperti `Untitled (1).modelcraft`.

:::chromium
Untuk memilih folder setiap kali, buka pengaturan peramban, cari "downloads", lalu aktifkan "Ask where to save each file before downloading".
:::

:::firefox
Untuk memilih folder setiap kali, buka **Pengaturan**, lalu **Umum**, dan di bagian "Downloads" pilih "Always ask you where to save files".
:::

:::safari
Untuk mengubah lokasi unduhan, buka **Safari**, lalu **Pengaturan**, lalu **Umum**, dan atur "File download location".
:::

### Mulai model baru

Klik {{ui:New}}. Jika ada perubahan yang belum disimpan, ModelCraft bertanya lebih dulu. Model baru dimulai kosong, dalam satuan lokal Anda (kaki dan inci di Amerika Serikat, milimeter di tempat lain), tanpa adegan.

### Jika peramban ditutup sebelum Anda menyimpan

ModelCraft menyimpan salinan pekerjaan yang belum disimpan di peramban Anda beberapa detik setelah setiap perubahan. Salinan ditulis di latar belakang, sehingga model besar tidak menghambat Anda. Jika tab atau peramban ditutup sebelum Anda menyimpan, saat Anda membuka ModelCraft berikutnya, aplikasi bertanya "Pulihkan pekerjaan Anda?". Memulihkan akan membuka model seperti keadaan terakhirnya, yang belum tersimpan sebagai file: simpan untuk menyimpannya. Lihat [Pulihkan pekerjaan Anda](common:recover).

### Dari CadCraft: Buka di ModelCraft

Di aplikasi gambar CadCraft, buka **Tampilan**, lalu **Lainnya**, lalu **Buka di ModelCraft** untuk memindahkan gambar yang terbuka ke ModelCraft di tab baru, sebagai DWG. Gambar masuk seperti DWG yang diimpor: garis di atas tanah, dalam sebuah grup, siap untuk dimodelkan. Tidak ada yang diunggah; file melewati penyimpanan peramban Anda sendiri.

## Impor

Mengimpor menambahkan file ke model yang sedang terbuka; tidak menggantikannya.

1. Klik {{ui:Import}} di grup {{ui:File}}, atau jatuhkan file ke tampilan 3D.
2. Pilih file SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG, atau DXF.

   File masuk sebagai **satu grup**, terpilih, dan tampilan melakukan zoom untuk menampilkannya. Bilah status menyebutkan apa yang masuk, dan mencantumkan apa pun yang tidak dapat diimpor, seperti "Tidak diimpor: 2 tekstur".

3. Untuk mengerjakan geometrinya secara langsung, klik ganda grup untuk menyunting di dalamnya, atau klik {{ui:Explode}}.

Hal yang perlu diketahui:

- **Ukuran dan arah atas:** file Collada menyebutkan satuannya dan sumbu mana yang ke atas, dan ModelCraft mengonversinya. glTF selalu dalam meter. File OBJ tidak membawa satuan: ModelCraft membacanya sebagai meter, dengan Y ke atas. Jika OBJ masuk 1000 kali terlalu besar atau terlalu kecil, gunakan [Skala](topic:rotate-scale) dengan faktor seperti `0.001` atau `1000`.
- **DWG dan DXF** masuk sebagai garis (tepi) di atas tanah, bukan sebagai muka. Jika gambar tidak menyebutkan satuannya, sebuah dialog berjudul "Satuan gambar" menanyakan apa arti satu satuan gambar. Lihat [Model di denah situs](topic:site-plan).
- **Batas:** file lebih dari 300 MB ditolak untuk diimpor, dan lebih dari 200 MB untuk dibuka. File dengan lebih dari 2 juta verteks atau muka ditolak karena terlalu besar. OBJ lebih dari 64 MB ditolak sebelum dibaca. File teks (Collada, OBJ, STL ASCII, teks USD) dibaca sedikit demi sedikit, sekitar 4 MB, sehingga tidak ada satu blok teks yang menampung seluruh file; OBJ 16 MB memakai sekitar 0.5 GB memori saat dibuka dalam pengujian kami.

## Ekspor

1. Klik {{ui:Export}} di grup {{ui:File}}.
2. Pilih format: {{ui:glTF binary (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL for printing (.stl, millimeters)}}, {{ui:PLY with colours (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC for BimCraft (.ifc)}}, {{ui:DWG for CAD (.dwg, 2004)}} atau {{ui:DXF for CAD (.dxf, R12)}}.

Peramban mengunduh file, dinamai seperti model. Seluruh model diekspor, bukan hanya pilihan. File glTF, Collada, dan OBJ ditulis di latar belakang, sehingga ModelCraft tetap bekerja saat model besar sedang diekspor; unduhan dimulai saat file siap. Model kosong tidak diekspor: "Model kosong: gambar sesuatu dulu." Lihat [Ekspor model untuk program lain](topic:export-model).

## Online dan offline

Semua di ModelCraft berjalan di komputer Anda, jadi memodelkan, membuka, menyimpan, mengimpor, dan mengekspor semuanya berfungsi tanpa koneksi setelah aplikasi dimuat.

Untuk membuka ModelCraft tanpa koneksi sama sekali, simpan untuk penggunaan offline saat Anda online:

1. Klik {{ui:Save for offline}} di bilah aplikasi di bagian atas.
2. Tombol menghitung naik ("Menyimpan 40 dari 212") selama menyimpan. ModelCraft menyimpan file miliknya sendiri (termasuk pembaca DWG-nya), bantuan ini, dan pustaka 3D, sehingga prosesnya bisa memakan waktu.
3. Saat tombol menampilkan {{ui:Offline ready}}, ModelCraft dibuka dari alamat yang sama tanpa koneksi, dan impor DWG juga berfungsi offline.

Klik {{ui:Offline ready}} nanti untuk {{ui:Save again (get the newest version)}} atau {{ui:Remove the offline copy}}. Jika tombol menampilkan {{ui:Could not save}}, beberapa file tidak terunduh: periksa koneksi dan klik lagi untuk mencoba ulang. {{ui:Offline not available}} berarti jendela peramban ini tidak dapat menyimpan salinan (jendela privat dan sebagian komputer terkelola). Lihat [Bekerja offline](common:offline).

Penyimpanan cloud belum tersedia. Setiap model tersimpan di tempat Anda menyimpannya.

:::offline
Anda sedang offline. Anda tetap dapat memodelkan dan menyimpan. Kecuali bilah aplikasi menampilkan {{ui:Offline ready}}, jangan muat ulang tab ini sampai Anda kembali online.
:::

## Aplikasi desktop

:::desktop
Anda menggunakan ModelCraft di CadCraft Studio, aplikasi desktop dengan kedelapan aplikasinya. File dibuka dan disimpan di lokasi yang Anda pilih.
:::

:::web
ModelCraft berjalan di peramban pada Mac, Windows, dan Linux, serta di CadCraft Studio, aplikasi desktop dengan kedelapan aplikasinya dalam satu instalasi, dari getcadcraft.com/download.
:::
