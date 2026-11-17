---
title: Pindahkan, salin, dan buat array
summary: Pindahkan objek dengan klik atau dengan jarak yang tepat, salin dengan tombol pengubah, dan buat sederet salinan dengan jarak yang sama.
keywords: pindahkan, salin, duplikat, array, baris, jarak, bagi, offset, regangkan, kolom, ulangi, salinan ganda
from: 280245fc
---

{{ui:Pindahkan}} ({{key:M}}) memindahkan apa pun yang dipilih dari satu titik ke titik lain. Menahan tombol pengubah membuatnya menjadi salinan, dan setelah menyalin Anda dapat mengetik berapa banyak salinan tambahan yang diinginkan.

## Pindahkan sesuatu

1. Pilih yang ingin dipindahkan (lihat [Pilih objek](topic:select)). Jika tidak ada yang dipilih, Pindahkan akan mengambil objek yang Anda klik.
2. Tekan {{key:M}}.
3. Klik titik asal pemindahan. Pilih sesuatu yang bermakna, seperti sudut: titik itu akan tepat berada di lokasi yang Anda klik berikutnya.
4. Gerakkan penunjuk. Pilihan akan mengikuti. Pilihan menempel ke titik, tepi, dan arah merah, hijau, serta biru, seperti pada garis.
5. Klik tempat titik itu harus berada, atau ketik jarak lalu tekan {{key:Enter}}.

   Tips di bilah status kembali ke "Klik titik asal pemindahan…" untuk pemindahan berikutnya.

Jarak yang diketik mengikuti arah penunjuk. Anda juga dapat mengetik offset yang tepat, `<2m,0,0>` (2 m sepanjang merah), atau tujuan yang tepat untuk titik yang Anda pilih, `[0,0,0]` (titik asal). Lihat [Ketik ukuran yang tepat](topic:value-box).

Untuk memindahkan hanya pada satu sumbu, tekan tombol panah setelah klik pertama: {{key:Right}} mengunci ke merah, {{key:Left}} ke hijau, {{key:Up}} ke biru. Tekan panah yang sama lagi untuk membuka kunci.

## Memindahkan sebagian bentuk akan meregangkannya

Geometri yang tidak dikelompokkan saling terhubung. Jika Anda memilih satu muka atau beberapa tepi lalu memindahkannya, muka yang terhubung dengannya akan ikut meregang. Pindahkan muka atas kotak ke samping dan kotak akan miring; pindahkan satu tepi atap dan kemiringan atap berubah. Muka yang tidak lagi bisa tetap datar akan terlipat menjadi segitiga.

Untuk memindahkan seluruh objek tanpa meregangkannya, pilih semuanya terlebih dahulu (klik tiga kali), atau lebih baik, jadikan grup atau komponen (lihat [Grup dan komponen](topic:groups-components)).

## Salin sesuatu

1. Pilih yang ingin disalin.
2. Tekan {{key:M}}.
3. Tahan {{key:Ctrl}} (atau {{key:Alt}}) dan klik titik asal pemindahan. Di Mac, {{key:Mod}} atau {{key:Alt}} memberikan hasil yang sama. Tips berbunyi "Ctrl memindahkan sebagai gantinya", yang berarti Anda sedang menyalin.

   Anda juga dapat menekan dan melepas {{key:Ctrl}} atau {{key:Alt}} setelah klik pertama untuk beralih antara memindahkan dan menyalin.

4. Klik tempat salinan harus berada, atau ketik jarak lalu tekan {{key:Enter}}.

   Objek asli tetap di tempatnya, dan salinan itu yang dipilih.

## Salin, potong, tempel, dan duplikat

- {{key:Mod+C}} menyalin pilihan, {{key:Mod+X}} memotong (menyalin, lalu menghapus), {{ui:Salin}} dan {{ui:Tempel}} juga merupakan tombol di grup {{ui:Edit}} pada bilah alat, dan {{ui:Lainnya}} di sebelahnya memuat potong, tempel di tempat yang sama, dan duplikat.
- {{key:Mod+V}} menempel: garis luar salinan mengikuti penunjuk, menempel seperti alat apa pun, dan satu klik meletakkannya dengan sudut terbawahnya di titik itu. {{key:Esc}} membatalkan.
- {{key:Mod+Shift+V}} menempel di tempat yang sama, tepat di lokasi asal salinan. Ini berguna untuk memindahkan sesuatu ke dalam grup yang sedang Anda buka.
- {{key:Mod+D}} ({{key:Shift+D}} dalam gaya Modeler) menduplikasi: salinan dibuat dan langsung bergerak mengikuti penunjuk; klik untuk meletakkannya, ketik jarak, atau tekan {{key:Esc}} untuk melepaskannya. Setelah itu, ketik `3x` untuk lebih banyak salinan berurutan.

Grup yang ditempel menjadi grup baru. Komponen yang ditempel adalah penempatan lain dari komponen yang sama, sehingga mengedit salah satunya tetap mengubah semuanya. Salinan juga dapat ditempel ke tab ModelCraft lain di peramban ini (di sana salinan itu masuk sebagai definisi baru).

## Sederet salinan

Tepat setelah menyalin, selagi {{ui:Pindahkan}} masih menjadi alat:

- Ketik `3x` (atau `*3`) lalu tekan {{key:Enter}} untuk tiga salinan berurutan, masing-masing dengan jarak yang sama seperti salinan pertama. Anda mendapat tiga salinan baru selain objek asli.
- Ketik `/3` lalu tekan {{key:Enter}} untuk membagi: tiga salinan tersebar merata dari objek asli sampai tempat Anda meletakkan salinan pertama, dengan salinan terakhir berada di titik itu. Gunakan ini untuk mengisi suatu rentang: letakkan satu salinan di ujung yang jauh, lalu bagi.

Anda dapat mengetik angka lain segera setelahnya: `5x` menggantikan baris `3x`. Tips mengingatkan: "Disalin. Ketik 3x untuk lebih banyak salinan berurutan, atau /3 untuk membagi jarak."

### Contoh: kolom setiap 6 meter

1. Buat kolom dan jadikan komponen ({{key:G}}), agar semua salinan berubah bersama nanti.
2. Tekan {{key:M}}, tahan {{key:Ctrl}}, dan klik sudut dasar kolom.
3. Pindah sepanjang sumbu merah dan ketik `6m`, lalu {{key:Enter}}.
4. Ketik `4x` dan {{key:Enter}}. Anda memiliki lima kolom, berjarak 6 m.

## Hal yang perlu diketahui

- Tekan {{key:Esc}} sebelum klik kedua untuk membatalkan; semuanya kembali ke tempat semula.
- Pindahkan bekerja di dalam grup yang sedang Anda sunting. Untuk memindahkan seluruh grup, tutup grup itu dulu, lalu pilih dari luar.
- Dengan **{{ui:Tabrakan}}** aktif (di kanan bawah, dan di [pengaturan ModelCraft](topic:settings#solids-stop-where-they-touch)), pemindahan berhenti di tempat pilihan menyentuh solid lain, alih-alih menembusnya. Klik {{ui:Tabrakan}} untuk mematikannya bagi pemindahan yang harus menembus.
- Untuk menaruh salinan di dalam grup lain: salin, buka grup lainnya, lalu tempel ({{key:Mod+Shift+V}} menjaganya tetap di posisi yang sama).
