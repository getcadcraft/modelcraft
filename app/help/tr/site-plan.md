---
title: DWG veya DXF'ten site planı üzerinde modelleme
summary: Bir CAD site ya da kat planını zemine çizgi olarak getirin, birim sorusunu yanıtlayın ve onu yüzeylere ve kütlelere izleyin.
keywords: site planı, dwg, dxf, cad, içe aktar, eskiz, eskiz fotoğrafı, el eskizi, peçete eskizi, fotoğraf, kâğıt, kalem renkleri, dinamik bloklar, görünürlük durumları, metin, taralama, spline, elips, 3B yüzey, izleme, kat planı, arsa, mülk sınırı, birimler, altlık, bağlam
from: 3415dc96
---

ModelCraft, 2B bir CAD çiziminin, bir site planının ya da bir kat planının çizgilerini getirebilir ve bunları zemine yerleştirerek üzerinde modelleme yapmanızı sağlar.

## Çizimi içe aktarın

1. {{ui:Dosya}} grubundaki {{ui:İçe aktar}} düğmesine tıklayın (ya da dosyayı 3B görünüme bırakın).
2. Bir `.dwg` ya da `.dxf` dosyası seçin.

   Büyük bir DWG bir an alır: içeri alınana kadar durum çubuğu "Reading plan.dwg…" yazar.

3. Çizim birimlerini belirtmiyorsa, "Drawing units" başlıklı bir iletişim kutusu "What is one drawing unit?" diye sorar. {{ui:İnç}}, {{ui:Fit}}, {{ui:Milimetre}} ya da {{ui:Metre}} seçin. Çoğu ABD site planı fit, mimari planlar inç, metrik planlar milimetre cinsinden çizilir.

   Çizim, zeminde seçili bir kenar grubu olarak gelir ve görünüm ona yakınlaşır. Durum çubuğu kaç kenarın geldiğini söyler, örneğin "Imported site.dwg: 1697 edges on the ground, in a group. Explode it to draw on it directly."

## Ne gelir

- **Model uzayından** yalnızca çizgiler, çoklu çizgiler (yaylarıyla birlikte), daireler, yaylar ve bloklar (içindekilerle birlikte). Eğriler kısa düz parçalara dönüşür.
- Çizgiler, çoklu çizgiler, yaylar, daireler, elipsler ve splineler zemine düz olarak, kenar olarak iner.
- **Taralamalar** zemindeki yüzeylere dönüşür, adacıkları delik olarak; böylece taralı alanı hemen itip çekebilirsiniz.
- **3B yüzeyler** ve katı dolgular yüzey olur; 3B yüzeyler yüksekliklerini korur.
- **Metin** (tek satırlı metin, çok satırlı metin ve öznitelik değerleri), metnin kendi yüksekliğinde, açısında ve hizalamasında, basit tek çizgili bir yazıyla kenar olarak çizilir. Yazı tipi çizimin yazı tipi değildir, bu yüzden sözcükler biraz daha uzun ya da kısa olabilir. Yazının şekli olmayan karakterler küçük kutular olarak çizilir ve sayılır.
- **Ölçülendirmeler** çizimin gösterdiği gibi çizilir (çizgileri, ok uçları ve metni, kenar ve yüzey olarak).
- **Dinamik bloklar** çizimin gösterdiği gibi gelir: yerleştirilmiş her blok, kaydedildiği görünürlük durumunda ve yalnızca o durumun çizgileriyle. Durum çubuğu bunları gösterilen durumlarla ve her birinin sahip olduğu diğer durumlarla listeler, örneğin "Receptacle shown as Duplex ×38, GFI ×7 (states: Duplex, GFI)". ModelCraft durumları değiştirmez.
- **3B katılar, bölgeler ve gövdeler** (çizimin ACIS verisi) kendi grupları olarak gelir: kapalı bir katı katı olarak, bir bölge ya da açık bir gövde yüzeyler olarak. Düz yüzeyler bütün gelir; eğri yüzeyler (silindirler, koniler, küreler, simitler, basit spline yüzeyler) aralarında yumuşak kenarlar bulunan küçük üçgenler olarak gelir, böylece yalnızca katının kendi kenarları görünür. Başka tür bir yüzeydeki bir yüzey dışarıda bırakılır ve listelenir: "Not drawn yet (3D solids): …".
- İçe aktarılmaz: noktalar, tablolar, çoklu belirtme çizgileri, resimler ve diğer nesne türleri. Durum çubuğu bunları türlerine göre listeler, örneğin "Not imported: 12 POINT." Bir düzende (kâğıt uzayında) olan her şey de listelenmeden dışarıda bırakılır.
- Katmanlar korunmaz: bütün çizgiler aynı gelir.

