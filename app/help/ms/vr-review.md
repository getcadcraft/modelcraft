---
title: Semak model dalam set kepala VR
summary: Berjalan dalam model pada saiz penuh dengan set kepala VR: melompat, berpusing, mengukur, memotongnya, meletakkan isu dengan gambar, lihat sebagai model atas meja, dan jumpa orang lain dalam sesi langsung.
keywords: vr, realiti maya, set kepala, webxr, xr, imersif, quest, oculus, vive, index, pico, berjalan melalui, panduan, teleport, semakan reka bentuk, semak, ukur, bahagian, potong, isu, issue, isu, issues, bcf, atas meja, model skala, kehadiran, avatar, langsung, bersama
from: fa2f591a
---

{{ui:Semak dalam VR}} meletakkan anda di dalam model dengan set kepala VR, pada saiz penuh. Anda berdiri di tempat kamera paparan berada, di atas lantai di bawahnya, menghadap arah yang sama. Tiada apa yang dimuat naik: set kepala menunjukkan apa yang dilukis oleh pelayar di komputer ini (atau dalam pelayar set kepala itu sendiri).

## Apa yang anda perlukan

- Set kepala yang boleh dipandu oleh pelayar (WebXR): pelayar set kepala berdiri sendiri, atau Chrome atau Edge pada PC dengan set kepala disambungkan.
- ModelCraft dibuka pada halaman selamat (https), seperti yang ada di laman ini.

Apabila tiada set kepala, {{ui:Semak dalam VR}} dimalapkan dan menyatakan sebabnya.

## Mula

1. Tetapkan paparan di tempat anda mahu mula: dalam bilik, atau di luar melihat bangunan.
2. Klik {{ui:Pandangan}} dalam kumpulan {{ui:Kamera}}, kemudian {{ui:Semak dalam VR}}.
3. Pakai set kepala.

Menu berada di belakang tangan kiri anda. Tuding kepadanya dengan alat kawalan kanan dan tarik picu untuk memilih butang. (Dengan satu tangan sahaja, menu terapung di hadapan tempat anda bermula.)

## Rupanya

Set kepala menunjukkan model dalam rupa [paparan langsung](topic:live-view): rupa dan bahan yang anda berikan kepada muka, langit dan matahari dari tempat serta tarikh model anda beserta bayangannya, lampu, tumbuhan dan batu yang bertaburan, dan cahaya yang dipantulkan dari dinding dan lantai (dikira pada komputer ini semasa anda melihat sekeliling, dan mengikut anda semasa anda bergerak). Kecerahan dan transformasi paparan (ACES atau AgX) ialah yang digunakan dalam [Render gambar](topic:render). Berapa banyak yang dilukis bergantung pada apa yang dimiliki pelayar set kepala, sama seperti di desktop; oklusi ambien, pantulan dan bloom kekal di desktop.

## Bergerak

- **Lompat:** dalam {{ui:Alih}}, tuding ke lantai dan tarik picu; anda mendarat di situ. Atau tolak batang ke hadapan untuk menyasar, dan lepaskan untuk melompat. Anda hanya boleh mendarat di lantai dan tanah (permukaan yang menghadap ke atas), tidak pernah di dinding.
- **Pusing:** tolak batang ke kiri atau kanan: anda berpusing 30° setiap kali.
- **Berjalan:** dalam kawasan permainan anda, cuma berjalan.

## Ukur

Pilih {{ui:Ukur}}, kemudian tarik picu pada dua titik. Jarak dipaparkan di antaranya, dalam unit model. Titik berhampiran sudut melekat ke sudut itu.

## Potong terbuka

Pilih {{ui:Bahagian}} dan tarik picu pada satu permukaan:

- pada dinding (atau apa-apa yang bukan lantai): semua yang berada antara anda dan permukaan itu dipotong, supaya anda dapat melihat ke dalam. Ini paling baik dari luar, atau merentasi bilik;
- pada lantai, dari atas: potongan pelan 1.2 m di atas lantai itu, supaya dinding menunjukkan bahagian bawahnya.

{{ui:Kosongkan}} membuang potongan dan ukuran. Jika satah keratan memotong model dalam paparan semasa anda bermula, set kepala bermula dengannya.

## Letak isu

Pilih {{ui:Isu}} dan tarik picu di tempat masalahnya. Pin bernombor menandakannya, dan ModelCraft menyimpan isu itu bersama gambar apa yang anda lihat serta di mana anda berdiri. Apabila anda keluar dari VR, isu berada dalam senarai {{ui:Isu}} di sebelah kanan:

- butang mata menunjukkan isu dari tempat ia diletakkan;
- {{ui:Simpan sebagai BCF}} memuat turun semuanya sebagai fail BCF, yang dibuka oleh program semakan BIM (kamera dan gambar disertakan);
- ia juga disimpan dalam fail `.modelcraft`.

Tambah ulasan kepada isu selepas anda keluar dari VR, dalam program BCF: menaip dalam set kepala belum dibina.

## Lihat sebagai model atas meja

{{ui:Atas meja}} mengecilkan model supaya muat di atas meja di hadapan anda; berjalanlah mengelilinginya, atau pusingkannya dengan batang. {{ui:Saiz penuh}} meletakkan anda kembali ke tempat anda tadi.

## Bersama orang lain, secara langsung

Dalam [sesi langsung](topic:work-live), semua orang dalam VR nampak yang lain sebagai sebuah kepala dan dua tangan dalam warna mereka sendiri, dengan nama mereka, dan titik di tempat setiap seorang menuding. Suntingan sesiapa pun sampai ke set kepala anda dalam sekejap. Orang yang berada di meja belum ditunjukkan dalam set kepala.

## Keluar

Pilih {{ui:Keluar VR}} (atau tanggalkan set kepala dan tamatkannya di situ). Paparan pada skrin beralih ke tempat kepala anda berada.

:::note
Diuji hanya dengan emulator set kepala, belum dengan set kepala sebenar. Model besar boleh menyebabkan set kepala tersentak-sentak: sembunyikan dahulu apa yang tidak diperlukan ([sembunyi dan asingkan](topic:hide-isolate)).
:::
