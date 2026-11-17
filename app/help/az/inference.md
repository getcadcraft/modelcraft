---
title: Yönlər və yapışdırma
summary: Rəngli işarələrin nə demək olduğu, hansı tutmanın üstün gəldiyi və ox klavişləri və ya Shift ilə istiqaməti necə kilidləmək.
keywords: yön, tutma, yapışdırma, son nöqtə, orta nöqtə, üzün mərkəzi, mərkəz, kənar üzrə, üz üzrə, ox, qırmızı ox, yaşıl ox, göy ox, paralel, perpendikulyar, kilid, shift, osnap
from: e78984e9
---

Çəkmə və ya redaktə aləti işləyərkən ModelCraft göstəricinin altına baxır və yaxınlıqdakı ən faydalı şeyə tutulur. İşarə nəyi tapdığını göstərir, sol aşağıdakı ucluq onu adlandırır.

## İşarələr və ucluqlar

| Ucluq | İşarə | Tutulur |
|---|---|---|
| Son nöqtə | Yaşıl dairə | Kənarın sonu |
| Orta nöqtə | Firuzəyi dairə | Kənarın ortası |
| Üzün mərkəzi | Göy dairə | Göstəricinin altındakı üzün ortası |
| Bələdçi nöqtəsi | Boz | Ölçü lentinin qoyduğu bələdçi nöqtəsi |
| Başlanğıc | Sarı-qəhvəyi | Qırmızı, yaşıl və göy oxların kəsişdiyi yer |
| Qırmızı ox üzrə / Yaşıl ox üzrə / Göy ox üzrə | Həmin rəngdə xətt | Başlanğıc nöqtənizdən həmin istiqamət üzrə xətt |
| Kənara paralel / Kənara perpendikulyar | Çəhrayı xətt | Başlanğıc nöqtənizdən yadda qalmış kənara paralel və ya perpendikulyar xətt (aşağıya baxın) |
| Kilidlənib | Çəhrayı xətt | Ox klavişi və ya {{key:Shift}} ilə kilidlədiyiniz istiqamət |
| Kənar üzrə | Qırmızı kvadrat | Kənar boyunca istənilən yerdə |
| Bələdçi üzrə | Boz | Bələdçi xətti boyunca istənilən yerdə |
| Üz üzrə | Göy romb | Üzün istənilən yerində |
| Müstəvi üzrə | yoxdur | Boş yerdə göstərici olduqda başladığınız müstəvi |
| Torpaq üzrə | yoxdur | Başqa heç nə olmadıqda, torpaq (qırmızı-yaşıl müstəvi) |

Başlanğıc nöqtənizdən ox xətti kənarı və ya bələdçini kəsdikdə, ModelCraft kəsişməyə tutulur və ucluq hər ikisini adlandırır, məsələn "Qırmızı ox üzrə, kənar üzrə".

## Hansı tutma üstün gəlir

1. Təxminən 12 piksel daxilində **nöqtələr**: əvvəlcə son nöqtələr, sonra bələdçi nöqtələri, orta nöqtələr, göstəricinin altındakı üzün mərkəzi və başlanğıc.
2. Başlanğıc nöqtəsindən **istiqamətlər**: qırmızı, yaşıl və göy oxlar və yadda qalmış kənara paralel və ya perpendikulyar.
3. **Kənar** və ya bələdçi xətti üzrə.
4. **Üz** üzrə.
5. **Çəkiliş müstəvisi** və ya torpaq.

Üzün arxasında gizli olan şeylərə heç vaxt tutulmur. İstədiyiniz nöqtəni görmək üçün Orbit edin.

## Nöqtədən üzün üzərində çəkmək

Künc, orta nöqtə, kənar və ya üzün mərkəzindən başladılmış {{ui:Düzbucaqlı}}, {{ui:Çevrə}} və ya {{ui:Çoxbucaqlı}} **göstəricinin altındakı üzün müstəvisində** çəkilir və həmin üzü kəsir. Kənar iki üzə aiddir, ona görə kənarın hansı tərəfində göstəricinin olduğu seçim edir: uzun qutunun ucunda çəkmək üçün kənarlarından birinin ortasından başlayın, göstərici ucluq üzünün daxilində olsun.

## Paralel və perpendikulyar

ModelCraft ilk klikdən əvvəl göstəricinin keçdiyi **son kənarı** yadda saxlayır. Künc və ya kənarda başlamaq həmin kənardan keçmək sayılır. Alət işə başladıqdan sonra üzərindən keçdiyiniz digər kənarlar onu əvəz etmir.

Mövcud kənara paralel xətt çəkmək üçün:

1. {{key:L}} basın və uyğunlaşdırmaq istədiyiniz kənarın üzərində gəzin.
2. Başlanğıc nöqtəsinə keçin, mümkünsə digər kənarları keçmədən, və klikləyin.
3. Həmin kənara paralel istiqamətə keçin. Xətt çəhrayı olur və ucluq "Kənara paralel" yazır. Perpendikulyar da eyni qaydada işləyir, çəkdiyiniz müstəvi daxilində.

Əgər yanlış kənar yadda qalıbsa, {{key:Esc}} basın, düzgün kənarın üzərində gəzin və yenidən başlayın.

## İstiqaməti kilidləyin

Alətin ilk klikindən sonra növbəti nöqtəni bir xətt üzərində saxlaya bilərsiniz:

| Klavişi | Kilidlənir |
|---|---|
| {{key:Right}} | Qırmızı ox |
| {{key:Left}} | Yaşıl ox |
| {{key:Up}} | Göy ox (düz yuxarı) |
| {{key:Down}} | Yadda qalmış kənara paralel (yuxarıya baxın) |

Kilidi açmaq üçün eyni oxa yenidən basın. Status sətri yazır: "Qırmızı oxa kilidlənib. Kilidi açmaq üçün eyni oxu basın."

Kilidlənmiş halda nöqtə göstəricinin olduğu yerə doğru xətt boyunca sürüşür və siz üzərindən keçdiyiniz nöqtələrlə də hizalanır: başqa qutunun küncünə göstərin ki, qırmızı istiqamətdə həmin künc qədər dəqiq xətt çəkəsiniz.

**{{key:Shift}}** hazırda tutulduğunuz istiqaməti (ox və ya paralel) siz onu basılı saxladığınız müddətcə kilidləyir. Buraxanda kilid açılır.

Kilidlər {{ui:Xətt}}, {{ui:Düzbucaqlı}}, {{ui:Çevrə}}, {{ui:Çoxbucaqlı}}, {{ui:Köçür}}, {{ui:Miqyas}} və {{ui:Ölçü lenti}} alətlərində işləyir. İlk klikdən əvvəl ox klavişləri əvəzinə görünüşü Orbit edir.

## Qrupun içində

Qrup və ya komponentin içində redaktə edərkən oxlar həmin qrupun öz oxlarıdır (qrupla birlikdə hərəkət edir və fırlanıbsa, onunla birlikdə dönür). Tutma hələ də qrupdan kənardakı nöqtələri və kənarları tapır, beləliklə modelin qalan hissəsi ilə hizalaya bilərsiniz.
