---
title: Dosya biçimleri ayrıntılı olarak
summary: ModelCraft'ın açtığı, içe aktardığı ve dışa aktardığı her biçimin neleri koruduğunu, dönüştürdüğünü ve dışarıda bıraktığını gösterir.
keywords: biçimler, dosya türleri, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, önbellek, fbx, 3mf, ifc, dwg, dxf, birimler, eksenler, Y yukarı, Z yukarı, milimetre, sınırlar
from: c47d2d28
---

ModelCraft'ın modeli metre cinsindedir ve Z (mavi) yukarı bakar. Aşağıdaki her biçim buna dönüştürülür ya da bundan dönüştürülür.

## ModelCraft (.modelcraft)

| Ne | Ayrıntılar |
|---|---|
| Aç | {{ui:Aç}} ({{key:Mod+O}}) ya da görünümün üzerine bırakın. `.json` ile biten dosyalar da kabul edilir |
| Kaydet | {{ui:Kaydet}} ({{key:Mod+S}}), indirme olarak |
| Korunanlar | Her şey: geometri, yüzeyler ve renkleri, malzemeler ve içe aktarılmış dokular, lambalar, yumuşak kenarlar, gruplar, bileşenler, adlar, kılavuzlar, sahneler, birimler ve son kamera ve stil |
| Dışarıda bırakılanlar | Geri alma geçmişi |
| Sınır | 200 MB |

Sizinkinden daha yeni bir ModelCraft ile kaydedilmiş bir dosya reddedilir: "Bu model daha yeni bir ModelCraft ile kaydedilmiş (dosya sürümü …). Açmak için ModelCraft'ı güncelleyin." ModelCraft modeli olmayan bir dosya ise "Bu dosya bir ModelCraft modeli değil (JSON değil)." ya da "Bu, açabileceğimiz bir ModelCraft dosyası değil: …" der.

## USD (.usd, .usda, .usdc, .usdz)

Açın, içe aktarın ve {{ui:Farklı kaydet}} ya da {{ui:Dışa aktar}} › {{ui:USD (.usda, .usdc, .usdz)…}} seçin. ModelCraft'ın kaydettiği bir USD dosyası hiçbir şey kaybolmadan yeniden açılır; diğer programların USD dosyaları örgü, grup, bileşen, lamba ve kamera olarak açılır. Bkz. [USD'yi kaydedin, açın ve dışa aktarın](topic:usd).

## Collada (.dae)

İçe aktarma ve dışa aktarma. Diğer 3B modelleyicilerle model alışverişi için en iyi biçim.

- **Dışa aktarma:** Collada 1.4.1, Z yukarı, metre. Her grup ya da bileşen tanımı için bir geometri; bileşenler bir kez yazılır ve referansla yerleştirilir, bu yüzden paylaşımlı kalır. Delikli ya da içbükey anahatlı yüzeyler üçgenlere bölünür. Renkler malzemeye dönüşür. Serbest kenarlar çizgi olarak yazılır. Biçimde geçersiz olan adlar düzeltilir ve tam ad yanında saklanır.
- **İçe aktarma:** üçgenler, çokgenler (delikli), üçgen yelpazeleri ve şeritler yüzey olur; çizgiler kenar olur. Düğüm dönüşümleri, dosyanın yukarı ekseni ve birimi uygulanır. Birden çok yerde yerleştirilen bir düğüm ya da birden çok düğüm tarafından kullanılan bir geometri bileşen olarak gelir; diğer düğümler grup olarak gelir. Malzeme renkleri (diffuse) yüzey renklerine dönüşür.
- **İçe aktarılmayanlar:** dokular, iskelet ve morflar, kameralar, ışıklar, bazı dönüşüm türleri (look-at ve skew) ve diğer dosyalara referanslar. Durum çubuğu bunları sayar.
- **Dışa aktarmada kaybolan:** hangi kenarların yumuşak olduğu. **İçe aktarmada,** üçgenlenmiş yüzeyler üçgen olarak kalır; düz alanlar yine tek bir yüzey gibi görünsün diye köşegenleri yumuşatılır.

## OBJ (.obj, .mtl)

İçe aktarma ve dışa aktarma.

