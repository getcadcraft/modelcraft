---
title: Permukaan bebas (NURBS)
summary: Kurva dan permukaan halus untuk cangkang produk, badan mobil, dan lambung kapal — loft, sweep, jaringan kurva, patch empat tepi, blend, trim — dengan kontinuitas G0, G1, dan G2 yang diukur pada permukaan yang tepat, solid dengan union, subtract, dan intersect, tampilan zebra dan kelengkungan, muka yang dipas ke hasil pindai dengan galat yang diukur, serta file STEP atau IGES.
keywords: nurbs, pindai, reverse engineering, pas, mesh ke permukaan, point cloud, stl, trim, trimmed, lubang, potong, solid, solids, boolean, union, subtract, intersect, selisih, jahit, tertutup, bentuk bebas, freeform, free-form, permukaan, surfaces, b-spline, bspline, kurva, spline, loft, sweep, rel, jaringan, coons, patch, blend, cocok, kontinuitas, g0, g1, g2, singgung, kelengkungan, zebra, titik kontrol, knot, derajat, step, iges, kelas A
from: 09887405
---

Panel **{{ui:Permukaan}}** membuat kurva dan permukaan halus dari jenis yang dipakai untuk cangkang produk, badan mobil, dan lambung kapal: NURBS, matematika yang sama dengan yang dipakai pemodel permukaan lain. Semuanya diukur pada permukaan yang tepat, tidak pernah pada segitiga yang Anda lihat. Ukuran di panel dalam **milimeter**, apa pun satuan yang ditampilkan model.

Bukalah dari panel sisi kanan: {{ui:Permukaan}} › {{ui:Buka panel Permukaan}}. Model yang sudah memiliki permukaan akan membukanya dengan sendirinya.

## Cara kerja perintah

1. Tekan sebuah perintah (misalnya **Loft**). Panel menyebutkan apa yang masih dibutuhkan: titik, kurva, tepi permukaan, atau ujung kurva.
2. Pilih itu: klik di tampilan 3D, atau tekan **{{ui:Pilih}}** (atau tombol tepi dan ujung) di sebelah setiap item dalam daftar. Untuk sebuah tepi, klik dekat tepi permukaan tersebut.
3. Periksa opsinya (derajat, toleransi, kontinuitas, …) lalu tekan **Buat**.

Kurva dari titik memakai titik yang diketik satu per baris (`x, y, z` dalam mm), atau **Pilih titik di tampilan**: setiap klik memakai snapping yang sama dengan alat gambar. Tekan <kbd>Enter</kbd> atau klik dua kali untuk selesai, <kbd>Esc</kbd> untuk berhenti.

## Kurva

- **Curve through points** melewati setiap titik. **Curve by control points** mengikuti kerangka titik sebagai gantinya.
- **Insert knot**, **Raise degree**, dan **Lower degree** mengubah cara kurva dideskripsikan tanpa memindahkannya (menurunkan derajat ditolak jika kurva akan bergeser lebih dari toleransi). **Rebuild curve** memberi kurva jumlah titik kontrol baru dan menyebutkan seberapa jauh ia bergeser.
- **Match curve** membuat ujung satu kurva bertemu dengan kurva lain dengan G0 (bersentuhan), G1 (arah sama), atau G2 (kelengkungan juga sama). **Blend curve** menambahkan kurva baru di antara dua ujung.
- **Join curves** dan **Split curve**.

## Permukaan

- **Loft** melalui dua atau lebih kurva, **Ruled surface** di antara dua kurva, **Extrude curve**, **Revolve curve**.
- **Sweep along one rail** membawa profil sepanjang jalur tanpa memutarnya; **Sweep along two rails** menjaga ujung profil tetap pada kedua rel. Sweep dipas: baris status menyebutkan seberapa dekat hasilnya dengan sweep yang sebenarnya.
- **Surface from a curve network** melewati kisi kurva (pilihan pertama adalah profil, sisanya adalah pemandu). **Patch from four edges** mengisi empat kurva yang bertemu di sudutnya.
- **Match surface** membuat tepi permukaan bertemu dengan tetangganya dengan G0, G1, atau G2; **Blend surface** menambahkan permukaan di antara dua tepi.
- **Offset surface**, **Extend surface** (permukaan berlanjut seperti arah semula), **Rebuild surface**, serta knot dan derajat untuk permukaan.

## Memeriksa kualitas

Tabel **Tepi bersama** mendaftar setiap tepi yang dimiliki dua permukaan, dengan celah (mm), sudut di antara keduanya (°), dan lompatan kelengkungan (1/mm), serta apakah itu membuatnya G0, G1, atau G2. Tepi yang lebih buruk dari yang Anda minta juga masuk ke **Masalah** (tombol ⚠ di bilah aplikasi) dengan perbaikan **Match**.

