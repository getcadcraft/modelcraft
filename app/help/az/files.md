---
title: Açın, saxlayın, idxal edin və ixrac edin
summary: ModelCraft faylı, içəriyə və xaricə nə gətirə və göndərə biləcəyiniz, fayllar hara gedir və oflayn işləmədə və brauzerlər arasında nə dəyişir.
keywords: aç, saxla, idxal, ixrac, fayl, 3dm, skp, bərpa, avtosaxlama, son, masaüstü, 3D-də aç, ötürmə, yükləmə, modelcraft faylı, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formatlar, oflayn, fərqli saxla
from: 0b4896d1
---

ModelCraft kompüterinizdəki fayllarla oxuyur və yazır. Heç nə yüklənmir: açdığınız fayl brauzerinizdə oxunur, saxladığınız fayl isə yükləmədir. Bax: [Fayllarınız haraya gedir](common:your-files).

## Formatlara ümumi baxış

| Format | Aç | İdxal | İxrac | Nə üçündür |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | bəli | yox | {{ui:Saxla}} | İş faylınız. Hər şeyi saxlayır. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | bəli | bəli | {{ui:Fərqli saxla}}, {{ui:İxrac}} | Render və səhnə yığma proqramları. ModelCraft-ın öz USD-si hər şeyi saxlayır. Bax: [USD-ni saxlayın, açın və ixrac edin](topic:usd). |
| SketchUp (`.skp`) | yox | bəli | yox | SketchUp-dan modelləri gətirmək. Qrupları, komponentləri, rəngləri, üzlərdəki teksturaları, etiketləri və yumşaq kənarları saxlayır. Bax: [SKP modelini gətirin](topic:import-sketchup-files). |
| Collada (`.dae`) | yox | bəli | bəli | Digər 3D modelləşdiricilərlə modellər mübadiləsi. Qrupları, komponentləri və rəngləri saxlayır. |
| OBJ (`.obj`) | yox | bəli | bəli | Render və vizuallaşdırma proqramları. |
| glTF (`.glb`, `.gltf`) | yox | bəli | yalnız `.glb` | Veb baxıcılar, oyun mühərrikləri, AR. |
| STL (`.stl`) | yox | bəli | bəli | 3D çap (millimetrlə). |
| PLY (`.ply`) | yox | bəli | bəli | Rəngli mesh-lər: skanlar, rəngli çap. |
| FBX (`.fbx`) | yox | bəli | yox | Animasiya və oyun proqramlarından modellər (FBX 2011 və daha yeni). |
| Alembic (`.abc`) | yox | bəli | yox | Həndəsə keşləri, ilk nümunəsində. |
| STEP (`.step`, `.stp`) | yox | bəli | yox | Hissə modelləşdiricilərindən və təchizatçılardan hissələr, qapalı mesh kimi, həqiqi ölçüsündə. Bax: [Fayl formatları](topic:formats). |
| `.3dm` | yox | bəli | yox | NURBS modelləri: polisəthlər, mesh-lər, əyrilər, bloklar və qatlar, mesh-lər, kənarlar, komponentlər və etiketlər kimi. Bax: [.3dm modelini gətirin](topic:import-3dm-files). |
| 3MF (`.3mf`) | yox | yox | bəli | 3D çap, rənglərlə (millimetrlə). {{ui:3D çap üçün yoxlayın (STL və ya 3MF)…}} düyməsindən: bax [Modeli 3D çap üçün hazırlayın](topic:print-3d). |
| IFC (`.ifc`) | yox | yox | bəli | BIM proqramları və BimCraft. |
| DWG (`.dwg`) | yox | bəli | bəli | Modelləşdirmək üçün situasiya və ya mərtəbə planı; modeli CAD proqramına göndərmək. |
| DXF (`.dxf`) | yox | bəli | bəli | Eyni, istənilən CAD proqramı üçün. |

[Fayl formatları ətraflı](topic:formats) hər formatın nəyi saxladığını və nəyi buraxdığını dəqiq sadalayır.

## ModelCraft faylı

`.modelcraft` faylı bütün modeli saxlayır: həndəsəni, qrupları, komponentləri, bələdçiləri, səhnələri, vahidləri və saxladığınız zaman istifadə etdiyiniz kamera və üslubu. Geri alma tarixçəsini saxlamır.

### Modeli açın

1. **Fayl** qrupunda {{ui:Aç}} düyməsinə klikləyin, və ya {{key:Mod+O}} basın.
2. Ekrandakı modelin saxlanmamış dəyişiklikləri varsa, ModelCraft soruşur: "Bu modelin saxlanmamış dəyişiklikləri var. Əvvəlcə nüsxəsini saxlayım?" Seçin: {{ui:Nüsxəni saxla}}, {{ui:Dəyişiklikləri at}} və ya {{ui:Ləğv et}}.
3. `.modelcraft` faylını seçin.

