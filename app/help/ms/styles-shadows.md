---
title: Gaya dan bayang matahari
summary: Tunjukkan model sebagai berlorek, sebagai garisan tersembunyi, sebagai rangka dawai atau lut sinar, dan kaji bayang yang dihasilkannya pada sebarang tarikh, masa dan tempat.
keywords: pandangan persembahan, pandangan bersih, sembunyikan garis panduan, sembunyikan paksi, gaya, berlorek, garisan tersembunyi, rangka dawai, sinar-X, tepi, bayang, matahari, kajian matahari, suria, tarikh, masa, latitud, longitud, zon waktu, utara
from: 09c95329
---

Panel {{ui:Gaya}} di sebelah kanan menukar cara model dilukis. Tiada apa di dalamnya mengubah model itu sendiri, dan ia bukan sebahagian daripada buat asal. Setiap [adegan](topic:scenes) mengingati gayanya sendiri, dan fail mengingati gaya yang anda ada semasa menyimpannya.

## Muka

Pilih satu dalam senarai {{ui:Muka}}:

| Gaya | Kelihatan seperti |
|---|---|
| {{ui:Berlorek}} | Muka pepejal, diterangi dengan lembut. Muka yang dilihat dari belakang berwarna kelabu-biru. Warna yang diimport ditunjukkan. |
| {{ui:Garisan tersembunyi}} | Muka dalam warna latar belakang dengan tepi dalam dakwat: lukisan garisan yang kemas dengan garisan tersembunyi dibuang. Putih pada {{ui:Kertas}}, gelap pada {{ui:Model}}. |
| {{ui:Rangka dawai}} | Tepi sahaja. Muka tidak dilukis, tetapi ia masih dikira apabila anda klik dan snap: anda tidak boleh memilih melaluinya. |
| {{ui:Sinar-X}} | Muka lut sinar, untuk melihat apa yang ada di belakang atau di dalam. Seperti dalam rangka dawai, klik dan snap masih berhenti pada muka yang paling dekat. |

{{ui:Tunjuk tepi}} menghidupkan atau mematikan tepi dalam setiap gaya kecuali {{ui:Rangka dawai}}. Apabila dimatikan, {{ui:Garisan tersembunyi}} hampir tidak menunjukkan apa-apa, kerana mukanya sepadan dengan latar belakang. Tepi lembut, seperti sisi bulatan yang ditarik, tidak pernah dilukis.

## Hidupkan bayang matahari

1. Tandakan {{ui:Bayang matahari}}. Tetapan matahari di bawahnya menjadi aktif, dan model menghasilkan bayang pada dirinya sendiri dan di atas tanah.
2. Tetapkan tempatnya:
   - {{ui:Latitud}}: utara positif, selatan negatif (New York kira-kira 40.7, Sydney kira-kira -33.9).
   - {{ui:Longitud}}: timur positif, barat negatif (New York kira-kira -74.0).
   - {{ui:Ofset UTC}}: ofset tapak dari UTC dalam jam, seperti `-5` untuk New York pada musim sejuk. ModelCraft tidak menggunakan waktu jimat cahaya siang; gunakan `-4` untuk New York pada musim panas.
3. Tetapkan {{ui:Tarikh}} (bulan dan hari) dan seret peluncur {{ui:Masa}}. Masa bergerak dalam langkah 15 minit dan dipaparkan di sebelah peluncur, seperti "3:00 pm".

Satu baris di bawah tetapan menyatakan di mana matahari berada, seperti "Matahari 52° di atas, 250° dari utara. Paksi hijau ialah utara." Pada waktu malam ia berkata "Matahari terbenam pada masa ini."

Model baharu bermula dengan matahari pada 21 Jun pada 3:00 pm, pada latitud 40, longitud -105, ofset UTC -7.

## Halakan model ke utara

Utara ModelCraft sentiasa ialah **paksi hijau**. Untuk mengkaji tapak sebenar, pusingkan model supaya sisi utaranya menghadap sepanjang hijau: pilih semua ({{key:Mod+A}}), tekan {{key:Q}}, klik pusat di atas tanah, dan putarkannya mengikut sudut tapak dari utara (lihat [Putar dan skala](topic:rotate-scale)).

## Kajian matahari

1. Tetapkan tempat dan tarikh.
2. Tambah adegan ({{ui:Tambah adegan}} dalam {{ui:Adegan}}).
3. Gerakkan peluncur masa, kemudian tambah adegan lain. Ulang untuk setiap jam yang anda mahu.
4. Klik {{ui:Main}} untuk melangkah melalui adegan. Lihat [Simpan pandangan sebagai adegan](topic:scenes).

## Perkara yang perlu diketahui

- Bayang mungkin kelihatan bergerigi pada model yang sangat besar, kerana satu peta bayang meliputi keseluruhan model.
- Bayang tidak dilukis dalam {{ui:Rangka dawai}}.
- Kedudukan matahari mengikut pengiraan solar NOAA dan tepat kepada sebahagian kecil darjah, yang mencukupi untuk kajian jisim bangunan. Pembiasan atmosfera diabaikan, jadi sudut matahari yang sangat rendah berhampiran matahari terbit dan terbenam mungkin sedikit tersasar.

## Pandangan persembahan

{{ui:Pandangan}} › {{ui:Pandangan persembahan}} (atau {{key:Shift+P}}) hanya menunjukkan model: paksi, garisan panduan dan titik panduan, garis luar satah keratan (potongan kekal), tanda lampu, kotak kumpulan yang dibuka, tanda snap dan tip, dan sorotan pilihan semuanya hilang. Gunakannya untuk melihat model dengan jelas, atau sebelum tangkapan skrin. Alat masih berfungsi, dan masih snap; anda hanya tidak nampak tandanya. Tekan {{key:Shift+P}} sekali lagi untuk mengembalikannya. Dimensi kekal, kerana ia sebahagian daripada lukisan. Semasa anda menyunting di dalam kumpulan, bahagian model yang lain tidak lagi pudar: ia ditunjukkan seperti sedia ada, termasuk teksturnya.
