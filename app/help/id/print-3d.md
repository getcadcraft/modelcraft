---
title: Siapkan model untuk pencetakan 3D
summary: Periksa bahwa model tertutup dan menghadap arah yang benar, lihat ukuran, alas, dan bagian yang menggantung, perbaiki yang salah, lalu unduh sebagai STL atau 3MF untuk slicer Anda.
keywords: cetak 3d, pencetakan 3d, printer, cetak, slicer, stl, 3mf, kedap air, tertutup, manifold, solid, lubang, terbalik, menggantung, penopang, alas, bed, milimeter, ekspor, perbaiki, perbaikan, lubangi, ukuran alas, pemula, tebal dinding, alat cetak
from: 948e19af
---

Slicer printer 3D membutuhkan bentuk yang tertutup: tanpa lubang, setiap muka menghadap ke luar, dan tidak ada yang menembus dirinya sendiri. {{ui:Ekspor}} › {{ui:Periksa untuk pencetakan 3D (STL atau 3MF)…}} memeriksa hal itu sebelum Anda mengunduh file.

## Periksa dan unduh

1. Pilih apa yang ingin Anda cetak: satu atau lebih grup atau komponen, atau beberapa muka. Jika tidak ada yang dipilih, semua yang ditampilkan akan dicetak.
2. Klik {{ui:Ekspor}} dalam grup {{ui:File}}, lalu {{ui:Periksa untuk pencetakan 3D (STL atau 3MF)…}}.

   Dialog dimulai dengan satu baris: "Siap dicetak", berapa hal yang perlu diperbaiki sebelum mencetak, atau berapa yang perlu diperiksa dahulu. Setiap masalah memiliki tiga bagian: apa yang salah, mengapa itu penting, dan apa yang harus dilakukan. Setelah itu ada ukuran dalam milimeter, volume, jumlah segitiga, dan alas printer Anda.

3. Jika dialog mendaftar hal-hal yang perlu diperbaiki, klik {{ui:Perbaiki yang dapat diperbaiki}} (lihat di bawah). Pemeriksaan berjalan lagi dengan sendirinya.
4. Klik {{ui:Unduh 3MF}} atau {{ui:Unduh STL}}.

Yang dicetak adalah apa yang Anda lihat: muka tersembunyi, grup dan komponen tersembunyi, serta apa pun pada tag yang tersembunyi tidak ikut. Ukuran selalu dalam milimeter, satuan yang diharapkan slicer, apa pun satuan yang ditampilkan model.

:::tip
Utamakan 3MF jika slicer Anda membacanya: ia mempertahankan warna dan satuan. STL tidak memiliki keduanya, dan slicer menganggapnya dalam milimeter.
:::

## Yang diperiksa

Ini menghentikan atau merusak cetakan, dan membuat dialog menampilkan "Tidak siap dicetak":

| Masalah | Artinya | Yang harus dilakukan |
|---|---|---|
| Muka hanya di satu sisi | Lubang: sebuah tepi memiliki muka di satu sisi dan tidak ada di sisi lain | Gambar muka yang hilang (garis melintasi celah sering kali menutupnya), atau gunakan {{ui:Perbaiki}} (di bawah) |
| Dimiliki oleh tiga muka atau lebih | Muka bertemu di sirip atau dinding di dalam solid | Hapus muka dalam |
| Muka menghadap arah yang berlawanan | Sebagian muka menghadap ke dalam, sebagian ke luar | Pilih muka yang menghadap ke dalam dan klik {{ui:Balik muka}} di {{ui:Info entitas}} |
| Terbalik | Seluruh bagian tertutup menghadap ke dalam | Pilih mukanya dan balikkan |
| Menembus dirinya sendiri | Satu bagian terlipat menembus dirinya sendiri | {{ui:Edit}} › {{ui:Lainnya}} › {{ui:Potongkan dengan model}}, lalu hapus yang ada di dalamnya. Lihat [Intersect faces](topic:intersect) |

Ini adalah peringatan: model tetap bisa dicetak, tetapi periksa dulu.

