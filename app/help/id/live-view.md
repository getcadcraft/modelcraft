---
title: Tampilan langsung
summary: Jendela di samping model yang menampilkannya dengan tampilan real-time, dengan matahari dan bayangan, dan mengikuti setiap perubahan yang Anda buat; telusuri model, dan atur waktu dalam sehari serta bulan.
keywords: bagikan, panorama, 360, tur, tur virtual, penampil mandiri, penampil luring, kirim ke klien, video, video jalan-jalan, sebar, penyebaran, rumput, padang rumput, hutan, batu, tanaman, pohon, kerumunan, cat tanaman, tampilan langsung, real time, realtime, render real-time, jalan-jalan, jalan, telusuri, orang pertama, presentasi, klien, layar kedua, jendela kedua, monitor, waktu dalam sehari, matahari, musim, bulan, bayangan, ambient occlusion, pantulan, pantulan cahaya, global illumination, webgpu, webgl
from: fca3b0d6
---

{{ui:Ekspor}} › {{ui:Tampilan langsung}} membuka panel di atas aplikasi yang menampilkan model dengan tampilan real-time: langit dan matahari sesuai tempat dan tanggal model Anda, bayangan matahari, tampilan dan material yang Anda berikan pada muka, lampu, serta cahaya yang dipantulkan dari dinding dan lantai. Panel ini mengikuti apa yang Anda lakukan: putar tampilan dan ia ikut berputar, ubah model dan perubahannya tampil sesaat kemudian. Tidak ada yang diunggah.

## Buka

1. Pilih {{ui:Ekspor}} › {{ui:Tampilan langsung}}. Panel terbuka di pojok kanan bawah.
2. Seret bilah judulnya untuk memindahkannya, tarik sudutnya untuk memperbesarnya.
3. {{ui:Jendela baru}} memindahkannya ke jendela sendiri, untuk layar kedua. {{ui:Ekspor}} › {{ui:Tampilan langsung di jendela baru}} langsung membukanya di sana. Jika peramban Anda memblokir jendela pop-up, panel akan terbuka sebagai panel.
4. {{ui:Tutup}} menutupnya.

## Kontrol

| Kontrol | Fungsinya |
|---|---|
| {{ui:Ikuti tampilan}} | Aktif: tampilan langsung melihat ke arah yang dilihat tampilan ModelCraft. Berjalan mematikannya |
| {{ui:Jalan}} | Berjalan menelusuri model (di bawah) |
| {{ui:Gravitasi}} | Saat berjalan: berdiri di lantai dan naik tangga. Mati: terbang |
| {{ui:Waktu}} | Jam dalam sehari, dari 05:00 sampai 21:00. Matahari bergerak saat Anda menyeret |
| {{ui:Bulan}} | Bulan (tanggal 21-nya), sehingga Anda bisa melihat matahari di musim dingin dan musim panas |
| {{ui:Kualitas}} | {{ui:Untuk komputer ini}} (yang didapat [mesin Anda](topic:your-machine)), atau {{ui:Rendah}}, {{ui:Sedang}} atau {{ui:Tinggi}} |

Baris di bagian bawah menyatakan apa yang menggambar tampilan (WebGPU atau WebGL 2), kualitasnya, dan pantulan cahaya.

## Berjalan menelusuri model

1. Putar tampilan utama ke tempat Anda ingin berdiri, lalu pilih {{ui:Jalan}}. Anda berdiri di lantai di bawah titik mata tampilan, setinggi 1,6 m.
2. Klik tampilan langsung, lalu gunakan {{key:W}} {{key:A}} {{key:S}} {{key:D}} atau tombol panah. Tahan {{key:Shift}} untuk berlari. Seret untuk melihat sekeliling.
3. Undakan setinggi hingga 40 cm dapat dinaiki (tangga); apa pun yang lebih tinggi adalah dinding. Dinding menghentikan Anda, dan Anda meluncur di sepanjangnya.
4. Dengan {{ui:Gravitasi}} mati, Anda terbang: {{key:E}} naik, {{key:Q}} turun.
5. {{key:Esc}} menghentikan berjalan.

## Sebar tanaman, batu, dan orang

{{ui:Sebar}} di bilah tampilan langsung membuka panel sebar di samping gambar. Satu set sebar menyebarkan item dari pustaka entourage (pohon, semak, rumput, bunga, batu, orang, mobil) ke sebagian model. Item hanya digambar di tampilan langsung: item itu bukan geometri dalam model, dan tampilan utama tidak menampilkannya.

1. **Isi muka:** pilih muka (atau grup, seperti medan) di ModelCraft, lalu pilih {{ui:Isi pilihan}}. Set itu menutupi muka tersebut.
2. **Cat:** pilih {{ui:Cat}}, lalu seret di atas tampilan langsung. Jika muka dipilih, cat hanya mengenai muka itu; jika tidak ada yang dipilih, cat mengenai apa pun di bawah kuas, termasuk tanah. {{ui:Ukuran kuas}} mengatur kuas; {{ui:Penghapus}} menghapus titik yang sudah dicat.
3. Centang apa yang akan disebar. Angka di sebelah setiap item adalah bobotnya: 3 dan 1 menghasilkan tiga dari yang pertama untuk setiap satu dari yang kedua.

