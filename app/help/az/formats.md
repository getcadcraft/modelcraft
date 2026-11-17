---
title: Fayl formatları ətraflı
summary: ModelCraft-ın açdığı, idxal etdiyi və ixrac etdiyi hər formatın nəyi saxladığını, çevirdiyini və nəyi buraxdığını dəqiq göstərir.
keywords: formatlar, fayl növləri, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, keş, fbx, 3mf, ifc, dwg, dxf, vahidlər, oxlar, y yuxarı, z yuxarı, millimetrlər, limitlər
from: c47d2d28
---

ModelCraft modeli metrlərdə və Z (mavi) yuxarıda saxlayır. Aşağıdakı hər format ona çevrilir və ya ondan çevrilir.

## ModelCraft (.modelcraft)

| Nə | Təfərrüatlar |
|---|---|
| Aç | {{ui:Aç}} ({{key:Mod+O}}) və ya görünüşün üzərinə atın. `.json` ilə bitən fayllar da qəbul olunur |
| Saxla | {{ui:Saxla}} ({{key:Mod+S}}), yükləmə kimi |
| Saxlayır | Hər şey: həndəsə, üzlər və onların rəngləri, materiallar və idxal olunmuş teksturalar, lampalar, yumşaq kənarlar, qruplar, komponentlər, adlar, bələdçilər, səhnələr, vahidlər və sonuncu kamera və üslub |
| Buraxır | Geri qaytarma tarixçəsi |
| Limit | 200 MB |

Sizinkindən yeni ModelCraft ilə saxlanmış fayl qəbul olunmur: "Bu model daha yeni ModelCraft ilə saxlanılıb (fayl versiyası …). Açmaq üçün ModelCraft-ı yeniləyin." ModelCraft modeli olmayan fayl belə deyir: "Bu fayl ModelCraft modeli deyil (JSON deyil)." və ya "Bu, aça bilmədiyimiz ModelCraft faylı deyil: …".

## USD (.usd, .usda, .usdc, .usdz)

Açın, idxal edin, və {{ui:Fərqli saxla}} ya da {{ui:İxrac}} › {{ui:USD (.usda, .usdc, .usdz)…}}. ModelCraft-ın saxladığı USD faylı heç nə itirmədən yenidən açılır; digər proqramların USD faylları meshlər, qruplar, komponentlər, lampalar və kameralar kimi açılır. Bax: [USD-ni saxlayın, açın və ixrac edin](topic:usd).

## Collada (.dae)

İdxal və ixrac. Digər 3D modelləşdiricilərlə modelləri mübadilə etmək üçün ən yaxşı format.

- **İxrac:** Collada 1.4.1, Z yuxarı, metrlə. Hər qrup və ya komponent təyinatı üçün bir həndəsə; komponentlər bir dəfə yazılır və istinadla yerləşdirilir, beləliklə paylaşılan qalır. Deşikli və ya içəri əyilmiş konturlu üzlər üçbucaqlara bölünür. Rənglər materiallara çevrilir. Üzün hissəsi olmayan kənarlar xətt kimi yazılır. Formatda düz gəlməyən adlar tənzimlənir və dəqiq ad onunla yanaşı saxlanılır.
- **İdxal:** üçbucaqlar, çoxbucaqlılar (deşiklərlə), üçbucaq yelpikləri və zolaqlar üzə çevrilir; xətlər kənarlara çevrilir. Node transformasiyaları, faylın yuxarı oxu və vahidi tətbiq olunur. Bir node bir neçə yerdə yerləşdirilibsə, ya da bir həndəsə bir neçə node tərəfindən istifadə olunursa, komponent kimi gəlir; digər node-lar qrup kimi gəlir. Material rəngləri (diffuse) üz rəngi olur.
- **İdxal olunmur:** teksturalar, skinlər və morflar, kameralar, işıqlar, bəzi transformasiya növləri (look-at və skew) və digər fayllara istinadlar. Status sətri onları sayır.
- **İxracda itir:** hansı kənarların yumşaq olduğu. **İdxalda,** üçbucaqlanmış səthlər üçbucaq olaraq qalır, diaqonallar yumşaldılır ki, düz sahələr bir səth kimi oxunsun.

## OBJ (.obj, .mtl)

İdxal və ixrac.

