---
title: Meshni Mesh ish maydonida tahrirlash
summary: Mesh uchlari, qirralari va yuzlarini tanlang, ularni koʻchiring, shuningdek ekstrudlash, ichkariga kiritish, faska, kesish, birlashtirish, toʻldirish va koʻprik qurish; ikkala tugma uslubidan birida.
keywords: mesh, tahrirlash rejimi, mesh ish maydoni, uch, uchlar, qirra, qirralar, yuz, yuzlar, ekstrudlash, ichkariga kiritish, faska, halqali kesim, pichoq, ikkiga boʻlish, oʻralash, birlashtirish, eritish, toʻldirish, setka bilan toʻldirish, koʻprik, boʻlish, siljitish, proporsional tahrirlash, pasayish, ish maydoni
from: 92a372dd
---

**Mesh** ish maydoni [mesh](topic:meshes) ni nuqta-nuqta tahrirlaydi: uning uchlari, qirralari va yuzlari. Push/pull geometriyasi **Model** ish maydonida qoladi.

## Ochish

- Asboblar panelining chap tomonidagi {{ui:Ish maydoni}} roʻyxatidan {{ui:Mesh}} ni tanlang. Tanlangan mesh tahrirlash uchun ochiladi; tanlangan guruh yoki komponent avval meshga aylantiriladi (bitta bekor qilish bosqichi).
- Yoki meshni ikki marta bosing, yoki modellovchi tugmalari bilan uni tanlab, {{key:Tab}} ni bosing.
- Hech narsa tanlanmaganda panel qoʻshish uchun meshlarni taklif qiladi: tekislik, setka, kub, aylana, silindr, konus, sfera, ikosfera va tor. Yangisi koʻrinish qaragan joyga qoʻyiladi va tahrirlash uchun ochiladi.

{{ui:Modelga qaytish}} (yoki roʻyxat, modellovchi tugmalari bilan {{key:Tab}}, itarish/tortish tugmalari bilan hech narsa tanlanmagan holda {{key:Esc}}) meshi tanlangan holda Modelga qaytaradi. Mesh ish maydoni ochiq boʻlganda, modelning qolgan qismi xiralashadi va Modelning chizish asboblari yigʻishtirib qoʻyiladi.

## Tanlash

| Amal | Nima |
|---|---|
| {{key:1}} {{key:2}} {{key:3}} | Uchlarni, qirralarni yoki yuzlarni tanlash |
| Bosish | Bittasini tanlash; {{key:Shift}}+bosish qoʻshadi yoki olib tashlaydi |
| Quti suring | Ichidagi va koʻrinib turgan narsalarni tanlash; {{key:Shift}} qoʻshadi, {{key:Ctrl}} olib tashlaydi |
| {{key:Alt}}+qirrani bosing yoki uni ikki marta bosing | Uning qirra halqasi (yuz rejimida yuz halqasi; ochiq qirrada butun chegara) |
| {{key:Ctrl}}+{{key:Alt}}+qirrani bosing | Uning qirra kamari |
| Uch marta bosish | Unga biriktirilgan hamma narsa |

{{ui:Tanlash}} guruhida yana {{ui:Hammasi}}, {{ui:Bogʻliq}}, {{ui:Halqa}}, {{ui:Kamar}}, {{ui:Yana}} va {{ui:Kamroq}} bor.

## Koʻchirish, aylantirish, masshtab

