---
title: Alat pepejal: gabung, tolak, persilang
summary: Cantumkan kumpulan dan komponen tertutup menjadi satu, potong satu daripada yang lain, atau simpan hanya bahagian yang dikongsi.
keywords: pepejal, pepejal, pemeriksa pepejal, bukan pepejal, betulkan pepejal, lubang, tepi sesat, terbalik, gabung, cantum, gabungkan, tolak, beza, potong, lubang, persilang, persimpangan, boolean, cangkerang luar
from: f35df1cc
---

Alat pepejal menggabungkan **pepejal**: kumpulan dan komponen yang muka-mukanya menutup isipadu, dengan setiap tepi menyambungkan tepat dua muka. {{ui:Maklumat entiti}} menyatakan {{ui:Pepejal}}: {{ui:Ya}} untuk satu, dan menunjukkan isipadunya.

Alat itu berada dalam menu {{ui:Pepejal}} dalam kumpulan {{ui:Susun}}.

## Apabila sesuatu bukan pepejal

Pilih kumpulan atau komponen. Apabila ia bukan pepejal, {{ui:Maklumat entiti}} memberitahu sebabnya, contohnya "Bukan pepejal: 4 tepi bersempadan dengan lubang · 1 tepi sesat":

| Masalah | Maksudnya |
|---|---|
| Tepi bersempadan dengan lubang | Satu muka hilang |
| Tepi dikongsi oleh tiga muka atau lebih | Satu muka membahagikan bahagian dalam, atau dua bentuk bersentuh di sepanjang tepi |
| Muka di dalam bentuk | Dinding yang tertinggal di dalam isipadu |
| Tepi sesat | Garisan yang tidak membatasi sebarang muka |
| Muka terbalik | Muka hadapannya menghadap ke dalam, bertentangan dengan jirannya |

{{ui:Tunjuk masalah}} membukanya dengan tepi dan muka tersebut dipilih, supaya anda boleh melihatnya. {{ui:Betulkan}} membaiki kes mudah dalam satu langkah buat asal: ia mengalih keluar tepi sesat dan muka di dalam bentuk, membalikkan muka ke arah yang betul, dan menutup lubang yang rimnya rata. Apa-apa yang tidak boleh dibaiki dengan selamat (lubang yang tidak rata, tepi yang dikongsi oleh banyak muka) ditinggalkan untuk anda, dan ia memberitahu apa yang tinggal.

## Gabung

1. Pilih dua atau lebih pepejal (klik satu, {{key:Ctrl}}+klik yang lain).
2. {{ui:Pepejal}} › {{ui:Gabung}}.

Mereka menjadi satu pepejal, dalam satu kumpulan. Di tempat mereka bertindih, muka di dalam telah hilang.

## Tolak

1. {{ui:Pepejal}} › {{ui:Tolak}}.
2. Klik pepejal untuk **dibuang** (pemotong).
3. Klik pepejal untuk **dipotong**.

Apa yang tinggal daripada pepejal kedua kekal; pemotong digunakan habis. Contohnya, untuk membuat lubang menembusi blok, lukis tiang melaluinya, jadikan tiang itu kumpulan, kemudian tolak tiang daripada blok.

## Persilang

Pilih dua atau lebih pepejal, kemudian {{ui:Pepejal}} › {{ui:Persilang}}. Hanya bahagian yang mereka kongsi dikekalkan.

## Perkara yang perlu diketahui

- Hasilnya ialah kumpulan baharu. Ia mengekalkan nama, warna dan tag pepejal pertama (untuk Tolak: yang anda potong). Warna yang dicat pada mukanya tidak dikekalkan.
- Sisi rata hasilnya ialah muka tunggal. Sisi bulat keluar sebagai faset rata yang dilukis dengannya.
- Jika kumpulan atau komponen bukan pepejal, alat itu memberitahu yang mana dan tidak mengubah apa-apa. Cari muka yang hilang atau muka sesat di dalamnya.
- Di dalam kumpulan terbuka, alat berfungsi pada kumpulan dan komponen dalam kumpulan itu.
- Setiap alat ialah satu langkah buat asal.
- Kali pertama anda menggunakan alat pepejal, enjinnya (manifold-3d) dimuatkan, yang mungkin mengambil sedikit masa.
