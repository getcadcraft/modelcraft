---
title: 0.7'deki yenilikler (daha önce)
summary: Modifikatörlü örgüler, heykel, UV'ler ve eğri nesneleri, grafik kartında yol izleme ve bir Render çalışma alanı, dağılım ve panoramalarla gerçek zamanlı canlı görünüm, düğüm malzemeleri, kemikler ve fizikli bir Animasyon çalışma alanı, USD, FBX, STEP ve .3dm dosyaları ile Başlangıç stilli baskı araçları.
keywords: 0.7'de yenilikler, önceki sürüm, sürüm notları, değişiklik günlüğü, değişiklikler, 0.7, sürüm, yeni özellikler, örgü, örgüler, örgü çalışma alanı, değiştiriciler, alt bölme, keskin çizgi, uv, açma, dikişler, eğriler, eğri nesneleri, nurbs, bezier, heykel, yeniden örgüleme, yeniden topoloji, bölme, hesaplama, yol izleme, webgpu, render çalışma alanı, render kuyruğu, mp4, exr, gürültü giderme, fiziksel gökyüzü, hdri, ies, alan derinliği, ışık karıştırma, sis, kostik, canlı görünüm, gerçek zamanlı, yürü, dağılım, panorama, tur, görüntüleyici, gölgelendirme, düğümler, düğüm malzemeleri, malzeme kütüphanesi, materialx, çıkartmalar, doku boyama, pişirme, animasyon, grafik editörü, klipler, şekil anahtarları, sürücüler, iskelet, kemik, kaplama, fizik, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, 3B katılar, destekler, duvar kalınlığı, içini boşalt, onar, başlangıç, asistanlar, makineniz, birimler, portekizce
from: fa562a09
---

Bu, ModelCraft 0.6'ya göre 0.7 sürümünde neyin değiştiğidir. ModelCraft artık push/pull geometrisinin yanında örgüleri de modelliyor, render işini grafik kartında yapıyor ve her iş türü için bir çalışma alanına sahip: bunu araç çubuğunun solundaki {{ui:Çalışma alanı}} listesinden seçin.

## Yeni

### Örgüler

