---
title: Sinari model dengan lampu
summary: Letakkan lampu, lampu sorot dan panel cahaya dalam model supaya gambar yang dirender boleh menunjukkan bilik pada waktu malam atau bahagian dalam yang diterangi, dengan bayang lembut.
keywords: cahaya, lampu, pencahayaan, mentol, lampu siling, lampu sorot, lampu bawah, panel cahaya, cahaya kawasan, lumen, kecerahan, suhu warna, hangat, malam, dalaman, render
from: c8d72cbc
---

Lampu menyinari [gambar yang dirender](topic:render). Ia tidak mengubah paparan 3D, di mana setiap lampu ditunjukkan sebagai tanda kecil dalam warnanya sendiri.

## Tambah lampu

1. Dalam bahagian {{ui:Lampu}} di sebelah kanan, klik {{ui:Lampu}}, {{ui:Lampu sorot}} atau {{ui:Panel cahaya}}.
2. Klik di tempat ia hendak diletakkan. Snap berfungsi seperti semasa melukis.
   - Pada siling atau dinding, **lampu** tergantung 25 cm dari permukaan, di sebelah tempat anda melihat; **panel cahaya** terletak di atas permukaan dan memancarkan cahaya menjauhinya.
   - **Lampu sorot** memerlukan dua klik: di mana ia berada, kemudian apa yang ia halakan.

Lampu baharu dipilih dalam {{ui:Lampu}}, sedia untuk diubah.

## Ubah lampu

Klik nama lampu dalam {{ui:Lampu}}, atau tandanya dalam paparan dengan {{ui:Pilih}}. Kemudian:

| Tetapan | Fungsinya |
| --- | --- |
| {{ui:Kecerahan (lumen)}} | Berapa banyak cahaya yang diberikannya. Mentol rumah kira-kira 800 lumen; panel siling yang terang 3000 |
| {{ui:Warna}} | {{ui:Hangat}} (mentol rumah), {{ui:Neutral}} atau {{ui:Cahaya siang}}, atau mana-mana warna |
| {{ui:Alur (darjah)}} | Kon lampu sorot, dari tepi ke tepi |
| {{ui:Saiz mentol}}, {{ui:Lebar}}, {{ui:Kedalaman}} | Mentol dan panel yang lebih besar memberi bayang yang lebih lembut |
| {{ui:Merah (x)}}, {{ui:Hijau (y)}}, {{ui:Tinggi}} | Kedudukannya |

Tanda semak di sebelah nama lampu menghidupkan atau mematikannya. {{ui:Padam lampu}} mengalih keluarnya. Setiap perubahan ialah satu langkah: {{key:Ctrl+Z}} membuat asalnya. Lampu disimpan dalam fail `.modelcraft`.

## Gambar pada waktu malam

Dalam {{ui:Render imej…}}, tanda {{ui:Gunakan tarikh dan masa lain untuk gambar ini}} dan pilih jam petang. Dengan matahari terbenam, langit menjadi gelap dan hanya lampu yang menyinari model. Naikkan {{ui:Kecerahan}} dalam kotak dialog jika gambar terlalu gelap, atau tambah lampu.

:::tip
Untuk bilik yang dilihat dari dalam, letakkan kamera di dalam bilik (orbit dan zum masuk, atau [scene](topic:scenes)), tambah lampu pada siling dan render pada waktu malam. Dalam mod {{ui:Pantas}}, sudut yang jauh dari lampu kekal lebih gelap daripada foto; [mod kualiti tinggi](topic:render#high-quality) membolehkan cahaya memantul dari dinding.
:::
