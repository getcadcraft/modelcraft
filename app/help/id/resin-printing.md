---
title: Iris untuk printer resin
summary: Iris area cetak menjadi gambar layer untuk layar printer resin, buat part berongga dan beri penyangga, periksa layer, simpan file printer, dan temukan paparan Anda dengan tes paparan.
keywords: resin, sarankan kemiringan, cangkir hisap, gaya pengelupasan, pengaku, cetak resin, sla, msla, dlp, slicer, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, berongga, lubang ventilasi, raft, penyangga, tes paparan, tangga paparan, kalibrasi, layer, add-on
from: 8cc12858
---

Add-on resin mengiris apa yang ada di bed cetak menjadi gambar layer untuk layar printer Anda, dan menyimpan file yang dibaca printer Anda. Add-on ini gratis, tidak ada yang dikunci, dan nonaktif sampai Anda mengaktifkannya.

:::note
Belum ada file yang dimuat pada printer resin sungguhan. File hanya dibaca kembali oleh pembaca milik CadCraft sendiri, dan penyangganya masih baru. Periksa layer-layernya, dan jalankan cetak pertama Anda secara manual.
:::

## Yang akan Anda lakukan

Iris part untuk resin, periksa layer, simpan file, dan salin ke printer Anda.

## Langkah-langkah

1. Buka {{ui:Pengaturan}} › {{ui:Add-on}} dan aktifkan add-on slicer resin serta add-on untuk format file printer Anda (Elegoo GOO, SL1, Chitubox, atau Anycubic). Anda juga dapat menekan {{ui:Tambahkan cetak resin}} pada kartu tahap cetak.
2. Letakkan part Anda di bed cetak seperti di [Letakkan benda di bed cetak](topic:print-stage), lalu pilih {{ui:Resin}} di samping **Mencetak dengan**.
3. Di bawah **Pengaturan cetak resin**, pilih **Printer** dan **Resin** Anda. Kartu menampilkan ukuran layar dalam piksel. Ini adalah ukuran yang dipublikasikan pabrikan, jadi periksa ukuran printer Anda; Anda dapat mengeditnya di bagian Kustom.
4. Atur **Tinggi layer (mm)**, **Paparan (s)** dan **Paparan dasar (s)**. Angka untuk setiap resin hanya titik awal.
5. Centang **Buat berongga, dengan lubang ventilasi** jika Anda ingin part berongga, lalu atur **Dinding (mm)** dan **Lebar lubang (mm)**.
6. Centang **Penyangga dan raft**, lalu pilih **Kerapatan penyangga**: Ringan, Sedang atau Berat.
7. Pilih **Format file**. Jika kartu menyatakan belum ada yang ditambahkan, tekan tombol bertuliskan Tambah dan nama format tersebut.
8. Tekan {{ui:Pratinjau layer}} dan gerakkan penggeser **Layer**. Potongan yang mengambang diberi lingkaran. Baris di bawahnya menampilkan jumlah layer, waktu, serta resin dalam mL, gram dan biaya.
9. Tekan {{ui:Simpan file cetak}}, periksa ringkasannya, lalu tekan {{ui:Simpan}}. Salin file ke printer Anda.

## Kemiringan, cangkir hisap, pengaku dan angka pengelupasan

Keempat hal ini adalah perkiraan dari bentuk part. Belum ada yang dicoba pada printer resin sungguhan, jadi anggap masing-masing sebagai petunjuk dan periksa layer-layernya.

1. Tekan {{ui:Sarankan kemiringan}} di bawah **Kemiringan (derajat)**. CadCraft mencoba kemiringan dari 0 sampai 60 derajat dan memilih yang memiliki layer terbesar terkecil, permukaan menggantung paling sedikit, dan tanpa cangkir hisap. Ia mengatur **Kemiringan (derajat)** dan menyatakan apa yang ditemukannya. Bobot penilaiannya adalah buatan kami, bukan dari pabrikan printer.
2. Setelah {{ui:Pratinjau layer}}, peringatan menyebutkan rongga yang hanya terbuka ke arah film. Rongga seperti itu dapat menahan hisap saat sebuah layer terkelupas. Miringkan part atau tambahkan lubang. Kantong yang lebih sempit dari ukuran sel pada peringatan tidak terdeteksi.
3. Dengan **Penyangga dan raft** aktif, centang **Beri pengaku pada penyangga tinggi** untuk menambahkan pengaku silang di antara tiang tipis yang tinggi.
4. Baris di bawah pratinjau memberikan layer terbesar dalam cm2. Gaya hanya ditampilkan jika Anda memasukkan **Tegangan pengelupasan yang Anda ukur** di bawah **Lapisan dasar, angkat dan kecepatan**. Tanpa angka hasil ukur Anda sendiri, hanya luas yang ditampilkan.

## Temukan paparan Anda

1. Aktifkan add-on tes paparan di {{ui:Pengaturan}} › {{ui:Add-on}}.
2. Tekan {{ui:Letakkan part tes di bed}}.
3. Tekan {{ui:Simpan tangga paparan}}. Anda mendapatkan satu file untuk setiap paparan, dalam zip.
4. Cetak setiap file dengan resin yang sama, dan simpan paparan yang menghasilkan tiang tipis dan lubang terbuka paling tajam.

## Catatan

- Pengirisan berjalan di latar belakang, sehingga halaman tetap dapat dipakai pada pelat yang besar.
- Potongan yang bukan solid tertutup tidak ikut, dan kartu akan menyatakannya.
- Jika printer Anda menolak file, kartu format memiliki pilihan untuk hal-hal yang dibiarkan terbuka oleh format tersebut. Ubah salah satunya, simpan lagi, dan beri tahu kami mana yang berhasil.
- Versi Anycubic 517 dan 518 tidak ditulis.
