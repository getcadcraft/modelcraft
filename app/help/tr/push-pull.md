---
title: Yüzeyleri itip çekerek katılara dönüştürün
summary: Bir yüzeyi kutuya çevirin, bir binayı daha uzun ya da kısa yapın, bir çıkma ya da bir girinti ekleyin ve çift tıklamayla bir mesafeyi tekrarlayın.
keywords: it/çek, ekstrüzyon, yükseklik, katı, kutu, kütle, daha uzun, girinti, dışa çıkıntı, tekrarla, çift tıklama, hacim, seviye, yüzeyde, yüzeyle hizalı, aynı yükseklik
from: dc093c91
---

{{ui:İt/çek}} ({{key:P}}) bir yüzeyi kendi yönünde taşır: bir zemin için yukarı ve aşağı, bir duvar için içeri ve dışarı. Ne olacağı yüzeye bağlıdır.

## Bir yüzeyden katı yapın

1. Bir yüzey çizin, örneğin yerde bir dikdörtgen ([Yüzeyleri çizin](topic:draw-faces)).
2. {{key:P}} tuşuna basın.
3. Yüzeyin üzerine gelin. Vurgulanır.
4. Yüzeye tıklayın, sonra işaretçiyi hareket ettirin. Yüzey yükselir (ya da batar) ve kenarlarından yanlar uzar. Değer kutusu ({{ui:Mesafe}}) ve ipucu mesafeyi gösterir.
5. Bitirmek için tıklayın ya da bir mesafe yazıp {{key:Enter}} tuşuna basın: `3m`, `10'`, milimetrik bir modelde `2700`.

   Artık kapalı bir katınız var. Hepsini seçin ve gruplayın (bkz. [Gruplar ve bileşenler](topic:groups-components)): {{ui:Öğe bilgisi}} o zaman "Katı: Evet" ve hacmini gösterir.

Tek bir yüzey iki yönde de gidebilir: zeminin üzerinde bir kütle için yukarı çekin, bir çukur ya da temel için aşağı itin.

:::tip
İki kez tıklamak yerine yüzeye basın, sürükleyin ve bırakın. Dokunmatik ekranda doğal yol budur: bas, sürükle, kaldır.
:::

## Başka bir şeyin yüksekliğine çekin

Çekerken modelin başka bir parçasının bir köşesinin, orta noktasının, bir kenarının ya da bir kılavuzunun üzerine gelin. Yüzey o yüksekliğe yapışır ve bir işaret noktayı gösterir. İki bloğu aynı yükseklikte yapmak için ya da [şerit metre](topic:guides-measure) ile yerleştirdiğiniz bir kılavuz çizgide durmak için kullanın.

İttiğiniz yüzeye paralel bir yüzeyin üzerine de gelebilirsiniz; örneğin başka bir bloğun üstü ya da bir direğin durduğu kutunun üstü. İpucu "Yüzeyde" der ve ittiğiniz yüzey onunla aynı seviyede biter. Örneğin, bir borunun iç yüzeyini, borunun altındaki kutuyla aynı seviyeye gelene kadar aşağı itin.

İttiğiniz yüzeyle bir açı yapan bir yüzey seviye belirlemez. Mesafe işaretçiyi izler. İttiğiniz yüzeyin arkasındaki bir yüzey de öyledir.

İtilen bir yüzey yeniden çevresindeki yüzeylerle aynı hizada bittiğinde, yanları kaybolur. Sıfır yükseklikte yan bırakılmaz ve çizdiğiniz dış çizgi yüzeyde kalır, böylece onu daha sonra yeniden itebilirsiniz. Yeniden tek bir yüzey yapmak için dış çizginin kenarlarını {{ui:Silgi}} ile silin: iki yüzey birleşir.

## Bir kutuyu daha uzun ya da kısa yapın

Bir kutunun üstünü {{ui:İt/çek}} ile itin. Yanları zaten doğrudan yukarı uzandığı için üst yüzey sadece hareket eder: kutu daha uzun ya da kısa olur ve yeni kenar oluşmaz.

- Üstü en alta kadar aşağı ittiğinizde kutu kaldırılır. ModelCraft sıfır yükseklikte durur; kutuyu asla içten dışa çevirmez.
- Komşularının tümü kendi yönü boyunca uzanan herhangi bir yüzey için de aynısı geçerlidir; örneğin bir duvarın ucu.

## Çıkma ya da girinti ekleyin

1. Bir kutunun yan yüzeyine bir dikdörtgen çizin (yüzeyin üzerinde başlatın; yüzeyin düzleminde kalır).
2. {{key:P}} tuşuna basın ve yeni dikdörtgeni **dışarı** çekin. Malzeme ekler: bir çıkma, bir baca, bir saçak.
3. Ya da **içeri** itin. Bir girinti keser: bir veranda, bir niş, geri çekilmiş bir giriş.

Yeni parçanın yanları, zaten orada olan yüzeylerle hizalandığında, tek bir yüzey olarak birleşir; böylece düz bir duvarda başıboş çizgiler oluşmaz.

## Tamamen geçecek şekilde itin

Bir yüzeyi bir katıya doğru ittiğinizde, arkasındaki ilk yüzeyde durur. O yüzeye ulaştığında, bir açıklık keser. Kalınlığı olan bir duvarda pencere ve kapıyı böyle yaparsınız. Bkz. [Duvarda açıklık kesin](topic:openings).

## Bir mesafe yazın

Yüzeye tıkladıktan sonra mesafeyi yazın ve {{key:Enter}} tuşuna basın.

- Yazdığınız mesafe hareket ettiğiniz yönde gider. Henüz hareket etmediyseniz, yüzeyin önüne doğru gider (bir katıdan dışarı, zeminden yukarı).
- Diğer yöne gitmek için `-500` gibi negatif bir sayı yazın.
- Tıklamadan önce fikrinizi değiştirirseniz {{key:Esc}} tuşuna basın. Yüzey geri döner.

## Son mesafeyi tekrarlayın

Bir {{ui:İt/çek}} işleminden sonra, {{ui:İt/çek}} hâlâ seçiliyken başka bir yüzeye çift tıklayın. Aynı mesafe kadar hareket eder. Birkaç duvara ya da birkaç zemine aynı kalınlığı ya da yüksekliği vermenin hızlı yoludur.

Başka bir araca geçene kadar ModelCraft mesafeyi hatırlar.

## Bilmeniz gerekenler

- {{ui:İt/çek}} her seferinde bir yüzey üzerinde çalışır. Yüzey olmayan bir şeye tıklarsanız durum çubuğu "İt/çek bir yüzey üzerinde çalışır. Bir yüzeye tıklayın." der.
- Bir grubun ya da bileşenin içindeki bir yüzeyi {{ui:İt/çek}} ile itmek için önce onu açın (çift tıklayın).
- **Çarpışma** açıkken, başka bir katıya çarpan bir itme ya da çekme değdiği yerde durur ve ipucu neye değdiğini söyler (nesnenin adı ya da "bu gruptaki serbest geometri") ve karşılaştığı yüzeyleri vurgular. Kendi katısının içine ittiğiniz bir cep (örneğin aşağı itilen ofsetli bir yüzey) o katının parçasıdır ve duvarları tarafından asla durdurulmaz.
- Birbirine itilen iki katı birbirini kesmez ya da birleştirmez: yüzeyleri yalnızca birbirinden geçer. Bkz. [Henüz yapılmadı](topic:not-built-yet).
