---
title: Taşı, kopyala ve dizi oluştur
summary: Nesneleri tıklayarak ya da tam bir mesafeyle taşıyın, değiştirici tuşla kopyalayın ve eşit aralıklı bir kopya sırası oluşturun.
keywords: taşı, kopyala, çoğalt, dizi, sıra, aralık, böl, ofset, gerdir, sütunlar, tekrarla, çoklu kopya
from: 280245fc
---

{{ui:Taşı}} ({{key:M}}) seçili olanı bir noktadan başka bir noktaya taşır. Bir değiştirici tuşu basılı tutmak onu kopyaya dönüştürür; kopyalamadan sonra kaç tane daha istediğinizi yazabilirsiniz.

## Bir şeyi taşıyın

1. Taşımak istediğinizi seçin (bkz. [Şeyleri seçin](topic:select)). Hiçbir şey seçili değilse, Taşı tıkladığınız şeyi alır.
2. {{key:M}} tuşuna basın.
3. Taşımaya başlanacak bir nokta tıklayın. Bir köşe gibi anlamlı bir şey seçin: bu nokta, bir sonraki tıklayacağınız yere tam olarak gelecektir.
4. İşaretçiyi hareket ettirin. Seçim onu izler. Noktalara, kenarlara ve kırmızı, yeşil ve mavi yönlere, bir çizgi gibi yakalanır.
5. Noktanın gideceği yeri tıklayın ya da bir mesafe yazıp {{key:Enter}} tuşuna basın.

   Durum çubuğundaki ipucu, bir sonraki taşıma için "Taşımaya başlamak için bir nokta tıklayın…" metnine döner.

Yazdığınız mesafe, işaret ettiğiniz yönde uygulanır. Ayrıca tam bir ofset de yazabilirsiniz, `<2m,0,0>` (kırmızı yönde 2 m), ya da seçtiğiniz nokta için tam bir hedef, `[0,0,0]` (başlangıç noktası). Bkz. [Tam boyutları yazın](topic:value-box).

Bir şekli yalnızca bir eksende taşımak için ilk tıklamadan sonra bir ok tuşuna basın: {{key:Right}} kırmızıya, {{key:Left}} yeşile, {{key:Up}} maviye kilitler. Kilidi kaldırmak için aynı oka tekrar basın.

## Bir şeklin parçasını taşımak onu gerdirir

Gruplanmamış geometri bağlantılıdır. Bir yüzeyi ya da birkaç kenarı seçip taşırsanız, bunlara bağlı yüzeyler onları izleyecek şekilde gerilir. Bir kutunun üst yüzünü yana taşıyın, kutu eğilir; çatının bir kenarını taşıyın, çatının eğimi değişir. Artık düz kalamayan yüzeyler üçgenlere ayrılır.

Bütün bir nesneyi gerdirmeden taşımak için önce tamamını seçin (üç kez tıklayın) ya da daha iyisi, onu bir grup ya da bileşen yapın (bkz. [Gruplar ve bileşenler](topic:groups-components)).

## Bir şeyi kopyalayın

1. Kopyalamak istediğiniz şeyi seçin.
2. {{key:M}} tuşuna basın.
3. {{key:Ctrl}} (ya da {{key:Alt}}) tuşunu basılı tutun ve taşımaya başlanacak noktayı tıklayın. Mac'te {{key:Mod}} ya da {{key:Alt}} aynı işi yapar. İpucu "Ctrl taşımanın yerine geçer" yazar; bu, kopyaladığınız anlamına gelir.

   İlk tıklamadan sonra {{key:Ctrl}} ya da {{key:Alt}} tuşuna basıp bırakarak da taşıma ile kopyalama arasında geçiş yapabilirsiniz.

4. Kopyanın gideceği yeri tıklayın ya da bir mesafe yazıp {{key:Enter}} tuşuna basın.

   Orijinal olduğu yerde kalır ve kopya seçili olur.

## Kopyala, kes, yapıştır ve çoğalt

