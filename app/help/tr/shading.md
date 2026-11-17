---
title: Düğümlerle malzeme yapın
summary: Dokulardan, resimlerden ve matematikten Gölgelendirme çalışma alanında bir malzeme oluşturun, yaparken görünümde izleyin ve yüzeyleri onunla boyayın.
keywords: gölgelendirme, bake, pişirme, doku pişirme, ortam tıkanıklığı, ao, eğrilik, normal pişirme, yüksek poli, düşük poli, ışık haritası, çıkartma, çıkartmalar, etiket, logo, doku boyama, doku boya, fırça, malzeme, malzemeler, materialx, mtlx, openpbr, standart yüzey, malzeme kütüphanesi, librarycraft, doku kümesi, pbr, doku içe aktarma, zip, cc0, sürükle, düğüm, düğümler, düğüm düzenleyici, gölgelendirici, doku, prosedürel, gürültü, dama, voronoi, hücreler, dalgalar, tuğlalar, karolar, ahşap, mermer, gradyan, kir, kenar aşınması, renk rampası, karıştır, kabartma, normal harita, pürüzlülük, metaliklik, opaklık, kesme, emisyon, parlama, yer değiştirme, kutu eşleme, üç düzlemli, uv, resim, resim dokusu
from: d7368b21
---

Gölgelendirme çalışma alanında yapılan bir **malzeme** dosyaya aittir. Dokuları, resimleri ve sayıları üreten **düğümlerden** oluşan küçük bir grafiktir; bunlar **Malzeme çıkışı** düğümüne bağlanır. Bu düğümün girdileri yüzeyin görünümüdür: temel renk, pürüzlülük, metaliklik, normal, opaklık, emisyon ve OpenPBR modelinin geri kalanı. Onunla herhangi bir kütüphane malzemesi gibi yüzeyleri boyarsınız ve her değişiklik görünümde hemen görünür.

## Açın

Çalışma alanı listesinden {{ui:Gölgelendirme}} seçin. 3B görünüm ekranın üst kısmını korur ve **düğüm düzenleyici** alt kısmı alır. Sağdaki panel dosyanın kendi malzemelerini listeler.

- {{ui:Yeni malzeme}} yalnızca Malzeme çıkışı olan gri bir malzeme yapar.
- **Bir kütüphane malzemesinin düzenlenebilir bir kopyasını yapın**: tuğla, ahşap, karo ve diğerlerini değiştirebileceğiniz bir grafiğe dönüştürür. Dokusu bir Kütüphane dokusu düğümünden, kabartmaları bir Kabartma düğümünden gelir.
- {{ui:Onunla boya}} seçili yüzeyleri ya da grupları boyar, ya da Boya aracı için malzemeyi seçer. Boya aracının malzemeleri de dosyanın kendi malzemelerini **Bu dosyada** altında listeler.
- {{ui:Çoğalt}} ve {{ui:Sil}}, düzenlediğiniz malzeme üzerinde çalışır. Silme geri alınamaz: onunla boyanmış yüzeyler, yeniden boyayana kadar varsayılan rengi gösterir.

## Kütüphaneden malzemeler

Panelin **Malzeme kütüphanesi (Library)** bölümü kütüphanenin malzemelerini listeler; her birinin önizlemesi CadCraft'ın yol izleyicisi ile işlenmiştir. Bunlar CC0 altında yayımlanmış doku kümeleridir ve yapanlara atfedilmiştir.

- Birine tıklayarak dosyaya getirin (resimleri de birlikte gelir) ve yüzeyler ya da gruplar seçiliyken onları boyayın.
- Birini görünümde bir yüzeye ya da bir gruba sürükleyerek yalnızca onu boyayın.
- Dosyanın malzemelerinden biri olur: düğümlerini diğer malzemeler gibi değiştirin. Atfı panelde görünür ve dosyada kalır.

## Bir doku kümesi içe aktarın

