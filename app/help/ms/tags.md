---
title: Tag: tunjuk dan sembunyikan set benda
summary: Beri kumpulan dan komponen tag, seperti Perabot atau Dinding, dan sembunyikan atau tunjukkan semua yang mempunyai tag itu sekaligus.
keywords: tag, lapisan, tunjuk, sembunyi, keterlihatan, atur, perabot, dinding, tanpa tag, namakan semula tag, padam tag
from: c1a95a05
---

Tag ialah nama yang anda beri kepada kumpulan dan komponen, seperti **Perabot**, **Dinding** atau **Tapak**, supaya anda boleh menyembunyikan atau menunjukkan semua yang mempunyai tag itu sekaligus. Tag ialah apa yang dipanggil lapisan oleh program CAD. Untuk menyembunyikan satu benda pada satu masa, lihat [Sembunyikan, asingkan dan tunjukkan](topic:hide-isolate).

## Buat tag

1. Dalam {{ui:Tag}} di sebelah kanan, klik {{ui:Tambah tag}}.
2. Taip namanya dan tekan {{key:Enter}}.

Untuk menamakan semula tag, klik namanya dalam {{ui:Tag}}, taip yang baharu dan tekan {{key:Enter}}. Dua tag tidak boleh berkongsi nama.

## Tag kumpulan dan komponen

1. Pilih satu atau lebih kumpulan atau komponen.
2. Dalam {{ui:Maklumat entiti}}, pilih tag dalam {{ui:Tag}}. {{ui:Tag baharu…}} mencipta yang baharu dan menandakan pilihan dengannya.

{{ui:Tanpa tag}} mengeluarkan tag. Nombor di sebelah setiap tag dalam {{ui:Tag}} menunjukkan berapa banyak kumpulan dan komponen yang mempunyainya.

Tandakan kumpulan dan komponen, bukan muka dan tepi longgar: lukiskan benda yang hendak ditag sebagai kumpulan dahulu (pilihnya, kemudian {{key:Shift+G}}).

## Sembunyi dan tunjuk

Klik mata di sebelah tag. Semua yang mempunyai tag itu hilang dari paparan, di mana sahaja ia berada dalam model (juga di dalam kumpulan lain), dan klik serta snap melepasinya. Klik mata sekali lagi untuk menunjukkannya. Benda {{ui:Tanpa tag}} sentiasa ditunjukkan.

Jika anda sedang menyunting di dalam kumpulan yang tagnya anda sembunyikan, kumpulan itu akan ditutup.

## Padam tag

Klik tong sampah di sebelahnya. Apa sahaja yang mempunyai tag itu menjadi {{ui:Tanpa tag}}, dan ditunjukkan.

## Perkara yang perlu diketahui

- Tag, namanya dan yang mana tersembunyi disimpan dalam fail ModelCraft. Menyalin kumpulan bertag ke dalam model lain turut membawa tagnya.
- Menyembunyikan dan menunjukkan tag, dan setiap perubahan lain pada tag, ialah satu langkah buat asal.
- Eksport merangkumi semuanya, termasuk tag tersembunyi, sama seperti benda tersembunyi.
- Lapisan dalam pelan tapak DWG dan DXF belum diimport sebagai tag: keseluruhan lukisan diimport sebagai satu kumpulan.
