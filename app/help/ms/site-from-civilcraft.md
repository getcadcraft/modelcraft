---
title: Ambil tapak daripada CivilCraft
summary: Buka fail alamat-ke-tapak yang CivilCraft buat dan tambahkan bangunan dan lot di sekelilingnya sebagai jisim dan garis tapak, hanya yang anda tandakan.
keywords: tapak, civilcraft, alamat, lot, bangunan jiran, jisim, konteks, ccsite, data terbuka, openstreetmap
from: f28e4a3b
---

CivilCraft boleh mencari alamat dan menyimpan apa yang diketahui oleh sumber data terbuka di sekelilingnya: bangunan jiran, lot, dan garis luar banjir, zon dan tanah. ModelCraft menerima fail itu sebagai cadangan. Tiada apa-apa ditambah sehingga anda memberitahunya.

## Bawa masuk fail

1. Dalam CivilCraft, hantar tapak ke ModelCraft, atau simpan fail (ia berakhir dengan `.ccsite.json`).
2. Dalam ModelCraft, buka atau lepaskan fail itu. Satu senarai dibuka dengan kotak tanda untuk setiap bangunan dan untuk lot.
3. Taip ketinggian bagi bangunan yang sumbernya tidak berikan. Satu baris di sebelah setiap satu memberitahu dari mana ketinggiannya datang: bilangan aras pada 3 m setiap satu, atau ketinggian yang anda taip.
4. Tekan {{ui:Tambah yang ditanda}}.

Bangunan yang ditandakan menjadi jisim yang diekstrud dalam satu komponen, dan lot menjadi garis di sekeliling tapak. Semuanya ialah satu langkah buat asal. Titik alamat berada pada asalan, dalam meter timur dan utara daripadanya.

Garis luar banjir, zon dan tanah disenaraikan untuk makluman sahaja; ia tidak dilukis.

Data datang daripada sumber terbuka dan membawa atribusinya di bahagian bawah senarai. Ketinggian yang tidak diberikan ialah andaian, jadi semaklah sebelum anda bergantung padanya.
