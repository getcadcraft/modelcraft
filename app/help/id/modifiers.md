---
title: Modifier pada mesh, grup, atau komponen
summary: Skala, cerminkan, array, haluskan, bevel, potong, dan bengkokkan mesh tanpa mengubah mesh itu; ulangi atau skala grup atau komponen dengan tumpukan yang sama; jadikan permanen saat Anda siap.
keywords: modifier, modifier, tumpukan, grup, komponen, skala, cermin, array, radial array, subdivisi, permukaan subdivisi, haluskan, bevel, solidify, ketebalan, boolean, potong, displace, noise, las, decimate, sederhanakan, kisi, sangkar, deformasi kurva, bengkok, shrinkwrap, terapkan
from: dd5ec1cb
---

**Modifier** mengubah apa yang ditampilkan sebuah mesh tanpa mengubah mesh itu sendiri. Cerminkan satu sisi bagian dan modelkan hanya sisi itu; bulatkan kotak dengan permukaan subdivisi dan tetap sunting kotaknya. Modifier berada dalam **tumpukan** dan bekerja berurutan, dari atas ke bawah. Yang Anda lihat, ekspor, cetak, dan render adalah mesh dengan semua modifier yang aktif.

## Tambah modifier

1. Pilih mesh. Di ruang kerja Model, bagian **Modifier** berada di {{ui:Info entitas}}; di ruang kerja Mesh, berada di panel sebelah kanan.
2. Pilih salah satu dari {{ui:Tambah modifier…}}. Modifier masuk ke bagian bawah tumpukan.
3. Ubah pengaturannya di bawah namanya. Panjang memakai nilai yang sama seperti kotak Nilai, sehingga `600mm`, `2'6"`, dan `(6m)/4` semuanya berfungsi.

Setiap perubahan adalah satu langkah urungkan: {{key:Mod+Z}} membatalkannya.

## Tombol pada setiap modifier

- Kotak centang mengaktifkan atau menonaktifkannya.
- Tombol layar menampilkan atau menyembunyikannya di tampilan (tetap berada di tumpukan).
- Tombol kamera menampilkan atau menyembunyikannya di gambar render dan video, sehingga modifier bisa hanya untuk render (atau hanya untuk tampilan).
- Panah memindahkannya naik atau turun tumpukan. Urutan penting: cermin lalu subdivisi menghasilkan sambungan yang halus, subdivisi lalu cermin tidak.
- {{ui:Terapkan}} menjadikan bentuk itu bagian dari mesh: modifier di atasnya dan modifier ini dikerjakan langsung pada mesh dan keluar dari tumpukan. Ini adalah satu langkah urungkan.
- Tanda silang menghapusnya.

## Modifier

| Modifier | Fungsinya |
| --- | --- |
| {{ui:Skala}} | Menskalakan terhadap titik asal objek, dengan faktor untuk merah, hijau, dan biru. Juga pada grup atau komponen. |
| Cermin | Menambah salinan cermin melintasi merah, hijau, atau biru melalui titik asal mesh, dan menyambung kedua bagian di tempat mereka bertemu. |
| Array | Menyalin dalam satu baris (langkah sebesar ukurannya sendiri dikali angka yang Anda berikan, ditambah langkah tetap), mengelilingi sumbu, atau sepanjang kurva dalam model. Grup atau komponen mengikuti baris itu. |
| Permukaan subdivisi | Menghaluskan mesh dengan subdivisi Catmull-Clark. Tepi tajam tetap berlipat. Render dapat memakai lebih banyak level daripada tampilan. |
| Bevel | Membulatkan setiap tepi yang lebih tajam dari sudut yang Anda berikan. |
| Solidify | Memberi permukaan ketebalan dan menutup tepinya. |
| Boolean | Memotong, menggabungkan, atau mempertahankan irisan dengan objek lain dalam model. Keduanya harus berupa solid tertutup. |
| Displace | Memindahkan permukaan ke dalam atau keluar dengan noise yang halus. Seed yang sama memberi tonjolan yang sama setiap kali. |
| Las | Menyambung verteks yang lebih dekat dari jarak tertentu. |
| Decimate | Mempertahankan sebagian segitiga, menghapus yang paling sedikit mengubah bentuk. |
| Haluskan | Meratakan verteks ke arah tetangganya. |
| Kisi | Membengkokkan mesh dengan sangkar: pindahkan titik sangkar dan mesh mengikuti. |
| Deformasi kurva | Membengkokkan mesh sepanjang kurva dalam model, sepanjang merah, hijau, atau biru. |
| Shrinkwrap | Memindahkan setiap verteks ke titik terdekat pada objek lain. |

## Pada grup atau komponen

Grup atau komponen juga dapat menyimpan resep, sehingga kap lampu bisa berupa **Skala** dan **Array** dari satu kap, dan mengubah satu angka akan mengubah lampunya.

