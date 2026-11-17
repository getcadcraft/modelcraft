---
title: ModelCraft-ı süni intellekt köməkçisi ilə istifadə edin
summary: Öz süni intellekt köməkçinizin və ya skriptinizin modelə baxmasına və sadə cisimlər qurmasına icazə verin: icazələr, CadCraft Studio ilə qoşulma və fəaliyyət jurnalı.
keywords: süni intellekt, köməkçi, agent, mcp, model kontekst protokolu, skript, avtomatlaşdırma, modelləşdirmə, qutu, silindr, render, render növbəsi, icazələr, əlaqəni kəsmək, fəaliyyət
from: 629cd0b7
---

## Nəyi öyrənəcəksiniz

Süni intellekt köməkçisinin (və ya yazdığınız skriptin) ModelCraft ilə işləməsinə necə icazə verəcəyinizi və onun nəyə toxuna biləcəyinə necə qərar verəcəyinizi öyrənəcəksiniz.

ModelCraft-ın **öz süni intellekti yoxdur** və heç nə hara göndərmir. Köməkçini siz təmin edirsiniz: Model Context Protocol (MCP) dilini başa düşən istənilən proqram. ModelCraft ona yalnız alətlər verir, hansını seçməyi isə siz edirsiniz.

## Aktivləşdirin

1. {{ui:Parametrlər}} bölməsini açın (tətbiq panelindəki dişli və ya {{key:Mod+,}}) və {{ui:ModelCraft}} bölməsinə keçin.
2. {{ui:Köməkçilər}} altında **Süni intellekt köməkçilərinin və skriptlərin ModelCraft-dan istifadə etməsinə icazə verin** qutusunu işarələyin. Siz etməyincə o, söndürülüdür.
3. Nəyə icazə verəcəyinizi seçin: **Oxu** başlanğıcda işarəlidir; **Redaktə et**, **Saxla** və ya **İxrac** yalnız lazım olduqda işarələyin.

Seçdiyiniz icazələrdən kənar alətlər köməkçiyə təklif olunmur və köməkçi onları istəsə belə, ModelCraft rədd edir və bunu fəaliyyət jurnalına yazır. Keçidi söndürmək bütün əlaqələri dərhal dayandırır; {{ui:ModelCraft parametrlərini sıfırla}} da onu söndürür.

## Köməkçinizi qoşun

Köməkçilər kompüterinizdəki **CadCraft Studio** vasitəsilə qoşulur: Studio yalnız bu kompüterin çata biləcəyi kiçik bir server işlədir və o, hər başlanğıcda yaratdığı token ilə qorunur. Studio-da {{ui:Köməkçi qoş}} seçin və ünvanı və tokeni köməkçinizə köçürün (Studio yapışdırılacaq dəqiq parametrləri göstərir). Tokeni heç vaxt paylaşmayın.

:::note
Brauzer səhifəsi köməkçi üçün əlaqə aça bilməz: brauzer tətbiqlərində keçidin heç bir təsiri yoxdur, siz kompüterinizdə CadCraft Studio-nu istifadə etməyincə.
:::

## Siz nəzarətdə qalırsınız

- **Hər dəyişiklik bir geri qaytarma addımıdır** və köməkçinin adı ilə etiketlənir (məsələn, "Köməkçi: box"). {{key:Mod+Z}} köməkçinin son dəyişikliyini bütövlükdə geri qaytarır.
- **Bağlı olduğunu bilirsiniz.** Köməkçi qoşulu olduqda tətbiq panelindəki düymə onun adını göstərir; ona klikləyərək nə edə biləcəyinə baxın və ya **Əlaqəni kəs** üçün.
- **Fəaliyyət.** {{ui:Parametrlər}} › {{ui:ModelCraft}} › {{ui:Köməkçilər}} › {{ui:Fəaliyyət}} hər çağırışı sadalayır: nə vaxt, hansı alət, yerinə yetirilib və ya rədd edilib. {{ui:Jurnalı saxla}} onun surətini saxlayır.

## Köməkçi nə tələb edə bilər

