---
title: Yüzeyleri kesiştirin
summary: Yüzeylerin birbirini kestiği yerden çizgiler çizin; böylece parçaları itip çekebilir, silebilir ya da boyayabilirsiniz.
keywords: kesiştir, yüzeyleri kesiştir, modelle kesiştir, kes, açıklık, delik, birleştir, yüzeylerin kesiştiği çizgiler, boole
from: 6bc58526
---

Bir şekil başka bir şekilden geçtiğinde ModelCraft, yüzeylerinin birleştiği yerde çizgi çizmez: yalnızca üst üste biner. **Kesiştir** bu çizgileri kenar olarak çizer, böylece yüzeyler orada bölünür. Sonra parçaları itip çekebilir, silebilir ya da boyayabilirsiniz.

Her iki komut da {{ui:Düzenle}} › {{ui:Daha fazla}} içindedir.

## Modelle kesiştir

Seçtiklerinizi ekranda gördüğünüz **her yüzeye** karşı keser.

Örneğin bir kiriş (bir grup) bir duvardan (başka bir grup) geçiyor ve duvarda bir açıklık istiyorsunuz:

1. Duvarı açmak için üzerine çift tıklayın ve tüm yüzeylerini seçin ({{key:Ctrl+A}}).
2. {{ui:Düzenle}} › {{ui:Daha fazla}} › {{ui:Modelle kesiştir}}.

Kirişin dış hatları duvarın iki yüzeyinde de iki yeni yüzey olarak çizilir. Açıklığı oluşturmak için bunlardan birini duvarın içinden geçirerek itin, sonra duvarı kapatın.

## Seçimle kesiştir

Seçtiğiniz yüzeyleri, grupları ve bileşenleri **yalnızca birbirlerine karşı** keser. En az ikisini seçin.

## Çizgilerin nereye gittiği

Çizgiler her zaman **açık bağlamda** çizilir: hiçbir grup açık değilken modelde, ya da düzenlediğiniz grupta. Açık olmayan gruplar ve bileşenler değişmez. Bu yüzden bir grubun yüzeylerini kesmek için önce onu açın; yukarıdaki örnekte olduğu gibi.

## Bilmeniz gerekenler

- Aynı düzlemdeki yüzeyler kesiştirilmez.
- Bir yüzeyde bir döngüyü kapatan çizgiler, çizilmiş çizgilerde olduğu gibi yeni bir yüzey oluşturur.
- Her kesiştirme tek bir geri alma adımıdır. Hiçbir şey kesişmiyorsa hiçbir şey değişmez.
- Kapalı şekiller için [katı araçları](topic:solids) (Birleştir, Çıkar) işin tamamını tek adımda yapar.
