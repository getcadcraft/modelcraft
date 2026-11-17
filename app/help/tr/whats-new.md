---
title: 0.9 sürümündeki yenilikler
summary: Kendi dilimleyicimiz ve USB, Klipper, OctoPrint ile PrusaLink'e gönderme, reçine dilimleme ve dosya eklentileri, malzeme akışı, dijital ikiz ve fabrika zemini eklentileri, NURBS köşe yuvarlatmaları, kalınlık verme ve tarama uydurma, sahada AR ve on yay yöntemi.
keywords: yenilikler, neler yeni, sürüm notları, değişiklik günlüğü, 0.9, baskı aşaması, 3B baskı, 3B yazıcıya gönder, dilimleyici, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, reçine, reçine baskısı, goo, sl1, ctb, anycubic, pozlama testi, malzeme akışı, dijital ikiz, fabrika zemini, plc, konveyör, nurbs, köşe yuvarlatma, kalınlık verme, tarama uydurma, ar, sahada, yay yöntemleri, birimler, 0.8, 0.8.1, sürüm, yeni özellikler, render motoru, motor, birlikte aç, usd, gltf, unreal, eklenti motoru, yüzeyler, loft, süpürme, süreklilik, g0, g1, g2, zebra, step, iges, sahneyi anlat, sahne, hava durumu, gün saati, mevsim, asistan, fotoğraftan malzeme, fotoğraf, eskiz fotoğrafı, döşeme, oda döşe, eğik kesim, bölme, baskı denetimi, sorunlar, özellik ızgarası, lambalar, diller, giriş aygıtları, araç çubuğu satırları, dwg, canlı
from: 169048a2
---

Bu, ModelCraft 0.8.1 ile karşılaştırıldığında ModelCraft 0.9'da neyin değiştiğidir. ModelCraft artık yazıcıya ve üretim hattına ulaşıyor: parçaları bir baskı tablasına koyabilir ve dışa aktarmadan gönderebilirsiniz, filament ya da reçine için dilimleyebilir ve bir malzeme taşıma hattı düzenleyebilirsiniz. Bu, CadCraft Studio 0.9 ve sekiz uygulamasıdır; aşağıdaki yeni özelliklerin çoğu eklentidir.

## Yeni

### 3B baskı

- **Baskı aşaması.** Araç çubuğunda {{ui:Baskı aşaması}} düğmesine tıklayın. Kütüphane öğelerini yazıcının baskı tablasına ekleyin, yerleştirin, dilimlenmiş katmanlara bakın ve STL dışa aktarmadan {{ui:3B yazıcıya gönder}} düğmesine basın. Bu özellik, varsayılan olarak açık olan ve diğer eklentiler gibi kaldırılabilen 3B Baskı eklentisine aittir. Bkz. [Parçaları baskı tablasına koyun ve bir yazıcıya gönderin](topic:print-stage).
- **Kendi filament dilimleyicimiz.** {{ui:CadCraft basic (dahil, en hızlı)}}, kartın **Dilimleyici** listesindeki dilimleyicidir: duvarlar, kabuklar, dolgu, destekler ve bir etek içerir; sayfanın kullanılabilir kalması için bir çalışan üzerinde çalışır. {{ui:Katmanları önizle}} ile **Katman** kaydırıcısı, göndermeden önce katmanları gösterir. Ender-3 ve Prusa MK4 gibi yazıcı profilleri kendi başlangıç G-kodunu taşır.
- **Gönderme.** USB üzerinden (bilgisayarda Chrome veya Edge, sayfa açık tutularak) ya da ağınızdaki Klipper (Moonraker), OctoPrint veya PrusaLink'e. Tıklamadan hiçbir şey bağlanmaz ya da gönderilmez; gönderme işlemi önce sorar.
- **Diğer dilimleyiciler.** Kiri:Moto, PrusaSlicer ve OrcaSlicer kendi eklentileridir ve varsayılan olarak kapalıdır; kartından ya da {{ui:Ayarlar}} › {{ui:Eklentiler}} bölümünden ekleyin. PrusaSlicer ve OrcaSlicer, CadCraft Studio'dan kendi kurulu kopyanızı kullanır. Bambu Lab yazıcılar eklentisi, OrcaSlicer'ı ve onun P2S ön ayarlarını kullanarak dilimler ve bir bilgisayarda Studio gerektirir.
- **Reçine baskısı.** Reçine eklentileri (varsayılan olarak kapalı) yazıcınızın ekranı için katman görüntüleri üretir; içi boşaltma ve havalandırma delikleri, bir raft ve destekler, bir katman önizlemesi ile süre, reçine ve maliyet bilgisi içerir. Dosya biçimi eklentileri Elegoo GOO, SL1, Chitubox (CBDDLP ve CTB 2 ila 5) ve Anycubic (PWMX ve PWS) yazar. Bir reçine pozlama testi, beş pozlamalık bir merdiven oluşturur. Bkz. [Bir reçine yazıcı için dilimleme](topic:resin-printing).
- **Değişmedi.** {{ui:Dışa aktar}} › {{ui:3B baskı için denetle (STL veya 3MF)…}}, baskı araçları ve Baskı için böl, 0.8'deki gibi çalışır. Bkz. [Modeli 3B baskıya hazırlayın](topic:print-3d).

