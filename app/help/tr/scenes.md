---
title: Görünümleri sahne olarak kaydetme
summary: Bir kamerayı ve stili sahne olarak kaydedin, sahneyi güncelleyin ve yeniden adlandırın; bir tasarımı sunmak için sahneler arasında ilerleyin ya da oynatın.
keywords: sahne, görünüm, kayıtlı görünüm, kamera, sunum, animasyon, oynat, slayt gösterisi, page up, page down, sekmeler, gezinti
from: 38680d6e
---

Bir **sahne** bir kamera konumunu, bir stili ve neyin gizli olduğunu hatırlar: nereden baktığınız, perspektif mi paralel mi, yüzey stili, kenarlar, güneş ayarları, gizli gruplar, kapalı etiketler ve kesit kesimi. Sahneler `.modelcraft` dosyasında kaydedilir.

## Sahne ekleme

1. Görünümü kurun: döndürün, yakınlaştırın, bir stil seçin, güneşi ayarlayın.
2. Sağdaki {{ui:Sahneler}} panelinde {{ui:Sahne ekle}} düğmesine tıklayın.

   Sahne listede "Sahne 1", "Sahne 2" ve benzeri adlarla belirir ve 3B görünümün üst kısmında bir sekme olarak da görünür. Durum çubuğu "Sahne 1 kaydedildi: bu kamera, stil ve gizlenenler." yazar.

## Bir sahneye gitme

- 3B görünümün üstündeki sekmesine ya da {{ui:Sahneler}} listesindeki adına tıklayın.
- Ya da sonraki sahne için {{key:PageDown}}, önceki için {{key:PageUp}} tuşuna basın. Listenin altındaki {{ui:Sonraki}} ve {{ui:Önceki}} aynısını yapar.

Kamera sahneye biraz yarım saniyeden uzun sürede kayarak gider. Bilgisayarınız hareketi azaltacak şekilde ayarlıysa, oraya atlar.

## Sahneyi değiştirme, yeniden adlandırma ya da silme

Listedeki her sahnenin adından sonra üç küçük düğme vardır:

- **Güncelle** (dairesel oklar): mevcut kamerayı, stili ve gizlenenleri o sahneye kaydeder. "Sahne 2 güncellendi."
- **Yeniden adlandır** (kalem): "Sahneyi yeniden adlandır" iletişim kutusunu açar. Yeni adı yazın ve {{ui:Kaydet}} düğmesine tıklayın.
- **Sil** (çöp kutusu): sahneyi kaldırır. "Sahne 2 silindi. Ctrl+Z onu geri getirir."

Sahne ekleme, güncelleme, yeniden adlandırma ve silme, modelde yaptığınız değişiklikler gibi geri alma adımlarıdır.

## Bir sahnenin kamerasını kilitleme

Tasarım değiştikçe aynı görünümü tekrar tekrar render ediyorsanız, görünümün yanlışlıkla hiç kaymaması için o sahnenin kamerasını kilitleyin.

1. {{ui:Sahneler}} listesinde, sahnenin adından sonraki **kilit** düğmesine (açık asma kilit) tıklayın. Kilit kapanır ve sahnenin 3B görünümün üstündeki sekmesinde küçük bir asma kilit belirir. Durum çubuğu "Sahne 2: kamera kilitlendi." yazar.
2. Render etmek istediğiniz zaman sahneye gidin: kamera tam kaydedilmiş görünüme döner, böylece oradan yapılan resimler önceki resimlerle hizalanır.

Kamera kilitliyken **Güncelle** yine stili ve gizlenenleri sahneye kaydeder, ama kamera nerede durduysa orada kalır; siz görünümü döndürmüş olsanız bile. Kilidi açmak için asma kilide yeniden tıklayın; Güncelle bundan sonra mevcut görünümü yeniden kaydeder. Kilitleme ve kilit açma geri alma adımlarıdır ve kilit `.modelcraft` dosyasında kaydedilir.

## Sunum

1. İki ya da daha fazla sahne ekleyin.
2. Listenin altındaki {{ui:Oynat}} düğmesine tıklayın. ModelCraft her birkaç saniyede bir sonraki sahneye geçer ve sondan sonra ilkine döner.
3. Durdurmak için {{ui:Durdur}} düğmesine (aynı düğme) tıklayın ya da {{key:Esc}} tuşuna basın.

Bir güneş çalışması için, yalnızca {{ui:Saat}} değiştirilmiş saatte bir sahne ekleyin, sonra onları oynatın. Bkz. [Stiller ve güneş gölgeleri](topic:styles-shadows#a-sun-study).

Sunumu çubuklar olmadan yapmak için {{key:Ctrl+Shift+F}} tuşuna iki kez basın: önce tam ekran, sonra çubukları gizlenmiş tam ekran. Sahne sekmeleri görünümün üstünde kalır.

## Bir sahnenin gösterdikleri

Bir sahne, kaydettiğinizde neyin gizli olduğunu hatırlar: [gizlediğiniz](topic:hide-isolate) gruplar ve bileşenler, kapattığınız [etiketler](topic:tags) ve hangi [kesit düzleminin](topic:sections) kestiği. Sahneye gitmek bunları yeniden gizler ya da gösterir. Böylece bir sahne tüm evi gösterebilir, bir sonrakinde çatının etiketi kapalı ev olabilir, bir sonrakinde ise ondan geçen bir kesit.

Gizlenmiş serbest yüzeyler ve kenarlar sahnelerin parçası değildir. Bir sahneye gitmek geri alma adımı oluşturmaz. ModelCraft'ın önceki bir sürümüyle kaydedilmiş sahneler, gizlenenleri olduğu gibi bırakır; onlara kaydetmek için Güncelle'ye tıklayın.

## Animasyon dışa aktarma

{{ui:Animasyonu dışa aktar}}, listenin altında, sahneleri birinciden sonuncuya kadar oynatır, kamerayı aralarında yumuşakça hareket ettirir ve filmi bir **WebM** videosu olarak kaydeder (sahne başına iki saniyelik hareket ve kısa bir duraklama). Görünümü ekranda gördüğünüz gibi, ekrandaki boyutunda, [sunum görünümünde](topic:styles-shadows#presentation-view) kaydeder (eksen, kılavuz ya da seçim yok). Kaydetmeden durdurmak için {{key:Esc}} tuşuna basın ya da düğmeye yeniden tıklayın. WebM tarayıcılarda ve VLC'de oynar; video düzenleyicileri onu dönüştürebilir.

Seçtiğiniz boyutta, render edilmiş bir gezinti (gökyüzü, güneş, gölgeler, malzemeler) için bunun yerine {{ui:Video render et…}} kullanın: animasyon anahtarı yoksa sahneleri sırayla, kameranın yolu olarak alır. Bkz. [Kamerayı ve nesneleri canlandırma](topic:animation).

## Bilmeniz gerekenler

- Bir sahneye gittikten sonra stili değiştirmek ya da kamerayı hareket ettirmek, Güncelle'ye tıklayana kadar sahneyi değiştirmez.
- Sahneler Collada, OBJ, glTF, STL ya da IFC olarak dışa aktarılmaz.
