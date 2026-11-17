---
title: Her özelliği canlandırın, eğriler olarak biçimlendirin ve klipleri karıştırın
summary: Canlandır çalışma alanı bir nesnenin konumunu, dönüşünü ve boyutunu, bir lambanın parlaklığını, yayılımını ve rengini, merceği ve bir örgünün şekil anahtarlarını anahtarlar; iskeletler örgüyü kemiklerle ve boyanmış ağırlıklarla büker; IK ve kısıtlamalar kemiklerin ve nesnelerin ulaşmasını, bakmasını, kopyalamasını, sınırlar içinde kalmasını, asılmasını veya başkasını izlemesini sağlar; katı cisimler düşer, yığılır ve çarpışır ve bake edilerek anahtarlara dönüştürülür; sürücüler bir değeri başkalarından ayarlar; zaman çizelgesinin Eğriler görünümü her değişikliği Bézier tutamaçları ve döngülerle biçimlendirir, Klipler görünümü ise animasyonları eylem olarak kaydeder ve bunları yeniden yerleştirip karıştırmanızı sağlar.
keywords: fizik, katı cisim, katı cisimler, simülasyon, simüle et, düşür, düş, yerçekimi, çarpış, çarpışma, yığ, sıçrama, sürtünme, bake, bake edilmiş, ik, ters kinematik, kısıtlama, kısıtlamalar, bak, izle, konumu kopyala, dönüşü kopyala, dönüşü sınırla, sınırlar, alt öğe, ebeveyn, yolu izle, yol, kutup, zincir, iskelet, rig, riging, kemik, kemikler, iskelet yapısı, ağırlıklar, ağırlık boyama, otomatik ağırlıklar, poz, poz modu, çift kuaterniyon, doğrusal karışım, şekil anahtarları, şekil anahtarı, morf, morf hedefleri, karışım şekilleri, yüz, ifade, sürücü, sürücüler, ifadeler, canlandır çalışma alanı, canlandır, animasyon, anahtar kare, anahtar, anahtarlar, özellik, özellikler, dönüşüm, konum, dönüş, boyut, lamba, ışık, parlaklık, renk, mercek, görüş açısı, fov, grafik düzenleyici, eğriler, eğri, bezier, tutamaçlar, teğet, enterpolasyon, döngü, döngüler, tekrar, ileri geri, ofset, anahtar tablosu, anahtar seç, kutu seç, anahtarları kopyala, anahtarları yapıştır, anahtarları uzat, anahtarları ölçekle, klipler, eylemler, nla, karıştır, karıştırma, etki, durdur
from: 16d8e12f
---

[Zaman çizelgesi](topic:animation) kamerayı ve bütün grupları ile bileşenleri zamana göre hareket ettirir. {{ui:Canlandır}} çalışma alanı bunun ötesinde anahtarlar oluşturur; zaman çizelgesi ise anahtarladığınız şeyleri biçimlendirmek ve yeniden kullanmak için iki görünüm daha kazanır.

## Açın

Araç çubuğundaki çalışma alanı listesinden {{ui:Canlandır}} seçin. Zaman çizelgesi görünümün altında açılır, araç çubuğunda Canlandır grupları ({{ui:Anahtarlar}}, {{ui:Oynat}}, {{ui:Zaman çizelgesi}}) görünür ve sağdaki panel oynatma imlecindeki konumda neyi anahtarlayabileceğinizi listeler.

## Bir özelliği anahtarlayın

Panel, oynatma imlecindeki şunları listeler:

- **Seçili nesne**: {{ui:Yerleştir}}, {{ui:Dönüş (°)}} ve {{ui:Boyut}} alanları, her biri üç sayı. Bir sayı yazıp {{key:Enter}} tuşuna basın: oynatma imlecinde anahtarlanır ve nesne oraya taşınır. Bir satırın yanındaki elmas, değeri o anki haliyle anahtarlar; dolu bir elmas, oynatma imlecinde zaten bir anahtar olduğunu gösterir.
- **Lambalar**: her lambanın {{ui:Parlaklık (lm)}}, {{ui:Yayılım (°)}} (spot lambalar) ve {{ui:Renk}} değerleri.
- **Kamera**: kamera hareket ederken yakınlaştırma için {{ui:Mercek açısı (°)}}.

