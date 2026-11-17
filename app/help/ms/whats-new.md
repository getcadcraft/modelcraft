---
title: Perkara baharu dalam 0.9
summary: Peringkat cetakan dengan pemotong sendiri dan penghantaran melalui USB, Klipper, OctoPrint dan PrusaLink, pemotongan resin dan add-on fail, aliran bahan, add-on kembar digital dan lantai kilang, fillet NURBS, penebalan dan padanan imbasan, AR di tapak dan sepuluh kaedah lengkok.
keywords: perkara baharu, what's new, nota keluaran, senarai perubahan, 0.9, peringkat cetakan, cetakan 3d, hantar ke pencetak 3d, pemotong, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, resin, cetakan resin, goo, sl1, ctb, anycubic, ujian pendedahan, aliran bahan, kembar digital, lantai kilang, plc, penghantar, nurbs, fillet, tebal, padanan imbasan, ar, di tapak, kaedah lengkok, unit, perkara baharu, what's new, nota keluaran, senarai perubahan, 0.8, 0.8.1, versi, ciri baharu, enjin render, enjin, buka dalam, usd, gltf, unreal, enjin add-on, permukaan, loft, sweep, kesinambungan, g0, g1, g2, zebra, step, iges, katakan adegan, adegan, cuaca, waktu, musim, pembantu, bahan daripada foto, foto, foto lakaran, hiaskan, hiaskan bilik, condong, potongan condong, belah, semakan cetakan, masalah, grid sifat, lampu, bahasa, peranti input, baris bar alat, dwg, langsung
from: 169048a2
---

Ini ialah perubahan dalam ModelCraft 0.9, berbanding 0.8.1. ModelCraft kini sampai ke pencetak dan lantai kilang: anda boleh meletakkan barang pada katil cetakan dan menghantarnya tanpa mengeksport, memotong untuk filamen atau resin, dan menyusun talian pengendalian bahan. Ini ialah CadCraft Studio 0.9 dan lapan aplikasinya; kebanyakan ciri baharu di bawah ialah add-on.

## Baharu

### Cetakan 3D

- **Peringkat cetakan.** Klik {{ui:Peringkat cetakan}} pada bar alat. Tambah item Pustaka ke katil pencetak, susunkannya, lihat lapisan yang telah dipotong, dan tekan {{ui:Hantar ke pencetak 3D}}, tanpa perlu mengeksport STL. Ia tergolong dalam add-on Cetakan 3D, yang dihidupkan secara lalai dan boleh dibuang seperti mana-mana add-on. Lihat [Letakkan barang pada katil cetakan dan hantarnya ke pencetak](topic:print-stage).
- **Pemotong filamen sendiri.** {{ui:CadCraft basic (disertakan, paling pantas)}} ialah pemotong dalam senarai **Pemotong** pada kad itu: dinding, kulit, isian, sokongan dan skirt, pada pekerja supaya halaman kekal boleh digunakan. {{ui:Pratonton lapisan}} dengan gelangsar **Lapisan** menunjukkan lapisan sebelum anda menghantar. Profil pencetak seperti gaya Ender-3 dan Prusa MK4 membawa G-code permulaan mereka sendiri.
- **Penghantaran.** Melalui USB (Chrome atau Edge pada komputer, dengan halaman dibiarkan terbuka), atau ke Klipper (Moonraker), OctoPrint atau PrusaLink pada rangkaian anda. Tiada apa yang bersambung atau dihantar tanpa klik, dan penghantaran akan bertanya dahulu.
- **Pemotong lain.** Kiri:Moto, PrusaSlicer dan OrcaSlicer ialah add-on tersendiri, dimatikan secara lalai; tambahkannya dari kad itu atau dari {{ui:Tetapan}} › {{ui:Add-on}}. PrusaSlicer dan OrcaSlicer menggunakan salinan yang anda pasang sendiri dari CadCraft Studio. Add-on pencetak Bambu Lab memotong dengan OrcaSlicer anda dan pratetap P2S-nya, dan memerlukan Studio pada komputer.
- **Cetakan resin.** Add-on resin (dimatikan secara lalai) membuat gambar lapisan untuk skrin pencetak anda, dengan berongga dan lubang udara, rakit dan sokongan, pratonton lapisan, serta masa, resin dan kos. Add-on format fail menulis Elegoo GOO, SL1, Chitubox (CBDDLP dan CTB 2 hingga 5) dan Anycubic (PWMX dan PWS). Ujian pendedahan resin membuat tangga lima pendedahan. Lihat [Potong untuk pencetak resin](topic:resin-printing).
- **Tidak berubah.** {{ui:Eksport}} › {{ui:Semak untuk cetakan 3D (STL atau 3MF)…}}, alat cetakan dan Belah untuk cetakan berfungsi seperti dalam 0.8. Lihat [Sediakan model untuk cetakan 3D](topic:print-3d).

