---
title: Belum dibuat
summary: Apa yang belum dilakukan build ModelCraft ini, dan apa yang bisa Anda lakukan sebagai gantinya hari ini.
keywords: hilang, belum, batasan, peta jalan, material, tekstur, teks, layer, pangkas, pisah, cloud, desktop
from: 179fa5e4
---

ModelCraft adalah build awal. Halaman ini mencantumkan apa yang belum dilakukannya, agar Anda tidak mencarinya, dan cara terdekat untuk menyelesaikan pekerjaan hari ini.

## Alat gambar

| Belum | Sebagai gantinya, hari ini |
|---|---|
| Gambar bebas | Klik titik-titik dengan {{ui:Kurva}} |
| Mengubah jumlah segmen busur atau lingkaran setelah digambar | Hapus dan gambar ulang setelah mengetik `24s` |
| Memilih jenis huruf untuk [teks 3D](topic:text3d), atau menyunting katanya setelah ditempatkan | Hapus lalu tambahkan teksnya lagi |
| Mengubah sudut dengan mengetik ke dimensi sudut, atau mengubah ukuran silinder dari dimensi lingkarannya | Putar tepinya dengan {{ui:Putar}}; skala silinder dengan {{ui:Skala}} |
| Dimensi di file model yang diekspor | Dimensi tampil di gambar, cetakan, dan PDF dari tampilan; file model hanya membawa geometri |
| Trim, Split dan Outer shell | [Union, Subtract dan Intersect](topic:solids) pada grup tertutup, atau [intersect faces](topic:intersect) lalu hapus yang tidak diperlukan |
| Memilih sumbu rotasi dengan tombol panah | Klik pusat {{ui:Putar}} pada muka yang menghadap ke arah sumbu yang seharusnya |
| Kunci pada lebih dari satu inferensi sekaligus | Kunci satu arah dengan tombol panah, lalu snap ke sebuah titik |
| Mengubah ukuran sepanjang kemiringan, atau dari ujung dimensi yang tidak berada di sudut | Letakkan dimensi di dua sudut, sepanjang tepi, atau sepanjang merah, hijau, atau biru |

## Animasi

