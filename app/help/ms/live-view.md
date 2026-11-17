---
title: Pandangan langsung
summary: Tetingkap di sebelah model yang menunjukkannya dalam rupa masa nyata, dengan matahari dan bayang, dan mengikut setiap perubahan yang anda buat; berjalan melaluinya, dan tetapkan masa siang serta bulan.
keywords: kongsi, panorama, 360, lawatan, lawatan maya, penonton berdiri sendiri, penonton luar talian, hantar kepada klien, video, video panduan, taburan, menabur, rumput, padang, hutan, batu, tumbuhan, pokok, orang ramai, cat tumbuhan, pandangan langsung, masa nyata, render masa nyata, panduan langkah demi langkah, berjalan, orang pertama, pembentangan, klien, skrin kedua, tetingkap kedua, monitor, masa siang, matahari, musim, bulan, bayang, oklusi ambien, pantulan, cahaya pantulan, pencahayaan global, webgpu, webgl
from: fca3b0d6
---

{{ui:Eksport}} › {{ui:Pandangan langsung}} membuka panel di atas aplikasi yang menunjukkan model dalam rupa masa nyata: langit dan matahari dari tempat dan tarikh model anda, bayang matahari, rupa dan bahan yang anda beri pada permukaan, lampu, serta cahaya yang dipantulkan dari dinding dan lantai. Ia mengikut apa yang anda buat: pusingkan paparan dan ia turut berpusing, ubah model dan ia menunjukkan perubahan sejurus kemudian. Tiada apa-apa dimuat naik.

## Buka

1. Pilih {{ui:Eksport}} › {{ui:Pandangan langsung}}. Panel dibuka di penjuru kanan bawah.
2. Seret bar tajuknya untuk mengalihkannya, tarik penjurunya untuk membesarkannya.
3. {{ui:Tetingkap baharu}} memindahkannya ke tetingkap sendiri, untuk skrin kedua. {{ui:Eksport}} › {{ui:Pandangan langsung dalam tetingkap baharu}} membukanya di sana serta-merta. Jika pelayar anda menyekat tetingkap timbul, ia dibuka sebagai panel.
4. {{ui:Tutup}} menutupnya.

## Kawalan

| Kawalan | Fungsinya |
| --- | --- |
| {{ui:Ikut pandangan}} | Hidup: pandangan langsung melihat ke arah yang dilihat oleh pandangan ModelCraft. Berjalan mematikannya |
| {{ui:Jalan}} | Berjalan melalui model (di bawah) |
| {{ui:Graviti}} | Semasa berjalan: berdiri di atas lantai dan mendaki tangga. Mati: terbang |
| {{ui:Masa}} | Jam siang, dari 05:00 hingga 21:00. Matahari bergerak semasa anda menyeret |
| {{ui:Bulan}} | Bulan (hari ke-21 bulan itu), supaya anda dapat melihat matahari pada musim sejuk dan panas |
| {{ui:Kualiti}} | {{ui:Untuk komputer ini}} (apa yang diperoleh [mesin anda](topic:your-machine)), atau {{ui:Rendah}}, {{ui:Sederhana}} atau {{ui:Tinggi}} |

Baris di bahagian bawah menyatakan apa yang melukis paparan (WebGPU atau WebGL 2), kualitinya, dan cahaya pantulan.

## Berjalan melalui model

1. Pusingkan paparan utama ke tempat anda mahu berdiri dan pilih {{ui:Jalan}}. Anda berdiri di atas lantai di bawah titik mata paparan, setinggi 1.6 m.
2. Klik pandangan langsung, kemudian guna {{key:W}} {{key:A}} {{key:S}} {{key:D}} atau kekunci anak panah. Tahan {{key:Shift}} untuk berlari. Seret untuk melihat sekeliling.
3. Langkah sehingga 40 cm didaki (tangga); apa sahaja yang lebih tinggi ialah dinding. Dinding menghentikan anda dan anda meluncur di sepanjangnya.
4. Dengan {{ui:Graviti}} dimatikan, anda terbang: {{key:E}} naik, {{key:Q}} turun.
5. {{key:Esc}} menghentikan berjalan.

