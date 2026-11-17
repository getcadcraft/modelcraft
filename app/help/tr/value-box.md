---
title: Değer kutusuna tam boyutları yazın
summary: Uzunlukları, boyutları, noktaları, ofsetleri, açıları, kenar sayılarını ve kopyaları yazmanın tüm yolları; birimlerin ve çıplak sayıların nasıl okunduğu.
keywords: değer kutusu, ölçü kutusu, vcb, yazma, tam, ölçülendirme, uzunluk, birimler, fit, inç, metrik, milimetre, koordinatlar, ofset, dizi, kenar sayısı, açı, ondalık virgül
from: 0148dc3d
---

Değer kutusu durum çubuğunun altında yer alır ve etiketi araca göre değişir. Siz çalışırken anlık boyutu gösterir; istediğiniz anda tam bir boyut yazabilirsiniz.

## Nasıl yazılır

1. Eylemi bir tıklamayla başlatın (ilk köşe, yüz, taşınacak nokta).
2. Yazın. Değer kutusuna tıklamanız gerekmez: bir rakam veya `. , - ' " [ < * /` karakterlerinden biri yazdığınızı oraya gönderir.
3. {{key:Enter}} tuşuna basın.

Değer kutusunda {{key:Esc}} tuşuna basarak kutuyu temizleyin ve görünüme dönün. Dokunmatik ekranda, klavyeyi açmak için değer kutusuna dokunun.

ModelCraft yazdığınızı okuyamazsa durum çubuğunda "3m, 10'6" veya 4m,3m gibi bir uzunluk yazın." görünür. Araç bunu kullanamazsa "Bu işe yaramadı: …" görünür ve nedenini belirtir.

## Uzunluklar

| Yazım | Anlamı |
|---|---|
| `3m` `320cm` `3200mm` | Metre, santimetre, milimetre |
| `10'` `10ft` `10 feet` | Fit |
| `6"` `6in` `6 inches` | İnç |
| `10'6"` `10' 6"` `10'-6 1/2"` | Fit ve inç, kesirle |
| `6 1/2"` `6-1/2"` `3/4"` | Kesirli inç |
| `1.5ft` `.5m` | Birimli ondalık sayılar |
| `120` | Çıplak bir sayı, modelin biriminde |

**Çıplak bir sayı modelin birimini kullanır**, sağ alttaki seçicide gösterildiği gibi: fit ve inç modelinde inç (yani `120` 10 fit eder), milimetre modelinde milimetre ve bunun gibi. Bir birim yazmak, modelin birimi ne olursa olsun her zaman önceliklidir. Kıvrık tırnak ve prim işaretleri (’ ” ′ ″) da fit ve inç olarak okunur.

:::warning
Ondalık için her zaman **nokta** kullanın: `2.5m`. Virgül iki değeri ayırır; yani `2,5`, dil ayarlarınız ne olursa olsun 2 ve 5 (iki değer) demektir.
:::

## Hesaplamalar

Her uzunluk bir hesaplama olabilir: toplamak için `+`, çıkarmak için `-`, çarpmak için `*`, bölmek için `/` ve parantez kullanın. Hesap makinesine gerek yok.

| Yazım | Anlamı |
|---|---|
| `2.5/3` | 2.5'in üçte biri (modelin biriminde) |
| `12'6"+3/4"` | 12' 6 3/4" |
| `(24'-0")/3` | 8' |
| `2*450mm` | 900 mm |
| `4+7/16` | Fit ve inç modelinde 4 7/16" |
| `3m-25cm` | 2.75 m |

Çıplak bir sayı bir uzunluksa modelin biriminde kabul edilir (metre modelinde `2.5/3`, 0.833 m eder); bir uzunluğu çarpıp bölüyorsa sade bir çarpan olur (`2*450mm`). Açılar ve çarpanlar da hesaplama alabilir: `90/2` 45° eder. İki uzunluk çarpılırsa bir alan ortaya çıkar, uzunluk değil; bu yüzden `2m*3m` reddedilir.

ModelCraft hesaplayamazsa durum çubuğu neyin yanlış olduğunu ve nerede olduğunu söyler; örneğin "Sıfıra bölme (4. karakter)." Parantez de değer kutusunu başlatır, bu yüzden `(` ile başlayabilirsiniz.

Bunlar kendi anlamlarını korur: bir kopyadan sonra `/3`, `3x` ve `*3`; kenar sayısı için `24s`; ve bir kenar seçiliyken `/3` (bu [kenarı böler](topic:divide)).

## Araca göre

