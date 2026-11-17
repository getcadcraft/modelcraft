---
title: Lukis muka dengan garisan, segi empat tepat, bulatan dan lengkok
summary: Buat muka rata di atas tanah atau di atas muka lain, bahagikannya dengan garisan, dan lukis bulatan serta poligon dengan bilangan sisi yang anda mahu.
keywords: lukis, garisan, segi empat tepat, bulatan, poligon, ofset, inset, bingkai, sempadan, lengkok, lengkung, splin, licin, kabel, laluan, bonjol, jejari, lengkung, muka, pelan lantai, jejak kaki, bahagi, sisi, segmen, garis luar, pensel
from: b6d7b7dd
---

Segala-galanya dalam ModelCraft bermula sebagai **muka** rata: permukaan yang ditutup oleh tepi. Anda boleh melukis muka secara langsung dengan {{ui:Segi empat tepat}}, {{ui:Bulatan}} atau {{ui:Poligon}}, atau menggaris luar satu tepi pada satu masa dengan {{ui:Garisan}}. Muka ialah apa yang [Tolak/tarik](topic:push-pull) tukarkan kepada pepejal.

## Lukis segi empat tepat

1. Tekan {{key:R}}.
2. Klik bucu pertama: di atas tanah, atau pada mana-mana muka model.
3. Gerakkan penuding. Segi empat tepat kekal di atas tanah (atau pada muka yang anda mulakan), dan kotak nilai ({{ui:Dimensi}}) menunjukkan lebar dan kedalamannya. Tip berbunyi "Segi empat sama" apabila sisinya sama.

   Untuk melukis pada satah lain, tuding padanya: muka yang melalui bucu pertama meletakkan segi empat tepat pada muka itu, dan snap kepada titik di luar satah (titik hujung, tepi, paksi biru) menegakkan segi empat tepat melalui kedua-dua bucu. Snap kembali ke titik pada satah pertama dan ia rebah semula. Untuk mengekalkan satu satah, tekan kekunci anak panah: {{key:Up}} mengekalkan segi empat tepat mendatar (satah biru), {{key:Right}} pada satah merah, {{key:Left}} pada satah hijau. Tekan kekunci yang sama sekali lagi untuk membuka kunci.
4. Klik bucu bertentangan, atau taip dua saiz dipisahkan dengan koma dan tekan {{key:Enter}}: `4m,3m`, `4000,3000` dalam model milimeter, atau `12',10'6"` dalam kaki dan inci.

   Muka muncul dengan empat tepi di sekelilingnya.

Saiz yang ditaip mengikut arah yang anda tuding: jika penuding berada di sebelah kiri bucu pertama ketika anda menaip, segi empat tepat akan membesar ke kiri.

:::warning
Koma memisahkan dua saiz, jadi ia tidak boleh menjadi tanda perpuluhan. Taip `2.5m,3m`, bukan `2,5m`.
:::

## Lukis bulatan atau poligon

1. Tekan {{key:C}} untuk bulatan atau {{key:N}} untuk poligon.
2. Untuk menukar bilangan sisi, taipnya sebelum anda klik: `12s` (atau hanya `12`) dan {{key:Enter}}. Bulatan bermula dengan 24 sisi dan poligon dengan 6. Tip menunjukkan nombor semasa, dan ModelCraft mengekalkannya untuk bulatan seterusnya sehingga anda menukarnya atau bertukar alat.
3. Klik pusat, di atas tanah atau pada muka. Untuk memusatkannya pada muka, tuding pada tengah muka ("Pusat muka") atau pada tengah salah satu tepinya ("Titik tengah") dengan penuding betul-betul di dalam muka itu: bulatan dilukis pada muka itu, walaupun pada hujung sempit kotak panjang.
4. Klik untuk menetapkan jejari, atau taipnya ({{ui:Jejari}} dalam kotak nilai) dan tekan {{key:Enter}}.

Bulatan ialah poligon dengan banyak sisi. Apabila anda menarik bulatan ke atas dengan Tolak/tarik, sisinya dilembutkan supaya silinder dibaca sebagai satu permukaan licin.

## Lukis lengkok