### Malzeme akışı, Dijital ikiz ve Fabrika zemini

Bu üçü eklentidir; {{ui:Ayarlar}} › {{ui:Eklentiler}} bölümünden açana kadar kapalıdır ve açıldıktan sonra her birinin kendi yardımı vardır.

- **Malzeme akışı.** Malzeme akışı adlı bir panel, 3B görünümde konveyörleri, istasyonları, tamponları ve AGV yollarını yerleştirir, tohumlu bir simülasyon çalıştırır, onu oynatır ve üretim miktarını, teslim sürelerini ve kuyrukları gösterir; sonuçlar CSV olarak kaydedilir. Siparişler bir CSV dosyasından gelebilir. Robot hücreleri denetlenebilir ve dışa aktarılabilir. PLC bağlantısının Modbus TCP üzerinden yumuşak bir modu ve gerçek bir modu vardır; gerçek mod yalnızca CadCraft Studio'da çalışır.
- **Dijital ikiz.** Malzeme akışı yerleşimini okur ve üzerinde yumuşak bir PLC çalıştırır; zorlayabileceğiniz arızalar, stok testleri, yerleşim karşılaştırması ve bir malzeme listesi vardır.
- **Fabrika zemini.** İstasyonları makinelere ve hücrelere dönüştürür, bunları canlı ya da bir simülatörden okur ve bir iş kuyruğu ile basit bir OEE tutar. Yalnızca okur: bu sürüm bir makineye ya da PLC'ye yazamaz.

### Yüzeyler, modeller ve çizim

