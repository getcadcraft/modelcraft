---
title: Menu, kekunci dan tetikus
summary: Pilih gaya menu yang sepadan dengan pemodel yang sudah anda kenali, berikan mana-mana arahan kekunci anda sendiri, alihkan arahan antara menu, dan tetapkan apa yang dilakukan roda serta butang tetikus tengah dan kanan.
keywords: gaya menu, menu, bar menu, bar alat, pintasan papan kekunci, kekunci pantas, kekunci, gaya kekunci, peta kekunci, sesuaikan, tetapkan semula kekunci, tetikus, roda, songsang, arah zum, butang tengah, butang kanan, orbit, pan, eksport, import, menukar, biasa, tolak-tarik, pemodel
from: e56fce3d
---

Alat ModelCraft sama sahaja tidak kira cara anda mencapainya. **Gaya menu** menentukan di mana ia diletakkan pada skrin, bagaimana ia dinamakan di sana dan kekunci mana yang menjalankannya. Pilih satu dalam {{ui:Tetapan}} ({{key:Mod+,}}) › {{ui:ModelCraft}} › {{ui:Menu, kekunci dan tetikus}}; perubahan berkuat kuasa serta-merta, dan pelayar ini mengingatinya.

## Gaya

| Gaya | Apa yang anda dapat |
| --- | --- |
| {{ui:ModelCraft}} | Bar alat ModelCraft sendiri (Fail, Lukis, Ubah suai, Susun, Sunting, Kamera) dan kekunci huruf tunggalnya: {{key:L}} garisan, {{key:R}} segi empat tepat, {{key:P}} tolak/tarik, {{key:M}} alih, {{key:Q}} putar, {{key:S}} skala, {{key:E}} pemadam, {{key:O}} orbit. Permulaan. |
| {{ui:Tolak-tarik}} | Bar menu (Fail, Sunting, Paparan, Kamera, Lukis, Alat, Tetingkap) di atas baris alat utama, dengan kekunci huruf tunggal yang sama. |
| {{ui:Pemodel}} | Bar menu pengepala (Fail, Sunting, Paparan, Pilih, Tambah, Objek, {{ui:Jejaring}}) dan kekunci pemodel jejaring: {{key:W}} pilih, {{key:G}} capai, {{key:R}} putar dan {{key:S}} skala pilihan sekaligus ({{key:X}}, {{key:Y}} atau {{key:Z}} mengunci paksi semasa ia bergerak), {{key:E}} tolak/tarik, {{key:B}} segi empat tepat, {{key:X}} padam, {{key:A}} pilih semua, {{key:Alt+A}} tiada, {{key:Shift+D}} pendua, {{key:Mod+G}} kumpulan, {{key:H}} sembunyi. Butang tengah untuk orbit; {{key:Shift}} dan butang tengah untuk pan, {{key:Mod}} dan butang tengah untuk zum; butang kanan membatalkan apa yang sedang dilakukan oleh alat. |
| {{ui:Pemula}} | Reben yang tab {{ui:Buat}} ialah beberapa butang besar: bentuk untuk dilepaskan, lubang, alih, pusing dan saiz, jajar, {{ui:Kumpulan}} (lubang dipotong ke dalam bentuk) dan semakan untuk cetakan 3D; setiap alat lain pada tab {{ui:Lagi alat}}. Butang kanan mengorbit, butang tengah untuk pan. Lihat [Gaya Pemula](topic:beginner). |

Kekunci gaya yang mungkin anda kenali daripada {{ui:Kekunci}} di penjuru kanan bawah paparan dan daripada {{ui:Sunting}} › {{ui:Lagi}} ialah pilihan yang sama: memilih kekunci pemodel di sana memilih gaya {{ui:Pemodel}}, dan memilih kekunci tolak/tarik meninggalkannya untuk gaya {{ui:ModelCraft}}. Jika anda pernah memilih kekunci pemodel dalam versi lama, ModelCraft dibuka dalam gaya {{ui:Pemodel}} sekali, dengan sendirinya.

