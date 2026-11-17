---
title: Komponen yang diregangkan
summary: Buat satu salinan komponen menjadi lebih lebar, lebih dalam, atau lebih tinggi sementara bagian-bagiannya mempertahankan ukurannya: meja yang lebih panjang dengan kaki yang sama, rak buku yang lebih tinggi dengan raknya diberi jarak lebih lebar, atau pagar yang tiangnya berulang.
keywords: komponen dinamis, regangkan, ubah ukuran komponen, parametrik, ukuran bernama, ulangi, array, kaki, rak, pagar, aturan, variabel
from: b4c40f43
---

Menskalakan komponen membuat semua isinya lebih besar, termasuk kaki dan rel. **Regangkan salinan ini** mengubah lebar, kedalaman, atau tinggi sebuah komponen sementara setiap bagian mengikuti aturan: permukaan meja membesar, sedangkan kakinya tetap pada ketebalannya dan tetap berada di ujung-ujungnya.

Fitur ini bekerja pada komponen yang terdiri dari bagian-bagian, yaitu grup atau komponen di dalam komponen, seperti setiap benda di [pustaka awal](topic:starter).

## Meregangkan salinan

1. Pilih komponen.
2. Di {{ui:Info entitas}}, klik {{ui:Regangkan salinan ini…}}.
3. Ketik {{ui:Lebar (merah)}}, {{ui:Kedalaman (hijau)}} dan {{ui:Tinggi (biru)}} yang baru, lalu klik {{ui:Regangan}}.

Hanya salinan itu yang berubah: ia menjadi komponen tersendiri, yang mengingat asal aslinya. Regangkan lagi kapan saja, dan ia dihitung ulang dari yang asli, sehingga tidak ada yang melenceng. Salinan lain dari yang asli tetap seperti semula.

## Aturan

Buka komponen (klik dua kali) dan pilih salah satu bagiannya. {{ui:Info entitas}} menampilkan {{ui:Saat komponen diregangkan}}, dengan aturan sepanjang merah, hijau, dan biru:

| Aturan | Yang dilakukan bagian | Contoh |
|---|---|---|
| {{ui:Regangan}} | Membesar bersama komponen; jaraknya ke kedua sisi tetap | Permukaan meja |
| {{ui:Tetap di awal}} / {{ui:Tetap di akhir}} | Mempertahankan ukurannya dan jaraknya ke sisi itu | Kaki |
| {{ui:Pindahkan secara proporsional}} | Mempertahankan ukurannya; bagian tengahnya bergerak secara proporsional | Rak, gagang pintu |
| {{ui:Skalakan secara proporsional}} | Posisi dan ukurannya sama-sama proporsional | Anak tangga |
| {{ui:Ulangi}} | Salinannya, setiap jarak tertentu ({{ui:Setiap}}), dari titik awal sampai sisi yang jauh | Tiang pagar |

{{ui:Otomatis}} (awal) menentukan sendiri aturannya dan menampilkan yang dipilih: {{ui:Regangan}} ketika bagian membentang di seluruh komponen, {{ui:Pindahkan secara proporsional}} ketika bagian berada kira-kira di tengah, dan selain itu tetap di sisi yang lebih dekat dengannya.

## Hal yang perlu diketahui

- Bentuk bagian-bagiannya dipakai bersama, sehingga salinan yang diregangkan itu ringan. Mengedit sebuah bagian mengubahnya di setiap salinan.
- Salinan yang diregangkan tidak mengikuti perubahan pada aturan atau tata letak asli setelahnya: regangkan lagi untuk memasukkannya.
- Muka yang digambar lepas di dalam komponen (bukan di dalam bagian) tetap ukurannya; jadikan bagian agar ikut berubah.
- Aturan dan asal setiap salinan yang diregangkan disimpan dalam file ModelCraft.
