---
title: Buka, simpan, import dan eksport
summary: Fail ModelCraft, apa yang boleh anda bawa masuk dan hantar keluar, di mana fail pergi, dan apa yang berubah luar talian dan antara pelayar.
keywords: buka, simpan, import, eksport, fail, 3dm, skp, pulihkan, simpan automatik, terkini, desktop, buka dalam 3d, serahan, muat turun, fail modelcraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, format, luar talian, simpan sebagai
from: 0b4896d1
---

ModelCraft membaca dan menulis fail pada komputer anda. Tiada apa-apa dimuat naik: fail yang anda buka dibaca dalam pelayar anda, dan fail yang anda simpan ialah muat turun. Lihat [Ke mana fail anda pergi](common:your-files).

## Gambaran format

| Format | Buka | Import | Eksport | Untuk apa |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | ya | tidak | {{ui:Save}} | Fail kerja anda. Menyimpan segalanya. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | ya | ya | {{ui:Save as}}, {{ui:Export}} | Program pemaparan dan pemasangan adegan. USD ModelCraft sendiri menyimpan segalanya. Lihat [Simpan, buka dan eksport USD](topic:usd). |
| SketchUp (`.skp`) | tidak | ya | tidak | Membawa masuk model daripada SketchUp. Mengekalkan kumpulan, komponen, warna, tekstur pada muka, tag dan tepi lembut. Lihat [Bawa masuk model SKP](topic:import-sketchup-files). |
| Collada (`.dae`) | tidak | ya | ya | Bertukar model dengan pemodel 3D lain. Mengekalkan kumpulan, komponen dan warna. |
| OBJ (`.obj`) | tidak | ya | ya | Program pemaparan dan visualisasi. |
| glTF (`.glb`, `.gltf`) | tidak | ya | `.glb` sahaja | Pemapar web, enjin permainan, AR. |
| STL (`.stl`) | tidak | ya | ya | Cetakan 3D (dalam milimeter). |
| PLY (`.ply`) | tidak | ya | ya | Jejaring dengan warna: imbasan, cetakan warna. |
| FBX (`.fbx`) | tidak | ya | tidak | Model daripada program animasi dan permainan (FBX 2011 dan lebih baharu). |
| Alembic (`.abc`) | tidak | ya | tidak | Cache geometri, pada sampel pertamanya. |
| STEP (`.step`, `.stp`) | tidak | ya | tidak | Bahagian daripada pemodel bahagian dan pembekal, sebagai jejaring tertutup pada saiz sebenar. Lihat [Format fail](topic:formats). |
| `.3dm` | tidak | ya | tidak | Model NURBS: polipermukaan, jejaring, lengkung, blok dan lapisan, sebagai jejaring, tepi, komponen dan tag. Lihat [Bawa masuk model .3dm](topic:import-3dm-files). |
| 3MF (`.3mf`) | tidak | tidak | ya | Cetakan 3D, dengan warna (dalam milimeter). Daripada {{ui:Check for 3D printing (STL or 3MF)…}}: lihat [Sediakan model untuk cetakan 3D](topic:print-3d). |
| IFC (`.ifc`) | tidak | tidak | ya | Program BIM, dan BimCraft. |
| DWG (`.dwg`) | tidak | ya | ya | Pelan tapak atau pelan lantai untuk dimodel; menghantar model ke program CAD. |
| DXF (`.dxf`) | tidak | ya | ya | Sama, untuk mana-mana program CAD. |

[Format fail secara terperinci](topic:formats) menyenaraikan dengan tepat apa yang setiap format kekalkan dan tinggalkan.

## Fail ModelCraft

Fail `.modelcraft` mengekalkan keseluruhan model: geometri, kumpulan, komponen, panduan, adegan, unit, serta kamera dan gaya yang anda gunakan semasa menyimpan. Ia tidak mengekalkan sejarah buat asal.

### Buka model

1. Klik {{ui:Open}} dalam kumpulan {{ui:File}}, atau tekan {{key:Mod+O}}.
2. Jika model pada skrin ada perubahan yang belum disimpan, ModelCraft bertanya: "Model ini ada perubahan yang tidak disimpan. Simpan salinan dahulu?" Pilih {{ui:Save a copy}}, {{ui:Discard changes}} atau {{ui:Cancel}}.
3. Pilih fail `.modelcraft`.