| Araç | Etiket | Yazım |
|---|---|---|
| {{ui:Çizgi}} | {{ui:Uzunluk}} | Bir uzunluk (imlecin yönünde) ya da aşağıdaki bir nokta veya ofset |
| {{ui:Dikdörtgen}} | {{ui:Ölçülendirmeler}} | İki uzunluk: `4m,3m`, `12',10'`. Noktalı virgül de işe yarar: `4m;3m` |
| {{ui:Daire}}, {{ui:Çokgen}} | {{ui:Kenar sayısı}}, sonra {{ui:Yarıçap}} | İlk tıklamadan önce kenar sayısı: `12s` veya `12` (3 ile 999 arası). Sonrasında yarıçap |
| {{ui:İt/çek}} | {{ui:Mesafe}} | Bir uzunluk. Negatif olan ters yöne gider |
| {{ui:Taşı}} | {{ui:Mesafe}} | Bir uzunluk (imlecin yönünde) ya da bir nokta veya ofset. Bir kopyadan sonra: `3x`, `*3`, `/3` |
| {{ui:Döndür}} | {{ui:Açı}} | Derece: `90`, `-45`, `22.5` |
| {{ui:Ölçekle}} | {{ui:Ölçekle}} | 0'dan büyük bir çarpan: `2`, `0.5`, `1.25` |
| {{ui:Şerit metre}} | {{ui:Ofset}} veya {{ui:Uzunluk}} | Bir uzunluk |
| {{ui:Böl}} | {{ui:Parçalar}} | Kaç eşit parça: `5`, `5s` veya `/5` (2 ile 1000 arası). Bkz. [Bir kenarı veya eğriyi eşit parçalara bölün](topic:divide) |
| {{ui:Ölçülendirme}} | {{ui:Ofset}}, sonra {{ui:Uzunluk}} | Ölçü çizgisinin nereye gideceği; yerleştirdikten hemen sonra yeni bir uzunluk modeli yeniden boyutlandırır |
| {{ui:Seç}} | {{ui:Değer}} | Bir ölçülendirme veya kenar seçiliyken yeni bir uzunluk modeli yeniden boyutlandırır. Bkz. [Ölçülendirme ve yeniden boyutlandırma](topic:dimensions) |

## Noktalar ve ofsetler

{{ui:Çizgi}} ve {{ui:Taşı}} için ilk tıklamadan sonra:

- `[x,y,z]` modelde o tam noktaya gider (bir grubun içini düzenlerken grubun kendi eksenlerinde). Örnek: `[0,0,3m]`, başlangıç noktasının 3 m tam üstü.
- `<dx,dy,dz>` ilk noktadan kırmızı, yeşil ve mavi boyunca bu kadar uzağa gider. Örnek: `<0,0,10'>` 10 fit tam yukarı.

Üç değerin her biri kendi birimine sahip olabilir: `<12',0,6">`.

## Taşımadan sonra kopyalar

{{ui:Taşı}} ile bir kopyalamadan hemen sonra:

| Yazım | Oluşturur |
|---|---|
| `3x` veya `*3` | Aynı aralıkla yan yana 3 kopya |
| `/3` | Orijinalden ilk kopyaya kadar eşit aralıklarla dağıtılmış 3 kopya |

En fazla 500 kopya. Bkz. [Taşıma, kopyalama ve dizi oluşturma](topic:move-copy#a-row-of-copies).

## Yazılan uzunluklar bir yön ister

Tek bir yazılan uzunluk, imlecin ilk tıklamadan itibaren gösterdiği yönde gider. Hiç taşımadan, tıklamanın hemen ardından yazarsanız henüz bir yön yoktur ve hiçbir şey olmaz. İmleci gitmek istediğiniz yöne biraz hareket ettirin, sonra yazın.

## Modelin birimi

Birimi sağ alttaki seçicide değiştirin: {{ui:ft ve in}}, in, ft, yd, mi, mil, µm, mm, cm, m veya km. Bunlar {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Birimler}} içinde açık oldukları sürece kullanılabilir (modelin kendi birimi her zaman oradadır). Herhangi bir birimin işaretiyle yazılan bir uzunluk o birimde okunur. Bkz. [Birimler, yazılan değerler ve birim listeleri](common:unit-lists). Birim yalnızca uzunlukların nasıl gösterildiğini ve çıplak sayıların nasıl okunduğunu değiştirir; model aynı boyutta kalır. Birim dosyaya kaydedilir.

Boyutlar şöyle gösterilir:

| Birim | Uzunluklar | Alanlar | Hacimler |
|---|---|---|---|
| ft ve in | `10' 6 1/2"` (1/16"a kadar) | ft² | ft³ |
| in | `126 1/2"` | in² | in³ |
| m | `3.2 m` | m² | m³ |
| cm | `320 cm` | cm² | cm³ |
| mm | `3200 mm` | 0.01 m² ve üzeri m², değilse mm² | 0.01 m³ ve üzeri m³, değilse mm³ |

Yeni bir model, tarayıcının dili bir ABD bölgesine ayarlıysa (ve Liberya ile Myanmar'da) fit ve inç ile başlar; diğer her yerde milimetre ile. {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Birimler}} içinde yıldızlanmış bir birim kullanılır; ModelCraft o birime sahipse. Ya da {{ui:Yeni}} sonrasında seçiciyi değiştirin.
