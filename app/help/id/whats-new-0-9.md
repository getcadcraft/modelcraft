---
title: Yang baru di 0.9 (sebelumnya)
summary: Tahap cetak dengan slicer sendiri dan pengiriman ke USB, Klipper, OctoPrint dan PrusaLink, slicing resin dan add-on file, aliran material, add-on digital twin dan lantai pabrik, fillet NURBS, penebalan dan pencocokan pindaian, AR di lokasi, serta sepuluh metode busur.
keywords: yang baru 0.9, rilis sebelumnya, yang baru, apa yang baru, catatan rilis, changelog, 0.9, tahap cetak, cetak 3d, kirim ke printer 3d, slicer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, resin, cetak resin, goo, sl1, ctb, anycubic, tes paparan, aliran material, digital twin, lantai pabrik, plc, conveyor, nurbs, fillet, penebalan, pencocokan pindaian, ar, di lokasi, metode busur, satuan, yang baru, catatan rilis, changelog, perubahan, 0.8, 0.8.1, versi, fitur baru, render engine, engine, buka di, usd, gltf, unreal, engine add-on, nurbs, permukaan, loft, sweep, kontinuitas, g0, g1, g2, zebra, step, iges, ucapkan adegan, adegan, cuaca, waktu siang, musim, asisten, material dari foto, foto, foto sketsa, lengkapi, lengkapi ruang, miring, potongan miring, belah, cek cetak, masalah, property grid, lampu, bahasa, perangkat input, baris bilah alat, dwg, live
from: 2717d1b1
---

Ini yang berubah di ModelCraft 0.9, dibandingkan dengan 0.8.1. ModelCraft kini menjangkau printer dan lantai pabrik: Anda dapat meletakkan benda di bed cetak dan mengirimkannya tanpa mengekspor, mengiris untuk filamen atau resin, dan menata jalur penanganan material. Ini adalah CadCraft Studio 0.9 beserta delapan aplikasinya; sebagian besar fitur baru di bawah ini adalah add-on.

## Baru

### Pencetakan 3D

- **Tahap cetak.** Klik {{ui:Tahap cetak}} di bilah alat. Tambahkan item pustaka ke bed printer, atur posisinya, periksa layer hasil irisan, lalu tekan {{ui:Kirim ke printer 3D}}, tanpa perlu mengekspor STL. Fitur ini termasuk add-on 3D Print, yang aktif secara bawaan dan dapat dihapus seperti add-on lainnya. Lihat [Letakkan benda di bed cetak dan kirim ke printer](topic:print-stage).
- **Slicer filamen buatan kami sendiri.** {{ui:CadCraft basic (termasuk, tercepat)}} adalah slicer di daftar **Slicer** pada kartu, dengan dinding, kulit, isian, penyangga dan skirt, dijalankan di worker terpisah agar halaman tetap dapat dipakai. {{ui:Pratinjau layer}} dengan penggeser **Layer** menampilkan layer sebelum Anda mengirim. Profil printer seperti gaya Ender-3 dan Prusa MK4 membawa G-code awal sendiri.
- **Pengiriman.** Lewat USB (Chrome atau Edge di komputer, dengan halaman tetap terbuka), atau ke Klipper (Moonraker), OctoPrint atau PrusaLink di jaringan Anda. Tidak ada yang terhubung atau dikirim tanpa klik, dan pengiriman selalu meminta konfirmasi lebih dulu.
- **Slicer lainnya.** Kiri:Moto, PrusaSlicer dan OrcaSlicer adalah add-on tersendiri, nonaktif secara bawaan; tambahkan dari kartu atau dari {{ui:Pengaturan}} › {{ui:Add-on}}. PrusaSlicer dan OrcaSlicer menggunakan salinan terpasang Anda sendiri dari CadCraft Studio. Add-on printer Bambu Lab mengiris dengan OrcaSlicer Anda beserta preset P2S-nya, dan memerlukan Studio di komputer.
- **Cetak resin.** Add-on resin (nonaktif secara bawaan) membuat gambar layer untuk layar printer Anda, dengan rongga dan lubang ventilasi, raft dan penyangga, pratinjau layer, serta waktu, resin dan biaya. Add-on format file menulis Elegoo GOO, SL1, Chitubox (CBDDLP dan CTB 2 sampai 5) dan Anycubic (PWMX dan PWS). Tes paparan resin membuat tangga dari lima paparan. Lihat [Iris untuk printer resin](topic:resin-printing).
- **Tidak berubah.** {{ui:Ekspor}} › {{ui:Periksa untuk pencetakan 3D (STL atau 3MF)…}}, alat cetak, dan Pisah untuk pencetakan berfungsi seperti di 0.8. Lihat [Siapkan model untuk pencetakan 3D](topic:print-3d).

