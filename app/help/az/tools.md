---
title: Alət siyahısı
summary: Hər ModelCraft aləti, klavişi, hər klikin nə etdiyi və alət işləyərkən dəyər qutusuna nə yaza biləcəyiniz.
keywords: alətlər, alət paneli, əmrlər, siyahı, xətt, düzbucaqlı, çevrə, çoxbucaqlı, ofset, qövs, əyri, spline, məni izlə, süpürmə, 2 nöqtəli qövs, mərkəzdən qövs, seç, itələ/çək, köçür, fırlat, miqyas, silgi, ölçü lenti, ölçü, orbit, sürüşdür, yaxınlaşdır, komponent yerləşdir
from: e08a274f
---

Status panelindəki məsləhət həmişə cari alətin növbəti nə istədiyini göstərir. {{key:Esc}} alətin ortasında olduğu işi ləğv edir.

## Çəkmə alətləri

| Alət | Klaviş | Kliklər | Dəyər qutusuna yazın |
|---|---|---|---|
| {{ui:Xətt}} | {{key:L}} | Başlanğıc, sonra hər növbəti nöqtə. Üz bağlananda və ya {{key:Esc}} basanda dayanır | Göstərici tərəfə uzunluq; `[x,y,z]` nöqtə; `<dx,dy,dz>` ofset ({{ui:Uzunluq}}) |
| {{ui:Düzbucaqlı}} | {{key:R}} | Birinci künc (yer və ya üz), qarşı künc | En və dərinlik: `4m,3m` ({{ui:Ölçülər}}) |
| {{ui:Çevrə}} | {{key:C}} | Mərkəz (yer və ya üz), kənarda bir nöqtə | İlk klikdən əvvəl: tərəflər, `24s` və ya `24` ({{ui:Tərəflər}}). Sonra: radius ({{ui:Radius}}) |
| {{ui:Çoxbucaqlı}} | {{key:N}} | Mərkəz, künc | Çevrə ilə eyni; 6 tərəflə başlayır |
| {{ui:Qövs}} | {{key:A}} | Başlanğıc, son, sonra qabarıqlıq | Başlanğıcdan sonra akkordun uzunluğu ({{ui:Uzunluq}}); sondan sonra qabarıqlıq ({{ui:Qabarıqlıq}}); seqmentlər üçün `12s` |
| {{ui:Transportir}} | — | Mərkəz, 0° nöqtəsi, sonra bucaq | Dərəcə ilə bucaq ({{ui:Bucaq}}) |
| {{ui:Məni izlə}} | — | Yol seçin, sonra üzü klikləyin (və ya üzü, sonra yolun kənarını) | — |
| {{ui:Boya}} | {{key:B}} | Üz, qrup və ya komponent | — ({{key:Ctrl}} birləşmiş, {{key:Shift}} həmin rəngin hamısı, {{key:Alt}} rəng götür) |
| {{ui:Ofset}} | {{key:F}} | Üz (və ya əvvəl üz və ya kənarları seçin), sonra tərəf və məsafə | Məsafə ({{ui:Məsafə}}); üzün içinə doğru olan istiqamət daxilidir |
| {{ui:Əyri}} | — | Əyrinin keçdiyi nöqtələr; {{key:Enter}} və ya ikiklik bitirir | Göstərici boyunca uzunluq, növbəti nöqtə üçün `[x,y,z]` və ya `<dx,dy,dz>` |
| {{ui:Qövsün mərkəzi}} | — | Mərkəz, başlanğıc, sonra son | Mərkəzdən sonra radius; başlanğıcdan sonra dərəcə ilə bucaq; seqmentlər üçün `12s` |

## Redaktə alətləri

