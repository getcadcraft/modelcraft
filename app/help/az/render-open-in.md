---
title: Səhnəni başqa proqramda açın
summary: Səhnəni USD və ya glTF faylı kimi oxuyan hər hansı proqram üçün saxlayın, ya da Studio-dan bu kompüterdəki proqramda açın.
keywords: proqramda aç, open in, usd, gltf, glb, ixrac, render proqramı, archviz, studio, usdview, göndər, təhvil, paket, unreal qovluğu
from: 812329d5
---

{{ui:Render a picture…}} dialoqunun Mühərrik siyahısında **Proqramda aç …** girişini seçin ki, səhnəni başqa proqrama aparasınız. Modelə heç nə geri qayıtmır.

## Hər proqram üçün fayl

- **USD faylı** səhnəni `.usdc` kimi saxlayır (və ya model şəkilləri daşıdıqda `.usdz`): materiallar, lampalar və kameralarla [USD-i fərqli saxla](topic:usd) ilə eyni fayl. O, instansiyanı və dəqiq material dəyərlərini saxlayır. Əksər renderlər, oyun mühərrikləri və baxıcılar USD oxuyur.
- **glTF faylı (.glb)** materiallar, teksturalar və lampalarla daha yüngül glTF 2.0 faylını saxlayır; ModelCraft-ın yazdığı formatlar üçün [Modeli başqa proqramlar üçün ixrac edin](topic:export-model) bölməsinə baxın.

- **Unreal layihə qovluğu (.zip)** [Səhnəni oyun mühərrikinə göndərin](topic:render-unreal) yazdığı qovluğu, istənilən kompüterdə layihə üçün saxlayır.

Üç variant də brauzerdə və Studio-da işləyir.

## Studio-da: proqramda açın

Studio bu kompüterdə səhnəni aça bilən proqramları siyahıya salır: axtarış yolunuzda varsa usdview, və fayl növü üçün kompüterin öz proqramı. Birini seçin, hər ikisini oxuyursa USD və ya glTF seçin və {{ui:Render}} klikləyin. Studio paketi Sənədlər altında yeni qovluğa yazır (`CadCraft hand-off`; heç nə üstünə yazılmır, hər göndərmə öz qovluğunu alır) və proqramı onda başladır, sonra faylların harada olduğunu deyir.

| Proqram | Ən yaxşı oxuyur |
|---|---|
| usdview | USD |
| Kompüterin öz proqramı | Fayl növü üçün kompüterdə nə varsa |

Studio yalnız bu sabit siyahıdakı proqramları işə salır; səhifənin ad üzrə istədiyi heç nəni işə salmır və heç vaxt GNU GPL lisenziyası altındakı proqramı işə salmır (bax: [Şəkli başqa proqramla çəkin](topic:render-other-program#programs-cadcraft-never-runs)). USD və ya glTF oxuyan hər proqram faylı yuxarıdakı **Hər proqram üçün fayl** bölməsindən açır.

:::note
Twinmotion, Enscape və digər vizuallaşdırma proqramları siyahıda yoxdur: CadCraft onlarla yoxlanılmayıb və onlar haqqında heç bir iddia etmir. Buradan glTF və ya USD faylı onlara daxil olmaq yoludur.
:::
