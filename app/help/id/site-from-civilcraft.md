---
title: Ambil tapak dari CivilCraft
summary: Buka file alamat-ke-tapak yang dibuat CivilCraft dan tambahkan bangunan serta persil di sekitarnya sebagai massa dan garis tapak, hanya yang Anda centang.
keywords: tapak, civilcraft, alamat, persil, bangunan tetangga, massa, konteks, ccsite, data terbuka, openstreetmap
from: f28e4a3b
---

CivilCraft dapat mencari sebuah alamat dan menyimpan apa yang diketahui sumber data terbuka di sekitarnya: bangunan tetangga, persil, serta garis batas banjir, zonasi dan tanah. ModelCraft menerima file itu sebagai saran. Tidak ada yang ditambahkan sampai Anda memintanya.

## Bawa file masuk

1. Di CivilCraft, kirim tapak ke ModelCraft, atau simpan file (berakhiran `.ccsite.json`).
2. Di ModelCraft, buka atau seret file ke sana. Sebuah daftar terbuka dengan kotak centang untuk setiap bangunan dan untuk persil.
3. Ketik tinggi untuk bangunan yang tidak diberi tinggi oleh sumber. Baris di sebelahnya menunjukkan dari mana tingginya berasal: jumlah lantainya masing-masing 3 m, atau tinggi yang Anda ketik.
4. Tekan {{ui:Tambahkan yang dicentang}}.

Bangunan yang dicentang menjadi massa yang diekstrusi dalam satu komponen, dan persil menjadi garis di sekeliling tapak. Semuanya adalah satu langkah urungkan. Titik alamat berada di titik asal, dalam meter ke timur dan utara darinya.

Garis batas banjir, zonasi dan tanah hanya dicantumkan untuk informasi; garis-garis itu tidak digambar.

Data berasal dari sumber terbuka dan atribusinya ada di bagian bawah daftar. Ketinggian yang tidak diberikan adalah asumsi, jadi periksa sebelum Anda mengandalkannya.
