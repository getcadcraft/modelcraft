---
title: Letak benda di atas katil cetakan dan hantar ke pencetak
summary: Tambah item Pustaka atau model anda sendiri ke katil pencetak anda, susunkannya, lihat lapisan yang dipotong, dan hantar cetakan melalui USB atau rangkaian, atau simpan G-code, tanpa mengeksport STL dahulu.
keywords: peringkat cetakan, cetakan 3d, pencetak, katil, hantar ke pencetak 3d, slicer, gcode, g-code, usb, klipper, moonraker, octoprint, prusalink, pustaka, susun, muat semua, pratonton lapisan, isian, penyokong, filamen, pla, petg, add-on, add-on cetakan 3d
from: abcf5d7e
---

{{ui:Peringkat cetakan}} menyusun benda di atas katil pencetak anda, memotongnya kepada lapisan dan menghantarnya ke pencetak. Anda tidak perlu mengeksport fail dahulu. Ia tergolong dalam add-on Cetakan 3D, yang dihidupkan secara lalai.

:::note
Belum ada apa-apa yang dicetak pada pencetak sebenar dengan ini. Slicer ini baharu: perhatikan lapisan pertama cetakan pertama anda, dan gunakan pratonton lapisan sebelum anda menghantar.
:::

## Apa yang akan anda lakukan

Letakkan model di atas katil, semak sama ada ia muat, lihat lapisan yang dipotong, dan hantarkannya ke pencetak atau simpan G-code.

## Langkah

1. Klik {{ui:Peringkat cetakan}} pada bar alat. Kad dibuka di atas paparan dan garis putus-putus menunjukkan katil anda.
2. Di bawah **Tambah dari Pustaka**, taip nama dalam kotak carian, tekan {{ui:Cari}} dan tekan {{ui:Tambah}} pada hasil. Item itu diletakkan di atas katil pada saiz penuh, atau dikecilkan supaya muat. Apa sahaja yang telah anda lukis atau import dan boleh dilihat dalam paparan turut berada di atas katil.
3. Di bawah **Atas katil**, semak saiz setiap item. Item yang ditanda **Luar katil** perlu dialihkan. Alih, putar dan skalakan benda dalam paparan dengan alatan biasa.
4. Tekan {{ui:Susun atas katil}} untuk mengagihkan item, atau {{ui:Muat semua atas katil}} untuk mengecilkannya sehingga muat.
5. Di bawah **Pencetak anda**, pilih saiz **Katil** atau salah satu profil pencetak.
6. Di bawah **Tetapan cetakan**, pilih **Bahan**, **Kualiti** dan **Isian %**, dan tandakan **Tambah penyokong di bawah bahagian terjuntai** jika bentuk memerlukannya.
7. Tekan {{ui:Pratonton lapisan}} dan gerakkan peluncur **Lapisan** untuk melihat lapisan yang dipotong. Jika anda menukar peringkat atau tetapan selepas itu, tekan {{ui:Pratonton lapisan}} sekali lagi.
8. Di bawah **Sambungan**, pilih {{ui:Kabel USB}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} atau {{ui:PrusaLink}}. Untuk USB tekan {{ui:Sambung}}. Untuk pencetak rangkaian taip **Alamat**-nya (dan **Kunci API** jika diminta), kemudian tekan {{ui:Uji sambungan}}.
9. Tekan {{ui:Hantar ke pencetak 3D}}. Kad bertanya sama ada katil kosong dan bahan yang betul telah dimuatkan, dan menunjukkan masa, bahan dan suhu. Sahkan untuk menghantar.

Anda akan mendapat mesej bahawa pencetak sedang dimulakan. {{ui:Henti cetakan}} mematikan pemanas, kipas dan motor. Jika anda hanya mahukan fail, tekan {{ui:Simpan G-code sebagai gantinya}}.

## Nota

- USB memerlukan Chrome atau Edge pada komputer, dan halaman mesti kekal dibuka sehingga cetakan tamat. Menutupnya akan menghentikan aliran.
- Pencetak rangkaian mesti membenarkan laman ini (dalam Moonraker tambahkannya pada `cors_domains`; dalam OctoPrint hidupkan CORS dan salin kunci API). Pelayar anda mungkin meminta akses kepada peranti dalam rangkaian anda.
- Tiada apa-apa yang disambung atau dihantar tanpa klik anda.
- Senarai slicer berada di bawah **Slicer**. {{ui:CadCraft basic (disertakan, paling pantas)}} dibina sedia ada. Kiri:Moto, PrusaSlicer, OrcaSlicer dan Bambu Lab P2S ialah add-on tersendiri yang anda hidupkan dari kad atau di bawah {{ui:Tetapan}} › {{ui:Add-on}}. PrusaSlicer dan OrcaSlicer menggunakan salinan anda sendiri dan berfungsi dari CadCraft Studio pada komputer.
- Keping yang bukan pepejal tertutup akan dikecualikan, dan kad memberitahu anda berapa banyak bentuk itu.
- Untuk pencetak resin, lihat [Potong untuk pencetak resin](topic:resin-printing). Untuk menyemak atau membaiki model dahulu, lihat [Penyokong, ketebalan dinding, berongga dan pembaikan](topic:print-tools).
