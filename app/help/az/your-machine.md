---
title: Kompüteriniz nə ilə render edir
summary: Parametrlər › Render bu brauzerin tətbiqə icazə verdiyi qrafikanı, prosessor nüvələrini və yaddaşı, həmçinin render-in harada başlayacağını təyin edən səviyyəni göstərir.
keywords: kompüteriniz, qrafika kartı, gpu, webgpu, webgl, prosessor, cpu, nüvələr, axınlar, yaddaş, ram, ümumi yaddaş, izolyasiya, səviyyə, sürət, yavaş, render sürəti, noutbuk
from: 8a0c21c9
---

{{key:Mod+,}} ilə {{ui:Parametrlər}} açın, bu tətbiqin öz nişanında qalın və {{ui:Render}} bölməsinə keçin. {{ui:Sizin kompüteriniz}} bu brauzerin render üçün tətbiqə icazə verdiyi şeyləri göstərir. Burada heç nə kompüterinizdən çıxmır.

| Sətir | Bu nə deməkdir |
|---|---|
| {{ui:Qrafika}} | Brauzerin bildirdiyi qrafika kartı. "WebGPU" o deməkdir ki, bütün render işini görə bilir; "WebGL 2 only" o deməkdir ki, canlı görünüş və {{ui:Şəkil render edin…}} WebGL yolu ilə izləyici (yüksək keyfiyyət) istifadə edir, lakin WebGPU tələb edən görünüşdə render və render növbəsi təklif olunmur; proqram əvəzedicisi o deməkdir ki, hər şey prosessorda işləyir |
| {{ui:Prosessor}} | Brauzerin bildirdiyi prosessor nüvələrinin sayı |
| {{ui:Yaddaş}} | Brauzer bildirdikdə, kompüterdə təxminən nə qədər yaddaş olduğu. Bəzi brauzerlər bunu göstərmir |
| {{ui:Ümumi yaddaş}} | Səhifənin işçiləri arasında yaddaşı paylaşmasına icazə verilib-verilmədiyi. Açıq olduqda hər nüvə səhnənin bir nüsxəsi üzərində işləyə bilər; bağlı olduqda hər birinə öz nüsxəsi lazımdır, ona görə də böyük səhnə eyni anda az nüvəyə sığır |
| {{ui:Sürətli prosessor kodu}} | Brauzerin daha sürətli WebAssembly kodunu işlədib-işlətmədiyi. Onsuz daha yavaş ehtiyat variant istifadə olunur |
| {{ui:Səviyyə}} | {{ui:Qrafika kartı, yüksək}}, {{ui:Qrafika kartı, əsas}} və ya {{ui:Yalnız prosessor}}, altında səbəbi ilə birlikdə |

## Səviyyə

Səviyyə [canlı görünüşün](topic:live-view) {{ui:Bu kompüter üçün}} hansı yerdən başlayacağını, nə qədər səpələnmiş elementi çəkəcəyini və görünüşdə [bölünmə səthinin](topic:modifiers#subdivision-surface) neçə üzü göstərə biləcəyini təyin edir ki, daxili qrafika çipi olan və ya ümumiyyətlə qrafika kartı olmayan noutbuk cavab verməyə davam etsin. Daxili və ya telefon qrafika çipi, yaxud 4 GB və ya daha az yaddaş heç vaxt {{ui:Qrafika kartı, yüksək}} almır.

:::note
Brauzerlər fərqlənir. Eyni kompüter bir brauzerdə WebGPU, digərində "WebGL 2 only" göstərə bilər. Linux-da əksər brauzerlərdə hələ WebGPU yoxdur.
:::
