---
title: Pilih program yang melukis imej
summary: Pilihan Enjin dalam kotak dialog Render: enjin kami sendiri, program lain dalam CadCraft Studio, dan apa yang web lakukan sebaliknya.
keywords: render, enjin, enjin render, plug-in, plugin, studio, program luar, dilukis oleh, giliran, enjin add-on
from: be4b056a
---

{{ui:Render imej…}} mempunyai pilihan **Enjin** di atas **Mod**. Dua enjin kami sendiri sentiasa ada dan berfungsi di mana-mana; add-on boleh menambah lebih banyak, dan dalam CadCraft Studio senarai itu juga memuatkan program yang mengambil alih adegan.

| Enjin | Apa yang dilakukannya | Di mana |
|---|---|---|
| Terbina dalam: Pantas | Imej pegun yang pantas: cahaya siang, bayang lembut, rupa kaca dan logam, dalam beberapa saat | Pelayar dan Studio |
| Terbina dalam: Penjejak laluan | Cahaya melantun antara permukaan pada kad grafik atau pemproses anda, giliran render dan komputer lain dalam rangkaian anda | Pelayar dan Studio |
| Enjin add-on | Ia melukis dan memulangkan imej: lihat [Lukis imej dengan program lain](topic:render-other-program) | Pelayar (enjin yang ditulis dalam JavaScript) atau Studio (enjin yang menjalankan program) |
| Program yang mengambil alih adegan | Studio meletakkan adegan dalam folder dan memastikannya seiring | Studio |
| Buka dalam … | Menyimpan adegan dan membukanya dalam program; tiada apa yang dikembalikan: lihat [Buka adegan dalam program lain](topic:render-open-in) | Web menyimpan fail |

## Cara pilihan berfungsi

- Memilih Pantas atau Penjejak laluan menukar Mod bersamanya, dan sebaliknya. Tiada apa-apa lagi dalam kotak dialog berubah untuk orang yang tidak pernah menggunakan enjin lain.
- Enjin yang tidak tersedia kekal dalam senarai dengan sebab ("tidak dijumpai", "memerlukan versi yang lebih baharu"); anda tidak boleh memilihnya. Dalam pelayar, enjin yang hanya berjalan dalam Studio dipaparkan "menyimpan fail": {{ui:Render imej…}} kemudian menyimpan adegan dan tetapannya ke dalam fail yang anda bawa ke program itu.
- Pilihan disimpan bersama tetapan render fail, dan enjin yang anda pilih terakhir ialah enjin permulaan bagi fail yang tidak mempunyai pilihan sendiri.
- Imej daripada program lain menyatakan program mana yang melukisnya dan versinya, dalam kotak dialog dan dalam giliran render. Janji dalam halaman [Render](topic:render) hanya meliputi enjin **kami sendiri**: program lain menyinari, menala warna dan mensampel dengan caranya sendiri, jadi dua imej bagi satu adegan serupa dari segi kamera, matahari, lampu dan pendedahan, bukan piksel demi piksel.

## Apa yang diberikan kepada setiap enjin

Adegan dihantar ke program lain sebagai **pakej**: model sebagai fail USD (fail yang sama dengan yang ditulis oleh [Simpan sebagai USD](topic:usd)), dan fail tetapan yang memuatkan perkara yang tidak boleh dipercayai kepada pengimport USD: nilai bahan yang tepat, lampu yang dihidupkan dengan kuasa dan profil cahayanya, matahari, langit, pendedahan dan kamera seperti yang dilukis oleh kotak dialog. Tiada apa-apa dimuat naik ke mana-mana.

## Giliran render

Imej atau animasi untuk program lain boleh menunggu dalam [giliran render](topic:render#the-render-queue) seperti milik kami sendiri; kerjanya mengingati enjin yang dimaksudkan. Animasi dihantar ke program dalam satu larian.
