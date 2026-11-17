---
title: Serbest biçimli yüzeyler (NURBS)
summary: Ürün kabukları, araba gövdeleri ve tekne gövdeleri için pürüzsüz eğriler ve yüzeyler — loft, süpürme, eğri ağları, dört kenarlı yamalar, harmanlamalar, kırpmalar — yüzeylerde ölçülen G0, G1 ve G2 sürekliliği, birleştirme, kırpma ve çıkarma ile katılar, zebra ve eğrilik görünümleri, bir taramaya uydurulan ve hatası ölçülen yüzeyler ve STEP ya da IGES dosyaları.
keywords: nurbs, tarama, ters mühendislik, uydurma, örgüden yüzeye, nokta bulutu, stl, kırp, kırpılmış, delik, kes, katı, katılar, boole, birleşim, çıkar, kesiştir, fark, dik, kapalı, serbest biçim, freeform, yüzey, yüzeyler, b-spline, bspline, eğri, spline, loft, süpürme, ray, ağ, coons, yama, harmanlama, eşleştirme, süreklilik, g0, g1, g2, teğet, eğrilik, zebra, kontrol noktaları, düğümler, derece, step, iges, a sınıfı
from: 09887405
---

**Yüzeyler** paneli, ürün kabukları, araba gövdeleri ve tekne gövdelerinde kullanılan türden pürüzsüz eğriler ve yüzeyler yapar: NURBS, diğer yüzey modelleyicilerin kullandığı matematiğin aynısı. Her şey, gördüğünüz üçgenlerde değil, kesin yüzeylerde ölçülür. Paneldeki boyutlar, modelin gösterdiği birim ne olursa olsun **milimetre** cinsindendir.

Sağdaki panelden açın: {{ui:Yüzeyler}} › {{ui:Yüzeyler panelini aç}}. Zaten yüzeyleri olan bir model onu kendiliğinden açar.

## Bir komut nasıl çalışır

1. Bir komuta basın (örneğin **Loft**). Panel neye ihtiyacı olduğunu söyler: noktalar, eğriler, bir yüzey kenarı ya da bir eğri ucu.
2. Onları seçin: 3B görünümde tıklayarak ya da listedeki her birinin yanındaki **Seç** (ya da kenar ve uç düğmeleri) düğmesine basarak. Bir kenar için, yüzeyin o kenarının yakınına tıklayın.
3. Seçenekleri (derece, tolerans, süreklilik, …) kontrol edin ve **Oluştur**'a basın.

Noktalardan yapılan eğriler, satır başına bir tane yazılan noktaları alır (mm cinsinden `x, y, z`) ya da **Görünümde noktaları seçin**: her tıklama çizim araçlarıyla aynı yakalamayı kullanır; bitirmek için <kbd>Enter</kbd> ya da çift tıklayın, durdurmak için <kbd>Esc</kbd>.

## Eğriler

- **Noktalardan geçen eğri** her noktadan geçer. **Kontrol noktalarıyla eğri** bunun yerine bir nokta kafesini izler.
- **Düğüm ekle**, **Derecesini yükselt** ve **Derecesini düşür** bir eğriyi hareket ettirmeden nasıl tanımlandığını değiştirir (düşürme, eğri toleranstan fazla hareket edeceği zaman reddeder). **Eğriyi yeniden oluştur** ona yeni bir kontrol noktası sayısı verir ve ne kadar hareket ettiğini söyler.
- **Eğriyi eşleştir**, bir eğrinin ucunu başka birininkiyle G0 (dokunma), G1 (aynı yön) ya da G2 (ayrıca aynı eğrilik) ile buluşturur. **Eğriyi harmanla** iki uç arasına yeni bir eğri ekler.
- **Eğrileri birleştir** ve **Eğriyi böl**.

## Yüzeyler