**Bir doku kümesi içe aktar** altındaki {{ui:Resimler veya bir zip…}} ya da {{ui:Bir klasör…}}, bir harita kümesinden malzeme yapar. Haritalar dosya adlarındaki sözcüklere göre bulunur: color, albedo, diffuse ya da basecolor; roughness (ya da gloss, pürüzlülüğe çevrilmiş); metalness ya da metallic; normal (OpenGL ya da DirectX, adındaki `gl` / `dx` ile); height ya da displacement; ambient occlusion; opacity; emission. Paketlenmiş haritalar (ARM, ORM) dışarıda bırakılır. Karo 1 × 1 m ile başlar: gerçek boyutunu Malzeme çıkışında ayarlayın. Yükseklik, ölçeği 0 olan yer değiştirmeye gider; ağlarda kullanmak için ölçeği artırın.

## MaterialX

MaterialX, diğer 3B ve işleme programlarının malzemeleri aktarmak için kullandığı açık biçimdir.

- {{ui:MaterialX olarak dışa aktar…}} düzenlediğiniz malzemeyi kaydeder: değerlerini ve her dokuyu `.mtlx` dosyasının yanında PNG resim olarak (bir zip içinde). Yazıldığı gölgelendiriciyi seçin: **OpenPBR Surface** (MaterialX 1.39, ModelCraft'ın kullandığı model) ya da **Standard Surface** (MaterialX 1.38, bugün daha çok program tarafından okunan). Dokular, metre cinsinden UV koordinatlarıyla yerleştirilir; kutu ve üç düzlemli yerleşim UV olarak yazılır.
- {{ui:MaterialX içe aktar…}} (ya da {{ui:Bir klasörden…}}) OpenPBR, Standard Surface, UsdPreviewSurface ya da glTF PBR gölgelendiricili `.mtlx` dosyalarını okur. Resimleri de verin, ya da her şeyin zip'ini: bir resim, yoluyla, adıyla ya da adının başka bir resim türüyle olan haliyle bulunur (dosya adlarındaki bir `.exr`, yanındaki bir `.jpg` olarak gelebilir). Dokular, normal haritalar, aritmetik, karışımlar ve yer değiştirme düğüm olarak gelir; diğer her şey değerini korur ve durum satırı neyin dışarıda bırakıldığını söyler.

## Çıkartmalar

Çıkartma, kendi malzemesi olan, bir yüzeye serilmiş bir resimdir: bir logo, bir tabela, bir etiket ya da bir leke.

- **Yeni çıkartmanın genişliğini** ayarlayın, sonra {{ui:Çıkartma yerleştir…}} (ya da araç çubuğundaki {{ui:Çıkartma}}) ile bir PNG, JPEG ya da WebP resmi seçin ve bir yüzeye tıklayın. Resim oranlarını koruyarak oradaki yüzeylere yansıtılır; bir PNG'nin saydam kısımları şeffaf kalır.
- Tıkladığınız grubun ya da bileşenin içine aittir ve onunla birlikte hareket eder. Kutusunun içindeki, aynı yöne bakan yüzeylerin üstünü örter ve üzerinde durduğu şeyin kenarlarında durur.
- Her çıkartmanın, dosyanın listesinde **Çıkartma: <resim>** adında kendi malzemesi vardır: diğer malzemeler gibi düzenleyin (pürüzlülük, bir kabartma, bir parlama). Çıkartmanın yanındaki {{ui:Malzeme}} onu açar.
- Her çıkartmanın yanında genişliği (yükseklik resmi izler), {{ui:Döndür}} (çeyrek dönüş) ve {{ui:Sil}} bulunur. Çıkartmalar dosyanın malzemeleriyle birlikte saklanır ve geri alma kapsamı dışındadır.
- Gölgeli görünümde, hızlı render'larda ve yüksek kaliteli resimlerde görünürler.

## Dokunun üzerine boyayın

{{ui:Doku boya}} (ya da **Dokunun üzerine boyayın** altındaki {{ui:Boya}}) işaretçiyi yuvarlak bir fırçaya çevirir. Bu dosyanın malzemelerinden birini taşıyan bir yüzeyde sürükleyin: fırça temel renginin arkasındaki resmi boyar.

- Bir ağ üzerinde, ağın UV'leri boyunca boyar (önce UV çalışma alanında açın). Diğer yüzeylerde yüzey boyunca boyar; böylece boya, malzemenin karosuyla tekrarlanır.
- Temel rengi düz bir renk olan bir malzeme, ilk boyandığında o rengin yeni 512 × 512 bir resmini alır. Temel rengi başka düğümlerden gelen bir malzeme ise temel renge bağlı bir Resim düğümüne ihtiyaç duyar.
- Fırça rengini, boyutunu (resim pikselleri cinsinden), gücünü ve sertliğini panelde ayarlayın. {{ui:Fırça darbesini geri al}} ya da Ctrl+Z (boyarken) bir darbeyi geri alır; son 20 darbeye kadar.
- Boyanmış resim dosyada saklanır. Kütüphane malzemeleri boyanamaz: önce düzenlenebilir bir kopya yapın.

## Dokuları pişirin

**Dokuları pişirin**, şekil ve sahnenin bir yüzeye verdiklerini bir ağın UV'leri boyunca resimlere yazar.

- UV'leri olan bir ağ seçin (UV çalışma alanında açın), haritaları işaretleyin ve {{ui:Bake et}} düğmesine basın:
  - **Ortam tıkanıklığı** — her noktanın ne kadar açık olduğu: köşeler, kıvrımlar ve başka şeylerin altındaki yerler daha koyu olur. Modelde gösterilen her şey, tıkanıklık mesafesine kadar onu gölgelendirir.
  - **Eğrilik** — dış kenarlar boyunca parlak, iç köşelerde koyu, düz ve hafif eğri parçalarda orta gri; ayarladığınız kenar genişliği boyunca.
  - **Yüksek ayrıntılı nesneden normaller** — ayrıntılı bir kopya da seçin: yüzey ayrıntısı, daha basit olan için bir normal harita olarak yazılır (daha az üçgenli nesne üzerine pişirilir). Arama mesafesi, iki yüzeyin ne kadar uzakta olabileceğidir.
  - **Aydınlatma** — modelin konumunun ve tarihinin güneşi (Stil) gölgeleriyle birlikte, ve gökyüzü; bir ışık haritası olarak.
- Resimler dosyaya katılır ve Resim düğümlerinde görünür. Düzenlediğiniz malzemede bir **Kir ve kenar aşınması** düğümü varsa, yeni tıkanıklığı ve eğriliği hemen okur.
- Texel başına daha fazla ışın daha pürüzsüz tıkanıklık ve aydınlatma üretir ve daha uzun sürer. Pişirme, bilgisayarın işlemci çekirdeklerinde arka planda çalışır; {{ui:Bake etmeyi durdur}} onu durdurur.

## Bir grafik kurun

1. {{ui:Düğüm ekle…}} (ya da düğüm düzenleyicide {{key:Shift+A}}) düzenleyicinin ortasına bir düğüm ekler.
2. Bir çıkış noktasından (bir düğümün sağındaki) bir giriş noktasına (bir düğümün solundaki) sürükleyerek bağlayın. Bir girişe ikinci bir bağlantı ilkinin yerini alır; bağlı bir girişi ayırmak için onu sürükleyip uzaklaştırın.
3. Bağlı olmayan girdiler değerlerini gösterir: bir sayı yazın ya da bir renk seçin. Ayarlar her düğümün altında bulunur.

Bir düğümü başlığından sürükleyerek taşıyın, boş alanı sürükleyerek kaydırın ve yakınlaştırmak için tekerleği kullanın. {{key:Delete}} seçili düğümleri ya da bağlantıyı siler, {{key:Mod+Z}} geri alır, {{key:Mod+D}} çoğaltır, {{key:F}} her düğümü gösterir. Her değişiklik, düğüm düzenleyicisinde tek bir geri alma adımıdır. Modelin kendi geri alması malzemeleri değiştirmez.

| Düğümler | Ne üretir |
|---|---|
| Doku koordinatları | Karonun neresinde bir nokta olduğu: tekrarla, kaydır, çeyrek çevir. |
| Değer, Renk | Bir sayı, bir renk. |
| Resim | Dosyanın bir resmi (içe aktarılan bir modelle gelen ya da {{ui:Resim ekle…}} ile eklediğiniz). Bir fotoğraf için **Renkler**, bir pürüzlülük ya da normal harita için **Veri** seçin. |
| Kütüphane dokusu | Bir kütüphane malzemesinin dokusu, pürüzlülüğü ve yüksekliği. |
| Dama, Gürültü | Kareler; ayrıntısı, pürüzlülüğü ve tohumuyla düzgün fraktal gürültü. |
| Voronoi hücreleri, Dalgalar, Gradyan | Hücreler (en yakın noktaya uzaklık, hücreler arasındaki kenarlar, hücre başına bir renk); gürültüyle bükülmüş, enine, yukarı ya da çapraz sinüs, testere ya da üçgen olarak bantlar; doğrusal, ikinci dereceden, radyal ve küresel gradyanlar. |
| Tuğlalar, Karolar | Kaydırmalı ofsetli tuğla sıraları ya da bir karo ızgarası: renkler, harç ya da derz, metre cinsinden bir boşluk ve pah, kabartmalar için bir yükseklik, parça başına rastgele bir sayı. |
| Ahşap, Mermer | İnce liflerle, damar boyunca halkalar; türbülansla bükülmüş damarlar. |
| Kir ve kenar aşınması | Bir ağın eğriliğinden ve tıkanıklık resimlerinden dış kenarları aşındırır ve oyukları kirletir ([Dokuları pişirin](topic:shading#bake-textures) bunları üretir; ya da ağın UV düzeninde iki resim ayarını yapın: malzemeyi UV koordinatlarıyla yerleştirin). Bunlar olmadan hiçbir şeyi değiştirmez. |
| Renkleri karıştır, Renk rampası, Ton/doygunluk/değer, Parlaklık ve kontrast, Ters çevir, Gama, RGB ayır ve birleştir | Renk işleri. |
| Matematik, Değer aralığı | Sayılar üzerinde aritmetik (toplama, çarpma, kuvvet, yumuşak adım ve daha fazlası). |
| Kabartma, Normal harita | Bir yükseklikten (Kabartma) ya da bir normal harita resminden (Normal harita: yeşil kanalın yönünü seçin) bir normal. |

## Malzeme çıkışı

Ayarları, dokunun yüzeylere nasıl yerleştiğini söyler:

- **Karo genişliği** ve **Karo yüksekliği**: bir dokunun bir karosunun kaç metre kapladığı. Bir grafiğin ürettiği her şey, karo boyunca dikiş olmadan tekrarlanır.
- **Yerleştirme**: **UV koordinatları** yüzeyleri izler (itme/çekme yüzeyleri: her yüzey boyunca; ağlar: UV'leri, bir UV birimi = bir karo). **Kutu**, en yakın üç eksenden projeksiyon yapar. **Üç düzlemli**, eğik yüzeylerde üç projeksiyonu karıştırır (**Karışım keskinliği**: yüksek değer daha sert bir karışım demektir).
- **Normal gücü** normal girdiyi ölçekler. **Yer değiştirme ölçeği**, yer değiştirme girdisinin bir ağın köşe noktalarını ne kadar hareket ettirdiğini ayarlar.
- {{ui:Daha fazla giriş}} OpenPBR girdilerinin geri kalanını gösterir: kaplama, tüylülük, alt yüzey, ince film, geçirgenlik ve bunların renkleri.

## Yüksek kaliteli resimlerde

Yol izleyici, grafikten temel rengi, pürüzlülüğü, metaliği, opaklığı, normali ve emisyonu, yüzey boyunca değiştikçe okur. Bağladığınız diğer her girdi (örneğin değişen bir kaplama) ortalama değerinde kullanılır; panel hangisi olduğunu söyler. Bir opaklık dokusundan kesilmiş bir parça şeklini gösterir ve gölgesi eşit derecede geçirgendir. Parlayan bir doku, bir lamba olarak örneklenmeden, karşısındaki yüzeyi aydınlatır.

**Yer değiştirme** yalnızca ağların köşe noktalarını hareket ettirir; bu yüzden ayrıntı için bir Alt bölümleme değiştiricisi ekleyin ([Değiştiriciler](topic:modifiers)). İtme/çekme yüzeyleri şekillerini korur ve kabartmaları normalden alır.

:::tip
WebGPU'lu bir bilgisayarda grafik, ekran kartında hesaplanır; onsuz, işlemcide hesaplanır. Sonuç aynıdır.
:::
