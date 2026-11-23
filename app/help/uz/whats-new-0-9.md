---
title: 0.9 dagi yangiliklar (oldingi)
summary: Oʻz slicer va USB, Klipper, OctoPrint hamda PrusaLink orqali yuborish bilan bosma bosqichi, qatron kesish va fayl qoʻshimchalari, material oqimi, raqamli egizak va sex maydoni qoʻshimchalari, NURBS yumaloqlashlari, qalinlashtirish va skanerga moslash, uchastkada AR hamda oʻnta yoy chizish usuli.
keywords: 0.9 yangiliklari, oldingi reliz, yangiliklar, yangi nima, reliz eslatmalari, oʻzgarishlar jurnali, changelog, 0.9, bosma bosqichi, 3D bosma, 3D printerga yuborish, slicer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, qatron, qatronli bosma, goo, sl1, ctb, anycubic, ekspozitsiya sinovi, material oqimi, raqamli egizak, sex maydoni, plc, konveyer, nurbs, yumaloqlash, qalinlashtirish, skanerga moslash, ar, uchastka, yoy usullari, birliklar, yangi nima, yangiliklar, oʻzgarishlar, 0.8, 0.8.1, versiya, yangi imkoniyatlar, render dvigateli, dvigatel, boshqa dasturda ochish, usd, gltf, unreal, qoʻshimcha dvigateli, nurbs, sirtlar, loft, sweep, uzluksizlik, g0, g1, g2, zebra, step, iges, sahnani ayting, sahna, ob-havo, kun vaqti, fasl, yordamchi, fotodan material, foto, eskiz fotosi, jihozlash, xonani jihozlash, qiya, qiya kesim, boʻlish, bosma tekshiruvi, muammolar, xususiyatlar jadvali, chiroqlar, tillar, kiritish qurilmalari, asboblar paneli qatorlari, dwg, jonli
from: 2717d1b1
---

Bu, 0.8.1 bilan solishtirganda ModelCraft 0.9 dagi oʻzgarishlar. ModelCraft endi printer va sex maydoniga yetadi: narsalarni bosma stoliga qoʻyib, eksport qilmasdan yuborishingiz, filament yoki qatron uchun kesishingiz va material tashish liniyasini loyihalashingiz mumkin. Bu CadCraft Studio 0.9 va uning sakkizta ilovasi; quyidagi yangi imkoniyatlarning aksariyati qoʻshimchalardir.

## Yangi

### 3D bosma

