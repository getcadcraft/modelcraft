---
title: 0.8 va 0.8.1 versiyasidagi yangiliklar
summary: Boshqa dasturlar uchun fayllar bilan render dvigateli tanlovi, oʻlchangan uzluksizlikka ega erkin shaklli NURBS sirtlar, yordamchingizga tasvirlab beradigan sahna, bitta fotosuratdan yaratilgan material, yer ustiga eskiz fotosurati, jihozlangan xonalar, 3D chop etish uchun qiya kesimlar va Muammolar panelidagi chop etish tekshiruvi.
keywords: yangiliklar, nima yangi, relizlar haqida eslatmalar, oʻzgarishlar jurnali, oʻzgarishlar, 0.8, 0.8.1, versiya, yangi imkoniyatlar, render dvigateli, dvigatel, boshqa dasturda ochish, usd, gltf, unreal, qoʻshimcha dvigateli, nurbs, sirtlar, loft, sweep, uzluksizlik, g0, g1, g2, zebra, step, iges, sahnani tasvirlash, sahna, ob-havo, kun vaqti, fasl, yordamchi, fotosuratdan material, fotosurat, eskiz fotosurati, jihozlash, xonani jihozlash, qiya, qiya kesim, ajratish, chop etish tekshiruvi, muammolar, xususiyatlar jadvali, lampalar, tillar, kiritish qurilmalari, asboblar paneli qatorlari, dwg, live
from: e4989b17
---

Bu ModelCraft 0.8 (2026-11-01) va 0.8.1 (2026-11-02) versiyalarida 0.7 bilan solishtirganda nimalar oʻzgarganini koʻrsatadi. {{ui:Rasm renderini yaratish…}} muloqot oynasi endi sahnani boshqa dasturga yuborishi mumkin, Sirtlar paneli silliq erkin shaklli sirtlar yaratadi, siz ulagan yordamchi esa bitta gap bilan butun sahnani sozlashi mumkin.

## Yangi

### Renderlash

- **Dvigatel tanlovi.** {{ui:Rasm renderini yaratish…}} oynasida Rejim ustida **Dvigatel** roʻyxati bor. Bizning ikkita dvigatelimiz, Fast va Path tracer, standart boʻlib, hamma joyda ishlaydi. Boshqa bandlar sahnani paket sifatida saqlaydi (model USD fayl sifatida, material qiymatlari aniq, yoqilgan lampalar, quyosh, osmon, ekspozitsiya va kamera sozlamalari bilan birga fayl) — boshqa dasturga olib borish uchun. Boshqa dastur chizgan rasmda qaysi dastur va qaysi versiya yaratgani koʻrsatiladi. Qarang: [Rasmni qaysi dastur chizishini tanlash](topic:render-engines).
- **Boshqa dasturda ochish.** Dvigatel roʻyxati sahnani USD fayl, glTF fayl (`.glb`) yoki Unreal loyihasi jildi (`.zip`) sifatida saqlashi mumkin, brauzerda va CadCraft Studio da. Studio da u usdview yoki kompyuterning oʻz dasturini fayl uchun ishga tushirishi ham mumkin. Qarang: [Sahnani boshqa dasturda ochish](topic:render-open-in).
- **Studio dan oʻyin dvigateliga yuborish.** Studio sahnani Unreal Engine loyihasiga yozadi va har bir yuborishda uni yangilab turadi, faqat bir tomonlama. Sizning tahrirlaringiz CadCraft hech qachon yozmaydigan qatlamda saqlanadi. Qarang: [Sahnani oʻyin dvigateliga yuborish](topic:render-unreal).
- **Qoʻshimchalardan dvigatellar.** Qoʻshimcha roʻyxatga dvigatel qoʻshishi mumkin. JavaScript da yozilgan dvigatel brauzerda va Studio da chizadi; dastur ishga tushiradigan dvigatel Studio da sizning roziligingizni talab qiladi. Qarang: [Rasmni boshqa dastur bilan chizish](topic:render-other-program) va [Qoʻshimcha yordamida render dvigatelini qoʻshish](topic:render-engine-addons).
- **Sahnani tasvirlab berish.** Ulangan yordamchiga "shom, yengil yomgʻir, kuzgi daraxtlar, maydonda odamlar" deb ayting — ModelCraft uni bir qadamda sozlaydi: quyosh sana va vaqtga qarab harakatlanadi, soyalar unga ergashadi, osmon oʻzgaradi, nam sirtlar paydo boʻladi, daraxt va odamlar esa yashirish, koʻchirish yoki oʻchirish mumkin boʻlgan belgilarga joylashtirilgan haqiqiy obyektlar sifatida qoʻyiladi. Kun vaqti, sana yoki fasl va ob-havo (ochiq, bulutli, tuman, yengil yomgʻir, yomgʻir, boʻron) ham alohida ishlaydi, keyingi soʻrov esa xuddi shu sahnani oʻzgartiradi. Tuman grafik kartadagi yuqori sifatli rasmda koʻrinadi; boshqa dvigatellar osmon, yorugʻlik va nam sirtlarni koʻrsatadi. Yomgʻir pastga tushayotgan chiziqlar sifatida chizilmaydi.

