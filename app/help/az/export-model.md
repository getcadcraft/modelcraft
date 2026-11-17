---
title: Modeli digər proqramlar üçün ixrac edin
summary: Render, veb, 3D çap, BIM və BimCraft üçün düzgün ixracı seçin və hər birinin nəyi saxladığını yoxlayın.
keywords: çap, 3mf, pdf, kağız, şəkil, png, təsvir, ekran görüntüsü, render, görünüşü saxla, ixrac, paylaş, vizuallaşdırma, gltf, glb, collada, dae, obj, stl, 3D çap, ifc, bim, bimcraft, göndər, digər proqramlar
from: 9e13e80d
---

İxrac modelin nüsxəsini başqa formatda yaradır. `.modelcraft` faylınızı da saxlayın: o, hər şeyi saxlayan yeganə fayldır və ModelCraft-ın birbaşa açdığı yeganə fayldır.

## İxrac

1. Əvvəlcə saxlayın ({{key:Mod+S}}), beləliklə iş faylınız təhlükəsizdir.
2. {{ui:Fayl}} qrupunda {{ui:İxrac}} basın.
3. Formatı seçin. Brauzer onu modelin adı ilə yükləyir.

Bütün model ixrac olunur. Bir hissəni ixrac etmək üçün: saxlayın, qalanını silin, ixrac edin, sonra geri qaytarın və ya faylı yenidən açın.

## Hansı format

| İstədiyiniz | Seçin | Qeydlər |
|---|---|---|
| Onu başqa 3D modelləşdiricidə açmaq | {{ui:Collada (.dae)}} | Qrupları, iç-içə qrupları, komponentləri (paylaşılan, kopyalanmayan), adları və rəngləri saxlayır. Z yuxarı, metrlə. |
| Render etmək və ya vizuallaşdırma proqramında istifadə etmək | {{ui:OBJ (.obj)}} və ya {{ui:glTF binar (.glb)}} | OBJ ən geniş oxunandır; hər qrup yerləşdirməsini ayrı obyekt kimi yazır, lakin rəngləri və paylaşılan komponentləri yoxdur. glTF komponentləri və rəngləri saxlayır. |
| Vebə, oyun mühərrikinə və ya AR-a qoymaq | {{ui:glTF binar (.glb)}} | Hər şeyi ehtiva edən bir fayl. |
| 3D çap etmək | {{ui:3D çap üçün yoxlayın (STL və ya 3MF)…}} | Modelin bağlı olduğunu və üzlərin düzgün istiqamətdə olduğunu yoxlayır, sonra STL və ya 3MF yazır, millimetrlə. Bax: [Modeli 3D çapa hazırlayın](topic:print-3d). {{ui:Çap üçün STL (.stl, millimetrlə)}} bütün modeli yoxlama olmadan yazır. |
| BimCraft və ya başqa BIM proqramında açmaq | {{ui:BimCraft üçün IFC (.ifc)}} | Hər ən üst səviyyə qrup və ya komponent bir bina elementinə çevrilir. |

Status sətri hər ixracı təsdiqləyir, məsələn: "House.stl ixrac edildi (millimetrlə)." və ya "House.dae ixrac edildi (Collada 1.4.1, Z yuxarı, metrlə; komponentlər paylaşılan qalır)."

## İxracdan əvvəl

