---
title: Buka, simpan, impor, dan ekspor
summary: File ModelCraft, apa yang dapat dimasukkan dan dikirim keluar, ke mana file pergi, dan apa yang berubah saat offline serta antarperamban.
keywords: buka, simpan, impor, ekspor, file, 3dm, skp, pulihkan, simpan otomatis, terbaru, desktop, buka di 3d, serah terima, unduh, file modelcraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, format, offline, simpan sebagai
from: 0b4896d1
---

ModelCraft membaca dan menulis file di komputer Anda. Tidak ada yang diunggah: file yang Anda buka dibaca di dalam peramban Anda, dan file yang Anda simpan adalah unduhan. Lihat [Ke mana file Anda pergi](common:your-files).

## Format sekilas

| Format | Buka | Impor | Ekspor | Gunanya |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | ya | tidak | {{ui:Simpan}} | File kerja Anda. Menyimpan semuanya. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | ya | ya | {{ui:Simpan sebagai}}, {{ui:Ekspor}} | Program render dan perakitan scene. USD milik ModelCraft sendiri menyimpan semuanya. Lihat [Simpan, buka, dan ekspor USD](topic:usd). |
| SketchUp (`.skp`) | tidak | ya | tidak | Memasukkan model dari SketchUp. Mempertahankan grup, komponen, warna, tekstur pada muka, tag, dan tepi lunak. Lihat [Masukkan model SKP](topic:import-sketchup-files). |
| Collada (`.dae`) | tidak | ya | ya | Bertukar model dengan pemodel 3D lain. Mempertahankan grup, komponen, dan warna. |
| OBJ (`.obj`) | tidak | ya | ya | Program render dan visualisasi. |
| glTF (`.glb`, `.gltf`) | tidak | ya | hanya `.glb` | Penampil web, mesin game, AR. |
| STL (`.stl`) | tidak | ya | ya | Pencetakan 3D (dalam milimeter). |
| PLY (`.ply`) | tidak | ya | ya | Mesh berwarna: hasil pindai, pencetakan berwarna. |
| FBX (`.fbx`) | tidak | ya | tidak | Model dari program animasi dan game (FBX 2011 dan yang lebih baru). |
| Alembic (`.abc`) | tidak | ya | tidak | Cache geometri, pada sampel pertamanya. |
| STEP (`.step`, `.stp`) | tidak | ya | tidak | Part dari pemodel part dan pemasok, sebagai mesh tertutup pada ukuran sebenarnya. Lihat [Format file](topic:formats). |
| `.3dm` | tidak | ya | tidak | Model NURBS: polipermukaan, mesh, kurva, blok, dan layer, sebagai mesh, tepi, komponen, dan tag. Lihat [Masukkan model .3dm](topic:import-3dm-files). |
| 3MF (`.3mf`) | tidak | tidak | ya | Pencetakan 3D, dengan warna (dalam milimeter). Dari {{ui:Periksa untuk pencetakan 3D (STL atau 3MF)…}}: lihat [Siapkan model untuk pencetakan 3D](topic:print-3d). |
| IFC (`.ifc`) | tidak | tidak | ya | Program BIM, dan BimCraft. |
| DWG (`.dwg`) | tidak | ya | ya | Denah tapak atau denah lantai untuk dimodelkan di atasnya; mengirim model ke program CAD. |
| DXF (`.dxf`) | tidak | ya | ya | Sama, untuk program CAD apa pun. |

[Format file secara rinci](topic:formats) mendaftar persis apa yang dipertahankan dan dibuang setiap format.

## File ModelCraft

File `.modelcraft` menyimpan seluruh model: geometri, grup, komponen, garis bantu, scene, satuan, serta kamera dan gaya yang Anda pakai saat menyimpan. File ini tidak menyimpan riwayat urungkan.

### Buka model

1. Klik {{ui:Buka}} di grup {{ui:File}}, atau tekan {{key:Mod+O}}.
2. Jika model di layar punya perubahan yang belum disimpan, ModelCraft bertanya: "Model ini memiliki perubahan yang belum disimpan. Simpan salinan terlebih dahulu?" Pilih {{ui:Simpan salinan}}, {{ui:Buang perubahan}} atau {{ui:Batal}}.
3. Pilih file `.modelcraft`.

