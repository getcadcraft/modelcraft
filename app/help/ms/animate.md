---
title: Animasi mana-mana sifat, bentukkan sebagai lengkung, dan campurkan klip
summary: Ruang kerja Animasi meletakkan kunci pada kedudukan, pusingan dan saiz objek, kecerahan, sebaran dan warna lampu, lensa serta kunci bentuk jejaring; armatur melenturkan jejaring dengan tulang dan pemberat yang dicat; IK dan kekangan membuatkan tulang dan objek mencapai, memandang, menyalin, kekal dalam had, bergantung daripada atau mengikut yang lain; jasad tegar jatuh, bertindih dan berlanggar serta di-bake kepada kunci; pemacu menetapkan nilai daripada yang lain; pandangan Lengkung pada garis masa membentuk setiap perubahan dengan pemegang Bézier dan kitaran, dan pandangan Klip menyimpan animasi sebagai tindakan yang boleh anda letakkan semula dan campurkan.
keywords: fizik, jasad tegar, simulasi, simulate, jatuh, graviti, berlanggar, pertembungan, tindan, lantunan, geseran, bake, baked, ik, kinematik songsang, kekangan, constraint, lihat ke arah, look at, jejak ke, salin transformasi, salin lokasi, salin putaran, had putaran, had, anak kepada, induk, ikut laluan, laluan, kutub, fabrik, rantaian, armatur, rig, rigging, tulang, rangka, kulit, pemberat, cat pemberat, kumpulan titik, pose, mod pose, kuaternion berkembar, gabungan linear, kunci bentuk, morf, sasaran morf, bentuk adunan, ekspresi muka, pemacu, ungkapan, ruang kerja animasi, animasi, kunci bingkai, kunci, sifat, transformasi, lokasi, putaran, skala, lampu, kecerahan, warna, lensa, medan pandangan, fov, editor graf, lengkung, bezier, pemegang, tangen, interpolasi, kitaran, ulang, gelung, ping pong, ofset, carta dop, pilih kunci, kotak pilih, salin kunci, tampal kunci, regang kunci, skala kunci, klip, tindakan, nla, campur, adun, pengaruh, simpan
from: 16d8e12f
---

Garis masa menggerakkan kamera dan keseluruhan kumpulan serta komponen. Ruang kerja **Animasi** meletakkan kunci lebih daripada itu, dan garis masa mendapat dua lagi pandangan untuk membentuk serta menggunakan semula apa yang anda kunci.

## Buka ruang kerja ini

Pilih {{ui:Animasi}} dalam senarai ruang kerja pada bar alat. Garis masa dibuka di bawah pandangan, bar alat memaparkan kumpulan Animasi ({{ui:Kunci}}, {{ui:Main}}, {{ui:Garis masa}}) dan panel di sebelah kanan menyenaraikan perkara yang boleh anda letakkan kunci pada kepala main.

## Letakkan kunci pada sifat

Panel menyenaraikan, pada kepala main:

- **Objek dipilih**: {{ui:Letak}}, {{ui:Pusing (°)}} dan {{ui:Saiz}}, tiga nombor setiap satu. Taip nombor dan tekan {{key:Enter}}: ia diletakkan kunci pada kepala main dan objek bergerak ke situ. Berlian di sebelah baris meletakkan kunci nilai seperti sekarang; berlian yang penuh bermaksud sudah ada kunci pada kepala main.
- **Lampu**: {{ui:Kecerahan (lm)}} setiap lampu, {{ui:Sebaran (°)}} (lampu sepot) dan {{ui:Warna}}.
- **Kamera**: {{ui:Sudut kanta (°)}}, untuk zum semasa kamera bergerak.

{{ui:Transformasi kunci}} (atau {{key:I}}) meletakkan kunci pada kedudukan, pusingan dan saiz setiap kumpulan atau komponen yang dipilih sekali gus; {{ui:Kamera kunci}} (atau {{key:K}}) meletakkan kunci pada kamera. Dengan {{ui:Kunci auto}} dihidupkan, kumpulan yang kedudukan, pusingan dan saizannya diletakkan kunci dengan cara ini akan mendapat kunci baharu setiap kali anda mengalihkannya.

Pusingan ialah tiga sudut, mengikut paksi X, kemudian Y, kemudian Z. Pusingan yang diletakkan kunci melebihi 180° terus berpusing ke arah yang sama (190° kekal 190°, bukan −170°), supaya roda boleh berpusing beberapa kali.