1. Tekan {{key:A}} ({{ui:Lengkok}}).
2. Klik di mana lengkok bermula, kemudian di mana ia berakhir (atau taip panjang antara keduanya).
3. Gerakkan penuding untuk membengkokkan lengkok keluar, dan klik. Tip berbunyi "Separuh bulatan" apabila bonjolnya ialah separuh jarak antara hujung. Atau taip sejauh mana titik tengahnya terkeluar: `2` dan {{key:Enter}}.

Untuk melukis lengkok di sekeliling titik, gunakan {{ui:Pusat lengkok}}: klik pusat, kemudian di mana lengkok bermula (atau taip jejarinya), kemudian di mana ia berakhir (atau taip sudut dalam darjah, seperti `90`). Ia melekap pada langkah 15°.

Lengkok yang dimulakan pada muka dilukis pada muka itu; jika tidak, ia terletak di atas tanah, atau berdiri tegak apabila dua hujungnya berada pada ketinggian berbeza. Lengkok mempunyai 12 segmen; taip `24s` semasa melukis untuk lebih banyak. Lengkok menutup muka sama seperti garisan: lengkok yang merentasi bucu segi empat tepat membahagikannya.

## Lukis lengkung licin

{{ui:Lengkung}} melukis garisan licin yang melalui setiap titik yang anda klik: kabel, laluan pemegang tangga, tepi taman. Ia boleh meninggalkan tanah: titik melekap pada bucu, tepi dan muka di mana-mana, dan kekunci anak panah mengunci merah, hijau atau biru seperti dengan {{ui:Garisan}}.

1. Klik {{ui:Lengkung}} dalam kumpulan {{ui:Lukis}}.
2. Klik titik yang dilalui lengkung. Taip `<0,0,1>` dan {{key:Enter}} untuk titik 1 di atas titik terakhir, `[x,y,z]` untuk tempat yang tepat, atau panjang untuk titik yang sejauh itu ke arah penuding.
3. Tekan {{key:Enter}} atau klik dua kali untuk selesai. Klik titik pertama sekali lagi untuk menutup lengkung. {{key:Backspace}} mengambil balik titik terakhir.

Lengkung dipilih sebagai satu bahagian. Untuk menukarnya, pilihnya dan klik {{ui:Edit titik}} dalam {{ui:Maklumat entiti}}: titiknya ditunjukkan sebagai segi empat sama. Klik satu, kemudian klik di mana ia patut pergi (atau taip `<dx,dy,dz>`). {{key:Esc}} mengembalikan titik, dan menamatkan penyuntingan. Lengkung rata yang tertutup menjadi muka; lengkung yang menggaris luar muka tidak lagi boleh disunting.

## Ofset: sempadan di dalam atau di luar muka

{{ui:Ofset}} menyalin garis luar muka pada jarak yang ditetapkan ke dalamnya (atau ke luarnya), untuk bingkai, sempadan, ambang atau kaca skrin.

1. Tekan {{key:F}} dan klik muka, atau pilih muka dahulu dan kemudian tekan {{key:F}}.
2. Gerakkan penuding ke dalam muka untuk garis luar dalam, atau keluar daripadanya untuk garis luar luar. Garis luar baharu mengikut, dan tip memberitahu jaraknya.
3. Klik, atau taip jarak dan tekan {{key:Enter}}.

Muka itu terbahagi kepada dua: muka dalam dan bingkai di sekelilingnya (atau gelang baharu di luar). Tolak/tarik mana-mana satu serta-merta: untuk skrin, lukis kotak, tolaknya kepada ketebalannya, ofsetkan muka hadapan 30 mm ke dalam dan tolak muka dalam sedikit untuk kaca. Lubang dalam muka juga diofset, dan lengkok atau bulatan kekal sebagai satu lengkung (lebih kecil atau lebih besar).

- **Klik dua kali** muka dengan {{ui:Ofset}} untuk mengofsetkannya dengan jarak terakhir sekali lagi.
- **Tepi:** pilih rantai tepi bersambung dalam satu satah (contohnya dua garisan huruf L), tekan {{key:F}}, alihkan ke sisi yang anda mahu dan taip jarak: salinan selari dilukis, dengan bucu bersudut sendeng.
- Apabila jarak melebihi apa yang dibenarkan muka, ModelCraft memberitahu dan tidak melukis apa-apa.