### Materiallar

- **Bitta fotosuratdan material.** ModelCraft ga sirt (devor, pol, tosh) fotosuratini bering — u plitkalanadigan material yaratadi: fotosurat boʻylab yoritish tekislanadi, qirralar tutashadi, rang xaritasi, gʻadirbudurlik xaritasi va normal xarita rasmdan hisoblanadi. Bu oʻz rasmingizda oddiy tasvirni qayta ishlash, oʻqitilgan model emas. Gʻadirbudurlik taxminiy. Oddiy, kvadrat, toʻgʻridan olingan fotosurat eng yaxshi plitkani beradi; gʻisht kabi kuchli naqsh tutashgan joyda yumshoq soya koʻrinishi berishi mumkin.

### Sirtlar

- **Erkin shaklli sirtlar.** {{ui:Sirtlar}} paneli NURBS egri chiziqlar va kesilmagan sirtlar yaratadi: nuqtalar orqali oʻtuvchi egri chiziqlar, loft, ruled, extrude, revolve, bir yoki ikki rels boʻylab sweep, egri chiziqlar tarmogʻidan sirtlar, toʻrt qirradan patchlar, moslash va aralashtirish. Har bir umumiy qirra aniq sirtlarda G0, G1 yoki G2 sifatida oʻlchanadi (boʻshliq, burchak, egrilik sakrashi), siz soʻraganingizdan yomonroq qirra esa Muammolar panelida **Moslash** tuzatishi bilan chiqadi. Zebra chiziqlari va egrilik ranglari aniq sirtlardan chiziladi. STEP va IGES fayllari chiqariladi va kiritiladi. Qarang: [Erkin shaklli sirtlar (NURBS)](topic:nurbs-surfaces).

### Maydon va xonalar

- **Eskiz fotosurati yer ustiga.** {{ui:Fayl}} › {{ui:Eskiz rasmini import qilish…}} qoʻl eskizining telefon fotosuratini siz aytgan masshtabda yer ustidagi qirralarga aylantiradi: bitta guruh, har bir qalam rangi uchun belgi bilan. Qogʻoz kompyuteringizda topiladi va tekislanadi, hech narsa hech qayerga yuborilmaydi. Qarang: [Modelni maydon rejasida joylashtirish](topic:site-plan).
- **Xonani jihozlash.** Pol tanlang va {{ui:Tartiblash}} › {{ui:Xonani jihozlash…}} ni ishlating. Yotoqxona, yashash xonasi, ovqat xonasi, oshxona, hammom yoki ofis mebeli qoidalar boʻyicha, devorlar yonida va eshik hamda derazalardan xoli holda joylashtiriladi, bir qadamda olib tashlash mumkin boʻlgan bitta guruhda. Bu loyiha emas, koʻrib chiqish uchun standart joylashuv. Qarang: [Boshlangʻich kutubxona](topic:starter).

### 3D chop etish

- **Qiya kesimlar.** Chop etish uchun ajratish kesimlarini 60 gradusgacha qiyalatish mumkin, bu boʻlaklarga koʻproq yopishtirish maydoni beradi. Ulagichlar kesimga nisbatan toʻgʻri turadi. Qarang: [Chop etish uchun modelni ajratish](topic:print-split).
- **Muammolardagi chop etish tekshiruvi.** 3D chop etish tekshiruvining natijalari Muammolar panelida modelda belgilar bilan koʻrinadi va Tuzatish ularni shu yerdan tuzatadi. Qarang: [Tayanchlar, devor qalinligi, boʻshatish va tuzatish](topic:print-tools).

### Barcha ilovalarda

