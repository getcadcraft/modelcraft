---
title: 0.9 versiyasidagi yangiliklar
summary: Oʻz slayserimiz bilan bosma bosqichi va USB, Klipper, OctoPrint hamda PrusaLink orqali yuborish, rezin slaysi va fayl qoʻshimchalari, material oqimi, raqamli egizak va ishlab chiqarish sexi qoʻshimchalari, NURBS yumaloqlashlari, qalinlashtirish va skanerga moslash, uchastkada AR hamda oʻn yoy usuli.
keywords: nima yangi, yangiliklar, reliz eslatmalari, oʻzgarishlar jurnali, 0.9, bosma bosqichi, 3D bosma, printerga yuborish, slayser, CadCraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, rezin, rezin bosma, goo, sl1, ctb, anycubic, ekspozitsiya sinovi, material oqimi, raqamli egizak, ishlab chiqarish sexi, plc, konveyer, nurbs, yumaloqlash, qalinlashtirish, skanerga moslash, ar, uchastkada, yoy usullari, birliklar, 0.8, 0.8.1, versiya, yangi imkoniyatlar, render dvigateli, dvigatel, boshqa dastur bilan ochish, usd, gltf, unreal, qoʻshimcha dvigatel, sirtlar, loft, sweep, uzluksizlik, g0, g1, g2, zebra, step, iges, sahnani ayting, sahna, ob-havo, kun vaqti, fasl, yordamchi, fotodan material, foto, eskiz fotosi, jihozlash, xonani jihozlash, qiya kesim, boʻlish, bosma tekshiruvi, muammolar, xususiyatlar paneli, chiroqlar, tillar, kiritish qurilmalari, asboblar paneli qatorlari, dwg, jonli
from: 169048a2
---

Bu ModelCraft 0.9 versiyasida 0.8.1 bilan solishtirganda nimalar oʻzgarganini koʻrsatadi. Endi ModelCraft printer va ishlab chiqarish sexiga yetib boradi: narsalarni bosma stoliga qoʻyib, eksport qilmasdan yuborishingiz, filament yoki rezin uchun slayslashingiz hamda materialni tashish liniyasini loyihalashingiz mumkin. Bu CadCraft Studio 0.9 va uning sakkizta ilovasi; quyidagi yangi imkoniyatlarning aksariyati qoʻshimchalardir.

## Yangi

### 3D bosma

- **Bosma bosqichi.** Asboblar panelidagi {{ui:Print stage}} tugmasini bosing. Kutubxona elementlarini printer stoliga qoʻshing, ularni joylashtiring, slaysdan oʻtgan qatlamlarni koʻrib chiqing va STL eksport qilmasdan {{ui:Send to 3D printer}} tugmasini bosing. Bu 3D Print qoʻshimchasiga kiradi; u standart holatda yoqilgan va istalgan boshqa qoʻshimcha kabi oʻchirilishi mumkin. Qarang: [Narsalarni bosma stoliga qoʻying va printerga yuboring](topic:print-stage).
- **Oʻz filament slayserimiz.** {{ui:CadCraft basic (kiritilgan, eng tez)}} kartochkadagi **Slayser** roʻyxatidagi slayser: devorlar, qoplamalar, toʻldirish, tayanchlar va skirt, ishchi jarayonda ishlaydi, shuning uchun sahifa ishlashda davom etadi. **Qatlam** surgichi bilan {{ui:Preview layers}} yuborishdan oldin qatlamlarni koʻrsatadi. Ender-3 va Prusa MK4 uslubidagi printer profillari oʻzining boshlangʻich G-code kodiga ega.
- **Yuborish.** USB orqali (kompyuterda Chrome yoki Edge, sahifa ochiq turgan holda) yoki tarmogʻingizdagi Klipper (Moonraker), OctoPrint yoki PrusaLink ga. Bir marta bosilmaguncha hech narsa ulanmaydi yoki yuborilmaydi, va yuborishdan oldin soʻraladi.
- **Boshqa slayserlar.** Kiri:Moto, PrusaSlicer va OrcaSlicer oʻz qoʻshimchalari boʻlib, standart holatda oʻchiq; ularni kartochkadan yoki {{ui:Settings}} › {{ui:Add-ons}} orqali qoʻshing. PrusaSlicer va OrcaSlicer CadCraft Studio dagi oʻz oʻrnatilgan nusxangizdan foydalanadi. Bambu Lab printerlari qoʻshimchasi OrcaSlicer va uning P2S presetlari bilan slaylaydi hamda kompyuterdagi Studio ni talab qiladi.
- **Rezin bosma.** Rezin qoʻshimchalari (standart holatda oʻchiq) printer ekrani uchun qatlam rasmlarini yaratadi: boʻshatish va shamollatish teshiklari, plot va tayanchlar, qatlam koʻrinishi, shuningdek vaqt, rezin va narx. Fayl formati qoʻshimchalari Elegoo GOO, SL1, Chitubox (CBDDLP va CTB 2 dan 5 gacha) va Anycubic (PWMX va PWS) yozadi. Rezin ekspozitsiya sinovi besh ekspozitsiyali pogʻonali zanjir yasaydi. Qarang: [Rezinli printer uchun slaysash](topic:resin-printing).
- **Oʻzgarmagan.** {{ui:Export}} › {{ui:Check for 3D printing (STL or 3MF)…}}, bosma asboblari va Split for printing 0.8 dagidek ishlaydi. Qarang: [Modelni 3D bosmaga tayyorlash](topic:print-3d).