| Belum | Sebagai gantinya, hari ini |
|---|---|
| Menganimasikan muka, tepi, waktu matahari, gaya, atau apa yang disembunyikan | Jadikan bagian yang bergerak sebagai grup atau komponen; render video terpisah untuk waktu siang yang lain |
| Kamera yang mengikuti jalur yang digambar, atau melihat objek yang bergerak | Atur lebih banyak kunci kamera di sepanjang jalan ([Animasikan](topic:animation)) |
| Suara dalam video, dan video berkualitas tinggi (path-traced) tanpa WebGPU | Tambahkan suara di editor video; tanpa WebGPU, render video dengan renderer cepat ([Render video](topic:animation#render-the-video)) |
| Lampu yang dianimasikan (kecerahan, sebaran, warna) dalam video yang dirender, sudut lensa yang dianimasikan tanpa kunci kamera dalam video, animasi material atau pengaturan render | Lampu beranimasi di tampilan; untuk video, kunci kamera juga untuk zoom; render video terpisah untuk pengaturan lampu yang berbeda ([Animasikan properti apa pun](topic:animate)) |
| Mencerminkan bobot atau tulang dari satu sisi ke sisi lain, amplop tulang yang terlihat, bobot yang ditampilkan berbayang titik demi titik (ditampilkan per muka), melihat mesh yang diposisikan saat mengecat bobot | Cat kedua sisi, atau buat satu setengah dan gunakan modifier Mirror sebelum armature ditambahkan; beralih antara Cat bobot dan Pose untuk memeriksa |
| Tulang yang dibaca dari file glTF, FBX, atau USD sebagai armature, dan armature yang ditulis ke file tersebut | Model ber-skin masuk dalam posisi diam dengan bobot dari file; tambahkan tulang sesuai urutan sambungan file, lalu {{ui:Pakai bobot dari file}} ([Animasikan](topic:animate)) |
| Memindahkan target IK atau kutub dengan menyeretnya di tampilan, memilih ruang constraint (lokal atau dunia), meregangkan rantai IK, IK sepanjang kurva | Ketik titik target, atau arahkan ke objek dan pindahkan objek itu; pertahankan rantai pada panjangnya |
| Kain, fluida, badan lunak, sambungan dan engsel antara badan kaku, tabrakan dengan bentuk tepat objek (hanya kotak dan bola yang mengelilinginya), simulasi langsung saat memutar, kecepatan atau putaran awal (badan mulai dalam keadaan diam) | Bake badan kaku dan putar kuncinya; buat engsel dari kunci; pecah bentuk yang aneh menjadi kotak (grup) |
| Mengekspor animasi ke glTF atau file model lain | Render video; file `.modelcraft`, dan [file USD](topic:usd) yang disimpan ModelCraft, tetap untuk ModelCraft |
| Mengetik komentar atau judul pada isu di VR, catatan suara, memindahkan bidang potong dengan tangan di VR | Letakkan isu di VR, lalu tambahkan katanya di program BCF; atur bidang potong di tampilan sebelum masuk: lihat [Tinjau model dengan headset VR](topic:vr-review) |
| Melihat orang di meja di VR (hanya orang di VR yang tampil), merekam jalan di VR | Minta mereka bergabung di VR, atau buat [animasi](topic:animation) dari jalannya |

## Mesh

| Belum | Sebagai gantinya, hari ini |
|---|---|
| Memahat per tingkat (multiresolusi), dan Detail yang menghilangkan segitiga yang menjadi kecil | [Pahat](topic:sculpt) mesh yang sudah dibagi subdivisi; {{ui:Buat ulang mesh}} untuk meratakannya kembali |
| Remesh menjadi muka segi empat yang mengikuti bentuk | {{ui:Buat ulang mesh}} (segitiga merata), lalu bangun ulang dengan [Retopology](topic:mesh-edit#retopology) |
| Bobot yang dicat pada vertex untuk modifier (Displace, Smooth, dan Shrinkwrap bekerja pada seluruh mesh) | Terapkan modifier, lalu pahat atau sunting bagian yang memerlukannya |
| Salin dan tempel vertex, tepi, atau muka, potongan pisau yang berakhir di dalam muka, tepi kawat tanpa muka | Duplikat mesh di Model; potong dengan pisau dari tepi ke tepi; [Extrude](topic:mesh-edit#change-the-shape) tepi terbuka menjadi muka |

## Mengatur dan melihat

| Belum | Sebagai gantinya, hari ini |
|---|---|
| Layer denah tapak DWG dan DXF sebagai tag | Denah tapak masuk sebagai satu grup: urai dan grupkan bagian yang ingin diberi tag |
| Beberapa potongan irisan sekaligus, kotak potong, atau garis luar potongan yang diekspor sebagai gambar | Satu [bidang potong](topic:sections) memotong dalam satu waktu; ekspor tampilan sebagai gambar |
| Menampilkan tepi lembut yang putus-putus, atau melembutkan saat Anda menyeret penggeser | [Lembutkan menurut sudut](topic:soften) di {{ui:Info entitas}}, dan urungkan untuk mencoba sudut lain |
| Pustaka model daring untuk dicari, atau komponen dengan opsi untuk dipilih (warna, gaya) | [Pustaka awal](topic:starter); impor model Collada, OBJ, atau glTF; [regangkan](topic:stretch) salinan ke ukuran |
| Menempatkan tanaman dari pustaka tanaman | [Sebar](topic:live-view#scatter-plants-rocks-and-people) tanaman di tampilan langsung, atau tempatkan pohon dari pustaka awal |
| Salinan independen dari sebuah grup | Jadikan komponen, lalu {{ui:Jadikan unik}} (lihat [Pemecahan masalah](topic:troubleshooting#editing-one-group-changed-another)) |

## Render

| Belum | Sebagai gantinya, hari ini |
|---|---|
| Rendering di tampilan (ruang kerja {{ui:Render}}), antrean render, dan opsi kamera, gambar langit, kabut, serta pencampuran cahaya tanpa WebGPU | {{ui:Render gambar…}} dengan {{ui:Kualitas tinggi}} memakai path tracer WebGL di sana, tanpa opsi-opsi itu ([Render gambar](topic:render#high-quality)) |
| Program lain yang menggambar Render gambar tanpa add-on mesin render (CadCraft tidak pernah menjalankan program di bawah lisensi GNU GPL); kamera panorama atau stereo, dan gambar langit lewat program lain; plug-in Unreal Engine (file-filenya ditulis, plug-in yang membukanya belum dirilis) | Mesin Fast dan Path tracer kami sendiri; mesin dari add-on; file folder USD, glTF, atau Unreal dari daftar Engine untuk dibawa ke program mana pun |
| Tanaman dan batu yang tersebar di {{ui:Render gambar…}} | Tampil di [tampilan langsung](topic:live-view), panoramanya, penampil, dan video |

## Material dan warna

| Belum | Sebagai gantinya, hari ini |
|---|---|
| Input selain warna dasar, kekasaran, metalik, opasitas, normal, dan emisi berubah di sepanjang permukaan dalam gambar kualitas tinggi (mereka memakai rata-ratanya) | [Buat material dengan node](topic:shading): hubungkan saja, tampilan akan menunjukkan variasinya |
| Displacement pada muka push/pull | Ubah objek menjadi mesh untuk displacement |
| Membagikan material Anda sendiri ke Library dari aplikasi, dan peta ARM/ORM yang dikemas atau EXR dalam set tekstur yang diimpor | Simpan di file; impor peta terpisah sebagai PNG atau JPEG |
| Material dari file dalam sesi Live TeamWork (material tetap di komputer yang membuatnya) | Simpan file dan bagikan |
| Dekal yang melengkung mengikuti permukaan melengkung, dekal dalam Urungkan, atau mengecat tekstur beberapa muka sekaligus melintasi sambungan | Letakkan dekal yang lebih kecil di setiap bagian; cat setiap sisi sambungan secara terpisah |
| Bake pada muka push/pull, bake beberapa objek menjadi satu gambar, kerangka yang Anda bentuk sendiri, atau pencahayaan bake dari lampu | Ubah menjadi mesh dan buka bungkusnya; bake setiap objek; naikkan jarak pencarian; render gambar untuk cahaya lampu |
| Mengecat kekasaran, metalik, atau tinggi, mengecat dengan gambar (stempel), dan mengecat tekstur yang lebih besar dari 512 × 512 | Cat warna dasar di sini; buat peta lain di editor gambar dan impor sebagai set tekstur |
| Tekstur dalam ekspor Collada, STL, PLY, 3MF, IFC, DWG, dan DXF, serta grafik node dari material milik file dalam model yang diekspor | Format tersebut mendapat warna setiap material; glTF dan OBJ membawa tekstur yang diimpor; ekspor satu material sendiri sebagai [MaterialX](topic:shading#materialx); [USD](topic:usd) menyimpan seluruh model untuk ModelCraft |
| Tekstur dalam file Collada | Dihitung dan dibuang saat impor; tekstur dalam file `.skp` dan `.glb` ikut masuk |

## File

| Belum | Sebagai gantinya, hari ini |
|---|---|
| Menyimpan file SketchUp, dan teks serta dimensi darinya | [Impor](topic:import-sketchup-files) mempertahankan muka, warna, dan tekstur; ekspor Collada (`.dae`) untuk kembali ke SketchUp |
| Dimensi dan panduan dalam ekspor DWG dan DXF | Tambahkan di program CAD setelah mengekspor |
| Titik, tabel, dan multileader dari DWG dan DXF | Dihitung dan dibuang; teks masuk sebagai huruf goresan tunggal, bukan font gambar |
| Permukaan, mesh, tabel, dan multileader dari DWG dan DXF; muka solid 3D pada permukaan swept, lofted, atau permukaan bebas lainnya | Juga dihitung dan dibuang (solid 3D itu sendiri ikut masuk). Ekspor bagian tersebut dari program CAD sebagai OBJ atau Collada, lalu impor itu |
| Tipe IFC, properti, atau material IFC | Ekspor IFC memiliki [lantai](topic:formats#ifc-ifc) dan elemen generik; tambahkan sisanya di program BIM |
| Mengirim model langsung ke BimCraft | Ekspor {{ui:IFC untuk BimCraft (.ifc)}} dan buka di BimCraft |
| Tepi lepas dalam glTF dan STL | Gunakan OBJ atau Collada untuk gambar garis |
| Material glTF dan FBX selain warna dasar (logam, kekasaran, peta normal, kaca, clear coat, sheen…) | Material dibaca dan didaftarkan; ModelCraft menyimpan warna dasar atau tekstur. Bangun kembali tampilannya di [ruang kerja Shading](topic:shading) |
| Tulang, animasi, dan morph target glTF | Model ber-skin masuk dalam posisi diam seperti keadaannya; animasikan di [linimasa](topic:animation) |
| Warna dan nama bagian rakitan dari file STEP | Bagian masuk sebagai mesh dengan ukuran sebenarnya; [cat](topic:paint) dan beri nama setelah impor |
| Objek SubD, teks, dimensi, dan lampu dari file `.3dm` | Lihat [apa yang dibuang](topic:import-3dm-files#what-is-left-out-and-said); ubah SubD menjadi mesh di program yang membuat file tersebut |
| Tekstur KTX2 dan varian material dalam glTF | Ekspor dengan tekstur PNG atau JPEG; varian bawaan yang dipakai |
| Menulis instancing glTF (EXT_mesh_gpu_instancing) | Komponen ditulis sekali dan ditempatkan berkali-kali, yang dibaca oleh setiap viewer |
| Animasi Alembic (setiap sampel dari cache), titik dan kurva Alembic, menulis Alembic | Sampel pertama masuk; animasikan di [linimasa](topic:animation); tulis glTF, USD, atau OBJ |
| Peta bump dan normal dalam material OBJ | Hanya gambar warna (`map_Kd`) yang masuk |
| Tulang dan animasi FBX, ekspor FBX, file FBX 6 | Model ber-skin masuk dalam posisi diam; ekspor glTF; simpan file lama sebagai FBX 2011 atau yang lebih baru |
| Skin, morph, kamera, lampu, transformasi look-at dan skew, referensi eksternal Collada | Dibuang saat impor dan dihitung dalam pesan |
| File cadangan | {{ui:Simpan sebagai}} ({{key:Mod+Shift+S}}) menyimpan salinan lain. Setelah macet, ModelCraft menawarkan kembali pekerjaan Anda yang belum disimpan ("Pulihkan pekerjaan Anda?") |
| Penyimpanan cloud dan sinkronisasi antar komputer | Belum tersedia. Simpan file ke komputer Anda, dan salin ke tempat yang Anda perlukan |

## Pencetakan 3D

| Belum | Sebagai gantinya, hari ini |
|---|---|
| Penopang slicer yang sebenarnya (antarmuka, rakit, pola penopang yang tepat) | [Pratinjau penyangga](topic:print-tools#supports-preview) menunjukkan di mana dan kira-kira berapa banyak; pratinjau slicer Anda menampilkan yang sebenarnya |
| Melepaskan bagian yang menembus dirinya sendiri, atau tepi tempat tiga muka atau lebih bertemu | [Perbaiki](topic:print-tools#repair) mendaftar semuanya beserta lokasinya; gunakan [Intersect faces](topic:intersect) dan hapus bagian di dalamnya |
| Pola isian dan kisi di dalam bagian berongga | [Lubangi](topic:print-tools#hollow) membiarkannya kosong; slicer Anda menambahkan isian pada bagian padat |
| Detail yang terlalu kecil untuk nozzle Anda (selain dinding) | [Tebal dinding](topic:print-tools#wall-thickness) menemukan dinding tipis; pratinjau lapisan slicer Anda menampilkan sisanya |

## Kinerja

Undo menyimpan salinan model untuk setiap langkah (sebuah [mesh](topic:meshes) hanya menyimpan bagian yang berubah), sehingga impor geometri push/pull yang sangat besar membuat setiap suntingan lebih lambat. Jaga impor tetap ringan, dan simpan lalu buka kembali file untuk menghapus riwayat.

## Aplikasi dan platform

- **Desktop:** ModelCraft berjalan di peramban di Mac, Windows, dan Linux, serta di CadCraft Studio, aplikasi desktop dengan kedelapan aplikasi dalam satu instalasi. Di Android, CadCraft Studio dipasang dari APK-nya di getcadcraft.com/download. Belum ada build untuk iPad atau iPhone.
- **Sentuh:** lihat [Orbit, geser, dan zoom](topic:orbit-pan-zoom) untuk gerakan jari. Tekanan pena mengatur kuas di [Pahat](topic:sculpt); di tempat lain, tekanan dan kemiringan pena tidak digunakan.
- **Lembar:** ModelCraft [mencetak satu tampilan per halaman](topic:export-model#print-the-view-or-save-it-as-a-pdf); tidak ada tata letak lembar dengan beberapa tampilan atau blok judul. Ekspor ke DWG/DXF yang ramah CadCraft untuk gambar berskala.
