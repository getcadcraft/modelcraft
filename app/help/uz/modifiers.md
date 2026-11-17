---
title: Mesh, guruh yoki komponentdagi modifikatorlar
summary: Meshni oʻzgartirmasdan masshtablang, koʻzgu aksini oling, massivlang, silliqlang, faska qiling, kesing va eging; guruh yoki komponentni xuddi shu stek bilan takrorlang yoki masshtablang; tayyor boʻlganda doimiy qiling.
keywords: modifikator, modifikatorlar, stek, guruh, komponent, masshtab, qotirish, manbani tahrirlash, destruktiv emas, koʻzgu, massiv, radial massiv, subdivision, subdivision surface, silliqlash, faska, qalinlashtirish, qalinlik, boolean, kesish, siljitish, shovqin, payvandlash, soddalashtirish, setka, panjara, egri chiziq bilan egish, egish, shrinkwrap, qoʻllash
from: dd5ec1cb
---

**Modifikator** mesh koʻrsatadigan narsani oʻzgartiradi, meshning oʻzini oʻzgartirmasdan. Detalning yarmini koʻzgu aksi bilan oling va faqat oʻsha yarmini modellang; qutini subdivision sirti bilan yumaloqlang va uni tahrirlashni davom ettiring. Modifikatorlar **stek** da turadi va tepadan pastga, tartib bilan ishlaydi. Koʻrgan, eksport qilgan, bosma va render qilgan narsangiz — bu yoqilgan barcha modifikatorlar bilan mesh.

## Modifikator qoʻshish

1. Meshni tanlang. Model ish maydonida uning **Modifikatorlar** boʻlimi {{ui:Obyekt maʼlumoti}} ichida; Mesh ish maydonida u oʻngdagi panelda.
2. {{ui:Modifikator qoʻshish…}} dan birini tanlang. U stekning pastiga tushadi.
3. Uning nomi ostidagi sozlamalarni oʻzgartiring. Uzunliklar qiymat maydonidagi bilan bir xil qiymatlarni qabul qiladi, shuning uchun `600mm`, `2'6"` va `(6m)/4` ning hammasi ishlaydi.

Har bir oʻzgarish bitta bekor qilish bosqichi: {{key:Mod+Z}} uni qaytaradi.

## Har bir modifikatordagi tugmalar

- Katakcha uni yoqadi yoki oʻchiradi.
- Ekran tugmasi uni koʻrinishda koʻrsatadi yoki yashiradi (stekda qoladi).
- Kamera tugmasi uni renderlangan rasmlar va videolarda koʻrsatadi yoki yashiradi, shuning uchun modifikator faqat renderlar uchun (yoki faqat koʻrinish uchun) boʻlishi mumkin.
- Strelkalar uni stekda yuqoriga yoki pastga siljitadi. Tartib muhim: avval koʻzgu, soʻng subdivision sirti silliq chok beradi, avval subdivision, soʻng koʻzgu esa bermaydi.
- {{ui:Qoʻllash}} shaklni meshning bir qismiga aylantiradi: undan yuqoridagi modifikatorlar va bu modifikator meshning oʻzida bajariladi va stekni tark etadi. Bu bitta bekor qilish bosqichi.
- Xoch uni olib tashlaydi.

## Modifikatorlar

