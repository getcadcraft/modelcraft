---
title: USD kaydet, aç ve dışa aktar
summary: Tüm modeli hiçbir şey kaybetmeden USD (.usda, .usdc ya da .usdz) olarak kaydedin, yeniden açın ve diğer 3B programlardan USD sahneleri içe aktarın.
keywords: usd, usda, usdc, usdz, openusd, evrensel sahne tanımı, farklı kaydet, dışa aktar, içe aktar, sahne birleştirme, archviz, openpbr, materialx, paket
from: 73d299f9
---

USD, birçok 3B, oluşturma ve archviz programının paylaştığı bir sahne biçimidir. ModelCraft onu yazar ve okur. `.modelcraft`, {{ui:Kaydet}} ile yazılan biçim olarak kalır; USD, {{ui:Farklı kaydet}} içinde bir seçenektir.

## USD olarak kaydedin

1. {{ui:Dosya}} grubundaki {{ui:Farklı kaydet}} öğesini seçin (ya da {{key:Mod+Shift+S}} tuşlarına basın).
2. Biçimi seçin: {{ui:Metin (.usda)}} (okunabilir, sürüm kontrolü için iyi), {{ui:İkili (.usdc)}} (en küçük ve en hızlı) ya da {{ui:Paket (.usdz)}} (içinde dokular olan tek dosya).
3. Dosya indirilir (masaüstü uygulamasında nereye gideceğini siz seçersiniz).

Aynı seçenekler {{ui:Dışa aktar}} › {{ui:USD (.usda, .usdc, .usdz)…}} içindedir.

## Hiçbir şey kaybolmaz

ModelCraft'ın kaydettiği bir USD dosyasını açtığınızda modeli tam olarak geri alırsınız: delikleriyle birlikte yüzeyler, yumuşak ve gizli kenarlar, eğriler, gruplar ve bileşenler, etiketler, sahneler, ölçülendirmeler, kılavuzlar, kesit düzlemleri, lambalar, içe aktarılan dokular ve görünüm. Diğer programlar aynı modeli örgüler (mesh), gruplar, bileşenler için prototipler, malzemeler, lambalar ve kameralar olarak görür.

:::note
Başka bir program bir grubun ya da bileşenin geometrisini değiştirirse, ModelCraft o parçayı değişikliği korunmuş bir örgü olarak açar ve bu şekilde kaç parça okuduğunu söyler. Başka bir programda taşınmış ya da silinmiş bir yerleşim, taşınmış ya da silinmiş olarak kalır.
:::

## Başkasının USD dosyasını açın ya da içe aktarın

- Bir `.usd`, `.usda`, `.usdc` ya da `.usdz` dosyasını {{ui:Aç}} ile o dosyadan bir model başlatın.
- Açık modele eklemek için birini {{ui:İçe aktar}}. Ona başvuran dosyaları (diğer katmanlar, dokular) onunla birlikte bırakın.

Örgüler normalleriyle, UV koordinatlarıyla ve renkleriyle gelir; paylaşılan geometri bileşen olarak, malzemeler boya renkleri olarak, lambalar lamba olarak ve kameralar sahne olarak gelir; dosyanın birimleri ve yukarı ekseni ne olursa olsun, metre cinsinden ve Z yukarı.

## Henüz değil

Canlandırma, iskeletler ve MaterialX düğüm grafikleri henüz USD olarak okunmaz ya da yazılmaz. ModelCraft'ın kendi canlandırması ve düğüm malzemeleri, ModelCraft'ın yeniden açması için kaydettiği bir USD dosyasında tutulur, ama diğer programlar bunları görmez. ModelCraft'ın okuyamadığı, bir dosyanın başvurduğu katmanlar (örneğin bir MaterialX belgesi) bir notla birlikte dışarıda bırakılır.
