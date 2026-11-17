---
title: Bir örgüyü örgü çalışma alanında düzenleyin
summary: Bir örgünün köşe noktalarını, kenarlarını ve yüzeylerini seçin, taşıyın; çıkarın, içe kaydırın, pah kırın, kesin, birleştirin, doldurun ve köprüleyin; iki tuş stilinden biriyle.
keywords: örgü, örgü düzenleme modu, örgü çalışma alanı, köşe noktası, köşe noktaları, kenar, kenarlar, yüzey, yüzeyler, çıkar, içe kaydır, pah kır, döngü kesimi, bıçak, ikiye böl, adımlı döndür, birleştir, eritip birleştir, doldur, ızgara ile doldur, köprü, böl, kaydır, orantılı düzenleme, azalma, çalışma alanı
from: 92a372dd
---

**Örgü** çalışma alanı, bir [örgüyü](topic:meshes) nokta nokta düzenler: köşe noktaları, kenarları ve yüzeyleri. İt/çek geometrisi **Model** çalışma alanında kalır.

## Açın

- Araç çubuğunun solundaki {{ui:Çalışma alanı}} listesinden {{ui:Örgü (mesh)}} seçin. Seçili örgü düzenleme için açılır; seçili bir grup ya da bileşen önce bir örgüye dönüştürülür (tek geri alma adımı).
- Ya da bir örgüye çift tıklayın ya da modelleyici tuşlarıyla seçip {{key:Tab}} tuşuna basın.
- Hiçbir şey seçili değilken panel eklenecek örgüleri sunar: düzlem, ızgara, küp, daire, silindir, koni, küre, ico küre ve simit. Yenisi görünümün baktığı yere gelir ve düzenleme için açılır.

{{ui:Modele dön}} (ya da liste; modelleyici tuşlarıyla {{key:Tab}}, it/çek tuşlarıyla hiçbir şey seçili değilken {{key:Esc}}) örgü seçili olarak Model'e döner. Örgü çalışma alanı açıkken modelin geri kalanı soluklaşır ve Model'in çizim araçları kaldırılır.

## Seç

| İşlem | Sonuç |
|---|---|
| {{key:1}} {{key:2}} {{key:3}} | Köşe noktalarını, kenarları ya da yüzeyleri seçer |
| Tıklayın | Birini seçer; {{key:Shift}}+tıklama ekler ya da kaldırır |
| Bir kutu sürükleyin | İçindeki ve görünen olanları seçer; {{key:Shift}} ekler, {{key:Ctrl}} kaldırır |
| {{key:Alt}}+kenara tıklayın ya da çift tıklayın | Kenar döngüsü (yüzey modunda bir yüzey döngüsü; açık bir kenarda tüm sınır) |
| {{key:Ctrl}}+{{key:Alt}}+kenara tıklayın | Kenar halkası |
| Üç kez tıklayın | Ona bağlı her şey |

{{ui:Seç}} grubunda ayrıca {{ui:Tümü}}, {{ui:Bağlı}}, {{ui:Döngü}}, {{ui:Halka}}, {{ui:Daha fazla}} ve {{ui:Daralt}} vardır.

## Taşı, döndür, ölçekle