- **Bosma bosqichi.** Asboblar panelida {{ui:Bosma bosqichi}} tugmasini bosing. Kutubxona elementlarini printer stoliga qoʻshing, ularni joylashtiring, kesilgan qatlamlarni koʻrib chiqing va STL eksport qilmasdan {{ui:3D printerga yuborish}} tugmasini bosing. U 3D bosma qoʻshimchasiga tegishli; u standart holda yoqilgan va boshqa har qanday qoʻshimcha kabi oʻchirilishi mumkin. Qarang: [Bosma stolidagi narsalarni joylashtirish va printerga yuborish](topic:print-stage).
- **Oʻz filament slicerimiz.** {{ui:CadCraft basic (ichiga kiritilgan, eng tez)}} kartochkadagi **Slicer** roʻyxatidagi slicer: devorlar, qoplamalar, toʻldirish, tayanchlar va chetki chiziq. Ishlov berish fonda bajariladi, shuning uchun sahifa ishlatishga yaroqli boʻlib qoladi. {{ui:Qatlamlarni koʻrish}} va **Qatlam** surgichi yuborishdan oldin qatlamlarni koʻrsatadi. Ender-3 va Prusa MK4 kabi printer profillari oʻzlarining boshlangʻich G-kodini olib yuradi.
- **Yuborish.** USB orqali (kompyuterda Chrome yoki Edge, sahifa ochiq holda) yoki tarmogʻingizdagi Klipper (Moonraker), OctoPrint yoki PrusaLink ga. Bosmasiz hech narsa ulanmaydi va hech narsa yuborilmaydi, yuborish esa avval soʻraydi.
- **Boshqa slicerlar.** Kiri:Moto, PrusaSlicer va OrcaSlicer alohida qoʻshimchalar boʻlib, standart holda oʻchiq; ularni kartochkadan yoki {{ui:Sozlamalar}} › {{ui:Qoʻshimchalar}} boʻlimidan qoʻshing. PrusaSlicer va OrcaSlicer CadCraft Studio dan oʻrnatilgan oʻz nusxangizdan foydalanadi. Bambu Lab printerlari qoʻshimchasi OrcaSlicer va uning P2S oldindan sozlamalari bilan kesadi va kompyuterda Studio ni talab qiladi.
- **Qatronli bosma.** Qatron qoʻshimchalari (standart holda oʻchiq) printer ekrani uchun qatlam tasvirlarini yaratadi: ichini boʻshatish va shamollatish teshiklari, taglik va tayanchlar, qatlam koʻrinishi, shuningdek vaqt, qatron va narx. Fayl formati qoʻshimchalari Elegoo GOO, SL1, Chitubox (CBDDLP va CTB 2 dan 5 gacha) va Anycubic (PWMX va PWS) ni yozadi. Qatron ekspozitsiya sinovi besh ekspozitsiyali zina yaratadi. Qarang: [Qatronli printer uchun kesish](topic:resin-printing).
- **Oʻzgarmagan.** {{ui:Eksport}} › {{ui:3D bosma uchun tekshirish (STL yoki 3MF)…}}, bosma asboblari va {{ui:Bosma uchun boʻlish}} 0.8 dagidek ishlaydi. Qarang: [Modelni 3D bosma uchun tayyorlash](topic:print-3d).

### Material oqimi, Raqamli egizak va Sex maydoni

Bu uchtasi qoʻshimcha boʻlib, {{ui:Sozlamalar}} › {{ui:Qoʻshimchalar}} boʻlimida yoqmaguningizcha oʻchiq turadi va yoqqandan keyin har birining oʻz yordami bor.

- **Material oqimi.** Material oqimi nomli panel 3D koʻrinishda konveyerlar, stansiyalar, buferlar va AGV yoʻllarini joylashtiradi, urugʻ asosidagi simulyatsiyani ishga tushiradi, uni qayta ijro etadi va oʻtkazuvchanlik, yetkazib berish muddatlari hamda navbatlarni koʻrsatadi; natijalar CSV sifatida saqlanadi. Buyurtmalar CSV fayldan kelishi mumkin. Robot yacheykalarini tekshirish va eksport qilish mumkin. PLC ulanishida Modbus TCP ustida yumshoq rejim va haqiqiy rejim bor; haqiqiy rejim faqat CadCraft Studio da ishlaydi.
- **Raqamli egizak.** Material oqimi joylashuvini oʻqiydi va unda yumshoq PLC ishga tushiradi, majburan keltirib chiqariladigan nosozliklar, zaxira testlari, joylashuvlarni solishtirish va materiallar roʻyxati bilan.
- **Sex maydoni.** Stansiyalarni mashinalar va yacheykalarga aylantiradi, ularni jonli yoki simulyatordan oʻqiydi va ish navbatini hamda oddiy OEE ni saqlaydi. U faqat oʻqiydi: bu versiya mashina yoki PLC ga yoza olmaydi.

### Sirtlar, modellar va chizma

