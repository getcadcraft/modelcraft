---
title: Cat dengan warna dan bahan
summary: Beri muka, kumpulan dan komponen warna pepejal atau bahan seperti bata, papan dinding, sirap atau kayu, dan simpannya apabila anda mengeksport.
keywords: cat, warna, colour, bahan, materials, tekstur, bata, papan dinding, sirap, bumbung, kayu, batu, jubin, konkrit, stuko, rumput, kerikil, kaca, logam, baldi cat, isi, sampel, titisan mata, lalai, glb, obj, mtl, collada
from: b1500523
---

Warna membantu anda membezakan bahagian model, dan **bahan** (bata, papan dinding, bumbung, kayu, batu, jubin, konkrit, stuko, rumput, kaca, logam) menjadikannya kelihatan seperti binaan asalnya. Kedua-duanya dicat dengan cara yang sama.

## Pilih warna

Bahagian {{ui:Warna}} di sebelah kanan memaparkan barisan warna pepejal, {{ui:Lalai}} (yang dipangkah oleh garisan: tiada warna) dan kotak {{ui:+}} untuk mana-mana warna lain. Klik satu untuk menjadikannya warna semasa. Alat Cat bermula dengannya.

## Cat

1. Tekan {{key:B}} ({{ui:Cat}}), atau, dengan tiada apa-apa dipilih, klik warna. (Dengan sesuatu dipilih, klik warna akan mengecat pilihan itu serta-merta.)
2. Klik muka untuk mengecatnya.
3. Klik kumpulan atau komponen untuk mengecat salinan itu: muka-mukanya yang tiada warna sendiri mengambil warna ini. Muka yang anda cat di dalamnya mengekalkan warnanya.

Untuk mengecat beberapa perkara sekaligus, pilih dahulu kemudian klik warna, atau klik mana-mana daripadanya dengan {{ui:Cat}}. Ia ialah satu langkah buat asal.

| Tahan | Dan klik muka | Apa yang dicat |
|---|---|---|
| — | | Muka itu |
| {{key:Ctrl}} | | Setiap muka yang bersambung dengannya dan mempunyai warna yang sama |
| {{key:Shift}} | | Setiap muka berwarna itu dalam kumpulan yang sedang anda kerjakan |
| {{key:Alt}} | | Tiada apa-apa: anda mengambil warna itu sebaliknya |

Untuk mengembalikan muka kepada tiada warna, pilih {{ui:Lalai}} dan klik muka itu.

## Cat dengan bahan

Bahagian {{ui:Bahan}}, di bawah {{ui:Warna}}, menyenaraikan pustaka bahan mengikut jenis: bata dan blok, papan dinding, bumbung, kayu, batu, jubin, konkrit, stuko, tanah, kaca dan logam. Letakkan penuding pada sampel untuk melihat namanya. Klik satu, kemudian cat dengan cara yang sama seperti warna: {{key:B}}, klik muka, kumpulan atau komponen; atau pilih dahulu dan klik bahan.

- Dalam gaya **Berlorek**, muka menunjukkan tekstur bahan. Garisan tersembunyi, rangka dawai dan sinar-X menunjukkan warnanya.
- Tekstur berjalan **mendatar di sepanjang setiap muka** dan **ke atasnya**: lapisan bata kekal mendatar pada setiap dinding, sirap berjalan menuruni cerun bumbung, papan di lantai mengikut paksi merah. Ia pada saiz sebenar (sebiji bata kira-kira 215 mm panjang), jadi ia kelihatan betul pada sebarang jarak.
- Dalam [gambar yang dirender](topic:render), bahan mengekalkan teksturnya, kekasarannya dan, untuk kaca dan logam, kilatnya.
- {{key:Alt}}-klik dengan {{ui:Cat}} juga mengambil bahan muka.

Tekstur dilukis oleh ModelCraft sendiri, jadi ia berfungsi secara luar talian dan percuma digunakan untuk apa-apa sahaja (CC0).

## Komponen dan warna

Warna yang dicat pada muka **di dalam** komponen ditunjukkan pada setiap salinan, kerana salinan berkongsi satu takrifan. Warna yang dicat pada **salinan** dari luar (dengan komponen ditutup) hanya milik salinan itu, jadi dua salinan satu komponen boleh mempunyai warna berbeza. {{ui:Maklumat entiti}} menunjukkan warna muka, kumpulan atau komponen yang dipilih.

## Warna dalam fail

- Fail ModelCraft menyimpan setiap warna dan setiap bahan.
- Format lain mendapat **warna bahan** (rupanya dari jauh) menggantikan tekstur: glTF, Collada, OBJ, DWG dan DXF, dan semakan cetakan 3D. Dalam glTF, Collada dan OBJ, bahan mengekalkan namanya, seperti `Material_brick-red`.
- **glTF (.glb)** dan **Collada (.dae)**: setiap warna menjadi bahan. Komponen yang ditunjukkan dalam warna berbeza ditulis sekali bagi setiap warna. glTF juga menulis tekstur yang diimport sebagai tekstur.
- **OBJ**: eksport memuat turun dua fail, `.obj` dan fail bahan `.mtl` dengan warna. Simpan kedua-duanya dalam folder yang sama. Dengan tekstur yang diimport, `.obj`, `.mtl` dan gambar datang sebagai satu `.zip`.
- **DWG** mengekalkan warna tepat; **DXF** menggunakan yang terdekat daripada 255 warna CAD piawai.
- **STL** dan **PLY** membawa warna: STL dalam konvensyen VisCAM / SolidView (program yang tidak membacanya mengabaikannya), PLY sebagai warna pada setiap titik. Lihat [Format fail secara terperinci](topic:formats).

:::tip
Untuk memodelkan skrin, cat bingkai dengan arang dan kaca dengan biru selepas anda [ofset](topic:draw-faces) muka hadapan.
:::