### Material oqimi, Raqamli egizak va Ishlab chiqarish sexi

Bu uchtasi qoʻshimcha boʻlib, {{ui:Settings}} › {{ui:Add-ons}} da yoqmaguningizcha oʻchiq turadi; ularning har biri yoqilgandan keyin oʻz yordamiga ega boʻladi.

- **Material oqimi.** Material oqimi deb nomlangan panel 3D koʻrinishda konveyerlar, stansiyalar, buferlar va AGV yoʻllarini joylashtiradi, urugʻlangan simulyatsiyani ishga tushiradi, uni qayta ijro etadi va oʻtkazuvchanlik, yetkazib berish muddatlari hamda navbatlarni koʻrsatadi; natijalar CSV sifatida saqlanadi. Buyurtmalar CSV fayldan kelishi mumkin. Robot yacheykalarini tekshirish va eksport qilish mumkin. PLC bogʻlanishi Modbus TCP ustida yumshoq rejim va haqiqiy rejimga ega; u faqat CadCraft Studio da ishlaydi.
- **Raqamli egizak.** Material oqimi joylashuvini oʻqiydi va unda yumshoq PLC ishga tushiradi; majburan yuzaga keltiriladigan nosozliklar, zaxira sinovlari, joylashuvlarni solishtirish va materiallar roʻyxati mavjud.
- **Ishlab chiqarish sexi.** Stansiyalarni mashina va yacheykalarga aylantiradi, ularni jonli yoki simulyatordan oʻqiydi, ish navbatini va sodda OEE ni yuritadi. U faqat oʻqiydi: bu versiya mashina yoki PLC ga yoza olmaydi.

### Sirtlar, modellar va chizma

