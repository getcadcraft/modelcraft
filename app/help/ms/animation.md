---
title: Animasi kamera dan objek, dan render video
summary: Letakkan kunci untuk kamera serta untuk kumpulan dan komponen pada garis masa, mainkannya dalam pandangan, dan render animasi kepada video WebM dengan langit, matahari dan bahan yang sama seperti pengrender.
keywords: animasi, animate, garis masa, bingkai kunci, kunci, laluan kamera, terbang melalui, lawatan, berjalan, video, filem, webm, render video, bingkai, kadar bingkai, fps, kepala main, kunci auto, kelonggaran, licin, tahan, adegan, jujukan png, gerakan
from: d3a58249
---

**Garis masa** menggerakkan kamera dan mana-mana kumpulan atau komponen dari semasa ke semasa. Anda menetapkan **kunci** (di mana sesuatu berada pada masa tertentu); ModelCraft menggerakkannya dengan licin dari satu kunci ke kunci seterusnya. Mainkannya dalam pandangan, kemudian render kepada video dengan langit, matahari, bahan dan lampu yang sama seperti [gambar yang dirender](topic:render).

## Buka garis masa

Klik {{ui:Pandangan}} dalam kumpulan {{ui:Kamera}}, kemudian {{ui:Garis masa animasi}}. Garis masa dibuka di bawah pandangan: kawalan di bahagian atas, kemudian baris **Kamera** dan baris untuk setiap kumpulan atau komponen yang bergerak. Berlian ialah kunci; garis merah ialah **kepala main**, iaitu saat yang ditunjukkan dalam pandangan.

:::touch
Pada telefon, garis masa juga dibuka di bawah pandangan. Kawalannya berada dalam satu baris: leret ke sisi untuk sampai ke yang lain; butang yang menutup garis masa kekal di hujungnya.
:::

Seret gelangsar (atau klik dalam baris) untuk mengalihkan kepala main. {{ui:Main}} memainkan dari kepala main dan bertukar menjadi {{ui:Jeda}} semasa ia dimainkan; klik sekali lagi untuk berhenti di tempatnya. {{key:Space}} melakukan perkara yang sama semasa garis masa dibuka (dengan garis masa ditutup, Space kekal sebagai {{ui:Pilih}}). {{ui:Kunci sebelumnya}} dan {{ui:Kunci seterusnya}} melompat antara kunci. Gaya milik anda boleh memberikan main dan jeda kekunci lain: {{ui:Tetapan}}, kemudian menu, kekunci dan tetikus, arahan *Mainkan atau jedakan animasi*.

## Alih kamera

1. Alihkan kepala main ke tempat bidikan bermula (0 s), tetapkan pandangan, dan klik {{ui:Kamera kunci}}.
2. Alihkan kepala main lebih lewat (katakan 4 s), orbit, pan atau berjalan dalam pandangan ke kedudukan seterusnya, dan klik {{ui:Kamera kunci}} sekali lagi.
3. Tambah seberapa banyak kunci yang anda mahu, kemudian {{ui:Main}}.

Kamera melalui setiap kunci dengan licin dan bermula serta berakhir dalam keadaan rehat.

:::tip
Sudah ada [adegan](topic:scenes)? {{ui:Daripada adegan}} membuat laluan kamera daripadanya: ia berhenti pada setiap adegan, kemudian bergerak ke yang seterusnya. Jika garis masa tiada sebarang kunci, {{ui:Render video…}} melakukannya sendiri, jadi dua adegan atau lebih sudah cukup untuk video lawatan.
:::

## Alih kumpulan atau komponen

1. Pilih kumpulan atau komponen (hanya kumpulan dan komponen keseluruhan yang bergerak; [buat kumpulan](topic:groups-components) dahulu).
2. Pada 0 s, klik {{ui:Kunci yang dipilih}}.
3. Alihkan kepala main lebih lewat, [alih, putar atau skala](topic:move-copy) kumpulan ke tempat ia sepatutnya, dan klik {{ui:Kunci yang dipilih}} sekali lagi.

Ia meluncur, berpusing dan membesar antara kuncinya. Pusingan mengambil jalan yang pendek.

**Kunci auto** menjimatkan klik langkah 3: semasa {{ui:Kunci auto}} dihidupkan, kumpulan atau komponen yang dipilih dan anda alihkan, putar atau skala akan mendapat kunci di kepala main dengan sendirinya (dan, kali pertama, kunci pada 0 s di tempat ia berada).

:::note
Mengalihkan kumpulan yang dianimasikan tanpa kunci hanya bertahan sehingga kepala main bergerak: kali seterusnya anda main atau gosok, ia kembali ke tempat kuncinya meletakkannya. Bar status memberitahu anda begitu. Tekan {{ui:Kunci yang dipilih}} untuk mengekalkannya.
:::

## Tukar kunci

