---
title: Problemlərin həlli
summary: Boş 3D görünüşdən səhv ölçülü idxallara qədər simptomlar, səbəblər və həllər, ModelCraft-ın göstərdiyi mesajlarla.
keywords: problem, çətinlik, xəta, işləmir, boş, webgl, qrafika, yavaş, mesaj, idxal uğursuz, səhv ölçü, seçmək olmur, toxunma, klavişlər işləmir, itirilmiş iş
from: 6e7394be
---

## 3D görünüş boşdur

**Simptom:** ekranın ortası boş qalır və ya yalnız fon rəngini göstərir, alətlərə klikləmək heç nə etmir.

**Səbəb:** ModelCraft WebGL 2 ilə çəkir, bu brauzerin 3D qrafikasıdır. O, brauzer köhnə olduqda, aparat sürətləndirməsi söndürüldükdə və ya qrafika sürücüsü bloklandıqda olmur.

**Həll:**

:::chromium
1. Brauzerin parametrlərini açın və "qrafika sürətləndirilməsi" axtarın.
2. "Mümkün olduqda qrafika sürətləndirilməsindən istifadə et" seçimini yandırın və brauzeri yenidən başladın.
3. Artıq yanılıbsa, ünvan sətrinə `chrome://gpu` yazın (Edge-də `edge://gpu`) və siyahıda "WebGL2" axtarın. Söndürülmüş deyirsə, qrafika sürücüsünü yeniləyin.
:::

:::firefox
1. **Parametrlər**, sonra **Ümumi** açın və "Performans"a qədər sürüşdürün.
2. "Tövsiyə olunan performans parametrlərindən istifadə et" işarəsini çıxarın, sonra "Mümkün olduqda aparat sürətləndirməsindən istifadə et" işarəsini qoyun. Firefox-u yenidən başladın.
3. Hələ də uğursuzdursa, ünvan sətrinə `about:support` yazın və "Graphics" bölməsində WebGL 2-yə baxın.
:::

:::safari
macOS-u və Safari-ni yeniləyin. Safari-nin son versiyalarında WebGL 2 həmişə açıqdır. Əgər **Safari**, sonra **Parametrlər**, sonra **Advanced** (və ya **Feature Flags**) altında təcrübi xüsusiyyətləri dəyişibsinizsə, onları sıfırlayın.
:::

İş kompüterində, uzaq masaüstündə və ya virtual maşında 3D qrafika siyasətlə bloklana bilər. Başqa kompüterdə sınayın. Bax: [Brauzerlər və kompüterlər](common:browsers).

## Klavişlər heç nə etmir və ya qutuya yazılır

**Səbəb:** klaviatura fokusu panel sahəsindədir: {{ui:Üslub}} panelindəki {{ui:Üzlər}} siyahısı, günəş parametri, {{ui:Obyekt məlumatı}} bölməsindəki {{ui:Ad}} sahəsi və ya vahid seçicisi. Hərflər və ox klavişləri həmin sahəyə gedir.

**Həll:** 3D görünüşə klikləyin, sonra klavişi yenidən basın. Dialoq açıq olanda klavişlər də heç nə etmir.

## Rəqəm yazmaq heç nə etmir

- **Hələ istiqamət yoxdur.** Yazılmış uzunluq ilk klikdən göstərici hansı istiqamətə baxırsa o istiqamətə gedir. Göstəricini istədiyiniz istiqamətə bir az tərpədin, sonra yazın.
- **Səhv an.** Əksər alətlər dəyəri yalnız ilk klikdən sonra qəbul edir: əvvəl birinci küncü, üzü və ya köçürüləcək nöqtəni klikləyin. {{ui:Çevrə}} və {{ui:Çoxbucaqlı}} ilk klikdən əvvəl tərəflərin sayını qəbul edir.
- **"3m, 10'6" və ya 4m,3m kimi uzunluq yazın."** ModelCraft onu oxuya bilmədi. Onluq vergülü (`2,5`) yoxlayın: nöqtədən istifadə edin.

## Toxunma ekranında forma səhv yerdən başlayır

