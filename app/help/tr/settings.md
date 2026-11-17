---
title: ModelCraft ayarları
summary: Bildiğiniz tuş stilini seçin, bir dokunmatik yüzeyle yörüngeye alma ve kaydırmayı kamera düğmeleri olmadan yapın, yakalamayı ve katı çarpışmalarını açıp kapatın.
keywords: ayarlar, tercihler, denetimler, tuş stili, tuş eşlemesi, kısayollar, blender, dokunmatik yüzey, touchpad, kaydırma, yörünge, sıkıştırma, yakalama, çarpışma, çakışma, üst üste binme, kesişme, içinden geçme
from: caf77d5b
---

Ayarları, uygulama çubuğundaki dişli simgesiyle ya da {{key:Mod+,}} ile açın. İlk sekme olan {{ui:ModelCraft}}, bu uygulamaya ait ayarları tutar; {{ui:Genel}} ise her CadCraft uygulamasının ortak kullandığı ayarları (tema, araç çubuğu, paneller) tutar. ModelCraft ayarları yalnızca bu uygulamada geçerlidir: burada değiştirirsiniz ve bu tarayıcı bunları hatırlar.

## Denetimler: hangi tuşlar ve fare düğmeleri

İki tuş stili vardır. Bunları burada, görünümün sağ altındaki {{ui:Tuşlar: İt/çek}} / {{ui:Tuşlar: Modelleyici}} ile ya da araç çubuğunun {{ui:Daha fazla}} menüsünün sonundan değiştirin:

- **İt/çek stili** (başlangıç; SketchUp gibi it/çek modelleyicilerin harfleri): bir harf bir araç seçer — {{key:L}} çizgi, {{key:R}} dikdörtgen, {{key:P}} it/çek, {{key:M}} taşı, {{key:Q}} döndür, {{key:S}} ölçekle, {{key:G}} bileşen oluştur. Bkz. [Tuşlar ve fare işlemleri](topic:keyboard).
- **Modelleyici stili** (Blender gibi örgü modelleyicilerin tuşları): önce seçin, sonra seçime hemen işlem uygulayın. {{key:G}} onu taşır, {{key:R}} döndürür ve {{key:S}} ölçekler; işaretçinin olduğu yerden — ilk tıklama gerekmez. Taşınırken {{key:X}}, {{key:Y}} ya da {{key:Z}} kırmızı, yeşil ya da mavi ekseni kilitler; yazdığınız bir sayı mesafeyi (ya da derecesini, ya da çarpanı) belirler; bir tıklama ya da {{key:Enter}} yerleştirir. {{key:Esc}} ya da sağ tıklama onu eski yerine geri koyar. Sonra {{ui:Seç}} aracına dönersiniz.