- {{key:Mod+C}} seçimi kopyalar, {{key:Mod+X}} keser (kopyalar, sonra siler). {{ui:Kopyala}} ve {{ui:Yapıştır}} ayrıca araç çubuğunun {{ui:Düzenle}} grubundaki düğmelerdir; yanlarındaki {{ui:Daha fazla}} kes, olduğu yere yapıştır ve çoğalt komutlarını içerir.
- {{key:Mod+V}} yapıştırır: kopyanın bir taslağı işaretçiyi izler, her araç gibi yakalanır ve bir tıklama onu en alt köşesi orada olacak şekilde yerleştirir. {{key:Esc}} iptal eder.
- {{key:Mod+Shift+V}} tam olarak kopyanın geldiği yere, olduğu yere yapıştırır; açtığınız bir gruba bir şey taşımak için kullanışlıdır.
- {{key:Mod+D}} ({{key:Shift+D}}, Modeler stilinde) çoğaltır: bir kopya oluşturulur ve hemen işaretçiyle birlikte hareket eder. Yerleştirmek için tıklayın, mesafe yazın ya da bırakmak için {{key:Esc}} tuşuna basın. Hemen ardından, art arda daha fazla kopya için `3x` yazın.

Yapıştırılan bir grup yeni bir grup olur. Yapıştırılan bir bileşen aynı bileşenin başka bir yerleşimidir; bunu düzenlemek hepsini değiştirir. Kopyalar, bu tarayıcıdaki başka bir ModelCraft sekmesine de yapıştırılabilir (orada yeni tanımlar olarak gelirler).

## Kopyalardan bir sıra

Bir kopyalamadan hemen sonra, {{ui:Taşı}} hâlâ aktif araçken:

- `3x` (ya da `*3`) yazın ve {{key:Enter}} tuşuna basın: ilk kopyayla aynı aralıkta art arda üç kopya. Orijinalin yanında üç yeni kopya elde edersiniz.
- Bunun yerine bölmek için `/3` yazın ve {{key:Enter}} tuşuna basın. Orijinalden ilk kopyayı koyduğunuz yere kadar eşit aralıklı üç kopya, sonuncusu o noktada olur. Bir açıklığı doldurmak için bunu kullanın: bir kopyayı uzak uca yerleştirin, sonra bölün.

Hemen ardından farklı bir sayı yazabilirsiniz: `5x`, `3x` sırasının yerine geçer. İpucu hatırlatır: "Kopyalandı. Art arda daha fazla kopya için 3x, ya da mesafeyi bölmek için /3 yazın."

### Örnek: her 6 metrede sütunlar

1. Bir sütun yapın ve onu bileşen yapın ({{key:G}}); böylece tüm kopyalar sonra birlikte değişir.
2. {{key:M}} tuşuna basın, {{key:Ctrl}} tuşunu basılı tutun ve sütunun taban köşesini tıklayın.
3. Kırmızı eksende ilerleyin ve `6m` yazın, sonra {{key:Enter}}.
4. `4x` yazın ve {{key:Enter}}. 6 m aralıklı beş sütununuz olur.

## Bilmeniz gerekenler

- İkinci tıklamadan önce iptal etmek için {{key:Esc}} tuşuna basın; her şey eski yerine döner.
- Taşı, düzenlediğiniz grubun içinde çalışır. Bütün bir grubu taşımak için önce onu kapatın ve dışarıdan seçin.
- {{ui:Çarpışma}} açıkken (sağ altta ve [ModelCraft ayarları](topic:settings#solids-stop-where-they-touch) içinde), seçim başka bir katıya dokunduğunda taşıma durur, içinden geçmez. İçinden geçmesi gereken bir taşıma için {{ui:Çarpışma}} düğmesini tıklayarak kapatın.
- Bir kopyayı başka bir grubun içine koymak için: kopyalayın, diğer grubu açın ve yapıştırın ({{key:Mod+Shift+V}} aynı yerde tutar).