{{ui:Koʻchirish}}, {{ui:Aylantirish}} va {{ui:Masshtab}} koʻrsatkichdan boshlanadi: uni harakatlantiring, soʻng tanlovni qoʻyish uchun bosing yoki {{key:Enter}} ni bosing, bekor qilish uchun {{key:Esc}}. {{key:X}}, {{key:Y}} yoki {{key:Z}} (yoki strelka tugmalari) oʻqni qulflaydi. Aniq qiymat uchun masofa, burchak yoki koeffitsiyent kiriting — [hisob-kitoblar](topic:value-box#calculations) ham ishlaydi.

**Proporsional tahrirlash** ({{ui:Proporsional}} yoki panel): tanlovga yaqin uchlar koʻchirishga ergashadi, qanchalik uzoq boʻlsa shunchalik kam, siz belgilagan masofagacha, tanlagan pasayish bilan. Toʻgʻri chiziq boʻylab emas, qirralar boʻylab oʻlchash uchun {{ui:Faqat mesh boʻylab}} ni yoqing.

{{ui:Siljitish}} tanlangan qirra halqasini uning yonidagi qirralar boʻylab siljitadi.

## Shaklni oʻzgartirish

| Asbob | Nima qiladi |
|---|---|
| {{ui:Ekstrudlash}} | Tanlangan yuzlarni ularning normali boʻylab tortib chiqaradi, yangi yon yuzlar bilan (yoki ochiq chegara qirralaridan yuz yasaydi). Masofani kiriting |
| {{ui:Ichkariga kiritish}} | Tanlangan yuzlar konturi ichidagi kamar; har bir yuz alohida uchun {{key:I}} ni yana bosing |
| {{ui:Faska}} | Tanlangan qirralarni (yoki {{key:Ctrl}}+{{key:Shift}}+{{key:B}} bilan uchlarni) kengligida kesadi; gʻildirak yoki plyus va minus tugmalari yumaloq qirra uchun segmentlar qoʻshadi |
| {{ui:Halqali kesim}} | Qirraga koʻrsating: toʻrt tomonli yuzlar kamari boʻylab yangi halqalar; gʻildirak nechtasini belgilaydi; kesish uchun bosing |
| {{ui:Pichoq}} | Qirralar yoki burchaklarda nuqtalarni bosing; {{key:Enter}} ularning orasidagi yuzlarni koʻrganingizdek toʻgʻri kesadi |
| {{ui:Ikkiga boʻlish}} | Ekranda chiziq torting: tanlangan yuzlar (yoki hammasi) shu chiziq boʻylab kesiladi |
| {{ui:Oʻralash}} | Tanlangan yuzlarni yoki ochiq qirralarni koʻk oʻq atrofida qadamlar bilan buradi (gʻildirak ularni belgilaydi); toʻliq aylanish yopiladi |
| {{ui:Boʻlish}} | Tanlangan qirralarni ikkiga kesadi; butun yuzlar setkaga aylanadi |
| {{ui:Birlashtirish}} | Tanlangan uchlar markazida bitta boʻladi |
| {{ui:Eritish}} | Tanlovni olib tashlaydi, lekin sirtni saqlaydi: yuzlar birlashadi |
| {{ui:Toʻldirish}} | Tanlangan ochiq chegara boʻylab yuz (yoki ikki ochiq qirra orasida) |
| {{ui:Setka bilan toʻldirish}} | Juft sonli qirrali ochiq chegarani toʻrtburchakli setka bilan toʻldiradi |
| {{ui:Koʻprik}} | Tanlangan ikkita ochiq qirra halqasini yuzlar bilan bogʻlaydi |
| {{ui:Burma}} | Silliqlash orqali Subdivision sirti bilan silliqlanganda tanlangan qirralar qanchalik oʻtkir qolishi: markazdan uzoqlashtiring, gʻildiraktan foydalaning (0.1 qadam bilan) yoki 0 dan 1 gacha kiriting. Panel tanlangan qirralarning burmasini koʻrsatadi va kiritilgan qiymatni ham qabul qiladi. Burmali qirralar magenta rangda chiziladi |
| {{ui:Agʻdarish}}, {{ui:Silliqlash}}, {{ui:Oʻchirish}} | Yuzlarni agʻdaradi; uchlarni qoʻshnilari tomon silliqlaydi; tanlash rejimi boʻyicha oʻchiradi |

Har biri bitta bekor qilish bosqichi. Tekstura koordinatalari, ranglar va ogʻirliklar yangi yuzlar va uchlarga oʻtadi.

## Qayta mesh

{{ui:Qayta mesh}} butun meshni bir xil oʻlchamdagi teng uchburchaklar bilan qayta yasaydi; bosganingizda soʻraladi (kichikroq — nozikroq va sekinroq). U teshiklarni yopadi, bir-biriga kirgan boʻlaklarni birlashtiradi va sculpting choʻzgan meshni tekislaydi. Oʻtkir qirralar juda sal yumaloqlanib chiqadi. UV, boʻyoq va burmalar qaytadan boshlanadi. Bitta bekor qilish bosqichi.

## Retopologiya

Batafsil meshning (sculpt, skan) ustida yangi, toza mesh qurish uchun panelda {{ui:Retopologiya}} › **Asosida qurish** ostida batafsil meshni tanlang, soʻng:

- **Koʻchirilgan nuqtalarni unga tutib olish:** siz koʻchirgan nuqtalar va ekstrudlagan qirralar uning sirtiga tushadi.
- **Tanlangan nuqtalarni unga qoʻyish** tanlangan nuqtalarni hozir uning ustiga koʻchiradi (bitta bekor qilish bosqichi).
- **Bu meshning qirralarini oldinda koʻrsatish** siz qurayotgan meshni sirt ustida chizadi, shunda uni koʻrasiz.

## Oxirgi amalni sozlash

{{ui:Ichkariga kiritish}}, {{ui:Faska}}, {{ui:Halqali kesim}}, {{ui:Boʻlish}}, {{ui:Silliqlash}}, {{ui:Setka bilan toʻldirish}} yoki {{ui:Oʻralash}} dan keyin panelda uning sozlamalari (kengligi, segmentlar, profil, kesimlar …) koʻrinadi. Birini oʻzgartiring, amal boshlangan joyidan qaytadan bajariladi, yana bitta bekor qilish bosqichi boʻlib.

## Tugmalar

| | Itarish/tortish tugmalari | Modellovchi tugmalari |
|---|---|---|
| Koʻchirish, aylantirish, masshtab | {{key:M}} {{key:Q}} {{key:S}} | {{key:G}} {{key:R}} {{key:S}} ({{key:G}} ikki marta siljitadi) |
| Ekstrudlash, ichkariga kiritish | {{key:P}}, {{key:F}} | {{key:E}}, {{key:I}} |
| Oʻchirish | {{key:E}} yoki {{key:Delete}} | {{key:X}} yoki {{key:Delete}} |
| Burma | {{key:Shift+C}} | {{key:Shift+E}} |
| Hammasini, hechqaysini, teskarisini tanlash | {{key:Ctrl+A}}, {{key:Esc}}, {{key:Ctrl+I}} | {{key:A}}, {{key:Alt+A}}, {{key:Ctrl+I}} |
| Ikkalasi | {{key:Ctrl+B}} faska, {{key:Ctrl+R}} halqali kesim, {{key:K}} pichoq | xuddi shu, va {{key:F}} toʻldirish, {{key:M}} birlashtirish, {{key:Ctrl+X}} eritish, {{key:L}} / {{key:Ctrl+L}} bogʻliq, {{key:Alt+N}} agʻdarish, {{key:O}} proporsional, {{key:Shift+V}} uchni siljitish |

Shuningdek qarang: [Meshlar](topic:meshes), [Mesh boʻyicha modifikatorlar](topic:modifiers) va [Hali qurilmagan](topic:not-built-yet).