### Aliran bahan, Kembar digital dan Lantai kilang

Ketiga-tiganya ialah add-on, tidak aktif sehingga anda menghidupkannya dalam {{ui:Tetapan}} › {{ui:Add-on}}, dan setiap satu mempunyai bantuannya sendiri apabila ia dihidupkan.

- **Aliran bahan.** Panel bernama Aliran bahan menyusun penghantar, stesen, penimbal dan laluan AGV dalam paparan 3D, menjalankan simulasi berbenih, memainkannya semula, dan menunjukkan daya pemprosesan, masa pendahuluan dan barisan, dengan hasil disimpan sebagai CSV. Pesanan boleh datang daripada fail CSV. Sel robot boleh disemak dan dieksport. Pautan PLC mempunyai mod lembut dan mod sebenar melalui Modbus TCP, yang hanya berfungsi dalam CadCraft Studio.
- **Kembar digital.** Membaca susun atur Aliran bahan dan menjalankan PLC lembut di atasnya, dengan kerosakan yang boleh anda paksa, ujian stok, perbandingan susun atur dan senarai bahan.
- **Lantai kilang.** Menukar stesen kepada mesin dan sel, membacanya secara langsung atau daripada simulator, serta mengekalkan barisan kerja dan OEE yang ringkas. Ia hanya membaca: binaan ini tidak boleh menulis kepada mesin atau PLC.

### Permukaan, model dan lukisan

- **Fillet, penebalan dan boolean pada NURBS.** Panel {{ui:Permukaan}} mempunyai {{ui:Fillet antara muka}}, {{ui:Fillet beberapa tepi}}, {{ui:Tebalkan menjadi pepejal}} dan Gabung, Tolak dan Persilang, setiap satu dengan sisihan yang diukur. Lihat [Permukaan bentuk bebas (NURBS)](topic:nurbs-surfaces).
- **Padankan permukaan dengan imbasan.** Pilih jejaring yang diimbas dan gunakan {{ui:Padankan permukaan dengan imbasan}} dalam kumpulan **Imbasan**, kemudian {{ui:Jahit permukaan menjadi pepejal}}. Ia ialah padanan pertama, bukan pakej kejuruteraan terbalik yang lengkap.
- **Pautan langsung dari pemodel .3dm.** Sehala, dari Rhino 8 atau Grasshopper, dan ia memerlukan CadCraft Studio pada komputer yang sama. Lihat [Simpan model .3dm langsung](topic:live-3dm-link).
- **Lihat model di tapak.** {{ui:Pandangan di tapak (AR, telefon)}} dalam menu {{ui:Pandangan}} berfungsi pada telefon Android dengan Chrome. Lihat [Lihat model di tapak dengan telefon Android (AR)](topic:ar-on-site).
- **Kaedah lengkok.** Senarai juntai {{ui:Kaedah lengkok}} menawarkan sepuluh cara untuk melukis lengkok, termasuk {{ui:3-Point}} dan {{ui:Mula, Pusat, Hujung}}.
- **Lebih banyak unit.** Berat (kg, lb, t, ton) dan suhu (darjah C, F, K dan R) difahami di tempat anda menaip nilai dengan unit.

## Dalam setiap aplikasi

