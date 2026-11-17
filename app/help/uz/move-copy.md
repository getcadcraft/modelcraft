---
title: Koʻchirish, nusxalash va qatorlar yasash
summary: Narsalarni bosib yoki aniq masofa boʻyicha koʻchiring, modifikator tugmasi bilan nusxalang va teng oraliqli nusxalardan qator yarating.
keywords: koʻchirish, nusxalash, dublikat, massiv, qator, oraliq, boʻlish, siljitish, choʻzish, ustunlar, takrorlash, koʻp nusxalash
from: 280245fc
---

{{ui:Koʻchirish}} ({{key:M}}) tanlangan narsani bir nuqtadan boshqasiga koʻchiradi. Modifikator tugmasini ushlab turish uni nusxaga aylantiradi, nusxalashdan keyin esa yana nechta kerakligini kiritishingiz mumkin.

## Narsani koʻchirish

1. Koʻchiriladigan narsani tanlang (qarang: [Narsalarni tanlash](topic:select)). Hech narsa tanlanmagan boʻlsa, {{ui:Koʻchirish}} bosgan narsani oladi.
2. {{key:M}} tugmasini bosing.
3. Qaysi nuqtadan koʻchirilishini bosing. Masalan, burchakni tanlang: bu nuqta keyingi bosgan joyingizga aniq tushadi.
4. Koʻrsatkichni harakatlantiring. Tanlov u bilan birga harakatlanadi. Chiziq kabi u nuqtalarga, qirralarga va qizil, yashil, koʻk yoʻnalishlarga tutiladi.
5. Nuqta tushadigan joyni bosing yoki masofani kiriting va {{key:Enter}} tugmasini bosing.

   Holat panelidagi maslahat keyingi koʻchirish uchun "Koʻchirish uchun nuqtani bosing…" matniga qaytadi.

Kiritilgan masofa koʻrsatkich yoʻnalishida boʻladi. Aniq siljishni ham kiritishingiz mumkin, masalan `<2m,0,0>` (qizil yoʻnalishda 2 m), yoki tanlagan nuqta uchun aniq manzil, masalan `[0,0,0]` (koordinata boshi). Qarang: [Aniq oʻlchamlarni kiritish](topic:value-box).

Faqat bitta oʻq boʻylab koʻchirish uchun birinchi bosishdan keyin oʻq tugmasini bosing: {{key:Right}} qizil yoʻnalishga, {{key:Left}} yashil yoʻnalishga, {{key:Up}} koʻk yoʻnalishga qulflaydi. Qulfni bekor qilish uchun xuddi shu oʻq tugmasini yana bosing.

## Shaklning bir qismini koʻchirish uni choʻzadi

Guruhlanmagan geometriya bogʻlangan boʻladi. Agar bitta yuzni yoki bir nechta qirrani tanlab koʻchirsangiz, ularga ulangan yuzlar ham ular bilan birga choʻziladi. Quti tepa yuzini yon tomonga surgansangiz, quti egiladi; tom qirrasini surgansangiz, tomning qiyaligi oʻzgaradi. Endi tekis tura olmaydigan yuzlar uchburchaklarga buklanadi.

Butun obyektni choʻzmasdan koʻchirish uchun avval uni toʻliq tanlang (uch marta bosing), yoki yanada yaxshisi, uni guruh yoki komponentga aylantiring (qarang: [Guruhlar va komponentlar](topic:groups-components)).

## Nusxa olish

1. Nusxalanadigan narsani tanlang.
2. {{key:M}} tugmasini bosing.
3. {{key:Ctrl}} (yoki {{key:Alt}}) tugmasini ushlab turing va koʻchirish uchun nuqtani bosing. Mac kompyuterda {{key:Mod}} yoki {{key:Alt}} xuddi shunday ishlaydi. Maslahatda "Ctrl koʻchirish oʻrniga" yozilgan boʻladi, bu nusxalayotganingizni bildiradi.

   Birinchi bosishdan keyin {{key:Ctrl}} yoki {{key:Alt}} tugmasini bosib qoʻyib, koʻchirish va nusxalash oʻrtasida almashishingiz ham mumkin.

4. Nusxa tushadigan joyni bosing yoki masofani kiriting va {{key:Enter}} tugmasini bosing.

   Asl narsa oʻz joyida qoladi, nusxa esa tanlangan boʻladi.

## Nusxalash, kesish, qoʻyish va dublikat

