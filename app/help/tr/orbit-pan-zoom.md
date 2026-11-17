---
title: Yörünge, kaydırma ve yakınlaştırma
summary: Bir fare, dokunmatik yüzey, dokunmatik ekran ya da klavye ile modelin etrafında gezinin ve standart görünümlere geçin.
keywords: yörünge, kaydır, yakınlaştır, uzun basma, üç parmak, iki parmak, dokunma, gezin, kamera, görünüm, görünümü döndür, dokunmatik yüzey, dokunmatik ekran, orta düğme, sınırlar, perspektif, paralel, üst görünüm, iso
from: 10d4d33a
---

Kamerayı istediğiniz zaman hareket ettirebilirsiniz, bir çizgi çizerken ya da bir yüzü iterken bile: araç kaldığı yerde bekler.

## Üç düğmeli bir fareyle

| Yapmak için | Bunu yapın |
|---|---|
| Yörünge | Orta düğmeyle sürükleyin (tekerleğe basın) |
| Kaydır | Sağ düğmeyle sürükleyin ya da {{key:Shift}} tuşunu basılı tutup orta düğmeyle sürükleyin. Sürükleme sırasında {{key:Shift}} tuşuna basmak ya da bırakmak yörünge ile kaydırma arasında geçiş yapar |
| Yakınlaştır | Tekerleği çevirin. Göstergenin altındaki yüze ya da görünümün merkezinin derinliğindeki noktaya doğru yakınlaşır |
| Bütün modeli görün | {{key:Shift+Z}} ya da {{ui:Sınırlar}} |

Yörünge, görünümü işaretçinin altındaki model parçası etrafında döndürür, böylece o nokta yerinde kalır ve her şey onun etrafında döner. Boş alanın üzerinde ise görünümün merkezi etrafında döner. Kaydırma, tuttuğunuz noktayı işaretçinin altında tutar.

Yörüngeyi her zaman görünümün merkezi etrafında yapmak ya da yörünge ile kaydırmayı daha hızlı ya da yavaş yapmak için {{ui:Ayarlar}} ({{key:Mod+,}}), {{ui:ModelCraft}} sekmesini, **Yörünge ve kaydırma** bölümünü açın. Hızlar fare, dokunmatik yüzey, dokunma ve ok tuşları için geçerlidir.

Sürüklemeden sağ tıklamanın bir etkisi yoktur; ModelCraft'ta sağ tık menüsü yoktur.

## Orta düğmesi olmadan

Araç çubuğundaki kamera araçlarını ya da klavyeyi kullanın:

1. {{key:O}} tuşuna basın (ya da {{ui:Yörünge}} tıklayın) ve yörüngelemek için sol düğmeyle sürükleyin. Kaydırmak için sürükleme sırasında {{key:Shift}} tuşunu basılı tutun.
2. {{key:H}} tuşuna basın (ya da {{ui:Kaydır}} tıklayın) ve kaydırmak için sürükleyin.
3. {{key:Z}} tuşuna basın (ya da {{ui:Yakınlaştır}} tıklayın) ve yakınlaştırmak için yukarı, uzaklaştırmak için aşağı sürükleyin.
4. {{ui:Seç}} aracına dönmek için {{key:Space}} tuşuna basın ya da sıradaki aracın tuşuna basın.

Kamera araçları, kullandığınız aracın yerini alır. Bir işlemin ortasında etrafa bakmak için, işlemi kaybetmeden klavyeyi kullanın:

- Ok tuşları yörüngelendirir.
- {{key:Shift}} ile birlikte ok tuşları kaydırır.

