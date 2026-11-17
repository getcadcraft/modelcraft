---
title: Kekalkan model .3dm dalam keadaan langsung
summary: Tukar model dalam program yang menghasilkannya dan lihat ia berubah di sini, daripada Rhino 8 atau takrifan Grasshopper, tanpa simpan dan import semula.
keywords: rhino, grasshopper, pautan langsung, sambungan langsung, 3dm, nurbs, parametrik, pautan, segerak, skrip, model rujukan, tolak
from: 331b0a7e
---

Teruskan memodel di tempat anda memodel, dan gunakan hasilnya di sini: untuk merender, menyinari atau menyusun adegan di sekelilingnya. Setiap perubahan dalam program lain mengemas kini satu kumpulan dalam ModelCraft.

:::note
Pautan ini memerlukan **CadCraft Studio** pada komputer yang sama. Tab pelayar tidak boleh mengambil sambungan. Tiada apa-apa dihantar melalui internet: skrip bercakap dengan Studio pada alamat komputer ini sendiri, dengan token.
:::

:::warning
Pautan ini telah diuji dengan penulis fail skrip dan pengganti bagi program lain, belum lagi di dalam Rhino atau Grasshopper sendiri. Jika ada yang gagal di sana, beritahu kami apa yang dikatakannya.
:::

## Sediakan

1. Dalam Studio, buka ModelCraft. Dalam {{ui:Tetapan}} › {{ui:ModelCraft}} › {{ui:Pembantu}}, tanda **Benarkan pembantu AI dan skrip menggunakan ModelCraft**, kemudian **Sunting**.
2. Dalam Studio, pilih {{ui:Sambungkan pembantu}}. Ia menunjukkan alamat dan token yang akan anda tampal di bawah.
3. Muat turun skrip: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Dari Rhino

1. Jalankan `cadcraft_link.py` dalam editor skrip Rhino (Python 3 dalam Rhino 8).
2. Kali pertama, tampal alamat dan token. Ia disimpan dalam `.cadcraft-link.json` dalam folder utama anda, tidak sekali-sekali dalam model. Studio membuat token baharu setiap kali ia bermula, jadi skrip akan meminta semula ketika itu.

Seluruh model dimasukkan sebagai satu kumpulan dinamakan sempena dokumen, contohnya "chair (linked)". Selepas itu, setiap perubahan dimasukkan apabila anda berhenti seketika, dan hanya objek yang berubah dihantar. Jalankan skrip semula untuk berhenti.

## Dari Grasshopper

Jalankan skrip sekali dalam Rhino dahulu, supaya alamat dan token disimpan.

1. Tambah komponen Script (Python 3) dan tampal keseluruhan `cadcraft_link.py` ke dalamnya.
2. Beri input berikut: `G` (geometri, dengan akses senarai), `N` (nama, pilihan), `On` (togol boolean), dan `Target` (pilihan: `model` atau `part`, jika kedua-dua aplikasi dibuka).
3. Tetapkan `On` kepada benar.

Setiap solve menghantar `G` dan menggantikan apa yang dihantar pada kali terakhir, jadi menyeret peluncur mengemas kini kumpulan di sini. Outputnya `a` menyatakan apa yang berlaku. Setiap komponen mempunyai kumpulannya sendiri.

## Apa yang anda boleh buat dengan kumpulan

- **Alihkan, tanda, bina di sekelilingnya.** Tempat anda meletakkan kumpulan dan tagnya kekal melalui setiap kemas kini, begitu juga apa sahaja di sebelahnya.
- **Jangan sunting di dalamnya.** Setiap kemas kini menggantikan apa yang ada di dalamnya. Program lain memiliki objek tersebut.
- **Buat asal.** Kemas kini dalam tempoh dua saat antara satu sama lain berkongsi satu langkah buat asal, jadi {{key:Mod+Z}} membatalkan keseluruhan seretan. Kemas kini seterusnya membawa model kembali sepadan.
- **Simpan.** Fail yang disimpan mengekalkan pautan. Jalankan skrip semula selepas anda membukanya semula, dan kumpulan yang sama akan dikemas kini.

## Apa yang dimasukkan

Mesh, polypermukaan, permukaan dan ekstrusi sebagai mesh yang anda lihat pada skrin, SubD sebagai meshnya, lengkung sebagai tepi, blok sebagai objek berasingan di tempat ia berdiri (bukan sebagai komponen), lapisan sebagai tag, serta warna dan unit. Lihat [Import model .3dm](topic:import-3dm-files) untuk melihat bagaimana ia muncul di sini.

Ditinggalkan, dengan kiraan dalam program lain: titik, teks, dimensi, lampu dan seumpamanya.

**Satu hala sahaja.** Perubahan di sini tidak dihantar balik ke program lain.

## Jika sesuatu tidak kena

- **"No ModelCraft or PartCraft window allows it":** lakukan langkah 1 pada persediaan.
- **"Studio refused the token":** Studio telah dimulakan semula. Salin token baharu dan jalankan skrip semula. Untuk Grasshopper, jalankan dalam Rhino dahulu.
- **"Cannot reach CadCraft Studio":** Studio tidak berjalan, atau alamatnya telah berubah.
