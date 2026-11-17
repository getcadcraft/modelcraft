---
title: Taip saiz tepat dalam kotak nilai
summary: Setiap cara menaip panjang, saiz, titik, ofset, sudut, sisi dan salinan, dan cara unit serta nombor tanpa unit dibaca.
keywords: kotak nilai, kotak ukuran, vcb, taip, tepat, dimensi, panjang, unit, kaki, inci, metrik, milimeter, koordinat, ofset, tatasusunan, sisi, sudut, koma perpuluhan
from: 0148dc3d
---

Kotak nilai terletak dalam bar status di bahagian bawah, dengan label yang berubah mengikut alat. Semasa anda bekerja, ia menunjukkan saiz langsung; pada bila-bila masa anda boleh menaip saiz yang tepat.

## Cara menaip

1. Mulakan tindakan dengan klik (bucu pertama, muka, titik untuk dialih dari).
2. Taip. Anda tidak perlu klik kotak nilai: digit atau salah satu daripada `. , - ' " [ < * /` menghantar taipan anda ke sana.
3. Tekan {{key:Enter}}.

Tekan {{key:Esc}} dalam kotak nilai untuk mengosongkannya dan kembali ke paparan. Pada skrin sentuh, ketik kotak nilai untuk memunculkan papan kekunci.

Jika ModelCraft tidak dapat membaca apa yang anda taip, bar status berkata "Taip panjang seperti 3m, 10'6" atau 4m,3m." Jika alat tidak dapat menggunakannya, ia berkata "Tidak berjaya: …" dengan sebabnya.

## Panjang

| Taip | Maksud |
|---|---|
| `3m` `320cm` `3200mm` | Meter, sentimeter, milimeter |
| `10'` `10ft` `10 feet` | Kaki |
| `6"` `6in` `6 inches` | Inci |
| `10'6"` `10' 6"` `10'-6 1/2"` | Kaki dan inci, dengan pecahan |
| `6 1/2"` `6-1/2"` `3/4"` | Inci dengan pecahan |
| `1.5ft` `.5m` | Perpuluhan dengan unit |
| `120` | Nombor tanpa unit, dalam unit model |

**Nombor tanpa unit menggunakan unit model**, seperti yang ditunjukkan dalam pemilih di bahagian kanan bawah: inci dalam model kaki dan inci (jadi `120` ialah 10 kaki), milimeter dalam model milimeter, dan seterusnya. Menaip unit sentiasa menang, tanpa mengira unit model. Tanda petikan kerinting dan tanda prima (’ ” ′ ″) juga dibaca sebagai kaki dan inci.

:::warning
Sentiasa gunakan **titik** untuk perpuluhan: `2.5m`. Koma memisahkan dua nilai, jadi `2,5` bermaksud 2 dan 5 (dua nilai), tanpa mengira tetapan bahasa anda.
:::

## Pengiraan

Mana-mana panjang boleh menjadi pengiraan: tambah `+`, tolak `-`, darab `*`, bahagi `/`, dan guna kurungan. Tiada kalkulator diperlukan.

| Taip | Maksud |
|---|---|
| `2.5/3` | Sepertiga daripada 2.5 (dalam unit model) |
| `12'6"+3/4"` | 12' 6 3/4" |
| `(24'-0")/3` | 8' |
| `2*450mm` | 900 mm |
| `4+7/16` | 4 7/16" dalam model kaki dan inci |
| `3m-25cm` | 2.75 m |

Nombor tanpa unit ialah dalam unit model apabila ia mewakili panjang (`2.5/3` dalam model meter ialah 0.833 m), dan menjadi faktor biasa apabila ia mendarab atau membahagi satu panjang (`2*450mm`). Sudut dan faktor juga menerima pengiraan: `90/2` ialah 45°. Dua panjang yang didarab membentuk luas, bukan panjang, jadi `2m*3m` ditolak.

Jika ModelCraft tidak dapat mengira, bar status menyatakan apa yang salah dan di mana, contohnya "Pembahagian dengan sifar (aksara 4)." Kurungan juga memulakan kotak nilai, jadi anda boleh mula dengan `(`.

Perkara ini mengekalkan maksudnya sendiri: `/3`, `3x` dan `*3` selepas salinan, `24s` untuk sisi, dan `/3` dengan tepi dipilih (ia [membahagikan tepi](topic:divide)).

## Mengikut alat