- **NURBS da yumaloqlash, qalinlashtirish va boolean amallari.** {{ui:Sirtlar}} panelida {{ui:Yuzalar orasini yumaloqlash}}, {{ui:Bir nechta qirrani yumaloqlash}}, {{ui:Qalinlashtirib yaxlit jismga aylantirish}} va Birlashtirish, Ayirish hamda Kesishish bor; har birida oʻlchangan chetlanish koʻrsatiladi. Qarang: [Erkin sirtlar (NURBS)](topic:nurbs-surfaces).
- **Sirtlarni skanerga moslash.** Skanerlangan meshni tanlang va **Skaner** guruhida {{ui:Sirtlarni skanerga moslash}} ni, soʻng {{ui:Sirtlarni jismga tikish}} ni ishlating. Bu birinchi moslash, toʻliq teskari muhandislik paketi emas.
- **.3dm modelchisidan jonli bogʻlanish.** Bir tomonlama, Rhino 8 yoki Grasshopper dan; va bir kompyuterda CadCraft Studio ni talab qiladi. Qarang: [.3dm modelini jonli saqlash](topic:live-3dm-link).
- **Modelni uchastkada koʻring.** {{ui:Koʻrinishlar}} menyusidagi {{ui:Uchastkada koʻrinish (AR, telefon)}} Chrome li Android telefonda ishlaydi. Qarang: [Modelni Android telefon bilan uchastkada koʻrish (AR)](topic:ar-on-site).
- **Yoy usullari.** {{ui:Yoy usullari}} ochiladigan roʻyxati yoy chizishning oʻnta usulini beradi, jumladan {{ui:3-Point}} va {{ui:Boshlanish, Markaz, Tugash}}.
- **Qoʻshimcha birliklar.** Massa (kg, lb, t, ton) va harorat (gradus C, F, K va R) birliklar bilan qiymat kiritadigan joylarda tushuniladi.

## Har bir ilovada

- **Maslahat matnlari.** Tugmalarda sichqoncha bilan ustiga kelganda chiqadigan matn va kesilgan yorliqlar Bootstrap tooltip hisoblanadi.
- **Yopiladigan boshlangʻich maslahat.** Boʻsh chizma maydonidagi maslahat kartochkasida kichik yopish x belgisi bor. U yopiq qoladi, buyruqlar palitrasi esa uni yana koʻrsatishi mumkin.
- **Aylantiriladigan yorliq qatorlari.** Panelning yorliqlar qatori sigʻmasa, u kesilmasdan aylanadi.
- **Yorliq nomlari.** Hujjat ochiq boʻlganda brauzer yorligʻi hujjat nomi bilan boshlanadi, soʻng ModelCraft va CadCraft. Saqlanmagan boʻlsa, oldida nuqta chiqadi.
- **Joylashuv.** {{ui:Sozlamalar}} › {{ui:Umumiy}} › Joylashuv tartiblarni roʻyxatda saqlaydi, shu ilova uchun alohida tartibdan foydalanish variantini va tartibni tiklash tugmasini beradi.
- **Tillar.** Sozlamalardagi tillar roʻyxati tuzilgan til fayllariga mos keladi. Ingliz tilidan boshqa tillar mashina qoralamalari.
- **Jonli va Kutubxona.** Live TeamWork jonli kursorlar va ismlarni koʻrsatadi, Kutubxona toʻplamlari esa har bir ilovaga standart toʻplam beradi.

## Tuzatilgan

- {{ui:Ijro}} animatsiya ijro etilayotganda {{ui:Pauza}} ga aylanadi, vaqt chizigʻi ochiq boʻlganda esa {{key:Space}} ijro etadi va pauza qiladi.
- Render rasmi, grafik karta yoʻl kuzatuvchisini ishga tushira olmasa, WebGL ga qaytadi. Jonli render koʻrinishi hali ham xatoni koʻrsatishi mumkin; bu, shu drayverli Windows kompyuterida tekshirilmagan.
- Material oqimining haqiqiy rejimi PLC istisno javoblari bilan bogʻlanish tugagach, yana ulanadi.

## Haqiqiy chegaralar

- Haqiqiy printerda hech narsa bosilmagan: na filament, na qatron, na Bambu Connect orqali. Qatron fayllari faqat CadCraft oʻqish vositalari bilan tekshirilgan.
- Raqamli egizak va Sex maydoni faqat simulyatorlar va maʼlum javoblarga qarshi sinalgan; haqiqiy PLC, liniya yoki protokol boʻlmagan. Ular tekshirish vositalari, xavfsizlik tasdigʻi emas. Fizika faqat qutilarni hisobga oladi, sakkiztagacha yuk bilan.
- Rhino va Grasshopper bogʻlanishi haqiqiy dasturlarda hech qachon ishlamagan.
- Ingliz tilidan boshqa tillar mashina qoralamalari.

