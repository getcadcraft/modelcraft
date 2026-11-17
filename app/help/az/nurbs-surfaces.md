---
title: Sərbəst formalı səthlər (NURBS)
summary: Məhsul qabıqları, avtomobil gövdələri və qayıq korpusları üçün hamar əyrilər və səthlər — loft, sürüşdürmə, əyri şəbəkələri, dörd kənarlı yamaqlar, qarışdırmalar, kəsiklər — G0, G1 və G2 davamlılığı dəqiq səthlərdə ölçülür, birləşmə, çıxma və kəsişmə ilə cisimlər, zebra və əyrilik görünüşləri, skana uyğunlaşdırılmış üzlər xətası ölçülmüş şəkildə, və STEP və ya IGES faylları.
keywords: nurbs, skan, tərsinə mühəndislik, uyğunlaşdırma, mesh-dən səthə, nöqtə buludu, stl, kəsik, kəsilmiş, deşik, kəsmək, cisim, cisimlər, boolean, birləşdirmə, çıxma, kəsişmə, fərq, birləşdirmək, bağlı, sərbəst forma, səth, səthlər, b-spline, bspline, əyri, spline, loft, sürüşdürmə, rels, şəbəkə, coons, yamaq, qarışdırma, uyğunluq, davamlılıq, g0, g1, g2, tangens, əyrilik, zebra, nəzarət nöqtələri, düyünlər, dərəcə, step, iges, class A
from: 09887405
---

**Səthlər** paneli məhsul qabıqları, avtomobil gövdələri və qayıq korpusları üçün istifadə olunan hamar əyri və səthlər yaradır: NURBS, digər səth modelləşdiriciləri ilə eyni riyaziyyat. Hər şey göstərilən üçbucaqlar üzərində yox, dəqiq səthlər üzərində ölçülür. Paneldəki ölçülər modelin göstərdiyi vahiddən asılı olmayaraq **millimetrlədir**.

Sağ paneldən açın: {{ui:Səthlər}} › {{ui:Səthlər panelini aç}}. Artıq səthləri olan model onu özü açır.

## Komandanın işləməsi

1. Komandanı basın (məsələn **Loft**). Panel nə lazım olduğunu deyir: nöqtələr, əyrilər, səth kənarı və ya əyri ucu.
2. Onları seçin: 3D görünüşdə klikləyin, ya da siyahıda hər biri yanındakı **Seç** düyməsini (və ya kənar və uc düymələrini) basın. Kənar üçün səthin həmin kənarına yaxın klikləyin.
3. Seçimləri yoxlayın (dərəcə, tolerantlıq, davamlılıq, …) və **Yarat** basın.

Nöqtələrdən əyrilər üçün nöqtələri hər sətirdə bir yazın (`x, y, z` mm ilə) və ya **Görünüşdə nöqtələri seçin**: hər klik çəkiliş alətləri ilə eyni yapışmanı istifadə edir; bitirmək üçün <kbd>Enter</kbd> və ya iki dəfə klik edin, dayandırmaq üçün <kbd>Esc</kbd>.

## Əyrilər

- **Nöqtələrdən əyri** hər nöqtədən keçir. **Nəzarət nöqtələrindən əyri** əvəzinə nöqtələr qəfəsini izləyir.
- **Düyün əlavə et**, **Dərəcəni artır** və **Dərəcəni azalt** əyrinin təsvirini dəyişir, onu köçürmədən (azaltma tolerantlıqdan çox hərəkət edəcəyi halda rədd edir). **Əyrini yenidən qur** ona yeni nəzarət nöqtələri sayı verir və nə qədər hərəkət etdiyini deyir.
- **Əyrini uyğunlaşdır** bir əyrinin ucunu başqasınınkı ilə G0 (toxunma), G1 (eyni istiqamət) və ya G2 (həm də eyni əyrilik) ilə birləşdirir. **Əyrini qarışdır** iki uc arasında yeni əyri əlavə edir.
- **Əyriləri birləşdir** və **Əyrini böl**.

## Səthlər

