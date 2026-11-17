---
title: SKP modelini idxal edin
summary: .skp faylını qrupları, komponentləri, rəngləri, teksturaları, teqləri və yumşaq kənarları ilə idxal edin, nəyin gəldiyini və nəyin gəlmədiyini görün və modelləşdirməyə davam edin.
keywords: skp, idxal, skp aç, komponentlər, qruplar, teqlər, qatlar, materiallar, rənglər, teksturalar, gizli, yumşaq kənarlar, 3D Warehouse, köçürmə, keçid
from: 325d3c81
---

ModelCraft SketchUp fayllarını (`.skp`) öz oxuyucusu ilə, səhifənin içində oxuyur. Heç nə yüklənmir və ModelCraft oflayn işlədikdə bu da oflayn işləyir. SketchUp 3-dən 2026-ya qədər olan fayllar sınaqdan keçirilib.

## Faylı idxal edin

1. {{ui:Fayl}} qrupunda {{ui:İdxal et}} düyməsinə klikləyin (və ya `.skp` faylını 3D görünüşün üzərinə atın).
2. Faylı seçin.

   Oxunarkən status sətri yazır: "house.skp oxunur…", sonra nə gəldiyini göstərir, məsələn: "house.skp (SketchUp 25.0.575) idxal edildi: 1240 üz, 6 komponent, bir qrupda."

Bütün model faylın adını daşıyan bir qrup kimi gəlir, seçilir və görünüş ona yaxınlaşdırılır. Bir {{key:Mod+Z}} hamısını, teqlər daxil olmaqla, geri götürür.

:::tip
İdxal qrupunun məzmununu modelinizdə bir qrup daxilində yox, sərbəst halda istədikdə, idxal qrupunu parçalayın ({{ui:Obyekt məlumatı}} › {{ui:Parçala}}).
:::

## Nə gəlir

- **Üzlər** öz deşikləri ilə və üzün hissəsi olmayan **kənarlar**.
- **Qruplar** qrup kimi, **komponentlər** komponent kimi gəlir: komponentin hər nüsxəsi bir təyinatın yerləşdirilməsidir, buna görə bir nüsxəni redaktə etmək SketchUp-da olduğu kimi hamısını dəyişir. Adlar onlarla birlikdə gəlir.
- **Rənglər.** Üzün öz materialı onun rəngini verir. Qrupa və ya komponentə tətbiq olunmuş material həmin yerləşdirmənin rəngi olur, buna görə öz rəngi olmayan daxili üzlər onu alır, SketchUp-da olduğu kimi. Bir yerdə qırmızı, başqa yerdə göy rəngə boyanmış komponent bir komponent olaraq qalır.
- **Teksturalar.** Teksturalı material ilə boyanmış üz, faylda olduğu kimi üzün üzərinə düşən teksturası ilə gəlir və {{ui:Kölgəli}} üslubu onu göstərir. Şəkil faylı saxladıqda ModelCraft faylında qalır və [vizuallaşdırılmış şəkil](topic:render) də onu göstərir. Bütün qrupa və ya komponentə tətbiq olunmuş teksturalı material həmin nüsxəyə yalnız materialın rəngini verir.
- **Teqlər.** SketchUp teqində olan qrup və ya komponent eyni adlı ModelCraft teqi alır və {{ui:Teqlər}} siyahısında görünür; SketchUp-dakı kimi göstərilir və ya gizlidir. Modelinizdə həmin adda teq artıq varsa, o istifadə olunur.
- **Gizli şeylər gizli gəlir:** üzlər, kənarlar, qruplar və komponentlər, həmçinin gizli teqdəki üzlər və kənarlar. SketchUp-ın göstərdiyini görürsünüz və heç nə itmir: {{ui:Redaktə}} › {{ui:Daha çox}} › {{ui:Hamısını göstər}} onları göstərir. Bax: [Gizlədin, təcrid edin və göstərin](topic:hide-isolate).
- **Yumşaq və hamar kənarlar** yumşaq qalır, buna görə əyri səthlər hələ də hamar görünür.
- **Ölçülər** istənilən vahiddə düzgün gəlir: SketchUp faylları daxildə düymlə olur və ModelCraft onları çevirir.

## Nə gəlmir

Status sətri nəyin buraxıldığını, sayları ilə birlikdə göstərir.

- **Bəzi teksturalar** yalnız materialının rəngini saxlayır: faylda olmayan tekstura, brauzerlərin göstərə bilmədiyi formatda şəkil (məsələn, Photoshop faylı) və ya ölçüsü olmayan tekstura. Proyektiv teksturalı üzlər tekstura təxminən yerləşdirilmiş halda gəlir.
- **Sərbəst üzlər və kənarlarda teqlər.** ModelCraft yalnız qrup və komponentləri teqləyir, ona görə öz teqi olan üz və ya kənar teqsiz gəlir və status sətri onları sayır. Belə üzləri qrupa çevirin ({{key:Shift+G}}) və qrupu teqləyin.
- **Modelə yerləşdirilmiş şəkillər**, mətn, ölçülər, rəhbər xətlər, kəsik müstəviləri, səhnələr və üslublar.

## Problemlər

- "Bu SketchUp faylı deyil." və ya "Bu SketchUp faylı zədələnib: …": fayl kəsilib və ya `.skp` adlı başqa bir şeydir. SketchUp-dan yenidən saxlayın və ya yeni nüsxə istəyin.
- ModelCraft-ın tanımadığı daha yeni SketchUp versiyasından olan fayl, tapılan versiya ilə birlikdə rədd edilir.
- Yalnız şəkillərdən, mətndən və ya ölçülərdən ibarət model göstəriləcək heç nə olmadığını bildirir.

## Modeli geri götürün

ModelCraft `.skp` fayllarını saxlaya bilməz. Collada ixrac edin ({{ui:İxrac}} › `.dae`) və onu SketchUp-da idxal edin: qruplar, komponentlər və rənglər keçir; teksturalar öz materialının rəngi kimi keçir. Bax: [Modelinizi ixrac edin](topic:export-model).
