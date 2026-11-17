---
title: Tinjau model dengan headset VR
summary: Jelajahi model dalam ukuran penuh dengan headset VR, dengan melompat, berbalik, mengukur, memotong, menempatkan isu dengan gambar, melihatnya sebagai model di atas meja, dan bertemu yang lain dalam sesi langsung.
keywords: vr, realitas virtual, headset, webxr, xr, imersif, quest, oculus, vive, index, pico, berjalan melewati, walkthrough, teleport, tinjauan desain, tinjau, ukur, potongan, potong, isu, issue, issues, bcf, atas meja, model skala, kehadiran, avatar, langsung, bersama
from: fa2f591a
---

{{ui:Tinjau dalam VR}} menempatkan Anda di dalam model dengan headset VR, dalam ukuran penuh. Anda berdiri di tempat kamera tampilan berada, di lantai di bawahnya, menghadap arah yang sama. Tidak ada yang diunggah: headset menampilkan apa yang digambar peramban di komputer ini (atau di peramban bawaan headset).

## Yang Anda perlukan

- Headset yang dapat dijalankan peramban (WebXR): peramban bawaan headset mandiri, atau Chrome atau Edge di PC dengan headset terhubung.
- ModelCraft terbuka di halaman aman (https), seperti di situs ini.

Jika tidak ada headset, {{ui:Tinjau dalam VR}} berwarna abu-abu dan menyatakan alasannya.

## Memulai

1. Atur tampilan tempat Anda ingin memulai: di dalam ruangan, atau di luar melihat bangunan.
2. Klik {{ui:Tampilan}} di grup {{ui:Kamera}}, lalu {{ui:Tinjau dalam VR}}.
3. Pakai headset.

Menunya ada di punggung tangan kiri Anda. Arahkan ke sana dengan kontroler kanan dan tarik pelatuknya untuk memilih tombol. (Hanya dengan satu tangan, menu melayang di depan tempat Anda mulai.)

## Tampilannya

Headset menampilkan model dengan [gaya tampilan langsung](topic:live-view): tampilan dan material yang Anda berikan pada muka, langit dan matahari dari lokasi dan tanggal model Anda beserta bayangannya, lampu, tanaman dan batu yang tersebar, serta cahaya yang memantul dari dinding dan lantai (dihitung di komputer ini saat Anda melihat sekeliling, dan mengikuti Anda saat bergerak). Kecerahan dan transformasi tampilan (ACES atau AgX) sama dengan [Render gambar](topic:render). Seberapa banyak yang digambar bergantung pada apa yang dimiliki peramban headset, seperti di desktop; ambient occlusion, pantulan, dan bloom tetap di desktop.

## Bergerak

- **Lompat:** di {{ui:Pindahkan}}, arahkan ke lantai dan tarik pelatuknya; Anda mendarat di sana. Atau dorong tongkat ke depan untuk membidik, lalu lepaskan untuk melompat. Anda hanya dapat mendarat di lantai dan tanah (permukaan yang menghadap ke atas), tidak pernah di dinding.
- **Berbalik:** dorong tongkat ke kiri atau kanan: Anda berbalik 30° setiap kali.
- **Berjalan:** di area bermain Anda, cukup berjalan.

## Mengukur

Pilih {{ui:Ukur}}, lalu tarik pelatuk pada dua titik. Jarak ditampilkan di antara keduanya, dalam satuan model. Titik di dekat sudut akan menempel ke sudut.

## Potong untuk melihat ke dalam

Pilih {{ui:Potongan}} dan tarik pelatuk pada sebuah permukaan:

- pada dinding (atau apa pun yang bukan lantai): semua yang berada di antara Anda dan permukaan itu dipotong, sehingga Anda dapat melihat ke dalam. Ini paling baik dilakukan dari luar, atau melintasi ruangan;
- pada lantai, dari atas: denah dipotong 1.2 m di atas lantai itu, sehingga dinding menampilkan bagian bawahnya.

{{ui:Bersihkan}} menghapus potongan dan pengukuran. Jika bidang potong memotong model di tampilan saat Anda mulai, headset ikut memulainya.

## Menempatkan isu

Pilih {{ui:Isu}} dan tarik pelatuk di tempat masalahnya. Sebuah pin bernomor menandainya, dan ModelCraft menyimpan isu itu bersama gambar apa yang Anda lihat dan di mana Anda berdiri. Saat Anda keluar dari VR, isu-isu ada di daftar {{ui:Isu}} di sebelah kanan:

- tombol mata menampilkan isu dari tempat ia ditempatkan;
- {{ui:Simpan sebagai BCF}} mengunduh semuanya sebagai berkas BCF, yang dibuka oleh program tinjauan BIM (termasuk kamera dan gambar);
- isu juga disimpan dalam berkas `.modelcraft`.

Tambahkan komentar pada isu setelah Anda keluar dari VR, di program BCF: mengetik di headset belum dibuat.

## Melihatnya sebagai model di atas meja

{{ui:Di atas meja}} memperkecil model agar pas dengan meja di depan Anda; berjalanlah mengelilinginya, atau putar dengan tongkat. {{ui:Ukuran penuh}} mengembalikan Anda ke tempat semula.

## Bersama yang lain, secara langsung

Dalam [sesi langsung](topic:work-live), setiap orang di VR melihat yang lain sebagai kepala dan dua tangan dengan warnanya sendiri, beserta namanya, dan sebuah titik di tempat masing-masing menunjuk. Suntingan yang dibuat siapa pun sampai ke headset Anda dalam sekejap. Orang yang berada di meja belum ditampilkan di headset.

## Keluar

Pilih {{ui:Keluar dari VR}} (atau lepas headset dan akhiri di sana). Tampilan di layar berpindah ke tempat kepala Anda berada.

:::note
Diuji hanya dengan emulator headset, belum dengan headset sungguhan. Model besar dapat membuat headset tersendat: sembunyikan dulu yang tidak Anda perlukan ([sembunyikan dan isolasi](topic:hide-isolate)).
:::
