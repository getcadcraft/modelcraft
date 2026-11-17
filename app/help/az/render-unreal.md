---
title: Səhnəni oyun mühərrikinə göndərin
summary: Studio səhnəni Unreal Engine layihəsinə yaza və hər göndərmədə onu yenilədə bilər; sizin redaktələriniz CadCraft-ın heç vaxt yazmadığı qatda qalır. Onu açan plagin hələ buraxılmayıb.
keywords: unreal, unreal engine, oyun mühərriki, keçid, göndər, usd stage, layihə, canlı, cine kamera, film render növbəsi
from: 9a765cc2
---

CadCraft Studio-da Mühərrik siyahısı Unreal Engine layihəsinə **keçid** saxlaya bilər. Yalnız bir istiqamətdə: CadCraft-dan Unreal-a.

## Səhnəni göndərin

1. Mühərrik siyahısında Unreal girişini seçin. İlk dəfə Studio layihənizin qovluğunu (`.uproject` faylı olan qovluğu) seçməyinizi xahiş edəcək; o, bunu yadda saxlayır.
2. {{ui:Göndər}} düyməsinə klikləyin. Studio layihənin daxilində `CadCraft/<file name>/` qovluğunu yazır: səhnəni USD faylı kimi, parametrlər faylını, işıq profillərini və iki kiçik qat faylını.
3. Modeli dəyişdirin, saxlayın və yenidən göndərin. Yalnız səhnə və parametrlər faylı əvəz olunur.

## Öz redaktələriniz təhlükəsizdir

Unreal-ın açdığı stage bir dəfə yaradılan kiçik kök qatdır və altında iki qat var: yuxarıda **sizin qatınız** (`<name>.user.usda`, əvvəlcə boşdur, CadCraft onu heç vaxt yenidən yazmır) və aşağıda CadCraft-ın səhnəsi. Öz qatınıza saxladığınız redaktələr səhnə yenidən göndərildikdə qalır. Unreal səviyyəsində yerləşdirdiyiniz işıqlar və digər aktyorlar stage-dən kənardadır və onlara da toxunulmur.

## Studio olmadan

Brauzerdə və ya Studio-nun Unreal-ı tapmadığı kompüterdə Mühərrik siyahısından **Unreal layihə qovluğu (.zip)** seçin və {{ui:Vizuallaşdır}} düyməsinə klikləyin. O, eyni qovluğu zip kimi saxlayır: onu layihənizin `CadCraft` qovluğuna açın. İlk dəfə **Stage fayllarını daxil et** seçimini aktiv saxlayın; sonrakı saxlamalarda onu söndürün ki, zip yalnız səhnəni və parametrlər faylını saxlasın və sizin öz qatınız heç vaxt əvəz olunmasın.

:::note
Stage-i açan, günəşi, lampaları, kameraları və ekspozisiyanı tətbiq edən, hər göndərməni izləyən və kameranı render edən Unreal plagini **hələ buraxılmayıb** və Unreal-da işə salınmayıb. O hazır olana qədər Göndər faylları layihəyə qoyur və Unreal-ın öz USD alətləri onları aça bilər. Pəncərələr birinci sistemdir; macOS sonra gələcək.
:::
