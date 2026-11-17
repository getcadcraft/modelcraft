---
title: Buat material dengan node
summary: Bangun material dari tekstur, gambar dan rumus di ruang kerja Shading, lihat hasilnya di tampilan saat Anda bekerja, dan cat muka dengannya.
keywords: shading, bake, baking, bake tekstur, oklusi ambien, ao, kelengkungan, bake normal, poli tinggi, poli rendah, light map, decal, stiker, logo, label, lukis tekstur, kuas, material, materialx, mtlx, openpbr, standard surface, pustaka material, librarycraft, set tekstur, pbr, impor tekstur, zip, cc0, seret, node, editor node, shader, tekstur, prosedural, noise, checker, voronoi, sel, gelombang, gradien, kotor, aus tepi, color ramp, mix, bump, normal map, roughness, metalness, opacity, cut-out, emission, glow, displacement, box mapping, triplanar, uv, gambar, image texture, openpbr
from: d7368b21
---

Material yang dibuat di ruang kerja **Shading** menjadi milik file. Ia berupa grafik kecil: **node** yang membuat tekstur, gambar dan angka, dihubungkan ke **Material output**, yang masukannya adalah tampilan permukaan — base color, roughness, metalness, normal, opacity, emission dan sisa model OpenPBR. Anda melukis muka dengannya seperti material pustaka mana pun, dan setiap perubahan langsung tampil di tampilan.

## Buka

Pilih {{ui:Shading}} di daftar ruang kerja. Tampilan 3D mempertahankan bagian atas layar dan **editor node** mengambil bagian bawah. Panel di kanan mencantumkan material milik file.

- {{ui:Material baru}} membuat material abu-abu yang hanya berisi Material output-nya.
- **Buat salinan yang bisa diedit dari material pustaka** mengubah bata, kayu, ubin dan sisanya menjadi grafik yang bisa Anda ubah: teksturnya datang melalui node Library texture, bump-nya melalui node Bump.
- {{ui:Cat dengan ini}} melukis muka atau grup yang dipilih, atau memilih material untuk alat {{ui:Cat}}. Material alat Cat juga mencantumkan material file di bawah **Dalam file ini**.
- {{ui:Duplikat}} dan {{ui:Hapus}} bekerja pada material yang sedang Anda edit. Penghapusan tidak dapat diurungkan: muka yang dicat dengannya menampilkan warna default sampai Anda mengecatnya lagi.

## Material dari pustaka

Panel **Pustaka material (Library)** mencantumkan material pustaka, masing-masing dengan pratinjau yang dirender oleh path tracer CadCraft. Semuanya adalah set tekstur yang dirilis di bawah CC0, dengan kredit kepada orang-orang yang membuatnya.

- Klik satu untuk membawanya ke dalam file (gambarnya ikut serta) dan, dengan muka atau grup dipilih, mengecatnya.
- Seret satu ke muka atau grup di tampilan untuk melukis hanya bagian itu.
- Ia menjadi salah satu material file: ubah node-nya seperti biasa. Kreditnya tampil di panel dan tetap tersimpan di file.

## Impor set tekstur

{{ui:Gambar atau zip…}} atau {{ui:Sebuah folder…}} di bawah **Impor set tekstur** membuat material dari sekumpulan peta. Peta dikenali dari kata dalam nama filenya: color, albedo, diffuse atau basecolor; roughness (atau gloss, diubah menjadi roughness); metalness atau metallic; normal (OpenGL atau DirectX, dari `gl` / `dx` dalam nama); height atau displacement; ambient occlusion; opacity; emission. Peta yang dikemas (ARM, ORM) tidak disertakan. Ubin dimulai dengan ukuran 1 × 1 m: atur ukuran sebenarnya pada Material output. Height masuk ke displacement dengan skala 0 — naikkan skalanya untuk memakainya pada mesh.

## MaterialX

MaterialX adalah format terbuka yang dipakai program 3D dan rendering lain untuk saling bertukar material.

- {{ui:Ekspor sebagai MaterialX…}} menyimpan material yang sedang Anda edit: nilainya, dan setiap tekstur sebagai gambar PNG di samping file `.mtlx` (dalam zip). Pilih shader yang akan ditulis: **OpenPBR Surface** (MaterialX 1.39, model yang sama dengan yang dipakai ModelCraft) atau **Standard Surface** (MaterialX 1.38, yang saat ini dibaca oleh lebih banyak program). Tekstur ditempatkan berdasarkan koordinat UV dalam meter; penempatan box dan triplanar ditulis sebagai UV.
- {{ui:Impor MaterialX…}} (atau {{ui:Dari folder…}}) membaca file `.mtlx` dengan shader OpenPBR, Standard Surface, UsdPreviewSurface atau glTF PBR. Berikan juga gambarnya, atau zip berisi semuanya: gambar ditemukan dari jalurnya, namanya, atau namanya dengan jenis gambar lain (file `.exr` yang namanya tertulis bisa datang sebagai `.jpg` di sebelahnya). Tekstur, peta normal, aritmatika, campuran dan displacement masuk sebagai node; yang lain mempertahankan nilainya, dan baris status menyatakan apa yang tertinggal.