### Aliran material, Digital twin dan Lantai pabrik

Ketiganya adalah add-on, nonaktif sampai Anda mengaktifkannya di {{ui:Pengaturan}} › {{ui:Add-on}}, dan masing-masing memiliki bantuan sendiri setelah diaktifkan.

- **Aliran material.** Panel bernama Aliran material menata conveyor, stasiun, buffer dan jalur AGV di tampilan 3D, menjalankan simulasi dengan seed, memutarnya kembali, dan menampilkan throughput, waktu tunggu dan antrean, dengan hasil disimpan sebagai CSV. Pesanan dapat berasal dari file CSV. Sel robot dapat diperiksa dan diekspor. Tautan PLC memiliki mode lunak dan mode nyata lewat Modbus TCP, yang hanya berfungsi di CadCraft Studio.
- **Digital twin.** Membaca tata letak Aliran material dan menjalankan PLC lunak di atasnya, dengan gangguan yang dapat Anda paksa, uji stok, perbandingan tata letak dan daftar material.
- **Lantai pabrik.** Mengubah stasiun menjadi mesin dan sel, membacanya secara langsung atau dari simulator, dan menyimpan antrean pekerjaan serta OEE sederhana. Fitur ini hanya membaca: build ini tidak dapat menulis ke mesin atau PLC.

### Permukaan, model dan gambar

- **Fillet, penebalan dan operasi boolean pada NURBS.** Panel {{ui:Permukaan}} memiliki {{ui:Fillet antar muka}}, {{ui:Fillet beberapa tepi}}, {{ui:Tebalkan menjadi solid}}, serta Union, Subtract dan Intersect, masing-masing dengan deviasi terukur. Lihat [Permukaan bebas (NURBS)](topic:nurbs-surfaces).
- **Cocokkan permukaan ke pindaian.** Pilih mesh hasil pindaian dan gunakan {{ui:Cocokkan permukaan ke pindaian}} di grup **Scan**, lalu {{ui:Jahit permukaan menjadi solid}}. Ini adalah kecocokan awal, bukan paket rekayasa balik lengkap.
- **Tautan langsung dari modeler .3dm.** Satu arah, dari Rhino 8 atau Grasshopper, dan memerlukan CadCraft Studio di komputer yang sama. Lihat [Jaga model .3dm tetap langsung](topic:live-3dm-link).
- **Lihat model di lokasi.** {{ui:Lihat di lokasi (AR, ponsel)}} di menu {{ui:Tampilan}} berfungsi di ponsel Android dengan Chrome. Lihat [Lihat model di lokasi dengan ponsel Android (AR)](topic:ar-on-site).
- **Metode busur.** Daftar tarik-turun {{ui:Metode busur}} menawarkan sepuluh cara menggambar busur, termasuk {{ui:3-Point}} dan {{ui:Awal, Pusat, Akhir}}.
- **Satuan tambahan.** Berat (kg, lb, t, ton) dan suhu (derajat C, F, K dan R) dikenali di tempat Anda mengetik nilai dengan satuan.

## Di setiap aplikasi

