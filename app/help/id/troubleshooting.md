---
title: Pemecahan masalah
summary: Gejala, penyebab, dan perbaikannya, dari tampilan 3D yang kosong hingga impor dengan ukuran yang salah, dengan pesan yang ditampilkan ModelCraft.
keywords: masalah, gangguan, kesalahan, tidak berfungsi, kosong, webgl, grafis, lambat, pesan, impor gagal, ukuran salah, tidak dapat memilih, sentuh, tombol tidak berfungsi, pekerjaan hilang
from: 6e7394be
---

## Tampilan 3D kosong

**Gejala:** bagian tengah layar tetap kosong, atau hanya menampilkan warna latar, dan mengklik alat tidak melakukan apa-apa.

**Penyebab:** ModelCraft menggambar dengan WebGL 2, yaitu grafis 3D peramban. Fitur ini tidak tersedia ketika peramban sudah lama, ketika akselerasi perangkat keras dimatikan, atau ketika driver grafis diblokir.

**Perbaikan:**

:::chromium
1. Buka pengaturan peramban dan cari "akselerasi grafis".
2. Nyalakan "Gunakan akselerasi grafis jika tersedia" dan luncurkan ulang peramban.
3. Jika sudah menyala, ketik `chrome://gpu` di bilah alamat (`edge://gpu` di Edge) dan cari "WebGL2" dalam daftar. Jika tertulis dinonaktifkan, perbarui driver grafis Anda.
:::

:::firefox
1. Buka **Pengaturan**, lalu **Umum**, dan gulir ke "Performa".
2. Hapus centang "Gunakan pengaturan performa yang direkomendasikan", lalu centang "Gunakan akselerasi perangkat keras jika tersedia". Mulai ulang Firefox.
3. Jika masih gagal, ketik `about:support` di bilah alamat dan lihat bagian "Grafis" untuk WebGL 2.
:::

:::safari
Perbarui macOS dan Safari. Safari versi terbaru selalu mengaktifkan WebGL 2. Jika Anda mengubah fitur eksperimental di **Safari**, lalu **Pengaturan**, lalu **Lanjutan** (atau **Feature Flags**), atur ulang fitur tersebut.
:::

Di komputer kantor, desktop jarak jauh, atau mesin virtual, grafis 3D mungkin diblokir oleh kebijakan. Coba komputer lain. Lihat [Peramban dan komputer](common:browsers).

## Tombol tidak berfungsi, atau mengetik ke dalam kotak

**Penyebab:** fokus keyboard berada di kolom isian panel: daftar {{ui:Muka}} di {{ui:Gaya}}, pengaturan matahari, kolom {{ui:Nama}} di {{ui:Info entitas}}, atau pemilih satuan. Huruf dan tombol panah kemudian masuk ke kolom itu.

**Perbaikan:** klik di tampilan 3D, lalu tekan tombolnya lagi. Tombol juga tidak berfungsi saat sebuah dialog terbuka.

## Mengetik angka tidak berfungsi

- **Belum ada arah.** Panjang yang diketik mengikuti arah penunjuk dari klik pertama. Gerakkan penunjuk sedikit ke arah yang Anda inginkan, lalu ketik.
- **Waktunya salah.** Sebagian besar alat menerima nilai yang diketik hanya setelah klik pertama: klik sudut pertama, muka, atau titik yang akan dipindahkan terlebih dahulu. {{ui:Lingkaran}} dan {{ui:Poligon}} menerima jumlah sisi sebelum klik pertama.
- **"Ketik panjang seperti 3m, 10'6" atau 4m,3m."** ModelCraft tidak dapat membacanya. Periksa koma desimal (`2,5`): gunakan titik.

## Bentuk dimulai di tempat yang salah pada layar sentuh

**Gejala:** dengan jari, persegi panjang pertama sudah benar, tetapi persegi panjang, lingkaran, atau garis berikutnya dimulai di tempat sentuhan sebelumnya berakhir, bukan di tempat Anda menyentuh.

**Penyebab:** kesalahan pada build ini: di layar sentuh, alat mengingat titik snap terakhir dari gestur sebelumnya.

**Perbaikan:** ketuk tombol alat di bilah alat lagi sebelum setiap bentuk baru. Itu memulai alat dari awal, dan titik pertama jatuh di tempat Anda menyentuh.

## Menyunting satu grup mengubah grup lain

**Gejala:** Anda menyalin grup dengan {{ui:Pindahkan}} dan {{key:Ctrl}}, membuka salah satu salinan dan menyuntingnya, dan salinan yang lain ikut berubah. {{ui:Kerangka}} menampilkan keduanya dengan nama yang sama.

**Penyebab:** pada build ini, menyalin grup membuat penempatan kedua dari grup yang sama, seperti pada komponen. Tombol {{ui:Jadikan unik}} hanya ditawarkan untuk komponen.

**Perbaikan:** pilih salinan yang ingin Anda ubah, klik {{ui:Buat komponen}} di {{ui:Info entitas}}, lalu {{ui:Jadikan unik}}. Salinan itu sekarang memiliki isinya sendiri. Atau {{ui:Urai}} salinan itu.

