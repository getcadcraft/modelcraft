---
title: Tolak dan tarik muka menjadi pepejal
summary: Tukar muka menjadi kotak, jadikan bangunan lebih tinggi atau lebih rendah, tambah serambi atau lekukan, dan ulang jarak dengan klik dua kali.
keywords: tolak tarik, ekstrud, ketinggian, pepejal, kotak, jisim, lebih tinggi, lekukan, tolak keluar, ulang, klik dua kali, isipadu, aras, pada muka, rata, ketinggian sama
from: dc093c91
---

{{ui:Tolak/tarik}} ({{key:P}}) menggerakkan muka sepanjang arahnya sendiri: naik dan turun untuk lantai, masuk dan keluar untuk dinding. Apa yang berlaku bergantung pada muka itu.

## Buat pepejal daripada muka

1. Lukis muka, contohnya segi empat tepat di atas tanah ([Lukis muka](topic:draw-faces)).
2. Tekan {{key:P}}.
3. Alih penunjuk ke atas muka. Ia diserlahkan.
4. Klik muka, kemudian gerakkan penunjuk. Muka naik (atau turun) dan sisi tumbuh dari tepinya. Kotak nilai ({{ui:Jarak}}) dan tip menunjukkan jarak.
5. Klik untuk selesai, atau taip jarak dan tekan {{key:Enter}}: `3m`, `10'`, `2700` dalam model milimeter.

   Anda kini mempunyai pepejal tertutup. Pilih semuanya dan kumpulkannya (lihat [Kumpulan dan komponen](topic:groups-components)): {{ui:Maklumat entiti}} kemudian menunjukkan "Pepejal: Ya" dan isipadunya.

Muka tunggal boleh pergi ke mana-mana arah: tarik ke atas untuk jisim di atas tanah, tolak ke bawah untuk lubang atau asas.

:::tip
Daripada klik dua kali, tekan pada muka, seret, dan lepaskan. Pada skrin sentuh itulah cara semula jadi: tekan, seret, angkat.
:::

## Tarik ke ketinggian sesuatu yang lain

Semasa anda menarik, alih penunjuk ke atas bucu, titik tengah, tepi atau garis panduan bahagian lain model. Muka melekat ke ketinggian itu dan penanda menunjukkan titik itu. Gunakannya untuk menjadikan dua blok sama tinggi, atau untuk berhenti pada garis panduan yang anda letakkan dengan [pita pengukur](topic:guides-measure).

Anda juga boleh alih penunjuk ke atas muka yang selari dengan yang anda tolak, seperti bahagian atas blok lain atau bahagian atas kotak tempat tiang berdiri. Tip menyatakan "Pada muka", dan muka yang anda tolak berakhir rata dengannya. Contohnya, tolak muka dalam paip ke bawah sehingga rata dengan kotak di bawah paip.

Muka yang bersudut dengan yang anda tolak tidak menetapkan aras. Jarak mengikut penunjuk. Begitu juga muka di belakang muka yang anda tolak.

Apabila muka yang ditolak berakhir rata semula dengan muka di sekelilingnya, sisinya hilang. Tiada sisi bertinggi sifar yang tinggal, dan garis luar yang anda lukis kekal pada muka, supaya anda boleh menolaknya semula kemudian. Untuk menjadikannya satu muka semula, padam tepi garis luar dengan {{ui:Pemadam}}: kedua-dua muka bercantum.

## Jadikan kotak lebih tinggi atau lebih rendah

Tolak/tarik bahagian atas kotak. Oleh kerana sisi sudah berjalan lurus ke atas darinya, bahagian atas hanya bergerak: kotak menjadi lebih tinggi atau lebih rendah, dan tiada tepi baharu dibuat.

- Menolak bahagian atas sepenuhnya ke bawah ke dasar mengalih keluar kotak. ModelCraft berhenti pada ketinggian sifar; ia tidak sekali-kali membalikkan kotak ke dalam-luar.
- Perkara yang sama berlaku untuk mana-mana muka yang jirannya semua berjalan sepanjang arahnya, seperti hujung dinding.

## Tambah serambi atau lekukan

1. Lukis segi empat tepat di sisi kotak (mulakan di atas muka; ia kekal dalam satah muka).
2. Tekan {{key:P}} dan tarik segi empat tepat baharu **keluar**. Ia menambah bahan: serambi, serombong, kanopi.
3. Atau tolak ia **masuk**. Ia memotong lekukan: beranda, ceruk, pintu masuk berundur.

Apabila sisi bahagian baharu sejajar dengan muka yang sedia ada, ia bercantum menjadi satu muka, supaya anda tidak mendapat garisan terpesong pada dinding rata.

## Tolak sehingga tembus

Menolak muka ke dalam pepejal berhenti pada muka pertama di belakangnya. Apabila ia sampai ke muka itu, ia memotong bukaan tembus. Begitulah anda membuat tingkap dan pintu dalam dinding yang berketebalan. Lihat [Potong bukaan melalui dinding](topic:openings).

## Taip jarak

Selepas mengklik muka, taip jarak dan tekan {{key:Enter}}.

- Jarak yang ditaip mengikut arah anda bergerak. Jika anda belum bergerak, ia pergi ke arah hadapan muka (keluar dari pepejal, naik dari tanah).
- Taip nombor negatif, seperti `-500`, untuk pergi ke arah yang satu lagi.
- Jika anda berubah fikiran sebelum mengklik, tekan {{key:Esc}}. Muka kembali.

## Ulang jarak terakhir

Selepas satu tolak/tarik, klik dua kali muka lain dengan {{ui:Tolak/tarik}} masih dipilih. Ia bergerak dengan jarak yang sama. Ini cara pantas untuk memberi beberapa dinding atau beberapa lantai ketebalan atau ketinggian yang sama.

ModelCraft mengingati jarak sehingga anda bertukar ke alatan lain.

## Perkara yang perlu diketahui

- Tolak/tarik berfungsi pada satu muka pada satu masa. Jika anda klik sesuatu yang bukan muka, bar status berkata "Tolak/tarik berfungsi pada muka. Klik muka."
- Untuk menolak/menarik muka dalam kumpulan atau komponen, buka dahulu (klik dua kali padanya).
- Dengan **Langgar** dihidupkan, tolakan atau tarikan yang terkena pepejal lain berhenti di tempat ia bersentuh, dan tip menyatakan apa yang disentuhnya (nama objek, atau "geometri longgar dalam kumpulan ini") dan menyerlahkan muka yang ditemuinya. Poket yang anda tolak ke dalam pepejalnya sendiri (contohnya muka berofset yang ditolak ke bawah semula) adalah sebahagian daripada pepejal itu dan tidak pernah dihentikan oleh dindingnya.
- Dua pepejal yang ditolak antara satu sama lain tidak memotong atau mencantum satu sama lain: muka mereka hanya melintasi. Lihat [Belum dibina](topic:not-built-yet).
