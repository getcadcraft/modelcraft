---
title: Penyokong, ketebalan dinding, berongga dan pembaikan
summary: Lihat di mana cetakan memerlukan penyokong dan anggaran jumlahnya, cari dinding yang terlalu nipis untuk dicetak, kosongkan bahagian kepada ketebalan dinding dengan lubang salir, dan baiki mesh dengan setiap pembetulan disenaraikan.
keywords: cetakan 3d, penyokong, pratonton penyokong, terjuntai, penyokong pokok, penyokong tiang, ketebalan dinding, dinding nipis, terlalu nipis, muncung, berongga, pengosongan, cangkerang, lubang salir, resin, baiki, betulkan mesh, bukan manifold, muka terbalik, lubang, cangkerang kecil, persilangan sendiri, bertindih, cantum
from: 286bde26
---

Empat alatan untuk menyediakan model untuk pencetak 3D. Buka {{ui:Eksport}} › {{ui:Semak untuk cetakan 3D (STL atau 3MF)…}}; baris **Alatan cetakan** dalam kotak dialog mempunyai {{ui:Pratonton penyokong}}, {{ui:Ketebalan dinding}}, {{ui:Berongga}} dan {{ui:Baiki}}. Setiap satu dibuka sebagai kad di atas paparan; {{ui:Tutup}} (tanda silang) menutupnya dan tandanya. Satu kad sahaja dipaparkan pada satu masa.

Setiap alat berfungsi pada apa yang dicetak: pilihan, atau semua yang dipaparkan apabila tiada apa-apa dipilih. {{ui:Berongga}} dan {{ui:Baiki}} memerlukan satu kumpulan, komponen atau mesh dipilih, kerana ia mengubahnya.

## Pratonton penyokong

Muka yang condong lebih daripada **sudut terjuntai** dari tegak diwarnakan merah, dan penyokong mudah dilukis dari situ (oren) ke bawah ke katil, atau ke bahagian model di bawahnya.

- **Sudut terjuntai**: 45° ialah apa yang kebanyakan pencetak uruskan tanpa penyokong. Naikkannya untuk pencetak yang menjambatan dengan baik.
- **Tiang**: satu tiang lurus setiap 3 mm di bawah setiap bahagian terjuntai. Anggaran mengira ia sebagai corak penyokong 15%.
- **Pokok**: titik berdekatan bercantum pada satu batang di bawah tengahnya; tiada dahan condong lebih daripada 45°. Pokok biasanya menggunakan bahan yang lebih sedikit, dan menyentuh katil di lebih sedikit tempat.

Kad menyatakan berapa banyak permukaan memerlukan penyokong, berapa banyak titik penyokong dan kira-kira berapa banyak bahan yang digunakan. Penyokong yang berdiri di atas model (bukan katil) dikira: ia meninggalkan kesan di situ. Dengan katil pencetak dipilih dalam {{ui:Tetapan}}, katil dilukis di bawah model.

:::note
Ini ialah pratonton, bukan slicer: slicer anda menentukan penyokong sebenar. Pada bahagian terjuntai yang sangat besar, titik penyokong diagihkan lebih luas supaya pratonton kekal pantas; kad menyatakannya.
:::

## Ketebalan dinding

Setiap muka diukur terus melalui pepejal ke sisi yang satu lagi. Dinding di bawah **dinding ternipis yang dibenarkan** berwarna merah, dan dinding di bawah satu setengah kali ganda itu berwarna oren: ia dicetak, tetapi mungkin lemah.

Kawasan nipis disenaraikan, yang paling nipis dahulu, dengan betapa nipis dan betapa besar setiap satu. {{ui:Papar}} memusingkan kamera ke arahnya.

Pencetak tidak dapat membuat dinding lebih nipis daripada kira-kira dua lebar muncungnya: 0.8 mm untuk muncung 0.4 mm yang biasa (permulaan). Pencetak resin mengendalikan kurang; semak panduan pencetak anda.

Pada model yang sangat besar hanya sesetengah muka memancarkan sinar, dan yang lain mengambil ketebalan jirannya; kad menyatakan berapa banyak yang diukur.

## Berongga

Pengosongan mengekalkan bahagian luar seperti sedia ada dan mengeluarkan bahagian dalam, meninggalkan dinding setebal yang anda minta. Cetakan resin menggunakan resin yang lebih sedikit dan kurang menarik pada plat binaan; cetakan filamen menggunakan plastik yang lebih sedikit daripada isian.

