---
title: Tambah enjin render dengan add-on
summary: Apa yang boleh ditambah oleh add-on pada senarai Enjin kotak dialog Render, kebenaran yang diperlukan untuk menjalankan program, dan apa yang Studio semak serta tanya.
keywords: add-on, addon, enjin, enjin render, pembangun, engine.run, kebenaran, program, skrip, ditandatangani, studio, api
from: cd7a39ba
---

Add-on (Tetapan › Add-on) boleh menambah enjin pada senarai Enjin bagi {{ui:Render imej…}}. Teks penuh untuk pengarang add-on ialah seksyen 16 spesifikasi add-on; ringkasnya:

- Add-on mendaftarkan enjin dengan id yang bermula dengan id sendiri, satu nama, tetapan pilihan dan **sama ada** program untuk dijalankan **atau** fungsi dalam JavaScript yang melukis imej.
- Enjin yang menjalankan program memerlukan kebenaran **`engine.run`**, yang dipaparkan sebelum pemasangan dan dalam Tetapan. Ia hanya berjalan dalam Studio; dalam pelayar ia dipaparkan sebagai fail untuk disimpan.
- Add-on menamakan program (nama fail biasa: tidak sekali-kali shell), skrip yang **berada dalam add-on yang ditandatangani**, dan argumen yang terdiri daripada pemegang tempat dan perkataan biasa. Studio mencari program atau meminta anda menunjuknya sekali.
- Kali pertama add-on menjalankan program, **Studio bertanya kepada anda dalam kotak dialognya sendiri**: add-on mana, program mana, dan bahawa skrip boleh melakukan apa sahaja yang boleh dilakukan oleh program. Benarkan hanya untuk add-on yang anda percayai. Jawapan anda diingati untuk add-on dan program itu.
- Pakej (adegan sebagai USD dan fail tetapan, dengan fail glTF apabila add-on memintanya) dan skrip add-on dimasukkan ke dalam folder sementara yang baharu, program berjalan di situ, dan imej dikembalikan ditanda dengan nama enjin add-on.

:::note
Add-on hanya boleh menambah enjin render dari API add-on 1.4. Contoh kerja untuk enjin render baris arahan sumber terbuka terdapat dalam repositori sendirinya; ia belum dijalankan dalam enjin render itu lagi.
:::
