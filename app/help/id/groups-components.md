---
title: Grup dan komponen
summary: Jaga agar objek tidak saling menempel, sunting satu salinan untuk mengubah semuanya, dan gunakan panel Kerangka dan Komponen.
keywords: grup, komponen, buat grup, buat komponen, urai, jadikan unik, kerangka, instans, salinan, blok, bersarang, edit grup, letakkan
from: 7cb925f3
---

Geometri lepas di ModelCraft saling menempel: garis yang bersentuhan saling membagi, dan muka yang berbagi tepi ikut bergerak bersama. Itulah yang membuat menggambar di atas muka berfungsi, tetapi juga berarti kotak yang digambar menempel pada kotak lain akan menyatu dengannya. **Grup** dan **komponen** membuat hal-hal tetap terpisah.

- **Grup** membungkus sebagian geometri sehingga berfungsi sebagai satu objek. Tidak ada yang di luarnya bisa menempel padanya.
- **Komponen** adalah grup yang bisa ditempatkan berkali-kali. Setiap salinan memakai isi yang sama: sunting satu dan semuanya ikut berubah. Gunakan komponen untuk apa pun yang berulang: jendela, kolom, meja, pohon.

## Buat grup atau komponen

1. Pilih geometrinya. Klik tiga kali pada muka memilih seluruh objek yang terhubung; seret jendela memilih semua yang ada di dalam kotak.
2. Tekan {{key:Shift+G}} untuk grup, atau {{key:G}} untuk komponen. Anda juga bisa klik {{ui:Group}} atau {{ui:Component}} di grup {{ui:Organize}} pada bilah alat, atau {{ui:Make group (Shift+G)}} atau {{ui:Make component (G)}} di {{ui:Entity info}}.

   Bilah status menampilkan "Dikelompokkan sebagai Group#1." atau "Komponen Component#1 dibuat.", objek baru dipilih, dan objek itu muncul di {{ui:Outliner}}.

3. Untuk memberinya nama, ketik nama di kolom {{ui:Name}} pada {{ui:Entity info}}, lalu tekan {{key:Enter}} atau klik di luar.

Memilih muka juga membawa serta tepinya. Jika tidak ada yang dipilih, bilah status menampilkan "Pilih geometri terlebih dahulu (seret jendela, atau klik tiga kali untuk memilih semua yang terhubung)."

Anda juga bisa membuat grup dari grup: pilih beberapa grup dan tekan {{key:Shift+G}}. {{ui:Outliner}} menampilkan susunan bersarangnya.

:::note
Huruf tombol mengikuti default SketchUp: {{key:G}} membuat komponen, {{key:Shift+G}} membuat grup.
:::

## Sunting di dalam grup atau komponen

1. Klik dua kali (di tampilan atau di {{ui:Outliner}}), atau pilih lalu klik {{ui:Edit}} di {{ui:Entity info}}.

   Bagian lain model memudar, sumbu berpindah ke sumbu milik grup, dan {{ui:Outliner}} menampilkan "Mengedit: Model › Group#1". Bilah status menampilkan "Mengedit Group#1. Esc atau klik dua kali di luar akan menutupnya."

2. Gambar, dorong/tarik, pindahkan, dan hapus seperti biasa. Semua yang Anda lakukan tetap di dalam grup.
3. Tutup dengan menekan {{key:Esc}} (dua kali jika ada yang dipilih), klik dua kali ruang kosong, atau klik {{ui:Close group}} di {{ui:Outliner}}.

Selama komponen terbuka, setiap salinannya ikut berubah saat Anda bekerja.

## Tempatkan lebih banyak salinan komponen

- Salin dengan {{ui:Move}} dan {{key:Ctrl}} (lihat [Pindahkan dan salin](topic:move-copy)). Setiap salinan adalah penempatan lain dari komponen yang sama.
- Atau klik {{ui:Place}} di sebelahnya pada panel {{ui:Components}}, lalu klik tempat yang diinginkan. Titik asalnya, yaitu sudut terbawah kotak di sekitar yang Anda pilih saat membuatnya, akan berada di tempat Anda klik. Alat kemudian kembali ke {{ui:Select}}.