- **NURBS da yumaloqlash, qalinlashtirish va boolean amallari.** {{ui:Surfaces}} panelida {{ui:Fillet between faces}}, {{ui:Fillet several edges}}, {{ui:Thicken into a solid}} hamda Union, Subtract va Intersect bor; ularning har biri oʻlchangan chetlanishi bilan. Qarang: [Erkin shakldagi sirtlar (NURBS)](topic:nurbs-surfaces).
- **Sirtlarni skanerga moslash.** Skanerlangan toʻrni tanlang va **Scan** guruhidagi {{ui:Fit surfaces to the scan}} ni, soʻngra {{ui:Stitch the surfaces to a solid}} ni ishlating. Bu birinchi moslash boʻlib, toʻliq teskari muhandislik paketi emas.
- **.3dm modelyordan jonli bogʻlanish.** Bir tomonlama, Rhino 8 yoki Grasshopper dan, va bir xil kompyuterda CadCraft Studio talab qilinadi. Qarang: [.3dm modelini jonli saqlash](topic:live-3dm-link).
- **Modelni uchastkada koʻring.** {{ui:Views}} menyusidagi {{ui:View on site (AR, phone)}} Chrome bilan Android telefonda ishlaydi. Qarang: [Modelni Android telefon bilan uchastkada koʻring (AR)](topic:ar-on-site).
- **Yoy usullari.** {{ui:Arc methods}} ochiladigan roʻyxati yoyni chizishning oʻnta usulini taklif qiladi, jumladan {{ui:3-Point}} va {{ui:Start, Center, End}}.
- **Qoʻshimcha birliklar.** Ogʻirliklar (kg, lb, t, ton) va haroratlar (C, F, K va R gradus) qiymatlarni birliklar bilan kiritadigan joylarda tushuniladi.

## Har bir ilovada

- **Maslahat matnlari.** Tugmalardagi va kesilgan yorliqlardagi tooltip matni Bootstrap maslahati boʻladi.
- **Yopiladigan boshlash maslahati.** Boʻsh chizma maydonidagi maslahat kartochkasida kichik yopish x tugmasi bor. U yopiq holda qoladi, buyruqlar palitrasi uni qayta koʻrsatishi mumkin.
- **Aylantiriladigan yorliq qatorlari.** Sigʻmaydigan panel yorliqlari kesilmasdan aylantiriladi.
- **Yorliq sarlavhalari.** Hujjat ochiq boʻlganda brauzer yorligʻi hujjat nomi, soʻngra ModelCraft va CadCraft bilan boshlanadi. Saqlanmagan boʻlsa, avval nuqta turadi.
- **Joylashuv.** {{ui:Settings}} › {{ui:General}} › Layout roʻyxatidagi joylashuvlarni, ularni faqat shu ilova uchun ishlatish variantini va joylashuvni tiklash tugmasini oʻz ichiga oladi.
- **Tillar.** Sozlamalardagi tillar roʻyxati build tarkibidagi til fayllariga mos keladi. Inglizchadan boshqa tillar mashina qoralamalaridir.
- **Jonli va Kutubxona.** Live TeamWork jonli kursorlar va ismlarni koʻrsatadi, Kutubxona toʻplamlari esa har bir ilovaga standart toʻplam beradi.

## Tuzatilgan

- {{ui:Play}} animatsiya ijro etilayotganda {{ui:Pause}} ga aylanadi, {{key:Space}} esa vaqt chizigʻi ochiq boʻlganda ijro etadi va pauza qiladi.
- Statik render, grafik karta yoʻl izlovchini ishga tushira olmaganda WebGL ga oʻtadi. Jonli render koʻrinishi xatoni hali ham koʻrsatishi mumkin; bu oʻsha drayver bilan Windows kompyuterda tekshirilmagan.
- Material oqimining haqiqiy rejimi PLC istisno javoblaridan keyin uzilgan aloqa tugagach yana ulanadi.

## Halol cheklovlar

- Haqiqiy printerda hech narsa bosilmagan: na filament, na rezin, na Bambu Connect orqali. Rezin fayllari faqat CadCraft ning oʻz oʻqish dasturlari bilan qayta oʻqilgan.
- Raqamli egizak va Ishlab chiqarish sexi faqat simulyatorlar va maʼlum javoblarda sinovdan oʻtkazilgan, haqiqiy PLC, liniya yoki protokol bilan emas. Ular tekshirish vositalari, xavfsizlik tasdigʻi emas. Fizika faqat qutilarni, sakkiztagacha yuklama bilan qamraydi.
- Rhino va Grasshopper bogʻlanishi haqiqiy dasturlarda hali ishlamagan.
- Inglizchadan boshqa tillar mashina qoralamalaridir.