- **Loft** iki ya da daha fazla eğri boyunca, **Doğrusal yüzey** iki eğri arasında, **Eğriyi ekstrüde et** ve **Eğriyi döndür**.
- **Tek rayda süpür**, bir profili bir yol boyunca bükmeden taşır; **İki rayda süpür** profilin uçlarını iki rayda tutar. Süpürmeler uydurulur: durum satırı gerçek süpürmeye ne kadar yakın kaldığını söyler.
- **Eğri ağından yüzey**, bir eğri ızgarasından geçer (ilk seçimler profiller, gerisi kılavuzlardır). **Dört kenardan yama**, köşelerinde buluşan dört eğriyi doldurur.
- **Yüzeyi eşleştir**, bir yüzey kenarını komşusuyla G0, G1 ya da G2 ile buluşturur; **Yüzeyi harmanla** iki kenar arasına bir yüzey ekler.
- **Yüzeyi ofsetle**, **Yüzeyi uzat** (yüzey gittiği yönde devam eder), **Yüzeyi yeniden oluştur** ve yüzeyler için düğümler ve derece.

## Kaliteyi kontrol etmek

**Ortak kenarlar** tablosu, iki yüzeyin paylaştığı her kenarı, boşluğu (mm), aralarındaki açıyı (°), eğrilik sıçramasını (1/mm) ve bunun onu G0, G1 ya da G2 yapıp yapmadığını listeler. İstediğinizden kötü bir kenar **Sorunlar** (uygulama çubuğundaki ⚠ düğmesi) içinde bir **Eşleştir** düzeltmesiyle de yer alır.

**Göster** › **Zebra çizgileri** ve **Eğrilik (Gauss)** tam yüzeyden gelir: bir kenarda kesintisiz devam eden çizgiler G1 anlamına gelir; genişliğini de koruyan çizgiler G2 anlamına gelir. Eğrilik, yüzey bir eyer olduğu yerde mavi, bir kubbe olduğu yerde kırmızı ve düz olduğu yerde beyazdır. **Kontrol noktaları** kontrol ağlarını çizer.

G0–G2 kenar başına 33 noktada ölçülür. **G3 ve "A sınıfı" kalite ölçülmez** ve iddia edilmez.

## Bir yüzeyi kırpın

**Kırp** grubu, bir yüzeyi şeklini değiştirmeden keser: yüzey tüm kontrol noktalarını korur ve yalnızca ana hat içindeki kısım gösterilir, sayılır ve yazılır. **Dikdörtgene kırp** ve **Daireyle kırp**, her yönde yüzeyin bir payı (0 ile 1 arası) üzerinde çalışır, bu yüzden görünümde seçim gerektirmezler. **Eğriyle kırp** yüzeyin üzerinde yatan kapalı bir eğri alır (yüzeye yansıtılır; açıksa ya da toleranstan fazla uzaktaysa kelimelerle reddedilir). Ana hattın içini kaldırmak için **Delik aç** kutusunu işaretleyin; yalnızca içini tutmak için bırakın. Bir yüzeyde bir tutulan ana hat ve istediğiniz kadar delik olabilir; başka birini kesen bir ana hat reddedilir. **Kırpmayı kaldır** tüm yüzeyi yeniden gösterir. Kesilen kenarlar ana hattı tam olarak izler; panelin Geri al'ı bir kırpmayı diğer adımlar gibi geri alır.

STEP kırpmayı yüzün sınırları olarak, IGES ise kırpılmış bir yüzey olarak (varlık 144) taşır; ikisi de geri okur.

## Katılar ve Boole işlemleri

**Katılar** grubu yüzeyleri kapalı gövdelere çevirir ve birleştirir. Burada bir katı, birlikte bir hacmi kapatan panelin kendi yüzeylerinden oluşan bir kümedir; yüzleri kırpmalarıyla birlikte kesin NURBS yüzeyler olarak kalır.

- **Kutu katı**, **Silindir katı** ve **Küre katı** girilen boyutlardan (mm cinsinden) bir tane yapar: altı düz yüzlü bir kutu, yuvarlak bir yan ve daireye kırpılmış iki düz uçlu bir silindir, tek bir döndürülmüş yüzeyli bir küre.
- **Yüzeylerden katı**, kendi yaptığınız yüzeyleri gruplar. Onları seçin ya da hiçbirini seçmeyin: o zaman henüz bir katıda olmayan her gösterilen yüzey kullanılır. Tolerans dahilinde dikilirler: kapanmazlarsa hiçbir şey değişmez ve panel kaç kenarın açık kaldığını ve ne kadar yakın buluşmaları gerektiğini söyler.
- **Birleşim**, **Çıkar** (ikinci katı birincisinden alınır) ve **Kesiştir** (yalnızca ikisinin ortak olanı) iki katı alır: görünümde her birinin bir yüzüne tıklayın ya da **Katılar** listesinde **Seç**'e basın. İki katıyı sonucun yanında bırakmak için **İki katıyı tut** kutusunu işaretleyin.

