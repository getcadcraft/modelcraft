---
title: 0.9 sürümündeki yenilikler (önceki)
summary: Kendi dilimleyicimizle baskı aşaması ve USB, Klipper, OctoPrint ve PrusaLink'e gönderme, reçine dilimleme ve dosya eklentileri, malzeme akışı, dijital ikiz ve fabrika zemini eklentileri, NURBS köşe yuvarlatma, kalınlık verme ve tarama uydurma, sahada AR ve on yay yöntemi.
keywords: 0.9 yenilikler, önceki sürüm, yenilikler, sürüm notları, değişiklik günlüğü, 0.9, baskı aşaması, 3B baskı, 3B yazıcıya gönder, dilimleyici, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, reçine, reçine baskı, goo, sl1, ctb, anycubic, pozlama testi, malzeme akışı, dijital ikiz, fabrika zemini, plc, konveyör, nurbs, köşe yuvarlat, kalınlık ver, tarama uydurma, ar, sahada, yay yöntemleri, birimler, yenilikler, değişiklikler, 0.8, 0.8.1, sürüm, yeni özellikler, render motoru, motor, başka programda aç, usd, gltf, unreal, eklenti motoru, nurbs, yüzeyler, loft, süpürme, süreklilik, g0, g1, g2, zebra, step, iges, sahneyi söyle, sahne, hava durumu, günün saati, mevsim, asistan, fotoğraftan malzeme, fotoğraf, eskiz fotoğrafı, odayı döşe, eğik, eğik kesim, böl, baskı denetimi, sorunlar, özellik tablosu, lambalar, diller, giriş aygıtları, araç çubuğu satırları, dwg, canlı
from: 2717d1b1
---

Bu, ModelCraft 0.9 ile 0.8.1 karşılaştırıldığında neyin değiştiğidir. ModelCraft artık yazıcıya ve üretim zeminine ulaşıyor: nesneleri bir baskı tablasına koyabilir ve dışa aktarmadan gönderebilir, filament veya reçine için dilimleyebilir ve bir malzeme taşıma hattı düzenleyebilirsiniz. Bu, CadCraft Studio 0.9 ve sekiz uygulamasıdır; aşağıdaki yeni özelliklerin çoğu eklentidir.

## Yeni

### 3B baskı

- **Baskı aşaması.** Araç çubuğunda {{ui:Baskı aşaması}} öğesine tıklayın. Kütüphane öğelerini yazıcının tablasına ekleyin, düzenleyin, dilimlenmiş katmanlara bakın ve STL dışa aktarmadan {{ui:3B yazıcıya gönder}} düğmesine basın. 3B Baskı eklentisine aittir; bu eklenti varsayılan olarak açıktır ve diğer eklentiler gibi kaldırılabilir. Bkz. [Nesneleri baskı tablasına koyma ve yazıcıya gönderme](topic:print-stage).
- **Kendi filament dilimleyicimiz.** {{ui:CadCraft basic (dahil, en hızlı)}} kartın **Dilimleyici** listesindeki dilimleyicidir: duvarlar, kabuklar, dolgu, destekler ve bir etek. Sayfa kullanılabilir kalsın diye bir işçide çalışır. Göndermeden önce katmanları görmek için **Katman** kaydırıcılı {{ui:Katmanları önizle}} kullanılır. Ender-3 ve Prusa MK4 tarzı yazıcı profilleri kendi başlangıç G-code'larını taşır.
- **Gönderme.** USB üzerinden (bilgisayarda Chrome veya Edge ile, sayfa açık tutularak) veya ağınızdaki Klipper (Moonraker), OctoPrint ya da PrusaLink'e. Bir tıklama olmadan hiçbir şey bağlanmaz veya gönderilmez ve gönderme önce sorar.
- **Diğer dilimleyiciler.** Kiri:Moto, PrusaSlicer ve OrcaSlicer kendi eklentileridir; varsayılan olarak kapalıdırlar. Kart üzerinden veya {{ui:Ayarlar}} › {{ui:Eklentiler}} bölümünden ekleyin. PrusaSlicer ve OrcaSlicer, CadCraft Studio'dan kendi kurduğunuz kopyayı kullanır. Bambu Lab yazıcılar eklentisi, OrcaSlicer'ı ve P2S ön ayarlarını kullanarak dilimler ve bir bilgisayarda Studio gerektirir.
- **Reçine baskı.** Reçine eklentileri (varsayılan olarak kapalı) yazıcınızın ekranı için katman resimleri üretir; içi boşaltma ve havalandırma delikleri, taban ve destekler, bir katman önizlemesi ile süre, reçine ve maliyet vardır. Dosya biçimi eklentileri Elegoo GOO, SL1, Chitubox (CBDDLP ve CTB 2 ila 5) ve Anycubic (PWMX ve PWS) yazar. Bir reçine pozlama testi beş pozlamalık bir merdiven üretir. Bkz. [Reçine yazıcı için dilimleme](topic:resin-printing).
- **Değişmeyenler.** {{ui:Dışa aktar}} › {{ui:3B baskı için denetle (STL veya 3MF)…}}, baskı araçları ve Baskı için böl, 0.8'deki gibi çalışır. Bkz. [Modeli 3B baskıya hazırlama](topic:print-3d).

