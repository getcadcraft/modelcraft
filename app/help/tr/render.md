---
title: Modelin resmini render et
summary: Gün ışığı gibi görünen bir resim yapın: gökyüzü, modelinizin konumuna ve tarihine göre güneş, yumuşak gölgeler, cam ve metal görünümleri; sonra PNG olarak kaydedin.
keywords: render, ön ayar, ön ayarlar, sahne ön ayarı, iç mekân, dış mekân, kesit görünümü, gece, tek tıkla, render etme, yol izleme, yol izlemeli, ışın izleme, küresel aydınlatma, yansımalar, kırılma, yüksek kalite, fotoğraf, fotogerçekçi, gerçekçi, resim, görüntü, png, durağan, gökyüzü, güneş, gün ışığı, gölgeler, yumuşak gölgeler, ortam tıkanıklığı, cam, metal, parlak, malzemeler, pozlama, parlaklık, bulutlu, alacakaranlık, stüdyo, sunum, sis, pus, duman, bulut, hacim, ışın demetleri, tanrı ışınları, kostikler, uyarlanabilir örnekleme, gürültü
from: 517ba4d3
---

{{ui:Resim render et…}} görünümün bir çizim gibi değil, gün ışığı gibi görünen bir resmini yapar: bir gökyüzü, modelinizin konumu ve tarihinin gösterdiği yerdeki güneş, yumuşak gölgeler, köşeleri ve boşlukları karartan gökyüzünden gelen ışık ve cam, metal ya da parlak boya gibi görünebilen renkler. Model değiştirilmez.

## Görünümü render etme

