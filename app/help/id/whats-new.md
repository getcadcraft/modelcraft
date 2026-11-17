---
title: Yang baru di 0.9
summary: Tahap cetak dengan slicer sendiri dan pengiriman ke USB, Klipper, OctoPrint, dan PrusaLink, slicing resin dan add-on berkas, aliran material, add-on digital twin dan lantai pabrik, fillet NURBS, penebalan dan pencocokan pemindaian, AR di lokasi, serta sepuluh metode busur.
keywords: yang baru, catatan rilis, changelog, 0.9, tahap cetak, cetak 3d, kirim ke printer 3d, slicer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri:moto, prusaslicer, orcaslicer, bambu, resin, cetak resin, goo, sl1, ctb, anycubic, uji eksposur, aliran material, digital twin, lantai pabrik, plc, konveyor, nurbs, fillet, tebalkan, pencocokan pemindaian, ar, di lokasi, metode busur, satuan, yang baru, catatan rilis, changelog, perubahan, 0.8, 0.8.1, versi, fitur baru, mesin render, mesin, buka di, usd, gltf, unreal, mesin add-on, nurbs, permukaan, loft, sweep, kontinuitas, g0, g1, g2, zebra, step, iges, ucapkan scene, scene, cuaca, waktu siang, musim, asisten, material dari foto, foto, foto sketsa, lengkapi, lengkapi ruang, miring, potongan miring, belah, pemeriksaan cetak, masalah, grid properti, lampu, bahasa, perangkat input, baris bilah alat, dwg, langsung
from: 169048a2
---

Inilah yang berubah di ModelCraft 0.9, dibandingkan dengan 0.8.1. ModelCraft kini menjangkau printer dan lantai pabrik: Anda dapat menaruh benda di atas bed cetak dan mengirimnya tanpa mengekspor, melakukan slicing untuk filamen atau resin, dan menata jalur penanganan material. Ini adalah CadCraft Studio 0.9 dan kedelapan aplikasinya; sebagian besar fitur baru di bawah adalah add-on.

## Baru

### Pencetakan 3D

- **Tahap cetak.** Klik {{ui:Tahap cetak}} di bilah alat. Tambahkan item Pustaka ke bed printer, atur posisinya, telusuri lapisan hasil slicing, dan tekan {{ui:Kirim ke printer 3D}}, tanpa STL untuk diekspor. Ini termasuk add-on Cetak 3D, yang aktif secara default dan dapat dihapus seperti add-on lainnya. Lihat [Letakkan benda di atas bed cetak dan kirim ke printer](topic:print-stage).
- **Slicer filamen milik kami sendiri.** {{ui:CadCraft basic (termasuk, tercepat)}} adalah slicer dalam daftar **Slicer** pada kartu: dinding, kulit, isian, penyangga, dan skirt, di worker agar halaman tetap dapat dipakai. {{ui:Pratinjau lapisan}} dengan penggeser **Layer** menampilkan lapisan sebelum Anda mengirim. Profil printer seperti gaya Ender-3 dan Prusa MK4 membawa G-code awalnya sendiri.
- **Pengiriman.** Lewat USB (Chrome atau Edge di komputer, dengan halaman tetap terbuka), atau ke Klipper (Moonraker), OctoPrint, atau PrusaLink di jaringan Anda. Tidak ada yang terhubung atau mengirim tanpa klik, dan pengiriman selalu meminta konfirmasi terlebih dahulu.
- **Slicer lain.** Kiri:Moto, PrusaSlicer, dan OrcaSlicer adalah add-on tersendiri, nonaktif secara default; tambahkan dari kartu atau dari {{ui:Pengaturan}} › {{ui:Add-on}}. PrusaSlicer dan OrcaSlicer memakai salinan yang sudah Anda pasang sendiri dari CadCraft Studio. Add-on printer Bambu Lab melakukan slicing dengan OrcaSlicer Anda dan preset P2S-nya, dan memerlukan Studio di komputer.
- **Cetak resin.** Add-on resin (nonaktif secara default) membuat gambar lapisan untuk layar printer Anda, dengan pelubangan dan lubang ventilasi, raft dan penyangga, pratinjau lapisan, serta waktu, resin, dan biaya. Add-on format berkas menulis Elegoo GOO, SL1, Chitubox (CBDDLP dan CTB 2 sampai 5), dan Anycubic (PWMX dan PWS). Uji eksposur resin membuat tangga lima eksposur. Lihat [Slicing untuk printer resin](topic:resin-printing).
- **Tidak berubah.** {{ui:Ekspor}} › {{ui:Periksa untuk pencetakan 3D (STL atau 3MF)…}}, alat cetak, dan Belah untuk dicetak bekerja seperti di 0.8. Lihat [Siapkan model untuk pencetakan 3D](topic:print-3d).

