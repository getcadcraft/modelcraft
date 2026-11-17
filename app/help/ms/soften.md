---
title: Lembutkan dan licinkan tepi
summary: Sembunyikan tepi antara muka yang bertemu pada sudut cetek, supaya bentuk melengkung kelihatan sebagai satu permukaan licin, dalam ModelCraft dan dalam fail yang dieksport.
keywords: lembutkan, licinkan, tepi lembut, pembayangan licin, sembunyi tepi, bahagian bersudut, bersudut, normal, keraskan, sudut
from: 52d32453
---

Bentuk melengkung dalam ModelCraft dibuat daripada muka rata. Tepi **lembut** antara muka itu tidak dilukis, dan muka yang disambungkannya dibayangkan sebagai satu permukaan licin, jadi silinder 24 sisi kelihatan bulat.

Apabila anda menarik bulatan ke atas dengan {{ui:Tolak/tarik}}, sisinya dilembutkan untuk anda. Untuk bentuk lain, lembutkan mengikut sudut.

## Lembutkan mengikut sudut

1. Pilih apa yang hendak dilembutkan: muka dan tepi, atau kumpulan atau komponen (semua tepinya).
2. Dalam {{ui:Maklumat entiti}}, taip sudut dalam {{ui:Lembutkan sehingga}}, seperti `20`, dan klik {{ui:Lembutkan}}.

Setiap tepi dalam pilihan yang dua mukanya berpusing sebanyak sudut itu atau kurang menjadi lembut; tepi dengan pusingan yang lebih tajam menjadi keras. Sisi prisma 12 sisi berpusing sebanyak 30° dan rimnya 90°, jadi `31` hanya melembutkan sisi.

{{ui:Keraskan semua}} menjadikan setiap tepi dalam pilihan keras semula. Setiap satu ialah satu langkah buat asal.

## Perkara yang perlu diketahui

- Hanya tepi antara tepat dua muka dilembutkan. Tepi longgar kekal seperti sedia ada.
- Pembayangan licin hanya merentasi tepi lembut: muka tanpa tepi lembut dibayangkan secara rata.
- Tepi lembut disimpan dalam fail ModelCraft. Eksport **glTF (.glb)** dan **OBJ** membawa pembayangan licin (satu normal setiap bucu), jadi program lain menunjukkan permukaan yang sama. Eksport Collada dan STL menghasilkan muka rata.
- Tepi lembut disembunyikan dalam setiap gaya muka, {{ui:Sinar-X}} dan {{ui:Rangka dawai}} juga. Untuk melihatnya, pilih bentuk dan klik {{ui:Keraskan semua}}; buat asal mengembalikan pelembutan.
