---
title: Skala dengan faktor dan kelonggaran penyusutan
summary: Skala pilihan dengan faktor untuk setiap sumbu terhadap titik yang Anda pilih, atau perbesar pola sebesar persen yang akan menyusut pada bagian cor.
keywords: skala, non-seragam, faktor, persen, regangkan, penyusutan, susut, cor, pola, pengecoran, kelonggaran, ubah ukuran
from: 37e1bbff
---

Alat Skala ({{key:S}}) menskala secara merata atau menyeret grip untuk meregangkan satu atau dua arah. **Skala dengan faktor…** (menu Alat, atau grup Ubah) adalah bentuk yang diketik: sebuah angka untuk setiap dari tiga sumbu.

1. Pilih tepi, muka, grup, atau komponen.
2. Buka {{ui:Skala dengan faktor…}}. Ketik faktor untuk merah, hijau, dan biru. Faktor bisa berupa `1.015`, `101.5%`, atau `+1.5%` (dan `-2%` untuk lebih kecil). {{ui:Sama pada ketiga sumbu}} menyalin faktor pertama ke dua lainnya.
3. Pilih apa yang **tetap diam**: tengah pilihan, sudut terbawahnya, tengah bagian bawahnya, atau titik asal.
4. Baris di bawah kolom menampilkan ukuran sekarang dan sesudahnya. {{ui:Skala}} melakukannya dalam satu langkah urung.

Sumbu adalah sumbu grup yang sedang Anda buka (milik model, di tingkat teratas). Grup atau komponen yang diputar akan keluar miring jika faktornya berbeda; skala grup yang memuatnya sebagai gantinya. Isi komponen tidak tersentuh, sehingga salinan lainnya tetap seperti semula.

## Kelonggaran penyusutan

Bagian cor menyusut saat mendingin, sehingga polanya dibuat lebih besar. Di bawah **Kelonggaran penyusutan**, ketik persen untuk setiap sumbu (pengecoran atau pembuat pola Anda memberikannya untuk logam Anda; 1.5 % di bawah hanyalah contoh), lalu tekan {{ui:Pakai sebagai faktor}}.

- **Persen itu sendiri** menjadikan faktor 1 ditambah persen: 1.5 % memberi 1.015, yang ditandai oleh penggaris penyusutan.
- **Pas cukup** menjadikan faktor 1 dibagi satu dikurangi persen: 1.5 % memberi 1.0152, sehingga hasil cor berukuran sama dengan bagian setelah menyusut sebesar itu.

Persen terakhir Anda diingat di peramban ini.

:::note
Persen sepenuhnya diberikan oleh Anda: ModelCraft tidak mengetahui logam, cetakan, atau proses Anda.
:::
