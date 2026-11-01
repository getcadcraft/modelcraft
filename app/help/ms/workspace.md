---
title: Skrin ModelCraft
summary: Lawatan bar alat, panel di setiap sisi, paparan 3D dan bar status, mengikut nama pada skrin.
keywords: skrin, susun atur, bar alat, panel, garis besar, maklumat entiti, gaya, adegan, bar status, kotak nilai, unit, antara muka, lawatan
from: 4a9a4516
---

Dari atas ke bawah: bar aplikasi, bar alat, tiga lajur (panel kiri, paparan 3D, panel kanan) dan bar status.

## Bar aplikasi

Bar nipis di bahagian paling atas dikongsi oleh setiap aplikasi CadCraft. Ia mempunyai nama dan versi aplikasi, {{ui:About ModelCraft}} (Perihal ModelCraft), butang mod skrin dan suis {{ui:Paper}} / {{ui:Model}}.

- {{ui:Paper}} ialah tema cerah dan {{ui:Model}} ialah tema gelap. Paparan 3D menukar warnanya agar sepadan; model anda tidak berubah.
- Butang mod skrin (ia dibaca {{ui:Full screen}} pada mulanya) dan {{key:Ctrl+Shift+F}} bergilir antara tiga mod: biasa, skrin penuh, dan skrin penuh dengan bar disembunyikan. Dengan bar disembunyikan, tunjuk ke tepi atas skrin (atau ketik) untuk membawanya kembali. {{key:Esc}} keluar daripada skrin penuh.

:::note
{{key:Ctrl+Shift+F}} menggunakan kekunci Control pada setiap komputer, termasuk Mac. Pada iPhone, di mana pelayar tidak mempunyai skrin penuh, butang itu hanya menyembunyikan dan menunjukkan bar.
:::

## Bar alat

Bar alat dibahagikan kepada kumpulan berlabel. Halakan butang untuk melihat namanya dan kekuncinya.

