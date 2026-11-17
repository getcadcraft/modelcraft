---
title: Qattiq jism asboblari: birlashtirish, ayirish, kesishtirish
summary: Yopiq guruhlar va komponentlarni bittaga birlashtiring, birini ikkinchisidan kesib oling yoki ular umumiy boʻlgan qismni saqlang.
keywords: qattiq jism, qattiq jismlar, qattiq jism tekshiruvi, qattiq emas, qattiq jismni tuzatish, teshik, begona qirra, ichki-tashqi, birlashtirish, qoʻshish, bir-biriga kiritish, ayirish, farq, kesish, kesishtirish, kesishma, boolean, tashqi qobiq
from: f35df1cc
---

Qattiq jism asboblari **qattiq jismlarni** birlashtiradi: hajmni yopadigan yuzalarga ega guruhlar va komponentlar, har bir qirra aynan ikki yuzani tutashtiradi. {{ui:Entity info}} {{ui:Qattiq jism}} ni koʻrsatadi: bitta uchun {{ui:Ha}}, va uning hajmini.

Ular **Tartiblash** guruhidagi {{ui:Jismlar}} menyusida.

## Qattiq jism boʻlmagan narsa

Guruh yoki komponentni tanlang. Agar u qattiq jism boʻlmasa, {{ui:Entity info}} nega ekanini aytadi, masalan "Qattiq jism emas: 4 ta qirra teshikka tutashgan · 1 ta begona qirra".

| Muammo | Nimani anglatadi |
|---|---|
| Qirralar teshikka tutashgan | Yuza yetishmayapti |
| Qirralar uchta yoki undan koʻp yuza bilan umumiy | Yuza ichkarini boʻladi yoki ikki shakl qirra boʻylab tegib turadi |
| Shakl ichidagi yuzalar | Hajm ichida qolgan devor |
| Begona qirralar | Hech bir yuzani chegaralamaydigan chiziqlar |
| Ichki-tashqi aylantirilgan yuzalar | Ularning old tomoni ichkariga, qoʻshnilariga qarshi |

{{ui:Muammolarni koʻrsatish}} ularni tanlangan qirralar va yuzalar bilan ochadi, shuning uchun ularni koʻrishingiz mumkin. {{ui:Tuzatish}} oddiy holatlarni bitta ortga qaytarish qadamida tuzatadi: begona qirralar va shakl ichidagi yuzalarni olib tashlaydi, yuzalarni toʻgʻri tashqariga qaratadi va chekkasi tekis boʻlgan teshiklarni yopadi. Xavfsiz tuzatib boʻlmaydigan narsalar (tekis boʻlmagan teshik, koʻp yuza bilan umumiy qirra) sizga qoldiriladi va qolgani aytiladi.

## Birlashtirish

1. Ikki yoki undan ortiq qattiq jismni tanlang (birini bosing, qolganlarini {{key:Ctrl}}+bosing).
2. {{ui:Jismlar}} › {{ui:Birlashtirish}}.

Ular bitta qattiq jism boʻladi, bitta guruhda. Ular ustma-ust tushgan joylarda ichki yuzalar yoʻqoladi.

## Ayirish

1. {{ui:Jismlar}} › {{ui:Ayirish}}.
2. **Olib tashlanadigan** (kesuvchi) qattiq jismni bosing.
3. **Kesiladigan** qattiq jismni bosing.

Ikkinchi jismning qolgani qoladi; kesuvchi sarflanadi. Masalan, blokdan teshik ochish uchun uning orqali ustun torting, ustunni guruhga aylantiring, soʻng ustunni blokdan ayiring.

## Kesishtirish

Ikki yoki undan ortiq qattiq jismni tanlang, soʻng {{ui:Jismlar}} › {{ui:Kesishtirish}}. Faqat ularning hammasi umumiy boʻlgan qism saqlanadi.

## Bilishingiz kerak boʻlgan narsalar

- Natija yangi guruh. U birinchi qattiq jismning nomini, rangini va belgisini saqlaydi (Ayirish uchun: kesilgan jismning). Uning yuzalariga boʻyalgan ranglar saqlanmaydi.
- Natijaning tekis tomonlari bitta yuzalardir. Dumaloq tomonlar esa chizilgan tekis fasetlar boʻlib chiqadi.
- Agar guruh yoki komponent qattiq jism boʻlmasa, asbob qaysi biri ekanini aytadi va hech narsani oʻzgartirmaydi. Yetishmayotgan yuza yoki ichidagi begona yuzani qidiring.
- Ochiq guruh ichida asboblar shu guruhdagi guruhlar va komponentlar ustida ishlaydi.
- Har bir asbob bitta ortga qaytarish qadami.
- Qattiq jism asbobidan birinchi marta foydalanganingizda uning dvigateli (manifold-3d) yuklanadi, bu bir oz vaqt olishi mumkin.