## Avvalroq: 0.8 va 0.8.1

Bu ModelCraft 0.8 (2026-11-01) va 0.8.1 (2026-11-02) versiyalarida 0.7 bilan solishtirganda nimalar oʻzgarganini koʻrsatadi. {{ui:Render a picture…}} muloqot oynasi endi sahnani boshqa dasturga yuborishi mumkin, Sirtlar paneli silliq erkin shakldagi sirtlar yasaydi va siz ulagan yordamchi bir gapdan butun sahnani oʻrnatishi mumkin.

### Yangi

**Renderlash**

- **Dvigatel tanlovi.** {{ui:Render a picture…}} da Mode dan yuqorida **Engine** roʻyxati bor. Bizning ikkita oʻz dvigatelimiz, Fast va Path tracer, standart boʻlib, hamma joyda ishlaydi. Boshqa yozuvlar sahnani boshqa dasturga olib borish uchun paket sifatida saqlaydi (model USD fayl sifatida, aniq material qiymatlari, yoniq chiroqlar, quyosh, osmon, ekspozitsiya va kamera haqidagi sozlamalar fayli bilan). Boshqa dastur chizgan rasm qaysi dastur va versiya tomonidan yaratilganini aytadi. Qarang: [Rasmni qaysi dastur chizishini tanlang](topic:render-engines).
- **Boshqa dasturda ochish.** Engine roʻyxati sahnani USD fayl, glTF fayl (`.glb`) yoki Unreal loyiha papkasi (`.zip`) sifatida saqlashi mumkin, brauzerda va CadCraft Studio da. Studio da u usdview yoki kompyuterning oʻz dasturini ham fayl uchun ishga tushirishi mumkin. Qarang: [Sahnani boshqa dasturda oching](topic:render-open-in).
- **Studio dan oʻyin dvigateliga yuborish.** Studio sahnani Unreal Engine loyihasiga yozadi va har bir yuborishda uni bir tomonlama tarzda sinxron saqlaydi. Sizning tahrirlaringiz CadCraft hech qachon yozmaydigan qatlamda saqlanadi. Qarang: [Sahnani oʻyin dvigateliga yuboring](topic:render-unreal).
- **Qoʻshimchalardan dvigatellar.** Qoʻshimcha roʻyxatga dvigatel qoʻshishi mumkin. JavaScript da yozilgani brauzerda va Studio da chizadi; dastur ishga tushiradigani esa Studio da sizning roziligingizni talab qiladi. Qarang: [Rasmni boshqa dastur bilan chizing](topic:render-other-program) va [Qoʻshimcha orqali renderlash dvigateli qoʻshing](topic:render-engine-addons).
- **Sahnani ayting.** Ulangan yordamchingizga "kech kech, yengil yomgʻir, kuzgi daraxtlar, maydonda odamlar" deb ayting va ModelCraft uni bir qadamda sozlaydi: quyosh sana va vaqtga qarab harakatlanadi, soyalar unga ergashadi, osmon oʻzgaradi, namlangan sirtlar paydo boʻladi, daraxtlar va odamlar yashirish, koʻchirish yoki oʻchirish mumkin boʻlgan teglarga ega haqiqiy obyektlar sifatida joylashadi. Kun vaqti, sana yoki fasl va ob-havo (ochiq, bulutli, tuman, yengil yomgʻir, yomgʻir, boʻron) ham alohida ishlaydi, keyingi soʻrov esa oʻsha sahnani oʻzgartiradi. Tuman yuqori sifatli rasmda grafik kartada koʻrinadi; boshqa dvigatellar osmon, yorugʻlik va namlangan sirtlarni koʻrsatadi. Yomgʻir tushayotgan chiziqlar sifatida chizilmaydi.

**Materiallar**

