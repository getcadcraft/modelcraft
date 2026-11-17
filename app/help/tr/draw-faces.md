---
title: Çizgi, dikdörtgen, daire ve yaylarla yüzey çizin
summary: Zeminde veya diğer yüzeyler üzerinde düz yüzeyler oluşturun, bunları çizgilerle bölün ve istediğiniz kenar sayısıyla daire ve çokgen çizin.
keywords: çiz, çizgi, dikdörtgen, daire, çokgen, ofset, içe kaydır, çerçeve, kenarlık, yay, eğri, spline, yumuşak, kablo, yol, şişkinlik, yarıçap, yüzey, kat planı, taban izi, bölme, kenar sayısı, parça, anahat, kalem
from: b6d7b7dd
---

ModelCraft'ta her şey düz bir **yüzey** olarak başlar: kenarlarla kapatılmış bir yüzey. Bir yüzeyi doğrudan {{ui:Dikdörtgen}}, {{ui:Daire}} veya {{ui:Çokgen}} ile çizebilir ya da {{ui:Çizgi}} ile her seferinde bir kenarını çizerek anahattını oluşturabilirsiniz. Yüzeyler, [İt/çek](topic:push-pull) ile katılara dönüşür.

## Dikdörtgen çizin

1. {{key:R}} tuşuna basın.
2. İlk köşeye tıklayın: zeminde ya da modelin herhangi bir yüzeyinde.
3. İşaretçiyi hareket ettirin. Dikdörtgen zeminde (ya da başlattığınız yüzeyde) kalır ve değer kutusu ({{ui:Ölçülendirmeler}}) genişliğini ve derinliğini gösterir. Kenarlar eşit olduğunda ipucu "Kare" yazar.

   Başka bir düzlemde çizmek için o düzleme işaret edin: ilk köşeden geçen bir yüzey, dikdörtgeni o yüzeye yerleştirir; düzlem dışındaki bir noktaya (bir uç nokta, bir kenar, mavi eksen) yakalama, dikdörtgeni iki köşesinden geçecek şekilde dikey yapar. İlk düzlemdeki bir noktaya geri yakalarsanız yeniden yatar. Tek bir düzlemi korumak için bir ok tuşuna basın: {{key:Up}} dikdörtgeni yatay tutar (mavi düzlem), {{key:Right}} kırmızı düzlemde, {{key:Left}} yeşil düzlemde tutar. Kilidi açmak için aynı tuşa tekrar basın.
4. Karşı köşeye tıklayın ya da iki boyutu virgülle ayırarak yazın ve {{key:Enter}} tuşuna basın: `4m,3m`, milimetrik bir modelde `4000,3000`, ya da feet ve inç cinsinden `12',10'6"`.

   Etrafında dört kenarı olan bir yüzey belirir.

Yazılan ölçüler işaret ettiğiniz yöne doğru uygulanır: yazarken işaretçi ilk köşenin soluna düşüyorsa dikdörtgen sola doğru büyür.

:::warning
Virgül iki ölçüyü ayırır, bu yüzden ondalık ayraç olarak kullanılamaz. `2.5m,3m` yazın, asla `2,5m` yazmayın.
:::

## Daire veya çokgen çizin

1. Daire için {{key:C}}, çokgen için {{key:N}} tuşuna basın.
2. Kenar sayısını değiştirmek için tıklamadan önce yazın: `12s` (ya da sadece `12`) ve {{key:Enter}}. Daire 24 kenarla, çokgen 6 kenarla başlar. İpucu geçerli sayıyı gösterir ve ModelCraft, siz değiştirene ya da aracı değiştirene kadar bir sonraki daire için bu sayıyı korur.
3. Merkeze tıklayın; zeminde ya da bir yüzeyde. Daireyi bir yüzeyin merkezine yerleştirmek için işaretçiyi yüzeyin içinde, yüzeyin ortasına ("Yüzeyin merkezi") ya da kenarlarından birinin ortasına ("Orta nokta") getirin: daire o yüzeye çizilir, uzun bir kutunun dar ucunda bile.
4. Yarıçapı belirlemek için tıklayın ya da {{ui:Yarıçap}} değer kutusuna yazıp {{key:Enter}} tuşuna basın.

Daire, çok kenarlı bir çokgendir. Daireyi İt/çek ile yukarı çektiğinizde, silindir tek bir pürüzsüz yüzey gibi görünsün diye kenarları yumuşatılır.

## Yay çizin

