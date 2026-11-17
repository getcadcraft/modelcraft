---
title: Rang va materiallar bilan boʻyash
summary: Yuzalar, guruhlar va komponentlarga bir xil rang yoki gʻisht, siding, shifer yoki yogʻoch kabi material bering va eksport qilganda ular saqlanadi.
keywords: boʻyash, rang, material, materiallar, tekstura, gʻisht, siding, shifer, tom qoplamasi, yogʻoch, tosh, plitka, beton, suvoq, maysa, shagʻal, shisha, metall, boʻyoq chelagi, toʻldirish, namuna, rang tanlagich, standart, glb, obj, mtl, collada
from: b1500523
---

Ranglar modelning qismlarini bir-biridan ajratishga yordam beradi, **materiallar** (gʻisht, siding, tom qoplamasi, yogʻoch, tosh, plitka, beton, suvoq, maysa, shisha, metall) esa modelni qurilgan narsaga oʻxshatib koʻrsatadi. Ikkalasi ham bir xil tarzda boʻyaladi.

## Rang tanlash

Oʻng tomondagi {{ui:Colors}} boʻlimida bir qator bir xil ranglar, {{ui:Default}} (chiziq bilan kesilgan: rangsiz) va boshqa istalgan rang uchun {{ui:+}} namunasi koʻrsatiladi. Birortasini bosing, u joriy rang boʻladi. Boʻyash vositasi shu rang bilan boshlanadi.

## Boʻyash

1. {{key:B}} ({{ui:Paint}}) ni bosing yoki hech narsa tanlanmagan boʻlsa, rangni bosing. (Biror narsa tanlangan boʻlsa, rangni bosish tanlovni darhol boʻyaydi.)
2. Boʻyash uchun yuzani bosing.
3. Guruh yoki komponentni bosib, shu nusxani boʻyang: oʻz rangi boʻlmagan yuzalar shu rangni oladi. Uning ichida siz boʻyagan yuzalar oʻz rangini saqlaydi.

Bir vaqtda bir nechta narsani boʻyash uchun avval ularni tanlang, keyin rangni bosing yoki ulardan istalgan birini {{ui:Paint}} bilan bosing. Bu bitta bekor qilish qadami.

| Ushlab turing | Keyin yuzani bosing | Nima boʻyaladi |
|---|---|---|
| — | | Oʻsha yuza |
| {{key:Ctrl}} | | Unga ulangan, bir xil rangdagi har bir yuza |
| {{key:Shift}} | | Ishlayotgan guruhdagi shu rangdagi har bir yuza |
| {{key:Alt}} | | Hech narsa: buning oʻrniga shu rangni olasiz |

Yuzani rangsiz holatga qaytarish uchun {{ui:Default}} ni tanlab, uni bosing.

## Material bilan boʻyash

{{ui:Colors}} ostidagi {{ui:Materials}} boʻlimi material kutubxonasini turlari boʻyicha koʻrsatadi: gʻisht va blok, siding, tom qoplamasi, yogʻoch, tosh, plitka, beton, suvoq, yer, shisha va metall. Nomini bilish uchun namunaning ustiga sichqonchani olib boring. Birini bosing, keyin uni rang bilan boʻyagandek boʻyang: {{key:B}}, keyin yuza, guruh yoki komponentlarni bosing; yoki avval tanlang va materialni bosing.

- **Shaded** uslubida yuzalar materialning teksturasini koʻrsatadi. Yashirin chiziq, karkas va rentgen rejimlarida uning rangi koʻrinadi.
- Teksturalar har bir yuza boʻylab **tekis** va unga **tik** yoʻnalishda joylashadi: gʻisht qatorlari har bir devorda tekis turadi, shiferlar tom qiyaligi boʻylab tushadi, polda taxtalar qizil oʻq boʻylab joylashadi. Ular haqiqiy oʻlchamida (gʻisht taxminan 215 mm uzunlikda), shuning uchun istalgan masofada toʻgʻri koʻrinadi.
- [Renderlangan rasmda](topic:render) materiallar teksturasi, gʻadir-budurligi va shisha hamda metall uchun yaltiroqligini saqlaydi.
- {{ui:Paint}} bilan {{key:Alt}}-bosish yuzaning materialini ham oladi.

Teksturalar ModelCraft tomonidan oʻzi chiziladi, shuning uchun ular oflaynda ishlaydi va istalgan maqsadda bepul (CC0).

## Komponentlar va ranglar

Komponent **ichidagi** yuzaga berilgan rang har bir nusxada koʻrinadi, chunki nusxalar bitta taʼrifni ulashadi. Nusxadagi yuzaga **tashqaridan** (komponent yopiq holda) berilgan rang faqat shu nusxaga tegishli, shuning uchun bir komponentning ikki nusxasi turli ranglarga ega boʻlishi mumkin. {{ui:Entity info}} tanlangan yuza, guruh yoki komponentning rangini koʻrsatadi.

## Fayllardagi ranglar

- ModelCraft fayli har bir rang va har bir materialni saqlaydi.
- Boshqa formatlar teksturalar oʻrniga **materialning rangini** (uzoqdan koʻrinishini) oladi: glTF, Collada, OBJ, DWG va DXF, hamda 3D bosmaga tekshirish. glTF, Collada va OBJ da material oʻz nomini saqlaydi, masalan `Material_brick-red`.
- **glTF (.glb)** va **Collada (.dae)**: har bir rang material boʻladi. Har xil ranglarda koʻrsatilgan komponent har bir rang uchun bir marta yoziladi. glTF import qilingan teksturalarni ham tekstura sifatida yozadi.
- **OBJ**: eksport ikkita faylni yuklab oladi: `.obj` va ranglari bor `.mtl` material fayli. Ularni bir jildda saqlang. Import qilingan teksturalar bilan `.obj`, `.mtl` va rasmlar bitta `.zip` boʻlib keladi.
- **DWG** aniq ranglarni saqlaydi; **DXF** 255 ta standart CAD ranglaridan eng yaqinini ishlatadi.
- **STL** va **PLY** ranglarni olib yuradi: STL VisCAM / SolidView qoidasida (uni oʻqimaydigan dasturlar eʼtiborsiz qoldiradi), PLY esa har bir nuqtada rang sifatida. Qarang: [Fayl formatlari batafsil](topic:formats).

:::tip
Ekranni modellash uchun, old yuzani [siljitgandan](topic:draw-faces) keyin ramkani koʻmirrang, shishani koʻk rang bilan boʻyang.
:::
