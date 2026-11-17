---
title: Asboblar roʻyxati
summary: Har bir ModelCraft asbobi, uning klavishasi, har bir bosish nima qilishi va asbob ishlayotganda qiymat maydoniga nima yozish mumkinligi.
keywords: asboblar, asboblar paneli, buyruqlar, roʻyxat, chiziq, toʻrtburchak, aylana, koʻpburchak, siljitish, yoy, egri chiziq, spline, ortidan harakatlanish, sweep, 2 nuqtali yoy, markazdan yoy, tanlash, itarish tortish, koʻchirish, aylantirish, masshtab, oʻchirgich, oʻlchov lentasi, oʻlcham, orbita, surish, kattalashtirish, komponent joylashtirish
from: e08a274f
---

Holat satri asbob keyingi nima kutayotganini doim koʻrsatadi. {{key:Esc}} asbob hozir bajarayotgan ishni bekor qiladi.

## Chizish asboblari

| Asbob | Klavisha | Bosishlar | Qiymat maydoniga yozing |
|---|---|---|---|
| {{ui:Chiziq}} | {{key:L}} | Boshlanish, soʻng har bir keyingi nuqta. Yuza yopilganda yoki {{key:Esc}} da toʻxtaydi | Koʻrsatkich tomon uzunlik; `[x,y,z]` nuqta; `<dx,dy,dz>` siljish ({{ui:Uzunlik}}) |
| {{ui:Toʻrtburchak}} | {{key:R}} | Birinchi burchak (yer yoki yuza), qarama-qarshi burchak | Kenglik va chuqurlik: `4m,3m` ({{ui:Oʻlchamlar}}) |
| {{ui:Aylana}} | {{key:C}} | Markaz (yer yoki yuza), chetidagi nuqta | Birinchi bosishdan oldin: tomonlar, `24s` yoki `24` ({{ui:Tomonlar}}). Keyin: radius ({{ui:Radius}}) |
| {{ui:Koʻpburchak}} | {{key:N}} | Markaz, burchak | Aylana bilan bir xil; 6 tomondan boshlanadi |
| {{ui:Yoy}} | {{key:A}} | Boshlanish, oxiri, soʻng qavariqlik | Boshlanishdan keyin vatarning uzunligi ({{ui:Uzunlik}}); oxiridan keyin qavariqlik ({{ui:Qavariqlik}}); segmentlar uchun `12s` |
| {{ui:Transportir}} | — | Markaz, 0° nuqta, soʻng burchak | Gradusdagi burchak ({{ui:Burchak}}) |
| {{ui:Ortidan harakatlanish}} | — | Yoʻlni tanlang, soʻng yuzani bosing (yoki yuzani bosing, soʻng yoʻlning qirrasini) | — |
| {{ui:Boʻyash}} | {{key:B}} | Yuza, guruh yoki komponent | — ({{key:Ctrl}} bogʻlangan, {{key:Shift}} shu rangning hammasi, {{key:Alt}} rangni olish) |
| {{ui:Siljitish}} | {{key:F}} | Yuza (yoki avval yuza yoki qirralarni tanlang), soʻng tomon va masofa | Masofa ({{ui:Masofa}}); yuza ichiga qarab — ichkariga |
| {{ui:Egri chiziq}} | — | Egri chiziq oʻtadigan nuqtalar; {{key:Enter}} yoki ikki marta bosish tugatadi | Koʻrsatkich boʻylab uzunlik; keyingi nuqta uchun `[x,y,z]` yoki `<dx,dy,dz>` |
| {{ui:Yoy markazi}} | — | Markaz, boshlanish, soʻng oxiri | Markazdan keyin radius; boshlanishdan keyin gradusdagi burchak; segmentlar uchun `12s` |

## Tahrirlash asboblari