1. {{key:A}} ({{ui:Yay}}) tuşuna basın.
2. Yayın başlayacağı yere, sonra bittiği yere tıklayın (ya da uçlar arasındaki uzunluğu yazın).
3. Yayı dışarı doğru şişirmek için işaretçiyi hareket ettirin ve tıklayın. Şişkinlik, uçlar arasındaki mesafenin yarısı olduğunda ipucu "Yarım daire" yazar. Ya da ortanın ne kadar dışarı çıkacağını yazın: `2` ve {{key:Enter}}.

Bunun yerine bir nokta etrafında yay çizmek için {{ui:Yay merkezi}} kullanın: önce merkeze, sonra yayın başladığı yere (ya da yarıçapı yazarak), sonra bittiği yere tıklayın (ya da derece cinsinden açıyı yazın, örneğin `90`). 15°'lik adımlarla yakalanır.

Bir yüzeyde başlatılan yay o yüzeye çizilir; aksi halde zeminde yatar ya da iki ucu farklı yükseklikteyse dik durur. Bir yayın 12 parçası vardır; daha fazlası için çizim sırasında `24s` yazın. Yaylar da çizgiler gibi yüzeyleri kapatır: bir dikdörtgenin köşesinden geçen bir yay onu böler.

## Düzgün bir eğri çizin

{{ui:Eğri}}, tıkladığınız her noktadan geçen pürüzsüz bir çizgi çizer: bir kablo, bir korkuluk yolu, bir bahçe kenarı. Zeminden ayrılabilir: noktalar her yerde köşelere, kenarlara ve yüzeylere yakalanır ve ok tuşları, {{ui:Çizgi}} ile olduğu gibi kırmızı, yeşil veya mavi yönü kilitler.

1. {{ui:Çizim}} grubunda {{ui:Eğri}} düğmesine tıklayın.
2. Eğrinin geçeceği noktalara tıklayın. Son noktanın 1 birim üstündeki bir nokta için `<0,0,1>` yazıp {{key:Enter}} tuşuna basın, tam bir yer için `[x,y,z]`, ya da işaretçi yönünde o kadar uzakta bir nokta için bir uzunluk yazın.
3. Bitirmek için {{key:Enter}} tuşuna basın ya da çift tıklayın. Eğriyi kapatmak için ilk noktaya tekrar tıklayın. {{key:Backspace}} son noktayı geri alır.

Bir eğri tek parça olarak seçilir. Değiştirmek için seçin ve {{ui:Öğe bilgisi}} içinde {{ui:Noktaları düzenle}} düğmesine tıklayın: noktaları kare olarak görünür. Birine tıklayın, sonra gitmesi gereken yere tıklayın (ya da `<dx,dy,dz>` yazın). {{key:Esc}} bir noktayı eski yerine geri koyar ve düzenlemeyi bitirir. Kapalı ve düz bir eğri bir yüzey oluşturur; bir yüzeyin anahattını oluşturan bir eğri artık düzenlenemez.

## Ofset: yüzeyin içinde veya dışında bir kenarlık

{{ui:Ofset}}, bir yüzeyin anahattını belirli bir mesafe içine (ya da dışına) kopyalar; bir çerçeve, bir kenarlık, bir eşik ya da bir ekranın camı için kullanılır.

1. {{key:F}} tuşuna basın ve yüzeye tıklayın ya da önce yüzeyi seçip sonra {{key:F}} tuşuna basın.
2. İç anahat için işaretçiyi yüzeyin içine, dış anahat için dışına getirin. Yeni anahat takip eder ve ipucu mesafeyi gösterir.
3. Tıklayın ya da mesafeyi yazıp {{key:Enter}} tuşuna basın.

Yüzey ikiye ayrılır: iç yüzey ve onun etrafındaki bir çerçeve (ya da dışta yeni bir halka). İkisinden birini hemen İt/çek ile çekin: bir ekran için kutuyu çizin, kalınlığına kadar itin, ön yüzeyi 30 mm içeri doğru ofsetleyin ve cam için iç yüzeyi biraz itin. Yüzeydeki delikler de ofsetlenir; bir yay ya da daire ise tek bir (daha küçük ya da daha büyük) eğri olarak kalır.

