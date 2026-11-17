---
title: Qiymat qutisiga aniq oʻlchamlarni kiritish
summary: Uzunliklar, oʻlchamlar, nuqtalar, siljishlar, burchaklar, tomonlar va nusxalarni kiritishning barcha usullari, hamda birliklar va oddiy sonlar qanday oʻqilishi.
keywords: qiymat qutisi, oʻlchovlar qutisi, vcb, kiritish, aniq, oʻlcham, uzunlik, birliklar, futlar, dyuymlar, metrik, millimetrlar, koordinatalar, siljish, massiv, tomonlar, burchak, oʻnli vergul
from: 0148dc3d
---

Qiymat qutisi pastdagi holat panelida joylashgan; uning yorligʻi asbobga qarab oʻzgaradi. Ishlayotganingizda u jonli oʻlchamni koʻrsatadi; istalgan vaqtda aniq oʻlcham kiritishingiz mumkin.

## Qanday kiritiladi

1. Amalni bosish bilan boshlang (birinchi burchak, yuz, koʻchirish boshlanadigan nuqta).
2. Kiriting. Qiymat qutisini bosish shart emas: raqam yoki `. , - ' " [ < * /` belgilaridan biri yozilganda terish oʻsha yerga yuboriladi.
3. {{key:Enter}} ni bosing.

Qiymat qutisida {{key:Esc}} ni bosing — u tozalanadi va koʻrinishga qaytasiz. Sensorli ekranda klaviaturani chiqarish uchun qiymat qutisiga teging.

ModelCraft kiritganingizni oʻqiy olmasa, holat paneli shunday deydi: "Uzunlikni kiriting, masalan 3m, 10'6" yoki 4m,3m." Vosita uni ishlata olmasa, u sababi bilan birga "Bu ishlamadi: …" deydi.

## Uzunliklar

| Turi | Bildiradi |
|---|---|
| `3m` `320cm` `3200mm` | Metr, santimetr, millimetr |
| `10'` `10ft` `10 feet` | Futlar |
| `6"` `6in` `6 inches` | Dyuymlar |
| `10'6"` `10' 6"` `10'-6 1/2"` | Futlar va dyuymlar, kasr bilan |
| `6 1/2"` `6-1/2"` `3/4"` | Kasr bilan dyuymlar |
| `1.5ft` `.5m` | Birlik bilan oʻnli kasrlar |
| `120` | Oddiy son, modelning birligida |

**Oddiy son modelning birligidan foydalanadi**, pastki oʻng burchakdagi tanlagichda koʻrsatilganidek: futlar va dyuymli modelda dyuymlar (shuning uchun `120` 10 futga teng), millimetrli modelda millimetrlar va hokazo. Birlik yozilsa, u modelning birligidan qat'i nazar doim ustun keladi. Ikki tomonlama tirnoq va prime belgilari (’ ” ′ ″) ham futlar va dyuymlar sifatida oʻqiladi.

:::warning
Oʻnli kasrlar uchun doim **nuqta** ishlating: `2.5m`. Vergul ikki qiymatni ajratadi, shuning uchun `2,5` 2 va 5 (ikki qiymat) degani, til sozlamalaringizdan qat'i nazar.
:::

## Hisob-kitoblar

Har qanday uzunlik hisob-kitob boʻlishi mumkin: qoʻshish uchun `+`, ayirish uchun `-`, koʻpaytirish uchun `*`, boʻlish uchun `/` va qavslardan foydalaning. Kalkulyator kerak emas.

| Turi | Bildiradi |
|---|---|
| `2.5/3` | 2.5 ning uchdan biri (modelning birligida) |
| `12'6"+3/4"` | 12' 6 3/4" |
| `(24'-0")/3` | 8' |
| `2*450mm` | 900 mm |
| `4+7/16` | 4 7/16" futlar va dyuymli modelda |
| `3m-25cm` | 2.75 m |

Oddiy son uzunlik boʻlsa, u modelning birligida (metrli modelda `2.5/3` 0.833 m); koʻpaytirish yoki boʻlishda esa bitta uzunlikning koeffitsiyenti boʻlsa, oddiy koeffitsiyent (`2*450mm`). Burchaklar va koeffitsiyentlar ham hisob-kitob qabul qiladi: `90/2` 45° dir. Ikki uzunlikning koʻpaytmasi uzunlik emas, maydon hosil qiladi, shuning uchun `2m*3m` rad etiladi.

ModelCraft hisoblay olmasa, holat paneli nima xato va qayerdaligini aytadi, masalan "Nolga boʻlish (belgi 4)." Qavs ham qiymat qutisini ishga tushiradi, shuning uchun `(` bilan boshlashingiz mumkin.

Quyidagilar oʻz maʼnosini saqlaydi: nusxadan keyingi `/3`, `3x` va `*3`; tomonlar uchun `24s`; va qirra tanlanganda `/3` ([qirrani boʻladi](topic:divide)).

## Asboblar boʻyicha

