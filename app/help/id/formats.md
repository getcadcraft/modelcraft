---
title: Format file secara rinci
summary: Apa yang tepatnya dipertahankan, dikonversi, dan dibiarkan keluar oleh setiap format yang dibuka, diimpor, dan diekspor ModelCraft.
keywords: format, jenis file, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, cache, fbx, 3mf, ifc, dwg, dxf, satuan, sumbu, y ke atas, z ke atas, milimeter, batas
from: c47d2d28
---

Model ModelCraft berada dalam meter dengan Z (biru) ke atas. Setiap format di bawah ini dikonversi ke atau dari sistem itu.

## ModelCraft (.modelcraft)

| Apa | Rincian |
|---|---|
| Buka | {{ui:Buka}} ({{key:Mod+O}}) atau letakkan di tampilan. File yang berakhiran `.json` juga diterima |
| Simpan | {{ui:Simpan}} ({{key:Mod+S}}), sebagai unduhan |
| Mempertahankan | Semuanya: geometri, muka dan warnanya, material dan tekstur yang diimpor, lampu, tepi lembut, grup, komponen, nama, panduan, scene, satuan, serta kamera dan gaya terakhir |
| Membiarkan keluar | Riwayat urungkan |
| Batas | 200 MB |

File yang disimpan oleh ModelCraft yang lebih baru dari milik Anda ditolak: "Model ini disimpan oleh ModelCraft yang lebih baru (versi file …). Perbarui ModelCraft untuk membukanya." File yang bukan model ModelCraft menyatakan "File ini bukan model ModelCraft (bukan JSON)." atau "Ini bukan file ModelCraft yang dapat kami buka: …".

## USD (.usd, .usda, .usdc, .usdz)

Buka, impor, dan {{ui:Simpan sebagai}} atau {{ui:Ekspor}} › {{ui:USD (.usda, .usdc, .usdz)…}}. File USD yang disimpan ModelCraft terbuka lagi tanpa ada yang hilang; file USD dari program lain terbuka sebagai mesh, grup, komponen, lampu dan kamera. Lihat [Simpan, buka dan ekspor USD](topic:usd).

## Collada (.dae)

Impor dan ekspor. Format terbaik untuk bertukar model dengan pemodel 3D lain.

- **Ekspor:** Collada 1.4.1, Z ke atas, meter. Satu geometri per definisi grup atau komponen; komponen ditulis sekali dan ditempatkan dengan referensi, sehingga tetap dibagi. Muka dengan lubang atau garis besar cekung dipecah menjadi segitiga. Warna menjadi material. Tepi lepas ditulis sebagai garis. Nama yang tidak valid dalam format disesuaikan, dan nama asli disimpan di sampingnya.
- **Impor:** segitiga, poligon (dengan lubang), kipas dan jalur segitiga menjadi muka; garis menjadi tepi. Transformasi node, sumbu atas file, dan satuannya diterapkan. Node yang ditempatkan di beberapa tempat, atau geometri yang dipakai beberapa node, masuk sebagai komponen; node lain masuk sebagai grup. Warna material (difus) menjadi warna muka.
- **Tidak diimpor:** tekstur, skin dan morf, kamera, lampu, beberapa jenis transformasi (look-at dan skew), dan referensi ke file lain. Bilah status menghitungnya.
- **Hilang saat ekspor:** tepi mana yang lembut. **Saat impor,** permukaan yang ditriangulasi tetap berupa segitiga, dengan diagonalnya dilembutkan sehingga area datar tetap terbaca sebagai satu permukaan.

## OBJ (.obj, .mtl)

Impor dan ekspor.

