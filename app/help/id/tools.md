---
title: Daftar alat
summary: Setiap alat ModelCraft dengan pintasannya, apa yang dilakukan setiap klik, dan apa yang dapat Anda ketik di kotak nilai selama alat bekerja.
keywords: alat, bilah alat, perintah, daftar, garis, persegi panjang, lingkaran, poligon, offset, busur, kurva, spline, ikuti jalur, sapuan, busur 2 titik, busur dari pusat, pilih, dorong tarik, pindahkan, putar, skala, penghapus, meteran, dimensi, orbit, geser, zoom, letakkan komponen
from: e08a274f
---

Tips di bilah status selalu menyatakan apa yang diinginkan alat saat ini sebagai langkah berikutnya. {{key:Esc}} membatalkan apa yang sedang dikerjakan alat.

## Alat menggambar

| Alat | Pintasan | Klik | Ketik di kotak nilai |
|---|---|---|---|
| {{ui:Garis}} | {{key:L}} | Titik awal, lalu setiap titik berikutnya. Berhenti saat sebuah muka tertutup, atau dengan {{key:Esc}} | Panjang menuju penunjuk; `[x,y,z]` untuk sebuah titik; `<dx,dy,dz>` untuk offset ({{ui:Panjang}}) |
| {{ui:Persegi panjang}} | {{key:R}} | Sudut pertama (tanah atau muka), lalu sudut yang berseberangan | Lebar dan kedalaman: `4m,3m` ({{ui:Dimensi}}) |
| {{ui:Lingkaran}} | {{key:C}} | Pusat (tanah atau muka), lalu sebuah titik pada tepi | Sebelum klik pertama: sisi, `24s` atau `24` ({{ui:Sisi}}). Sesudahnya: radius ({{ui:Radius}}) |
| {{ui:Poligon}} | {{key:N}} | Pusat, lalu sebuah sudut | Sama seperti Lingkaran; dimulai dengan 6 sisi |
| {{ui:Busur}} | {{key:A}} | Awal, akhir, lalu lengkungannya | Panjang tali busur setelah titik awal ({{ui:Panjang}}); lengkungan setelah titik akhir ({{ui:Lengkungan}}); `12s` untuk segmen |
| {{ui:Busur derajat}} | — | Pusat, titik 0°, lalu sudutnya | Sudut dalam derajat ({{ui:Sudut}}) |
| {{ui:Ikuti jalur}} | — | Pilih jalur, lalu klik muka (atau klik muka, lalu sebuah tepi jalur) | — |
| {{ui:Cat}} | {{key:B}} | Sebuah muka, grup, atau komponen | — ({{key:Ctrl}} terhubung, {{key:Shift}} semua dengan warna itu, {{key:Alt}} ambil warna) |
| {{ui:Offset}} | {{key:F}} | Sebuah muka (atau pilih muka atau tepi lebih dulu), lalu sisi dan jaraknya | Jaraknya ({{ui:Jarak}}); ke dalam muka berarti ke dalam |
| {{ui:Kurva}} | — | Titik-titik yang dilalui kurva; {{key:Enter}} atau klik dua kali untuk selesai | Panjang sepanjang penunjuk, `[x,y,z]` atau `<dx,dy,dz>` untuk titik berikutnya |
| {{ui:Busur dari pusat}} | — | Pusat, awal, lalu akhir | Radius setelah pusat; sudut dalam derajat setelah titik awal; `12s` untuk segmen |

## Alat penyuntingan

| Alat | Pintasan | Klik | Ketik di kotak nilai |
|---|---|---|---|
| {{ui:Pilih}} | {{key:Space}} | Klik, klik dua kali, klik tiga kali, seret kotak. Lihat [Pilih benda](topic:select) | Dengan satu dimensi atau tepi dipilih: panjang baru, yang mengubah ukuran model |
| {{ui:Dorong/tarik}} | {{key:P}} | Mukanya, lalu jaraknya. Klik dua kali muka untuk mengulang jarak terakhir | Sebuah jarak; negatif berarti arah sebaliknya ({{ui:Jarak}}) |
| {{ui:Pindahkan}} | {{key:M}} | Dari sebuah titik, ke sebuah titik. Tahan {{key:Ctrl}} atau {{key:Alt}} untuk menyalin | Jarak menuju penunjuk, `<dx,dy,dz>` atau `[x,y,z]` ({{ui:Jarak}}). Setelah salinan: `3x` atau `/3` |
| {{ui:Putar}} | {{key:Q}} | Pusat (pada muka untuk memutar di bidangnya), arah awal, arah akhir | Sudut dalam derajat ({{ui:Sudut}}) |
| {{ui:Skala}} | {{key:S}} | Titik yang tetap, titik referensi, ukuran baru | Faktor: `2`, `0.5` ({{ui:Skala}}) |
| {{ui:Penghapus}} | {{key:E}} | Klik atau seret di atas tepi, grup, panduan, dan dimensi | tidak ada |
| {{ui:Meteran}} | {{key:T}} | Dari sebuah tepi: garis bantu sejajar. Dari sebuah titik: mengukur dan meninggalkan titik bantu | Offset ({{ui:Offset}}) atau jarak ({{ui:Panjang}}) |
| {{ui:Dimensi}} | {{key:D}} | Dua sudut (atau satu tepi), lalu di mana garis dimensi diletakkan. Lihat [Dimensi dan ubah ukuran](topic:dimensions) | Offset ({{ui:Offset}}). Tepat sesudahnya: panjang baru, yang mengubah ukuran model |

{{ui:Pindahkan}}, {{ui:Putar}} dan {{ui:Skala}} bekerja pada pilihan. Jika tidak ada yang dipilih, mereka mengambil apa yang Anda klik lebih dulu (muka membawa tepinya).

## Alat kamera

| Alat | Pintasan | Seret untuk |
|---|---|---|
| {{ui:Orbit}} | {{key:O}} | Berputar di sekitar bagian model di bawah penunjuk ({{key:Shift}} menggeser) |
| {{ui:Geser}} | {{key:H}} | Menggeser tampilan |
| {{ui:Zoom}} | {{key:Z}} | Zoom: ke atas untuk memperbesar, ke bawah untuk memperkecil |
| {{ui:Batas}} | {{key:Shift+Z}} | (tombol, bukan alat) Menyesuaikan seluruh model |

Jarang perlu ini dengan mouse: seret tombol tengah untuk orbit, seret tombol kanan untuk geser, dan roda untuk zoom dengan alat apa pun. Lihat [Orbit, geser, dan zoom](topic:orbit-pan-zoom).

## Mengatur

| Tombol | Pintasan | Fungsi |
|---|---|---|
| {{ui:Komponen}} | {{key:G}} | Menjadikan pilihan sebagai komponen |
| {{ui:Grup}} | {{key:Shift+G}} | Menjadikan pilihan sebagai grup |
| {{ui:Urai}} | tidak ada | Mengembalikan grup dan komponen yang dipilih menjadi geometri lepas |

## Letakkan komponen

Tidak ada di bilah alat: klik {{ui:Letakkan}} di samping komponen di panel {{ui:Komponen}}. Klik sekali di tempat titik asal komponen akan diletakkan; alat kemudian kembali ke {{ui:Pilih}}.
