---
title: Canlı görünüş
summary: Modelin yanında real vaxt görünüşündə, günəş və kölgələrlə göstərən pəncərə; etdiyiniz hər dəyişikliyi izləyir. Onun içində gəzin, günün vaxtını və ayı təyin edin.
keywords: paylaş, panorama, 360, tur, virtual tur, müstəqil baxış, oflayn baxış, müştəriyə göndərmək, video, gəzinti videosu, səpələmə, səpələnmə, ot, çəmənlik, meşə, qayalar, bitkilər, ağaclar, izdiham, bitkiləri boyamaq, canlı görünüş, real vaxt, real vaxt render, gəzinti, gəzmək, birinci şəxs, təqdimat, müştəri, ikinci ekran, ikinci pəncərə, monitor, günün vaxtı, günəş, fəsil, ay, kölgələr, ətraf okklüziya, əks olunmalar, işığın əks olunması, qlobal işıqlandırma, webgpu, webgl
from: fca3b0d6
---

{{ui:İxrac}} › {{ui:Canlı görünüş}} proqramın üstündə pəncərə açır, o modeli real vaxt görünüşündə göstərir: modelinizin yerinə və tarixinə uyğun səma və günəş, günəşin kölgələri, üzlərə verdiyiniz görünüşlər və materiallar, lampalar və divarlardan, döşəmələrdən əks olunan işıq. O, etdiklərinizi izləyir: görünüşü çevirsəniz, o da çevrilir; modeli dəyişsəniz, dəyişikliyi bir az sonra göstərir. Heç nə yüklənmir.

## Açın

1. {{ui:İxrac}} › {{ui:Canlı görünüş}} seçin. Pəncərə sağ aşağı küncdə açılır.
2. Onu köçürmək üçün başlığından sürükləyin, böyütmək üçün küncündən çəkin.
3. {{ui:Yeni pəncərə}} onu ayrı pəncərəyə, ikinci ekran üçün köçürür. {{ui:İxrac}} › {{ui:Canlı görünüş yeni pəncərədə}} onu dərhal orada açır. Brauzeriniz açılan pəncərələri bloklayırsa, o, pəncərə kimi açılır.
4. {{ui:Bağla}} onu bağlayır.

## İdarəetmə

| İdarəetmə | Nə edir |
|---|---|
| {{ui:Görünüşü izlə}} | Açıq olanda canlı görünüş ModelCraft-ın görünüşü baxan yerə baxır. Gəzmək onu söndürür |
| {{ui:Gəz}} | Modelin içində gəzin (aşağıda) |
| {{ui:Cazibə}} | Gəzərkən: döşəmələrdə durmaq və pillələrlə qalxmaq. Söndürülüdürsə: uçmaq |
| {{ui:Vaxt}} | Günün saatı, 05:00-dan 21:00-a qədər. Sürüşdürdükcə günəş hərəkət edir |
| {{ui:Ay}} | Ay (onun 21-i), beləliklə qışda və yayda günəşi görə bilərsiniz |
| {{ui:Keyfiyyət}} | {{ui:Bu kompüter üçün}} ([maşınınız](topic:your-machine)-a nə verilirsə), və ya {{ui:Aşağı}}, {{ui:Orta}} və ya {{ui:Yüksək}} |

Görünüşün altındakı sətir görünüşü hansı sistemin çəkdiyini (WebGPU və ya WebGL 2), keyfiyyəti və əks olunan işığı göstərir.

## Modelin içində gəzin

1. Əsas görünüşü istədiyiniz yerə çevirin və {{ui:Gəz}} seçin. Görünüşün baxış nöqtəsinin altındakı döşəmədə, 1,6 m hündürlükdə dayanırsınız.
2. Canlı görünüşə klikləyin, sonra {{key:W}} {{key:A}} {{key:S}} {{key:D}} və ya ox düymələrindən istifadə edin. Qaçmaq üçün {{key:Shift}} saxlayın. Ətrafa baxmaq üçün sürükləyin.
3. 40 sm-ə qədər addımlar aşılır (pillələr); bundan yüksək olan hər şey divardır. Divarlar sizi saxlayır və siz onların boyunca sürüşürsünüz.
4. {{ui:Cazibə}} söndürülüdürsə uçursunuz: {{key:E}} yuxarı, {{key:Q}} aşağı.
5. {{key:Esc}} gəzintini dayandırır.

