---
title: Animasikan kamera dan objek, lalu render video
summary: Beri keyframe pada kamera dan pada grup atau komponen di timeline, putar di tampilan, dan render animasi menjadi video WebM dengan langit, matahari, dan material milik renderer.
keywords: animasi, animate, timeline, keyframe, keys, bingkai kunci, jalur kamera, terbang melintas, flythrough, jalan-jalan, walkthrough, video, film, webm, render video, frame, laju frame, fps, playhead, keyframe otomatis, ease, halus, tahan, scene, urutan png, gerakan
from: d3a58249
---

**Timeline** menggerakkan kamera dan grup atau komponen apa pun seiring waktu. Anda mengatur **keyframe** (di mana sesuatu berada pada saat tertentu); ModelCraft menggerakkannya dengan halus dari keyframe ke keyframe. Putar di tampilan, lalu render menjadi video dengan langit, matahari, material, dan lampu yang sama seperti [gambar render](topic:render).

## Buka timeline

Klik {{ui:Tampilan}} di grup {{ui:Kamera}}, lalu {{ui:Timeline animasi}}. Timeline terbuka di bawah tampilan: kontrol di bagian atas, lalu baris **Kamera** dan baris untuk setiap grup atau komponen yang bergerak. Berlian adalah keyframe; garis merah adalah **playhead**, yaitu saat yang ditampilkan di tampilan.

:::touch
Di ponsel, timeline juga terbuka di bawah tampilan. Kontrolnya berupa satu baris: geser ke samping untuk mencapai sisanya; tombol untuk menutup timeline tetap berada di ujungnya.
:::

Seret slider (atau klik di baris) untuk memindahkan playhead. {{ui:Putar}} memutar dari playhead dan berubah menjadi {{ui:Jeda}} saat diputar; klik lagi untuk berhenti di tempatnya. {{key:Space}} melakukan hal yang sama saat timeline terbuka (saat timeline tertutup, Space tetap berfungsi sebagai Pilih). {{ui:Keyframe sebelumnya}} dan {{ui:Keyframe berikutnya}} melompat di antara keyframe. Gaya milik Anda bisa memberi tombol lain untuk putar dan jeda: {{ui:Pengaturan}}, lalu menu, tombol, dan mouse, perintah *Putar atau jeda animasi*.

## Memindahkan kamera

1. Pindahkan playhead ke awal shot (0 s), atur tampilan, lalu klik {{ui:Keyframe kamera}}.
2. Pindahkan playhead lebih jauh (misalnya 4 s), orbit, geser, atau jalan di tampilan ke posisi berikutnya, lalu klik {{ui:Keyframe kamera}} lagi.
3. Tambahkan keyframe sebanyak yang Anda mau, lalu {{ui:Putar}}.

Kamera melewati setiap keyframe dengan halus dan mulai serta berakhir dalam keadaan diam.

:::tip
Sudah punya [scene](topic:scenes)? {{ui:Dari scene}} membuat jalur kamera dari scene tersebut: kamera berhenti di setiap scene, lalu bergerak ke scene berikutnya. Jika timeline belum memiliki keyframe sama sekali, {{ui:Render video…}} melakukannya sendiri, sehingga dua scene atau lebih sudah cukup untuk video jalan-jalan.
:::

## Memindahkan grup atau komponen

1. Pilih grup atau komponen (hanya grup dan komponen utuh yang bergerak; [buat grup](topic:groups-components) dulu).
2. Pada 0 s, klik {{ui:Keyframe pilihan}}.
3. Pindahkan playhead lebih jauh, [pindahkan, putar, atau skala](topic:move-copy) grup ke tempat yang seharusnya, lalu klik {{ui:Keyframe pilihan}} lagi.

Ia meluncur, berputar, dan membesar di antara keyframe-nya. Putaran mengambil jalan terpendek.

**Keyframe otomatis** menghemat klik langkah 3: selama {{ui:Keyframe otomatis}} aktif, grup atau komponen terpilih yang Anda pindahkan, putar, atau skala mendapat keyframe di playhead dengan sendirinya (dan, pertama kali, keyframe di 0 s tempat ia berada).

:::note
Memindahkan grup beranimasi tanpa keyframe hanya bertahan sampai playhead bergerak: saat Anda memutar atau menggeser lagi, grup kembali ke tempat keyframe-nya menempatkannya. Bilah status menyatakannya. Tekan {{ui:Keyframe pilihan}} untuk mempertahankannya.
:::

## Mengubah keyframe

