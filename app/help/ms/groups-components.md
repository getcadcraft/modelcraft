---
title: Kumpulan dan komponen
summary: Elakkan objek melekat antara satu sama lain, sunting satu salinan untuk mengubah semuanya, dan gunakan panel Garis besar dan Komponen.
keywords: kumpulan, komponen, jadikan kumpulan, jadikan komponen, pecahkan, jadikan unik, garis besar, contoh, salinan, blok, bersarang, sunting kumpulan, letak
from: 7cb925f3
---

Geometri longgar dalam ModelCraft melekat antara satu sama lain: garisan yang bersentuhan saling membelah, dan muka yang berkongsi tepi bergerak bersama. Itulah yang menjadikan lukisan pada muka berfungsi, tetapi ia juga bermakna kotak yang dilukis bersebelahan kotak lain akan bercantum dengannya. **Kumpulan** dan **komponen** memisahkan objek.

- **Kumpulan** membungkus sebahagian geometri supaya ia berfungsi sebagai satu objek. Tiada apa di luarnya boleh melekat padanya.
- **Komponen** ialah kumpulan yang boleh diletakkan berkali-kali. Setiap salinan berkongsi kandungan yang sama: sunting satu dan semuanya berubah. Gunakan komponen untuk apa-apa yang berulang: tingkap, tiang, meja, pokok.

## Jadikan kumpulan atau komponen

1. Pilih geometri. Klik tiga kali pada muka memilih keseluruhan objek yang bersambung; seret tetingkap memilih semua yang berada dalam kotak.
2. Tekan {{key:Shift+G}} untuk kumpulan, atau {{key:G}} untuk komponen. Anda juga boleh klik {{ui:Kumpulan}} atau {{ui:Komponen}} dalam kumpulan {{ui:Susun}} pada bar alat, atau {{ui:Jadikan kumpulan (Shift+G)}} atau {{ui:Jadikan komponen (G)}} dalam {{ui:Maklumat entiti}}.

   Bar status berbunyi "Dikumpulkan sebagai Kumpulan#1." atau "Dijadikan komponen Komponen#1.", objek baharu dipilih, dan ia muncul dalam {{ui:Garis besar}}.

3. Untuk menamakannya, taip nama dalam medan {{ui:Nama}} {{ui:Maklumat entiti}} dan tekan {{key:Enter}} atau klik di luar.

Memilih muka turut membawa tepinya. Jika tiada apa dipilih, bar status berbunyi "Pilih geometri dahulu (seret tetingkap, atau klik tiga kali untuk memilih semua yang bersambung)."

Anda juga boleh mengumpulkan kumpulan: pilih beberapa kumpulan dan tekan {{key:Shift+G}}. {{ui:Garis besar}} menunjukkan persarangannya.

:::note
Huruf kekunci sepadan dengan lalai SketchUp: {{key:G}} menjadikan komponen, {{key:Shift+G}} menjadikan kumpulan.
:::

## Sunting di dalam kumpulan atau komponen

1. Klik dua kali padanya (dalam paparan atau dalam {{ui:Garis besar}}), atau pilih dan klik {{ui:Sunting}} dalam {{ui:Maklumat entiti}}.

   Bahagian lain model pudar, paksi bergerak ke paksi kumpulan itu sendiri, dan {{ui:Garis besar}} berbunyi "Menyunting: Model › Kumpulan#1". Bar status berbunyi "Menyunting Kumpulan#1. Esc atau klik dua kali di luar menutupnya."

2. Lukis, tolak/tarik, alih dan padam seperti biasa. Apa sahaja yang anda lakukan kekal di dalam kumpulan.
3. Tutupnya: tekan {{key:Esc}} (dua kali jika ada yang dipilih), klik dua kali pada ruang kosong, atau klik {{ui:Tutup kumpulan}} dalam {{ui:Garis besar}}.

Semasa komponen dibuka, setiap salinannya berubah semasa anda bekerja.

## Letakkan lebih banyak salinan komponen

- Salin dengan {{ui:Alih}} dan {{key:Ctrl}} (lihat [Alih dan salin](topic:move-copy)). Setiap salinan ialah letakan lain bagi komponen yang sama.
- Atau klik {{ui:Letak}} di sebelahnya dalam panel {{ui:Komponen}}, kemudian klik di tempat ia hendak pergi. Asalannya, bucu terbawah kotak di sekeliling apa yang anda pilih semasa membuatnya, jatuh di tempat anda klik. Alat kemudian kembali kepada {{ui:Pilih}}.

