---
title: Əyri obyektlər
summary: Bézier, NURBS və düz seqmentli əyrilər çəkin, onlara qalınlıq, en və ya daralma verin, düz olanları doldurun, mətni əyri kimi təyin edin və onları meşə çevirin.
keywords: əyri, əyrilər, bezier, nurbs, spline, splinelər, yol, boru, kabel, ip, skos, ekstrüziya, daralma, əyilmə, radius, doldurma, profil, mətn, hərflər, loqo, əyridən meşə
from: 602bf077
---

**Əyri obyekt** forma yaradan əyridir: boyunca boru (skos), zolaq (ekstrüziya), daralan buynuz (daralma), və ya — düz və bağlı olduqda — doldurulmuş lövhə və ya hərflər. Forma əyriyə tabe olur: nöqtəni köçürün, boru onunla birlikdə hərəkət edir. Forma düzgün olduqda onu meşə çevirin.

## Əyri əlavə edin

İş sahələri siyahısından {{ui:Əyri}} seçin və {{ui:Əlavə et}} basın:

| Növ | Nədir |
| --- | --- |
| Bézier əyrisi, Bézier çevrəsi | Nöqtələrindən keçir; hər nöqtənin əyrinin istiqamətini təyin edən iki tutacağı var |
| NURBS əyrisi, NURBS çevrəsi, Yol | Hamar, nöqtələrinə tərəf çəkilir (son nöqtələrində başlayır və bitir); hər nöqtənin çəkisi var |
| Mətn | Mətniniz düz, doldurulmuş hərf konturları kimi |

Yeni əyri görünmək və seçilmək üçün nazik boru alır; sadə əyri üçün skos dərinliyini 0 edin.

Həmçinin çəkilmiş bir şeydən başlaya bilərsiniz: Model iş sahəsində qövs, çevrə, çoxbucaqlı və ya çəkilmiş əyrini seçin və Obyekt məlumatında {{ui:Əyri obyekt yaradın}} basın. Çəkilmiş xətlər qalır.

## Nöqtələri redaktə edin

Redaktə etmək üçün əyri obyektə iki dəfə klikləyin (və ya onu seçin və {{ui:Əyri}} seçin).

- Nöqtə və ya tutacağa klikləyin ({{key:Shift}} əlavə edir və ya çıxarır); köçürmək üçün sürükləyin. Boş yerdə sürükləyərək qutu ilə seçin.
- {{ui:Uzat}} ({{key:E}} və ya {{key:Ctrl}}+klik) seçilmiş ucdan sonra, kursorda bir nöqtə əlavə edir.
- {{ui:Bölün}} ({{key:W}}) seçilmiş qonşu cütlərin hər arasına nöqtə qoyur; Bézier forması saxlayır.
- {{ui:Köçür}}, {{ui:Çevir}}, {{ui:Miqyas}} seçilmiş nöqtələri kursorla hərəkət etdirir (modeler düymələri {{key:G}} {{key:R}} {{key:S}}, push/pull düymələri {{key:M}} {{key:Q}} {{key:S}}); saxlamaq üçün klikləyin, ləğv etmək üçün {{key:Esc}}.
- {{ui:Bağla}} ({{key:C}}) açıq splineni bağlayır və ya bağlını açır; {{ui:Tərs çevir}} ({{key:Shift+R}}) onu əks istiqamətdə işlədir.
- Bézier tutacaqları: {{ui:Hamar}} ({{key:V}}) onları hamar əyri üçün yerləşdirir, {{ui:Künc}} ({{key:Shift+V}}) onları qonşulara yönəldir, {{ui:Sərbəst}} ({{key:Alt+V}}) onları qoyduğunuz yerdə saxlayır. Tutacağı sürükləmək onu sərbəst edir.
- {{ui:Bézier}}, {{ui:NURBS}} və {{ui:Poli}} seçilmiş splinelərin növünü dəyişir, nöqtələri saxlayaraq.

Hər dəyişiklik bir geri qaytarma addımıdır.

## Forma

Parametrlər panelindədir (və Model iş sahəsində Obyekt məlumatında):

- **Forma:** 3D əyrilər istənilən istiqamətə gedir; düz əyri öz müstəvisində qalır və doldurula bilər.
- **Qapalı splinələri doldurun** (düz): konturlar lövhəyə çevrilir; başqası içindəki kontur deşikdir, beləliklə hərflər öz deşiklərini saxlayır.
- **Ekstrüziya:** zolağın enin yarısı (açıq və ya 3D əyrilər), və ya lövhənin qalınlığının yarısı (doldurulmuş).
- **Skos dərinliyi** və **yumrulluq**: əyri boyunca yumru boru (ekstrüziya ilə: yumru zolaq); doldurulmuş formada yumru kənar.
- **Ucları bağlayın:** açıq boruda qapaqlar.
- **Boyunca daraltma:** hər spline boyunca bərabər miqyaslayır, məsələn buynuz üçün `1, 0.2`, qamış üçün `0, 1, 0`.
- **Hamarlıq** və NURBS üçün **dərəcə**: nə qədər incə çəkildiyi və nə qədər hamar olduğu (2 düz … 6 ən hamar).
- Nöqtələr seçilmiş halda: **radius** (orada borunun qalınlığı, skosla vurulmuş), **əyilmə** (zolağı əyri ətrafında fırladır) və NURBS üçün **çəki**.

Modifikatorlar əyri obyektin üstündə meş kimi işləyir: boyunca Massiv, Güzgü, Subdivision səthi. Bax [Meşdə modifikatorlar](topic:modifiers).

## Meşə çevirin

{{ui:Meşə çevir}} (Əyri iş sahəsində və ya Obyekt məlumatında, {{ui:Əyridən meşə}}) əyri obyekti hal-hazırda göstərdiyi meşə çevirir; onun modifikatorları üstündə qalır. Sonra Meş iş sahəsində redaktə edin. Geri qaytarma onu geri çevirir.

Bax həmçinin [Meşlər](topic:meshes) və [Meşi redaktə edin](topic:mesh-edit).
