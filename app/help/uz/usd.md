---
title: USD ni saqlash, ochish va eksport qilish
summary: Butun modelni hech narsa yoʻqotmasdan USD (.usda, .usdc yoki .usdz) sifatida saqlang, uni qayta oching va boshqa 3D dasturlaridan USD sahnalarini import qiling.
keywords: usd, usda, usdc, usdz, openusd, universal scene description, boshqacha saqlash, eksport, import, sahna yigʻish, archviz, openpbr, materialx, paket
from: 73d299f9
---

USD — koʻp 3D, renderlash va arxvizualizatsiya dasturlari birgalikda ishlatadigan sahna formati. ModelCraft uni yozadi va oʻqiydi. `.modelcraft` {{ui:Saqlash}} yozadigan format boʻlib qoladi; USD esa {{ui:Boshqacha saqlash}} da tanlovdir.

## USD sifatida saqlash

1. {{ui:Fayl}} guruhidagi {{ui:Boshqacha saqlash}} ni tanlang (yoki {{key:Mod+Shift+S}} ni bosing).
2. Formatni tanlang: {{ui:Matn (.usda)}} (oʻqilishi oson, versiyalarni boshqarish uchun yaxshi), {{ui:Ikkilik (.usdc)}} (eng kichik va eng tez) yoki {{ui:Paket (.usdz)}} (ichida teksturalari bor bitta fayl).
3. Fayl yuklab olinadi (desktop ilovada qayerga borishini siz tanlaysiz).

Xuddi shu tanlovlar {{ui:Eksport}} › {{ui:USD (.usda, .usdc, .usdz)…}} da ham bor.

## Hech narsa yoʻqolmaydi

ModelCraft saqlagan USD faylni oching va model aynan qaytadi: teshiklari bilan yuzalar, yumshoq va yashirin qirralar, egri chiziqlar, guruhlar va komponentlar, teglar, sahnalar, oʻlchamlar, yoʻriqchilar, kesim tekisliklari, lampalar, import qilingan teksturalar va koʻrinish. Boshqa dasturlar bir xil modelni meshlar, guruhlar, komponentlar uchun prototiplar, materiallar, lampalar va kameralar sifatida koʻradi.

:::note
Boshqa dastur guruh yoki komponentning geometriyasini oʻzgartirsa, ModelCraft bu qismni oʻzgarishi saqlangan holda mesh sifatida ochadi va shunday necha qismni oʻqiganini aytadi. Boshqa dasturda siljitilgan yoki oʻchirilgan joylashuv siljitilgan yoki oʻchirilgan holda qoladi.
:::

## Boshqa birovning USD faylini ochish yoki import qilish

- `.usd`, `.usda`, `.usdc` yoki `.usdz` faylni {{ui:Ochish}} — undan model boshlash uchun.
- Ochiq modelga qoʻshish uchun bittasini {{ui:Import}} qiling. U murojaat qilgan fayllarni (boshqa qatlamlar, teksturalar) u bilan birga tashlang.

Meshlar normallari, UV koordinatalari va ranglari bilan kiradi; umumiy geometriya komponentlar sifatida, materiallar boʻyash ranglari sifatida, lampalar lampa sifatida, kameralar esa sahna sifatida kiradi. Fayl birliklari va yuqori oʻqi qanday boʻlishidan qatʼi nazar, hammasi metrda va Z yuqorida boʻladi.

## Hali emas

Animatsiya, skeletlar va MaterialX tugun grafiklari hozircha USD sifatida oʻqilmaydi va yozilmaydi. ModelCraft ning oʻz animatsiyasi va tugun materiallari ModelCraft qayta ochishi uchun saqlangan USD faylda saqlanadi, lekin boshqa dasturlar ularni koʻrmaydi. Fayl murojaat qiladigan va ModelCraft oʻqiy olmaydigan qatlamlar (masalan, MaterialX hujjati) izoh bilan chetda qoldiriladi.
