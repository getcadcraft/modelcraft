---
title: Katı araçları: birleşim, çıkarma, kesiştirme
summary: Kapalı grupları ve bileşenleri tek bir şekilde birleştirin, birini ötekinden kesip çıkarın ya da yalnızca ortak olanları tutun.
keywords: katı, katılar, katı denetçisi, katı değil, katıyı düzelt, delik, başıboş kenar, içten dışa, birleşim, birleştir, bir araya getir, çıkar, fark, kes, delik, kesiştir, kesişim, boolean, dış kabuk
from: f35df1cc
---

Katı araçları **katıları** birleştirir: yüzeyleri bir hacmi kapatan, her kenarı tam olarak iki yüzeyi birleştiren grup ve bileşenler. {{ui:Öğe bilgisi}}, bir katı için {{ui:Katı}}: {{ui:Evet}} der ve hacmini gösterir.

Bunlar {{ui:Yönet}} grubundaki {{ui:Katılar}} menüsündedir.

## Bir şey katı olmadığında

Grubu ya da bileşeni seçin. Katı değilse, {{ui:Öğe bilgisi}} nedenini söyler, örneğin "Not a solid: 4 edges border a hole · 1 stray edge":

| Sorun | Anlamı |
|---|---|
| Kenarlar bir delikle sınırlı | Bir yüzey eksik |
| Kenarları üç ya da daha fazla yüzey paylaşıyor | Bir yüzey içeriyi böler ya da iki şekil bir kenar boyunca birbirine değiyor |
| Şeklin içindeki yüzeyler | Hacmin içinde kalmış bir duvar |
| Başıboş kenarlar | Hiçbir yüzeyi sınırlamayan çizgiler |
| İçten dışa dönmüş yüzeyler | Ön yüzleri, komşularına karşı içe bakar |

{{ui:Sorunları göster}}, bu kenarları ve yüzeyleri seçili olarak açar, böylece görebilirsiniz. {{ui:Düzelt}}, basit durumları tek bir geri alma adımında onarır: başıboş kenarları ve şeklin içindeki yüzeyleri kaldırır, yüzeyleri doğru yöne çevirir ve kenarı düz yatan delikleri kapatır. Güvenle onarılamayan her şeyi (düz olmayan bir delik, çok sayıda yüzeyin paylaştığı bir kenar) size bırakır ve neyin kaldığını söyler.

## Birleşim

1. İki ya da daha fazla katı seçin (birine tıklayın, diğerlerinde {{key:Ctrl}}+tıklayın).
2. {{ui:Katılar}} › {{ui:Birleşim}}.

Bunlar tek bir grupta tek bir katı olur. Üst üste bindikleri yerlerde, içteki yüzeyler yok olur.

## Çıkarma

1. {{ui:Katılar}} › {{ui:Çıkar}}.
2. **Alınacak** katıya tıklayın (kesici).
3. **Kesilecek** katıya tıklayın.

İkinci katıdan kalan kısım durur; kesici tüketilir. Örneğin bir bloğa delik açmak için, onun içinden bir direk çizin, direği bir grup yapın, sonra direği bloktan çıkarın.

## Kesiştirme

İki ya da daha fazla katı seçin, sonra {{ui:Katılar}} › {{ui:Kesiştir}}. Yalnızca hepsinin paylaştığı kısım korunur.

## Bilmeniz gerekenler

- Sonuç yeni bir gruptur. İlk katının adını, rengini ve etiketini korur (Çıkarma için: kestiğiniz katının). Yüzeylerine boyanmış renkler korunmaz.
- Sonucun düz yanları tek yüzeylerdir. Yuvarlak yanlar, çizildikleri düz parçalar olarak çıkar.
- Bir grup ya da bileşen katı değilse, araç hangisi olduğunu söyler ve hiçbir şeyi değiştirmez. Eksik bir yüzey ya da içindeki başıboş bir yüzey arayın.
- Açık bir grubun içinde, araçlar o gruptaki grup ve bileşenler üzerinde çalışır.
- Her araç tek bir geri alma adımıdır.
- Bir katı aracını ilk kez kullandığınızda motoru (manifold-3d) yüklenir; bu bir an sürebilir.
