---
title: Ölçün və bələdçiləri yerləşdirin
summary: Uzunluqları və sahələri oxuyun, ölçü lenti ilə iki nöqtə arasını ölçün, üzərində çəkmək üçün bələdçi xətləri və nöqtələri yerləşdirin.
keywords: ölçmə, ölçü lenti, transportir, bucaq, bucaqlı bələdçi, bələdçi, bələdçi xətti, konstruksiya xətti, məsafə, ölçü, uzunluq, sahə, ofset, planlaşdırma, bələdçi nöqtəsi
from: de6d04d9
---

## Ölçmədən ölçüləri oxuyun

Bir şey seçin və {{ui:Obyekt məlumatı}} bölməsinə baxın:

- Kənar onun **uzunluğunu** göstərir.
- Üz onun **sahəsini** və neçə deşiyi olduğunu göstərir.
- Bir neçə üz **ümumi sahəni** göstərir.
- Qrup və ya komponent onun **ölçüsünü** (onu əhatə edən qutunun en × dərinlik × hündürlük) və əgər bağlı bərk cisimdirsə, **həcmini** göstərir.
- Heç nə seçilməyibsə, {{ui:Obyekt məlumatı}} bütün modelin ölçüsünü göstərir.

Uzunluqlar və sahələr sağ aşağıdakı seçicidəki vahidlə göstərilir. Millimetr modeli 0.01 m² və daha böyük sahələri kvadrat metrlə göstərir (4 × 3 m-lik otaq "12 m²" kimi oxunur).

Siz çəkərkən dəyər qutusu canlı uzunluğu, ölçünü, radiusu və ya məsafəni göstərir, ona görə də çəkdikdən sonra nadir hallarda ölçmək lazım gəlir.

Çəkdikdən sonra ölçünü dəyişmək üçün kənarı və ya qrupu seçin və {{ui:Obyekt məlumatı}} daxilində uzunluğu və ya ölçünü yenidən yazın. Və ya [ölçü](topic:dimensions) yerləşdirin və ona yeni uzunluq yazın.

## İki nöqtə arasını ölçün

1. Ölçü lenti üçün {{key:T}} basın.
2. Nöqtəyə klikləyin: künc, orta nöqtə, üzün üzərindəki nöqtə və ya torpaq. (Kənara klikləmək başqa iş görür; aşağıya baxın.)
3. İkinci nöqtəyə keçin. Ucluq və dəyər qutusu ({{ui:Uzunluq}}) məsafəni göstərir. Nöqtələrə və qırmızı, yaşıl və göy istiqamətlərə yapışır.
4. Klikləyin. Status sətri yazır: "Ölçüldü 4' 6"." və ikinci nöqtədə **bələdçi nöqtəsi** qalır.

Bələdçi nöqtəsini dəqiq məsafədə qoymaq üçün ilk klikdən sonra məsafəni yazın və {{key:Enter}} basın: o, göstərdiyiniz istiqamətə gedir.

## Bələdçi xətti yerləşdirin

Bələdçi xətti kəsikli, sonsuz xəttdir; kənara paraleldir və seçdiyiniz məsafədədir. Bələdçilərdən geri çəkilmə, mərtəbə hündürlüyü və ya pəncərənin başlanğıc yeri üçün planlama aparmaq üçün istifadə edin.

1. {{key:T}} basın.
2. **Kənarın** üzərinə klikləyin (ucuna yox). Ucluq "Kənar üzrə" yazır.
3. Bələdçinin getməli olduğu tərəfə kənardan uzaqlaşın. Kəsikli xətt kənara paralel izlənir və dəyər qutusu ({{ui:Ofset}}) məsafəni göstərir.
4. Klikləyin və ya ofseti yazıb {{key:Enter}} basın: `1.5m`, `5'`.

   Status sətri yazır: "Bələdçi xətti kənardan 1.5 m məsafədədir."

Mövcud bələdçi xəttindən başlamaq ona paralel başqa bələdçi yaradır, beləliklə bir bələdçidən şəbəkəni addım-addım çıxarmaq olur.

Kənardan əvvəl uzaqlaşmadan ofset yazsanız, ModelCraft hansı tərəfi nəzərdə tutduğunuzu bilə bilmir: "Hansı tərəfi göstərmək üçün əvvəlcə kənardan uzaqlaşın."

## Bucaqla bələdçi: Transportir

1. {{ui:Dəyişdirmə}} qrupunda {{ui:Transportir}} düyməsinə klikləyin.
2. Mərkəzə klikləyin: bələdçinin keçdiyi nöqtə. Üzün üzərində transportir həmin üzün üstünə düşür; başqa yerdə isə düz yatır. Bu klikdən sonra {{key:Right}}, {{key:Left}} və ya {{key:Up}} onu qırmızı, yaşıl və ya göy oxa düz qoyur (yenidən basaraq geri qaytarın).
3. 0° nöqtəsini təyin edən nöqtəyə klikləyin, məsələn kənar boyunca.
4. İstədiyiniz bucağa keçin və klikləyin: 15° addımlarla hizalanır. Və ya bucağı dərəcə ilə yazın, məsələn `22.5`, və {{key:Enter}} basın; bələdçi göstəricinin olduğu tərəfə gedir.

Bələdçi xətti mərkəzdən həmin bucaqla keçir. Dam meyli, kəsik künc və ya əyilmiş divar üçün onun boyunca {{ui:Xətt}} ilə çəkin.

## Bələdçilərə görə çəkin

Çəkmə alətləri bələdçi xətlərinə ("Bələdçi üzrə") və bələdçi nöqtələrinə ("Bələdçi nöqtəsi") yapışır, həmçinin bələdçi xətti oxlardan birinin istiqamətini kəsdiyi yerə. Dəqiq yerləşdirmək üçün düzbucaqlını iki bələdçinin kəsişdiyi yerdən başlayın.

## Bələdçiləri silin

- Bir bələdçi: onu {{ui:Seç}} ilə klikləyin və {{key:Delete}} basın, ya da {{ui:Silgi}} ilə klikləyin.
- Bütün bələdçilər: heç nə seçilməyibsə, {{ui:Obyekt məlumatı}} daxilində {{ui:Bütün bələdçiləri sil}} düyməsinə klikləyin.

Bələdçilər `.modelcraft` faylında saxlanılır. Digər formatlara ixrac olunmur.
