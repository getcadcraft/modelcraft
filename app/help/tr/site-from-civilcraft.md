---
title: CivilCraft'tan bir arsa alın
summary: CivilCraft'ın oluşturduğu adresten-arsaya dosyasını açın ve çevredeki binaları ve parseli, yalnızca işaretlediklerinizi, kütle ve arsa çizgisi olarak ekleyin.
keywords: arsa, civilcraft, adres, parsel, komşu binalar, kütleler, bağlam, ccsite, açık veri, openstreetmap
from: f28e4a3b
---

CivilCraft bir adresi arayabilir ve açık veri kaynaklarının bildiklerini çevresine kaydedebilir: komşu binalar, parsel ve sel, imar ve zemin çizgileri. ModelCraft bu dosyayı öneri olarak alır. Siz söyleyene kadar hiçbir şey eklenmez.

## Dosyayı getirin

1. CivilCraft'ta arsayı ModelCraft'a gönderin ya da dosyayı kaydedin (`.ccsite.json` ile biter).
2. ModelCraft'ta dosyayı açın ya da bırakın. Her bina ve parsel için bir onay kutusu olan bir liste açılır.
3. Kaynağın yükseklik vermediği binalar için bir yükseklik yazın. Yanındaki satır her yüksekliğin nereden geldiğini söyler: 3 m'lik katlarının sayısı ya da yazdığınız yükseklik.
4. {{ui:İşaretlileri ekle}} düğmesine basın.

İşaretlenen binalar tek bir bileşende ekstrüde kütleler olur ve parsel, arsanın çevresinde bir çizgi olur. Hepsi tek bir geri alma adımıdır. Adres noktası orijinde durur; her şey onun metre cinsinden doğusunda ve kuzeyinde konumlanır.

Sel, imar ve zemin çizgileri yalnızca bilgi için listelenir; çizilmezler.

Veri açık kaynaklardan gelir ve atfı listenin altında yer alır. Verilmeyen yükseklikler varsayımdır, bu yüzden bunlara dayanmadan önce kontrol edin.
