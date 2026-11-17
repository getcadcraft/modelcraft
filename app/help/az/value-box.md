---
title: Dəyər qutusunda dəqiq ölçüləri yazın
summary: Uzunluqların, ölçülərin, nöqtələrin, ofsetlərin, bucaqların, tərəflərin və nüsxələrin bütün yazılış üsulları və vahidlərin və vahidsiz ədədlərin necə oxunduğu.
keywords: dəyər qutusu, ölçü qutusu, vcb, yazmaq, dəqiq, ölçü, uzunluq, vahidlər, futlar, düymlər, metrik, millimetrlər, koordinatlar, ofset, massiv, tərəflər, bucaq, onluq vergül
from: 0148dc3d
---

Dəyər qutusu aşağıda, status sətrində yerləşir və etiketi alətlə dəyişir. Siz işləyərkən o, canlı ölçünü göstərir; istənilən vaxt dəqiq ölçü yaza bilərsiniz.

## Necə yazmaq

1. Əməliyyata klikləməklə başlayın (birinci künc, üz, köçürüləcək nöqtə).
2. Yazın. Dəyər qutusuna klikləməyə ehtiyac yoxdur: rəqəm və ya `. , - ' " [ < * /` simvollarından biri yazınızı oraya göndərir.
3. {{key:Enter}} basın.

Dəyər qutusunda {{key:Esc}} basın ki, onu təmizləyib görünüşə qayıdın. Sensor ekranda klaviaturanı açmaq üçün dəyər qutusuna toxunun.

ModelCraft yazdığınızı oxuya bilmirsə, status sətri deyir: "Uzunluq yazın, məsələn 3m, 10'6" və ya 4m,3m." Alət ondan istifadə edə bilmirsə, deyir: "Bu işləmədi: …", səbəbi ilə.

## Uzunluqlar

| Yazın | Mənası |
|---|---|
| `3m` `320cm` `3200mm` | Metr, santimetr, millimetr |
| `10'` `10ft` `10 feet` | Fut |
| `6"` `6in` `6 inches` | Düym |
| `10'6"` `10' 6"` `10'-6 1/2"` | Fut və düym, kəsrlə |
| `6 1/2"` `6-1/2"` `3/4"` | Düym, kəsrlə |
| `1.5ft` `.5m` | Vahidi olan onluq kəsrlər |
| `120` | Vahidsiz ədəd, modelin vahidində |

**Vahidsiz ədəd modelin vahidindən istifadə edir**, seçicidə sağ altda göstərildiyi kimi: futlu və düymlü modeldə düymlə (yəni `120` 10 futdur), millimetrli modeldə millimetrlə və s. Vahidi yazmaq həmişə üstünlük təşkil edir, modelin vahidi nə olursa olsun. Əyri dırnaqlar və prim işarələri (’ ” ′ ″) da fut və düym kimi oxunur.

:::warning
Onluq kəsrlər üçün həmişə **nöqtə** işlədin: `2.5m`. Vergül iki dəyəri ayırır, yəni `2,5` 2 və 5 deməkdir (iki dəyər), dil parametrləriniz necə olursa olsun.
:::

## Hesablamalar

İstənilən uzunluq hesablama ola bilər: toplamaq üçün `+`, çıxmaq üçün `-`, vurmaq üçün `*`, bölmək üçün `/`, və mötərizə. Kalkulyator lazım deyil.

| Yazın | Mənası |
|---|---|
| `2.5/3` | 2.5-in üçdə biri (modelin vahidində) |
| `12'6"+3/4"` | 12' 6 3/4" |
| `(24'-0")/3` | 8' |
| `2*450mm` | 900 mm |
| `4+7/16` | Futlu və düymlü modeldə 4 7/16" |
| `3m-25cm` | 2.75 m |

Vahidsiz ədəd uzunluq olduqda modelin vahidindədir (`2.5/3` metrli modeldə 0.833 m-dir), vuruc kimi olduqda isə sadə vuruc (`2*450mm`). Bucaqlar və vuruclar da hesablama qəbul edir: `90/2` 45°-dir. İki uzunluq vurulanda sahə alınır, uzunluq deyil, ona görə `2m*3m` rədd edilir.

ModelCraft hesablaya bilmirsə, status sətri nəyin səhv olduğunu və harada olduğunu deyir, məsələn "Sıfıra bölmə (simvol 4)." Mötərizə də dəyər qutusunu başladır, ona görə `(` ilə başlaya bilərsiniz.

Bunlar öz mənalarını saxlayır: nüsxədən sonra `/3`, `3x` və `*3`, tərəflər üçün `24s`, və kənar seçiləndə `/3` (kənarı [bölür](topic:divide)).

## Alətlər üzrə

