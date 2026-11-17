---
title: Animasikan properti apa pun, bentuk sebagai kurva, dan campurkan klip
summary: Workspace Animasi memberi keyframe pada posisi, putaran, dan ukuran objek, kecerahan, sebaran, dan warna lampu, lensa, serta shape key mesh; armature menekuk mesh dengan tulang dan bobot yang dicat; IK dan batasan membuat tulang dan objek menjangkau, menghadap, menyalin, tetap dalam batas, menggantung, atau mengikuti yang lain; benda kaku jatuh, menumpuk, dan bertabrakan, lalu di-bake menjadi keyframe; driver mengatur nilai dari nilai lain; tampilan Kurva pada timeline membentuk tiap perubahan dengan pegangan Bézier dan pengulangan, sedangkan tampilan Klip menyimpan animasi sebagai aksi yang bisa Anda tempatkan kembali dan campurkan.
keywords: fisika, benda kaku, rigid body, simulasi, simulasikan, jatuh, gravitasi, bertabrakan, tumpuk, memantul, gesekan, bake, ik, inverse kinematics, batasan, constraint, look at, track to, aim, copy transforms, copy location, copy rotation, limit rotation, limits, child of, parent, follow path, path, jalur, pole, fabrik, rantai, armature, rig, rigging, tulang, bone, kerangka, skin, skinning, bobot, weight paint, weight painting, vertex groups, bobot otomatis, bone heat, pose, pose mode, dual quaternion, linear blend, shape key, morf, morph, morph targets, blend shapes, wajah, ekspresi, driver, drivers, expressions, workspace animasi, animasi, animate, keyframe, key, properti, transform, lokasi, posisi, putaran, rotasi, skala, lampu, cahaya, kecerahan, warna, lensa, bidang pandang, fov, graph editor, kurva, curve, bezier, pegangan, tangen, interpolasi, siklus, cycle, ulangi, loop, ping pong, offset, dope sheet, pilih keyframe, box select, salin keyframe, tempel keyframe, regangkan keyframe, skala keyframe, klip, aksi, actions, nla, campur, blend, pengaruh, stash
from: 16d8e12f
---

[Timeline](topic:animation) menggerakkan kamera serta seluruh grup dan komponen. Workspace **Animasi** memberi keyframe lebih dari itu, dan timeline mendapat dua tampilan tambahan untuk membentuk dan memakai ulang apa yang sudah Anda beri keyframe.

## Buka

Pilih {{ui:Animasi}} pada daftar workspace di bilah alat. Timeline terbuka di bawah tampilan, bilah alat menampilkan grup Animasi ({{ui:Keyframe}}, {{ui:Putar}}, {{ui:Timeline}}), dan panel di sebelah kanan mencantumkan apa saja yang bisa diberi keyframe pada playhead.

## Memberi keyframe pada properti

Panel mencantumkan, pada playhead:

- **Objek terpilih**: {{ui:Letakkan}}, {{ui:Putaran (°)}}, dan {{ui:Ukuran}}, masing-masing tiga angka. Ketik angka lalu tekan {{key:Enter}}: angka itu diberi keyframe pada playhead dan objek berpindah ke sana. Berlian di samping baris memberi keyframe pada nilai saat ini; berlian yang terisi berarti sudah ada keyframe di playhead.
- **Lampu**: {{ui:Kecerahan (lm)}}, {{ui:Sebaran (°)}} (lampu spot), dan {{ui:Warna}} setiap lampu.
- **Kamera**: {{ui:Sudut lensa (°)}}, untuk zoom saat kamera bergerak.

{{ui:Keyframe transformasi}} (atau {{key:I}}) memberi keyframe pada posisi, putaran, dan ukuran setiap grup atau komponen yang dipilih sekaligus; {{ui:Keyframe kamera}} (atau {{key:K}}) memberi keyframe pada kamera. Dengan {{ui:Keyframe otomatis}} aktif, grup yang posisi, putaran, dan ukurannya sudah diberi keyframe dengan cara ini akan mendapat keyframe baru setiap kali Anda memindahkannya.

Putaran adalah tiga sudut, terhadap sumbu X, lalu Y, lalu Z. Putaran yang diberi keyframe melewati 180° terus berputar searah (190° tetap 190°, bukan −170°), sehingga roda bisa berputar beberapa kali.