- **NURBS üzerinde köşe yuvarlatma, kalınlık verme ve Boolean işlemleri.** {{ui:Yüzeyler}} panelinde {{ui:Yüzeyler arası köşe yuvarlat}}, {{ui:Birkaç kenarı yuvarlat}}, {{ui:Katıya kalınlık ver}} ve Birleştir, Çıkar ve Kesişim bulunur; her biri ölçülmüş sapmasıyla gelir. Bkz. [Serbest biçimli yüzeyler (NURBS)](topic:nurbs-surfaces).
- **Bir taramaya yüzey uydurma.** Taranmış bir ağ seçin, **Tarama** grubundaki {{ui:Yüzeyleri taramaya uydur}} komutunu kullanın, ardından {{ui:Yüzeyleri bir katıya dik}} komutunu uygulayın. Bu, ilk bir uydurmadır; tam bir tersine mühendislik paketi değildir.
- **Bir .3dm modelleyiciden canlı bağlantı.** Tek yönlüdür; Rhino 8 veya Grasshopper'dan gelir ve aynı bilgisayarda CadCraft Studio gerektirir. Bkz. [Bir .3dm modelini canlı tutun](topic:live-3dm-link).
- **Modeli sahada görün.** {{ui:Görünümler}} menüsündeki {{ui:Sahada görüntüle (AR, telefon)}} komutu, Chrome yüklü bir Android telefonda çalışır. Bkz. [Modeli bir Android telefonla sahada görün (AR)](topic:ar-on-site).
- **Yay yöntemleri.** {{ui:Yay yöntemleri}} açılır listesi, bir yay çizmenin on yolunu sunar; bunlar arasında {{ui:3 Nokta}} ve {{ui:Başlangıç, Merkez, Bitiş}} de vardır.
- **Daha fazla birim.** Birimli değer yazdığınız yerlerde ağırlıklar (kg, lb, t, ton) ve sıcaklıklar (°C, °F, K ve R) anlaşılır.

## Her uygulamada

- **İpuçları.** Düğmelerdeki üzerine gelince görünen metin ve kesilmiş etiketler bir Bootstrap ipucudur.
- **Kapatılabilen başlangıç ipucu.** Boş çizim alanındaki ipucu kartında küçük bir kapat (x) düğmesi vardır. Kapalı kalır; komut paleti onu yeniden gösterebilir.
- **Kaydırılabilen sekme şeritleri.** Sığmayan bir panelin sekme şeridi, kesilmek yerine kaydırılır.
- **Sekme başlıkları.** Bir belge açıkken tarayıcı sekmesi önce belgenin adıyla başlar, ardından ModelCraft ve CadCraft gelir. Kaydedilmemiş olduğu sürece başta bir nokta görünür.
- **Yerleşim.** {{ui:Ayarlar}} › {{ui:Genel}} › Yerleşim, yerleşimleri bir açılır listede tutar; yerleşimi yalnızca bu uygulama için kullanma seçeneği ve yerleşimi sıfırlamak için bir düğme vardır.
- **Diller.** Ayarlardaki dil listesi, derlemenin içerdiği dil dosyalarını izler. İngilizce dışındaki diller makine taslağıdır.
- **Canlı ve Kütüphane.** Canlı TeamWork, canlı imleçleri ve adları gösterir; Kütüphane koleksiyonları her uygulamaya varsayılan bir koleksiyon verir.

## Düzeltilenler

- Bir animasyon oynarken {{ui:Oynat}} düğmesi {{ui:Duraklat}} düğmesine dönüşür; zaman çizelgesi açıkken {{key:Space}} oynatır ve duraklatır.
- Grafik kartı yol izleyicisini başlatamadığında, tek resim render'ı WebGL'e geri döner. Canlı render görünümü hâlâ hatayı gösterebilir; bu, o sürücüyle çalışan bir Windows makinede denetlenmedi.
- Malzeme akışı gerçek modu, bir bağlantı PLC istisna yanıtlarından sonra kesildikten sonra yeniden bağlanır.

## Dürüst sınırlar

- Gerçek bir yazıcıda hiçbir şey basılmadı: filamentle de, reçineyle de, Bambu Connect üzerinden de değil. Reçine dosyaları yalnızca CadCraft'ın kendi okuyucularıyla geri okundu.
- Dijital ikiz ve Fabrika zemini yalnızca simülatörlere ve bilinen sonuçlara karşı test edildi; gerçek bir PLC, hat ya da protokol yoktu. Bunlar güvenlik doğrulaması değil, denetim yardımcılarıdır. Fizik yalnızca kutulara uygulanır, en fazla sekiz yük.
- Rhino ve Grasshopper bağlantısı gerçek programlarda hiç çalıştırılmadı.
- İngilizce dışındaki diller makine taslağıdır.