## Bitki, qaya və insanları səpin

Canlı görünüşün panelindəki {{ui:Səpələmə}} şəkilin yanında səpələmə panelini açır. Səpələmə dəsti model hissəsinin üzərinə elementlər (ağaclar, kollar, ot, çiçəklər, qayalar, insanlar, avtomobillər) yayır, bunlar ətraf əşyaları kitabxanasından götürülür. Elementlər yalnız canlı görünüşdə çəkilir: modelin həndəsəsi deyillər və əsas görünüş onları göstərmir.

1. **Üzləri doldurun:** ModelCraft-da üzləri (və ya qrupu, məsələn relyefi) seçin, sonra {{ui:Seçimi doldur}} seçin. Dəst onları örtəcək.
2. **Boyayın:** {{ui:Boya}} seçin, sonra canlı görünüş üzərində sürükləyin. Üzlər seçilidirsə, boya yalnız onların üzərinə düşür; heç nə seçilməyibsə, fırçanın altındakı hər şeyə, o cümlədən torpağa düşür. {{ui:Fırça ölçüsü}} fırçanı təyin edir; {{ui:Silgi}} boyanmış yerləri silir.
3. Səpmək istədiyiniz elementləri işarələyin. Hər birinin yanındakı say onun çəkisidir: 3 və 1 o deməkdir ki, hər birinci növdən üç, ikinci növdən isə bir dənə olacaq.

| İdarəetmə | Nə edir |
|---|---|
| {{ui:m² başına}} | Hər kvadrat metrdə neçə element olacağı |
| {{ui:Uzaq saxla (m)}} | Digər obyektlərə bundan yaxın element yoxdur, damın və ya masanın altında da yoxdur. 0 onu söndürür |
| {{ui:Dönmə (°)}} | Hər element şaquli ox ətrafında təsadüfi nə qədər dönsün |
| {{ui:Ən dik (°)}} | Səth bundan dik olan yerlərdə element yoxdur |
| {{ui:Ölçü}} | Elementin öz ölçüsünün əmsalı kimi ən kiçik və ən böyük ölçü |
| {{ui:Hündürlük: başlanğıc, son (m)}} | Yalnız bu hündürlüklər arasında (boş = istənilən) |
| {{ui:Səthlə birlikdə əyil}} | 0 elementləri şaquli saxlayır; 1 onları yamaca perpendikulyar qoyur |
| {{ui:Toxum}}, {{ui:Qarışdır}} | Eyni toxum həmişə eyni səpələməni verir; Qarışdır başqasını seçir |

Dəstlər `.modelcraft` faylında saxlanılır və dəyişdirdiyiniz zaman örtdükləri üzləri izləyir. Canlı görünüşün ən çox neçə element çəkə biləcəyi [maşınınızın](topic:your-machine) səviyyəsindən asılıdır: {{ui:Yalnız prosessor}} üçün 20 000, {{ui:Qrafika kartı, əsas}} üçün 100 000, {{ui:Qrafika kartı, yüksək}} üçün bir milyon. Panel neçə elementin yerləşdirildiyini və sıxlığın neçə tələb etdiyini göstərir: büdcə çatdıqda və ya obyektlər onları kənarda saxladıqda daha az element yerləşdirilir. Kameraya yaxın elementlər özləri kimi, uzaqdakılar isə öz rənglərində sadə formalar kimi çəkilir.

:::note
Səpələnmiş elementlər canlı görünüşdədir (və onun gəzintisində, panoramalarda və müstəqil baxışda). Şəkil render etmə onları hələlik çəkmir.
:::

## Paylaşın: panoramalar, turlar, baxış, video

Canlı görünüşün panelindəki {{ui:Paylaş}} canlı görünüşdən fayllar yaradır. Hər şey bu kompüterdə hazırlanır; heç nə yüklənmir.