1. Pilih kumpulan, komponen atau mesh, kemudian buka {{ui:Berongga}}.
2. Tetapkan **dinding** (2 mm sebagai permulaan) dan lebar **lubang salir**.
3. Untuk cetakan resin, klik {{ui:Letak lubang salir}}, kemudian klik bahagian luar model di tempat ia diletakkan: rendah, berhampiran plat binaan, supaya resin cecair mengalir keluar. Letakkan seberapa banyak yang diperlukan; setiap satu dipaparkan sebagai bulatan biru dan disenaraikan dengan {{ui:Alih keluar}}.
4. {{ui:Pratonton}} menyatakan berapa banyak pengosongan itu mengeluarkan.
5. {{ui:Kosongkan}} membuat perubahan: satu langkah yang dibatalkan oleh {{key:Mod+Z}}.

Hasilnya ialah satu pepejal tertutup yang diterima oleh semakan cetakan 3D: ModelCraft menyemaknya dahulu dan tidak mengubah apa-apa jika ia tidak lulus. Di mana model lebih nipis daripada dua dinding, ia kekal pepejal. Hasilnya ialah kumpulan yang sisi rata ialah muka tunggal, supaya anda boleh terus memodelkannya dengan {{ui:Tolak/tarik}}; bahagian melengkung yang dikosongkan pada grid halus biasanya mempunyai terlalu banyak muka untuk itu dan menjadi mesh, dan baris status menyatakan yang mana.

:::tip
Bagi kebanyakan bentuk, bahagian dalam ialah bahagian luar yang dialihkan ke dalam sejauh dinding tepat. Di mana sudut atau bahagian nipis menjadikan itu mustahil, ModelCraft mengikuti bahagian luar pada jarak dinding pada grid halus; kad kemudian menyatakan betapa hampir (sehingga sebahagian kecil milimeter).
:::

## Baiki

{{ui:Baiki}} memeriksa bahagian yang dipilih seperti slicer pencetak akan memeriksanya, membetulkan apa yang boleh dibetulkan dengan selamat dan menyenaraikan setiap pembetulan:

| Ia membetulkan | Maksudnya |
|---|---|
| Segi tiga tanpa luas | dikecualikan |
| Segi tiga dilukis dua kali | satu salinan dikekalkan; muka yang dilukis belakang-ke-belakang dengan dirinya sendiri (tanpa ketebalan) dialih keluar |
| Keping longgar di bawah 0.5 mm | dialih keluar |
| Segi tiga menghadap arah salah | dipusingkan supaya sepadan dengan jirannya |
| Lubang, rata atau tidak | ditutup dengan kipas segi tiga baharu dari tengah setiap lubang |
| Keping terbalik | dipusingkan ke luar (rongga di dalam keping lain dibiarkan seperti sedia ada: ia sepatutnya menghadap ke dalam) |

{{ui:Baiki yang selamat}} membuat semuanya dalam satu langkah yang dibatalkan oleh {{key:Mod+Z}}, dan baris status menyenaraikan setiap pembetulan. Bahagian yang dibetulkan menjadi kumpulan yang sisi rata ialah muka tunggal. Jika ia masih tidak tertutup (sesuatu di bawah **Tinggal untuk anda** kekal), atau ia akan mempunyai terlalu banyak muka untuk kumpulan, ia menjadi mesh: mukanya kekal segi tiga, dan sisi rata masih kelihatan rata. Baris status menyatakan yang mana. {{ui:Cantum bahagian bertindih}} berfungsi dengan cara yang sama.

Apa yang tidak dapat dibetulkan dengan selamat disenaraikan di bawah **Tinggal untuk anda** dan ditanda ungu dalam paparan, dengan {{ui:Papar}}:

- **Tepi di mana tiga muka atau lebih bertemu**: tentukan muka mana yang tergolong dan padam yang lain.
- **Sesuatu keping melalui dirinya sendiri**: alih atau lukis semula bahagian itu. Lihat [Persilangan muka](topic:intersect).
- **Lubang terlalu besar atau terlalu kusut untuk ditutup**: lukis muka merentasinya.
- **Keping berasingan yang bertindih**: slicer tetap menggabungkannya. {{ui:Cantum bahagian bertindih}} menjadikannya satu badan tertutup (ia membina semula muka di tempat ia bertemu, jadi ia butang berasingan, tidak pernah dilakukan untuk anda).

Untuk kumpulan tolak/tarik anda juga boleh membetulkan satu demi satu dalam {{ui:Maklumat entiti}} › {{ui:Tunjuk masalah}} / {{ui:Betulkan}}, yang mengekalkan muka yang anda lukis. Lihat [Alatan pepejal](topic:solids).

Berkaitan: [Sediakan model untuk cetakan 3D](topic:print-3d) · [Gaya Pemula](topic:beginner) · [Belum dibina](topic:not-built-yet#3d-printing)
