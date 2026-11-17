---
title: Pengubah suai pada jejaring, kumpulan atau komponen
summary: Skala, cermin, tatasusun, licinkan, bevel, potong dan lenturkan jejaring tanpa mengubahnya; ulang atau skala kumpulan atau komponen dengan timbunan yang sama; jadikan kekal apabila anda bersedia.
keywords: pengubah suai, timbunan, kumpulan, komponen, skala, bakar, sunting sumber, tidak merosakkan, cermin, tatasusunan, tatasusunan jejari, subbahagi, permukaan subbahagi, licinkan, bevel, pepejalkan, ketebalan, boolean, potong, anjak, bunyi, kimpal, nyahpadat, ringkaskan, lattice, sangkar, ubah bentuk lengkung, lentur, shrinkwrap, guna
from: dd5ec1cb
---

Satu **pengubah suai** mengubah apa yang ditunjukkan oleh jejaring tanpa mengubah jejaring itu sendiri. Cerminkan satu separuh bahagian dan model hanya separuh itu; bulatkan kotak dengan permukaan subbahagian dan teruskan menyunting kotak. Pengubah suai duduk dalam **timbunan** dan bekerja mengikut urutan, dari atas ke bawah. Apa yang anda lihat, eksport, cetak dan render ialah jejaring dengan setiap pengubah suai yang dihidupkan.

## Tambah pengubah suai

1. Pilih jejaring. Dalam ruang kerja Model, bahagian **Pengubah suai**nya ada dalam {{ui:Maklumat entiti}}; dalam ruang kerja Jejaring ia ada dalam panel di sebelah kanan.
2. Pilih satu daripada {{ui:Tambah pengubah suai…}}. Ia pergi ke bawah timbunan.
3. Tukar tetapannya di bawah namanya. Panjang menerima nilai yang sama seperti kotak Nilai, jadi `600mm`, `2'6"` dan `(6m)/4` semuanya berfungsi.

Setiap perubahan ialah satu langkah buat asal: {{key:Mod+Z}} membatalkannya.

## Butang pada setiap pengubah suai

- Kotak semak menghidupkan atau mematikannya.
- Butang skrin menunjukkan atau menyembunyikannya dalam paparan (ia kekal dalam timbunan).
- Butang kamera menunjukkan atau menyembunyikannya dalam gambar dan video yang dirender, supaya pengubah suai boleh untuk render sahaja (atau untuk paparan sahaja).
- Anak panah mengalihkannya ke atas atau bawah timbunan. Susunan penting: cermin kemudian subbahagi memberi sambungan yang licin, subbahagi kemudian cermin tidak.
- {{ui:Guna}} menjadikan bentuk itu sebahagian daripada jejaring: pengubah suai di atasnya dan yang ini dilakukan pada jejaring itu sendiri dan keluar dari timbunan. Ia satu langkah buat asal.
- Tanda silang mengalih keluarnya.

## Pengubah suai

| Pengubah suai | Apa yang dilakukannya |
| --- | --- |
| Skala | Menskala tentang asal objek, faktor untuk merah, hijau dan biru. Pada kumpulan atau komponen juga. |
| Cermin | Menambah salinan bercermin merentasi merah, hijau atau biru melalui asal jejaring, dan mencantumkan dua separuh di tempat ia bertemu. |
| Tatasusunan | Menyalin dalam satu baris (langkah sebesar saiznya sendiri didarab dengan nombor yang anda beri, ditambah langkah tetap), mengelilingi paksi, atau sepanjang lengkung dalam model. Kumpulan atau komponen mengambil baris itu. |
| Permukaan subbahagi | Melicinkan jejaring dengan subbahagi Catmull-Clark. Tepi tajam kekal berlipat. Render boleh menggunakan lebih banyak tahap daripada paparan. |
| Bevel | Membulatkan setiap tepi yang lebih tajam daripada sudut yang anda berikan. |
| Pepejalkan | Memberi permukaan ketebalan dan menutup bibirnya. |
| Boolean | Memotong, menggabungkan atau mengekalkan pertindihan dengan objek lain dalam model. Kedua-duanya perlu pepejal tertutup. |
| Anjak | Menggerakkan permukaan ke dalam atau ke luar dengan bunyi licin. Benih yang sama memberi bonjolan yang sama setiap kali. |
| Kimpal | Mencantumkan bucu yang lebih dekat daripada jarak yang diberikan. |
| Nyahpadat | Mengekalkan sebahagian segi tiga, membuang yang paling sedikit mengubah bentuk. |
| Licinkan | Merehatkan bucu ke arah jirannya. |
| Lattice | Melenturkan jejaring dengan sangkar: alihkan titik sangkar dan jejaring mengikut. |
| Ubah bentuk lengkung | Melenturkan jejaring sepanjang lengkung dalam model, sepanjang merah, hijau atau biru. |
| Shrinkwrap | Mengalihkan setiap bucu ke titik terdekat pada objek lain. |

## Pada kumpulan atau komponen

Kumpulan atau komponen juga boleh menyimpan resipi, jadi tudung lampu boleh menjadi **Skala** dan **Tatasusunan** bagi satu tudung, dan menukar satu nombor akan menukar lampu.

