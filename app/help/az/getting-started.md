---
title: ModelCraft ilə başlayın
summary: ModelCraft nə üçündür, necə açılır və sadə bir qutudan saxlanmış modelə qədər ilk dördbucaqlınız.
keywords: başlanğıc, ilk model, başlayın, dərslik, giriş, qutu, massinq, 3d, itələ çək, sürətli başlanğıc, bələdçili, bələdçi, başlanğıc, 3D-də yenisiniz
from: d47ad719
---

ModelCraft erkən dizayn üçün 3D modelləşdiricidir: kütlə tədqiqatları, otaq planları, sürətli bina formaları və onların saldığı kölgələr. Düz formalar çəkirsiniz, onları bərk cisimlərə qaldırırsınız və üzlərinə çəkməklə onlar üzərində işləməyə davam edirsiniz. Veb brauzerinizdə işləyir, modelləriniz isə kompüterinizdə qalır.

Əgər SketchUp istifadə etmisinizsə, bildiklərinizin çoxu ilə işləyə bilərsiniz: eyni alət hərfləri, itələ/çək, dəqiq ölçülər üçün dəyər qutusu, qruplar və komponentlər. [Digər modelləşdiricilərdən gələnlər](topic:coming-from) fərqləri sadalayır.

## ModelCraft-ı açın

1. ModelCraft-ı Chrome, Edge, Firefox və ya Safari-nin cari versiyasında açın. Bax: [Brauzerlər və kompüterlər](common:browsers).
2. 3D görünüşün görünməsini gözləyin: ortada açıq (və ya tünd) sahə və "Modelləşdirməyə başlayın" adlı kart.

Ekranın yuxarısında alətlər paneli, solda {{ui:Kontur}} və {{ui:Komponentlər}}, ortada 3D görünüş, sağda {{ui:Obyekt məlumatı}}, {{ui:Üslub}} və {{ui:Səhnələr}}, aşağıda isə dəyər qutusu və vahidlərlə status paneli var. [ModelCraft ekranı](topic:workspace) hər hissəni izah edir.

