---
title: Ölçü qoyun və çəkdiyiniz şeyin ölçüsünü dəyişin
summary: Künclər arasında, qövslər və çevrələr üzrə və ya iki kənar arasında ölçülər qoyun; modelin ölçüsünü dəyişmək üçün yeni uzunluq yazın. Kənarın uzunluğunu və ya qrupun enini, dərinliyini və hündürlüyünü Obyekt məlumatında yenidən yazın.
keywords: ölçü, ölçülər, ölçüləndirmə, ölçüsünü dəyiş, ölçünü dəyiş, ölçü redaktə, uzunluq, en, dərinlik, hündürlük, uzanma, sürücü ölçü, qeyd, ölçmək, sonradan, radius, diametr, bucaq, bucaqlı, qövs, çevrə, R, Ø
from: a1f815ec
---

ModelCraft-da ölçülər çəkildikdən sonra sabit deyil. Ölçü modeldə uzunluq göstərir, ona yeni uzunluq yazmaq modeli ona uyğunlaşdırır. Kənarın uzunluğunu və ya qrupun enini, dərinliyini və hündürlüyünü {{ui:Obyekt məlumatı}}nda da yenidən yaza bilərsiniz.

## Ölçü qoyun

1. {{key:D}} basın və ya alətlər panelində {{ui:Ölçü}}yə klikləyin.
2. Ölçmək üçün künc klikləyin. Çəkişdə olduğu kimi künclərə, orta nöqtələrə və kənarlara tutur.
3. İkinci künci klikləyin.

   Və ya bir **kənara** bir dəfə klikləyin (ipucu "Kənarda" deyir) bütün kənarı bir klikdə ölçmək üçün.
4. Ölçü xəttinin olmalı olduğu yerə kursoru aparın və klikləyin. Ofseti də yaza bilərsiniz, məsələn `0.5m`, və {{key:Enter}} basın.

   Səviyyə kənarı üçün ölçü xətti səviyyədə qalır, siz onu yandan baxmadıqca. Şaquli kənar üçün ölçü xətti sizə ən yaxşı baxan şaquli müstəviyə qalır.

Status paneli "Ölçü 4 m." deyir. Ölçülər modelin vahidində uzunluq göstərir və vahid seçicisində vahidi dəyişdikdə yenilənir.

## Radius, diametr və bucaq

Eyni {{ui:Ölçü}} aləti yuvarlaq şeyləri və bucaqları ölçür:

- **Qövs:** qövsə klikləyin. İpucu {{ui:Radius}} deyir. Mətnin olmalı olduğu yerə kursoru aparın və klikləyin: ölçü **R 1.5 m** oxuyur.
- **Çevrə:** çevrəyə klikləyin. Mərkəzindən keçən xətt ilə **diametr** (**Ø 3 m**) alırsınız. Çoxbucaqlılar eyni qayda ilə işləyir, künclərində çevrənin üzərində.
- **İki kənar arasındakı bucaq:** bir kənara klikləyin, sonra künclə birləşən ikinci kənara klikləyin (üzərində olarkən ipucu {{ui:Kənarlar arasında bucaq}} deyir). Sonra istədiyiniz bucağın içinə keçin və klikləyin. Künclün içində kənarlar arasında bucaq alırsınız; bir tərəfə keçsəniz yanındakı bucağı alırsınız (məsələn 30° əvəzinə 150°). Künclə nə qədər uzaqdan klik etdiyiniz qövsün harada olacağını təyin edir; və ya həmin məsafəni yazın.

Radiusu diametrə çevirmək və ya geri qaytarmaq üçün ölçünü seçin və {{ui:Obyekt məlumatı}}nda {{ui:Bu kimi göstər}}də seçin.

**Onlarla ölçüləndirmə:** radiusu və ya diametri yerləşdirdikdən dərhal sonra yeni radius və ya diametr yazın, və ya sonra seçib yazın. Qövs və ya çevrə mərkəzini saxlayır və ölçüsünü dəyişir; onu bağlayan üz (disk, yuvanın ucu) onunla birlikdə dəyişir. Yalnız iki şey ölçülür:

- **Bucaq ölçüsü** modeli heç vaxt dəyişmir. Bucağı dəyişmək üçün kənarları {{ui:Fırlat}} ilə fırladın.
- **Silindrin sonundakı çevrə** ({{ui:İtələ/çək}} ilə çəkdiyiniz çevrə) ölçüsündən dəyişdirilə bilməz, çünki yanları da dəyişməli olardı. Bunun əvəzinə silindri oxu ətrafında miqyaslayın.

## Ölçü ilə modeli ölçüləndirin

Ölçü qoyan kimi dərhal yeni uzunluq yazın və {{key:Enter}} basın: `6m`, `12'`, millimetr modelində `3500`. Model o ölçüyə dəyişir.

Sonra istənilən vaxt:

1. {{ui:Seç}} ilə ölçünün mətninə və ya xəttinə klikləyin. {{ui:Obyekt məlumatı}} **Ölçü** deyir və onun {{ui:Uzunluq}}unu göstərir.
2. Yeni uzunluq yazın və {{key:Enter}} basın. Dəyər qutusuna birbaşa yaza bilərsiniz, və ya {{ui:Obyekt məlumatı}}nda {{ui:Uzunluq}} qutusuna.

