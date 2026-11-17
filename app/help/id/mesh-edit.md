---
title: Sunting mesh di ruang kerja Mesh
summary: Pilih verteks, tepi, dan muka mesh, pindahkan, lalu ekstrusi, inset, bevel, potong, gabungkan, isi, dan jembatani, dengan salah satu gaya tombol.
keywords: mesh, mode sunting, ruang kerja mesh, verteks, tepi, muka, ekstrusi, inset, bevel, loop cut, pisau, belah, putar bertahap, gabungkan, lebur, isi, isi kisi, jembatan, subbagi, geser, proportional editing, falloff, ruang kerja
from: 92a372dd
---

**Ruang kerja Mesh** menyunting [mesh](topic:meshes) titik demi titik: verteks, tepi, dan muka. Geometri dorong/tarik tetap berada di ruang kerja **Model**.

## Buka

- Pilih {{ui:Mesh}} di daftar {{ui:Ruang kerja}} di sebelah kiri bilah alat. Mesh yang dipilih terbuka untuk disunting; grup atau komponen yang dipilih lebih dulu diubah menjadi mesh (satu langkah urungkan).
- Atau klik dua kali mesh, atau, dengan tombol pemodel, pilih mesh lalu tekan {{key:Tab}}.
- Tanpa pilihan, panel menawarkan mesh untuk ditambahkan: bidang, grid, kubus, lingkaran, silinder, kerucut, bola, ico sphere, dan torus. Mesh baru diletakkan ke arah tampilan melihat dan langsung terbuka untuk disunting.

{{ui:Kembali ke Model}} (atau daftar, {{key:Tab}} dengan tombol pemodel, {{key:Esc}} tanpa pilihan dengan tombol dorong/tarik) kembali ke Model dengan mesh yang dipilih. Selama ruang kerja Mesh terbuka, sisa model dibuat pudar dan alat gambar Model disimpan.

## Pilih

| Lakukan | Untuk |
|---|---|
| {{key:1}} {{key:2}} {{key:3}} | Pilih verteks, tepi, atau muka |
| Klik | Pilih satu; {{key:Shift}}+klik menambah atau menghapus |
| Seret kotak | Pilih yang ada di dalam dan terlihat; {{key:Shift}} menambah, {{key:Ctrl}} menghapus |
| {{key:Alt}}+klik tepi, atau klik dua kali | Loop tepinya (loop muka dalam mode muka; seluruh batas pada tepi terbuka) |
| {{key:Ctrl}}+{{key:Alt}}+klik tepi | Ring tepinya |
| Klik tiga kali | Semua yang tersambung dengannya |

Grup {{ui:Pilih}} juga memiliki {{ui:Semua}}, {{ui:Tertaut}}, {{ui:Loop}}, {{ui:Ring}}, {{ui:Lainnya}}, dan {{ui:Kurangi}}.

## Pindahkan, putar, skala