:::tip
Kumpulan yang diletakkan kunci dengan {{ui:Kunci yang dipilih}} pada garis masa mempunyai kunci kedudukan keseluruhan. Butang lengkung pada barisnya menukarkannya kepada lengkung kedudukan, pusingan dan saiz (kedudukan yang sama pada setiap kunci) supaya anda boleh membentuknya dalam {{ui:Lengkung}}.
:::

## Kunci bentuk (morf)

**Kunci bentuk** ialah satu lagi bentuk bagi [jejaring](topic:meshes) yang sama: senyuman pada muka, lenturan pintu, daun yang melengkung. Gelangsarnya mengadun daripada jejaring seperti sedia ada (0) kepada bentuk itu (1); beberapa kunci ditambah bersama.

1. Pilih jejaring dalam ruang kerja Animasi: panel memaparkan {{ui:Kunci bentuk}} miliknya.
2. Klik {{ui:Tambah kunci bentuk}}. ModelCraft pergi ke [ruang kerja jejaring](topic:mesh-edit) dengan kunci baharu sedang disunting: alihkan titik, tolak keluar, ukir — ubah jejaring menjadi bentuk yang anda mahu.
3. Kembali ke {{ui:Animasi}} dan klik {{ui:Selesai}}. Jejaring kembali seperti asal, dan kunci itu mengekalkan perubahan anda.

Kemudian seret gelangsar kunci (atau taip nilai) untuk mengadunnya. Berlian meletakkan kunci nilai pada kepala main, jadi kunci boleh membesar dan pudar dari semasa ke semasa; apabila ia sudah ada trek, nilai baharu diletakkan kunci pada kepala main. Pensel menyunting semula bentuk kunci (jejaring menunjukkannya sepenuhnya sehingga {{ui:Selesai}}; {{ui:Batal}} membiarkan kunci seperti sedia ada), ikon mata menghidupkan atau mematikan kunci, dan tong sampah mengalih keluarnya.

Bucu yang anda tambah semasa menyunting kunci tergolong dalam jejaring itu sendiri: ia kekal di tempat anda letakkannya, dalam setiap bentuk.

:::note
Kunci bentuk mengalihkan jejaring sebelum [pengubah suai](topic:modifiers) miliknya: pengubah suai Subdivision melicinkan bentuk yang diadun. Gambar dan video yang dirender menunjukkan kunci pada setiap bingkai.
:::

## Armatur: tulang yang melenturkan jejaring

**Armatur** ialah satu set tulang di dalam [jejaring](topic:meshes). Pose tulang dan jejaring mengikutinya, setiap titik sebanyak yang dinyatakan oleh **pemberatnya**.

1. Pilih jejaring dalam ruang kerja Animasi dan klik {{ui:Tambah armatur}} dalam panel (atau {{ui:Tambah tulang}} dalam kumpulan {{ui:Rig}}): tulang pertama berjalan di tengah jejaring dari kakinya.
2. Dengan tulang dipilih, {{ui:Tambah tulang anak}} menambah tulang seterusnya dari hujungnya. Tetapkan {{ui:Kepala}}, {{ui:Hujung}}, {{ui:Gulung (°)}} dan {{ui:Bergantung daripada}} setiap tulang dalam panel; tulang yang bergantung pada tulang lain bergerak bersamanya. Nyahtanda {{ui:Menggerakkan jejaring}} untuk tulang yang hanya mengemudi tulang lain.
3. Klik {{ui:Pemberat automatik}}: setiap tulang mengambil pengaruh ke atas titik yang paling hampir dengannya, dan pengaruh itu tersebar secara licin pada jejaring, jadi titik di antara dua tulang berkongsinya. {{ui:Tulang terdekat sahaja}} ialah pemisahan yang lebih pantas dan lebih tegas.

**Pose** tulang dengan {{ui:Pose}} ({{key:P}}): klik tulang untuk memilihnya, seret untuk memusingkannya mengikut paksi pandangan, {{key:Shift}}-seret untuk mengalihkannya. Atau taip {{ui:Letak}}, {{ui:Pusing (°)}} dan {{ui:Saiz}} di bawah {{ui:Pose}}; pusingan adalah mengikut paksi tulang itu sendiri, dari kedudukan rehatnya. Berlian dan {{ui:Kunci keseluruhan pose}} meletakkan kunci pose pada kepala main; apabila tulang sudah ada kunci, menposenya meletakkan kunci di situ. {{ui:Tetapkan semula tulang ini}} dan {{ui:Tetapkan semula pose}} mengembalikan tulang ke kedudukan rehat.

