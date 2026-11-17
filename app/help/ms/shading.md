---
title: Buat bahan dengan nod
summary: Bina bahan daripada tekstur, gambar dan matematik dalam ruang kerja Pembayangan, lihat ia dalam pandangan semasa anda membina, dan cat muka dengannya.
keywords: pembayangan, bakar, pembakaran, pembakaran tekstur, oklusi ambien, ao, kelengkungan, bakar normal, poli tinggi, poli rendah, peta cahaya, dekal, dekal, pelekat, logo, label, lukisan tekstur, cat tekstur, berus, bahan, bahan, materialx, mtlx, openpbr, standard surface, pustaka bahan, librarycraft, set tekstur, pbr, import tekstur, zip, cc0, seret, nod, nod, editor nod, shader, tekstur, prosedur, hingar, papan dam, voronoi, sel, gelombang, bata, jubin, kayu, marmar, kecerunan, kotoran, haus tepi, ramp warna, campur, bump, peta normal, kekasaran, kemagnetan, kelegapan, potong, pancaran, cahaya, sesaran, pemetaan kotak, triplanar, uv, gambar, nod gambar tekstur, openpbr
from: d7368b21
---

Bahan yang dibuat dalam ruang kerja **Pembayangan** tergolong kepada fail. Ia ialah graf kecil: **nod** yang menghasilkan tekstur, gambar dan nombor, dipautkan ke **Output Bahan**, yang inputnya ialah rupa permukaan — warna asas, kekasaran, kemagnetan, normal, kelegapan, pancaran dan selebihnya model OpenPBR. Anda mengecat muka dengannya seperti mana-mana bahan pustaka, dan setiap perubahan dipaparkan dalam pandangan serta-merta.

## Buka

Pilih {{ui:Pembayangan}} dalam senarai Ruang kerja. Pandangan 3D mengekalkan bahagian atas skrin dan **editor nod** mengambil bahagian bawah. Panel di sebelah kanan menyenaraikan bahan milik fail itu.

- {{ui:Bahan baharu}} membuat satu bahan kelabu dengan hanya Output Bahannya sahaja.
- **Buat salinan boleh sunting bagi bahan pustaka** menukar bata, kayu, jubin dan lain-lain kepada graf yang boleh anda ubah: teksturnya datang melalui nod Tekstur pustaka, bonjolannya melalui nod Bump.
- {{ui:Cat dengannya}} mengecat muka atau kumpulan yang dipilih, atau memilih bahan untuk alat Cat. Bahan alat Cat juga menyenaraikan bahan fail itu di bawah **Dalam fail ini**.
- {{ui:Pendua}} dan {{ui:Padam}} berfungsi pada bahan yang sedang anda sunting. Pemadaman tidak boleh dibuat asal: muka yang dicat dengannya menunjukkan warna lalai sehingga anda mengecatnya semula.

## Bahan daripada pustaka

Panel **Pustaka bahan (Pustaka)** menyenaraikan bahan pustaka, setiap satu dengan pratonton yang dirender oleh penjejak laluan CadCraft. Ia ialah set tekstur yang dikeluarkan di bawah CC0, dikreditkan kepada orang yang membuatnya.

- Klik satu untuk membawanya ke dalam fail (gambarnya ikut sama) dan, dengan muka atau kumpulan dipilih, mengecatnya.
- Seret satu ke muka atau kumpulan dalam pandangan untuk mengecat hanya bahagian itu.
- Ia menjadi salah satu bahan fail: ubah nodnya seperti biasa. Kreditnya dipaparkan dalam panel dan kekal dalam fail.

## Import set tekstur

{{ui:Gambar atau zip…}} atau {{ui:Folder…}} di bawah **Import set tekstur** membuat bahan daripada satu set peta. Peta dijumpai mengikut perkataan dalam nama failnya: color, albedo, diffuse atau basecolor; roughness (atau gloss, ditukar kepada kekasaran); metalness atau metallic; normal (OpenGL atau DirectX, daripada `gl` / `dx` dalam nama); height atau displacement; ambient occlusion; opacity; emission. Peta terpadat (ARM, ORM) ditinggalkan. Jubin bermula pada 1 × 1 m: tetapkan saiz sebenarnya pada Output Bahan. Ketinggian pergi ke sesaran dengan skalanya pada 0 — naikkan skala untuk menggunakannya pada mesh.

## MaterialX

MaterialX ialah format terbuka yang digunakan oleh program 3D dan rendering lain untuk berkongsi bahan.

