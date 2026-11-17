---
title: Modeli diğer programlar için dışa aktarın
summary: Render, web, 3B baskı, BIM ve BimCraft için doğru dışa aktarmayı seçin ve her birinin neleri koruduğunu kontrol edin.
keywords: yazdır, 3mf, pdf, kâğıt, resim, png, görüntü, ekran görüntüsü, render, görünümü kaydet, dışa aktar, paylaş, rendering, gltf, glb, collada, dae, obj, stl, 3B baskı, ifc, bim, bimcraft, gönder, diğer yazılımlar
from: 9e13e80d
---

Dışa aktarma, modelin bir kopyasını başka bir biçimde oluşturur. `.modelcraft` dosyanızı da saklayın: her şeyi koruyan tek dosya budur ve ModelCraft'ın doğrudan açtığı tek dosya da budur.

## Dışa aktarın

1. Önce kaydedin ({{key:Mod+S}}), böylece çalışma dosyanız güvende olur.
2. {{ui:Dosya}} grubundaki {{ui:Dışa aktar}} düğmesine tıklayın.
3. Biçimi seçin. Tarayıcı, modelin adına benzer bir adla indirir.

Tüm model dışa aktarılır. Bir parçayı dışa aktarmak için kaydedin, geri kalanını silin, dışa aktarın, sonra geri alın ya da yeniden açın.

## Hangi biçim

| Yapmak istediğiniz | Seçin | Notlar |
|---|---|---|
| Başka bir 3B modelleyicide açmak | {{ui:Collada (.dae)}} | Grupları, iç içe grupları, bileşenleri (paylaşımlı, kopyalanmadan), adları ve renkleri korur. Z yukarı, metre. |
| Render etmek ya da bir görselleştirme programında kullanmak | {{ui:OBJ (.obj)}} veya {{ui:glTF binary (.glb)}} | OBJ en yaygın okunan biçimdir; her grup yerleşimini ayrı bir nesne olarak yazar, ancak renk ve paylaşımlı bileşen içermez. glTF bileşenleri ve renkleri korur. |
| Web'e, bir oyun motoruna ya da AR'a koymak | {{ui:glTF binary (.glb)}} | Her şeyi içeren tek bir dosya. |
| 3B olarak yazdırmak | {{ui:3B baskı için denetle (STL veya 3MF)…}} | Modelin kapalı olup olmadığını ve yüzeylerin doğru yöne baktığını denetler, sonra milimetre cinsinden STL ya da 3MF yazar. Bkz. [Modeli 3B baskıya hazırlayın](topic:print-3d). {{ui:Baskı için STL (.stl, milimetre)}} modelin tamamını denetim olmadan yazar. |
| BimCraft ya da başka bir BIM programında açmak | {{ui:BimCraft için IFC (.ifc)}} | Her üst düzey grup ya da bileşen tek bir yapı öğesi olur. |

Durum çubuğu her dışa aktarmayı onaylar; örneğin "House.stl dışa aktarıldı (milimetre)." ya da "House.dae dışa aktarıldı (Collada 1.4.1, Z yukarı, metre; bileşenler paylaşımlı kalır)."

## Dışa aktarmadan önce

