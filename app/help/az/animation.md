---
title: Kameranı və obyektləri animasiya edin, video render edin
summary: Zaman xəttində kamera, qruplar və komponentlər üçün açarlar təyin edin, onları görünüşdə oynadın və animasiyanı render olunmuş şəkillərin səma, günəş və materialları ilə WebM videosuna render edin.
keywords: animasiya, animasiya et, zaman xətti, açar kadr, açarlar, kamera yolu, uçuş, gəzinti, video, film, webm, videonu render et, kadrlar, kadr tezliyi, fps, oynatma başlığı, avtomatik açar, yumşaltma, hamar, saxla, səhnələr, png ardıcıllığı, hərəkət
from: d3a58249
---

**Zaman xətti** kameranı və istənilən qrupu və ya komponenti zamanla hərəkət etdirir. Siz **açarlar** təyin edirsiniz (nəyin verilmiş anda harada olduğu); ModelCraft onu açarlar arasında hamarca hərəkət etdirir. Onu görünüşdə oynadın, sonra [render olunmuş şəkil](topic:render) ilə eyni səma, günəş, materiallar və lampalarla videoya render edin.

## Zaman xəttini açın

{{ui:Kamera}} qrupunda {{ui:Görünüşlər}} düyməsini, sonra {{ui:Animasiya zaman xətti}}ni basın. Zaman xətti görünüşün altında açılır: yuxarıda idarəetmələr, sonra **Kamera** sətri və hər hərəkət edən qrup və ya komponent üçün sətir. Rombalar açarlardır; qırmızı xətt **oynatma başlığıdır**, görünüşdə göstərilən an.

:::touch
Telefonda zaman xətti də görünüşün altında açılır. İdarəetmələri bir sətirdədir: qalanına çatmaq üçün yana sürüşdürün; zaman xəttini bağlayan düymə onun sonunda qalır.
:::

Oynatma başlığını köçürmək üçün sürgünü sürükləyin (və ya sətirdə klikləyin). {{ui:Oynat}} oynatma başlığından oynadır və oynayarkən {{ui:Dayandır}}a çevrilir; yenidən klikləyin ki, olduğu yerdə dayandırsın. Zaman xətti açıq olduqda {{key:Space}} eyni işi görür (zaman xətti bağlı olduqda Space hələ də Seç-dir). {{ui:Əvvəlki açar}} və {{ui:Növbəti açar}} açarlar arasında atlayır. Öz üslubunuz oynat və dayandır üçün başqa düymə verə bilər: {{ui:Parametrlər}}, sonra menyular, düymələr və siçan, *Animasiyanı oynat və ya dayandır* əmri.

## Kameranı hərəkət etdirin

1. Oynatma başlığını çəkilişin başladığı yerə (0 s) köçürün, görünüşü qurun və {{ui:Açar kamerası}}nı basın.
2. Oynatma başlığını sonraya (məsələn, 4 s) köçürün, görünüşü orbitə alın, sürüşdürün və ya gəzin növbəti mövqeyə və yenidən {{ui:Açar kamerası}}nı basın.
3. İstədiyiniz qədər açar əlavə edin, sonra {{ui:Oynat}}.

Kamera hər açardan hamarca keçir və istirahətdə başlayır və bitir.

:::tip
Artıq [səhnələriniz](topic:scenes) var? {{ui:Səhnələrdən}} onlardan kameranın yolunu yaradır: hər səhnədə dayanır, sonra növbətiyə keçir. Zaman xəttində heç bir açar yoxdursa, {{ui:Video render et…}} bunu özü edir, beləliklə gəzinti videosu üçün iki və ya daha çox səhnə kifayətdir.
:::

## Qrup və ya komponenti hərəkət etdirin

1. Qrupu və ya komponenti seçin (yalnız bütün qruplar və komponentlər hərəkət edir; əvvəlcə [qrup yaradın](topic:groups-components)).
2. 0 s-də {{ui:Seçilmiş açar}}ı basın.
3. Oynatma başlığını sonraya köçürün, qrupu [köçürün, fırladın və ya miqyaslandırın](topic:move-copy) hara lazımdırsa və yenidən {{ui:Seçilmiş açar}}ı basın.

Açarları arasında o sürüşür, dönür və böyüyür. Dönmələr qısa yolu seçir.

**Avtomatik açar** üçüncü addımdakı klikə ehtiyacı aradan qaldırır: {{ui:Avtomatik açar}} aktiv olduqda seçilmiş qrup və ya komponenti köçürdüyünüz, fırladığınız və ya miqyaslandırdığınız zaman oynatma başlığında avtomatik açar alır (və ilk dəfədə 0 s-də olduğu yerdə açar).

:::note
Açar olmadan animasiyalı qrupu köçürmək yalnız oynatma başlığı köçənə qədər qalır: növbəti dəfə oynadanda və ya sürüşdürəndə açarlarının qoyduğu yerə qayıdır. Status paneli bunu göstərir. Saxlamaq üçün {{ui:Seçilmiş açar}}ı basın.
:::

## Açarları dəyişin

