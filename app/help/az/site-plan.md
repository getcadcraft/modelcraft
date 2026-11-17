---
title: DWG və ya DXF situasiya planında modelləşdirin
summary: CAD situasiya və ya mərtəbə planını zəmində xətlər kimi gətirin, vahid sualına cavab verin və onu üzlərə və kütlələrə izləyin.
keywords: situasiya planı, dwg, dxf, cad, idxal, eskiz, foto eskiz, əl eskizi, salfet eskizi, foto, kağız, qələm rəngləri, dinamik bloklar, görünürlük vəziyyətləri, mətn, ştrixlama, spline, ellips, 3d üz, izləmə, mərtəbə planı, torpaq sahəsi, mülkiyyət xətti, vahidlər, altlıq, kontekst
from: 3415dc96
---

ModelCraft 2D CAD çertyojunun, situasiya planının və ya mərtəbə planının xətlərini gətirə və onları zəmində yerləşdirə bilər ki, üzərində modelləşdirəsiniz.

## Çertyojun idxalı

1. {{ui:Fayl}} qrupunda {{ui:İdxal et}} klikləyin (və ya faylı 3D baxışa buraxın).
2. `.dwg` və ya `.dxf` faylı seçin.

   Böyük DWG bir az vaxt aparır: yüklənənə qədər status sətri "plan.dwg oxunur…" yazır.

3. Çertyojun vahidlərinin nə olduğunu demədikdə "Çertyoj vahidləri" adlı dialoq soruşur: "Bir çertyoj vahidi nədir?" {{ui:Düymlər}}, {{ui:Futlar}}, {{ui:Millimetrlər}} və ya {{ui:Metrlər}} seçin. Əksər ABŞ situasiya planları futla, memarlıq planları düymlə, metrik planlar millimetrlə çəkilir.

   Çertyoj zəmində kənarların qrupu kimi gəlir, seçilmiş vəziyyətdə, və baxış ona yaxınlaşır. Status sətri neçə kənar gəldiyini göstərir, məsələn "Imported site.dwg: 1697 edges on the ground, in a group. Explode it to draw on it directly." (site.dwg idxal edildi: zəmində 1697 kənar, qrupda. Üzərində birbaşa çəkmək üçün {{ui:Parçalayın}}.)

## Nə gəlir

- Xətlər, polixətlər (onların qövsləri də daxil olmaqla), çevrələr və qövslər, və içindəki hər şeylə birlikdə bloklar, yalnız **model məkanından**. Əyrilər qısa düz parçalara çevrilir.
- Xətlər, polixətlər, qövslər, çevrələr, ellipslər və splinelər zəmində düz, kənarlar kimi düşür.
- **Ştrixlamalar** zəmində üzlərə çevrilir, onların adacıqları deşik kimi; beləliklə ştrixlanmış sahəni dərhal itələ/çək edə bilərsiniz.
- **3D üzlər** və bərk doldurmalar üzlərə çevrilir; 3D üzlər öz hündürlüklərini saxlayır.
- **Mətn** (tək sətirli mətn, çoxsətirli mətn və atribut dəyərləri) mətnin öz hündürlüyü, bucağı və düzləşdirməsi ilə sadə tək xətli hərf formasında kənarlar kimi çəkilir. Onun şrifti çertyojun şrifti deyil, ona görə sözlər bir az uzun və ya qısa ola bilər. Hərf forması olmayan simvollar kiçik qutular kimi çəkilir və sayılır.
- **Ölçülər** çertyojun göstərdiyi kimi çəkilir (xətləri, ox ucları və mətni kənarlar və üzlər kimi).
- **Dinamik bloklar** çertyojun göstərdiyi kimi gəlir: hər yerləşdirilmiş blok onunla saxlanmış görünürlük vəziyyətində və yalnız həmin vəziyyətin xətləri ilə. Status sətri onları göstərilən vəziyyətlərlə və hər birinin digər vəziyyətləri ilə sadalayır, məsələn "Receptacle shown as Duplex ×38, GFI ×7 (states: Duplex, GFI)". ModelCraft vəziyyətləri dəyişmir.
- **3D cisimlər, bölgələr və gövdələr** (çertyojun ACIS məlumatı) öz qrupları kimi gəlir: qapalı cisim bərk cisim kimi, bölgə və ya açıq gövdə üzlər kimi. Düz üzlər tam gəlir; əyri üzlər (silindrlər, konuslar, kürələr, torlar, sadə spline səthləri) yumşaq kənarlı kiçik üçbucaqlar kimi, beləliklə yalnız cismin öz kənarları görünür. Başqa növ səthdəki üz buraxılır və siyahıya alınır: "Not drawn yet (3D solids): …"
- İdxal edilməyənlər: nöqtələr, cədvəllər, çoxlu nişanlar, şəkillər və digər obyekt növləri. Status sətri onları növünə görə sadalayır, məsələn "Not imported: 12 POINT." Layout-da (kağız məkanında) olan hər şey də siyahıya alınmadan buraxılır.
- Qatlar saxlanmır: bütün xətlər eyni cür gəlir.