- **İçe aktarma:** `.obj` dosyasını `.mtl` ve doku resimleriyle birlikte bırakın (ya da `.obj` dosyasını tek başına içe aktarın: malzemesiz gelir ve durum çubuğu istediği `.mtl` dosyasını adıyla gösterir). Metre ve Y yukarı olarak okunur. Her nesne (`o`, yoksa `g`) bir [örgü](topic:meshes) olur; yüzeyleri olduğu gibi korunur (dörtgenler dörtgen kalır). Doku koordinatları, normaller ve köşe başına renkler korunur. Bir malzemenin renk resmi (`map_Kd`, PNG, JPEG veya WebP) ölçek ve ofset seçenekleriyle birlikte bir doku olarak gelir; yoksa rengi (`Kd`) kullanılır. Dosyanın normallerinin koptuğu kenarlar serttir; normal yoksa dosyanın yumuşatma grupları belirler. Diğer haritalar (bump, normal), noktalar, çizgiler ve eğriler sayılır ve dışarıda bırakılır. OBJ'nin bir birimi yoktur; bu yüzden milimetre ya da inç cinsinde yapılmış bir model yanlış boyutta gelir: içe aktardıktan sonra ölçekleyin (bkz. [Döndürme ve ölçekleme](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Dışa aktarma:** metre, Y yukarı, dünya koordinatları. Her grup yerleşimi için bir nesne; bileşenler her yerleşimde tamamen yazılır. Örgüler kendi yüzlerini, doku koordinatlarını ve normallerini korur; [yumuşak kenarlarla](topic:soften) birleşen yüzeyler köşe başına bir normal alır. Modelde renkler varsa, `.obj`'nin yanında bir `.mtl` indirilir. İçe aktarılmış dokular varsa `.obj`, `.mtl` ve resimler birlikte tek bir `.zip` olarak indirilir.
- **Sınır:** 2 milyon köşe noktası veya yüzey; 64 MB metin.

## glTF (.glb, .gltf)

İçe aktarma ve dışa aktarma, glTF 2.0.