| Alat | Label | Taip |
|---|---|---|
| {{ui:Garisan}} | {{ui:Panjang}} | Panjang (ke arah penuding), atau titik atau ofset (di bawah) |
| {{ui:Segi empat tepat}} | {{ui:Dimensi}} | Dua panjang: `4m,3m`, `12',10'`. Koma bertitik juga berfungsi: `4m;3m` |
| {{ui:Bulatan}}, {{ui:Poligon}} | {{ui:Sisi}}, kemudian {{ui:Jejari}} | Sebelum klik pertama, bilangan sisi: `12s` atau `12` (3 hingga 999). Selepas itu, jejari |
| {{ui:Tolak/tarik}} | {{ui:Jarak}} | Panjang. Nilai negatif pergi ke arah sebaliknya |
| {{ui:Alih}} | {{ui:Jarak}} | Panjang (ke arah penuding), atau titik atau ofset. Selepas salinan: `3x`, `*3`, `/3` |
| {{ui:Putar}} | {{ui:Sudut}} | Darjah: `90`, `-45`, `22.5` |
| {{ui:Skala}} | {{ui:Skala}} | Faktor melebihi 0: `2`, `0.5`, `1.25` |
| {{ui:Pita}} | {{ui:Ofset}} atau {{ui:Panjang}} | Panjang |
| {{ui:Bahagi}} | {{ui:Bahagian}} | Berapa banyak bahagian sama: `5`, `5s` atau `/5` (2 hingga 1000). Lihat [Bahagikan tepi atau lengkung kepada bahagian sama](topic:divide) |
| {{ui:Dimensi}} | {{ui:Ofset}}, kemudian {{ui:Panjang}} | Di mana garis dimensi pergi; sejurus selepas meletakkannya, panjang baharu mengubah saiz model |
| {{ui:Pilih}} | {{ui:Nilai}} | Dengan satu dimensi atau tepi dipilih, panjang baharu mengubah saiz model. Lihat [Dimensi dan ubah saiz](topic:dimensions) |

## Titik dan ofset

Untuk {{ui:Garisan}} dan {{ui:Alih}}, selepas klik pertama:

- `[x,y,z]` pergi ke titik tepat itu dalam model (dalam paksi kumpulan sendiri apabila anda menyunting di dalam kumpulan). Contoh: `[0,0,3m]` ialah 3 m tegak di atas asal.
- `<dx,dy,dz>` pergi sejauh itu dari titik pertama sepanjang merah, hijau dan biru. Contoh: `<0,0,10'>` ialah 10 kaki tegak ke atas.

Setiap tiga nilai boleh mempunyai unitnya sendiri: `<12',0,6">`.

## Salinan selepas alih

Sejurus selepas salinan dengan {{ui:Alih}}:

| Taip | Menghasilkan |
|---|---|
| `3x` atau `*3` | 3 salinan berturutan pada jarak yang sama |
| `/3` | 3 salinan tersebar sama rata dari asal ke salinan pertama |

Sehingga 500 salinan. Lihat [Alih, salin dan buat tatasusunan](topic:move-copy#a-row-of-copies).

## Panjang yang ditaip memerlukan arah

Satu panjang yang ditaip pergi mengikut arah penuding dari klik pertama. Jika anda menaip sejurus selepas klik, sebelum bergerak langsung, belum ada arah dan tiada apa yang berlaku. Gerakkan penuding sedikit ke arah yang anda mahu, kemudian taip.

## Unit model

Tukar unit dalam pemilih di bahagian kanan bawah: {{ui:kaki dan inci}}, in, ft, yd, mi, mil, µm, mm, cm, m atau km, setakat mana ia dihidupkan dalam {{ui:Tetapan}} › {{ui:Umum}} › {{ui:Unit}} (unit model itu sendiri sentiasa ada). Panjang yang ditaip dengan tanda mana-mana unit dibaca dalam unit itu. Lihat [Unit, nilai yang ditaip dan senarai unit](common:unit-lists). Ia menukar cara panjang dipaparkan dan cara nombor tanpa unit dibaca; model kekal bersaiz sama. Unit disimpan dalam fail.

Cara saiz dipaparkan:

| Unit | Panjang | Luas | Isipadu |
|---|---|---|---|
| kaki dan inci | `10' 6 1/2"` (hingga 1/16") | kaki persegi | kaki padu |
| in | `126 1/2"` | inci persegi | inci padu |
| m | `3.2 m` | m² | m³ |
| cm | `320 cm` | cm² | cm³ |
| mm | `3200 mm` | m² dari 0.01 m², selainnya mm² | m³ dari 0.01 m³, selainnya mm³ |

Model baharu bermula dalam kaki dan inci apabila bahasa pelayar ditetapkan kepada rantau AS (dan Liberia serta Myanmar), dan dalam milimeter di tempat lain. Unit yang dibintangkan dalam {{ui:Tetapan}} › {{ui:Umum}} › {{ui:Unit}} digunakan sebaliknya, apabila ModelCraft memilikinya. Atau tukar pemilih selepas {{ui:Baharu}}.