- **Çift tıklayın:** {{ui:Ofset}} ile bir yüzeye çift tıklarsanız, son mesafeyle yeniden ofsetlenir.
- **Kenarlar:** aynı düzlemde bağlı bir kenar zinciri seçin (örneğin bir L'nin iki çizgisi), {{key:F}} tuşuna basın, istediğiniz tarafa gidin ve mesafeyi yazın: köşeleri köşe birleşimli (mitre) paralel bir kopya çizilir.
- Mesafe yüzeyin izin verdiğinden fazla olursa ModelCraft bunu söyler ve hiçbir şey çizmez.

## Yaylar, daireler ve çokgenler birer eğridir

Bir yayın, bir dairenin ya da bir çokgenin herhangi bir parçasına tıklayın; tüm eğri seçilir. {{ui:Öğe bilgisi}} o zaman yarıçapını, parça sayısını, açısını (yaylar için) ve uzunluğunu gösterir. Merkezine göre boyutunu değiştirmek için orada yeni bir yarıçap yazın; düzleminde çizilen yüzeyler de takip eder. Bir eğrinin yüzeyi bir kez itilip çekildikten sonra yarıçapı olduğu gibi kalır.

## Çizgilerle çizin

1. {{key:L}} tuşuna basın.
2. Çizginin başladığı yere tıklayın.
3. Bittiği yere tıklayın ya da bir uzunluk yazıp {{key:Enter}} tuşuna basın. Yazılan uzunluk işaretçinin gösterdiği yönde uygulanır.
4. Tıklamaya devam edin. Her tıklama, bir önceki çizginin sonundan yeni bir çizgi başlatır.
5. Anahattı kapatmak için ilk noktaya tekrar tıklayın. Çizgiler düz bir döngü kapattığında içi bir yüzeyle dolar ve araç zincirleme çizmeyi bırakır. Herhangi bir zamanda durmak için {{key:Esc}} tuşuna basın.

Kırmızı, yeşil ve mavi yönlere yaklaştığınızda çizgi bu yönleri takip eder; çizgi o renge döner ve ipucu "Kırmızı eksende" yazar. Bir yönü nasıl kilitleyeceğinizi ve noktalara nasıl yakalayacağınızı görmek için [Çıkarım ve yakalama](topic:inference) bölümüne bakın.

### Çizgi hiçbir şeye dokunmazsa nereye gider

- Bir yüzeyde başlayan çizgi, o yüzeyin düzleminde kalır.
- Zeminde ya da boş alanda başlayan bir çizgi, başlangıç noktasıyla aynı yükseklikte kalır. Modele kenardan bakıyorsanız, bunun yerine size bakan dikey düzlemde gider.
- Bir çizgiyi tam bir yere çizmek için bir nokta yazın: modeldeki bir nokta için `[x,y,z]`, başlangıçtan bir fark için `<dx,dy,dz>`. Bkz. [Tam ölçüleri yazın](topic:value-box).

## Yüzeyi bölün

Bir yüzeyin üzerinde, bir kenardan diğerine (ya da diğer çizgiler üzerinden kenardan kenara) bir çizgi çizin. Yüzey iki yüzeye bölünür. Her biri kendi tarafını ve rengini korur. Bir yüzeyin üzerine çizilmiş bir dikdörtgen ya da daire de aynı şekilde çalışır: şekil, daha büyük yüzeyin içinde kendi yüzeyi olur ve büyük yüzeyde artık bir delik oluşur.

Bu yöntemle bir döşeme üzerinde odaları, bir duvarda bir pencereyi ya da bir merdivende bir basamağı yerleştirirsiniz: anahattı yüzeye çizin, sonra yeni yüzeyi itin ya da çekin.

## Yanlış yöne bakan yüzeyler

Her yüzeyin bir ön ve bir arka tarafı vardır. Arka taraf mavi-gri görünür. Zeminde çizilen yüzeyler yukarı bakar; başka bir yüzeyin üzerine çizilenler, o yüzeyin baktığı yöne bakar.

Bir yüzeyde ön yüzü beklediğiniz yerde arka yüz görünüyorsa, yüzeyi seçin ve {{ui:Öğe bilgisi}} içinde {{ui:Yüzeyi ters çevir}} düğmesine tıklayın.

## Çizim sırasında gördükleriniz

- İşaretçinin yakaladığı yerde renkli bir işaretleyici ve sol altta ipucunda adı.
- Çizginin ya da şeklin önizlemesi.
- Değer kutusunda canlı ölçü. İstediğiniz zaman üzerine yazabilirsiniz.

## Şekil beklediğiniz yerde değilse

- Dokunmatik ekranda şekil yanlış yerde başlarsa, bkz. [Sorun giderme](topic:troubleshooting#a-shape-starts-in-the-wrong-place-on-a-touch-screen).
- Bir çizgi uzaktaki bir şeye yakalandıysa, görünümü biraz döndürün: bir yüzeyin arkasında gizli noktalar hiç yakalanmaz, ama kenarındaki noktalar yakalanır.
- Son şekli geri almak için {{key:Mod+Z}} tuşuna basın; bir geri alma bir çizgiyi ya da bir şekli kaldırır.
