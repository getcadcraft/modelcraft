---
title: .3dm modelini canlı saxlayın
summary: Modeli onu yaradan proqramda dəyişdirin və dəyişikliyi burada görün — Rhino 8-dən və ya Grasshopper təyinatından, yenidən saxlamadan və idxal etmədən.
keywords: rhino, grasshopper, canlı bağlantı, canlı əlaqə, 3dm, nurbs, parametrik, bağlantı, sinxronizasiya, skript, istinad modeli, göndərmə
from: 331b0a7e
---

Modelləşdirməyə öz proqramınızda davam edin və nəticəni burada istifadə edin: onu render etmək, işıqlandırmaq və ya ətrafında səhnə qurmaq üçün. Digər proqramdakı hər dəyişiklik ModelCraft-da bir qrupu yeniləyir.

:::note
Bağlantı eyni kompüterdə **CadCraft Studio** tələb edir. Brauzer vərəqi bağlantını qura bilmir. Heç nə internet üzərindən getmir: skript Studio ilə yalnız bu kompüterin öz ünvanı vasitəsilə, token ilə danışır.
:::

:::warning
Bu bağlantı skriptin fayl yazıcısı və digər proqram üçün əvəzedici ilə sınaqdan keçirilib, hələ Rhino və ya Grasshopper daxilində yox. Orada nəsə alınmasa, nə yazdığını bizə bildirin.
:::

## Quraşdırma

1. Studio-da ModelCraft-ı açın. {{ui:Parametrlər}} › {{ui:ModelCraft}} › {{ui:Köməkçilər}} bölməsində **AI köməkçilərinin və skriptlərin ModelCraft-dan istifadə etməsinə icazə verin** qutusunu işarələyin, sonra **Redaktə**.
2. Studio-da {{ui:Köməkçini qoşun}} seçin. Aşağıda yapışdıracağınız ünvanı və tokeni göstərəcək.
3. Skripti yükləyin: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Rhino-dan

1. `cadcraft_link.py` faylını Rhino-nun skript redaktorunda işlədin (Rhino 8-də Python 3).
2. İlk dəfə ünvanı və tokeni yapışdırın. Onlar ev qovluğunuzdakı `.cadcraft-link.json` faylında saxlanılır, heç vaxt modeldə yox. Studio hər işə düşəndə yeni token yaradır, ona görə skript o zaman yenidən soruşur.

Bütün model bir qrup kimi gəlir, sənədin adı ilə (məsələn, "stul (bağlı)"). Bundan sonra hər dəyişiklik siz bir an dayananda gəlir və yalnız dəyişən obyektlər göndərilir. Dayandırmaq üçün skripti yenidən işlədin.

## Grasshopper-dən

Ünvan və token saxlanılsın deyə əvvəlcə skripti bir dəfə Rhino-da işlədin.

1. Skript komponenti (Python 3) əlavə edin və bütün `cadcraft_link.py` mətnini ora yapışdırın.
2. Ona bu girişləri verin: `G` (həndəsə, siyahı girişi ilə), `N` (ad, istəyə bağlı), `On` (bul keçid) və `Target` (istəyə bağlı: `model` və ya `part`, hər iki proqram açıq olanda).
3. `On`-u true edin.

Hər həll `G`-ni göndərir və əvvəlki göndərdiyini əvəz edir, ona görə sürgünü sürüşdürəndə qrup burada yenilənir. Çıxış `a` nə baş verdiyini bildirir. Hər komponentin öz qrupu var.

## Qrupla nə edə bilərsiniz

- **Köçürün, etiketləyin, ətrafında qurun.** Qrupun yeri və etiketi hər yenilənmədə qalır, onun yanındakı hər şey də qalır.
- **Onun içində redaktə etməyin.** Hər yeniləmə içindəkiləri əvəz edir. Həmin obyektlər digər proqrama məxsusdur.
- **Geri qaytarma.** Bir-birindən iki saniyədən az fasilə ilə olan yeniləmələr bir geri qaytarma addımını paylaşır, ona görə {{key:Mod+Z}} bütün sürüşdürməni geri qaytarır. Növbəti yeniləmə modeli yenidən uyğunlaşdırır.
- **Saxlayın.** Saxlanmış fayl bağlantını saxlayır. Onu yenidən açdıqdan sonra skripti yenidən işlədin, eyni qrup yenilənəcək.

## Nə gəlir

Meshlər, polisəthlər, səthlər və ekstruziyalar ekranda gördüyünüz mesh kimi; SubD öz meshi kimi; əyrilər kənarlar kimi; bloklar durduqları yerdə ayrı obyektlər kimi (komponent kimi yox); qatlar etiketlər kimi, rənglər və vahidlərlə birlikdə. Bunların burada necə göründüyünü [.3dm modelinin idxalı](topic:import-3dm-files) bölməsində görün.

Digər proqramda say ilə birlikdə buraxılanlar: nöqtələr, mətn, ölçülər, işıqlar və onlara bənzər şeylər.

**Yalnız bir istiqamətdə.** Burada edilən dəyişikliklər digər proqrama qayıtmır.

## Nəsə düzgün getməsə

- **"Heç bir ModelCraft və ya PartCraft pəncərəsi buna icazə vermir":** quraşdırmanın 1-ci addımını yerinə yetirin.
- **"Studio tokeni qəbul etmədi":** Studio yenidən işə düşüb. Yeni tokeni kopyalayın və skripti yenidən işlədin. Grasshopper üçün skripti əvvəlcə Rhino-da işlədin.
- **"CadCraft Studio-ya qoşulmaq olmur":** Studio işləmir və ya ünvan dəyişib.
