---
title: Mesh iş sahəsində meshi redaktə edin
summary: Meshin təpələrini, kənarlarını və üzlərini seçin, onları köçürün və ekstruziya, daxilə vermə, faskalama, kəsmə, birləşdirmə, doldurma və körpü ilə işləyin; hər iki düymə üslubundan istifadə edə bilərsiniz.
keywords: mesh, redaktə rejimi, mesh iş sahəsi, təpə, təpələr, kənar, kənarlar, üz, üzlər, ekstruziya, daxilə vermə, faska, dövrə kəsiyi, bıçaq, ikiyə bölmə, fırlanma, birləşdirmə, həll etmək, doldurma, şəbəkə ilə doldurma, körpü, bölmə, sürüşdürmə, mütənasib redaktə, azalma, iş sahəsi
from: 92a372dd
---

**Mesh** iş sahəsi [meshi](topic:meshes) nöqtə-nöqtə redaktə edir: təpələrini, kənarlarını və üzlərini. İtələ-çək həndəsəsi **Model** iş sahəsində qalır.

## Açın

- Alətlər panelinin solundakı {{ui:İş sahəsi}} siyahısından {{ui:Mesh}} seçin. Seçilmiş mesh redaktə üçün açılır; seçilmiş qrup və ya komponent əvvəlcə meshə çevrilir (bir geri qaytarma addımı).
- Və ya meshə ikiqat klikləyin, və ya modelləşdirici düymələri ilə seçib {{key:Tab}} basın.
- Heç nə seçilməyibsə, panel əlavə etmək üçün meshləri təklif edir: müstəvi, şəbəkə, kub, dairə, silindr, konus, kürə, ico kürə və torus. Yeni mesh görünüşün baxdığı yerə düşür və redaktə üçün açılır.

{{ui:Modelə qayıt}} (və ya siyahı, modelləşdirici düymələri ilə {{key:Tab}}, itələ-çək düymələri ilə heç nə seçilməyibsə {{key:Esc}}) mesh seçilmiş halda Model-ə qaytarır. Mesh iş sahəsi açıq olanda modelin qalan hissəsi solğunlaşır və Model-in çəkmə alətləri yığışdırılır.

## Seçim

| Nə edin | Nəyə |
|---|---|
| {{key:1}} {{key:2}} {{key:3}} | Təpələri, kənarları və ya üzləri seçin |
| Klik | Birini seçin; {{key:Shift}}+klik əlavə edir və ya çıxarır |
| Qutu çəkin | İçəridə və görünən olanı seçin; {{key:Shift}} əlavə edir, {{key:Ctrl}} çıxarır |
| {{key:Alt}}+klik kənar və ya ona ikiqat klik | Onun kənar dövrəsi (üz rejimində üz dövrəsi; açıq kənarda bütün sərhəd) |
| {{key:Ctrl}}+{{key:Alt}}+klik kənar | Onun kənar halqası |
| Üçqat klik | Ona birləşmiş hər şey |

{{ui:Seç}} qrupunda həmçinin {{ui:Hamısı}}, {{ui:Bağlı}}, {{ui:Dövrə}}, {{ui:Halqa}}, {{ui:Daha çox}} və {{ui:Daha az}} var.

## Köçürmə, dönmə, miqyas

