---
title: 0.7-də yeniliklər (əvvəlki)
summary: Modifikatorlu mesh-lər, heykəltəraşlıq, UV-lər və əyri obyektlər, qrafik kartında yol izləmə və Render iş sahəsi, səpələnmə və panoramalı real vaxt canlı görünüşü, node materialları, skeletlər və fizika ilə Animate iş sahəsi, USD, FBX, STEP və .3dm faylları, və Başlanğıc üslubu ilə çap alətləri.
keywords: 0.7-də yeniliklər, əvvəlki buraxılış, buraxılış qeydləri, dəyişikliklər jurnalı, dəyişikliklər, 0.7, versiya, yeni xüsusiyyətlər, mesh, mesh-lər, mesh iş sahəsi, modifikatorlar, bölünmə, qırış, uv, açmaq, tikişlər, əyrilər, əyri obyektləri, nurbs, bezier, heykəltəraşlıq, remesh, retopologiya, bölmək, hesablama, yol izləmə, webgpu, render iş sahəsi, render növbəsi, mp4, exr, səs-küy azaltma, fiziki səma, hdri, ies, sahə dərinliyi, işıqların qarışdırılması, duman, kaustika, canlı görünüş, real vaxt, gəzmək, səpələnmə, panorama, tur, baxış proqramı, kölgələndirmə, node-lar, node materialları, material kitabxanası, materialx, dekal, tekstur boyama, bişirmə, animasiya, qrafik redaktor, kliplər, forma açarları, sürücülər, skelet, sümüklər, skinninq, ik, məhdudiyyətlər, fizika, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, 3D cisimlər, dayaqlar, divar qalınlığı, oyma, təmir, başlanğıc, köməkçilər, sizin kompüteriniz, vahidlər, portuqal dili
from: 16d52810
---

Bu, ModelCraft 0.7-də 0.6-ya nisbətən nəyin dəyişdiyidir. ModelCraft indi həm itələ/çək həndəsəsini, həm də meshləri modelləşdirir, qrafik kartında render edir və hər iş növü üçün iş sahəsi var: onu alətlər panelinin solundakı {{ui:İş sahəsi}} siyahısında seçin.

## Yeni

### Mesh-lər

