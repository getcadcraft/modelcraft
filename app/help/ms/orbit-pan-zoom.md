---
title: Orbit, pan dan zum
summary: Bergerak di sekeliling model dengan tetikus, pad jejak, skrin sentuh atau papan kekunci, dan lompat ke pandangan standard.
keywords: orbit, pan, zum, tekan lama, tiga jari, dua jari, ketik, navigasi, kamera, pandangan, putar pandangan, pad jejak, sentuh, cubit, butang tengah, zum lingkungan, perspektif, selari, pandangan atas, iso
from: 10d4d33a
---

Anda boleh menggerakkan kamera pada bila-bila masa, walaupun di tengah-tengah melukis garisan atau menolak muka: alat itu menunggu di tempat ia berada.

## Dengan tetikus tiga butang

| Untuk | Lakukan ini |
|---|---|
| Orbit | Seret dengan butang tengah (tekan roda) |
| Pan | Seret dengan butang kanan, atau tahan {{key:Shift}} dan seret dengan butang tengah. Menekan atau melepaskan {{key:Shift}} semasa seretan bertukar antara orbit dan pan |
| Zum | Pusingkan roda. Ia zum ke arah muka di bawah penunjuk, atau ke arah titik di bawahnya pada kedalaman pusat pandangan |
| Lihat seluruh model | {{key:Shift+Z}} atau {{ui:Lingkungan}} |

Orbit memusingkan pandangan di sekeliling bahagian model di bawah penunjuk, supaya titik itu kekal di tempatnya semasa segala-galanya berpusing di sekelilingnya. Di atas ruang kosong ia berpusing di sekeliling pusat pandangan. Pan mengekalkan titik yang anda pegang di bawah penunjuk.

Untuk sentiasa berorbit di sekeliling pusat pandangan, atau menjadikan orbit dan pan lebih laju atau perlahan, buka {{ui:Tetapan}} ({{key:Mod+,}}), tab {{ui:ModelCraft}}, **Orbit dan pan**. Kelajuan itu terpakai untuk tetikus, pad jejak, sentuhan dan kekunci anak panah.

Klik kanan tanpa menyeret tidak melakukan apa-apa; ModelCraft tidak mempunyai menu klik kanan.

## Tanpa butang tengah

Gunakan alat kamera dalam bar alat, atau papan kekunci:

1. Tekan {{key:O}} (atau klik {{ui:Orbit}}) dan seret dengan butang kiri untuk berorbit. Tahan {{key:Shift}} semasa seretan untuk pan.
2. Tekan {{key:H}} (atau klik {{ui:Pan}}) dan seret untuk pan.
3. Tekan {{key:Z}} (atau klik {{ui:Zum}}) dan seret ke atas untuk zum masuk, ke bawah untuk zum keluar.
4. Tekan {{key:Space}} untuk kembali ke {{ui:Pilih}}, atau tekan kekunci alat yang anda mahu seterusnya.

Alat kamera menggantikan alat yang anda gunakan. Untuk melihat sekeliling di tengah-tengah operasi tanpa kehilangannya, gunakan papan kekunci:

- Kekunci anak panah berorbit.
- {{key:Shift}} dengan kekunci anak panah melakukan pan.