{{ui:Dönüşümü anahtarla}} ({{key:I}} tuşu ile) seçili her grup veya bileşenin konumunu, dönüşünü ve boyutunu aynı anda anahtarlar; {{ui:Kamera anahtarı}} ({{key:K}} tuşu ile) kamerayı anahtarlar. {{ui:Otomatik anahtar}} açıkken bu şekilde konumu, dönüşü ve boyutu anahtarlanmış bir grubu taşıdığınızda her seferinde yeni bir anahtar alır.

Dönüşler üç açıdır: X, sonra Y, sonra Z etrafında. 180°'nin üzerine anahtarlanan bir dönüş aynı yönde dönmeye devam eder (190° değeri −170° olmaz), böylece bir tekerlek birkaç kez dönebilir.

:::tip
Zaman çizelgesinde {{ui:Seçili anahtar}} ile anahtarlanan bir grubun tam yerleşim anahtarları vardır. Satırındaki eğri düğmesi bunları konum, dönüş ve boyut eğrilerine çevirir (her anahtarda aynı yerleşim olur); böylece bunları {{ui:Eğriler}} içinde biçimlendirebilirsiniz.
:::

## Şekil anahtarları (morflar)

Bir **şekil anahtarı**, aynı [örgünün](topic:meshes) başka bir şeklidir: bir yüzde gülümseme, bir kapının şişkinliği, bükülmüş bir yaprak. Kaydırıcısı, örgüden olduğu haliyle (0) o şekle (1) doğru karışır; birden fazla anahtar toplanır.

1. Canlandır çalışma alanında bir örgü seçin: panel onun {{ui:Şekil anahtarları}} bölümünü gösterir.
2. {{ui:Şekil anahtarı ekle}} düğmesine tıklayın. ModelCraft, düzenlenen yeni anahtarla birlikte [Örgü çalışma alanına](topic:mesh-edit) geçer: noktaları taşıyın, ekstrüzyon uygulayın, şekillendirin; örgüyü istediğiniz şekle dönüştürün.
3. {{ui:Canlandır}} çalışma alanına dönün ve {{ui:Bitti}} tıklayın. Örgü eski haline döner ve anahtar yaptığınız değişikliği tutar.

Sonra anahtarın kaydırıcısını sürükleyin (ya da bir değer yazın) ve karıştırın. Elmas, değeri oynatma imlecinde anahtarlar; böylece bir anahtar zamanla büyüyüp solabilir. Bir izi olduğunda, oynatma imlecinde yeni bir değer anahtarlanır. Kalem anahtarın şeklini yeniden düzenler (örgü {{ui:Bitti}} tıklanana kadar tam olarak gösterir; {{ui:İptal}} anahtarı eski haline bırakır), göz anahtarı kapatır, kutu ise anahtarı kaldırır.

Bir anahtarı düzenlerken eklediğiniz bir nokta örgünün kendisine aittir: yaptığınız yerde kalır, her şekilde.

:::note
Şekil anahtarları, örgüyü [değiştiricilerinden](topic:modifiers) önce hareket ettirir: bir Subdivision değiştiricisi karışan şekli yumuşatır. Render edilmiş resimler ve videolar anahtarları her karede gösterir.
:::

## İskeletler: örgüyü büken kemikler

Bir **iskelet**, bir [örgünün](topic:meshes) içindeki kemikler kümesidir. Kemikleri poz verdiğinizde örgü onları takip eder; her nokta, **ağırlıklarının** dediği kadar hareket eder.

