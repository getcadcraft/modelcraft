---
title: Sunting jejaring dalam ruang kerja Jejaring
summary: Pilih bucu, tepi dan muka jejaring, alihkannya, dan ekstrud, inset, bevel, potong, gabung, isi serta jejantas, dengan mana-mana gaya kekunci.
keywords: jejaring, mod sunting, ruang kerja jejaring, bucu, tepi, muka, ekstrud, inset, bevel, potong gelung, pisau, bahagi dua, pusing, gabung, larutkan, isi, isi grid, jejantas, subbahagi, luncur, sunting berkadar, falloff, ruang kerja
from: 92a372dd
---

Ruang kerja **Jejaring** menyunting [jejaring](topic:meshes) titik demi titik: bucu, tepi dan mukanya. Geometri tolak/tarik kekal dalam ruang kerja **Model**.

## Buka

- Pilih {{ui:Jejaring}} dalam senarai {{ui:Ruang kerja}} di sebelah kiri bar alat. Jejaring yang dipilih dibuka untuk disunting; kumpulan atau komponen yang dipilih ditukar kepada jejaring dahulu (satu langkah buat asal).
- Atau klik dua kali jejaring, atau, dengan kekunci pemodel, pilihnya dan tekan {{key:Tab}}.
- Tanpa apa-apa dipilih, panel menawarkan jejaring untuk ditambah: satah, grid, kubus, bulatan, silinder, kon, sfera, ico sfera dan torus. Yang baharu diletakkan ke arah pandangan dan dibuka untuk disunting.

{{ui:Kembali ke Model}} (atau senarai, {{key:Tab}} dengan kekunci pemodel, {{key:Esc}} apabila tiada apa dipilih dengan kekunci tolak/tarik) kembali ke Model dengan jejaring dipilih. Semasa ruang kerja Jejaring dibuka, bahagian lain model dipudarkan dan alat lukisan Model disimpan.

## Pilih

| Lakukan | Untuk |
| --- | --- |
| {{key:1}} {{key:2}} {{key:3}} | Pilih bucu, tepi atau muka |
| Klik | Pilih satu; {{key:Shift}}+klik menambah atau mengalih keluar |
| Seret kotak | Pilih apa yang berada di dalam dan kelihatan; {{key:Shift}} menambah, {{key:Ctrl}} mengalih keluar |
| {{key:Alt}}+klik tepi, atau klik dua kali padanya | Gelung tepinya (gelung muka dalam mod muka; keseluruhan sempadan pada tepi terbuka) |
| {{key:Ctrl}}+{{key:Alt}}+klik tepi | Cincin tepinya |
| Klik tiga kali | Semua yang bercantum dengannya |

Kumpulan {{ui:Pilih}} juga mempunyai {{ui:Semua}}, {{ui:Berkaitan}}, {{ui:Gelung}}, {{ui:Cincin}}, {{ui:Lagi}} dan {{ui:Kurang}}.

## Alih, pusing, skala

