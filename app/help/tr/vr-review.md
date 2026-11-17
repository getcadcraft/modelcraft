---
title: Modeli bir VR gözlüğünde inceleyin
summary: Modeli bir VR gözlüğünde gerçek boyutunda gezin: zıplayın, dönün, ölçün, kesip açın, resimle sorun yerleştirin, masa üstü maketi olarak görün ve canlı bir oturumun diğer katılımcılarıyla buluşun.
keywords: vr, sanal gerçeklik, gözlük, webxr, xr, sürükleyici, quest, oculus, vive, index, pico, gezin, gezinti, ışınlanma, tasarım incelemesi, inceleme, ölç, kesit, kes, sorun, sorunlar, bcf, masa üstü, ölçekli maket, varlık, avatarlar, canlı, birlikte
from: fa2f591a
---

{{ui:VR'de incele}} modelin içine, bir VR gözlüğüyle gerçek boyutta sizi yerleştirir. Görünümün kamerasının olduğu yerde, onun altındaki zeminde, aynı yöne bakarak durursunuz. Hiçbir şey yüklenmez: gözlük, bu bilgisayarda (ya da gözlüğün kendi tarayıcısında) tarayıcının çizdiğini gösterir.

## Gerekenler

- Tarayıcının sürebileceği bir gözlük (WebXR): bağımsız bir gözlüğün kendi tarayıcısı ya da bilgisayara bağlı bir gözlüğü olan bir PC'de Chrome veya Edge.
- ModelCraft'ın güvenli bir sayfada (https) açık olması, bu sitedeki gibi.

Gözlük yoksa {{ui:VR'de incele}} soluk görünür ve nedenini söyler.

## Başlatın

1. Görünümü başlamak istediğiniz yere ayarlayın: bir odada ya da binaya dışarıdan bakarak.
2. {{ui:Kamera}} grubunda {{ui:Görünümler}} öğesine, sonra {{ui:VR'de incele}} öğesine tıklayın.
3. Gözlüğü takın.

Menü sol elinizin arkasında yer alır. Sağ denetleyiciyle ona işaret edin ve bir düğmeyi seçmek için tetiğe basın. (Yalnızca tek elle, menü başladığınız yerin önünde süzülür.)

## Nasıl göründüğü

Gözlük modeli [canlı görünümün](topic:live-view) görünümüyle gösterir: yüzlere verdiğiniz görünümler ve malzemeler, gökyüzü ve güneş (modelinizin konumu ve tarihine göre gölgesiyle birlikte), lambalar, dağınık bitkiler ve kayalar ile duvarlardan ve zeminlerden yansıyan ışık (bu bilgisayarda siz etrafa bakarken hesaplanır ve siz hareket ettikçe izler). Parlaklık ve görünüm dönüşümü (ACES veya AgX), [Bir resim render edin](topic:render) bölümündekilerdir. Ne kadarının çizileceği, gözlüğün tarayıcısında ne olduğuna bağlıdır, masaüstündeki gibi; ortam kapanması, yansımalar ve parlama masaüstünde kalır.

## Etrafta hareket edin

- **Zıplama:** {{ui:Taşı}} modunda bir zemine işaret edin ve tetiğe basın; oraya inersiniz. Ya da hedeflemek için çubuğu ileri itin, bırakınca zıplarsınız. Yalnızca zeminlere ve yere (yukarı bakan yüzeylere) inebilirsiniz, asla bir duvara değil.
- **Dönme:** çubuğu sola veya sağa itin: her seferinde 30° dönersiniz.
- **Yürüme:** oyun alanınızda sadece yürüyün.

## Ölçme

{{ui:Ölç}} seçin, sonra iki noktada tetiğe basın. Aralarındaki mesafe modelin birimlerinde gösterilir. Bir köşeye yakın bir nokta köşeye yapışır.

## Kesip açın

{{ui:Kesit}} seçin ve bir yüzeyde tetiğe basın:

- bir duvarda (ya da zemin olmayan herhangi bir şeyde): sizinle o yüzey arasındaki her şey kesilip kaldırılır, böylece içeriyi görürsünüz. En iyi sonucu dışarıdan veya bir odanın karşısından alırsınız;
- bir zeminde, yukarıdan: o zeminin 1.2 m üstünden bir plan kesiti, böylece duvarlar alt kısımlarını gösterir.

{{ui:Temizle}} kesiti ve ölçümleri kaldırır. Başladığınızda görünümde bir kesit düzlemi modeli kesiyorsa, gözlük onunla başlar.

## Bir sorun yerleştirin

{{ui:Sorun}} seçin ve sorunun olduğu yerde tetiğe basın. Numaralı bir iğne onu işaretler; ModelCraft sorunu, gördüğünüz şeyin bir resmi ve nerede durduğunuzla birlikte saklar. VR'den çıktığınızda sorunlar sağdaki {{ui:Sorunlar}} listesindedir:

- göz düğmesi, sorunu yerleştirildiği yerden gösterir;
- {{ui:BCF olarak kaydet}}, hepsini bir BCF dosyası olarak indirir; bunu BIM inceleme programları açar (kamera ve resim dahil);
- sorunlar `.modelcraft` dosyasında da saklanır.

Bir soruna yorum eklemek için VR'den çıktıktan sonra bir BCF programında yazın: gözlük içinde yazmak henüz yapılmadı.

## Masa üstü maketi olarak görün

{{ui:Masa üstü}} modeli önünüzdeki bir masaya sığacak şekilde küçültür; etrafında yürüyün ya da çubukla döndürün. {{ui:Gerçek boyut}} sizi nerede olduğunuza geri koyar.

## Diğerleriyle, canlı

[Canlı bir oturumda](topic:work-live), VR'deki herkes diğerlerini kendi renginde, adıyla birlikte bir kafa ve iki el olarak görür; ayrıca herkesin işaret ettiği yerde bir nokta. Herkesin yaptığı düzenlemeler bir an içinde gözlüğünüze ulaşır. Masadaki kişiler gözlükte henüz gösterilmez.

## Çıkın

{{ui:VR'den çık}} seçeneğini seçin (ya da gözlüğü çıkarıp orada bitirin). Ekrandaki görünüm başınızın olduğu yere taşınır.

:::note
Yalnızca bir gözlük öykünücüsüyle test edildi, henüz gerçek bir gözlükle değil. Büyük bir model gözlükte takılmalara yol açabilir: önce ihtiyacınız olmayanı gizleyin ([gizle ve izole et](topic:hide-isolate)).
:::
