---
title: Menüler, tuşlar ve fare
summary: Bildiğiniz bir modelleyiciye uyan bir menü stili seçin, herhangi bir komuta kendi tuşunuzu verin, komutları menüler arasında taşıyın ve tekerleğin ile orta ve sağ fare düğmelerinin ne yaptığını ayarlayın.
keywords: menü stili, menüler, menü çubuğu, araç çubuğu, klavye kısayolları, kısayollar, tuşlar, tuş stili, tuş haritası, özelleştir, yeniden eşle, fare, tekerlek, ters çevir, yakınlaştırma yönü, orta düğme, sağ düğme, yörünge, kaydır, dışa aktar, içe aktar, geçiş, tanıdık, it/çek, modelleyici
from: e56fce3d
---

ModelCraft'ın araçları hangi yoldan açtığınız fark etmeksizin aynıdır. Bir **menü stili**, araçların ekranda nerede durduğunu, orada nasıl adlandırıldığını ve hangi tuşlarla çalıştığını belirler. {{ui:Ayarlar}} ({{key:Mod+,}}) › {{ui:ModelCraft}} › {{ui:Menüler, tuşlar ve fare}} bölümünden birini seçin; değişiklik hemen olur ve bu tarayıcı onu hatırlar.

## Stiller

| Stil | Ne elde edersiniz |
|---|---|
| {{ui:ModelCraft}} | ModelCraft'ın kendi araç çubuğu (Dosya, Çizim, Değiştir, Sırala, Düzenle, Kamera) ve tek harfli tuşları: {{key:L}} çizgi, {{key:R}} dikdörtgen, {{key:P}} it/çek, {{key:M}} taşı, {{key:Q}} döndür, {{key:S}} ölçekle, {{key:E}} silgi, {{key:O}} yörünge. Başlangıç. |
| {{ui:İt/çek}} | Ana araçların bir sırası üzerinde bir menü çubuğu (Dosya, Düzenle, Görünüm, Kamera, Çizim, Araçlar, Pencere), aynı tek harfli tuşlarla. |
| {{ui:Modelleyici}} | Bir üst menü çubuğu (Dosya, Düzenle, Görünüm, Seç, Ekle, Nesne, Örgü) ve örgü modelleyicilerinin tuşları: {{key:W}} seç, {{key:G}} taşı, {{key:R}} döndür ve {{key:S}} ölçekle seçimi aynı anda ({{key:X}}, {{key:Y}} ya da {{key:Z}} hareket sırasında bir ekseni kilitler), {{key:E}} it/çek, {{key:B}} dikdörtgen, {{key:X}} sil, {{key:A}} tümünü seç, {{key:Alt+A}} seçimi kaldır, {{key:Shift+D}} çoğalt, {{key:Mod+G}} grup, {{key:H}} gizle. Orta düğme yörüngede döndürür; {{key:Shift}} ile orta düğme kaydırır, {{key:Mod}} ile orta düğme yakınlaştırır; sağ düğme bir aracın yaptığı işi iptal eder. |
| {{ui:Başlangıç}} | Bir şerit; {{ui:Yap}} sekmesi birkaç büyük düğmeden oluşur: bırakılacak şekiller, delikler, taşı, döndür ve boyutlandır, hizala, {{ui:Grup}} (şekillere kesilmiş delikler) ve 3B baskı kontrolü; diğer her araç {{ui:Daha fazla araç}} sekmesinde. Sağ düğme yörüngede döndürür, orta düğme kaydırır. Bkz. [Başlangıç stili](topic:beginner). |

Görünümün sağ altındaki {{ui:Anahtarlar}} ve {{ui:Düzenle}} › {{ui:Daha fazla}} bölümlerinden tanıdığınız tuş stili aynı seçimdir: oradan modelleyici tuşlarını seçmek {{ui:Modelleyici}} stilini seçer; it/çek tuşlarını seçmek ise {{ui:ModelCraft}} stiline döner. Eski bir sürümde modelleyici tuşlarını seçtiyseniz, ModelCraft bir kez, kendiliğinden {{ui:Modelleyici}} stilinde açılır.

