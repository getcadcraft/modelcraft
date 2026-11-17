---
title: DWG yoki DXF dan maydon rejasida modellashtirish
summary: CAD maydon yoki qavat rejasini yer ustidagi chiziqlar sifatida olib kiring, birliklar savoliga javob bering va uni yuzalar hamda massalarga iz oling.
keywords: maydon rejasi, dwg, dxf, cad, import, eskiz, qoʻl eskizi, salfetka eskizi, foto, qogʻoz, qalam ranglari, dinamik bloklar, koʻrinish holatlari, matn, shtrixlash, spline, ellips, 3d yuz, iz olish, qavat rejasi, uchastka, mulk chegarasi, birliklar, tagchizma, kontekst
from: 3415dc96
---

ModelCraft 2D CAD chizmaning, maydon yoki qavat rejasining chiziqlarini olib kirishi mumkin va ularni yer ustiga joylashtiradi, ustiga modellashtirishingiz uchun.

## Chizmani import qilish

1. **Fayl** guruhidagi {{ui:Import}} tugmasini bosing (yoki faylni 3D koʻrinishga tashlang).
2. `.dwg` yoki `.dxf` faylni tanlang.

   Katta DWG bir oz vaqt oladi: u kirguncha holat satrida "plan.dwg oʻqilmoqda…" deb yoziladi.

3. Agar chizma oʻz birliklarini aytmasa, "Chizma birliklari" nomli dialog soraydi: "Bitta chizma birligi nima?" {{ui:Dyuym}}, {{ui:Fut}}, {{ui:Millimetr}} yoki {{ui:Metr}} ni tanlang. AQShning koʻpgina maydon rejalari futda, arxitektura rejalari dyuymda, metrik rejalar esa millimetrda chiziladi.

   Chizma yer ustida qirralar guruhi sifatida keladi, tanlanadi va koʻrinish unga yaqinlashadi. Holat satri qancha qirra kelganini aytadi, masalan "site.dwg import qilindi: yerda 1697 ta qirra, guruhda. Uning ustida toʻgʻridan-toʻgʻri chizish uchun uni parchalang."

## Nima kiradi

- Chiziqlar, polichiziqlar (ularning yoylari bilan), aylanalar va yoylar, hamda bloklar ichidagi hamma narsa, faqat **model fazosidan**. Egri chiziqlar qisqa toʻgʻri boʻlaklarga aylanadi.
- Chiziqlar, polichiziqlar, yoylar, aylanalar, ellipslar va splaynlar yer ustida tekis yotadi, qirralar sifatida.
- **Shtrixlashlar** yer ustida yuzalar boʻlib keladi, ularning orollari teshik sifatida, shuning uchun shtrixlangan maydonni darhol itarib/tortib olish mumkin.
- **3D yuzalar** va qattiq toʻldirishlar yuzalar boʻladi; 3D yuzalar oʻz balandliklarini saqlaydi.
- **Matn** (bir qatorli matn, koʻp qatorli matn va atribut qiymatlari) oddiy bir chiziqli yozuv bilan qirralar sifatida chiziladi, matnning oʻz balandligi, burchagi va tekislashida. Uning shrifti chizmanikidan farq qiladi, shuning uchun soʻzlar biroz uzunroq yoki qisqaroq boʻlishi mumkin. Yozuvda shakli boʻlmagan belgilar kichik qutilar sifatida chiziladi va sanaladi.
- **Oʻlchamlar** chizma qanday koʻrsatsa, shunday chiziladi (chiziqlari, strelkalari va matni qirralar va yuzalar sifatida).
- **Dinamik bloklar** chizma qanday koʻrsatsa, shunday keladi: har bir joylashtirilgan blok saqlangan koʻrinish holatida va faqat oʻsha holatning chiziqlari bilan. Holat satri ularni koʻrsatilgan holatlar va har birining boshqa holatlari bilan sanaydi, masalan "Receptacle Duplex sifatida koʻrsatilgan ×38, GFI ×7 (holatlar: Duplex, GFI)". ModelCraft holatlarni almashtirmaydi.
- **3D qattiq jismlar, mintaqalar va jismlar** (chizmaning ACIS maʼlumotlari) oʻz guruhlari sifatida keladi: yopiq qattiq jism sifatida qattiq, mintaqa yoki ochiq jism sifatida esa yuzalar boʻlib. Tekis yuzalar toʻliq keladi; egri yuzalar (silindrlar, konuslar, sferalar, torlar, oddiy splayn sirtlar) yumshoq qirralar bilan kichik uchburchaklar sifatida, shuning uchun faqat qattiq jismning oʻz qirralari koʻrinadi. Boshqa turdagi sirtdagi yuza tashlab ketiladi va roʻyxatga olinadi: "Hali chizilmagan (3D qattiq jismlar): …".
- Import qilinmaydi: nuqtalar, jadvallar, multiyetakchilar, rasmlar va boshqa obyekt turlari. Holat satri ularni turi boʻyicha sanaydi, masalan "Import qilinmadi: 12 POINT." Layoutdagi (qogʻoz fazosidagi) hamma narsa ham roʻyxatga olinmasdan tashlab ketiladi.
- Qatlamlar saqlanmaydi: barcha chiziqlar bir xil keladi.

