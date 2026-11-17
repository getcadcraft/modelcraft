---
title: Henüz yapılmadı
summary: Bu ModelCraft sürümünün henüz yapmadığı şeyler ve bugün bunun yerine ne yapılacağı.
keywords: eksik, henüz değil, sınırlamalar, yol haritası, malzemeler, dokular, metin, katmanlar, kırp, böl, bulut, masaüstü
from: 179fa5e4
---

ModelCraft erken bir sürümdür. Bu sayfa henüz yapmadıklarını listeler, böylece onları boşuna aramazsınız, ve işi bugün yapmanın en yakın yolunu verir.

## Çizim araçları

| Henüz değil | Bunun yerine, bugün |
|---|---|
| Serbest el çizimi | {{ui:Eğri}} ile noktaları tıklayın |
| Bir yayın ya da dairenin parça sayısını çizdikten sonra değiştirmek | Silin ve `24s` yazdıktan sonra yeniden çizin |
| [3B metin](topic:text3d) için bir yazı tipi seçmek ya da yerleştirdikten sonra sözcüklerini düzenlemek | Silin ve metni yeniden ekleyin |
| Bir ölçülendirmeye sayı yazarak bir açıyı değiştirmek ya da bir silindirin boyutunu daire ölçülendirmesinden değiştirmek | Kenarları {{ui:Döndür}} ile döndürün; silindiri {{ui:Ölçekle}} ile ölçekleyin |
| Dışa aktarılan model dosyalarındaki ölçülendirmeler | Ölçülendirmeler, görünümün görüntülerinde, çıktılarında ve PDF'lerinde görünür; model dosyaları yalnızca geometri taşır |
| {{ui:Kırp}}, {{ui:Böl}} ve dış kabuk | [Birleşim, Çıkar ve Kesiştir](topic:solids) ile kapalı gruplar, ya da [yüzeyleri kesiştirin](topic:intersect) ve gereksiz olanı silin |
| Ok tuşlarıyla dönme ekseni seçmek | Eksenin bakması gereken yöne bakan bir yüzeyde {{ui:Döndür}} merkezini tıklayın |
| Aynı anda birden fazla yakalama yönünde kilitlemek | Ok tuşuyla bir yönü kilitleyin, sonra bir noktaya yakalayın |
| Eğik bir yönde ya da köşede olmayan bir ölçülendirme ucundan boyutlandırmak | Ölçülendirmeyi iki köşeye, bir kenar boyunca ya da kırmızı, yeşil ya da mavi boyunca yerleştirin |

## Animasyon