Semasa alat lukisan berada di tengah-tengah operasi (selepas klik pertamanya), kekunci anak panah mengunci arah dan bukannya berorbit. Lihat [Inferens dan snap](topic:inference#lock-a-direction).

## Pada pad jejak

Cara paling mudah: buka {{ui:Tetapan}} ({{key:Mod+,}}), tab {{ui:ModelCraft}}, dan tetapkan Skrol kepada **Pad jejak** (atau biarkan pada "Tentukan sendiri"). Kemudian leret dengan dua jari untuk berorbit, tahan {{key:Shift}} dan leret untuk pan, dan cubit untuk zum — tanpa butang kamera. Lihat [tetapan ModelCraft](topic:settings#scrolling-mouse-wheel-or-trackpad).

Dengan Skrol ditetapkan kepada **Roda tetikus**:

:::mac
- **Zum:** skrol dengan dua jari, atau cubit. Kedua-duanya zum ke arah penunjuk.
- **Pan:** tekan dengan dua jari (klik sekunder) dan kekalkan jari di bawah semasa anda menyeret. Hidupkan "Klik sekunder" dalam **Tetapan Sistem**, kemudian **Pad jejak**, jika klik dua jari tidak melakukan apa-apa.
- **Orbit:** tekan {{key:O}} dan seret dengan satu jari, atau gunakan kekunci anak panah.
- Menahan {{key:Ctrl}} semasa anda klik mungkin tidak dikira sebagai klik kanan dalam ModelCraft, bergantung pada pelayar: ia boleh bertindak sebagai klik dengan {{key:Ctrl}} ditahan. Gunakan tekanan dua jari untuk pan.
:::

:::windows linux
- **Zum:** skrol dengan dua jari. Cubit juga zum jika pemacu pad sentuh menghantarnya sebagai skrol dengan {{key:Ctrl}}.
- **Pan:** seret dengan butang kanan (pada kebanyakan pad sentuh, tekan bucu kanan bawah dan seret), atau tekan {{key:H}} dan seret.
- **Orbit:** tekan {{key:O}} dan seret, atau gunakan kekunci anak panah.
:::

Dengan Roda tetikus, skrol dua jari akan zum; ia tidak pan. Itu bertentangan dengan banyak laman web, dan begitulah roda tetikus berkelakuan dalam kebanyakan pemodel 3D.

:::tip
{{key:Space}} memilih alat {{ui:Pilih}} dalam ModelCraft. Menahan {{key:Space}} dan menyeret tidak melakukan pan, seperti dalam sesetengah aplikasi lain.
:::

## Pada skrin sentuh

:::touch
- **Satu jari** menggunakan alat semasa: **ketik** untuk klik, **tekan dan seret** untuk melukis atau mengalih.
- Semasa jari alat lukisan ditekan, **kanta** di atasnya menunjukkan apa yang berada di bawah jari, supaya anda dapat melihat titik hujung, titik tengah atau tepi yang ia snap sebelum anda angkat.
- **Kekal diam** selama setengah saat untuk menyelesaikan apa yang sedang dilakukan alat, seperti {{key:Enter}}: lengkung, rantai garisan. Tanpa apa-apa yang berlaku, kekal diam kemudian seret jari yang sama akan **berorbit** sehingga anda mengangkatnya.
- **Dua jari** diseret bersama untuk **pan**; **cubit** untuk zum. Kedua-duanya berfungsi dalam satu gerak isyarat.
- **Tiga jari** diseret bersama untuk **orbit**.
- Untuk menukarnya (dua jari berorbit, tiga pan), buka {{ui:Tetapan}}, tab {{ui:ModelCraft}}, Skrin sentuh.
- Meletakkan jari kedua **membatalkan** apa yang dimulakan oleh jari pertama (segi empat tepat yang separuh dilukis, tolak/tarik yang sedang berjalan). Angkat jari anda dan mulakan semula.
- Bar kecil di bahagian bawah pandangan mempunyai **Selesai** ({{key:Enter}}), **Batal** ({{key:Esc}}) dan **{{ui:Buat asal}}**, untuk apabila tiada papan kekunci.
- Snap dan pilihan sampai sedikit lebih jauh daripada tetikus, dan butangnya lebih besar, supaya jari boleh menyentuhnya.
:::

:::mouse
Pada skrin sentuh, satu jari menggunakan alat semasa (ketik untuk klik, kekal diam untuk selesai, atau kekal diam dan seret untuk berorbit), dua jari melakukan pan dan cubit untuk zum, tiga jari berorbit, dan bar kecil menawarkan Selesai, Batal dan Buat asal.
:::

## Pandangan standard

1. Klik {{ui:Pandangan}} di hujung kanan bar alat.
2. Pilih {{ui:Iso}}, {{ui:Atas}}, {{ui:Depan}}, {{ui:Kanan}}, {{ui:Belakang}}, {{ui:Kiri}} atau {{ui:Bawah}}.

Pandangan berpusing ke arah itu dan memuatkan keseluruhan model. {{ui:Depan}} melihat ke utara, sepanjang paksi hijau; {{ui:Atas}} melihat tegak ke bawah dengan utara di atas.

Kiub pandangan di bahagian kanan atas pandangan melakukan perkara yang sama dalam satu klik, serta tepi dan bucu, cincin kompas untuk memusingkan model, dan butang utama. Lihat [Kiub pandangan](topic:view-cube).

## Perspektif dan unjuran selari

Pilih {{ui:Pandangan}}, kemudian {{ui:Perspektif}}. Tanda semak bermakna perspektif dihidupkan. Dengan ia dimatikan, pandangan ialah unjuran selari (ortografik): garisan yang selari dalam model kekal selari pada skrin, yang anda mahukan untuk unjuran dari {{ui:Depan}} atau {{ui:Kanan}}. Bar status menyatakan "Perspektif." atau "Unjuran selari."

Setiap adegan mengingati sama ada ia dalam perspektif. Lihat [Simpan pandangan sebagai adegan](topic:scenes).