- **Bitta fotodan material.** ModelCraft ga sirt fotosuratini bering (devor, pol, tosh) va u plitkalanadigan material yasaydi: foto boʻylab yorugʻlik tekislanadi, chetlar birlashtiriladi va rang xaritasi, gʻadir-budurlik xaritasi hamda normal xarita rasmdan hisoblanadi. Bu sizning rasmingizda oddiy tasvir qayta ishlash, oʻrgatilgan model emas. Gʻadir-budurlik taxminiy. Oddiy, kvadrat, toʻgʻridan olingan foto eng yaxshi plitkani beradi; gʻisht kabi kuchli naqsh birlashgan joyda yumshoq shabah koʻrinishi berishi mumkin.

**Sirtlar**

- **Erkin shakldagi sirtlar.** {{ui:Surfaces}} paneli NURBS egri chiziqlari va kesilmagan sirtlarni yasaydi: nuqtalar orqali egri chiziqlar, loft, ruled, extrude, revolve, bir yoki ikki relsda sweep, egri chiziqlar tarmogʻidan sirtlar, toʻrt qirradan yamoqlar, moslash va aralashtirish. Har bir umumiy qirra aniq sirtlarda G0, G1 yoki G2 sifatida oʻlchanadi (boʻshliq, burchak, egrilik sakrashi), va siz soʻraganingizdan yomonroq qirra Problems panelida **Match** tuzatishi bilan paydo boʻladi. Zebra chiziqlari va egrilik ranglari aniq sirtlardan chiziladi. STEP va IGES fayllari chiqadi va kiradi. Qarang: [Erkin shakldagi sirtlar (NURBS)](topic:nurbs-surfaces).

**Uchastka va xonalar**

- **Eskiz fotosidan yerga.** {{ui:File}} › {{ui:Import a sketch photo…}} qoʻl eskizining telefon fotosini siz aytgan masshtabdagi yer chetlariga aylantiradi: bitta guruh, har bir qalam rangi uchun teg bilan. Qogʻoz kompyuteringizda topiladi va tekislanadi, hech narsa hech qayerga yuborilmaydi. Qarang: [Uchastka rejasida modellang](topic:site-plan).
- **Xonani jihozlash.** Qavatni tanlang va {{ui:Organize}} › {{ui:Furnish a room…}} dan foydalaning. Yotoqxona, mehmonxona, ovqat xonasi, oshxona, hammom yoki ofis mebeli qoidalar boʻyicha devorlar yoniga va eshik hamda derazalardan xoli joylashtiriladi, bir qadamda olib tashlash mumkin boʻlgan bitta guruhda. Bu koʻrib chiqish uchun standart joylashuv, loyiha emas. Qarang: [Boshlangʻich kutubxona](topic:starter).

**3D bosma**

- **Qiya kesimlar.** Bosma uchun boʻlish kesimlarini 60 gradusgacha qiyalatishi mumkin, bu boʻlaklarga koʻproq yelimlash yuzasi beradi. Ulagichlar kesimga nisbatan tik turadi. Qarang: [Modelni bosma uchun boʻlish](topic:print-split).
- **Problems dagi bosma tekshiruvi.** 3D bosma tekshiruvining topilmalari Problems panelida modelda belgilar bilan koʻrinadi va Repair ularni oʻsha yerdan tuzatadi. Qarang: [Tayanchlar, devor qalinligi, boʻshatish va tuzatish](topic:print-tools).

**Har bir ilovada**