Boole işlemi her yüzü kendi kesin yüzeyinde tutar ve onu kesişim boyunca yeni kırpma ana hatlarıyla keser. Sonuç satırı ölçülen sayıları verir: katı motorunun noktalarının kesin yüzeylere oturmak için ne kadar hareket etmesi gerektiği (asla toleranstan fazla değil), kesişim noktalarının her iki yüzeye ne kadar yakın olduğu (genellikle milimetrenin birkaç milyonda biri), hacim ve yeni yüzlerin kesin yüzeylerinden yeniden dikildiklerinde yeniden kapanıp kapanmadıkları. Hacimler toleransla (siz başka bir şey ayarlamadıysanız 0.05 mm) üçgenler üzerinde ölçülür; bu yüzden bir küre ya da silindirin hacmi kesin olandan biraz küçük okunur: daha küçük tolerans daha yakın sonuç verir. Temiz yapılamayan bir Boole işlemi (katılar hiçbir şey paylaşmıyorsa, bir ana hat kendini keserse) kelimelerle reddedilir ve hiçbir şeyi değiştirmez. Bir Boole işlemi, panelin **Geri al**'ında tek bir adımdır.

**Katılar** listesinde **Grubu çöz** yüzleri düz yüzeyler olarak tutar; çöp kutusu katıyı ve yüzlerini kaldırır.

**Modele ekle** (**Katılar** listesinde) katının bir kopyasını modele tek bir kapalı grup olarak koyar; yüzleri 0.05 mm içinde üçgenler olarak, modelin Geri al'ında tek bir adımda. Ardından modelin kendi **Birleşim**, **Çıkar** ve **Kesiştir** işlemleri, it/çek ve 3B baskı denetimi ile çalışır; kesin katı panelde kalır.

## Yuvarlatmalar ve kalınlık verme

**Yüzeyler arasında yuvarlatma**, bir katıda iki yüzeyin buluştuğu kenarı yuvarlatır: iki yüzü seçin (görünümde ya da listedeki **Seç** ile), **yarıçapı** ve, kenar boyunca değişen bir yarıçap için, **uçtaki yarıçapı** yazın (0 tek bir yarıçap tutar). Bu yarıçapta bir top kenar boyunca iki yüze de dokunarak yuvarlanır; yuvarlatma, oluşturulan her noktada kalan kesin dairesel yaydır, tek bir yüzeye birleştirilmiş, ve iki yüz top onlara dokunduğu yerde kırpılır. Dış bir kenar malzeme kaybeder, iç bir köşe kazanır. Sonuç satırı ölçülenleri verir: yuvarlatma yüzeyinin, oluşturulduğu noktalar arasında yuvarlanan toptan ne kadar uzakta olduğu (noktalar toleransın dörtte birinin içinde kalana kadar eklenir), dokunma çizgileri boyunca yuvarlatma ile her yüz arasındaki en büyük açı ve bir Birleşim ile aynı sayılar. Sığmayan bir yarıçap (top bir yüzeyi terk eder ya da bir yüz yarıçaptan daha sıkı kıvrılır) yüzün adı verilerek reddedilir ve hiçbir şey değişmez.

