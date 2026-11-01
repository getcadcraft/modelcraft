---
title: Memulai dengan ModelCraft
summary: Untuk apa ModelCraft, cara membukanya, dan kotak pertama Anda dari persegi panjang hingga model yang tersimpan.
keywords: mulai, model pertama, memulai, tutorial, pengantar, kotak, massing, 3d, dorong tarik, panduan cepat, panduan, pemula, baru mengenal 3d
from: d47ad719
---

ModelCraft adalah pemodel 3D untuk desain awal: studi massing, tata letak ruang, bentuk bangunan cepat, dan bayangan yang dijatuhkannya. Anda menggambar bentuk datar, menariknya ke atas menjadi solid, dan terus mengerjakannya dengan menggambar di mukanya. ModelCraft berjalan di peramban web Anda, dan model Anda tetap berada di komputer Anda.

Jika Anda pernah memakai SketchUp, sebagian besar yang Anda ketahui berlaku di sini: huruf alat yang sama, dorong/tarik, kotak nilai untuk ukuran tepat, grup dan komponen. [Datang dari pemodel lain](topic:coming-from) mendaftar apa yang berbeda.

## Buka ModelCraft

1. Buka ModelCraft di Chrome, Edge, Firefox, atau Safari versi terbaru. Lihat [Peramban dan komputer](common:browsers).
2. Tunggu tampilan 3D muncul: area terang (atau gelap) di tengah dengan kartu berjudul "Mulai memodelkan".

Layar memiliki bilah alat di sepanjang atas, {{ui:Kerangka}} dan {{ui:Komponen}} di kiri, tampilan 3D di tengah, {{ui:Info entitas}}, {{ui:Gaya}} dan {{ui:Scene}} di kanan, dan bilah status di sepanjang bawah dengan kotak nilai dan satuan. [Layar ModelCraft](topic:workspace) menjelaskan setiap bagian.

