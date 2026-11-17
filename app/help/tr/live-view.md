---
title: Canlı görünüm
summary: Modelin yanında, gerçek zamanlı görünümde gösteren ve yaptığınız her değişikliği izleyen bir pencere; güneş ve gölgelerle. İçinde yürüyün, günün saatini ve ayı ayarlayın.
keywords: paylaş, panorama, 360, tur, sanal tur, bağımsız görüntüleyici, çevrimdışı görüntüleyici, müşteriye gönder, video, yürüyüş videosu, serpiştirme, çimen, çayır, orman, kayalar, bitkiler, ağaçlar, kalabalık, bitki boyama, canlı görünüm, gerçek zamanlı, gerçek zamanlı render, yürüyüş, yürü, birinci şahıs, sunum, müşteri, ikinci ekran, ikinci pencere, monitör, günün saati, güneş, mevsim, ay, gölgeler, ortam kapanması, yansımalar, yansıyan ışık, genel aydınlatma, webgpu, webgl
from: fca3b0d6
---

{{ui:Dışa aktar}} › {{ui:Canlı görünüm}} uygulamanın üzerinde bir panel açar; modeli gerçek zamanlı görünümde gösterir: modelinizin konumuna ve tarihine göre gökyüzü ve güneş, güneşin gölgeleri, yüzeylere verdiğiniz görünümler ve malzemeler, lambalar ve duvarlardan ve zeminlerden yansıyan ışık. Yaptığınız işi izler: görünümü döndürürseniz o da döner; modeli değiştirirseniz değişikliği bir an sonra gösterir. Hiçbir şey yüklenmez.

## Açın

1. {{ui:Dışa aktar}} › {{ui:Canlı görünüm}} seçeneğini seçin. Panel sağ alt köşede açılır.
2. Taşımak için başlık çubuğunu sürükleyin; büyütmek için köşesini çekin.
3. {{ui:Yeni pencere}} onu kendi penceresine taşır; ikinci bir ekran için. {{ui:Dışa aktar}} › {{ui:Canlı görünüm yeni pencerede}} onu doğrudan orada açar. Tarayıcınız açılır pencereleri engelliyorsa panel olarak açılır.
4. {{ui:Kapat}} onu kapatır.

## Denetimler

| Denetim | Ne yapar |
|---|---|
| {{ui:Görünümü izle}} | Açıkken canlı görünüm, ModelCraft'ın görünümünün baktığı yere bakar. Yürümek bunu kapatır |
| {{ui:Yürü}} | Modelin içinde yürüyün (aşağıda) |
| {{ui:Yerçekimi}} | Yürürken: zeminlerde durun ve merdiven çıkın. Kapalıyken: uçun |
| {{ui:Saat}} | Günün saati, 05:00 ile 21:00 arası. Sürüklerken güneş hareket eder |
| {{ui:Ay}} | Ayın 21'i; kışın ve yazın güneşi görebilmeniz için |
| {{ui:Kalite}} | {{ui:Bu bilgisayar için}} ([makineniz](topic:your-machine) neyi alıyorsa), ya da {{ui:Düşük}}, {{ui:Orta}} veya {{ui:Yüksek}} |

Alttaki satır, görünümü hangi motorun çizdiğini (WebGPU ya da WebGL 2), kaliteyi ve yansıyan ışığı gösterir.

## Modelin içinde yürüyün

1. Ana görünümü durmak istediğiniz yere çevirin ve {{ui:Yürü}} seçeneğini seçin. Görünümün göz noktasının altındaki zeminde, 1,6 m boyunda durursunuz.
2. Canlı görünüme tıklayın, sonra {{key:W}} {{key:A}} {{key:S}} {{key:D}} tuşlarını ya da ok tuşlarını kullanın. Koşmak için {{key:Shift}} tuşunu basılı tutun. Etrafa bakmak için sürükleyin.
3. 40 cm'ye kadar olan basamaklara çıkılır (merdivenler); bundan yüksek olan her şey duvardır. Duvarlar sizi durdurur ve siz onların boyunca kayarsınız.
4. {{ui:Yerçekimi}} kapalıyken uçarsınız: {{key:E}} yukarı, {{key:Q}} aşağı çıkar.
5. {{key:Esc}} yürümeyi durdurur.