| Seçim | Nə alırsınız |
|---|---|
| {{ui:360° panorama}} | Görünüşün durduğu yerdən (və ya gəzdiyiniz yerdən) 360° şəkil, panorama baxıcılarının və əksər foto saytlarının açdığı equirectangular PNG |
| {{ui:Bu yeri ture əlavə et}}, sonra {{ui:Turu saxla}} | Hər yerdə panoraması olan, hər yerdən görünən yerlərə oxları olan bir veb səhifə (aradakı divar oxu gizlədir) |
| {{ui:Görüntüləyici saxla}} | Bu real vaxt görünüşündə modelli bir veb səhifə: onu çevirin, içində gəzin, saxlanmış səhnələrinə keçin. Qovluqdan, USB-dən və ya e-poçtdan WebGPU və ya WebGL 2 olan brauzerdə oflayn açılır, quraşdırma və hesab tələb etmir və internetdən heç nə yükləmir |
| {{ui:Yolun videosu}} | Xronologiyadakı kamera yolu (və ya saxlanmış səhnələr ardıcıl) canlı görünüşün ölçüsündə, bu real vaxt görünüşündə video kimi: brauzer yarada bilirsə WebM və ya MP4, əks halda ZIP-də nömrələnmiş şəkillər |

Panoramanın ölçüsü keyfiyyətə uyğundur: Aşağı, Orta və Yüksəkdə en 1024, 2048 və ya 4096 piksel. Görüntüləyici faylı modelin özü ilə birlikdə təxminən 5 MB-dır.

:::note
Tur və görüntüləyici göstərmək üçündür, redaktə üçün deyil: saxladığınız zaman modeli olduğu kimi saxlayırlar.
:::

## Keyfiyyət

| | Aşağı | Orta | Yüksək |
|---|---|---|---|
| Günəş kölgələri | bir kölgə xəritəsi | üç kaskad | dörd kaskad |
| Ətraf okklüziya (kontakt kölgələri) | | ✓ | ✓, daha incə |
| Metalda əks olunmalar | | | ✓ |
| Parıltı ({{ui:Şəkil render edin…}} onu təyin etdikdə) | | ✓ | ✓ |
| Hamarlanmış kənarlar | FXAA | bir neçə kadr üzrə (TAA) | bir neçə kadr üzrə (TAA) |
| Əks olunan işıq | kobud | daha incə | ən incə |

{{ui:Bu kompüter üçün}} istifadə oluna bilən qrafika kartı olmayan kompüterdə Aşağı, daxili qrafika çipi ilə Orta, ayrı qrafika kartı ilə Yüksək seçir. Aşağı 8 GB yaddaşlı, qrafika kartı olmayan noutbuk üçündür.

## Əks olunan işıq

Günəşli divardan döşəməyə əks olunan işıq və otağın daha qaranlıq daxili hissəsi, [vizuallaşdırılmış şəkillərlə](topic:render) eyni yol izləyən renderləyici ilə hesablanır: o, modelin içində nöqtələrdə kiçik panorama render edir, hər prosessor nüvəsində fonda. İşləyərkən aşağı sətirdə {{ui:Əks olunan işıq: 40 %}} yazılır; hazır olanda görünüş onu qəbul edir. Hər dəyişiklikdən sonra yenidən başlayır.

:::note
Bu, canlı görünüş üçün təxmini hesablamadır, render edilmiş şəkil deyil: nöqtələr arasındakı kiçik detallar ona yaxın nöqtələrin əks olunan işığını alır. Bitmiş şəkil üçün [Şəkil render edin](topic:render) istifadə edin.
:::

## Parlaqlıq və rənglər

Canlı görünüş [Şəkil render edin](topic:render) ilə eyni parlaqlığı, ağ balansı, kontrastı və görünüş çevrilməsini (ACES, AgX, filmic və ya standart) istifadə edir: onları orada təyin edin, canlı görünüş də izləyəcək.

:::note
Brauzerlər fərqlidir. WebGPU-su olan brauzerlərdə (Windows, macOS və ChromeOS-da Chrome və Edge, Safari 26) canlı görünüş ondan istifadə edir; digərlərində (Linux-da əksər brauzerlər, köhnə Apple sistemləri) WebGL 2 istifadə edir və eyni görünür.
:::
