---
title: Impor model SKP
summary: Impor file .skp beserta grup, komponen, warna, tekstur, tag, dan tepi lunaknya, lihat apa yang masuk dan tidak, lalu lanjutkan pemodelan.
keywords: skp, impor, buka skp, komponen, grup, tag, layer, material, warna, tekstur, tersembunyi, tepi lunak, 3d warehouse, migrasi, beralih
from: 325d3c81
---

ModelCraft membaca file SketchUp (`.skp`) dengan pembacanya sendiri, di dalam halaman. Tidak ada yang diunggah, dan file ini berfungsi offline kapan pun ModelCraft berfungsi. File dari SketchUp 3 sampai 2026 sudah diuji.

## Impor file

1. Klik {{ui:Import}} di grup {{ui:File}} (atau seret file `.skp` ke tampilan 3D).
2. Pilih file.

   Bilah status menampilkan "Membaca house.skp…" selama proses membaca, lalu apa yang masuk, misalnya "Diimpor house.skp (SketchUp 25.0.575): 1240 muka, 6 komponen, dalam sebuah grup."

Seluruh model masuk sebagai satu grup yang dinamai sesuai file, dipilih, dan tampilan melakukan zoom ke sana. Satu {{key:Mod+Z}} menghapus semuanya lagi, termasuk tag.

:::tip
Urai grup impor ({{ui:Entity info}} › {{ui:Explode}}) saat Anda ingin isinya lepas di dalam model, bukan di dalam satu grup.
:::

## Yang ikut masuk

- **Muka** beserta lubangnya, dan **tepi** yang bukan bagian dari muka.
- **Grup** masuk sebagai grup, dan **komponen** sebagai komponen: setiap salinan komponen adalah penempatan dari satu definisi, sehingga menyunting satu salinan mengubah semuanya, seperti di SketchUp. Nama ikut terbawa.
- **Warna.** Material milik sebuah muka memberinya warna. Material yang dicat pada grup atau komponen menjadi cat untuk penempatan itu, sehingga muka di dalamnya yang tidak punya warna sendiri ikut memakainya, seperti di SketchUp. Komponen yang dicat merah di satu tempat dan biru di tempat lain tetap menjadi satu komponen.
- **Tekstur.** Muka yang dicat dengan material bertekstur masuk bersama teksturnya, dibentangkan di atas muka seperti di file, dan gaya {{ui:Shaded}} menampilkannya. Gambar disimpan dalam file ModelCraft saat Anda menyimpan, dan [gambar render](topic:render) juga menampilkannya. Material bertekstur yang dicat pada seluruh grup atau komponen hanya memberi salinan itu warna material.
- **Tag.** Grup atau komponen pada tag SketchUp mendapat tag ModelCraft dengan nama yang sama, tercantum di {{ui:Tags}}, dan ditampilkan atau disembunyikan seperti di SketchUp. Jika model Anda sudah memiliki tag dengan nama itu, tag tersebut yang dipakai.
- **Yang tersembunyi masuk dalam keadaan tersembunyi:** muka, tepi, grup, dan komponen, serta muka dan tepi pada tag yang tersembunyi. Anda melihat apa yang ditampilkan SketchUp, dan tidak ada yang hilang: {{ui:Edit}} › {{ui:More}} › {{ui:Unhide all}} menampilkannya. Lihat [Sembunyikan, isolasi, dan tampilkan lagi](topic:hide-isolate).
- **Tepi lunak dan tepi halus tetap lunak**, sehingga permukaan melengkung tetap tampak halus.
- **Ukuran tepat dalam satuan apa pun:** file SketchUp menyimpan satuan inci di dalamnya, dan ModelCraft mengonversinya.

## Yang tidak ikut

Bilah status menyebutkan apa yang tertinggal, beserta jumlahnya.

- **Sebagian tekstur** hanya menyimpan warna materialnya: tekstur yang hilang dari file, gambar dalam format yang tidak bisa ditampilkan peramban (misalnya file Photoshop), atau tekstur tanpa ukuran. Muka dengan tekstur proyeksi masuk dengan teksturnya ditempatkan secara kira-kira.
- **Tag pada muka dan tepi lepas.** ModelCraft hanya memberi tag pada grup dan komponen, sehingga muka atau tepi yang punya tag sendiri masuk tanpa tag, dan bilah status menghitungnya. Buat muka seperti itu menjadi grup ({{key:Shift+G}}) lalu beri tag pada grupnya.
- **Gambar** yang ditempatkan di model, teks, dimensi, garis bantu, bidang potong, adegan, dan gaya.

## Masalah

- "Ini bukan file SketchUp." atau "File SketchUp ini rusak: …": file terpotong atau merupakan sesuatu yang lain dengan nama `.skp`. Simpan ulang dari SketchUp, atau minta salinan baru.
- File dari versi SketchUp yang lebih baru daripada yang dikenal ModelCraft akan ditolak, dengan versi yang ditemukannya.
- Model yang seluruhnya berisi gambar, teks, atau dimensi akan menyatakan bahwa tidak ada yang bisa ditampilkan.

## Ambil kembali model

ModelCraft tidak bisa menyimpan file `.skp`. Ekspor Collada ({{ui:Export}} › `.dae`) dan impor file itu di SketchUp: grup, komponen, dan warna ikut berpindah; tekstur berpindah sebagai warna materialnya. Lihat [Ekspor model Anda](topic:export-model).