:::note
ModelCraft WebGL tələb edir — brauzerinizin 3D çəkmə imkanı. Ekranın ortası boş qalırsa və alətlər heç nə etmirsə, bax: [Problemlərin həlli](topic:troubleshooting#the-3d-view-is-blank).
:::

## Əvvəlcə vahidləri yoxlayın

Aşağı sağ küncə baxın. Vahid seçicisi uzunluqların hansı vahidlə ölçüldüyünü göstərir.

- Brauzeriniz ABŞ-a təyin olunduqda (həmçinin Liberiya və Myanma) yeni model **fut və düym** ilə, qalan hər yerdə isə **millimetr** ilə başlayır.
- Dəyişmək üçün seçicidə başqa vahid seçin: {{ui:ft və in}}, in, m, cm və ya mm. Model özü ölçüsünü dəyişmir; yalnız uzunluqların necə göstərilməsi və vahidsiz rəqəmlərin necə oxunması dəyişir.

Vahidsiz yazılmış rəqəm modelin vahidini istifadə edir. Fut-düym modelində vahidsiz rəqəm **düymdür**, belə ki `120` 10 fut deməkdir.

## ModelCraft ilk modelinizə yol göstərsin

3D-də yenisiniz? Modelləşdirməyə başlayın kartında {{ui:Bələdçili ilk model}} düyməsinə klikləyin (həmçinin {{ui:Görünüşlər}} menyusundadır). Kiçik kart sizi dörd addımda yönləndirir: düz dördbucaqlıdan 3D printer üçün hazır modelə qədər:

1. Yerdə dördbucaqlı çəkin.
2. Onu qutuya qaldırın.
3. Qutunu bir obyektə çevirin (qrup).
4. 3D çap üçün yoxlayın, sonra 3MF və ya STL faylını yükləyin.

Kart düymələrə yox, modelə baxır: addım tamamlananda, necə etdiyinizdən asılı olmayaraq, növbətiyə keçir, geri alanda isə bir addım geri qayıdır. {{ui:Aləti seçin}} aləti sizin üçün seçir. İstənilən vaxt {{ui:×}} ilə bağlayın.

## İlk qutunuzu çəkin

1. {{ui:Düzbucaqlı}} alət üçün {{key:R}} basın, və ya alətlər panelinin {{ui:Çəkmə}} qrupunda {{ui:Düzbucaqlı}} düyməsinə klikləyin.
2. Görünüşün ortasına yaxın yerdə bir dəfə klikləyin. Bu, ilk küncdür.
3. Göstəricini uzaqlaşdırın. Dördbucaqlı onun ardınca gedir və aşağıdakı dəyər qutusu ({{ui:Ölçülər}} adlı) onun ölçüsünü göstərir.
4. Ölçünü yazın və {{key:Enter}} basın: məsələn `4m,3m`, və ya fut və düymdə `16',12'`. Əvvəlcə dəyər qutusuna klikləmək lazım deyil; rəqəm yazmaq onu oraya göndərir.

   Yerdə düz dördbucaqlı alırsınız. Bu **üzdür**: ətrafında kənarları olan səth.

5. {{ui:İtələ/çək}} üçün {{key:P}} basın.
6. Dördbucaqlıya klikləyin, göstəricini yuxarı çəkin və yenidən klikləyin. Və ya dördbucaqlıya klikləyin və hündürlük yazın, məsələn `3m` və ya `10'`, sonra {{key:Enter}} basın.

   Dördbucaqlı üstü, altı və dörd tərəfi olan qutuya çevrilir.

7. {{key:Space}} basaraq {{ui:Seç}} alətinə qayıdın, sonra qutunun üstünə klikləyin. Sağdakı {{ui:Obyekt məlumatı}} onun sahəsini göstərir.

:::tip
İki dəfə klikləmək əvəzinə sürükləyə də bilərsiniz: ilk küncdə basın, sürükləyin və ikincidə buraxın. Hər iki üsul hər çəkmə aləti üçün işləyir.
:::

## Ətrafa baxın

- **Orbit:** orta siçan düyməsi (təkər) ilə sürükləyin, və ya {{key:O}} basın və sol düymə ilə sürükləyin.
- **Sürüşdürmə:** sağ düymə ilə sürükləyin, və ya {{key:Shift}} saxlayaraq orta düymə ilə.
- **Yaxınlaşdırma:** təkəri fırladın. Göstəricinin altında olana doğru yaxınlaşdırır.
- **Hər şeyi görün:** {{key:Shift+Z}} basın, və ya {{ui:Hüdudlar}} düyməsinə klikləyin.

Trackpad və ya sensor ekranda jestlər fərqlidir. Bax: [Orbit, sürüşdürmə və yaxınlaşdırma](topic:orbit-pan-zoom).

## Geri alın

Geri almaq üçün {{key:Mod+Z}}, təkrarlamaq üçün {{key:Mod+Y}} basın, və ya alətlər panelindəki {{ui:Geri qaytar}} və {{ui:Təkrarla}} düymələrindən istifadə edin. ModelCraft model açıq olduğu müddətdə son 200 addımı yadda saxlayır. Tarix faylda saxlanmır.

## Modelinizi saxlayın

1. **Fayl** qrupunda {{ui:Saxla}} düyməsinə klikləyin, və ya {{key:Mod+S}} basın.
2. Brauzer modelinizin adını daşıyan fayl yükləyir, məsələn `Untitled.modelcraft`. Status paneli harada olduğunu deyir: "Untitled.modelcraft yükləmələrinizə saxlanıldı."

**Saxlamaq yükləmədir.** Hər saxlama yükləmələr qovluğunuzda yeni nüsxə yaradır; açdığınız faylın üzərinə yazmır. Səliqəli layihə qovluğu saxlamaq üçün faylı orada özünüz köçürün və ya adını dəyişin. [Açın, saxlayın, idxal edin və ixrac edin](topic:files) bunun səbəbini və başqa nə edə biləcəyinizi izah edir.

:::warning
ModelCraft özü saxlamır. Saxlanmamış dəyişikliklərlə səhifəni bağlasanız, brauzer əvvəlcə soruşur ("Saytdan çıxılsın?"). Qalmağı seçin, sonra saxlayın.
:::

## Kömək alın

Bu köməyi modelin yanında açmaq üçün {{key:F1}} basın və ya tətbiq panelindəki {{ui:Kömək}} düyməsinə klikləyin. Kömək internet bağlantısı olmadan da işləyir. Bağlamaq üçün yenidən {{key:F1}}, və ya kömək daxilində {{key:Esc}} basın. Bax: [Bu köməkdən istifadə](common:help).

## Növbəti addımlar

- [Xətt, dördbucaqlı və çevrələrlə üzlər çəkin](topic:draw-faces)
- [Üzləri itələyib çəkərək bərk cisimlərə çevirin](topic:push-pull)
- [Dəyər qutusunda dəqiq ölçülər yazın](topic:value-box)
- [Hər klaviş və siçan əməliyyatı](topic:keyboard)
