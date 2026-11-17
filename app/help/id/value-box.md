---
title: Ketik ukuran persis di kotak nilai
summary: Setiap cara mengetik panjang, ukuran, titik, offset, sudut, sisi, dan salinan, serta cara satuan dan angka polos dibaca.
keywords: kotak nilai, kotak ukuran, vcb, ketik, persis, dimensi, panjang, satuan, kaki, inci, metrik, milimeter, koordinat, offset, array, sisi, sudut, koma desimal
from: 0148dc3d
---

Kotak nilai berada di bilah status di bagian bawah, dengan label yang berubah mengikuti alat. Selama Anda bekerja, kotak ini menampilkan ukuran langsung; kapan saja Anda dapat mengetik ukuran yang persis.

## Cara mengetik

1. Mulai tindakan dengan klik (sudut pertama, muka, titik tempat memindahkan).
2. Ketik. Anda tidak perlu mengklik kotak nilai: sebuah digit atau salah satu dari `. , - ' " [ < * /` mengirim ketikan Anda ke sana.
3. Tekan {{key:Enter}}.

Tekan {{key:Esc}} di kotak nilai untuk membersihkannya dan kembali ke tampilan. Pada layar sentuh, ketuk kotak nilai untuk memunculkan keyboard.

Jika ModelCraft tidak dapat membaca apa yang Anda ketik, bilah status menampilkan "Ketik panjang seperti 3m, 10'6" atau 4m,3m." Jika alat tidak dapat memakainya, tertulis "Itu tidak berhasil: …" beserta alasannya.

## Panjang

| Ketik | Artinya |
|---|---|
| `3m` `320cm` `3200mm` | Meter, sentimeter, milimeter |
| `10'` `10ft` `10 feet` | Kaki |
| `6"` `6in` `6 inches` | Inci |
| `10'6"` `10' 6"` `10'-6 1/2"` | Kaki dan inci, dengan pecahan |
| `6 1/2"` `6-1/2"` `3/4"` | Inci dengan pecahan |
| `1.5ft` `.5m` | Desimal dengan satuan |
| `120` | Angka polos, dalam satuan model |

**Angka polos memakai satuan model**, seperti yang ditampilkan di pemilih di kanan bawah: inci pada model kaki-dan-inci (jadi `120` berarti 10 kaki), milimeter pada model milimeter, dan seterusnya. Mengetik satuan selalu menang, apa pun satuan modelnya. Tanda kutip melengkung dan tanda prima (’ ” ′ ″) juga dibaca sebagai kaki dan inci.

:::warning
Selalu gunakan **titik** untuk desimal: `2.5m`. Koma memisahkan dua nilai, jadi `2,5` berarti 2 dan 5 (dua nilai), apa pun pengaturan bahasa Anda.
:::

## Perhitungan

Panjang apa pun bisa berupa perhitungan: tambah `+`, kurang `-`, kali `*`, bagi `/`, dan gunakan tanda kurung. Tidak perlu kalkulator.

| Ketik | Artinya |
|---|---|
| `2.5/3` | Sepertiga dari 2.5 (dalam satuan model) |
| `12'6"+3/4"` | 12' 6 3/4" |
| `(24'-0")/3` | 8' |
| `2*450mm` | 900 mm |
| `4+7/16` | 4 7/16" pada model kaki-dan-inci |
| `3m-25cm` | 2.75 m |

Angka polos berada dalam satuan model ketika itu panjang (`2.5/3` pada model meter adalah 0.833 m), dan berupa faktor biasa ketika mengalikan atau membagi panjang (`2*450mm`). Sudut dan faktor juga bisa berupa perhitungan: `90/2` adalah 45°. Dua panjang yang dikalikan menghasilkan luas, bukan panjang, jadi `2m*3m` ditolak.

Jika ModelCraft tidak dapat menghitungnya, bilah status menyatakan apa yang salah dan di mana, misalnya "Pembagian dengan nol (karakter 4)." Tanda kurung juga memulai kotak nilai, jadi Anda dapat mulai dengan `(`.

Ini tetap memiliki artinya sendiri: `/3`, `3x` dan `*3` setelah salinan, `24s` untuk sisi, dan `/3` dengan tepi terpilih (ini [membagi tepi](topic:divide)).

## Per alat