Model terbuka dalam satuan saat ia disimpan, dengan kamera saat ia disimpan. Anda juga dapat menjatuhkan file `.modelcraft` ke tampilan 3D, atau mengklik salah satunya di daftar file terbaru pada kartu awal (peramban yang dapat membuka kembali file, dan aplikasi desktop).

:::desktop
Di aplikasi desktop, klik dua kali file `.modelcraft` membukanya di ModelCraft, begitu pula **Buka dengan** pada file Collada, OBJ, glTF, DWG atau DXF (file itu diimpor ke model baru).
:::

### Simpan model

Klik {{ui:Simpan}} atau tekan {{key:Mod+S}}. Peramban mengunduh `<name>.modelcraft`, dengan nama file yang Anda buka, atau "Untitled" untuk model baru.

:::desktop
Di aplikasi desktop, {{ui:Simpan}} menulis file yang Anda buka di tempatnya. Model baru menanyakan tempat menyimpannya.
:::

- {{ui:Simpan sebagai}} ({{key:Mod+Shift+S}}) menyimpan salinan sebagai file `.modelcraft` atau sebagai [USD](topic:usd); jika peramban mampu, ia menanyakan nama dan tempatnya. Jika tidak, ganti nama file yang diunduh: penyimpanan berikutnya setelah Anda membuka file yang diganti namanya memakai nama baru.
- Setiap penyimpanan adalah unduhan baru. Bergantung pada pengaturan peramban, file langsung masuk ke folder unduhan Anda atau menanyakan tempat menyimpan. Jika file dengan nama itu sudah ada, sebagian besar peramban menambahkan angka, seperti `Untitled (1).modelcraft`.

:::chromium
Untuk memilih folder setiap kali, buka pengaturan peramban, cari "unduhan" dan nyalakan "Tanyakan lokasi penyimpanan setiap file sebelum mengunduh".
:::

:::firefox
Untuk memilih folder setiap kali, buka **Pengaturan**, lalu **Umum**, dan di bawah "Unduhan" pilih "Selalu tanya Anda tempat menyimpan file".
:::

:::safari
Untuk mengubah tempat unduhan, buka **Safari**, lalu **Pengaturan**, lalu **Umum**, dan atur "Lokasi unduhan file".
:::

### Mulai model baru

Klik {{ui:Baru}}. Jika ada perubahan yang belum disimpan, ModelCraft bertanya lebih dulu. Model baru dimulai kosong, dalam satuan locale Anda (kaki dan inci di Amerika Serikat, milimeter di tempat lain), tanpa scene.

### Jika peramban tertutup sebelum Anda menyimpan

ModelCraft menyimpan salinan pekerjaan yang belum disimpan di peramban Anda beberapa detik setelah setiap perubahan. Jika tab atau peramban tertutup sebelum Anda menyimpan, saat Anda membuka ModelCraft berikutnya ia bertanya "Pulihkan pekerjaan Anda?". Memulihkan membuka model seperti semula, belum tersimpan ke file: simpan untuk mempertahankannya. Lihat [Pulihkan pekerjaan Anda](common:recover).

### Dari CadCraft: Buka di ModelCraft

Di aplikasi gambar CadCraft, **Tampilan**, lalu **Lainnya**, lalu **Buka di ModelCraft** menyerahkan gambar yang terbuka ke ModelCraft di tab baru, sebagai DWG. Gambar tiba seperti DWG yang diimpor: garis di tanah, dalam satu grup, siap dimodelkan di atasnya. Tidak ada yang diunggah; file melewati penyimpanan peramban Anda sendiri.

## Impor

Mengimpor menambahkan file ke model yang sedang Anda buka; ia tidak menggantikannya.

1. Klik {{ui:Impor}} di grup {{ui:File}}, atau jatuhkan file di tampilan 3D.
2. Pilih file SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG atau DXF.

   File tiba sebagai **satu grup**, terpilih, dan tampilan di-zoom untuk menampilkannya. Bilah status menyebutkan apa yang masuk, dan mendaftar apa pun yang tidak dapat diimpor, seperti "Tidak diimpor: 2 texture".

