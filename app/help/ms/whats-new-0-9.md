---
title: Perkara baharu dalam 0.9 (terdahulu)
summary: Peringkat cetakan dengan slicer sendiri dan penghantaran melalui USB, Klipper, OctoPrint dan PrusaLink, penghirisan resin dan add-on format fail, add-on aliran bahan, kembar digital dan lantai kilang, fillet NURBS, penebalan dan padanan imbasan, AR di tapak dan sepuluh kaedah lengkok.
keywords: perkara baharu 0.9, keluaran terdahulu, perkara baharu, nota keluaran, log perubahan, 0.9, peringkat cetakan, cetakan 3d, hantar ke pencetak 3d, slicer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, resin, cetakan resin, goo, sl1, ctb, anycubic, ujian pendedahan, aliran bahan, kembar digital, lantai kilang, plc, konveyor, nurbs, fillet, tebalkan, padanan imbasan, ar, di tapak, kaedah lengkok, unit, perkara baharu, nota keluaran, log perubahan, perubahan, 0.8, 0.8.1, versi, ciri baharu, enjin render, enjin, buka dalam, usd, gltf, unreal, enjin add-on, nurbs, permukaan, loft, sweep, kesinambungan, g0, g1, g2, zebra, step, iges, katakan adegan, adegan, cuaca, waktu siang, musim, pembantu, bahan daripada foto, foto, foto lakaran, hiaskan, hiaskan bilik, condong, potongan condong, pisah, semakan cetakan, masalah, grid sifat, lampu, bahasa, peranti input, baris bar alat, dwg, live
from: 2717d1b1
---

Ini ialah perkara yang berubah dalam ModelCraft 0.9, berbanding 0.8.1. ModelCraft kini sampai ke pencetak dan lantai kilang: anda boleh meletakkan benda di atas katil cetakan dan menghantarnya tanpa mengeksport, menghiris untuk filamen atau resin, dan menyusun talian pengendalian bahan. Ini ialah CadCraft Studio 0.9 dan lapan aplikasinya; kebanyakan ciri baharu di bawah ialah add-on.

## Baharu

### Cetakan 3D

- **Peringkat cetakan.** Klik {{ui:Peringkat cetakan}} pada bar alat. Tambah item Pustaka ke katil pencetak, susunkannya, lihat lapisan yang dihiris dan tekan {{ui:Hantar ke pencetak 3D}}, tanpa STL untuk dieksport. Ia tergolong dalam add-on Cetakan 3D, yang dihidupkan secara lalai dan boleh dibuang seperti mana-mana add-on. Lihat [Letakkan benda di atas katil cetakan dan hantarkannya ke pencetak](topic:print-stage).
- **Slicer filamen kami sendiri.** {{ui:CadCraft basic (disertakan, paling pantas)}} ialah slicer dalam senarai **Slicer** pada kad: dinding, kulit, isian, sokongan dan skirt, pada worker supaya halaman kekal boleh digunakan. {{ui:Pratonton lapisan}} dengan peluncur **Lapisan** menunjukkan lapisan sebelum anda menghantar. Profil pencetak seperti gaya Ender-3 dan Prusa MK4 membawa G-code permulaan sendiri.
- **Penghantaran.** Melalui USB (Chrome atau Edge pada komputer, dengan halaman dibiarkan terbuka), atau ke Klipper (Moonraker), OctoPrint atau PrusaLink pada rangkaian anda. Tiada apa yang bersambung atau dihantar tanpa klik, dan penghantaran akan bertanya dahulu.
- **Slicer lain.** Kiri:Moto, PrusaSlicer dan OrcaSlicer ialah add-on tersendiri, dimatikan secara lalai; tambahkannya dari kad atau dari {{ui:Tetapan}} › {{ui:Add-on}}. PrusaSlicer dan OrcaSlicer menggunakan salinan terpasang anda sendiri daripada CadCraft Studio. Add-on pencetak Bambu Lab menghiris dengan OrcaSlicer anda dan pratetapan P2S, dan memerlukan Studio pada komputer.
- **Cetakan resin.** Add-on resin (dimatikan secara lalai) menghasilkan gambar lapisan untuk skrin pencetak anda, dengan pengosongan dan lubang udara, rakit dan sokongan, pratonton lapisan, serta masa, resin dan kos. Add-on format fail menulis Elegoo GOO, SL1, Chitubox (CBDDLP dan CTB 2 hingga 5) dan Anycubic (PWMX dan PWS). Ujian pendedahan resin menghasilkan tangga lima pendedahan. Lihat [Hiris untuk pencetak resin](topic:resin-printing).
- **Tidak berubah.** {{ui:Eksport}} › {{ui:Semak untuk cetakan 3D (STL atau 3MF)…}}, alat cetakan dan Pisah untuk cetakan berfungsi seperti dalam 0.8. Lihat [Dapatkan model sedia untuk cetakan 3D](topic:print-3d).