Model saxlanıldığı vahidlərlə və saxladığınız kamera ilə açılır. `.modelcraft` faylını 3D görünüşə də sürükləyə bilərsiniz, və ya başlanğıc kartındakı son fayllar siyahısından birinə klikləyə bilərsiniz (faylı yenidən aça bilən brauzerlərdə və masaüstü tətbiqdə).

:::desktop
Masaüstü tətbiqdə `.modelcraft` faylına iki dəfə klikləmək onu ModelCraft-da açır; Collada, OBJ, glTF, DWG və ya DXF faylında **Birlikdə aç** də onu açır (yeni modelə idxal olunur).
:::

### Modeli saxlayın

{{ui:Saxla}} düyməsinə klikləyin və ya {{key:Mod+S}} basın. Brauzer `<name>.modelcraft` yükləyir, burada ad açdığınız faylın adıdır, yeni model üçün isə "Untitled"-dır.

:::desktop
Masaüstü tətbiqdə {{ui:Saxla}} açdığınız faylı yerində yazır. Yeni model yerini soruşur.
:::

- {{ui:Fərqli saxla}} ({{key:Mod+Shift+S}}) modelin nüsxəsini `.modelcraft` faylı kimi və ya [USD](topic:usd) kimi saxlayır; brauzer icazə verirsə, adı və yeri soruşur. Əks halda yüklənmiş faylın adını dəyişin: adı dəyişdirilmiş faylı açdıqdan sonra növbəti saxlama yeni adı istifadə edir.
- Hər saxlama yeni yükləmədir. Brauzerin parametrlərindən asılı olaraq, fayl birbaşa yükləmələr qovluğunuza gedir və ya harada saxlanılacağı soruşulur. Həmin adda fayl artıq varsa, əksər brauzerlər `Untitled (1).modelcraft` kimi nömrə əlavə edir.

:::chromium
Hər dəfə qovluğu seçmək üçün brauzerin parametrlərini açın, "downloads" sözünü axtarın və "Hər faylı yükləməzdən əvvəl harada saxlanılacağını soruşun" seçimini aktiv edin.
:::

:::firefox
Hər dəfə qovluğu seçmək üçün **Parametrlər**, sonra **Ümumi** bölməsini açın və "Yüklənmələr" altında "Faylları harada saxlayacağımı həmişə soruş" seçin.
:::

:::safari
Yüklənmələrin hara getdiyini dəyişmək üçün **Safari**, sonra **Parametrlər**, sonra **Ümumi** bölməsini açın və "Fayl yükləmə yeri" seçimini təyin edin.
:::

### Yeni model başladın

{{ui:Yeni}} düyməsinə klikləyin. Saxlanmamış dəyişiklik varsa, ModelCraft əvvəlcə soruşur. Yeni model boş başlayır, sizin dilinizin vahidində (ABŞ-da fut və düym, qalan yerlərdə millimetr), heç bir səhnəsi olmadan.

### Brauzer saxlamadan əvvəl bağlanarsa

ModelCraft hər dəyişikliyin bir neçə saniyə sonra brauzerinizdə saxlanmamış işin nüsxəsini saxlayır. Saxlamadan əvvəl səhifə və ya brauzer bağlanarsa, ModelCraft-ı növbəti dəfə açanda "İşinizi bərpa edilsin?" soruşur. Bərpa modeli olduğu kimi açır, lakin hələ fayla saxlanılmayıb: onu saxlamaq üçün saxlayın. Bax: [İşinizi bərpa edin](common:recover).

### CadCraft-dan: ModelCraft-da aç

CadCraft çertyoj tətbiqində **Görünüş**, sonra **Daha çox**, sonra **ModelCraft-da aç** açıq çertyojunu yeni sekmədə ModelCraft-a DWG kimi ötürür. Gələn DWG idxal olunmuş DWG kimi gəlir: yerdə xətlər, bir qrupda, üzərində modelləşdirməyə hazır. Heç nə yüklənmir; fayl brauzerinizin öz yaddaşından keçir.

## İdxal

İdxal açdığınız modelə fayl əlavə edir; onu əvəz etmir.

1. {{ui:Fayl}} qrupunda {{ui:İdxal}} düyməsinə klikləyin, və ya faylı 3D görünüşə buraxın.
2. SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG və ya DXF faylı seçin.

   Fayl **bir qrup** kimi gəlir, seçilmiş halda, və görünüş onu göstərmək üçün yaxınlaşır. Status paneli nə gəldiyini deyir və gətirilə bilməyən şeyləri sadalayır, məsələn "İdxal edilmədi: 2 tekstura".

