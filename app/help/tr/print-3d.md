---
title: Modeli 3B baskıya hazırlayın
summary: Bir modelin kapalı olduğunu ve yüzlerinin doğru yöne baktığını kontrol edin, boyutunu, tabanını ve çıkıntılarını görün, yanlış olanı düzeltin ve dilimleyiciniz için STL ya da 3MF olarak indirin.
keywords: 3B baskı, 3B yazdırma, yazıcı, baskı, dilimleyici, stl, 3mf, su geçirmez, kapalı, manifold, katı, delikler, içten dışa, çıkıntı, destekler, taban, tabla, milimetre, dışa aktarma, düzelt, onar, içi boş, tabla boyutu, yeni başlayan, duvar kalınlığı, baskı araçları
from: 948e19af
---

Bir 3B yazıcının dilimleyicisi kapalı bir şekil ister: delik yok, her yüzey dışarı bakıyor, kendi içinden geçen bir şey yok. {{ui:Dışa aktar}} › {{ui:3B baskı için denetle (STL veya 3MF)…}} dosyayı indirmeden önce tam olarak bunu arar.

## Denetleyin ve indirin

1. Yazdırmak istediğinizi seçin: bir ya da birkaç grup ya da bileşen, ya da bazı yüzeyler. Hiçbir şey seçili değilse, görünen her şey yazdırılır.
2. {{ui:Dosya}} grubundaki {{ui:Dışa aktar}} düğmesini tıklayın, sonra {{ui:3B baskı için denetle (STL veya 3MF)…}}.

   İletişim kutusu tek bir satırla başlar: "Yazdırmaya hazır", yazdırmadan önce düzeltilecek kaç şey olduğu ya da önce bakılması gereken kaç şey. Her sorunun üç parçası vardır: neyin yanlış olduğu, neden önemli olduğu ve ne yapılacağı. Sonra milimetre cinsinden boyut, hacim, üçgen sayısı ve yazıcı tablanız gelir.

3. İletişim kutusu düzeltilecek şeyler listelerse, {{ui:Düzeltilebilenleri düzelt}} tıklayın (aşağıya bakın). Denetim kendiliğinden yeniden çalışır.
4. {{ui:3MF indir}} ya da {{ui:STL indir}} tıklayın.

Yazdırılan şey gördüğünüzdür: gizli yüzeyler, gizli gruplar ve bileşenler ve gizli bir etiketteki her şey dışarıda kalır. Boyutlar her zaman milimetre cinsindendir, dilimleyicilerin beklediği birimdir; modelin gösterdiği birim ne olursa olsun.

:::tip
Dilimleyiciniz okuyabiliyorsa 3MF'i tercih edin: renkleri ve birimleri korur. STL'de ikisi de yoktur ve dilimleyiciler milimetre varsayar.
:::

## Denetim neye bakar

Bunlar bir baskıyı durdurur ya da bozar ve iletişim kutusu "Yazdırmaya hazır değil" der:

| Sorun | Ne anlama gelir | Ne yapılmalı |
|---|---|---|
| Yalnızca bir tarafta yüzey | Bir delik: bir kenarın bir tarafında yüzey var, diğer tarafında hiçbir şey yok | Eksik yüzeyi çizin (boşluğun üzerinden bir çizgi genellikle kapatır) ya da aşağıdaki {{ui:Düzelt}} seçeneğini kullanın |
| Üç ya da daha fazla yüzey tarafından paylaşılıyor | Yüzeyler bir katının içinde bir yüzgeçte ya da duvarda buluşur | İç yüzeyi silin |
| Ters yönlere bakan yüzeyler | Bazı yüzeyler içeri, bazıları dışarı bakar | İçeri bakan yüzeyleri seçin ve {{ui:Özellik bilgisi}} içinde {{ui:Yüzeyi ters çevir}} tıklayın |
| İçten dışa | Bütün kapalı bir parça içe bakıyor | Yüzeylerini seçin ve ters çevirin |
| Kendi içinden geçiyor | Bir parça kendi içinden kıvrılıyor | {{ui:Düzenle}} › {{ui:Daha fazla}} › {{ui:Modelle kesiştir}}, sonra içindekini silin. Bkz. [Yüzeyleri kesiştirin](topic:intersect) |

Bunlar uyarılardır: model yazdırılır, ama önce bakın.

