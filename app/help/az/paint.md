---
title: Rənglər və materiallarla boyamaq
summary: Üzlərə, qruplara və komponentlərə bərk rəng və ya kərpic, fasad örtüyü, şifer və ya ağac kimi material verin, və ixrac edəndə onlar saxlanılsın.
keywords: boya, rəng, material, materiallar, tekstura, kərpic, fasad örtüyü, şifer, damörtüyü, ağac, daş, kafel, beton, suvaq, torpaq, şüşə, metal, boya vedrəsi, doldurma, nümunə, damcı alətı, standart, glb, obj, mtl, collada
from: b1500523
---

Rənglər modelin hissələrini bir-birindən ayırmağa kömək edir, **materiallar** (kərpic və blok, fasad örtüyü, damörtüyü, ağac, daş, kafel, beton, suvaq, torpaq, şüşə, metal) isə modelə onun qurulduğu şeyin görünüşünü verir. Hər ikisi eyni şəkildə boyanır.

## Rəng seçin

{{ui:Rənglər}} bölməsi sağda bir sıra bərk rəngi, {{ui:Standart}} (xətt ilə kəsilmiş: rəng yoxdur) və hər digər rəng üçün {{ui:+}} nümunəsini göstərir. Birinə klikləyin ki, o cari rəng olsun. Boya aləti onunla başlayır.

## Boyayın

1. {{key:B}} ({{ui:Boya}}) basın, ya da heç nə seçilməyibsə, rəngə klikləyin. (Nəsə seçiləndə rəngə klikləmək seçimi dərhal boyayır.)
2. Boyamaq üçün üzə klikləyin.
3. Həmin nüsxəni boyamaq üçün qrupa və ya komponentə klikləyin: rəngi olmayan üzləri bu rəngi alır. Onun içində boyadığınız üzlər öz rənglərini saxlayır.

Bir neçə şeyi eyni anda boyamaq üçün əvvəlcə onları seçin, sonra rəngə klikləyin, ya da onlardan hər hansı birinə {{ui:Boya}} ilə klikləyin. Bu bir geri qaytarma addımıdır.

| Basılı saxlayın | Və üzə klikləyin | Nə boyanır |
|---|---|---|
| — | | Həmin üz |
| {{key:Ctrl}} | | Ona bağlı, eyni rəngli hər üz |
| {{key:Shift}} | | İşlədiyiniz qrupda həmin rəngli hər üz |
| {{key:Alt}} | | Heç nə: onun əvəzinə həmin rəngi götürürsünüz |

Üzü rəngsiz vəziyyətə qaytarmaq üçün {{ui:Standart}} seçin və ona klikləyin.

## Materialla boyayın

{{ui:Materiallar}} bölməsi, {{ui:Rənglər}} altında, material kitabxanasını növünə görə sadalayır: kərpic və blok, fasad örtüyü, damörtüyü, ağac, daş, kafel, beton, suvaq, torpaq, şüşə və metal. Adını görmək üçün nümunənin üzərinə gətirin. Birinə klikləyin, sonra rəngdə olduğu kimi boyayın: {{key:B}} basın, üzlərə, qruplara və ya komponentlərə klikləyin; ya da əvvəlcə seçin və materiala klikləyin.

- **Shaded** üslubunda üzlər materialın teksturasını göstərir. Gizli xətt, məftil və rentgen rejimlərində onun rəngi göstərilir.
- Teksturalar hər üzdə **səviyyəli** və **yuxarı** istiqamətdə düzülür: kərpic sıraları hər divarda səviyyəli qalır, şiferlər damın enişi boyunca enir, döşəmədəki taxtalar qırmızı oxu izləyir. Onlar öz real ölçüsündədir (kərpic təxminən 215 mm uzunluğundadır), buna görə istənilən məsafədə düzgün görünürlər.
- [Renderlənmiş şəkildə](topic:render) materiallar öz teksturasını, pürüzlülüyünü və şüşə və metal üçün parıltısını saxlayır.
- {{ui:Boya}} ilə {{key:Alt}}-klik üzün materialını da götürür.

Teksturalar ModelCraft-ın özü tərəfindən çəkilir, buna görə oflayn işləyirlər və istənilən məqsəd üçün pulsuzdur (CC0).

## Komponentlər və rənglər

Komponentin **içindəki** üzə boyanmış rəng hər nüsxədə görünür, çünki nüsxələr bir tərifi paylaşır. Komponent qapalı olarkən nüsxənin **xaricindən** boyanmış rəng yalnız o nüsxəyə aiddir, buna görə bir komponentin iki nüsxəsi fərqli rənglərə malik ola bilər. {{ui:Obyekt məlumatı}} seçilmiş üzün, qrupun və ya komponentin rəngini göstərir.

## Fayllarda rənglər

- ModelCraft faylı hər rəngi və hər materialı saxlayır.
- Digər formatlar teksturanın yerinə **materialın rəngini** (uzaqdan görünüşünü) alır: glTF, Collada, OBJ, DWG və DXF, və 3D çap yoxlaması. glTF, Collada və OBJ-da material öz adını saxlayır, məsələn `Material_brick-red`.
- **glTF (.glb)** və **Collada (.dae)**: hər rəng bir material olur. Müxtəlif rənglərdə göstərilən komponent hər rəng üçün bir dəfə yazılır. glTF həmçinin idxal edilmiş teksturaları tekstura kimi yazır.
- **OBJ**: ixrac iki fayl yükləyir, `.obj` və rənglərlə birlikdə `.mtl` material faylı. Onları eyni qovluqda saxlayın. İdxal edilmiş teksturalarla `.obj`, `.mtl` və şəkillər bir `.zip` kimi gəlir.
- **DWG** dəqiq rəngləri saxlayır; **DXF** 255 standart CAD rənginin ən yaxınını istifadə edir.
- **STL** və **PLY** rəngləri daşıyır: STL VisCAM / SolidView qaydasında (onu oxumayan proqramlar onu nəzərə almır), PLY isə hər nöqtədə rəng kimi. Bax: [Fayl formatları ətraflı](topic:formats).

:::tip
Ekran modelləşdirmək üçün, [ofset](topic:draw-faces) etdikdən sonra ön üzü kömür boz, şüşəni isə mavi rəngə boyayın.
:::
