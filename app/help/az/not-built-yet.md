---
title: Hələ hazır deyil
summary: ModelCraft-ın bu versiyasının hələ nə etmədiyi və bu gün əvəzinə nə etmək olduğu.
keywords: çatışmayan, hələ yox, məhdudiyyətlər, yol xəritəsi, materiallar, teksturalar, mətn, qatlar, kəsmək, bölmək, bulud, masaüstü
from: 179fa5e4
---

ModelCraft erkən versiyadır. Bu səhifə hələ nə etmədiyini sadalayır ki, onu axtarmayasınız, və işi bu gün görməyin ən yaxın yolunu göstərir.

## Çəkiliş alətləri

| Hələ yox | Bunun əvəzinə, bu gün |
|---|---|
| Sərbəst çəkiliş | Nöqtələri {{ui:Əyri}} ilə klikləyin |
| Çəkildikdən sonra qövsün və ya dairənin seqment sayını dəyişmək | Silin və `24s` yazdıqdan sonra yenidən çəkin |
| [3D mətn](topic:text3d) üçün şrift seçmək və ya yerləşdirildikdən sonra sözlərini redaktə etmək | Silin və mətni yenidən əlavə edin |
| Bucaq ölçüsünə ədəd yazaraq bucağı dəyişmək, ya da dairənin ölçüsündən silindrin ölçüsünü dəyişmək | Kənarları {{ui:Fırlat}} ilə fırladın; silindri {{ui:Miqyas}} ilə miqyaslayın |
| Çəkilmiş ölçülərin xarici model fayllarında olması | Ölçülər şəkillərdə, çaplarda və görünüşün PDF-lərində göstərilir; model faylları yalnız həndəsə saxlayır |
| Kəsmə, Bölmə və Xarici qabıq | [Birləşdir, Çıxart və Kəsişdir](topic:solids) bağlı qruplar, ya da [üzləri kəsişdirin](topic:intersect) və lazım olmayanı silin |
| Ox dönməsini ox düymələri ilə seçmək | {{ui:Fırlat}} mərkəzini oxun istiqamətində olmalı üzün üzərində klikləyin |
| Bir anda birdən çox istiqamətdə kilidləmə | Bir istiqaməti ox düyməsi ilə kilidləyin, sonra nöqtəyə yapışın |
| Əyri boyunca ölçünü dəyişmək və ya ölçü ucu künc üzərində olmayan ölçüdən ölçünü dəyişmək | Ölçünü iki künc üzərində, kənar boyunca və ya qırmızı, yaşıl, mavi boyunca yerləşdirin |

## Animasiya

