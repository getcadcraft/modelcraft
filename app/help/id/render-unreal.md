---
title: Kirim scene ke mesin game
summary: Studio dapat menulis scene ke dalam proyek Unreal Engine dan menjaganya tetap sinkron pada setiap pengiriman; suntingan Anda tersimpan di layer yang tidak pernah ditulis CadCraft. Plug-in yang membukanya belum dirilis.
keywords: unreal, unreal engine, mesin game, tautan, kirim, stage usd, proyek, live, kamera cine, antrean render film
from: 9a765cc2
---

Di CadCraft Studio, daftar Engine dapat menyimpan **tautan** ke proyek Unreal Engine. Hanya satu arah: dari CadCraft ke Unreal.

## Kirim scene

1. Pilih entri Unreal di daftar Engine. Pertama kali, Studio meminta Anda memilih folder proyek (yang berisi file `.uproject`); Studio akan mengingatnya.
2. Klik {{ui:Kirim}}. Studio menulis `CadCraft/<file name>/` di dalam proyek: scene sebagai file USD, file pengaturan, profil cahaya, dan dua file layer kecil.
3. Ubah model, simpan, lalu kirim lagi. Hanya scene dan file pengaturan yang diganti.

## Suntingan Anda aman

Stage yang dibuka Unreal adalah layer akar kecil yang dibuat sekali, dengan dua layer di bawahnya: **milik Anda** di atas (`<name>.user.usda`, kosong pada awalnya, tidak pernah ditulis ulang oleh CadCraft) dan scene CadCraft di bawahnya. Suntingan yang Anda simpan di layer sendiri tetap ada saat scene dikirim ulang. Lampu dan aktor lain yang Anda tempatkan di level Unreal berada di luar stage dan juga tidak tersentuh.

## Tanpa Studio

Di browser, atau di komputer tempat Studio tidak menemukan Unreal, pilih **Folder proyek Unreal (.zip)** di daftar Engine lalu klik {{ui:Render}}. Ini menyimpan folder yang sama sebagai zip: ekstrak ke dalam folder `CadCraft` di proyek Anda. Biarkan **Sertakan file stage** tercentang pada penyimpanan pertama; matikan untuk penyimpanan berikutnya, sehingga zip hanya berisi scene dan file pengaturan, dan layer Anda tidak pernah diganti.

:::note
Plug-in Unreal yang membuka stage, menerapkan matahari, lampu, kamera, dan eksposur, mengikuti setiap pengiriman, dan merender kamera **belum dirilis** dan belum pernah dijalankan di Unreal. Sampai itu siap, Kirim menaruh file di dalam proyek dan alat USD bawaan Unreal dapat membukanya. Windows adalah sistem pertama; macOS menyusul.
:::
