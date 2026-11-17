---
title: Jaga model .3dm tetap langsung
summary: Ubah model di program yang membuatnya dan lihat perubahannya di sini, dari Rhino 8 atau definisi Grasshopper, tanpa menyimpan dan mengimpor ulang.
keywords: rhino, grasshopper, tautan langsung, koneksi langsung, 3dm, nurbs, parametrik, tautan, sinkron, skrip, model referensi, dorong
from: 331b0a7e
---

Tetap modelkan di tempat Anda biasa memodelkan, dan gunakan hasilnya di sini: untuk di-render, diberi cahaya, atau untuk menyusun scene di sekelilingnya. Setiap perubahan di program lain memperbarui satu grup di ModelCraft.

:::note
Tautan membutuhkan **CadCraft Studio** di komputer yang sama. Tab peramban tidak dapat membuat koneksi. Tidak ada yang dikirim melalui internet: skrip berbicara dengan Studio di alamat komputer ini sendiri, dengan token.
:::

:::warning
Tautan ini telah diuji dengan penulis file dari skrip dan pengganti untuk program lain, belum di dalam Rhino atau Grasshopper itu sendiri. Jika ada yang gagal di sana, beri tahu kami apa yang tertulis.
:::

## Atur

1. Di Studio, buka ModelCraft. Di {{ui:Pengaturan}} › {{ui:ModelCraft}} › {{ui:Asisten}}, centang **Izinkan asisten AI dan skrip menggunakan ModelCraft**, lalu **Edit**.
2. Di Studio, pilih {{ui:Hubungkan asisten}}. Akan tampil alamat dan token yang akan Anda tempel di bawah.
3. Unduh skripnya: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Dari Rhino

1. Jalankan `cadcraft_link.py` di editor skrip Rhino (Python 3 di Rhino 8).
2. Pertama kali, tempel alamat dan token. Keduanya disimpan di `.cadcraft-link.json` di folder beranda Anda, tidak pernah di dalam model. Studio membuat token baru setiap kali mulai, jadi skrip akan menanyakannya lagi saat itu.

Seluruh model masuk sebagai satu grup dengan nama dokumen, misalnya "chair (linked)". Setelah itu, setiap perubahan masuk ketika Anda berhenti sebentar, dan hanya objek yang berubah yang dikirim. Jalankan skrip lagi untuk berhenti.

## Dari Grasshopper

Jalankan skrip sekali di Rhino terlebih dahulu, agar alamat dan token tersimpan.

1. Tambahkan komponen Script (Python 3) dan tempel seluruh isi `cadcraft_link.py` ke dalamnya.
2. Beri input berikut: `G` (geometri, dengan akses list), `N` (nama, opsional), `On` (toggle boolean), dan `Target` (opsional: `model` atau `part`, jika kedua aplikasi terbuka).
3. Atur `On` menjadi true.

Setiap solve mengirim `G` dan menggantikan apa yang dikirim terakhir kali, jadi menyeret slider memperbarui grup di sini. Output `a` menyatakan apa yang terjadi. Setiap komponen memiliki grupnya sendiri.

## Yang bisa Anda lakukan dengan grup

- **Pindahkan, beri tag, bangun di sekelilingnya.** Posisi grup dan tag-nya tetap sama pada setiap pembaruan, begitu juga semua yang ada di sebelahnya.
- **Jangan sunting di dalamnya.** Setiap pembaruan menggantikan isi grup. Objek-objek itu dimiliki program lain.
- **Urungkan.** Pembaruan yang berselang kurang dari dua detik berbagi satu langkah urungkan, sehingga {{key:Mod+Z}} membatalkan seluruh seretan. Pembaruan berikutnya membawa model kembali sesuai.
- **Simpan.** File yang disimpan tetap menyimpan tautannya. Jalankan skrip lagi setelah Anda membukanya kembali, dan grup yang sama akan diperbarui.

## Apa yang ikut masuk

Mesh, polysurface, surface, dan extrusion sebagai mesh yang Anda lihat di layar, SubD sebagai mesh-nya, kurva sebagai tepi, blok sebagai objek terpisah di tempatnya berada (bukan sebagai komponen), layer sebagai tag, serta warna dan satuan. Lihat [Impor model .3dm](topic:import-3dm-files) untuk melihat bagaimana semua itu tampil di sini.

Yang tidak ikut, dengan jumlahnya di program lain: titik, teks, dimensi, lampu, dan sejenisnya.

**Satu arah saja.** Perubahan di sini tidak kembali ke program lain.

## Jika ada yang salah

- **"Tidak ada jendela ModelCraft atau PartCraft yang mengizinkannya":** lakukan langkah 1 pada pengaturan.
- **"Studio menolak token":** Studio telah dimulai ulang. Salin token baru dan jalankan skrip lagi. Untuk Grasshopper, jalankan dulu di Rhino.
- **"Tidak dapat menjangkau CadCraft Studio":** Studio tidak berjalan, atau alamatnya telah berubah.
