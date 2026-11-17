---
title: Fırlatmaq və miqyaslamaq
summary: Nöqtə ətrafında klikləməklə və ya dərəcə yazmaqla fırladın, və bir əmsalla bərabər ölçüdə dəyişdirin.
keywords: miqyas tutacaqları, uzatma, qeyri-bərabər, oxa görə, çevirmək, güzgü, güzgü surəti, istiqamətdə çevir, fırlat, dönmək, bucaq, dərəcə, transportir, miqyas, ölçü dəyişmək, böyütmək, kiçiltmək, əmsal, vahid miqyas
from: 45cdcb49
---

## Fırlat

{{ui:Fırlat}} ({{key:Q}}) seçimi bir mərkəz nöqtəsi ətrafında döndərir. Üç klik tələb olunur: mərkəz, başlanğıc istiqamət və son istiqamət.

1. Döndərmək istədiyiniz şeyi seçin. Heç nə seçilməyibsə, Fırlat əvvəl klikləndiyiniz şeyi götürür.
2. {{key:Q}} basın. Göstəricini izləyən bir dairə görünür, hansı müstəvidə döndərəcəyinizi göstərir.
3. Fırlanma mərkəzinə klikləyin.
   - Yerdə və ya boş məkanda dairə üfüqi (mavi) yatır: dönmə şaquli ox ətrafında olur, binanı sahəsində döndərmək kimi.
   - Üzdə dairə həmin üzün müstəvisində yatır: dönmə üzün öz istiqaməti ətrafında olur. Üfüqi ox ətrafında bir şeyi döndərmək üçün divara klikləyin.
4. Bucağın başlamasını təyin edən bir nöqtəyə klikləyin, məsələn, döndərdiyiniz şeyin kənarı boyunca.
5. Göstəricini mərkəz ətrafında hərəkət etdirin. Bucaq ucluqda və dəyər qutusunda ({{ui:Bucaq}}) göstərilir. Birinə yaxınlaşdıqda 15° addımlarla klikləyir.
6. Bitirmək üçün klikləyin, ya da bucağı dərəcə ilə yazıb {{key:Enter}} basın: `90`, `45`, `-30`.

   Müsbət bucaqlar, dairənin üzü baxdığı tərəfdən görünərkən, saat əqrəbinin əksinə fırlanır.

Fırlatarkən {{key:Ctrl}} (və ya {{key:Alt}}) basılı saxlasanız, Köçür kimi **surət** döndərirsiniz və orijinal yerində qalır; ucluq surətin açıq olub-olmadığını göstərir, düyməni yenidən basmaq onu söndürür. Fırlanmış surətdən dərhal sonra `3x` yazın ki, eyni mərkəz ətrafında daha çox surət əlavə olunsun.

Köçürmə kimi bağlı həndəsənin bir hissəsini fırlatmaq ona bağlı üzləri burur. Hamısını birlikdə döndərmək üçün əvvəlcə qruplaşdırın.

:::note
Ucluqda deyilir ki, ox düymələri fırlanma oxunu seçir, amma bu versiyada ilk klikdən əvvəl onlar görünüşü orbit edir. Oxu seçmək üçün, istədiyiniz istiqamətə baxan üzdə mərkəzə klikləyin. Bax: [Hələ hazır deyil](topic:not-built-yet).
:::

## Miqyas

{{ui:Miqyas}} ({{key:S}}) seçimi ölçüsünü dəyişir. Əvvəlcə dəyişdirmək istədiyiniz şeyi seçin, sonra {{key:S}} basın: qutusunun künclərində, kənarlarında və tərəflərinin ortasında kiçik kvadratlar (tutacaqlar) görünür.

### Tutacaqlarla uzadın və ya miqyaslayın

- **Künc** tutacağı hər istiqamətdə bərabər miqyaslanır, qarşı künc ətrafında.
- **Tərəfin** ortasındakı tutacaq yalnız həmin istiqamətdə uzanır, qarşı tərəf ətrafında: hündürlüyü artırmadan qutunu uzadır.
- **Qutu kənarının** ortasındakı tutacaq ona çarpaz iki istiqamətdə uzanır.
- Tutacağa klikləyəndə {{key:Ctrl}} basılı saxlasanız, qutunun ortası ətrafında miqyaslayır.

