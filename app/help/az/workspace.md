---
title: ModelCraft ekranı
summary: Alətlər panelinin, hər tərəfdəki panellərin, 3D görünüşün və status panelinin ekranda göstərilən adları ilə qısa tur.
keywords: ekran, tərtibat, alətlər paneli, panellər, kontur, obyekt məlumatı, üslub, səhnələr, status paneli, dəyər qutusu, vahidlər, interfeys, tur
from: 4a9a4516
---

Yuxarıdan aşağıya: tətbiq paneli, alətlər paneli, üç sütun (sol panellər, 3D görünüş, sağ panellər) və status paneli.

## Tətbiq paneli

Ən yuxarıdakı nazik panel hər CadCraft tətbiqinə aiddir. Burada tətbiqin adı və versiyası, {{ui:ModelCraft haqqında}}, ekran rejimi düyməsi və {{ui:Kağız}} / {{ui:Model}} keçidi var.

- {{ui:Kağız}} açıq mövzudur, {{ui:Model}} isə tünd. 3D görünüş rənglərini buna uyğunlaşdırır; modeliniz dəyişmir.
- Ekran rejimi düyməsi (əvvəlcə {{ui:Tam ekran}} yazır) və {{key:Ctrl+Shift+F}} üç rejim arasında keçir: normal, tam ekran və barlar gizli tam ekran. Barlar gizli olanda onları geri gətirmək üçün ekranın yuxarı kənarına baxın (və ya toxunun). {{key:Esc}} tam ekrandan çıxır.

:::note
{{key:Ctrl+Shift+F}} hər kompüterdə, Mac-də də Control düyməsini istifadə edir. Brauzerlərin tam ekranı olmayan iPhone-da düymə yalnız barları gizlədir və göstərir.
:::

## Alətlər paneli

Alətlər paneli adlandırılmış qruplara bölünüb. Düyməni üzərinə gətirsəniz adını və klavişini görəcəksiniz.

