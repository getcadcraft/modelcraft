---
title: Penyelesaian masalah
summary: Simptom, punca dan pembetulan, dari paparan 3D kosong hingga import pada saiz yang salah, dengan mesej yang ModelCraft tunjukkan.
keywords: masalah, gangguan, ralat, tidak berfungsi, kosong, webgl, grafik, perlahan, mesej, import gagal, saiz salah, tidak dapat memilih, sentuh, kekunci tidak berfungsi, kerja hilang
from: 6e7394be
---

## Paparan 3D kosong

**Simptom:** bahagian tengah skrin kekal kosong, atau hanya menunjukkan warna latar belakang, dan mengklik alat tidak melakukan apa-apa.

**Punca:** ModelCraft melukis dengan WebGL 2, grafik 3D pelayar. Ia tiada apabila pelayar lama, apabila pecutan perkakasan dimatikan, atau apabila pemacu grafik disekat.

**Pembetulan:**

:::chromium
1. Buka tetapan pelayar dan cari "graphics acceleration".
2. Hidupkan "Use graphics acceleration when available" dan mulakan semula pelayar.
3. Jika ia sudah hidup, taip `chrome://gpu` dalam bar alamat (`edge://gpu` dalam Edge) dan cari "WebGL2" dalam senarai. Jika ia menyatakan dilumpuhkan, kemas kini pemacu grafik anda.
:::

:::firefox
1. Buka **Tetapan**, kemudian **Umum**, dan tatal ke "Performance".
2. Nyahtandakan "Use recommended performance settings", kemudian tandakan "Use hardware acceleration when available". Mulakan semula Firefox.
3. Jika masih gagal, taip `about:support` dalam bar alamat dan lihat bahagian "Graphics" untuk WebGL 2.
:::

:::safari
Kemas kini macOS dan Safari. Versi Safari terkini sentiasa mempunyai WebGL 2 dihidupkan. Jika anda menukar ciri eksperimen di bawah **Safari**, kemudian **Tetapan**, kemudian **Lanjutan** (atau **Feature Flags**), tetapkan semula ciri itu.
:::

Pada komputer kerja, desktop jauh atau mesin maya, grafik 3D mungkin disekat oleh dasar. Cuba komputer lain. Lihat [Pelayar dan komputer](common:browsers).

## Kekunci tidak berfungsi, atau menaip dalam kotak

**Punca:** fokus papan kekunci berada dalam medan panel: senarai {{ui:Muka}} dalam {{ui:Gaya}}, tetapan matahari, medan {{ui:Nama}} dalam {{ui:Maklumat entiti}}, atau pemilih unit. Huruf dan kekunci anak panah kemudian pergi ke medan itu.

**Pembetulan:** klik dalam paparan 3D, kemudian tekan kekunci itu sekali lagi. Kekunci juga tidak berfungsi semasa dialog terbuka.

## Menaip nombor tidak melakukan apa-apa

- **Belum ada arah.** Panjang yang ditaip mengikut arah penuding dari klik pertama. Alihkan penuding sedikit ke arah yang anda mahu, kemudian taip.
- **Masa yang salah.** Kebanyakan alat hanya menerima nilai yang ditaip selepas klik pertama: klik bucu pertama, muka atau titik untuk dialih dahulu. {{ui:Bulatan}} dan {{ui:Poligon}} menerima bilangan sisi sebelum klik pertama.
- **"Taip panjang seperti 3m, 10'6" atau 4m,3m."** ModelCraft tidak dapat membacanya. Semak koma perpuluhan (`2,5`): gunakan titik.

## Bentuk bermula di tempat yang salah pada skrin sentuh

**Simptom:** dengan jari, segi empat tepat pertama tidak mengapa, tetapi segi empat tepat, bulatan atau garisan seterusnya bermula di tempat sentuhan sebelumnya berakhir dan bukan di tempat anda menyentuh.

**Punca:** pepijat dalam binaan ini: pada skrin sentuh alat mengingati titik tangkapan terakhir dari gerak isyarat sebelumnya.

**Pembetulan:** ketik butang alat dalam bar alat sekali lagi sebelum setiap bentuk baharu. Itu memulakan alat semula, dan titik pertama jatuh di tempat anda menyentuh.

## Menyunting satu kumpulan menukar yang lain

**Simptom:** anda menyalin kumpulan dengan {{ui:Alih}} dan {{key:Ctrl}}, membuka satu salinan dan menyuntingnya, dan salinan yang lain turut berubah. {{ui:Garis besar}} menunjukkan kedua-duanya dengan nama yang sama.

**Punca:** dalam binaan ini, menyalin kumpulan membuat peletakan kedua bagi kumpulan yang sama, seperti komponen. Butang {{ui:Jadikan unik}} ModelCraft hanya ditawarkan untuk komponen.

**Pembetulan:** pilih salinan yang hendak anda ubah, klik {{ui:Jadikan komponen}} dalam {{ui:Maklumat entiti}}, kemudian {{ui:Jadikan unik}}. Salinan itu kini mempunyai kandungannya sendiri. Atau {{ui:Pecahkan}} ia.

