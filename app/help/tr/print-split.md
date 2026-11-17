---
title: Büyük bir modeli baskı için bölün
summary: Yazıcınızın yatağına sığmayan bir modeli, tapa, kama, kuyruk kırlangıcı, dübel veya mıknatıs deliklerle ve her iki yüzünde birleşimin numarasıyla parçalara ayırın; her parçayı ve bir montaj sayfasını tek bir zip dosyasında indirin.
keywords: 3B baskı, böl, eğik, eğik kesim, açılı kesim, eğik düzlem, bölücü, kesim, çok büyük, yatak boyutu, baskı hacmi, parçalar, bağlayıcılar, tapalar, kamalar, kuyruk kırlangıcı, dübel, mıknatıs, boşluk, tolerans, parça numaraları, montaj, patlatılmış görünüm, zip, stl, 3mf, lisans, USB anahtarı, dongle
from: ee96ba77
---

Bir model yazıcınızın yatağından büyükse **Baskı için böl** modeli sığabilecek parçalara ayırır, parçalar bir araya geldiğinde hizalanması için bağlayıcılar ekler ve her birleşimin iki yüzüne aynı numarayı oyar. {{ui:Dışa aktar}} › {{ui:3B baskı için denetle (STL veya 3MF)…}} yolunu açın; iletişim kutusundaki **Baskı araçları** satırında {{ui:Baskı için böl}} bulunur. Görünümün üzerinde bir kart olarak açılır.

