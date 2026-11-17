---
title: Xassələri animasiya edin, əyrilərlə formalaşdırın və kliplər qarışdırın
summary: Animasiya iş sahəsi obyektin yerini, dönməsini və ölçüsünü, lampanın parlaqlığını, yayılmasını və rəngini, linzanı və meşin forma açarlarını açarlayır; skeletlər meşi sümüklər və boyanmış çəkilərlə əyir; IK və məhdudiyyətlər sümükləri və obyektləri çatmağa, baxmağa, köçürməyə, həddlərdə qalmağa, asılmağa və ya başqalarını izləməyə məcbur edir; bərk cisimlər düşür, yığılır və toqquşur, sonra açarlara qeyd olunur; sürücülər dəyəri başqalarından təyin edir; zaman xəttinin Əyrilər görünüşü hər dəyişikliyi Bézier tutacaqları və dövrlərlə formalaşdırır, Kliplər görünüşü isə animasiyaları yenidən yerləşdirilən və qarışdırılan fəaliyyətlər kimi saxlayır.
keywords: fizika, bərk cisim, bərk cisimlər, simulyasiya, simulyasiya et, düşmək, düş, cazibə, toqquşmaq, toqquşma, yığmaq, sıçrama, sürtünmə, qeyd etmək, qeyd edilmiş, IK, tərs kinematika, məhdudiyyət, məhdudiyyətlər, ona bax, izləmək, çevrilmələri kopyala, yer kopyala, dönməni kopyala, həddlər, asılı olduğu, valideyn, yol boyunca, yol, qütb, FABRIK, zəncir, skelet, skelet, sümük, sümüklər, dəri, skinning, çəkilər, çəki boyama, təpə qrupları, avtomatik çəkilər, sümük istiliyi, poza, poza rejimi, ikiqat kvaternion, xətti qarışma, forma açarları, forma açarı, morf, morflar, morf hədəfləri, qarışıq formalar, üz ifadəsi, sürücü, sürücülər, ifadə, ifadələr, animasiya iş sahəsi, animasiya, açar kadr, açar, açarlar, xassə, yerləşdirmə, dönmə, ölçü, lampa, işıq, parlaqlıq, rəng, linza, baxış bucağı, fov, qrafik redaktor, əyrilər, əyri, bezier, tutacaqlar, toxunan, interpolyasiya, dövr, dövrlər, təkrar, döngə, sürüşdürmə, açar cədvəli, açarları seç, qutu seçimi, açarları kopyala, açarları yapışdır, açarları uzat, açarları miqyaslandır, kliplər, fəaliyyətlər, NLA, qarışıq, qarışdırmaq, təsir, saxla, stash
from: 16d8e12f
---

[zaman xətti](topic:animation) kameranı və bütün qrupları və komponentləri hərəkət etdirir. **Animasiya** iş sahəsi bundan daha çox şeyi açarlayır, zaman xətti isə açarladıqlarınızı formalaşdırmaq və yenidən istifadə etmək üçün daha iki görünüş alır.

## Açın

Alətlər panelindəki iş sahələri siyahısından {{ui:Animasiya}} seçin. Zaman xətti görünüşün altında açılır, alətlər panelində Animasiya qrupları ({{ui:Açarlar}}, {{ui:Oynat}}, {{ui:Zaman xətti}}) göstərilir və sağdakı panel oynatma başlığında nəyi açarlaya biləcəyinizi sadalayır.

## Xassə açarlayın

Oynatma başlığında panel bunları sadalayır:

- **Seçilmiş obyekt**: onun {{ui:Yerləşdir}}, {{ui:Dönmə (°)}} və {{ui:Ölçü}}, hər biri üç rəqəm. Rəqəm yazın və {{key:Enter}} basın: o, oynatma başlığında açarlanır və obyekt orada hərəkət edir. Sətirin yanındakı romb cari dəyəri açarlayır; dolu romb oynatma başlığında artıq açar olduğunu göstərir.
- **Lampalar**: hər lampanın {{ui:Parlaqlıq (lm)}}, {{ui:Yayılma (°)}} (proyektor lampaları üçün) və {{ui:Rəng}}i.
- **Kamera**: {{ui:Linza bucağı (°)}}, kamera hərəkət edərkən yaxınlaşdırma üçün.

