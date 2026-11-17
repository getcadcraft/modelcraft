---
title: Xətt, düzbucaqlı, çevrə və qövslərlə üzlər çəkin
summary: Yerdə və ya digər üzlərdə düz üzlər yaradın, onları xətlərlə bölün, istədiyiniz tərəf sayı ilə çevrə və çoxbucaqlılar çəkin.
keywords: çəkmə, xətt, düzbucaqlı, çevrə, çoxbucaqlı, ofset, daxilə salma, çərçivə, sərhəd, qövs, əyri, spline, hamar, kabel, yol, qabarıqlıq, radius, üz, plan, oturacaq, bölmək, tərəflər, seqmentlər, kontur, qələm
from: b6d7b7dd
---

ModelCraft-da hər şey düz **üz** kimi başlayır: kənarlarla bağlanmış səth. Üzü birbaşa {{ui:Düzbucaqlı}}, {{ui:Çevrə}} və ya {{ui:Çoxbucaqlı}} ilə çəkə bilərsiniz, ya da {{ui:Xətt}} ilə kənar-kənar konturlaya bilərsiniz. Üzlər [İtələ/çək](topic:push-pull) vasitəsilə bərk cisimlərə çevrilir.

## Düzbucaqlı çəkmək

1. {{key:R}} basın.
2. Birinci künc üzərinə basın: yerdə və ya modelin istənilən üzündə.
3. Göstəricini hərəkət etdirin. Düzbucaqlı yerdə (ya da başladığınız üzdə) qalır və dəyər qutusu ({{ui:Ölçülər}}) eni və dərinliyini göstərir. Tərəflər bərabər olduqda tipdə "Kvadrat" yazılır.

   Başqa müstəvidə çəkmək üçün ona göstərin: birinci künclə keçən üz düzbucaqlını həmin üzə qoyur; birinci müstəvidə olmayan nöqtəyə (uc, kənar, mavi ox) tutmaq düzbucaqlını hər iki künclə keçməklə şaquli qaldırır. Birinci müstəvidəki nöqtəyə yenidən tutun — o, yenidən üfüqi yatır. Bir müstəvini saxlamaq üçün ox düyməsinə basın: {{key:Up}} düzbucaqlını üfüqi saxlayır (mavi müstəvi), {{key:Right}} qırmızı müstəvidə, {{key:Left}} yaşıl müstəvidə. Kilidi açmaq üçün eyni düyməyə yenidən basın.
4. Qarşı künc üzərinə basın, ya da iki ölçünü vergüllə ayırıb yazın və {{key:Enter}} basın: `4m,3m`, millimetr modelində `4000,3000`, ya da fut və dyuymda `12',10'6"`.

   Dörd kənarla əhatə olunmuş üz yaranır.

Yazılmış ölçülər göstərdiyiniz istiqamətdə tətbiq olunur: yazdığınız zaman göstərici birinci künclərin solunda olarsa, düzbucaqlı sola doğru böyüyür.

:::warning
Vergül iki ölçünü ayırır, buna görə onluq ayırıcı ola bilməz. `2.5m,3m` yazın, heç vaxt `2,5m` yazmayın.
:::

## Çevrə və ya çoxbucaqlı çəkmək

1. Çevrə üçün {{key:C}}, çoxbucaqlı üçün {{key:N}} basın.
2. Tərəflərin sayını dəyişmək üçün basmazdan əvvəl yazın: `12s` (ya da sadəcə `12`) və {{key:Enter}}. Çevrə 24 tərəflə, çoxbucaqlı 6 tərəflə başlayır. Tip cari sayı göstərir və ModelCraft onu növbəti çevrə üçün saxlayır, siz onu dəyişənə və ya aləti dəyişənə qədər.
3. Mərkəzə basın: yerdə və ya üzdə. Mərkəzi üzə qoymaq üçün göstəricini üzün ortasına ("Üzün mərkəzi") və ya kənarlarından birinin ortasına ("Orta nöqtə") tutun, göstərici üzün içində olduqda: çevrə həmin üzdə çəkilir, hətta uzun qutunun dar ucunda da.
4. Radiusu təyin etmək üçün basın, ya da yazın ({{ui:Radius}} dəyər qutusunda) və {{key:Enter}} basın.

Çevrə çoxlu tərəfli çoxbucaqlıdır. Çevrəni [İtələ/çək](topic:push-pull) ilə yuxarı qaldırdığınızda onun tərəfləri yumşaldılır ki, silindr bir hamar səth kimi görünsün.

