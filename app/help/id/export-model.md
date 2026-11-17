---
title: Ekspor model untuk program lain
summary: Pilih ekspor yang tepat untuk render, web, pencetakan 3D, BIM dan BimCraft, dan periksa apa yang dipertahankan setiap ekspor.
keywords: cetak, 3mf, pdf, kertas, gambar, png, gambar raster, tangkapan layar, render, simpan tampilan, ekspor, bagikan, rendering, gltf, glb, collada, dae, obj, stl, cetak 3d, ifc, bim, bimcraft, kirim, program lain
from: 9e13e80d
---

Ekspor membuat salinan model dalam format lain. Simpan juga file `.modelcraft` Anda: hanya file itulah yang menyimpan semuanya, dan satu-satunya yang langsung dibuka oleh ModelCraft.

## Ekspor

1. Simpan dulu ({{key:Mod+S}}), agar file kerja Anda aman.
2. Klik {{ui:Ekspor}} di grup {{ui:File}}.
3. Pilih format. Browser mengunduhnya, dengan nama seperti model.

Seluruh model diekspor. Untuk mengekspor satu bagian, simpan, hapus sisanya, ekspor, lalu urungkan atau buka kembali.

## Format yang mana

| Anda ingin | Pilih | Catatan |
|---|---|---|
| Membukanya di pemodel 3D lain | {{ui:Collada (.dae)}} | Mempertahankan grup, grup bersarang, komponen (dibagi, tidak disalin), nama dan warna. Z ke atas, meter. |
| Merendernya, atau memakainya di program visualisasi | {{ui:OBJ (.obj)}} atau {{ui:glTF biner (.glb)}} | OBJ paling luas dibaca; ia menulis setiap penempatan grup sebagai objek terpisah, tetapi tidak memiliki warna dan tidak ada komponen bersama. glTF mempertahankan komponen dan warna. |
| Menaruhnya di web, mesin game, atau AR | {{ui:glTF biner (.glb)}} | Satu file dengan semuanya di dalamnya. |
| Mencetaknya dalam 3D | {{ui:Periksa untuk pencetakan 3D (STL atau 3MF)…}} | Memeriksa bahwa model tertutup dan menghadap arah yang benar, lalu menulis STL atau 3MF dalam milimeter. Lihat [Siapkan model untuk pencetakan 3D](topic:print-3d). {{ui:STL untuk pencetakan (.stl, milimeter)}} menulis seluruh model tanpa pemeriksaan. |
| Membukanya di BimCraft atau program BIM lain | {{ui:IFC untuk BimCraft (.ifc)}} | Setiap grup atau komponen tingkat atas menjadi satu elemen bangunan. |

Bilah status mengonfirmasi setiap ekspor, misalnya "Diekspor House.stl (milimeter)." atau "Diekspor House.dae (Collada 1.4.1, Z ke atas, meter; komponen tetap dibagi)."

## Sebelum Anda mengekspor

- **Kelompokkan objek Anda.** Collada, glTF dan IFC mempertahankan grup dan komponen sebagai objek terpisah. Geometri lepas diekspor sebagai satu gumpalan; di IFC ia menjadi satu elemen bernama "Loose geometry".
- **Beri nama.** Nama grup dan komponen masuk ke Collada dan IFC, jadi dinding bernama "North wall" tiba sebagai "North wall".
- **Periksa arah muka.** Muka yang tampak abu-abu kebiruan di sisi luar akan menghadap ke dalam saat diekspor. Perbaiki dengan {{ui:Balik muka}} (lihat [Hapus dan bersihkan](topic:erase#a-face-facing-the-wrong-way)).
- **Untuk pencetakan,** buat bagian sebagai solid tertutup: pilih setiap grup dan periksa bahwa {{ui:Info entitas}} menyatakan "Solid: Ya". Lalu skala model ke ukuran cetak, atau skala di perangkat lunak printer.

## Kirim model ke BimCraft

1. Jadikan setiap bagian bangunan sebagai grup atau komponen dan beri nama.
2. Pilih {{ui:Ekspor}}, lalu {{ui:IFC untuk BimCraft (.ifc)}}.
3. Buka file `.ifc` yang diunduh di BimCraft.

Untuk massa konsep, gunakan {{ui:Ekspor}} › {{ui:Massing ke BimCraft…}} sebagai gantinya: setiap grup dikirim sebagai opsi massa dengan lantai, luas lantai dan volume. Lihat [Kirim massa ke BimCraft](topic:massing-to-bimcraft).

Ekspor IFC biasa tidak memiliki tautan langsung antara kedua aplikasi. IFC memiliki satu lantai, dan setiap elemen adalah elemen bangunan proxy generik tanpa tipe atau properti: ia hanya membawa bentuk dan nama. Grup tertutup menjadi bentuk solid; yang terbuka menjadi permukaan.

## Garis tanpa muka

Tepi yang bukan bagian dari muka mana pun (garis seperti panduan, atau denah tapak yang diimpor) masuk ke OBJ dan Collada sebagai garis. glTF dan STL tidak memiliki tempat untuk itu dan membiarkannya keluar. Panduan dan scene tidak diekspor ke format apa pun.

## Simpan tampilan sebagai gambar

{{ui:Ekspor}} › {{ui:Gambar tampilan (.png)}} menyimpan persis apa yang ditampilkan tampilan 3D, dalam ukuran di layar. {{ui:Gambar dua kali ukuran (.png)}} menyimpannya dua kali lebih lebar dan dua kali lebih tinggi (untuk cetak atau slide yang tajam), dengan dimensi dan penanda digambar ulang pada ukuran itu, bukan diregangkan.

Untuk gambar yang tampak seperti cahaya siang (langit, matahari, bayangan lembut, kaca), gunakan {{ui:Ekspor}} › {{ui:Render gambar…}} sebagai gantinya: lihat [Render gambar](topic:render).

Untuk gambar yang bersih, aktifkan [tampilan presentasi](topic:styles-shadows#presentation-view) ({{key:Shift+P}}) terlebih dahulu: sumbu, panduan, garis potong dan pilihan dibiarkan keluar. Atur kamera, gaya dan bayangan sesuai keinginan Anda, atau buka [scene](topic:scenes); untuk menyimpan film bergerak dari scene Anda, gunakan {{ui:Ekspor animasi}} di panel {{ui:Scene}}.

## Cetak tampilan, atau simpan sebagai PDF

- {{ui:Ekspor}} › {{ui:PDF tampilan (.pdf)}} menyimpan PDF satu halaman: tampilan dua kali ukuran layarnya, dengan dimensinya, pada halaman A4 (Letter jika model dalam kaki dan inci), lanskap, dengan garis di bawahnya yang memuat nama file, tanggal dan satuan.
- {{ui:Ekspor}} › {{ui:Cetak tampilan…}} menampilkan halaman yang sama di dialog cetak browser Anda. Pilih printer, atau "Simpan sebagai PDF".

Halaman menampilkan tampilan apa adanya: tidak ada skala pada tampilan perspektif. Untuk gambar yang sesuai skala, matikan {{ui:Perspektif}} dan lihat dari {{ui:Atas}} atau {{ui:Depan}}, lalu tambahkan [dimensi](topic:dimensions) untuk ukuran yang penting. [Tampilan presentasi](topic:styles-shadows#presentation-view) membiarkan sumbu, panduan dan pilihan keluar; dimensi tetap ada.