{{ui:Açar çevrilməsi}} (və ya {{key:I}}) seçilmiş hər qrupun və ya komponentin yerini, dönməsini və ölçüsünü eyni anda açarlayır; {{ui:Açar kamerası}} (və ya {{key:K}}) kameranı açarlayır. {{ui:Avtomatik açar}} aktiv olduqda, bu üsulla yeri, dönməsi və ölçüsü açarlanmış qrup köçürüldükdə hər dəfə yeni açar alır.

Dönmələr üç bucaqdır: X, sonra Y, sonra Z oxu ətrafında. 180°-dən çox açarlanmış dönmə eyni istiqamətdə davam edir (190° qalır 190°, −170° olmur), beləliklə çarx bir neçə dəfə fırlana bilər.

:::tip
Zaman xəttində {{ui:Seçilmiş açar}} ilə açarlanmış qrupun tam yerləşdirmə açarları var. Sətirdəki əyri düyməsi onları yer, dönmə və ölçü əyrilərinə çevirir (hər açarda eyni yerləşdirmə ilə), beləliklə onları {{ui:Əyrilər}}də formalaşdıra bilərsiniz.
:::

## Forma açarları (morflar)

**Forma açarı** eyni [meşin](topic:meshes) başqa formasıdır: üzdə gülüş, qapının qabarması, əyilmiş yarpaq. Onun sürgüsü meşin olduğu vəziyyətdən (0) həmin formaya (1) qədər qarışır; bir neçə açar toplanır.

1. Animasiya iş sahəsində meş seçin: panel onun {{ui:Forma açarları}}nı göstərir.
2. {{ui:Forma açarı əlavə et}} düyməsini basın. ModelCraft redaktə olunan yeni açarla [Meş iş sahəsinə](topic:mesh-edit) keçir: nöqtələri köçürün, itələyin, heykəltəraşlıq edin — meşi istədiyiniz formaya çevirin.
3. {{ui:Animasiya}}ya qayıdın və {{ui:Hazırdır}} düyməsini basın. Meş əvvəlki halına qayıdır, açar isə dəyişikliyinizi saxlayır.

Sonra açarın sürgüsünü sürükləyin (və ya dəyər yazın) ki, onu qarışdırasınız. Romb dəyəri oynatma başlığında açarlayır, beləliklə açar zamanla böyüyə və sola bilər; izi olduqdan sonra oynatma başlığında yeni dəyər açarlanır. Qələm açarın formasını yenidən redaktə edir (meş {{ui:Hazırdır}} düyməsinə qədər onu tam göstərir; {{ui:Ləğv et}} açarı əvvəlki kimi saxlayır), göz açarı söndürür, zibil qutusu onu silir.

Redaktə zamanı əlavə etdiyiniz nöqtə meşin özünə aiddir: hansı formada olursa-olsun, yaratdığınız yerdə qalır.

:::note
Forma açarları meşi [modifikatorlardan](topic:modifiers) əvvəl hərəkət etdirir: Subdivision modifikatoru qarışmış formanı hamarlayır. Render olunmuş şəkillər və videolar hər kadrda açarları göstərir.
:::

## Skeletlər: meşi əyən sümüklər

**Skelet** [meşin](topic:meshes) içində yerləşən sümüklər dəstidir. Sümükləri pozalandırın, meş onlara tabe olur, hər nöqtə çəkilərinin dediyi qədər.

