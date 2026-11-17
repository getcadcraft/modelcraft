---
title: Dorong dan tarik muka menjadi solid
summary: Ubah muka menjadi kotak, buat bangunan lebih tinggi atau lebih rendah, tambahkan bagian menonjol atau cekungan, dan ulangi jarak dengan klik ganda.
keywords: dorong tarik, ekstrusi, tinggi, solid, kotak, massa, lebih tinggi, cekungan, menonjol, ulangi, klik ganda, volume, level, pada muka, rata, tinggi sama
from: dc093c91
---

{{ui:Dorong/tarik}} ({{key:P}}) menggerakkan muka sepanjang arahnya sendiri: naik dan turun untuk lantai, masuk dan keluar untuk dinding. Hasilnya bergantung pada muka tersebut.

## Membuat solid dari muka

1. Gambar muka, misalnya persegi panjang di tanah ([Gambar muka](topic:draw-faces)).
2. Tekan {{key:P}}.
3. Arahkan kursor ke muka. Muka itu akan disorot.
4. Klik muka, lalu gerakkan penunjuk. Muka naik (atau turun) dan sisi-sisi tumbuh dari tepinya. Kotak nilai ({{ui:Jarak}}) dan tip menampilkan jaraknya.
5. Klik untuk menyelesaikan, atau ketik jarak dan tekan {{key:Enter}}: `3m`, `10'`, `2700` pada model milimeter.

   Sekarang Anda memiliki solid tertutup. Pilih semuanya lalu grupkan (lihat [Grup dan komponen](topic:groups-components)). {{ui:Info entitas}} kemudian menampilkan "Solid: Ya" dan volumenya.

Muka tunggal bisa ke arah mana pun: tarik ke atas untuk massa di atas tanah, atau dorong ke bawah untuk lubang atau fondasi.

:::tip
Alih-alih mengklik dua kali, tekan muka, seret, lalu lepaskan. Pada layar sentuh, itu cara yang paling alami: tekan, seret, angkat.
:::

## Tarik ke tinggi sesuatu yang lain

Saat menarik, arahkan kursor ke sudut, titik tengah, tepi, atau garis bantu dari bagian lain model. Muka akan menempel pada tinggi itu dan penanda menunjukkan titiknya. Gunakan ini untuk membuat dua blok sama tinggi, atau untuk berhenti di garis bantu yang Anda tempatkan dengan [meteran](topic:guides-measure).

Anda juga bisa mengarahkan kursor ke muka yang sejajar dengan muka yang sedang Anda dorong, seperti bagian atas blok lain atau bagian atas kotak tempat sebuah tiang berdiri. Tip menampilkan "Pada muka", dan muka yang Anda dorong akan berakhir rata dengannya. Misalnya, dorong muka dalam sebuah pipa ke bawah sampai rata dengan kotak di bawah pipa itu.

Muka yang membentuk sudut terhadap muka yang sedang Anda dorong tidak menentukan tinggi. Jarak mengikuti penunjuk. Begitu pula muka di belakang muka yang Anda dorong.

Saat muka yang didorong kembali berakhir rata dengan muka di sekitarnya, sisi-sisinya hilang. Tidak ada sisi bertinggi nol yang tersisa, dan garis tepi yang Anda gambar tetap berada pada muka, sehingga Anda bisa mendorongnya lagi nanti. Untuk menjadikannya satu muka lagi, hapus tepi garis tepi dengan {{ui:Penghapus}}: kedua muka akan menyatu.

## Membuat kotak lebih tinggi atau lebih rendah

Dorong/tarik bagian atas kotak. Karena sisinya sudah lurus naik darinya, bagian atas hanya bergerak: kotak menjadi lebih tinggi atau lebih rendah, dan tidak ada tepi baru yang dibuat.

- Mendorong bagian atas sepenuhnya ke bawah sampai dasar akan menghapus kotak. ModelCraft berhenti pada tinggi nol; ia tidak pernah membalik kotak ke dalam.
- Hal yang sama berlaku untuk muka mana pun yang semua tetangganya berjalan searah dengannya, seperti ujung dinding.

## Menambahkan bagian menonjol atau cekungan

1. Gambar persegi panjang di sisi kotak (mulai dari muka; ia tetap berada pada bidang muka).
2. Tekan {{key:P}} dan tarik persegi panjang baru ke **luar**. Ini menambah material: bagian menonjol, cerobong, atau kanopi.
3. Atau dorong ke **dalam**. Ini membuat cekungan: teras, ceruk, atau pintu masuk yang mundur.

Ketika sisi bagian baru sejajar dengan muka yang sudah ada, keduanya menyatu menjadi satu muka, sehingga Anda tidak mendapat garis liar pada dinding datar.

## Dorong sampai tembus

Mendorong muka ke dalam solid berhenti di muka pertama di belakangnya. Saat mencapai muka itu, ia memotong bukaan tembus. Begitulah cara membuat jendela dan pintu pada dinding yang memiliki ketebalan. Lihat [Buat bukaan tembus dinding](topic:openings).

## Ketik jarak

Setelah mengklik muka, ketik jaraknya dan tekan {{key:Enter}}.

- Jarak yang diketik mengikuti arah gerakan Anda. Jika Anda belum bergerak, jarak itu menuju ke depan muka (keluar dari solid, naik dari tanah).
- Ketik angka negatif, seperti `-500`, untuk ke arah sebaliknya.
- Jika Anda berubah pikiran sebelum mengklik, tekan {{key:Esc}}. Muka akan kembali.

## Ulangi jarak terakhir

Setelah satu dorong/tarik, klik ganda muka lain dengan {{ui:Dorong/tarik}} masih terpilih. Muka itu bergerak sejauh jarak yang sama. Ini cara cepat untuk memberi beberapa dinding atau beberapa lantai ketebalan atau tinggi yang sama.

ModelCraft mengingat jarak itu sampai Anda beralih ke alat lain.

## Hal yang perlu diketahui

- Dorong/tarik bekerja pada satu muka dalam satu waktu. Jika Anda mengklik sesuatu yang bukan muka, bilah status menampilkan "Dorong/tarik bekerja pada muka. Klik sebuah muka."
- Untuk mendorong atau menarik muka di dalam grup atau komponen, buka dulu dengan klik ganda.
- Dengan **Tabrakan** aktif, dorongan atau tarikan yang mengenai solid lain akan berhenti di titik sentuhnya. Tip menyebutkan apa yang disentuhnya (nama objek, atau "geometri lepas dalam grup ini") dan menyorot muka yang ditemuinya. Kantong yang Anda dorong ke dalam solidnya sendiri (misalnya muka yang diimbangi lalu didorong kembali ke bawah) merupakan bagian dari solid itu dan tidak pernah dihentikan oleh dindingnya.
- Dua solid yang didorong saling menembus tidak saling memotong atau menyatu: muka mereka hanya saling melewati. Lihat [Belum dibuat](topic:not-built-yet).
