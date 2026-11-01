---
title: Yang baru di 0.7
summary: Mesh dengan modifier, sculpting, UV dan objek kurva, path tracing di kartu grafis dan ruang kerja Render, tampilan langsung real-time dengan scatter dan panorama, material berbasis node, ruang kerja Animasi dengan tulang dan fisika, berkas USD, FBX, STEP dan .3dm, serta alat cetak dengan gaya Pemula.
keywords: yang baru, apa yang baru, catatan rilis, changelog, perubahan, 0.7, versi, fitur baru, mesh, meshes, ruang kerja mesh, modifier, subdivisi, lipatan, uv, unwrap, seam, kurva, objek kurva, nurbs, bezier, sculpt, remesh, retopologi, bagi, kalkulasi, path tracing, webgpu, ruang kerja render, antrean render, mp4, exr, denoise, langit fisik, hdri, ies, depth of field, pencampuran cahaya, kabut, caustics, tampilan langsung, real time, jalan, scatter, panorama, tur, viewer, shading, node, material node, pustaka material, materialx, decal, lukis tekstur, baking, animasi, graph editor, klip, shape key, driver, armature, tulang, skinning, ik, constraint, fisika, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, solid 3d, penyangga, tebal dinding, lubangi, perbaiki, pemula, asisten, komputer Anda, satuan, portugis
from: b9fc43e2
---

Ini yang berubah di ModelCraft 0.7, dibandingkan dengan 0.6. ModelCraft kini memodelkan mesh sekaligus geometri dorong/tarik, merender di kartu grafis, dan memiliki ruang kerja untuk setiap jenis pekerjaan: pilih di daftar {{ui:Workspace}} di sisi kiri bilah alat.

## Baru

### Mesh

