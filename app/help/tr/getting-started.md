---
title: ModelCraft'a başlangıç
summary: ModelCraft'ın ne işe yaradığı, nasıl açılacağı ve bir dikdörtgenden kaydedilmiş bir modele ilk kutunuz.
keywords: başlangıç, ilk model, başla, öğretici, giriş, kutu, kütle çalışması, 3b, it çek, hızlı başlangıç, adım adım, rehber, yeni başlayan, 3b'de yeni
from: d47ad719
---

ModelCraft, erken tasarım için bir 3B modelleyicidir: kütle çalışmaları, oda yerleşimleri, hızlı bina biçimleri ve düşürdükleri gölgeler. Düz şekiller çizer, onları katılara yukarı çeker ve yüzeylerine çizerek üzerlerinde çalışmaya devam edersiniz. Web tarayıcınızda çalışır ve modelleriniz bilgisayarınızda kalır.

SketchUp kullandıysanız bildiklerinizin çoğu geçerlidir: aynı araç harfleri, it/çek, tam ölçüler için değer kutusu, gruplar ve bileşenler. [Başka modelleyicilerden geliyorsanız](topic:coming-from) nelerin farklı olduğunu listeler.

## ModelCraft'ı açın

1. ModelCraft'ı Chrome, Edge, Firefox veya Safari'nin güncel bir sürümünde açın. Bkz. [Tarayıcılar ve bilgisayarlar](common:browsers).
2. 3B görünümün belirmesini bekleyin: ortada açık (veya koyu) bir alan ve "Modellemeye başlayın" başlıklı bir kart.

Ekranda üstte bir araç çubuğu, solda {{ui:Ağaç görünümü}} ve {{ui:Bileşenler}}, ortada 3B görünüm, sağda {{ui:Öğe bilgisi}}, {{ui:Stil}} ve {{ui:Sahneler}}, altta da değer kutusu ve birimlerle bir durum çubuğu bulunur. [ModelCraft ekranı](topic:workspace) her bölümü açıklar.

:::note
ModelCraft, tarayıcınızın 3B çizim özelliği olan WebGL'e ihtiyaç duyar. Ekranın ortası boş kalıyorsa ve araçlar bir şey yapmıyorsa bkz. [Sorun giderme](topic:troubleshooting#the-3d-view-is-blank).
:::

## Önce birimleri denetleyin

Sağ alt köşeye bakın. Birim seçici, uzunlukların neyle ölçüldüğünü gösterir.

- Yeni bir model, tarayıcınız Amerika Birleşik Devletleri'ne (ayrıca Liberya ve Myanmar) ayarlıysa **fit ve inç** ile, başka her yerde **milimetre** ile başlar.
- Değiştirmek için seçicide başka bir birim seçin: {{ui:ft ve in}}, {{ui:in}}, {{ui:m}}, {{ui:cm}} veya {{ui:mm}}. Modelin kendisi boyut değiştirmez; yalnızca uzunlukların nasıl gösterildiği ve yalın sayıların nasıl okunduğu değişir.

Birimsiz yazdığınız bir sayı modelin birimini kullanır. Fit ve inç cinsinden bir modelde yalın sayı **inç** demektir, yani `120` 10 fit eder.

## ModelCraft ilk modelinizde size rehberlik etsin

3B'de yeni misiniz? {{ui:Modellemeye başlayın}} kartında {{ui:Adım adım ilk model}} seçeneğine tıklayın (ayrıca {{ui:Görünümler}} içinde de vardır). Küçük bir kart sizi düz bir dikdörtgenden 3B yazıcıya hazır bir modele dört adımda götürür:

1. Zemine bir dikdörtgen çizin.
2. Onu bir kutu olarak yukarı çekin.
3. Kutuyu tek bir nesne (grup) yapın.
4. 3B baskı için denetleyin, sonra bir 3MF veya STL dosyası indirin.

Kart düğmeleri değil modeli izler: adım, nasıl yaptığınızdan bağımsız olarak bittiğinde ilerler ve geri aldığınızda bir adım geri gider. {{ui:Aracı seçin}} aracı sizin için seçer. {{ui:×}} ile istediğiniz zaman kapatın.

## İlk kutunuzu çizin

