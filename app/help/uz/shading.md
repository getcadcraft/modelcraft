---
title: Tugunlar bilan materiallar yasash
summary: Teksturalar, rasmlar va hisoblardan material yarating, uni Soyalash ish maydonida koʻrinishda kuzatib boring va yuzalarni u bilan boʻyang.
keywords: soyalash, pishirish, tekstura pishirish, ambient occlusion, ao, egrilik, normal pishirish, yuqori poligonli, past poligonli, yorugʻlik xaritasi, dekal, dekallar, stiker, logotip, yorliq, tekstura boʻyash, boʻyash, material, materiallar, materialx, mtlx, openpbr, standard surface, material kutubxonasi, librarycraft, tekstura toʻplami, pbr, teksturalarni import qilish, zip, cc0, sudrash, tugun, tugunlar, tugun muharriri, shader, tekstura, protsedural, shovqin, katakcha, voronoi, hujayralar, toʻlqinlar, gradient, kir, qirra eskirishi, rang gradienti, aralashtirish, boʻrtma, normal xarita, gʻadir-budurlik, metallilik, shaffoflik, kesib olish, nurlanish, yorugʻlik, siljitish, quti proyeksiyasi, triplanar, uv, rasm, tasvir tuguni
from: d7368b21
---

**Soyalash** ish maydonida yaratilgan material fayilga tegishli boʻladi. U kichik grafik: teksturalar, rasmlar va raqamlar yaratadigan **tugunlar** boʻlib, **Material chiqishi** ga ulangan; uning kirishlari yuzaning koʻrinishi — asosiy rang, gʻadir-budurlik, metallilik, normal, shaffoflik, nurlanish va OpenPBR modelining qolgan qismi. Yuzalarni har qanday kutubxona materiali kabi u bilan boʻyaysiz va har bir oʻzgarish koʻrinishda darhol aks etadi.

## Ochish

Ish maydoni roʻyxatidan {{ui:Soyalash}} ni tanlang. 3D koʻrinish ekranning yuqori qismini saqlaydi, **tugun muharriri** esa pastini egallaydi. Oʻngdagi panel faylning oʻz materiallarini sanab beradi.

- {{ui:Yangi material}} faqat oʻzining Material chiqishi bilan kulrang material yaratadi.
- **Kutubxona materialining tahrirlanadigan nusxasini yarating**: gʻisht, yogʻoch, plitka va boshqalarni oʻzgartirish mumkin boʻlgan grafikka aylantiradi: teksturasi Kutubxona tekstura tuguni orqali, boʻrtmalari Boʻrtma tuguni orqali keladi.
- {{ui:Shu bilan boʻyash}} tanlangan yuzalar yoki guruhlarni boʻyaydi yoki Boʻyash asbobi uchun materialni tanlaydi. Boʻyash asbobining materiallari ham **Bu faylda** boʻlimida faylning oʻz materiallarini roʻyxatlaydi.
- {{ui:Nusxa olish}} va {{ui:Oʻchirish}} tahrirlayotgan material bilan ishlaydi. Oʻchirishni ortga qaytarib boʻlmaydi: u bilan boʻyalgan yuzalar qayta boʻyalguncha standart rangda koʻrinadi.

## Kutubxonadagi materiallar

Panelning **Material kutubxonasi (Kutubxona)** boʻlimi kutubxona materiallarini sanab beradi, har biri CadCraft yoʻl kuzatuvchisi tomonidan chizilgan oldindan koʻrish bilan. Ular CC0 ostida chiqarilgan va ularni yaratgan kishilarga tegishli deb koʻrsatilgan tekstura toʻplamlari.

- Bittasini bosing — u faylga olib kiriladi (rasmlari bilan birga) va, yuzalar yoki guruhlar tanlangan boʻlsa, ularni boʻyaydi.
- Uni koʻrinishdagi yuza yoki guruhga sudrang, faqat oʻshani boʻyash uchun.
- U fayldagi materiallardan biriga aylanadi: uning tugunlarini boshqa har qanday material kabi oʻzgartiring. Uning izohi panelda koʻrinadi va faylda qoladi.

## Tekstura toʻplamini import qilish

