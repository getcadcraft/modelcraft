---
title: Permukaan bebas bentuk (NURBS)
summary: Lengkung dan permukaan licin untuk cangkerang produk, badan kereta dan lambung bot — loft, sweep, rangkaian lengkung, tampalan empat tepi, campuran, pemangkasan — dengan kesinambungan G0, G1 dan G2 diukur pada permukaan tepat, pepejal dengan gabung, tolak dan persilang, paparan zebra dan kelengkungan, muka yang dipadankan kepada imbasan dengan ralat diukur, dan fail STEP atau IGES.
keywords: nurbs, imbasan, kejuruteraan songsang, padan, jejaring ke permukaan, awan titik, stl, pangkas, dipangkas, lubang, potong, pepejal, boolean, gabung, tolak, persilang, beza, jahit, tertutup, bentuk bebas, bentuk-bebas, permukaan, b-spline, bspline, lengkung, spline, loft, sweep, landasan, rangkaian, coons, tampalan, campur, padankan, kesinambungan, g0, g1, g2, tangen, kelengkungan, zebra, titik kawalan, simpul, darjah, step, iges, kelas a
from: 09887405
---

Panel **Permukaan** membuat lengkung dan permukaan licin jenis yang digunakan untuk cangkerang produk, badan kereta dan lambung bot: NURBS, matematik yang sama digunakan oleh pemodel permukaan lain. Segala-galanya diukur pada permukaan tepat, tidak sekali-kali pada segi tiga yang anda lihat. Saiz dalam panel adalah dalam **milimeter**, tanpa mengira unit yang ditunjukkan model.

Buka dari panel sebelah kanan: {{ui:Permukaan}} › {{ui:Buka panel Permukaan}}. Model yang sudah mempunyai permukaan akan membukanya dengan sendirinya.

## Cara arahan berfungsi

1. Tekan arahan (contohnya **Loft**). Panel memberitahu apa yang masih diperlukannya: titik, lengkung, tepi permukaan atau hujung lengkung.
2. Pilih mereka: klik dalam pandangan 3D, atau tekan **Pilih** (atau butang tepi dan hujung) di sebelah setiap satu dalam senarai. Untuk tepi, klik berhampiran tepi permukaan itu.
3. Semak pilihan (darjah, toleransi, kesinambungan, …) dan tekan **Buat**.

Lengkung daripada titik mengambil titik yang ditaip satu setiap baris (`x, y, z` dalam mm), atau **Pilih titik dalam pandangan**: setiap klik menggunakan snap yang sama seperti alat lukisan; tekan <kbd>Enter</kbd> atau klik dua kali untuk selesai, <kbd>Esc</kbd> untuk berhenti.

## Lengkung

- **Lengkung melalui titik** melalui setiap titik. **Lengkung mengikut titik kawalan** mengikut sangkar titik sebaliknya.
- **Masukkan simpul**, **Naikkan darjah** dan **Turunkan darjah** menukar cara lengkung diterangkan tanpa mengalihkannya (menurunkan ditolak apabila lengkung akan bergerak lebih daripada toleransi). **Bina semula lengkung** memberinya bilangan titik kawalan baharu dan memberitahu sejauh mana ia bergerak.
- **Padankan lengkung** menjadikan hujung satu lengkung bertemu hujung yang lain dengan G0 (bersentuhan), G1 (arah sama) atau G2 (kelengkungan sama juga). **Campur lengkung** menambah lengkung baharu antara dua hujung.
- **Cantum lengkung** dan **Pisahkan lengkung**.

## Permukaan