## Bitki, kaya ve insan serpiştirin

Canlı görünümün çubuğundaki {{ui:Serpiştir}} resmin yanında serpiştirme panelini açar. Bir serpiştirme kümesi, modelin bir bölümüne ek öğeleri (ağaçlar, çalılar, çimen, çiçekler, kayalar, insanlar, arabalar) dağıtır; bunlar ortam kütüphanesinden gelir. Öğeler yalnızca canlı görünümde çizilir: modelde geometri değildir ve ana görünüm onları göstermez.

1. **Yüzeyleri doldurun:** ModelCraft'ta yüzeyleri (ya da bir grubu, örneğin bir araziyi) seçin, sonra {{ui:Seçimi doldur}} seçeneğini seçin. Küme onları kaplar.
2. **Boyayın:** {{ui:Boya}} seçeneğini seçin, sonra canlı görünümde sürükleyin. Yüzeyler seçiliyken boya yalnızca onlara düşer; hiçbir şey seçili değilken fırçanın altındaki her şeye, zemin dahil, düşer. {{ui:Fırça boyutu}} fırçayı ayarlar; {{ui:Silgi}} boyanmış lekeleri kaldırır.
3. Serpiştirilecek öğeleri işaretleyin. Her birinin yanındaki sayı ağırlığıdır: 3 ve 1, ikinciden her bir tane için birinciden üç tane demektir.

| Denetim | Ne yapar |
|---|---|
| {{ui:m² başına}} | Her metrekarede kaç öğe olacağı |
| {{ui:Uzak dur (m)}} | Diğer nesnelere bundan daha yakın öğe olmaz; bir çatının ya da masanın altında da olmaz. 0 kapatır |
| {{ui:Dönüş (°)}} | Her öğenin dikey eksen etrafında rastgele ne kadar döndüğü |
| {{ui:En dik (°)}} | Yüzeyin bundan daha dik olduğu yerlerde öğe olmaz |
| {{ui:Boyut}} | En küçük ve en büyük boyut; öğenin kendi boyutunun bir çarpanı olarak |
| {{ui:Yükseklik başlangıç, bitiş (m)}} | Yalnızca bu yükseklikler arasında (boş = herhangi biri) |
| {{ui:Yüzeyle birlikte eğil}} | 0 öğeleri dik tutar; 1 onları eğime karşı dik diker |
| {{ui:Tohum}}, {{ui:Karıştır}} | Aynı tohum her zaman aynı serpiştirmeyi verir; Karıştır başka bir tane seçer |

Kümeler .modelcraft dosyasına kaydedilir ve değiştirdiğinizde kapladıkları yüzeyleri izler. Canlı görünümün en fazla kaç öğe çizeceği [makineniz](topic:your-machine) seviyesine bağlıdır: {{ui:Yalnızca işlemci}} için 20 000, {{ui:Grafik kartı, temel}} için 100 000, {{ui:Grafik kartı, yüksek}} için bir milyon. Panel, yoğunluğun istediği kadardan kaçının yerleştirildiğini gösterir: bütçeye ulaşıldığında ya da nesneler onları dışarıda tuttuğunda daha az yerleşir. Kameraya yakın öğeler kendileri gibi çizilir; uzaktakiler renklerinde basit şekiller olarak çizilir.

:::note
Serpiştirilen öğeler canlı görünümdedir (ve onun yürüyüşünde, panoramalarında ve bağımsız görüntüleyicisinde). Resim render et henüz bunları çizmez.
:::

## Paylaşın: panoramalar, turlar, bir görüntüleyici, bir video

{{ui:Paylaş}} canlı görünümün çubuğunda, canlı görünümden dosyalar oluşturur. Her şey bu bilgisayarda yapılır; hiçbir şey yüklenmez.