**Tekstura toʻplamini import qilish** ostidagi {{ui:Rasmlar yoki zip…}} yoki {{ui:Jild…}} xaritalar toʻplamidan material yaratadi. Xaritalar fayl nomlaridagi soʻzlar boʻyicha topiladi: color, albedo, diffuse yoki basecolor; roughness (yoki gloss, roughness ga aylantiriladi); metalness yoki metallic; normal (OpenGL yoki DirectX, nomidagi `gl` / `dx` dan); height yoki displacement; ambient occlusion; opacity; emission. Qadoqlangan xaritalar (ARM, ORM) chetda qoldiriladi. Plitka 1 × 1 m dan boshlanadi: uning haqiqiy oʻlchamini Material chiqishida belgilang. Balandlik siljitishga oʻtadi, masshtabi 0 da — uni meshlarda ishlatish uchun masshtabni oshiring.

## MaterialX

MaterialX — boshqa 3D va render dasturlari materiallarni uzatish uchun ishlatadigan ochiq format.

- {{ui:Export as MaterialX…}} tahrirlayotgan materialni saqlaydi: uning qiymatlarini va har bir teksturani `.mtlx` fayli yonida PNG rasm sifatida (zip ichida). Uni yozish uchun soyalagichni tanlang: **OpenPBR Surface** (MaterialX 1.39, ModelCraft ishlatadigan model) yoki **Standard Surface** (MaterialX 1.38, hozir koʻproq dastur oʻqiydi). Teksturalar UV koordinatalari boʻyicha metrlarda joylashtiriladi; quti va triplanar joylashuvi UV sifatida yoziladi.
- {{ui:Import MaterialX…}} (yoki {{ui:Jilddan…}}) OpenPBR, Standard Surface, UsdPreviewSurface yoki glTF PBR soyalagichli `.mtlx` fayllarni oʻqiydi. Rasmlarni ham bering yoki hammasining zipini: rasm yoʻli, nomi yoki boshqa rasm turidagi nomi boʻyicha topiladi (fayl nomi `.exr` boʻlsa, yonidagi `.jpg` sifatida kelishi mumkin). Teksturalar, normal xaritalar, arifmetika, aralashmalar va siljitish tugunlar sifatida keladi; boshqa narsa oʻz qiymatini saqlaydi, holat satri esa nima qoldirilganini aytadi.

## Dekallar

Dekal — yuzaga qoʻyilgan rasm: logotip, belgi, yorliq yoki dogʻ — oʻz materiali bilan.

- **Yangi dekal kengligi** ni belgilang, soʻng {{ui:Dekal joylashtirish…}} (yoki asboblar panelidagi {{ui:Dekal}}), PNG, JPEG yoki WebP rasmni tanlang va yuzani bosing. Rasm u yerdagi yuzalarga proporsiyasini saqlagan holda proyeksiyalanadi; PNG ning shaffof qismlari shaffof qoladi.
- U bosilgan guruh yoki komponentga tegishli va u bilan birga harakatlanadi. U oʻz qutisi ichidagi, bir xil tomonga qaragan yuzalarni qoplaydi va u yotgan narsaning qirralarida toʻxtaydi.
- Har bir dekal oʻz materialini oladi, **Dekal: <rasm>** nomi bilan, faylning roʻyxatida: boshqalar kabi tahrirlang (gʻadir-budurlik, boʻrtma, yorugʻlik). Dekal yonidagi {{ui:Material}} uni ochadi.
- Har bir dekal yonida: uning kengligi (balandlik rasmga mos), {{ui:Burish}} (chorak burilish) va {{ui:Oʻchirish}}. Dekallar faylning materiallari bilan birga saqlanadi, ortga qaytarish tarixidan tashqarida.
- Ular soyalangan koʻrinishda, tez renderlarda va yuqori sifatli rasmlarda koʻrinadi.

## Teksturada boʻyash

{{ui:Teksturani boʻyash}} (yoki **Teksturada boʻyash** ostidagi {{ui:Boʻyash}}) koʻrsatkichni dumaloq moʻyqalamga aylantiradi. Ushbu fayl materiallaridan birini kiygan yuzada suring: moʻyqalam asosiy rang ortidagi rasmni boʻyaydi.

