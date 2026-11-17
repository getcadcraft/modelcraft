---
title: Koeffitsiyentlar boʻyicha masshtablash va qisqarish uchun tuzatish
summary: Tanlovni tanlagan nuqtangiz atrofida har bir oʻq uchun koeffitsiyent bilan masshtablang yoki quyiladigan detal sovigandan keyin qisqaradigan foizga qarab quyma modelni kattalashtiring.
keywords: masshtab, notekis, koeffitsiyent, foiz, choʻzish, qisqarish, qisqartirish, quyish, quyma model, quyish sexi, tuzatish, qayta oʻlchamlash
from: 37e1bbff
---

{{ui:Masshtab}} asbobi ({{key:S}}) bir xil tarzda masshtablaydi yoki bir yoki ikki yoʻnalishda choʻzish uchun dastani sudraydi. **{{ui:Koeffitsiyentlar boʻyicha masshtablash…}}** (Asboblar menyusi yoki Oʻzgartirish guruhi) esa yoziladigan shakl: uchta oʻqning har biri uchun bitta son.

1. Qirralar, yuzalar, guruhlar yoki komponentlarni tanlang.
2. {{ui:Koeffitsiyentlar boʻyicha masshtablash…}} ni oching. Qizil, yashil va koʻk uchun koeffitsiyent kiriting. Koeffitsiyent `1.015`, `101.5%` yoki `+1.5%` boʻlishi mumkin (kichikroq uchun `-2%`). {{ui:Uchala oʻqda bir xil}} birinchisini qolgan ikkitasiga nusxalaydi.
3. **Joyida qolishi** kerak boʻlgan narsani tanlang: tanlovning oʻrtasi, pastki burchagi, pastki tomonining oʻrtasi yoki koordinata boshi.
4. Maydonlar ostidagi qator hozirgi va keyingi oʻlchamni koʻrsatadi. {{ui:Masshtab}} buni bitta bekor qilish bosqichida bajaradi.

Oʻqlar siz ochgan guruhniki (yuqori darajada modelniki). Burilgan guruh yoki komponent, agar uning koeffitsiyentlari turlicha boʻlsa, qiyshaygan holda chiqadi; buning oʻrniga uni oʻz ichiga olgan guruhni masshtablang. Komponentning ichki qismiga tegilmaydi, shuning uchun uning boshqa nusxalari oʻzgarishsiz qoladi.

## Qisqarish uchun tuzatish

Quyma detal sovigan sari qisqaradi, shuning uchun uning modeli kattaroq qilinadi. **Qisqarish uchun tuzatish** ostida har bir oʻq uchun foizni kiriting (quyish sexingiz yoki model ustangiz buni metalingiz uchun beradi; yuqoridagi 1,5 % faqat misol) va {{ui:Koeffitsiyent sifatida ishlatish}} tugmasini bosing.

- **Foizning oʻzi** koeffitsiyentni 1 plus foiz qiladi: 1,5 % 1,015 beradi, qisqarish qoidasi koʻrsatadigan qiymat.
- **Aniq yetarli** koeffitsiyentni 1 ni (1 minus foiz) ga boʻlinadi qiladi: 1,5 % 1,0152 beradi, shunda quyma shuncha qisqargandan keyin detalning oʻlchamida chiqadi.

Oxirgi foizlaringiz bu brauzerda eslab qolinadi.

:::note
Foizni siz beradi: ModelCraft metalingiz, qolipingiz yoki jarayoningiz haqida hech narsa bilmaydi.
:::
