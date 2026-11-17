---
title: Model pada pelan tapak daripada DWG atau DXF
summary: Bawa masuk pelan tapak atau pelan lantai CAD sebagai garisan di atas tanah, jawab soalan unit, dan jejaknya menjadi muka dan jisim.
keywords: pelan tapak, dwg, dxf, cad, import, lakaran, foto lakaran, lakaran tangan, lakaran serbet, foto, kertas, warna pen, blok dinamik, keadaan keterlihatan, teks, hatch, splin, elips, muka 3d, jejak, pelan lantai, lot, garis sempadan, unit, underlay, konteks
from: 3415dc96
---

ModelCraft boleh membawa masuk garisan lukisan CAD 2D, pelan tapak atau pelan lantai, dan meletakkannya di atas tanah supaya anda boleh memodel di atasnya.

## Import lukisan

1. Klik {{ui:Import}} dalam kumpulan {{ui:Fail}} (atau lepaskan fail pada paparan 3D).
2. Pilih fail `.dwg` atau `.dxf`.

   DWG yang besar mengambil sedikit masa: bar status berbunyi "Membaca plan.dwg…" sehingga ia masuk.

3. Jika lukisan tidak menyatakan unitnya, dialog bertajuk "Unit lukisan" bertanya: "Apakah satu unit lukisan?" Pilih {{ui:Inci}}, {{ui:Kaki}}, {{ui:Milimeter}} atau {{ui:Meter}}. Kebanyakan pelan tapak AS dilukis dalam kaki, pelan seni bina dalam inci, dan pelan metrik dalam milimeter.

   Lukisan itu tiba sebagai kumpulan tepi di atas tanah, dipilih, dan paparan zum kepadanya. Bar status memberitahu berapa banyak tepi yang masuk, contohnya "Diimport site.dwg: 1697 tepi di atas tanah, dalam satu kumpulan. Pecahkannya untuk melukis terus di atasnya."

## Apa yang masuk

- Garisan, polygaris (termasuk lengkung-lengkungnya), bulatan dan lengkung, dan blok dengan semua yang ada di dalamnya, daripada **ruang model** sahaja. Lengkung menjadi kepingan lurus pendek.
- Garisan, polygaris, lengkung, bulatan, elips dan splin mendarat rata di atas tanah, sebagai tepi.
- **Hatch** menjadi muka di atas tanah, dengan pulau-pulaunya sebagai lubang, supaya anda boleh tolak/tarik kawasan hatch secara terus.
- **Muka 3D** dan isian pepejal menjadi muka; muka 3D mengekalkan ketinggiannya.
- **Teks** (teks satu baris, teks berbilang baris dan nilai atribut) dilukis sebagai tepi dalam tulisan goresan tunggal yang ringkas, pada ketinggian, sudut dan penjajaran teks itu sendiri. Fontnya bukan font lukisan, jadi perkataan mungkin sedikit lebih panjang atau pendek. Aksara yang tiada bentuk dalam tulisan itu dilukis sebagai kotak kecil dan dikira.
- **Dimensi** dilukis seperti yang dipaparkan lukisan (garisnya, kepala anak panahnya dan teks, sebagai tepi dan muka).
- **Blok dinamik** masuk seperti yang dipaparkan lukisan: setiap blok yang diletakkan dalam keadaan keterlihatan ia disimpan, dan hanya garisan keadaan itu. Bar status menyenaraikannya dengan keadaan yang dipaparkan dan keadaan lain yang setiap satu ada, contohnya "Receptacle dipaparkan sebagai Duplex ×38, GFI ×7 (keadaan: Duplex, GFI)". ModelCraft tidak menukar keadaan.
- **Pepejal 3D, kawasan dan badan** (data ACIS lukisan) masuk sebagai kumpulannya sendiri: pepejal tertutup sebagai pepejal, kawasan atau badan terbuka sebagai muka. Muka rata masuk sepenuhnya; muka melengkung (silinder, kon, sfera, torus, permukaan splin mudah) sebagai segi tiga kecil dengan tepi lembut di antaranya, jadi hanya tepi pepejal itu sendiri yang kelihatan. Muka pada jenis permukaan lain ditinggalkan dan disenaraikan: "Belum dilukis lagi (pepejal 3D): …".
- Tidak diimport: titik, jadual, multipetunjuk, imej dan jenis objek lain. Bar status menyenaraikannya mengikut jenis, seperti "Tidak diimport: 12 POINT." Apa-apa pada layout (ruang kertas) juga ditinggalkan, tanpa disenaraikan.
- Lapisan tidak dikekalkan: semua garisan masuk sama rata.

