---
title: Bir örgü, grup ya da bileşendeki değiştiriciler
summary: Bir örgüyü değiştirmeden ölçekleyin, aynalayın, dizin, yumuşatın, pah kırın, kesin ve bükün; bir grubu ya da bileşeni aynı yığınla tekrarlayın ya da ölçekleyin; hazır olduğunda kalıcı hâle getirin.
keywords: değiştirici, değiştiriciler, yığın, grup, bileşen, ölçekle, bake, kaynağı düzenle, yıkıcı olmayan, ayna, dizi, radyal dizi, alt bölümleme, alt bölümlü yüzey, yumuşat, pah kır, katılaştır, kalınlık, boolean, kes, yer değiştir, gürültü, kaynat, azalt, basitleştir, kafes, kafes kutusu, eğri ile biçimlendir, bük, sarmala, uygula
from: dd5ec1cb
---

Bir **değiştirici**, bir örgünün kendisini değiştirmeden neyi gösterdiğini değiştirir. Bir parçanın yarısını aynalayın ve yalnızca o yarısını modelleyin; bir kutuyu bir alt bölümlü yüzeyle yuvarlayın ve kutuyu düzenlemeye devam edin. Değiştiriciler bir **yığın** içinde durur ve yukarıdan aşağıya sırayla çalışır. Gördüğünüz, dışa aktardığınız, yazdırdığınız ve render ettiğiniz şey, açık olan her değiştiriciyle birlikte örgünün kendisidir.

## Değiştirici ekleyin

1. Bir örgü seçin. Model çalışma alanında **Değiştiriciler** bölümü {{ui:Öğe bilgisi}} içindedir; Örgü çalışma alanında ise sağdaki panelde.
2. {{ui:Değiştirici ekle…}} seçeneğinden birini seçin. Yığının en altına gider.
3. Adının altındaki ayarları değiştirin. Uzunluklar Değer kutusundaki değerleri alır; yani `600mm`, `2'6"` ve `(6m)/4` hepsi çalışır.

Her değişiklik tek bir geri alma adımıdır: {{key:Mod+Z}} onu geri alır.

## Her değiştiricideki düğmeler

- Onay kutusu onu açar ya da kapatır.
- Ekran düğmesi onu görünümde gösterir ya da gizler (yığında kalır).
- Kamera düğmesi onu render edilmiş resimlerde ve videolarda gösterir ya da gizler; böylece bir değiştirici yalnızca render'lar için (ya da yalnızca görünüm için) olabilir.
- Oklar onu yığında yukarı ya da aşağı taşır. Sıra önemlidir: önce ayna, sonra alt bölümleme pürüzsüz bir dikiş verir; önce alt bölümleme, sonra ayna vermez.
- {{ui:Uygula}} şekli örgünün parçası yapar: bunun üstündeki değiştiriciler ve bu değiştirici örgünün kendisine uygulanır ve yığından çıkar. Tek bir geri alma adımıdır.
- Çarpı onu kaldırır.

## Değiştiriciler

| Değiştirici | Ne yapar |
| --- | --- |
| Ölçekle | Nesnenin orijininin etrafında ölçekler; kırmızı, yeşil ve mavi için bir çarpan. Bir grup ya da bileşende de. |
| Ayna | Örgünün orijininden geçen kırmızı, yeşil ya da mavi eksen boyunca aynalanmış bir kopya ekler ve yarıların buluştuğu yerde birleştirir. |
| Dizi | Bir çizgide kopyalar (kendi boyutunun, verdiğiniz sayılarla çarpılmış bir adımı ve sabit bir adım), bir eksen etrafında ya da modeldeki bir eğri boyunca. Bir grup ya da bileşen çizgiyi alır. |
| Alt bölümlü yüzey | Catmull-Clark alt bölümlemesiyle örgüyü yumuşatır. Keskin kenarlar keskin kalır. Render'lar görünümden daha fazla seviye kullanabilir. |
| Pah kır | Verdiğiniz açıdan daha keskin her kenarı yuvarlar. |
| Katılaştır | Bir yüzeye kalınlık verir ve kenarını kapatır. |
| Boolean | Modeldeki başka bir nesneyle örtüşmeyi keser, birleştirir ya da tutar. İkisinin de kapalı katılar olması gerekir. |
| Yer değiştir | Yüzeyi pürüzsüz gürültüyle içeri ya da dışarı taşır. Aynı tohum her seferinde aynı tümsekleri verir. |
| Kaynat | Belirli bir mesafeden yakın köşe noktalarını birleştirir. |
| Azalt | Üçgenlerin bir kısmını tutar; şekli en az değiştirenleri kaldırır. |
| Yumuşat | Köşe noktalarını komşularına doğru gevşetir. |
| Kafes | Örgüyü bir kafes kutusuyla büker: kafesin noktalarını taşıyın, örgü izler. |
| Eğri ile biçimlendir | Örgüyü modeldeki bir eğri boyunca, kırmızı, yeşil ya da mavi yönünde büker. |
| Sarmala | Her köşe noktasını başka bir nesnenin en yakın noktasına taşır. |

## Bir grup ya da bileşende

Bir grup ya da bileşen de bir tarif tutabilir; böylece bir lambanın abajuru, bir abajurun {{ui:Ölçekle}} ve {{ui:Dizi}}'si olabilir ve bir sayıyı değiştirmek lambayı değiştirir.

