---
title: Format fail secara terperinci
summary: Perkara tepat yang setiap format dibuka, diimport dan dieksport oleh ModelCraft simpan, tukar dan tinggalkan.
keywords: format, jenis fail, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, cache, fbx, 3mf, ifc, dwg, dxf, unit, paksi, Y ke atas, Z ke atas, milimeter, had
from: c47d2d28
---

Model ModelCraft adalah dalam meter dengan Z (biru) ke atas. Setiap format di bawah ditukar kepada atau daripada itu.

## ModelCraft (.modelcraft)

| Perkara | Butiran |
|---|---|
| Buka | {{ui:Buka}} ({{key:Mod+O}}) atau lepaskan pada paparan. Fail yang berakhir dengan `.json` turut diterima |
| Simpan | {{ui:Simpan}} ({{key:Mod+S}}), sebagai muat turun |
| Menyimpan | Segala-galanya: geometri, muka dan warnanya, bahan dan tekstur yang diimport, lampu, tepi lembut, kumpulan, komponen, nama, panduan, scene, unit, serta kamera dan gaya yang terakhir |
| Ditinggalkan | Sejarah buat asal |
| Had | 200 MB |

Fail yang disimpan oleh ModelCraft yang lebih baharu daripada anda ditolak: "Model ini disimpan oleh ModelCraft yang lebih baharu (versi fail …). Kemas kini ModelCraft untuk membukanya." Fail yang bukan model ModelCraft berkata "Fail ini bukan model ModelCraft (ia bukan JSON)." atau "Ini bukan fail ModelCraft yang dapat kami buka: …".

## USD (.usd, .usda, .usdc, .usdz)

Buka, import, dan {{ui:Simpan sebagai}} atau {{ui:Eksport}} › {{ui:USD (.usda, .usdc, .usdz)…}}. Fail USD yang disimpan oleh ModelCraft dibuka semula tanpa apa-apa yang hilang; fail USD program lain dibuka sebagai jejaring, kumpulan, komponen, lampu dan kamera. Lihat [Simpan, buka dan eksport USD](topic:usd).

## Collada (.dae)

Import dan eksport. Format terbaik untuk bertukar model dengan pemodel 3D lain.

- **Eksport:** Collada 1.4.1, Z ke atas, meter. Satu geometri bagi setiap definisi kumpulan atau komponen; komponen ditulis sekali dan diletakkan melalui rujukan, jadi ia kekal dikongsi. Muka dengan lubang atau garis luar cekung dibahagikan kepada segi tiga. Warna menjadi bahan. Tepi lepas ditulis sebagai garisan. Nama yang tidak sah dalam format ini diselaraskan, dan nama yang tepat dikekalkan di sebelahnya.
- **Import:** segi tiga, poligon (dengan lubang), kipas segi tiga dan jalur menjadi muka; garisan menjadi tepi. Transformasi nod, paksi atas fail dan unitnya digunakan. Nod yang diletakkan di beberapa tempat, atau geometri yang digunakan oleh beberapa nod, masuk sebagai komponen; nod lain masuk sebagai kumpulan. Warna bahan (diffuse) menjadi warna muka.
- **Tidak diimport:** tekstur, kulit dan morf, kamera, lampu, sesetengah jenis transformasi (look-at dan skew), dan rujukan kepada fail lain. Bar status mengirakannya.
- **Hilang semasa eksport:** tepi mana yang lembut. **Semasa import,** permukaan yang telah diubah kepada segi tiga kekal sebagai segi tiga, dengan pepenjuru dilembutkan supaya kawasan rata masih dibaca sebagai satu permukaan.

## OBJ (.obj, .mtl)

Import dan eksport.