## Oldingi: 0.8 va 0.8.1

Bu, 0.7 bilan solishtirganda ModelCraft 0.8 (2026-11-01) va 0.8.1 (2026-11-02) dagi oʻzgarishlar. {{ui:Rasm renderini yaratish…}} muloqot oynasi endi sahnani boshqa dasturga yuborishi mumkin, {{ui:Sirtlar}} paneli silliq erkin sirtlar yaratadi va siz ulagan yordamchi bitta gapda butun sahnani sozlashi mumkin.

### Yangi

**Renderlash**

- **Dvigatel tanlovi.** {{ui:Rasm renderini yaratish…}} da Rejimdan yuqorida **Dvigatel** roʻyxati bor. Bizning ikkita dvigatelimiz, Tez va Yoʻl kuzatuvchisi, standart va hamma joyda ishlaydi. Boshqa yozuvlar sahnani paket sifatida saqlaydi (model USD fayl sifatida, aniq material qiymatlari, yoqilgan chiroqlar, quyosh, osmon, ekspozitsiya va kamera sozlamalari bilan birga), boshqa dasturga olib borish uchun. Boshqa dastur chizgan rasm qaysi dastur va versiya tomonidan yaratilganini aytadi. Qarang: [Rasmni qaysi dastur chizishini tanlash](topic:render-engines).
- **Boshqa dasturda ochish.** Dvigatel roʻyxati sahnani USD fayl, glTF fayl (`.glb`) yoki Unreal loyiha papkasi (`.zip`) sifatida saqlashi mumkin, brauzerda va CadCraft Studio ilovasida. Studio da u usdview yoki kompyuterning oʻz dasturini faylni ochish uchun ham ishga tushirishi mumkin. Qarang: [Sahnani boshqa dasturda ochish](topic:render-open-in).
- **Studio dan oʻyin dvigateliga yuborish.** Studio sahnani Unreal Engine loyihasiga yozadi va har bir yuborishda uni yangilab turadi, faqat bir tomonlama. Sizning tahrirlaringiz CadCraft hech qachon yozmaydigan qatlamda saqlanadi. Qarang: [Sahnani oʻyin dvigateliga yuborish](topic:render-unreal).
- **Qoʻshimchalardan dvigatellar.** Qoʻshimcha roʻyxatga dvigatel qoʻshishi mumkin. JavaScript da yozilgani brauzerda va Studio da chizadi; dasturni ishga tushiradigani esa Studio da sizning roziligingizni talab qiladi. Qarang: [Rasmni boshqa dastur bilan chizish](topic:render-other-program) va [Qoʻshimcha orqali render dvigatelini qoʻshish](topic:render-engine-addons).
- **Sahnani ayting.** Ulangan yordamchingizga "tong oqshomi, yengil yomgʻir, kuzgi daraxtlar, maydondagi odamlar" deb ayting, va ModelCraft uni bitta qadamda sozlaydi: quyosh sana va vaqtga mos siljiydi, soyalar unga ergashadi, osmon oʻzgaradi, nam sirtlar paydo boʻladi, daraxtlar va odamlar esa yashirish, koʻchirish yoki oʻchirish mumkin boʻlgan teglarda haqiqiy obyektlar sifatida joylashtiriladi. Kun vaqti, sana yoki fasl hamda ob-havo (ochiq, bulutli, tuman, yengil yomgʻir, yomgʻir, boʻron) ham oʻz-oʻzidan ishlaydi, va keyingi soʻrov bir xil sahnani oʻzgartiradi. Tuman yuqori sifatli rasmda grafik kartada koʻrinadi; boshqa dvigatellar osmon, yorugʻlik va nam sirtlarni koʻrsatadi. Yomgʻir tushayotgan chiziqlar sifatida chizilmaydi.

**Materiallar**

