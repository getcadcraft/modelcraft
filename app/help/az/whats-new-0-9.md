---
title: 0.9-da yeniliklər (əvvəlki)
summary: Öz dilimləyicimizlə çap mərhələsi və USB, Klipper, OctoPrint və PrusaLink-ə göndərmə, qatran dilimləməsi və fayl əlavələri, material axını, rəqəmsal əkiz və zavod sahəsi əlavələri, NURBS yumrulaşdırma, qalınlaşdırma və skan uyğunlaşdırması, sahədə AR və on qövs üsulu.
keywords: 0.9-da yeniliklər, əvvəlki buraxılış, yeniliklər, nə yeni var, buraxılış qeydləri, dəyişikliklər jurnalı, 0.9, çap mərhələsi, 3D çap, 3D printerə göndər, dilimləyici, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, qatran, qatran çapı, goo, sl1, ctb, anycubic, ekspozisiya testi, material axını, rəqəmsal əkiz, zavod sahəsi, plc, konveyer, nurbs, yumrulaşdırma, qalınlaşdırma, skan uyğunlaşdırma, ar, sahədə, qövs üsulları, ölçü vahidləri, yeniliklər, nə yeni var, buraxılış qeydləri, dəyişikliklər jurnalı, dəyişikliklər, 0.8, 0.8.1, versiya, yeni xüsusiyyətlər, vizuallaşdırma mühərriki, mühərrik, başqa proqramda aç, usd, gltf, unreal, əlavə mühərriki, nurbs, səthlər, loft, süpürmə, davamlılıq, g0, g1, g2, zebra, step, iges, səhnəni deyin, səhnə, hava, günün vaxtı, fəsil, assistent, fotoşəkildən material, fotoşəkil, eskiz şəkli, otağı mebellə təchiz et, otağı mebellə təchiz et, əyri kəsik, əyri, bölmə, çap yoxlaması, problemlər, xüsusiyyət cədvəli, lampalar, dillər, giriş cihazları, alət sətirləri, dwg, canlı
from: 2717d1b1
---

Bu, ModelCraft 0.9-da 0.8.1 ilə müqayisədə nəyin dəyişdiyidir. ModelCraft indi printerə və istehsal sahəsinə çatır: əşyaları çap platformasına qoya və ixrac etmədən göndərə, filament və ya qatran üçün dilimləyə və material daşıma xəttini planlaşdıra bilərsiniz. Bu, CadCraft Studio 0.9 və onun səkkiz tətbiqidir; aşağıdakı yeniliklərin əksəriyyəti əlavələrdir.

## Yeni

### 3D çap

- **Çap mərhələsi.** Alətlər panelində {{ui:Çap mərhələsi}} üzərinə klikləyin. Kitabxana elementlərini printerin platformasına əlavə edin, onları düzün, dilimlənmiş qatlara baxın və STL ixrac etmədən {{ui:3D printerə göndər}} düyməsinə basın. O, 3D Print əlavəsinə aiddir; bu əlavə standart olaraq açıqdır və hər hansı digər əlavə kimi silinə bilər. Bax: [Əşyaları çap platformasına qoyun və printerə göndərin](topic:print-stage).
- **Öz filament dilimləyicimiz.** {{ui:CadCraft basic (daxil, ən sürətli)}} kartın **Dilimləyici** siyahısında olan dilimləyicidir: divarlar, səthlər, doldurma, dəstəklər və skirt, səhifə istifadə oluna bilən qalsın deyə işçidə. Göndərməzdən əvvəl {{ui:Qatları önizləyin}} **Qat** sürgüsü ilə qatları göstərir. Ender-3 və Prusa MK4 kimi printer profilləri öz başlanğıc G-kodunu daşıyır.
- **Göndərmə.** USB ilə (kompüterdə Chrome və ya Edge, səhifə açıq saxlanmaqla) və ya şəbəkənizdə Klipper (Moonraker), OctoPrint və ya PrusaLink-ə. Heç nə klik etmədən qoşulmur və göndərilmir, göndərmə isə əvvəlcə soruşur.
- **Digər dilimləyicilər.** Kiri:Moto, PrusaSlicer və OrcaSlicer öz əlavələridir, standart olaraq söndürülüb; onları karttan və ya {{ui:Parametrlər}} › {{ui:Əlavələr}} bölməsindən əlavə edin. PrusaSlicer və OrcaSlicer CadCraft Studio-dan öz quraşdırdığınız nüsxəni işlədir. Bambu Lab printerləri əlavəsi OrcaSlicer və onun P2S preset-ləri ilə dilimləyir və kompüterdə Studio tələb edir.
- **Qatran çapı.** Qatran əlavələri (standart olaraq söndürülüb) printerinizin ekranı üçün qat şəkilləri hazırlayır: boşaltma və havalandırma deşikləri, altlıq və dəstəklər, qat önizləməsi, vaxt, qatran və dəyər ilə. Fayl formatı əlavələri Elegoo GOO, SL1, Chitubox (CBDDLP və CTB 2-dən 5-ə) və Anycubic (PWMX və PWS) yazır. Qatran ekspozisiya testi beş ekspozisiyadan ibarət nərdivan hazırlayır. Bax: [Qatran printeri üçün dilimləmə](topic:resin-printing).
- **Dəyişməyib.** {{ui:İxrac}} › {{ui:3D çap üçün yoxlayın (STL və ya 3MF)…}}, çap alətləri və Çap üçün bölmə 0.8-dəki kimi işləyir. Bax: [Modeli 3D çapa hazırlayın](topic:print-3d).

