---
title: Qatran printeri üçün dilimləmə
summary: Çap mərhələsinin platformasını qatran printeri üçün dilimləyin, detalı boşaldın və dəstəkləyin, qatlara baxın, printerin faylını saxlayın və ekspozisiya testi ilə ekspozisiyanızı tapın.
keywords: qatran, əyilmə təklifi, vakuum fincanı, qopma qüvvəsi, möhkəmləndirmə, qatran çapı, sla, msla, dlp, dilimləyici, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, boş, havalandırma deşiyi, altlıq, dəstəklər, ekspozisiya testi, ekspozisiya nərdivanı, kalibrləmə, qatlar, əlavə
from: 8cc12858
---

Qatran əlavələri çap platformasındakı əşyaları printerin ekranı üçün qat şəkillərinə dilimləyir və printerin oxuyacağı faylı saxlayır. Onlar pulsuzdur, heç nə kilidli deyil və siz onları açana qədər söndürülüb qalırlar.

:::note
Hələ heç bir fayl real printerdə yüklənməyib. Fayllar yalnız CadCraft-ın öz oxuyucuları ilə geri oxunub, dəstəklər isə yenidir. Qatları yoxlayın və ilk çapı əllə işə salın.
:::

## Nə edəcəksiniz

Detalı qatran üçün dilimləyəcək, qatları yoxlayacaq, faylı saxlayacaq və printerinizə köçürəcəksiniz.

## Addımlar

1. {{ui:Parametrlər}} › {{ui:Əlavələr}} bölməsini açın və qatran dilimləyici əlavəsini və printerinizin fayl formatı əlavəsini (Elegoo GOO, SL1, Chitubox və ya Anycubic) açın. Həmçinin Çap mərhələsi kartında {{ui:Qatran çapı əlavə edin}} düyməsinə basa bilərsiniz.
2. Detalınızı [Çap platformasına əşyaları qoyun](topic:print-stage) bölməsində olduğu kimi platformaya qoyun, sonra **Çap üsulu** yanında {{ui:Qatran}} seçin.
3. **Qatran çap parametrləri** altında **Printer** və **Qatran** seçin. Kart ekranın ölçüsünü pikselle göstərir. Bunlar istehsalçının dərc etdiyi ölçülərdir, ona görə öz ölçünüzü yoxlayın; onları Fərdi altında redaktə edə bilərsiniz.
4. **Qat hündürlüyü (mm)**, **Ekspozisiya (s)** və **Alt qat ekspozisiyası (s)** təyin edin. Hər qatran üçün rəqəmlər yalnız başlanğıc nöqtədir.
5. Boş detal istəyirsinizsə **Boş et, havalandırma deşiyi ilə** qutusunu işarələyin və **Divar (mm)** və **Deşiyin eni (mm)** təyin edin.
6. **Dəstəklər və altlıq** qutusunu işarələyin və **Dəstək sıxlığı** seçin: Yüngül, Orta və ya Ağır.
7. **Fayl formatı** seçin. Kart hələ heç nə əlavə olunmayıbsa deyirsə, üzərində Əlavə et və formatın adı yazılmış düyməyə basın.
8. {{ui:Qatları önizləyin}} düyməsinə basın və **Qat** sürgüsünü hərəkət etdirin. Üzən parçalar dairəyə alınır. Onun altındakı sətir qatların sayını, vaxtı, qatranı mL və qram ilə və dəyəri göstərir.
9. {{ui:Çap faylını saxlayın}} düyməsinə basın, xülasəni yoxlayın və {{ui:Saxla}} düyməsinə basın. Faylı printerinizə kopyalayın.

## Əyilmə, vakuum fincanları, möhkəmləndirmələr və qopma rəqəmi

Bu dördü detalın formasından alınmış təxminlərdir. Heç biri real printerdə sınaqdan keçirilməyib, ona görə hər birinə məsləhət kimi baxın və qatlara nəzər salın.

1. **Əyilmə (dərəcə)** altında {{ui:Əyilməni təklif et}} düyməsinə basın. CadCraft 0-dan 60 dərəcəyə qədər əyilmələri sınayır və ən kiçik ən böyük qatı, ən az asılı səthi və heç bir vakuum fincanı olmayanı seçir. O, **Əyilmə (dərəcə)** dəyərini təyin edir və nə tapdığını bildirir. Xalların çəkiləri bizimdir, heç bir printer istehsalçısının deyil.
2. {{ui:Qatları önizləyin}} düyməsinə basdıqdan sonra xəbərdarlıq yalnız plyonkaya doğru açılan boşluqları adlandırır. Belə boşluq qat qopanda vakuum yarada bilər. Detalı əyin və ya deşik əlavə edin. Xəbərdarlıqdakı xananın ölçüsündən dar oyuqlar görünmür.
3. **Dəstəklər və altlıq** aktiv olanda, hündür nazik sütunlar arasında çarpaz möhkəmləndirmələr əlavə etmək üçün **Hündür dəstəkləri möhkəmləndir** qutusunu işarələyin.
4. Önizləmənin altındakı sətir ən böyük qatı sm2 ilə göstərir. Yalnız **Alt qatlar, qaldırma və sürətlər** altında **Ölçdüyünüz qopma gərginliyi** daxil etsəniz qüvvə göstərilir. Öz ölçülmüş rəqəminiz olmadan yalnız sahə göstərilir.

## Ekspozisiyanı tapın

1. {{ui:Parametrlər}} › {{ui:Əlavələr}} bölməsində ekspozisiya testi əlavəsini açın.
2. {{ui:Test detalını platformaya qoyun}} düyməsinə basın.
3. {{ui:Ekspozisiya nərdivanını saxlayın}} düyməsinə basın. Hər ekspozisiya üçün zipdə bir fayl alırsınız.
4. Hər faylı eyni qatranla çap edin və ən kəskin nazik sütunlar və açıq deşiklər olan ekspozisiyanı saxlayın.

## Qeydlər

- Dilimləmə fonda işləyir, ona görə böyük lövhədə səhifə istifadə oluna bilən qalır.
- Bağlı cisim olmayan parçalar çıxarılır və kart bunu deyir.
- Printeriniz faylı rədd edirsə, format kartında formatın buraxdığı şeylər üçün seçimlər var. Birini dəyişin, yenidən saxlayın və hansının işlədiyini bizə bildirin.
- Anycubic 517 və 518 versiyaları yazılmır.
