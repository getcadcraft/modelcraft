---
title: Sembunyikan, isolasi, dan tampilkan lagi
summary: Singkirkan objek agar bisa bekerja di antaranya, atau tampilkan hanya yang sedang Anda kerjakan; objek yang tersembunyi tetap tersembunyi di dalam file.
keywords: sembunyikan, tampilkan lagi, tampilkan semua, isolasi, sembunyikan yang lain, tampilkan, tersembunyi, tampilan lokal, visibilitas, menyingkir
from: 2c8a3457
---

Menyembunyikan menyingkirkan objek tanpa menghapusnya. Muka, tepi, grup, atau komponen yang tersembunyi tidak digambar, dan Anda tidak bisa snap, klik, atau memilihnya, sehingga Anda bisa bekerja pada apa yang ada di belakang atau di antara objek lain.

## Sembunyikan

1. Pilih apa yang akan disembunyikan: muka, tepi, grup, atau komponen.
2. {{ui:Edit}} › {{ui:More}} › {{ui:Hide}}.

Misalnya, untuk bekerja di celah sempit di antara dua grup yang berdiri berdekatan, pilih yang di depan lalu sembunyikan: klik dan snap sekarang menjangkau muka di belakangnya.

## Isolasi

Pilih apa yang ingin Anda biarkan tetap terlihat, lalu {{ui:Edit}} › {{ui:More}} › {{ui:Isolate (hide the rest)}}. Semua yang lain dalam model akan tersembunyi, atau, saat Anda sedang menyunting di dalam sebuah grup, semua yang lain di dalam grup itu. Muka yang dipilih tetap mempertahankan tepinya.

## Tampilkan semua

{{ui:Edit}} › {{ui:More}} › {{ui:Unhide all}} menampilkan semuanya lagi, di setiap grup. {{ui:Entity info}} menampilkan berapa banyak yang tersembunyi saat tidak ada yang dipilih, dengan tombol {{ui:Unhide all}} di sana juga.

{{ui:Outliner}} menampilkan grup dan komponen yang tersembunyi dengan huruf miring dan ikon mata yang dicoret; klik ikon mata untuk menampilkannya lagi.

:::note
Dengan tombol gaya Modeler, {{key:H}} menyembunyikan, {{key:Shift+H}} mengisolasi, dan {{key:Alt+H}} menampilkan semua. ({{ui:Settings}} › {{ui:ModelCraft}} memilih gaya tombol.)
:::

## Hal yang perlu diketahui

- Yang tersembunyi disimpan dalam file ModelCraft, dan tetap tersembunyi saat Anda membukanya.
- Objek yang tersembunyi tetap ada dalam model: ekspor menyertakannya, begitu pula volume dan ukuran di {{ui:Entity info}}.
- Setiap sembunyikan, isolasi, atau tampilkan semua adalah satu langkah {{key:Mod+Z}}.
