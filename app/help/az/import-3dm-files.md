---
title: .3dm modelini idxal edin
summary: .3dm faylını şəbəkələri, səthləri, əyriləri, blokları, qatları və rənglərilə idxal edin; üçbucaqların haradan gəldiyini və nəyin buraxıldığını görün.
keywords: 3dm, idxal, nurbs, polisəth, brep, səthlər, render şəbəkəsi, ekstruziya, əyrilər, bloklar, qatlar, teqlər, rənglər, vahidlər, keçid, köçürmə
from: 3cf29879
---

ModelCraft `.3dm` fayllarını öz oxuyucusu ilə, səhifənin içində oxuyur. Heç nə yüklənmir və ModelCraft oflayn işlədikdə bu da oflayn işləyir. Versiya 5, 6, 7 və 8 formatında saxlanılmış fayllar sınaqdan keçirilib; köhnə (versiya 2–4) fayllar da açılmalıdır, lakin hələ sınanmayıb.

## Faylı idxal edin

1. {{ui:Fayl}} qrupunda {{ui:İdxal et}} düyməsinə klikləyin (və ya `.3dm` faylını 3D görünüşün üzərinə atın).
2. Faylı seçin.

   Oxunarkən status sətri yazır: "chair.3dm oxunur…", sonra nə gəldiyini göstərir, məsələn: "chair.3dm idxal edildi: 14 şəbəkə (8330 üz), 8 əyri, 5 blok yerləşdirmə, 3 qat teq kimi. Səthlər: fayldakı saxlanmış şəbəkələrdən 7 üz, CadCraft tərəfindən üçbucaqlara bölünmüş 29 üz."

Bütün model faylın adını daşıyan bir qrup kimi gəlir, seçilir və görünüş ona yaxınlaşdırılır. Bir {{key:Mod+Z}} hamısını, teqlər daxil olmaqla, geri götürür.

## Üçbucaqlar haradan gəlir

ModelCraft üzlər və şəbəkələrlə modelləşdirir, ona görə faylın hər səthi kiçik düz üçbucaqlardan ibarət [şəbəkə](topic:meshes) kimi gəlir. Polisəthin hər üzü (və hər ekstruziya) üçün ModelCraft bu sırayla götürür:

1. **Faylda saxlanmış render şəbəkəsi.** Əksər modelləşdirmə proqramları hər səthlə birlikdə ekranda göstərdikləri şəbəkəni saxlayır; o olduqda ModelCraft onu olduğu kimi istifadə edir.
2. **Öz üçbucaqlandırması**, faylda saxlanmış şəbəkə olmadıqda: müstəvilər, NURBS səthləri, fırlanma səthləri (kürələr, konuslar, torlar, torna formaları), ekstruziya edilmiş əyrilər və ekstruziyalar (deşikləri və uc qapaqları ilə), kənarları ilə kəsilmiş. Polisəthin üzləri kənar nöqtələrini paylaşır, buna görə bağlı polisəth bağlı şəbəkə kimi gəlir. Əyri sahələr səthin həqiqi formasından təxminən obyektin ölçüsünün 0.15 %-i qədər fərqlənənə qədər bölünür.
3. **Heç nə**, ModelCraft hələ oxumadığı növ səthdə olan üz üçün. Status sətri neçə üz və hansı növdən olduğunu göstərir.

Status sətrinin "Səthlər:" hissəsi neçə üzün saxlanmış şəbəkədən, neçəsinin ModelCraft tərəfindən üçbucaqlandırıldığını göstərir. Faylın bir üzü daxilindəki kənarlar yumşaq, iki üz arasındakı kənarlar kəskindir, buna görə əyri üz hamar kölgələnir.

:::tip
Ən dəqiq formalar üçün faylı onu yaradan proqramda render şəbəkələri ilə saxlayın (bu adətən standart seçimdir; "kiçik saxla" seçimi onları çıxarır).
:::

## Nə gəlir

- **Şəbəkələr** öz təpə rənglərilə və tekstura koordinatları ilə.
- **Polisəthlər, səthlər və ekstruziyalar**, yuxarıda təsvir olunduğu kimi.
- **Əyrilər** (xətlər, polixətlər, qövslər, çevrələr, NURBS əyriləri və onlardan birləşdirilmiş əyrilər) [kənarlar](topic:curves) kimi, hər qat üçün bir kənar qrupu.
- **Bloklar** [komponentlərə](topic:groups-components) çevrilir: blokun hər yerləşdirilməsi bir komponentin yerləşdirilməsidir, buna görə bir nüsxəni redaktə etmək hamısını dəyişir. Bloklar içində olan bloklar saxlanılır.
- **Qatlar** qatın tam adı ilə ("Furniture::Chairs") [teqlərə](topic:tags) çevrilir, qat söndürülmüş olduqda gizlidir. Hər obyektin yerləşdirilməsi öz qatının teqini daşıyır.
- **Rənglər.** Obyektin rəngi faylın göstərdiyi yerdən gəlir: öz rəngi, qatının rəngi və ya materialının əsas rəngi. Bu, onun üzlərinin rənginə çevrilir.
- **Gizli obyektlər gizli gəlir**; {{ui:Hamısını göstər}} onları göstərir.
- **Vahidlər:** fayl öz vahidini göstərir; model öz həqiqi ölçüsündə gəlir.

## Nə buraxılır (və bildirilir)

Status sətrinin "Qeydlər:" hissəsi gəlməyən hər şeyi, neçə dənə olduğu ilə birlikdə sadalayır:

- nöqtələr və nöqtə buludları, mətn, mətn nöqtələri, ölçülər, qeyd xətləri, şrixlamalar, işıqlar, kəsmə müstəviləri və tərtibat detalları;
- SubD obyektləri: əvvəlcə onları faylı yaradan proqramda şəbəkələrə və ya polisəthlərə çevirin;
- ofset səthlərdəki üzlər və ModelCraft-ın hələ oxumadığı digər növ səthlər, fayl onlar üçün şəbəkə saxlamayıbsa;
- başqa fayllara bağlı bloklar (yalnız idxal etdiyiniz fayl oxunur);
- əyilmiş (mitrali) uclu ekstruziyalar kvadrat uclarla gəlir.

Material teksturaları, render parametrləri, adlandırılmış görünüşlər, qruplar və istifadəçi mətni oxunmur; material yalnız əsas rəngini verir.

## Limitlər

300 MB-a qədər fayllar. Zədələnmiş fayl nə yanlış olduğunu bildirir və heç nə əlavə etmir; oxuna bilməyən bir obyekt buraxılır və sayılır, qalanları gəlir.
