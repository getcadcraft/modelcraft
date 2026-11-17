---
title: Köçürmə, kopyalama və massivlər
summary: Obyektləri klikləməklə və ya dəqiq məsafə ilə köçürün, dəyişdirici düymə ilə kopyalayın və bərabər aralıqlı kopyaların sırasını yaradın.
keywords: köçürmək, kopyalamaq, dublikat, massiv, sıra, aralıq, bölmək, ofset, uzatmaq, sütunlar, təkrarlamaq, çoxlu kopyalama
from: 280245fc
---

{{ui:Köçür}} ({{key:M}}) seçilmiş hər şeyi bir nöqtədən digərinə köçürür. Dəyişdirici düyməni basıb saxlamaq onu kopyaya çevirir, kopyalamadan sonra isə neçə əlavə kopya istədiyinizi yaza bilərsiniz.

## Bir şeyi köçürün

1. Köçürmək istədiyinizi seçin (bax: [Şeyləri seçin](topic:select)). Heç nə seçilməyibsə, Köçür klikləndiyiniz şeyi götürür.
2. {{key:M}} düyməsini basın.
3. Köçürmə üçün nöqtəni klikləyin. Mənalı nöqtə seçin, məsələn künc: bu nöqtə növbəti klikləyəcəyiniz yerə dəqiq düşəcək.
4. Göstəricini hərəkət etdirin. Seçim onu izləyir. Xətt kimi nöqtələrə, kənarlara və qırmızı, yaşıl, mavi istiqamətlərə yapışır.
5. Nöqtənin gedəcəyi yeri klikləyin və ya məsafə yazıb {{key:Enter}} basın.

   Status sətrinin məsləhəti növbəti köçürmə üçün "Köçürmək üçün nöqtəni klikləyin…" mətninə qayıdır.

Yazdığınız məsafə göstərdiyiniz istiqamətdə tətbiq olunur. Həmçinin dəqiq ofset yaza bilərsiniz, `<2m,0,0>` (qırmızı istiqamətdə 2 m), və ya seçdiyiniz nöqtə üçün dəqiq təyinat yeri, `[0,0,0]` (başlanğıc nöqtə). Bax: [Dəqiq ölçüləri yazın](topic:value-box).

Yalnız bir ox boyunca köçürmək üçün ilk klikdən sonra ox düyməsini basın: {{key:Right}} qırmızıya, {{key:Left}} yaşıla, {{key:Up}} maviyə kilidləyir. Kilidi açmaq üçün eyni oxu yenidən basın.

## Şəklin bir hissəsini köçürmək onu uzadır

Qruplaşdırılmamış həndəsə bağlıdır. Bir üzü və ya bir neçə kənarı seçib köçürsəniz, onlara bağlı üzlər onları izləmək üçün uzanır. Qutunun üst üzünü yana köçürsəniz, qutu əyilir; damın bir kənarını köçürsəniz, damın mailliyi dəyişir. Artıq düz qala bilməyən üzlər üçbucaqlara bölünür.

Bütün obyekti deformasiya etmədən köçürmək üçün əvvəlcə hamısını seçin (üç dəfə klikləyin) və ya daha yaxşısı, onu qrupa və ya komponentə çevirin (bax: [Qruplar və komponentlər](topic:groups-components)).

## Bir şeyi kopyalayın

1. Kopyalamaq istədiyinizi seçin.
2. {{key:M}} düyməsini basın.
3. {{key:Ctrl}} (və ya {{key:Alt}}) basıb saxlayın və köçürmə nöqtəsini klikləyin. Mac-də {{key:Mod}} və ya {{key:Alt}} eyni işi görür. Məsləhət "Ctrl əvəzinə köçürür" yazır, yəni kopyalayırsınız.

   İlk klikdən sonra {{key:Ctrl}} və ya {{key:Alt}} düyməsini basıb buraxaraq köçürmə ilə kopyalama arasında keçid edə bilərsiniz.

4. Kopyanın gedəcəyi yeri klikləyin və ya məsafə yazıb {{key:Enter}} basın.

   Orijinal yerində qalır, kopya isə seçilmiş olur.

