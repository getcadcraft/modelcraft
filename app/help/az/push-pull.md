---
title: Üzləri itələyib-çəkərək bərk cisimlərə çevirin
summary: Üzü qutuya çevirin, binanı hündürləşdirin və ya alçaldın, çıxıntı və ya oyuq əlavə edin və məsafəni ikiqat klikləmə ilə təkrarlayın.
keywords: itələ çək, push pull, ekstrüziya, hündürlük, bərk cisim, qutu, kütlə, hündür, oyuq, çıxıntı, təkrarlamaq, ikiqat klik, həcm, səviyyə, üzün üstündə, səth ilə bərabər, eyni hündürlük
from: dc093c91
---

{{ui:Push/pull}} ({{key:P}}) üzü öz istiqamətində hərəkət etdirir: döşəmə üçün yuxarı və aşağı, divar üçün içəri və xaric. Nə baş verdiyi üzdən asılıdır.

## Üzdən bərk cisim yaradın

1. Bir üz çəkin, məsələn, yerdə düzbucaqlı ([Üzləri çəkin](topic:draw-faces)).
2. {{key:P}} basın.
3. Üzün üzərinə gətirin. O, vurğulanır.
4. Üzə klikləyin, sonra göstəricini hərəkət etdirin. Üz qalxır (ya da enir) və tərəflər onun kənarlarından böyüyür. Dəyər qutusu ({{ui:Distance}}) və ipucu məsafəni göstərir.
5. Bitirmək üçün klikləyin, ya da məsafə yazıb {{key:Enter}} basın: `3m`, `10'`, millimetr modelində `2700`.

   İndi bağlı bərk cisminiz var. Hamısını seçin və qruplaşdırın (bax: [Qruplar və komponentlər](topic:groups-components)): {{ui:Entity info}} sonra "Bərk cisim: Bəli" və onun həcmini göstərir.

Tək üz hər iki istiqamətə gedə bilər: yerdən yuxarı kütlə üçün onu çəkin, çuxur və ya bünövrə üçün aşağı itələyin.

:::tip
İki dəfə klikləmək əvəzinə, üzün üstündə basın, sürükləyin və buraxın. Toxunma ekranında bu təbii yoldur: basın, sürükləyin, qaldırın.
:::

## Başqa bir şeyin hündürlüyünə çəkin

Çəkərkən modelin başqa hissəsinin künc, orta nöqtə, kənar və ya bələdçisinin üzərinə gətirin. Üz o hündürlüyə yapışır və işarə nöqtəni göstərir. Onu iki bloku eyni hündürlükdə etmək üçün istifadə edin, ya da [ölçü lenti](topic:guides-measure) ilə qoyduğunuz bələdçi xəttində dayanmaq üçün.

Həmçinin itələdiyiniz üzə paralel olan üzün üzərinə gətirə bilərsiniz, məsələn, başqa blokun üstü və ya dirəyin dayandığı qutunun üstü. İpucu "Üzün üstündə" deyir və itələdiyiniz üz onunla səviyyədə bitir. Məsələn, borunun daxili üzünü borunun altındakı qutu ilə səviyyə olana qədər aşağı itələyin.

İtələdiyiniz üzə bucaq altında olan üz səviyyə təyin etmir. Məsafə göstəricini izləyir. İtələdiyiniz üzün arxasında olan üz də belədir.

İtələnmiş üz yenidən ətrafındakı üzlərlə bir səviyyədə bitdikdə, onun tərəfləri yox olur. Sıfır hündürlüklü heç bir tərəf qalmır və çəkdiyiniz kontur üzdə qalır, belə ki sonra onu yenidən itələyə bilərsiniz. Onu yenidən bir üz etmək üçün konturun kənarlarını {{ui:Eraser}} ilə silin: iki üz birləşir.

## Qutunu hündürləşdirin və ya alçaldın

{{ui:Push/pull}} ilə qutunun üstünü itələyin/çəkin. Tərəfləri artıq ondan düz yuxarı getdiyi üçün, üst sadəcə hərəkət edir: qutu hündürləşir və ya alçalır və heç bir yeni kənar yaranmır.

- Üstü aşağıya, dibinə qədər itələsəniz, qutu silinir. ModelCraft sıfır hündürlükdə dayanır; qutunu heç vaxt içəri-xaric çevirmir.
- Qonşularının hamısı öz istiqaməti boyunca uzanan hər hansı üz üçün də eyni qayda var, məsələn, divarın ucu.

## Çıxıntı və ya oyuq əlavə edin

1. Qutunun yan tərəfində düzbucaqlı çəkin (onu üzün üstündən başladın; o üzün müstəvisində qalır).
2. {{key:P}} basın və yeni düzbucaqlını **xaricə** çəkin. O, material əlavə edir: çıxıntı, baca, gölgəlik.
3. Ya da onu **içəriyə** itələyin. O, oyuq kəsir: eyvan, niş, geri çəkilmiş giriş.

Yeni hissənin tərəfləri artıq olan üzlərlə düz düşdükdə, onlar bir üzdə birləşir, belə ki düz divarda səhv xətlər alınmır.

## Tam keçirərək itələyin

Bərk cismə üz itələnərkən onun arxasındakı ilk üzdə dayanır. Həmin üzə çatdıqda, o, arxasınca açılış kəsir. Qalınlığı olan divarda pəncərə və qapı belə düzəlir. Bax: [Divarda açılış kəsin](topic:openings).

## Məsafə yazın

Üzə klikləyəndən sonra məsafəni yazın və {{key:Enter}} basın.

- Yazılmış məsafə hərəkət etdiyiniz istiqamətə gedir. Hələ hərəkət etməmisinizsə, üzün önünə doğru gedir (bərk cisimdən xaricə, yerdən yuxarı).
- Əks istiqamətə getmək üçün mənfi rəqəm yazın, məsələn `-500`.
- Klikləməzdən əvvəl fikrinizi dəyişsəniz, {{key:Esc}} basın. Üz geri qayıdır.

## Son məsafəni təkrarlayın

Bir itələ/çəkdikdən sonra, {{ui:Push/pull}} hələ seçilmiş halda başqa üzə ikiqat klikləyin. O, eyni məsafəyə hərəkət edir. Bu, bir neçə divara və ya bir neçə döşəməyə eyni qalınlıq və ya hündürlük vermək üçün sürətli yoldur.

ModelCraft məsafəni başqa alətə keçənə qədər yadda saxlayır.

## Bilmək lazım olanlar

- İtələ/çək eyni anda bir üz üzərində işləyir. Üz olmayan bir şeyə klikləsəniz, status paneli deyir: "İtələ/çək üz üzərində işləyir. Üzə klikləyin."
- Qrup və ya komponentin içindəki üzü itələmək/çəkmək üçün əvvəl onu açın (ikiqat klikləyin).
- **Toqquşma** aktiv olduqda, başqa bərk cismə toxunan itələmə və ya çəkmə toxunduğu yerdə dayanır, ipucu isə nəyə toxunduğunu deyir (obyektin adı və ya "bu qrupda sərbəst həndəsə") və qarşılaşdığı üzləri vurğulayır. Öz bərk cisminə itələdiyiniz yuva (məsələn, ofsetli üzün yenidən aşağı itələnməsi) həmin cismin bir hissəsidir və onun divarları ilə heç vaxt dayandırılmır.
- Bir-birinə itələnmiş iki bərk cisim bir-birini kəsmir və ya birləşdirmir: onların üzləri sadəcə keçir. Bax: [Hələ hazır deyil](topic:not-built-yet).
