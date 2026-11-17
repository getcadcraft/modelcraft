---
title: Gambar muka dengan garis, persegi panjang, lingkaran dan busur
summary: Buat muka datar di tanah atau di muka lain, pisahkan dengan garis, dan gambar lingkaran serta poligon dengan jumlah sisi yang Anda inginkan.
keywords: gambar, garis, persegi panjang, lingkaran, poligon, offset, inset, bingkai, batas, busur, kurva, spline, halus, kabel, jalur, tonjolan, radius, kurva, muka, denah lantai, jejak, pisah, sisi, segmen, garis besar, pensil
from: b6d7b7dd
---

Semua di ModelCraft dimulai sebagai **muka** datar: permukaan yang tertutup oleh tepi. Anda dapat menggambar muka langsung dengan {{ui:Persegi panjang}}, {{ui:Lingkaran}} atau {{ui:Poligon}}, atau membuat garis besar satu tepi per satu dengan {{ui:Garis}}. Muka adalah yang diubah [Dorong/tarik](topic:push-pull) menjadi solid.

## Gambar persegi panjang

1. Tekan {{key:R}}.
2. Klik sudut pertama: di tanah, atau di muka mana pun pada model.
3. Gerakkan penunjuk. Persegi panjang tetap di tanah (atau di muka tempat Anda mulai), dan kotak nilai ({{ui:Dimensi}}) menunjukkan lebarnya dan kedalamannya. Tip mengatakan "Persegi" jika sisinya sama panjang.

   Untuk menggambar di bidang lain, arahkan ke bidang itu: muka yang melalui sudut pertama menaruh persegi panjang di muka itu, dan snap ke titik di luar bidang (titik ujung, tepi, atau sumbu biru) membuat persegi panjang berdiri tegak melalui kedua sudut. Snap kembali ke titik di bidang pertama dan persegi panjang akan berbaring lagi. Untuk menjaga satu bidang, tekan tombol panah: {{key:Up}} menjaga persegi panjang tetap datar (bidang biru), {{key:Right}} pada bidang merah, {{key:Left}} pada bidang hijau. Tekan tombol yang sama lagi untuk membuka kunci.
4. Klik sudut yang berlawanan, atau ketik kedua ukuran dipisahkan koma lalu tekan {{key:Enter}}: `4m,3m`, `4000,3000` pada model milimeter, atau `12',10'6"` dalam kaki dan inci.

   Muka muncul dengan empat tepi mengelilinginya.

Ukuran yang diketik mengikuti arah tempat Anda menunjuk: jika penunjuk berada di kiri sudut pertama saat Anda mengetik, persegi panjang akan tumbuh ke kiri.

:::warning
Koma memisahkan dua ukuran, jadi tidak boleh menjadi tanda desimal. Ketik `2.5m,3m`, jangan pernah `2,5m`.
:::

## Gambar lingkaran atau poligon

1. Tekan {{key:C}} untuk lingkaran atau {{key:N}} untuk poligon.
2. Untuk mengubah jumlah sisi, ketik sebelum Anda klik: `12s` (atau cukup `12`) lalu {{key:Enter}}. Lingkaran dimulai dengan 24 sisi dan poligon dengan 6. Tip menampilkan jumlah saat ini, dan ModelCraft menyimpannya untuk lingkaran berikutnya sampai Anda mengubahnya atau berganti alat.
3. Klik pusat, di tanah atau di muka. Untuk memusatkannya pada muka, arahkan ke tengah muka ("Pusat muka") atau ke tengah salah satu tepinya ("Titik tengah") dengan penunjuk tepat di dalam muka itu: lingkaran digambar pada muka itu, bahkan di ujung sempit dari kotak yang panjang.
4. Klik untuk menentukan radius, atau ketik ({{ui:Radius}} di kotak nilai) lalu tekan {{key:Enter}}.

Lingkaran adalah poligon dengan banyak sisi. Saat Anda menarik lingkaran ke atas dengan Dorong/tarik, sisinya dilembutkan sehingga silinder terbaca sebagai satu permukaan halus.

## Gambar busur

