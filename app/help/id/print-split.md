---
title: Pisahkan model besar untuk dicetak
summary: Potong model yang terlalu besar untuk printer Anda menjadi bagian-bagian yang muat di bed, dengan pasak, kunci, ekor burung, lubang dowel atau magnet, serta nomor sambungan di kedua muka, lalu unduh setiap bagian dan lembar rakitan dalam satu zip.
keywords: cetak 3d, pisah, miring, potongan miring, sudut, oblik, pemisah, potong, terlalu besar, ukuran bed, volume cetak, bagian, komponen, konektor, pasak, kunci, ekor burung, dowel, magnet, celah, toleransi, nomor bagian, rakitan, tampilan terurai, zip, stl, 3mf, lisensi, license, kunci usb, dongle
from: ee96ba77
---

Ketika sebuah model lebih besar dari bed printer Anda, **Pisahkan untuk dicetak** memotongnya menjadi bagian-bagian yang muat, menambahkan konektor agar bagian-bagian itu sejajar saat disatukan, dan mengukir nomor yang sama di kedua muka setiap sambungan. Buka {{ui:Ekspor}} › {{ui:Periksa untuk pencetakan 3D (STL atau 3MF)…}}; baris **Alat cetak** di dialog memuat {{ui:Pisahkan untuk dicetak}}. Alat ini terbuka sebagai kartu di atas tampilan.