1. Canlandır çalışma alanında örgüyü seçin ve panelde {{ui:İskelet ekle}} tıklayın (ya da {{ui:İskelet}} grubundaki {{ui:Kemik ekle}}): ilk kemik, tabanından örgünün ortasına doğru uzanır.
2. Bir kemik seçiliyken {{ui:Alt kemik ekle}}, sonrakini ucundan ekler. Herhangi bir kemiğin {{ui:Baş}}, {{ui:Uç}}, {{ui:Yuvarlanma (°)}} ve {{ui:Asıldığı yer}} değerlerini panelden ayarlayın; başka bir kemiğe asılı olan kemik onunla birlikte hareket eder. Yalnızca diğerlerini yönlendiren bir kemik için {{ui:Örgüyü hareket ettirir}} seçeneğini kaldırın.
3. {{ui:Otomatik ağırlıklar}} tıklayın: her kemik kendisine en yakın noktaları tutar ve bu tutuş örgü boyunca yumuşakça yayılır; böylece iki kemik arasındaki noktalar bunları paylaşır. {{ui:Yalnızca en yakın kemikler}} daha hızlı ve daha keskin bir bölüşümdür.

**Kemikleri poz verin**: {{ui:Poz}} ({{key:P}} tuşu ile): bir kemiği seçmek için tıklayın, görünümün eksenleri etrafında döndürmek için sürükleyin, taşımak için {{key:Shift}} basılıyken sürükleyin. Ya da {{ui:Poz}} altında {{ui:Yerleştir}}, {{ui:Dönüş (°)}} ve {{ui:Boyut}} değerlerini yazın; dönüşler kemiğin kendi eksenlerindedir ve dinlendiği yerden ölçülür. Elmaslar ve {{ui:Tüm pozu anahtarla}} poz verilmiş durumu oynatma imlecinde anahtarlar; bir kemiğin anahtarı olduktan sonra ona poz vermek orada anahtarlar. {{ui:Bu kemiği sıfırla}} ve {{ui:Pozu sıfırla}} kemikleri dinlenme konumuna döndürür.

**Ağırlıkları boyayın** ({{key:W}} tuşu ile): seçili kemik için örgü dinlenme halinde görünür, her yüzey kemiğin onu ne kadar tuttuğuna göre renklenir: tamamen kırmızı, hiç mavi değil. Tutuşu eklemek için boyayın ({{key:Mod}} onu alır, {{key:Shift}} yumuşatır); {{ui:Boyut (px)}} ve {{ui:Güç}} fırçayı ayarlar. {{ui:Her noktanın ağırlıkları toplamı 1 kalsın}} seçeneğiyle bir kemiğe daha fazla verdiğinizde diğerlerinden aynı miktar alınır. Her vuruş modelin geri al işlemlerinde bir adımdır.

{{ui:Ten}}, kemikler arasındaki bir noktanın nasıl hareket ettiğini seçer: {{ui:Doğrusal (hızlı)}} kemiklerin hareketlerini karıştırır ve bükülmüş bir eklemi biraz sıkıştırır; {{ui:Çift kuaterniyon (eklemlerde hacmi korur)}} ise noktayı eklem etrafında döndürür, böylece bir dirsek ya da diz kalınlığını korur (bir kemiğin {{ui:Boyut}} değeri bu durumda tenin gerilmesine yol açmaz).

:::note
Önce şekil anahtarları gelir, sonra iskelet, sonra [değiştiriciler](topic:modifiers). Görünüm, resimler ve videolar hepsi poz verilmiş örgüyü gösterir; örgünün ağırlıkları onunla birlikte kaydedilir, kemikler ve pozları ise animasyonla birlikte.
:::

## IK ve kısıtlamalar

Bir **kısıtlama**, bir kemiği ya da nesneyi anahtarlarından sonra bir kurala göre hareket ettirir. Nesneyi (ya da bir iskelette kemiği) seçin ve {{ui:… kısıtlamaları}} altına bir tane ekleyin; birden fazlası listelendikleri sırayla çalışır (oklar sırayı değiştirir) ve her birinin {{ui:Ne kadar}} değeri (0 ile 1 arası, herhangi bir özellik gibi elmasıyla anahtarlanır) ve bir aç/kapa anahtarı vardır.