1. Tekan {{key:A}} ({{ui:Busur}}).
2. Klik tempat busur dimulai, lalu tempat berakhirnya (atau ketik panjang di antara keduanya).
3. Gerakkan penunjuk untuk membuat busur menggembung ke luar, lalu klik. Tip mengatakan "Setengah lingkaran" jika tonjolannya setengah dari jarak antara ujung-ujungnya. Atau ketik seberapa jauh bagian tengah menjorok: `2` lalu {{key:Enter}}.

Untuk menggambar busur yang mengelilingi sebuah titik, gunakan {{ui:Busur dari pusat}}: klik pusatnya, lalu tempat busur dimulai (atau ketik radiusnya), lalu tempat berakhirnya (atau ketik sudut dalam derajat, seperti `90`). Busur akan melakukan snap pada kelipatan 15°.

Busur yang dimulai pada muka digambar pada muka itu; jika tidak, busur berada di tanah, atau berdiri tegak ketika kedua ujungnya berada pada ketinggian yang berbeda. Busur memiliki 12 segmen; ketik `24s` saat menggambar untuk lebih banyak. Busur menutup muka seperti garis: busur yang melintasi sudut persegi panjang membaginya.

## Gambar kurva halus

{{ui:Kurva}} menggambar garis halus yang melewati setiap titik yang Anda klik: kabel, jalur pegangan tangga, tepi taman. Kurva bisa keluar dari tanah: titik melakukan snap ke sudut, tepi, dan muka di mana pun, dan tombol panah mengunci merah, hijau atau biru seperti pada {{ui:Garis}}.

1. Klik {{ui:Kurva}} di grup {{ui:Gambar}}.
2. Klik titik-titik yang dilalui kurva. Ketik `<0,0,1>` lalu {{key:Enter}} untuk titik 1 di atas titik terakhir, `[x,y,z]` untuk tempat yang tepat, atau panjang untuk titik sejauh itu ke arah penunjuk.
3. Tekan {{key:Enter}} atau klik dua kali untuk selesai. Klik titik pertama lagi untuk menutup kurva. {{key:Backspace}} membatalkan titik terakhir.

Kurva dipilih sebagai satu bagian. Untuk mengubahnya, pilih kurva lalu klik {{ui:Edit titik}} di {{ui:Info entitas}}: titik-titiknya tampil sebagai kotak. Klik satu, lalu klik tempat tujuannya (atau ketik `<dx,dy,dz>`). {{key:Esc}} mengembalikan titik, dan mengakhiri pengeditan. Kurva datar yang tertutup membentuk muka; kurva yang menjadi garis besar muka tidak dapat diedit lagi.

## Offset: batas di dalam atau di luar muka

{{ui:Offset}} menyalin garis besar muka sejauh jarak tertentu ke dalam (atau ke luar), untuk bingkai, batas, ambang jendela, atau kaca layar.

1. Tekan {{key:F}} dan klik muka, atau pilih muka dulu lalu tekan {{key:F}}.
2. Gerakkan penunjuk ke dalam muka untuk garis besar dalam, atau ke luar untuk garis besar luar. Garis baru mengikuti, dan tip menunjukkan jaraknya.
3. Klik, atau ketik jarak dan tekan {{key:Enter}}.

Muka terbagi menjadi dua: muka dalam dan bingkai di sekelilingnya (atau cincin baru di luar). Dorong atau tarik salah satunya segera: untuk layar, gambar kotak, dorong sampai ketebalannya, offset muka depan 30 mm ke dalam dan dorong muka dalam sedikit ke dalam untuk kaca. Lubang pada muka juga ikut di-offset, dan busur atau lingkaran tetap menjadi satu kurva (yang lebih kecil atau lebih besar).

- **Klik dua kali** muka dengan {{ui:Offset}} untuk meng-offset-nya lagi dengan jarak terakhir.
- **Tepi:** pilih rangkaian tepi yang tersambung dalam satu bidang (misalnya dua garis pada huruf L), tekan {{key:F}}, pindahkan ke sisi yang Anda inginkan, lalu ketik jarak: salinan sejajar digambar, dengan sudut potong miring.
- Jika jaraknya lebih besar dari yang diizinkan muka, ModelCraft memberi tahu Anda dan tidak menggambar apa pun.