Çok uzak bir orijinden (örneğin state plane koordinatlarıyla) gelen bir çizim yine içe aktarılır, ama ModelCraft'ın orijininden uzakta yer alabilir. Orijinden 10.000 km'den fazla uzaktaki çizimler reddedilir: önce CAD programında çizimi 0,0 noktasına daha yakın taşıyın.

## Yüzeylere izleyin

İçe aktarılan çizgiler kendiliğinden nadiren düzgünce yüzeylere kapanır. İki yol vardır:

**Planı altlık olarak tutun (önerilir)**

1. Planı kendi grubunda bırakın.
2. Binanızı {{ui:Dikdörtgen}} ve {{ui:Çizgi}} ile planın üstüne çizin; planın köşelerine ("Uç nokta") ve kenarlarına ("Kenar üzerinde") yakalayın.
3. Yüzeylerinizi itip çekerek yukarı çıkarın. Plan altında dokunulmadan kalır ve tüm grubu bir tıklamayla istediğiniz zaman silebilirsiniz.

Yakalama gruplar arasında çalışır: planı açmadan planın köşelerine yakalayabilirsiniz.

**Planın kendi çizgileri üzerinde çizin**

1. Plan grubunu seçin ve {{ui:Patlat}} düğmesine tıklayın. Çizgileri serbest kenarlara dönüşür.
2. Kapalı bir ana hattın bir yüzey olması gereken yerde, {{ui:Çizgi}} ile kenarlarından herhangi birinin üzerine, köşeden köşeye bir çizgi çizin. Ana hat kapalı ve düzse yüzey genellikle kendiliğinden dolar. Dolmazsa, ana hatta bir boşluk ya da bindirme arayın ve onun üzerinden çizin.
3. İtip çekin.

Bu yöntem temiz bir planda en iyi çalışır. Karmaşık bir ölçü planında üstüne izlemek daha hızlıdır.

## Sorunlar

- "This is a binary DXF. Save it as ASCII DXF and try again." — DXF'i CAD programından ASCII (metin) olarak yeniden kaydedin.
- "…has no lines, arcs or circles in model space to bring in." — Çizim büyük ihtimalle tamamen düzenlerdedir ya da tamamen metin ve taralamalardan oluşur.
- "This drawing could not be read (…). It may be damaged, or saved in a DWG version the reader does not handle…" — Parantezlerdeki bilgi nedenini söyler, örneğin "DWG version AC1009 is not supported". CAD programından DXF olarak ya da AutoCAD 2000'den 2018'e kadar bir sürümde DWG olarak kaydedin.
- Plan yanlış boyutta: yanlış birimi seçtiniz. {{key:Mod+Z}} ile geri alın ve yeniden içe aktarın ya da grubu doğru çarpanla [ölçekleyin](topic:rotate-scale) (fit ile inç arasında 12, inç ile milimetre arasında 25.4).

Kontur çizgilerini şekillendirebileceğiniz zemine dönüştürmek için bkz. [Arazi](topic:terrain).

## Bir el eskizinin fotoğrafından

**Eskiz fotoğrafı içe aktar…** kâğıt üzerindeki bir eskizin fotoğrafını alır (JPEG, PNG ya da TIFF; doğrudan bir telefondan da olur) ve zeminde aynı türden kenarlar oluşturur. Hangi kâğıt olduğunu söyleyin (ya da sayfayı bulmasına izin verin, A4 kabul edilir) ve eskizin ölçeğini, örneğin 1 : 100. Kâğıdın kenarı bulunur ve fotoğraf düzeltilir; mürekkep çizgilere ve yaylara izlenir. Her kalem rengi (siyah, kırmızı, mavi, yeşil) etiketli kendi grubu olur (**Sketch black**, **Sketch red**, …), hepsi fotoğrafın adını taşıyan tek bir grubun içinde. Tek bir geri alma adımıdır ve her şey bu bilgisayarda olur: hiçbir yere gönderilmez.

Bir kâğıt kenarı bulunamazsa, tüm fotoğraf sayfa olarak alınır ve durum satırı bunu söyler: bildiğiniz bir şeyi ölçün ve kayma varsa grubu ölçekleyin. Çizgileri yukarıdaki gibi yüzeylere izleyin.
