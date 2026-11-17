---
title: Ochish, saqlash, import va eksport
summary: ModelCraft fayli, ichkariga olish va tashqariga yuborish mumkin boʻlgan fayllar, fayllar qayerga borishi va oflayn rejimda hamda brauzerlar orasida nima oʻzgarishi.
keywords: ochish, saqlash, import, eksport, fayl, 3dm, skp, tiklash, avtosaqlash, soʻnggi, ish stoli, 3D da ochish, uzatish, yuklab olish, modelcraft fayli, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formatlar, oflayn, boshqacha saqlash
from: 3f09ab72
---

ModelCraft kompyuteringizdagi fayllarni oʻqiydi va yozadi. Hech narsa yuklanmaydi: ochgan faylingiz brauzeringizda oʻqiladi, saqlagan faylingiz esa yuklab olinadigan fayl boʻladi. Qarang: [Fayllaringiz qayerga boradi](common:your-files).

## Formatlar qisqacha

| Format | Ochish | Import | Eksport | Vazifasi |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | ha | yoʻq | {{ui:Save}} | Ishchi faylingiz. Hammasini saqlaydi. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | ha | ha | {{ui:Save as}}, {{ui:Export}} | Renderlash va sahna yigʻish dasturlari. ModelCraftʼning oʻz USD fayli hammasini saqlaydi. Qarang: [USD ni saqlash, ochish va eksport qilish](topic:usd). |
| SketchUp (`.skp`) | yoʻq | ha | yoʻq | SketchUp dan modellarni olib kelish. Guruhlar, komponentlar, ranglar, yuzalardagi teksturalar, teglar va yumshoq qirralarni saqlaydi. Qarang: [SKP modelini olib kelish](topic:import-sketchup-files). |
| Collada (`.dae`) | yoʻq | ha | ha | Boshqa 3D modelerlar bilan modellar almashish. Guruhlar, komponentlar va ranglarni saqlaydi. |
| OBJ (`.obj`) | yoʻq | ha | ha | Renderlash va vizualizatsiya dasturlari. |
| glTF (`.glb`, `.gltf`) | yoʻq | ha | faqat `.glb` | Veb-koʻruvchilar, oʻyin dvigatellari, AR. |
| STL (`.stl`) | yoʻq | ha | ha | 3D bosma (millimetrda). |
| PLY (`.ply`) | yoʻq | ha | ha | Ranglari bor meshlar: skanerlar, rangli bosma. |
| FBX (`.fbx`) | yoʻq | ha | yoʻq | Animatsiya va oʻyin dasturlaridagi modellar (FBX 2011 va undan yangilari). |
| Alembic (`.abc`) | yoʻq | ha | yoʻq | Geometriya keshlari, birinchi namunasida. |
| STEP (`.step`, `.stp`) | yoʻq | ha | yoʻq | Detal modelerlari va yetkazib beruvchilardan detallar, haqiqiy oʻlchamda, yopiq meshlar sifatida. Qarang: [Fayl formatlari](topic:formats). |
| `.3dm` | yoʻq | ha | yoʻq | NURBS modellari: politsirtlar, meshlar, egri chiziqlar, bloklar va qatlamlar, meshlar, qirralar, komponentlar va teglar sifatida. Qarang: [.3dm modelini olib kelish](topic:import-3dm-files). |
| 3MF (`.3mf`) | yoʻq | yoʻq | ha | 3D bosma, ranglar bilan (millimetrda). {{ui:Check for 3D printing (STL or 3MF)…}} dan: qarang [Modelni 3D bosmaga tayyorlash](topic:print-3d). |
| IFC (`.ifc`) | yoʻq | yoʻq | ha | BIM dasturlari va BimCraft. |
| DWG (`.dwg`) | yoʻq | ha | ha | Modellash uchun situatsion reja yoki qavat rejasi; modelni CAD dasturiga yuborish. |
| DXF (`.dxf`) | yoʻq | ha | ha | Xuddi shu, istalgan CAD dasturi uchun. |

[Fayl formatlari batafsil](topic:formats) har bir formatda nimalar saqlanishi va nimalar qoldirilishini koʻrsatadi.

## ModelCraft fayli

`.modelcraft` fayli butun modelni saqlaydi: geometriya, guruhlar, komponentlar, yoʻriqnomalar, sahnalar, birliklar, shuningdek saqlaganingizda ishlatgan kamera va uslub. Bekor qilish tarixini saqlamaydi.

### Modelni ochish

1. {{ui:File}} guruhidagi {{ui:Open}} tugmasini bosing yoki {{key:Mod+O}} ni bosing.
2. Ekrandagi modelda saqlanmagan oʻzgarishlar boʻlsa, ModelCraft soʻraydi: "Bu modelda saqlanmagan oʻzgarishlar bor. Avval nusxasini saqlaymizmi?" {{ui:Save a copy}}, {{ui:Discard changes}} yoki {{ui:Cancel}} ni tanlang.
3. `.modelcraft` faylini tanlang.

