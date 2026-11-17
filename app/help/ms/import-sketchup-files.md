---
title: Import model SKP
summary: Import fail .skp dengan kumpulan, komponen, warna, tekstur, tag dan tepi lembut, lihat apa yang masuk dan apa yang tidak, dan teruskan pemodelan.
keywords: skp, import, buka skp, komponen, kumpulan, tag, lapisan, bahan, warna, tekstur, tersembunyi, tepi lembut, 3d warehouse, migrasi, bertukar
from: 325d3c81
---

ModelCraft membaca fail SketchUp (`.skp`) dengan pembaca sendiri, dalam halaman. Tiada apa-apa dimuat naik, dan ia berfungsi di luar talian apabila ModelCraft juga berfungsi. Fail dari SketchUp 3 hingga 2026 telah diuji.

## Import fail

1. Klik {{ui:Import}} dalam kumpulan {{ui:Fail}} (atau lepaskan fail `.skp` pada paparan 3D).
2. Pilih fail.

   Bar status berbunyi "Membaca house.skp…" semasa ia dibaca, kemudian apa yang masuk, contohnya "Diimport house.skp (SketchUp 25.0.575): 1240 muka, 6 komponen, dalam satu kumpulan."

Keseluruhan model masuk sebagai satu kumpulan dinamakan sempena fail, dipilih, dan paparan zum ke sana. Satu {{key:Mod+Z}} mengeluarkan semuanya semula, termasuk tag.

:::tip
Pecahkan kumpulan import ({{ui:Maklumat entiti}} › {{ui:Pecahkan}}) apabila anda mahu kandungannya lepas dalam model anda dan bukan dalam satu kumpulan.
:::

## Apa yang masuk

- **Muka** dengan lubangnya, dan **tepi** yang bukan sebahagian daripada muka.
- **Kumpulan** masuk sebagai kumpulan, dan **komponen** sebagai komponen: setiap salinan komponen ialah letakan bagi satu takrifan, jadi menyunting satu salinan mengubah semuanya, seperti dalam SketchUp. Nama turut masuk bersamanya.
- **Warna.** Bahan sendiri sesuatu muka memberikannya warna. Bahan yang dicat pada kumpulan atau komponen menjadi cat letakan itu, jadi muka di dalamnya yang tiada warna sendiri turut memperolehnya, seperti dalam SketchUp. Komponen yang dicat merah di satu tempat dan biru di tempat lain kekal sebagai satu komponen.
- **Tekstur.** Muka yang dicat dengan bahan bertekstur masuk dengan teksturnya, dihamparkan pada muka seperti dalam fail, dan gaya {{ui:Berlorek}} menunjukkannya. Imej itu disimpan dalam fail ModelCraft apabila anda menyimpan, dan [gambar render](topic:render) turut menunjukkannya. Bahan bertekstur yang dicat pada keseluruhan kumpulan atau komponen hanya memberikan salinan itu warna bahannya.
- **Tag.** Kumpulan atau komponen pada tag SketchUp mendapat tag ModelCraft dengan nama yang sama, disenaraikan dalam {{ui:Tag}}, ditunjukkan atau disembunyikan seperti dalam SketchUp. Jika model anda sudah mempunyai tag dengan nama itu, tag tersebut digunakan.
- **Perkara tersembunyi masuk dalam keadaan tersembunyi:** muka, tepi, kumpulan dan komponen, serta muka dan tepi pada tag tersembunyi. Anda melihat apa yang SketchUp tunjukkan, dan tiada apa yang hilang: {{ui:Sunting}} › {{ui:Lagi}} › {{ui:Nyahsembunyi semua}} menunjukkannya. Lihat [Sembunyi, asingkan dan nyahsembunyi](topic:hide-isolate).
- **Tepi lembut dan licin kekal lembut**, jadi permukaan melengkung kelihatan licin.
- **Saiz** keluar dengan betul dalam mana-mana unit: fail SketchUp adalah dalam inci secara dalaman, dan ModelCraft menukarkannya.

## Apa yang tidak masuk

Bar status menyatakan apa yang ditinggalkan, dengan bilangannya.

- **Sesetengah tekstur** hanya mengekalkan warna bahannya: tekstur yang hilang daripada fail, imej dalam format yang pelayar tidak dapat paparkan (seperti fail Photoshop), atau tekstur tanpa saiz. Muka dengan tekstur terunjur masuk dengan tekstur diletakkan secara anggaran.
- **Tag pada muka dan tepi longgar.** ModelCraft hanya menandakan kumpulan dan komponen, jadi muka atau tepi dengan tag sendiri masuk tanpa tag, dan bar status mengirakannya. Jadikan muka sebegini kumpulan ({{key:Shift+G}}) dan tandakan kumpulan itu.
- **Imej** yang diletakkan dalam model, teks, dimensi, panduan, satah keratan, adegan dan gaya.

## Masalah

- "This is not a SketchUp file." atau "This SketchUp file is damaged: …": fail itu terpotong atau merupakan sesuatu yang lain dengan nama `.skp`. Simpan semula daripada SketchUp, atau minta salinan baharu.
- Fail daripada versi SketchUp yang lebih baharu daripada yang diketahui ModelCraft ditolak, dengan versi yang ditemuinya.
- Model yang terdiri daripada imej, teks atau dimensi sahaja memberitahu bahawa tiada apa untuk ditunjukkan.

## Bawa balik model

ModelCraft tidak dapat menyimpan fail `.skp`. Eksport Collada ({{ui:Eksport}} › `.dae`) dan import dalam SketchUp: kumpulan, komponen dan warna ikut sama; tekstur pergi sebagai warna bahannya. Lihat [Eksport model anda](topic:export-model).
