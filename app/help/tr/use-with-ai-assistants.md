---
title: ModelCraft'ı bir yapay zekâ asistanıyla kullanın
summary: Kendi yapay zekâ asistanınızın veya betiğinizin modele bakmasına ve basit katılar oluşturmasına izin verin: izinler, CadCraft Studio üzerinden bağlanma ve etkinlik günlüğü.
keywords: yapay zekâ, asistan, ajan, mcp, model context protocol, betik, otomasyon, modelleme, kutu, silindir, render, render kuyruğu, izinler, bağlantıyı kes, etkinlik
from: 629cd0b7
---

## Bu konuda neler öğreneceksiniz

Bir yapay zekâ asistanının (ya da kendiniz yazdığınız bir betiğin) ModelCraft ile nasıl çalışacağını ve neye dokunabileceğine nasıl karar vereceğinizi öğrenin.

ModelCraft'ın **kendi yapay zekâsı yoktur** ve hiçbir yere bir şey göndermez. Asistanı siz getirirsiniz: Model Context Protocol (MCP) dilini konuşan herhangi bir program. ModelCraft ona yalnızca araçlar verir; hangilerini vereceğinizi siz seçersiniz.

## Etkinleştirin

1. {{ui:Ayarlar}} öğesini açın (uygulama çubuğundaki dişli simgesi veya {{key:Mod+,}}) ve {{ui:ModelCraft}} sekmesine gidin.
2. {{ui:Asistanlar}} altında **Yapay zekâ asistanlarının ve betiklerin ModelCraft'ı kullanmasına izin ver** kutusunu işaretleyin. Siz işaretleyene kadar kapalıdır.
3. Neler yapabileceğini seçin: **Oku** başlangıçta işaretlidir; **Düzenle**, **Kaydet** veya **Dışa aktar** seçeneklerini yalnızca ihtiyacınız olduğunda işaretleyin.

İşaretlemediğiniz izinlerin dışındaki araçlar asistana sunulmaz; asistan yine de birini isterse ModelCraft bunu reddeder ve etkinlik günlüğüne yazar. Anahtarı kapatmak her bağlantıyı aynı anda sonlandırır; {{ui:ModelCraft ayarlarını sıfırla}} de anahtarı kapatır.

## Asistanınızı bağlayın

Asistanlar, bilgisayarınızdaki **CadCraft Studio** üzerinden bağlanır: Studio, yalnızca bu bilgisayarın erişebildiği küçük bir sunucu çalıştırır; sunucu her başladığında oluşturduğu bir belirteçle korunur. Studio'da {{ui:Bir asistan bağla}} seçeneğini seçin ve adresi ile belirteci asistanınıza kopyalayın (Studio, yapıştırmanız gereken tam ayarları gösterir). Belirteci asla paylaşmayın.

:::note
Bir tarayıcı sekmesi bir asistan için bağlantı açamaz: tarayıcı uygulamalarında, bilgisayarınızda CadCraft Studio'yu kullanana kadar anahtarın hiçbir etkisi yoktur.
:::

## Kontrol sizde

- **Her değişiklik tek bir geri alma adımıdır**; adı asistanın verdiği adla etiketlenir (örneğin "Asistan: box"). {{key:Mod+Z}} asistanın son değişikliğini bir bütün olarak geri alır.
- **Bir asistanın bağlı olduğunu bilirsiniz.** Uygulama çubuğundaki bir düğme, bağlı olduğu sürece asistanın adını gösterir; neler yapabileceğini görmek veya bağlantıyı **Bağlantıyı kes** ile kesmek için tıklayın.
- **Etkinlik.** {{ui:Ayarlar}} › {{ui:ModelCraft}} › {{ui:Asistanlar}} › {{ui:Etkinlik}} her çağrıyı listeler: ne zaman, hangi araç, tamamlandı mı yoksa reddedildi mi. {{ui:Günlüğü kaydet}} bir kopyasını saklar.

## Bir asistanın neler isteyebileceği