- **Tip alat.** Teks apabila menuding pada butang dan label yang terpotong ialah tip alat Bootstrap.
- **Kad tip mula yang boleh ditutup.** Kad tip pada kawasan lukisan yang kosong mempunyai x tutup yang kecil. Ia kekal tertutup, dan palet arahan boleh memaparkannya semula.
- **Bar tab yang boleh digulung.** Bar tab panel yang tidak muat akan digulung dan bukannya terpotong.
- **Tajuk tab.** Dengan dokumen dibuka, tab pelayar bermula dengan nama dokumen, kemudian ModelCraft dan CadCraft. Titik muncul dahulu apabila ia belum disimpan.
- **Susun atur.** {{ui:Tetapan}} › {{ui:Umum}} › Susun atur menyimpan susun atur dalam senarai juntai, dengan pilihan untuk menggunakan susun atur untuk aplikasi ini sahaja dan butang untuk menetapkan semula susun atur.
- **Bahasa.** Senarai bahasa dalam Tetapan mengikut fail bahasa yang ada dalam binaan. Bahasa selain Inggeris ialah draf mesin.
- **Langsung dan Pustaka.** Live TeamWork menunjukkan kursor dan nama secara langsung, dan koleksi Pustaka memberi setiap aplikasi koleksi lalai.

## Diperbaiki

- {{ui:Main}} bertukar menjadi {{ui:Jeda}} semasa animasi dimainkan, dan {{key:Space}} memainkan dan menjeda semasa garis masa dibuka.
- Render pegun jatuh balik kepada WebGL apabila kad grafik tidak dapat memulakan penjejak laluan. Paparan render langsung mungkin masih menunjukkan ralat itu; ini belum diperiksa pada mesin Windows dengan pemacu tersebut.
- Mod sebenar aliran bahan bersambung semula selepas pautan terputus akibat jawapan pengecualian PLC.

## Had yang jujur

- Belum ada apa-apa yang dicetak pada pencetak sebenar: bukan filamen, bukan resin, bukan melalui Bambu Connect. Fail resin hanya dibaca semula oleh pembaca CadCraft sendiri.
- Kembar digital dan Lantai kilang hanya diuji dengan simulator dan jawapan yang diketahui, tanpa PLC, talian atau protokol sebenar. Ia ialah alat semakan, bukan pengesahan keselamatan. Fizik hanya meliputi kotak, sehingga lapan beban.
- Pautan Rhino dan Grasshopper belum pernah berjalan dalam program sebenar.
- Bahasa bukan Inggeris ialah draf mesin.

## Terdahulu: 0.8 dan 0.8.1

Ini ialah perubahan dalam ModelCraft 0.8 (2026-11-01) dan 0.8.1 (2026-11-02), berbanding 0.7. Dialog {{ui:Render imej…}} kini boleh menghantar adegan ke program lain, panel Permukaan membuat permukaan bentuk bebas yang licin, dan pembantu yang anda sambungkan boleh menetapkan keseluruhan adegan daripada satu ayat.

### Baharu

**Render**

- **Pilihan Enjin.** {{ui:Render imej…}} mempunyai senarai **Enjin** di atas Mod. Dua enjin kami sendiri, Pantas dan Penjejak laluan, ialah lalai dan berfungsi di mana-mana. Entri lain menyimpan adegan sebagai pakej (model sebagai fail USD, ditambah fail tetapan dengan nilai bahan yang tepat, lampu yang dihidupkan, matahari, langit, pendedahan dan kamera) untuk dibawa ke program lain. Gambar yang dilukis oleh program lain menyatakan program dan versi yang menghasilkannya. Lihat [Pilih program yang melukis gambar](topic:render-engines).
- **Buka dalam program lain.** Senarai Enjin boleh menyimpan adegan sebagai fail USD, fail glTF (`.glb`) atau folder projek Unreal (`.zip`), dalam pelayar dan dalam CadCraft Studio. Dalam Studio ia juga boleh memulakan usdview atau program komputer untuk fail itu. Lihat [Buka adegan dalam program lain](topic:render-open-in).
- **Hantar ke enjin permainan dari Studio.** Studio menulis adegan ke dalam projek Unreal Engine dan menyelarasnya pada setiap penghantaran, satu hala sahaja. Suntingan anda sendiri berada dalam lapisan yang tidak pernah ditulis oleh CadCraft. Lihat [Hantar adegan ke enjin permainan](topic:render-unreal).
- **Enjin daripada add-on.** Add-on boleh menambah enjin pada senarai. Yang ditulis dalam JavaScript melukis dalam pelayar dan dalam Studio; yang menjalankan program memerlukan persetujuan anda dalam Studio. Lihat [Lukis gambar dengan program lain](topic:render-other-program) dan [Tambah enjin render dengan add-on](topic:render-engine-addons).
- **Katakan adegan.** Beritahu pembantu yang disambungkan "senja, hujan renyai, pokok musim luruh, orang di dataran" dan ModelCraft menyediakannya dalam satu langkah: matahari beralih mengikut tarikh dan masa supaya bayang mengikuti, langit berubah, permukaan basah muncul, dan pokok serta orang diletakkan sebagai objek sebenar pada tag yang boleh anda sembunyikan, alihkan atau padam. Waktu siang, tarikh atau musim, dan cuaca (cerah, mendung, kabus, hujan renyai, hujan, ribut) juga berfungsi sendiri, dan permintaan kemudian mengubah adegan yang sama. Kabus kelihatan dalam gambar kualiti tinggi pada kad grafik; enjin lain menunjukkan langit, cahaya dan permukaan basah. Hujan tidak dilukis sebagai garisan yang jatuh.

