---
title: Perkara baharu dalam 0.8 dan 0.8.1
summary: Pilihan enjin render dengan fail untuk program lain, permukaan bebas bentuk NURBS dengan kesinambungan yang diukur, adegan yang anda terangkan kepada pembantu anda, bahan yang dibuat daripada satu foto, foto lakaran ke atas tanah, bilik yang dihiasi, potongan serong untuk cetakan 3D, dan semakan cetakan dalam panel Masalah.
keywords: perkara baharu, what's new, nota keluaran, catatan perubahan, perubahan, 0.8, 0.8.1, versi, ciri baharu, enjin render, enjin, buka dalam, usd, gltf, unreal, enjin add-on, nurbs, permukaan, loft, sweep, kesinambungan, g0, g1, g2, zebra, step, iges, nyatakan adegan, adegan, cuaca, waktu hari, musim, pembantu, bahan daripada foto, foto, foto lakaran, hiaskan, hiaskan bilik, serong, potongan serong, pisah, semakan cetakan, masalah, grid sifat, lampu, bahasa, peranti input, baris bar alat, dwg, live
from: e4989b17
---

Inilah yang berubah dalam ModelCraft 0.8 (2026-11-01) dan 0.8.1 (2026-11-02), berbanding 0.7. Kotak dialog {{ui:Render imej…}} kini boleh menghantar adegan ke program lain, panel Permukaan menghasilkan permukaan bebas bentuk yang licin, dan pembantu yang anda sambungkan boleh menetapkan keseluruhan adegan daripada satu ayat.

## Baharu

### Render

- **Pilihan enjin.** {{ui:Render imej…}} mempunyai senarai **Enjin** di atas Mod. Dua enjin kami sendiri, Pantas dan Path tracer, ialah lalai dan berfungsi di mana-mana sahaja. Entri lain menyimpan adegan sebagai pakej (model sebagai fail USD, serta fail tetapan dengan nilai bahan yang tepat, lampu yang dihidupkan, matahari, langit, pendedahan dan kamera) untuk dibawa ke program lain. Imej yang dilukis oleh program lain menyatakan program dan versi yang menghasilkannya. Lihat [Pilih program yang melukis imej](topic:render-engines).
- **Buka dalam program lain.** Senarai Enjin boleh menyimpan adegan sebagai fail USD, fail glTF (`.glb`) atau folder projek Unreal (`.zip`), dalam pelayar dan dalam CadCraft Studio. Dalam Studio, ia juga boleh memulakan usdview atau program komputer untuk fail tersebut. Lihat [Buka adegan dalam program lain](topic:render-open-in).
- **Hantar ke enjin permainan dari Studio.** Studio menulis adegan ke dalam projek Unreal Engine dan mengemas kininya setiap kali dihantar, satu hala sahaja. Suntingan anda sendiri disimpan dalam lapisan yang CadCraft tidak pernah tulis. Lihat [Hantar adegan ke enjin permainan](topic:render-unreal).
- **Enjin daripada add-on.** Add-on boleh menambah enjin pada senarai. Yang ditulis dalam JavaScript melukis dalam pelayar dan dalam Studio; yang menjalankan program memerlukan persetujuan anda dalam Studio. Lihat [Lukis imej dengan program lain](topic:render-other-program) dan [Tambah enjin render dengan add-on](topic:render-engine-addons).
- **Nyatakan adegan.** Beritahu pembantu anda yang disambungkan "senja, hujan renyai, pokok musim luruh, orang di dataran" dan ModelCraft menyediakannya dalam satu langkah: matahari bergerak mengikut tarikh dan masa supaya bayang-bayang mengikutinya, langit berubah, permukaan basah muncul, dan pokok serta orang diletakkan sebagai objek sebenar pada tag yang boleh anda sembunyikan, alih atau padam. Waktu hari, tarikh atau musim, dan cuaca (cerah, mendung, kabus, hujan renyai, hujan, ribut) juga berfungsi secara berasingan, dan permintaan kemudian menukar adegan yang sama. Kabus ditunjukkan dalam imej berkualiti tinggi pada kad grafik; enjin lain menunjukkan langit, cahaya dan permukaan basah. Hujan tidak dilukis sebagai garisan jatuh.

