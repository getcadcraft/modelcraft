---
title: Öğeleri baskı yatağına koyun ve bir yazıcıya gönderin
summary: Yazıcınızın yatağına Kütüphane öğeleri ya da kendi modelinizi ekleyin, düzenleyin, dilimlenmiş katmanlara bakın ve baskıyı USB veya ağ üzerinden gönderin ya da G-kodunu kaydedin; önce bir STL dosyası dışa aktarmanız gerekmez.
keywords: baskı aşaması, 3B baskı, yazıcı, yatak, 3B yazıcıya gönder, dilimleyici, gcode, g-code, usb, klipper, moonraker, octoprint, prusalink, kütüphane, düzenle, tümünü sığdır, katman önizleme, dolgu, destekler, filament, pla, petg, eklenti, 3B baskı eklentisi
from: abcf5d7e
---

{{ui:Baskı aşaması}} öğeleri yazıcınızın yatağına yerleştirir, dilimler ve yazıcıya gönderir. Önce bir dosya dışa aktarmazsınız. Varsayılan olarak açık olan 3B Baskı eklentisine aittir.

:::note
Bununla henüz gerçek bir yazıcıda hiçbir şey basılmadı. Dilimleyici yenidir: ilk baskınızın ilk katmanlarını izleyin ve göndermeden önce katman önizlemesini kullanın.
:::

## Ne yapacaksınız

Modeli yatağa koyun, sığdığını denetleyin, dilimlenmiş katmanlara bakın ve bir yazıcıya gönderin ya da G-kodunu kaydedin.

## Adımlar

1. Araç çubuğunda {{ui:Baskı aşaması}} öğesine tıklayın. Görünümün üzerinde bir kart açılır ve kesik bir çizgi yatağınızı gösterir.
2. **Kütüphaneden ekle** altında arama kutusuna bir ad yazın, {{ui:Ara}} tuşuna basın ve bir sonuçta {{ui:Ekle}} düğmesine basın. Öğe yatağa tam boyutta ya da sığsın diye küçültülmüş olarak yerleşir. Daha önce çizdiğiniz ya da içe aktardığınız ve görünümde görebildiğiniz her şey de yatağın üzerindedir.
3. **Yatakta** altında her öğenin boyutunu denetleyin. **Yatak dışında** işaretli bir öğenin taşınması gerekir. Görünümde öğeleri olağan araçlarla taşıyın, döndürün ve ölçekleyin.
4. Öğeleri yaymak için {{ui:Yatakta düzenle}} düğmesine, sığana kadar küçültmek için {{ui:Tümünü yatağa sığdır}} düğmesine basın.
5. **Yazıcınız** altında **Yatak** boyutunu ya da yazıcı profillerinden birini seçin.
6. **Baskı ayarları** altında **Malzeme**, **Kalite** ve **Dolgu %** seçin; şekil gerektiriyorsa **Çıkıntıların altına destek ekle** kutusunu işaretleyin.
7. {{ui:Katmanları önizle}} düğmesine basın ve dilimlenmiş katmanlara bakmak için **Katman** kaydırıcısını hareket ettirin. Sonradan aşamayı ya da ayarları değiştirirseniz {{ui:Katmanları önizle}} düğmesine yeniden basın.
8. **Bağlantı** altında {{ui:USB kablosu}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} ya da {{ui:PrusaLink}} seçin. USB için {{ui:Bağlan}} düğmesine basın. Ağ yazıcısı için **Adres** (ve sorarsa **API anahtarı**) yazın, sonra {{ui:Bağlantıyı sına}} düğmesine basın.
9. {{ui:3B yazıcıya gönder}} düğmesine basın. Kart yatağın boş olup olmadığını ve doğru malzemenin yüklü olup olmadığını sorar; süreyi, malzemeyi ve sıcaklıkları gösterir. Göndermek için onaylayın.

Yazıcının başladığına dair bir ileti alırsınız. {{ui:Baskıyı durdur}} ısıtıcıları, fanı ve motorları kapatır. Yalnızca bir dosya istiyorsanız {{ui:Bunun yerine G-kodunu kaydet}} düğmesine basın.

## Notlar

- USB için bilgisayarda Chrome veya Edge gerekir ve baskı bitene kadar sayfa açık kalmalıdır. Kapatmak akışı durdurur.
- Bir ağ yazıcısının bu siteye izin vermesi gerekir (Moonraker'da `cors_domains` alanına ekleyin; OctoPrint'te CORS'u açın ve bir API anahtarı kopyalayın). Tarayıcınız ağınızdaki aygıtlara erişmek için izin isteyebilir.
- Siz tıklamadan hiçbir şey bağlanmaz ya da gönderilmez.
- Dilimleyici listesi **Dilimleyici** altındadır. {{ui:CadCraft temel (dahil, en hızlı)}} yerleşiktir. Kiri:Moto, PrusaSlicer, OrcaSlicer ve Bambu Lab P2S, kendi eklentileridir; bunları karttan ya da {{ui:Ayarlar}} › {{ui:Eklentiler}} altından açarsınız. PrusaSlicer ve OrcaSlicer kendi kopyanızı kullanır ve bir bilgisayarda CadCraft Studio'dan çalışır.
- Kapalı katı olmayan parçalar dışarıda bırakılır ve kart şeklin bunun ne kadarını oluşturduğunu söyler.
- Reçineli yazıcılar için [Reçine yazıcı için dilimleyin](topic:resin-printing) bölümüne bakın. Bir modeli önce denetlemek ya da onarmak için [Destekler, duvar kalınlığı, içini boşaltma ve onarım](topic:print-tools) bölümüne bakın.