**Tampilkan sebagai** › **Garis zebra** dan **Kelengkungan (Gaussian)** berasal dari permukaan yang tepat: garis yang berjalan utuh melintasi tepi berarti G1; garis yang juga mempertahankan lebarnya berarti G2. Kelengkungan berwarna biru di tempat permukaan berbentuk pelana, merah di tempat berbentuk kubah, dan putih di tempat datar. **Titik kontrol** menggambar jaring kontrolnya.

G0–G2 diukur pada 33 titik per tepi. **G3 dan kualitas "kelas A" tidak diukur** dan tidak diklaim.

## Memangkas permukaan

Grup **Trim** memotong permukaan tanpa mengubah bentuknya: permukaan tetap memiliki semua titik kontrolnya, dan hanya bagian di dalam garis luar yang ditampilkan, dihitung, dan ditulis. **Trim to a rectangle** dan **Trim with a circle** bekerja pada bagian (0 sampai 1) dari permukaan di setiap arah, sehingga tidak perlu memilih di tampilan; **Trim by a curve** memakai kurva tertutup yang berada di atas permukaan (diproyeksikan ke permukaan, dan ditolak dengan kata-kata jika terbuka atau lebih dari toleransi jauhnya). Centang **Cut a hole** untuk menghapus bagian dalam garis luar; biarkan tidak dicentang untuk hanya menyimpan bagian dalamnya. Satu permukaan dapat memiliki satu garis luar yang disimpan dan sejumlah lubang; garis luar yang memotong garis luar lain ditolak. **Remove the trim** menampilkan kembali seluruh permukaan. Tepi potongan mengikuti garis luar dengan tepat; Urungkan panel mengembalikan pemangkasan seperti langkah lainnya.

STEP menyimpan trim sebagai batas muka dan IGES sebagai permukaan terpangkas (entitas 144); keduanya membacanya kembali.

## Solid dan Boolean

Grup **{{ui:Solid}}** mengubah permukaan menjadi badan tertutup dan menggabungkannya. Solid di sini adalah sekumpulan permukaan milik panel yang bersama-sama menutup sebuah volume; mukanya tetap berupa permukaan NURBS yang tepat dengan trim-nya.

- **Box solid**, **Cylinder solid**, dan **Sphere solid** membuat satu dari ukuran yang diketik (dalam mm): kotak berisi enam muka datar, silinder dengan sisi bundar dan dua ujung datar yang dipangkas ke lingkaran, bola dari satu permukaan yang diputar.
- **Solid from surfaces** mengelompokkan permukaan yang Anda buat sendiri. Pilih, atau jangan pilih apa pun untuk memakai setiap permukaan yang ditampilkan dan belum berada dalam solid. Permukaan itu dijahit bersama dalam toleransi: jika tidak menutup, tidak ada yang berubah dan panel menyebutkan berapa tepi yang masih terbuka dan seberapa dekat keduanya harus bertemu.
- **{{ui:Gabungkan}}**, **Subtract** (solid kedua diambil dari yang pertama), dan **Intersect** (hanya yang dimiliki keduanya) membutuhkan dua solid: klik muka dari masing-masing di tampilan, atau tekan **Pilih** dalam daftar **Solid**. Centang **Pertahankan kedua solid** untuk membiarkannya di samping hasil.

Boolean mempertahankan setiap muka pada permukaan tepatnya sendiri dan memotongnya dengan garis luar trim baru sepanjang perpotongan. Baris hasil memberikan angka yang diukur: seberapa jauh titik mesin solid harus bergeser agar berada di permukaan yang tepat (tidak pernah lebih dari toleransi), seberapa dekat titik perpotongan ke kedua permukaan (biasanya beberapa per sejuta mm), volume, dan apakah muka baru menutup kembali saat dijahit ulang dari permukaan tepatnya. Volume diukur pada segitiga dalam toleransi (0,05 mm kecuali Anda mengatur yang lain), sehingga volume bola atau silinder terbaca sedikit lebih rendah dari yang tepat: toleransi yang lebih kecil membuatnya lebih dekat. Boolean yang tidak dapat dilakukan dengan bersih (solid tidak memiliki bagian bersama, garis luar akan memotong dirinya sendiri) ditolak dengan kata-kata dan tidak mengubah apa pun. Satu Boolean adalah satu langkah dari **Urungkan** panel.

Dalam daftar **Solid**, **Ungroup** mempertahankan muka sebagai permukaan biasa; tong sampah menghapus solid dan mukanya.

**Add to the model** (dalam daftar **Solid**) memasukkan salinan solid ke dalam model sebagai satu grup tertutup, mukanya berupa segitiga dalam 0,05 mm, dalam satu langkah Urungkan model. Setelah itu, solid bekerja dengan {{ui:Gabungkan}}, Subtract, dan Intersect milik model, push-pull, serta pemeriksaan cetak 3D; solid yang tepat tetap berada di panel.

