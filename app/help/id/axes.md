---
title: Pindahkan dan putar sumbu gambar
summary: Putar sumbu merah, hijau, dan biru agar sesuai dengan bangunan yang tidak tegak lurus terhadapnya, atau sejajarkan dengan sebuah muka, agar gambar dan pengetikan mengikutinya.
keywords: sumbu, sumbu gambar, origin, titik asal, sejajarkan sumbu, putar sumbu, atur ulang sumbu, bangunan miring, miring, ucs, sistem koordinat
from: cab258f7
---

Sumbu merah, hijau, dan biru memandu semua yang Anda gambar: persegi panjang sejajar dengannya, garis terkunci padanya, dan tanahnya adalah bidang merah-hijau. Saat sebuah bangunan berada pada sudut (denah tapak yang tidak tegak lurus utara, sayap yang diputar 30°), pindahkan sumbu ke bangunan itu agar gambar mengikuti dindingnya. Model itu sendiri tidak bergerak.

Ketiga perintah ini berada di {{ui:Edit}} › {{ui:Lainnya}}.

## Letakkan sumbu

1. {{ui:Edit}} › {{ui:Lainnya}} › {{ui:Letakkan sumbu}}.
2. Klik di tempat titik asal, misalnya sudut bangunan.
3. Klik sebuah titik sepanjang sumbu merah yang baru, misalnya lebih jauh di sepanjang dinding.
4. Klik sebuah titik ke arah sumbu hijau yang baru. Hijau dibuat tegak lurus terhadap merah, dan biru berdiri tegak lurus terhadap keduanya.

Sumbu digambar di tempat barunya. Persegi panjang yang sekarang Anda gambar di tanah, atau ketik sebagai `4m,3m`, berjalan sepanjang merah dan hijau yang sudah diputar; tombol panah mengunci ke keduanya; dan snap titik asal berada di titik asal yang baru.

## Sejajarkan sumbu ke sebuah muka

Pilih satu muka, lalu {{ui:Edit}} › {{ui:Lainnya}} › {{ui:Sejajarkan sumbu dengan muka}}. Biru kemudian menunjuk keluar dari muka, merah berjalan sepanjang tepi terpanjangnya, dan titik asal berada di awal tepi itu. Gunakan ini untuk menggambar di atap miring seolah-olah itu tanah.

## Atur ulang sumbu

{{ui:Edit}} › {{ui:Lainnya}} › {{ui:Atur ulang sumbu}} mengembalikannya ke tempat model dimulai.

## Hal yang perlu diketahui

- Di dalam grup atau komponen yang terbuka, sumbunya sendiri yang dipakai (ikut berputar bersamanya); sumbu model berlaku di tingkat teratas.
- Sumbu disimpan dalam file ModelCraft, dan setiap perubahan adalah satu langkah urungkan.
- Ekspor dan tampilan standar ({{ui:Atas}}, {{ui:Depan}}…) tetap memakai arah asli model.
