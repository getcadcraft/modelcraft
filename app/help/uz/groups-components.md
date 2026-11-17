---
title: Guruhlar va komponentlar
summary: Narsalarni bir-biriga yopishtirmaslik, bitta nusxani tahrirlab hammasini oʻzgartirish va Obyektlar daraxti hamda Komponentlar panellaridan foydalanish.
keywords: guruh, komponent, guruh yaratish, komponent yaratish, parchalash, yagona qilish, obyektlar daraxti, nusxalar, blok, ichma-ich, guruhni tahrirlash, joylashtirish
from: 7cb925f3
---

ModelCraft da ochiq geometriya bir-biriga yopishadi: bir-biriga tegib turgan chiziqlar bir-birini boʻladi, umumiy qirrasi bor yuzalar birga koʻchadi. Yuzalarda chizish shu tufayli ishlaydi, lekin bu bir qutining boshqa quti bilan qoʻshilib ketishini ham anglatadi. **Guruhlar** va **komponentlar** narsalarni alohida saqlaydi.

- **Guruh** geometriyani bitta obyekt sifatida ishlaydigan qilib oʻraydi. Undan tashqaridagi hech narsa unga yopishmaydi.
- **Komponent** koʻp marta joylashtirilishi mumkin boʻlgan guruhdir. Har bir nusxa bir xil mazmunga ega: bittasini tahrirlasangiz, hammasi oʻzgaradi. Takrorlanadigan hamma narsa uchun komponentlardan foydalaning: derazalar, ustunlar, stollar, daraxtlar.

## Guruh yoki komponent yaratish

1. Geometriyani tanlang. Yuzada uch marta bosish butun bogʻlangan obyektni tanlaydi; sichqoncha bilan tortish esa qutidagi hammasini tanlaydi.
2. Guruh uchun {{key:Shift+G}}, komponent uchun {{key:G}} tugmasini bosing. Shuningdek, asboblar panelining {{ui:Tartiblash}} guruhidagi {{ui:Guruh}} yoki {{ui:Komponent}} tugmasini, yoki {{ui:Obyekt maʼlumoti}} ichidagi {{ui:Guruh yaratish (Shift+G)}} yoki {{ui:Komponent yaratish (G)}} tugmasini bosishingiz mumkin.

   Holat satrida "Guruhlandi: Group#1." yoki "Komponent yaratildi: Component#1." deb chiqadi, yangi obyekt tanlanadi va u {{ui:Obyektlar daraxti}}da paydo boʻladi.

3. Nomini berish uchun {{ui:Obyekt maʼlumoti}} ichidagi {{ui:Nom}} maydoniga nom yozing va {{key:Enter}} tugmasini bosing yoki boshqa joyni bosing.

Yuzani tanlaganda uning qirralari ham birga tanlanadi. Hech narsa tanlanmagan boʻlsa, holat satrida chiqadi: "Avval biror geometriyani tanlang (qutini torting yoki bogʻlangan hammasini tanlash uchun uch marta bosing)."

Guruhlarni ham guruhlash mumkin: bir nechta guruhni tanlab, {{key:Shift+G}} tugmasini bosing. {{ui:Obyektlar daraxti}} ichma-ichlikni koʻrsatadi.

:::note
Tugma harflari SketchUp ning standart sozlamalariga mos keladi: {{key:G}} komponent yaratadi, {{key:Shift+G}} guruh.
:::

## Guruh yoki komponent ichida tahrirlash

1. Ustiga ikki marta bosing (koʻrinishda yoki {{ui:Obyektlar daraxti}}da), yoki uni tanlab {{ui:Obyekt maʼlumoti}} ichidagi {{ui:Tahrirlash}} tugmasini bosing.

   Modelning qolgan qismi xiraylashadi, oʻqlar guruhning oʻz oʻqlariga koʻchadi va {{ui:Obyektlar daraxti}} "Tahrirlanmoqda: Model › Group#1" deb yozadi. Holat satrida: "Group#1 tahrirlanmoqda. Esc yoki tashqariga ikki marta bosish uni yopadi." deb chiqadi.

2. Odatdagidek chizing, itarish/tortish, koʻchirish va oʻchiring. Hammasi guruh ichida qoladi.
3. Yopish uchun {{key:Esc}} tugmasini bosing (agar nimadir tanlangan boʻlsa, ikki marta), boʻsh joyga ikki marta bosing yoki {{ui:Obyektlar daraxti}}dagi {{ui:Guruhni yopish}} tugmasini bosing.

Komponent ochiq boʻlganda, uning har bir nusxasi siz ishlayotganingizda oʻzgaradi.

## Komponentning yana nusxalarini joylashtirish

