---
title: Tata letak UV mesh
summary: Tandai jahitan, unwrap, proyeksikan, dan susun koordinat tekstur mesh di ruang kerja UV, lalu periksa dengan papan catur dan warna regangan.
keywords: uv, uvs, unwrap, unwrapping, jahitan, seam, seams, tekstur, texture, koordinat tekstur, atlas, susun, penyusunan, pulau, island, islands, papan catur, checker, regangan, stretch, distorsi, proyeksi kotak, proyeksi silinder, proyeksi bola, konformal, berbasis sudut, lscm, abf
from: 00028f20
---

Tekstur adalah gambar datar; mesh tidak datar. **UV**-nya menentukan di mana setiap sudut dari setiap muka berada pada gambar. Ruang kerja UV membuatnya: Anda memotong mesh sepanjang **jahitan**, meratakan potongannya (**unwrap**), lalu memasukkannya ke dalam persegi (**susun**).

## Membukanya

Pilih mesh lalu pilih {{ui:UV}} dalam daftar {{ui:Ruang kerja}}. Grup atau komponen menjadi mesh lebih dulu, seperti pada ruang kerja Mesh. Tampilan 3D berpindah ke separuh kiri; **Editor UV** di kanan menampilkan muka mesh yang tertata di atas persegi tekstur. Pemilihan bekerja seperti di ruang kerja Mesh, dan apa yang Anda pilih di satu tampilan ikut terpilih di tampilan lainnya.

## Menandai jahitan

Jahitan adalah tempat mesh boleh dibuka dengan potongan; keduanya tampil merah di kedua tampilan.

- Pilih tepi ({{ui:Tepi}}, atau {{key:2}}) lalu tekan {{ui:Tandai jahitan}} ({{key:Ctrl+E}}). {{ui:Hapus jahitan}} ({{key:Ctrl+Shift+E}}) menghilangkannya.
- {{ui:Jahitan di tepi tajam}} menandai setiap tepi tajam dan setiap tepi tempat muka bertemu lebih dari 60°: sebuah kotak terbagi menjadi enam sisinya.
- {{ui:Jahitan dari UV}} menandai jahitan di tempat UV sudah terputus, misalnya setelah proyeksi.

Potongan tertutup memerlukan jahitan agar bisa rata: bola memerlukan setidaknya satu potongan, tabung memerlukan potongan sepanjang panjangnya.

## Unwrap

Pilih muka yang akan ditata (atau tidak ada, untuk seluruh mesh) lalu tekan {{ui:Unwrap}} ({{key:U}}). Setiap potongan di antara jahitan diratakan, dengan sudutnya dijaga setepat mungkin (perataan berbasis sudut), lalu potongan-potongan itu disusun ke dalam persegi. {{ui:Konformal}} sebagai gantinya membuka dengan peta konformal kuadrat terkecil: lebih cepat, sedikit kurang tepat pada potongan yang sangat melengkung. Bentuk yang dapat dibuat dari lembaran datar, seperti sisi silinder yang dipotong sekali, terbuka tanpa regangan sama sekali.

## Proyeksi

Untuk bentuk sederhana, proyeksi sering sudah cukup:

| Proyeksi | Fungsinya |
| --- | --- |
| {{ui:Kotak}} | Setiap muka ke sisi kotak yang paling menghadapnya |
| {{ui:Silinder}} | Mengelilingi sumbu biru: arah melintang adalah sudut keliling, arah ke atas adalah tinggi |
| {{ui:Bola}} | Dari pusat: arah melintang adalah sudut keliling, arah ke atas adalah lintang |
| {{ui:Dari tampilan}} | Seperti muka yang terlihat di tampilan 3D saat ini |

Muka yang melintasi sambungan silinder atau bola dijaga tetap utuh, sehingga UV-nya dapat melewati tepi kanan persegi sedikit; tekstur berulang di sana.

## Menata

- {{ui:Susun}} memasukkan potongan (pulau) ke dalam persegi pada satu ukuran texel, masing-masing diputar agar memakan ruang sekecil mungkin. Panel mengatur ruang yang tersisa di antaranya.
- {{ui:Putar 90°}} dan {{ui:Cermin}} memutar atau mencerminkan UV muka yang dipilih.
- Di editor UV, seret muka yang dipilih untuk memindahkan UV pilihan, atau arahkan ke editor lalu tekan {{key:R}} atau {{key:S}} kemudian gerakkan untuk memutar atau menskalakannya (klik mempertahankannya, {{key:Esc}} membatalkan). {{key:G}} memindahkan tanpa menyeret. Klik dua kali muka (atau {{key:L}}) untuk memilih seluruh pulaunya. Roda untuk zoom; seret dengan tombol tengah atau kanan untuk menggeser; {{key:F}} memaskan persegi kembali.

Setiap perubahan adalah satu langkah urungkan.

## Memeriksanya

- {{ui:Papan catur}} menampilkan papan catur berlabel pada mesh dalam UV-nya: kotak yang rata dan persegi berarti tekstur terletak merata; label menunjukkan arah tekstur berjalan.
- {{ui:Regangan}} mewarnai setiap muka menurut seberapa besar UV-nya meregangkannya: biru tidak ada, melalui hijau, sampai merah banyak. Panel memilih apakah itu mengukur **sudut yang bengkok** atau **ukuran yang berubah**, dan menampilkan rata-ratanya.

Lihat juga [Sunting mesh](topic:mesh-edit), [Mesh](topic:meshes) dan [Modifier pada mesh](topic:modifiers).
