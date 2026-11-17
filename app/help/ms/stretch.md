---
title: Komponen yang diregangkan
summary: Jadikan satu salinan komponen lebih lebar, lebih dalam atau lebih tinggi manakala bahagiannya kekal saiznya: meja yang lebih panjang dengan kaki yang sama, rak buku yang lebih tinggi dengan rak-raknya diagihkan, susur tangga yang tiangnya berulang.
keywords: komponen dinamik, regang, saiz semula komponen, parametrik, saiz dinamakan, ulang, tatasusunan, kaki, rak, susur tangga, peraturan, pemboleh ubah
from: b4c40f43
---

Menskalakan komponen menjadikan semua yang ada di dalamnya lebih besar, termasuk kaki dan palang. **Regang salinan ini** menukar lebar, kedalaman atau ketinggian komponen manakala setiap bahagian mengikut satu peraturan: permukaan atas meja akan membesar, kakinya kekal tebalnya dan kekal di hujung.

Ia berfungsi pada komponen yang terdiri daripada bahagian, iaitu kumpulan atau komponen di dalam komponen, sebagaimana setiap benda dalam [pustaka permulaan](topic:starter).

## Regangkan satu salinan

1. Pilih komponen.
2. Dalam {{ui:Maklumat entiti}}, klik {{ui:Regang salinan ini…}}.
3. Taip {{ui:Lebar (merah)}}, {{ui:Kedalaman (hijau)}} dan {{ui:Tinggi (biru)}} yang baharu, kemudian klik {{ui:Regang}}.

Hanya salinan itu berubah: ia menjadi komponen tersendiri, yang mengingati asal ia datang. Regangkannya semula pada bila-bila masa, dan ia dikira semula daripada asal, jadi tiada apa yang tersasar. Salinan lain daripada asal kekal seperti sediaada.

## Peraturan

Buka komponen (klik dua kali padanya) dan pilih salah satu bahagiannya. {{ui:Maklumat entiti}} menunjukkan {{ui:Apabila komponen diregang}}, dengan satu peraturan merentasi merah, hijau dan biru:

| Peraturan | Apa yang dilakukan bahagian | Contoh |
|---|---|---|
| {{ui:Regang}} | Berkembang bersama komponen; jaraknya ke kedua-dua sisi kekal | Permukaan atas meja |
| {{ui:Kekal di permulaan}} / {{ui:Kekal di hujung}} | Mengekalkan saiznya dan jaraknya ke sisi itu | Kaki |
| {{ui:Alih mengikut kadar}} | Mengekalkan saiznya; bahagian tengahnya bergerak mengikut kadar | Rak, pemegang pintu |
| {{ui:Skala mengikut kadar}} | Kedudukan dan saiznya kedua-duanya mengikut kadar | Anak tangga |
| {{ui:Ulang}} | Salinannya, setiap {{ui:Setiap}} jarak, dari tempat ia bermula hingga ke sisi jauh | Tiang susur tangga |

{{ui:Automatik}} (permulaan) mengira satu peraturan dan menunjukkan yang mana: {{ui:Regang}} apabila bahagian merentangi komponen, {{ui:Alih mengikut kadar}} apabila ia terletak di tengah, selain itu ia kekal di sisi yang paling dekat dengannya.

## Perkara yang perlu diketahui

- Bentuk bahagian itu sendiri dikongsi, jadi salinan yang diregang adalah ringan. Menyunting satu bahagian mengubahnya dalam setiap salinan.
- Salinan yang diregang tidak mengikut perubahan kemudian pada peraturan atau susun atur asal: regangkannya semula untuk membawanya masuk.
- Muka yang dilukis longgar dalam komponen (bukan dalam bahagian) kekal saiznya; jadikannya bahagian untuk mengikutinya.
- Peraturan dan asal bagi setiap salinan yang diregang disimpan dalam fail ModelCraft.