## Önceki: 0.8 ve 0.8.1

Bu, ModelCraft 0.8 (2026-11-01) ve 0.8.1 (2026-11-02) sürümlerinde 0.7'ye göre neyin değiştiğidir. {{ui:Resim render et…}} iletişim kutusu artık sahneyi başka bir programa gönderebilir, Yüzeyler paneli pürüzsüz serbest biçimli yüzeyler oluşturur ve bağladığınız bir asistan tek bir cümleyle tüm bir sahneyi kurabilir.

### Yeni

**Render**

- **Bir Motor seçeneği.** {{ui:Resim render et…}} iletişim kutusunda, Mod'un üstünde bir **Motor** listesi vardır. Kendi iki motorumuz, Hızlı ve Path tracer, varsayılandır ve her yerde çalışır. Diğer girdiler, sahneyi bir paket olarak kaydeder (modeli bir USD dosyası olarak ve kesin malzeme değerlerini, açık olan lambaları, güneşi, gökyüzünü, pozlamayı ve kamerayı içeren bir ayar dosyası); bu paket başka bir programa götürülebilir. Başka bir programın çizdiği bir resim, hangi programın ve sürümün onu yaptığını belirtir. Bkz. [Resmi hangi programın çizeceğini seçin](topic:render-engines).
- **Başka bir programda aç.** Motor listesi, sahneyi bir USD dosyası, bir glTF dosyası (`.glb`) ya da bir Unreal proje klasörü (`.zip`) olarak kaydedebilir; tarayıcıda ve CadCraft Studio'da. Studio'da ayrıca usdview'i ya da bilgisayarın kendi programını dosya için başlatabilir. Bkz. [Sahneyi başka bir programda açın](topic:render-open-in).
- **Studio'dan bir oyun motoruna gönderme.** Studio, sahneyi bir Unreal Engine projesine yazar ve her gönderimde onu güncel tutar; yalnızca tek yönlüdür. Kendi düzenlemeleriniz, CadCraft'ın hiçbir zaman yazmadığı bir katmanda durur. Bkz. [Sahneyi bir oyun motoruna gönderin](topic:render-unreal).
- **Eklentilerden motorlar.** Bir eklenti, listeye bir motor ekleyebilir. JavaScript ile yazılmış bir motor tarayıcıda ve Studio'da çizer; bir program çalıştıran bir motor ise Studio'da sizin onayınızı ister. Bkz. [Resmi başka bir programla çizin](topic:render-other-program) ve [Bir eklentiyle render motoru ekleyin](topic:render-engine-addons).
- **Sahneyi anlatın.** Bağladığınız asistana "alacakaranlık, hafif yağmur, sonbahar ağaçları, meydanda insanlar" yazın; ModelCraft sahneyi tek adımda kurar: güneş, gölgelerin takip etmesi için tarihe ve saate göre hareket eder, gökyüzü değişir, ıslak yüzeyler belirir ve ağaçlar ile insanlar, gizleyebileceğiniz, taşıyabileceğiniz ya da silebileceğiniz etiketli gerçek nesneler olarak yerleştirilir. Gün saati, tarih ya da mevsim ve hava durumu (açık, bulutlu, sis, hafif yağmur, yağmur, fırtına) tek başlarına da çalışır; sonraki bir istek aynı sahneyi değiştirir. Sis, yüksek kaliteli resimde grafik kartında görünür; diğer motorlar gökyüzünü, ışığı ve ıslak yüzeyleri gösterir. Yağmur, düşen çizgiler olarak çizilmez.

**Malzemeler**

