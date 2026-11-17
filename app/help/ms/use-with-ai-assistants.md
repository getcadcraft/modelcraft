---
title: Guna ModelCraft dengan pembantu AI
summary: Benarkan pembantu AI anda sendiri atau skrip melihat model dan membina pepejal ringkas: kebenaran, sambungan melalui CadCraft Studio, dan log aktiviti.
keywords: ai, pembantu, ejen, mcp, model context protocol, skrip, automasi, pemodelan, kotak, silinder, render, giliran render, kebenaran, putuskan sambungan, aktiviti
from: 629cd0b7
---

## Apa yang akan anda pelajari

Cara membenarkan pembantu AI (atau skrip yang anda tulis) bekerja dengan ModelCraft, dan cara menentukan apa yang boleh disentuhnya.

ModelCraft **tidak mempunyai AI sendiri** dan tidak menghantar apa-apa ke mana-mana. Anda membawa pembantunya: mana-mana program yang menggunakan Model Context Protocol (MCP). ModelCraft hanya memberinya alat, dan anda memilih yang mana.

## Hidupkan

1. Buka {{ui:Tetapan}} (ikon gear di bar aplikasi, atau {{key:Mod+,}}) dan pergi ke tab {{ui:ModelCraft}}.
2. Di bawah {{ui:Pembantu}}, tanda **Benarkan pembantu AI dan skrip guna ModelCraft**. Ia dimatikan sehingga anda berbuat demikian.
3. Pilih apa yang boleh dilakukannya: **Baca** sudah ditanda pada mulanya; tanda **Sunting**, **Simpan** atau **Eksport** hanya apabila anda memerlukannya.

Alat di luar kebenaran yang anda tanda tidak ditawarkan kepada pembantu, dan jika ia tetap memintanya, ModelCraft menolak dan mencatatnya dalam log aktiviti. Mematikan suis menamatkan setiap sambungan serta-merta; {{ui:Tetapkan semula tetapan ModelCraft}} juga mematikannya.

## Sambungkan pembantu anda

Pembantu bersambung melalui **CadCraft Studio** di komputer anda: Studio menjalankan pelayan kecil yang hanya boleh dicapai oleh komputer ini, dilindungi oleh token yang dijana setiap kali ia dimulakan. Dalam Studio, pilih {{ui:Sambungkan pembantu}} dan salin alamat serta token ke dalam pembantu anda (Studio menunjukkan tetapan tepat untuk ditampal). Jangan sekali-kali berkongsi token.

:::note
Tab pelayar tidak boleh membuka sambungan untuk pembantu: dalam aplikasi pelayar, suis tidak berkesan sehingga anda menggunakan CadCraft Studio di komputer anda.
:::

## Anda kekal bertanggungjawab

- **Setiap perubahan ialah satu langkah buat asal**, dilabelkan dengan nama yang diberikan pembantu kepadanya (contohnya "Pembantu: box"). {{key:Mod+Z}} membatalkan perubahan terakhir pembantu secara keseluruhan.
- **Anda tahu apabila satu sambungan wujud.** Butang di bar aplikasi menamakan pembantu semasa ia bersambung; klik untuk melihat apa yang dibenarkannya, atau untuk **Putuskan sambungan**.
- **Aktiviti.** {{ui:Tetapan}} › {{ui:ModelCraft}} › {{ui:Pembantu}} › {{ui:Aktiviti}} menyenaraikan setiap panggilan: bila, alat yang mana, sama ada selesai atau ditolak. {{ui:Simpan log}} menyimpan salinan.

## Apa yang boleh diminta oleh pembantu