{{ui:Components}} menampilkan berapa banyak salinan yang sudah ditempatkan ("4×"), dan {{ui:Outliner}} menampilkan jumlahnya setelah nama.

## Atur ulang di Kerangka

Seret baris di {{ui:Outliner}} untuk mengubah tempat asalnya. Tidak ada yang berpindah di tampilan: grup tetap di tempatnya dalam model.

- **Masuk ke grup:** lepaskan di tengah baris grup (baris akan diberi garis putus-putus). Objek itu masuk ke dalam grup, di posisi paling akhir.
- **Urutan berbeda:** lepaskan di tepi atas atau bawah baris (akan muncul garis). Objek itu ditempatkan tepat sebelum atau sesudah baris tersebut, di dalam grup yang sama dengan baris itu, jadi ini juga memasukkannya ke grup di posisi yang Anda pilih.
- **Keluar ke tingkat teratas:** lepaskan di judul {{ui:Outliner}}. Objek itu ditempatkan paling akhir.

Setiap pelepasan adalah satu langkah: {{key:Mod+Z}} mengembalikannya. {{key:Esc}} saat menyeret tidak melepaskan apa pun. Grup tidak bisa masuk ke dalam dirinya sendiri atau ke dalam grup yang ada di dalamnya. Menyeret nonaktif selama {{ui:Find by name}} berisi teks.

:::touch
Tahan jari pada baris sebentar, lalu seret. Geseran cepat akan menggulir daftar.
:::

## Buat satu salinan berbeda

Pilih salinan dan klik {{ui:Make unique}} di {{ui:Entity info}} (muncul saat komponen ditempatkan lebih dari sekali). Salinan itu mendapat definisinya sendiri, dinamai seperti aslinya dengan nomor baru. Sunting tanpa menyentuh yang lain.

## Ubah grup menjadi komponen

Pilih grup dan klik {{ui:Make component}} di {{ui:Entity info}}. Grup itu mendapat nama baru, seperti Component#2, meskipun Anda sudah memberinya nama; ketik nama itu lagi di {{ui:Name}}.

## Urai

Pilih grup atau komponen dan klik {{ui:Explode}} (di bilah alat atau di {{ui:Entity info}}). Isinya menjadi geometri lepas di tempat semula, dan menempel pada apa pun yang disentuhnya. Grup di dalamnya tetap menjadi grup.

## Solid dan volume

Saat Anda memilih grup atau komponen, {{ui:Entity info}} menampilkan **Solid: Ya** jika mukanya tertutup rapat tanpa celah (setiap tepi dibagi oleh tepat dua muka) dan tidak ada grup bersarang di dalamnya. Lalu juga menampilkan **volume**. Kotak, dinding dengan jendela terpotong, dan silinder yang ditarik adalah solid; kotak yang bagian atasnya dihapus bukan.

## Saat salinan terakhir dihapus

Menghapus salinan terakhir sebuah komponen juga menghapusnya dari panel {{ui:Components}}. {{key:Mod+Z}} mengembalikannya.

## Hal yang perlu diketahui

- Salinan **grup** yang dibuat dengan Pindahkan berbagi isinya di build ini, seperti salinan komponen: menyunting satu akan mengubah yang lain. Untuk membuatnya mandiri, klik {{ui:Make component}}, lalu {{ui:Make unique}}. Lihat [Pemecahan masalah](topic:troubleshooting#editing-one-group-changed-another).
- Komponen tidak memotong bukaan di dinding atau menempel pada muka, dan tidak ada pustaka komponen siap pakai. Anda membuat sendiri, atau mengimpornya.
- File yang diimpor datang sebagai grup. File Collada menyimpan grup dan komponennya sendiri di dalamnya.
