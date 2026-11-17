---
title: Buka, simpan, import dan eksport
summary: Fail ModelCraft, perkara yang boleh anda import dan hantar keluar, tempat fail pergi, dan apa yang berubah apabila luar talian serta antara pelayar.
keywords: buka, simpan, import, eksport, fail, 3dm, skp, pulih, simpan automatik, terkini, desktop, buka dalam 3d, serah, muat turun, fail modelcraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, format, luar talian, simpan sebagai
from: 3f09ab72
---

ModelCraft membaca dan menulis fail pada komputer anda. Tiada apa-apa dimuat naik: fail yang anda buka dibaca di dalam pelayar anda, dan fail yang anda simpan ialah muat turun. Lihat [Di mana fail anda pergi](common:your-files).

## Format sepintas lalu

| Format | Buka | Import | Eksport | Untuk apa |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | ya | tidak | {{ui:Simpan}} | Fail kerja anda. Menyimpan segalanya. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | ya | ya | {{ui:Simpan sebagai}}, {{ui:Eksport}} | Program pemaparan dan pemasangan adegan. USD ModelCraft sendiri menyimpan segalanya. Lihat [Simpan, buka dan eksport USD](topic:usd). |
| SketchUp (`.skp`) | tidak | ya | tidak | Membawa masuk model dari SketchUp. Menyimpan kumpulan, komponen, warna, tekstur pada muka, tag dan tepi lembut. Lihat [Bawa masuk model SKP](topic:import-sketchup-files). |
| Collada (`.dae`) | tidak | ya | ya | Bertukar model dengan pemodel 3D lain. Menyimpan kumpulan, komponen dan warna. |
| OBJ (`.obj`) | tidak | ya | ya | Program pemaparan dan visualisasi. |
| glTF (`.glb`, `.gltf`) | tidak | ya | `.glb` sahaja | Pemapar web, enjin permainan, AR. |
| STL (`.stl`) | tidak | ya | ya | Cetakan 3D (dalam milimeter). |
| PLY (`.ply`) | tidak | ya | ya | Jejaring dengan warna: imbasan, cetakan warna. |
| FBX (`.fbx`) | tidak | ya | tidak | Model dari program animasi dan permainan (FBX 2011 dan lebih baharu). |
| Alembic (`.abc`) | tidak | ya | tidak | Cache geometri, pada sampel pertamanya. |
| STEP (`.step`, `.stp`) | tidak | ya | tidak | Bahagian dari pemodel bahagian dan pembekal, sebagai jejaring tertutup pada saiz sebenar. Lihat [Format fail](topic:formats). |
| `.3dm` | tidak | ya | tidak | Model NURBS: polipermukaan, jejaring, lengkung, blok dan lapisan, sebagai jejaring, tepi, komponen dan tag. Lihat [Bawa masuk model .3dm](topic:import-3dm-files). |
| 3MF (`.3mf`) | tidak | tidak | ya | Cetakan 3D, dengan warna (dalam milimeter). Dari {{ui:Semak untuk cetakan 3D (STL atau 3MF)…}}: lihat [Sediakan model untuk cetakan 3D](topic:print-3d). |
| IFC (`.ifc`) | tidak | tidak | ya | Program BIM, dan BimCraft. |
| DWG (`.dwg`) | tidak | ya | ya | Pelan tapak atau pelan lantai untuk dimodelkan; menghantar model ke program CAD. |
| DXF (`.dxf`) | tidak | ya | ya | Sama, untuk mana-mana program CAD. |

[Format fail secara terperinci](topic:formats) menyenaraikan dengan tepat apa yang setiap format simpan dan tinggalkan.

## Fail ModelCraft

Fail `.modelcraft` menyimpan keseluruhan model: geometri, kumpulan, komponen, panduan, adegan, unit, serta kamera dan gaya yang anda gunakan semasa menyimpan. Ia tidak menyimpan sejarah buat asal.

### Buka model

1. Klik {{ui:Buka}} dalam kumpulan {{ui:Fail}}, atau tekan {{key:Mod+O}}.
2. Jika model di skrin mempunyai perubahan yang belum disimpan, ModelCraft bertanya: "Model ini mempunyai perubahan yang belum disimpan. Simpan salinan dahulu?" Pilih {{ui:Simpan salinan}}, {{ui:Buang perubahan}} atau {{ui:Batal}}.
3. Pilih fail `.modelcraft`.

