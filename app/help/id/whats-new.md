---
title: Yang baru di 0.8 dan 0.8.1
summary: Pilihan mesin render dengan file untuk program lain, permukaan bentuk bebas NURBS dengan kontinuitas yang diukur, adegan yang Anda jelaskan kepada asisten, material dari satu foto, foto sketsa ke tanah, ruang yang sudah dilengkapi furnitur, potongan miring untuk pencetakan 3D, dan pemeriksaan cetak di panel Masalah.
keywords: yang baru, what's new, catatan rilis, changelog, perubahan, 0.8, 0.8.1, versi, fitur baru, mesin render, mesin, buka di, usd, gltf, unreal, mesin add-on, nurbs, permukaan, loft, sweep, kontinuitas, g0, g1, g2, zebra, step, iges, jelaskan adegan, adegan, cuaca, waktu dalam sehari, musim, asisten, material dari foto, foto, foto sketsa, lengkapi, lengkapi ruang, furnitur, miring, potongan miring, pisah, pemeriksaan cetak, masalah, grid properti, lampu, bahasa, perangkat input, baris bilah alat, dwg, live
from: e4989b17
---

Ini yang berubah di ModelCraft 0.8 (2026-11-01) dan 0.8.1 (2026-11-02), dibandingkan dengan 0.7. Dialog {{ui:Render a picture…}} sekarang dapat mengirim adegan ke program lain, panel {{ui:Surfaces}} membuat permukaan bentuk bebas yang halus, dan asisten yang Anda hubungkan dapat mengatur seluruh adegan dari satu kalimat.

## Yang baru

### Render

- **Pilihan mesin.** {{ui:Render a picture…}} memiliki daftar **Mesin** di atas Mode. Dua mesin kami sendiri, Fast dan Path tracer, menjadi pilihan standar dan berfungsi di mana saja. Pilihan lain menyimpan adegan sebagai paket (model sebagai file USD, ditambah file pengaturan dengan nilai material yang tepat, lampu yang menyala, matahari, langit, eksposur, dan kamera) untuk dibawa ke program lain. Gambar yang dibuat program lain menyebutkan program dan versi yang membuatnya. Lihat [Pilih program yang menggambar gambar](topic:render-engines).
- **Buka di program lain.** Daftar Mesin dapat menyimpan adegan sebagai file USD, file glTF (`.glb`), atau folder proyek Unreal (`.zip`), di peramban dan di CadCraft Studio. Di Studio, juga dapat menjalankan usdview atau program bawaan komputer untuk file tersebut. Lihat [Buka adegan di program lain](topic:render-open-in).
- **Kirim ke mesin game dari Studio.** Studio menulis adegan ke dalam proyek Unreal Engine dan menjaganya tetap sinkron setiap kali dikirim, hanya satu arah. Suntingan Anda sendiri berada di layer yang tidak pernah ditulis oleh CadCraft. Lihat [Kirim adegan ke mesin game](topic:render-unreal).
- **Mesin dari add-on.** Add-on dapat menambahkan mesin ke dalam daftar. Mesin yang ditulis dengan JavaScript menggambar di peramban dan di Studio; mesin yang menjalankan program memerlukan persetujuan Anda di Studio. Lihat [Gambar gambar dengan program lain](topic:render-other-program) dan [Tambahkan mesin render dengan add-on](topic:render-engine-addons).
- **Jelaskan adegannya.** Beri tahu asisten yang terhubung "senja, hujan ringan, pohon musim gugur, orang di plaza", dan ModelCraft mengaturnya dalam satu langkah: matahari bergerak ke tanggal dan jam tersebut sehingga bayangan mengikuti, langit berubah, permukaan basah muncul, dan pohon serta orang ditempatkan sebagai objek nyata pada tag yang dapat Anda sembunyikan, pindahkan, atau hapus. Waktu dalam sehari, tanggal atau musim, dan cuaca (cerah, mendung, kabut, hujan ringan, hujan, badai) juga berfungsi sendiri, dan permintaan berikutnya mengubah adegan yang sama. Kabut tampak pada gambar kualitas tinggi di kartu grafis; mesin lain menampilkan langit, cahaya, dan permukaan basah. Hujan tidak digambar sebagai garis yang jatuh.

### Material

- **Material dari satu foto.** Berikan ModelCraft foto sebuah permukaan (dinding, lantai, batu), dan ia membuat material ubin: pencahayaan di seluruh foto diratakan, tepinya dibuat menyambung, dan peta warna, peta kekasaran, serta peta normal dihitung dari gambar. Ini adalah pemrosesan gambar biasa pada foto Anda sendiri, tanpa model terlatih. Kekasaran adalah perkiraan. Foto yang datar, persegi, dan lurus dari depan menghasilkan ubin terbaik; pola yang kuat seperti bata dapat menampilkan bayangan samar di tempat sambungan dicampur.

### Permukaan

- **Permukaan bentuk bebas.** Panel {{ui:Surfaces}} membuat kurva dan permukaan NURBS yang tidak dipangkas: kurva melalui titik, loft, ruled, ekstrusi, revolusi, sweep sepanjang satu atau dua rel, permukaan dari jaringan kurva, tambalan dari empat tepi, cocokkan dan blend. Setiap tepi yang dibagi diukur sebagai G0, G1, atau G2 (celah, sudut, lompatan kelengkungan) pada permukaan yang tepat, dan tepi yang lebih buruk dari yang Anda minta muncul di panel Masalah dengan perbaikan **Cocokkan**. Garis zebra dan warna kelengkungan digambar dari permukaan yang tepat. File STEP dan IGES dapat dikirim keluar dan dibuka masuk. Lihat [Permukaan bentuk bebas (NURBS)](topic:nurbs-surfaces).

