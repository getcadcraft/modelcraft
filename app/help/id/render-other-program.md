---
title: Gambar gambar dengan program lain
summary: Path tracer kami sendiri menggambar gambar Render; program lain hanya dapat menggambar melalui add-on mesin render di CadCraft Studio. Apa yang dibawa serta, dan mengapa beberapa program tidak pernah ditawarkan.
keywords: render, engine, program luar, mesin add-on, studio, latar belakang, antrean, usd, gltf, digambar oleh, blender, gpl
from: 150f94f1
---

Gambar di {{ui:Render gambar…}} digambar oleh **mesin kami sendiri**: Cepat dan Path tracer, di browser dan di CadCraft Studio. Program lain hanya dapat menggambar ketika sebuah **add-on mesin render** membawanya: lihat [Tambahkan mesin render dengan add-on](topic:render-engine-addons). Untuk membawa adegan ke program lain dan tetap bekerja di sana, gunakan [Buka adegan di program lain](topic:render-open-in) atau [Kirim adegan ke mesin game](topic:render-unreal).

## Gambar gambar dengan mesin add-on

1. Aktifkan add-on di Pengaturan › Add-on. Mesinnya muncul di daftar Engine dari {{ui:Render gambar…}}.
2. Pilih mesin itu. Pengaturannya sendiri tampil di bawah daftar Engine.
3. Klik {{ui:Render}}. Di Studio, saat pertama kali add-on menjalankan program, Studio menanyakan Anda di dialognya sendiri. Kemajuan tampil selama gambar dibuat; {{ui:Berhenti}} mengakhirinya. Gambar muncul ditandai dengan mesin yang menggambarnya.

Mesin yang ditulis dalam JavaScript juga berjalan di browser. Mesin yang menjalankan program di komputer ini hanya berjalan di Studio; di browser ia tampil sebagai file untuk disimpan.

## Yang dibawa serta

Mesin menerima **paket**: model sebagai file USD (dan file glTF jika memintanya), serta file pengaturan dengan nilai material yang tepat, matahari dan langit, setiap lampu yang menyala beserta dayanya dan profil cahayanya, kamera, dan eksposur. Setiap program menyinari, mengatur tone, dan mengambil sampel dengan caranya sendiri, sehingga gambar serupa dalam kamera, matahari, lampu, dan eksposur, tetapi tidak sama piksel demi piksel.

## Program yang tidak pernah dijalankan CadCraft

CadCraft tidak pernah menjalankan program di bawah lisensi GNU GPL, dan tidak pernah mencantumkannya sebagai mesin Engine atau tujuan Buka di. Blender termasuk di antaranya, sehingga tidak ada di daftar Engine. File USD atau glTF yang disimpan dari {{ui:Render gambar…}} tetap dapat dibuka di sana seperti di program apa pun yang membaca file tersebut.

:::note
Kamera panorama dan stereo, serta gambar langit (warna langit yang digunakan), tidak dibawa ke program lain. Apa pun yang dilakukan di program lain tidak kembali ke model.
:::
