---
title: Render gambar model
summary: Buat gambar yang tampak seperti cahaya siang: langit, matahari dari lokasi dan tanggal model Anda, bayangan lembut, tampilan kaca dan logam, lalu simpan sebagai PNG.
keywords: render, preset, presets, preset scene, interior, eksterior, tampilan potongan, malam, satu klik, rendering, path tracing, path traced, ray tracing, global illumination, pantulan, refraksi, kualitas tinggi, foto, fotorealistik, realistis, gambar, image, png, diam, langit, matahari, bayangan, bayangan lembut, ambient occlusion, kaca, logam, mengilap, material, eksposur, kecerahan, mendung, senja, studio, presentasi, kabut, haze, kabut tipis, asap, awan, volume, berkas cahaya, god rays, kaustik, sampel adaptif, derau
from: 517ba4d3
---

{{ui:Render gambar…}} membuat gambar tampilan yang terlihat seperti cahaya siang, bukan seperti gambar garis: langit, matahari sesuai lokasi dan tanggal model Anda, bayangan lembut, cahaya dari seluruh langit yang menggelapkan sudut dan celah, serta warna yang bisa tampak seperti kaca, logam, atau cat mengilap. Model tidak diubah.

## Render tampilan

1. Atur tampilan sesuai keinginan gambar: orbit, zoom, pilih [scene](topic:scenes), sembunyikan yang tidak seharusnya tampil. Gambar memakai kamera tampilan itu sendiri.
2. Klik {{ui:Ekspor}} di grup {{ui:File}}, lalu {{ui:Render gambar…}}.
3. Pilih {{ui:Scene}} jika yang ditekan bukan yang Anda inginkan (lihat [Preset scene](topic:render#scene-presets-a-good-picture-in-one-click)), pilih {{ui:Ukuran}}, lalu klik {{ui:Render}}.

   Gambar terisi saat dirender dan makin halus pada setiap pass. {{ui:Berhenti}} (atau {{key:Esc}}) mengakhirinya lebih awal dan menyimpan gambar sejauh itu.

4. Klik {{ui:Simpan}} untuk mengunduhnya (PNG, kecuali {{ui:Simpan sebagai}} menyatakan lain).

:::tip
Mulai dengan {{ui:Draf}} pada {{ui:Ukuran tampilan}} untuk memeriksa kamera dan tampilannya, lalu render {{ui:Baik}} atau {{ui:Terbaik}} dengan ukuran lebih besar untuk gambar akhir.
:::

## Preset scene: gambar bagus dalam satu klik

Bagian atas dialog memiliki empat tombol {{ui:Scene}}. Setiap tombol mengatur langit, kecerahan, tanah, garis tepi, kualitas, dan matahari sekaligus, jadi tidak ada yang perlu dipelajari sebelum gambar pertama. Klik salah satu, lalu {{ui:Render}}.

| Scene | Yang diatur | Gunakan untuk |
|---|---|---|
| {{ui:Eksterior}} | Langit cerah, matahari milik model, tanah aktif | Bangunan dari luar |
| {{ui:Interior}} | Langit mendung (cahaya merata, tanpa bercak matahari keras), setengah stop lebih terang | Tampilan dari dalam ruangan |
| {{ui:Tampilan potongan}} | Studio putih, tanpa tanah, garis tepi pada render cepat | Model yang dipotong dengan potongan |
| {{ui:Malam}} | Matahari terbenam (tengah malam di pertengahan musim dingin untuk belahan bumi lokasi), satu stop lebih terang | Lampu yang menerangi model. Tanpa lampu, gambar akan gelap |

- {{ui:Pilih untuk tampilan ini}} memilih untuk Anda: {{ui:Tampilan potongan}} saat potongan aktif, {{ui:Interior}} saat kamera berada di dalam model, selain itu {{ui:Eksterior}}. Pertama kali Anda membuka dialog, pilihan ini langsung aktif dengan sendirinya.
- Setiap pengaturan di bawah tetap dapat diubah. Setelah Anda mengubah satu, scene tidak lagi ditekan, dan baris di bawah tombol menyatakan bahwa pengaturannya milik Anda. Klik scene lagi untuk mengembalikan nilainya.
- Scene tidak mengubah mesin, mode, ukuran, material, kamera, atau lampu.

:::note
Scene memberi nilai yang sama di ModelCraft dan BimCraft. Tampilan akhir gambar bergantung pada model dan kartu grafis Anda.
:::

## Pengaturan

| Pengaturan | Fungsinya |
|---|---|
| {{ui:Ukuran}} | Ukuran tampilan, dua kali ukuran tampilan, Full HD, 4K, atau persegi. Ukuran tetap menjaga kamera tampilan dan memperlihatkan lebih sedikit atau lebih banyak di sisinya |
| {{ui:Mode}} | {{ui:Cepat}}, atau {{ui:Kualitas tinggi (path traced)}} (di bawah) dengan {{ui:Batas waktu}}-nya |
| {{ui:Kualitas}} | Berapa banyak pass (atau, pada kualitas tinggi, sampel) yang dirata-ratakan: {{ui:Draf}} 16, {{ui:Baik}} 64, {{ui:Terbaik}} 256. Lebih banyak pass memberi bayangan dan tepi yang lebih halus, tetapi lebih lama |
| {{ui:Biru langit}} | {{ui:Langit cerah}}, {{ui:Mendung}} (cahaya lembut, bayangan samar), {{ui:Senja}} (cahaya rendah dan hangat), atau {{ui:Studio putih}} (latar putih polos) |
| {{ui:Matahari}} | Matahari berasal dari tanggal, waktu, dan lokasi di {{ui:Gaya}} › matahari. Centang {{ui:Gunakan tanggal dan waktu lain untuk gambar ini}} untuk mencoba waktu lain tanpa mengubah gaya model |
| {{ui:Kecerahan}} | Lebih terang atau lebih gelap, dalam langkah (stop) |
| {{ui:Tanah di bawah model}} | Tanah yang menerima bayangan dan memudar ke cakrawala. Matikan untuk model yang melayang |
| {{ui:Gambar tepi}} | Menggambar tepi model dengan tipis di atas gambar, untuk tampilan gambar garis |

Ketika matahari berada di bawah cakrawala pada waktu yang dipilih, itu malam: langit menjadi gelap dan [lampu](topic:lights) model menyinarinya. Dialog memberitahukan hal ini.

Pengaturan disimpan di file `.modelcraft`, sehingga gambar berikutnya dari model yang sama dimulai dari tempat Anda berhenti.

## Buat warna tampak seperti kaca atau logam

Di bawah {{ui:Material}}, setiap warna di layar memiliki tampilan: {{ui:Doff}}, {{ui:Satin}}, {{ui:Mengilap}}, {{ui:Logam}}, {{ui:Logam dipoles}}, {{ui:Kaca}}, atau {{ui:Kaca buram}}. {{ui:Muka yang tidak dicat}} adalah muka yang tidak memiliki warna sendiri.

Untuk membuat jendela menjadi kaca, [cat](topic:paint) bidang jendela dengan satu warna, lalu atur warna itu ke {{ui:Kaca}}. Kaca membiarkan langit dan apa yang ada di belakangnya tampak, diwarnai oleh warnanya, dan memantulkan langit.

:::note
Pada mode {{ui:Cepat}}, kaca dan logam memantulkan langit, bukan bagian model lainnya, dan cahaya tidak dibelokkan melalui kaca. Mode {{ui:Kualitas tinggi (path traced)}} di bawah melakukan keduanya.
:::

## Kualitas tinggi

Pilih {{ui:Mode}} › {{ui:Kualitas tinggi (path traced)}} untuk gambar yang mengikuti cahaya seperti yang dilihat kamera:

- cahaya memantul antar permukaan, sehingga ruangan yang diterangi lewat jendela, atau oleh lampu, terang di semua sisi dan warna merembes ke tetangganya;
- kaca adalah kaca sungguhan: cahaya dibelokkan melaluinya dan kaca memantulkan model;
- logam dan permukaan yang dipoles memantulkan bagian lain dari model;
- panel cahaya menyala seperti panel, dengan bayangan lembut.

Jauh lebih lambat daripada {{ui:Cepat}}: setiap pass melacak cahaya setiap piksel lagi. Gambar awalnya berbintik dan menjadi jernih seiring sampel bertambah, maka mulailah dengan kecil ({{ui:Ukuran tampilan}}, {{ui:Draf}}) dan pilih {{ui:Batas waktu}}: saat habis, gambar sejauh itu disimpan. {{ui:Berhenti}} juga menyimpannya. Pass pertama menunggu selagi peramban menyiapkan path tracer.

Jika peramban memiliki WebGPU, path tracer adalah milik CadCraft sendiri dan berjalan di kartu grafis; baris di bawah gambar menyatakan {{ui:Path traced di kartu grafis (WebGPU)}}. Setelah {{ui:Berhenti}} atau batas waktu, {{ui:Lanjutkan}} melanjutkan gambar yang sama sampai semua sampelnya terkumpul; mengubah pengaturan atau menekan {{ui:Render}} lagi memulai dari awal. Tanpa WebGPU, gambar di-path trace dengan WebGL (baris akan menyatakannya) dan {{ui:Lanjutkan}} tidak ditawarkan.

:::linux
Firefox dan sebagian besar setup Chrome di Linux belum memiliki WebGPU, sehingga kualitas tinggi di sana memakai WebGL.
:::

Pada mode ini tepi tidak digambar, tekstur pustaka menampilkan warna dan kekasaran tetapi tidak tonjolannya ([material yang dibuat dengan node](topic:shading#in-high-quality-pictures) menampilkan normal dan tonjolannya), dan potongan dibuat pada model sebelum gambar dimulai.

{{ui:Denoise (menghilangkan butiran yang tersisa setelah sampel)}} aktif secara default: ketika gambar selesai, atau dihentikan, butiran yang tersisa dihilangkan oleh jaringan saraf yang dibuat untuk ini (jaringan Intel Open Image Denoise yang dipublikasikan, dijalankan di komputer Anda sendiri: di kartu grafis, jika tidak ada, di prosesor). Gambar dengan sedikit sampel hasilnya bersih; {{ui:Tampilkan}} › {{ui:Gambar sebelum denoise}} menampilkannya seperti hasil render.

## Render di dalam tampilan

Ruang kerja {{ui:Render}} menjalankan path tracer di dalam tampilan itu sendiri: orbit, sunting model, atau ubah lampu, dan ia langsung mulai lagi. {{ui:Area}}: seret persegi panjang dan hanya itu yang dirender; {{ui:Seluruh tampilan}} kembali. {{ui:Fokus}}: klik bagian yang harus tajam, dan kedalaman bidang akan fokus di sana. {{ui:Detail}} mengatur berapa banyak piksel tampilan yang dirender (lebih sedikit lebih cepat). {{ui:Jeda}} berhenti dan melanjutkan. Ruang kerja ini membutuhkan WebGPU: tanpanya, ruang kerja akan menyatakannya, dan {{ui:Ekspor}} › {{ui:Render gambar…}} tetap berfungsi.

## Langit dan profil cahaya di kartu grafis

Dengan WebGPU, kualitas tinggi memiliki dua langit tambahan:

- {{ui:Langit fisik}} menghitung cahaya siang dari tinggi matahari: biru tua di atas, pita pucat di cakrawala, dan matahari yang makin hangat dan redup saat rendah. {{ui:Kabut}} bergerak dari hari yang sangat jernih (2) ke hari yang berkabut (10).
- {{ui:Gambar langit (HDRI)}} menyinari model dengan gambar panorama dari tempat nyata. {{ui:Pilih gambar…}} mengambil berkas `.hdr` atau `.exr` equirectangular; {{ui:Putar}} memutarnya mengelilingi model dan {{ui:Kecerahan gambar}} membuatnya lebih terang atau lebih gelap. Gambar itu membawa matahari sendiri, sehingga matahari model tidak ditambahkan. Ia hanya disimpan selama halaman terbuka: setelah dibuka ulang, pilih lagi.

Setiap lampu dalam daftar {{ui:Lampu}} dapat memakai profil cahaya pabrikan: {{ui:Profil IES…}} membaca berkas IES (LM-63) dan lampu lalu memancarkan cahayanya seperti yang dilakukan armatur itu (downlight sempit, wall washer). Setiap lampu dengan nama itu memakainya, dan lampu tetap memiliki kecerahannya sendiri. Klik nama profil untuk berhenti memakainya.

Jendela kaca bening membantu cahaya langit masuk ke dalam ruangan, sehingga gambar dalam ruangan di bawah langit menjadi jernih lebih cepat.

Mode {{ui:Cepat}} dan path tracer WebGL menampilkan {{ui:Langit fisik}} dan {{ui:Gambar langit (HDRI)}} sebagai langit cerah dan mengabaikan profil cahaya.

## Kamera

{{ui:Kamera}} mengatur gambar seperti sebuah foto:

- {{ui:Eksposur}}: pertahankan {{ui:Penggeser kecerahan}}, atau pilih {{ui:Pengaturan kamera}} dan atur {{ui:Bukaan (f-stop)}}, {{ui:Kecepatan rana}} dan {{ui:ISO}} seperti pada kamera; EV di sampingnya adalah nilai eksposur yang biasa. f/16 pada 1/100 s dan ISO 100 cocok untuk hari cerah; adegan yang lebih gelap memerlukan bukaan lebih lebar, rana lebih lambat, atau ISO lebih tinggi. Ini bekerja di setiap mode.
- {{ui:Kedalaman bidang}} mengaburkan apa yang lebih dekat atau lebih jauh dari {{ui:Jarak fokus (m)}}, seperti yang dilakukan lensa dengan f-stop tersebut (biarkan kosong untuk fokus pada apa yang ada di tengah tampilan); {{ui:Bentuk bukaan}} memberi sorotan di luar fokus bentuk bulat atau bersegi.
- {{ui:Perspektif dua titik (garis vertikal tetap vertikal)}} meratakan kamera dan menggeser gambar, seperti lensa tilt-shift arsitektur, sehingga dinding tidak miring saat Anda melihat ke atas atau ke bawah pada bangunan.
- {{ui:Keseimbangan putih}} menentukan warna cahaya mana yang tampak putih: lebih rendah (misalnya 3000 K) untuk cahaya lampu yang hangat, lebih tinggi untuk tempat teduh dan hari mendung.
- {{ui:Proyeksi}}: {{ui:Panorama 360°}} membuat gambar 2:1 dari semua yang ada di sekeliling kamera untuk penampil panorama; {{ui:Panorama stereo 360°}} menumpuk panorama mata kiri dan mata kanan untuk headset; {{ui:Peta kubus (6 sisi)}} membuat enam tampilan persegi dalam kisi 3 × 2. Lebarnya berasal dari {{ui:Ukuran}}.

Proyeksi, kedalaman bidang, perspektif dua titik, dan keseimbangan putih memerlukan path tracer di kartu grafis (WebGPU), jadi hanya tampil di {{ui:Kualitas tinggi}}.

## Selesaikan gambar

{{ui:Gambar}} memberi grading pada gambar kualitas tinggi seperti foto, dan setiap kontrol langsung mengubah gambar jadi tanpa render ulang:

- {{ui:Tampilan warna (transformasi tampilan)}}: {{ui:ACES filmic}} (gambar seperti sebelumnya), {{ui:AgX}} (lebih lembut, menjaga warna pada cahaya yang sangat terang), {{ui:Filmic}} (kurva film yang lembut), atau {{ui:Standar}} (polos, cahaya terang terpotong menjadi putih).
- {{ui:Kontras}} dan {{ui:Kompresi sorotan}} (memunculkan kembali detail di bagian yang sangat terang).
- {{ui:Bloom}} (pendar lembut di sekitar cahaya terang), {{ui:Silau}} dengan {{ui:Garis silau}}-nya (sinar bintang dari titik paling terang) dan {{ui:Vinyet}} (sudut yang lebih gelap).
- {{ui:Tabel warna (.cube)…}} menerapkan grading warna dari berkas `.cube`, dengan {{ui:Kekuatan tabel warna}}-nya; seperti gambar langit, ia hanya disimpan selama halaman terbuka.

## Simpan gambar

{{ui:Simpan sebagai}} di samping {{ui:Simpan}} memilih berkas: {{ui:PNG}}, {{ui:JPEG}}, atau {{ui:WebP}} untuk dibagikan (JPEG dan WebP hanya jika peramban dapat menulisnya), dan setelah render kualitas tinggi di kartu grafis juga:

- {{ui:PNG, 16 bit}}: gambar yang sudah diberi grading dengan langkah yang lebih halus antar nuansa, untuk dicetak atau disunting lebih lanjut.
- {{ui:EXR, semua lapisan (float 32-bit)}}: gambar seperti hasil render (cahaya linear, tanpa grading) dengan setiap elemen render dan grup cahaya sebagai lapisannya sendiri, untuk program kompositing.
- {{ui:Berkas render (.ccrender, untuk diberi grading lagi nanti)}}: semua yang dibutuhkan dialog untuk mencampur dan memberi grading gambar lagi. {{ui:Buka berkas render…}} mengembalikannya, dengan campuran dan grading-nya, tanpa render.

## Campur cahaya setelah render

Aktifkan {{ui:Pencampuran cahaya (ubah warna dan kecerahan tiap lampu setelah render)}} sebelum Anda menekan {{ui:Render}}. Saat gambar selesai (atau dihentikan), {{ui:Campur gambar}} mendaftarkan lampunya dalam grup: langit, matahari, dan lampu menurut nama (setiap lampu dengan nama yang sama adalah satu grup). Matikan sebuah grup, beri warna, atau buat lebih terang atau lebih gelap, dan gambar langsung berubah, tanpa render ulang. {{ui:Simpan campuran}} menyimpan campuran dengan nama untuk dipilih lagi nanti; {{ui:Seperti hasil render}} kembali ke gambar seperti saat dibuat. {{ui:Simpan}} menyimpan gambar campuran.

{{ui:Elemen render (albedo, normal, kedalaman, difus, spekular, transmisi, emisi, ID)}} juga menyimpan bagian-bagian gambar. {{ui:Tampilkan}} mengganti tampilan ke salah satunya: warna permukaan (albedo), normal, kedalaman, cahaya difus, spekular, dan tembus (masing-masing langsung dan tidak langsung), apa yang berpendar dan langit, serta satu warna per objek atau per material untuk membuat masker.

Keduanya menyimpan lapisan tambahan di kartu grafis. Pada ukuran besar, kartu grafis mungkin tidak memiliki ruang; dialog akan memberitahukannya, dan ukuran yang lebih kecil berfungsi.

## Antrean render

Setelah pengaturan kualitas tinggi, {{ui:Tambahkan gambar ini ke antrean}} di bawah {{ui:Antrean render}} menyimpan gambar seperti pengaturan saat ini; {{ui:Tambahkan animasi ini ke antrean}} pada dialog video melakukan hal yang sama untuk seluruh animasi, di-path trace per bingkai. {{ui:Mulai antrean}} merender mereka satu per satu di komputer ini, dan {{ui:Simpan}} di samping setiap yang selesai mengunduhnya. Menutup halaman tidak menghapus antrean: buka model yang sama dan antrean berlanjut dari tempat berhenti. Antrean membutuhkan WebGPU.

## Kabut, asap, derau, dan kaustik

Ini berada di {{ui:Kabut, asap, dan derau}} dan bekerja di {{ui:Kualitas tinggi}} pada kartu grafis; mesin lain tidak menyertakannya.

- {{ui:Kabut dan kabut tipis}} mengisi udara hingga ketinggian tertentu dengan kabut yang disinari matahari, langit, dan lampu. {{ui:Jarak pandang, dalam meter}} mengatur seberapa tebal kabutnya (sekitar 100 m adalah kabut tipis ringan, 20 m kabut tebal), {{ui:Tinggi kabut di atas tanah, dalam meter}} adalah tempat ia berakhir, dan {{ui:Berkas cahaya}} adalah seberapa kuat kabut berpendar ke arah cahaya. Sinar matahari keluar dari kabut di bagian atasnya, sehingga di tempat matahari masuk melalui jendela atau di antara bangunan, Anda melihatnya sebagai berkas cahaya.
- {{ui:Asap atau awan}} menambahkan satu volume asap atau awan yang diterangi seperti kabut. {{ui:Jenis}} adalah {{ui:Awan}}, {{ui:Kolom asap}}, atau {{ui:Dari berkas volume (.ccvol)}}, format grid milik CadCraft sendiri. {{ui:Detail}} dan {{ui:Variasi}} mengubah awan atau kolom yang dibuat, {{ui:Ukuran sisi terpanjangnya, dalam meter (0 = ukuran model)}}, {{ui:Geser X (m)}}, {{ui:Geser Y (m)}}, {{ui:Geser Z (m)}}, dan {{ui:Putar}} menempatkannya (ia dimulai di tengah model), {{ui:Ketebalan}} membuatnya lebih padat, {{ui:Pendar ke depan}} membuatnya lebih terang ke arah cahaya, dan {{ui:Warna}} memberinya tint. Berkas volume hanya disimpan selama halaman terbuka, seperti gambar langit.
- {{ui:Berhenti lebih awal di bagian gambar yang sudah bersih (sampel adaptif)}} tidak memberi sampel tambahan pada piksel yang sudah stabil, sehingga sisa gambar selesai lebih cepat. {{ui:Derau yang diterima}} adalah seberapa banyak butiran yang tersisa saat sebuah piksel berhenti. Baris di bawah gambar menyatakan rata-rata berapa sampel yang didapat sebuah piksel.
- {{ui:Kaustik (cahaya yang dibelokkan kaca atau dipantulkan cermin)}} melacak cahaya dari lampu dan matahari, sehingga bercak terang di bawah bola kaca atau pantulan cermin di dinding keluar bersih, bukan berbintik. Ini mati selagi kabut, asap, campur cahaya setelah render, atau elemen render aktif, dan dibuat untuk gambar, bukan untuk gambar 360°, animasi, atau ruang kerja Render.

## Berapa lama prosesnya

Gambar dibuat di komputer Anda sendiri, oleh kartu grafisnya; tidak ada yang diunggah. Lamanya bergantung pada kartu itu. Waktu bertambah seiring pass dan piksel: {{ui:Terbaik}} memiliki 16 kali pass {{ui:Draf}}, dan gambar 4K memiliki sekitar empat kali piksel Full HD. Komputer tanpa kartu grafis tetap dapat merender, tetapi lebih lambat.

:::note
Jika dialog menyatakan peramban tidak dapat merender gambar, peramban tidak memiliki WebGL 2. Perbarui peramban, atau aktifkan akselerasi perangkat keras di pengaturannya.
:::