:::tip
Grup yang diberi keyframe dengan {{ui:Keyframe pilihan}} pada timeline memiliki keyframe penempatan utuh. Tombol kurva pada barisnya mengubahnya menjadi kurva posisi, putaran, dan ukuran (dengan penempatan yang sama di setiap keyframe) sehingga Anda bisa membentuknya di {{ui:Kurva}}.
:::

## Shape key (morf)

**Shape key** adalah bentuk lain dari [mesh](topic:meshes) yang sama: senyum pada wajah, tonjolan pintu, daun yang melengkung. Slider-nya mencampur dari mesh apa adanya (0) ke bentuk itu (1); beberapa key saling menjumlahkan.

1. Pilih mesh di workspace Animasi: panel menampilkan {{ui:Shape key}} miliknya.
2. Klik {{ui:Tambah shape key}}. ModelCraft membuka [workspace Mesh](topic:mesh-edit) dengan key baru yang sedang diedit: pindahkan titik, ekstrusi, pahat — ubah mesh menjadi bentuk yang Anda inginkan.
3. Kembali ke {{ui:Animasi}} dan klik {{ui:Selesai}}. Mesh kembali seperti semula, dan key menyimpan perubahan Anda.

Lalu seret slider key (atau ketik nilai) untuk mencampurkannya. Berlian memberi keyframe pada nilai di playhead, sehingga key bisa membesar dan memudar seiring waktu; setelah punya track, nilai baru diberi keyframe di playhead. Pensil mengedit bentuk key lagi (mesh menampilkannya sepenuhnya sampai {{ui:Selesai}}; {{ui:Batal}} membiarkan key seperti semula), mata mematikan key, dan tempat sampah menghapusnya.

Titik yang Anda tambahkan saat mengedit key menjadi milik mesh itu sendiri: titik tetap di tempat yang Anda buat, di setiap bentuk.

:::note
Shape key menggerakkan mesh sebelum [modifier](topic:modifiers)-nya: modifier Subdivision menghaluskan bentuk yang sudah dicampur. Gambar dan video hasil render menampilkan key pada setiap frame.
:::

## Armature: tulang yang menekuk mesh

**Armature** adalah sekumpulan tulang di dalam [mesh](topic:meshes). Atur posisi tulang dan mesh mengikuti, setiap titik sebesar yang ditentukan **bobot**-nya.

1. Pilih mesh di workspace Animasi dan klik {{ui:Tambah armature}} di panel (atau {{ui:Tambah tulang}} di grup {{ui:Rig}}): tulang pertama membentang ke atas di tengah mesh dari pangkalnya.
2. Dengan tulang terpilih, {{ui:Tambah tulang anak}} menambahkan tulang berikutnya dari ujungnya. Atur {{ui:Kepala}}, {{ui:Ujung}}, {{ui:Roll (°)}}, dan {{ui:Tergantung pada}} setiap tulang di panel; tulang yang tergantung pada tulang lain ikut bergerak bersamanya. Hapus centang {{ui:Menggerakkan mesh}} untuk tulang yang hanya mengarahkan tulang lain.
3. Klik {{ui:Bobot otomatis}}: setiap tulang memegang titik-titik terdekat darinya, dan pegangan itu menyebar halus di atas mesh, sehingga titik di antara dua tulang berbagi. {{ui:Tulang terdekat saja}} adalah pembagian yang lebih cepat dan lebih tegas.

**Pose** tulang dengan {{ui:Pose}} ({{key:P}}): klik tulang untuk memilihnya, seret untuk memutarnya terhadap sumbu tampilan, {{key:Shift}}-seret untuk memindahkannya. Atau ketik {{ui:Letakkan}}, {{ui:Putaran (°)}}, dan {{ui:Ukuran}} di bawah {{ui:Pose}}; putaran berada pada sumbu tulang itu sendiri, dihitung dari posisi diamnya. Berlian dan {{ui:Beri keyframe pada seluruh pose}} memberi keyframe pada pose di playhead; setelah tulang punya keyframe, mengatur posenya akan membuat keyframe di sana. {{ui:Atur ulang tulang ini}} dan {{ui:Atur ulang pose}} mengembalikan tulang ke posisi diam.

**Cat bobot** ({{key:W}}) untuk tulang terpilih: mesh tampil dalam keadaan diam, setiap muka diberi warna sesuai seberapa besar tulang itu menahannya — merah berarti penuh, biru berarti tidak sama sekali. Cat untuk menambah pegangan ({{key:Mod}} mengurangi, {{key:Shift}} menghaluskan); {{ui:Ukuran (px)}} dan {{ui:Kekuatan}} mengatur kuas. Dengan {{ui:Jaga agar bobot setiap titik berjumlah 1}}, memberi satu tulang bobot lebih besar akan mengambil dari tulang lain dengan jumlah yang sama. Setiap goresan adalah satu langkah urungkan model.

