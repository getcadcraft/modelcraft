---
title: Yang baru di 0.7 (sebelumnya)
summary: Mesh dengan modifier, pahat, UV dan objek kurva, path tracing di kartu grafis dan ruang kerja Render, tampilan langsung real-time dengan sebar dan panorama, material node, ruang kerja Animate dengan tulang dan fisika, USD, FBX, STEP, dan berkas .3dm, serta alat cetak dengan gaya Pemula.
keywords: yang baru 0.7, rilis sebelumnya, catatan rilis, changelog, perubahan, 0.7, versi, fitur baru, mesh, mesh, ruang kerja mesh, modifier, subdivisi, lipatan, uv, unwrap, jahitan, kurva, objek kurva, nurbs, bezier, pahat, remesh, retopologi, bagi, perhitungan, path tracing, webgpu, ruang kerja render, antrean render, mp4, exr, denoise, langit fisik, hdri, ies, kedalaman bidang, pencampuran cahaya, kabut, caustics, tampilan langsung, real time, jalan, sebar, panorama, tur, viewer, shading, node, material node, pustaka material, materialx, decal, lukis tekstur, bake, animate, graph editor, klip, shape key, driver, armature, tulang, skinning, ik, constraint, fisika, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, solid 3d, penyangga, tebal dinding, lubangi, perbaiki, pemula, asisten, mesin Anda, satuan, portugis
from: 16d52810
---

Inilah yang berubah di ModelCraft 0.7, dibandingkan dengan 0.6. ModelCraft kini memodelkan mesh serta geometri dorong/tarik, merender di kartu grafis, dan memiliki ruang kerja untuk setiap jenis pekerjaan: pilih di daftar {{ui:Ruang kerja}} di sebelah kiri bilah alat.

## Baru

### Mesh

