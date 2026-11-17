---
title: Putar dan skala
summary: Putar benda di sekitar satu titik dengan mengklik atau mengetik derajat, dan ubah ukurannya secara merata dengan faktor.
keywords: grip skala, regangkan, tidak seragam, per sumbu, balik, cermin, salinan cermin, balik sepanjang, putar, sudut, derajat, busur derajat, skala, ubah ukuran, perbesar, perkecil, faktor, skala seragam
from: 45cdcb49
---

## Putar

{{ui:Rotate}} ({{key:Q}}) memutar pilihan di sekitar titik pusat. Dibutuhkan tiga klik: pusat, arah awal, dan arah akhir.

1. Pilih apa yang ingin Anda putar. Jika tidak ada yang dipilih, Putar akan mengambil benda pertama yang Anda klik.
2. Tekan {{key:Q}}. Sebuah cincin mengikuti penunjuk, menunjukkan bidang tempat Anda akan memutar.
3. Klik pusat rotasi.
   - Di tanah atau ruang kosong, cincin tergeletak datar (biru): putarannya terhadap sumbu vertikal, seperti memutar bangunan di lokasinya.
   - Di sebuah muka, cincin berada di bidang muka itu: putarannya terhadap arah muka itu sendiri. Klik pada dinding untuk memutar sesuatu terhadap sumbu horizontal.
4. Klik titik yang menetapkan di mana sudut dimulai, misalnya sepanjang tepi benda yang sedang Anda putar.
5. Gerakkan penunjuk di sekitar pusat. Sudutnya tampil di tips dan di kotak nilai ({{ui:Angle}}). Sudut akan meloncat per langkah 15° saat Anda mendekati salah satunya.
6. Klik untuk menyelesaikan, atau ketik sudut dalam derajat lalu tekan {{key:Enter}}: `90`, `45`, `-30`.

   Sudut positif berputar berlawanan arah jarum jam, dilihat dari sisi yang dihadapi cincin.

Tekan {{key:Ctrl}} (atau {{key:Alt}}) saat memutar untuk memutar **salinan** dan membiarkan asli tetap di tempatnya, seperti pada Pindahkan; tips di dekat penunjuk menyebutkan apakah salinan aktif, dan menekan tombol itu lagi akan mematikannya. Ketik `3x` tepat setelah salinan yang diputar untuk lebih banyak salinan di sekitar pusat yang sama.

Seperti Pindahkan, memutar sebagian geometri yang terhubung akan memuntir muka yang melekat padanya. Buat grup terlebih dahulu untuk memutar semuanya secara utuh.

:::note
Tips menyebutkan bahwa tombol panah memilih sumbu rotasi, tetapi dalam build ini tombol panah malah memutar tampilan sebelum klik pertama. Untuk memilih sumbu, klik pusat pada muka yang menghadap arah yang Anda inginkan. Lihat [Belum dibuat](topic:not-built-yet).
:::

## Skala

{{ui:Scale}} ({{key:S}}) mengubah ukuran pilihan. Pilih apa yang ingin Anda ubah ukurannya terlebih dahulu, lalu tekan {{key:S}}: kotak-kotak kecil (grip) muncul di sudut, tepi, dan tengah sisi kotak pembatasnya.

### Regangkan atau skalakan dengan grip

- Grip **sudut** menskalakan secara merata ke segala arah, terhadap sudut yang berseberangan.
- Grip di tengah **sisi** meregang hanya sepanjang arah itu, terhadap sisi yang berseberangan: membuat kotak lebih panjang tanpa membuatnya lebih tinggi.
- Grip di tengah **tepi kotak** meregang ke dua arah yang melintang.
- Tahan {{key:Ctrl}} saat Anda mengklik grip untuk menskalakan terhadap tengah kotak sebagai gantinya.

Klik sebuah grip, gerakkan penunjuk, lalu klik lagi; atau klik grip dan ketik faktor (`2` menggandakan, `0.5` membagi dua) lalu tekan {{key:Enter}}. Untuk memberi setiap arah faktornya sendiri, ketik tiga angka, untuk merah, hijau, dan biru: `2,1,0.5`. Di dalam grup yang terbuka, arahnya adalah milik grup itu sendiri.

### Skala terhadap titik mana pun

Klik di mana saja selain grip untuk menskalakan secara merata terhadap titik pilihan Anda. Dibutuhkan tiga klik:

1. Pilih apa yang ingin Anda ubah ukurannya. Jika tidak ada yang dipilih, Skala akan mengambil benda pertama yang Anda klik.
2. Tekan {{key:S}}.
3. Klik titik yang tetap di tempatnya (bukan di grip), misalnya sudut bawah.
4. Klik titik referensi. Jaraknya dari titik pertama dihitung sebagai 1×.
5. Gerakkan penunjuk mendekat atau menjauh dari titik pertama. Faktornya tampil di tips dan di kotak nilai ({{ui:Scale}}).
6. Klik untuk menyelesaikan, atau ketik faktor lalu tekan {{key:Enter}}: `2` menggandakan ukuran, `0.5` membagi dua.

### Skala ke ukuran pasti

Untuk membuat sesuatu memiliki panjang pasti, hitung faktornya: panjang baru dibagi panjang sekarang. Dalam mode tiga klik, kotak nilai melakukan operasi hitung, jadi ketik `4.2/3.6` untuk membuat dinding 3.6 m menjadi 4.2 m panjangnya. Kotak nilai grip hanya menerima angka biasa: hitung faktornya terlebih dahulu (4.2 dibagi 3.6 kira-kira 1.1667). Pilih tepi terlebih dahulu untuk membaca panjang sekarangnya di {{ui:Entity info}}.

### Perbaiki impor yang ukurannya salah

File OBJ tidak memiliki satuan, sehingga model yang digambar dalam milimeter masuk 1000 kali terlalu besar. Pilih grup yang diimpor, tekan {{key:S}}, klik grip sudut, lalu ketik `0.001` dan tekan {{key:Enter}}. Untuk model yang digambar dalam inci, ketik `0.0254`.

## Hal yang perlu diketahui

- Penskalaan terhadap satu titik dengan tiga klik bersifat seragam. Untuk meregang ke satu arah saja, gunakan grip sisi atau tepi (lihat di atas).
- Menskalakan grup atau komponen mengubah salinan yang Anda skalakan; salinan lain dari komponen yang sama tetap mempertahankan ukurannya.
- Tekan {{key:Esc}} sebelum klik terakhir untuk membatalkan.

## Balik

{{ui:Edit}} › {{ui:More}} › {{ui:Flip along red}}, {{ui:Flip along green}} atau {{ui:Flip along blue}} mencerminkan pilihan di tempatnya, melalui tengah kotak pembatasnya: tangga dengan arah kiri menjadi arah kanan. Muka tetap menghadap keluar, dan grup atau komponen dicerminkan sebagai satu kesatuan (bagian dalamnya tidak ditulis ulang).

{{ui:Flipped copy along red}} (dan hijau, biru) membiarkan asli tetap di tempatnya dan menaruh salinan cermin di sebelahnya, melintang di sisi jauh kotak pembatas pilihan: pintu kedua dari sepasang pintu, sayap kedua dari sebuah bangunan. Geometri lepas yang bersentuhan di sana akan bergabung dengan asli, seperti geometri yang bersentuhan selalu lakukan; jadikan asli sebuah grup terlebih dahulu agar keduanya tetap terpisah.

Di dalam grup yang terbuka, merah, hijau, dan biru adalah sumbu milik grup itu sendiri.