## Taburkan tumbuhan, batu dan orang

{{ui:Taburkan}} dalam bar pandangan langsung membuka panel taburan di sebelah gambar. Set taburan menyebarkan item daripada pustaka entourage (pokok, semak, rumput, bunga, batu, orang, kereta) ke atas sebahagian model. Item dilukis dalam pandangan langsung sahaja: ia bukan geometri dalam model, dan paparan utama tidak menunjukkannya.

1. **Isi permukaan:** pilih permukaan (atau kumpulan, seperti rupa bumi) dalam ModelCraft, kemudian pilih {{ui:Isi pilihan}}. Set itu meliputinya.
2. **Cat:** pilih {{ui:Cat}}, kemudian seret ke atas pandangan langsung. Dengan permukaan dipilih, cat hanya terkena permukaan itu; tanpa apa-apa dipilih, cat terkena apa sahaja di bawah berus, termasuk tanah. {{ui:Saiz berus}} menetapkan berus; {{ui:Pemadam}} mengalih keluar titik yang dicat.
3. Tanda apa yang hendak ditaburkan. Nombor di sebelah setiap item ialah beratnya: 3 dan 1 menghasilkan tiga daripada yang pertama bagi setiap satu daripada yang kedua.

| Kawalan | Fungsinya |
| --- | --- |
| {{ui:Setiap m²}} | Berapa banyak item pada setiap meter persegi |
| {{ui:Jauhkan (m)}} | Tiada item yang lebih dekat daripada ini kepada objek lain, dan tiada di bawah bumbung atau meja. 0 mematikannya |
| {{ui:Pusing (°)}} | Sejauh mana setiap item dipusingkan secara rawak sekitar menegak |
| {{ui:Paling curam (°)}} | Tiada item di tempat permukaan lebih curam |
| {{ui:Saiz}} | Saiz terkecil dan terbesar, sebagai faktor saiz asal item |
| {{ui:Ketinggian dari, hingga (m)}} | Hanya antara ketinggian ini (kosong = mana-mana) |
| {{ui:Condong mengikut permukaan}} | 0 mengekalkan item tegak; 1 menegakkannya bersudut tepat kepada cerun |
| {{ui:Benih}}, {{ui:Kocak semula}} | Benih yang sama sentiasa memberi taburan yang sama; Kocak semula memilih yang lain |

Set disimpan dalam fail .modelcraft dan mengikut permukaan yang diliputinya apabila anda mengubahnya. Bilangan item paling banyak yang dilukis oleh pandangan langsung ditetapkan oleh tahap [mesin anda](topic:your-machine): 20 000 untuk {{ui:Pemproses sahaja}}, 100 000 untuk {{ui:Kad grafik, asas}}, sejuta untuk {{ui:Kad grafik, tinggi}}. Panel menyatakan berapa banyak yang diletakkan daripada berapa banyak yang diminta oleh ketumpatan: lebih sedikit diletakkan apabila bajet dicapai, atau apabila objek lain menghalangnya. Item yang dekat dengan kamera dilukis sebagai dirinya sendiri; yang jauh sebagai bentuk ringkas dalam warnanya.

:::note
Item yang ditaburkan berada dalam pandangan langsung (dan dalam panduan berjalannya, panorama dan penonton berdiri sendiri). Render imej belum melukisnya lagi.
:::

## Kongsi: panorama, lawatan, penonton, video

{{ui:Kongsi}} dalam bar pandangan langsung menghasilkan fail daripada pandangan langsung. Semuanya dihasilkan pada komputer ini; tiada apa-apa dimuat naik.