| Seçenek | Ne elde edersiniz |
|---|---|
| {{ui:360° panorama}} | Görünümün durduğu yerden (ya da yürüdüğünüz yerden) 360° bir resim; panorama görüntüleyicilerinin ve çoğu fotoğraf sitesinin açtığı eşdikdörtgen (equirectangular) PNG olarak |
| {{ui:Bu noktayı tura ekle}}, sonra {{ui:Turu kaydet}} | Her noktada bir panoramanın ve her birinin görebildiği noktalara oklarla tek bir web sayfası (aradaki bir duvar oku gizler) |
| {{ui:Görüntüleyici kaydet}} | Modelin bu gerçek zamanlı görünümde tek bir web sayfası: döndürün, içinde yürüyün, kayıtlı sahnelerine atlayın. Bir klasörden, bir USB bellekten ya da bir e-postadan, WebGPU ya da WebGL 2 destekleyen bir tarayıcıda, kurulum ve hesap olmadan çevrimdışı açılır; internetten hiçbir şey yüklemez |
| {{ui:Yolun videosu}} | Zaman çizelgesindeki kamera yolu (ya da sırayla kayıtlı sahneler) bu gerçek zamanlı görünümde, canlı görünümün boyutunda bir video olarak; tarayıcının yapabildiği yerde WebM ya da MP4, değilse numaralı resimler içeren bir ZIP |

Panoramanın boyutu kaliteye bağlıdır: Düşük, Orta ve Yüksek için sırasıyla 1024, 2048 ya da 4096 piksel genişliğinde. Görüntüleyici dosyası, modelin yanında yaklaşık 5 MB'tır.

:::note
Tur ve görüntüleyici gösterim için yapılmıştır, düzenleme için değil: kaydettiğinizde modeli olduğu gibi tutarlar.
:::

## Kalite

| | Düşük | Orta | Yüksek |
|---|---|---|---|
| Güneş gölgeleri | tek bir gölge haritası | üç kademe | dört kademe |
| Ortam kapanması (temas gölgeleri) | | ✓ | ✓, daha ince |
| Metaldeki yansımalar | | | ✓ |
| Parlama (Resim render et ayarladığında) | | ✓ | ✓ |
| Kenarların yumuşatılması | FXAA | birkaç kare üzerinden (TAA) | birkaç kare üzerinden (TAA) |
| Yansıyan ışık | kaba | daha ince | en ince |

{{ui:Bu bilgisayar için}} kullanılabilir bir grafik kartı olmayan bir bilgisayarda Düşük, yerleşik bir grafik çipi olan bir bilgisayarda Orta, ayrı bir grafik kartı olan bir bilgisayarda Yüksek seçer. Düşük, grafik kartı olmayan 8 GB'lık bir dizüstü bilgisayar için tasarlanmıştır.

## Yansıyan ışık

Güneş alan bir duvardan zemine yansıyan ışık ve bir odanın daha karanlık iç kısmı, [render edilmiş resimleri](topic:render) yapan aynı yol izleyici ile hesaplanır: model içindeki noktalarda, her işlemci çekirdeğinde arka planda küçük bir panorama render eder. Çalışırken alt satır {{ui:Yansıyan ışık: 40 %}} der; hazır olduğunda görünüm onu alır. Bir değişiklikten sonra yeniden başlar.

:::note
Bu, canlı görünüm için bir yaklaşıklıktır, render edilmiş bir resim değildir: noktalar arasındaki küçük ayrıntılar, kendilerine yakın noktaların yansıyan ışığını alır. Bitmiş bir resim için [Resim render et](topic:render) kullanın.
:::

## Parlaklık ve renkler

Canlı görünüm, [Resim render et](topic:render) ile aynı parlaklığı, beyaz dengesini, kontrastı ve görünüm dönüşümünü (ACES, AgX, filmic ya da standart) kullanır: onları orada ayarlayın, canlı görünüm izler.

:::note
Tarayıcılar farklıdır. WebGPU'su olan tarayıcılarda (Windows, macOS ve ChromeOS üzerinde Chrome ve Edge, Safari 26) canlı görünüm onu kullanır; diğer yerlerde (Linux'taki çoğu tarayıcı, eski Apple sistemleri) WebGL 2 kullanır ve aynı görünür.
:::