1. Animasiya iş sahəsində meşi seçin və paneldə {{ui:Skelet əlavə edin}} düyməsini basın (və ya {{ui:Skelet}} qrupunda {{ui:Sümük əlavə et}}): ilk sümük meşin ortasından, ayağından yuxarı uzanır.
2. Sümük seçilmiş halda {{ui:Alt sümük əlavə et}} növbəti sümüyü onun ucundan əlavə edir. Hər sümüyün {{ui:Baş}}, {{ui:Uc}}, {{ui:Fırlanma (°)}} və {{ui:Asılıdır}}ını panelda təyin edin; başqa sümükdən asılı sümük onunla birlikdə hərəkət edir. Yalnız başqalarını idarə edən sümük üçün {{ui:Meşi hərəkət etdirir}} işarəsini çıxarın.
3. {{ui:Avtomatik çəkilər}} düyməsini basın: hər sümük özünə ən yaxın nöqtələri tutur, tutma meş boyunca hamar yayılır, beləliklə iki sümük arasındakı nöqtələr onları bölüşür. {{ui:Yalnız ən yaxın sümüklər}} daha sürətli və sərt bölgüdür.

**Pozalandırın** sümükləri {{ui:Poza}} ilə ({{key:P}}): sümüyü seçmək üçün klikləyin, görünüşün oxu ətrafında fırlatmaq üçün sürükləyin, köçürmək üçün {{key:Shift}} basıb sürükləyin. Və ya {{ui:Poza}} altında onun {{ui:Yerləşdir}}, {{ui:Dönmə (°)}} və {{ui:Ölçü}}sünü yazın; dönmələr sümüyün öz oxlarındadır, dayandığı yerdən. Rombalar və {{ui:Bütün pozanı açarlayın}} pozanı oynatma başlığında açarlayır; sümüyün açarları olduqdan sonra onu pozalandırmaq orada açarlayır. {{ui:Bu sümüyü sıfırla}} və {{ui:Pozanı sıfırla}} sümükləri istirahət vəziyyətinə qaytarır.

**Çəkiləri boyayın** ({{key:W}}) seçilmiş sümük üçün: meş istirahətdə göstərilir, hər üz o sümüyün onu nə qədər tutduğuna görə rənglənir — qırmızı hamısı, mavi heç biri. Tutmanı artırmaq üçün boyayın ({{key:Mod}} onu çıxarır, {{key:Shift}} hamarlayır); {{ui:Ölçü (px)}} və {{ui:Güc}} fırçanı təyin edir. {{ui:Hər nöqtənin çəkilərinin cəmi 1 olsun}} seçimi ilə bir sümüyə daha çox vermək digərlərindən eyni miqdarı alır. Hər zolaq modelin geri qaytarılmasında bir addımdır.

{{ui:Dəri}} nöqtənin sümüklər arasında necə hərəkət etdiyini seçir: {{ui:Xətti (sürətli)}} sümüklərin hərəkətlərini qarışdırır və əyilmiş oynağı bir az sıxır; {{ui:İkiqat kvaternion (oynaqlarda həcmi saxlayır)}} isə nöqtəni oynağın ətrafında fırladır, beləliklə dirsək və ya diz qalınlığını saxlayır (sümüyün {{ui:Ölçü}}sü dərini uzatmır).

:::note
Əvvəl forma açarları, sonra skelet, sonra [modifikatorlar] gəlir. Görünüş, şəkillər və videolar hamısı pozalandırılmış meşi göstərir; meşin çəkiləri onunla birlikdə, sümüklər və onların pozası isə animasiya ilə birlikdə saxlanılır.
:::

## IK və məhdudiyyətlər

**Məhdudiyyət** sümüyü və ya obyekti açarlarından sonra, bir qayda ilə hərəkət etdirir. Obyekti (skelet daxilində isə sümüyü) seçin və {{ui:… məhdudiyyətləri}} altında birini əlavə edin; bir neçəsi siyahıdakı sıra ilə işləyir (oxlar sıranı dəyişir), hər birinin {{ui:Nə qədər}} (0-dan 1-ə qədər, digər xassələr kimi rombla açarlanır) və aç/söndür açarı var.

