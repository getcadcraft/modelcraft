---
title: Başlanğıc kitabxana
summary: Modelə yerləşdirmək üçün təxminən otuz hazır şey: qapılar və pəncərələr, mebel, mətbəx və hamam, sütunlar və pilləkənlər, ağaclar, adamlar və bir avtomobil.
keywords: otağı təchiz et, mebel planlaşdırması, yataq otağı, qonaq otağı, mətbəx, hamam, ofis, render, kitabxana, başlanğıc, ətraf obyektləri, ağaclar, adamlar, avtomobillər, bitkilər, kol, hasar, komponentlər, mebel, qapı, pəncərə, stul, masa, divan, çarpayı, tualet, pilləkən, sütun, ağac, adam, avtomobil, anbar, hazır
from: 3c06b69c
---

{{ui:Başlanğıc kitabxana}} real ölçüdə gündəlik şeylər verir, beləliklə model bir baxışda oxunur: otağın miqyası üçün bir qapı, həyətdə bir avtomobil, binanın ətrafında adamlar və ağaclar.

## Birini yerləşdirin

1. Soldakı {{ui:Komponentlər}} bölməsində {{ui:Başlanğıc kitabxana}} klikləyin.
2. Bir şey seçin, məsələn {{ui:Stul}}.
3. Onun gedəcəyi yeri klikləyin.

Mərtəbədə, masada və ya zəmində o, onun üzərində durur. **Qapılar və pəncərələr** divarlara yerləşdirilməlidir: divarda klikləyin və onlar orada, xaricə baxaraq durur. (Onlar divarın üzündə oturur; açılış etmirlər. Açılış etmək üçün pəncərənin gedəcəyi divara düzbucaqlı çəkin və onu itələyib keçirin.)

Hər şey bir **komponentdir**: eyni birini yenidən seçsəniz, başqa bir nüsxə yerləşdirilir və birini redaktə etsəniz, hər nüsxə dəyişir. O, həmçinin {{ui:Komponentlər}} siyahısında göstərilir; daha çox əlavə etmək üçün {{ui:Yerləşdir}} var.

## Onun içində nə var

| Qrup | Şeylər |
|---|---|
| Qapılar və pəncərələr | Qapı, cüt qapı, pəncərə, geniş pəncərə, qaraj qapısı |
| Mebel | Yemək masası, dəyirmi masa, stul, bar oturacağı, divan, kreslo, cüt və tək çarpayı, iş masası, kitab rəfi, şkaf |
| Mətbəx və hamam | Aşağı və divar şkafı, mətbəx piştaxtası, soyuducu, soba, yuyucu vanna, tualet, vanna, duş, əl yuyucusu |
| Tikinti | Düz pilləkən (18 sm-lik 15 pilləkən), dəyirmi və kvadrat sütun, tir |
| Sahə və adamlar | Ağac, kol, adam (1.75 m), avtomobil |
| Ətraf obyektləri: ağaclar, adamlar və avtomobillər | Yarpaqlı ağaclar (4, 6 və 10 m), konifer, sütunvari ağac, dəyirmi və kiçik kollar, hasar, qab-bitki, dayanan və gedən adamlar, uşaq, sedan və SUV: öz rənglərində daha dəyirmi formalar, [render şəkilləri](topic:render) və sahə planları üçün |

Onlar sadə formalardır, boyana, miqyaslana və ya [unikal edilə](topic:groups-components) və dəyişdirilə bilən cisimlərdən hazırlanıb. Divar şkafı klik etdiyiniz yerdən 1.45 m yuxarıda asılır.

Ətraf obyektləri CadCraft tərəfindən çəkilib və hər məqsəd üçün sərbəst istifadə olunur (CC0); eyni ağaclar, adamlar və avtomobillər BimCraft və CadCraft üçün Kitabxana kitabxanasındadır. Avtomobilin pəncərələri {{ui:Rəngli şüşə}} materialı ilə boyanır, ona görə şəkillərdə şəffafdır.

## Render üçün otağı təchiz edin

Otağın mərtəbəsini seçin (modeldə və ya qrupun içində yuxarı baxan bir səviyyə üzü) və **Təşkil › Otağı təchiz edin…** (**Təchiz et** düyməsi) istifadə edin. Otağın nə olduğunu seçin — yataq otağı, qonaq otağı, yemək otağı, mətbəx, hamam və ya ofis — və ya ölçüyə görə təxmin etməsinə icazə verin. Başlanğıc mebel ən uzun divardan başlayaraq dövrə şəklində divarlara qoyulur, heç nə üst-üstə düşmür, və otağın divarlarındakı istənilən başlanğıc qapısının açılış sahəsi (və pəncərələrinin eni, hündür əşyaların önündə) boş qalır. Bu, qaydalarla verilən standart planlaşdırmadır, dizayn deyil, nəzərdən keçirmək üçün; eyni otaq həmişə eyni planlaşdırmanı alır.

Hər şey **bir qrupda**, **Mebel** etiketi ilə, bir geri qaytarma addımı kimi gəlir: onu götürmək üçün Geri qaytarın, qrupu silin və ya etiketi gizlədin. Yerinə düşməyən əşya status sətrində adlanır və **Problemlər** bölməsində qeyd kimi siyahıya alınır. BimCraft-ın **Otağı təchiz edin** funksiyası eyni qaydalardan istifadə edir.