### Material axını, Rəqəmsal əkiz və Zavod sahəsi

Bu üç əlavədir, {{ui:Parametrlər}} › {{ui:Əlavələr}} bölməsində açana qədər söndürülüdür və hər biri açıldıqdan sonra öz yardımına malikdir.

- **Material axını.** Material axını adlı panel konveyerləri, stansiyaları, buferləri və AGV yollarını 3D görünüşdə düzür, toxumlu simulyasiya işlədir, onu geri oxudur və ötürmə qabiliyyətini, gözləmə müddətlərini və növbələri göstərir; nəticələr CSV kimi saxlanılır. Sifarişlər CSV faylından gələ bilər. Robot xanaları yoxlanıla və ixrac edilə bilər. PLC əlaqəsinin Modbus TCP üzərindən yumşaq rejimi və real rejimi var; real rejim yalnız CadCraft Studio-da işləyir.
- **Rəqəmsal əkiz.** Material axını planını oxuyur və üzərində yumşaq PLC işlədir; məcbur edə biləcəyiniz nasazlıqlar, ehtiyat testləri, planın müqayisəsi və material siyahısı ilə.
- **Zavod sahəsi.** Stansiyaları maşınlara və xanalara çevirir, onları canlı oxuyur və ya simulyatordan oxuyur, iş növbəsini və sadə OEE-ni saxlayır. Yalnız oxuyur: bu versiya heç bir maşına və ya PLC-yə yaza bilməz.

### Səthlər, modellər və çertyoj

- **NURBS üzərində yumrulaşdırma, qalınlaşdırma və Boolean əməliyyatları.** {{ui:Səthlər}} paneli {{ui:Üzlər arasında yumrulaşdırma}}, {{ui:Bir neçə kənarı yumrulaşdır}}, {{ui:Qalınlaşdırıb həcmli cismə çevir}} və Birləşmə, Çıxma və Kəsişmə əməliyyatlarına malikdir; hər birinin ölçülmüş sapması var. Bax: [Sərbəst səthlər (NURBS)](topic:nurbs-surfaces).
- **Skanı səthlərə uyğunlaşdırın.** Skan edilmiş meşi seçin və **Skan** qrupunda {{ui:Səthləri skana uyğunlaşdır}} düyməsini, sonra {{ui:Səthləri bərk cismə tikin}} düyməsini istifadə edin. Bu ilk uyğunlaşdırmadır, tam tərs mühəndislik paketi deyil.
- **.3dm modelləyicisindən canlı əlaqə.** Bir istiqamətdə, Rhino 8 və ya Grasshopper-dən, və eyni kompüterdə CadCraft Studio tələb edir. Bax: [.3dm modelini canlı saxlayın](topic:live-3dm-link).
- **Modeli sahədə görün.** {{ui:Görünüşlər}} menyusunda {{ui:Sahədə bax (AR, telefon)}} Chrome ilə Android telefonda işləyir. Bax: [Modeli Android telefonla sahədə görün (AR)](topic:ar-on-site).
- **Qövs üsulları.** {{ui:Qövs üsulları}} açılan siyahısı qövsü çəkməyin on üsulunu təklif edir, o cümlədən {{ui:3 nöqtə}} və {{ui:Başlanğıc, Mərkəz, Son}}.
- **Daha çox ölçü vahidi.** Dəyərləri vahidlərlə yazdığınız yerlərdə çəkilər (kq, lb, t, ton) və temperaturlar (dərəcə C, F, K və R) tanınır.

## Bütün tətbiqlərdə