- **Pilih keyframe** dengan mengklik berliannya: playhead pindah ke sana.
- **Pindahkan keyframe** dengan menyeret berliannya sepanjang barisnya, atau dengan {{key:Left}} dan {{key:Right}} (satu frame; dengan {{key:Shift}}, sepuluh).
- **Hapus** dengan {{ui:Hapus keyframe}} (keyframe terpilih, atau setiap keyframe di playhead) atau {{key:Delete}} pada berlian terpilih.
- **Cara bergerak ke berikutnya**, untuk keyframe terpilih: {{ui:Haluskan}} (kurva melalui keyframe di sekitarnya), {{ui:Konstan}} (garis lurus dengan kecepatan tetap), {{ui:Perlambat masuk dan keluar}} (berhenti di keyframe ini), atau {{ui:Tahan}} (tetap diam sampai keyframe berikutnya).
- **Panjang (s)** mengatur berapa lama animasinya; keyframe yang diatur setelah akhir akan memperpanjangnya. Untuk memperpendek, pindahkan atau hapus dulu keyframe yang melewati akhir baru.
- **×** pada baris grup menghentikan animasinya.

Timeline punya {{ui:Urungkan}} dan {{ui:Ulangi}} sendiri: urungkan model ({{key:Mod+Z}}) mengubah model, bukan keyframe. Animasinya disimpan dalam file `.modelcraft`. Menutup timeline mengembalikan grup yang bergerak ke pose pertamanya.

## Render video

1. Klik {{ui:Render video}} di timeline (atau {{ui:Ekspor}} › {{ui:Render video…}}).
2. Pilih {{ui:Ukuran}}, {{ui:Laju frame}}, {{ui:Kualitas setiap frame}}, dan {{ui:File}}.
3. Klik {{ui:Render video}}. Setiap frame tampil saat dibuat, dengan sisa waktunya.
4. Setelah selesai, klik {{ui:Simpan video}}.

{{ui:Berhenti}} (atau {{key:Esc}}) mengakhiri lebih awal; {{ui:Simpan video}} kemudian menyimpan frame yang sudah dibuat sebagai video yang lebih pendek.

Langit, matahari, material, lampu, dan kecerahan adalah yang diatur di {{ui:Render gambar…}}: atur di sana terlebih dahulu, dengan memeriksa satu gambar diam. Setiap frame dirender di komputer ini; tidak ada yang diunggah.

| Pengaturan | Fungsinya |
|---|---|
| {{ui:Ukuran}} | 480p, 720p HD, 1080p Full HD, atau bentuk tampilan itu sendiri (lebar hingga 1920 piksel) |
| {{ui:Laju frame}} | 24, 25, 30, atau 60 frame per detik. Dua kali frame memerlukan waktu dua kali lebih lama |
| {{ui:Kualitas setiap frame}} | {{ui:Cepat}} (4 pass), {{ui:Draf}} (16), atau {{ui:Baik}} (64): pass yang lebih banyak membuat bayangan dan tepi lebih halus |
| {{ui:File}} | {{ui:Video WebM}}, {{ui:Video MP4 (H.264)}} jika peramban bisa menulisnya, atau {{ui:Gambar raster PNG, satu per frame (ZIP)}} untuk editor video (dan untuk peramban tanpa encoder video) |

:::tip
Video 10 detik pada 30 frame per detik berjumlah 301 frame. Coba {{ui:Cepat}} pada 480p dulu untuk memeriksa gerakan, lalu render {{ui:Draf}} atau {{ui:Baik}} pada ukuran yang lebih besar.
:::

WebM dapat diputar di peramban dan VLC, dan editor video dapat mengonversinya. {{ui:Video MP4 (H.264)}} tersedia jika peramban bisa menulisnya. {{ui:Render video}} memakai renderer cepat; untuk path trace setiap frame, pilih {{ui:Tambahkan animasi ini ke antrean}} di dialog yang sama: frame dirender di [antrean render](topic:render#the-render-queue), yang memerlukan WebGPU.

:::firefox safari
Merender video memerlukan peramban yang dapat meng-encode video sendiri (WebCodecs): Chrome, Edge, Firefox versi terbaru, dan Safari 17 bisa. Tanpa itu, pilih {{ui:Gambar raster PNG, satu per frame (ZIP)}}.
:::

## Hal yang perlu diketahui

- Hanya grup dan komponen utuh yang bergerak. Muka, tepi, waktu matahari, dan gaya belum berubah seiring waktu.
- {{ui:Ekspor animasi}} di bawah [Scene](topic:scenes) masih merekam tampilan seperti yang ada di layar, secara real time; {{ui:Render video}} merender setiap frame dengan langit, bayangan, dan material.
