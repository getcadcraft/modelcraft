---
title: Objek lengkung
summary: Lukis lengkung Bézier, NURBS dan segmen lurus, berikan ketebalan, lebar atau tirus, isikan yang rata, tetapkan teks sebagai lengkung, dan tukarkannya kepada jejaring.
keywords: lengkung, curve, bezier, nurbs, splin, spline, laluan, path, tiub, paip, kabel, tali, bevel, ekstrud, tirus, condong, jejari, isi, profil, teks, huruf, logo, lengkung kepada jejaring
from: 602bf077
---

**Objek lengkung** ialah lengkung yang membentuk bentuk: tiub di sepanjangnya (bevel), jalur (ekstrud), tanduk yang menirus (tirus), atau — apabila ia rata dan tertutup — plat diisi atau huruf. Bentuk mengikut lengkung: alihkan titik dan tiub bergerak bersamanya. Apabila bentuknya betul, tukarkannya kepada jejaring.

## Tambah lengkung

Pilih {{ui:Lengkung}} dalam senarai ruang kerja dan tekan {{ui:Tambah}}:

| Jenis | Apa ia |
|---|---|
| Lengkung Bézier, bulatan Bézier | Melalui titiknya; setiap titik mempunyai dua pemegang yang menetapkan arah lengkung |
| Lengkung NURBS, bulatan NURBS, Laluan | Licin, dilukis ke arah titiknya (ia bermula dan berakhir pada titik hujungnya); setiap titik mempunyai satu berat |
| Teks | Teks anda sebagai garis luar huruf yang rata dan diisi |

Lengkung baharu mendapat tiub nipis supaya ia boleh dilihat dan dipilih; tetapkan kedalaman bevelnya kepada 0 untuk lengkung kosong.

Anda juga boleh bermula daripada sesuatu yang dilukis: pilih lengkok, bulatan, poligon atau lengkung yang dilukis dalam ruang kerja Model dan tekan {{ui:Buat objek lengkung}} dalam {{ui:Maklumat entiti}}. Garisan yang dilukis kekal.

## Sunting titik

Klik dua kali objek lengkung (atau pilih dan pilih {{ui:Lengkung}}) untuk menyuntingnya.

- Klik titik atau pemegang ({{key:Shift}} menambah atau membuang); seret untuk mengalihkannya. Seret pada ruang kosong untuk memilih dengan kotak.
- {{ui:Panjangkan}} ({{key:E}}, atau {{key:Ctrl}}+klik) menambah titik selepas hujung yang dipilih, di penunjuk.
- {{ui:Bahagikan}} ({{key:W}}) meletakkan satu titik antara setiap pasangan jiran yang dipilih; Bézier mengekalkan bentuknya.
- {{ui:Alih}}, {{ui:Pusing}}, {{ui:Skala}} menggerakkan titik yang dipilih dengan penunjuk (kekunci modeler {{key:G}} {{key:R}} {{key:S}}, kekunci tolak/tarik {{key:M}} {{key:Q}} {{key:S}}); klik untuk mengekalkan, {{key:Esc}} untuk membatalkan.
- {{ui:Tutup}} ({{key:C}}) menutup splin terbuka atau membuka yang tertutup; {{ui:Balikkan}} ({{key:Shift+R}}) menjalankannya ke arah sebaliknya.
- Pemegang Bézier: {{ui:Licinkan}} ({{key:V}}) meletakkannya untuk lengkung licin, {{ui:Sudut}} ({{key:Shift+V}}) menghalakannya ke jiran, {{ui:Bebas}} ({{key:Alt+V}}) membiarkannya di tempat anda letakkan. Menyeret pemegang menjadikannya bebas.
- {{ui:Bézier}}, {{ui:NURBS}} dan {{ui:Poli}} menukar jenis splin yang dipilih, sambil mengekalkan titik.

Setiap perubahan ialah satu langkah buat asal.

## Bentuk

Tetapan berada dalam panel (dan dalam {{ui:Maklumat entiti}} dalam ruang kerja Model):

- **Bentuk:** lengkung 3D pergi ke mana-mana arah; lengkung rata kekal dalam satahnya sendiri dan boleh diisi.
- **Isi splin tertutup** (rata): garis luar menjadi plat; garis luar di dalam yang lain ialah lubang, jadi huruf mengekalkan lubangnya.
- **Ekstrud:** separuh lebar jalur (lengkung terbuka atau 3D), atau separuh ketebalan plat (diisi).
- **Kedalaman bevel** dan **kebulatan:** tiub bulat di sepanjang lengkung (dengan ekstrud: jalur bulat); pada bentuk yang diisi, tepi bulat.
- **Tutup hujung:** penutup pada tiub terbuka.
- **Tirus sepanjangnya:** skala sama rata sepanjang setiap splin, contohnya `1, 0.2` untuk tanduk, `0, 1, 0` untuk gelendong.
- **Kelicinan** dan, untuk NURBS, **peringkat**: betapa halus ia dilukis, dan betapa licin (2 lurus … 6 paling licin).
- Dengan titik dipilih: **jejari** (ketebalan tiub di situ, didarab dengan bevel), **condong** (memusingkan jalur mengelilingi lengkung) dan, untuk NURBS, **berat**.

Pengubah suai berfungsi di atas objek lengkung seperti pada jejaring: Tatasusunan sepanjangnya, Cermin, atau permukaan Subdivision. Lihat [Pengubah suai pada jejaring](topic:modifiers).

## Tukar kepada jejaring

{{ui:Kepada jejaring}} (dalam ruang kerja Lengkung atau dalam {{ui:Maklumat entiti}}, {{ui:Lengkung kepada jejaring}}) menjadikan objek lengkung itu jejaring yang ia tunjukkan sekarang; pengubah suainya kekal di atasnya. Kemudian sunting dalam ruang kerja jejaring. Buat asal menukarnya kembali.

Lihat juga [Jejaring](topic:meshes) dan [Sunting jejaring](topic:mesh-edit).
