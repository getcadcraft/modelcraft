---
title: Ukur dan ubah saiz apa yang anda lukis
summary: Letakkan dimensi antara penjuru, pada lengkok dan bulatan, atau antara dua tepi; taip panjang baharu untuk mengubah saiz model. Taip semula panjang tepi, atau lebar, kedalaman dan tinggi kumpulan, dalam Maklumat entiti.
keywords: dimensi, dimension, ubah saiz, tukar saiz, sunting saiz, panjang, lebar, kedalaman, tinggi, regang, dimensi pemacu, anotasi, ukur, selepas kejadian, jejari, diameter, sudut, lengkok, bulatan, R, Ø
from: a1f815ec
---

Saiz dalam ModelCraft tidak tetap selepas sesuatu dilukis. Dimensi menunjukkan panjang pada model, dan menaip panjang baharu ke dalamnya mengubah saiz model supaya sepadan. Anda juga boleh menaip semula panjang tepi, atau lebar, kedalaman dan tinggi kumpulan, dalam {{ui:Maklumat entiti}}.

## Letakkan dimensi

1. Tekan {{key:D}}, atau klik {{ui:Dimensi}} pada bar alat.
2. Klik penjuru untuk mengukur dari. Ia melekat pada penjuru, titik tengah dan tepi, seperti yang dilakukan oleh lukisan.
3. Klik penjuru kedua.

   Atau klik sekali pada **tepi** (teks petunjuk berkata "Pada tepi") untuk mendimensikan keseluruhan tepi itu dalam satu klik.
4. Alihkan penunjuk ke tempat garis dimensi patut berada, dan klik. Anda juga boleh menaip ofset, seperti `0.5m`, dan tekan {{key:Enter}}.

   Garis dimensi kekal rata untuk tepi yang rata, melainkan anda melihatnya dari sisi. Untuk tepi tegak, ia kekal dalam satah tegak yang paling menghadap anda.

Bar status berkata "Dimensi 4 m." Dimensi menunjukkan panjangnya dalam unit model dan dikemas kini apabila anda menukar unit dalam pemilih.

## Jejari, diameter dan sudut

Alat {{ui:Dimensi}} yang sama juga mendimensikan bulatan dan sudut:

- **Lengkok:** klik lengkok. Teks petunjuk berkata {{ui:Jejari}}. Alihkan penunjuk ke tempat teks patut pergi dan klik: dimensi itu dibaca **R 1.5 m**.
- **Bulatan:** klik bulatan. Anda mendapat **diameter** (**Ø 3 m**) dengan garisan merentasi bulatan melalui pusatnya. Poligon berfungsi sama, dengan penjurunya pada bulatan.
- **Sudut antara dua tepi:** klik satu tepi, kemudian klik tepi kedua yang bertemu dengannya di penjuru (semasa anda di atasnya, teks petunjuk berkata {{ui:Sudut antara tepi}}). Kemudian alihkan ke dalam sudut yang anda mahu, dan klik. Di dalam penjuru anda mendapat sudut antara tepi; alihkan ke satu sisi dan anda mendapat sudut bersebelahan (contohnya 150° bukan 30°). Sejauh mana dari penjuru anda klik menetapkan tempat lengkok pergi; atau taip jarak itu.

Untuk menukar jejari kepada diameter atau sebaliknya, pilih dimensi dan pilih dalam {{ui:Tunjukkan sebagai}} dalam {{ui:Maklumat entiti}}.

**Mengubah saiz dengannya:** taip jejari atau diameter baharu sejurus selepas meletakkan satu, atau pilihnya kemudian dan taip. Lengkok atau bulatan mengekalkan pusatnya dan menukar saiz; muka yang dibatasinya (cakera, hujung slot) berubah bersamanya. Dua perkara hanya mengukur:

- **Dimensi sudut** tidak sekali-kali mengubah model. Untuk menukar sudut, putar tepi dengan {{ui:Putar}}.
- **Bulatan di hujung silinder** (bulatan yang anda tarik dengan {{ui:Tolak/tarik}}) tidak boleh diubah saiz daripada dimensinya, kerana sisinya juga perlu berubah. Skalakan silinder sebaliknya, mengelilingi paksinya.

## Ubah saiz model dengan dimensi

Sejurus selepas meletakkan dimensi, taip panjang baharu dan tekan {{key:Enter}}: `6m`, `12'`, `3500` dalam model milimeter. Model berubah kepada saiz itu.

Pada bila-bila masa kemudian:

1. Dengan {{ui:Pilih}}, klik teks atau garis dimensi. {{ui:Maklumat entiti}} menyatakan **Dimensi** dan menunjukkan {{ui:Panjang}}-nya.
2. Taip panjang baharu dan tekan {{key:Enter}}. Anda boleh menaip terus ke dalam kotak nilai, atau ke dalam kotak {{ui:Panjang}} dalam {{ui:Maklumat entiti}}.

