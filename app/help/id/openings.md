---
title: Buat bukaan menembus dinding
summary: Gambar jendela atau pintu pada dinding dengan ketebalan, lalu dorong menembus, sehingga dinding mendapat lubang sungguhan.
keywords: jendela, pintu, bukaan, lubang, dinding, potong, dorong tembus, rongga, ketebalan, fasad
from: 6b22f32c
---

Bukaan membutuhkan dinding dengan dua sisi: sebuah kotak, atau dinding yang Anda buat dengan menarik persegi panjang tipis dan panjang ke atas. Satu muka yang berdiri sendiri tidak memiliki apa pun untuk didorong tembus.

## Buat dinding untuk latihan

1. Tekan {{key:R}}, klik sebuah sudut di tanah dan ketik `6m,0.3m` (atau `20',12"`), lalu {{key:Enter}}.
2. Tekan {{key:P}}, klik persegi panjang itu dan ketik `3m` (atau `10'`), lalu {{key:Enter}}.

Anda memiliki dinding setebal 300 mm (12 in).

## Gambar bukaannya

1. Orbit agar Anda dapat melihat sisi panjang dinding.
2. Tekan {{key:R}}.
3. Arahkan ke muka dinding, lalu klik di tempat sudut bawah jendela berada. Tips berbunyi "On face".
4. Ketik lebar dan tinggi jendela, misalnya `1.2m,1.5m` (atau `4',5'`), lalu tekan {{key:Enter}}.

   Jendela menjadi muka tersendiri di dalam muka dinding, yang kini memiliki lubang di sekelilingnya.

Untuk meletakkannya pada jarak yang tepat dari sudut dan lantai, gunakan [panduan](topic:guides-measure) terlebih dahulu: dengan {{ui:Meteran}}, seret garis panduan dari tepi bawah dan tepi ujung dinding, lalu mulai persegi panjang di tempat dua panduan berpotongan (tips berbunyi "On guide").

## Dorong menembus

1. Tekan {{key:P}}.
2. Klik muka jendela dan dorong ke dalam dinding.
3. Pindahkan sampai berhenti di muka belakang, lalu klik. Atau ketik ketebalan dinding, `300` (atau `12`), dan tekan {{key:Enter}}.

   ModelCraft berhenti di muka di belakang dan membukanya: dinding kini memiliki lubang tembus, dengan empat muka samping (kusen, ambang atas, dan ambang bawah) yang melapisi lubang itu. {{ui:Info entitas}} masih menyebut dinding sebagai solid tertutup jika dikelompokkan.

Jika Anda mendorong kurang dari ketebalan penuh, Anda mendapatkan ceruk, bukan lubang.

## Pintu

Gambar persegi panjang yang dimulai di tepi bawah muka dinding (tips berbunyi "On edge" atau "Endpoint"), sehingga bukaan mencapai lantai. Dorong tembus dengan cara yang sama.

## Banyak jendela dengan ukuran yang sama

1. Buat bukaan pertama.
2. Untuk yang berikutnya, gambar persegi panjangnya, lalu klik dua kali setiap persegi panjang dengan {{ui:Dorong/tarik}}: klik dua kali akan mengulang jarak terakhir. Lihat [Dorong dan tarik](topic:push-pull#repeat-the-last-distance).

## Jika belum tembus

- Persegi panjang harus digambar **pada** muka dinding. Jika digambar di udara di depannya, itu menjadi muka tersendiri: batalkan dan gambar ulang, dimulai dari muka.
- Dorongan berhenti di muka pertama di belakang bukaan. Jika ada sesuatu yang lain menghalangi di dalam dinding (muka sisa dari gambar sebelumnya), dorongan akan berhenti di sana; hapus tepi muka itu dan coba lagi.
- Geometri dalam grup terpisah tidak akan dipotong. Buka grup yang berisi dinding, lalu gambar bukaannya di dalamnya.