- **Loft** melalui dua atau lebih lengkung, **Permukaan lurus** antara dua, **Ekstrud lengkung**, **Putar lengkung**.
- **Sweep sepanjang satu landasan** membawa profil sepanjang laluan tanpa memutarnya; **Sweep sepanjang dua landasan** mengekalkan hujung profil pada kedua-dua landasan. Sweep dipadankan: baris status memberitahu sejauh mana ia kekal dekat dengan sweep sebenar.
- **Permukaan daripada rangkaian lengkung** melalui grid lengkung (pilihan pertama ialah profil, yang selebihnya ialah panduan). **Tampalan daripada empat tepi** mengisi empat lengkung yang bertemu di bucunya.
- **Padankan permukaan** menjadikan tepi permukaan bertemu jirannya dengan G0, G1 atau G2; **Campur permukaan** menambah permukaan antara dua tepi.
- **Ofset permukaan**, **Lanjutkan permukaan** (permukaan terus seperti yang sedang dilalui), **Bina semula permukaan**, dan simpul serta darjah untuk permukaan.

## Memeriksa kualiti

Jadual **Tepi dikongsi** menyenaraikan setiap tepi yang dikongsi oleh dua permukaan, dengan jurang (mm), sudut antara keduanya (°) dan lonjakan kelengkungan (1/mm), serta sama ada ia menjadikannya G0, G1 atau G2. Tepi yang lebih teruk daripada yang anda minta juga berada dalam **Masalah** (butang ⚠ dalam bar aplikasi) dengan pembetulan **Padankan**.

**Papar sebagai** › **Jalur zebra** dan **Kelengkungan (Gaussian)** datang daripada permukaan tepat: jalur yang berjalan tanpa putus merentasi tepi bermakna G1; jalur yang juga mengekalkan lebarnya bermakna G2. Kelengkungan ialah biru di tempat permukaan itu pelana, merah di tempat ia kubah dan putih di tempat ia rata. **Titik kawalan** melukis jaringan kawalan.

G0–G2 diukur pada 33 titik bagi setiap tepi. **G3 dan kualiti "kelas A" tidak diukur** dan tidak didakwa.

## Pangkas permukaan

Kumpulan **Pangkas** memotong permukaan tanpa mengubah bentuknya: permukaan mengekalkan semua titik kawalannya, dan hanya bahagian di dalam garis luar yang ditunjukkan, dikira dan ditulis. **Pangkas kepada segi empat tepat** dan **Pangkas dengan bulatan** bekerja pada sebahagian (0 hingga 1) permukaan dalam setiap arah, jadi ia tidak memerlukan pemilihan dalam pandangan; **Pangkas dengan lengkung** mengambil lengkung tertutup yang terletak pada permukaan (ia diunjurkan ke dalam permukaan, dan ditolak dengan perkataan apabila terbuka atau lebih daripada toleransi jauhnya). Tandakan **Potong lubang** untuk membuang bahagian dalam garis luar; biarkannya tidak ditanda untuk mengekalkan hanya bahagian dalam. Sebuah permukaan boleh mempunyai satu garis luar yang dikekalkan dan sebarang bilangan lubang; garis luar yang bersilang dengan yang lain ditolak. **Buang pemangkasan** menunjukkan semula seluruh permukaan. Tepi yang dipotong mengikut garis luar dengan tepat; {{ui:Buat asal}} panel mengambil pemangkasan kembali seperti langkah lain.

STEP membawa pemangkasan sebagai sempadan muka dan IGES sebagai permukaan dipangkas (entiti 144); kedua-duanya membacanya semula.

## Pepejal dan Boolean

Kumpulan **Pepejal** menukar permukaan kepada jasad tertutup dan menggabungkannya. Pepejal di sini ialah set permukaan panel yang bersama-sama menutup isipadu; mukanya kekal sebagai permukaan NURBS tepat dengan pemangkasannya.

