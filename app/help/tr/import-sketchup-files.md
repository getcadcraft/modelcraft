---
title: Bir SKP modelini içe aktarın
summary: Bir .skp dosyasını grupları, bileşenleri, renkleri, dokuları, etiketleri ve yumuşak kenarlarıyla içe aktarın; neyin geldiğini ve neyin gelmediğini görüp modellemeye devam edin.
keywords: skp, içe aktar, skp aç, bileşenler, gruplar, etiketler, katmanlar, malzemeler, renkler, dokular, gizli, yumuşak kenarlar, 3D Warehouse, geçiş, değiştirme
from: 325d3c81
---

ModelCraft `.skp` dosyalarını (SketchUp dosyaları) kendi okuyucusuyla, sayfanın içinde okur. Hiçbir şey yüklenmez ve ModelCraft çevrimdışı çalıştığında bu da çevrimdışı çalışır. SketchUp 3'ten 2026'ya kadar olan dosyalar sınandı.

## Dosyayı içe aktarın

1. {{ui:Dosya}} grubundaki {{ui:İçe aktar}} düğmesine tıklayın (ya da `.skp` dosyasını 3B görünüme bırakın).
2. Dosyayı seçin.

   Okurken durum çubuğu "house.skp okunuyor…" yazar; sonra neyin geldiğini gösterir, örneğin "house.skp içe aktarıldı (SketchUp 25.0.575): 1240 yüzey, 6 bileşen, bir grup içinde."

Tüm model, dosya adını taşıyan tek bir grup olarak gelir, seçili olur ve görünüm ona yakınlaşır. Tek bir {{key:Mod+Z}} hepsini, etiketler dahil, yeniden kaldırır.

:::tip
İçe aktarılan grubun içeriğini tek bir grup içinde değil de modelinizde serbest olarak istediğinizde, grubu {{ui:Öğe bilgisi}} › {{ui:Patlat}} ile patlatın.
:::

## Neler gelir

- **Yüzeyler**, delikleriyle birlikte, ve bir yüzeyin parçası olmayan **kenarlar**.
- **Gruplar** grup olarak, **bileşenler** bileşen olarak gelir: bir bileşenin her kopyası tek bir tanımın yerleşimidir; bu yüzden bir kopyayı düzenlemek, SketchUp'taki gibi hepsini değiştirir. Adları da birlikte gelir.
- **Renkler.** Bir yüzeyin kendi malzemesi onun rengini verir. Bir grup ya da bileşene boyanmış bir malzeme, o yerleşimin boyası olur; kendi rengi olmayan içindeki yüzeyler bu rengi alır, SketchUp'taki gibi. Bir bileşen bir yerde kırmızı, başka bir yerde mavi boyanmışsa yine tek bir bileşen olarak kalır.
- **Dokular.** Dokulu bir malzemeyle boyanmış bir yüzey, dosyadaki gibi yüzeye yerleşmiş dokusuyla gelir ve {{ui:Gölgeli}} stili bunu gösterir. Kaydettiğinizde görüntü ModelCraft dosyasında tutulur ve [render edilmiş bir resim](topic:render) de bunu gösterir. Bütün bir gruba ya da bileşene boyanmış dokulu bir malzeme, o kopyaya yalnızca malzemenin rengini verir.
- **Etiketler.** SketchUp etiketinde olan bir grup ya da bileşen, aynı adda bir ModelCraft etiketi alır; {{ui:Etiketler}} içinde listelenir ve SketchUp'taki gibi gösterilir ya da gizlenir. Modelinizde bu adda bir etiket zaten varsa o etiket kullanılır.
- **Gizli şeyler gizli gelir:** yüzeyler, kenarlar, gruplar ve bileşenler ile gizli bir etikette olan yüzeyler ve kenarlar. SketchUp'ın gösterdiğini görürsünüz ve hiçbir şey kaybolmaz: {{ui:Düzenle}} › {{ui:Daha fazla}} › {{ui:Tümünü göster}} onları gösterir. Bkz. [Gizle, izole et ve göster](topic:hide-isolate).
- **Yumuşak ve düzgün kenarlar** yumuşak kalır; böylece eğri yüzeyler yine düzgün görünür.
- **Boyutlar** her birimde doğru çıkar: SketchUp dosyaları içeride inç cinsindendir ve ModelCraft bunları çevirir.

## Gelmeyen şeyler

Durum çubuğu neyin dışarıda bırakıldığını sayılarıyla söyler.

- **Bazı dokular** yalnızca malzemelerinin rengini tutar: dosyada eksik bir doku, tarayıcıların gösteremediği bir biçimde resim (Photoshop dosyası gibi) ya da boyutu olmayan bir doku. Yansıtılmış dokulu yüzeyler, dokuyu yaklaşık olarak yerleştirerek gelir.
- **Serbest yüzeyler ve kenarlardaki etiketler.** ModelCraft yalnızca grupları ve bileşenleri etiketler; bu yüzden kendi etiketi olan bir yüzey ya da kenar etiketsiz gelir ve durum çubuğu bunları sayar. Bu tür yüzeyleri bir gruba çevirin ({{key:Shift+G}}) ve grubu etiketleyin.
- Modele yerleştirilmiş **resimler**, metin, ölçülendirmeler, kılavuzlar, kesit düzlemleri, sahneler ve stiller.

## Sorunlar

- "Bu bir SketchUp dosyası değil." ya da "Bu SketchUp dosyası bozuk: …": dosya kesik ya da `.skp` adlı başka bir şeydir. SketchUp'tan yeniden kaydedin ya da yeni bir kopya isteyin.
- ModelCraft'ın bildiğinden daha yeni bir SketchUp sürümünden gelen dosya, bulunan sürümüyle birlikte reddedilir.
- Yalnızca resimlerden, metinden ya da ölçülendirmelerden oluşan bir model gösterecek bir şey olmadığını bildirir.

## Modeli geri taşıyın

ModelCraft `.skp` dosyalarını kaydedemez. Collada ({{ui:Dışa aktar}} › `.dae`) dışa aktarın ve SketchUp'ta içe aktarın: gruplar, bileşenler ve renkler aktarılır; dokular malzemelerinin rengi olarak gider. Bkz. [Modelinizi dışa aktarın](topic:export-model).