{{ui:Kulit}} memilih cara titik di antara tulang bergerak: {{ui:Linear (cepat)}} memadukan gerak tulang-tulang, dan sedikit mengempiskan sendi yang ditekuk; {{ui:Dual quaternion (menjaga volume di sendi)}} memutar titik mengelilingi sendi sebagai gantinya, sehingga siku atau lutut mempertahankan ketebalannya (ukuran tulang di {{ui:Ukuran}} tidak lagi meregangkan kulit).

:::note
Shape key datang lebih dulu, lalu armature, lalu [modifier](topic:modifiers). Tampilan, gambar, dan video semuanya menampilkan mesh yang sudah dipose; bobot mesh disimpan bersama mesh, sedangkan tulang dan posenya disimpan bersama animasi.
:::

## IK dan batasan

**Batasan** menggerakkan tulang atau objek setelah keyframe-nya, menurut suatu aturan. Pilih objek (atau, dalam armature, tulang) dan tambahkan satu di bawah {{ui:Batasan dari …}}; beberapa berjalan sesuai urutan yang tercantum (panah mengubahnya), dan masing-masing memiliki {{ui:Seberapa banyak}} (0 sampai 1, diberi keyframe dengan berliannya seperti properti lain) dan sakelar nyala/mati.

| Batasan | Untuk | Yang dilakukannya |
|---|---|---|
| {{ui:Jangkau (IK)}} | Tulang | Tulang dan tulang-tulang tempat ia tergantung ({{ui:Tulang dalam rantai}}) menekuk sehingga ujungnya mencapai target. Dengan dua tulang dan {{ui:Pole (arah tekukan menuju ke sini)}}, siku atau lutut mengarah ke pole; rantai yang lebih panjang menekuk dengan halus. Di luar jangkauan, rantai mengarah lurus ke target. |
| {{ui:Menghadap ke}} | Keduanya | Berputar sehingga {{ui:Sumbu yang mengarah}} menghadap target, sambil menjaga {{ui:Sumbu yang dijaga ke atas}} sedekat mungkin ke atas. |
| {{ui:Salin transformasi}} | Keduanya | Mengambil posisi, putaran, atau ukuran target — yang dicentang. |
| {{ui:Batas}} | Keduanya | Menjaga posisi, putaran (derajat), atau ukurannya sendiri di antara {{ui:min}} dan {{ui:maks}} per sumbu; biarkan satu pasangan kosong agar sumbu itu bebas. |
| {{ui:Anak dari}} | Keduanya | Bergerak bersama target seolah tergantung padanya, dari tempat keduanya berada saat Anda memilih target. |
| {{ui:Ikuti jalur}} | Objek | Duduk pada [objek kurva](topic:curves) di {{ui:Sepanjang kurva}} (0 di awal, 1 di akhir; beri keyframe agar ia bergerak), dan dengan {{ui:Putar mengikuti kurva}} ia menghadap sepanjang kurva. |

Target adalah objek lain dalam grup yang terbuka, tulang dari armature yang sama, atau {{ui:Sebuah titik}} yang Anda ketik (titik objek berada di koordinat model, titik tulang di koordinat mesh-nya). Untuk kaki IK, letakkan target di tempat kaki seharusnya dan beri keyframe pada target, atau beri keyframe pada {{ui:Seberapa banyak}} untuk menyerahkan kaki di antara keyframe dari animasi ke IK.

:::tip
Objek yang menghadap ke objek yang mengikuti jalur akan melihatnya berada di jalur itu: ModelCraft menghitung target lebih dulu, apa pun urutan objeknya.
:::

## Fisika: jatuh, menumpuk, dan bertabrakan

Biarkan objek jatuh dan saling menabrak, lalu simpan hasilnya sebagai keyframe.

