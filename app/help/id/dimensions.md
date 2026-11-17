---
title: Dimensikan dan ubah ukuran apa yang sudah Anda gambar
summary: Tempatkan dimensi di antara sudut, pada busur dan lingkaran, atau di antara dua tepi; ketik panjang baru untuk mengubah ukuran model. Ketik ulang panjang tepi, atau lebar, kedalaman, dan tinggi grup, di Info entitas.
keywords: dimensi, dimensions, ubah ukuran, ubah skala, ukuran, ubah ukuran, panjang, lebar, kedalaman, tinggi, regangkan, dimensi penggerak, anotasi, ukur, setelah kejadian, radius, diameter, sudut, busur, lingkaran, R, Ø
from: a1f815ec
---

Ukuran di ModelCraft tidak tetap setelah sesuatu digambar. Sebuah dimensi menunjukkan panjang pada model, dan mengetik panjang baru ke dalamnya akan mengubah ukuran model agar sesuai. Anda juga bisa mengetik ulang panjang tepi, atau lebar, kedalaman, dan tinggi grup, di {{ui:Info entitas}}.

## Menempatkan dimensi

1. Tekan {{key:D}}, atau klik {{ui:Dimensi}} di bilah alat.
2. Klik sudut tempat mengukur. Ia snap ke sudut, titik tengah, dan tepi, seperti saat menggambar.
3. Klik sudut kedua.

   Atau klik sekali pada sebuah **tepi** (tips bertuliskan "Pada tepi") untuk mendimensikan seluruh tepi itu dalam satu klik.
4. Arahkan penunjuk ke tempat garis dimensi seharusnya, lalu klik. Anda juga bisa mengetik offset, seperti `0.5m`, lalu tekan {{key:Enter}}.

   Garis dimensi tetap datar untuk tepi yang datar, kecuali Anda melihatnya dari samping. Untuk tepi tegak, garis tetap berada di bidang tegak yang paling menghadap Anda.

Bilah status menampilkan "Dimensi 4 m." Dimensi menampilkan panjangnya dalam satuan model dan diperbarui saat Anda mengubah satuan di pemilih.

## Radius, diameter, dan sudut

{{ui:Dimensi}} yang sama juga mendimensikan benda bulat dan sudut:

- **Busur:** klik busur. Tips menampilkan {{ui:Radius}}. Arahkan penunjuk ke tempat teks seharusnya, lalu klik: dimensinya terbaca **R 1.5 m**.
- **Lingkaran:** klik lingkaran. Anda mendapat **diameter** (**Ø 3 m**) dengan garis melintang lingkaran melalui pusatnya. Poligon bekerja dengan cara yang sama, dengan sudut-sudutnya berada pada lingkaran.
- **Sudut antara dua tepi:** klik satu tepi, lalu klik tepi kedua yang bertemu dengannya di sudut (saat Anda berada di atasnya, tips menampilkan {{ui:Sudut antara tepi}}). Lalu arahkan ke dalam sudut yang Anda inginkan, dan klik. Di dalam sudut Anda mendapat sudut antara tepi; arahkan ke salah satu sisi dan Anda mendapat sudut di sebelahnya (misalnya 150° alih-alih 30°). Seberapa jauh dari sudut Anda mengklik menentukan letak busurnya; atau ketik jarak itu.

Untuk mengubah radius menjadi diameter atau sebaliknya, pilih dimensi dan pilih di {{ui:Tampilkan sebagai}} pada {{ui:Info entitas}}.

**Mengubah ukuran dengannya:** ketik radius atau diameter baru tepat setelah memasangnya, atau pilih nanti lalu ketik. Busur atau lingkaran mempertahankan pusatnya dan mengubah ukurannya; muka yang dibatasinya (cakram, ujung slot) ikut berubah. Dua hal hanya mengukur:

- **Dimensi sudut** tidak pernah mengubah model. Untuk mengubah sudut, putar tepinya dengan {{ui:Putar}}.
- **Lingkaran di ujung silinder** (lingkaran yang Anda tarik dengan {{ui:Dorong/tarik}}) tidak bisa diubah ukurannya dari dimensinya, karena sisi-sisinya juga harus berubah. Skala silindernya sebagai gantinya, terhadap sumbunya.

## Ubah ukuran model dengan dimensi

Tepat setelah memasang dimensi, ketik panjang baru dan tekan {{key:Enter}}: `6m`, `12'`, `3500` pada model milimeter. Model berubah ke ukuran itu.

Nanti, kapan saja:

1. Dengan {{ui:Pilih}}, klik teks atau garis dimensi. {{ui:Info entitas}} menyebutkan **Dimensi** dan menampilkan {{ui:Panjang}}-nya.
2. Ketik panjang baru dan tekan {{key:Enter}}. Anda bisa mengetik langsung ke kotak nilai, atau ke kotak {{ui:Panjang}} di {{ui:Info entitas}}.

