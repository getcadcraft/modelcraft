---
title: Sediakan model untuk cetakan 3D
summary: Semak model tertutup dan menghadap arah yang betul, lihat saiznya, tapaknya dan tonjolannya, betulkan apa yang salah, dan muat turunnya sebagai STL atau 3MF untuk pemotong anda.
keywords: cetakan 3d, pencetakan 3d, pencetak, cetak, pemotong, stl, 3mf, kedap air, tertutup, manifold, pepejal, lubang, terbalik ke dalam, tonjolan, penyokong, tapak, katil, milimeter, eksport, betulkan, baiki, berongga, saiz katil, pemula, ketebalan dinding, alat cetakan
from: 948e19af
---

Pemotong pencetak 3D memerlukan bentuk tertutup: tiada lubang, setiap muka menghadap ke luar, tiada yang melalui dirinya sendiri. {{ui:Eksport}} › {{ui:Semak untuk cetakan 3D (STL atau 3MF)…}} memeriksa perkara itu sebelum anda memuat turun fail.

## Semak dan muat turun

1. Pilih apa yang anda mahu cetak: satu atau lebih kumpulan atau komponen, atau beberapa muka. Tanpa apa-apa yang dipilih, semua yang ditunjukkan akan dicetak.
2. Klik {{ui:Eksport}} dalam kumpulan {{ui:Fail}}, kemudian {{ui:Semak untuk cetakan 3D (STL atau 3MF)…}}.

   Dialog bermula dengan satu baris: "Sedia untuk dicetak", berapa banyak perkara yang perlu diperbaiki sebelum mencetak, atau berapa banyak yang perlu diperiksa dahulu. Setiap masalah mempunyai tiga bahagian: apa yang salah, mengapa ia penting, dan apa yang perlu dilakukan. Kemudian datang saiz dalam milimeter, isipadu, bilangan segi tiga dan katil pencetak anda.

3. Jika dialog menyenaraikan perkara untuk diperbaiki, klik {{ui:Betulkan apa yang boleh dibetulkan}} (lihat di bawah). Semakan berjalan semula dengan sendirinya.
4. Klik {{ui:Muat turun 3MF}} atau {{ui:Muat turun STL}}.

Apa yang dicetak ialah apa yang anda lihat: muka tersembunyi, kumpulan dan komponen tersembunyi, dan apa-apa pada tag tersembunyi ditinggalkan. Saiz sentiasa dalam milimeter, unit yang dijangka pemotong, tanpa mengira unit yang ditunjukkan model.

:::tip
Utamakan 3MF jika pemotong anda membacanya: ia mengekalkan warna dan unit. STL tidak mempunyai kedua-duanya, dan pemotong menganggap milimeter.
:::

## Apa yang diperiksa oleh semakan

Ini menghentikan cetakan atau merosakkannya, dan menjadikan dialog berkata "Belum sedia untuk dicetak":

| Masalah | Maksudnya | Apa yang perlu dilakukan |
|---|---|---|
| Muka pada satu sisi sahaja | Lubang: tepi mempunyai muka di satu sisi dan tiada apa di sisi lain | Lukis muka yang hilang (garisan merentasi jurang sering menutupnya), atau guna {{ui:Betulkan}} (di bawah) |
| Dikongsi oleh tiga muka atau lebih | Muka bertemu dalam sirip atau dinding di dalam pepejal | Padam muka dalaman |
| Muka menghadap arah bertentangan | Sesetengah muka menghadap ke dalam, sesetengah ke luar | Pilih muka yang menghadap ke dalam dan klik {{ui:Balikkan muka}} dalam {{ui:Maklumat entiti}} |
| Terbalik ke dalam | Keseluruhan bahagian tertutup menghadap ke dalam | Pilih mukanya dan balikkannya |
| Melalui dirinya sendiri | Satu bahagian melipat melalui dirinya sendiri | {{ui:Sunting}} › {{ui:Lagi}} › {{ui:Persilang dengan model}}, kemudian padam apa yang ada di dalam. Lihat [Persilang muka](topic:intersect) |

Ini ialah amaran: model akan dicetak, tetapi lihat dahulu.

