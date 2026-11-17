---
title: Persilang muka
summary: Lukis garisan tempat muka saling memotong, supaya anda boleh menolak, memadam atau mewarnakan kepingan.
keywords: persilang, persilang muka, persilang dengan model, potong, bukaan, lubang, gabung, garisan tempat muka bersilang, boolean
from: 6bc58526
---

Apabila satu bentuk melalui bentuk lain, ModelCraft tidak melukis garisan tempat muka mereka bertemu: ia hanya bertindih. **Persilang** melukis garisan itu, sebagai tepi, supaya muka terbelah di situ. Kemudian anda boleh menolak/menarik, memadam atau mewarnakan kepingan.

Kedua-dua arahan terdapat dalam {{ui:Sunting}} › {{ui:Lagi}}.

## Persilang dengan model

Memotong apa yang anda pilih terhadap **setiap muka pada skrin**.

Sebagai contoh, sebatang rasuk (kumpulan) melalui dinding (kumpulan lain), dan anda mahukan bukaan dalam dinding itu:

1. Klik dua kali pada dinding untuk membukanya, dan pilih semua mukanya ({{key:Ctrl+A}}).
2. {{ui:Sunting}} › {{ui:Lagi}} › {{ui:Persilang dengan model}}.

Garis besar rasuk dilukis pada kedua-dua muka dinding, sebagai dua muka baharu. Tolak salah satunya melalui dinding untuk membuat bukaan, kemudian tutup dinding.

## Persilang dengan pilihan

Memotong muka, kumpulan dan komponen yang dipilih **hanya antara satu sama lain**. Pilih sekurang-kurangnya dua.

## Ke mana garisan pergi

Garisan sentiasa dilukis dalam **konteks terbuka**: dalam model apabila tiada kumpulan dibuka, atau dalam kumpulan yang sedang anda sunting. Kumpulan dan komponen yang tidak dibuka tidak diubah. Jadi untuk memotong muka sesuatu kumpulan, buka dahulu, seperti dalam contoh di atas.

## Perkara yang perlu diketahui

- Muka yang terletak dalam satah yang sama tidak dipersilangkan.
- Garisan yang menutup gelung pada muka membentuk muka baharu, seperti garisan yang dilukis.
- Setiap persilangan ialah satu langkah buat asal. Jika tiada yang bersilang, tiada apa berubah.
- Bagi bentuk tertutup, [alat pepejal](topic:solids) (Kesatuan, Tolak) melakukan keseluruhan kerja dalam satu langkah.
