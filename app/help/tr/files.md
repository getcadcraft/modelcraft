---
title: Açma, kaydetme, içe aktarma ve dışa aktarma
summary: ModelCraft dosyası, içeri alabilecekleriniz ve dışarı gönderebilecekleriniz, dosyaların gittiği yer ve çevrimdışı ve tarayıcılar arasında nelerin değiştiği.
keywords: aç, kaydet, içe aktar, dışa aktar, dosya, 3dm, skp, kurtar, otomatik kaydet, son kullanılanlar, masaüstü, 3b'de aç, devir, indir, modelcraft dosyası, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, biçimler, çevrimdışı, farklı kaydet
from: 0b4896d1
---

ModelCraft bilgisayarınızdaki dosyaları okur ve yazar. Hiçbir şey yüklenmez: açtığınız dosya tarayıcınızın içinde okunur, kaydettiğiniz dosya bir indirmedir. Bkz. [Dosyalarınızın gittiği yer](common:your-files).

## Biçimlere genel bakış

| Biçim | Aç | İçe aktar | Dışa aktar | Ne için |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | evet | hayır | {{ui:Kaydet}} | Çalışma dosyanız. Her şeyi korur. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | evet | evet | {{ui:Farklı kaydet}}, {{ui:Dışa aktar}} | Render ve sahne birleştirme programları. ModelCraft'ın kendi USD'si her şeyi korur. Bkz. [USD'yi kaydetme, açma ve dışa aktarma](topic:usd). |
| SketchUp (`.skp`) | hayır | evet | hayır | SketchUp'tan model getirmek. Grupları, bileşenleri, renkleri, yüzeylerdeki dokuları, etiketleri ve yumuşak kenarları korur. Bkz. [Bir SKP modeli getirme](topic:import-sketchup-files). |
| Collada (`.dae`) | hayır | evet | evet | Başka 3B modelleyicilerle model alışverişi. Grupları, bileşenleri ve renkleri korur. |
| OBJ (`.obj`) | hayır | evet | evet | Render ve görselleştirme programları. |
| glTF (`.glb`, `.gltf`) | hayır | evet | yalnızca `.glb` | Web görüntüleyicileri, oyun motorları, AR. |
| STL (`.stl`) | hayır | evet | evet | 3B baskı (milimetre cinsinden). |
| PLY (`.ply`) | hayır | evet | evet | Renkli örgüler (mesh): taramalar, renkli baskı. |
| FBX (`.fbx`) | hayır | evet | hayır | Animasyon ve oyun programlarından modeller (FBX 2011 ve daha yenisi). |
| Alembic (`.abc`) | hayır | evet | hayır | Geometri önbellekleri, ilk örnekleriyle. |
| STEP (`.step`, `.stp`) | hayır | evet | hayır | Parça modelleyicilerden ve tedarikçilerden parçalar; gerçek boyutlarında kapalı örgüler olarak. Bkz. [Dosya biçimleri](topic:formats). |
| `.3dm` | hayır | evet | hayır | NURBS modelleri: çoklu yüzeyler, örgüler, eğriler, bloklar ve katmanlar; örgüler, kenarlar, bileşenler ve etiketler olarak. Bkz. [Bir .3dm modeli getirme](topic:import-3dm-files). |
| 3MF (`.3mf`) | hayır | hayır | evet | Renkli 3B baskı (milimetre cinsinden). {{ui:3B baskı için denetle (STL veya 3MF)…}} üzerinden: bkz. [Bir modeli 3B baskıya hazırlama](topic:print-3d). |
| IFC (`.ifc`) | hayır | hayır | evet | BIM programları ve BimCraft. |
| DWG (`.dwg`) | hayır | evet | evet | Üzerinde modelleme yapılacak bir arsa planı veya kat planı; modeli bir CAD programına göndermek. |
| DXF (`.dxf`) | hayır | evet | evet | Aynısı, herhangi bir CAD programı için. |

[Ayrıntılı dosya biçimleri](topic:formats) her biçimin tam olarak neyi koruduğunu ve neyi dışarıda bıraktığını listeler.

## ModelCraft dosyası

Bir `.modelcraft` dosyası modelin tamamını korur: geometri, gruplar, bileşenler, kılavuzlar, sahneler, birimler ve kaydettiğinizde kullandığınız kamera ve stil. Geri alma geçmişini korumaz.

### Bir model açın

1. {{ui:Dosya}} grubunda {{ui:Aç}} seçeneğine tıklayın ya da {{key:Mod+O}} tuşlarına basın.
2. Ekrandaki modelin kaydedilmemiş değişiklikleri varsa ModelCraft sorar: "Bu modelde kaydedilmemiş değişiklikler var. Önce bir kopya kaydedilsin mi?" {{ui:Bir kopya kaydet}}, {{ui:Değişiklikleri at}} veya {{ui:İptal}} seçeneğini seçin.
3. `.modelcraft` dosyasını seçin.

Model, kaydedildiği birimlerde ve kaydedildiği kamerayla açılır. Bir `.modelcraft` dosyasını 3B görünüme de bırakabilir ya da başlangıç kartındaki son dosyalar listesinden birine tıklayabilirsiniz (bir dosyayı yeniden açabilen tarayıcılar ve masaüstü uygulaması).

:::desktop
Masaüstü uygulamasında bir `.modelcraft` dosyasına çift tıklamak onu ModelCraft'ta açar; bir Collada, OBJ, glTF, DWG veya DXF dosyasında **Birlikte aç** de öyle yapar (yeni bir modele içe aktarılır).
:::

### Bir modeli kaydedin

{{ui:Kaydet}} seçeneğine tıklayın ya da {{key:Mod+S}} tuşlarına basın. Tarayıcı `<ad>.modelcraft` dosyasını indirir; ad, açtığınız dosyanın adıdır ya da yeni bir model için "Untitled".

:::desktop
Masaüstü uygulamasında {{ui:Kaydet}}, açtığınız dosyanın üzerine yazar. Yeni bir model nereye kaydedileceğini sorar.
:::

- {{ui:Farklı kaydet}} ({{key:Mod+Shift+S}}) bir kopyayı `.modelcraft` dosyası ya da [USD](topic:usd) olarak kaydeder; tarayıcı yapabiliyorsa adı ve yeri sorar. Aksi hâlde indirilen dosyayı yeniden adlandırın: yeniden adlandırılan dosyayı açtıktan sonraki kayıt yeni adı kullanır.
- Her kaydetme yeni bir indirmedir. Tarayıcının ayarlarına göre doğrudan indirilenler klasörünüze gider ya da nereye kaydedileceğini sorar. O adla bir dosya zaten varsa çoğu tarayıcı `Untitled (1).modelcraft` gibi bir sayı ekler.

:::chromium
Klasörü her seferinde seçmek için tarayıcının ayarlarını açın, "indirmeler" arayın ve "İndirmeden önce her dosyanın nereye kaydedileceğini sor" seçeneğini açın.
:::

:::firefox
Klasörü her seferinde seçmek için **Ayarlar**, ardından **Genel** bölümünü açın ve "Dosya ve Uygulamalar" altında "Dosyaların nereye kaydedileceğini her zaman sor" seçeneğini seçin.
:::

:::safari
İndirmelerin gideceği yeri değiştirmek için **Safari**, ardından **Ayarlar**, ardından **Genel** bölümünü açın ve "Dosya yükleme konumu" ayarını yapın.
:::

### Yeni bir model başlatın

{{ui:Yeni}} seçeneğine tıklayın. Kaydedilmemiş değişiklikler varsa ModelCraft önce sorar. Yeni model boş, bölgenizin biriminde (Amerika Birleşik Devletleri'nde fit ve inç, başka yerlerde milimetre) ve sahnesiz başlar.

### Kaydetmeden tarayıcı kapanırsa

ModelCraft, her değişiklikten birkaç saniye sonra kaydedilmemiş işin bir kopyasını tarayıcınızda tutar. Kaydetmeden sekme veya tarayıcı kapanırsa ModelCraft'ı bir sonraki açışınızda "Çalışmanızı kurtaralım mı?" diye sorar. Kurtarmak modeli olduğu gibi açar, henüz bir dosyaya kaydedilmemiş olarak: saklamak için kaydedin. Bkz. [Çalışmanızı kurtarma](common:recover).

### CadCraft'tan: ModelCraft'ta aç

CadCraft çizim uygulamasında **Görünüm**, ardından **Diğer**, ardından **ModelCraft'ta aç**, açık çizimi DWG olarak yeni bir sekmede ModelCraft'a verir. İçe aktarılan bir DWG gibi gelir: zeminde, bir grubun içinde, üzerinde modellemeye hazır çizgiler olarak. Hiçbir şey yüklenmez; dosya tarayıcınızın kendi depolamasından geçer.

## İçe aktarma

İçe aktarma, açık modele bir dosya ekler; onun yerine geçmez.

1. {{ui:Dosya}} grubunda {{ui:İçe aktar}} seçeneğine tıklayın ya da dosyayı 3B görünüme bırakın.
2. Bir SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG veya DXF dosyası seçin.

   Dosya **tek bir grup** olarak, seçili gelir ve görünüm onu göstermek için yakınlaşır. Durum çubuğu neyin geldiğini söyler ve içe aktarılamayan her şeyi listeler, örneğin "İçe aktarılmadı: 2 doku".

3. Geometrisi üzerinde doğrudan çalışmak için içinde düzenlemek üzere gruba çift tıklayın ya da {{ui:Patlat}} seçeneğine tıklayın.

Bilinmesi gerekenler:

- **Boyut ve yukarı yönü:** Collada dosyaları birimlerini ve hangi eksenin yukarı olduğunu söyler, ModelCraft bunları dönüştürür. glTF her zaman metredir. OBJ dosyaları birim taşımaz: ModelCraft onları metre olarak, Y yukarı olacak şekilde okur. Bir OBJ 1000 kat çok büyük ya da çok küçük gelirse [Ölçekle](topic:rotate-scale) aracını `0.001` veya `1000` gibi bir çarpanla kullanın.
- **DWG ve DXF** yüzey olarak değil, zeminde çizgiler (kenarlar) olarak gelir. Çizim birimini söylemiyorsa "Çizim birimleri" başlıklı bir iletişim kutusu bir çizim biriminin ne olduğunu sorar. Bkz. [Bir arsa planı üzerinde modelleme](topic:site-plan).
- **Sınırlar:** 300 MB'tan büyük dosyalar içe aktarmada, 200 MB'tan büyükler açmada reddedilir. 2 milyondan fazla köşe noktası veya yüzeyi olan dosyalar çok büyük diye reddedilir.

## Dışa aktarma

1. {{ui:Dosya}} grubunda {{ui:Dışa aktar}} seçeneğine tıklayın.
2. Bir biçim seçin: {{ui:glTF ikili (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:Baskı için STL (.stl, milimetre)}}, {{ui:Renkli PLY (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:BimCraft için IFC (.ifc)}}, {{ui:CAD için DWG (.dwg, 2004)}} veya {{ui:CAD için DXF (.dxf, R12)}}.

Tarayıcı dosyayı, modelin adını taşıyarak indirir. Yalnızca seçim değil, modelin tamamı dışa aktarılır. Boş bir model dışa aktarılmaz: "Model boş: önce bir şey çizin." Bkz. [Bir modeli başka programlar için dışa aktarma](topic:export-model).

## Çevrimiçi ve çevrimdışı

ModelCraft'taki her şey bilgisayarınızda çalışır; bu yüzden uygulama bir kez yüklendiğinde modelleme, açma, kaydetme, içe ve dışa aktarma bağlantı olmadan da çalışır.

ModelCraft'ı hiç bağlantı olmadan açmak için çevrimiçiyken çevrimdışı kullanım için kaydedin:

1. Üstteki uygulama çubuğunda {{ui:Çevrimdışı için kaydet}} seçeneğine tıklayın.
2. Düğme kaydederken sayar ("212 dosyadan 40 kaydediliyor"). ModelCraft kendi dosyalarını (aralarında DWG okuyucusu), bu yardımı ve 3B kütüphaneyi kaydeder; bu yüzden biraz sürebilir.
3. Düğme {{ui:Çevrimdışı hazır}} yazdığında ModelCraft aynı adresten bağlantı olmadan açılır ve DWG içe aktarma da çevrimdışı çalışır.

Daha sonra {{ui:Yeniden kaydet (en yeni sürümü al)}} veya {{ui:Çevrimdışı kopyayı kaldır}} için {{ui:Çevrimdışı hazır}} düğmesine tıklayın. Düğme {{ui:Kaydedilemedi}} yazıyorsa bazı dosyalar inmemiştir: bağlantıyı denetleyin ve yeniden denemek için tıklayın. {{ui:Çevrimdışı kullanım yok}} bu tarayıcı penceresinin kopya tutamadığı anlamına gelir (gizli pencereler ve bazı yönetilen bilgisayarlar). Bkz. [Çevrimdışı çalışma](common:offline).

Bulutta kaydetme henüz yok. Her model kaydettiğiniz yerde durur.

:::offline
Çevrimdışısınız. Modellemeye ve kaydetmeye devam edebilirsiniz. Uygulama çubuğunda {{ui:Çevrimdışı hazır}} yazmıyorsa yeniden çevrimiçi olana kadar bu sekmeyi yenilemeyin.
:::

## Masaüstü uygulaması

:::desktop
ModelCraft'ı, sekiz uygulamanın hepsini içeren masaüstü uygulaması CadCraft Studio içinde kullanıyorsunuz. Dosyalar sizin seçtiğiniz yerde açılır ve kaydedilir.
:::

:::web
ModelCraft; Mac, Windows ve Linux'ta tarayıcıda ve getcadcraft.com/download adresindeki tek kurulumda sekiz uygulamanın hepsini içeren masaüstü uygulaması CadCraft Studio içinde çalışır.
:::