## Qövs çəkmək

1. {{key:A}} basın ({{ui:Qövs}}).
2. Qövsün başladığı yerə, sonra bitdiyi yerə basın (ya da aralarındakı uzunluğu yazın).
3. Qövsü kənara qabartmaq üçün göstəricini hərəkət etdirin və basın. Qabarıqlıq uclar arasındakı məsafənin yarısına bərabər olduqda tipdə "Yarım çevrə" yazılır. Ya da ortanın nə qədər kənara çıxdığını yazın: `2` və {{key:Enter}}.

Mərkəz ətrafında qövs çəkmək üçün {{ui:Qövsün mərkəzi}} istifadə edin: mərkəzə basın, sonra qövsün başladığı yerə (ya da radiusu yazın), sonra bitdiyi yerə (ya da dərəcə ilə bucağı yazın, məsələn `90`). 15° addımlarına tutulur.

Üzdə başlanan qövs həmin üzdə çəkilir; əks halda yerdə yatır, ya da iki ucu müxtəlif hündürlükdədirsə, şaquli qalxır. Qövsün 12 seqmenti var; daha çox üçün çəkərkən `24s` yazın. Qövslər də xətlər kimi üzləri bağlayır: düzbucaqlının küncünü kəsən qövs onu bölür.

## Hamar əyri çəkmək

{{ui:Əyri}} hər klikləndiyiniz nöqtədən keçən hamar xətt çəkir: kabel, dəstəyin yolu, bağ kənarı. Yerdən qalxa bilər: nöqtələr istənilən yerdə künclərə, kənarlara və üzlərə tutulur, ox düymələri isə {{ui:Xətt}} ilə olduğu kimi qırmızı, yaşıl və ya mavi kilidləyir.

1. {{ui:Çəkmə}} qrupunda {{ui:Əyri}} basın.
2. Əyrinin keçdiyi nöqtələrə basın. Son nöqtədən 1 yuxarıdakı nöqtə üçün `<0,0,1>` yazıb {{key:Enter}} basın, dəqiq yer üçün `[x,y,z]`, ya da göstəriciyə doğru həmin məsafədə nöqtə üçün uzunluq yazın.
3. Bitirmək üçün {{key:Enter}} basın və ya ikiqat klikləyin. Əyrini bağlamaq üçün ilk nöqtəyə yenidən basın. {{key:Backspace}} son nöqtəni geri götürür.

Əyri bir parça kimi seçilir. Onu dəyişmək üçün seçin və {{ui:Obyekt məlumatı}} bölməsində {{ui:Nöqtələri redaktə et}} basın: nöqtələr kvadrat kimi görünür. Birinə basın, sonra gedəcəyi yerə basın (ya da `<dx,dy,dz>` yazın). {{key:Esc}} nöqtəni yerinə qaytarır və redaktəni bitirir. Bağlı düz əyri üz yaradır; üzün konturunu təşkil edən əyri artıq redaktə oluna bilməz.

## Ofset: üzün içində və ya xaricində sərhəd

{{ui:Ofset}} üzün konturunu içəriyə (ya da xaricə) müəyyən məsafədə kopyalayır: çərçivə, sərhəd, pəncərə altlığı və ya ekranın şüşəsi üçün.

1. {{key:F}} basın və üzə basın, ya da əvvəlcə üzü seçin və sonra {{key:F}} basın.
2. Daxili kontur üçün göstəricini üzün içinə, xarici üçün xaricinə hərəkət etdirin. Yeni kontur izləyir və tip məsafəni göstərir.
3. Basın, ya da məsafəni yazın və {{key:Enter}} basın.

Üz ikiyə bölünür: daxili üz və onun ətrafında çərçivə (ya da xaricdə yeni halqa). Hər ikisini dərhal itələyib-çəkə bilərsiniz: ekran üçün qutu çəkin, onu qalınlığına qədər itələyin, ön üzü 30 mm içəriyə ofset edin və şüşə üçün daxili üzü bir az içəriyə itələyin. Üzdəki deşiklər də ofset olunur, qövs və ya çevrə isə bir (kiçik və ya böyük) əyri olaraq qalır.

- **İkiqat klikləyin** üzə {{ui:Ofset}} ilə, sonuncu məsafə ilə yenidən ofset etmək üçün.
- **Kənarlar:** bir müstəvidə birləşmiş kənarlar zənciri seçin (məsələn, L-in iki xətti), {{key:F}} basın, istədiyiniz tərəfə keçin və məsafəni yazın: paralel surət çəkilir, künclər kəsilmiş olur.
- Məsafə üz icazə verdiyindən çox olduqda ModelCraft bunu bildirir və heç nə çəkmir.

