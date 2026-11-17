---
title: Araç listesi
summary: Her ModelCraft aracı, tuşu, her tıklamanın ne yaptığı ve araç çalışırken değer kutusuna ne yazabileceğiniz.
keywords: araçlar, araç çubuğu, komutlar, liste, çizgi, dikdörtgen, daire, çokgen, ofset, yay, eğri, spline, takip et, süpürme, 2 noktalı yay, merkezden yay, seç, it çek, taşı, döndür, ölçekle, silgi, şerit metre, ölçülendirme, yörünge, kaydır, yakınlaştır, bileşen yerleştir
from: e08a274f
---

Durum çubuğundaki ipucu her zaman mevcut aracın sıradaki ne istediğini söyler. {{key:Esc}} bir aracın ortasında olduğu işi iptal eder.

## Çizim araçları

| Araç | Tuş | Tıklamalar | Değer kutusuna yazın |
|---|---|---|---|
| {{ui:Çizgi}} | {{key:L}} | Başlangıç, sonra her sonraki nokta. Bir yüzey kapandığında ya da {{key:Esc}} tuşunda durur | İşaretçiye doğru bir uzunluk; `[x,y,z]` bir nokta; `<dx,dy,dz>` bir ofset ({{ui:Uzunluk}}) |
| {{ui:Dikdörtgen}} | {{key:R}} | İlk köşe (zemin ya da bir yüzey), karşı köşe | Genişlik ve derinlik: `4m,3m` ({{ui:Ölçülendirmeler}}) |
| {{ui:Daire}} | {{key:C}} | Merkez (zemin ya da bir yüzey), kenarda bir nokta | İlk tıklamadan önce: kenar sayısı, `24s` ya da `24` ({{ui:Kenar sayısı}}). Sonra: yarıçap ({{ui:Yarıçap}}) |
| {{ui:Çokgen}} | {{key:N}} | Merkez, bir köşe | Daire ile aynı; 6 kenarla başlar |
| {{ui:Yay}} | {{key:A}} | Başlangıç, bitiş, sonra kabarıklık | Başlangıçtan sonra kirişin uzunluğu ({{ui:Uzunluk}}); bitişten sonra kabarıklık ({{ui:Kabarıklık}}); parçalar için `12s` |
| {{ui:Açıölçer}} | — | Merkez, 0° noktası, sonra açı | Derece cinsinden açı ({{ui:Açı}}) |
| {{ui:Takip et}} | — | Bir yol seçin, sonra yüzeye tıklayın (ya da önce yüzeye, sonra yolun bir kenarına) | — |
| {{ui:Boya}} | {{key:B}} | Bir yüzey, grup ya da bileşen | — ({{key:Ctrl}} bağlı, {{key:Shift}} o renkteki hepsi, {{key:Alt}} bir renk al) |
| {{ui:Ofset}} | {{key:F}} | Bir yüzey (ya da önce yüzeyi ya da kenarları seçin), sonra taraf ve mesafe | Mesafe ({{ui:Mesafe}}); yüzeyin içine doğru olan içe doğrudur |
| {{ui:Eğri}} | — | Eğrinin geçtiği noktalar; {{key:Enter}} ya da çift tıklama bitirir | İşaretçi boyunca bir uzunluk, sonraki nokta için `[x,y,z]` ya da `<dx,dy,dz>` |
| {{ui:Yay merkezi}} | — | Merkez, başlangıç, sonra bitiş | Merkezden sonra yarıçap; başlangıçtan sonra derece cinsinden açı; parçalar için `12s` |

## Düzenleme araçları