| Alət | İcazə | Nə edir |
|---|---|---|
| `app_info`, `model_describe` | Oxu | Modelin vahidi, ölçüsü və hər qrup və komponentin yeri, onun bağlı cisim olub-olmaması və həcmi |
| `view_screenshot` | Oxu | 3D görünüşün göründüyü kimi şəkli |
| `box_add`, `cylinder_add` | Redaktə et | Yeni qrup kimi qutu və ya silindr, sizin və ya onun verdiyiniz yerdə və ölçüdə ("3m", "10'" və ya modelin vahidində ədəd) |
| `instance_move`, `instances_erase` | Redaktə et | Qrupları və komponentləri köçürür və ya silir |
| `faces_list`, `materials_list` | Oxu | Qrupun və ya sərbəst həndəsənin üzləri (hər birinin istiqaməti, sahəsi və mərkəzi); rənglədə biləcəyi materiallar və rənglər |
| `push_pull` | Redaktə et | {{ui:İtələ/çək}} kimi üzü itələyir və ya çəkir |
| `paint` | Redaktə et | Üzləri və ya bütün qrupu rəng və ya materialla rəngləyir |
| `group_make` | Redaktə et | Sərbəst üzlərdən və qruplardan qrup və ya komponent yaradır |
| `scene_add`, `scene_show` | Redaktə et | Görünüşü səhnə kimi saxlayır; saxlanmış səhnəyə keçir |
| `mesh_add` | Redaktə et | Başlamaq üçün mesh obyekti (kub, kürə, silindr …), Mesh iş sahəsinin əlavə etdiyi kimi |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Oxu / Redaktə et | Meshin modifikator yığını: güzgü, massiv, bölünmə, zənginləşdirmə və digərləri; heç nə həmişəlik tətbiq olunmur |
| `usd_export` | İxrac | Modeli OpenUSD kimi (.usda, .usdc və ya .usdz), modeli USD kimi saxladığı kimi ([USD](topic:usd)); Studio-da icazə verdiyiniz qovluğa, əks halda yükləmə kimi |
| `render_still` | İxrac | Görünüşün və ya saxlanmış səhnənin render edilmiş şəkli, {{ui:Vizuallaşdır}} dialoqunun {{ui:Vizuallaşdır}} düyməsinin etdiyi kimi, Render parametrlərinizlə, başqa şey istəmədikcə (səhnə şablonu: xarici, daxili, kəsik, gecə və ya avtomatik; sürətli və ya yüksək keyfiyyət, ölçü, nümunə sayı, səma); köməkçinin baxa biləcəyi PNG, və ya Studio-da icazə verdiyiniz qovluqda PNG, EXR və ya render faylı ([Şəkil render edin](topic:render)) |
| `render_queue` | İxrac | Yüksək keyfiyyətli şəkilləri {{ui:Vizuallaşdır}} dialoqunun növbəsinə əlavə edir (görünüş və ya saxlanmış səhnələr) və növbəni işə salır; hazır şəkillər icazə verdiyiniz qovluğa gedir, və ya sizin üçün {{ui:Render növbəsi}}-də qalır. WebGPU tələb olunur |
| `link_push` | Redaktə et | Başqa proqramdan bağlanmış modeli yeniləyir (bax: [.3dm modelini canlı saxlayın](topic:live-3dm-link)) |
| `link_status` | Oxu | Bağlanmış modelin hələ də olub-olmadığını və ən son nə vaxt yeniləndiyini bildirir |
| `undo` | Redaktə et | Öz addımlarını geri qaytarır |

Köməkçinin yaratdığı cisimlər qruplar kimi daxil olur, ona görə heç vaxt sizin çəkdiklərinizlə birləşmir. Modeli saxlayan alət yoxdur: saxlamaq sizdə qalır, ixrac və ya render isə **İxrac** işarəsi tələb edir. Render modelə heç nə dəyişmir; saxlanmış səhnəni render etmək görünüşü ona keçirir, {{ui:Səhnələr}} kimi.

## Bir şey işləmirsə

- **Köməkçi ModelCraft alətlərini görmür:** bu pəncərədə keçidin açıq olduğunu və pəncərənin Studio-da açıq olduğunu yoxlayın.
- **"redaktə icazəsi lazımdır":** {{ui:Köməkçilər}} altında **Redaktə et** işarələyin, sonra yenidən soruşun.
- **"401" və ya "token" xətaları:** token dəyişib (Studio yenidən başladılıb və ya {{ui:Yeni token}}). Yeni tokeni köməkçinin parametrlərinə köçürün.

## Həmçinin bax

- [Süni intellekt köməkçiləri üçün reseptlər](common:assistants-recipes): hər biri çağırdığı alətlərlə birlikdə işlənmiş nümunələr.
