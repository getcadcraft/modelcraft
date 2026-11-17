---
title: Penyangga, tebal dinding, pelubangan, dan perbaikan
summary: Lihat di mana cetakan memerlukan penyangga dan perkiraan jumlahnya, temukan dinding yang terlalu tipis untuk dicetak, lubangi bagian dengan ketebalan dinding dan lubang pembuangan, serta perbaiki mesh dengan setiap perbaikan terdaftar.
keywords: cetak 3d, penyangga, pratinjau penyangga, menggantung, penyangga pohon, penyangga kolom, tebal dinding, dinding tipis, terlalu tipis, nozzle, lubangi, pelubangan, shell, lubang pembuangan, resin, perbaiki, perbaiki mesh, non-manifold, muka terbalik, lubang, shell kecil, saling tembus, tumpang tindih, gabungkan
from: 286bde26
---

Empat alat untuk menyiapkan model bagi printer 3D. Buka {{ui:Ekspor}} › {{ui:Periksa untuk pencetakan 3D (STL atau 3MF)…}}; baris **Alat cetak** di dialog memuat {{ui:Pratinjau penyangga}}, {{ui:Tebal dinding}}, {{ui:Lubangi}} dan {{ui:Perbaiki}}. Masing-masing terbuka sebagai kartu di atas tampilan; {{ui:Tutup}} (tanda silang) menutup kartu dan tandanya. Hanya satu kartu yang tampil dalam satu waktu.

Setiap alat bekerja pada apa yang dicetak: pilihan, atau semua yang terlihat jika tidak ada yang dipilih. {{ui:Lubangi}} dan {{ui:Perbaiki}} membutuhkan satu grup, komponen, atau mesh yang dipilih, karena keduanya mengubahnya.

## Pratinjau penyangga

Muka yang condong lebih jauh dari **sudut overhang** dari posisi tegak akan diberi warna merah, dan penyangga sederhana digambar dari sana (oranye) turun ke bed, atau ke bagian model di bawahnya.

- **Sudut overhang**: 45° adalah yang paling banyak dicapai printer tanpa penyangga. Naikkan untuk printer yang baik dalam membentangkan jembatan.
- **Kolom**: sebuah kolom lurus setiap 3 mm di bawah setiap overhang. Perkiraan menghitungnya sebagai pola penyangga 15%.
- **Pohon**: titik-titik yang berdekatan bergabung menjadi satu batang di bawah titik tengahnya; tidak ada cabang yang condong lebih dari 45°. Pohon biasanya memakan lebih sedikit material dan menyentuh bed di lebih sedikit tempat.

Kartu memberi tahu berapa banyak permukaan yang membutuhkan penyangga, berapa banyak titik penyangga, dan perkiraan material yang dipakainya. Penyangga yang berdiri di atas model (bukan bed) ikut dihitung karena meninggalkan bekas di sana. Dengan bed printer yang dipilih di {{ui:Pengaturan}}, bed digambar di bawah model.

:::note
Ini adalah pratinjau, bukan slicer: slicer Anda yang memutuskan penyangga sebenarnya. Pada overhang yang sangat besar, titik penyangga disebar lebih lebar agar pratinjau tetap cepat, dan kartu akan memberi tahu hal itu.
:::

## Tebal dinding

Setiap muka diukur lurus menembus solid hingga sisi lainnya. Dinding di bawah **dinding paling tipis yang diizinkan** diberi warna merah, dan dinding di bawah satu setengah kali nilai itu diberi warna oranye: dinding itu tetap bisa dicetak, tetapi mungkin lemah.

Area yang tipis didaftar, dari yang paling tipis, beserta seberapa tipis dan seberapa besar masing-masing. {{ui:Tampilkan}} memutar kamera ke area tersebut.

Printer tidak dapat membuat dinding lebih tipis dari sekitar dua lebar nozzle-nya: 0,8 mm untuk nozzle umum 0,4 mm (nilai awal). Printer resin mampu lebih sedikit; periksa panduan printer Anda.

Pada model yang sangat besar, hanya sebagian muka yang memancarkan sinar, dan sisanya mengambil ketebalan tetangganya; kartu memberi tahu berapa banyak yang diukur.

## Lubangi

Pelubangan menjaga bagian luar tetap seperti semula dan mengeluarkan bagian dalamnya, dengan menyisakan dinding setebal yang Anda minta. Cetakan resin memakai lebih sedikit resin dan menarik pelat bangun lebih sedikit; cetakan filamen memakai lebih sedikit plastik daripada infill.

