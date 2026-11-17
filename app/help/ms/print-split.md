---
title: Pisahkan model besar untuk cetakan
summary: Potong model yang terlalu besar untuk pencetak anda kepada keping yang muat di katil, dengan pasak, kunci, dovetail, lubang dowel atau magnet serta nombor sambungan pada kedua-dua muka, dan muat turun setiap keping serta helaian pemasangan dalam satu zip.
keywords: cetakan 3d, pisah, potong condong, potongan condong, serong, pemisah, potong, terlalu besar, saiz katil, isipadu bina, keping, bahagian, penyambung, pasak, kunci, dovetail, dowel, magnet, kelegaan, toleransi, nombor bahagian, pemasangan, pandangan letupan, zip, stl, 3mf, lesen, kunci usb, dongle
from: ee96ba77
---

Apabila model lebih besar daripada katil pencetak anda, **Pisahkan untuk pencetakan** memotongnya kepada keping yang muat, menambah penyambung supaya keping sejajar apabila dicantumkan, dan mengukir nombor yang sama pada kedua-dua muka setiap sambungan. Buka {{ui:Eksport}} › {{ui:Semak untuk cetakan 3D (STL atau 3MF)…}}; baris **Alatan cetakan** dalam kotak dialog mempunyai {{ui:Pisahkan untuk pencetakan}}. Ia dibuka sebagai kad di atas paparan.

