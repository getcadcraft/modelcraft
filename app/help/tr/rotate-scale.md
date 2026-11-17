---
title: Döndürme ve ölçekleme
summary: Şeyleri bir nokta etrafında tıklayarak ya da derece yazarak döndürün ve bir çarpanla eşit biçimde yeniden boyutlandırın.
keywords: ölçekleme tutamaçları, gerdir, eşit olmayan, eksen başına, çevir, ters çevir, aynala, aynalanmış kopya, eksen boyunca çevir, döndür, çevir, açı, derece, açıölçer, ölçekle, yeniden boyutlandır, büyüt, küçült, çarpan, eşit ölçekleme
from: 45cdcb49
---

## Döndür

{{ui:Döndür}} ({{key:Q}}) seçimi bir merkez noktası etrafında çevirir. Üç tıklama gerektirir: merkez, başlangıç yönü ve bitiş yönü.

1. Çevirmek istediğiniz şeyi seçin. Hiçbir şey seçili değilse Döndür, önce tıkladığınız şeyi alır.
2. {{key:Q}}'ya basın. İmlecin ardından, döndüreceğiniz düzlemi gösteren bir halka gelir.
3. Döndürme merkezine tıklayın.
   - Zeminde ya da boş alanda halka düz (mavi) durur: dönüş, bir binayı arsasında döndürmek gibi, dikey bir eksen etrafındadır.
   - Bir yüzeyde halka o yüzeyin düzlemine yatar: dönüş, yüzeyin kendi yönü etrafındadır. Bir şeyi yatay bir eksen etrafında döndürmek için bir duvara tıklayın.
4. Açının nerede başlayacağını belirleyen bir noktaya tıklayın; örneğin çevirdiğiniz şeyin bir kenarı üzerinde.
5. İmleci merkezin etrafında hareket ettirin. Açı, ucunda ve değer kutusunda ({{ui:Açı}}) gösterilir. Bir değere yaklaştığınızda 15° adımlarla yapışır.
6. Bitirmek için tıklayın ya da açıyı derece olarak yazıp {{key:Enter}}'a basın: `90`, `45`, `-30`.

   Pozitif açılar, halkanın baktığı taraftan bakıldığında saat yönünün tersine döner.

Döndürürken {{key:Ctrl}} (ya da {{key:Alt}}) tuşunu basılı tutarak, Taşı'da olduğu gibi asıl nesneyi yerinde bırakıp bir **kopya** çevirebilirsiniz; ipucu kopyanın açık olup olmadığını söyler ve tuşa yeniden basmak onu kapatır. Döndürülmüş bir kopyanın hemen ardından aynı merkez etrafında daha fazla kopya için `3x` yazın.

Taşı'da olduğu gibi, bağlı geometrinin bir kısmını döndürmek ona bağlı yüzeyleri büker. Bütünüyle çevirmek için önce şeyleri gruplayın.

:::note
İpucu, yön tuşlarının döndürme eksenini seçtiğini söylüyor; ama bu sürümde ilk tıklamadan önce görünümü döndürürler. Ekseni seçmek için, istediğiniz yöne bakan bir yüzeydeki merkeze tıklayın. Bkz. [Henüz yapılmadı](topic:not-built-yet).
:::

## Ölçekle

{{ui:Ölçekle}} ({{key:S}}) seçimi yeniden boyutlandırır. Önce yeniden boyutlandırmak istediğiniz şeyi seçin, sonra {{key:S}}'ye basın: kutusunun köşelerinde, kenarlarında ve kenarların ortasında küçük kareler (tutamaçlar) belirir.

### Tutamaçlarla gerdirme ya da ölçekleme

- Bir **köşe** tutamacı her yönde eşit biçimde, karşı köşeye göre ölçekler.
- Bir **kenarın** ortasındaki tutamaç yalnızca o yön boyunca, karşı kenara göre gerer: bir kutuyu yüksekliğini artırmadan uzatın.
- Bir **kutu kenarının** ortasındaki tutamaç, o kenarın karşısındaki iki yönde gerer.
- Bunun yerine kutunun ortasına göre ölçeklemek için tutamaca tıklarken {{key:Ctrl}} tuşunu basılı tutun.

