---
title: Model di atas denah tapak dari DWG atau DXF
summary: Bawa denah tapak CAD atau denah lantai sebagai garis di atas tanah, jawab pertanyaan satuan, dan telusuri menjadi muka serta massa.
keywords: denah tapak, dwg, dxf, cad, impor, sketsa, foto sketsa, sketsa tangan, sketsa serbet, foto, kertas, warna pena, blok dinamis, status visibilitas, teks, hatch, spline, elips, 3D face, telusuri, denah lantai, kavling, batas properti, satuan, underlay, konteks
from: 3415dc96
---

ModelCraft dapat membawa garis dari gambar CAD 2D, denah tapak, atau denah lantai, dan meletakkannya di atas tanah agar Anda dapat memodelkan di atasnya.

## Impor gambar

1. Klik {{ui:Impor}} di grup {{ui:File}} (atau seret file ke tampilan 3D).
2. Pilih file `.dwg` atau `.dxf`.

   Gambar DWG yang besar membutuhkan waktu sebentar: bilah status menampilkan "Membaca plan.dwg…" sampai gambar selesai dimuat.

3. Jika gambar tidak menyebutkan satuannya, dialog berjudul "Satuan gambar" bertanya: "Apa itu satu satuan gambar?" Pilih {{ui:Inci}}, {{ui:Kaki}}, {{ui:Milimeter}} atau {{ui:Meter}}. Sebagian besar denah tapak di AS digambar dalam kaki, denah arsitektur dalam inci, dan denah metrik dalam milimeter.

   Gambar tiba sebagai grup tepi di atas tanah, terpilih, dan tampilan memperbesar ke sana. Bilah status menyatakan berapa banyak tepi yang masuk, misalnya "Diimpor site.dwg: 1697 tepi di atas tanah, dalam grup. Urai untuk menggambar langsung di atasnya."

## Apa yang masuk

- Garis, polyline (termasuk busurnya), lingkaran dan busur, serta blok beserta isinya, dari **ruang model** saja. Kurva menjadi potongan lurus pendek.
- Garis, polyline, busur, lingkaran, elips dan spline mendarat datar di atas tanah, sebagai tepi.
- **Hatch** menjadi muka di atas tanah, dengan pulaunya sebagai lubang, sehingga Anda dapat langsung mendorong/menarik area yang di-hatch.
- **3D face** dan isian solid menjadi muka; 3D face mempertahankan tingginya.
- **Teks** (teks satu baris, teks multibaris dan nilai atribut) digambar sebagai tepi dengan huruf goresan tunggal yang sederhana, pada tinggi, sudut dan perataan teks itu sendiri. Fontnya bukan milik gambar, sehingga kata-katanya mungkin sedikit lebih panjang atau pendek. Karakter yang tidak memiliki bentuk dalam huruf ini digambar sebagai kotak kecil dan dihitung.
- **Dimensi** digambar seperti yang ditampilkan gambar (garis, mata panah dan teksnya, sebagai tepi dan muka).
- **Blok dinamis** masuk seperti yang ditampilkan gambar: setiap blok yang ditempatkan dalam status visibilitas saat disimpan, dan hanya garis dari status itu. Bilah status mencantumkannya dengan status yang ditampilkan serta status lain yang dimilikinya, misalnya "Receptacle ditampilkan sebagai Duplex ×38, GFI ×7 (status: Duplex, GFI)". ModelCraft tidak mengganti status.
- **Solid 3D, region dan body** (data ACIS dari gambar) masuk sebagai grupnya sendiri: solid tertutup sebagai solid, region atau body terbuka sebagai muka. Muka datar masuk utuh; muka melengkung (silinder, kerucut, bola, torus, permukaan spline sederhana) masuk sebagai segitiga kecil dengan tepi lembut di antaranya, sehingga hanya tepi solid itu sendiri yang tampak. Muka pada jenis permukaan lain ditinggalkan dan dicantumkan: "Belum digambar (solid 3D): …".
- Tidak diimpor: titik, tabel, multileader, gambar dan jenis objek lainnya. Bilah status mencantumkannya menurut jenis, misalnya "Tidak diimpor: 12 POINT." Apa pun yang ada di layout (ruang kertas) juga ditinggalkan, tanpa dicantumkan.
- Layer tidak dipertahankan: semua garis masuk dengan cara yang sama.

