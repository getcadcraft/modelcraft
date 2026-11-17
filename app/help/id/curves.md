---
title: Objek kurva
summary: Gambar kurva Bézier, NURBS, dan kurva segmen lurus, beri ketebalan, lebar, atau tirus, isi yang datar, jadikan teks sebagai kurva, dan ubah menjadi mesh.
keywords: kurva, curve, bezier, nurbs, spline, splines, jalur, path, tabung, pipa, kabel, tali, bevel, ekstrusi, tirus, miring, radius, isi, profil, teks, huruf, logo, curve to mesh
from: 602bf077
---

**Objek kurva** adalah kurva yang membentuk sebuah bentuk: tabung di sepanjangnya (bevel), pita (ekstrusi), tanduk yang meruncing (taper), atau — jika datar dan tertutup — pelat atau huruf yang terisi. Bentuknya mengikuti kurva: pindahkan sebuah titik dan tabungnya ikut bergerak. Saat bentuknya sudah benar, ubah menjadi mesh.

## Tambah kurva

Pilih {{ui:Kurva}} di daftar Workspace dan tekan {{ui:Tambah}}:

| Jenis | Apa itu |
| --- | --- |
| Kurva Bézier, lingkaran Bézier | Melewati titik-titiknya; setiap titik punya dua pegangan yang mengatur arah kurva |
| Kurva NURBS, lingkaran NURBS, Path | Halus, digambar menuju titik-titiknya (dimulai dan diakhiri pada titik ujungnya); setiap titik punya bobot |
| Teks | Teks Anda sebagai garis luar huruf yang datar dan terisi |

Kurva baru mendapat tabung tipis agar bisa terlihat dan dipilih; atur kedalaman bevel-nya ke 0 untuk kurva polos.

Anda juga bisa memulai dari sesuatu yang sudah digambar: pilih busur, lingkaran, poligon, atau kurva yang digambar di workspace Model, lalu tekan {{ui:Buat objek kurva}} di Info entitas. Garis yang digambar tetap ada.

## Edit titik

Klik dua kali objek kurva (atau pilih dan pilih {{ui:Kurva}}) untuk mengeditnya.

- Klik sebuah titik atau pegangan (Shift menambah atau membuang); seret untuk memindahkannya. Seret di ruang kosong untuk memilih dengan kotak.
- {{ui:Perpanjang}} ({{key:E}}, atau {{key:Ctrl}}+klik) menambahkan titik setelah ujung yang dipilih, di tempat penunjuk.
- {{ui:Subbagi}} ({{key:W}}) menempatkan titik di antara setiap pasangan tetangga yang dipilih; Bézier tetap mempertahankan bentuknya.
- {{ui:Pindahkan}}, {{ui:Putar}}, {{ui:Skala}} memindahkan titik yang dipilih mengikuti penunjuk (tombol modeler {{key:G}} {{key:R}} {{key:S}}, tombol push/pull {{key:M}} {{key:Q}} {{key:S}}); klik untuk menyimpan, {{key:Esc}} untuk membatalkan.
- {{ui:Tutup}} ({{key:C}}) menutup spline yang terbuka atau membuka yang tertutup; {{ui:Balikkan}} ({{key:Shift+R}}) menjalankannya ke arah sebaliknya.
- Pegangan Bézier: {{ui:Halus}} ({{key:V}}) menempatkannya untuk kurva yang halus, {{ui:Sudut}} ({{key:Shift+V}}) mengarahkannya ke tetangga, {{ui:Bebas}} ({{key:Alt+V}}) membiarkannya di tempat Anda meletakkannya. Menyeret pegangan membuatnya bebas.
- {{ui:Bézier}}, {{ui:NURBS}}, dan {{ui:Poli}} mengubah jenis spline yang dipilih, dengan titik-titiknya tetap.

Setiap perubahan adalah satu langkah urungkan.

## Bentuk

Pengaturannya ada di panel (dan di Info entitas pada workspace Model):

- **Bentuk:** kurva 3D bisa ke arah mana saja; kurva datar tetap di bidangnya sendiri dan bisa diisi.
- **Isi spline tertutup** (datar): garis luarnya menjadi pelat; garis luar di dalam garis luar lain adalah lubang, sehingga huruf mempertahankan lubangnya.
- **Ekstrusi:** setengah lebar pita (kurva terbuka atau 3D), atau setengah ketebalan pelat (terisi).
- **Kedalaman bevel** dan **kebulatan:** tabung bulat di sepanjang kurva (dengan ekstrusi: pita membulat); pada bentuk terisi, sisi yang membulat.
- **Tutup ujung:** tutup pada tabung terbuka.
- **Tirus di sepanjangnya:** skala merata di sepanjang setiap spline, misalnya `1, 0.2` untuk tanduk, `0, 1, 0` untuk gelendong.
- **Kehalusan** dan, untuk NURBS, **orde**: seberapa halus digambarnya, dan seberapa mulus (2 lurus … 6 paling mulus).
- Dengan titik terpilih: **radius** (ketebalan tabung di sana, dikalikan bevel), **miring** (memutar pita di sekitar kurva) dan, untuk NURBS, **bobot**.

Modifier bekerja di atas objek kurva seperti pada mesh: Array di sepanjangnya, Mirror, permukaan Subdivision. Lihat [Modifier pada mesh](topic:modifiers).

## Ubah menjadi mesh

{{ui:Ke mesh}} (di workspace Kurva atau di Info entitas, {{ui:Kurva menjadi mesh}}) membuat objek kurva menjadi mesh seperti yang ditampilkannya sekarang; modifier-nya tetap berada di atasnya. Setelah itu, edit di workspace Mesh. Urungkan akan mengembalikannya menjadi kurva.

Lihat juga [Mesh](topic:meshes) dan [Edit mesh](topic:mesh-edit).
