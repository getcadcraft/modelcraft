---
title: Yuzlarni itarish va tortish orqali jismlarga aylantirish
summary: Yuzni qutiga aylantiring, binoni balandroq yoki pastroq qiling, ravoq yoki oʻyiq qoʻshing va masofani ikki marta bosish bilan takrorlang.
keywords: itarish tortish, chiqarish, balandlik, jism, quti, massa, balandroq, oʻyiq, chiqarib qoʻyish, takrorlash, ikki marta bosish, hajm, sath, yuzada, tekis, bir xil balandlik
from: dc093c91
---

{{ui:Push/pull}} ({{key:P}}) yuzni oʻz yoʻnalishi boʻylab suradi: pol uchun yuqoriga va pastga, devor uchun ichkariga va tashqariga. Nima boʻlishi yuzga bogʻliq.

## Yuzdan jism yasash

1. Yuz chizing, masalan yerda toʻrtburchak ([Yuzlarni chizish](topic:draw-faces)).
2. {{key:P}} ni bosing.
3. Yuzning ustiga koʻrsatkichni olib boring. U ajralib koʻrinadi.
4. Yuzni bosing, keyin koʻrsatkichni harakatlantiring. Yuz koʻtariladi (yoki botadi) va chetlaridan yon tomonlar oʻsadi. {{ui:Distance}} qutisi va maslahat masofani koʻrsatadi.
5. Tugatish uchun bosing, yoki masofani kiriting va {{key:Enter}} ni bosing: `3m`, `10'`, millimetrli modelda `2700`.

   Endi sizda yopiq jism bor. Uni butunlay tanlab, guruhlang (qarang: [Guruhlar va komponentlar](topic:groups-components)): keyin {{ui:Entity info}} "Solid: Ha" va uning hajmini koʻrsatadi.

Yolgʻiz yuz ikkala yoʻnalishda ham ketishi mumkin: uni yerdan koʻtarish uchun yuqoriga torting, chuqur yoki poydevor uchun pastga suring.

:::tip
Ikki marta bosish oʻrniga yuzni bosing, suring va qoʻyib yuboring. Sensorli ekranda bu tabiiy usul: bosing, suring, qoʻlni koʻtaring.
:::

## Boshqa narsaning balandligigacha tortish

Tortayotganda modelning boshqa qismining burchagi, oʻrtasi, qirrasi yoki yoʻriqnomasi ustiga koʻrsatkichni olib boring. Yuz oʻsha balandlikka ilashadi va nuqtani belgi koʻrsatadi. Bu ikkita blokni bir xil balandlikda qilish uchun yoki siz [oʻlchov lentasi](topic:guides-measure) bilan qoʻygan yoʻriqnoma chizigʻida toʻxtash uchun foydali.

Siz suradigan yuzga parallel yuzni ham koʻrsatishingiz mumkin, masalan boshqa blokning tepasi yoki ustun turgan qutining tepasi. Maslahat "Yuzda" deydi va surayotgan yuzingiz uning bilan tekis tugaydi. Masalan, quvur ostidagi quti bilan tekis boʻlguncha quvurning ichki yuzini pastga suring.

Suradigan yuzga burchak ostidagi yuz balandlik belgilamaydi. Masofa koʻrsatkichga ergashadi. Suradigan yuz orqasidagi yuz ham shunday.

Surilgan yuz atrofidagi yuzlar bilan yana tekis tugaganda, uning yon tomonlari yoʻqoladi. Nol balandlikdagi yon tomonlar qolmaydi va siz chizgan kontur yuzda qoladi, shuning uchun uni keyinroq yana surishingiz mumkin. Yuzni yana bitta qilish uchun konturning qirralarini {{ui:Eraser}} bilan oʻchiring: ikki yuz birlashadi.

## Qutini balandroq yoki pastroq qilish

Qutining tepasini suring. Yon tomonlari unga tik ravishda toʻgʻri koʻtarilgani uchun tepa shunchaki siljiydi: quti balandroq yoki pastroq boʻladi va yangi qirralar yasalmaydi.

- Tepani butunlay pastga surish qutini olib tashlaydi. ModelCraft nol balandlikda toʻxtaydi; qutini hech qachon teskari aylantirmaydi.
- Qoʻshnilari hammasi uning yoʻnalishi boʻylab yuradigan har qanday yuz uchun ham shunday, masalan devor uchi.

## Ravoq yoki oʻyiq qoʻshish

1. Qutining yon tomonida toʻrtburchak chizing (uni yuzdan boshlang; u yuz tekisligida qoladi).
2. {{key:P}} ni bosing va yangi toʻrtburchakni **tashqariga** torting. Bu material qoʻshadi: ravoq, moʻri, soyabon.
3. Yoki uni **ichkariga** suring. U oʻyiq kesadi: ayvon, oʻyuq, orqaga surilgan kirish.

Yangi qismning yon tomonlari allaqachon mavjud yuzlar bilan tekislansa, ular bitta yuzga birlashadi, shuning uchun tekis devorda begona chiziqlar hosil boʻlmaydi.

## Oxirigacha itarish

Qattiq jismga yuzni ichkariga surish orqasidagi birinchi yuzda toʻxtaydi. U shu yuzga yetganda, orqali teshik ochadi. Qalinligi bor devorda deraza va eshiklarni shunday yasaysiz. Qarang: [Devorda teshik ochish](topic:openings).

## Masofani kiritish

Yuzni bosgandan keyin masofani kiriting va {{key:Enter}} ni bosing.

- Kiritilgan masofa siz harakatlanayotgan yoʻnalishda ketadi. Hali harakatlanmagan boʻlsangiz, u yuzning oldiga qarab ketadi (qattiq jismdan tashqariga, yerdan yuqoriga).
- Teskari yoʻnalishda ketish uchun manfiy son kiriting, masalan `-500`.
- Fikringiz oʻzgarsa, bosishdan oldin {{key:Esc}} ni bosing. Yuz oʻz joyiga qaytadi.

## Oxirgi masofani takrorlash

Bitta itarish/tortishdan keyin, {{ui:Push/pull}} hali tanlangan boʻlganda, boshqa yuzni ikki marta bosing. U xuddi shu masofaga siljiydi. Bu bir necha devorga yoki bir necha polga bir xil qalinlik yoki balandlik berishning tez usuli.

ModelCraft masofani boshqa asbobga oʻtguncha eslab qoladi.

## Bilish kerak boʻlgan narsalar

- {{ui:Push/pull}} bir vaqtda bitta yuz bilan ishlaydi. Yuz boʻlmagan narsani bossangiz, holat satri "Itarish/tortish yuz bilan ishlaydi. Yuzni bosing." deydi.
- Guruh yoki komponent ichidagi yuzni itarish/tortish uchun avval uni oching (ikki marta bosing).
- **Toʻqnashish** yoqilgan boʻlsa, boshqa jismga urilgan surish yoki tortish tegib turgan joyda toʻxtaydi va maslahat nimaga tegishini aytadi (obyektning nomi yoki "bu guruhdagi bogʻlanmagan geometriya") hamda u uchragan yuzlarni yoritadi. Oʻz jismiga surilgan choʻntak (masalan, orqaga pastga surilgan ofset yuz) oʻsha jismning bir qismi hisoblanadi va devorlari bilan hech qachon toʻxtatilmaydi.
- Ikki jism bir-biriga itarilganda ular bir-birini kesmaydi va birlashmaydi: ularning yuzlari shunchaki oʻtib ketadi. Qarang: [Hali qurilmagan](topic:not-built-yet).