Model dibuka dalam unit yang ia disimpan, dengan kamera yang ia disimpan bersama. Anda juga boleh lepaskan fail `.modelcraft` pada paparan 3D, atau klik satu dalam senarai fail terkini pada kad permulaan (pelayar yang boleh membuka semula fail, dan aplikasi desktop).

:::desktop
Dalam aplikasi desktop, klik dua kali fail `.modelcraft` akan membukanya dalam ModelCraft, dan begitu juga dengan **Buka dengan** pada fail Collada, OBJ, glTF, DWG atau DXF (ia diimport ke dalam model baharu).
:::

### Simpan model

Klik {{ui:Save}} atau tekan {{key:Mod+S}}. Pelayar memuat turun `<name>.modelcraft`, dengan nama ialah fail yang anda buka, atau "Untitled" untuk model baharu.

:::desktop
Dalam aplikasi desktop, {{ui:Save}} menulis fail yang anda buka di tempatnya. Model baharu bertanya di mana hendak disimpan.
:::

- {{ui:Save as}} ({{key:Mod+Shift+S}}) menyimpan salinan sebagai fail `.modelcraft` atau sebagai [USD](topic:usd); di mana pelayar boleh, ia meminta nama dan tempat. Jika tidak, namakan semula fail yang dimuat turun: simpanan seterusnya selepas anda membuka fail yang dinamakan semula menggunakan nama baharu.
- Setiap simpanan ialah muat turun baharu. Bergantung pada tetapan pelayar, ia pergi terus ke folder muat turun anda atau bertanya di mana hendak disimpan. Jika fail dengan nama itu sudah ada di situ, kebanyakan pelayar menambah nombor, seperti `Untitled (1).modelcraft`.

:::chromium
Untuk memilih folder setiap kali, buka tetapan pelayar, cari "downloads" dan hidupkan "Ask where to save each file before downloading".
:::

:::firefox
Untuk memilih folder setiap kali, buka **Settings**, kemudian **General**, dan di bawah "Downloads" pilih "Always ask you where to save files".
:::

:::safari
Untuk menukar tempat muat turun, buka **Safari**, kemudian **Settings**, kemudian **General**, dan tetapkan "File download location".
:::

### Mula model baharu

Klik {{ui:New}}. Jika ada perubahan yang belum disimpan, ModelCraft bertanya dahulu. Model baharu bermula kosong, dalam unit tempatan anda (kaki dan inci di Amerika Syarikat, milimeter di tempat lain), tanpa adegan.

### Jika pelayar ditutup sebelum anda menyimpan

ModelCraft menyimpan salinan kerja yang belum disimpan dalam pelayar anda beberapa saat selepas setiap perubahan. Jika tab atau pelayar ditutup sebelum anda menyimpan, kali seterusnya anda membuka ModelCraft ia bertanya "Pulihkan kerja anda?". Memulihkan membuka model seperti sebelumnya, belum disimpan ke fail: simpannya untuk menyimpannya. Lihat [Pulihkan kerja anda](common:recover).

### Daripada CadCraft: Buka dalam ModelCraft

Dalam aplikasi lukisan CadCraft, **{{ui:View}}**, kemudian **{{ui:More}}**, kemudian **Buka dalam ModelCraft** menyerahkan lukisan yang sedang dibuka kepada ModelCraft dalam tab baharu, sebagai DWG. Ia tiba seperti DWG yang diimport: garisan di atas tanah, dalam kumpulan, sedia untuk dimodel. Tiada apa-apa dimuat naik; fail itu melalui storan pelayar anda sendiri.

## Import

Mengimport menambah fail ke model yang anda buka; ia tidak menggantikannya.

1. Klik {{ui:Import}} dalam kumpulan {{ui:File}}, atau lepaskan fail pada paparan 3D.
2. Pilih fail SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG atau DXF.

   Fail itu tiba sebagai **satu kumpulan**, dipilih, dan paparan zum untuk menunjukkannya. Bar status memberitahu apa yang masuk, dan menyenaraikan apa yang tidak dapat diimport, seperti "Tidak diimport: 2 tekstur".

