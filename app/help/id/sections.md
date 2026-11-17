---
title: Bidang potong: buka model
summary: Pasang bidang potong untuk melihat ke dalam model, geser melaluinya, balikkan, atau matikan potongannya.
keywords: potongan, bidang potong, potongan irisan, potong, cutaway, klip, bagian dalam, denah, irisan, penampang melintang
from: 28c3a645
---

Bidang potong memotong model agar Anda dapat melihat dan bekerja di dalamnya: denah lantai sebuah rumah, bagian dalam lemari. Model tidak diubah; potongan hanya tampilan.

## Pasang satu

1. Klik {{ui:Potongan}} di grup {{ui:Kamera}}.
2. Klik sebuah muka. Bidang ditempatkan di muka itu, dengan empat panah menghadap Anda.

   Klik jauh dari muka mana pun untuk bidang persegi yang tegak lurus pada arah pandang Anda paling banyak. Tekan tombol panah terlebih dahulu untuk menegakkannya tegak lurus terhadap merah ({{key:Right}}), hijau ({{key:Left}}), atau biru ({{key:Up}}).

Sisi yang ditunjuk panah adalah **yang dibuang**. Bidang yang diletakkan pada muka belum memotong apa pun: geser ke dalam model.

## Geser, balikkan, matikan

Klik garis tepi bidang untuk memilihnya. Di {{ui:Info entitas}}:

- {{ui:Sepanjang panahnya}} menyatakan letaknya. Ketik jarak baru dan tekan {{key:Enter}} untuk menggeser bidang melalui model; mengetik `-1m` pada bidang yang Anda letakkan pada muka depan memindahkannya 1 m ke dalam model.
- {{ui:Balikkan}} membalik panah, sehingga sisi lainnya yang dibuang.
- {{ui:Aktif (memotong model)}}: satu bidang memotong dalam satu waktu. Centang kotak bidang lain, atau pasang bidang baru, dan bidang itulah yang memotong.
- Ganti namanya di {{ui:Nama}}; hapus dengan {{key:Delete}} atau {{ui:Penghapus}}.

Saat bidang melewati solid tertutup, potongannya diisi dengan warna gelap. Geometri yang tidak tertutup (satu muka, kotak terbuka) dipotong tetapi tidak diisi.

## Tampilkan dan sembunyikan

Di {{ui:Tampilan}}:

- {{ui:Tampilkan bidang potong}} menyembunyikan garis tepi dan panah bidang (potongannya tetap).
- {{ui:Tampilkan potongan}} mematikan potongan dan menampilkan seluruh model, tanpa menghapus bidangnya.

[Tampilan presentasi](topic:styles-shadows#presentation-view) juga menyembunyikan garis tepi.

## Hal yang perlu diketahui

- Yang dibuang tidak dapat diklik atau di-snap, sehingga Anda dapat menggambar pada apa yang ditampilkan potongan.
- Bidang potong, bidang mana yang aktif, dan kedua sakelar disimpan dalam file ModelCraft. Setiap perubahan adalah satu langkah urung.
- Ekspor selalu berisi seluruh model: potongan adalah tampilan, bukan suntingan.
