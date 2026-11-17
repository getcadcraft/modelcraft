---
title: ModelCraft parametrləri
summary: Tanıdığınız açar üslubunu seçin, kamera düymələri olmadan izləmə panelində orbit və sürüşdürmə edin, tutmanı və cisim toqquşmalarını yandırın və ya söndürün.
keywords: parametrlər, üstünlüklər, idarəetmə, açar üslubu, açar xəritəsi, qısayollar, blender, izləmə paneli, touchpad, çarx, orbit, sıxma, tutma, tutmaq, toqquşma, üst-üstə düşmə, kəsişmə, içindən keçmə
from: caf77d5b
---

Tətbiq panelindəki dişli simvolu və ya {{key:Mod+,}} ilə {{ui:Parametrlər}} açın. Birinci sekmə, {{ui:ModelCraft}}, bu tətbiqə aid parametrləri saxlayır; {{ui:Ümumi}} isə hər CadCraft tətbiqinin paylaşdığı parametrləri saxlayır (mövzu, alətlər paneli, panellər). ModelCraft parametrləri yalnız bu tətbiqdə mövcuddur: onları burada dəyişirsiniz və bu brauzer onları yadda saxlayır.

## İdarəetmə: hansı açarlar və siçan düymələri

İki açar üslubu var. Onları burada dəyişin: baxışın aşağı sağında {{ui:Açarlar: İtələ-çək}} / {{ui:Açarlar: Modeler}} ilə, və ya alətlər panelindəki {{ui:Daha çox}} menyusunun sonunda.

- **İtələ-çək üslubu** (başlanğıc; SketchUp kimi itələ-çək modelləyicilərinin hərfləri): hərf alət seçir: {{key:L}} xətt, {{key:R}} düzbucaqlı, {{key:P}} itələ/çək, {{key:M}} köçür, {{key:Q}} fırlat, {{key:S}} miqyas, {{key:G}} komponent yarat. Bax: [Açarlar və siçan hərəkətləri](topic:keyboard).
- **Modeler üslubu** (Blender kimi mesh modelləyicilərinin açarları): əvvəl seçin, sonra seçilmişə dərhal təsir edin. {{key:G}} onu köçürür, {{key:R}} fırladır və {{key:S}} miqyaslayır, göstəricinin olduğu yerdən — birinci klik yoxdur. Köçürülərkən {{key:X}}, {{key:Y}} və ya {{key:Z}} qırmızı, yaşıl və ya mavi oxu kilidləyir, yazdığınız rəqəm məsafəni təyin edir (və ya dərəcəni, ya da əmsalı), klik və ya {{key:Enter}} onu yerləşdirir; {{key:Esc}} və ya sağ klik onu geri qaytarır. Sonra yenidən {{ui:Seç}} alətinə qayıdırsınız.