Model dibuka dalam unit ia disimpan, dengan kamera yang disimpan bersamanya. Anda juga boleh lepaskan fail `.modelcraft` ke atas paparan 3D, atau klik satu dalam senarai fail terkini pada kad permulaan (pelayar yang boleh membuka semula fail, dan aplikasi desktop).

:::desktop
Dalam aplikasi desktop, klik dua kali fail `.modelcraft` akan membukanya dalam ModelCraft, dan begitu juga **Buka dengan** pada fail Collada, OBJ, glTF, DWG atau DXF (ia diimport ke dalam model baharu).
:::

### Simpan model

Klik {{ui:Simpan}} atau tekan {{key:Mod+S}}. Pelayar memuat turun `<name>.modelcraft`, di mana nama itu ialah fail yang anda buka, atau "Untitled" untuk model baharu.

:::desktop
Dalam aplikasi desktop, {{ui:Simpan}} menulis fail yang anda buka di tempatnya. Model baharu meminta tempat untuk menyimpannya.
:::

- {{ui:Simpan sebagai}} ({{key:Mod+Shift+S}}) menyimpan salinan sebagai fail `.modelcraft` atau sebagai [USD](topic:usd); jika pelayar boleh, ia meminta nama dan tempat. Jika tidak, tukar nama fail yang dimuat turun: simpanan seterusnya selepas anda membuka fail yang dinamakan semula akan menggunakan nama baharu.
- Setiap simpanan ialah muat turun baharu. Bergantung pada tetapan pelayar, ia pergi terus ke folder muat turun anda atau bertanya di mana hendak menyimpan. Jika fail dengan nama itu sudah ada di sana, kebanyakan pelayar menambah nombor, seperti `Untitled (1).modelcraft`.

:::chromium
Untuk memilih folder setiap kali, buka tetapan pelayar, cari "muat turun" dan hidupkan "Tanya di mana hendak simpan setiap fail sebelum memuat turun".
:::

:::firefox
Untuk memilih folder setiap kali, buka **Tetapan**, kemudian **Umum**, dan di bawah "Muat turun" pilih "Sentiasa tanya saya di mana hendak simpan fail".
:::

:::safari
Untuk menukar tempat muat turun pergi, buka **Safari**, kemudian **Tetapan**, kemudian **Umum**, dan tetapkan "Lokasi muat turun fail".
:::

### Mulakan model baharu

Klik {{ui:Baharu}}. Jika ada perubahan yang belum disimpan, ModelCraft bertanya dahulu. Model baharu bermula kosong, dalam unit lokasi anda (kaki dan inci di Amerika Syarikat, milimeter di tempat lain), tanpa adegan.

### Jika pelayar ditutup sebelum anda menyimpan

ModelCraft menyimpan salinan kerja yang belum disimpan dalam pelayar anda beberapa saat selepas setiap perubahan. Salinan ditulis di latar belakang, jadi model besar tidak melambatkan anda semasa ia disimpan. Jika tab atau pelayar ditutup sebelum anda menyimpan, kali seterusnya anda membuka ModelCraft ia bertanya "Pulihkan kerja anda?". Memulihkan akan membuka model seperti sebelumnya, belum disimpan ke fail: simpan untuk menyimpannya. Lihat [Pulihkan kerja anda](common:recover).

### Dari CadCraft: Buka dalam ModelCraft

Dalam aplikasi lukisan CadCraft, **Lihat**, kemudian **Lagi**, kemudian **Buka dalam ModelCraft** menghantar lukisan yang terbuka kepada ModelCraft dalam tab baharu, sebagai DWG. Ia tiba sama seperti DWG yang diimport: garisan di atas tanah, dalam satu kumpulan, sedia untuk dimodelkan. Tiada apa-apa dimuat naik; fail melalui storan pelayar anda sendiri.

## Import

Import menambah fail ke model yang sedang anda buka; ia tidak menggantikannya.

1. Klik {{ui:Import}} dalam kumpulan {{ui:Fail}}, atau lepaskan fail ke atas paparan 3D.
2. Pilih fail SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG atau DXF.

   Fail itu masuk sebagai **satu kumpulan**, dipilih, dan paparan zum untuk menunjukkannya. Bar status menyatakan apa yang masuk, dan menyenaraikan apa-apa yang tidak dapat diimport, seperti "Tidak diimport: 2 tekstur".

3. Untuk bekerja terus pada geometrinya, klik dua kali kumpulan untuk menyunting di dalamnya, atau klik {{ui:Pecahkan}}.

Beberapa perkara yang perlu diketahui:

- **Saiz dan arah atas:** Fail Collada menyatakan unit dan paksi mana yang di atas, dan ModelCraft menukarnya. glTF sentiasa dalam meter. Fail OBJ tidak membawa unit: ModelCraft membacanya sebagai meter, dengan Y ke atas. Jika OBJ masuk 1000 kali terlalu besar atau terlalu kecil, gunakan [Skala](topic:rotate-scale) dengan faktor seperti `0.001` atau `1000`.
- **DWG dan DXF** masuk sebagai garisan (tepi) di atas tanah, bukan sebagai muka. Jika lukisan tidak menyatakan unitnya, dialog bertajuk "Unit lukisan" bertanya apa itu satu unit lukisan. Lihat [Model pada pelan tapak](topic:site-plan).
- **Had:** fail melebihi 300 MB ditolak untuk import, dan melebihi 200 MB untuk dibuka. Fail dengan lebih daripada 2 juta bucu atau muka ditolak kerana terlalu besar. OBJ melebihi 64 MB ditolak sebelum ia dibaca. Fail teks (Collada, OBJ, STL ASCII, teks USD) dibaca sekeping demi sekeping, kira-kira 4 MB, jadi tiada satu blok teks memegang seluruh fail; OBJ 16 MB menggunakan kira-kira 0.5 GB memori semasa ia dibuka dalam ujian kami.

## Eksport

1. Klik {{ui:Eksport}} dalam kumpulan {{ui:Fail}}.
2. Pilih format: {{ui:glTF binari (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL untuk cetakan (.stl, milimeter)}}, {{ui:PLY dengan warna (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC untuk BimCraft (.ifc)}}, {{ui:DWG untuk CAD (.dwg, 2004)}} atau {{ui:DXF untuk CAD (.dxf, R12)}}.

Pelayar memuat turun fail, dinamakan seperti model. Keseluruhan model dieksport, bukan hanya pilihan. Fail glTF, Collada dan OBJ ditulis di latar belakang, jadi ModelCraft terus berfungsi semasa model besar dieksport; muat turun bermula apabila fail sedia. Model kosong tidak dieksport: "Model kosong: lukis sesuatu dahulu." Lihat [Eksport model untuk program lain](topic:export-model).

## Dalam talian dan luar talian

Segala-galanya dalam ModelCraft berjalan pada komputer anda, jadi pemodelan, membuka, menyimpan, mengimport dan mengeksport semuanya berfungsi tanpa sambungan selepas aplikasi dimuatkan.

Untuk membuka ModelCraft tanpa sebarang sambungan, simpan untuk kegunaan luar talian semasa anda dalam talian:

1. Klik {{ui:Simpan untuk luar talian}} di bar aplikasi di bahagian atas.
2. Butang mengira ("Menyimpan 40 daripada 212") semasa ia menyimpan. ModelCraft menyimpan fail sendiri (pembaca DWG antaranya), bantuan ini dan pustaka 3D, jadi ia mungkin mengambil masa.
3. Apabila butang menunjukkan {{ui:Sedia untuk luar talian}}, ModelCraft dibuka dari alamat yang sama tanpa sambungan, dan import DWG juga berfungsi secara luar talian.

Klik {{ui:Sedia untuk luar talian}} kemudian untuk {{ui:Simpan semula (dapatkan versi terkini)}} atau {{ui:Alih keluar salinan luar talian}}. Jika butang menunjukkan {{ui:Tidak dapat menyimpan}}, sesetengah fail tidak dimuat turun: semak sambungan dan klik untuk cuba lagi. {{ui:Luar talian tidak tersedia}} bermaksud tetingkap pelayar ini tidak dapat menyimpan salinan (tetingkap persendirian dan sesetengah komputer terurus). Lihat [Bekerja secara luar talian](common:offline).

Penyimpanan awan belum tersedia. Setiap model berada di tempat anda menyimpannya.

:::offline
Anda luar talian. Anda boleh terus memodel dan menyimpan. Melainkan bar aplikasi menunjukkan {{ui:Sedia untuk luar talian}}, jangan muat semula tab ini sehingga anda kembali dalam talian.
:::

## Aplikasi desktop

:::desktop
Anda menggunakan ModelCraft dalam CadCraft Studio, aplikasi desktop dengan kesemua lapan aplikasi. Fail dibuka dan disimpan di tempat yang anda pilih.
:::

:::web
ModelCraft berjalan dalam pelayar pada Mac, Windows dan Linux, dan dalam CadCraft Studio, aplikasi desktop dengan kesemua lapan aplikasi dalam satu pemasangan, dari getcadcraft.com/download.
:::
