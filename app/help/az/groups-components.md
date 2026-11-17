---
title: Qruplar və komponentlər
summary: Obyektlərin bir-birinə yapışmasının qarşısını alın, bir nüsxəni redaktə edərək hamısını dəyişin və Kontur və Komponentlər panellərindən istifadə edin.
keywords: qrup, komponent, qrup yarat, komponent yarat, parçala, unikal et, kontur, nüsxələr, blok, içiçə, qrupu redaktə et, yerləşdir
from: 7cb925f3
---

ModelCraft-da sərbəst həndəsə bir-birinə yapışır: bir-birinə toxunan xətlər bir-birini bölür, ortaq kənarı olan üzlər birlikdə hərəkət edir. Üzlərin üzərində çəkmə məhz belə işləyir, lakin bir qutunun digərinin üstündə çəkilməsi onun onunla birləşməsi deməkdir. **Qruplar** və **komponentlər** şeyləri ayrı saxlamağa kömək edir.

- **Qrup** bir sıra həndəsəni bir obyekt kimi davranması üçün bükür. Onun xaricindəki heç nə ona yapışa bilməz.
- **Komponent** bir neçə dəfə yerləşdirilə bilən qrupdur. Hər nüsxə eyni məzmunu paylaşır: birini redaktə edin və hamısı dəyişir. Təkrarlanan hər şey üçün komponentlərdən istifadə edin: pəncərələr, sütunlar, masalar, ağaclar.

## Qrup və ya komponent yaradın

1. Həndəsəni seçin. Üzün üzərində üç dəfə klik bütün bağlı obyekti seçir; pəncərə ilə sürükləmə qutudakı hər şeyi seçir.
2. Qrup üçün {{key:Shift+G}}, komponent üçün {{key:G}} basın. Həmçinin alətlər panelində {{ui:Təşkil}} qrupundakı {{ui:Qrup}} və ya {{ui:Komponent}} düyməsinə, ya da {{ui:Obyekt məlumatı}} daxilində {{ui:Qrup yaradın (Shift+G)}} və ya {{ui:Komponent yaradın (G)}} düyməsinə klikləyə bilərsiniz.

   Status sətirində "Grouped as Group#1." və ya "Made component Component#1." yazılır, yeni obyekt seçilir və {{ui:Kontur}} daxilində görünür.

3. Adını vermək üçün {{ui:Obyekt məlumatı}} daxilində {{ui:Ad}} sahəsinə ad yazın və {{key:Enter}} basın və ya kənara klikləyin.

Üzü seçmək onun kənarlarını da özü ilə gətirir. Heç nə seçilməyibsə, status sətri deyir: "Əvvəlcə həndəsə seçin (pəncərə çəkin və ya bağlı hər şeyi seçmək üçün üç dəfə klikləyin)."

Qrupları da qruplaşdıra bilərsiniz: bir neçə qrup seçin və {{key:Shift+G}} basın. {{ui:Kontur}} iç-içəliyi göstərir.

:::note
Klavişlərin hərfləri SketchUp-ın standart qısayollarına uyğundur: {{key:G}} komponent yaradır, {{key:Shift+G}} qrup yaradır.
:::

## Qrup və ya komponentin içində redaktə

1. Ona iki dəfə klikləyin (görünüşdə və ya {{ui:Kontur}} daxilində) və ya onu seçib {{ui:Obyekt məlumatı}} daxilində {{ui:Redaktə}} düyməsinə klikləyin.

   Modelin qalan hissəsi solğunlaşır, oxlar qrupun öz oxlarına keçir və {{ui:Kontur}} "Redaktə: Model › Group#1" yazır. Status sətri deyir: "Group#1 redaktə olunur. Esc və ya bayırda iki dəfə klik onu bağlayır."

2. Adi qaydada çəkin, itələyin/çəkin, köçürün və silin. Hər şey qrupun daxilində qalır.
3. Bağlamaq üçün {{key:Esc}} basın (bir şey seçilibsə iki dəfə), boş yerdə iki dəfə klikləyin və ya {{ui:Kontur}} daxilində {{ui:Qrupu bağla}} düyməsinə klikləyin.

Komponent açıq olduqda, siz işləyərkən onun hər nüsxəsi dəyişir.

## Komponentin daha çox nüsxəsini yerləşdirin

