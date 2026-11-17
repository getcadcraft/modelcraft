---
title: Hali qurilmagan
summary: ModelCraftning bu versiyasi hali nimani qilmasligi va bugun uning oʻrniga nima qilish kerakligi.
keywords: yoʻq, hali emas, cheklovlar, yoʻl xaritasi, materiallar, teksturalar, matn, qatlamlar, kesish, boʻlish, bulut, desktop
from: 179fa5e4
---

ModelCraft erta versiya. Bu sahifa hali bajarmaydigan narsalarni sanab beradi, toki ularni izlab ovora boʻlmaysiz, va ishni bugun bajarishning eng yaqin usulini koʻrsatadi.

## Chizish asboblari

| Hali emas | Oʻrniga, bugun |
|---|---|
| Erkin chizish | {{ui:Egri chiziq}} bilan nuqtalarni bosing |
| Chizgandan keyin yoy yoki aylananing segmentlar sonini oʻzgartirish | Oʻchiring va `24s` kiritgandan keyin qayta chizing |
| [3D matn](topic:text3d) uchun shrift tanlash yoki joylashtirgandan keyin uning soʻzlarini tahrirlash | Oʻchirib, matnni yana qoʻshing |
| Burchak oʻlchamiga yozib burchakni oʻzgartirish yoki silindr oʻlchamini uning aylana oʻlchamidan oʻzgartirish | Qirralarni {{ui:Aylantirish}} bilan aylantiring; silindrni {{ui:Masshtab}} bilan masshtablang |
| Eksport qilingan model fayllaridagi oʻlchamlar | Oʻlchamlar koʻrinishning rasm, bosma va PDF fayllarida chiqadi; model fayllarida faqat geometriya boʻladi |
| Kesish, Boʻlish va Tashqi qobiq | [Birlashtirish, Ayirish va Kesishtirish](topic:solids) yopiq guruhlari, yoki [yuzlarni kesishtirish](topic:intersect) va kerak boʻlmagan narsalarni oʻchirish |
| Oʻq tugmalari bilan aylanish oʻqini tanlash | Oʻq yoʻnalishi kerak boʻlgan tomonga qaragan yuzda {{ui:Aylantirish}} markazini bosing |
| Bir vaqtda bir nechta yoʻnalishni qulflash | Bitta yoʻnalishni oʻq tugmasi bilan qulflang, soʻng nuqtaga tutiling |
| Qiyalik boʻylab yoki burchakda boʻlmagan oʻlcham uchidan oʻlchamni oʻzgartirish | Oʻlchamni ikki burchakka, qirra boʻylab yoki qizil, yashil, koʻk boʻylab joylashtiring |

## Animatsiya

