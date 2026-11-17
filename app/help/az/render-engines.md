---
title: Şəkli hansı proqramın çəkdiyini seçin
summary: Render dialoqunda Mühərrik seçimi: bizim öz iki mühərrikimiz, CadCraft Studio-dakı başqa proqramlar və veb onun əvəzinə nə edir.
keywords: render, mühərrik, renderer, render mühərriki, plug-in, plugin, studio, xarici proqram, çəkən, növbə, əlavə mühərriki
from: be4b056a
---

{{ui:Render a picture…}} dialoqunda Rejimin üstündə **Mühərrik** seçimi var. Bizim öz iki mühərrikimiz həmişə var və hər yerdə işləyir; əlavələr daha çox əlavə edə bilər və CadCraft Studio-da siyahıda səhnəni öz üzərinə götürən proqramlar da olur.

| Mühərrik | Nə edir | Harada |
|---|---|---|
| Daxili: Fast | Sürətli statik şəkil: gündüz işığı, yumşaq kölgələr, şüşə və metal görünüşü, saniyələr ilə | Brauzer və Studio |
| Daxili: Path tracer | Səthlər arasında işığın sıçraması, qrafik kartınızda və ya prosessorunuzda; render növbəsi və şəbəkənizdəki digər kompüterlər | Brauzer və Studio |
| Əlavənin mühərriki | Şəkli çəkir və geri qaytarır: bax: [Şəkli başqa proqramla çəkin](topic:render-other-program) | Brauzer (JavaScript-də yazılmış mühərrik) və ya Studio (proqram işə salan mühərrik) |
| Səhnəni öz üzərinə götürən proqram | Studio səhnəni öz qovluğuna qoyur və onu sinxron saxlayır | Studio |
| Proqramda aç … | Səhnəni saxlayır və proqramda açır; heç nə geri qayıtmır: bax: [Səhnəni başqa proqramda açın](topic:render-open-in) | Veb faylı saxlayır |

## Seçim necə işləyir

- Fast və ya Path tracer seçimi Rejimi də onunla dəyişir və əksinə. Başqa mühərrikdən heç vaxt istifadə etməyənlər üçün dialoqun başqa heç nəsi dəyişmir.
- Əlçatan olmayan mühərrik səbəbi ilə siyahıda qalır ("tapılmadı", "daha yeni versiya tələb edir"); onu seçə bilməzsiniz. Brauzerdə yalnız Studio-da işləyən mühərrik "fayl saxlayır" göstərir: onda {{ui:Render a picture…}} səhnəni və parametrlərini həmin proqrama aparacağınız fayla saxlayır.
- Seçim faylın render parametrləri ilə birlikdə saxlanılır və sonuncu seçdiyiniz mühərrik öz seçimi olmayan fayllar üçün başlanğıc mühərrikdir.
- Başqa proqramın şəkli dialoqda və render növbəsində hansı proqramın çəkdiyini və onun versiyasını göstərir. [Render](topic:render) səhifəsinin vədləri yalnız **bizim öz** mühərriklərimizi əhatə edir: başqa proqram işığı, tonu və nümunələri öz üsulu ilə verir, belə ki bir səhnənin iki şəkli kamera, günəş, lampalar və ekspozisiyada oxşar olur, pikselbəpiksel deyil.

## Hər mühərrikə nə verilir

Səhnə başqa proqrama **paket** kimi gedir: model USD faylı kimi (eyni fayl [USD-i fərqli saxla](topic:usd) yazır) və USD idxalçısına etibar edilə bilməyən şeyləri saxlayan parametrlər faylı: dəqiq material dəyərləri, gücü və işıq profilləri ilə yanan lampalar, günəş, səma, ekspozisiya və dialoqun çəkəcəyi kimi kamera. Heç yerə heç nə yüklənmir.

## Render növbəsi

Başqa proqram üçün şəkil və ya animasiya bizimki kimi [render növbəsində](topic:render#the-render-queue) gözləyə bilər; onun tapşırığı hansı mühərrik üçün olduğunu yadda saxlayır. Animasiya proqrama bir işləmədə gedir.
