---
title: 0.8 və 0.8.1-də yeniliklər
summary: Fayllarla render mühərriki seçimi, ölçülmüş davamlılıqla NURBS sərbəst formalı səthlər, assistentinizə təsvir etdiyiniz səhnə, bir fotodan material, yerə eskiz fotosu, mebelli otaqlar, 3D çap üçün maillik kəsikləri və Problemlər panelində çap yoxlaması.
keywords: yeniliklər, nə yeni var, buraxılış qeydləri, dəyişikliklər, dəyişikliklər jurnalı, 0.8, 0.8.1, versiya, yeni xüsusiyyətlər, render mühərriki, mühərrik, daxilində aç, usd, gltf, unreal, əlavə mühərriki, nurbs, səthlər, loft, süpürmə, davamlılıq, g0, g1, g2, zebra, step, iges, səhnəni deyin, səhnə, hava, günün vaxtı, fəsil, assistent, fotodan material, foto, eskiz fotosu, mebellə təchiz et, otaq, maillik, bölmə, çap yoxlaması, problemlər, xüsusiyyətlər şəbəkəsi, lampalar, dillər, giriş qurğuları, alətlər paneli sətirləri, dwg, canlı
from: e4989b17
---

Bu, ModelCraft 0.8 (2026-11-01) və 0.8.1 (2026-11-02) versiyalarında 0.7-yə nisbətən nələrin dəyişdiyidir. {{ui:Şəkil render edin…}} dialoqu indi səhnəni başqa proqrama göndərə bilər, {{ui:Səthlər}} paneli hamar sərbəst formalı səthlər yaradır, və qoşduğunuz assistent bir cümlə ilə bütün səhnəni qura bilər.

## Yeni

### Render

- **Mühərrik seçimi.** {{ui:Şəkil render edin…}} dialoqunda Rejimdən yuxarıda **Mühərrik** siyahısı var. Bizim öz iki mühərrikimiz, Sürətli və Yol izləyici, standartdır və hər yerdə işləyir. Digər girişlər səhnəni başqa proqrama aparmaq üçün paket kimi saxlayır: modeli USD faylı kimi, üstəlik dəqiq material dəyərləri, yanan lampalar, günəş, səma, ekspozisiya və kameranı saxlayan parametrlər faylı ilə. Başqa proqramın çəkdiyi şəkil hansı proqramın və hansı versiyanın onu yaratdığını göstərir. Bax: [Şəkli çəkən proqramı seçin](topic:render-engines).
- **Başqa proqramda açın.** Mühərrik siyahısı səhnəni USD faylı, glTF faylı (`.glb`) və ya Unreal layihə qovluğu (`.zip`) kimi saxlaya bilər, həm brauzerdə, həm də CadCraft Studio-da. Studio-da həmçinin faylı üçün usdview və ya kompüterin öz proqramını başlada bilər. Bax: [Səhnəni başqa proqramda açın](topic:render-open-in).
- **Studio-dan oyun mühərrikinə göndərin.** Studio səhnəni Unreal Engine layihəsinə yazır və hər göndərişdə onu yeniləyir, yalnız bir istiqamətdə. Sizin öz dəyişiklikləriniz CadCraft-ın heç vaxt yazmadığı təbəqədə qalır. Bax: [Səhnəni oyun mühərrikinə göndərin](topic:render-unreal).
- **Əlavələrdən mühərriklər.** Əlavə siyahıya mühərrik əlavə edə bilər. JavaScript-də yazılmış biri brauzerdə və Studio-da çəkir; proqram işlədən biri Studio-da sizin razılığınızı tələb edir. Bax: [Şəkli başqa proqramla çəkin](topic:render-other-program) və [Əlavə ilə render mühərriki əlavə edin](topic:render-engine-addons).
- **Səhnəni deyin.** Qoşulmuş assistentinizə "axşamüstü, yüngül yağış, payız ağacları, meydanda insanlar" deyin — ModelCraft bunu bir addımda qurur: günəş kölgələrin izləməsi üçün tarix və vaxta uyğun hərəkət edir, səma dəyişir, islaq səthlər görünür, ağaclar və insanlar isə gizlədilə, köçürülə və ya silinə bilən etiketlərdə real obyektlər kimi yerləşdirilir. Günün vaxtı, tarix və ya fəsil, həmçinin hava (açıq, buludlu, duman, yüngül yağış, yağış, fırtına) təkbaşına da işləyir, və sonrakı sorğu eyni səhnəni dəyişir. Duman yüksək keyfiyyətli şəkildə qrafik kartda görünür; digər mühərriklər səma, işıq və islaq səthləri göstərir. Yağış düşən zolaqlar kimi çəkilmir.