Bir tutamaca tıklayın, imleci hareket ettirin ve yeniden tıklayın; ya da tutamaca tıklayıp bir çarpan yazın (`2` iki katına çıkarır, `0.5` yarıya indirir) ve {{key:Enter}}'a basın. Her yönün kendi çarpanını vermek için kırmızı, yeşil ve mavi için üç değer yazın: `2,1,0.5`. Açık bir grubun içinde yönler grubun kendi yönleridir.

### Herhangi bir noktaya göre ölçekleme

Bir tutamaç dışında herhangi bir yere tıklayarak kendi seçtiğiniz bir noktaya göre eşit biçimde ölçekleyin. Üç tıklama gerektirir:

1. Yeniden boyutlandırmak istediğiniz şeyi seçin. Hiçbir şey seçili değilse Ölçekle, önce tıkladığınız şeyi alır.
2. {{key:S}}'ye basın.
3. Yerinde kalacak noktaya tıklayın (bir tutamaç üzerinde olmayan), örneğin alt bir köşeye.
4. Bir referans noktasına tıklayın. İlk noktaya olan uzaklığı 1× sayılır.
5. İmleci ilk noktaya doğru ya da ondan uzağa hareket ettirin. Çarpan ipucunda ve değer kutusunda ({{ui:Ölçekle}}) gösterilir.
6. Bitirmek için tıklayın ya da bir çarpan yazıp {{key:Enter}}'a basın: `2` boyutu iki katına çıkarır, `0.5` yarıya indirir.

### Tam bir boyuta ölçekleme

Bir şeyi tam bir uzunluğa getirmek için çarpanı hesaplayın: yeni uzunluk, mevcut uzunluğa bölünür. Üç tıklamalı kipte değer kutusu aritmetik yapar; 3.6 m'lik bir duvarı 4.2 m uzunluğa getirmek için `4.2/3.6` yazın. Bir tutamacın değer kutusu yalnızca düz sayıları kabul eder: önce çarpanı hesaplayın (4.2 bölü 3.6, yaklaşık 1.1667'dir). Mevcut uzunluğunu okumak için önce kenarı seçin ve {{ui:Öğe bilgisi}} bölümüne bakın.

### Yanlış boyutta gelen bir içe aktarmayı düzeltme

OBJ dosyalarında birim olmadığından, milimetre cinsinden çizilmiş bir model 1000 kat büyük gelir. İçe aktarılan grubu seçin, {{key:S}}'ye basın, bir köşe tutamacına tıklayın ve `0.001` yazıp {{key:Enter}}'a basın. İnç cinsinden çizilmiş bir model için `0.0254` yazın.

## Bilmeniz gerekenler

- Üç tıklamayla bir noktaya göre ölçekleme eşit biçimdedir. Tek bir yönde gerdirmek için bir kenar ya da kenar tutamacı kullanın (yukarıya bakın).
- Bir grubu ya da bileşeni ölçeklemek, ölçeklediğiniz kopyayı değiştirir; bileşenin diğer kopyaları boyutlarını korur.
- İptal etmek için son tıklamadan önce {{key:Esc}}'ye basın.

## Çevirme

{{ui:Düzenle}} › {{ui:Daha fazla}} › {{ui:Kırmızı eksende çevir}}, {{ui:Yeşil eksende çevir}} ya da {{ui:Mavi eksende çevir}}, seçimi kutusunun ortasından geçerek olduğu yerde aynalar: sol el merdiveni sağ el merdiveni yapar. Yüzeyler dışarı bakmaya devam eder; bir grup ya da bileşen bütün olarak aynalanır (iç kısımları yeniden yazılmaz).

{{ui:Kırmızı eksende çevrilmiş kopya}} (yeşil ve mavi için de aynısı), asıl nesneyi olduğu yerde bırakır ve seçimin kutusunun uzak tarafının karşısına, yanına aynalanmış bir kopya koyar: bir çiftin diğer kapısı, bir binanın diğer kanadı. Oraya dokunan serbest geometri, dokunan geometrinin her zaman yaptığı gibi asıl nesneye katılır; onları ayrı tutmak için önce asıl nesneyi grup yapın.

Açık bir grubun içinde kırmızı, yeşil ve mavi, grubun kendi eksenleridir.