| Alat | Label | Ketik |
|---|---|---|
| {{ui:Garis}} | {{ui:Panjang}} | Panjang (ke arah penunjuk), atau titik atau offset (di bawah) |
| {{ui:Persegi panjang}} | {{ui:Dimensi}} | Dua panjang: `4m,3m`, `12',10'`. Titik koma juga berfungsi: `4m;3m` |
| {{ui:Lingkaran}}, {{ui:Poligon}} | {{ui:Sisi}}, lalu {{ui:Radius}} | Sebelum klik pertama, jumlah sisi: `12s` atau `12` (3 sampai 999). Setelahnya, radius |
| {{ui:Dorong/tarik}} | {{ui:Jarak}} | Panjang. Nilai negatif berlawanan arahnya |
| {{ui:Pindahkan}} | {{ui:Jarak}} | Panjang (ke arah penunjuk), atau titik atau offset. Setelah salinan: `3x`, `*3`, `/3` |
| {{ui:Putar}} | {{ui:Sudut}} | Derajat: `90`, `-45`, `22.5` |
| {{ui:Skala}} | {{ui:Skala}} | Faktor di atas 0: `2`, `0.5`, `1.25` |
| {{ui:Meteran}} | {{ui:Offset}} atau {{ui:Panjang}} | Panjang |
| {{ui:Bagi}} | {{ui:Bagian}} | Berapa banyak bagian yang sama: `5`, `5s`, atau `/5` (2 sampai 1000). Lihat [Bagi tepi atau kurva menjadi bagian yang sama](topic:divide) |
| {{ui:Dimensi}} | {{ui:Offset}}, lalu {{ui:Panjang}} | Di mana garis dimensi berada; tepat setelah menempatkan, panjang baru mengubah ukuran model |
| {{ui:Pilih}} | {{ui:Nilai}} | Dengan satu dimensi atau tepi terpilih, panjang baru mengubah ukuran model. Lihat [Dimensi dan ubah ukuran](topic:dimensions) |

## Titik dan offset

Untuk {{ui:Garis}} dan {{ui:Pindahkan}}, setelah klik pertama:

- `[x,y,z]` menuju titik persis itu dalam model (dalam sumbu grup itu sendiri saat Anda menyunting di dalam grup). Contoh: `[0,0,3m]` adalah 3 m tepat di atas titik asal.
- `<dx,dy,dz>` menempuh jarak itu dari titik pertama sepanjang merah, hijau, dan biru. Contoh: `<0,0,10'>` adalah 10 kaki tepat ke atas.

Masing-masing dari ketiga nilai dapat memiliki satuannya sendiri: `<12',0,6">`.

## Salinan setelah memindahkan

Tepat setelah salinan dengan {{ui:Pindahkan}}:

| Ketik | Membuat |
|---|---|
| `3x` atau `*3` | 3 salinan berurutan dengan jarak yang sama |
| `/3` | 3 salinan tersebar merata dari yang asli ke salinan pertama |

Hingga 500 salinan. Lihat [Pindahkan, salin, dan buat array](topic:move-copy#a-row-of-copies).

## Panjang yang diketik memerlukan arah

Satu panjang yang diketik berjalan ke arah yang ditunjuk penunjuk dari klik pertama. Jika Anda mengetik tepat setelah mengklik, sebelum menggerakkan apa pun, belum ada arah dan tidak terjadi apa-apa. Gerakkan penunjuk sedikit ke arah yang Anda inginkan, lalu ketik.

## Satuan model

Ubah satuan di pemilih kanan bawah: {{ui:ft dan in}}, in, ft, yd, mi, mil, µm, mm, cm, m, atau km, sejauh diaktifkan di {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Satuan}} (satuan model itu sendiri selalu ada). Panjang yang diketik dengan tanda satuan apa pun dibaca dalam satuan itu. Lihat [Satuan, nilai yang diketik, dan daftar satuan](common:unit-lists). Ini mengubah cara panjang ditampilkan dan cara angka polos dibaca; model tetap berukuran sama. Satuan disimpan dalam berkas.

Cara ukuran ditampilkan:

| Satuan | Panjang | Luas | Volume |
|---|---|---|---|
| ft dan in | `10' 6 1/2"` (sampai 1/16") | ft² | ft³ |
| in | `126 1/2"` | in² | in³ |
| m | `3.2 m` | m² | m³ |
| cm | `320 cm` | cm² | cm³ |
| mm | `3200 mm` | m² dari 0.01 m², selain itu mm² | m³ dari 0.01 m³, selain itu mm³ |

Model baru dimulai dalam kaki dan inci ketika bahasa peramban diatur ke wilayah AS (serta Liberia dan Myanmar), dan dalam milimeter di tempat lain. Satuan yang diberi bintang di {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Satuan}} dipakai sebagai gantinya, jika ModelCraft memilikinya. Atau ubah pemilih setelah {{ui:Baru}}.
