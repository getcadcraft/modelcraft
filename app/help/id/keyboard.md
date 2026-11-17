---
title: Tombol pintas dan aksi mouse
summary: Setiap pintasan keyboard, aksi mouse, gestur trackpad, dan gestur sentuh di ModelCraft, dikelompokkan menurut fungsinya.
keywords: keyboard, pintasan, tombol pintas, tombol, mouse, trackpad, sentuh, lembar contekan, ctrl, perintah, tombol panah
from: e2348957
---

Ini adalah tombol dorong/tarik, yaitu yang digunakan ModelCraft secara default. Untuk gaya lainnya, lihat [Tombol gaya Modeler](topic:keyboard#modeler-keys) di bawah dan [Pengaturan ModelCraft](topic:settings).

Pintasan bekerja saat tampilan 3D atau tombol bilah alat sedang difokus. Jika Anda baru saja mengetik di kolom panel atau mengubah daftar di {{ui:Style}}, klik di tampilan 3D terlebih dahulu, atau tombol Anda akan masuk ke kolom itu. Lihat [Tombol, mouse, dan trackpad](common:keys) untuk cara menuliskan tombol di setiap komputer.

## Alat

| Tombol | Alat |
|---|---|
| {{key:Space}} | {{ui:Select}} |
| {{key:L}} | {{ui:Line}} |
| {{key:R}} | {{ui:Rectangle}} |
| {{key:C}} | {{ui:Circle}} |
| {{key:N}} | {{ui:Polygon}} |
| {{key:A}} | {{ui:Arc}} |
| {{key:F}} | {{ui:Offset}} |
| {{key:B}} | {{ui:Paint}} |
| {{key:P}} | {{ui:Push/pull}} |
| {{key:M}} | {{ui:Move}} |
| {{key:Q}} | {{ui:Rotate}} |
| {{key:S}} | {{ui:Scale}} |
| {{key:E}} | {{ui:Eraser}} |
| {{key:T}} | {{ui:Tape}} pengukur |
| {{key:D}} | {{ui:Dimension}} |
| {{key:O}} | {{ui:Orbit}} |
| {{key:H}} | {{ui:Pan}} |
| {{key:Z}} | {{ui:Zoom}} |

Huruf alat hanya bekerja tanpa tombol pengubah: {{key:Shift}} dengan huruf tidak melakukan apa-apa, kecuali dua yang di bawah.

## Model dan file

| Tombol | Fungsi |
|---|---|
| {{key:G}} | Buat komponen dari pilihan |
| {{key:Shift+G}} | Buat grup dari pilihan |
| {{key:Shift+Z}} | Zoom batas (seluruh model) |
| {{key:Mod+Z}} | Urungkan |
| {{key:Mod+Y}} atau {{key:Mod+Shift+Z}} | Ulangi |
| {{key:Mod+S}} | Simpan (mengunduh file `.modelcraft`) |
| {{key:Mod+O}} | Buka model |
| {{key:Mod+A}} | Pilih semuanya (di dalam grup yang terbuka, jika ada) |
| {{key:Mod+C}} | Salin pilihan |
| {{key:Mod+X}} | Potong pilihan |
| {{key:Mod+V}} | Tempel: salinan mengikuti penunjuk, klik di tempat yang diinginkan |
| {{key:Mod+Shift+V}} | Tempel di tempat yang sama (di tempat asal salinan) |
| {{key:Mod+D}} | Duplikat: salinan bergerak mengikuti penunjuk, klik untuk meletakkannya |
| {{key:Delete}} atau {{key:Backspace}} | Hapus pilihan |
| {{key:PageDown}} / {{key:PageUp}} | Adegan berikutnya / sebelumnya |
| {{key:F1}} | Buka atau tutup bantuan ini (juga {{ui:Help}} di bilah aplikasi; {{key:Esc}} di dalam bantuan menutupnya) |
| {{key:Ctrl+Shift+F}} | Mode layar: layar penuh, lalu bilah disembunyikan, lalu normal (Control juga di Mac) |

## Esc

{{key:Esc}} mundur satu tingkat setiap kali Anda menekannya:

1. Membatalkan apa yang sedang dikerjakan alat (garis yang sedang digambar, dorong/tarik, pemindahan). Semuanya kembali.
2. Beralih ke {{ui:Select}}.
3. Menghapus pilihan.
4. Menutup grup yang sedang Anda sunting.

Tombol ini juga menghentikan adegan yang sedang diputar. Di kotak nilai, {{key:Esc}} menghapus apa yang Anda ketik dan kembali ke tampilan.

## Saat alat sedang bekerja

| Tombol | Fungsi |
|---|---|
| Angka, atau salah satu dari `. , - ' " [ < * /` | Mulai mengetik di kotak nilai |
| {{key:Enter}} | Menerapkan apa yang Anda ketik di kotak nilai |
| {{key:Right}} | Mengunci ke sumbu merah (tekan lagi untuk membuka kunci) |
| {{key:Left}} | Mengunci ke sumbu hijau |
| {{key:Up}} | Mengunci ke sumbu biru |
| {{key:Down}} | Mengunci sejajar dengan tepi terakhir yang Anda arahkan sebelum klik pertama |
| Tahan {{key:Shift}} | Menahan arah yang sedang Anda snap, selama ditahan |
| {{key:Ctrl}}, {{key:Mod}} atau {{key:Alt}} (Move) | Beralih antara memindahkan dan menyalin |

Kunci dengan tombol panah bekerja di {{ui:Line}}, {{ui:Rectangle}}, {{ui:Circle}}, {{ui:Polygon}}, {{ui:Move}}, {{ui:Scale}}, dan {{ui:Tape}} (saat mengukur dari sebuah titik), setelah klik pertama. {{ui:Push/pull}} selalu bergerak sepanjang arah muka dan tidak memiliki kunci. Di {{ui:Rotate}}, tombol panah menampilkan pesan "Terkunci" setelah klik pertama tetapi tidak mengubah putaran.

## Tombol panah di waktu lain

Saat tidak ada alat yang sedang bekerja, tombol panah menggerakkan kamera:

| Tombol | Fungsi |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Orbit |
| {{key:Shift}} dengan panah | Geser |

## Mouse

| Aksi | Fungsi |
|---|---|
| Klik | Menggunakan alat yang aktif |
| Tekan, seret, lepas | Sama dengan dua klik (untuk alat gambar); pilihan kotak (untuk {{ui:Select}}); menghapus di sepanjang jalan (untuk {{ui:Eraser}}) |
| Klik dua kali | {{ui:Select}}: muka beserta tepinya, tepi beserta mukanya, membuka grup; ruang kosong menutup grup. {{ui:Push/pull}}: mengulang jarak terakhir |
| Klik tiga kali | {{ui:Select}}: semua yang terhubung |
| {{key:Shift}} + klik | {{ui:Select}}: masuk dan keluar dari pilihan |
| {{key:Mod}} + klik | {{ui:Select}}: tambahkan ke pilihan |
| {{key:Shift}} + {{key:Mod}} + klik | {{ui:Select}}: hapus dari pilihan |
| Seret dengan tombol tengah | Orbit, dengan alat apa pun |
| {{key:Shift}} + seret tombol tengah | Geser, dengan alat apa pun |
| Seret dengan tombol kanan | Geser, dengan alat apa pun |
| Roda | Zoom ke arah penunjuk |

Tidak ada menu klik kanan.

## Trackpad

Apa yang dilakukan geseran dua jari bergantung pada {{ui:Settings}} › {{ui:ModelCraft}} › Penggulungan:

| Gestur | Trackpad (atau diturunkan) | Roda mouse |
|---|---|---|
| Geseran dua jari | Orbit | Zoom ke arah penunjuk |
| {{key:Shift}} + geseran dua jari | Geser | Zoom |
| Cubit | Zoom ke arah penunjuk | Zoom ke arah penunjuk |
| Tekan dan seret dua jari (klik sekunder ditahan) | Geser | Geser |

Lihat [Orbit, geser, dan zoom](topic:orbit-pan-zoom#on-a-trackpad) dan [Pengaturan ModelCraft](topic:settings#scrolling-mouse-wheel-or-trackpad).

## Tombol gaya Modeler

Dengan {{ui:Settings}} › {{ui:ModelCraft}} › Kontrol diatur ke gaya Modeler:

| Tombol | Fungsi |
|---|---|
| {{key:W}} atau {{key:Space}} | {{ui:Select}} |
| {{key:L}} / {{key:B}} / {{key:C}} / {{key:N}} | {{ui:Line}} / {{ui:Rectangle}} / {{ui:Circle}} / {{ui:Polygon}} |
| {{key:E}} | {{ui:Push/pull}} (ekstrusi) |
| {{key:T}} | {{ui:Tape}} pengukur |
| {{key:D}} | {{ui:Dimension}} |
| {{key:G}} | Pindahkan pilihan sekaligus, dari penunjuk |
| {{key:R}} | Putar pilihan di sekitar tengahnya (sumbu biru) |
| {{key:S}} | Skala pilihan di sekitar tengahnya |
| {{key:X}} / {{key:Y}} / {{key:Z}} saat memindahkan atau memutar | Mengunci sumbu merah / hijau / biru (tekan lagi untuk membuka kunci) |
| Klik atau {{key:Enter}} | Meletakkannya |
| {{key:Esc}} atau klik kanan | Mengembalikannya |
| {{key:Shift+D}} | Duplikat dan pindahkan salinan |
| {{key:X}} atau {{key:Delete}} | Hapus pilihan |
| {{key:A}} / {{key:Alt+A}} | Pilih semua / tidak memilih apa pun |
| {{key:Tab}} | Buka grup atau komponen yang dipilih; tekan lagi untuk menutup |
| {{key:Mod+G}} / {{key:Mod+Shift+G}} | Buat grup / buat komponen |
| Numpad {{key:1}} / {{key:3}} / {{key:7}} | Tampak depan / kanan / atas ({{key:Mod}} untuk belakang / kiri / bawah) |
| Numpad {{key:5}} | Perspektif nyala atau mati |
| Numpad {{key:.}} | Zoom ke pilihan |
| {{key:Home}} atau {{key:Shift+C}} | Zoom batas |
| {{key:Shift+Tab}} | Snap nyala atau mati |
| Seret tombol tengah / dengan {{key:Shift}} / dengan {{key:Mod}} | Orbit / geser / zoom |
| Seret dengan {{key:Alt}} / seret dengan {{key:Alt+Shift}} | Orbit / geser (tanpa perlu tombol tengah) |

Salin, tempel, urungkan, simpan, dan buka tetap menggunakan tombol yang tercantum di atas. Nilai yang diketik, kotak nilai, dan {{ui:Push/pull}} bekerja sama di kedua gaya.

## Layar sentuh

| Gestur | Fungsi |
|---|---|
| Ketuk | Satu klik dengan alat yang aktif |
| Ketuk dua kali | Klik dua kali |
| Tekan, seret, angkat | Sama dengan tekan, seret, lepas dengan mouse |
| Dua jari: cubit | Zoom |
| Dua jari: bergerak bersama | Geser (Pengaturan › ModelCraft › Layar sentuh dapat membuatnya menjadi Orbit) |
| Tiga jari: bergerak bersama | Orbit (Geser saat dua jari melakukan orbit) |
| Tahan satu jari diam | Menyelesaikan alat, seperti {{key:Enter}}; saat tidak ada yang terjadi, seret untuk orbit |
| Jari kedua saat aksi satu jari | Membatalkan aksi itu |
| Alat {{ui:Orbit}}, lalu seret satu jari | Orbit |

Untuk mengetik nilai di layar sentuh, ketuk kotak nilai di bagian bawah, ketik, lalu tekan tombol Enter (atau Go) pada keyboard.

## Di mana Pindahkan berada

Pindahkan berada di alat {{ui:Move}}, tombol {{key:M}}: pilih apa yang akan dipindahkan, klik titik dasar, lalu klik titik kedua atau ketik jarak. Lihat [Pindahkan, salin, dan buat array](topic:move-copy).
