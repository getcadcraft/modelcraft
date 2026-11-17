---
title: Kütləni BimCraft-a göndərin
summary: İtələ-çəkli kütlələri BimCraft-a kütlə variantları kimi göndərin; hər bərk cisimdən mərtəbələr, oturacaq, ümumi mərtəbə sahəsi və həcm hesablanır.
keywords: kütlə, konsept, variantlar, bimcraft, ifc, bim, itələ-çək, mərtəbələr, qatlar, ümumi mərtəbə sahəsi, oturacaq, həcm, göndərmək, təhvil vermək, bina kütləsi, mərhələ 2
from: 73c51f3f
---

## Nə edəcəksiniz

İtələ-çək ilə modelləşdirdiyiniz blokları BimCraft-ın anladığı kütlə variantlarına çevirin ki, konsept bina modeli kimi davam etsin.

## Başlamazdan əvvəl

Hər kütləni **qrup** və ya **komponent** edin və ad verin. Hər biri bir variant olur. Sərbəst həndəsə göndərilmir.

## Göndərin

1. Göndəriləcək qrupları seçin. Heç nə seçilməyibsə, bütün üst səviyyə qrup və komponentlər göndərilir.
2. {{ui:İxrac}} seçin, sonra {{ui:BimCraft-a kütlə…}}.
3. {{ui:Variantlar dəstinin adı}} və {{ui:Mərtəbə hündürlüyü}} yazın.
4. Siyahını yoxlayın: hər variantın mərtəbələri, oturacağı, ümumi mərtəbə sahəsi və həcmi.
5. Variantlarla BimCraft-ı yeni sekmədə açmaq üçün **BimCraft-a göndər**, və ya faylı yükləyib özünüz orada açmaq üçün {{ui:IFC kimi saxla}} seçin.

BimCraft-da variantlar "Modeldə kütlə variantları" altında sadalanır; orada birini cari variant edib divarlara və döşəmələrə çevirmək olar.

## Bərk cisim necə kütləyə çevrilir

- **Mərtəbələr** bərk cismin hündürlüyünün mərtəbə hündürlüyünə bölünməsi ilə tapılır, yuvarlaqlaşdırılır və ən azı bir olur. Mərtəbələr bərk cismin hündürlüyünü bərabər bölüşür, ona görə 10 m-lik blok 3 m-lik mərtəbələrlə 3 mərtəbə, hər biri 3,33 m olur.
- **Mərtəbənin sahəsi** bərk cismin o mərtəbə səviyyəsindəki öz üfüqi kəsiyinin sahəsidir. Geriyə çəkilən blokun yuxarı mərtəbələri kiçik olur, ümumi mərtəbə sahəsi isə onların cəmidir.
- **Oturacaq** bərk cismin bazasının bir az üstündəki kəsiyin konturudur.
- **Həcm** bərk cismin öz həcmidir.

IFC faylında hər variant bina elementi proxy-sidir (oturacaq bərk cismin hündürlüyünə qədər qaldırılıb), hər mərtəbə üçün mərtəbənin ümumi sahəsini daşıyan bir məkanla. Bütün variantlar bir binanı paylaşır, ən hündür variant qədər mərtəbə ilə.

## Sadələşdirilmiş formalar

Sadə, şaquli blok olduğu kimi göndərilir. Digər hər şey də göndərilir, siyahı isə formanın niyə sadələşdirildiyini göstərir:

- **Mərtəbələrinin hamısı bazası qədər deyil** (geri çəkilir və ya meyillidir): BimCraft-da kütlə bazanın konturudur, tam hündürlüyə qaldırılıb, lakin mərtəbə sahələri və həcm bərk cisminin öz dəyərləridir.
- **Bərk cisim qapalı deyil**: bağlana bilməyən kəsikləri olan mərtəbələr ölçülmür və heç nə sayılır. Tam rəqəmlər üçün bərk cismi bağlayın ({{ui:Obyekt məlumatı}} "Bərk cisim: Bəli" deyir).
- **Bazasının bir neçə konturu var**: ən böyüyü oturacaq kimi götürülür.

## Bilmək yaxşıdır

- {{ui:IFC for BimCraft (.ifc)}} fərqli ixracdır: yalnız formaları və adları göndərir, mərtəbə və sahə olmadan.
- Heç nə yüklənmir. Fayl bu kompüterdəki BimCraft sekmasına verilir.
