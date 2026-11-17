---
title: Kirim massing ke BimCraft
summary: Serahkan massing dorong/tarik ke BimCraft sebagai opsi massing, dengan lantai, jejak, luas lantai bruto, dan volume yang dihitung dari setiap solid.
keywords: massing, massa, konsep, opsi, bimcraft, ifc, bim, dorong tarik, lantai, tingkat, luas lantai bruto, jejak, volume, kirim, serahkan, massa bangunan, tahap 2
from: 73c51f3f
---

## Yang akan Anda lakukan

Ubah blok yang Anda modelkan dengan dorong/tarik menjadi opsi massing yang dipahami BimCraft, sehingga konsep itu berlanjut sebagai model bangunan.

## Sebelum mulai

Jadikan setiap massa sebuah **grup** atau **komponen** dan beri nama. Setiap massa menjadi satu opsi. Geometri lepas tidak dikirim.

## Kirim

1. Pilih grup yang akan dikirim. Jika tidak ada yang dipilih, setiap grup dan komponen tingkat atas ikut dikirim.
2. Pilih {{ui:Ekspor}}, lalu {{ui:Massing ke BimCraft…}}.
3. Ketik {{ui:Nama set opsi}} dan {{ui:Tinggi lantai}}.
4. Periksa daftarnya: lantai, jejak, luas lantai bruto, dan volume setiap opsi.
5. Pilih **Kirim ke BimCraft** untuk membuka BimCraft di tab baru dengan opsi-opsinya, atau {{ui:Simpan sebagai IFC}} untuk mengunduh file dan membukanya di sana sendiri.

Di BimCraft, opsi tercantum di bawah "Opsi massing dalam model", tempat salah satunya bisa dijadikan opsi aktif dan dikembangkan menjadi dinding dan lantai.

## Cara solid menjadi massa

- **Lantai** adalah tinggi solid dibagi tinggi lantai, dibulatkan, dan minimal satu. Lantai-lantai itu kemudian berbagi tinggi solid secara merata, sehingga blok 10 m dengan lantai 3 m memiliki 3 lantai masing-masing 3,33 m.
- **Luas lantai** adalah luas potongan horizontal solid itu sendiri pada level lantai tersebut. Blok yang mundur memiliki lantai atas yang lebih kecil, dan luas lantai bruto adalah jumlahnya.
- **Jejak** adalah garis tepi potongan tepat di atas dasar solid.
- **Volume** adalah milik solid itu sendiri.

Dalam file IFC, setiap opsi adalah proxy elemen bangunan (jejak yang dinaikkan setinggi solid) dengan satu ruang per lantai yang membawa luas bruto lantai tersebut. Semua opsi berbagi satu bangunan, dengan jumlah lantai sebanyak opsi tertinggi.

## Bentuk yang disederhanakan

Blok tegak polos dikirim persis seperti yang dimodelkan. Bentuk lain tetap dikirim, dan daftar menyebutkan alasan bentuknya disederhanakan:

- **Lantainya tidak semuanya sama besar dengan dasarnya** (mundur atau miring): massa di BimCraft adalah garis dasar yang dinaikkan ke tinggi penuh, tetapi luas lantai dan volume adalah milik solid itu sendiri.
- **Solid tidak tertutup**: lantai yang potongannya tidak dapat ditutup tidak diukur dan dihitung sebagai nol. Tutup solid ({{ui:Info entitas}} menampilkan "Solid: Ya") untuk angka lengkap.
- **Dasarnya memiliki lebih dari satu garis tepi**: yang terbesar dipakai sebagai jejak.

## Yang perlu diketahui

- {{ui:IFC untuk BimCraft (.ifc)}} adalah ekspor yang berbeda: hanya mengirim bentuk dan nama, tanpa lantai atau luas.
- Tidak ada yang diunggah. File diserahkan ke tab BimCraft di komputer ini.