### Malzeme akışı, Dijital ikiz ve Fabrika zemini

Bu üçü eklentidir; {{ui:Ayarlar}} › {{ui:Eklentiler}} bölümünden açana kadar kapalıdırlar ve açtıktan sonra her birinin kendi yardımı vardır.

- **Malzeme akışı.** Malzeme akışı adlı bir panel, 3B görünümde konveyörleri, istasyonları, tamponları ve AGV yollarını düzenler, tohumlu bir simülasyon çalıştırır, onu oynatır ve üretim hızını, teslim sürelerini ve kuyrukları gösterir; sonuçlar CSV olarak kaydedilir. Siparişler bir CSV dosyasından gelebilir. Robot hücreleri denetlenebilir ve dışa aktarılabilir. PLC bağlantısının Modbus TCP üzerinden yumuşak bir modu ve gerçek bir modu vardır; gerçek mod yalnızca CadCraft Studio'da çalışır.
- **Dijital ikiz.** Malzeme akışı düzenini okur ve üzerinde yumuşak bir PLC çalıştırır; zorlayabileceğiniz arızalar, stok testleri, düzen karşılaştırması ve bir malzeme listesi vardır.
- **Fabrika zemini.** İstasyonları makinelere ve hücrelere dönüştürür, bunları canlı olarak veya bir simülatörden okur ve bir iş kuyruğu ile basit bir OEE tutar. Yalnızca okur: bu sürüm bir makineye veya PLC'ye yazamaz.

### Yüzeyler, modeller ve çizim

- **NURBS üzerinde köşe yuvarlatma, kalınlık verme ve boolean işlemleri.** {{ui:Yüzeyler}} panelinde {{ui:Yüzeyler arası köşe yuvarlat}}, {{ui:Birkaç kenarı yuvarlat}}, {{ui:Katıya kalınlık ver}} ve Birleştir, Çıkar ve Kesiştir vardır; her birinin ölçülmüş sapması bulunur. Bkz. [Serbest yüzeyler (NURBS)](topic:nurbs-surfaces).
- **Yüzeyleri bir taramaya uydurma.** Taranmış bir örgüyü seçin, **Tarama** grubundaki {{ui:Yüzeyleri taramaya uydur}} öğesini kullanın, ardından {{ui:Yüzeyleri bir katıya dik}} düğmesine basın. Bu bir ilk uydurmadır, tam bir tersine mühendislik paketi değildir.
- **Bir .3dm modelleyiciden canlı bağlantı.** Tek yönlüdür, Rhino 8 veya Grasshopper'dan gelir ve aynı bilgisayarda CadCraft Studio gerektirir. Bkz. [Bir .3dm modelini canlı tutma](topic:live-3dm-link).
- **Modeli sahada görün.** {{ui:Görünümler}} menüsündeki {{ui:Sahada görüntüle (AR, telefon)}} Chrome ile bir Android telefonda çalışır. Bkz. [Modeli Android telefonla sahada görün (AR)](topic:ar-on-site).
- **Yay yöntemleri.** {{ui:Yay yöntemleri}} açılır listesi, {{ui:3 Nokta}} ve {{ui:Başlangıç, Merkez, Bitiş}} dahil olmak üzere bir yay çizmenin on yolunu sunar.
- **Daha fazla birim.** Değerleri birimleriyle yazdığınız yerlerde ağırlıklar (kg, lb, t, ton) ve sıcaklıklar (derece C, F, K ve R) anlaşılır.

## Her uygulamada