| Kısıtlama | Kimin için | Ne yapar |
|---|---|---|
| {{ui:Uzan (IK)}} | Kemikler | Kemik ve asılı olduğu kemikler ({{ui:Zincirdeki kemikler}}) bükülür, böylece uçları hedefe ulaşır. İki kemik ve bir {{ui:Kutup (büküm ona bakar)}} ile dirsek ya da diz kutba doğru yönelir; daha uzun zincirler düzgünce bükülür. Erişim dışındaysa zincir doğrudan hedefe yönelir. |
| {{ui:Şuna bak}} | İkisi de | {{ui:Gösteren eksen}} hedefe bakacak şekilde döner ve {{ui:Yukarı tutulan eksen}} mümkün olduğunca yukarıya yakın tutulur. |
| {{ui:Dönüşümleri kopyala}} | İkisi de | Hedefin konumunu, dönüşünü veya boyutunu alır — işaretlenenleri. |
| {{ui:Sınırlar}} | İkisi de | Kendi konumunu, dönüşünü (derece) veya boyutunu eksen başına bir {{ui:en az}} ile bir {{ui:en çok}} arasında tutar; bir çiftin alanını boş bırakırsanız o eksen serbest kalır. |
| {{ui:Şunun altı}} | İkisi de | Hedefin altındaymış gibi, seçtiğiniz anda ikisinin bulunduğu yerden hedefle birlikte hareket eder. |
| {{ui:Yolu izle}} | Nesneler | Bir [eğri nesnesi](topic:curves) üzerinde {{ui:Eğri boyunca}} oturur (0 başlangıcı, 1 sonu gösterir; hareket ettirmek için anahtarlayın) ve {{ui:Eğri boyunca dön}} seçeneğiyle onun boyunca yönelir. |

Hedef, açık gruptaki başka bir nesne, aynı iskeletteki bir kemik ya da yazdığınız bir {{ui:Bir nokta}} olabilir (bir nesnenin noktası modelin koordinatlarında, bir kemiğin noktası ise örgüsünün koordinatlarındadır). IK bacağı için, hedefi ayağın olması gereken yere koyun ve hedefi anahtarlayın ya da bacağın anahtarlar arasında IK'ya geçmesi için {{ui:Ne kadar}} değerini anahtarlayın.

:::tip
Bir yolu izleyen bir nesneye bakan bir nesne, onu yolun üzerinde görür: ModelCraft hedefleri nesnelerin sırasından bağımsız olarak önce hesaplar.
:::

## Fizik: düşürün, yığın ve çarpıştırın

Nesnelerin düşmesine ve birbirine çarpmasına izin verin, sonra sonucu anahtar olarak saklayın.

1. Bir grup, bileşen ya da örgü seçin ve {{ui:Fizik}} altında {{ui:Katı cisim}} ayarını yapın: {{ui:Düşer ve çarpışır}} (hareket eder) ya da {{ui:Yerinde durur, yolda engel olur}} (bir masa, duvar, rampa). Düşen bir nesneye {{ui:Şekil}} verin — {{ui:Kutu (sınırları)}} ya da {{ui:Top (sınırlarının çevresi)}} — ve {{ui:Kütle (kg)}}, {{ui:Sürtünme}} ve {{ui:Sıçrama}} değerlerini ayarlayın (0 çarpıp durur, 1 ise aynı yüksekliğe geri sıçrar).
2. {{ui:Modelin tamamı}} altında {{ui:Başlangıç (s)}} ve {{ui:Bitiş (s)}} değerlerini, {{ui:Yerçekimi (m/s², aşağı)}} değerini ve {{ui:Üstüne inilecek bir zemin}} olup olmadığını (ve yüksekliğini) ayarlayın.
3. {{ui:Fiziği bake et}} tıklayın (panelde ya da {{ui:Fizik}} grubunda). Düşen her nesne, iki zaman arasındaki her karede bir konum, dönüş ve boyut anahtarı alır; herhangi bir animasyon gibi oynatın.

Yeniden bake etmek bu anahtarların yerini alır; {{ui:Bake edilmiş anahtarları kaldır}} bunları siler. Nesneler dinlenme halinde başlar: anahtarların, eğrilerin ve kısıtlamaların {{ui:Başlangıç (s)}} anında onları koyduğu yerde (bundan önceki anahtarlanmış hareket düşüşe devam etmez). Daha fazla {{ui:Kare başına adım}} değeri yüksek yığınları daha sabit tutar; durum çubuğu sonunda bir şeyin hâlâ hareket edip etmediğini söyler.

