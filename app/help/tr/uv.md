---
title: Bir örgünün UV'lerini düzenleme
summary: Bir örgünün doku koordinatlarını UV çalışma alanında dikiş işaretleyerek, açarak, yansıtarak ve paketleyerek düzenleyin; bir damalı desen ve gerilme renkleriyle kontrol edin.
keywords: uv, uv'ler, açma, dikiş, dikişler, doku, doku koordinatları, atlas, paketleme, ada, adalar, dama, gerilme, bozulma, kutu yansıtma, silindir yansıtma, küre yansıtma, konform, açı tabanlı, lscm, abf
from: 00028f20
---

Doku düz bir resimdir; örgü ise düz değildir. Onun **UV**'leri her yüzün her köşesinin resimde nerede durduğunu söyler. UV çalışma alanı bunları oluşturur: örgüyü **dikişler** boyunca kesersiniz, parçaları düz bir hâle getirirsiniz (**Aç**) ve kareye yerleştirirsiniz (**Paketle**).

## Çalışma alanını açın

Bir örgü seçin ve Çalışma alanı listesinden {{ui:UV}} öğesini seçin. Bir grup veya bileşen, Örgü çalışma alanındaki gibi önce bir örgüye dönüşür. 3B görünüm sol yarıya geçer; sağdaki **UV düzenleyicisi** örgünün yüzlerini doku karesi üzerinde yerleştirilmiş olarak gösterir. Seçim, Örgü çalışma alanındaki gibi çalışır ve bir görünümde seçtiğiniz şey diğerinde de seçilir.

## Dikiş işaretleyin

Dikişler, örgünün kesilip açılabileceği yerlerdir; iki görünümde de kırmızı görünürler.

- Kenarları seçin ({{ui:Kenar}} veya {{key:2}}) ve {{ui:Dikiş işaretle}} ({{key:Ctrl+E}}) düğmesine basın. {{ui:Dikişi temizle}} ({{key:Ctrl+Shift+E}}) bunları kaldırır.
- {{ui:Keskinlerde dikiş}} her keskin kenarı ve yüzlerin 60°'den fazla açıyla birleştiği her kenarı işaretler: bir kutu altı yüzüne ayrılır.
- {{ui:UV'lerden dikiş}} UV'lerin zaten koptuğu yerlerde dikişleri işaretler; örneğin bir yansıtmadan sonra.

Kapalı bir parçanın düz yatabilmesi için dikişlere ihtiyacı vardır: bir top en az bir kesim, bir boru ise uzunluğu boyunca bir kesim gerektirir.

## Açın

Düzenlenecek yüzleri seçin (ya da tüm örgü için hiçbirini seçmeyin) ve {{ui:Aç}} ({{key:U}}) düğmesine basın. Dikişler arasındaki her parça, açıları mümkün olduğunca doğru tutularak düz bir hâle getirilir (açı tabanlı düzleştirme); ardından parçalar kareye paketlenir. {{ui:Konform}} bunun yerine en küçük kareler konform eşlemeleriyle açar: daha hızlıdır, ama güçlü eğrili parçalarda biraz daha az doğrudur. Düz bir levhadan yapılabilecek bir şekil, örneğin bir silindirin bir kez kesilmiş yan yüzü, hiç gerilmeden açılır.

## Yansıtın

Basit şekiller için bir yansıtma çoğu zaman yeterlidir:

| Yansıtma | Ne yapar |
| --- | --- |
| {{ui:Kutu}} | Her yüzü, en çok baktığı kutu yüzüne yansıtır |
| {{ui:Silindir}} | Mavi eksen etrafında: yatay yön çevre açısı, dikey yön yükseklik |
| {{ui:Küre}} | Merkezden: yatay yön çevre açısı, dikey yön enlem |
| {{ui:Görünümden}} | Yüzler şu an 3B görünümde göründükleri gibi |

Silindirin veya kürenin birleşim yerinde kalan bir yüz tek parça olarak tutulur; bu yüzden UV'leri karenin sağ kenarını biraz aşabilir; doku orada tekrar eder.

## Düzenleyin

- {{ui:Paketle}} parçaları (adaları) kareye, her biri en az yer kaplayacak şekilde döndürülmüş olarak ve tek bir texel boyutunda sığdırır. Panel aralarında bırakılan boşluğu ayarlar.
- {{ui:90° döndür}} ve {{ui:Aynala}} seçili yüzlerin UV'lerini döndürür veya aynalar.
- UV düzenleyicisinde seçili bir yüzü sürükleyerek seçimin UV'lerini taşıyın ya da düzenleyicinin üzerinde {{key:R}} veya {{key:S}} tuşuna basıp sonra hareket ettirerek döndürün veya ölçekleyin (tıklamak değişikliği tutar, {{key:Esc}} iptal eder). {{key:G}} sürüklemeden taşır. Bir yüze çift tıklayın (ya da {{key:L}}) tüm adasını seçersiniz. Tekerlek yakınlaştırır; orta veya sağ düğmeyle sürükleyerek kaydırın; {{key:F}} kareyi yeniden sığdırır.

Her değişiklik tek bir geri alma adımıdır.

## Kontrol edin

- {{ui:Dama}} örgünün üzerinde, UV'lerine göre etiketli bir dama deseni gösterir: düzgün, kare dama kareleri dokunun düzgün yattığını gösterir; etiketler hangi yöne gittiğini gösterir.
- {{ui:Gerilme}} her yüzü UV'lerinin onu ne kadar gerdiğine göre renklendirir: mavi hiç yok, yeşil orta, kırmızı çok. Panel, bunun **açıların bükülmesini** mi yoksa **boyutun değişmesini** mi ölçeceğini seçer ve ortalamayı gösterir.

Ayrıca bakın: [Bir örgüyü düzenleyin](topic:mesh-edit), [Örgüler](topic:meshes) ve [Bir örgüdeki değiştiriciler](topic:modifiers).
