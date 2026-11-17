---
title: Simpan pandangan sebagai adegan
summary: Simpan kamera dan gaya sebagai adegan, kemas kini dan namakan semula, dan langkah atau mainkan adegan untuk membentangkan reka bentuk.
keywords: adegan, pandangan, pandangan tersimpan, kamera, persembahan, animasi, main, tayangan, page up, page down, tab, panduan langkah demi langkah
from: 38680d6e
---

**Adegan** mengingati kedudukan kamera, gaya dan apa yang disembunyikan: dari mana anda melihat, perspektif atau selari, gaya muka, tepi, tetapan matahari, kumpulan tersembunyi, tag yang dimatikan dan potongan keratan. Adegan disimpan dalam fail `.modelcraft`.

## Tambah adegan

1. Tetapkan pandangan: orbit, zum, pilih gaya, tetapkan matahari.
2. Dalam panel {{ui:Adegan}} di sebelah kanan, klik {{ui:Tambah adegan}}.

   Adegan itu muncul dalam senarai, dinamakan "Adegan 1", "Adegan 2" dan seterusnya, dan sebagai tab merentasi bahagian atas pandangan 3D. Bar status menyatakan "Adegan 1 disimpan: kamera, gaya dan apa yang disembunyikan ini."

## Pergi ke adegan

- Klik tabnya di atas pandangan 3D, atau namanya dalam senarai {{ui:Adegan}}.
- Atau tekan {{key:PageDown}} untuk adegan seterusnya dan {{key:PageUp}} untuk yang sebelumnya. {{ui:Seterusnya}} dan {{ui:Sebelum}} di bawah senarai melakukan perkara yang sama.

Kamera meluncur ke adegan dalam masa sedikit lebih daripada setengah saat. Jika komputer anda ditetapkan untuk mengurangkan pergerakan, ia melompat ke sana.

## Tukar, namakan semula atau padam adegan

Setiap adegan dalam senarai mempunyai tiga butang kecil selepas namanya:

- **Kemas kini** (anak panah bulat): menyimpan kamera, gaya dan apa yang disembunyikan semasa ke dalam adegan itu. "Adegan 2 dikemas kini."
- **Namakan semula** (pensel): membuka dialog "Namakan semula adegan". Taip nama baharu dan klik {{ui:Simpan}}.
- **Padam** (tong sampah): mengeluarkan adegan. "Adegan 2 dipadam. Ctrl+Z membawanya kembali."

Menambah, mengemas kini, menamakan semula dan memadam adegan ialah langkah buat asal, sama seperti perubahan pada model.

## Kunci kamera adegan

Apabila anda merender pandangan yang sama berulang kali semasa reka bentuk berubah, kunci kamera adegan itu supaya pandangan tidak bergerak secara tidak sengaja.

1. Dalam senarai {{ui:Adegan}}, klik butang **kunci** (mangga terbuka) selepas nama adegan. Ia tertutup, dan tab adegan di atas pandangan 3D menunjukkan mangga kecil. Bar status menyatakan "Adegan 2: kamera dikunci."
2. Pergi ke adegan apabila anda mahu merender: kamera kembali tepat ke pandangan yang disimpan, supaya gambar yang dibuat daripadanya sejajar dengan yang terdahulu.

Semasa kamera dikunci, **Kemas kini** masih menyimpan gaya dan apa yang disembunyikan ke dalam adegan, tetapi kamera kekal di tempatnya, walaupun anda telah mengorbit ke tempat lain. Klik mangga sekali lagi untuk membuka kuncinya; Kemas kini kemudian menyimpan pandangan semasa semula. Mengunci dan membuka kunci ialah langkah buat asal, dan kunci disimpan dalam fail `.modelcraft`.

## Bentang

1. Tambah dua atau lebih adegan.
2. Klik {{ui:Main}} di bawah senarai. ModelCraft bergerak ke adegan seterusnya setiap beberapa saat dan kembali ke yang pertama selepas yang terakhir.
3. Klik {{ui:Henti}} (butang yang sama) atau tekan {{key:Esc}} untuk berhenti.

Untuk kajian matahari, tambah satu adegan bagi setiap jam dengan hanya {{ui:Masa}} diubah, kemudian mainkannya. Lihat [Gaya dan bayang matahari](topic:styles-shadows#a-sun-study).

Untuk membentangkan tanpa bar, tekan {{key:Ctrl+Shift+F}} dua kali: skrin penuh, kemudian skrin penuh dengan bar disembunyikan. Tab adegan kekal di atas pandangan.

## Apa yang ditunjukkan oleh adegan

Adegan mengingati apa yang disembunyikan semasa anda menyimpannya: kumpulan dan komponen yang anda [sembunyikan](topic:hide-isolate), [tag](topic:tags) yang anda matikan, dan [satah keratan](topic:sections) mana yang memotong. Pergi ke adegan menyembunyikan dan memaparkannya semula. Jadi satu adegan boleh menunjukkan keseluruhan rumah, adegan seterusnya rumah dengan tag bumbung dimatikan, dan adegan seterusnya keratan melaluinya.

Muka dan tepi longgar yang disembunyikan bukan sebahagian daripada adegan. Pergi ke adegan tidak membuat langkah buat asal. Adegan yang disimpan oleh binaan ModelCraft yang lebih awal membiarkan apa yang disembunyikan seperti sedia ada; klik Kemas kini untuk menyimpannya ke dalamnya.

## Eksport animasi

{{ui:Eksport animasi}}, di bawah senarai, memainkan adegan dari yang pertama hingga yang terakhir, menggerakkan kamera dengan lancar di antaranya, dan menyimpan filem sebagai video **WebM** (dua saat pergerakan dan jeda pendek bagi setiap adegan). Ia merakam pandangan seperti yang anda lihat, pada saiznya di skrin, dalam [paparan persembahan](topic:styles-shadows#presentation-view) (tiada paksi, panduan atau pilihan). Tekan {{key:Esc}} atau klik butang sekali lagi untuk berhenti tanpa menyimpan. WebM dimainkan dalam pelayar dan VLC, dan editor video boleh menukarnya.

Untuk lintasan yang dirender (langit, matahari, bayang, bahan) pada saiz yang anda pilih, gunakan {{ui:Render video…}} sebaliknya: tanpa kunci animasi, ia mengambil adegan, mengikut urutan, sebagai laluan kamera. Lihat [Animasikan kamera dan objek](topic:animation).

## Perkara yang perlu diketahui

- Menukar gaya atau menggerakkan kamera selepas pergi ke adegan tidak mengubah adegan itu sehingga anda klik Kemas kini.
- Adegan tidak dieksport ke Collada, OBJ, glTF, STL atau IFC.
