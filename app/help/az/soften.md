---
title: Kənarları yumşaldın və hamarlaşdırın
summary: Az bucaqda birləşən üzlər arasındakı kənarları gizlədin, beləliklə əyri formalar ModelCraft-da və ixrac olunmuş fayllarda bir hamar səth kimi görünsün.
keywords: yumşaltmaq, hamarlaşdırmaq, yumşaq kənarlar, hamar kölgələndirmə, kənarları gizlət, üzlər, fasetli, əyri, normallar, sərtləşdir, bucaq
from: 52d32453
---

ModelCraft-da əyri forma düz üzlərdən qurulur. Bu üzlər arasındakı **yumşaq** kənarlar çəkilmir, onları birləşdirən üzlər isə bir hamar səth kimi kölgələnir, beləliklə 24 tərəfli silindr dairəvi görünür.

{{ui:İtələ/çək}} ilə dairəni qaldırdıqda onun tərəfləri sizin üçün yumşaldılır. Digər formalar üçün bucağa görə yumşaldın.

## Bucağa görə yumşaltmaq

1. Yumşaldılacaq şeyi seçin: üzlər və kənarlar, ya da qrup və ya komponent (bütün kənarları).
2. {{ui:Obyekt məlumatı}} panelində {{ui:Bu bucağa qədər yumşalt}} bölməsinə bucaq yazın, məsələn `20`, və {{ui:Yumşalt}} klikləyin.

Seçimdə iki üzü bu bucaq qədər və ya daha az dönən hər kənar yumşaq olur; daha kəskin dönüşü olan kənarlar sərt qalır. 12 tərəfli prizmanın tərəfləri 30° dönür, kənarları isə 90°, ona görə `31` yalnız tərəfləri yumşaldır.

{{ui:Hamısını sərtləşdir}} seçimdəki hər kənarı yenidən sərt edir. Hər biri bir geri qaytarma addımıdır.

## Bilməli olduqlarınız

- Yalnız tam iki üz arasındakı kənarlar yumşaldılır. Sərbəst kənarlar olduğu kimi qalır.
- Hamar kölgələndirmə yalnız yumşaq kənarlar boyunca işləyir: heç bir yumşaq kənarı olmayan üz düz kölgələnir.
- Yumşaq kənarlar ModelCraft faylında saxlanılır. **glTF (.glb)** və **OBJ** ixracları hamar kölgələndirməni saxlayır (hər künc üçün normal), beləliklə digər proqramlar eyni səthi göstərir. Collada və STL düz üzləri ixrac edir.
- Yumşaq kənarlar hər üz üslubunda gizlidir, {{ui:Rentgen}} və {{ui:Məftil kadr}} də daxil. Onları görmək üçün formanı seçin və {{ui:Hamısını sərtləşdir}} klikləyin; geri qaytarma yumşaltmanı yenidən qaytarır.