- **Bitta fotodan material.** Sirtning bitta fotosini (devor, pol, tosh) ModelCraft ga bering, u plitka sifatida tutashadigan material yasaydi: fotodagi yoritish tekislanadi, chekkalar tutashtiriladi va rang xaritasi, gʻadir-budur xaritasi hamda normal xarita rasmdan hisoblanadi. Bu sizning rasmingizda oddiy tasvirga ishlov berish, oʻqitilgan model emas. Gʻadir-budurlik taxminiy. Oddiy, kvadrat, toʻgʻri tushirilgan foto eng yaxshi plitkani beradi; gʻisht kabi kuchli naqsh esa tutashgan joyda yumshoq xira shabah koʻrsatishi mumkin.

**Sirtlar**

- **Erkin sirtlar.** {{ui:Sirtlar}} paneli NURBS egri chiziqlar va kesilmagan sirtlar yasaydi: nuqtalar orqali egri chiziqlar, loft, ruled, extrude, revolve, bir yoki ikki relsda sweep, egri chiziqlar tarmogʻidan sirtlar, toʻrt qirradan yamoqlar, moslash va aralashtirish. Har bir umumiy qirra aniq sirtlarda G0, G1 yoki G2 (boʻshliq, burchak, egrilik sakrashi) sifatida oʻlchanadi, va siz soʻraganidan yomonroq qirra Muammolar panelida **Moslash** tuzatishi bilan chiqadi. Zebra chiziqlari va egrilik ranglari aniq sirtlardan chiziladi. STEP va IGES fayllari chiqadi va kiradi. Qarang: [Erkin sirtlar (NURBS)](topic:nurbs-surfaces).

**Uchastka va xonalar**

- **Eskiz fotosini yerga.** {{ui:Fayl}} › {{ui:Eskiz rasmini import qilish…}} telefondagi qoʻl eskizi fotosini siz koʻrsatgan masshtabda yer ustidagi qirralarga aylantiradi: bitta guruh, har bir qalam rangi uchun teg bilan. Qogʻoz kompyuteringizda topiladi va tekislanadi, hech narsa hech qayerga yuborilmaydi. Qarang: [Uchastka rejasida modellashtirish](topic:site-plan).
- **Xonani jihozlash.** Polni tanlang va {{ui:Tartiblash}} › {{ui:Xonani jihozlash…}} ni ishlating. Yotoqxona, mehmonxona, ovqatlanish xonasi, oshxona, hammom yoki ofis mebellari qoidalar boʻyicha devorlar boʻylab joylashtiriladi va eshik hamda derazalardan tashqarida, bitta guruhda boʻladi; uni bir qadamda olib tashlash mumkin. Bu koʻrib chiqish uchun standart joylashuv, loyiha emas. Qarang: [Boshlangʻich kutubxona](topic:starter).

**3D bosma**

- **Qiya kesimlar.** {{ui:Bosma uchun boʻlish}} kesimlarini 60 gradusgacha qiya qilishi mumkin, bu boʻlaklarga koʻproq yopishtirish yuzasi beradi. Ulagichlar kesimga nisbatan toʻgʻri turadi. Qarang: [Modelni bosma uchun boʻlish](topic:print-split).
- **Muammolardagi bosma tekshiruvi.** 3D bosma tekshiruvining natijalari Muammolar panelida modelda belgilar bilan koʻrinadi va **Tuzatish** ulardan shu yerning oʻzida tuzatadi. Qarang: [Tayanchlar, devor qalinligi, ichini boʻshatish va tuzatish](topic:print-tools).

**Har bir ilovada**