:::tip
İt/çek tuşlarına ait olup stiliniz başka bir komuta veren bir tuş hiçbir şey yapmaz; durum satırı komutunun nereye gittiğini söyler ("Modelleyici'de İt/çek E'dir"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} ve oklar her zaman kendi anlamlarını korur; sayılar her zaman değer kutusuna gider ve bir araç bir şeyi taşırken kendi tuşları öne geçer.
:::

## Kendinize göre yapın

1. Size en yakın stili seçin, sonra {{ui:Özelleştir…}} seçeneğine tıklayın.
2. {{ui:Tuşlar ve menüler}} sekmesinde bir komut bulun (arama kutusu yardımcı olur). {{ui:Tuş ekle}} seçeneğine tıklayıp tuşa basın. Bir tuşu kaldırmak için üzerine tıklayın.
3. Bir menü çubuğuyla, {{ui:Yeri}} komutu başka bir menüye ya da {{ui:Yalnızca tuşlarla}} seçeneğine taşır.
4. {{ui:Fare}} sekmesinde tekerleği ve düğmelerin 3B görünümde ne yapacağını ayarlayın.
5. Ona bir ad verin ve {{ui:Kaydet}}'e tıklayın.

Yerleşik bir stili kaydetmek kendi kopyanızı yapar ("Benim Modelleyicim"); yerleşik olan asla değişmez. Kopyanız tuşları, başladığı stilin okuduğu gibi okur: {{ui:Modelleyici}} ile yapılan bir kopya, kap (taşı), döndür ve ölçekle tuşlarını aynı anda çalışır durumda tutar.

## Fare

- **Fare tekerleği**: {{ui:Yukarı kaydırmak yakınlaştırır}} (başlangıç) ya da {{ui:Yukarı kaydırmak uzaklaştırır}}, ve ne kadar hızlı. Dokunmatik pedde parmakla çimdiklemek her zaman parmaklarınızın hareket ettiği yönde yakınlaştırır.
- **3B görünümde sürükleme**: {{ui:Her görünümün kendi ayarları}} ModelCraft'ın düğmelerini korur (orta düğme yörünge, sağ düğme ya da {{key:Shift}} ile orta düğme kaydırır). Ya da orta ve sağ düğmeleri yörünge, kaydırma, yakınlaştırma ya da hiçbiri olarak ayarlayın; {{key:Shift}} düğmeyle yörüngeyi ve kaydırmayı değiştirir. Sol düğme her zaman kullanılan araca aittir.
- **Dokunmatik pedler**: {{ui:Ayarlar}} › {{ui:ModelCraft}} › {{ui:Kaydırma}} hâlâ iki parmağın yörünge (dokunmatik ped) mi yoksa yakınlaştırma (fare) mı yapacağını belirler. Bkz. [Yörünge, kaydırma ve yakınlaştırma](topic:orbit-pan-zoom).

## Yanınızda götürün

{{ui:Dışa aktar}} kullanılan stili küçük bir `.ccinput.json` dosyası olarak kaydeder; {{ui:İçe aktar…}} başka bir bilgisayardan ya da bir meslektaşınızdan bir tane ekler. İçe aktarılan dosya yalnızca ModelCraft'ın kendi komutlarına işaret edebilir: başka her şey dışarıda bırakılır ve durum satırında sayılır. {{ui:Bu stili sil}} kendi stillerinizden birini kaldırır.

:::note
Bu ayarlar bu tarayıcıda kalır. Stil kartlarının altındaki {{ui:Bu stili her uygulamada kullan}} seçeneği her uygulamanın eşleşen stilinde açılmasını sağlar: {{ui:İt/çek}}, diğer uygulamaların menü çubuğu stilleriyle birlikte gider. {{ui:Modelleyici}}'nin diğer uygulamalarda karşılığı yoktur, bu yüzden yalnızca ModelCraft seçimi olarak kalır.
:::

İlgili: [Tuş ve fare eylemleri](topic:keyboard) · [ModelCraft ayarları](topic:settings) · [Diğer modelleyicilerden geçiş](topic:coming-from)