| Araç | Tuş | Tıklamalar | Değer kutusuna yazın |
|---|---|---|---|
| {{ui:Seç}} | {{key:Space}} | Tıklayın, çift tıklayın, üç kez tıklayın, bir kutu sürükleyin. Bkz. [Şeyleri seçin](topic:select) | Tek bir ölçü ya da kenar seçiliyken: yeni uzunluk; bu model boyutunu değiştirir |
| {{ui:İt/çek}} | {{key:P}} | Yüzey, sonra mesafe. Son mesafeyi tekrarlamak için bir yüzeye çift tıklayın | Bir mesafe; eksi ters yöne gider ({{ui:Mesafe}}) |
| {{ui:Taşı}} | {{key:M}} | Bir noktadan, bir noktaya. Kopyalamak için {{key:Ctrl}} ya da {{key:Alt}} basılı tutun | İşaretçiye doğru bir mesafe, `<dx,dy,dz>` ya da `[x,y,z]` ({{ui:Mesafe}}). Kopyalamadan sonra: `3x` ya da `/3` |
| {{ui:Döndür}} | {{key:Q}} | Merkez (bir yüzey üzerinde, kendi düzleminde çevirmek için), başlangıç yönü, bitiş yönü | Derece cinsinden açı ({{ui:Açı}}) |
| {{ui:Ölçekle}} | {{key:S}} | Yerinde kalan nokta, bir referans noktası, yeni boyut | Bir çarpan: `2`, `0.5` ({{ui:Ölçekle}}) |
| {{ui:Silgi}} | {{key:E}} | Kenarların, grupların, kılavuzların ve ölçülendirmelerin üzerine tıklayın ya da sürükleyin | hiçbir şey |
| {{ui:Şerit metre}} | {{key:T}} | Bir kenardan: paralel bir kılavuz çizgi. Bir noktadan: ölçer ve bir kılavuz nokta bırakır | Ofset ({{ui:Ofset}}) ya da mesafe ({{ui:Uzunluk}}) |
| {{ui:Ölçülendirme}} | {{key:D}} | İki köşe (ya da bir kenar), sonra ölçü çizgisinin nereye gideceği. Bkz. [Ölçülendirme ve yeniden boyutlandırma](topic:dimensions) | Ofset ({{ui:Ofset}}). Hemen sonra: yeni uzunluk; bu model boyutunu değiştirir |

{{ui:Taşı}}, {{ui:Döndür}} ve {{ui:Ölçekle}} seçim üzerinde çalışır. Hiçbir şey seçili değilse, önce tıkladığınız şeyi alırlar (bir yüzey, kenarlarını da getirir).

## Kamera araçları

| Araç | Tuş | Sürükleyerek |
|---|---|---|
| {{ui:Yörünge}} | {{key:O}} | İşaretçinin altındaki model parçası etrafında dönün ({{key:Shift}} kaydırır) |
| {{ui:Kaydır}} | {{key:H}} | Görünümü kaydırın |
| {{ui:Yakınlaştır}} | {{key:Z}} | Yakınlaştırın: yukarı içeri, aşağı dışarı |
| {{ui:Sınırlar}} | {{key:Shift+Z}} | (bir düğme, bir araç değil) Tüm modeli sığdırın |

Fare ile bunlara nadiren ihtiyaç duyarsınız: orta sürükleme yörüngeyi döndürür, sağ sürükleme kaydırır ve tekerlek her araçla yakınlaştırır. Bkz. [Yörünge, kaydırma ve yakınlaştırma](topic:orbit-pan-zoom).

## Gruplama

| Düğme | Tuş | İşlevi |
|---|---|---|
| {{ui:Bileşen}} | {{key:G}} | Seçimi bir bileşen yapar |
| {{ui:Grup}} | {{key:Shift+G}} | Seçimi bir grup yapar |
| {{ui:Patlat}} | yok | Seçili grupları ve bileşenleri yeniden serbest geometriye çevirir |

## Bileşen yerleştirin

Araç çubuğunda değil: {{ui:Bileşenler}} panelinde bir bileşenin yanındaki {{ui:Yerleştir}} öğesine tıklayın. Bileşenin orijin noktasının gideceği yere bir kez tıklayın; araç sonra {{ui:Seç}} aracına döner.