- İki və ya daha çox əyri ilə **Loft**, iki əyri arasında **Düz səth**, **Əyrini ekstrüziya et**, **Əyrini fırlat**.
- **Bir relslə sürüşdür** profili yol boyunca burmadan aparır; **İki relslə sürüşdür** profilin ucunu hər iki relsdə saxlayır. Sürüşdürmələr uyğunlaşdırılır: status sətri həqiqi sürüşdürməyə nə qədər yaxın qaldığını deyir.
- **Əyri şəbəkəsindən səth** əyrilər şəbəkəsindən keçir (ilk seçimlər profillər, qalanları yol göstəriciləridir). **Dörd kənardan yamaq** künclərində birləşən dörd əyrini doldurur.
- **Səthi uyğunlaşdır** səth kənarını G0, G1 və ya G2 ilə qonşu ilə birləşdirir; **Səthi qarışdır** iki kənar arasında səth əlavə edir.
- **Səthi ofsetlə**, **Səthi uzat** (səth gedişini davam etdirir), **Səthi yenidən qur**, və səthlər üçün düyünlər və dərəcə.

## Keyfiyyətin yoxlanması

**Paylaşılan kənarlar** cədvəli iki səthin paylaşdığı hər kənarı, boşluğu (mm), aralarındakı bucağı (°) və əyrilik sıçrayışını (1/mm) və bunun G0, G1 və ya G2 olub-olmadığını siyahıya alır. İstədiyinizdən pis kənar həm də **Problemlər**də (tətbiq panelindəki ⚠ düyməsi) **Uyğunlaşdır** düzəlişi ilə olur.

**Göstər** › **Zebra zolaqları** və **Əyrilik (Gaussian)** dəqiq səthdən gəlir: kənar boyunca fasiləsiz davam edən zolaqlar G1 deməkdir; eni də qoruyan zolaqlar G2 deməkdir. Əyrilik səth yəhərə bənzədiyi yerdə göy, gümbəz olan yerdə qırmızı, düz olan yerdə ağdır. **Nəzarət nöqtələri** nəzarət şəbəkələrini çəkir.

G0–G2 hər kənar üzrə 33 nöqtədə ölçülür. **G3 və "class A" keyfiyyəti ölçülmür** və iddia edilmir.

## Səthi kəsin

**Kəsmə** qrupu səthi formasını dəyişmədən kəsir: səth bütün nəzarət nöqtələrini saxlayır və yalnız kontur içindəki hissə göstərilir, sayılır və yazılır. **Düzbucaqlıya kəs** və **Dairə ilə kəs** hər istiqamətdə səthin payı (0-dan 1-ə) üzərində işləyir, buna görə görünüşdə seçim tələb etmir; **Əyri ilə kəs** səth üzərində yerləşən bağlı əyri alır (səthə proyeksiya olunur və açıq olduqda və ya tolerantlıqdan çox uzaqda olduqda sözlə rədd olunur). Konturun içini silmək üçün **Deşik aç** qutusunu işarələyin; içində saxlamaq üçün onu buraxın. Səthin bir saxlanılan kontur və istənilən sayda deşik ola bilər; bir-birini kəsən kontur rədd olunur. **Kəsməni sil** səthin hamısını yenidən göstərir. Kəsilmiş kənarlar konturu dəqiq izləyir; panelin **Geri qaytar**ı kəsməni digər addımlar kimi geri alır.

STEP kəsməni üzün sərhədləri kimi, IGES isə kəsilmiş səth kimi (entity 144) saxlayır; hər ikisi onu geri oxuyur.

## Cisimlər və Booleanlar

**Cisimlər** qrupu səthləri bağlı cisimlərə çevirir və birləşdirir. Burada cisim paneldəki öz səthlərinin birlikdə həcmi bağladığı çoxluqdur; onun üzləri kəsilmələri ilə dəqiq NURBS səthləri olaraq qalır.

