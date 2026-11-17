---
title: Kenarları yumuşatma ve pürüzsüzleştirme
summary: Sığ bir açıyla birleşen yüzeyler arasındaki kenarları gizleyin; böylece eğri şekiller ModelCraft'ta ve dışa aktarılan dosyalarda tek bir pürüzsüz yüzey gibi okunur.
keywords: yumuşat, pürüzsüz, yumuşak kenarlar, pürüzsüz gölgelendirme, kenarları gizle, köşeli, köşeli yüzeyler, eğri, normaller, sertleştir, açı
from: 52d32453
---

Bir ModelCraft şekli, eğri olsa bile düz yüzeylerden oluşur. Bu yüzeyler arasındaki **yumuşak** kenarlar çizilmez ve birleştirdikleri yüzeyler tek bir pürüzsüz yüzey olarak gölgelendirilir; böylece 24 kenarlı bir silindir yuvarlak görünür.

Bir daireyi {{ui:İt/çek}} ile yukarı çektiğinizde kenarları sizin için yumuşatılır. Diğer şekiller için açıya göre yumuşatın.

## Açıya göre yumuşatın

1. Yumuşatılacak şeyi seçin: yüzeyler ve kenarlar, ya da bir grup ya da bileşen (tüm kenarları).
2. {{ui:Öğe bilgisi}} içinde, {{ui:Şuna kadar yumuşat}} alanına `20` gibi bir açı yazın ve {{ui:Yumuşat}} düğmesine tıklayın.

Seçimdeki, iki yüzeyi bu açı kadar ya da daha az dönen her kenar yumuşar; daha keskin dönen kenarlar sert kalır. 12 kenarlı bir prizmanın kenarları 30° döner, köşeleri ise 90° döner; bu yüzden `31` yalnızca kenarları yumuşatır.

{{ui:Tümünü sertleştir}}, seçimdeki her kenarı yeniden sert yapar. Her biri tek bir geri alma adımıdır.

## Bilmeniz gerekenler

- Yalnızca tam olarak iki yüzey arasındaki kenarlar yumuşatılır. Serbest kenarlar olduğu gibi kalır.
- Pürüzsüz gölgelendirme yalnızca yumuşak kenarlar boyunca çalışır: yumuşak kenarı olmayan bir yüzey düz gölgelenir.
- Yumuşak kenarlar ModelCraft dosyasında saklanır. **glTF (.glb)** ve **OBJ** dışa aktarımları pürüzsüz gölgelendirmeyi taşır (köşe başına bir normal), böylece diğer programlar aynı yüzeyi gösterir. Collada ve STL düz yüzeyleri dışa aktarır.
- Yumuşak kenarlar her yüzey stilinde gizlidir; {{ui:X-ışını}} ve {{ui:Tel kafes}} de dahil. Görmek için şekli seçin ve {{ui:Tümünü sertleştir}} düğmesine tıklayın; geri alma yumuşatmayı geri getirir.
