---
title: Düğümler: bağlantı kurarak model oluşturun
summary: Sayıları noktalara, noktaları eğrilere, eğrileri yüzeylere bağlayın. Bir sayıyı değiştirince sonrasındaki her şey yeniden oluşur. Her düğüm ayrıca bir CraftScript satırıdır ve grafik dosyada kaydedilir.
keywords: düğümler, düğüm düzenleyicisi, görsel betikleme, parametrik, grafik, teller, bağlantı noktaları, serbest biçim, freeform, nurbs, loft, ekstrüzyon, döndürme, daire, eğri, yüzey, seri, aralık, rastgele, liste, betik, craftscript, grasshopper
from: 9c8e254f
---

**Düğümler** düzenleyicisi, kutuları birbirine bağlayarak geometri oluşturur. Her kutu (bir düğüm) küçük bir iş yapar: bir sayı, bir nokta, bir daire ya da bir loft oluşturur. Bir düğümün sonucunu bir sonrakinin girişine bağlarsınız ve baştaki bir sayıyı değiştirdiğinizde model onu izler.

Sağdaki panelden açın: {{ui:Düğümler}} › {{ui:Düğümler…}}. Zaten bir grafiği olan dosya onu kendiliğinden açar. Düzenleyici 3B görünümün üzerinde bir penceredir: başlık çubuğunu sürükleyerek taşıyın, köşesini sürükleyerek boyutlandırın.

## Bağlantı kurma

1. Soldaki listeden bir düğüm seçin (aramak için arama kutusuna yazın; <kbd>Enter</kbd> ilk eşleşmeyi ekler). Tuvalin ortasında görünür.
2. Bir düğümün sağındaki yuvarlak **çıkış** noktasından, diğerinin solundaki yuvarlak **giriş** noktasına sürükleyin. Nokta uyduğunda yeşile, uymadığında kırmızıya döner; nedenini görmek için üzerine gelin.
3. Hiçbir şey bağlı olmayan bir giriş, yazılan bir değer için bir kutu gösterir. Bir sayı yazıp <kbd>Tab</kbd> tuşuna basın: sonuç yeniden oluşur.
4. Bir düğümün başlık çubuğundaki küçük daire, onun **gözüdür**. Gözü açık olan düğüm 3B görünümde çizilir: eğriler çizgi, yüzeyler gölgeli, noktalar nokta olarak.

Bir düğümü başlık çubuğundan sürükleyin. Arka planı sürükleyerek kaydırın, tekerleği çevirerek yakınlaştırın. <kbd>Delete</kbd> seçili düğümü kaldırır. {{ui:Toparla}} düğümleri sütunlar hâlinde düzenler, {{ui:Sığdır}} hepsini görünüme getirir, {{ui:Geri al}} ve {{ui:Yinele}} düzenlemelerinizde ilerler ve geri gider.

## Türler ve birimler

Bağlantı noktalarının bir türü vardır: sayı, evet/hayır, nokta, vektör, eğri, yüzey, örgü, katı ya da bunların herhangi biri için "geometri". Bir nokta, bir vektör girişini besleyebilir ve tersi. Sayılar bir birim taşır: bir **uzunluk** milimetredir ve bir **açı** derecedir. Bir uzunluk bir açıyı besleyemez; bir uzunluk çarpı bir uzunluk (bir alan) reddedilir. Yanlış bir bağlantı, siz kurarken durdurulur.

Kare nokta bir **listedir**. Bir liste tek değerli bir girişe ulaştığında düğüm her öğe için bir kez çalışır ve sonucu bir liste olur. Daha kısa liste son öğesini tekrarlar. Örneğin bir **Seri**'nin yüksekliklerinin **Taşı**'ya bağlanması bir kopya yığını oluşturur.

## Katılar ve Boole işlemleri düğüm olarak

**Katılar** grubu, Yüzeyler panelindekiyle aynı kesin yüzeylerden kapalı gövdeler yapar: **Kutu katı**, **Silindir katı** ve **Küre katı** (boyutlar mm cinsinden), **Birleşim**, **Çıkar** ve **Kesiştir** (ikinci katı birincisinden alınır; tolerans, katı motorunun üçgenlerinin kesin yüzeylerden ne kadar uzak olabileceğidir), **Yüzeyler arasında yuvarlatma** (yüzeyler katıdaki numaralarıyla, ilki 1; bir yarıçap ve 0'dan büyükse uçtaki bir yarıçap), **Katı hacmi** (mm³) ve **Katıdan örgüye** (görmek ya da işlemek için). Bir katının kendi bağlantı noktası türü vardır: bir nokta ya da sayı bir katı girişine bağlanamaz ve nokta kırmızı kalır. Boole işlemleri ve yuvarlatma düğümleri, düzenleyici ilk kez açıldığında yüklenen programın kendi katı motorunu kullanır.

## Hatalar

Görevini yapamayan bir düğüm, adının altında kırmızı renkte nedenini söyler ("Yarıçap sıfırdan büyük olmalı."), ve ondan sonraki düğümler bekler. Aynı ileti Sorunlar panelinde bir sorun olarak da yer alır; oradan bulabilirsiniz.

## Her düğüm bir betik satırıdır

{{ui:Betik}} düğmesine basarak grafiği CraftScript olarak görün: her düğüm için bir satır, örneğin `n3 = nd_circle(n2, n1, [0 0 1]);`. Metni düzenleyin ve {{ui:Grafiği bu betikten oluştur}} düğmesine basarak grafiğe geri getirin. Aynı `nd_` fonksiyonları PartCraft'taki bir CraftScript'te de çalışır; böylece bir grafik orada çalıştırılabilir, döngüye alınabilir ya da test edilebilir. Rastgele sayılar her zaman bir **tohum** alır; böylece aynı grafik her bilgisayarda aynı sonucu verir.

## Dosyayla birlikte kaydedilir

Grafik model dosyasında kaydedilir. Düğümler kendi eğrilerini, yüzeylerini ve örgülerini oluşturur: siz istemedikçe modelin yüzlerini değiştirmezler.

## Modele işle

Yüzey ya da örgü oluşturan bir düğümün gözünü açın, sonra Düğümler penceresinde {{ui:Modele işle}} düğmesine basın. Gösterilen her yüzey ya da örgü, modelde metre cinsinden, diğer her şey gibi düzenleyebileceğiniz bir yüz grubuna dönüşür. Tek bir geri alma adımıdır. Grafik kalır, ama kopya artık onu izlemez: bir sayıyı değiştirin ve yeni bir tane için yeniden işleyin. Noktalar ve eğriler katı değildir, bu yüzden dışarıda bırakılır ve ileti kaç tane olduğunu söyler.