Açar üslubu menyu üslubu ilə eyni seçimdir: Modeler açar üslubu {{ui:Modeler}} menyu üslubudur və birini seçmək digərini də seçir. Bax: [Menyular, açarlar və siçan](topic:menus-keys-and-mouse). Modeler-in tam siyahısı [Açarlar və siçan hərəkətləri](topic:keyboard#modeler-keys) bölməsindədir. Alətlər panelindəki və başlanğıc kartdakı ipuçları seçdiyiniz üslubu izləyir.

## Çarx: siçan çarxı və ya izləmə paneli

- **Özü müəyyənləşdirsin** (başlanğıc): ModelCraft çarxı izləyir. Yan və ya incə çarx, izləmə panelinin göndərdiyi kimi, orbit edir; tam çarx addımları yaxınlaşdırır.
- **Siçan çarxı**: çarx həmişə göstəricinin olduğu yerə yaxınlaşdırır.
- **İzləmə paneli**: iki barmaqla sürüşdürərək orbit edin, {{key:Shift}} basıb sürüşdürərək sürüşdürün, sıxaraq yaxınlaşdırın. {{ui:Orbit}}, {{ui:Sürüşdür}} və {{ui:Yaxınlaşdır}} düymələrinə heç vaxt ehtiyacınız yoxdur.

Sıxma hər seçimdə yaxınlaşdırır. Əgər "Özü müəyyənləşdirsin" siçanınız və ya izləmə panelinizə görə səhv təxmin edərsə, sahib olduğunuzu seçin.

:::tip
Modeler üslubunda {{key:Alt}} basıb sürükləməklə də orbit edə, {{key:Alt+Shift}} ilə sürükləməklə sürüşdürə bilərsiniz — orta düyməsi olmayan noutbukda əlverişlidir.
:::

## Tutma

**Nöqtələrə, kənarlara və oxlara tutun** (başlanğıcda aktiv) göstəricini son nöqtələrə, orta nöqtələrə, kənarlara, bələdçilərə və qırmızı, yaşıl və mavi oxlara çəkir — bax: [Nəticələndirmə](topic:inference). Başqa həndəsənin yaxınlığında bir şeyi sərbəst yerləşdirmək istədiyiniz zaman onu söndürün ki, yerindən tullanmasın. Tutma söndürülmüş halda da üzlər, zəmin və ox kilidləri işləyir.

Baxışın aşağı sağındakı {{ui:Tutma}} düyməsi bu sessiyanın işi üçün eyni şeyi edir (o da yadda saxlanılır). Modeler üslubunda {{key:Shift+Tab}} onu dəyişir.

## Cisimlər toxunduqları yerdə dayanır

**Cisimlər toxunduqları yerdə dayansın** (başlanğıcda aktiv) divarın başqa divardan keçirilməsinin qarşısını alır. {{ui:Köçür}} ilə (və {{key:G}} ilə, və {{key:Mod+D}} ilə yapışdırıb sonra köçürməklə) seçim digər cisimə qədər sürüşür və ona toxunaraq dayanır; {{ui:İtələ/çək}} ilə üz digər cismlə qarşılaşdığı yerdə dayanır. Bir şeyin üstündə durmaq və onun boyu sürüşmək icazəlidir — yalnız içəri keçmək dayandırılır. Başlayarkən artıq üst-üstə düşmüş şeylər hələ də bir-birindən ayrıla bilər.

Məqsədli olaraq bir şeyi keçirmək üçün aşağı sağda {{ui:Toqquşma}} düyməsinə klikləyin (və ya parametri söndürün), köçürməni edin və yenidən klikləyin.

:::note
Toqquşmalar köçürmə və itələ/çək üçün yoxlanılır. {{ui:Fırlat}} və {{ui:Miqyas}} onları hələ yoxlamır və toxunan sərbəst həndəsə, həmişə olduğu kimi, birləşir: ayrı şeyləri [qruplarda](topic:groups-components) saxlayın ki, ayrı qalsınlar.
:::

## 3D printer çap masası

Printerinizin çap masasının ölçüsü: {{ui:Təyin edilməyib}} (başlanğıc), 180 × 180 × 180, 220 × 220 × 250, 256 × 256 × 256 və ya 300 × 300 × 400 mm. Printerinizin çap həcminə ən yaxın ölçünü seçin. [3D çap üçün yoxlama](topic:print-3d) modelin masadan böyük olduğunu bildirir; {{ui:Təyin edilməyib}} ilə ölçü yoxlanılmır.

## Orbit və sürüşdürmə

**Kursorun altındakına görə orbit edin** (başlanğıcda aktiv): orbit modelin göstərici altındakı hissəsi ətrafında fırlanır, sürüşdürmə isə həmin nöqtəni göstəricidə saxlayır; boş sahə üzərində hər ikisi baxışın mərkəzini istifadə edir. Həmişə baxışın mərkəzi ətrafında orbit etmək üçün onu söndürün. **Orbit sürəti** və **Sürüşdürmə sürəti** 0.25×-dən 3×-ə qədər dəyişir (1× başlanğıcdır) və siçan, izləmə paneli, toxunma və ox düymələrinə tətbiq olunur. Bax: [Orbit, sürüşdürmə və yaxınlaşdırma](topic:orbit-pan-zoom).

## Künc göstəricisi

3D baxışın küncündə nə göstərilir: **Baxış kubu** (başlanğıc; yuxarı sağda — üzə, kənara və ya künca klikləyərək ordan baxın, orbit üçün sürükləyin, kompas halqasını sürükləyərək modeli çevirin), **Ox işarəsi** (aşağı solda kiçik X, Y, Z işarəsi, baxışla birlikdə dönür: X qırmızı, Y yaşıl, Z mavi) və ya **Heç nə**. Bax: [Baxış kubu](topic:view-cube).