## Kopyala, kəs, yapışdır və dublikat

- {{key:Mod+C}} seçimi kopyalayır, {{key:Mod+X}} kəsir (kopyalayır, sonra silir). {{ui:Kopyala}} və {{ui:Yapışdır}} alətlər panelinin {{ui:Redaktə}} qrupunda da düymələrdir, yanındakı {{ui:Daha çox}} isə kəsmə, yerində yapışdırma və dublikat əmrlərini ehtiva edir.
- {{key:Mod+V}} yapışdırır: kopyanın konturu göstəricini izləyir, hər alət kimi yapışır və klik onu aşağı küncü ilə yerləşdirir. {{key:Esc}} ləğv edir.
- {{key:Mod+Shift+V}} dəqiq kopyanın gəldiyi yerdə yapışdırır — açdığınız qrupa bir şey köçürmək üçün faydalıdır.
- {{key:Mod+D}} ({{key:Shift+D}} Modeler üslubunda) dublikat yaradır: kopya yaradılır və dərhal göstərici ilə hərəkət edir; yerləşdirmək üçün klikləyin, məsafə yazın və ya buraxmaq üçün {{key:Esc}} basın. Dərhal sonra ardıcıl daha çox kopya üçün `3x` yazın.

Yapışdırılmış qrup yeni qrupa çevrilir. Yapışdırılmış komponent eyni komponentin başqa yerləşməsi olur, buna görə birini redaktə etsəniz hamısı dəyişir. Kopyalar bu brauzerdəki başqa ModelCraft sekmesinə də yapışdırıla bilər (orada yeni tərif kimi gəlir).

## Kopyaların sırası

Kopyalamadan dərhal sonra, {{ui:Köçür}} hələ alət olduqda:

- `3x` (və ya `*3`) yazın və {{key:Enter}} basın: ilk kopya ilə eyni aralıqda üç ardıcıl kopya. Orijinaldan əlavə üç yeni kopya alırsınız.
- Bölmək üçün `/3` yazın və {{key:Enter}} basın: orijinaldan ilk kopyanı qoyduğunuz yerə qədər bərabər bölünmüş üç kopya, sonuncusu həmin yerdə. Bir məsafəni doldurmaq üçün bunu istifadə edin: uzaq ucda bir kopya qoyun, sonra bölün.

Dərhal fərqli rəqəm yaza bilərsiniz: `5x` `3x` sırasını əvəz edir. Məsləhət xatırladır: "Kopyalandı. Ardıcıl daha çox kopya üçün 3x yazın, ya da məsafəni bölmək üçün /3."

### Misal: hər 6 metrdə sütunlar

1. Sütun yaradın və onu komponentə çevirin ({{key:G}}), ki, sonra bütün kopyalar birlikdə dəyişsin.
2. {{key:M}} basın, {{key:Ctrl}} basıb saxlayın və sütunun baza küncünü klikləyin.
3. Qırmızı ox boyunca hərəkət edin və `6m` yazın, sonra {{key:Enter}}.
4. `4x` yazın və {{key:Enter}} basın. Hər 6 m aralıqla beş sütununuz olur.

## Bilmək lazım olanlar

- İkinci klikdən əvvəl ləğv etmək üçün {{key:Esc}} basın; hər şey yerinə qayıdır.
- Köçürmə redaktə etdiyiniz qrupun içində işləyir. Bütün qrupu köçürmək üçün əvvəlcə onu bağlayın və xaricdən seçin.
- {{ui:Toqquşma}} açıq olduqda (sağ aşağıda və [ModelCraft parametrlərində](topic:settings#solids-stop-where-they-touch)) köçürmə seçimin başqa cisimə toxunduğu yerdə dayanır, içindən keçmir. İçindən keçməli olan köçürmə üçün {{ui:Toqquşma}} klikləyib söndürün.
- Başqa qrupun içinə kopya qoymaq üçün: kopyalayın, digər qrupu açın və yapışdırın ({{key:Mod+Shift+V}} eyni yerdə saxlayır).
