---
title: Eksport model untuk program lain
summary: Pilih eksport yang betul untuk render, web, cetakan 3D, BIM dan BimCraft, dan semak apa yang setiap satu simpan.
keywords: cetak, 3mf, pdf, kertas, imej, gambar, tangkapan skrin, simpan paparan, render, eksport, kongsi, rendering, gltf, glb, collada, dae, obj, stl, cetakan 3D, ifc, bim, bimcraft, hantar, perisian lain
from: 9e13e80d
---

Eksport menghasilkan salinan model dalam format lain. Simpan juga fail `.modelcraft` anda: ia ialah satu-satunya fail yang menyimpan segala-galanya, dan satu-satunya yang ModelCraft buka secara langsung.

## Eksport

1. Simpan dahulu ({{key:Mod+S}}), supaya fail kerja anda selamat.
2. Klik {{ui:Eksport}} dalam kumpulan {{ui:Fail}}.
3. Pilih format. Pelayar memuat turun fail itu, dinamakan seperti model.

Keseluruhan model dieksport. Untuk mengeksport satu bahagian, simpan, padam yang lain, eksport, kemudian buat asal atau buka semula.

## Format yang mana

| Anda mahu | Pilih | Nota |
|---|---|---|
| Buka dalam pemodel 3D lain | {{ui:Collada (.dae)}} | Mengekalkan kumpulan, kumpulan bersarang, komponen (dikongsi, tidak disalin), nama dan warna. Z ke atas, meter. |
| Render, atau guna dalam program visualisasi | {{ui:OBJ (.obj)}} atau {{ui:glTF binari (.glb)}} | OBJ paling meluas dibaca; ia menulis setiap penempatan kumpulan sebagai objek berasingan, tetapi tiada warna dan tiada komponen dikongsi. glTF mengekalkan komponen dan warna. |
| Letak di web, dalam enjin permainan atau dalam AR | {{ui:glTF binari (.glb)}} | Satu fail dengan segala-galanya di dalamnya. |
| Cetak dalam 3D | {{ui:Semak untuk cetakan 3D (STL atau 3MF)…}} | Menyemak model tertutup dan menghadap arah yang betul, kemudian menulis STL atau 3MF dalam milimeter. Lihat [Sediakan model untuk cetakan 3D](topic:print-3d). {{ui:STL untuk cetakan (.stl, milimeter)}} menulis keseluruhan model tanpa semakan. |
| Buka dalam BimCraft atau program BIM lain | {{ui:IFC untuk BimCraft (.ifc)}} | Setiap kumpulan atau komponen peringkat atas menjadi satu elemen bangunan. |

Bar status mengesahkan setiap eksport, contohnya "House.stl dieksport (milimeter)." atau "House.dae dieksport (Collada 1.4.1, Z ke atas, meter; komponen kekal dikongsi)."

## Sebelum anda mengeksport

- **Kumpulkan objek anda.** Collada, glTF dan IFC mengekalkan kumpulan dan komponen sebagai objek berasingan. Geometri lepas dieksport sebagai satu ketulan; dalam IFC ia menjadi satu elemen bernama "Loose geometry".
- **Namakannya.** Nama kumpulan dan komponen dimasukkan ke dalam Collada dan IFC, jadi dinding yang dinamakan "North wall" tiba sebagai "North wall".
- **Semak arah muka.** Muka yang menunjukkan warna kelabu-biru di bahagian luar akan menghadap ke dalam dalam eksport. Betulkannya dengan {{ui:Balikkan muka}} (lihat [Padam dan bersihkan](topic:erase#a-face-facing-the-wrong-way)).
- **Untuk cetakan,** jadikan bahagian sebagai pepejal tertutup: pilih setiap kumpulan dan semak bahawa {{ui:Maklumat entiti}} berkata "Pepejal: Ya". Kemudian skalakan model kepada saiz cetakan, atau skalakan dalam perisian pencetak.

## Hantar model ke BimCraft

1. Jadikan setiap bahagian bangunan sebagai kumpulan atau komponen dan namakannya.
2. Pilih {{ui:Eksport}}, kemudian {{ui:IFC untuk BimCraft (.ifc)}}.
3. Buka fail `.ifc` yang dimuat turun dalam BimCraft.

Untuk jisim konsep, gunakan {{ui:Eksport}} › {{ui:Massing ke BimCraft…}} sebaliknya: setiap kumpulan dihantar sebagai pilihan jisim dengan tingkat, luas lantai dan isi padu. Lihat [Hantar jisim ke BimCraft](topic:massing-to-bimcraft).

Eksport IFC biasa tidak mempunyai pautan langsung antara kedua-dua aplikasi. IFC mempunyai satu tingkat, dan setiap elemen ialah proksi elemen bangunan generik tanpa jenis atau sifat: ia hanya membawa bentuk dan nama. Kumpulan tertutup menjadi bentuk pepejal; kumpulan terbuka menjadi permukaan.

## Garisan tanpa muka

Tepi yang bukan sebahagian daripada mana-mana muka (garisan seperti panduan, pelan tapak yang diimport) dieksport ke OBJ dan Collada sebagai garisan. glTF dan STL tiada tempat untuknya dan meninggalkannya. Panduan dan scene tidak dieksport ke mana-mana format.

## Simpan paparan sebagai imej

{{ui:Eksport}} › {{ui:Imej paparan (.png)}} menyimpan tepat apa yang ditunjukkan oleh paparan 3D, pada saiz skrinnya. {{ui:Imej dua kali ganda saiz (.png)}} menyimpannya dua kali lebar dan dua kali tinggi (untuk cetakan atau slaid yang tajam), dengan dimensi dan penanda dilukis semula pada saiz itu dan bukannya diregangkan.

Untuk gambar yang kelihatan seperti cahaya siang (langit, matahari, bayang lembut, kaca), gunakan {{ui:Eksport}} › {{ui:Render imej…}} sebaliknya: lihat [Render imej](topic:render).

Untuk gambar yang bersih, hidupkan [paparan persembahan](topic:styles-shadows#presentation-view) ({{key:Shift+P}}) dahulu: paksi, panduan, garis keratan dan pilihan ditinggalkan. Tetapkan kamera, gaya dan bayang seperti yang anda mahu, atau pergi ke [scene](topic:scenes); untuk menyimpan filem bergerak bagi scene anda, gunakan {{ui:Eksport animasi}} dalam panel {{ui:Adegan}}.

## Cetak paparan, atau simpan sebagai PDF

- {{ui:Eksport}} › {{ui:PDF paparan (.pdf)}} menyimpan PDF satu halaman: paparan pada dua kali saiz skrinnya, dengan dimensinya, pada halaman A4 (Letter apabila model dalam kaki dan inci), landskap, dengan garisan di bawahnya yang memberikan nama fail, tarikh dan unit.
- {{ui:Eksport}} › {{ui:Cetak paparan…}} meletakkan halaman yang sama di hadapan dialog cetak pelayar anda. Pilih pencetak, atau "Simpan sebagai PDF".

Halaman menunjukkan paparan seperti sedia ada: tiada skala pada paparan perspektif. Untuk lukisan mengikut skala, matikan {{ui:Perspektif}} dan lihat dari {{ui:Atas}} atau {{ui:Depan}}, dan tambah [dimensi](topic:dimensions) untuk saiz yang penting. [Paparan persembahan](topic:styles-shadows#presentation-view) meninggalkan paksi, panduan dan pilihan; dimensi kekal.