| Araç | İzin | Ne yapar |
|---|---|---|
| `app_info`, `model_describe` | Oku | Modelin birimini, boyutunu ve her grubu ile bileşeni, konumlarıyla birlikte; kapalı bir katı olup olmadığını ve hacmini |
| `view_screenshot` | Oku | 3B görünümün göründüğü haliyle bir resmi |
| `box_add`, `cylinder_add` | Düzenle | Sizin veya asistanın verdiği yerde ve boyutta ("3m", "10'" veya modelin biriminde bir sayı) yeni bir grup olarak kutu ya da silindir |
| `instance_move`, `instances_erase` | Düzenle | Grupları ve bileşenleri taşır veya siler |
| `faces_list`, `materials_list` | Oku | Bir grubun veya serbest geometrinin yüzleri (her birinin yönü, alanı ve merkezi); boyayabileceği malzemeler ve renkler |
| `push_pull` | Düzenle | {{ui:İt/çek}} komutunun yaptığı gibi bir yüzeyi iter veya çeker |
| `paint` | Düzenle | Yüzeyleri veya bir grubun tamamını bir renk ya da malzemeyle boyar |
| `group_make` | Düzenle | Serbest yüzeylerden ve gruplardan bir grup veya bileşen oluşturur |
| `scene_add`, `scene_show` | Düzenle | Görünümü bir sahne olarak kaydeder; kayıtlı bir sahneye gider |
| `mesh_add` | Düzenle | Başlamak için bir örgü nesnesi (küp, küre, silindir …); Örgü çalışma alanının eklediği gibi |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Oku / Düzenle | Bir örgünün değiştirici yığını: ayna, dizi, alt bölme, pah ve diğerleri; hiçbiri kalıcı olarak uygulanmaz |
| `usd_export` | Dışa aktar | Modeli OpenUSD olarak (.usda, .usdc veya .usdz), modeli USD olarak kaydettiğinizde yazılan biçimde ([USD](topic:usd)); Studio'da izin verdiğiniz bir klasöre, yoksa bir indirme olarak |
| `render_still` | Dışa aktar | Görünümün veya kayıtlı bir sahnenin render edilmiş resmi; {{ui:Render}} iletişim kutusundaki {{ui:Render}} düğmesinin ürettiği gibi, başka bir şey istemedikçe Render ayarlarınızla (bir sahne ön ayarı: dış mekân, iç mekân, kesit, gece veya otomatik; hızlı veya yüksek kalite, boyut, örnek sayısı, gökyüzü); asistanın bakabileceği bir PNG ya da Studio'da izin verdiğiniz bir klasörde bir PNG, EXR veya render dosyası ([Bir resim render edin](topic:render)) |
| `render_queue` | Dışa aktar | Render iletişim kutusunun {{ui:Render kuyruğu}} listesine yüksek kaliteli resimler ekler (görünüm veya kayıtlı sahneler) ve kuyruğu çalıştırır; biten resimler izin verdiğiniz bir klasöre gider ya da sizin için Render iletişim kutusunun {{ui:Render kuyruğu}} listesinde kalır. WebGPU gerektirir |
| `link_push` | Düzenle | Başka bir programdan bağlanmış bir modeli günceller (bkz. [Bir .3dm modelini canlı tutma](topic:live-3dm-link)) |
| `link_status` | Oku | Bağlı bir modelin hâlâ orada olup olmadığını ve en son ne zaman güncellendiğini söyler |
| `undo` | Düzenle | Kendi adımlarını geri alır |

Asistanın oluşturduğu katılar gruplar olarak gelir; bu yüzden çizdiklerinizle asla birleşmezler. Modeli kaydeden bir araç yoktur: kaydetme sizde kalır; dışa aktarma veya render etme için **Dışa aktar** işaretli olmalıdır. Render modelde hiçbir şeyi değiştirmez; kayıtlı bir sahneyi render etmek, {{ui:Sahneler}} gibi görünümü o sahneye taşır.

## Bir şey çalışmazsa

- **Asistan hiçbir ModelCraft aracı görmüyor:** anahtarın bu pencerede açık olduğunu ve pencerenin Studio'da açık olduğunu kontrol edin.
- **"needs the edit permission":** {{ui:Asistanlar}} altında **Düzenle** seçeneğini işaretleyin, sonra yeniden isteyin.
- **"401" veya "token" hataları:** belirteç değişti (Studio yeniden başlatıldı veya {{ui:Yeni belirteç}} kullanıldı). Yeni belirteci asistanın ayarlarına kopyalayın.

## Ayrıca bakın

- [Yapay zekâ asistanları için tarifler](common:assistants-recipes): her biri kullandığı araçlarla birlikte çalışılmış örnekler.
