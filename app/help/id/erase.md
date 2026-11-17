---
title: Hapus dan bersihkan
summary: Hapus tepi, grup dan panduan dengan penghapus atau tombol Delete, gabungkan muka yang terbelah, dan perbaiki muka yang menghadap arah yang salah.
keywords: hapus, penghapus, delete, buang, gabung, gabungkan muka, bersihkan, garis liar, balik muka, muka belakang, urungkan
from: 80b92a81
---

## Hapus dengan penghapus

1. Tekan {{key:E}} untuk {{ui:Penghapus}}.
2. Klik tepi, grup atau komponen, atau panduan. Itu akan dihapus.
3. Untuk menghapus beberapa sekaligus, tekan dan seret melintasinya. Semua yang Anda lewati disorot, dan semuanya hilang saat Anda lepas.

Penghapus tidak memilih muka: muka hilang ketika Anda menghapus tepi yang dibutuhkannya. Muka adalah yang ditelusuri penghapus untuk menemukan tepi.

## Apa yang terjadi pada muka

- **Tepi di antara dua muka pada bidang yang sama** (misalnya garis yang Anda gambar melintasi lantai) hilang, dan kedua muka **menyatu** menjadi satu.
- **Tepi yang dibutuhkan muka agar tetap tertutup** (tepi kotak) membawa muka itu ikut hilang. Hapus satu tepi atas kotak, dan sisi atas serta satu sisi samping akan hilang, menyisakan kotak terbuka.
- **Ujung lepas** (titik yang tidak lagi dipakai tepi) dibersihkan.

Menghapus salinan terakhir komponen juga menghapus komponen itu dari panel {{ui:Komponen}}.

## Hapus dengan tombol Delete

1. Pilih apa yang ingin Anda hapus dengan {{ui:Pilih}}.
2. Tekan {{key:Delete}} atau {{key:Backspace}}.

Ini juga menghapus muka. Muka yang dihapus dengan cara ini meninggalkan tepinya, jadi Anda dapat menghapus bagian atas kotak dan tetap menyimpan garis besarnya, lalu menggambar sesuatu yang lain di sana.

## Bersihkan garis liar pada muka datar

Jika dinding atau lantai menampilkan garis yang tidak Anda inginkan (sisa dari menggambar), hapus dengan {{ui:Penghapus}}. Garis yang berada di dalam muka akan menyatu dan hilang; muka tetap ada.

## Muka menghadap arah yang salah

Muka yang dilihat dari belakang berwarna abu-abu kebiruan. Jika muka menampilkan abu-abu kebiruan di sisi luar model Anda:

1. Pilih muka itu.
2. Klik {{ui:Balik muka}} di {{ui:Info entitas}}.

Arah muka paling penting saat Anda mengekspor: perender, mesin game, dan pencetak 3D dapat menyembunyikan atau salah membaca muka yang menghadap ke dalam.

## Urungkan kesalahan

{{key:Mod+Z}} mengurungkan satu langkah setiap kali, {{key:Mod+Y}} (atau {{key:Mod+Shift+Z}}) mengulangi. Seretan dengan penghapus adalah satu langkah, berapa pun banyak yang dihapus. Bilah status menyebut apa yang dibatalkan: "Penghapusan dibatalkan."
