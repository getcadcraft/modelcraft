---
title: Ukur dan letakkan panduan
summary: Baca panjang dan luas, ukur di antara dua titik dengan meteran, dan tata garis serta titik bantu untuk digambar.
keywords: ukur, meteran, busur derajat, sudut, panduan bersudut, panduan, garis bantu, garis konstruksi, jarak, dimensi, panjang, luas, offset, tata letak, titik bantu
from: de6d04d9
---

## Baca ukuran tanpa mengukur

Pilih sesuatu dan lihat {{ui:Entity info}}:

- Sebuah tepi menampilkan **panjangnya**.
- Sebuah muka menampilkan **luasnya** dan berapa banyak lubang yang dimilikinya.
- Beberapa muka menampilkan **total luasnya**.
- Grup atau komponen menampilkan **ukurannya** (lebar × kedalaman × tinggi kotak di sekitarnya) dan, jika berupa solid tertutup, **volumenya**.
- Saat tidak ada yang dipilih, {{ui:Entity info}} menampilkan ukuran seluruh model.

Panjang dan luas memakai satuan di pemilih di kanan bawah. Model dalam milimeter menampilkan luas 0.01 m² ke atas dalam meter persegi (ruangan 4 × 3 m terbaca "12 m²").

Saat menggambar, kotak nilai menampilkan panjang, ukuran, jari-jari, atau jarak secara langsung, jadi Anda jarang perlu mengukur setelahnya.

Untuk mengubah ukuran setelah menggambar, pilih tepi atau grup lalu ketik ulang panjang atau ukurannya di {{ui:Entity info}}. Atau letakkan [dimensi](topic:dimensions) dan ketik panjang baru di dalamnya.

## Ukur di antara dua titik

1. Tekan {{key:T}} untuk {{ui:Tape}} pengukur.
2. Klik sebuah titik: sudut, titik tengah, titik pada muka, atau tanah. (Mengklik tepi melakukan hal lain; lihat di bawah.)
3. Pindah ke titik kedua. Ujung alat dan kotak nilai ({{ui:Length}}) menampilkan jaraknya. Alat ini snap ke titik dan ke arah merah, hijau, dan biru.
4. Klik. Bilah status menampilkan "Diukur 4' 6"." dan **titik bantu** tertinggal di titik kedua.

Untuk meninggalkan titik bantu pada jarak yang tepat, ketik jaraknya setelah klik pertama lalu tekan {{key:Enter}}: titik itu akan berada di arah yang Anda tunjuk.

## Letakkan garis bantu

Garis bantu adalah garis putus-putus tak berujung yang sejajar dengan sebuah tepi, pada jarak yang Anda pilih. Gunakan garis bantu untuk menata jarak mundur, tinggi lantai, atau tempat jendela dimulai.

1. Tekan {{key:T}}.
2. Klik pada sebuah **tepi** (bukan ujungnya). Ujung alat menampilkan "Pada tepi".
3. Geser menjauh dari tepi, ke sisi tempat garis bantu harus berada. Garis putus-putus akan mengikuti, sejajar dengan tepi, dan kotak nilai ({{ui:Offset}}) menampilkan jaraknya.
4. Klik, atau ketik offset lalu tekan {{key:Enter}}: `1.5m`, `5'`.

   Bilah status menampilkan "Garis bantu 1.5 m dari tepi."

Memulai dari garis bantu yang sudah ada akan membuat garis bantu lain yang sejajar dengannya, jadi Anda bisa membuat kisi bertahap dari satu garis bantu.

Jika Anda mengetik offset tanpa lebih dulu bergeser menjauh dari tepi, ModelCraft tidak bisa mengetahui sisi yang Anda maksud: "Geser menjauh dari tepi terlebih dahulu untuk menunjukkan sisinya."

## Garis bantu pada sudut: Busur derajat

1. Klik {{ui:Protractor}} di grup {{ui:Modify}}.
2. Klik pusatnya: titik yang dilewati garis bantu. Pada sebuah muka, busur derajat berbaring di atas muka itu; di tempat lain, ia berbaring datar. Setelah klik ini, {{key:Right}}, {{key:Left}}, atau {{key:Up}} menegakkannya lurus terhadap merah, hijau, atau biru (tekan lagi untuk membatalkan).
3. Klik titik yang menetapkan 0°, misalnya di sepanjang sebuah tepi.
4. Pindah ke sudut yang Anda inginkan lalu klik: sudut akan snap dengan langkah 15°. Atau ketik sudut dalam derajat, misalnya `22.5`, lalu tekan {{key:Enter}}; garis bantu akan ke sisi tempat penunjuk berada.

Garis bantu melewati pusat pada sudut itu. Gambar di sepanjangnya dengan {{ui:Line}} untuk kemiringan atap, chamfer, atau dinding miring.

## Menggambar terhadap garis bantu

Alat gambar snap ke garis bantu ("Pada garis bantu") dan titik bantu ("Titik bantu"), dan ke tempat garis bantu memotong arah sumbu. Mulai persegi panjang di tempat dua garis bantu berpotongan agar penempatannya tepat.

## Hapus garis bantu

- Satu garis bantu: klik dengan {{ui:Select}} lalu tekan {{key:Delete}}, atau klik dengan {{ui:Eraser}}.
- Semua garis bantu: saat tidak ada yang dipilih, klik {{ui:Delete all guides}} di {{ui:Entity info}}.

Garis bantu disimpan dalam file `.modelcraft`. Garis bantu tidak diekspor ke format lain.
