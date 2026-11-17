---
title: Chizilgan narsaga oʻlcham qoʻying va uning oʻlchamini oʻzgartiring
summary: Oʻlchamlarni burchaklar orasiga, yoylar va aylanalarga yoki ikki qirra orasiga joylashtiring; modelni oʻzgartirish uchun yangi uzunlik kiriting. Qirra uzunligini yoki guruhning kengligi, chuqurligi va balandligini Obyekt maʼlumotida qayta kiriting.
keywords: oʻlcham, oʻlchamlar, oʻlchamini oʻzgartirish, oʻlchamni oʻzgartirish, oʻlchamni tahrirlash, uzunlik, kenglik, chuqurlik, balandlik, choʻzish, boshqaruvchi oʻlcham, izohlash, oʻlchash, keyin oʻzgartirish, radius, diametr, burchak, burchakli, yoy, aylana, R, Ø
from: a1f815ec
---

ModelCraft da oʻlchamlar chizilgandan keyin ham qotib qolmaydi. Oʻlcham modelda uzunlikni koʻrsatadi va unga yangi uzunlik kiritsangiz, model shunga moslashib oʻlchamini oʻzgartiradi. Shuningdek, qirraning uzunligini yoki guruhning kengligi, chuqurligi va balandligini {{ui:Obyekt maʼlumoti}} ichida qayta kiritishingiz mumkin.

## Oʻlcham qoʻyish

1. {{key:D}} ni bosing yoki asboblar panelidagi {{ui:Oʻlcham}} ni bosing.
2. Oʻlchash boshlanadigan burchakni bosing. U burchaklar, oʻrtalar va qirralarga tortiladi, chizishdagi kabi.
3. Ikkinchi burchakni bosing.

   Yoki bir marta **qirra** ustida bosing (maslahat "Qirrada" deydi), butun qirrani bir bosishda oʻlchash uchun.
4. Oʻlcham chizigʻi qayerda boʻlishi kerakligiga kursorni olib boring va bosing. Siljishni ham kiritishingiz mumkin, masalan `0.5m`, va {{key:Enter}} ni bosing.

   Gorizontal qirra uchun oʻlcham chizigʻi gorizontal qoladi, agar uni yon tomondan koʻrmayotgan boʻlsangiz. Vertikal qirra uchun u siz uchun eng qulay vertikal tekislikda qoladi.

Holat panelida "Oʻlcham 4 m." deb yoziladi. Oʻlchamlar uzunligini model birligida koʻrsatadi va birlik tanlagichida birlikni oʻzgartirsangiz, yangilanadi.

## Radius, diametr va burchak

Oʻsha {{ui:Oʻlcham}} asbobi aylana narsalar va burchaklarni ham oʻlchaydi:

- **Yoy:** yoyni bosing. Maslahat {{ui:Radius}} deydi. Kursorni matn qayerda boʻlishi kerakligiga olib boring va bosing: oʻlcham **R 1.5 m** deb yozadi.
- **Aylana:** aylanani bosing. Siz **diametr** (**Ø 3 m**) olasiz, aylana markazi orqali oʻtuvchi chiziq bilan. Koʻpburchaklar ham xuddi shunday ishlaydi, burchaklari aylanada boʻladi.
- **Ikki qirra orasidagi burchak:** bir qirrani bosing, soʻng burchakda uni kesib oʻtadigan ikkinchi qirrani bosing (ustidan oʻtayotganingizda maslahat {{ui:Qirralar orasidagi burchak}} deydi). Soʻng istagan burchak ichiga koʻchiring va bosing. Burchak ichida qirralar orasidagi burchakni olasiz; bir tomonga koʻchsangiz, yonidagi burchakni olasiz (masalan, 30° oʻrniga 150°). Burchakdan qanchalik uzoqda bossangiz, yoy shunga qarab joylashadi; yoki shu masofani kiriting.

Radiusni diametrga yoki aksincha oʻzgartirish uchun oʻlchamni tanlang va {{ui:Obyekt maʼlumoti}} ichida {{ui:Shu koʻrinishda koʻrsatish}} tanlang.

**Ular bilan oʻlchamini oʻzgartirish:** biror oʻlchamni qoʻyganingizdan keyin darhol yangi radius yoki diametr kiriting, yoki keyinroq tanlab kiriting. Yoy yoki aylana markazini saqlaydi va oʻlchamini oʻzgartiradi; uni chegaralagan yuz (disk, egat uchi) u bilan birga oʻzgaradi. Ikki narsa faqat oʻlchaydi:

- **Burchak oʻlchami** modelni hech qachon oʻzgartirmaydi. Burchakni oʻzgartirish uchun qirralarni {{ui:Aylantirish}} bilan aylantiring.
- **Silindr uchidagi aylana** ({{ui:Itarish/tortish}} bilan tortgan aylana) oʻz oʻlchamidan oʻzgartirilmaydi, chunki uning yon tomonlari ham oʻzgarishi kerak boʻladi. Oʻrniga silindrni oʻz oʻqi atrofida masshtablang.

## Oʻlcham bilan modelni oʻzgartirish

Oʻlcham qoʻyganingizdan keyin darhol yangi uzunlik kiriting va {{key:Enter}} ni bosing: `6m`, `12'`, millimetrli modelda `3500`. Model shu oʻlchamga oʻzgaradi.

Keyinroq, istalgan vaqtda:

1. {{ui:Tanlash}} bilan oʻlchamning matni yoki chizigʻini bosing. {{ui:Obyekt maʼlumoti}} **Oʻlcham** deydi va uning {{ui:Uzunlik}} qiymatini koʻrsatadi.
2. Yangi uzunlikni kiriting va {{key:Enter}} ni bosing. Qiymat qutisiga toʻgʻridan-toʻgʻri, yoki {{ui:Obyekt maʼlumoti}} ichidagi {{ui:Uzunlik}} qutisiga yozishingiz mumkin.