## Tolak/tarik tidak melakukan apa yang saya jangkakan

- **"Tolak/tarik berfungsi pada muka. Klik muka."** Anda mengklik tepi atau ruang kosong. Alihkan penuding sehingga muka menyerlah, kemudian klik.
- **Muka berada dalam kumpulan.** Klik dua kali kumpulan itu untuk membukanya dahulu.
- **Tingkap tidak memotong dinding.** Segi empat tepat mesti dilukis pada muka dinding, bukan di hadapannya, dan dinding mesti mempunyai muka belakang. Lihat [Potong bukaan melalui dinding](topic:openings#if-it-did-not-cut-through).
- **Dua kotak bertindih tanpa bergabung.** Pepejal yang ditolak ke dalam satu sama lain tidak memotong atau bercantum antara satu sama lain dalam binaan ini.

## Garisan atau bentuk tidak membentuk muka

Muka hanya terisi apabila tepi menutup gelung rata. Semak bahawa titik terakhir ter-snap ke titik pertama ("Titik hujung"), dan bahawa semua tepi berada dalam satu satah. Gelung yang sedikit lari daripada satah kekal sebagai garisan. Lukis semula salah satu tepinya, dengan snap ke bucu.

## Saya tidak dapat memilih atau memadam muka

- Dengan {{ui:Pilih}}, klik berhampiran tepi akan mengambil tepi itu. Klik lebih dekat dengan tengah muka.
- {{ui:Pemadam}} tidak memilih muka. Pilih muka dan tekan {{key:Delete}}, atau padam salah satu tepinya.
- Jika ia tergolong dalam kumpulan atau komponen, klik itu memilih keseluruhan benda. Klik dua kali untuk membukanya.

## "Pilih sesuatu untuk dialih dahulu, atau klik padanya."

{{ui:Alih}}, {{ui:Putar}} dan {{ui:Skala}} memerlukan sesuatu untuk diusahakan: pilihnya dahulu, atau mulakan alat dengan mengklik benda itu sendiri (bukan ruang kosong atau panduan).

## "Pilih geometri dahulu (seret tetingkap, atau klik tiga kali untuk memilih semua yang bersambung)."

{{key:G}} dan {{key:Shift+G}} memerlukan pilihan. Panduan tidak boleh dikumpulkan.

## Kekunci anak panah berorbit dan bukannya mengunci

Kunci hanya berfungsi selepas klik pertama alat lukisan atau penyuntingan. {{ui:Tolak/tarik}} tidak mempunyai kunci, dan dalam {{ui:Putar}} ia tidak mengubah pusingan. Pada masa lain, kekunci anak panah mengorbitkan paparan.

## Esc dalam skrin penuh

Dalam skrin penuh, pelayar mungkin menggunakan {{key:Esc}} pertama untuk keluar dari skrin penuh. Tekan {{key:Esc}} sekali lagi untuk membatalkan alat.

## Tiada butang tengah

Tekan {{key:O}} untuk {{ui:Orbit}} dan seret, atau gunakan kekunci anak panah. Lihat [Orbit, pan dan zum](topic:orbit-pan-zoom#without-a-middle-button).

## Import

| Mesej | Apa yang perlu dilakukan |
|---|---|
| "ModelCraft mengimport SketchUp (.skp), Collada (.dae), OBJ, glTF (.glb/.gltf), FBX, PLY, STL, Alembic (.abc), DWG dan DXF. … bukan salah satu daripada ini." | Eksport model dari program lain dalam salah satu format ini |
| "Fail ini melebihi 300 MB." | Permudahkan atau pisahkan model dalam program lain |
| "…terlalu besar untuk dimodelkan di sini (lebih 2 juta bucu)." | Sama seperti di atas |
| "Fail .gltf ini memerlukan "…"…" | Lepaskan `.gltf` bersama fail `.bin` dan tekstur, atau buka versi `.glb` |
| "Fail glTF ini memerlukan sambungan …, yang ModelCraft belum baca lagi." | Eksport semula dari program lain tanpa sambungan itu (tekstur KTX2, sebagai contoh) |
| OBJ diimport tanpa warna atau teksturnya | Lepaskan `.obj` bersama `.mtl` dan gambarnya |
| "Fail Alembic ini menggunakan susun atur HDF5 lama…" | Simpan semula dari program lain sebagai fail Ogawa Alembic |
| FBX diimport tanpa teksturnya | Lepaskan `.fbx` bersama gambar teksturnya, atau benamkan media semasa eksport |
| "Fail FBX ini ialah versi …, yang ModelCraft tidak baca" | Eksport semula sebagai FBX 2011 atau lebih baharu |
| STL atau PLY diimport 1,000 kali terlalu besar atau terlalu kecil | STL dibaca sebagai milimeter dan PLY sebagai meter: skalakan (lihat [Putar dan skala](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)) |
| "Ini bukan fail Collada (.dae)…" atau "…XML tidak terbentuk dengan betul…" | Fail rosak atau bukan Collada. Eksport semula |
| "Fail Collada ini tiada geometri yang ModelCraft boleh import." | Ia hanya mengandungi kamera, lampu atau rujukan kepada fail lain |
| "Ini DXF binari. Simpan sebagai DXF ASCII dan cuba lagi." | Simpan semula dari program CAD sebagai ASCII |
| "Ini bukan lukisan DWG…" | Fail bukan DWG, atau ia rosak |
| "Lukisan ini tidak dapat dibaca (…). Ia mungkin rosak, atau disimpan dalam versi DWG yang pembaca tidak kendalikan…" | Kurungan memberi sebabnya. Simpan sebagai DXF, atau sebagai DWG dari AutoCAD 2000 hingga 2018, dari program CAD |
| "Lukisan ini sampai lebih 10,000 km dari asalnya…" | Alihkan lukisan berhampiran 0,0 dalam program CAD |

### Import bersaiz salah atau terbaring di sisi

- **OBJ:** OBJ tidak mempunyai unit; ModelCraft membaca meter. Model milimeter diimport 1000 kali terlalu besar: [skalakannya](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size) dengan `0.001`; model inci dengan `0.0254`.
- **OBJ terbaring di sisi:** ModelCraft menjangka fail OBJ dengan Y ke atas. Fail yang ditulis dengan Z ke atas diimport dalam keadaan terbaring. Putarkan 90° mengikut paksi merah: klik pusat {{ui:Putar}} pada muka yang menghadap sepanjang merah, atau buka fail dalam programnya dan eksport dengan Y ke atas.
- **DWG atau DXF:** anda memilih unit yang salah dalam dialog Unit lukisan. Buat asal dan import semula.

## Membuka fail

| Mesej | Apa yang perlu dilakukan |
|---|---|
| "Fail ini bukan model ModelCraft (ia bukan JSON)." | Gunakan {{ui:Import}} untuk format lain |
| "Ini bukan fail ModelCraft yang boleh kami buka: …" | Fail rosak atau diubah dengan tangan |
| "Model ini disimpan oleh ModelCraft yang lebih baharu…" | Buka dalam versi yang lebih baharu |
| "Fail ini melebihi 200 MB." | Model terlalu besar untuk dibuka di sini |

## Saya kehilangan kerja

ModelCraft tidak menyimpan ke fail dengan sendirinya. Apabila anda menutup atau memuat semula tab dengan perubahan yang belum disimpan, pelayar bertanya dahulu ("Tinggalkan laman?" atau "Muat semula laman?"); pilih untuk kekal dan simpan. Baharu dan Buka juga bertanya ("Perubahan yang belum disimpan"). Jika pelayar atau komputer ranap, buka ModelCraft semula dalam pelayar yang sama: ia menawarkan kembali kerja yang belum disimpan ("Pulihkan kerja anda?"; lihat [Pulihkan kerja anda](common:recover)). Simpan dengan kerap menggunakan {{key:Mod+S}}.

## Folder muat turun saya dipenuhi salinan

Setiap simpanan ialah muat turun baharu, dinamakan `Untitled (1).modelcraft`, `Untitled (2).modelcraft` dan seterusnya. Padam yang lama, atau tetapkan pelayar untuk bertanya di mana hendak menyimpan setiap fail dan menulis ganti fail lama sendiri. Lihat [Buka, simpan, import dan eksport](topic:files#save-a-model).

## Ia menjadi perlahan

- Setiap langkah buat asal menyimpan salinan model (sebuah [mesh](topic:meshes) hanya menyimpan apa yang berubah), jadi pada import geometri tolak/tarik yang sangat besar setiap suntingan mengambil masa lebih lama. Pecahkan atau padam apa yang tidak diperlukan, simpan, dan buka semula: membuka semula juga mengosongkan sejarah buat asal.
- Bayang matahari paling mahal. Nyahtandakan {{ui:Bayang matahari}} semasa anda memodel.

## Tiada bayang

{{ui:Bayang matahari}} dimatikan, matahari terbenam pada masa yang anda pilih ("Matahari terbenam pada masa ini."), atau gayanya ialah {{ui:Rangka dawai}}, yang tidak melukis bayang.

## "Pelayar ini tidak membenarkan skrin penuh."

Sesetengah pelayar dan pandangan terbenam menolak skrin penuh. Gunakan skrin penuh pelayar sendiri ({{pick:mac=Control-Command-F|windows linux=F11}}) sebagai gantinya.

## ModelCraft tidak dibuka tanpa sambungan

ModelCraft hanya dibuka luar talian selepas ia disimpan untuk kegunaan luar talian dalam pelayar itu: butang bar aplikasi mesti menunjukkan {{ui:Sedia untuk luar talian}}. Buka semasa dalam talian dan klik {{ui:Simpan untuk luar talian}}. Jika butang menunjukkan {{ui:Tidak dapat menyimpan}}, klik sekali lagi pada sambungan yang lebih baik; {{ui:Luar talian tidak tersedia}} bermaksud tetingkap ini (tetingkap persendirian, atau komputer yang diurus) tidak dapat menyimpan salinan. Lihat [Bekerja luar talian](common:offline).