:::note
ModelCraft memerlukan WebGL, fitur gambar 3D peramban Anda. Jika bagian tengah layar tetap kosong dan alat tidak melakukan apa-apa, lihat [Pemecahan masalah](topic:troubleshooting#the-3d-view-is-blank).
:::

## Periksa satuan lebih dulu

Lihat sudut kanan bawah. Pemilih satuan menunjukkan dalam apa panjang diukur.

- Model baru dimulai dalam **kaki dan inci** jika peramban Anda diatur ke Amerika Serikat (juga Liberia dan Myanmar), dan dalam **milimeter** di tempat lain.
- Untuk mengubahnya, pilih satuan lain di pemilih: {{ui:ft dan in}}, {{ui:in}}, {{ui:m}}, {{ui:cm}} atau {{ui:mm}}. Ukuran model itu sendiri tidak berubah; hanya cara panjang ditampilkan dan cara angka tanpa satuan dibaca.

Angka yang Anda ketik tanpa satuan memakai satuan model. Pada model kaki-dan-inci, angka tanpa satuan adalah **inci**, jadi `120` berarti 10 kaki.

## Biarkan ModelCraft memandu model pertama Anda

Baru mengenal 3D? Di kartu {{ui:Mulai memodelkan}}, klik {{ui:Model pertama dengan panduan}} (juga ada di {{ui:Tampilan}}). Kartu kecil memandu Anda melalui empat langkah, dari persegi panjang datar hingga model yang siap untuk printer 3D:

1. Gambar persegi panjang di tanah.
2. Tarik ke atas menjadi kotak.
3. Jadikan kotak itu satu objek (grup).
4. Periksa untuk pencetakan 3D, lalu unduh file 3MF atau STL.

Kartu itu mengamati model, bukan tombol: ia maju saat langkah selesai, bagaimanapun caranya, dan mundur satu langkah saat Anda mengurungkan. {{ui:Pilih alat}} memilihkan alat untuk Anda. Tutup kapan saja dengan {{ui:×}}.

## Gambar kotak pertama Anda

1. Tekan {{key:R}} untuk alat {{ui:Persegi panjang}}, atau klik {{ui:Persegi panjang}} di grup {{ui:Gambar}} pada bilah alat.
2. Klik sekali di tanah dekat tengah tampilan. Itu sudut pertama.
3. Gerakkan penunjuk menjauh. Sebuah persegi panjang mengikutinya, dan kotak nilai di bawah (berlabel {{ui:Dimensi}}) menunjukkan ukurannya.
4. Ketik ukuran dan tekan {{key:Enter}}: misalnya `4m,3m`, atau `16',12'` dalam kaki dan inci. Anda tidak perlu mengklik kotak nilai lebih dulu; mengetik angka mengirimnya ke sana.

   Anda mendapat persegi panjang datar di tanah. Itu adalah **muka**: permukaan dengan tepi di sekelilingnya.

5. Tekan {{key:P}} untuk {{ui:Dorong/tarik}}.
6. Klik persegi panjang itu, gerakkan penunjuk ke atas, dan klik lagi. Atau klik persegi panjang dan ketik tinggi, seperti `3m` atau `10'`, lalu tekan {{key:Enter}}.

   Persegi panjang menjadi kotak dengan atas, bawah, dan empat sisi.

7. Tekan {{key:Space}} untuk kembali ke {{ui:Pilih}}, lalu klik bagian atas kotak. {{ui:Info entitas}} di kanan menunjukkan luasnya.

:::tip
Anda juga dapat menyeret alih-alih mengklik dua kali: tekan di sudut pertama, seret, dan lepaskan di sudut kedua. Kedua cara berlaku untuk setiap alat gambar.
:::

## Melihat sekeliling

- **Orbit:** seret dengan tombol tengah mouse (roda), atau tekan {{key:O}} dan seret dengan tombol kiri.
- **Geser:** seret dengan tombol kanan, atau dengan tombol tengah sambil menahan {{key:Shift}}.
- **Zoom:** putar roda. Zoom mengarah ke apa pun yang ada di bawah penunjuk.
- **Lihat semuanya:** tekan {{key:Shift+Z}}, atau klik {{ui:Batas}}.

Di trackpad atau layar sentuh, gesturnya berbeda. Lihat [Orbit, geser, dan zoom](topic:orbit-pan-zoom).

## Urungkan

Tekan {{key:Mod+Z}} untuk mengurungkan dan {{key:Mod+Y}} untuk mengulangi, atau pakai {{ui:Urungkan}} dan {{ui:Ulangi}} di bilah alat. ModelCraft mengingat 200 langkah terakhir selama model terbuka. Riwayat tidak disimpan di file.

## Simpan model Anda

1. Klik {{ui:Simpan}} di grup {{ui:File}}, atau tekan {{key:Mod+S}}.
2. Peramban mengunduh file dengan nama model Anda, seperti `Untitled.modelcraft`. Bilah status menyebutkan ke mana file pergi: "Untitled.modelcraft disimpan ke folder unduhan Anda."

**Menyimpan berarti mengunduh.** Setiap penyimpanan membuat salinan baru di folder unduhan Anda; ia tidak menimpa file yang Anda buka. Agar folder proyek tetap rapi, pindahkan atau ganti nama file di sana sendiri. [Buka, simpan, impor, dan ekspor](topic:files) menjelaskan alasannya dan apa lagi yang dapat Anda lakukan.

:::warning
ModelCraft tidak menyimpan dengan sendirinya. Jika Anda menutup tab dengan perubahan yang belum disimpan, peramban bertanya dulu ("Tinggalkan situs?"). Pilih untuk tetap, lalu simpan.
:::

## Mendapat bantuan

Tekan {{key:F1}} atau klik {{ui:Bantuan}} di bilah aplikasi untuk membuka bantuan ini di samping model. Bantuan berfungsi tanpa koneksi. Tekan {{key:F1}} lagi, atau {{key:Esc}} di dalam bantuan, untuk menutup. Lihat [Menggunakan bantuan ini](common:help).

## Ke mana selanjutnya

- [Gambar muka dengan garis, persegi panjang, dan lingkaran](topic:draw-faces)
- [Dorong dan tarik muka menjadi solid](topic:push-pull)
- [Ketik ukuran tepat di kotak nilai](topic:value-box)
- [Setiap tombol dan tindakan mouse](topic:keyboard)