- **Tillar.** Yordam va ilovalar 54 tilda. Oʻntasi yangi: litva, latviya, bosniya, marathi, telugu, alban, afrikaans, filipin, suaxili va oʻzbek. Inglizchadan boshqa tillar, bir ona tilida soʻzlovchi oʻqib chiqmaguncha, mashina qoralamalari boʻladi va yordam mavzulari hali ham inglizcha boʻlishi mumkin.
- **Kiritish qurilmalari.** Sensorli panel, qalam, 3D sichqoncha, oʻyin boshqaruvchisi va MIDI boshqaruvlari ilovalarni boshqarishi mumkin, hammasi uchun yoki bitta ilova uchun.
- **Asboblar paneli qatorlari.** {{ui:Settings}} › {{ui:General}} › Toolbar rows Wrap (avvalgidek), 2 qator yoki 1 qator qoʻyadi. Sigʻmaydigan panel chizmadan joy olmasdan yon tomonga aylanadi. Wrap standart boʻlib qoladi.
- **Xususiyatlar jadvali.** ModelCraft ning chiroq maydonlari umumiy jadvaldan foydalanadi: yigʻiladigan kategoriyalar, yorliq va qiymat ustunlari hamda Compact zichlik. `2*450` kabi yozilgan arifmetika ishlashda davom etadi.
- **Problems.** Problems paneli (ilova paneli dagi ogohlantirish tugmasi) barcha ilovalar uchun umumiydir. ModelCraft da bosma tekshiruvi va sirt uzluksizligi ogohlantirishlari shu yerda boʻladi.
- **Live.** Live TeamWork seansi kim qayerdaligini koʻrsatadi. Qarang: [Live TeamWork bilan birga modellang](topic:work-live).
- **Qoʻshimchalar.** Qoʻshimchalar yuqorida aytilganidek renderlash dvigatellarini qoʻshishi mumkin.
- **AI ni ulang.** Vositalar shartnomasi va sakkizta ilovaning tekshiruvlari oʻtdi, jami 454 ta vosita bilan. Studio ichida bir tugmali ulanish, brauzer yordamchilari uchun joylashtirilgan ulagich, Studio ichida oʻz kalitingiz va nashr qilingan paket hali vaʼda qilinmagan. Ilovalarning oʻz AI si yoʻq. Qarang: [ModelCraft ni AI yordamchilari bilan ishlating](topic:use-with-ai-assistants).

### 0.8.1 da tuzatilgan

- **DWG classes boʻlimi.** DWG fayl classes boʻlimi notoʻgʻri turda oʻqilgan edi, bu importda faylni buzishi mumkin edi. Endi u toʻgʻri oʻqiladi, ModelCraft da va DWG ni oʻqiydigan boshqa ilovalarda.
- **Portret rejimidagi planshetlar.** Boʻsh grid balandligi kanvasga beriladi va varaq joylashuvi 760 piksel yoki undan kam kenglikdan boshlanadi. ModelCraft ning uslublar varaqida ham shu oʻzgarish bor.
- **Studio da til.** CadCraft Studio va qadoqlangan nashrlar ishlab turganda tilni almashtirishi mumkin; ilgari faqat inglizcha edi. Bu hali barcha platformalarda sinovdan oʻtmagan: til oʻzgarmasa, bizga xabar bering.

### Bu versiyada hali yoʻq

- **Kod bilan imzolanmagan.** Windows SmartScreen koʻrsatishi mumkin: {{ui:More info}} ni, soʻngra {{ui:Run anyway}} ni tanlang. Mac da oʻng tugmani bosing va {{ui:Open}} ni tanlang. Store nashrlari toʻxtatilgan, iPad va iPhone nashri 0.8.1 uchun qayta yigʻilmagan.
- Render-dvigatel qoʻshimchasisiz boshqa dastur rasmni chizishi, boshqa dastur orqali panorama yoki stereo kameralar va osmon rasmi, hamda Unreal sahnasini ochadigan plagin hali yoʻq. Fayllar yoziladi; plagin chiqarilmagan va Unreal da ishga tushirilmagan.
- Erkin shakldagi sirtlar: G3 va class A oʻlchanmaydi va taʼminlanmaydi; kesish va jismlar keyinroq keladi.
- Boshqa dasturlarning rasmlari bizniki bilan piksel-bepiksel bir xil emas: faqat kamera, quyosh, chiroqlar va ekspozitsiya mos keladi.
- Studio dagi til almashtirishi uchun 0.8.1 tuzatishi barcha platformalarda sinovdan oʻtmagan.

Hammasi boshqa joyda: [Hali qurilmagan](topic:not-built-yet). Oldingi reliz uchun qarang: [0.7 dagi yangiliklar](topic:whats-new-0-7).