- **Tillar.** Yordam va ilovalar 54 tilda. Oʻntasi yangi: Litva, Latviya, Bosniya, Marathi, Telugu, Alban, Afrikaans, Filippin, Suahili va Oʻzbek. Ingliz tilidan boshqa tillar ona tilida soʻzlovchi oʻqib chiqmaguncha mashina qoralamasi boʻlib qoladi, yordam mavzulari esa hali ingliz tilida boʻlishi mumkin.
- **Kiritish qurilmalari.** Sensorli panel, qalam, 3D sichqoncha, oʻyin boshqaruvchisi va MIDI boshqaruvlari ilovalarni boshqarishi mumkin, hammasi uchun yoki bittasi uchun.
- **Asboblar paneli qatorlari.** {{ui:Sozlamalar}} › {{ui:Umumiy}} › Asboblar paneli qatorlari ni Wrap (avvalgidek), 2 qator yoki 1 qator qilib sozlaydi. Sigʻmaydigan panel chizma joyini egallamasdan yon tomonga aylanadi. Wrap standart boʻlib qoladi.
- **Xususiyatlar jadvali.** ModelCraft ning chiroq maydonlari umumiy jadvaldan foydalanadi: yigʻiladigan kategoriyalar, yorliq va qiymat ustunlari hamda Ixcham zichlik. Yozilgan arifmetika, masalan `2*450`, ishlashda davom etadi.
- **Muammolar.** Muammolar paneli (ilova panelidagi ogohlantirish tugmasi) barcha ilovalar uchun umumiy. ModelCraft da u bosma tekshiruvi va sirt uzluksizligi ogohlantirishlarini saqlaydi.
- **Jonli.** Live TeamWork sessiyasi kim qayerdaligini koʻrsatadi. Qarang: [Live TeamWork bilan birgalikda modellashtirish](topic:work-live).
- **Qoʻshimchalar.** Qoʻshimchalar yuqorida aytilganidek render dvigatellarini qoʻshishi mumkin.
- **AI ni ulang.** Asbob shartnomasi va sakkizta ilovaning tekshiruvlari oʻtdi, jami 454 ta asbob bilan. Studio ichida bir tugma bilan ulanish, brauzer yordamchilari uchun xostingdagi konnektor, Studio ichida oʻz kalitingiz va nashr etilgan paket hali vaʼda qilinmagan. Ilovalarda oʻzining sunʼiy intellekti yoʻq. Qarang: [ModelCraft ni AI yordamchilari bilan ishlatish](topic:use-with-ai-assistants).

### 0.8.1 da tuzatilgan

- **DWG sinflar boʻlimi.** DWG faylning sinflar boʻlimi notoʻgʻri turda oʻqilgan edi, bu importda faylni buzishi mumkin edi. Endi u toʻgʻri oʻqiladi, ModelCraft da va DWG ni oʻqiydigan boshqa ilovalarda.
- **Portret rejimidagi planshetlar.** Boʻsh setka balandligi chizma maydoniga beriladi va varaq tartibi 760 piksel yoki undan kam kenglikdan boshlanadi. ModelCraft ning uslublar varaqida ham shu oʻzgarish bor.
- **Studio dagi til.** CadCraft Studio va jamlangan nashrlar ishlayotganda tilni almashtira oladi; avval ular faqat ingliz tilida edi. Bu hali har bir platformada sinalmagan: til almashmasa, bizga xabar bering.

### Bu versiyada hali yoʻq

- **Kod bilan imzolanmagan.** Windows SmartScreen koʻrsatishi mumkin: {{ui:Batafsil maʼlumot}} ni tanlang, soʻng {{ui:Baribir ishga tushirish}} ni. Mac da sichqonchaning oʻng tugmasini bosing va {{ui:Ochish}} ni tanlang. Store versiyalari toʻxtatilgan, iPad va iPhone versiyasi esa 0.8.1 uchun qayta yigʻilmagan.
- Render dvigateli qoʻshimchasisiz boshqa dastur rasm chizishi, panorama yoki stereo kameralar, boshqa dastur orqali osmon rasmi va Unreal sahnasini ochadigan plagin hali yoʻq. Fayllar yoziladi; plagin chiqarilmagan va Unreal da ishga tushirilmagan.
- Erkin sirtlar: G3 va A sinfi oʻlchanmaydi va daʼvo qilinmaydi; kesish va jismlar keyinroq keladi.
- Boshqa dasturlar rasmlari bizniki bilan piksel-pikselmas: faqat kamera, quyosh, chiroqlar va ekspozitsiya mos keladi.
- Studio dagi til almashtirish uchun 0.8.1 tuzatishi har bir platformada sinalmagan.

Qolgan hamma narsa [Hali qurilmagan](topic:not-built-yet) boʻlimida. Oldingi reliz uchun qarang: [0.7 dagi yangiliklar](topic:whats-new-0-7).