1. Pilih grup, komponen, atau mesh dan atur {{ui:Benda kaku}} di bawah {{ui:Fisika}}: {{ui:Jatuh dan bertabrakan}} (ia bergerak) atau {{ui:Tetap di tempat, menghalangi}} (meja, dinding, bidang miring). Beri objek yang jatuh {{ui:Bentuk}}-nya — {{ui:Kotak (batasnya)}} atau {{ui:Bola (melingkupi batasnya)}} — lalu {{ui:Massa (kg)}}, {{ui:Gesekan}}, dan {{ui:Pantulan}} (0 berdebam, 1 memantul kembali setinggi semula).
2. Di bawah {{ui:Seluruh model}}, atur {{ui:Dari (s)}} dan {{ui:Sampai (s)}}, {{ui:Gravitasi (m/s², ke bawah)}}, dan apakah ada {{ui:Tanah tempat mendarat}} (beserta tingginya).
3. Klik {{ui:Bake fisika}} (di panel atau grup {{ui:Fisika}}). Setiap objek yang jatuh mendapat keyframe posisi, putaran, dan ukuran di setiap frame di antara kedua waktu itu; putar seperti animasi biasa.

Bake ulang akan mengganti keyframe itu; {{ui:Buang keyframe hasil bake}} menghapusnya. Objek mulai dalam keadaan diam, di tempat keyframe, kurva, dan batasannya menempatkannya pada {{ui:Dari (s)}} (gerakan yang diberi keyframe sebelum itu tidak berlanjut ke jatuhan). {{ui:Langkah per frame}} yang lebih banyak membuat tumpukan tinggi lebih stabil; bilah status memberi tahu jika sesuatu masih bergerak di akhir.

:::note
Bentuknya berupa kotak dan bola yang melingkupi batas tiap objek; kotak menyentuh dengan sudut, tengah tepi, dan tengah muka, sehingga kotak bisa menumpuk dan terguling seperti yang Anda harapkan. Kain, fluida, sambungan antarobjek, dan bentuk yang persis belum dibuat.
:::

## Driver

Sebuah **driver** mengatur shape key dari hal lain, bukan dengan tangan: buka driver sebuah key (tombol kalkulator), tulis sebuah **ekspresi**, dan berikan tiap nama di dalamnya apa yang dibacanya ({{ui:Membaca}}): waktu dalam detik, frame, posisi, putaran, atau ukuran sebuah penempatan sepanjang X, Y, atau Z, kecerahan lampu, atau shape key lain. Misalnya, dengan `v` membaca putaran pintu terhadap Z, `clamp(v / 90, 0, 1)` membuka sebuah shape saat pintu terbuka.

Ekspresi memakai angka, nama-nama, `+ - * / % ^`, dan kurung, serta fungsi `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg` dengan `pi` dan `e`. Kesalahan ditunjukkan dan tidak mengubah apa pun. Slider key yang di-driver menampilkan nilai driver; driver mengalahkan track key sampai Anda menghapusnya.

## Memilih dan mengubah keyframe (tampilan Keyframe)

{{ui:Keyframe}} menampilkan satu baris per track: kamera, setiap grup yang bergerak, dan setiap properti ("Lampu 2 · Kecerahan (lm)"; keyframe properti berbentuk bulat).

- Klik keyframe untuk memilihnya; {{key:Shift}}-klik atau {{key:Mod}}-klik menambah atau membuang keyframe dari pilihan. {{key:Shift}}-seret di atas baris menggambar kotak yang menambahkan setiap keyframe di dalamnya.
- Seret keyframe terpilih untuk memindahkan semuanya; {{key:Left}} / {{key:Right}} memindahkannya satu frame ({{key:Shift}}: sepuluh).
- {{key:Mod+C}} menyalin keyframe terpilih, {{key:Mod+V}} menempelkannya dari playhead ke track yang sama (tab ModelCraft lain juga bisa menempelkannya).
- {{ui:Regangan}} menyebarkan keyframe terpilih menjauh dari playhead sesuai angka di sampingnya (2 = dua kali lebih jauh; 0.5 menariknya rapat).
- Daftar gerakan mengatur bagaimana setiap keyframe terpilih bergerak ke berikutnya.

## Membentuk kurva (tampilan Kurva)

{{ui:Kurva}} adalah grafik setiap angka terhadap waktu: waktu ke samping, nilai ke atas. Centang kurva yang ingin ditampilkan di daftar sebelah kiri (X, Y, dan Z berwarna merah, hijau, dan biru).

