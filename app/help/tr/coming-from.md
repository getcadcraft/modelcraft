---
title: Diğer modelleyicilerden geçiş
summary: Push/pull modelleme alışkanlıklarının ModelCraft'a tuş tuş nasıl karşılık geldiği ve insanları şaşırtan farklılıklar.
keywords: geçiş, taşıma, tanıdık, farklılıklar, push pull modelleyici, skp, kısayollar, alışkanlıklar, karşılaştır, ölçü kutusu, değer kutusu, ağaç görünümü, öğe bilgisi
from: 74ffd4ac
---

SketchUp'ta modelleme yaptıysanız ModelCraft tanıdık gelecek: aynı yüz ve push/pull fikri, aynı araç harfleri, tıklamadan yazabileceğiniz bir değer kutusu, kırmızı, yeşil ve mavi eksenlerle çıkarım, gruplar, bileşenler, bir Ağaç görünümü, Öğe bilgisi ve sahneler. Bu sayfa doğrudan aktarılanları ve daha önemlisi aktarılmayanları listeler.

## Doğrudan aktarılan alışkanlıklar

| Alıştığınız | ModelCraft'ta |
|---|---|
| Seç için Space, Çizgi için L, Dikdörtgen için R, Daire için C'ye basın | Aynısı: {{key:Space}}, {{key:L}}, {{key:R}}, {{key:C}} |
| Push/Pull için P, Taşı için M, Döndür için Q, Ölçekle için S, Silgi için E, Şerit metre için T'ye basın | Aynısı: {{key:P}}, {{key:M}}, {{key:Q}}, {{key:S}}, {{key:E}}, {{key:T}} |
| Yörünge için O, Kaydır için H, Yakınlaştır için Z, Sınırlara yakınlaştır için Shift+Z'ye basın | Aynısı: {{key:O}}, {{key:H}}, {{key:Z}}, {{key:Shift+Z}} |
| Bileşen oluşturmak için G'ye basın | Aynısı: {{key:G}}. {{key:Shift+G}} bir grup oluşturur |
| Ölçü kutusuna tıklamadan yazın | Aynısı, alttaki değer kutusunda. {{key:Enter}} tuşuna basın |
| Dikdörtgen için `4m,3m`, kenarlar için `12s` yazın | Aynısı |
| Taşı kopyasından sonra `3x` ya da `/3` yazın | Aynısı; `*3` de çalışır |
| Bir nokta ya da öteleme için `[x,y,z]` ya da `<dx,dy,dz>` yazın | Aynısı |
| İnç ile çalışan bir modelde çıplak bir sayı yazın, inç alın | Aynısı |
| Orta tuşla sürükleyerek yörüngede dönün, Shift ile orta tuşla kaydırın, tekerlekle imleçte yakınlaştırın | Aynısı |
| Push/Pull ile çift tıklayarak mesafeyi tekrarlayın | Aynısı |
| Kırmızı, yeşil, mavi ve paralel için ok tuşlarıyla kilitleyin | Aynısı: {{key:Right}} kırmızı, {{key:Left}} yeşil, {{key:Up}} mavi, {{key:Down}} paralel |
| Bir çıkarımı kilitlemek için Shift basılı tutun | Aynısı |
| Taşırken kopyalamak için Ctrl (Mac'te Option) | {{key:Ctrl}}, {{key:Mod}} ya da {{key:Alt}}, herhangi bir bilgisayarda |
| Seçime eklemek için Shift, eklemek için Ctrl, seçimden çıkarmak için Shift+Ctrl | Aynı tuşlar; Mac'te Ctrl yazan yerde {{key:Mod}} kullanın |
| Soldan sağa pencere, sağdan sola kesişen pencere | Aynısı |
| Uzunlukları etiketlemek için Ölçülendirme aracı | {{key:D}}, ve daha fazlası: bir ölçülendirmeye yeni bir uzunluk yazın, model ona göre yeniden boyutlanır. Bkz. [Ölçülendirme ve yeniden boyutlandırma](topic:dimensions) |
| Yüz ve kenarlar için bir yüzeye çift tıklayın; bağlı olanların hepsi için üç kez tıklayın | Aynısı |
| Bir grubu düzenlemek için çift tıklayın; kapatmak için Esc | Aynısı |
| Bir yüzeyi bölmek için üzerinden bir çizgi çizin; aynı düzlemdeki yüzeyler arasındaki bir kenarı silerek onları birleştirin | Aynısı |
| Bir pencere dikdörtgenini bir duvardan geçirerek kesin | Aynısı |
| Arka yüzler mavi-gri; Yüzeyleri ters çevir | Aynı renk; {{ui:Öğe bilgisi}} içinde {{ui:Yüzeyi ters çevir}} |
| Görünümün üstünde sekme olarak sahneler, Page Up ve Page Down | Aynısı; {{ui:Sahneler}} panelinde {{ui:Oynat}} ile |
| Tarih, saat, enlem ve boylamdan gölgeler, kuzey yeşil ile | Aynısı, {{ui:Stil}} panelinde |

## Insanları şaşırtan farklılıklar

### Kaydetmek bir indirmedir

Açtığınız dosyanın üzerine yazan bir Kaydet yoktur, bir ad soran bir Farklı kaydet iletişim kutusu yoktur, otomatik kaydetme ve yedek dosya da yoktur. {{ui:Kaydet}} ({{key:Mod+S}}) her seferinde yeni bir `.modelcraft` dosyası indirir, genellikle indirmeler klasörünüze. Sık sık kaydedin; dosyaları kendiniz yeniden adlandırın ya da taşıyın. Bkz. [Açma, kaydetme, içe ve dışa aktarma](topic:files).

### .skp dosyalarını içe aktarır, ama kaydetmez

{{ui:İçe aktar}}, SketchUp dosyalarını ModelCraft'ın kendi okuyucusuyla, sayfanın içinde okur: gruplar, bileşenler, renkler, yüzeylerdeki dokular, etiketler ve yumuşak kenarlar aktarılır. Bkz. [Dosya biçimleri ayrıntılı](topic:formats#skp-files). ModelCraft `.skp` kaydedemez: geri dönmek için ModelCraft'tan Collada olarak dışa aktarın ve SketchUp'ta içe aktarın.

### Sağ tık menüsü yok

Sağ tuşla sürükleme kaydırır; sağ tıklama bir şey yapmaz. Bağlam menüsünde bulacağınız komutlar {{ui:Öğe bilgisi}} içindedir ({{ui:Yüzeyi ters çevir}}, {{ui:Düzenle}}, {{ui:Patlat}}, {{ui:Tekil yap}}, {{ui:Bileşen oluştur}}) ve araç çubuğundaki {{ui:Yönet}} grubunda.

### Birimler durum çubuğunda

Model Bilgisi ya da şablon seçimi yoktur. Birim seçici sağ altta yer alır. Yeni bir model, tarayıcınızın dil ayarına göre ABD'de fit ve inç ile, başka yerlerde milimetre ile başlar. Ondalıklar her zaman nokta ile yazılır: `2.5m`, asla `2,5m`; çünkü virgül her zaman değerleri ayırır.

### Boyamanın kendi malzemeleri var

{{ui:Boya}} ({{key:B}}) düz renkleri ve {{ui:Malzemeler}} bölümündeki malzemeleri boyar: tuğla, kaplama, çatı kaplaması, ahşap, taş ve daha fazlası, ModelCraft tarafından çizilir. Kendi resminizi henüz malzeme olarak yükleyemezsiniz; içe aktarılan dosyalarla gelen dokular korunur. Bkz. [Renk ve malzemelerle boyama](topic:paint).

### Ölçekleme tekdüze olur, tutamaç yoktur

Ölçekle, tutamaçlı bir kutu göstermez. Yerinde kalacak noktayı, bir referans noktasını tıklayın, sonra yeni boyutu ya da yazdığınız bir çarpanı girin. Her zaman tüm yönlerde eşit ölçeklenir. Tek bir yönde esnetmek için push/pull yapın ya da bir yüzeyi taşıyın; ya da bir grubun genişliğini, derinliğini veya yüksekliğini {{ui:Öğe bilgisi}} içinde yeniden yazın ya da [bir ölçülendirme ile yeniden boyutlandırın](topic:dimensions).

### Döndürme düzlemini tıkladığınız yerden seçer

Ok tuşlarıyla düzlemi seçmek için yüzeylerin üzerinde gezinirken yüzeylere yapışan bir açıölçer yoktur. Bir yüzeyin düzleminde dönmek için yüzeyin merkezine, dikey eksende dönmek için zemine tıklayın. Ok tuşları ilk tıklamadan önce görünümü yörüngede döndürür.

### Üzerinden geçtiğiniz noktalardan çıkarım

ModelCraft eksen yönlerine **başlangıç noktanızdan** yakalar; ayrıca imlecin altındaki noktalara, kenarlara ve yüzeylere. Yalnızca üzerinde durduğunuz bir noktadan bir yön izlemez (noktalı "noktadan" çıkarımı). Uzak bir köşeyle hizalanmak için, ok tuşuyla ekseni kilitleyin ve o köşenin üzerine gelin: kilitli nokta onunla hizalanmak üzere kayar. Ya da bir [kılavuz](topic:guides-measure) yerleştirin.

### Paralel, başlamadan önce üzerinden geçtiğiniz kenarı kullanır

Paralel ve dik çıkarımı, imleç **ilk tıklamadan önce** geçtiği son kenarı kullanır; çizim sırasında üzerinden geçtiğiniz kenarları değil. Bkz. [Çıkarım ve yakalama](topic:inference#parallel-and-perpendicular).

### Bir grubun kopyaları bağlıdır

{{ui:Taşı}} ile bir grubu kopyalamak, aynı grubun ikinci bir yerleşimini yapar; bu yüzden birini düzenlemek her ikisini de değiştirir, bileşenlerde olduğu gibi. SketchUp gruplarını bağımsız yapar. Bkz. [Sorun giderme](topic:troubleshooting#editing-one-group-changed-another).

### Space kaydırmaz

{{key:Space}}, SketchUp'ta olduğu gibi {{ui:Seç}}'i seçer. Başka bazı web uygulamalarında Space basılı tutulduğunda kaydırılır; burada kaydırmaz. Bunun yerine sağ tuşla sürükleyin.

### İki parmakla kaydırma yakınlaştırır

Bir dokunmatik yüzeyde {{ui:Ayarlar}} › {{ui:ModelCraft}} › Kaydırma'yı Dokunmatik yüzey olarak ayarlayın: iki parmak yörüngede döndürür, {{key:Shift}} ve iki parmak kaydırır, sıkıştırma yakınlaştırır. Bkz. [Yörünge, kaydırma ve yakınlaştırma](topic:orbit-pan-zoom#on-a-trackpad).

Eliniz SketchUp'ın tuşlarına değil de Blender'ın tuşlarına alışkınsa, {{ui:Modeler}} menü stilini seçin: {{key:G}}, {{key:R}} ve {{key:S}} seçimi birlikte etkiler, {{key:E}} ekstrüzyon (push/pull) yapar, {{key:Shift+D}} çoğaltır ve bir üst menü çubuğu (Dosya, Düzenle, Görünüm, Seç, Ekle, Nesne, Örgü) araç çubuğunun yerini alır. SketchUp'tan geliyorsanız, {{ui:İt/çek}} stili aynı araç harflerinin üzerinde kendi menü çubuğunu verir. Bkz. [Menüler, tuşlar ve fare](topic:menus-keys-and-mouse).

### Birbirine itilen katılar kesilmez

Push/pull, aynı nesnedeki arkadaki yüzeyi keser; ama birbirine itilen iki ayrı katı kesişmez. Yüzeyleri Kesiştir ve Katı Araçları yoktur.

### Eksik olanlar

Serbest çizim, Kırp, Böl ve Dış kabuk, kendi resim malzemeleriniz, eklentiler ve sayfalar için bir yerleşim aracı bu sürümde yoktur. [Henüz yapılmadı](topic:not-built-yet) bunların yerine ne yapacağınızı listeler.

## Tarayıcının kullandığı kısayollar

ModelCraft bir tarayıcıda çalışır, bu yüzden bazı kısayollar uygulamaya değil tarayıcıya aittir. {{key:Mod+N}} bir tarayıcı penceresi açar (bunun yerine {{ui:Yeni}} kullanın) ve {{key:Mod+W}} sekmeyi kapatır. Kaydedilmemiş değişiklikleriniz varsa tarayıcı kapatmadan önce sorar. Bkz. [Tuşlar, fareler ve dokunmatik yüzeyler](common:keys#shortcuts-the-browser-keeps).