Jika gambar jauh dari titik asalnya (misalnya koordinat state plane), gambar tetap diimpor, tetapi mungkin mendarat jauh dari titik asal ModelCraft. Gambar yang berjarak lebih dari 10,000 km dari asalnya ditolak: pindahkan gambar lebih dekat ke 0,0 di program CAD terlebih dahulu.

## Telusuri menjadi muka

Garis yang diimpor jarang menutup rapi menjadi muka dengan sendirinya. Ada dua cara bekerja:

**Simpan denah sebagai underlay (dianjurkan)**

1. Biarkan denah sebagai grupnya sendiri.
2. Gambar bangunan Anda di atasnya dengan {{ui:Persegi panjang}} dan {{ui:Garis}}, dengan snap ke sudut denah ("Titik ujung") dan tepinya ("Pada tepi").
3. Dorong/tarik muka Anda ke atas. Denah tetap utuh di bawahnya, dan Anda dapat menghapus seluruh grup nanti dengan satu klik.

Snap bekerja lintas grup: Anda dapat melakukan snap ke sudut denah tanpa membukanya.

**Gambar di atas garis denah itu sendiri**

1. Pilih grup denah dan klik {{ui:Urai}}. Garisnya menjadi tepi lepas.
2. Jika sebuah garis tertutup seharusnya menjadi muka, gambar satu garis di atas salah satu tepinya dengan {{ui:Garis}}, dari sudut ke sudut. Saat garis tertutup dan datar, muka biasanya terisi. Jika tidak, cari celah atau tumpang tindih pada garis dan gambar di atasnya.
3. Dorong/tarik muka itu.

Cara ini paling baik pada denah yang bersih. Pada survei yang padat, menelusuri di atasnya lebih cepat.

## Masalah

- "Ini DXF biner. Simpan sebagai DXF ASCII dan coba lagi." Simpan ulang DXF dari program CAD sebagai ASCII (teks).
- "…tidak memiliki garis, busur atau lingkaran di ruang model untuk diimpor." Kemungkinan gambarnya semua ada di layout, atau semuanya berupa teks dan hatch.
- "Gambar ini tidak dapat dibaca (…). Mungkin rusak, atau disimpan dalam versi DWG yang tidak didukung pembaca…" Tanda kurung menjelaskan penyebabnya, misalnya "Versi DWG AC1009 tidak didukung". Simpan sebagai DXF, atau sebagai DWG dari AutoCAD 2000 hingga 2018, dari program CAD.
- Denah berukuran salah: Anda memilih satuan yang keliru. Urungkan ({{key:Mod+Z}}) dan impor ulang, atau [skalakan](topic:rotate-scale) grup dengan faktor yang benar (12 antara kaki dan inci, 25.4 antara inci dan milimeter).

Untuk mengubah garis kontur menjadi tanah yang bisa Anda pahat, lihat [Medan](topic:terrain).

## Dari foto sketsa tangan

**File › Impor foto sketsa…** mengambil foto sketsa di atas kertas (JPEG, PNG atau TIFF; langsung dari ponsel juga bisa) dan membuat jenis tepi yang sama di atas tanah. Sebutkan kertasnya (atau biarkan ia menemukan lembarnya, dianggap A4) dan skala sketsanya, misalnya 1 : 100. Tepi kertas ditemukan dan foto diluruskan, tinta ditelusuri menjadi garis dan busur, dan setiap warna pena (hitam, merah, biru, hijau) menjadi grup tersendiri dengan tag (**Sketch black**, **Sketch red**, …), semuanya di dalam satu grup yang dinamai menurut foto. Itu satu langkah urungkan, dan semuanya terjadi di komputer ini: tidak ada yang dikirim ke mana pun.

Jika tepi kertas tidak dapat ditemukan, seluruh foto dianggap sebagai lembar dan baris status menyatakannya: ukur sesuatu yang Anda ketahui dan skalakan grup jika ukurannya meleset. Telusuri garis menjadi muka seperti di atas.
