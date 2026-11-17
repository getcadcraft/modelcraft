---
title: Tambahkan mesin render dengan add-on
summary: Apa yang dapat ditambahkan add-on ke daftar Engine dialog Render, izin yang dibutuhkannya untuk menjalankan program, serta apa yang diperiksa dan ditanyakan Studio.
keywords: add-on, addon, engine, mesin render, pengembang, engine.run, izin, program, skrip, ditandatangani, studio, api
from: cd7a39ba
---

Add-on (Pengaturan › Add-on) dapat menambahkan mesin ke daftar Engine dari {{ui:Render gambar…}}. Teks lengkap untuk penulis add-on ada di bagian 16 spesifikasi add-on. Secara singkat:

- Add-on mendaftarkan mesin dengan id yang diawali id-nya sendiri, sebuah nama, pengaturan opsional, dan **salah satu** dari program untuk dijalankan **atau** fungsi JavaScript yang menggambar gambar.
- Mesin yang menjalankan program membutuhkan izin **`engine.run`**, yang ditampilkan sebelum pemasangan dan di Pengaturan. Mesin ini hanya berjalan di Studio; di browser ia tampil sebagai file untuk disimpan.
- Add-on menyebutkan programnya (nama file biasa, bukan shell), sebuah skrip yang **berada di dalam add-on yang ditandatangani**, dan argumen yang terdiri dari placeholder serta kata biasa. Studio menemukan program itu atau meminta Anda menunjuknya sekali.
- Saat pertama kali add-on menjalankan program, **Studio menanyakan Anda di dialognya sendiri**: add-on mana, program mana, dan bahwa sebuah skrip dapat melakukan apa pun yang dapat dilakukan program itu. Izinkan hanya untuk add-on yang Anda percaya. Jawaban Anda diingat untuk add-on dan program tersebut.
- Paket (adegan sebagai USD dan file pengaturan, dengan file glTF jika add-on memintanya) dan skrip add-on masuk ke folder sementara yang baru. Program dijalankan di sana, dan gambar dikembalikan dengan nama mesin add-on.

:::note
Add-on hanya dapat menambahkan mesin render dari API add-on 1.4. Contoh kerja untuk renderer baris perintah open-source ada di repositori tersendiri; contoh itu belum pernah dijalankan di renderer tersebut.
:::