| Asbob | Klavisha | Bosishlar | Qiymat maydoniga yozing |
|---|---|---|---|
| {{ui:Tanlash}} | {{key:Space}} | Bosish, ikki marta bosish, uch marta bosish, quti sudrash. Qarang: [Obyektlarni tanlash](topic:select) | Bitta oʻlcham yoki qirra tanlanganda: yangi uzunlik, u modelni oʻlchamini oʻzgartiradi |
| {{ui:Itarish/tortish}} | {{key:P}} | Yuza, soʻng masofa. Oxirgi masofani takrorlash uchun yuzani ikki marta bosing | Masofa; manfiy boshqa tomonga ({{ui:Masofa}}) |
| {{ui:Koʻchirish}} | {{key:M}} | Nuqtadan nuqtaga. Nusxalash uchun {{key:Ctrl}} yoki {{key:Alt}} ni ushlab turing | Koʻrsatkich tomon masofa, `<dx,dy,dz>` yoki `[x,y,z]` ({{ui:Masofa}}). Nusxalashdan keyin: `3x` yoki `/3` |
| {{ui:Aylantirish}} | {{key:Q}} | Markaz (yuzada uning tekisligida burish uchun), boshlanish yoʻnalishi, oxirgi yoʻnalish | Gradusdagi burchak ({{ui:Burchak}}) |
| {{ui:Masshtab}} | {{key:S}} | Saqlanib qoladigan nuqta, asosiy nuqta, yangi oʻlcham | Koeffitsiyent: `2`, `0.5` ({{ui:Masshtab}}) |
| {{ui:Oʻchirgich}} | {{key:E}} | Qirralar, guruhlar, yoʻriqchilar va oʻlchamlar ustida bosish yoki sudrash | hech narsa |
| {{ui:Oʻlchov lentasi}} | {{key:T}} | Qirradan: parallel yoʻriqchi chiziq. Nuqtadan: oʻlchaydi va yoʻriqchi nuqta qoldiradi | Siljish ({{ui:Siljitish}}) yoki masofa ({{ui:Uzunlik}}) |
| {{ui:Oʻlcham}} | {{key:D}} | Ikki burchak (yoki bitta qirra), soʻng oʻlcham chizigʻi qayerga borishi. Qarang: [Oʻlcham va oʻlchamni oʻzgartirish](topic:dimensions) | Siljish ({{ui:Siljitish}}). Undan darhol keyin: yangi uzunlik, u modelni oʻlchamini oʻzgartiradi |

{{ui:Koʻchirish}}, {{ui:Aylantirish}} va {{ui:Masshtab}} tanlovda ishlaydi. Hech narsa tanlanmagan boʻlsa, ular avval bosgan narsangizni oladi (yuza uning qirralarini ham olib keladi).

## Kamera asboblari

| Asbob | Klavisha | Sudrash natijasi |
|---|---|---|
| {{ui:Orbita}} | {{key:O}} | Koʻrsatkich ostidagi model qismi atrofida aylantiradi ({{key:Shift}} suradi) |
| {{ui:Surish}} | {{key:H}} | Koʻrinishni siljitadi |
| {{ui:Kattalashtirish}} | {{key:Z}} | Kattalashtiradi: yuqoriga — yaqinlashtiradi, pastga — uzoqlashtiradi |
| {{ui:Chegaralar}} | {{key:Shift+Z}} | (asbob emas, tugma) Butun modelni sigʻdiradi |

Sichqoncha bilan bu asboblarga kamdan-kam ehtiyoj boʻladi: oʻrta tugmani sudrash aylantiradi, oʻng tugmani sudrash suradi, gʻildirak esa har qanday asbob bilan kattalashtiradi. Qarang: [Orbita, surish va kattalashtirish](topic:orbit-pan-zoom).

## Tartiblash

| Tugma | Klavisha | Bajaradi |
|---|---|---|
| {{ui:Komponent}} | {{key:G}} | Tanlovni komponentga aylantiradi |
| {{ui:Guruh}} | {{key:Shift+G}} | Tanlovni guruhga aylantiradi |
| {{ui:Parchalash}} | yoʻq | Tanlangan guruh va komponentlarni yana erkin geometriyaga aylantiradi |

## Komponentni joylashtirish

Asboblar panelida emas: {{ui:Komponentlar}} panelidagi komponent yonidagi {{ui:Joylashtirish}} ni bosing. Komponentning kelib chiqish nuqtasi qayerda boʻlishini bir marta bosing; soʻng asbob {{ui:Tanlash}} ga qaytadi.