### Aliran bahan, Kembar digital dan Lantai kilang

Ketiga-tiga ini ialah add-on, tidak aktif sehingga anda menghidupkannya dalam {{ui:Tetapan}} › {{ui:Add-on}}, dan setiap satu mempunyai bantuannya sendiri apabila ia dihidupkan.

- **Aliran bahan.** Panel bernama Aliran bahan menyusun konveyor, stesen, penimbal dan laluan AGV dalam paparan 3D, menjalankan simulasi berbenih, memainkannya semula, dan menunjukkan daya pemprosesan, masa pengeluaran dan barisan, dengan hasil disimpan sebagai CSV. Pesanan boleh datang daripada fail CSV. Sel robot boleh disemak dan dieksport. Pautan PLC mempunyai mod lembut dan mod sebenar melalui Modbus TCP, yang hanya berfungsi dalam CadCraft Studio.
- **Kembar digital.** Membaca susun atur Aliran bahan dan menjalankan PLC lembut padanya, dengan kerosakan yang boleh dipaksa, ujian stok, perbandingan susun atur dan senarai bahan.
- **Lantai kilang.** Menukar stesen kepada mesin dan sel, membacanya secara langsung atau daripada simulator, dan menyimpan barisan kerja serta OEE ringkas. Ia hanya membaca: binaan ini tidak boleh menulis kepada mesin atau PLC.

### Permukaan, model dan lukisan

- **Fillet, penebalan dan boolean pada NURBS.** Panel {{ui:Permukaan}} mempunyai {{ui:Fillet antara muka}}, {{ui:Fillet beberapa tepi}}, {{ui:Tebalkan menjadi pepejal}} dan Union, Subtract dan Intersect, setiap satu dengan sisihan yang diukur. Lihat [Permukaan bentuk bebas (NURBS)](topic:nurbs-surfaces).
- **Padankan permukaan dengan imbasan.** Pilih mesh yang diimbas dan gunakan {{ui:Padankan permukaan dengan imbasan}} dalam kumpulan **Imbasan**, kemudian {{ui:Jahit permukaan menjadi pepejal}}. Ini ialah padanan pertama, bukan pakej kejuruteraan terbalik yang lengkap.
- **Pautan langsung daripada pemodel .3dm.** Sehala, dari Rhino 8 atau Grasshopper, dan ia memerlukan CadCraft Studio pada komputer yang sama. Lihat [Simpan model .3dm secara langsung](topic:live-3dm-link).
- **Lihat model di tapak.** {{ui:Pandangan di tapak (AR, telefon)}} dalam menu {{ui:Pandangan}} berfungsi pada telefon Android dengan Chrome. Lihat [Lihat model di tapak dengan telefon Android (AR)](topic:ar-on-site).
- **Kaedah lengkok.** Senarai juntai {{ui:Kaedah lengkok}} menawarkan sepuluh cara untuk melukis lengkok, termasuk {{ui:3-Point}} dan {{ui:Mula, Pusat, Hujung}}.
- **Lebih banyak unit.** Berat (kg, lb, t, ton) dan suhu (darjah C, F, K dan R) difahami di tempat anda menaip nilai dengan unit.

## Dalam setiap aplikasi

