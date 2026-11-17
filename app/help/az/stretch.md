---
title: Uzanan komponentlər
summary: Komponentin bir nüsxəsini enli, dərin və ya hündür edin, hissələri öz ölçülərini saxlasın: eyni ayaqlı uzun masa, rəfləri aralanmış daha hündür kitab şkafı, təkrarlanan dirəkli çəpər.
keywords: dinamik komponent, uzanma, komponentin ölçüsünü dəyiş, parametrik, adlandırılmış ölçülər, təkrar, massiv, ayaqlar, rəflər, çəpər, qaydalar, dəyişənlər
from: b4c40f43
---

Komponenti miqyaslamaq içindəki hər şeyi, ayaqları və çubuqları da böyüdür. **Bu nüsxəni uzat** komponentin enini, dərinliyini və ya hündürlüyünü dəyişir, hər hissə isə bir qaydaya uyğun hərəkət edir: masanın üst səthi böyüyür, ayaqları öz qalınlığını saxlayır və uclarda qalır.

Bu, hissələrdən, yəni komponentin içindəki qruplardan və ya komponentlərdən ibarət komponentlərlə işləyir; hər [başlanğıc kitabxanası](topic:starter) elementi də belədir.

## Nüsxəni uzadın

1. Komponenti seçin.
2. {{ui:Obyekt məlumatı}} bölməsində {{ui:Bu nüsxəni uzat…}} klikləyin.
3. Yeni {{ui:En (qırmızı)}}, {{ui:Dərinlik (yaşıl)}} və {{ui:Hündürlük (mavi)}} yazın və {{ui:Uzanma}} klikləyin.

Yalnız həmin nüsxə dəyişir: o, öz komponentinə çevrilir və hansı orijinaldan gəldiyini yadda saxlayır. İstənilən vaxt yenidən uzada bilərsiniz; o, orijinaldan yenidən hesablanır, beləliklə heç nə sürüşmür. Orijinalın digər nüsxələri olduğu kimi qalır.

## Qaydalar

Komponenti açın (ikiklikləyin) və hissələrindən birini seçin. {{ui:Obyekt məlumatı}} qırmızı, yaşıl və mavi boyunca qaydası ilə {{ui:Komponent uzananda}} göstərir:

| Qayda | Hissə nə edir | Məsələn |
|---|---|---|
| {{ui:Uzanma}} | Komponentlə birlikdə böyüyür; hər iki tərəfə məsafəsi qalır | Masanın üst səthi |
| {{ui:Başlanğıcda qal}} / {{ui:Sonunda qal}} | Ölçüsünü və həmin tərəfə məsafəsini saxlayır | Ayaqlar |
| {{ui:Mütənasib köçür}} | Ölçüsünü saxlayır; ortası mütənasib köçür | Rəflər, qapı dəstəyi |
| {{ui:Mütənasib miqyaslandır}} | Yeri və ölçüsü mütənasib dəyişir | Pilləkənin pillələri |
| {{ui:Təkrar}} | Onun surətləri, hər {{ui:Hər}} aralıqla, başladığı yerdən uzaq tərəfə qədər | Çəpərin dirəkləri |

{{ui:Avtomatik}} (başlanğıc) bunu özü müəyyən edir və hansının seçildiyini göstərir: hissə komponenti tutursa {{ui:Uzanma}}, ortada təxminən yerləşirsə {{ui:Mütənasib köçür}}, əks halda daha yaxın olduğu tərəfdə qalır.

## Bilmək lazım olanlar

- Hissələrin öz formaları paylaşılır, buna görə uzadılmış nüsxə yüngüldür. Hissəni redaktə etsəniz, hər nüsxədə dəyişir.
- Uzadılmış nüsxə orijinalın sonradan dəyişdirilmiş qaydalarını və ya quruluşunu izləmir: onları gətirmək üçün yenidən uzadın.
- Komponentdə sərbəst çəkilmiş üzlər (hissənin içində deyil) ölçüsünü saxlayır; onların da izləməsi üçün hissəyə çevirin.
- Qaydalar və hər nüsxənin haradan uzadıldığı ModelCraft faylında saxlanılır.