Tuş stili, menü stiliyle aynı seçimdir: {{ui:Modelleyici}} tuş stili, {{ui:Modelleyici}} menü stilidir ve birini seçmek ötekini de seçer. Bkz. [Menüler, tuşlar ve fare](topic:menus-keys-and-mouse). Modelleyici tuşlarının tam listesi [Tuşlar ve fare işlemleri](topic:keyboard#modeler-keys) bölümündedir. Araç çubuğundaki ipuçları ve başlangıç kartı seçtiğiniz stili izler.

## Kaydırma: fare tekerleği ya da dokunmatik yüzey

- **Otomatik algıla** (başlangıç): ModelCraft kaydırmayı izler. Dokunmatik yüzeyin gönderdiği gibi yan ya da ince taneli kaydırma yörüngeye alır; tekerleğin tam tık tık hareketleri yakınlaştırır.
- **Fare tekerleği**: kaydırma her zaman işaretçiye doğru yakınlaştırır.
- **Dokunmatik yüzey**: yörüngeye almak için iki parmakla kaydırın, kaydırmak için {{key:Shift}} tuşunu basılı tutup kaydırın, yakınlaştırmak için sıkıştırın. {{ui:Yörünge}}, {{ui:Kaydır}} ya da {{ui:Yakınlaştır}} düğmelerine hiç ihtiyacınız olmaz.

Sıkıştırma her seçenekte yakınlaştırır. "Otomatik algıla" fareniz ya da dokunmatik yüzeyiniz için yanlış tahmin ederse, sahip olduğunuzu seçin.

:::tip
Modelleyici stilinde, {{key:Alt}} tuşunu basılı tutup sürükleyerek de yörüngeye alabilir ve {{key:Alt+Shift}} ile bir sürükleme yaparak kaydırabilirsiniz. Orta düğmesi olmayan bir dizüstü bilgisayarda kullanışlıdır.
:::

## Yakalama

**Noktalara, kenarlara ve eksenlere yakala** (başlangıçta açık) işaretçiyi uç noktalara, orta noktalara, kenarlara, kılavuzlara ve kırmızı, yeşil ve mavi eksenlere çeker — bkz. [Çıkarım](topic:inference). Yakın başka geometrinin yanına bir şeyi zıplamadan serbestçe yerleştirmek istediğinizde kapatın. Yüzeyler, zemin ve eksen kilitleri yakalama kapalıyken de çalışır.

Görünümün sağ altındaki {{ui:Yakalama}} düğmesi bu oturumdaki çalışma için aynısını yapar (o da kaydedilir). Modelleyici stilinde {{key:Shift+Tab}} onu değiştirir.

## Katılar temas ettikleri yerde durur

**Katıları temas ettikleri yerde durdur** (başlangıçta açık), bir duvarın başka bir duvarın içinden sürüklenmesini engeller. {{ui:Taşı}} ile (ve {{key:G}} ile, ve {{key:Mod+D}} ile yapıştır-sonra-taşı ile) seçim diğer katıya kayar ve ona temas ederek durur; {{ui:İt/çek}} ile bir yüzey başka bir katıya çarptığı yerde durur. Bir şeyin üzerinde durmak ve üzerinde kaymak sorun değildir; yalnızca içine geçmek engellenir. Başlarken zaten üst üste olan şeyler yine de birbirinden ayrılabilir.

Bir şeyi bilerek içinden geçirmek için sağ alttaki {{ui:Çarpışma}} düğmesine tıklayın (ya da ayarı kapatın), taşımayı yapın ve düğmeye yeniden tıklayın.

:::note
Çarpışmalar yalnızca taşımalar ve it/çek için denetlenir. {{ui:Döndür}} ve {{ui:Ölçekle}} bunları henüz denetlemez; temas eden gevşek geometri her zaman olduğu gibi birleşir. Ayrı kalması gereken şeyleri [gruplarda](topic:groups-components) tutun.
:::

## 3D yazıcı tablası

Yazıcınızın tablasının boyutu: {{ui:Ayarlanmadı}} (başlangıç), 180 × 180 × 180, 220 × 220 × 250, 256 × 256 × 256 ya da 300 × 300 × 400 mm. Yazıcınızın yapım hacmine en yakın boyutu seçin. [3D yazdırma denetimi](topic:print-3d) bir modelin tablasından büyük olduğunda bunu bildirir; {{ui:Ayarlanmadı}} seçiliyken boyut denetlenmez.

## Yörünge ve kaydırma

**İmlecin altındakine göre yörüngeye al** (başlangıçta açık): yörünge, işaretçinin altındaki model parçası etrafında döner ve kaydırma o noktayı işaretçinin altında tutar; boş alanın üzerinde ikisi de görünümün ortasını kullanır. Her zaman görünümün ortası etrafında yörüngeye almak için kapatın. **Yörünge hızı** ve **Kaydırma hızı** 0.25× ile 3× arasında değişir (başlangıç 1×) ve fareye, dokunmatik yüzeye, dokunmaya ve ok tuşlarına uygulanır. Bkz. [Yörünge, kaydırma ve yakınlaştırma](topic:orbit-pan-zoom).

## Köşe göstergesi

3B görünümün köşesinde görünenler: **Görünüm küpü** (başlangıç; sağ üstte — bir yüzeye, kenara ya da köşeye tıklayarak oradan bakın, yörüngeye almak için sürükleyin, modeli döndürmek için pusula halkasını sürükleyin), **Eksen simgesi** (sol altta, görünümle dönen küçük bir X, Y, Z işareti: X kırmızı, Y yeşil, Z mavi) ya da **Yok**. Bkz. [Görünüm küpü](topic:view-cube).
