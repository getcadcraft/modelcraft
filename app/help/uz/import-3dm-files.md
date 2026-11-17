---
title: .3dm modelini import qilish
summary: Mesh, sirt, egri chiziq, blok, qatlam va ranglarga ega .3dm faylini import qiling; uchburchaklar qayerdan keladi va nima chiqarib tashlanadi.
keywords: 3dm, import, nurbs, polisirt, brep, sirtlar, render mesh, ekstruziya, egri chiziqlar, bloklar, qatlamlar, teglar, ranglar, birliklar, almashtirish, koʻchirish
from: 3cf29879
---

ModelCraft `.3dm` fayllarini oʻzining oʻqish moduli bilan, sahifa ichida oʻqiydi. Hech narsa yuklanmaydi va ModelCraft oflayn ishlaganda u ham ishlaydi. Versiya 5, 6, 7 va 8 tuzilmalaridagi fayllar sinovdan oʻtgan; eskiroq (2 dan 4 gacha) versiyalar ham ochilishi kerak, lekin hali sinab koʻrilmagan.

## Faylni import qilish

1. {{ui:Fayl}} guruhidagi {{ui:Import}} tugmasini bosing (yoki `.3dm` faylini 3D koʻrinishga tashlang).
2. Faylni tanlang.

   Oʻqish davomida holat satrida "chair.3dm oʻqilmoqda…" deb chiqadi, soʻng nima kirganini koʻrsatadi, masalan "chair.3dm import qilindi: 14 ta mesh (8330 ta yuza), 8 ta egri chiziq, 5 ta blok joylashuvi, 3 ta qatlam teg sifatida. Sirtlar: fayldagi saqlangan meshlardan 7 ta yuza, CadCraft tomonidan toʻrga boʻlingan 29 ta yuza."

Butun model fayl nomi bilan atalgan bitta guruh boʻlib keladi, tanlanadi va koʻrinish unga yaqinlashadi. Bitta {{key:Mod+Z}} uni teglar bilan birga yana olib tashlaydi.

## Uchburchaklar qayerdan keladi

ModelCraft yuzalar va meshlar bilan modellaydi, shuning uchun fayldagi har bir sirt kichik tekis uchburchaklardan iborat [mesh](topic:meshes) sifatida keladi. Polisirt (va har bir ekstruziya) uchun har bir yuzada ModelCraft quyidagi tartibda oladi:

1. **Fayldagi saqlangan render mesh.** Koʻpgina modellash dasturlari har bir sirt bilan ekranda koʻrsatgan meshni saqlaydi; u mavjud boʻlsa, ModelCraft uni oʻzgartirmasdan ishlatadi.
2. **Oʻz toʻrga boʻlishi**, agar faylda saqlangan mesh boʻlmasa: tekisliklar, NURBS sirtlari, aylanish sirtlari (sferalar, konuslar, torlar, tokarlik shakllari), egri chiziqdan chiqarilgan va ekstruziyalar (teshiklari va uchlari bilan), oʻz qirralari boʻyicha kesilgan. Polisirtning yuzalari oʻzaro qirra nuqtalarini ulashadi, shuning uchun yopiq polisirt yopiq mesh boʻlib keladi. Egri sohalar uchburchaklar haqiqiy sirtdan ob-yektning oʻlchamining taxminan 0.15 % ichida qolguncha boʻlinadi.
3. **Hech narsa**, ModelCraft hali oʻqimaydigan turdagi sirt uchun. Holat satri nechta yuza va qanday turdagi ekanini koʻrsatadi.

Holat satridagi "Sirtlar:" qismi saqlangan meshlardan nechta yuza kelganini va ModelCraft nechta yuzani toʻrga boʻlganini koʻrsatadi. Fayl yuzasi ichidagi qirralar yumshoq, ikki yuza orasidagi qirralar oʻtkir boʻladi, shuning uchun egri yuza silliq soyalanadi.

:::tip
Eng aniq shakllar uchun faylni uni yaratgan dasturda render meshlari bilan saqlang (odatda standart shunday; "kichik hajmda saqlash" varianti ularni chiqarib tashlaydi).
:::

## Nima keladi

- **Meshlar** oʻzining rang nuqtalari va tekstura koordinatalari bilan.
- **Polisirtlar, sirtlar va ekstruziyalar**, yuqorida tasvirlanganidek.
- **Egri chiziqlar** (toʻgʻri chiziqlar, polichiziqlar, yoylar, aylanalar, NURBS egri chiziqlar va ulardan birlashtirilgan egri chiziqlar) [qirralar](topic:curves) sifatida, har bir qatlam uchun bitta guruh qirra.
- **Bloklar** [komponentlar](topic:groups-components) boʻladi: blokning har bir joylashuvi bitta komponentning joylashuvi boʻladi, shuning uchun bitta nusxani tahrirlasangiz, hammasi oʻzgaradi. Bloklar ichidagi bloklar saqlanadi.
- **Qatlamlar** [teglar](topic:tags) boʻladi, qatlamning toʻliq nomi bilan ("Furniture::Chairs"), qatlam oʻchiq boʻlmagan boʻlsa yashirin holda. Har bir obyektning joylashuvi oʻz qatlamining tegini oladi.
- **Ranglar.** Obyektning rangi fayl qayerdan koʻrsatsa shundan keladi: oʻz rangi, qatlam rangi yoki materialning asosiy rangi. U yuzalarining boʻyogʻiga aylanadi.
- **Yashirin obyektlar yashirin holda keladi**; {{ui:Hammasini koʻrsatish}} ularni koʻrsatadi.
- **Birliklar:** fayl oʻz birligini aytadi; model oʻzining haqiqiy oʻlchamida keladi.

## Nimalar chiqarib tashlanadi (va xabar beriladi)

Holat satridagi "Eslatmalar:" qismi kelmagan hamma narsani soni bilan sanab beradi:

- nuqtalar va nuqtalar bulutlari, matn, matn nuqtalari, oʻlchamlar, yetakchi chiziqlar, shtrixlashlar, yoritgichlar, kesish tekisliklari va maket tafsilotlari;
- SubD obyektlar: avval ularni fayl yaratilgan dasturda meshlarga yoki polisirtlarga aylantiring;
- ofset sirtlardagi yuzalar va ModelCraft hali oʻqimaydigan boshqa sirt turlari, agar fayl ular uchun mesh saqlamagan boʻlsa;
- boshqa fayllardan bogʻlangan bloklar (faqat import qilingan fayl oʻqiladi);
- qiya (kesilgan) uchli ekstruziyalar toʻgʻri uchlar bilan keladi.

Material teksturalari, render sozlamalari, nomlangan koʻrinishlar, guruhlar va foydalanuvchi matni oʻqilmaydi; material faqat asosiy rangini beradi.

## Chegaralar

300 MB gacha boʻlgan fayllar. Buzilgan fayl nima notoʻgʻriligini aytadi va hech narsa qoʻshmaydi; oʻqib boʻlmaydigan bitta obyekt chiqarib tashlanadi va sanaladi, qolganlari kiradi.
