---
title: Sorun giderme
summary: Belirtiler, nedenler ve çözümler; boş bir 3B görünümden yanlış boyutta içe aktarmalara kadar, ModelCraft'ın gösterdiği iletilerle birlikte.
keywords: sorun, hata, çalışmıyor, boş, webgl, grafik, yavaş, ileti, içe aktarma başarısız, yanlış boyut, seçilemiyor, dokunmatik, tuşlar çalışmıyor, kaybolan çalışma
from: 6e7394be
---

## 3B görünüm boş

**Belirti:** ekranın ortası boş kalır ya da yalnızca arka plan rengini gösterir ve araçlara tıklamak hiçbir şey yapmaz.

**Neden:** ModelCraft WebGL 2 ile çizer, tarayıcının 3B grafik özelliği. Tarayıcı eskiyse, donanım hızlandırma kapalıysa ya da grafik sürücüsü engellenmişse bulunmaz.

**Çözüm:**

:::chromium
1. Tarayıcının ayarlarını açın ve "grafik hızlandırma" diye arayın.
2. "Mümkün olduğunda grafik hızlandırmayı kullan" seçeneğini açın ve tarayıcıyı yeniden başlatın.
3. Zaten açıksa, adres çubuğuna `chrome://gpu` yazın (Edge'de `edge://gpu`) ve listede "WebGL2" arayın. Devre dışı yazıyorsa grafik sürücünüzü güncelleyin.
:::

:::firefox
1. **Ayarlar**'ı, sonra **Genel**'i açın ve "Performans"a kadar kaydırın.
2. "Önerilen performans ayarlarını kullan" seçeneğinin işaretini kaldırın, sonra "Mümkün olduğunda donanım hızlandırmayı kullan" seçeneğini işaretleyin. Firefox'u yeniden başlatın.
3. Hâlâ başarısız olursa, adres çubuğuna `about:support` yazın ve "Grafik" bölümünde WebGL 2'ye bakın.
:::

:::safari
macOS ve Safari'yi güncelleyin. Güncel Safari sürümleri WebGL 2'yi her zaman açık tutar. **Safari**, sonra **Ayarlar**, sonra **Gelişmiş** (ya da **Özellik Bayrakları**) altında deneysel özellikleri değiştirdiyseniz, bunları sıfırlayın.
:::

İş bilgisayarında, uzak masaüstünde ya da sanal makinede 3B grafik ilke gereği engellenmiş olabilir. Başka bir bilgisayarı deneyin. Bkz. [Tarayıcılar ve bilgisayarlar](common:browsers).

## Tuşlar çalışmıyor ya da bir kutuya yazıyor

**Neden:** klavye odağı bir panel alanındadır: {{ui:Stil}} içindeki {{ui:Yüzeyler}} listesi, bir güneş ayarı, {{ui:Öğe bilgisi}} içindeki {{ui:Ad}} alanı ya da birim seçici. Harfler ve ok tuşları o alana gider.

**Çözüm:** 3B görünüme tıklayın, sonra tuşa tekrar basın. Bir iletişim kutusu açıkken de tuşlar hiçbir şey yapmaz.

## Bir sayı yazmak hiçbir şey yapmıyor

- **Henüz yön yok.** Yazılan bir uzunluk, ilk tıklamadan işaretçinin gösterdiği yönde gider. İşaretçiyi istediğiniz yönde biraz hareket ettirin, sonra yazın.
- **Yanlış an.** Çoğu araç yalnızca ilk tıklamadan sonra yazılan bir değeri kabul eder: önce ilk köşeye, yüzeye ya da taşınacak noktaya tıklayın. {{ui:Daire}} ve {{ui:Çokgen}} ilk tıklamadan önce kenar sayısını alır.
- **"3m, 10'6" veya 4m,3m gibi bir uzunluk yazın."** ModelCraft okuyamadı. Ondalık virgül (`2,5`) olup olmadığını kontrol edin: nokta kullanın.

## Dokunmatik ekranda bir şekil yanlış yerden başlıyor

**Belirti:** parmakla, ilk dikdörtgen doğru, ama sonraki dikdörtgen, daire ya da çizgi, dokunduğunuz yerde değil, önceki dokunuşunuzun bittiği yerden başlıyor.

**Neden:** bu sürümde bir hata: dokunmatik ekranda araç bir önceki hareketten son yakalama noktasını hatırlar.

**Çözüm:** her yeni şekilden önce araç çubuğundaki aracın düğmesine yeniden dokunun. Bu, aracı sıfırdan başlatır ve ilk nokta dokunduğunuz yere düşer.

## Bir grubu düzenlemek bir başkasını değiştirdi

**Belirti:** {{ui:Taşı}} ve {{key:Ctrl}} ile bir grubu kopyaladınız, kopyalardan birini açıp düzenlediniz, diğeri de değişti. {{ui:Ağaç görünümü}} ikisini de aynı adla gösterir.

**Neden:** bu sürümde bir grubu kopyalamak, bir bileşen gibi aynı grubun ikinci bir yerleşimini oluşturur. ModelCraft'ın {{ui:Tekil yap}} düğmesi yalnızca bileşenler için sunulur.

**Çözüm:** değiştirmek istediğiniz kopyayı seçin, {{ui:Öğe bilgisi}} içinde {{ui:Bileşen oluştur}} öğesine, sonra {{ui:Tekil yap}} öğesine tıklayın. O kopya artık kendi içeriğine sahip olur. Ya da onu {{ui:Patlat}}.

## İt/çek istediğiniz gibi çalışmıyor

- **"İt/çek bir yüzey üzerinde çalışır. Bir yüzeye tıklayın."** Bir kenara ya da boş alana tıkladınız. Yüzey vurgulanana kadar üzerine gelin, sonra tıklayın.
- **Yüzey bir grubun içinde.** Önce grubu açmak için çift tıklayın.
- **Bir pencere duvarı kesmedi.** Dikdörtgen duvarın yüzeyinin üzerine çizilmelidir, önüne değil ve duvarın bir arka yüzü olmalıdır. Bkz. [Bir duvarda açıklık kesmek](topic:openings#if-it-did-not-cut-through).
- **İki kutu birleşmeden üst üste biniyor.** Birbirine itilen katılar bu sürümde birbirini kesmez ya da birleştirmez.

## Bir çizgi ya da şekil yüzey oluşturmadı

Bir yüzey yalnızca kenarlar düz bir döngü kapattığında dolar. Son noktanın ilk noktaya yakalandığını ("Uç nokta") ve tüm kenarların tek bir düzlemde olduğunu kontrol edin. Hafifçe düzlem dışında kalan bir döngü çizgi olarak kalır. Köşelere yakalayarak kenarlarından birini yeniden çizin.

## Bir yüzeyi seçemiyorum ya da silemiyorum

- {{ui:Seç}} ile bir kenara yakın tıklama kenarı alır. Yüzeyin ortasına yakın tıklayın.
- {{ui:Silgi}} yüzeyleri seçmez. Yüzeyi seçin ve {{key:Delete}} tuşuna basın ya da kenarlarından birini silin.
- Yüzey bir grubun ya da bileşenin parçasıysa, tıklama tüm şeyi seçer. Açmak için çift tıklayın.

## "Önce taşınacak bir şey seçin ya da üzerine tıklayın."

{{ui:Taşı}}, {{ui:Döndür}} ve {{ui:Ölçekle}} üzerinde çalışacak bir şeye ihtiyaç duyar: önce seçin, ya da aracı şeyin kendisine tıklayarak başlatın (boş alana ya da bir kılavuza değil).

## "Önce bir geometri seçin (bir pencere sürükleyin ya da bağlı her şeyi seçmek için üç kez tıklayın)."

{{key:G}} ve {{key:Shift+G}} bir seçim ister. Kılavuzlar gruplanamaz.

## Ok tuşları kilitlemek yerine yörüngeyi döndürüyor

Kilitler, bir çizim ya da düzenleme aracının yalnızca ilk tıklamasından sonra çalışır. {{ui:İt/çek}} aracında kilit yoktur ve {{ui:Döndür}} içinde kilitler dönüşü değiştirmez. Diğer zamanlarda ok tuşları görünümü döndürür.

## Tam ekranda Esc

Tam ekranda tarayıcı ilk {{key:Esc}} tuşunu tam ekrandan çıkmak için kullanabilir. Aracı iptal etmek için {{key:Esc}} tuşuna tekrar basın.

## Orta düğme yok

Yörünge için {{key:O}} tuşuna basın ve sürükleyin ya da ok tuşlarını kullanın. Bkz. [Yörünge, kaydırma ve yakınlaştırma](topic:orbit-pan-zoom#without-a-middle-button).

## İçe aktarmalar

| İleti | Ne yapılmalı |
|---|---|
| "ModelCraft SketchUp (.skp), Collada (.dae), OBJ, glTF (.glb/.gltf), FBX, PLY, STL, Alembic (.abc), DWG ve DXF içe aktarır. … bunlardan hiçbiri değil." | Modeli diğer programdan bu biçimlerden birinde dışa aktarın |
| "Bu dosya 300 MB'tan büyük." | Modeli diğer programda sadeleştirin ya da bölün |
| "…ModelCraft ile modellemek için çok büyük (2 milyondan fazla köşe noktası)." | Aynısı |
| "Bu .gltf dosyası "…" gerektiriyor." | `.gltf` dosyasını, `.bin` ve doku dosyalarıyla birlikte bırakın ya da `.glb` sürümünü açın |
| "Bu glTF dosyası ModelCraft'ın henüz okumadığı … eklentisini gerektiriyor." | Diğer programdan o eklenti olmadan yeniden dışa aktarın (örneğin KTX2 dokuları) |
| Bir OBJ renk ya da dokular olmadan gelir | `.obj` dosyasını `.mtl` ve resimleriyle birlikte bırakın |
| "Bu Alembic dosyası eski HDF5 düzenini kullanıyor…" | Diğer programdan Ogawa Alembic dosyası olarak yeniden kaydedin |
| Bir FBX dokular olmadan gelir | `.fbx` dosyasını doku resimleriyle birlikte bırakın ya da dışa aktarırken ortamı gömün |
| "Bu FBX dosyası … sürümünde ve ModelCraft bunu okumaz" | FBX 2011 ya da daha yeni olarak yeniden dışa aktarın |
| Bir STL ya da PLY 1,000 kat büyük ya da küçük gelir | STL milimetre, PLY metre olarak okunur: ölçeklendirin (bkz. [Döndür ve ölçekle](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)) |
| "Bu bir Collada (.dae) dosyası değil…" ya da "…düzgün biçimlendirilmiş XML değil…" | Dosya bozuk ya da Collada değil. Yeniden dışa aktarın |
| "Bu Collada dosyasında ModelCraft'ın içe aktarabileceği geometri yok." | Yalnızca kameralar, ışıklar ya da başka dosyalara başvurular içerir |
| "Bu ikili bir DXF. ASCII DXF olarak kaydedip yeniden deneyin." | CAD programından ASCII olarak yeniden kaydedin |
| "Bu bir DWG çizimi değil…" | Dosya DWG değil ya da bozuk |
| "Bu çizim okunamadı (…). Bozuk olabilir ya da okuyucunun işlemediği bir DWG sürümünde kaydedilmiş olabilir…" | Parantezler nedeni verir. CAD programından DXF olarak ya da AutoCAD 2000'den 2018'e kadar bir DWG olarak kaydedin |
| "Bu çizim, başlangıç noktasından 10,000 km'den fazla uzanıyor…" | CAD programında çizimi 0,0 noktasına yakın taşıyın |

### İçe aktarma yanlış boyutta ya da yan yatmış

- **OBJ:** OBJ'nin birimi yoktur; ModelCraft metre olarak okur. Milimetre modeli 1000 kat büyük gelir: `0.001` ile [ölçeklendirin](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size); inç modelini `0.0254` ile.
- **OBJ yan yatmış:** ModelCraft Y ekseni yukarı olan OBJ dosyalarını bekler. Z ekseni yukarı yazılmış bir dosya yan yatmış gelir. Kırmızı eksen boyunca 90° döndürün: kırmızı boyunca bakan bir yüzeyde {{ui:Döndür}} merkezine tıklayın ya da dosyayı kendi programında açıp Y ekseni yukarı olacak şekilde dışa aktarın.
- **DWG ya da DXF:** "Çizim birimleri" iletişim kutusunda yanlış birimi seçtiniz. Geri alın ve yeniden içe aktarın.

## Dosya açma

| İleti | Ne yapılmalı |
|---|---|
| "Bu dosya bir ModelCraft modeli değil (JSON değil)." | Diğer biçimler için {{ui:İçe aktar}} kullanın |
| "Bu, açabileceğimiz bir ModelCraft dosyası değil: …" | Dosya bozuk ya da elle değiştirilmiş |
| "Bu model daha yeni bir ModelCraft ile kaydedildi…" | Daha yeni sürümde açın |
| "Bu dosya 200 MB'tan büyük." | Model burada açmak için çok büyük |

## Çalışmamı kaybettim

ModelCraft kendiliğinden bir dosyaya kaydetmez. Kaydedilmemiş değişiklikleri olan bir sekmeyi kapatır ya da yeniden yüklerseniz, tarayıcı önce sorar ("Siteden ayrılmak istiyor musunuz?" ya da "Site yeniden yüklensin mi?"); kalmayı seçip kaydedin. Yeni ve Aç da sorar ("Kaydedilmemiş değişiklikler"). Tarayıcı ya da bilgisayar çökerse, aynı tarayıcıda ModelCraft'ı yeniden açın: kaydedilmemiş çalışmayı geri önerir ("Çalışmanızı kurtarın?"; bkz. [Çalışmanızı kurtarın](common:recover)). {{key:Mod+S}} ile sık sık kaydedin.

## İndirilenler klasörüm kopyalarla doluyor

Her kayıt yeni bir indirmedir ve `Untitled (1).modelcraft`, `Untitled (2).modelcraft` gibi adlandırılır. Eskileri silin ya da tarayıcıyı her dosyayı nereye kaydedeceğini sormaya ve eski dosyanın üzerine kendiniz yazmaya ayarlayın. Bkz. [Aç, kaydet, içe aktar ve dışa aktar](topic:files#save-a-model).

## Yavaşlıyor

- Geri almanın her adımı modelin bir kopyasını tutar ([örgü (mesh)](topic:meshes) yalnızca değişeni tutar), bu yüzden çok büyük bir itip çekme geometrisi içe aktarımında her düzenleme daha uzun sürer. Gereksiz olanları patlatın ya da silin, kaydedin ve yeniden açın: yeniden açmak geri alma geçmişini de temizler.
- Güneş gölgeleri en çok maliyeti getirir. Modellerken {{ui:Güneş gölgeleri}} işaretini kaldırın.

## Gölge yok

{{ui:Güneş gölgeleri}} kapalıdır, ya da seçtiğiniz zamanda güneş batmıştır ("Bu saatte güneş batmış durumda."), ya da stil {{ui:Tel kafes}}'tir; bu da gölge çizmez.

## "Bu tarayıcı tam ekrana izin vermedi."

Bazı tarayıcılar ve gömülü görünümler tam ekranı reddeder. Bunun yerine tarayıcının kendi tam ekranını kullanın ({{pick:mac=Control-Command-F|windows linux=F11}}).

## ModelCraft bağlantı olmadan açılmaz

ModelCraft çevrimdışı yalnızca o tarayıcıda çevrimdışı kullanım için kaydedildiyse açılır: uygulama çubuğundaki düğme {{ui:Çevrimdışı hazır}} yazmalıdır. Çevrimiçiyken açın ve {{ui:Çevrimdışı için kaydet}} öğesine tıklayın. Düğme {{ui:Kaydedilemedi}} yazıyorsa, daha iyi bir bağlantıda tekrar tıklayın; {{ui:Çevrimdışı kullanım yok}} bu pencerenin (özel bir pencere ya da yönetilen bir bilgisayar) bir kopya tutamayacağı anlamına gelir. Bkz. [Çevrimdışı çalışma](common:offline).
