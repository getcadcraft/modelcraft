---
title: Senarai alat
summary: Setiap alat ModelCraft dengan kekuncinya, apa yang dilakukan setiap klik, dan apa yang boleh anda taip dalam kotak nilai semasa ia berfungsi.
keywords: alat, bar alat, arahan, senarai, garisan, segi empat tepat, bulatan, poligon, ofset, lengkok, lengkung, splin, ikut saya, sweep, lengkok 2 titik, lengkok dari pusat, pilih, tolak tarik, alih, putar, skala, pemadam, pita, dimensi, orbit, pan, zum, letak komponen
from: e08a274f
---

Bar status sentiasa memberitahu apa yang dimahukan oleh alat semasa seterusnya. {{key:Esc}} membatalkan apa yang sedang dilakukan oleh alat.

## Alat lukisan

| Alat | Kekunci | Klik | Taip dalam kotak nilai |
|---|---|---|---|
| {{ui:Garisan}} | {{key:L}} | Mula, kemudian setiap titik seterusnya. Berhenti apabila muka tertutup, atau pada {{key:Esc}} | Panjang ke arah penuding; `[x,y,z]` ialah titik; `<dx,dy,dz>` ialah ofset ({{ui:Panjang}}) |
| {{ui:Segi empat tepat}} | {{key:R}} | Bucu pertama (tanah atau muka), kemudian bucu bertentangan | Lebar dan kedalaman: `4m,3m` ({{ui:Dimensi}}) |
| {{ui:Bulatan}} | {{key:C}} | Pusat (tanah atau muka), satu titik pada tepi | Sebelum klik pertama: sisi, `24s` atau `24` ({{ui:Sisi}}). Selepas itu: jejari ({{ui:Jejari}}) |
| {{ui:Poligon}} | {{key:N}} | Pusat, satu bucu | Sama seperti Bulatan; bermula dengan 6 sisi |
| {{ui:Lengkok}} | {{key:A}} | Mula, akhir, kemudian bonjolan | Panjang tali busur selepas mula ({{ui:Panjang}}); bonjolan selepas akhir ({{ui:Bonjolan}}); `12s` untuk segmen |
| {{ui:Protraktor}} | — | Pusat, titik 0°, kemudian sudut | Sudut dalam darjah ({{ui:Sudut}}) |
| {{ui:Ikut saya}} | — | Pilih laluan, kemudian klik muka (atau klik muka, kemudian tepi laluan) | — |
| {{ui:Cat}} | {{key:B}} | Muka, kumpulan atau komponen | — ({{key:Ctrl}} bersambung, {{key:Shift}} semua warna itu, {{key:Alt}} ambil warna) |
| {{ui:Ofset}} | {{key:F}} | Muka (atau pilih muka atau tepi dahulu), kemudian sisi dan jarak | Jarak ({{ui:Jarak}}); ke dalam muka ialah ke dalam |
| {{ui:Lengkung}} | — | Titik yang dilalui lengkung; {{key:Enter}} atau klik dua kali untuk tamat | Panjang ke arah penuding, atau `[x,y,z]` dan `<dx,dy,dz>` untuk titik seterusnya |
| {{ui:Pusat lengkok}} | — | Pusat, mula, kemudian akhir | Jejari selepas pusat; sudut dalam darjah selepas mula; `12s` untuk segmen |

## Alat penyuntingan

| Alat | Kekunci | Klik | Taip dalam kotak nilai |
|---|---|---|---|
| {{ui:Pilih}} | {{key:Space}} | Klik, klik dua kali, klik tiga kali, seret kotak. Lihat [Pilih benda](topic:select) | Dengan satu dimensi atau tepi dipilih: panjang baharu, yang mengubah saiz model |
| {{ui:Tolak/tarik}} | {{key:P}} | Muka, kemudian jarak. Klik dua kali muka untuk mengulang jarak terakhir | Jarak; nilai negatif bergerak ke arah yang sebaliknya ({{ui:Jarak}}) |
| {{ui:Alih}} | {{key:M}} | Dari satu titik, ke satu titik. Tahan {{key:Ctrl}} atau {{key:Alt}} untuk menyalin | Jarak ke arah penuding, `<dx,dy,dz>` atau `[x,y,z]` ({{ui:Jarak}}). Selepas salinan: `3x` atau `/3` |
| {{ui:Putar}} | {{key:Q}} | Pusat (pada muka untuk memusingkan dalam satahnya), arah mula, arah akhir | Sudut dalam darjah ({{ui:Sudut}}) |
| {{ui:Skala}} | {{key:S}} | Titik yang kekal, titik rujukan, saiz baharu | Faktor: `2`, `0.5` ({{ui:Skala}}) |
| {{ui:Pemadam}} | {{key:E}} | Klik atau seret ke atas tepi, kumpulan, garis panduan dan dimensi | tiada |
| {{ui:Pita}} | {{key:T}} | Dari tepi: garisan panduan selari. Dari titik: mengukur dan meninggalkan titik panduan | Ofset ({{ui:Ofset}}) atau jarak ({{ui:Panjang}}) |
| {{ui:Dimensi}} | {{key:D}} | Dua bucu (atau satu tepi), kemudian tempat garisan dimensi. Lihat [Dimensi dan saiz semula](topic:dimensions) | Ofset ({{ui:Ofset}}). Selepas itu: panjang baharu, yang mengubah saiz model |

{{ui:Alih}}, {{ui:Putar}} dan {{ui:Skala}} berfungsi pada pilihan. Jika tiada apa yang dipilih, ia mengambil dahulu apa yang anda klik (muka membawa tepinya).

## Alat kamera

| Alat | Kekunci | Seret untuk |
|---|---|---|
| {{ui:Orbit}} | {{key:O}} | Berpusing di sekeliling bahagian model di bawah penuding ({{key:Shift}} memanning) |
| {{ui:Pan}} | {{key:H}} | Menggelongsorkan paparan |
| {{ui:Zum}} | {{key:Z}} | Zum: ke atas untuk dekat, ke bawah untuk jauh |
| {{ui:Lingkungan}} | {{key:Shift+Z}} | (butang, bukan alat) Muatkan seluruh model |

Anda jarang memerlukan ini dengan tetikus: seret tengah untuk berorbit, seret kanan untuk memanning dan roda untuk zum dengan mana-mana alat. Lihat [Orbit, pan dan zum](topic:orbit-pan-zoom).

## Atur

| Butang | Kekunci | Fungsi |
|---|---|---|
| {{ui:Komponen}} | {{key:G}} | Menjadikan pilihan sebagai komponen |
| {{ui:Kumpulan}} | {{key:Shift+G}} | Menjadikan pilihan sebagai kumpulan |
| {{ui:Pecahkan}} | tiada | Menukar kumpulan dan komponen yang dipilih kembali kepada geometri longgar |

## Letak komponen

Bukan pada bar alat: klik {{ui:Letak}} di sebelah komponen dalam panel {{ui:Komponen}}. Klik sekali di tempat asal komponen; alat kemudian kembali kepada {{ui:Pilih}}.