- **Qutu cismi**, **Silindr cismi** və **Kürə cismi** yazılmış ölçülərdən (mm ilə) hazırlayır: altı düz üzlü qutu, dairəyə kəsilmiş yuvarlaq yanı və iki düz ucu olan silindr, bir fırlanmış səthli kürə.
- **Səthlərdən cisim** özünüz yaratdığınız səthləri qruplaşdırır. Onları seçin, ya da heç nə seçməyin ki, hələ cismdə olmayan göstərilən hər səthi istifadə edin. Tolerantlıq daxilində tikilirlər: bağlanmasalar, heç nə dəyişmir və panel neçə kənarın açıq qaldığını və nə qədər yaxın olmalı olduqlarını deyir.
- **Birləşdir**, **Çıxart** (ikinci cisim birincidən çıxarılır) və **Kəsişdir** (yalnız ikisinin ortaq olan hissəsi) iki cisim alır: görünüşdə hər birinin üzünü klikləyin və ya **Cisimlər** siyahısında **Seç** basın. Onları nəticənin yanında saxlamaq üçün **İki cismi saxla** qutusunu işarələyin.

Boolean hər üzü öz dəqiq səthində saxlayır və kəsişmə boyunca yeni kontur xətləri ilə kəsir. Nəticə sətri ölçülmüş rəqəmləri verir: həndəsə mühərrikinin nöqtələrinin dəqiq səthlərə oturmaq üçün nə qədər hərəkət etməli olduğu (heç vaxt tolerantlıqdan çox deyil), kəsişmə nöqtələrinin hər iki səthə nə qədər yaxın olduğu (adətən milyonda bir millimetr), həcm və yeni üzlərin dəqiq səthlərindən təzədən birləşdirildikdə yenidən bağlanıb-bağlanmadığı. Həcmlər tolerantlıq daxilində üçbucaqlarda ölçülür (başqa seçməsəniz 0.05 mm), buna görə kürənin və ya silindrin həcmi dəqiq həcmdən bir az aşağı oxunur: kiçik tolerantlıq daha yaxındır. Təmiz aparıla bilməyən Boolean (cisimlər heç nə ortaq paylaşmırsa, kontur özünü kəsərsə) sözlə rədd olunur və heç nəyi dəyişmir. Bir Boolean panelin **Geri qaytar**ının bir addımıdır.

**Cisimlər** siyahısında **Qrupdan çıxar** üzləri sadə səthlər kimi saxlayır; **Zibil qutusu** cismi və onun üzlərini silir.

**Modelə əlavə et** (**Cisimlər** siyahısında) cismin bir nüsxəsini modelə bir bağlı qrup kimi qoyur, üzləri 0.05 mm daxilində üçbucaqlar, modelin geri qaytarılmasının bir addımında. Sonra modelin öz **Birləşdir**, **Çıxart** və **Kəsişdir**i, push-pull və 3D çap yoxlaması ilə işləyir; dəqiq cisim panelin içində qalır.

## Yuvarlaqlaşdırma və qalınlaşdırma

**Üzlər arasında yuvarlaqlaşdır** bir cismin iki üzünün birləşdiyi kənarı yuvarlaqlaşdırır: iki üzü seçin (görünüşdə və ya siyahıda **Seç** ilə), **radius** yazın və kənar boyunca dəyişən radius üçün **sonda radius** (0 bir radius saxlayır). Həmin radiusun topu kənar boyunca hər iki üzə toxunaraq yuvarlanır; yuvarlaqlaşdırma hər nöqtədə onun qoyduğu dəqiq dairəvi qövsdür, bir səthə birləşdirilir, və iki üz topun toxunduğu yerdə kəsilir. Xarici kənar material itirir, daxili künc isə material qazanır. Nəticə sətri ölçülmüş nəticəni verir: yuvarlaqlaşdırma səthinin qurulduğu nöqtələr arasında topdan nə qədər uzaq olduğu (nöqtələr tolerantlığın dörddə birindən yaxın olana qədər əlavə olunur), toxunma xətləri boyunca yuvarlaqlaşdırma ilə hər üz arasındakı ən böyük bucaq və Birləşdir ilə eyni rəqəmlər. Üzlərə sığmayan radius (top üzdən çıxardı, ya da üz radiusdan sıx əyilir) üzü adlandıraraq rədd olunur və heç nə dəyişmir.

