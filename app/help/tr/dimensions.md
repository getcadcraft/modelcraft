---
title: Çizdiklerinizi ölçülendirin ve yeniden boyutlandırın
summary: Köşeler, yaylar ve daireler arasına ya da iki kenar arasına ölçülendirme yerleştirin; modeli yeniden boyutlandırmak için yeni bir uzunluk yazın. Bir kenarın uzunluğunu ya da bir grubun genişliğini, derinliğini ve yüksekliğini Öğe bilgisi içinde yeniden yazın.
keywords: ölçülendirme, ölçülendirmeler, yeniden boyutlandır, boyutu değiştir, boyutu düzenle, uzunluk, genişlik, derinlik, yükseklik, esnet, sürülen ölçülendirme, açıklama, ölç, sonradan, yarıçap, çap, açı, açısal, yay, daire, R, Ø
from: a1f815ec
---

ModelCraft'ta boyutlar, bir şey çizildikten sonra sabit değildir. Bir ölçülendirme modelde bir uzunluk gösterir ve ona yeni bir uzunluk yazmak modeli buna uyacak şekilde yeniden boyutlandırır. Ayrıca bir kenarın uzunluğunu ya da bir grubun genişliğini, derinliğini ve yüksekliğini {{ui:Öğe bilgisi}} içinde yeniden yazabilirsiniz.

## Bir ölçülendirme yerleştirin

1. {{key:D}} tuşuna basın ya da araç çubuğunda {{ui:Ölçülendirme}} tıklayın.
2. Ölçmeye başlayacağınız bir köşeye tıklayın. Çizimde olduğu gibi köşelere, orta noktalara ve kenarlara yakalanır.
3. İkinci köşeye tıklayın.

   Ya da tek bir **kenara** tıklayın (ipucu "Kenar üzerinde" der); böylece o kenarın tamamı tek tıklamayla ölçülür.
4. İmleci ölçülendirme çizgisinin olması gereken yere getirin ve tıklayın. Ofseti de yazabilirsiniz, örneğin `0.5m`, ve {{key:Enter}} tuşuna basın.

   Yatay bir kenar için ölçülendirme çizgisi, kenara yandan bakmıyorsanız yatay kalır. Dikey bir kenar için, size en iyi bakan dikey düzlemde kalır.

Durum çubuğu "Ölçülendirme 4 m." yazar. Ölçülendirmeler, modelin birimindeki uzunluklarını gösterir ve birim seçicide birimi değiştirdiğinizde güncellenir.

## Yarıçap, çap ve açı

Aynı {{ui:Ölçülendirme}} aracı yuvarlak şeyleri ve açıları da ölçer:

- **Bir yay:** yaya tıklayın. İpucu {{ui:Yarıçap}} der. Metnin olması gereken yere imleci getirin ve tıklayın: ölçülendirme **R 1.5 m** okur.
- **Bir daire:** daireye tıklayın. Merkezinden geçen bir çizgiyle bir **çap** (**Ø 3 m**) elde edersiniz. Çokgenler de aynı şekilde çalışır; köşeleri daire üzerindedir.
- **İki kenar arasındaki açı:** bir kenara tıklayın, sonra bir köşede onunla birleşen ikinci kenara tıklayın (üzerinde dururken ipucu {{ui:Kenarlar arasındaki açı}} der). Sonra istediğiniz açının içine doğru hareket edin ve tıklayın. Köşenin içinde kenarlar arasındaki açıyı elde edersiniz; bir tarafa geçerseniz yanındaki açıyı elde edersiniz (örneğin 30° yerine 150°). Köşeden ne kadar uzağa tıkladığınız yayın nereye gideceğini belirler; ya da o mesafeyi yazın.

Bir yarıçapı çapa ya da tersine çevirmek için ölçülendirmeyi seçin ve {{ui:Öğe bilgisi}} içinde {{ui:Şöyle göster}} seçeneğini belirleyin.

**Bunlarla yeniden boyutlandırma:** bir yarıçapı ya da çapı yerleştirdikten hemen sonra yeni bir değer yazın ya da daha sonra seçip yazın. Yay ya da daire merkezini korur ve boyut değiştirir; onun sınırladığı bir yüz (bir disk, bir yuvanın ucu) onunla birlikte değişir. Yalnızca ölçen iki şey vardır:

- **Bir açı ölçülendirmesi** modeli asla değiştirmez. Bir açıyı değiştirmek için kenarları {{ui:Döndür}} ile döndürün.
- **Bir silindirin ucundaki daire** (ona {{ui:İt/çek}} ile çektiğiniz bir daire), ölçülendirmesinden yeniden boyutlandırılamaz, çünkü yanları da değişmek zorunda kalır. Bunun yerine silindiri ekseninde ölçekleyin.

## Bir ölçülendirmeyle modeli yeniden boyutlandırın

Bir ölçülendirme yerleştirdikten hemen sonra yeni bir uzunluk yazın ve {{key:Enter}} tuşuna basın: `6m`, `12'`, milimetre modelinde `3500`. Model o boyuta geçer.

Daha sonra, istediğiniz zaman:

1. {{ui:Seç}} ile ölçülendirmenin metnine ya da çizgisine tıklayın. {{ui:Öğe bilgisi}} onun **Ölçülendirme** olduğunu söyler ve {{ui:Uzunluk}} değerini gösterir.
2. Yeni uzunluğu yazın ve {{key:Enter}} tuşuna basın. Değer kutusuna doğrudan yazabilir ya da {{ui:Öğe bilgisi}} içindeki {{ui:Uzunluk}} kutusuna yazabilirsiniz.

