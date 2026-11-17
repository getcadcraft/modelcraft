---
title: Destekler, duvar kalınlığı, içini boşaltma ve onarım
summary: Baskının nerede destek gerektirdiğini ve yaklaşık ne kadar gerektirdiğini görün, yazdırılamayacak kadar ince duvarları bulun, bir parçayı tahliye delikleriyle belirli bir duvar kalınlığına kadar boşaltın ve bir ağı her düzeltme listelenmiş olarak onarın.
keywords: 3B baskı, destekler, destek önizlemesi, çıkıntı, ağaç destekler, kolon destekler, duvar kalınlığı, ince duvarlar, çok ince, meme, içini boşaltma, boşaltma, kabuk, tahliye deliği, reçine, onarım, ağı onar, manifold dışı, ters çevrilmiş yüzeyler, delikler, küçük kabuklar, kendini kesme, çakışma, birleştir
from: 286bde26
---

Bir modeli 3B yazıcıya hazırlamak için dört araç. {{ui:Dışa aktar}} › {{ui:3B baskı için denetle (STL veya 3MF)…}} yolunu açın; iletişim kutusundaki **Baskı araçları** satırında {{ui:Destek önizlemesi}}, {{ui:Duvar kalınlığı}}, {{ui:İçini boşalt}} ve {{ui:Onar}} bulunur. Her biri görünümün üzerinde bir kart olarak açılır; {{ui:Kapat}} (çarpı işareti) kartı ve işaretlerini kaldırır. Aynı anda yalnızca bir kart gösterilir.

Her araç yazdırılacak olan üzerinde çalışır: seçim, ya da hiçbir şey seçili değilse görünen her şey. {{ui:İçini boşalt}} ve {{ui:Onar}}, değiştirdikleri için seçili bir grup, bileşen ya da ağ gerektirir.

## Destek önizlemesi

Dikeyden **çıkıntı açısı** değerinden daha fazla dışarı yatan yüzeyler kırmızıyla gölgelenir ve bunlardan (turuncu) yatağa ya da altlarındaki model kısmına kadar basit destekler çizilir.

- **Çıkıntı açısı**: 45° çoğu yazıcının destek olmadan başarabildiği değerdir. Köprü kurmada iyi olan bir yazıcı için artırın.
- **Kolonlar**: her çıkıntının altında her 3 mm'de bir düz kolon. Tahmin bunları 15% bir destek deseni olarak sayar.
- **Ağaç**: yakın noktalar ortalarının altında tek bir gövdede birleşir; hiçbir dal 45°'den fazla yatmaz. Ağaçlar genellikle daha az malzeme alır ve yatağa daha az noktada dokunur.

Kart ne kadar yüzeyin destek gerektirdiğini, kaç destek noktası olduğunu ve bunların yaklaşık ne kadar malzeme aldığını söyler. Modelin üzerinde duran (yatakta değil) destekler sayılır: orada izler bırakırlar. {{ui:Ayarlar}}'da bir yazıcı yatağı seçiliyse, yatak modelin altında çizilir.

:::note
Bu bir önizlemedir, dilimleyici değildir: gerçek destekleri dilimleyiciniz belirler. Çok büyük bir çıkıntıda destek noktaları, önizlemenin hızlı kalması için daha geniş yayılır; kart bunu söyler.
:::

## Duvar kalınlığı

Her yüzey, katının içinden düz olarak diğer tarafa kadar ölçülür. **İzin verilecek en ince duvar** değerinin altındaki duvarlar kırmızı, bunun bir buçuk katının altındakiler turuncudur: yazdırılırlar, ancak zayıf çıkabilirler.

İnce alanlar, en inceden başlayarak, ne kadar ince ve ne kadar büyük olduklarıyla listelenir. {{ui:Göster}} kamerayı o alana çevirir.

Bir yazıcı, memesinin yaklaşık iki genişliğinden daha ince bir duvar yapamaz: yaygın 0.4 mm memede 0.8 mm (başlangıç değeri). Reçineli yazıcılar daha azını yapabilir; yazıcınızın kılavuzuna bakın.

Çok büyük bir modelde yalnızca bazı yüzeyler ışın gönderir, diğerleri komşularının kalınlığını alır; kart kaçının ölçüldüğünü söyler.

## İçini boşaltma

İçini boşaltma, dış yüzeyi olduğu gibi tutar ve içini çıkarır; duvarları istediğiniz kalınlıkta bırakır. Reçine baskılar daha az reçine kullanır ve yapı plakasına daha az çeker; filament baskılar dolgunun yapacağından daha az plastik kullanır.