- **Tek bir fotoğraftan malzeme.** ModelCraft'a bir yüzeyin fotoğrafını (bir duvar, bir zemin, taş) verin; bir döşeme malzemesi üretir: fotoğraftaki aydınlatma düzleştirilir, kenarlar birleşecek şekilde ayarlanır ve resimden bir renk haritası, bir pürüzlülük haritası ve bir normal harita çıkarılır. Bu, kendi resminiz üzerinde düz bir görüntü işlemedir; eğitilmiş bir model kullanılmaz. Pürüzlülük bir tahmindir. Düz, kare ve tam karşıdan çekilmiş bir fotoğraf en iyi döşemeyi verir; tuğla gibi güçlü bir desen, birleşimin karıştırıldığı yerde silik bir hayalet gösterebilir.

**Yüzeyler**

- **Serbest biçimli yüzeyler.** {{ui:Yüzeyler}} paneli NURBS eğrileri ve kırpılmamış yüzeyler oluşturur: noktalardan geçen eğriler, loft, kurallı, ekstrüzyon, döndürme, bir ya da iki ray boyunca süpürmeler, bir eğri ağından yüzeyler, dört kenardan yamalar, eşleştirme ve harmanlama. Her ortak kenar, kesin yüzeylerde G0, G1 ya da G2 (boşluk, açı, eğrilik sıçraması) olarak ölçülür; istediğinizden kötü bir kenar, Sorunlar panelinde bir **Eşleştir** düzeltmesiyle görünür. Zebra çizgileri ve eğrilik renkleri kesin yüzeylerden çizilir. STEP ve IGES dosyaları dışarı gider ve içeri gelir. Bkz. [Serbest biçimli yüzeyler (NURBS)](topic:nurbs-surfaces).

**Saha ve odalar**

- **Bir eskiz fotoğrafından zemine.** {{ui:Dosya}} › {{ui:Eskiz fotoğrafı içe aktar…}} komutu, bir el çizimin telefonla çekilmiş fotoğrafını, belirttiğiniz ölçekte zemine kenarlara dönüştürür: tek bir grup, her kalem rengi için bir etiketle. Kâğıt bilgisayarınızda bulunur ve düzeltilir; hiçbir şey bir yere gönderilmez. Bkz. [Bir saha planına model yerleştirin](topic:site-plan).
- **Bir odayı döşeyin.** Bir zemin seçin ve {{ui:Yönet}} › {{ui:Bir odayı döşe…}} komutunu kullanın. Yatak odası, oturma odası, yemek odası, mutfak, banyo ya da ofis mobilyaları kurallara göre duvarlara yerleştirilir ve kapılardan ile pencerelerden uzak tutulur; tek adımda kaldırabileceğiniz tek bir grupta yer alır. Bu bir tasarım değil, gözden geçirmeniz için bir varsayılan yerleşimdir. Bkz. [Başlangıç kütüphanesi](topic:starter).

**3B baskı**

- **Eğik kesimler.** Baskı için böl, kesimlerini 60 dereceye kadar eğebilir; bu, parçalara daha fazla yapıştırma alanı verir. Bağlantı parçaları kesime dik durur. Bkz. [Bir modeli baskı için bölün](topic:print-split).
- **Sorunlar'daki baskı denetimi.** 3B baskı denetiminin bulguları, modeldeki işaretlerle birlikte Sorunlar panelinde görünür ve oradan {{ui:Onar}} ile düzeltilir. Bkz. [Destekler, duvar kalınlığı, içi boşaltma ve onarım](topic:print-tools).

**Her uygulamada**