{{ui:Komponen}} menunjukkan berapa banyak salinan diletakkan ("4×"), dan {{ui:Garis besar}} menunjukkan bilangan selepas nama.

## Susun semula dalam Garis besar

Seret baris dalam {{ui:Garis besar}} untuk menukar tempat ia tergolong. Tiada apa bergerak dalam paparan: kumpulan mengekalkan tempatnya dalam model.

- **Ke dalam kumpulan:** lepaskan pada tengah baris kumpulan (baris mendapat garis luar putus-putus). Ia masuk ke dalam, di hujung.
- **Dalam susunan yang berbeza:** lepaskan pada tepi atas atau bawah baris (garisan ditunjukkan di situ). Ia pergi sebelum atau selepas baris itu, di dalam kumpulan yang sama dengan baris itu, jadi ini juga memasukkannya ke dalam kumpulan pada tempat yang dipilih.
- **Keluar ke aras atas:** lepaskan pada tajuk {{ui:Garis besar}}. Ia pergi di hujung.

Setiap lepasan ialah satu langkah: {{key:Mod+Z}} mengembalikannya. {{key:Esc}} semasa seretan tidak melepaskan apa-apa. Kumpulan tidak boleh masuk ke dalam dirinya sendiri atau ke dalam kumpulan yang dipegangnya. Seretan dimatikan semasa {{ui:Cari mengikut nama}} mempunyai teks.

:::touch
Tahan jari pada baris seketika, kemudian seretnya. Leretan pantas sebaliknya menatal senarai.
:::

## Buat satu salinan berbeza

Pilih salinan dan klik {{ui:Jadikan unik}} dalam {{ui:Maklumat entiti}} (ditunjukkan apabila komponen diletakkan lebih daripada sekali). Salinan itu mendapat takrifannya sendiri, dinamakan seperti yang asal dengan nombor baharu. Sunting tanpa menyentuh yang lain.

## Tukar kumpulan kepada komponen

Pilih kumpulan dan klik {{ui:Jadikan komponen}} dalam {{ui:Maklumat entiti}}. Ia mendapat nama baharu, seperti Komponen#2, walaupun anda telah menamakan kumpulan itu; taip semula nama dalam {{ui:Nama}}.

## Pecahkan

Pilih kumpulan atau komponen dan klik {{ui:Pecahkan}} (pada bar alat atau dalam {{ui:Maklumat entiti}}). Kandungannya menjadi geometri longgar di tempat asalnya, dan melekat pada apa yang disentuhnya. Kumpulan di dalamnya kekal sebagai kumpulan.

## Pepejal dan isipadu

Apabila anda memilih kumpulan atau komponen, {{ui:Maklumat entiti}} menunjukkan **Pepejal: Ya** jika mukanya tertutup tanpa jurang (setiap tepi dikongsi oleh tepat dua muka) dan tiada kumpulan bersarang di dalamnya. Kemudian ia turut menunjukkan **isipadu**. Kotak, dinding dengan tingkap dipotong melaluinya, dan silinder yang ditarik ialah pepejal; kotak yang bahagian atasnya dipadam bukan.

## Apabila salinan terakhir dibuang

Memadam salinan terakhir sesuatu komponen juga mengeluarkannya daripada panel {{ui:Komponen}}. {{key:Mod+Z}} membawanya kembali.

## Perkara yang perlu diketahui

- Salinan kumpulan yang dibuat dengan {{ui:Alih}} berkongsi kandungannya dalam binaan ini, seperti salinan komponen: menyunting satu mengubah yang lain. Untuk menjadikannya bebas, klik {{ui:Jadikan komponen}}, kemudian {{ui:Jadikan unik}}. Lihat [Penyelesaian masalah](topic:troubleshooting#editing-one-group-changed-another).
- Komponen tidak memotong bukaan dalam dinding atau melekat pada muka, dan tiada pustaka komponen siap sedia. Anda membuat sendiri, atau mengimportnya.
- Fail yang diimport masuk sebagai satu kumpulan. Fail Collada mengekalkan kumpulan dan komponen mereka sendiri di dalamnya.
