---
title: Susun UV bagi jejaring
summary: Tandakan jahitan, buka lipatan, unjurkan dan pek koordinat tekstur sesebuah jejaring dalam ruang kerja UV, dan semak dengan dam dan warna regangan.
keywords: uv, uvs, unwrap, unwrapping, jahitan, seam, seams, tekstur, texture, koordinat tekstur, texture coordinates, atlas, pek, pemekatan, pulau, island, islands, dam, checker, regang, stretch, herotan, distortion, unjuran kotak, box projection, unjuran silinder, cylinder projection, unjuran sfera, sphere projection, konformal, conformal, berasaskan sudut, lscm, abf
from: 00028f20
---

Tekstur ialah gambar rata; jejaring tidak rata. **UV**nya menyatakan di mana setiap bucu bagi setiap muka terletak pada gambar. Ruang kerja UV menghasilkannya: anda memotong jejaring terbuka sepanjang **jahitan**, meratakan kepingan (**Unwrap**), dan memasukkannya ke dalam petak (**pek**).

## Buka

Pilih jejaring dan pilih {{ui:UV}} dalam senarai Ruang kerja. Kumpulan atau komponen menjadi jejaring dahulu, seperti dalam ruang kerja Jejaring. Paparan 3D beralih ke separuh kiri; **penyunting UV** di sebelah kanan menunjukkan muka jejaring yang tersusun pada petak tekstur. Pemilihan berfungsi seperti dalam ruang kerja Jejaring, dan apa yang anda pilih dalam satu paparan turut dipilih dalam paparan yang satu lagi.

## Tandakan jahitan

Jahitan ialah tempat jejaring boleh dibuka dengan dipotong; ia ditunjukkan merah dalam kedua-dua paparan.

- Pilih tepi ({{ui:Tepi}}, atau {{key:2}}) dan tekan {{ui:Tandakan jahitan}} ({{key:Ctrl+E}}). {{ui:Kosongkan jahitan}} ({{key:Ctrl+Shift+E}}) membuangnya.
- {{ui:Jahitan di tepi tajam}} menandakan setiap tepi tajam dan setiap tepi tempat muka bertemu pada lebih 60°: kotak jatuh kepada enam sisinya.
- {{ui:Jahitan daripada UV}} menandakan jahitan di tempat UV sudah pecah, contohnya selepas unjuran.

Bahagian tertutup memerlukan jahitan untuk menjadi rata: bola memerlukan sekurang-kurangnya satu potongan, tiub memerlukan satu potongan sepanjang panjangnya.

## Unwrap

Pilih muka yang hendak diratakan (atau tiada, untuk seluruh jejaring) dan tekan {{ui:Unwrap}} ({{key:U}}). Setiap bahagian antara jahitan diratakan, mengekalkan sudutnya seberapa tepat yang mungkin (perataan berasaskan sudut), kemudian bahagian-bahagian itu dipek ke dalam petak. {{ui:Konformal}} membuka lipatan dengan peta konformal kuasa dua terkecil: lebih pantas, dan sedikit kurang tepat pada bahagian yang sangat melengkung. Bentuk yang boleh dibuat daripada kepingan rata, seperti sisi silinder yang dipotong sekali, dibuka lipatan tanpa regangan langsung.

## Unjurkan

Untuk bentuk yang mudah, unjuran selalunya sudah memadai:

| Unjuran | Apa yang dilakukannya |
| --- | --- |
| {{ui:Kotak}} | Setiap muka ke sisi kotak yang paling dihadapinya |
| {{ui:Silinder}} | Mengelilingi paksi biru: merentasi ialah sudut pusingan, ke atas ialah ketinggian |
| {{ui:Sfera}} | Dari pusat: merentasi ialah sudut pusingan, ke atas ialah latitud |
| {{ui:Dari pandangan}} | Seperti muka kelihatan dalam paparan 3D sekarang |

Muka merentasi sambungan silinder atau sfera disimpan sebagai satu keping, jadi UV-nya boleh melangkaui sedikit tepi kanan petak; tekstur berulang di situ.

## Susun

- {{ui:Pek}} memasukkan kepingan (pulau) ke dalam petak pada satu saiz texel, setiap satu dipusing untuk mengambil ruang paling sedikit. Panel menetapkan ruang yang dibiarkan antara kepingan.
- {{ui:Putar 90°}} dan {{ui:Cermin}} memutar atau mencermin UV muka yang dipilih.
- Dalam penyunting UV, seret muka yang dipilih untuk mengalihkan UV pilihan, atau tuding ke penyunting dan tekan {{key:R}} atau {{key:S}} kemudian alihkan untuk memutar atau menskala UV itu (klik mengekalkannya, {{key:Esc}} membatalkan). {{key:G}} mengalih tanpa menyeret. Klik dua kali muka (atau {{key:L}}) untuk memilih seluruh pulaunya. Roda tetikus menzum; seret dengan butang tengah atau kanan untuk pan; {{key:F}} memuatkan semula petak.

Setiap perubahan ialah satu langkah buat asal.

## Semak

- {{ui:Dam}} menunjukkan dam berlabel pada jejaring dalam UVnya: kotak sama rata dan segi empat sama bermakna tekstur terletak dengan sama rata; label menunjukkan arah ia berjalan.
- {{ui:Regang}} mewarnakan setiap muka mengikut berapa banyak UVnya meregangkannya: biru bermakna tiada, melalui hijau, hingga merah bermakna banyak. Panel memilih sama ada ia mengukur **sudut yang dibengkokkan** atau **saiz yang berubah**, dan menunjukkan purata.

Lihat juga [Sunting jejaring](topic:mesh-edit), [Jejaring](topic:meshes) dan [Pengubah pada jejaring](topic:modifiers).