| Məhdudiyyət | Üçün | Nə edir |
|---|---|---|
| {{ui:Çatma (IK)}} | Sümüklər | Sümük və ondan asılı sümüklər ({{ui:Zəncirdəki sümüklər}}) əyilir ki, ucu hədəfə çatsın. İki sümük və {{ui:Qütb (əyilmə ona doğru olur)}} ilə dirsək və ya diz qütbə doğru yönəlir; uzun zəncirlər hamar əyilir. Çatmadıqda zəncir birbaşa hədəfə yönəlir. |
| {{ui:Ona bax}} | Hər ikisi | Dönür ki, {{ui:Göstərən ox}} hədəfə baxsın, {{ui:Yuxarıda saxlanan ox}} isə mümkün qədər yuxarıya yaxın qalsın. |
| {{ui:Çevrilmələri kopyala}} | Hər ikisi | Hədəfin yerini, dönməsini və ya ölçüsünü götürür — işarələnənləri. |
| {{ui:Həddlər}} | Hər ikisi | Öz yerini, dönməsini (dərəcə ilə) və ya ölçüsünü hər ox üzrə {{ui:min}} və {{ui:max}} arasında saxlayır; həmin oxu sərbəst buraxmaq üçün bir cütü boş qoyun. |
| {{ui:Asılı olduğu}} | Hər ikisi | Hədəflə birlikdə hərəkət edir, sanki ondan asılıdır, hədəfi seçdiyiniz zaman hər ikisinin olduğu yerdən. |
| {{ui:Yol boyunca hərəkət et}} | Obyektlər | [Əyri obyektdə](topic:curves) {{ui:Əyri boyunca}} oturur (0 başlanğıc, 1 son; hərəkət etmək üçün açarlayın) və {{ui:Əyri boyunca dön}} ilə onun boyunca baxır. |

Hədəf açıq qrupdakı başqa obyekt, eyni skeletin sümüyü, və ya yazdığınız {{ui:Nöqtə}}dir (obyektin nöqtəsi modelin koordinatlarındadır, sümüyün nöqtəsi isə onun meşindədir). IK ayağı üçün hədəfi ayağın olmalı olduğu yerə qoyun və hədəfi açarlayın, və ya {{ui:Nə qədər}}i açarlayaraq ayağı açarlar və IK arasında ötürün.

:::tip
Yolu izləyən obyektə baxan obyekt onu yolda görür: ModelCraft obyektlərin sırasından asılı olmayaraq əvvəlcə hədəfləri hesablayır.
:::

## Fizika: düşmək, yığılmaq və toqquşmaq

Obyektlərin düşməsinə və bir-birinə dəyməsinə icazə verin, sonra nəticəni açarlar kimi saxlayın.

1. Qrup, komponent və ya meş seçin və onun {{ui:Bərk cisim}}ini {{ui:Fizika}} altında təyin edin: {{ui:Düşür və toqquşur}} (hərəkət edir) və ya {{ui:Yerində qalır, yolda durur}} (masa, divar, əyilmə). Düşən obyekt üçün {{ui:Forma}} verin — {{ui:Qutu (sərhədləri)}} və ya {{ui:Top (sərhədlərinin ətrafında)}} — onun {{ui:Kütlə (kq)}}sini, {{ui:Sürtünmə}}sini və {{ui:Sıçrama}}sını (0 — səs-küylə düşür, 1 — eyni hündürlüyə geri sıçrayır).
2. {{ui:Bütün model}} altında {{ui:Başlanğıc (s)}} və {{ui:Son (s)}}, {{ui:Cazibə (m/s², aşağı)}} və {{ui:Üzərinə düşəcəyi zəmin}} olub-olmadığını (və hündürlüyünü) təyin edin.
3. {{ui:Fizikanı qeyd et}} düyməsini basın (paneldə və ya {{ui:Fizika}} qrupunda). Hər düşən obyekt iki vaxt arasındakı hər kadrda yer, dönmə və ölçü açarı alır; onu hər hansı animasiya kimi oynadın.

Yenidən qeyd etmək həmin açarları əvəz edir; {{ui:Qeyd edilmiş açarları sil}} onları çıxarır. Obyektlər istirahətdə başlayır, yəni açarları, əyriləri və məhdudiyyətləri onları {{ui:Başlanğıc (s)}} anında harada qoyursa oradan (həmin andan əvvəl açarlanmış hərəkət düşməyə davam etmir). Daha çox {{ui:Kadr başına addımlar}} hündür yığınları sabit saxlayır; status paneli sonda nəyinsə hələ hərəkət etdiyini göstərir.

