---
title: Makineniz neyle render yapar
summary: Ayarlar › Render, bu tarayıcının uygulamaya izin verdiği grafiği, işlemci çekirdeklerini ve belleği gösterir; ayrıca render işleminin nerede başlayacağını belirleyen düzeyi de gösterir.
keywords: makineniz, grafik kartı, gpu, webgpu, webgl, işlemci, cpu, çekirdek, iş parçacığı, bellek, ram, paylaşılan bellek, yalıtım, düzey, hız, yavaş, render hızı, dizüstü bilgisayar
from: 8a0c21c9
---

{{key:Mod+,}} ile {{ui:Ayarlar}}'ı açın, bu uygulamanın kendi sekmesinde kalın ve {{ui:Render}} bölümüne kaydırın. {{ui:Makineniz}} bölümü, bu tarayıcının uygulamanın render için kullanmasına izin verdiği öğeleri listeler. Bunun hiçbiri bilgisayarınızdan dışarı çıkmaz.

| Satır | Anlamı |
|---|---|
| {{ui:Grafik}} | Tarayıcının bildirdiği grafik kartı. "WebGPU" tüm render işlerini yapabileceği anlamına gelir; "WebGL 2 only" canlı görünümün ve {{ui:Resim render et…}} özelliğinin bunu kullandığı anlamına gelir (WebGL yol izleyicisiyle yüksek kalite), ancak görünümde render ve WebGPU gerektiren render kuyruğu sunulmaz; yazılım yedeği ise her şeyin işlemci üzerinde çalıştığı anlamına gelir |
| {{ui:İşlemci}} | Tarayıcının bildirdiği işlemci çekirdeği sayısı |
| {{ui:Bellek}} | Tarayıcı bildirdiğinde bilgisayarın yaklaşık bellek miktarı. Bazı tarayıcılar bunu bildirmez |
| {{ui:Paylaşılan bellek}} | Sayfanın çalışanları arasında bellek paylaşmasına izin verilip verilmediği. Açıkken her çekirdek bir sahne kopyası üzerinde çalışabilir; kapalıyken her biri kendi kopyasına ihtiyaç duyar, bu yüzden büyük bir sahne aynı anda daha az çekirdeğe sığar |
| {{ui:Hızlı işlemci kodu}} | Tarayıcının daha hızlı WebAssembly kodunu çalıştırıp çalıştırmadığı. Bu kapalıysa daha yavaş bir yedek kod kullanılır |
| {{ui:Düzey}} | {{ui:Grafik kartı, yüksek}}, {{ui:Grafik kartı, temel}} veya {{ui:Yalnızca işlemci}}; altında nedeni yazılıdır |

## Düzey

Düzey, [canlı görünümün](topic:live-view) {{ui:Bu bilgisayar için}} nerede başlayacağını, ne kadar dağınık öğe çizeceğini ve görünümde bir [alt bölümlü yüzey](topic:modifiers#subdivision-surface) için kaç yüzey gösterebileceğini belirler. Böylece yerleşik grafik çipi olan ya da hiç grafik kartı olmayan bir dizüstü bilgisayar duyarlı kalır. Yerleşik veya telefon grafik çipi ya da 4 GB veya daha az bellek hiçbir zaman {{ui:Grafik kartı, yüksek}} düzeyini almaz.

:::note
Tarayıcılar birbirinden farklıdır. Aynı bilgisayar bir tarayıcıda WebGPU, başka bir tarayıcıda "WebGL 2 only" gösterebilir. Linux'ta çoğu tarayıcının henüz WebGPU desteği yoktur.
:::