### Materiallar

- **Bir fotodan material.** ModelCraft-a səthin fotosunu (divar, döşəmə, daş) verin, o, döşənən material yaradır: fotodakı işıqlandırma düzləşdirilir, kənarlar birləşdirilir, və rəng xəritəsi, pürüzlülük xəritəsi və normal xəritə fotodan hesablanır. Bu, sizin öz şəkliniz üzərində adi şəkil emalıdır, öyrədilmiş model olmadan. Pürüzlülük təxminidir. Sadə, kvadrat, düz çəkilmiş foto ən yaxşı döşəməni verir; kərpic kimi güclü naxış isə birləşmə yerində qarışdırılmış yumşaq kölgə göstərə bilər.

### Səthlər

- **Sərbəst formalı səthlər.** {{ui:Səthlər}} paneli NURBS əyriləri və kəsilməmiş səthlər yaradır: nöqtələrdən keçən əyrilər, loft, düz xətli, ekstruziya, fırlanma, bir və ya iki relsdən süpürmə, əyri şəbəkəsindən səthlər, dörd kənardan yamaqlar, uyğunlaşdırma və qarışdırma. Hər ortaq kənar dəqiq səthlərdə G0, G1 və ya G2 (boşluq, bucaq, əyrilik sıçrayışı) kimi ölçülür, və istədiyinizdən pis kənar Problemlər panelində **Uyğunlaşdır** düzəlişi ilə görünür. Zebra zolaqları və əyrilik rəngləri dəqiq səthlərdən çəkilir. STEP və IGES faylları çıxır və gəlir. Bax: [Sərbəst formalı səthlər (NURBS)](topic:nurbs-surfaces).

### Sahə və otaqlar

- **Eskiz fotosu yerə.** {{ui:Fayl}} › {{ui:Eskiz şəkli idxal et…}} telefonla çəkilmiş əl eskizinin fotosunu sizin dediyiniz miqyasda yerdəki kənarlara çevirir: bir qrup, hər qələm rəngi üçün etiketlə. Kağız kompüterinizdə tapılır və düzləşdirilir, heç yerə göndərilmir. Bax: [Situasiya planında modelləşdirin](topic:site-plan).
- **Otağı mebellə təchiz edin.** Döşəməni seçin və {{ui:Təşkil}} › {{ui:Otağı mebellə təchiz et…}} istifadə edin. Yataq otağı, qonaq otağı, yemək otağı, mətbəx, hamam və ya ofis mebeli qaydalarla yerləşdirilir: divarlara qarşı və qapı və pəncərələrdən kənarda, bir addımda götürə biləcəyiniz bir qrupda. Bu, baxmaq üçün standart plan düzümüdür, dizayn deyil. Bax: [Başlanğıc kitabxanası](topic:starter).

### 3D çap

- **Maillik kəsikləri.** Çap üçün bölmə kəsiklərini 60 dərəcəyə qədər əyə bilər, bu da hissələrə yapışma sahəsi verir. Birləşdiricilər kəsiyə düz dayanır. Bax: [Modeli çap üçün bölün](topic:print-split).
- **Problemlərdə çap yoxlaması.** 3D çap yoxlamasının tapıntıları modeldə işarələrlə Problemlər panelində görünür, və **Təmir et** onları oradan düzəldir. Bax: [Dayaqlar, divar qalınlığı, oyulma və təmir](topic:print-tools).

### Hər tətbiqdə