### Bahan

- **Bahan daripada satu foto.** Berikan ModelCraft foto permukaan (dinding, lantai, batu) dan ia menghasilkan bahan jubin: pencahayaan merentasi foto diratakan, tepinya dibuat supaya bercantum, dan peta warna, peta kekasaran serta peta normal dikira daripada gambar itu. Ia pemprosesan imej biasa pada foto anda sendiri, tanpa model terlatih. Kekasaran ialah anggaran. Foto yang biasa, persegi dan lurus ke hadapan memberikan jubin terbaik; corak kuat seperti bata boleh menunjukkan bayang kabur yang lembut di tempat sambungan dicampur.

### Permukaan

- **Permukaan bebas bentuk.** Panel {{ui:Permukaan}} menghasilkan lengkung dan permukaan NURBS yang tidak dipangkas: lengkung melalui titik, loft, ruled, ekstrud, putar, sweep sepanjang satu atau dua rel, permukaan daripada rangkaian lengkung, tampalan daripada empat tepi, padan dan adun. Setiap tepi dikongsi diukur sebagai G0, G1 atau G2 (jurang, sudut, lompatan kelengkungan) pada permukaan yang tepat, dan tepi yang lebih teruk daripada yang anda minta muncul dalam panel Masalah dengan pembetulan **Padankan**. Jalur zebra dan warna kelengkungan dilukis daripada permukaan yang tepat. Fail STEP dan IGES boleh dihantar keluar dan dimasukkan. Lihat [Permukaan bebas bentuk (NURBS)](topic:nurbs-surfaces).

### Tapak dan bilik

- **Foto lakaran ke atas tanah.** {{ui:Fail}} › {{ui:Import foto lakaran…}} menukar foto telefon lakaran tangan kepada tepi di atas tanah pada skala yang anda nyatakan: satu kumpulan, dengan tag bagi setiap warna pen. Kertas dikesan dan diluruskan pada komputer anda dan tiada apa-apa dihantar ke mana-mana. Lihat [Model pada pelan tapak](topic:site-plan).
- **Hiaskan bilik.** Pilih lantai dan gunakan {{ui:Susun}} › {{ui:Hiaskan bilik…}}. Perabot bilik tidur, ruang tamu, bilik makan, dapur, bilik air atau pejabat diletakkan mengikut peraturan, di sepanjang dinding dan jauh daripada pintu serta tingkap, dalam satu kumpulan yang boleh anda alih keluar dalam satu langkah. Ia susun atur lalai untuk anda semak, bukan reka bentuk. Lihat [Pustaka permulaan](topic:starter).

### Cetakan 3D

- **Potongan serong.** Pisah untuk cetakan boleh mengerat potongannya serong sehingga 60 darjah, yang memberikan kawasan gam yang lebih luas pada kepingan. Penyambung berdiri tegak kepada potongan. Lihat [Pisah model untuk cetakan](topic:print-split).
- **Semakan cetakan dalam Masalah.** Dapatan semakan cetakan 3D muncul dalam panel Masalah dengan penanda pada model, dan Baiki membetulkannya dari situ. Lihat [Sokongan, ketebalan dinding, pengorekan dan pembaikan](topic:print-tools).

### Dalam setiap aplikasi

