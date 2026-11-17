---
title: Tetapan ModelCraft
summary: Pilih gaya kekunci yang anda tahu, jadikan pad sentuh orbit dan pan tanpa butang kamera, dan hidupkan atau matikan snap dan perlanggaran pepejal.
keywords: tetapan, keutamaan, kawalan, gaya kekunci, keymap, pintasan, blender, pad sentuh, touchpad, skrol, orbit, cubit, snap, snapping, langgar, perlanggaran, bertindih, persilang, tembus
from: caf77d5b
---

Buka {{ui:Tetapan}} dengan ikon gear di bar aplikasi atau {{key:Mod+,}}. Tab pertama, {{ui:ModelCraft}}, memegang tetapan yang tergolong dalam aplikasi ini; {{ui:Umum}} memegang tetapan yang dikongsi oleh setiap aplikasi CadCraft (tema, bar alat, panel). Tetapan ModelCraft hanya wujud dalam aplikasi: anda menukarnya di sini, dan pelayar ini mengingatinya.

## Kawalan: kekunci dan butang tetikus

Dua gaya kekunci. Tukar di sini, dengan {{ui:Kekunci: Tolak/tarik}} / {{ui:Kekunci: Pemodel}} di bahagian bawah kanan pandangan, atau di hujung menu {{ui:Lagi}} bar alat:

- **Gaya tolak-tarik** (permulaan; huruf pemodel tolak-tarik seperti SketchUp): huruf memilih alat: {{key:L}} garisan, {{key:R}} segi empat tepat, {{key:P}} tolak/tarik, {{key:M}} alih, {{key:Q}} putar, {{key:S}} skala, {{key:G}} jadikan komponen. Lihat [Kekunci dan tindakan tetikus](topic:keyboard).
- **Gaya pemodel** (kekunci pemodel mesh seperti Blender): pilih dahulu, kemudian bertindak ke atas pilihan itu serta-merta. {{key:G}} mengalihkannya, {{key:R}} memutarnya dan {{key:S}} menskalakannya dari tempat penunjuk berada — tiada klik pertama. Semasa ia dialih, {{key:X}}, {{key:Y}} atau {{key:Z}} mengunci paksi merah, hijau atau biru, nombor yang ditaip menetapkan jarak (atau darjah, atau faktor), dan klik atau {{key:Enter}} meletakkannya; {{key:Esc}} atau klik kanan mengembalikannya. Kemudian anda kembali kepada {{ui:Pilih}}.

Gaya kekunci sama dengan pilihan gaya menu: gaya kekunci Pemodel ialah gaya menu {{ui:Pemodel}}, dan memilih satu memilih yang satu lagi. Lihat [Menu, kekunci dan tetikus](topic:menus-keys-and-mouse). Senarai Pemodel yang lengkap ada dalam [Kekunci dan tindakan tetikus](topic:keyboard#modeler-keys). Tip pada bar alat dan kad permulaan mengikut gaya yang anda pilih.

## Skrol: roda tetikus atau pad sentuh

- **Kira sendiri** (permulaan): ModelCraft memerhatikan skrol. Skrol sisi atau halus, seperti yang dihantar oleh pad sentuh, mengorbit; takuk roda penuh men-zum.
- **Roda tetikus**: skrol sentiasa men-zum ke arah penunjuk.
- **Pad sentuh**: leret dengan dua jari untuk mengorbit, tahan {{key:Shift}} dan leret untuk pan, cubit untuk zum. Anda tidak perlu butang {{ui:Orbit}}, {{ui:Pan}} atau {{ui:Zum}} langsung.

Cubitan men-zum dalam setiap pilihan. Jika "Kira sendiri" meneka salah untuk tetikus atau pad sentuh anda, pilih yang anda ada.

:::tip
Dalam gaya Pemodel anda juga boleh mengorbit dengan menahan {{key:Alt}} dan menyeret, dan pan dengan {{key:Alt+Shift}} dan seretan — berguna pada komputer riba tanpa butang tengah.
:::

## Snap

**Snap ke titik, tepi dan paksi** (hidup pada permulaan) menarik penunjuk ke hujung, titik tengah, tepi, garis panduan dan paksi merah, hijau dan biru — lihat [Inferens](topic:inference). Matikannya apabila anda mahu meletakkan sesuatu secara bebas berhampiran geometri lain tanpa ia melompat. Muka, tanah dan kunci paksi masih berfungsi dengan snap dimatikan.

Butang {{ui:Snap}} di bahagian bawah kanan pandangan melakukan perkara yang sama untuk kerja sesi ini (ia juga disimpan). Dalam gaya Pemodel, {{key:Shift+Tab}} menukarnya.

## Pepejal berhenti di tempat bersentuh

**Hentikan pepejal di tempat bersentuh** (hidup pada permulaan) mengelakkan dinding daripada diseret melalui dinding lain. Dengan {{ui:Alih}} (dan {{key:G}}, dan tampal-kemudian-alih dengan {{key:Mod+D}}) pilihan itu tergelincir ke pepejal lain dan berhenti bersentuh dengannya; dengan {{ui:Tolak/tarik}} muka berhenti di tempat ia bertemu pepejal lain. Berehat di atas sesuatu dan menggelongsor sepanjangnya adalah dibenarkan — hanya masuk ke bahagian dalam yang dihentikan. Perkara yang sudah bertindih apabila anda mula masih boleh ditarik terpisah.

Untuk menolak sesuatu melaluinya dengan sengaja, klik {{ui:Langgar}} di bahagian bawah kanan (atau kosongkan tetapan), buat pergerakan, dan klik semula.

:::note
Perlanggaran disemak untuk pergerakan dan tolak/tarik. {{ui:Putar}} dan {{ui:Skala}} belum menyemaknya, dan geometri longgar yang bersentuh tetap bercantum, seperti sebelum ini: simpan benda berasingan dalam [kumpulan](topic:groups-components) supaya ia kekal berasingan.
:::

## Katil pencetak 3D

Saiz katil pencetak anda: {{ui:Tidak ditetapkan}} (permulaan), 180 × 180 × 180, 220 × 220 × 250, 256 × 256 × 256 atau 300 × 300 × 400 mm. Pilih saiz yang paling hampir dengan isipadu bina pencetak anda. [Semak untuk cetakan 3D](topic:print-3d) kemudian memberitahu bila model lebih besar daripada katil; dengan {{ui:Tidak ditetapkan}}, saiz tidak disemak.

## Orbit dan pan

**Orbit tentang apa yang ada di bawah kursor** (hidup pada permulaan): orbit berpusing di sekeliling bahagian model di bawah penunjuk, dan pan mengekalkan titik itu di bawah penunjuk; di atas ruang kosong kedua-duanya menggunakan pusat pandangan. Matikannya untuk sentiasa mengorbit di sekeliling pusat pandangan. **Kelajuan orbit** dan **Kelajuan pan** berjulat dari 0.25× hingga 3× (1× ialah permulaan) dan digunakan pada tetikus, pad sentuh, sentuhan dan kekunci anak panah. Lihat [Orbit, pan dan zum](topic:orbit-pan-zoom).

## Penunjuk sudut

Apa yang dipaparkan di sudut paparan 3D: **ViewCube** (permulaan; atas kanan — klik muka, tepi atau bucu untuk melihat dari situ, seret untuk mengorbit, seret cincin kompasnya untuk memusingkan model), **Ikon paksi** (penanda X, Y, Z kecil di bahagian bawah kiri yang berpusing mengikut pandangan: X merah, Y hijau, Z biru) atau **Tiada**. Lihat [ViewCube](topic:view-cube).
