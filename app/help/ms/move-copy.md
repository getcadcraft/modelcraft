---
title: Alih, salin dan buat tatasusunan
summary: Alihkan objek dengan klik atau mengikut jarak tepat, salin dengan kekunci pengubah suai, dan buat satu baris salinan yang berjarak sama.
keywords: alih, salin, pendua, tatasusunan, baris, jarak, bahagi, ofset, regang, lajur, ulang, salinan berbilang
from: 280245fc
---

{{ui:Alih}} ({{key:M}}) mengalihkan apa sahaja yang dipilih dari satu titik ke titik lain. Menahan kekunci pengubah suai menjadikannya salinan, dan selepas salinan anda boleh menaip berapa banyak lagi yang anda mahu.

## Alihkan sesuatu

1. Pilih apa yang anda mahu alihkan (lihat [Pilih objek](topic:select)). Jika tiada apa yang dipilih, Alih mengambil objek yang anda klik.
2. Tekan {{key:M}}.
3. Klik titik untuk mengalih dari situ. Pilih sesuatu yang bermakna, seperti bucu: titik itu akan mendarat tepat di tempat anda klik seterusnya.
4. Gerakkan penunjuk. Pilihan itu akan mengikut. Ia melekap pada titik, tepi, dan arah merah, hijau dan biru seperti garisan.
5. Klik tempat titik itu pergi, atau taip jarak dan tekan {{key:Enter}}.

   Tip bar status kembali kepada "Klik titik untuk mula mengalih…" untuk alihan seterusnya.

Jarak yang ditaip pergi mengikut arah yang anda tunjuk. Anda juga boleh menaip ofset tepat, `<2m,0,0>` (2 m sepanjang merah), atau destinasi tepat untuk titik yang anda pilih, `[0,0,0]` (asalan). Lihat [Taip saiz tepat](topic:value-box).

Untuk mengalih sepanjang satu paksi sahaja, tekan kekunci anak panah selepas klik pertama: {{key:Right}} mengunci kepada merah, {{key:Left}} kepada hijau, {{key:Up}} kepada biru. Tekan anak panah yang sama sekali lagi untuk membuka kunci.

## Mengalih sebahagian bentuk akan meregangkannya

Geometri yang tidak dikumpulkan adalah bersambung. Jika anda memilih satu muka atau beberapa tepi dan mengalihkannya, muka yang melekat padanya akan meregang mengikutnya. Alihkan muka atas kotak ke sisi dan kotak itu akan condong; alihkan satu tepi bumbung dan kecerunan bumbung berubah. Muka yang tidak lagi boleh kekal rata akan terlipat menjadi segi tiga.

Untuk mengalihkan keseluruhan objek tanpa meregangkannya, pilih semuanya dahulu (klik tiga kali), atau lebih baik, jadikannya kumpulan atau komponen (lihat [Kumpulan dan komponen](topic:groups-components)).

## Salin sesuatu

1. Pilih apa yang anda mahu salin.
2. Tekan {{key:M}}.
3. Tahan {{key:Ctrl}} (atau {{key:Alt}}) dan klik titik untuk mengalih dari situ. Pada Mac, {{key:Mod}} atau {{key:Alt}} melakukan perkara yang sama. Tip akan berbunyi "Ctrl alih sebaliknya", yang bermaksud anda sedang menyalin.

   Anda juga boleh menekan dan melepaskan {{key:Ctrl}} atau {{key:Alt}} selepas klik pertama untuk bertukar antara mengalih dan menyalin.

4. Klik tempat salinan itu pergi, atau taip jarak dan tekan {{key:Enter}}.

   Yang asal kekal di tempatnya, dan salinan itu dipilih.

## Salin, potong, tampal dan pendua

- {{key:Mod+C}} menyalin pilihan, {{key:Mod+X}} memotongnya (menyalin, kemudian memadamkan), {{ui:Salin}} dan {{ui:Tampal}} juga merupakan butang dalam kumpulan {{ui:Sunting}} bar alat, dan {{ui:Lagi}} di sebelahnya mempunyai potong, tampal di tempat yang sama dan pendua.
- {{key:Mod+V}} menampal: garis luar salinan mengikut penunjuk, melekap seperti mana-mana alat, dan klik akan meletakkannya dengan bucu terendahnya di situ. {{key:Esc}} membatalkan.
- {{key:Mod+Shift+V}} menampal di tempat yang sama, tepat di tempat salinan itu datang — berguna untuk memindahkan sesuatu ke dalam kumpulan yang sudah anda buka.
- {{key:Mod+D}} ({{key:Shift+D}} dalam gaya Modeler) menduplikasi: salinan dibuat dan bergerak bersama penunjuk serta-merta; klik untuk meletakkannya, taip jarak, atau tekan {{key:Esc}} untuk melepaskannya. Selepas itu, taip `3x` untuk lebih banyak salinan berturut-turut.

Kumpulan yang ditampal menjadi kumpulan baharu. Komponen yang ditampal ialah penempatan lain bagi komponen yang sama, jadi mengedit satu masih menukar semuanya. Salinan juga boleh ditampal ke tab ModelCraft lain dalam pelayar ini (ia masuk sebagai definisi baharu di sana).

## Baris salinan

Sejurus selepas salinan, semasa {{ui:Alih}} masih menjadi alat:

- Taip `3x` (atau `*3`) dan tekan {{key:Enter}} untuk tiga salinan berturut-turut, setiap satu pada jarak yang sama seperti salinan pertama. Anda mendapat tiga salinan baharu di samping yang asal.
- Taip `/3` dan tekan {{key:Enter}} untuk membahagi: tiga salinan tersebar sama rata dari yang asal ke tempat anda meletakkan salinan pertama, dengan yang terakhir di situ. Gunakan ini untuk mengisi satu jarak: letakkan satu salinan di hujung yang jauh, kemudian bahagikan.

Anda boleh menaip nombor lain selepas itu: `5x` menggantikan baris `3x`. Tip mengingatkan anda: "Disalin. Taip 3x untuk lebih banyak salinan berturut-turut, atau /3 untuk membahagikan jarak."

### Contoh: tiang setiap 6 meter

1. Buat satu tiang dan jadikannya komponen ({{key:G}}), supaya semua salinan berubah bersama kemudian.
2. Tekan {{key:M}}, tahan {{key:Ctrl}} dan klik bucu tapak tiang.
3. Alih sepanjang paksi merah dan taip `6m`, kemudian {{key:Enter}}.
4. Taip `4x` dan {{key:Enter}}. Anda ada lima tiang, berjarak 6 m antara satu sama lain.

## Perkara yang perlu diketahui

- Tekan {{key:Esc}} sebelum klik kedua untuk membatalkan; semuanya kembali ke tempat asalnya.
- Alih berfungsi dalam kumpulan yang sedang anda sunting. Untuk mengalihkan keseluruhan kumpulan, tutupnya dahulu dan pilihnya dari luar.
- Dengan **Langgar** dihidupkan (di bawah sebelah kanan, dan dalam [tetapan ModelCraft](topic:settings#solids-stop-where-they-touch)), alihan berhenti di tempat pilihan menyentuh pepejal lain dan bukannya menembusinya. Klik {{ui:Langgar}} untuk mematikannya bagi alihan yang sepatutnya menembusi.
- Untuk meletakkan salinan di dalam kumpulan lain: salin, buka kumpulan lain itu, dan tampal ({{key:Mod+Shift+V}} mengekalkannya di tempat yang sama).
