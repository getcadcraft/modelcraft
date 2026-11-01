---
title: Ochish, saqlash, import va eksport
summary: ModelCraft fayli, qanday fayllarni kiritish va yuborish mumkinligi, fayllar qayerga borishi hamda oflaynda va brauzerlar oʻrtasida nima oʻzgarishi.
keywords: ochish, saqlash, import, eksport, fayl, 3dm, skp, tiklash, avtosaqlash, oxirgilar, ish stoli, 3d da ochish, uzatish, yuklab olish, modelcraft fayli, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formatlar, oflayn, boshqacha saqlash
from: 0b4896d1
---

ModelCraft kompyuteringizdagi fayllarni oʻqiydi va yozadi. Hech narsa yuklanmaydi: siz ochgan fayl brauzeringiz ichida oʻqiladi, saqlagan faylingiz esa yuklab olinadi. Qarang: [Fayllaringiz qayerga boradi](common:your-files).

## Formatlar qisqacha

| Format | Ochish | Import | Eksport | Nima uchun |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | ha | yoʻq | {{ui:Saqlash}} | Ishchi faylingiz. Hammasini saqlaydi. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | ha | ha | {{ui:Boshqacha saqlash}}, {{ui:Eksport}} | Render va sahna yigʻish dasturlari. ModelCraft ning oʻz USD fayli hammasini saqlaydi. [USD ni saqlash, ochish va eksport qilish](topic:usd) ga qarang. |
| SketchUp (`.skp`) | yoʻq | ha | yoʻq | SketchUp dan modellarni olib kelish. Guruhlar, komponentlar, ranglar, yuzalardagi teksturalar, teglar va yumshoq qirralarni saqlaydi. [SKP modelini olib kelish](topic:import-sketchup-files) ga qarang. |
| Collada (`.dae`) | yoʻq | ha | ha | Boshqa 3D modelerlar bilan modellar almashish. Guruhlar, komponentlar va ranglarni saqlaydi. |
| OBJ (`.obj`) | yoʻq | ha | ha | Render va vizualizatsiya dasturlari. |
| glTF (`.glb`, `.gltf`) | yoʻq | ha | faqat `.glb` | Veb koʻrsatuvchilar, oʻyin dvigatellari, AR. |
| STL (`.stl`) | yoʻq | ha | ha | 3D bosma (millimetrda). |
| PLY (`.ply`) | yoʻq | ha | ha | Ranglari bor meshlar: skanerlar, rangli bosma. |
| FBX (`.fbx`) | yoʻq | ha | yoʻq | Animatsiya va oʻyin dasturlaridan modellar (FBX 2011 va undan yangi). |
| Alembic (`.abc`) | yoʻq | ha | yoʻq | Geometriya keshlari, birinchi namunasida. |
| STEP (`.step`, `.stp`) | yoʻq | ha | yoʻq | Detal modelerlari va yetkazib beruvchilardan detallar, haqiqiy oʻlchamdagi yopiq meshlar sifatida. [Fayl formatlari](topic:formats) ga qarang. |
| `.3dm` | yoʻq | ha | yoʻq | NURBS modellar: polisirtlar, meshlar, egri chiziqlar, bloklar va qatlamlar, meshlar, qirralar, komponentlar va teglar sifatida. [.3dm modelini olib kelish](topic:import-3dm-files) ga qarang. |
| 3MF (`.3mf`) | yoʻq | yoʻq | ha | 3D bosma, ranglar bilan (millimetrda). {{ui:3D bosma uchun tekshirish (STL yoki 3MF)…}} dan: [3D bosma uchun modelni tayyorlash](topic:print-3d) ga qarang. |
| IFC (`.ifc`) | yoʻq | yoʻq | ha | BIM dasturlari va BimCraft. |
| DWG (`.dwg`) | yoʻq | ha | ha | Modellash uchun joy rejasi yoki qavat rejasi; modelni CAD dasturiga yuborish. |
| DXF (`.dxf`) | yoʻq | ha | ha | Xuddi shunday, istalgan CAD dasturi uchun. |

[Fayl formatlari batafsil](topic:formats) har bir formatda nimalar saqlanishi va nimalar qoldirilishini aniq koʻrsatadi.

## ModelCraft fayli

`.modelcraft` fayli butun modelni saqlaydi: geometriya, guruhlar, komponentlar, yoʻriqnomalar, sahnalar, birliklar, hamda saqlash vaqtida ishlatgan kamera va uslub. Bekor qilish tarixini saqlamaydi.

### Modelni ochish