- **Impor:** letakkan `.obj` bersama `.mtl` dan gambar teksturnya (atau impor `.obj` saja: ia masuk tanpa material, dan bilah status menyebut `.mtl` yang dibutuhkannya). Dibaca sebagai meter dengan Y ke atas. Setiap objek (`o`, atau `g` jika tidak ada) menjadi [mesh](topic:meshes), dan muka-mukanya dipertahankan seperti adanya (segi empat tetap segi empat). Koordinat tekstur, normal dan warna per simpul dipertahankan. Gambar warna material (`map_Kd`, PNG, JPEG atau WebP) masuk sebagai tekstur, dengan opsi skala dan offset; jika tidak, warnanya (`Kd`). Tepi tempat normal file patah bersifat keras; tanpa normal, grup penghalusan file yang menentukan. Peta lain (bump, normal), titik, garis dan kurva dihitung dan dibiarkan keluar. OBJ tidak memiliki satuan, jadi model yang dibuat dalam milimeter atau inci tiba dengan ukuran yang salah: skala ulang setelah impor (lihat [Putar dan skala](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Ekspor:** meter, Y ke atas, koordinat dunia. Satu objek per penempatan grup; komponen ditulis lengkap di setiap penempatan. Mesh mempertahankan muka, koordinat tekstur dan normalnya sendiri; muka yang disambung oleh [tepi lembut](topic:soften) mendapat normal per sudut. Saat model memiliki warna, file `.mtl` diunduh di samping `.obj`. Saat memiliki tekstur yang diimpor, `.obj`, `.mtl` dan gambar-gambarnya diunduh bersama sebagai satu `.zip`.
- **Batas:** 2 juta simpul atau muka; 64 MB teks.

## glTF (.glb, .gltf)

Impor dan ekspor, glTF 2.0.

- **Impor:** `.glb`, atau `.gltf` bersama file `.bin` dan teksturnya: letakkan semuanya di tampilan sekaligus (atau pilih `.glb`). `.gltf` yang diberikan sendiri menyebut file yang dibutuhkannya: "File .gltf ini membutuhkan "…": buka versi .glb, atau letakkan .gltf bersama file-filenya."
  - **Mesh** masuk sebagai [mesh](topic:meshes), satu untuk setiap mesh dalam file, dengan normal, koordinat tekstur dan warna simpul dari file dipertahankan. Tepi tempat normal file patah bersifat keras; sisanya lembut. Mesh yang dipakai di beberapa tempat tetap dibagi.
  - **Node** menjadi grup, dinamai seperti di file. Mesh terinstansi (EXT_mesh_gpu_instancing) masuk sebagai satu mesh yang ditempatkan banyak kali.
  - **Material:** tekstur warna dasar (PNG, JPEG atau WebP) masuk sebagai tekstur, ditempatkan menurut koordinat tekstur file (dengan transformasi tekstur apa pun), dan dipertahankan saat Anda menyimpan; jika tidak, warna dasarnya. Logam, kekasaran, peta normal, kaca, clear coat, sheen dan ekstensi material lainnya dibaca tetapi belum dipertahankan: bilah status menyatakannya.
  - **Lampu** (KHR_lights_punctual): lampu titik dan lampu sorot menjadi [lampu](topic:lights). Lampu arah dihitung: matahari menyinari model.
  - **Karakter bertulang** masuk dalam posisi istirahat yang ditetapkan file; tulang dan animasinya, serta target morf, dihitung dan belum dipertahankan.
  - **File terkompresi** (Draco, meshopt) dan data terkuantisasi dibaca. Dekoder hanya dimuat untuk file yang membutuhkannya.
  - Titik dan garis dihitung dan dibiarkan keluar (mesh berisi muka). Tekstur KTX2 dibiarkan keluar; muka tetap mempertahankan warnanya.
- **Ekspor** (`.glb`): glTF 2.0 biner, meter, Y ke atas. Satu mesh per definisi, sehingga komponen tetap dibagi. Mesh mempertahankan normal, koordinat tekstur dan warna simpulnya; muka yang disambung oleh [tepi lembut](topic:soften) membawa normal halus. Warna dan material menjadi material (material sebagai warnanya); tekstur yang diimpor ditulis sebagai tekstur. Lampu yang menyala menjadi lampu titik dan lampu sorot (lampu area tidak memiliki padanan glTF dan dibiarkan keluar); scene menjadi kamera. Tepi lepas dibiarkan keluar.
- **Batas:** file hingga 300 MB; sekitar 130 juta angka geometri.

## STL (.stl)

Impor dan ekspor.

- **Impor:** biner atau ASCII. STL tidak memiliki satuan: ia dibaca sebagai **milimeter**, seperti printer dan ekspor ModelCraft sendiri menuliskannya. Sudut di titik yang sama disambung, sehingga bagian tertutup masuk sebagai [mesh](topic:meshes) tertutup. Warna dalam file (konvensi VisCAM / SolidView dan Materialise) mewarnai muka.
- **Ekspor,** untuk pencetakan 3D: STL biner, **milimeter**, Z ke atas. Hanya segitiga: grup dan tepi lepas dibiarkan keluar. Muka yang dicat membawa warnanya dalam konvensi VisCAM / SolidView, yang diabaikan program lain jika tidak membacanya. Ekspor solid tertutup untuk cetakan yang bersih.

## STEP (.step, .stp)

Hanya impor. STEP adalah format yang dikirim pembuat dan pemasok bagian: file AP203, AP214 dan AP242.

- **Impor:** ModelCraft membaca file itu sendiri, di halaman, dan mengubah setiap solid menjadi [mesh](topic:meshes) tertutup dari segitiga: muka datar tetap datar, muka melengkung (silinder, kerucut, bola, torus, permukaan B-spline) menjadi banyak muka datar kecil, dengan tepi di dalam satu muka melengkung dibuat lembut dan tepi di antara dua muka dibuat tajam. File STEP menyatakan satuannya; model masuk pada ukuran sebenarnya. Rakitan masuk dengan setiap bagian di tempat file menempatkannya, setiap bagian sebagai mesh sendiri dalam grup yang dinamai menurut file. Warna, nama bagian dari pohon rakitan, dan toleransi (PMI) tidak dibaca.
- **Pesan:** apa yang dilewati atau digambar lebih kasar ditambahkan ke baris status ("Catatan: …"); file tanpa solid, file rusak, atau file yang melebihi batas menyatakan alasannya dan tidak menambahkan apa pun.
- **Batas:** file hingga 300 MB; 400 000 muka dan 8 juta segitiga.

## .3dm

Hanya impor. File `.3dm` menyimpan model NURBS: polipermukaan, permukaan, mesh, kurva dan blok.

- **Impor:** ModelCraft membaca file itu sendiri, di halaman. Mesh masuk apa adanya; setiap muka dari polipermukaan atau ekstrusi berasal dari mesh render yang disimpan bersamanya dalam file, jika tidak ModelCraft melakukan tesselasi (bidang, permukaan NURBS, permukaan putar, kurva ekstrusi, ekstrusi; dipotong oleh tepinya, polipermukaan tertutup sebagai mesh tertutup). File menyatakan satuannya; model masuk pada ukuran sebenarnya. Kurva menjadi tepi, blok menjadi komponen (blok di dalam blok dipertahankan), layer menjadi tag (disembunyikan saat mati), warna objek (miliknya, layernya, atau materialnya) mewarnai mukanya. Langkah demi langkah: [Impor model .3dm](topic:import-3dm-files).
- **Pesan:** baris status menyebut berapa banyak muka berasal dari mesh tersimpan dan berapa yang di-tesselasi, serta menyebut apa yang dibiarkan keluar: titik, awan titik, teks, dimensi, hatch, lampu, objek SubD, muka pada jenis permukaan yang belum dibaca, blok tertaut.
- **Batas:** file hingga 300 MB.

## PLY (.ply)

Impor dan ekspor, untuk mesh dengan warna (hasil pemindaian, pencetakan 3D berwarna, pemodel lain).

- **Impor:** ASCII dan biner. Muka menjadi [mesh](topic:meshes) dengan normal, koordinat tekstur dan warna simpul yang dipertahankan; setiap muka diwarnai dengan warna terdekat dari 4.096 warna sehingga Anda melihat warnanya sekarang. PLY tidak memiliki satuan atau konvensi sumbu: koordinat masuk apa adanya (meter, Z ke atas). PLY yang hanya berisi titik adalah awan titik: bukalah di BimCraft atau CivilCraft.
- **Ekspor:** PLY biner dengan posisi, normal dan warna (dan koordinat tekstur jika model memilikinya), dalam meter, Z ke atas.

## FBX (.fbx)

Hanya impor. File FBX 7 (sejak 2011), biner atau ASCII, dibaca oleh pembaca milik ModelCraft.

- Mesh masuk sebagai [mesh](topic:meshes) dengan normal, koordinat tekstur (setiap set UV) dan warna simpul; mesh yang dipakai beberapa objek tetap dibagi. Objek menjadi grup dengan transformasinya (pivot, offset dan pra-rotasi disertakan).
- Material: tekstur difus — tertanam dalam file, atau gambar yang diletakkan bersama `.fbx` — masuk sebagai tekstur (gambar TGA dipertahankan sebagai PNG); jika tidak, warna difus. Pengaturan material lain menunggu model material baru.
- Sumbu atas dan satuan file diterapkan: semuanya masuk dengan Z ke atas, dalam meter.
- Lampu titik dan lampu sorot menjadi [lampu](topic:lights) (intensitas FBX 100 adalah lampu default ModelCraft, 800 lumen: intensitas FBX tidak memiliki satuan). Kamera menjadi [scene](topic:scenes).
- Karakter bertulang masuk dalam posisi istirahat; tulang dan animasi dihitung dan belum dipertahankan. Lampu arah dan lampu area, serta geometri selain mesh (NURBS, kurva), dihitung dan dibiarkan keluar.
- File FBX 6 dan yang lebih lama ditolak: simpan ulang sebagai FBX 2011 atau yang lebih baru.

## Alembic (.abc)

Hanya impor: cache geometri dari program animasi dan efek.

- Mesh (mesh poligon dan subdivisi) masuk sebagai [mesh](topic:meshes), dengan koordinat tekstur dan normalnya; transformasi menjadi grup. Alembic menggunakan Y ke atas dan diputar menjadi Z ke atas; meter.
- Cache dengan banyak sampel (animasi) masuk pada sampel pertamanya; bilah status menyebut berapa banyak yang dimilikinya.
- Titik, kurva, permukaan NURBS, kamera dan lampu dihitung dan dibiarkan keluar. File dalam tata letak HDF5 lama ditolak: simpan ulang sebagai file Ogawa Alembic.

{{ui:Periksa untuk pencetakan 3D (STL atau 3MF)…}} memeriksa bentuk terlebih dahulu dan menulis pilihan, atau semua yang ditampilkan. Lihat [Siapkan model untuk pencetakan 3D](topic:print-3d).

## 3MF (.3mf)

Hanya ekspor, dari {{ui:Periksa untuk pencetakan 3D (STL atau 3MF)…}}. Inti 3MF: satu mesh dalam **milimeter**, Z ke atas, dengan warnanya sebagai material. Sebagian besar slicer membacanya, dan tidak seperti STL, ia menyatakan satuannya. Hal yang tersembunyi dibiarkan keluar. Lihat [Siapkan model untuk pencetakan 3D](topic:print-3d).

## Ekspor DWG dan DXF (.dwg, .dxf)

Untuk program CAD. Model ditulis dalam satuannya sendiri: inci untuk model kaki-dan-inci, jika tidak milimeter, sentimeter atau meter (bilah status menyebutnya).

- **Muka** menjadi muka 3D (segitiga). Garis di dalam muka, dan tepi lembut, ditulis tak terlihat, sehingga muka tampak seperti milik ModelCraft.
- **Tepi lepas** menjadi garis.
- **Grup dan komponen** menjadi blok: komponen ditulis sekali dan ditempatkan sebanyak yang dipakai, termasuk salinan yang diputar dan dicerminkan. Grup yang diregangkan setelah diputar (sehingga miring) ditulis di tempatnya.
- **Warna:** DWG mempertahankan warna setiap muka dengan tepat; DXF memakai warna standar CAD terdekat dari 255 warna.
- **Versi:** DWG ditulis sebagai AutoCAD 2004 (AC1018), yang dibuka program CAD sejak 2004. DXF adalah R12 (AC1009), versi yang dibaca setiap program CAD; R12 tidak memiliki kolom satuan, jadi beri tahu program CAD satuan mana yang digunakan.
- **Tidak ditulis:** panduan, dimensi, scene, dan kamera.

## IFC (.ifc)

Hanya ekspor, untuk BimCraft dan program BIM lain. IFC4 dengan proyek, tapak, bangunan dan lantai-lantainya. Setiap grup atau komponen tingkat atas menjadi satu elemen bangunan proxy dengan namanya; yang tertutup ditulis sebagai bentuk solid (brep bersisi), yang terbuka sebagai model permukaan; lubang pada muka dipertahankan. Geometri lepas di tingkat atas menjadi satu elemen bernama "Loose geometry". Tanpa tipe, properti, atau material.

**Lantai:** {{ui:Ekspor}} › {{ui:Lantai IFC…}} mencantumkannya, masing-masing dengan nama dan elevasi ({{ui:Tambah lantai}}, atau {{ui:Tebak dari model}}, yang membuat satu lantai untuk setiap ketinggian tempat grup tingkat atas Anda berdiri). Saat ekspor, setiap grup atau komponen masuk ke lantai pada atau di bawah titik terendahnya, dan mempertahankan tempatnya. Tanpa lantai, semuanya masuk ke satu lantai, "Level 1", pada 0. Lantai disimpan dalam file ModelCraft.

## DWG (.dwg) dan DXF (.dxf)

Impor sebagai garis di tanah (hatch dan muka 3D sebagai muka); ekspor seperti dijelaskan di atas. Lihat [Model di atas denah tapak](topic:site-plan).

- **Baca:** garis, polyline (dengan busur), polyline 3D, lingkaran, busur, dan referensi blok termasuk array, dari model space. Objek tak terlihat (seperti keadaan tersembunyi dari blok dinamis) dibiarkan keluar. Kurva menjadi 48 potong lurus per putaran penuh.
- **Dibaca sejak 0.4:** spline dan elips (sebagai tepi), teks, teks multibaris dan nilai atribut (sebagai tepi dalam huruf goresan tunggal), hatch (muka berlubang), muka 3D dan isian solid (muka), serta dimensi (digambar dari blok dimensi milik gambar).
- **Dibaca sejak 0.7:** solid 3D, region dan badan (data ACIS-nya, DWG dan DXF dari setiap versi), masing-masing sebagai grup sendiri, yang tertutup sebagai solid. Muka pada permukaan selain bidang, silinder, kerucut, bola, torus, dan permukaan spline sederhana dibiarkan keluar dan didaftarkan.
- **Tidak dibaca:** titik, tabel, multileader, gambar, dan apa pun di ruang kertas.
- **Satuan:** diambil dari gambar jika gambar menyatakannya. Jika tidak, ModelCraft bertanya.
- **DXF** harus ASCII. DXF biner ditolak.
- **DWG** dari AutoCAD R13 hingga format saat ini (AutoCAD 2018 dan yang lebih baru; AC1012 hingga AC1032) dibaca oleh pembaca DWG milik ModelCraft, di halaman; ini bagian dari ModelCraft, jadi berfungsi secara luring kapan pun ModelCraft berfungsi. Versi yang lebih lama (R12 dan sebelumnya) dan file yang rusak parah tidak dapat dibaca; simpan sebagai DXF.
- **Batas:** koordinat lebih dari 10.000 km dari titik asal, atau lebih dari 2 juta potong garis, ditolak.

## File SKP

{{ui:Impor}} (atau letakkan file di tampilan) membaca file SketchUp dengan pembaca milik ModelCraft, di halaman: tidak ada yang diunggah, dan berfungsi secara luring kapan pun ModelCraft berfungsi. Diuji dengan file dari SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 dan 2026; versi lain seharusnya juga dapat dibuka, tetapi belum dicoba. Model masuk sebagai satu grup yang dinamai menurut file. Satu {{key:Mod+Z}} menghapusnya kembali. Langkah demi langkah: [Impor model SKP](topic:import-sketchup-files).

- **Dipertahankan:** muka dengan lubangnya, grup (sebagai grup) dan komponen (sebagai komponen, dibagi), nama dan penempatannya, warna, tag pada grup dan komponen, tepi yang bukan bagian dari muka, serta tepi lembut dan halus, sehingga permukaan melengkung tetap halus.
- **Warna:** material muka itu sendiri memberi warnanya. Material yang dicat pada grup atau komponen menjadi cat penempatan itu, sehingga muka di dalamnya yang tidak punya warna sendiri memakainya, seperti di SketchUp; komponen yang dicat dua warna tetap menjadi satu komponen.
- **Tag** pada grup dan komponen menjadi tag ModelCraft, ditampilkan atau disembunyikan seperti semula. Tag pada muka dan tepi lepas tidak dipertahankan (ModelCraft hanya memberi tag pada grup dan komponen); bilah status menghitungnya.
- **Benda tersembunyi masuk dalam keadaan tersembunyi** (muka, tepi, grup, komponen, dan muka serta tepi pada tag tersembunyi), sehingga Anda melihat apa yang ditampilkan SketchUp; {{ui:Tampilkan semua}} menampilkannya.
- **Tekstur:** muka yang dicat dengan material bertekstur mempertahankan teksturnya, ditempatkan seperti di file, dan file ModelCraft menyimpan gambarnya. Tekstur pada seluruh grup atau komponen, tekstur yang hilang dari file, atau gambar yang tidak dapat ditampilkan browser (seperti file Photoshop) hanya mempertahankan warna materialnya.
- **Dibiarkan keluar, dan dihitung di bilah status:** gambar yang diletakkan di model. Teks, dimensi, panduan, bidang potong, scene dan gaya tidak dibaca.
- **Satuan:** file SketchUp berada dalam inci di dalamnya; ModelCraft mengonversinya, sehingga ukurannya benar dalam satuan apa pun.
- **Menyimpan `.skp`** belum dibuat. Untuk membawa model kembali ke SketchUp, ekspor Collada (`.dae`).

## Tidak didukung

ModelCraft tidak dapat membuka file 3DS atau IFC, dan tidak dapat menyimpan file 3DS, FBX, STEP, `.3dm` atau SketchUp (`.skp`).