**Simptom:** barmaqla birinci düzbucaqlı yaxşıdır, lakin növbəti düzbucaqlı, çevrə və ya xətt toxunduğunuz yerdə yox, əvvəlki toxunuşunuzun bitdiyi yerdən başlayır.

**Səbəb:** bu quruluşda səhv: toxunma ekranında alət əvvəlki jestdən son tutma nöqtəsini yadda saxlayır.

**Həll:** hər yeni forma əvvəl alətin düyməsinə alətlər panelində yenidən toxunun. Bu, aləti təzədən başladır və ilk nöqtə toxunduğunuz yerə düşür.

## Bir qrupu redaktə etdim, digəri dəyişdi

**Simptom:** {{ui:Köçür}} və {{key:Ctrl}} ilə qrupu kopyaladınız, birini açıb redaktə etdiniz və digəri də dəyişdi. {{ui:Kontur}} hər ikisini eyni adla göstərir.

**Səbəb:** bu quruluşda qrupun kopyalanması komponent kimi eyni qrupun ikinci yerləşdirilməsini yaradır. ModelCraft-ın {{ui:Unikal et}} düyməsi yalnız komponentlər üçün təklif olunur.

**Həll:** dəyişmək istədiyiniz kopyanı seçin, {{ui:Obyekt məlumatı}} bölməsində {{ui:Komponent yarat}} klikləyin, sonra {{ui:Unikal et}}. Həmin kopyanın öz məzmunu olur. Və ya onu {{ui:Parçalayın}}.

## İtələ/çək gözlədiyim kimi işləmir

