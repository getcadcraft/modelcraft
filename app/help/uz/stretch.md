---
title: Choʻziladigan komponentlar
summary: Komponentning bir nusxasini kengroq, chuqurroq yoki balandroq qiling, uning qismlari oʻz oʻlchamini saqlaydi: bir xil oyoqli uzunroq stol, tarqatilgan tokchali balandroq javon, takrorlanuvchi tayanchli panjara.
keywords: dinamik komponent, choʻzish, komponent oʻlchamini oʻzgartirish, parametrik, nomlangan oʻlchamlar, takrorlash, massiv, oyoqlar, tokchalar, panjara, qoidalar, oʻzgaruvchilar
from: b4c40f43
---

Komponentni masshtablash uning ichidagi hamma narsani, oyoqlar va relslarni ham kattalashtiradi. **Bu nusxani choʻzish** komponentning kengligini, chuqurligini yoki balandligini oʻzgartiradi, bunda har bir qism qoidaga amal qiladi: stol usti kattalashadi, oyoqlari esa qalinligini saqlab, uchlarida qoladi.

Bu qismlardan, yaʼni komponent ichidagi guruhlar yoki komponentlardan tashkil topgan komponentlarda ishlaydi, [boshlangʻich kutubxonadagi](topic:starter) har bir narsa kabi.

## Nusxani choʻzish

1. Komponentni tanlang.
2. {{ui:Obyekt maʼlumoti}} ichida {{ui:Bu nusxani choʻzish…}} tugmasini bosing.
3. Yangi {{ui:Kenglik (qizil)}}, {{ui:Chuqurlik (yashil)}} va {{ui:Balandlik (koʻk)}} ni kiriting va {{ui:Choʻzilish}} tugmasini bosing.

Faqat oʻsha nusxa oʻzgaradi: u oʻz komponentiga aylanadi va qaysi asldan olinganini eslab qoladi. Uni istalgan vaqtda yana choʻzishingiz mumkin: u har safar asldan qayta hisoblanadi, shuning uchun hech narsa siljib ketmaydi. Aslning boshqa nusxalari oʻz holicha qoladi.

## Qoidalar

Komponentni oching (ikki marta bosing) va uning bir qismini tanlang. {{ui:Obyekt maʼlumoti}} da qizil, yashil va koʻk boʻylab qoida bilan {{ui:Komponent choʻzilganda}} koʻrsatiladi:

| Qoida | Qism nima qiladi | Masalan |
|---|---|---|
| {{ui:Choʻzilish}} | Komponent bilan birga kattalashadi; ikki tomonga masofasi saqlanadi | Stol usti |
| {{ui:Boshida qolsin}} / {{ui:Oxirida qolsin}} | Oʻz oʻlchamini va oʻsha tomonga masofasini saqlaydi | Oyoqlar |
| {{ui:Nisbatda siljitish}} | Oʻlchamini saqlaydi; oʻrtasi nisbatda siljiydi | Tokchalar, eshik dastasi |
| {{ui:Nisbatda masshtablash}} | Oʻrni va oʻlchami nisbatda oʻzgaradi | Zinaning pogonalari |
| {{ui:Takrorlash}} | Uning nusxalari boshlanishidan uzoq tomongacha, har {{ui:Har}} oraliqda joylashadi | Panjara tayanchlari |

{{ui:Avtomatik}} (boshlangʻich holat) buni oʻzi aniqlaydi va qaysi biri ekanini koʻrsatadi: qism komponentni qamrab olsa {{ui:Choʻzilish}}, taxminan oʻrtada tursa {{ui:Nisbatda siljitish}}, aks holda u yaqinroq boʻlgan tomonda qoladi.

## Bilish kerak boʻlgan narsalar

- Qismlarning oʻz shakllari umumiy, shuning uchun choʻzilgan nusxa yengil. Qismni tahrirlash uni har bir nusxada oʻzgartiradi.
- Choʻzilgan nusxa aslning keyingi qoida yoki joylashuv oʻzgarishlariga ergashmaydi: ularni olish uchun uni yana choʻzing.
- Komponent ichida erkin chizilgan yuzalar (qism ichida boʻlmagan) oʻz oʻlchamini saqlaydi; ularga ergashishi uchun ularni qism qiling.
- Qoidalar va har bir nusxa qaysi asldan choʻzilgani ModelCraft faylida saqlanadi.
