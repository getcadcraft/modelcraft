---
title: Muammolarni bartaraf etish
summary: Belgilar, sabablar va tuzatishlar: boʻsh 3D koʻrinishdan notoʻgʻri oʻlchamdagi importgacha, ModelCraft koʻrsatadigan xabarlar bilan.
keywords: muammo, xato, ishlamayapti, boʻsh, webgl, grafika, sekin, xabar, import xatosi, notoʻgʻri oʻlcham, tanlab boʻlmaydi, sensorli ekran, tugmalar ishlamayapti, ish yoʻqolgan
from: 6e7394be
---

## 3D koʻrinish boʻsh

**Belgi:** ekranning oʻrtasi boʻsh qoladi yoki faqat fon rangini koʻrsatadi va asboblarni bosish hech narsa qilmaydi.

**Sabab:** ModelCraft WebGL 2 bilan chizadi, bu brauzerning 3D grafikasi. U eski brauzerda, apparat tezlashtirish oʻchiq boʻlganda yoki grafik drayver bloklanganda yoʻq boʻladi.

**Tuzatish:**

:::chromium
1. Brauzer sozlamalarini oching va "grafik tezlashtirish" ni qidiring.
2. "Mavjud boʻlganda grafik tezlashtirishdan foydalanish" ni yoqing va brauzerni qayta ishga tushiring.
3. Agar u allaqachon yoqiq boʻlsa, manzil satriga `chrome://gpu` yozing (Edge da `edge://gpu`) va roʻyxatda "WebGL2" ni qidiring. Agar u oʻchiq deyilgan boʻlsa, grafik drayverni yangilang.
:::

:::firefox
1. **Sozlamalar** ni, soʻng **Umumiy** ni oching va "Unumdorlik" ga pastga suring.
2. "Tavsiya etilgan unumdorlik sozlamalaridan foydalanish" ni belgilamang, soʻng "Mavjud boʻlganda apparat tezlashtirishdan foydalanish" ni belgilang. Firefox ni qayta ishga tushiring.
3. Hali ham ishlamasa, manzil satriga `about:support` yozing va "Graphics" boʻlimida WebGL 2 ni qarang.
:::

:::safari
macOS va Safari ni yangilang. Safari ning yangi versiyalarida WebGL 2 doim yoqiq. Agar **Safari**, soʻng **Sozlamalar**, soʻng **Ilgʻor** (yoki **Xususiyat bayroqlari**) ostida tajribaviy xususiyatlarni oʻzgartirgan boʻlsangiz, ularni qayta tiklang.
:::

Ish kompyuterida, masofaviy ish stolida yoki virtual mashinada 3D grafika siyosat boʻyicha bloklangan boʻlishi mumkin. Boshqa kompyuterda sinab koʻring. Qarang: [Brauzerlar va kompyuterlar](common:browsers).

## Tugmalar ishlamaydi yoki matn kiritiladi

**Sabab:** klaviatura fokusi panel maydonida: {{ui:Uslub}} dagi {{ui:Yuzalar}} roʻyxatida, quyosh sozlamasida, {{ui:Obyekt maʼlumoti}} dagi {{ui:Nom}} maydonida yoki birlik tanlagichida. Harflar va strelka tugmalari oʻsha maydonga boradi.

**Tuzatish:** 3D koʻrinishni bosing, soʻng tugmani yana bosing. Dialog oynasi ochiq boʻlsa ham tugmalar ishlamaydi.

## Raqam kiritish ishlamaydi

- **Hali yoʻnalish yoʻq.** Kiritilgan uzunlik birinchi bosishdan keyin koʻrsatkich qaraganiga qarab ketadi. Koʻrsatkichni istagan yoʻnalishga bir oz siljiting, soʻng kiriting.
- **Notoʻgʻri payt.** Koʻp asboblar kiritilgan qiymatni faqat birinchi bosishdan keyin qabul qiladi: avval birinchi burchakni, yuzani yoki siljitiladigan nuqtani bosing. {{ui:Aylana}} va {{ui:Koʻpburchak}} birinchi bosishdan oldin tomonlar sonini qabul qiladi.
- **"3m, 10'6" yoki 4m,3m kabi uzunlik kiriting."** ModelCraft uni oʻqiy olmadi. Oʻnlik vergul (`2,5`) bormi, tekshiring: nuqtadan foydalaning.