3. Onun həndəsəsi üzərində birbaşa işləmək üçün qrupa ikiqat klikləyib içində redaktə edin, və ya {{ui:Parçalayın}} klikləyin.

Bilmək lazım olan bəzi məqamlar:

- **Ölçü və yuxarı istiqamət:** Collada faylları öz vahidini və hansı oxun yuxarı olduğunu deyir, ModelCraft onları çevirir. glTF həmişə metrlədir. OBJ faylları vahid saxlamır: ModelCraft onları metr kimi oxuyur, Y yuxarı. OBJ 1000 dəfə böyük və ya kiçik gəlirsə, `0.001` və ya `1000` kimi amillə [Miqyas](topic:rotate-scale) istifadə edin.
- **DWG və DXF** üzlər deyil, yerdə xətlər (kənarlar) kimi gəlir. Çertyoj öz vahidini demirsə, "Çertyoj vahidləri" adlı dialoq bir çertyoj vahidinin nə olduğunu soruşur. Bax: [Situasiya planında modelləşdirin](topic:site-plan).
- **Limitlər:** 300 MB-dan böyük fayllar idxal üçün, 200 MB-dan böyük fayllar açmaq üçün rədd edilir. 2 milyondan çox təpə (vertex) və ya üzü olan fayllar çox böyük sayılıb rədd edilir.

## İxrac

1. {{ui:Fayl}} qrupunda {{ui:İxrac}} düyməsinə klikləyin.
2. Format seçin: {{ui:glTF binar (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:Çap üçün STL (.stl, millimetrlə)}}, {{ui:Rəngli PLY (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:BimCraft üçün IFC (.ifc)}}, {{ui:CAD üçün DWG (.dwg, 2004)}} və ya {{ui:CAD üçün DXF (.dxf, R12)}}.

Brauzer faylı yükləyir, modelin adı ilə adlandırılmış. Bütün model ixrac olunur, yalnız seçim deyil. Boş model ixrac olunmur: "Model boşdur: əvvəlcə bir şey çəkin." Bax: [Modeli digər proqramlar üçün ixrac edin](topic:export-model).

## Onlayn və oflayn

ModelCraft tamamilə kompüterinizdə işləyir, ona görə tətbiq yükləndikdən sonra modelləşdirmə, açma, saxlama, idxal və ixrac bağlantı olmadan da işləyir.

Heç bir bağlantı olmadan ModelCraft-ı açmaq üçün, onlayn ikən oflayn istifadə üçün saxlayın:

1. Yuxarıdakı tətbiq panelində {{ui:Oflayn üçün saxla}} düyməsinə klikləyin.
2. Düymə saxlayarkən sayır ("40 / 212 saxlanılır"). ModelCraft öz fayllarını (o cümlədən DWG oxuyucusunu), bu köməyi və 3D kitabxananı saxlayır, ona görə bir az vaxt apara bilər.
3. Düymə {{ui:Oflayn hazırdır}} yazanda, ModelCraft eyni ünvandan bağlantısız açılır, və DWG idxalı da oflayn işləyir.

Sonra {{ui:Oflayn hazırdır}} düyməsinə klikləyərək {{ui:Yenidən saxla (ən yeni versiyanı al)}} və ya {{ui:Oflayn nüsxəni sil}} seçə bilərsiniz. Düymə {{ui:Saxlamaq alınmadı}} yazarsa, bəzi fayllar yüklənməyib: bağlantını yoxlayın və yenidən cəhd etmək üçün klikləyin. {{ui:Oflayn mövcud deyil}} o deməkdir ki, bu brauzer pəncərəsi nüsxə saxlaya bilmir (məxfi pəncərələr və bəzi idarə olunan kompüterlər). Bax: [Oflayn işləmək](common:offline).

Bulud saxlama hələ mövcud deyil. Hər model saxladığınız yerdə qalır.

:::offline
Siz oflaynsınız. Modelləşdirməyə və saxlamağa davam edə bilərsiniz. Tətbiq panelində {{ui:Oflayn hazırdır}} görünmürsə, yenidən onlayn olana qədər bu sekməni yenidən yükləməyin.
:::

## Masaüstü tətbiq

:::desktop
Siz ModelCraft-ı bütün səkkiz tətbiqlə birlikdə olan masaüstü tətbiq CadCraft Studio-da istifadə edirsiniz. Fayllar seçdiyiniz yerdə açılır və saxlanılır.
:::

:::web
ModelCraft Mac, Windows və Linux-da brauzerdə işləyir, və bütün səkkiz tətbiqlə bir quraşdırmada CadCraft Studio-da, getcadcraft.com/download ünvanından.
:::
