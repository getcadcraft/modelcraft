---
title: 0.9-da yeniliklər
summary: Öz slicer-imiz və USB, Klipper, OctoPrint və PrusaLink-ə göndərmə ilə çap mərhələsi, qatranla dilimləmə və fayl əlavələri, material axını, rəqəmsal əkiz və zavod mərtəbəsi əlavələri, NURBS yumrulaşdırmaları, qalınlaşdırma və skan uyğunlaşdırması, sahədə AR və on qövs üsulu.
keywords: yeniliklər, nə yenidir, buraxılış qeydləri, dəyişikliklər jurnalı, dəyişikliklər, 0.9, çap mərhələsi, 3d çap, printerə göndər, slicer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, qatran, qatran çapı, goo, sl1, ctb, anycubic, ekspozisiya testi, material axını, rəqəmsal əkiz, zavod mərtəbəsi, plc, konveyer, nurbs, yumrulaşdırma, qalınlaşdırma, skan uyğunlaşdırması, ar, sahədə, qövs üsulları, vahidlər, 0.8, 0.8.1, versiya, yeni xüsusiyyətlər, render mühərriki, mühərrik, başqa proqramda aç, usd, gltf, unreal, əlavə mühərrik, səthlər, loft, süpürmə, davamlılıq, g0, g1, g2, zebra, step, iges, səhnəni deyin, səhnə, hava, günün vaxtı, fəsil, köməkçi, fotodan material, foto, eskiz fotosu, döşəmə, otağı döşəmək, əyilmiş kəsik, bölmə, çap yoxlaması, problemlər, xüsusiyyət cədvəli, lampalar, dillər, giriş cihazları, alət sətirləri, dwg, canlı
from: 169048a2
---

Bu, ModelCraft 0.9-da 0.8.1-ə nisbətən nəyin dəyişdiyidir. ModelCraft indi printerə və zavod mərtəbəsinə çatır: çap yatağına şeyləri qoyub onları ixrac etmədən göndərə, filament və ya qatran üçün dilimləyə və material-idarəetmə xətti quraraq planlaşdıra bilərsiniz. Bu, CadCraft Studio 0.9 və onun səkkiz tətbiqidir; aşağıdakı yeni xüsusiyyətlərin çoxu əlavədir.

## Yeni

### 3D çap

- **Çap mərhələsi.** Alətlər panelində {{ui:Çap mərhələsi}} klikləyin. Printerin yatağına Kitabxana elementləri əlavə edin, onları düzləşdirin, dilimlənmiş qatlara baxın və STL ixrac etmədən {{ui:3D printerə göndər}} basın. Bu, defolt olaraq aktiv olan və hər hansı digər əlavə kimi silinə bilən 3D Çap əlavəsinə aiddir. Bax: [Şeyləri çap yatağına qoyun və printerə göndərin](topic:print-stage).
- **Öz filament slicer-imiz.** {{ui:CadCraft basic (daxil, ən sürətli)}} kartdakı **Slicer** siyahısındakı slicer-dir: divarlar, qabıqlar, doldurma, dayaqlar və skirt, səhifə cavab verməyə davam etsin deyə işçidə işləyir. {{ui:Qatları önizləyin}} **Layer** sürüşdürücüsü ilə göndərmədən əvvəl qatları göstərir. Ender-3 və Prusa MK4 üslublu printer profilləri öz başlanğıc G-kodunu daşıyır.
- **Göndərmə.** USB ilə (kompüterdə Chrome və ya Edge, səhifə açıq qalmaqla), və ya şəbəkənizdə Klipper (Moonraker), OctoPrint və ya PrusaLink-ə. Klik olmadan heç nə qoşulmur və göndərilmir, və göndərmə əvvəl soruşur.
- **Digər slicer-lər.** Kiri:Moto, PrusaSlicer və OrcaSlicer öz əlavələridir, defolt olaraq söndürülüdür; onları karta və ya {{ui:Parametrlər}} › {{ui:Əlavələr}} bölməsindən əlavə edin. PrusaSlicer və OrcaSlicer CadCraft Studio-dan öz quraşdırılmış nüsxənizi istifadə edir. Bambu Lab printerləri əlavəsi OrcaSlicer-ə və onun P2S presetlərinə görə dilimləyir və kompüterdə Studio tələb edir.
- **Qatran çapı.** Qatran əlavələri (defolt olaraq söndürülüdür) printerin ekranı üçün qat şəkilləri yaradır: oyma və havalandırma deşikləri, raft və dayaqlar, qat önizləməsi, vaxt, qatran və dəyər hesabı ilə. Fayl-format əlavələri Elegoo GOO, SL1, Chitubox (CBDDLP və CTB 2-dən 5-ə) və Anycubic (PWMX və PWS) yazır. Qatran ekspozisiya testi beş ekspozisiyadan ibarət nərdivan yaradır. Bax: [Qatran printeri üçün dilimləyin](topic:resin-printing).
- **Dəyişməyib.** {{ui:İxrac}} › {{ui:3D çap üçün yoxlayın (STL və ya 3MF)…}}, çap alətləri və Çap üçün bölmək 0.8-dəki kimi işləyir. Bax: [Modeli 3D çap üçün hazırlayın](topic:print-3d).