- **Obyektləri qruplaşdırın.** Collada, glTF və IFC qrupları və komponentləri ayrı obyektlər kimi saxlayır. Qruplaşdırılmamış həndəsə bir yığın kimi çıxır; IFC-də "Loose geometry" adlı bir element olur.
- **Adlandırın.** Qrup və komponent adları Collada və IFC-yə gedir, beləliklə "North wall" adlı divar "North wall" kimi çatır.
- **Üzlərin istiqamətini yoxlayın.** Xaricdə boz-mavi görünən üzlər ixracda içəriyə baxacaq. {{ui:Üzü çevir}} ilə düzəldin (bax: [Silin və təmizləyin](topic:erase#a-face-facing-the-wrong-way)).
- **Çap üçün,** hissələri bağlı bərk cisimlər edin: hər qrupu seçin və {{ui:Obyekt məlumatı}} "Bərk: Bəli" yazdığını yoxlayın. Sonra modeli çap ölçüsünə miqyaslayın, ya da çap proqramında miqyaslayın.

## Modeli BimCraft-a göndərmək

1. Hər bina hissəsini qrup və ya komponent edin və adlandırın.
2. {{ui:İxrac}} seçin, sonra {{ui:BimCraft üçün IFC (.ifc)}}.
3. Yüklənmiş `.ifc` faylını BimCraft-da açın.

Konseptual kütlə üçün bunun əvəzinə {{ui:İxrac}} › {{ui:BimCraft-a kütlə…}} istifadə edin: hər qrup mərtəbələri, mərtəbə sahələri və həcmi ilə kütlə variantı kimi gedir. Bax: [Kütləni BimCraft-a göndərin](topic:massing-to-bimcraft).

Sadə IFC ixracının iki tətbiq arasında birbaşa əlaqəsi yoxdur. IFC-də bir mərtəbə olur və hər element ümumi bina elementi (building element proxy) olur, tipi və xassələri olmadan: yalnız forma və ad daşıyır. Bağlı qruplar bərk formalara çevrilir; açıqlar isə səthlərə.

## Üzsüz xətlər

Heç bir üzün hissəsi olmayan kənarlar (bələdçi kimi xətlər, idxal olunmuş sahə planı) OBJ və Collada-ya xətt kimi gedir. glTF və STL üçün yer yoxdur və onları buraxır. Bələdçilər və səhnələr heç bir formata ixrac edilmir.

## Görünüşü şəkil kimi saxlamaq

{{ui:İxrac}} › {{ui:Görünüşün şəkli (.png)}} 3D görünüşün göstərdiyini ekrandakı ölçüsündə dəqiq saxlayır. {{ui:İki dəfə böyük şəkil (.png)}} onu iki dəfə enli və iki dəfə hündür saxlayır (çap və ya kəskin slayd üçün); ölçülər və işarələr həmin ölçüdə yenidən çəkilir, uzadılmır.

Gündüz kimi görünən şəkil üçün (səma, günəş, yumşaq kölgələr, şüşə) bunun əvəzinə {{ui:İxrac}} › {{ui:Şəkil render edin…}} istifadə edin: bax [Şəkil render etmək](topic:render).

Təmiz şəkil üçün əvvəlcə [təqdimat görünüşünü](topic:styles-shadows#presentation-view) ({{key:Shift+P}}) aktivləşdirin: oxlar, bələdçilər, kəsik konturları və seçim çıxarılır. Kameranı, üslubu və kölgələri istədiyiniz kimi qurun, ya da [səhnəyə](topic:scenes) keçin; səhnələrinizin hərəkətli filmini saxlamaq üçün {{ui:Səhnələr}} panelində {{ui:Animasiyanı ixrac et}} istifadə edin.

## Görünüşü çap etmək və ya PDF kimi saxlamaq

- {{ui:İxrac}} › {{ui:Görünüşün PDF-i (.pdf)}} bir səhifəlik PDF saxlayır: görünüş ekrandakı ölçüsünün iki qatında, ölçüləri ilə birlikdə, A4 səhifədə (model fut və dyuymdadırsa Letter), üfüqi, altında fayl adı, tarix və vahidi göstərən xətt ilə.
- {{ui:İxrac}} › {{ui:Görünüşü çap et…}} eyni səhifəni brauzerinizin çap dialoqu qarşısına qoyur. Printer seçin və ya "PDF kimi saxla" seçin.

Səhifə görünüşü olduğu kimi göstərir: perspektiv görünüşdə miqyas yoxdur. Miqyaslı çertyoj üçün {{ui:Perspektiv}} söndürün və {{ui:Üst}} və ya {{ui:Ön}} görünüşündən baxın, vacib ölçülər üçün [ölçülər](topic:dimensions) əlavə edin. [Təqdimat görünüşü](topic:styles-shadows#presentation-view) oxları, bələdçiləri və seçimi çıxarır; ölçülər qalır.
