---
title: Medan: tanah dari kontur, dan cara membentuknya
summary: Buat tanah dari garis kontur atau sebagai grid, lalu naikkan dan turunkan dengan kuas lembut.
keywords: medan, tanah, lanskap, topografi, kontur, garis kontur, tapak, lereng, bukit, gundukan, kotak pasir, smoove, pahat, kelandaian, TIN
from: 407652b3
---

Medan adalah tanah yang terbuat dari segitiga, sehingga dapat mengikuti bentuk apa pun. Medan adalah sebuah grup: klik dua kali untuk menyuntingnya.

## Dari garis kontur

1. Dapatkan garis kontur pada ketinggiannya: gambar, atau [impor denah tapak](topic:site-plan) dan pindahkan setiap kontur ke levelnya.
2. Pilih semuanya (semua tepi dari semua kontur).
3. {{ui:Edit}} › {{ui:Lainnya}} › {{ui:Medan dari kontur yang dipilih}}.

ModelCraft menghubungkan titik-titik kontur dengan segitiga (TIN), dan melembutkan setiap tepi di dalamnya agar tanah tampak halus saat dibayangi. Garis-garisnya sendiri tetap ada; hapus atau sembunyikan jika sudah tidak diperlukan. Kontur yang sangat rapat dijarangkan menjadi 8 000 titik.

## Grid untuk dibentuk

{{ui:Edit}} › {{ui:Lainnya}} › {{ui:Grid medan…}} meminta lebar, kedalaman, dan ukuran sel, lalu menempatkan grid segitiga datar di tempat Anda mengklik sudutnya. Sel kecil membentuk permukaan yang lebih halus tetapi menghasilkan lebih banyak muka (paling banyak 200 × 200 sel).

## Pahat: naikkan dan turunkan tanah

1. Klik dua kali medan untuk membukanya.
2. {{ui:Edit}} › {{ui:Lainnya}} › {{ui:Pahat medan}}. Sebuah lingkaran menunjukkan kuas di atas tanah di bawah penunjuk.
3. Seret ke atas untuk menaikkan tanah di bawah kuas, atau ke bawah untuk menurunkannya. Bagian tengah bergerak paling banyak dan tanah melandai hingga nol di tepi lingkaran, sehingga gundukan dan cekungan tampak halus.

Untuk membuat gundukan dengan tinggi yang tepat, klik sekali, lalu ketik tingginya, misalnya `1.5m` (tanda minus akan menurunkannya), dan tekan {{key:Enter}}. Untuk mengubah kuas, ketik panjang sebelum Anda klik: `5m` memberi kuas dengan radius 5 m.

Setiap pemahatan adalah satu langkah urungkan.

## Hal yang perlu diketahui

- Pahat hanya menggerakkan muka segitiga, sehingga setiap muka tetap datar. Muka yang digambar dengan tangan (persegi panjang, poligon) bukan medan: alat akan memberi tahu Anda.
- Pemahatan menggerakkan titik lurus ke atas dan ke bawah; tidak menambah titik. Untuk detail yang lebih halus, buat grid dengan sel yang lebih kecil.
- Medan diekspor seperti grup lainnya. Dalam IFC, medan menjadi building element proxy, seperti semua yang lain.
