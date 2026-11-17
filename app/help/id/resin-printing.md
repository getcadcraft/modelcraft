---
title: Iris untuk printer resin
summary: Iris area cetak untuk printer resin, buat berongga dan beri penyangga pada bagian, telusuri layer, simpan file printer, dan temukan paparan Anda dengan uji paparan.
keywords: resin, pencetakan resin, sla, msla, dlp, slicer, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, berongga, lubang ventilasi, rakit, penyangga, uji paparan, tangga paparan, kalibrasi, layer, add-on
from: 83c394e1
---

Add-on resin mengiris objek di area cetak menjadi gambar layer untuk layar printer Anda, lalu menyimpan file yang dibaca printer Anda. Gratis, tanpa fitur yang terkunci, dan nonaktif sampai Anda menyalakannya.

:::note
Belum ada file yang dimuat ke printer sungguhan. File hanya dibaca kembali oleh pembaca milik CadCraft sendiri, dan penyangganya baru. Periksa layer, dan jalankan cetakan pertama Anda secara manual.
:::

## Yang akan Anda lakukan

Iris bagian untuk resin, periksa layer, simpan file, dan salin ke printer Anda.

## Langkah

1. Buka {{ui:Pengaturan}} › {{ui:Add-on}} dan nyalakan add-on pengiris resin serta add-on untuk format file printer Anda (Elegoo GOO, SL1, Chitubox, atau Anycubic). Anda juga dapat menekan {{ui:Tambahkan cetak resin}} pada kartu tahap Cetak.
2. Letakkan bagian Anda di area cetak seperti di [Letakkan objek di area cetak](topic:print-stage), lalu pilih {{ui:Resin}} di samping **Dicetak dengan**.
3. Di bawah **Pengaturan cetak resin**, pilih **Printer** dan **Resin** Anda. Kartu menampilkan ukuran layar dalam piksel. Ini adalah ukuran yang dipublikasikan pabrikan, jadi periksa milik Anda; Anda dapat menyuntingnya di bawah Kustom.
4. Atur **Tinggi layer (mm)**, **Paparan (s)**, dan **Paparan dasar (s)**. Angka untuk setiap resin hanyalah titik awal.
5. Centang **Berongga, dengan lubang ventilasi** jika Anda ingin bagian berongga, lalu atur **Dinding (mm)** dan **Lebar lubang (mm)**.
6. Centang **Penyangga dan rakit**, lalu pilih **Kepadatan penyangga**: Ringan, Sedang, atau Berat.
7. Pilih **Format file**. Jika kartu menyatakan belum ada format yang ditambahkan, tekan tombol bertuliskan Tambah dan nama formatnya.
8. Tekan {{ui:Pratinjau layer}} dan geser penggeser **Layer**. Bagian yang melayang diberi lingkaran. Baris di bawahnya memberikan jumlah layer, waktu, serta resin dalam mL, gram, dan biaya.
9. Tekan {{ui:Simpan file cetak}}, periksa ringkasannya, lalu tekan {{ui:Simpan}}. Salin file ke printer Anda.

## Temukan paparan Anda

1. Nyalakan add-on uji paparan di {{ui:Pengaturan}} › {{ui:Add-on}}.
2. Tekan {{ui:Letakkan bagian uji di area cetak}}.
3. Tekan {{ui:Simpan tangga paparan}}. Anda mendapat satu file untuk setiap paparan, dalam zip.
4. Cetak setiap file dengan resin yang sama, dan simpan paparan yang menghasilkan tiang tipis dan lubang terbuka yang paling tajam.

## Catatan

- Pengirisan berjalan di latar belakang, sehingga halaman tetap dapat digunakan pada pelat yang besar.
- Bagian yang bukan solid tertutup dilewati, dan kartu menyatakannya.
- Jika printer Anda menolak file, kartu format memiliki pilihan untuk hal yang dibiarkan terbuka oleh format. Ubah satu, simpan lagi, dan beri tahu kami mana yang berhasil.
- Versi Anycubic 517 dan 518 tidak ditulis.