:::note
Şekiller, her nesnenin sınırları çevresindeki kutular ve toplardır; bir kutu köşeleri, kenar orta noktaları ve yüzey orta noktalarıyla temas ettiği için kutular beklediğiniz gibi yığılır ve devrilir. Kumaş, akışkanlar, nesneler arası eklemler ve kesin şekiller henüz yapılmadı.
:::

## Sürücüler

Bir **sürücü**, bir şekil anahtarını elle değil, başka şeylerden ayarlar: bir anahtarın sürücüsünü açın (hesap makinesi düğmesi), bir **ifade** yazın ve içindeki her ada neyi okuyacağını verin ({{ui:Okuduğu}}): saniye cinsinden zaman, kare, bir yerleşimin X, Y veya Z boyunca konumu, dönüşü veya boyutu, bir lambanın parlaklığı ya da başka bir şekil anahtarı. Örneğin, `v` bir kapının Z etrafındaki dönüşünü okuyorsa, `clamp(v / 90, 0, 1)` kapı açılırken bir şekli açar.

İfadelerde sayılar, adlar, `+ - * / % ^` işaretleri ve parantezler kullanılır; ayrıca `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg` fonksiyonları ve `pi` ile `e` sabitleri. Bir hata belirtilir ve hiçbir şeyi değiştirmez. Sürülen bir anahtarın kaydırıcısı sürücünün değerini gösterir; sürücü, siz kaldırana kadar anahtarın izinden önce gelir.

## Anahtarları seçin ve değiştirin (Anahtarlar görünümü)

{{ui:Anahtarlar}} her iz için bir satır gösterir: kamera, hareket eden her grup ve her özellik ("Lamba 2 · Parlaklık (lm)"; özellik anahtarları yuvarlaktır).

- Bir anahtarı seçmek için tıklayın; {{key:Shift}} ile tıklamak ya da {{key:Mod}} ile tıklamak seçime anahtar ekler veya seçimden çıkarır. Satırların üzerinde {{key:Shift}} basılı sürüklemek, içindeki her anahtarı ekleyen bir kutu çizer.
- Hepsini taşımak için seçili bir anahtarı sürükleyin; {{key:Left}} / {{key:Right}} onları bir kare taşır ({{key:Shift}} ile on kare).
- {{key:Mod+C}} seçili anahtarları kopyalar, {{key:Mod+V}} onları oynatma imlecinden aynı izlere yapıştırır (başka bir ModelCraft sekmesi de yapıştırabilir).
- {{ui:Gerilme}} seçili anahtarları, yanındaki sayı kadar oynatma imlecinden uzağa yayar (2 = iki kat uzak; 0.5 onları yaklaştırır).
- Kolaylaştırma listesi, seçili her anahtarın bir sonrakine nasıl geçtiğini ayarlar.

## Eğrileri biçimlendirin (Eğriler görünümü)

{{ui:Eğriler}}, her sayının zamana göre grafiğidir: zaman yatay, değer dikey. Soldaki listede göstermek istediğiniz eğrileri işaretleyin (X, Y ve Z kırmızı, yeşil ve mavidir).

