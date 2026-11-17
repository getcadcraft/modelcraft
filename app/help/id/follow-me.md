---
title: Ikuti jalur: sapu muka sepanjang jalur
summary: Buat pipa, kabel, pegangan tangga, moulding dan cincin dengan menyapu muka sepanjang tepi, busur atau kurva.
keywords: ikuti jalur, sapu, jalur, pipa, kabel, tabung, pegangan tangga, moulding, talang, cincin, torus, bubut, ekstrusi sepanjang
from: ec7b3839
---

{{ui:Ikuti jalur}} menggerakkan muka sepanjang jalur dan membangun solid yang dilaluinya. Muka mempertahankan bentuknya dan tetap tegak lurus terhadap jalur, dan di setiap sudut jalur bagian-bagiannya bertemu pada potongan miring yang bersih.

## Buat kabel

1. Gambar jalurnya: {{ui:Kurva}} melalui titik-titik yang dilalui kabel (boleh naik dan turun), atau {{ui:Garis}} dan {{ui:Busur}} yang disambung ujung ke ujung.
2. Di awal jalur, gambar penampang kabel: {{ui:Lingkaran}} kecil melintasi jalur. Mulai lingkaran di titik ujung jalur dan putar agar menghadap sepanjang jalur; atau gambar di muka yang memotong jalur di sana.
3. Pilih jalur (satu klik memilih seluruh kurva atau busur; {{key:Ctrl}}+klik menambah tepi lain).
4. Klik {{ui:Ikuti jalur}} di grup {{ui:Ubah}}, lalu klik lingkarannya.

Tabung itu adalah solid tertutup, dengan sisi yang halus (lembut).

## Tanpa memilih jalur terlebih dahulu

Klik {{ui:Ikuti jalur}}, klik muka, lalu klik tepi mana pun dari jalur. Jalur adalah rangkaian tepi melalui tepi itu, sampai tempat tiga tepi atau lebih bertemu.

## Yang perlu diketahui

- **Jalur tertutup** (lingkaran, kurva tertutup, garis besar persegi panjang) membentuk cincin: muka habis terpakai dan cincin menutup pada dirinya sendiri. Gambar lingkaran di tanah sebagai jalur, dan lingkaran kecil yang berdiri melintangnya untuk donat.
- **Di luar jalur:** muka tidak harus menyentuh jalur. Profil yang digambar di samping jalur akan disapu di sampingnya, seperti moulding di sepanjang bagian atas dinding.
- **Jalur tidak boleh bercabang**, dan harus berupa satu rantai yang tersambung. ModelCraft memberi tahu jika tidak.
- **Muka yang terletak di sepanjang jalur** (pada bidang yang sama dengan tepi pertama jalur) tidak dapat disapu: putar agar memotong jalur.
- Ini satu langkah urungkan.