- **Ayrı parçalar örtüşüyor** ya da **yüzyüze buluşuyor**: dilimleyiciler genellikle bunları tek bir şeye birleştirir. Daha temiz bir dosya için, {{ui:Katılar}} › {{ui:Birleşim}} ile birleştirin. Bkz. [Katı araçları](topic:solids).
- **Alt tarafta hiçbir şey düz değil**: modeli bir yüzey tablaya değecek şekilde çevirin, yoksa dilimleyici destek ya da raft ekler.
- **Dikey durumdan 45°'den fazla dışarı eğilen**: bu yüzeylerin desteğe ihtiyacı var. İletişim kutusu yüzeyin ne kadarının olduğunu söyler.
- **1 mm'den küçük genişlik**: büyük olasılıkla yanlış birimde modellenmiş. Durum çubuğundaki birimi kontrol edin.

Bir içi boş parça (başka birinin içindeki kapalı bir kabuk) sorun değildir: yüzeyleri boşluğa bakar ve hacmi düşülür.

## Sorunları düzeltin

**Sorunların olduğu yer** altında iletişim kutusu, bir şeyin yanlış olduğu her grubu ya da bileşeni adlandırır (bir grupta olmayan serbest yüzeyler "Bir grupta olmayan yüzeyler" olarak listelenir); ne yanlış olduğu da yanında yazar. Birden çok yerleştirilmiş bir bileşen bir kez listelenir: onu düzeltmek her kopyayı düzeltir.

- {{ui:Göster}} o grubu açar ve yanlış olan kenarları ve yüzeyleri seçer, böylece vurgulanmış görünürler.
- {{ui:Düzeltilebilenleri düzelt}} hepsini bir kerede düzeltir: kenarları düz olan delikleri kapatır, şeklin içindeki yüzeyleri ve dağınık kenarları kaldırır ve yüzeyleri doğru dışa çevirir. Tek bir adımdır: {{key:Mod+Z}} onu geri alır. Denetim sonra yeniden çalışır ve kalanları gösterir.

Düzeltemediği şeyler (kenarları düz olmayan bir delik, kendi içinden geçen bir parça) listede, elle ne yapılacağıyla birlikte kalır. **Baskı araçları** altındaki {{ui:Onar}} daha ileri gider: düz olmayan delikleri kapatır, dağınık parçaları ve çift yüzeyleri kaldırır ve her düzeltmeyi listeler. Bkz. [Destekler, duvar kalınlığı, içini boşaltma ve onarım](topic:print-tools#repair). Bir grubu bir seferde de düzeltebilirsiniz: seçin, sonra {{ui:Özellik bilgisi}} içinde {{ui:Sorunları göster}} ve {{ui:Düzelt}} kullanın. Bkz. [Katı araçları](topic:solids).

## İçi boş bir parça

{{ui:İçini boşalt}}, **Baskı araçları** altında, verdiğiniz duvar kalınlığında bir parçanın içini boşaltır; tıkladığınız yerlerde drenaj delikleri açar. Bkz. [İçini boşalt](topic:print-tools#hollow).

Ayrıca içini kendiniz de çizebilirsiniz: parçanın içinde, ona dokunmayan kapalı bir grup, tüm yüzeyleri içeri, boşluğa bakacak şekilde ters çevrilmiş. Denetim bunu bir içi boşluk olarak sayar ve hacmini düşer; düzeltilecek bir şey olarak listelenmez.

## Yazıcınızın tablası

Yazıcınızın tabla boyutunu {{ui:Ayarlar}} › {{ui:ModelCraft}} › {{ui:3B yazıcı tablası}} içinde seçin. Denetim, model tablanın ondan büyük olduğunda uyarır, her iki yönde döndürülmüş hâlde. Bkz. [Ayarlar](topic:settings#3d-printer-bed).

## Baskı araçları

İletişim kutusundaki bulguların altında, **Baskı araçları** {{ui:Destek önizlemesi}} (desteklerin nereye gittiği ve yaklaşık ne kadar olduğu), {{ui:Duvar kalınlığı}} (baskı için çok ince duvarlar), {{ui:İçini boşalt}} ve {{ui:Onar}} seçeneklerini açar. Bkz. [Destekler, duvar kalınlığı, içini boşaltma ve onarım](topic:print-tools). {{ui:Baskı için böl}}, tabla için çok büyük bir modeli bağlayıcılar ve numaralı birleşimlerle parçalara böler: bkz. [Büyük bir modeli baskı için bölün](topic:print-split).

## Denetlenmez

Denetim dilimleme yapmaz: nozulunuzun çizemeyeceği küçük ayrıntılar ve gerçek destekler dilimleyicinizin işidir. Bkz. [Henüz yapılmadı](topic:not-built-yet#3d-printing).