**Bahan**

- **Bahan daripada satu foto.** Berikan ModelCraft foto permukaan (dinding, lantai, batu) dan ia membuat bahan jubin: pencahayaan merentasi foto diratakan, tepinya dibuat untuk bercantum, dan peta warna, peta kekasaran serta peta normal dikira daripada gambar itu. Ia pemprosesan imej biasa pada gambar anda sendiri, tanpa model terlatih. Kekasaran ialah anggaran. Foto yang rata, persegi dan lurus ke hadapan memberikan jubin terbaik; corak yang kuat seperti bata boleh menunjukkan bayang lembut di tempat cantuman dicampurkan.

**Permukaan**

- **Permukaan bentuk bebas.** Panel {{ui:Permukaan}} membuat lengkung NURBS dan permukaan tanpa pemangkasan: lengkung melalui titik, loft, berkaitan (ruled), extrude, revolve, sapuan sepanjang satu atau dua rel, permukaan daripada rangkaian lengkung, tampalan daripada empat tepi, padan dan adun. Setiap tepi kongsi diukur sebagai G0, G1 atau G2 (jurang, sudut, lompatan kelengkungan) pada permukaan tepat, dan tepi yang lebih teruk daripada yang anda minta muncul dalam panel Masalah dengan pembetulan **Padan**. Jalur zebra dan warna kelengkungan dilukis daripada permukaan tepat. Fail STEP dan IGES keluar dan masuk. Lihat [Permukaan bentuk bebas (NURBS)](topic:nurbs-surfaces).

**Tapak dan bilik**

- **Foto lakaran ke tanah.** {{ui:Fail}} › {{ui:Import foto lakaran…}} menukar foto telefon lakaran tangan menjadi tepi di atas tanah pada skala yang anda nyatakan: satu kumpulan, dengan tag untuk setiap warna pen. Kertas dikesan dan diluruskan pada komputer anda, dan tiada apa dihantar ke mana-mana. Lihat [Modelkan pada pelan tapak](topic:site-plan).
- **Hiaskan bilik.** Pilih lantai dan gunakan {{ui:Susun}} › {{ui:Hiaskan bilik…}}. Perabot bilik tidur, ruang tamu, ruang makan, dapur, bilik air atau pejabat diletakkan mengikut peraturan, merapati dinding dan jauh dari pintu serta tingkap, dalam satu kumpulan yang boleh dibuang dalam satu langkah. Ia ialah susun atur lalai untuk anda semak, bukan reka bentuk. Lihat [Pustaka permulaan](topic:starter).

**Cetakan 3D**

- **Potongan condong.** Belah untuk cetakan boleh condongkan potongannya sehingga 60 darjah, yang memberikan bahagian lebih ruang untuk digam. Penyambung berdiri tegak pada potongan. Lihat [Belah model untuk cetakan](topic:print-split).
- **Semakan cetakan dalam Masalah.** Penemuan semakan cetakan 3D muncul dalam panel Masalah dengan penanda pada model, dan Baiki membetulkannya dari situ. Lihat [Sokongan, ketebalan dinding, pengosongan dan pembaikan](topic:print-tools).