| Asbob | Yorliq | Turi |
|---|---|---|
| {{ui:Chiziq}} | {{ui:Uzunlik}} | Uzunlik (koʻrsatkich tomonga), yoki nuqta yoki siljish (pastda) |
| {{ui:Toʻrtburchak}} | {{ui:Oʻlchamlar}} | Ikki uzunlik: `4m,3m`, `12',10'`. Nuqtali vergul ham ishlaydi: `4m;3m` |
| {{ui:Aylana}}, {{ui:Koʻpburchak}} | {{ui:Tomonlar}}, keyin {{ui:Radius}} | Birinchi bosishdan oldin tomonlar soni: `12s` yoki `12` (3 dan 999 gacha). Undan keyin radius |
| {{ui:Itarish/tortish}} | {{ui:Masofa}} | Uzunlik. Manfiysi teskari yoʻnalishda |
| {{ui:Koʻchirish}} | {{ui:Masofa}} | Uzunlik (koʻrsatkich tomonga), yoki nuqta yoki siljish. Nusxadan keyin: `3x`, `*3`, `/3` |
| {{ui:Aylantirish}} | {{ui:Burchak}} | Gradus: `90`, `-45`, `22.5` |
| {{ui:Masshtab}} | {{ui:Masshtab}} | 0 dan katta koeffitsiyent: `2`, `0.5`, `1.25` |
| {{ui:Oʻlchov lentasi}} | {{ui:Siljitish}} yoki {{ui:Uzunlik}} | Uzunlik |
| {{ui:Boʻlish}} | {{ui:Boʻlaklar}} | Nechta teng boʻlak: `5`, `5s` yoki `/5` (2 dan 1000 gacha). Qarang: [Qirra yoki egri chiziqni teng boʻlaklarga boʻlish](topic:divide) |
| {{ui:Oʻlcham}} | {{ui:Siljitish}}, keyin {{ui:Uzunlik}} | Oʻlcham chizigʻi qayerga borishi; joylashtirilgandan keyin yangi uzunlik modelni oʻlchamini oʻzgartiradi |
| {{ui:Tanlash}} | {{ui:Qiymat}} | Bitta oʻlcham yoki qirra tanlanganda yangi uzunlik modelni oʻlchamini oʻzgartiradi. Qarang: [Oʻlcham va oʻlchamni oʻzgartirish](topic:dimensions) |

## Nuqtalar va siljishlar

{{ui:Chiziq}} va {{ui:Koʻchirish}} uchun birinchi bosishdan keyin:

- `[x,y,z]` modeldagi aniq nuqtaga boradi (guruh ichida tahrirlayotganingizda guruhning oʻz oʻqlarida). Misol: `[0,0,3m]` koordinata boshidan toʻgʻri yuqoriga 3 m.
- `<dx,dy,dz>` birinchi nuqtadan qizil, yashil va koʻk boʻylab shuncha masofaga boradi. Misol: `<0,0,10'>` toʻgʻri yuqoriga 10 fut.

Uchta qiymatning har biri oʻz birligiga ega boʻlishi mumkin: `<12',0,6">`.

## Koʻchirishdan keyin nusxalar

{{ui:Koʻchirish}} bilan nusxadan darhol keyin:

| Turi | Hosil qiladi |
|---|---|
| `3x` yoki `*3` | Bir qatorda 3 nusxa, bir xil masofada |
| `/3` | Asldan birinchi nusxagacha teng taqsimlangan 3 nusxa |

500 tagacha nusxa. Qarang: [Koʻchirish, nusxalash va massivlar yaratish](topic:move-copy#a-row-of-copies).

## Uzunliklar yoʻnalish talab qiladi

Bitta kiritilgan uzunlik birinchi bosishdan koʻrsatkich qaragan yoʻnalishda ketadi. Agar bosgandan keyin, hech qanday harakatlanmasdan darhol kiritsangiz, yoʻnalish hali yoʻq va hech narsa boʻlmaydi. Koʻrsatkichni xohlagan tomoniga bir oz suring, soʻng kiriting.

## Modelning birligi

Pastki oʻng tanlagichda birlikni oʻzgartiring: {{ui:ft va in}}, in, ft, yd, mi, mil, µm, mm, cm, m yoki km. Ular {{ui:Sozlamalar}} › {{ui:Umumiy}} › {{ui:Birliklar}} da yoqilgan boʻlsa (modelning oʻz birligi doim boʻladi). Har qanday birlik belgisi bilan yozilgan uzunlik oʻsha birlikda oʻqiladi. Qarang: [Birliklar, kiritilgan qiymatlar va birliklar roʻyxatlari](common:unit-lists). Bu uzunliklar qanday koʻrsatilishini va oddiy sonlar qanday oʻqilishini oʻzgartiradi; model oʻlchami esa bir xil qoladi. Birlik fayl ichida saqlanadi.

Oʻlchamlar qanday koʻrsatilishi:

| Birlik | Uzunliklar | Maydonlar | Hajmlar |
|---|---|---|---|
| ft va in | `10' 6 1/2"` (1/16" gacha) | sq ft | cu ft |
| in | `126 1/2"` | sq in | cu in |
| m | `3.2 m` | m² | m³ |
| cm | `320 cm` | cm² | cm³ |
| mm | `3200 mm` | m² 0.01 m² dan, aks holda mm² | m³ 0.01 m³ dan, aks holda mm³ |

Yangi model brauzer tili AQSh mintaqasiga (shuningdek Liberiya va Myanma) sozlangan boʻlsa futlar va dyuymlarda, boshqa hamma joyda esa millimetrlarda boshlanadi. {{ui:Sozlamalar}} › {{ui:Umumiy}} › {{ui:Birliklar}} da yulduzcha qoʻyilgan birlik oʻrniga ishlatiladi, agar ModelCraft uni bilsa. Yoki {{ui:Yangi}} dan keyin tanlagichni oʻzgartiring.
