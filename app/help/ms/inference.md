---
title: Inferens dan snap
summary: Maksud penanda berwarna, snap mana yang menang, dan cara mengunci arah dengan kekunci anak panah atau Shift.
keywords: inferens, snap, snapping, titik hujung, titik tengah, pusat muka, tengah, pada tepi, pada muka, paksi, paksi merah, paksi hijau, paksi biru, selari, serenjang, kunci, shift, osnap
from: e78984e9
---

Semasa alat lukisan atau penyuntingan berfungsi, ModelCraft melihat apa yang berada di bawah penunjuk dan melekat pada perkara yang paling berguna berdekatan. Penanda menunjukkan apa yang dijumpainya, dan petua di bahagian kiri bawah menamakannya.

## Penanda dan petua

| Petua | Penanda | Melekat pada |
|---|---|---|
| Titik hujung | Bulatan hijau | Hujung tepi |
| Titik tengah | Bulatan sian | Tengah tepi |
| Pusat muka | Bulatan biru | Tengah muka di bawah penunjuk |
| Titik panduan | Kelabu | Titik panduan yang ditinggalkan oleh pita ukuran |
| Asalan | Warna okra | Tempat paksi merah, hijau dan biru bertemu |
| Pada paksi merah / Pada paksi hijau / Pada paksi biru | Garisan dalam warna itu | Garisan dari titik mula anda sepanjang arah itu |
| Selari dengan tepi / Serenjang dengan tepi | Garisan magenta | Garisan dari titik mula anda selari atau serenjang dengan tepi yang diingati (lihat di bawah) |
| Dikunci | Garisan magenta | Arah yang anda kunci dengan kekunci anak panah atau {{key:Shift}} |
| Pada tepi | Segi empat merah | Di mana-mana sepanjang tepi |
| Pada garis panduan | Kelabu | Di mana-mana sepanjang garis panduan |
| Pada muka | Berlian biru | Di mana-mana pada muka |
| Pada satah | tiada | Satah tempat anda mula, apabila penunjuk berada di atas ruang kosong |
| Pada tanah | tiada | Tanah (satah merah-hijau), apabila tiada apa lain di situ |

Apabila garisan paksi dari titik mula anda bersilang dengan tepi atau garis panduan, ModelCraft melekat pada persilangan itu dan petua menamakan kedua-duanya, seperti "Pada paksi merah, pada tepi".

## Snap mana yang menang

1. **Titik** dalam lingkungan kira-kira 12 piksel: titik hujung dahulu, kemudian titik panduan, titik tengah, pusat muka di bawah penunjuk dan asalan.
2. **Arah** dari titik mula: paksi merah, hijau dan biru, dan selari atau serenjang dengan tepi yang diingati.
3. **Pada tepi** atau garis panduan.
4. **Pada muka.**
5. **Satah lukisan**, atau tanah.

Perkara yang tersembunyi di belakang muka tidak pernah melekat. Orbit supaya anda dapat melihat titik yang anda mahukan.

## Lukis pada muka dari satu titik

{{ui:Segi empat tepat}}, {{ui:Bulatan}} atau {{ui:Poligon}} yang dimulakan pada bucu, titik tengah, tepi atau pusat muka dilukis **dalam satah muka di bawah penunjuk**, dan memotong muka itu. Tepi tergolong pada dua muka, jadi sisi tepi yang ditunjuk oleh penunjuk menentukan: untuk melukis pada hujung kotak yang panjang, mulakan dari titik tengah salah satu tepinya dengan penunjuk berada tepat di dalam muka hujung.

## Selari dan serenjang

ModelCraft mengingati **tepi terakhir yang dilalui penunjuk sebelum klik pertama anda**. Bermula pada bucu atau pada tepi dikira sebagai melalui tepi itu. Sebaik alat berfungsi, tepi lain yang anda lalui tidak menggantikannya.

Untuk melukis garisan selari dengan tepi sedia ada:

1. Tekan {{key:L}} dan lalukan penunjuk pada tepi yang hendak anda padankan.
2. Alih ke titik mula, tanpa merentasi tepi lain di sepanjang jalan jika boleh, dan klik.
3. Alih dalam arah selari dengan tepi itu. Garisan bertukar magenta dan petua berbunyi "Selari dengan tepi". Serenjang berfungsi dengan cara yang sama, dalam satah yang anda lukis.

Jika tepi yang salah diingati, tekan {{key:Esc}}, lalukan penunjuk pada tepi yang betul, dan mulakan semula.

## Kunci arah

Selepas klik pertama alat, anda boleh mengekalkan titik seterusnya pada satu garisan:

| Kekunci | Mengunci kepada |
|---|---|
| {{key:Right}} | Paksi merah |
| {{key:Left}} | Paksi hijau |
| {{key:Up}} | Paksi biru (lurus ke atas) |
| {{key:Down}} | Selari dengan tepi yang diingati (lihat di atas) |

Tekan anak panah yang sama sekali lagi untuk membuka kunci. Bar status berbunyi "Dikunci kepada paksi merah. Tekan anak panah yang sama untuk membuka kunci."

Semasa dikunci, titik meluncur sepanjang garisan ke arah mana sahaja penunjuk berada, dan masih sejajar dengan titik yang anda lalui: lalukan penunjuk pada bucu kotak lain untuk melukis garisan sepanjang merah setakat bucu itu.

**{{key:Shift}}** mengunci apa sahaja arah yang anda sedang melekat padanya (paksi, atau selari), selagi anda menahannya. Lepaskan untuk membuka kunci.

Kunci berfungsi dalam {{ui:Garisan}}, {{ui:Segi empat tepat}}, {{ui:Bulatan}}, {{ui:Poligon}}, {{ui:Alih}}, {{ui:Skala}} dan {{ui:Pita}}. Sebelum klik pertama, kekunci anak panah mengorbit paparan sebaliknya.

## Di dalam kumpulan

Semasa anda menyunting di dalam kumpulan atau komponen, paksi ialah paksi kumpulan itu sendiri (ia bergerak bersamanya, dan berpusing bersamanya jika ia telah diputar). Snap tetap mencari titik dan tepi di luar kumpulan, jadi anda boleh menjajarkan perkara dengan bahagian lain model.