- **Import:** lepaskan `.obj` bersama `.mtl` dan gambar teksturnya (atau import `.obj` sahaja: ia masuk tanpa bahan, dan bar status menamakan `.mtl` yang dikehendakinya). Dibaca sebagai meter dengan Y ke atas. Setiap objek (`o`, jika tiada `g`) menjadi [jejaring](topic:meshes), dengan mukanya dikekalkan seperti sedia ada (kuad kekal sebagai kuad). Koordinat tekstur, normal dan warna setiap bucu dikekalkan. Gambar warna bahan (`map_Kd`, PNG, JPEG atau WebP) masuk sebagai tekstur, dengan pilihan skala dan ofsetnya; jika tidak, warnanya (`Kd`). Tepi tempat normal fail terputus ialah keras; tanpa normal, kumpulan pelicinan fail menentukan. Peta lain (bump, normal), titik, garisan dan lengkung dikira dan ditinggalkan. OBJ tiada unit, jadi model yang dibuat dalam milimeter atau inci tiba pada saiz yang salah: skalakan selepas import (lihat [Putar dan skala](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Eksport:** meter, Y ke atas, koordinat dunia. Satu objek bagi setiap penempatan kumpulan; komponen ditulis sepenuhnya pada setiap penempatan. Jejaring mengekalkan muka, koordinat tekstur dan normalnya sendiri; muka yang dicantumkan oleh [tepi lembut](topic:soften) mendapat satu normal bagi setiap bucu. Apabila model mempunyai warna, `.mtl` dimuat turun di sebelah `.obj`. Apabila ia mempunyai tekstur yang diimport, `.obj`, `.mtl` dan gambar dimuat turun bersama sebagai satu `.zip`.
- **Had:** 2 juta bucu atau muka; 64 MB teks.

## glTF (.glb, .gltf)

Import dan eksport, glTF 2.0.

- **Import:** `.glb`, atau `.gltf` bersama fail `.bin` dan tekstur: lepaskan kesemuanya pada paparan sekali gus (atau pilih `.glb`). `.gltf` yang diberikan sendirian menamakan fail yang diperlukannya: "Fail .gltf ini memerlukan "…": buka versi .glb, atau lepaskan .gltf bersama fail-failnya."
  - **Jejaring** masuk sebagai [jejaring](topic:meshes), satu bagi setiap jejaring dalam fail, dengan normal, koordinat tekstur dan warna bucu fail dikekalkan padanya. Tepi tempat normal fail terputus ialah keras; selebihnya lembut. Jejaring yang digunakan di beberapa tempat kekal dikongsi.
  - **Nod** menjadi kumpulan, dinamakan seperti dalam fail. Jejaring yang diinstan (EXT_mesh_gpu_instancing) masuk sebagai satu jejaring yang diletakkan banyak kali.
  - **Bahan:** tekstur warna asas (PNG, JPEG atau WebP) masuk sebagai tekstur, diletakkan mengikut koordinat tekstur fail (dengan sebarang transformasi tekstur), dan dikekalkan apabila anda menyimpan; jika tidak, warna asas. Logam, kekasaran, peta normal, kaca, lapisan jernih, sheen dan sambungan bahan lain dibaca tetapi belum dikekalkan: bar status memberitahu anda.
  - **Lampu** (KHR_lights_punctual): lampu titik dan sorot menjadi [lampu](topic:lights). Lampu arah dikira: matahari menyinari model.
  - **Kamera** menjadi [scene](topic:scenes).
  - **Watak berkulit** masuk berdiri seperti yang difailkan; tulang dan animasinya, serta sasaran morf, dikira dan belum dikekalkan.
  - **Fail termampat** (Draco, meshopt) dan data terkuantisasi dibaca. Penyahkod dimuatkan hanya untuk fail yang memerlukannya.
  - Titik dan garisan dikira dan ditinggalkan (jejaring memegang muka). Tekstur KTX2 ditinggalkan; muka mengekalkan warnanya.
- **Eksport** (`.glb`): glTF 2.0 binari, meter, Y ke atas. Satu jejaring bagi setiap definisi, jadi komponen kekal dikongsi. Jejaring mengekalkan normal, koordinat tekstur dan warna bucunya; muka yang dicantumkan oleh [tepi lembut](topic:soften) membawa normal yang licin. Warna dan bahan menjadi bahan (bahan sebagai warnanya); tekstur yang diimport ditulis sebagai tekstur. Lampu yang hidup menjadi lampu titik dan sorot (lampu kawasan tiada padanan dalam glTF dan ditinggalkan); scene menjadi kamera. Tepi lepas ditinggalkan.
- **Had:** fail sehingga 300 MB; kira-kira 130 juta nombor geometri.

## STL (.stl)

Import dan eksport.

- **Import:** binari atau ASCII. STL tiada unit: ia dibaca sebagai **milimeter**, cara pencetak dan eksport ModelCraft sendiri menulisnya. Bucu pada titik yang sama dicantumkan, jadi bahagian tertutup masuk sebagai [jejaring](topic:meshes) tertutup. Warna dalam fail (konvensyen VisCAM / SolidView dan Materialise) mewarnakan muka.
- **Eksport,** untuk cetakan 3D: STL binari, **milimeter**, Z ke atas. Segi tiga sahaja: kumpulan dan tepi lepas ditinggalkan. Muka yang dicat membawa warnanya dalam konvensyen VisCAM / SolidView, yang diabaikan oleh program lain jika mereka tidak membacanya. Eksport pepejal tertutup untuk cetakan yang kemas.

## STEP (.step, .stp)

Import sahaja. STEP ialah apa yang pemodel bahagian dan pembekal hantar: fail AP203, AP214 dan AP242.

- **Import:** ModelCraft membaca fail itu sendiri, dalam halaman, dan menukar setiap pepejal menjadi [jejaring](topic:meshes) tertutup segi tiga: muka rata kekal rata, muka melengkung (silinder, kon, sfera, torus, permukaan B-spline) menjadi banyak muka rata kecil, dengan tepi di dalam satu muka melengkung dilembutkan dan tepi antara dua muka dibiarkan tajam. Fail STEP menyatakan unitnya; model masuk pada saiz sebenarnya. Pemasangan masuk dengan setiap bahagian di tempat fail meletakkannya, setiap bahagian sebagai jejaringnya sendiri dalam kumpulan yang dinamakan sempena fail. Warna, nama bahagian dalam pepohon pemasangan dan toleransi (PMI) tidak dibaca.
- **Mesej:** apa yang dilangkau atau dilukis lebih kasar ditambah pada baris status ("Nota: …"); fail tanpa pepejal, fail yang rosak atau fail yang melebihi had memberitahu sebabnya dan tidak menambah apa-apa.
- **Had:** fail sehingga 300 MB; 400 000 muka dan 8 juta segi tiga.

## .3dm

Import sahaja. Fail `.3dm` mengandungi model NURBS: poli-permukaan, permukaan, jejaring, lengkung dan blok.

- **Import:** ModelCraft membaca fail itu sendiri, dalam halaman. Jejaring masuk seperti sedia ada; setiap muka poli-permukaan atau penyemperitan datang daripada jejaring render yang disimpan bersamanya dalam fail, jika tidak ModelCraft menukarnya kepada jejaring (satah, permukaan NURBS, permukaan revolusi, lengkung yang disemperit, penyemperitan; dipotong oleh tepinya, poli-permukaan tertutup sebagai jejaring tertutup). Lengkung menjadi tepi, blok menjadi komponen (blok dalam blok dikekalkan), lapisan menjadi tag (tersembunyi apabila dimatikan), dan warna objek (miliknya sendiri, lapisannya atau bahannya) mewarnakan mukanya. Fail menyatakan unitnya; model masuk pada saiz sebenarnya. Langkah demi langkah: [Bawa masuk model .3dm](topic:import-3dm-files).
- **Mesej:** baris status menyatakan berapa banyak muka datang daripada jejaring yang disimpan dan berapa banyak yang ditukar, serta menamakan apa yang ditinggalkan: titik, awan titik, teks, dimensi, hatch, lampu, objek SubD, muka pada jenis permukaan yang belum dibaca, dan blok terpaut.
- **Had:** fail sehingga 300 MB.

## PLY (.ply)

Import dan eksport, untuk jejaring dengan warna (imbasan, cetakan 3D berwarna, pemodel lain).

- **Import:** ASCII dan binari. Muka menjadi [jejaring](topic:meshes) dengan normal, koordinat tekstur dan warna bucunya dikekalkan; setiap muka dicat dengan warna terdekat daripada 4,096 warna supaya anda melihat warnanya sekarang. PLY tiada unit atau konvensyen paksi: koordinat masuk seperti sedia ada (meter, Z ke atas). PLY yang hanya mengandungi titik ialah awan titik: buka dalam BimCraft atau CivilCraft.
- **Eksport:** PLY binari dengan kedudukan, normal dan warna (dan koordinat tekstur apabila model mempunyainya), dalam meter, Z ke atas.

## FBX (.fbx)

Import sahaja. Fail FBX 7 (dari 2011 ke atas), binari atau ASCII, dibaca oleh pembaca sendiri ModelCraft.

- Jejaring masuk sebagai [jejaring](topic:meshes) dengan normal, koordinat tekstur (setiap set UV) dan warna bucunya; jejaring yang digunakan oleh beberapa objek kekal dikongsi. Objek menjadi kumpulan dengan transformasinya (termasuk pivot, ofset dan pra-putaran).
- Bahan: tekstur diffuse — yang tertanam dalam fail, atau gambar yang dilepaskan bersama `.fbx` — masuk sebagai tekstur (gambar TGA dikekalkan sebagai PNG); jika tidak, warna diffuse. Tetapan bahan lain menunggu model bahan baharu.
- Paksi atas fail dan unitnya digunakan: semuanya masuk dengan Z ke atas, dalam meter.
- Lampu titik dan sorot menjadi [lampu](topic:lights) (keamatan FBX 100 ialah lampu lalai ModelCraft, 800 lumen: keamatan FBX tiada unit). Kamera menjadi [scene](topic:scenes).
- Watak berkulit masuk dalam keadaan rehat; tulang dan animasi dikira dan belum dikekalkan. Lampu arah dan kawasan, serta geometri selain jejaring (NURBS, lengkung), dikira dan ditinggalkan.
- Fail FBX 6 dan lebih lama ditolak: simpan semula sebagai FBX 2011 atau yang lebih baharu.

## Alembic (.abc)

Import sahaja: cache geometri daripada program animasi dan kesan.

- Jejaring (poligon dan jejaring subdivisi) masuk sebagai [jejaring], dengan koordinat tekstur dan normalnya; transformasi menjadi kumpulan. Alembic ialah Y ke atas dan ditukar kepada Z ke atas; meter.
- Cache dengan banyak sampel (animasi) masuk pada sampel pertamanya; bar status memberitahu berapa banyak yang ada.
- Titik, lengkung, permukaan NURBS, kamera dan lampu dikira dan ditinggalkan. Fail dalam susun atur HDF5 lama ditolak: simpan semula sebagai fail Ogawa Alembic.

{{ui:Semak untuk cetakan 3D (STL atau 3MF)…}} menyemak bentuk dahulu dan menulis pilihan, atau semua yang ditunjukkan. Lihat [Sediakan model untuk cetakan 3D](topic:print-3d).

## 3MF (.3mf)

Eksport sahaja, dari {{ui:Semak untuk cetakan 3D (STL atau 3MF)…}}. Teras 3MF: satu jejaring dalam **milimeter**, Z ke atas, dengan warnanya sebagai bahan. Kebanyakan slicer membacanya, dan tidak seperti STL ia menyatakan unitnya. Perkara yang tersembunyi ditinggalkan. Lihat [Sediakan model untuk cetakan 3D](topic:print-3d).

## Eksport DWG dan DXF (.dwg, .dxf)

Untuk program CAD. Model ditulis dalam unitnya sendiri: inci untuk model kaki-dan-inci, jika tidak milimeter, sentimeter atau meter (bar status menamakannya).

- **Muka** menjadi muka 3D (segi tiga). Garisan dalam muka, dan tepi lembut, ditulis tidak kelihatan, jadi muka kelihatan seperti dalam ModelCraft.
- **Tepi lepas** menjadi garisan.
- **Kumpulan dan komponen** menjadi blok: komponen ditulis sekali dan diletakkan setiap kali ia digunakan, termasuk salinan yang diputar dan dicerminkan. Kumpulan yang diregangkan selepas diputar (jadi ia condong) ditulis di tempatnya sebaliknya.
- **Warna:** DWG mengekalkan warna setiap muka dengan tepat; DXF menggunakan warna terdekat daripada 255 warna CAD standard.
- **Versi:** DWG ditulis sebagai AutoCAD 2004 (AC1018), yang dibuka oleh program CAD dari 2004 ke atas. DXF ialah R12 (AC1009), versi yang dibaca oleh setiap program CAD; R12 tiada medan unit, jadi beritahu program CAD unit yang hendak digunakan.
- **Tidak ditulis:** panduan, dimensi, scene, dan kamera.

## IFC (.ifc)

Eksport sahaja, untuk BimCraft dan program BIM lain. IFC4 dengan projek, tapak, bangunan dan tingkatnya. Setiap kumpulan atau komponen peringkat atas menjadi satu proksi elemen bangunan dengan namanya; yang tertutup ditulis sebagai bentuk pepejal (brep berfacet), yang terbuka sebagai model permukaan; lubang dalam muka dikekalkan. Geometri lepas pada peringkat atas menjadi satu elemen bernama "Loose geometry". Tiada jenis, sifat atau bahan.

**Tingkat:** {{ui:Eksport}} › {{ui:Tingkat IFC…}} menyenaraikannya, setiap satu dengan nama dan ketinggian ({{ui:Tambah tingkat}}, atau {{ui:Agak daripada model}}, yang mencipta satu tingkat untuk setiap ketinggian tempat kumpulan peringkat atas anda berdiri). Semasa eksport, setiap kumpulan atau komponen diletakkan pada tingkat di atas atau di bawah titik terendahnya, dan mengekalkan tempatnya. Tanpa tingkat, semuanya diletakkan pada satu tingkat, "Level 1", pada 0. Tingkat disimpan dalam fail ModelCraft.

## DWG (.dwg) dan DXF (.dxf)

Import sebagai garisan di atas tanah (hatch dan muka 3D sebagai muka); eksport seperti yang diterangkan di atas. Lihat [Model pada pelan tapak](topic:site-plan).

- **Baca:** garisan, polilines (dengan lengkok), polilines 3D, bulatan, lengkok, dan rujukan blok termasuk tatasusunan, dari ruang model. Objek yang tidak kelihatan (seperti keadaan tersembunyi blok dinamik) ditinggalkan. Lengkung menjadi 48 kepingan lurus bagi setiap pusingan penuh.
- **Dibaca sejak 0.4:** splin dan elips (sebagai tepi), teks, teks berbilang baris dan nilai atribut (sebagai tepi dalam tulisan satu sapuan), hatch (muka dengan lubang), muka 3D dan isian pepejal (sebagai muka), dan dimensi (dilukis daripada blok dimensi lukisan itu sendiri).
- **Dibaca sejak 0.7:** pepejal 3D, rantau dan badan (data ACIS mereka, DWG dan DXF bagi setiap versi), setiap satu sebagai kumpulannya sendiri, yang tertutup sebagai pepejal. Muka pada permukaan selain satah, silinder, kon, sfera, torus dan permukaan splin mudah ditinggalkan dan disenaraikan.
- **Tidak dibaca:** titik, jadual, multipetunjuk, imej, dan apa-apa dalam ruang kertas.
- **Unit:** diambil daripada lukisan apabila ia menyatakannya. Jika tidak, ModelCraft bertanya.
- **DXF** mesti ASCII. DXF binari ditolak.
- **DWG** dari AutoCAD R13 hingga format semasa (AutoCAD 2018 dan lebih baharu; AC1012 hingga AC1032) dibaca oleh pembaca DWG ModelCraft sendiri, dalam halaman; ia sebahagian daripada ModelCraft, jadi ia berfungsi di luar talian bila-bila masa ModelCraft berfungsi. Versi yang lebih lama (R12 dan sebelumnya) dan fail yang rosak teruk tidak boleh dibaca; simpan sebagai DXF.
- **Had:** koordinat lebih daripada 10,000 km dari asal, atau lebih daripada 2 juta kepingan garisan, ditolak.

## Fail SKP

{{ui:Import}} (atau lepaskan fail pada paparan) membaca fail SketchUp dengan pembaca ModelCraft sendiri, dalam halaman: tiada apa-apa dimuat naik, dan ia berfungsi di luar talian bila-bila masa ModelCraft berfungsi. Diuji dengan fail dari SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 dan 2026; versi lain sepatutnya turut dibuka, tetapi belum dicuba. Model masuk sebagai satu kumpulan yang dinamakan sempena fail. Satu {{key:Mod+Z}} membuangnya semula. Langkah demi langkah: [Bawa masuk model SKP](topic:import-sketchup-files).

- **Dikekalkan:** muka dengan lubangnya, kumpulan (sebagai kumpulan) dan komponen (sebagai komponen, dikongsi), nama dan penempatannya, warna, tag pada kumpulan dan komponen, tepi yang bukan sebahagian daripada muka, serta tepi lembut dan licin, supaya permukaan melengkung kekal licin.
- **Warna:** bahan sendiri sesebuah muka memberikan warnanya. Bahan yang dicat pada kumpulan atau komponen menjadi cat bagi penempatan itu, jadi muka di dalamnya yang tiada warna sendiri mengambilnya, seperti dalam SketchUp; komponen yang dicat dua warna kekal sebagai satu komponen.
- **Tag** pada kumpulan dan komponen menjadi tag ModelCraft, ditunjukkan atau disembunyikan seperti asalnya. Tag pada muka lepas dan tepi lepas tidak dikekalkan (ModelCraft menanda kumpulan dan komponen sahaja); bar status mengiranya.
- **Perkara yang tersembunyi masuk dalam keadaan tersembunyi** (muka, tepi, kumpulan, komponen, serta muka dan tepi pada tag yang tersembunyi), jadi anda melihat apa yang ditunjukkan oleh SketchUp; {{ui:Nyahsembunyi semua}} menunjukkannya.
- **Tekstur:** muka yang dicat dengan bahan bertekstur mengekalkan teksturnya, diletakkan seperti dalam fail, dan fail ModelCraft menyimpan imej itu. Tekstur pada keseluruhan kumpulan atau komponen, tekstur yang hilang daripada fail, atau imej yang tidak dapat dipaparkan oleh pelayar (seperti fail Photoshop) hanya mengekalkan warna bahannya.
- **Ditinggalkan, dan dikira dalam bar status:** imej yang diletakkan dalam model. Teks, dimensi, panduan, satah keratan, scene dan gaya tidak dibaca.
- **Unit:** fail SketchUp ialah dalam inci secara dalaman; ModelCraft menukarnya, jadi saiznya betul dalam mana-mana unit.
- **Menyimpan `.skp`** belum dibina. Untuk membawa model kembali ke SketchUp, eksport Collada (`.dae`).

## Tidak disokong

ModelCraft tidak dapat membuka fail 3DS atau IFC, dan tidak dapat menyimpan fail 3DS, FBX, STEP, `.3dm` atau SketchUp (`.skp`).