### Aliran material, Digital twin, dan Lantai pabrik

Ketiganya adalah add-on, nonaktif sampai Anda menyalakannya di {{ui:Pengaturan}} › {{ui:Add-on}}, dan masing-masing memiliki bantuannya sendiri setelah aktif.

- **Aliran material.** Panel bernama Aliran material menata konveyor, stasiun, buffer, dan jalur AGV di tampilan 3D, menjalankan simulasi dengan seed, memutarnya kembali, dan menampilkan throughput, lead time, dan antrean, dengan hasil disimpan sebagai CSV. Pesanan dapat berasal dari berkas CSV. Sel robot dapat diperiksa dan diekspor. Tautan PLC memiliki mode lunak dan mode nyata lewat Modbus TCP, yang hanya bekerja di CadCraft Studio.
- **Digital twin.** Membaca tata letak Aliran material dan menjalankan PLC lunak di atasnya, dengan gangguan yang dapat Anda paksakan, uji stok, perbandingan tata letak, dan daftar material (bill of materials).
- **Lantai pabrik.** Mengubah stasiun menjadi mesin dan sel, membacanya secara langsung atau dari simulator, dan menyimpan antrean pekerjaan serta OEE sederhana. Hanya membaca: build ini tidak dapat menulis ke mesin atau PLC.

### Permukaan, model, dan gambar

- **Fillet, penebalan, dan boolean pada NURBS.** Panel {{ui:Permukaan}} memiliki {{ui:Fillet antar muka}}, {{ui:Fillet beberapa tepi}}, {{ui:Tebalkan menjadi solid}}, serta Gabungkan, Kurangi, dan Irisan, masing-masing dengan deviasi terukurnya. Lihat [Permukaan bebas (NURBS)](topic:nurbs-surfaces).
- **Cocokkan permukaan ke pindaian.** Pilih mesh hasil pindaian dan gunakan {{ui:Cocokkan permukaan ke pindaian}} di grup **Pindaian**, lalu {{ui:Jahit permukaan menjadi solid}}. Ini adalah pencocokan awal, bukan paket reverse engineering lengkap.
- **Tautan langsung dari pemodel .3dm.** Satu arah, dari Rhino 8 atau Grasshopper, dan memerlukan CadCraft Studio di komputer yang sama. Lihat [Jaga model .3dm tetap langsung](topic:live-3dm-link).
- **Lihat model di lokasi.** {{ui:Lihat di lokasi (AR, ponsel)}} di menu {{ui:Tampilan}} bekerja pada ponsel Android dengan Chrome. Lihat [Lihat model di lokasi dengan ponsel Android (AR)](topic:ar-on-site).
- **Metode busur.** Daftar {{ui:Metode busur}} menawarkan sepuluh cara menggambar busur, termasuk {{ui:3-Point}} dan {{ui:Awal, Pusat, Akhir}}.
- **Lebih banyak satuan.** Berat (kg, lb, t, ton) dan suhu (derajat C, F, K, dan R) dipahami di tempat Anda mengetik nilai dengan satuan.

## Di setiap aplikasi

