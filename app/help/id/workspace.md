---
title: Layar ModelCraft
summary: Tur bilah alat, panel di setiap sisi, tampilan 3D, dan bilah status, menurut nama di layar.
keywords: layar, tata letak, bilah alat, panel, kerangka, info entitas, gaya, scene, bilah status, kotak nilai, satuan, antarmuka, tur
from: 4a9a4516
---

Dari atas ke bawah: bilah aplikasi, bilah alat, tiga kolom (panel kiri, tampilan 3D, panel kanan), dan bilah status.

## Bilah aplikasi

Bilah tipis di paling atas milik setiap aplikasi CadCraft. Isinya nama aplikasi dan versi, {{ui:Tentang ModelCraft}}, tombol mode layar, dan sakelar {{ui:Kertas}} / {{ui:Model}}.

- {{ui:Kertas}} adalah tema terang dan {{ui:Model}} yang gelap. Tampilan 3D mengubah warnanya agar sesuai; model Anda tidak berubah.
- Tombol mode layar (awalnya berbunyi {{ui:Layar penuh}}) dan {{key:Ctrl+Shift+F}} bergantian melewati tiga mode: normal, layar penuh, dan layar penuh dengan bilah disembunyikan. Saat bilah disembunyikan, arahkan ke tepi atas layar (atau ketuk) untuk memunculkannya kembali. {{key:Esc}} keluar dari layar penuh.

:::note
{{key:Ctrl+Shift+F}} memakai tombol Control di semua komputer, Mac juga. Di iPhone, tempat peramban tidak punya layar penuh, tombol itu hanya menyembunyikan dan menampilkan bilah.
:::

## Bilah alat

Bilah alat dibagi menjadi grup berlabel. Arahkan penunjuk ke tombol untuk melihat nama dan tombol pintasnya.

