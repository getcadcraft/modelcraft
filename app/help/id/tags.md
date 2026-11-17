---
title: Tag: tampilkan dan sembunyikan sekumpulan benda
summary: Beri grup dan komponen sebuah tag, seperti Furnitur atau Dinding, lalu sembunyikan atau tampilkan semua yang memiliki tag itu sekaligus.
keywords: tag, layer, lapisan, tampilkan, sembunyikan, visibilitas, atur, furnitur, dinding, tanpa tag, ganti nama tag, hapus tag
from: c1a95a05
---

Tag adalah nama yang Anda beri pada grup dan komponen, seperti **Furnitur**, **Dinding** atau **Tapak**, sehingga Anda dapat menyembunyikan atau menampilkan semua yang memiliki tag itu sekaligus. Tag adalah yang disebut layer oleh program CAD. Untuk menyembunyikan satu benda sekaligus, lihat [Sembunyikan, isolasi, dan tampilkan kembali](topic:hide-isolate).

## Membuat tag

1. Di {{ui:Tag}} di sebelah kanan, klik {{ui:Tambah tag}}.
2. Ketik namanya dan tekan {{key:Enter}}.

Untuk mengganti nama tag, klik namanya di {{ui:Tag}}, ketik nama yang baru, dan tekan {{key:Enter}}. Dua tag tidak boleh memakai nama yang sama.

## Memberi tag pada grup dan komponen

1. Pilih satu atau lebih grup atau komponen.
2. Di {{ui:Info entitas}}, pilih tag di {{ui:Tag}}. {{ui:Tag baru…}} membuat tag baru dan memberi tag pada pilihan dengannya.

{{ui:Tanpa tag}} menghapus tag. Angka di samping setiap tag di {{ui:Tag}} menunjukkan berapa banyak grup dan komponen yang memilikinya.

Beri tag pada grup dan komponen, bukan pada muka dan tepi lepas: gambar dulu benda yang ingin diberi tag sebagai grup (pilih, lalu tekan {{key:Shift+G}}).

## Menyembunyikan dan menampilkan

Klik ikon mata di samping tag. Semua yang memiliki tag itu keluar dari pandangan, di mana pun letaknya dalam model (juga di dalam grup lain), dan klik serta snap melewatinya. Klik ikon mata lagi untuk menampilkannya. Benda {{ui:Tanpa tag}} selalu ditampilkan.

Jika Anda sedang menyunting di dalam grup yang tag-nya disembunyikan, grup itu akan tertutup.

## Menghapus tag

Klik ikon tempat sampah di sampingnya. Benda yang tadinya memiliki tag itu menjadi {{ui:Tanpa tag}}, dan ditampilkan.

## Hal yang perlu diketahui

- Tag, nama-namanya, dan tag mana yang tersembunyi disimpan dalam file ModelCraft. Menyalin grup yang diberi tag ke model lain juga membawa tagnya.
- Menyembunyikan dan menampilkan tag, dan setiap perubahan lain pada tag, adalah satu langkah urungkan.
- Ekspor menyertakan semuanya, termasuk tag yang tersembunyi, sama seperti benda yang tersembunyi.
- Layer dalam denah tapak DWG dan DXF belum masuk sebagai tag: seluruh gambar masuk sebagai satu grup.
