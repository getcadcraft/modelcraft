---
title: Apa yang baharu dalam 0.7
summary: Jejaring dengan pengubah suai, pahatan, UV dan objek lengkung, penjejakan laluan pada kad grafik dan ruang kerja Render, paparan langsung masa nyata dengan serakan dan panorama, bahan nod, ruang kerja Animasi dengan tulang dan fizik, fail USD, FBX, STEP dan .3dm, serta alat cetakan dengan gaya Pemula.
keywords: apa yang baharu, nota keluaran, log perubahan, perubahan, 0.7, versi, ciri baharu, jejaring, ruang kerja jejaring, pengubah suai, subdivisi, lipatan, uv, unwrap, jahitan, lengkung, objek lengkung, nurbs, bezier, pahat, remesh, retopologi, bahagi, pengiraan, penjejakan laluan, webgpu, ruang kerja render, giliran render, mp4, exr, nyahbising, langit fizikal, hdri, ies, kedalaman medan, campuran cahaya, kabus, kaustik, paparan langsung, masa nyata, jalan, serakan, panorama, lawatan, pemapar, pembayangan, nod, bahan nod, pustaka bahan, materialx, decal, lukisan tekstur, bakar, animasi, editor graf, klip, kunci bentuk, pemacu, armatur, tulang, kulit, ik, kekangan, fizik, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, pepejal 3d, penyokong, ketebalan dinding, berongga, pembaikan, pemula, pembantu, mesin anda, unit, portugis
from: b9fc43e2
---

Ini ialah apa yang berubah dalam ModelCraft 0.7, berbanding 0.6. ModelCraft kini memodel jejaring serta geometri tolak/tarik, memaparkan pada kad grafik, dan mempunyai ruang kerja untuk setiap jenis kerja: pilihnya dalam senarai {{ui:Workspace}} di sebelah kiri bar alat.

## Baharu

### Jejaring

