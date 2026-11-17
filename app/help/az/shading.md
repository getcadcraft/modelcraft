---
title: Düyünlərlə material yaradın
summary: Kölgələndirmə iş sahəsində teksturalardan, şəkillərdən və riyaziyyatdan material qurun, işlədikcə baxışda görün və üzləri onunla boyayın.
keywords: kölgələndirmə, bişirmə, tekstura bişirmə, ambient occlusion, ao, əyrilik, normal bişirmə, yüksək poli, aşağı poli, işıq xəritəsi, dekal, dekallar, stiker, loqo, etiket, tekstura ilə boyama, teksturu boya, fırça, material, materiallar, materialx, mtlx, openpbr, standard surface, material kitabxanası, librarycraft, tekstura dəsti, pbr, teksturaları idxal et, zip, cc0, sürüklə, düyün, düyünlər, düyün redaktoru, shader, tekstura, prosedur, səs-küy, şahmat, voronoi, hüceyrələr, dalğalar, kərpiclər, kafellər, ağac, mərmər, gradient, kir, kənar aşınması, rəng şkalası, qarışdır, qabartma, normal xəritə, pürüzlülük, metallıq, şəffaflıq, kəsmə, emissiya, parıltı, yerdəyişmə, qutu xəritələmə, triplanar, uv, şəkil
from: d7368b21
---

**Kölgələndirmə** iş sahəsində yaradılan material fayla aiddir. Bu kiçik bir qrafikdir: teksturalar, şəkillər və rəqəmlər yaradan **düyünlər** Material çıxışına bağlanır, onun girişləri səthin görünüşüdür — əsas rəng, pürüzlülük, metallıq, normal, şəffaflıq, emissiya və OpenPBR modelinin qalan hissəsi. Üzləri hər kitabxana materialı kimi onunla boyayırsınız və hər dəyişiklik dərhal baxışda görünür.

## Açmaq

İş sahəsi siyahısından {{ui:Kölgələndirmə}} seçin. 3D baxış ekranın yuxarısını saxlayır və **düyün redaktoru** aşağını tutur. Sağdakı panel faylın öz materiallarını sadalayır.

- {{ui:Yeni material}} yalnız Material çıxışı olan boz material yaradır.
- **Kitabxana materialının redaktə edilə bilən surətini çıxarın** kərpici, ağacı, kafeli və qalanlarını dəyişə bilən qrafikə çevirir: teksturası Kitabxana teksturası düyünü ilə, qabartmaları Qabartma düyünü ilə gəlir.
- {{ui:Onunla boya}} seçilmiş üzləri və ya qrupları boyayır, ya da boya alətinin materialını seçir. Boya alətinin materialları, həmçinin **Bu faylda** altında faylın öz materiallarını sadalayır.
- {{ui:Surətini çıxar}} və {{ui:Sil}} redaktə etdiyiniz material üzərində işləyir. Silmək geri qaytarıla bilməz: onunla boyanmış üzlər yenidən boyanana qədər standart rəngi göstərir.

## Kitabxanadan materiallar

Panelin **Material kitabxanası (Kitabxana)** kitabxananın materiallarını sadalayır, hər birinin CadCraft-ın yol izləyicisi (path tracer) ilə render edilmiş önizləməsi var. Onlar CC0 altında buraxılmış, yaradan şəxslərə istinad edilən tekstura dəstləridir.

- Birini klikləyin, onu fayla gətirmək üçün (şəkilləri ilə birlikdə) və üzlər və ya qruplar seçilmişkən, onları boyamaq üçün.
- Birini görünüşdə üzün və ya qrupun üzərinə sürükləyin, yalnız onu boyamaq üçün.
- O, faylın materiallarından birinə çevrilir: digər materiallar kimi düyünlərini dəyişin. Onun istinadı panelində göstərilir və faylda qalır.

## Tekstura dəstini idxal edin