Çertyoj öz başlanğıcından uzaqdırsa (məsələn, dövlət müstəvi koordinatları), yenə idxal olunur, lakin ModelCraft-ın başlanğıcından uzaqda düşə bilər. Başlanğıcdan 10,000 km-dən çox uzaq çertyojlar rədd edilir: əvvəlcə CAD proqramında çertyoju 0,0-a yaxın köçürün.

## Üzlərə izləmək

İdxal edilmiş xətlər çox vaxt özlüyündə təmiz şəkildə üzlərə bağlanmır. İki iş üsulu:

**Planı altlıq kimi saxlayın (tövsiyə olunur)**

1. Planı öz qrupunda buraxın.
2. {{ui:Düzbucaqlı}} və {{ui:Xətt}} ilə binanızı planın üstündən çəkin, künclərinə ("Son nöqtə") və kənarlarına ("Kənar üzərində") tutaraq.
3. Üzlərinizi {{ui:İtələ/çək}} ilə qaldırın. Plan altda toxunulmaz qalır və bütün qrupu sonra bir klikdə silə bilərsiniz.

Tutma qruplar arasında işləyir: planı açmadan onun künclərinə tuta bilərsiniz.

**Planın öz xətlərində çəkin**

1. Plan qrupunu seçin və {{ui:Parçalayın}} klikləyin. Onun xətləri sərbəst kənarlara çevrilir.
2. Qapalı kontur üzə çevrilməli olduqda, onun kənarlarından birinin üzərinə {{ui:Xətt}} ilə bir xətt çəkin, bir künc-dən digərinə. Kontur qapalı və düz olduqda üz adətən dolur. Dolmazsa, konturda boşluq və ya üst-üstə düşmə axtarın və onun üzərindən çəkin.
3. {{ui:İtələ/çək}} ilə qaldırın.

Bu, təmiz plan üzərində ən yaxşı işləyir. Qarışıq geodeziya planında isə üstündən izləmək daha sürətlidir.

## Problemlər

- "Bu ikili DXF-dir. Onu ASCII DXF kimi saxlayın və yenidən cəhd edin." CAD proqramından DXF-i ASCII (mətn) kimi yenidən saxlayın.
- "…model məkanında idxal ediləcək xətt, qövs və ya çevrə yoxdur." Çertyojun ya hamısı layout-dadır, ya da yalnız mətn və ştrixlamalar var.
- "Bu çertyoj oxuna bilmədi (…). Zədələnmiş ola bilər, və ya oxucunun dəstəkləmədiyi DWG versiyasında saxlanılmış ola bilər…" Mötərizələr səbəbi göstərir, məsələn "DWG version AC1009 is not supported". CAD proqramından onu DXF kimi, və ya AutoCAD 2000-dən 2018-ə qədər DWG kimi saxlayın.
- Plan səhv ölçüdədir: səhv vahid seçmisiniz. {{key:Mod+Z}} ilə geri qaytarın və yenidən idxal edin, ya da qrupu düzgün əmsalla [miqyaslayın](topic:rotate-scale) (futla düym arasında 12, düymlə millimetr arasında 25.4).

Səviyyə xətlərini heykəltəraşlıq edə biləcəyiniz zəminə çevirmək üçün bax: [Relyef](topic:terrain).

## Əl eskizinin fotosundan

**Fayl › Eskiz fotosunu idxal edin…** kağız üzərində eskizin fotosunu çəkir (JPEG, PNG və ya TIFF, telefondan birbaşa da olar) və zəmində eyni növ kənarlar yaradır. Kağızın növünü deyin (və ya onu vərəqi tapmağa buraxın, A4 kimi götürülür) və eskizin miqyasını, məsələn 1 : 100. Kağızın kənarı tapılır və foto düzləşdirilir, mürəkkəb xətlərə və qövslərə izlənir, hər qələm rəngi (qara, qırmızı, mavi, yaşıl) isə öz etiketi (**Eskiz qara**, **Eskiz qırmızı**, …) ilə öz qrupuna çevrilir, hamısı fotonun adını daşıyan bir qrupun içində. Bu bir geri qaytarma addımıdır və hər şey bu kompüterdə baş verir: heç yerə göndərilmir.

Kağız kənarı tapılmadıqda bütün foto vərəq kimi qəbul edilir və status sətri bunu bildirir: tanıdığınız bir şeyi ölçün və qrup yanlışdırsa miqyaslayın. Xətləri yuxarıdakı kimi üzlərə izləyin.
