---
title: Dayaqlar, divar qalınlığı, oyma və təmir
summary: Çapın dayaqlara harada və təxminən nə qədər ehtiyacı olduğunu görün, çap üçün çox nazik divarları tapın, hissəni drenaj deşikləri ilə divarın qalınlığına qədər oyun və toru siyahıya salınmış hər düzəlişlə təmir edin.
keywords: 3d çap, dayaqlar, dayaq önizləməsi, konsol çıxıntı, overhang, ağac dayaqlar, sütun dayaqları, divar qalınlığı, nazik divarlar, çox nazik, nozzle, oyma, oyulma, qabıq, drenaj deşiyi, qatran, təmir, torun düzəldilməsi, manifold deyil, çevrilmiş üzlər, deşiklər, kiçik qabıqlar, özü ilə kəsişmə, üst-üstə düşmə, birləşdirmə
from: 286bde26
---

Modeli 3D printerə hazırlamaq üçün dörd alət. {{ui:Export}} › {{ui:Check for 3D printing (STL or 3MF)…}} açın; dialoqdakı **Çap alətləri** sətrində {{ui:Supports preview}}, {{ui:Wall thickness}}, {{ui:Hollow}} və {{ui:Repair}} var. Hər biri görünüşün üstündə kart kimi açılır; {{ui:Close}} (xaç) onu və onun işarələrini götürür. Eyni anda bir kart göstərilir.

Hər alət çap olunana tətbiq olunur: seçim, seçim yoxdursa, görünən hər şey. {{ui:Hollow}} və {{ui:Repair}} bir qrup, komponent və ya tor seçilməsini tələb edir, çünki onlar onu dəyişir.

## Dayaqların önizləməsi

Şaquli vəziyyətdən **konsol bucağından** çox kənara meyilli üzlər qırmızı kölgələnir və onlardan (narıncı) masaya qədər, ya da onların altındakı model hissəsinə qədər sadə dayaqlar çəkilir.

- **Konsol bucağı**: 45° əksər printerlərin dayaqsız idarə etdiyi bucaqdır. Yaxşı körpü quran printer üçün onu artırın.
- **Sütunlar**: hər konsol altında hər 3 mm-dən bir düz sütun. Təxmin onları 15% dayaq naxışı kimi sayır.
- **Ağac**: yaxın nöqtələr öz ortalarının altında bir gövdədə birləşir; heç bir budaq 45°-dən çox meyilli deyil. Ağaclar adətən daha az material tutur və masaya daha az yerdə toxunur.

Kart dayaq tələb edən səthin nə qədər olduğunu, neçə dayaq nöqtəsi olduğunu və onların təxminən nə qədər material tutduğunu deyir. Modelin üzərində (masada yox) duran dayaqlar sayılır: onlar orada izlər qoyur. {{ui:Settings}}-də printer masası seçildikdə, masa modelin altında çəkilir.

:::note
Bu önizləmədir, slayser deyil: real dayaqlara slayseriniz qərar verir. Çox böyük konsolda dayaq nöqtələri önizləmə tez qalsın deyə daha geniş yayılır; kart bunu deyir.
:::

## Divar qalınlığı

Hər üz bərk cisim boyunca digər tərəfə qədər düz ölçülür. **İcazə veriləcək ən nazik divar**dan az olan divarlar qırmızıdır, onun bir yarım mislindən az olan divarlar isə narıncıdır: onlar çap olunur, lakin zəif çıxa bilər.

Nazik sahələr ən nazikdən başlayaraq siyahıya salınır, hər birinin nə qədər nazik və nə qədər böyük olduğu ilə. {{ui:Show}} kameranı ona çevirir.

Printer nozzle-nin təxminən iki eni qədər nazik divar yarada bilmir: ümumi 0.4 mm nozzle üçün 0.8 mm (başlanğıc). Qatran printerləri daha az idarə edir; printerinizin təlimatına baxın.

Çox böyük modeldə yalnız bəzi üzlər şüa atır, qalanları isə qonşularının qalınlığını götürür; kart neçəsinin ölçüldüyünü deyir.

## Oyma

Oyma xarici tərəfi olduğu kimi saxlayır və daxili hissəni çıxarır, divarları siz istədiyi qədər qalın qoyur. Qatran çapları daha az qatran istifadə edir və çap platformasını daha az dartır; filament çapları isə doldurmanın tələb edəcəyindən daha az plastik istifadə edir.