Bir çizim aracı işlemin ortasındayken (ilk tıklamadan sonra), ok tuşları yörüngelemek yerine yönleri kilitler. Bkz. [Çıkarım ve yakalama](topic:inference#lock-a-direction).

## Dokunmatik yüzeyde

Kolay yol: {{ui:Ayarlar}} ({{key:Mod+,}}), {{ui:ModelCraft}} sekmesini açın ve Kaydırma'yı **Dokunmatik yüzey** olarak ayarlayın (ya da "Otomatik algıla" olarak bırakın). Sonra yörüngelemek için iki parmakla kaydırın, kaydırmak için {{key:Shift}} tuşunu basılı tutup kaydırın ve yakınlaştırmak için sıkıştırın; kamera düğmesi gerekmez. Bkz. [ModelCraft ayarları](topic:settings#scrolling-mouse-wheel-or-trackpad).

Kaydırma **Fare tekerleği** olarak ayarlıyken:

:::mac
- **Yakınlaştırma:** iki parmakla kaydırın ya da sıkıştırın. İkisi de işaretçiye doğru yakınlaşır.
- **Kaydırma:** iki parmakla basın (ikincil tıklama) ve sürüklerken parmaklarınızı basılı tutun. İki parmakla tıklama işe yaramıyorsa **Sistem Ayarları**'nda, sonra **İzleme dörtgeni** bölümünde "İkincil tıklama"yı açın.
- **Yörünge:** {{key:O}} tuşuna basın ve tek parmakla sürükleyin ya da ok tuşlarını kullanın.
- {{key:Ctrl}} tuşuna basılı tutarak tıklamak, tarayıcıya bağlı olarak ModelCraft'ta sağ tık sayılmayabilir: bunun yerine {{key:Ctrl}} basılıyken bir tıklama gibi davranabilir. Kaydırmak için iki parmakla basın.
:::

:::windows linux
- **Yakınlaştırma:** iki parmakla kaydırın. Sıkıştırma da, dokunmatik yüzey sürücüsü bunu {{key:Ctrl}} ile bir kaydırma olarak gönderdiğinde yakınlaştırır.
- **Kaydırma:** sağ düğmeyle sürükleyin (birçok dokunmatik yüzeyde sağ alt köşeye basıp sürükleyin) ya da {{key:H}} tuşuna basıp sürükleyin.
- **Yörünge:** {{key:O}} tuşuna basın ve sürükleyin ya da ok tuşlarını kullanın.
:::

Fare tekerleğiyle iki parmakla kaydırma yakınlaştırır; kaydırmaz. Bu, birçok web sayfasının tersidir ve çoğu 3B modelleyicide fare tekerleğinin davranışı budur.

:::tip
{{key:Space}} ModelCraft'ta {{ui:Seç}} aracını seçer. {{key:Space}} tuşunu basılı tutup sürüklemek, bazı diğer uygulamalarda olduğu gibi kaydırmaz.
:::

## Dokunmatik ekranda

:::touch
- **Tek parmak** geçerli aracı kullanır: tıklamak için **dokunun**, çizmek ya da sürüklemek için **basıp sürükleyin**.
- Bir çizim aracının parmağı basılıyken, parmağın altında ne olduğunu gösteren bir **büyüteç** üstünde belirir; kaldırmadan önce hangi uç noktaya, orta noktaya ya da kenara yakaladığını görebilirsiniz.
- Aracın yaptığını bitirmek için yarım saniye **hareketsiz tutun**; bu, {{key:Enter}} tuşunun yaptığı gibidir: bir eğri, bir çizgi zinciri. Hiçbir şey olmuyorsa, hareketsiz tutup aynı parmağı sürüklemek, parmağı kaldırana kadar **yörüngelendirir**.
- **İki parmak** birlikte sürüklenince **kaydırır**; **sıkıştırma** yakınlaştırır. İkisi tek hareketle çalışır.
- **Üç parmak** birlikte sürüklenince **yörüngelendirir**.
- Bunları değiştirmek için (iki parmak yörüngelendirir, üç parmak kaydırır), {{ui:Ayarlar}}, {{ui:ModelCraft}} sekmesi, Dokunmatik ekran bölümünü açın.
- Görünümün kenarına ikinci bir parmak koymak, ilk parmağın başlattığını **iptal eder** (yarım çizilmiş bir dikdörtgen, devam eden bir it/çek). Parmaklarınızı kaldırın ve yeniden başlayın.
- Görünümün altındaki küçük çubukta **Bitti** ({{key:Enter}}), **İptal** ({{key:Esc}}) ve **Geri al** düğmeleri vardır; klavye yokken kullanın.
- Yakalama ve seçme, fareye göre biraz daha uzağa ulaşır ve düğmeler daha büyüktür, böylece bir parmak onlara dokunabilir.
:::

:::mouse
Dokunmatik ekranda tek parmak geçerli aracı kullanır (tıklamak için dokunun, bitirmek için hareketsiz tutun ya da yörüngelemek için hareketsiz tutup sürükleyin), iki parmak kaydırır ve sıkıştırarak yakınlaştırır, üç parmak yörüngelendirir ve küçük bir çubuk Bitti, İptal ve Geri al seçeneklerini sunar.
:::

## Standart görünümler

1. Araç çubuğunun sağ ucundaki {{ui:Görünümler}} düğmesini tıklayın.
2. {{ui:İzometrik}}, {{ui:Üst}}, {{ui:Ön}}, {{ui:Sağ}}, {{ui:Arka}}, {{ui:Sol}} ya da {{ui:Alt}} seçin.

Görünüm o yöne döner ve bütün modele sığar. {{ui:Ön}} yeşil eksen boyunca kuzeye bakar; {{ui:Üst}} kuzey yukarıda olacak şekilde doğrudan aşağı bakar.

Görünümün sağ üst köşesindeki görünüm küpü aynısını tek tıklamayla yapar; ayrıca kenarlar ve köşeler, modeli döndürmek için bir pusula halkası ve bir ana sayfa düğmesi vardır. Bkz. [Görünüm küpü](topic:view-cube).

## Perspektif ve paralel izdüşüm

{{ui:Görünümler}}, sonra {{ui:Perspektif}} seçin. Onay işareti perspektifin açık olduğunu gösterir. Kapalıyken görünüm paralel (ortogonal) izdüşümdür: modelde paralel olan çizgiler ekranda da paralel kalır; {{ui:Ön}} ya da {{ui:Sağ}} görünümlerinden yükseltiler için istediğiniz budur. Durum çubuğu "Perspektif." ya da "Paralel izdüşüm." yazar.

Her sahne perspektifte olup olmadığını hatırlar. Bkz. [Görünümleri sahne olarak kaydedin](topic:scenes).