{{ui:Taşı}}, {{ui:Döndür}} ve {{ui:Ölçekle}} imleçten başlar: taşıyın, sonra seçimi bırakmak için tıklayın ya da {{key:Enter}} tuşuna basın; iptal etmek için {{key:Esc}}. {{key:X}}, {{key:Y}} veya {{key:Z}} (ya da ok tuşları) bir ekseni kilitler. Tam bir değer için bir mesafe, bir açı ya da bir çarpan yazın — [hesaplamalar](topic:value-box#calculations) da çalışır.

**Orantılı düzenleme** ({{ui:Orantılı}}, ya da panel): seçime yakın köşe noktaları bir taşımayı izler; ayarladığınız erişim kadar, seçtiğiniz azalma ile, uzaklaştıkça daha az. {{ui:Yalnızca örgü boyunca}} seçeneğini açarsanız düz değil, kenarlar boyunca ölçülür.

{{ui:Kaydır}}, seçili bir kenar döngüsünü yanındaki kenarlar boyunca taşır.

## Şekli değiştirin

| Araç | Ne yapar |
|---|---|
| {{ui:Çıkar}} | Seçili yüzeyleri normalleri boyunca dışarı çeker; yeni yan yüzeyler ekler (ya da açık sınır kenarlarından yüzeyler yapar). Mesafeyi yazın |
| {{ui:İçe kaydır}} | Seçili yüzeylerin dış hattının içinde bir bant; her yüzey için tek tek yeniden {{key:I}} tuşuna basın |
| {{ui:Pah kır}} | Seçili kenarları (ya da {{key:Ctrl}}+{{key:Shift}}+{{key:B}} ile köşe noktalarını) bir genişlikte keser; tekerlek ya da artı ve eksi tuşları yuvarlak bir kenar için parça ekler |
| {{ui:Döngü kesimi}} | Bir kenara işaret edin: dörtgen yüzeylerin halkası boyunca yeni döngüler; tekerlek kaç tane olacağını ayarlar; kesmek için tıklayın |
| {{ui:Bıçak}} | Kenarlarda ya da köşelerde noktalara tıklayın; {{key:Enter}} aralarındaki yüzeylerin üzerinden, gördüğünüz gibi düz kesim yapar |
| {{ui:İkiye böl}} | Ekranda bir çizgi çizin: seçili yüzeyler (ya da hepsi) onun boyunca kesilir |
| {{ui:Adımlı döndür}} | Seçili yüzeyleri ya da açık kenarları mavi eksen etrafında adımlarla döndürür (tekerlek adımları belirler); tam bir tur kapatır |
| {{ui:Böl}} | Seçili kenarları ikiye keser; tam yüzeyler bir ızgara olur |
| {{ui:Birleştir}} | Seçili köşe noktaları, merkezlerinde tek bir noktaya dönüşür |
| {{ui:Eritip birleştir}} | Seçimi çıkarır ama yüzeyi korur: yüzeyler birleşir |
| {{ui:Doldur}} | Seçili açık bir sınırın (ya da iki açık kenarın arasının) üzerinde bir yüzey |
| {{ui:Izgara ile doldur}} | Çift sayıda kenarı olan açık bir sınırı dörtgen bir ızgarayla doldurur |
| {{ui:Köprü}} | İki seçili açık kenar döngüsünü yüzeylerle birleştirir |
| {{ui:Keskin çizgi}} | Örgü bir alt bölümlü yüzeyle yumuşatıldığında seçili kenarların ne kadar keskin kalacağı: merkezden uzaklaştırın, tekerleği (0,1 adımlarla) kullanın ya da 0 ile 1 arası bir değer yazın. Panel seçili kenarların keskinliğini gösterir ve yazılan değeri de kabul eder. Keskin kenarlar macenta renkte çizilir |
| {{ui:Çevir}}, {{ui:Yumuşat}}, {{ui:Sil}} | Yüzeyleri çevirir; köşe noktalarını komşularına doğru yumuşatır; seçim moduna göre siler |

Her biri tek bir geri alma adımıdır. Doku koordinatları, renkler ve ağırlıklar yeni yüzeylere ve köşe noktalarına geçer.

## Yeniden örgüle

{{ui:Yeniden örgüle}}, tüm örgüyü aynı boyda eşit üçgenlerle yeniden yapar; basarken istenir (küçük olan daha ince ve daha yavaştır). Delikleri kapatır, üst üste binen parçaları birleştirir ve heykel çalışmasının gerdirdiği bir örgüyü düzeltir. Keskin kenarlar çok az yuvarlanmış çıkar. UV'ler, boya ve keskin çizgiler yeniden başlar. Tek bir geri alma adımıdır.

## Yeniden topoloji

Ayrıntılı bir örgünün (bir heykel, bir tarama) üzerine daha temiz yeni bir örgü kurmak için panelde {{ui:Yeniden topoloji}} › **Üzerine kur** altından ayrıntılı olanı seçin, sonra:

- **Taşınan noktaları ona yakalayın:** taşıdığınız noktalar ve çıkardığınız kenarlar yüzeyine oturur.
- **Seçili noktaları ona yerleştirin:** seçili noktaları şimdi yüzeyine taşır (tek geri alma adımı).
- **Bu örgünün kenarlarını öne göster:** kurduğunuz örgüyü yüzeyin üzerinde çizer; böylece görebilirsiniz.

## Son işlemi ayarlayın

{{ui:İçe kaydır}}, {{ui:Pah kır}}, {{ui:Döngü kesimi}}, {{ui:Böl}}, {{ui:Yumuşat}}, {{ui:Izgara ile doldur}} ya da {{ui:Adımlı döndür}} sonrasında panel ayarlarını gösterir (genişlik, parça, profil, kesimler …). Birini değiştirin ve işlem başladığı yerden yeniden yapılır; yine tek bir geri alma adımı.

## Tuşlar

| | İt/çek tuşları | Modelleyici tuşları |
|---|---|---|
| Taşı, döndür, ölçekle | {{key:M}} {{key:Q}} {{key:S}} | {{key:G}} {{key:R}} {{key:S}} ({{key:G}} iki kez kaydırır) |
| Çıkar, içe kaydır | {{key:P}}, {{key:F}} | {{key:E}}, {{key:I}} |
| Sil | {{key:E}} ya da {{key:Delete}} | {{key:X}} ya da {{key:Delete}} |
| Keskin çizgi | {{key:Shift+C}} | {{key:Shift+E}} |
| Tümünü seç, seçimi kaldır, ters çevir | {{key:Ctrl+A}}, {{key:Esc}}, {{key:Ctrl+I}} | {{key:A}}, {{key:Alt+A}}, {{key:Ctrl+I}} |
| İkisi birden | {{key:Ctrl+B}} pah, {{key:Ctrl+R}} döngü kesimi, {{key:K}} bıçak | aynısı, ve ayrıca {{key:F}} doldur, {{key:M}} birleştir, {{key:Ctrl+X}} eritip birleştir, {{key:L}} / {{key:Ctrl+L}} bağlı, {{key:Alt+N}} çevir, {{key:O}} orantılı, {{key:Shift+V}} köşe noktası kaydırma |

Ayrıca bkz. [Örgüler](topic:meshes), [Bir örgüdeki değiştiriciler](topic:modifiers) ve [Henüz yapılmadı](topic:not-built-yet).
