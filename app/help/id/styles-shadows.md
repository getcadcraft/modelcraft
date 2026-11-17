---
title: Gaya dan bayangan matahari
summary: Tampilkan model berbayang, sebagai garis tersembunyi, sebagai rangka kawat, atau tembus pandang, dan pelajari bayangan yang dihasilkannya pada tanggal, waktu, dan tempat apa pun.
keywords: tampilan presentasi, tampilan bersih, sembunyikan panduan, sembunyikan sumbu, gaya, berbayang, garis tersembunyi, rangka kawat, sinar-x, tepi, bayangan, matahari, studi matahari, solar, tanggal, waktu, lintang, bujur, zona waktu, utara
from: 09c95329
---

Panel {{ui:Gaya}} di sebelah kanan mengubah cara model digambar. Tidak ada yang ada di dalamnya yang mengubah model itu sendiri, dan itu tidak termasuk dalam urungkan. Setiap [scene](topic:scenes) mengingat gayanya sendiri, dan file mengingat gaya yang Anda miliki saat menyimpan.

## Muka

Pilih salah satu di daftar {{ui:Muka}}:

| Gaya | Tampilannya |
|---|---|
| {{ui:Berbayang}} | Muka padat, diterangi dengan lembut. Muka yang dilihat dari belakang berwarna abu-abu kebiruan. Warna yang diimpor tampil. |
| {{ui:Garis tersembunyi}} | Muka dalam warna latar dengan tepi dalam warna tinta: gambar garis yang bersih dengan garis tersembunyi dihilangkan. Putih pada {{ui:Kertas}}, gelap pada {{ui:Model}}. |
| {{ui:Rangka kawat}} | Hanya tepi. Muka tidak digambar, tetapi tetap dihitung saat Anda klik dan snap: Anda tidak dapat menembusnya. |
| {{ui:Sinar-X}} | Muka tembus pandang, untuk melihat apa yang ada di belakang atau di dalam. Seperti pada rangka kawat, klik dan snap tetap berhenti di muka terdekat. |

{{ui:Tampilkan tepi}} menyalakan atau mematikan tepi di setiap gaya kecuali {{ui:Rangka kawat}}. Dengan itu mati, {{ui:Garis tersembunyi}} hampir tidak menampilkan apa-apa, karena mukanya menyatu dengan latar belakang. Tepi lembut, seperti sisi lingkaran yang ditarik, tidak pernah digambar.

## Menyalakan bayangan matahari

1. Centang {{ui:Bayangan matahari}}. Pengaturan matahari di bawahnya menjadi aktif, dan model memberi bayangan pada dirinya sendiri dan pada tanah.
2. Atur tempatnya:
   - {{ui:Lintang}}: utara positif, selatan negatif (New York sekitar 40.7, Sydney sekitar -33.9).
   - {{ui:Bujur}}: timur positif, barat negatif (New York sekitar -74.0).
   - {{ui:Selisih UTC}}: selisih lokasi dari UTC dalam jam, seperti `-5` untuk New York pada musim dingin. ModelCraft tidak menerapkan waktu musim panas; gunakan `-4` untuk New York pada musim panas.
3. Atur {{ui:Tanggal}} (bulan dan hari) dan seret penggeser {{ui:Waktu}}. Waktu bergerak dalam langkah 15 menit dan ditampilkan di samping penggeser, seperti "3:00 pm".

Satu baris di bawah pengaturan menyatakan posisi matahari, misalnya "Matahari 52° di atas, 250° dari utara. Utara adalah sumbu hijau." Pada malam hari tertulis "Matahari ada di bawah cakrawala pada waktu ini."

Model baru dimulai dengan matahari pada 21 Juni pukul 3:00 pm, pada lintang 40, bujur -105, dan selisih UTC -7.

## Mengarahkan model ke utara

Utara ModelCraft selalu adalah **sumbu hijau**. Untuk mempelajari lokasi nyata, putar model agar sisi utaranya menghadap sepanjang hijau: pilih semuanya ({{key:Mod+A}}), tekan {{key:Q}}, klik sebuah pusat di tanah, lalu putar sebesar sudut lokasi dari utara (lihat [Putar dan skala](topic:rotate-scale)).

## Studi matahari

1. Atur lokasi dan tanggalnya.
2. Tambahkan scene ({{ui:Tambah scene}} di {{ui:Scene}}).
3. Gerakkan penggeser waktu, lalu tambahkan scene lain. Ulangi untuk setiap jam yang Anda inginkan.
4. Klik {{ui:Putar}} untuk melangkah melalui scene. Lihat [Simpan tampilan sebagai scene](topic:scenes).

## Hal yang perlu diketahui

- Bayangan bisa tampak bergerigi pada model yang sangat besar, karena satu peta bayangan mencakup seluruh model.
- Bayangan tidak digambar dalam {{ui:Rangka kawat}}.
- Posisi matahari mengikuti perhitungan matahari NOAA dan akurat hingga sebagian kecil derajat, yang cukup untuk studi massa. Refraksi atmosfer diabaikan, sehingga sudut matahari yang sangat rendah dekat terbit dan terbenam bisa sedikit meleset.

## Tampilan presentasi

{{ui:Tampilan}} › {{ui:Tampilan presentasi}} (atau {{key:Shift+P}}) hanya menampilkan model: sumbu, garis bantu dan titik bantu, garis besar bidang potong (potongannya tetap), tanda lampu, kotak grup yang sedang terbuka, tanda dan tips snap, serta sorotan pilihan, semuanya dihilangkan. Gunakan ini untuk melihat model dengan jelas, atau sebelum mengambil tangkapan layar. Alat tetap bekerja dan tetap melakukan snap; Anda hanya tidak melihat tandanya. Tekan {{key:Shift+P}} lagi untuk memunculkannya kembali. Dimensi tetap ada, karena merupakan bagian dari gambar. Saat Anda sedang menyunting di dalam grup, sisa model tidak lagi memudar: ia tampil apa adanya, termasuk teksturnya.
