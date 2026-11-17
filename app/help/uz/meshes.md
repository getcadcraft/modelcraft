---
title: Meshlar
summary: Guruh yoki komponentni meshga aylantiring — 3D kontent vositalari modellaydigan obyekt turi — va push/pull geometriyasiga qaytaring.
keywords: mesh, meshlar, poligon, poligonlar, n-gon, kvad, kvadlar, uchlar, yarim-qirra, uv, uvlar, aylantirish, meshga aylantirish, geometriyaga aylantirish, subdivision, sculpt, modellashtirish, 3d kontent
from: e32363e8
---

ModelCraftʼda ikki turdagi geometriya bor. **Push/pull geometriyasi** — bu siz chizadigan narsa: bir-biriga yopishadigan, bir-birini kesadigan va yaxlitlanadigan tekis yuzlar. **Mesh** — bu 3D kontent vositalari modellaydigan obyekt turi: istalgan sondagi burchakli yuzlar, har bir burchak oʻz tekstura koordinatalari (UV), normallar va ranglarni olib yurishi mumkin, har bir uch esa ogʻirliklar kabi qiymatlarga ega. Mesh guruh yoki komponent kabi joylashtiriladi va bir modelda push/pull geometriyasi yonida turadi.

## Guruh yoki komponentni meshga aylantirish

1. Guruh yoki komponentni tanlang.
2. {{ui:Obyekt maʼlumoti}} da {{ui:Meshga aylantirish}} ni bosing.

Uning yuzlari meshning yuzlariga aylanadi (teshikli yuz uchburchaklar sifatida keladi), qattiq qirralar oʻtkir qoladi, yumshoq qirralar silliq soyalanadi, boʻyoq, materiallar va import qilingan teksturalar oʻz yuzlarida qoladi. Ichidagi guruhlar va komponentlar bitta meshga birlashtiriladi. Erkin qirralar qoldiriladi: mesh yuzlarni saqlaydi. Komponentning har bir joylashuvi meshni koʻrsatadi. Bu bitta bekor qilish bosqichi.

## Obyekt maʼlumoti nimani koʻrsatadi

Meshni tanlang va uning yuzlari, uchlari va qirralarini, yopiq qattiq jism ekanligini (va uning hajmini) hamda joylashgan holdagi oʻlchamini koʻring. Ochiq qirralari bor mesh ularning sonini aytadi.

## Meshni yana push/pull geometriyasiga aylantirish

Meshni tanlang va {{ui:Geometriyaga aylantirish}} ni bosing. Tekis yuzlar oldingidek qaytadi; burchaklari bir tekislikda boʻlmagan yuz uchburchaklar boʻlib qaytadi. Oʻtkir qirralar qattiq, qolganlari yumshoq boʻladi. {{ui:Parchalash}} meshning yuzlarini uni oʻragan guruhga toʻgʻridan-toʻgʻri joylashtiradi.

## Bilish kerak boʻlgan narsalar

- Meshni ikki marta bosing va Mesh ish maydonida [uning uchlari, qirralari va yuzlarini tahrirlang](topic:mesh-edit). Push/pull bilan tahrirlash uchun uni geometriyaga aylantiring; uni har qanday guruh kabi koʻchiring, aylantiring, masshtablang, nusxalang, boʻyang, yashiring va belgilang.
- Eksport, 3D bosma, renderlar va VR meshni uning yuzlari sifatida koʻradi.
- Mesh saqlagan fayl `.modelcraft` faylining yangi versiyasi sifatida saqlanadi, shuning uchun ModelCraft 0.6 va undan eski versiyalari uni ocha olmaydi; meshsiz fayllar ularda avvalgidek ochiladi. Eski versiyadagi kishi bilan fayl ulashish uchun avval meshlarni geometriyaga aylantiring.
- Mesh uchun bekor qilish har bir bosqich oʻzgartirganini saqlaydi, shuning uchun juda katta mesh ham tez bekor qilinadi.

Shuningdek qarang: [Guruhlar va komponentlar](topic:groups-components) va [Hali qurilmagan](topic:not-built-yet).
