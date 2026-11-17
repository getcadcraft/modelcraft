---
title: Bagi tepi atau kurva menjadi bagian yang sama
summary: Pecah garis menjadi potongan yang sama, atau beri busur atau lingkaran jumlah segmen baru, dengan alat Bagi.
keywords: bagi, bagi tepi, bagian yang sama, segmen yang sama, pecah tepi, segmen, subdivide, subdivide tepi, segmen busur, segmen lingkaran, titik sepanjang garis
from: 5c3ce3ed
---

{{ui:Bagi}} memotong tepi menjadi bagian yang sama, dengan sudut di setiap potongan. Gunakan sudut-sudut itu untuk snap, untuk memulai garis, atau untuk mendorong dan menarik bagian dari sebuah muka.

## Bagi tepi

1. Klik {{ui:Bagi}} di bilah alat, atau pilih tepi lalu klik {{ui:Bagi…}} di {{ui:Info entitas}}.
2. Arahkan penunjuk ke tepi. Tanda menunjukkan di mana potongan akan dibuat: di tengah tepi menjadi dua bagian; geser ke salah satu ujung untuk lebih banyak bagian.
3. Klik untuk membaginya menjadi bagian yang ditampilkan. Atau ketik angka, seperti `5` (atau `5s`, atau `/5`), lalu tekan {{key:Enter}}: tepi langsung terbagi.

Bagian-bagian yang dihasilkan tetap dipilih, dan itu satu langkah urungkan. Muka yang memiliki tepi tersebut tetap bentuknya dan mendapat sudut-sudut baru.

## Bagi busur atau lingkaran

Arahkan penunjuk ke segmen mana pun dari busur atau lingkaran: busur itu terbagi secara utuh.

- Busur atau lingkaran yang sudutnya tidak dipakai objek lain, dan berbaring rata di mukanya, **digambar ulang dengan jumlah segmen tersebut** pada busur yang sebenarnya. Ujungnya tetap di tempatnya, dan tetap satu kurva, jadi Anda masih bisa memilihnya dengan satu klik dan mengubah radiusnya di {{ui:Info entitas}}. Lingkaran 24 sisi yang dibagi menjadi 8 menjadi segi delapan.
- Kurva lain — tepi silinder yang ditarik, kurva yang digambar dengan {{ui:Kurva}}, busur dengan garis yang tersambung ke sudutnya — mendapat sudut baru dengan panjang yang sama di sepanjang kurva itu, dan tidak ada yang bergeser.

## Dengan tombol pemodel

Alatnya sama dengan tombol pemodel (Pengaturan › ModelCraft › Pintasan, atau gaya menu Modeler), dan di sana alat ini ada di menu {{ui:Mesh}} sebagai {{ui:Subdivide tepi}}.

## Hal yang perlu diketahui

- Angka yang diketik berkisar dari 2 sampai 1000; penunjuk yang digerakkan hingga 100.
- Kurva yang digambar dengan {{ui:Kurva}} menyimpan titiknya: setelah {{ui:Edit titik}}, kurva digambar ulang dari titik-titik itu dan sudut-sudut baru hilang.

Lihat juga [Gambar muka dengan garis, persegi panjang, lingkaran dan busur](topic:draw-faces) dan [Ketik ukuran pasti di kotak nilai](topic:value-box).
