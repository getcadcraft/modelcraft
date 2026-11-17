---
title: Uslublar va quyosh soyalari
summary: Modelni soyali, yashirin chiziqlar, karkas yoki shaffof koʻrinishda koʻrsating va istalgan sana, vaqt va joyda u tashlaydigan soyalarni oʻrganing.
keywords: taqdimot koʻrinishi, toza koʻrinish, yoʻriqchilarni yashirish, oʻqlarni yashirish, uslub, soyali, yashirin chiziq, karkas, rentgen, qirralar, soyalar, quyosh, quyosh tahlili, quyosh holati, sana, vaqt, kenglik, uzunlik, vaqt mintaqasi, shimol
from: 09c95329
---

{{ui:Uslub}} paneli oʻngda modelning chizilish usulini oʻzgartiradi. Undagi hech narsa modelning oʻzini oʻzgartirmaydi va u ortga qaytarish tarkibiga kirmaydi. Har bir [sahna](topic:scenes) oʻz uslubini eslab qoladi, fayl esa saqlaganingizdagi uslubni eslab qoladi.

## Yuzalar

{{ui:Yuzalar}} roʻyxatidan birini tanlang:

| Uslub | Koʻrinishi |
|---|---|
| {{ui:Soyali}} | Qattiq yuzalar, yumshoq yoritilgan. Orqadan koʻrinadigan yuzalar koʻk-kulrang. Import qilingan ranglar koʻrinadi. |
| {{ui:Yashirin chiziq}} | Yuzalar fon rangida, qirralar siyohda: yashirin chiziqlari olib tashlangan toza chizma. {{ui:Qogʻoz}} fonida oq, {{ui:Model}} fonida qora. |
| {{ui:Karkas}} | Faqat qirralar. Yuzalar chizilmaydi, lekin bosganda va tutganda hisobga olinadi: ulardan oʻtib tanlab boʻlmaydi. |
| {{ui:Rentgen}} | Shaffof yuzalar, orqasida yoki ichida nima borligini koʻrish uchun. Karkasdagi kabi, bosish va tutish hali ham eng yaqin yuzada toʻxtaydi. |

{{ui:Qirralarni koʻrsatish}} qirralarni {{ui:Karkas}} uslubidan tashqari barcha uslublarda yoqadi yoki oʻchiradi. U oʻchiq boʻlsa, {{ui:Yashirin chiziq}} deyarli hech narsa koʻrsatmaydi, chunki uning yuzalari fonga mos keladi. Yumshoq qirralar, masalan tortilgan aylananing yonlari, hech qachon chizilmaydi.

## Quyosh soyalarini yoqish

1. {{ui:Quyosh soyalari}} ni belgilang. Undan pastdagi quyosh sozlamalari faollashadi va model oʻzida hamda yerda soya tashlaydi.
2. Joyni belgilang:
   - {{ui:Kenglik}}: shimol musbat, janub manfiy (Nyu-York taxminan 40.7, Sidney taxminan -33.9).
   - {{ui:Uzunlik}}: sharq musbat, gʻarb manfiy (Nyu-York taxminan -74.0).
   - {{ui:UTC farqi}}: joyning UTC dan farqi soatlarda, masalan qishda Nyu-York uchun `-5`. ModelCraft yozgi vaqtni hisobga olmaydi; Nyu-York uchun yozda `-4` ishlating.
3. {{ui:Sana}} (oy va kun) ni belgilang va {{ui:Vaqt}} surgichini suring. Vaqt 15 daqiqalik qadamlar bilan oʻzgaradi va surgich yonida koʻrinadi, masalan "3:00 pm".

Sozlamalar ostidagi satr quyosh qayerdaligini koʻrsatadi, masalan "Quyosh 52° balandda, shimoldan 250° da. Shimol yashil oʻq." Quyosh pastda boʻlsa, u "Bu vaqtda quyosh botgan." deydi.

Yangi model quyosh 21-iyun, soat 3:00 pm da, kenglik 40, uzunlik -105, UTC farqi -7 bilan boshlanadi.

## Modelni shimolga yoʻnaltirish

ModelCraft shimoli doim **yashil oʻq**. Haqiqiy obyektni oʻrganish uchun modelni shunday aylantiringki, uning shimoliy tomoni yashil boʻylab qarasin: hammasini tanlang ({{key:Mod+A}}), {{key:Q}} bosing, yer ustidagi markazni bosing va uni obyektning shimoldan burchagiga qarab buring (qarang: [Aylantirish va masshtablash](topic:rotate-scale)).

## Quyosh tahlili

1. Joy va sanani belgilang.
2. Sahna qoʻshing ({{ui:Sahnalar}} ichidagi {{ui:Sahna qoʻshish}}).
3. Vaqt surgichini suring, soʻng yana bir sahna qoʻshing. Kerakli har bir soat uchun takrorlang.
4. Ularni ketma-ket koʻrish uchun {{ui:Ijro}} tugmasini bosing. Qarang: [Koʻrinishlarni sahna sifatida saqlash](topic:scenes).

## Bilish kerak boʻlgan narsalar

- Juda katta modelda soyalar tishli koʻrinishi mumkin, chunki bitta soya xaritasi butun modelni qamrab oladi.
- Soyalar {{ui:Karkas}} da chizilmaydi.
- Quyosh holati NOAA quyosh hisoblash usuliga amal qiladi va bir gradusning kasrigacha aniq, bu massa tahlili uchun yetarli. Atmosfera refraksiyasi hisobga olinmaydi, shuning uchun quyosh chiqishi va botishi yaqinidagi juda past burchaklar bir oz xato boʻlishi mumkin.

## Taqdimot koʻrinishi

{{ui:Koʻrinishlar}} › {{ui:Taqdimot koʻrinishi}} (yoki {{key:Shift+P}}) faqat modelni koʻrsatadi: oʻqlar, yoʻriqchi chiziqlar va yoʻriqchi nuqtalar, kesim tekisliklarining konturlari (kesim qoladi), lampalar belgilari, ochiq guruhning quti, tutish belgilari va maslahatlar, tanlash yorugʻligi — hammasi yoʻqoladi. Modelni aniq koʻrish yoki skrinshot olishdan oldin undan foydalaning. Asboblar ishlaydi va hali ham tutadi; faqat belgilarni koʻrmaysiz. Ularni qaytarish uchun {{key:Shift+P}} ni yana bosing. Oʻlchamlar qoladi, chunki ular chizmaning bir qismi. Guruh ichida tahrirlayotganingizda modelning qolgan qismi endi xiralashmaydi: u teksturalar bilan birga oʻz holicha koʻrinadi.