| Hələ yox | Bunun əvəzinə, bu gün |
|---|---|
| Üzləri, kənarları, günəşin vaxtını, üslubu və ya gizlədilənləri animasiya etmək | Hərəkət edən hissəni qrup və ya komponent edin; başqa vaxt üçün ayrıca video render edin |
| Çəkilmiş yolu izləyən və ya hərəkət edən obyekti göstərən kamera | Yol boyunca daha çox kamera açarı qoyun ([Animasiya](topic:animation)) |
| Videolarda səs və yüksək keyfiyyətli (path-traced) videolar WebGPU olmadan | Videoya səsi video redaktorunda əlavə edin; WebGPU olmadan videonu sürətli render ilə çəkin ([Videonu render edin](topic:animation#render-the-video)) |
| Render olunmuş videoda animasiyalı lampalar (parlaqlıq, yayılma, rəng), videoda kamera açarı olmadan animasiya olunan obyektiv bucağı, materialların və ya render parametrlərinin animasiyası | Lampalar görünüşdə animasiya olunur; video üçün zoom istəyirsinizsə kameranı da açarlayın; fərqli lamp parametrləri üçün ayrıca videolar render edin ([Hər xassəni animasiya edin](topic:animate)) |
| Skin çəkilərinin və ya sümüklərin bir tərəfdən digərinə güzgüləməsi, görünən sümük zərfləri, çəkilərin nöqtə-nöqtə kölgəli göstərilməsi (onlar üz üzrə göstərilir), boyama zamanı poza verilmiş meshi görmək | Hər iki tərəfi boyayın, ya da bir yarısını edin və armatura əlavə olunmadan əvvəl Mirror modifikatorundan istifadə edin; yoxlamaq üçün Çəkiləri boya və Poza arasında keçin |
| glTF, FBX və ya USD fayllarından sümüklərin armatura kimi oxunması, bu fayllara yazılan armaturlar | Skinli modellər faylın çəkiləri ilə dincə gəlir; sümükləri faylın oynaq sırası ilə əlavə edin, sonra {{ui:Faylın çəkilərindən istifadə et}} ([Animasiya](topic:animate)) |
| Baxışda sürükləməklə IK hədəfini və ya qütbü köçürmək, məhdudiyyətin öz fəzasını (yerli və ya dünya) seçmək, IK zəncirlərini uzatmaq, əyri boyunca IK | Hədəfin nöqtəsini yazın, ya da obyektə yönəlin və onu köçürün; zəncirləri uzunluqlarında saxlayın |
| Parça (cloth), mayelər, yumşaq cisimlər, sərt cisimlər arasında oynaqlar və menteşələr, obyektin dəqiq forması ilə toqquşma (ətrafında yalnız qutular və toplar), oynatarkən canlı simulyasiya, başlanğıc sürət və ya fırlanma (cisimlər dincə başlayır) | Sərt cisimləri hesablayın və açarları oynadın; menteşəni açarlardan qurun; qəribə formanı qutulara (qruplara) bölün |
| Animasiyanın glTF və ya digər model fayllarına ixracı | Video render edin; `.modelcraft` faylı və ModelCraft-ın saxladığı [USD faylı](topic:usd) ModelCraft üçün qalır |
| VR-də məsələyə ad və ya başlıq yazmaq, səs qeydləri, VR-də kəsik müstəvisini əllə köçürmək | Məsələni VR-də yerləşdirin, sonra sözlərini BCF proqramında əlavə edin; VR-ə girməzdən əvvəl görünüşdə kəsik müstəvisini təyin edin: bax [VR qulaqlığında modelə baxış](topic:vr-review) |
| VR-də masa arxasındakı insanları görmək (yalnız VR-də olan insanlar görünür), VR gəzintisini yazmaq | Onları VR-də qoşulmağa dəvət edin, ya da gəzintinin [animasiyasını](topic:animation) edin |

## Meshlər

| Hələ yox | Bunun əvəzinə, bu gün |
|---|---|
| Səviyyəli heykəltəraşlıq (multiresolution) və kiçilmiş üçbucaqları götürən Detal | [Heykəltəraşlıq](topic:sculpt) bölünmüş mesh üzərində; {{ui:Remesh}} onu yenidən bərabərləşdirmək üçün |
| Formanı izləyən dördtərəfli üzlərə remesh | {{ui:Remesh}} (bərabər üçbucaqlar), sonra [Retopologiya](topic:mesh-edit#retopology) ilə yenidən qurun |
| Modifikatorlar üçün təpələrdə boyanmış çəkilər (Displace, Smooth və Shrinkwrap bütün mesh üzərində işləyir) | Modifikatoru tətbiq edin, sonra lazım olan hissələri heykəltəraşlayın və ya redaktə edin |
| Təpə, kənar və ya üzlərin kopyalanması və yapışdırılması, üzün içində bitən bıçaq kəsiyi, üzü olmayan naqil kənarları | Modeldə meshi dublikat edin; kənardan kənara bıçaqla kəsin; açıq kənarları [ekstrüziya edərək](topic:mesh-edit#change-the-shape) üzlərə çevirin |

## Təşkil və baxış

| Hələ yox | Bunun əvəzinə, bu gün |
|---|---|
| DWG və DXF situasiya planlarının qatları teq kimi | Situasiya planı bir qrup kimi gəlir: onu parçalayın və teqləmək istədiyiniz hissələri qruplaşdırın |
| Eyni anda bir neçə kəsik, kəsik qutusu və ya kəsiyin konturunun çertyoj kimi ixracı | Hər dəfə bir [kəsik müstəvisi](topic:sections) kəsir; görünüşü şəkil kimi ixrac edin |
| Yumşaq kənarların qırıq xətt ilə göstərilməsi, sürgü çəkərkən yumşaldılması | Obyekt məlumatında [bucağa görə yumşaltma](topic:soften); başqa bucağı sınamaq üçün geri qaytarın |
| Axtarıla bilən onlayn model kitabxanası, ya da seçim üçün variantları olan komponentlər (rəng, üslub) | [Başlanğıc kitabxanası](topic:starter); Collada, OBJ və ya glTF modelləri idxal edin; kopyanı ölçüyə [uzadın](topic:stretch) |
| Kitabxanadan bitki yerləşdirmək | Canlı baxışda [bitkiləri səpin](topic:live-view#scatter-plants-rocks-and-people) və ya başlanğıc kitabxanasından ağac yerləşdirin |
| Qrupun müstəqil kopyaları | Komponentə çevirin, sonra {{ui:Unikal et}} (bax: [Problemlərin həlli](topic:troubleshooting#editing-one-group-changed-another)) |

## Render

| Hələ yox | Bunun əvəzinə, bu gün |
|---|---|
| Görünüşdə render ({{ui:Vizuallaşdır}} iş sahəsi), render növbəsi, WebGPU olmadan kamera, səma şəkli, duman və işıq qarışdırma seçimləri | {{ui:Şəkil render edin…}} {{ui:Yüksək keyfiyyət}} rejimində orada WebGL path tracer istifadə edir, bu seçimlər olmadan ([Şəkli render edin](topic:render#high-quality)) |
| Render şəklini əlavə render mühərriki olmadan başqa proqramın çəkməsi (CadCraft heç vaxt GNU GPL lisenziyalı proqram işlətmir); başqa proqram vasitəsilə panorama və ya stereo kameralar və səma şəkli; Unreal Engine plug-in (fayllar yazılır, onları açan plug-in buraxılmayıb) | Bizim öz Fast və Path tracer mühərriklərimiz; əlavənin mühərriki ([şəkli başqa proqramla çəkin](topic:render-other-program)); Engine siyahısından USD, glTF və ya Unreal qovluq faylı istənilən proqrama aparmaq üçün |
| Render olunmuş şəkildə səpələnmiş bitkilər və qayalar | {{ui:Şəkil render edin…}} üçün onlar [canlı baxışda](topic:live-view) görünür, onun panoramalarında, baxıcıda və videoda |

## Materiallar və rənglər

| Hələ yox | Bunun əvəzinə, bu gün |
|---|---|
| Yüksək keyfiyyətli şəkillərdə əsas rəng, pürüzlülük, metallıq, şəffaflıq, normal və emissiyadan başqa girişlərin səth üzrə dəyişməsi (orta dəyəri istifadə edirlər) | [Materialları düyünlərlə yaradın](topic:shading): yenə də bağlayın, baxış onların dəyişdiyini göstərir |
| Push/pull üzlərində displeysment | Displeysment üçün obyekti meshə çevirin |
| Öz materiallarınızı tətbiqdən Kitabxanaya paylaşmaq, idxal edilən teksturada paketlənmiş (ARM/ORM) və ya EXR xəritələri | Faylda saxlayın; ayrı xəritələri PNG və ya JPEG kimi idxal edin |
| Canlı TeamWork sessiyalarında faylın materialları (onları yaradan kompüterdə qalırlar) | Faylı saxlayın və paylaşın |
| Əyri səthlərə əyilən desallar, desalların geri qaytarılması, və ya bir neçə üzün teksturasını eyni anda sərhəd boyunca boyamaq | Hər hissədə kiçik desallar yerləşdirin; sərhədin hər tərəfini ayrı boyayın |
| Push/pull üzlərinə bake etmək, bir neçə obyekti bir şəkilə bake etmək, əllə formalaşdırılan qəfəs, lampaların bake edilmiş işığı | Meshə çevirin və açın; hər obyekti bake edin; axtarış məsafəsini artırın; lampa işığı üçün şəkli render edin |
| Pürüzlülük, metallıq və ya hündürlüyü boyamaq, şəkillərlə (stamp) boyamaq və 512 × 512-dən böyük tekstura boyamaq | Əsas rəngi burada boyayın; digər xəritələri şəkil redaktorunda hazırlayın və tekstura dəsti kimi idxal edin |
| Collada, STL, PLY, 3MF, IFC, DWG və DXF ixraclarında teksturalar, və faylın öz materiallarının düyün qrafikləri ixrac olunan modellərdə | Bu formatlar hər materialın rəngini alır; glTF və OBJ idxal olunan teksturaları saxlayır; materialı təkbaşına [MaterialX](topic:shading#materialx) kimi ixrac edin; [USD](topic:usd) bütün modeli ModelCraft üçün saxlayır |
| Collada fayllarında teksturalar | İdxalda sayılır və kənarda qalır; `.skp` və `.glb` fayllarında teksturalar gəlir |

## Fayllar

| Hələ yox | Bunun əvəzinə, bu gün |
|---|---|
| SketchUp fayllarını saxlamaq, və onlardan mətn və ölçülər | [İdxal](topic:import-sketchup-files) üzləri, rəngləri və teksturaları saxlayır; SketchUp-a qayıtmaq üçün Collada (`.dae`) ixrac edin |
| DWG və DXF ixraclarında ölçülər və bələdçilər | İxrac etdikdən sonra CAD proqramında əlavə edin |
| DWG və DXF-dən nöqtələr, cədvəllər və multileader-lər | Sayılır və kənarda qalır; mətn çertyojun şrifti yerinə tək xətli hərflərlə gəlir |
| DWG və DXF-dən səthlər, meshlər, cədvəllər və multileader-lər; sərbəst formalı səthlərdəki 3D cisimlərin üzləri | Onlar da sayılır və kənarda qalır (3D cisimlərin özləri gəlir). Həmin hissələri CAD proqramından OBJ və ya Collada kimi ixrac edib idxal edin |
| IFC tipləri, xassələri və ya materialları | IFC ixracında [mərtəbələr](topic:formats#ifc-ifc) və ümumi elementlər var; qalanını BIM proqramında əlavə edin |
| Modeli birbaşa BimCraft-a göndərmək | {{ui:BimCraft üçün IFC (.ifc)}} ixrac edin və BimCraft-da açın |
| glTF və STL-də sərbəst kənarlar | Xətt işi üçün OBJ və ya Collada istifadə edin |
| Əsas rəngdən başqa glTF və FBX materialları (metal, pürüzlülük, normal xəritələr, şüşə, şəffaf örtük, parıltı…) | Oxunur və siyahıya alınır; ModelCraft əsas rəngi və ya teksturanı saxlayır. Görünüşü [Shading iş sahəsində](topic:shading) yenidən qurun |
| glTF sümükləri, animasiyalar və morf hədəfləri | Skinli modellər dinc vəziyyətdə gəlir; [zaman xətti](topic:animation) üzərində animasiya edin |
| STEP fayllarından rənglər və yığımın hissə adları | Hissələr öz real ölçüləri ilə meshlər kimi gəlir; idxaldan sonra [boyayın](topic:paint) və adlandırın |
| `.3dm` fayllarından SubD obyektləri, mətn, ölçülər və işıqlar | [Nəyin kənarda qaldığına](topic:import-3dm-files#what-is-left-out-and-said) baxın; SubD-ni faylı yaradan proqramda meshlərə çevirin |
| glTF-də KTX2 teksturaları və material variantları | PNG və ya JPEG teksturası ilə ixrac edin; standart variant istifadə olunur |
| glTF instancing (EXT_mesh_gpu_instancing) yazmaq | Komponentlər bir dəfə yazılır və çox yerləşdirilir; bunu hər baxıcı oxuyur |
| Alembic animasiyası (keşin hər nümunəsi), Alembic nöqtə və əyriləri, Alembic yazmaq | İlk nümunə gəlir; [zaman xətti](topic:animation) üzərində animasiya edin; glTF, USD və ya OBJ yazın |
| OBJ materiallarında bump və normal xəritələr | Yalnız rəng şəkli (`map_Kd`) gəlir |
| FBX sümükləri və animasiyası, FBX ixracı, FBX 6 faylları | Skinli modellər dinc gəlir; glTF ixrac edin; köhnə faylları FBX 2011 və ya daha yenisi kimi saxlayın |
| Collada skinləri, morfları, kameraları, işıqları, look-at və skew transformasiyaları, xarici istinadlar | İdxalda kənarda qalır və mesajda sayılır |
| Ehtiyat fayllar | {{ui:Fərqli saxla}} ({{key:Mod+Shift+S}}) başqa bir nüsxə saxlayır. Çökmədən sonra ModelCraft saxlanmamış işinizi geri təklif edir ("İşinizi bərpa edək?") |
| Bulud saxlama və kompüterlər arasında sinxronizasiya | Hələ mövcud deyil. Faylları kompüterinizə saxlayın və lazım olan yerə kopyalayın |

## 3D çap

| Hələ yox | Bunun əvəzinə, bu gün |
|---|---|
| Həqiqi slicer dəstəkləri (interfeyslər, raft, dəqiq dəstək naxışı) | [Dəstəklərin önizləməsi](topic:print-tools#supports-preview) harada və təqribən nə qədər lazım olduğunu göstərir; slicerinizin önizləməsi həqiqiləri göstərir |
| Öz-özünü keçən hissənin açılması, və ya üç və daha çox üzün birləşdiyi kənarlar | [Təmir](topic:print-tools#repair) onları yerləri ilə siyahıya alır; [Üzləri kəsişdirin](topic:intersect) və içini silin |
| Doldurma (infill) naxışları və içi boş hissənin içində qəfəs | [Oyma](topic:print-tools#hollow) onu boş qoyur; slicer bərk hissəyə doldurma əlavə edir |
| Nozzle üçün çox kiçik detallar (divarlardan başqa) | [Divar qalınlığı](topic:print-tools#wall-thickness) nazik divarları tapır; slicerinizin qat önizləməsi qalanını göstərir |

## Performans

Geri qaytarma hər addım üçün modelin nüsxəsini saxlayır ([mesh](topic:meshes) yalnız dəyişəni saxlayır), buna görə push/pull həndəsəsinin çox böyük idxalları hər redaktəni yavaşladır. İdxalları yüngül saxlayın, tarixçəni təmizləmək üçün saxlayıb yenidən açın.

## Tətbiqlər və platformalar

- **Masaüstü:** ModelCraft Mac, Windows və Linux-da brauzerdə işləyir, və bütün səkkiz tətbiqi bir quraşdırmada ehtiva edən masaüstü tətbiqi CadCraft Studio-da. Android-də CadCraft Studio getcadcraft.com/download-dan APK ilə quraşdırılır. iPad və ya iPhone versiyası hələ yoxdur.
- **Toxunma:** barmaq jestləri üçün bax: [Orbit, sürüşdürmə və yaxınlaşdırma](topic:orbit-pan-zoom). Qələm təzyiqi [Heykəltəraşlıq](topic:sculpt) fırçasını təyin edir; başqa yerdə təzyiq və qələm əyilməsi istifadə olunmur.
- **Vərəqlər:** ModelCraft [hər səhifəyə bir görünüş çap edir](topic:export-model#print-the-view-or-save-it-as-a-pdf); bir neçə görünüşü və ya başlıq bloku olan vərəq düzümləri yoxdur. Miqyaslı çertyojlar üçün CadCraft-a uyğun DWG/DXF ixrac edin.