- Klik keyframe (sebuah kotak) untuk memilihnya, {{key:Shift}}-klik untuk lebih banyak, atau seret kotak. Seret keyframe terpilih untuk mengubah waktu dan nilainya; jika beberapa dipilih, seret akan menggesernya sepanjang waktu.
- Keyframe terpilih menampilkan dua **pegangan**. Seret salah satunya untuk membentuk kurva di sisi itu. {{ui:Pegangan}} menyatakan cara keduanya bekerja: {{ui:Otomatis}} (kurva halus melalui keyframe di sekitarnya), {{ui:Mengarah ke keyframe berikutnya}}, {{ui:Sejajar}} (keduanya tetap dalam satu garis lurus, sehingga kurva tidak memiliki sudut), atau {{ui:Bebas}}.
- {{ui:Dari keyframe yang dipilih}} mengatur bagaimana tiap keyframe terpilih bergerak ke berikutnya: {{ui:Kurva (pegangan)}}, {{ui:Haluskan}}, {{ui:Konstan}}, {{ui:Perlambat masuk dan keluar}}, atau {{ui:Tahan}}.
- {{ui:Sebelum}} dan {{ui:Sesudah}} mengatur apa yang dilakukan kurva di luar keyframe-nya: {{ui:Tahan}} (tetap di nilai pertama atau terakhir), {{ui:Ulangi}}, {{ui:Bolak-balik}}, atau {{ui:Ulangi dan lanjutkan}} (setiap pengulangan mulai di tempat pengulangan sebelumnya berakhir: roda terus menggelinding, pejalan terus berjalan).
- Roda untuk zoom ({{key:Mod}}: nilai saja, {{key:Shift}}: waktu saja); seret dengan tombol tengah atau dengan {{key:Alt}} untuk menggeser; {{ui:Tampilkan semua}} atau {{key:Home}} menyesuaikan semua kurva yang ditampilkan. Klik ruang kosong untuk memindahkan playhead ke sana. {{key:Delete}} menghapus keyframe terpilih.

Pegangan dijaga agar tidak saling bersilangan dalam waktu, sehingga kurva tidak pernah berjalan mundur.

## Memakai ulang animasi (tampilan Klip)

**Klip** memutar animasi yang tersimpan (sebuah **aksi**) di timeline. Klip dicampur sesuai urutan, baris yang lebih bawah berada di atas yang lebih atas; track timeline sendiri berada di atas setiap klip.

1. Beri keyframe pada grup dan lampu seperti biasa, lalu klik {{ui:Buat klip}} di {{ui:Klip}} dan beri nama aksinya. Track menjadi aksi, dan sebuah klip memutarnya di tempat track itu berada (kamera tetap di timeline).
2. Untuk memakainya lagi, pilih aksinya dan klik {{ui:Tambah klip}}: klip baru dimulai di playhead.
3. Seret klip sepanjang barisnya untuk memindahkannya; klik untuk mengatur {{ui:Mulai (s)}}, {{ui:Kecepatan}} (2 = dua kali lebih cepat), {{ui:Pengulangan}}, {{ui:Seberapa banyak}} (0 sampai 1), {{ui:Campur}} ({{ui:Ganti}}, atau {{ui:Tambah di atasnya}} dari klip sebelumnya), {{ui:Di luar klip}} (tidak ada, tahan ujungnya, atau tahan kedua ujungnya), dan {{ui:Bisukan}}. Panah mengubah urutan; tempat sampah menghapusnya (aksi yang tidak lagi dipakai klip mana pun ikut terhapus).

Klip dengan {{ui:Seberapa banyak}} kurang dari penuh akan memadukan dari apa yang ada di bawahnya: klip sebelumnya, atau lampu atau penempatan seperti adanya tanpa animasi.

## Apa yang diputar di mana

| Apa | Di tampilan | Di video hasil render |
|---|---|---|
| Keyframe kamera, sudut lensa dengan keyframe kamera | Ya | Ya |
| Posisi, putaran, dan ukuran (keyframe, kurva, klip) | Ya | Ya |
| Kecerahan, sebaran, dan warna lampu | Ya | Belum: video memakai lampu seperti keadaannya saat mulai (lihat [yang belum dibuat](topic:not-built-yet)) |
| Sudut lensa tanpa keyframe kamera | Ya | Belum: beri keyframe pada kamera juga |
| Shape key dan driver | Ya | Ya |
| Armature (mesh yang dipose) | Ya | Ya |
| IK dan batasan | Ya | Ya |
| Fisika yang di-bake (keyframe) | Ya | Ya |

Semuanya disimpan dalam file `.modelcraft` bersama sisa animasi, dan {{ui:Urungkan}} serta {{ui:Ulangi}} pada timeline membatalkan atau mengulangi salah satunya.
