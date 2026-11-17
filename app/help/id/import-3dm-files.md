---
title: Impor model .3dm
summary: Impor file .3dm beserta mesh, permukaan, kurva, blok, layer, dan warnanya; dari mana segitiganya berasal, dan apa yang tidak ikut.
keywords: 3dm, impor, nurbs, polysurface, brep, permukaan, mesh render, ekstrusi, kurva, blok, layer, tag, warna, satuan, beralih, migrasi
from: 3cf29879
---

ModelCraft membaca file `.3dm` dengan pembacanya sendiri, di dalam halaman. Tidak ada yang diunggah, dan file ini berfungsi offline kapan pun ModelCraft berfungsi. File yang disimpan dalam tata letak versi 5, 6, 7, dan 8 sudah diuji; versi yang lebih lama (versi 2 sampai 4) seharusnya juga bisa dibuka, tetapi belum dicoba.

## Impor file

1. Klik {{ui:Import}} di grup {{ui:File}} (atau seret file `.3dm` ke tampilan 3D).
2. Pilih file.

   Bilah status menampilkan "Membaca chair.3dm…" selama proses membaca, lalu apa yang masuk, misalnya "Diimpor chair.3dm: 14 mesh (8330 muka), 8 kurva, 5 penempatan blok, 3 layer sebagai tag. Permukaan: 7 muka dari mesh yang disimpan dalam file, 29 ditesselasi oleh CadCraft."

Seluruh model masuk sebagai satu grup yang dinamai sesuai file, dipilih, dan tampilan melakukan zoom ke sana. Satu {{key:Mod+Z}} menghapus semuanya lagi, termasuk tag.

## Dari mana segitiganya berasal

ModelCraft memodelkan dengan muka dan mesh, jadi setiap permukaan dalam file masuk sebagai [mesh](topic:meshes) dari segitiga datar kecil. Untuk setiap muka pada polysurface (dan setiap ekstrusi), ModelCraft mengambil, dengan urutan ini:

1. **Mesh render yang disimpan dalam file.** Kebanyakan program pemodelan menyimpan mesh yang ditampilkan di layar bersama setiap permukaan; jika ada, ModelCraft memakainya apa adanya.
2. **Tesselasi sendiri**, saat file tidak memiliki mesh tersimpan: bidang, permukaan NURBS, permukaan putaran (bola, kerucut, torus, bentuk bubut), kurva yang diekstrusi, dan ekstrusi (dengan lubang dan tutup ujungnya), dipotong oleh tepinya. Muka dari satu polysurface berbagi titik tepinya, sehingga polysurface tertutup masuk sebagai mesh tertutup. Area melengkung dibagi hingga segitiganya berada dalam sekitar 0.15 % dari ukuran objek terhadap permukaan yang sebenarnya.
3. **Tidak ada apa pun**, untuk muka dengan jenis permukaan yang belum dibaca ModelCraft. Bilah status menyebutkan berapa banyak muka dan jenisnya.

Bagian "Permukaan:" pada bilah status menyebutkan berapa banyak muka yang berasal dari mesh tersimpan dan berapa banyak yang ditesselasi ModelCraft. Tepi di dalam satu muka file bersifat lunak, dan tepi di antara dua muka bersifat tajam, sehingga muka melengkung tampak halus.

:::tip
Untuk bentuk yang paling setia, simpan file dengan mesh render-nya di program yang membuatnya (biasanya itu default; opsi "simpan kecil" membuangnya).
:::

## Yang ikut masuk

- **Mesh** beserta warna titik dan koordinat teksturnya.
- **Polysurface, permukaan, dan ekstrusi**, seperti dijelaskan di atas.
- **Kurva** (garis, polyline, busur, lingkaran, kurva NURBS, dan kurva yang digabungkan darinya) sebagai [tepi](topic:curves), satu grup tepi per layer.
- **Blok** menjadi [komponen](topic:groups-components): setiap penempatan blok adalah penempatan dari satu komponen, sehingga menyunting satu salinan mengubah semuanya. Blok di dalam blok tetap dipertahankan.
- **Layer** menjadi [tag](topic:tags) dengan nama lengkap layer ("Furniture::Chairs"), tersembunyi jika layer itu dimatikan. Setiap penempatan objek membawa tag layernya.
- **Warna.** Warna objek berasal dari tempat yang ditentukan file: warna miliknya sendiri, warna layernya, atau warna dasar materialnya. Warna itu menjadi cat pada muka-mukanya.
- **Objek tersembunyi masuk dalam keadaan tersembunyi**; {{ui:Unhide all}} menampilkannya.
- **Satuan:** file menyimpan satuannya; model masuk dengan ukuran sebenarnya.

## Yang tidak ikut (dan diberitahukan)

Bagian "Catatan:" pada bilah status menyebutkan semua yang tidak ikut masuk, beserta jumlahnya:

- titik dan awan titik, teks, titik teks, dimensi, leader, hatch, lampu, bidang pemotong, dan detail tata letak;
- objek SubD: ubah menjadi mesh atau polysurface di program yang membuat file itu terlebih dahulu;
- muka pada permukaan offset dan jenis permukaan lain yang belum dibaca ModelCraft, jika file tidak menyimpan mesh untuknya;
- blok yang ditautkan dari file lain (hanya file yang Anda impor yang dibaca);
- ekstrusi dengan ujung miring (mitered) masuk dengan ujung persegi.

Tekstur material, pengaturan render, tampilan bernama, grup, dan teks pengguna tidak dibaca; material hanya memberikan warna dasarnya.

## Batas

File hingga 300 MB. File yang rusak akan menyebutkan apa yang salah dan tidak menambahkan apa pun; satu objek yang tidak bisa dibaca dilewati dan dihitung, sedangkan sisanya tetap masuk.