:::tip
Kekunci yang tergolong dalam kekunci tolak/tarik tetapi yang diberikan kepada arahan lain oleh gaya anda tidak melakukan apa-apa, dan bar status menyatakan ke mana arahannya pergi ("Dalam Pemodel, Tolak/tarik ialah E"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} dan anak panah sentiasa mengekalkan maksudnya, nombor sentiasa pergi ke kotak nilai, dan semasa sesuatu alat sedang mengalihkan sesuatu, kekunci alat itu sendiri menang.
:::

## Sesuaikan mengikut kehendak anda

1. Pilih gaya yang paling hampir dengan apa yang anda mahu, kemudian klik {{ui:Sesuaikan…}}.
2. Pada {{ui:Kekunci dan menu}}, cari arahan (kotak carian membantu). {{ui:Tambah kekunci}} dan tekan kekunci. Klik kekunci untuk mengalihkannya.
3. Dengan bar menu, {{ui:Tempat ia berada}} memindahkan arahan ke menu lain, atau ke {{ui:Kekunci sahaja}}.
4. Pada {{ui:Tetikus}}, tetapkan roda dan apa yang dilakukan butang dalam paparan 3D.
5. Beri namanya dan klik {{ui:Simpan}}.

Menyimpan gaya terbina dalam membuat salinan anda sendiri ("Pemodel saya"); yang terbina dalam tidak pernah berubah. Salinan anda membaca kekunci mengikut cara gaya asalnya: salinan yang dibuat daripada {{ui:Pemodel}} memastikan kekunci capai, putar dan skala berfungsi serentak.

## Tetikus

- **Roda tetikus**: {{ui:Skrol ke atas mengezum masuk}} (permulaan) atau {{ui:Skrol ke atas mengezum keluar}}, dan betapa pantasnya. Cubitan pad jejak sentiasa mengezum mengikut arah jari anda bergerak.
- **Seret dalam paparan 3D**: {{ui:Setiap pandangan sendiri}} mengekalkan butang ModelCraft (butang tengah mengorbit, butang kanan atau {{key:Shift}} dan butang tengah untuk pan). Atau tetapkan butang tengah dan kanan untuk orbit, pan, zum atau tiada; {{key:Shift}} dengan butang menukar orbit dan pan. Butang kiri sentiasa milik alat yang sedang digunakan.
- **Pad jejak**: {{ui:Tetapan}} › {{ui:ModelCraft}} › {{ui:Skrol}} masih menentukan sama ada dua jari mengorbit (pad jejak) atau zum (tetikus). Lihat [Orbit, pan dan zum](topic:orbit-pan-zoom).

## Bawa bersama anda

{{ui:Eksport}} menyimpan gaya yang digunakan sebagai fail `.ccinput.json` kecil; {{ui:Import…}} menambahkan satu, dari komputer lain atau daripada rakan sekerja. Fail yang diimport hanya boleh menunjuk kepada arahan ModelCraft sendiri: apa sahaja yang lain di dalamnya ditinggalkan dan dikira dalam bar status. {{ui:Padam gaya ini}} mengalih keluar salah satu gaya anda sendiri.

:::note
Tetapan ini kekal dalam pelayar ini. {{ui:Gunakan gaya ini dalam setiap aplikasi}} di bawah kad gaya menjadikan setiap aplikasi dibuka dalam gaya yang sepadan: {{ui:Tolak-tarik}} sepadan dengan gaya bar menu aplikasi lain. {{ui:Pemodel}} tiada padanan dalam aplikasi lain, jadi ia kekal sebagai pilihan ModelCraft.
:::

Berkaitan: [Tindakan kekunci dan tetikus](topic:keyboard) · [Tetapan ModelCraft](topic:settings) · [Daripada pemodel lain](topic:coming-from)