- Bir anahtarı (bir kare) seçmek için tıklayın, daha fazlası için {{key:Shift}} ile tıklayın ya da bir kutu sürükleyin. Seçili bir anahtarı sürükleyerek zamanını ve değerini değiştirin; birden fazla seçiliyse sürükleme onları zamanda birlikte taşır.
- Seçili bir anahtar iki **tutamaç** gösterir. Eğrinin o tarafını biçimlendirmek için birini sürükleyin. {{ui:Tutamaçlar}} davranışlarını belirtir: {{ui:Otomatik}} (çevresindeki anahtarlardan geçen düzgün bir eğri), {{ui:Sonraki anahtarı gösteren}}, {{ui:Hizalı}} (ikisi düz bir çizgide kalır, böylece eğrinin köşesi olmaz) ya da {{ui:Serbest}}.
- {{ui:Seçili anahtarlardan}}, seçili her anahtarın bir sonrakine nasıl geçtiğini ayarlar: {{ui:Eğri (tutamaçlar)}}, {{ui:Yumuşat}}, {{ui:Sabit}}, {{ui:Yavaş başlayıp yavaşlayan}} ya da {{ui:Beklet}}.
- {{ui:Öncesi}} ve {{ui:Sonrası}}, bir eğrinin anahtarlarının dışında ne yapacağını ayarlar: {{ui:Beklet}} (ilk ya da son değerde kalır), {{ui:Tekrar}}, {{ui:İleri geri}} ya da {{ui:Tekrar ve devam et}} (her tekrar bir öncekinin bittiği yerden başlar: bir tekerlek dönmeye devam eder, bir yürüyen yürümeye devam eder).
- Tekerlek yakınlaştırır ({{key:Mod}}: yalnızca değerler; {{key:Shift}}: yalnızca zaman); orta tuşla ya da {{key:Alt}} ile sürükleyerek kaydırın; {{ui:Tümünü göster}} ya da {{key:Home}} gösterilen her eğriyi sığdırır. Boş alana tıklamak oynatma imlecini oraya taşır. {{key:Delete}} seçili anahtarları siler.

Tutamaçlar zamanda birbirini geçmeyecek şekilde tutulur, böylece bir eğri asla geriye gitmez.

## Animasyonları yeniden kullanın (Klipler görünümü)

Bir **klip**, kayıtlı bir animasyonu (bir **eylem**) zaman çizelgesinde oynatır. Klipler sırayla karıştırılır; alttaki satırlar üsttekilerin üzerine gelir ve zaman çizelgesinin kendi izleri her kliptin üstündedir.

1. Grupları ve lambaları her zamanki gibi anahtarlayın, sonra {{ui:Klipler}} içinde {{ui:Klip yap}} tıklayın ve eyleme bir ad verin. İzler eyleme dönüşür ve klip, izlerin bulunduğu yerde onu oynatır (kamera zaman çizelgesinde kalır).
2. Yeniden kullanmak için eylemi seçin ve {{ui:Klip ekle}} tıklayın: yeni bir klip oynatma imlecinde başlar.
3. Bir klibi satırı boyunca sürükleyerek taşıyın; {{ui:Başlangıç (s)}}, {{ui:Hız}} (2 = iki kat hızlı), {{ui:Tekrar}}, {{ui:Ne kadar}} (0 ile 1 arası), {{ui:Karıştırma}} ({{ui:Değiştir}} ya da önündeki kliplerin {{ui:Üstüne ekle}}), {{ui:Klibin dışında}} (hiçbir şey, sonunu tut ya da iki ucunu tut) ve {{ui:Sessize al}} ayarları için tıklayın. Oklar sırayı değiştirir; kutu onu kaldırır (artık hiçbir klip kullanmayan bir eylem onunla birlikte gider).

{{ui:Ne kadar}} tam değerinden düşük olan bir klip, altındakilerle karışır: önündeki klip ya da animasyon olmadan olduğu haliyle lamba veya yerleşim.

## Ne nerede oynar

| Ne | Görünümde | İşlenmiş bir videoda |
|---|---|---|
| Kamera anahtarları, kamera anahtarlarıyla birlikte mercek açısı | Evet | Evet |
| Konum, dönüş ve boyut (anahtarlar, eğriler, klipler) | Evet | Evet |
| Lamba parlaklığı, yayılımı ve rengi | Evet | Henüz değil: video başladığında lambaların olduğu haliyle kullanır (bkz. [henüz yapılmayanlar](topic:not-built-yet)) |
| Kamera anahtarı olmadan mercek açısı | Evet | Henüz değil: kamerayı da anahtarlayın |
| Şekil anahtarları ve sürücüler | Evet | Evet |
| İskeletler (poz verilmiş örgüler) | Evet | Evet |
| IK ve kısıtlamalar | Evet | Evet |
| Bake edilmiş fizik (anahtarlar) | Evet | Evet |

Her şey, animasyonun geri kalanıyla birlikte `.modelcraft` dosyasına kaydedilir; zaman çizelgesinin {{ui:Geri al}} ve {{ui:Yinele}} işlemleri bunların hepsini geri alabilir.