- **Tooltip.** Teks saat kursor diarahkan ke tombol dan label yang terpotong adalah tooltip Bootstrap.
- **Tip awal yang dapat ditutup.** Kartu tip pada area gambar kosong memiliki tanda x kecil untuk menutup. Ia tetap tertutup, dan palet perintah dapat menampilkannya kembali.
- **Deretan tab yang dapat digulir.** Deretan tab panel yang tidak muat akan digulir alih-alih terpotong.
- **Judul tab.** Saat dokumen terbuka, tab peramban dimulai dengan nama dokumen, lalu ModelCraft dan CadCraft. Titik muncul paling depan selama belum disimpan.
- **Tata letak.** {{ui:Pengaturan}} › {{ui:Umum}} › Tata letak menyimpan tata letak dalam daftar, dengan pilihan untuk memakai tata letak hanya untuk aplikasi ini dan tombol untuk mengatur ulang tata letak.
- **Bahasa.** Daftar bahasa di Pengaturan mengikuti berkas bahasa yang ada di build. Bahasa selain Inggris adalah draf mesin.
- **Langsung dan Pustaka.** Live TeamWork menampilkan kursor dan nama secara langsung, dan koleksi Pustaka memberi setiap aplikasi koleksi default.

## Diperbaiki

- {{ui:Putar}} berubah menjadi {{ui:Jeda}} saat animasi diputar, dan {{key:Space}} memutar serta menjeda saat garis waktu terbuka.
- Render gambar diam kembali ke WebGL saat kartu grafis tidak dapat memulai path tracer. Tampilan render langsung mungkin masih menampilkan kesalahan; ini belum diperiksa pada mesin Windows dengan driver tersebut.
- Mode nyata Aliran material terhubung lagi setelah tautan berakhir karena jawaban pengecualian PLC.

## Batasan jujur

- Belum ada yang dicetak di printer sungguhan: tidak dengan filamen, tidak dengan resin, tidak lewat Bambu Connect. Berkas resin hanya dibaca kembali oleh pembaca milik CadCraft sendiri.
- Digital twin dan Lantai pabrik hanya diuji terhadap simulator dan jawaban yang sudah diketahui, tanpa PLC, lini, atau protokol sungguhan. Keduanya adalah alat bantu pemeriksaan, bukan validasi keselamatan. Fisika hanya mencakup kotak, hingga delapan beban.
- Tautan Rhino dan Grasshopper belum pernah berjalan di program sungguhannya.
- Bahasa selain Inggris adalah draf mesin.

## Sebelumnya: 0.8 dan 0.8.1

Inilah yang berubah di ModelCraft 0.8 (2026-11-01) dan 0.8.1 (2026-11-02), dibandingkan dengan 0.7. Dialog {{ui:Render gambar…}} kini dapat mengirim scene ke program lain, panel {{ui:Permukaan}} membuat permukaan bebas yang halus, dan asisten yang Anda hubungkan dapat mengatur seluruh scene dari satu kalimat.

### Baru

**Render**

- **Pilihan mesin.** {{ui:Render gambar…}} memiliki daftar **Mesin** di atas Mode. Dua mesin milik kami sendiri, Cepat dan Path tracer, merupakan default dan bekerja di mana saja. Entri lainnya menyimpan scene sebagai paket (model sebagai berkas USD, ditambah berkas pengaturan dengan nilai material yang tepat, lampu yang menyala, matahari, langit, eksposur, dan kamera) untuk dibawa ke program lain. Gambar yang digambar program lain menyatakan program dan versi mana yang membuatnya. Lihat [Pilih program yang menggambar gambar](topic:render-engines).
- **Buka di program lain.** Daftar Mesin dapat menyimpan scene sebagai berkas USD, berkas glTF (`.glb`), atau folder proyek Unreal (`.zip`), di peramban dan di CadCraft Studio. Di Studio, ia juga dapat menjalankan usdview atau program bawaan komputer untuk berkas tersebut. Lihat [Buka scene di program lain](topic:render-open-in).
- **Kirim ke mesin game dari Studio.** Studio menulis scene ke dalam proyek Unreal Engine dan menjaganya tetap sinkron pada setiap pengiriman, satu arah saja. Suntingan Anda sendiri berada di layer yang tidak pernah ditulis CadCraft. Lihat [Kirim scene ke mesin game](topic:render-unreal).
- **Mesin dari add-on.** Add-on dapat menambahkan mesin ke daftar. Yang ditulis dalam JavaScript menggambar di peramban dan di Studio; yang menjalankan program memerlukan persetujuan Anda di Studio. Lihat [Gambar dengan program lain](topic:render-other-program) dan [Tambahkan mesin render dengan add-on](topic:render-engine-addons).
- **Ucapkan scene-nya.** Beri tahu asisten Anda yang terhubung "senja, hujan ringan, pohon musim gugur, orang di plaza", dan ModelCraft menyiapkannya dalam satu langkah: matahari berpindah ke tanggal dan waktu agar bayangan mengikuti, langit berubah, permukaan basah muncul, dan pohon serta orang ditempatkan sebagai objek nyata pada tag yang dapat Anda sembunyikan, pindahkan, atau hapus. Waktu siang, tanggal atau musim, dan cuaca (cerah, mendung, kabut, hujan ringan, hujan, badai) juga bekerja sendiri-sendiri, dan permintaan berikutnya mengubah scene yang sama. Kabut tampil pada gambar kualitas tinggi di kartu grafis; mesin lain menampilkan langit, cahaya, dan permukaan basah. Hujan tidak digambar sebagai garis jatuh.