1. Qrupu, komponenti və ya toru seçin, sonra {{ui:Hollow}} açın.
2. **Divarı** (başlanğıc üçün 2 mm) və **drenaj deşiklərinin** nə qədər geniş olduğunu təyin edin.
3. Qatran çapı üçün {{ui:Place a drain hole}} düyməsinə klikləyin, sonra deşiyin olacağı modelin xarici tərəfinə klikləyin: aşağıda, çap platformasına yaxın, ki, maye qatran axıb çıxsın. Lazım olan qədər yerləşdirin; hər biri mavi dairə kimi görünür və {{ui:Remove}} ilə siyahıya salınır.
4. {{ui:Preview}} oymanın nə qədər çıxardığını deyir.
5. {{ui:Hollow it}} dəyişikliyi edir: bir addım, onu {{key:Mod+Z}} geri qaytarır.

Nəticə 3D çap yoxlamasının qəbul etdiyi bir bağlı bərk cisimdir: ModelCraft əvvəlcə onu yoxlayır və keçməsə heç nəyi dəyişmir. Model iki divardan nazik olan yerdə o, bərk qalır. Nəticə düz tərəfləri tək üzlər olan qrupdur, belə ki onu {{ui:Push/pull}} ilə modelləşdirməyə davam edə bilərsiniz; incə şəbəkədə oyulmuş əyri hissə adətən bunun üçün çox üzə malik olur və əvəzinə tor olur; status sətri hansının olduğunu deyir.

:::tip
Əksər formalar üçün daxili tərəf xarici tərəfin məhz divar qədər içəri sürüşdürülmüşüdür. Künclər və ya nazik hissələr bunu qeyri-mümkün etdikdə, ModelCraft bunun əvəzinə incə şəbəkədə xarici tərəfi divarın məsafəsində izləyir; kart onda nə qədər yaxın olduğunu deyir (millimetrin kəsrinə qədər dəqiqliklə).
:::

## Təmir et

{{ui:Repair}} seçilmiş hissəyə printerin slayserinin baxacağı kimi baxır, təhlükəsiz düzəldə biləcəyini düzəldir və hər düzəlişi siyahıya salır:

| Düzəldir | Bu nə deməkdir |
|---|---|
| Sahəsi olmayan üçbucaqlar | kənarda qalır |
| İki dəfə çəkilmiş üçbucaq | bir nüsxə saxlanılır; özü ilə arxa-arxaya çəkilmiş üz (qalınlığı olmayan) silinir |
| 0.5 mm-dən kiçik sərbəst parçalar | silinir |
| Yanlış istiqamətə baxan üçbucaqlar | qonşularına uyğun çevrilir |
| Deşiklər, düz və ya əyri | hər deşiyin ortasından yeni üçbucaqlar yelpəyi ilə bağlanır |
| İçəri-xaric çevrilmiş hissə | xaricə çevrilir (başqa hissənin içindəki oyuq olduğu kimi qalır: o, içəriyə baxmaq üçün nəzərdə tutulub) |

{{ui:Fix the safe ones}} hamısını bir addımda edir, onu {{key:Mod+Z}} geri qaytarır, və status sətri hər düzəlişi siyahıya salır. Düzəldilmiş hissə düz tərəfləri tək üzlər olan qrupa çevrilir. Əgər hələ də bağlanmırsa (**Sizin üçün qalanlar** altında nəsə qalır), ya da qrup üçün çox üzə malik olardı, o, əvəzinə tora çevrilir: onun üzləri üçbucaq qalır və düz tərəflər yenə də düz görünür. Status sətri hansının olduğunu deyir. {{ui:Join overlapping parts}} eyni qayda ilə işləyir.

Təhlükəsiz düzəldilə bilməyəni **Sizin üçün qalanlar** altında siyahıya salınır və görünüşdə bənövşəyi rənglə işarələnir, {{ui:Show}} ilə:

- **Üç və ya daha çox üzün birləşdiyi kənarlar**: hansı üzün aid olduğunu seçin və qalanlarını silin.
- **Özündən keçən hissə**: həmin hissəni köçürün və ya yenidən çəkin. Bax: [Üzləri kəsişdirmək](topic:intersect).
- **Bağlamaq üçün çox böyük və ya çox dolaşıq deşiklər**: onların üzərində üzlər çəkin.
- **Üst-üstə düşən ayrı hissələr**: slayserlər onları hər halda birləşdirir. {{ui:Join overlapping parts}} onları bir bağlı gövdəyə çevirir (görüşdükləri yerdə üzləri yenidən qurur, ona görə o ayrı düymədir və heç vaxt sizin üçün edilmir).

İtələ/çək qrupları üçün siz həmçinin {{ui:Entity info}} › {{ui:Show problems}} / {{ui:Fix}} altında bir-bir də düzəldə bilərsiniz; bu, çəkdiyiniz üzləri saxlayır. Bax: [Bərk alətlər](topic:solids).

Əlaqəli: [3D çap üçün modeli hazırlayın](topic:print-3d) · [Başlanğıc üslubu](topic:beginner) · [Hələ hazır deyil](topic:not-built-yet#3d-printing)
