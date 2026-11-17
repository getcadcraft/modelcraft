---
title: Taruh benda di bed cetak dan kirim ke printer
summary: Tambahkan item Pustaka atau model Anda sendiri ke bed printer, susun, lihat lapisan hasil slicing, lalu kirim cetakan melalui USB atau jaringan, atau simpan G-code, tanpa mengekspor STL terlebih dahulu.
keywords: tahap cetak, cetak 3d, printer, bed, kirim ke printer 3d, slicer, gcode, g-code, usb, klipper, moonraker, octoprint, prusalink, pustaka, susun, paskan semua, pratinjau layer, infill, penyangga, filamen, pla, petg, add-on, add-on cetak 3d
from: abcf5d7e
---

{{ui:Tahap cetak}} menata benda di bed printer Anda, melakukan slicing, dan mengirimkannya ke printer. Anda tidak perlu mengekspor file terlebih dahulu. Fitur ini termasuk dalam add-on 3D Print, yang aktif secara default.

:::note
Belum ada yang dicetak di printer sungguhan dengan fitur ini. Slicer ini baru: amati lapisan pertama dari cetakan pertama Anda, dan gunakan pratinjau layer sebelum Anda mengirim.
:::

## Yang akan Anda lakukan

Tempatkan model di bed, periksa apakah muat, lihat lapisan hasil slicing, lalu kirim ke printer atau simpan G-code.

## Langkah

1. Klik {{ui:Tahap cetak}} di bilah alat. Kartu terbuka di atas tampilan dan garis putus-putus menunjukkan bed Anda.
2. Di bawah **Tambah dari Pustaka**, ketik nama di kotak pencarian, tekan {{ui:Cari}}, dan tekan {{ui:Tambah}} pada hasil. Item akan mendarat di bed dalam ukuran penuh, atau diperkecil agar muat. Apa pun yang sudah Anda gambar atau impor dan terlihat di tampilan juga ikut berada di bed.
3. Di bawah **Di atas bed**, periksa ukuran setiap item. Item yang bertanda **Di luar bed** perlu dipindahkan. Pindahkan, putar, dan skalakan benda di tampilan dengan alat biasa.
4. Tekan {{ui:Susun di atas bed}} untuk menyebarkan item, atau {{ui:Paskan semua di atas bed}} untuk memperkecil semuanya hingga muat.
5. Di bawah **Printer Anda**, pilih ukuran **Bed** atau salah satu profil printer.
6. Di bawah **Pengaturan cetak**, pilih **Material**, **Kualitas**, dan **Infill %**, lalu centang **Tambahkan penyangga di bawah bagian menggantung** jika bentuknya membutuhkannya.
7. Tekan {{ui:Pratinjau layer}} dan geser penggeser **Layer** untuk melihat lapisan hasil slicing. Jika Anda mengubah tahap atau pengaturan setelahnya, tekan {{ui:Pratinjau layer}} lagi.
8. Di bawah **Koneksi**, pilih {{ui:Kabel USB}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} atau {{ui:PrusaLink}}. Untuk USB, tekan {{ui:Hubungkan}}. Untuk printer jaringan, ketik **Alamat**-nya (dan **kunci API** jika diminta), lalu tekan {{ui:Uji koneksi}}.
9. Tekan {{ui:Kirim ke printer 3D}}. Kartu menanyakan apakah bed sudah kosong dan material yang benar sudah dimuat, lalu menampilkan waktu, material, dan suhunya. Konfirmasi untuk mengirim.

Anda akan menerima pesan bahwa printer sedang dinyalakan. {{ui:Hentikan cetakan}} mematikan pemanas, kipas, dan motor. Jika Anda hanya menginginkan file, tekan {{ui:Simpan G-code saja}}.

## Catatan

- USB membutuhkan Chrome atau Edge di komputer, dan halaman harus tetap terbuka hingga cetakan selesai. Menutupnya akan menghentikan aliran data.
- Printer jaringan harus mengizinkan situs ini (di Moonraker, tambahkan ke `cors_domains`; di OctoPrint, aktifkan CORS dan salin kunci API). Browser Anda mungkin meminta izin untuk menjangkau perangkat di jaringan Anda.
- Tidak ada yang terhubung atau mengirim tanpa klik Anda.
- Daftar slicer ada di bawah **Slicer**. {{ui:CadCraft dasar (sudah termasuk, tercepat)}} sudah tersedia. Kiri:Moto, PrusaSlicer, OrcaSlicer, dan Bambu Lab P2S adalah add-on tersendiri yang Anda aktifkan dari kartu atau di bawah {{ui:Pengaturan}} › {{ui:Add-on}}. PrusaSlicer dan OrcaSlicer menggunakan salinan Anda sendiri dan bekerja dari CadCraft Studio di komputer.
- Bagian yang bukan solid tertutup akan dibiarkan, dan kartu memberi tahu seberapa besar bagian bentuk itu.
- Untuk printer resin, lihat [Slice untuk printer resin](topic:resin-printing). Untuk memeriksa atau memperbaiki model terlebih dahulu, lihat [Penyangga, tebal dinding, pelubangan, dan perbaikan](topic:print-tools).