Yalnızca yazdırılacak şeyler üzerinde çalışır: seçim veya hiçbir şey seçili değilse görünen her şey. Yazdırılacak öğe kapalı bir katı olmalıdır; denetim delik bulursa önce [Onar](topic:print-tools#repair) kullanın.

ModelCraft içinde, bilgisayarınızda çalışır: lisans sunucusu yok, USB anahtarı yok, hiçbir şey yüklenmez.

## Nasıl kesilir

- **Yatağa sığdır, en az parçayla**: yatağın genişliğini, derinliğini ve yüksekliğini girin (bunlar {{ui:Ayarlar}} › ModelCraft › 3B yazıcıdan başlar). Kart kaç parça gerektiğini ve her birinin ne kadar büyük olduğunu gösterir; model, sığabilecek en az sayıda eşit parçaya bölünür. Sığmasını sağlıyorsa bir parça dosyalarda yan yatmış olabilir. Parçadan dışarı çıkan bağlayıcılar boyutuna dahil edilir.
- **Verdiğim yerlerde**: kesileceği eksende seçin ve nerede olacağını modelin alt ucundan milimetre cinsinden, virgülle ayırarak yazın (`100, 200` üç parça yapar).
  **Eğik** kesimleri iki diğer eksenden birinin etrafında en fazla 60° döndürür (örneğin Z boyunca bir kesim X etrafında eğilir): her eğik kesim yerinde modelin orta çizgisinden geçer, parçalara daha fazla yapışma alanı verir ve eğimli bir yüzeyde birleşimi daha iyi gizler. Bağlayıcılar kesime dik durur.

Kart açıkken kesim düzlemleri modelin etrafında kesik çizgilerle çizilir.

## Bağlayıcılar

İki parçanın değdiği her yere bağlayıcılar konur; bunlar kendileri, en çok yer olan yerlere yerleştirilir: dış yüzeyden en az **en ince duvar** artı **boşluk** artı kendi boyutları kadar uzakta ve her başka kesimden, iki deliğin hiçbir zaman birleşmeyeceği kadar uzakta. Uzun bir yüzeyde iki bağlayıcı yüzey boyunca yayılır, böylece parçalar dönemez.

- **Yuvarlak tapalar**: bir parçada tapa (ucu pahlı), diğerinde delik.
- **Kare kamalar**: aynı, kare biçiminde; böylece bir parça yalnızca bir yönde takılabilir.
- **Kuyruk kırlangıçları**: yandan bir yuvaya kayan bir dil. Yuvanın bir ucu başka bir kesimle birleşecekse kuyruk kırlangıcı kısa kalır ve açık uçtan kayarak girer. Kuyruk kırlangıçları tek yönlü kesimlere uyar (bir sıra dilim); ızgarada tapa veya dübel kullanın.
- **Dübel delikleri**: her iki tarafta bir delik; pimler de yazdırılır (zip dosyasında).
- **Mıknatıs yuvaları**: girdiğiniz çap ve kalınlıkta yuvarlak bir mıknatıs için her iki tarafta bir yuva. Yapıştırmadan önce kutupları kontrol edin.
- **Yok (yapıştırıcı)**.

**Boşluk**, bir tapa ile deliği arasında her iki yanda kalan aralıktır (başlangıçta 0.2 mm). Girdiğiniz sayıya bağlıdır: yuvarlak delikler biraz büyük yapılır, böylece köşeleri değil düz yüzleri bu aralığı korur. Yazıcınızın parçaları sıkı çıkarsa bunu artırın.

Bir birleşimde bağlayıcı için yer yoksa (ince bir duvar, küçük bir temas alanı) kart bunu söyler: o birleşimi yapıştırın.

## Parça numaraları

**Birleşim numaralarını her iki yüze oy** açıkken her birleşim, iki parçasının numarasını alır (örneğin `3-4`); numara her iki yüzüne 0.6 mm derinlikte oyulur ve her birinde doğru yönde okunur. Numaralar 5 mm yükseklikte başlar ve sığması için 2.5 mm'ye kadar küçülür; numarası için yeri olmayan birleşimler listelenir. Parçalar en alt katmandan yukarıya doğru numaralandırılır.

## Önizleme, indirme, modeli bölme

1. {{ui:Önizleme}} modeli keser ve kaç parça, birleşim ve bağlayıcı olduğunu söyler; her parçanın 3B baskı denetiminden geçip geçmediğini ve yatağa sığıp sığmadığını belirtir ve her parçanın boyutunu listeler. Görünümde her bağlayıcı ve numara bir halka ile işaretlenir.
2. {{ui:Parçaları indir (.zip)}} tek bir zip kaydeder: her parça için bir dosya (**Dosyalar** altında seçtiğiniz STL veya 3MF), her biri yatakta duracak şekilde; dübel pimleri; ve **montaj sayfası** — parçaların numaralarıyla ayrılmış bir resmi (`assembly.svg` ve `assembly.png`) ile parçaların ve birleşimlerin bir listesi (`assembly.txt`).
3. {{ui:Modeli böl}} parçaları, seçili grupların veya bileşenlerin yerine, montaj sayfasındaki adlarla, tek adımda modele koyar: {{ui:Geri al}} özgün hâlini geri getirir. Bölünecek grupların veya bileşenlerin seçili olması gerekir; indirme ise yazdırılabilen her şey için çalışır.

## Bağlayıcıları kendiniz taşıyın

Önizlemeden sonra **Bağlayıcıları elle yerleştir** bağlayıcıların nereye gideceğini düzeltmenize izin verir:

- {{ui:Birini taşı}}: görünümde kırmızı bir halkaya tıklayın (yeşile döner), sonra kesimde gitmesi gereken yere tıklayın.
- {{ui:Bir tane ekle}}: bağlayıcının gitmesi gereken yere görünümde tıklayın. Tıklamanızın ulaştığı kesim düzleminde, oradaki iki parça arasına gider.
- {{ui:Birini kaldır}}: o bağlayıcıyı kaldırmak için kırmızı bir halkaya tıklayın.

Her değişiklik otomatik olanlar gibi yeniden denetlenir: dış çizgiye çok yakın bir nokta, başka bir kesim ya da başka bir bağlayıcı yapılmaz ve kart bunu söyler. {{ui:Yine otomatik}} yerlerinizi unutur. Model, seçim ve kesimler olduğu gibi kaldığı sürece yerler korunur.

Bir önizleme, model, seçim ya da bir ayar değişene kadar kalır; sonra kart sizden yeniden önizleme yapmanızı ister.

:::note
Her parça, indirmeden önce 3B baskı denetiminin denetleyeceği gibi denetlenir. Her parçanın nasıl yazdırılacağına yine dilimleyiciniz karar verir: her birine orada bakın ve yazıcınızın boşluğu nasıl işlediğini görmek için önce bir birleşimi yazdırın.
:::