- **Dillər.** Kömək və tətbiqlər 54 dildə gəlir. On yenisi: Litva, Latış, Bosniya, Marati, Teluqu, Alban, Afrikaans, Filippin, Suahili və Özbək dilləri. İngilis dilindən başqa dillər, bir ana dil danışan oxuyana qədər maşın qaralamalarıdır, və kömək mövzuları hələ ingilis dilində qala bilər.
- **Giriş qurğuları.** Trackpad, qələm, 3D siçan, oyun kontrolleri və MIDI nəzarətləri bütün tətbiqləri və ya birini idarə edə bilər.
- **Alətlər paneli sətirləri.** {{ui:Parametrlər}} › {{ui:Ümumi}} › Alətlər paneli sətirləri Sarma (əvvəlki kimi), 2 sətir və ya 1 sətir təyin edir. Sığmayan panel çertyojdan yer almaq əvəzinə yana sürüşür. Sarma standart olaraq qalır.
- **Xüsusiyyətlər şəbəkəsi.** ModelCraft-ın lampa sahələri ümumi şəbəkədən istifadə edir: yığıla bilən kateqoriyalar, etiket və dəyər sütunları, və Compact sıxlığı. `2*450` kimi yazılmış hesablama işləməyə davam edir.
- **Problemlər.** Problemlər paneli (tətbiq panelindəki xəbərdarlıq düyməsi) bütün tətbiqlər tərəfindən paylaşılır. ModelCraft-da o, çap yoxlamasını və səth davamlılığı xəbərdarlıqlarını saxlayır.
- **Canlı.** Canlı TeamWork sessiyası kimin harada olduğunu göstərir. Bax: [Canlı TeamWork ilə birlikdə modelləşdirin](topic:work-live).
- **Əlavələr.** Əlavələr yuxarıda göstərildiyi kimi render mühərrikləri əlavə edə bilər.
- **AI-nizi qoşun.** Səkkiz tətbiqin alət müqaviləsi və yoxlamaları keçir, cəmi 454 alətlə. Studio daxilində bir kliklə qoşulma, brauzer assistentləri üçün hostinqdə connector, Studio daxilində öz açarınız və dərc edilmiş paket hələ vəd edilmir. Tətbiqlərin öz AI-si yoxdur. Bax: [ModelCraft-ı AI assistentləri ilə istifadə edin](topic:use-with-ai-assistants).

## 0.8.1-də düzəldilib

- **DWG siniflər bölməsi.** DWG faylının siniflər bölməsi səhv tip kimi oxunurdu və bu, idxal zamanı faylı poza bilərdi. İndi ModelCraft-da və DWG oxuyan digər tətbiqlərdə düzgün oxunur.
- **Portret rejimində planşetlər.** Boş şəbəkə hündürlüyü kətana verilir, və vərəq düzümü 760 pikseldən dar və ya bərabər enlərdə başlayır. ModelCraft-ın üslub vərəqində də bu dəyişiklik var.
- **Studio-da dil.** CadCraft Studio və qablaşdırılmış nəşrlər işləyərkən dili dəyişə bilir; əvvəllər yalnız ingilis dili idi. Bu, hər platformada hələ sınaqdan keçirilməyib: dil dəyişməsə bizə deyin.

## Bu versiyada hələ yoxdur

- **Kod imzalanmayıb.** Windows SmartScreen göstərə bilər: {{ui:Ətraflı məlumat}} seçin, sonra {{ui:Yenə də işlət}}. Mac-də sağ klikləyin və {{ui:Aç}} seçin. Mağaza quraşdırmaları dayandırılıb, iPad və iPhone quraşdırması 0.8.1 üçün yenidən qurulmayıb.
- Başqa proqramın, render mühərriki əlavəsi olmadan, şəkli çəkməsi, başqa proqramla panoramik və ya stereo kameralar və başqa proqramla səma şəkli, və Unreal səhnəsini açan plagin hələ yoxdur. Fayllar yazılır; plagin buraxılmayıb və Unreal-da işlədilməyib.
- Sərbəst formalı səthlər: G3 və class A ölçülmür və iddia edilmir; kəsmə və bərk cisimlər sonra gələcək.
- Başqa proqramların şəkilləri bizimkilər kimi piksel-piksel eyni deyil: yalnız kamera, günəş, lampalar və ekspozisiya üst-üstə düşür.
- Studio-da dil dəyişikliyinin 0.8.1 düzəlişi hər platformada sınaqdan keçirilməyib.

Qalan hər şey [Hələ qurulmayıb](topic:not-built-yet) bölməsindədir. Əvvəlki buraxılış üçün bax: [0.7-də yeniliklər](topic:whats-new-0-7).
