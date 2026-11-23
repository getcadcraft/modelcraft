---
title: Reçine yazıcı için dilimleme
summary: Baskı aşamasındaki tablayı reçine yazıcı için dilimleyin, parçayı boşaltın ve destekleyin, katmanlara bakın, yazıcının dosyasını kaydedin ve pozlama testiyle pozlamanızı bulun.
keywords: reçine, eğim öner, emme kupası, soyma kuvveti, çaprazlama, reçine baskı, sla, msla, dlp, dilimleyici, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, boşaltma, havalandırma deliği, taban, destekler, pozlama testi, pozlama merdiveni, kalibrasyon, katmanlar, eklenti
from: 8cc12858
---

Reçine eklentileri, tabladaki nesneyi yazıcınızın ekranı için katman resimlerine dilimler ve yazıcınızın okuduğu dosyayı kaydeder. Ücretsizdirler, hiçbir özellik kilitli değildir ve siz açana kadar kapalıdırlar.

:::note
Henüz gerçek bir yazıcıya hiçbir dosya yüklenmedi. Dosyalar yalnızca CadCraft'ın kendi okuyucularıyla geri okundu ve destekler yenidir. Katmanları kontrol edin ve ilk baskınızı elle çalıştırın.
:::

## Yapacaklarınız

Bir parçayı reçine için dilimleyin, katmanları kontrol edin, dosyayı kaydedin ve yazıcınıza kopyalayın.

## Adımlar

1. {{ui:Ayarlar}} › {{ui:Eklentiler}} bölümünü açın ve reçine dilimleyici eklentisini ile yazıcınızın dosya biçimi eklentisini (Elegoo GOO, SL1, Chitubox veya Anycubic) açın. Baskı aşaması kartındaki {{ui:Reçine baskıyı ekle}} düğmesine de basabilirsiniz.
2. Parçanızı [Tablaya nesne koyma](topic:print-stage) bölümünde anlatıldığı gibi tablaya koyun, ardından **Yazdırma yöntemi** yanından {{ui:Reçine}} seçeneğini seçin.
3. **Reçine baskı ayarları** altında **Yazıcı** ve **Reçine** seçin. Kart, ekran boyutunu piksel olarak gösterir. Bunlar üreticinin yayımladığı boyutlardır, kendi yazıcınızınkini kontrol edin; **Özel** altında bunları düzenleyebilirsiniz.
4. **Katman yüksekliği (mm)**, **Pozlama (s)** ve **Alt pozlama (s)** değerlerini ayarlayın. Her reçine için verilen sayılar yalnızca bir başlangıç noktasıdır.
5. İçi boş bir parça istiyorsanız **Boşalt, havalandırma deliğiyle** kutusunu işaretleyin ve **Duvar (mm)** ile **Delik genişliği (mm)** değerlerini ayarlayın.
6. **Destekler ve taban** kutusunu işaretleyin ve **Destek yoğunluğu** seçin: Hafif, Orta veya Yoğun.
7. **Dosya biçimi** seçin. Kart henüz hiçbirinin eklenmediğini söylüyorsa, Ekle yazan düğmeye ve biçimin adına basın.
8. {{ui:Katmanları önizle}} düğmesine basın ve **Katman** kaydırıcısını hareket ettirin. Havada kalan parçalar halka içine alınır. Altındaki satır katman sayısını, süreyi ve reçineyi mL, gram ve maliyet olarak verir.
9. {{ui:Baskı dosyasını kaydet}} düğmesine basın, özeti kontrol edin ve {{ui:Kaydet}} düğmesine basın. Dosyayı yazıcınıza kopyalayın.

## Eğim, emme kupaları, çaprazlar ve soyma değeri

Bu dört değer parçanın şeklinden yapılan tahminlerdir. Hiçbiri gerçek bir yazıcıda denenmedi, bu yüzden her birini bir ipucu olarak görün ve katmanlara bakın.

1. **Eğim (derece)** altında {{ui:Eğim öner}} düğmesine basın. CadCraft 0 ile 60 derece arasındaki eğimleri dener ve en küçük en büyük katmana, en az sarkan yüzeye ve emme kupası olmayan eğimi seçer. **Eğim (derece)** değerini ayarlar ve ne bulduğunu söyler. Puanlama ağırlıkları bizimdir, bir yazıcı üreticisinin değil.
2. {{ui:Katmanları önizle}} düğmesinden sonra bir uyarı, yalnızca film yönüne açılan boşlukları gösterir. Böyle bir boşluk, bir katman soyulurken emme tutabilir. Parçayı eğdirin veya bir delik ekleyin. Uyarıdaki hücre boyutundan dar cepler görülmez.
3. **Destekler ve taban** açıkken, uzun ince sütunlar arasına çapraz çaprazlar eklemek için **Uzun destekleri çaprazla** kutusunu işaretleyin.
4. Önizlemenin altındaki satır en büyük katmanı cm2 olarak verir. Bir kuvveti yalnızca **Alt katmanlar, kaldırma ve hızlar** altında **Ölçtüğünüz soyulma gerilimi** değerini girerseniz gösterir. Kendi ölçtüğünüz bir değer yoksa yalnızca alanı gösterir.

## Pozlamanızı bulun

1. {{ui:Ayarlar}} › {{ui:Eklentiler}} bölümünde pozlama testi eklentisini açın.
2. {{ui:Test parçasını tablaya koy}} düğmesine basın.
3. {{ui:Pozlama merdivenini kaydet}} düğmesine basın. Her pozlama için bir dosya, bir zip içinde gelir.
4. Her dosyayı aynı reçine ile yazdırın ve en keskin ince sütunlara ve açık deliklere sahip pozlamayı saklayın.

## Notlar

- Dilimleme arka planda çalışır, bu yüzden büyük bir tablada sayfa kullanılabilir kalır.
- Kapalı katı olmayan parçalar dışarıda bırakılır ve kart bunu söyler.
- Yazıcınız bir dosyayı reddederse, biçim kartında biçimin açık bıraktığı şeyler için seçenekler vardır. Birini değiştirin, yeniden kaydedin ve hangisinin işe yaradığını bize bildirin.
- Anycubic 517 ve 518 sürümleri yazılmaz.
