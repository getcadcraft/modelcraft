---
title: Kamerayı ve nesneleri canlandırın ve video render edin
summary: Kamera ile grupların ve bileşenlerin anahtarlarını bir zaman çizelgesinde ayarlayın, görünümde oynatın ve animasyonu renderlayıcının gökyüzü, güneş ve malzemeleriyle bir WebM videosuna render edin.
keywords: animasyon, canlandır, zaman çizelgesi, anahtar kare, anahtarlar, kamera yolu, uçuş, uçuş geçişi, adım adım rehber, yürüyüş, video, film, webm, video render et, kareler, kare hızı, fps, oynatma imleci, otomatik anahtar, kolaylaştır, yumuşat, beklet, sahneler, png dizisi, hareket
from: d3a58249
---

**Zaman çizelgesi**, kamerayı ve herhangi bir grubu veya bileşeni zaman içinde hareket ettirir. **Anahtarlar** ayarlarsınız (bir şeyin belirli bir andaki yeri); ModelCraft onu anahtardan anahtara yumuşakça hareket ettirir. Görünümde oynatın, sonra [bir render edilmiş resimle](topic:render) aynı gökyüzü, güneş, malzemeler ve lambalarla bir videoya render edin.

## Zaman çizelgesini açın

{{ui:Kamera}} grubundaki {{ui:Görünümler}} tıklayın, sonra {{ui:Animasyon zaman çizelgesi}}. Zaman çizelgesi görünümün altında açılır: üstte denetimler, ardından bir **Kamera** satırı ve hareket eden her grup ya da bileşen için bir satır. Elmaslar anahtarlardır; kırmızı çizgi **oynatma imlecidir**, yani görünümde gösterilen an.

:::touch
Telefonda zaman çizelgesi yine görünümün altında açılır. Denetimleri tek satırdır: diğerlerine ulaşmak için yana kaydırın; zaman çizelgesini kapatan düğme sonunda kalır.
:::

