---
title: Qirralarni yumshatish va silliqlash
summary: Yassi burchak ostida tutashgan yuzalar orasidagi qirralarni yashiring, shunda egri shakllar bitta silliq sirt sifatida koʻrinadi — ModelCraft da va eksport qilingan fayllarda.
keywords: yumshatish, silliqlash, yumshoq qirralar, silliq soyalash, qirralarni yashirish, fasetlar, faset, egri, normallar, qattiqlashtirish, burchak
from: 52d32453
---

ModelCraft da egri shakl yassi yuzalardan tuzilgan. Ular orasidagi **yumshoq** qirralar chizilmaydi, va ular birlashtirgan yuzalar bitta silliq sirt sifatida soyalanadi, shuning uchun 24 qirrali silindr dumaloq koʻrinadi.

Aylanani {{ui:Itarish/tortish}} bilan koʻtarganingizda, uning yon tomonlari siz uchun yumshatiladi. Boshqa shakllar uchun burchak boʻyicha yumshating.

## Burchak boʻyicha yumshatish

1. Yumshatiladigan narsani tanlang: yuzalar va qirralar, yoki guruh yoki komponent (uning barcha qirralari).
2. {{ui:Entity info}} da {{ui:Quyidagigacha yumshatish}} ga burchak kiriting, masalan `20`, va {{ui:Yumshatish}} ni bosing.

Tanlovdagi har bir qirra, agar uning ikki yuzasi shu burchakka yoki undan kamroqqa burilsa, yumshoq boʻladi; oʻtkirroq burilishga ega qirralar esa qattiq boʻlib qoladi. 12 qirrali prizmaning yon tomonlari 30° ga, qirralari 90° ga buriladi, shuning uchun `31` faqat yon tomonlarni yumshatadi.

{{ui:Hammasini qattiqlashtirish}} tanlovdagi har bir qirrani yana qattiq qiladi. Har biri bitta ortga qaytarish qadami.

## Bilishingiz kerak boʻlgan narsalar

- Faqat aynan ikki yuza orasidagi qirralar yumshatiladi. Erkin qirralar oʻz holicha qoladi.
- Silliq soyalash faqat yumshoq qirralar orqali davom etadi: yumshoq qirrasi boʻlmagan yuza tekis soyalanadi.
- Yumshoq qirralar ModelCraft faylida saqlanadi. **glTF (.glb)** va **OBJ** eksportlari silliq soyalashni olib yuradi (har bir burchakdagi normal), shuning uchun boshqa dasturlar bir xil sirtni koʻrsatadi. Collada va STL tekis yuzalarni eksport qiladi.
- Yumshoq qirralar har qanday yuza uslubida yashiringan, {{ui:Rentgen}} va {{ui:Karkas}} da ham. Ularni koʻrish uchun shaklni tanlang va {{ui:Hammasini qattiqlashtirish}} ni bosing; ortga qaytarish yumshatishni qaytaradi.
