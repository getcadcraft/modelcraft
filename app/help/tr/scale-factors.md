---
title: Çarpanlarla ölçekleme ve büzülme payı
summary: Seçimi, seçtiğiniz bir nokta etrafında her eksen için bir çarpanla ölçekleyin ya da döküm yapılacak bir parçanın büzüleceği yüzde kadar bir modeli büyütün.
keywords: ölçek, düzgün olmayan, çarpan, yüzde, gerdirme, büzülme, küçülme, döküm, model, dökümhane, pay, yeniden boyutlandır
from: 37e1bbff
---

Ölçekle aracı ({{key:S}}) eşit biçimde ölçekler ya da bir, iki yönü gerdirmek için bir tutamacı sürükler. **Çarpanlarla ölçekle…** (Araçlar menüsü ya da Değiştir grubu), üç eksenin her biri için bir sayı yazdığınız yazılı biçimdir.

1. Kenarları, yüzeyleri, grupları ya da bileşenleri seçin.
2. {{ui:Çarpanlarla ölçekle…}} bölümünü açın. Kırmızı, yeşil ve mavi için bir çarpan yazın. Çarpan `1.015`, `101.5%` ya da `+1.5%` olabilir (küçültmek için `-2%`). {{ui:Üç eksende aynı}} ilkini diğer ikisine kopyalar.
3. **Yerinde kalacak** noktayı seçin: seçimin ortası, en alt köşesi, alt ortası ya da orijin.
4. Alanların altındaki satır, şimdiki ve sonraki boyutu gösterir. {{ui:Ölçekle}} bunu tek bir geri alma adımında yapar.

Eksenler, açık olan grubun eksenleridir (en üst düzeyde modelin). Döndürülmüş bir grup ya da bileşen, çarpanları farklıysa eğik çıkar; bunun yerine onu içeren grubu ölçekleyin. Bir bileşenin içeriğine dokunulmaz, bu yüzden diğer kopyaları olduğu gibi kalır.

## Büzülme payı

Döküm bir parça soğurken büzüşür; bu yüzden modeli büyütülür. **Büzülme payı** altında her eksen için yüzdeyi yazın (dökümhaneniz ya da model yapımcınız metaliniz için verir; aşağıdaki %1,5 yalnızca bir örnektir) ve {{ui:Çarpan olarak kullan}} düğmesine basın.

- **Yüzdenin kendisi**, çarpanı 1 artı yüzde yapar: %1,5 değeri 1.015 verir; bir büzülme cetvelinin işaretlediği değer budur.
- **Tam yeterli** çarpanı 1 bölü (1 eksi yüzde) yapar: %1,5 değeri 1.0152 verir; böylece döküm, o kadar büzüldükten sonra parçanın boyutunda çıkar.

Son yüzdeleriniz bu tarayıcıda hatırlanır.

:::note
Yüzdeyi siz belirlersiniz: ModelCraft metalinizi, kalıbınızı ya da sürecinizi bilmez.
:::