- **Kotak pepejal**, **Silinder pepejal** dan **Sfera pepejal** membuat satu daripada saiz yang ditaip (dalam mm): kotak enam muka rata, silinder dengan sisi bulat dan dua hujung rata yang dipangkas kepada bulatan, sfera satu permukaan berputar.
- **Pepejal daripada permukaan** mengumpulkan permukaan yang anda buat sendiri. Pilih mereka, atau jangan pilih apa-apa untuk menggunakan setiap permukaan yang ditunjukkan yang belum berada dalam pepejal. Ia dijahit bersama dalam toleransi: jika ia tidak menutup, tiada apa berubah dan panel memberitahu berapa banyak tepi kekal terbuka dan sejauh mana ia mesti bertemu.
- **Gabung**, **Tolak** (pepejal kedua diambil dari yang pertama) dan **Persilang** (hanya apa yang dikongsi kedua-duanya) mengambil dua pepejal: klik muka setiap satu dalam pandangan, atau tekan **Pilih** dalam senarai **Pepejal**. Tandakan **Simpan dua pepejal** untuk membiarkannya di sebelah hasil.

Boolean mengekalkan setiap muka pada permukaan tepatnya dan memotongnya dengan garis luar pemangkasan baharu sepanjang persilangan. Baris hasil memberikan nombor yang diukur: sejauh mana titik enjin pepejal perlu bergerak untuk berada pada permukaan tepat (tidak lebih daripada toleransi), sejauh mana titik persilangan berada dari kedua-dua permukaan (biasanya beberapa per sejuta milimeter), isipadu, dan sama ada muka baharu menutup semula apabila dijahit semula daripada permukaan tepatnya. Isipadu diukur pada segi tiga dalam toleransi (0.05 mm melainkan anda tetapkan yang lain), jadi isipadu sfera atau silinder terbaca sedikit kurang daripada yang tepat: toleransi yang lebih kecil lebih hampir. Boolean yang tidak dapat dilakukan dengan kemas (pepejal tidak berkongsi apa-apa, garis luar akan bersilang sendiri) ditolak dengan perkataan dan tiada apa berubah. Satu Boolean ialah satu langkah {{ui:Buat asal}} panel.

Dalam senarai **Pepejal**, **Nyahkumpul** mengekalkan muka sebagai permukaan biasa; tong sampah membuang pepejal dan mukanya.

**Tambah ke model** (dalam senarai **Pepejal**) meletakkan salinan pepejal ke dalam model sebagai satu kumpulan tertutup, dengan muka sebagai segi tiga dalam 0.05 mm, dalam satu langkah {{ui:Buat asal}} model. Selepas itu ia berfungsi dengan **{{ui:Gabung}}**, **Tolak** dan **Persilang** milik model, tolak/tarik dan semakan cetakan 3D; pepejal tepat kekal dalam panel.

## Fillet dan penebalan

**Fillet antara muka** membundarkan tepi tempat dua muka satu pepejal bertemu: pilih dua muka (dalam pandangan, atau dengan **Pilih** dalam senarai), taip **jejari** dan, untuk jejari yang berubah sepanjang tepi, **jejari di hujung** (0 mengekalkan satu jejari). Bola berjejari itu digulung sepanjang tepi menyentuh kedua-dua muka; fillet ialah lengkung bulat tepat yang ditinggalkannya pada setiap titik, dicantumkan menjadi satu permukaan, dan kedua-dua muka dipangkas di tempat bola menyentuhnya. Tepi luar kehilangan bahan, sudut dalam mendapatnya. Baris hasil memberikan apa yang diukur: sejauh mana permukaan fillet dari bola yang digulung antara titik ia dibina (titik ditambah sehingga dalam satu perempat toleransi), sudut terbesar antara fillet dan setiap muka sepanjang garis sentuhan, dan nombor yang sama seperti Gabung. Jejari yang tidak sesuai (bola akan meninggalkan muka, atau muka melengkung lebih ketat daripada jejari) ditolak dengan menamakan muka itu, dan tiada apa berubah.