### Nə hərəkət edir

İkinci klik etdiyiniz künc hərəkət edir, və ondan kənar hər şey də:

- **Hər iki künc bir parçada** (qutunun eni, divarın hündürlüyü): hərəkət edən künc tərəfi çıxır və ya girir, ona birləşmiş üzlər uzanır. Qutu bağlı cisim olaraq qalır və tamamilə o tərəfdə olan hər şey, məsələn pəncərə komponenti, onunla birlikdə hərəkət edir.
- **İki ayrı parçada künclər** (iki qutu arasındakı boşluq): hərəkət edən künc parçası bütövlükdə köçür və boşluq dəyişir.
- **Hərəkət edən künc qrupun və ya komponentin içində, digər künc isə içində olmayanda**: bütün qrup köçür.
- **Hər iki künc eyni qrupun və ya komponentin içində**: onun içində uzanır. Komponent yerləşdirildiyi hər yerdə dəyişir, onu redaktə edəndə olduğu kimi.

Hansı ucun hərəkət etməsini dəyişmək üçün ölçünü seçin və {{ui:Obyekt məlumatı}}nda {{ui:Hərəkət edir}}də seçin:

| Seçim | Nə baş verir |
|---|---|
| {{ui:İkinci uc}} (defolt) | İkinci klik etdiyiniz uc hərəkət edir |
| {{ui:Birinci uc}} | Birinci klik etdiyiniz uc hərəkət edir |
| {{ui:Hər iki uc (mərkəzə görə)}} | Hər uc dəyişikliyin yarısını hərəkət etdirir, beləliklə orta yerində qalır |

### Ölçüləndirmə rədd edildikdə

ModelCraft heç nə dəyişmir və səbəbini status panelində deyir:

- "üz öz müstəvisindən çıxacaq": ölçü şəkildə maili gedir. Kənar boyunca, və ya qırmızı, yaşıl və ya mavi boyunca ölçün.
- "üz heç nəyə çevriləcək və ya içəri dönəcək": yeni uzunluq şəkil üçün çox qısadır.
- "hərəkət edən uc modelin künci deyil": həmin uc boş yerdə və ya kənarın ortasında yerləşdirilib. {{ui:Hərəkət edir}}də digər ucu seçin, və ya ölçünü iki künc üzərində yerləşdirin.
- "uzunluq sıfırdan böyük olmalıdır".

Hər ölçüləndirmə bir addımdır: {{key:Mod+Z}} onu geri qaytarır.

## Obyekt məlumatında ölçünü yenidən yazın

Həmişə ölçü lazım deyil:

- **Kənar:** onu seçin. {{ui:Obyekt məlumatı}}ndakı {{ui:Uzunluq}} yazı ola biləcək qutudur. Dəyər qutusuna uzunluq yazmaq da işləyir. Qırmızı, sonra yaşıl, sonra mavi boyunca daha uzaqdakı uc hərəkət edir və ona birləşən hər şey uzanır. Məsələn, qutunun ön aşağı kənarını yenidən yazmaq qutunu sağa doğru genişləndirir.
- **Qrup və ya komponent:** onu seçin. {{ui:En (qırmızı)}}, {{ui:Dərinlik (yaşıl)}} və {{ui:Hündürlük (mavi)}} qutulardır. Uzaq tərəfi (sağ, arxa, üst) hərəkət edir. Bunlar qrupun öz oxlarıdır, ona verdiyiniz hər fırlanmadan əvvəl.

Tətbiq etmək üçün {{key:Enter}}, köhnə dəyəri geri qaytarmaq üçün {{key:Esc}} basın.

## Ölçülər modelə tabe olur

Ölçü qoyulduğu iki künə bağlıdır (bucaq: onun künci və iki kənarının uzaq uclarına; radius və ya diametr: onun qövsünə və ya çevrəsinə). Həndəsəni köçürün, push/pull edin və ya ölçüləndirin — ölçü izləyir və yeni uzunluğu göstərir. Həndəsəni qrupa və ya komponentə çevirəndə də bağlı qalır.

Əgər uc künc olmayan bir yerdə qoyulubsa (üzdə və ya boş yerdə), və ya onun küncü silinibsə, həmin uc olduğu yerdə qalır. Ölçü hələ də ölçür, lakin yalnız digər ucundan ölçüləndirə bilər.

## Ölçüləri silin

- Bir ölçü: onu seçin və {{key:Delete}} basın, və ya {{ui:Silgi}} ilə ona klikləyin.
- Bütün ölçülər: heç nə seçilməyəndə {{ui:Obyekt məlumatı}}nda {{ui:Bütün ölçüləri sil}} düyməsini basın.

Ölçülər `.modelcraft` faylında saxlanılır. Başqa formatlara ixrac olunmur, onlar yalnız 3D modeli daşıyır. Ölçüləri olan fayl köhnə ModelCraft-da onlarsız açılır.
