---
title: Alat solid: gabungkan, kurangi, irisan
summary: Gabungkan grup dan komponen tertutup menjadi satu, potong satu dari yang lain, atau simpan hanya bagian yang mereka miliki bersama.
keywords: solid, pemeriksa solid, bukan solid, perbaiki solid, lubang, tepi nyasar, terbalik, gabungkan, gabung, kombinasikan, merge, kurangi, selisih, potong, lubang, irisan, perpotongan, boolean, cangkang luar
from: f35df1cc
---

Alat solid menggabungkan **solid**: grup dan komponen yang mukanya menutup sebuah volume, dengan setiap tepi menghubungkan tepat dua muka. {{ui:Info entitas}} menyatakan {{ui:Solid}}: {{ui:Ya}} untuk satu, dan menampilkan volumenya.

Alat-alat itu ada di menu {{ui:Solid}} dalam grup {{ui:Atur}}.

## Saat sesuatu bukan solid

Pilih grup atau komponen. Jika bukan solid, {{ui:Info entitas}} menyatakan alasannya, misalnya "Bukan solid: 4 tepi berbatasan dengan lubang · 1 tepi nyasar":

| Masalah | Artinya |
|---|---|
| Tepi berbatasan dengan lubang | Sebuah muka hilang |
| Tepi dipakai bersama tiga muka atau lebih | Sebuah muka membagi bagian dalam, atau dua bentuk bersentuhan di sepanjang tepi |
| Muka di dalam bentuk | Dinding yang tertinggal di dalam volume |
| Tepi nyasar | Garis yang tidak membatasi muka mana pun |
| Muka terbalik | Muka depannya menghadap ke dalam, berlawanan dengan tetangganya |

{{ui:Tampilkan masalah}} membukanya dengan tepi dan muka tersebut terpilih, sehingga Anda dapat melihatnya. {{ui:Perbaiki}} memperbaiki kasus sederhana dalam satu langkah urungkan: ia menghapus tepi nyasar dan muka di dalam bentuk, membalik muka agar menghadap ke luar dengan benar, dan menutup lubang yang tepinya datar. Apa pun yang tidak aman untuk diperbaiki (lubang yang tidak datar, tepi yang dipakai banyak muka) dibiarkan untuk Anda, dan ia menyatakan apa yang tersisa.

## Gabungkan

1. Pilih dua solid atau lebih (klik satu, lalu {{key:Ctrl}}+klik yang lain).
2. {{ui:Solid}} › {{ui:Gabungkan}}.

Keduanya menjadi satu solid, dalam satu grup. Di tempat yang tumpang tindih, muka di dalamnya hilang.

## Kurangi

1. {{ui:Solid}} › {{ui:Kurangi}}.
2. Klik solid yang akan **diambil** (pemotong).
3. Klik solid yang akan **dipotong**.

Bagian solid kedua yang tersisa tetap ada; pemotong habis terpakai. Misalnya, untuk membuat lubang tembus pada balok, gambar tiang yang menembusnya, jadikan tiang itu grup, lalu kurangi tiang dari balok.

## Irisan

Pilih dua solid atau lebih, lalu {{ui:Solid}} › {{ui:Irisan}}. Hanya bagian yang mereka miliki bersama yang disimpan.

## Hal yang perlu diketahui

- Hasilnya adalah grup baru. Ia mempertahankan nama, warna dan tag dari solid pertama (untuk Kurangi: yang Anda potong). Warna yang dicat pada mukanya tidak dipertahankan.
- Sisi datar hasil adalah muka tunggal. Sisi bundar keluar sebagai faset datar yang digunakan saat digambar.
- Jika sebuah grup atau komponen bukan solid, alat akan menyebutkan yang mana dan tidak mengubah apa pun. Cari muka yang hilang atau muka nyasar di dalamnya.
- Di dalam grup yang terbuka, alat bekerja pada grup dan komponen di dalam grup itu.
- Setiap alat adalah satu langkah urungkan.
- Pertama kali Anda memakai alat solid, mesinnya (manifold-3d) dimuat, yang bisa memakan waktu sebentar.