**Material**

- **Material dari satu foto.** Berikan ModelCraft foto sebuah permukaan (dinding, lantai, batu) dan ia membuat material ubin: pencahayaan di seluruh foto diratakan, tepinya dibuat menyambung, dan peta warna, peta kekasaran, serta peta normal dihitung dari gambar. Ini adalah pengolahan gambar biasa atas foto Anda sendiri, tanpa model yang dilatih. Kekasaran adalah perkiraan. Foto yang polos, persegi, dan lurus dari depan menghasilkan ubin terbaik; pola kuat seperti bata dapat menampilkan bayangan samar di tempat sambungan dicampur.

**Permukaan**

- **Permukaan bebas.** Panel {{ui:Permukaan}} membuat kurva NURBS dan permukaan tanpa potongan: kurva melalui titik, loft, ruled, extrude, revolve, sweep sepanjang satu atau dua rel, permukaan dari jaringan kurva, tambalan dari empat tepi, match, dan blend. Setiap tepi bersama diukur sebagai G0, G1, atau G2 (celah, sudut, lompatan kelengkungan) pada permukaan yang tepat, dan tepi yang lebih buruk dari yang Anda minta muncul di panel Masalah dengan perbaikan **Match**. Garis zebra dan warna kelengkungan digambar dari permukaan yang tepat. Berkas STEP dan IGES dapat diekspor dan diimpor. Lihat [Permukaan bebas (NURBS)](topic:nurbs-surfaces).

**Tapak dan ruangan**

- **Foto sketsa ke tanah.** {{ui:File}} › {{ui:Impor foto sketsa…}} mengubah foto sketsa tangan dari ponsel menjadi tepi di atas tanah pada skala yang Anda tentukan: satu grup, dengan tag untuk setiap warna pena. Kertasnya ditemukan dan diluruskan di komputer Anda dan tidak ada yang dikirim ke mana pun. Lihat [Model pada denah tapak](topic:site-plan).
- **Lengkapi ruang dengan furnitur.** Pilih lantai dan gunakan {{ui:Atur}} › {{ui:Lengkapi ruang dengan furnitur…}}. Furnitur kamar tidur, ruang keluarga, ruang makan, dapur, kamar mandi, atau kantor ditempatkan dengan aturan, menempel ke dinding dan tidak menghalangi pintu serta jendela, dalam satu grup yang dapat Anda hapus sekaligus dalam satu langkah. Ini adalah tata letak awal untuk Anda tinjau, bukan desain. Lihat [Pustaka awal](topic:starter).

**Pencetakan 3D**

- **Potongan miring.** Belah untuk dicetak dapat memiringkan potongannya hingga 60 derajat, yang memberi bagian-bagian lebih banyak area lem. Konektor berdiri tegak lurus terhadap potongan. Lihat [Belah model untuk dicetak](topic:print-split).
- **Pemeriksaan cetak di Masalah.** Temuan pemeriksaan cetak 3D tampil di panel Masalah dengan penanda pada model, dan Perbaiki memperbaikinya dari sana. Lihat [Penyangga, tebal dinding, pelubangan, dan perbaikan](topic:print-tools).

