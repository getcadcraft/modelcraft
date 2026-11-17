---
title: Resmi hangi programın çizeceğini seçin
summary: Render iletişim kutusundaki Motor seçimi: kendi iki motorumuz, CadCraft Studio'daki öbür programlar ve web'in bunun yerine ne yaptığı.
keywords: render, motor, render programı, render motoru, eklenti, studio, dış program, çizen, kuyruk, eklenti motoru
from: be4b056a
---

{{ui:Resim render et…}} öğesinin Mod'un üstünde bir **Motor** seçimi vardır. Kendi iki motorumuz her zaman oradadır ve her yerde çalışır; eklentiler daha fazlasını ekleyebilir ve CadCraft Studio'da liste, sahneyi devralan programları da içerir.

| Motor | Ne yapar | Nerede |
|---|---|---|
| Yerleşik: Hızlı | Hızlı durağan görüntü: gün ışığı, yumuşak gölgeler, cam ve metal görünümleri, saniyeler içinde | Tarayıcı ve Studio |
| Yerleşik: Yol izleyici | Yüzeyler arasında sıçrayan ışık; grafik kartınızda ya da işlemcinizde, render kuyruğunda ve ağınızdaki diğer bilgisayarlarda | Tarayıcı ve Studio |
| Bir eklentinin motoru | Resmi çizer ve geri verir: bkz. [Resmi başka bir programla çizin](topic:render-other-program) | Tarayıcı (JavaScript ile yazılmış bir motor) ya da Studio (bir program çalıştıran bir motor) |
| Sahneyi devralan bir program | Studio sahneyi kendi klasörüne koyar ve onu adım adım güncel tutar | Studio |
| Şununla aç … | Sahneyi kaydeder ve bir programda açar; hiçbir şey geri gelmez: bkz. [Sahneyi başka bir programda açın](topic:render-open-in) | Web dosyayı kaydeder |

## Seçim nasıl davranır

- Hızlı ya da Yol izleyici seçmek Modu da onunla birlikte değiştirir, tersi de geçerlidir. Başka bir motoru hiç kullanmayan kişiler için iletişim kutusunun başka hiçbir şeyi değişmez.
- Kullanılamayan bir motor, nedeniyle birlikte listede kalır ("bulunamadı", "daha yeni bir sürüm gerekli"); onu seçemezsiniz. Tarayıcıda yalnızca Studio'da çalışan bir motor "dosya kaydeder" olarak görünür: {{ui:Resim render et…}} o zaman sahneyi ve ayarlarını, o programa götüreceğiniz bir dosyaya kaydeder.
- Seçim, dosyanın render ayarlarıyla birlikte kaydedilir ve en son seçtiğiniz motor, kendi seçimi olmayan dosyalar için başlangıç motorudur.
- Başka bir programın resmi, iletişim kutusunda ve render kuyruğunda, onu hangi programın çizdiğini ve sürümünü söyler. [Render](topic:render) sayfasındaki vaatler yalnızca **kendi** motorlarımızı kapsar: başka bir program ışığı, tonları ve örneklemeyi kendi yöntemiyle yapar; bu yüzden bir sahnenin iki resmi kamera, güneş, lambalar ve pozlama açısından benzerdir, piksel piksel değil.

## Her motora verilenler

Sahne başka bir programa bir **paket** olarak gider: model bir USD dosyası olarak ([USD olarak farklı kaydet](topic:usd) komutunun yazdığı aynı dosya) ve bir USD içe aktarıcısına güvenilemeyecek şeyleri içeren bir ayar dosyası: tam malzeme değerleri, açık olan lambalar ve güçleri ile ışık profilleri, güneş, gökyüzü, pozlama ve iletişim kutusunun çizeceği şekliyle kamera. Hiçbir şey bir yere yüklenmez.

## Render kuyruğu

Başka bir program için bir resim ya da animasyon, kendi resimlerimiz gibi [render kuyruğunda](topic:render#the-render-queue) bekleyebilir; işi, hangi motor için olduğunu hatırlar. Bir animasyon programa tek bir çalıştırmada gönderilir.