- **Tooltip.** Teks melayang pada tombol dan label yang terpotong adalah tooltip Bootstrap.
- **Tip awal yang dapat ditutup.** Kartu tip pada area gambar kosong memiliki tombol tutup x kecil. Kartu tetap tertutup, dan palet perintah dapat menampilkannya lagi.
- **Bilah tab yang dapat digulir.** Bilah tab panel yang tidak muat akan digulir, bukan terpotong.
- **Judul tab.** Saat dokumen terbuka, tab peramban diawali dengan nama dokumen, lalu ModelCraft dan CadCraft. Titik muncul di depan selama belum disimpan.
- **Tata letak.** {{ui:Pengaturan}} › {{ui:Umum}} › Tata letak menyimpan tata letak dalam daftar tarik-turun, dengan pilihan untuk memakai tata letak hanya untuk aplikasi ini dan tombol untuk mengatur ulang tata letak.
- **Bahasa.** Daftar bahasa di Pengaturan mengikuti file bahasa yang ada di build. Bahasa selain Inggris berupa draf mesin.
- **Live dan Pustaka.** Live TeamWork menampilkan kursor dan nama secara langsung, dan koleksi Pustaka memberi setiap aplikasi koleksi bawaan.

## Diperbaiki

- {{ui:Putar}} berubah menjadi {{ui:Jeda}} saat animasi diputar, dan {{key:Space}} memutar dan menjeda saat garis waktu terbuka.
- Render diam kembali ke WebGL saat kartu grafis tidak dapat memulai path tracer. Panel render langsung mungkin masih menampilkan galat; hal ini belum diperiksa pada mesin Windows dengan driver tersebut.
- Mode nyata Aliran material tersambung kembali setelah tautan berakhir karena jawaban pengecualian PLC.

## Batasan yang jujur

- Belum ada yang dicetak pada printer sungguhan: tidak dengan filamen, tidak dengan resin, dan tidak melalui Bambu Connect. File resin hanya dibaca kembali oleh pembaca milik CadCraft sendiri.
- Digital twin dan Lantai pabrik hanya diuji dengan simulator dan jawaban yang sudah diketahui, tanpa PLC, lini atau protokol sungguhan. Keduanya adalah alat bantu pemeriksaan, bukan validasi keselamatan. Fisika hanya mencakup kotak, hingga delapan beban.
- Tautan Rhino dan Grasshopper belum pernah berjalan di program sungguhan.
- Bahasa selain Inggris berupa draf mesin.

## Sebelumnya: 0.8 dan 0.8.1

Ini yang berubah di ModelCraft 0.8 (2026-11-01) dan 0.8.1 (2026-11-02), dibandingkan dengan 0.7. Dialog {{ui:Render gambar…}} kini dapat mengirim adegan ke program lain, panel Permukaan membuat permukaan bebas yang halus, dan asisten yang Anda hubungkan dapat mengatur seluruh adegan dari satu kalimat.

### Baru

**Rendering**

- **Pilihan Engine.** {{ui:Render gambar…}} memiliki daftar **Engine** di atas Mode. Dua engine buatan kami sendiri, Fast dan Path tracer, adalah bawaan dan berfungsi di mana saja. Pilihan lain menyimpan adegan sebagai paket (model sebagai file USD, ditambah file pengaturan dengan nilai material yang tepat, lampu yang menyala, matahari, langit, eksposur dan kamera) untuk dibawa ke program lain. Gambar yang digambar program lain menyatakan program dan versi mana yang membuatnya. Lihat [Pilih program yang menggambar gambar](topic:render-engines).
- **Buka di program lain.** Daftar Engine dapat menyimpan adegan sebagai file USD, file glTF (`.glb`) atau folder proyek Unreal (`.zip`), di browser maupun di CadCraft Studio. Di Studio, juga dapat menjalankan usdview atau program bawaan komputer untuk file tersebut. Lihat [Buka adegan di program lain](topic:render-open-in).
- **Kirim ke mesin game dari Studio.** Studio menulis adegan ke proyek Unreal Engine dan menjaganya tetap sinkron setiap kali dikirim, hanya satu arah. Suntingan Anda sendiri berada di layer yang tidak pernah ditulis CadCraft. Lihat [Kirim adegan ke mesin game](topic:render-unreal).
- **Engine dari add-on.** Add-on dapat menambahkan engine ke daftar. Engine yang ditulis dengan JavaScript menggambar di browser dan di Studio; engine yang menjalankan program memerlukan persetujuan Anda di Studio. Lihat [Gambar dengan program lain](topic:render-other-program) dan [Tambahkan engine render dengan add-on](topic:render-engine-addons).
- **Ucapkan adegannya.** Beri tahu asisten yang terhubung "senja, hujan gerimis, pohon musim gugur, orang-orang di plaza", dan ModelCraft mengaturnya dalam satu langkah: matahari bergerak sesuai tanggal dan waktu sehingga bayangan mengikuti, langit berubah, permukaan basah muncul, dan pohon serta orang ditempatkan sebagai objek nyata pada tag yang dapat Anda sembunyikan, pindahkan atau hapus. Waktu siang, tanggal atau musim, dan cuaca (cerah, mendung, kabut, hujan gerimis, hujan, badai) juga bekerja sendiri, dan permintaan berikutnya mengubah adegan yang sama. Kabut tampil pada gambar kualitas tinggi di kartu grafis; engine lain menampilkan langit, cahaya dan permukaan basah. Hujan tidak digambar sebagai garis jatuh.

