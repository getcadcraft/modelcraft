---
title: Mesh-in UV-lərini tərtib edin
summary: Mesh-in tekstur koordinatlarını UV iş sahəsində tikişləri işarələyərək, açaraq, proyeksiya edərək və yığaraq hazırlayın, onları şaşka və uzanma rənglərilə yoxlayın.
keywords: uv, uv-lər, açmaq, tikiş, tikişlər, tekstur, tekstur koordinatları, atlas, yığmaq, yığma, ada, adalar, şaşka, uzanma, təhrifləşmə, qutu proyeksiyası, silindr proyeksiyası, kürə proyeksiyası, konform, bucaq əsaslı, lscm, abf
from: 00028f20
---

Tekstur düz bir şəkildir; mesh isə düz deyil. Onun **UV**-ləri mesh-in hər üzünün hər küncünün şəkildə harada yerləşdiyini göstərir. UV iş sahəsi onları yaradır: mesh-i **tikişlər** boyunca açır, parçaları düz yerə yayır (**açın**) və kvadrata sığdırırsınız (**yığın**).

## Açmaq

Mesh seçin və {{ui:İş sahəsi}} siyahısından {{ui:UV}} seçin. Qrup və ya komponent əvvəlcə Mesh iş sahəsindəki kimi mesh-ə çevrilir. 3D görünüş sola keçir, sağdakı **UV redaktoru** isə mesh-in üzlərini tekstur kvadratında göstərir. Seçmə Mesh iş sahəsindəki kimi işləyir və bir görünüşdə seçdiklərinizlə digərində seçilənlər eynidir.

## Tikişləri işarələyin

Tikişlər mesh-in açıla biləcəyi yerlərdir; hər iki görünüşdə qırmızı göstərilir.

- Kənarları seçin ({{ui:Kənar}}, və ya {{key:2}}) və {{ui:Tikiş işarələ}} ({{key:Ctrl+E}}) basın. {{ui:Tikişi təmizlə}} ({{key:Ctrl+Shift+E}}) onları götürür.
- {{ui:Kəskin yerdə tikişlər}} hər kəskin kənarı və üzlərin 60°-dən çox bucaqla görüşdüyü hər kənarı işarələyir: qutu altı tərəfinə bölünür.
- {{ui:UV-lərdən tikişlər}} UV-lərin artıq qırıldığı yerlərdə tikişləri işarələyir, məsələn proyeksiyadan sonra.

Qapalı parça düz yatmaq üçün tikişə ehtiyac duyur: top ən azı bir kəsik, boru isə uzunluğu boyunca bir kəsik tələb edir.

## Açın

Yerləşdirmək istədiyiniz üzləri seçin (və ya bütün mesh üçün heç nə seçməyin) və {{ui:Açın}} ({{key:U}}) basın. Tikişlər arasındakı hər parça bucaqlarını mümkün qədər doğru saxlayaraq düz açılır (bucaq əsaslı düzləşdirmə), sonra parçalar kvadrata yığılır. {{ui:Konform}} əvəzinə ən kiçik kvadratlar üsulu ilə konform xəritələrlə açır: daha sürətlidir, lakin güclü əyilmiş parçalarda bir az az dəqiqdir. Düz vərəqdən hazırlana bilən forma, məsələn bir dəfə kəsilmiş silindrin yan səthi, heç bir uzanma olmadan açılır.

## Proyeksiya

Sadə formalar üçün proyeksiya çox vaxt kifayətdir:

| Proyeksiya | Nə edir |
| --- | --- |
| {{ui:Qutu}} | Hər üz ona ən çox baxdığı qutu tərəfinə |
| {{ui:Silindr}} | Mavi ox ətrafında: en bucaq ətrafında, hündürlük yuxarıdır |
| {{ui:Kürə}} | Mərkəzdən: en bucaq ətrafında, hündürlük enlik üzrədir |
| {{ui:Görünüşdən}} | Üzlər indi 3D görünüşdə necə görünürsə |

Silindrin və ya kürənin birləşmə yerindəki üz bir parça saxlanılır, ona görə UV-ləri kvadratın sağ kənarından bir az kənara çıxa bilər; tekstur orada təkrarlanır.

## Yerləşdirin

- {{ui:Yığ}} parçaları (adaları) kvadrata bir texel ölçüsündə sığdırır, hər biri ən az yer tutacaq şəkildə döndərilir. Panel onlar arasında qalan boşluğu təyin edir.
- {{ui:90° döndər}} və {{ui:Güzgü}} seçilmiş üzlərin UV-lərini döndərir və ya güzgüləyir.
- UV redaktorunda seçilmiş üzü sürükləyərək seçimin UV-lərini köçürün, və ya redaktorun üzərinə gəlib {{key:R}} və ya {{key:S}} basın, sonra hərəkət edin ki, onları döndərin və ya miqyaslandırın (klik saxlayır, {{key:Esc}} ləğv edir). {{key:G}} sürükləmədən köçürür. Üzə iki dəfə klikləyin (və ya {{key:L}}) onun bütün adasını seçmək üçün. Təkər yaxınlaşdırır; orta və ya sağ düymə ilə sürükləməklə sürüşdürün; {{key:F}} kvadratı yenidən sığdırır.

Hər dəyişiklik bir geri qaytarma addımıdır.

## Yoxlayın

- {{ui:Şaşka}} mesh üzərində UV-lərdə etiketli şaşka göstərir: bərabər, kvadrat xanalar teksturun bərabər yatdığını bildirir; etiketlər istiqaməti göstərir.
- {{ui:Uzanma}} hər üzü UV-lərinin onu nə qədər uzatdığına görə rənglədir: mavi heç, yaşıldan qırmızıya qədər çox. Panel bunun **bucaqların əyilməsi** və ya **ölçünün dəyişməsi** ölçüb-ölçmədiyini seçir və orta dəyəri göstərir.

Həmçinin bax: [Mesh-i redaktə edin](topic:mesh-edit), [Meshlər](topic:meshes) və [Mesh-də modifikatorlar](topic:modifiers).