:::note
Formalar obyektlərin sərhədləri ətrafında qutu və toplardır; qutu küncləri, kənar ortaları və üz ortaları ilə toxunur, beləliklə qutular yığılır və gözlənildiyi kimi aşır. Parça, mayelər, obyektlər arasında birləşmələr və dəqiq formalar hələ yaradılmayıb.
:::

## Sürücülər

**Sürücü** forma açarını əl ilə deyil, başqa şeylərdən təyin edir: açarın sürücüsünü açın (kalkulyator düyməsi), **ifadə** yazın və hər adı oxuyacağı şeyə görə verin ({{ui:Oxuyur}}): saniyə ilə zaman, kadr, yerləşdirmənin X, Y və ya Z üzrə yeri, dönməsi və ya ölçüsü, lampanın parlaqlığı, ya da başqa forma açarı. Məsələn, `v` qapının Z ətrafında dönməsini oxuyanda, `clamp(v / 90, 0, 1)` qapı açıldıqca forma açılır.

İfadələrdə ədədlər, adlar, `+ - * / % ^` və mötərizələr işlənir; funksiyalar `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg` və `pi` və `e` sabitləri. Səhv göstərilir və heç nə dəyişmir. Sürücülü açarın sürgüsü sürücünün dəyərini göstərir; sürücü onu silənə qədər açarın izindən üstün gəlir.

## Açarları seçin və dəyişin (Açarlar görünüşü)

{{ui:Açarlar}} hər iz üçün bir sətir göstərir: kamera, hər hərəkət edən qrup və hər xassə ("Lampa 2 · Parlaqlıq (lm)"; xassə açarları dairəvidir).

- Açarı seçmək üçün klikləyin; {{key:Shift}}-klik və ya {{key:Mod}}-klik seçimə açar əlavə edir və ya çıxarır. Sətirlər üzərində {{key:Shift}} basıb sürükləmək içindəki bütün açarları əlavə edən qutu çəkir.
- Seçilmiş açarı sürükləyərək hamısını köçürün; {{key:Left}} / {{key:Right}} onları bir kadr köçürür ({{key:Shift}}: on kadr).
- {{key:Mod+C}} seçilmiş açarları kopyalayır, {{key:Mod+V}} onları oynatma başlığından eyni izlərə yapışdırır (başqa ModelCraft vərəqi də onları yapışdıra bilər).
- {{ui:Uzanma}} seçilmiş açarları yanındakı ədəd qədər oynatma başlığından yayır (2 = iki dəfə uzaq; 0.5 onları yığır).
- Asanlaşdırma siyahısı seçilmiş hər açarın necə hərəkət etdiyini təyin edir.

## Əyriləri formalaşdırın (Əyrilər görünüşü)

{{ui:Əyrilər}} hər ədədin zamanla qrafikidir: zaman sağa, dəyər yuxarı. Sol siyahıda göstəriləcək əyriləri işarələyin (X, Y və Z qırmızı, yaşıl və mavidir).

- Açarı (kvadratı) seçmək üçün klikləyin, daha çoxu üçün {{key:Shift}}-klik, və ya qutu çəkin. Seçilmiş açarı sürükləyərək zamanı və dəyəri dəyişin; bir neçəsi seçiləndə sürükləmə onları zaman boyunca köçürür.
- Seçilmiş açar iki **tutacaq** göstərir. Birini sürükləyərək həmin tərəfdəki əyrini formalaşdırın. {{ui:Tutacaqlar}} onların davranışını göstərir: {{ui:Avtomatik}} (ətrafdakı açarlardan keçən hamar əyri), {{ui:Növbəti açara yönəlmiş}}, {{ui:Düzləşdirilmiş}} (ikisi düz xətt üzərində qalır, beləliklə əyrinin künci olmur) və ya {{ui:Sərbəst}}.
- {{ui:Seçilmiş açarlardan}} hər seçilmiş açarın növbətiyə necə keçdiyini təyin edir: {{ui:Əyri (tutacaqlar)}}, {{ui:Hamar}}, {{ui:Sabit}}, {{ui:Yavaş başlayıb yavaş bitir}} və ya {{ui:Saxla}}.
- {{ui:Əvvəl}} və {{ui:Sonra}} əyrinin açarlarından kənarda nə etdiyini təyin edir: {{ui:Saxla}} (birinci və ya son dəyərdə qalır), {{ui:Təkrar}}, {{ui:Geri-irəli}} və ya {{ui:Təkrarla və davam et}} (hər təkrar əvvəlkinin qurtardığı yerdən başlayır: çarx fırlanmağa davam edir, yeriyən adam yeriməyə davam edir).
- Təkər miqyaslayır ({{key:Mod}}: yalnız dəyərlər; {{key:Shift}}: yalnız zaman); orta düymə ilə və ya {{key:Alt}} ilə sürükləyin ki, sürüşdürün; {{ui:Hamısını göstər}} və ya {{key:Home}} göstərilən bütün əyriləri sığdırır. Boş yerə klikləyin ki, oynatma başlığını oraya köçürün. {{key:Delete}} seçilmiş açarları silir.