- **Mesh-lər.** Qrup və ya komponent seçin və {{ui:Obyekt məlumatı}} bölməsində {{ui:Mesh-ə çevir}} klikləyin: istənilən sayda künci olan üzlərlə mesh olur, tekstur koordinatları, normallar, rənglər və çəkilər daşıya bilər. {{ui:Həndəsəyə çevir}} onu geri çevirir. Mesh-də geri qaytarma yalnız hər addımın dəyişdirdiyi şeyi saxlayır. Mesh olan faylı açmaq üçün ModelCraft 0.7 lazımdır. Bax: [Mesh-lər](topic:meshes).
- **Mesh iş sahəsi.** Mesh-ə iki dəfə klikləyin və ya {{ui:İş sahəsi}} siyahısında {{ui:Mesh}} seçin ki, onun təpələrini, kənarlarını və üzlərini redaktə edin: döngələr və halqalar, mütənasib redaktə, ekstrüziya, daxilə salma, zənginləşdirmə, döngə kəsimi, bıçaq, ikiyə bölmə, fırlatma, birləşdirmə, həll etmə, doldurma, şəbəkə ilə doldurma, körpü və sürüşdürmə; son əməliyyatın parametrləri sonradan paneldə dəyişdirilə bilər. Müstəvi, kub, kürə, torus və daha çoxundan başlayın. İtələ/çək düymələri və modelçi düymələri ikisi də işləyir. Bax: [Mesh iş sahəsində mesh-i redaktə edin](topic:mesh-edit).
- **Modifikatorlar.** Güzgü, massiv, bölünmüş səth, zənginləşdirmə, bərkitmə, Boolean, yerdəyişmə, qaynaq, sadələşdirmə, hamarlaşdırma, qəfəs, əyri deformasiyası və büzülmə-sarma meshin necə göründüyünü dəyişir, mesh-in özünü dəyişmədən. Onları yığın, hər birini görünüş və render üçün yandırıb-söndürün və həmişəlik tətbiq etmək istədikdə {{ui:Tətbiq et}} klikləyin. Bax: [Mesh-də modifikatorlar](topic:modifiers).
- **Bölünmə ilə qırışlar.** Mesh iş sahəsində {{ui:Qırış}} seçilmiş kənarları bölünmə səthi altında kəskin saxlayır. Render görünüşdən daha çox səviyyə istifadə edə bilər; böyük meshdə görünüş aşağı səviyyə göstərir və bunu deyir. Bax: [Bölünmə səthi](topic:modifiers#subdivision-surface).
- **Əyri obyektləri.** Bézier, NURBS və düz seqmentli əyrilər boru, lent, konusvari və ya doldurulmuş lövhə yaradır, və mətn əyri kimi. Onların nöqtələrini {{ui:Əyri}} iş sahəsində redaktə edin; forma düz olanda {{ui:Meşə çevir}}. Bax: [Əyri obyektləri](topic:curves).
- **UV iş sahəsi.** Tikişləri işarələyin (və ya ModelCraft onları kəskin kənarlarda işarələsin), {{ui:Açın}} və {{ui:Yığ}}, və ya qutu, silindr, kürə və ya görünüşlə proyeksiya. 3D görünüşün yanındakı UV redaktoru parçaları köçürür, döndərir və miqyaslandırır; şaşka və uzanma rəngləri nəticəni göstərir. Bax: [Mesh-in UV-lərini tərtib edin](topic:uv).
- **Heykəltəraşlıq.** {{ui:Heykəltəraşlıq}} iş sahəsində çək, gil, hamarlaşdır, tut, şişir, qırış, sıxma, düzləşdir və maska fırçaları var, X boyunca güzgüləmə ilə, və {{ui:Təfsilat}} heykəltəraşlıq etdiyiniz yerdə üçbucaqlar əlavə edir. Qələmin təzyiqi fırçanın ölçüsünü və gücünü təyin edir. Hər vuruş bir geri qaytarma addımıdır. Bax: [Mesh-i heykəltəraşlayın](topic:sculpt).
- **Yenidən meshləmə və retopologiya.** {{ui:Remesh}} bütün meshi bərabər üçbucaqlarla yenidən yaradır, dəlikləri bağlayaraq və üst-üstə düşən parçaları birləşdirərək. Təfərrüatlı meshin üzərində təmiz mesh qurmaq üçün onu {{ui:Retopology}} altında seçin: hərəkət etdirdiyiniz nöqtələr onun səthinə düşür. Bax: [Remesh](topic:mesh-edit#remesh).

### Çəkmə

- **Kənarı və ya əyrini bölün.** {{ui:Bölün}} aləti kənarın boyunca hərəkət etdikcə kəsikləri işarələyir və klikləmə və ya yazılmış ədədlə bölür; kənar, qövs və ya dairə seçilmiş halda `/5` yazın; {{ui:Obyekt məlumatı}} › {{ui:Bölmək…}} planşetlər üçün ədəd soruşur. Qövs və ya dairə əsl qövs üzərində bərabər bucaqlarla bölünür. Bax: [Kənarı və ya əyrini bərabər hissələrə bölün](topic:divide).
- **Dəyər qutusunda hesablamalar.** İstənilən uzunluq üçün `2.5/3`, `12'6"+3/4"`, `(24'-0")/3` və ya `2*450mm` yazın, bucaq üçün `90/2`. Yerinə yetirilməyən hesablama nəyin səhv olduğunu və harada olduğunu deyir. Bax: [Hesablamalar](topic:value-box#calculations).

### Render

- **Qrafik kartında yol izləmə.** {{ui:Şəkil render edin…}} › {{ui:Yüksək keyfiyyət (yol izləmə ilə)}} brauzerdə WebGPU olduqda CadCraft-ın öz yol izləyicisini qrafik kartında işlədir; şəkilin altındakı xətt hansı mühərrikin çəkdiyini göstərir. {{ui:Dayandır}} şəkli saxlayır və {{ui:Davam et}} oradan davam edir. WebGPU olmadan şəkil əvvəlki kimi WebGL ilə yol izlənilir. Bax: [Yüksək keyfiyyət](topic:render#high-quality).
- **Görünüşdə render.** {{ui:Vizuallaşdır}} iş sahəsi görünüşün özünü yol izləyir və siz orbit etdikcə və ya redaktə etdikcə yenidən başlayır: {{ui:Sahə}} render edin, {{ui:Fokus}} üçün klikləyin, {{ui:Təfsilat}} təyin edin. WebGPU tələb olunur. Bax: [Görünüşdə render](topic:render#render-in-the-view).
- **Materiallar, işıqlar və səmalar.** Yüksək keyfiyyətli şəkillər hər səthi OpenPBR material modeli ilə kölgələndirir (örtüklər, tüklülük, nazik təbəqələr, rəngli şüşə, parıltı). WebGPU ilə həmçinin {{ui:Fiziki səma}} və {{ui:Dumanlılıq}}, {{ui:Səma şəkli (HDRI)}} və lampalar üçün istehsalçının IES işıq profilləri var. Bax: [Səmalar və işıq profilləri](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **Fotoşəkil kimi kamera.** Hər rejimdə f-stop, diafraqma və ISO-dan pozlama; WebGPU ilə həmçinin sahə dərinliyi, iki nöqtəli perspektiv, ağ balans, 360° panoramalar (stereo da) və kub xəritələri. Bax: [Kamera](topic:render#the-camera).
- **Render-dən sonra şəkli bitirin.** {{ui:ACES filmic}}, {{ui:AgX}}, {{ui:Filmic}} və ya {{ui:Standart}} ilə rəng düzəlişi edin (kontrast, parıltı, vinyetka, `.cube` rəng cədvəli), səmanı, günəşi və hər lampa qrupunu qarışdırın və render elementlərinə tək-tək baxın, hamısı yenidən render etmədən. Qalan səs-küy kompüterinizdəki səs-küy azaldıcı ilə təmizlənir. Bax: [Şəkli bitirin](topic:render#finish-the-picture) və [Render-dən sonra işıqları qarışdırın](topic:render#mix-the-lights-after-the-render).
- **Renderi saxlamağın daha çox yolu.** 16-bit PNG, hər render elementi və işıq qrupu ilə çoxqatlı EXR, və yenidən açılan render faylı (`.ccrender`), qarışdırma və rəng düzəlişi ilə birlikdə. Bax: [Şəkli saxlayın](topic:render#save-the-picture).
- **Duman, tüstü və kaustika.** Günəş və lampalar tərəfindən işıqlanan duman və dumanlılıq, işıq şüaları ilə; bir tüstü sütunu və ya bulud; şüşə və güzgülər altında kaustika; artıq təmiz olan piksellərdə dayanan uyğunlaşan nümunə götürmə. Yalnız qrafik kartında. Bax: [Duman, tüstü, səs-küy və kaustika](topic:render#fog-smoke-noise-and-caustics).
- **Render növbəsi və MP4.** Yüksək keyfiyyətli şəkilləri və bütün animasiyaları {{ui:Render növbəsi}}-nə əlavə edin; onlar bir-birinin ardınca render olunur və növbə səhifəni bağladıqdan sonra da qalır. WebGPU tələb olunur. Videolar brauzerin yaza bildiyi yerdə MP4 kimi də saxlanıla bilər. Bax: [Render növbəsi](topic:render#the-render-queue) və [Videonu render edin](topic:animation#render-the-video).

### Canlı görünüş və təqdimatlar

- **Canlı görünüş.** {{ui:İxrac}} › {{ui:Canlı görünüş}} modeli görünüşün yanında real vaxt görünüşündə göstərir, hər dəyişikliyi və kameranı izləyir: günəş kölgələri, materiallar, lampalar və divarlardan əks olunan işıq. {{ui:Gəz}} ilə gəzin, {{ui:Vaxt}} və {{ui:Ay}} sürükləyib günəşi hərəkət etdirin və ya {{ui:Yeni pəncərə}}-yə köçürün. WebGPU varsa onu, yoxsa WebGL 2-ni işlədir. Bax: [Canlı görünüş](topic:live-view).
- **Səpələnmə.** Ot, çiçək, daş, ağac və insanları üzlər üzərində və ya fırça ilə yayın; yeddi yeni element və kitabxananın qalan hissəsindən; dəstlər faylda saxlanılır. Bax: [Bitki, daş və insanları səpin](topic:live-view#scatter-plants-rocks-and-people).
- **Paylaşma.** 360° panorama, oxlarla yerlər arasında panorama turu, müstəqil baxış proqramı (oflayn açılan və internetdən heç nə yükləməyən veb səhifə) və kamera yolunun videosu, hamısı real vaxt görünüşündə. Bax: [Paylaşın](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **Real vaxt görünüşündə VR.** {{ui:VR-də nəzərdən keçir}} modeli materialları, səması, günəş kölgəsi, lampaları, səpələnmiş elementləri və əks olunan işığı ilə göstərir. Bax: [Necə görünür](topic:vr-review#what-it-looks-like).

### Materiallar

- **Node-larla hazırlanmış materiallar.** {{ui:Kölgələndirmə}} iş sahəsi faylın öz materiallarını node qrafikləri kimi qurur: şəkillər, səs-küy və şaşkalar, Voronoi hüceyrələri, dalğalar, kərpic, kafel, ağac, mərmər, gradiyentlər, çirk və kənar aşınması, rəng işi, riyaziyyat, bump və normal xəritələr; hamısı tam OpenPBR materialına. Görünüş hər dəyişikliyi dərhal göstərir. Bax: [Node-larla material hazırlayın](topic:shading).
- **Material kitabxanası və öz tekstur dəstləriniz.** Kölgələndirmə paneli Kitabxananın materiallarını sadalayır: hər birinin müəllifliyi qeyd olunmuş on altı CC0 tekstur dəsti. Birini istifadə etmək üçün klikləyin və ya üzə sürükləyin. {{ui:Şəkillər və ya zip…}} və ya {{ui:Qovluq…}} öz xəritələrinizdən material yaradır, fayl adları ilə tapılır. Bax: [Kitabxanadan materiallar](topic:shading#materials-from-the-library).
- **MaterialX içəri və xaricə.** Materialı MaterialX kimi ixrac edin (OpenPBR Surface və ya Standard Surface, teksturlar PNG kimi), və MaterialX fayllarını şəkilləri ilə idxal edin. Bax: [MaterialX](topic:shading#materialx).
- **Dekallar və tekstur boyama.** Şəkli dekal kimi öz materialı ilə səthə qoyun, və materialın şəklini dəyirmi fırça ilə boyayın. Bax: [Dekallar](topic:shading#decals) və [Teksturda boyayın](topic:shading#paint-on-the-texture).
- **Tekstur bişirmə.** Ətraf oklüziyanı, əyriliyi, işığı və təfsilatlı obyektin normallarını mesh-in UV-ləri boyunca şəkillərə bişirin, kompüterin prosessor nüvələrində. Bax: [Teksturları bişirin](topic:shading#bake-textures).

### Animasiya

- **Animate iş sahəsi.** Obyektin yerini, dönməsini və ölçüsünü, hər lampanın parlaqlığını, yayılmasını və rəngini, və obyektiv bucağını açar kimi saxlayın, birbaşa paneldə. Zaman cədvəlində {{ui:Əyrilər}} görünüşü (Bézier tutacaqları, təkrarlar) və açarları yenidən yerləşdirilə və qarışdırıla bilən hərəkətlər kimi saxlayan {{ui:Kliplər}} görünüşü var; bir neçə sətirdəki açarlar köçürülə, uzadıla, kopyalana və yapışdırıla bilər. Bax: [İstənilən xüsusiyyəti animasiya edin](topic:animate).
- **Forma açarları və sürücülər.** Mesh öz başqa formalarını saxlayır, açarlana bilən sürüşdürücülərlə qarışdırılır, və ya kiçik ifadə ilə digər dəyərlərdən təyin olunur. Bax: [Forma açarları](topic:animate#shape-keys-morphs) və [Sürücülər](topic:animate#drivers).
- **Skeletlər.** Meshə sümüklər əlavə edin, {{ui:Avtomatik çəkilər}} nöqtələri onlar arasında bölsün və ya çəkiləri boyayın, sümükləri poza verib açarlayın; xətti və ya ikiqat kvaternion skinninqi. Bax: [Skeletlər](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK və məhdudiyyətlər.** Qütbü olan çatma (IK), baxma, transformasiyaları kopyalama, limitlər, valideyn-uşaq və yol izləmə, sümüklər və obyektlər üçün. Bax: [IK və məhdudiyyətlər](topic:animate#ik-and-constraints).
- **Fizika.** Qruplar və komponentlər qutu və ya top kimi düşür, yığılır və toqquşur, və {{ui:Fizikanı qeyd et}} nəticəni açar kimi saxlayır. Bax: [Fizika](topic:animate#physics-drop-stack-and-collide).

### Fayllar

- **USD.** {{ui:Fərqli saxla}} ({{key:Mod+Shift+S}}) modeli `.usda`, `.usdc` və ya `.usdz` kimi saxlayır, və ModelCraft-ın saxladığı USD faylı heç nə itirmədən yenidən açılır. Digər proqramların USD-si mesh, qrup, komponent, lampa və kamera kimi açılır və ya idxal olunur. {{ui:Saxla}} hələ də `.modelcraft` yazır. Bax: [USD-ni saxlayın, açın və ixrac edin](topic:usd).
- **glTF, tam.** glTF faylları normalları, UV-ləri, təpə rəngləri və teksturları ilə redaktə oluna bilən meshlər kimi gəlir, düyünlər qrup kimi, işıqlar lampa kimi və kameralar səhnə kimi; Draco və meshopt faylları da daxil. `.gltf` faylı onun faylları ilə birlikdə atıldıqda açılır. İxrac meshləri, teksturları, lampaları və kameraları yazır. Bax: [glTF](topic:formats#gltf-glb-gltf).
- **FBX, PLY, STL və Alembic idxalı.** FBX 2011 və daha yenisi (meshlər, UV dəstləri, materiallar, daxili teksturlar, işıqlar, kameralar), rəngləri ilə PLY və STL, və Alembic keşləri ilk nümunəsində. OBJ `.mtl` və şəkilləri ilə birlikdə atıldıqda gəlir. Bax: [Fayl formatları ətraflı](topic:formats).
- **Daha çox ixrac.** Rənglərlə PLY, boyanmış üzlərin rəngləri ilə STL, və teksturları ilə OBJ bir zip-də. Bax: [Fayl formatları ətraflı](topic:formats).
- **STEP faylları.** {{ui:İdxal et}} STEP (AP203, AP214, AP242) hissələrini və yığımlarını qapalı meshlər kimi əsl ölçüdə oxuyur, hər hissə faylın yerləşdirdiyi yerdə. Bax: [STEP](topic:formats#step-step-stp).
- **.3dm faylları.** {{ui:İdxal et}} `.3dm` modellərini oxuyur: meshlər, polisəthlər və ekstruziyalar (faylda saxlanmış meshlərdən, əks halda ModelCraft tərəfindən hesablanır), əyrilər kənarlar kimi, bloklar komponent kimi və təbəqələr teq kimi. Bax: [.3dm modelini gətirin](topic:import-3dm-files).
- **DWG və DXF-dən 3D cisimlər.** Çertyojun idxalı indi onun 3D cisimlərini, regionlarını və gövdələrini də gətirir, hər biri öz qrupu kimi, bağlı olanlar isə cisim kimi. Bax: [Model site planında](topic:site-plan#what-comes-in).

### 3D çap

- **Çap alətləri.** {{ui:3D çap üçün yoxlayın (STL və ya 3MF)…}} › **Çap alətləri** bölməsində {{ui:Dayaqların önizləməsi}} (çıxıntılar, sütunlar və ya ağac dayaqları, təxminən nə qədər material), {{ui:Divar qalınlığı}} (çap üçün çox nazik divarlar, {{ui:Göstər}} ilə sadalanır), {{ui:Oyma}} (verdiyiniz qalınlıqda divarlar, drenaj dəlikləri ilə) və {{ui:Təmir et}} (hər düzəliş sadalanır; üst-üstə düşən hissələr yalnız istədiyiniz zaman birləşir) var. Oyma və Təmir düz tərəfləri tək üz olan qrup verir, və ya nəticə bağlanmadıqda və ya çox üz olduqda mesh; status xətti hansının olduğunu deyir. Bax: [Dayaqlar, divar qalınlığı, oyma və təmir](topic:print-tools).
- **Başlanğıc üslubu.** {{ui:Parametrlər}} › {{ui:ModelCraft}} › {{ui:Menyular, düymələr və siçan}} › {{ui:Başlanğıc}}: forma və deşiklər atmaq, hərəkət etmək, düzləşdirmək və {{ui:Qrup}} üçün böyük düymələr ki, deşiklər kəsilsin, sonra modeli çap üçün yoxlayın. Bax: [Başlanğıc üslubu](topic:beginner).

### Köməkçilər və kompüteriniz

- **Köməkçilər üçün daha çox.** Köməkçi indi üzləri və materialları sadalaya, itələyib-çəkə, rəngləyə, qrup yarada, səhnələr əlavə edib göstərə, meshlər əlavə edə, modifikator yığınlarını redaktə edə, USD ixrac edə, şəkil render edə və render növbəsini doldura bilər. Bax: [ModelCraft-ı süni intellekt köməkçiləri ilə istifadə edin](topic:use-with-ai-assistants).
- **Kompüteriniz.** {{ui:Parametrlər}} › {{ui:ModelCraft}} › {{ui:Render}} › {{ui:Sizin kompüteriniz}} bu brauzerin tətbiqin istifadə edə biləcəyi qrafikanı, prosessor nüvələrini və yaddaşı göstərir, və canlı görünüşün harada başladığını təyin edən səviyyəni. Bax: [Kompüteriniz nə ilə render edir](topic:your-machine).

## Düzəlişlər

- {{ui:Cisimlər}} › {{ui:Birləşdir}}, {{ui:Çıxar}} və {{ui:Kəsişdir}} istənilən ölçüdə bağlı olmayan qrup qaytara bilirdi. İndi bağlanır.
- {{ui:Cisimlər}} › {{ui:Çıxar}} heç nə seçilmədikdə boz idi, halbuki onu seçdikdən sonra iki hissəni növbə ilə seçir.
- Animasiya zaman cədvəlinin içində yazılmış açarlar heç yerə getmirdi, {{key:Mod+S}} də. Orada {{key:Mod+Z}} və {{key:Mod+Y}} zaman cədvəlinin öz geri qaytarma və yenidən etmə əməliyyatlarıdır; digər {{key:Mod}} düymələr tətbiqə çatır.

## Bütün tətbiqlərdə

- **Vahidlər.** {{ui:Parametrlər}} › {{ui:Ümumi}} › {{ui:Vahidlər}} uzunluq, sahə, həcm, bucaq və meyl üçün hər biri ayrı siyahıya malikdir, vahidlərin təriflərinin verdiyi dəqiq ölçülərlə (ABŞ sorğu futu öz vahididir). İstifadə etmədiyiniz vahidləri söndürün və onlar siyahıdan çıxır; birini ulduzlasanız yeni iş ondan başlayır. Fayl həmişə öz vahidini saxlayır. ModelCraft-da dəyər qutusunun yanındakı vahid siyahısı keçidləri izləyir (modelin öz vahidi həmişə qalır), ulduz yeni modelin vahidini təyin edir (ModelCraft həmin vahidə malik olduqda), və istənilən vahidin işarəsi ilə yazılmış uzunluq həmin vahiddə oxunur. Bax: [Vahidlər, yazılmış dəyərlər və vahid siyahıları](common:unit-lists).
- **Daha sıx tərtibat və yığılan panellər.** {{ui:Parametrlər}} › {{ui:Ümumi}} › {{ui:Tərtibat sıxlığı}} › {{ui:Yığcam}} ekrana daha çox sığdırır (sensor ekranlar və telefonlar böyük düymələrini saxlayır). Hər yan panelin nazik başlıq çubuğu var: onu sürükləyib yerləşdirin və ya üzdürün, başqa panelin çubuğuna buraxıb bir çərçivədə bölmə kimi paylaşın, kənara sürüşmək üçün bərkidin və ya gizlədib kənardan geri gətirin. Bax: [Panelləri düzənləyin](common:arrange-panels#make-the-layout-denser).
- **Dialoqlar yerini dəyişir.** Dialoqu başlıq çubuğundan tutub çertyojun qarşısından çəkin; o, əvvəl qoyduğunuz yerə qayıdır. Başlıq çubuğuna iki dəfə klikləyin ki, yenidən mərkəzləşdirilsin. Bax: [Dialoqu köçürün](common:arrange-panels#move-a-dialog).
- **Köməkçilər üçün reseptlər.** Öz köməkçiniz üçün on işlənmiş sorğu (çertyojları təmizləyin, dəsti çəkin, çertyojları yoxlayın, modelə sual verin, həcmlərin hesablanmasını cəmləyin, detal variantı sınayın…), hər biri çağırdığı alətlər və tələb etdiyi icazələrlə, və hər biri testlərimizlə yenidən işlədilir. Tətbiqlərin özündə süni intellekt yoxdur. Bax: [Köməkçilər üçün reseptlər](common:assistants-recipes).
- **Dillər.** **Português (Portugal)** {{ui:Parametrlər}} › {{ui:Ümumi}} › {{ui:Dil}} bölməsində yenidir. O, **Português (Brasil)**, **Español (México)** və **Bahasa Indonesia** ilə indi tətbiqlərin hər sözünə malikdir, lakin ana dilində danışan biri tərəfindən oxunmamış qaralama kimi. Yardım mövzuları ingilis dilindədir.
- **CadCraft Studio** yeniləmə yoxlamasının niyə alınmadığını deyir (hələ sistem üçün fayl yoxdur, şəbəkə yoxdur, pis imza) "Hazırdır" əvəzinə, və bağladığınız {{ui:Yeniliklər}} kartını yeni buraxılış olana qədər geri gətirmir.

## Bu versiyada hələ yoxdur

- **0.7 kod imzalanmayıb.** İmzalama və Microsoft Store paketi 0.8-ə keçdi, çünki sertifikatın təsdiqi hələ gəlməyib. Hər faylın yanındakı SHA-256-nı getcadcraft.com/download səhifəsində yoxlayın. Windows-da SmartScreen quraşdırıcını saxlasa, {{ui:Ətraflı məlumat}} seçin, sonra {{ui:Yenə də işə sal}}. Mac-də ilk dəfə CadCraft Studio-ya sağ klikləyin və {{ui:Aç}} seçin. CadCraft Studio hələ tətbiq mağazasında deyil və iPad və ya iPhone quruluşu hələ yoxdur.
- {{ui:Vahidlər}}-də bucaq və meyl siyahıları yadda saxlanılır, lakin hələ heç bir qutu onları oxumur.
- Qrafik kartında render (WebGPU) yalnız proqram əvəzedicisi ilə burada sınaqdan keçirilib, real qrafik kartlarında hələ yox; buna görə əvvəl kompüterinizdə kiçik bir şey render edin. Canlı görünüş üçün də eyni; VR hələ yalnız qulaqlıq emulyatoru ilə sınanıb.
- WebGPU olmadan Render iş sahəsi və render növbəsi yoxdur; yüksək keyfiyyətli şəkillərdə sahə dərinliyi, fiziki səma, səma şəkli, duman, tüstü, kaustika və işıq qarışdırması yoxdur.
- {{ui:Şəkil render edin…}} hələ səpələnmiş elementləri render etmir; onlar canlı görünüşdə, onun panoramalarında, baxış proqramında və videoda göstərilir.
- Lampalar görünüşdə animasiya olunur, lakin render olunmuş video başlanğıcda lampaları olduqları kimi istifadə edir.
- Sümüklər və animasiya glTF, FBX və ya USD fayllarından oxunmur və ya yazılmır (skin-li modellər sükunətdə, çəkilərlə gəlir), və glTF və FBX materialları əsas rəng və ya tekstur xaricində hələ saxlanmır.
- STEP rəngləri və yığımın hissə adları hələ oxunmur. `.3dm` idxalı format alətlərinin yazdığı fayllarla sınaqdan keçirilib, modelləşdirmə proqramının özünün fayllarıyla hələ yox; SubD obyektləri, mətn və ölçülər kənarda qalır.
- CivilCraft-dan bitki kitabxanası ModelCraft-dadır, lakin ondan bitkiləri yerləşdirmək hələ qurulmayıb.
- Push/pull üzlərinə tekstur boyamaq materialın kafeli ilə təkrarlanır; yalnız bir üzü boyamaq üçün onu mesh-ə çevirin və açın.

Qalan hər şey [Hələ qurulmayanlar](topic:not-built-yet) bölməsindədir.