Jika lukisan jauh dari asalnya (contohnya koordinat state plane), ia tetap diimport, tetapi mungkin mendarat jauh dari asalan ModelCraft. Lukisan yang melebihi 10,000 km dari asalnya ditolak: alihkan lukisan lebih dekat ke 0,0 dalam program CAD dahulu.

## Jejak menjadi muka

Garisan yang diimport jarang menutup kemas menjadi muka dengan sendirinya. Dua cara untuk bekerja:

**Simpan pelan sebagai underlay (disyorkan)**

1. Biarkan pelan sebagai kumpulannya sendiri.
2. Lukis bangunan anda di atasnya dengan {{ui:Segi empat tepat}} dan {{ui:Garisan}}, snap ke bucu pelan ("Titik hujung") dan tepinya ("Di atas tepi").
3. Tolak/tarik muka anda ke atas. Pelan kekal tidak terusik di bawah, dan anda boleh memadamkan seluruh kumpulan kemudian dengan satu klik.

Snap berfungsi merentasi kumpulan: anda boleh snap ke bucu pelan tanpa membukanya.

**Lukis pada garisan pelan sendiri**

1. Pilih kumpulan pelan dan klik {{ui:Pecahkan}}. Garisannya menjadi tepi longgar.
2. Di mana garis luar tertutup sepatutnya menjadi muka, lukis satu garisan di atas mana-mana tepinya dengan {{ui:Garisan}}, dari bucu ke bucu. Apabila garis luar tertutup dan rata, muka biasanya terisi. Jika tidak, cari jurang atau pertindihan dalam garis luar dan lukis di atasnya.
3. Tolak/tarik ke atas.

Ini berfungsi paling baik pada pelan yang bersih. Pada tinjauan yang sibuk, menjejak di atasnya lebih pantas.

## Masalah

- "Ini ialah DXF binari. Simpannya sebagai DXF ASCII dan cuba lagi." Simpan semula DXF daripada program CAD sebagai ASCII (teks).
- "…tiada garisan, lengkung atau bulatan dalam ruang model untuk dibawa masuk." Lukisan itu mungkin semuanya pada layout, atau semuanya teks dan hatch.
- "Lukisan ini tidak dapat dibaca (…). Ia mungkin rosak, atau disimpan dalam versi DWG yang pembaca tidak kendalikan…" Kurungan memberitahu sebabnya, contohnya "Versi DWG AC1009 tidak disokong". Simpan sebagai DXF, atau sebagai DWG dari AutoCAD 2000 hingga 2018, daripada program CAD.
- Pelan itu saiznya salah: anda memilih unit yang salah. Buat asal ({{key:Mod+Z}}) dan import semula, atau [skalakan](topic:rotate-scale) kumpulan dengan faktor yang betul (12 antara kaki dan inci, 25.4 antara inci dan milimeter).

Untuk menukar garis kontur kepada tanah yang boleh anda ukir, lihat [Rupa bumi](topic:terrain).

## Daripada foto lakaran tangan

**Fail › Import foto lakaran…** mengambil foto lakaran di atas kertas (JPEG, PNG atau TIFF, terus dari telefon pun boleh) dan membuat jenis tepi yang sama di atas tanah. Nyatakan kertas yang mana (atau biarkan ia mencari helaian, dianggap A4) dan skala lakaran, 1 : 100 contohnya. Tepi kertas dijumpai dan foto diluruskan, dakwat dijejak menjadi garisan dan lengkung, dan setiap warna pen (hitam, merah, biru, hijau) menjadi kumpulan sendiri dengan tag (**Lakaran hitam**, **Lakaran merah**, …), semuanya dalam satu kumpulan dinamakan sempena foto itu. Ia satu langkah buat asal, dan semuanya berlaku pada komputer ini: tiada apa-apa dihantar ke mana-mana.

Apabila tiada tepi kertas dijumpai, keseluruhan foto dianggap sebagai helaian dan baris status memberitahu begitu: ukur sesuatu yang anda tahu dan skalakan kumpulan jika ia tidak betul. Jejak garisan menjadi muka seperti di atas.
