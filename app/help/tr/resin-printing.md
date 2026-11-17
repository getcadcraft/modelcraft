---
title: Reçine yazıcı için dilimleme
summary: Baskı aşamasının tablasını reçine yazıcı için dilimleyin, parçayı içi boş yapın ve destekleyin, katmanlara bakın, yazıcının dosyasını kaydedin ve pozlama testiyle pozlamanızı bulun.
keywords: reçine, reçine baskı, sla, msla, dlp, dilimleyici, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, içi boş, havalandırma deliği, raft, destekler, pozlama testi, pozlama merdiveni, kalibrasyon, katmanlar, eklenti
from: 83c394e1
---

Reçine eklentileri, baskı tablasındaki nesneyi yazıcınızın ekranı için katman resimlerine böler ve yazıcınızın okuduğu dosyayı kaydeder. Ücretsizdirler, hiçbir şey kilitli değildir ve siz açana kadar kapalıdırlar.

:::note
Gerçek bir yazıcıda henüz hiçbir dosya denenmedi. Dosyalar yalnızca CadCraft'ın kendi okuyucularıyla geri okundu ve destekler yenidir. Katmanları kontrol edin ve ilk baskınızı elle çalıştırın.
:::

## Yapacaklarınız

Bir parçayı reçine için dilimleyin, katmanları kontrol edin, dosyayı kaydedin ve yazıcınıza kopyalayın.

## Adımlar

1. {{ui:Ayarlar}} › {{ui:Eklentiler}} bölümüne gidin ve reçine dilimleyici eklentisini ile yazıcınızın dosya biçimi eklentisini (Elegoo GOO, SL1, Chitubox veya Anycubic) açın. Baskı aşaması kartındaki {{ui:Reçine baskıyı ekle}} düğmesine de basabilirsiniz.
2. Parçanızı [Baskı tablasına nesne koyma](topic:print-stage) bölümündeki gibi tablaya yerleştirin, sonra **Yazdırma yöntemi** yanından {{ui:Reçine}} seçin.
3. **Reçine baskı ayarları** altında **Yazıcı** ve **Reçine** seçin. Kart ekran boyutunu piksel olarak gösterir. Bunlar üreticinin yayımladığı boyutlardır; sizinkini kontrol edin. Özel altında düzenleyebilirsiniz.
4. **Katman yüksekliği (mm)**, **Pozlama (s)** ve **Alt pozlama (s)** değerlerini ayarlayın. Her reçine için sayılar yalnızca bir başlangıç noktasıdır.
5. Içi boş bir parça istiyorsanız **İçini boşalt, havalandırma deliğiyle** kutusunu işaretleyin ve **Duvar (mm)** ile **Delik genişliği (mm)** değerlerini ayarlayın.
6. **Destekler ve kaide** kutusunu işaretleyin ve **Destek yoğunluğu** seçin: Hafif, Orta veya Yoğun.
7. **Dosya biçimi** seçin. Kart henüz hiçbirinin eklenmediğini söylüyorsa, biçimin adını içeren Ekle düğmesine basın.
8. {{ui:Katmanları önizle}} düğmesine basın ve **Katman** kaydırıcısını hareket ettirin. Havada asılı parçalar halkayla işaretlenir. Altındaki satır katmanları, süreyi ve reçineyi mL, gram ve maliyet olarak verir.
9. {{ui:Baskı dosyasını kaydet}} düğmesine basın, özeti kontrol edin ve {{ui:Kaydet}} düğmesine basın. Dosyayı yazıcınıza kopyalayın.

## Pozlamanızı bulun

1. {{ui:Ayarlar}} › {{ui:Eklentiler}} bölümünde pozlama testi eklentisini açın.
2. {{ui:Test parçasını tablaya koy}} düğmesine basın.
3. {{ui:Pozlama merdivenini kaydet}} düğmesine basın. Her pozlama için bir dosya alırsınız; hepsi bir zip dosyası içindedir.
4. Her dosyayı aynı reçineyle yazdırın ve en keskin ince sütunlara ve açık deliklere sahip pozlamayı saklayın.

## Notlar

- Dilimleme arka planda çalışır; bu yüzden büyük bir tablada sayfa kullanılabilir kalır.
- Kapalı katı olmayan parçalar dışarıda bırakılır ve kart bunu belirtir.
- Yazıcınız bir dosyayı reddederse biçim kartında, biçimin açık bıraktığı şeyler için seçenekler vardır. Birini değiştirin, yeniden kaydedin ve hangisinin işe yaradığını bize bildirin.
- Anycubic 517 ve 518 sürümleri yazılmaz.
