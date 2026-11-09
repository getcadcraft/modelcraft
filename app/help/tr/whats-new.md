---
title: Yenilikler: 0.8 ve 0.8.1
summary: Dış programlar için dosyalarla bir Motor seçimi, ölçülü süreklilikli serbest biçimli NURBS yüzeyler, asistanınıza tarif ettiğiniz bir sahne, tek bir fotoğraftan yapılan bir malzeme, zemine bir eskiz fotoğrafı, döşenmiş odalar, 3B baskı için eğik kesimler ve Sorunlar panelinde baskı denetimi.
keywords: yenilikler, neler yeni, sürüm notları, değişiklik günlüğü, değişiklikler, 0.8, 0.8.1, sürüm, yeni özellikler, render motoru, motor, şununla aç, usd, gltf, unreal, eklenti motoru, nurbs, yüzeyler, loft, süpürme, süreklilik, g0, g1, g2, zebra, step, iges, sahneyi söyle, sahne, hava durumu, gün saati, mevsim, asistan, fotoğraftan malzeme, fotoğraf, eskiz fotoğrafı, döşe, bir odayı döşe, eğik kesim, bölme, baskı denetimi, sorunlar, özellik tablosu, lambalar, diller, giriş aygıtları, araç çubuğu satırları, dwg, canlı
from: e4989b17
---

Bu, ModelCraft 0.7 ile karşılaştırıldığında ModelCraft 0.8 (2026-11-01) ve 0.8.1 (2026-11-02) sürümlerinde neyin değiştiğidir. {{ui:Resim render et…}} iletişim kutusu artık sahneyi başka bir programa gönderebilir, {{ui:Yüzeyler}} paneli pürüzsüz serbest biçimli yüzeyler oluşturur ve bağladığınız bir asistan tek bir cümleyle tüm sahneyi kurabilir.

## Yeni

### Render alma

- **Bir Motor seçimi.** {{ui:Resim render et…}} iletişim kutusunda Mod'un üstünde bir **Motor** listesi var. Kendi iki motorumuz, Hızlı ve Path tracer, varsayılandır ve her yerde çalışır. Diğer girdiler sahneyi, başka bir programa götürmek üzere bir paket olarak kaydeder (modelin bir USD dosyası ile tam malzeme değerleri, açık olan lambalar, güneş, gökyüzü, pozlama ve kamerayı içeren bir ayar dosyası). Başka bir programın çizdiği bir resim, hangi programın ve sürümün çizdiğini belirtir. Bkz. [Resmi hangi programın çizeceğini seçin](topic:render-engines).
- **Başka bir programda aç.** Motor listesi sahneyi bir USD dosyası, bir glTF dosyası (`.glb`) veya bir Unreal proje klasörü (`.zip`) olarak kaydedebilir; tarayıcıda ve CadCraft Studio'da. Studio'da dosya için usdview'i ya da bilgisayarın kendi programını da başlatabilir. Bkz. [Sahneyi başka bir programda açın](topic:render-open-in).
- **Studio'dan bir oyun motoruna gönderin.** Studio, sahneyi bir Unreal Engine projesine yazar ve her gönderimde onu tek yönlü olarak güncel tutar. Sizin kendi düzenlemeleriniz, CadCraft'ın hiçbir zaman yazmadığı bir katmanda durur. Bkz. [Sahneyi bir oyun motoruna gönderin](topic:render-unreal).
- **Eklentilerden motorlar.** Bir eklenti listeye bir motor ekleyebilir. JavaScript ile yazılmış olan tarayıcıda ve Studio'da çizer; bir program çalıştıran ise Studio'da sizin onayınızı gerektirir. Bkz. [Resmi başka bir programla çizin](topic:render-other-program) ve [Bir eklentiyle render motoru ekleyin](topic:render-engine-addons).
- **Sahneyi söyleyin.** Bağlı asistanınıza "alacakaranlık, hafif yağmur, sonbahar ağaçları, meydanda insanlar" yazın; ModelCraft bunu tek adımda kurar: güneş, gölgeler takip etsin diye tarih ve saate göre hareket eder, gökyüzü değişir, ıslak yüzeyler belirir ve ağaçlar ile insanlar, gizleyebileceğiniz, taşıyabileceğiniz ya da silebileceğiniz etiketlerde gerçek nesneler olarak yerleştirilir. Gün saati, tarih veya mevsim ile hava durumu (açık, bulutlu, sis, hafif yağmur, yağmur, fırtına) tek başlarına da çalışır; sonraki bir istek aynı sahneyi değiştirir. Sis, yüksek kaliteli resimde grafik kartında görünür; diğer motorlar gökyüzünü, ışığı ve ıslak yüzeyleri gösterir. Yağmur, düşen çizgiler olarak çizilmez.

