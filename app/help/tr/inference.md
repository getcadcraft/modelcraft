---
title: Çıkarım ve yakalama
summary: Renkli işaretçilerin ne anlama geldiğini, hangi yakalamanın öne geçtiğini ve bir yönü ok tuşları ya da Shift ile nasıl kilitleyeceğinizi öğrenin.
keywords: çıkarım, yakalama, uç nokta, orta nokta, yüzey merkezi, merkez, kenarda, yüzeyde, eksen, kırmızı eksen, yeşil eksen, mavi eksen, paralel, dik, kilit, shift, osnap
from: e78984e9
---

Bir çizim ya da düzenleme aracı çalışırken ModelCraft imlecin altındaki şeye bakar ve yakındaki en yararlı şeye yapışır. Bir işaretçi neyi bulduğunu gösterir ve sol alttaki uç da adını söyler.

## İşaretçiler ve uçlar

| Uç | İşaretçi | Neye yapışır |
|---|---|---|
| Uç nokta | Yeşil daire | Bir kenarın ucu |
| Orta nokta | Camgöbeği daire | Bir kenarın ortası |
| Yüzey merkezi | Mavi daire | İmlecin altındaki yüzeyin ortası |
| Kılavuz noktası | Gri | Şerit metrenin bıraktığı bir kılavuz noktası |
| Orijin | Okr | Kırmızı, yeşil ve mavi eksenlerin kesiştiği yer |
| Kırmızı eksende / Yeşil eksende / Mavi eksende | Bu renkte bir çizgi | Başlangıç noktanızdan o yöne doğru bir çizgi |
| Kenara paralel / Kenara dik | Macenta çizgi | Başlangıç noktanızdan hatırlanan kenara paralel ya da dik bir çizgi (aşağıya bakın) |
| Kilitli | Macenta çizgi | Bir ok tuşu ya da Shift ile kilitlediğiniz bir yön |
| Kenarda | Kırmızı kare | Bir kenarın herhangi bir yerinde |
| Kılavuz üzerinde | Gri | Bir kılavuz çizgisinin herhangi bir yerinde |
| Yüzeyde | Mavi elmas | Bir yüzeyin herhangi bir yerinde |
| Düzlemde | yok | Boş alanın üzerinde imleç olduğunda başladığınız düzlem |
| Zeminde | yok | Başka hiçbir şey yokken zemin (kırmızı-yeşil düzlem) |

Başlangıç noktanızdan bir eksen çizgisi bir kenarı ya da kılavuzu kestiğinde ModelCraft kesişime yapışır ve uç ikisini de söyler; örneğin "Kırmızı eksende, kenarda".

## Hangi yakalama öne geçer

1. **Noktalar** yaklaşık 12 piksel içinde: önce uç noktalar, sonra kılavuz noktaları, orta noktalar, imlecin altındaki yüzeyin merkezi ve orijin.
2. **Yönler** başlangıç noktasından: kırmızı, yeşil ve mavi eksenler ile hatırlanan kenara paralel ya da dik.
3. **Bir kenarda** ya da bir kılavuz çizgisinde.
4. **Bir yüzeyde.**
5. **Çizim düzlemi** ya da zemin.

Bir yüzeyin arkasında gizli olan şeyler hiçbir zaman yakalanmaz. İstediğiniz noktayı görmek için {{ui:Yörünge}} ile görünümü döndürün.

## Bir noktadan yüzeye çizim

Bir köşeden, orta noktadan, bir kenardan ya da bir yüzeyin merkezinden başlatılan bir {{ui:Dikdörtgen}}, {{ui:Daire}} ya da {{ui:Çokgen}}, imlecin altındaki yüzeyin **düzleminde** çizilir ve o yüzeyi keser. Bir kenar iki yüzeye aittir; bu yüzden imlecin kenarın hangi tarafında olduğu karar verir. Uzun bir kutunun ucuna çizmek için, imleç uç yüzeyin hemen içindeyken kutunun kenarlarından birinin ortasından başlayın.

## Paralel ve dik

ModelCraft, ilk tıklamanızdan önce imlecin üzerinden geçtiği **son kenarı** hatırlar. Bir köşede ya da bir kenarda başlamak, o kenarın üzerinden geçilmiş sayılır. Araç çalışmaya başladığında, üzerine geldiğiniz diğer kenarlar onu değiştirmez.

Mevcut bir kenara paralel bir çizgi çizmek için:

1. {{key:L}} tuşuna basın ve eşleştirmek istediğiniz kenarın üzerine gelin.
2. Başlangıç noktasına gidin; mümkünse yolda başka kenarları geçmeden, ve tıklayın.
3. O kenara paralel yönde hareket edin. Çizgi macenta olur ve uç "Kenara paralel" der. Dik olması da çizdiğiniz düzlem içinde aynı şekilde çalışır.

Yanlış kenar hatırlandıysa {{key:Esc}} tuşuna basın, doğru kenarın üzerine gelin ve yeniden başlayın.

## Bir yönü kilitleyin

Bir aracın ilk tıklamasından sonra bir sonraki noktayı tek bir çizgide tutabilirsiniz:

| Tuş | Kilitlenir |
|---|---|
| {{key:Right}} | Kırmızı eksene |
| {{key:Left}} | Yeşil eksene |
| {{key:Up}} | Mavi eksene (doğrudan yukarı) |
| {{key:Down}} | Hatırlanan kenara paralel (yukarıya bakın) |

Kilidi açmak için aynı oka yeniden basın. Durum çubuğu "Kırmızı eksene kilitlendi. Kilidi açmak için aynı oka basın." yazar.

Kilitliyken nokta, imlecin olduğu yöne doğru çizgi boyunca kayar ve üzerine geldiğiniz noktalarla yine hizalanır: kırmızı yönde tam o köşeye kadar bir çizgi çizmek için başka bir kutunun köşesinin üzerine gelin.

**{{key:Shift}}** o anda yakalandığınız yönü (bir eksen ya da paralel) basılı tuttuğunuz sürece kilitler. Bırakırsanız kilit açılır.

Kilitler {{ui:Çizgi}}, {{ui:Dikdörtgen}}, {{ui:Daire}}, {{ui:Çokgen}}, {{ui:Taşı}}, {{ui:Ölçekle}} ve {{ui:Şerit metre}} araçlarında çalışır. İlk tıklamadan önce ok tuşları bunun yerine görünümü yörüngede döndürür.

## Bir grubun içinde

Bir grup ya da bileşenin içinde düzenlerken eksenler grubun kendi eksenleridir (onunla birlikte hareket eder ve döndürülmüşse onunla birlikte döner). Yakalamalar yine grubun dışındaki noktaları ve kenarları bulur; böylece şeyleri modelin geri kalanıyla hizalayabilirsiniz.
