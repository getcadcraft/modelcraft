---
title: Orbit, geser, dan zoom
summary: Bergerak di sekitar model dengan mouse, trackpad, layar sentuh, atau keyboard, dan lompat ke tampilan standar.
keywords: orbit, geser, zoom, tekan lama, tiga jari, dua jari, ketuk, navigasi, kamera, tampilan, putar tampilan, trackpad, sentuh, cubit, tombol tengah, zoom batas, perspektif, paralel, tampilan atas, iso
from: 10d4d33a
---

Anda dapat menggerakkan kamera kapan saja, bahkan di tengah menggambar garis atau mendorong muka: alatnya menunggu di tempat ia berada.

## Dengan mouse tiga tombol

| Untuk | Lakukan ini |
|---|---|
| Orbit | Seret dengan tombol tengah (tekan roda) |
| Geser | Seret dengan tombol kanan, atau tahan {{key:Shift}} dan seret dengan tombol tengah. Menekan atau melepas {{key:Shift}} selama seretan akan beralih antara orbit dan geser |
| Zoom | Putar roda. Zoom mengarah ke muka di bawah penunjuk, atau ke titik di bawahnya pada kedalaman pusat tampilan |
| Melihat seluruh model | {{key:Shift+Z}} atau {{ui:Batas}} |

Orbit memutar tampilan di sekitar bagian model di bawah penunjuk, sehingga titik itu tetap di tempatnya selagi semuanya berputar di sekelilingnya. Di atas ruang kosong, tampilan berputar di sekitar pusat tampilan. Geser mempertahankan titik yang Anda pegang di bawah penunjuk.

Untuk selalu berorbit di sekitar pusat tampilan, atau untuk membuat orbit dan geser lebih cepat atau lebih lambat, buka {{ui:Pengaturan}} ({{key:Mod+,}}), tab {{ui:ModelCraft}}, **Orbit and pan**. Kecepatan itu berlaku untuk mouse, trackpad, sentuhan, dan tombol panah.

Klik kanan tanpa menyeret tidak melakukan apa-apa; ModelCraft tidak memiliki menu klik kanan.

## Tanpa tombol tengah

Gunakan alat kamera di bilah alat, atau keyboard:

1. Tekan {{key:O}} (atau klik {{ui:Orbit}}) dan seret dengan tombol kiri untuk berorbit. Tahan {{key:Shift}} selama seretan untuk menggeser.
2. Tekan {{key:H}} (atau klik {{ui:Geser}}) dan seret untuk menggeser.
3. Tekan {{key:Z}} (atau klik {{ui:Zoom}}) dan seret ke atas untuk memperbesar, ke bawah untuk memperkecil.
4. Tekan {{key:Space}} untuk kembali ke {{ui:Pilih}}, atau tekan tombol alat yang ingin Anda pakai berikutnya.

Alat kamera menggantikan alat yang sedang Anda pakai. Untuk melihat-lihat di tengah suatu operasi tanpa kehilangan operasinya, gunakan keyboard:

- Tombol panah berorbit.
- {{key:Shift}} bersama tombol panah menggeser.

