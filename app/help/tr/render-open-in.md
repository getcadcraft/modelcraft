---
title: Sahneyi başka bir programda açın
summary: Sahneyi, okuyan herhangi bir program için bir USD dosyası ya da glTF dosyası olarak kaydedin ya da Studio'dan bu bilgisayardaki bir programda açın.
keywords: şununla aç, usd, gltf, glb, dışa aktar, render programı, archviz, studio, usdview, gönder, devir, paket, unreal klasörü
from: 812329d5
---

Sahneyi başka bir programa götürmek için {{ui:Resim render et…}} öğesinin Motor listesinde bir **Şununla aç** girdisi seçin. Modele hiçbir şey geri gelmez.

## Herhangi bir program için dosya

- **USD dosyası** sahneyi `.usdc` olarak kaydeder (model resimler taşıyorsa `.usdz`): [USD olarak farklı kaydet ile aynı dosya](topic:usd); malzemeler, lambalar ve kameralarla birlikte. Örnekleme ve tam malzeme değerlerini korur. Çoğu render programı, oyun motoru ve görüntüleyici USD okur.
- **glTF dosyası (.glb)** malzemeler, dokular ve lambalarla birlikte daha hafif glTF 2.0 dosyasını kaydeder; ModelCraft'ın yazdığı biçimler için bkz. [Modeli diğer programlar için dışa aktarın](topic:export-model).

- **Unreal proje klasörü (.zip)**, herhangi bir bilgisayardaki bir proje için [Sahneyi bir oyun motoruna gönderin](topic:render-unreal) komutunun yazdığı klasörü kaydeder.

Üçü de tarayıcıda ve Studio'da çalışır.

## Studio'da: bir programda açın

Studio, bu bilgisayarda sahneyi açabilen programları listeler: arama yolunuzda varsa usdview ve dosya türü için bilgisayarın kendi programı. Birini seçin, iki biçimi de okuyorsa USD ya da glTF seçin ve {{ui:Render}} düğmesine tıklayın. Studio paketi Belgeler altında yeni bir klasöre yazar (`CadCraft hand-off`; hiçbir şeyin üzerine yazılmaz, her gönderim kendi klasörünü alır) ve programı onda başlatır, sonra dosyaların nerede olduğunu söyler.

| Program | En iyi okuduğu |
|---|---|
| usdview | USD |
| Bilgisayarın kendi programı | Bilgisayarda dosya türü için ne varsa |

Studio yalnızca bu sabit listedeki programları başlatır; sayfanın adıyla istediği hiçbir şeyi çalıştırmaz ve GNU GPL lisansı altındaki bir programı asla başlatmaz (bkz. [Resmi başka bir programla çizin](topic:render-other-program#programs-cadcraft-never-runs)). USD ya da glTF okuyan herhangi bir program, dosyayı yukarıdaki **Herhangi bir program için dosya** bölümünden açar.

:::note
Twinmotion, Enscape ve diğer görselleştirme programları listede değildir: CadCraft bunlarla denenmedi ve bunlar hakkında bir iddiada bulunmaz. Buradan çıkan bir glTF ya da USD dosyası giriş yoludur.
:::