- **Örgüler.** Bir grup veya bileşen seçin ve {{ui:Öğe bilgisi}} içinde {{ui:Örgüye dönüştür}} öğesine tıklayın: herhangi bir sayıda köşesi olan yüzlere sahip, doku koordinatları, normaller, renkler ve ağırlıklar taşıyabilen bir örgüye dönüşür. {{ui:Geometriye dönüştür}} onu geri çevirir. Bir örgüde geri al, yalnızca her adımın değiştirdiğini tutar. Örgü içeren bir dosyayı açmak için ModelCraft 0.7 gerekir. Bkz. [Örgüler](topic:meshes).
- **Örgü çalışma alanı.** Bir örgüye çift tıklayın ya da {{ui:Çalışma alanı}} listesinden {{ui:Örgü (mesh)}} seçin; köşelerini, kenarlarını ve yüzlerini düzenleyin: döngüler ve halkalar, orantılı düzenleme, ekstrüzyon, içe itme, pah, döngü kesimi, bıçak, ikiye bölme, döndürme, birleştirme, eritme, doldurma, ızgara doldurma, köprü ve kaydırma; son işlemin ayarları sonradan panelden değiştirilebilir. Bir düzlem, küp, küre, simit ve daha fazlasından başlayın. İt/çek tuşları ve modelleme tuşları ikisi de çalışır. Bkz. [Örgü çalışma alanında bir örgüyü düzenleyin](topic:mesh-edit).
- **Değiştiriciler.** Ayna, dizi, alt bölme yüzeyi, pah, katılaştırma, boole, yerinden oynatma, kaynak, azaltma, düzleştirme, kafes, eğri deformasyonu ve sarma küçültme, bir örgünün gösterdiğini değiştirir ama onu değiştirmez. Bunları yığınlayın, her birini görünüm ve render için açıp kapatın, kalıcı olmasını istediğinizde bir tanesini {{ui:Uygula}} ile uygulayın. Bkz. [Bir örgüdeki değiştiriciler](topic:modifiers).
- **Keskin çizgili alt bölme.** Örgü çalışma alanındaki {{ui:Keskin çizgi}}, seçilen kenarları alt bölme yüzeyinin altında keskin tutar. Render'lar görünümden daha fazla seviye kullanabilir; büyük bir örgüde görünüm daha düşük bir seviye gösterir ve bunu söyler. Bkz. [Alt bölme yüzeyi](topic:modifiers#subdivision-surface).
- **Eğri nesneleri.** Bezier, NURBS ve düz parçalı eğriler bir boru, bir bant, bir daralma veya dolu bir levha yapar; metin de eğri olarak. Noktalarını {{ui:Eğri}} çalışma alanında düzenleyin; şekil doğru olduğunda {{ui:Örgüye}} seçin. Bkz. [Eğri nesneleri](topic:curves).
- **UV çalışma alanı.** Dikişleri işaretleyin (ya da ModelCraft'ın keskin kenarlarda işaretlemesine izin verin), {{ui:Aç}} ve {{ui:Paketle}} seçin ya da kutu, silindir, küre veya görünümle yansıtın. 3B görünümün yanındaki bir UV düzenleyicisi parçaları taşır, döndürür ve ölçekler; bir damalı desen ve gerilme renkleri sonucu gösterir. Bkz. [Bir örgünün UV'lerini düzenleme](topic:uv).
- **Heykel.** {{ui:Heykel}} çalışma alanında çizim, kil, yumuşatma, tutma, şişirme, keskin çizgi, sıkıştırma, düzleştirme ve maske fırçaları vardır; X ekseni boyunca yansıtma yapılır ve {{ui:Ayrıntı}}, heykel yaptığınız yere üçgen ekler. Kalemin basıncı fırçanın boyutunu ve gücünü belirler. Her darbe tek bir geri alma adımıdır. Bkz. [Bir örgüyü heykelleyin](topic:sculpt).
- **Yeniden örgüleme ve yeniden topoloji.** {{ui:Yeniden örgüle}} tüm bir örgüyü eşit üçgenlerle yeniden kurar; delikleri kapatır ve üst üste binen parçaları birleştirir. Ayrıntılı bir örgünün üzerine temiz bir örgü kurmak için onu {{ui:Yeniden topoloji}} altında seçin: taşıdığınız noktalar onun yüzeyine düşer. Bkz. [Yeniden örgüleme](topic:mesh-edit#remesh).

### Çizim

- **Bir kenarı veya eğriyi bölme.** {{ui:Böl}} aracı, bir kenar boyunca hareket ederken kesimleri işaretler ve bir tıklamayla ya da yazılan bir sayıyla böler; bir kenar, yay veya daire seçiliyken `/5` yazın; {{ui:Öğe bilgisi}} › {{ui:Böl…}} tabletler için sayıyı sorar. Bir yay veya daire, gerçek yay üzerinde eşit açılarla bölünür. Bkz. [Bir kenarı veya eğriyi eşit parçalara bölün](topic:divide).
- **Değer kutusunda hesaplamalar.** Herhangi bir uzunluk için `2.5/3`, `12'6"+3/4"`, `(24'-0")/3` veya `2*450mm`, bir açı için `90/2` yazın. Yapılamayan bir hesaplama neyin yanlış olduğunu ve nerede olduğunu söyler. Bkz. [Hesaplamalar](topic:value-box#calculations).

### Render

- **Grafik kartında yol izleme.** {{ui:Resim render et…}} › {{ui:Yüksek kalite (yol izlemeli)}}, tarayıcının WebGPU'ya sahip olduğu yerlerde CadCraft'ın kendi yol izleyicisini grafik kartında çalıştırır; resmin altındaki satır hangi motorun ürettiğini söyler. {{ui:Durdur}} resmi tutar ve {{ui:Devam et}} oradan devam eder. WebGPU olmadan resim, daha önce olduğu gibi WebGL ile yol izlemeli çizilir. Bkz. [Yüksek kalite](topic:render#high-quality).
- **Görünümde render.** {{ui:Render}} çalışma alanı görünümün kendisinde yol izler ve etrafında döndüğünüzde ya da düzenleme yaptığınızda yeniden başlar: bir {{ui:Bölge}} render edin, {{ui:Odak}} için tıklayın, {{ui:Ayrıntı}} ayarlayın. WebGPU gerektirir. Bkz. [Görünümde render](topic:render#render-in-the-view).
- **Malzemeler, ışıklar ve gökyüzleri.** Yüksek kaliteli resimler her yüzeyi OpenPBR malzeme modeliyle gölgelendirir (kaplamalar, tüy, ince filmler, renkli cam, ışıma). WebGPU ile ayrıca {{ui:Fiziksel gökyüzü}} ile {{ui:Puslanma}}, bir {{ui:Gökyüzü resmi (HDRI)}} ve lambalar için üreticinin IES ışık profilleri vardır. Bkz. [Gökyüzleri ve ışık profilleri](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **Bir fotoğraf makinesi gibi kamera.** Her modda f-sayısı, enstantane ve ISO'dan pozlama; WebGPU ile ayrıca alan derinliği, iki noktalı perspektif, beyaz dengesi, 360° panoramalar (stereo dahil) ve küp haritaları. Bkz. [Kamera](topic:render#the-camera).
- **Render'dan sonra resmi bitirin.** Derecelendirin ({{ui:ACES filmik}}, {{ui:AgX}}, {{ui:Filmik}} veya {{ui:Standart}}; kontrast, parlama, göz kamaşması, vinyet, bir `.cube` renk tablosu), gökyüzünü, güneşi ve her lamba grubunu karıştırın ve render öğelerine tek tek bakın; hepsi yeniden render etmeden. Kalan gürültü, kendi bilgisayarınızdaki bir gürültü gidericiyle temizlenir. Bkz. [Resmi bitirin](topic:render#finish-the-picture) ve [Render'dan sonra ışıkları karıştırın](topic:render#mix-the-lights-after-the-render).
- **Bir render'ı kaydetmenin daha fazla yolu.** 16 bitlik PNG, her render öğesi ve ışık grubu içeren çok katmanlı bir EXR ve karışımı ve derecelendirmesiyle yeniden açılan bir render dosyası (`.ccrender`). Bkz. [Resmi kaydedin](topic:render#save-the-picture).
- **Sis, duman ve kostik.** Güneşle ve lambalarla aydınlatılan sis ve pus, ışık hüzmeleriyle; tek bir duman sütunu veya bulut; cam ve aynaların altında kostik; zaten temiz olan piksellerde durmayı bilen uyarlanabilir örnekleme. Yalnızca grafik kartında. Bkz. [Sis, duman, gürültü ve kostik](topic:render#fog-smoke-noise-and-caustics).
- **Render kuyruğu ve MP4.** Yüksek kaliteli resimleri ve tüm animasyonları {{ui:Render kuyruğu}} listesine ekleyin; birbiri ardına render edilirler ve kuyruk sayfayı kapatsanız da kalır. WebGPU gerektirir. Tarayıcının yazabildiği yerlerde videolar MP4 olarak da kaydedilebilir. Bkz. [Render kuyruğu](topic:render#the-render-queue) ve [Videoyu render edin](topic:animation#render-the-video).

### Canlı görünüm ve sunumlar

- **Canlı görünüm.** {{ui:Dışa aktar}} › {{ui:Canlı görünüm}}, modeli görünümün yanında gerçek zamanlı bir görünümle gösterir; her düzenlemeyi ve kamerayı izler: güneş gölgeleri, malzemeler, lambalar ve duvarlardan yansıyan ışık. {{ui:Yürü}} ile içinde gezin, güneşi taşımak için {{ui:Saat}} ve {{ui:Ay}} öğelerini sürükleyin ya da onu bir {{ui:Yeni pencere}} içine taşıyın. Tarayıcıda varsa WebGPU kullanır, yoksa WebGL 2. Bkz. [Canlı görünüm](topic:live-view).
- **Dağılım.** Çim, çiçek, kaya, ağaç ve insanları bir fırçayla ya da yüzeylere yayın; yedi yeni çevre öğesi ve kütüphanenin geri kalanından; kümeler dosyada saklanır. Bkz. [Bitkileri, kayaları ve insanları dağıtın](topic:live-view#scatter-plants-rocks-and-people).
- **Paylaşım.** 360° panorama, oklarla noktalar arasında bir panorama turu, bağımsız bir görüntüleyici (çevrimdışı açılan ve internetten hiçbir şey yüklemeyen tek bir web sayfası) ve kamera yolunun bir videosu; hepsi gerçek zamanlı görünümle. Bkz. [Paylaşım: panoramalar, turlar, bir görüntüleyici, bir video](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **Gerçek zamanlı görünümde VR.** {{ui:VR'de incele}} modeli malzemeleri, gökyüzü, güneş gölgesi, lambaları, dağınık öğeleri ve yansıyan ışıkla gösterir. Bkz. [Nasıl göründüğü](topic:vr-review#what-it-looks-like).

### Malzemeler

- **Düğümlerle yapılan malzemeler.** {{ui:Gölgelendirme}} çalışma alanı, dosyanın kendi malzemelerini düğüm grafikleri olarak kurar: resimler, gürültü ve damalar, Voronoi hücreleri, dalgalar, tuğlalar, döşemeler, ahşap, mermer, gradyanlar, kir ve kenar aşınması, renk işi, matematik, kabartma ve normal haritaları; tam OpenPBR malzemesine dönüşür. Görünüm her değişikliği hemen gösterir. Bkz. [Düğümlerle malzeme yapın](topic:shading).
- **Bir malzeme kütüphanesi ve kendi doku setleriniz.** Gölgelendirme panelinde kütüphanedeki malzemeler listelenir: her biri atıflı on altı CC0 doku seti. Birine tıklayarak kullanın ya da bir yüzeye sürükleyin. {{ui:Resimler veya bir zip…}} ya da {{ui:Bir klasör…}} kendi haritalarınızdan, dosya adlarından bulunarak bir malzeme oluşturur. Bkz. [Kütüphaneden malzemeler](topic:shading#materials-from-the-library).
- **MaterialX girişi ve çıkışı.** Bir malzemeyi MaterialX olarak dışa aktarın (OpenPBR Surface veya Standard Surface, dokular PNG olarak) ve MaterialX dosyalarını resimleriyle birlikte içe aktarın. Bkz. [MaterialX](topic:shading#materialx).
- **Çıkartmalar ve doku boyama.** Bir resmi, kendi malzemesiyle bir çıkartma olarak bir yüzeye yerleştirin ve bir malzemenin resmini yuvarlak bir fırçayla boyayın. Bkz. [Çıkartmalar](topic:shading#decals) ve [Dokuyu boyayın](topic:shading#paint-on-the-texture).
- **Doku pişirme.** Ortam kapanmasını, eğriliği, aydınlatmayı ve ayrıntılı bir nesnenin normallerini, bir örgünün UV'leri boyunca resimlere pişirin; bilgisayarın işlemci çekirdeklerinde. Bkz. [Dokuları pişirin](topic:shading#bake-textures).

### Animasyon

- **Animasyon çalışma alanı.** Bir nesnenin yerini, dönüşünü ve boyutunu, her lambanın parlaklığını, yayılımını ve rengini ile merceğin açısını doğrudan panelde anahtar kare olarak kaydedin. Zaman çizelgesi bir {{ui:Eğriler}} görünümü (Bézier tutamaçları, tekrarlar) ve anahtarları yeniden yerleştirmek üzere eylem olarak kaydeden ve karıştıran bir {{ui:Klipler}} görünümü kazanır; birkaç satırdaki anahtarlar taşınabilir, uzatılabilir, kopyalanabilir ve yapıştırılabilir. Bkz. [Her özelliği canlandırın](topic:animate).
- **Şekil anahtarları ve sürücüler.** Bir örgü, kendisinin başka şekillerini taşır; bunlar anahtarlanabilen kaydırıcılarla karıştırılır ya da küçük bir ifadeyle başka değerlerden ayarlanır. Bkz. [Şekil anahtarları](topic:animate#shape-keys-morphs) ve [Sürücüler](topic:animate#drivers).
- **İskeletler.** Bir örgüye kemik koyun; {{ui:Otomatik ağırlıklar}} noktaları kemikler arasında paylaştırsın ya da ağırlıkları boyayın; kemikleri poz verip anahtar kare olarak kaydedin; doğrusal ya da çift kuaterniyon kaplama. Bkz. [İskeletler](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK ve kısıtlamalar.** Kutup ile ulaşma (IK), bakma, dönüşümleri kopyalama, sınırlar, alt öğe olma ve yolu takip etme; kemikler ve nesneler için. Bkz. [IK ve kısıtlamalar](topic:animate#ik-and-constraints).
- **Fizik.** Gruplar ve bileşenler kutu veya top olarak düşer, yığılır ve çarpışır; {{ui:Fiziği bake et}} sonucu anahtar kareler olarak tutar. Bkz. [Fizik](topic:animate#physics-drop-stack-and-collide).

### Dosyalar

- **USD.** {{ui:Farklı kaydet}} ({{key:Mod+Shift+S}}) modeli `.usda`, `.usdc` veya `.usdz` olarak kaydeder; ModelCraft'ın kaydettiği bir USD dosyası hiçbir şey kaybolmadan yeniden açılır. Diğer programlardan gelen USD dosyaları örgüler, gruplar, bileşenler, lambalar ve kameralar olarak açılır veya içe aktarılır. {{ui:Kaydet}} hâlâ `.modelcraft` yazar. Bkz. [USD'yi kaydedin, açın ve dışa aktarın](topic:usd).
- **glTF, tam.** glTF dosyaları, normalleri, UV'leri, köşe renkleri ve dokularıyla düzenlenebilir örgüler olarak gelir; düğümler grup olarak, ışıklar lamba olarak, kameralar sahne olarak gelir; Draco ve meshopt dosyaları dahil. Bir `.gltf` dosyası, dosyalarıyla birlikte bırakıldığında açılır. Dışa aktarma örgüleri, dokuları, lambaları ve kameraları yazar. Bkz. [glTF](topic:formats#gltf-glb-gltf).
- **FBX, PLY, STL ve Alembic içe aktarımları.** FBX 2011 ve sonrası (örgüler, UV kümeleri, malzemeler, gömülü dokular, ışıklar, kameralar), renkleriyle PLY ve STL ve ilk örneğinde Alembic önbellekleri. OBJ, birlikte bırakıldığında `.mtl` ve resimleriyle birlikte gelir. Bkz. [Dosya biçimleri ayrıntılı](topic:formats).
- **Daha fazla dışa aktarma.** Renklerle PLY, boyalı yüzlerin renkleriyle STL ve dokularıyla OBJ tek bir zip olarak. Bkz. [Dosya biçimleri ayrıntılı](topic:formats).
- **STEP dosyaları.** {{ui:İçe aktar}} STEP (AP203, AP214, AP242) parçalarını ve montajları kapalı örgüler olarak gerçek boyutlarında okur; her parça dosyanın yerleştirdiği yerde. Bkz. [STEP](topic:formats#step-step-stp).
- **.3dm dosyaları.** {{ui:İçe aktar}} `.3dm` modellerini okur: örgüler, çokyüzeyler ve ekstrüzyonlar (dosyada kayıtlı örgülerden, yoksa ModelCraft tarafından üçgenlere ayrılarak), eğriler kenar olarak, bloklar bileşen olarak ve katmanlar etiket olarak. Bkz. [Bir .3dm modeli içe aktarın](topic:import-3dm-files).
- **DWG ve DXF'ten 3B katılar.** Bir çizim içe aktarıldığında 3B katıları, bölgeleri ve gövdeleri de gelir, her biri kendi grubuyla; kapalı olanlar katı olarak. Bkz. [Bir arsa planı üzerinde model](topic:site-plan#what-comes-in).

### 3B baskı

- **Baskı araçları.** {{ui:3B baskı için denetle (STL veya 3MF)…}} › **Baskı araçları** bir {{ui:Destek önizlemesi}} (çıkıntılar, sütun veya ağaç destekler, yaklaşık ne kadar malzeme), {{ui:Duvar kalınlığı}} (baskı için çok ince kalan duvarlar, {{ui:Göster}} ile listelenir), {{ui:İçini boşalt}} (verdiğiniz kalınlıkta duvarlar, drenaj delikleriyle) ve {{ui:Onar}} (her düzeltme listelenir; üst üste binen parçalar yalnızca istediğinizde birleşir) içerir. İçini boşalt ve Onar, düz yüzleri tek yüzler olan bir grup verir; sonuç kapanmazsa ya da çok fazla yüzü olursa bir örgü verir; durum satırı hangisi olduğunu söyler. Bkz. [Destekler, duvar kalınlığı, içini boşaltma ve onarım](topic:print-tools).
- **Başlangıç stili.** {{ui:Ayarlar}} › {{ui:ModelCraft}} › {{ui:Menüler, tuşlar ve fare}} › {{ui:Başlangıç}}: şekilleri ve delikleri bırakmak, taşımak, hizalamak ve {{ui:Grup}} için büyük düğmeler; delikler kesilsin diye, sonra baskı için modeli denetleyin. Bkz. [Başlangıç stili](topic:beginner).

### Asistanlar ve makineniz

- **Yapay zekâ asistanları için daha fazlası.** Bir asistan artık yüzleri ve malzemeleri listeleyebilir, it/çek yapabilir, boyayabilir, gruplar yapabilir, sahneleri ekleyip gösterebilir, örgüler ekleyebilir, değiştirici yığınlarını düzenleyebilir, USD dışa aktarabilir, bir resmi render edebilir ve render kuyruğunu doldurabilir. Bkz. [ModelCraft'ı bir yapay zekâ asistanıyla kullanın](topic:use-with-ai-assistants).
- **Makineniz.** {{ui:Ayarlar}} › {{ui:ModelCraft}} › {{ui:Render}} › {{ui:Makineniz}}, bu tarayıcının uygulamaya izin verdiği grafikleri, işlemci çekirdeklerini ve belleği gösterir; ve canlı görünümün nerede başlayacağını belirleyen seviyeyi. Bkz. [Makineniz neyle render eder](topic:your-machine).

## Düzeltilenler

- {{ui:Katılar}} › {{ui:Birleşim}}, {{ui:Çıkar}} ve {{ui:Kesiştir}} her boyutta kapalı olmayan bir grup döndürebiliyordu. Artık kapanıyorlar.
- {{ui:Katılar}} › {{ui:Çıkar}}, hiçbir şey seçili değilken soluk görünüyordu; oysa seçtikten sonra iki parçasını sırayla seçer.
- Animasyon zaman çizelgesinin içinde yazılan tuşlar hiçbir yere gitmiyordu; {{key:Mod+S}} de. Oradaki {{key:Mod+Z}} ve {{key:Mod+Y}} zaman çizelgesinin kendi geri al ve yinele işlevleridir; diğer {{key:Mod}} tuşları uygulamaya ulaşır.

## Tüm uygulamalarda

- **Birimler.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Birimler}} uzunluk, alan, hacim, açı ve eğim için birer liste içerir; birimlerin tanımlarının verdiği tam boyutlarla (ABD anket fiti kendi birimidir). Hiç kullanmadığınız birimleri kapatın, listelerden çıkarlar; birini yıldızlayın ve yeni iş o birimle başlar. Bir dosya her zaman kendi birimini korur. ModelCraft'ta değer kutusunun yanındaki birim listesi anahtarları izler (modelin kendi birimi her zaman listede kalır), yıldız yeni bir modelin birimini belirler (ModelCraft o birime sahipse) ve herhangi bir birimin işaretiyle yazılan bir uzunluk o birimde okunur. Bkz. [Birimler, yazılan değerler ve birim listeleri](common:unit-lists).
- **Daha sıkı bir düzen ve kendini toplayan paneller.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Düzen yoğunluğu}} › {{ui:Sıkı}} ekranda daha fazlasını sığdırır (dokunmatik ekranlar ve telefonlar büyük düğmelerini tutar). Her yan panelin ince bir başlık çubuğu vardır: panelin yerleşmesi ya da yüzmesi için sürükleyin, sekmeler olarak tek bir çerçeveyi paylaşmak için başka bir panelin çubuğuna bırakın, kenara kaymak için sabitleyin ya da gizleyip kenardan geri getirin. Bkz. [Panelleri düzenleyin](common:arrange-panels#make-the-layout-denser).
- **Pencereler taşınır.** Bir iletişim kutusunu başlık çubuğundan sürükleyerek çizimin önünden çekin; bıraktığınız yere geri döner. Ortalamak için başlık çubuğuna çift tıklayın. Bkz. [Bir iletişim kutusunu taşıyın](common:arrange-panels#move-a-dialog).
- **Yapay zekâ asistanları için tarifler.** Kendi asistanınız için on çalışılmış istek (bir çizimi düzenleme, bir takımın çıktısını alma, çizimleri denetleme, modele soru sorma, bir metrajı toplama, bir parça varyantını deneme ve daha fazlası); her biri kullandığı araçlar ve ihtiyaç duyduğu izinlerle, her biri testlerimizle yeniden oynatılır. Uygulamalar yapay zekâ içermez. Bkz. [Yapay zekâ asistanları için tarifler](common:assistants-recipes).
- **Diller.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Dil}} içinde yeni bir **Português (Portugal)** dili var. Bu dil, **Português (Brasil)**, **Español (México)** ve **Bahasa Indonesia** artık uygulamaların her sözcüğüne sahip; ana dili konuşan biri tarafından henüz gözden geçirilmemiş taslaklar olarak. Yardım konuları İngilizcedir.
- **CadCraft Studio** güncelleme denetiminin neden başarısız olduğunu söyler (sisteminiz için henüz dosya yok, ağ yok, hatalı imza) yalnızca "Bitti" demek yerine; ve kapattığınız bir Yenilikler kartını, daha yeni bir sürüm çıkana kadar geri getirmeyi bırakır.

## Bu sürümde henüz yok

- **0.7 kod imzalı değil.** İmzalama ve Microsoft Store paketi, sertifika doğrulaması henüz gelmediği için 0.8'e taşındı. Her dosyanın yanındaki SHA-256 değerini getcadcraft.com/download adresinde kontrol edin. Windows'ta SmartScreen yükleyiciyi durdurursa {{ui:Daha fazla bilgi}} seçin, sonra {{ui:Yine de çalıştır}}. Mac'te ilk seferinde CadCraft Studio'ya sağ tıklayıp {{ui:Aç}} seçin. CadCraft Studio henüz bir uygulama mağazasında değil ve henüz bir iPad veya iPhone sürümü yok.
- {{ui:Birimler}} içindeki açı ve eğim listeleri kaydedilir, ama henüz hiçbir kutu bunları okumaz.
- Grafik kartında render (WebGPU) burada yalnızca bir yazılım taklidiyle test edildi, henüz gerçek grafik kartlarında değil; bu yüzden önce bilgisayarınızda küçük bir şey render edin. Aynısı canlı görünüm için de geçerli; VR ise hâlâ yalnızca bir gözlük öykünücüsüyle denendi.
- WebGPU olmadan Render çalışma alanı ya da render kuyruğu yoktur; yüksek kaliteli resimlerde alan derinliği, fiziksel gökyüzü, gökyüzü resmi, sis, duman, kostik ya da ışık karıştırma yoktur.
- {{ui:Resim render et…}} henüz dağıtılmış öğeleri çizmez; bunlar canlı görünümde, onun panoramalarında, görüntüleyicisinde ve videosunda görünür.
- Lambalar görünümde animasyonlanır, ama render edilmiş bir video, başladığında lambaları olduğu gibi kullanır.
- Kemikler ve animasyon henüz glTF, FBX veya USD dosyalarından okunmaz ya da yazılmaz (kemikli modeller dinlenme pozisyonunda, ağırlıklarıyla gelir); taban renk veya dokunun ötesindeki glTF ve FBX malzemeleri de henüz tutulmaz.
- STEP renkleri ve montajın parça adları henüz okunmaz. `.3dm` içe aktarımı, formatın araç takımıyla yazılmış dosyalarla test edildi, modelleme programının kendisiyle yazılmış dosyalarla henüz değil; SubD nesneleri, metin ve ölçülendirmeler dışarıda bırakılır.
- CivilCraft'taki bitki kütüphanesi ModelCraft'tadır, ama ondan bitki yerleştirme henüz yapılmadı.
- Bir dokuyu it/çek yüzeylerine boyamak, malzemenin karosuyla tekrar eder; yalnızca bir yüzü boyamak için onu bir örgüye dönüştürün ve açın.

Diğer her şey için: [Henüz yapılmadı](topic:not-built-yet).
