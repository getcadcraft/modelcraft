---
title: Render gambar model
summary: Hasilkan gambar yang kelihatan seperti cahaya siang: langit, matahari mengikut tempat dan tarikh model anda, bayang lembut, rupa kaca dan logam, kemudian simpan sebagai PNG.
keywords: render, pratetap, pratetap adegan, dalaman, luaran, paparan keratan, malam, satu klik, rendering, path tracing, path traced, ray tracing, global illumination, pantulan, biasan, kualiti tinggi, foto, fotorealistik, realistik, gambar, imej, png, pegun, langit, matahari, cahaya siang, bayang, bayang lembut, ambient occlusion, kaca, logam, berkilat, bahan, pendedahan, kecerahan, mendung, senja, studio, persembahan, kabus, jerebu, wap, awan, isipadu, pancaran cahaya, god rays, kaustik, pensampelan adaptif, hingar
from: 517ba4d3
---

{{ui:Render imej…}} menghasilkan gambar pandangan yang kelihatan seperti cahaya siang dan bukan lukisan: langit, matahari mengikut tempat dan tarikh model anda, bayang lembut, cahaya dari seluruh langit yang menggelapkan sudut dan celah, serta warna yang boleh kelihatan seperti kaca, logam atau cat berkilat. Model tidak diubah.

## Render pandangan