- **Bahasa.** Bantuan dan aplikasi tersedia dalam 54 bahasa. Sepuluh baharu: Lithuania, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipino, Swahili dan Uzbek. Bahasa selain Inggeris ialah draf mesin sehingga penutur asli telah menyemaknya, dan topik bantuan mungkin masih dalam Inggeris.
- **Peranti input.** Pad jejak, pen, tetikus 3D, pengawal permainan dan kawalan MIDI boleh mengendalikan aplikasi, sama ada untuk semuanya atau untuk satu sahaja.
- **Baris bar alat.** {{ui:Tetapan}} › {{ui:Umum}} › Baris bar alat menetapkan Balut (seperti sebelum ini), 2 baris atau 1 baris. Bar yang tidak muat akan skrol ke sisi dan tidak mengambil ruang daripada lukisan. Balut kekal sebagai lalai.
- **Grid sifat.** Medan lampu ModelCraft menggunakan grid yang dikongsi: kategori yang boleh dilipat, lajur label dan nilai, dan ketumpatan Padat. Pengiraan yang ditaip seperti `2*450` terus berfungsi.
- **Masalah.** Panel Masalah (butang amaran dalam bar aplikasi) dikongsi oleh semua aplikasi. Dalam ModelCraft ia mengandungi semakan cetakan dan amaran kesinambungan permukaan.
- **Live.** Sesi Live TeamWork menunjukkan siapa berada di mana. Lihat [Model bersama Live TeamWork](topic:work-live).
- **Add-on.** Add-on boleh menambah enjin render, seperti di atas.
- **Sambung AI anda.** Kontrak alat dan semakan lapan aplikasi lulus, dengan 454 alat keseluruhan. Sambungan satu klik dalam Studio, penyambung dihoskan untuk pembantu pelayar, kunci anda sendiri dalam Studio dan pakej yang diterbitkan belum dijanjikan. Aplikasi tidak mempunyai AI sendiri. Lihat [Gunakan ModelCraft dengan pembantu AI](topic:use-with-ai-assistants).

## Dibetulkan dalam 0.8.1

- **Bahagian kelas DWG.** Bahagian kelas fail DWG dibaca sebagai jenis yang salah, yang boleh merosakkan fail semasa diimport. Ia kini dibaca dengan betul, dalam ModelCraft dan dalam aplikasi lain yang membaca DWG.
- **Tablet dalam potret.** Ruang grid yang berlebihan diberikan kepada kanvas, dan susun atur helaian bermula pada 760 piksel lebar atau kurang. Helaian gaya ModelCraft juga mempunyai perubahan ini.
- **Bahasa dalam Studio.** CadCraft Studio dan edisi dibungkus boleh menukar bahasa semasa berjalan; sebelum ini hanya Inggeris. Ini belum diuji pada setiap platform: beritahu kami jika bahasa tidak bertukar.

## Belum ada dalam versi ini

- **Tidak ditandatangani kod.** Windows mungkin menunjukkan SmartScreen: pilih {{ui:Maklumat lanjut}}, kemudian {{ui:Tetap jalankan}}. Pada Mac, klik kanan dan pilih {{ui:Buka}}. Binaan Store ditangguhkan, dan binaan iPad dan iPhone tidak dibina semula untuk 0.8.1.
- Program lain melukis imej tanpa add-on enjin render, kamera panorama atau stereo, dan gambar langit melalui program lain, serta plug-in yang membuka pentas Unreal, belum ada. Fail sudah ditulis; plug-in belum dikeluarkan dan belum dijalankan dalam Unreal.
- Permukaan bebas bentuk: G3 dan kelas A tidak diukur atau didakwa, dan pemangkasan serta pepejal akan datang kemudian.
- Imej daripada program lain tidak sama piksel demi piksel dengan kami: hanya kamera, matahari, lampu dan pendedahan yang sepadan.
- Pembetulan 0.8.1 untuk pertukaran bahasa dalam Studio belum diuji pada setiap platform.

Yang lain terdapat dalam [Belum dibina](topic:not-built-yet). Untuk keluaran sebelumnya, lihat [Perkara baharu dalam 0.7](topic:whats-new-0-7).
