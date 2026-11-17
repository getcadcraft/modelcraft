---
title: Pilih program yang menggambar gambar
summary: Pilihan Engine di dialog Render: dua mesin kami sendiri, program lain di CadCraft Studio, dan apa yang dilakukan web sebagai gantinya.
keywords: render, engine, renderer, mesin render, plug-in, plugin, studio, program luar, digambar oleh, antrean, mesin add-on
from: be4b056a
---

{{ui:Render gambar…}} memiliki pilihan **Engine** di atas Mode. Dua mesin kami sendiri selalu tersedia dan berfungsi di mana saja. Add-on dapat menambahkan lebih banyak, dan di CadCraft Studio daftarnya juga memuat program yang mengambil alih adegan.

| Engine | Yang dilakukannya | Di mana |
|---|---|---|
| Bawaan: Cepat | Gambar diam yang cepat: cahaya siang, bayangan lembut, tampilan kaca dan logam, dalam hitungan detik | Browser dan Studio |
| Bawaan: Path tracer | Cahaya memantul antar permukaan pada kartu grafis atau prosesor Anda, antrean render, dan komputer lain di jaringan Anda | Browser dan Studio |
| Mesin milik add-on | Ia menggambar dan mengembalikan gambarnya: lihat [Gambar gambar dengan program lain](topic:render-other-program) | Browser (mesin yang ditulis dalam JavaScript) atau Studio (mesin yang menjalankan program) |
| Program yang mengambil alih adegan | Studio menaruh adegan di foldernya dan menjaganya tetap sinkron | Studio |
| Buka di … | Menyimpan adegan dan membukanya di sebuah program; tidak ada yang kembali: lihat [Buka adegan di program lain](topic:render-open-in) | Web menyimpan file |

## Cara pilihan berperilaku

- Memilih Cepat atau Path tracer juga mengubah Mode, dan sebaliknya. Tidak ada hal lain di dialog yang berubah bagi orang yang tidak pernah memakai mesin lain.
- Mesin yang tidak tersedia tetap ada di daftar dengan alasannya ("tidak ditemukan", "membutuhkan versi yang lebih baru"); Anda tidak dapat memilihnya. Di browser, mesin yang hanya berjalan di Studio menampilkan "menyimpan file": {{ui:Render gambar…}} kemudian menyimpan adegan dan pengaturannya ke file yang Anda bawa ke program itu.
- Pilihan disimpan bersama pengaturan render file, dan mesin yang terakhir Anda pilih menjadi mesin awal untuk file yang tidak punya pilihan sendiri.
- Gambar dari program lain menyebutkan program yang menggambarnya beserta versinya, di dialog maupun di antrean render. Janji halaman [Render](topic:render) hanya mencakup mesin **kami sendiri**: program lain menyinari, mengatur tone, dan mengambil sampel dengan caranya sendiri, sehingga dua gambar dari satu adegan serupa dalam kamera, matahari, lampu, dan eksposur, tetapi tidak sama piksel demi piksel.

## Yang diterima setiap mesin

Adegan dikirim ke program lain sebagai **paket**: model sebagai file USD (file yang sama dengan yang ditulis [Simpan sebagai USD](topic:usd)), dan file pengaturan yang memuat hal-hal yang tidak dapat dipercaya kepada pengimpor USD: nilai material yang tepat, lampu yang menyala dengan dayanya dan profil cahayanya, matahari, langit, eksposur, dan kamera seperti yang akan digambar dialog. Tidak ada yang diunggah ke mana pun.

## Antrean render

Gambar atau animasi untuk program lain dapat menunggu di [antrean render](topic:render#the-render-queue) seperti milik kami sendiri. Pekerjaannya mengingat mesin mana yang dimaksud. Animasi dikirim ke program dalam satu kali jalan.
