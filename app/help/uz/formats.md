---
title: Fayl formatlari batafsil
summary: ModelCraft ochadigan, import qiladigan va eksport qiladigan har bir formatning nimani saqlashi, oʻzgartirishi va chiqarib tashlashi.
keywords: formatlar, fayl turlari, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, kesh, fbx, 3mf, ifc, dwg, dxf, birliklar, oʻqlar, Z yuqoriga, Y yuqoriga, millimetrlar, chegaralar
from: c47d2d28
---

ModelCraft modeli metrlarda, Z (koʻk) oʻqi yuqoriga qaragan holda. Quyidagi har bir format shu modelga yoki undan konvertatsiya qilinadi.

## ModelCraft (.modelcraft)

| Nima | Tafsilot |
|---|---|
| Ochish | {{ui:Ochish}} ({{key:Mod+O}}) yoki koʻrinishga tashlang. `.json` bilan tugaydigan fayllar ham qabul qilinadi |
| Saqlash | {{ui:Saqlash}} ({{key:Mod+S}}), yuklab olish sifatida |
| Saqlaydi | Hammasi: geometriya, yuzalar va ularning ranglari, materiallar va import qilingan teksturalar, lampalar, yumshoq qirralar, guruhlar, komponentlar, nomlar, yoʻriqnomalar, sahnalar, birliklar, oxirgi kamera va uslub |
| Chiqarib tashlaydi | Ortga qaytarish tarixi |
| Chegara | 200 MB |

Yangiroq ModelCraft bilan saqlangan fayl rad etiladi: "Bu model yangiroq ModelCraft bilan saqlangan (fayl versiyasi …). Uni ochish uchun ModelCraftʼni yangilang." ModelCraft modeli boʻlmagan fayl esa shunday deyiladi: "Bu fayl ModelCraft modeli emas (u JSON emas)." yoki "Bu ModelCraft ocha oladigan fayl emas: …".

## USD (.usd, .usda, .usdc, .usdz)

Ochish, import qilish va {{ui:Boshqacha saqlash}} yoki {{ui:Eksport}} › {{ui:USD (.usda, .usdc, .usdz)…}}. ModelCraft saqlagan USD fayl hech narsa yoʻqotilmay qayta ochiladi; boshqa dasturlarning USD fayllari mesh, guruh, komponent, lampa va kameralar sifatida ochiladi. Qarang: [USD ni saqlash, ochish va eksport qilish](topic:usd).

## Collada (.dae)

Import va eksport. Boshqa 3D modelerlar bilan modellar almashish uchun eng yaxshi format.

- **Eksport:** Collada 1.4.1, Z yuqoriga, metrlarda. Har bir guruh yoki komponent taʼrifi uchun bitta geometriya; komponentlar bir marta yoziladi va havola orqali joylashtiriladi, shuning uchun umumiy boʻlib qoladi. Teshikli yoki botiq konturli yuzalar uchburchaklarga boʻlinadi. Ranglar materiallarga aylanadi. Erkin qirralar chiziq sifatida yoziladi. Formatga mos kelmaydigan nomlar tuzatiladi, aniq nom esa uning yonida saqlanadi.
- **Import:** uchburchaklar, koʻpburchaklar (teshiklar bilan), uchburchak fanlar va tasmalar yuzaga aylanadi; chiziqlar qirraga aylanadi. Tugun oʻzgartirishlari, faylning yuqori oʻqi va birligi qoʻllanadi. Bir necha joyga joylashtirilgan tugun yoki bir necha tugun ishlatgan geometriya komponent sifatida keladi; boshqa tugunlar guruh sifatida keladi. Material ranglari (diffuse) yuza ranglariga aylanadi.
- **Import qilinmaydi:** teksturalar, skinlar va morflar, kameralar, yorugʻliklar, ayrim transformatsiya turlari (look-at va skew), boshqa fayllarga havolalar. Holat satri ularni sanaydi.
- **Eksportda yoʻqoladi:** qaysi qirralar yumshoq ekani. **Importda,** uchburchaklangan sirtlar uchburchak boʻlib qoladi, diagonallari yumshatiladi, shunda tekis joylar bitta sirt boʻlib koʻrinadi.

