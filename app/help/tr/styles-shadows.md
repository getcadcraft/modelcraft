---
title: Stiller ve güneş gölgeleri
summary: Modeli gölgeli, gizli çizgi, tel kafes ya da geçirgen olarak gösterin ve herhangi bir tarih, saat ve konumda oluşturduğu gölgeleri inceleyin.
keywords: sunum görünümü, temiz görünüm, kılavuzları gizle, eksenleri gizle, stil, gölgeli, gizli çizgi, tel kafes, x-ışını, kenarlar, gölgeler, güneş, güneş çalışması, güneş ışığı, tarih, saat, enlem, boylam, saat dilimi, kuzey
from: 09c95329
---

Sağdaki {{ui:Stil}} paneli modelin nasıl çizildiğini değiştirir. Oradaki hiçbir şey modelin kendisini değiştirmez ve geri alma işleminin parçası değildir. Her [sahne](topic:scenes) kendi stilini hatırlar; dosya da kaydettiğiniz stili saklar.

## Yüzeyler

{{ui:Yüzeyler}} listesinden birini seçin:

| Stil | Görünümü |
|---|---|
| {{ui:Gölgeli}} | Katı yüzeyler, yumuşakça aydınlatılmış. Arkadan görülen yüzeyler mavi-gri. İçe aktarılan renkler görünür. |
| {{ui:Gizli çizgi}} | Yüzeyler arka plan renginde, kenarlar çizgi rengiyle: gizli çizgiler kaldırılmış temiz bir çizgi resmi. {{ui:Kâğıt}} üzerinde beyaz, {{ui:Model}} üzerinde koyu. |
| {{ui:Tel kafes}} | Yalnızca kenarlar. Yüzeyler çizilmez, ama tıkladığınızda ve yakalama yaptığınızda hâlâ sayılır: onların içinden seçemezsiniz. |
| {{ui:X-ışını}} | Geçirgen yüzeyler; arkasında ya da içinde ne olduğunu görmek için. Tel kafesteki gibi, tıklamalar ve yakalamalar en yakın yüzeyde durur. |

{{ui:Kenarları göster}}, {{ui:Tel kafes}} dışındaki her stilde kenarları açar ya da kapatır. Kapalıyken {{ui:Gizli çizgi}} neredeyse hiçbir şey göstermez, çünkü yüzeyleri arka plana uyar. Yumuşak kenarlar, örneğin çekilmiş bir dairenin yanları, hiçbir zaman çizilmez.

## Güneş gölgelerini açın

1. {{ui:Güneş gölgeleri}} kutusunu işaretleyin. Altındaki güneş ayarları etkin olur ve model kendi üzerine ve zemine gölge düşürür.
2. Konumu belirleyin:
   - {{ui:Enlem}}: kuzey pozitif, güney negatif (New York yaklaşık 40.7, Sidney yaklaşık -33.9).
   - {{ui:Boylam}}: doğu pozitif, batı negatif (New York yaklaşık -74.0).
   - {{ui:UTC farkı}}: alanın UTC'den saat cinsinden farkı, örneğin kış aylarında New York için `-5`. ModelCraft yaz saati uygulamaz; New York'ta yazın `-4` kullanın.
3. {{ui:Tarih}} (ay ve gün) ayarlayın ve {{ui:Saat}} kaydırıcısını sürükleyin. Saat 15 dakikalık adımlarla hareket eder ve kaydırıcının yanında "3:00 pm" gibi görünür.

Ayarların altındaki bir satır güneşin nerede olduğunu söyler, örneğin "Güneş 52° yukarıda, kuzeyden 250° uzakta. Kuzey yeşil eksendir." Gece ise "Bu saatte güneş batmış durumda." der.

Yeni bir model güneşi 21 Haziran, 3:00 pm ile, enlem 40, boylam -105, UTC farkı -7 ile başlatır.

## Modeli kuzeye yöneltin

ModelCraft'ın kuzeyi her zaman **yeşil eksendir**. Gerçek bir alanı incelemek için modelin kuzey tarafı yeşil boyunca bakacak şekilde çevirin: her şeyi seçin ({{key:Mod+A}}), {{key:Q}} tuşuna basın, zeminde bir merkeze tıklayın ve modeli alanın kuzeyden açısı kadar döndürün (bkz. [Döndür ve ölçekle](topic:rotate-scale)).

## Bir güneş çalışması

1. Yeri ve tarihi ayarlayın.
2. Bir sahne ekleyin ({{ui:Sahneler}} içinde {{ui:Sahne ekle}}).
3. Zaman kaydırıcısını hareket ettirin, sonra başka bir sahne ekleyin. İstediğiniz her saat için tekrarlayın.
4. Bunlar arasında gezinmek için {{ui:Oynat}} öğesine tıklayın. Bkz. [Görünümleri sahne olarak kaydedin](topic:scenes).

## Bilmeniz gerekenler

- Çok büyük bir modelde gölgeler çentikli görünebilir, çünkü tek bir gölge haritası tüm modeli kaplar.
- Gölgeler {{ui:Tel kafes}} içinde çizilmez.
- Güneşin konumu NOAA güneş hesaplamasını izler ve bir derecenin kesri kadar doğrudur; bu kütle çalışmaları için fazlasıyla yeterlidir. Atmosferik kırılma yok sayılır; bu yüzden gün doğumu ve batımına yakın çok alçak güneş açıları biraz sapabilir.

## Sunum görünümü

{{ui:Görünümler}} › {{ui:Sunum görünümü}} (ya da {{key:Shift+P}}) yalnızca modeli gösterir: eksenler, kılavuz çizgiler ve kılavuz noktalar, kesit düzlemlerinin ana hatları (kesit kalır), lambaların işaretleri, açık bir grubun kutusu, yakalama işaretleri ve ipuçları ile seçim vurgusu kaybolur. Modeli net görmek ya da bir ekran görüntüsünden önce kullanın. Araçlar hâlâ çalışır ve yakalar; yalnızca işaretleri görmezsiniz. İşaretleri geri getirmek için {{key:Shift+P}} tuşuna tekrar basın. Ölçülendirmeler çizimin parçası oldukları için kalır. Bir grubun içinde düzenlerken modelin geri kalanı artık soluklaşmaz: dokular dahil olduğu gibi görünür.