1. Bir grup ya da bileşen seçin. {{ui:Öğe bilgisi}} içindeki **Değiştiriciler** bölümü yığını listeler (başta boştur).
2. {{ui:Değiştirici ekle…}} içinden {{ui:Ölçekle}} ya da {{ui:Dizi}} seçin. Grup, yığın tarafından yerleştirilen **orijinal** olan bir bileşene dönüşür. Orijinal korunur: onu düzenleyin, her kopya hemen izler.
3. Ölçek, kırmızı, yeşil ve mavi için bir çarpan alır (`1, 1, 2` yüksekliği iki katına çıkarır). Dizi, kopya sayısını, o ana kadarki sonucun boyutunun bir payı olarak bir adımı ve uzunluk cinsinden ek bir adımı alır.

Yığın, orijinalin kendi eksenleri üzerinde orijininin etrafında yukarıdan aşağıya çalışır; bu yüzden sıra önemlidir: 3 m aralıklı üç kopyalık bir dizi, sonra kırmızıda 2 ölçek, kopyaları 6 m aralıklı koyar; önce ölçek, sonra dizi onları 3 m aralıklı tutar. Onay kutusu, oklar ve çarpı bir örgüdeki gibi çalışır; bir değiştiricideki görünüm ve kamera düğmeleri ile Uygula çalışmaz, çünkü bir gruptaki yığın tek bir şeydir.

- {{ui:Kaynağı düzenle}} orijinali yerinde açar. Değişiklikler her kopyada görünür; kapatınca kaldığınız yere dönersiniz.
- {{ui:Değiştiricileri bake et}} sonucu düz kenarlar ve yüzeyler yapar ve yığını kaldırır; tek bir geri alma adımında. Üst üste binen kopyalar ayrı geometri olarak kalır: Bake bir birleşim değildir.
- Bileşenin kopyaları tarifi paylaşır; {{ui:Tekil yap}} onu ayırır (orijinal paylaşılmış kalır).
- Yığın dosyada saklanır, kopyalama ve yapıştırma ile geri almayla taşınır; kullanılmayanları temizlemek orijinali korur. Değiştiricileri bilmeyen bir program yine de kopyaları gösterir.
- Bake'e kadar sonuç girilemez, patlatılamaz, yeniden boyutlandırılamaz ya da gerdirilemez: bir sonraki değişiklikte yeniden kurulurdu. Her biri bunu söyler.
- Sınırlar 32 değiştirici ve 1.000 kopyadır. Gerdirilmek üzere yapılmış bir bileşen (Gerdir) ve bir yığın henüz bir tanımı paylaşamaz.

## Alt bölümlü yüzey

Alt bölümleme bir örgüyü Catmull-Clark ile yumuşatır: her yüzey dört kenarlı yüzeylere dönüşür ve her seviye dört kat daha fazla yüzey yapar. İki ya da üç seviyeli bir kutu zaten yuvarlak bir şekil gibi okunur ve kutuyu düzenlemeye devam edersiniz.

- **Görünümdeki seviyeler** ne kadar pürüzsüz olacağını belirler.
- **Render'lardaki seviyeler** render edilmiş resimlerin ve videoların ne kadar pürüzsüz olacağını belirler; render'lar görünümden daha fazla seviye kullanabilir.
- **Render'lar gerçek pürüzsüz yüzey üzerinde** bir render edilmiş örgünün noktalarını, seviyelerin yöneldiği sınır yüzeyine koyar; bu yüzden iki seviye bile çoğu kadar pürüzsüz render edilir.
- **Keskinlikler** kenarları keskin tutar: Örgü çalışma alanında kenarları seçin ve {{ui:Keskin çizgi}} kullanın (1 keskin kalır, 0,5 az yuvarlanır, 0 pürüzsüzdür). Bkz. [Bir örgüyü düzenleme](topic:mesh-edit).
- **Büyük bir örgüde görünüm seviyesini düşürün:** istediğiniz seviyeler bu bilgisayarın görünümde iyi işleyebileceğinden daha fazla yüzey verirse, görünüm daha düşük bir seviye gösterir ve bunu söyler. {{ui:Uygula}} her zaman her seviyeyi kullanır. Kaç yüzey olacağı, {{ui:Ayarlar}} › Render › Makineniz bölümündeki makine sınıfınıza göre belirlenir.
- Açık sınırlar köşelerini tutar ve kenarlarının çizgisinde kalır.

## Bir kafes kafesiyle bükün

1. Bir {{ui:Kafes}} değiştiricisi ekleyin ve {{ui:Mesh'in etrafına bir kafes kafesi ekle}} seçeneğine tıklayın. Örgünün etrafında tellerle çizilmiş 3 × 3 × 3 noktalık bir kafes belirir.
2. Kafesi Örgü çalışma alanında açın (üzerine çift tıklayın) ve noktalarını taşıyın. Örgü pürüzsüzce izler.

:::tip
Bir kafes da başka herhangi bir örgü gibidir: işiniz bittiğinde etiketiyle gizleyin.
:::

## Büyük örgüler

Küçük yığınlar hemen hesaplanır. Büyük olanlar bilgisayarınızın her çekirdeğinde arka planda hesaplanır: görünüm yeni sonuç hazır olana kadar son sonucu göstermeye devam eder. Boolean'lar katı modelleyiciyi ilk kullanımda yükler; görünüm bunu bir an için söyler.

## Değiştiricilerin henüz yapamadıkları

- Köşe noktası başına ağırlıklar (örgüye boyanmış bir azalma) Yer değiştir, Yumuşat ve Sarmala için.
- Ölçek ve doğrusal Dizi dışındaki değiştiriciler, it/çek geometrisinde (gruplar ve bileşenler): önce örgüye çevirin ({{ui:Örgüye dönüştür}}). Gruplarda Ayna, yuvarlak ya da eğri Dizi, Bük ve Konik daha sonra gelecek.