1. Pilih kumpulan atau komponen. Dalam {{ui:Maklumat entiti}}, bahagian **Pengubah suai**nya menyenaraikan timbunan (kosong pada mulanya).
2. Pilih {{ui:Skala}} atau {{ui:Tatasusunan}} daripada {{ui:Tambah pengubah suai…}}. Kumpulan menjadi komponen yang **asal, diletakkan oleh timbunan**. Yang asal dikekalkan: sunting dan setiap salinan mengikut serta-merta.
3. Skala menerima faktor untuk merah, hijau dan biru (`1, 1, 2` menggandakan ketinggian). Tatasusunan menerima bilangan salinan, langkah sebagai sebahagian daripada saiz hasil setakat ini, dan langkah tambahan dalam panjang.

Timbunan berjalan dari atas ke bawah pada paksi asal itu sendiri tentang asalnya, jadi susunan penting: Tatasusunan tiga salinan yang berjarak 3 m, kemudian Skala 2 pada merah, meletakkan salinan 6 m berjarak; Skala dahulu kemudian Tatasusunan mengekalkan jarak 3 m. Kotak semak, anak panah dan tanda silang berfungsi seperti pada jejaring; butang paparan dan kamera serta Guna pada satu pengubah suai tidak, kerana timbunan pada kumpulan ialah satu benda.

- {{ui:Sunting sumber}} membuka yang asal di tempatnya. Perubahan muncul dalam setiap salinan; menutupnya mengembalikan anda ke tempat anda berada.
- {{ui:Bakar pengubah suai}} menjadikan hasilnya tepi dan muka biasa dan mengeluarkan timbunan, dalam satu langkah buat asal. Salinan yang bertindih kekal sebagai geometri berasingan: Bakar bukan kesatuan.
- Salinan komponen berkongsi resipi; {{ui:Jadikan unik}} memisahkannya (yang asal kekal dikongsi).
- Timbunan disimpan dalam fail, dibawa oleh salin dan tampal serta oleh buat asal, dan Purge tidak digunakan mengekalkan yang asal. Program yang tidak mengenali pengubah suai tetap menunjukkan salinan.
- Sehingga Bakar, hasilnya tidak boleh dimasuki, dipecahkan, diubah saiz atau diregangkan: ia akan dibina semula pada perubahan seterusnya. Setiap satu menyatakan demikian.
- Had ialah 32 pengubah suai dan 1,000 salinan. Komponen yang dibuat untuk diregang (Regang) dan timbunan tidak dapat berkongsi definisi lagi.

## Permukaan subbahagi

Subbahagi melicinkan jejaring dengan Catmull-Clark: setiap muka menjadi muka empat sisi, dan setiap tahap menghasilkan empat kali lebih banyak. Kotak dengan dua atau tiga tahap sudah kelihatan seperti bentuk membulat, dan anda terus menyunting kotak.

- **Tahap dalam paparan** menetapkan betapa licinnya.
- **Tahap dalam render** menetapkan betapa licin gambar dan video yang dirender; render boleh menggunakan lebih banyak tahap daripada paparan.
- **Render pada permukaan licin sebenar** meletakkan titik jejaring yang dirender pada permukaan had yang dituju oleh tahap, jadi walaupun dua tahap dirender selicin banyak.
- **Lipatan** memastikan tepi tajam: dalam ruang kerja Jejaring pilih tepi dan guna {{ui:Lipatan}} (1 kekal tajam, 0.5 membulat sedikit, 0 licin). Lihat [Sunting jejaring](topic:mesh-edit).
- **Turunkan tahap paparan pada jejaring besar:** apabila tahap yang diminta akan memberi lebih banyak muka daripada yang dikendalikan dengan baik oleh paparan komputer ini, paparan menunjukkan tahap yang lebih rendah dan menyatakannya. {{ui:Guna}} sentiasa menggunakan setiap tahap. Berapa banyak muka ditetapkan oleh kelas mesin anda dalam {{ui:Tetapan}} › Render › Mesin anda.
- Tepi terbuka mengekalkan bucunya dan kekal pada garis tepinya.

## Lentur dengan sangkar lattice

1. Tambah pengubah suai {{ui:Lattice}} dan tekan {{ui:Tambah sangkar lattice di sekeliling jejaring}}. Sangkar 3 × 3 × 3 titik muncul di sekeliling jejaring, dilukis sebagai wayar.
2. Buka sangkar dalam ruang kerja Jejaring (klik dua kali) dan alihkan titiknya. Jejaring mengikut dengan licin.

:::tip
Sangkar ialah jejaring seperti mana-mana yang lain: sembunyikannya dengan tagnya apabila anda selesai.
:::

## Jejaring besar

Timbunan kecil dikira serta-merta. Yang besar dikira di latar belakang pada setiap teras komputer anda: paparan terus menunjukkan hasil terakhir sehingga yang baharu sedia. Boolean memuatkan pemodel pepejal pada kali pertama; paparan menyatakannya seketika.

## Apa yang pengubah suai belum lakukan

- Berat setiap bucu (susutan yang dicat pada jejaring) untuk Anjak, Licinkan dan Shrinkwrap.
- Pengubah suai selain Skala dan Tatasusunan linear pada geometri tolak/tarik (kumpulan dan komponen): tukarkannya kepada jejaring dahulu ({{ui:Tukar kepada jejaring}}). Cermin, Tatasusunan bulat atau lengkung, Lentur dan Taper pada kumpulan akan datang kemudian.