Solda {{ui:İş sahəsi}} siyahısı alətlər panelinin və sağ panelin nə üçün olduğunu dəyişir: {{ui:Model}} (itələ/çək modelləşdirmə, aşağıdakı tur), {{ui:Mesh}} ([meşi redaktə edin](topic:mesh-edit)), {{ui:Əyri}} ([əyri obyektlər](topic:curves)), {{ui:UV}} ([UV-ləri düzün](topic:uv)), {{ui:Heykəltəraşlıq}} ([heykəltəraşlıq](topic:sculpt)), {{ui:Kölgələndirmə}} ([nodlarla hazırlanmış materiallar](topic:shading)), {{ui:Animasiya}} ([animasiya](topic:animate)) və {{ui:Vizuallaşdır}} ([görünüşdə render](topic:render#render-in-the-view)).

| Qrup | Düymələr |
|---|---|
| Fayl | {{ui:Yeni}}, {{ui:Aç}}, {{ui:Saxla}}, {{ui:İdxal}}, {{ui:İxrac}} (format menyusu) |
| Çəkmə | {{ui:Xətt}} ({{key:L}}), {{ui:Düzbucaqlı}} ({{key:R}}), {{ui:Çevrə}} ({{key:C}}), {{ui:Çoxbucaqlı}} ({{key:N}}) |
| Dəyişdirmə | {{ui:Seç}} ({{key:Space}}), {{ui:İtələ/çək}} ({{key:P}}), {{ui:Köçür}} ({{key:M}}), {{ui:Fırlat}} ({{key:Q}}), {{ui:Miqyas}} ({{key:S}}), {{ui:Silgi}} ({{key:E}}), {{ui:Ölçü lenti}} ({{key:T}}) |
| Təşkil | {{ui:Komponent}} ({{key:G}}), {{ui:Qrup}} ({{key:Shift+G}}), {{ui:Parçalayın}} |
| Redaktə | {{ui:Geri qaytar}} ({{key:Mod+Z}}), {{ui:Təkrarla}} ({{key:Mod+Y}}), {{ui:Kopyala}} ({{key:Mod+C}}), {{ui:Yapışdır}} ({{key:Mod+V}}), {{ui:Daha çox}} (menyu: kəs, kopyala, yapışdır, yerində yapışdır {{key:Mod+Shift+V}}, ikiləşdir {{key:Mod+D}}, sil, hamısını seç, heç birini seçmə və klaviş üslubu) |
| Kamera | {{ui:Orbit}} ({{key:O}}), {{ui:Sürüşdür}} ({{key:H}}), {{ui:Yaxınlaşdır}} ({{key:Z}}), {{ui:Hüdudlar}} ({{key:Shift+Z}}), {{ui:Görünüşlər}} (menyu) |

Göstərilən klavişlər itələ/çək klavişləridir; [ModelCraft parametrlərində](topic:settings) Modeler üslubu seçilsə, alət ipucları bunların əvəzinə həmin klavişləri göstərir. İstifadə etdiyiniz alət basılmış kimi göstərilir. Dar ekranda alətlər paneli yana sürüşür.

{{ui:Görünüşlər}} menyusunda {{ui:İzo}}, {{ui:Üst}}, {{ui:Ön}}, {{ui:Sağ}}, {{ui:Arxa}}, {{ui:Sol}} və {{ui:Alt}} var, hər biri modelə uyğunlaşdırılır, və {{ui:Perspektiv}} perspektiv və paralel proyeksiya arasında keçir.

## 3D görünüş

Ekranın ortası. Qırmızı, yaşıl və mavi xətlər oxlardır: qırmızı və yaşıl yerdə yatır, mavi yuxarı göstərir, və **şimal yaşıl oxdur**. Kəsişdikləri yer başlanğıc nöqtəsidir.

- Başlayanda "Modelləşdirməyə başlayın" adlı kart ilk bir neçə klavişi sadalayır. Çəkmə aləti seçəndə və ya görünüşə klikləyəndə yox olur.
- Alət işləyəndə görünüş **çıxarış işarələrini** göstərir: göstəricinin tutduğu yerdə kiçik rəngli formalar (son nöqtədə yaşıl dairə, orta nöqtədə firuzəyi, kənarda qırmızı kvadrat, üzdə mavi romb). Bax: [Çıxarış və tutma](topic:inference).
- Seçilmiş şeylər mavi olur. Arxadan görünən üz mavi-boz olur.
- Qrupu redaktə etmək üçün açanda hər şey soluqlaşır və oxlar qrupun öz oxlarına keçir.
- Modelin səhnələri varsa, görünüşün yuxarısında səhnə sekmələri sırası görünür.
- Faylı açmaq və ya idxal etmək üçün onu görünüşün istənilən yerinə buraxın.

## Sol panellər

**{{ui:Kontur}}** modeldəki qrupları və komponentləri, modeldə necə yuvalanmışsa, o cür sadalayır. Komponent bir neçə dəfə istifadə olunubsa, neçə dəfə göründüyünü göstərir, məsələn "Pəncərə (4)".

- Adına klikləyin ki, seçin. İkiqat klikləyin ki, redaktə üçün açın.
- **Ada görə axtar** (iki və ya daha çox qrup olanda görünür) yalnız adı uyğun gələn sətirləri, onları ehtiva edən qruplarla birlikdə saxlayır. {{key:Esc}} təmizləyir.
- Sətrin sonundakı **göz** həmin qrupu və ya komponenti gizlədir və ya göstərir ({{ui:Redaktə}} › {{ui:Daha çox}} › {{ui:Gizlət}} kimi). Etiket işarəsi onun [etiketi](topic:tags) ilə gizləndiyini bildirir.
- **Yerində adlandırın:** sətrə klikləyin, sonra {{key:F2}} basın, yazın və {{key:Enter}} basın ({{key:Esc}} köhnə adı saxlayır).
- **Sətri sürükləyin**: başqa qrupun sətrinin ortasına — həmin qrupun içinə keçirmək üçün; sətrin yuxarı və ya aşağı kənarına — həmin sətirdən əvvəl və ya sonra qoymaq üçün; və ya **Kontur** başlığına — ən yuxarı səviyyəyə köçürmək üçün. Sətir modeldə yerini saxlayır, rəngini, etiketini və adını saxlayır. Qrup özünün içinə keçə bilməz. Hər köçürmə bir geri alma addımıdır. Bax: [Konturda yenidən düzün](topic:groups-components#rearrange-in-the-outliner).
- Qrupun içində redaktə edərkən "Redaktə: Model › …" sətri oxunur və {{ui:Qrupu bağla}} düyməsi görünür. Bu düymə açıq olan bütün səviyyələri eyni anda bağlayır.

**{{ui:Komponentlər}}** hər komponent təyinini, neçə nüsxənin yerləşdirildiyini ("3×") və klikləyəcəyiniz yerə başqa nüsxə əlavə edən {{ui:Yerləşdir}} düyməsini sadalayır.

## Sağ panellər

**{{ui:Obyekt məlumatı}}** seçilmiş şeyi təsvir edir. Başlıq nə olduğunu dəyişir:

| Başlıq | Göstərir | Düymələr |
|---|---|---|
| Model (heç nə seçilməyib) | Üzlər, kənarlar, qruplar, komponentlər və neçəsinin yerləşdirildiyi, bələdçilər, ümumi ölçü | {{ui:Bütün bələdçiləri sil}} (bələdçi olanda) |
| Üz | Sahə, deşiklərin sayı | {{ui:Üzü çevir}} |
| Kənar | Uzunluq | yoxdur |
| Qrup və ya Komponent | Ad (adını dəyişmək üçün yazın), neçə dəfə yerləşdirildiyi, bağlı bərk cisim olub-olmadığı, həcmi, ölçüsü | {{ui:Redaktə}}, {{ui:Parçalayın}}, {{ui:Unikal et}} (bir neçə dəfə yerləşdirilmiş komponent), {{ui:Komponent yarat}} (qrup) |
| Bələdçi nöqtəsi və ya bələdçi xətti | heç nə | {{ui:Sil}} |
| Bir neçə şey | Neçə üz, kənar, qrup və bələdçi, üzlərin ümumi sahəsi | {{ui:Komponent yaradın (G)}}, {{ui:Qrup yaradın (Shift+G)}} |

**{{ui:Üslub}}** modelin necə çəkildiyini təyin edir: {{ui:Üzlər}} ({{ui:Kölgəli}}, {{ui:Gizli xətt}}, {{ui:Məftil kadr}}, {{ui:Rentgen}}), {{ui:Kənarları göstər}} və günəşin tarixi, vaxtı və yerinə görə {{ui:Günəş kölgələri}}. Bax: [Üslublar və günəş kölgələri](topic:styles-shadows).

**{{ui:Səhnələr}}** görünüşləri saxlayır: {{ui:Səhnə əlavə et}}, səhnələrin siyahısı, və {{ui:Əvvəlki}}, {{ui:Oynat}} və {{ui:Növbəti}}. Bax: [Görünüşləri səhnə kimi saxlayın](topic:scenes).

## Status paneli

Aşağıda, soldan sağa:

1. **İpucu**: alətin nə istədiyi, və ya göstəricinin nəyə tutulduğu ("Son nöqtə", "Qırmızı ox üzrə").
2. **Mesajlar**: indicə nə baş verdiyi ("İtələ/çək geri alındı.", "site.dxf idxal edildi: yerdə 1697 kənar, bir qrupda.") və ya nəyinsə niyə işləmədiyi.
3. **Dəyər qutusu**: etiketi alətlə dəyişir ({{ui:Uzunluq}}, {{ui:Ölçülər}}, {{ui:Radius}}, {{ui:Tərəflər}}, {{ui:Məsafə}}, {{ui:Bucaq}}, {{ui:Miqyas}}, {{ui:Ofset}}). İşləyərkən canlı ölçünü göstərir və yazdıqlarınızı qəbul edir. Bax: [Dəyər qutusunda dəqiq ölçülər yazın](topic:value-box).
4. **Klavişlər üslubu**: {{ui:Açarlar: İtələ-çək}} və ya {{ui:Açarlar: Modeler}} klaviatura qısayollarını və siçan düymələrini eyni anda dəyişir ([ModelCraft parametrləri](topic:settings) ilə eynidir).
5. **{{ui:Tutma}} və {{ui:Toqquşma}}**: nöqtələrə, kənarlara və oxlara tutma, və bərk cisimlərin toxunduqları yerdə dayanması. Üstü xətlənmiş = söndürülüb. Dəyişmək üçün klikləyin. Bax: [ModelCraft parametrləri](topic:settings).
6. **Vahid seçicisi**: uzunluqların hansı vahidlə göstərildiyi. Bax: [Başlayın](topic:getting-started#check-the-units-first).

## Dar ekranda

Təxminən 760 pikseldən dar olduqda (telefon və ya dar pəncərə), 3D görünüş ekranı saxlayır. Alətlər paneli yana sürüşən bir sətirdir, və panellər ekranın aşağısındakı paneldən vərəqlər kimi açılır.