**Cat pemberat** ({{key:W}}) untuk tulang yang dipilih: jejaring ditunjukkan pada rehat, setiap muka diwarnakan mengikut berapa banyak tulang itu memegangnya — merah bermaksud semua, biru bermaksud tiada. Cat untuk menambah pengaruh ({{key:Mod}} mengambilnya, {{key:Shift}} melicinkan); {{ui:Saiz (px)}} dan {{ui:Kekuatan}} menetapkan berus. Dengan {{ui:Pastikan pemberat setiap titik berjumlah 1}}, memberi satu tulang lebih banyak mengambil jumlah yang sama daripada yang lain. Setiap goresan ialah satu langkah buat asal bagi model.

{{ui:Kulit}} memilih cara titik di antara tulang bergerak: {{ui:Linear (pantas)}} mengadun pergerakan tulang, dan sedikit mengecilkan sendi yang dilentur; {{ui:Kuaternion berkembar (mengekalkan isi padu pada sendi)}} memusingkan titik di sekeliling sendi, supaya siku atau lutut mengekalkan ketebalannya ({{ui:Saiz}} tulang kemudian tidak meregangkan kulit).

:::note
Kunci bentuk datang dahulu, kemudian armatur, kemudian [pengubah suai](topic:modifiers). Pandangan, gambar dan video semuanya menunjukkan jejaring yang diposekan; pemberat jejaring disimpan bersamanya, manakala tulang dan posenya disimpan bersama animasi.
:::

## IK dan kekangan

**Kekangan** menggerakkan tulang atau objek selepas kuncinya, mengikut satu peraturan. Pilih objek (atau, dalam armatur, tulang) dan tambah satu di bawah {{ui:Kekangan bagi …}}; beberapa kekangan dijalankan mengikut susunan yang disenaraikan (anak panah menukarnya), dan setiap satu mempunyai {{ui:Berapa banyak}} (0 hingga 1, diletakkan kunci dengan berliannya seperti mana-mana sifat) dan suis hidup/mati.

| Kekangan | Untuk | Apa yang dilakukannya |
|---|---|---|
| {{ui:Capai (IK)}} | Tulang | Tulang dan tulang yang ia bergantung daripadanya ({{ui:Tulang dalam rantaian}}) melentur supaya hujungnya mencapai sasaran. Dengan dua tulang dan {{ui:Kutub (bengkokan menghala kepadanya)}}, siku atau lutut menghala ke arah kutub; rantaian yang lebih panjang melentur dengan licin. Di luar capaian, rantaian menghala lurus ke sasaran. |
| {{ui:Pandang ke}} | Kedua-duanya | Berpusing supaya {{ui:Paksi yang menghala}} menghadap sasaran, sambil mengekalkan {{ui:Paksi dikekalkan ke atas}} sedekat mungkin ke atas. |
| {{ui:Salin transformasi}} | Kedua-duanya | Mengambil kedudukan, pusingan atau saiz sasaran — yang ditanda. |
| {{ui:Had}} | Kedua-duanya | Mengekalkan kedudukan, pusingan (darjah) atau saiznya sendiri antara {{ui:min}} dan {{ui:maks}} bagi setiap paksi; biarkan sepasang kosong untuk membiarkan paksi itu bebas. |
| {{ui:Anak kepada}} | Kedua-duanya | Bergerak bersama sasaran seolah-olah ia bergantung daripadanya, dari kedudukan kedua-duanya ketika anda memilih sasaran. |
| {{ui:Ikut laluan}} | Objek | Duduk pada [objek lengkung](topic:curves) di {{ui:Sepanjang lengkung}} (0 permulaannya, 1 penghujungnya; letakkan kunci supaya ia bergerak), dan dengan {{ui:Pusing sepanjang lengkung}} ia menghadap sepanjangnya. |

Sasaran ialah objek lain dalam kumpulan yang dibuka, tulang armatur yang sama, atau {{ui:Satu titik}} yang anda taip (titik objek adalah dalam koordinat model, titik tulang dalam koordinat jejaringnya). Untuk kaki IK, letakkan sasaran di tempat kaki sepatutnya dan letakkan kunci pada sasaran, atau letakkan kunci pada {{ui:Berapa banyak}} untuk menyerahkan kaki antara kunci dan IK.

:::tip
Objek yang memandang kepada satu objek yang mengikut laluan akan melihatnya di atas laluan itu: ModelCraft mengira sasaran dahulu, tidak kira susunan objek.
:::

## Fizik: jatuh, bertindih dan berlanggar

Biarkan objek jatuh dan berlanggar antara satu sama lain, kemudian simpan hasilnya sebagai kunci.

