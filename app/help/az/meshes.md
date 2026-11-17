---
title: Meshlər
summary: Qrupu və ya komponenti 3D məzmun alətlərinin modelləşdirdiyi obyekt növü olan meshə çevirin və yenidən itələ-çək həndəsəsinə qaytarın.
keywords: mesh, meshlər, poliqon, poliqonlar, n-gon, dördbucaq, dördbucaqlılar, təpələr, yarım-kənar, uv, uv-lər, çevirmək, meshə çevir, həndəsəyə çevir, subdivision, heykəltəraşlıq, modelləşdirmə, 3D məzmun
from: e32363e8
---

ModelCraft-da iki növ həndəsə var. **İtələ-çək həndəsəsi** çəkdiyiniz şeydir: bir-birinə yapışan, bir-birini kəsən və bərpa olunan düz üzlər. **Mesh** 3D məzmun alətlərinin modelləşdirdiyi obyekt növüdür: istənilən sayda küncü olan üzlər, hər küncün öz teksturu koordinatlarını (UV-ləri), normallarını və rənglərini daşıya bilməsi və hər təpənin çəki kimi dəyərləri. Mesh qrup və ya komponent kimi yerləşdirilir və eyni modeldə itələ-çək həndəsəsinin yanında durur.

## Qrupu və ya komponenti meshə çevirin

1. Qrup və ya komponent seçin.
2. {{ui:Obyekt məlumatı}} bölməsində {{ui:Meshə çevir}} klikləyin.

Onun üzləri meshin üzlərinə çevrilir (dəlikləri olan üz üçbucaqlar kimi gəlir), sərt kənarlar kəskin qalır, yumşaq kənarlar hamar kölgələnir, boya, materiallar və idxal olunmuş teksturlar öz üzlərində qalır. İçindəki qruplar və komponentlər bir meshdə birləşdirilir. Sərbəst kənarlar buraxılır: mesh üzləri saxlayır. Komponentin hər yerləşdirilməsi meshi göstərir. Bu bir geri qaytarma addımıdır.

## Obyekt məlumatının göstərdikləri

Meshi seçin və onun üzlərini, təpələrini və kənarlarını, bağlı bərk cisim olub-olmadığını (və həcmini) və yerləşdirildiyi ölçüsünü görün. Açıq kənarları olan mesh neçə olduğunu göstərir.

## Meshi yenidən itələ-çək həndəsəsinə çevirin

Meshi seçin və {{ui:Həndəsəyə çevir}} klikləyin. Düz üzlər əvvəlki kimi qayıdır; küncləri bir müstəvidə olmayan üz üçbucaqlar kimi qayıdır. Sərt kənarlar sərt, qalanları yumşaq olur. {{ui:Partlat}} meshin üzlərini onun ətrafındakı qrupa birbaşa yerləşdirir.

## Bilmək lazım olanlar

- Meshi [təpələrini, kənarlarını və üzlərini redaktə etmək](topic:mesh-edit) üçün Mesh iş sahəsində ikiqat klikləyin. İtələ-çək ilə redaktə etmək üçün həndəsəyə çevirin; meshi digər qrup kimi köçürün, fırlatın, miqyaslayın, surətini çıxarın, boyayın, gizlədin və etiketləyin.
- İxraclar, 3D çap, render və VR meshi onun üzləri kimi görür.
- Mesh saxlayan fayl `.modelcraft` faylının daha yeni versiyası kimi saxlanılır, ona görə ModelCraft 0.6 və daha köhnə versiyalar onu aça bilmir; meshi olmayan fayllar onlarda əvvəlki kimi açılır. Faylı köhnə versiyada olan biri ilə paylaşmaq üçün əvvəlcə meshləri həndəsəyə çevirin.
- Meshdə geri qaytarma hər addımın dəyişdirdiyi şeyi saxlayır, ona görə hətta çox böyük mesh də tez geri qaytarılır.

Bax həmçinin [Qruplar və komponentlər](topic:groups-components) və [Hələ hazır deyil](topic:not-built-yet).