- {{ui:Eksport sebagai MaterialX…}} menyimpan bahan yang sedang anda sunting: nilainya, dan setiap tekstur sebagai gambar PNG di sebelah fail `.mtlx` (dalam zip). Pilih shader ia ditulis sebagai: **OpenPBR Surface** (MaterialX 1.39, model yang sama digunakan oleh ModelCraft) atau **Standard Surface** (MaterialX 1.38, yang lebih banyak program baca hari ini). Tekstur diletakkan mengikut koordinat UV dalam meter; peletakan kotak dan triplanar ditulis sebagai UV.
- {{ui:Import MaterialX…}} (atau {{ui:Daripada folder…}}) membaca fail `.mtlx` dengan shader OpenPBR, Standard Surface, UsdPreviewSurface atau glTF PBR. Berikan gambar sekali, atau zip bagi semuanya: gambar dijumpai mengikut laluannya, namanya, atau namanya dengan jenis gambar lain (fail `.exr` yang dinamakan boleh datang sebagai `.jpg` di sebelahnya). Tekstur, peta normal, aritmetik, campuran dan sesaran masuk sebagai nod; apa-apa lain mengekalkan nilainya, dan baris status memberitahu apa yang ditinggalkan.

## Dekal

Dekal ialah gambar yang diletakkan ke atas permukaan — logo, papan tanda, label, kesan — dengan bahan tersendiri.

- Tetapkan **Lebar dekal baharu**, kemudian {{ui:Letakkan dekal…}} (atau {{ui:Dekal}} pada bar alat), pilih gambar PNG, JPEG atau WebP dan klik satu muka. Gambar diunjurkan ke atas permukaan di situ, mengekalkan nisbahnya; bahagian lutsinar PNG kekal lutsinar.
- Ia tergolong kepada kumpulan atau komponen yang anda klik dan bergerak bersamanya. Ia menutupi muka dalam kotaknya yang menghadap arah yang sama, dan berhenti di tepi perkara yang ia terletak di atasnya.
- Setiap dekal mendapat bahan sendiri, dinamakan **Dekal: <gambar>**, dalam senarai fail: sunting seperti biasa (kekasaran, bonjolan, cahaya). {{ui:Bahan}} di sebelah dekal membukanya.
- Di sebelah setiap dekal: lebarnya (ketinggian mengikut gambar), {{ui:Pusing}} (putaran suku) dan {{ui:Padam}}. Dekal disimpan bersama bahan fail, di luar Buat asal.
- Ia dipaparkan dalam pandangan berlorek, dalam render pantas dan dalam gambar kualiti tinggi.

## Lukis pada tekstur

{{ui:Cat tekstur}} (atau {{ui:Cat}} di bawah **Lukis pada tekstur**) menukar penunjuk kepada berus bulat. Seret pada muka yang memakai salah satu bahan fail ini: berus melukis gambar di belakang warna asasnya.

- Pada mesh ia melukis sepanjang UV mesh (buka dahulu dalam ruang kerja UV); pada muka lain ia melukis merentasi muka, jadi lukisan berulang dengan jubin bahan.
- Bahan yang warna asasnya ialah warna biasa mendapat gambar 512 × 512 baharu bagi warna itu kali pertama anda melukisnya. Bahan yang warna asasnya datang daripada nod lain memerlukan nod Gambar dipautkan ke Warna asas.
- Tetapkan warna berus, saiz (dalam piksel gambar), kekuatan dan kekerasan dalam panel. {{ui:Buat asal sapuan}} atau Ctrl+Z (semasa melukis) membatalkan sapuan, sehingga 20 yang terakhir.
- Gambar yang dilukis disimpan dalam fail. Bahan pustaka tidak boleh dicat: buat salinan boleh sunting dahulu.

## Bakar tekstur

**Bakar tekstur** menulis apa yang diberikan oleh bentuk dan adegan kepada permukaan menjadi gambar sepanjang UV mesh.

- Pilih mesh yang mempunyai UV (buka dalam ruang kerja UV), tandakan peta dan tekan {{ui:Bakar}}:
  - **Oklusi ambien** — betapa terbukanya setiap titik: sudut, lekuk dan tempat di bawah benda lain menjadi lebih gelap. Semua yang dipaparkan dalam model membayangkannya, sehingga jarak oklusi.
  - **Kelengkungan** — cerah di sepanjang tepi luar, gelap di sudut dalam, kelabu sederhana pada bahagian rata dan melengkung sedikit, merentasi lebar tepi yang anda tetapkan.
  - **Normal daripada objek resolusi tinggi** — pilih juga salinan yang terperinci: perincian permukaannya ditulis sebagai peta normal untuk objek yang lebih ringkas (objek dengan segi tiga yang lebih sedikit dibakar ke atasnya). Jarak carian ialah sejauh mana dua permukaan itu boleh berjauhan.
  - **Pencahayaan** — matahari di lokasi dan tarikh model (Gaya) dengan bayangannya, serta langit, sebagai peta cahaya.
- Gambar itu menyertai fail dan muncul dalam nod Gambar. Jika bahan yang anda sunting mempunyai nod **Kotoran dan haus tepi**, ia membaca oklusi dan kelengkungan baharu serta-merta.
- Lebih banyak sinar setiap texel menghasilkan oklusi dan pencahayaan yang lebih licin dan mengambil masa lebih lama. Pembakaran berjalan pada teras pemproses komputer di latar belakang; {{ui:Henti membakar}} menghentikannya.

## Bina graf