1. {{ui:Fayl}} guruhidagi {{ui:Ochish}} ni bosing yoki {{key:Mod+O}} ni bosing.
2. Ekrandagi modelda saqlanmagan oʻzgarishlar boʻlsa, ModelCraft soraydi: "Bu modelda saqlanmagan oʻzgarishlar bor. Avval nusxasini saqlaysizmi?" {{ui:Nusxasini saqlash}}, {{ui:Oʻzgarishlarni bekor qilish}} yoki {{ui:Bekor qilish}} ni tanlang.
3. `.modelcraft` faylini tanlang.

Model saqlangan birliklarda, saqlangan kamera bilan ochiladi. `.modelcraft` faylini 3D koʻrinishga sudrab tashlashingiz yoki boshlash kartasidagi soʻnggi fayllar roʻyxatidan bosishingiz ham mumkin (faylni qayta ochish imkoniga ega brauzerlar va ish stoli ilovasi).

:::desktop
Ish stoli ilovasida `.modelcraft` faylini ikki marta bosish uni ModelCraft da ochadi, shuningdek Collada, OBJ, glTF, DWG yoki DXF faylida **Bilan ochish** ham xuddi shunday qiladi (u yangi modelga import qilinadi).
:::

### Modelni saqlash

{{ui:Saqlash}} ni bosing yoki {{key:Mod+S}} ni bosing. Brauzer `<name>.modelcraft` faylini yuklab oladi, bu yerda nom — ochgan faylingiz nomi, yangi model uchun esa "Untitled".

:::desktop
Ish stoli ilovasida {{ui:Saqlash}} ochgan faylingizga oʻsha joyning oʻzida yozadi. Yangi model uchun qayerga saqlashni soʻraydi.
:::

- {{ui:Boshqacha saqlash}} ({{key:Mod+Shift+S}}) nusxani `.modelcraft` fayli yoki [USD](topic:usd) sifatida saqlaydi; brauzer imkon bersa, nom va joyni soraydi. Aks holda yuklab olingan faylni qayta nomlang: qayta nomlangan faylni ochgandan keyingi navbatdagi saqlash yangi nomdan foydalanadi.
- Har bir saqlash yangi yuklab olishdir. Brauzer sozlamalariga qarab, u toʻgʻridan-toʻgʻri yuklab olishlar jildiga tushadi yoki qayerga saqlashni soʻraydi. Shu nomli fayl allaqachon boʻlsa, koʻpchilik brauzerlar `Untitled (1).modelcraft` kabi raqam qoʻshadi.

:::chromium
Har safar jildni tanlash uchun brauzer sozlamalarini oching, "downloads" ni qidiring va "Ask where to save each file before downloading" ni yoqing.
:::

:::firefox
Har safar jildni tanlash uchun **Sozlamalar** ni oching, soʻng **General** ni, va "Downloads" ostida "Always ask you where to save files" ni tanlang.
:::

:::safari
Yuklab olishlar qayerga borishini oʻzgartirish uchun **Safari** ni oching, soʻng **Sozlamalar**, soʻng **General** ni oching va "File download location" ni belgilang.
:::

### Yangi model boshlash

{{ui:Yangi}} ni bosing. Saqlanmagan oʻzgarishlar boʻlsa, ModelCraft avval soraydi. Yangi model boʻsh holda, sizning mahalliy birligingizda ochiladi (AQShda futlar va duymlar, boshqa joylarda millimetrlar), sahnalarsiz.

### Saqlashdan oldin brauzer yopilsa

ModelCraft har bir oʻzgarishdan bir necha soniya keyin brauzeringizda saqlanmagan ishning nusxasini saqlab turadi. Saqlashdan oldin yorliq yoki brauzer yopilsa, ModelCraft keyingi ochilganda "Ishingizni tiklaysizmi?" deb soraydi. Tiklash modelni oʻz holicha ochadi, lekin hali faylga saqlanmagan boʻladi: saqlab qoʻying. [Ishingizni tiklash](common:recover) ga qarang.

### CadCraft dan: ModelCraft da ochish

CadCraft chizma ilovasida **Koʻrinish**, soʻng **Yana**, soʻng **ModelCraft da ochish** ochiq chizmani DWG sifatida yangi yorliqda ModelCraft ga uzatadi. U import qilingan DWG kabi keladi: yerdagi chiziqlar, guruhda, modellashtirishga tayyor. Hech narsa yuklanmaydi; fayl brauzeringizning oʻz xotirasidan oʻtadi.

## Import

Import ochiq modelga fayl qoʻshadi; uni almashtirmaydi.

1. {{ui:Fayl}} guruhidagi {{ui:Import}} ni bosing yoki faylni 3D koʻrinishga sudrab tashlang.
2. SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG yoki DXF faylini tanlang.

   Fayl **bitta guruh** sifatida keladi, tanlangan holda, va koʻrinish uni koʻrsatish uchun kattalashadi. Holat paneli nima kelganini aytadi va import qilinmagan narsalarni, masalan "Import qilinmadi: 2 tekstura" kabi, sanab beradi.

