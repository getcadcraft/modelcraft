---
title: Datang daripada pemodel lain
summary: Cara tabiat pemodelan tolak/tarik dipetakan kepada ModelCraft, kekunci demi kekunci, dan perbezaan yang menangkap orang.
keywords: pertukaran, berpindah, biasa, perbezaan, pemodel tolak tarik, skp, pintasan, tabiat, bandingkan, kotak ukuran, garis besar, maklumat entiti
from: 74ffd4ac
---

Jika anda pernah memodel dalam SketchUp, ModelCraft akan terasa biasa: idea yang sama tentang muka dan tolak/tarik, huruf alat yang sama, kotak nilai tempat anda menaip tanpa mengkliknya, inferens dengan paksi merah, hijau dan biru, kumpulan, komponen, garis besar, Maklumat entiti dan adegan. Halaman ini menyenaraikan apa yang dipetakan secara langsung dan, yang lebih penting, apa yang tidak.

## Tabiat yang dibawa

| Anda biasa | Dalam ModelCraft |
|---|---|
| Tekan Space untuk Pilih, L Garisan, R Segi empat tepat, C Bulatan | Sama: {{key:Space}}, {{key:L}}, {{key:R}}, {{key:C}} |
| Tekan P Tolak/tarik, M Alih, Q Putar, S Skala, E Pemadam, T Pita pengukur | Sama: {{key:P}}, {{key:M}}, {{key:Q}}, {{key:S}}, {{key:E}}, {{key:T}} |
| Tekan O Orbit, H Pan, Z Zum, Shift+Z Zum lingkungan | Sama: {{key:O}}, {{key:H}}, {{key:Z}}, {{key:Shift+Z}} |
| Tekan G untuk membuat komponen | Sama: {{key:G}}. {{key:Shift+G}} membuat kumpulan |
| Taip ke dalam kotak ukuran tanpa mengkliknya | Sama, dalam kotak nilai di bahagian bawah. Tekan {{key:Enter}} |
| Taip `4m,3m` untuk segi empat tepat, `12s` untuk sisi | Sama |
| Taip `3x` atau `/3` selepas salinan Alih | Sama; `*3` juga berfungsi |
| Taip `[x,y,z]` atau `<dx,dy,dz>` untuk titik atau ofset | Sama |
| Taip nombor biasa dalam model inci seni bina dan dapat inci | Sama |
| Seret butang tengah untuk orbit, Shift+seret butang tengah untuk pan, roda untuk zum di kursor | Sama |
| Klik dua kali dengan Tolak/tarik untuk mengulang jarak | Sama |
| Kekunci anak panah untuk mengunci merah, hijau, biru dan selari | Sama: {{key:Right}} merah, {{key:Left}} hijau, {{key:Up}} biru, {{key:Down}} selari |
| Tahan Shift untuk mengunci inferens | Sama |
| Ctrl (Option pada Mac) untuk menyalin semasa mengalih | {{key:Ctrl}}, {{key:Mod}} atau {{key:Alt}}, pada mana-mana komputer |
| Shift untuk menukar, Ctrl untuk menambah, Shift+Ctrl untuk membuang daripada pilihan | Kekunci yang sama; pada Mac gunakan {{key:Mod}} di tempat tertulis Ctrl |
| Tetingkap dari kiri ke kanan, bersilang dari kanan ke kiri | Sama |
| Alat Dimensi untuk melabel panjang | {{key:D}}, dan lebih: taip panjang baharu ke dalam dimensi dan model menyesuaikan saiznya. Lihat [Dimensi dan ubah saiz](topic:dimensions) |
| Klik dua kali muka untuk muka plus tepi; tiga kali klik untuk semua yang bersambung | Sama |
| Klik dua kali kumpulan untuk menyuntingnya; Esc untuk menutup | Sama |
| Lukis garisan merentasi muka untuk membahagikannya; padam tepi antara muka sama satah untuk menyambungkannya semula | Sama |
| Tolak segi empat tingkap melalui dinding untuk memotongnya | Sama |
| Muka belakang dalam kelabu-biru; Balikkan muka | Warna yang sama; {{ui:Balikkan muka}} dalam {{ui:Maklumat entiti}} |
| Adegan sebagai tab di atas pandangan, Page Up dan Page Down | Sama, dengan {{ui:Main}} dalam panel {{ui:Adegan}} |
| Bayang daripada tarikh, masa, latitud dan longitud, dengan utara pada hijau | Sama, dalam panel {{ui:Gaya}} |

## Perbezaan yang menangkap orang

### Menyimpan ialah muat turun

Tiada Simpan yang menulis ganti fail yang anda buka, tiada dialog Simpan Sebagai dengan nama, tiada simpan automatik dan tiada fail sandaran. {{ui:Simpan}} ({{key:Mod+S}}) memuat turun fail `.modelcraft` baharu setiap kali, biasanya ke folder muat turun anda. Simpan kerap, dan namakan atau alihkan fail sendiri. Lihat [Buka, simpan, import dan eksport](topic:files).

### Ia mengimport fail .skp, tetapi tidak menyimpannya