- **Pilih kunci** dengan mengklik berliannya: kepala main pergi ke situ.
- **Alih kunci** dengan menyeret berliannya sepanjang barisnya, atau dengan {{key:Left}} dan {{key:Right}} (sebingkai; dengan {{key:Shift}}, sepuluh).
- **Padam** dengan {{ui:Padam kunci}} (kunci yang dipilih, atau setiap kunci di kepala main) atau {{key:Delete}} pada berlian yang dipilih.
- **Cara ia bergerak seterusnya**, untuk kunci yang dipilih: {{ui:Licinkan}} (lengkung melalui kunci di sekelilingnya), {{ui:Tetap}} (garis lurus pada satu kelajuan), {{ui:Perlahan masuk dan keluar}} (berhenti rehat pada kunci ini) atau {{ui:Tahan}} (kekal di tempatnya sehingga kunci seterusnya).
- **Panjang (s)** menetapkan tempoh animasi; kunci yang ditetapkan selepas penghujung memanjangkannya. Untuk memendekkannya, alihkan atau padam kunci yang melepasi penghujung baharu dahulu.
- **×** pada baris kumpulan menghentikan animasinya.

Garis masa mempunyai {{ui:Buat asal}} dan {{ui:Buat semula}} sendiri: buat asal model ({{key:Mod+Z}}) mengubah model, bukan kunci. Animasi disimpan dalam fail `.modelcraft`. Menutup garis masa mengembalikan kumpulan yang bergerak ke pose pertamanya.

## Render video

1. Klik {{ui:Render video}} pada garis masa (atau {{ui:Eksport}} › {{ui:Render video…}}).
2. Pilih {{ui:Saiz}}, {{ui:Kadar bingkai}}, {{ui:Kualiti setiap bingkai}} dan {{ui:Fail}}.
3. Klik {{ui:Render video}}. Setiap bingkai dipaparkan semasa ia dibuat, dengan masa yang tinggal.
4. Apabila selesai, klik {{ui:Simpan video}}.

{{ui:Henti}} (atau {{key:Esc}}) menamatkan awal; {{ui:Simpan video}} kemudian mengekalkan bingkai yang sudah dibuat sebagai video yang lebih pendek.

Langit, matahari, bahan, lampu dan kecerahan ialah yang ditetapkan dalam {{ui:Render imej…}}: tetapkannya di sana dahulu, dengan memeriksa satu gambar pegun. Setiap bingkai dirender pada komputer ini; tiada apa dimuat naik.

| Tetapan | Apa yang dilakukannya |
|---|---|
| {{ui:Saiz}} | 480p, 720p HD, 1080p Full HD, atau bentuk pandangan itu sendiri (sehingga 1920 piksel lebar) |
| {{ui:Kadar bingkai}} | 24, 25, 30 atau 60 bingkai sesaat. Dua kali bingkai mengambil dua kali masa |
| {{ui:Kualiti setiap bingkai}} | {{ui:Pantas}} (4 laluan), {{ui:Draf}} (16) atau {{ui:Baik}} (64): lebih banyak laluan memberikan bayang dan tepi yang lebih licin |
| {{ui:Fail}} | {{ui:Video WebM}}, {{ui:Video MP4 (H.264)}} di mana pelayar boleh menulisnya, atau {{ui:Imej PNG, satu untuk setiap bingkai (ZIP)}} untuk penyunting video (dan untuk pelayar tanpa pengekod video) |

:::tip
Video 10 saat pada 30 bingkai sesaat ialah 301 bingkai. Cuba {{ui:Pantas}} pada 480p dahulu untuk menyemak gerakan, kemudian render {{ui:Draf}} atau {{ui:Baik}} pada saiz yang lebih besar.
:::

WebM dimainkan dalam pelayar dan VLC, dan penyunting video boleh menukarnya. {{ui:Video MP4 (H.264)}} ditawarkan di mana pelayar boleh menulisnya. {{ui:Render video}} menggunakan pengrender pantas; untuk penjejakan laluan bagi setiap bingkai, pilih {{ui:Tambah animasi ini ke giliran}} dalam dialog yang sama: bingkai dirender dalam [giliran render](topic:render#the-render-queue), yang memerlukan WebGPU.

:::firefox safari
Render video memerlukan pelayar yang mengekod video sendiri (WebCodecs): Chrome, Edge, Firefox dan Safari 17 yang terkini berbuat demikian. Tanpanya, pilih {{ui:Imej PNG, satu untuk setiap bingkai (ZIP)}}.
:::

## Perkara yang perlu diketahui

- Hanya kumpulan dan komponen keseluruhan yang bergerak. Muka, tepi, masa matahari dan gaya belum berubah mengikut masa.
- {{ui:Eksport animasi}} di bawah [Adegan](topic:scenes) masih merekod pandangan seperti yang kelihatan pada skrin, secara masa nyata; {{ui:Render video}} merender setiap bingkai dengan langit, bayang dan bahan.
