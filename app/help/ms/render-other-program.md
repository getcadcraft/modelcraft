---
title: Lukis imej dengan program lain
summary: Penjejak laluan kami sendiri melukis imej Render; program lain hanya boleh melukisnya melalui add-on enjin render dalam CadCraft Studio. Apa yang dibawa dan mengapa sesetengah program tidak pernah ditawarkan.
keywords: render, enjin, program luar, enjin add-on, studio, latar belakang, giliran, usd, gltf, dilukis oleh, blender, gpl
from: 150f94f1
---

Imej dalam {{ui:Render imej…}} dilukis oleh **enjin kami sendiri**: Pantas dan Penjejak laluan, dalam pelayar dan dalam CadCraft Studio. Program lain hanya boleh melukisnya apabila **add-on enjin render** membawanya masuk: lihat [Tambah enjin render dengan add-on](topic:render-engine-addons). Untuk membawa adegan ke program lain dan terus bekerja di sana, gunakan [Buka adegan dalam program lain](topic:render-open-in) atau [Hantar adegan ke enjin permainan](topic:render-unreal).

## Lukis imej dengan enjin add-on

1. Hidupkan add-on dalam Tetapan › Add-on. Enjinnya muncul dalam senarai Enjin bagi {{ui:Render imej…}}.
2. Pilih enjin itu. Tetapannya sendiri dipaparkan di bawah senarai Enjin.
3. Klik {{ui:Render}}. Dalam Studio, kali pertama add-on menjalankan program, Studio bertanya kepada anda dalam kotak dialognya sendiri. Kemajuan dipaparkan semasa ia melukis; {{ui:Henti}} menamatkannya. Imej dipaparkan ditanda dengan enjin yang melukisnya.

Enjin yang ditulis dalam JavaScript turut berjalan dalam pelayar. Enjin yang menjalankan program pada komputer ini hanya berjalan dalam Studio; dalam pelayar ia dipaparkan sebagai fail untuk disimpan.

## Apa yang dibawa

Enjin menerima **pakej**: model sebagai fail USD (dan fail glTF apabila ia memintanya), dan fail tetapan dengan nilai bahan yang tepat, matahari dan langit, setiap lampu yang dihidupkan dengan kuasa dan profil cahayanya, kamera dan pendedahan. Setiap program menyinari, menala warna dan mensampel dengan caranya sendiri, jadi imej serupa dari segi kamera, matahari, lampu dan pendedahan, bukan piksel demi piksel.

## Program yang CadCraft tidak sekali-kali jalankan

CadCraft tidak sekali-kali memulakan program di bawah lesen GNU GPL, dan tidak sekali-kali menyenaraikannya sebagai enjin atau sasaran Buka dalam. Blender ialah salah satunya, jadi ia tidak berada dalam senarai Enjin. Fail USD atau glTF yang disimpan dari {{ui:Render imej…}} masih boleh dibuka dalam Blender seperti dalam mana-mana program yang membaca fail tersebut.

:::note
Kamera panorama dan stereo serta gambar langit (warna langit digunakan sebaliknya) tidak dibawa ke program lain. Tiada apa yang dilakukan dalam program lain dikembalikan kepada model.
:::