### Material axını, rəqəmsal əkiz və zavod mərtəbəsi

Bu üçü əlavədir, {{ui:Parametrlər}} › {{ui:Əlavələr}} bölməsində yandırana qədər söndürülüdür, və hər biri aktiv olandan sonra öz yardımına malikdir.

- **Material axını.** Material axını adlı panel 3D görünüşdə konveyerləri, stansiyaları, buferləri və AGV yollarını düzləşdirir, təsadüfi toxumla işləyən simulyasiya işlədir, onu geri oynadır və ötürmə qabiliyyətini, gözləmə müddətlərini və növbələri göstərir; nəticələr CSV kimi saxlanılır. Sifarişlər CSV faylından gələ bilər. Robot xanaları yoxlanıla və ixrac edilə bilər. PLC əlaqəsinin yumşaq rejimi və Modbus TCP üzərindən real rejimi var, yalnız CadCraft Studio-da işləyir.
- **Rəqəmsal əkiz.** Material axını düzülüşünü oxuyur və üzərində yumşaq PLC işlədir, məcburi nasazlıqlar, ehtiyat sınaqları, düzülüş müqayisəsi və material siyahısı ilə.
- **Zavod mərtəbəsi.** Stansiyaları maşınlara və xanalara çevirir, onları canlı oxuyur və ya simulyatordan, iş növbəsini və sadə OEE-ni saxlayır. Yalnız oxuyur: bu quruluş maşına və ya PLC-yə yaza bilməz.

### Səthlər, modellər və çertyoj

- **NURBS-də yumrulaşdırmalar, qalınlaşdırma və Boolean.** {{ui:Səthlər}} paneli {{ui:Üzlər arasında yumrulaşdırma}}, {{ui:Bir neçə kənarı yumrulaşdır}}, {{ui:Qalınlaşdırıb həcmli cismə çevir}} və {{ui:Birləşdir}}, {{ui:Çıxar}} və {{ui:Kəsişdir}} var, hər biri ölçülmüş meyli ilə. Bax: [Sərbəst səthlər (NURBS)](topic:nurbs-surfaces).
- **Skanı səthlərlə uyğunlaşdırın.** Skan edilmiş meshi seçin və **Scan** qrupunda {{ui:Səthləri skana uyğunlaşdır}} istifadə edin, sonra {{ui:Səthləri bərk cismə tikin}}. Bu ilk uyğunlaşdırmadır, tam tərs mühəndislik paketi deyil.
- **.3dm modelləşdiricisindən canlı əlaqə.** Birtərəfli, Rhino 8 və ya Grasshopper-dən, və eyni kompüterdə CadCraft Studio tələb edir. Bax: [.3dm modelini canlı saxlayın](topic:live-3dm-link).
- **Modeli sahədə görün.** {{ui:Görünüşlər}} menyusundakı {{ui:Sahədə bax (AR, telefon)}} Chrome ilə Android telefonda işləyir. Bax: [Modeli Android telefonla sahədə görün (AR)](topic:ar-on-site).
- **Qövs üsulları.** {{ui:Qövs üsulları}} açılan siyahısı qövs çəkməyin on yolunu təklif edir, o cümlədən {{ui:3 nöqtə}} və {{ui:Başlanğıc, Mərkəz, Son}}.
- **Daha çox vahid.** Çəkilər (kq, lb, t, ton) və temperaturlar (C, F, K və R dərəcələri) vahidləri ilə dəyər yazdığınız yerlərdə başa düşülür.

## Bütün tətbiqlərdə