| Alət | Etiket | Yazın |
|---|---|---|
| {{ui:Xətt}} | {{ui:Uzunluq}} | Uzunluq (göstəricinin istiqamətində), və ya nöqtə və ya ofset (aşağıda) |
| {{ui:Düzbucaqlı}} | {{ui:Ölçülər}} | İki uzunluq: `4m,3m`, `12',10'`. Nöqtəli vergül də işləyir: `4m;3m` |
| {{ui:Çevrə}}, {{ui:Çoxbucaqlı}} | {{ui:Tərəflər}}, sonra {{ui:Radius}} | İlk klikdən əvvəl tərəflərin sayı: `12s` və ya `12` (3-dən 999-a). Ondan sonra radius |
| {{ui:İtələ/çək}} | {{ui:Məsafə}} | Uzunluq. Mənfi olanı əks istiqamətə gedir |
| {{ui:Köçür}} | {{ui:Məsafə}} | Uzunluq (göstəricinin istiqamətində), və ya nöqtə və ya ofset. Nüsxədən sonra: `3x`, `*3`, `/3` |
| {{ui:Fırlat}} | {{ui:Bucaq}} | Dərəcələr: `90`, `-45`, `22.5` |
| {{ui:Miqyas}} | {{ui:Miqyas}} | 0-dan böyük vuruc: `2`, `0.5`, `1.25` |
| {{ui:Ölçü lenti}} | {{ui:Ofset}} və ya {{ui:Uzunluq}} | Uzunluq |
| {{ui:Bölün}} | {{ui:Hissələr}} | Neçə bərabər hissə: `5`, `5s` və ya `/5` (2-dən 1000-ə). Bax: [Kənarı və ya əyrini bərabər hissələrə bölün](topic:divide) |
| {{ui:Ölçü}} | {{ui:Ofset}}, sonra {{ui:Uzunluq}} | Ölçü xəttinin hara getdiyi; yerləşdirdikdən dərhal sonra yeni uzunluq modeli ölçüsünə uyğunlaşdırır |
| {{ui:Seç}} | {{ui:Dəyər}} | Bir ölçü və ya kənar seçiləndə yeni uzunluq modeli ölçüsünə uyğunlaşdırır. Bax: [Ölçü və ölçüyə uyğunlaşdırma](topic:dimensions) |

## Nöqtələr və ofsetlər

{{ui:Xətt}} və {{ui:Köçür}} üçün birinci klikdən sonra:

- `[x,y,z]` modeldə həmin dəqiq nöqtəyə gedir (qrupun öz oxlarında, qrupun içində redaktə edəndə). Misal: `[0,0,3m]` başlanğıcdan 3 m düz yuxarıdır.
- `<dx,dy,dz>` birinci nöqtədən qırmızı, yaşıl və mavi oxlar boyunca bu qədər uzaqdadır. Misal: `<0,0,10'>` 10 fut düz yuxarıdır.

Üç dəyərin hər birinin öz vahidi ola bilər: `<12',0,6">`.

## Köçürdükdən sonra nüsxələr

{{ui:Köçür}} ilə nüsxə çıxarandan dərhal sonra:

| Yazın | Yaradır |
|---|---|
| `3x` və ya `*3` | Eyni məsafədə ardıcıl 3 nüsxə |
| `/3` | Orijinaldan birinci nüsxəyə qədər bərabər yayılmış 3 nüsxə |

Ən çox 500 nüsxə. Bax: [Köçürün, kopyalayın və massivlər yaradın](topic:move-copy#a-row-of-copies).

## Yazılmış uzunluq istiqamət tələb edir

Tək yazılmış uzunluq göstəricinin birinci klikdən işarə etdiyi istiqamətə gedir. Klikdən dərhal sonra, heç hərəkət etmədən yazsanız, hələ istiqamət yoxdur və heç nə olmur. Göstəricini istədiyiniz istiqamətə bir az hərəkət etdirin, sonra yazın.

## Modelin vahidi

Sağ altdakı seçicidə vahidi dəyişin: {{ui:ft və in}}, in, ft, yd, mi, mil, µm, mm, cm, m və ya km, {{ui:Parametrlər}} › {{ui:Ümumi}} › {{ui:Vahidlər}} bölməsində yandırdığınız qədər (modelin öz vahidi həmişə mövcuddur). İstənilən vahidin işarəsi ilə yazılmış uzunluq həmin vahiddə oxunur. Bax: [Vahidlər, yazılmış dəyərlər və vahid siyahıları](common:unit-lists). Bu yalnız uzunluqların göstərilməsini və vahidsiz ədədlərin oxunmasını dəyişir; model eyni ölçüdə qalır. Vahid faylda saxlanılır.

Ölçülərin göstərilməsi:

| Vahid | Uzunluqlar | Sahələr | Həcmlər |
|---|---|---|---|
| {{ui:ft və in}} | `10' 6 1/2"` (1/16"-ə qədər) | kv ft | kub ft |
| in | `126 1/2"` | kv in | kub in |
| m | `3.2 m` | m² | m³ |
| cm | `320 cm` | cm² | cm³ |
| mm | `3200 mm` | 0.01 m²-dən m², əks halda mm² | 0.01 m³-dən m³, əks halda mm³ |

Yeni model futlu və düymlü rejimdə başlayır, brauzerin dili ABŞ regionuna təyin olunduqda (və Liberiya və Myanma), hər yerdə isə millimetrdə. {{ui:Parametrlər}} › {{ui:Ümumi}} › {{ui:Vahidlər}} bölməsində ulduzlanmış vahid əvəzinə istifadə olunur, ModelCraft ona malik olduqda. Və ya {{ui:Yeni}} sonra seçicini dəyişin.