1. Pilih kumpulan, komponen atau jejaring dan tetapkan {{ui:Jasad tegar}} di bawah {{ui:Fizik}}: {{ui:Jatuh dan berlanggar}} (ia bergerak) atau {{ui:Kekal di tempat, menghalang}} (meja, dinding, landai). Berikan objek yang jatuh {{ui:Bentuk}} — {{ui:Kotak (sempadannya)}} atau {{ui:Bola (bulat sekeliling sempadannya)}} — {{ui:Jisim (kg)}}, {{ui:Geseran}} dan {{ui:Lantunan}} (0 berdentum, 1 melantun balik setinggi itu).
2. Di bawah {{ui:Keseluruhan model}}, tetapkan {{ui:Dari (s)}} dan {{ui:Hingga (s)}}, {{ui:Graviti (m/s², ke bawah)}} dan sama ada terdapat {{ui:Tanah untuk mendarat}} (dan ketinggiannya).
3. Klik {{ui:Bake fizik}} (dalam panel atau kumpulan {{ui:Fizik}}). Setiap objek yang jatuh mendapat kunci kedudukan, pusingan dan saiz pada setiap bingkai antara dua masa itu; mainkannya seperti mana-mana animasi.

Bake semula menggantikan kunci tersebut; {{ui:Alih keluar kunci bake}} membuangnya. Objek bermula dalam keadaan rehat, di tempat kunci, lengkung dan kekangan mereka meletakkannya pada {{ui:Dari (s)}} (pergerakan yang diletakkan kunci sebelumnya tidak diteruskan ke dalam jatuhan). {{ui:Langkah sebingkai}} yang lebih banyak memastikan timbunan tinggi lebih stabil; bar status memberitahu bila sesuatu masih bergerak pada penghujungnya.

:::note
Bentuk ialah kotak dan bola sekeliling sempadan setiap objek; kotak menyentuh dengan bucu, tengah tepi dan tengah mukanya, jadi kotak bertindih dan terguling seperti yang dijangka. Kain, bendalir, sambungan antara objek dan bentuk tepat belum dibina.
:::

## Pemacu

**Pemacu** menetapkan kunci bentuk daripada perkara lain dan bukannya dengan tangan: buka pemacu kunci (butang kalkulator), tulis satu **ungkapan**, dan berikan setiap nama dalamnya apa yang dibacanya ({{ui:Membaca}}): masa dalam saat, bingkai, kedudukan, pusingan atau saiz sepanjang X, Y atau Z, kecerahan lampu, atau kunci bentuk lain. Contohnya, dengan `v` membaca pusingan pintu tentang Z, `clamp(v / 90, 0, 1)` membuka satu bentuk apabila pintu terbuka.

Ungkapan menggunakan nombor, nama, `+ - * / % ^` dan kurungan, serta fungsi `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg` dengan `pi` dan `e`. Kesilapan ditunjukkan dan tiada apa yang berubah. Gelangsar kunci yang dipacu menunjukkan nilai pemacu; pemacu mengatasi trek kunci sehingga anda mengalih keluarnya.

## Pilih dan tukar kunci (pandangan Kunci)

{{ui:Kunci}} menunjukkan satu baris bagi setiap trek: kamera, setiap kumpulan yang bergerak, dan setiap sifat ("Lampu 2 · Kecerahan (lm)"; kunci sifat adalah bulat).

- Klik kunci untuk memilihnya; {{key:Shift}}-klik atau {{key:Mod}}-klik menambah atau membuang kunci daripada pilihan. {{key:Shift}}-seret merentasi baris melukis kotak yang menambah setiap kunci di dalamnya.
- Seret kunci yang dipilih untuk mengalihkan semuanya; {{key:Left}} / {{key:Right}} mengalihkannya sebingkai ({{key:Shift}}: sepuluh).
- {{key:Mod+C}} menyalin kunci yang dipilih, {{key:Mod+V}} menampalnya dari kepala main ke trek yang sama (tab ModelCraft yang lain juga boleh menampalnya).
- {{ui:Regang}} menyebarkan kunci yang dipilih keluar dari kepala main mengikut nombor di sebelahnya (2 = dua kali lebih jauh; 0.5 menarik mereka lebih rapat).
- Senarai kelonggaran menetapkan cara setiap kunci yang dipilih bergerak seterusnya.

## Bentukkan lengkung (pandangan Lengkung)

{{ui:Lengkung}} ialah graf bagi setiap nombor dari semasa ke semasa: masa sepanjang, nilai ke atas. Tandakan lengkung yang mahu ditunjukkan dalam senarai di sebelah kiri (X, Y dan Z ialah merah, hijau dan biru).