**Tekstura dəstini idxal et** altında {{ui:Şəkillər və ya zip…}} və ya {{ui:Qovluq…}} xəritələr dəstindən material yaradır. Xəritələr fayl adlarındakı sözlərlə tapılır: color, albedo, diffuse və ya basecolor; roughness (və ya gloss, pürüzlülüyə çevrilir); metalness və ya metallic; normal (OpenGL və ya DirectX, addakı `gl` / `dx`-dən); height və ya displacement; ambient occlusion; opacity; emission. Qablaşdırılmış xəritələr (ARM, ORM) buraxılır. Kafel 1 × 1 m-dən başlayır: onun real ölçüsünü Material çıxışında təyin edin. Hündürlük yerdəyişməyə 0 miqyasla gedir — meshlərdə istifadə etmək üçün miqyası artırın.

## MaterialX

MaterialX digər 3D və render proqramlarının materialları ötürdüyü açıq formatdır.

- {{ui:MaterialX kimi ixrac edin…}} redaktə etdiyiniz materialı saxlayır: dəyərlərini və hər teksturanı `.mtlx` faylının yanında PNG şəkil kimi (zip-də). Yazılacağı kölgələndiricini seçin: **OpenPBR Surface** (MaterialX 1.39, ModelCraft-ın istifadə etdiyi eyni model) və ya **Standard Surface** (MaterialX 1.38, bu gün daha çox proqram oxuyur). Teksturalar metrlərdə UV koordinatları ilə yerləşdirilir; qutu və triplanar yerləşdirmə UV kimi yazılır.
- {{ui:MaterialX idxal edin…}} (və ya {{ui:Qovluqdan…}}) `.mtlx` fayllarını OpenPBR, Standard Surface, UsdPreviewSurface və ya glTF PBR kölgələndiriciləri ilə oxuyur. Şəkilləri də verin, ya da hamısının zip-ini: şəkil öz yolu, adı və ya başqa şəkil növü ilə adı ilə tapılır (fayl adında `.exr` olan yanında `.jpg` kimi gələ bilər). Teksturalar, normal xəritələr, arifmetika, qarışıqlar və yerdəyişmə düyün kimi gəlir; qalanları öz dəyərini saxlayır, status sətri isə nəyin buraxıldığını göstərir.

## Dekallar

Dekal öz materialı olan səthə qoyulmuş şəkildir — loqo, lövhə, etiket, ləkə.

- **Yeni dekalın eni**ni təyin edin, sonra {{ui:Dekal yerləşdirin…}} (və ya alətlər panelində {{ui:Dekal}}), PNG, JPEG və ya WebP şəkil seçin və üzə klikləyin. Şəkil oradakı səthlərə proyeksiya olunur, proporsiyaları saxlanılır; PNG-nin şəffaf hissələri şəffaf qalır.
- O, klikləndiyiniz qrupa və ya komponentə aiddir və onunla birlikdə hərəkət edir. Qutusunun içindəki eyni istiqamətə baxan üzləri örtür və üzərində durduğu şeyin kənarlarında dayanır.
- Hər dekalın öz materialı var, faylın siyahısında **Dekal: <şəkil>** adı ilə: digər kimi redaktə edin (pürüzlülük, qabarma, parıltı). Dekalın yanındakı {{ui:Material}} onu açır.
- Hər dekalın yanında: eni (hündürlük şəkilə görə), {{ui:Çevir}} (dörddə bir dönmə) və {{ui:Sil}}. Dekallar faylın materialları ilə saxlanılır, geri qaytarma addımından kənarda.
- Onlar kölgələnmiş görünüşdə, sürətli render-lərdə və yüksək keyfiyyətli şəkillərdə görünür.

## Teksturanın üzərində boyayın

{{ui:Teksturu boya}} (və ya **Teksturanın üzərində boyayın** altında {{ui:Boya}}) göstəricini dəyirmi fırçaya çevirir. Faylın materiallarından birini daşıyan üzü sürükləyin: fırça şəklini əsas rəngin arxasında boyayır.

- Mesh üzərində mesh-in UV-ləri boyunca boyayır (əvvəlcə UV iş sahəsində açın); digər üzlərdə isə üz boyunca boyayır, beləliklə boya materialın kafeli ilə təkrarlanır.
- Əsas rəngi sadə rəng olan material ilk boyanmada həmin rəngdə yeni 512 × 512 şəkil alır. Əsas rəngi başqa düyünlərdən gələn material, Əsas rənglə bağlanmış Şəkil düyünü tələb edir.
- Fırçanın rəngini, ölçüsünü (şəkil pikselində), gücünü və sərtliyini paneldə təyin edin. {{ui:Vuruşu geri qaytar}} və ya Ctrl+Z (boyayarkən) son 20-yə qədər vuruşu geri qaytarır.
- Boyanmış şəkil faylda saxlanılır. Kitabxana materialları boyana bilməz: əvvəl redaktə edilə bilən surət çıxarın.