- **Mesh.** Pilih grup atau komponen lalu klik {{ui:Convert to mesh}} di {{ui:Entity info}}: objek itu menjadi mesh, dengan muka yang dapat memiliki jumlah sudut berapa pun, serta dapat membawa koordinat tekstur, normal, warna, dan bobot. {{ui:Convert to geometry}} mengembalikannya. Urungkan pada mesh hanya menyimpan yang diubah oleh tiap langkah. Berkas yang berisi mesh memerlukan ModelCraft 0.7 untuk dibuka. Lihat [Mesh](topic:meshes).
- **Ruang kerja Mesh.** Klik dua kali mesh, atau pilih {{ui:Mesh}} di daftar {{ui:Workspace}}, untuk menyunting verteks, tepi, dan muka: loop dan ring, pengeditan proporsional, ekstrusi, inset, bevel, loop cut, pisau, bisect, putar, gabungkan, larutkan, isi, isi grid, jembatan dan geser, serta pengaturan operasi terakhir yang dapat diubah setelahnya di panel. Mulai dari bidang, kubus, bola, torus, dan lainnya. Tombol dorong/tarik maupun tombol pemodel sama-sama berfungsi. Lihat [Sunting mesh di ruang kerja Mesh](topic:mesh-edit).
- **Modifier.** Cerminan, array, permukaan subdivisi, bevel, solidify, boolean, displace, weld, decimate, smooth, lattice, deformasi kurva, dan shrinkwrap mengubah tampilan mesh tanpa mengubah datanya. Susun modifier, aktifkan atau nonaktifkan untuk tampilan dan untuk render, dan {{ui:Apply}} salah satunya jika Anda ingin permanen. Lihat [Modifier pada mesh](topic:modifiers).
- **Subdivisi dengan lipatan.** {{ui:Crease}} di ruang kerja Mesh menjaga tepi yang dipilih tetap tajam pada permukaan subdivisi. Render dapat memakai level yang lebih banyak daripada tampilan, dan pada mesh besar tampilan memperlihatkan level yang lebih rendah serta memberi tahu Anda. Lihat [Permukaan subdivisi](topic:modifiers#subdivision-surface).
- **Objek kurva.** Kurva Bézier, NURBS, dan segmen lurus yang membentuk tabung, pita, bentuk runcing, atau pelat berisi, serta teks sebagai kurva. Sunting titiknya di ruang kerja {{ui:Curve}}; {{ui:To mesh}} setelah bentuknya sesuai. Lihat [Objek kurva](topic:curves).
- **Ruang kerja UV.** Tandai seam (atau biarkan ModelCraft menandainya pada tepi tajam), {{ui:Unwrap}} dan {{ui:Pack}}, atau proyeksikan dengan kotak, silinder, bola, atau tampilan. Editor UV di samping tampilan 3D menggerakkan, memutar, dan menskala potongan, serta pola kotak dan warna regangan menunjukkan hasilnya. Lihat [Tata letak UV mesh](topic:uv).
- **Sculpting.** Ruang kerja {{ui:Sculpt}} memiliki kuas gambar, tanah liat, haluskan, genggam, tiup, lipatan, cubit, ratakan, dan mask, pencerminan pada sumbu X, serta {{ui:Detail}} yang menambah segitiga di tempat Anda memahat. Tekanan pena menentukan ukuran dan kekuatan kuas. Setiap goresan adalah satu langkah urung. Lihat [Pahat mesh](topic:sculpt).
- **Remesh dan retopologi.** {{ui:Remesh}} membuat ulang seluruh mesh menjadi segitiga yang seragam, menutup lubang, dan menggabungkan bagian yang tumpang tindih. Untuk membuat mesh bersih di atas mesh yang detail, pilih mesh itu di bawah {{ui:Retopology}}: titik yang Anda geser akan menempel di permukaannya. Lihat [Buat ulang mesh](topic:mesh-edit#remesh).

### Gambar

- **Bagi tepi atau kurva.** Alat {{ui:Divide}} menandai potongan saat Anda bergerak di sepanjang tepi dan membaginya dengan klik atau dengan angka yang diketik; dengan tepi, busur, atau lingkaran terpilih, ketik `/5`; {{ui:Entity info}} › {{ui:Divide…}} meminta jumlah bagian, untuk tablet. Busur atau lingkaran dibagi dengan sudut sama pada busur sebenarnya. Lihat [Bagi tepi atau kurva menjadi bagian sama](topic:divide).
- **Kalkulasi di kotak nilai.** Ketik `2.5/3`, `12'6"+3/4"`, `(24'-0")/3`, atau `2*450mm` untuk panjang apa pun, dan `90/2` untuk sudut. Kalkulasi yang tidak dapat dilakukan menjelaskan apa yang salah dan di mana. Lihat [Kalkulasi](topic:value-box#calculations).

### Render

- **Path tracing di kartu grafis.** {{ui:Render a picture…}} › {{ui:High quality (path traced)}} menjalankan path tracer milik CadCraft di kartu grafis jika peramban mendukung WebGPU; garis di bawah gambar menyebutkan mesin yang membuatnya. {{ui:Stop}} menyimpan gambar dan {{ui:Resume}} melanjutkan dari situ. Tanpa WebGPU, gambar tetap di-path-trace dengan WebGL, seperti sebelumnya. Lihat [Kualitas tinggi](topic:render#high-quality).
- **Render di tampilan.** Ruang kerja {{ui:Render}} melakukan path tracing pada tampilan itu sendiri dan memulai ulang saat Anda memutar atau menyunting: render {{ui:Region}}, klik untuk {{ui:Focus}}, atur {{ui:Detail}}. Fitur ini memerlukan WebGPU. Lihat [Render di tampilan](topic:render#render-in-the-view).
- **Material, cahaya, dan langit.** Gambar kualitas tinggi memberi shading pada setiap permukaan dengan model material OpenPBR (lapisan, bulu, lapisan tipis, kaca berwarna, pendaran). Dengan WebGPU juga tersedia {{ui:Physical sky}} dengan {{ui:Haze}}, {{ui:Sky picture (HDRI)}}, dan profil cahaya IES dari produsen untuk lampu. Lihat [Langit dan profil cahaya](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **Kamera seperti kamera foto.** Eksposur dari f-stop, rana, dan ISO di setiap mode; dengan WebGPU juga depth of field, perspektif dua titik, white balance, panorama 360° (termasuk stereo), dan cube map. Lihat [Kamera](topic:render#the-camera).
- **Sempurnakan gambar setelah render.** Atur tonalitasnya ({{ui:ACES filmic}}, {{ui:AgX}}, {{ui:Filmic}}, atau {{ui:Standard}}, kontras, bloom, silau, vignette, tabel warna `.cube`), campur langit, matahari, dan tiap grup lampu, serta lihat elemen render satu per satu, semuanya tanpa merender ulang. Noise yang tersisa dibersihkan oleh denoiser di komputer Anda sendiri. Lihat [Sempurnakan gambar](topic:render#finish-the-picture) dan [Campur cahaya setelah render](topic:render#mix-the-lights-after-the-render).
- **Lebih banyak cara menyimpan render.** PNG 16-bit, EXR multi-layer dengan setiap elemen render dan grup cahaya, serta berkas render (`.ccrender`) yang dapat dibuka kembali dengan campuran dan tonalitasnya. Lihat [Simpan gambar](topic:render#save-the-picture).
- **Kabut tebal, asap, dan kaustik.** Kabut tebal dan kabut yang diterangi matahari dan lampu, dengan sorot cahaya; satu kolom asap atau awan; kaustik di bawah kaca dan cermin; sampling adaptif yang berhenti pada piksel yang sudah bersih. Hanya di kartu grafis. Lihat [Kabut tebal, asap, noise, dan kaustik](topic:render#fog-smoke-noise-and-caustics).
- **Antrean render dan MP4.** Tambahkan gambar kualitas tinggi dan animasi utuh ke {{ui:Render queue}}; semuanya dirender satu per satu dan antrean tetap ada meski halaman ditutup. Fitur ini memerlukan WebGPU. Video juga dapat disimpan sebagai MP4 jika peramban mendukung penulisannya. Lihat [Antrean render](topic:render#the-render-queue) dan [Render video](topic:animation#render-the-video).

### Tampilan langsung dan presentasi

- **Tampilan langsung.** {{ui:Export}} › {{ui:Live view}} menampilkan model dengan tampilan real-time di samping tampilan, mengikuti setiap suntingan dan kamera: bayangan matahari, material, lampu, dan cahaya pantulan dari dinding. {{ui:Walk}} di dalamnya, seret {{ui:Time}} dan {{ui:Month}} untuk menggeser matahari, atau pindahkan ke {{ui:New window}}. Fitur ini menggunakan WebGPU jika peramban mendukungnya, jika tidak WebGL 2. Lihat [Tampilan langsung](topic:live-view).
- **Scatter.** Sebarkan rumput, bunga, batu, pohon, dan orang di atas muka atau dengan kuas, dari tujuh item entourage baru dan sisa pustaka; setnya disimpan di dalam berkas. Lihat [Sebar tanaman, batu, dan orang](topic:live-view#scatter-plants-rocks-and-people).
- **Bagikan.** Panorama 360°, tur panorama dengan panah antar-titik, viewer mandiri (satu halaman web yang dibuka offline dan tidak memuat apa pun dari internet), dan video jalur kamera, semuanya dalam tampilan real-time. Lihat [Bagikan](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **VR dengan tampilan real-time.** {{ui:Review in VR}} menampilkan model dengan material, langit, bayangan matahari, lampu, item scatter, dan cahaya pantulan. Lihat [Tampilannya](topic:vr-review#what-it-looks-like).

### Material

- **Material dibuat dengan node.** Ruang kerja {{ui:Shading}} membangun material milik berkas sebagai grafik node: gambar, noise dan papan catur, sel Voronoi, gelombang, bata, ubin, kayu, marmer, gradien, kotoran dan keausan tepi, pekerjaan warna, matematika, peta bump dan normal, menjadi material OpenPBR lengkap. Tampilan menunjukkan setiap perubahan seketika. Lihat [Buat material dengan node](topic:shading).
- **Pustaka material dan set tekstur Anda sendiri.** Panel Shading mencantumkan material dari Library: enam belas set tekstur CC0, masing-masing dengan kredit. Klik salah satu untuk memakainya, atau seret ke sebuah muka. {{ui:Pictures or a zip…}} atau {{ui:A folder…}} membuat material dari peta Anda sendiri, dikenali dari nama berkasnya. Lihat [Material dari pustaka](topic:shading#materials-from-the-library).
- **MaterialX masuk dan keluar.** Ekspor material sebagai MaterialX (OpenPBR Surface atau Standard Surface, tekstur sebagai PNG), dan impor berkas MaterialX beserta gambarnya. Lihat [MaterialX](topic:shading#materialx).
- **Decal dan lukis tekstur.** Tempatkan gambar pada sebuah permukaan sebagai decal dengan material tersendiri, dan lukis di atas gambar material dengan kuas bulat. Lihat [Decal](topic:shading#decals) dan [Lukis di tekstur](topic:shading#paint-on-the-texture).
- **Bake tekstur.** Bake ambient occlusion, kelengkungan, pencahayaan, dan normal objek detail menjadi gambar mengikuti UV mesh, dengan inti prosesor komputer. Lihat [Bake tekstur](topic:shading#bake-textures).

### Animasi

- **Ruang kerja Animasi.** Beri keyframe pada posisi, rotasi, dan ukuran objek, kecerahan setiap lampu, sebarannya dan warnanya, serta sudut lensa, langsung di panel. Timeline mendapat tampilan {{ui:Curves}} (gagang Bézier, pengulangan) dan tampilan {{ui:Clips}} yang menyimpan keyframe sebagai aksi untuk ditempatkan kembali dan dicampur; keyframe pada beberapa baris dapat dipindahkan, direntangkan, disalin, dan ditempel. Lihat [Animasikan properti apa pun](topic:animate).
- **Shape key dan driver.** Mesh menyimpan bentuk lain dari dirinya sendiri, dicampur oleh slider yang dapat diberi keyframe, atau diatur dari nilai lain dengan ekspresi kecil. Lihat [Shape key](topic:animate#shape-keys-morphs) dan [Driver](topic:animate#drivers).
- **Armature.** Pasang tulang pada mesh, biarkan {{ui:Automatic weights}} membagi verteks di antara tulang atau cat bobotnya, lalu atur pose dan beri keyframe pada tulang; skinning linear atau dual quaternion. Lihat [Armature](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK dan constraint.** Jangkauan (IK) dengan kutub, arahkan ke, salin transformasi, batas, child of, dan ikuti jalur, untuk tulang dan objek. Lihat [IK dan constraint](topic:animate#ik-and-constraints).
- **Fisika.** Grup dan komponen jatuh, bertumpuk, dan bertabrakan sebagai kotak atau bola, dan {{ui:Bake physics}} menyimpan hasilnya sebagai keyframe. Lihat [Fisika](topic:animate#physics-drop-stack-and-collide).

### Berkas

- **USD.** {{ui:Save as}} ({{key:Mod+Shift+S}}) menyimpan model sebagai `.usda`, `.usdc`, atau `.usdz`, dan berkas USD yang disimpan ModelCraft dapat dibuka kembali tanpa kehilangan apa pun. USD dari program lain dibuka atau diimpor sebagai mesh, grup, komponen, lampu, dan kamera. {{ui:Save}} tetap menulis `.modelcraft`. Lihat [Simpan, buka, dan ekspor USD](topic:usd).
- **glTF, lengkap.** Berkas glTF masuk sebagai mesh yang dapat disunting dengan normal, UV, warna verteks, dan tekstur, node sebagai grup, lampu sebagai lampu, dan kamera sebagai scene; berkas Draco dan meshopt juga didukung; `.gltf` dapat dibuka jika diseret bersama berkas pendukungnya. Ekspor menulis mesh, tekstur, lampu, dan kamera. Lihat [glTF](topic:formats#gltf-glb-gltf).
- **Impor FBX, PLY, STL, dan Alembic.** FBX 2011 ke atas (mesh, set UV, material, tekstur tertanam, lampu, kamera), PLY dan STL dengan warnanya, serta cache Alembic pada sampel pertamanya. OBJ masuk beserta `.mtl` dan gambarnya jika Anda menyeretnya bersama-sama. Lihat [Format berkas secara rinci](topic:formats).
- **Lebih banyak ekspor.** PLY dengan warna, STL dengan warna muka yang dicat, dan OBJ dengan teksturnya dalam satu zip. Lihat [Format berkas secara rinci](topic:formats).
- **Berkas STEP.** {{ui:Import}} membaca bagian dan rakitan STEP (AP203, AP214, AP242) sebagai mesh tertutup dengan ukuran sebenarnya, setiap bagian di tempat yang ditentukan berkas. Lihat [STEP](topic:formats#step-step-stp).
- **Berkas .3dm.** {{ui:Import}} membaca model `.3dm`: mesh, polysurface, dan ekstrusi (dari mesh yang disimpan dalam berkas, atau di-tessellate oleh ModelCraft), kurva sebagai tepi, blok sebagai komponen, dan layer sebagai tag. Lihat [Impor model .3dm](topic:import-3dm-files).
- **Solid 3D dari DWG dan DXF.** Mengimpor gambar kini juga membawa solid 3D, region, dan badan, masing-masing sebagai grup tersendiri, dan yang tertutup sebagai solid. Lihat [Model pada denah tapak](topic:site-plan#what-comes-in).

### Pencetakan 3D

- **Alat cetak.** {{ui:Check for 3D printing (STL or 3MF)…}} › **Print tools** memiliki {{ui:Supports preview}} (overhang, kolom atau penyangga pohon, perkiraan jumlah material), {{ui:Wall thickness}} (dinding yang terlalu tipis untuk dicetak, didaftar dengan {{ui:Show}}), {{ui:Hollow}} (dinding dengan tebal yang Anda tentukan, dengan lubang drainase), dan {{ui:Repair}} (setiap perbaikan didaftar; bagian yang tumpang tindih hanya bergabung jika Anda memintanya). Hollow dan Repair menghasilkan grup yang sisi datarnya berupa satu muka, atau mesh jika hasilnya tidak tertutup atau memiliki terlalu banyak muka; baris status menyebutkan yang mana. Lihat [Penyangga, tebal dinding, pelubangan, dan perbaikan](topic:print-tools).
- **Gaya Pemula.** {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:Menus, keys and mouse}} › {{ui:Beginner}}: tombol besar untuk menjatuhkan bentuk dan lubang, memindahkan, meratakan, dan {{ui:Group}} agar lubang terpotong, lalu periksa model untuk dicetak. Lihat [Gaya Pemula](topic:beginner).

### Asisten dan komputer Anda

- **Lebih banyak untuk asisten AI.** Asisten kini dapat mencantumkan muka dan material, dorong/tarik, mengecat, membuat grup, menambah dan menampilkan scene, menambah mesh, menyunting tumpukan modifier, mengekspor USD, merender gambar, dan mengisi antrean render. Lihat [Gunakan ModelCraft dengan asisten AI](topic:use-with-ai-assistants).
- **Komputer Anda.** {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:Rendering}} › {{ui:Your machine}} menampilkan grafis, inti prosesor, dan memori yang boleh digunakan aplikasi di peramban ini, serta tingkat yang menentukan di mana tampilan langsung dimulai. Lihat [Render dengan komputer Anda](topic:your-machine).

## Diperbaiki

- {{ui:Solids}} › {{ui:Union}}, {{ui:Subtract}}, dan {{ui:Intersect}} dapat menghasilkan grup yang tidak tertutup, pada ukuran apa pun. Kini sudah tertutup.
- {{ui:Solids}} › {{ui:Subtract}} tidak aktif saat tidak ada yang dipilih, padahal setelah Anda memilihnya, perintah ini memilih dua bagiannya secara bergantian.
- Di dalam timeline animasi, tombol yang diketik tidak sampai ke mana pun, termasuk {{key:Mod+S}}. {{key:Mod+Z}} dan {{key:Mod+Y}} di sana adalah urung dan ulang milik timeline; tombol {{key:Mod}} lainnya sampai ke aplikasi.

## Di setiap aplikasi

- **Satuan.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} memiliki satu daftar untuk panjang, luas, volume, sudut, dan kemiringan, dengan ukuran persis sesuai definisi satuan (US survey foot adalah satuan tersendiri). Matikan satuan yang tidak pernah Anda pakai dan satuan itu keluar dari daftar; beri bintang satu dan pekerjaan baru dimulai dengannya. Berkas selalu menyimpan satuannya sendiri. Di ModelCraft, daftar satuan di samping kotak nilai mengikuti sakelar (satuan model selalu tetap ada), bintang menentukan satuan model baru (jika ModelCraft memiliki satuan itu), dan panjang yang diketik dengan tanda satuan apa pun dibaca dalam satuan tersebut. Lihat [Satuan, nilai yang diketik, dan daftar satuan](common:unit-lists).
- **Tata letak lebih rapat dan panel yang dapat dirapikan.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} memuat lebih banyak di layar (layar sentuh dan ponsel tetap memakai tombol besarnya). Setiap panel samping memiliki bilah judul yang ramping: seret untuk menambatkan atau membuat panel mengambang, lepaskan di bilah panel lain untuk berbagi satu bingkai sebagai tab, sematkan agar meluncur ke tepi, atau sembunyikan dan panggil kembali dari tepi. Lihat [Atur panel](common:arrange-panels#make-the-layout-denser).
- **Dialog dapat dipindahkan.** Seret dialog melalui bilah judulnya agar tidak menghalangi gambar; dialog akan kembali ke tempat Anda meninggalkannya. Klik dua kali bilah judul untuk memusatkannya lagi. Lihat [Pindahkan dialog](common:arrange-panels#move-a-dialog).
- **Resep untuk asisten AI.** Sepuluh permintaan contoh untuk asisten Anda sendiri (merapikan gambar, mencetak satu set, memeriksa gambar, bertanya tentang model, menjumlahkan takeoff, mencoba varian bagian, dan lainnya), masing-masing dengan alat yang dipanggilnya dan izin yang dibutuhkannya, serta diputar ulang oleh pengujian kami. Aplikasi tidak mengandung AI apa pun. Lihat [Resep untuk asisten AI](common:assistants-recipes).
- **Bahasa.** **Português (Portugal)** baru di {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. Bahasa itu, **Português (Brasil)**, **Español (México)**, dan **Bahasa Indonesia** kini memiliki seluruh kata di aplikasi, sebagai draf yang belum ditinjau penutur asli. Topik bantuan masih dalam bahasa Inggris.
- **CadCraft Studio** menjelaskan mengapa pemeriksaan pembaruan gagal (belum ada berkas untuk sistem Anda, tidak ada jaringan, tanda tangan tidak valid), alih-alih hanya "Done", dan tidak lagi memunculkan kembali kartu Yang baru yang sudah Anda tutup sampai ada rilis yang lebih baru.

## Belum ada di versi ini

- **0.7 belum ditandatangani kodenya.** Penandatanganan, dan paket Microsoft Store, dipindahkan ke 0.8 karena validasi sertifikat belum selesai. Periksa SHA-256 di samping setiap berkas di getcadcraft.com/download. Di Windows, jika SmartScreen menghentikan penginstal, pilih {{ui:More info}}, lalu {{ui:Run anyway}}. Di Mac, untuk pertama kali, klik kanan CadCraft Studio dan pilih {{ui:Open}}. CadCraft Studio belum ada di toko aplikasi, dan belum ada versi iPad maupun iPhone.
- Daftar sudut dan kemiringan di {{ui:Units}} tersimpan, tetapi belum ada kotak yang membacanya.
- Render di kartu grafis (WebGPU) baru diuji di sini dengan stand-in perangkat lunak, belum di kartu grafis sungguhan, jadi render sesuatu yang kecil di komputer Anda terlebih dahulu. Hal yang sama berlaku untuk tampilan langsung, dan VR baru diuji dengan emulator headset.
- Tanpa WebGPU tidak ada ruang kerja Render atau antrean render, dan gambar kualitas tinggi tidak memiliki depth of field, langit fisik, gambar langit, kabut tebal, asap, kaustik, atau pencampuran cahaya.
- {{ui:Render a picture…}} belum menggambar item scatter; item itu tampil di tampilan langsung, panoramanya, viewer, dan videonya.
- Lampu bergerak di tampilan, tetapi video render menggunakan lampu seperti keadaannya saat mulai.
- Tulang dan animasi belum dibaca atau ditulis ke berkas glTF, FBX, atau USD (model yang di-skin masuk dalam posisi diam, dengan bobotnya), dan material glTF serta FBX di luar warna dasar atau tekstur belum dipertahankan.
- Warna STEP dan nama bagian rakitan belum dibaca. Impor `.3dm` diuji dengan berkas yang ditulis oleh toolkit format itu, belum dengan berkas dari program pemodelan itu sendiri; objek SubD, teks, dan dimensi tidak disertakan.
- Pustaka tanaman dari CivilCraft ada di ModelCraft, tetapi menempatkan tanaman dari pustaka itu belum dibuat.
- Mengecat tekstur pada muka dorong/tarik akan berulang mengikuti ubin material; untuk mengecat satu muka saja, ubah menjadi mesh lalu unwrap.

Hal lainnya ada di [Belum dibuat](topic:not-built-yet).
