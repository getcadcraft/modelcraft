---
title: Silin və təmizləyin
summary: Silgi və ya Delete düyməsi ilə kənarları, qrupları və bələdçiləri silin, bölünmüş üzləri birləşdirin və səhv istiqamətə baxan üzləri düzəldin.
keywords: silmək, silgi, sil, çıxarmaq, bərpa, üzləri birləşdirmək, təmizləmək, səpələnmiş xətlər, üzü çevirmək, arxa üz, geri qaytarmaq
from: 80b92a81
---

## Silgi ilə silmək

1. {{ui:Silgi}} üçün {{key:E}} basın.
2. Kənar, qrup, komponent və ya bələdçi üzərinə basın. O, silinir.
3. Bir neçəsini silmək üçün üzərindən sürüşdürün (basıb saxlayın və hərəkət etdirin). Keçdiyiniz hər şey işarələnir və buraxdığınız zaman hamısı gedir.

Silgi üzləri seçmir: üz ona lazım olan kənarlar silindikdə gedir. Üzlər silginin kənarları tapmaq üçün baxdığı şeylərdir.

## Üzlərə nə olur

- **Eyni müstəvidə olan iki üz arasındakı kənar** (məsələn, döşəmə üzərində çəkdiyiniz xətt) yox olur və iki üz **bərpa olunaraq** bir olur.
- **Üzün bağlı qalması üçün lazım olan kənar** (qutunun kənarı) həmin üzü də özü ilə aparır. Qutunun üst kənarlarından birini silin, üst və bir yan gedər və açıq qutu qalar.
- **Boş uclar** (artıq heç bir kənar istifadə etməyən nöqtələr) təmizlənir.

Komponentin son nüsxəsini silmək onu {{ui:Komponentlər}} panelindən də çıxarır.

## Delete düyməsi ilə silmək

1. {{ui:Seç}} ilə çıxarmaq istədiyinizi seçin.
2. {{key:Delete}} və ya {{key:Backspace}} basın.

Bu üzləri də silir. Bu şəkildə silinmiş üz kənarlarını qoyub gedir, beləliklə qutunun üstünü silib konturunu saxlaya və orada başqa bir şey çəkə bilərsiniz.

## Düz üzdə səpələnmiş xətləri təmizləmək

Divar və ya döşəmə istəmədiyiniz xətləri göstərirsə (çəkmədən qalmış), onları {{ui:Silgi}} ilə silin. Üzdə olan xətlər yox olur və üz qalır.

## Səhv istiqamətə baxan üz

Arxadan baxılan üz boz-mavi görünür. Modelinizin xarici tərəfində üz boz-mavi görünürsə:

1. Üzü seçin.
2. {{ui:Obyekt məlumatı}} bölməsində {{ui:Üzü çevir}} basın.

Üzün istiqaməti ixrac edərkən ən çox önəmlidir: render proqramları, oyun mühərrikləri və 3D printerlər içəriyə baxan üzləri gizlədə və ya səhv oxuya bilər.

## Səhvi geri qaytarmaq

{{key:Mod+Z}} hər dəfə bir addım geri qaytarır, {{key:Mod+Y}} (ya da {{key:Mod+Shift+Z}}) təkrarlayır. Silgi ilə sürüşdürmə, neçə şey aldığından asılı olmayaraq, bir addımdır. Status sətri nəyin geri qaytarıldığını göstərir: "Silmə geri qaytarıldı."