Alat ini bekerja pada apa yang dicetak: pilihan, atau semua yang terlihat jika tidak ada yang dipilih. Yang dicetak harus berupa solid tertutup; jika pemeriksaan menemukan lubang, gunakan [Perbaiki](topic:print-tools#repair) terlebih dahulu.

Ini berjalan di ModelCraft, di komputer Anda: tanpa server lisensi, tanpa kunci USB, dan tanpa unggahan apa pun.

## Cara memotong

- **Muat di bed, bagian paling sedikit**: masukkan lebar, kedalaman, dan tinggi bed (nilainya dimulai dari {{ui:Pengaturan}} › ModelCraft › printer 3D). Kartu menampilkan berapa banyak bagian yang dibutuhkan dan seberapa besar masing-masing. Model dipotong menjadi bagian-bagian yang sama besar, sesedikit mungkin agar muat. Sebuah bagian boleh dibaringkan dalam file jika itu membuatnya muat. Konektor yang menonjol dari sebuah bagian ikut dihitung dalam ukurannya.
- **Di tempat yang saya tentukan**: pilih sumbu tempat memotong dan ketik lokasinya dalam milimeter dari ujung rendah model, dipisahkan koma (`100, 200` menghasilkan tiga bagian).
  **Miring** memutar potongan hingga 60° terhadap salah satu dari dua sumbu lainnya (misalnya potongan melintang Z yang dimiringkan terhadap X). Setiap potongan miring melewati garis tengah model di posisinya, memberi bagian area rekat yang lebih luas dan menyembunyikan sambungan lebih baik pada permukaan miring. Konektor tegak lurus terhadap potongan.

Bidang potong digambar mengelilingi model sebagai garis putus-putus selama kartu terbuka.

## Konektor

Setiap tempat dua bagian bersentuhan mendapat konektor, yang ditempatkan sendiri di tempat yang paling lapang: sekurang-kurangnya **dinding terkecil** ditambah **celah** ditambah ukurannya sendiri dari sisi luar, dan cukup jauh dari setiap potongan lain sehingga dua lubang tidak pernah bertemu. Pada muka yang panjang, dua konektor diletakkan berjarak di sepanjangnya, agar bagian-bagian tidak dapat berputar.

- **Pasak bulat**: pasak pada satu bagian (ujungnya dibuat miring) dan lubang pada bagian lainnya.
- **Kunci persegi**: sama seperti itu, tetapi persegi, sehingga sebuah bagian hanya bisa dipasang dengan satu arah putaran.
- **Ekor burung**: lidah yang meluncur masuk ke alur dari samping. Jika salah satu ujung alur akan bertemu potongan lain, ekor burung berhenti sebelum itu dan meluncur masuk dari ujung yang terbuka. Ekor burung cocok untuk potongan searah (deretan irisan); dalam kisi, gunakan pasak atau dowel.
- **Lubang dowel**: lubang di setiap sisi; pin-nya ikut dicetak (dalam zip).
- **Kantong magnet**: kantong di setiap sisi untuk magnet bulat dengan diameter dan ketebalan yang Anda masukkan. Periksa kutubnya sebelum merekatkannya.
- **Tidak ada (lem)**.

**Celah** adalah jarak di setiap sisi antara pasak dan lubangnya (0,2 mm sebagai awal). Nilainya sesuai dengan angka yang Anda masukkan: lubang bulat dibuat sedikit lebih besar agar sisi datarnya, bukan sudutnya, mempertahankan celah itu. Naikkan jika bagian dari printer Anda terlalu rapat.

Jika sebuah sambungan tidak punya ruang untuk konektor (dinding tipis, area sentuh kecil), kartu akan memberi tahu. Rekat sambungan itu.

## Nomor bagian

Dengan **Ukir nomor sambungan di kedua muka** aktif, setiap sambungan mendapat nomor dari kedua bagiannya, misalnya `3-4`, diukir sedalam 0,6 mm di kedua muka dan terbaca dengan arah yang benar di masing-masing. Nomor dimulai dengan tinggi 5 mm dan mengecil agar muat, hingga 2,5 mm. Sambungan yang tidak punya ruang untuk nomornya akan didaftar. Bagian diberi nomor dari lapisan bawah ke atas.

## Pratinjau, unduh, pisahkan model

1. {{ui:Pratinjau}} memotong model dan menampilkan berapa banyak bagian, sambungan, dan konektor yang ada, apakah setiap bagian lolos pemeriksaan cetak 3D dan muat di bed, serta mendaftar ukuran setiap bagian. Sebuah cincin menandai setiap konektor dan nomor di tampilan.
2. {{ui:Unduh bagian-bagiannya (.zip)}} menyimpan satu zip: satu file per bagian (STL atau 3MF, sesuai pilihan Anda di bawah **File**), masing-masing berdiri di atas bed; pin dowel; dan **lembar rakitan**, yaitu gambar bagian-bagian yang terurai beserta nomornya (`assembly.svg` dan `assembly.png`) serta daftar bagian dan sambungan (`assembly.txt`).
3. {{ui:Pisahkan model}} menempatkan bagian-bagian ke dalam model sebagai pengganti grup atau komponen yang dipilih, dinamai seperti pada lembar rakitan, dalam satu langkah. {{ui:Urungkan}} mengembalikan yang asli. Ini membutuhkan grup atau komponen yang akan dipisah dalam keadaan terpilih; unduhan bekerja pada apa pun yang bisa dicetak.

## Pindahkan konektor sendiri

Setelah pratinjau, **Konektor manual** memungkinkan Anda memperbaiki tempat konektor:

- {{ui:Pindahkan satu}}: klik cincin merah di tampilan (berubah hijau), lalu klik tempat konektor seharusnya berada pada potongan.
- {{ui:Tambah satu}}: klik di tampilan tempat konektor harus berada. Konektor ditempatkan pada bidang potong yang dicapai klik Anda, di antara kedua bagian di sana.
- {{ui:Buang satu}}: klik cincin merah untuk menghapus konektor itu.

Setiap perubahan diperiksa ulang seperti konektor otomatis: titik yang terlalu dekat dengan garis tepi, potongan lain, atau konektor lain tidak akan dibuat, dan kartu akan memberi tahu. {{ui:Otomatis lagi}} melupakan tempat yang Anda tentukan. Tempat-tempat itu tetap tersimpan selama model, pilihan, dan potongan tidak berubah.

Pratinjau tetap ada sampai model, pilihan, atau pengaturan berubah; lalu kartu meminta Anda untuk pratinjau ulang.

:::note
Setiap bagian diperiksa seperti pemeriksaan cetak 3D akan memeriksanya sebelum Anda mengunduh. Slicer Anda tetap yang memutuskan bagaimana setiap bagian dicetak: periksa setiap bagian di sana, dan cetak satu sambungan lebih dulu untuk melihat bagaimana printer Anda menangani celahnya.
:::