- {{key:Mod+C}} tanlovni nusxalaydi, {{key:Mod+X}} uni kesadi (nusxalaydi, soʻng oʻchiradi), {{ui:Nusxalash}} va {{ui:Qoʻyish}} asboblar panelining {{ui:Tahrirlash}} guruhidagi tugmalardir, ularning yonidagi {{ui:Yana}} tugmasida esa kesish, joyida qoʻyish va dublikat yaratish bor.
- {{key:Mod+V}} qoʻyadi: nusxaning konturi koʻrsatkich bilan birga harakatlanadi, boshqa asboblar kabi tutiladi va bosilganda uning eng quyi burchagi oʻsha joyga tushadi. {{key:Esc}} bekor qiladi.
- {{key:Mod+Shift+V}} nusxa olingan joyning oʻzida, aynan oʻsha yerga qoʻyadi — ochiq guruhga biror narsani koʻchirish uchun qulay.
- {{key:Mod+D}} ({{key:Shift+D}} Modeler uslubida) dublikat yaratadi: nusxa darhol hosil boʻladi va koʻrsatkich bilan birga harakatlanadi; uni qoʻyish uchun bosing, masofa kiriting yoki tashlab yuborish uchun {{key:Esc}} bosing. Undan keyin darhol, qatorda yana nusxalar uchun `3x` kiriting.

Qoʻyilgan guruh yangi guruhga aylanadi. Qoʻyilgan komponent xuddi shu komponentning boshqa joylashuvi boʻladi, shuning uchun bittasini tahrirlasangiz, hammasi oʻzgaradi. Nusxalar brauzerdagi boshqa ModelCraft yorligʻiga ham qoʻyiladi (u yerda yangi taʼriflar sifatida kiradi).

## Nusxalar qatori

Nusxadan keyin, {{ui:Koʻchirish}} hali faol asbob boʻlganda:

- `3x` (yoki `*3`) kiriting va {{key:Enter}} bosing — birinchi nusxa bilan bir xil oraliqda uchta nusxali qator olasiz. Asl nusxadan tashqari uchta yangi nusxa boʻladi.
- `/3` kiriting va {{key:Enter}} bosing — masofani boʻlish uchun: asl nusxadan birinchi nusxa qoʻyilgan joygacha uchta nusxa teng taqsimlanadi, oxirgisi oʻsha joyda boʻladi. Oraliqni toʻldirish uchun bitta nusxani uzoq uchiga qoʻying, soʻng boʻling.

Darhol boshqa son ham kiritishingiz mumkin: `5x` `3x` qatorini almashtiradi. Maslahat eslatadi: "Nusxalandi. Qatorda yana nusxalar uchun 3x, yoki masofani boʻlish uchun /3 kiriting."

### Misol: har 6 metrda ustunlar

1. Ustun yarating va uni komponentga aylantiring ({{key:G}}), shunda keyinchalik barcha nusxalar birga oʻzgaradi.
2. {{key:M}} tugmasini bosing, {{key:Ctrl}} ni ushlab turing va ustunning taglik burchagini bosing.
3. Qizil oʻq boʻylab harakatlaning va `6m` kiriting, soʻng {{key:Enter}}.
4. `4x` kiriting va {{key:Enter}} bosing. Sizda 6 m oraliqli beshta ustun boʻladi.

## Bilish kerak boʻlgan narsalar

- Ikkinchi bosishdan oldin bekor qilish uchun {{key:Esc}} bosing; hamma narsa oldingi joyiga qaytadi.
- Koʻchirish tahrir qilayotgan guruh ichida ishlaydi. Butun guruhni koʻchirish uchun avval uni yoping va tashqaridan tanlang.
- {{ui:Toʻqnashuv}} yoqilgan boʻlsa (pastki oʻng burchakda va [ModelCraft sozlamalarida](topic:settings#solids-stop-where-they-touch)), koʻchirish tanlovning boshqa jismga tegadigan joyida toʻxtaydi va uni kesib oʻtmaydi. Oʻtib ketishi kerak boʻlgan koʻchirish uchun {{ui:Toʻqnashuv}} tugmasini bosib uni oʻchiring.
- Nusxani boshqa guruh ichiga qoʻyish uchun: uni nusxalang, boshqa guruhni oching va qoʻying ({{key:Mod+Shift+V}} uni oʻz joyida saqlaydi).
