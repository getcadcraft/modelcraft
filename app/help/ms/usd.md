---
title: Simpan, buka dan eksport USD
summary: Simpan keseluruhan model sebagai USD (.usda, .usdc atau .usdz) tanpa kehilangan apa-apa, buka semula, dan import adegan USD dari program 3D lain.
keywords: usd, usda, usdc, usdz, openusd, universal scene description, simpan sebagai, eksport, import, pemasangan adegan, visualisasi seni bina, openpbr, materialx, pakej
from: 73d299f9
---

USD ialah format adegan yang dikongsi oleh banyak program 3D, pemaparan dan visualisasi seni bina. ModelCraft menulis dan membacanya. `.modelcraft` kekal sebagai format yang ditulis oleh {{ui:Simpan}}; USD ialah satu pilihan dalam {{ui:Simpan sebagai}}.

## Simpan sebagai USD

1. Pilih {{ui:Simpan sebagai}} dalam kumpulan {{ui:Fail}} (atau tekan {{key:Mod+Shift+S}}).
2. Pilih format: {{ui:Teks (.usda)}} (boleh dibaca, sesuai untuk kawalan versi), {{ui:Binari (.usdc)}} (paling kecil dan paling pantas) atau {{ui:Pakej (.usdz)}} (satu fail dengan tekstur di dalamnya).
3. Fail dimuat turun (dalam aplikasi desktop, anda memilih tempat ia disimpan).

Pilihan yang sama terdapat dalam {{ui:Eksport}} › {{ui:USD (.usda, .usdc, .usdz)…}}.

## Tiada yang hilang

Buka fail USD yang ModelCraft simpan dan anda mendapat semula model itu dengan tepat: muka dengan lubangnya, tepi lembut dan tersembunyi, lengkung, kumpulan dan komponen, tag, adegan, dimensi, garis panduan, satah keratan, lampu, tekstur yang diimport dan pandangan. Program lain melihat model yang sama sebagai mesh, kumpulan, prototaip untuk komponen, bahan, lampu dan kamera.

:::note
Jika program lain menukar geometri kumpulan atau komponen, ModelCraft membuka bahagian itu sebagai mesh dengan perubahan dikekalkan, dan memaklumkan berapa banyak bahagian yang dibaca dengan cara itu. Peletakan yang dialih atau dipadam dalam program lain kekal begitu.
:::

## Buka atau import USD orang lain

- {{ui:Buka}} fail `.usd`, `.usda`, `.usdc` atau `.usdz` untuk memulakan model daripadanya.
- {{ui:Import}} satu untuk menambahnya ke model yang terbuka. Lepaskan fail yang dirujuknya (lapisan lain, tekstur) bersamanya.

Mesh diimport dengan normal, koordinat UV dan warnanya, geometri dikongsi sebagai komponen, bahan sebagai warna cat, lampu sebagai lampu dan kamera sebagai adegan, dalam meter dengan Z ke atas tanpa mengira unit dan paksi atas fail.

## Belum lagi

Animasi, rangka dan graf nod MaterialX belum dibaca atau ditulis sebagai USD. Animasi dan bahan nod ModelCraft sendiri dikekalkan dalam fail USD yang ia simpan, untuk ModelCraft buka semula, tetapi program lain tidak melihatnya. Lapisan yang dirujuk oleh fail yang tidak dapat dibaca ModelCraft (contohnya dokumen MaterialX) ditinggalkan dengan nota.
