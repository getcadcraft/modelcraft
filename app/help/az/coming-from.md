---
title: Digər modelləşdiricilərdən keçid
summary: Push/pull modelləşdirmə vərdişlərinin ModelCraft-a açar-açar necə uyğunlaşdığı və insanları çaşdıran fərqlər.
keywords: keçid, köçürmək, tanış, fərqlər, push pull modelləşdirici, skp, qısayollar, vərdişlər, müqayisə, ölçü qutusu, outliner, obyekt məlumatı
from: 74ffd4ac
---

Əgər SketchUp-da modelləşdirmisinizsə, ModelCraft tanış görünəcək: eyni səth və push/pull fikri, eyni alət hərfləri, klikləmədən yazdığınız dəyər qutusu, qırmızı, yaşıl və mavi oxlarla nəticə çıxarma (inference), qruplar, komponentlər, Outliner, {{ui:Obyekt məlumatı}} və səhnələr. Bu səhifə birbaşa nəyin köçdüyünü və daha önəmlisi, nəyin köçmədiyini sadalayır.

## Birbaşa keçən vərdişlər

| Öyrəşdiyiniz | ModelCraft-da |
|---|---|
| Seçmək üçün Space, Xətt üçün L, Düzbucaqlı üçün R, Çevrə üçün C basın | Eyni: {{key:Space}}, {{key:L}}, {{key:R}}, {{key:C}} |
| İtələ/çək üçün P, Köçür üçün M, Fırlat üçün Q, Miqyas üçün S, Silgi üçün E, Ölçü lenti üçün T basın | Eyni: {{key:P}}, {{key:M}}, {{key:Q}}, {{key:S}}, {{key:E}}, {{key:T}} |
| Orbita üçün O, Sürüşdür üçün H, Miqyas üçün Z, Shift+Z hamısına miqyas üçün basın | Eyni: {{key:O}}, {{key:H}}, {{key:Z}}, {{key:Shift+Z}} |
| Komponent yaratmaq üçün G basın | Eyni: {{key:G}}. {{key:Shift+G}} qrup yaradır |
| Ölçü qutusunu klikləmədən yazın | Eyni, aşağıdakı dəyər qutusunda. {{key:Enter}} basın |
| Düzbucaqlı üçün `4m,3m`, tərəflər üçün `12s` yazın | Eyni |
| Köçürmə nüsxəsindən sonra `3x` və ya `/3` yazın | Eyni; `*3` də işləyir |
| Nöqtə və ya yerdəyişmə üçün `[x,y,z]` və ya `<dx,dy,dz>` yazın | Eyni |
| Architectural-inch modeldə çılpaq rəqəm yazın və düym alın | Eyni |
| Orta düymə ilə sürükləyərək orbitə alın, Shift+orta düymə ilə sürüşdürün, təkərlə kursorun yerində miqyaslayın | Eyni |
| İtələ/çək ilə iki dəfə klikləyin məsafəni təkrarlamaq üçün | Eyni |
| Qırmızı, yaşıl, mavi və paraleli kilidləmək üçün ox düymələri | Eyni: {{key:Right}} qırmızı, {{key:Left}} yaşıl, {{key:Up}} mavi, {{key:Down}} paralel |
| Nəticəni kilidləmək üçün Shift basın | Eyni |
| Hərəkət edərkən kopyalamaq üçün Ctrl (Mac-də Option) | {{key:Ctrl}}, {{key:Mod}} və ya {{key:Alt}}, istənilən kompüterdə |
| Seçimi dəyişmək üçün Shift, əlavə etmək üçün Ctrl, seçimdən çıxarmaq üçün Shift+Ctrl | Eyni düymələr; Mac-də Ctrl yazılan yerdə {{key:Mod}} istifadə edin |
| Soldan sağa pəncərə, sağdan sola kəsişmə | Eyni |
| Uzunluqları etiketləmək üçün Ölçü aləti | {{key:D}}, və daha çox: ölçüyə yeni uzunluq yazın və model ona uyğun ölçüləndirilir. Bax [Ölçü və ölçüləndirmə](topic:dimensions) |
| Üz və kənarlar üçün üzə iki dəfə klik; bütün birləşmiş üçün üç dəfə | Eyni |
| Qrupu redaktə etmək üçün ona iki dəfə klik; bağlamaq üçün Esc | Eyni |
| Üzü bölmək üçün üz boyunca xətt çəkin; eyni müstəvidə üzləri birləşdirmək üçün aralarındakı kənarı silin | Eyni |
| Divarı kəsmək üçün pəncərə düzbucaqlısını divar boyunca itələyin | Eyni |
| Arxa üzlər mavi-boz; Üzləri çevir | Eyni rəng; {{ui:Üzü çevir}} {{ui:Obyekt məlumatı}} daxilində |
| Üst-üstə səhnələr sekmə kimi, Page Up və Page Down | Eyni, {{ui:Səhnələr}} panelində {{ui:Oynat}} ilə |
| Tarix, vaxt, enlik və uzunluqdan kölgələr, şimal yaşıl ilə | Eyni, {{ui:Üslub}} panelində |

