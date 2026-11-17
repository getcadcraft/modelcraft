---
title: Əlavə ilə render mühərriki əlavə edin
summary: Əlavənin Render dialoqunun Mühərrik siyahısına nə əlavə edə bilməsi, proqram işə salmaq üçün lazım olan icazə və Studio-nun nəyi yoxladığı və soruşduğu.
keywords: əlavə, addon, mühərrik, render mühərriki, developer, engine.run, icazə, proqram, skript, imzalanmış, studio, api
from: cd7a39ba
---

Əlavə (Parametrlər › Əlavələr) {{ui:Render a picture…}} dialoqunun Mühərrik siyahısına mühərrik əlavə edə bilər. Əlavə müəllifləri üçün tam mətn əlavə spesifikasiyasının 16-cı bölməsindədir; qısaca:

- Əlavə mühərriki öz adı ilə başlayan id, ad, istəyə bağlı parametrlər və **ya** işə salınacaq proqram **ya da** şəkli çəkən JavaScript funksiyası ilə qeydiyyatdan keçirir.
- Proqram işə salan mühərrikə **`engine.run`** icazəsi lazımdır; o, quraşdırmadan əvvəl və Parametrlərdə göstərilir. O, yalnız Studio-da işləyir; brauzerdə saxlanılacaq fayl kimi görünür.
- Əlavə proqramı adlandırır (sadə fayl adı: heç vaxt shell deyil), **imzalanmış əlavənin içində** olan skripti və yer tutucular və sadə sözlərdən ibarət arqumentləri. Studio proqramı tapır, ya da onu bir dəfə göstərməyinizi istəyir.
- Əlavə ilk dəfə proqram işə saldıqda, **Studio sizdən öz dialoqunda soruşur**: hansı əlavə, hansı proqram və skriptin proqramın edə biləcəyi hər şeyi edə bildiyi. Yalnız etibar etdiyiniz əlavəyə icazə verin. Cavabınız həmin əlavə və proqram üçün yadda saxlanılır.
- Paket (səhnə USD kimi və parametrlər faylı, əlavə istədikdə glTF faylı ilə) və əlavənin skripti təzə müvəqqəti qovluğa düşür, proqram orada işləyir və şəkil əlavə mühərrikinin adı ilə işarələnmiş halda qayıdır.

:::note
Əlavələr yalnız əlavə API 1.4-dən render mühərrikləri əlavə edə bilər. Açıq mənbəli komanda sətri renderi üçün işlənmiş nümunə öz anbarındadır; o, hələ həmin renderdə işə salınmayıb.
:::