## Decal

Decal adalah gambar yang diletakkan di atas permukaan — logo, papan nama, label, noda — dengan material sendiri.

- Atur **Lebar decal baru**, lalu {{ui:Tempatkan decal…}} (atau {{ui:Decal}} di bilah alat), pilih gambar PNG, JPEG atau WebP dan klik muka. Gambar diproyeksikan ke permukaan di sana dengan mempertahankan proporsinya; bagian transparan PNG tetap tembus pandang.
- Decal menjadi milik grup atau komponen yang Anda klik dan ikut bergerak bersamanya. Ia menutupi muka di dalam kotaknya yang menghadap arah yang sama, dan berhenti di tepi tempat ia berada.
- Setiap decal mendapat material sendiri, dinamai **Decal: <picture>**, dalam daftar file: edit seperti biasa (roughness, bump, glow). {{ui:Material}} di sebelah decal membukanya.
- Di sebelah setiap decal: lebarnya (tinggi mengikuti gambar), {{ui:Putar}} (seperempat putaran) dan {{ui:Hapus}}. Decal disimpan bersama material file, di luar urungkan.
- Decal tampil di tampilan berbayang, render cepat, dan gambar berkualitas tinggi.

## Lukis pada tekstur

{{ui:Lukis tekstur}} (atau {{ui:Cat}} di bawah **Lukis pada tekstur**) mengubah penunjuk menjadi kuas bulat. Seret pada muka yang memakai salah satu material file ini: kuas melukis gambar di balik base color-nya.

- Pada mesh, kuas melukis mengikuti UV mesh (buka UV-nya di ruang kerja UV terlebih dahulu); pada muka lain, kuas melukis melintasi muka, sehingga lukisan berulang mengikuti ubin material.
- Material dengan base color polos mendapat gambar baru 512 × 512 piksel berwarna itu saat pertama kali dilukis. Material yang base color-nya berasal dari node lain memerlukan node Picture yang dihubungkan ke Base color.
- Atur warna kuas, ukuran (dalam piksel gambar), kekuatan dan kekerasan di panel. {{ui:Urungkan goresan}} atau Ctrl+Z (saat melukis) mengambil kembali satu goresan, hingga 20 terakhir.
- Gambar hasil lukisan disimpan dalam file. Material pustaka tidak dapat dilukis: buat salinan yang bisa diedit terlebih dahulu.

## Bake tekstur

**Bake tekstur** menuliskan apa yang diberikan bentuk dan adegan pada sebuah permukaan ke dalam gambar sepanjang UV mesh.

- Pilih mesh yang memiliki UV (buka UV-nya di ruang kerja UV), centang peta yang diinginkan, lalu tekan {{ui:Bake}}:
  - **Ambient occlusion** — seberapa terbuka setiap titik: sudut, lipatan dan tempat di bawah benda lain menjadi lebih gelap. Semua yang tampak di model ikut menaungi, hingga jarak oklusi.
  - **Kelengkungan** — terang di sepanjang tepi luar, gelap di sudut dalam, abu-abu sedang pada bagian datar dan melengkung landai, di atas lebar tepi yang Anda atur.
  - **Normal dari objek detail tinggi** — pilih juga salinan yang detail: detail permukaannya dituliskan sebagai peta normal untuk objek yang lebih sederhana (objek dengan segitiga lebih sedikit yang di-bake). Jarak pencarian adalah seberapa jauh kedua permukaan boleh berjarak.
  - **Pencahayaan** — matahari dari lokasi dan tanggal model (Gaya) beserta bayangannya, plus langit, sebagai light map.
- Gambar hasil bake bergabung ke file dan muncul di node Picture. Jika material yang Anda edit memiliki node **Dirt and edge wear**, node itu langsung membaca oklusi dan kelengkungan yang baru.
- Lebih banyak sinar per texel menghasilkan oklusi dan pencahayaan yang lebih halus, tetapi lebih lama. Bake berjalan di inti prosesor komputer di latar belakang; {{ui:Hentikan bake}} menghentikannya.

## Bangun grafik

1. {{ui:Tambah node…}} (atau {{key:Shift+A}} di editor node) menambah node di tengah editor.
2. Seret dari titik keluaran (di sisi kanan node) ke titik masukan (di sisi kiri node) untuk menghubungkannya. Sambungan kedua ke masukan menggantikan yang pertama; seret masukan yang terhubung menjauh untuk melepasnya.
3. Masukan yang tidak terhubung menampilkan nilainya: ketik angka atau pilih warna. Pengaturan ada di bagian bawah setiap node.

