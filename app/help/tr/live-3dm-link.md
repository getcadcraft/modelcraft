---
title: Bir .3dm modelini canlı tutun
summary: Modeli onu oluşturan programda değiştirin ve burada değişikliğini görün; Rhino 8 ya da bir Grasshopper tanımından, yeniden kaydedip içe aktarmadan.
keywords: rhino, grasshopper, canlı bağlantı, canlı link, 3dm, nurbs, parametrik, bağlantı, eşitleme, betik, referans modeli, it
from: 331b0a7e
---

Modellemeye nerede modelliyorsanız orada devam edin; sonucu burada kullanın: render etmek, aydınlatmak ya da onun etrafına bir sahne kurmak için. Diğer programdaki her değişiklik ModelCraft içindeki bir grubu günceller.

:::note
Bağlantı aynı bilgisayarda bir **CadCraft Studio** gerektirir. Bir tarayıcı sekmesi bağlantıyı kuramaz. Hiçbir şey internet üzerinden gitmez: betik, Studio ile bu bilgisayarın kendi adresi üzerinden, bir belirteçle konuşur.
:::

:::warning
Bu bağlantı, betiğin dosya yazıcısı ve diğer programın yerine geçen bir araçla test edildi; henüz Rhino ya da Grasshopper'ın kendi içinde test edilmedi. Orada bir şey başarısız olursa ne dediğini bize bildirin.
:::

## Kurulum

1. Studio'da ModelCraft'ı açın. {{ui:Ayarlar}} › {{ui:ModelCraft}} › {{ui:Asistanlar}} bölümünde **Yapay zekâ asistanlarının ve betiklerin ModelCraft'ı kullanmasına izin ver** kutusunu işaretleyin, sonra **{{ui:Düzenle}}**'ye tıklayın.
2. Studio'da {{ui:Bir asistan bağlayın}} seçeneğini seçin. Aşağıda yapıştıracağınız adresi ve belirteci gösterir.
3. Betiği indirin: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Rhino'dan

1. `cadcraft_link.py` dosyasını Rhino'nun betik düzenleyicisinde çalıştırın (Rhino 8'de Python 3).
2. İlk seferde adresi ve belirteci yapıştırın. Bunlar ana klasörünüzdeki `.cadcraft-link.json` dosyasında tutulur, modelin içinde asla tutulmaz. Studio her başladığında yeni bir belirteç üretir; bu yüzden betik o zaman yeniden sorar.

Tüm model, belgenin adını taşıyan tek bir grup olarak gelir; örneğin "chair (linked)". Bundan sonra her değişiklik, bir an durduğunuzda gelir ve yalnızca değişen nesneler gönderilir. Durdurmak için betiği yeniden çalıştırın.

## Grasshopper'dan

Önce bir kez Rhino'da betiği çalıştırın ki adres ve belirteç kaydedilsin.

1. Bir Script bileşeni (Python 3) ekleyin ve `cadcraft_link.py` dosyasının tamamını içine yapıştırın.
2. Bu girdileri verin: `G` (geometri, liste erişimiyle), `N` (bir ad, isteğe bağlı), `On` (bir doğru/yanlış anahtarı) ve `Target` (isteğe bağlı: `model` ya da `part`, iki uygulama da açıksa).
3. `On` değerini true yapın.

Her çözümlemede `G` gönderilir ve bileşenin bir önceki seferde gönderdiğinin yerini alır; böylece burada bir kaydırıcıyı sürüklemek grubu günceller. Çıktısı `a` ne olduğunu söyler. Her bileşenin kendi grubu vardır.

## Grupla yapabilecekleriniz

- **Taşıyın, etiketleyin, etrafına kurun.** Grubun yeri ve etiketi her güncellemede kalır; yanındaki her şey de öyle.
- **İçinde düzenleme yapmayın.** Her güncelleme içindekilerin yerini alır. Bu nesneler diğer programa aittir.
- **Geri alma.** Birbirine iki saniyeden yakın güncellemeler tek bir geri alma adımını paylaşır; böylece {{key:Mod+Z}} bütün bir sürüklemeyi geri alır. Sonraki güncelleme modeli yeniden eşleştirir.
- **Kaydetme.** Kaydedilen dosya bağlantıyı korur. Dosyayı yeniden açtıktan sonra betiği yeniden çalıştırın; aynı grup güncellenir.

## Neler gelir

Ekranda gördüğünüz ağ olarak örgüler, çokyüzeyler, yüzeyler ve ekstrüzyonlar; SubD kendi ağı olarak; eğriler kenar olarak; bloklar (bileşen olarak değil) bulundukları yerde ayrı nesneler olarak; katmanlar etiket olarak, renkler ve birimlerle birlikte gelir. Bunların burada nasıl göründüğü için [.3dm modelini içe aktarma](topic:import-3dm-files) bölümüne bakın.

Diğer programda sayılarıyla birlikte dışarıda bırakılanlar: noktalar, metin, ölçülendirmeler, ışıklar ve benzerleri.

**Tek yönlü.** Buradaki değişiklikler diğer programa geri gitmez.

## Bir şey ters giderse

- **"Hiçbir ModelCraft ya da PartCraft penceresi buna izin vermiyor":** kurulumun 1. adımını yapın.
- **"Studio belirteci reddetti":** Studio yeniden başlatılmış. Yeni belirteci kopyalayın ve betiği yeniden çalıştırın. Grasshopper için önce Rhino'da çalıştırın.
- **"CadCraft Studio'ya ulaşılamıyor":** Studio çalışmıyor ya da adres değişmiş.
