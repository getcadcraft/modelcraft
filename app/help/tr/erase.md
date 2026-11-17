---
title: Silin ve temizleyin
summary: Kenarları, grupları ve kılavuzları silgi ya da Delete tuşuyla silin, bölünmüş yüzeyleri birleştirin ve ters yöne bakan yüzeyleri düzeltin.
keywords: sil, silgi, delete, kaldır, birleştir, yüzeyleri onar, temizle, başıboş çizgiler, yüzeyi ters çevir, arka yüzey, geri al
from: 80b92a81
---

## Silgi ile silin

1. {{ui:Silgi}} için {{key:E}} tuşuna basın.
2. Bir kenara, bir gruba, bir bileşene ya da bir kılavuza tıklayın. Silinir.
3. Birkaç tanesini silmek için üzerlerinden basılı tutup sürükleyin. Geçtiğiniz her şey vurgulanır ve bıraktığınızda hepsi silinir.

Silgi yüzey seçmez: bir yüzey, ihtiyaç duyduğu kenarlar silindiğinde gider. Yüzeyler, silginin kenarları bulmak için baktığı şeydir.

## Yüzeylere ne olur

- **Aynı düzlemdeki iki yüzey arasındaki bir kenar** (örneğin bir döşemenin üzerine çizdiğiniz bir çizgi) kaybolur ve iki yüzey birleşerek tek bir yüzey olur.
- **Bir yüzeyin kapalı kalması için gereken bir kenar** (bir kutunun kenarı) o yüzeyi de beraberinde götürür. Bir kutunun üst kenarlarından birini silerseniz, üst ve bir yan yüzey gider ve açık bir kutu kalır.
- **Serbest uçlar** (artık hiçbir kenarın kullanmadığı noktalar) temizlenir.

Bir bileşenin son kopyasını silmek, bileşeni {{ui:Bileşenler}} panelinden de kaldırır.

## Delete tuşuyla silin

1. {{ui:Seç}} aracıyla kaldırmak istediklerinizi seçin.
2. {{key:Delete}} ya da {{key:Backspace}} tuşuna basın.

Bu, yüzeyleri de kaldırır. Bu yolla silinen bir yüzey kenarlarını geride bırakır; böylece bir kutunun üstünü silip anahattını koruyabilir, sonra orada başka bir şey çizebilirsiniz.

## Düz bir yüzeydeki başıboş çizgileri temizleyin

Bir duvar ya da döşemede istemediğiniz çizgiler görünüyorsa (çizim sırasında kalmış olanlar), bunları {{ui:Silgi}} ile silin. Yüzeyin içinde yatan çizgiler birleşerek kaybolur; yüzey kalır.

## Ters yöne bakan bir yüzey

Arkadan görülen bir yüzey mavi-gri görünür. Bir yüzey modelinizin dış tarafında mavi-gri görünüyorsa:

1. Yüzeyi seçin.
2. {{ui:Öğe bilgisi}} içinde {{ui:Yüzeyi ters çevir}} düğmesine tıklayın.

Yüzey yönü dışa aktarırken en çok önem taşır: render programları, oyun motorları ve 3B yazıcılar içe bakan yüzeyleri gizleyebilir ya da yanlış okuyabilir.

## Bir hatayı geri alın

{{key:Mod+Z}} her seferinde bir adım geri alır, {{key:Mod+Y}} (ya da {{key:Mod+Shift+Z}}) yineler. Silgi ile yapılan bir sürükleme, kaç şey etkilemiş olursa olsun tek bir adımdır. Durum çubuğu neyin geri alındığını adıyla gösterir: "Silme geri alındı."