**Bir neçə kənarı yuvarlaqlaşdır** bir addımda bir çox kənarı yuvarlaqlaşdırır: birinci kənarın iki üzünü, sonra növbəti kənarın iki üzünü seçin və s. (bir üz bir neçə cütdə ola bilər, məsələn qutunun üst üzü dördündə); bütün kənarlar yazdığınız radiusu alır. Hər yuvarlaqlaşdırma cismin olduğu kimi hesablanır, sonra bir-birinin ardınca kəsilir, buna görə sıra fərq etmir. İki yuvarlaqlaşdırılmış kənar, qalan kənarları kəskin olan künc nöqtəsində birləşdikdə, iki yuvarlaqlaşdırma kəsişmə əyrisi boyunca bir-birinə keçir (qırışıq). Üç yuvarlaqlaşdırılmış xarici kənar üç düz üzün bir radiusla birləşdiyi yerdə künc üç yuvarlaqlaşdırmanın hamısına toxunan bir **kürə yamağı** olur (künci qırışıq etmək üçün **Künclər** qutusunu silin); kənar hər iki ucu belə künc olduqda ən azı radiusun iki qatı uzunluqda olmalıdır. Nəticə sətri neçə kənarın yuvarlaqlaşdırıldığını və künclərin necə çıxdığını deyir. Daxili kənarlar da birlikdə yuvarlaqlaşdırıla bilər, lakin yenidən bağlanmayan nəticə yalnız bildirilir (sətir deyir), buna görə yoxlayın.

**Cismi qalınlaşdır** səthə qalınlıq verir: onu seçin, **qalınlığı** yazın və digər tərəfə böyütmək üçün **Digər tərəf** qutusunu işarələyin. Ofsetli üz səthə uyğunlaşdırılır və ona qarşı ölçülür (nəticə sətri ən böyük fərqi qalınlıqdan göstərir); divarlar hər kənarı və hər kəsik konturunu izləyir. Səth həmin tərəfdə qalınlıqdan daha sıx əyilirsə, ya da səthin başqa hissəsi qalınlıqdan yaxın olarsa, səth və yer adlandırılaraq rədd olunur və heç nə dəyişmir.

## Geri qaytarma, fayl, STEP və IGES

Panelin öz **Geri qaytar** və **Təkrarla** düymələri var (hər komanda bir addım). Səthlər modelin yanında `.modelcraft` faylında saxlanılır; onlar modelin öz geri qaytarmasının hissəsi deyil, faylın materialları kimi.

**STEP…** (AP242) və **IGES…** əyriləri və səthləri olduğu kimi saxlayır (B-spline əyrilər və səthlər, heç nə üçbucağa çevrilmir). Hər səth öz kəsiyi ilə öz üzüdür; cisim bir bağlı qabıq kimi yazılır, hər kənar iki üzü tərəfindən paylaşılır, digər CAD proqramlarının gözlədiyi kimi (status sətri neçə cismin bu şəkildə çıxdığını deyir). IGES-də eyni cisim bir manifold bərk B-rep-dir (entity 186 bağlı qabıq 514 üzərində, üzlər 510, döngələr 508, bir kənar siyahısı 504 və bir təpə siyahısı 502); kənar-kənar cütlənməyən üzlərdən ibarət cisim ayrı üzlər kimi yazılır və sətir bunu deyir. **İdxal…** bunu həm STEP-dən, həm IGES-dən cisim kimi oxuyur. Bu şəkildə yazılmış əyriləri və səthləri, və `.ccnurbs` yamaq dəstlərini oxuyur; digər proqramların STEP cisimləri File › İdxal ilə meshlər kimi açılır.

## Skanlardan səthlər (tərsinə mühəndislik)

Modeldə skanlanmış meshi seçin (heç nə seçilməyibsə hamısı göstərilir), **Səthlər**i açın və **Skan** qrupunda **Səthləri skana uyğunlaşdır** seçin. Alət **müstəvilər**, **silindrlər**, **kürələr** və **konuslar** axtarır (işlənmiş hissənin təşkil etdiyi dəqiq səthlər; hər sətir tapdığı radiusu və ya yarım bucağı göstərir), **yuvarlaqlaşdırmaları** tapır (yuvarlaq kənarlar və künclər: iki və ya daha çox digər üzə toxunan kiçik silindr və ya kürə, radiusu və birləşdirdiyi üzlərlə), **halqa yuvarlaqlaşdırmaları** (tor: düz üzün silindr və ya konusla birləşdiyi yuvarlaq kənar, radiusu və halqa radiusu ilə) və **dəyişən yuvarlaqlaşdırmaları** (radiusu boyunca dəyişən yuvarlaq kənar, hər ucdakı radiusla), hamar, az əyilmiş hissəyə **bir sərbəst formalı yamaq** uyğunlaşdırır və hər üzü skanın hissəsinin konturuna kəsir ki, deşiklər və künclər qalsın. Seçimlər: **tolerantlıq** (skan nöqtəsi müstəviyə və ya silindrə nə qədər uzaq ola bilər, hələ də ona aid olaraq; və sərbəst forma yamağının hədəfi), **ən kiçik parça** (səth sahəsinin payı) və **ən çox üz**. Eyni skan və seçimlər həmişə eyni üzləri verir.

