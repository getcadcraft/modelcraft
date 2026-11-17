---
title: Buka adegan di program lain
summary: Simpan adegan sebagai file USD atau glTF untuk program apa pun yang membacanya, atau buka dari Studio di program di komputer ini.
keywords: buka di, usd, gltf, glb, ekspor, program render, archviz, studio, usdview, kirim, serah terima, paket, folder unreal
from: 812329d5
---

Pilih entri **Buka di** di daftar Engine dari {{ui:Render gambar…}} untuk membawa adegan ke program lain. Tidak ada yang kembali ke model.

## File untuk program apa pun

- **File USD** menyimpan adegan sebagai `.usdc` (atau `.usdz` jika model memuat gambar): [file yang sama dengan Simpan sebagai USD](topic:usd), dengan material, lampu, dan kamera. Ia mempertahankan instancing dan nilai material yang tepat. Sebagian besar renderer, mesin game, dan penampil membaca USD.
- **File glTF (.glb)** menyimpan file glTF 2.0 yang lebih ringan, dengan material, tekstur, dan lampu; lihat [Ekspor model untuk program lain](topic:export-model) untuk format yang ditulis ModelCraft.
- **Folder proyek Unreal (.zip)** menyimpan folder yang ditulis oleh [Kirim adegan ke mesin game](topic:render-unreal), untuk proyek di komputer mana pun.

Ketiganya bekerja di browser dan di Studio.

## Di Studio: buka di program

Studio mendaftar program yang ditemukannya di komputer ini dan yang dapat membuka adegan: usdview jika ada di jalur pencariannya, dan program bawaan komputer untuk jenis file tersebut. Pilih salah satu, pilih USD atau glTF jika programnya membaca keduanya, lalu klik {{ui:Render}}. Studio menulis paket ke folder baru di Dokumen (`CadCraft hand-off`; tidak ada yang ditimpa, setiap pengiriman mendapat folder sendiri), lalu menjalankan program di atasnya dan memberi tahu di mana file-filenya berada.

| Program | Membaca paling baik |
|---|---|
| usdview | USD |
| Program bawaan komputer | Apa pun yang dimiliki komputer untuk jenis file tersebut |

Studio hanya menjalankan program dari daftar tetap ini; ia tidak menjalankan apa pun yang diminta halaman dengan menyebut namanya, dan tidak pernah menjalankan program di bawah lisensi GNU GPL (lihat [Gambar gambar dengan program lain](topic:render-other-program#programs-cadcraft-never-runs)). Program apa pun yang membaca USD atau glTF dapat membuka file dari **File untuk program apa pun** di atas.

:::note
Twinmotion, Enscape, dan program visualisasi lainnya tidak ada dalam daftar. CadCraft belum diuji dengan program-program itu dan tidak membuat klaim tentangnya. File glTF atau USD dari sini adalah jalan masuknya.
:::