- **"İtələ/çək üz üzərində işləyir. Bir üzü klikləyin."** Kənarı və ya boş yeri klikləmisiniz. Üz işıqlanana qədər göstəricini üzərində saxlayın, sonra klikləyin.
- **Üz qrupun içindədir.** Əvvəl qrupu açmaq üçün ikiklikləyin.
- **Pəncərə divarı kəsmədi.** Düzbucaqlı divarın üzündə çəkilməlidir, qarşısında yox, və divarın arxa üzü olmalıdır. Bax: [Divardan açılış kəsin](topic:openings#if-it-did-not-cut-through).
- **İki qutu birləşmədən üst-üstə düşür.** Bu quruluşda bir-birinə itələnmiş bərk cisimlər bir-birini kəsmir və ya birləşdirmir.

## Xətt və ya forma üz yaratmadı

Üz yalnız kənarlar düz, bağlı bir dövrə əmələ gətirəndə doldurulur. Son nöqtənin ilk nöqtəyə ("Son nöqtə") tutulduğunu və bütün kənarların bir müstəvidə olduğunu yoxlayın. Bir az müstəvidən kənar olan dövrə xətt kimi qalır. Onun kənarlarından birini künclərə tutaraq yenidən çəkin.

## Üzü seçə və ya silə bilmirəm

- {{ui:Seç}} ilə kənara yaxın klik kənarı götürür. Üzün ortasına yaxın klikləyin.
- {{ui:Silgi}} üzləri götürmür. Üzü seçin və {{key:Delete}} basın, və ya onun kənarlarından birini silin.
- Üz qrupa və ya komponentə aiddirsə, klik bütün şeyi seçir. Açmaq üçün ikiklikləyin.

## "Əvvəl köçürmək üçün bir şey seçin və ya onun üzərinə klikləyin."

{{ui:Köçür}}, {{ui:Fırlat}} və {{ui:Miqyas}} işləmək üçün bir şeyə ehtiyac duyur: onu əvvəl seçin, ya da alətə əşyanın özünə klikləyərək başlayın (boş yerə və ya bələdçiyə yox).

## "Əvvəl bir həndəsə seçin (pəncərə sürükləyin və ya hamısını seçmək üçün üçklikləyin)."

{{key:G}} və {{key:Shift+G}} seçim tələb edir. Bələdçilər qruplaşdırıla bilməz.

## Ox klavişləri kilidləmək əvəzinə orbit edir

Kilidlər yalnız çəkmə və ya redaktə aləti ilk klikdən sonra işləyir. {{ui:İtələ/çək}}in kilidi yoxdur, {{ui:Fırlat}} zamanı isə kilidlər dönməni dəyişmir. Digər vaxtlarda ox klavişləri görünüşü orbit edir.

## Tam ekranda Esc

Tam ekranda brauzer ilk {{key:Esc}} ilə tam ekrandan çıxa bilər. Aləti ləğv etmək üçün {{key:Esc}} yenidən basın.

## Orta düymə yoxdur

Orbit üçün {{key:O}} basın və sürükləyin, və ya ox klavişlərindən istifadə edin. Bax: [Orbit, sürüşdür və yaxınlaşdır](topic:orbit-pan-zoom#without-a-middle-button).

## İdxallar

| Mesaj | Nə etmək lazımdır |
|---|---|
| "ModelCraft SketchUp (.skp), Collada (.dae), OBJ, glTF (.glb/.gltf), FBX, PLY, STL, Alembic (.abc), DWG və DXF idxal edir. … bunlardan heç biri deyil." | Modeli digər proqramdan bu formatlardan birində ixrac edin |
| "Bu fayl 300 MB-dan böyükdür." | Digər proqramda modeli sadələşdirin və ya bölün |
| "…burada modelləşdirmək üçün çox böyükdür (2 milyon təpədən çox)." | Eyni |
| "Bu .gltf faylına "…" lazımdır…" | `.gltf`-i `.bin` və tekstura fayllarınızla birlikdə buraxın, ya da `.glb` versiyasını açın |
| "Bu glTF faylına … genişlənməsi lazımdır, ModelCraft onu hələ oxumur." | Digər proqramdan həmin genişlənmə olmadan yenidən ixrac edin (məsələn, KTX2 teksturaları) |
| OBJ rənglər və ya teksturalar olmadan idxal olunur | `.obj`-u `.mtl` və şəkilləri ilə birlikdə buraxın |
| "Bu Alembic faylı köhnə HDF5 quruluşundan istifadə edir…" | Digər proqramdan Ogawa Alembic faylı kimi yenidən saxlayın |
| FBX teksturasız idxal olunur | `.fbx`-i tekstura şəkilləri ilə birlikdə buraxın, ya da ixrac zamanı medianı daxil edin |
| "Bu FBX faylının versiyası …-dir, ModelCraft onu oxumur" | FBX 2011 və ya daha yenisi kimi yenidən ixrac edin |
| STL və ya PLY 1000 dəfə böyük və ya kiçik idxal olunur | STL millimetr, PLY metr kimi oxunur: ölçüsünü dəyişin (bax: [Fırlatma və miqyas](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)) |
| "Bu Collada (.dae) faylı deyil…" və ya "…düzgün formalaşmamış XML…" | Fayl zədələnib və ya Collada deyil. Yenidən ixrac edin |
| "Bu Collada faylında ModelCraft-ın idxal edə biləcəyi həndəsə yoxdur." | Yalnız kameralar, işıqlar və ya digər fayllara istinadlar var |
| "Bu ikili DXF-dir. ASCII DXF kimi saxlayın və yenidən cəhd edin." | CAD proqramından ASCII kimi yenidən saxlayın |
| "Bu DWG çertyoju deyil…" | Fayl DWG deyil və ya zədələnib |
| "Bu çertyoj oxuna bilmədi (…). Zədələnmiş ola bilər və ya oxucunun dəstəkləmədiyi DWG versiyasında saxlanılmış ola bilər…" | Mötərizədəki səbəbi göstərir. CAD proqramından DXF kimi və ya AutoCAD 2000-dən 2018-ə qədər DWG kimi saxlayın |
| "Bu çertyoj başlanğıcından 10,000 km-dən çox uzağa çatır…" | CAD proqramında çertyojunu 0,0-a yaxın köçürün |

### İdxal səhv ölçüdədir və ya yan üstə yatır

- **OBJ:** OBJ-un vahidi yoxdur; ModelCraft metr oxuyur. Millimetr modeli 1000 dəfə böyük idxal olunur: `0.001` ilə [miqyaslayın](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size); düym modeli `0.0254` ilə.
- **OBJ yan üstə:** ModelCraft Y yuxarı olan OBJ faylları gözləyir. Z yuxarı yazılmış fayl uzanmış halda gəlir. Onu qırmızı ox boyunca 90° döndərin: qırmızı boyuna baxan üzdə {{ui:Fırlat}} mərkəzinə klikləyin, ya da faylı öz proqramında açıb Y yuxarı ilə ixrac edin.
- **DWG və ya DXF:** "Çertyoj vahidləri" dialoqunda səhv vahid seçmisiniz. Geri qaytarın və yenidən idxal edin.

## Faylların açılması

| Mesaj | Nə etmək lazımdır |
|---|---|
| "Bu fayl ModelCraft modeli deyil (JSON deyil)." | Digər formatlar üçün {{ui:İdxal et}} istifadə edin |
| "Bu, açıla bilən ModelCraft faylı deyil: …" | Fayl zədələnib və ya əl ilə dəyişdirilib |
| "Bu modeli daha yeni ModelCraft ilə saxlayıblar…" | Daha yeni versiyada açın |
| "Bu fayl 200 MB-dan böyükdür." | Model burada açılmaq üçün çox böyükdür |

## İş itirdim

ModelCraft öz-özünə fayla yaddaş etmir. Saxlanmamış dəyişikliklərlə nişanı bağlayanda və ya yenidən yükləyəndə brauzer əvvəl soruşur ("Saytdan çıxılsın?" və ya "Sayt yenidən yüklənsin?"); qalmağı seçin və saxlayın. Yeni və Aç da soruşur ("Saxlanmamış dəyişikliklər"). Brauzer və ya kompüter çökərsə, ModelCraft-ı eyni brauzerdə yenidən açın: saxlanmamış işi geri təklif edir ("İşinizi bərpa edək?"; bax: [İşinizi bərpa edin](common:recover)). Tez-tez {{key:Mod+S}} ilə saxlayın.

## Yükləmələr qovluğum surətlərlə dolur

Hər saxlama yeni yükləmədir və `Untitled (1).modelcraft`, `Untitled (2).modelcraft` və s. adlanır. Köhnələri silin, ya da brauzeri hər fayl üçün harada saxlanacağını soruşmağa və köhnə faylın üzərinə özünüz yazmağa təyin edin. Bax: [Açın, saxlayın, idxal edin və ixrac edin](topic:files#save-a-model).

## Yavaşlayır

- Geri qaytarmanın hər addımı modelin surətini saxlayır ([mesh](topic:meshes) yalnız dəyişən hissəni saxlayır), buna görə çox böyük push/pull həndəsəsi idxalında hər redaktə daha uzun çəkir. Lazım olmayanı parçalayın və ya silin, saxlayın və yenidən açın: yenidən açmaq geri qaytarma tarixçəsini də təmizləyir.
- Günəş kölgələri ən çox resurs istifadə edir. Modelləşdirərkən {{ui:Günəş kölgələri}} qutusunu çıxarın.

## Kölgə yoxdur

{{ui:Günəş kölgələri}} söndürülüb, və ya günəş seçdiyiniz vaxtda batıb ("Bu vaxt günəş batıb."), və ya üslub {{ui:Məftil kadr}}dır, o isə kölgə çəkmir.

## "Bu brauzer tam ekrana icazə vermədi."

Bəzi brauzerlər və daxili görünüşlər tam ekrana icazə vermir. Bunun əvəzinə brauzerin öz tam ekranını istifadə edin ({{pick:mac=Control-Command-F|windows linux=F11}}).

## ModelCraft bağlantı olmadan açılmır

ModelCraft yalnız həmin brauzerdə oflayn istifadə üçün saxlanıldıqdan sonra oflayn açılır: tətbiq panelindəki düymə {{ui:Oflayn hazırdır}} yazmalıdır. Onlayn olanda açın və {{ui:Oflayn üçün saxla}} klikləyin. Düymə {{ui:Saxlamaq alınmadı}} yazırsa, daha yaxşı bağlantıda yenidən klikləyin; {{ui:Oflayn mövcud deyil}} o pəncərənin (məxfi pəncərə və ya idarə olunan kompüter) surət saxlaya bilmədiyini bildirir. Bax: [Oflayn işləmək](common:offline).
