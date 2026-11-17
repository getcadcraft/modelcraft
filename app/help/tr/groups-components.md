---
title: Gruplar ve bileşenler
summary: Nesnelerin birbirine yapışmasını önleyin, bir kopyayı düzenleyip hepsini değiştirin ve Ağaç görünümü ile Bileşenler panellerini kullanın.
keywords: grup, bileşen, grup oluştur, bileşen oluştur, patlat, tekil yap, ağaç görünümü, örnekler, kopyalar, blok, iç içe, grubu düzenle, yerleştir
from: 7cb925f3
---

ModelCraft'ta gruplanmamış geometri birbirine yapışır: birbirine değen çizgiler birbirini böler, bir kenarı paylaşan yüzeyler birlikte hareket eder. Bu, yüzeylerin üzerine çizim yapmayı mümkün kılar, ama bir kutunun başka bir kutuya dayanarak çizilmesi halinde iki kutunun birleşmesi anlamına da gelir. **Gruplar** ve **bileşenler** bunları ayrı tutar.

- Bir **grup**, bazı geometrileri sarar ve tek bir nesne gibi davranmasını sağlar. Dışarıdaki hiçbir şey ona yapışamaz.
- Bir **bileşen**, birçok kez yerleştirilebilen bir gruptur. Her kopya aynı içeriği paylaşır: birini düzenleyin, hepsi değişir. Tekrarlanan her şey için bileşen kullanın: pencereler, kolonlar, masalar, ağaçlar.

## Grup veya bileşen oluşturma

1. Geometriyi seçin. Bir yüzeyde üç kez tıklamak bağlı tüm nesneyi seçer; pencere sürüklemesi kutu içindeki her şeyi seçer.
2. Grup için {{key:Shift+G}}, bileşen için {{key:G}} tuşuna basın. Ayrıca araç çubuğunun {{ui:Yönet}} grubundaki {{ui:Grup}} ya da {{ui:Bileşen}} düğmesine, veya {{ui:Öğe bilgisi}} içindeki {{ui:Grup oluştur (Shift+G)}} ya da {{ui:Bileşen oluştur (G)}} seçeneğine tıklayabilirsiniz.

   Durum çubuğu "Group#1 olarak gruplandı." ya da "Component#1 bileşeni oluşturuldu." yazar, yeni nesne seçilir ve {{ui:Ağaç görünümü}} içinde görünür.

3. Adını vermek için {{ui:Öğe bilgisi}} içindeki {{ui:Ad}} alanına bir ad yazın ve {{key:Enter}} tuşuna basın ya da başka yere tıklayın.

Bir yüzey seçmek, kenarlarını da beraberinde getirir. Hiçbir şey seçili değilse durum çubuğu şunu söyler: "Önce biraz geometri seçin (bir pencere sürükleyin ya da bağlı olan her şeyi seçmek için üç kez tıklayın)."

Gruplardan da grup yapabilirsiniz: birkaç grup seçin ve {{key:Shift+G}} tuşuna basın. {{ui:Ağaç görünümü}} iç içe yapıyı gösterir.

:::note
Tuş harfleri SketchUp'ın varsayılanlarıyla eşleşir: {{key:G}} bir bileşen, {{key:Shift+G}} bir grup oluşturur.
:::

## Grup veya bileşen içinde düzenleme

1. Üzerine çift tıklayın (görünümde ya da {{ui:Ağaç görünümü}} içinde) veya seçip {{ui:Öğe bilgisi}} içindeki {{ui:Düzenle}} düğmesine tıklayın.

   Modelin geri kalanı soluklaşır, eksenler grubun kendi eksenlerine geçer ve {{ui:Ağaç görünümü}} "Düzenleniyor: Model › Group#1" yazar. Durum çubuğu "Group#1 düzenleniyor. Esc ya da dışarıya çift tıklama kapatır." der.

2. Normal şekilde çizin, itip çekin, taşıyın ve silin. Yaptığınız her şey grubun içinde kalır.
3. Kapatmak için {{key:Esc}} tuşuna basın (bir şey seçiliyse iki kez), boş alana çift tıklayın ya da {{ui:Ağaç görünümü}} içinde {{ui:Grubu kapat}} seçeneğine tıklayın.

Bir bileşen açıkken her kopyası, siz çalışırken değişir.

## Bileşenin daha fazla kopyasını yerleştirme