### Nima harakatlanadi

Siz bosgan ikkinchi burchak harakatlanadi, va undan keyingi hamma narsa ham:

- **Ikkala burchak bitta boʻlakda** (quti kengligi, devor balandligi): harakatlanuvchi burchakdagi tomon tashqariga yoki ichkariga suriladi, va unga ulangan yuzlar choʻziladi. Quti yopiq jism boʻlib qoladi, va butunlay oʻsha tomonda turgan har qanday narsa, masalan deraza komponenti, u bilan birga harakatlanadi.
- **Burchaklar ikkita alohida boʻlakda** (ikki quti orasidagi boʻshliq): harakatlanuvchi burchakning boʻlagi butunicha koʻchadi va boʻshliq oʻzgaradi.
- **Harakatlanuvchi burchak guruh yoki komponent ichida**, ikkinchi burchak esa unda boʻlmasa: butun guruh harakatlanadi.
- **Ikkala burchak bitta guruh yoki komponent ichida**: u ichida choʻziladi. Komponent joylashtirilgan hamma joyda oʻzgaradi, uni tahrirlaganda doim boʻlgani kabi.

Qaysi uch harakatlanishini oʻzgartirish uchun oʻlchamni tanlang va {{ui:Obyekt maʼlumoti}} ichida {{ui:Siljiydi}} ni tanlang:

| Tanlov | Nima boʻladi |
|---|---|
| {{ui:Ikkinchi uch}} (standart) | Ikkinchi bosgan uch harakatlanadi |
| {{ui:Birinchi uch}} | Birinchi bosgan uch harakatlanadi |
| {{ui:Ikkala uch (markazlangan)}} | Har bir uch oʻzgarishning yarmini oladi, shuning uchun oʻrta joyi oʻz joyida qoladi |

### Oʻlchamni oʻzgartirish rad etilganda

ModelCraft hech narsani oʻzgartirmaydi va holat panelida nima uchunligini aytadi:

- "yuz oʻz tekisligidan egilib ketardi": oʻlcham shakl boʻylab qiya ketadi. Qirra boʻylab yoki qizil, yashil yoki koʻk boʻylab oʻlchang.
- "yuz hech narsaga qisqarib ketardi yoki ichki tomoni tashqariga aylanardi": yangi uzunlik shakl uchun juda qisqa.
- "harakatlanadigan uch model burchagida emas": u uch boʻsh joyga yoki qirra oʻrtasiga qoʻyilgan. {{ui:Siljiydi}} ichida boshqa uchni tanlang, yoki oʻlchamni ikki burchakka qoʻying.
- "uzunlik noldan katta boʻlishi kerak".

Har bir oʻzgartirish bitta bosqich: {{key:Mod+Z}} uni ortga qaytaradi.

## Obyekt maʼlumotida oʻlchamni qayta kiritish

Oʻlchov har doim ham kerak emas:

- **Qirra:** uni tanlang. {{ui:Obyekt maʼlumoti}} ichidagi {{ui:Uzunlik}} — kiritiladigan qutidir. Qiymat qutisiga uzunlik kiritish ham ishlaydi. Qizil, soʻngra yashil, soʻngra koʻk boʻylab uzoqroq uch harakatlanadi va unga ulangan narsa choʻziladi. Masalan, quti old pastki qirrasini qayta kiritish qutini oʻngga qarab kengaytiradi.
- **Guruh yoki komponent:** uni tanlang. {{ui:Kenglik (qizil)}}, {{ui:Chuqurlik (yashil)}} va {{ui:Balandlik (koʻk)}} qutilardir. Uning uzoq tomoni (oʻng, orqa, yuqori) harakatlanadi. Bular guruhning oʻz oʻqlari boʻlib, siz bergan har qanday aylantirishdan oldin.

Qoʻllash uchun {{key:Enter}} ni, yoki eski qiymatni qaytarish uchun {{key:Esc}} ni bosing.

## Oʻlchamlar model bilan birga harakatlanadi

Oʻlcham qoʻyilgan ikki burchakka biriktiriladi (burchak: uning burchagiga va ikki qirrasining uzoq uchlariga; radius yoki diametr: uning yoyi yoki aylanasiga). Geometriyani siljiting, itarish/tortish yoki oʻlchamini oʻzgartiring — oʻlcham unga ergashadi va yangi uzunlikni koʻrsatadi. Geometriyani guruh yoki komponentga aylantirganingizda ham biriktirilgan boʻlib qoladi.

Agar uch burchak boʻlmagan joyga (yuzga yoki boʻsh joyga) qoʻyilgan boʻlsa yoki uning burchagi oʻchirilgan boʻlsa, oʻsha uch oʻz joyida qoladi. Oʻlcham baribir oʻlchaydi, lekin faqat boshqa uchidan oʻlchamini oʻzgartira oladi.

## Oʻlchamlarni olib tashlash

- Bitta oʻlcham: uni tanlang va {{key:Delete}} ni bosing, yoki {{ui:Oʻchirgich}} bilan bosing.
- Barcha oʻlchamlar: hech narsa tanlanmagan boʻlsa, {{ui:Obyekt maʼlumoti}} ichidagi {{ui:Barcha oʻlchamlarni oʻchirish}} ni bosing.

Oʻlchamlar `.modelcraft` faylida saqlanadi. Ular boshqa formatlarga eksport qilinmaydi, u formatlar faqat 3D modelni olib yuradi. Oʻlchamli fayl eski ModelCraft da ham ochiladi, ammo oʻlchamlarsiz.