{{ui:Alih}}, {{ui:Putar}} dan {{ui:Skala}} bermula dari penunjuk: alihkannya, kemudian klik atau tekan {{key:Enter}} untuk meletakkan pilihan, atau {{key:Esc}} untuk membatalkan. {{key:X}}, {{key:Y}} atau {{key:Z}} (atau kekunci anak panah) mengunci satu paksi. Taip jarak, sudut atau faktor untuk nilai yang tepat — [pengiraan](topic:value-box#calculations) juga berfungsi.

**Sunting berkadar** ({{ui:Berkadar}}, atau panel): bucu berdekatan pilihan mengikut alihan, kurang semakin jauh, sehingga jarak capaian yang anda tetapkan, dengan falloff yang anda pilih. Hidupkan {{ui:Hanya sepanjang jejaring}} untuk mengukur sepanjang tepi dan bukannya lurus.

{{ui:Luncur}} mengalihkan gelung tepi yang dipilih sepanjang tepi di sebelahnya.

## Ubah bentuk

| Alat | Fungsinya |
| --- | --- |
| {{ui:Ekstrud}} | Menarik muka yang dipilih keluar sepanjang normalnya, dengan muka sisi baharu (atau membentuk muka daripada tepi sempadan terbuka). Taip jarak |
| {{ui:Inset}} | Jalur di dalam garis luar muka yang dipilih; tekan {{key:I}} sekali lagi untuk setiap muka secara berasingan |
| {{ui:Bevel}} | Memotong tepi yang dipilih (atau, {{key:Ctrl}}+{{key:Shift}}+{{key:B}}, bucu) pada lebar tertentu; roda atau kekunci tambah dan tolak menambah segmen untuk tepi membulat |
| {{ui:Potong gelung}} | Tunjuk pada tepi: gelung baharu merentasi cincin muka empat sisi; roda menetapkan bilangannya; klik untuk memotong |
| {{ui:Pisau}} | Klik titik pada tepi atau sudut; {{key:Enter}} memotong lurus merentasi muka di antaranya, seperti yang anda lihat |
| {{ui:Bahagi dua}} | Lukis garis pada skrin: muka yang dipilih (atau semua) dipotong sepanjangnya |
| {{ui:Pusing}} | Memusingkan muka yang dipilih atau tepi terbuka sekitar paksi biru dalam langkah (roda menetapkannya); pusingan penuh menutupnya |
| {{ui:Bahagikan}} | Memotong tepi yang dipilih kepada dua; muka keseluruhan menjadi grid |
| {{ui:Gabung}} | Bucu yang dipilih menjadi satu, di tengahnya |
| {{ui:Larutkan}} | Mengeluarkan pilihan tetapi mengekalkan permukaan: muka bercantum |
| {{ui:Isi}} | Muka merentasi sempadan terbuka yang dipilih (atau antara dua tepi terbuka) |
| {{ui:Isi grid}} | Mengisi sempadan terbuka dengan bilangan tepi genap menggunakan grid quad |
| {{ui:Jejantas}} | Mencantumkan dua gelung tepi terbuka yang dipilih dengan muka |
| {{ui:Lipatan}} | Betapa tajam tepi yang dipilih kekal apabila jejaring dilicinkan oleh permukaan subbahagian: alihkan dari pusat, guna roda (langkah 0.1) atau taip 0 hingga 1. Panel menunjukkan lipatan tepi yang dipilih dan turut menerima nilai yang ditaip. Tepi berlipat dilukis dalam magenta |
| {{ui:Balikkan}}, {{ui:Licinkan}}, {{ui:Padam}} | Balikkan muka; licinkan bucu ke arah jirannya; padam mengikut mod pilih |

Setiap satu ialah satu langkah buat asal. Koordinat tekstur, warna dan berat mengikut ke muka dan bucu baharu.

## Remesh

{{ui:Remesh}} membuat semula keseluruhan jejaring sebagai segi tiga sama saiz, diminta apabila anda menekannya (lebih kecil lebih halus dan lebih perlahan). Ia menutup lubang, mencantumkan kepingan yang bertindih, dan meratakan jejaring yang diregangkan oleh ukiran. Tepi tajam menjadi sedikit membulat. UV, cat dan lipatan dimulakan semula. Satu langkah buat asal.

## Retopologi

Untuk membina jejaring baharu yang lebih kemas di atas yang terperinci (ukiran, imbasan), pilih yang terperinci di bawah {{ui:Retopologi}} › **Bina di atas** dalam panel, kemudian:

- **Snap titik yang dialih ke atasnya:** titik yang anda alihkan, dan tepi yang anda ekstrud, mendarat pada permukaannya.
- **Letakkan titik yang dipilih di atasnya** mengalihkan titik yang dipilih ke atasnya sekarang (satu langkah buat asal).
- **Tunjukkan tepi jejaring ini di hadapan** melukis jejaring yang sedang anda bina di atas permukaan, supaya anda dapat melihatnya.

## Laras operasi terakhir

Selepas {{ui:Inset}}, {{ui:Bevel}}, {{ui:Potong gelung}}, {{ui:Bahagikan}}, {{ui:Licinkan}}, {{ui:Isi grid}} atau {{ui:Pusing}}, panel menunjukkan tetapannya (lebar, segmen, profil, potongan …). Tukar satu dan operasi dibuat semula dari tempat ia bermula, masih satu langkah buat asal.

## Kekunci

| | Kekunci tolak/tarik | Kekunci pemodel |
| --- | --- | --- |
| Alih, pusing, skala | {{key:M}} {{key:Q}} {{key:S}} | {{key:G}} {{key:R}} {{key:S}} ({{key:G}} dua kali untuk meluncur) |
| Ekstrud, inset | {{key:P}}, {{key:F}} | {{key:E}}, {{key:I}} |
| Padam | {{key:E}} atau {{key:Delete}} | {{key:X}} atau {{key:Delete}} |
| Lipatan | {{key:Shift+C}} | {{key:Shift+E}} |
| Pilih semua, tiada, songsang | {{key:Ctrl+A}}, {{key:Esc}}, {{key:Ctrl+I}} | {{key:A}}, {{key:Alt+A}}, {{key:Ctrl+I}} |
| Kedua-duanya | {{key:Ctrl+B}} bevel, {{key:Ctrl+R}} potong gelung, {{key:K}} pisau | sama, dan {{key:F}} isi, {{key:M}} gabung, {{key:Ctrl+X}} larutkan, {{key:L}} / {{key:Ctrl+L}} berkaitan, {{key:Alt+N}} balikkan, {{key:O}} berkadar, {{key:Shift+V}} luncur bucu |

Lihat juga [Jejaring](topic:meshes), [Pengubah suai pada jejaring](topic:modifiers) dan [Belum dibina](topic:not-built-yet).