3. Untuk bekerja terus pada geometrinya, klik dua kali kumpulan untuk menyunting di dalamnya, atau klik {{ui:Explode}}.

Beberapa perkara yang perlu diketahui:

- **Saiz dan arah atas:** fail Collada menyatakan unitnya dan paksi mana yang ke atas, dan ModelCraft menukarkannya. glTF sentiasa dalam meter. Fail OBJ tidak membawa unit: ModelCraft membacanya sebagai meter, dengan Y ke atas. Jika OBJ masuk 1000 kali terlalu besar atau terlalu kecil, gunakan [Skala](topic:rotate-scale) dengan faktor seperti `0.001` atau `1000`.
- **DWG dan DXF** masuk sebagai garisan (tepi) di atas tanah, bukan sebagai muka. Jika lukisan tidak menyatakan unitnya, dialog bertajuk "Unit lukisan" bertanya apa itu satu unit lukisan. Lihat [Model pada pelan tapak](topic:site-plan).
- **Had:** fail melebihi 300 MB ditolak untuk diimport, dan melebihi 200 MB untuk dibuka. Fail dengan lebih daripada 2 juta bucu atau muka ditolak kerana terlalu besar.

## Eksport

1. Klik {{ui:Export}} dalam kumpulan {{ui:File}}.
2. Pilih format: {{ui:glTF binary (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL for printing (.stl, millimeters)}}, {{ui:PLY with colours (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC for BimCraft (.ifc)}}, {{ui:DWG for CAD (.dwg, 2004)}} atau {{ui:DXF for CAD (.dxf, R12)}}.

Pelayar memuat turun fail, dinamakan seperti model. Keseluruhan model dieksport, bukan hanya pilihan. Model kosong tidak dieksport: "Model kosong: lukis sesuatu dahulu." Lihat [Eksport model untuk program lain](topic:export-model).

## Dalam talian dan luar talian

Segala-galanya dalam ModelCraft berjalan pada komputer anda, jadi pemodelan, membuka, menyimpan, mengimport dan mengeksport semuanya berfungsi tanpa sambungan selepas aplikasi dimuatkan.

Untuk membuka ModelCraft tanpa sebarang sambungan, simpannya untuk kegunaan luar talian semasa anda dalam talian:

1. Klik {{ui:Save for offline}} dalam bar aplikasi di bahagian atas.
2. Butang itu mengira ("Saving 40 of 212") semasa ia menyimpan. ModelCraft menyimpan fail sendiri (pembaca DWGnya antaranya), bantuan ini dan pustaka 3D, jadi ia boleh mengambil sedikit masa.
3. Apabila butang berbunyi {{ui:Offline ready}}, ModelCraft dibuka dari alamat yang sama tanpa sambungan, dan import DWG berfungsi luar talian juga.

Klik {{ui:Offline ready}} kemudian untuk {{ui:Save again (get the newest version)}} atau {{ui:Remove the offline copy}}. Jika butang berbunyi {{ui:Could not save}}, sesetengah fail tidak dimuat turun: semak sambungan dan klik untuk mencuba semula. {{ui:Offline not available}} bermaksud tetingkap pelayar ini tidak boleh menyimpan salinan (tetingkap persendirian dan sesetengah komputer yang diurus). Lihat [Bekerja luar talian](common:offline).

Penyimpanan awan belum dibina lagi. Setiap model berada di tempat anda menyimpannya.

:::offline
Anda luar talian. Anda boleh terus memodel dan menyimpan. Melainkan bar aplikasi menunjukkan {{ui:Offline ready}}, jangan muat semula tab ini sehingga anda dalam talian semula.
:::

## Aplikasi desktop

:::desktop
Anda menggunakan ModelCraft dalam CadCraft Studio, aplikasi desktop dengan kesemua lapan aplikasi. Fail dibuka dan disimpan di tempat yang anda pilih.
:::

:::web
ModelCraft berjalan dalam pelayar pada Mac, Windows dan Linux, dan dalam CadCraft Studio, aplikasi desktop dengan kesemua lapan aplikasi dalam satu pemasangan, dari getcadcraft.com/download.
:::
