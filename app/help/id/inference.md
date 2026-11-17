---
title: Inferensi dan snap
summary: Arti penanda berwarna, snap mana yang menang, dan cara mengunci arah dengan tombol panah atau Shift.
keywords: inferensi, snap, snapping, titik ujung, titik tengah, pusat muka, pusat, pada tepi, pada muka, sumbu, sumbu merah, sumbu hijau, sumbu biru, sejajar, tegak lurus, kunci, shift, osnap
from: e78984e9
---

Saat alat gambar atau sunting bekerja, ModelCraft melihat apa yang ada di bawah penunjuk dan snap ke hal yang paling berguna di dekatnya. Sebuah penanda menunjukkan apa yang ditemukannya, dan ujung di kiri bawah menyebutkan namanya.

## Penanda dan tip

| Tip | Penanda | Snap ke |
|---|---|---|
| Titik ujung | Lingkaran hijau | Ujung sebuah tepi |
| Titik tengah | Lingkaran cyan | Tengah sebuah tepi |
| Pusat muka | Lingkaran biru | Tengah muka di bawah penunjuk |
| Titik bantu | Abu-abu | Titik bantu yang ditinggalkan oleh meteran pengukur |
| Titik asal | Oker | Tempat sumbu merah, hijau, dan biru bertemu |
| Pada sumbu merah / Pada sumbu hijau / Pada sumbu biru | Garis dengan warna itu | Garis dari titik awal Anda searah dengan arah tersebut |
| Sejajar tepi / Tegak lurus tepi | Garis magenta | Garis dari titik awal Anda yang sejajar atau tegak lurus dengan tepi yang diingat (lihat di bawah) |
| Terkunci | Garis magenta | Arah yang Anda kunci dengan tombol panah atau {{key:Shift}} |
| Pada tepi | Kotak merah | Di mana saja sepanjang tepi |
| Pada garis bantu | Abu-abu | Di mana saja sepanjang garis bantu |
| Pada muka | Berlian biru | Di mana saja pada muka |
| Pada bidang | tidak ada | Bidang tempat Anda memulai, saat penunjuk berada di ruang kosong |
| Di tanah | tidak ada | Tanah (bidang merah-hijau), saat tidak ada yang lain di sana |

Saat garis sumbu dari titik awal Anda memotong tepi atau garis bantu, ModelCraft snap ke titik potongnya dan tip menyebutkan keduanya, misalnya "Pada sumbu merah, pada tepi".

## Snap mana yang menang

1. **Titik** dalam jarak sekitar 12 piksel: titik ujung lebih dulu, lalu titik bantu, titik tengah, pusat muka di bawah penunjuk, dan titik asal.
2. **Arah** dari titik awal: sumbu merah, hijau, dan biru, serta sejajar atau tegak lurus dengan tepi yang diingat.
3. **Pada tepi** atau garis bantu.
4. **Pada muka.**
5. **Bidang gambar**, atau tanah.

Objek yang tersembunyi di balik muka tidak pernah di-snap. Putar tampilan agar Anda bisa melihat titik yang diinginkan.

## Menggambar pada muka dari sebuah titik

{{ui:Rectangle}}, {{ui:Circle}}, atau {{ui:Polygon}} yang dimulai dari sudut, titik tengah, tepi, atau pusat muka digambar **pada bidang muka di bawah penunjuk**, dan memotong muka itu. Sebuah tepi termasuk dalam dua muka, sehingga sisi tepi tempat penunjuk berada yang menentukan: untuk menggambar di ujung kotak yang panjang, mulailah dari tengah salah satu tepinya dengan penunjuk sedikit di dalam muka ujung.

## Sejajar dan tegak lurus

ModelCraft mengingat **tepi terakhir yang dilewati penunjuk sebelum klik pertama Anda**. Memulai dari sudut atau dari sebuah tepi dihitung sebagai melewati tepi itu. Setelah alat bekerja, tepi lain yang Anda lewati tidak menggantikannya.

Untuk menggambar garis yang sejajar dengan tepi yang sudah ada:

1. Tekan {{key:L}} lalu arahkan ke tepi yang ingin Anda samakan.
2. Pindah ke titik awal, sebisa mungkin tanpa melewati tepi lain di jalan, lalu klik.
3. Pindah searah dengan tepi itu. Garis berubah menjadi magenta dan tip menyebutkan "Sejajar tepi". Tegak lurus bekerja dengan cara yang sama, di dalam bidang tempat Anda menggambar.

Jika tepi yang diingat keliru, tekan {{key:Esc}}, arahkan ke tepi yang benar, lalu mulai lagi.

## Kunci arah

Setelah klik pertama sebuah alat, Anda bisa menjaga titik berikutnya tetap pada satu garis:

| Tombol | Mengunci ke |
|---|---|
| {{key:Right}} | Sumbu merah |
| {{key:Left}} | Sumbu hijau |
| {{key:Up}} | Sumbu biru (lurus ke atas) |
| {{key:Down}} | Sejajar dengan tepi yang diingat (lihat di atas) |

Tekan panah yang sama lagi untuk membuka kunci. Bilah status menampilkan "Terkunci ke sumbu merah. Tekan panah yang sama untuk membuka kunci."

Saat terkunci, titik bergeser sepanjang garis ke arah mana pun penunjuk berada, dan tetap sejajar dengan titik yang Anda arahkan: arahkan ke sudut kotak lain untuk menggambar garis sepanjang merah tepat sejauh sudut itu.

**{{key:Shift}}** mengunci arah apa pun yang sedang Anda snap saat ini (sumbu, atau sejajar), selama Anda menahannya. Lepaskan untuk membuka kunci.

Kunci bekerja di {{ui:Line}}, {{ui:Rectangle}}, {{ui:Circle}}, {{ui:Polygon}}, {{ui:Move}}, {{ui:Scale}}, dan {{ui:Tape}}. Sebelum klik pertama, tombol panah justru memutar tampilan.

## Di dalam grup

Saat Anda menyunting di dalam grup atau komponen, sumbunya adalah sumbu milik grup (sumbu itu ikut bergerak dengannya, dan ikut berputar jika grup itu diputar). Snap tetap menemukan titik dan tepi di luar grup, sehingga Anda bisa menyelaraskan sesuatu dengan sisa model.