## Teksturaları bişirin

**Teksturaları bişirin** şəklin və səhnənin səthə verdiyini mesh-in UV-ləri boyunca şəkillərə yazır.

- UV-ləri olan mesh seçin (UV iş sahəsində açın), xəritələri işarələyin və {{ui:Bişir}} basın:
  - **Ambient occlusion** — hər nöqtənin nə qədər açıq olduğu: künclər, qırışlar və başqa şeylərin altındakı yerlər daha tünd olur. Modeldə göstərilən hər şey onu kölgələndirir, qaranlıq məsafəsinə qədər.
  - **Curvature** — xarici kənarlarda parlaq, daxili künclərdə tünd, düz və yumşaq əyilmiş hissələrdə orta boz, təyin etdiyiniz kənar eninə görə.
  - **Normals from the high-detail object** — detallı surətini də seçin: onun səth detalı sadə olana normal xəritə kimi yazılır (az üçbucaqlı obyektin üzərinə bişirilir). Axtarış məsafəsi iki səthin nə qədər uzaqda ola biləcəyidir.
  - **Lighting** — modelin yerinin və tarixinin günəşi (Üslub) kölgələri ilə, həmçinin səma ilə, işıq xəritəsi kimi.
- Şəkillər fayla qoşulur və Şəkil düyünlərində görünür. Redaktə etdiyiniz materialda **Kir və kənar aşınması** düyünü varsa, o, yeni qaranlıq və əyrilik şəkillərini dərhal oxuyur.
- Hər texel başına daha çox şüa daha hamar qaranlıq və işıqlandırma verir, lakin daha uzun çəkir. Bişirmə kompüterin prosessor nüvələrində fonda işləyir; {{ui:Bişirməni dayandır}} onu dayandırır.

## Qrafik qurun

1. {{ui:Düyün əlavə edin…}} (və ya düyün redaktorunda {{key:Shift+A}}) redaktorun ortasında düyün əlavə edir.
2. Bağlamaq üçün çıxış nöqtəsindən (düyünün sağında) giriş nöqtəsinə (düyünün solunda) sürükləyin. Girişə ikinci bağlantı birincini əvəz edir; bağlanmış girişi ayırmaq üçün onu uzaqlaşdırın.
3. Bağlı olmayan girişlər öz dəyərini göstərir: rəqəm yazın və ya rəng seçin. Parametrlər hər düyünün altındadır.

Düyünü başlığından sürükləyərək köçürün, redaktorda boş sahəni sürükləyərək sürüşdürün, yaxınlaşdırmaq üçün çarxdan istifadə edin. {{key:Delete}} seçilmiş düyünləri və ya bağlantını silir, {{key:Mod+Z}} geri qaytarır, {{key:Mod+D}} surətini çıxarır, {{key:F}} bütün düyünləri göstərir. Hər dəyişiklik düyün redaktorunun bir geri qaytarma addımıdır. Modelin öz geri qaytarması materialları dəyişmir.