- **Bagian terpisah saling tumpang tindih**, atau **bertemu muka ke muka**: slicer biasanya menggabungkannya menjadi satu. Untuk file yang lebih bersih, gabungkan dengan {{ui:Solid}} › {{ui:Gabungkan}}. Lihat [Alat solid](topic:solids).
- **Tidak ada yang datar di bagian bawah**: putar model agar sebuah muka bertumpu di alas, atau slicer akan menambahkan penopang atau rakit.
- **Miring lebih dari 45° dari tegak**: muka-muka itu memerlukan penopang. Dialog menyebutkan berapa bagian permukaan yang demikian.
- **Kurang dari 1 mm lebarnya**: kemungkinan dimodelkan dalam satuan yang salah. Periksa satuan di bilah status.

Bagian berongga (kulit tertutup di dalam bagian lain) tidak apa-apa: muka-mukanya menghadap ke rongga, dan volumenya diambil.

## Perbaiki masalah

Di bawah **Lokasi masalah**, dialog menyebutkan setiap grup atau komponen yang bermasalah (muka lepas yang tidak berada dalam grup didaftar sebagai "Muka tidak dalam grup"), beserta apa yang salah di dalamnya. Komponen yang ditempatkan beberapa kali didaftar sekali: memperbaikinya berarti memperbaiki setiap salinan.

- {{ui:Tampilkan}} membuka grup itu dan memilih tepi serta muka yang salah, sehingga tampak disorot.
- {{ui:Perbaiki yang dapat diperbaiki}} memperbaiki semuanya sekaligus: menutup lubang yang tepinya datar, menghapus muka di dalam bentuk dan tepi yang tersesat, serta membalikkan muka agar menghadap ke luar. Ini satu langkah: {{key:Mod+Z}} membatalkannya. Pemeriksaan kemudian berjalan lagi dan menampilkan apa yang tersisa.

Yang tidak bisa diperbaiki (lubang yang tepinya tidak datar, bagian yang menembus dirinya sendiri) tetap ada di daftar beserta apa yang harus dilakukan secara manual. {{ui:Perbaiki}} di bawah **Print tools** melangkah lebih jauh: ia menutup lubang yang tidak datar, menghapus potongan lepas dan muka ganda, serta mendaftar setiap perbaikan. Lihat [Penopang, tebal dinding, pelubangan, dan perbaikan](topic:print-tools#repair). Anda juga dapat memperbaiki satu grup sekaligus: pilih grup itu, lalu gunakan {{ui:Tampilkan masalah}} dan {{ui:Perbaiki}} di {{ui:Info entitas}}. Lihat [Alat solid](topic:solids).

## Bagian berongga

{{ui:Lubangi}} di bawah **Print tools** melubangi bagian sampai ketebalan dinding yang Anda berikan, dengan lubang pembuangan di tempat Anda mengklik. Lihat [Lubangi](topic:print-tools#hollow).

Anda juga dapat menggambar rongga sendiri: grup tertutup di dalam bagian, tidak menyentuhnya, dengan semua mukanya dibalik agar menghadap ke rongga. Pemeriksaan menghitungnya sebagai rongga dan mengambil volumenya; ia tidak didaftar sebagai sesuatu yang harus diperbaiki.

## Alas printer Anda

Pilih ukuran alas printer Anda di {{ui:Pengaturan}} › {{ui:ModelCraft}} › {{ui:Bed printer 3D}}. Pemeriksaan kemudian memberi peringatan jika model lebih besar dari alas, dengan diputar ke kedua arah. Lihat [Pengaturan](topic:settings#3d-printer-bed).

## Alat cetak

Di bawah temuan dialog, **Print tools** membuka {{ui:Pratinjau penyangga}} (di mana penopang diletakkan dan kira-kira berapa banyak), {{ui:Tebal dinding}} (dinding yang terlalu tipis untuk dicetak), {{ui:Lubangi}}, dan {{ui:Perbaiki}}. Lihat [Penopang, tebal dinding, pelubangan, dan perbaikan](topic:print-tools). {{ui:Pisahkan untuk dicetak}} memotong model yang terlalu besar untuk alas menjadi beberapa potong dengan konektor dan sambungan yang diberi nomor: lihat [Pisahkan model besar untuk dicetak](topic:print-split).

## Tidak diperiksa

Pemeriksaan tidak melakukan slicing: detail kecil yang tidak bisa digambar oleh nozzle Anda, serta penopang sebenarnya, adalah urusan slicer Anda. Lihat [Belum dibuat](topic:not-built-yet#3d-printing).
