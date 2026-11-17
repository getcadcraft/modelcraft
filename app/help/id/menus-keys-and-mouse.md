---
title: Menu, tombol, dan mouse
summary: Pilih gaya menu yang cocok dengan pemodel yang sudah Anda kenal, beri perintah apa pun tombol Anda sendiri, pindahkan perintah antar menu, dan atur apa yang dilakukan roda serta tombol tengah dan kanan mouse.
keywords: gaya menu, menu, bilah menu, bilah alat, pintasan keyboard, hotkey, tombol, gaya tombol, pemetaan tombol, sesuaikan, ubah pemetaan, tetapkan ulang, mouse, roda, balik, arah zoom, tombol tengah, tombol kanan, orbit, geser, ekspor, impor, beralih, familiar, dorong-tarik, pemodel
from: e56fce3d
---

Alat ModelCraft sama saja apa pun cara Anda mengaksesnya. **Gaya menu** menentukan letaknya di layar, namanya di sana, dan tombol mana yang menjalankannya. Pilih satu di {{ui:Pengaturan}} ({{key:Mod+,}}) › {{ui:ModelCraft}} › {{ui:Menu, tombol, dan mouse}}; perubahan langsung berlaku, dan peramban ini mengingatnya.

## Gaya-gayanya

| Gaya | Yang Anda dapatkan |
|---|---|
| {{ui:ModelCraft}} | Bilah alat ModelCraft sendiri (File, Gambar, Ubah, Atur, Edit, Kamera) dan tombol satu huruf: {{key:L}} garis, {{key:R}} persegi panjang, {{key:P}} dorong/tarik, {{key:M}} pindahkan, {{key:Q}} putar, {{key:S}} skala, {{key:E}} penghapus, {{key:O}} orbit. Gaya awal. |
| {{ui:Dorong-tarik}} | Bilah menu (File, Edit, Tampilan, Kamera, Gambar, Alat, Jendela) di atas deretan alat utama, dengan tombol satu huruf yang sama. |
| {{ui:Pemodel}} | Bilah menu header (File, Edit, Tampilan, Pilih, Tambah, Objek, Mesh) dan tombol pemodel mesh: {{key:W}} pilih, {{key:G}} ambil, {{key:R}} putar, dan {{key:S}} skala untuk pilihan sekaligus ({{key:X}}, {{key:Y}}, atau {{key:Z}} mengunci satu sumbu saat bergerak), {{key:E}} dorong/tarik, {{key:B}} persegi panjang, {{key:X}} hapus, {{key:A}} pilih semua, {{key:Alt+A}} batalkan pilihan, {{key:Shift+D}} duplikat, {{key:Mod+G}} grup, {{key:H}} sembunyikan. Tombol tengah untuk orbit; {{key:Shift}} dan tombol tengah untuk geser, {{key:Mod}} dan tombol tengah untuk zoom; tombol kanan membatalkan apa yang sedang dikerjakan alat. |
| {{ui:Pemula}} | Pita yang tab {{ui:Buat}}-nya berisi beberapa tombol besar: bentuk untuk diletakkan, lubang, pindahkan, putar dan ukur, rata, {{ui:Grup}} (lubang dipotong ke dalam bentuk), serta pemeriksaan untuk cetak 3D; setiap alat lain ada di tab {{ui:Alat lainnya}}. Tombol kanan untuk orbit, tombol tengah untuk geser. Lihat [Gaya Pemula](topic:beginner). |

Gaya tombol yang mungkin Anda kenal dari {{ui:Keyframe}} di kanan bawah tampilan dan dari {{ui:Edit}} › {{ui:Lainnya}} adalah pilihan yang sama: memilih tombol pemodel di sana berarti memilih gaya {{ui:Pemodel}}, dan memilih tombol dorong/tarik membiarkannya untuk gaya {{ui:ModelCraft}}. Jika Anda memilih tombol pemodel di versi lama, ModelCraft membuka gaya {{ui:Pemodel}} sekali, dengan sendirinya.

:::tip
Tombol yang termasuk tombol dorong/tarik tetapi di gaya Anda diberikan ke perintah lain tidak melakukan apa-apa, dan baris status menyebutkan ke mana perintahnya pindah ("Di Pemodel, Dorong/tarik adalah E"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}}, dan panah selalu mempertahankan artinya, angka selalu masuk ke kotak nilai, dan selama alat sedang memindahkan sesuatu, tombolnya sendiri yang berlaku.
:::

## Buat sesuai keinginan Anda

1. Pilih gaya yang paling dekat dengan keinginan Anda, lalu klik {{ui:Sesuaikan…}}.
2. Di {{ui:Tombol dan menu}}, cari perintah (kotak pencarian membantu). Klik {{ui:Tambah tombol}} lalu tekan tombolnya. Klik tombol untuk melepasnya.
3. Dengan bilah menu, {{ui:Letaknya}} memindahkan perintah ke menu lain, atau ke {{ui:Hanya tombol}}.
4. Di {{ui:Mouse}}, atur roda dan apa yang dilakukan tombol di tampilan 3D.
5. Beri nama, lalu klik {{ui:Simpan}}.

Menyimpan gaya bawaan membuat salinan Anda sendiri ("Pemodel Saya"); gaya bawaan tidak pernah berubah. Salinan Anda membaca tombol seperti gaya asalnya: salinan yang dibuat dari {{ui:Pemodel}} membuat tombol ambil, putar, dan skala langsung berfungsi.

## Mouse

- **Roda mouse**: {{ui:Gulir ke atas memperbesar}} (awal) atau {{ui:Gulir ke atas memperkecil}}, dan seberapa cepat. Cubitan trackpad selalu zoom mengikuti arah gerak jari Anda.
- **Seret di tampilan 3D**: {{ui:Milik tiap tampilan}} mempertahankan tombol ModelCraft (tombol tengah untuk orbit, tombol kanan atau {{key:Shift}} dan tombol tengah untuk geser). Atau atur tombol tengah dan kanan ke orbit, geser, zoom, atau tidak ada; {{key:Shift}} bersama tombol menukar orbit dan geser. Tombol kiri selalu milik alat yang sedang dipakai.
- **Trackpad**: {{ui:Pengaturan}} › {{ui:ModelCraft}} › {{ui:Gulir}} tetap menentukan apakah dua jari berorbit (trackpad) atau zoom (mouse). Lihat [Orbit, geser, dan zoom](topic:orbit-pan-zoom).

## Bawa bersama Anda

{{ui:Ekspor}} menyimpan gaya yang digunakan sebagai file `.ccinput.json` kecil; {{ui:Impor…}} menambahkannya, dari komputer lain atau dari rekan. File yang diimpor hanya dapat mengarah ke perintah ModelCraft sendiri: apa pun selain itu dibuang dan dihitung di baris status. {{ui:Hapus gaya ini}} menghapus salah satu gaya milik Anda.

:::note
Pengaturan ini tetap ada di peramban ini. {{ui:Gunakan gaya ini di setiap aplikasi}} di bawah kartu gaya membuat setiap aplikasi terbuka dengan gaya bilah menu yang sesuai: {{ui:Dorong-tarik}} sejalan dengan gaya bilah menu di aplikasi lain. {{ui:Pemodel}} tidak punya padanan di aplikasi lain, jadi tetap menjadi pilihan ModelCraft.
:::

Terkait: [Tombol dan aksi mouse](topic:keyboard) · [Pengaturan ModelCraft](topic:settings) · [Dari pemodel lain](topic:coming-from)
