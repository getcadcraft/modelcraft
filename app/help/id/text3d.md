---
title: Teks 3D
summary: Tambahkan tulisan ke model sebagai muka, datar atau padat, yang berdiri di muka mana pun: papan nama, nomor rumah, atau nama di pintu.
keywords: teks 3d, teks, huruf, tulisan, papan nama, penanda, nomor rumah, label, ukir, font, kata
from: 923f5d93
---

{{ui:Teks 3D}} di grup {{ui:Gambar}} membuat tulisan dari muka, yang dapat Anda cat, dorong/tarik, atau potong ke dalam solid.

## Menambah teks

1. Klik {{ui:Teks 3D}}.
2. Ketik teksnya. Tekan {{key:Enter}} di kotak untuk baris kedua.
3. Atur {{ui:Tinggi huruf}} (tinggi satu huruf kapital, seperti `30cm` atau `1'`) dan {{ui:Kedalaman}}:
   - `0` menghasilkan **huruf datar**: muka yang berbaring di atas apa pun tempat Anda meletakkannya, siap dicat atau didorong/ditarik.
   - Kedalaman seperti `5cm` menghasilkan **huruf padat**: solid tertutup yang dapat Anda gunakan dengan [alat solid](topic:solids).
4. Klik {{ui:Letakkan}}, lalu klik di tempat teks akan diletakkan.

Di atas sebuah muka, teks berbaring di muka itu dan dibaca dari kiri ke kanan: di dinding ia berdiri tegak; di tanah atau meja ia berbaring datar sepanjang merah. Jauh dari muka mana pun, ia berada di tanah.

Teks adalah sebuah **komponen** yang dinamai sesuai dengan teksnya, sehingga setiap salinan ikut berubah jika Anda menyunting salah satunya, dan ia muncul di daftar {{ui:Komponen}} untuk diletakkan lagi.

## Hal yang perlu diketahui

- Huruf adalah font garis tunggal milik ModelCraft sendiri, yang dipertebal: bersih dan mudah dibaca, belum ada pilihan jenis huruf.
- Huruf, angka, dan tanda umum (termasuk huruf beraksen) digambar; karakter yang tidak ada di font akan tampil sebagai kotak kecil.
- Untuk mengubah kata-katanya, hapus teksnya dan tambahkan lagi.
- Untuk mengukir tulisan ke sebuah permukaan, buat huruf padat, letakkan setengahnya ke dalam grup solid, lalu [kurangi](topic:solids) dengan grup itu.
