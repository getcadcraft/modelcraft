---
title: Node: membangun model dengan menyambungkan
summary: Sambungkan angka ke titik, titik ke kurva, dan kurva ke permukaan. Ubah sebuah angka dan semua yang berada di hilirnya ikut dibangun ulang. Setiap node juga merupakan satu baris CraftScript, dan grafiknya disimpan di dalam file.
keywords: node, editor node, skrip visual, parametrik, grafik, kabel, port, bentuk bebas, freeform, nurbs, loft, ekstrusi, revolusi, lingkaran, kurva, permukaan, deret, rentang, acak, daftar, skrip, craftscript, grasshopper
from: 9c8e254f
---

Editor **Node** membangun geometri dengan menyambungkan kotak-kotak. Setiap kotak (sebuah node) melakukan satu tugas kecil: membuat angka, titik, lingkaran, atau loft. Anda menyambungkan hasil satu node ke input node berikutnya, dan model mengikuti saat Anda mengubah angka di awal.

Bukalah dari panel sisi kanan: {{ui:Node}} › {{ui:Node…}}. File yang sudah memiliki grafik akan membukanya dengan sendirinya. Ini adalah jendela di atas tampilan 3D: seret bilah judulnya untuk memindahkan, seret sudutnya untuk mengubah ukuran.

## Menyambungkan

1. Pilih node dari daftar di sebelah kiri (ketik di kotak pencarian untuk mempersempit, <kbd>Enter</kbd> menambahkan hasil pertama yang cocok). Node itu muncul di tengah kanvas.
2. Seret dari titik **output** bulat di sisi kanan satu node ke titik **input** bulat di sisi kiri node lain. Titik berubah hijau jika cocok dan merah jika tidak; arahkan penunjuk ke titik itu untuk melihat alasannya.
3. Input yang tidak terhubung menampilkan kotak untuk nilai yang diketik. Ketik angka lalu tekan <kbd>Tab</kbd>: hasilnya dibangun ulang.
4. Lingkaran kecil di bilah judul node adalah **mata**-nya. Node dengan mata menyala digambar di tampilan 3D: sebagai garis untuk kurva, berbayang untuk permukaan, dan sebagai titik untuk titik.

Seret node dengan bilah judulnya. Seret latar belakang untuk menggeser, dan putar roda untuk zoom. <kbd>Delete</kbd> menghapus node yang dipilih. {{ui:Rapikan}} menata node dalam kolom, {{ui:Paskan}} membawa semuanya ke dalam tampilan, dan {{ui:Urungkan}} serta {{ui:Ulangi}} menelusuri suntingan Anda.

## Tipe dan satuan

Port memiliki tipe: angka, ya/tidak, titik, vektor, kurva, permukaan, mesh, solid, atau "geometri" untuk salah satu dari itu. Titik dapat mengisi input vektor, dan sebaliknya. Angka membawa satuan: **panjang** dalam milimeter dan **sudut** dalam derajat. Panjang tidak dapat mengisi sudut, dan panjang dikali panjang (luas) ditolak, sehingga kabel yang salah dihentikan saat Anda membuatnya.

Titik persegi adalah **daftar**. Saat sebuah daftar mencapai input nilai tunggal, node dijalankan sekali untuk setiap item, dan hasilnya menjadi daftar. Daftar yang lebih pendek mengulang item terakhirnya. Misalnya, sebuah **Series** berisi tinggi yang dihubungkan ke **Move** akan membuat tumpukan salinan.

## Solid dan Boolean sebagai node

Grup **{{ui:Solid}}** membuat badan tertutup dari permukaan yang sama persis dengan panel Permukaan: **Box solid**, **Cylinder solid**, dan **Sphere solid** (ukuran dalam mm), **Union**, **Subtract**, dan **Intersect** (solid kedua diambil dari yang pertama; toleransi adalah seberapa jauh segitiga mesin solid boleh berbeda dari permukaan yang tepat), **Fillet between faces** (muka berdasarkan nomornya di dalam solid, 1 untuk yang pertama; sebuah radius dan, jika di atas 0, radius di ujung), **Solid volume** (mm³), dan **Solid to mesh** (untuk melihat atau mem-bake-nya). Solid memiliki tipe port sendiri: titik atau angka tidak dapat disambungkan ke input solid, dan titiknya tetap merah. Node Boolean dan Fillet memakai mesin solid milik program, yang dimuat saat editor pertama kali dibuka.

## Galat

Node yang tidak dapat melakukan tugasnya menjelaskan alasannya di bawah namanya, dalam warna merah ("Radius harus lebih besar dari nol."), dan node setelahnya menunggu. Pesan yang sama muncul sebagai Masalah di panel Masalah, sehingga Anda dapat menemukannya dari sana.

## Setiap node adalah satu baris skrip

Tekan {{ui:Skrip}} untuk melihat grafik sebagai CraftScript: satu baris per node, misalnya `n3 = nd_circle(n2, n1, [0 0 1]);`. Sunting teksnya, lalu tekan {{ui:Buat grafik dari skrip ini}} untuk mengembalikannya menjadi grafik. Fungsi `nd_` yang sama juga berfungsi di CraftScript dalam PartCraft, sehingga grafik dapat dijalankan, diulang, atau diuji di sana. Angka acak selalu memakai **seed**, sehingga grafik yang sama memberikan hasil yang sama di setiap komputer.

## Disimpan bersama file

Grafik disimpan di dalam file model. Node membuat kurva, permukaan, dan mesh sendiri: node tidak mengubah muka model sampai Anda memintanya.

## Bake ke model

Nyalakan mata node yang membuat permukaan atau mesh, lalu tekan {{ui:Bake ke model}} di jendela Node. Setiap permukaan atau mesh yang ditampilkan menjadi grup muka di model, dalam meter, yang dapat Anda sunting seperti objek lain. Ini adalah satu langkah {{ui:Urungkan}}. Grafik tetap ada, tetapi salinan itu tidak lagi mengikutinya: ubah angka dan bake lagi untuk mendapatkan yang baru. Titik dan kurva bukan solid, sehingga dilewati, dan pesannya menyebutkan jumlahnya.