**Material**

- **Material dari satu foto.** Berikan ModelCraft foto sebuah permukaan (dinding, lantai, batu), dan ia membuat material ubin: pencahayaan di seluruh foto diratakan, tepinya dibuat menyambung, dan peta warna, peta kekasaran serta peta normal dihitung dari gambar. Ini adalah pengolahan gambar biasa pada foto Anda sendiri, tanpa model terlatih. Kekasaran adalah perkiraan. Foto datar, persegi dan lurus dari depan menghasilkan ubin terbaik; pola kuat seperti bata dapat menampilkan bayangan kabur di tempat sambungan dicampur.

**Permukaan**

- **Permukaan bebas.** Panel {{ui:Permukaan}} membuat kurva NURBS dan permukaan tanpa potongan: kurva melalui titik, loft, ruled, ekstrusi, revolusi, sweep sepanjang satu atau dua rel, permukaan dari jaringan kurva, tambalan dari empat tepi, match dan blend. Setiap tepi yang dibagi diukur sebagai G0, G1 atau G2 (celah, sudut, lompatan kelengkungan) pada permukaan yang tepat, dan tepi yang lebih buruk dari yang Anda minta muncul di panel Masalah dengan perbaikan **Match**. Garis zebra dan warna kelengkungan digambar dari permukaan yang tepat. File STEP dan IGES dapat dikeluarkan dan dimasukkan. Lihat [Permukaan bebas (NURBS)](topic:nurbs-surfaces).

**Lokasi dan ruangan**

- **Sketsa foto ke tanah.** {{ui:File}} › {{ui:Impor foto sketsa…}} mengubah foto sketsa tangan dari ponsel menjadi tepi di tanah dengan skala yang Anda sebutkan: satu grup, dengan tag untuk setiap warna pena. Kertas ditemukan dan diluruskan di komputer Anda, dan tidak ada yang dikirim ke mana pun. Lihat [Model di denah tapak](topic:site-plan).
- **Lengkapi ruang.** Pilih lantai dan gunakan {{ui:Atur}} › {{ui:Lengkapi ruang dengan furnitur…}}. Furnitur kamar tidur, ruang keluarga, ruang makan, dapur, kamar mandi atau kantor ditempatkan berdasarkan aturan, di sepanjang dinding dan jauh dari pintu serta jendela, dalam satu grup yang dapat Anda hapus sekaligus. Ini adalah tata letak bawaan untuk Anda tinjau, bukan desain. Lihat [Pustaka awal](topic:starter).

**Pencetakan 3D**

- **Potongan miring.** Pisah untuk pencetakan dapat memiringkan potongannya hingga 60 derajat, sehingga potongan memiliki area rekat yang lebih luas. Konektor berdiri tegak lurus terhadap potongan. Lihat [Pisah model untuk pencetakan](topic:print-split).
- **Cek cetak di Masalah.** Temuan dari cek cetak 3D tampil di panel Masalah dengan penanda pada model, dan Perbaiki memperbaikinya dari sana. Lihat [Penyangga, ketebalan dinding, rongga dan perbaikan](topic:print-tools).

