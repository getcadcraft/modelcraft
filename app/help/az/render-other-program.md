---
title: Şəkli başqa proqramla çəkin
summary: Bizim öz yol izləyicimiz Render şəklini çəkir; başqa proqram onu yalnız CadCraft Studio-da render-mühərriki əlavəsi ilə çəkə bilər. Nə köçürülür və niyə bəzi proqramlar heç vaxt təklif olunmur.
keywords: render, mühərrik, xarici proqram, əlavə mühərriki, studio, arxa plan, növbə, usd, gltf, çəkilən, blender, gpl
from: 150f94f1
---

{{ui:Render a picture…}}-dəki şəkli **bizim öz mühərriklərimiz** çəkir: Fast və Path tracer, brauzerdə və CadCraft Studio-da. Başqa proqram onu yalnız **render-mühərriki əlavəsi** gətirdikdə çəkə bilər: bax: [Əlavə ilə render mühərriki əlavə edin](topic:render-engine-addons). Səhnəni başqa proqrama aparmaq və orada işləməyə davam etmək üçün [Səhnəni başqa proqramda açın](topic:render-open-in) və ya [Səhnəni oyun mühərrikinə göndərin](topic:render-unreal) istifadə edin.

## Əlavənin mühərriki ilə şəkil çəkin

1. Əlavəni Parametrlər › Əlavələr-də açın. Onun mühərriki {{ui:Render a picture…}} dialoqunun Mühərrik siyahısında görünür.
2. Onu seçin. Onun öz parametrləri Mühərrik siyahısının altında göstərilir.
3. {{ui:Render}} klikləyin. Studio-da əlavə ilk dəfə proqram işə salanda, Studio sizdən öz dialoqunda soruşur. Çəkilərkən irəliləyiş göstərilir; {{ui:Stop}} onu dayandırır. Şəkil onu çəkən mühərriklə işarələnmiş halda görünür.

JavaScript-də yazılmış mühərrik brauzerdə də işləyir. Bu kompüterdə proqram işə salan mühərrik yalnız Studio-da işləyir; brauzerdə saxlanılacaq fayl kimi görünür.

## Nə köçürülür

Mühərrik **paket** alır: model USD faylı kimi (və istədikdə glTF faylı), və dəqiq material dəyərləri, günəş və səma, gücü və işıq profili ilə yanan hər lampa, kamera və ekspozisiya ilə parametrlər faylı. Hər proqram işığı, tonu və nümunələri öz üsulu ilə verir, belə ki şəkillər kamera, günəş, lampalar və ekspozisiyada oxşar olur, pikselbəpiksel deyil.

## CadCraft heç vaxt işə salmayan proqramlar

CadCraft heç vaxt GNU GPL lisenziyası altındakı proqramı işə salmır və heç vaxt onu mühərrik və ya Proqramda aç hədəfi kimi siyahıya salmır. Blender onlardan biridir, buna görə Mühərrik siyahısında yoxdur. {{ui:Render a picture…}}-dan saxlanılan USD və ya glTF faylı, həmin faylları oxuyan hər proqramda olduğu kimi, yenə də onda açılır.

:::note
Panorama və stereo kameralar və səma şəkli (onun əvəzinə səmanın rəngləri istifadə olunur) başqa proqrama köçürülmür. Başqa proqramda edilən heç nə modelə geri qayıtmır.
:::