### Malzemeler

- **Tek bir fotoğraftan malzeme.** ModelCraft'a bir yüzeyin fotoğrafını (bir duvar, bir zemin, taş) verin; döşenebilir bir malzeme oluşturur: fotoğraftaki aydınlatma düzleştirilir, kenarlar birleşecek şekilde yapılır ve fotoğraftan bir renk haritası, bir pürüzlülük haritası ile bir normal harita çıkarılır. Bu, kendi resminiz üzerinde yapılan düz bir görüntü işlemedir; eğitilmiş bir model kullanılmaz. Pürüzlülük bir tahmindir. Düz, kare ve doğrudan çekilmiş bir fotoğraf en iyi döşemeyi verir; tuğla gibi güçlü bir desen, birleşmenin harmanlandığı yerde yumuşak bir hayalet gösterebilir.

### Yüzeyler

- **Serbest biçimli yüzeyler.** {{ui:Yüzeyler}} paneli NURBS eğrileri ve kırpılmamış yüzeyler oluşturur: noktalardan geçen eğriler, loft, kural yüzeyi, ekstrüzyon, döndürme, bir ya da iki ray boyunca süpürmeler, bir eğri ağından yüzeyler, dört kenardan yamalar, eşleştirme ve harmanlama. Her ortak kenar, kesin yüzeylerde G0, G1 veya G2 (boşluk, açı, eğrilik sıçraması) olarak ölçülür; istediğinizden kötü bir kenar, **Eşleştir** düzeltmesiyle Sorunlar panelinde görünür. Zebra çizgileri ve eğrilik renkleri kesin yüzeylerden çizilir. STEP ve IGES dosyaları dışa ve içe aktarılır. Bkz. [Serbest biçimli yüzeyler (NURBS)](topic:nurbs-surfaces).

### Arazi ve odalar

- **Zemine bir eskiz fotoğrafı.** {{ui:Dosya}} › {{ui:Eskiz fotoğrafı içe aktar…}} elle yapılmış bir eskizin telefon fotoğrafını, söylediğiniz ölçekte zemindeki kenarlara dönüştürür: tek bir grup halinde, her kalem rengi için bir etiketle. Kağıt bilgisayarınızda bulunup düzeltilir ve hiçbir yere gönderilmez. Bkz. [Bir site planı üzerinde modelleyin](topic:site-plan).
- **Bir odayı döşeyin.** Bir zemin seçin ve {{ui:Yönet}} › {{ui:Bir odayı döşe…}} komutunu kullanın. Yatak odası, oturma odası, yemek odası, mutfak, banyo veya ofis mobilyaları kurallara göre, duvarlara yaslı ve kapı ile pencerelerden uzak olacak şekilde, tek adımda kaldırabileceğiniz tek bir grup halinde yerleştirilir. Bu bir tasarım değil, sizin gözden geçirmeniz için varsayılan bir yerleşimdir. Bkz. [Başlangıç kitaplığı](topic:starter).

### 3B baskı

- **Eğik kesimler.** Baskı için bölme, kesimlerini 60 dereceye kadar eğebilir; bu da parçalara daha fazla yapıştırma alanı verir. Bağlantı parçaları kesime dik durur. Bkz. [Baskı için bir modeli bölün](topic:print-split).
- **Sorunlar'da baskı denetimi.** 3B baskı denetiminin bulguları, modeldeki işaretlerle birlikte Sorunlar panelinde görünür ve onarımı oradan yapabilirsiniz. Bkz. [Destekler, duvar kalınlığı, içi boşaltma ve onarım](topic:print-tools).

### Her uygulamada

