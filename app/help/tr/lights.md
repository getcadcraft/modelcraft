---
title: Modeli lambalarla aydınlatın
summary: Modele lamba, spot ışık ve ışık paneli koyun; böylece render edilmiş resimlerde odalar geceleyin ya da aydınlatılmış iç mekânlar yumuşak gölgelerle görünsün.
keywords: ışık, ışıklar, lamba, lambalar, aydınlatma, ampul, tavan lambası, spot ışık, aşağı ışık, ışık paneli, alan ışığı, lümen, parlaklık, renk sıcaklığı, sıcak, gece, iç mekân, render
from: c8d72cbc
---

Lambalar [render edilmiş resimleri](topic:render) aydınlatır. 3B görünümü değiştirmezler; orada her lamba kendi renginde küçük bir işaret olarak görünür.

## Lamba ekleyin

1. Sağdaki {{ui:Işıklar}} bölümünde {{ui:Lamba}}, {{ui:Spot ışık}} veya {{ui:Işık paneli}} öğesine tıklayın.
2. Yerleştireceğiniz yere tıklayın. Yakalama, çizim yaparkenki gibi çalışır.
   - Bir tavanda ya da duvarda **lamba**, baktığınız taraftan yüzeyin 25 cm uzağında asılı durur; **ışık paneli** ise yüzeye yatar ve ondan uzağa doğru ışık verir.
   - **Spot ışık** iki tıklama gerektirir: önce yerini, sonra neye yöneldiğini belirtirsiniz.

Yeni lamba {{ui:Işıklar}} bölümünde seçili olur ve değiştirilmeye hazırdır.

## Lambayı değiştirin

{{ui:Işıklar}} bölümünde lambanın adına tıklayın ya da görünümdeki işaretine {{ui:Seç}} ile tıklayın. Sonra:

| Ayar | Ne yapar |
|---|---|
| {{ui:Parlaklık (lümen)}} | Ne kadar ışık verdiğini belirler. Ev ampulü yaklaşık 800 lümendir; parlak bir tavan paneli 3000 |
| {{ui:Renk}} | {{ui:Sıcak}} (ev ampulü), {{ui:Nötr}} veya {{ui:Gün ışığı}}, ya da herhangi bir renk |
| {{ui:Işın (derece)}} | Spot ışığın koninin kenardan kenara açısı |
| {{ui:Ampul boyutu}}, {{ui:Genişlik}}, {{ui:Derinlik}} | Daha büyük ampuller ve paneller daha yumuşak gölgeler verir |
| {{ui:Kırmızı (x)}}, {{ui:Yeşil (y)}}, {{ui:Yükseklik}} | Lambanın konumu |

Lambanın adının yanındaki onay kutusu onu açar ya da kapatır. {{ui:Işığı sil}} onu kaldırır. Her değişiklik tek bir adımdır: {{key:Ctrl+Z}} onu geri alır. Lambalar `.modelcraft` dosyasına kaydedilir.

## Gece resimleri

{{ui:Resim render et…}} iletişim kutusunda {{ui:Bu resim için başka bir tarih ve saat kullanın}} seçeneğini işaretleyin ve akşam bir saat seçin. Güneş batmışken gökyüzü kararır ve modeli yalnızca lambalar aydınlatır. Resim çok karanlıksa iletişim kutusundaki {{ui:Parlaklık}} değerini artırın ya da lamba ekleyin.

:::tip
Bir odayı içinden görmek için kamerayı odanın içine koyun (yörüngede dönün ve yakınlaştırın ya da bir [sahne](topic:scenes) kullanın), tavana bir lamba ekleyin ve geceleyin render edin. {{ui:Hızlı}} modda lambadan uzaktaki köşeler bir fotoğraftakinden daha karanlık kalır; [yüksek kalite modu](topic:render#high-quality) ışığın duvarlardan yansımasını sağlar.
:::
