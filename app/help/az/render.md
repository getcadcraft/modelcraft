---
title: Modelin şəklini render edin
summary: Gün işığına bənzər şəkil yaradın: səma, modelin yerinə və tarixinə görə günəş, yumşaq kölgələr, şüşə və metal görünüşləri, sonra PNG kimi saxlayın.
keywords: render, preset, presetlər, səhnə preseti, interyer, eksteryer, kəsik görünüşü, gecə, bir klik, render etmə, yol izləmə, yol izlənmiş, şüa izləmə, qlobal işıqlanma, əks olunmalar, sınma, yüksək keyfiyyət, foto, fotorealistik, realistik, şəkil, image, png, still, səma, günəş, gün işığı, kölgələr, yumşaq kölgələr, ambient occlusion, şüşə, metal, parlaq, materiallar, ekspozisiya, parlaqlıq, buludlu, alatoranlıq, studiya, təqdimat, duman, dumanlılıq, dumanlıq, tüstü, bulud, həcm, işıq şüaları, kaustika, adaptiv seçmə, küy
from: 517ba4d3
---

{{ui:Şəkil render edin…}} görünüşün gün işığına bənzər şəklini yaradır, çertyoj kimi yox: səma, modelin yerinə və tarixinə görə günəş, yumşaq kölgələr, künc və boşluqları qaraldan bütün səmadan gələn işıq və şüşə, metal və parlaq boya kimi görünən rənglər. Model dəyişmir.

## Görünüşü render edin

