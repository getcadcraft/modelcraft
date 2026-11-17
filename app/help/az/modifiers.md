---
title: Mesh, qrup və ya komponentdə modifikatorlar
summary: Meshi dəyişmədən miqyaslayın, əks etdirin, massivləyin, hamarlayın, faskalayın, kəsin və əyin; eyni yığınla qrupu və ya komponenti təkrarlayın və ya miqyaslayın; hazır olanda daimi edin.
keywords: modifikator, modifikatorlar, yığın, qrup, komponent, miqyas, sabitləmək, mənbəni redaktə et, qeyri-destruktiv, əks etdirmə, massiv, radial massiv, subdivision, subdivision səthi, hamarlama, faska, qalınlaşdırma, bulyan, kəsmək, yerdəyişdirmə, səs-küy, qaynaq, sadələşdirmə, azaltma, qəfəs, kələf, əyri deformasiya, əymək, shrinkwrap, tətbiq et
from: dd5ec1cb
---

**Modifikator** meshin özünü dəyişmədən onun nə göstərdiyini dəyişir. Detalın yarısını əks etdirin və yalnız onu modelləşdirin; qutunu subdivision səthi ilə yumrulaşdırın və qutunu redaktə etməyə davam edin. Modifikatorlar **yığında** yerləşir və yuxarıdan aşağıya doğru sıra ilə işləyir. Gördüyünüz, ixrac etdiyiniz, çap etdiyiniz və render etdiyiniz şey açıq olan hər modifikatorla birlikdə meshdir.

## Modifikator əlavə edin

1. Mesh seçin. Model iş sahəsində onun **Modifikatorlar** bölməsi {{ui:Obyekt məlumatı}} bölməsindədir; Mesh iş sahəsində sağdakı paneldədir.
2. {{ui:Modifikator əlavə edin…}} seçimindən birini seçin. O, yığının altına düşür.
3. Adının altındakı parametrləri dəyişin. Uzunluqlar Dəyər qutusu ilə eyni qiymətləri qəbul edir, ona görə `600mm`, `2'6"` və `(6m)/4` hamısı işləyir.

Hər dəyişiklik bir geri qaytarma addımıdır: {{key:Mod+Z}} onu geri qaytarır.

## Hər modifikatorun düymələri

- Qutucuq onu yandırır və ya söndürür.
- Ekran düyməsi onu görünüşdə göstərir və ya gizlədir (yığında qalır).
- Kamera düyməsi onu vizuallaşdırılmış şəkillərdə və videolarda göstərir və ya gizlədir, ona görə modifikator yalnız renderlər üçün (və ya yalnız görünüş üçün) ola bilər.
- Oxlar onu yığında yuxarı və ya aşağı köçürür. Sıra vacibdir: əvvəl əks etdirmə, sonra subdivision hamar bir birləşmə verir; əvvəl subdivision, sonra əks etdirmə isə vermir.
- {{ui:Tətbiq et}} forması meshin hissəsinə çevirir: üstündəki modifikatorlar və bu modifikator meshin özünə tətbiq olunur və yığını tərk edir. Bir geri qaytarma addımıdır.
- Çarpaz onu silir.

## Modifikatorlar

