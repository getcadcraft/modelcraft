---
title: Bir duvardan açıklık geçirin
summary: Kalınlığı olan bir duvara pencere ya da kapı çizin ve onu içinden itin; böylece duvarda gerçek bir delik oluşur.
keywords: pencere, kapı, açıklık, delik, duvar, kesme, içinden itme, boşluk, kalınlık, cephe
from: 6b22f32c
---

Bir açıklık, iki yüzü olan bir duvar ister: bir kutu ya da uzun ince bir dikdörtgeni yukarı çekerek yaptığınız bir duvar. Tek başına duran bir yüz, içinden itilecek bir şeye sahip değildir.

## Pratik yapmak için bir duvar yapın

1. {{key:R}} tuşuna basın, zeminde bir köşeyi tıklayın ve `6m,0.3m` yazın (ya da `20',12"`), sonra {{key:Enter}}.
2. {{key:P}} tuşuna basın, dikdörtgeni tıklayın ve `3m` yazın (ya da `10'`), sonra {{key:Enter}}.

300 mm (12 in) kalınlığında bir duvarınız var.

## Açıklığı çizin

1. Duvarın uzun kenarını görebilmek için yörüngeleyin.
2. {{key:R}} tuşuna basın.
3. Duvarın yüzünün üzerine gelin, sonra pencerenin alt köşesinin gideceği yeri tıklayın. İpucu "Yüzeyde" yazar.
4. Pencerenin genişliğini ve yüksekliğini yazın, örneğin `1.2m,1.5m` (ya da `4',5'`), ve {{key:Enter}} tuşuna basın.

   Pencere, duvar yüzeyinin içinde kendi yüzeyi olur ve etrafında bir delik oluşur.

Pencereyi köşeden ve zeminden tam bir mesafede yerleştirmek için önce [kılavuzları](topic:guides-measure) kullanın: {{ui:Şerit metre}} ile duvarın alt ve uç kenarlarından kılavuz çizgiler çekin, sonra dikdörtgeni iki kılavuzun kesiştiği yerden başlatın (ipucu "Kılavuzda" yazar).

## İçinden itin

1. {{key:P}} tuşuna basın.
2. Pencere yüzeyini tıklayın ve duvara doğru itin.
3. Arka yüzeyde durana kadar taşıyın, sonra tıklayın. Ya da duvar kalınlığını yazın, `300` (ya da `12`), ve {{key:Enter}} tuşuna basın.

   ModelCraft arkadaki yüzeyde durur ve onu açar: duvarda baştan sona bir delik vardır ve onu kaplayan dört yan yüzey (dikmeler, üst kiriş ve eşik) vardır. {{ui:Özellik bilgisi}}, gruplandığında duvarı hâlâ kapalı bir katı olarak adlandırır.

Kalınlığın tamamından daha az itseniz, delik yerine bir oyuk elde edersiniz.

## Bir kapı

Dikdörtgeni duvar yüzeyinin alt kenarından başlayarak çizin (ipucu "Kenarda" ya da "Uç nokta" yazar), böylece açıklık zemine ulaşır. Aynı şekilde içinden itin.

## Aynı boyutta birçok pencere

1. İlk açıklığı yapın.
2. Sonrakiler için dikdörtgenleri çizin, sonra her birine {{ui:İt/çek}} ile çift tıklayın: çift tıklama son mesafeyi tekrarlar. Bkz. [İtme ve çekme](topic:push-pull#repeat-the-last-distance).

## İçinden geçmediyse

- Dikdörtgen duvarın **üzerine** çizilmelidir. Yüzeyin önünde havada çizildiyse, ayrı bir yüzeydir: geri alın ve yüzeyden başlayarak yeniden çizin.
- İtme, açıklığın arkasındaki ilk yüzeyde durur. Duvarın içinde başka bir şey yoldaysa (önceki çizimden kalan bir iç yüzey), orada durur; o yüzeyin kenarlarını silin ve yeniden deneyin.
- Ayrı bir grupta bulunan geometri kesilmez. Duvarı içeren grubu açın ve açıklığı içinde çizin.