1. Grubu, bileşeni ya da ağı seçin, sonra {{ui:İçini boşalt}} öğesini açın.
2. **Duvarı** (başlangıçta 2 mm) ve **tahliye deliklerinin** genişliğini ayarlayın.
3. Reçine baskı için {{ui:Tahliye deliği yerleştir}} öğesine tıklayın, sonra modelin dış yüzeyinde gideceği yere tıklayın: yapı plakasının yakınında, aşağıda, sıvı reçinenin dışarı akması için. İhtiyacınız kadar yerleştirin; her biri mavi bir daire olarak görünür ve {{ui:Kaldır}} ile listelenir.
4. {{ui:Önizleme}}, içini boşaltmanın ne kadar çıkardığını söyler.
5. {{ui:İçini boşalt}} değişikliği yapar: {{key:Mod+Z}} ile geri alınan tek bir adım.

Sonuç, 3B baskı denetiminin kabul ettiği tek bir kapalı katıdır: ModelCraft önce onu denetler ve geçmeyecekse hiçbir şeyi değiştirmez. Model iki duvardan daha ince olduğu yerde katı kalır. Sonuç, düz yüzeyleri tek yüzey olan bir gruptur, böylece onu {{ui:İt/çek}} ile modellemeye devam edebilirsiniz; ince ızgarada içi boşaltılmış eğri bir parça genellikle bunun için çok fazla yüzeye sahip olur ve bunun yerine bir ağ olur; hangisi olduğunu durum satırı söyler.

:::tip
Çoğu şekilde iç yüzey, dış yüzeyin tam olarak duvar kadar içeri alınmış hâlidir. Köşeler ya da ince parçalar bunu imkânsız kıldığında, ModelCraft bunun yerine dış yüzeyi ince bir ızgarada duvar uzaklığında izler; kart o zaman ne kadar yakın olduğunu söyler (milimetrenin bir kesrinden daha az sapmayla).
:::

## Onarım

{{ui:Onar}}, seçili parçaya bir yazıcının dilimleyicisinin bakacağı gibi bakar, güvenle düzeltebildiği şeyleri düzeltir ve her düzeltmeyi listeler:

| Düzeltir | Bu ne anlama gelir |
|---|---|
| Alanı olmayan üçgenler | dışarıda bırakılır |
| İki kez çizilen bir üçgen | bir kopya tutulur; kendisiyle sırt sırta çizilmiş bir yüzey (kalınlığı olmayan) kaldırılır |
| 0.5 mm'den küçük gevşek parçalar | kaldırılır |
| Yanlış yöne bakan üçgenler | komşularına uyacak şekilde çevrilir |
| Delikler, düz ya da değil | her deliğin ortasından yeni üçgenlerden bir yelpazeyle kapatılır |
| Ters çevrilmiş bir parça | dışa doğru çevrilir (başka bir parçanın içindeki boşluk olduğu gibi bırakılır: içe bakacak şekilde tasarlanmıştır) |

{{ui:Güvenli olanları düzelt}}, hepsini {{key:Mod+Z}} ile geri alınan tek bir adımda yapar ve durum satırı her düzeltmeyi listeler. Düzeltilen parça, düz yüzeyleri tek yüzey olan bir grup olur. Hâlâ kapanmazsa (**Sizin için bırakılanlar** altında bir şey kalırsa) ya da bir grup için çok fazla yüzeye sahip olacaksa, bunun yerine bir ağ olur: yüzeyleri üçgen kalır ve düz yüzeyler yine düz görünür. Durum satırı hangisi olduğunu söyler. {{ui:Çakışan parçaları birleştir}} aynı şekilde çalışır.

Güvenle düzeltilemeyenler **Sizin için bırakılanlar** altında listelenir ve görünümde mor renkle, {{ui:Göster}} ile işaretlenir:

- **Üç veya daha fazla yüzeyin buluştuğu kenarlar**: hangi yüzeyin ait olduğuna karar verin ve diğerlerini silin.
- **Kendi içinden geçen bir parça**: o parçayı taşıyın ya da yeniden çizin. Bkz. [Yüzeyleri kesiştir](topic:intersect).
- **Kapatılamayacak kadar büyük ya da karmaşık delikler**: üzerlerinden yüzeyler çizin.
- **Çakışan ayrı parçalar**: dilimleyiciler bunları yine de birleştirir. {{ui:Çakışan parçaları birleştir}} onları tek bir kapalı gövde yapar (birleştikleri yerdeki yüzeyleri yeniden kurar; bu yüzden ayrı bir düğmedir ve sizin yerinize asla yapılmaz).

İt/çek grupları için ayrıca {{ui:Öğe bilgisi}} › {{ui:Sorunları göster}} / {{ui:Düzelt}} ile birer birer düzeltebilirsiniz; bu, çizdiğiniz yüzeyleri korur. Bkz. [Katı araçları](topic:solids).

İlgili: [Modeli 3B baskıya hazırlayın](topic:print-3d) · [Başlangıç stili](topic:beginner) · [Henüz yapılmadı](topic:not-built-yet#3d-printing)