**Fillet beberapa tepi** membundarkan banyak tepi dalam satu langkah: pilih dua muka tepi pertama, kemudian dua muka tepi seterusnya, dan seterusnya (satu muka boleh berada dalam beberapa pasangan, contohnya muka atas kotak dalam empat daripadanya); semua tepi mendapat jejari yang anda taip. Setiap pembundaran dikira pada pepejal seperti sedia ada, kemudian ia dipotong satu demi satu, jadi susunan tidak penting. Di tempat dua tepi bulat bertemu di sudut yang tepi lainnya kekal tajam, dua fillet bertembung di sepanjang lengkung persilangan mereka (lipatan). Di tempat tiga tepi luar bulat bagi tiga muka rata yang bersudut tegak bertemu dengan satu jejari, sudut itu menjadi satu **tampalan sfera** yang bersentuhan dengan ketiga-tiga fillet (nyahtanda **Bucu** untuk mendapatkan sudut berlipat sebaliknya); tepi mesti sekurang-kurangnya dua kali jejari panjangnya di tempat kedua-dua hujungnya ialah sudut sebegitu. Baris hasil menyatakan berapa tepi dibundarkan dan bagaimana sudut itu terhasil. Tepi dalam juga boleh dibundarkan bersama, tetapi hasil yang tidak menutup semula hanya dilaporkan (baris menyatakannya), jadi semak.

**Tebalkan menjadi pepejal** memberi permukaan ketebalan: pilih, taip **ketebalan**, dan tandakan **Sisi lain** untuk menumbuhkannya ke arah sebaliknya. Muka ofset dipadankan pada permukaan dan diukur terhadapnya (baris hasil memberikan perbezaan terbesar daripada ketebalan); dinding mengikut setiap tepi dan setiap garis luar pemangkasan. Jika permukaan melengkung lebih ketat daripada ketebalan di sisi itu, atau bahagian lain daripadanya terletak lebih dekat daripada ketebalan, ia ditolak dengan menamakan permukaan dan tempatnya, dan tiada apa berubah.

## Buat asal, fail, STEP dan IGES

Panel mempunyai {{ui:Buat asal}} dan {{ui:Buat semula}} sendiri (satu langkah bagi setiap arahan). Permukaan disimpan dalam fail `.modelcraft` bersama model; ia bukan sebahagian daripada buat asal model itu sendiri, seperti bahan fail.

**STEP…** (AP242) dan **IGES…** menyimpan lengkung dan permukaan tepat seperti sedia ada (lengkung dan permukaan B-spline, tiada apa yang ditukar kepada segi tiga). Setiap permukaan ialah muka tersendiri, dengan pemangkasannya; pepejal ditulis sebagai satu cangkerang tertutup, setiap tepi dikongsi oleh dua mukanya seperti yang dijangka oleh program CAD lain (baris status memberitahu berapa pepejal dikeluarkan dengan cara itu). Dalam IGES pepejal yang sama ialah satu B-rep pepejal manifold (entiti 186 di atas cangkerang tertutup 514, muka 510, gelung 508, satu senarai tepi 504 dan satu senarai bucu 502); pepejal yang mukanya tidak berpasangan tepi demi tepi ditulis sebagai muka berasingan, dan baris memberitahu begitu. **Import…** membaca pepejal sedemikian semula sebagai pepejal, daripada STEP dan IGES. Ia membaca lengkung dan permukaan yang ditulis dengan cara ini, dan set tampalan `.ccnurbs`; pepejal STEP program lain dibuka dengan Fail › Import sebagai mesh.

## Permukaan daripada imbasan (kejuruteraan songsang)

Pilih mesh imbasan dalam model (tiada apa yang dipilih bermakna semua yang ditunjukkan), buka **Permukaan**, dan dalam kumpulan **Imbasan** pilih **Padankan permukaan kepada imbasan**. Alat ini mencari **satah**, **silinder**, **sfera** dan **kon** (permukaan tepat yang dibuat daripada bahagian dimesin; setiap baris menunjukkan jejari atau separuh sudut yang ditemuinya), mencari **fillet** (tepi dan bucu bulat: silinder atau sfera kecil yang bersentuhan ke dalam dua atau lebih muka lain, ditunjukkan dengan jejarinya dan muka yang disambungnya), **fillet cincin** (torus: tepi bulat tempat muka rata bertemu silinder atau kon, ditunjukkan dengan jejarinya dan jejari cincinnya) dan **fillet boleh ubah** (tepi bulat yang jejarinya berubah sepanjangnya, ditunjukkan dengan jejari pada setiap hujung), memadankan **satu tampalan bentuk bebas** kepada sekeping yang licin dan sedikit melengkung, dan memotong setiap muka kepada garis luar bahagian imbasan ia datang, supaya lubang dan sudut kekal. Pilihan: **toleransi** (sejauh mana, dalam mm, titik imbasan boleh berada dari satah atau silinder dan masih tergolong padanya, dan sasaran untuk tampalan bentuk bebas), **kepingan terkecil** (sebahagian daripada luas permukaan) dan **muka terbanyak**. Imbasan dan pilihan yang sama sentiasa memberikan muka yang sama.

