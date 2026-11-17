---
title: Örgüyü heykel gibi şekillendirme
summary: Bir örgüyü killer gibi fırçalarla şekillendirin — çizin, killeyin, yumuşatın, tutun, şişirin, keskin çizgi açın, sıkıştırın, düzleştirin — parçaları bir maskeyle koruyun, X ekseninde ayna alın ve heykel yaptığınız yere ayrıntı ekleyin.
keywords: heykel, heykel yapma, fırça, fırçalar, kil, çizim, yumuşat, tut, şişir, keskin çizgi, maske, simetri, ayna, ayrıntı, dinamik topoloji, kalem, basınç, tablet, stylus
from: 5477801a
---

Heykel çalışma alanı bir örgüyü killer gibi fırçalarla şekillendirir: yüzeyi sürükleyin, yüzey yükselir, batar, yumuşar ya da yuvarlak bir fırçanın altında imleci izler; etkisi fırçanın ortasında en güçlü, kenarına doğru tamamen sıfır olur.

## Başlama

Bir örgü seçin ve Çalışma alanı listesinden {{ui:Heykel}} seçin. Bir grup ya da bileşen, Örgü çalışma alanındaki gibi önce örgüye dönüşür. Fırçalar örgünün köşe noktaları üzerinde çalışır; bu yüzden daha çok köşe noktası olan bir örgü daha ince şekiller alır: önce alt bölün (Örgü çalışma alanındaki {{ui:Böl}}, ya da uyguladığınız bir Alt bölme yüzeyi değiştiricisi) ya da {{ui:Ayrıntı}} seçeneğini açın.

## Fırçalar

| Fırça | Tuş | Ne yapar |
| --- | --- | --- |
| {{ui:Çizim}} | {{key:D}} | Fırçanın altındaki yüzeyi yükseltir |
| {{ui:Kil}} | {{key:C}} | Önce çukurları doldurarak düz katmanlar oluşturur |
| {{ui:Yumuşat}} | {{key:S}} | Tümsekleri düzleştirir; herhangi bir fırçayla yumuşatmak için {{key:Shift}} tuşunu basılı tutun |
| {{ui:Tut}} | {{key:G}} | Yüzeyi imleçle birlikte çeker |
| {{ui:Şişir}} | {{key:I}} | Yüzeyi kendi yönünde dışarı doğru şişirir |
| {{ui:Keskin çizgi}} | {{key:Shift+C}} | Keskin bir oluk açar |
| {{ui:Sıkıştır}} | {{key:P}} | Yüzeyi fırçanın ortasına doğru çeker |
| {{ui:Düzleştir}} | {{key:T}} | Yüzeyi ortalama düzlemine doğru bastırır |
| {{ui:Maske}} | {{key:M}} | Yüzeyi diğer fırçalara karşı koruyan bir maske boyar |

Fırça hareketi sırasında {{key:Ctrl}} tuşunu basılı tutarsanız ters yönde çalışır (yükseltmek yerine alçaltır, oluk yerine sırt açar, maskeyi kaldırır) ya da {{ui:Azalt}} seçeneğini açın.

## Boyut ve güç

Fırçanın boyutu ekranda pikseller cinsindendir; bu yüzden ne kadar yakınlaştırırsanız yakınlaştırın aynı hissedilir: {{key:[}} ve {{key:]}} onu küçültür ve büyütür, {{key:Shift+[}} ve {{key:Shift+]}} gücünü değiştirir. Panel ikisini de gösterir.

Bir tablette kalemle daha sert bastırmak fırçayı daha büyük ve daha güçlü yapar; panel bunların ikisini de kapatır.

## Ayna, maske ve ayrıntı

- {{ui:X'e göre ayna}} ({{key:X}}) kırmızı eksen boyunca iki yanı aynı anda heykelleştirir; yüzler ve figürler için.
- Heykel yaparken maske, sizin ona bakarken daha koyu görünür. {{ui:Maskeyi temizle}} ({{key:Alt+M}}) onu kaldırır; {{ui:Maskeyi ters çevir}} ({{key:Ctrl+I}}) serbest olanı maskeler ve maskelenmiş olanı serbest bırakır. Maske örgüyle birlikte tutulur.
- {{ui:Ayrıntı}}, heykel yaptığınız yere üçgen ekler: paneldeki boyuttan (ekranda piksel) uzun kenarlar fırçanın altında bölünür. Üçgenlerden oluşan bir örgü gerektirir ve önce bir tane yapmanızı ister.

Her fırça hareketi tek bir geri alma adımıdır.

:::note
Ayrıntı yalnızca üçgen ekler; küçülmüş olanları kaldırmaz. Yeniden örgüleme (Örgü çalışma alanı) tüm örgüyü yeniden düzenler.
:::

Ayrıca bkz. [Örgüyü düzenleme](topic:mesh-edit), [Örgüler](topic:meshes) ve [Örgü üzerindeki değiştiriciler](topic:modifiers).