{{ui:Import}} membaca fail SketchUp dengan pembaca ModelCraft sendiri, dalam halaman: kumpulan, komponen, warna, tekstur pada muka, tag dan tepi lembut terbawa masuk. Lihat [Format fail secara terperinci](topic:formats#skp-files). ModelCraft tidak boleh menyimpan `.skp`: untuk kembali, eksport Collada daripada ModelCraft dan import dalam SketchUp.

### Tiada menu klik kanan

Seret kanan untuk pan; klik kanan tidak berbuat apa-apa. Arahan yang anda cari dalam menu konteks berada dalam {{ui:Maklumat entiti}} ({{ui:Balikkan muka}}, {{ui:Sunting}}, {{ui:Pecahkan}}, {{ui:Jadikan unik}}, {{ui:Jadikan komponen}}) dan dalam kumpulan {{ui:Susun}} pada bar alat.

### Unit berada dalam bar status

Tiada Maklumat Model atau pilihan templat. Pemilih unit berada di bawah sebelah kanan. Model baharu bermula dalam kaki dan inci di AS dan dalam milimeter di tempat lain, mengikut tetapan bahasa pelayar anda. Perpuluhan sentiasa menggunakan titik: `2.5m`, bukan `2,5m`, kerana koma sentiasa memisahkan nilai.

### Cat mempunyai bahan sendiri

{{ui:Cat}} ({{key:B}}) mengecat warna pepejal dan bahan dalam bahagian {{ui:Bahan}}: bata, papan dinding, bumbung, kayu, batu dan lain-lain, dilukis oleh ModelCraft. Anda belum boleh memuatkan imej sendiri sebagai bahan; tekstur yang datang bersama fail yang diimport dikekalkan. Lihat [Cat dengan warna dan bahan](topic:paint).

### Skala seragam, tanpa grip

Skala tidak menunjukkan kotak dengan grip. Klik titik yang kekal di tempatnya, titik rujukan, kemudian saiz baharu atau faktor yang ditaip. Ia sentiasa menskala sama rata ke semua arah. Untuk meregang dalam satu arah, tolak/tarik atau alihkan muka, atau taip semula lebar, kedalaman atau tinggi kumpulan dalam {{ui:Maklumat entiti}}, atau [ubah saiz dengan dimensi](topic:dimensions).

### Putar memilih satahnya dari tempat anda klik

Tiada protraktor yang melekat pada muka semasa anda berlegar dengan kekunci anak panah untuk memilih satah. Klik pusat pada muka untuk berpusing dalam satah muka itu, atau pada tanah untuk berpusing mengelilingi menegak. Kekunci anak panah mengorbit pandangan sebelum klik pertama.

### Inferens daripada titik yang anda lalui

ModelCraft melekat kepada arah paksi dari **titik mula anda**, dan kepada titik, tepi serta muka di bawah penunjuk. Ia tidak menjejak arah daripada titik yang anda sekadar letakkan kursor di atasnya (inferens "dari titik" bertitik). Untuk menjajar dengan penjuru yang jauh, kunci paksi dengan kekunci anak panah dan letakkan kursor di atas penjuru itu: titik yang dikunci bergerak untuk menjajar dengannya. Atau letakkan [panduan](topic:guides-measure).

### Selari menggunakan tepi yang anda lalui sebelum bermula

Inferens selari dan serenjang menggunakan tepi terakhir yang dilintasi penunjuk **sebelum klik pertama**, bukan tepi yang anda letakkan kursor semasa melukis. Lihat [Inferens dan snap](topic:inference#parallel-and-perpendicular).

### Salinan kumpulan dipautkan

Menyalin kumpulan dengan {{ui:Alih}} membuat penempatan kedua bagi kumpulan yang sama, jadi menyunting satu mengubah kedua-duanya, seperti komponen. SketchUp menjadikan kumpulan bebas. Lihat [Penyelesaian masalah](topic:troubleshooting#editing-one-group-changed-another).

### Space tidak memanjangkan pan

{{key:Space}} memilih {{ui:Pilih}}, seperti dalam SketchUp. Dalam beberapa aplikasi web lain, menahan Space memanjangkan pan; di sini tidak. Seret kanan untuk pan sebaliknya.

### Skrol dua jari memberikan zum

Pada trackpad, tetapkan {{ui:Tetapan}} › {{ui:ModelCraft}} › Skrol kepada Trackpad: dua jari mengorbit, {{key:Shift}} dan dua jari untuk pan, cubitan untuk zum. Lihat [Orbit, pan dan zum](topic:orbit-pan-zoom#on-a-trackpad).

Jika tangan anda mengenali kekunci Blender dan bukan SketchUp, pilih gaya menu {{ui:Pemodel}}: {{key:G}}, {{key:R}} dan {{key:S}} bertindak ke atas pilihan serentak, {{key:E}} mengekstrud (tolak/tarik), {{key:Shift+D}} menghasilkan pendua, dan bar menu di kepala (Fail, Sunting, Pandangan, Pilih, Tambah, Objek, Jejaring) menggantikan bar alat. Dari SketchUp, gaya {{ui:Tolak-tarik}} memberikan bar menu seperti miliknya sendiri di atas huruf alat yang sama. Lihat [Menu, kekunci dan tetikus](topic:menus-keys-and-mouse).

### Pepejal yang ditolak ke dalam satu sama lain tidak dipotong

Tolak/tarik memotong melalui muka di belakangnya dalam objek yang sama, tetapi dua pepejal berasingan yang ditolak ke dalam satu sama lain tidak bersilang. Tiada Intersect Faces dan tiada Solid Tools.

### Apa yang hilang

Freehand, Trim, Split dan Outer Shell, bahan imej sendiri, sambungan, dan alat susun atur untuk helaian tidak berada dalam binaan ini. [Belum dibina](topic:not-built-yet) menyenaraikan apa yang perlu dilakukan sebagai ganti.

## Pintasan yang dikekalkan pelayar

ModelCraft berjalan dalam pelayar, jadi beberapa pintasan milik pelayar, bukan aplikasi. {{key:Mod+N}} membuka tetingkap pelayar (gunakan {{ui:Baharu}}), dan {{key:Mod+W}} menutup tab. Jika anda mempunyai perubahan yang belum disimpan, pelayar bertanya sebelum menutup. Lihat [Kekunci, tetikus dan trackpad](common:keys#shortcuts-the-browser-keeps).