| Pilihan | Apa yang anda dapat |
| --- | --- |
| {{ui:360° panorama}} | Gambar 360° dari tempat pandangan berdiri (atau tempat anda sedang berjalan), sebagai PNG equirectangular yang dibuka oleh pemapar panorama dan kebanyakan laman foto |
| {{ui:Tambah titik ini ke lawatan}}, kemudian {{ui:Simpan lawatan}} | Satu halaman web dengan panorama di setiap titik dan anak panah ke titik yang boleh dilihat setiap satu (dinding di antaranya menyembunyikan anak panah) |
| {{ui:Simpan penonton}} | Satu halaman web dengan model dalam rupa masa nyata ini: pusingkannya, berjalan melaluinya, lompat ke adegan yang disimpan. Ia dibuka luar talian dalam pelayar dengan WebGPU atau WebGL 2, daripada folder, pemacu USB atau e-mel, tanpa pemasangan dan tanpa akaun, dan ia tidak memuat apa-apa dari internet |
| {{ui:Video laluan}} | Laluan kamera garis masa (atau adegan yang disimpan mengikut urutan) sebagai video dalam rupa masa nyata ini, pada saiz pandangan langsung: WebM atau MP4 di mana pelayar boleh menghasilkannya, jika tidak gambar bernombor dalam ZIP |

Saiz panorama mengikut kualiti: 1024, 2048 atau 4096 piksel lebar pada Rendah, Sederhana dan Tinggi. Fail penonton kira-kira 5 MB ditambah model.

:::note
Lawatan dan penonton dibuat untuk tontonan, bukan penyuntingan: ia mengekalkan model seperti sedia ada apabila anda menyimpannya.
:::

## Kualiti

| | Rendah | Sederhana | Tinggi |
| --- | --- | --- | --- |
| Bayang matahari | satu peta bayang | tiga kaskad | empat kaskad |
| Oklusi ambien (bayang sentuhan) | | ✓ | ✓, lebih halus |
| Pantulan pada logam | | | ✓ |
| Bloom (apabila {{ui:Render imej…}} menetapkannya) | | ✓ | ✓ |
| Tepi dilicinkan | FXAA | merentasi beberapa bingkai (TAA) | merentasi beberapa bingkai (TAA) |
| Cahaya pantulan | kasar | lebih halus | paling halus |

{{ui:Untuk komputer ini}} memilih Rendah pada komputer tanpa kad grafik yang boleh digunakan, Sederhana dengan cip grafik terbina dalam, dan Tinggi dengan kad grafik berasingan. Rendah dimaksudkan untuk komputer riba 8 GB tanpa kad grafik.

## Cahaya pantulan

Cahaya yang dipantulkan dari dinding yang terkena matahari ke lantai, serta bahagian dalam bilik yang lebih gelap, dikira oleh penjejak laluan yang sama yang menghasilkan [gambar yang dirender](topic:render): ia merender panorama kecil pada titik melalui model, di latar belakang pada setiap teras pemproses. Semasa ia berfungsi, baris bawah menyatakan {{ui:Cahaya pantulan: 40 %}}; apabila ia siap, pandangan mengambilnya. Selepas setiap perubahan ia bermula semula.

:::note
Ini ialah anggaran untuk pandangan langsung, bukan gambar yang dirender: butiran kecil antara titik mendapat cahaya pantulan daripada titik berdekatan. Untuk gambar siap, gunakan [Render imej](topic:render).
:::

## Kecerahan dan warna

Pandangan langsung menggunakan kecerahan, keseimbangan putih, kontras dan transformasi paparan yang sama (ACES, AgX, filmic atau standard) seperti [Render imej](topic:render): tetapkannya di sana dan pandangan langsung akan mengikutinya.

:::note
Pelayar berbeza. Di tempat pelayar mempunyai WebGPU (Chrome dan Edge pada Windows, macOS dan ChromeOS, Safari 26) pandangan langsung menggunakannya; di tempat lain (kebanyakan pelayar pada Linux, sistem Apple lama) ia menggunakan WebGL 2 dan kelihatan sama.
:::