- **İçe aktarma:** bir `.glb`, ya da `.gltf` ile birlikte `.bin` ve doku dosyaları: hepsini birlikte görünüme bırakın (ya da `.glb`'yi seçin). Tek başına verilen bir `.gltf`, ihtiyaç duyduğu dosyayı adıyla belirtir: "Bu .gltf dosyası "…" dosyasına ihtiyaç duyuyor: .glb sürümünü açın ya da .gltf dosyasını dosyalarıyla birlikte bırakın."
  - **Örgüler** dosyadaki her örgü için bir [örgü](topic:meshes) olarak gelir; dosyanın normalleri, doku koordinatları ve köşe renkleri üzerlerinde korunur. Normallerin koptuğu kenarlar serttir; kalanlar yumuşaktır. Birden çok yerde kullanılan bir örgü paylaşımlı kalır.
  - **Düğümler** dosyadaki adlarıyla gruplar olur. Örnekli örgüler (EXT_mesh_gpu_instancing) bir kez örgü olarak, birden çok kez yerleştirilmiş gelir.
  - **Malzemeler:** temel renk dokusu (PNG, JPEG veya WebP) dosyanın doku koordinatlarına (varsa doku dönüşümüyle) yerleştirilmiş bir doku olarak gelir ve kaydederken korunur; yoksa temel renk kullanılır. Metalik, pürüzlülük, normal haritaları, cam, clear coat, sheen ve diğer malzeme eklentileri okunur ama henüz korunmaz: durum çubuğu bunu söyler.
  - **Işıklar** (KHR_lights_punctual): nokta ve spot ışıklar [lambalar](topic:lights) olur. Yönlü ışıklar sayılır: güneş modeli aydınlatır.
  - **Kameralar** [sahneler](topic:scenes) olur.
  - **İskeletli karakterler** dosyanın dinlendirdiği haliyle durur; kemikleri ve animasyonları ile morf hedefleri sayılır ve henüz korunmaz.
  - **Sıkıştırılmış dosyalar** (Draco, meshopt) ve kuantize edilmiş veriler okunur. Çözücüler yalnızca ihtiyaç duyan bir dosya için yüklenir.
  - Noktalar ve çizgiler sayılır ve dışarıda bırakılır (bir örgü yüzeylerden oluşur). KTX2 dokuları dışarıda bırakılır; yüzeyler renklerini korur.
- **Dışa aktarma** (`.glb`): glTF 2.0 ikili, metre, Y yukarı. Her tanım için bir örgü; bu yüzden bileşenler paylaşımlı kalır. Örgüler normallerini, doku koordinatlarını ve köşe renklerini korur; [yumuşak kenarlarla](topic:soften) birleşen yüzeyler pürüzsüz normaller taşır. Renkler ve malzemeler malzemeye dönüşür (bir malzeme rengi olarak); içe aktarılmış dokular doku olarak yazılır. Açık olan lambalar nokta ve spot ışık olur (alan lambalarının glTF karşılığı yoktur ve dışarıda bırakılır); sahneler kameralara dönüşür. Serbest kenarlar dışarıda bırakılır.
- **Sınır:** 300 MB'a kadar dosyalar; yaklaşık 130 milyon geometri sayısı.

## STL (.stl)

İçe aktarma ve dışa aktarma.

- **İçe aktarma:** ikili ya da ASCII. STL'nin birimi yoktur: **milimetre** olarak okunur; yazıcıların ve ModelCraft'ın kendi dışa aktarmasının yazdığı gibi. Aynı noktadaki köşeler birleşir, bu yüzden kapalı bir parça kapalı bir [örgü](topic:meshes) olarak gelir. Dosyadaki renkler (VisCAM / SolidView ve Materialise kuralları) yüzeyleri boyar.
- **Dışa aktarma,** 3B baskı için: ikili STL, **milimetre**, Z yukarı. Yalnızca üçgenler: gruplar ve serbest kenarlar dışarıda bırakılır. Boyalı yüzeyler renklerini VisCAM / SolidView kuralıyla taşır; bunu okumayan programlar yok sayar. Temiz bir baskı için kapalı katıları dışa aktarın.

## STEP (.step, .stp)

Yalnızca içe aktarma. STEP, parça modelleyicilerinin ve tedarikçilerin gönderdiği dosyadır: AP203, AP214 ve AP242 dosyaları.

- **İçe aktarma:** ModelCraft dosyayı kendisi, sayfa içinde okur ve her katıyı üçgenlerden oluşan kapalı bir [örgüye](topic:meshes) dönüştürür: düz yüzeyler düz kalır, eğri yüzeyler (silindirler, konilar, küreler, torusler, B-spline yüzeyler) birçok küçük düz yüzeye dönüşür; tek bir eğri yüzeyin içindeki kenarlar yumuşak, iki yüzey arasındaki kenarlar keskindir. STEP dosyaları birimlerini belirtir; model gerçek boyutunda gelir. Bir montaj, dosyanın her parçayı yerleştirdiği yerde gelir; her parça, dosya adından adlandırılmış bir grup içinde kendi örgüsüne sahiptir. Renkler, montaj ağacındaki parça adları ve toleranslar (PMI) okunmaz.
- **Mesajlar:** atlanan ya da daha kaba çizilen şeyler durum satırına eklenir ("Notlar: …"); katı içermeyen, bozuk ya da sınırların ötesindeki bir dosya nedenini söyler ve hiçbir şey eklemez.
- **Sınır:** 300 MB'a kadar dosyalar; 400 000 yüzey ve 8 milyon üçgen.

## .3dm

Yalnızca içe aktarma. `.3dm` dosyaları NURBS modelleri tutar: çoklu yüzeyler, yüzeyler, örgüler, eğriler ve bloklar.

- **İçe aktarma:** ModelCraft dosyayı kendisi, sayfa içinde okur. Örgüler olduğu gibi gelir; bir çoklu yüzeyin ya da ekstrüzyonun her yüzeyi, dosyada kayıtlı render örgüsünden alınır; yoksa ModelCraft onu üçgenlere böler (düzlemler, NURBS yüzeyler, döndürme yüzeyleri, ekstrüde edilmiş eğriler, ekstrüzyonlar; kenarlarıyla kırpılmış ve kapalı çoklu yüzeyler kapalı örgüler olarak). Eğriler kenar olur, bloklar bileşen olur (bloklar içindeki bloklar korunur), katmanlar etiket olur (kapalıyken gizli); nesnenin rengi (kendi rengi, katmanınınki ya da malzemesininki) yüzeylerini boyar. Dosya birimini belirtir; model gerçek boyutunda gelir. Adım adım: [Bir .3dm modelini içe aktarın](topic:import-3dm-files).
- **Mesajlar:** durum satırı, kaç yüzeyin kayıtlı örgülerden geldiğini ve kaçının üçgenlendiğini söyler; neyin dışarıda bırakıldığını adıyla belirtir: noktalar, nokta bulutları, metin, ölçülendirmeler, taralamalar, ışıklar, SubD nesneleri, henüz okunmayan yüzey türleri üzerindeki yüzeyler, bağlı bloklar.
- **Sınır:** 300 MB'a kadar dosyalar.

## PLY (.ply)

İçe aktarma ve dışa aktarma; renkli örgüler için (taramalar, renkli 3B baskı, diğer modelleyiciler).

- **İçe aktarma:** ASCII ve ikili. Yüzeyler, normalleri, doku koordinatları ve köşe renkleri korunarak bir [örgü](topic:meshes) olur; her yüzey 4,096 renkten en yakın olanla boyanır, böylece renkleri şimdiden görürsünüz. PLY'nin birimi ya da eksen kuralı yoktur: koordinatlar olduğu gibi gelir (metre, Z yukarı). Yalnızca noktalardan oluşan bir PLY bir nokta bulutudur: BimCraft ya da CivilCraft'ta açın.
- **Dışa aktarma:** konumlar, normaller ve renklerle ikili PLY (model varsa doku koordinatlarıyla birlikte), metre, Z yukarı.

## FBX (.fbx)

Yalnızca içe aktarma. 2011 ve sonrasının FBX 7 dosyaları, ikili ya da ASCII, ModelCraft'ın kendi okuyucusuyla okunur.

- Örgüler [örgü](topic:meshes) olarak normalleri, doku koordinatları (her UV kümesi) ve köşe renkleriyle gelir; birden çok nesnenin kullandığı bir örgü paylaşımlı kalır. Nesneler, dönüşümleriyle (pivotlar, ofsetler ve ön dönüşler dahil) gruplara dönüşür.
- Malzemeler: dosyaya gömülü ya da `.fbx` ile birlikte bırakılan bir resim olarak diffuse doku, bir doku olarak gelir (TGA resimleri PNG olarak korunur); yoksa diffuse renk. Diğer malzeme ayarları yeni malzeme modelini bekler.
- Dosyanın yukarı ekseni ve birimi uygulanır: her şey Z yukarı, metre olarak gelir.
- Nokta ve spot ışıklar [lambalar](topic:lights) olur (FBX yoğunluğu 100, ModelCraft'ın varsayılan lambasıdır, 800 lümen: FBX yoğunluklarının birimi yoktur). Kameralar [sahneler](topic:scenes) olur.
- İskeletli karakterler dinlenme halinde gelir; kemikler ve animasyonlar sayılır, henüz korunmaz. Yönlü ve alan ışıkları ile örgü dışındaki geometri (NURBS, eğriler) sayılır ve dışarıda bırakılır.
- FBX 6 ve daha eski dosyalar reddedilir: onları FBX 2011 ya da daha yenisi olarak yeniden kaydedin.

## Alembic (.abc)

Yalnızca içe aktarma: animasyon ve efekt programlarından geometri önbellekleri.

- Örgüler (çokgen ve alt bölümlü örgüler) doku koordinatları ve normalleriyle [örgü](topic:meshes) olarak gelir; dönüşümler gruplara dönüşür. Alembic Y yukarıdır ve Z yukarıya çevrilir; metre.
- Çok sayıda örneğe sahip bir önbellek (bir animasyon) ilk örneğiyle gelir; durum çubuğu kaç örnek olduğunu söyler.
- Noktalar, eğriler, NURBS yüzeyler, kameralar ve ışıklar sayılır ve dışarıda bırakılır. Eski HDF5 düzenindeki dosyalar reddedilir: bunları Ogawa Alembic dosyası olarak yeniden kaydedin.

{{ui:3B baskı için denetle (STL veya 3MF)…}} önce şekli denetler, sonra seçimi ya da görünen her şeyi yazar. Bkz. [Modeli 3B baskıya hazırlayın](topic:print-3d).

## 3MF (.3mf)

Yalnızca dışa aktarma, {{ui:3B baskı için denetle (STL veya 3MF)…}} üzerinden. 3MF çekirdeği: **milimetre** cinsinden tek bir örgü, Z yukarı, renkleri malzeme olarak. Çoğu dilimleyici bunu okur ve STL'den farklı olarak birimini belirtir. Gizli şeyler dışarıda bırakılır. Bkz. [Modeli 3B baskıya hazırlayın](topic:print-3d).

## DWG ve DXF dışa aktarma (.dwg, .dxf)

CAD programları için. Model kendi biriminde yazılır: feet ve inç cinsinden modeller için inç, aksi halde milimetre, santimetre ya da metre (durum çubuğu adını gösterir).

- **Yüzeyler** 3B yüzeyler (üçgenler) olur. Bir yüzey içindeki çizgiler ve yumuşak kenarlar görünmez yazılır; böylece yüzeyler ModelCraft'takine benzer görünür.
- **Serbest kenarlar** çizgi olur.
- **Gruplar ve bileşenler** blok olur: bir bileşen bir kez yazılır ve kullanıldığı her yerde yerleştirilir; döndürülmüş ve aynalanmış kopyalar dahil. Döndürüldükten sonra gerilmiş (bu yüzden eğik) bir grup bunun yerine yerinde yazılır.
- **Renkler:** DWG her yüzeyin rengini tam olarak korur; DXF ise 255 standart CAD renginden en yakın olanı kullanır.
- **Sürümler:** DWG, AutoCAD 2004 (AC1018) olarak yazılır ve 2004 ve sonrasının CAD programları açar. DXF, her CAD programının okuduğu R12 (AC1009)'dir; R12'de birim alanı yoktur, bu yüzden CAD programına hangi birimi kullanacağını söyleyin.
- **Yazılmayanlar:** kılavuzlar, ölçülendirmeler, sahneler ve kamera.

## IFC (.ifc)

Yalnızca dışa aktarma, BimCraft ve diğer BIM programları için. Bir proje, bir arsa, bir bina ve katlarıyla IFC4. Her üst düzey grup ya da bileşen, adıyla birlikte tek bir yapı öğesi vekili olur; kapalı olanlar katı şekiller olarak (faceted breps), açık olanlar yüzey modelleri olarak yazılır; yüzeylerdeki delikler korunur. Üst düzeydeki serbest geometri "Serbest geometri" adlı tek bir öğe olur. Tip, özellik ya da malzeme yoktur.

**Katlar:** {{ui:Dışa aktar}} › {{ui:IFC katları…}} bunları, her birinin adı ve kotuyla listeler ({{ui:Kat ekle}} ya da {{ui:Modelden tahmin et}}, üst düzey gruplarınızın durduğu her yükseklik için bir kat oluşturur). Dışa aktarırken her grup ya da bileşen, en alt noktasında ya da altında bulunan kata gider ve yerini korur. Hiç kat yoksa her şey "Seviye 1" adlı tek bir katta, 0 kotunda olur. Katlar ModelCraft dosyasında kaydedilir.

## DWG (.dwg) ve DXF (.dxf)

Zeminde çizgi olarak içe aktarın (taralamalar ve 3B yüzeyler yüzey olarak); dışa aktarma yukarıda anlatıldığı gibidir. Bkz. [Arsa planı üzerinde model](topic:site-plan).

- **Okuma:** model uzayından çizgiler, çoklu çizgiler (yaylarla), 3B çoklu çizgiler, daireler, yaylar ve dizileri de içeren blok başvuruları. Görünmez nesneler (dinamik bir bloğun gizli durumları gibi) dışarıda bırakılır. Eğriler tam dönüş başına 48 düz parçaya dönüşür.
- **0.4 sürümünden beri okunan:** splineler ve elipsler (kenar olarak), metin, çok satırlı metin ve öznitelik değerleri (tek vuruşlu yazıda kenarlar olarak), taralamalar (delikli yüzeyler), 3B yüzeyler ve katı dolgular (yüzeyler) ve ölçülendirmeler (çizimin kendi ölçülendirme bloklarından çizilir).
- **0.7'den beri okunan:** 3B katılar, bölgeler ve gövdeler (ACIS verileri; her sürümün DWG ve DXF'i), her biri kendi grubu olarak, kapalı olanlar katı olarak. Düzlem, silindir, koni, küre, simit ve basit spline yüzeyleri dışındaki yüzeyler dışarıda bırakılır ve listelenir.
- **Okunmayanlar:** noktalar, tablolar, çoklu belirtme çizgileri, resimler ve kâğıt uzayındaki her şey.
- **Birimler:** çizimde belirtilmişse oradan alınır. Değilse ModelCraft sorar.
- **DXF** ASCII olmalıdır. İkili DXF reddedilir.
- **DWG** dosyaları AutoCAD R13'ten güncel biçime kadar (AutoCAD 2018 ve sonrası; AC1012'den AC1032'ye) ModelCraft'ın kendi DWG okuyucusuyla, sayfa içinde okunur; ModelCraft'ın bir parçasıdır, bu yüzden ModelCraft çevrimdışı çalıştığında da çalışır. Eski sürümler (R12 ve öncesi) ile ağır hasarlı dosyalar okunamaz; bunları DXF olarak kaydedin.
- **Sınırlar:** orijinden 10.000 km'den fazla uzaktaki koordinatlar ya da 2 milyondan fazla çizgi parçası reddedilir.

## SKP dosyaları

{{ui:İçe aktar}} (ya da dosyayı görünüme bırakın) SketchUp dosyalarını ModelCraft'ın kendi okuyucusuyla, sayfa içinde okur: hiçbir şey yüklenmez ve ModelCraft çevrimdışı çalıştığında bu da çalışır. SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 ve 2026 dosyalarıyla denenmiştir; diğer sürümler de açılmalıdır, ama henüz denenmedi. Model, dosya adından adlandırılmış tek bir grup olarak gelir. Bir {{key:Mod+Z}} onu yeniden kaldırır. Adım adım: [Bir SKP modelini içe aktarın](topic:import-sketchup-files).

- **Korunanlar:** iç boşluklarıyla yüzeyler, gruplar (grup olarak) ve bileşenler (bileşen olarak, paylaşımlı), adları ve yerleşimleri, renkler, grup ve bileşenlerdeki etiketler ve bir yüzeyin parçası olmayan kenarlar; yumuşak ve pürüzsüz kenarlar da korunur, böylece eğri yüzeyler pürüzsüz kalır.
- **Renkler:** bir yüzeyin kendi malzemesi rengini verir. Bir grup ya da bileşene boyanmış bir malzeme, o yerleşimin boyası olur; böylece kendi rengi olmayan içerideki yüzeyler onu alır, SketchUp'taki gibi. İki renge boyanmış bir bileşen tek bir bileşen olarak kalır.
- **Etiketler:** grup ve bileşenlerdeki etiketler ModelCraft etiketleri olur; gösterildiği ya da gizlendiği gibi kalır. Serbest yüzeylerdeki ve kenarlardaki etiketler korunmaz (ModelCraft etiketleri yalnızca grup ve bileşenlere uygular); durum çubuğu bunları sayar.
- **Gizli şeyler gizli gelir** (yüzeyler, kenarlar, gruplar, bileşenler ve gizli bir etiketteki yüzeyler ve kenarlar), böylece SketchUp'ın gösterdiğini görürsünüz; {{ui:Tümünü göster}} hepsini gösterir.
- **Dokular:** dokulu bir malzemeyle boyanmış bir yüzey dokusunu korur, dosyadaki gibi yerleştirilmiş; ModelCraft dosyası resmi saklar. Tüm bir grup ya da bileşen üzerindeki doku, dosyada eksik olan bir doku ya da tarayıcının gösteremediği bir resim (bir Photoshop dosyası gibi) yalnızca malzemesinin rengini korur.
- **Dışarıda bırakılanlar, durum çubuğunda sayılır:** modele yerleştirilmiş resimler. Metin, ölçülendirmeler, kılavuzlar, kesit düzlemleri, sahneler ve stiller okunmaz.
- **Birimler:** SketchUp dosyaları içeride inç cinsindedir; ModelCraft bunları dönüştürür, böylece boyutlar her birimde doğru çıkar.
- **`.skp` kaydetme** henüz yapılmadı. Modeli SketchUp'a geri götürmek için Collada (`.dae`) dışa aktarın.

## Desteklenmeyenler

ModelCraft 3DS veya IFC dosyalarını açamaz; 3DS, FBX, STEP, `.3dm` veya SketchUp (`.skp`) dosyalarını kaydedemez.