- **Alət ipucları.** Düymələr üzərindəki mətn və kəsilmiş etiketlər Bootstrap tooltip-dir.
- **Bağlanan başlanğıc göstərişi.** Boş çertyoj sahəsindəki göstəriş kartında kiçik bağlama x-i var. O bağlı qalır, və komanda palitrası onu yenidən göstərə bilər.
- **Sürüşən bölmə zolaqları.** Sığmayan panelin bölmə zolağı kəsilmək əvəzinə sürüşür.
- **Bölmə başlıqları.** Sənəd açıq olanda brauzer sekmesi sənədin adı ilə başlayır, sonra ModelCraft və CadCraft. Yadda saxlanmamış olduqda əvvəl nöqtə gəlir.
- **Tərtibat.** {{ui:Parametrlər}} › {{ui:Ümumi}} › Tərtibat, tərtibatları açılan siyahıda saxlayır, yalnız bu tətbiq üçün tərtibatdan istifadə seçimi və tərtibatı sıfırlamaq düyməsi ilə.
- **Dillər.** Parametrlərdəki dil siyahısı quruluşun ehtiva etdiyi dil fayllarını izləyir. İngilisdən başqa dillər maşın qaralamalarıdır.
- **Canlı və Kitabxana.** Canlı TeamWork kursorları və adları göstərir, Kitabxana kolleksiyaları hər tətbiqə defolt kolleksiya verir.

## Düzəlişlər

- {{ui:Play}} animasiya oynayarkən {{ui:Pause}}-a çevrilir, və zaman cədvəli açıq olduqda {{key:Space}} oynadır və dayandırır.
- Qrafik kartı yol izləyicini işə sala bilmədikdə, şəkil render WebGL-ə keçir. Canlı render görünüşü hələ də xətanı göstərə bilər; bu, həmin drayverlə Windows kompüterində yoxlanılmayıb.
- Material axını real rejimi PLC istisna cavabları ilə əlaqə bitdikdən sonra yenidən qoşulur.

## Dürüst məhdudiyyətlər

- Heç nə real printerdə çap olunmayıb: nə filament, nə qatran, nə də Bambu Connect ilə. Qatran faylları yalnız CadCraft-ın öz oxuyucuları ilə geri oxunub.
- Rəqəmsal əkiz və zavod mərtəbəsi yalnız simulyatorlar və məlum cavablarla sınaqdan keçirilib, real PLC, xətt və ya protokol olmadan. Onlar yoxlama vasitələridir, təhlükəsizlik təsdiqi deyil. Fizika yalnız qutuları əhatə edir, səkkiz yükə qədər.
- Rhino və Grasshopper əlaqəsi real proqramlarda heç vaxt işləməyib.
- İngilisdən başqa dillər maşın qaralamalarıdır.

## Əvvəlki: 0.8 və 0.8.1

Bu, ModelCraft 0.8 (2026-11-01) və 0.8.1 (2026-11-02) buraxılışlarında 0.7-yə nisbətən nəyin dəyişdiyidir. {{ui:Şəkil render edin…}} dialoqu indi səhnəni başqa proqrama göndərə bilir, Səthlər paneli hamar sərbəst səthlər yaradır, və qoşulmuş köməkçi bir cümlədən bütün səhnəni quraşdıra bilir.

### Yeni

**Render**

- **Mühərrik seçimi.** {{ui:Şəkil render edin…}} dialoqunda Rejimin üstündə **Mühərrik** siyahısı var. Öz iki mühərrikimiz, Sürətli və Yol izləyici, defolt olaraq və hər yerdə işləyir. Digər girişlər səhnəni paket kimi saxlayır (model USD faylı kimi, plus materialların dəqiq dəyərləri, yanan lampalar, günəş, səma, pozlama və kamera ilə parametr faylı) başqa proqrama aparmaq üçün. Başqa proqramın çəkdiyi şəkil hansı proqram və versiyanın onu çəkdiyini deyir. Bax: [Şəkli hansı proqramın çəkməsini seçin](topic:render-engines).
- **Başqa proqramda açın.** Mühərrik siyahısı səhnəni USD faylı, glTF faylı (`.glb`) və ya Unreal layihə qovluğu (`.zip`) kimi saxlaya bilər, həm brauzerdə, həm də CadCraft Studio-da. Studio-da həmçinin faylı usdview və ya kompüterin öz proqramında aça bilər. Bax: [Səhnəni başqa proqramda açın](topic:render-open-in).
- **Studio-dan oyun mühərrikinə göndərin.** Studio səhnəni Unreal Engine layihəsinə yazır və hər göndərmədə onu sinxron saxlayır, yalnız bir istiqamətdə. Öz dəyişiklikləriniz CadCraft-ın heç vaxt yazmadığı təbəqədə yaşayır. Bax: [Səhnəni oyun mühərrikinə göndərin](topic:render-unreal).
- **Əlavələrdən mühərriklər.** Əlavə siyahıya mühərrik əlavə edə bilər. JavaScript ilə yazılanlar brauzerdə və Studio-da çəkir; proqram işlədən biri Studio-da sizin razılığınızı tələb edir. Bax: [Şəkli başqa proqramla çəkin](topic:render-other-program) və [Əlavə ilə render mühərriki əlavə edin](topic:render-engine-addons).
- **Səhnəni deyin.** Qoşulmuş köməkçinizə "axşam, yüngül yağış, payız ağacları, meydanda insanlar" deyin və ModelCraft onu bir addımda qurur: günəş tarix və vaxta uyğun hərəkət edir ki, kölgələr izləsin, səma dəyişir, islanmış səthlər görünür, ağaclar və insanlar isə gizlədilə, köçürülə və ya silinə bilən teqlərdə real obyektlər kimi yerləşdirilir. Günün vaxtı, tarix və ya fəsil, və hava (aydın, buludlu, duman, yüngül yağış, yağış, fırtına) təkbaşına da işləyir, və sonrakı sorğu eyni səhnəni dəyişir. Duman yüksək keyfiyyətli şəkildə qrafik kartında görünür; digər mühərriklər səma, işıq və islanmış səthləri göstərir. Yağış düşən zolaqlar kimi çəkilmir.

