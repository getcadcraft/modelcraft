---
title: Satah keratan: potong model terbuka
summary: Letakkan satah keratan untuk melihat ke dalam model, gelongsorkannya, balikkannya atau matikan potongan itu.
keywords: keratan, satah keratan, potongan keratan, potong, potongan sisi, klip, dalam, pelan lantai, hiris, keratan rentas
from: 28c3a645
---

Satah keratan memotong model terbuka, supaya anda boleh melihat dan bekerja di dalamnya: pelan lantai sebuah rumah, bahagian dalam kabinet. Model tidak diubah; potongan itu hanyalah pandangan.

## Letakkan satu

1. Klik {{ui:Bahagian}} dalam kumpulan {{ui:Kamera}}.
2. Klik satu muka. Satah diletakkan pada muka itu, dengan empat anak panah menghala ke arah anda.

   Klik jauh dari mana-mana muka untuk satah segi empat sama dengan arah yang anda lihat paling banyak. Tekan kekunci anak panah dahulu untuk menegakkannya tegak lurus kepada merah ({{key:Right}}), hijau ({{key:Left}}) atau biru ({{key:Up}}).

Sisi yang dituju anak panah ialah yang **dipotong dan dibuang**. Satah yang diletakkan pada muka tidak memotong apa-apa lagi: gelongsorkannya ke dalam model.

## Gelongsor, balikkan, matikan

Klik garis luar satah untuk memilihnya. Dalam {{ui:Maklumat entiti}}:

- {{ui:Sepanjang anak panahnya}} menyatakan kedudukannya. Taip jarak baharu dan tekan {{key:Enter}} untuk menggelongsorkannya melalui model; menaip `-1m` pada satah yang diletakkan pada muka hadapan akan mengalihkannya 1 m ke dalam model.
- {{ui:Balikkan}} memusingkan anak panah, supaya sisi yang satu lagi yang dipotong dan dibuang.
- {{ui:Aktif (memotong model)}}: hanya satu satah memotong pada satu masa. Tanda kotak satah lain, atau letakkan yang baharu, dan yang itu pula memotong.
- Namakan semula dalam {{ui:Nama}}; padamkannya dengan {{key:Delete}} atau {{ui:Pemadam}}.

Di tempat satah melalui pepejal tertutup, potongan itu diisi dengan warna gelap. Geometri yang tidak tertutup (satu muka sahaja, kotak terbuka) dipotong tetapi tidak diisi.

## Papar dan sembunyikan

Dalam {{ui:Pandangan}}:

- {{ui:Tunjukkan satah bahagian}} menyembunyikan garis luar dan anak panah satah (potongan kekal).
- {{ui:Tunjukkan potongan bahagian}} mematikan potongan dan memaparkan keseluruhan model, tanpa memadamkan satah.

[Paparan persembahan](topic:styles-shadows#presentation-view) juga menyembunyikan garis luar.

## Perkara yang perlu diketahui

- Apa yang dibuang tidak boleh diklik atau dilekapkan, jadi anda boleh melukis pada apa yang ditunjukkan oleh potongan itu.
- Satah keratan, satah mana yang aktif dan kedua-dua suis disimpan dalam fail ModelCraft. Setiap perubahan ialah satu langkah buat asal.
- Eksport sentiasa mengandungi keseluruhan model: keratan ialah pandangan, bukan suntingan.
