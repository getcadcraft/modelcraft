---
title: Gunakan ModelCraft dengan asisten AI
summary: Biarkan asisten AI atau skrip Anda sendiri melihat model dan membuat solid sederhana, termasuk izin, menghubungkan lewat CadCraft Studio, dan log aktivitas.
keywords: ai, asisten, agen, mcp, model context protocol, skrip, otomatisasi, pemodelan, kotak, silinder, render, antrean render, izin, putuskan, aktivitas
from: 629cd0b7
---

## Yang akan Anda pelajari

Cara membiarkan asisten AI (atau skrip yang Anda tulis) bekerja dengan ModelCraft, dan cara menentukan apa yang boleh disentuhnya.

ModelCraft **tidak punya AI sendiri** dan tidak mengirim apa pun ke mana pun. Anda yang membawa asisten: program apa pun yang berbicara dengan Model Context Protocol (MCP). ModelCraft hanya memberinya alat, dan Andalah yang memilih alat mana saja.

## Menyalakannya

1. Buka {{ui:Pengaturan}} (ikon roda gigi di bilah aplikasi, atau {{key:Mod+,}}) lalu buka tab {{ui:ModelCraft}}.
2. Di bawah {{ui:Asisten}}, centang **Izinkan asisten AI dan skrip memakai ModelCraft**. Fitur ini mati sampai Anda melakukannya.
3. Pilih apa yang boleh dilakukannya: **Baca** sudah dicentang sejak awal; centang **Sunting**, **Simpan**, atau **Ekspor** hanya saat Anda memerlukannya.

Alat di luar izin yang Anda centang tidak ditawarkan ke asisten, dan jika asisten tetap memintanya, ModelCraft menolak dan mencatatnya di log aktivitas. Mematikan sakelar mengakhiri semua koneksi sekaligus; {{ui:Atur ulang pengaturan ModelCraft}} juga mematikannya.

## Menghubungkan asisten Anda

Asisten terhubung lewat **CadCraft Studio** di komputer Anda: Studio menjalankan server kecil yang hanya bisa dijangkau komputer ini, dilindungi token yang dibuat setiap kali Studio mulai. Di Studio, pilih {{ui:Hubungkan asisten}} lalu salin alamat dan token ke asisten Anda (Studio menampilkan pengaturan persis yang perlu ditempel). Jangan pernah membagikan token.

:::note
Tab peramban tidak dapat membuka koneksi untuk asisten: di aplikasi peramban, sakelar tidak berpengaruh sampai Anda memakai CadCraft Studio di komputer Anda.
:::

## Anda tetap memegang kendali

- **Setiap perubahan adalah satu langkah urungkan**, diberi label dengan nama asisten untuk perubahan itu (misalnya "Asisten: box"). {{key:Mod+Z}} mengurungkan perubahan terakhir asisten secara utuh.
- **Anda tahu saat asisten terhubung.** Sebuah tombol di bilah aplikasi menyebut nama asisten selama terhubung; klik untuk melihat apa yang boleh dilakukannya, atau untuk **Putuskan** koneksinya.
- **Aktivitas.** {{ui:Pengaturan}} › {{ui:ModelCraft}} › {{ui:Asisten}} › {{ui:Aktivitas}} mencantumkan setiap panggilan: kapan, alat apa, selesai atau ditolak. {{ui:Simpan log}} menyimpan salinannya.

## Yang boleh diminta asisten

| Alat | Izin | Fungsinya |
|---|---|---|
| `app_info`, `model_describe` | Baca | Satuan model, ukurannya, dan setiap grup serta komponen beserta lokasinya, apakah solid tertutup, dan volumenya |
| `view_screenshot` | Baca | Gambar tampilan 3D seperti yang ditampilkan |
| `box_add`, `cylinder_add` | Sunting | Kotak atau silinder sebagai grup baru, di tempat dan ukuran yang Anda atau asisten berikan ("3m", "10'" atau angka dalam satuan model) |
| `instance_move`, `instances_erase` | Sunting | Memindahkan atau menghapus grup dan komponen |
| `faces_list`, `materials_list` | Baca | Muka dari sebuah grup atau geometri lepas (arah, luas, dan pusat masing-masing); material dan warna yang dapat dipakainya untuk mewarnai |
| `push_pull` | Sunting | Mendorong atau menarik muka, seperti yang dilakukan {{ui:Dorong/tarik}} |
| `paint` | Sunting | Mewarnai muka atau seluruh grup dengan warna atau material |
| `group_make` | Sunting | Membuat grup atau komponen dari muka dan grup lepas |
| `scene_add`, `scene_show` | Sunting | Menyimpan tampilan sebagai scene; berpindah ke scene yang tersimpan |
| `mesh_add` | Sunting | Objek mesh sebagai titik awal (kubus, bola, silinder …), seperti yang ditambahkan ruang kerja Mesh |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Baca / Sunting | Tumpukan modifier mesh: cermin, array, subdivisi, bevel, dan lainnya; tidak ada yang diterapkan secara permanen |
| `usd_export` | Ekspor | Model sebagai OpenUSD (.usda, .usdc, atau .usdz), seperti yang ditulis saat menyimpan model sebagai USD ([USD](topic:usd)); ke folder yang Anda izinkan di Studio, jika tidak, sebagai unduhan |
| `render_still` | Ekspor | Gambar render dari tampilan atau dari scene yang tersimpan, seperti yang dibuat tombol {{ui:Render}} pada dialog {{ui:Render}}, dengan pengaturan Render Anda kecuali jika asisten meminta yang lain (preset scene: eksterior, interior, potongan, malam, atau otomatis; cepat atau kualitas tinggi, ukuran, sampel, langit); berupa PNG yang dapat dilihat asisten, atau berkas PNG, EXR, atau render dalam folder yang Anda izinkan di Studio ([Render gambar](topic:render)) |
| `render_queue` | Ekspor | Menambahkan gambar kualitas tinggi ke antrean pada dialog Render (tampilan, atau scene yang tersimpan) dan menjalankan antrean; gambar yang selesai masuk ke folder yang Anda izinkan, atau tetap di {{ui:Antrean render}} pada dialog Render untuk Anda. Memerlukan WebGPU |
| `link_push` | Sunting | Memperbarui model yang ditautkan dari program lain (lihat [Jaga model .3dm tetap langsung](topic:live-3dm-link)) |
| `link_status` | Baca | Menyatakan apakah model yang ditautkan masih ada dan kapan terakhir diperbarui |
| `undo` | Sunting | Mengurungkan langkahnya sendiri |

Solid yang dibuat asisten masuk sebagai grup, sehingga tidak pernah menyatu dengan yang Anda gambar. Tidak ada alat yang menyimpan model: menyimpan tetap menjadi tugas Anda, dan mengekspor atau merender memerlukan **Ekspor** dicentang. Render tidak mengubah apa pun dalam model; merender scene yang tersimpan memindahkan tampilan ke scene itu, seperti yang dilakukan {{ui:Scene}}.

## Jika ada yang tidak berfungsi

- **Asisten tidak melihat alat ModelCraft:** pastikan sakelar menyala di jendela ini, dan jendela ini terbuka di Studio.
- **"memerlukan izin sunting":** centang **Sunting** di bawah {{ui:Asisten}}, lalu minta lagi.
- **Kesalahan "401" atau "token":** token berubah (Studio dimulai ulang, atau {{ui:Token baru}}). Salin token baru ke pengaturan asisten.

## Lihat juga

- [Resep untuk asisten AI](common:assistants-recipes): contoh langkah demi langkah, masing-masing dengan alat yang dipanggilnya.
