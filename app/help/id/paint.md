---
title: Cat dengan warna dan material
summary: Beri muka, grup, dan komponen warna solid atau material seperti bata, dinding papan, sirap, atau kayu, dan pertahankan saat diekspor.
keywords: cat, warna, material, tekstur, bata, dinding papan, sirap, atap, kayu, batu, ubin, beton, plester, rumput, kerikil, kaca, logam, ember cat, isi, sampel, pipet, bawaan, glb, obj, mtl, collada
from: b1500523
---

Warna membantu Anda membedakan bagian-bagian model, dan **material** (bata, dinding papan, atap, kayu, batu, ubin, beton, plester, rumput, kaca, logam) membuatnya tampak seperti terbuat dari apa. Keduanya dicat dengan cara yang sama.

## Pilih warna

Bagian {{ui:Colors}} di sebelah kanan menampilkan sederet warna solid, {{ui:Default}} (yang dicoret garis: tanpa warna), dan swatch {{ui:+}} untuk warna lain. Klik salah satu untuk menjadikannya warna aktif. Alat Cat dimulai dengan warna itu.

## Cat

1. Tekan {{key:B}} ({{ui:Paint}}), atau, saat tidak ada yang dipilih, klik sebuah warna. (Saat ada yang dipilih, mengklik warna langsung mengecat pilihan.)
2. Klik muka untuk mengecatnya.
3. Klik grup atau komponen untuk mengecat salinan itu: muka-mukanya yang belum memiliki warna sendiri akan memakai warna ini. Muka yang Anda cat di dalamnya tetap mempertahankan warnanya.

Untuk mengecat beberapa benda sekaligus, pilih dulu, lalu klik sebuah warna, atau klik salah satunya dengan {{ui:Paint}}. Itu hanya satu langkah urungkan.

| Tahan | Lalu klik muka | Yang dicat |
|---|---|---|
| — | | Muka itu |
| {{key:Ctrl}} | | Setiap muka yang terhubung dengannya dan memiliki warna yang sama |
| {{key:Shift}} | | Setiap muka dengan warna itu di dalam grup yang sedang Anda kerjakan |
| {{key:Alt}} | | Tidak ada: Anda mengambil warna itu sebagai gantinya |

Untuk mengembalikan muka ke tanpa warna, pilih {{ui:Default}} lalu klik muka itu.

## Cat dengan material

Bagian {{ui:Materials}}, di bawah {{ui:Colors}}, menampilkan pustaka material menurut jenisnya: bata dan blok, dinding papan, atap, kayu, batu, ubin, beton, plester, tanah, kaca, dan logam. Arahkan kursor ke swatch untuk melihat namanya. Klik salah satu, lalu cat seperti warna: {{key:B}}, lalu klik muka, grup, atau komponen; atau pilih dulu lalu klik material.

- Dalam gaya **Shaded**, muka menampilkan tekstur material. Garis tersembunyi, rangka kawat, dan sinar-X menampilkan warnanya.
- Tekstur berjalan **datar di sepanjang setiap muka** dan **naik** di atasnya: lapisan bata tetap datar di setiap dinding, sirap berjalan menuruni kemiringan atap, papan lantai mengikuti sumbu merah. Teksturnya berukuran sebenarnya (sebuah bata sekitar 215 mm panjangnya), sehingga tampak benar dari jarak mana pun.
- Dalam [gambar render](topic:render), material tetap mempertahankan teksturnya, tingkat kekasarannya, dan, untuk kaca dan logam, kilaunya.
- {{key:Alt}}-klik dengan {{ui:Paint}} juga mengambil material muka.

Tekstur digambar oleh ModelCraft sendiri, sehingga berfungsi offline dan bebas digunakan untuk apa pun (CC0).

## Komponen dan warna

Warna yang dicat pada muka di **dalam** komponen tampil di setiap salinan, karena semua salinan berbagi satu definisi. Warna yang dicat pada **salinan** dari luar (dengan komponen tertutup) hanya milik salinan itu, sehingga dua salinan dari satu komponen dapat memiliki warna berbeda. {{ui:Entity info}} menampilkan warna muka, grup, atau komponen yang dipilih.

## Warna dalam file

- File ModelCraft menyimpan setiap warna dan setiap material.
- Format lain mendapatkan **warna material** (tampilannya dari jauh) sebagai pengganti tekstur: glTF, Collada, OBJ, DWG, dan DXF, serta pemeriksaan pencetakan 3D. Di glTF, Collada, dan OBJ, material mempertahankan namanya, seperti `Material_brick-red`.
- **glTF (.glb)** dan **Collada (.dae)**: setiap warna menjadi material. Komponen yang ditampilkan dalam beberapa warna ditulis sekali untuk setiap warna. glTF juga menulis tekstur yang diimpor sebagai tekstur.
- **OBJ**: ekspor mengunduh dua file, `.obj` dan file material `.mtl` dengan warnanya. Simpan keduanya dalam folder yang sama. Dengan tekstur yang diimpor, `.obj`, `.mtl`, dan gambarnya datang sebagai satu `.zip`.
- **DWG** mempertahankan warna persis; **DXF** menggunakan warna standar CAD terdekat dari 255 warna.
- **STL** dan **PLY** membawa warna: STL dengan konvensi VisCAM / SolidView (program yang tidak membacanya mengabaikannya), PLY sebagai warna pada setiap titik. Lihat [Format file secara rinci](topic:formats).

:::tip
Untuk memodelkan layar, cat bingkainya arang dan kacanya biru setelah Anda [offset](topic:draw-faces) muka depan.
:::