- **Araç ipuçları.** Düğmelerdeki üzerine gelince çıkan metin ve kesilmiş etiketler bir Bootstrap araç ipucudur.
- **Kapatılabilir başlangıç ipucu.** Boş bir çizim alanındaki ipucu kartında küçük bir kapatma x'i vardır. Kapalı kalır ve komut paleti onu yeniden gösterebilir.
- **Kaydırılabilir sekme şeritleri.** Sığmayan bir panelin sekme şeridi kesilmek yerine kaydırılır.
- **Sekme başlıkları.** Bir belge açıkken tarayıcı sekmesi belgenin adıyla başlar, ardından ModelCraft ve CadCraft gelir. Kaydedilmemişken önde bir nokta görünür.
- **Düzen.** {{ui:Ayarlar}} › {{ui:Genel}} › Düzen, düzenleri bir açılır listede tutar; bir düzeni yalnızca bu uygulama için kullanma seçeneği ve düzeni sıfırlama düğmesi vardır.
- **Diller.** Ayarlardaki dil listesi, derlemenin içerdiği dil dosyalarını izler. İngilizce dışındaki diller makine taslaklarıdır.
- **Canlı ve Kütüphane.** Canlı Ekip Çalışması, canlı imleçleri ve adları gösterir; Kütüphane koleksiyonları her uygulamaya varsayılan bir koleksiyon verir.

## Düzeltilenler

- Bir animasyon oynarken {{ui:Oynat}} {{ui:Duraklat}} olur ve zaman çizelgesi açıkken {{key:Space}} oynatır ve duraklatır.
- Grafik kartı yol izleyiciyi başlatamadığında durağan render WebGL'e geçer. Canlı render görünümü hatayı yine gösterebilir; bu, o sürücüye sahip bir Windows makinesinde denenmedi.
- Malzeme akışı gerçek modu, bir bağlantı PLC istisna yanıtlarında sona erdikten sonra yeniden bağlanır.

## Dürüst sınırlar

- Gerçek bir yazıcıda hiçbir şey basılmadı: filament de, reçine de, Bambu Connect üzerinden de. Reçine dosyaları yalnızca CadCraft'ın kendi okuyucularıyla geri okundu.
- Dijital ikiz ve Fabrika zemini yalnızca simülatörlere ve bilinen cevaplara karşı test edildi; gerçek bir PLC, hat veya protokol yoktur. Bunlar denetleme yardımcılarıdır, güvenlik doğrulaması değildir. Fizik yalnızca kutuları kapsar ve en fazla sekiz yük vardır.
- Rhino ve Grasshopper bağlantısı gerçek programlarda hiç çalışmadı.
- İngilizce dışındaki diller makine taslaklarıdır.

## Önceki: 0.8 ve 0.8.1

Bu, ModelCraft 0.8 (2026-11-01) ve 0.8.1 (2026-11-02) sürümlerinin 0.7'ye göre neyi değiştirdiğidir. {{ui:Resim render et…}} iletişim kutusu artık sahneyi başka bir programa gönderebilir, Yüzeyler paneli pürüzsüz serbest yüzeyler üretir ve bağladığınız bir asistan tek cümleyle bütün bir sahne kurabilir.

### Yeni

**Render**

- **Bir Motor seçimi.** {{ui:Resim render et…}} iletişim kutusunda Mod'un üstünde bir **Motor** listesi vardır. Hızlı ve Yol izleyici adlı kendi iki motorumuz varsayılandır ve her yerde çalışır. Diğer girdiler sahneyi başka bir programa götürmek üzere bir paket olarak kaydeder (model bir USD dosyası olarak, ayrıca tam malzeme değerlerini, açık olan lambaları, güneşi, gökyüzünü, pozlamayı ve kamerayı içeren bir ayar dosyası). Başka bir programın çizdiği bir resim, hangi programın ve sürümün yaptığını söyler. Bkz. [Resmi çizecek programı seçme](topic:render-engines).
- **Başka bir programda aç.** Motor listesi sahneyi bir USD dosyası, bir glTF dosyası (`.glb`) veya bir Unreal proje klasörü (`.zip`) olarak kaydedebilir; tarayıcıda ve CadCraft Studio'da. Studio'da dosya için usdview'i ya da bilgisayarın kendi programını da başlatabilir. Bkz. [Sahneyi başka bir programda açma](topic:render-open-in).
- **Studio'dan bir oyun motoruna gönderme.** Studio sahneyi bir Unreal Engine projesine yazar ve her gönderimde onu tek yönlü olarak güncel tutar. Kendi düzenlemeleriniz, CadCraft'ın hiçbir zaman yazmadığı bir katmanda durur. Bkz. [Sahneyi bir oyun motoruna gönderme](topic:render-unreal).
- **Eklentilerden motorlar.** Bir eklenti listeye bir motor ekleyebilir. JavaScript ile yazılmış olan tarayıcıda ve Studio'da çizer; bir programı çalıştıran ise Studio'da sizin onayınızı ister. Bkz. [Resmi başka bir programla çizme](topic:render-other-program) ve [Bir eklentiyle render motoru ekleme](topic:render-engine-addons).
- **Sahneyi söyleyin.** Bağlı asistanınıza "alacakaranlık, hafif yağmur, sonbahar ağaçları, meydanda insanlar" deyin; ModelCraft bunu tek adımda kurar: güneş, gölgelerin takip etmesi için tarih ve saate göre hareket eder, gökyüzü değişir, ıslak yüzeyler belirir ve ağaçlar ile insanlar gizlenebilir, taşınabilir ya da silinebilir etiketlerde gerçek nesneler olarak yerleştirilir. Günün saati, tarih veya mevsim ile hava durumu (açık, bulutlu, sis, hafif yağmur, yağmur, fırtına) tek başına da çalışır ve sonraki bir istek aynı sahneyi değiştirir. Sis, grafik kartındaki yüksek kaliteli resimde görünür; diğer motorlar gökyüzünü, ışığı ve ıslak yüzeyleri gösterir. Yağmur, düşen çizgiler olarak çizilmez.