| Alət | Klaviş | Kliklər | Dəyər qutusuna yazın |
|---|---|---|---|
| {{ui:Seç}} | {{key:Space}} | Klik, ikiklik, üçklik, qutu sürükləmə. Bax: [Əşyaları seçin](topic:select) | Bir ölçü və ya kənar seçiləndə: yeni uzunluq, model ölçüsünü dəyişir |
| {{ui:İtələ/çək}} | {{key:P}} | Üz, sonra məsafə. Son məsafəni təkrarlamaq üçün üzü ikiklikləyin | Məsafə; mənfi əks istiqamətə gedir ({{ui:Məsafə}}) |
| {{ui:Köçür}} | {{key:M}} | Nöqtədən nöqtəyə. Kopyalamaq üçün {{key:Ctrl}} və ya {{key:Alt}} basılı saxlayın | Göstərici tərəfə məsafə, `<dx,dy,dz>` və ya `[x,y,z]` ({{ui:Məsafə}}). Kopyadan sonra: `3x` və ya `/3` |
| {{ui:Fırlat}} | {{key:Q}} | Mərkəz (üzdə onun müstəvisində döndərmək üçün), başlanğıc istiqamət, son istiqamət | Dərəcə ilə bucaq ({{ui:Bucaq}}) |
| {{ui:Miqyas}} | {{key:S}} | Qalan nöqtə, istinad nöqtəsi, yeni ölçü | Əmsal: `2`, `0.5` ({{ui:Miqyas}}) |
| {{ui:Silgi}} | {{key:E}} | Kənarlar, qruplar, bələdçilər və ölçülər üzərində klik və ya sürükləmə | heç nə |
| {{ui:Ölçü lenti}} | {{key:T}} | Kənardan: paralel bələdçi xətt. Nöqtədən: ölçür və bələdçi nöqtə qoyur | Ofset ({{ui:Ofset}}) və ya məsafə ({{ui:Uzunluq}}) |
| {{ui:Ölçü}} | {{key:D}} | İki künc (və ya bir kənar), sonra ölçü xətti harada olsun. Bax: [Ölçü və ölçünü dəyişmək](topic:dimensions) | Ofset ({{ui:Ofset}}). Dərhal sonra: yeni uzunluq, model ölçüsünü dəyişir |

{{ui:Köçür}}, {{ui:Fırlat}} və {{ui:Miqyas}} seçilmiş əşyalar üzərində işləyir. Heç nə seçilməyibsə, əvvəl klik etdiyinizi götürürlər (üz onun kənarlarını gətirir).

## Kamera alətləri

| Alət | Klaviş | Sürükləmək üçün |
|---|---|---|
| {{ui:Orbit}} | {{key:O}} | Göstərici altındakı modelin hissəsi ətrafında dönün ({{key:Shift}} sürüşdürür) |
| {{ui:Sürüşdür}} | {{key:H}} | Görünüşü sürüşdürün |
| {{ui:Yaxınlaşdır}} | {{key:Z}} | Yaxınlaşdırın: yuxarı yaxınlaşdırır, aşağı uzaqlaşdırır |
| {{ui:Hüdudlar}} | {{key:Shift+Z}} | (düymə, alət deyil) Bütün modeli sığdırın |

Siçanla bunlara az ehtiyacınız olur: orta düyməni sürükləmək orbit edir, sağ düyməni sürükləmək sürüşdürür, çarx isə istənilən alətlə yaxınlaşdırır. Bax: [Orbit, sürüşdür və yaxınlaşdır](topic:orbit-pan-zoom).

## Təşkil edin

| Düymə | Klaviş | Nə edir |
|---|---|---|
| {{ui:Komponent}} | {{key:G}} | Seçimi komponentə çevirir |
| {{ui:Qrup}} | {{key:Shift+G}} | Seçimi qrupa çevirir |
| {{ui:Parçalayın}} | yoxdur | Seçilmiş qrup və komponentləri yenidən sərbəst həndəsəyə çevirir |

## Komponent yerləşdir

Alətlər panelində deyil: {{ui:Komponentlər}} panelində komponentin yanındakı {{ui:Yerləşdir}} klikləyin. Komponentin başlanğıc nöqtəsinin olacağı yerdə bir dəfə klikləyin; alət sonra {{ui:Seç}} alətinə qayıdır.