- Uni {{ui:Koʻchirish}} va {{key:Ctrl}} yordamida nusxalang (qarang: [Koʻchirish va nusxalash](topic:move-copy)). Har bir nusxa xuddi shu komponentning yangi joylashuvi boʻladi.
- Yoki {{ui:Komponentlar}} panelidagi nomi yonidagi {{ui:Joylashtirish}} tugmasini bosing, soʻng joyini bosing. Uning koordinatalar nuqtasi — yaratish vaqtida tanlangan narsa atrofidagi qutining eng past burchagi — siz bosgan joyga tushadi. Keyin asbob {{ui:Tanlash}} ga qaytadi.

{{ui:Komponentlar}} nechta nusxa joylashtirilganini koʻrsatadi ("4×"), {{ui:Obyektlar daraxti}} esa nom oxirida sonini koʻrsatadi.

## Obyektlar daraxtida tartiblash

{{ui:Obyektlar daraxti}}dagi qatorni sudrab, u qayerga tegishli ekanini oʻzgartiring. Koʻrinishda hech narsa siljimaydi: guruh modeldagi oʻz oʻrnini saqlab qoladi.

- **Guruh ichiga:** qatorni guruh qatorining oʻrtasiga tashlang (qator punktir kontur bilan ajraladi). Obyekt guruh ichiga, oxiriga qoʻshiladi.
- **Boshqa tartibda:** qatorning yuqori yoki pastki chetiga tashlang (u yerda chiziq koʻrinadi). Obyekt oʻsha qatordan oldin yoki keyin, oʻsha qator bilan bir guruh ichiga tushadi — shu tariqa uni guruhga aniq joyda qoʻyish ham mumkin.
- **Eng yuqori darajaga:** {{ui:Obyektlar daraxti}} sarlavhasiga tashlang. Obyekt oxiriga tushadi.

Har bir tashlash bitta bosqich: {{key:Mod+Z}} uni qaytaradi. Sudrash paytida {{key:Esc}} hech narsani tashlamaydi. Guruh oʻz ichiga yoki oʻzi saqlayotgan guruhga joylashtirilmaydi. {{ui:Nomi boʻyicha topish}} ichida matn boʻlsa, sudrash oʻchiq boʻladi.

:::touch
Qatorda bir oz ushlab turing, soʻng sudrang. Tez surish esa roʻyxatni aylantiradi.
:::

## Bitta nusxani boshqacha qilish

Nusxani tanlang va {{ui:Obyekt maʼlumoti}} ichidagi {{ui:Yagona qilish}} tugmasini bosing (u faqat komponent bir necha marta joylashtirilgan boʻlsa koʻrinadi). Bu nusxa oʻz taʼrifini oladi: asliga oʻxshash nom, lekin yangi raqam bilan. Uni boshqalarga tegmasdan tahrirlang.

## Guruhni komponentga aylantirish

Guruhni tanlang va {{ui:Obyekt maʼlumoti}} ichidagi {{ui:Komponent yaratish}} tugmasini bosing. Unga yangi nom beriladi, masalan Component#2, hatto guruhga nom bergan boʻlsangiz ham; nomni {{ui:Nom}} maydoniga qayta yozing.

## Parchalash

Guruh yoki komponentni tanlang va {{ui:Parchalash}} tugmasini bosing (asboblar panelida yoki {{ui:Obyekt maʼlumoti}} ichida). Uning mazmuni oʻsha joyda erkin geometriyaga aylanadi va tegib turgan narsalariga yopishadi. Ichidagi guruhlar guruh boʻlib qoladi.

## Yaxlit jism va hajm

Guruh yoki komponentni tanlaganda, agar uning yuzalari boʻshliqsiz yopiq boʻlsa (har bir qirra aynan ikkita yuza bilan umumiy boʻlsa) va ichida guruhlar boʻlmasa, {{ui:Obyekt maʼlumoti}} **Yaxlit: Ha** deb koʻrsatadi. Shunda u hajmini ham koʻrsatadi. Quti, tuynuk kesilgan devor va choʻzilgan silindr yaxlit jismlardir; tepasi oʻchirilgan quti esa emas.

## Oxirgi nusxa oʻchsa

Komponentning oxirgi nusxasini oʻchirsangiz, u {{ui:Komponentlar}} panelidan ham chiqadi. {{key:Mod+Z}} uni qaytaradi.

## Bilib olish kerak

- **Guruh** nusxalari {{ui:Koʻchirish}} bilan yaratilganda, bu versiyada komponent nusxalari kabi mazmunni birga ulashadi: bittasini tahrirlasangiz, boshqalari oʻzgaradi. Mustaqil qilish uchun {{ui:Komponent yaratish}} va keyin {{ui:Yagona qilish}} tugmasini bosing. Qarang: [Muammolarni bartaraf etish](topic:troubleshooting#editing-one-group-changed-another).
- Komponentlar devorlarda teshik ochmaydi va yuzalarga yopishmaydi; tayyor komponentlar kutubxonasi yoʻq. Oʻzingiz yarating yoki import qiling.
- Import qilingan fayllar guruh sifatida keladi. Collada fayllari oʻz guruhlari va komponentlarini ichida saqlaydi.
