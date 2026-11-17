---
title: Modelning rasmini renderlash
summary: Kun yorugʻiga oʻxshash rasm yarating: osmon, modelingiz joyi va sanasiga mos quyosh, yumshoq soyalar, shisha va metall koʻrinishlari, soʻng rasmni PNG sifatida saqlang.
keywords: render, tayyor sozlama, tayyor sozlamalar, ichki, tashqi, kesim koʻrinishi, tun, bir bosishda, renderlash, nurni kuzatish, nur kuzatish, global yoritish, aks etish, sinish, yuqori sifat, foto, fotorealistik, realistik, rasm, tasvir, png, statik, osmon, quyosh, kun yorugʻi, soyalar, yumshoq soyalar, atrof-muhit okklyuziyasi, shisha, metall, yaltiroq, materiallar, ekspozitsiya, yorugʻlik, bulutli, alacakaranlik, studiya, taqdimot, tuman, xiralik, tumanlik, tutun, bulut, hajm, yorugʻlik nurlari, quyosh nurlari, kaustika, moslashuvchan namuna olish, shovqin
from: 517ba4d3
---

{{ui:Rasm renderini yaratish…}} koʻrinishning rasmini chizma emas, balki kun yorugʻidagidek qilib yaratadi: osmon, modelingiz joyi va sanasi qoʻyadigan quyosh, yumshoq soyalar, burchak va boʻshliqlarni qorongilashtiradigan butun osmondan tushgan yorugʻlik hamda shisha, metall yoki yaltiroq boʻyoq koʻrinishidagi ranglar. Model oʻzgarmaydi.

## Koʻrinishni renderlash