**Materiallar**

- **Bir fotodan material.** ModelCraft-a səthin fotosunu (divar, döşəmə, daş) verin və o, döşənən material yaradır: fotonun üzərindəki işıq düzləşdirilir, kənarlar birləşdirilir və rəng xəritəsi, pürüzlülük xəritəsi və normal xəritə fotodan hesablanır. Bu, öz şəkliniz üzərində sadə şəkil emalıdır, öyrədilmiş model olmadan. Pürüzlülük təxminidir. Düz, kvadrat, düz baxılan foto ən yaxşı kafeli verir; kərpic kimi güclü naxış birləşmədə yumşaq kölgə göstərə bilər.

**Səthlər**

- **Sərbəst səthlər.** {{ui:Səthlər}} paneli NURBS əyriləri və kəsilməmiş səthlər yaradır: nöqtələrdən keçən əyrilər, loft, ruled, ekstruziya, fırlatma, bir və ya iki relsdə süpürmə, əyri şəbəkəsindən səthlər, dörd kənardan yamalar, uyğunlaşdırma və qarışdırma. Hər paylaşılan kənar G0, G1 və ya G2 (boşluq, bucaq, əyrilik sıçrayışı) kimi dəqiq səthlərdə ölçülür, və istədiyinizdən pis kənar Problemlər panelində **Uyğunlaşdır** düzəlişi ilə görünür. Zebra zolaqları və əyrilik rəngləri dəqiq səthlərdən çəkilir. STEP və IGES faylları çıxır və girir. Bax: [Sərbəst səthlər (NURBS)](topic:nurbs-surfaces).

**Sahə və otaqlar**

- **Eskiz fotosu yerə.** {{ui:Fayl}} › {{ui:Eskiz şəkli idxal et…}} əlinizlə çəkilmiş eskizin telefon fotosunu, dediyiniz miqyasda yerdəki kənarlara çevirir: bir qrup, hər qələm rəngi üçün teq. Kağız kompüterinizdə tapılır və düzləşdirilir, heç nə heç yerə göndərilmir. Bax: [Model site planında](topic:site-plan).
- **Otağı döşəyin.** Döşəmə seçin və {{ui:Təşkil}} › {{ui:Otağı mebellə təchiz et…}} istifadə edin. Yataq otağı, qonaq otağı, yemək otağı, mətbəx, hamam və ya ofis mebeli qaydalarla yerləşdirilir, divarlara qarşı və qapı və pəncərələrdən uzaqda, bir addımda götürülə bilən bir qrupda. Bu sizin nəzərdən keçirməyiniz üçün defolt tərtibatdır, dizayn deyil. Bax: [Başlanğıc kitabxanası](topic:starter).

**Çap**

- **Əyilmiş kəsiklər.** Çap üçün bölmə kəsiklərini 60 dərəcəyə qədər əyə bilər, bu da hissələrə daha çox yapışma sahəsi verir. Bağlayıcılar kəsiyə düz durur. Bax: [Modeli çap üçün bölün](topic:print-split).
- **Problemlərdə çap yoxlaması.** 3D çap yoxlamasının tapıntıları Problemlər panelində modeldə işarələrlə görünür, və Təmir onları oradan düzəldir. Bax: [Dayaqlar, divar qalınlığı, oyma və təmir](topic:print-tools).

**Bütün tətbiqlərdə**

