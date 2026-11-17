---
title: Haluskan dan lembutkan tepi
summary: Sembunyikan tepi di antara muka yang bertemu pada sudut landai, sehingga bentuk melengkung terbaca sebagai satu permukaan halus, di ModelCraft dan dalam file ekspor.
keywords: haluskan, lembutkan, tepi lembut, shading halus, sembunyikan tepi, muka bersudut, bersudut, melengkung, normal, keraskan, sudut
from: 52d32453
---

Bentuk melengkung di ModelCraft tersusun dari muka datar. Tepi **lembut** di antara muka-muka itu tidak digambar, dan muka yang dihubungkannya ditampilkan sebagai satu permukaan halus, sehingga silinder 24 sisi terlihat bulat.

Saat Anda menarik lingkaran dengan {{ui:Dorong/tarik}}, sisinya dilembutkan untuk Anda. Untuk bentuk lain, lembutkan berdasarkan sudut.

## Lembutkan berdasarkan sudut

1. Pilih apa yang akan dilembutkan: muka dan tepi, atau grup atau komponen (semua tepinya).
2. Di {{ui:Info entitas}}, ketik sudut di {{ui:Haluskan hingga}}, misalnya `20`, lalu klik {{ui:Haluskan}}.

Setiap tepi dalam pilihan yang kedua mukanya berbelok sebesar sudut itu atau kurang akan menjadi lembut; tepi dengan belokan yang lebih tajam menjadi keras. Sisi prisma 12 sisi berbelok 30° dan tepinya 90°, jadi `31` hanya melembutkan sisinya.

{{ui:Tegaskan semua}} membuat setiap tepi dalam pilihan menjadi keras kembali. Setiap langkah adalah satu langkah urungkan.

## Hal yang perlu diketahui

- Hanya tepi di antara tepat dua muka yang dilembutkan. Tepi lepas tetap seperti semula.
- Shading halus hanya bekerja melintasi tepi lembut: muka tanpa tepi lembut ditampilkan datar.
- Tepi lembut disimpan dalam file ModelCraft. Ekspor **glTF (.glb)** dan **OBJ** membawa shading halus (satu normal per sudut), sehingga program lain menampilkan permukaan yang sama. Collada dan STL mengekspor muka datar.
- Tepi lembut disembunyikan di setiap gaya muka, termasuk {{ui:Sinar-X}} dan {{ui:Rangka kawat}}. Untuk melihatnya, pilih bentuk dan klik {{ui:Tegaskan semua}}; urungkan akan mengembalikan pelembutannya.