| Düyünlər | Nə yaradır |
|---|---|
| Tekstura koordinatları | Kafeldə nöqtənin yeri: təkrarlayın, yerini dəyişin, dörddə bir dönmə. |
| Dəyər, Rəng | Rəqəm, rəng. |
| Şəkil | Faylın şəkli (idxal edilmiş modellə gələn və ya {{ui:Şəkil əlavə edin…}} ilə əlavə etdiyiniz). Fotoşəkil üçün **Rənglər**, pürüzlülük və ya normal xəritə üçün **Məlumat** seçin. |
| Kitabxana teksturası | Kitabxana materialının teksturası, pürüzlülüyü və hündürlüyü. |
| Şahmat, Səs-küy | Kvadratlar; hamar fraktal səs-küy öz detalı, pürüzlülüyü və toxumu ilə. |
| Voronoi hüceyrələri, Dalğalar, Gradient | Hüceyrələr (ən yaxın nöqtəyə məsafə, hüceyrələr arasındakı kənarlar, hər hüceyrə üçün rəng); eninə, yuxarı və ya diaqonal zolaqlar, sinus, mişar və ya üçbucaq kimi, səs-küyə görə əyilmiş; xətti, kvadratik, radial və sferik gradientlər. |
| Kərpiclər, Kafellər | Ofsetli kərpic sıraları və ya kafel şəbəkəsi: rənglər, məhlul və ya dolğu, metrlərlə boşluq və qırpma, qabarmalar üçün hündürlük, hər parça üçün təsadüfi rəqəm. |
| Ağac, Mərmər | Lif boyunca həlqələr incə liflərlə; damarlar turbulentlə əyilmiş. |
| Kir və kənar aşınması | Mesh-in əyrilik və ətraf qaranlıq şəkillərindən qabarıq kənarları aşındırır və çökəkləri çirkləndirir ([Teksturaları bişirin](topic:shading#bake-textures) onları yaradır; və ya iki şəkil parametrini təyin edin, mesh-in UV düzümündə: materialı UV koordinatları ilə yerləşdirin). Onlar olmadan heç nəyi dəyişmir. |
| Rəngləri qarışdır, Rəng şkalası, Ton/doyma/dəyər, Parlaqlıq və kontrast, Əks, Qamma, RGB ayır və birləşdir | Rəng işi. |
| Riyaziyyat, Xəritə diapazonu | Rəqəmlər üzərində arifmetika (toplama, vurma, qüvvət, hamar addım və daha çox). |
| Qabartma, Normal xəritə | Hündürlükdən normal (Qabartma) və ya normal xəritə şəklindən normal (Normal xəritə: yaşıl kanalın istiqamətini seçin). |

## Material çıxışı

Parametrləri teksturanın səthlərdə necə yerləşdiyini göstərir:

- **Kafel eni** və **Kafel hündürlüyü**: teksturanın bir kafelinin neçə metr əhatə etdiyi. Qrafikin yaratdığı hər şey kafel boyunca tikişsiz təkrarlanır.
- **Yerləşdirmə üsulu**: **UV koordinatları** üzləri izləyir (itələ/çək üzləri: hər üz boyunca; meshlər: onların UV-ləri, bir UV vahidi = bir kafel), **Qutu** ən yaxın üç oxdan proyeksiya edir, **Triplanar** əyilmiş səthlərdə üç proyeksiyanı qarışdırır (**Qarışdırma kəskinliyi**: yüksək olduqca qarışıq daha sərtdir).
- **Normal gücü** normal girişi miqyaslayır. **Yerdəyişmə miqyası** yerdəyişmə girişinin meshin təpə nöqtələrini nə qədər hərəkət etdirdiyini təyin edir.
- {{ui:Daha çox giriş}} OpenPBR girişlərinin qalanını göstərir: örtük, tük, subsəth, nazik təbəqə, ötürmə və onların rəngləri.

## Yüksək keyfiyyətli şəkillərdə

Yol izləyici qrafikdən əsas rəngi, pürüzlülüyü, metallığı, şəffaflığı, normalı və emissiyanı səth üzərində dəyişdikcə oxuyur. Bağladığınız başqa hər giriş (məsələn, dəyişən bir örtük) orta dəyərində istifadə olunur; panel bunu bildirir. Şəffaflıq teksturasından kəsmə öz formasını göstərir, onun kölgəsi bərabər şəffafdır. Parlayan tekstura üzləndiyi şeyi işıqlandırır, lampa kimi nümunə götürülmədən.

**Yerdəyişmə** yalnız meshlərin təpə nöqtələrini hərəkət etdirir, ona görə detal üçün Subdivision modifikatoru əlavə edin ([Modifikatorlar](topic:modifiers)). İtələ/çək üzləri öz formasını saxlayır və normaldan qabarmalar alır.

:::tip
WebGPU olan kompüterdə qrafik kartında hesablanır; onsuz, prosessorda. Nəticə eynidir.
:::
