---
title: Kesim tekisliklari: modelni ochish
summary: Model ichini koʻrish uchun kesim tekisligini joylashtiring, uni ichkariga suring, teskari aylantiring yoki kesimni oʻchiring.
keywords: kesim, kesim tekisligi, kesim, kesib tashlash, kesib olish, ichki, qavat plani, kesish, kesma, koʻndalang kesim
from: 28c3a645
---

Kesim tekisligi modelni ochadi, shuning uchun uning ichini koʻrish va u bilan ishlash mumkin: uyning qavat plani, shkafning ichki qismi. Model oʻzgarmaydi; kesim faqat koʻrinish.

## Birini joylashtirish

1. {{ui:Kamera}} guruhidagi {{ui:Kesim}} ni bosing.
2. Yuzani bosing. Tekislik shu yuzaga joylashadi, unga qaragan toʻrtta strelka bilan.

   Har qanday yuzadan tashqarida bosing: tekislik qaragan yoʻnalishingizga eng koʻp mos keladigan kvadrat boʻladi. Avval strelka tugmasini bosing, tekislikni qizilga ({{key:Right}}), yashilga ({{key:Left}}) yoki koʻkka ({{key:Up}}) perpendikulyar qilish uchun.

Strelkalar qaragan tomon **kesib tashlanadi**. Yuzaga joylashgan tekislik hali hech narsani kesmaydi: uni modelga suring.

## Surish, teskari aylantirish, oʻchirish

Tekislik konturini bosib tanlang. {{ui:Obyekt maʼlumoti}} da:

- {{ui:Strelkalari boʻylab}} uning qayerda turganini koʻrsatadi. Yangi masofani kiriting va {{key:Enter}} ni bosing, uni model orqali surish uchun; old yuzaga joylashtirgan tekislikni 1 m modelga surish uchun `-1m` kiriting.
- {{ui:Teskari aylantirish}} strelkalarni aylantiradi, shunda boshqa tomon kesib tashlanadi.
- {{ui:Faol (modelni kesadi)}}: bir vaqtda bitta tekislik kesadi. Boshqa tekislikning qutisini belgilang yoki yangisini joylashtiring, va u kesadi.
- Uni {{ui:Nom}} da qayta nomlang; {{key:Delete}} yoki {{ui:Oʻchirgich}} bilan oʻchiring.

Tekislik yopiq qattiq jismdan oʻtgan joyda kesim quyuq rang bilan toʻldiriladi. Yopiq boʻlmagan geometriya (bitta yuza, ochiq quti) kesiladi, lekin toʻldirilmaydi.

## Koʻrsatish va yashirish

{{ui:Koʻrinishlar}} ichida:

- {{ui:Kesim tekisliklarini koʻrsatish}} tekisliklarning konturlari va strelkalarini yashiradi (kesim qoladi).
- {{ui:Kesimlarni koʻrsatish}} kesimni oʻchiradi va tekisliklarni oʻchirmasdan butun modelni koʻrsatadi.

[Taqdimot koʻrinishi](topic:styles-shadows#presentation-view) konturlarni ham yashiradi.

## Muhim eslatmalar

- Kesib tashlangan narsani bosib boʻlmaydi va unga tutib olinmaydi, shuning uchun kesim koʻrsatayotgan narsa ustida chizishingiz mumkin.
- Kesim tekisliklari, qaysi biri faol ekanligi va ikkita kalit ModelCraft faylida saqlanadi. Har bir oʻzgarish bitta bekor qilish bosqichi.
- Eksportlar doim butun modelni oʻz ichiga oladi: kesim koʻrinish, tahrir emas.
