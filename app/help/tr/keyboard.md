---
title: Tuşlar ve fare işlemleri
summary: ModelCraft'taki her klavye kısayolu, fare işlemi, dokunmatik yüzey hareketi ve dokunmatik ekran hareketi; ne yaptıklarına göre gruplanmış.
keywords: klavye, kısayollar, tuşlar, sıcak tuşlar, fare, dokunmatik yüzey, hareketler, dokunmatik ekran, hızlı başvuru, ctrl, komut, ok tuşları
from: e2348957
---

Bunlar ModelCraft'ın başlattığı itip çekme tuşlarıdır. Diğer stil için bkz. [Modeler tuşları](topic:keyboard#modeler-keys) aşağıda ve [ModelCraft ayarları](topic:settings).

Kısayollar, 3B görünüm ya da bir araç çubuğu düğmesi odaklandığında çalışır. Bir panel alanına yazdıysanız ya da {{ui:Stil}} içindeki bir listeyi değiştirdiyseniz, önce 3B görünüme tıklayın; yoksa tuşlarınız o alana gider. Her bilgisayarda tuşların nasıl yazıldığı için bkz. [Tuşlar, fareler ve dokunmatik yüzeyler](common:keys).

## Araçlar

| Tuş | Araç |
|---|---|
| {{key:Space}} | {{ui:Seç}} |
| {{key:L}} | {{ui:Çizgi}} |
| {{key:R}} | {{ui:Dikdörtgen}} |
| {{key:C}} | {{ui:Daire}} |
| {{key:N}} | {{ui:Çokgen}} |
| {{key:A}} | {{ui:Yay}} |
| {{key:F}} | {{ui:Ofset}} |
| {{key:B}} | {{ui:Boya}} |
| {{key:P}} | {{ui:İt/çek}} |
| {{key:M}} | {{ui:Taşı}} |
| {{key:Q}} | {{ui:Döndür}} |
| {{key:S}} | {{ui:Ölçekle}} |
| {{key:E}} | {{ui:Silgi}} |
| {{key:T}} | {{ui:Şerit metre}} ölçümü |
| {{key:D}} | {{ui:Ölçülendirme}} |
| {{key:O}} | {{ui:Yörünge}} |
| {{key:H}} | {{ui:Kaydır}} |
| {{key:Z}} | {{ui:Yakınlaştır}} |

Araç harfleri yalnızca değiştirici tuşsuz çalışır: {{key:Shift}} ile bir harf hiçbir şey yapmaz; aşağıdaki iki istisna dışında.

## Model ve dosya