## Sensorli ekranda shakl notoʻgʻri joydan boshlanadi

**Belgi:** barmoq bilan birinchi toʻrtburchak toʻgʻri chiqadi, lekin keyingi toʻrtburchak, aylana yoki chiziq tegkan joyingizdan emas, oldingi tegish tugagan joydan boshlanadi.

**Sabab:** bu versiyadagi xato: sensorli ekranda asbob oldingi harakatdagi oxirgi tutish nuqtasini eslab qoladi.

**Tuzatish:** har bir yangi shakldan oldin asboblar panelidagi asbob tugmasini yana bir marta teging. Bu asbobni yangidan boshlaydi va birinchi nuqta tegkan joyingizga tushadi.

## Bitta guruhni tahrirlash boshqasini oʻzgartirdi

**Belgi:** {{ui:Koʻchirish}} va {{key:Ctrl}} bilan guruhni nusxaladingiz, bir nusxani ochib tahrirladingiz va boshqa nusxa ham oʻzgardi. {{ui:Obyektlar daraxti}} ikkalasini bir xil nom bilan koʻrsatadi.

**Sabab:** bu versiyada guruhni nusxalash komponentdagidek guruhning ikkinchi joylashuvini yaratadi. ModelCraft ning {{ui:Yagona qilish}} tugmasi faqat komponentlar uchun taklif qilinadi.

**Tuzatish:** oʻzgartirmoqchi boʻlgan nusxani tanlang, {{ui:Obyekt maʼlumoti}} da {{ui:Komponent yaratish}} tugmasini bosing, soʻng {{ui:Yagona qilish}}. Endi oʻsha nusxaning oʻz mazmuni bor. Yoki uni {{ui:Parchalash}}.

## Itarish/tortish kutilganidek ishlamaydi