Model saqlangan birliklarda va saqlangan kamera bilan ochiladi. Shuningdek, `.modelcraft` faylini 3D koʻrinishga sudrab tashlashingiz yoki boshlash kartasidagi soʻnggi fayllar roʻyxatidan bosishingiz mumkin (faylni qayta ochishga qodir brauzerlar va ish stoli ilovasi).

:::desktop
Ish stoli ilovasida `.modelcraft` faylini ikki marta bosish uni ModelCraft da ochadi, Collada, OBJ, glTF, DWG yoki DXF faylida **Bilan ochish** ham shunday ishlaydi (u yangi modelga import qilinadi).
:::

### Modelni saqlash

{{ui:Save}} tugmasini bosing yoki {{key:Mod+S}} ni bosing. Brauzer `<name>.modelcraft` faylini yuklab oladi, bu yerda nom ochilgan faylning nomi, yangi model uchun esa "Untitled".

:::desktop
Ish stoli ilovasida {{ui:Save}} ochilgan faylni oʻsha joyga yozadi. Yangi model uchun manzil soʻraladi.
:::

- {{ui:Save as}} ({{key:Mod+Shift+S}}) nusxani `.modelcraft` fayli yoki [USD](topic:usd) sifatida saqlaydi; brauzer imkon bersa, nom va joyni soʻraydi. Aks holda yuklab olingan faylni qayta nomlang: qayta nomlangan faylni ochganingizdan keyingi saqlash yangi nomni ishlatadi.
- Har bir saqlash yangi yuklab olish boʻladi. Brauzer sozlamalariga qarab, u toʻgʻridan-toʻgʻri yuklamalar jildiga tushadi yoki qayerga saqlashni soʻraydi. Shu nomdagi fayl allaqachon boʻlsa, koʻpchilik brauzerlar `Untitled (1).modelcraft` kabi raqam qoʻshadi.

:::chromium
Har safar jildni tanlash uchun brauzer sozlamalarini oching, "downloads" ni qidiring va "Yuklashdan oldin har bir faylni qayerga saqlashni soʻrash" ni yoqing.
:::

:::firefox
Har safar jildni tanlash uchun **Sozlamalar** ni oching, keyin **Umumiy** ga oʻting va "Yuklamalar" boʻlimida "Fayllarni qayerga saqlashni har doim soʻrash" ni tanlang.
:::

:::safari
Yuklab olish joyini oʻzgartirish uchun **Safari** ni, keyin **Sozlamalar** ni, keyin **Umumiy** ni oching va "Fayl yuklab olish joyi" ni sozlang.
:::

### Yangi model boshlash

{{ui:New}} tugmasini bosing. Saqlanmagan oʻzgarishlar boʻlsa, ModelCraft avval soʻraydi. Yangi model boʻsh holda, mahalliy birlikda boshlanadi (AQShda fut va dyuym, boshqa joylarda millimetr), sahnalarsiz.

### Brauzer saqlashdan oldin yopilsa

ModelCraft har bir oʻzgarishdan bir necha soniya keyin saqlanmagan ishning nusxasini brauzeringizda saqlab turadi. Nusxa fonda yoziladi, shuning uchun katta model sizni kutib turmaydi. Agar vkladka yoki brauzer saqlashdan oldin yopilsa, ModelCraft keyingi ochilishda "Ishingizni tiklaymizmi?" deb soʻraydi. Tiklash modelni oʻsha holatda ochadi, lekin hali faylga saqlanmagan boʻladi: uni saqlang. Qarang: [Ishingizni tiklash](common:recover).

### CadCraft dan: ModelCraft da ochish

CadCraft chizmachilik ilovasida **Koʻrinish**, keyin **Yana**, keyin **ModelCraft da ochish** ochiq chizmani yangi vkladkada DWG sifatida ModelCraft ga uzatadi. U import qilingan DWG kabi keladi: yer ustidagi chiziqlar, guruhda, modellashga tayyor. Hech narsa yuklanmaydi; fayl brauzeringizning oʻz xotirasi orqali oʻtadi.

## Import

Import faylni ochiq modelga qoʻshadi; uni almashtirmaydi.

1. {{ui:File}} guruhidagi {{ui:Import}} tugmasini bosing yoki faylni 3D koʻrinishga tashlang.
2. SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG yoki DXF faylini tanlang.

   Fayl **bitta guruh** sifatida keladi, tanlangan holda, va koʻrinish uni koʻrsatish uchun kattalashadi. Holat satrida nima kelgani va import qilinmagan narsalar koʻrsatiladi, masalan "Import qilinmadi: 2 ta tekstura".

3. Uning geometriyasi bilan toʻgʻridan-toʻgʻri ishlash uchun guruhni ikki marta bosib ichiga kiring yoki {{ui:Explode}} tugmasini bosing.