- **Tip alat.** Teks apabila tuding pada butang dan label yang terpotong ialah tip alat Bootstrap.
- **Kad tip mula boleh ditutup.** Kad tip pada kawasan lukisan kosong mempunyai butang tutup x kecil. Ia kekal tertutup, dan palet arahan boleh memaparkannya semula.
- **Jalur tab boleh skrol.** Jalur tab panel yang tidak muat akan diskrol dan tidak dipotong.
- **Tajuk tab.** Dengan dokumen dibuka, tab pelayar bermula dengan nama dokumen, kemudian ModelCraft dan CadCraft. Titik muncul dahulu selagi belum disimpan.
- **Susun atur.** {{ui:Tetapan}} › {{ui:Umum}} › Susun atur menyimpan susun atur dalam senarai juntai, dengan pilihan untuk menggunakan susun atur bagi aplikasi ini sahaja dan butang untuk menetapkan semula susun atur.
- **Bahasa.** Senarai bahasa dalam Tetapan mengikut fail bahasa yang terdapat dalam binaan. Bahasa selain Inggeris ialah draf mesin.
- **Live dan Pustaka.** Live TeamWork menunjukkan kursor dan nama secara langsung, dan koleksi Pustaka memberi setiap aplikasi koleksi lalai.

## Diperbetulkan

- {{ui:Main}} bertukar menjadi {{ui:Jeda}} semasa animasi dimainkan, dan {{key:Space}} memainkan dan menjeda semasa garis masa dibuka.
- Render gambar pegun kembali kepada WebGL apabila kad grafik tidak dapat memulakan path tracer. Paparan render langsung mungkin masih menunjukkan ralat; ini tidak diuji pada mesin Windows dengan pemacu tersebut.
- Mod sebenar Aliran bahan bersambung semula selepas pautan tamat pada jawapan pengecualian PLC.

## Had yang jujur

- Tiada apa yang telah dicetak pada pencetak sebenar: bukan filamen, bukan resin, bukan melalui Bambu Connect. Fail resin hanya dibaca semula oleh pembaca CadCraft sendiri.
- Kembar digital dan Lantai kilang diuji hanya dengan simulator dan jawapan yang diketahui, tanpa PLC, talian atau protokol sebenar. Ia alat semakan, bukan pengesahan keselamatan. Fizik hanya meliputi kotak, sehingga lapan beban.
- Pautan Rhino dan Grasshopper tidak pernah berjalan dalam program sebenar.
- Bahasa bukan Inggeris ialah draf mesin.

## Terdahulu: 0.8 dan 0.8.1

Ini ialah perkara yang berubah dalam ModelCraft 0.8 (2026-11-01) dan 0.8.1 (2026-11-02), berbanding 0.7. Dialog {{ui:Render imej…}} kini boleh menghantar adegan ke program lain, panel Permukaan menghasilkan permukaan bentuk bebas yang licin, dan pembantu yang anda sambungkan boleh menetapkan keseluruhan adegan daripada satu ayat.

### Baharu

**Rendering**

- **Pilihan Enjin.** {{ui:Render imej…}} mempunyai senarai **Enjin** di atas Mod. Enjin kami sendiri, Pantas dan Path tracer, ialah lalai dan berfungsi di mana-mana. Entri lain menyimpan adegan sebagai pakej (model sebagai fail USD, serta fail tetapan dengan nilai bahan yang tepat, lampu yang dihidupkan, matahari, langit, pendedahan dan kamera) untuk dibawa ke program lain. Gambar yang dilukis oleh program lain menyatakan program dan versi yang menghasilkannya. Lihat [Pilih program yang melukis gambar](topic:render-engines).
- **Buka dalam program lain.** Senarai Enjin boleh menyimpan adegan sebagai fail USD, fail glTF (`.glb`) atau folder projek Unreal (`.zip`), dalam pelayar dan dalam CadCraft Studio. Dalam Studio ia juga boleh memulakan usdview atau program komputer untuk fail itu. Lihat [Buka adegan dalam program lain](topic:render-open-in).
- **Hantar ke enjin permainan dari Studio.** Studio menulis adegan ke dalam projek Unreal Engine dan menyimpannya seiring pada setiap penghantaran, sehala sahaja. Suntingan anda sendiri berada dalam lapisan yang tidak pernah ditulis oleh CadCraft. Lihat [Hantar adegan ke enjin permainan](topic:render-unreal).
- **Enjin daripada add-on.** Add-on boleh menambah enjin pada senarai. Yang ditulis dalam JavaScript melukis dalam pelayar dan dalam Studio; yang menjalankan program memerlukan persetujuan anda dalam Studio. Lihat [Lukis gambar dengan program lain](topic:render-other-program) dan [Tambah enjin render dengan add-on](topic:render-engine-addons).
- **Katakan adegan.** Beritahu pembantu yang disambungkan anda "senja, hujan renyai, pokok musim luruh, orang di dataran" dan ModelCraft menyediakannya dalam satu langkah: matahari bergerak mengikut tarikh dan masa supaya bayang-bayang mengikutinya, langit berubah, permukaan basah muncul, dan pokok serta orang diletakkan sebagai objek sebenar pada tag yang boleh anda sembunyikan, alihkan atau padam. Waktu siang, tarikh atau musim, dan cuaca (cerah, mendung, kabus, hujan renyai, hujan, ribut) juga berfungsi secara bersendirian, dan permintaan kemudian akan menukar adegan yang sama. Kabus ditunjukkan dalam gambar berkualiti tinggi pada kad grafik; enjin lain menunjukkan langit, cahaya dan permukaan basah. Hujan tidak dilukis sebagai garisan jatuh.

