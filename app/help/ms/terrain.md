---
title: Rupa bumi: tanah daripada kontur, dan memahatnya
summary: Jadikan tanah daripada garisan kontur atau sebagai grid, kemudian naikkan dan turunkannya dengan berus lembut.
keywords: rupa bumi, tanah, landskap, topografi, kontur, garisan kontur, tapak, cerun, bukit, busut, kotak pasir, smoove, pahat, kecerunan, TIN
from: 407652b3
---

Rupa bumi ialah tanah yang diperbuat daripada segi tiga, jadi ia boleh mengikut sebarang bentuk. Ia ialah kumpulan: klik dua kali padanya untuk menyuntingnya.

## Daripada garisan kontur

1. Dapatkan garisan kontur pada ketinggiannya: lukiskannya, atau [import pelan tapak](topic:site-plan) dan alihkan setiap kontur ke aras sebenarnya.
2. Pilih garisan itu (semua tepi bagi semua kontur).
3. {{ui:Sunting}} › {{ui:Lagi}} › {{ui:Rupa bumi daripada kontur dipilih}}.

ModelCraft menyambungkan titik kontur dengan segi tiga (TIN), dan melembutkan setiap tepi di dalamnya supaya tanah berlorek dengan licin. Garisan itu sendiri kekal; padam atau sembunyikannya apabila tidak diperlukan lagi. Kontur yang sangat padat dikurangkan kepada 8 000 titik.

## Grid untuk dipahat

{{ui:Sunting}} › {{ui:Lagi}} › {{ui:Grid rupa bumi…}} meminta lebar, kedalaman dan saiz sel, kemudian meletakkan grid rata segi tiga di tempat anda klik bucunya. Sel kecil memahat lebih licin tetapi menghasilkan lebih banyak muka (paling banyak 200 × 200 sel).

## Pahat: naikkan dan turunkan tanah

1. Klik dua kali rupa bumi untuk membukanya.
2. {{ui:Sunting}} › {{ui:Lagi}} › {{ui:Pahat rupa bumi}}. Bulatan menunjukkan berus di atas tanah di bawah penuding.
3. Seret ke atas untuk menaikkan tanah di bawah berus, atau ke bawah untuk menurunkannya. Bahagian tengah bergerak paling banyak dan tanah beransur kepada sifar di tepi bulatan, jadi busut dan lekuk terhasil dengan licin.

Untuk menjadikan busut pada ketinggian yang tepat, klik sekali, kemudian taip ketinggian, contohnya `1.5m` (tanda tolak merendahkannya), dan tekan {{key:Enter}}. Untuk menukar berus, taip panjang sebelum anda klik: `5m` memberi berus dengan jejari 5 m.

Setiap pahatan ialah satu langkah buat asal.

## Perkara yang perlu diketahui

- Pahat hanya menggerakkan muka segi tiga, jadi setiap muka kekal rata. Muka yang dilukis dengan tangan (segi empat tepat, poligon) bukan rupa bumi: alat itu memaklumkannya.
- Pahatan menggerakkan titik terus ke atas dan ke bawah; ia tidak menambah titik. Untuk butiran yang lebih halus, buat grid dengan sel yang lebih kecil.
- Rupa bumi diekspor seperti kumpulan lain. Dalam IFC ia ialah proksi elemen bangunan, seperti semua benda lain.
