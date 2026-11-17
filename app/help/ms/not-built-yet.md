---
title: Belum dibina
summary: Apa yang belum dilakukan oleh binaan ModelCraft ini, dan apa yang perlu dilakukan sebagai ganti hari ini.
keywords: hilang, belum lagi, had, peta jalan, bahan, tekstur, teks, lapisan, pangkas, pisah, awan, desktop
from: 179fa5e4
---

ModelCraft ialah binaan awal. Halaman ini menyenaraikan apa yang belum dilakukannya, supaya anda tidak mencarinya, dan cara terdekat untuk menyelesaikan kerja hari ini.

## Alat lukisan

| Belum lagi | Sebagai ganti, hari ini |
|---|---|
| Lukisan tangan bebas | Klik titik dengan {{ui:Lengkung}} |
| Menukar bilangan segmen lengkung atau bulatan selepas melukisnya | Padam dan lukis semula selepas menaip `24s` |
| Memilih fon untuk [teks 3D](topic:text3d), atau menyunting perkataannya selepas meletakkannya | Padam dan tambah semula teks |
| Menukar sudut dengan menaip ke dalam dimensi sudut, atau saiz silinder dari dimensi bulatannya | Putar tepi dengan {{ui:Putar}}; skalakan silinder dengan {{ui:Skala}} |
| Dimensi dalam fail model yang dieksport | Dimensi ditunjukkan dalam imej, cetakan dan PDF pandangan; fail model hanya membawa geometri |
| Pangkas, Pisah dan Cangkerang luar | [Gabung, Tolak dan Persilang](topic:solids) kumpulan tertutup, atau [persilang muka](topic:intersect) dan padam apa yang tidak diperlukan |
| Memilih paksi putaran dengan kekunci anak panah | Klik pusat {{ui:Putar}} pada muka yang menghadap arah yang paksi sepatutnya tunjuk |
| Kunci pada lebih daripada satu inferens pada satu masa | Kunci satu arah dengan kekunci anak panah, kemudian snap ke titik |
| Mengubah saiz sepanjang kecerunan, atau dari hujung dimensi yang tidak berada pada bucu | Letakkan dimensi pada dua bucu, sepanjang tepi atau sepanjang merah, hijau atau biru |

## Animasi