3. Uning geometriyasi bilan toʻgʻridan-toʻgʻri ishlash uchun guruhni ikki marta bosing va ichida tahrirlang, yoki {{ui:Parchalash}} ni bosing.

Bilish kerak boʻlgan ba’zi narsalar:

- **Oʻlcham va yuqoriga yoʻnalish:** Collada fayllari oʻz birligini va qaysi oʻq yuqoriga qaratilganini aytadi, ModelCraft ularni aylantiradi. glTF har doim metrda boʻladi. OBJ fayllarida birlik yoʻq: ModelCraft ularni metrda va Y yuqoriga qaratilgan deb oʻqiydi. Agar OBJ 1000 marta katta yoki kichik kelsa, `0.001` yoki `1000` kabi koeffitsiyent bilan [Masshtab](topic:rotate-scale) dan foydalaning.
- **DWG va DXF** yerdagi chiziqlar (qirralar) sifatida keladi, yuzalar sifatida emas. Agar chizma oʻz birligini koʻrsatmasa, "Chizma birliklari" nomli dialog bitta chizma birligi nima ekanini soraydi. [Joy rejasida modellash](topic:site-plan) ga qarang.
- **Cheklovlar:** 300 MB dan katta fayllar import uchun, 200 MB dan katta fayllar ochish uchun qabul qilinmaydi. 2 milliondan ortiq uchlari yoki yuzalari boʻlgan fayllar juda katta sifatida rad etiladi.

## Eksport

1. {{ui:Fayl}} guruhidagi {{ui:Eksport}} ni bosing.
2. Formatni tanlang: {{ui:glTF binar (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:Bosma uchun STL (.stl, millimetrda)}}, {{ui:Ranglari bilan PLY (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:BimCraft uchun IFC (.ifc)}}, {{ui:CAD uchun DWG (.dwg, 2004)}} yoki {{ui:CAD uchun DXF (.dxf, R12)}}.

Brauzer faylni yuklab oladi, u model nomi bilan ataladi. Butun model eksport qilinadi, faqat tanlov emas. Boʻsh model eksport qilinmaydi: "Model boʻsh: avval biror narsa chizing." [Modelni boshqa dasturlar uchun eksport qilish](topic:export-model) ga qarang.

## Onlayn va oflayn

ModelCraft dagi hamma narsa kompyuteringizda ishlaydi, shuning uchun ilova yuklangandan keyin modellash, ochish, saqlash, import va eksport ulanishsiz ishlaydi.

ModelCraft ni umuman ulanishsiz ochish uchun onlayn boʻlganingizda uni oflayn foydalanish uchun saqlang:

1. Yuqoridagi ilova panelidagi {{ui:Oflayn uchun saqlash}} ni bosing.
2. Saqlash davomida tugma sanaydi ("Saqlanmoqda: 212 tadan 40"). ModelCraft oʻz fayllarini saqlaydi (ularning ichida DWG oʻqish moduli ham bor), ushbu yordamni va 3D kutubxonani, shuning uchun bu biroz vaqt olishi mumkin.
3. Tugmada {{ui:Oflayn tayyor}} yozilganda ModelCraft ulanishsiz oʻsha manzildan ochiladi va DWG import ham oflaynda ishlaydi.

Keyinroq {{ui:Oflayn tayyor}} ni bosing: {{ui:Qayta saqlash (eng yangi versiyani olish)}} yoki {{ui:Oflayn nusxani oʻchirish}} uchun. Agar tugmada {{ui:Saqlab boʻlmadi}} yozilsa, baʼzi fayllar yuklanmagan: ulanishni tekshiring va qayta urinish uchun bosing. {{ui:Oflayn rejim mavjud emas}} degani bu brauzer oynasi nusxani saqlay olmaydi (shaxsiy oynalar va ayrim boshqariladigan kompyuterlar). [Oflaynda ishlash](common:offline) ga qarang.

Bulutli saqlash hozircha mavjud emas. Har bir model qayerda saqlasangiz, oʻsha yerda turadi.

:::offline
Siz oflaynsiz. Modellash va saqlashni davom ettirishingiz mumkin. Ilova panelida {{ui:Oflayn tayyor}} koʻrsatilmagan boʻlsa, onlayn boʻlguncha bu yorliqni qayta yuklamang.
:::

## Ish stoli ilovasi

:::desktop
Siz ModelCraft ni barcha sakkizta ilova bilan ish stoli ilovasi CadCraft Studio ichida ishlatyapsiz. Fayllar siz tanlagan joyda ochiladi va saqlanadi.
:::

:::web
ModelCraft Mac, Windows va Linux da brauzerda, shuningdek bitta oʻrnatishda barcha sakkizta ilova bilan ish stoli ilovasi CadCraft Studio da ishlaydi; uni getcadcraft.com/download dan oling.
:::