Tutacağa klikləyin, göstəricini hərəkət etdirin və yenidən klikləyin; ya da tutacağa klikləyib əmsal yazın (`2` ikiqat, `0.5` yarıya) və {{key:Enter}} basın. Hər istiqamət üçün ayrıca əmsal vermək üçün üç ədəd yazın: qırmızı, yaşıl və mavi üçün: `2,1,0.5`. Açıq qrupun içində istiqamətlər qrupun öz istiqamətləridir.

### Hər hansı nöqtə ətrafında miqyaslayın

Tutacaqdan başqa yerə klikləməklə öz seçdiyiniz nöqtə ətrafında bərabər miqyaslayın. Üç klik tələb olunur:

1. Dəyişdirmək istədiyiniz şeyi seçin. Heç nə seçilməyibsə, Miqyas əvvəl klikləndiyiniz şeyi götürür.
2. {{key:S}} basın.
3. Yerində qalan nöqtəyə klikləyin (tutacaq üzərində olmayan), məsələn aşağı künc.
4. İstinad nöqtəsinə klikləyin. Birinci nöqtədən məsafəsi 1× sayılır.
5. Göstəricini birinci nöqtəyə doğru və ya ondan uzağa hərəkət etdirin. Əmsal ucluqda və dəyər qutusunda ({{ui:Miqyas}}) göstərilir.
6. Bitirmək üçün klikləyin, ya da əmsal yazıb {{key:Enter}} basın: `2` ölçünü ikiqat artırır, `0.5` yarıya endirir.

### Dəqiq ölçüyə miqyaslayın

Nəyisə dəqiq uzunluğa çatdırmaq üçün əmsalı hesablayın: yeni uzunluq cari uzunluğa bölünür. Üç kliklik rejimdə dəyər qutusu hesab aparır, buna görə 3.6 m divarı 4.2 m uzunluğa çatdırmaq üçün `4.2/3.6` yazın. Tutacağın dəyər qutusu yalnız sadə ədədləri qəbul edir: əmsalı əvvəlcə hesablayın (4.2 bölünsün 3.6-ya təxminən 1.1667 edir). Cari uzunluğunu oxumaq üçün əvvəlcə kənarı seçin və {{ui:Obyekt məlumatı}} bölməsinə baxın.

### Səhv ölçüdə gələn idxalı düzəldin

OBJ faylları vahid daşımır, buna görə millimetrlə çəkilmiş model 1000 dəfə böyük gəlir. İdxal edilmiş qrupu seçin, {{key:S}} basın, künc tutacağına klikləyin və `0.001` yazıb {{key:Enter}} basın. Düymlə çəkilmiş model üçün `0.0254` yazın.

## Nəzərə alınmalı məqamlar

- Üç klikdə nöqtə ətrafında miqyaslama bərabərdir. Yalnız bir istiqamətdə uzatmaq üçün tərəf və ya kənar tutacağından istifadə edin (yuxarıya bax).
- Qrupu və ya komponenti miqyaslamaq miqyaslanan nüsxəni dəyişir; komponentin digər nüsxələri öz ölçüsünü saxlayır.
- Üç klik rejimində son klikdən əvvəl ləğv etmək üçün {{key:Esc}} basın.

## Çevirmək

{{ui:Redaktə}} › {{ui:Daha çox}} › {{ui:Qırmızı boyunca çevir}}, {{ui:Yaşıl boyunca çevir}} və ya {{ui:Mavi boyunca çevir}} seçimi seçimi qutusunun ortasından keçən müstəvidə güzgüləyir: sol əlli pilləkən sağ əlli olur. Üzlər xaricə baxmağa davam edir, qrup və ya komponent bütövlükdə güzgülənir (içi yenidən yazılmır).

{{ui:Qırmızı boyunca çevrilmiş kopya}} (və yaşıl, mavi) orijinalı yerində qoyur və yanında güzgülənmiş surət yaradır, seçimin qutusunun uzaq tərəfində: cütün digər qapısı, binanın digər qanadı. Orada toxunan həndəsə, toxunan həndəsə həmişə etdiyi kimi, orijinala birləşir; onları ayrı saxlamaq üçün əvvəlcə orijinalı qrup edin.

Açıq qrupun içində qırmızı, yaşıl və mavi qrupun öz oxlarıdır.