1. Pilih grup, komponen, atau mesh, lalu buka {{ui:Lubangi}}.
2. Atur **dinding** (2 mm sebagai awal) dan seberapa lebar **lubang pembuangan**.
3. Untuk cetakan resin, klik {{ui:Tempatkan lubang pembuangan}}, lalu klik sisi luar model di tempat lubang itu harus berada: rendah, dekat pelat bangun, agar resin cair mengalir keluar. Tempatkan sebanyak yang Anda perlukan. Masing-masing tampil sebagai lingkaran biru dan didaftar dengan {{ui:Hapus}}.
4. {{ui:Pratinjau}} memberi tahu berapa banyak yang dikeluarkan oleh pelubangan.
5. {{ui:Lubangi}} membuat perubahan dalam satu langkah yang dibatalkan oleh {{key:Mod+Z}}.

Hasilnya adalah satu solid tertutup yang diterima oleh pemeriksaan cetak 3D: ModelCraft memeriksanya lebih dulu dan tidak mengubah apa pun jika tidak lolos. Jika model lebih tipis dari dua dinding, bagian itu tetap solid. Hasilnya adalah grup yang muka datarnya berupa satu muka tunggal, sehingga Anda tetap bisa memodelnya dengan {{ui:Dorong/tarik}}. Bagian melengkung yang dilubangi pada grid halus biasanya memiliki terlalu banyak muka untuk itu dan menjadi mesh; baris status memberi tahu yang mana.

:::tip
Untuk sebagian besar bentuk, bagian dalamnya adalah bagian luar yang digeser ke dalam sejauh tepat sebesar dinding. Jika sudut atau bagian tipis membuat hal itu mustahil, ModelCraft mengikuti bagian luar pada jarak dinding di atas grid halus. Kartu kemudian memberi tahu seberapa dekat hasilnya (hingga sepersekian milimeter).
:::

## Perbaiki

{{ui:Perbaiki}} memeriksa bagian yang dipilih seperti cara slicer printer memeriksanya, memperbaiki apa yang aman untuk diperbaiki, dan mendaftar setiap perbaikan:

| Yang diperbaiki | Artinya |
|---|---|
| Segitiga tanpa luas | dibiarkan |
| Segitiga yang digambar dua kali | satu salinan disimpan; muka yang saling membelakangi dengan dirinya sendiri (tanpa ketebalan) dihapus |
| Bagian lepas di bawah 0,5 mm | dihapus |
| Segitiga yang menghadap arah salah | diputar agar sesuai dengan tetangganya |
| Lubang, datar atau tidak | ditutup dengan kipas segitiga baru dari titik tengah setiap lubang |
| Bagian yang terbalik | diputar ke luar (rongga di dalam bagian lain dibiarkan apa adanya, karena memang dimaksudkan menghadap ke dalam) |

{{ui:Perbaiki yang aman}} melakukan semuanya dalam satu langkah yang dibatalkan oleh {{key:Mod+Z}}, dan baris status mendaftar setiap perbaikan. Bagian yang sudah diperbaiki menjadi grup yang muka datarnya berupa satu muka tunggal. Jika masih belum tertutup (sesuatu di bawah **Sisanya untuk Anda** masih tersisa), atau jika memiliki terlalu banyak muka untuk sebuah grup, bagian itu menjadi mesh sebagai gantinya: mukanya tetap berupa segitiga, dan muka datar tetap terlihat datar. Baris status memberi tahu yang mana. {{ui:Gabungkan bagian yang tumpang tindih}} bekerja dengan cara yang sama.

Apa yang tidak dapat diperbaiki dengan aman terdaftar di bawah **Sisanya untuk Anda** dan ditandai ungu di tampilan, dengan {{ui:Tampilkan}}:

- **Tepi tempat tiga muka atau lebih bertemu**: tentukan muka mana yang termasuk, lalu hapus yang lain.
- **Bagian yang menembus dirinya sendiri**: pindahkan atau gambar ulang bagian itu. Lihat [Perpotongan muka](topic:intersect).
- **Lubang yang terlalu besar atau terlalu rumit untuk ditutup**: gambar muka di seberangnya.
- **Bagian terpisah yang saling tumpang tindih**: slicer tetap menggabungkannya. {{ui:Gabungkan bagian yang tumpang tindih}} membuatnya menjadi satu badan tertutup. Ia membangun ulang muka tempat mereka bertemu, sehingga itu tombol tersendiri dan tidak pernah dijalankan untuk Anda.

Untuk grup dorong/tarik, Anda juga dapat memperbaiki satu per satu di {{ui:Info entitas}} › {{ui:Tampilkan masalah}} / {{ui:Perbaiki}}, yang mempertahankan muka yang Anda gambar. Lihat [Alat solid](topic:solids).

Terkait: [Siapkan model untuk dicetak 3D](topic:print-3d) · [Gaya Pemula](topic:beginner) · [Belum dibuat](topic:not-built-yet#3d-printing)