| Modifikator | Nə edir |
| --- | --- |
| Miqyas | Obyektin başlanğıc nöqtəsi ətrafında miqyaslayır: qırmızı, yaşıl və mavi üçün əmsal. Qrup və ya komponentdə də. |
| Əks etdirmə | Meshin başlanğıcından keçən qırmızı, yaşıl və ya mavi ox üzrə güzgü surətini əlavə edir və yarıların birləşdiyi yerdə birləşdirir. |
| Massiv | Xətt üzrə surət çıxarır (öz ölçüsündə addım, verdiyiniz ədədlərlə vurulur, üstəlik sabit addım), ox ətrafında, və ya modeldəki əyri boyunca. Qrup və ya komponent xətti götürür. |
| Subdivision səthi | Meshi Catmull-Clark subdivision ilə hamarlayır. Kəskin kənarlar kəskin qalır. Renderlər görünüşdən daha çox səviyyə istifadə edə bilər. |
| Faska | Verdiyiniz bucaqdan daha kəskin olan hər kənarı yumrulaşdırır. |
| Qalınlaşdırma | Səthə qalınlıq verir və kənarı bağlayır. |
| Bulyan | Modeldəki başqa obyektlə üst-üstə düşən hissəni kəsir, birləşdirir və ya saxlayır. Hər ikisi bağlı bərk cisim olmalıdır. |
| Yerdəyişmə | Səthi hamar səs-küyə görə içəri və ya xaricə hərəkət etdirir. Eyni toxum hər dəfə eyni qabarcıqları verir. |
| Qaynaq | Verilmiş məsafədən yaxın təpələri birləşdirir. |
| Azaltma | Formanı ən az dəyişdirən üçbucaqları çıxarmaqla payını saxlayır. |
| Hamarlama | Təpələri qonşularına doğru rahatlaşdırır. |
| Qəfəs | Meshi kələflə əyir: kələfin nöqtələrini köçürün, mesh də izləyir. |
| Əyri deformasiya | Meshi modeldəki əyri boyunca, qırmızı, yaşıl və ya mavi istiqamətdə əyir. |
| Shrinkwrap | Hər təpəni başqa obyektin ən yaxın nöqtəsinə köçürür. |

## Qrup və ya komponentdə

Qrup və ya komponent də reseptini saxlaya bilər, ona görə lampanın abajuru bir **Miqyas** və bir abajurun **Massivi** ola bilər və bir ədədi dəyişdirmək lampanı dəyişir.

1. Qrup və ya komponent seçin. {{ui:Obyekt məlumatı}} bölməsində onun **Modifikatorlar** bölməsi yığını sadalayır (əvvəlcə boş).
2. {{ui:Modifikator əlavə edin…}} seçimindən {{ui:Miqyas}} və ya {{ui:Massiv}} seçin. Qrup **orijinal olan, yığınla yerləşdirilən** komponentə çevrilir. Orijinal saxlanılır: onu redaktə edin və hər surət dərhal izləyir.
3. Miqyas qırmızı, yaşıl və mavi üçün əmsal alır (`1, 1, 2` hündürlüyü ikiqat artırır). Massiv surətlərin sayını, nəticənin indiki ölçüsünün payı kimi addımı və uzunluqla əlavə addımı alır.

Yığın orijinalın öz oxları üzrə, başlanğıc nöqtəsi ətrafında yuxarıdan aşağıya işləyir, ona görə sıra vacibdir: 3 m aralı üç surətli Massiv, sonra qırmızıda Miqyas 2, surətləri 6 m aralı qoyur; əvvəl Miqyas, sonra Massiv isə onları 3 m aralı saxlayır. Qutucuq, oxlar və çarpaz meshdə olduğu kimi işləyir; bir modifikator üçün görünüş və kamera düymələri və Tətbiq et işləmir, çünki qrupdakı yığın bir şeydir.

- {{ui:Mənbəni redaktə et}} orijinalı yerində açır. Dəyişikliklər hər surətdə göstərilir; bağladıqda olduğunuz yerə qayıdırsınız.
- {{ui:Modifikatorları sabitlə}} nəticəni sadə kənarlara və üzlərə çevirir və yığını götürür, bir geri qaytarma addımında. Üst-üstə düşən surətlər ayrı həndəsə olaraq qalır: Sabitləmə birləşmə deyil.
- Komponentin surətləri reseptini paylaşır; {{ui:Unikal et}} onu ayırır (orijinal paylaşılan qalır).
- Yığın faylda saxlanılır, surət və yapışdırma ilə və geri qaytarma ilə gedir, və İstifadə olunmayanı təmizlə orijinalı saxlayır. Modifikatorları tanımayan proqram surətləri yenə göstərir.
- Sabitləmədən əvvəl nəticəyə daxil olmaq, partlatmaq, ölçüsünü dəyişmək və ya uzatmaq olmur: növbəti dəyişiklikdə yenidən qurulardı. Hər biri bunu bildirir.
- Limitlər 32 modifikator və 1000 surətdir. Uzanmaq üçün yaradılmış komponent (Uzatma) və yığın hələ bir tərifi paylaşa bilməz.

