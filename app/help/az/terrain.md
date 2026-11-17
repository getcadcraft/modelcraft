---
title: Relyef: horizontallardan yer və onun formalaşdırılması
summary: Yer səthini horizontal xətlərdən və ya şəbəkə kimi yaradın, sonra yumşaq fırça ilə qaldırın və ya endirin.
keywords: relyef, yer, landşaft, topoqrafiya, horizontallar, horizontal xətlər, sahə, yamac, təpə, təpəcik, qum qutusu, smoove, heykəlləndir, şaquli planlaşdırma, TIN
from: 407652b3
---

Relyef üçbucaqlardan hazırlanmış yerdir, buna görə istənilən formanı izləyə bilir. O, qrupdur: redaktə etmək üçün ikiklikləyin.

## Horizontal xətlərdən

1. Horizontal xətləri öz hündürlüklərində əldə edin: onları çəkin və ya [situasiya planını idxal edin](topic:site-plan) və hər horizontalı öz səviyyəsinə qaldırın.
2. Onları seçin (bütün horizontalların bütün kənarları).
3. {{ui:Redaktə}} › {{ui:Daha çox}} › {{ui:Seçilmiş horizontallardan relyef}}.

ModelCraft horizontal nöqtələri üçbucaqlarla birləşdirir (TIN) və içindəki hər kənarı yumşaldır ki, yer hamar kölgələnsin. Xətlərin özü qalır; artıq lazım olmadıqda onları silin və ya gizlədin. Çox sıx horizontallar 8 000 nöqtəyə qədər azaldılır.

## Heykəlləndirmək üçün şəbəkə

{{ui:Redaktə}} › {{ui:Daha çox}} › {{ui:Relyef şəbəkəsi…}} en, dərinlik və xana ölçüsü soruşur, sonra klikləcdiyiniz künc yerində düz üçbucaq şəbəkəsi yerləşdirir. Kiçik xanalar daha hamar heykəlləndirir, lakin daha çox üz yaradır (ən çox 200 × 200 xana).

## Heykəlləndirin: yeri qaldırın və endirin

1. Açmaq üçün relyefi ikiklikləyin.
2. {{ui:Redaktə}} › {{ui:Daha çox}} › {{ui:Relyefi heykəlləndir}}. Göstərici altında yerdə fırçanı dairə göstərir.
3. Fırçanın altındakı yeri qaldırmaq üçün yuxarı, endirmək üçün aşağı sürüşdürün. Orta hissə ən çox hərəkət edir və yer dairənin kənarında hamar sıfırlanır, beləliklə təpəciklər və çökəklər hamar çıxır.

Dəqiq hündürlükdə təpə düzəltmək üçün bir dəfə klikləyin, sonra hündürlüyü yazın, məsələn `1.5m` (mənfi onu endirir), və {{key:Enter}} basın. Fırçanı dəyişmək üçün klikləmədən əvvəl uzunluq yazın: `5m` fırçanın radiusunu 5 m edir.

Hər heykəlləndirmə bir geri qaytarma addımıdır.

## Bilmək lazım olanlar

- Heykəlləndirmə yalnız üçbucaq üzləri hərəkət etdirir, buna görə hər üz düz qalır. Əl ilə çəkilmiş üzlər (düzbucaqlılar, çoxbucaqlılar) relyef deyil: alət bunu bildirir.
- Heykəlləndirmə nöqtələri birbaşa yuxarı və aşağı köçürür; nöqtə əlavə etmir. Daha incə detal üçün kiçik xanalı şəbəkə yaradın.
- Relyef hər digər qrup kimi ixrac olunur. IFC-də o, digər hər şey kimi bina elementi (proksi) olur.