- **Mesh.** Pilih grup atau komponen lalu klik {{ui:Ubah menjadi mesh}} di {{ui:Info entitas}}: ia menjadi mesh, dengan muka berapa pun jumlah sudutnya yang dapat membawa koordinat tekstur, normal, warna, dan bobot. {{ui:Ubah menjadi geometri}} mengembalikannya. Urungkan pada mesh hanya menyimpan apa yang diubah setiap langkah. Berkas yang berisi mesh memerlukan ModelCraft 0.7 untuk dibuka. Lihat [Mesh](topic:meshes).
- **Ruang kerja Mesh.** Klik dua kali sebuah mesh, atau pilih {{ui:Mesh}} di daftar {{ui:Ruang kerja}}, untuk menyunting titik, tepi, dan mukanya: loop dan cincin, penyuntingan proporsional, extrude, inset, bevel, loop cut, knife, bisect, spin, merge, dissolve, fill, grid fill, bridge dan slide, serta pengaturan operasi terakhir yang dapat diubah setelahnya di panel. Mulai dari bidang, kubus, bola, torus, dan lainnya. Tombol dorong/tarik dan tombol pemodel sama-sama berfungsi. Lihat [Sunting mesh di ruang kerja Mesh](topic:mesh-edit).
- **Modifier.** Cermin, array, permukaan subdivisi, bevel, solidify, boolean, displace, weld, decimate, smooth, lattice, curve deform, dan shrinkwrap mengubah apa yang ditampilkan mesh tanpa mengubah mesh itu sendiri. Tumpuk modifier, nyalakan atau matikan masing-masing untuk tampilan dan untuk render, dan {{ui:Terapkan}} salah satunya saat Anda menginginkannya secara permanen. Lihat [Modifier pada mesh](topic:modifiers).
- **Subdivisi dengan lipatan.** {{ui:Lipatan}} di ruang kerja Mesh menjaga tepi yang dipilih tetap tajam di bawah permukaan subdivisi. Render dapat memakai lebih banyak level daripada tampilan, dan pada mesh besar tampilan menampilkan level yang lebih rendah serta menyatakannya. Lihat [Permukaan subdivisi](topic:modifiers#subdivision-surface).
- **Objek kurva.** Kurva Bézier, NURBS, dan segmen lurus yang membentuk tabung, pita, pengecilan, atau pelat berisi, serta teks sebagai kurva. Sunting titik-titiknya di ruang kerja {{ui:Kurva}}; {{ui:Jadikan mesh}} saat bentuknya sudah benar. Lihat [Objek kurva](topic:curves).
- **Ruang kerja UV.** Tandai jahitan (atau biarkan ModelCraft menandainya di tepi tajam), {{ui:Unwrap}} dan {{ui:Susun}}, atau proyeksikan dengan kotak, silinder, bola, atau tampilan. Editor UV di samping tampilan 3D memindahkan, memutar, dan menskalakan potongan, dan papan catur serta warna regangan menampilkan hasilnya. Lihat [Tata letak UV mesh](topic:uv).
- **Memahat.** Ruang kerja {{ui:Pahat}} memiliki kuas gambar, lempung, haluskan, cengkeram, tiup, lipatan, cubit, ratakan, dan masker, pencerminan melintasi X, serta {{ui:Detail}} yang menambah segitiga di tempat Anda memahat. Tekanan pena menentukan ukuran dan kekuatan kuas. Setiap goresan adalah satu langkah urungkan. Lihat [Pahat mesh](topic:sculpt).
- **Remesh dan retopologi.** {{ui:Buat ulang mesh}} membuat ulang seluruh mesh sebagai segitiga yang rata, menutup lubang dan menyambung potongan yang tumpang tindih. Untuk membangun mesh bersih di atas mesh yang detail, pilih di bawah {{ui:Retopologi}}: titik yang Anda pindahkan mendarat di permukaannya. Lihat [Buat ulang mesh](topic:mesh-edit#remesh).

### Menggambar

- **Bagi tepi atau kurva.** Alat {{ui:Bagi}} menandai potongan saat Anda bergerak di sepanjang tepi dan membaginya dengan klik atau angka yang diketik; dengan tepi, busur, atau lingkaran terpilih, ketik `/5`; {{ui:Info entitas}} › {{ui:Bagi…}} meminta angkanya, untuk tablet. Busur atau lingkaran dibagi dengan sudut yang sama pada busur sebenarnya. Lihat [Bagi tepi atau kurva menjadi bagian yang sama](topic:divide).
- **Perhitungan di kotak nilai.** Ketik `2.5/3`, `12'6"+3/4"`, `(24'-0")/3`, atau `2*450mm` untuk panjang apa pun, dan `90/2` untuk sudut. Perhitungan yang tidak dapat dilakukan akan menyatakan apa yang salah dan di mana. Lihat [Perhitungan](topic:value-box#calculations).

### Render

- **Path tracing di kartu grafis.** {{ui:Render gambar…}} › {{ui:Kualitas tinggi (path tracing)}} menjalankan path tracer milik CadCraft sendiri di kartu grafis tempat peramban memiliki WebGPU; baris di bawah gambar menyatakan mesin mana yang membuatnya. {{ui:Berhenti}} mempertahankan gambar dan {{ui:Lanjutkan}} meneruskan dari sana. Tanpa WebGPU, gambar di-path trace dengan WebGL, seperti sebelumnya. Lihat [Kualitas tinggi](topic:render#high-quality).
- **Render di tampilan.** Ruang kerja {{ui:Render}} men-path trace tampilan itu sendiri dan mulai lagi saat Anda mengorbit atau menyunting: render {{ui:Area}}, klik untuk {{ui:Fokus}}, atur {{ui:Detail}}. Memerlukan WebGPU. Lihat [Render di tampilan](topic:render#render-in-the-view).
- **Material, lampu, dan langit.** Gambar kualitas tinggi memberi bayangan pada setiap permukaan dengan model material OpenPBR (lapisan, bulu halus, film tipis, kaca berwarna, pendar). Dengan WebGPU juga ada {{ui:Langit fisik}} dengan {{ui:Kabut}}, {{ui:Gambar langit (HDRI)}}, dan profil cahaya IES dari pabrikan untuk lampu. Lihat [Langit dan profil cahaya](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **Kamera seperti kamera foto.** Eksposur dari f-stop, rana, dan ISO di setiap mode; dengan WebGPU juga kedalaman bidang, perspektif dua titik, white balance, panorama 360° (juga dalam stereo), dan cube map. Lihat [Kamera](topic:render#the-camera).
- **Selesaikan gambar setelah render.** Berikan gradasi ({{ui:ACES filmic}}, {{ui:AgX}}, {{ui:Filmic}}, atau {{ui:Standar}}, kontras, bloom, silau, vignette, tabel warna `.cube`), campur langit, matahari, dan setiap grup lampu, serta lihat elemen render satu per satu, semuanya tanpa merender ulang. Butiran yang tersisa dibersihkan oleh denoiser di komputer Anda sendiri. Lihat [Selesaikan gambar](topic:render#finish-the-picture) dan [Campur lampu setelah render](topic:render#mix-the-lights-after-the-render).
- **Lebih banyak cara menyimpan render.** PNG 16-bit, EXR multi-lapisan dengan setiap elemen render dan grup lampu, serta berkas render (`.ccrender`) yang dapat dibuka lagi dengan campuran dan gradasinya. Lihat [Simpan gambar](topic:render#save-the-picture).
- **Kabut, asap, dan caustics.** Kabut dan kabut tipis yang diterangi matahari dan lampu, dengan berkas cahaya; satu kolom atau awan asap; caustics di bawah kaca dan cermin; sampling adaptif yang berhenti pada piksel yang sudah bersih. Hanya di kartu grafis. Lihat [Kabut, asap, noise, dan caustics](topic:render#fog-smoke-noise-and-caustics).
- **Antrean render dan MP4.** Tambahkan gambar kualitas tinggi dan seluruh animasi ke {{ui:Antrean render}}; mereka dirender satu per satu dan antrean tetap ada setelah halaman ditutup. Memerlukan WebGPU. Video juga dapat disimpan sebagai MP4 di tempat peramban dapat menulisnya. Lihat [Antrean render](topic:render#the-render-queue) dan [Render video](topic:animation#render-the-video).

### Tampilan langsung dan presentasi

- **Tampilan langsung.** {{ui:Ekspor}} › {{ui:Tampilan langsung}} menampilkan model dalam gaya real-time di samping tampilan, mengikuti setiap suntingan dan kamera: bayangan matahari, material, lampu, dan cahaya yang memantul dari dinding. {{ui:Jalan}} melewatinya, seret {{ui:Waktu}} dan {{ui:Bulan}} untuk menggerakkan matahari, atau pindahkan ke {{ui:Jendela baru}}. Ia memakai WebGPU jika peramban memilikinya, jika tidak WebGL 2. Lihat [Tampilan langsung](topic:live-view).
- **Sebar.** Sebarkan rumput, bunga, batu, pohon, dan orang di atas muka atau dengan kuas, dari tujuh item entourage baru dan sisa pustaka; setelan disimpan dalam berkas. Lihat [Sebarkan tanaman, batu, dan orang](topic:live-view#scatter-plants-rocks-and-people).
- **Bagikan.** Panorama 360°, tur panorama dengan panah di antara titik, penampil mandiri (satu halaman web yang dibuka secara offline dan tidak memuat apa pun dari internet), dan video jalur kamera, semuanya dalam gaya real-time. Lihat [Bagikan](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **VR dengan gaya real-time.** {{ui:Tinjau dalam VR}} menampilkan model dengan material, langit, bayangan matahari, lampu, item yang tersebar, dan cahaya pantulan. Lihat [Tampilannya](topic:vr-review#what-it-looks-like).

### Material

- **Material dibuat dengan node.** Ruang kerja {{ui:Shading}} membangun material milik berkas sebagai grafik node: gambar, noise dan papan catur, sel Voronoi, gelombang, bata, ubin, kayu, marmer, gradien, kotor dan aus tepi, pekerjaan warna, matematika, peta bump dan normal, menjadi material OpenPBR lengkap. Tampilan menunjukkan setiap perubahan sekaligus. Lihat [Buat material dengan node](topic:shading).
- **Pustaka material dan set tekstur Anda sendiri.** Panel Shading mencantumkan material Pustaka: enam belas set tekstur CC0, masing-masing dengan atribusinya. Klik salah satu untuk memakainya, atau seret ke sebuah muka. {{ui:Gambar atau zip…}} atau {{ui:Sebuah folder…}} membuat material dari peta Anda sendiri, ditemukan dari nama berkasnya. Lihat [Material dari pustaka](topic:shading#materials-from-the-library).
- **MaterialX masuk dan keluar.** Ekspor material sebagai MaterialX (OpenPBR Surface atau Standard Surface, tekstur sebagai PNG), dan impor berkas MaterialX beserta gambarnya. Lihat [MaterialX](topic:shading#materialx).
- **Decal dan lukis tekstur.** Tempatkan gambar pada permukaan sebagai decal dengan material tersendiri, dan lukis pada gambar material dengan kuas bulat. Lihat [Decal](topic:shading#decals) dan [Lukis pada tekstur](topic:shading#paint-on-the-texture).
- **Bake tekstur.** Bake ambient occlusion, kelengkungan, pencahayaan, dan normal objek yang detail menjadi gambar sepanjang UV mesh, di inti prosesor komputer. Lihat [Bake tekstur](topic:shading#bake-textures).

### Animasi

- **Ruang kerja Animate.** Beri keyframe pada posisi, putaran, dan ukuran objek, kecerahan, sebaran, dan warna setiap lampu, serta sudut lensa, langsung di panel. Garis waktu mendapat tampilan {{ui:Kurva}} (handel Bézier, pengulangan) dan tampilan {{ui:Klip}} yang menyimpan keyframe sebagai aksi untuk ditempatkan lagi dan dicampur; keyframe pada beberapa baris dapat dipindahkan, diregangkan, disalin, dan ditempel. Lihat [Animasikan properti apa pun](topic:animate).
- **Shape key dan driver.** Sebuah mesh menyimpan bentuk-bentuk lain dari dirinya sendiri, dicampur oleh penggeser yang dapat diberi keyframe, atau diatur dari nilai lain oleh ekspresi kecil. Lihat [Shape key](topic:animate#shape-keys-morphs) dan [Driver](topic:animate#drivers).
- **Armature.** Pasang tulang di dalam mesh, biarkan {{ui:Bobot otomatis}} membagi titik di antara tulang atau lukis bobotnya, dan atur pose serta beri keyframe pada tulang; skinning linear atau dual quaternion. Lihat [Armature](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK dan constraint.** Reach (IK) dengan kutub, menatap, salin transformasi, batas, anak dari, dan ikuti jalur, untuk tulang dan objek. Lihat [IK dan constraint](topic:animate#ik-and-constraints).
- **Fisika.** Grup dan komponen jatuh, menumpuk, dan bertabrakan sebagai kotak atau bola, dan {{ui:Bake fisika}} menyimpan hasilnya sebagai keyframe. Lihat [Fisika](topic:animate#physics-drop-stack-and-collide).

### Berkas

- **USD.** {{ui:Simpan sebagai}} ({{key:Mod+Shift+S}}) menyimpan model sebagai `.usda`, `.usdc`, atau `.usdz`, dan berkas USD yang disimpan ModelCraft dapat dibuka lagi tanpa ada yang hilang. USD dari program lain dibuka atau diimpor sebagai mesh, grup, komponen, lampu, dan kamera. {{ui:Simpan}} tetap menulis `.modelcraft`. Lihat [Simpan, buka, dan ekspor USD](topic:usd).
- **glTF, lengkap.** Berkas glTF masuk sebagai mesh yang dapat disunting dengan normal, UV, warna titik, dan teksturnya, node sebagai grup, lampu sebagai lampu, dan kamera sebagai scene; berkas Draco dan meshopt juga termasuk; `.gltf` terbuka saat dijatuhkan bersama berkasnya. Ekspor menulis mesh, tekstur, lampu, dan kamera. Lihat [glTF](topic:formats#gltf-glb-gltf).
- **Impor FBX, PLY, STL, dan Alembic.** FBX 2011 dan yang lebih baru (mesh, set UV, material, tekstur tertanam, lampu, kamera), PLY dan STL dengan warnanya, dan cache Alembic pada sampel pertamanya. OBJ masuk dengan `.mtl` dan gambarnya saat Anda menjatuhkannya bersamaan. Lihat [Format berkas secara rinci](topic:formats).
- **Lebih banyak ekspor.** PLY dengan warna, STL dengan warna muka yang dicat, dan OBJ dengan tekstur dalam satu zip. Lihat [Format berkas secara rinci](topic:formats).
- **Berkas STEP.** {{ui:Impor}} membaca bagian dan rakitan STEP (AP203, AP214, AP242) sebagai mesh tertutup pada ukuran sebenarnya, setiap bagian di tempat berkas menempatkannya. Lihat [STEP](topic:formats#step-step-stp).
- **Berkas .3dm.** {{ui:Impor}} membaca model `.3dm`: mesh, polysurface, dan ekstrusi (dari mesh yang tersimpan dalam berkas, jika tidak, di-tesselasi oleh ModelCraft), kurva sebagai tepi, blok sebagai komponen, dan layer sebagai tag. Lihat [Bawa masuk model .3dm](topic:import-3dm-files).
- **Solid 3D dari DWG dan DXF.** Mengimpor gambar kini juga membawa solid 3D, region, dan bodi, masing-masing sebagai grup tersendiri, yang tertutup sebagai solid. Lihat [Model pada denah tapak](topic:site-plan#what-comes-in).

### Pencetakan 3D

- **Alat cetak.** {{ui:Periksa untuk pencetakan 3D (STL atau 3MF)…}} › **Alat cetak** memiliki {{ui:Pratinjau penyangga}} (overhang, kolom, atau penyangga pohon, perkiraan berapa banyak material), {{ui:Tebal dinding}} (dinding terlalu tipis untuk dicetak, didaftarkan dengan {{ui:Tampilkan}}), {{ui:Lubangi}} (dinding dengan tebal yang Anda berikan, dengan lubang drainase), dan {{ui:Perbaiki}} (setiap perbaikan didaftarkan; bagian yang tumpang tindih hanya digabungkan jika Anda memintanya). Lubangi dan Perbaiki menghasilkan grup yang sisi datarnya berupa muka tunggal, atau mesh jika hasilnya tidak akan tertutup atau memiliki terlalu banyak muka; baris status menyatakan yang mana. Lihat [Penyangga, tebal dinding, pelubangan, dan perbaikan](topic:print-tools).
- **Gaya Pemula.** {{ui:Pengaturan}} › {{ui:ModelCraft}} › {{ui:Menu, tombol, dan mouse}} › {{ui:Pemula}}: tombol besar untuk menjatuhkan bentuk dan lubang, memindahkan, menyejajarkan, dan {{ui:Grup}} agar lubang terpotong, lalu periksa model untuk pencetakan. Lihat [Gaya Pemula](topic:beginner).

### Asisten dan mesin Anda

- **Lebih banyak untuk asisten AI.** Asisten kini dapat mencantumkan muka dan material, dorong/tarik, mewarnai, membuat grup, menambah dan menampilkan scene, menambah mesh, menyunting tumpukan modifier, mengekspor USD, merender gambar, dan mengisi antrean render. Lihat [Gunakan ModelCraft dengan asisten AI](topic:use-with-ai-assistants).
- **Mesin Anda.** {{ui:Pengaturan}} › {{ui:ModelCraft}} › {{ui:Render}} › {{ui:Komputer Anda}} menampilkan grafis, inti prosesor, dan memori yang diizinkan peramban ini dipakai aplikasi, serta tingkat yang menentukan di mana tampilan langsung dimulai. Lihat [Apa yang dipakai mesin Anda untuk render](topic:your-machine).

## Diperbaiki

- {{ui:Solid}} › {{ui:Gabungkan}}, {{ui:Kurangi}}, dan {{ui:Irisan}} dapat menghasilkan grup yang tidak tertutup, pada ukuran apa pun. Kini hasilnya tertutup.
- {{ui:Solid}} › {{ui:Kurangi}} berwarna abu-abu saat tidak ada yang dipilih, padahal ia memilih kedua bagiannya secara bergantian setelah Anda memilihnya.
- Di dalam garis waktu animasi, tombol yang diketik tidak ke mana-mana, {{key:Mod+S}} juga. {{key:Mod+Z}} dan {{key:Mod+Y}} di sana adalah urungkan dan ulangi milik garis waktu; tombol {{key:Mod}} lainnya sampai ke aplikasi.

## Di setiap aplikasi

- **Satuan.** {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Satuan}} memiliki satu daftar untuk panjang, luas, volume, sudut, dan kemiringan, dengan ukuran persis yang diberikan definisi satuan (kaki survei AS adalah satuannya sendiri). Matikan satuan yang tidak pernah Anda pakai dan satuan itu keluar dari daftar; beri bintang pada satu dan pekerjaan baru dimulai dengannya. Berkas selalu menyimpan satuannya sendiri. Di ModelCraft, daftar satuan di samping kotak nilai mengikuti sakelar (satuan model selalu tetap ada di dalamnya), bintang mengatur satuan model baru (saat ModelCraft memiliki satuan itu), dan panjang yang diketik dengan tanda satuan apa pun dibaca dalam satuan itu. Lihat [Satuan, nilai yang diketik, dan daftar satuan](common:unit-lists).
- **Tata letak lebih rapat dan panel yang dapat dirapikan.** {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Kepadatan tata letak}} › {{ui:Padat}} memuat lebih banyak di layar (layar sentuh dan ponsel tetap mempertahankan tombol besarnya). Setiap panel samping memiliki bilah judul ramping: seret untuk menambatkan atau membuat panel mengambang, lepaskan di bilah panel lain untuk berbagi satu bingkai sebagai tab, sematkan agar meluncur ke tepi, atau sembunyikan dan kembalikan dari tepi. Lihat [Atur panel](common:arrange-panels#make-the-layout-denser).
- **Dialog dapat dipindahkan.** Seret dialog melalui bilah judulnya agar tidak menghalangi gambar; ia kembali ke tempat Anda meninggalkannya. Klik dua kali bilah judul untuk memusatkannya kembali. Lihat [Pindahkan dialog](common:arrange-panels#move-a-dialog).
- **Resep untuk asisten AI.** Sepuluh permintaan contoh untuk asisten Anda sendiri (merapikan gambar, mencetak set plot, memeriksa gambar, mengajukan pertanyaan tentang model, menjumlahkan takeoff, mencoba varian part…), masing-masing dengan alat yang dipanggilnya dan izin yang dibutuhkannya, serta masing-masing diputar ulang oleh pengujian kami. Aplikasi tidak berisi AI. Lihat [Resep untuk asisten AI](common:assistants-recipes).
- **Bahasa.** **Português (Portugal)** baru di {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Bahasa}}. Ia, **Português (Brasil)**, **Español (México)**, dan **Bahasa Indonesia** kini memiliki setiap kata dari aplikasi, sebagai draf yang belum ditinjau penutur asli. Topik bantuan tetap dalam bahasa Inggris.
- **CadCraft Studio** menyatakan mengapa pemeriksaan pembaruan gagal (belum ada berkas untuk sistem Anda, tidak ada jaringan, tanda tangan tidak valid), bukan hanya "Selesai", dan tidak lagi memunculkan kartu Yang baru yang sudah Anda tutup sampai ada rilis yang lebih baru.

## Belum ada di versi ini

- **0.7 belum ditandatangani kode.** Penandatanganan, dan paket Microsoft Store, dipindahkan ke 0.8 karena validasi sertifikat belum selesai. Periksa SHA-256 di samping setiap berkas di getcadcraft.com/download. Di Windows, jika SmartScreen menghentikan installer, pilih {{ui:Info selengkapnya}}, lalu {{ui:Tetap jalankan}}. Di Mac, pertama kali, klik kanan CadCraft Studio dan pilih {{ui:Buka}}. CadCraft Studio belum ada di toko aplikasi, dan belum ada build iPad atau iPhone.
- Daftar sudut dan kemiringan di {{ui:Satuan}} tersimpan, tetapi belum ada kotak yang membacanya.
- Render di kartu grafis (WebGPU) baru diuji di sini dengan pengganti perangkat lunak saja, belum pada kartu grafis sungguhan, jadi render sesuatu yang kecil di komputer Anda sendiri terlebih dahulu. Hal yang sama berlaku untuk tampilan langsung, dan VR masih diuji hanya dengan emulator headset.
- Tanpa WebGPU tidak ada ruang kerja Render atau antrean render, dan gambar kualitas tinggi tidak memiliki kedalaman bidang, langit fisik, gambar langit, kabut, asap, caustics, atau pencampuran cahaya.
- {{ui:Render gambar…}} belum menggambar item yang tersebar; item itu tampil di tampilan langsung, panoramanya, penampil, dan videonya.
- Lampu beranimasi di tampilan, tetapi video yang dirender memakai lampu seperti keadaannya saat mulai.
- Tulang dan animasi belum dibaca dari atau ditulis ke berkas glTF, FBX, atau USD (model ber-skin masuk dalam keadaan diam, beserta bobotnya), dan material glTF serta FBX di luar warna dasar atau tekstur belum disimpan.
- Warna STEP dan nama bagian rakitan belum dibaca. Impor `.3dm` telah diuji dengan berkas yang ditulis oleh toolkit format tersebut, belum dengan berkas dari program pemodelannya sendiri; objek SubD, teks, dan dimensi tidak disertakan.
- Pustaka tanaman dari CivilCraft ada di ModelCraft, tetapi menempatkan tanaman darinya belum dibuat.
- Melukis tekstur pada muka dorong/tarik berulang mengikuti ubin material; untuk melukis satu muka saja, ubah menjadi mesh dan unwrap.

Hal lainnya ada di [Belum dibuat](topic:not-built-yet).