## Dorong/tarik tidak melakukan yang saya harapkan

- **"Dorong/tarik bekerja pada muka. Klik sebuah muka."** Anda mengklik tepi atau ruang kosong. Arahkan kursor sampai muka tersorot, lalu klik.
- **Muka berada di dalam grup.** Klik dua kali grup untuk membukanya terlebih dahulu.
- **Jendela tidak memotong dinding.** Persegi panjang harus digambar pada muka dinding, bukan di depannya, dan dinding harus memiliki muka belakang. Lihat [Potong bukaan melalui dinding](topic:openings#if-it-did-not-cut-through).
- **Dua kotak tumpang tindih tanpa menyatu.** Solid yang didorong ke satu sama lain tidak saling memotong atau menyatu pada build ini.

## Garis atau bentuk tidak membuat muka

Muka hanya terisi ketika tepi-tepinya menutup loop datar. Periksa bahwa titik terakhir menempel ke titik pertama ("Titik ujung"), dan bahwa semua tepi berada dalam satu bidang. Loop yang sedikit keluar dari bidang tetap berupa garis. Gambar ulang salah satu tepinya, dengan snap ke sudut-sudutnya.

## Saya tidak dapat memilih atau menghapus muka

- Dengan {{ui:Pilih}}, klik di dekat tepi akan mengambil tepinya. Klik lebih dekat ke tengah muka.
- {{ui:Penghapus}} tidak memilih muka. Pilih muka dan tekan {{key:Delete}}, atau hapus salah satu tepinya.
- Jika muka termasuk grup atau komponen, klik akan memilih seluruhnya. Klik dua kali untuk membukanya.

## "Pilih sesuatu untuk dipindahkan dulu, atau klik padanya."

{{ui:Pindahkan}}, {{ui:Putar}} dan {{ui:Skala}} memerlukan sesuatu untuk dikerjakan: pilih dahulu, atau mulai alat dengan mengklik benda itu sendiri (bukan ruang kosong atau panduan).

## "Pilih dulu beberapa geometri (seret jendela, atau klik tiga kali untuk memilih semua yang terhubung)."

{{key:G}} dan {{key:Shift+G}} memerlukan pilihan. Panduan tidak dapat dijadikan grup.

## Tombol panah memutar alih-alih mengunci

Kunci hanya bekerja setelah klik pertama dari alat menggambar atau menyunting. {{ui:Dorong/tarik}} tidak memiliki kunci, dan di {{ui:Putar}} kunci tidak mengubah putaran. Pada waktu lain, tombol panah memutar tampilan.

## Esc pada layar penuh

Pada layar penuh, peramban mungkin menggunakan {{key:Esc}} pertama untuk keluar dari layar penuh. Tekan {{key:Esc}} lagi untuk membatalkan alat.

## Tidak ada tombol tengah

Tekan {{key:O}} untuk {{ui:Orbit}} dan seret, atau gunakan tombol panah. Lihat [Orbit, geser, dan zoom](topic:orbit-pan-zoom#without-a-middle-button).

## Impor

| Pesan | Yang harus dilakukan |
|---|---|
| "ModelCraft mengimpor SketchUp (.skp), Collada (.dae), OBJ, glTF (.glb/.gltf), FBX, PLY, STL, Alembic (.abc), DWG dan DXF. … bukan salah satu dari format ini." | Ekspor model dari program lain dalam salah satu format ini |
| "File ini lebih dari 300 MB." | Sederhanakan atau bagi model di program lain |
| "…terlalu besar untuk dimodelkan di sini (lebih dari 2 juta verteks)." | Sama |
| "File .gltf ini memerlukan "…"…" | Seret `.gltf` bersama file `.bin` dan tekstur-teksturnya, atau buka versi `.glb` |
| "File glTF ini memerlukan ekstensi …, yang belum dibaca ModelCraft." | Ekspor ulang dari program lain tanpa ekstensi itu (tekstur KTX2, misalnya) |
| OBJ masuk tanpa warna atau teksturnya | Seret `.obj` bersama `.mtl` dan gambar-gambarnya |
| "File Alembic ini menggunakan tata letak HDF5 lama…" | Simpan ulang dari program lain sebagai file Ogawa Alembic |
| FBX masuk tanpa teksturnya | Seret `.fbx` bersama gambar teksturnya, atau sematkan media saat mengekspor |
| "File FBX ini adalah versi …, yang tidak dibaca ModelCraft" | Ekspor ulang sebagai FBX 2011 atau yang lebih baru |
| STL atau PLY masuk 1000 kali terlalu besar atau kecil | STL dibaca sebagai milimeter dan PLY sebagai meter: skalakan ulang (lihat [Putar dan skala](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)) |
| "Ini bukan file Collada (.dae)…" atau "…bukan XML yang terbentuk dengan baik…" | File rusak atau bukan Collada. Ekspor ulang |
| "File Collada ini tidak memiliki geometri yang dapat diimpor ModelCraft." | Hanya berisi kamera, lampu, atau referensi ke file lain |
| "Ini adalah DXF biner. Simpan sebagai DXF ASCII lalu coba lagi." | Simpan ulang dari program CAD sebagai ASCII |
| "Ini bukan gambar DWG…" | File bukan DWG, atau rusak |
| "Gambar ini tidak dapat dibaca (…). Mungkin rusak, atau disimpan dalam versi DWG yang tidak ditangani pembaca…" | Tanda kurung memberi alasannya. Simpan sebagai DXF, atau sebagai DWG dari AutoCAD 2000 hingga 2018, dari program CAD |
| "Gambar ini mencapai lebih dari 10,000 km dari titik asalnya…" | Pindahkan gambar mendekati 0,0 di program CAD |

### Impor berukuran salah atau tergeletak miring

- **OBJ:** OBJ tidak memiliki satuan; ModelCraft membacanya sebagai meter. Model dalam milimeter masuk 1000 kali terlalu besar: [skalakan](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size) dengan `0.001`; model dalam inci dengan `0.0254`.
- **OBJ tergeletak miring:** ModelCraft mengharapkan file OBJ dengan Y ke atas. File yang ditulis dengan Z ke atas akan masuk dalam keadaan rebah. Putar 90° sekitar sumbu merah: klik pusat {{ui:Putar}} pada muka yang menghadap sepanjang merah, atau buka file di programnya dan ekspor dengan Y ke atas.
- **DWG atau DXF:** Anda memilih satuan yang salah di dialog "Satuan gambar". Urungkan dan impor lagi.

## Membuka file

| Pesan | Yang harus dilakukan |
|---|---|
| "File ini bukan model ModelCraft (bukan JSON)." | Gunakan {{ui:Impor}} untuk format lain |
| "Ini bukan file ModelCraft yang dapat kami buka: …" | File rusak atau diubah dengan tangan |
| "Model ini disimpan oleh ModelCraft yang lebih baru…" | Buka di versi yang lebih baru |
| "File ini lebih dari 200 MB." | Model terlalu besar untuk dibuka di sini |

## Saya kehilangan pekerjaan

ModelCraft tidak menyimpan ke file dengan sendirinya. Saat Anda menutup atau memuat ulang tab dengan perubahan yang belum disimpan, peramban akan bertanya dahulu ("Tinggalkan situs?" atau "Muat ulang situs?"); pilih untuk tetap di situ dan simpan. Baru dan Buka juga bertanya ("Perubahan yang belum disimpan"). Jika peramban atau komputer mati mendadak, buka ModelCraft lagi di peramban yang sama: ia menawarkan kembali pekerjaan yang belum disimpan ("Pulihkan pekerjaan Anda?"; lihat [Pulihkan pekerjaan Anda](common:recover)). Simpan sering dengan {{key:Mod+S}}.

## Folder unduhan saya penuh dengan salinan

Setiap penyimpanan menjadi unduhan baru, dinamai `Untitled (1).modelcraft`, `Untitled (2).modelcraft` dan seterusnya. Hapus yang lama, atau atur peramban untuk bertanya di mana menyimpan setiap file dan menimpa file lama sendiri. Lihat [Buka, simpan, impor, dan ekspor](topic:files#save-a-model).

## Menjadi lambat

- Setiap langkah urungkan menyimpan salinan model (sebuah [mesh](topic:meshes) hanya menyimpan yang berubah), sehingga pada impor geometri dorong/tarik yang sangat besar, setiap suntingan memakan waktu lebih lama. Urai atau hapus yang tidak Anda perlukan, simpan, lalu buka lagi: membuka lagi juga menghapus riwayat urungkan.
- Bayangan matahari paling berat. Hapus centang {{ui:Bayangan matahari}} saat Anda memodelkan.

## Tidak ada bayangan

{{ui:Bayangan matahari}} mati, matahari berada di bawah cakrawala pada waktu yang Anda pilih ("Matahari ada di bawah cakrawala pada waktu ini."), atau gayanya adalah {{ui:Rangka kawat}}, yang tidak menggambar bayangan.

## "Peramban ini tidak mengizinkan layar penuh."

Beberapa peramban dan tampilan tertanam menolak layar penuh. Gunakan layar penuh milik peramban sendiri sebagai gantinya ({{pick:mac=Control-Command-F|windows linux=F11}}).

## ModelCraft tidak terbuka tanpa koneksi

ModelCraft hanya terbuka secara offline setelah disimpan untuk penggunaan offline di peramban itu: tombol di bilah aplikasi harus bertuliskan {{ui:Siap offline}}. Buka saat online dan klik {{ui:Simpan untuk offline}}. Jika tombol bertuliskan {{ui:Tidak dapat menyimpan}}, klik lagi pada koneksi yang lebih baik. {{ui:Offline tidak tersedia}} berarti jendela ini (jendela privat, atau komputer yang dikelola) tidak dapat menyimpan salinan. Lihat [Bekerja offline](common:offline).