1. Tetapkan pandangan mengikut kehendak anda untuk gambar: orbit, zum, pilih [adegan](topic:scenes), sembunyikan apa yang tidak sepatutnya dipaparkan. Gambar menggunakan kamera pandangan itu sendiri.
2. Klik {{ui:Eksport}} dalam kumpulan {{ui:Fail}}, kemudian {{ui:Render imej…}}.
3. Pilih {{ui:Adegan}} jika yang ditekan bukan yang anda mahu (lihat [Pratetap adegan](topic:render#scene-presets-a-good-picture-in-one-click)), pilih {{ui:Saiz}}, kemudian klik {{ui:Render}}.

   Gambar terisi semasa dirender dan menjadi lebih licin dengan setiap laluan. {{ui:Henti}} (atau {{key:Esc}}) menamatkannya lebih awal dan mengekalkan gambar setakat itu.

4. Klik {{ui:Simpan}} untuk memuat turunnya (PNG melainkan {{ui:Simpan sebagai}} menyatakan sebaliknya).

:::tip
Mulakan dengan {{ui:Draf}} pada {{ui:Saiz pandangan}} untuk menyemak kamera dan rupa, kemudian render {{ui:Baik}} atau {{ui:Terbaik}} pada saiz yang lebih besar untuk gambar akhir.
:::

## Pratetap adegan: gambar yang baik dalam satu klik

Di bahagian atas dialog ada empat butang {{ui:Adegan}}. Setiap satu menetapkan langit, kecerahan, tanah, garis tepi, kualiti dan matahari dalam satu klik, supaya tiada apa yang perlu dipelajari sebelum gambar pertama. Klik satu, kemudian {{ui:Render}}.

| Adegan | Apa yang ditetapkan | Gunakan untuk |
|---|---|---|
| {{ui:Luar}} | Langit cerah, matahari model sendiri, tanah dihidupkan | Bangunan dari luar |
| {{ui:Dalam}} | Langit {{ui:Mendung}} (cahaya sekata, tiada tompok matahari keras), setengah stop lebih cerah | Pandangan dari dalam bilik |
| {{ui:Paparan keratan}} | {{ui:Studio putih}}, tiada tanah, garis tepi dalam render pantas | Model yang dipotong oleh keratan |
| {{ui:Malam}} | Matahari terbenam (tengah malam pada pertengahan musim sejuk untuk separuh dunia tapak), satu stop lebih cerah | Lampu yang menerangi model. Tanpa lampu, gambar menjadi gelap |

- {{ui:Pilih untuk paparan ini}} memilih untuk anda: {{ui:Paparan keratan}} apabila potongan keratan dihidupkan, {{ui:Dalam}} apabila kamera berada di dalam model, selain itu {{ui:Luar}}. Kali pertama anda membuka dialog, ia bermula dengan cara ini dengan sendirinya.
- Setiap tetapan kekal di bawah dan boleh diubah. Sebaik sahaja anda menukar satu tetapan yang diletakkan oleh adegan, tiada butang ditekan dan baris di bawah butang menyatakan tetapan itu milik anda. Klik adegan sekali lagi untuk mengembalikan nilainya.
- Adegan tidak menyentuh enjin, mod, saiz, bahan, kamera atau lampu.

:::note
Adegan memberikan nilai yang sama dalam ModelCraft dan BimCraft. Rupa gambar siap bergantung pada model dan kad grafik anda.
:::

## Tetapan

| Tetapan | Fungsinya |
|---|---|
| {{ui:Saiz}} | Saiz pandangan, dua kali saiz pandangan, Full HD, 4K atau segi empat sama. Saiz tetap mengekalkan kamera pandangan dan memaparkan lebih atau kurang di sisi |
| {{ui:Mod}} | {{ui:Pantas}}, atau {{ui:Kualiti tinggi (penjejakan laluan)}} (di bawah) dengan {{ui:Had masa}}nya |
| {{ui:Kualiti}} | Berapa banyak laluan (atau, dalam kualiti tinggi, sampel) yang dipurata: {{ui:Draf}} 16, {{ui:Baik}} 64, {{ui:Terbaik}} 256. Lebih banyak laluan memberi bayang dan tepi yang lebih licin tetapi mengambil masa lebih lama |
| {{ui:Langit}} | {{ui:Langit cerah}}, {{ui:Mendung}} (cahaya lembut, bayang samar), {{ui:Senja}} (cahaya rendah dan hangat) atau {{ui:Studio putih}} (latar belakang putih polos) |
| {{ui:Matahari}} | Matahari datang daripada tarikh, masa dan tempat dalam {{ui:Gaya}} › matahari. Tandakan {{ui:Gunakan tarikh dan masa lain untuk gambar ini}} untuk mencuba masa lain tanpa menukar gaya model |
| {{ui:Kecerahan}} | Lebih cerah atau lebih gelap, mengikut langkah (stop) |
| {{ui:Tanah di bawah model}} | Tanah yang menerima bayang dan pudar ke dalam ufuk. Matikannya untuk model yang terapung |
| {{ui:Lukis tepi}} | Melukis tepi model dengan nipis di atas gambar, untuk rupa dilukis |

Apabila matahari berada di bawah ufuk pada masa yang dipilih, ia malam: langit menjadi gelap dan [lampu](topic:lights) model menerangi model. Dialog memaklumkannya.

Tetapan disimpan dalam fail `.modelcraft`, jadi gambar seterusnya bagi model yang sama bermula dari tempat anda berhenti.

## Jadikan warna kelihatan seperti kaca atau logam

Di bawah {{ui:Bahan}}, setiap warna pada skrin mempunyai rupa: {{ui:Kusam}}, {{ui:Satin}}, {{ui:Berkilat}}, {{ui:Logam}}, {{ui:Logam digilap}}, {{ui:Kaca}} atau {{ui:Kaca berembun}}. {{ui:Muka tanpa cat}} ialah muka yang tiada warna sendiri.

Untuk menjadikan tingkap kaca, [cat](topic:paint) bidang kaca tingkap dengan satu warna, kemudian tetapkan warna itu kepada {{ui:Kaca}}. Kaca membenarkan langit dan apa yang ada di belakangnya kelihatan, diwarnakan oleh warnanya, dan memantulkan langit.

:::note
Dalam mod {{ui:Pantas}}, kaca dan logam memantulkan langit, bukan bahagian lain model, dan cahaya tidak dibiaskan melalui kaca. Mod {{ui:Kualiti tinggi (penjejakan laluan)}} di bawah melakukan kedua-duanya.
:::

## Kualiti tinggi

Pilih {{ui:Mod}} › {{ui:Kualiti tinggi (penjejakan laluan)}} untuk gambar yang mengikut cahaya seperti yang dilihat kamera:

- cahaya melantun antara permukaan, jadi bilik yang diterangi melalui tingkap, atau oleh lampu, diterangi dari semua arah dan warna meresap ke jirannya;
- kaca ialah kaca sebenar: cahaya dibiaskan melaluinya dan ia memantulkan model;
- logam dan permukaan digilap memantulkan bahagian lain model;
- panel cahaya menerangi sebagai panel, dengan bayang lembut.

Ia jauh lebih perlahan daripada {{ui:Pantas}}: setiap laluan menjejak semula cahaya bagi setiap piksel. Gambar bermula berbintik dan menjadi jelas apabila sampel bertambah, jadi mulakan dengan saiz kecil ({{ui:Saiz pandangan}}, {{ui:Draf}}) dan pilih {{ui:Had masa}}: apabila masa habis, gambar setakat itu dikekalkan. {{ui:Henti}} juga mengekalkannya. Laluan pertama menunggu sementara pelayar menyediakan penjejak laluan.

Apabila pelayar mempunyai WebGPU, penjejak laluan ialah milik CadCraft sendiri dan berjalan pada kad grafik; baris di bawah gambar menyatakan {{ui:Dijejak laluan pada kad grafik (WebGPU)}}. Selepas {{ui:Henti}} atau had masa, {{ui:Sambung semula}} meneruskan gambar yang sama sehingga semua sampelnya cukup; menukar tetapan atau menekan {{ui:Render}} sekali lagi bermula semula. Tanpa WebGPU, gambar dijejak laluannya dengan WebGL (baris itu menyatakannya) dan {{ui:Sambung semula}} tidak ditawarkan.

:::linux
Firefox dan kebanyakan persediaan Chrome pada Linux belum mempunyai WebGPU, jadi kualiti tinggi menggunakan WebGL di sana.
:::

Dalam mod ini, tepi tidak dilukis, tekstur perpustakaan menunjukkan warna dan kekasaran tetapi tidak bonjolnya (bahan [yang dibuat dengan nod](topic:shading#in-high-quality-pictures) menunjukkan normal dan bonjolnya), dan potongan keratan dibuat pada model sebelum gambar bermula.

{{ui:Nyahbintik (membuang butiran selepas sampel)}} dihidupkan secara lalai: apabila gambar siap, atau dihentikan, butiran yang tinggal dibersihkan oleh rangkaian neural yang dibuat untuk tujuan ini (rangkaian yang diterbitkan Intel Open Image Denoise, dijalankan pada komputer anda sendiri: pada kad grafik, jika tidak pada pemproses). Gambar dengan sampel yang sedikit keluar bersih; {{ui:Papar}} › {{ui:Gambar sebelum dinyahbintik}} menunjukkannya seperti yang dirender.

## Render dalam pandangan

Ruang kerja {{ui:Render}} menjalankan penjejak laluan dalam pandangan itu sendiri: orbit, edit model atau tukar lampu dan ia bermula semula serta-merta. {{ui:Kawasan}}: seret segi empat tepat dan hanya kawasan itu dirender; {{ui:Seluruh pandangan}} kembali ke asal. {{ui:Fokus}}: klik apa yang patut tajam, dan kedalaman medan memfokus di situ. {{ui:Perincian}} menetapkan berapa banyak piksel pandangan yang dirender (lebih sedikit lebih pantas). {{ui:Jeda}} berhenti dan meneruskan semula. Ia memerlukan WebGPU: tanpanya ruang kerja memaklumkannya, dan {{ui:Eksport}} › {{ui:Render imej…}} masih berfungsi.

## Langit dan profil cahaya pada kad grafik

Dengan WebGPU, kualiti tinggi mempunyai dua langit lagi:

- {{ui:Langit fizikal}} mengira cahaya siang daripada ketinggian matahari: biru tua di atas kepala, jalur pucat di ufuk, dan matahari yang bertambah hangat dan malap apabila rendah. {{ui:Kabus}} beralih dari hari yang sangat jernih (2) ke hari berjerebu (10).
- {{ui:Gambar langit (HDRI)}} menerangi model dengan gambar panorama bagi tempat sebenar. {{ui:Pilih gambar…}} mengambil fail `.hdr` atau `.exr` equirectangular; {{ui:Pusing}} memusingkannya sekeliling model dan {{ui:Kecerahan gambar}} menjadikannya lebih cerah atau gelap. Gambar itu membawa matahari sendiri, jadi matahari model tidak ditambah. Ia hanya dikekalkan selagi halaman dibuka: selepas dibuka semula, pilih semula.

Setiap lampu dalam senarai {{ui:Lampu}} boleh mengambil profil cahaya pengeluar: {{ui:Profil IES…}} membaca fail IES (LM-63) dan lampu kemudian memancarkan cahayanya mengikut cara lekapan itu (lampu bawah yang sempit, pencuci dinding). Setiap lampu dengan nama itu menggunakannya, dan lampu mengekalkan kecerahannya sendiri. Klik nama profil untuk berhenti menggunakannya.

Tingkap kaca jernih membantu cahaya langit mencari jalan ke dalam bilik, jadi gambar dalaman di bawah langit menjadi jelas lebih cepat.

Mod {{ui:Pantas}} dan penjejak laluan WebGL menunjukkan {{ui:Langit fizikal}} dan {{ui:Gambar langit (HDRI)}} sebagai langit cerah dan mengabaikan profil cahaya.

## Kamera

{{ui:Kamera}} menyediakan gambar seperti foto:

- {{ui:Pendedahan}}: kekalkan {{ui:Peluncur kecerahan}}, atau pilih {{ui:Tetapan kamera}} dan tetapkan {{ui:Apertur (f-stop)}}, {{ui:Kelajuan pengatup}} dan {{ui:ISO}} seperti pada kamera; EV di sebelahnya ialah nilai pendedahan biasa. f/16 pada 1/100 s dan ISO 100 sepadan dengan hari cerah; adegan yang lebih gelap memerlukan apertur yang lebih luas, pengatup yang lebih perlahan atau ISO yang lebih tinggi. Ini berfungsi dalam setiap mod.
- {{ui:Kedalaman medan}} mengaburkan apa yang lebih dekat atau lebih jauh daripada {{ui:Jarak fokus (m)}} seperti yang dilakukan kanta dengan f-stop itu (biarkan kosong untuk fokus pada apa yang berada di tengah pandangan); {{ui:Bentuk apertur}} memberi sorotan di luar fokus bentuk bulat atau berbilah.
- {{ui:Perspektif dua titik (garis tegak kekal tegak)}} menyeimbangkan kamera dan mengalihkan gambar, seperti kanta tilt-shift seni bina, supaya dinding tidak condong apabila anda melihat ke atas atau ke bawah pada bangunan.
- {{ui:Imbangan putih}} menetapkan warna cahaya mana yang kelihatan putih: lebih rendah (contohnya 3000 K) untuk cahaya lampu yang hangat, lebih tinggi untuk teduhan dan hari mendung.
- {{ui:Unjuran}}: {{ui:Panorama 360°}} menghasilkan gambar 2:1 bagi segala yang ada di sekeliling kamera untuk pemapar panorama; {{ui:Panorama stereo 360°}} menyusun panorama mata kiri dan mata kanan untuk fon kepala; {{ui:Peta kiub (6 muka)}} menghasilkan enam pandangan segi empat sama dalam grid 3 × 2. Lebarnya datang daripada {{ui:Saiz}}.

Unjuran, kedalaman medan, perspektif dua titik dan imbangan putih memerlukan penjejak laluan pada kad grafik (WebGPU), jadi ia hanya dipaparkan dalam {{ui:Kualiti tinggi}}.

## Siapkan gambar

{{ui:Gambar}} memberi gred kepada gambar kualiti tinggi seperti foto, dan setiap kawalan menukar gambar siap serta-merta, tanpa render semula:

- {{ui:Rupa (transformasi paparan)}}: {{ui:ACES filmik}} (gambar seperti sebelum ini), {{ui:AgX}} (lebih lembut, mengekalkan warna dalam cahaya yang sangat terang), {{ui:Filmik}} (lengkung filem yang lembut) atau {{ui:Standard}} (biasa, cahaya terang dipotong kepada putih).
- {{ui:Kontras}} dan {{ui:Mampatan sorotan}} (mengembalikan butiran pada bahagian yang sangat terang).
- {{ui:Bloom}} (cahaya lembut di sekeliling lampu terang), {{ui:Silau}} dengan {{ui:Jalur silau}} (sinar bintang dari titik paling terang) dan {{ui:Vignette}} (sudut yang lebih gelap).
- {{ui:Jadual warna (.cube)…}} menggunakan gred warna daripada fail `.cube`, dengan {{ui:Kekuatan jadual warna}}nya; seperti gambar langit, ia hanya dikekalkan selagi halaman dibuka.

## Simpan gambar

{{ui:Simpan sebagai}} di sebelah {{ui:Simpan}} memilih fail: {{ui:PNG}}, {{ui:JPEG}} atau {{ui:WebP}} untuk dikongsi (JPEG dan WebP hanya jika pelayar boleh menulisnya), dan selepas render kualiti tinggi pada kad grafik juga:

- {{ui:PNG, 16 bit}}: gambar yang digred dengan langkah yang lebih halus antara warna, untuk dicetak atau disunting lanjut.
- {{ui:EXR, setiap lapisan (float 32-bit)}}: gambar seperti yang dirender (cahaya linear, tanpa gred) dengan setiap elemen render dan kumpulan cahaya sebagai lapisannya sendiri, untuk program komposisi.
- {{ui:Fail render (.ccrender, untuk gred semula kemudian)}}: segala yang diperlukan dialog untuk mencampur dan menggred semula gambar. {{ui:Buka fail render…}} membawanya kembali, dengan campuran dan gredannya, tanpa render.

## Campurkan cahaya selepas render

Hidupkan {{ui:Pencampuran cahaya (tukar warna dan kecerahan setiap lampu selepas render)}} sebelum anda menekan {{ui:Render}}. Apabila gambar siap (atau dihentikan), {{ui:Campurkan gambar}} menyenaraikan lampunya dalam kumpulan: langit, matahari, dan lampu mengikut nama (setiap lampu dengan nama yang sama ialah satu kumpulan). Matikan satu kumpulan, beri warna, atau jadikannya lebih cerah atau gelap, dan gambar berubah serta-merta, tanpa render semula. {{ui:Simpan campuran}} menyimpan campuran dengan satu nama untuk dipilih semula kemudian; {{ui:Seperti yang dirender}} kembali kepada gambar seperti ketika ia dibuat. {{ui:Simpan}} menyimpan gambar yang dicampur.

{{ui:Elemen render (albedo, normal, kedalaman, diffuse, specular, transmission, emission, ID)}} menyimpan bahagian gambar juga. {{ui:Papar}} menukar pandangan kepada salah satunya: warna permukaan (albedo), normal, kedalaman, cahaya diffuse, specular dan dihantar (setiap satu langsung dan tidak langsung), apa yang bercahaya dan langit, serta satu warna bagi setiap objek atau setiap bahan untuk membuat topeng.

Kedua-duanya menyimpan lapisan tambahan pada kad grafik. Pada saiz besar, kad grafik mungkin tidak mempunyai ruang; dialog memaklumkannya dan saiz yang lebih kecil berfungsi.

## Giliran render

Selepas persediaan kualiti tinggi, {{ui:Tambah gambar ini ke giliran}} di bawah {{ui:Giliran render}} menyimpan gambar seperti yang ditetapkan sekarang; {{ui:Tambah animasi ini ke giliran}} dalam dialog video melakukan perkara yang sama untuk keseluruhan animasi, dijejak laluannya bingkai demi bingkai. {{ui:Mula giliran}} merender mereka satu demi satu pada komputer ini, dan {{ui:Simpan}} di sebelah setiap satu yang siap memuat turunnya. Menutup halaman mengekalkan giliran: buka model yang sama dan ia diteruskan dari tempat ia berhenti. Giliran memerlukan WebGPU.

## Kabus, asap, hingar dan kaustik

Ini terdapat dalam {{ui:Kabus, asap dan hingar}} dan berfungsi dalam {{ui:Kualiti tinggi}} pada kad grafik; enjin lain tidak menyertakannya.

- {{ui:Kabus dan jerebu}} mengisi udara sehingga satu ketinggian dengan kabus yang diterangi oleh matahari, langit dan lampu. {{ui:Sejauh mana anda boleh melihat, dalam meter}} menetapkan betapa tebalnya (kira-kira 100 m ialah jerebu ringan, 20 m kabus tebal), {{ui:Ketinggian kabus di atas tanah, dalam meter}} ialah tempat ia berakhir, dan {{ui:Pancaran cahaya}} ialah sejauh mana kabus bercahaya ke arah cahaya. Cahaya matahari keluar dari kabus di bahagian atasnya, jadi di tempat matahari masuk melalui tingkap atau antara bangunan anda melihatnya sebagai pancaran cahaya.
- {{ui:Asap atau awan}} menambah satu isipadu asap atau awan yang diterangi seperti kabus. {{ui:Jenis}} ialah {{ui:Awan}}, {{ui:Tiang asap}} atau {{ui:Daripada fail isipadu (.ccvol)}}, format grid milik CadCraft. {{ui:Perincian}} dan {{ui:Variasi}} menukar awan atau tiang yang dibuat, {{ui:Saiz sisi terpanjangnya, dalam meter (0 = saiz model)}}, {{ui:Alih X (m)}}, {{ui:Alih Y (m)}}, {{ui:Alih Z (m)}} dan {{ui:Pusing}} meletakkannya (ia bermula di tengah model), {{ui:Ketebalan}} menjadikannya lebih padat, {{ui:Sinaran ke hadapan}} menjadikannya lebih cerah ke arah cahaya, dan {{ui:Warna}} memberi warna padanya. Fail isipadu hanya dikekalkan selagi halaman dibuka, seperti gambar langit.
- {{ui:Berhenti awal di tempat gambar sudah bersih (pensampelan adaptif)}} tidak memberi sampel tambahan kepada piksel yang sudah stabil, jadi bahagian lain gambar siap lebih awal. {{ui:Hingar yang diterima}} ialah jumlah butiran yang dibenarkan kekal apabila sesuatu piksel berhenti. Baris di bawah gambar menyatakan purata bilangan sampel yang diterima setiap piksel.
- {{ui:Kaustik (cahaya dibengkokkan oleh kaca atau dipantulkan oleh cermin)}} menjejak cahaya dari lampu dan matahari, jadi tompok terang di bawah bola kaca atau cahaya cermin pada dinding keluar bersih dan tidak berbintik. Ia dimatikan apabila kabus, asap, {{ui:Campurkan cahaya selepas render}} atau elemen render dihidupkan, dan ia dibuat untuk gambar, bukan untuk gambar 360°, animasi atau ruang kerja Render.

## Berapa lama ia mengambil masa

Gambar dihasilkan pada komputer anda sendiri, oleh kad grafiknya; tiada apa yang dimuat naik. Berapa lama ia mengambil masa bergantung pada kad itu. Masa meningkat mengikut laluan dan piksel: {{ui:Terbaik}} mempunyai 16 kali laluan {{ui:Draf}}, dan gambar 4K mempunyai kira-kira empat kali piksel Full HD. Komputer tanpa kad grafik masih boleh merender, tetapi lebih perlahan.

:::note
Jika dialog menyatakan pelayar tidak dapat merender gambar, pelayar tidak mempunyai WebGL 2. Kemas kininya, atau hidupkan pecutan perkakasan dalam tetapannya.
:::
