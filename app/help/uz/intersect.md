---
title: Yuzalarni kesishtirish
summary: Yuzalar bir-birini kesib oʻtgan joydagi chiziqlarni chizing, shunda boʻlaklarni itarish, oʻchirish yoki boʻyash mumkin boʻladi.
keywords: kesishtirish, yuzalarni kesishtirish, model bilan kesishtirish, tanlov bilan kesishtirish, kesish, teshik, ochiq joy, birlashtirish, chiziqlar, boolean
from: 6bc58526
---

Bir shakl boshqasidan oʻtganda, ModelCraft ularning yuzalari tegib turgan chiziqni chizmaydi: ular shunchaki bir-birining ustida turadi. **Kesishtirish** bu chiziqlarni qirralar sifatida chizadi, shunda yuzalar oʻsha yerda boʻlinadi. Keyin boʻlaklarni itarish/tortish, oʻchirish yoki boʻyash mumkin.

Ikkala buyruq ham {{ui:Tahrirlash}} › {{ui:Yana}} ichida.

## Model bilan kesishtirish

Tanlaganingizni **ekrandagi har bir yuza** bilan kesadi.

Masalan, nur (guruh) devor (boshqa guruh) orqali oʻtadi va devorda ochiq joy kerak boʻladi:

1. Devorni ochish uchun uning ustiga ikki marta bosing va barcha yuzalarini tanlang ({{key:Ctrl+A}}).
2. {{ui:Tahrirlash}} › {{ui:Yana}} › {{ui:Model bilan kesishtirish}}.

Nurning konturi devorning ikkala yuzasida ikkita yangi yuza sifatida chiziladi. Ulardan birini devor orqali itarib ochiq joy hosil qiling, soʻng devorni yoping.

## Tanlov bilan kesishtirish

Tanlangan yuzalar, guruhlar va komponentlarni **faqat bir-biri bilan** kesadi. Kamida ikkitasini tanlang.

## Chiziqlar qayerga tushadi

Chiziqlar doim **ochiq kontekstda** chiziladi: hech qanday guruh ochiq boʻlmasa modelda, yoki tahrirlayotgan guruhda. Ochiq boʻlmagan guruhlar va komponentlar oʻzgarmaydi. Shunday qilib guruh yuzalarini kesish uchun avval uni oching, yuqoridagi misolda boʻlgani kabi.

## Bilib olish kerak

- Bir tekislikda yotgan yuzalar kesishtirilmaydi.
- Yuzada halqa yopadigan chiziqlar chizilgan chiziqlar kabi yangi yuza hosil qiladi.
- Har bir kesishtirish bitta bekor qilish bosqichi. Hech narsa kesishmasa, hech narsa oʻzgarmaydi.
- Yopiq shakllar uchun [jism asboblari](topic:solids) (Birlashtirish, Ayirish) butun ishni bitta bosqichda bajaradi.
