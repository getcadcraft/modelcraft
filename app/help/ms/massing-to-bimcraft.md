---
title: Hantar massing ke BimCraft
summary: Serahkan massing tolak/tarik kepada BimCraft sebagai pilihan massing, dengan tingkat, jejak, luas lantai kasar dan isipadu dikira daripada setiap pepejal.
keywords: massing, jisim, konsep, pilihan, bimcraft, ifc, bim, tolak tarik, tingkat, aras, luas lantai kasar, jejak, isipadu, hantar, serah, jisim bangunan, peringkat 2
from: 73c51f3f
---

## Apa yang akan anda buat

Tukar blok yang anda modelkan dengan tolak/tarik kepada pilihan massing yang difahami BimCraft, supaya konsep itu diteruskan sebagai model bangunan.

## Sebelum anda mula

Jadikan setiap jisim **kumpulan** atau **komponen** dan namakannya. Setiap satu menjadi satu pilihan. Geometri longgar tidak dihantar.

## Hantar

1. Pilih kumpulan untuk dihantar. Tanpa apa-apa dipilih, setiap kumpulan dan komponen peringkat atas akan dihantar.
2. Pilih {{ui:Eksport}}, kemudian {{ui:Massing ke BimCraft…}}.
3. Taip {{ui:Nama set pilihan}} dan {{ui:Ketinggian tingkat}}.
4. Semak senarai: tingkat, jejak, luas lantai kasar dan isipadu bagi setiap pilihan.
5. Pilih **Hantar ke BimCraft** untuk membuka BimCraft dalam tab baharu dengan pilihan itu, atau {{ui:Simpan sebagai IFC}} untuk memuat turun fail dan membukanya di sana sendiri.

Dalam BimCraft, pilihan disenaraikan di bawah "Pilihan massing dalam model", di mana satu boleh dijadikan pilihan semasa dan dikembangkan menjadi dinding dan lantai.

## Cara pepejal menjadi jisim

- **Tingkat** ialah tinggi pepejal dibahagi dengan ketinggian tingkat, dibundarkan, dan sekurang-kurangnya satu. Tingkat kemudian berkongsi tinggi pepejal secara sama rata, jadi blok 10 m dengan tingkat 3 m mempunyai 3 tingkat setinggi 3.33 m.
- **Luas lantai** ialah luas keratan mendatar pepejal itu sendiri pada aras lantai tersebut. Blok yang berundur mempunyai tingkat atas yang lebih kecil, dan luas lantai kasar ialah jumlahnya.
- **Jejak** ialah garis luar keratan tepat di atas tapak pepejal.
- **Isipadu** ialah isipadu pepejal itu sendiri.

Dalam fail IFC setiap pilihan ialah proksi elemen bangunan (jejak dinaikkan ke tinggi pepejal) dengan satu ruang bagi setiap tingkat yang membawa luas kasar lantai itu. Semua pilihan berkongsi satu bangunan, dengan seberapa banyak tingkat seperti pilihan tertinggi.

## Bentuk dipermudahkan

Blok tegak yang ringkas dihantar sama seperti yang dimodelkan. Apa sahaja yang lain tetap dihantar, dan senarai menyatakan sebab bentuknya dipermudahkan:

- **Tingkatnya tidak semuanya bersaiz sama dengan tapaknya** (ia berundur atau condong): jisim dalam BimCraft ialah garis luar tapak yang dinaikkan ke ketinggian penuh, tetapi luas lantai dan isipadu ialah milik pepejal itu sendiri.
- **Pepejal tidak tertutup**: tingkat yang keratannya tidak dapat ditutup tidak diukur dan dikira sebagai sifar. Tutup pepejal ({{ui:Maklumat entiti}} menyatakan "Pepejal: Ya") untuk angka penuh.
- **Tapaknya mempunyai lebih daripada satu garis luar**: yang paling besar digunakan sebagai jejak.

## Perlu diketahui

- {{ui:IFC untuk BimCraft (.ifc)}} ialah eksport yang berbeza: ia hanya menghantar bentuk dan nama, tanpa tingkat atau luas.
- Tiada apa-apa dimuat naik. Fail diserahkan kepada tab BimCraft pada komputer ini.