**Di setiap aplikasi**

- **Bahasa.** Bantuan dan aplikasi tersedia dalam 54 bahasa. Sepuluh baru: Lithuania, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipina, Swahili, dan Uzbek. Bahasa selain Inggris adalah draf mesin sampai penutur asli membacanya, dan topik bantuan mungkin masih berbahasa Inggris.
- **Perangkat input.** Trackpad, pena, mouse 3D, pengontrol game, dan kontrol MIDI dapat menggerakkan aplikasi, untuk semuanya atau untuk satu saja.
- **Baris bilah alat.** {{ui:Pengaturan}} › {{ui:Umum}} › Baris bilah alat mengatur Wrap (seperti sebelumnya), 2 baris, atau 1 baris. Bilah yang tidak muat akan digulir ke samping alih-alih mengambil ruang dari gambar. Wrap tetap menjadi default.
- **Grid properti.** Kolom lampu ModelCraft memakai grid bersama: kategori yang dapat diciutkan, kolom label dan nilai, dan kepadatan Padat. Aritmetika yang diketik seperti `2*450` tetap berfungsi.
- **Masalah.** Panel Masalah (tombol peringatan di bilah aplikasi) dipakai bersama oleh semua aplikasi. Di ModelCraft, panel ini memuat pemeriksaan cetak dan peringatan kontinuitas permukaan.
- **Langsung.** Sesi Live TeamWork menampilkan siapa berada di mana. Lihat [Bekerja sama memodelkan dengan Live TeamWork](topic:work-live).
- **Add-on.** Add-on dapat menambahkan mesin render, seperti di atas.
- **Hubungkan AI Anda.** Kontrak alat dan pemeriksaan kedelapan aplikasi lulus, dengan 454 alat seluruhnya. Koneksi satu klik di dalam Studio, konektor yang dihosting untuk asisten peramban, kunci Anda sendiri di dalam Studio, dan paket yang dipublikasikan belum dijanjikan. Aplikasi tidak memiliki AI sendiri. Lihat [Gunakan ModelCraft dengan asisten AI](topic:use-with-ai-assistants).

### Diperbaiki di 0.8.1

- **Bagian kelas DWG.** Bagian kelas berkas DWG dibaca sebagai tipe yang salah, yang dapat merusak berkas saat diimpor. Kini dibaca dengan benar, di ModelCraft dan di aplikasi lain yang membaca DWG.
- **Tablet dalam potret.** Tinggi grid yang tersisa diberikan ke kanvas, dan tata letak lembar dimulai pada lebar 760 piksel atau kurang. Lembar gaya ModelCraft juga memiliki perubahan ini.
- **Bahasa di Studio.** CadCraft Studio dan edisi kemasan dapat berganti bahasa saat berjalan; sebelumnya hanya bahasa Inggris. Ini belum diuji di setiap platform: beri tahu kami jika bahasanya tidak berubah.

### Belum ada di versi ini

- **Belum ditandatangani kode.** Windows mungkin menampilkan SmartScreen: pilih {{ui:Info selengkapnya}}, lalu {{ui:Tetap jalankan}}. Di Mac, klik kanan dan pilih {{ui:Buka}}. Build toko sedang ditunda, dan build iPad serta iPhone tidak dibangun ulang untuk 0.8.1.
- Program lain yang menggambar gambar tanpa add-on mesin render, kamera panorama atau stereo, dan gambar langit lewat program lain, serta plug-in yang membuka panggung Unreal, belum tersedia. Berkasnya ditulis; plug-in belum dirilis dan belum dijalankan di Unreal.
- Permukaan bebas: G3 dan kelas A tidak diukur atau diklaim, dan pemotongan serta solid menyusul nanti.
- Gambar dari program lain tidak identik piksel demi piksel dengan milik kami: hanya kamera, matahari, lampu, dan eksposur yang sama.
- Perbaikan 0.8.1 untuk pergantian bahasa di Studio belum diuji di setiap platform.

Hal lainnya ada di [Belum dibuat](topic:not-built-yet). Untuk rilis sebelumnya, lihat [Yang baru di 0.7](topic:whats-new-0-7).