Kaydırıcıyı sürükleyin (ya da bir satırda tıklayın) oynatma imlecini taşımak için. {{ui:Oynat}} oynatma imlecinden başlatır ve oynarken {{ui:Duraklat}} olur; durdurmak için yeniden tıklayın, bulunduğu yerde durur. Zaman çizelgesi açıkken {{key:Space}} aynı işi yapar (zaman çizelgesi kapalıyken Space hâlâ Seç'tir). {{ui:Önceki anahtar}} ve {{ui:Sonraki anahtar}} anahtarlar arasında atlar. Kendi stiliniz oynat ve duraklat için başka bir tuş verebilir: {{ui:Ayarlar}}, sonra menüler, tuşlar ve fare, *Animasyonu oynat veya duraklat* komutu.

## Kamerayı hareket ettirin

1. Oynatma imlecini çekimin başladığı yere (0 s) taşıyın, görünümü ayarlayın ve {{ui:Kamera anahtarı}} tıklayın.
2. Oynatma imlecini daha sonraya taşıyın (diyelim 4 s), görünümü yörüngede döndürün, kaydırın ya da yürüyerek bir sonraki konuma geçirin ve yeniden {{ui:Kamera anahtarı}} tıklayın.
3. İstediğiniz kadar anahtar ekleyin, sonra {{ui:Oynat}}.

Kamera her anahtarın içinden yumuşakça geçer ve dinlenme halinde başlayıp biter.

:::tip
Zaten [sahneleriniz](topic:scenes) var mı? {{ui:Sahnelerden}} bunlardan kameranın yolunu oluşturur: her sahnede bekler, sonra bir sonrakine geçer. Zaman çizelgesinde hiç anahtar yoksa {{ui:Video render et…}} bunu kendiliğinden yapar, bu yüzden bir yürüyüş videosu için iki ya da daha fazla sahne yeterlidir.
:::

## Bir grubu veya bileşeni hareket ettirin

1. Grubu veya bileşeni seçin (yalnızca bütün gruplar ve bileşenler hareket eder; önce [bir grup oluşturun](topic:groups-components)).
2. 0 s'de {{ui:Seçili anahtar}} tıklayın.
3. Oynatma imlecini daha sonraya taşıyın, grubu olması gereken yere [taşıyın, döndürün veya ölçekleyin](topic:move-copy) ve yeniden {{ui:Seçili anahtar}} tıklayın.

Anahtarları arasında kayar, döner ve büyür. Dönüşler kısa yoldan döner.

**Otomatik anahtar**, 3. adımdaki tıklamayı atlatır: {{ui:Otomatik anahtar}} açıkken, seçili bir grup ya da bileşeni taşıdığınızda, döndürdüğünüzde veya ölçeklediğinizde oynatma imlecinde kendiliğinden bir anahtar alır (ve ilk seferde, nesnenin olduğu yerde 0 s'de bir anahtar daha).

:::note
Anahtarı olmayan hareketli bir grup, oynatma imleci hareket edene kadar kalır: bir dahaki oynatmada ya da kaydırmada anahtarlarının koyduğu yere döner. Durum çubuğu bunu belirtir. Bunu korumak için {{ui:Seçili anahtar}} tuşuna basın.
:::

## Anahtarları değiştirin

- Elmasına tıklayarak bir **anahtar seçin**: oynatma imleci ona gider.
- Satırı boyunca elmasını sürükleyerek bir anahtarı **taşıyın**, ya da {{key:Left}} ve {{key:Right}} ile (bir kare; {{key:Shift}} ile on kare).
- Seçili bir elmasta {{ui:Anahtarı sil}} (seçili anahtar ya da oynatma imlecindeki her anahtar) veya {{key:Delete}} ile **silin**.
- Seçili anahtar için **nasıl ilerlediği**: {{ui:Yumuşat}} (çevresindeki anahtarlardan geçen bir eğri), {{ui:Sabit}} (tek hızda düz bir çizgi), {{ui:Yavaş başlayıp yavaşlayan}} (bu anahtarda durur) ya da {{ui:Beklet}} (bir sonraki anahtara kadar yerinde kalır).
- **Uzunluk (s)** animasyonun ne kadar süreceğini belirler; sonundan sonra ayarlanan bir anahtar onu uzatır. Kısaltmak için önce sonun ötesindeki anahtarları taşıyın ya da silin.
- Bir grubun satırındaki **×** onun animasyonunu durdurur.

Zaman çizelgesinin kendi {{ui:Geri al}} ve {{ui:Yinele}} işlemleri vardır: modelin geri alma işlemi ({{key:Mod+Z}}) modeli değiştirir, anahtarları değil. Animasyon `.modelcraft` dosyasına kaydedilir. Zaman çizelgesini kapatmak hareket eden grupları ilk pozlarına döndürür.

## Videoyu render edin

1. Zaman çizelgesinde {{ui:Video render et}} tıklayın (ya da {{ui:Dışa aktar}} › {{ui:Video render et…}}).
2. {{ui:Boyut}}, {{ui:Kare hızı}}, {{ui:Her karenin kalitesi}} ve {{ui:Dosya}} seçeneklerini seçin.
3. {{ui:Video render et}} tıklayın. Her kare yapıldıkça, kalan süreyle birlikte görünür.
4. Bittiğinde {{ui:Videoyu kaydet}} tıklayın.

{{ui:Durdur}} ({{key:Esc}} de olur) erken bitirir; {{ui:Videoyu kaydet}} bu durumda şimdiye kadar yapılan kareleri daha kısa bir video olarak tutar.

Gökyüzü, güneş, malzemeler, lambalar ve parlaklık, {{ui:Resim render et…}} içinde ayarlananlardır: önce orada ayarlayın, durağan bir resimle kontrol edin. Her kare bu bilgisayarda render edilir; hiçbir şey yüklenmez.

| Ayar | Ne yapar |
|---|---|
| {{ui:Boyut}} | 480p, 720p HD, 1080p Full HD ya da görünümün kendi şekli (en fazla 1920 piksel genişlik) |
| {{ui:Kare hızı}} | Saniyede 24, 25, 30 ya da 60 kare. Iki kat kare iki kat süre alır |
| {{ui:Her karenin kalitesi}} | {{ui:Hızlı}} (4 geçiş), {{ui:Taslak}} (16) ya da {{ui:İyi}} (64): daha fazla geçiş gölge ve kenarları daha yumuşak yapar |
| {{ui:Dosya}} | {{ui:WebM videosu}}, tarayıcının yazabildiği yerde {{ui:MP4 video (H.264)}}, ya da video düzenleyiciler için (ve video kodlayıcısı olmayan tarayıcılar için) {{ui:PNG resimleri, kare başına bir tane (ZIP)}} |

:::tip
30 kare/saniye hızında 10 saniyelik bir video 301 karedir. Önce 480p'de {{ui:Hızlı}} ile hareketi kontrol edin, sonra daha büyük bir boyutta {{ui:Taslak}} ya da {{ui:İyi}} ile render edin.
:::

WebM tarayıcılarda ve VLC'de oynar; video düzenleyiciler onu dönüştürür. {{ui:MP4 video (H.264)}}, tarayıcının yazabildiği yerde sunulur. {{ui:Video render et}} hızlı render edicisini kullanır; her kareyi yol izleme ile render etmek için aynı pencerede {{ui:Bu animasyonu kuyruğa ekle}} seçin: kareler [render kuyruğunda](topic:render#the-render-queue) render edilir, bu da WebGPU gerektirir.

:::firefox safari
Video render etmek, videoyu kendisi kodlayan bir tarayıcı gerektirir (WebCodecs): güncel Chrome, Edge, Firefox ve Safari 17 bunu yapar. Yoksa {{ui:PNG resimleri, kare başına bir tane (ZIP)}} seçin.
:::

## Bilmeniz gerekenler

- Yalnızca bütün gruplar ve bileşenler hareket eder. Yüzeyler, kenarlar, güneşin saati ve stil henüz zamanla değişmez.
- [Sahneler](topic:scenes) altındaki {{ui:Animasyonu dışa aktar}} hâlâ görünümü ekranda olduğu gibi, gerçek zamanlı kaydeder; {{ui:Video render et}} ise her kareyi gökyüzü, gölgeler ve malzemelerle render eder.