## Lengkok, bulatan dan poligon ialah lengkung

Klik mana-mana segmen lengkok, bulatan atau poligon dan keseluruhan lengkung dipilih. {{ui:Maklumat entiti}} kemudian menunjukkan jejarinya, segmennya, sudutnya (lengkok) dan panjangnya. Taip jejari baharu di situ untuk mengubah saiznya mengikut pusatnya; muka yang dilukis dalam satahnya mengikut. Apabila muka lengkung telah ditolak atau ditarik, jejarinya kekal seperti sedia ada.

## Lukis dengan garisan

1. Tekan {{key:L}}.
2. Klik di mana garisan bermula.
3. Klik di mana ia berakhir, atau taip panjang dan tekan {{key:Enter}}. Panjang yang ditaip mengikut arah yang ditunjukkan penuding.
4. Teruskan klik. Setiap klik memulakan garisan seterusnya dari hujung yang terakhir.
5. Tutup garis luar dengan klik titik pertama sekali lagi. Apabila garisan menutup gelung rata, ia diisi dengan muka dan alat berhenti merantai. Tekan {{key:Esc}} untuk berhenti pada bila-bila masa.

Garisan mengikut arah merah, hijau dan biru apabila anda hampir dengannya; garisan itu bertukar warna dan tip berbunyi "Pada paksi merah". Lihat [Inferens dan snap](topic:inference) untuk cara mengunci arah dan snap kepada titik.

### Ke mana garisan pergi apabila ia tidak menyentuh apa-apa

- Garisan yang bermula pada muka kekal dalam satah muka itu.
- Garisan yang bermula di atas tanah, atau dalam ruang kosong, kekal rata dengan titik mulanya. Jika anda melihat model dari tepi, ia pergi dalam satah menegak yang menghadap anda.
- Untuk melukis garisan ke tempat yang tepat, taip titik: `[x,y,z]` untuk titik dalam model, atau `<dx,dy,dz>` untuk ofset dari titik mula. Lihat [Taip saiz tepat](topic:value-box).

## Bahagi muka

Lukis garisan merentasi muka, dari satu tepi ke tepi yang lain (atau dari tepi ke tepi melalui garisan lain). Muka itu terbahagi kepada dua muka. Setiap satu mengekalkan sisinya dan warnanya. Perkara yang sama berlaku dengan segi empat tepat atau bulatan yang dilukis pada muka: bentuk itu menjadi muka sendiri di dalam muka yang lebih besar, yang kini mempunyai lubang.

Inilah cara anda menentukan bilik di atas papak lantai, tingkap pada dinding, atau anak tangga pada tangga: lukis garis luar pada muka, kemudian tolak atau tarik muka yang baharu.

## Muka menghadap arah yang salah

Setiap muka mempunyai hadapan dan belakang. Bahagian belakang ditunjukkan dengan warna kelabu-biru. Muka yang dilukis di atas tanah menghadap ke atas; muka yang dilukis pada muka lain menghadap arah yang sama dengan muka itu.

Jika muka menunjukkan belakangnya di tempat anda menjangka hadapannya, pilihnya dan klik {{ui:Balikkan muka}} dalam {{ui:Maklumat entiti}}.

## Apa yang anda lihat semasa melukis

- Penanda berwarna di tempat penuding melekap, dan namanya dalam tip di bahagian bawah kiri.
- Pratonton garisan atau bentuk.
- Saiz langsung dalam kotak nilai. Anda boleh menaip di atasnya pada bila-bila masa.

## Jika bentuk tidak berada di tempat yang anda jangka

- Pada skrin sentuh, lihat [Penyelesaian masalah](topic:troubleshooting#a-shape-starts-in-the-wrong-place-on-a-touch-screen).
- Jika garisan melekap pada sesuatu yang jauh di belakang, orbit sedikit: titik yang tersembunyi di belakang muka tidak pernah melekap, tetapi titik pada tepinya boleh.
- Tekan {{key:Mod+Z}} untuk buat asal bentuk terakhir; satu buat asal membuang satu garisan atau satu bentuk.
