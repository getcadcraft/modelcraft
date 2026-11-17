---
title: Simpan, buka, dan ekspor USD
summary: Simpan seluruh model sebagai USD (.usda, .usdc, atau .usdz) tanpa kehilangan apa pun, buka lagi, dan impor scene USD dari program 3D lain.
keywords: usd, usda, usdc, usdz, openusd, universal scene description, simpan sebagai, ekspor, impor, perakitan scene, archviz, openpbr, materialx, paket
from: 73d299f9
---

USD adalah format scene yang digunakan bersama oleh banyak program 3D, rendering, dan archviz. ModelCraft menulis dan membacanya. `.modelcraft` tetap menjadi format yang ditulis {{ui:Simpan}}; USD adalah pilihan di {{ui:Simpan sebagai}}.

## Simpan sebagai USD

1. Pilih {{ui:Simpan sebagai}} di grup {{ui:File}} (atau tekan {{key:Mod+Shift+S}}).
2. Pilih formatnya: {{ui:Teks (.usda)}} (dapat dibaca, baik untuk kontrol versi), {{ui:Biner (.usdc)}} (paling kecil dan paling cepat), atau {{ui:Paket (.usdz)}} (satu file dengan tekstur di dalamnya).
3. File diunduh (di aplikasi desktop, Anda memilih ke mana file disimpan).

Pilihan yang sama ada di {{ui:Ekspor}} › {{ui:USD (.usda, .usdc, .usdz)…}}.

## Tidak ada yang hilang

Buka file USD yang disimpan ModelCraft dan Anda mendapatkan model kembali persis: muka dengan lubangnya, tepi lembut dan tersembunyi, kurva, grup dan komponen, tag, scene, dimensi, panduan, bidang potong, lampu, tekstur impor, dan tampilannya. Program lain melihat model yang sama sebagai mesh, grup, prototipe untuk komponen, material, lampu, dan kamera.

:::note
Jika program lain mengubah geometri grup atau komponen, ModelCraft membuka bagian itu sebagai mesh dengan perubahannya tetap ada, dan memberi tahu berapa banyak bagian yang dibaca dengan cara itu. Penempatan yang dipindahkan atau dihapus di program lain tetap dipindahkan atau dihapus.
:::

## Buka atau impor USD milik orang lain

- {{ui:Buka}} file `.usd`, `.usda`, `.usdc`, atau `.usdz` untuk memulai model darinya.
- {{ui:Impor}} satu file untuk menambahkannya ke model yang terbuka. Seret file yang dirujuknya (layer lain, tekstur) bersama file itu.

Mesh masuk dengan normal, koordinat UV, dan warnanya; geometri bersama masuk sebagai komponen; material sebagai warna cat; lampu sebagai lampu; dan kamera sebagai scene. Semuanya dalam meter dengan Z ke atas, apa pun satuan dan sumbu atas file tersebut.

## Belum tersedia

Animasi, kerangka, dan grafik node MaterialX belum dibaca atau ditulis sebagai USD. Animasi dan material node milik ModelCraft disimpan dalam file USD yang disimpannya, agar ModelCraft dapat membukanya lagi, tetapi program lain tidak melihatnya. Layer yang dirujuk sebuah file dan tidak dapat dibaca ModelCraft (misalnya dokumen MaterialX) dibiarkan keluar dengan catatan.