1. {{ui:Tambah nod…}} (atau {{key:Shift+A}} dalam editor nod) menambah nod di tengah editor.
2. Seret dari titik output (di sebelah kanan nod) ke titik input (di sebelah kiri nod) untuk memautkannya. Pautan kedua ke satu input menggantikan yang pertama; seret input yang dipautkan untuk memisahkannya.
3. Input yang tidak dipautkan menunjukkan nilainya: taip nombor atau pilih warna. Tetapan berada di bahagian bawah setiap nod.

Seret nod mengikut tajuknya untuk mengalihkannya, seret ruang kosong untuk pan, dan gunakan roda untuk zum. {{key:Delete}} memadamkan nod atau pautan yang dipilih, {{key:Mod+Z}} membuat asal, {{key:Mod+D}} membuat pendua, {{key:F}} menunjukkan semua nod. Setiap perubahan ialah satu langkah buat asal bagi editor nod. Buat asal model itu tidak mengubah bahan.

| Nod | Apa yang dihasilkannya |
|---|---|
| Koordinat tekstur | Di mana satu titik berada pada jubin: ulangi, alihkannya, putarnya suku. |
| Nilai, Warna | Nombor, warna. |
| Gambar | Gambar fail (yang datang bersama model yang diimport, atau yang anda tambah dengan {{ui:Tambah gambar…}}). Pilih **Warna** untuk foto dan **Data** untuk peta kekasaran atau normal. |
| Tekstur pustaka | Tekstur, kekasaran dan ketinggian bahan pustaka. |
| Papan dam, Hingar | Petak; hingar fraktal licin dengan perincian, kekasaran dan benihnya. |
| Sel Voronoi, Gelombang, Kecerunan | Sel (jarak ke titik terdekat, tepi antara sel, satu warna setiap sel); jalur melintang, menegak atau pepenjuru, sebagai sinus, gigi gergaji atau segi tiga, dibengkokkan oleh hingar; kecerunan linear, kuadratik, jejari dan sfera. |
| Bata, Jubin | Baris bata dengan ofset berjalan, atau grid jubin: warna, mortar atau grout, jurang dan bevel dalam meter, ketinggian untuk bonjolan, nombor rawak setiap keping. |
| Kayu, Marmar | Cincin sepanjang urat dengan gentian halus; urat dibengkokkan oleh pusaran. |
| Kotoran dan haus tepi | Haus tepi cembung dan mengotorkan lekuk daripada gambar kelengkungan dan oklusi mesh ([Bakar tekstur](topic:shading#bake-textures) menghasilkannya; atau tetapkan dua tetapan gambarnya, dalam susun atur UV mesh: letakkan bahan mengikut koordinat UV). Tanpanya ia tidak mengubah apa-apa. |
| Campur warna, Ramp warna, Hue/ketepuan/nilai, Kecerahan dan kontras, Songsang, Gamma, Asingkan dan Gabungkan RGB | Kerja warna. |
| Matematik, Julat peta | Aritmetik pada nombor (tambah, darab, kuasa, langkah licin dan lebih lagi). |
| Bump, Peta normal | Normal daripada ketinggian (Bump) atau daripada gambar peta normal (Peta normal: pilih arah saluran hijau). |

## Output Bahan

Tetapannya menyatakan bagaimana tekstur terletak pada permukaan:

- **Lebar jubin** dan **Tinggi jubin**: berapa meter satu jubin tekstur liputi. Semua yang dihasilkan graf berulang merentasi jubin tanpa sambungan.
- **Diletakkan oleh**: **Koordinat UV** mengikut muka (tolak/tarik muka: sepanjang setiap muka; mesh: UV mereka, satu unit UV = satu jubin), **Kotak** diunjurkan dari paksi terdekat antara tiga paksi, **Triplanar** mengadun tiga unjuran pada permukaan yang condong (**Ketajaman adunan**: lebih tinggi bermakna adunan lebih keras).
- **Kekuatan normal** menskalakan input normal. **Skala sesaran** menetapkan sejauh mana input sesaran menggerakkan bucu mesh.
- {{ui:Lebih banyak input}} menunjukkan baki input OpenPBR: coat, fuzz, subsurface, thin film, transmission dan warnanya.

## Dalam gambar kualiti tinggi

Penjejak laluan membaca warna asas, kekasaran, kemagnetan, kelegapan, normal dan pancaran daripada graf ketika ia berubah merentasi permukaan. Sebarang input lain yang anda pautkan (contohnya coat yang berubah-ubah) digunakan pada purata nilainya; panel memberitahu yang mana. Potongan daripada tekstur kelegapan menunjukkan bentuknya, dan bayangannya lutsinar secara sekata. Tekstur bercahaya menyinari apa yang dihadapinya, tanpa disampel sebagai lampu.

**Sesaran** menggerakkan bucu mesh sahaja, jadi tambah pengubah Subdivision untuk perincian ([Pengubah suai](topic:modifiers)). Muka tolak/tarik mengekalkan bentuknya dan mendapat bonjolan daripada normal.

:::tip
Pada komputer dengan WebGPU graf dikira pada kad grafik; tanpanya, pada pemproses. Hasilnya sama.
:::