Agar chizma oʻz boshlangʻich nuqtasidan uzoqda boʻlsa (masalan, state plane koordinatalari), u yenə import qilinadi, lekin ModelCraft boshlangʻich nuqtasidan uzoqda tushishi mumkin. Boshlangʻich nuqtasidan 10,000 km dan uzoqroq chizmalar rad etiladi: avval CAD dasturida chizmani 0,0 nuqtaga yaqinroq siljiting.

## Iz olib yuzalarga aylantirish

Import qilingan chiziqlar kamdan-kam hollarda oʻzicha toza yuzalarga yopiladi. Ikki yoʻl bilan ishlang:

**Rejani tagchizma sifatida saqlang (tavsiya etiladi)**

1. Rejani oʻz guruhida qoldiring.
2. {{ui:Toʻrtburchak}} va {{ui:Chiziq}} bilan binongizni uning ustiga chizing, rejaning burchaklari ("Uchi") va qirralariga ("Qirrada") tutib.
3. Yuzalaringizni itarib yuqoriga koʻtaring. Reja ostida oʻzgarmasdan qoladi va uni keyinroq bir bosishda butun guruh bilan oʻchirib tashlashingiz mumkin.

Tutish guruhlar orasida ishlaydi: rejaning burchaklariga guruhni ochmasdan tutishingiz mumkin.

**Rejaning oʻz chiziqlarida chizing**

1. Reja guruhini tanlang va {{ui:Parchalash}} tugmasini bosing. Uning chiziqlari erkin qirralarga aylanadi.
2. Yopiq kontur yuza boʻlishi kerak boʻlgan joyda, {{ui:Chiziq}} bilan uning qirralaridan biri ustiga bir chiziq torting, bir burchakdan ikkinchisigacha. Kontur yopiq va tekis boʻlsa, yuza odatda toʻladi. Toʻlmasa, kontur ichidagi boʻshliq yoki ustma-ust tushgan joyni qidiring va uning ustiga chizing.
3. Uni itarib/tortib oling.

Bu toza reja uchun eng yaxshi ishlaydi. Gavjum soʻrovnomada esa tepasiga iz olish tezroq.

## Muammolar

- "Bu ikkilik DXF. Uni ASCII DXF sifatida saqlang va qayta urinib koʻring." CAD dasturidan DXF ni yana ASCII (matn) sifatida saqlang.
- "…import qilish uchun model fazosida chiziq, yoy yoki aylana yoʻq." Chizmaning hammasi layoutlarda yoki faqat matn va shtrixlashlardan iborat boʻlishi mumkin.
- "Bu chizmani oʻqib boʻlmadi (…). U buzilgan boʻlishi yoki oʻqish dasturi qoʻllamaydigan DWG versiyasida saqlangan boʻlishi mumkin…" Qavslar sababni koʻrsatadi, masalan "DWG versiyasi AC1009 qoʻllab-quvvatlanmaydi". CAD dasturidan uni DXF sifatida yoki AutoCAD 2000 dan 2018 gacha boʻlgan DWG sifatida saqlang.
- Reja notoʻgʻri oʻlchamda: siz notoʻgʻri birlikni tanlagansiz. {{key:Mod+Z}} bilan ortga qaytaring va qayta import qiling, yoki guruhni toʻgʻri koeffitsiyent bilan [masshtablang](topic:rotate-scale) (fut va dyuym orasida 12, dyuym va millimetr orasida 25.4).

Kontur chiziqlarini haykaltaroshlik qilishingiz mumkin boʻlgan yerga aylantirish uchun qarang: [Relyef](topic:terrain).

## Qoʻl eskizining fotosuratidan

**Fayl › Qoʻl eskizi fotosuratini import qilish…** qogʻozdagi eskizning fotosuratini oladi (JPEG, PNG yoki TIFF, telefondan toʻgʻridan-toʻgʻri boʻlsa ham yaxshi) va yer ustida xuddi shunday qirralar yaratadi. Qogʻoz turini ayting (yoki varaqni topishiga ruxsat bering, A4 deb olinadi) va eskizning masshtabini, masalan 1 : 100. Qogʻoz chekkasi topiladi va foto tekislanadi, siyoh chiziqlar va yoylarga kuzatiladi, va har bir qalam rangi (qora, qizil, koʻk, yashil) oʻz belgisi (**Eskiz qora**, **Eskiz qizil**, …) bilan alohida guruh boʻladi, hammasi foto nomi bilan atalgan bitta guruh ichida. Bu bitta ortga qaytarish qadami, va hammasi shu kompyuterda bajariladi: hech narsa hech qayerga yuborilmaydi.

Qogʻoz chekkasi topilmasa, butun foto varaq deb olinadi va holat satri buni aytadi: bilgan biror narsangizni oʻlchang va agar u notoʻgʻri boʻlsa, guruhni masshtablang. Chiziqlarni yuqoridagidek yuzalarga iz oling.