- Mesh ustida u meshning UV lari boʻylab boʻyaydi (avval UV ish maydonida yoying); boshqa yuzalarda esa yuza boʻylab boʻyaydi, shuning uchun boʻyoq materialning plitkasi bilan takrorlanadi.
- Asosiy rangi oddiy rang boʻlgan material birinchi marta boʻyalganda 512 × 512 ta shu rang rasmini oladi. Asosiy rangi boshqa tugunlardan kelgan material uchun Asosiy rangga ulangan Rasm tuguni kerak.
- Moʻyqalam rangini, oʻlchamini (rasm pikselida), kuchini va qattiqligini panelda belgilang. {{ui:Chiziqni bekor qilish}} yoki Ctrl+Z (boʻyash paytida) soʻnggi 20 tagacha chiziqni qaytaradi.
- Boʻyalgan rasm faylda saqlanadi. Kutubxona materiallarini boʻyab boʻlmaydi: avval tahrirlanadigan nusxa oling.

## Teksturalarni pishirish

**Teksturalarni pishirish** shakl va sahna yuzaga bergan narsani mesh UV lari boʻylab rasmlarga yozadi.

- UV ga ega meshni tanlang (UV ish maydonida yoying), xaritalarni belgilang va {{ui:Pishirish}} tugmasini bosing:
  - **Ambient occlusion** — har bir nuqta qanchalik ochiqligi: burchaklar, burmalar va boshqa narsalar ostidagi joylar qoraroq boʻladi. Modelda koʻrsatilgan hamma narsa uni soyalaydi, sozlangan masofagacha.
  - **Egrilik** — tashqi qirralar boʻylab yorugʻ, ichki burchaklarda qora, tekis va sekin egilgan qismlarda oʻrta kulrang, siz belgilagan qirra kengligi ustida.
  - **Yuqori tafsilotli obyektdan normallar** — yana bir tafsilotli nusxani ham tanlang: uning yuza tafsiloti soddaroq obyekt uchun normal xarita sifatida yoziladi (kamroq uchburchakli obyekt ustiga pishiriladi). Qidiruv masofasi — ikki yuza bir-biridan qanchagacha uzoq boʻlishi mumkinligi.
  - **Yoritish** — model joyi va sanasidagi quyosh (Uslub) soyalari bilan, hamda osmon, yorugʻlik xaritasi sifatida.
- Rasmlar faylga qoʻshiladi va Rasm tugunlarida paydo boʻladi. Agar tahrirlayotgan materialda **Kir va qirra eskirishi** tuguni boʻlsa, u yangi okklyuziya va egrilik rasmlarini darhol oʻqiydi.
- Har bir teksel uchun koʻproq nur okklyuziyani va yoritishni silliqroq qiladi, lekin koʻproq vaqt oladi. Pishirish kompyuter protsessor yadrolarida fonda ishlaydi; {{ui:Pishirishni toʻxtatish}} uni toʻxtatadi.

## Grafik qurish

1. {{ui:Tugun qoʻshish…}} (yoki tugun muharririda {{key:Shift+A}}) muharrir oʻrtasiga tugun qoʻshadi.
2. Chiqish nuqtasidan (tugunning oʻng tomonidagi) kirish nuqtasiga (tugunning chap tomonidagi) sudrab ularni ulang. Kirishga ikkinchi ulanish birinchisini almashtiradi; ulangan kirishni uzish uchun uni tortib oling.
3. Ulanmagan kirishlar oʻz qiymatini koʻrsatadi: raqam kiriting yoki rang tanlang. Sozlamalar har bir tugunning pastida.

Tugunni sarlavhasidan sudrab koʻchiring, boʻsh joyni sudrab suring va zoom uchun gʻildiraktan foydalaning. {{key:Delete}} tanlangan tugunlarni yoki ulanishni olib tashlaydi, {{key:Mod+Z}} bekor qiladi, {{key:Mod+D}} nusxalaydi, {{key:F}} hamma tugunlarni koʻrsatadi. Har bir oʻzgarish tugun muharriri uchun bitta ortga qaytarish qadamidir. Modelning oʻz ortga qaytarish amali materiallarni oʻzgartirmaydi.