| Kontrol | Fungsinya |
|---|---|
| {{ui:Per m²}} | Berapa banyak item pada setiap meter persegi |
| {{ui:Jarak bebas (m)}} | Tidak ada item yang lebih dekat dari ini ke objek lain, dan tidak ada di bawah atap atau meja. 0 mematikannya |
| {{ui:Putaran (°)}} | Seberapa jauh setiap item diputar secara acak terhadap vertikal |
| {{ui:Paling curam (°)}} | Tidak ada item di tempat permukaan lebih curam dari ini |
| {{ui:Ukuran}} | Ukuran terkecil dan terbesar, sebagai faktor dari ukuran item itu sendiri |
| {{ui:Tinggi dari, sampai (m)}} | Hanya di antara tinggi ini (kosong = apa pun) |
| {{ui:Miring mengikuti permukaan}} | 0 membuat item tetap tegak; 1 menegakkannya tegak lurus terhadap lereng |
| {{ui:Seed}}, {{ui:Acak ulang}} | Seed yang sama selalu menghasilkan sebaran yang sama; Acak ulang memilih yang lain |

Set disimpan dalam file .modelcraft dan mengikuti muka yang dicakupnya ketika Anda mengubahnya. Jumlah item paling banyak yang digambar tampilan langsung diatur oleh tingkat [mesin Anda](topic:your-machine): 20 000 untuk {{ui:Hanya prosesor}}, 100 000 untuk {{ui:Kartu grafis, dasar}}, satu juta untuk {{ui:Kartu grafis, tinggi}}. Panel menyatakan berapa banyak yang ditempatkan dari berapa yang diminta kepadatan: lebih sedikit yang ditempatkan ketika anggaran tercapai, atau di tempat objek lain membuatnya tidak bisa. Item yang dekat dengan kamera digambar sebagai dirinya sendiri; yang jauh digambar sebagai bentuk sederhana dengan warnanya.

:::note
Item yang disebar ada di tampilan langsung (dan jalan-jalannya, panorama, serta penampil mandiri). Render gambar belum menggambarnya.
:::

## Bagikan: panorama, tur, penampil, video

{{ui:Bagikan}} di bilah tampilan langsung membuat file dari tampilan langsung. Semuanya dibuat di komputer ini; tidak ada yang diunggah.

| Pilihan | Yang Anda dapat |
|---|---|
| {{ui:Panorama 360°}} | Gambar 360° dari tempat tampilan berdiri (atau tempat Anda berjalan), sebagai PNG equirectangular yang dibuka oleh penampil panorama dan sebagian besar situs foto |
| {{ui:Tambahkan titik ini ke tur}}, lalu {{ui:Simpan tur}} | Satu halaman web dengan panorama di setiap titik dan panah ke titik-titik yang bisa dilihat masing-masing (dinding di antaranya menyembunyikan panah) |
| {{ui:Simpan penampil}} | Satu halaman web dengan model dalam tampilan real-time ini: putar, telusuri, lompat ke scene yang disimpan. Halaman ini terbuka luring di peramban dengan WebGPU atau WebGL 2, dari folder, flash disk, atau email, tanpa instalasi dan tanpa akun, serta tidak memuat apa pun dari internet |
| {{ui:Video jalur}} | Jalur kamera pada timeline (atau scene yang disimpan secara berurutan) sebagai video dalam tampilan real-time ini, pada ukuran tampilan langsung: WebM atau MP4 jika peramban dapat membuatnya, jika tidak gambar bernomor dalam ZIP |

Ukuran panorama mengikuti kualitas: lebar 1024, 2048, atau 4096 piksel pada {{ui:Rendah}}, {{ui:Sedang}}, dan {{ui:Tinggi}}. File penampil sekitar 5 MB ditambah model.

:::note
Tur dan penampil dibuat untuk ditampilkan, bukan untuk disunting: keduanya menyimpan model seperti apa adanya saat Anda menyimpannya.
:::

## Kualitas

| | Rendah | Sedang | Tinggi |
|---|---|---|---|
| Bayangan matahari | satu peta bayangan | tiga kaskade | empat kaskade |
| Ambient occlusion (bayangan kontak) | | ✓ | ✓, lebih halus |
| Pantulan pada logam | | | ✓ |
| Bloom (saat Render gambar mengaturnya) | | ✓ | ✓ |
| Tepi dihaluskan | FXAA | selama beberapa frame (TAA) | selama beberapa frame (TAA) |
| Pantulan cahaya | kasar | lebih halus | paling halus |

{{ui:Untuk komputer ini}} memilih Rendah pada komputer tanpa kartu grafis yang dapat dipakai, Sedang dengan chip grafis bawaan, dan Tinggi dengan kartu grafis terpisah. Rendah dimaksudkan untuk laptop 8 GB tanpa kartu grafis.

## Pantulan cahaya

Cahaya yang memantul dari dinding yang terkena matahari ke lantai, serta bagian dalam ruangan yang lebih gelap, dihitung oleh path tracer yang sama dengan [gambar hasil render](topic:render): ia merender panorama kecil di titik-titik melalui model, di latar belakang pada setiap inti prosesor. Selama bekerja, baris bawah menampilkan {{ui:Pantulan cahaya: 40 %}}; ketika siap, tampilan menerimanya. Setelah ada perubahan, proses dimulai lagi.

:::note
Ini adalah pendekatan untuk tampilan langsung, bukan gambar hasil render: detail kecil di antara titik-titik mendapat pantulan cahaya dari titik terdekat. Untuk gambar final, gunakan [Render gambar](topic:render).
:::

## Kecerahan dan warna

Tampilan langsung memakai kecerahan, keseimbangan putih, kontras, dan transformasi tampilan (ACES, AgX, filmic, atau standar) yang sama dengan [Render gambar](topic:render): atur di sana dan tampilan langsung mengikutinya.

:::note
Peramban berbeda-beda. Jika peramban memiliki WebGPU (Chrome dan Edge di Windows, macOS, dan ChromeOS, Safari 26), tampilan langsung menggunakannya; di tempat lain (sebagian besar peramban di Linux, sistem Apple lama) ia menggunakan WebGL 2 dan tampak sama.
:::
