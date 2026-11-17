---
title: Aç, saxla, idxal et və ixrac et
summary: ModelCraft faylı, nə gətirə və göndərə bilərsiniz, fayllar haraya gedir, və oflayn rejimdə və brauzerlər arasında nə dəyişir.
keywords: aç, saxla, idxal, ixrac, fayl, 3dm, skp, bərpa, avtosaxlama, son, masaüstü, 3D-də aç, ötürmə, yüklə, modelcraft faylı, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formatlar, oflayn, fərqli saxla
from: 3f09ab72
---

ModelCraft kompüterinizdəki fayllarla oxuyur və yazır. Heç nə yüklənmir: açdığınız fayl brauzerinizin daxilində oxunur, saxladığınız fayl isə yükləmə (download) kimi yazılır. Bax: [Fayllarınız haraya gedir](common:your-files).

## Formatlara ümumi baxış

| Format | Aç | İdxal | İxrac | Nə üçündür |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | bəli | yox | {{ui:Saxla}} | İş faylınız. Hər şeyi saxlayır. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | bəli | bəli | {{ui:Fərqli saxla}}, {{ui:İxrac}} | Renderinq və səhnə yığma proqramları. ModelCraft-ın öz USD-si hər şeyi saxlayır. Bax: [USD-ni saxla, aç və ixrac et](topic:usd). |
| SketchUp (`.skp`) | yox | bəli | yox | SketchUp-dan modelləri gətirmək. Qrupları, komponentləri, üzlərdəki rəngləri və teksturaları, teqləri və yumşaq kənarları saxlayır. Bax: [SKP modelini gətirmək](topic:import-sketchup-files). |
| Collada (`.dae`) | yox | bəli | bəli | Digər 3D modelyerlərlə modellər mübadiləsi. Qrupları, komponentləri və rəngləri saxlayır. |
| OBJ (`.obj`) | yox | bəli | bəli | Renderinq və vizuallaşdırma proqramları. |
| glTF (`.glb`, `.gltf`) | yox | bəli | yalnız `.glb` | Veb baxıcılar, oyun mühərrikləri, AR. |
| STL (`.stl`) | yox | bəli | bəli | 3D çap (millimetrlə). |
| PLY (`.ply`) | yox | bəli | bəli | Rəngli şəbəkələr: skanlar, rəngli çap. |
| FBX (`.fbx`) | yox | bəli | yox | Animasiya və oyun proqramlarından modellər (FBX 2011 və daha yenisi). |
| Alembic (`.abc`) | yox | bəli | yox | Həndəsə keşləri, ilk nümunəsində. |
| STEP (`.step`, `.stp`) | yox | bəli | yox | Detal modelyerlərindən və təchizatçılardan detallar, bağlı şəbəkələr kimi, həqiqi ölçüdə. Bax: [Fayl formatları](topic:formats). |
| `.3dm` | yox | bəli | yox | NURBS modelləri: politəsəthlər, şəbəkələr, əyrilər, bloklar və qatlar, şəbəkələr, kənarlar, komponentlər və teqlər kimi. Bax: [.3dm modelini gətirmək](topic:import-3dm-files). |
| 3MF (`.3mf`) | yox | yox | bəli | 3D çap, rənglərlə (millimetrlə). {{ui:3D çap üçün yoxlayın (STL və ya 3MF)…}} bölməsindən: bax [Modeli 3D çapa hazırlamaq](topic:print-3d). |
| IFC (`.ifc`) | yox | yox | bəli | BIM proqramları və BimCraft. |
| DWG (`.dwg`) | yox | bəli | bəli | Modelləşdirmək üçün situasiya planı və ya mərtəbə planı; modeli CAD proqramına göndərmək. |
| DXF (`.dxf`) | yox | bəli | bəli | Eyni, istənilən CAD proqramı üçün. |

[Fayl formatları ətraflı](topic:formats) siyahıda hər formatın nəyi saxladığını və nəyi buraxdığını göstərir.

## ModelCraft faylı

`.modelcraft` faylı bütün modeli saxlayır: həndəsəni, qrupları, komponentləri, bələdçiləri, səhnələri, vahidləri, və saxlayanda istifadə etdiyiniz kamera və üslubu. Geri qaytarma tarixçəsini saxlamır.

### Model açmaq

1. {{ui:Fayl}} qrupunda {{ui:Aç}} düyməsini basın və ya {{key:Mod+O}} basın.
2. Ekranda olan modelin saxlanılmamış dəyişiklikləri varsa, ModelCraft soruşur: "Bu modelin saxlanılmamış dəyişiklikləri var. Əvvəl nüsxəsini saxlayım?" {{ui:Nüsxəni saxla}}, {{ui:Dəyişiklikləri at}} və ya {{ui:Ləğv et}} seçin.
3. `.modelcraft` faylını seçin.

