---
title: Aç, kaydet, içe aktar ve dışa aktar
summary: ModelCraft dosyası, içeri alabileceğiniz ve dışarı gönderebileceğiniz dosyalar, dosyaların nereye gittiği ve çevrimdışı kullanımda ile tarayıcılar arasında neyin değiştiği.
keywords: aç, kaydet, içe aktar, dışa aktar, dosya, 3dm, skp, kurtar, otomatik kaydet, son kullanılanlar, masaüstü, 3B'de aç, devir, indir, modelcraft dosyası, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, biçimler, çevrimdışı, farklı kaydet
from: 3f09ab72
---

ModelCraft, dosyaları bilgisayarınızda okur ve yazar. Hiçbir şey yüklenmez: açtığınız bir dosya tarayıcınızın içinde okunur, kaydettiğiniz bir dosya ise bir indirmedir. Bkz. [Dosyalarınızın nereye gittiği](common:your-files).

## Biçimlere genel bakış

| Biçim | Aç | İçe aktar | Dışa aktar | Ne için kullanılır |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | evet | hayır | {{ui:Kaydet}} | Çalışma dosyanız. Her şeyi saklar. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | evet | evet | {{ui:Farklı kaydet}}, {{ui:Dışa aktar}} | Oluşturma ve sahne birleştirme programları. ModelCraft'ın kendi USD dosyası her şeyi tutar. Bkz. [USD dosyalarını kaydet, aç ve dışa aktar](topic:usd). |
| SketchUp (`.skp`) | hayır | evet | hayır | SketchUp'tan modeller getirmek. Grupları, bileşenleri, yüzeylerdeki renkleri ve dokuları, etiketleri ve yumuşak kenarları korur. Bkz. [Bir SKP modeli içe aktarma](topic:import-sketchup-files). |
| Collada (`.dae`) | hayır | evet | evet | Diğer 3B modelleyicilerle model alışverişi. Grupları, bileşenleri ve renkleri korur. |
| OBJ (`.obj`) | hayır | evet | evet | Oluşturma ve görselleştirme programları. |
| glTF (`.glb`, `.gltf`) | hayır | evet | yalnızca `.glb` | Web görüntüleyicileri, oyun motorları, AR. |
| STL (`.stl`) | hayır | evet | evet | 3B baskı (milimetre cinsinden). |
| PLY (`.ply`) | hayır | evet | evet | Renkli örgüler: taramalar, renkli baskı. |
| FBX (`.fbx`) | hayır | evet | hayır | Animasyon ve oyun programlarından modeller (FBX 2011 ve daha yenisi). |
| Alembic (`.abc`) | hayır | evet | hayır | Geometri önbellekleri, ilk örneklerinde. |
| STEP (`.step`, `.stp`) | hayır | evet | hayır | Parça modelleyicilerinden ve tedarikçilerden parçalar; gerçek boyutlarında, kapalı örgüler olarak. Bkz. [Dosya biçimleri](topic:formats). |
| `.3dm` | hayır | evet | hayır | NURBS modelleri: çokyüzeyler, örgüler, eğriler, bloklar ve katmanlar; örgü, kenar, bileşen ve etiket olarak. Bkz. [Bir .3dm modelini içe aktarma](topic:import-3dm-files). |
| 3MF (`.3mf`) | hayır | hayır | evet | Renkli 3B baskı (milimetre cinsinden). {{ui:3B baskı için denetle (STL veya 3MF)…}} seçeneğinden: bkz. [Bir modeli 3B baskıya hazırlama](topic:print-3d). |
| IFC (`.ifc`) | hayır | hayır | evet | BIM programları ve BimCraft. |
| DWG (`.dwg`) | hayır | evet | evet | Üzerinde modelleme yapacağınız bir arazi planı ya da kat planı; modeli bir CAD programına göndermek. |
| DXF (`.dxf`) | hayır | evet | evet | Aynısı, herhangi bir CAD programı için. |

[Dosya biçimleri ayrıntılı olarak](topic:formats), her biçimin neyi koruyup neyi bıraktığını tam olarak listeler.

## ModelCraft dosyası

Bir `.modelcraft` dosyası modelin tamamını saklar: geometriyi, grupları, bileşenleri, kılavuzları, sahneleri, birimleri ve kaydettiğinizde kullandığınız kamera ile stili. Geri al geçmişini saklamaz.

### Bir model açın

1. {{ui:Dosya}} grubundaki {{ui:Aç}} düğmesine tıklayın ya da {{key:Mod+O}}'ya basın.
2. Ekrandaki modelin kaydedilmemiş değişiklikleri varsa ModelCraft sorar: "Bu modelin kaydedilmemiş değişiklikleri var. Önce bir kopya kaydedilsin mi?" {{ui:Bir kopya kaydet}}, {{ui:Değişiklikleri at}} veya {{ui:İptal}} seçeneğini seçin.
3. `.modelcraft` dosyasını seçin.

