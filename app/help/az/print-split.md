---
title: Böyük modeli çap üçün bölün
summary: Printeriniz üçün çox böyük olan modeli çap masasına sığan parçalara kəsin; mıxlar, açarlar, quyruqvari çıxıntılar, ştift və ya maqnit deşikləri ilə, birləşmənin nömrəsi isə hər iki üzdə. Hər parçanı və yığım vərəqini bir zip faylında yükləyin.
keywords: 3d çap, bölmək, maili kəsik, maillik, bucaqlı kəsik, oblik, bölücü, kəsik, çox böyük, masanın ölçüsü, çap həcmi, parçalar, hissələr, birləşdiricilər, mıxlar, açarlar, quyruqvari, ştift, maqnit, boşluq, tolerantlıq, hissə nömrələri, yığım, partlamış görünüş, zip, stl, 3mf, lisenziya, license, USB açar, dongle
from: ee96ba77
---

Modelin çap masası böyük olduqda **Çap üçün bölün** onu sığan parçalara kəsir, birləşdiriciləri əlavə edir ki, parçalar bir-birinə yığıldıqda düz düşsün və hər birləşmənin eyni nömrəsini hər iki üzdə həkk edir. {{ui:Export}} › {{ui:Check for 3D printing (STL or 3MF)…}} açın; dialoqdakı **Çap alətləri** sətrində {{ui:Split for printing}} var. O, görünüşün üstündə kart kimi açılır.

