---
title: Modelni boshqa dasturlar uchun eksport qilish
summary: Renderlash, veb, 3D bosma, BIM va BimCraft uchun toʻgʻri eksportni tanlang va har biri nimani saqlashini tekshiring.
keywords: chop etish, 3mf, pdf, qogʻoz, tasvir, png, rasm, skrinshot, render, koʻrinishni saqlash, eksport, ulashish, renderlash, gltf, glb, collada, dae, obj, stl, 3D bosma, ifc, bim, bimcraft, yuborish, boshqa dasturlar
from: 9e13e80d
---

Eksport modelning nusxasini boshqa formatda yaratadi. `.modelcraft` faylingizni ham saqlab qoʻying: u hamma narsani saqlaydigan yagona fayl va ModelCraft toʻgʻridan-toʻgʻri ochadigan yagona fayl.

## Eksport

1. Avval saqlang ({{key:Mod+S}}), ishchi faylingiz xavfsiz boʻlishi uchun.
2. {{ui:Fayl}} guruhidagi {{ui:Eksport}} tugmasini bosing.
3. Formatni tanlang. Brauzer uni model nomi bilan yuklab oladi.

Butun model eksport qilinadi. Bitta qismni eksport qilish uchun: saqlang, qolganini oʻchiring, eksport qiling, soʻngra ortga qaytaring yoki qayta oching.

## Qaysi format

| Sizga kerak | Tanlang | Izoh |
|---|---|---|
| Uni boshqa 3D modelerda ochish | {{ui:Collada (.dae)}} | Guruhlar, ichki guruhlar, komponentlar (umumiy, nusxalanmagan), nomlar va ranglarni saqlaydi. Z yuqoriga, metrlarda. |
| Uni renderlash yoki vizualizatsiya dasturida ishlatish | {{ui:OBJ (.obj)}} yoki {{ui:glTF binar (.glb)}} | OBJ eng keng oʻqiladi; har bir guruh joylashtirishini alohida obyekt sifatida yozadi, lekin ranglari va umumiy komponentlari yoʻq. glTF komponentlar va ranglarni saqlaydi. |
| Veb-ga, oʻyin dvigatelida yoki AR da ishlatish | {{ui:glTF binar (.glb)}} | Hammasi bitta faylda. |
| 3D da bosma qilish | {{ui:3D bosma uchun tekshirish (STL yoki 3MF)…}} | Model yopiq va toʻgʻri tomonga qaraganini tekshiradi, soʻngra millimetrda STL yoki 3MF yozadi. Qarang: [Modelni 3D bosmaga tayyorlash](topic:print-3d). {{ui:Bosma uchun STL (.stl, millimetrda)}} tekshiruvsiz butun modelni yozadi. |
| BimCraft yoki boshqa BIM dasturida ochish | {{ui:BimCraft uchun IFC (.ifc)}} | Har bir yuqori darajadagi guruh yoki komponent bitta bino elementiga aylanadi. |

Holat satri har bir eksportni tasdiqlaydi, masalan "House.stl eksport qilindi (millimetrda)." yoki "House.dae eksport qilindi (Collada 1.4.1, Z yuqoriga, metrlarda; komponentlar umumiy qoladi)."

## Eksportdan oldin