- {{ui:Köçür}} və {{key:Ctrl}} ilə kopyalayın (bax: [Köçürmə və kopyalama](topic:move-copy)). Hər nüsxə eyni komponentin başqa yerləşdirilməsidir.
- Və ya {{ui:Komponentlər}} panelində onun yanındakı {{ui:Yerləşdir}} düyməsinə klikləyin, sonra yerin üzərinə klikləyin. Onun başlanğıc nöqtəsi — yaradarkən seçdiyiniz şeyi əhatə edən qutunun ən aşağı küncü — klikləyin yerinə düşür. Sonra alət yenidən {{ui:Seç}} olur.

{{ui:Komponentlər}} neçə nüsxənin yerləşdirildiyini göstərir ("4×"), {{ui:Kontur}} isə adın yanında sayı göstərir.

## Konturda yenidən düzənləyin

{{ui:Kontur}} daxilində bir sətri sürükləyərək onun yerini dəyişin. Görünüşdə heç nə yerini dəyişmir: qrup modeldəki yerini saxlayır.

- **Qrupun içinə:** qrupun sətrinin ortasına buraxın (sətir kəsikli kənar alır). Obyekt ən sona düşür.
- **Başqa sıra ilə:** sətrin yuxarı və ya aşağı kənarına buraxın (orada xətt görünür). Obyekt həmin sətirdən əvvəl və ya sonra, həmin sətirlə eyni qrupun içində yerləşir. Beləliklə, seçdiyiniz yerdə qrupa da salmaq olur.
- **Ən üst səviyyəyə:** {{ui:Kontur}} başlığına buraxın. Obyekt ən sona düşür.

Hər buraxma bir addımdır: {{key:Mod+Z}} onu geri qaytarır. Sürükləyərkən {{key:Esc}} heç nə buraxmır. Qrup özünün içinə və ya içində olduğu qrupa salına bilməz. {{ui:Adı ilə tap}} sahəsində mətn olduqda sürükləmə söndürülür.

:::touch
Sətrə bir müddət barmağınızı basın, sonra sürükləyin. Sürətli sürüşdürmə siyahını sadəcə sürüşdürür.
:::

## Bir nüsxəni fərqli edin

Nüsxəni seçin və {{ui:Obyekt məlumatı}} daxilində {{ui:Unikal et}} düyməsinə klikləyin (komponent birdən çox yerləşdirildikdə görünür). Həmin nüsxə öz təyinatını alır, orijinal kimi adlanır, lakin yeni nömrə ilə. Digərlərinə toxunmadan onu redaktə edin.

## Qrupu komponentə çevirin

Qrupu seçin və {{ui:Obyekt məlumatı}} daxilində {{ui:Komponent yarat}} düyməsinə klikləyin. Qrup yeni ad alır, məsələn Component#2, hətta qrupa ad vermiş olsanız belə; adı yenidən {{ui:Ad}} sahəsinə yazın.

## Parçalama

Qrupu və ya komponenti seçin və {{ui:Parçala}} düyməsinə klikləyin (alətlər panelində və ya {{ui:Obyekt məlumatı}} daxilində). Onun məzmunu öz yerində sərbəst həndəsəyə çevrilir və toxunduğu şeylərə yapışır. Daxilindəki qruplar qrup olaraq qalır.

## Bərk cisim və həcm

Qrup və ya komponent seçdiyiniz zaman, əgər onun üzləri boşluq olmadan bağlanırsa (hər kənar tam iki üz tərəfindən paylaşılırsa) və daxilində iç-içə qrup yoxdursa, {{ui:Obyekt məlumatı}} **Bərk: Bəli** göstərir. Bu halda o **həcmi** də göstərir. Qutu, içindən pəncərə kəsilmiş divar və çəkilmiş silindr bərk cisimdir; üstü silinmiş qutu isə deyil.

## Son nüsxə getdikdə

Komponentin son nüsxəsini silmək onu {{ui:Komponentlər}} panelindən də çıxarır. {{key:Mod+Z}} onu geri qaytarır.

## Bilmək lazım olanlar

- Bu quruluşda {{ui:Köçür}} ilə yaradılmış **qrupların** nüsxələri komponent nüsxələri kimi məzmunu paylaşır: birini redaktə etdikdə digərləri dəyişir. Birini müstəqil etmək üçün {{ui:Komponent yarat}} və sonra {{ui:Unikal et}} düyməsinə klikləyin. Bax: [Problemlərin həlli](topic:troubleshooting#editing-one-group-changed-another).
- Komponentlər divarlarda açılış kəsmir və üzlərə yapışmır; hazır komponentlər kitabxanası yoxdur. Siz öz komponentlərinizi yaradırsınız və ya idxal edirsiniz.
- İdxal edilmiş fayllar qrup kimi gəlir. Collada faylları öz qruplarını və komponentlərini daxilində saxlayır.