| Henüz değil | Bunun yerine, bugün |
|---|---|
| Yüzleri, kenarları, güneşin günün saatini, stili ya da gizlenenleri canlandırmak | Hareket eden parçayı grup ya da bileşen yapın; başka bir gün saati için ayrı bir video render edin |
| Çizilen bir yolu izleyen ya da hareket eden bir nesneye bakan kamera | Yol boyunca daha fazla kamera anahtarı ayarlayın ([Canlandır](topic:animation)) |
| Videolarda ses ve WebGPU olmadan yüksek kaliteli (yol izlemeli) videolar | Videoya bir video düzenleyicide ses ekleyin; WebGPU yoksa videoyu hızlı render motoruyla render edin ([Videoyu render edin](topic:animation#render-the-video)) |
| Render edilmiş bir videoda canlandırılmış lambalar (parlaklık, yayılım, renk), kamera anahtarı olmadan videoda canlandırılmış bir lens açısı, malzemeleri ya da render ayarlarını canlandırmak | Lambalar görünümde canlanır; bir video için yakınlaştırmada kamerayı da anahtarlayın; farklı lamba ayarları için ayrı videolar render edin ([Herhangi bir özelliği canlandırın](topic:animate)) |
| Bir taraftan diğerine iskelet ağırlıklarını ya da kemikleri aynalamak, görülebilen kemik zarfları, ağırlıkları noktadan noktaya gölgeli göstermek (yüze göre gösterir), ağırlık boyarken poz verilmiş örgüyü görmek | Her iki tarafı boyayın ya da bir yarısını yapıp iskelet eklenmeden önce bir Ayna değiştiricisi kullanın; kontrol etmek için Ağırlıkları boya ve Poz arasında geçiş yapın |
| glTF, FBX ya da USD dosyalarından iskelet olarak okunan kemikler ve bu dosyalara yazılan iskeletler | Kaplamalı modeller dosyanın ağırlıklarıyla dinlenme hâlinde gelir; kemikleri dosyanın eklem sırasına göre ekleyin, sonra {{ui:Dosyanın ağırlıklarını kullan}} ([Canlandır](topic:animate)) |
| Bir IK hedefini ya da kutbunu görünümde sürükleyerek taşımak, bir kısıtlamanın kendi uzayını (yerel ya da dünya) seçmek, IK zincirlerini gerdirmek, bir eğri boyunca IK | Hedefin noktasını yazın ya da bir nesneyi hedefleyip o nesneyi taşıyın; zincirleri uzunluklarında tutun |
| Kumaş, sıvılar, yumuşak gövdeler, katı cisimler arasında eklemler ve menteşeler, bir nesnenin tam şekliyle çarpışma (çevresinde yalnızca kutular ve toplar), oynatırken canlı bir simülasyon, başlangıç hızı ya da dönüşü (cisimler dinlenmeden başlar) | Katı cisimleri pişirin ve anahtarları oynatın; anahtarlardan bir menteşe yapın; tuhaf bir şekli kutulara (gruplara) bölün |
| Animasyonu glTF ya da diğer model dosyalarına dışa aktarmak | Bir video render edin; ModelCraft'ın kaydettiği `.modelcraft` dosyası ve [USD dosyası](topic:usd) ModelCraft için kalır |
| VR'da bir sorunda yorum ya da başlık yazmak, sesli notlar, VR'da bir kesit düzlemini elle taşımak | Sorunu VR'da yerleştirin, sonra sözcüklerini bir BCF programına ekleyin; VR'a girmeden önce görünümde bir kesit düzlemi ayarlayın: bkz. [Modeli bir VR kulaklığıyla gözden geçirin](topic:vr-review) |
| VR'da masadaki insanları görmek (yalnızca VR'daki insanlar görünür), bir VR yürüyüşünü kaydetmek | Onlardan VR'a katılmalarını isteyin ya da yürüyüşün bir [animasyonunu](topic:animation) yapın |

## Örgüler

| Henüz değil | Bunun yerine, bugün |
|---|---|
| Seviyelere göre heykel yapmak (çoklu çözünürlük) ve küçük hâle gelen üçgenleri ayrıntı ile kaldırmak | Bölünmüş bir örgüyü [heykelleştirin](topic:sculpt); eşitlemek için yeniden {{ui:Yeniden örgüle}} |
| Şekli izleyen dört kenarlı yüzlere yeniden örgüleme | {{ui:Yeniden örgüle}} (eşit üçgenler), sonra [yeniden topoloji](topic:mesh-edit#retopology) ile yeniden oluşturun |
| Değiştiriciler için köşe noktalarına boyanmış ağırlıklar (Displace, Smooth ve Shrinkwrap tüm örgüde çalışır) | Değiştiriciyi uygulayın, sonra ihtiyaç duyan parçaları heykelleştirin ya da düzenleyin |
| Köşe noktalarının, kenarların ya da yüzlerin kopyalanması ve yapıştırılması, bir yüzün içinde biten bir bıçak kesimi, yüzü olmayan tel kenarlar | Model sekmesinde örgüyü çoğaltın; kenardan kenara bıçakla; açık kenarları [ekstrüde edin](topic:mesh-edit#change-the-shape) |

## Düzenleme ve görüntüleme

| Henüz değil | Bunun yerine, bugün |
|---|---|
| DWG ve DXF saha planlarının katmanları etiket olarak | Saha planı tek bir grup olarak gelir: onu patlatın ve etiketlemek istediğiniz parçaları gruplayın |
| Aynı anda birkaç kesit kesimi, bir kesit kutusu ya da bir kesitin ana hattını çizim olarak dışa aktarmak | Bir seferde bir [kesit düzlemi](topic:sections) keser; görünümü bir resim olarak dışa aktarın |
| Kesikli yumuşak kenarlar ya da bir kaydırıcıyı sürüklerken yumuşatmak | Özellik bilgisinde [açıya göre yumuşatın](topic:soften), başka bir açıyı denemek için geri alın |
| Aranacak çevrimiçi model kütüphanesi ya da seçilecek seçenekleri (renk, stil) olan bileşenler | [Başlangıç kütüphanesi](topic:starter); Collada, OBJ ya da glTF modelleri içe aktarın; bir kopyayı boyutuna [gerdirin](topic:stretch) |
| Bitki kütüphanesinden bitki yerleştirmek | Canlı görünümde bitkileri [dağıtın](topic:live-view#scatter-plants-rocks-and-people) ya da başlangıç kütüphanesinden bir ağaç yerleştirin |
| Bir grubun bağımsız kopyaları | Bileşen yapın, sonra {{ui:Tekil yap}} (bkz. [Sorun giderme](topic:troubleshooting#editing-one-group-changed-another)) |

## Render

| Henüz değil | Bunun yerine, bugün |
|---|---|
| Görünümde render ({{ui:Render}} çalışma alanı), render kuyruğu ve WebGPU olmadan kamera, gökyüzü resmi, sis ve ışık karıştırma seçenekleri | {{ui:Bir resmi render edin…}} ile **Yüksek kalite** kullanılır; orada WebGL yol izleyici kullanılır, bu seçenekler olmadan ([Bir resmi render edin](topic:render#high-quality)) |
| Bir render eklentisi olmadan başka bir programın Render resmini çizmesi (CadCraft, GNU GPL lisansı altında hiçbir programı asla çalıştırmaz); başka bir programla panoramik ya da stereo kameralar ve bir gökyüzü resmi; Unreal Engine eklentisi (dosyalar yazılır, onları açan eklenti yayımlanmaz) | Kendi Hızlı ve Yol izleyici motorlarımız; bir eklentinin motoru ([resmi başka bir programla çizin](topic:render-other-program)); Motor listesinden herhangi bir programa götürmek için bir USD, glTF ya da Unreal klasör dosyası |
| {{ui:Bir resmi render edin…}} içinde saçılmış bitkiler ve kayalar | [Canlı görünümde](topic:live-view) görünürler; panoramalarında, izleyicide ve videoda |

## Malzemeler ve renkler

| Henüz değil | Bunun yerine, bugün |
|---|---|
| Yüksek kalitedeki resimlerde taban rengi, pürüzlülük, metalliklik, opaklık, normal ve yayılım dışındaki girdilerin bir yüzey boyunca değişmesi (ortalamalarını kullanırlar) | [Düğümlerle malzeme yapın](topic:shading): yine de bağlayın, görünüm değiştiklerini gösterir |
| İt/çek yüzlerinde yer değiştirme | Nesneyi yer değiştirme için bir örgüye dönüştürün |
| Kendi malzemelerinizi uygulamadan Kütüphaneye paylaşmak ve içe aktarılan bir doku kümesindeki paketlenmiş (ARM/ORM) ya da EXR haritaları | Dosyada tutun; ayrı haritaları PNG ya da JPEG olarak içe aktarın |
| Canlı TeamWork oturumlarındaki dosya malzemeleri (onları oluşturan bilgisayarda kalırlar) | Dosyayı kaydedin ve paylaşın |
| Eğri yüzeylerde eğilen çıkartmalar, Geri al içindeki çıkartmalar ya da bir dikişte birden fazla yüzün dokularını aynı anda boyamak | Daha küçük çıkartmaları her parçaya yerleştirin; dikişin her iki tarafını ayrı ayrı boyayın |
| İt/çek yüzlerine pişirme, bir resimde birden fazla nesneyi pişirme, elle şekillendirdiğiniz bir kafes ya da lambalardan pişmiş aydınlatma | Bir örgüye dönüştürüp açın; her nesneyi pişirin; arama mesafesini artırın; lamba ışığı için bir resim render edin |
| Resimde boyama: pürüzlülük, metalliklik ya da yükseklik, resimlerle boyama (damgalar) ve 512 × 512'den büyük doku boyama | Taban rengini burada boyayın; diğer haritaları bir resim düzenleyicide yapın ve doku kümesi olarak içe aktarın |
| Collada, STL, PLY, 3MF, IFC, DWG ve DXF dışa aktarımlarında dokular ve dışa aktarılan modellerde dosyanın kendi malzemelerinin düğüm grafikleri | Bu biçimler her malzemenin rengini alır; glTF ve OBJ içe aktarılan dokuları taşır; bir malzemeyi tek başına [MaterialX](topic:shading#materialx) olarak dışa aktarın; [USD](topic:usd) bütün modeli ModelCraft için tutar |
| Collada dosyalarındaki dokular | İçe aktarımda sayılır ve dışarıda bırakılır; `.skp` ve `.glb` dosyalarındaki dokular gelir |

## Dosyalar

| Henüz değil | Bunun yerine, bugün |
|---|---|
| SketchUp dosyalarını kaydetmek ve onlardan metin ve ölçülendirmeler | [İçe aktarma](topic:import-sketchup-files) yüzleri, renkleri ve dokuları tutar; SketchUp'a geri dönmek için Collada (`.dae`) dışa aktarın |
| DWG ve DXF dışa aktarımlarında ölçülendirmeler ve kılavuzlar | Dışa aktardıktan sonra CAD programında ekleyin |
| DWG ve DXF'ten noktalar, tablolar ve çoklu belirtme çizgileri | Sayılır ve dışarıda bırakılır; metin, çizimin yazı tipi değil, tek çizgili yazı olarak gelir |
| DWG ve DXF'ten yüzeyler, örgüler, tablolar ve çoklu belirtme çizgileri; süpürülmüş, loft edilmiş ya da başka serbest biçimli yüzeylerdeki 3B katıların yüzleri | Bunlar da sayılır ve dışarıda bırakılır (3B katılar kendileri gelir). Bu parçaları CAD programından OBJ ya da Collada olarak dışa aktarıp onu içe aktarın |
| IFC tipleri, özellikleri ya da malzemeleri | IFC dışa aktarımı [katları](topic:formats#ifc-ifc) ve genel öğeleri içerir; kalanı bir BIM programında ekleyin |
| Bir modeli doğrudan BimCraft'a göndermek | {{ui:BimCraft için IFC (.ifc)}} dışa aktarın ve BimCraft'ta açın |
| glTF ve STL'de serbest kenarlar | Çizgi çalışması için OBJ ya da Collada kullanın |
| Taban renginin ötesindeki glTF ve FBX malzemeleri (metal, pürüzlülük, normal haritalar, cam, kaplama parlaklığı, parlaklık…) | Okunur ve listelenirler; ModelCraft taban rengini ya da dokuyu tutar. Görünümü [Gölgelendirme çalışma alanında](topic:shading) yeniden kurun |
| glTF kemikleri, animasyonları ve morf hedefleri | Kaplamalı modeller dinlenirken durur olarak gelir; [zaman çizelgesinde](topic:animation) canlandırın |
| STEP dosyalarından renkler ve montajın parça adları | Parçalar gerçek boyutlarında örgüler olarak gelir; içe aktardıktan sonra [boyayın](topic:paint) ve adlandırın |
| `.3dm` dosyalarından SubD nesneleri, metin, ölçülendirmeler ve ışıklar | [Neyin dışarıda bırakıldığına](topic:import-3dm-files#what-is-left-out-and-said) bakın; SubD'yi dosyayı yapan programda örgülere çevirin |
| glTF'te KTX2 dokuları ve malzeme varyantları | PNG ya da JPEG dokularıyla dışa aktarın; varsayılan varyant kullanılır |
| glTF örnekleme yazmak (EXT_mesh_gpu_instancing) | Bileşenler bir kez yazılır ve birçok kez yerleştirilir; her görüntüleyici bunu okur |
| Alembic animasyonu (bir önbelleğin her örneği), Alembic noktaları ve eğrileri, Alembic yazmak | İlk örnek gelir; [zaman çizelgesinde](topic:animation) canlandırın; glTF, USD ya da OBJ yazın |
| OBJ malzemelerinde kabartma ve normal haritalar | Yalnızca renk resmi (`map_Kd`) gelir |
| FBX kemikleri ve animasyonu, FBX dışa aktarımı, FBX 6 dosyaları | Kaplamalı modeller dinlenme hâlinde gelir; glTF dışa aktarın; eski dosyaları FBX 2011 ya da daha yeni olarak kaydedin |
| Collada kaplamaları, morfları, kameraları, ışıkları, bakma ve eğim dönüşümleri, dış referanslar | İçe aktarmada dışarıda bırakılır ve ileti içinde sayılır |
| Yedek dosyalar | {{ui:Farklı kaydet}} ({{key:Mod+Shift+S}}) başka bir kopya kaydeder. Çökmeden sonra ModelCraft kaydedilmemiş çalışmanızı size geri sunar ("Çalışmanız kurtarılsın mı?") |
| Bilgisayarlar arası bulut kaydı ve eşitleme | Henüz kullanılamıyor. Dosyaları bilgisayarınıza kaydedin ve ihtiyacınız olan yere kopyalayın |

## 3B baskı

| Henüz değil | Bunun yerine, bugün |
|---|---|
| Gerçek dilimleyici destekleri (arayüzler, raft, tam destek deseni) | [Destek önizlemesi](topic:print-tools#supports-preview) nerede ve yaklaşık ne kadar olduğunu gösterir; gerçeklerini dilimleyicinizin önizlemesi gösterir |
| Kendi içinden geçen bir parçayı çözmek ya da üç ve daha fazla yüzün buluştuğu kenarlar | [Onar](topic:print-tools#repair) bunları nerede olduklarıyla listeler; [yüzeyleri kesiştirin](topic:intersect) ve içindekini silin |
| Dolgu desenleri ve içi boşken bir kafes | [İçini boşalt](topic:print-tools#hollow) boş bırakır; dilimleyiciniz katı bir parçaya dolgu ekler |
| Yazıcınızın nozulu için çok küçük ayrıntılar (duvarlar dışında) | [Duvar kalınlığı](topic:print-tools#wall-thickness) ince duvarları bulur; dilimleyicinizin katman önizlemesi geri kalanı gösterir |

## Performans

Geri alma her adım için modelin bir kopyasını tutar ([örgü](topic:meshes) yalnızca değişeni tutar), bu yüzden it/çek geometrisinin çok büyük içe aktarımları her düzenlemeyi yavaşlatır. İçe aktarımları hafif tutun; geçmişi temizlemek için kaydedip yeniden açın.

## Uygulamalar ve platformlar

- **Masaüstü:** ModelCraft, Mac, Windows ve Linux'ta tarayıcıda çalışır ve tek bir kurulumda sekiz uygulamanın tümünü içeren CadCraft Studio masaüstü uygulamasında çalışır. Android'de CadCraft Studio, getcadcraft.com/download adresindeki APK'sından kurulur. Henüz iPad ya da iPhone sürümü yok.
- **Dokunma:** parmak hareketleri için [Yörünge, kaydırma ve yakınlaştırma](topic:orbit-pan-zoom) bölümüne bakın. Bir kalemin basıncı [Heykelleştir](topic:sculpt) içindeki fırçayı ayarlar; diğer yerlerde basınç ve kalem eğimi kullanılmaz.
- **Sayfalar:** ModelCraft [sayfa başına bir görünüm yazdırır](topic:export-model#print-the-view-or-save-it-as-a-pdf); birkaç görünümlü sayfa düzenleri ya da bir künye yoktur. Ölçekli çizimler için CadCraft ile uyumlu DWG/DXF olarak dışa aktarın.