- **Bahagian berasingan bertindih**, atau **bertemu muka dengan muka**: pemotong biasanya menggabungkannya menjadi satu. Untuk fail yang lebih kemas, cantumkannya dengan {{ui:Pepejal}} › {{ui:Gabung}}. Lihat [Alat pepejal](topic:solids).
- **Tiada apa yang rata di bahagian bawah**: pusingkan model supaya satu muka berada di atas katil, atau pemotong akan menambah penyokong atau rakit.
- **Condong lebih daripada 45° dari tegak**: muka tersebut memerlukan sokongan. Dialog menyatakan berapa banyak permukaan yang berbuat demikian.
- **Kurang daripada 1 mm merentasi**: mungkin dimodelkan dalam unit yang salah. Semak unit dalam bar status.

Bahagian berongga (kulit tertutup di dalam yang lain) tidak mengapa: mukanya menghadap ke dalam rongga, dan isipadunya ditolak.

## Betulkan masalah

Di bawah **Di mana masalahnya**, dialog menamakan setiap kumpulan atau komponen yang mempunyai sesuatu yang salah (muka longgar yang tidak berada dalam kumpulan disenaraikan sebagai "Muka tidak dalam kumpulan"), dengan apa yang salah di dalamnya. Komponen yang diletakkan beberapa kali disenaraikan sekali: membetulkannya membetulkan setiap salinan.

- {{ui:Papar}} membuka kumpulan itu dan memilih tepi serta muka yang salah, supaya ia ditonjolkan.
- {{ui:Betulkan apa yang boleh dibetulkan}} membetulkan semuanya sekaligus: ia menutup lubang yang tepinya terletak rata, membuang muka di dalam bentuk dan tepi longgar, dan membalikkan muka supaya menghadap ke luar. Ia ialah satu langkah: {{key:Mod+Z}} membatalkannya. Semakan kemudian berjalan semula dan menunjukkan apa yang tinggal.

Apa yang tidak dapat diperbaiki (lubang yang tepinya tidak rata, bahagian yang melalui dirinya sendiri) kekal dalam senarai dengan apa yang perlu dilakukan secara manual. {{ui:Baiki}} di bawah **Alat cetakan** melangkah lebih jauh: ia menutup lubang yang tidak rata, membuang kepingan longgar dan muka berganda, dan menyenaraikan setiap pembetulan. Lihat [Penyokong, ketebalan dinding, pengosongan dan pembaikan](topic:print-tools#repair). Anda juga boleh membetulkan satu kumpulan pada satu masa: pilihnya, kemudian gunakan {{ui:Tunjuk masalah}} dan {{ui:Betulkan}} dalam {{ui:Maklumat entiti}}. Lihat [Alat pepejal](topic:solids).

## Bahagian berongga

{{ui:Berongga}} di bawah **Alat cetakan** mengosongkan bahagian kepada ketebalan dinding yang anda berikan, dengan lubang saliran di tempat anda klik. Lihat [Berongga](topic:print-tools#hollow).

Anda juga boleh melukis rongga sendiri: kumpulan tertutup di dalam bahagian, tidak menyentuhnya, dengan semua mukanya dibalikkan supaya menghadap ke dalam rongga. Semakan mengira ia sebagai rongga dan menolak isipadunya; ia tidak disenaraikan sebagai sesuatu untuk diperbaiki.

## Katil pencetak anda

Pilih saiz katil pencetak anda dalam {{ui:Tetapan}} › {{ui:ModelCraft}} › {{ui:Katil pencetak 3D}}. Semakan kemudian memberi amaran apabila model lebih besar daripada katil, diputar ke mana-mana arah. Lihat [Tetapan](topic:settings#3d-printer-bed).

## Alat cetakan

Di bawah penemuan dialog, **Alat cetakan** membuka {{ui:Pratonton penyokong}} (di mana penyokong pergi dan kira-kira berapa banyak), {{ui:Ketebalan dinding}} (dinding terlalu nipis untuk dicetak), {{ui:Berongga}} dan {{ui:Baiki}}. Lihat [Penyokong, ketebalan dinding, pengosongan dan pembaikan](topic:print-tools). {{ui:Pisahkan untuk pencetakan}} memotong model yang terlalu besar untuk katil kepada kepingan dengan penyambung dan sendi bernombor: lihat [Bahagikan model besar untuk pencetakan](topic:print-split).

## Tidak diperiksa

Semakan tidak memotong: butiran kecil yang muncung anda tidak dapat lukis dan penyokong sebenar adalah milik pemotong anda. Lihat [Belum dibina](topic:not-built-yet#3d-printing).