## Busur, lingkaran dan poligon adalah kurva

Klik segmen mana pun dari busur, lingkaran atau poligon dan seluruh kurva dipilih. {{ui:Info entitas}} kemudian menampilkan radiusnya, segmennya, sudutnya (untuk busur), dan panjangnya. Ketik radius baru di sana untuk mengubah ukurannya dari pusatnya; muka yang digambar di bidangnya mengikuti. Setelah muka kurva didorong atau ditarik, radiusnya tetap seperti itu.

## Gambar dengan garis

1. Tekan {{key:L}}.
2. Klik tempat garis dimulai.
3. Klik tempat garis berakhir, atau ketik panjang dan tekan {{key:Enter}}. Panjang yang diketik mengikuti arah yang ditunjukkan penunjuk.
4. Terus klik. Setiap klik memulai garis berikutnya dari ujung garis terakhir.
5. Tutup garis besar dengan mengklik titik pertama lagi. Ketika garis-garis itu menutup lingkaran datar, lingkaran itu terisi dengan muka dan alat berhenti menyambung. Tekan {{key:Esc}} untuk berhenti kapan saja.

Garis mengikuti arah merah, hijau dan biru ketika Anda mendekatinya; garis berubah warna itu dan tip mengatakan "Pada sumbu merah". Lihat [Inferensi dan snap](topic:inference) untuk cara mengunci arah dan melakukan snap ke titik.

### Ke mana garis pergi jika tidak menyentuh apa pun

- Garis yang dimulai pada muka tetap berada di bidang muka itu.
- Garis yang dimulai di tanah, atau di ruang kosong, tetap rata dengan titik awalnya. Jika Anda melihat model dari samping, garis justru masuk ke bidang vertikal yang menghadap Anda.
- Untuk menggambar garis ke tempat yang tepat, ketik titik: `[x,y,z]` untuk titik di model, atau `<dx,dy,dz>` untuk offset dari titik awal. Lihat [Ketik ukuran pasti](topic:value-box).

## Bagi muka

Gambar garis melintasi muka, dari satu tepi ke tepi lain (atau dari tepi ke tepi melalui garis lain). Muka terbagi menjadi dua muka. Masing-masing mempertahankan sisinya dan warnanya. Hal yang sama berlaku untuk persegi panjang atau lingkaran yang digambar pada muka: bentuk itu menjadi muka sendiri di dalam muka yang lebih besar, yang kini berlubang.

Begitulah cara Anda menata ruangan di atas pelat lantai, jendela di dinding, atau anak tangga di tangga: gambar garis besarnya di muka, lalu dorong atau tarik muka baru.

## Muka menghadap arah yang salah

Setiap muka memiliki depan dan belakang. Bagian belakang tampak abu-abu kebiruan. Muka yang digambar di tanah menghadap ke atas; muka yang digambar di muka lain menghadap ke arah yang sama dengan muka tersebut.

Jika muka menampilkan belakangnya di tempat Anda mengharapkan bagian depan, pilih muka itu lalu klik {{ui:Balik muka}} di {{ui:Info entitas}}.

## Yang Anda lihat saat menggambar

- Penanda berwarna di tempat penunjuk melakukan snap, dan namanya di tip di kiri bawah.
- Pratinjau garis atau bentuk.
- Ukuran langsung di kotak nilai. Anda dapat mengetik di atasnya kapan saja.

## Jika bentuk tidak berada di tempat yang Anda harapkan

- Pada layar sentuh, lihat [Pemecahan masalah](topic:troubleshooting#a-shape-starts-in-the-wrong-place-on-a-touch-screen).
- Jika garis melakukan snap ke sesuatu yang jauh di belakang, putar sedikit: titik yang tersembunyi di balik muka tidak pernah melakukan snap, tetapi titik di tepinya bisa.
- Tekan {{key:Mod+Z}} untuk mengurungkan bentuk terakhir; satu urungkan menghapus satu garis atau satu bentuk.
