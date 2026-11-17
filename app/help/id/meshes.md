---
title: Mesh
summary: Ubah grup atau komponen menjadi mesh — jenis objek yang dimodelkan alat konten 3D — dan kembali menjadi geometri dorong/tarik.
keywords: mesh, mesh, poligon, poligon, n-gon, quad, quad, verteks, half-edge, uv, uv, ubah, ubah menjadi mesh, ubah menjadi geometri, subdivisi, sculpt, pemodelan, konten 3d
from: e32363e8
---

ModelCraft memiliki dua jenis geometri. **Geometri dorong/tarik** adalah yang Anda gambar: muka datar yang saling menempel, saling memotong, dan menyatu kembali. **Mesh** adalah jenis objek yang dimodelkan alat konten 3D: muka dengan jumlah sudut berapa pun, setiap sudut dapat membawa koordinat teksturnya sendiri (UV), normal, dan warna, dan setiap verteks memiliki nilai seperti bobot. Mesh ditempatkan seperti grup atau komponen, dan berada di samping geometri dorong/tarik dalam model yang sama.

## Ubah grup atau komponen menjadi mesh

1. Pilih grup atau komponen.
2. Di {{ui:Info entitas}}, klik {{ui:Ubah menjadi mesh}}.

Muka-mukanya menjadi muka mesh (muka dengan lubang masuk sebagai segitiga), tepi keras tetap tajam, tepi lunak dibayangi dengan halus, dan cat, material, serta tekstur impor tetap berada di muka-mukanya. Grup dan komponen di dalamnya digabung menjadi satu mesh. Tepi lepas tidak ikut: mesh hanya menyimpan muka. Setiap penempatan komponen menampilkan mesh. Ini adalah satu langkah urungkan.

## Apa yang ditampilkan Info entitas

Pilih mesh untuk melihat muka, verteks, dan tepinya, apakah ia solid tertutup (beserta volumenya), serta ukurannya sebagaimana ditempatkan. Mesh dengan tepi terbuka menyebutkan jumlahnya.

## Ubah mesh kembali menjadi geometri dorong/tarik

Pilih mesh dan klik {{ui:Ubah menjadi geometri}}. Muka datar kembali seperti semula; muka yang sudutnya tidak berada dalam satu bidang kembali sebagai segitiga. Tepi tajam menjadi keras, lainnya lunak. {{ui:Urai}} menempatkan muka mesh langsung ke dalam grup di sekelilingnya.

## Hal yang perlu diketahui

- Klik dua kali mesh untuk [menyunting verteks, tepi, dan muka](topic:mesh-edit) di ruang kerja Mesh. Ubah menjadi geometri untuk menyuntingnya dengan dorong/tarik; pindahkan, putar, skala, salin, cat, sembunyikan, dan beri tag seperti grup lainnya.
- Ekspor, cetak 3D, render, dan VR melihat mesh sebagai muka-mukanya.
- File yang berisi mesh disimpan sebagai versi `.modelcraft` yang lebih baru, sehingga ModelCraft 0.6 dan yang lebih lama tidak dapat membukanya; file tanpa mesh tetap terbuka di versi itu seperti sebelumnya. Ubah mesh menjadi geometri dulu untuk berbagi file dengan orang yang memakai versi lama.
- Urungkan pada mesh hanya menyimpan apa yang diubah pada setiap langkah, sehingga mesh yang sangat besar pun cepat dikembalikan.

Lihat juga [Grup dan komponen](topic:groups-components) dan [Belum dibuat](topic:not-built-yet).