Selagi alat gambar berada di tengah operasi (setelah klik pertamanya), tombol panah mengunci arah alih-alih berorbit. Lihat [Inferensi dan snapping](topic:inference#lock-a-direction).

## Di trackpad

Cara termudah: buka {{ui:Pengaturan}} ({{key:Mod+,}}), tab {{ui:ModelCraft}}, dan atur Scrolling ke **Trackpad** (atau biarkan di "Work it out"). Lalu geser dengan dua jari untuk berorbit, tahan {{key:Shift}} dan geser untuk menggeser, dan cubit untuk zoom, tanpa tombol kamera. Lihat [Pengaturan ModelCraft](topic:settings#scrolling-mouse-wheel-or-trackpad).

Dengan Scrolling diatur ke **Mouse wheel**:

:::mac
- **Zoom:** gulir dengan dua jari, atau cubit. Keduanya memperbesar ke arah penunjuk.
- **Geser:** tekan dengan dua jari (klik sekunder) dan biarkan jari tetap menekan selagi Anda menyeret. Aktifkan "Secondary click" di **System Settings**, lalu **Trackpad**, jika klik dua jari tidak berfungsi.
- **Orbit:** tekan {{key:O}} dan seret dengan satu jari, atau gunakan tombol panah.
- Menahan {{key:Ctrl}} saat mengklik mungkin tidak dihitung sebagai klik kanan di ModelCraft, tergantung peramban: itu bisa bertindak sebagai klik dengan {{key:Ctrl}} ditahan. Gunakan tekan dua jari untuk menggeser.
:::

:::windows linux
- **Zoom:** gulir dengan dua jari. Cubit juga berfungsi jika driver touchpad mengirimkannya sebagai gulir dengan {{key:Ctrl}}.
- **Geser:** seret dengan tombol kanan (pada banyak touchpad, tekan sudut kanan bawah dan seret), atau tekan {{key:H}} dan seret.
- **Orbit:** tekan {{key:O}} dan seret, atau gunakan tombol panah.
:::

Dengan Mouse wheel, gulir dua jari memperbesar; tidak menggeser. Ini berlawanan dengan banyak halaman web, dan begitulah roda mouse berfungsi di sebagian besar pemodel 3D.

:::tip
{{key:Space}} memilih alat {{ui:Pilih}} di ModelCraft. Menahan {{key:Space}} dan menyeret tidak menggeser, seperti di beberapa aplikasi lain.
:::

## Di layar sentuh

:::touch
- **Satu jari** memakai alat yang sedang aktif: **ketuk** untuk klik, **tekan dan seret** untuk menggambar atau menyeret.
- Selagi jari alat gambar menekan, **loupe** di atasnya menampilkan apa yang ada di bawah jari, sehingga Anda dapat melihat titik ujung, titik tengah, atau tepi yang akan dilekatkan sebelum Anda mengangkat jari.
- **Tahan diam** selama setengah detik untuk menyelesaikan apa yang sedang dilakukan alat, seperti {{key:Enter}}: sebuah kurva, rantai garis. Jika tidak ada yang sedang berlangsung, menahan diam lalu menyeret jari yang sama akan **berorbit** sampai Anda mengangkat jari.
- **Dua jari** yang diseret bersama **menggeser**; **cubit** untuk zoom. Keduanya bekerja dalam satu gestur.
- **Tiga jari** yang diseret bersama **berorbit**.
- Untuk menukarnya (dua jari berorbit, tiga jari menggeser), buka {{ui:Pengaturan}}, tab {{ui:ModelCraft}}, Touch screen.
- Menaruh jari kedua **membatalkan** apa yang dimulai jari pertama (persegi panjang yang setengah tergambar, push/pull yang sedang berlangsung). Angkat jari Anda dan mulai lagi.
- Bilah kecil di bagian bawah tampilan memiliki **Done** ({{key:Enter}}), **Cancel** ({{key:Esc}}), dan **Undo**, untuk saat tidak ada keyboard.
- Snapping dan pemilihan menjangkau sedikit lebih jauh dibanding dengan mouse, dan tombolnya lebih besar, sehingga jari dapat mengenainya.
:::

:::mouse
Di layar sentuh, satu jari memakai alat yang sedang aktif (ketuk untuk klik, tahan diam untuk menyelesaikan, atau tahan diam lalu seret untuk berorbit), dua jari menggeser dan mencubit untuk zoom, tiga jari berorbit, dan sebuah bilah kecil menyediakan Done, Cancel, dan Undo.
:::

## Tampilan standar

1. Klik {{ui:Tampilan}} di ujung kanan bilah alat.
2. Pilih {{ui:Iso}}, {{ui:Atas}}, {{ui:Depan}}, {{ui:Kanan}}, {{ui:Belakang}}, {{ui:Kiri}}, atau {{ui:Bawah}}.

Tampilan berputar ke arah itu dan memuat seluruh model. {{ui:Depan}} menghadap utara, sepanjang sumbu hijau; {{ui:Atas}} menghadap lurus ke bawah dengan utara di atas.

Kubus tampilan di kanan atas tampilan melakukan hal yang sama dengan satu klik, ditambah tepi dan sudut, cincin kompas untuk memutar model, dan tombol beranda. Lihat [Kubus tampilan](topic:view-cube).

## Proyeksi perspektif dan paralel

Pilih {{ui:Tampilan}}, lalu {{ui:Perspektif}}. Tanda centang berarti perspektif aktif. Jika dimatikan, tampilan menjadi proyeksi paralel (ortografis): garis yang sejajar dalam model tetap sejajar di layar, yang Anda inginkan untuk elevasi dari {{ui:Depan}} atau {{ui:Kanan}}. Bilah status menampilkan "Perspective." atau "Parallel projection."

Setiap scene mengingat apakah ia berada dalam perspektif. Lihat [Simpan tampilan sebagai scene](topic:scenes).