| Belum lagi | Sebagai ganti, hari ini |
|---|---|
| Menganimasikan muka, tepi, masa siang matahari, gaya atau apa yang disembunyikan | Jadikan bahagian yang bergerak sebagai kumpulan atau komponen; render video berasingan untuk masa siang lain |
| Kamera yang mengikuti laluan yang dilukis, atau memandang objek yang bergerak | Tetapkan lebih banyak kunci kamera sepanjang laluan ([Animasi](topic:animation)) |
| Bunyi dalam video, dan video berkualiti tinggi (path-traced) tanpa WebGPU | Tambah bunyi dalam penyunting video; tanpa WebGPU, render video dengan perender pantas ([Render video](topic:animation#render-the-video)) |
| Lampu beranimasi (kecerahan, sebaran, warna) dalam video yang dirender, sudut kanta yang dianimasikan tanpa kunci kamera dalam video, menganimasikan bahan atau tetapan render | Lampu beranimasi dalam pandangan; untuk video, kunci kamera juga untuk zum; render video berasingan untuk tetapan lampu yang berbeza ([Animasi mana-mana sifat](topic:animate)) |
| Memindahkan berat atau tulang dari satu sisi ke sisi lain, sampul tulang yang boleh dilihat, menunjukkan berat berlorek titik demi titik (ia ditunjukkan bagi setiap muka), melihat mesh yang dipose semasa melukis berat | Cat kedua-dua sisi, atau buat satu separuh dan guna pengubah suai Mirror sebelum armature ditambah; tukar antara Cat berat dan Pose untuk menyemak |
| Tulang dibaca dari fail glTF, FBX atau USD sebagai armature, dan armature ditulis ke fail tersebut | Model berkulit masuk dalam keadaan rehat dengan berat fail; tambah tulang mengikut susunan sendi fail, kemudian {{ui:Guna pemberat fail}} ([Animasi](topic:animate)) |
| Menggerakkan sasaran IK atau kutub dengan menyeretnya dalam pandangan, ruang sendiri kekangan (tempatan atau dunia) untuk dipilih, meregangkan rantai IK, IK sepanjang lengkung | Taip titik sasaran, atau halakan kepada objek dan alihkannya; kekalkan rantai pada panjangnya |
| Kain, bendalir, jasad lembut, sendi dan engsel antara jasad tegar, perlanggaran dengan bentuk tepat objek (hanya kotak dan bola yang mengelilinginya), simulasi langsung semasa anda main, kelajuan atau putaran permulaan (jasad bermula dalam keadaan rehat) | Bakar jasad tegar dan main kuncinya; bina engsel daripada kunci; pecahkan bentuk ganjil kepada kotak (kumpulan) |
| Mengeksport animasi ke glTF atau fail model lain | Render video; fail `.modelcraft`, dan [fail USD](topic:usd) yang disimpan ModelCraft, kekalkannya untuk ModelCraft |
| Menaip ulasan atau tajuk pada isu dalam VR, nota suara, menggerakkan satah keratan dengan tangan dalam VR | Letakkan isu dalam VR, kemudian tambah perkataannya dalam program BCF; tetapkan satah keratan dalam pandangan sebelum masuk: lihat [Semak model dengan set kepala VR](topic:vr-review) |
| Melihat orang di meja dalam VR (hanya orang dalam VR yang ditunjukkan), merakam perjalanan VR | Minta mereka menyertai dalam VR, atau buat [animasi](topic:animation) perjalanan itu |

## Mesh

| Belum lagi | Sebagai ganti, hari ini |
|---|---|
| Pahatan mengikut aras (multiresolusi), dan Perincian yang membuang segi tiga yang menjadi kecil | [Pahat](topic:sculpt) mesh yang dibahagikan; {{ui:Remesh}} untuk meratakannya semula |
| Remesh kepada muka empat sisi yang mengikut bentuk | {{ui:Remesh}} (segi tiga sama saiz), kemudian bina semula dengan [Retopologi](topic:mesh-edit#retopology) |
| Berat dicat pada bucu untuk pengubah suai (Displace, Smooth dan Shrinkwrap berfungsi pada keseluruhan mesh) | Guna pengubah suai, kemudian pahat atau sunting bahagian yang memerlukannya |
| Salin dan tampal bucu, tepi atau muka, potongan pisau yang berakhir di dalam muka, tepi wayar tanpa muka | Duplikasi mesh dalam Model; potong dengan pisau dari tepi ke tepi; [Ekstrud](topic:mesh-edit#change-the-shape) tepi terbuka menjadi muka |

## Penyusunan dan paparan

| Belum lagi | Sebagai ganti, hari ini |
|---|---|
| Lapisan pelan tapak DWG dan DXF sebagai tag | Pelan tapak masuk sebagai satu kumpulan: pecahkannya dan kumpulkan bahagian yang anda mahu tag |
| Beberapa potongan keratan sekaligus, kotak keratan, atau garis besar keratan yang dieksport sebagai lukisan | Satu [satah keratan](topic:sections) memotong satu pada satu masa; eksport pandangan sebagai imej |
| Menunjukkan tepi lembut sebagai garis putus-putus, atau melembutkan semasa anda menyeret peluncur | [Lembutkan mengikut sudut](topic:soften) dalam {{ui:Maklumat entiti}}, dan {{ui:Buat asal}} untuk mencuba sudut lain |
| Perpustakaan model dalam talian untuk dicari, atau komponen dengan pilihan untuk dipilih (warna, gaya) | [Perpustakaan permulaan](topic:starter); import model Collada, OBJ atau glTF; [regangkan](topic:stretch) salinan mengikut saiz |
| Meletakkan tumbuhan dari perpustakaan tumbuhan | [Serakkan](topic:live-view#scatter-plants-rocks-and-people) tumbuhan dalam pandangan langsung, atau letakkan pokok dari perpustakaan permulaan |
| Salinan bebas bagi sesuatu kumpulan | Jadikannya komponen, kemudian {{ui:Jadikan unik}} (lihat [Penyelesaian masalah](topic:troubleshooting#editing-one-group-changed-another)) |

## Merender

| Belum lagi | Sebagai ganti, hari ini |
|---|---|
| Merender dalam pandangan (ruang kerja {{ui:Render}}), barisan render, dan pilihan kamera, imej langit, kabus dan pencampuran cahaya tanpa WebGPU | {{ui:Render imej…}} dalam {{ui:Kualiti tinggi}} menggunakan penjejak laluan WebGL di sana, tanpa pilihan tersebut ([Render imej](topic:render#high-quality)) |
| Program lain melukis gambar Render tanpa add-on enjin render (CadCraft tidak pernah menjalankan program di bawah lesen GNU GPL); kamera panorama atau stereo dan imej langit melalui program lain; plug-in Unreal Engine (fail ditulis, plug-in yang membukanya belum dikeluarkan) | Enjin penjejak Fast dan Path kami sendiri; enjin add-on; fail folder USD, glTF atau Unreal dari senarai Enjin untuk dibawa ke mana-mana program ([lukis gambar dengan program lain](topic:render-other-program)) |
| Pepohon dan batu yang diserakkan dalam {{ui:Render imej…}} | Ia ditunjukkan dalam [pandangan langsung](topic:live-view), panoramanya, penonton dan video |

## Bahan dan warna

| Belum lagi | Sebagai ganti, hari ini |
|---|---|
| Input selain warna asas, kekasaran, kemetalan, kelegapan, normal dan pancaran berubah merentasi permukaan dalam gambar berkualiti tinggi (mereka menggunakan purata) | [Buat bahan dengan nod](topic:shading): sambungkannya juga, pandangan menunjukkannya berubah |
| Anjakan pada muka tolak/tarik | Tukar objek kepada mesh untuk anjakan |
| Berkongsi bahan anda sendiri ke Perpustakaan dari aplikasi, dan peta ARM/ORM atau EXR dalam set tekstur yang diimport | Simpan dalam fail; import peta berasingan sebagai PNG atau JPEG |
| Bahan fail dalam sesi Live TeamWork (ia kekal di komputer yang membuatnya) | Simpan fail dan kongsikannya |
| Decal yang membengkok pada permukaan melengkung, decal dalam Buat asal, atau melukis tekstur beberapa muka sekaligus merentasi jahitan | Letakkan decal yang lebih kecil pada setiap bahagian; cat setiap sisi jahitan secara berasingan |
| Membakar pada muka tolak/tarik, membakar beberapa objek ke dalam satu gambar, sangkar yang anda bentuk dengan tangan, atau pencahayaan bakar daripada lampu | Tukar kepada mesh dan bukakan lipatannya; bakar setiap objek; tingkatkan jarak carian; render gambar untuk cahaya lampu |
| Melukis kekasaran, kemetalan atau ketinggian, melukis dengan gambar (cop) dan melukis tekstur lebih besar daripada 512 × 512 | Cat warna asas di sini; buat peta lain dalam penyunting gambar dan import sebagai set tekstur |
| Tekstur dalam eksport Collada, STL, PLY, 3MF, IFC, DWG dan DXF, dan graf nod bagi bahan fail dalam model yang dieksport | Format tersebut mendapat warna setiap bahan; glTF dan OBJ membawa tekstur yang diimport; eksport bahan sahaja sebagai [MaterialX](topic:shading#materialx); [USD](topic:usd) menyimpan keseluruhan model untuk ModelCraft |
| Tekstur dalam fail Collada | Ia dikira dan ditinggalkan semasa import; tekstur dalam fail `.skp` dan `.glb` masuk |

## Fail

| Belum lagi | Sebagai ganti, hari ini |
|---|---|
| Menyimpan fail SketchUp, dan teks serta dimensi daripadanya | [Import](topic:import-sketchup-files) mengekalkan muka, warna dan tekstur; eksport Collada (`.dae`) untuk kembali ke SketchUp |
| Dimensi dan panduan dalam eksport DWG dan DXF | Tambahkannya dalam program CAD selepas mengeksport |
| Titik, jadual dan multipetunjuk dari DWG dan DXF | Ia dikira dan ditinggalkan; teks masuk sebagai tulisan garis tunggal, bukan fon lukisan |
| Permukaan, mesh, jadual dan multipetunjuk dari DWG dan DXF; muka pepejal 3D pada permukaan bebas bentuk yang dipusing, dilofta atau lain-lain | Ia dikira dan ditinggalkan juga (pepejal 3D itu sendiri masuk). Eksport bahagian itu dari program CAD sebagai OBJ atau Collada dan import fail itu |
| Jenis IFC, sifat atau bahan | Eksport IFC mempunyai [tingkat](topic:formats#ifc-ifc) dan elemen generik; tambah yang lain dalam program BIM |
| Menghantar model terus ke BimCraft | Eksport {{ui:IFC untuk BimCraft (.ifc)}} dan buka dalam BimCraft |
| Tepi longgar dalam glTF dan STL | Gunakan OBJ atau Collada untuk kerja garisan |
| Bahan glTF dan FBX melebihi warna asas (logam, kekasaran, peta normal, kaca, lapisan jernih, kilauan…) | Ia dibaca dan disenaraikan; ModelCraft mengekalkan warna asas atau tekstur. Bina semula rupa itu dalam [ruang kerja Pembayangan](topic:shading) |
| Tulang, animasi dan sasaran morf glTF | Model berkulit masuk dalam keadaan berdiri seperti rehatnya; animasikan dalam [garis masa](topic:animation) |
| Warna dan nama bahagian pemasangan dari fail STEP | Bahagian masuk sebagai mesh pada saiz sebenar; [cat](topic:paint) dan namakannya selepas import |
| Objek SubD, teks, dimensi dan lampu dari fail `.3dm` | Lihat [apa yang ditinggalkan](topic:import-3dm-files#what-is-left-out-and-said); tukar SubD kepada mesh dalam program yang membuat fail itu |
| Tekstur KTX2 dan varian bahan dalam glTF | Eksport dengan tekstur PNG atau JPEG; varian lalai digunakan |
| Menulis instancing glTF (EXT_mesh_gpu_instancing) | Komponen ditulis sekali dan diletakkan banyak kali, yang dibaca oleh setiap penonton |
| Animasi Alembic (setiap sampel satu cache), titik dan lengkung Alembic, menulis Alembic | Sampel pertama masuk; animasikan dalam [garis masa](topic:animation); tulis glTF, USD atau OBJ |
| Peta bump dan normal dalam bahan OBJ | Hanya gambar warna (`map_Kd`) masuk |
| Tulang dan animasi FBX, eksport FBX, fail FBX 6 | Model berkulit masuk dalam keadaan rehat; eksport glTF; simpan fail lama sebagai FBX 2011 atau lebih baharu |
| Kulit, morf, kamera, lampu, transformasi look-at dan skew Collada, rujukan luaran | Ditinggalkan semasa import dan dikira dalam mesej |
| Fail sandaran | {{ui:Simpan sebagai}} ({{key:Mod+Shift+S}}) menyimpan salinan lain. Selepas ranap, ModelCraft menawarkan kerja anda yang belum disimpan ("Pulihkan kerja anda?") |
| Simpanan awan dan penyegerakan antara komputer | Belum tersedia. Simpan fail ke komputer anda, dan salin ke tempat yang anda perlukan |

## Cetakan 3D

| Belum lagi | Sebagai ganti, hari ini |
|---|---|
| Sokongan pemotong sebenar (antara muka, rakit, corak penyokong yang tepat) | [Pratonton penyokong](topic:print-tools#supports-preview) menunjukkan di mana dan kira-kira berapa banyak; pratonton pemotong anda menunjukkan yang sebenar |
| Mengurai bahagian yang melalui dirinya sendiri, atau tepi tempat tiga muka atau lebih bertemu | [Baiki](topic:print-tools#repair) menyenaraikannya beserta lokasinya; gunakan [Persilang muka](topic:intersect) dan padam apa yang ada di dalamnya |
| Corak isi dan kekisi di dalam bahagian berongga | [Berongga](topic:print-tools#hollow) membiarkannya kosong; pemotong anda menambah isi kepada bahagian pepejal |
| Butiran terlalu kecil untuk muncung anda (selain dinding) | [Ketebalan dinding](topic:print-tools#wall-thickness) mencari dinding nipis; pratonton lapisan pemotong anda menunjukkan selebihnya |

## Prestasi

Buat asal menyimpan salinan model untuk setiap langkah ([mesh](topic:meshes) hanya menyimpan apa yang berubah), jadi import besar geometri tolak/tarik menjadikan setiap suntingan lebih perlahan. Kekalkan import ringkas, dan simpan serta buka semula untuk mengosongkan sejarah.

## Aplikasi dan platform

- **Desktop:** ModelCraft berjalan dalam pelayar pada Mac, Windows dan Linux, dan dalam CadCraft Studio, aplikasi desktop dengan kesemua lapan aplikasi dalam satu pemasangan. Pada Android, CadCraft Studio dipasang dari APK di getcadcraft.com/download. Belum ada binaan iPad atau iPhone.
- **Sentuhan:** lihat [Orbit, pan dan zum](topic:orbit-pan-zoom) untuk gerak isyarat jari. Tekanan pen menetapkan berus dalam [Pahat](topic:sculpt); di tempat lain tekanan dan kecondongan pen tidak digunakan.
- **Helaian:** ModelCraft [mencetak satu pandangan setiap halaman](topic:export-model#print-the-view-or-save-it-as-a-pdf); tiada susun atur helaian dengan beberapa pandangan atau blok tajuk. Eksport ke DWG/DXF mesra CadCraft untuk lukisan mengikut skala.
