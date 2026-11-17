---
title: 3D çap üçün modeli hazırlayın
summary: Modelin bağlı olduğunu və üzlərin düzgün istiqamətdə olduğunu yoxlayın, ölçüsünə, altına və çıxıntılarına baxın, səhvləri düzəldin və slicer üçün STL və ya 3MF kimi yükləyin.
keywords: 3D çap, 3D çap etmək, printer, çap, slicer, stl, 3mf, su keçirməz, bağlı, manifold, cisim, deşiklər, içəri çevrilmiş, çıxıntı, dəstəklər, əsas, platforma, millimetr, ixrac, düzəltmək, təmir, oyma, platforma ölçüsü, başlanğıc, divar qalınlığı, çap alətləri
from: 948e19af
---

3D printerin slicer-i bağlı forma tələb edir: deşik yoxdur, hər üz xaricə baxır, özü-özünü kəsmir. {{ui:İxrac}} › {{ui:3D çap üçün yoxlayın (STL və ya 3MF)…}} faylı yükləməzdən əvvəl məhz bunu yoxlayır.

## Yoxlayın və yükləyin

1. Çap etmək istədiyinizi seçin: bir və ya bir neçə qrup və ya komponent, ya da bəzi üzlər. Heç nə seçilməyibsə, göstərilən hər şey çap olunur.
2. {{ui:Fayl}} qrupunda {{ui:İxrac}} klikləyin, sonra {{ui:3D çap üçün yoxlayın (STL və ya 3MF)…}}.

   Dialoq bir sətirlə başlayır: "Çapa hazırdır", çapdan əvvəl neçə şeyin düzəldilməsi, ya da əvvəl nəyə baxmaq lazım olduğu. Hər problemin üç hissəsi var: nə səhvdir, niyə vacibdir və nə etmək lazımdır. Sonra millimetrlə ölçü, həcm, üçbucaqların sayı və çap platforması gəlir.

3. Dialoq düzəldilməli şeyləri siyahılayırsa, {{ui:Düzəldilə bilənləri düzəlt}} klikləyin (aşağıya bax). Yoxlama özü yenidən işləyir.
4. {{ui:3MF-i yüklə}} və ya {{ui:STL-i yüklə}} klikləyin.

Çapda görünən şey budur: gizli üzlər, gizli qruplar və komponentlər və gizli etiketdəki hər şey çıxarılır. Ölçülər həmişə millimetrlədir, slicerlərin gözlədiyi vahid, modelin hansı vahidi göstərməsindən asılı olmayaraq.

:::tip
Slicer oxuyursa 3MF-ə üstünlük verin: rəngləri və vahidləri saxlayır. STL-də bunların heç biri yoxdur, slicerlər isə millimetr qəbul edir.
:::

## Yoxlamanın axtardığı şeylər

Bunlar çapı dayandırır və ya pozur, dialoqda "Çapa hazır deyil" yazır:

| Problem | Nə deməkdir | Nə etmək lazımdır |
|---|---|---|
| Üzün yalnız bir tərəfi | Deşik: kənarın bir tərəfində üz var, o biri tərəfdə heç nə yoxdur | Çatışmayan üzü çəkin (boşluğun üzərində xətt çox vaxt bağlayır), ya da aşağıdakı {{ui:Düzəlt}} istifadə edin |
| Üç və daha çox üz tərəfindən paylaşılır | Üzlər bir qanad və ya cismin içində divar kimi birləşir | Daxili üzü silin |
| Üzlər müxtəlif istiqamətlərə baxır | Bəzi üzlər içəri, bəziləri xaricə baxır | İçəri baxan üzləri seçin və {{ui:Obyekt məlumatı}}-nda {{ui:Üzü çevir}} klikləyin |
| İçi xaricə | Bütün bağlı hissə içəriyə baxır | Onun üzlərini seçin və çevirin |
| Özündən keçir | Bir hissə özü ilə qatlanır | {{ui:Redaktə}} › {{ui:Daha çox}} › {{ui:Modellə kəsişdir}}, sonra içini silin. Bax: [Üzləri kəsişdirin](topic:intersect) |

Bunlar xəbərdarlıqlardır: model çap olunur, lakin əvvəl baxın.

