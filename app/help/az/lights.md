---
title: Modeli lampalarla işıqlandırın
summary: Modelə lampalar, projektorlar və işıq panelləri yerləşdirin ki, vizuallaşdırılmış şəkillərdə otaqlar gecə və ya işıqlandırılmış daxili məkan kimi, yumşaq kölgələrlə görünsün.
keywords: işıq, işıqlar, lampa, lampalar, işıqlandırma, ampul, tavan işığı, projektor, aşağı işıq, işıq paneli, sahə işığı, lümen, parlaqlıq, rəng temperaturu, isti, gecə, daxili məkan, render
from: c8d72cbc
---

Lampalar [vizuallaşdırılmış şəkilləri](topic:render) işıqlandırır. Onlar 3D görünüşünü dəyişmir; orada hər lampa öz rəngində kiçik işarə kimi görünür.

## Lampa əlavə edin

1. Sağdakı {{ui:Işıqlar}} bölməsində {{ui:Lampa}}, {{ui:Projektor}} və ya {{ui:İşıq paneli}} düyməsinə klikləyin.
2. Yerləşəcəyi yerə klikləyin. Tutma (snapping) çəkərkən olduğu kimi işləyir.
   - Tavanda və ya divarda **lampa** üzdən 25 sm aralı, baxdığınız tərəfdə asılır; **işıq paneli** üzün üstündə yatır və ondan uzağa işıq saçır.
   - **Projektor** iki klik tələb edir: əvvəl yerini, sonra hara yönəldiyini göstərin.

Yeni lampa {{ui:Işıqlar}} bölməsində seçilir və dəyişdirilməyə hazır olur.

## Lampanı dəyişin

{{ui:Işıqlar}} bölməsində lampanın adına klikləyin və ya {{ui:Seç}} ilə görünüşdə onun işarəsini seçin. Sonra:

| Parametr | Nə edir |
|---|---|
| {{ui:Parlaqlıq (lümen)}} | Nə qədər işıq verdiyini təyin edir. Məişət ampulu təxminən 800 lümen, parlaq tavan paneli 3000 lümen verir |
| {{ui:Rəng}} | {{ui:İsti}} (məişət ampulu), {{ui:Neytral}} və ya {{ui:Gündüz işığı}}, yaxud istənilən rəng |
| {{ui:Şüa (dərəcə)}} | Projektorun konusu, kənardan kənara |
| {{ui:Lampanın ölçüsü}}, {{ui:En}}, {{ui:Dərinlik}} | Lampa və panellər nə qədər böyükdürsə, kölgələr bir o qədər yumşaq olur |
| {{ui:Qırmızı (x)}}, {{ui:Yaşıl (y)}}, {{ui:Hündürlük}} | Lampanın yerləşdiyi yer |

Lampanın adının yanındakı işarə onu yandırır və ya söndürür. {{ui:İşığı sil}} onu silir. Hər dəyişiklik bir addımdır: {{key:Ctrl+Z}} onu geri qaytarır. Lampalar `.modelcraft` faylında saxlanılır.

## Gecə şəkilləri

{{ui:Şəkil render edin…}} pəncərəsində {{ui:Bu şəkil üçün başqa tarix və vaxt seçin}} işarəsini qoyun və axşam saatı seçin. Günəş batanda səma qaralır və modeli yalnız lampalar işıqlandırır. Şəkil çox qaranlıqdırsa, dialoqda {{ui:Parlaqlıq}} dəyərini artırın və ya lampalar əlavə edin.

:::tip
Otağı içəridən görmək üçün kameranı otağın içində yerləşdirin (orbit və yaxınlaşdırma ilə, və ya [səhnə](topic:scenes) vasitəsilə), tavana lampa əlavə edin və gecə render edin. {{ui:Sürətli}} rejimdə lampadan uzaq künclər fotoşəkildəkindən daha qaranlıq olur; [yüksək keyfiyyət rejimi](topic:render#high-quality) isə işığın divarlardan əks olunmasına imkan verir.
:::