## Sizi çaşdıran fərqlər

### Saxlamaq yükləmədir

Açdığınız faylın üzərinə yazan Saxla yoxdur, adı olan Fərqli saxla dialoqu yoxdur, avtosaxlama yoxdur və ehtiyat fayl yoxdur. {{ui:Saxla}} ({{key:Mod+S}}) hər dəfə təzə `.modelcraft` faylı yükləyir, adətən yükləmələr qovluğuna. Tez-tez saxlayın və faylları özünüz adlandırın və ya köçürün. Bax [Açın, saxlayın, idxal edin və ixrac edin](topic:files).

### .skp fayllarını idxal edir, amma saxlamır

{{ui:İdxal et}} SketchUp fayllarını ModelCraft-ın öz oxuyucusu ilə səhifədə oxuyur: qruplar, komponentlər, rənglər, üzlərdəki teksturalar, teqlər və yumşaq kənarlar keçir. Bax [Fayl formatları ətraflı](topic:formats#skp-files). ModelCraft `.skp` saxlaya bilmir: geri qaytarmaq üçün ModelCraft-dan Collada ixrac edin və SketchUp-da idxal edin.

### Sağ klik menyusu yoxdur

Sağ düymə ilə sürükləmək sürüşdürür; sağ klik heç nə etmir. Kontekst menyusunda tapacağınız əmrlər {{ui:Obyekt məlumatı}}nda ({{ui:Üzü çevir}}, {{ui:Redaktə}}, {{ui:Parçalayın}}, {{ui:Unikal et}}, {{ui:Komponent yarat}}) və alətlər panelindəki {{ui:Təşkil}} qrupundadır.

### Vahidlər status panelindədir

Model Info və ya şablon seçimi yoxdur. Vahid seçicisi aşağı sağdadır. Yeni model brauzerinizin dil parametrinə görə ABŞ-da futlarla və düymlə, qalan yerlərdə millimetrlərlə başlayır. Onluq kəsrlər həmişə nöqtə ilə yazılır: `2.5m`, heç vaxt `2,5m`, çünki vergül həmişə dəyərləri ayırır.

### Boyanın öz materialları var

{{ui:Boya}} ({{key:B}}) düz rəngləri və {{ui:Materiallar}} bölməsindəki materialları boyayır: kərpic, siding, dam örtüyü, ağac, daş və daha çoxu, ModelCraft tərəfindən çəkilib. Öz şəklinizi material kimi hələ yükləyə bilməzsiniz; idxal olunan fayllarla gələn teksturalar saxlanılır. Bax [Rənglər və materiallarla boyayın](topic:paint).

### Miqyas bərabərdir, tutacaqsız

Miqyas tutacaqlı qutu göstərmir. Yerdə qalan nöqtəni, istinad nöqtəsini klikləyin, sonra yeni ölçü və ya yazılmış əmsal. Həmişə bütün istiqamətlərdə bərabər miqyaslayır. Bir istiqamətdə uzatmaq üçün push/pull və ya üzü köçürün, və ya qrupun enini, dərinliyini və hündürlüyünü {{ui:Obyekt məlumatı}}nda yenidən yazın, və ya [ölçü ilə ölçüləndirin](topic:dimensions).

### Fırlatma müstəvisini kliklədiyiniz yerdən seçir

Üzlərin üzərində kursorla gəzərkən müstəvini seçmək üçün ox düymələri ilə üzə yapışan protraktor yoxdur. Üzün mərkəzinə klik edin ki, o üzün müstəvisində dönsün, və ya şaquli ətrafında fırlanmaq üçün yerə klik edin. Ox düymələri ilk klikdən əvvəl görünüşü orbitə alır.

### Üzərindən keçdiyiniz nöqtələrdən nəticə çıxarma

ModelCraft oxların istiqamətinə **başlanğıc nöqtənizdən**, və kursorun altındakı nöqtələrə, kənarlara və üzlərə tutur. Sadəcə üzərindən keçdiyiniz nöqtədən istiqamət izləmir (nöqtəli "nöqtədən" nəticə). Uzaq künclə düzülmək üçün oxu ox düyməsi ilə kilidləyin və həmin küncün üzərinə gəlin: kilidlənmiş nöqtə onunla düzülmək üçün sürüşür. Və ya [bələdçi](topic:guides-measure) qoyun.

### Paralel başlamazdan əvvəl keçdiyiniz kənardan istifadə edir

Paralel və perpendikulyar nəticə çıxarma **ilk klikdən əvvəl** kursorun keçdiyi son kənarı istifadə edir, çəkərkən üzərindən keçdiyiniz kənarları yox. Bax [Nəticə çıxarma və tutma](topic:inference#parallel-and-perpendicular).

### Qrupun nüsxələri bağlıdır

{{ui:Köçür}} ilə qrupu kopyalamaq eyni qrupun ikinci yerləşdirməsini yaradır, beləliklə birini redaktə etmək hər ikisini dəyişir, komponentlərdə olduğu kimi. SketchUp qrupları müstəqil edir. Bax [Problemlərin həlli](topic:troubleshooting#editing-one-group-changed-another).

### Boşluq sürüşdürmür

{{key:Space}} SketchUp-dakı kimi {{ui:Seç}} alətini seçir. Bəzi digər veb tətbiqlərdə Space saxlanması sürüşdürür; burada yox. Bunun əvəzinə sağ düyməni basıb sürükləyin.

### İki barmaqla sürüşdürmə miqyaslayır

Trackpad-də {{ui:Parametrlər}} › {{ui:ModelCraft}} › Sürüşdürmə bölməsində Trackpad seçin: iki barmaq orbitə alır, {{key:Shift}} və iki barmaq sürüşdürür, sıxılma miqyaslayır. Bax [Orbita, sürüşdürmə və miqyas](topic:orbit-pan-zoom#on-a-trackpad).

Əgər əlləriniz SketchUp-un deyil, Blender-in düymələrini bilirsə, {{ui:Modeler}} menyu üslubunu seçin: {{key:G}}, {{key:R}} və {{key:S}} seçimə eyni anda təsir edir, {{key:E}} ekstrüziya edir (push/pull), {{key:Shift+D}} dublikat yaradır və başlıq menyu paneli (Fayl, Redaktə, Görünüş, Seç, Əlavə et, Obyekt, Meş) alətlər panelini əvəz edir. SketchUp-dan gəlirsinizsə, {{ui:İtələ-çək}} üslubu eyni alət hərfləri üzərində öz menyu panelini verir. Bax [Menyular, düymələr və siçan](topic:menus-keys-and-mouse).

### Bir-birinə itələnmiş cisimlər kəsilmir

Push/pull arxasındakı üzü eyni obyektdə kəsir, lakin bir-birinə itələnmiş iki ayrı cisim kəsişmir. Intersect Faces və Solid Tools yoxdur.

### Nə çatışmır

Freehand, Trim, Split və Outer Shell, öz şəkil materialları, genişləndirmələr və vərəqlər üçün layout aləti bu versiyada yoxdur. [Hələ yaradılmayanlar](topic:not-built-yet) nəyi əvəzində etməyi sadalayır.

## Brauzerin saxladığı qısayollar

ModelCraft brauzerdə işləyir, ona görə bəzi qısayollar tətbiqə yox, brauzerə aiddir. {{key:Mod+N}} brauzer pəncərəsi açır (istifadə edin {{ui:Yeni}}), {{key:Mod+W}} sekmə bağlayır. Saxlanılmamış dəyişiklikləriniz varsa, brauzer bağlamadan əvvəl soruşur. Bax [Düymələr, siçanlar və trackpad-lər](common:keys#shortcuts-the-browser-keeps).