- **Ayrı hissələr üst-üstə düşür** və ya **üz-üzə toxunur**: slicerlər adətən onları birləşdirir. Təmiz fayl üçün {{ui:Cisimlər}} › {{ui:Birləşdir}} ilə birləşdirin. Bax: [Cisim alətləri](topic:solids).
- **Aşağıda heç nə düz qalmır**: modeli elə fırladın ki, bir üz platformaya dayansın, əks halda slicer dəstək və ya raft əlavə edəcək.
- **Şaquldan 45°-dən çox bucaq altında uzanır**: bu üzlərə dəstək lazımdır. Dialoq səthin nə qədərinin belə olduğunu deyir.
- **Hər tərəfdən 1 mm-dən kiçik**: ehtimal ki, səhv vahiddə modelləşdirilib. Status sətrində vahidi yoxlayın.

Hissənin içində başqa bağlı qabığın olması (bir-birinin içində qapalı qabıq) normaldır: onun üzləri boşluğa baxır və həcmi çıxılır.

## Problemləri düzəldin

**Problem yerləri** altında dialoq problemi olan hər qrupu və ya komponenti göstərir (qrupda olmayan sərbəst üzlər "Qrupda olmayan üzlər" kimi siyahıya alınır), içindəki problemlə birlikdə. Bir neçə dəfə yerləşdirilmiş komponent bir dəfə siyahıya alınır: onu düzəltmək bütün nüsxələri düzəldir.

- {{ui:Göstər}} o qrupu açır və səhv olan kənarları və üzləri seçir, beləliklə onlar vurğulanır.
- {{ui:Düzəldilə bilənləri düzəlt}} hamısını bir dəfəyə düzəldir: yastı kənarları olan deşikləri bağlayır, forma daxilindəki üzləri və azad kənarları silir və üzləri düzgün istiqamətə çevirir. Bu bir addımdır: {{key:Mod+Z}} onu geri qaytarır. Yoxlama sonra yenidən işləyir və nə qaldığını göstərir.

Düzəldə bilmədiyi şeylər (yastı olmayan kənarları olan deşik, özündən keçən hissə) siyahıda qalır və əllə nə etmək lazım olduğunu göstərir. **Çap alətləri** altındakı {{ui:Təmir et}} daha ileri gedir: yastı olmayan deşikləri bağlayır, sərbəst parçaları və ikiqat üzləri silir, hər düzəlişi siyahıya alır. Bax: [Dəstəklər, divar qalınlığı, oyma və təmir](topic:print-tools#repair). Həm də qrupu bir-bir düzəldə bilərsiniz: onu seçin, sonra {{ui:Obyekt məlumatı}}-nda {{ui:Problemləri göstər}} və {{ui:Düzəlt}} istifadə edin. Bax: [Cisim alətləri](topic:solids).

## Boş hissə

{{ui:Oyma}} **Çap alətləri** altında hissəni verdiyiniz divar qalınlığında oyur, klik etdiyiniz yerlərdə drenaj deşikləri ilə. Bax: [Oyma](topic:print-tools#hollow).

Oyuğu özünüz də çəkə bilərsiniz: hissənin içində, ona toxunmayan, bütün üzləri boşluğa baxacaq şəkildə çevrilmiş bağlı qrup. Yoxlama onu boş kimi sayır və həcmini çıxır; düzəldilməli siyahıya düşmür.

## Printerinizin platforması

Printerinizin platforma ölçüsünü {{ui:Parametrlər}} › {{ui:ModelCraft}} › {{ui:3D printer platforması}} bölməsində seçin. Model platformadan böyük olduqda yoxlama, onu hər iki istiqamətdə fırlatdıqda, xəbərdarlıq edir. Bax: [Parametrlər](topic:settings#3d-printer-bed).

## Çap alətləri

Dialoqun tapıntılarının altında **Çap alətləri** açılır: {{ui:Dayaqların önizləməsi}} (dəstəklərin harada olduğu və təqribən nə qədər), {{ui:Divar qalınlığı}} (çap üçün çox nazik divarlar), {{ui:Oyma}} və {{ui:Təmir et}}. Bax: [Dəstəklər, divar qalınlığı, oyma və təmir](topic:print-tools). {{ui:Çap üçün bölün}} platforma üçün böyük modeli konnektorlar və nömrələnmiş birləşmələrlə hissələrə kəsir: bax [Böyük modeli çap üçün bölün](topic:print-split).

## Yoxlanmayanlar

Yoxlama slayslamır: nozzle-in çəkə bilmədiyi çox kiçik detallar və həqiqi dəstəklər slicerinizin işidir. Bax: [Hələ hazır deyil](topic:not-built-yet#3d-printing).