Ia berfungsi pada apa yang akan dicetak: pilihan, atau semua yang dipaparkan jika tiada apa-apa dipilih. Apa yang dicetak mesti pepejal tertutup; jika semakan mendapati lubang, gunakan [Baiki](topic:print-tools#repair) dahulu.

Ia berjalan dalam ModelCraft, pada komputer anda: tiada pelayan lesen, tiada kunci USB, tiada apa-apa dimuat naik.

## Cara memotong

- **Muat katil, keping paling sedikit**: beri lebar, kedalaman dan ketinggian katil (ia bermula dari {{ui:Tetapan}} › ModelCraft › pencetak 3D). Kad menyatakan berapa banyak keping yang diperlukan dan saiz setiap satu; ia memotong model kepada keping yang sama besar, sesedikit yang boleh muat. Sesuatu keping boleh dibaringkan dalam fail jika itu yang menjadikannya muat. Penyambung yang menonjol dari sesuatu keping dikira dalam saiznya.
- **Pada tempat yang saya beri**: pilih paksi untuk dipotong merentasi dan taip lokasinya, dalam milimeter dari hujung rendah model, dengan koma di antaranya (`100, 200` menghasilkan tiga keping).
  **Condong** memusingkan potongan sehingga 60° pada salah satu daripada dua paksi lain (contohnya potongan merentasi Z dicondongkan pada X): setiap potongan condong melalui garis tengah model pada tempatnya, memberi keping lebih banyak luas lekatan dan menyembunyikan sambungan dengan lebih baik pada permukaan condong. Penyambung berdiri tegak terhadap potongan.

Satah potongan dilukis di sekeliling model sebagai garis putus-putus semasa kad dibuka.

## Penyambung

Setiap tempat dua keping bersentuh mendapat penyambung, diletakkan sendiri di tempat yang paling luas: sekurang-kurangnya **dinding terkecil** ditambah **kelegaan** ditambah saiz mereka sendiri dari bahagian luar, dan cukup jauh dari setiap potongan lain supaya dua lubang tidak pernah bertemu. Pada muka yang panjang, dua penyambung diagihkan di sepanjangnya, supaya keping tidak boleh berpusing.

- **Pasak bulat**: pasak pada satu keping (dichamfer di hujung), lubang pada yang satu lagi.
- **Kunci segi empat**: sama, berbentuk segi empat, supaya sesuatu keping hanya boleh dipasang dalam satu arah.
- **Dovetail**: lidah yang meluncur ke dalam alur dari sisi. Di mana satu hujung alur akan bertemu potongan lain, dovetail berhenti lebih pendek dan meluncur masuk dari hujung terbuka. Dovetail sesuai untuk potongan dalam satu arah (satu baris hirisan); dalam grid, gunakan pasak atau dowel.
- **Lubang dowel**: lubang di setiap sisi; pin turut dicetak (dalam zip).
- **Poket magnet**: poket di setiap sisi untuk magnet bulat dengan diameter dan ketebalan yang anda beri. Semak kutub sebelum melekatkannya.
- **Tiada (gam)**.

**Kelegaan** ialah jurang di setiap sisi antara pasak dan lubangnya (0.2 mm sebagai permulaan). Ia tepat mengikut nombor yang anda beri: lubang bulat dibuat sedikit lebih besar supaya bahagian rata mereka, bukan bucu, mengekalkan jurang itu. Naikkannya jika bahagian pencetak anda terlalu ketat.

Apabila sambungan tidak mempunyai ruang untuk penyambung (dinding nipis, kawasan sentuhan kecil), kad menyatakannya: gamkan sambungan itu.

## Nombor bahagian

Dengan **Ukir nombor sambungan pada kedua-dua muka** dihidupkan, setiap sambungan mendapat nombor dua keping itu, seperti `3-4`, diukir sedalam 0.6 mm pada kedua-dua muka, dibaca betul di setiap muka. Nombor bermula setinggi 5 mm dan mengecil untuk muat, sehingga 2.5 mm; sambungan yang tidak mempunyai ruang untuk nombornya disenaraikan. Keping dinomborkan dari lapisan bawah ke atas.

## Pratonton, muat turun, pisahkan model

1. {{ui:Pratonton}} memotong model dan menyatakan berapa banyak keping, sambungan dan penyambung, sama ada setiap keping lulus semakan cetakan 3D dan muat katil, dan menyenaraikan saiz setiap keping. Bulatan menandakan setiap penyambung dan nombor dalam paparan.
2. {{ui:Muat turun keping (.zip)}} menyimpan satu zip: satu fail untuk setiap keping (STL atau 3MF, mengikut pilihan anda di bawah **Fail**), setiap satu berdiri di atas katil; pin dowel; dan **helaian pemasangan** — gambar keping yang diasingkan dengan nombornya (`assembly.svg` dan `assembly.png`) dan senarai keping serta sambungan (`assembly.txt`).
3. {{ui:Pisahkan model}} meletakkan keping dalam model menggantikan kumpulan atau komponen yang dipilih, dinamakan seperti pada helaian pemasangan, dalam satu langkah: {{ui:Buat asal}} mengembalikan yang asal. Ia memerlukan kumpulan atau komponen untuk dipisahkan dipilih; muat turun berfungsi pada apa sahaja yang boleh dicetak.

## Alih penyambung sendiri

Selepas pratonton, **Penyambung secara manual** membolehkan anda membetulkan tempat penyambung diletakkan:

- {{ui:Alih satu}}: klik bulatan merah dalam paparan (ia bertukar hijau), kemudian klik tempat ia sepatutnya berada pada potongan.
- {{ui:Tambah satu}}: klik dalam paparan tempat penyambung sepatutnya berada. Ia diletakkan pada satah potongan yang klik anda capai, di antara dua keping di situ.
- {{ui:Alih keluar satu}}: klik bulatan merah untuk mengalih keluar penyambung itu.

Setiap perubahan disemak semula seperti yang automatik: tempat yang terlalu dekat dengan garis luar, potongan lain atau penyambung lain tidak dibuat, dan kad menyatakannya. {{ui:Automatik semula}} melupakan tempat anda. Ia dikekalkan selagi model, pilihan dan potongan kekal seperti sedia ada.

Pratonton kekal sehingga model, pilihan atau tetapan berubah; kemudian kad meminta anda membuat pratonton semula.

:::note
Setiap keping disemak seperti semakan cetakan 3D akan menyemaknya sebelum anda muat turun. Slicer anda tetap menentukan cara setiap keping dicetak: lihat setiap satu di sana, dan cetak satu sambungan dahulu untuk melihat cara pencetak anda mengendalikan kelegaan.
:::
