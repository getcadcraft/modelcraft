---
title: Putar dan skala
summary: Pusing benda mengelilingi satu titik dengan klik atau dengan menaip darjah, dan ubah saiznya secara sekata mengikut faktor.
keywords: skala grip, regang, tidak seragam, mengikut paksi, balik, cermin, salinan bercermin, balik sepanjang, putar, pusing, sudut, darjah, protraktor, skala, ubah saiz, besarkan, kecilkan, faktor, skala seragam
from: 45cdcb49
---

## Putar

{{ui:Putar}} ({{key:Q}}) memutar pilihan mengelilingi titik pusat. Ia memerlukan tiga klik: pusat, arah permulaan, dan arah akhir.

1. Pilih apa yang anda mahu putar. Jika tiada apa-apa dipilih, Putar mengambil benda yang anda klik dahulu.
2. Tekan {{key:Q}}. Satu gelang mengikut penuding, menunjukkan satah tempat anda akan memutar.
3. Klik pusat putaran.
   - Di atas tanah atau ruang kosong, gelang terletak mendatar (biru): putaran adalah mengelilingi paksi menegak, seperti memutar bangunan di tapaknya.
   - Pada muka, gelang terletak dalam satah muka itu: putaran adalah mengelilingi arah muka itu sendiri. Klik pada dinding untuk memutar sesuatu mengelilingi paksi mengufuk.
4. Klik satu titik yang menetapkan di mana sudut bermula, contohnya sepanjang tepi benda yang anda putar.
5. Gerakkan penuding di sekeliling pusat. Sudut ditunjukkan dalam hujung dan dalam kotak nilai ({{ui:Sudut}}). Ia melekat kepada langkah 15° apabila anda hampir dengan satu.
6. Klik untuk selesai, atau taip sudut dalam darjah dan tekan {{key:Enter}}: `90`, `45`, `-30`.

   Sudut positif berputar mengikut lawan arah jam, dilihat dari sisi yang dihadap oleh gelang.

Tekan {{key:Ctrl}} (atau {{key:Alt}}) semasa memutar untuk memutar **salinan** dan biarkan yang asal kekal di tempatnya, seperti dengan Alih; hujung menunjukkan sama ada salinan dihidupkan, dan menekan kekunci sekali lagi akan mematikannya. Taip `3x` sejurus selepas salinan berputar untuk lebih banyak salinan mengelilingi pusat yang sama.

Seperti Alih, memutar sebahagian geometri yang bersambung akan memilin muka yang melekat padanya. Kumpulkan benda dahulu untuk memutarnya sepenuhnya.

:::note
Hujung menyatakan kekunci anak panah memilih paksi putaran, tetapi dalam binaan ini ia mengorbit paparan sebelum klik pertama. Untuk memilih paksi, klik pusat pada muka yang menghadap arah yang anda mahu. Lihat [Belum dibina](topic:not-built-yet).
:::

## Skala

{{ui:Skala}} ({{key:S}}) mengubah saiz pilihan. Pilih apa yang anda mahu ubah saiz dahulu, kemudian tekan {{key:S}}: segi empat kecil (grip) muncul pada bucu, tepi, dan tengah sisi kotak sempadannya.

### Regang atau skala dengan grip

- Grip **bucu** menskala secara sekata ke semua arah, mengelilingi bucu bertentangan.
- Grip di tengah **sisi** meregang sepanjang arah itu sahaja, mengelilingi sisi bertentangan: jadikan kotak lebih panjang tanpa menjadikannya lebih tinggi.
- Grip di tengah **tepi kotak** meregang ke dua arah merentasinya.
- Tahan {{key:Ctrl}} apabila anda klik grip untuk menskala mengelilingi tengah kotak sebaliknya.

Klik grip, gerakkan penuding, dan klik sekali lagi; atau klik grip dan taip faktor (`2` menggandakan, `0.5` menyetengahkan) dan tekan {{key:Enter}}. Untuk memberi setiap arah faktornya sendiri, taip tiga nilai, untuk merah, hijau dan biru: `2,1,0.5`. Di dalam kumpulan terbuka, arahnya ialah milik kumpulan itu.

### Skala mengelilingi mana-mana titik

Klik di mana-mana selain grip untuk skala secara sekata mengelilingi titik anda sendiri. Ia memerlukan tiga klik:

1. Pilih apa yang anda mahu ubah saiz. Jika tiada apa-apa dipilih, Skala mengambil benda yang anda klik dahulu.
2. Tekan {{key:S}}.
3. Klik titik yang kekal di tempatnya (bukan pada grip), contohnya bucu bawah.
4. Klik titik rujukan. Jaraknya dari titik pertama dikira sebagai 1×.
5. Gerakkan penuding ke arah atau menjauhi titik pertama. Faktor ditunjukkan dalam hujung dan dalam kotak nilai ({{ui:Skala}}).
6. Klik untuk selesai, atau taip faktor dan tekan {{key:Enter}}: `2` menggandakan saiz, `0.5` menyetengahkannya.

### Skala kepada saiz tepat

Untuk menjadikan sesuatu panjang yang tepat, kira faktornya: panjang baharu dibahagi panjang semasa. Dalam mod tiga klik, kotak nilai boleh membuat pengiraan, jadi taip `4.2/3.6` untuk menjadikan dinding 3.6 m panjangnya 4.2 m. Kotak nilai grip hanya menerima nombor biasa: kira faktornya dahulu (4.2 dibahagi 3.6 ialah kira-kira 1.1667). Pilih tepi dahulu untuk membaca panjang semasanya dalam {{ui:Maklumat entiti}}.

### Betulkan import yang masuk dengan saiz salah

Fail OBJ tidak mempunyai unit, jadi model yang dilukis dalam milimeter masuk 1000 kali terlalu besar. Pilih kumpulan yang diimport, tekan {{key:S}}, klik grip bucu, dan taip `0.001` dan tekan {{key:Enter}}. Untuk model yang dilukis dalam inci, taip `0.0254`.

## Perkara yang perlu diketahui

- Penskalaan mengelilingi satu titik dengan tiga klik adalah seragam. Untuk meregang ke satu arah sahaja, gunakan grip sisi atau tepi (lihat di atas).
- Menskala kumpulan atau komponen menukar salinan yang anda skalakan; salinan lain bagi komponen itu mengekalkan saiznya.
- Tekan {{key:Esc}} sebelum klik terakhir untuk batal.

## Balik

{{ui:Sunting}} › {{ui:Lagi}} › {{ui:Balik sepanjang merah}}, {{ui:Balik sepanjang hijau}} atau {{ui:Balik sepanjang biru}} mencerminkan pilihan di tempatnya, melalui tengah kotak sempadannya: tangga tangan kiri menjadi tangga tangan kanan. Muka kekal menghadap ke luar, dan kumpulan atau komponen dicerminkan sebagai satu keseluruhan (bahagian dalamnya tidak ditulis semula).

{{ui:Salinan terbalik sepanjang merah}} (dan hijau, biru) membiarkan yang asal kekal di tempatnya dan meletakkan salinan bercermin di sebelahnya, merentasi sisi jauh kotak pilihan: pintu kedua bagi sepasang, sayap kedua bagi bangunan. Geometri lepas yang bersentuh di situ bergabung dengan yang asal, seperti geometri bersentuh yang selalu berlaku; jadikan yang asal kumpulan dahulu untuk memisahkannya.

Di dalam kumpulan terbuka, merah, hijau dan biru ialah paksi kumpulan itu sendiri.
