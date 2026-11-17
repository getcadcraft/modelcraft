---
title: Başlangıç kütüphanesi
summary: Bir modele yerleştirilecek yaklaşık otuz hazır şey: kapılar ve pencereler, mobilya, mutfak ve banyo, kolonlar ve merdivenler, ağaçlar, insanlar ve bir araba.
keywords: döşe, odayı döşe, mobilya düzeni, yatak odası, oturma odası, mutfak, banyo, ofis, render, kütüphane, başlangıç, çevre, bitkiler, ağaçlar, çalılar, çit, insanlar, arabalar, bileşenler, mobilya, kapı, pencere, sandalye, masa, kanepe, yatak, tuvalet, merdiven, kolon, ağaç, kişi, araba, depo, hazır
from: 3c06b69c
---

{{ui:Başlangıç kütüphanesi}}, gerçek boyutlarda günlük şeyler sunar; böylece bir model bir bakışta okunur: bir odanın ölçeğini göstermek için bir kapı, bir yolda bir araba, bir binanın etrafında insanlar ve ağaçlar.

## Bir tane yerleştirin

1. Soldaki {{ui:Bileşenler}} içinde {{ui:Başlangıç kütüphanesi}} düğmesine tıklayın.
2. {{ui:Sandalye}} gibi bir şey seçin.
3. Nereye gideceğine tıklayın.

Bir zeminde, bir masada ya da yerde üzerinde durur. **Kapılar ve pencereler** duvarlara girecek şekilde yapılmıştır: bir duvara tıkladığınızda içinde durur ve dışarıya bakar. (Duvarın yüzeyinde dururlar; bir açıklık açmazlar. Açıklık yapmak için pencerenin olacağı yere duvarda bir dikdörtgen çizin ve onu iterek geçirin.)

Her şey bir **bileşendir**: aynısını tekrar seçmek bir kopya daha yerleştirir ve birini düzenlerseniz her kopya değişir. Ayrıca {{ui:Bileşenler}} listesinde görünür; daha fazla eklemek için {{ui:Yerleştir}} ile birlikte kullanılır.

## İçinde ne var

| Grup | Şeyler |
|---|---|
| Kapılar ve pencereler | Kapı, çift kapı, pencere, geniş pencere, garaj kapısı |
| Mobilya | Yemek masası, yuvarlak masa, sandalye, bar taburesi, kanepe, koltuk, çift ve tek kişilik yatak, çalışma masası, kitaplık, gardırop |
| Mutfak ve banyo | Alt ve üst dolap, mutfak tezgahı, buzdolabı, ocak, lavabo ünitesi, tuvalet, küvet, duş, lavabo |
| Yapı | Düz merdiven (her biri 18 cm yüksekliğinde 15 basamak), yuvarlak ve kare kolon, kiriş |
| Arazi ve insanlar | Ağaç, çalı, kişi (1.75 m), araba |
| Çevre: ağaçlar, insanlar ve arabalar | Yaprak döken ağaçlar (4, 6 ve 10 m), bir iğne yapraklı, sütun biçimli bir ağaç, yuvarlak ve küçük çalılar, bir çit, saksılı bir bitki, ayakta ve yürüyen insanlar, bir çocuk, bir sedan ve bir SUV: kendi renklerinde daha yuvarlak şekiller, [render edilmiş resimler](topic:render) ve site planları için |

Bunlar, boyayabileceğiniz, ölçeklendirebileceğiniz ya da [benzersiz yapabileceğiniz](topic:groups-components) ve değiştirebileceğiniz katılardan yapılmış basit şekillerdir. Duvar dolabı, tıkladığınız yerin 1.45 m üstünde asılır.

Çevre CadCraft tarafından çizilmiştir ve her amaç için serbesttir (CC0); aynı ağaçlar, insanlar ve arabalar BimCraft ve CadCraft için Library kütüphanesinde de bulunur. Bir arabanın camları {{ui:Renkli cam}} malzemesiyle boyanır; bu yüzden resimlerde geçirgen görünürler.

## Bir render için bir odayı döşeyin

Bir odanın zemininin (modelde ya da bir grup içinde yukarı bakan bir seviye yüzeyi) seçin ve **Yönet › Bir odayı döşe…** kullanın ({{ui:Döşe}} düğmesi). Odanın ne olduğunu seçin — yatak odası, oturma odası, yemek odası, mutfak, banyo ya da ofis — ya da boyutundan tahmin etmesine izin verin. Başlangıç mobilyası duvarlara, en uzun duvardan başlayarak çevreye doğru yerleşir; hiçbiri birbirini kesmez ve odanın duvarlarındaki herhangi bir başlangıç kapısının açılma alanı (ve pencerelerinin genişliği, uzun parçaların önünde) boş kalır. Bu, incelemeniz için kurallarla yapılmış varsayılan bir düzendir, bir tasarım değildir: aynı oda her zaman aynı düzeni alır.

Her şey **Mobilya** etiketinde **tek bir grup** içinde gelir; tek bir geri alma adımıdır. Geri alın, grubu silin ya da etiketi gizleyerek kaldırın. Sığmayan bir parça durum satırında adlandırılır ve **Sorunlar** içinde bir not olarak listelenir. BimCraft'ın **Bir odayı döşe** özelliği aynı kuralları kullanır.