**Malzemeler**

- **Tek bir fotoğraftan malzeme.** ModelCraft'a bir yüzeyin fotoğrafını (bir duvar, bir zemin, taş) verin; kiremitli bir malzeme üretir: fotoğraftaki aydınlatma düzleştirilir, kenarlar birleşecek şekilde düzenlenir ve bir renk haritası, bir pürüzlülük haritası ve bir normal harita fotoğraftan hesaplanır. Bu, kendi resminiz üzerinde düz görüntü işlemedir; eğitilmiş bir model yoktur. Pürüzlülük bir tahmindir. Düz, kare ve doğrudan çekilmiş bir fotoğraf en iyi kiremiti verir; tuğla gibi güçlü bir desen, birleşimin karıştığı yerde yumuşak bir hayalet gösterebilir.

**Yüzeyler**

- **Serbest yüzeyler.** {{ui:Yüzeyler}} paneli NURBS eğrileri ve kırpılmamış yüzeyler üretir: noktalardan geçen eğriler, loft, kural yüzey, ekstrüzyon, döndürme, bir veya iki ray boyunca süpürmeler, bir eğri ağından yüzeyler, dört kenardan yamalar, eşleştirme ve harmanlama. Her ortak kenar tam yüzeylerde G0, G1 veya G2 olarak ölçülür (boşluk, açı, eğrilik sıçraması) ve istediğinizden kötü bir kenar, **Eşleştir** düzeltmesiyle Sorunlar panelinde görünür. Zebra çizgileri ve eğrilik renkleri tam yüzeylerden çizilir. STEP ve IGES dosyaları dışarı ve içeri gider. Bkz. [Serbest yüzeyler (NURBS)](topic:nurbs-surfaces).

**Saha ve odalar**

- **Bir eskiz fotoğrafını zemine koyma.** {{ui:Dosya}} › {{ui:Eskiz fotoğrafı içe aktar…}} bir el çizimi eskizinin telefon fotoğrafını, söylediğiniz ölçekte zemindeki kenarlara çevirir: her kalem rengi için bir etiketle tek bir grup. Kağıt bilgisayarınızda bulunur ve düzeltilir; hiçbir şey bir yere gönderilmez. Bkz. [Bir vaziyet planına model koyma](topic:site-plan).
- **Bir odayı döşe.** Bir zemin seçin ve {{ui:Yönet}} › {{ui:Odayı döşe…}} öğesini kullanın. Yatak odası, oturma odası, yemek odası, mutfak, banyo veya ofis mobilyaları kurallarla, duvarlara yaslı ve kapılardan ve pencerelerden uzak olarak yerleştirilir; tek adımda kaldırabileceğiniz tek bir grupta. Bu bir tasarım değil, sizin gözden geçireceğiniz varsayılan bir düzendir. Bkz. [Başlangıç kütüphanesi](topic:starter).

**3B baskı**

- **Eğik kesimler.** Baskı için böl, kesimlerini 60 dereceye kadar eğebilir; bu da parçalara daha fazla yapıştırma alanı verir. Bağlantı parçaları kesime dik durur. Bkz. [Bir modeli baskı için bölme](topic:print-split).
- **Sorunlar'da baskı denetimi.** 3B baskı denetiminin bulguları Sorunlar panelinde, modelde işaretlerle görünür ve Onar oradan düzeltir. Bkz. [Destekler, duvar kalınlığı, boşaltma ve onarım](topic:print-tools).

