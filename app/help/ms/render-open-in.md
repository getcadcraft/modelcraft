---
title: Buka adegan dalam program lain
summary: Simpan adegan sebagai fail USD atau glTF untuk mana-mana program yang membacanya, atau buka dari Studio dalam program pada komputer ini.
keywords: buka dalam, usd, gltf, glb, eksport, program render, archviz, studio, usdview, hantar, serah, pakej, folder unreal
from: 812329d5
---

Pilih entri **Buka dalam** dalam senarai Enjin bagi {{ui:Render imej…}} untuk membawa adegan ke program lain. Tiada apa yang dikembalikan kepada model.

## Fail untuk mana-mana program

- **Fail USD** menyimpan adegan sebagai `.usdc` (atau `.usdz` apabila model membawa imej): [fail yang sama dengan Simpan sebagai USD](topic:usd), dengan bahan, lampu dan kamera. Ia mengekalkan instancing dan nilai bahan yang tepat. Kebanyakan enjin render, enjin permainan dan pemapar membaca USD.
- **Fail glTF (.glb)** menyimpan fail glTF 2.0 yang lebih ringan dengan bahan, tekstur dan lampu; lihat [Eksport model untuk program lain](topic:export-model) untuk format yang ditulis oleh ModelCraft.

- **Folder projek Unreal (.zip)** menyimpan folder yang ditulis oleh [Hantar adegan ke enjin permainan](topic:render-unreal), untuk projek pada mana-mana komputer.

Ketiga-tiga berfungsi dalam pelayar dan dalam Studio.

## Dalam Studio: buka dalam program

Studio menyenaraikan program yang ditemuinya pada komputer ini yang boleh membuka adegan: usdview jika ia berada pada laluan carian anda, dan program komputer itu sendiri untuk jenis fail. Pilih satu, pilih USD atau glTF di mana ia membaca kedua-duanya, dan klik {{ui:Render}}. Studio menulis pakej ke dalam folder baharu di bawah Documents (`CadCraft hand-off`; tiada apa yang ditimpa, setiap hantaran mendapat folder sendiri) dan memulakan program padanya, kemudian menyatakan di mana fail-fail itu.

| Program | Membaca paling baik |
|---|---|
| usdview | USD |
| Program komputer itu sendiri | Apa sahaja yang ada pada komputer untuk jenis fail itu |

Studio hanya memulakan program daripada senarai tetap ini; ia tidak menjalankan apa-apa yang diminta oleh halaman mengikut nama, dan ia tidak sekali-kali memulakan program di bawah lesen GNU GPL (lihat [Lukis imej dengan program lain](topic:render-other-program#programs-cadcraft-never-runs)). Mana-mana program yang membaca USD atau glTF membuka fail dari **Fail untuk mana-mana program** di atas.

:::note
Twinmotion, Enscape dan program visualisasi lain tidak berada dalam senarai: CadCraft belum disemak dengannya dan tidak membuat sebarang dakwaan tentangnya. Fail glTF atau USD dari sini ialah laluan masuk.
:::