- **Diller.** Yardım ve uygulamalar 54 dilde gelir. On tanesi yenidir: Litvanca, Letonca, Boşnakça, Marathi, Telugu, Arnavutça, Afrikanca, Filipince, Svahili ve Özbekçe. İngilizce dışındaki diller, bir ana dil konuşanı okuyana kadar makine taslağıdır ve yardım konuları hâlâ İngilizce olabilir.
- **Giriş aygıtları.** Bir dokunmatik yüzey, bir kalem, bir 3B fare, bir oyun kumandası ve MIDI denetimleri uygulamaları yönetebilir; hepsi için ya da yalnızca biri için.
- **Araç çubuğu satırları.** {{ui:Ayarlar}} › {{ui:Genel}} › Araç çubuğu satırları, Sarma (eskisi gibi), 2 satır veya 1 satır ayarını yapar. Sığmayan bir çubuk, çizimden yer almak yerine yana kayar. Sarma varsayılan olarak kalır.
- **Özellik tablosu.** ModelCraft'ın lamba alanları ortak tabloyu kullanır: daraltılabilir kategoriler, etiket ve değer sütunları ile Sıkı yoğunluk. `2*450` gibi yazılmış aritmetik çalışmaya devam eder.
- **Sorunlar.** Sorunlar paneli (uygulama çubuğundaki uyarı düğmesi) tüm uygulamalar tarafından paylaşılır. ModelCraft'ta baskı denetimini ve yüzey sürekliliği uyarılarını tutar.
- **Live.** Bir Live TeamWork oturumu kimin nerede olduğunu gösterir. Bkz. [Live TeamWork ile birlikte modelleyin](topic:work-live).
- **Eklentiler.** Eklentiler, yukarıdaki gibi render motorları ekleyebilir.
- **Yapay zekânızı bağlayın.** Araç sözleşmesi ve sekiz uygulamanın denetimleri geçer; toplam 454 araç vardır. Studio içinde tek tıkla bağlantı, tarayıcı asistanları için barındırılan bir bağlayıcı, Studio içinde kendi anahtarınız ve yayımlanmış bir paket henüz vaat edilmiyor. Uygulamaların kendi yapay zekâsı yoktur. Bkz. [ModelCraft'ı yapay zekâ asistanlarıyla kullanın](topic:use-with-ai-assistants).

## 0.8.1 sürümünde düzeltilenler

- **DWG sınıflar bölümü.** Bir DWG dosyasının sınıflar bölümü yanlış türde okunuyordu; bu da içe aktarmada dosyayı bozabiliyordu. Artık doğru okunuyor; ModelCraft'ta ve DWG okuyan diğer uygulamalarda.
- **Dikey konumdaki tabletler.** Boş ızgara yüksekliği tuvale gider ve sayfa düzeni 760 piksel genişlik ve daha dar olduğunda başlar. ModelCraft'ın stil sayfası da bu değişikliği içerir.
- **Studio'da dil.** CadCraft Studio ve paketlenmiş sürümler, çalışırken dil değiştirebilir; önceden yalnızca İngilizceydi. Bu henüz her platformda sınanmadı: dil değişmezse bize bildirin.

## Bu sürümde henüz yok

- **Kod imzalı değil.** Windows, SmartScreen gösterebilir: {{ui:Daha fazla bilgi}}, ardından {{ui:Yine de çalıştır}} seçin. Mac'te sağ tıklayıp {{ui:Aç}} seçin. Mağaza sürümleri beklemede ve iPad ile iPhone sürümü 0.8.1 için yeniden derlenmedi.
- Render motoru eklentisi olmadan başka bir programın resim çizmesi, panoramik veya stereo kameralar ve başka bir program üzerinden gökyüzü resmi ile Unreal sahnesini açan eklenti henüz yok. Dosyalar yazılıyor; eklenti yayımlanmadı ve Unreal'de çalıştırılmadı.
- Serbest biçimli yüzeyler: G3 ve A sınıfı ölçülmez ve iddia edilmez; kırpma ve katılar daha sonra gelir.
- Diğer programların resimleri bizimkiler gibi piksel piksel aynı değildir: yalnızca kamera, güneş, lambalar ve pozlama eşleşir.
- 0.8.1'deki Studio dil değiştirme düzeltmesi her platformda sınanmadı.

Diğer her şey için [Henüz yapılmadı](topic:not-built-yet) bölümüne bakın. Önceki sürüm için bkz. [0.7 sürümündeki yenilikler](topic:whats-new-0-7).