- **Açarı seçin** onun rombuna klikləyərək: oynatma başlığı ona gedir.
- **Açarı köçürün** onu sətirdə rombu sürükləyərək, və ya {{key:Left}} və {{key:Right}} ilə (bir kadr; {{key:Shift}} ilə on kadr).
- **Silin** {{ui:Açarı sil}} ilə (seçilmiş açar və ya oynatma başlığındakı bütün açarlar) və ya seçilmiş rombda {{key:Delete}} ilə.
- **Növbətiyə necə keçir**, seçilmiş açar üçün: {{ui:Hamar}} (ətrafdakı açarlardan keçən əyri), {{ui:Sabit}} (bir sürətlə düz xətt), {{ui:Yavaş başlayıb yavaş bitir}} (bu açarda istirahətə gəlir) və ya {{ui:Saxla}} (növbəti açara qədər yerində qalır).
- **Uzunluq (s)** animasiyanın nə qədər uzun olduğunu təyin edir; sonundan sonra qoyulan açar onu uzadır. Qısaltmaq üçün əvvəlcə yeni sonundan keçən açarları köçürün və ya silin.
- Qrupun sətirindəki **×** onun animasiyasını dayandırır.

Zaman xəttinin öz {{ui:Geri qaytar}} və {{ui:Təkrarla}}sı var: modelin geri qaytarılması ({{key:Mod+Z}}) modeli dəyişir, açarları yox. Animasiya `.modelcraft` faylında saxlanılır. Zaman xəttini bağlamaq hərəkət edən qrupları ilk pozasına qaytarır.

## Videonu render edin

1. Zaman xəttində {{ui:Videonu render et}} düyməsini basın (və ya {{ui:İxrac}} › {{ui:Video render et…}}).
2. {{ui:Ölçü}}, {{ui:Kadr tezliyi}}, {{ui:Hər kadrın keyfiyyəti}} və {{ui:Fayl}}nı seçin.
3. {{ui:Videonu render et}} düyməsini basın. Hər kadr hazırlandıqca qalan vaxtla göstərilir.
4. Bitdikdə {{ui:Videonu saxla}} düyməsini basın.

{{ui:Dayandır}} ({{key:Esc}}) erkən bitirir; {{ui:Videonu saxla}} sonra artıq hazırlanmış kadrları qısa video kimi saxlayır.

Səma, günəş, materiallar, lampalar və parlaqlıq {{ui:Şəkil render edin…}} dialoqunda təyin olunanlardır: əvvəlcə orada təyin edin, sabit kadrı yoxlayın. Hər kadr bu kompüterdə render olunur; heç nə yüklənmir.

| Parametr | Nə edir |
|---|---|
| {{ui:Ölçü}} | 480p, 720p HD, 1080p Full HD, və ya görünüşün öz ölçüsü (1920 piksel enə qədər) |
| {{ui:Kadr tezliyi}} | Saniyədə 24, 25, 30 və ya 60 kadr. İki dəfə çox kadr iki dəfə uzun çəkir |
| {{ui:Hər kadrın keyfiyyəti}} | {{ui:Sürətli}} (4 keçid), {{ui:Qaralama}} (16) və ya {{ui:Yaxşı}} (64): daha çox keçid daha hamar kölgə və kənarlar verir |
| {{ui:Fayl}} | {{ui:WebM video}}, brauzerin yaza bildiyi yerdə {{ui:MP4 video (H.264)}}, və ya video redaktorları üçün (və video kodlayıcısı olmayan brauzerlər üçün) {{ui:PNG şəkilləri, hər kadr üçün biri (ZIP)}} |

:::tip
10 saniyəlik, saniyədə 30 kadrlı video 301 kadrdır. Əvvəlcə 480p-də {{ui:Sürətli}} sınayın ki, hərəkəti yoxlayasınız, sonra daha böyük ölçüdə {{ui:Qaralama}} və ya {{ui:Yaxşı}} render edin.
:::

WebM brauzerlərdə və VLC-də oynayır, video redaktorlar onu çevirir. {{ui:MP4 video (H.264)}} brauzerin yaza bildiyi yerdə təklif olunur. {{ui:Videonu render et}} sürətli render edicisini istifadə edir; hər kadrı yol izləmə (path trace) ilə render etmək üçün eyni dialoqda {{ui:Bu animasiyanı növbəyə əlavə et}} seçin: kadrlar [render növbəsində](topic:render#the-render-queue) hazırlanır, bu da WebGPU tələb edir.

:::firefox safari
Videonun render olunması brauzerin videonu özü kodlamasını tələb edir (WebCodecs): son Chrome, Edge, Firefox və Safari 17 bunu edir. Onsuz {{ui:PNG şəkilləri, hər kadr üçün biri (ZIP)}}ni seçin.
:::

## Bilməli olduqlarınız

- Yalnız bütün qruplar və komponentlər hərəkət edir. Üzlər, kənarlar, günəşin vaxtı və üslub hələ zamanla dəyişmir.
- {{ui:Animasiyanı ixrac et}} [Səhnələr](topic:scenes) altında hələ də görünüşü ekranda olduğu kimi, real vaxtda qeyd edir; {{ui:Videonu render et}} isə hər kadrı səma, kölgələr və materiallarla render edir.