## Fillet dan penebalan

**Fillet between faces** membulatkan tepi tempat dua muka dari satu solid bertemu: pilih kedua muka (di tampilan, atau dengan **Pilih** dalam daftar), ketik **radius** dan, untuk radius yang berubah sepanjang tepi, **radius di ujung** (0 mempertahankan satu radius). Sebuah bola dengan radius itu digulirkan sepanjang tepi sambil menyentuh kedua muka; fillet adalah busur lingkaran tepat yang tersisa di setiap titik, disambung menjadi satu permukaan, dan kedua muka dipangkas di tempat bola menyentuhnya. Tepi luar kehilangan material, sudut dalam mendapatkan material. Baris hasil memberikan apa yang diukur: seberapa jauh permukaan fillet dari bola yang digulirkan di antara titik-titik tempat ia dibangun (titik ditambahkan sampai berada dalam seperempat toleransi), sudut terbesar antara fillet dan tiap muka sepanjang garis sentuh, dan angka yang sama seperti {{ui:Gabungkan}}. Radius yang tidak pas (bola akan keluar dari muka, atau muka melengkung lebih ketat dari radius) ditolak dengan menyebut nama muka, dan tidak ada yang berubah.

**Fillet several edges** membulatkan banyak tepi dalam satu langkah: pilih kedua muka dari tepi pertama, lalu kedua muka dari tepi berikutnya, dan seterusnya (satu muka boleh berada dalam beberapa pasangan, misalnya muka atas kotak ada di empat pasangan); semua tepi mendapat radius yang Anda ketik. Setiap pembulatan dihitung pada solid seperti keadaannya semula, lalu dipotong satu per satu, sehingga urutannya tidak berpengaruh. Di tempat dua tepi yang dibulatkan bertemu di sudut yang tepinya tetap tajam, kedua fillet bertemu di sepanjang kurva perpotongannya (lipatan). Di tempat tiga tepi luar yang dibulatkan dari tiga muka datar yang saling tegak lurus bertemu dengan satu radius, sudut itu menjadi satu **sphere patch** yang bersinggungan dengan ketiga fillet (hilangkan centang **Sudut** untuk mendapatkan sudut berlipat sebagai gantinya); sebuah tepi harus setidaknya dua kali radius panjangnya jika kedua ujungnya adalah sudut seperti itu. Baris hasil menyebutkan berapa tepi yang dibulatkan dan bagaimana sudut-sudutnya terbentuk. Tepi dalam juga dapat dibulatkan bersama, tetapi hasil yang tidak menutup kembali hanya dilaporkan (baris itu menyebutkannya), jadi periksalah.

**Thicken into a solid** memberi permukaan ketebalan: pilih, ketik **thickness**, dan centang **Sisi lain** untuk menumbuhkannya ke arah sebaliknya. Muka offset dipas ke permukaan dan diukur terhadapnya (baris hasil memberikan selisih terbesar dari ketebalan); dinding mengikuti setiap tepi dan setiap garis luar trim. Jika permukaan melengkung lebih ketat dari ketebalan di sisi itu, atau bagian lain darinya berada lebih dekat dari ketebalan, operasi ditolak dengan menyebut permukaan dan tempatnya, dan tidak ada yang berubah.

## Urungkan, file, STEP, dan IGES

Panel memiliki **Urungkan** dan **Ulangi** sendiri (satu langkah per perintah). Permukaan disimpan dalam file `.modelcraft` bersama model; permukaan tidak menjadi bagian dari undo model, seperti material file.

**STEP…** (AP242) dan **IGES…** menyimpan kurva dan permukaan persis seperti adanya (kurva dan permukaan B-spline, tidak ada yang diubah menjadi segitiga). Setiap permukaan menjadi muka sendiri, dengan trim-nya; solid ditulis sebagai satu cangkang tertutup, setiap tepi dimiliki bersama oleh dua muka seperti yang diharapkan program CAD lain (baris status menyebutkan berapa solid yang keluar dengan cara itu). Dalam IGES, solid yang sama menjadi satu B-rep solid manifold (entitas 186 di atas cangkang tertutup 514, muka 510, loop 508, satu daftar tepi 504, dan satu daftar vertex 502); solid yang mukanya tidak berpasangan tepi demi tepi ditulis sebagai muka terpisah, dan baris itu menyatakannya. **Import…** membaca solid seperti itu kembali sebagai solid, dari STEP dan dari IGES. Ia membaca kurva dan permukaan yang ditulis dengan cara ini, serta kumpulan patch `.ccnurbs`; solid STEP dari program lain dibuka dengan File › Import sebagai mesh.

