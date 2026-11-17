---
title: Ölçün ve kılavuzları yerleştirin
summary: Uzunlukları ve alanları okuyun, şerit metre ile iki nokta arasını ölçün ve üzerine çizim yapmak için kılavuz çizgileri ve noktaları yerleştirin.
keywords: ölçü, şerit metre, açıölçer, açı, açılı kılavuz, kılavuz, kılavuz çizgisi, yapı çizgisi, mesafe, ölçülendirme, uzunluk, alan, ofset, yerleşim, kılavuz noktası
from: de6d04d9
---

## Ölçmeden boyutları okuyun

Bir şey seçin ve {{ui:Öğe bilgisi}} bölümüne bakın:

- Bir kenar **uzunluğunu** gösterir.
- Bir yüzey **alanını** ve kaç deliği olduğunu gösterir.
- Birkaç yüzey **toplam alanını** gösterir.
- Bir grup ya da bileşen **boyutunu** (çevresindeki kutunun genişliği × derinliği × yüksekliği) ve kapalı bir katıysa **hacmini** gösterir.
- Hiçbir şey seçili değilken {{ui:Öğe bilgisi}} tüm modelin boyutunu gösterir.

Uzunluklar ve alanlar sağ alttaki seçicideki birimi kullanır. Milimetre cinsinden bir modelde 0.01 m² ve üzeri alanlar metrekare olarak gösterilir (4 × 3 m'lik bir oda "12 m²" okunur).

Çizim yaparken değer kutusu canlı uzunluğu, boyutu, yarıçapı ya da mesafeyi gösterir; bu yüzden sonradan ölçmeniz nadiren gerekir.

Çizdikten sonra bir boyutu değiştirmek için bir kenar ya da grup seçin ve uzunluğunu ya da boyutunu {{ui:Öğe bilgisi}} içinde yeniden yazın. Ya da bir [ölçülendirme](topic:dimensions) yerleştirip içine yeni bir uzunluk yazın.

## İki nokta arasını ölçün

1. {{ui:Şerit metre}} ölçümü için {{key:T}} tuşuna basın.
2. Bir nokta tıklayın: bir köşe, bir orta nokta, bir yüzey üzerindeki bir nokta ya da zemin. (Bir kenara tıklamak başka bir şey yapar; aşağıya bakın.)
3. İkinci noktaya gidin. Uç ve değer kutusu ({{ui:Uzunluk}}) mesafeyi gösterir. Noktalara ve kırmızı, yeşil ve mavi yönlere yapışır.
4. Tıklayın. Durum çubuğu "4' 6"." ölçüldü." yazar ve ikinci noktada bir **kılavuz noktası** kalır.

Bunun yerine kılavuz noktasını tam bir mesafede bırakmak için ilk tıklamadan sonra mesafeyi yazın ve {{key:Enter}} tuşuna basın: işaret ettiğiniz yönde gider.

## Kılavuz çizgisi yerleştirin

Kılavuz çizgisi, bir kenara paralel, seçtiğiniz bir mesafedeki sonsuz kesikli bir çizgidir. Geri çekilmeyi, kat yüksekliğini ya da bir pencerenin nerede başladığını yerleştirmek için kılavuz kullanın.

1. {{key:T}} tuşuna basın.
2. Bir **kenara** tıklayın (ucuna değil). Uç "Kenarda" der.
3. Kenardan kılavuzun olması gereken tarafa uzaklaşın. Kenara paralel kesikli bir çizgi takip eder ve değer kutusu ({{ui:Ofset}}) mesafeyi gösterir.
4. Tıklayın ya da ofseti yazıp {{key:Enter}} tuşuna basın: `1.5m`, `5'`.

   Durum çubuğu "Kılavuz çizgisi kenardan 1.5 m uzakta." yazar.

Mevcut bir kılavuz çizgisinden başlamak, ona paralel başka bir kılavuz oluşturur; böylece bir kılavuzdan bir ızgarayı adım adım dışarı doğru genişletebilirsiniz.

Kenardan önce uzaklaşmadan bir ofset yazarsanız, ModelCraft hangi tarafı kastettiğinizi bilemez: "Hangi tarafın gösterileceğini belirtmek için önce kenardan uzaklaşın."

## Açılı kılavuz: Açıölçer

1. {{ui:Değiştir}} grubundaki {{ui:Açıölçer}} seçeneğine tıklayın.
2. Merkeze tıklayın: kılavuzun geçtiği nokta. Bir yüzeyde açıölçer o yüzeyin üzerine yatar; başka yerlerde düz durur. Bu tıklamadan sonra {{key:Right}}, {{key:Left}} ya da {{key:Up}} onu kırmızı, yeşil ya da mavi yöne dik duracak şekilde ayarlar (geri almak için yeniden basın).
3. 0° değerini belirleyen bir noktaya tıklayın, örneğin bir kenar boyunca.
4. İstediğiniz açıya gidin ve tıklayın: 15° adımlarına yapışır. Ya da açıyı derece olarak yazın, örneğin `22.5`, ve {{key:Enter}} tuşuna basın; kılavuz imlecin olduğu tarafa gider.

Kılavuz çizgisi merkezden o açıyla geçer. Bir çatı eğimi, bir pah ya da eğik bir duvar için {{ui:Çizgi}} ile üzerinde çizim yapın.

## Kılavuzlara karşı çizin

Çizim araçları kılavuz çizgilerine ("Kılavuz üzerinde") ve kılavuz noktalarına ("Kılavuz noktası") yapışır; ayrıca bir kılavuz çizgisinin bir eksen yönünü kestiği yere de yapışır. Tam olarak yerleştirmek için iki kılavuzun kesiştiği yerde bir dikdörtgen başlatın.

## Kılavuzları kaldırın

- Tek bir kılavuz: {{ui:Seç}} ile tıklayın ve {{key:Delete}} tuşuna basın ya da {{ui:Silgi}} ile tıklayın.
- Tüm kılavuzlar: hiçbir şey seçili değilken {{ui:Öğe bilgisi}} içinde {{ui:Tüm kılavuzları sil}} seçeneğine tıklayın.

Kılavuzlar `.modelcraft` dosyasına kaydedilir. Diğer biçimlere aktarılmazlar.