| Modifikator | Nima qiladi |
| --- | --- |
| Masshtab | Obyektning boshlangʻich nuqtasiga nisbatan masshtablaydi, qizil, yashil va koʻk uchun koeffitsiyent bilan. Guruh yoki komponentda ham. |
| Koʻzgu | Meshning boshlangʻich nuqtasi orqali qizil, yashil yoki koʻk boʻylab koʻzgu nusxasini qoʻshadi va yarimlarini ular tutashgan joyda birlashtiradi. |
| Massiv | Chiziq boʻylab nusxalaydi (oʻz oʻlchamining qadami kiritgan raqamlarga koʻpaytirilgan, va qoʻshimcha qatʼiy qadam bilan), oʻq atrofida yoki modeldagi egri chiziq boʻylab. Guruh yoki komponent chiziqni oladi. |
| Subdivision sirti | Meshni Catmull-Clark subdivision bilan silliqlaydi. Oʻtkir qirralar burma boʻlib qoladi. Renderlar koʻrinishdagidan koʻproq darajadan foydalanishi mumkin. |
| Faska | Siz bergan burchakdan oʻtkirroq har bir qirrani yumaloqlaydi. |
| Qattiqlashtirish | Sirtga qalinlik beradi va chetini yopadi. |
| Boolean | Modeldagi boshqa obyekt bilan kesadi, birlashtiradi yoki kesishmani saqlaydi. Ikkalasi ham yopiq qattiq jism boʻlishi kerak. |
| Siljitish | Sirtni silliq shovqin bilan ichkariga yoki tashqariga siljitadi. Bir xil urugʻ har safar bir xil doʻmpaklarni beradi. |
| Payvandlash | Masofadan yaqinroq uchlarni birlashtiradi. |
| Soddalashtirish | Uchburchaklarning bir ulushini saqlaydi, shakl oʻzgarishini eng kam beradiganlarini olib tashlaydi. |
| Silliqlash | Uchlarni qoʻshnilari tomon boʻshashtiradi. |
| Panjara | Meshni qafas bilan egadi: qafas nuqtalarini koʻchiring va mesh ergashadi. |
| Egri chiziq boʻyicha egish | Meshni modeldagi egri chiziq boʻylab, qizil, yashil yoki koʻk boʻylab egadi. |
| Shrinkwrap | Har bir uchni boshqa obyektning eng yaqin nuqtasiga koʻchiradi. |

## Guruh yoki komponentda

Guruh yoki komponent ham retsept saqlashi mumkin, shuning uchun lampa soyabonini **Masshtab** va bitta soyabonning **Massiv** qilish mumkin, raqamni oʻzgartirish lampani oʻzgartiradi.

1. Guruh yoki komponentni tanlang. {{ui:Obyekt maʼlumoti}} ichida uning **Modifikatorlar** boʻlimi stekni koʻrsatadi (dastlab boʻsh).
2. {{ui:Modifikator qoʻshish…}} dan {{ui:Masshtab}} yoki {{ui:Massiv}} ni tanlang. Guruh **asl nusxa boʻladigan, stek bilan joylashtirilgan** komponentga aylanadi. Asl nusxa saqlanadi: uni tahrirlang va har bir nusxa darhol ergashadi.
3. Masshtab qizil, yashil va koʻk uchun koeffitsiyent qabul qiladi (`1, 1, 2` balandlikni ikki barobar qiladi). Massiv nusxalar sonini, hozirgacha natija oʻlchamining ulushi sifatida qadamni va uzunliklardagi qoʻshimcha qadamni qabul qiladi.

Stek asl nusxaning oʻz oʻqlari boʻylab, uning boshlangʻich nuqtasiga nisbatan yuqoridan pastga ishlaydi, shuning uchun tartib muhim: 3 m oraliqda uchta nusxali Massiv, soʻng qizilda Masshtab 2 nusxalarni 6 m ga uzoqlashtiradi; avval Masshtab, soʻng Massiv ularni 3 m da saqlaydi. Katakcha, strelkalar va xoch meshdagidek ishlaydi; bitta modifikatordagi koʻrinish va kamera tugmalari hamda Qoʻllash ishlamaydi, chunki guruhdagi stek yagona narsa.

- {{ui:Manbani tahrirlash}} asl nusxani oʻz joyida ochadi. Oʻzgarishlar har bir nusxada koʻrinadi; uni yopganda avvalgi joyingizga qaytasiz.
- {{ui:Modifikatorlarni qotirish}} natijani oddiy qirra va yuzlarga aylantiradi va stekni olib tashlaydi, bitta bekor qilish bosqichida. Bir-biriga kirgan nusxalar alohida geometriya boʻlib qoladi: qotirish birlashma emas.
- Komponent nusxalari retseptni baham koʻradi; {{ui:Yagona qilish}} uni ajratadi (asl nusxa esa baham koʻrilgan holda qoladi).
- Stek faylda saqlanadi, nusxalash va qoʻyish hamda bekor qilish orqali oʻtadi, va Ishlatilmaganlarni tozalash asl nusxani saqlab qoladi. Modifikatorlarni bilmaydigan dastur ham nusxalarni koʻrsatadi.
- Qotirilmaguncha natijaga kirib boʻlmaydi, parchalab boʻlmaydi, oʻlchamini oʻzgartirib yoki choʻzib boʻlmaydi: keyingi oʻzgarishda u qayta quriladi. Har biri buni aytadi.
- Chegaralar: 32 ta modifikator va 1,000 ta nusxa. Choʻzish (Stretch) uchun yasalgan komponent va stek hozircha bitta taʼrifni baham koʻra olmaydi.