- **Alət ipucları.** Düymələrin və kəsilmiş etiketlərin üzərinə gələndə görünən mətn Bootstrap alət ipucudur.
- **Bağlana bilən başlanğıc ipucu.** Boş çertyoj sahəsindəki ipucu kartında kiçik bağlama x-i var. O, bağlı qalır və əmr palitrası onu yenidən göstərə bilər.
- **Sürüşən nişan zolaqları.** Panelin sığmayan nişan zolağı kəsilmək əvəzinə sürüşür.
- **Nişan başlıqları.** Sənəd açılanda brauzer nişanı sənədin adı ilə başlayır, sonra ModelCraft və CadCraft. Saxlanılmayanda əvvəlində nöqtə olur.
- **Tərtibat.** {{ui:Parametrlər}} › {{ui:Ümumi}} › Tərtibat tərtibatları açılan siyahıda saxlayır, tərtibatı yalnız bu tətbiq üçün istifadə etmək seçimi və tərtibatı sıfırlamaq düyməsi ilə.
- **Dillər.** Parametrlərdəki dil siyahısı quraşdırılmış dil fayllarını izləyir. İngilis dilindən başqa dillər maşın qaralamalarıdır.
- **Canlı və Kitabxana.** Canlı TeamWork canlı kursorları və adları göstərir, Kitabxana kolleksiyaları hər tətbiqə standart kolleksiya verir.

## Düzəlişlər

- {{ui:Oynat}} animasiya işləyəndə {{ui:Dayandır}}-a dönür, və vaxt xətti açıq olanda {{key:Space}} oynadır və dayandırır.
- Şəkil render etmə qrafik kartı yol izləyicisini işə sala bilməyəndə WebGL-ə keçir. Canlı render görünüşü xətanı hələ də göstərə bilər; bu, Windows maşınında həmin sürücü ilə yoxlanılmayıb.
- Material axını real rejimi PLC istisna cavablarında əlaqə bitdikdən sonra yenidən qoşulur.

## Dürüst məhdudiyyətlər

- Heç nə real printerdə çap olunmayıb: nə filament, nə qatran, nə Bambu Connect ilə. Qatran faylları yalnız CadCraft-ın öz oxuyucuları ilə geri oxunub.
- Rəqəmsal əkiz və Zavod sahəsi yalnız simulyatorlarda və məlum cavablarla sınaqdan keçirilib, real PLC, xətt və ya protokol olmadan. Onlar yoxlama vasitələridir, təhlükəsizlik təsdiqi deyil. Fizika yalnız qutuları əhatə edir, səkkiz yükə qədər.
- Rhino və Grasshopper əlaqəsi real proqramlarda heç vaxt işləməyib.
- İngilis dilindən başqa dillər maşın qaralamalarıdır.

## Əvvəlki: 0.8 və 0.8.1

Bu, ModelCraft 0.8 (2026-11-01) və 0.8.1 (2026-11-02) versiyalarında 0.7-yə nisbətən nəyin dəyişdiyidir. {{ui:Şəkil render edin…}} dialoqu indi səhnəni başqa proqrama göndərə bilər, Səthlər paneli hamar sərbəst səthlər yaradır və qoşduğunuz assistent bir cümlə ilə bütün səhnəni qura bilər.

### Yeni

**Vizuallaşdırma**

- **Mühərrik seçimi.** {{ui:Şəkil render edin…}} dialoqunda Rejimin üstündə **Mühərrik** siyahısı var. Öz iki mühərrikimiz, Sürətli və Yol izləyicisi, standartdır və hər yerdə işləyir. Digər girişlər səhnəni paket kimi saxlayır (modelin USD faylı, dəqiq material dəyərləri, yanan lampalar, günəş, səma, ekspozisiya və kameranı olan parametrlər faylı) başqa proqrama aparmaq üçün. Başqa proqramla çəkilmiş şəkil hansı proqramın və hansı versiyanın onu yaratdığını göstərir. Bax: [Şəkli hansı proqramın çəkməsini seçin](topic:render-engines).
- **Başqa proqramda açın.** Mühərrik siyahısı səhnəni USD faylı, glTF faylı (`.glb`) və ya Unreal layihə qovluğu (`.zip`) kimi saxlaya bilər; brauzerdə və CadCraft Studio-da. Studio-da o, faylı üçün usdview və ya kompüterin öz proqramını da işə sala bilər. Bax: [Səhnəni başqa proqramda açın](topic:render-open-in).
- **Studio-dan oyun mühərrikinə göndərin.** Studio səhnəni Unreal Engine layihəsinə yazır və hər göndərişdə onu yalnız bir istiqamətdə eyni saxlayır. Sizin redaktələriniz CadCraft-ın heç vaxt yazmadığı qatda qalır. Bax: [Səhnəni oyun mühərrikinə göndərin](topic:render-unreal).
- **Əlavələrdən mühərriklər.** Əlavə siyahıya mühərrik əlavə edə bilər. JavaScript-də yazılan mühərrik brauzerdə və Studio-da çəkir; proqram işlədən isə Studio-da sizin razılığınızı tələb edir. Bax: [Şəkli başqa proqramla çəkin](topic:render-other-program) və [Əlavə ilə vizuallaşdırma mühərriki əlavə edin](topic:render-engine-addons).
- **Səhnəni deyin.** Qoşulmuş assistentinizə "axşam, yüngül yağış, payız ağacları, meydanda insanlar" deyin və ModelCraft onu bir addımda qurur: günəş tarix və vaxta uyğun hərəkət edir ki, kölgələr izləsin, səma dəyişir, islak səthlər görünür, ağaclar və insanlar gizlədilə, köçürülə və ya silinə bilən etiketlərdə real obyektlər kimi yerləşdirilir. Günün vaxtı, tarix və ya fəsil və hava (açıq, buludlu, duman, yüngül yağış, yağış, fırtına) təkbaşına da işləyir və sonrakı sorğu eyni səhnəni dəyişir. Duman yüksək keyfiyyətli şəkildə qrafik kartında görünür; digər mühərriklər səma, işıq və islak səthləri göstərir. Yağış düşən zolaqlar kimi çəkilmir.