**Birden çok kenarı yuvarlat**, birçok kenarı bir adımda yuvarlatır: ilk kenarın iki yüzünü, sonra bir sonraki kenarın iki yüzünü seçin ve böyle devam edin (bir yüz birkaç çiftte olabilir, örneğin bir kutunun üst yüzü dördünde); bütün kenarlar yazdığınız yarıçapı alır. Her yuvarlatma katının eski hâli üzerinde hesaplanır, sonra birbiri ardına kesilir, bu yüzden sıra önemli değildir. Yuvarlatılmış iki kenar, diğer kenarları keskin kalan bir köşede buluştuğunda, iki yuvarlatma kesişim eğrisi boyunca birbirine girer (bir kırışıklık). Birbirine dik üç düz yüzeyin üç yuvarlatılmış dış kenarı tek bir yarıçapla buluştuğunda, köşe üç yuvarlatmanın hepsine teğet tek bir **küre yaması** olur (kırışık köşeyi istiyorsanız **Köşeler**'i işaretlemeyin); bu tür iki köşe arasındaki bir kenarın her iki ucu da böyle köşelerse en az yarıçapın iki katı uzunlukta olmalıdır. Sonuç satırı kaç kenarın yuvarlatıldığını ve köşelerin nasıl çıktığını söyler. İç kenarlar da birlikte yuvarlatılabilir, ama tekrar kapanmayan bir sonuç yalnızca bildirilir (satır bunu söyler), bu yüzden kontrol edin.

**Katıya kalınlık ver** bir yüzeye kalınlık verir: onu seçin, **kalınlığı** yazın ve diğer yöne büyütmek için **Diğer taraf**'ı işaretleyin. Ofsetli yüz yüzeye uydurulur ve ona karşı ölçülür (sonuç satırı kalınlıktan en büyük farkı verir); duvarlar her kenarı ve her kırpma ana hattını izler. Yüzey o taraftaki kalınlıktan daha sıkı kıvrılırsa ya da yüzeyin başka bir parçası kalınlıktan daha yakınsa, yüzey ve yer adı verilerek reddedilir ve hiçbir şey değişmez.

## Geri al, dosya, STEP ve IGES

Panelin kendi **Geri al** ve **Yinele** düğmeleri vardır (komut başına bir adım). Yüzeyler modelle birlikte `.modelcraft` dosyasında kaydedilir; modelin kendi geri alma işlemine dahil değildirler, dosyanın malzemeleri gibi.

**STEP…** (AP242) ve **IGES…** eğrileri ve yüzeyleri tam olduğu gibi kaydeder (B-spline eğriler ve yüzeyler, üçgenlere çevrilmez). Her yüzey kendi kırpmasıyla kendi yüzü olur; bir katı, diğer CAD programlarının beklediği gibi her kenarı iki yüzü tarafından paylaşılan tek bir kapalı kabuk olarak yazılır (durum satırı kaç katının bu şekilde çıktığını söyler). IGES'te aynı katı tek bir manifold katı B-rep'tir (kapalı kabuk 514 üzerinde varlık 186, yüzeyler 510, döngüler 508, bir kenar listesi 504 ve bir köşe noktası listesi 502); yüzleri kenar kenar eşleşmeyen bir katı ayrı yüzler olarak yazılır ve satır bunu söyler. **İçe aktar…** bu tür bir katıyı hem STEP'ten hem de IGES'ten bir katı olarak geri okur. Bu şekilde yazılmış eğrileri ve yüzeyleri ve `.ccnurbs` yama kümelerini okur; diğer programların STEP katıları Dosya › İçe aktar ile örgü olarak açılır.

## Bir taramadan yüzeyler (ters mühendislik)

Modelde taranmış örgüyü seçin (hiçbir şey seçili değilse her gösterilen şey), **Yüzeyler**'i açın ve **Tarama** grubunda **Yüzeyleri taramaya uydur**'u seçin. Araç **düzlemler**, **silindirler**, **küreler** ve **koniler** arar (işlenmiş bir parçanın yapıldığı kesin yüzeyler; her satır bulduğu yarıçapı ya da yarım açıyı gösterir). **Yuvarlatmaları** bulur (yuvarlatılmış kenarlar ve köşeler: iki ya da daha fazla başka yüzeye teğet olarak giren küçük bir silindir ya da küre, yarıçapı ve birleştirdiği yüzeylerle birlikte gösterilir), **halka yuvarlatmaları** (bir simit: düz bir yüzün bir silindir ya da koniyle buluştuğu yuvarlatılmış kenar, yarıçapı ve halka yarıçapıyla birlikte gösterilir) ve **değişken yuvarlatmalar** (yarıçapı boyunca değişen bir yuvarlatılmış kenar, her ucundaki yarıçapla gösterilir). Pürüzsüz, hafifçe kıvrık bir parçaya **bir serbest biçimli yama** uydurur ve her yüzü, geldiği tarama parçasının ana hattına göre keser; böylece delikler ve köşeler korunur. Seçenekler: **tolerans** (bir tarama noktasının bir düzlem ya da silindirden ne kadar uzakta olabileceği ve yine ona ait sayılacağı, mm cinsinden, ve bir serbest biçimli yama için hedef), **en küçük parça** (yüzey alanının bir payı) ve **en çok yüz**. Aynı tarama ve seçenekler her zaman aynı yüzleri verir.

Sonuç bir tablodur, her yüz için bir satır: türü, kaynağı olan üçgen sayısı ve **taramadan yüze ölçülen** hata (rms, en büyüğü ve toleranstan içeride kalan noktaların payı). Ölçülen noktalar tarama köşeleri ve her üçgenin ortasıdır. Hata tersine, yüzden taramaya ölçülmez; bu yüzden taramanın ötesine uzanan bir yüz görünmez. Tablonun altındaki not, alanın ne kadarının uydurmak için çok küçük olduğunu da söyler. Görünümde tarama noktaları **sapma haritası**'na göre renklenir: yüz üzerinde mavi, toleransın yarısına kadar yeşil, toleransta ya da üzerinde kırmızı (gizlemek için **Sapma haritasını göster**'i işaretlemeyin). Kendi üzerine katlanan parçalar (örneğin serbest biçimli yamalarla uydurulmuş kapalı bir boru) uydurulmamış olarak listelenir; asla tek bir yüzeye zorlanmazlar.