1. Rasm qanday boʻlishini xohlasangiz, koʻrinishni shunday sozlang: aylantiring, kattalashtiring, [sahna](topic:scenes) tanlang, koʻrinmasligi kerak boʻlgan narsalarni yashiring. Rasm koʻrinishning oʻz kamerasidan foydalanadi.
2. {{ui:Fayl}} guruhidagi {{ui:Eksport}} tugmasini, soʻng {{ui:Rasm renderini yaratish…}} ni bosing.
3. Agar bosilgan {{ui:Sahna}} sizga mos kelmasa, boshqasini tanlang ([Sahna tayyor sozlamalari](topic:render#scene-presets-a-good-picture-in-one-click) qarang), {{ui:Oʻlcham}} ni tanlang, soʻng {{ui:Render}} tugmasini bosing.

   Rasm render qilinish bilan toʻlib boradi va har bir oʻtishda silliqroq boʻladi. {{ui:Toʻxtatish}} (yoki {{key:Esc}}) uni erta tugatadi va shu paytgacha tayyor boʻlgan rasmni saqlab qoladi.

4. Uni yuklab olish uchun {{ui:Saqlash}} tugmasini bosing ({{ui:Boshqacha saqlash}} boshqacha koʻrsatmasa, PNG).

:::tip
Kamera va koʻrinishni tekshirish uchun avval {{ui:Koʻrinish oʻlchami}} oʻlchamida {{ui:Qoralama}} bilan boshlang, soʻng yakuniy rasm uchun kattaroq oʻlchamda {{ui:Yaxshi}} yoki {{ui:Eng yaxshi}} bilan renderlang.
:::

## Sahna tayyor sozlamalari: bir bosishda yaxshi rasm

Dialog yuqorisida toʻrtta {{ui:Sahna}} tugmasi bor. Har biri osmon, yorugʻlik, yer, qirra chiziqlari, sifat va quyoshni bir bosishda sozlaydi, shuning uchun birinchi rasmdan oldin oʻrganish kerak boʻlgan narsa yoʻq. Birini bosing, soʻng {{ui:Render}} tugmasini bosing.

| Sahna | Nima sozlaydi | Nima uchun |
|---|---|---|
| {{ui:Tashqi}} | Ochiq osmon, modelning oʻz quyoshi, yer yoqilgan | Binoni tashqaridan koʻrish uchun |
| {{ui:Ichki}} | Bulutli osmon (tekis yorugʻlik, quyoshning qattiq dogʻlarisiz), yarim pogʻona yorqinroq | Xona ichidan koʻrinish |
| {{ui:Kesim koʻrinishi}} | Oq studiya, yer yoʻq, tez renderda qirra chiziqlari | Kesim bilan kesilgan model |
| {{ui:Tun}} | Quyosh botgan (qishning oʻrtasidagi yarim tun, obyekt joylashgan yarim sharda), bir pogʻona yorqinroq | Modelni yoritadigan chiroqlar. Chiroqlar boʻlmasa, rasm qorongʻi boʻladi |

- {{ui:Bu koʻrinish uchun tanlash}} oʻzi tanlaydi: kesim yoqilgan boʻlsa {{ui:Kesim koʻrinishi}}, kamera model ichida boʻlsa {{ui:Ichki}}, aks holda {{ui:Tashqi}}. Dialogni birinchi marta ochganingizda u shunday boshlanadi.
- Quyida har bir sozlamani oʻzgartirish mumkin. Sahna belgilagan sozlamalardan birini oʻzgartirsangiz, hech bir sahna tugmasi bosilgan boʻlib qolmaydi va tugmalar ostidagi qator sozlamalar sizniki ekanligini aytadi. Qiymatlarini qaytarish uchun sahnani yana bosing.
- Sahna dvigatel, rejim, oʻlcham, materiallar, kamera va chiroqlarga tegmaydi.

:::note
Sahnalar ModelCraft va BimCraft’da bir xil qiymatlar beradi. Tayyor rasm qanday koʻrinishi modelingiz va grafik kartangizga bogʻliq.
:::

## Sozlamalar

| Sozlama | Nima qiladi |
|---|---|
| {{ui:Oʻlcham}} | Koʻrinish oʻlchami, koʻrinish oʻlchamining ikki barobari, Full HD, 4K yoki kvadrat. Qat’iy oʻlchamlar koʻrinish kamerasini saqlaydi va yonlarda koʻproq yoki kamroq koʻrsatadi |
| {{ui:Rejim}} | {{ui:Tez}} yoki pastda koʻrsatilgan {{ui:Yuqori sifat (nurni kuzatish)}} va uning {{ui:Vaqt chegarasi}} |
| {{ui:Sifat}} | Oʻrtachalangan oʻtishlar soni (yoki yuqori sifatda namunalar): {{ui:Qoralama}} 16, {{ui:Yaxshi}} 64, {{ui:Eng yaxshi}} 256. Oʻtishlar qancha koʻp boʻlsa, soyalar va qirralar shuncha silliq boʻladi, lekin vaqt koʻproq ketadi |
| {{ui:Osmon koʻki}} | {{ui:Ochiq osmon}}, {{ui:Bulutli}} (yumshoq yorugʻlik, xira soyalar), {{ui:Alacakaranlik}} (past, iliq yorugʻlik) yoki {{ui:Oq studiya}} (oddiy oq fon) |
| {{ui:Quyosh}} | Quyosh sanasi, vaqti va joyini {{ui:Uslub}} › quyosh boʻlimidan oladi. Modelning uslubini oʻzgartirmasdan boshqa vaqtni sinab koʻrish uchun {{ui:Bu rasm uchun boshqa sana va vaqtni tanlang}} ni belgilang |
| {{ui:Yorqinlik}} | Yorqinroq yoki qorongʻiroq, pogʻonalarda (stops) |
| {{ui:Model ostidagi yer}} | Soyalarni qabul qiladigan va ufqqa singib ketadigan yer. Havoda suzib yurgan model uchun oʻchiring |
| {{ui:Qirralarni chizish}} | Model qirralarini rasm ustida yupqa chizadi, chizma koʻrinishi uchun |

Tanlangan vaqtda quyosh ufqdan pastda boʻlsa, bu tun: osmon qorongʻilashadi va modelni [chiroqlar](topic:lights) yoritadi. Dialogda buni koʻrsatadi.

Sozlamalar `.modelcraft` faylida saqlanadi, shuning uchun xuddi shu modelning keyingi rasmi siz toʻxtatgan joydan boshlanadi.

## Ranglarni shisha yoki metallga oʻxshatish

{{ui:Materiallar}} ostida ekrandagi har bir rang uchun koʻrinish bor: {{ui:Xira}}, {{ui:Yarim yaltiroq}}, {{ui:Yaltiroq}}, {{ui:Metall}}, {{ui:Silliqlangan metall}}, {{ui:Oyna}} yoki {{ui:Xira shisha}}. {{ui:Boʻyalmagan yuzlar}} oʻz rangi boʻlmagan yuzlardir.

Derazalarni shishaga aylantirish uchun deraza oynalarini [boʻyang](topic:paint) bitta rang bilan, soʻng oʻsha rangni {{ui:Oyna}} ga oʻrnating. Oyna osmonni va uning orqasidagi narsalarni oʻz rangi bilan boʻyab koʻrsatadi va osmonni aks ettiradi.

:::note
{{ui:Tez}} rejimida oyna va metall modelning qolgan qismini emas, faqat osmonni aks ettiradi va yorugʻlik oyna orqali sinmaydi. Pastda koʻrsatilgan {{ui:Yuqori sifat (nurni kuzatish)}} rejimi ikkalasini ham bajaradi.
:::

## Yuqori sifat

Kamera koʻradigani kabi yorugʻlikni kuzatadigan rasm uchun {{ui:Rejim}} › {{ui:Yuqori sifat (nurni kuzatish)}} ni tanlang:

- yorugʻlik yuzalar orasida qaytadi, shuning uchun deraza orqali yoki chiroq bilan yoritilgan xona hamma tomondan yoritiladi va ranglar qoʻshnilariga oʻtadi;
- shisha haqiqiy shisha: yorugʻlik undan sinadi va u modelni aks ettiradi;
- metall va silliqlangan yuzalar modelning qolgan qismini aks ettiradi;
- yorugʻlik panellari panel sifatida yoritadi, yumshoq soyalar bilan.

Bu {{ui:Tez}} dan ancha sekin: har bir oʻtishda har bir pikselning yorugʻligi qayta kuzatiladi. Rasm donador boshlanadi va namunalar yigʻilgan sari tozalanadi, shuning uchun kichikdan boshlang ({{ui:Koʻrinish oʻlchami}}, {{ui:Qoralama}}) va {{ui:Vaqt chegarasi}} ni tanlang: vaqt tugasa, shu paytgacha tayyor boʻlgan rasm saqlanadi. {{ui:Toʻxtatish}} ham uni saqlaydi. Birinchi oʻtish brauzer yoʻl kuzatuvchisini tayyorlaguncha kutadi.

Brauzerda WebGPU boʻlsa, yoʻl kuzatuvchi CadCraft’niki boʻladi va grafik kartada ishlaydi; rasm ostidagi qator **Grafik kartada yoʻl kuzatilgan (WebGPU)** deb yozadi. {{ui:Toʻxtatish}} yoki vaqt chegarasidan keyin {{ui:Davom ettirish}} xuddi shu rasm bilan barcha namunalar tugaguncha davom etadi; sozlamani oʻzgartirish yoki {{ui:Render}} ni yana bosish yangidan boshlaydi. WebGPU boʻlmasa, yoʻl kuzatish oʻrniga WebGL bilan amalga oshadi (qatorda shunday deyiladi) va {{ui:Davom ettirish}} taklif qilinmaydi.

:::linux
Linux’dagi Firefox va koʻpchilik Chrome sozlamalarida hali WebGPU yoʻq, shuning uchun u yerda yuqori sifat WebGL dan foydalanadi.
:::

Bu rejimda qirralar chizilmaydi, kutubxona teksturalari oʻz rangi va gʻadir-budurligini koʻrsatadi, lekin ularning relyefini emas ([tugunlar bilan yaratilgan material](topic:shading#in-high-quality-pictures) normali va relyefini koʻrsatadi), va rasm boshlanishidan oldin modelda kesim qilinadi.

{{ui:Shovqinsizlantirish (namunalardan keyin qolgan donalarni olib tashlaydi)}} standart holatda yoqilgan: rasm tugaganda yoki toʻxtatilganda, qolgan donalar shu maqsad uchun yaratilgan neyron tarmoq bilan tozalanadi (Intel Open Image Denoise’ning eʼlon qilingan tarmogʻi, kompyuteringizda ishlaydi: grafik kartada, boʻlmasa protsessorda). Kam namunali rasm toza chiqadi; {{ui:Koʻrsatish}} › {{ui:Shovqinsizlantirishdan oldingi rasm}} uni renderlangandek koʻrsatadi.

## Koʻrinish ichida render qilish

{{ui:Render}} ish maydoni nur kuzatuvchini koʻrinishning oʻzida ishga tushiradi: aylantiring, modelni tahrirlang yoki chiroqni oʻzgartiring, u darhol qayta boshlanadi. {{ui:Hudud}}: toʻrtburchakni sudrang, faqat u render qilinadi; {{ui:Butun koʻrinish}} ortga qaytaradi. {{ui:Fokus}}: aniq boʻlishi kerak boʻlgan joyni bosing, maydon chuqurligi shu yerga fokuslanadi. {{ui:Tafsilot}} koʻrinishning qancha pikselini render qilishini belgilaydi (kamroq boʻlsa, tezroq). {{ui:Pauza}} toʻxtatadi va davom ettiradi. U WebGPU talab qiladi: uning yoʻqligida ish maydoni buni aytadi, lekin {{ui:Eksport}} › {{ui:Rasm renderini yaratish…}} ishlashda davom etadi.

## Grafik kartadagi osmonlar va yorugʻlik profillari

WebGPU boʻlganda yuqori sifatda yana ikkita osmon bor:

- {{ui:Fizik osmon}} kunduzgi yorugʻlikni quyosh balandligidan hisoblaydi: tepada chuqur koʻk, ufqda xira polosa va past turganda iliqroq va xiraroq quyosh. {{ui:Tumanlik}} juda musaffo kundan (2) tumanligacha (10) oʻzgaradi.
- {{ui:Osmon rasmi (HDRI)}} modelni haqiqiy joyning panorama rasmi bilan yoritadi. {{ui:Rasm tanlang…}} ekvirektangulyar `.hdr` yoki `.exr` faylini oladi; {{ui:Burish}} uni model atrofida buradi va {{ui:Rasm yorugʻligi}} uni yorqinroq yoki qorongʻiroq qiladi. Rasmning oʻz quyoshi bor, shuning uchun modelning quyoshi qoʻshilmaydi. U faqat sahifa ochiq turganda saqlanadi: qayta ochgandan keyin uni yana tanlang.

{{ui:Chiroqlar}} roʻyxatidagi har bir chiroq ishlab chiqaruvchining yorugʻlik profilini olishi mumkin: {{ui:IES profili…}} IES (LM-63) faylini oʻqiydi va chiroq yorugʻligini oʻsha armatura kabi tarqatadi (tor yoritgich, devor yuvuvchi). Shu nomdagi har bir chiroq uni ishlatadi, chiroq esa oʻz yorugʻligini saqlab qoladi. Profil nomini bosing, uni ishlatishni toʻxtatish uchun.

Shaffof shishadan yasalgan derazalar osmon yorugʻligini xonaga kirishga yordam beradi, shuning uchun osmon ostidagi ichki rasmlar tezroq tozalanadi.

{{ui:Tez}} rejimi va WebGL yoʻl kuzatuvchisi {{ui:Fizik osmon}} va {{ui:Osmon rasmi (HDRI)}} ni ochiq osmon sifatida koʻrsatadi va yorugʻlik profillarini eʼtiborsiz qoldiradi.

## Kamera

{{ui:Kamera}} rasmni fotosurat kabi sozlaydi:

- {{ui:Ekspozitsiya}}: {{ui:Yorugʻlik surgichi}} ni qoldiring yoki {{ui:Kamera sozlamalari}} ni tanlab, kamerada boʻlgani kabi {{ui:Diafragma (f-stop)}}, {{ui:Deklanshyor tezligi}} va {{ui:ISO}} ni oʻrnating; ularning yonidagi EV odatdagi ekspozitsiya qiymatidir. f/16, 1/100 s va ISO 100 quyoshli kunga toʻgʻri keladi; qorongʻiroq sahna kengroq diafragma, sekinroq deklanshyor yoki yuqoriroq ISO talab qiladi. Bu har qanday rejimda ishlaydi.
- {{ui:Maydon chuqurligi}} {{ui:Fokus masofasi (m)}} dan yaqin yoki uzoqdagi narsalarni xuddi shu f-stopli obyektiv kabi xiralashtiradi (markazdagi narsaga fokuslash uchun boʻsh qoldiring); {{ui:Diafragma shakli}} fokusdan tashqari yorugʻ joylarga yumaloq yoki qirrali shakl beradi.
- {{ui:Ikki nuqtali perspektiva (vertikal chiziqlar vertikal qoladi)}} kamerani tekislaydi va rasmni architektura tilt-shift obyektivi kabi siljitadi, shuning uchun binoga tepaga yoki pastga qaraganingizda devorlar egilib qolmaydi.
- {{ui:Oq balans}} qaysi yorugʻlik rangi oq boʻlib koʻrinishini belgilaydi: iliq chiroq yorugʻligi uchun pastroq (masalan 3000 K), soya va bulutli kunlar uchun yuqoriroq.
- {{ui:Proyeksiya}}: {{ui:360° panorama}} kamera atrofidagi hamma narsaning 2:1 rasmini panorama koʻruvchilar uchun yaratadi; {{ui:360° stereo panorama}} shlemlar uchun chap va oʻng koʻz panoramasini ustma-ust qoʻyadi; {{ui:Kub xaritasi (6 ta yuz)}} 3 × 2 toʻrda oltita kvadrat koʻrinish yaratadi. Kenglik {{ui:Oʻlcham}} dan olinadi.

Proyeksiya, maydon chuqurligi, ikki nuqtali perspektiva va oq balans grafik kartadagi yoʻl kuzatuvchini (WebGPU) talab qiladi, shuning uchun ular faqat {{ui:Yuqori sifat}} rejimida koʻrinadi.

## Rasmni yakunlash

{{ui:Rasm}} yuqori sifatli rasmni fotosurat kabi rang beradi va har bir boshqaruv tayyor rasmni qayta renderlamasdan darhol oʻzgartiradi:

- {{ui:Koʻrinish (koʻrinish konversiyasi)}}: {{ui:ACES filmik}} (rasm oldingidek), {{ui:AgX}} (yumshoqroq, juda yorugʻ yorugʻlikda rangni saqlaydi), {{ui:Filmik}} (yumshoq plyonka egri chizigʻi) yoki {{ui:Standart}} (oddiy, yorugʻ joylar oq rangga kesiladi).
- {{ui:Kontrast}} va {{ui:Yorugʻ joylarni siqish}} (juda yorugʻ qismlarda detallarni qaytaradi).
- {{ui:Bloom}} (yorugʻ yorugʻlik atrofida yumshoq nur), {{ui:Yorqinlik}} va uning {{ui:Yorqinlik chiziqlari}} (eng yorugʻ nuqtalardan yulduz nurlari) va {{ui:Vinyetka}} (qorongʻiroq burchaklar).
- {{ui:Rang jadvali (.cube)…}} `.cube` faylidan rang gradatsiyasini qoʻllaydi, uning {{ui:Rang jadvali kuchi}} bilan; osmon rasmi kabi u faqat sahifa ochiq turganda saqlanadi.

## Rasmni saqlash

{{ui:Saqlash}} yonidagi {{ui:Boshqacha saqlash}} faylni tanlaydi: ulashish uchun {{ui:PNG}}, {{ui:JPEG}} yoki {{ui:WebP}} (JPEG va WebP faqat brauzer ularni yoza oladigan joyda), va grafik kartadagi yuqori sifatli renderdan keyin yana:

- {{ui:PNG, 16 bit}}: rang darajalari orasida nozikroq qadamli tayyor rasm, chop etish yoki keyingi tahrir uchun.
- {{ui:EXR, har bir qatlam (32-bit suzuvchi nuqta)}}: render qilinganidek rasm (chiziqli yorugʻlik, rang berilmagan) har bir render elementi va yorugʻlik guruhi alohida qatlam sifatida, kompozitsiya dasturlari uchun.
- {{ui:Render fayli (.ccrender, keyinroq qayta tahrirlash uchun)}}: rasmni qayta aralashtirish va rang berish uchun dialogga kerak boʻlgan hamma narsa. {{ui:Render faylini oching…}} uni aralashmasi va rang berilishi bilan qayta ochadi, renderlamasdan.

## Renderdan keyin yorugʻliklarni aralashtirish

{{ui:Render}} ni bosishdan oldin {{ui:Yorugʻliklarni aralashtirish (renderdan keyin har bir chiroqning rangi va yorugʻligini oʻzgartiring)}} ni yoqing. Rasm tugaganda (yoki toʻxtatilganda) {{ui:Rasmni aralashtiring}} uning yorugʻliklarini guruhlarga koʻrsatadi: osmon, quyosh va chiroqlar nomi boʻyicha (bir xil nomli har bir chiroq bitta guruh). Guruhni oʻchiring, unga rang bering yoki yorqinroq yoki qorongʻiroq qiling, rasm darhol oʻzgaradi, qayta renderlanmasdan. {{ui:Aralashmani saqlash}} aralashmani keyinroq tanlash uchun nom bilan saqlaydi; {{ui:Render qilinganidek}} rasmni dastlabki holatiga qaytaradi. {{ui:Saqlash}} aralashtirilgan rasmni saqlaydi.

{{ui:Render elementlari (albedo, normallar, chuqurlik, diffuz, spekulyar, transmissiya, emissiya, ID lar)}} rasmning qismlarini ham saqlaydi. {{ui:Koʻrsatish}} koʻrinishni ulardan biriga oʻtkazadi: sirt ranglari (albedo), normallar, chuqurlik, diffuz, spekulyar va oʻtkazilgan yorugʻlik (har biri toʻgʻridan-toʻgʻri va bilvosita), yorugʻlik beradigan narsalar va osmon, hamda niqob yasash uchun har bir obyekt yoki material uchun rang.

Ikkalasi ham grafik kartada qoʻshimcha qatlamlarni saqlaydi. Katta oʻlchamlarda grafik kartada joy yetmasligi mumkin; dialog buni aytadi va kichikroq oʻlcham ishlaydi.

## Render navbati

Yuqori sifatli sozlashdan keyin {{ui:Render navbati}} ostidagi {{ui:Bu rasmni navbatga qoʻshish}} rasmni hozir qoʻyilgani kabi saqlaydi; video dialogidagi {{ui:Bu animatsiyani navbatga qoʻshish}} xuddi shuni butun animatsiya uchun qiladi, har bir kadr yoʻl kuzatish bilan. {{ui:Navbatni boshlash}} ularni shu kompyuterda ketma-ket renderlaydi, va tayyor boʻlgan har birining yonidagi {{ui:Saqlash}} uni yuklab oladi. Sahifani yopish navbatni saqlaydi: xuddi shu modelni oching va u toʻxtagan joydan davom etadi. Navbat WebGPU ni talab qiladi.

## Tuman, tutun, shovqin va kaustika

Bular {{ui:Tuman, tutun va shovqin}} ichida joylashgan va grafik kartadagi {{ui:Yuqori sifat}} rejimida ishlaydi; boshqa dvigatellarda ular yoʻq.

- {{ui:Tuman va xiralik}} havoni balandlikkacha tuman bilan toʻldiradi, uni quyosh, osmon va chiroqlar yoritadi. {{ui:Qanchalik uzoqni koʻrish mumkin, metrda}} uning qalinligini belgilaydi (taxminan 100 m yengil xiralik, 20 m qalin tuman), {{ui:Tumanning yer ustidan balandligi, metrda}} u qayerda tugashini koʻrsatadi va {{ui:Yorugʻlik nurlari}} tumanning yorugʻlik tomon qanchalik porlashini belgilaydi. Quyosh nuri tumanni uning yuqori qismidan tark etadi, shuning uchun quyosh deraza yoki binolar orasidan kirganda uni yorugʻlik nurlari sifatida koʻrasiz.
- {{ui:Tutun yoki bulut}} tuman kabi yoritilgan bitta tutun yoki bulut hajmini qoʻshadi. {{ui:Turi}} — {{ui:Bulut}}, {{ui:Tutun ustuni}} yoki {{ui:Hajm faylidan (.ccvol)}}, CadCraft’ning oʻz panjara formati. {{ui:Tafsilot}} va {{ui:Turlanish}} yaratilgan bulut yoki ustunni oʻzgartiradi, {{ui:Eng uzun tomonining oʻlchami, metrda (0 = modelning oʻlchami)}}, {{ui:X boʻylab surish (m)}}, {{ui:Y boʻylab surish (m)}}, {{ui:Z boʻylab surish (m)}} va {{ui:Burish}} uni joylashtiradi (u model oʻrtasidan boshlanadi), {{ui:Qalinlik}} uni zichroq qiladi, {{ui:Oldinga porlash}} uni yorugʻlik tomon yorqinroq qiladi va {{ui:Rang}} uni boʻyaydi. Hajm fayli xuddi osmon rasmi kabi faqat sahifa ochiq turganda saqlanadi.
- {{ui:Rasm toza boʻlgan joyda erta toʻxtatish (moslashuvchan namuna olish)}} tinchlangan piksellarga koʻproq namuna bermaydi, shuning uchun rasmning qolgan qismi tezroq tugaydi. {{ui:Qabul qilinadigan shovqin}} piksel toʻxtaganda qancha dona qolishini belgilaydi. Rasm ostidagi qator oʻrtacha piksel necha namuna olganini koʻrsatadi.
- {{ui:Kaustika (shisha orqali sinadigan yoki koʻzgudan qaytadigan yorugʻlik)}} chiroqlar va quyoshdan keladigan yorugʻlikni kuzatadi, shuning uchun shisha shar ostidagi yorugʻ dogʻ yoki devorga tushgan koʻzgu yorugʻligi donasiz, toza chiqadi. U tuman, tutun, {{ui:Rendadan keyin yorugʻliklarni aralashtirish}} yoki render elementlari yoqilgan boʻlsa oʻchiriladi, va u rasmlar uchun yaratilgan, 360° rasmlar, animatsiyalar yoki {{ui:Render}} ish maydoni uchun emas.

## Qancha vaqt ketadi

Rasm sizning kompyuteringizda, uning grafik kartasi bilan yaratiladi; hech narsa yuklanmaydi. Vaqt shu kartaga bogʻliq. Vaqt oʻtishlar va piksellar soniga qarab oshadi: {{ui:Eng yaxshi}} da {{ui:Qoralama}} dan 16 barobar koʻp oʻtish bor, 4K rasmda esa Full HD ga qaraganda taxminan toʻrt barobar koʻp piksel bor. Grafik kartasiz kompyuter ham render qiladi, lekin sekinroq.

:::note
Agar dialog brauzer rasm render qila olmasligini aytsa, brauzerda WebGL 2 yoʻq. Uni yangilang yoki sozlamalarida apparat tezlatishni yoqing.
:::
