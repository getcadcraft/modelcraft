---
title: Pilih objek
summary: Klik, klik dua kali dan klik tiga kali, seret kotak jendela atau kotak silang, tambah dan keluarkan dengan tombol pengubah, serta hapus.
keywords: pilih, pilihan, jendela, silang, tambah ke pilihan, batalkan pilihan, pilih semua, klik tiga kali, klik dua kali, hapus, hapus
from: d56d1f89
---

{{ui:Pilih}} ({{key:Space}}) adalah alat yang dipakai ModelCraft saat pertama dibuka, dan alat yang kembali dipakai saat Anda menekan {{key:Esc}}. Objek yang dipilih berubah biru, dan {{ui:Info entitas}} di sisi kanan menjelaskan apa saja objek itu.

## Klik

| Lakukan ini | Memilih |
|---|---|
| Klik muka atau tepi | Muka atau tepi itu |
| Klik grup atau komponen | Seluruh grup atau komponen |
| Klik dua kali muka | Muka beserta tepinya |
| Klik dua kali tepi | Tepi dan muka di kedua sisinya |
| Klik dua kali grup atau komponen | Membukanya untuk diedit (lihat [Grup dan komponen](topic:groups-components)) |
| Klik tiga kali muka atau tepi | Semua yang terhubung dengannya: seluruh objek |
| Klik ruang kosong | Tidak ada (menghapus pilihan) |
| Klik dua kali ruang kosong saat mengedit grup | Menutup grup |

Tepi lebih mudah diklik daripada muka: saat penunjuk berada dalam beberapa piksel dari tepi, klik akan memilih tepi.

## Seret kotak

- **Kiri ke kanan** menggambar kotak padat: pilihan **jendela**. Hanya objek yang sepenuhnya berada di dalam kotak yang dipilih.
- **Kanan ke kiri** menggambar kotak putus-putus: pilihan **silang**. Apa pun yang disentuh kotak akan dipilih, dan muka dipilih saat kotak berada sepenuhnya di dalamnya.

Grup atau komponen dihitung sebagai satu objek: jendela harus memuat seluruhnya, silang cukup menyentuhnya.

## Tambah dan keluarkan

Tahan tombol saat Anda klik atau seret:

| Tombol | Efek |
|---|---|
| {{key:Shift}} | Beralih: menambah yang belum dipilih, menghapus yang sudah dipilih |
| {{key:Mod}} | Menambah |
| {{key:Shift}} dan {{key:Mod}} bersamaan | Menghapus |

Untuk memilih semua di dalam model (atau semua di dalam grup yang sedang Anda edit), tekan {{key:Mod+A}}.

## Batalkan pilihan

Tekan {{key:Esc}} (dengan {{ui:Pilih}} sebagai alat), atau klik ruang kosong.

## Hapus yang dipilih

Tekan {{key:Delete}} atau {{key:Backspace}}. Muka, tepi, grup, dan garis bantu dalam pilihan dihapus dalam satu langkah; {{key:Mod+Z}} mengembalikannya.

Menghapus tepi juga menghapus muka yang membutuhkannya, kecuali tepi itu hanya memisahkan dua muka pada bidang yang sama: dalam hal itu kedua muka menyatu menjadi satu. Menghapus muka membiarkan tepinya. Lihat [Hapus dan bersihkan](topic:erase).

## Pilih di dalam grup

Mengklik grup memilih seluruh grup. Untuk memilih muka di dalamnya, klik dua kali grup untuk membukanya, lalu klik. Saat grup terbuka, klik hanya mengenai isi di dalamnya; yang lain dibuat pudar. Tekan {{key:Esc}} saat tidak ada yang dipilih, atau klik dua kali ruang kosong, untuk menutupnya.

{{ui:Kerangka}} di sebelah kiri memilih grup dan komponen berdasarkan nama, yang berguna saat keduanya tersembunyi di balik benda lain.
