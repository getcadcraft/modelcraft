---
title: Pahat mesh
summary: Bentuk mesh seperti tanah liat dengan berus — lukis, tanah liat, licinkan, genggam, kembungkan, lipatan, cubit, ratakan — lindungi bahagian dengan topeng, cermin merentasi X, dan tambah perincian semasa anda memahat.
keywords: pahat, memahat, berus, berus, tanah liat, lukis, licinkan, genggam, kembungkan, lipatan, cubit, ratakan, topeng, simetri, cermin, perincian, topologi dinamik, pen, tekanan, tablet, stilus
from: 5477801a
---

Ruang kerja Pahat membentuk mesh dengan berus, seperti tanah liat: seret merentasi permukaan dan ia naik, tenggelam, licin atau mengikut penunjuk di bawah berus bulat, paling kuat di tengah dan pudar ke sifar di tepinya.

## Mula

Pilih mesh dan pilih {{ui:Pahat}} dalam senarai Ruang kerja. Kumpulan atau komponen menjadi mesh dahulu, seperti dalam ruang kerja Mesh. Berus bekerja pada bucu mesh, jadi mesh dengan lebih banyak bucu menghasilkan bentuk yang lebih halus: bahagikan dahulu ({{ui:Bahagikan}} ruang kerja Mesh, atau modifier Subdivision surface yang anda Guna), atau hidupkan {{ui:Perincian}}.

## Berus

| Berus | Kekunci | Apa yang dilakukannya |
| --- | --- | --- |
| {{ui:Lukis}} | {{key:D}} | Menaikkan permukaan di bawah berus |
| {{ui:Tanah liat}} | {{key:C}} | Membina lapisan rata, mengisi lekuk dahulu |
| {{ui:Licinkan}} | {{key:S}} | Meratakan bonjol; tahan {{key:Shift}} untuk melicinkan dengan mana-mana berus |
| {{ui:Genggam}} | {{key:G}} | Menarik permukaan bersama penunjuk |
| {{ui:Kembungkan}} | {{key:I}} | Membengkakkan permukaan keluar sepanjang arahnya sendiri |
| {{ui:Lipatan}} | {{key:Shift+C}} | Memotong alur tajam |
| {{ui:Cubit}} | {{key:P}} | Menarik permukaan ke arah tengah berus |
| {{ui:Ratakan}} | {{key:T}} | Menekan permukaan ke arah satah puratanya |
| {{ui:Topeng}} | {{key:M}} | Mengecat topeng yang melindungi permukaan daripada berus lain |

Tahan {{key:Ctrl}} semasa menggoreskan untuk bekerja sebaliknya (merendahkan dan bukannya menaikkan, rabung dan bukannya alur, mengeluarkan topeng), atau hidupkan {{ui:Ambil}}.

## Saiz dan kekuatan

Saiz berus dalam piksel di skrin, jadi ia terasa sama walau sejauh mana pun anda zum: {{key:[}} dan {{key:]}} menjadikannya lebih kecil dan lebih besar, {{key:Shift+[}} dan {{key:Shift+]}} menukar kekuatannya. Panel menunjukkan kedua-duanya.

Dengan pen pada tablet, menekan lebih kuat menjadikan berus lebih besar dan lebih kuat; panel mematikan salah satu daripadanya.

## Cermin, topeng dan perincian

- {{ui:Cermin X}} ({{key:X}}) memahat kedua-dua belah merentasi merah sekaligus, untuk muka dan figura.
- Topeng kelihatan lebih gelap semasa anda memahat. {{ui:Kosongkan topeng}} ({{key:Alt+M}}) mengeluarkannya, {{ui:Songsangkan topeng}} ({{key:Ctrl+I}}) menutupi apa yang tidak bertopeng dan membebaskan apa yang bertopeng. Topeng disimpan bersama mesh.
- {{ui:Perincian}} menambah segi tiga di tempat anda memahat: tepi yang lebih panjang daripada saiz yang ditetapkan dalam panel (piksel di skrin) dipecahkan di bawah berus. Ia memerlukan mesh segi tiga, dan meminta anda membuatnya dahulu.

Setiap goresan ialah satu langkah buat asal.

:::note
Perincian hanya menambah segi tiga; ia tidak membuang yang menjadi sangat kecil. Remesh (ruang kerja Mesh) meratakan keseluruhan mesh semula.
:::

Lihat juga [Sunting mesh](topic:mesh-edit), [Mesh](topic:meshes) dan [Pengubah suai pada mesh](topic:modifiers).