Tutacaqlar zamanda bir-birini kəsməkdən saxlanılır, beləliklə əyri heç vaxt geriyə getmir.

## Animasiyaları yenidən istifadə edin (Kliplər görünüşü)

**Klip** zaman xəttində saxlanmış animasiyanı (**fəaliyyət**) oynadır. Kliplər ardıcıl qarışdırılır, aşağı sətirlər yuxarıların üstündən; zaman xəttinin öz izləri hər klipin üstündə olur.

1. Qrupları və lampaları adi qaydada açarlayın, sonra {{ui:Kliplər}}də {{ui:Klip yarat}} düyməsini basın və fəaliyyətə ad verin. İzlər fəaliyyət olur və klip onları olduqları yerdə oynadır (kamera zaman xəttində qalır).
2. Yenidən istifadə etmək üçün fəaliyyəti seçin və {{ui:Klip əlavə et}} düyməsini basın: yeni klip oynatma başlığında başlayır.
3. Kliplə sətirdə sürükləyərək köçürün; {{ui:Başlanğıc (s)}}, {{ui:Sürət}} (2 = iki dəfə sürətli), {{ui:Təkrarlar}}, {{ui:Nə qədər}} (0-dan 1-ə qədər), {{ui:Qarışıq}} ({{ui:Əvəz et}} və ya əvvəlki kliplərin üstünə {{ui:Üstünə əlavə et}}), {{ui:Klipdən kənarda}} (heç nə, sonunu saxla, və ya hər iki ucunu saxla) və {{ui:Səssiz}} təyin etmək üçün ona klikləyin. Oxlar sıranı dəyişir; zibil qutusu onu silir (heç bir klip istifadə etməyən fəaliyyət də onunla gedir).

{{ui:Nə qədər}} tam olmayan klip altındakından qarışır: ondan əvvəlki klipdən, və ya animasiyasız olduğu kimi lampa və ya yerləşdirmədən.

## Nə harada oynayır

| Nə | Görünüşdə | Render olunmuş videoda |
|---|---|---|
| Kamera açarları, kamera açarları ilə linza bucağı | Bəli | Bəli |
| Yer, dönmə və ölçü (açarlar, əyrilər, kliplər) | Bəli | Bəli |
| Lampa parlaqlığı, yayılması və rəngi | Bəli | Hələ yox: video başlayanda lampalar olduğu kimi istifadə olunur (bax [hələ nə yaradılmayıb](topic:not-built-yet)) |
| Kamera açarı olmadan linza bucağı | Bəli | Hələ yox: kameranı da açarlayın |
| Forma açarları və sürücülər | Bəli | Bəli |
| Skeletlər (pozalandırılmış meşlər) | Bəli | Bəli |
| IK və məhdudiyyətlər | Bəli | Bəli |
| Qeyd edilmiş fizika (açarlar) | Bəli | Bəli |

Hər şey animasiyanın qalan hissəsi ilə birlikdə `.modelcraft` faylında saxlanılır və zaman xəttinin {{ui:Geri qaytar}} və {{ui:Təkrarla}} düymələri onlardan hər hansını geri qaytarır.