## Permukaan dari pindaian (reverse engineering)

Pilih mesh hasil pindaian dalam model (jika tidak ada yang dipilih, berarti semuanya yang ditampilkan), buka **Permukaan**, lalu dalam grup **Scan** pilih **Fit surfaces to the scan**. Alat ini mencari **bidang**, **silinder**, **bola**, dan **kerucut** (permukaan tepat yang membentuk bagian hasil mesin; setiap baris menampilkan radius atau setengah sudut yang ditemukannya), mencari **fillet** (tepi dan sudut yang dibulatkan: silinder atau bola kecil yang bersinggungan ke dalam dua muka atau lebih, ditampilkan dengan radiusnya dan muka yang dihubungkannya), **rim fillet** (torus: tepi bulat tempat muka datar bertemu silinder atau kerucut, ditampilkan dengan radiusnya dan radius cincinnya), dan **variable fillet** (tepi bulat yang radiusnya berubah sepanjang tepi, ditampilkan dengan radius di setiap ujung), memasang **satu patch permukaan bebas** pada bagian yang halus dan melengkung landai, serta memangkas setiap muka ke garis luar bagian pindaian asalnya, sehingga lubang dan sudut tetap ada. Opsi: **toleransi** (seberapa jauh, dalam mm, sebuah titik pindaian boleh berada dari bidang atau silinder dan tetap termasuk di sana, serta target untuk patch permukaan bebas), **potongan terkecil** (bagian dari luas permukaan), dan **muka terbanyak**. Pindaian dan opsi yang sama selalu menghasilkan muka yang sama.

Hasilnya berupa tabel, satu baris per muka: jenisnya, berapa segitiga asalnya, dan galat yang **diukur dari pindaian ke muka** (rms, yang terbesar, dan bagian titik yang berada dalam toleransi). Titik yang diukur adalah vertex pindaian dan tengah setiap segitiga. Galat tidak diukur sebaliknya (muka ke pindaian), sehingga muka yang melampaui pindaian tidak akan terlihat. Catatan di bawah tabel juga menyebutkan berapa bagian luas yang terlalu kecil untuk dipas. Di tampilan, titik pindaian diberi warna menurut **peta deviasi**-nya: biru di muka, hijau di tengah jalan menuju toleransi, merah pada atau melebihi toleransi (hilangkan centang **Tampilkan peta deviasi** untuk menyembunyikannya). Bagian yang melipat kembali ke dirinya sendiri (misalnya tabung tertutup yang dipas dengan patch permukaan bebas) didaftar sebagai tidak dipas, dan tidak pernah dipaksa menjadi satu permukaan.

**Stitch the surfaces to a solid** menjahit setiap permukaan yang ditampilkan dan belum berada dalam solid menjadi satu solid tertutup. Muka pindaian hanya bertemu dalam galat pindaian itu sendiri, sehingga alat mencoba jarak sambungan terkecil yang menutup (tidak pernah lebih dari **stitch distance** yang Anda atur) dan menolak dengan kata-kata jika muka tidak menutup. Alat tidak pernah menambal celah. Kotak dengan tepi bulat akan dijahit jika fillet-nya ditemukan sebagai muka tersendiri; jarak sambungan yang berhasil menutup tercantum dalam hasil. Solid kemudian bekerja dengan {{ui:Gabungkan}}, Subtract, Intersect, dan **Add to the model**.

Yang tidak dilakukannya: **rim fillet** (torus) hanya dicari di sekitar sumbu silinder atau kerucut yang sudah ditemukan, dan **variable fillet** hanya sepanjang tepi yang cukup lurus (penampangnya dipotong tegak lurus ke satu arah); di tempat lain, keduanya menjadi patch permukaan bebas jika cukup halus, dan ditinggalkan jika tidak; bola, kerucut, dan fillet ditemukan dengan pengambilan sampel acak, sehingga yang sangat kecil (beberapa segitiga) bisa terlewat; peta deviasi menampilkan jarak dari pindaian ke muka, bukan sebaliknya; pindaian yang sangat besar (lebih dari 300.000 segitiga) ditolak di sini. Muka silinder putaran penuh dipangkas di sekitar lubang, dengan sambungannya ditempatkan di tempat yang tidak ada lubang. Periksa setiap muka terhadap pindaian Anda sebelum mengandalkannya.

## Belum dibuat

Membulatkan tepi yang bertemu di sudut muka melengkung atau dengan radius berbeda (blend vertex), fillet di antara muka yang tidak bertemu, fillet dalam yang berakhir pada muka miring atau melengkung, serta Boolean dan fillet yang dihitung pada permukaan tanpa segitiga (di sini mesin solid bekerja pada segitiga dalam toleransi, dan setiap titik kemudian dikembalikan ke permukaan yang tepat).