**Her uygulamada**

- **Diller.** Yardım ve uygulamalar 54 dilde gelir. On tanesi yeni: Litvanca, Letonca, Boşnakça, Marathi, Telugu, Arnavutça, Afrikaanca, Filipince, Svahili ve Özbekçe. Ana dili konuşan biri okuyana kadar İngilizce dışındaki diller makine taslaklarıdır ve yardım konuları hâlâ İngilizce olabilir.
- **Giriş aygıtları.** Bir dokunmatik yüzey, bir kalem, bir 3B fare, bir oyun kumandası ve MIDI denetimleri uygulamaları sürebilir; hepsi için ya da yalnızca biri için.
- **Araç çubuğu satırları.** {{ui:Ayarlar}} › {{ui:Genel}} › Araç çubuğu satırları, Sarma (öncekiyle aynı), 2 satır veya 1 satır seçer. Sığmayan bir çubuk, çizim alanından yer almak yerine yana kayar. Sarma varsayılan olarak kalır.
- **Özellik tablosu.** ModelCraft'ın lamba alanları ortak tabloyu kullanır: daraltılabilir kategoriler, etiket ve değer sütunları ve Sıkı yoğunluk. `2*450` gibi yazılmış aritmetik çalışmaya devam eder.
- **Sorunlar.** Sorunlar paneli (uygulama çubuğundaki uyarı düğmesi) tüm uygulamalar arasında ortaktır. ModelCraft'ta baskı denetimini ve yüzey süreklilik uyarılarını içerir.
- **Canlı.** Bir Canlı Ekip Çalışması oturumu kimin nerede olduğunu gösterir. Bkz. [Canlı Ekip Çalışması ile birlikte modelleme](topic:work-live).
- **Eklentiler.** Eklentiler, yukarıdaki gibi render motorları ekleyebilir.
- **AI asistanınızı bağlayın.** Sekiz uygulamanın araç sözleşmesi ve denetimleri geçer; toplam 454 araç vardır. Studio içinde tek tıkla bağlantı, tarayıcı asistanları için barındırılan bir bağlayıcı, Studio içinde kendi anahtarınız ve yayımlanmış bir paket henüz vaat edilmiyor. Uygulamaların kendi AI'ları yoktur. Bkz. [ModelCraft'ı AI asistanlarıyla kullanma](topic:use-with-ai-assistants).

### 0.8.1'de düzeltilenler

- **DWG sınıflar bölümü.** Bir DWG dosyasının sınıflar bölümü yanlış türde okunuyordu; bu, içe aktarmada dosyayı bozabiliyordu. Artık doğru okunuyor; ModelCraft'ta ve DWG okuyan diğer uygulamalarda.
- **Dikey tabletler.** Boş ızgara yüksekliği tuvale verilir ve kağıt düzeni 760 piksel genişlik ve daha az olduğunda başlar. ModelCraft'ın stil sayfasında da bu değişiklik vardır.
- **Studio'da dil.** CadCraft Studio ve paketlenmiş sürümler, çalışırken dil değiştirebilir; önceden yalnızca İngilizceydi. Bu henüz her platformda denenmedi: dil değişmiyorsa bize bildirin.

### Bu sürümde henüz yok

- **Kod imzalı değil.** Windows SmartScreen gösterebilir: {{ui:Ek bilgi}} seçin, ardından {{ui:Yine de çalıştır}}. Bir Mac'te sağ tıklayın ve {{ui:Aç}} seçin. Mağaza sürümleri beklemede ve iPad ile iPhone sürümü 0.8.1 için yeniden derlenmedi.
- Bir render motoru eklentisi olmadan başka bir programın resmi çizmesi, başka bir program üzerinden panoramik veya stereo kameralar ve gökyüzü resmi ile Unreal sahnesini açan eklenti henüz yok. Dosyalar yazılır; eklenti yayımlanmadı ve Unreal'de çalıştırılmadı.
- Serbest yüzeyler: G3 ve A sınıfı ölçülmez ve iddia edilmez; kırpma ve katılar sonra gelecek.
- Başka programların resimleri bizimkiyle piksel piksel aynı değildir: yalnızca kamera, güneş, lambalar ve pozlama eşleşir.
- 0.8.1'deki Studio dil değişimi düzeltmesi her platformda denenmedi.

Diğer her şey için [Henüz yapılmadı](topic:not-built-yet) bölümüne bakın. Önceki sürüm için [0.7 sürümündeki yenilikler](topic:whats-new-0-7) bölümüne bakın.