O, çap olunana tətbiq olunur: seçim, seçim yoxdursa, görünən hər şey. Çap olunan şey bağlı bərk cisim olmalıdır; yoxlama deşiklər tapsa, əvvəl [Təmir et](topic:print-tools#repair) istifadə edin.

O, ModelCraft-da, sizin kompüterinizdə işləyir: lisenziya serveri yoxdur, USB açar yoxdur, heç nə yüklənmir.

## Necə kəsmək

- **Masaya sığdır, ən az parça**: masanın enini, dərinliyini və hündürlüyünü daxil edin (onlar {{ui:Settings}} › ModelCraft › 3D printer bölməsindən başlayır). Kart neçə parça tələb etdiyini və hər birinin nə qədər böyük olduğunu göstərir; model bərabər parçalara bölünür, mümkün olan ən az sayda. Əgər bu onu sığdırırsa, parça fayllarda yan üstə yatırıla bilər. Parçadan çıxan birləşdiricilər onun ölçüsünə daxil edilir.
- **Mən verdiyim yerlərdə**: kəsiləcək oxu seçin və modelin aşağı ucundan millimetrlə harada olduğunu yazın, aralarında vergül qoyaraq (`100, 200` üç parça yaradır).
  **Maillik** kəsikləri digər iki oxdan birinin ətrafında 60°-ə qədər döndərir (məsələn, Z boyunca kəsik X ətrafında maillənir): hər maillənmiş kəsik öz yerində modelin orta xəttindən keçir, parçalara yapışdırma sahəsi əlavə edir və meyilli səthdə birləşməni daha yaxşı gizlədir. Birləşdiricilər kəsiyə düz dayanır.

Kart açıq olduqda kəsik müstəviləri modelin ətrafında qırıq xətlərlə çəkilir.

## Birləşdiricilər

Hər iki parçanın toxunduğu yerdə birləşdiricilər qoyulur; onlar ən çox yer olan yerdə özləri yerləşdirilir: xarici səthdən ən azı **ən nazik divar** və **boşluq** və öz ölçüləri qədər uzaqda, və hər digər kəsikdən o qədər uzaqda ki, iki deşik heç vaxt bir-birinə çatmasın. Uzun səthdə iki birləşdirici boyunca yayılır ki, parçalar fırlana bilməsin.

- **Dairəvi mıxlar**: bir parçada mıx (ucu kəsilmiş), o birində deşik.
- **Kvadrat açarlar**: eynidir, lakin kvadrat, belə ki parça yalnız bir yolla düşə bilər.
- **Quyruqvari birləşmələr**: yandan yuvaya sürüşən dil. Yuvanın bir ucu başqa kəsikə çatacaqsa, quyruqvari birləşmə qısa qalır və açıq ucdan sürüşür. Quyruqvari birləşmələr bir istiqamətdə kəsiklərə uyğundur (dilimlər sırası); şəbəkədə mıxlardan və ya ştiftlərdən istifadə edin.
- **Ştift deşikləri**: hər tərəfdə bir deşik; ştiftlər də çap olunur (zip-də).
- **Maqnit yuvaları**: hər tərəfdə siz verdiyiniz diametr və qalınlıqda dairəvi maqnit üçün yuva. Yapışdırmadan əvvəl qütbləri yoxlayın.
- **Heç biri (yapışqan)**.

**Boşluq** mıx ilə onun deşiyi arasında hər tərəfdə olan aralıqdır (başlanğıc üçün 0.2 mm). O, verdiyiniz rəqəmə tam uyğundur: dairəvi deşiklər bir az böyük edilir ki, onların künclərində yox, düz tərəflərində bu aralıq saxlanılsın. Printerinizin hissələri sıx çıxırsa, onu artırın.

Birləşmənin birləşdirici üçün yeri olmadıqda (nazik divar, kiçik toxunma sahəsi), kart bunu deyir: həmin birləşməni yapışdırın.

## Hissə nömrələri

**Birləşmə nömrələrini hər iki üzdə həkk et** aktiv olduqda, hər birləşmə öz iki parçasının nömrəsini alır, məsələn `3-4`, hər iki üzdə 0.6 mm dərinliyində həkk olunur və hər birində düzgün istiqamətdə oxunur. Nömrələr 5 mm hündürlükdə başlayır və sığmaq üçün 2.5 mm-ə qədər kiçilir; nömrəsi üçün yeri olmayan birləşmə siyahıya salınır. Parçalar aşağı qatdan yuxarıya doğru nömrələnir.

## Önizləmə, yükləmə, modeli bölmək

1. {{ui:Preview}} modeli kəsir və neçə parça, birləşmə və birləşdirici olduğunu deyir, hər parçanın 3D çap yoxlamasından keçib-keçmədiyini və masaya sığıb-sığmadığını göstərir və hər parçanın ölçüsünü siyahıya salır. Görünüşdə hər birləşdirici və nömrə halqa ilə işarələnir.
2. {{ui:Download the pieces (.zip)}} bir zip faylı saxlayır: hər parça üçün bir fayl (STL və ya 3MF, **Fayllar** altında seçdiyiniz kimi), hər biri masada dayanmış; ştift mıxları; və **yığım vərəqi** — parçaların nömrələri ilə ayrılmış şəkli (`assembly.svg` və `assembly.png`) və parçaların və birləşmələrin siyahısı (`assembly.txt`).
3. {{ui:Split the model}} seçilmiş qrupların və ya komponentlərin yerinə parçaları modelə bir addımda qoyur, yığım vərəqində olduğu kimi adlandırılmış: {{ui:Undo}} orijinalı geri qaytarır. Bölmək üçün bölünəcək qrupların və ya komponentlərin seçilməsi lazımdır; yükləmə çap olunan hər şeylə işləyir.

## Birləşdiriciləri özünüz köçürün

Önizləmədən sonra **Birləşdiriciləri əllə** birləşdiricilərin harada olacağını düzəltməyə imkan verir:

- {{ui:Move one}}: görünüşdə qırmızı halqaya klikləyin (yaşıla dönür), sonra kəsikdə olmalı yerə klikləyin.
- {{ui:Add one}}: görünüşdə birləşdiricinin olmalı yerinə klikləyin. O, kliklədiyiniz kəsik müstəvisinə, orada iki parça arasında düşür.
- {{ui:Remove one}}: həmin birləşdiricini götürmək üçün qırmızı halqaya klikləyin.

Hər dəyişiklik avtomatik olanlar kimi yenidən yoxlanılır: konturdan həddən artıq yaxın yer, başqa kəsik və ya başqa birləşdirici yaradılmır və kart bunu deyir. {{ui:Automatic again}} yerlərinizi unudur. Model, seçim və kəsiklər olduğu kimi qaldıqca onlar saxlanılır.

Önizləmə model, seçim və ya parametr dəyişənə qədər qalır; sonra kart sizdən yenidən önizləmə istəyir.

:::note
Hər parça yükləməzdən əvvəl 3D çap yoxlamasının onu yoxlayacağı kimi yoxlanılır. Hər parçanın necə çap olunacağına hələ də slayseriniz qərar verir: hər birinə orada baxın və printerinizin boşluğu necə idarə etdiyini görmək üçün əvvəl bir birləşməni çap edin.
:::