- **"Itarish/tortish yuza bilan ishlaydi. Yuzani bosing."** Siz qirra yoki boʻsh joyni bosdingiz. Yuza yorugʻlanguncha koʻrsatkichni olib boring, soʻng bosing.
- **Yuza guruh ichida.** Avval guruhni ochish uchun uni ikki marta bosing.
- **Deraza devorni kesib oʻtmadi.** Toʻrtburchak devor yuzasida chizilgan boʻlishi kerak, uning oldida emas, va devorning orqa yuzasi boʻlishi kerak. Qarang: [Devorda teshik kesish](topic:openings#if-it-did-not-cut-through).
- **Ikki jism bir-biriga kirib, birlashmaydi.** Bir-biriga itarilgan qattiq jismlar bu versiyada bir-birini kesmaydi va birlashtirmaydi.

## Chiziq yoki shakl yuza hosil qilmadi

Yuza faqat qirralar yassi halqa hosil qilganda toʻldiriladi. Oxirgi nuqta birinchisiga tutilganini ("Uchi") va barcha qirralar bitta tekislikda ekanini tekshiring. Biroz tekislikdan chiqqan halqa chiziq boʻlib qoladi. Uning bir qirrasini burchaklarga tutib qayta chizing.

## Yuzani tanlab yoki oʻchira olmayman

- {{ui:Tanlash}} bilan qirra yaqinidagi bosish qirrani oladi. Yuzaning oʻrtasiga yaqinroq bosing.
- {{ui:Oʻchirgich}} yuzalarni olmaydi. Yuzani tanlang va {{key:Delete}} ni bosing yoki uning qirralaridan birini oʻchiring.
- Agar yuza guruh yoki komponentga tegishli boʻlsa, bosish butun narsani tanlaydi. Ochish uchun ikki marta bosing.

## "Avval biror narsani tanlang yoki unga bosing."

{{ui:Koʻchirish}}, {{ui:Aylantirish}} va {{ui:Masshtab}} ishlashi uchun biror narsa kerak: uni avval tanlang yoki asbobni narsaning oʻzini bosib boshlang (boʻsh joy yoki yoʻriqchini emas).

## "Avval biror geometriyani tanlang (oyna torting yoki bogʻliq hammasini tanlash uchun uch marta bosing)."

{{key:G}} va {{key:Shift+G}} tanlovni talab qiladi. Yoʻriqchilarni guruhlab boʻlmaydi.

## Strelka tugmalari qulflash oʻrniga aylantiradi

Qulflar faqat chizish yoki tahrirlash asbobining birinchi bosishidan keyin ishlaydi. {{ui:Itarish/tortish}} da qulf yoʻq, {{ui:Aylantirish}} da ular burilishni oʻzgartirmaydi. Boshqa vaqtda strelka tugmalari koʻrinishni aylantiradi.

## Esc toʻliq ekranda

Toʻliq ekranda brauzer birinchi {{key:Esc}} ni toʻliq ekrandan chiqish uchun ishlatishi mumkin. Asbobni bekor qilish uchun {{key:Esc}} ni yana bosing.

## Oʻrta tugma yoʻq

{{ui:Orbita}} uchun {{key:O}} ni bosing va sudrang, yoki strelka tugmalaridan foydalaning. Qarang: [Orbita, surish va kattalashtirish](topic:orbit-pan-zoom#without-a-middle-button).

## Importlar

| Xabar | Nima qilish kerak |
|---|---|
| "ModelCraft SketchUp (.skp), Collada (.dae), OBJ, glTF (.glb/.gltf), FBX, PLY, STL, Alembic (.abc), DWG va DXF ni import qiladi. … bulardan biri emas." | Modelni boshqa dasturdan shu formatlardan birida eksport qiling |
| "Bu fayl 300 MB dan katta." | Boshqa dasturda modelni soddalashtiring yoki boʻling |
| "…bu yerda modellash uchun juda katta (2 milliondan ortiq nuqta)." | Xuddi shunday |
| "Bu .gltf fayli "…" ni talab qiladi…" | `.gltf` ni `.bin` va tekstura fayllari bilan birga tashlang, yoki `.glb` versiyasini oching |
| "Bu glTF fayli … kengaytmasini talab qiladi, ModelCraft uni hali oʻqimaydi." | Boshqa dasturdan shu kengaytmasiz qayta eksport qiling (masalan, KTX2 teksturalar) |
| OBJ ranglarsiz yoki teksturalarsiz kiradi | `.obj` ni `.mtl` va rasmlari bilan birga tashlang |
| "Bu Alembic fayli eski HDF5 tuzilmasidan foydalanadi…" | Boshqa dasturdan Ogawa Alembic fayli sifatida qayta saqlang |
| FBX teksturalarsiz kiradi | `.fbx` ni teksturalar rasmlari bilan birga tashlang, yoki eksport qilishda media ni ichiga joylang |
| "Bu FBX fayli … versiyali, ModelCraft uni oʻqimaydi" | FBX 2011 yoki undan yangisi sifatida qayta eksport qiling |
| STL yoki PLY 1,000 marta katta yoki kichik kiradi | STL millimetrda, PLY metrda oʻqiladi: uni masshtablang (qarang: [Aylantirish va masshtablash](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)) |
| "Bu Collada (.dae) fayli emas…" yoki "…toʻgʻri shakllangan XML emas…" | Fayl buzilgan yoki Collada emas. Qayta eksport qiling |
| "Bu Collada faylida ModelCraft import qila oladigan geometriya yoʻq." | U faqat kameralar, yorugʻliklar yoki boshqa fayllarga havolalarni saqlaydi |
| "Bu ikkilik DXF. Uni ASCII DXF sifatida saqlang va qayta urinib koʻring." | CAD dasturidan ASCII sifatida qayta saqlang |
| "Bu DWG chizma emas…" | Fayl DWG emas yoki buzilgan |
| "Bu chizmani oʻqib boʻlmadi (…). U buzilgan boʻlishi yoki oʻquvchi qoʻllamaydigan DWG versiyasida saqlangan boʻlishi mumkin…" | Qavslarda sabab koʻrsatilgan. CAD dasturidan DXF yoki AutoCAD 2000 dan 2018 gacha boʻlgan DWG sifatida saqlang |
| "Bu chizma kelib chiqish nuqtasidan 10,000 km dan uzoqqa boradi…" | CAD dasturida chizmani 0,0 ga yaqinroq siljiting |

### Import notoʻgʻri oʻlchamda yoki yonboshiga yotgan

- **OBJ:** OBJ da birlik yoʻq; ModelCraft metr deb oʻqiydi. Millimetrli model 1000 marta katta kiradi: uni `0.001` bilan [masshtablang](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size); dyuymli model uchun `0.0254`.
- **OBJ yonboshiga:** ModelCraft Y yuqoriga qaragan OBJ fayllarni kutadi. Z yuqoriga yozilgan fayl yotgan holda kiradi. Uni qizil oʻq boʻylab 90° ga buring: qizil oʻqqa qaragan yuzadagi {{ui:Aylantirish}} markazini bosing, yoki faylni uning dasturida ochib, Y yuqorida eksport qiling.
- **DWG yoki DXF:** "Chizma birliklari" dialogida notoʻgʻri birlikni tanladingiz. Ortga qaytaring va qayta import qiling.

## Fayllarni ochish

| Xabar | Nima qilish kerak |
|---|---|
| "Bu fayl ModelCraft modeli emas (JSON emas)." | Boshqa formatlar uchun {{ui:Import}} dan foydalaning |
| "Bu biz ocha oladigan ModelCraft fayli emas: …" | Fayl buzilgan yoki qoʻlda oʻzgartirilgan |
| "Bu modelni yangiroq ModelCraft saqlagan…" | Uni yangi versiyada oching |
| "Bu fayl 200 MB dan katta." | Model bu yerda ochish uchun juda katta |

## Ish yoʻqolgan

ModelCraft oʻzi faylga saqlamaydi. Saqlanmagan oʻzgarishlar bilan tabni yopsangiz yoki qayta yuklasangiz, brauzer avval soʻraydi ("Saytni tark etasizmi?" yoki "Saytni qayta yuklaysizmi?"); qolishni tanlab saqlang. Yangi va Ochish ham soraydi ("Saqlanmagan oʻzgarishlar"). Agar brauzer yoki kompyuter ishdan chiqsa, ModelCraft ni oʻsha brauzerda qayta oching: u saqlanmagan ishni qaytarishni taklif qiladi ("Ishingizni tiklaysizmi?"; qarang: [Ishni tiklash](common:recover)). {{key:Mod+S}} bilan tez-tez saqlang.

## Yuklab olishlar papkasi nusxalar bilan toʻladi

Har bir saqlash yangi yuklab olish boʻladi, u `Untitled (1).modelcraft`, `Untitled (2).modelcraft` va hokazo deb nomlanadi. Eskilarini oʻchiring yoki brauzerni har bir fayl qayerga saqlanishini soʻraydigan va eski faylni oʻzingiz qayta yozadigan qilib sozlang. Qarang: [Ochish, saqlash, import va eksport](topic:files#save-a-model).

## Sekin ishlaydi

- Bekor qilishning har bir qadami modelning nusxasini saqlaydi ([mesh](topic:meshes) faqat oʻzgarganini saqlaydi), shuning uchun juda katta importda itarish/tortish geometriyasini tahrirlash har bir oʻzgarishni koʻproq vaqt oladi. Keraksiz narsalarni parchalang yoki oʻchiring, saqlang va qayta oching: qayta ochish ortga qaytarish tarixini ham tozalaydi.
- Quyosh soyalari eng koʻp resurs sarflaydi. Modellashtirayotganda {{ui:Quyosh soyalari}} ni oʻchiring.

## Soyalar yoʻq

{{ui:Quyosh soyalari}} oʻchiq, yoki tanlagan vaqtda quyosh botgan ("Bu vaqtda quyosh botgan."), yoki uslub {{ui:Karkas}} boʻlib, u soyalarni chizmaydi.

## "Bu brauzer toʻliq ekranga ruxsat bermadi."

Baʻzi brauzerlar va oʻrnatilgan koʻrinishlar toʻliq ekranni rad etadi. Oʻrniga brauzerning oʻz toʻliq ekranidan foydalaning ({{pick:mac=Control-Command-F|windows linux=F11}}).

## ModelCraft ulanishsiz ochilmaydi

ModelCraft faqat oʻsha brauzerda oflayn foydalanish uchun saqlangandan keyin oflayn ochiladi: ilova paneli tugmasi {{ui:Oflayn tayyor}} deb yozilishi kerak. Onlaynda oching va {{ui:Oflayn uchun saqlash}} ni bosing. Agar tugma {{ui:Saqlab boʻlmadi}} deb yozilsa, yaxshiroq ulanishda qayta bosing; {{ui:Oflayn rejim mavjud emas}} esa bu oyna (maxfiy oyna yoki boshqariladigan kompyuter) nusxa saqlay olmasligini bildiradi. Qarang: [Oflayn ishlash](common:offline).