| Tuş | İşlev |
|---|---|
| {{key:G}} | Seçimden bileşen oluşturur |
| {{key:Shift+G}} | Seçimden grup oluşturur |
| {{key:Shift+Z}} | Sınırlara yakınlaştır (tüm model) |
| {{key:Mod+Z}} | Geri al |
| {{key:Mod+Y}} veya {{key:Mod+Shift+Z}} | Yinele |
| {{key:Mod+S}} | Kaydet (`.modelcraft` dosyasını indirir) |
| {{key:Mod+O}} | Bir model aç |
| {{key:Mod+A}} | Her şeyi seç (açık bir grup varsa onun içinde) |
| {{key:Mod+C}} | Seçimi kopyala |
| {{key:Mod+X}} | Seçimi kes |
| {{key:Mod+V}} | Yapıştır: kopya imleci izler, gitmesini istediğiniz yere tıklayın |
| {{key:Mod+Shift+V}} | Olduğu yere yapıştır (kopyalandığı yerde) |
| {{key:Mod+D}} | Çoğalt: bir kopya imleçle hareket eder, bırakmak için tıklayın |
| {{key:Delete}} veya {{key:Backspace}} | Seçimi sil |
| {{key:PageDown}} / {{key:PageUp}} | Sonraki / önceki sahne |
| {{key:F1}} | Bu yardımı aç ya da kapat (uygulama çubuğundaki {{ui:Yardım}} de; yardım içindeyken {{key:Esc}} kapatır) |
| {{key:Ctrl+Shift+F}} | Ekran modu: tam ekran, sonra çubuklar gizli, sonra normal (Mac'te de Control) |

## Esc

{{key:Esc}} her basışta bir seviye geri çıkar:

1. Aracın ortasında olduğu işi iptal eder (çizilmekte olan bir çizgi, bir itip çekme, bir taşıma). Her şey eski haline döner.
2. {{ui:Seç}} aracına geçer.
3. Seçimi temizler.
4. Düzenlediğiniz grubu kapatır.

Ayrıca sahnelerin oynatılmasını durdurur. Değer kutusunda {{key:Esc}} yazdığınızı siler ve görünüme döner.

## Bir araç çalışırken

| Tuş | İşlev |
|---|---|
| Bir rakam ya da `. , - ' " [ < * /` karakterlerinden biri | Değer kutusuna yazmaya başlar |
| {{key:Enter}} | Değer kutusuna yazdığınızı uygular |
| {{key:Right}} | Kırmızı eksene kilitler (kilidi açmak için yeniden basın) |
| {{key:Left}} | Yeşil eksene kilitler |
| {{key:Up}} | Mavi eksene kilitler |
| {{key:Down}} | İlk tıklamadan önce üzerine geldiğiniz son kenara paralel kilitler |
| {{key:Shift}} basılı tutun | Basılıyken yakalandığınız yönü tutar |
| {{key:Ctrl}}, {{key:Mod}} veya {{key:Alt}} ({{ui:Taşı}}) | Taşıma ve kopyalama arasında geçiş yapar |

Ok tuşu kilitleri {{ui:Çizgi}}, {{ui:Dikdörtgen}}, {{ui:Daire}}, {{ui:Çokgen}}, {{ui:Taşı}}, {{ui:Ölçekle}} ve {{ui:Şerit metre}} araçlarında (bir noktadan ölçerken), ilk tıklamadan sonra çalışır. {{ui:İt/çek}} her zaman yüzeyin yönünde hareket eder ve kilidi yoktur. {{ui:Döndür}} aracında ok tuşları, ilk tıklamadan sonra "Kilitli" mesajı gösterir ama dönüşü değiştirmez.

## Araç çalışmıyorken ok tuşları

Hiçbir araç bir işin ortasında değilken ok tuşları kamerayı hareket ettirir:

| Tuş | İşlev |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Yörünge |
| {{key:Shift}} ile ok | Kaydır |

## Fare

| İşlem | İşlev |
|---|---|
| Tıklama | Geçerli aracı kullanır |
| Bas, sürükle, bırak | Çizim araçları için iki tıklamayla aynı; {{ui:Seç}} için kutu seçimi; {{ui:Silgi}} için yol boyunca siler |
| Çift tıklama | {{ui:Seç}}: yüzey ile kenarlarını, kenar ile yüzeylerini seçer, bir grubu açar; boş alan grubu kapatır. {{ui:İt/çek}}: son mesafeyi tekrarlar |
| Üç kez tıklama | {{ui:Seç}}: bağlı her şey |
| {{key:Shift}} + tıklama | {{ui:Seç}}: seçime girip çıkar |
| {{key:Mod}} + tıklama | {{ui:Seç}}: seçime ekler |
| {{key:Shift}} + {{key:Mod}} + tıklama | {{ui:Seç}}: seçimden çıkarır |
| Orta düğme sürükleme | Her araçla yörünge |
| {{key:Shift}} + orta düğme sürükleme | Her araçla kaydır |
| Sağ düğme sürükleme | Her araçla kaydır |
| Tekerlek | İmlece doğru yakınlaştır |

Sağ tıklama menüsü yoktur.

## Dokunmatik yüzey

İki parmakla kaydırmanın ne yaptığı {{ui:Ayarlar}} › {{ui:ModelCraft}} › Kaydırma ayarına bağlıdır:

| Hareket | Dokunmatik yüzey (ya da hesaplanmış) | Fare tekerleği |
|---|---|---|
| İki parmakla kaydırma | Yörünge | İmlece doğru yakınlaştır |
| {{key:Shift}} + iki parmakla kaydırma | Kaydır | Yakınlaştır |
| Kıstırma | İmlece doğru yakınlaştır | İmlece doğru yakınlaştır |
| İki parmakla basıp sürükleme (ikincil tıklama basılı) | Kaydır | Kaydır |

Bkz. [Yörünge, kaydırma ve yakınlaştırma](topic:orbit-pan-zoom#on-a-trackpad) ve [ModelCraft ayarları](topic:settings#scrolling-mouse-wheel-or-trackpad).

## Modeler tuşları

{{ui:Ayarlar}} › {{ui:ModelCraft}} › Denetimler, Modeler stiline ayarlıysa:

| Tuş | İşlev |
|---|---|
| {{key:W}} veya {{key:Space}} | {{ui:Seç}} |
| {{key:L}} / {{key:B}} / {{key:C}} / {{key:N}} | {{ui:Çizgi}} / {{ui:Dikdörtgen}} / {{ui:Daire}} / {{ui:Çokgen}} |
| {{key:E}} | {{ui:İt/çek}} (ekstrüzyon) |
| {{key:T}} | {{ui:Şerit metre}} ölçümü |
| {{key:D}} | {{ui:Ölçülendirme}} |
| {{key:G}} | Seçimi hemen imleçten taşır |
| {{key:R}} | Seçimi ortası etrafında (mavi eksende) döndürür |
| {{key:S}} | Seçimi ortası etrafında ölçekler |
| {{key:X}} / {{key:Y}} / {{key:Z}} taşırken ya da döndürürken | Kırmızı / yeşil / mavi ekseni kilitler (kilidi açmak için yeniden basın) |
| Tıklama ya da {{key:Enter}} | Bırakır |
| {{key:Esc}} ya da sağ tıklama | Eski yerine koyar |
| {{key:Shift+D}} | Çoğaltır ve kopyayı taşır |
| {{key:X}} ya da {{key:Delete}} | Seçimi siler |
| {{key:A}} / {{key:Alt+A}} | Tümünü seç / seçimi kaldır |
| {{key:Tab}} | Seçili grubu ya da bileşeni açar; tekrar basınca kapatır |
| {{key:Mod+G}} / {{key:Mod+Shift+G}} | Grup oluştur / bileşen oluştur |
| Sayısal {{key:1}} / {{key:3}} / {{key:7}} | Ön / sağ / üst görünüm ({{key:Mod}} ile arka / sol / alt) |
| Sayısal {{key:5}} | Perspektifi açar ya da kapatır |
| Sayısal {{key:.}} | Seçime yakınlaştır |
| {{key:Home}} veya {{key:Shift+C}} | Sınırlara yakınlaştır |
| {{key:Shift+Tab}} | Yakalamayı açar ya da kapatır |
| Orta düğme sürükleme / {{key:Shift}} ile / {{key:Mod}} ile | Yörünge / kaydır / yakınlaştır |
| {{key:Alt}} + sürükleme / {{key:Alt+Shift}} + sürükleme | Yörünge / kaydır (orta düğme gerekmez) |

Kopyala, yapıştır, geri al, kaydet ve aç tuşları yukarıda listelenenleri korur. Yazılan değerler, değer kutusu ve {{ui:İt/çek}} iki stilde de aynı çalışır.

## Dokunmatik ekran

| Hareket | İşlev |
|---|---|
| Dokunma | Geçerli aracla bir tıklama |
| Çift dokunma | Bir çift tıklama |
| Bas, sürükle, kaldır | Fareyle bas, sürükle, bırak ile aynı |
| İki parmak: kıstırma | Yakınlaştır |
| İki parmak: birlikte hareket | Kaydır (Ayarlar › ModelCraft › Dokunmatik ekran bunu Yörünge yapabilir) |
| Üç parmak: birlikte hareket | Yörünge (iki parmak yörüngedeyken Kaydır) |
| Bir parmağı hareketsiz tutun | Aracı Enter gibi bitirir; bir şey olmuyorsa, sonra sürükleyerek yörüngede döndürür |
| Tek parmakla işlem sırasında ikinci parmak | Bu işlemi iptal eder |
| {{ui:Yörünge}} aracı, sonra tek parmakla sürükleme | Yörünge |

Dokunmatik ekranda bir değer yazmak için alttaki değer kutusuna dokunun, yazın ve klavyenin Enter (ya da Git) tuşuna basın.

## Taşımanın yeri

Taşıma {{ui:Taşı}} aracındadır, tuşu {{key:M}}: taşınacak şeyi seçin, bir temel nokta tıklayın, sonra ikinci bir nokta ya da bir mesafe yazın. Bkz. [Taşı, kopyala ve dizi oluşturun](topic:move-copy).