- **Tillar.** Yordam va ilovalar 54 tilda. Oʻntasi yangi: litva, latviya, bosniya, marathi, telugu, alban, afrikaans, filippin, suahili va oʻzbek. Ingliz tilidan boshqa tillar tajribali mutaxassis oʻqib chiqmaguncha mashina qoralamasi boʻladi, yordam mavzularining bir qismi esa hali inglizcha boʻlishi mumkin.
- **Kiritish qurilmalari.** Sensorli panel, qalam, 3D sichqoncha, oʻyin boshqaruvchisi va MIDI boshqaruvlari ilovalarni hammasi yoki bittasi uchun boshqarishi mumkin.
- **Asboblar paneli qatorlari.** {{ui:Sozlamalar}} › {{ui:Umumiy}} › Asboblar paneli qatorlari O'rash (avvalgidek), 2 ta qator yoki 1 ta qator ni belgilaydi. Sigʻmaydigan panel chizma joyini olmasdan yon tomonga suriladi. O'rash standart boʻlib qoladi.
- **Xususiyatlar jadvali.** ModelCraft lampa maydonlari umumiy jadvaldan foydalanadi: yigʻiladigan kategoriyalar, yorliq va qiymat ustunlari hamda Ixcham zichlik. Kiritilgan arifmetika, masalan `2*450`, ishlashda davom etadi.
- **Muammolar.** Muammolar paneli (ilova panelidagi ogohlantirish tugmasi) barcha ilovalar uchun umumiy. ModelCraft da u chop etish tekshiruvini va sirt uzluksizligi ogohlantirishlarini saqlaydi.
- **Jonli.** Live TeamWork seansi kim qayerdaligini koʻrsatadi. Qarang: [Live TeamWork bilan birga modellashtirish](topic:work-live).
- **Qoʻshimchalar.** Qoʻshimchalar yuqorida aytilganidek render dvigatellarini qoʻshishi mumkin.
- **AI ni ulash.** Asboblar shartnomasi va sakkizta ilovaning tekshiruvlari oʻtdi, jami 454 ta asbob bilan. Studio ichida bir bosishda ulanish, brauzer yordamchilari uchun joylashtirilgan ulagich, Studio ichidagi oʻz kalitingiz va nashr etilgan paket hali va'da qilinmagan. Ilovalarda oʻz AI yoʻq. Qarang: [ModelCraft ni AI yordamchilari bilan ishlatish](topic:use-with-ai-assistants).

## 0.8.1 da tuzatilgan

- **DWG sinflar boʻlimi.** DWG fayl sinflar boʻlimi notoʻgʻri turda oʻqilgan edi, bu import qilishda faylni buzishi mumkin edi. Endi u toʻgʻri oʻqiladi: ModelCraft da va DWG ni oʻqiydigan boshqa ilovalarda.
- **Portret rejimidagi planshetlar.** Boʻsh panel balandligi chizmaga beriladi va varaq joylashuvi 760 piksel kenglik yoki undan kichik boʻlganda boshlanadi. ModelCraft ning uslublar varaqasida ham shu oʻzgarish bor.
- **Studio da til.** CadCraft Studio va qadoqlangan nashrlar ishlayotganda tilni almashtirishi mumkin; avval faqat inglizcha edi. Bu hali har bir platformada sinovdan oʻtmagan: til almashmasa, bizga xabar bering.

## Bu versiyada hali yoʻq

- **Kod bilan imzolanmagan.** Windows SmartScreen koʻrsatishi mumkin: {{ui:Batafsil}} ni tanlang, keyin {{ui:Baribir ishga tushirish}}. Mac da oʻng tugmani bosing va {{ui:Ochish}} ni tanlang. Doʻkon nashrlari toʻxtatilgan, iPad va iPhone nashri 0.8.1 uchun qayta yigʻilmagan.
- Render-dvigatel qoʻshimchasisiz boshqa dastur rasm chizishi, panorama yoki stereo kameralar, boshqa dastur orqali osmon rasmi va Unreal sahnasini ochadigan plagin hali yoʻq. Fayllar yoziladi; plagin chiqarilmagan va Unreal da ishga tushirilmagan.
- Erkin shaklli sirtlar: G3 va A klassi oʻlchanmaydi va da'vo qilinmaydi; kesish va qattiq jismlar keyinroq.
- Boshqa dasturlar chizgan rasmlar bizniki bilan piksel-piksel bir xil emas: faqat kamera, quyosh, lampalar va ekspozitsiya mos keladi.
- 0.8.1 dagi Studio tilini almashtirish tuzatmasi har bir platformada sinovdan oʻtmagan.

Qolgan hamma narsa [Hali qurilmagan](topic:not-built-yet) boʻlimida. Oldingi reliz uchun qarang: [0.7 dagi yangiliklar](topic:whats-new-0-7).
