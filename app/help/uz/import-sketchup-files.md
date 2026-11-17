---
title: SKP modelini import qilish
summary: Guruhlar, komponentlar, ranglar, teksturalar, teglar va yumshoq qirralarga ega .skp faylini import qiling, nima kelganini va nima kelmaganini koʻring hamda modellashni davom ettiring.
keywords: skp, import, skp ochish, komponentlar, guruhlar, teglar, qatlamlar, materiallar, ranglar, teksturalar, yashirin, yumshoq qirralar, 3d warehouse, koʻchirish, almashtirish
from: 325d3c81
---

ModelCraft `.skp` fayllarini (SketchUp fayllari) oʻzining oʻqish moduli bilan, sahifa ichida oʻqiydi. Hech narsa yuklanmaydi va ModelCraft oflayn ishlaganda u ham ishlaydi. SketchUp 3 dan 2026 gacha boʻlgan fayllar sinovdan oʻtgan.

## Faylni import qilish

1. {{ui:Fayl}} guruhidagi {{ui:Import}} tugmasini bosing (yoki `.skp` faylini 3D koʻrinishga tashlang).
2. Faylni tanlang.

   Oʻqish paytida holat satrida "house.skp oʻqilmoqda…" deb chiqadi, soʻng nima kelganini koʻrsatadi, masalan "house.skp import qilindi (SketchUp 25.0.575): 1240 ta yuza, 6 ta komponent, guruhda."

Butun model fayl nomi bilan atalgan bitta guruh boʻlib keladi, tanlanadi va koʻrinish unga yaqinlashadi. Bitta {{key:Mod+Z}} uni teglar bilan birga yana olib tashlaydi.

:::tip
Import guruhini parchalang ({{ui:Obyekt maʼlumoti}} › {{ui:Parchalash}}), qachonki uning mazmuni bitta guruh ichida emas, balki modelingizda erkin holda boʻlishini xohlasangiz.
:::

## Nima keladi

- **Yuzalar** teshiklari bilan va yuzaning qismi boʻlmagan **qirralar**.
- **Guruhlar** guruh sifatida, **komponentlar** komponent sifatida keladi: komponentning har bir nusxasi bitta taʼrifning joylashuvi boʻladi, shuning uchun bitta nusxani tahrirlasangiz, SketchUp dagidek hammasi oʻzgaradi. Nomlari ular bilan birga keladi.
- **Ranglar.** Yuzaning oʻz materiali unga rang beradi. Guruh yoki komponentga surtilgan material shu joylashuvning boʻyogʻiga aylanadi, shuning uchun oʻz rangi boʻlmagan ichidagi yuzalar uni oladi, SketchUp dagidek. Bir joyda qizil, boshqa joyda koʻk boʻyalgan komponent bitta komponent boʻlib qoladi.
- **Teksturalar.** Teksturali material bilan boʻyalgan yuza teksturasi bilan keladi, fayldagidek yuzaga yoyilgan, va {{ui:Soyali}} uslubi uni koʻrsatadi. Rasm faylni saqlaganda ModelCraft faylida saqlanadi va [render qilingan rasm](topic:render) ham uni koʻrsatadi. Butun guruh yoki komponentga surtilgan teksturali material oʻsha nusxaga faqat materialning rangini beradi.
- **Teglar.** SketchUp tegiga qoʻyilgan guruh yoki komponent xuddi shu nomli ModelCraft tegini oladi, u {{ui:Teglar}} roʻyxatida koʻrinadi va SketchUp dagidek koʻrsatilgan yoki yashirilgan holda boʻladi. Agar modelingizda shu nomli teg allaqachon boʻlsa, oʻsha teg ishlatiladi.
- **Yashirin narsalar yashirin holda keladi:** yuzalar, qirralar, guruhlar va komponentlar, hamda yashirin tegdagi yuza va qirralar. SketchUp koʻrsatganini koʻrasiz va hech narsa yoʻqolmaydi: {{ui:Tahrirlash}} › {{ui:Yana}} › {{ui:Hammasini koʻrsatish}} ularni koʻrsatadi. Qarang: [Yashirish, ajratish va koʻrsatish](topic:hide-isolate).
- **Yumshoq va silliq qirralar** yumshoq boʻlib qoladi, shuning uchun egri sirtlar hamon silliq koʻrinadi.
- **Oʻlchamlar** har qanday birlikda toʻgʻri chiqadi: SketchUp fayllari ichkarisida dyuymda, ModelCraft ularni aylantiradi.

## Nima kelmaydi

Holat satri nima chiqarib tashlanganini sonlari bilan koʻrsatadi.

- **Ayrim teksturalar** faqat materialining rangini saqlaydi: faylda yoʻq tekstura, brauzerlar koʻrsata olmaydigan formatdagi rasm (masalan, Photoshop fayli) yoki oʻlchami yoʻq tekstura. Proyeksiyalangan teksturali yuzalar teksturasi taxminan joylashtirilgan holda keladi.
- **Erkin yuza va qirralardagi teglar.** ModelCraft teglarni faqat guruh va komponentlarga qoʻyadi, shuning uchun oʻz tegiga ega yuza yoki qirra tegsiz keladi va holat satri ularni sanaydi. Bunday yuzalarni guruhga aylantiring ({{key:Shift+G}}) va guruhga teg qoʻying.
- **Modelga joylashtirilgan rasmlar**, matn, oʻlchamlar, yoʻriqnomalar, kesish tekisliklari, sahnalar va uslublar.

## Muammolar

- "Bu SketchUp fayli emas." yoki "Bu SketchUp fayli buzilgan: …": fayl kesilgan yoki `.skp` nomli boshqa narsa. Uni SketchUp dan qayta saqlang yoki yangi nusxa soʻrang.
- ModelCraft biladigan versiyadan yangiroq SketchUp fayli topilgan versiyasi bilan birga rad etiladi.
- Faqat rasmlar, matn yoki oʻlchamlardan iborat model koʻrsatadigan hech narsasi yoʻqligini aytadi.

## Modelni qaytarib olish

ModelCraft `.skp` fayllarini saqlay olmaydi. Collada eksport qiling ({{ui:Eksport}} › `.dae`) va uni SketchUp da import qiling: guruhlar, komponentlar va ranglar oʻtadi; teksturalar esa materialining rangi sifatida oʻtadi. Qarang: [Modelingizni eksport qilish](topic:export-model).