- **Nesnelerinizi gruplayın.** Collada, glTF ve IFC grupları ve bileşenleri ayrı nesneler olarak tutar. Serbest geometri tek bir parça olarak çıkar; IFC'de "Serbest geometri" adlı tek bir öğe olur.
- **Adlandırın.** Grup ve bileşen adları Collada ve IFC'ye girer; bu yüzden "Kuzey duvarı" adlı bir duvar, "Kuzey duvarı" olarak ulaşır.
- **Yüzey yönünü kontrol edin.** Dış tarafta mavi-gri görünen yüzeyler, dışa aktarmada içe doğru bakar. Bunları {{ui:Yüzeyi ters çevir}} ile düzeltin (bkz. [Silin ve temizleyin](topic:erase#a-face-facing-the-wrong-way)).
- **Yazdırma için,** parçaların kapalı katılar olmasını sağlayın: her grubu seçin ve {{ui:Öğe bilgisi}} "Katı: Evet" dediğini kontrol edin. Sonra modeli baskı boyutuna ölçekleyin ya da yazıcı yazılımında ölçekleyin.

## Modeli BimCraft'a gönderin

1. Her yapı parçasını bir grup ya da bileşen yapın ve adlandırın.
2. {{ui:Dışa aktar}} seçin, sonra {{ui:BimCraft için IFC (.ifc)}}.
3. İndirilen `.ifc` dosyasını BimCraft'ta açın.

Kavramsal kütle için bunun yerine {{ui:Dışa aktar}} › {{ui:Kütleyi BimCraft'a aktar…}} kullanın: her grup, kat sayıları, kat alanları ve hacmi olan bir kütle seçeneği olarak gider. Bkz. [Kütleyi BimCraft'a gönderin](topic:massing-to-bimcraft).

Düz IFC dışa aktarmasında iki uygulama arasında doğrudan bir bağlantı yoktur. IFC tek bir kata sahiptir ve her öğe, tip ya da özelliği olmayan genel bir yapı öğesi vekilidir: yalnızca şekil ve adı taşır. Kapalı gruplar katı şekillere, açık olanlar yüzeylere dönüşür.

## Yüzeysiz çizgiler

Hiçbir yüzeyin parçası olmayan kenarlar (kılavuz benzeri çizgiler, içe aktarılmış bir arsa planı) OBJ ve Collada'ya çizgi olarak girer. glTF ve STL'nin bunlar için yeri yoktur ve bunları dışarıda bırakır. Kılavuzlar ve sahneler hiçbir biçime dışa aktarılmaz.

## Görünümü resim olarak kaydedin

{{ui:Dışa aktar}} › {{ui:Görünümün resmi (.png)}}, 3B görünümün gösterdiğinin aynısını, ekrandaki boyutunda kaydeder. {{ui:İki kat boyutta resim (.png)}} ise onu iki kat genişlikte ve iki kat yükseklikte kaydeder (baskı ya da keskin bir slayt için); ölçülendirmeler ve işaretler gerilmek yerine bu boyutta yeniden çizilir.

Gün ışığı gibi görünen bir resim için (gökyüzü, güneş, yumuşak gölgeler, cam) bunun yerine {{ui:Dışa aktar}} › {{ui:Resim render et…}} kullanın: bkz. [Resim render et](topic:render).

Temiz bir resim için önce [sunum görünümünü](topic:styles-shadows#presentation-view) açın ({{key:Shift+P}}): eksenler, kılavuzlar, kesit çizgileri ve seçim dışarıda bırakılır. Kamerayı, stili ve gölgeleri istediğiniz gibi ayarlayın ya da bir [sahneye](topic:scenes) geçin; sahnelerinizin hareketli bir filmini kaydetmek için {{ui:Sahneler}} panelindeki {{ui:Animasyonu dışa aktar}} kullanın.

## Görünümü yazdırın veya PDF olarak kaydedin

- {{ui:Dışa aktar}} › {{ui:Görünümün PDF'i (.pdf)}}, tek sayfalık bir PDF kaydeder: görünüm ekran boyutunun iki katında, ölçülendirmeleriyle, A4 sayfada (model feet ve inç cinsindeyse Letter), yatay yönde, altında dosya adını, tarihi ve birimi veren bir çizgiyle.
- {{ui:Dışa aktar}} › {{ui:Görünümü yazdır…}}, aynı sayfayı tarayıcınızın yazdırma iletişim kutusunun önüne koyar. Bir yazıcı seçin ya da "PDF olarak kaydet"i seçin.

Sayfa görünümü olduğu gibi gösterir: perspektif görünümde bir ölçek yoktur. Ölçekli bir çizim için {{ui:Perspektif}} seçeneğini kapatın ve {{ui:Üst}} ya da {{ui:Ön}} görünüşten bakın; önemli ölçüler için [ölçülendirmeler](topic:dimensions) ekleyin. [Sunum görünümü](topic:styles-shadows#presentation-view) eksenleri, kılavuzları ve seçimi dışarıda bırakır; ölçülendirmeler kalır.