## OBJ (.obj, .mtl)

Import va eksport.

- **Import:** `.obj` ni uning `.mtl` va tekstura rasmlari bilan birga tashlang (yoki `.obj` ni oʻzini import qiling: u materialsiz keladi va holat satri kerak boʻlgan `.mtl` nomini aytadi). Metrlarda, Y yuqoriga deb oʻqiladi. Har bir obyekt (`o`, aks holda `g`) [mesh](topic:meshes) boʻladi, yuzalari oʻz holicha saqlanadi (toʻrtburchaklar toʻrtburchak boʻlib qoladi). Tekstura koordinatalari, normallar va uchma-uch ranglar saqlanadi. Materialning rang rasmi (`map_Kd`, PNG, JPEG yoki WebP) opsiyalari bilan teksturaga aylanadi; aks holda uning rangi (`Kd`). Fayl normallari uzilgan joylardagi qirralar qattiq; normal boʻlmasa, faylning silliqlash guruhlari hal qiladi. Boshqa xaritalar (bump, normal), nuqtalar, chiziqlar va egri chiziqlar sanaladi va chiqarib tashlanadi. OBJ da birlik yoʻq, shuning uchun millimetrda yoki dyuymda yasalgan model notoʻgʻri oʻlchamda keladi: import qilgandan keyin kattalashtiring (qarang: [Aylantirish va masshtablash](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Eksport:** metrlar, Y yuqoriga, dunyo koordinatalari. Har bir guruh joylashtirish uchun bitta obyekt; komponentlar har bir joylashtirishda toʻliq yoziladi. Meshlar oʻz yuzalarini, tekstura koordinatalarini va normallarini saqlaydi; [yumshoq qirralar](topic:soften) bilan birlashgan yuzalar har burchak uchun normal oladi. Modelda ranglar boʻlsa, `.obj` yonida `.mtl` yuklab olinadi. Import qilingan teksturalar boʻlsa, `.obj`, `.mtl` va rasmlar birga bitta `.zip` sifatida yuklab olinadi.
- **Chegara:** 2 million uchi yoki yuza; 64 MB matn.

## glTF (.glb, .gltf)

Import va eksport, glTF 2.0.

- **Import:** `.glb`, yoki `.gltf` uning `.bin` va tekstura fayllari bilan birga: hammasini birdan koʻrinishga tashlang (yoki `.glb` ni tanlang). Oʻzi berilgan `.gltf` kerakli faylni koʻrsatadi: "Bu .gltf fayli "…" faylini talab qiladi: .glb versiyasini oching yoki .gltf ni uning fayllari bilan birga tashlang."
  - **Meshlar** [meshlar](topic:meshes) sifatida keladi, fayldagi har bir mesh uchun bittadan, fayl normallari, tekstura koordinatalari va uchma-uch ranglari ular bilan birga. Fayl normallari uzilgan joylardagi qirralar qattiq; qolganlari yumshoq. Bir necha joyda ishlatilgan mesh umumiy boʻlib qoladi.
  - **Tugunlar** guruhlarga aylanadi, faylda qanday nomlangan boʻlsa shunday. Nusxalangan meshlar (EXT_mesh_gpu_instancing) bitta mesh sifatida keladi, koʻp marta joylashtirilgan.
  - **Materiallar:** asosiy rang teksturasi (PNG, JPEG yoki WebP) fayl tekstura koordinatalari (tekstura oʻzgartirishi bilan birga) boʻyicha joylashtirilgan tekstura sifatida keladi va saqlashda saqlanadi; aks holda asosiy rang. Metall, shero, normal xaritalar, shisha, qoplama qatlam, sheen va boshqa material kengaytmalari oʻqiladi, lekin hali saqlanmaydi: holat satri buni aytadi.
  - **Yorugʻliklar** (KHR_lights_punctual): nuqtaviy va yoʻnaltirilgan yorugʻliklar [lampalar](topic:lights) boʻladi. Yoʻnaltirilgan yorugʻliklar sanaladi: quyosh modelni yoritadi.
  - **Kameralar** [sahnalarga](topic:scenes) aylanadi.
  - **Skinli personajlar** fayl ularni qoʻygan holatda, turgan holda keladi; ularning suyaklari, animatsiyalari va morf nishonlari sanaladi va hali saqlanmaydi.
  - **Siqilgan fayllar** (Draco, meshopt) va kvantlangan maʼlumotlar oʻqiladi. Dekoderlar faqat kerak boʻlgan fayl uchun yuklanadi.
  - Nuqtalar va chiziqlar sanaladi va chiqarib tashlanadi (mesh yuzalardan iborat). KTX2 teksturalar chiqarib tashlanadi; yuzalar oʻz rangini saqlaydi.
- **Eksport** (`.glb`): glTF 2.0 ikkilik, metrlarda, Y yuqoriga. Har bir taʼrif uchun bitta mesh, shuning uchun komponentlar umumiy boʻlib qoladi. Meshlar normallari, tekstura koordinatalari va uchma-uch ranglarini saqlaydi; [yumshoq qirralar](topic:soften) bilan birlashgan yuzalar silliq normal oladi. Ranglar va materiallar materialga aylanadi (material — oʻz rangi bilan); import qilingan teksturalar teksturalar sifatida yoziladi. Yoqilgan lampalar nuqtaviy va yoʻnaltirilgan yorugʻliklarga aylanadi (maydon lampalarining glTF ekvivalenti yoʻq, ular chiqarib tashlanadi); sahnalar kameralarga aylanadi. Erkin qirralar chiqarib tashlanadi.
- **Chegara:** 300 MB gacha fayllar; taxminan 130 million geometriya raqami.

## STL (.stl)

Import va eksport.

- **Import:** ikkilik yoki ASCII. STL da birlik yoʻq: u **millimetrlarda** oʻqiladi, printerlar va ModelCraftʼning oʻz eksporti yozadigani kabi. Bir nuqtadagi burchaklar birlashtiriladi, shuning uchun yopiq detal yopiq [mesh](topic:meshes) sifatida keladi. Fayldagi ranglar (VisCAM / SolidView va Materialise konvensiyalari) yuzalarni boʻyaydi.
- **Eksport,** 3D bosma uchun: ikkilik STL, **millimetrlarda**, Z yuqoriga. Faqat uchburchaklar: guruhlar va erkin qirralar chiqarib tashlanadi. Boʻyalgan yuzalar oʻz rangini VisCAM / SolidView konvensiyasida saqlaydi, uni oʻqimaydigan boshqa dasturlar eʼtiborsiz qoldiradi. Toza bosma uchun yopiq yaxlit jismlarni eksport qiling.

## STEP (.step, .stp)

Faqat import. STEP — detal modelerlar va yetkazib beruvchilar yuboradigan format: AP203, AP214 va AP242 fayllar.

- **Import:** ModelCraft faylni oʻzi sahifada oʻqiydi va har bir yaxlit jismni uchburchaklardan iborat yopiq [mesh](topic:meshes) ga aylantiradi: tekis yuzalar tekis qoladi, egri yuzalar (silindrlar, konuslar, sferalar, torlar, B-spline sirtlar) koʻp kichik tekis yuzalarga aylanadi, bitta egri yuza ichidagi qirralar yumshoq, ikki yuza orasidagi qirralar esa oʻtkir boʻladi. STEP fayllar oʻz birligini aytadi; model oʻz haqiqiy oʻlchamida keladi. Yigʻma barcha detallar fayl ularni joylashtirgan joyda, har bir detal oʻz meshi bilan, fayl nomi bilan nomlangan guruhda keladi. Ranglar, yigʻma daraxtidagi detal nomlari va toʻgʻrilik belgilari (PMI) oʻqilmaydi.
- **Xabarlar:** oʻtkazib yuborilgan yoki yanada qoʻpol chizilgan narsalar holat satriga qoʻshiladi ("Eslatmalar: …"); yaxlit jismsiz fayl, buzilgan fayl yoki chegaradan oshgan fayl sababini aytadi va hech narsa qoʻshmaydi.
- **Chegara:** 300 MB gacha fayllar; 400 000 yuza va 8 million uchburchak.

## .3dm

Faqat import. `.3dm` fayllar NURBS modellarni saqlaydi: polisirtlar, sirtlar, meshlar, egri chiziqlar va bloklar.

- **Import:** ModelCraft faylni oʻzi sahifada oʻqiydi. Meshlar oʻz holicha keladi; polisirt yoki ekstruziyaning har bir yuzasi faylga saqlangan render meshidan olinadi, aks holda ModelCraft uni uchburchaklarga boʻladi (tekisliklar, NURBS sirtlar, aylanish sirtlari, ekstrudirlangan egri chiziqlar, ekstruziyalar; ularning qirralari bilan kesilgan, yopiq polisirtlar yopiq meshlar sifatida). Egri chiziqlar qirralarga, bloklar komponentlarga aylanadi (bloklar ichidagi bloklar saqlanadi), qatlamlar teglarga aylanadi (oʻchirilganda yashirin), obyektning rangi (oʻz, qatlamniki yoki materialniki) uning yuzalarini boʻyaydi. Fayl oʻz birligini aytadi; model oʻz haqiqiy oʻlchamida keladi. Qadamma-qadam: [.3dm modelini olib kirish](topic:import-3dm-files).
- **Xabarlar:** holat satri necha yuza saqlangan meshlardan, necha tasi uchburchaklarga boʻlinganini koʻrsatadi va nima chiqarib tashlanganini nomlaydi: nuqtalar, nuqtalar bulutlari, matn, oʻlchamlar, shtrixlashlar, yorugʻliklar, SubD obyektlar, hali oʻqilmagan sirt turlaridagi yuzalar, bogʻlangan bloklar.
- **Chegara:** 300 MB gacha fayllar.

## PLY (.ply)

Import va eksport, ranglari bor meshlar uchun (skanerlar, rangli 3D bosma, boshqa modelerlar).

- **Import:** ASCII va ikkilik. Yuzalar oʻz normallari, tekstura koordinatalari va uchma-uch ranglari saqlangan holda [mesh](topic:meshes) boʻladi; har bir yuza 4 096 rangning eng yaqinini oladi, shunda ranglarni hozir koʻrasiz. PLY da birlik yoki oʻqlar konvensiyasi yoʻq: koordinatalar qanday boʻlsa shunday keladi (metrlarda, Z yuqoriga). Faqat nuqtalardan iborat PLY nuqtalar bulutidir: uni BimCraft yoki CivilCraftʼda oching.
- **Eksport:** ikkilik PLY, pozitsiyalar, normallar va ranglar bilan (model ularga ega boʻlsa tekstura koordinatalari bilan ham), metrlarda, Z yuqoriga.

## FBX (.fbx)

Faqat import. FBX 7 fayllar (2011 dan keyingi), ikkilik yoki ASCII, ModelCraftʼning oʻz oʻqish dasturi bilan oʻqiladi.

- Meshlar [meshlar](topic:meshes) sifatida normallar, tekstura koordinatalari (har bir UV toʻplami) va uchma-uch ranglari bilan keladi; bir necha obyekt ishlatgan mesh umumiy boʻlib qoladi. Obyektlar oʻz transformatsiyalari bilan guruhlarga aylanadi (pivotlar, siljishlar va oldindan aylantirishlar hisobga olingan holda).
- Materiallar: diffuse tekstura — faylga joylashtirilgan yoki `.fbx` bilan birga tashlangan rasm — tekstura sifatida keladi (TGA rasmlari PNG sifatida saqlanadi); aks holda diffuse rang. Boshqa material sozlamalari yangi material modelini kutadi.
- Faylning yuqori oʻqi va birligi qoʻllanadi: hammasi Z yuqoriga, metrlarda keladi.
- Nuqtaviy va yoʻnaltirilgan yorugʻliklar [lampalarga](topic:lights) aylanadi (FBX intensivligi 100 — ModelCraftʼning standart lampasi, 800 lumen: FBX intensivliklari birligi yoʻq). Kameralar [sahnalarga](topic:scenes) aylanadi.
- Skinli personajlar tinch holatda keladi; suyaklar va animatsiyalar sanaladi va hali saqlanmaydi. Yoʻnaltirilgan va maydon yorugʻliklari hamda meshdan boshqa geometriya (NURBS, egri chiziqlar) sanaladi va chiqarib tashlanadi.
- FBX 6 va undan eski fayllar rad etiladi: ularni FBX 2011 yoki undan yangi formatda qayta saqlang.

## Alembic (.abc)

Faqat import: animatsiya va effekt dasturlaridan geometriya keshlari.

- Meshlar (poligon va subdivision meshlar) tekstura koordinatalari va normallari bilan [meshlar](topic:meshes) sifatida keladi; transformatsiyalar guruhlarga aylanadi. Alembic Y yuqoriga, u Z yuqoriga aylantiriladi; metrlarda.
- Koʻp namunali kesh (animatsiya) birinchi namunasi bilan keladi; holat satri uning nechta namunasi borligini koʻrsatadi.
- Nuqtalar, egri chiziqlar, NURBS sirtlar, kameralar va yorugʻliklar sanaladi va chiqarib tashlanadi. Eski HDF5 tuzilmali fayllar rad etiladi: ularni Ogawa Alembic fayli sifatida qayta saqlang.

{{ui:3D bosma uchun tekshirish (STL yoki 3MF)…}} avval shaklni tekshiradi, soʻngra tanlovni yoki koʻrinib turgan hammasini yozadi. Qarang: [3D bosma uchun modelni tayyorlash](topic:print-3d).

## 3MF (.3mf)

Faqat eksport, {{ui:3D bosma uchun tekshirish (STL yoki 3MF)…}} dan. 3MF asosiy: **millimetrlarda** bitta mesh, Z yuqoriga, ranglari materiallar sifatida. Koʻpchilik slayserlar uni oʻqiydi va STL dan farqli oʻlaroq birligini aytadi. Yashirin narsalar chiqarib tashlanadi. Qarang: [3D bosma uchun modelni tayyorlash](topic:print-3d).

## DWG va DXF eksport (.dwg, .dxf)

CAD dasturlari uchun. Model oʻz birligida yoziladi: futli-dyuymli modellar uchun dyuymda, aks holda millimetr, santimetr yoki metrda (holat satri nomini koʻrsatadi).

- **Yuzalar** 3D yuzalarga (uchburchaklar) aylanadi. Yuza ichidagi chiziqlar va yumshoq qirralar koʻrinmas qilib yoziladi, shuning uchun yuzalar ModelCraftdagidek koʻrinadi.
- **Erkin qirralar** chiziqlarga aylanadi.
- **Guruhlar va komponentlar** bloklarga aylanadi: komponent bir marta yoziladi va ishlatilgan har safar joylashtiriladi, burilgan va akslantirilgan nusxalar ham shu jumladan. Burilgandan keyin choʻzilgan (shuning uchun qiyshiq) guruh oʻz joyida yoziladi.
- **Ranglar:** DWG har bir yuzaning rangini aniq saqlaydi; DXF 255 ta standart CAD rangining eng yaqinini oladi.
- **Versiyalar:** DWG AutoCAD 2004 (AC1018) sifatida yoziladi, uni 2004 dan keyingi CAD dasturlari ochadi. DXF R12 (AC1009), uni har bir CAD dasturi oʻqiydi; R12 da birlik maydoni yoʻq, shuning uchun CAD dasturiga qaysi birlikni ishlatishni ayting.
- **Yozilmaydi:** yoʻriqnomalar, oʻlchamlar, sahnalar va kamera.

## IFC (.ifc)

Faqat eksport, BimCraft va boshqa BIM dasturlari uchun. Loyiha, maydon, bino va uning qavatlari bilan IFC4. Har bir yuqori darajadagi guruh yoki komponent oʻz nomi bilan bitta bino elementi proksisi boʻladi; yopiqlari yaxlit shakllar sifatida yoziladi (faset brep), ochiqlari sirt modellari sifatida; yuzalardagi teshiklar saqlanadi. Yuqori darajadagi erkin geometriya "Erkin geometriya" deb nomlangan bitta element boʻladi. Turlar, xususiyatlar yoki materiallar yoʻq.

**Qavatlar:** {{ui:Eksport}} › {{ui:IFC qavatlari…}} ularni roʻyxatlaydi, har biri nomi va balandligi bilan ({{ui:Qavat qoʻshish}} yoki {{ui:Modeldan aniqlash}}, u yuqori darajadagi guruhlaringiz turgan har bir balandlik uchun bitta qavat yaratadi). Eksportda har bir guruh yoki komponent oʻzining eng past nuqtasida yoki undan pastda turgan qavatga tushadi va oʻz joyini saqlaydi. Qavat boʻlmasa, hammasi "Level 1" nomli bitta qavatga, 0 balandlikda tushadi. Qavatlar ModelCraft faylida saqlanadi.

## DWG (.dwg) va DXF (.dxf)

Yer sathidagi chiziqlar sifatida import qilinadi (shtrixlashlar va 3D yuzalar yuzalar sifatida); yuqorida tavsiflanganidek eksport qilinadi. Qarang: [Model site rejasida](topic:site-plan).

- **Oʻqish:** chiziqlar, polichiziqlar (yoylari bilan), 3D polichiziqlar, aylanalar, yoylar va blok havolalari (massivlar bilan), model fazosidan. Koʻrinmas obyektlar (dinamik blokning yashirin holatlari kabi) chiqarib tashlanadi. Egri chiziqlar toʻliq aylanada 48 ta toʻgʻri boʻlakka aylanadi.
- **0.4 dan oʻqiladi:** splaynlar va ellipslar (qirralar sifatida), matn, koʻp qatorli matn va atribut qiymatlari (yagona chiziqli yozuvda qirralar sifatida), shtrixlashlar (teshiklari bilan yuzalar), 3D yuzalar va qattiq toʻldirishlar (yuzalar), hamda oʻlchamlar (chizmaning oʻz oʻlcham bloklaridan chizilgan).
- **0.7 dan oʻqiladi:** 3D qattiq jismlar, mintaqalar va jismlar (ularning ACIS maʼlumotlari, har bir versiyadagi DWG va DXF), har biri oʻz guruhi sifatida, yopiqlari yaxlit jismlar. Tekisliklar, silindrlar, konuslar, sferalar, torlar va oddiy splayn sirtlardan boshqa sirtlardagi yuzalar chiqarib tashlanadi va roʻyxatga olinadi.
- **Oʻqilmaydi:** nuqtalar, jadvallar, koʻp yetakchilar, rasmlar va qogʻoz fazosidagi hamma narsa.
- **Birliklar:** chizma aytsa, undan olinadi. Aks holda ModelCraft soʻraydi.
- **DXF** ASCII boʻlishi kerak. Ikkilik DXF rad etiladi.
- **DWG** fayllari AutoCAD R13 dan hozirgi formatgacha (AutoCAD 2018 va undan keyingi; AC1012 dan AC1032 gacha) ModelCraftʼning oʻz DWG oʻqish dasturi bilan oʻqiladi, sahifada; bu ModelCraftʼning bir qismi, shuning uchun ModelCraft oflaynda ishlaganda u ham oflaynda ishlaydi. Eski versiyalar (R12 va undan oldin) va qattiq buzilgan fayllar oʻqilmaydi; ularni DXF sifatida saqlang.
- **Chegaralar:** koordinatalar boshidan 10 000 km dan uzoq yoki 2 milliondan ortiq chiziq boʻlagidan iborat boʻlsa, rad etiladi.

## SKP fayllar

{{ui:Import}} (yoki faylni koʻrinishga tashlang) SketchUp fayllarini ModelCraftʼning oʻz oʻqish dasturi bilan, sahifada oʻqiydi: hech narsa yuklanmaydi va ModelCraft oflaynda ishlaganda u ham ishlaydi. Sinovdan oʻtgan fayllar: SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 va 2026 versiyalari; boshqa versiyalar ham ochilishi kerak, lekin hali sinab koʻrilmagan. Model bitta guruh sifatida keladi, fayl nomi bilan nomlangan. Bitta {{key:Mod+Z}} uni yana olib tashlaydi. Qadamma-qadam: [SKP modelini olib kirish](topic:import-sketchup-files).

- **Saqlanadi:** teshiklari bilan yuzalar, guruhlar (guruh sifatida) va komponentlar (komponent sifatida, umumiy), ularning nomlari va joylashuvlari, ranglar, guruh va komponentlardagi teglar, yuza tarkibiga kirmagan qirralar, yumshoq va silliq qirralar, shuning uchun egri sirtlar silliq qoladi.
- **Ranglar:** yuzaning oʻz materiali uning rangini beradi. Guruh yoki komponentga surtilgan material shu joylashtirishning boʻyogʻiga aylanadi, shuning uchun ichidagi oʻz rangi boʻlmagan yuzalar uni oladi, SketchUpʼdagidek; ikki rangga boʻyalgan komponent bitta komponent boʻlib qoladi.
- **Teglar** guruh va komponentlarda ModelCraft teglariga aylanadi, koʻrinadigan yoki yashirin xuddi shunday holatda. Erkin yuzalar va qirralardagi teglar saqlanmaydi (ModelCraft teglari faqat guruh va komponentlarga qoʻllanadi); holat satri ularni sanaydi.
- **Yashirin narsalar yashirin holda keladi** (yuzalar, qirralar, guruhlar, komponentlar, hamda yashirin tegdagi yuzalar va qirralar), shuning uchun SketchUp koʻrsatganini koʻrasiz; {{ui:Hammasini koʻrsatish}} ularni koʻrsatadi.
- **Teksturalar:** teksturali material bilan boʻyalgan yuza teksturasini saqlaydi, fayldagidek joylashtirilgan holda, va ModelCraft fayli rasmni saqlaydi. Butun guruh yoki komponentdagi tekstura, faylda yoʻq tekstura yoki brauzerlar koʻrsata olmaydigan rasm (masalan, Photoshop fayli) faqat materialning rangini saqlaydi.
- **Chiqarib tashlanadi va holat satrida sanaladi:** modelga joylashtirilgan rasmlar. Matn, oʻlchamlar, yoʻriqnomalar, kesim tekisliklari, sahnalar va uslublar oʻqilmaydi.
- **Birliklar:** SketchUp fayllari ichkarida dyuymda; ModelCraft ularni aylantiradi, shuning uchun oʻlchamlar istalgan birlikda toʻgʻri chiqadi.
- **`.skp` saqlash** hali yaratilmagan. Modelni SketchUpʼga qaytarish uchun Collada (`.dae`) ni eksport qiling.

## Qoʻllab-quvvatlanmaydi

ModelCraft 3DS yoki IFC fayllarni ocha olmaydi va 3DS, FBX, STEP, `.3dm` yoki SketchUp (`.skp`) fayllarini saqlay olmaydi.
