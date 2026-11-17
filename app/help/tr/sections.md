---
title: Kesit düzlemleri: modeli kesip açma
summary: Modelin içini görmek için bir kesit düzlemi yerleştirin, içinden kaydırın, yönünü çevirin ya da kesimi kapatın.
keywords: kesit, kesit düzlemi, kesit kesimi, kesim, kesit görünümü, kırpma, içi, kat planı, dilim, enine kesit
from: 28c3a645
---

Bir kesit düzlemi modeli keserek açar; böylece içinde görebilir ve çalışabilirsiniz: bir evin kat planı, bir dolabın içi. Model değiştirilmez; kesim yalnızca bir görünümdür.

## Bir tane yerleştirme

1. {{ui:Kamera}} grubunda {{ui:Kesit}} düğmesine tıklayın.
2. Bir yüzeye tıklayın. Düzlem o yüzeye yerleşir ve size bakan dört ok gösterir.

   Herhangi bir yüzeyden uzağa tıklarsanız, en çok baktığınız yöne dik bir düzlem kare olarak yerleşir. Önce bir ok tuşuna basarsanız, bunun yerine düzlemi kırmızıya ({{key:Right}}), yeşile ({{key:Left}}) ya da maviye ({{key:Up}}) dik yerleştirir.

Okların gösterdiği taraf **kesilip atılır**. Bir yüzeye yerleştirilmiş bir düzlem henüz hiçbir şeyi kesmez: onu modelin içine kaydırın.

## Kaydırma, ters çevirme, kapatma

Düzlemin çizgisine tıklayarak onu seçin. {{ui:Öğe bilgisi}} içinde:

- {{ui:Okları boyunca}} nerede durduğunu gösterir. Yeni bir mesafe yazın ve modelin içinden kaydırmak için {{key:Enter}} tuşuna basın; bir ön yüzeye yerleştirdiğiniz bir düzlemi modelin 1 m içine taşımak için `-1m` yazın.
- {{ui:Ters çevir}} okları çevirir, böylece diğer taraf kesilip atılır.
- {{ui:Etkin (modeli keser)}}: aynı anda yalnızca bir düzlem keser. Başka bir düzlemin kutusunu işaretleyin ya da yenisini yerleştirin; o keser.
- {{ui:Ad}} alanında yeniden adlandırın; {{key:Delete}} tuşuyla ya da {{ui:Silgi}} ile silin.

Düzlem kapalı bir katıdan geçtiğinde kesit koyu bir renkle doldurulur. Kapalı olmayan geometri (tek bir yüzey, açık bir kutu) kesilir ama doldurulmaz.

## Gösterme ve gizleme

{{ui:Görünümler}} içinde:

- {{ui:Kesit düzlemlerini göster}} düzlemlerin çizgilerini ve oklarını gizler (kesim kalır).
- {{ui:Kesit kesimlerini göster}} kesimi kapatır ve düzlemleri silmeden bütün modeli gösterir.

[Sunum görünümü](topic:styles-shadows#presentation-view) çizgileri de gizler.

## Bilmeniz gerekenler

- Kesilip atılan şeye tıklanamaz ya da yakalanamaz; böylece kesimin gösterdiği şeyin üzerine çizebilirsiniz.
- Kesit düzlemleri, hangisinin etkin olduğu ve iki anahtar ModelCraft dosyasında kaydedilir. Her değişiklik bir geri alma adımıdır.
- Dışa aktarımlar her zaman bütün modeli içerir: kesit bir görünümdür, bir düzenleme değil.