**Bahan**

- **Bahan daripada satu foto.** Berikan ModelCraft foto permukaan (dinding, lantai, batu) dan ia menghasilkan bahan jubin: pencahayaan merentasi foto diratakan, tepi dijadikan bercantum, dan peta warna, peta kekasaran serta peta normal dikira daripada gambar. Ini ialah pemprosesan imej biasa pada foto anda sendiri, tanpa model terlatih. Kekasaran ialah anggaran. Foto yang rata, persegi dan lurus ke hadapan memberikan jubin terbaik; corak kuat seperti bata boleh menunjukkan bayang lembut di tempat sambungan dicampur.

**Permukaan**

- **Permukaan bentuk bebas.** Panel {{ui:Permukaan}} menghasilkan lengkung dan permukaan NURBS tanpa dipotong: lengkung melalui titik, loft, ruled, extrude, revolve, sweep sepanjang satu atau dua rel, permukaan daripada rangkaian lengkung, tampalan daripada empat tepi, padanan dan adunan. Setiap tepi yang dikongsi diukur sebagai G0, G1 atau G2 (jurang, sudut, lonjakan kelengkungan) pada permukaan tepat, dan tepi yang lebih teruk daripada yang anda minta muncul dalam panel Masalah dengan pembetulan **Padan**. Jalur zebra dan warna kelengkungan dilukis daripada permukaan tepat. Fail STEP dan IGES boleh dikeluarkan dan diimport. Lihat [Permukaan bentuk bebas (NURBS)](topic:nurbs-surfaces).

**Tapak dan bilik**

- **Foto lakaran ke tanah.** {{ui:Fail}} › {{ui:Import foto lakaran…}} menukar foto telefon lakaran tangan kepada tepi di atas tanah pada skala yang anda nyatakan: satu kumpulan, dengan tag untuk setiap warna pen. Kertas dikesan dan diluruskan pada komputer anda dan tiada apa dihantar ke mana-mana. Lihat [Model pada pelan tapak](topic:site-plan).
- **Hiaskan bilik.** Pilih lantai dan gunakan {{ui:Susun}} › {{ui:Hiaskan bilik…}}. Perabot bilik tidur, ruang tamu, ruang makan, dapur, bilik air atau pejabat diletakkan mengikut peraturan, merapati dinding dan jauh daripada pintu serta tingkap, dalam satu kumpulan yang boleh diambil sekali langkah. Ia ialah susun atur lalai untuk anda semak, bukan reka bentuk. Lihat [Pustaka permulaan](topic:starter).

**Cetakan 3D**

- **Potongan condong.** Pisah untuk cetakan boleh mencondongkan potongannya sehingga 60 darjah, yang memberikan kepingan lebih banyak ruang gam. Penyambung berdiri tegak kepada potongan. Lihat [Pisahkan model untuk cetakan](topic:print-split).
- **Semakan cetakan dalam Masalah.** Dapatan semakan cetakan 3D muncul dalam panel Masalah dengan penanda pada model, dan Baiki membetulkannya dari situ. Lihat [Sokongan, ketebalan dinding, pengosongan dan pembaikan](topic:print-tools).