### Lokasi dan ruangan

- **Foto sketsa ke tanah.** {{ui:File}} › {{ui:Import a sketch photo…}} mengubah foto ponsel dari sketsa tangan menjadi tepi di tanah pada skala yang Anda tentukan: satu grup, dengan tag untuk setiap warna pena. Kertas ditemukan dan diluruskan di komputer Anda, dan tidak ada yang dikirim ke mana pun. Lihat [Model di denah tapak](topic:site-plan).
- **Lengkapi ruang dengan furnitur.** Pilih lantai, lalu gunakan {{ui:Organize}} › {{ui:Furnish a room…}}. Furnitur kamar tidur, ruang keluarga, ruang makan, dapur, kamar mandi, atau kantor ditempatkan menurut aturan, menempel pada dinding dan tidak menghalangi pintu serta jendela, dalam satu grup yang dapat Anda hapus sekaligus. Ini adalah tata letak standar untuk Anda tinjau, bukan desain. Lihat [Pustaka awal](topic:starter).

### Pencetakan 3D

- **Potongan miring.** Pisah untuk pencetakan dapat memiringkan potongannya hingga 60 derajat, yang memberi bagian-bagian area rekat lebih luas. Konektor berdiri tegak lurus terhadap potongan. Lihat [Pisahkan model untuk pencetakan](topic:print-split).
- **Pemeriksaan cetak di Masalah.** Temuan pemeriksaan cetak 3D tampil di panel Masalah dengan penanda pada model, dan Perbaiki memperbaikinya dari sana. Lihat [Penyangga, ketebalan dinding, pelubangan, dan perbaikan](topic:print-tools).

### Di setiap aplikasi

- **Bahasa.** Bantuan dan aplikasi tersedia dalam 54 bahasa. Sepuluh bahasa baru: Lituania, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipino, Swahili, dan Uzbek. Bahasa selain Inggris adalah draf mesin sampai penutur asli membacanya, dan topik bantuan mungkin masih dalam bahasa Inggris.
- **Perangkat input.** Trackpad, pena, mouse 3D, pengontrol game, dan kontrol MIDI dapat mengendalikan aplikasi, untuk semuanya atau untuk satu aplikasi saja.
- **Baris bilah alat.** {{ui:Settings}} › {{ui:General}} › Baris bilah alat mengatur Wrap (seperti sebelumnya), 2 baris, atau 1 baris. Bilah yang tidak muat akan digulir ke samping, bukan mengambil ruang dari gambar. Wrap tetap menjadi standar.
- **Grid properti.** Kolom isian lampu ModelCraft memakai grid bersama: kategori yang dapat diciutkan, kolom label dan nilai, serta kepadatan Compact. Aritmetika yang diketik seperti `2*450` tetap berfungsi.
- **Masalah.** Panel Masalah (tombol peringatan di bilah aplikasi) dipakai bersama oleh semua aplikasi. Di ModelCraft, panel ini berisi pemeriksaan cetak dan peringatan kontinuitas permukaan.
- **Live.** Sesi Live TeamWork menunjukkan siapa berada di mana. Lihat [Bekerja bersama dengan Live TeamWork](topic:work-live).
- **Add-on.** Add-on dapat menambahkan mesin render, seperti di atas.
- **Hubungkan AI Anda.** Kontrak alat dan pemeriksaan dari kedelapan aplikasi telah lulus, dengan 454 alat seluruhnya. Koneksi satu klik di dalam Studio, konektor yang dihosting untuk asisten peramban, kunci Anda sendiri di dalam Studio, dan paket yang diterbitkan belum dijanjikan. Aplikasi tidak memiliki AI sendiri. Lihat [Gunakan ModelCraft dengan asisten AI](topic:use-with-ai-assistants).

## Diperbaiki di 0.8.1

- **Bagian kelas DWG.** Bagian kelas file DWG terbaca sebagai tipe yang salah, yang dapat merusak file saat diimpor. Sekarang sudah dibaca dengan benar, di ModelCraft dan di aplikasi lain yang membaca DWG.
- **Tablet dalam posisi potret.** Tinggi grid yang tersisa diberikan ke kanvas, dan tata letak lembar mulai pada lebar 760 piksel atau kurang. Lembar gaya ModelCraft juga memuat perubahan ini.
- **Bahasa di Studio.** CadCraft Studio dan edisi kemasan dapat mengganti bahasa saat berjalan; sebelumnya hanya bahasa Inggris. Ini belum diuji di setiap platform: beri tahu kami jika bahasa tidak berubah.

## Belum ada di versi ini

- **Belum ditandatangani kode.** Windows mungkin menampilkan SmartScreen: pilih {{ui:More info}}, lalu {{ui:Run anyway}}. Di Mac, klik kanan dan pilih {{ui:Open}}. Build untuk toko ditunda, dan build iPad serta iPhone belum dibangun ulang untuk 0.8.1.
- Program lain yang menggambar gambar tanpa add-on mesin render, kamera panorama atau stereo, serta gambar langit melalui program lain, dan plug-in yang membuka panggung Unreal belum tersedia. File sudah ditulis; plug-in belum dirilis dan belum dijalankan di Unreal.
- Permukaan bentuk bebas: G3 dan kelas A belum diukur atau diklaim, dan pemangkasan serta solid menyusul.
- Gambar dari program lain tidak identik piksel demi piksel dengan milik kami: hanya kamera, matahari, lampu, dan eksposur yang cocok.
- Perbaikan 0.8.1 untuk pergantian bahasa di Studio belum diuji di setiap platform.

Semua yang lain ada di [Belum dibuat](topic:not-built-yet). Untuk rilis sebelumnya, lihat [Yang baru di 0.7](topic:whats-new-0-7).
