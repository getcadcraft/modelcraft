---
title: Beri cahaya pada model dengan lampu
summary: Tempatkan lampu, lampu sorot, dan panel cahaya di dalam model agar gambar hasil render bisa menampilkan ruangan pada malam hari atau interior yang diterangi, dengan bayangan lembut.
keywords: cahaya, lampu, lampu, lampu, pencahayaan, bola lampu, lampu plafon, lampu sorot, downlight, panel cahaya, lampu area, lumen, kecerahan, suhu warna, hangat, malam, interior, render
from: c8d72cbc
---

Lampu menerangi [gambar hasil render](topic:render). Lampu tidak mengubah tampilan 3D, di sana setiap lampu tampil sebagai tanda kecil dengan warnanya sendiri.

## Tambah lampu

1. Di bagian {{ui:Lampu}} di sebelah kanan, klik {{ui:Lampu}}, {{ui:Lampu sorot}} atau {{ui:Panel cahaya}}.
2. Klik di tempat lampu akan diletakkan. Snap bekerja seperti saat menggambar.
   - Pada plafon atau dinding, sebuah **lampu** menggantung 25 cm dari muka, di sisi tempat Anda melihat; **panel cahaya** menempel pada muka dan memancar menjauhi muka itu.
   - **Lampu sorot** butuh dua klik: di mana letaknya, lalu ke mana ia mengarah.

Lampu baru dipilih di {{ui:Lampu}}, siap diubah.

## Ubah lampu

Klik nama lampu di {{ui:Lampu}}, atau tandanya di tampilan dengan {{ui:Pilih}}. Lalu:

| Pengaturan | Fungsinya |
|---|---|
| {{ui:Kecerahan (lumen)}} | Seberapa besar cahaya yang dihasilkan. Bola lampu rumah tangga sekitar 800 lumen; panel plafon yang terang 3000 |
| {{ui:Warna}} | {{ui:Hangat}} (bola lampu rumah), {{ui:Netral}} atau {{ui:Siang hari}}, atau warna apa pun |
| {{ui:Sorotan (derajat)}} | Kerucut sorot lampu sorot, dari tepi ke tepi |
| {{ui:Ukuran bola lampu}}, {{ui:Lebar}}, {{ui:Kedalaman}} | Bola lampu dan panel yang lebih besar memberi bayangan yang lebih lembut |
| {{ui:Merah (x)}}, {{ui:Hijau (y)}}, {{ui:Tinggi}} | Letak lampu |

Tanda centang di sebelah nama lampu menyalakan atau mematikannya. {{ui:Hapus lampu}} menghapusnya. Setiap perubahan adalah satu langkah: {{key:Ctrl+Z}} mengurungkannya. Lampu disimpan dalam file `.modelcraft`.

## Gambar pada malam hari

Di {{ui:Render gambar…}}, centang {{ui:Gunakan tanggal dan waktu lain untuk gambar ini}} lalu pilih jam malam. Saat matahari terbenam, langit menjadi gelap dan hanya lampu yang menerangi model. Naikkan {{ui:Kecerahan}} di dialog jika gambar terlalu gelap, atau tambahkan lampu.

:::tip
Untuk ruangan yang dilihat dari dalam, letakkan kamera di dalam ruangan (orbit dan zoom, atau [scene](topic:scenes)), tambahkan lampu di plafon, lalu render pada malam hari. Dalam mode {{ui:Cepat}}, sudut yang jauh dari lampu tetap lebih gelap daripada foto; [mode kualitas tinggi](topic:render#high-quality) membuat cahaya memantul dari dinding.
:::