## Subdivision səthi

Subdivision meshi Catmull-Clark ilə hamarlayır: hər üz dördtərəfli üzlərə çevrilir və hər səviyyə bunun dörd qatını verir. İki-üç səviyyəli qutu artıq yumru forma kimi görünür və siz qutunu redaktə etməyə davam edirsiniz.

- **Görünüşdə səviyyələr** nə qədər hamar olduğunu təyin edir.
- **Renderdə səviyyələr** vizuallaşdırılmış şəkillərin və videoların nə qədər hamar olduğunu təyin edir; renderlər görünüşdən daha çox səviyyə istifadə edə bilər.
- **Renderlər həqiqi hamar səthdə** render olunan meshin nöqtələrini səviyyələrin meylləndiyi limit səthinə qoyur, ona görə hətta iki səviyyə çox kimi hamar render olunur.
- **Kəskinliklər** kənarları kəskin saxlayır: Mesh iş sahəsində kənarları seçin və {{ui:Kəskinlik}} istifadə edin (1 kəskin qalır, 0,5 bir az yumrulaşır, 0 hamardır). Bax: [Meshi redaktə edin](topic:mesh-edit).
- **Böyük meshdə görünüş səviyyəsini aşağı salın:** istədiyiniz səviyyələr bu kompüterin görünüşünün yaxşı idarə edə biləcəyindən çox üz verərsə, görünüş aşağı səviyyə göstərir və bunu deyir. {{ui:Tətbiq et}} həmişə bütün səviyyələri istifadə edir. Neçə üz olacağı [maşınınızın](topic:your-machine) sinfi ilə {{ui:Parametrlər}} › Renderləmə › Sizin maşınınız bölməsində təyin olunur.
- Açıq sərhədlər künclərini saxlayır və kənarlarının xətti üzərində qalır.

## Qəfəs kələfi ilə əymək

1. {{ui:Qəfəs}} modifikatoru əlavə edin və {{ui:Mesh ətrafına qəfəs kələfi əlavə et}} basın. Meshin ətrafında, tellər kimi çəkilmiş 3 × 3 × 3 nöqtəlik kələf görünür.
2. Kələfi Mesh iş sahəsində açın (ikiqat klik edin) və nöqtələrini köçürün. Mesh hamarlıqla izləyir.

:::tip
Kələf digər mesh kimi bir meshdir: işinizi bitirəndə etiketi ilə gizlədin.
:::

## Böyük meshlər

Kiçik yığınlar dərhal hesablanır. Böyük yığın kompüterinizin hər nüvəsində fonda hesablanır: yeni nəticə hazır olana qədər görünüş son nəticəni göstərməyə davam edir. Bulyanlar bərk modelləşdiricini ilk dəfə yükləyir; görünüş bunu bir an bildirir.

## Modifikatorların hələ etmədikləri

- Hər təpə üçün çəkilər (meshə çəkilmiş azalma) Yerdəyişmə, Hamarlama və Shrinkwrap üçün.
- İtələ-çək həndəsəsi üzərində Miqyas və xətti Massivdən başqa modifikatorlar (qruplar və komponentlər): əvvəlcə meshə çevirin ({{ui:Meshə çevir}}). Əks etdirmə, dairəvi və ya əyri massiv, Əyilmə və Daralma qruplar üçün sonra gələcək.
