---
title: ModelCraft ekranı
summary: Araç çubuğuna, her iki yandaki panellere, 3B görünüme ve durum çubuğuna ekrandaki adlarıyla bir bakış.
keywords: ekran, düzen, araç çubuğu, paneller, ağaç görünümü, öğe bilgisi, stil, sahneler, durum çubuğu, değer kutusu, birimler, arayüz, tur
from: 4a9a4516
---

Yukarıdan aşağıya: uygulama çubuğu, araç çubuğu, üç sütun (sol paneller, 3B görünüm, sağ paneller) ve durum çubuğu.

## Uygulama çubuğu

En üstteki ince çubuk her CadCraft uygulamasına aittir. Uygulama adı ve sürümü, {{ui:ModelCraft hakkında}}, ekran kipi düğmesi ve {{ui:Kâğıt}} / {{ui:Model}} anahtarı vardır.

- {{ui:Kâğıt}} açık temadır, {{ui:Model}} koyu olandır. 3B görünüm renklerini buna göre değiştirir; modeliniz değişmez.
- Ekran kipi düğmesi (başta {{ui:Tam ekran}} yazar) ve {{key:Ctrl+Shift+F}} üç kip arasında dolaşır: normal, tam ekran ve çubukları gizli tam ekran. Çubuklar gizliyken onları geri getirmek için ekranın üst kenarını gösterin (veya dokunun). {{key:Esc}} tam ekrandan çıkar.

:::note
{{key:Ctrl+Shift+F}} Mac dahil her bilgisayarda Control tuşunu kullanır. Tarayıcılarda tam ekranın olmadığı iPhone'da düğme yalnızca çubukları gizler ve gösterir.
:::

## Araç çubuğu

Araç çubuğu etiketli gruplara bölünmüştür. Adını ve tuşunu görmek için bir düğmenin üzerinde bekleyin.

