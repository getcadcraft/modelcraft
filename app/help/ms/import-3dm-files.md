---
title: Import model .3dm
summary: Import fail .3dm dengan jejaring, permukaan, lengkung, blok, lapisan dan warnanya; dari mana segitiga datang, dan apa yang ditinggalkan.
keywords: 3dm, import, nurbs, polysurface, brep, permukaan, jejaring render, penyemperitan, lengkung, blok, lapisan, tag, warna, unit, bertukar, migrasi
from: 3cf29879
---

ModelCraft membaca fail `.3dm` dengan pembaca sendiri, dalam halaman. Tiada apa-apa dimuat naik, dan ia berfungsi di luar talian apabila ModelCraft juga berfungsi. Fail yang disimpan dalam susun atur versi 5, 6, 7 dan 8 telah diuji; yang lebih lama (versi 2 hingga 4) sepatutnya turut dibuka, tetapi belum dicuba.

## Import fail

1. Klik {{ui:Import}} dalam kumpulan {{ui:Fail}} (atau lepaskan fail `.3dm` pada paparan 3D).
2. Pilih fail.

   Bar status berbunyi "Membaca chair.3dm…" semasa ia dibaca, kemudian apa yang masuk, contohnya "Diimport chair.3dm: 14 jejaring (8330 muka), 8 lengkung, 5 letakan blok, 3 lapisan sebagai tag. Permukaan: 7 muka daripada jejaring yang disimpan dalam fail, 29 dipetak-petak oleh CadCraft."

Keseluruhan model masuk sebagai satu kumpulan dinamakan sempena fail, dipilih, dan paparan zum ke sana. Satu {{key:Mod+Z}} mengeluarkan semuanya semula, termasuk tag.

## Dari mana segitiga datang

ModelCraft memodelkan dengan muka dan jejaring, jadi setiap permukaan dalam fail masuk sebagai [jejaring](topic:meshes) segitiga rata kecil. Bagi setiap muka polipermukaan (dan setiap penyemperitan), ModelCraft mengambil, mengikut susunan ini:

1. **Jejaring render yang disimpan dalam fail.** Kebanyakan program pemodelan menyimpan jejaring yang ditunjukkan pada skrin bersama setiap permukaan; apabila ia ada, ModelCraft menggunakannya seperti sedia ada.
2. **Pemetakannya sendiri**, apabila fail tiada jejaring tersimpan: satah, permukaan NURBS, permukaan kisaran (sfera, kon, torus, bentuk larik), lengkung yang diekstrusi dan penyemperitan (dengan lubang dan penutup hujungnya), dipotong mengikut tepinya. Muka dalam satu polipermukaan berkongsi titik tepinya, jadi polipermukaan tertutup masuk sebagai jejaring tertutup. Kawasan melengkung dibahagi sehingga segitiga terletak dalam lingkungan kira-kira 0.15 % saiz objek daripada permukaan sebenar.
3. **Tiada apa-apa**, bagi muka pada jenis permukaan yang ModelCraft belum baca. Bar status menyatakan berapa banyak muka, dan jenisnya.

Bahagian "Permukaan:" pada bar status menyatakan berapa muka datang daripada jejaring tersimpan dan berapa yang dipetak-petak oleh ModelCraft. Tepi di dalam satu muka fail adalah lembut dan tepi antara dua muka adalah tajam, jadi muka melengkung berlorek dengan licin.

:::tip
Untuk bentuk yang paling setia, simpan fail dengan jejaring render dalam program yang menghasilkannya (biasanya ia lalai; pilihan "simpan kecil" meninggalkannya).
:::

## Apa yang masuk

- **Jejaring** dengan warna bucu dan koordinat tekstur.
- **Polipermukaan, permukaan dan penyemperitan**, seperti yang diterangkan di atas.
- **Lengkung** (garisan, polygaris, lengkok, bulatan, lengkung NURBS dan lengkung yang digabungkan daripadanya) sebagai [tepi](topic:curves), satu kumpulan tepi bagi setiap lapisan.
- **Blok** menjadi [komponen](topic:groups-components): setiap letakan blok ialah letakan bagi satu komponen, jadi menyunting satu salinan mengubah semuanya. Blok di dalam blok dikekalkan.
- **Lapisan** menjadi [tag](topic:tags) dengan nama penuh lapisan ("Furniture::Chairs"), tersembunyi apabila lapisan dimatikan. Letakan setiap objek membawa tag lapisannya.
- **Warna.** Warna objek datang dari tempat fail menyatakannya: warna sendirinya, warna lapisannya, atau warna asas bahannya. Ia menjadi cat bagi mukanya.
- **Objek tersembunyi masuk dalam keadaan tersembunyi**; {{ui:Nyahsembunyi semua}} menunjukkannya.
- **Unit:** fail menyatakan unitnya; model masuk pada saiz sebenarnya.

## Apa yang ditinggalkan (dan dinyatakan)

Bahagian "Nota:" pada bar status menamakan semua yang tidak masuk, dengan bilangannya:

- titik dan awan titik, teks, titik teks, dimensi, pemimpin, hatch, lampu, satah pemotongan dan butiran susun atur;
- objek SubD: tukarkan kepada jejaring atau polipermukaan dalam program yang menghasilkan fail itu dahulu;
- muka pada permukaan ofset dan jenis permukaan lain yang belum dibaca ModelCraft, apabila fail tidak menyimpan jejaring untuknya;
- blok yang dipautkan dari fail lain (hanya fail yang anda import dibaca);
- penyemperitan dengan hujung condong (bersudut) masuk dengan hujung rata.

Tekstur bahan, tetapan render, paparan dinamakan, kumpulan dan teks pengguna tidak dibaca; bahan hanya memberikan warna asasnya.

## Had

Fail sehingga 300 MB. Fail yang rosak menyatakan apa yang salah dan tidak menambah apa-apa; satu objek yang tidak dapat dibaca ditinggalkan dan dikira, dan selebihnya masuk.