### Ne hareket eder

Tıkladığınız ikinci köşe hareket eder, onun ötesindeki her şey de:

- **Tek bir parça üzerindeki iki köşe** (bir kutunun genişliği, bir duvarın yüksekliği): hareket eden köşenin tarafı dışarı ya da içeri kayar ve ona bağlı yüzeyler uzar. Bir kutu kapalı bir katı olarak kalır ve tamamen o taraftaki her şey, örneğin bir pencere bileşeni, onunla birlikte hareket eder.
- **İki ayrı parça üzerindeki köşeler** (iki kutu arasındaki boşluk): hareket eden köşenin parçası bütün olarak hareket eder ve boşluk değişir.
- **Diğer köşenin içinde olmayan bir grup ya da bileşen içindeki hareket eden köşe**: bütün grup hareket eder.
- **Her iki köşe de aynı grup ya da bileşen içinde**: içinde esnetilir. Bir bileşen, düzenlendiğinde her zaman olduğu gibi, yerleştirildiği her yerde değişir.

Hangi ucun hareket edeceğini değiştirmek için ölçülendirmeyi seçin ve {{ui:Öğe bilgisi}} içinde {{ui:Hareket eder}} seçeneğini belirleyin:

| Seçim | Ne olur |
|---|---|
| {{ui:İkinci uç}} (varsayılan) | Ikinci tıkladığınız uç hareket eder |
| {{ui:İlk uç}} | İlk tıkladığınız uç hareket eder |
| {{ui:İki uç (ortalı)}} | Her uç değişimin yarısını hareket ettirir, böylece orta yerinde kalır |

### Bir yeniden boyutlandırma reddedildiğinde

ModelCraft hiçbir şeyi değiştirmez ve durum çubuğunda nedenini söyler:

- "bir yüz düzleminden dışarı bükülürdü": ölçülendirme şeklin içinde eğik bir yönde ilerliyor. Bir kenar boyunca ya da kırmızı, yeşil veya mavi boyunca ölçün.
- "bir yüz hiçbir şeye küçülür ya da içten dışa dönerdi": yeni uzunluk şekil için çok kısa.
- "hareket eden uç modelin bir köşesinde değil": o uç boş alanda ya da bir kenarın orta noktasında yerleştirilmiş. {{ui:Hareket eder}} içinde diğer ucu seçin ya da ölçülendirmeyi iki köşeye yerleştirin.
- "uzunluk sıfırdan büyük olmalı".

Her yeniden boyutlandırma tek bir adımdır: {{key:Mod+Z}} onu geri alır.

## Öğe bilgisi içinde bir boyutu yeniden yazın

Her zaman bir ölçülendirmeye ihtiyacınız olmaz:

- **Bir kenar:** onu seçin. {{ui:Öğe bilgisi}} içindeki {{ui:Uzunluk}} yazabileceğiniz bir kutudur. Değer kutusuna bir uzunluk yazmak da çalışır. Kırmızı, sonra yeşil, sonra mavi boyunca daha ileride olan uç hareket eder ve ona bağlı olanlar uzar. Örneğin bir kutunun ön alt kenarını yeniden yazmak, kutuyu sağa doğru genişletir.
- **Bir grup ya da bileşen:** onu seçin. {{ui:Genişlik (kırmızı)}}, {{ui:Derinlik (yeşil)}} ve {{ui:Yükseklik (mavi)}} kutulardır. Uzak tarafı (sağ, arka, üst) hareket eder. Bunlar grubun kendi eksenleridir, ona verdiğiniz herhangi bir dönüşten önce.

Uygulamak için {{key:Enter}}, eski değeri geri koymak için {{key:Esc}} tuşuna basın.

## Ölçülendirmeler modeli izler

Bir ölçülendirme yerleştirildiği iki köşeye bağlıdır (bir açı: kendi köşesine ve iki kenarının uzak uçlarına; bir yarıçap ya da çap: yayına ya da dairesine). Geometriyi taşıyın, push/pull yapın ya da yeniden boyutlandırın; ölçülendirme onu izler ve yeni uzunluğu gösterir. Geometriyi bir grup ya da bileşen yaptığınızda da bağlı kalır.

Bir uç köşe olmayan bir yere (bir yüzeye ya da boş alana) yerleştirildiyse ya da onun köşesi silindiyse, o uç olduğu yerde kalır. Ölçülendirme yine ölçer, ama yalnızca diğer ucundan yeniden boyutlandırabilir.

## Ölçülendirmeleri kaldırın

- Tek bir ölçülendirme: seçin ve {{key:Delete}} tuşuna basın, ya da {{ui:Silgi}} ile tıklayın.
- Bütün ölçülendirmeler: hiçbir şey seçili değilken {{ui:Öğe bilgisi}} içinde {{ui:Tüm ölçülendirmeleri sil}} tıklayın.

Ölçülendirmeler `.modelcraft` dosyasına kaydedilir. Diğer biçimlere aktarılmazlar, onlar yalnızca 3B modeli taşır. Ölçülendirmeli bir dosya, onlar olmadan eski bir ModelCraft'ta yine açılır.