Sol tarafta, {{ui:Çalışma alanı}} listesi araç çubuğunun ve sağ panelin ne için olduğunu değiştirir: {{ui:Model}} (it/çek modelleme, aşağıdaki tur), {{ui:Mesh}} ([bir örgüyü düzenleme](topic:mesh-edit)), {{ui:Eğri}} ([eğri nesneleri](topic:curves)), {{ui:UV}} ([UV'leri yerleştirme](topic:uv)), {{ui:Heykel}} ([heykel yapma](topic:sculpt)), {{ui:Gölgelendirme}} ([düğümlerle yapılan malzemeler](topic:shading)), {{ui:Canlandır}} ([canlandırma](topic:animate)) ve {{ui:Render}} ([görünümde render](topic:render#render-in-the-view)).

| Grup | Düğmeler |
|---|---|
| Dosya | {{ui:Yeni}}, {{ui:Aç}}, {{ui:Kaydet}}, {{ui:İçe aktar}}, {{ui:Dışa aktar}} (biçimlerin menüsü) |
| Çizim | {{ui:Çizgi}} ({{key:L}}), {{ui:Dikdörtgen}} ({{key:R}}), {{ui:Daire}} ({{key:C}}), {{ui:Çokgen}} ({{key:N}}) |
| Değiştir | {{ui:Seç}} ({{key:Space}}), {{ui:İt/çek}} ({{key:P}}), {{ui:Taşı}} ({{key:M}}), {{ui:Döndür}} ({{key:Q}}), {{ui:Ölçekle}} ({{key:S}}), {{ui:Silgi}} ({{key:E}}), {{ui:Şerit metre}} ({{key:T}}) |
| Yönet | {{ui:Bileşen}} ({{key:G}}), {{ui:Grup}} ({{key:Shift+G}}), {{ui:Patlat}} |
| Düzenle | {{ui:Geri al}} ({{key:Mod+Z}}), {{ui:Yinele}} ({{key:Mod+Y}}), {{ui:Kopyala}} ({{key:Mod+C}}), {{ui:Yapıştır}} ({{key:Mod+V}}), {{ui:Daha fazla}} (bir menü: kes, kopyala, yapıştır, olduğu yere yapıştır {{key:Mod+Shift+V}}, çoğalt {{key:Mod+D}}, sil, tümünü seç, seçimi kaldır ve tuş stili) |
| Kamera | {{ui:Yörünge}} ({{key:O}}), {{ui:Kaydır}} ({{key:H}}), {{ui:Yakınlaştır}} ({{key:Z}}), {{ui:Sınırlar}} ({{key:Shift+Z}}), {{ui:Görünümler}} (bir menü) |

Gösterilen tuşlar it/çek tuşlarıdır; [ModelCraft ayarları](topic:settings) içinde Modelleyici stili seçildiğinde ipuçları bunun yerine o tuşları gösterir. Kullandığınız araç basılı gösterilir. Dar bir ekranda araç çubuğu yana kayar.

{{ui:Görünümler}} menüsünde her biri modele sığdırılmış {{ui:İzometrik}}, {{ui:Üst}}, {{ui:Ön}}, {{ui:Sağ}}, {{ui:Arka}}, {{ui:Sol}} ve {{ui:Alt}} ile perspektif ve paralel izdüşüm arasında geçiş yapan {{ui:Perspektif}} bulunur.

## 3B görünüm

Ekranın ortası. Kırmızı, yeşil ve mavi çizgiler eksenlerdir: kırmızı ve yeşil zemin üzerinde yatar, mavi yukarı bakar ve **kuzey yeşil eksendir**. Buluştukları yer başlangıç noktasıdır.

- Başladığınızda "Modellemeye başlayın" başlıklı bir kart ilk birkaç tuşu listeler. Bir çizim aracı seçtiğinizde veya görünüme tıkladığınızda kaybolur.
- Bir araç çalışırken görünüm **çıkarım işaretleri** gösterir: işaretçinin yakalandığı yerlerde küçük renkli şekiller (uç noktada yeşil bir daire, orta noktada camgöbeği bir daire, kenarda kırmızı bir kare, yüzeyde mavi bir baklava). Bkz. [Çıkarım ve yakalama](topic:inference).
- Seçili şeyler maviye döner. Arkadan görülen bir yüzey mavi-gridir.
- Düzenlemek için bir grubu açtığınızda dışındaki her şey solar ve eksenler grubun kendi eksenlerine geçer.
- Bir modelin sahneleri olduğunda görünümün üstünde bir sahne sekmeleri sırası belirir.
- Bir dosyayı açmak veya içe aktarmak için görünümün herhangi bir yerine bırakın.

## Sol paneller

**{{ui:Ağaç görünümü}}** modeldeki grupları ve bileşenleri, modelde iç içe oldukları gibi iç içe listeler. Birden çok kez kullanılan bir bileşen, "Pencere (4)" gibi kaç kez kullanıldığını gösterir.

- Seçmek için bir ada tıklayın. Düzenlemek için açmak üzere çift tıklayın.
- **Ada göre bul** (iki veya daha çok grup olunca görünür) yalnızca adı eşleşen satırları, içinde bulundukları gruplarla birlikte tutar. {{key:Esc}} temizler.
- Bir satırın sonundaki **göz** o grubu veya bileşeni gizler ya da gösterir ({{ui:Düzenle}} › {{ui:Daha fazla}} › {{ui:Gizle}} gibi). Bir etiket simgesi, [etiketi](topic:tags) tarafından gizlendiği anlamına gelir.
- **Yerinde yeniden adlandırma:** bir satıra tıklayın, sonra {{key:F2}} tuşuna basın, yazın ve {{key:Enter}} tuşuna basın ({{key:Esc}} eski adı korur).
- **Bir satırı sürükleyin:** başka bir grubun satırının ortasına bırakırsanız o grubun içine taşınır, bir satırın üst veya alt kenarına bırakırsanız o satırın hemen öncesine veya sonrasına konur, {{ui:Ağaç görünümü}} başlığına bırakırsanız en üst düzeye taşınır. Modelde olduğu yerde kalır ve rengini, etiketini ve adını korur. Bir grup kendi içine giremez. Her taşıma tek bir geri alma adımıdır. Bkz. [Ağaç görünümünde yeniden düzenleme](topic:groups-components#rearrange-in-the-outliner).
- Bir grubun içinde düzenleme yaparken "Düzenleniyor: Model › …" yazan bir satır ve bir {{ui:Grubu kapat}} düğmesi belirir. Açık her düzeyi bir kerede kapatır.

**{{ui:Bileşenler}}** her bileşen tanımını, yerleştirilen kopya sayısıyla ("3×") ve tıkladığınız yere bir kopya daha ekleyen bir {{ui:Yerleştir}} düğmesiyle listeler.

## Sağ paneller

**{{ui:Öğe bilgisi}}** seçili olanı anlatır. Başlığı onun ne olduğunu söyleyecek şekilde değişir:

| Başlık | Gösterdiği | Düğmeler |
|---|---|---|
| Model (hiçbir şey seçili değil) | Yüzeyler, kenarlar, gruplar, bileşenler ve kaç tanesinin yerleştirildiği, kılavuzlar, toplam boyut | {{ui:Tüm kılavuzları sil}} (kılavuz varsa) |
| Yüzey | Alan, delik sayısı | {{ui:Yüzeyi ters çevir}} |
| Kenar | Uzunluk | yok |
| Grup veya Bileşen | Ad (yeniden adlandırmak için yazın), kaç kez yerleştirildiği, kapalı bir katı olup olmadığı, hacmi, boyutu | {{ui:Düzenle}}, {{ui:Patlat}}, {{ui:Tekil yap}} (birden çok kez yerleştirilmiş bir bileşen), {{ui:Bileşen oluştur}} (bir grup) |
| Kılavuz nokta veya kılavuz çizgi | hiçbir şey | {{ui:Sil}} |
| Birkaç şey | Kaç yüzey, kenar, grup ve kılavuz olduğu, yüzeylerin toplam alanı | {{ui:Bileşen oluştur (G)}}, {{ui:Grup oluştur (Shift+G)}} |

**{{ui:Stil}}** modelin nasıl çizileceğini ayarlar: {{ui:Yüzeyler}} ({{ui:Gölgeli}}, {{ui:Gizli çizgi}}, {{ui:Tel kafes}}, {{ui:X-ışını}}), {{ui:Kenarları göster}} ve güneşin tarihi, saati ve yeriyle {{ui:Güneş gölgeleri}}. Bkz. [Stiller ve güneş gölgeleri](topic:styles-shadows).

**{{ui:Sahneler}}** görünümleri kaydeder: {{ui:Sahne ekle}}, sahneler listesi ve {{ui:Önceki}}, {{ui:Oynat}} ve {{ui:Sonraki}}. Bkz. [Görünümleri sahne olarak kaydetme](topic:scenes).

## Durum çubuğu

Altta, soldan sağa:

1. **İpucu**: aracın sırada ne istediği veya işaretçinin neye yakalandığı ("Uç nokta", "Kırmızı eksen üzerinde").
2. **İletiler**: az önce ne olduğu ("İt/çek geri alındı.", "site.dxf içe aktarıldı: zeminde 1697 kenar, bir grupta.") veya bir şeyin neden çalışmadığı.
3. **Değer kutusu**: etiketi araca göre değişir ({{ui:Uzunluk}}, {{ui:Boyutlar}}, {{ui:Yarıçap}}, {{ui:Kenar sayısı}}, {{ui:Mesafe}}, {{ui:Açı}}, {{ui:Ölçek}}, {{ui:Ofset}}). Çalışırken canlı boyutu gösterir ve yazdığınızı alır. Bkz. [Değer kutusuna tam boyutları yazma](topic:value-box).
4. **Tuş stili**: {{ui:Tuşlar: İt/çek}} veya {{ui:Tuşlar: Modelleyici}} klavye kısayollarını ve fare düğmelerini bir kerede değiştirir ([ModelCraft ayarları](topic:settings) içindekiyle aynı).
5. **{{ui:Yakalama}} ve {{ui:Çarpışma}}**: noktalara, kenarlara ve eksenlere yakalama ve katıların değdikleri yerde durması. Üstü çizili = kapalı. Değiştirmek için tıklayın. Bkz. [ModelCraft ayarları](topic:settings).
6. **Birim seçici**: uzunlukların gösterildiği birim. Bkz. [Başlangıç](topic:getting-started#check-the-units-first).

## Dar ekranda

Yaklaşık 760 piksel genişliğin altında (bir telefon veya dar bir pencere), 3B görünüm ekranı korur. Araç çubuğu yana kayan tek bir satırdır ve paneller ekranın altındaki çubuktan sayfa olarak açılır.