1. {{ui:Dikdörtgen}} aracı için {{key:R}} tuşuna basın ya da araç çubuğunun {{ui:Çizim}} grubunda {{ui:Dikdörtgen}} seçeneğine tıklayın.
2. Görünümün ortasına yakın bir yerde zemine bir kez tıklayın. Bu ilk köşedir.
3. İşaretçiyi uzaklaştırın. Bir dikdörtgen onu izler ve altta ({{ui:Boyutlar}} etiketli) değer kutusu boyutunu gösterir.
4. Boyutu yazın ve {{key:Enter}} tuşuna basın: örneğin `4m,3m` ya da fit ve inç için `16',12'`. Önce değer kutusuna tıklamanız gerekmez; bir sayı yazmak onu oraya gönderir.

   Zeminde düz bir dikdörtgen elde edersiniz. Bu bir **yüzeydir**: çevresinde kenarları olan bir yüz.

5. {{ui:İt/çek}} için {{key:P}} tuşuna basın.
6. Dikdörtgene tıklayın, işaretçiyi yukarı götürün ve yeniden tıklayın. Ya da dikdörtgene tıklayın ve `3m` veya `10'` gibi bir yükseklik yazıp {{key:Enter}} tuşuna basın.

   Dikdörtgen üstü, altı ve dört yanı olan bir kutu olur.

7. {{ui:Seç}} aracına dönmek için {{key:Space}} tuşuna basın, sonra kutunun üstüne tıklayın. Sağdaki {{ui:Öğe bilgisi}} alanını gösterir.

:::tip
İki kez tıklamak yerine sürükleyebilirsiniz de: ilk köşeye basın, sürükleyin ve ikinci köşede bırakın. Her iki yol da tüm çizim araçlarında çalışır.
:::

## Çevrenize bakın

- **Yörünge:** orta fare düğmesiyle (tekerlek) sürükleyin ya da {{key:O}} tuşuna basıp sol düğmeyle sürükleyin.
- **Kaydırma:** sağ düğmeyle ya da {{key:Shift}} basılıyken orta düğmeyle sürükleyin.
- **Yakınlaştırma:** tekerleği çevirin. İşaretçinin altındaki şeye doğru yakınlaşır.
- **Her şeyi görme:** {{key:Shift+Z}} tuşlarına basın veya {{ui:Sınırlar}} seçeneğine tıklayın.

Dokunmatik yüzeyde veya dokunmatik ekranda hareketler farklıdır. Bkz. [Yörünge, kaydırma ve yakınlaştırma](topic:orbit-pan-zoom).

## Geri alma

Geri almak için {{key:Mod+Z}}, yinelemek için {{key:Mod+Y}} tuşlarına basın ya da araç çubuğunda {{ui:Geri al}} ve {{ui:Yinele}} kullanın. ModelCraft model açıkken son 200 adımı hatırlar. Geçmiş dosyaya kaydedilmez.

## Modelinizi kaydedin

1. {{ui:Dosya}} grubunda {{ui:Kaydet}} seçeneğine tıklayın ya da {{key:Mod+S}} tuşlarına basın.
2. Tarayıcı, modelinizin adını taşıyan bir dosya indirir, örneğin `Untitled.modelcraft`. Durum çubuğu nereye gittiğini söyler: "Untitled.modelcraft indirilenler klasörüne kaydedildi."

**Kaydetme bir indirmedir.** Her kaydetme indirilenler klasörünüzde yeni bir kopya oluşturur; açtığınız dosyanın üzerine yazmaz. Proje klasörünüzü düzenli tutmak için dosyayı orada kendiniz taşıyın veya yeniden adlandırın. [Açma, kaydetme, içe ve dışa aktarma](topic:files) nedenini ve başka neler yapabileceğinizi açıklar.

:::warning
ModelCraft kendiliğinden kaydetmez. Kaydedilmemiş değişikliklerle sekmeyi kapatırsanız tarayıcı önce sorar ("Siteden ayrılınsın mı?"). Kalmayı seçin, sonra kaydedin.
:::

## Yardım alın

Yardımı modelin yanında açmak için {{key:F1}} tuşuna basın ya da uygulama çubuğunda {{ui:Yardım}} seçeneğine tıklayın. Bağlantı olmadan çalışır. Kapatmak için yeniden {{key:F1}} tuşuna ya da yardımın içinde {{key:Esc}} tuşuna basın. Bkz. [Bu yardımı kullanma](common:help).

## Sonra nereye

- [Çizgiler, dikdörtgenler ve dairelerle yüzey çizme](topic:draw-faces)
- [Yüzeyleri katılara itme ve çekme](topic:push-pull)
- [Değer kutusuna tam boyutları yazma](topic:value-box)
- [Her tuş ve fare eylemi](topic:keyboard)
