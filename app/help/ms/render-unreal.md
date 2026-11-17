---
title: Hantar adegan ke enjin permainan
summary: Studio boleh menulis adegan ke dalam projek Unreal Engine dan mengekalkannya sejajar setiap kali dihantar; suntingan anda sendiri disimpan dalam lapisan yang tidak pernah ditulis oleh CadCraft. Plug-in yang membukanya belum dikeluarkan.
keywords: unreal, unreal engine, enjin permainan, pautan, hantar, usd stage, projek, live, cine camera, movie render queue
from: 9a765cc2
---

Dalam CadCraft Studio, senarai Engine boleh menyimpan **pautan** ke projek Unreal Engine. Satu hala sahaja: dari CadCraft ke Unreal.

## Hantar adegan

1. Pilih entri Unreal dalam senarai Engine. Kali pertama, Studio meminta anda memilih folder projek anda (folder yang mengandungi fail `.uproject`); ia akan mengingatinya.
2. Klik {{ui:Hantar}}. Studio menulis `CadCraft/<nama fail>/` di dalam projek: adegan sebagai fail USD, fail tetapan, profil cahaya dan dua fail lapisan kecil.
3. Ubah model, simpan dan hantar semula. Hanya adegan dan fail tetapan yang digantikan.

## Suntingan anda selamat

Stage yang dibuka Unreal ialah lapisan akar kecil yang dibuat sekali, dengan dua lapisan di bawahnya: **milik anda** di atas (`<name>.user.usda`, kosong pada mulanya, tidak pernah ditulis semula oleh CadCraft) dan adegan CadCraft di bawah. Suntingan yang anda simpan dalam lapisan anda sendiri kekal apabila adegan dihantar semula. Lampu dan aktor lain yang anda letakkan dalam tahap Unreal berada di luar stage dan juga tidak akan disentuh.

## Tanpa Studio

Dalam pelayar, atau pada komputer yang Studio tidak dapat mengesan Unreal, pilih **Folder projek Unreal (.zip)** dalam senarai Engine dan klik {{ui:Render}}. Ia menyimpan folder yang sama sebagai zip: nyahzipkan ke dalam folder `CadCraft` projek anda. Biarkan **Sertakan fail stage** dihidupkan pada kali pertama; matikannya untuk simpanan seterusnya, supaya zip hanya mengandungi adegan dan fail tetapan, dan lapisan anda sendiri tidak pernah digantikan.

:::note
Plug-in Unreal yang membuka stage, menggunakan matahari, lampu, kamera dan pendedahan, mengikuti setiap hantaran dan merender kamera **belum dikeluarkan** dan belum dijalankan dalam Unreal. Sehingga itu, Hantar meletakkan fail dalam projek dan alat USD Unreal sendiri boleh membukanya. Windows ialah sistem pertama; macOS menyusul.
:::
