---
title: Eğri nesneleri
summary: Bézier, NURBS ve düz parçalı eğriler çizin, onlara kalınlık, genişlik veya incelme verin, düz olanları doldurun, metni eğri olarak ayarlayın ve bunları örgülere çevirin.
keywords: eğri, eğriler, bezier, nurbs, spline, splineler, yol, tüp, boru, kablo, halat, pah, ekstrüzyon, incelme, eğim, yarıçap, dolgu, profil, metin, harfler, logo, eğriyi örgüye çevir
from: 602bf077
---

Bir **eğri nesnesi**, bir şekil oluşturan eğridir: boyunca uzanan bir tüp (pah), bir bant (ekstrüzyon), incelen bir boynuz (incelme) ya da — düz ve kapalıysa — dolu bir levha ya da harfler. Şekil eğriyi izler: bir noktayı taşıdığınızda tüp onunla birlikte hareket eder. Şekil doğru olduğunda onu bir örgüye çevirin.

## Bir eğri ekleyin

Çalışma alanı listesinden {{ui:Eğri}} seçin ve {{ui:Ekle}} tuşuna basın:

| Tür | Ne olduğu |
| --- | --- |
| Bézier eğrisi, Bézier dairesi | Noktalarından geçer; her noktanın, eğrinin yönünü belirleyen iki tutamacı vardır |
| NURBS eğrisi, NURBS dairesi, Yol | Düzgündür, noktalarına doğru çizilir (uç noktalarında başlar ve biter); her noktanın bir ağırlığı vardır |
| Metin | Metniniz düz, dolu harf çizgileri olarak |

Yeni bir eğri, görülebilmesi ve seçilebilmesi için ince bir tüp alır; çıplak bir eğri için pah derinliğini 0 yapın.

Çizilmiş bir şeyden de başlayabilirsiniz: Model çalışma alanında bir yay, daire, çokgen ya da çizilmiş bir eğri seçin ve Öğe bilgisi içinde {{ui:Eğri nesnesi yap}} tuşuna basın. Çizilmiş çizgiler kalır.

## Noktaları düzenleyin

Bir eğri nesnesine çift tıklayın (ya da seçip {{ui:Eğri}} seçin) düzenlemek için.

- Bir noktaya ya da tutamaca tıklayın ({{key:Shift}} ekler ya da çıkarır); taşımak için sürükleyin. Kutuyla seçmek için boş alanda sürükleyin.
- {{ui:Uzat}} ({{key:E}}, ya da {{key:Ctrl}}+tıklama) seçili uçtan sonra imlece bir nokta ekler.
- {{ui:Böl}} ({{key:W}}) seçili komşu her çift arasına bir nokta koyar; Bézier kendi şeklini korur.
- {{ui:Taşı}}, {{ui:Döndür}}, {{ui:Ölçekle}} seçili noktaları imleçle hareket ettirir (modeleyici tuşları {{key:G}} {{key:R}} {{key:S}}, push/pull tuşları {{key:M}} {{key:Q}} {{key:S}}); tutmak için tıklayın, iptal etmek için {{key:Esc}}.
- {{ui:Kapat}} ({{key:C}}) açık bir splaini kapatır ya da kapalı birini açar; {{ui:Ters çevir}} ({{key:Shift+R}}) onu tersine çalıştırır.
- Bézier tutamaçları: {{ui:Yumuşat}} ({{key:V}}) onları düzgün bir eğri için yerleştirir, {{ui:Köşe}} ({{key:Shift+V}}) komşulara yöneltir, {{ui:Serbest}} ({{key:Alt+V}}) onları koyduğunuz yerde bırakır. Bir tutamacı sürüklemek onu serbest yapar.
- {{ui:Bézier}}, {{ui:NURBS}} ve {{ui:Çokgen}} seçili splainlerin türünü değiştirir, noktaları korur.

Her değişiklik bir geri alma adımıdır.

## Şekil

Ayarlar panelde (ve Model çalışma alanında Öğe bilgisi içinde) bulunur:

- **Şekil:** 3B eğriler her yöne gider; düz bir eğri kendi düzleminde kalır ve doldurulabilir.
- **Kapalı splaineları doldur** (düz): dış çizgiler bir levha olur; başka bir dış çizginin içindeki çizgi bir delik olur, böylece harfler deliklerini korur.
- **Ekstrüzyon:** bandın genişliğinin yarısı (açık ya da 3B eğriler), ya da levhanın kalınlığının yarısı (dolu).
- **Pah derinliği** ve **yuvarlaklık:** eğri boyunca yuvarlak bir tüp (ekstrüzyonla: yuvarlatılmış bir bant); dolu bir şekilde yuvarlatılmış bir kenar.
- **Uçları kapat:** açık bir tüpte kapaklar.
- **Boyunca incelt:** her splain boyunca eşit ölçeklenir, örneğin boynuz için `1, 0.2`, iğ için `0, 1, 0`.
- **Düzgünlük** ve NURBS için **derece**: ne kadar ince çizildiği ve ne kadar düzgün olduğu (2 düz … 6 en düzgün).
- Noktalar seçiliyken: **yarıçap** (oradaki tüpün kalınlığı, pah ile çarpılmış), **eğim** (bandı eğrinin etrafında döndürür) ve NURBS için **ağırlık**.

Değiştiriciler bir eğri nesnesinin üzerinde bir örgüdeki gibi çalışır: eğri boyunca bir Dizi, bir Ayna, bir Subdivision yüzeyi. Bkz. [Örgüdeki değiştiriciler](topic:modifiers).

## Örgüye çevirin

{{ui:Örgüye}} (Eğri çalışma alanında ya da Öğe bilgisi içinde, {{ui:Eğriyi örgüye çevir}}) eğri nesnesini şu an gösterdiği örgüye dönüştürür; değiştiricileri üstte kalır. Sonra Örgü çalışma alanında düzenleyin. Geri al onu eski haline döndürür.

Ayrıca bkz. [Örgüler](topic:meshes) ve [Bir örgüyü düzenleyin](topic:mesh-edit).