**Materiallar**

- **Bir şəkildən material.** ModelCraft-a səthin şəklini verin (divar, döşəmə, daş) və o, döşənən material yaradır: şəkildə işıqlandırma hamarlanır, kənarlar birləşdirilir və rəng xəritəsi, pürüzlülük xəritəsi və normal xəritə şəkildən hesablanır. Bu, yalnız öz şəklinizdə adi şəkil emalıdır, təlim keçmiş model yoxdur. Pürüzlülük təxmindir. Sadə, kvadrat, düz baxılmış şəkil ən yaxşı kafel verir; kərpic kimi güclü naxış birləşmə yerində yumşaq kölgə göstərə bilər.

**Səthlər**

- **Sərbəst səthlər.** {{ui:Səthlər}} paneli NURBS əyriləri və kəsilməmiş səthlər yaradır: nöqtələrdən keçən əyrilər, loft, ruled, extrude, revolve, bir və ya iki relsdə süpürmələr, əyri şəbəkəsindən səthlər, dörd kənardan yamaqlar, uyğunluq və qarışdırma. Hər paylaşılan kənar dəqiq səthlərdə G0, G1 və ya G2 (boşluq, bucaq, əyrilik sıçrayışı) kimi ölçülür və istədiyinizdən pis kənar **Problemlər** panelində **Uyğunlaşdır** düzəlişi ilə görünür. Zebra zolaqları və əyrilik rəngləri dəqiq səthlərdən çəkilir. STEP və IGES faylları çıxır və girir. Bax: [Sərbəst səthlər (NURBS)](topic:nurbs-surfaces).

**Sahə və otaqlar**

- **Eskiz şəklini yerə.** {{ui:Fayl}} › {{ui:Eskiz şəkli idxal et…}} telefonla çəkilmiş əl eskizinin şəklini dediyiniz miqyasda yerdəki kənarlara çevirir: bir qrup, hər qələm rəngi üçün etiket ilə. Kağız kompüterinizdə tapılır və düzləşdirilir, heç yerə göndərilmir. Bax: [Situasiya planında modelləşdirmə](topic:site-plan).
- **Otağı mebellə təchiz edin.** Döşəməni seçin və {{ui:Təşkil}} › {{ui:Otağı mebellə təchiz et…}} istifadə edin. Yataq otağı, qonaq otağı, yemək otağı, mətbəx, hamam və ya ofis mebeli qaydalarla, divarlara qarşı və qapı və pəncərələrdən kənarda yerləşdirilir, bir addımda çıxarıla bilən bir qrupda. Bu, təkliflə yoxlanılacaq standart layoutdur, dizayn deyil. Bax: [Başlanğıc kitabxanası](topic:starter).

**3D çap**

- **Əyri kəsiklər.** Çap üçün bölmə kəsiklərini 60 dərəcəyə qədər əyə bilər, bu da parçalara daha çox yapışma sahəsi verir. Birləşdiricilər kəsiyə düz dayanır. Bax: [Modeli çap üçün bölün](topic:print-split).
- **Problemlərdə çap yoxlaması.** 3D çap yoxlamasının nəticələri Problemlər panelində modeldə işarələrlə görünür və **Təmir** oradan düzəldir. Bax: [Dəstəklər, divar qalınlığı, boşaltma və təmir](topic:print-tools).