### Apa yang bergerak

Sudut kedua yang Anda klik bergerak, begitu pula semua yang ada di luarnya:

- **Kedua sudut berada pada satu bagian** (lebar sebuah kotak, tinggi sebuah dinding): sisi di sudut yang bergerak meluncur keluar atau masuk, dan muka yang tersambung dengannya ikut meregang. Kotak tetap menjadi solid tertutup, dan apa pun yang berada seluruhnya di sisi itu, seperti komponen jendela, ikut bergerak.
- **Sudut berada pada dua bagian terpisah** (celah di antara dua kotak): bagian dari sudut yang bergerak ikut bergerak utuh, dan celahnya berubah.
- **Sudut yang bergerak berada di dalam grup atau komponen** yang tidak memuat sudut lainnya: seluruh grup bergerak.
- **Kedua sudut berada di dalam grup atau komponen yang sama**: ia diregangkan di dalamnya. Komponen berubah di setiap tempat ia dipasang, seperti saat Anda mengeditnya.

Untuk mengubah ujung mana yang bergerak, pilih dimensi dan pilih di {{ui:Yang bergerak}} pada {{ui:Info entitas}}:

| Pilihan | Yang terjadi |
|---|---|
| {{ui:Ujung kedua}} (bawaan) | Ujung yang Anda klik kedua bergerak |
| {{ui:Ujung pertama}} | Ujung yang Anda klik pertama bergerak |
| {{ui:Kedua ujung (di tengah)}} | Setiap ujung bergerak setengah perubahan, sehingga bagian tengah tetap di tempat |

### Saat perubahan ukuran ditolak

ModelCraft tidak mengubah apa pun dan menyebutkan alasannya di bilah status:

- "sebuah muka akan melengkung keluar dari bidangnya": dimensinya miring melintang bentuk. Dimensikan sepanjang tepi, atau sepanjang merah, hijau, atau biru.
- "sebuah muka akan menyusut menjadi nol atau terbalik ke dalam": panjang baru terlalu pendek untuk bentuk itu.
- "ujung yang bergerak tidak berada di sudut model": ujung itu dipasang di ruang kosong atau di tengah tepi. Pilih ujung lain di {{ui:Yang bergerak}}, atau pasang dimensi di dua sudut.
- "panjang harus di atas nol".

Setiap perubahan ukuran adalah satu langkah: {{key:Mod+Z}} membatalkannya.

## Ketik ulang ukuran di Info entitas

Anda tidak selalu memerlukan dimensi:

- **Tepi:** pilih. {{ui:Panjang}}-nya di {{ui:Info entitas}} adalah kotak yang bisa diketik. Mengetik panjang di kotak nilai juga berfungsi. Ujung yang lebih jauh sepanjang merah, lalu hijau, lalu biru yang bergerak, dan apa pun yang tersambung dengannya ikut meregang. Misalnya, mengetik ulang tepi bawah depan sebuah kotak membuat kotak itu lebih lebar ke kanan.
- **Grup atau komponen:** pilih. {{ui:Lebar (merah)}}, {{ui:Kedalaman (hijau)}}, dan {{ui:Tinggi (biru)}} adalah kotak. Sisi jauhnya (kanan, belakang, atas) yang bergerak. Ini adalah sumbu grup itu sendiri, sebelum rotasi apa pun yang Anda berikan.

Tekan {{key:Enter}} untuk menerapkan, atau {{key:Esc}} untuk mengembalikan nilai lama.

## Dimensi mengikuti model

Sebuah dimensi terpasang pada dua sudut tempat ia dipasang (sudut: pada sudutnya dan ujung jauh dari kedua tepinya; radius atau diameter: pada busur atau lingkarannya). Pindahkan, dorong/tarik, atau ubah ukuran geometrinya, dan dimensi mengikuti serta menampilkan panjang baru. Ia tetap terpasang saat Anda menjadikan geometri itu grup atau komponen.

Jika sebuah ujung dipasang di tempat yang bukan sudut (pada muka, atau di ruang kosong), atau sudutnya dihapus, ujung itu tetap di tempatnya. Dimensi tetap mengukur, tetapi hanya bisa diubah ukurannya dari ujung lainnya.

## Menghapus dimensi

- Satu dimensi: pilih dan tekan {{key:Delete}}, atau klik dengan {{ui:Penghapus}}.
- Semua dimensi: saat tidak ada yang dipilih, klik {{ui:Hapus semua dimensi}} di {{ui:Info entitas}}.

Dimensi disimpan dalam file `.modelcraft`. Dimensi tidak diekspor ke format lain, yang hanya membawa model 3D. File dengan dimensi tetap bisa dibuka di ModelCraft yang lebih lama, tanpa dimensi.
