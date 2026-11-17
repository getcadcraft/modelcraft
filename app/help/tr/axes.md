---
title: Çizim eksenlerini taşıyın ve döndürün
summary: Kırmızı, yeşil ve mavi eksenleri onlara dik olmayan bir binaya uyacak şekilde döndürün veya bir yüzeye hizalayın; böylece çizim ve yazma bunu izler.
keywords: eksenler, çizim eksenleri, başlangıç noktası, eksenleri hizala, eksenleri döndür, eksenleri çevir, eksenleri sıfırla, açılı bina, eğik, ucs, koordinat sistemi
from: cab258f7
---

Kırmızı, yeşil ve mavi eksenler çizdiğiniz her şeye rehberlik eder: dikdörtgenler onlara hizalanır, çizgiler onlara kilitlenir ve zemin kırmızı–yeşil düzlemdir. Bir bina açılı durduğunda (kuzeye göre dik olmayan bir arsa planı, 30° döndürülmüş bir kanat), eksenleri ona taşıyın; böylece çizim duvarlarını izler. Model kendisi hareket etmez.

Üç komutun hepsi {{ui:Düzenle}} › {{ui:Daha fazla}} altındadır.

## Eksenleri yerleştirin

1. {{ui:Düzenle}} › {{ui:Daha fazla}} › {{ui:Eksenleri yerleştir}}.
2. Başlangıç noktasının olacağı yere tıklayın, örneğin binanın bir köşesine.
3. Yeni kırmızı eksen boyunca bir noktaya tıklayın, örneğin bir duvar boyunca daha ileride.
4. Yeni yeşil eksene doğru bir noktaya tıklayın. Yeşil, kırmızıya dik yapılır; mavi ikisine de dik durur.

Eksenler yeni yerlerinde çizilir. Şimdi zemine çizdiğiniz ya da `4m,3m` gibi yazdığınız bir dikdörtgen döndürülmüş kırmızı ve yeşil boyunca uzanır; ok tuşları onlara kilitlenir ve başlangıç noktası yakalaması yeni başlangıç noktasındadır.

## Eksenleri bir yüzeye hizalayın

Bir yüzey seçin, sonra {{ui:Düzenle}} › {{ui:Daha fazla}} › {{ui:Eksenleri yüzeye hizala}}. Mavi o zaman yüzeyin dışına bakar, kırmızı en uzun kenarı boyunca uzanır ve başlangıç noktası o kenarın başlangıcındadır. Eğimli bir çatıya sanki zeminmiş gibi çizim yapmak için kullanın.

## Eksenleri sıfırlayın

{{ui:Düzenle}} › {{ui:Daha fazla}} › {{ui:Eksenleri sıfırla}} onları modelin başladığı yere geri koyar.

## Bilmeniz gerekenler

- Açık bir grubun ya da bileşenin içinde kendi eksenleri kullanılır (onunla birlikte döner); modelin eksenleri en üst düzeyde geçerlidir.
- Eksenler ModelCraft dosyasına kaydedilir ve her değişiklik bir geri alma adımıdır.
- Dışa aktarmalar ve standart görünümler ({{ui:Üst}}, {{ui:Ön}}…) hâlâ modelin kendi yönlerini kullanır.
