---
title: Relyef: konturlardan yer va uni shakllantirish
summary: Yerni kontur chiziqlaridan yoki toʻr shaklida yarating, soʻng yumshoq choʻtka bilan koʻtaring yoki pasaytiring.
keywords: relyef, yer, landshaft, topografiya, konturlar, kontur chiziqlari, hudud, nishablik, tepalik, uyum, qumxona, smoove, shakllantirish, tekislash, TIN
from: 407652b3
---

Relyef uchburchaklardan tashkil topgan yer boʻlib, istalgan shaklga mos kela oladi. U guruh: tahrirlash uchun uni ikki marta bosing.

## Kontur chiziqlaridan

1. Kontur chiziqlarini ularning balandliklarida oling: chizing yoki [hudud rejasini import qilib](topic:site-plan) har bir konturni kerakli sathga koʻtaring.
2. Ularni tanlang (barcha konturlarning barcha qirralari).
3. {{ui:Tahrirlash}} › {{ui:Yana}} › {{ui:Tanlangan konturlardan relyef}}.

ModelCraft kontur nuqtalarini uchburchaklar bilan birlashtiradi (TIN) va ichidagi har bir qirrani yumshatadi, shuning uchun yer silliq soyalanadi. Chiziqlarning oʻzi qoladi; ularga ehtiyoj qolmasa, oʻchiring yoki yashiring. Juda zich konturlar 8 000 nuqtagacha siyraklashtiriladi.

## Tahrirlash uchun toʻr

{{ui:Tahrirlash}} › {{ui:Yana}} › {{ui:Relyef toʻri…}} kenglik, chuqurlik va katakcha oʻlchamini soʻraydi, soʻng bosgan burchagingizga yassi uchburchaklar toʻrini joylashtiradi. Kichik katakchalar silliqroq shakllantiradi, lekin koʻproq yuza hosil qiladi (eng koʻpi 200 × 200 katakcha).

## Shakllantirish: yerni koʻtarish va pasaytirish

1. Relyefni ochish uchun uni ikki marta bosing.
2. {{ui:Tahrirlash}} › {{ui:Yana}} › {{ui:Relyefni shakllantirish}}. Doira kursor ostidagi yerda choʻtkani koʻrsatadi.
3. Choʻtka ostidagi yerni koʻtarish uchun yuqoriga, pasaytirish uchun pastga suring. Oʻrtasi eng koʻp siljiydi va yer doira chetida nolga tushadi, shuning uchun uyumlar va chuqurliklar silliq chiqadi.

Uyumni aniq balandlikka keltirish uchun bir marta bosing, soʻng balandlikni kiriting, masalan `1.5m` (minus pasaytiradi), va {{key:Enter}} ni bosing. Choʻtkani oʻzgartirish uchun bosishdan oldin uzunlik kiriting: `5m` radiusi 5 m boʻlgan choʻtka beradi.

Har bir shakllantirish bitta ortga qaytarish qadamidir.

## Bilish kerak boʻlgan narsalar

- Shakllantirish faqat uchburchak yuzalarni siljitadi, shuning uchun har bir yuza tekis qoladi. Qoʻlda chizilgan yuzalar (toʻrtburchaklar, koʻpburchaklar) relyef emas: asbob buni aytadi.
- Shakllantirish nuqtalarni faqat tik yuqoriga va pastga siljitadi; yangi nuqta qoʻshmaydi. Aniqroq tafsilotlar uchun kichikroq katakchali toʻr yarating.
- Relyef boshqa har qanday guruh kabi eksport qilinadi. IFC da u boshqa hamma narsa kabi bino elementi proksisi boʻladi.