Model saxlandığı vahidlərlə və saxlandığı kameranla açılır. `.modelcraft` faylını 3D görünüşün üzərinə də sürükləyə bilərsiniz, ya da başlanğıc kartındakı son fayllar siyahısından birini seçə bilərsiniz (faylı yenidən aça bilən brauzerlər və masaüstü tətbiq).

:::desktop
Masaüstü tətbiqində `.modelcraft` faylına iki dəfə klikləmək onu ModelCraft-da açır, və Collada, OBJ, glTF, DWG və ya DXF faylında **Birlikdə aç** də eyni şəkildə işləyir (fayl yeni modelə idxal olunur).
:::

### Modeli saxlamaq

{{ui:Saxla}} düyməsini basın və ya {{key:Mod+S}} basın. Brauzer `<name>.modelcraft` faylını yükləyir, burada ad açdığınız faylın adıdır, yeni model üçün isə "Untitled".

:::desktop
Masaüstü tətbiqində {{ui:Saxla}} açdığınız faylı olduğu yerdə yazır. Yeni model üçün harada saxlanacağı soruşulur.
:::

- {{ui:Fərqli saxla}} ({{key:Mod+Shift+S}}) modelin nüsxəsini `.modelcraft` faylı kimi və ya [USD](topic:usd) kimi saxlayır; brauzer icazə verirsə, ad və yer soruşur. Əks halda yüklənmiş faylın adını dəyişin: adı dəyişdirilmiş faylı açdıqdan sonra növbəti saxlama yeni adı istifadə edəcək.
- Hər saxlama yeni yükləmədir. Brauzerin parametrlərindən asılı olaraq, fayl birbaşa yükləmələr qovluğuna gedir və ya harada saxlanacağı soruşulur. Həmin adda fayl artıq varsa, əksər brauzerlər `Untitled (1).modelcraft` kimi nömrə əlavə edir.

:::chromium
Hər dəfə qovluğu seçmək üçün brauzerin parametrlərini açın, "downloads" sözünü axtarın və "Hər faylı yükləməzdən əvvəl harada saxlanacağını soruşun" seçimini aktiv edin.
:::

:::firefox
Hər dəfə qovluğu seçmək üçün **Parametrlər**, sonra **Ümumi** bölməsini açın və "Yükləmələr" altında "Faylları harada saxlayacağımı həmişə soruşun" seçin.
:::

:::safari
Yükləmələrin hara getdiyini dəyişmək üçün **Safari**, sonra **Parametrlər**, sonra **Ümumi** açın və "Fayl yükləmə yeri" seçimini təyin edin.
:::

### Yeni model başlatmaq

{{ui:Yeni}} düyməsini basın. Saxlanılmamış dəyişikliklər varsa, ModelCraft əvvəl soruşur. Yeni model boş başlayır, yerli vahidinizdə (ABŞ-da fut və düym, başqa yerlərdə millimetr), səhnəsiz.

### Brauzer saxlamadan bağlanarsa

ModelCraft hər dəyişiklikdən bir neçə saniyə sonra brauzerinizdə saxlanılmamış işin nüsxəsini saxlayır. Nüsxə fonda yazılır, beləliklə böyük model saxlanarkən sizi gözləmir. Səhifə və ya brauzer saxlamadan bağlanarsa, ModelCraft-ı növbəti dəfə açanda "İşinizi bərpa edək?" soruşur. Bərpa etmək modeli olduğu kimi açır, amma hələ fayla saxlanılmayıb: onu saxlamaq üçün faylı yadda saxlayın. Bax: [İşinizi bərpa etmək](common:recover).

### CadCraft-dan: ModelCraft-da aç

CadCraft çertyoj proqramında **Görünüş**, sonra **Daha çox**, sonra **ModelCraft-da aç** açıq çertyoju yeni səkmədə DWG kimi ModelCraft-a göndərir. O, idxal edilmiş DWG kimi gəlir: yerdə xətlər, qrupda, üzərində modelləşdirməyə hazır. Heç nə yüklənmir; fayl brauzerinizin öz yaddaşından keçir.

## İdxal

İdxal açıq modelə fayl əlavə edir; onu əvəz etmir.

1. {{ui:Fayl}} qrupunda {{ui:İdxal et}} düyməsini basın və ya faylı 3D görünüşün üzərinə buraxın.
2. SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG və ya DXF faylı seçin.

   Fayl **bir qrup** kimi gəlir, seçilir və görünüş onu göstərmək üçün yaxınlaşır. Status sətri nə gəldiyini bildirir və idxal edilə bilməyənləri sadalayır, məsələn "İdxal edilmədi: 2 tekstura".

3. Həndəsəsi ilə birbaşa işləmək üçün qrupa iki dəfə klikləyib içərisində redaktə edin və ya {{ui:Parçalayın}} düyməsini basın.

Bilməli olduğunuz bəzi məqamlar:

- **Ölçü və yuxarı istiqamət:** Collada faylları öz vahidini və hansı oxun yuxarı olduğunu bildirir, ModelCraft onları çevirir. glTF həmişə metrlə olur. OBJ faylları vahid daşımır: ModelCraft onları metr kimi oxuyur, Y yuxarı. Əgər OBJ 1000 dəfə böyük və ya kiçik gəlirsə, `0.001` və ya `1000` kimi əmsalla [Miqyas](topic:rotate-scale) istifadə edin.
- **DWG və DXF** üzlər deyil, yerdə xətlər (kənarlar) kimi gəlir. Çertyoj öz vahidini bildirmirsə, "Drawing units" adlı dialoq bir çertyoj vahidinin nə olduğunu soruşur. Bax: [Situasiya planında modelləşdirmək](topic:site-plan).
- **Limitlər:** 300 MB-dan böyük fayllar idxal üçün, 200 MB-dan böyük fayllar isə açmaq üçün rədd edilir. 2 milyon və ya daha çox təpəsi və ya üzü olan fayllar çox böyük sayılıb rədd edilir. 64 MB-dan böyük OBJ oxunmazdan əvvəl rədd edilir. Mətn faylları (Collada, OBJ, ASCII STL, USD mətn) təxminən 4 MB-lıq hissələrlə oxunur, buna görə heç bir mətn bloku bütün faylı saxlamır; sınaqda 16 MB OBJ açılarkən təxminən 0,5 GB yaddaş istifadə etdi.

## İxrac

1. {{ui:Fayl}} qrupunda {{ui:İxrac}} düyməsini basın.
2. Format seçin: {{ui:glTF binar (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:Çap üçün STL (.stl, millimetrlə)}}, {{ui:Rəngli PLY (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:BimCraft üçün IFC (.ifc)}}, {{ui:CAD üçün DWG (.dwg, 2004)}} və ya {{ui:CAD üçün DXF (.dxf, R12)}}.

Brauzer faylı modelin adı ilə yükləyir. Yalnız seçim deyil, bütün model ixrac olunur. glTF, Collada və OBJ faylları fonda yazılır, beləliklə böyük model ixrac olunarkən ModelCraft işləməyə davam edir; yükləmə fayl hazır olanda başlayır. Boş model ixrac edilmir: "Model boşdur: əvvəlcə bir şey çəkin." Bax: [Modeli digər proqramlar üçün ixrac etmək](topic:export-model).

## Onlayn və oflayn

ModelCraft-dakı hər şey kompüterinizdə işləyir, buna görə tətbiq yükləndikdən sonra modelləşdirmə, açma, saxlama, idxal və ixrac bağlantı olmadan da işləyir.

Heç bir bağlantı olmadan ModelCraft-ı açmaq üçün onlayn olarkən oflayn istifadə üçün saxlayın:

1. Yuxarıdakı tətbiq panelində {{ui:Oflayn üçün saxla}} düyməsini basın.
2. Düymə saxlayarkən sayır ("Saxlanılır 40 / 212"). ModelCraft öz fayllarını (DWG oxuyucusu da daxil olmaqla), bu yardımı və 3D kitabxananı saxlayır, buna görə bir az vaxt apara bilər.
3. Düymədə {{ui:Oflayn hazırdır}} yazanda ModelCraft eyni ünvandan bağlantı olmadan açılır və DWG idxalı oflayn da işləyir.

Sonra {{ui:Oflayn hazırdır}} düyməsini klikləyin: {{ui:Nüsxəni yenidən saxla (ən yeni versiyanı al)}} və ya {{ui:Oflayn nüsxəni sil}} üçün. Düymədə {{ui:Saxlamaq alınmadı}} yazırsa, bəzi fayllar yüklənmədi: bağlantını yoxlayın və yenidən cəhd etmək üçün klikləyin. {{ui:Oflayn mövcud deyil}} o deməkdir ki, bu brauzer pəncərəsi nüsxə saxlaya bilmir (məxfi pəncərələr və bəzi idarə olunan kompüterlər). Bax: [Oflayn işləmək](common:offline).

Bulud saxlanması hələ mövcud deyil. Hər model saxladığınız yerdə qalır.

:::offline
Oflayn rejimdəsiniz. Modelləşdirməyə və saxlamağa davam edə bilərsiniz. Tətbiq panelində {{ui:Oflayn hazırdır}} görünmürsə, yenidən onlayn olana qədər bu sekmәni yenidən yükləməyin.
:::

## Masaüstü tətbiqi

:::desktop
ModelCraft-ı CadCraft Studio-da, bütün səkkiz tətbiqin olduğu masaüstü tətbiqində istifadə edirsiniz. Fayllar sizin seçdiyiniz yerdə açılır və saxlanılır.
:::

:::web
ModelCraft Mac, Windows və Linux-da brauzerdə işləyir, və bir quraşdırmada bütün səkkiz tətbiqlə birlikdə olan CadCraft Studio masaüstü tətbiqində, getcadcraft.com/download ünvanından.
:::
