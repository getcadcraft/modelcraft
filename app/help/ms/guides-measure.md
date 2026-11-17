---
title: Ukur dan letak garis panduan
summary: Baca panjang dan luas, ukur antara dua titik dengan pita, dan susun garis panduan serta titik untuk dilukis berdasarkannya.
keywords: ukur, pita pengukur, protraktor, sudut, garis panduan bersudut, garis panduan, garisan panduan, garisan binaan, jarak, dimensi, panjang, luas, ofset, susun atur, titik panduan
from: de6d04d9
---

## Baca saiz tanpa mengukur

Pilih sesuatu dan lihat {{ui:Maklumat entiti}}:

- Tepi menunjukkan **panjangnya**.
- Muka menunjukkan **luasnya** dan bilangan lubangnya.
- Beberapa muka menunjukkan **jumlah luasnya**.
- Kumpulan atau komponen menunjukkan **saiznya** (lebar × kedalaman × tinggi kotak di sekelilingnya) dan, jika ia pepejal tertutup, **isipadunya**.
- Tanpa apa-apa dipilih, {{ui:Maklumat entiti}} menunjukkan saiz keseluruhan model.

Panjang dan luas menggunakan unit dalam pemilih di bahagian kanan bawah. Model dalam milimeter menunjukkan luas 0.01 m² dan ke atas dalam meter persegi (bilik 4 × 3 m dibaca "12 m²").

Semasa melukis, kotak nilai menunjukkan panjang, saiz, jejari atau jarak secara langsung, jadi anda jarang perlu mengukur selepas itu.

Untuk menukar saiz selepas melukis, pilih tepi atau kumpulan dan taip semula panjang atau saiznya dalam {{ui:Maklumat entiti}}. Atau letakkan [dimensi](topic:dimensions) dan taip panjang baharu ke dalamnya.

## Ukur antara dua titik

1. Tekan {{key:T}} untuk {{ui:Pita}} ukuran.
2. Klik satu titik: sudut, titik tengah, titik pada muka, atau tanah. (Klik pada tepi melakukan sesuatu yang lain; lihat di bawah.)
3. Alih ke titik kedua. Hujung dan kotak nilai ({{ui:Panjang}}) menunjukkan jaraknya. Ia melekat pada titik dan pada arah merah, hijau dan biru.
4. Klik. Bar status berbunyi "Diukur 4' 6"." dan **titik panduan** ditinggalkan pada titik kedua.

Untuk meninggalkan titik panduan pada jarak yang tepat, taipkannya selepas klik pertama dan tekan {{key:Enter}}: ia pergi mengikut arah yang anda tuju.

## Letak garis panduan

Garis panduan ialah garisan putus-putus tanpa hujung, selari dengan tepi, pada jarak yang anda pilih. Gunakan garis panduan untuk menyusun garis mundur, ketinggian lantai, atau tempat tingkap bermula.

1. Tekan {{key:T}}.
2. Klik pada **tepi** (bukan hujungnya). Kotak nilai berbunyi "Pada tepi".
3. Alih dari tepi, ke sisi tempat garis panduan patut pergi. Garisan putus-putus mengikut, selari dengan tepi, dan kotak nilai ({{ui:Ofset}}) menunjukkan jaraknya.
4. Klik, atau taip ofset dan tekan {{key:Enter}}: `1.5m`, `5'`.

   Bar status berbunyi "Garis panduan 1.5 m dari tepi."

Bermula pada garis panduan sedia ada menghasilkan garis panduan lain yang selari dengannya, supaya anda boleh mengembangkan grid dari satu garis panduan.

Jika anda menaip ofset tanpa beralih dari tepi dahulu, ModelCraft tidak dapat menentukan sisi yang anda maksudkan: "Alih dari tepi dahulu untuk menunjukkan sisi."

## Garis panduan pada sudut: Protraktor

1. Klik {{ui:Protraktor}} dalam kumpulan {{ui:Ubah suai}}.
2. Klik pusat: titik yang dilalui garis panduan. Pada muka, protraktor terletak pada muka itu; di tempat lain ia terletak mendatar. Selepas klik ini, {{key:Right}}, {{key:Left}} atau {{key:Up}} menegakkannya tegak lurus kepada merah, hijau atau biru (tekan lagi untuk batal).
3. Klik titik yang menetapkan 0°, contohnya sepanjang tepi.
4. Alih ke sudut yang dikehendaki dan klik: ia melekat dalam langkah 15°. Atau taip sudut dalam darjah, seperti `22.5`, dan tekan {{key:Enter}}; garis panduan pergi ke sisi tempat penunjuk berada.

Garis panduan melalui pusat pada sudut itu. Lukis sepanjangnya dengan {{ui:Garisan}} untuk kecerunan bumbung, chamfer atau dinding condong.

## Lukis berdasarkan garis panduan

Alat lukisan melekat pada garis panduan ("Pada garis panduan") dan titik panduan ("Titik panduan"), dan pada tempat garis panduan bersilang dengan arah paksi. Mulakan segi empat tepat di tempat dua garis panduan bersilang untuk meletakkannya dengan tepat.

## Alih keluar garis panduan

- Satu garis panduan: klik dengan {{ui:Pilih}} dan tekan {{key:Delete}}, atau klik dengan {{ui:Pemadam}}.
- Semua garis panduan: dengan tiada apa dipilih, klik {{ui:Padam semua garis panduan}} dalam {{ui:Maklumat entiti}}.

Garis panduan disimpan dalam fail `.modelcraft`. Ia tidak dieksport ke format lain.
