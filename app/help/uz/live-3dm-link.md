---
title: .3dm modelini jonli ulanishda saqlash
summary: Modelni uni yaratgan dasturda oʻzgartiring va bu yerda oʻzgarishni koʻring — Rhino 8 yoki Grasshopper taʼrifidan, qayta saqlamasdan va qayta import qilmasdan.
keywords: rhino, grasshopper, jonli ulanish, jonli aloqa, 3dm, nurbs, parametrik, ulanish, sinxronlash, skript, havola model, yuborish
from: 331b0a7e
---

Modellashtirishni oʻz joyingizda davom ettiring va natijadan bu yerda foydalaning: uni renderlash, yoritish yoki atrofida sahna tuzish uchun. Boshqa dasturdagi har bir oʻzgarish ModelCraftʼdagi bitta guruhni yangilaydi.

:::note
Ulanish uchun shu kompyuterda **CadCraft Studio** boʻlishi kerak. Brauzer yorligʻi ulanishni qabul qila olmaydi. Internet orqali hech narsa uzatilmaydi: skript Studio bilan bu kompyuterning oʻz manzili orqali, token yordamida bogʻlanadi.
:::

:::warning
Bu ulanish skriptning fayl yozuvchisi va boshqa dastur oʻrnini bosuvchi vosita bilan sinovdan oʻtkazilgan, Rhino yoki Grasshopper ichida hali emas. Agar u yerda biror narsa ishlamasa, bizga u nima deganini xabar bering.
:::

## Sozlash

1. Studio ichida ModelCraftʼni oching. {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:Assistants}} boʻlimida **Sunʼiy intellekt yordamchilari va skriptlarga ModelCraftʼdan foydalanishga ruxsat berish** belgisini qoʻying, soʻng **Tahrirlash** ni bosing.
2. Studio ichida {{ui:Yordamchini ulash}} ni tanlang. U manzil va quyida joylashtiradigan tokenni koʻrsatadi.
3. Skriptni yuklab oling: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Rhino dan

1. `cadcraft_link.py` ni Rhino skript muharririda ishga tushiring (Rhino 8 da Python 3).
2. Birinchi marta manzil va tokenni joylashtiring. Ular uy jildingizdagi `.cadcraft-link.json` faylida saqlanadi, hech qachon modelda emas. Studio har safar ishga tushganda yangi token yaratadi, shuning uchun skript oʻshanda yana soʻraydi.

Butun model hujjat nomi bilan atalgan bitta guruh sifatida keladi, masalan, "chair (linked)". Shundan soʻng har bir oʻzgarish bir oz toʻxtaganingizda keladi va faqat oʻzgargan obyektlar yuboriladi. Toʻxtatish uchun skriptni yana ishga tushiring.

## Grasshopper dan

Avval skriptni Rhino da bir marta ishga tushiring, shunda manzil va token saqlanadi.

1. Skript komponentini (Python 3) qoʻshing va unga `cadcraft_link.py` ning butun matnini joylashtiring.
2. Unga quyidagi kirishlarni bering: `G` (geometriya, roʻyxat kirishi bilan), `N` (nom, ixtiyoriy), `On` (mantiqiy almashlagich) va `Target` (ixtiyoriy: `model` yoki `part`, ikkala ilova ochiq boʻlsa).
3. `On` ni rost (true) holatga oʻtkazing.

Har bir hisoblash `G` ni yuboradi va komponent oxirgi safar yuborganini almashtiradi, shuning uchun suriluvchini sudrash bu yerdagi guruhni yangilaydi. Chiqish `a` nima sodir boʻlganini aytadi. Har bir komponentning oʻz guruhi bor.

## Guruh bilan nima qilish mumkin

- **Uni koʻchiring, belgilang, atrofida quring.** Guruhni qayerga qoʻyganingiz va uning belgisi har bir yangilanishda saqlanadi, yonidagi hamma narsa ham shunday.
- **Ichida tahrirlamang.** Har bir yangilanish guruh ichidagini almashtiradi. Bu obyektlarga boshqa dastur egalik qiladi.
- **Ortga qaytarish.** Bir-biridan ikki soniya ichidagi yangilanishlar bitta bekor qilish bosqichiga kiradi, shuning uchun {{key:Mod+Z}} butun sudrashni qaytaradi. Keyingi yangilanish modelni yana mos holatga keltiradi.
- **Saqlash.** Saqlangan fayl ulanishni saqlab qoladi. Uni qayta ochgandan soʻng skriptni yana ishga tushiring, shunda oʻsha guruh yangilanadi.

## Nima koʻchib keladi

Meshlar, politsirtlar, sirtlar va ekstruziyalar ekrandagi mesh sifatida, SubD oʻz meshi sifatida, egri chiziqlar qirralar sifatida, bloklar oʻz turgan joylarida alohida obyektlar sifatida (komponent sifatida emas), qatlamlar belgilar sifatida, ranglar va oʻlchov birliklari sifatida keladi. Bular bu yerda qanday koʻrinishi haqida [`.3dm` modelini kiritish](topic:import-3dm-files) ga qarang.

Boshqa dasturda soni bilan koʻrsatilgan holda qoldiriladi: nuqtalar, matn, oʻlchamlar, yoritgichlar va shunga oʻxshashlar.

**Faqat bir tomonlama.** Bu yerdagi oʻzgarishlar boshqa dasturga qaytmaydi.

## Agar nimadir notoʻgʻri ketsa

- **"No ModelCraft or PartCraft window allows it":** ModelCraft yoki PartCraft oynasi bunga ruxsat bermaydi. Sozlashning 1-bosqichini bajaring.
- **"Studio refused the token":** Studio tokenni rad etdi. Studio qayta ishga tushgan. Yangi tokenni nusxalang va skriptni yana ishga tushiring. Grasshopper uchun avval uni Rhino da ishga tushiring.
- **"Cannot reach CadCraft Studioʼga":** Studio ishlamayapti yoki manzil oʻzgargan.