| Alat | Kebenaran | Apa yang dilakukannya |
|---|---|---|
| `app_info`, `model_describe` | Baca | Unit model, saiz, dan setiap kumpulan serta komponen dengan kedudukannya, sama ada ia pepejal tertutup dan isipadunya |
| `view_screenshot` | Baca | Gambar paparan 3D seperti yang ditunjukkan |
| `box_add`, `cylinder_add` | Sunting | Kotak atau silinder sebagai kumpulan baharu, pada kedudukan dan saiz yang anda atau pembantu berikan ("3m", "10'" atau nombor dalam unit model) |
| `instance_move`, `instances_erase` | Sunting | Mengalih atau memadam kumpulan dan komponen |
| `faces_list`, `materials_list` | Baca | Muka bagi kumpulan atau geometri longgar (arah, luas dan pusat setiap satu); bahan dan warna yang boleh dicatnya |
| `push_pull` | Sunting | Menolak atau menarik muka, seperti yang dilakukan oleh {{ui:Tolak/tarik}} |
| `paint` | Sunting | Mencat muka atau seluruh kumpulan dengan warna atau bahan |
| `group_make` | Sunting | Membuat kumpulan atau komponen daripada muka dan kumpulan longgar |
| `scene_add`, `scene_show` | Sunting | Menyimpan paparan sebagai adegan; pergi ke adegan yang disimpan |
| `mesh_add` | Sunting | Objek jejaring untuk dimulakan (kubus, sfera, silinder …), seperti yang ditambah oleh ruang kerja Jejaring |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Baca / Sunting | Timbunan pengubah jejaring: cermin, tatasusunan, permukaan subdivisi, bevel dan selebihnya; tiada apa yang digunakan secara kekal |
| `usd_export` | Eksport | Model sebagai OpenUSD (.usda, .usdc atau .usdz), seperti yang ditulis oleh menyimpan model sebagai USD ([USD](topic:usd)); ke folder yang anda benarkan dalam Studio, jika tidak, muat turun |
| `render_still` | Eksport | Gambar render bagi paparan atau adegan yang disimpan, seperti yang dibuat oleh butang {{ui:Render}} dalam dialog {{ui:Render}}, dengan tetapan Render anda kecuali ia meminta yang lain (pratetap adegan: luaran, dalaman, keratan, malam atau auto; pantas atau kualiti tinggi, saiz, sampel, langit); PNG yang boleh dilihatnya, atau fail PNG, EXR atau render dalam folder yang anda benarkan dalam Studio ([Render gambar](topic:render)) |
| `render_queue` | Eksport | Menambah gambar kualiti tinggi ke giliran dalam dialog Render (paparan, atau adegan yang disimpan) dan menjalankan giliran itu; gambar siap pergi ke folder yang anda benarkan, atau kekal dalam {{ui:Giliran render}} dalam dialog Render untuk anda. Memerlukan WebGPU |
| `link_push` | Sunting | Mengemas kini model yang dipautkan dari program lain (lihat [Simpan model .3dm langsung](topic:live-3dm-link)) |
| `link_status` | Baca | Menyatakan sama ada model yang dipautkan masih ada dan bila kali terakhir ia dikemas kini |
| `undo` | Sunting | Membatalkan langkah-langkahnya sendiri |

Pepejal yang dibuat oleh pembantu masuk sebagai kumpulan, jadi ia tidak pernah bercantum dengan apa yang anda lukis. Tiada alat yang menyimpan model: menyimpan kekal dengan anda, dan mengeksport atau merender memerlukan **Eksport** ditanda. Render tidak mengubah apa-apa dalam model; merender adegan yang disimpan mengalihkan paparan ke adegan itu, seperti yang dilakukan {{ui:Adegan}}.

## Jika sesuatu tidak berfungsi

- **Pembantu tidak nampak alat ModelCraft:** semak suis dihidupkan dalam tetingkap ini, dan tetingkap itu dibuka dalam Studio.
- **"memerlukan kebenaran sunting":** tanda **Sunting** di bawah {{ui:Pembantu}}, kemudian minta sekali lagi.
- **Ralat "401" atau "token":** token telah berubah (Studio dimulakan semula, atau {{ui:Token baharu}}). Salin yang baharu ke dalam tetapan pembantu.

## Lihat juga

- [Resipi untuk pembantu AI](common:assistants-recipes): contoh yang diterangkan langkah demi langkah, setiap satu dengan alat yang dipanggilnya.