### Apa yang bergerak

Penjuru kedua yang anda klik bergerak, dan begitu juga segala yang berada di luarnya:

- **Kedua-dua penjuru pada satu bahagian** (lebar kotak, tinggi dinding): sisi di penjuru yang bergerak meluncur keluar atau masuk, dan muka yang disambung kepadanya meregang. Kotak kekal sebagai pepejal tertutup, dan apa-apa yang berada sepenuhnya di sisi itu, seperti komponen tingkap, bergerak bersamanya.
- **Penjuru pada dua bahagian berasingan** (jurang antara dua kotak): bahagian penjuru yang bergerak bergerak keseluruhannya, dan jurang berubah.
- **Penjuru yang bergerak di dalam kumpulan atau komponen** yang penjuru satu lagi tidak berada di dalamnya: seluruh kumpulan bergerak.
- **Kedua-dua penjuru di dalam kumpulan atau komponen yang sama**: ia diregangkan di dalam. Komponen berubah di mana sahaja ia diletakkan, seperti yang sentiasa berlaku apabila anda menyuntingnya.

Untuk menukar hujung mana yang bergerak, pilih dimensi dan pilih dalam {{ui:Bergerak}} dalam {{ui:Maklumat entiti}}:

| Pilihan | Apa yang berlaku |
|---|---|
| {{ui:Hujung kedua}} (lalai) | Hujung yang anda klik kedua bergerak |
| {{ui:Hujung pertama}} | Hujung yang anda klik pertama bergerak |
| {{ui:Kedua-dua hujung (berpusat)}} | Setiap hujung bergerak separuh perubahan, jadi bahagian tengah kekal di tempatnya |

### Apabila ubah saiz ditolak

ModelCraft tidak mengubah apa-apa dan memberitahu sebabnya dalam bar status:

- "muka akan melengkung keluar dari satahnya": dimensi berjalan condong merentasi bentuk. Dimensikan sepanjang tepi, atau sepanjang merah, hijau atau biru.
- "muka akan mengecil kepada sifar atau terbalik": panjang baharu terlalu pendek untuk bentuk itu.
- "hujung yang bergerak tidak berada di penjuru model": hujung itu diletakkan di ruang kosong atau di tengah tepi. Pilih hujung yang satu lagi dalam {{ui:Bergerak}}, atau letakkan dimensi pada dua penjuru.
- "panjang mesti melebihi sifar".

Setiap ubah saiz ialah satu langkah: {{key:Mod+Z}} membatalkannya.

## Taip semula saiz dalam Maklumat entiti

Anda tidak selalu memerlukan dimensi:

- **Tepi:** pilihnya. {{ui:Panjang}}-nya dalam {{ui:Maklumat entiti}} ialah kotak yang boleh anda taip. Menaip panjang dalam kotak nilai juga berfungsi. Hujung yang lebih jauh di sepanjang merah, kemudian hijau, kemudian biru bergerak, dan apa yang disambung kepadanya meregang. Contohnya, menaip semula tepi bawah depan sesebuah kotak menjadikan kotak itu lebih lebar ke kanan.
- **Kumpulan atau komponen:** pilihnya. {{ui:Lebar (merah)}}, {{ui:Kedalaman (hijau)}} dan {{ui:Tinggi (biru)}} ialah kotak. Sisi jauhnya (kanan, belakang, atas) bergerak. Ini ialah paksi kumpulan itu sendiri, sebelum sebarang putaran yang anda berikan kepadanya.

Tekan {{key:Enter}} untuk menggunakan, atau {{key:Esc}} untuk mengembalikan nilai lama.

## Dimensi mengikut model

Dimensi dilampirkan kepada dua penjuru ia diletakkan (sudut: kepada penjurunya dan hujung jauh dua tepinya; jejari atau diameter: kepada lengkok atau bulatannya). Alihkan, tolak/tarik atau ubah saiz geometri, dan dimensi mengikut serta menunjukkan panjang baharu. Ia kekal dilampirkan apabila anda menjadikan geometri itu kumpulan atau komponen.

Jika hujung diletakkan di tempat yang bukan penjuru (pada muka, atau di ruang kosong), atau penjurunya dipadam, hujung itu kekal di tempat asalnya. Dimensi masih mengukur, tetapi ia hanya boleh diubah saiz dari hujung satu lagi.

## Alih keluar dimensi

- Satu dimensi: pilihnya dan tekan {{key:Delete}}, atau klik dengan {{ui:Pemadam}}.
- Semua dimensi: apabila tiada apa dipilih, klik {{ui:Padam semua dimensi}} dalam {{ui:Maklumat entiti}}.

Dimensi disimpan dalam fail `.modelcraft`. Ia tidak dieksport ke format lain, yang hanya membawa model 3D. Fail dengan dimensi masih boleh dibuka dalam ModelCraft yang lebih lama, tanpanya.
