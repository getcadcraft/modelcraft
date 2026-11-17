---
title: Görünüşləri səhnə kimi saxlayın
summary: Kameranı və üslubu səhnə kimi saxlayın, səhnəni yeniləyin və adını dəyişin, dizayn təqdim etmək üçün səhnələr arasında addımlayın və ya oynadın.
keywords: səhnə, görünüş, saxlanılmış görünüş, kamera, təqdimat, animasiya, oynat, slayd şou, page up, page down, nişanlar, gəzinti
from: 38680d6e
---

**Səhnə** kameranın vəziyyətini, üslubu və gizlədilənləri yadda saxlayır: harada baxdığınız, perspektiv və ya paralel, üz üslubu, kənarlar, günəş parametrləri, gizlədilmiş qruplar, söndürülmüş teqlər və kəsik. Səhnələr `.modelcraft` faylında saxlanılır.

## Səhnə əlavə edin

1. Görünüşü qurun: fırladın, yaxınlaşdırın, üslub seçin, günəşi təyin edin.
2. Sağdakı {{ui:Səhnələr}} panelində {{ui:Səhnə əlavə et}} klikləyin.

   Səhnə siyahıda "Səhnə 1", "Səhnə 2" və s. adı ilə görünür və 3D görünüşün üstündə nişan kimi. Status sətri deyir: "Səhnə 1 saxlanıldı: bu kamera, üslub və gizlədilənlər."

## Səhnəyə keçin

- 3D görünüşün üzərindəki nişanına və ya {{ui:Səhnələr}} siyahısındakı adına klikləyin.
- Və ya növbəti səhnə üçün {{key:PageDown}}, əvvəlki üçün {{key:PageUp}} basın. Siyahının altındakı {{ui:Növbəti}} və {{ui:Əvvəlki}} eyni işi görür.

Kamera səhnəyə bir az yarım saniyədən çox ərzində sürüşür. Kompüteriniz hərəkəti azaltmağa qurulubsa, o, birbaşa oraya tullanır.

## Səhnəni dəyişin, adını dəyişin və ya silin

Siyahıdakı hər səhnənin adından sonra üç kiçik düyməsi var:

- **Yeniləmə** (dairəvi oxlar): cari kameranı, üslubu və gizlədilənləri həmin səhnəyə saxlayır. "Səhnə 2 yeniləndi."
- **Adı dəyiş** (qələm): "Səhnənin adını dəyiş" dialoqunu açır. Yeni adı yazın və {{ui:Saxla}} klikləyin.
- **Sil** (zibil qutusu): səhnəni silir. "Səhnə 2 silindi. Ctrl+Z onu geri qaytarır."

Səhnə əlavə etmək, yeniləmək, adını dəyişmək və silmək modeldəki dəyişikliklər kimi geri qaytarma addımlarıdır.

## Səhnənin kamerasını kilidləyin

Dizayn dəyişdikcə eyni görünüşü təkrar-təkrar render edəndə, səhvən hərəkət etməməsi üçün həmin səhnənin kamerasını kilidləyin.

1. {{ui:Səhnələr}} siyahısında səhnənin adından sonra **kilid** düyməsini (açıq asma kilid) klikləyin. O bağlanır və səhnənin 3D görünüşün üzərindəki nişanında kiçik asma kilid görünür. Status sətri deyir: "Səhnə 2: kamera kilidləndi."
2. Render etmək istədiyiniz zaman səhnəyə keçin: kamera saxlanmış görünüşə dəqiq qayıdır, ona görə ondan çəkilən şəkillər əvvəlkilərlə düzülür.

Kamera kilidli olanda **Yeniləmə** üslubu və gizlədilənləri səhnəyə yenə saxlayır, amma kamera yerində qalır, hətta siz onu fırlatmış olsanız belə. Kilidi açmaq üçün asma kiliddə yenidən klikləyin; sonra Yeniləmə cari görünüşü yenidən saxlayır. Kilidləmə və kilidi açma geri qaytarma addımlarıdır və kilid `.modelcraft` faylında saxlanılır.

## Təqdim edin

1. İki və ya daha çox səhnə əlavə edin.
2. Siyahının altında {{ui:Oynat}} klikləyin. ModelCraft hər bir neçə saniyədən bir növbəti səhnəyə keçir və sonuncudan sonra birinciyə qayıdır.
3. Dayandırmaq üçün {{ui:Dayandır}} (eyni düymə) klikləyin və ya {{key:Esc}} basın.

Günəş araşdırması üçün hər saat bir səhnə əlavə edin, yalnız {{ui:Vaxt}} dəyişdirilmiş, sonra onları oynadın. Bax: [Üslublar və günəş kölgələri](topic:styles-shadows#a-sun-study).

Zolaqlar olmadan təqdim etmək üçün {{key:Ctrl+Shift+F}} iki dəfə basın: tam ekran, sonra zolaqları gizlədilmiş tam ekran. Səhnə nişanları görünüşün üzərində qalır.

## Səhnə nəyi göstərir

Səhnə saxlayarkən nəyin gizlədildiyini yadda saxlayır: [gizlətdiyiniz](topic:hide-isolate) qruplar və komponentlər, söndürdüyünüz [teqlər](topic:tags) və hansı [kəsik müstəvisinin](topic:sections) kəsdiyi. Səhnəyə keçmək onları yenidən gizlədir və göstərir. Beləliklə bir səhnə bütün evi, növbəti səhnə damın teqi söndürülmüş evi, sonrakı isə onun kəsiyini göstərə bilər.

Gizlədilmiş sərbəst üzlər və kənarlar səhnələrin bir hissəsi deyil. Səhnəyə keçmək geri qaytarma addımı yaratmır. ModelCraft-ın əvvəlki quruluşu ilə saxlanmış səhnələr gizlədilənləri olduğu kimi saxlayır; onlara yazmaq üçün Yeniləyin.

## Animasiya ixrac edin

Siyahının altındakı {{ui:Animasiyanı ixrac et}} səhnələri birincidən sonuncuya oynadır, kameranı aralarında hamar hərəkət etdirərək, filmi **WebM** videosu kimi saxlayır (hər səhnə üçün iki saniyəlik hərəkət və qısa pauza). Görünüşü ekranda öz ölçüsündə, [təqdimat görünüşündə](topic:styles-shadows#presentation-view) qeyd edir (oxlar, bələdçilər və seçim yoxdur). Saxlamadan dayandırmaq üçün {{key:Esc}} basın və ya düyməni yenidən klikləyin. WebM brauzerlərdə və VLC-də oynayır, video redaktorları isə onu çevirir.

Ölçü seçdiyiniz render olunmuş gəzinti üçün (səma, günəş, kölgələr, materiallar) bunun əvəzinə {{ui:Video render et…}} istifadə edin: animasiya açarları olmadıqda səhnələri sıra ilə kameranın yolu kimi götürür. Bax: [Kameranı və obyektləri animasiya edin](topic:animation).

## Bilməli olduqlarınız

- Üslubu dəyişmək və ya kameranı səhnəyə keçdikdən sonra hərəkət etdirmək, Yeniləyin klikləməyincə səhnəni dəyişmir.
- Səhnələr Collada, OBJ, glTF, STL və ya IFC formatlarına ixrac olunmur.