- Klik kunci (segi empat sama) untuk memilihnya, {{key:Shift}}-klik untuk lebih banyak, atau seret kotak. Seret kunci yang dipilih untuk menukar masa dan nilainya; dengan beberapa dipilih, seretan menggerakkannya sepanjang masa.
- Kunci yang dipilih menunjukkan dua **pemegangnya**. Seret satu untuk membentuk lengkung di sisi itu. {{ui:Pemegang}} menerangkan kelakuannya: {{ui:Automatik}} (lengkung licin melalui kunci di sekelilingnya), {{ui:Menuju kunci seterusnya}}, {{ui:Sejajar}} (kedua-duanya kekal dalam garis lurus, supaya lengkung tiada sudut) atau {{ui:Bebas}}.
- {{ui:Daripada kunci yang dipilih}} menetapkan cara setiap kunci yang dipilih bergerak ke seterusnya: {{ui:Lengkung (pemegang)}}, {{ui:Licinkan}}, {{ui:Tetap}}, {{ui:Perlahan masuk dan keluar}} atau {{ui:Tahan}}.
- {{ui:Sebelum}} dan {{ui:Selepas}} menetapkan apa yang dilakukan lengkung di luar kuncinya: {{ui:Tahan}} (kekal pada nilai pertama atau terakhir), {{ui:Ulang}}, {{ui:Ke depan dan ke belakang}}, atau {{ui:Ulang dan teruskan}} (setiap ulangan bermula di tempat ulangan terakhir berakhir: roda terus bergolek, pejalan terus berjalan).
- Roda zum ({{key:Mod}}: nilai sahaja; {{key:Shift}}: masa sahaja); seret dengan butang tengah atau dengan {{key:Alt}} untuk pan; {{ui:Tunjuk semua}} atau {{key:Home}} memuatkan setiap lengkung yang ditunjukkan. Klik ruang kosong untuk mengalihkan kepala main ke situ. {{key:Delete}} memadam kunci yang dipilih.

Pemegang dihalang daripada bersilang antara satu sama lain dalam masa, jadi lengkung tidak pernah berjalan ke belakang.

## Guna semula animasi (pandangan Klip)

**Klip** memainkan animasi yang disimpan (satu **tindakan**) pada garis masa. Klip dicampur mengikut susunan, baris bawah di atas yang atas; trek garis masa sendiri berada di atas setiap klip.

1. Letakkan kunci pada kumpulan dan lampu seperti biasa, kemudian klik {{ui:Buat klip}} dalam {{ui:Klip}} dan beri tindakan itu nama. Trek menjadi tindakan dan klip memainkannya di tempat ia berada (kamera kekal pada garis masa).
2. Untuk menggunakannya semula, pilih tindakan dan klik {{ui:Tambah klip}}: klip baharu bermula pada kepala main.
3. Seret klip sepanjang barisnya untuk mengalihkannya; klik untuk menetapkan {{ui:Mula (s)}}, {{ui:Kelajuan}} (2 = dua kali lebih pantas), {{ui:Ulangan}}, {{ui:Berapa banyak}} (0 hingga 1), {{ui:Campur}} ({{ui:Ganti}}, atau {{ui:Tambah di atas}} klip sebelumnya), {{ui:Di luar klip}} (tiada apa, tahan hujungnya, atau tahan kedua-dua hujung) dan {{ui:Senyapkan}}. Anak panah menukar susunan; tong sampah mengalih keluarnya (tindakan yang tiada klip lagi gunakan turut dibuang).

Klip pada kurang daripada {{ui:Berapa banyak}} penuh mengadun daripada apa yang berada di bawahnya: klip sebelumnya, atau lampu dan kedudukan seperti sedia ada tanpa animasi.

## Apa yang dimainkan di mana

| Apa | Dalam pandangan | Dalam video yang dirender |
|---|---|---|
| Kunci kamera, sudut lensa dengan kunci kamera | Ya | Ya |
| Kedudukan, pusingan dan saiz (kunci, lengkung, klip) | Ya | Ya |
| Kecerahan, sebaran dan warna lampu | Ya | Belum lagi: video menggunakan lampu seperti keadaannya apabila ia bermula (lihat [apa yang belum dibina](topic:not-built-yet)) |
| Sudut lensa tanpa kunci kamera | Ya | Belum lagi: letakkan kunci pada kamera juga |
| Kunci bentuk dan pemacu | Ya | Ya |
| Armatur (jejaring yang diposekan) | Ya | Ya |
| IK dan kekangan | Ya | Ya |
| Fizik yang di-bake (kunci) | Ya | Ya |

Semua disimpan dalam fail `.modelcraft` bersama baki animasi, dan {{ui:Buat asal}} serta {{ui:Buat semula}} garis masa membatalkan mana-mana perubahan itu.