{{ui:Pindahkan}}, {{ui:Putar}}, dan {{ui:Skala}} dimulai dari penunjuk: gerakkan, lalu klik atau tekan {{key:Enter}} untuk meletakkan pilihan, atau {{key:Esc}} untuk membatalkan. {{key:X}}, {{key:Y}}, atau {{key:Z}} (atau tombol panah) mengunci satu sumbu. Ketik jarak, sudut, atau faktor untuk nilai yang tepat; [perhitungan](topic:value-box#calculations) juga berfungsi.

**Penyuntingan proporsional** ({{ui:Proporsional}}, atau di panel): verteks yang dekat dengan pilihan ikut bergerak, makin jauh makin sedikit, sampai jangkauan yang Anda atur, dengan falloff yang Anda pilih. Aktifkan **Hanya sepanjang mesh** untuk mengukur sepanjang tepi, bukan lurus.

{{ui:Geser}} memindahkan loop tepi yang dipilih sepanjang tepi di sebelahnya.

## Ubah bentuk

| Alat | Fungsinya |
|---|---|
| {{ui:Ekstrusi}} | Menarik muka yang dipilih keluar sepanjang normalnya, dengan muka sisi baru (atau membuat muka dari tepi batas yang terbuka). Ketik jaraknya |
| {{ui:Inset}} | Pita di dalam garis tepi muka yang dipilih; tekan {{key:I}} lagi untuk setiap muka sendiri |
| {{ui:Bevel}} | Memotong tepi yang dipilih (atau, {{key:Ctrl}}+{{key:Shift}}+{{key:B}}, verteks) dengan lebar tertentu; roda atau tombol plus dan minus menambah segmen untuk tepi membulat |
| {{ui:Potong loop}} | Arahkan ke tepi: loop baru melintang pada ring muka empat sisi; roda mengatur berapa banyak potongan; klik untuk memotong |
| {{ui:Pisau}} | Klik titik di tepi atau sudut; {{key:Enter}} memotong lurus melintasi muka di antaranya, seperti yang Anda lihat |
| {{ui:Belah}} | Gambar garis di layar: muka yang dipilih (atau semua) dipotong sepanjang garis itu |
| {{ui:Putar bertahap}} | Memutar muka yang dipilih atau tepi terbuka mengelilingi sumbu biru dalam langkah (roda mengatur langkahnya); satu putaran penuh akan menutup |
| {{ui:Subbagi}} | Memotong tepi yang dipilih menjadi dua; muka utuh menjadi grid |
| {{ui:Gabungkan}} | Verteks yang dipilih menjadi satu, di tengahnya |
| {{ui:Lebur}} | Mengeluarkan pilihan tetapi mempertahankan permukaan: muka bergabung |
| {{ui:Isi}} | Muka melintang di atas batas terbuka yang dipilih (atau di antara dua tepi terbuka) |
| {{ui:Isi kisi}} | Mengisi batas terbuka dengan jumlah tepi genap menggunakan grid quad |
| {{ui:Jembatan}} | Menghubungkan dua loop tepi terbuka yang dipilih dengan muka |
| {{ui:Lipatan}} | Seberapa tajam tepi yang dipilih tetap saat mesh dihaluskan oleh permukaan Subdivision: geser menjauh dari pusat, gunakan roda (langkah 0,1), atau ketik 0 sampai 1. Panel menampilkan lipatan tepi yang dipilih dan juga menerima nilai yang diketik. Tepi berlipat digambar magenta |
| {{ui:Balik}}, {{ui:Haluskan}}, {{ui:Hapus}} | Membalik muka; menghaluskan verteks ke arah tetangganya; menghapus sesuai mode pilih |

Setiap alat adalah satu langkah urungkan. Koordinat tekstur, warna, dan bobot ikut ke muka dan verteks baru.

## Buat ulang mesh

{{ui:Buat ulang mesh}} membuat ulang seluruh mesh sebagai segitiga yang merata dengan satu ukuran, yang diminta saat Anda menekannya (lebih kecil berarti lebih halus dan lebih lambat). Alat ini menutup lubang, menggabungkan bagian yang tumpang tindih, dan meratakan mesh yang teregang oleh sculpt. Tepi tajam menjadi sedikit membulat. UV, cat, dan lipatan dimulai dari awal. Satu langkah urungkan.

## Retopologi

Untuk membangun mesh baru yang lebih bersih di atas mesh yang detail (sculpt, hasil pemindaian), pilih mesh yang detail di bawah {{ui:Retopologi}} › **Bangun di atas** di panel, lalu:

- **Tempel titik yang dipindahkan ke permukaannya:** titik yang Anda pindahkan, dan tepi yang Anda ekstrusi, akan mendarat di permukaannya.
- **Tempel titik yang dipilih ke permukaannya** memindahkan titik yang dipilih ke permukaan itu sekarang (satu langkah urungkan).
- **Tampilkan tepi mesh ini di depan** menggambar mesh yang sedang Anda bangun di atas permukaan, sehingga Anda bisa melihatnya.

## Sesuaikan operasi terakhir

Setelah {{ui:Inset}}, {{ui:Bevel}}, {{ui:Potong loop}}, {{ui:Subbagi}}, {{ui:Haluskan}}, {{ui:Isi kisi}}, atau {{ui:Putar bertahap}}, panel menampilkan pengaturannya (lebar, segmen, profil, potongan, dan lainnya). Ubah satu dan operasi dikerjakan ulang dari titik awalnya, tetap sebagai satu langkah urungkan.

## Tombol

| | Tombol dorong/tarik | Tombol pemodel |
|---|---|---|
| Pindahkan, putar, skala | {{key:M}} {{key:Q}} {{key:S}} | {{key:G}} {{key:R}} {{key:S}} ({{key:G}} dua kali untuk geser) |
| Ekstrusi, inset | {{key:P}}, {{key:F}} | {{key:E}}, {{key:I}} |
| Hapus | {{key:E}} atau {{key:Delete}} | {{key:X}} atau {{key:Delete}} |
| Lipatan | {{key:Shift+C}} | {{key:Shift+E}} |
| Pilih semua, batalkan, balikkan pilihan | {{key:Ctrl+A}}, {{key:Esc}}, {{key:Ctrl+I}} | {{key:A}}, {{key:Alt+A}}, {{key:Ctrl+I}} |
| Keduanya | {{key:Ctrl+B}} bevel, {{key:Ctrl+R}} potong loop, {{key:K}} pisau | sama, dan {{key:F}} isi, {{key:M}} gabungkan, {{key:Ctrl+X}} lebur, {{key:L}} / {{key:Ctrl+L}} tertaut, {{key:Alt+N}} balik, {{key:O}} proporsional, {{key:Shift+V}} geser verteks |

Lihat juga [Mesh](topic:meshes), [Modifier pada mesh](topic:modifiers), dan [Belum dibuat](topic:not-built-yet).