Di kirinya, daftar {{ui:Ruang kerja}} mengganti untuk apa bilah alat dan panel kanan: {{ui:Model}} (pemodelan dorong/tarik, tur di bawah), {{ui:Mesh}} ([edit mesh](topic:mesh-edit)), {{ui:Kurva}} ([objek kurva](topic:curves)), {{ui:UV}} ([atur UV](topic:uv)), {{ui:Pahat}} ([memahat](topic:sculpt)), {{ui:Shading}} ([material yang dibuat dengan node](topic:shading)), {{ui:Animasi}} ([menganimasi](topic:animate)) dan {{ui:Render}} ([render di tampilan](topic:render#render-in-the-view)).

| Grup | Tombol |
|---|---|
| File | {{ui:Baru}}, {{ui:Buka}}, {{ui:Simpan}}, {{ui:Impor}}, {{ui:Ekspor}} (menu format) |
| Gambar | {{ui:Garis}} ({{key:L}}), {{ui:Persegi panjang}} ({{key:R}}), {{ui:Lingkaran}} ({{key:C}}), {{ui:Poligon}} ({{key:N}}) |
| Ubah | {{ui:Pilih}} ({{key:Space}}), {{ui:Dorong/tarik}} ({{key:P}}), {{ui:Pindahkan}} ({{key:M}}), {{ui:Putar}} ({{key:Q}}), {{ui:Skala}} ({{key:S}}), {{ui:Penghapus}} ({{key:E}}), {{ui:Meteran}} ({{key:T}}) |
| Atur | {{ui:Komponen}} ({{key:G}}), {{ui:Grup}} ({{key:Shift+G}}), {{ui:Urai}} |
| Edit | {{ui:Urungkan}} ({{key:Mod+Z}}), {{ui:Ulangi}} ({{key:Mod+Y}}), {{ui:Salin}} ({{key:Mod+C}}), {{ui:Tempel}} ({{key:Mod+V}}), {{ui:Lainnya}} (menu: potong, salin, tempel, tempel di tempat yang sama {{key:Mod+Shift+V}}, duplikat {{key:Mod+D}}, hapus, pilih semua, batalkan pilihan, dan gaya tombol) |
| Kamera | {{ui:Orbit}} ({{key:O}}), {{ui:Geser}} ({{key:H}}), {{ui:Zoom}} ({{key:Z}}), {{ui:Batas}} ({{key:Shift+Z}}), {{ui:Tampilan}} (menu) |

Tombol yang ditampilkan adalah tombol dorong-tarik; dengan gaya Pemodel dipilih di [Pengaturan ModelCraft](topic:settings), tooltip menampilkan tombol itu sebagai gantinya. Alat yang sedang Anda pakai tampak tertekan. Di layar sempit bilah alat bergulir ke samping.

Menu {{ui:Tampilan}} berisi {{ui:Iso}}, {{ui:Atas}}, {{ui:Depan}}, {{ui:Kanan}}, {{ui:Belakang}}, {{ui:Kiri}} dan {{ui:Bawah}}, masing-masing dipaskan ke model, dan {{ui:Perspektif}}, yang beralih antara proyeksi perspektif dan paralel.

## Tampilan 3D

Bagian tengah layar. Garis merah, hijau, dan biru adalah sumbu: merah dan hijau terletak di tanah, biru menunjuk ke atas, dan **utara adalah sumbu hijau**. Tempat ketiganya bertemu adalah titik asal.

- Saat Anda mulai, kartu berjudul "Mulai memodelkan" mendaftar beberapa tombol pertama. Kartu itu hilang saat Anda memilih alat gambar atau mengklik di tampilan.
- Saat alat bekerja, tampilan menunjukkan **penanda inferensi**: bentuk kecil berwarna di tempat penunjuk snap (lingkaran hijau di titik ujung, biru muda di titik tengah, persegi merah pada tepi, belah ketupat biru pada muka). Lihat [Inferensi dan snap](topic:inference).
- Benda yang dipilih menjadi biru. Muka yang dilihat dari belakang berwarna biru keabuan.
- Saat Anda membuka grup untuk diedit, semua di luarnya memudar, dan sumbu berpindah ke sumbu milik grup itu.
- Saat model punya scene, deretan tab scene muncul di sepanjang atas tampilan.
- Jatuhkan file di mana saja pada tampilan untuk membuka atau mengimpornya.

## Panel kiri

**{{ui:Kerangka}}** mendaftar grup dan komponen di model, bersarang seperti di model. Komponen yang dipakai lebih dari sekali menunjukkan berapa kali, seperti "Window (4)".

- Klik nama untuk memilihnya. Klik dua kali untuk membukanya agar diedit.
- **Cari berdasarkan nama** (muncul setelah ada dua grup atau lebih) hanya menyisakan baris yang namanya cocok, beserta grup tempatnya berada. {{key:Esc}} menghapusnya.
- **Mata** di ujung baris menyembunyikan atau menampilkan grup atau komponen itu (seperti {{ui:Edit}} › {{ui:Lainnya}} › {{ui:Sembunyikan}}). Ikon tag berarti ia disembunyikan oleh [tag](topic:tags)-nya.
- **Ganti nama di tempat:** klik baris, lalu tekan {{key:F2}}, ketik, dan tekan {{key:Enter}} ({{key:Esc}} mempertahankan nama lama).
- **Seret baris** ke tengah baris grup lain untuk memindahkannya ke dalam grup itu, ke tepi atas atau bawah baris untuk menaruhnya tepat sebelum atau sesudah baris itu, atau ke judul {{ui:Kerangka}} untuk memindahkannya ke tingkat teratas. Posisinya di model tetap, dan warna, tag, serta namanya dipertahankan. Grup tidak dapat masuk ke dalam dirinya sendiri. Setiap pemindahan adalah satu langkah urungkan. Lihat [Susun ulang di Kerangka](topic:groups-components#rearrange-in-the-outliner).
- Saat Anda mengedit di dalam grup, satu baris berbunyi "Mengedit: Model › …", dan tombol {{ui:Tutup grup}} muncul. Tombol itu menutup semua tingkat yang terbuka sekaligus.

**{{ui:Komponen}}** mendaftar setiap definisi komponen dengan jumlah salinan yang ditempatkan ("3×") dan tombol {{ui:Letakkan}} yang menambah salinan lain di tempat Anda mengklik.

## Panel kanan

**{{ui:Info entitas}}** menjelaskan apa yang dipilih. Judulnya berubah untuk menyebutkan apa itu:

| Judul | Menampilkan | Tombol |
|---|---|---|
| Model (tidak ada yang dipilih) | Muka, tepi, grup, komponen dan berapa yang ditempatkan, garis bantu, ukuran keseluruhan | {{ui:Hapus semua garis bantu}} (saat ada garis bantu) |
| Muka | Luas, jumlah lubang | {{ui:Balik muka}} |
| Tepi | Panjang | tidak ada |
| Grup atau Komponen | Nama (ketik untuk mengganti nama), berapa kali ditempatkan, apakah solid tertutup, volumenya, ukurannya | {{ui:Edit}}, {{ui:Urai}}, {{ui:Jadikan unik}} (komponen yang ditempatkan lebih dari sekali), {{ui:Buat komponen}} (grup) |
| Titik bantu atau garis bantu | tidak ada | {{ui:Hapus}} |
| Beberapa benda | Berapa muka, tepi, grup, dan garis bantu, luas total muka | {{ui:Buat komponen (G)}}, {{ui:Buat grup (Shift+G)}} |

**{{ui:Gaya}}** mengatur cara model digambar: {{ui:Muka}} ({{ui:Berbayang}}, {{ui:Garis tersembunyi}}, {{ui:Rangka kawat}}, {{ui:Sinar-X}}), {{ui:Tampilkan tepi}}, dan {{ui:Bayangan matahari}} dengan tanggal, waktu, dan tempat matahari. Lihat [Gaya dan bayangan matahari](topic:styles-shadows).

**{{ui:Scene}}** menyimpan tampilan: {{ui:Tambah scene}}, daftar scene, serta {{ui:Sebelumnya}}, {{ui:Putar}} dan {{ui:Berikutnya}}. Lihat [Simpan tampilan sebagai scene](topic:scenes).

## Bilah status

Di sepanjang bawah, dari kiri ke kanan:

1. **Tips**: apa yang diinginkan alat selanjutnya, atau pada apa penunjuk melakukan snap ("Titik ujung", "Pada sumbu merah").
2. **Pesan**: apa yang baru terjadi ("Dorong/tarik diurungkan.", "site.dxf diimpor: 1697 tepi di tanah, dalam satu grup.") atau mengapa sesuatu tidak berhasil.
3. **Kotak nilai**: labelnya berubah menurut alat ({{ui:Panjang}}, {{ui:Dimensi}}, {{ui:Radius}}, {{ui:Sisi}}, {{ui:Jarak}}, {{ui:Sudut}}, {{ui:Skala}}, {{ui:Offset}}). Ia menunjukkan ukuran langsung saat Anda bekerja, dan menerima apa yang Anda ketik. Lihat [Ketik ukuran tepat di kotak nilai](topic:value-box).
4. **Gaya tombol**: {{ui:Tombol: Dorong-tarik}} atau {{ui:Tombol: Pemodel}} mengganti pintasan keyboard dan tombol mouse sekaligus (sama seperti di [Pengaturan ModelCraft](topic:settings)).
5. **{{ui:Snap}} dan {{ui:Tabrakan}}**: snap ke titik, tepi, dan sumbu, dan solid berhenti di tempat bersentuhan. Dicoret = mati. Klik untuk mengganti. Lihat [Pengaturan ModelCraft](topic:settings).
6. **Pemilih satuan**: satuan tempat panjang ditampilkan. Lihat [Memulai](topic:getting-started#check-the-units-first).

## Di layar sempit

Di bawah lebar sekitar 760 piksel (ponsel, atau jendela sempit), tampilan 3D menguasai layar. Bilah alat berupa satu baris yang bergulir ke samping, dan panel terbuka sebagai lembar dari bilah di bagian bawah layar.