{{ui:Köçür}}, {{ui:Fırlat}} və {{ui:Miqyas}} göstəricidən başlayır: hərəkət etdirin, sonra seçimi yerləşdirmək üçün klikləyin və ya {{key:Enter}}, ləğv etmək üçün {{key:Esc}}. {{key:X}}, {{key:Y}} və ya {{key:Z}} (və ya ox düymələri) oxu kilidləyir. Dəqiq nəticə üçün məsafə, bucaq və ya əmsal yazın — [hesablamalar](topic:value-box#calculations) da işləyir.

**Mütənasib redaktə** ({{ui:Mütənasib}}, və ya panel): seçimə yaxın təpələr köçürməni izləyir, uzaqlaşdıqca daha az, təyin etdiyiniz məsafəyə qədər, seçdiyiniz azalma ilə. Məsafəni düz deyil, kənarlar boyunca ölçmək üçün {{ui:Yalnız mesh boyunca}} işarələyin.

{{ui:Sürüşdür}} seçilmiş kənar dövrəsini onun yanındakı kənarlar boyunca hərəkət etdirir.

## Formanı dəyişin

| Alət | Nə edir |
|---|---|
| {{ui:Ekstruziya}} | Seçilmiş üzləri normalları boyunca çıxarır, yeni yan üzlərlə (və ya açıq sərhəd kənarlarından üzlər yaradır). Məsafəni yazın |
| {{ui:Daxilə ver}} | Seçilmiş üzlərin konturunun içində zolaq; hər üz üçün ayrıca {{key:I}} düyməsini yenidən basın |
| {{ui:Faska}} | Seçilmiş kənarları (və ya {{key:Ctrl}}+{{key:Shift}}+{{key:B}} ilə təpələri) eni ilə kəsir; çarx və ya artı/mənfi düymələri yumru kənar üçün seqment əlavə edir |
| {{ui:Dövrə kəsiyi}} | Kənara göstərin: dördtərəfli üzlərin halqası boyunca yeni dövrələr; çarx neçə olacağını təyin edir; kəsmək üçün klikləyin |
| {{ui:Bıçaq}} | Kənarlarda və ya künclərdə nöqtələrə klikləyin; {{key:Enter}} aralarındakı üzləri gördüyünüz kimi düz kəsir |
| {{ui:İkiyə böl}} | Ekranda xətt çəkin: seçilmiş üzlər (və ya hamısı) onun boyunca kəsilir |
| {{ui:Fırlanma}} | Seçilmiş üzləri və ya açıq kənarları mavi ox ətrafında addımlarla döndərir (çarx addımları təyin edir); tam dönmə bağlanır |
| {{ui:Bölün}} | Seçilmiş kənarları ikiyə kəsir; bütöv üzlər şəbəkəyə çevrilir |
| {{ui:Birləşdir}} | Seçilmiş təpələr mərkəzlərində bir olur |
| {{ui:Həll et}} | Seçimi çıxarır, lakin səthi saxlayır: üzlər birləşir |
| {{ui:Doldur}} | Seçilmiş açıq sərhəd üzərində (və ya iki açıq kənar arasında) üz |
| {{ui:Şəbəkə ilə doldur}} | Cüt sayda kənarı olan açıq sərhədi dördbucaqlılar şəbəkəsi ilə doldurur |
| {{ui:Körpü}} | Seçilmiş iki açıq kənar dövrəsini üzlərlə birləşdirir |
| {{ui:Kəskinlik}} | Mesh Subdivision səthi ilə hamarlanarkən seçilmiş kənarların nə qədər kəskin qaldığı: mərkəzdən uzaqlaşdırın, çarxdan istifadə edin (0,1 addımlarla) və ya 0-dan 1-ə qədər dəyər yazın. Panel seçilmiş kənarların kəskinliyini göstərir və yazılmış dəyəri də qəbul edir. Kəskin kənarlar bənövşəyi rəngdə çəkilir |
| {{ui:Çevir}}, {{ui:Hamarla}}, {{ui:Sil}} | Üzləri çevirin; təpələri qonşularına doğru hamarlayın; seçim rejiminə görə silin |

Hər biri bir geri qaytarma addımıdır. Teksturu koordinatları, rənglər və çəkilər yeni üzlərə və təpələrə keçir.

## Yenidən meshləyin

{{ui:Yenidən meshlə}} bütün meshi bir ölçüdə bərabər üçbucaqlarla yenidən qurur; basdığınız zaman ölçü təyin olunur (kiçik olması daha dəqiq, lakin daha yavaş deməkdir). Dəliklərini bağlayır, üst-üstə düşən parçaları birləşdirir və heykəltəraşlığın uzatdığı meshi düzəldir. Kəskin kənarlar çox az yumrulaşır. UV-lər, boya və kəskinliklər yenidən başlayır. Bir geri qaytarma addımı.

## Retopologiya

Təfərrüatlı meshin (heykəl, skan) üzərində daha təmiz yeni mesh qurmaq üçün panelin {{ui:Retopologiya}} › **Üzərində qur** bölməsində təfərrüatlı meshi seçin, sonra:

- **Hərəkət etdirilmiş nöqtələri onun üzərinə keçirin:** hərəkət etdirdiyiniz nöqtələr və ekstruziya etdiyiniz kənarlar onun səthinə düşür.
- **Seçilmiş nöqtələri onun üzərinə qoyun** seçilmiş nöqtələri indi onun üzərinə köçürür (bir geri qaytarma addımı).
- **Bu meshin kənarlarını qarşıda göstərin** qurduğunuz meshi səthin üzərində çəkir ki, görə biləsiniz.

## Son əməliyyatı tənzimləyin

{{ui:Daxilə ver}}, {{ui:Faska}}, {{ui:Dövrə kəsiyi}}, {{ui:Bölün}}, {{ui:Hamarla}}, {{ui:Şəbəkə ilə doldur}} və ya {{ui:Fırlanma}}-dan sonra panel onun parametrlərini göstərir (en, seqment, profil, kəsiklər …). Birini dəyişin və əməliyyat başlanğıcdan yenidən edilir, yenə bir geri qaytarma addımı.

## Düymələr

| | İtələ-çək düymələri | Modeler düymələri |
|---|---|---|
| Köçür, fırlat, miqyas | {{key:M}} {{key:Q}} {{key:S}} | {{key:G}} {{key:R}} {{key:S}} ({{key:G}} iki dəfə sürüşdürür) |
| Ekstruziya, daxilə vermə | {{key:P}}, {{key:F}} | {{key:E}}, {{key:I}} |
| Sil | {{key:E}} və ya {{key:Delete}} | {{key:X}} və ya {{key:Delete}} |
| Kəskinlik | {{key:Shift+C}} | {{key:Shift+E}} |
| Hamısını seç, heç birini, tərsinə | {{key:Ctrl+A}}, {{key:Esc}}, {{key:Ctrl+I}} | {{key:A}}, {{key:Alt+A}}, {{key:Ctrl+I}} |
| Hər ikisi | {{key:Ctrl+B}} faska, {{key:Ctrl+R}} dövrə kəsiyi, {{key:K}} bıçaq | eyni, və {{key:F}} doldur, {{key:M}} birləşdir, {{key:Ctrl+X}} həll et, {{key:L}} / {{key:Ctrl+L}} bağlı, {{key:Alt+N}} çevir, {{key:O}} mütənasib, {{key:Shift+V}} təpə sürüşdürməsi |

Bax həmçinin [Meshlər](topic:meshes), [Meshdə modifikatorlar](topic:modifiers) və [Hələ hazır deyil](topic:not-built-yet).
