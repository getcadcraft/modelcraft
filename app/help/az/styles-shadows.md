---
title: Üslublar və günəş kölgələri
summary: Modeli kölgəli, gizli xətlər kimi, məftil kadr və ya şəffaf göstərin, istənilən tarix, vaxt və yerdə onun saldığı kölgələri öyrənin.
keywords: təqdimat görünüşü, təmiz görünüş, bələdçiləri gizlət, oxları gizlət, üslub, kölgəli, gizli xətt, məftil kadr, rentgen, kənarlar, kölgələr, günəş, günəş tədqiqi, tarix, vaxt, enlik, uzunluq, UTC ofset, şimal
from: 09c95329
---

Sağdakı {{ui:Üslub}} paneli modelin necə çəkildiyini dəyişir. Onun heç bir hissəsi modelin özünü dəyişmir və geri qaytarmaya daxil deyil. Hər [səhnə](topic:scenes) öz üslubunu yadda saxlayır, fayl isə saxladığınız zamankı üslubu yadda saxlayır.

## Üzlər

{{ui:Üzlər}} siyahısından birini seçin:

| Üslub | Görünüşü |
|---|---|
| {{ui:Kölgəli}} | Yumşaq işıqlandırılmış bərk üzlər. Arxadan görünən üzlər mavi-boz olur. İdxal edilmiş rənglər görünür. |
| {{ui:Gizli xətt}} | Üzlər fon rəngində, kənarlar mürəkkəb rəngində: gizli xətlər çıxarılmış təmiz xətt rəsmi. {{ui:Kağız}} üzərində ağ, {{ui:Model}} üzərində tünd. |
| {{ui:Məftil kadr}} | Yalnız kənarlar. Üzlər çəkilmir, lakin klikləyəndə və tutanda hesaba qatılır: onların arxasından seçə bilməzsiniz. |
| {{ui:Rentgen}} | Şəffaf üzlər, arxasında və ya içində nə olduğunu görmək üçün. Məftil kadrda olduğu kimi, kliklər və tutmalar ən yaxın üzdə dayanır. |

{{ui:Kənarları göstər}} kənarları {{ui:Məftil kadr}} istisna olmaqla hər üslubda yandırır və söndürür. Söndürülmüş halda {{ui:Gizli xətt}} demək olar ki, heç nə göstərmir, çünki üzləri fonla üst-üstə düşür. Yumşaq kənarlar, məsələn {{ui:İtələ/çək}} ilə çəkilmiş dairənin yanları, heç vaxt çəkilmir.

## Günəş kölgələrini yandırın

1. {{ui:Günəş kölgələri}} qutusunu işarələyin. Altındakı günəş parametrləri aktiv olur və model özünün və yerin üzərinə kölgə salır.
2. Yeri təyin edin:
   - {{ui:Enlik}}: şimal müsbət, cənub mənfi (Nyu-York təxminən 40.7, Sidney təxminən -33.9).
   - {{ui:Uzunluq}}: şərq müsbət, qərb mənfi (Nyu-York təxminən -74.0).
   - {{ui:UTC ofset}}: saytın UTC-dən ofseti saatla, məsələn qış aylarında Nyu-York üçün `-5`. ModelCraft yay vaxtını tətbiq etmir; yayda Nyu-York üçün `-4` yazın.
3. {{ui:Tarix}} (ay və gün) təyin edin və {{ui:Vaxt}} sürgüsünü sürükləyin. Vaxt 15 dəqiqəlik addımlarla dəyişir və sürgünün yanında göstərilir, məsələn "3:00 pm".

Parametrlərin altındakı xətt günəşin harada olduğunu deyir, məsələn "Günəş 52° yüksəkdə, şimaldan 250°. Şimal yaşıl oxdur." Gecə isə "Bu vaxt günəş batıb." yazır.

Yeni model günəşlə 21 iyun, saat 3:00 pm, enlik 40, uzunluq -105, UTC ofset -7 ilə başlayır.

## Modeli şimala istiqamətləndirin

ModelCraft-ın şimalı həmişə **yaşıl ox** boyuncadır. Real sahəni öyrənmək üçün modeli elə döndərin ki, onun şimal tərəfi yaşıl boyunca baxsın: hər şeyi seçin ({{key:Mod+A}}), {{key:Q}} basın, yerdə mərkəz klikləyin və sahənin şimaldan bucağı qədər döndərin (bax: [Fırlatma və miqyas](topic:rotate-scale)).

## Günəş tədqiqi

1. Yeri və tarixi təyin edin.
2. {{ui:Səhnələr}} bölməsində {{ui:Səhnə əlavə et}} ilə səhnə əlavə edin.
3. Vaxt sürgüsünü hərəkət etdirin, sonra başqa səhnə əlavə edin. İstədiyiniz hər saat üçün təkrarlayın.
4. Səhnələr arasında keçmək üçün {{ui:Oynat}} klikləyin. Bax: [Görünüşləri səhnələr kimi saxlayın](topic:scenes).

## Bilmək lazım olanlar

- Çox böyük modeldə kölgələr dişli görünə bilər, çünki bir kölgə xəritəsi bütün modeli əhatə edir.
- Kölgələr {{ui:Məftil kadr}}da çəkilmir.
- Günəşin vəziyyəti NOAA günəş hesablamasını izləyir və bir dərəcənin bir hissəsi qədər dəqiqdir, kütlə tədqiqi üçün kifayətdir. Atmosfer refraksiyası nəzərə alınmır, buna görə gün çıxarkən və batarkən çox alçaq bucaqlar bir az səhv ola bilər.

## Təqdimat görünüşü

{{ui:Görünüşlər}} › {{ui:Təqdimat görünüşü}} (və ya {{key:Shift+P}}) yalnız modeli göstərir: oxlar, bələdçi xətləri və bələdçi nöqtələri, kəsik müstəvilərinin konturları (kəsik qalır), lampaların işarələri, açıq qrupun qutusu, tutma işarələri və məsləhətləri və seçim işıqlandırması yox olur. Modeli aydın görmək və ya ekran görüntüsündən əvvəl istifadə edin. Alətlər işləməyə davam edir və yenə də tutur; sadəcə işarələri görmürsünüz. Onları geri qaytarmaq üçün {{key:Shift+P}} yenidən basın. Ölçülər qalır, çünki çertyojun bir hissəsidir. Qrupun içində redaktə edərkən modelin qalan hissəsi artıq solmur: olduğu kimi, teksturalarla birlikdə göstərilir.