**Bütün tətbiqlərdə**

- **Dillər.** Yardım və tətbiqlər 54 dildə gəlir. On dil yenidir: Litva, Latviya, Bosniya, Marathi, Telugu, Albaniya, Afrikaans, Filippin, Suahili və Özbək. İngilis dilindən başqa dillər ana dildə danışan biri oxuyana qədər maşın qaralamalarıdır və yardım mövzuları hələ də ingiliscə ola bilər.
- **Giriş cihazları.** Trackpad, qələm, 3D siçan, oyun kontrolleri və MIDI idarəetmələri tətbiqləri idarə edə bilər, hamısı üçün və ya biri üçün.
- **Alət sətirləri.** {{ui:Parametrlər}} › {{ui:Ümumi}} › Alət sətirləri Sarma (əvvəlki kimi), 2 sətir və ya 1 sətir təyin edir. Sığmayan zolaq çertyoj sahəsindən yer almaq əvəzinə yana sürüşür. Sarma standart olaraq qalır.
- **Xüsusiyyət cədvəli.** ModelCraft-ın lampa sahələri ümumi cədvəldən istifadə edir: yığılan kateqoriyalar, etiket və dəyər sütunları və Kompakt sıxlıq. `2*450` kimi yazılmış hesablamalar işləməyə davam edir.
- **Problemlər.** Problemlər paneli (tətbiq panelindəki xəbərdarlıq düyməsi) bütün tətbiqlər tərəfindən paylaşılır. ModelCraft-da o, 3D çap yoxlamasını və səth davamlılığı xəbərdarlıqlarını saxlayır.
- **Canlı.** Canlı TeamWork sessiyası kimin harada olduğunu göstərir. Bax: [Canlı TeamWork ilə birgə modelləşdirin](topic:work-live).
- **AI-nizi qoşun.** Səkkiz tətbiqin alət müqaviləsi və yoxlamaları keçir, cəmi 454 alət var. Studio daxilində bir kliklə qoşulma, brauzer assistentləri üçün hostinqlə connector, Studio daxilində öz açarınız və dərc olunmuş paket hələ vəd edilmir. Tətbiqlərin öz AI-si yoxdur. Bax: [ModelCraft-ı AI assistentləri ilə istifadə edin](topic:use-with-ai-assistants).

### 0.8.1-də düzəldilib

- **DWG sinif bölməsi.** DWG faylının sinif bölməsi səhv tipdə oxunurdu, bu da idxalda faylı poza bilərdi. İndi ModelCraft-da və DWG oxuyan digər tətbiqlərdə düzgün oxunur.
- **Portret rejimində planşetlər.** Boş şəbəkə hündürlüyü kətana gedir, vərəq tərtibatı 760 piksel və ya daha az enlə başlayır. ModelCraft-ın üslub vərəqində də bu dəyişiklik var.
- **Studio-da dil.** CadCraft Studio və paketlənmiş versiyalar işləyərkən dili dəyişə bilər; əvvəl yalnız ingilis dilində idi. Hələ hər platformada sınaqdan keçirilməyib: dil dəyişmirsə bizə deyin.

### Bu versiyada hələ yoxdur

- **Kod imzalanmayıb.** Windows SmartScreen göstərə bilər: {{ui:Ətraflı məlumat}} seçin, sonra {{ui:Yenə də işə sal}}. Mac-də sağ düyməni basın və {{ui:Aç}} seçin. Mağaza versiyaları gözləmədədir, iPad və iPhone versiyası 0.8.1 üçün yenidən qurulmayıb.
- Vizuallaşdırma mühərriki əlavəsi olmadan başqa proqramın şəkli çəkməsi, başqa proqram vasitəsilə panoram və ya stereo kameralar və səma şəkli, habelə Unreal səhnəsini açan plagin hələ yoxdur. Fayllar yazılır; plagin buraxılmayıb və Unreal-da işlədilməyib.
- Sərbəst səthlər: G3 və A sinfi ölçülməyib və iddia edilmir; kəsmə və cisimlər sonradan gələcək.
- Başqa proqramların şəkilləri bizimkilərlə piksel-piksel eyni deyil: yalnız kamera, günəş, lampalar və ekspozisiya uyğun gəlir.
- 0.8.1-də Studio-da dil dəyişdirmə düzəlişi hər platformada sınaqdan keçirilməyib.

Hər şey [Hələ qurulmayanlar](topic:not-built-yet) bölməsindədir. Əvvəlki buraxılış üçün bax: [0.7-də yeniliklər](topic:whats-new-0-7).
