---
title: Jejaring
summary: Tukar kumpulan atau komponen kepada jejaring — jenis objek yang dimodelkan oleh alat kandungan 3D — dan kembali kepada geometri tolak/tarik.
keywords: jejaring, poligon, n-gon, quad, bucu, half-edge, uv, tukar, tukar kepada jejaring, tukar kepada geometri, subbahagi, ukir, pemodelan, kandungan 3D
from: e32363e8
---

ModelCraft mempunyai dua jenis geometri. **Geometri tolak/tarik** ialah apa yang anda lukis: muka rata yang melekat bersama, saling memotong dan sembuh. **Jejaring** ialah jenis objek yang dimodelkan oleh alat kandungan 3D: muka dengan sebarang bilangan bucu, setiap bucu boleh membawa koordinat teksturnya sendiri (UV), normal dan warna, dan setiap bucu nilai seperti berat. Jejaring diletakkan seperti kumpulan atau komponen, dan duduk di sebelah geometri tolak/tarik dalam model yang sama.

## Tukar kumpulan atau komponen kepada jejaring

1. Pilih kumpulan atau komponen.
2. Dalam {{ui:Maklumat entiti}}, klik {{ui:Tukar kepada jejaring}}.

Muka-mukanya menjadi muka jejaring (muka berlubang masuk sebagai segi tiga), tepi keras kekal tajam, tepi lembut dibayangi licin, dan cat, bahan serta tekstur yang diimport kekal pada mukanya. Kumpulan dan komponen di dalamnya digabungkan menjadi satu jejaring. Tepi longgar ditinggalkan: jejaring mengekalkan muka. Setiap penempatan komponen menunjukkan jejaring. Ia satu langkah buat asal.

## Apa yang ditunjukkan Maklumat entiti

Pilih jejaring untuk melihat mukanya, bucunya dan tepinya, sama ada ia pepejal tertutup (dan isipadunya), dan saiznya seperti yang diletakkan. Jejaring dengan tepi terbuka menyatakan berapa banyak.

## Tukar jejaring kembali kepada geometri tolak/tarik

Pilih jejaring dan klik {{ui:Tukar kepada geometri}}. Muka rata kembali seperti asalnya; muka yang bucunya tidak berada dalam satu satah kembali sebagai segi tiga. Tepi tajam ialah keras, yang lain lembut. {{ui:Pecahkan}} meletakkan muka jejaring terus ke dalam kumpulan di sekelilingnya.

## Perkara yang perlu diketahui

- Klik dua kali jejaring untuk [menyunting bucu, tepi dan mukanya](topic:mesh-edit) dalam ruang kerja Jejaring. Tukarkannya kepada geometri untuk menyunting dengan tolak/tarik; alih, pusing, skala, salin, cat, sembunyi dan tanda seperti mana-mana kumpulan.
- Eksport, cetakan 3D, render dan VR melihat jejaring sebagai mukanya.
- Fail yang mengandungi jejaring disimpan sebagai versi `.modelcraft` yang lebih baharu, jadi ModelCraft 0.6 dan lebih lama tidak dapat membukanya; fail tanpa jejaring tetap dibuka di dalamnya seperti biasa. Tukar jejaring kepada geometri dahulu untuk berkongsi fail dengan seseorang yang menggunakan versi lebih lama.
- Buat asal pada jejaring hanya menyimpan apa yang diubah oleh setiap langkah, jadi walaupun jejaring yang sangat besar dibuat asal dengan cepat.

Lihat juga [Kumpulan dan komponen](topic:groups-components) dan [Belum dibina](topic:not-built-yet).