- {{ui:Taşı}} ve {{key:Ctrl}} ile kopyalayın (bkz. [Taşı ve kopyala](topic:move-copy)). Her kopya aynı bileşenin başka bir yerleştirmesidir.
- Ya da {{ui:Bileşenler}} panelinde yanındaki {{ui:Yerleştir}} düğmesine tıklayın, sonra gitmesini istediğiniz yere tıklayın. Başlangıç noktası (bileşen oluşturulduğunda seçtiğiniz şeyin çevresindeki kutunun en alt köşesi) tıkladığınız yere gelir. Araç sonra {{ui:Seç}} aracına döner.

{{ui:Bileşenler}} yerleştirilmiş kopya sayısını gösterir ("4×") ve {{ui:Ağaç görünümü}} adın yanında sayıyı gösterir.

## Ağaç görünümünde yeniden düzenleme

{{ui:Ağaç görünümü}} içinde bir satırı sürükleyerek nerede olacağını değiştirin. Görünümde hiçbir şey hareket etmez: bir grup modeldeki yerini korur.

- **Bir grubun içine:** Grubun satırının ortasına bırakın (satır kesikli bir çerçeve alır). Nesne en sona eklenir.
- **Farklı bir sırada:** Bir satırın üst ya da alt kenarına bırakın (orada bir çizgi görünür). Nesne o satırın hemen öncesine ya da sonrasına girer ve o satırla aynı grubun içinde kalır; böylece nesneyi seçtiğiniz bir yerde bir gruba koyabilirsiniz.
- **En üst düzeye çıkarmak:** {{ui:Ağaç görünümü}} başlığına bırakın. En sona eklenir.

Her bırakma tek bir adımdır: {{key:Mod+Z}} onu geri alır. Sürükleme sırasında {{key:Esc}} hiçbir şey bırakmaz. Bir grup kendi içine ya da içinde tuttuğu bir gruba konamaz. {{ui:Ada göre bul}} alanında metin varken sürükleme kapalıdır.

:::touch
Bir satırda bir an parmağınızı basılı tutun, sonra sürükleyin. Hızlı bir kaydırma ise listeyi kaydırır.
:::

## Bir kopyayı farklılaştırma

Kopyayı seçin ve {{ui:Öğe bilgisi}} içindeki {{ui:Tekil yap}} düğmesine tıklayın (bileşen birden fazla yerleştirildiğinde görünür). Bu kopya kendi tanımını alır; orijinal gibi adlandırılır ama yeni bir numarası vardır. Diğerlerine dokunmadan düzenleyin.

## Grubu bileşene çevirme

Grubu seçin ve {{ui:Öğe bilgisi}} içinde {{ui:Bileşen oluştur}} düğmesine tıklayın. Grubu adlandırmış olsanız bile yeni bir ad alır, örneğin Component#2; adı {{ui:Ad}} alanına yeniden yazın.

## Patlatma

Bir grubu ya da bileşeni seçin ve {{ui:Patlat}} düğmesine tıklayın (araç çubuğunda ya da {{ui:Öğe bilgisi}} içinde). İçeriği, bulunduğu yerde serbest geometri olur ve dokunduğu şeylere yapışır. İçindeki gruplar grup olarak kalır.

## Katı ve hacim

Bir grup ya da bileşen seçtiğinizde, yüzeyleri boşluk bırakmadan kapanıyorsa (her kenar tam olarak iki yüzeyle paylaşılıyorsa) ve içinde iç içe grup yoksa {{ui:Öğe bilgisi}} **Katı: Evet** gösterir. Bu durumda **hacmini** de gösterir. Bir kutu, içinden pencere kesilmiş bir duvar ve çekilmiş bir silindir katıdır; üst yüzeyi silinmiş bir kutu değildir.

## Son kopya gittiğinde

Bir bileşenin son kopyasını silmek, onu {{ui:Bileşenler}} panelinden de kaldırır. {{key:Mod+Z}} onu geri getirir.

## Bilmeniz gerekenler

- Taşı ile yapılmış bir **grubun** kopyaları bu sürümde bileşen kopyaları gibi içeriklerini paylaşır: birini düzenlemek diğerlerini değiştirir. Birini bağımsız yapmak için {{ui:Bileşen oluştur}} ve ardından {{ui:Tekil yap}} seçeneğine tıklayın. Bkz. [Sorun giderme](topic:troubleshooting#editing-one-group-changed-another).
- Bileşenler duvarlarda açıklık kesmez ve yüzeylere yapışmaz; hazır bileşen kütüphanesi de yoktur. Kendi bileşenlerinizi oluşturun ya da içe aktarın.
- İçe aktarılan dosyalar grup olarak gelir. Collada dosyaları kendi grup ve bileşenlerini içinde tutar.