**Dalam setiap aplikasi**

- **Bahasa.** Bantuan dan aplikasi tersedia dalam 54 bahasa. Sepuluh baharu: Lithuania, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipino, Swahili dan Uzbek. Bahasa selain Inggeris ialah draf mesin sehingga penutur asli membacanya, dan topik bantuan mungkin masih dalam Inggeris.
- **Peranti input.** Pad jejak, pen, tetikus 3D, pengawal permainan dan kawalan MIDI boleh menggerakkan aplikasi, untuk semuanya atau untuk satu.
- **Baris bar alat.** {{ui:Tetapan}} › {{ui:Umum}} › Baris bar alat menetapkan Balut (seperti sebelum ini), 2 baris atau 1 baris. Bar yang tidak muat akan diskrol ke sisi dan tidak mengambil ruang daripada lukisan. Balut kekal sebagai lalai.
- **Grid sifat.** Medan lampu ModelCraft menggunakan grid kongsi: kategori yang boleh dilipat, lajur label dan nilai, serta ketumpatan Padat. Pengiraan yang ditaip seperti `2*450` terus berfungsi.
- **Masalah.** Panel Masalah (butang amaran dalam bar aplikasi) dikongsi oleh semua aplikasi. Dalam ModelCraft ia memuatkan semakan cetakan dan amaran kesinambungan permukaan.
- **Live.** Sesi Live TeamWork menunjukkan siapa berada di mana. Lihat [Model bersama dengan Live TeamWork](topic:work-live).
- **Add-on.** Add-on boleh menambah enjin render, seperti di atas.
- **Sambungkan AI anda.** Kontrak alat dan semakan lapan aplikasi lulus, dengan 454 alat secara keseluruhan. Sambungan satu klik dalam Studio, penyambung hos untuk pembantu pelayar, kunci anda sendiri dalam Studio dan pakej yang diterbitkan belum dijanjikan. Aplikasi tidak mengandungi AI sendiri. Lihat [Gunakan ModelCraft dengan pembantu AI](topic:use-with-ai-assistants).

### Diperbetulkan dalam 0.8.1

- **Bahagian kelas DWG.** Bahagian kelas fail DWG dibaca sebagai jenis yang salah, yang boleh merosakkan fail semasa import. Ia kini dibaca dengan betul, dalam ModelCraft dan dalam aplikasi lain yang membaca DWG.
- **Tablet dalam potret.** Ruang grid yang berlebihan diberikan kepada kanvas, dan susun atur helaian bermula pada 760 piksel lebar atau kurang. Helaian gaya ModelCraft turut mempunyai perubahan ini.
- **Bahasa dalam Studio.** CadCraft Studio dan edisi berpakej boleh menukar bahasa semasa berjalan; sebelum ini hanya Inggeris. Ini belum diuji pada setiap platform: beritahu kami jika bahasa tidak berubah.

### Belum ada dalam versi ini

- **Tidak ditandatangani kod.** Windows mungkin menunjukkan SmartScreen: pilih {{ui:Maklumat lanjut}}, kemudian {{ui:Tetap jalankan}}. Pada Mac, klik kanan dan pilih {{ui:Buka}}. Binaan Store ditangguhkan, dan binaan iPad dan iPhone tidak dibina semula untuk 0.8.1.
- Program lain melukis gambar tanpa add-on enjin render, kamera panorama atau stereo, dan gambar langit melalui program lain, serta pemalam yang membuka pentas Unreal belum ada. Fail ditulis; pemalam belum dikeluarkan dan belum dijalankan dalam Unreal.
- Permukaan bentuk bebas: G3 dan kelas A tidak diukur atau didakwa, dan pemangkasan serta pepejal akan datang kemudian.
- Gambar daripada program lain tidak sama piksel demi piksel dengan kami: hanya kamera, matahari, lampu dan pendedahan yang sepadan.
- Pembetulan 0.8.1 untuk pertukaran bahasa dalam Studio belum diuji pada setiap platform.

Semua yang lain ada dalam [Belum dibina](topic:not-built-yet). Untuk keluaran sebelumnya, lihat [Perkara baharu dalam 0.7](topic:whats-new-0-7).
