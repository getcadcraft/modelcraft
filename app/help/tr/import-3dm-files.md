---
title: Bir .3dm modelini içe aktarın
summary: Bir .3dm dosyasını örgüleri, yüzeyleri, eğrileri, blokları, katmanları ve renkleriyle içe aktarın; üçgenlerin nereden geldiğini ve neyin dışarıda bırakıldığını görün.
keywords: 3dm, içe aktar, nurbs, çoklu yüzey, brep, yüzeyler, render örgüsü, ekstrüzyon, eğriler, bloklar, katmanlar, etiketler, renkler, birimler, geçiş, taşıma
from: 3cf29879
---

ModelCraft `.3dm` dosyalarını kendi okuyucusuyla, sayfanın içinde okur. Hiçbir şey yüklenmez ve ModelCraft çevrimdışı çalıştığında bu da çevrimdışı çalışır. 5, 6, 7 ve 8 sürüm biçimleriyle kaydedilmiş dosyalar sınandı; eski olanlar (sürüm 2 ila 4) da açılmalı, ama henüz denenmedi.

## Dosyayı içe aktarın

1. {{ui:Dosya}} grubundaki {{ui:İçe aktar}} düğmesine tıklayın (ya da `.3dm` dosyasını 3B görünüme bırakın).
2. Dosyayı seçin.

   Okurken durum çubuğu "chair.3dm okunuyor…" yazar; sonra neyin geldiğini gösterir, örneğin "chair.3dm içe aktarıldı: 14 örgü (8330 yüzey), 8 eğri, 5 blok yerleşimi, 3 katman etiket olarak. Yüzeyler: 7 yüzey dosyada kayıtlı örgülerden, 29 yüzey CadCraft tarafından tesselasyonla."

Tüm model, dosya adını taşıyan tek bir grup olarak gelir, seçili olur ve görünüm ona yakınlaşır. Tek bir {{key:Mod+Z}} hepsini, etiketler dahil, yeniden kaldırır.

## Üçgenler nereden gelir

ModelCraft yüzeyler ve örgülerle modelleme yapar; bu yüzden dosyadaki her yüzey küçük düz üçgenlerden oluşan bir [örgü](topic:meshes) olarak gelir. Bir çoklu yüzeyin (ve her ekstrüzyonun) her yüzü için ModelCraft şu sırayla alır:

1. **Dosyada kayıtlı render örgüsü.** Çoğu modelleme programı, her yüzeyle birlikte ekranda gösterdiği örgüyü kaydeder; varsa ModelCraft onu olduğu gibi kullanır.
2. **Kendi tesselasyonu**, dosyada kayıtlı örgü yoksa: düzlemler, NURBS yüzeyleri, döndürme yüzeyleri (küreler, koniler, simitler, torna şekilleri), ekstrüde edilmiş eğriler ve ekstrüzyonlar (delikleri ve uç kapaklarıyla birlikte), kenarlarıyla kırpılmış. Bir çoklu yüzeyin yüzleri kenar noktalarını paylaşır; bu yüzden kapalı bir çoklu yüzey kapalı bir örgü olarak gelir. Eğri alanlar, üçgenler gerçek yüzeyden nesnenin boyutunun yaklaşık 0.15 %'i içinde kalana kadar bölünür.
3. **Hiçbir şey**, ModelCraft'ın henüz okumadığı bir yüzey türündeki yüzey için. Durum çubuğu kaç yüzey olduğunu ve ne tür olduğunu söyler.

Durum çubuğunun "Yüzeyler:" kısmı, kaç yüzeyin kayıtlı örgülerden geldiğini ve kaçının ModelCraft tarafından tesselasyonla oluşturulduğunu söyler. Dosyadaki bir yüzeyin içindeki kenarlar yumuşak, iki yüzey arasındaki kenarlar keskindir; böylece eğri bir yüzey düzgün gölgelenir.

:::tip
En doğru şekiller için dosyayı, oluşturan programda render örgüleriyle birlikte kaydedin (genellikle varsayılan budur; bir "küçük kaydet" seçeneği bunları dışarıda bırakır).
:::

## Neler gelir

- Tepe noktası renkleri ve doku koordinatlarıyla **örgüler**.
- Yukarıda anlatıldığı gibi **çoklu yüzeyler, yüzeyler ve ekstrüzyonlar**.
- **Eğriler** (çizgiler, çoklu çizgiler, yaylar, daireler, NURBS eğrileri ve bunlardan birleştirilmiş eğriler) katman başına bir kenar grubu olarak [kenar](topic:curves) olur.
- **Bloklar** [bileşen](topic:groups-components) olur: bir bloğun her yerleşimi tek bir bileşenin yerleşimidir; bu yüzden bir kopyayı düzenlemek hepsini değiştirir. Bloklar içindeki bloklar korunur.
- **Katmanlar**, tam adıyla ("Furniture::Chairs") [etiket](topic:tags) olur; katman kapalıysa gizli gelir. Her nesnenin yerleşimi kendi katmanının etiketini taşır.
- **Renkler.** Bir nesnenin rengi dosyanın belirttiği yerden gelir: kendi rengi, katmanının rengi ya da malzemesinin temel rengi. Yüzeylerinin boyası olur.
- **Gizli nesneler gizli gelir**; {{ui:Tümünü göster}} onları gösterir.
- **Birimler:** dosya birimini belirtir; model gerçek boyutunda gelir.

## Neler dışarıda kalır (ve bildirilir)

Durum çubuğunun "Notlar:" kısmı, gelmeyen her şeyi sayılarıyla adlandırır:

- noktalar ve nokta bulutları, metin, metin noktaları, ölçülendirmeler, belirtme çizgileri, taralamalar, ışıklar, kesme düzlemleri ve yerleşim ayrıntıları;
- SubD nesneleri: önce dosyayı oluşturan programda bunları örgülere ya da çoklu yüzeylere çevirin;
- ofsetli yüzeylerdeki yüzler ve ModelCraft'ın henüz okumadığı diğer yüzey türleri, dosya onlar için örgü kaydetmediyse;
- diğer dosyalardan bağlanmış bloklar (yalnızca içe aktardığınız dosya okunur);
- uçları eğik (gönyeli) olan ekstrüzyonlar düz uçlarla gelir.

Malzeme dokuları, render ayarları, adlandırılmış görünümler, gruplar ve kullanıcı metinleri okunmaz; bir malzeme yalnızca temel rengini verir.

## Sınırlar

300 MB'a kadar dosyalar. Bozuk bir dosya neyin yanlış olduğunu söyler ve hiçbir şey eklemez; okunamayan bir nesne dışarıda bırakılır ve sayılır, geri kalanı gelir.