| Tugunlar | Nimani yaratadi |
|---|---|
| Tekstura koordinatalari | Nuqta plitkada qayerda ekanini: uni takrorlash, surish, chorak burish. |
| Qiymat, Rang | Raqam, rang. |
| Rasm | Fayldagi rasm (import qilingan model bilan kelgan yoki {{ui:Rasm qoʻshish…}} bilan qoʻshilgan). Fotosurat uchun **Ranglar**, gʻadir-budurlik yoki normal xarita uchun **Maʼlumot** ni tanlang. |
| Kutubxona tekstura | Kutubxona materialining teksturasi, gʻadir-budurligi va balandligi. |
| Katakcha, Shovqin | Kvadratlar; silliq fraktal shovqin, uning tafsiloti, gʻadir-budurligi va urugʻi bilan. |
| Voronoi hujayralari, Toʻlqinlar, Gradient | Hujayralar (eng yaqin nuqtagacha masofa, hujayralar orasidagi qirralar, har bir hujayra uchun rang); koʻndalang, yuqoriga yoki diagonal boʻylab yoʻlaklar, sinus, arra yoki uchburchak shaklida, shovqin bilan egilgan; chiziqli, kvadratik, radial va sferik gradientlar. |
| Gʻisht, Plitka | Ofset bilan gʻisht qatorlari yoki plitkalar setkasi: ranglar, ohak yoki fuga, metrda boʻshliq va faska, boʻrtmalar uchun balandlik, har bir boʻlak uchun tasodifiy raqam. |
| Yogʻoch, Marmar | Tola boʻylab halqalar, nozik tolalar bilan; turbulentlik bilan egilgan tomirlar. |
| Kir va qirra eskirishi | Qavariq qirralarni eskirtiradi va chuqurliklarni ifloslaydi, meshning egrilik va okklyuziya rasmlaridan ([Teksturalarni pishirish](topic:shading#bake-textures) ularni yaratadi; yoki ikkita rasm sozlamasini belgilang, meshning UV tartibida: materialni UV koordinatalari boʻyicha joylashtiring). Ularsiz u hech narsani oʻzgartirmaydi. |
| Ranglarni aralashtirish, Rang gradienti, Rang tonusi/toʻyinganligi/yorugʻligi, Yorqinlik va kontrast, Teskarilash, Gamma, RGB ni ajratish va birlashtirish | Rang bilan ishlash. |
| Matematika, Diapazonni xaritalash | Raqamlar ustida arifmetika (qoʻshish, koʻpaytirish, daraja, silliq qadam va boshqalar). |
| Boʻrtma, Normal xarita | Balandlikdan (Boʻrtma) yoki normal xarita rasmidan (Normal xarita: yashil kanal yoʻnalishini tanlang) normal. |

## Material chiqishi

Uning sozlamalari teksturaning yuzalarda qanday yotishini belgilaydi:

- **Plitka kengligi** va **Plitka balandligi**: tekstura plitkasi necha metrni qamrashi. Grafik yaratgan hamma narsa plitka boʻylab chok qoldirmasdan takrorlanadi.
- **Joylashtirish**: **UV koordinatalari** yuzalarga ergashadi (itarish/tortish yuzalari: har bir yuza boʻylab; meshlar: ularning UV lari, bir UV birligi = bir plitka), **Quti** eng yaqin uchta oʻqdan proyeksiya qiladi, **Triplanar** egilgan yuzalarda uchta proyeksiyani aralashtiradi (**Aralashtirish oʻtkirligi**: yuqori boʻlsa, aralashtirish qattiqroq boʻladi).
- **Normal kuchi** normal kirishni masshtablaydi. **Siljitish masshtabi** siljitish kirishi meshning uchlarini qanchaga siljitishini belgilaydi.
- {{ui:Koʻproq kirishlar}} OpenPBR ning qolgan kirishlarini koʻrsatadi: qoplama, tuklar, subyuza, yupqa plyonka, uzatish va ularning ranglari.

## Yuqori sifatli rasmlarda

Yoʻl kuzatuvchisi asosiy rang, gʻadir-budurlik, metallilik, shaffoflik, normal va nurlanishni grafikdan yuza boʻylab oʻzgarganda oʻqiydi. Siz ulagan boshqa har qanday kirish (masalan, oʻzgaruvchan qoplama) oʻrtacha qiymatida ishlatiladi; panel buni aytadi. Shaffoflik teksturasidan kesib olish shaklini koʻrsatadi, uning soyasi bir xil shaffof boʻladi. Porlayotgan tekstura oʻzi qaragan narsani yoritadi, lekin chiroq sifatida namuna olinmaydi.

**Siljitish** faqat meshlarning uchlarini harakatlantiradi, shuning uchun tafsilot uchun Subdivision modifikatorini qoʻshing ([Modifikatorlar](topic:modifiers)). Itarish/tortish yuzalari oʻz shaklini saqlaydi va boʻrtmalarni normaldan oladi.

:::tip
WebGPU bor kompyuterda grafik grafik kartada hisoblanadi; uning yoʻqligida protsessorda. Natija bir xil.
:::
