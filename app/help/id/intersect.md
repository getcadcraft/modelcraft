---
title: Potongkan muka
summary: Gambar garis tempat muka saling menembus, sehingga Anda bisa mendorong, menghapus, atau mewarnai potongannya.
keywords: potong, potongkan muka, potongkan dengan model, potongkan dengan pilihan, potong, bukaan, lubang, gabung, garis tempat muka berpotongan, boolean
from: 6bc58526
---

Saat satu bentuk menembus bentuk lain, ModelCraft tidak menggambar garis tempat muka mereka bertemu: keduanya hanya tumpang tindih. **Potongkan** menggambar garis-garis itu, sebagai tepi, sehingga muka terbagi di sana. Lalu Anda bisa mendorong/menarik, menghapus, atau mewarnai potongannya.

Kedua perintah ada di {{ui:Edit}} › {{ui:More}}.

## Potongkan dengan model

Memotong apa yang Anda pilih terhadap **setiap muka di layar**.

Misalnya, sebuah balok (grup) menembus dinding (grup lain), dan Anda ingin bukaan di dinding:

1. Klik dua kali dinding untuk membukanya, lalu pilih semua mukanya ({{key:Ctrl+A}}).
2. {{ui:Edit}} › {{ui:More}} › {{ui:Intersect with model}}.

Garis luar balok digambar pada kedua muka dinding, sebagai dua muka baru. Dorong salah satunya menembus dinding untuk membuat bukaan, lalu tutup dindingnya.

## Potongkan dengan pilihan

Memotong muka, grup, dan komponen yang dipilih **hanya terhadap satu sama lain**. Pilih setidaknya dua.

## Ke mana garisnya

Garis selalu digambar dalam **konteks terbuka**: di dalam model saat tidak ada grup yang terbuka, atau di dalam grup yang sedang Anda sunting. Grup dan komponen yang tidak terbuka tidak diubah. Jadi untuk memotong muka sebuah grup, bukalah grup itu terlebih dahulu, seperti pada contoh di atas.

## Hal yang perlu diketahui

- Muka yang berada pada bidang yang sama tidak dipotong.
- Garis yang menutup loop pada sebuah muka membuat muka baru, seperti halnya garis yang digambar.
- Setiap potongan adalah satu langkah urungkan. Jika tidak ada yang berpotongan, tidak ada yang berubah.
- Untuk bentuk tertutup, [alat solid](topic:solids) (Union, Subtract) menyelesaikan seluruh pekerjaan dalam satu langkah.