Seret node dengan judulnya untuk memindahkannya, seret ruang kosong untuk menggeser, dan gunakan roda untuk memperbesar. {{key:Delete}} menghapus node atau tautan yang dipilih, {{key:Mod+Z}} mengurungkan, {{key:Mod+D}} menduplikasi, {{key:F}} menampilkan semua node. Setiap perubahan adalah satu langkah urungkan editor node. Urungkan model itu sendiri tidak mengubah material.

| Node | Yang dibuatnya |
|---|---|
| Texture coordinates | Di mana sebuah titik berada pada ubin: mengulang, menggeser, memutar seperempat. |
| Value, Color | Angka, warna. |
| Picture | Gambar dari file (yang datang bersama model impor, atau yang Anda tambahkan dengan {{ui:Tambah gambar…}}). Pilih **Colors** untuk foto dan **Data** untuk peta roughness atau normal. |
| Library texture | Tekstur, roughness dan height dari material pustaka. |
| Checker, Noise | Kotak-kotak; noise fraktal halus dengan detail, roughness dan seed-nya. |
| Voronoi cells, Waves, Gradient | Sel (jarak ke titik terdekat, tepi antar sel, satu warna per sel); pita melintang, naik atau diagonal, berbentuk sinus, gergaji atau segitiga, dibengkokkan oleh noise; gradien linear, kuadratik, radial dan sferis. |
| Bricks, Tiles | Baris bata dengan offset bergeser, atau kisi ubin: warna, adukan atau nat, celah dan bevel dalam meter, tinggi untuk tonjolan, angka acak per potongan. |
| Wood, Marble | Lingkaran di sepanjang serat dengan serat halus; urat yang dibengkokkan oleh turbulensi. |
| Dirt and edge wear | Mengikis tepi cembung dan mengotori cekungan dari gambar kelengkungan dan oklusi mesh ([Bake tekstur](topic:shading#bake-textures) membuatnya; atau atur dua pengaturan gambarnya, dalam tata letak UV mesh: tempatkan material berdasarkan koordinat UV). Tanpa keduanya, tidak ada yang berubah. |
| Mix colors, Color ramp, Hue/saturation/value, Brightness and contrast, Invert, Gamma, Separate and Combine RGB | Pekerjaan warna. |
| Math, Map range | Aritmatika pada angka (tambah, kalikan, pangkat, smooth step dan lainnya). |
| Bump, Normal map | Normal dari height (Bump) atau dari gambar peta normal (Normal map: pilih arah kanal hijau). |

## Material output

Pengaturannya menyatakan bagaimana tekstur terletak pada permukaan:

- **Lebar ubin** dan **Tinggi ubin**: berapa meter yang ditutupi satu ubin tekstur. Semua yang dibuat grafik berulang di seluruh ubin tanpa sambungan.
- **Ditempatkan oleh**: **UV coordinates** mengikuti muka (muka dorong/tarik: sepanjang setiap muka; mesh: UV-nya, satu satuan UV = satu ubin), **Box** memproyeksikan dari sumbu terdekat dari tiga sumbu, **Triplanar** memadukan tiga proyeksi pada permukaan yang miring (**Ketajaman campuran**: lebih tinggi berarti perpaduan lebih tegas).
- **Normal strength** menskalakan masukan normal. **Displacement scale** menentukan seberapa jauh masukan displacement menggerakkan titik-titik mesh.
- {{ui:Input lainnya}} menampilkan sisa masukan OpenPBR: coat, fuzz, subsurface, thin film, transmission dan warnanya.

## Dalam gambar berkualitas tinggi

Path tracer membaca base color, roughness, metalness, opacity, normal dan emission dari grafik saat nilainya berubah di sepanjang permukaan. Masukan lain yang Anda hubungkan (misalnya coat yang bervariasi) dipakai dengan nilai rata-ratanya; panel menyatakan yang mana. Potongan dari tekstur opacity menampilkan bentuknya, dan bayangannya tembus pandang merata. Tekstur yang bercahaya menerangi apa yang dihadapinya, tanpa diambil sampel sebagai lampu.

**Displacement** hanya menggerakkan titik-titik mesh, jadi tambahkan modifier Subdivision untuk detail ([Modifier](topic:modifiers)). Muka dorong/tarik mempertahankan bentuknya dan mendapat tonjolan dari normal.

:::tip
Pada komputer dengan WebGPU, grafik dihitung di kartu grafis; tanpanya, dihitung di prosesor. Hasilnya sama.
:::