Di sebelah kirinya, senarai {{ui:Workspace}} menukar apa yang bar alat dan panel kanan digunakan untuk: {{ui:Model}} (pemodelan tolak/tarik, lawatan di bawah), {{ui:Mesh}} ([sunting jejaring](topic:mesh-edit)), {{ui:Curve}} ([objek lengkung](topic:curves)), {{ui:UV}} ([susun atur UV](topic:uv)), {{ui:Sculpt}} ([pahat](topic:sculpt)), {{ui:Shading}} ([bahan dibuat dengan nod](topic:shading)), {{ui:Animate}} ([animasi](topic:animate)) dan {{ui:Render}} ([render dalam paparan](topic:render#render-in-the-view)).

| Kumpulan | Butang |
|---|---|
| Fail | {{ui:New}}, {{ui:Open}}, {{ui:Save}}, {{ui:Import}}, {{ui:Export}} (menu format) |
| Lukis | {{ui:Line}} ({{key:L}}), {{ui:Rectangle}} ({{key:R}}), {{ui:Circle}} ({{key:C}}), {{ui:Polygon}} ({{key:N}}) |
| Ubah | {{ui:Select}} ({{key:Space}}), {{ui:Push/pull}} ({{key:P}}), {{ui:Move}} ({{key:M}}), {{ui:Rotate}} ({{key:Q}}), {{ui:Scale}} ({{key:S}}), {{ui:Eraser}} ({{key:E}}), {{ui:Tape}} ({{key:T}}) |
| Susun | {{ui:Component}} ({{key:G}}), {{ui:Group}} ({{key:Shift+G}}), {{ui:Explode}} |
| Sunting | {{ui:Undo}} ({{key:Mod+Z}}), {{ui:Redo}} ({{key:Mod+Y}}), {{ui:Copy}} ({{key:Mod+C}}), {{ui:Paste}} ({{key:Mod+V}}), {{ui:More}} (menu: potong, salin, tampal, tampal di tempat yang sama {{key:Mod+Shift+V}}, pendua {{key:Mod+D}}, padam, pilih semua, nyahpilih semua, dan gaya kekunci) |
| Kamera | {{ui:Orbit}} ({{key:O}}), {{ui:Pan}} ({{key:H}}), {{ui:Zoom}} ({{key:Z}}), {{ui:Extents}} ({{key:Shift+Z}}), {{ui:Views}} (menu) |

Kekunci yang ditunjukkan ialah kekunci tolak/tarik; dengan gaya {{ui:Keys: Modeler}} dipilih dalam [tetapan ModelCraft](topic:settings), tip alat menunjukkan kekunci tersebut. Alat yang sedang anda gunakan ditunjukkan ditekan. Pada skrin sempit, bar alat bergulir ke sisi.

Menu {{ui:Views}} mempunyai {{ui:Iso}}, {{ui:Top}}, {{ui:Front}}, {{ui:Right}}, {{ui:Back}}, {{ui:Left}} dan {{ui:Bottom}}, setiap satu disesuaikan dengan model, dan {{ui:Perspective}}, yang bertukar antara unjuran perspektif dan unjuran selari.

## Paparan 3D

Bahagian tengah skrin. Garisan merah, hijau dan biru ialah paksi: merah dan hijau terletak di atas tanah, biru menghala ke atas, dan **utara ialah paksi hijau**. Tempat ia bertemu ialah asalan.

- Apabila anda bermula, kad bertajuk "Mula memodel" menyenaraikan beberapa kekunci pertama. Ia hilang apabila anda memilih alat lukisan atau klik dalam paparan.
- Semasa alat sedang bekerja, paparan menunjukkan **penanda inferens**: bentuk kecil berwarna di tempat penunjuk melekat (bulatan hijau di titik hujung, satu cyan di titik tengah, segi empat merah di tepi, berlian biru di muka). Lihat [Inferens dan snap](topic:inference).
- Benda yang dipilih bertukar biru. Muka yang dilihat dari belakang ialah biru-kelabu.
- Apabila anda membuka kumpulan untuk disunting, semua di luarnya pudar, dan paksi bergerak ke paksi kumpulan itu sendiri.
- Apabila model mempunyai adegan, baris tab adegan muncul di atas paparan.
- Lepaskan fail di mana-mana pada paparan untuk membukanya atau mengimportnya.

## Panel kiri

**{{ui:Outliner}}** menyenaraikan kumpulan dan komponen dalam model, bersarang mengikut cara ia bersarang dalam model. Komponen yang digunakan lebih daripada sekali menunjukkan berapa kali, seperti "Window (4)".

- Klik nama untuk memilihnya. Klik dua kali untuk membukanya untuk disunting.
- **Cari mengikut nama** (ditunjukkan apabila ada dua kumpulan atau lebih) hanya menyimpan baris yang namanya sepadan, bersama kumpulan tempat ia berada. {{key:Esc}} mengosongkannya.
- **Mata** di hujung baris menyembunyikan atau menunjukkan kumpulan atau komponen itu (seperti {{ui:Edit}} › {{ui:More}} › {{ui:Hide}} lakukan). Ikon tag bermaksud ia disembunyikan oleh [tag](topic:tags).
- **Namakan semula di tempat:** klik baris, kemudian tekan {{key:F2}}, taip, dan tekan {{key:Enter}} ({{key:Esc}} mengekalkan nama lama).
- **Seret baris** ke tengah baris kumpulan lain untuk mengalihkannya ke dalam kumpulan itu, ke tepi atas atau bawah baris untuk meletakkannya sebelum atau selepas baris itu, atau ke tajuk {{ui:Outliner}} untuk mengalihkannya ke aras atas. Ia kekal di tempatnya dalam model, dan mengekalkan warna, tag dan namanya. Kumpulan tidak boleh berada di dalam dirinya sendiri. Setiap pengalihan ialah satu langkah buat asal. Lihat [Susun semula dalam Garis besar](topic:groups-components#rearrange-in-the-outliner).
- Semasa anda menyunting dalam kumpulan, baris dibaca "Menyunting: Model › …", dan butang {{ui:Close group}} muncul. Ia menutup setiap aras yang dibuka serentak.

**{{ui:Components}}** menyenaraikan setiap definisi komponen dengan berapa banyak salinan diletakkan ("3×") dan butang {{ui:Place}} yang menambah satu lagi salinan di tempat anda klik.

## Panel kanan

**{{ui:Entity info}}** menerangkan apa yang dipilih. Tajuknya berubah untuk menyatakan apa itu:

| Tajuk | Menunjukkan | Butang |
|---|---|---|
| Model (tiada apa dipilih) | Muka, tepi, kumpulan, komponen dan berapa banyak diletakkan, panduan, saiz keseluruhan | {{ui:Delete all guides}} (apabila ada panduan) |
| Muka | Luas, bilangan lubang | {{ui:Reverse face}} |
| Tepi | Panjang | tiada |
| Kumpulan atau Komponen | Nama (taip untuk menamakan semula), berapa kali diletakkan, sama ada ia pepejal tertutup, isipadunya, saiznya | {{ui:Edit}}, {{ui:Explode}}, {{ui:Make unique}} (komponen yang diletakkan lebih daripada sekali), {{ui:Make component}} (kumpulan) |
| Titik panduan atau garis panduan | tiada | {{ui:Delete}} |
| Beberapa benda | Berapa banyak muka, tepi, kumpulan dan panduan, jumlah luas muka | {{ui:Make component (G)}}, {{ui:Make group (Shift+G)}} |

**{{ui:Style}}** menetapkan cara model dilukis: {{ui:Faces}} ({{ui:Shaded}}, {{ui:Hidden line}}, {{ui:Wireframe}}, {{ui:X-ray}}), {{ui:Show edges}}, dan {{ui:Sun shadows}} dengan tarikh, masa dan tempat matahari. Lihat [Gaya dan bayang matahari](topic:styles-shadows).

**{{ui:Scenes}}** menyimpan pandangan: {{ui:Add scene}}, senarai adegan, dan {{ui:Previous}}, {{ui:Play}} dan {{ui:Next}}. Lihat [Simpan pandangan sebagai adegan](topic:scenes).

## Bar status

Di sepanjang bahagian bawah, dari kiri ke kanan:

1. **Tip**: apa yang alat mahu seterusnya, atau apa yang penunjuk sedang melekat ("Titik hujung", "Pada paksi merah").
2. **Mesej**: apa yang baru berlaku ("Tolak/tarik dibuat asal.", "Diimport site.dxf: 1697 tepi di atas tanah, dalam satu kumpulan.") atau mengapa sesuatu tidak berfungsi.
3. **Kotak nilai**: labelnya berubah mengikut alat ({{ui:Length}}, {{ui:Dimensions}}, {{ui:Radius}}, {{ui:Sides}}, {{ui:Distance}}, {{ui:Angle}}, {{ui:Scale}}, {{ui:Offset}}). Ia menunjukkan saiz hidup semasa anda bekerja, dan menerima apa yang anda taip. Lihat [Taip saiz tepat dalam kotak nilai](topic:value-box).
4. **Gaya kekunci**: {{ui:Keys: Push-pull}} atau {{ui:Keys: Modeler}} menukar pintasan papan kekunci dan butang tetikus serentak (sama seperti dalam [tetapan ModelCraft](topic:settings)).
5. **{{ui:Snap}} dan {{ui:Collide}}**: snap ke titik, tepi dan paksi, dan pepejal berhenti apabila bersentuh. Dicoret = mati. Klik untuk menukar. Lihat [tetapan ModelCraft](topic:settings).
6. **Pemilih unit**: unit panjang ditunjukkan. Lihat [Mula dengan ModelCraft](topic:getting-started#check-the-units-first).

## Pada skrin sempit

Di bawah kira-kira 760 piksel lebar (telefon, atau tetingkap sempit), paparan 3D mengekalkan skrin. Bar alat ialah satu baris yang bergulir ke sisi, dan panel dibuka sebagai helaian dari bar di bahagian bawah skrin.
