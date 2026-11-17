---
title: Pahat mesh
summary: Bentuk mesh seperti tanah liat dengan kuas — gambar, tanah liat, haluskan, raih, kembungkan, lipatan, cubit, ratakan — lindungi bagian dengan masker, cerminkan di sumbu X, dan tambahkan detail di tempat Anda memahat.
keywords: pahat, memahat, kuas, tanah liat, gambar, haluskan, raih, kembungkan, lipatan, cubit, ratakan, masker, simetri, cermin, detail, topologi dinamis, pena, tekanan, tablet, stylus
from: 5477801a
---

Ruang kerja Pahat membentuk mesh dengan kuas, seperti tanah liat: seret di atas permukaan dan ia naik, turun, menghaluskan, atau mengikuti penunjuk di bawah kuas bulat, paling kuat di tengah dan memudar hingga nol di tepinya.

## Mulai

Pilih mesh dan pilih {{ui:Pahat}} di daftar Ruang kerja. Grup atau komponen menjadi mesh terlebih dahulu, seperti di ruang kerja Mesh. Kuas bekerja pada verteks mesh, sehingga mesh dengan lebih banyak verteks menghasilkan bentuk yang lebih halus: subbagi terlebih dahulu ({{ui:Subbagi}} di ruang kerja Mesh, atau modifier Subdivision surface yang Anda Terapkan), atau nyalakan {{ui:Detail}}.

## Kuas

| Kuas | Tombol | Fungsinya |
| --- | --- | --- |
| {{ui:Gambar}} | {{key:D}} | Menaikkan permukaan di bawah kuas |
| {{ui:Tanah liat}} | {{key:C}} | Membangun lapisan datar, mengisi lekukan lebih dulu |
| {{ui:Haluskan}} | {{key:S}} | Meratakan tonjolan; tahan {{key:Shift}} untuk menghaluskan dengan kuas apa pun |
| {{ui:Raih}} | {{key:G}} | Menarik permukaan mengikuti penunjuk |
| {{ui:Kembungkan}} | {{key:I}} | Menggembungkan permukaan ke luar sepanjang arahnya sendiri |
| {{ui:Lipatan}} | {{key:Shift+C}} | Memotong alur yang tajam |
| {{ui:Cubit}} | {{key:P}} | Menarik permukaan ke tengah kuas |
| {{ui:Ratakan}} | {{key:T}} | Menekan permukaan ke bidang rata-ratanya |
| {{ui:Masker}} | {{key:M}} | Mengecat masker yang melindungi permukaan dari kuas lain |

Tahan {{key:Ctrl}} saat menggores untuk bekerja sebaliknya (menurunkan alih-alih menaikkan, pematang alih-alih alur, menghapus masker), atau nyalakan {{ui:Kurangi}}.

## Ukuran dan kekuatan

Ukuran kuas dalam piksel di layar, sehingga terasa sama seberapa jauh pun Anda melakukan zoom: {{key:[}} dan {{key:]}} membuatnya lebih kecil dan lebih besar, {{key:Shift+[}} dan {{key:Shift+]}} mengubah kekuatannya. Panel menampilkan keduanya.

Dengan pena pada tablet, menekan lebih keras membuat kuas lebih besar dan lebih kuat; panel mematikan keduanya.

## Cermin, masker, dan detail

- {{ui:Cermin X}} ({{key:X}}) memahat kedua sisi di seberang merah sekaligus, untuk muka dan figur.
- Masker tampil lebih gelap selagi Anda memahat. {{ui:Hapus masker}} ({{key:Alt+M}}) melepasnya, {{ui:Balikkan masker}} ({{key:Ctrl+I}}) memasker apa yang bebas dan membebaskan apa yang termasker. Masker disimpan bersama mesh.
- {{ui:Detail}} menambah segitiga di tempat Anda memahat: tepi yang lebih panjang dari ukuran yang diatur di panel (piksel di layar) dipecah di bawah kuas. Ini memerlukan mesh segitiga, dan akan meminta Anda membuatnya terlebih dahulu.

Setiap goresan adalah satu langkah urung.

:::note
Detail hanya menambah segitiga; ia tidak menghapus yang menjadi sangat kecil. Remesh (ruang kerja Mesh) meratakan seluruh mesh kembali.
:::

Lihat juga [Sunting mesh](topic:mesh-edit), [Mesh](topic:meshes), dan [Modifier pada mesh](topic:modifiers).