1. Şəkil üçün istədiyiniz görünüşü qurun: fırladın, yaxınlaşdırın, [səhnə](topic:scenes) seçin, göstərilməsin deyilənləri gizladın. Şəkil görünüşün öz kamerasından istifadə edir.
2. {{ui:Fayl}} qrupunda {{ui:İxrac}} düyməsinə, sonra {{ui:Şəkil render edin…}} düyməsinə klikləyin.
3. Basılmış səhnə istədiyiniz deyilsə, {{ui:Səhnə}} seçin (bax: [Səhnə presetləri](topic:render#scene-presets-a-good-picture-in-one-click)), {{ui:Ölçü}}nü seçin, sonra {{ui:Vizuallaşdır}} düyməsinə klikləyin.

   Şəkil render olunduqca dolur və hər keçiddə hamarlaşır. {{ui:Dayandır}} (və ya {{key:Esc}}) onu vaxtından əvvəl bitirir və hazır olan şəkli saxlayır.

4. Yükləmək üçün {{ui:Saxla}} düyməsinə klikləyin (başqa cür göstərilməyibsə PNG olur, {{ui:Fərqli saxla}} bunu dəyişir).

:::tip
Kamera və görünüşü yoxlamaq üçün {{ui:Qaralama}} rejimində, {{ui:Görünüşün ölçüsü}}ndə başlayın, sonra son şəkil üçün daha böyük ölçüdə {{ui:Yaxşı}} və ya {{ui:Ən yaxşı}} render edin.
:::

## Səhnə presetləri: bir klikdə yaxşı şəkil

Dialoqun yuxarısında dörd {{ui:Səhnə}} düyməsi var. Hər biri səmanı, parlaqlığı, zəminini, kənar xətlərini, keyfiyyəti və günəşi bir klikdə təyin edir, ona görə ilk şəkildən əvvəl öyrənmək üçün heç nə yoxdur. Birinə klikləyin, sonra {{ui:Vizuallaşdır}} düyməsinə klikləyin.

| Səhnə | Nəyi təyin edir | Nə üçün istifadə olunur |
|---|---|---|
| {{ui:Eksteryer}} | Açıq səma, modelin öz günəşi, zəmin açıq | Binanın xaricdən görünüşü |
| {{ui:İnteryer}} | Buludlu səma (yumşaq işıq, sərt günəş ləkəsi yox), yarım dayanma daha parlaq | Otağın içindən görünüş |
| {{ui:Kəsik görünüşü}} | Ağ studiya, zəmin yox, sürətli render-də kənar xətləri | Kəsik ilə kəsilmiş model |
| {{ui:Gecə}} | Günəş batıb (sahənin yarımkürəsinə görə qış ortasında gecə yarısı), bir dayanma daha parlaq | Modeli işıqlandıran lampalar. Lampa yoxdursa şəkil qaranlıq olur |

- {{ui:Bu görünüş üçün seç}} sizin yerinizə seçir: kəsik aktiv olanda {{ui:Kəsik görünüşü}}, kamera modelin içindədirsə {{ui:İnteryer}}, əks halda {{ui:Eksteryer}}. Dialoqu ilk dəfə açanda o, özü belə başlayır.
- Hər parametr aşağıda qalır və dəyişdirilə bilər. Səhnənin təyin etdiyi parametrlərdən birini dəyişən kimi heç bir düymə basılmış qalmır və düymələrin altındakı sətir parametrlərin sizin olduğunu deyir. Dəyərləri geri qaytarmaq üçün səhnəyə yenidən klikləyin.
- Səhnə mühərrikə, rejimə, ölçüyə, materiallara, kameraya və lampalara toxunmur.

:::note
Səhnələr ModelCraft-da və BimCraft-da eyni dəyərləri verir. Hazır şəklin görünüşü modelinizdən və video kartınızdan asılıdır.
:::

## Parametrlər

| Parametr | Nə edir |
|---|---|
| {{ui:Ölçü}} | Görünüşün ölçüsü, görünüşün ölçüsünün iki qatı, Full HD, 4K və ya kvadrat. Sabit ölçülər görünüşün kamerasını saxlayır və yanlarda daha çox və ya az göstərir |
| {{ui:Rejim}} | {{ui:Sürətli}} və ya aşağıda {{ui:Yüksək keyfiyyət (yol izləmə ilə)}}, onun {{ui:Vaxt limiti}} ilə |
| {{ui:Keyfiyyət}} | Neçə keçidin (yüksək keyfiyyətdə isə nümunənin) orta alındığı: {{ui:Qaralama}} 16, {{ui:Yaxşı}} 64, {{ui:Ən yaxşı}} 256. Daha çox keçid daha hamar kölgə və kənar verir, amma daha uzun çəkir |
| {{ui:Göy}} | {{ui:Açıq səma}}, {{ui:Buludlu}} (yumşaq işıq, zəif kölgələr), {{ui:Alatoranlıq}} (aşağı, isti işıq) və ya {{ui:Ağ studiya}} (sadə ağ fon) |
| {{ui:Günəş}} | Günəş {{ui:Üslub}} › günəşdəki tarix, vaxt və yerdən gəlir. Modelin üslubunu dəyişmədən başqa vaxtı sınamaq üçün {{ui:Bu şəkil üçün başqa tarix və vaxt seçin}} işarələyin |
| {{ui:Parlaqlıq}} | Dayanmalarla (stop) daha açıq və ya tünd |
| {{ui:Modelin altındakı zəmin}} | Kölgəni qəbul edən və üfüqə itən zəmin. Üzən model üçün söndürün |
| {{ui:Kənarları çək}} | Modelin kənarlarını şəklin üzərinə nazik çəkir, çertyoj görünüşü üçün |

Seçilmiş vaxtda günəş üfüqün altındadırsa, gecədir: səma qaralır və modelin [lampaları](topic:lights) onu işıqlandırır. Dialoq bunu bildirir.

Parametrlər `.modelcraft` faylında saxlanılır, ona görə eyni modelin növbəti şəkli saxladığınız yerdən başlayır.

## Rəngləri şüşə və ya metal kimi göstərin

{{ui:Materiallar}} altında ekrandakı hər rəngin görünüşü var: {{ui:Matt}}, {{ui:Atlas}}, {{ui:Parlaq}}, {{ui:Metal}}, {{ui:Cilalı metal}}, {{ui:Şüşə}} və ya {{ui:Buzlu şüşə}}. {{ui:Boyanmamış üzlər}} öz rəngi olmayan üzlərdir.

Pəncərələri şüşə etmək üçün pəncərə şüşələrini bir rəngə [boyayın](topic:paint), sonra həmin rəngi {{ui:Şüşə}} edin. Şüşə səmanı və arxasındakıları rəngi ilə tonlanmış şəkildə göstərir və səmanı əks etdirir.

:::note
{{ui:Sürətli}} rejimdə şüşə və metal modelin qalan hissəsini yox, səmanı əks etdirir və işıq şüşədən əyilmir. Aşağıdakı {{ui:Yüksək keyfiyyət (yol izləmə ilə)}} rejimi hər ikisini edir.
:::

## Yüksək keyfiyyət

Işığı kameranın gördüyü kimi izləyən şəkil üçün {{ui:Rejim}} › {{ui:Yüksək keyfiyyət (yol izləmə ilə)}} seçin:

- işıq səthlər arasında əks olunur, ona görə pəncərədən və ya lampadan işıqlanan otaq hər tərəfdən işıqlanır və rənglər qonşularına keçir;
- şüşə əsl şüşədir: işıq onun içindən sınır və o, modeli əks etdirir;
- metal və cilalı səthlər modelin qalan hissəsini əks etdirir;
- işıq panelləri panel kimi işıqlanır, yumşaq kölgələrlə.

Bu {{ui:Sürətli}}-dən xeyli yavaşdır: hər keçiddə hər pikselin işığı yenidən izlənir. Şəkil əvvəlcə dənəvər olur və nümunələr toplandıqca təmizlənir, ona görə kiçikdən başlayın ({{ui:Görünüşün ölçüsü}}, {{ui:Qaralama}}) və {{ui:Vaxt limiti}} seçin: vaxt bitəndə hazır şəkil saxlanılır. {{ui:Dayandır}} də onu saxlayır. İlk keçid brauzer yol izləyicisini hazırlayana qədər gözləyir.

Brauzerdə WebGPU varsa, yol izləyici CadCraft-ın öz yoludur və video kartında işləyir; şəklin altındakı sətir {{ui:Qrafik kartında yol izləmə (WebGPU)}} yazır. {{ui:Dayandır}} və ya vaxt limitindən sonra {{ui:Davam et}} eyni şəkli bütün nümunələri alana qədər davam etdirir; parametri dəyişmək və ya yenidən {{ui:Vizuallaşdır}} basmaq yenidən başlayır. WebGPU olmayanda şəkil WebGL ilə yol izlənir (sətir bunu deyir) və {{ui:Davam et}} təklif olunmur.

:::linux
Linux-da Firefox və Chrome-un əksər quraşdırmalarında hələ WebGPU yoxdur, ona görə orada yüksək keyfiyyət WebGL istifadə edir.
:::

Bu rejimdə kənarlar çəkilmir, kitabxana teksturaları öz rəngini və pürüzlülüyünü göstərir, lakin relyefini yox ([düyünlərlə yaradılmış material](topic:shading#in-high-quality-pictures) öz normalını və relyefini göstərir), kəsik isə şəkil başlamazdan əvvəl modelin üzərində edilir.

{{ui:Denoise (nümunələrdən sonra qalan dənəciyi təmizləyir)}} defolt olaraq aktivdir: şəkil bitəndə və ya dayandırılanda qalan dənəciyi bu iş üçün hazırlanmış neyron şəbəkə təmizləyir (Intel Open Image Denoise-un dərc olunmuş şəbəkəsi, öz kompüterinizdə işləyir: video kartında, yoxdursa prosessorda). Az nümunəli şəkil təmiz çıxır; {{ui:Göstər}} › {{ui:Denoise-dən əvvəl şəkil}} onu render olunduğu kimi göstərir.

## Görünüşdə render edin

{{ui:Render}} iş sahəsi yol izləyicini birbaşa görünüşün içində işlədir: fırladın, modeli redaktə edin və ya işığı dəyişdirin, o dərhal yenidən başlayır. {{ui:Sahə}}: düzbucaqlı çəkin və yalnız o render olunur; {{ui:Bütün görünüş}} geri qaytarır. {{ui:Fokus}}: kəskin olmalı olanı klikləyin, sahənin dərinliyi orada fokuslanır. {{ui:Təfsilat}} görünüşün neçə pikselini render etdiyini təyin edir (az olsa, sürətlidir). {{ui:Dayandır}} dayandırır və davam etdirir. WebGPU tələb olunur: onsuz iş sahəsi bunu bildirir, amma {{ui:İxrac}} › {{ui:Şəkil render edin…}} yenə işləyir.

## Fiziki səma və işıq profilləri video kartında

WebGPU ilə yüksək keyfiyyətdə iki əlavə səma var:

- {{ui:Fiziki səma}} gün işığını günəşin hündürlüyündən hesablayır: yuxarıda dərin mavi, üfüqdə solğun zolaq, alçaqda olanda daha isti və zəif olan günəş. {{ui:Dumanlılıq}} çox təmiz gündən (2) dumanlıya (10) qədər gedir.
- {{ui:Səma şəkli (HDRI)}} modeli real yerin panorama şəkli ilə işıqlandırır. {{ui:Şəkil seçin…}} `.hdr` və ya `.exr` (ekvirektanqulyar) faylını götürür; {{ui:Çevir}} onu modelin ətrafında fırladır, {{ui:Şəklin parlaqlığı}} isə onu açıq və ya tünd edir. Şəklin öz günəşi var, ona görə modelin günəşi əlavə olunmur. Yalnız səhifə açıq olduqda saxlanılır: yenidən açandan sonra onu yenidən seçin.

{{ui:Lampalar}} siyahısındakı hər lampa istehsalçının işıq profilini ala bilər: {{ui:IES profili…}} IES (LM-63) faylını oxuyur və lampa işığını o qurğunun necə etdiyi kimi yayır (dar aşağı işıq, divar yuyucu). Həmin adlı hər lampa ondan istifadə edir, lampa öz parlaqlığını saxlayır. Profilin adına klikləyin, istifadəni dayandırmaq üçün.

Şəffaf şüşəli pəncərələr səmanın işığının otağa daxil olmasına kömək edir, ona görə səma altında daxili şəkillər daha tez təmizlənir.

{{ui:Sürətli}} rejimi və WebGL yol izləyici {{ui:Fiziki səma}} və {{ui:Səma şəkli (HDRI)}}-ni açıq səma kimi göstərir və işıq profillərini nəzərə almır.

## Kamera

{{ui:Kamera}} şəkli fotoşəkil kimi qurur:

- {{ui:Ekspozisiya}}: {{ui:Parlaqlıq sürgüsü}}nü saxlayın və ya {{ui:Kamera parametrləri}}ni seçin və kameradakı kimi {{ui:Diafraqma (f-stop)}}, {{ui:Çəkilmə sürəti}} və {{ui:ISO}}nu təyin edin; onların yanındakı EV adi ekspozisiya dəyəridir. f/16, 1/100 s və ISO 100 günəşli günə uyğundur; daha qaranlıq səhnə daha geniş diafraqma, daha yavaş çəkilmə və ya daha yüksək ISO istəyir. Bu hər rejimdə işləyir.
- {{ui:Sahənin dərinliyi}} {{ui:Fokus məsafəsi (m)}}dən yaxın və ya uzaq olanı, həmin f-stop-lu obyektiv kimi bulandırır (görünüşün ortasındakına fokuslanmaq üçün boş buraxın); {{ui:Diafraqma forması}} fokusdan kənar işıq nöqtələrinə dairəvi və ya lopa formalı görünüş verir.
- {{ui:İki nöqtəli perspektiv (şaquli xətlər şaquli qalır)}} kameranı səviyyələndirir və şəkli, memarlıq tilt-shift obyektivinin etdiyi kimi sürüşdürür, beləliklə binaya yuxarı və ya aşağı baxanda divarlar əyilmir.
- {{ui:Ağ balans}} hansı işıq rənginin ağ göründüyünü təyin edir: isti lampa işığı üçün aşağı (məsələn 3000 K), kölgə və buludlu günlər üçün yuxarı.
- {{ui:Proyeksiya}}: {{ui:360° panorama}} panorama baxanlar üçün kameranın ətrafındakı hər şeyin 2:1 şəklini yaradır; {{ui:360° stereo panorama}} qulaqlıqlar üçün sol və sağ göz panoramalarını üst-üstə qoyur; {{ui:Kub xəritəsi (6 üz)}} 3 × 2 şəbəkədə altı kvadrat görünüş yaradır. Eni {{ui:Ölçü}}dən gəlir.

Proyeksiya, sahənin dərinliyi, iki nöqtəli perspektiv və ağ balans video kartında yol izləyici (WebGPU) tələb edir, ona görə yalnız {{ui:Yüksək keyfiyyət}} rejimində görünürlər.

## Şəkli tamamlayın

{{ui:Şəkil}} yüksək keyfiyyətli şəkli fotoşəkil kimi tənzimləyir və hər idarəetmə tam şəkli yenidən render etmədən dərhal dəyişdirir:

- {{ui:Görünüş (baxış çevrilməsi)}}: {{ui:ACES filmic}} (əvvəlki kimi şəkil), {{ui:AgX}} (daha yumşaq, çox parlaq işıqda rəngi saxlayır), {{ui:Filmic}} (yumşaq film əyrisi) və ya {{ui:Standart}} (sadə, parlaq işıq ağa kəsilir).
- {{ui:Kontrast}} və {{ui:İşıqlı hissələrin sıxılması}} (çox parlaq hissələrdə detalı geri qaytarır).
- {{ui:Bloom}} (parlaq işığın ətrafında yumşaq parıltı), {{ui:Parıltı}} onun {{ui:Parıltı zolaqları}} ilə (ən parlaq nöqtələrdən ulduz şüaları) və {{ui:Vinyetləmə}} (tünd künclər).
- {{ui:Rəng cədvəli (.cube)…}} `.cube` faylından rəng qradasiyasını tətbiq edir, onun {{ui:Rəng cədvəlinin gücü}} ilə; səma şəkli kimi, yalnız səhifə açıq olduqda saxlanılır.

## Şəkli saxlayın

{{ui:Saxla}} yanındakı {{ui:Fərqli saxla}} faylı seçir: paylaşmaq üçün {{ui:PNG}}, {{ui:JPEG}} və ya {{ui:WebP}} (JPEG və WebP yalnız brauzer yaza bildiyi yerlərdə), və video kartında yüksək keyfiyyətli render-dən sonra həmçinin:

- {{ui:PNG, 16 bit}}: tamamlanmış şəkil, çalarlar arasında daha incə addımlarla, çap və ya sonrakı redaktə üçün.
- {{ui:EXR, hər qat (32-bit float)}}: render olunduğu kimi şəkil (xətti işıq, qradasiya yox), hər render elementi və işıq qrupu öz qatı ilə, kompozit proqramları üçün.
- {{ui:Render faylı (.ccrender, sonra yenidən işləmək üçün)}}: dialoqun şəkli yenidən qarışdırıb tənzimləməsi üçün lazım olan hər şey. {{ui:Render faylı açın…}} onu qarışığı və tənzimləməsi ilə geri gətirir, render etmədən.

## Render-dən sonra işıqları qarışdırın

{{ui:Render}} basmazdan əvvəl {{ui:İşıq qarışdırması (render-dən sonra hər işığın rəngini və parlaqlığını dəyişin)}} seçin. Şəkil bitəndə (və ya dayandırılanda) {{ui:Şəkli qarışdır}} onun işıqlarını qruplarla sadalayır: səma, günəş və adlarına görə lampalar (eyni adlı hər lampa bir qrupdur). Qrupu söndürün, ona rəng verin və ya onu açıq və ya tünd edin, şəkil dərhal dəyişir, yenidən render etmədən. {{ui:Qarışığı saxla}} qarışığı sonra seçmək üçün ad altında saxlayır; {{ui:Render olunduğu kimi}} şəkli yarandığı kimi geri qaytarır. {{ui:Saxla}} qarışdırılmış şəkli saxlayır.

{{ui:Render elementləri (albedo, normallar, dərinlik, diffuse, specular, transmission, emission, ID-lər)}} şəklin hissələrini də saxlayır. {{ui:Göstər}} görünüşü onlardan birinə keçirir: səth rəngləri (albedo), normallar, dərinlik, diffuse, specular və ötürülən işıq (hər biri birbaşa və dolayı), nə işıqlanır və səma, və maska yaratmaq üçün hər obyektə və ya materiala bir rəng.

Hər ikisi əlavə qatları video kartında saxlayır. Böyük ölçülərdə video kartında yer olmaya bilər; dialoq bunu deyir və kiçik ölçü işləyir.

## Render növbəsi

Yüksək keyfiyyətli quraşdırmadan sonra {{ui:Render növbəsi}} altında {{ui:Bu şəkli növbəyə əlavə et}} şəkli indiki qurğusu ilə saxlayır; video dialoqunun {{ui:Bu animasiyanı növbəyə əlavə et}} düyməsi bütün animasiyanı, kadr-kadr yol izlənmiş şəkildə eyni edir. {{ui:Növbəni başlat}} onları bu kompüterdə bir-birinin ardınca render edir və hər bitmiş şəklin yanındakı {{ui:Saxla}} onu yükləyir. Səhifəni bağlamaq növbəni saxlayır: eyni modeli açın və o, dayandığı yerdən davam edir. Növbə WebGPU tələb olunur.

## Duman, tüstü, küy və kaustika

Bunlar {{ui:Duman, tüstü və küy}} bölməsində yaşayır və video kartında {{ui:Yüksək keyfiyyət}} rejimində işləyir; digər mühərriklər onları buraxır.

- {{ui:Duman və dumanlılıq}} havanı bir hündürlüyə qədər günəşin, səmanın və lampaların işıqlandırdığı dumanla doldurur. {{ui:Nə qədər uzağı görünür, metrlə}} onun qalınlığını təyin edir (təxminən 100 m yüngül dumanlılıq, 20 m qalın duman), {{ui:Dumanın yerdən hündürlüyü, metrlə}} onun bitdiyi yerdir və {{ui:İşıq şüaları}} duman işığa doğru nə qədər parlayır. Günəş işığı dumanı yuxarıda tərk edir, ona görə pəncərədən və ya binalar arasından günəş girən yerdə onu işıq şüaları kimi görürsünüz.
- {{ui:Tüstü və ya bulud}} dumanın kimi işıqlanan bir həcm tüstü və ya bulud əlavə edir. {{ui:Növ}} {{ui:Bulud}}, {{ui:Tüstü sütunu}} və ya {{ui:Həcm faylından (.ccvol)}} ola bilər; sonuncu CadCraft-ın öz şəbəkə formatıdır. {{ui:Təfsilat}} və {{ui:Variasiya}} yaradılmış bulud və ya sütunu dəyişdirir, {{ui:Ən uzun tərəfinin ölçüsü, metrlə (0 = modelin ölçüsü)}}, {{ui:X üzrə köçür (m)}}, {{ui:Y üzrə köçür (m)}}, {{ui:Z üzrə köçür (m)}} və {{ui:Çevir}} onu yerləşdirir (model ortasından başlayır), {{ui:Qalınlıq}} onu sıxlaşdırır, {{ui:İrəli parıltı}} işığa doğru daha parlaq edir və {{ui:Rəng}} onu rənglədir. Həcm faylı bir səma şəkli kimi yalnız səhifə açıq olduqda saxlanılır.
- {{ui:Şəkil təmiz olan yerlərdə erkən dayandır (adaptiv seçmə)}} artıq sakitləşmiş piksellərə daha çox nümunə vermir, ona görə şəklin qalan hissəsi tez bitir. {{ui:Qəbul ediləcək küy}} piksel dayananda nə qədər dənəciyin qaldığıdır. Şəklin altındakı sətir piksellərin orta hesabla neçə nümunə aldığını deyir.
- {{ui:Kaustika (şüşədən əyilən və ya güzgülərdən əks olunan işıq)}} lampalardan və günəşdən işığı izləyir, ona görə şüşə top altındakı parlaq ləkə və ya divardakı güzgü işığı dənəvər deyil, təmiz çıxır. Duman, tüstü, {{ui:Render-dən sonra işıqları qarışdır}} və ya render elementləri açıq olduqda söndürülür; 360° şəkillər, animasiyalar və Render iş sahəsi üçün yox, şəkillər üçün nəzərdə tutulub.

## Nə qədər çəkir

Şəkil öz kompüterinizdə, onun video kartı ilə render olunur; heç nə yüklənmir. Nə qədər çəkdiyi həmin karta görə dəyişir. Vaxt keçidlər və piksellərlə artır: {{ui:Ən yaxşı}} {{ui:Qaralama}}-nın 16 qat keçidi var, 4K şəkil isə Full HD-nin təxminən dörd qat pikseli. Video kartı olmayan kompüter də render edir, amma daha yavaş.

:::note
Dialoq brauzerin şəkil render edə bilmədiyini deyirsə, brauzerdə WebGL 2 yoxdur. Onu yeniləyin və ya parametrlərində aparat sürətləndirməsini aktiv edin.
:::