Bilishingiz kerak boʻlgan baʼzi narsalar:

- **Oʻlcham va yuqori yoʻnalish:** Collada fayllari oʻz birligini va qaysi oʻq yuqoriga qarashini aytadi, ModelCraft ularni aylantiradi. glTF har doim metrda boʻladi. OBJ fayllarida birlik yoʻq: ModelCraft ularni metr va Y yuqoriga qaragan deb oʻqiydi. Agar OBJ 1000 marta katta yoki kichik kelsa, [Masshtablash](topic:rotate-scale) ni `0.001` yoki `1000` kabi koeffitsiyent bilan ishlating.
- **DWG va DXF** yuzalar emas, yer ustidagi chiziqlar (qirralar) sifatida keladi. Agar chizma oʻz birligini aytmasa, "Chizma birliklari" nomli dialog bir chizma birligi nima ekanini soʻraydi. Qarang: [Situatsion rejada modellash](topic:site-plan).
- **Chegaralar:** 300 MB dan katta fayllar importga, 200 MB dan katta fayllar ochishga qabul qilinmaydi. 2 milliondan ortiq uchi yoki yuzasi boʻlgan fayllar juda katta deb rad etiladi. 64 MB dan katta OBJ oʻqilishdan oldin rad etiladi. Matnli fayllar (Collada, OBJ, ASCII STL, USD matn) taxminan 4 MB boʻlaklab oʻqiladi, shuning uchun hech bir matn bloki butun faylni ushlab turmaydi. Bizning sinovimizda 16 MB OBJ ochilayotganda taxminan 0.5 GB xotira ishlatdi.

## Eksport

1. {{ui:File}} guruhidagi {{ui:Export}} tugmasini bosing.
2. Formatni tanlang: {{ui:glTF binary (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL for printing (.stl, millimeters)}}, {{ui:PLY with colours (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC for BimCraft (.ifc)}}, {{ui:DWG for CAD (.dwg, 2004)}} yoki {{ui:DXF for CAD (.dxf, R12)}}.

Brauzer faylni yuklab oladi, u model nomi bilan nomlanadi. Tanlovgina emas, butun model eksport qilinadi. glTF, Collada va OBJ fayllari fonda yoziladi, shuning uchun katta model eksport qilinayotganda ham ModelCraft ishlashda davom etadi; yuklab olish fayl tayyor boʻlganda boshlanadi. Boʻsh model eksport qilinmaydi: "Model boʻsh: avval biror narsa chizing." Qarang: [Modelni boshqa dasturlar uchun eksport qilish](topic:export-model).

## Onlayn va oflayn

ModelCraft kompyuteringizda ishlaydi, shuning uchun dastur yuklangandan keyin modellash, ochish, saqlash, import va eksport ulanishsiz ham ishlaydi.

ModelCraft ni umuman ulanishsiz ochish uchun, onlayn turganingizda uni oflayn saqlang:

1. Yuqoridagi ilova panelida {{ui:Save for offline}} tugmasini bosing.
2. Saqlash vaqtida tugma sanaydi ("Saqlanmoqda: 40 / 212"). ModelCraft oʻz fayllarini (shu jumladan DWG oʻquvchisini), ushbu yordamni va 3D kutubxonani saqlaydi, shuning uchun biroz vaqt olishi mumkin.
3. Tugmada {{ui:Offline ready}} yozilganda, ModelCraft ulanishsiz oʻsha manzildan ochiladi va DWG import ham oflayn ishlaydi.

Keyinroq {{ui:Offline ready}} tugmasini bosing: {{ui:Save again (get the newest version)}} yoki {{ui:Remove the offline copy}}. Agar tugmada {{ui:Could not save}} yozilsa, baʼzi fayllar yuklanmagan: ulanishni tekshiring va qayta urinish uchun bosing. {{ui:Offline not available}} degani, bu brauzer oynasi nusxa saqlay olmaydi (shaxsiy oynalar va baʼzi boshqariladigan kompyuterlar). Qarang: [Oflayn ishlash](common:offline).

Bulutli saqlash hali mavjud emas. Har bir model qayerda saqlasangiz, oʻsha yerda turadi.

:::offline
Siz oflaynsiz. Modellashni va saqlashni davom ettirishingiz mumkin. Ilova panelida {{ui:Offline ready}} koʻrinmasa, qaytadan onlayn boʻlguncha bu vkladkani qayta yuklamang.
:::

## Ish stoli ilovasi

:::desktop
Siz ModelCraft ni CadCraft Studio ish stoli ilovasida ishlatyapsiz, sakkizta ilovaning hammasi bilan. Fayllar siz tanlagan joyda ochiladi va saqlanadi.
:::

:::web
ModelCraft Mac, Windows va Linux da brauzerda ishlaydi, shuningdek CadCraft Studio ish stoli ilovasida, sakkizta ilovaning hammasi bitta oʻrnatishda, getcadcraft.com/download dan.
:::