Model, kaydedildiği birimlerle ve kaydedildiği kamerayla açılır. Bir `.modelcraft` dosyasını 3B görünümün üzerine de sürükleyip bırakabilir ya da başlangıç kartındaki son kullanılanlar listesinden bir dosyaya tıklayabilirsiniz (dosyayı yeniden açabilen tarayıcılarda ve masaüstü uygulamasında).

:::desktop
Masaüstü uygulamasında bir `.modelcraft` dosyasına çift tıklamak onu ModelCraft'ta açar. Collada, OBJ, glTF, DWG veya DXF dosyasında **Birlikte aç** de aynısını yapar; dosya yeni bir modele içe aktarılır.
:::

### Bir modeli kaydedin

{{ui:Kaydet}} düğmesine tıklayın ya da {{key:Mod+S}}'ye basın. Tarayıcı `<name>.modelcraft` dosyasını indirir; burada ad, açtığınız dosyanın adıdır ya da yeni bir model için "Untitled" adıdır.

:::desktop
Masaüstü uygulamasında {{ui:Kaydet}}, açtığınız dosyaya olduğu yerde yazar. Yeni bir model nereye kaydedileceğini sorar.
:::

- {{ui:Farklı kaydet}} ({{key:Mod+Shift+S}}) bir `.modelcraft` dosyası ya da [USD](topic:usd) olarak bir kopya kaydeder; tarayıcı destekliyorsa ad ve yer sorar. Aksi halde indirilen dosyayı yeniden adlandırın: adını değiştirdiğiniz dosyayı açtıktan sonraki ilk kayıt yeni adı kullanır.
- Her kayıt yeni bir indirmedir. Tarayıcının ayarlarına bağlı olarak dosya doğrudan indirilenler klasörüne gider ya da nereye kaydedileceği sorulur. Aynı adda bir dosya zaten varsa çoğu tarayıcı `Untitled (1).modelcraft` gibi bir numara ekler.

:::chromium
Her seferinde klasörü seçmek için tarayıcının ayarlarını açın, "indirilenler" diye arayın ve "Her dosyayı indirmeden önce nereye kaydedileceğini sor" seçeneğini açın.
:::

:::firefox
Her seferinde klasörü seçmek için **Ayarlar**, sonra **Genel** bölümünü açın ve "İndirmeler" altında "Dosyaları nereye kaydedeceğimi her zaman sor" seçeneğini seçin.
:::

:::safari
İndirmelerin nereye gideceğini değiştirmek için **Safari**, sonra **Ayarlar**, sonra **Genel** bölümünü açın ve "Dosya indirme konumu" ayarını yapın.
:::

### Yeni bir model başlatın