1. Pilih grup atau komponen. Di {{ui:Info entitas}}, bagian **Modifier**-nya mencantumkan tumpukan (awalnya kosong).
2. Pilih {{ui:Skala}} atau {{ui:Array}} dari {{ui:Tambah modifier…}}. Grup menjadi komponen yang **aslinya, ditempatkan oleh tumpukan**. Yang asli disimpan: sunting, dan setiap salinan langsung mengikuti.
3. Skala menerima faktor untuk merah, hijau, dan biru (`1, 1, 2` menggandakan tinggi). Array menerima jumlah salinan, langkah sebagai bagian dari ukuran hasil saat ini, dan langkah tambahan dalam satuan panjang.

Tumpukan berjalan dari atas ke bawah pada sumbu asli, terhadap titik asalnya, sehingga urutan penting: Array tiga salinan berjarak 3 m, lalu Skala 2 pada merah, menempatkan salinan berjarak 6 m; Skala lebih dulu lalu Array membuatnya tetap berjarak 3 m. Kotak centang, panah, dan tanda silang bekerja seperti pada mesh; tombol kamera dan layar serta Terapkan pada satu modifier tidak, karena tumpukan pada grup merupakan satu kesatuan.

- {{ui:Sunting sumber}} membuka yang asli di tempatnya. Perubahan tampil di setiap salinan; menutupnya mengembalikan Anda ke tempat semula.
- {{ui:Bake modifier}} menjadikan hasilnya tepi dan muka biasa serta menghapus tumpukannya, dalam satu langkah urungkan. Salinan yang tumpang tindih tetap sebagai geometri terpisah: Bake bukan penggabungan.
- Salinan komponen berbagi resep; {{ui:Jadikan unik}} memisahkannya (yang asli tetap dibagi).
- Tumpukan disimpan dalam file, dibawa oleh salin dan tempel serta urungkan, dan Bersihkan yang tidak dipakai menyimpan yang asli. Program yang tidak mengenal modifier tetap menampilkan salinannya.
- Sampai Bake, hasilnya tidak dapat dimasuki, diurai, diubah ukurannya, atau diregangkan: hasilnya akan dibangun ulang pada perubahan berikutnya. Setiap alat menyatakan hal itu.
- Batasnya adalah 32 modifier dan 1.000 salinan. Komponen yang dibuat untuk diregangkan (Stretch) dan tumpukan tidak bisa berbagi definisi untuk saat ini.

## Permukaan subdivisi

Subdivisi menghaluskan mesh dengan Catmull-Clark: setiap muka menjadi muka empat sisi, dan setiap level menghasilkan empat kali lebih banyak muka. Kotak dengan dua atau tiga level sudah tampak seperti bentuk membulat, dan Anda tetap bisa menyunting kotaknya.

- **Level di tampilan** mengatur seberapa halus tampilannya.
- **Level di render** mengatur seberapa halus gambar dan video hasil render; render dapat memakai lebih banyak level daripada tampilan.
- **Render pada permukaan halus yang sebenarnya** menempatkan titik mesh yang di-render pada permukaan limit yang dituju level-level itu, sehingga bahkan dua level dirender sehalus banyak level.
- **Lipatan** menjaga tepi tetap tajam: di ruang kerja Mesh, pilih tepi dan gunakan {{ui:Lipatan}} (1 tetap tajam, 0,5 sedikit membulat, 0 halus). Lihat [Sunting mesh](topic:mesh-edit).
- **Turunkan level tampilan pada mesh besar:** ketika level yang Anda minta akan menghasilkan lebih banyak muka daripada yang dapat ditangani tampilan komputer ini dengan baik, tampilan menampilkan level yang lebih rendah dan memberi tahu Anda. {{ui:Terapkan}} selalu memakai semua level. Jumlah muka diatur oleh kelas mesin Anda di {{ui:Pengaturan}} › Rendering › Mesin Anda.
- Batas terbuka mempertahankan sudutnya dan tetap berada pada garis tepinya.

## Bengkokkan dengan sangkar kisi

1. Tambahkan modifier {{ui:Kisi}} dan tekan {{ui:Tambah sangkar kisi di sekeliling mesh}}. Sangkar berukuran 3 × 3 × 3 titik muncul mengelilingi mesh, digambar sebagai kawat.
2. Buka sangkar di ruang kerja Mesh (klik dua kali) dan pindahkan titik-titiknya. Mesh mengikuti dengan halus.

:::tip
Sangkar adalah mesh seperti yang lain: sembunyikan dengan tag-nya ketika Anda sudah selesai.
:::

## Mesh besar

Tumpukan kecil dikerjakan sekaligus. Yang besar dikerjakan di latar belakang pada setiap inti komputer Anda: tampilan tetap menampilkan hasil terakhir sampai hasil baru siap. Boolean memuat pemodel solid pada kali pertama; tampilan memberi tahu Anda sebentar.

## Yang belum dilakukan modifier

- Bobot per verteks (falloff yang dicat pada mesh) untuk Displace, Haluskan, dan Shrinkwrap.
- Modifier selain Skala dan Array linear pada geometri dorong/tarik (grup dan komponen): ubah dulu menjadi mesh ({{ui:Ubah menjadi mesh}}). Cermin, Array melingkar atau kurva, Bengkokkan, dan Taper pada grup akan hadir kemudian.