Hasilnya ialah jadual, satu baris bagi setiap muka: jenisnya, berapa segi tiga ia datang, dan ralat **diukur dari imbasan ke muka** (rms, yang terbesar, dan bahagian titik dalam toleransi). Titik yang diukur ialah bucu imbasan dan tengah setiap segi tiga. Ralat tidak diukur sebaliknya (muka ke imbasan), jadi muka yang melampaui imbasan tidak akan ditunjukkan. Nota di bawah jadual juga menyatakan berapa banyak luas yang terlalu kecil untuk dipadankan. Dalam pandangan, titik imbasan diwarnakan mengikut **peta sisihan**: biru pada muka, hijau separuh jalan ke toleransi, merah pada toleransi atau lebih (nyahtanda **Tunjuk peta sisihan** untuk menyembunyikannya). Kepingan yang melipat ke atas dirinya sendiri (tiub tertutup yang dipadankan dengan tampalan bentuk bebas, contohnya) disenaraikan sebagai tidak dipadankan, dan tidak sekali-kali dipaksa menjadi satu permukaan.

**Jahit permukaan menjadi pepejal** menjahit setiap permukaan yang ditunjukkan yang belum berada dalam pepejal menjadi satu pepejal tertutup. Muka imbasan hanya bertemu dalam ralat imbasan sendiri, jadi ia mencuba jarak sambungan terkecil yang menutup (tidak lebih daripada **jarak jahitan** yang anda tetapkan) dan menolak dengan perkataan apabila muka tidak menutup. Ia tidak sekali-kali menampal jurang. Kotak dengan tepi bulat dijahit apabila fillet-fillet itu ditemui sebagai muka tersendiri; jarak sambungan yang menutup ada dalam hasil. Pepejal kemudian berfungsi dengan Gabung, Tolak, Persilang dan **Tambah ke model**.

Apa yang tidak dilakukannya: **fillet cincin** (torus) hanya dicari di sekeliling paksi silinder atau kon yang sudah dijumpai, dan **fillet boleh ubah** hanya sepanjang tepi yang agak lurus (sekeratannya dipotong tegak kepada satu arah); di tempat lain ia keluar sebagai tampalan bentuk bebas apabila cukup licin dan ditinggalkan jika tidak; sfera, kon dan fillet dicari melalui persampelan rawak, jadi yang sangat kecil (beberapa segi tiga) mungkin terlepas; peta sisihan menunjukkan jarak dari imbasan ke muka, bukan sebaliknya; imbasan yang sangat besar (lebih 300,000 segi tiga) ditolak di sini. Muka silinder putaran penuh dipotong di sekeliling lubang, dengan jahitan diletakkan di tempat tiada lubang. Periksa setiap muka dengan imbasan anda sebelum bergantung padanya.

## Belum dibina

Membundarkan tepi yang bertemu di sudut muka melengkung atau dengan jejari yang berbeza (campuran bucu), fillet antara muka yang tidak bertemu, fillet dalam yang berakhir pada muka condong atau melengkung, dan Boolean serta fillet yang dikira pada permukaan tanpa segi tiga (di sini enjin pepejal bekerja pada segi tiga dalam toleransi, dan setiap titik kemudiannya diletakkan semula pada permukaan tepat).