- **Obyektlarni guruhlang.** Collada, glTF va IFC guruhlar va komponentlarni alohida obyektlar sifatida saqlaydi. Erkin geometriya bitta boʻlak sifatida chiqadi; IFCda u "Erkin geometriya" nomli bitta element boʻladi.
- **Ularni nomlang.** Guruh va komponent nomlari Collada va IFCga kiradi, shunday qilib "Shimoliy devor" nomli devor "Shimoliy devor" boʻlib keladi.
- **Yuza yoʻnalishini tekshiring.** Tashqarida koʻk-kulrang koʻrinadigan yuzalar eksportda ichkariga qaraydi. Ularni {{ui:Yuzni teskari aylantirish}} bilan tuzating (qarang: [Oʻchirish va tozalash](topic:erase#a-face-facing-the-wrong-way)).
- **Bosma uchun,** qismlar yopiq jismlar boʻlsin: har bir guruhni tanlang va {{ui:Obyekt maʼlumoti}} "Yaxlit jism: Ha" deb yozishini tekshiring. Soʻngra modelni bosma oʻlchamiga masshtablang yoki printer dasturida masshtablang.

## Modelni BimCraftʼga yuborish

1. Har bir bino qismini guruh yoki komponent qiling va nomlang.
2. {{ui:Eksport}} ni, soʻngra {{ui:BimCraft uchun IFC (.ifc)}} ni tanlang.
3. Yuklab olingan `.ifc` faylni BimCraftʼda oching.

Kontseptual massing uchun {{ui:Eksport}} › {{ui:Massingni BimCraftʼga…}} dan foydalaning: har bir guruh qavatlari, qavat maydonlari va hajmi bilan massing varianti sifatida ketadi. Qarang: [Massingni BimCraftʼga yuborish](topic:massing-to-bimcraft).

Oddiy IFC eksportida ikki dastur oʻrtasida toʻgʻridan-toʻgʻri bogʻlanish yoʻq. IFC da bitta qavat boʻladi va har bir element umumiy bino elementi proksisi boʻladi, turlari yoki xususiyatlarisiz: u faqat shakl va nomni olib yuradi. Yopiq guruhlar yaxlit shakllarga aylanadi; ochiqlari sirtlarga aylanadi.

## Chiziqlar yuzasiz

Hech bir yuzaning qismi boʻlmagan qirralar (yoʻriqnomaga oʻxshash chiziqlar, import qilingan sayt rejasi) OBJ va Collada ga chiziq sifatida ketadi. glTF va STL da ularga joy yoʻq va ular chiqarib tashlanadi. Yoʻriqnomalar va sahnalar hech bir formatga eksport qilinmaydi.

## Koʻrinishni rasm sifatida saqlash

{{ui:Eksport}} › {{ui:Koʻrinish tasviri (.png)}} 3D koʻrinish aynan nimani koʻrsatsa, uni ekrandagi oʻlchamida saqlaydi. {{ui:Ikki baravar katta tasvir (.png)}} uni ikki baravar keng va ikki baravar baland saqlaydi (bosma yoki oʻtkir slayd uchun), oʻlchamlar va belgilar esa choʻzilmasdan, shu oʻlchamda qayta chiziladi.

Kunduzgi yorugʻlikka oʻxshash rasm (osmon, quyosh, yumshoq soyalar, shisha) uchun buning oʻrniga {{ui:Eksport}} › {{ui:Rasm renderini yaratish…}} dan foydalaning: qarang: [Rasm renderlash](topic:render).

Toza rasm uchun avval [taqdimot koʻrinishini](topic:styles-shadows#presentation-view) yoqing ({{key:Shift+P}}): oʻqlar, yoʻriqnomalar, kesim konturlari va tanlov chiqarib tashlanadi. Kamera, uslub va soyalarni xohlaganingizdek sozlang yoki [sahnaga](topic:scenes) oʻting; sahnalaringizning harakatlanuvchi filmini saqlash uchun {{ui:Sahnalar}} panelidagi {{ui:Animatsiyani eksport qilish}} dan foydalaning.

## Koʻrinishni chop etish yoki PDF sifatida saqlash

- {{ui:Eksport}} › {{ui:Koʻrinish PDF (.pdf)}} bir sahifali PDF saqlaydi: koʻrinish ekrandagi oʻlchamining ikki baravarida, oʻlchamlari bilan, A4 sahifada (model futda va dyuymda boʻlsa Letter), gorizontal, ostida fayl nomi, sana va birlikni koʻrsatuvchi chiziq bilan.
- {{ui:Eksport}} › {{ui:Koʻrinishni chop etish…}} xuddi shu sahifani brauzeringizning chop etish oynasiga qoʻyadi. Printerni tanlang yoki "PDF sifatida saqlash" ni tanlang.

Sahifa koʻrinishni oʻz holicha koʻrsatadi: perspektiv koʻrinishda masshtab yoʻq. Masshtabli chizma uchun {{ui:Perspektiva}} ni oʻchiring va {{ui:Yuqori}} yoki {{ui:Old}} dan qarang, hamda muhim oʻlchamlar uchun [oʻlchamlar](topic:dimensions) qoʻshing. [Taqdimot koʻrinishi](topic:styles-shadows#presentation-view) oʻqlar, yoʻriqnomalar va tanlovni chiqarib tashlaydi; oʻlchamlar qoladi.