1. Resmi istediğiniz gibi kurun: döndürün, yakınlaştırın, bir [sahne](topic:scenes) seçin, görünmemesi gerekenleri gizleyin. Resim, görünümün kendi kamerasını kullanır.
2. {{ui:File}} grubunda {{ui:Dışa aktar}} düğmesine, ardından {{ui:Resim render et…}} düğmesine tıklayın.
3. Basılı olan sahne istediğiniz değilse bir {{ui:Sahne}} seçin (bkz. [Sahne ön ayarları](topic:render#scene-presets-a-good-picture-in-one-click)), {{ui:Boyut}} seçin, ardından {{ui:Render}} düğmesine tıklayın.

   Resim render edildikçe oluşur ve her geçişte daha pürüzsüz olur. {{ui:Durdur}} (ya da {{key:Esc}}) işlemi erken bitirir ve o ana kadarki resmi tutar.

4. İndirmek için {{ui:Kaydet}} düğmesine tıklayın (aksi {{ui:Farklı kaydet}} ile belirtilmedikçe PNG).

:::tip
Kamerayı ve görünümü kontrol etmek için önce {{ui:Görünümün boyutu}} boyutunda {{ui:Taslak}} ile başlayın; son resim için daha büyük bir boyutta {{ui:İyi}} veya {{ui:En iyi}} ile render edin.
:::

## Sahne ön ayarları: tek tıkla iyi bir resim

İletişim kutusunun üstünde dört {{ui:Sahne}} düğmesi vardır. Her biri gökyüzünü, parlaklığı, zemini, kenar çizgilerini, kaliteyi ve güneşi tek tıkla ayarlar; bu yüzden ilk resimden önce öğrenecek bir şey yoktur. Birine tıklayın, sonra {{ui:Render}} düğmesine tıklayın.

| Sahne | Ne ayarlar | Ne için kullanılır |
|---|---|---|
| {{ui:Dış mekân}} | Açık gökyüzü, modelin kendi güneşi, zemin açık | Dışarıdan bina |
| {{ui:İç mekân}} | Bulutlu gökyüzü (düzgün ışık, sert güneş lekeleri yok), yarım stop daha parlak | Bir odanın içinden görünüm |
| {{ui:Kesit görünümü}} | Beyaz stüdyo, zemin yok, hızlı render'da kenar çizgileri | Bir kesitle kesilmiş model |
| {{ui:Gece}} | Güneş batık (sitenin yarım küresinde kış ortasında gece yarısı), bir stop daha parlak | Modeli aydınlatan lambalar. Lamba yoksa resim karanlık olur |

- {{ui:Bu görünüm için seç}} sizin yerinize seçim yapar: bir kesim açıksa {{ui:Kesit görünümü}}, kamera modelin içindeyse {{ui:İç mekân}}, aksi halde {{ui:Dış mekân}}. İletişim kutusunu ilk açtığınızda kendiliğinden bu şekilde başlar.
- Her ayar aşağıda durur ve değiştirilebilir. Bir ayarı değiştirdiğinizde sahne ayarı artık basılı bir düğme olmaz ve düğmelerin altındaki satır ayarların sizin olduğunu belirtir. Değerlerini geri getirmek için sahneye yeniden tıklayın.
- Bir sahne motoru, modu, boyutu, malzemeleri, kamerayı ya da ışıkları değiştirmez.

:::note
Sahneler ModelCraft ve BimCraft'ta aynı değerleri verir. Bitmiş resmin görünümü modelinize ve ekran kartınıza bağlıdır.
:::

## Ayarlar

| Ayar | Ne yapar |
|---|---|
| {{ui:Boyut}} | Görünümün boyutu, görünümün iki katı, Full HD, 4K veya kare. Sabit boyutlar görünümün kamerasını korur ve yanlarda biraz daha fazla ya da az gösterir |
| {{ui:Mod}} | {{ui:Hızlı}} veya aşağıda anlatılan {{ui:Yüksek kalite (yol izlemeli)}} ve onun {{ui:Süre sınırı}} |
| {{ui:Kalite}} | Ortalaması alınan geçiş sayısı (ya da yüksek kalitede örnek sayısı): {{ui:Taslak}} 16, {{ui:İyi}} 64, {{ui:En iyi}} 256. Daha fazla geçiş daha pürüzsüz gölge ve kenar verir ama daha uzun sürer |
| {{ui:Gök mavisi}} | {{ui:Açık gökyüzü}}, {{ui:Bulutlu}} (yumuşak ışık, soluk gölgeler), {{ui:Alacakaranlık}} (alçak, sıcak ışık) veya {{ui:Beyaz stüdyo}} (düz beyaz arka plan) |
| {{ui:Güneş}} | Güneş, {{ui:Stil}} › güneş bölümündeki tarih, saat ve konumdan gelir. Modelin stilini değiştirmeden başka bir zamanı denemek için {{ui:Bu resim için başka bir tarih ve saat kullanın}} seçeneğini işaretleyin |
| {{ui:Parlaklık}} | Adımlarla (stop) daha açık veya daha koyu |
| {{ui:Modelin altındaki zemin}} | Gölgeleri alan ve ufukta kaybolan bir zemin. Modeliniz havadaysa kapatın |
| {{ui:Kenarları çiz}} | Modelin kenarlarını resmin üzerine ince çizer; çizilmiş bir görünüm için |

Seçilen zamanda güneş ufkun altındaysa gecedir: gökyüzü kararır ve modelin [lambaları](topic:lights) onu aydınlatır. İletişim kutusu bunu belirtir.

Ayarlar `.modelcraft` dosyasına kaydedilir; böylece aynı modelin bir sonraki resmi kaldığınız yerden başlar.

## Renkleri cam ya da metal gibi gösterme

{{ui:Malzemeler}} altında ekrandaki her rengin bir görünümü vardır: {{ui:Mat}}, {{ui:Saten}}, {{ui:Parlak}}, {{ui:Metal}}, {{ui:Cilalı metal}}, {{ui:Cam}} veya {{ui:Buzlu cam}}. {{ui:Boyanmamış yüzeyler}} kendi rengi olmayan yüzeylerdir.

Pencereleri cam yapmak için pencere camlarını bir renge [boyayın](topic:paint), sonra o rengi {{ui:Cam}} olarak ayarlayın. Cam, gökyüzünü ve arkasındakini rengiyle tonlanmış olarak gösterir ve gökyüzünü yansıtır.

:::note
{{ui:Hızlı}} modunda cam ve metal gökyüzünü yansıtır, modelin geri kalanını değil ve ışık cam içinde kırılmaz. Aşağıdaki {{ui:Yüksek kalite (yol izlemeli)}} modu ikisini de yapar.
:::

## Yüksek kalite

Işığı bir kameranın gördüğü gibi izleyen bir resim için {{ui:Mod}} › {{ui:Yüksek kalite (yol izlemeli)}} seçin:

- Işık yüzeyler arasında seker; bu yüzden bir pencereden ya da lambadan aydınlanan bir oda her yönden aydınlanır ve renkler komşularına sızar;
- Cam gerçek camdır: ışık içinden kırılır ve cam modeli yansıtır;
- Metal ve cilalı yüzeyler modelin geri kalanını yansıtır;
- Işık panelleri, yumuşak gölgelerle panel gibi aydınlatır.

{{ui:Hızlı}} modundan çok daha yavaştır: her geçiş her pikselin ışığını yeniden izler. Resim tanecikli başlar ve örnekler biriktikçe netleşir; bu yüzden küçük başlayın ({{ui:Görünümün boyutu}}, {{ui:Taslak}}) ve bir {{ui:Süre sınırı}} seçin: süre dolduğunda o ana kadarki resim tutulur. {{ui:Durdur}} de onu tutar. İlk geçiş, tarayıcı yol izleyiciyi hazırlarken bekler.

Tarayıcının WebGPU'su varsa yol izleyici CadCraft'ın kendi izleyicisidir ve ekran kartında çalışır; resmin altındaki satır {{ui:Ekran kartında yol izlemeli (WebGPU)}} yazar. {{ui:Durdur}} ya da süre sınırından sonra {{ui:Devam et}}, aynı resmi tüm örnekleri alana kadar sürdürür; ayarı değiştirmek ya da yeniden {{ui:Render}} basmak sıfırdan başlatır. WebGPU yoksa resim bunun yerine WebGL ile yol izlemeli olarak render edilir (satır bunu söyler) ve {{ui:Devam et}} sunulmaz.

:::linux
Linux'taki Firefox ve çoğu Chrome kurulumunda henüz WebGPU yoktur; bu yüzden yüksek kalite orada WebGL kullanır.
:::

Bu modda kenarlar çizilmez, kütüphane dokuları kendi rengini ve pürüzlülüğünü gösterir ama tümsekleri göstermez ([düğümlerle yapılmış bir malzeme](topic:shading#in-high-quality-pictures) normalini ve tümseklerini gösterir) ve bir kesim, resim başlamadan önce modelin üzerinde yapılır.

{{ui:Gürültü giderme (örnekler sonrası kalan tanecikliği temizler)}} varsayılan olarak açıktır: resim bittiğinde ya da durdurulduğunda, geriye kalan tanecikler bunun için yapılmış bir sinir ağıyla temizlenir (Intel Open Image Denoise'ın yayımlanmış ağı, kendi bilgisayarınızda çalışır: ekran kartında, yoksa işlemcide). Az örnekli bir resim temiz çıkar; {{ui:Göster}} › {{ui:Gürültü giderilmeden önceki resim}} onu render edildiği haliyle gösterir.

## Görünümde render etme

{{ui:Render}} çalışma alanı yol izleyiciyi görünümün kendisinde çalıştırır: döndürün, modeli düzenleyin ya da bir ışığı değiştirin, hemen yeniden başlar. {{ui:Bölge}}: bir dikdörtgen sürükleyin ve yalnızca o render edilir; {{ui:Tüm görünüm}} geri döndürür. {{ui:Odak}}: keskin olması gereken yere tıklayın, alan derinliği orada odaklanır. {{ui:Ayrıntı}} görünümün kaç pikselini render edeceğini belirler (az olursa hızlı olur). {{ui:Duraklat}} durdurur ve devam eder. WebGPU gerektirir: yoksa çalışma alanı bunu söyler, ama {{ui:Dışa aktar}} › {{ui:Resim render et…}} yine çalışır.

## Ekran kartında gökyüzü ve ışık profilleri

WebGPU ile yüksek kalitenin iki gökyüzü daha vardır:

- {{ui:Fiziksel gökyüzü}}, gün ışığını güneşin yüksekliğinden hesaplar: tepede koyu mavi, ufukta soluk bir bant ve alçaldıkça daha sıcak ve daha loş bir güneş. {{ui:Puslanma}} çok açık bir günden (2) puslu bir güne (10) kadar gider.
- {{ui:Gökyüzü resmi (HDRI)}} modeli gerçek bir yerin panoramik resmiyle aydınlatır. {{ui:Bir resim seçin…}} bir eşdikdörtgen `.hdr` ya da `.exr` dosyası alır; {{ui:Döndür}} onu model etrafında çevirir ve {{ui:Resim parlaklığı}} onu daha açık ya da koyu yapar. Resim kendi güneşini taşır, bu yüzden modelin güneşi eklenmez. Yalnızca sayfa açık kaldığı sürece tutulur: yeniden açtıktan sonra yeniden seçin.

{{ui:Lambalar}} listesindeki her lamba bir üreticinin ışık profilini alabilir: {{ui:IES profili…}} bir IES (LM-63) dosyasını okur ve lamba ışığını o armatürün yaptığı gibi verir (dar bir aşağı ışık, bir duvar yıkayıcı). Bu adı taşıyan her lamba onu kullanır ve lamba kendi parlaklığını korur. Profilin adına tıklayarak kullanmayı durdurun.

Açık camdan pencereler, gökyüzünün ışığının bir odaya girmesine yardımcı olur; bu yüzden gökyüzü altındaki iç mekân resimleri daha erken temizlenir.

{{ui:Hızlı}} modu ve WebGL yol izleyici, {{ui:Fiziksel gökyüzü}} ile {{ui:Gökyüzü resmi (HDRI)}} seçeneklerini açık gökyüzü olarak gösterir ve ışık profillerini yok sayar.

## Kamera

{{ui:Kamera}} resmi bir fotoğraf gibi ayarlar:

- {{ui:Pozlama}}: {{ui:Parlaklık kaydırıcısı}} ile kalın ya da {{ui:Kamera ayarları}}'nı seçip {{ui:Diyafram (f-stop)}}, {{ui:Deklanşör hızı}} ve {{ui:ISO}} değerlerini bir fotoğraf makinesindeki gibi ayarlayın; yanlarındaki EV, olağan pozlama değeridir. f/16, 1/100 s ve ISO 100 güneşli bir güne uyar; daha karanlık bir sahne daha geniş diyafram, daha yavaş deklanşör ya da daha yüksek ISO ister. Bu her modda çalışır.
- {{ui:Alan derinliği}}, bir {{ui:Odak uzaklığı (m)}} değerinin önündeki ve arkasındakini, o f-stop'taki bir lens gibi bulanıklaştırır (görünümün ortasındaki şeye odaklanmak için boş bırakın); {{ui:Diyafram şekli}} odak dışı parlamalara yuvarlak ya da kanatlı bir şekil verir.
- {{ui:Two-point perspective (vertical lines stay vertical)}} kamerayı düzeltir ve resmi bir mimari tilt-shift lensinin yaptığı gibi kaydırır; böylece bir binaya yukarı ya da aşağı baktığınızda duvarlar eğilmez.
- {{ui:Beyaz dengesi}}, hangi ışık rengini beyaz gösterdiğini belirler: sıcak lamba ışığı için daha düşük (örneğin 3000 K), gölge ve bulutlu günler için daha yüksek.
- {{ui:İzdüşüm}}: {{ui:360° panorama}} panorama görüntüleyicileri için kameranın etrafındaki her şeyin 2:1 bir resmini yapar; {{ui:360° stereo panorama}} kulaklıklar için bir sol göz ve bir sağ göz panoramasını alt alta koyar; {{ui:Küp haritası (6 yüzey)}} 3 × 2 bir ızgarada altı kare görünüm yapar. Genişlik {{ui:Boyut}} değerinden gelir.

İzdüşüm, alan derinliği, iki noktalı perspektif ve beyaz dengesi ekran kartındaki yol izleyici (WebGPU) gerektirir; bu yüzden yalnızca {{ui:Yüksek kalite}} modunda görünürler.

## Resmi bitirme

{{ui:Resim}} yüksek kaliteli resmi bir fotoğraf gibi derecelendirir; her denetim bitmiş resmi hemen değiştirir, yeniden render etmeden:

- {{ui:Görünüm (görünüm dönüşümü)}}: {{ui:ACES filmik}} (resim öncekiyle aynı), {{ui:AgX}} (daha yumuşak, çok parlak ışıkta rengi korur), {{ui:Filmik}} (yumuşak bir film eğrisi) veya {{ui:Standart}} (düz; parlak ışık beyaza kırpılır).
- {{ui:Kontrast}} ve {{ui:Parlak alan sıkıştırma}} (çok parlak yerlerdeki ayrıntıyı geri getirir).
- {{ui:Işıma (bloom)}} (parlak ışığın etrafında yumuşak bir parıltı), {{ui:Parlama}} ve onun {{ui:Parlama çizgileri}} (en parlak noktalardan yıldız ışınları) ve {{ui:Köşe karartma}} (daha koyu köşeler).
- {{ui:Renk tablosu (.cube)…}} bir `.cube` dosyasından renk derecelendirmesi uygular; {{ui:Renk tablosu gücü}} ile birlikte. Bir gökyüzü resmi gibi, yalnızca sayfa açık kaldığı sürece tutulur.

## Resmi kaydetme

{{ui:Kaydet}} yanındaki {{ui:Farklı kaydet}} dosyayı seçer: paylaşım için {{ui:PNG}}, {{ui:JPEG}} veya {{ui:WebP}} (JPEG ve WebP yalnızca tarayıcının yazabildiği yerlerde) ve ekran kartında yapılmış bir yüksek kalite render'dan sonra ayrıca:

- {{ui:PNG, 16 bit}}: derecelendirilmiş resim, tonlar arasında daha ince adımlarla; baskı ya da daha ileri düzenleme için.
- {{ui:EXR, her katman (32 bit kayan nokta)}}: render edildiği haliyle resim (doğrusal ışık, derecelendirme yok), her render öğesi ve ışık grubu kendi katmanında; birleştirme programları için.
- {{ui:Render dosyası (.ccrender, sonra yeniden derecelendirmek için)}}: iletişim kutusunun resmi yeniden karıştırıp derecelendirmesi için gereken her şey. {{ui:Bir render dosyası aç…}} onu karışımı ve derecelendirmesiyle geri getirir, render etmeden.

## Render'dan sonra ışıkları karıştırma

{{ui:Render}} düğmesine basmadan önce {{ui:Işık karıştırma (render sonrası her ışığın rengini ve parlaklığını değiştirin)}} seçeneğini açın. Resim bittiğinde (ya da durdurulduğunda), {{ui:Resmi karıştır}} ışıklarını gruplar halinde listeler: gökyüzü, güneş ve lambalar adlarına göre (aynı adlı her lamba bir gruptur). Bir grubu kapatın, ona bir renk verin ya da onu daha açık veya koyu yapın; resim hemen değişir, yeniden render etmeden. {{ui:Karışımı kaydet}} karışımı, sonra yeniden seçmek üzere bir adla tutar; {{ui:Render edildiği gibi}} resmi yapıldığı haline geri döndürür. {{ui:Kaydet}} karıştırılmış resmi kaydeder.

{{ui:Render öğeleri (albedo, normaller, derinlik, dağınık, yansıma, geçirgenlik, yayılım, kimlikler)}} resmin parçalarını da tutar. {{ui:Göster}} görünümü bunlardan birine çevirir: yüzey renkleri (albedo), normaller, derinlik, dağınık, yansıyan ve geçen ışık (her biri doğrudan ve dolaylı), parlayanlar ve gökyüzü ve maske yapmak için nesne ya da malzeme başına bir renk.

İkisi de ek katmanları ekran kartında tutar. Büyük boyutlarda ekran kartında yer olmayabilir; iletişim kutusu bunu söyler ve daha küçük bir boyut çalışır.

## Render kuyruğu

Yüksek kaliteli bir ayardan sonra, {{ui:Render kuyruğu}} altındaki {{ui:Bu resmi kuyruğa ekle}} resmi şu anki haliyle tutar; video iletişim kutusundaki {{ui:Bu animasyonu kuyruğa ekle}} aynısını tüm bir animasyon için yapar, kare kare yol izlemeli. {{ui:Kuyruğu başlat}} bunları bu bilgisayarda birer birer render eder ve biten her birinin yanındaki {{ui:Kaydet}} onu indirir. Sayfayı kapatmak kuyruğu korur: aynı modeli açın, durduğu yerden devam eder. Kuyruk WebGPU gerektirir.

## Sis, duman, gürültü ve kostikler

Bunlar {{ui:Sis, duman ve gürültü}} bölümünde durur ve ekran kartında {{ui:Yüksek kalite}} modunda çalışır; diğer motorlar bunları dışarıda bırakır.

- {{ui:Sis ve pus}}, havayı belli bir yüksekliğe kadar güneşin, gökyüzünün ve lambaların aydınlattığı bir sisle doldurur. {{ui:Ne kadar uzağı görebildiğiniz, metre cinsinden}} ne kadar kalın olduğunu belirler (yaklaşık 100 m hafif pustur, 20 m kalın sistir), {{ui:Sisin zeminden yüksekliği, metre cinsinden}} nerede bittiğidir ve {{ui:Işın demetleri}} sisin ışığa doğru ne kadar parladığıdır. Güneş ışığı sisten tepesinden çıkar; bu yüzden güneş bir pencereden ya da binalar arasından girdiğinde bunu ışık demetleri olarak görürsünüz.
- {{ui:Duman veya bulut}} sis gibi aydınlatılan tek bir duman ya da bulut hacmi ekler. {{ui:Tür}}, bir {{ui:Bulut}}, bir {{ui:Duman sütunu}} ya da {{ui:Bir hacim dosyasından (.ccvol)}} seçeneğidir; sonuncusu CadCraft'ın kendi ızgara biçimidir. {{ui:Ayrıntı}} ve {{ui:Çeşitlilik}} yapılmış bulutu ya da sütunu değiştirir; {{ui:En uzun kenarının boyutu, metre cinsinden (0 = modelin boyutu)}}, {{ui:X'te taşı (m)}}, {{ui:Y'de taşı (m)}}, {{ui:Z'de taşı (m)}} ve {{ui:Döndür}} onu yerleştirir (modelin ortasında başlar); {{ui:Kalınlık}} onu daha yoğun yapar, {{ui:Ön parlama}} ışığa doğru daha parlak yapar ve {{ui:Renk}} onu renklendirir. Bir hacim dosyası, bir gökyüzü resmi gibi, yalnızca sayfa açık kaldığı sürece tutulur.
- {{ui:Resmin temiz olduğu yerlerde erken durdur (uyarlanabilir örnekleme)}} yerleşmiş piksellere daha fazla örnek vermez; böylece resmin kalanı daha çabuk biter. {{ui:Kabul edilecek gürültü}}, bir piksel durduğunda kalan tanecik miktarıdır. Resmin altındaki satır, bir pikselin ortalama kaç örnek aldığını gösterir.
- {{ui:Kostikler (cam tarafından kırılan veya aynalardan yansıyan ışık)}} lambalardan ve güneşten gelen ışığı izler; böylece bir cam topun altındaki parlak leke ya da bir aynanın duvara vurduğu ışık tanecikli değil temiz çıkar. Sis, duman, {{ui:Render sonrası ışıkları karıştır}} ya da render öğeleri açıkken kapalıdır ve 360° resimler, animasyonlar ya da Render çalışma alanı için değil, resimler için yapılmıştır.

## Ne kadar sürer

Resim kendi bilgisayarınızda, onun ekran kartıyla yapılır; hiçbir şey yüklenmez. Ne kadar süreceği o karta bağlıdır. Süre geçiş sayısı ve piksel sayısıyla büyür: {{ui:En iyi}}, {{ui:Taslak}} ile karşılaştırıldığında 16 kat geçişe sahiptir ve bir 4K resim, Full HD'ye göre yaklaşık dört kat piksele sahiptir. Ekran kartı olmayan bir bilgisayar yine render eder, ama daha yavaş.

:::note
İletişim kutusu tarayıcının resim render edemediğini söylerse, tarayıcıda WebGL 2 yoktur. Güncelleyin ya da ayarlarında donanım hızlandırmayı açın.
:::