| Hali emas | Oʻrniga, bugun |
|---|---|
| Yuzlar, qirralar, quyoshning kun vaqti, uslub yoki yashirilgan narsalarni animatsiyalash | Harakatlanuvchi qismni guruh yoki komponentga aylantiring; boshqa kun vaqti uchun alohida video render qiling |
| Chizilgan yoʻlni kuzatadigan kamera yoki harakatlanuvchi obyektga qaraydigan kamera | Yoʻl boʻylab koʻproq kamera kalitlarini qoʻying ([Animatsiya](topic:animation)) |
| Videoda ovoz va WebGPUsiz yuqori sifatli (path-traced) videolar | Ovozni video muharririda qoʻshing; WebGPUsiz videoni tez renderer bilan render qiling ([Videoni render qilish](topic:animation#render-the-video)) |
| Renderlangan videodagi animatsiyalangan chiroqlar (yorqinlik, tarqalish, rang), videoda kamera kalitlarisiz animatsiyalangan obyektiv burchagi, materiallar yoki render sozlamalarini animatsiyalash | Chiroqlar koʻrinishda animatsiyalanadi; video uchun zoom qilish uchun kamerani ham kalitlang; chiroq sozlamalari uchun alohida videolarni render qiling ([Istalgan xususiyatni animatsiyalash](topic:animate)) |
| Ogʻirliklar yoki suyaklarni bir tomondan ikkinchisiga aks ettirish, koʻrinadigan suyak qobiqlari, ogʻirliklarni nuqtama-nuqta soyalash (ular yuz boʻyicha koʻrsatiladi), boʻyash paytida poza qilingan meshni koʻrish | Ikki tomonini boʻyang yoki bir yarmini yasab, armatura qoʻshilishidan oldin Mirror modifikatorini ishlating; tekshirish uchun Ogʻirliklarni boʻyash va Poza oʻrtasida almashing |
| glTF, FBX yoki USD fayllardan armatura sifatida oʻqiladigan suyaklar va bu fayllarga yoziladigan armaturalar | Skinli modellar fayldagi ogʻirliklar bilan tinch holatda kiradi; suyaklarni fayldagi boʻgʻin tartibida qoʻshing, soʻng {{ui:Fayldagi ogʻirliklarni ishlatish}} ([Animatsiya](topic:animate)) |
| IK nishonini yoki qutbni koʻrinishda sudrab koʻchirish, konstraintning oʻz fazosini (lokal yoki global) tanlash, IK zanjirlarini choʻzish, egri chiziq boʻylab IK | Nuqtasini kiriting yoki obyektga nishonlab, shuni koʻchiring; zanjirlarni uzunligida saqlang |
| Mato, suyuqliklar, yumshoq jismlar, qattiq jismlar orasidagi boʻgʻinlar va sharnirlar, obyektning aniq shakli bilan toʻqnashuv (faqat qutilar va sharlar bilan oʻralgan), oʻynatish paytida jonli simulyatsiya, boshlangʻich tezlik yoki aylanish (jismlar tinch holatda boshlanadi) | Qattiq jismlarni pishiring va kalitlarni oʻynating; kalitlardan sharnir yasang; gʻalati shaklni qutilarga (guruhlarga) boʻling |
| Animatsiyani glTF yoki boshqa model fayllariga eksport qilish | Video render qiling; `.modelcraft` fayli va ModelCraft saqlagan [USD fayli](topic:usd) uni ModelCraft uchun saqlaydi |
| VRda muammoga izoh yoki sarlavha yozish, ovozli eslatmalar, VRda kesim tekisligini qoʻlda surish | Muammoni VRda joylashtiring, soʻng uning matnini BCF dasturida qoʻshing; VRga kirishdan oldin koʻrinishda kesim tekisligini oʻrnating: qarang [VR shlemida modelni koʻrib chiqish](topic:vr-review) |
| VRda stol atrofidagi odamlarni koʻrish (faqat VRdagi odamlar koʻrinadi), VR sayrini yozib olish | Ularni VRda qoʻshilishga chaqiring, yoki sayrning [animatsiyasini](topic:animation) yarating |

## Meshlar

| Hali emas | Oʻrniga, bugun |
|---|---|
| Darajalar boʻyicha haykaltaroshlik (multiresolution) va Detail bilan kichrayib ketgan uchburchaklarni olib tashlash | [Haykaltaroshlik](topic:sculpt) qilingan boʻlinadigan mesh; tekis qilish uchun {{ui:Qayta mesh}} |
| Shaklga mos keladigan toʻrt qirrali yuzlarga qayta mesh | {{ui:Qayta mesh}} (teng uchburchaklar), soʻng uni [Retopologiya](topic:mesh-edit#retopology) bilan qayta quring |
| Modifikatorlar uchun uchlarga boʻyalgan ogʻirliklar (Displace, Smooth va Shrinkwrap butun mesh bilan ishlaydi) | Modifikatorni qoʻllang, soʻng kerak boʻlgan qismlarni haykaltaroshlik qiling yoki tahrirlang |
| Uchlar, qirralar yoki yuzlarni nusxalash va qoʻyish, yuz ichida tugaydigan pichoq kesimi, yuzi yoʻq sim qirralar | Modelda meshni dublikat qiling; qirradan qirragacha pichoq bilan kesing; ochiq qirralarni [Ekstruziya](topic:mesh-edit#change-the-shape) orqali yuzlarga aylantiring |

## Tashkil qilish va koʻrish

| Hali emas | Oʻrniga, bugun |
|---|---|
| DWG va DXF joy rejalaridagi qatlamlar teglar sifatida | Joy rejasi bitta guruh boʻlib kiradi: uni portlating va teglamoqchi boʻlgan qismlarni guruhlang |
| Bir vaqtning oʻzida bir nechta kesim, kesim quti yoki kesim konturini chizma sifatida eksport qilish | Bir vaqtda bitta [kesim tekisligi](topic:sections) kesadi; koʻrinishni rasm sifatida eksport qiling |
| Yumshoq qirralarni shtrix chiziq bilan koʻrsatish yoki surgichni surayotganda yumshatish | [Burchak boʻyicha yumshatish](topic:soften) (Obyekt maʼlumotida), boshqa burchakni sinash uchun esa ortga qaytaring |
| Qidiriladigan onlayn model kutubxonasi yoki tanlash variantlari bor komponentlar (rang, uslub) | [Boshlangʻich kutubxona](topic:starter); Collada, OBJ yoki glTF modellarini import qiling; nusxani oʻlchamga [choʻzing](topic:stretch) |
| Oʻsimliklar kutubxonasidan oʻsimliklarni joylashtirish | [Jonli koʻrinishda](topic:live-view#scatter-plants-rocks-and-people) oʻsimliklarni sochib tarqating, yoki boshlangʻich kutubxonadan daraxt joylashtiring |
| Guruhning mustaqil nusxalari | Uni komponentga aylantiring, soʻng {{ui:Yagona qilish}} ([Muammolarni bartaraf etish](topic:troubleshooting#editing-one-group-changed-another) ga qarang) |

## Renderlash

| Hali emas | Oʻrniga, bugun |
|---|---|
| Koʻrinishda renderlash ({{ui:Render}} ish maydoni), render navbati, WebGPUsiz kamera, osmon rasmi, tuman va yorugʻlikni aralashtirish sozlamalari | {{ui:Rasm renderini yaratish…}} ni {{ui:Yuqori sifat}} rejimida ishlating: u yerda WebGL trassirovka ishlaydi, bu sozlamalarsiz ([Rasm renderini yaratish](topic:render#high-quality)) |
| Render-dvigatel qoʻshimchasisiz render rasmini boshqa dastur chizishi (CadCraft hech qachon GNU GPL litsenziyasi ostidagi dasturni ishga tushirmaydi); boshqa dastur orqali panorama yoki stereo kameralar va osmon rasmi; Unreal Engine plagini (fayllar yoziladi, ularni ochadigan plagin chiqarilmagan) | Bizning Fast va Path tracer dvigatellarimiz; qoʻshimchaning dvigateli ([boshqa dastur bilan rasm chizish](topic:render-other-program)); istalgan dasturga olib borish uchun Engine roʻyxatidan USD, glTF yoki Unreal papka fayli |
| {{ui:Rasm renderini yaratish…}} da sochilgan oʻsimliklar va toshlar | Ular [jonli koʻrinish](topic:live-view), uning panoramalari, koʻruvchi va videosida koʻrinadi |

## Materiallar va ranglar

| Hali emas | Oʻrniga, bugun |
|---|---|
| Asosiy rang, gʻadir-budurlik, metallilik, shaffoflik, normal va emissiyadan boshqa kirishlar yuqori sifatli rasmlarda sirt boʻylab oʻzgarishi (ular oʻrtacha qiymatdan foydalanadi) | [Materiallarni tugunlar bilan yasash](topic:shading): baribir ulang, koʻrinish ularni oʻzgarib turgan holda koʻrsatadi |
| Itarish/tortish yuzlarida siljitish | Siljitish uchun obyektni meshga aylantiring |
| Ilovadan oʻz materiallaringizni Kutubxonaga ulashish, shuningdek import qilingan tekstura toʻplamida ARM/ORM yoki EXR xaritalari | Ularni faylda saqlang; alohida xaritalarni PNG yoki JPEG sifatida import qiling |
| Jonli TeamWork seanslaridagi fayl materiallari (ular ularni yaratgan kompyuterda qoladi) | Faylni saqlang va ulashing |
| Egri sirtlar atrofida egilgan dekallar, Ortga qaytarish ichidagi dekallar yoki chok boʻylab bir nechta yuzning teksturalarini bir vaqtda boʻyash | Har bir qismga kichikroq dekallar qoʻying; chokning ikki tomonini alohida boʻyang |
| Itarish/tortish yuzlariga pishirish, bir nechta obyektni bitta rasmga pishirish, qoʻlda shakllantiriladigan qafas yoki chiroqlardan pishirilgan yoritish | Meshga aylantiring va UV yoying; har bir obyektni pishiring; qidiruv masofasini oshiring; chiroq yorugʻligi uchun rasm render qiling |
| Gʻadir-budurlik, metallilik yoki balandlikni boʻyash, rasmlar bilan boʻyash (shtamplar) va 512 × 512 dan katta tekstura boʻyash | Bu yerda asosiy rangni boʻyang; boshqa xaritalarni rasm muharririda yasang va ularni tekstura toʻplami sifatida import qiling |
| Collada, STL, PLY, 3MF, IFC, DWG va DXF eksportidagi teksturalar hamda fayl materiallarining tugun grafiklari eksport qilingan modellarda | Bu formatlarda har bir materialning rangi boʻladi; glTF va OBJ import qilingan teksturalarni saqlaydi; alohida materialni [MaterialX](topic:shading#materialx) sifatida eksport qiling; [USD](topic:usd) ModelCraft uchun butun modelni saqlaydi |
| Collada fayllaridagi teksturalar | Ular sanaladi va import paytida chiqarib tashlanadi; `.skp` va `.glb` fayllaridagi teksturalar kiradi |

## Fayllar

| Hali emas | Oʻrniga, bugun |
|---|---|
| SketchUp fayllarini saqlash, ulardagi matn va oʻlchamlar | [Import](topic:import-sketchup-files) yuzlar, ranglar va teksturalarni saqlaydi; SketchUpga qaytish uchun Collada (`.dae`) eksport qiling |
| DWG va DXF eksportidagi oʻlchamlar va yoʻriqnomalar | Eksportdan keyin ularni CAD dasturida qoʻshing |
| DWG va DXF dagi nuqtalar, jadvallar va multileaderlar | Ular sanaladi va chiqarib tashlanadi; matn bir chiziqli yozuv sifatida kiradi, chizmaning shrifti emas |
| DWG va DXF dagi sirtlar, meshlar, jadvallar va multileaderlar; aylantirilgan, loftlangan yoki boshqa erkin shakldagi sirtlardagi 3D jismlarning yuzlari | Ular ham sanaladi va chiqariladi (3D jismlarning oʻzi kiradi). Bu qismlarni CAD dasturidan OBJ yoki Collada sifatida eksport qiling va uni import qiling |
| IFC turlari, xususiyatlari yoki materiallari | IFC eksporti [qavatlar](topic:formats#ifc-ifc) va umumiy elementlarni beradi; qolganlarini BIM dasturida qoʻshing |
| Modelni toʻgʻridan-toʻgʻri BimCraftga yuborish | {{ui:BimCraft uchun IFC (.ifc)}} ni eksport qiling va uni BimCraftda oching |
| glTF va STL dagi erkin qirralar | Chiziqli ishlar uchun OBJ yoki Collada ishlating |
| glTF va FBX materiallari asosiy rangdan tashqari (metall, gʻadir-budurlik, normal xaritalar, shisha, toza qatlam, sheen…) | Ular oʻqiladi va roʻyxatga olinadi; ModelCraft asosiy rang yoki teksturani saqlaydi. Koʻrinishni [Soyalash ish maydonida](topic:shading) qayta yarating |
| glTF suyaklari, animatsiyalar va morf nishonlari | Skinli modellar tinch holatda turgancha kiradi; [vaqt jadvali](topic:animation) da animatsiyalang |
| STEP fayllaridan ranglar va yigʻmaning qism nomlari | Qismlar oʻz haqiqiy oʻlchamida mesh sifatida kiradi; import qilgandan keyin [boʻyang](topic:paint) va nomlang |
| `.3dm` fayllaridan SubD obyektlar, matn, oʻlchamlar va chiroqlar | [Chiqarib tashlanganlar](topic:import-3dm-files#what-is-left-out-and-said) ga qarang; SubD ni meshga fayl yaratgan dasturda aylantiring |
| glTF dagi KTX2 teksturalar va material variantlari | Teksturalarni PNG yoki JPEG bilan eksport qiling; standart variant ishlatiladi |
| glTF instancing (EXT_mesh_gpu_instancing) yozish | Komponentlar bir marta yoziladi va koʻp marta joylashtiriladi, buni har bir koʻruvchi oʻqiydi |
| Alembic animatsiyasi (keshning har bir namunasi), Alembic nuqtalari va egri chiziqlari, Alembic yozish | Birinchi namuna kiradi; [vaqt jadvali](topic:animation) da animatsiyalang; glTF, USD yoki OBJ yozing |
| OBJ materiallaridagi bump va normal xaritalar | Faqat rang rasmi (`map_Kd`) kiradi |
| FBX suyaklari va animatsiyasi, FBX eksporti, FBX 6 fayllari | Suyakli modellar tinch holatda kiradi; glTF eksport qiling; eski fayllarni FBX 2011 yoki undan yangi sifatida saqlang |
| Collada skinlari, morflar, kameralar, chiroqlar, look-at va skew oʻzgartirishlari, tashqi havolalar | Import paytida chiqarib tashlanadi va xabarda sanaladi |
| Zaxira nusxa fayllari | {{ui:Boshqacha saqlash}} ({{key:Mod+Shift+S}}) boshqa nusxani saqlaydi. Halokatdan keyin ModelCraft saqlanmagan ishingizni qaytarishni taklif qiladi ("Ishingizni tiklaysizmi?") |
| Kompyuterlar orasida bulutga saqlash va sinxronlash | Hali mavjud emas. Fayllarni kompyuteringizga saqlang va kerakli joyga nusxalang |

## 3D bosish

| Hali emas | Oʻrniga, bugun |
|---|---|
| Haqiqiy slayserning tayanchlari (interfeyslar, plot, aniq tayanch naqshi) | [Tayanchlar koʻrinishi](topic:print-tools#supports-preview) qayerda va taxminan qancha ekanini koʻrsatadi; slayseringizning koʻrinishi haqiqiylarini koʻrsatadi |
| Oʻzidan oʻtib ketadigan qismni ajratish yoki uchta va undan ortiq yuz uchrashgan qirralar | [Tuzatish](topic:print-tools#repair) ularni qayerdaligi bilan sanaydi; [Yuzlarni kesishtirish](topic:intersect) dan foydalaning va ichidagilarini oʻchiring |
| Toʻldirish naqshlari va boʻshliq ichidagi panjara | [Boʻshatish](topic:print-tools#hollow) uni boʻsh qoldiradi; slayseringiz qattiq qismga toʻldirish qoʻshadi |
| Soplangiz uchun juda kichik detallar (devorlardan tashqari) | [Devor qalinligi](topic:print-tools#wall-thickness) yupqa devorlarni topadi; slayseringizning qatlam koʻrinishi qolganini koʻrsatadi |

## Unumdorlik

Ortga qaytarish har bir qadam uchun model nusxasini saqlaydi ([mesh](topic:meshes) faqat oʻzgarganini saqlaydi), shuning uchun itarish/tortish geometriyasining juda katta importlari har bir tahrirni sekinlashtiradi. Importlarni yengil saqlang va tarixni tozalash uchun saqlab, qayta oching.

## Ilovalar va platformalar

- **Desktop:** ModelCraft Mac, Windows va Linuxda brauzerda ishlaydi, hamda barcha sakkizta ilova bitta oʻrnatishda boʻlgan CadCraft Studio desktop ilovasida ishlaydi. Androidda CadCraft Studio getcadcraft.com/download dagi APK orqali oʻrnatiladi. Hali iPad yoki iPhone versiyasi yoʻq.
- **Sensorli ekran:** barmoq imolari uchun [Orbita, surish va kattalashtirish](topic:orbit-pan-zoom) ga qarang. Qalam bosimi [Haykaltaroshlik](topic:sculpt) da cho'tkani belgilaydi; boshqa joyda bosim va qalam qiyaligi ishlatilmaydi.
- **Varaqlar:** ModelCraft [har bir sahifaga bitta koʻrinishni chop etadi](topic:export-model#print-the-view-or-save-it-as-a-pdf); bir nechta koʻrinishli va sarlavha blokli varaq tartibi yoʻq. Masshtabli chizmalar uchun CadCraftga mos DWG/DXF formatiga eksport qiling.