- **Dillər.** Yardım və tətbiqlər 54 dildə gəlir. On yenisi: Litva, Latış, Bosniya, Marathi, Telugu, Albanca, Afrikaans, Filippin, Suahili və Özbək. İngilisdən başqa dillər ana dilində danışan biri oxuyana qədər maşın qaralamalarıdır, və yardım mövzuları hələ ingilis dilində ola bilər.
- **Giriş cihazları.** Trackpad, qələm, 3D siçan, oyun pultu və MIDI kontrolları tətbiqləri idarə edə bilər, hamısı üçün və ya biri üçün.
- **Alət sətirləri.** {{ui:Parametrlər}} › {{ui:Ümumi}} › Alət sətirləri Sarın (əvvəlki kimi), 2 sətir və ya 1 sətir təyin edir. Sığmayan panel çertyojdan yer götürmək əvəzinə yan tərəfə sürüşür. Sarın defolt olaraq qalır.
- **Xüsusiyyət cədvəli.** ModelCraft-ın lampa sahələri paylaşılan cədvəli istifadə edir: yığılan kateqoriyalar, etiket və dəyər sütunları, və Yığcam sıxlıq. `2*450` kimi yazılmış hesablama işləməyə davam edir.
- **Problemlər.** Problemlər paneli (tətbiq panelindəki xəbərdarlıq düyməsi) bütün tətbiqlər tərəfindən paylaşılır. ModelCraft-da çap yoxlamasını və səth davamlılığı xəbərdarlıqlarını saxlayır.
- **Canlı.** Canlı TeamWork sessiyası kimin harada olduğunu göstərir. Bax: [Canlı TeamWork ilə birlikdə modelləşdirin](topic:work-live).
- **Əlavələr.** Əlavələr yuxarıda göstərildiyi kimi render mühərrikləri əlavə edə bilər.
- **AI köməkçinizi qoşun.** Səkkiz tətbiqin alət müqaviləsi və yoxlamaları keçir, cəmi 454 alətlə. Studio daxilində bir klikli qoşulma, brauzer köməkçiləri üçün hostinq olunan konnektor, Studio daxilində öz açarınız və dərc olunmuş paket hələ vəd edilməyib. Tətbiqlərin öz süni intellekti yoxdur. Bax: [ModelCraft-ı süni intellekt köməkçiləri ilə istifadə edin](topic:use-with-ai-assistants).

### 0.8.1-də düzəlişlər

- **DWG sinif bölməsi.** DWG faylının sinif bölməsi yanlış tip kimi oxunurdu, idxalda faylı poza bilirdi. İndi düzgün oxunur, ModelCraft-da və DWG oxuyan digər tətbiqlərdə.
- **Portret rejimdə planşetlər.** Boş şəbəkə hündürlüyü kətana gedir, və vərəq tərtibatı 760 piksel və ya daha az enlə başlayır. ModelCraft-ın üslub cədvəlində də dəyişiklik var.
- **Studio-da dil.** CadCraft Studio və paketli nəşrlər işləyərkən dil dəyişə bilir; əvvəl yalnız ingilis dili idi. Hələ hər platformada sınaqdan keçirilməyib: dil dəyişmirsə bizə deyin.

### Bu versiyada hələ yoxdur

- **Kod imzalanmayıb.** Windows SmartScreen göstərə bilər: {{ui:Ətraflı məlumat}} seçin, sonra {{ui:Yenə də işə sal}}. Mac-də sağ klikləyin və {{ui:Aç}} seçin. Mağaza quruluşları gözləmədədir, və iPad və iPhone quruluşu 0.8.1 üçün yenidən qurulmayıb.
- Başqa proqram render əlavəsi olmadan şəkli çəkir, panorama və ya stereo kameralar və başqa proqram vasitəsilə səma şəkli yoxdur, və Unreal səhnəsini açan plagin hələ yoxdur. Fayllar yazılır; plagin buraxılmayıb və Unreal-da işlədilməyib.
- Sərbəst səthlər: G3 və class A ölçülmür və təmin edilmir; kəsmə və cisimlər sonra gələcək.
- Başqa proqramların şəkilləri bizimki kimi piksel-piksel deyil: yalnız kamera, günəş, lampalar və pozlama uyğun gəlir.
- Studio-da dil dəyişikliyi üçün 0.8.1 düzəlişi hər platformada sınaqdan keçirilməyib.

Qalan hər şey [Hələ qurulmayanlar](topic:not-built-yet) bölməsindədir. Əvvəlki buraxılış üçün bax: [0.7-də yeniliklər](topic:whats-new-0-7).