**Yüzeyleri bir katıya dikin** modelde bir katının parçası olmayan her gösterilen yüzeyi tek bir kapalı katıda birleştirir. Tarama yüzleri yalnızca taramanın kendi hatası içinde buluşur, bu yüzden kapanan en küçük birleşme mesafesini dener (ayarladığınız **dikme mesafesi**'nden asla fazla değil) ve yüzler kapanmazsa kelimelerle reddeder. Bir boşluğu asla yamamaz. Yuvarlatılmış kenarları olan bir kutu, yuvarlatmaları kendi yüzleri olarak bulunduğunda dikilir; kapanan birleşme mesafesi sonuçta yazılır. Katı sonra Birleşim, Çıkar, Kesiştir ve **Modele ekle** ile çalışır.

Yapılmayanlar: bir **halka yuvarlatması** (bir simit) yalnızca zaten bulunmuş bir silindir ya da koninin ekseni etrafında aranır, ve bir **değişken yuvarlatma** yalnızca oldukça düz bir kenar boyunca (kesitleri bir yöne dik kesilir); başka yerde, yeterince pürüzsüzse serbest biçimli yamalar olarak çıkarlar, değilse dışarıda bırakılırlar. Küreler, koniler ve yuvarlatmalar rastgele örnekleme ile bulunur, bu yüzden çok küçük olanlar (birkaç üçgen) kaçabilir. Sapma haritası taramadan yüzlere mesafeyi gösterir, tersini değil. Çok büyük taramalar (300.000 üçgenden fazla) burada reddedilir. Tam dönüşlü bir silindirin yüzleri deliklerin etrafında kesilir, dikiş hiçbir deliğin olmadığı yere konur. Güvenmeden önce her yüzü taramanızla karşılaştırın.

## Henüz yapılmadı

Eğri yüzlerin bir köşesinde ya da farklı yarıçaplarla buluşan kenarları yuvarlatmak (bir köşe harmanı), buluşmayan yüzler arasında bir yuvarlatma, eğik ya da eğri bir yüzde biten iç bir yuvarlatma ve üçgensiz yüzeylerde hesaplanan Boole işlemleri ve yuvarlatmalar (burada katı motoru tolerans içindeki üçgenler üzerinde çalışır ve her nokta sonra kesin yüzeylere geri konur).