## Subdivision sirti

Subdivision sirti meshni Catmull-Clark usulida silliqlaydi: har bir yuz toʻrt tomonli yuzlarga aylanadi va har bir daraja ularni toʻrt marta koʻpaytiradi. Ikki-uch darajali quti allaqachon yumaloq shakl boʻlib koʻrinadi va siz qutini tahrirlashni davom ettirasiz.

- **Koʻrinishdagi darajalar** qanchalik silliq ekanini belgilaydi.
- **Renderdagi darajalar** renderlangan rasmlar va videolar qanchalik silliq ekanini belgilaydi; renderlar koʻrinishdagidan koʻproq darajadan foydalanishi mumkin.
- **Renderlar haqiqiy silliq sirtda** renderlangan meshning nuqtalarini darajalar intilayotgan chegara sirtiga qoʻyadi, shuning uchun hatto ikki daraja ham koʻp daraja kabi silliq renderlanadi.
- **Burmalar** qirralarni oʻtkir saqlaydi: Mesh ish maydonida qirralarni tanlang va {{ui:Burma}} dan foydalaning (1 oʻtkir qoladi, 0.5 biroz yumaloqlanadi, 0 silliq). Qarang: [Meshni tahrirlash](topic:mesh-edit).
- **Katta meshda koʻrinish darajasini pasaytirish:** soʻragan darajalaringiz bu kompyuter koʻrinishi yaxshi bajaradiganidan koʻproq yuz beradigan boʻlsa, koʻrinish pastroq darajani koʻrsatadi va qaysi ekanligini aytadi. {{ui:Qoʻllash}} har doim barcha darajalardan foydalanadi. Necha yuz boʻlishi {{ui:Settings}} › Render › Sizning kompyuteringiz da kompyuteringiz sinfi bilan belgilanadi.
- Ochiq chegaralar oʻz burchaklarini saqlaydi va oʻz qirralarining chizigʻida qoladi.

## Panjara qafasi bilan egish

1. {{ui:Panjara}} modifikatorini qoʻshing va {{ui:Toʻr atrofiga panjara qafasini qoʻshish}} ni bosing. Meshning atrofida 3 × 3 × 3 nuqtali qafas paydo boʻladi, simlar bilan chiziladi.
2. Qafasni Mesh ish maydonida oching (ikki marta bosing) va uning nuqtalarini koʻchiring. Mesh silliq ergashadi.

:::tip
Qafas boshqa meshlar kabi mesh: tugagach uni belgisi bilan yashiring.
:::

## Katta meshlar

Kichik steklar darhol hisoblanadi. Katta stek kompyuteringizning har bir yadrosida fonda hisoblanadi: yangisi tayyor boʻlguncha koʻrinish oxirgi natijani koʻrsatishda davom etadi. Boolean birinchi marta qattiq jism modelchisini yuklaydi; koʻrinish buni bir zum aytadi.

## Modifikatorlar hali qila olmaydigan narsalar

- Siljitish, Silliqlash va Shrinkwrap uchun har bir uchning ogʻirliklari (meshga boʻyalgan pasayish).
- Push/pull geometriyasida (guruhlar va komponentlarda) Masshtab va chiziqli Massivdan boshqa modifikatorlar: avval uni meshga aylantiring ({{ui:Meshga aylantirish}}). Koʻzgu, yumaloq yoki egri chiziqli Massiv, guruhlardagi Egish va Torayish keyinroq keladi.