{{ui:Yeni}} düğmesine tıklayın. Kaydedilmemiş değişiklikler varsa ModelCraft önce sorar. Yeni model boş başlar, yerel biriminizde (Birleşik Devletler'de fit ve inç, başka yerlerde milimetre) ve sahnesiz olur.

### Kaydetmeden önce tarayıcı kapanırsa

ModelCraft, her değişiklikten birkaç saniye sonra tarayıcınızda kaydedilmemiş çalışmanın bir kopyasını tutar. Kopya arka planda yazılır, bu yüzden büyük bir model sizi bekletmez. Kaydetmeden önce sekme ya da tarayıcı kapanırsa, ModelCraft'ı bir dahaki açışınızda "Çalışmanızı kurtarın?" diye sorar. Kurtarmak modeli, henüz bir dosyaya kaydedilmemiş olarak, olduğu gibi açar: korumak için kaydedin. Bkz. [Çalışmanızı kurtarın](common:recover).

### CadCraft'tan: ModelCraft'ta aç

CadCraft çizim uygulamasında **Görünüm**, sonra **Daha fazla**, sonra **ModelCraft'ta aç** açık çizimi yeni bir sekmede bir DWG olarak ModelCraft'a verir. Bu, içe aktarılmış bir DWG gibi gelir: zeminde çizgiler, bir grup içinde, üzerinde modelleme yapmaya hazır. Hiçbir şey yüklenmez; dosya tarayıcınızın kendi depolama alanından geçer.

## İçe aktarma

İçe aktarma, açık modelinize bir dosya ekler; onu değiştirmez.

1. {{ui:Dosya}} grubundaki {{ui:İçe aktar}} düğmesine tıklayın ya da dosyayı 3B görünümün üzerine bırakın.
2. Bir SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG veya DXF dosyası seçin.

   Dosya **tek bir grup** olarak gelir, seçili olur ve görünüm onu gösterecek şekilde yakınlaşır. Durum çubuğu neyin geldiğini söyler ve içe aktarılamayan şeyleri listeler, örneğin "İçe aktarılmadı: 2 doku".

3. Geometrisi üzerinde doğrudan çalışmak için grubun içine girmek üzere grubu çift tıklayın ya da {{ui:Patlat}} seçeneğine tıklayın.

Bilmeniz gerekenler:

- **Boyut ve yukarı yönü:** Collada dosyaları birimlerini ve hangi eksenin yukarı olduğunu belirtir; ModelCraft bunları dönüştürür. glTF her zaman metredir. OBJ dosyaları birim taşımaz: ModelCraft bunları Y ekseni yukarı olacak şekilde metre olarak okur. Bir OBJ 1000 kat fazla büyük ya da küçük gelirse, `0.001` ya da `1000` gibi bir çarpanla [Ölçekle](topic:rotate-scale) kullanın.
- **DWG ve DXF** yüzeyler olarak değil, zemin üzerinde çizgiler (kenarlar) olarak gelir. Çizim birimi belirtilmemişse "Çizim birimleri" başlıklı bir iletişim kutusu, bir çizim biriminin ne olduğunu sorar. Bkz. [Bir arazi planı üzerinde modelleme](topic:site-plan).
- **Sınırlar:** içe aktarma için 300 MB'tan büyük dosyalar, açma için 200 MB'tan büyük dosyalar reddedilir. 2 milyondan fazla köşe noktası ya da yüzeyi olan dosyalar çok büyük olduğu için reddedilir. 64 MB'tan büyük bir OBJ okunmadan reddedilir. Metin dosyaları (Collada, OBJ, ASCII STL, USD metin) yaklaşık 4 MB'lık parçalar hâlinde okunur; bu yüzden hiçbir metin bloğu tüm dosyayı tutmaz. Test ettiğimizde 16 MB'lık bir OBJ açılırken yaklaşık 0.5 GB bellek kullandı.

## Dışa aktarma

1. {{ui:Dosya}} grubundaki {{ui:Dışa aktar}} düğmesine tıklayın.
2. Bir biçim seçin: {{ui:glTF ikili (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:Baskı için STL (.stl, milimetre)}}, {{ui:Renkli PLY (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:BimCraft için IFC (.ifc)}}, {{ui:CAD için DWG (.dwg, 2004)}} ya da {{ui:CAD için DXF (.dxf, R12)}}.

Tarayıcı dosyayı, modelle aynı adla indirir. Modelin tamamı dışa aktarılır, yalnızca seçim değil. glTF, Collada ve OBJ dosyaları arka planda yazılır; büyük bir model dışa aktarılırken ModelCraft çalışmaya devam eder ve indirme dosya hazır olunca başlar. Boş bir model dışa aktarılmaz: "Model boş: önce bir şey çizin." Bkz. [Modeli diğer programlar için dışa aktarma](topic:export-model).

## Çevrimiçi ve çevrimdışı

ModelCraft'taki her şey bilgisayarınızda çalışır; bu nedenle uygulama yüklendikten sonra modelleme, açma, kaydetme, içe aktarma ve dışa aktarma bağlantı olmadan da çalışır.

ModelCraft'ı hiç bağlantı olmadan açmak için, çevrimiçiyken çevrimdışı kullanım için kaydedin:

1. Üstteki uygulama çubuğunda {{ui:Çevrimdışı için kaydet}} düğmesine tıklayın.
2. Düğme, kaydederken sayar ("40 / 212 kaydediliyor" gibi). ModelCraft kendi dosyalarını (DWG okuyucusu dahil), bu yardım konusunu ve 3B kütüphaneyi kaydeder; bu yüzden biraz zaman alabilir.
3. Düğme {{ui:Çevrimdışı hazır}} yazdığında ModelCraft aynı adresten, bağlantı olmadan açılır ve DWG içe aktarma da çevrimdışı çalışır.

Daha sonra {{ui:Çevrimdışı hazır}} düğmesine tıklayıp {{ui:Yeniden kaydet (en yeni sürümü al)}} ya da {{ui:Çevrimdışı kopyayı kaldır}} seçeneklerini kullanın. Düğme {{ui:Kaydedilemedi}} yazıyorsa bazı dosyalar indirilememiştir: bağlantıyı kontrol edin ve yeniden denemek için tıklayın. {{ui:Çevrimdışı kullanım yok}} ise bu tarayıcı penceresi bir kopya tutamaz (gizli pencereler ve bazı yönetilen bilgisayarlar). Bkz. [Çevrimdışı çalışma](common:offline).

Bulut kaydetme henüz yapılmadı. Her model, kaydettiğiniz yerde durur.

:::offline
Çevrimdışısınız. Modellemeye ve kaydetmeye devam edebilirsiniz. Uygulama çubuğunda {{ui:Çevrimdışı hazır}} yazmadığı sürece, yeniden çevrimiçi olana kadar bu sekmeyi yenilemeyin.
:::

## Masaüstü uygulaması

:::desktop
Sekiz uygulamanın tümünün bulunduğu masaüstü uygulaması CadCraft Studio içinde ModelCraft'ı kullanıyorsunuz. Dosyalar, sizin seçtiğiniz yerde açılır ve kaydedilir.
:::

:::web
ModelCraft, Mac, Windows ve Linux'ta tarayıcıda çalışır; ayrıca getcadcraft.com/download adresinden edinebileceğiniz, sekiz uygulamanın tümünün tek bir kurulumda bulunduğu masaüstü uygulaması CadCraft Studio içinde de çalışır.
:::