3. Untuk mengerjakan geometrinya langsung, klik dua kali grup untuk mengedit di dalamnya, atau klik {{ui:Urai}}.

Beberapa hal yang perlu diketahui:

- **Ukuran dan arah atas:** file Collada menyebutkan satuan dan sumbu mana yang ke atas, dan ModelCraft mengonversinya. glTF selalu dalam meter. File OBJ tidak membawa satuan: ModelCraft membacanya sebagai meter, dengan Y ke atas. Jika OBJ masuk 1000 kali terlalu besar atau terlalu kecil, pakai [Skala](topic:rotate-scale) dengan faktor seperti `0.001` atau `1000`.
- **DWG dan DXF** masuk sebagai garis (tepi) di tanah, bukan sebagai muka. Jika gambar tidak menyebutkan satuannya, dialog berjudul "Satuan gambar" menanyakan berapa satu satuan gambar. Lihat [Memodelkan di atas denah tapak](topic:site-plan).
- **Batas:** file di atas 300 MB ditolak untuk impor, dan di atas 200 MB untuk dibuka. File dengan lebih dari 2 juta verteks atau muka ditolak karena terlalu besar.

## Ekspor

1. Klik {{ui:Ekspor}} di grup {{ui:File}}.
2. Pilih format: {{ui:glTF biner (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL untuk pencetakan (.stl, milimeter)}}, {{ui:PLY dengan warna (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC untuk BimCraft (.ifc)}}, {{ui:DWG untuk CAD (.dwg, 2004)}} atau {{ui:DXF untuk CAD (.dxf, R12)}}.

Peramban mengunduh file, dinamai seperti model. Seluruh model diekspor, bukan hanya pilihan. Model kosong tidak diekspor: "Model kosong: gambar sesuatu terlebih dahulu." Lihat [Ekspor model untuk program lain](topic:export-model).

## Online dan offline

Semua di ModelCraft berjalan di komputer Anda, sehingga memodelkan, membuka, menyimpan, mengimpor, dan mengekspor semuanya berfungsi tanpa koneksi setelah aplikasi termuat.

Untuk membuka ModelCraft tanpa koneksi sama sekali, simpan untuk penggunaan offline selagi Anda online:

1. Klik {{ui:Simpan untuk offline}} di bilah aplikasi di atas.
2. Tombol menghitung naik ("Menyimpan 40 dari 212") selama menyimpan. ModelCraft menyimpan file miliknya sendiri (termasuk pembaca DWG-nya), bantuan ini, dan pustaka 3D, sehingga dapat memakan waktu.
3. Saat tombol berbunyi {{ui:Siap offline}}, ModelCraft terbuka dari alamat yang sama tanpa koneksi, dan impor DWG juga berfungsi offline.

Klik {{ui:Siap offline}} nanti untuk {{ui:Simpan lagi (ambil versi terbaru)}} atau {{ui:Hapus salinan offline}}. Jika tombol berbunyi {{ui:Tidak dapat menyimpan}}, sebagian file tidak terunduh: periksa koneksi dan klik untuk mencoba lagi. {{ui:Offline tidak tersedia}} berarti jendela peramban ini tidak dapat menyimpan salinan (jendela pribadi dan beberapa komputer yang dikelola). Lihat [Bekerja offline](common:offline).

Penyimpanan cloud belum tersedia. Setiap model berada di tempat Anda menyimpannya.

:::offline
Anda sedang offline. Anda dapat terus memodelkan dan menyimpan. Kecuali bilah aplikasi menampilkan {{ui:Siap offline}}, jangan muat ulang tab ini sampai Anda online lagi.
:::

## Aplikasi desktop

:::desktop
Anda memakai ModelCraft di CadCraft Studio, aplikasi desktop dengan kedelapan aplikasi. File dibuka dan disimpan di tempat yang Anda pilih.
:::

:::web
ModelCraft berjalan di peramban di Mac, Windows, dan Linux, dan di CadCraft Studio, aplikasi desktop dengan kedelapan aplikasi dalam satu instalasi, dari getcadcraft.com/download.
:::