Nəticə cədvəldir, hər üz üçün bir sətir: növü, hansı üçbucaqlardan gəldiyi və **skandan üzə ölçülən xəta** (rms, ən böyük və tolerantlıq daxilində olan nöqtələrin payı). Ölçülən nöqtələr skanın təpələri və hər üçbucağın ortasıdır. Xəta əks istiqamətdə (üzdən skana) ölçülmür, buna görə skandan kənara çıxan üz göstərilməz. Cədvəlin altındakı qeyd sığmayacaq qədər kiçik olan sahənin nə qədər olduğunu da deyir. Görünüşdə skan nöqtələri **sapma xəritəsi** ilə rənglənir: üzdə göy, tolerantlığın yarısında yaşıl, tolerantlıqda və ya ondan çox qırmızı (gizlətmək üçün **Sapma xəritəsini göstər** qutusunu silin). Özünə qatlanan parçalar (məsələn sərbəst forma yamaqları ilə uyğunlaşdırılmış bağlı boru) uyğunlaşdırılmamış kimi siyahıya alınır, heç vaxt zorla bir səthə salınmır.

**Səthləri bərk cismə tikin** cismdə olmayan göstərilən hər səthi bir bağlı cismə birləşdirir. Skan üzləri yalnız skanın öz xətası daxilində birləşir, buna görə qapanan ən kiçik birləşmə məsafəsini sınayır (sizin təyin etdiyiniz **tikmə məsafəsindən** çox deyil) və üzlər bağlanmadıqda sözlə rədd edir. Heç vaxt boşluğu üstündən örtmür. Yuvarlaq kənarları olan qutu, yuvarlaqlaşdırmaları öz üzləri kimi tapılanda tikilir; bağlanan birləşmə məsafəsi nəticədə göstərilir. Cism sonra Birləşdir, Çıxart, Kəsişdir və **Modelə əlavə et** ilə işləyir.

Nə etmir: **halqa yuvarlaqlaşdırması** (tor) yalnız artıq tapılmış silindr və ya konusun oxu ətrafında axtarılır, və **dəyişən yuvarlaqlaşdırma** yalnız kifayət qədər düz kənar boyunca (kəsikləri bir istiqamətə kvadrat kəsilir); başqa yerlərdə, kifayət qədər hamar olduqda sərbəst formalı yamaqlar kimi çıxır, əks halda kənarda qalır; kürələr, konuslar və yuvarlaqlaşdırmalar təsadüfi nümunə ilə tapılır, buna görə çox kiçik olanlar (bir neçə üçbucaq) buraxıla bilər; sapma xəritəsi skandan üzlərə məsafəni göstərir, əksinə yox; çox böyük skanlar (300.000 üçbucaqdan çox) burada rədd olunur. Tam dönüşlü silindrin üzləri deşiklər ətrafında kəsilir, tikiş isə deşik olmayan yerə qoyulur. Hər üzü etibar etməzdən əvvəl skanınızla yoxlayın.

## Hələ hazır deyil

Əyri üzlərin künclərində birləşən və ya fərqli radiusları olan kənarların yuvarlaqlaşdırılması (təpə qarışdırması), birləşməyən üzlər arasında yuvarlaqlaşdırma, əyilmiş və ya əyri üzdə bitən daxili yuvarlaqlaşdırma, və Booleanların və yuvarlaqlaşdırmaların üçbucaqsız səthlərdə hesablanması (burada həndəsə mühərriki tolerantlıq daxilində üçbucaqlar üzərində işləyir və hər nöqtə sonra dəqiq səthlərə qaytarılır).