- **Diller.** Yardım ve uygulamalar 54 dilde gelir. On tanesi yenidir: Litvanca, Letonca, Boşnakça, Marathi, Telugu, Arnavutça, Afrikaanca, Filipince, Svahili ve Özbekçe. İngilizce dışındaki diller, bir ana dil konuşanı tarafından okunana kadar makine taslağıdır ve yardım konuları hâlâ İngilizce olabilir.
- **Giriş aygıtları.** Bir dokunmatik yüzey, bir kalem, bir 3B fare, bir oyun kumandası ve MIDI denetimleri, uygulamaların hepsini ya da yalnızca birini yönetebilir.
- **Araç çubuğu satırları.** {{ui:Ayarlar}} › {{ui:Genel}} › Araç çubuğu satırları, Sarma (önceki gibi), 2 satır ya da 1 satır ayarını yapar. Sığmayan bir çubuk, çizimden yer almak yerine yana doğru kayar. Sarma varsayılan olarak kalır.
- **Özellik ızgarası.** ModelCraft'ın lamba alanları ortak ızgarayı kullanır: daraltılabilen kategoriler, etiket ve değer sütunları ile Sıkı yoğunluk. `2*450` gibi yazılmış aritmetik çalışmaya devam eder.
- **Sorunlar.** Sorunlar paneli (uygulama çubuğundaki uyarı düğmesi) tüm uygulamalar arasında ortaktır. ModelCraft'ta baskı denetimini ve yüzey süreklilik uyarılarını tutar.
- **Canlı.** Bir Canlı TeamWork oturumu kimin nerede olduğunu gösterir. Bkz. [Canlı TeamWork ile birlikte modelleyin](topic:work-live).
- **Eklentiler.** Eklentiler, yukarıda olduğu gibi render motorları ekleyebilir.
- **Yapay zekânızı bağlayın.** Araç sözleşmesi ve sekiz uygulamanın denetimleri geçti; toplam 454 araç var. Studio içinde tek tıkla bağlantı, tarayıcı asistanları için barındırılan bir bağlayıcı, Studio içinde kendi anahtarınız ve yayımlanmış bir paket henüz vaat edilmiyor. Uygulamaların kendi yapay zekâsı yoktur. Bkz. [ModelCraft'ı yapay zekâ asistanlarıyla kullanın](topic:use-with-ai-assistants).

### 0.8.1'de düzeltilenler

- **DWG sınıflar bölümü.** Bir DWG dosyasının sınıflar bölümü yanlış türde okunuyordu; bu, içe aktarmada dosyayı bozabiliyordu. Artık doğru okunur; ModelCraft'ta ve DWG okuyan diğer uygulamalarda.
- **Dikey modda tabletler.** Boş ızgara yüksekliği tuvale verilir ve 760 piksel genişlik ve daha az olduğunda çizim düzeni başlar. ModelCraft'ın stil sayfasında da bu değişiklik vardır.
- **Studio'da dil.** CadCraft Studio ve paketlenmiş sürümler, çalışırken dil değiştirebilir; önceden yalnızca İngilizce idi. Bu, her platformda henüz denenmedi: dilin değişmediğini görürseniz bize bildirin.

### Bu sürümde henüz yok

- **Kod imzalı değil.** Windows, SmartScreen uyarısı gösterebilir: {{ui:Ek bilgi}} seçin, ardından {{ui:Yine de çalıştır}}. Mac'te sağ tıklayıp {{ui:Aç}} seçin. Mağaza sürümleri beklemede ve iPad ile iPhone sürümü 0.8.1 için yeniden derlenmedi.
- Bir render motoru eklentisi olmadan başka bir programın resmi çizmesi, panoramik ya da stereo kameralar ve başka bir program üzerinden bir gökyüzü resmi, ayrıca Unreal sahnesini açan eklenti henüz yok. Dosyalar yazılır; eklenti yayımlanmadı ve Unreal'de çalıştırılmadı.
- Serbest biçimli yüzeyler: G3 ve sınıf A ölçülmez ya da iddia edilmez; kırpma ve katılar daha sonra gelecek.
- Başka programların resimleri bizimkilerle piksel piksel aynı değildir: yalnızca kamera, güneş, lambalar ve pozlama eşleşir.
- Studio'da dil değiştirme için 0.8.1 düzeltmesi her platformda denenmedi.

Geri kalan her şey için [Henüz yapılmadı](topic:not-built-yet) bölümüne bakın. Önceki sürüm için bkz. [0.7'deki yenilikler](topic:whats-new-0-7).