- **Jejaring.** Pilih kumpulan atau komponen dan klik {{ui:Convert to mesh}} dalam {{ui:Entity info}}: ia menjadi jejaring, dengan muka sebarang bilangan bucu yang boleh membawa koordinat tekstur, normal, warna dan berat. {{ui:Convert to geometry}} memulangkannya. Buat asal pada jejaring hanya mengekalkan apa yang diubah oleh setiap langkah. Fail yang mengandungi jejaring memerlukan ModelCraft 0.7 untuk dibuka. Lihat [Jejaring](topic:meshes).
- **Ruang kerja Jejaring.** Klik dua kali jejaring, atau pilih {{ui:Mesh}} dalam senarai {{ui:Workspace}}, untuk menyunting bucu, tepi dan muka: gelung dan cincin, penyuntingan berkadar, ekstrud, inset, bevel, potongan gelung, pisau, bisect, pusing, gabung, larutkan, isi, isi grid, jambatan dan gelongsor, serta tetapan operasi terakhir yang ditukar kemudian dalam panel. Mulakan daripada satah, kiub, sfera, torus dan lain-lain. Kekunci tolak/tarik dan kekunci pemodel kedua-duanya berfungsi. Lihat [Sunting jejaring dalam ruang kerja Jejaring](topic:mesh-edit).
- **Pengubah suai.** Cermin, tatasusunan, permukaan subdivisi, bevel, pepejalkan, boolean, anjakan, cantum, nyahtumpat, lancarkan, kekisi, ubah bentuk lengkung dan shrinkwrap menukar apa yang ditunjukkan jejaring tanpa mengubahnya. Susunkannya, hidupkan atau matikan setiap satu untuk paparan dan untuk render, dan {{ui:Apply}} satu apabila anda mahukannya secara kekal. Lihat [Pengubah suai pada jejaring](topic:modifiers).
- **Permukaan subdivisi dengan lipatan.** {{ui:Crease}} dalam ruang kerja Jejaring menyimpan tepi terpilih tajam di bawah permukaan subdivisi. Render boleh menggunakan lebih banyak tahap daripada paparan, dan pada jejaring besar paparan menunjukkan tahap yang lebih rendah dan menyatakannya. Lihat [Permukaan subdivisi](topic:modifiers#subdivision-surface).
- **Objek lengkung.** Lengkung Bézier, NURBS dan segmen lurus yang membentuk tiub, jalur, taper atau plat berisi, dan teks sebagai lengkung. Sunting titiknya dalam ruang kerja {{ui:Curve}}; guna {{ui:To mesh}} apabila bentuknya betul. Lihat [Objek lengkung](topic:curves).
- **Ruang kerja UV.** Tanda jahitan (atau biarkan ModelCraft menandanya pada tepi tajam), {{ui:Unwrap}} dan {{ui:Pack}}, atau unjurkan mengikut kotak, silinder, sfera atau pandangan. Editor UV di sebelah paparan 3D menggerakkan, memusing dan menskala kepingan, dan papan semak serta warna regangan menunjukkan hasilnya. Lihat [Susun atur UV jejaring](topic:uv).
- **Pahatan.** Ruang kerja {{ui:Sculpt}} mempunyai berus lukis, tanah liat, lancar, cengkam, kembung, lipatan, cubit, ratakan dan topeng, pencerminan merentasi X, dan {{ui:Detail}} yang menambah segi tiga di tempat anda memahat. Tekanan pen menetapkan saiz dan kekuatan berus. Setiap sapuan ialah satu langkah buat asal. Lihat [Pahat jejaring](topic:sculpt).
- **Remesh dan retopologi.** {{ui:Remesh}} menjadikan semula keseluruhan jejaring sebagai segi tiga sama rata, menutup lubang dan menyambung kepingan yang bertindih. Untuk membina jejaring kemas di atas jejaring terperinci, pilihnya di bawah {{ui:Retopology}}: titik yang anda alihkan akan mendarat pada permukaannya. Lihat [Remesh](topic:mesh-edit#remesh).

### Lukisan

- **Bahagi tepi atau lengkung.** Alat {{ui:Divide}} menandakan potongan semasa anda bergerak sepanjang tepi dan membahagi dengan satu klik atau nombor yang ditaip; dengan tepi, lengkok atau bulatan dipilih, taip `/5`; {{ui:Entity info}} › {{ui:Divide…}} meminta nombor, untuk tablet. Lengkok atau bulatan dibahagi mengikut sudut yang sama pada lengkok sebenar. Lihat [Bahagikan tepi atau lengkung kepada bahagian sama](topic:divide).
- **Pengiraan dalam kotak nilai.** Taip `2.5/3`, `12'6"+3/4"`, `(24'-0")/3` atau `2*450mm` untuk sebarang panjang, dan `90/2` untuk sudut. Pengiraan yang tidak dapat dilakukan menyatakan apa yang salah dan di mana. Lihat [Pengiraan](topic:value-box#calculations).

### Pemaparan

- **Penjejakan laluan pada kad grafik.** {{ui:Render a picture…}} › {{ui:High quality (path traced)}} menjalankan penjejak laluan CadCraft sendiri pada kad grafik di mana pelayar mempunyai WebGPU; baris di bawah gambar memberitahu enjin mana yang menghasilkannya. {{ui:Stop}} menyimpan gambar dan {{ui:Resume}} menyambung dari situ. Tanpa WebGPU, gambar dijejak laluan dengan WebGL, seperti sebelum ini. Lihat [Kualiti tinggi](topic:render#high-quality).
- **Render dalam paparan.** Ruang kerja {{ui:Render}} menjejak laluan paparan itu sendiri dan bermula semula apabila anda mengorbit atau menyunting: render {{ui:Region}}, klik untuk {{ui:Focus}}, tetapkan {{ui:Detail}}. Ia memerlukan WebGPU. Lihat [Render dalam paparan](topic:render#render-in-the-view).
- **Bahan, lampu dan langit.** Gambar kualiti tinggi melorek setiap permukaan dengan model bahan OpenPBR (lapisan, bulu, filem nipis, kaca berwarna, pendarcahaya). Dengan WebGPU juga ada {{ui:Physical sky}} dengan {{ui:Haze}}, {{ui:Sky picture (HDRI)}}, dan profil cahaya IES pengeluar untuk lampu. Lihat [Langit dan profil cahaya](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **Kamera seperti kamera fotograf.** Pendedahan daripada f-stop, pengatup dan ISO dalam setiap mod; dengan WebGPU juga kedalaman medan, perspektif dua titik, imbangan putih, panorama 360° (juga dalam stereo) dan peta kiub. Lihat [Kamera](topic:render#the-camera).
- **Siapkan gambar selepas render.** Gred ia ({{ui:ACES filmic}}, {{ui:AgX}}, {{ui:Filmic}} atau {{ui:Standard}}, kontras, bloom, silau, vignet, jadual warna `.cube`), campurkan langit, matahari dan setiap kumpulan lampu, dan lihat elemen render satu demi satu, semuanya tanpa render semula. Bijirin yang tinggal dibersihkan oleh penyahbising pada komputer anda sendiri. Lihat [Siapkan gambar](topic:render#finish-the-picture) dan [Campurkan lampu selepas render](topic:render#mix-the-lights-after-the-render).
- **Lebih banyak cara menyimpan render.** PNG 16-bit, EXR berbilang lapisan dengan setiap elemen render dan kumpulan lampu, dan fail render (`.ccrender`) yang dibuka semula dengan campuran dan gredannya. Lihat [Simpan gambar](topic:render#save-the-picture).
- **Kabus, asap dan kaustik.** Kabus dan jerebu yang diterangi matahari dan lampu, dengan sinar cahaya; satu tiang asap atau awan; kaustik di bawah kaca dan cermin; pensampelan adaptif yang berhenti pada piksel yang sudah bersih. Hanya pada kad grafik sahaja. Lihat [Kabus, asap, hingar dan kaustik](topic:render#fog-smoke-noise-and-caustics).
- **Giliran render dan MP4.** Tambah gambar kualiti tinggi dan animasi penuh ke {{ui:Render queue}}; ia dirender satu demi satu dan giliran itu kekal walaupun halaman ditutup. Ia memerlukan WebGPU. Video juga boleh disimpan sebagai MP4 di mana pelayar boleh menulisnya. Lihat [Giliran render](topic:render#the-render-queue) dan [Render video](topic:animation#render-the-video).

### Paparan langsung dan persembahan

- **Paparan langsung.** {{ui:Export}} › {{ui:Live view}} menunjukkan model dalam rupa masa nyata di sebelah paparan, mengikuti setiap suntingan dan kamera: bayang matahari, bahan, lampu dan cahaya yang dipantulkan dari dinding. {{ui:Walk}} melaluinya, seret {{ui:Time}} dan {{ui:Month}} untuk menggerakkan matahari, atau alihkannya ke {{ui:New window}}. Ia menggunakan WebGPU di mana pelayar mempunyainya, jika tidak WebGL 2. Lihat [Paparan langsung](topic:live-view).
- **Serakan.** Taburkan rumput, bunga, batu, pokok dan orang ke atas muka atau dengan berus, daripada tujuh item entourage baharu dan selebihnya pustaka; set disimpan dalam fail. Lihat [Serakkan tumbuhan, batu dan orang](topic:live-view#scatter-plants-rocks-and-people).
- **Kongsi.** Panorama 360°, lawatan panorama dengan anak panah antara tempat, pemapar berdiri sendiri (satu halaman web yang dibuka luar talian dan tidak memuat apa-apa dari internet) dan video laluan kamera, semuanya dalam rupa masa nyata. Lihat [Kongsi](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **VR dalam rupa masa nyata.** {{ui:Review in VR}} menunjukkan model dengan bahan, langit, bayang matahari, lampu, item yang diserakkan dan cahaya pantulan. Lihat [Rupanya seperti apa](topic:vr-review#what-it-looks-like).

### Bahan

- **Bahan dibuat dengan nod.** Ruang kerja {{ui:Shading}} membina bahan fail itu sendiri sebagai graf nod: gambar, hingar dan papan dam, sel Voronoi, gelombang, bata, jubin, kayu, marmar, kecerunan, kotoran dan haus tepi, kerja warna, matematik, peta bump dan normal, menjadi bahan OpenPBR penuh. Paparan menunjukkan setiap perubahan serta-merta. Lihat [Buat bahan dengan nod](topic:shading).
- **Pustaka bahan dan set tekstur anda sendiri.** Panel Shading menyenaraikan bahan Pustaka: enam belas set tekstur CC0, setiap satu dikreditkan. Klik satu untuk menggunakannya, atau seret ke muka. {{ui:Pictures or a zip…}} atau {{ui:A folder…}} membuat bahan daripada peta anda sendiri, dikesan melalui nama failnya. Lihat [Bahan daripada pustaka](topic:shading#materials-from-the-library).
- **MaterialX masuk dan keluar.** Eksport bahan sebagai MaterialX (OpenPBR Surface atau Standard Surface, tekstur sebagai PNG), dan import fail MaterialX dengan gambarnya. Lihat [MaterialX](topic:shading#materialx).
- **Decal dan lukisan tekstur.** Letakkan gambar pada permukaan sebagai decal dengan bahan sendiri, dan lukis pada gambar bahan dengan berus bulat. Lihat [Decal](topic:shading#decals) dan [Lukis pada tekstur](topic:shading#paint-on-the-texture).
- **Bakar tekstur.** Bakar oklusi ambien, kelengkungan, pencahayaan dan normal objek terperinci ke dalam gambar sepanjang UV jejaring, pada teras pemproses komputer. Lihat [Bakar tekstur](topic:shading#bake-textures).

### Animasi

- **Ruang kerja Animasi.** Kunci kedudukan, pusingan dan saiz objek, kecerahan setiap lampu, sebarannya dan warnanya, dan sudut kanta, terus dalam panel. Garis masa mendapat paparan {{ui:Curves}} (pemegang Bézier, pengulangan) dan paparan {{ui:Clips}} yang menyimpan kunci sebagai tindakan untuk diletakkan semula dan dicampurkan; kunci pada beberapa baris boleh dialihkan, diregangkan, disalin dan ditampal. Lihat [Animasikan mana-mana sifat](topic:animate).
- **Kunci bentuk dan pemacu.** Jejaring memegang bentuk lain daripada dirinya sendiri, dicampurkan oleh gelangsar yang boleh dikunci, atau ditetapkan daripada nilai lain oleh ungkapan kecil. Lihat [Kunci bentuk](topic:animate#shape-keys-morphs) dan [Pemacu](topic:animate#drivers).
- **Armatur.** Letakkan tulang dalam jejaring, biarkan {{ui:Automatic weights}} berkongsi titik antara mereka atau lukis beratnya, dan pose serta kunci tulang; kulit lelurus atau kulit kuaternion dwi. Lihat [Armatur](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK dan kekangan.** Capaian (IK) dengan kutub, lihat ke, salin transformasi, had, anak kepada dan ikut laluan, untuk tulang dan objek. Lihat [IK dan kekangan](topic:animate#ik-and-constraints).
- **Fizik.** Kumpulan dan komponen jatuh, bertindih dan berlanggar sebagai kotak atau bola, dan {{ui:Bake physics}} menyimpan hasilnya sebagai kunci. Lihat [Fizik](topic:animate#physics-drop-stack-and-collide).

### Fail

- **USD.** {{ui:Save as}} ({{key:Mod+Shift+S}}) menyimpan model sebagai `.usda`, `.usdc` atau `.usdz`, dan fail USD yang ModelCraft simpan dibuka semula tanpa kehilangan apa-apa. USD daripada program lain dibuka atau diimport sebagai jejaring, kumpulan, komponen, lampu dan kamera. {{ui:Save}} masih menulis `.modelcraft`. Lihat [Simpan, buka dan eksport USD](topic:usd).
- **glTF, lengkap.** Fail glTF masuk sebagai jejaring yang boleh disunting dengan normal, UV, warna bucu dan teksturnya, nod sebagai kumpulan, lampu sebagai lampu dan kamera sebagai adegan, termasuk fail Draco dan meshopt; `.gltf` dibuka apabila dilepaskan bersama failnya. Eksport menulis jejaring, tekstur, lampu dan kamera. Lihat [glTF](topic:formats#gltf-glb-gltf).
- **Import FBX, PLY, STL dan Alembic.** FBX 2011 dan lebih baharu (jejaring, set UV, bahan, tekstur terbenam, lampu, kamera), PLY dan STL dengan warnanya, dan cache Alembic pada sampel pertamanya. OBJ masuk dengan `.mtl` dan gambarnya apabila anda melepaskannya bersama. Lihat [Format fail secara terperinci](topic:formats).
- **Lebih banyak eksport.** PLY dengan warna, STL dengan warna muka yang dicat, dan OBJ dengan teksturnya sebagai satu zip. Lihat [Format fail secara terperinci](topic:formats).
- **Fail STEP.** {{ui:Import}} membaca bahagian dan himpunan STEP (AP203, AP214, AP242) sebagai jejaring tertutup pada saiz sebenar, setiap bahagian di tempat fail meletakkannya. Lihat [STEP](topic:formats#step-step-stp).
- **Fail .3dm.** {{ui:Import}} membaca model `.3dm`: jejaring, polipermukaan dan ekstrusi (daripada jejaring yang disimpan dalam fail, atau ditessel oleh ModelCraft), lengkung sebagai tepi, blok sebagai komponen dan lapisan sebagai tag. Lihat [Bawa masuk model .3dm](topic:import-3dm-files).
- **Pepejal 3D daripada DWG dan DXF.** Mengimport lukisan kini membawa masuk pepejal 3D, rantau dan badannya juga, setiap satu sebagai kumpulannya sendiri, dengan yang tertutup sebagai pepejal. Lihat [Model pada pelan tapak](topic:site-plan#what-comes-in).

### Cetakan 3D

- **Alat cetakan.** {{ui:Check for 3D printing (STL or 3MF)…}} › **Alat cetakan** ada {{ui:Supports preview}} (bahagian menjorok, tiang atau sokongan pokok, anggaran berapa banyak bahan), {{ui:Wall thickness}} (dinding yang terlalu nipis untuk dicetak, disenaraikan dengan {{ui:Show}}), {{ui:Hollow}} (dinding dengan ketebalan yang anda berikan, dengan lubang saliran) dan {{ui:Repair}} (setiap pembetulan disenaraikan; bahagian yang bertindih hanya bercantum apabila anda memintanya). {{ui:Hollow}} dan {{ui:Repair}} menghasilkan kumpulan yang sisi rata ialah muka tunggal, atau jejaring apabila hasilnya tidak tertutup atau mempunyai terlalu banyak muka; bar status menyatakan yang mana. Lihat [Sokongan, ketebalan dinding, berongga dan pembaikan](topic:print-tools).

### Pembantu dan mesin anda

- **Lebih banyak untuk pembantu AI.** Pembantu kini boleh menyenaraikan muka dan bahan, tolak/tarik, cat, buat kumpulan, tambah dan tunjuk adegan, tambah jejaring, sunting tindanan pengubah suai, eksport USD, render gambar dan isi giliran render. Lihat [Gunakan ModelCraft dengan pembantu AI](topic:use-with-ai-assistants).
- **Mesin anda.** {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:Rendering}} › {{ui:Your machine}} menunjukkan grafik, teras pemproses dan memori yang dibenarkan pelayar ini untuk aplikasi, dan tahap yang menetapkan di mana paparan langsung bermula. Lihat [Apa mesin anda gunakan untuk render](topic:your-machine).

## Dibaiki

- {{ui:Solids}} › {{ui:Union}}, {{ui:Subtract}} dan {{ui:Intersect}} boleh memulangkan kumpulan yang tidak tertutup, pada apa-apa saiz. Kini ia tertutup.
- {{ui:Solids}} › {{ui:Subtract}} dimalapkan dengan tiada apa-apa dipilih, walaupun ia memilih dua kepingannya secara bergilir selepas anda memilihnya.
- Dalam garis masa animasi, kekunci yang ditaip tidak sampai ke mana-mana, {{key:Mod+S}} juga. {{key:Mod+Z}} dan {{key:Mod+Y}} di sana ialah buat asal dan buat semula garis masa itu sendiri; kekunci {{key:Mod}} yang lain sampai ke aplikasi.

## Dalam setiap aplikasi

- **Unit.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} mempunyai satu senarai setiap satu untuk panjang, luas, isipadu, sudut dan cerun, dengan saiz tepat yang diberikan oleh takrif unit (kaki tinjauan AS ialah unit tersendiri). Matikan unit yang anda tidak pernah gunakan dan ia keluar dari senarai unit; tandakan satu dengan bintang dan kerja baharu bermula dalam unit itu. Fail sentiasa mengekalkan unitnya sendiri. Dalam ModelCraft, senarai unit di sebelah kotak nilai mengikut suis (unit asal model sentiasa kekal dalam senarai), bintang menetapkan unit model baharu (apabila ModelCraft mempunyai unit itu), dan panjang yang ditaip dengan tanda unit mana-mana akan dibaca dalam unit itu. Lihat [Unit, nilai yang ditaip dan senarai unit](common:unit-lists).
- **Susun atur lebih padat dan panel yang kemas sendiri.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} memuatkan lebih banyak pada skrin (skrin sentuh dan telefon mengekalkan butang besarnya). Setiap panel sisi mempunyai bar tajuk nipis: seretnya untuk melekapkan atau menerapungkan panel, lepaskannya pada bar panel lain untuk berkongsi satu bingkai sebagai tab, semat untuk meluncur ke tepi, atau sembunyikannya dan bawanya kembali dari tepi. Lihat [Susun panel](common:arrange-panels#make-the-layout-denser).
- **Dialog boleh dialihkan.** Seret dialog mengikut bar tajuknya keluar dari laluan lukisan; ia kembali ke tempat anda tinggalkannya. Klik dua kali bar tajuk untuk memusatkannya semula. Lihat [Alih dialog](common:arrange-panels#move-a-dialog).
- **Resipi untuk pembantu AI.** Sepuluh permintaan siap untuk pembantu anda sendiri (kemaskan lukisan, plot satu set, semak lukisan, tanya soalan tentang model, jumlahkan pengukuran kuantiti, cuba varian bahagian…), setiap satu dengan alat yang dipanggil dan kebenaran yang diperlukan, dan setiap satu dimainkan semula oleh ujian kami. Apl tidak mengandungi AI. Lihat [Resipi untuk pembantu AI](common:assistants-recipes).
- **Bahasa.** **Português (Portugal)** baharu dalam {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. Ia, **Português (Brasil)**, **Español (México)** dan **Bahasa Indonesia** kini mempunyai setiap perkataan apl, sebagai draf yang belum disemak oleh penutur asli. Topik bantuan masih dalam bahasa Inggeris.
- **CadCraft Studio** memberitahu sebab semakan kemas kini gagal (belum ada fail untuk sistem anda, tiada rangkaian, tandatangan tidak sah) dan bukannya hanya "Selesai", dan berhenti membawa balik kad Perkara baharu yang anda tutup sehingga ada keluaran yang lebih baharu.

## Belum ada dalam versi ini

- **0.7 tidak ditandatangani kod.** Penandatanganan dan pakej Microsoft Store dipindahkan ke 0.8 kerana pengesahan sijil belum selesai. Semak SHA-256 di sebelah setiap fail di getcadcraft.com/download. Pada Windows, jika SmartScreen menghentikan pemasang, pilih {{ui:More info}} (Maklumat lanjut), kemudian {{ui:Run anyway}} (Jalankan juga). Pada Mac, kali pertama, klik kanan CadCraft Studio dan pilih {{ui:Open}}. CadCraft Studio belum ada di kedai aplikasi, dan belum ada binaan iPad atau iPhone.
- Senarai sudut dan cerun dalam {{ui:Units}} disimpan, tetapi belum ada kotak yang membacanya.
- Pemaparan pada kad grafik (WebGPU) hanya diuji di sini dengan pengganti perisian, belum pada kad grafik sebenar, jadi render sesuatu yang kecil pada komputer anda sendiri dahulu. Perkara yang sama berlaku untuk paparan langsung, dan VR baru diuji dengan emulator fon kepala sahaja.
- Tanpa WebGPU tiada ruang kerja Render atau giliran render, dan gambar kualiti tinggi tidak mempunyai kedalaman medan, langit fizikal, gambar langit, kabus, asap, kaustik atau campuran cahaya.
- {{ui:Render a picture…}} belum melukis item yang diserakkan; ia ditunjukkan dalam paparan langsung, panorama, pemapar dan video.
- Lampu beranimasi dalam paparan, tetapi video yang dirender menggunakan lampu seperti keadaannya apabila ia bermula.
- Tulang dan animasi belum dibaca atau ditulis ke fail glTF, FBX atau USD (model berkulit masuk dalam keadaan rehat, dengan beratnya), dan bahan glTF dan FBX selain warna asas atau tekstur belum dikekalkan.
- Warna STEP dan nama bahagian himpunan belum dibaca. Import `.3dm` telah diuji dengan fail yang ditulis oleh toolkit format itu, belum dengan fail daripada program pemodelan itu sendiri; objek SubD, teks dan dimensi ditinggalkan.
- Perpustakaan tumbuhan daripada CivilCraft ada dalam ModelCraft, tetapi meletakkan tumbuhan daripadanya belum dibina.
- Melukis tekstur pada muka tolak/tarik berulang dengan jubin bahan; untuk melukis satu muka sahaja, tukar kepada jejaring dan unwrapnya.

Selebihnya ada dalam [Belum dibina](topic:not-built-yet).
