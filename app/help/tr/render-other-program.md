---
title: Resmi başka bir programla çizin
summary: Kendi yol izleyicimiz Render resmini çizer; başka bir program yalnızca CadCraft Studio'daki bir render motoru eklentisi aracılığıyla çizebilir. Ne aktarılır ve neden bazı programlar hiç önerilmez.
keywords: render, motor, dış program, eklenti motoru, studio, arka plan, kuyruk, usd, gltf, çizen, blender, gpl
from: 150f94f1
---

{{ui:Resim render et…}} içindeki resim, **kendi motorlarımız** tarafından çizilir: tarayıcıda ve CadCraft Studio'da Hızlı ve Yol izleyici. Başka bir program ancak bir **render motoru eklentisi** getirdiğinde çizebilir: bkz. [Eklentiyle bir render motoru ekleyin](topic:render-engine-addons). Sahneyi başka bir programa götürüp orada çalışmaya devam etmek için [Sahneyi başka bir programda açın](topic:render-open-in) ya da [Sahneyi bir oyun motoruna gönderin](topic:render-unreal) kullanın.

## Bir eklentinin motoruyla resim çizin

1. Eklentiyi Ayarlar › Eklentiler altında açın. Motoru, {{ui:Resim render et…}} öğesinin Motor listesinde görünür.
2. Onu seçin. Kendi ayarları Motor listesinin altında gösterilir.
3. {{ui:Render}} düğmesine tıklayın. Studio'da, bir eklenti ilk kez bir program çalıştırdığında, Studio kendi iletişim kutusunda size sorar. Çizim sürerken ilerleme gösterilir; {{ui:Durdur}} onu sonlandırır. Resim, onu çizen motorla işaretli olarak görünür.

JavaScript ile yazılmış bir motor tarayıcıda da çalışır. Bu bilgisayarda bir program çalıştıran bir motor yalnızca Studio'da çalışır; tarayıcıda kaydedilecek bir dosya olarak gösterilir.

## Neler aktarılır

Motor bir **paket** alır: model bir USD dosyası olarak (ve bir glTF dosyası isterse onu da), tam malzeme değerleri, güneş ve gökyüzü, açık olan her lambanın gücü ve ışık profiliyle, kamera ve pozlama içeren bir ayar dosyası. Her program ışığı, tonları ve örneklemeyi kendi yöntemiyle yapar; bu yüzden resimler kamera, güneş, lambalar ve pozlama açısından benzerdir, piksel piksel değil.

## CadCraft'ın asla çalıştırmadığı programlar

CadCraft, GNU GPL lisansı altındaki bir programı asla başlatmaz ve hiçbir programı motor ya da Şununla aç hedefi olarak listelemez. Blender bunlardan biridir, bu yüzden Motor listesinde yoktur. {{ui:Resim render et…}} öğesinden kaydedilen bir USD ya da glTF dosyası, bu dosyaları okuyan herhangi bir program gibi yine onda açılır.

:::note
Panorama ve stereo kameralar ile bir gökyüzü resmi (bunun yerine gökyüzünün renkleri kullanılır) başka bir programa aktarılmaz. Başka bir programda yapılan hiçbir şey modele geri dönmez.
:::
