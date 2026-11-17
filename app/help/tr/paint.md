---
title: Renk ve malzemelerle boyama
summary: Yüzeylere, gruplara ve bileşenlere düz bir renk ya da tuğla, dış cephe kaplaması, şingıl veya ahşap gibi bir malzeme verin ve dışa aktarırken koruyun.
keywords: boya, renk, malzeme, malzemeler, doku, dokular, tuğla, kaplama, şingıl, çatı kaplaması, ahşap, taş, karo, beton, sıva, çimen, çakıl, cam, metal, boya kovası, dolgu, örnek, damlalık, varsayılan, glb, obj, mtl, collada
from: b1500523
---

Renkler, modelin parçalarını birbirinden ayırt etmenize yardımcı olur; **malzemeler** (tuğla, kaplama, çatı kaplaması, ahşap, taş, karo, beton, sıva, çimen, cam, metal) ise modelin neyden yapıldığına benzemesini sağlar. İkisi de aynı şekilde boyanır.

## Bir renk seçin

{{ui:Renkler}} bölümü sağda, bir sıra düz renk, {{ui:Varsayılan}} (bir çizgiyle çapraz geçilen: renk yok) ve başka herhangi bir renk için bir {{ui:+}} örneği gösterir. Birine tıklayarak onu geçerli renk yapın. Boya aracı onunla başlar.

## Boyama

1. {{key:B}}'ye basın ({{ui:Boya}}) ya da hiçbir şey seçili değilken bir renge tıklayın. (Bir şey seçiliyken bir renge tıklamak seçimi hemen boyar.)
2. Boyamak için bir yüzeye tıklayın.
3. Bu kopyayı boyamak için bir gruba ya da bileşene tıklayın: kendi rengi olmayan yüzeyleri bu rengi alır. İçinde boyadığınız yüzeyler kendi renklerini korur.

Birden çok şeyi aynı anda boyamak için önce onları seçin, sonra bir renge tıklayın ya da bunlardan herhangi birine {{ui:Boya}} ile tıklayın. Bu tek bir geri al adımıdır.

| Basılı tutun | Ardından bir yüzeye tıklayın | Ne boyanır |
|---|---|---|
| — | | Bu yüzey |
| {{key:Ctrl}} | | Ona bağlı, aynı renge sahip her yüzey |
| {{key:Shift}} | | Üzerinde çalıştığınız gruptaki o renkteki her yüzey |
| {{key:Alt}} | | Hiçbiri: bunun yerine o rengi alırsınız |

Bir yüzeyi renksiz hâle getirmek için {{ui:Varsayılan}} seçin ve yüzeye tıklayın.

## Malzemeyle boyama

{{ui:Malzemeler}} bölümü, {{ui:Renkler}} altında, malzeme kütüphanesini türüne göre listeler: tuğla ve blok, dış cephe kaplaması, çatı kaplaması, ahşap, taş, karo, beton, sıva, zemin, cam ve metal. Adını görmek için bir örneğin üzerine gelin. Birine tıklayın, sonra tıpkı bir renkle olduğu gibi boyayın: {{key:B}}'ye basın, yüzeylere, gruplara ya da bileşenlere tıklayın; ya da önce seçin ve malzemeye tıklayın.

- **Gölgeli** stilinde yüzeyler malzemenin dokusunu gösterir. Gizli çizgi, tel kafes ve X-ışını ise onun rengini gösterir.
- Dokular **her yüzeyde yatay** ve **yukarı doğru** akar: tuğla sıraları her duvarda yatay kalır, şingıller bir çatının eğimi boyunca iner, bir zemindeki tahtalar kırmızı eksene uyar. Gerçek boyutlarındadırlar (bir tuğla yaklaşık 215 mm uzunluğundadır), bu yüzden her uzaklıkta doğru görünürler.
- [Render edilmiş bir resimde](topic:render) malzemeler dokularını, pürüzlülüğünü ve cam ile metal için parlaklığını korur.
- {{key:Alt}} tuşuna basılı tutarak {{ui:Boya}} ile tıklamak, bir yüzeyin malzemesini de alır.

Dokular ModelCraft'ın kendisi tarafından çizilir; bu yüzden çevrimdışı çalışırlar ve her amaç için kullanımları serbesttir (CC0).

## Bileşenler ve renkler

Bir bileşenin **içindeki** bir yüzeye boyanan renk her kopyada görünür, çünkü kopyalar tek bir tanımı paylaşır. Bir **kopyaya** dışarıdan (bileşen kapalıyken) boyanan renk yalnızca o kopyaya aittir; bu yüzden bir bileşenin iki kopyası farklı renklere sahip olabilir. {{ui:Öğe bilgisi}}, seçili bir yüzeyin, grubun ya da bileşenin rengini gösterir.

## Dosyalardaki renkler

- ModelCraft dosyası her rengi ve her malzemeyi tutar.
- Diğer biçimler dokunun yerine **malzemenin rengini** (uzaktan görünümünü) alır: glTF, Collada, OBJ, DWG ve DXF ile 3B baskı denetimi. glTF, Collada ve OBJ'de malzeme `Material_brick-red` gibi adını korur.
- **glTF (.glb)** ve **Collada (.dae)**: her renk bir malzeme olur. Farklı renklerde gösterilen bir bileşen her renk için bir kez yazılır. glTF ayrıca içe aktarılmış dokuları doku olarak yazar.
- **OBJ**: dışa aktarma iki dosya indirir: `.obj` ve renkleri içeren bir `.mtl` malzeme dosyası. İkisini aynı klasörde tutun. İçe aktarılmış dokularla birlikte `.obj`, `.mtl` ve resimler tek bir `.zip` olarak gelir.
- **DWG** tam renkleri korur; **DXF** 255 standart CAD renginden en yakın olanı kullanır.
- **STL** ve **PLY** renkleri taşır: STL, VisCAM / SolidView kuralıyla (okumayan programlar onu yok sayar), PLY ise her noktada bir renk olarak. Bkz. [Dosya biçimleri ayrıntılı olarak](topic:formats).

:::tip
Bir ekranı modellemek için ön yüzü [ofsetledikten](topic:draw-faces) sonra çerçeveyi kömür grisi, camı mavi boyayın.
:::