## Qövslər, çevrələr və çoxbucaqlılar əyridir

Qövsün, çevrənin və ya çoxbucaqlının istənilən seqmentinə basın: bütün əyri seçilir. {{ui:Obyekt məlumatı}} onun radiusunu, seqmentlərini, bucağını (qövslər üçün) və uzunluğunu göstərir. Orada yeni radius yazın ki, mərkəzi ətrafında ölçüsü dəyişsin; onun müstəvisində çəkilmiş üzlər izləyir. Əyrinin üzü bir dəfə itələnib-çəkildikdən sonra radiusu olduğu kimi qalır.

## Xətlərlə çəkmək

1. {{key:L}} basın.
2. Xəttin başladığı yerə basın.
3. Bitdiyi yerə basın, ya da uzunluq yazın və {{key:Enter}} basın. Yazılmış uzunluq göstəricinin göstərdiyi istiqamətə gedir.
4. Basmağa davam edin. Hər klik əvvəlki xəttin sonundan növbəti xətti başladır.
5. Konturu ilk nöqtəyə yenidən basaraq bağlayın. Xətlər düz bir döngə bağladıqda, o, bir üzlə dolur və alət zəncirləməni dayandırır. İstənilən vaxt dayandırmaq üçün {{key:Esc}} basın.

Xətlər yaxınlaşdıqda qırmızı, yaşıl və mavi istiqamətləri izləyir; xətt həmin rəngə dönür və tipdə "Qırmızı oxda" yazılır. İstiqaməti necə kilidləmək və nöqtələrə necə tutmaq üçün bax: [İstiqamət və tutma](topic:inference).

### Xətt heç nəyə toxunmadıqda hara gedir

- Üzdə başlayan xətt həmin üzün müstəvisində qalır.
- Yerdə və ya boş məkanda başlayan xətt başlanğıc nöqtəsi ilə eyni səviyyədə qalır. Modelə kənardan baxsanız, göründüyü şaquli müstəvidə sizə tərəf gedir.
- Xətti dəqiq yerə çəkmək üçün nöqtə yazın: model daxilində nöqtə üçün `[x,y,z]`, başlanğıcdan ofset üçün `<dx,dy,dz>`. Bax: [Dəqiq ölçüləri yazın](topic:value-box).

## Üzü bölmək

Üzün üzərində bir kənardan digərinə (ya da digər xətlər vasitəsilə kənardan kənara) xətt çəkin. Üz iki üzə bölünür. Hər biri öz tərəfini və rəngini saxlayır. Üzdə çəkilmiş düzbucaqlı və ya çevrə ilə də eyni olur: forma daha böyük üzün içində öz üzünə çevrilir və böyük üz indi deşik olur.

Bu, mərtəbə döşəməsində otaqları, divarda pəncərəni və ya pilləkəndə pilləni belə planlaşdırmağın yoludur: üzdə konturu çəkin, sonra yeni üzü itələyin və ya çəkin.

## Səhv istiqamətə baxan üzlər

Hər üzün ön və arxası var. Arxa tərəf boz-mavi görünür. Yerdə çəkilmiş üzlər yuxarıya baxır; başqa üz üzərində çəkilmiş üzlər həmin üzlə eyni istiqamətə baxır.

Ön tərəfi gözlədiyiniz yerdə üzün arxası görünürsə, onu seçin və {{ui:Obyekt məlumatı}} bölməsində {{ui:Üzü çevir}} basın.

## Çəkərkən nə görürsünüz

- Göstəricinin tutduğu yerdə rəngli işarə və aşağı-solda tipdə onun adı.
- Xəttin və ya formanın önizləməsi.
- Dəyər qutusunda canlı ölçü. İstənilən vaxt üzərinə yaza bilərsiniz.

## Forma gözlədiyiniz yerdə deyilsə

- Toxunuş ekranında bax: [Problemlərin həlli](topic:troubleshooting#a-shape-starts-in-the-wrong-place-on-a-touch-screen).
- Xətt uzaqda gizlənmiş bir şeyə tutulubsa, bir az fırlanın: üzün arxasında gizli nöqtələr heç vaxt tutulmur, lakin onun kənarındakı nöqtələr tutulur.
- Son formanı geri qaytarmaq üçün {{key:Mod+Z}} basın; bir geri qaytarma bir xətti və ya bir formanı silir.