**Dalam setiap aplikasi**

- **Bahasa.** Bantuan dan aplikasi tersedia dalam 54 bahasa. Sepuluh baharu: Lithuania, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipino, Swahili dan Uzbek. Bahasa selain Inggeris ialah draf mesin sehingga penutur asli menyemaknya, dan topik bantuan mungkin masih dalam bahasa Inggeris.
- **Peranti input.** Pad sentuh, pen, tetikus 3D, alat kawalan permainan dan kawalan MIDI boleh mengawal aplikasi, untuk semuanya atau untuk satu sahaja.
- **Baris bar alat.** {{ui:Tetapan}} › {{ui:Umum}} › Baris bar alat menetapkan Balut (seperti sebelum ini), 2 baris atau 1 baris. Bar yang tidak muat akan bergerak ke sisi dan bukannya mengambil ruang daripada lukisan. Balut kekal sebagai lalai.
- **Grid sifat.** Medan lampu ModelCraft menggunakan grid kongsi: kategori yang boleh dilipat, lajur label dan nilai, serta ketumpatan Padat. Pengiraan yang ditaip seperti `2*450` terus berfungsi.
- **Masalah.** Panel Masalah (butang amaran pada bar aplikasi) dikongsi oleh semua aplikasi. Dalam ModelCraft ia memegang semakan cetakan dan amaran kesinambungan permukaan.
- **Langsung.** Sesi Live TeamWork menunjukkan siapa berada di mana. Lihat [Model bersama Live TeamWork](topic:work-live).
- **Add-on.** Add-on boleh menambah enjin render, seperti di atas.
- **Sambungkan AI anda.** Kontrak alat dan semakan lapan aplikasi lulus, dengan 454 alat keseluruhannya. Sambungan satu klik dalam Studio, penyambung dihoskan untuk pembantu pelayar, kunci anda sendiri dalam Studio dan pakej yang diterbitkan belum dijanjikan. Aplikasi tidak mengandungi AI sendiri. Lihat [Guna ModelCraft dengan pembantu AI](topic:use-with-ai-assistants).

### Diperbaiki dalam 0.8.1

- **Bahagian kelas DWG.** Bahagian kelas fail DWG dibaca sebagai jenis yang salah, yang boleh merosakkan fail semasa import. Kini ia dibaca dengan betul, dalam ModelCraft dan dalam aplikasi lain yang membaca DWG.
- **Tablet dalam potret.** Ruang grid yang berlebihan diberikan kepada kanvas, dan susun atur lembaran bermula pada 760 piksel lebar atau kurang. Helaian gaya ModelCraft turut mempunyai perubahan ini.
- **Bahasa dalam Studio.** CadCraft Studio dan edisi terbungkus boleh menukar bahasa semasa berjalan; sebelum ini hanya Inggeris. Ini belum diuji pada setiap platform: beritahu kami jika bahasa tidak bertukar.

### Belum ada dalam versi ini

- **Tidak ditandatangani kod.** Windows mungkin menunjukkan SmartScreen: pilih {{ui:Maklumat lanjut}}, kemudian {{ui:Jalankan juga}}. Pada Mac, klik kanan dan pilih {{ui:Buka}}. Binaan kedai ditangguhkan, dan binaan iPad serta iPhone belum dibina semula untuk 0.8.1.
- Program lain melukis gambar tanpa add-on enjin render, kamera panorama atau stereo, serta gambar langit melalui program lain belum ada, begitu juga plug-in yang membuka pentas Unreal. Fail ditulis; plug-in belum dikeluarkan dan belum dijalankan dalam Unreal.
- Permukaan bentuk bebas: G3 dan kelas A tidak diukur atau didakwa, dan pemangkasan serta pepejal akan datang kemudian.
- Gambar daripada program lain tidak sama piksel demi piksel dengan kami: hanya kamera, matahari, lampu dan pendedahan yang sepadan.
- Pembetulan 0.8.1 untuk pertukaran bahasa dalam Studio belum diuji pada setiap platform.