**Di setiap aplikasi**

- **Bahasa.** Bantuan dan aplikasi tersedia dalam 54 bahasa. Sepuluh bahasa baru: Lituania, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipino, Swahili dan Uzbek. Bahasa selain Inggris adalah draf mesin sampai penutur asli membacanya, dan topik bantuan mungkin masih dalam bahasa Inggris.
- **Perangkat input.** Trackpad, pena, mouse 3D, pengontrol game dan kontrol MIDI dapat mengoperasikan aplikasi, untuk semuanya atau untuk salah satu saja.
- **Baris bilah alat.** {{ui:Pengaturan}} › {{ui:Umum}} › Baris bilah alat mengatur Wrap (seperti sebelumnya), 2 baris atau 1 baris. Bilah yang tidak muat akan digulir ke samping, bukan mengambil ruang dari gambar. Wrap tetap menjadi bawaan.
- **Property grid.** Kolom isian lampu ModelCraft menggunakan grid bersama: kategori yang dapat diciutkan, kolom label dan nilai, serta kerapatan Compact. Aritmetika yang diketik seperti `2*450` tetap berfungsi.
- **Masalah.** Panel Masalah (tombol peringatan di bilah aplikasi) digunakan bersama oleh semua aplikasi. Di ModelCraft, panel ini memuat cek cetak dan peringatan kontinuitas permukaan.
- **Live.** Sesi Live TeamWork menunjukkan siapa berada di mana. Lihat [Bekerja bersama dengan Live TeamWork](topic:work-live).
- **Add-on.** Add-on dapat menambahkan engine render, seperti di atas.
- **Hubungkan AI Anda.** Kontrak alat dan pemeriksaan dari delapan aplikasi lulus, dengan 454 alat seluruhnya. Koneksi satu klik di dalam Studio, konektor hosted untuk asisten browser, kunci Anda sendiri di dalam Studio, dan paket yang diterbitkan belum dijanjikan. Aplikasi tidak memiliki AI sendiri. Lihat [Gunakan ModelCraft dengan asisten AI](topic:use-with-ai-assistants).

### Diperbaiki di 0.8.1

- **Bagian kelas DWG.** Bagian kelas file DWG dibaca sebagai tipe yang salah, sehingga dapat merusak file saat diimpor. Kini dibaca dengan benar, di ModelCraft maupun di aplikasi lain yang membaca DWG.
- **Tablet dalam potret.** Ruang grid yang tersisa diberikan ke kanvas, dan tata letak lembar dimulai pada lebar 760 piksel atau kurang. Lembar gaya ModelCraft juga memiliki perubahan ini.
- **Bahasa di Studio.** CadCraft Studio dan edisi terpaket dapat mengganti bahasa saat berjalan; sebelumnya hanya bahasa Inggris. Ini belum diuji di setiap platform: beri tahu kami jika bahasa tidak berubah.

### Belum ada di versi ini

- **Belum ditandatangani kode.** Windows mungkin menampilkan SmartScreen: pilih {{ui:Info lebih lanjut}}, lalu {{ui:Tetap jalankan}}. Di Mac, klik kanan dan pilih {{ui:Buka}}. Build toko ditunda, dan build iPad dan iPhone tidak dibangun ulang untuk 0.8.1.
- Program lain menggambar gambar tanpa add-on engine render, kamera panorama atau stereo, dan gambar langit melalui program lain, serta plug-in yang membuka tahap Unreal, belum tersedia. File-filenya ditulis; plug-in belum dirilis dan belum dijalankan di Unreal.
- Permukaan bebas: G3 dan kelas A tidak diukur atau diklaim, dan pemotongan serta solid akan datang nanti.
- Gambar dari program lain tidak identik piksel demi piksel dengan milik kami: hanya kamera, matahari, lampu dan eksposur yang cocok.
- Perbaikan 0.8.1 untuk pergantian bahasa di Studio belum diuji di setiap platform.

Semua hal lainnya ada di [Belum dibuat](topic:not-built-yet). Untuk rilis sebelumnya, lihat [Yang baru di 0.7](topic:whats-new-0-7).