- **İdxal:** `.obj`-u onun `.mtl`-i və teksturalı şəkillərilə birlikdə atın (ya da yalnız `.obj`-u idxal edin: materialsız gəlir və status sətri istədiyi `.mtl`-i göstərir). Metrlə, Y yuxarı oxunur. Hər obyekt (`o`, yoxsa `g`) bir [mesh](topic:meshes) olur, üzləri olduğu kimi saxlanılır (dördbucaqlılar dördbucaqlı qalır). Tekstur koordinatları, normallar və təpə başına rənglər saxlanılır. Materialın rəng şəkli (`map_Kd`, PNG, JPEG və ya WebP) öz miqyas və ofset seçimləri ilə tekstur kimi gəlir; əks halda onun rəngi (`Kd`). Faylın normalları qırıldığı kənarlar sərt olur; normal yoxdursa, faylın hamarlaşdırma qrupları qərar verir. Digər xəritələr (bump, normal), nöqtələr, xətlər və əyrilər sayılır və buraxılır. OBJ-nin vahidi yoxdur, buna görə millimetrlə və ya düymlə hazırlanmış model səhv ölçüdə gəlir: idxaldan sonra miqyaslayın (bax: [Fırladın və miqyaslandırın](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **İxrac:** metrlə, Y yuxarı, dünya koordinatları. Hər qrup yerləşdirməsi üçün bir obyekt; komponentlər hər yerləşdirmədə tam yazılır. Meshlər öz üzlərini, tekstur koordinatlarını və normallarını saxlayır; [yumşaq kənarlarla](topic:soften) birləşmiş üzlər hər künc üçün normal alır. Modelin rəngləri olduqda, `.obj`-un yanında `.mtl` yüklənir. İdxal olunmuş teksturalar olduqda `.obj`, `.mtl` və şəkillər birlikdə bir `.zip` kimi yüklənir.
- **Limit:** 2 milyon təpə və ya üz; 64 MB mətn.

## glTF (.glb, .gltf)

İdxal və ixrac, glTF 2.0.

- **İdxal:** `.glb`, ya da `.gltf` onun `.bin` və tekstur faylları ilə birlikdə: hamısını birdən görünüşün üzərinə atın (ya da `.glb`-u seçin). Tək başına verilən `.gltf` lazım olan faylı göstərir: "Bu .gltf faylı "…" faylını tələb edir: .glb versiyasını açın və ya .gltf-i onun fayllarıyla birlikdə atın."
  - **Meshlər** faylda olduğu kimi, hər mesh üçün bir [mesh](topic:meshes) kimi gəlir; faylın normalları, tekstur koordinatları və təpə rəngləri onlarda saxlanılır. Faylın normalları qırıldığı kənarlar sərt, qalanları yumşaq olur. Bir neçə yerdə istifadə olunan mesh paylaşılan qalır.
  - **Node-lar** faylda olduğu kimi adlanmış qruplara çevrilir. İnstansiyalı meshlər (EXT_mesh_gpu_instancing) bir dəfə yerləşdirilmiş, çox dəfə yerləşdirilən bir mesh kimi gəlir.
  - **Materiallar:** baza rəng teksturası (PNG, JPEG və ya WebP) fayldakı tekstur koordinatları ilə (tekstur transformasiyası ilə birlikdə) yerləşdirilmiş tekstur kimi gəlir və faylı saxlayanda qalır; əks halda baza rəng. Metal, pürüzlülük (roughness), normal xəritələri, şüşə, şəffaf örtük (clear coat), parıltı (sheen) və digər material genişləndirmələri oxunur, lakin hələ saxlanılmır: status sətri bunu deyir.
  - **İşıqlar** (KHR_lights_punctual): nöqtə və spot işıqlar [lampalara](topic:lights) çevrilir. Düz işıqlar sayılır: günəş modeli işıqlandırır.
  - **Kameralar** [səhnələrə](topic:scenes) çevrilir.
  - **Skin-lənmiş personajlar** faylın qoyduğu kimi dayanır; onların sümükləri, animasiyaları və morf hədəfləri sayılır və hələ saxlanılmır.
  - **Sıxılmış fayllar** (Draco, meshopt) və kvantlaşdırılmış məlumat oxunur. Dekoderlər yalnız ehtiyac duyan fayl üçün yüklənir.
  - Nöqtələr və xətlər sayılır və buraxılır (mesh üzlərdən ibarətdir). KTX2 teksturalar buraxılır; üzlər öz rənglərini saxlayır.
- **İxrac** (`.glb`): glTF 2.0 binar, metrlə, Y yuxarı. Hər təyinat üçün bir mesh, beləliklə komponentlər paylaşılan qalır. Meshlər normallarını, tekstur koordinatlarını və təpə rənglərini saxlayır; [yumşaq kənarlarla](topic:soften) birləşmiş üzlər hamar normallar daşıyır. Rənglər və materiallar materiala çevrilir (material kimi rəng); idxal olunmuş teksturalar tekstur kimi yazılır. Yanıq olan lampalar nöqtə və spot işıqlara çevrilir (sahə lampalarının glTF ekvivalenti yoxdur və buraxılır); səhnələr kameralara çevrilir. Üzün hissəsi olmayan kənarlar buraxılır.
- **Limit:** 300 MB-a qədər fayllar; həndəsədə təxminən 130 milyon rəqəm.

## STL (.stl)

İdxal və ixrac.

- **İdxal:** binar və ya ASCII. STL-in vahidi yoxdur: **millimetr** kimi oxunur, printerlərin və ModelCraft-ın öz ixracının yazdığı kimi. Eyni nöqtədəki künclər birləşir, beləliklə bağlı hissə bağlı [mesh](topic:meshes) kimi gəlir. Fayldakı rənglər (VisCAM / SolidView və Materialise konvensiyaları) üzləri boyayır.
- **İxrac,** 3D çap üçün: binar STL, **millimetr**, Z yuxarı. Yalnız üçbucaqlar: qruplar və üzün hissəsi olmayan kənarlar buraxılır. Boyanmış üzlər VisCAM / SolidView konvensiyasında rənglərini daşıyır; onu oxumayan proqramlar nəzərə almır. Təmiz çap üçün bağlı bərk cisimləri ixrac edin.

## STEP (.step, .stp)

Yalnız idxal. STEP hissə modelləşdiricilərinin və təchizatçıların göndərdiyi formatdır: AP203, AP214 və AP242 faylları.

- **İdxal:** ModelCraft faylı səhifənin içində özü oxuyur və hər bərk cismi üçbucaqlardan ibarət bağlı [mesh](topic:meshes)-ə çevirir: düz üzlər düz qalır, əyri üzlər (silindrlər, konuslar, sferalar, torlar, B-spline səthlər) çoxlu kiçik düz üzlərə çevrilir; bir əyri üz daxilindəki kənarlar yumşaq, iki üz arasındakı kənarlar isə kəskin olur. STEP faylları öz vahidini bildirir; model öz həqiqi ölçüsündə gəlir. Yığım (assembly) hər hissəni faylın yerləşdirdiyi yerdə, hər hissə öz meshi ilə, faylın adı ilə adlanmış qrupda gəlir. Rənglər, yığım ağacının hissə adları və tolerantlar (PMI) oxunmur.
- **Mesajlar:** nə ötürülüb və ya daha kobud çəkilib, status xəttinə əlavə olunur ("Qeydlər: …"); bərk cisim olmayan, zədələnmiş və ya limitləri keçən fayl bunun səbəbini deyir və heç nə əlavə etmir.
- **Limit:** 300 MB-a qədər fayllar; 400 000 üz və 8 milyon üçbucaq.

## .3dm

Yalnız idxal. `.3dm` fayllar NURBS modelləri saxlayır: polisəthlər, səthlər, meshlər, əyrilər və bloklar.

- **İdxal:** ModelCraft faylı səhifənin içində özü oxuyur. Meshlər olduğu kimi gəlir; polisəth və ya ekstruziyanın hər üzü faylla birlikdə saxlanılan render meshdən gəlir, əks halda ModelCraft onu üçbucaqlaşdırır (müstəvilər, NURBS səthləri, fırlanma səthləri, ekstruziya edilmiş əyrilər, ekstruziyalar; kənarları ilə kəsilmiş, bağlı polisəthlər bağlı meshlər kimi). Əyrilər kənarlara çevrilir, bloklar komponentlərə (bloklar içində olan bloklar qorunur), qatlar teqlərə çevrilir (söndürülmüş olduqda gizli), obyektin rəngi (öz, qatının və ya materialının) üzləri boyayır. Fayl öz vahidini bildirir; model öz həqiqi ölçüsündə gəlir. Addım-addım: [.3dm modelini idxal edin](topic:import-3dm-files).
- **Mesajlar:** status xətti neçə üzün saxlanılmış meshlərdən, neçəsinin üçbucaqlaşdırma ilə gəldiyini deyir və nəyin buraxıldığını adlandırır: nöqtələr, nöqtə buludları, mətn, ölçülər, ştrixlamalar, işıqlar, SubD obyektləri, hələ oxunmayan səth növlərindəki üzlər, əlaqəli bloklar.
- **Limit:** 300 MB-a qədər fayllar.

## PLY (.ply)

İdxal və ixrac, rənglı meshlər üçün (skanlar, rəngli 3D çap, digər modelləşdiricilər).

- **İdxal:** ASCII və binar. Üzlər öz normalları, tekstur koordinatları və təpə rənglərini saxlayan [mesh](topic:meshes) olur; hər üz 4 096 rəngin ən yaxınına boyanır ki, indi rənglərini görəsiniz. PLY-də vahid və ya ox konvensiyası yoxdur: koordinatlar olduğu kimi gəlir (metr, Z yuxarı). Yalnız nöqtələrdən ibarət PLY nöqtə bulududur: onu BimCraft və ya CivilCraft-da açın.
- **İxrac:** binar PLY, mövqelər, normallar və rənglərlə (model malikdirsə tekstur koordinatları da daxil olmaqla), metrlə, Z yuxarı.

## FBX (.fbx)

Yalnız idxal. FBX 7 faylları (2011-dən etibarən), binar və ya ASCII, ModelCraft-ın öz oxuyucusu ilə oxunur.

- Meshlər [meshlər](topic:meshes) kimi normalları, tekstur koordinatları (hər UV dəsti) və təpə rəngləri ilə gəlir; bir neçə obyektin istifadə etdiyi mesh paylaşılan qalır. Obyektlər öz transformasiyaları ilə (pivotlar, ofsetlər və ön-fırlanmalar daxil olmaqla) qruplara çevrilir.
- Materiallar: diffuse tekstura — faylın içinə yerləşdirilmiş və ya `.fbx` ilə birlikdə atılmış şəkil — tekstur kimi gəlir (TGA şəkilləri PNG kimi saxlanılır); əks halda diffuse rəng. Digər material parametrləri yeni material modelini gözləyir.
- Faylın yuxarı oxu və vahidi tətbiq olunur: hər şey Z yuxarı, metrlə gəlir.
- Nöqtə və spot işıqlar [lampalara](topic:lights) çevrilir (FBX intensivliyi 100 ModelCraft-ın defolt lampasıdır, 800 lümen; FBX intensivlikləri vahidsizdir). Kameralar [səhnələrə](topic:scenes) çevrilir.
- Skin-lənmiş personajlar istirahət vəziyyətində gəlir; sümüklər və animasiyalar sayılır və hələ saxlanılmır. Düz və sahə işıqları və meshdən başqa həndəsə (NURBS, əyrilər) sayılır və buraxılır.
- FBX 6 və daha köhnə fayllar qəbul olunmur: onları FBX 2011 və ya daha yenisi kimi yenidən saxlayın.

## Alembic (.abc)

Yalnız idxal: animasiya və effekt proqramlarından həndəsə keşləri.

- Meshlər (poliqon və subdivision meshlər) tekstur koordinatları və normalları ilə [meshlər](topic:meshes) kimi gəlir; transformasiyalar qruplara çevrilir. Alembic Y yuxarıdır və Z yuxarıya çevrilir; metrlə.
- Çox nümunəli keş (animasiya) ilk nümunəsi ilə gəlir; status sətri neçə nümunəsi olduğunu deyir.
- Nöqtələr, əyrilər, NURBS səthlər, kameralar və işıqlar sayılır və buraxılır. Köhnə HDF5 quruluşlu fayllar qəbul olunmur: onları Ogawa Alembic faylı kimi yenidən saxlayın.

{{ui:3D çap üçün yoxlayın (STL və ya 3MF)…}} əvvəlcə formanı yoxlayır və seçimi, ya da göstərilən hər şeyi yazır. Bax: [Modeli 3D çapa hazırlayın](topic:print-3d).

## 3MF (.3mf)

Yalnız ixrac, {{ui:3D çap üçün yoxlayın (STL və ya 3MF)…}} vasitəsilə. 3MF core: **millimetrlə**, Z yuxarı, rənglərlə material kimi bir mesh. Əksər slayserlər onu oxuyur və STL-dən fərqli olaraq öz vahidini bildirir. Gizli şeylər buraxılır. Bax: [Modeli 3D çapa hazırlayın](topic:print-3d).

## DWG və DXF ixracı (.dwg, .dxf)

CAD proqramları üçün. Model öz vahidində yazılır: fut və dyuymlu modellər üçün dyuymlə, əks halda millimetr, santimetr və ya metr (status sətri adını deyir).

- **Üzlər** 3D üzlər kimi yazılır (üçbucaqlar). Üz daxilindəki xətlər və yumşaq kənarlar görünməz yazılır, beləliklə üzlər ModelCraft-dakı kimi görünür.
- **Üzün hissəsi olmayan kənarlar** xətt olur.
- **Qruplar və komponentlər** bloklara çevrilir: komponent bir dəfə yazılır və istifadə olunduğu qədər yerləşdirilir, fırlanmış və əks olunmuş surətlər də daxil olmaqla. Fırlandıqdan sonra uzadılmış (buna görə maillənmiş) qrup, onun yerində yazılır.
- **Rənglər:** DWG hər üzün rəngini dəqiq saxlayır; DXF 255 standart CAD rənginin ən yaxınını istifadə edir.
- **Versiyalar:** DWG AutoCAD 2004 (AC1018) kimi yazılır, bu 2004-dən etibarən CAD proqramları tərəfindən açılır. DXF R12 (AC1009)-dir, hər CAD proqramının oxuduğu versiya; R12-də vahid sahəsi yoxdur, buna görə CAD proqramına hansı vahidin istifadə olunacağını bildirin.
- **Yazılmır:** bələdçilər, ölçülər, səhnələr və kamera.

## IFC (.ifc)

Yalnız ixrac, BimCraft və digər BIM proqramları üçün. Layihə, sahə, bina və onun mərtəbələri olan IFC4. Hər ən üst səviyyə qrup və ya komponent öz adı ilə bir bina elementi proxy-si olur; bağlı olanlar bərk formalar (faceted breps) kimi, açıqlar isə səth modelləri kimi yazılır; üzlərdəki deşiklər saxlanılır. Ən üst səviyyədə qruplaşdırılmamış həndəsə "Loose geometry" adlı bir element olur. Tiplər, xassələr və materiallar yoxdur.

**Mərtəbələr:** {{ui:İxrac}} › {{ui:IFC mərtəbələri…}} onları sadalayır, hər biri adı və yüksəkliyi ilə ({{ui:Mərtəbə əlavə et}}, ya da {{ui:Modelə görə təxmin et}}, ki, ən üst səviyyə qruplarınızın dayandığı hər yüksəklik üçün bir mərtəbə yaradır). İxracda hər qrup və ya komponent ən aşağı nöqtəsində və ya altındakı mərtəbəyə gedir və öz yerini saxlayır. Mərtəbə yoxdursa, hər şey 0 səviyyəsində "Level 1" adlı bir mərtəbəyə gedir. Mərtəbələr ModelCraft faylında saxlanılır.

## DWG (.dwg) və DXF (.dxf)

Sahə planında xətt kimi idxal olunur (ştrixlamalar və 3D üzlər üzlər kimi); ixrac yuxarıda təsvir olunduğu kimi. Bax: [Sahə planında modelləşdirmə](topic:site-plan).

- **Oxunur:** xətlər, polilinlər (qövslərlə), 3D polilinlər, çevrələr, qövslər və massivlər daxil olmaqla blok istinadları, model fəzasından. Görünməz obyektlər (dinamik blokun gizli halları kimi) buraxılır. Əyrilər tam dövrədə 48 düz parçaya çevrilir.
- **0.4 versiyasından etibarən oxunur:** splaynlər və elliplər (kənar kimi), mətn, çoxsətirli mətn və atribut dəyərləri (tək vuruşlu yazıda kənarlar kimi), ştrixlamalar (deşikli üzlər), 3D üzlər və bərk doldurmalar (üzlər) və ölçülər (çertyojun öz ölçü bloklarından çəkilir).
- **0.7 versiyasından etibarən oxunur:** 3D bərk cisimlər, regionlar və gövdələr (ACIS məlumatları, hər versiyanın DWG və DXF-i), hər biri öz qrupu olaraq, bağlı olanlar bərk kimi. Müstəvilər, silindrlər, konuslar, sferalar, torlar və sadə spline səthlərindən başqa səthlərdəki üzlər buraxılır və siyahıya salınır.
- **Oxunmur:** nöqtələr, cədvəllər, multileaderlər, şəkillər və kağız fəzasındakı hər şey.
- **Vahidlər:** çertyoj bildirirsə, ondan götürülür. Əks halda ModelCraft soruşur.
- **DXF** ASCII olmalıdır. Binar DXF qəbul olunmur.
- **DWG** faylları AutoCAD R13-dən cari formata qədər (AutoCAD 2018 və daha yenisi; AC1012-dən AC1032-yə) ModelCraft-ın öz DWG oxuyucusu ilə, səhifənin içində oxunur; bu ModelCraft-ın bir hissəsidir, buna görə ModelCraft oflayn işləyəndə o da işləyir. Köhnə versiyalar (R12 və əvvəli) və ciddi zədələnmiş fayllar oxuna bilmir; onları DXF kimi saxlayın.
- **Limitlər:** başlanğıc nöqtəsindən 10 000 km-dən çox uzaq koordinatlar və ya 2 milyon xətt parçasından çox olan fayllar qəbul olunmur.

## SKP fayllar

{{ui:İdxal et}} (ya da faylı görünüşün üzərinə atın) SketchUp fayllarını ModelCraft-ın öz oxuyucusu ilə, səhifənin içində oxuyur: heç nə yüklənmir və ModelCraft oflayn işləyəndə o da işləyir. Model faylın adı ilə adlanmış bir qrup kimi gəlir. Bir {{key:Mod+Z}} onu yenidən götürür. Addım-addım: [SKP modelini idxal edin](topic:import-sketchup-files).

SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 və 2026 versiyalarından olan fayllarla sınaqdan keçirilib; digər versiyalar da açılmalıdır, lakin hələ sınanılmayıb.

- **Saxlanılır:** üzlər öz deşikləri ilə, qruplar (qrup kimi) və komponentlər (komponent kimi, paylaşılan), onların adları və yerləşdirmələri, rənglər, qruplar və komponentlər üzərindəki teqlər, üzün hissəsi olmayan kənarlar, yumşaq və hamar kənarlar, beləliklə əyri səthlər hamar qalır.
- **Rənglər:** üzün öz materialı onun rəngini verir. Qrup və ya komponent üzərinə çəkilmiş material həmin yerləşdirmənin rənginə çevrilir, beləliklə daxilində öz rəngi olmayan üzlər onu alır, SketchUp-da olduğu kimi; iki rənglə boyanmış komponent bir komponent olaraq qalır.
- **Teqlər:** qruplar və komponentlər üzərindəki teqlər ModelCraft teqlərinə çevrilir, əvvəlki kimi göstərilir və ya gizlədilir. Bərk olmayan üzlər və kənarlar üzərindəki teqlər saxlanılmır (ModelCraft teqləri yalnız qruplara və komponentlərə verir); status sətri onları sayır.
- **Gizli şeylər gizli gəlir** (üzlər, kənarlar, qruplar, komponentlər və gizli teqdəki üzlər və kənarlar), beləliklə SketchUp-ın göstərdiyini görürsünüz; {{ui:Hamısını göstər}} onları göstərir.
- **Teksturalar:** teksturalı material ilə boyanmış üz teksturasını saxlayır, faylda olduğu kimi yerləşdirilir, ModelCraft faylı şəkli saxlayır. Bütöv qrup və ya komponentin teksturası, faylda olmayan tekstura və ya brauzerlərin göstərə bilmədiyi şəkil (məsələn Photoshop faylı) yalnız materialın rəngini saxlayır.
- **Buraxılır və status sətrində sayılır:** modelə yerləşdirilmiş şəkillər. Mətn, ölçülər, bələdçilər, kəsik müstəviləri, səhnələr və üslublar oxunmur.
- **Vahidlər:** SketchUp faylları daxildə düymlədir; ModelCraft onları çevirir, beləliklə ölçülər istənilən vahiddə düzgün çıxır.
- **`.skp` saxlamaq** hazırlanmayıb. Modeli SketchUp-a qaytarmaq üçün Collada (`.dae`) ixrac edin.

## Dəstəklənmir

ModelCraft 3DS və ya IFC fayllarını aça bilmir, 3DS, FBX, STEP, `.3dm` və ya SketchUp (`.skp`) fayllarını isə saxlaya bilmir.
