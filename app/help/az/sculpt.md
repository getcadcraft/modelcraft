---
title: Meshi heykəltəraşlıqla formalaşdırın
summary: Mesh-i gil kimi fırçalarla formalaşdırın — çək, gil, hamarla, tut, şişir, qırış, sıxış, yastılaşdır — hissələri maska ilə qoruyun, X üzrə güzgüləyin və heykəltəraşlıq etdiyiniz yerə detal əlavə edin.
keywords: heykəltəraşlıq, sculpting, fırça, fırçalar, gil, çək, hamarla, tut, şişir, qırış, sıxış, yastılaşdır, maska, simmetriya, güzgü, detal, dinamik topologiya, qələm, təzyiq, planşet, stilus
from: 5477801a
---

Heykəltəraşlıq iş sahəsi mesh-i fırçalarla gil kimi formalaşdırır: səthin üzərində sürüşdürdükdə o, qalxır, batır, hamarlanır və ya dairəvi fırçanın altında göstəriciyə tabe olur, ortada ən güclü və kənarında tamamilə sönür.

## Başlayın

Mesh seçin və İş sahəsi siyahısından {{ui:Heykəltəraşlıq}} seçin. Qrup və ya komponent əvvəlcə mesh-ə çevrilir, mesh iş sahəsində olduğu kimi. Fırçalar mesh-in təpə nöqtələrinə işləyir, ona görə daha çox nöqtəsi olan mesh daha incə formalar verir: əvvəlcə onu bölün (Mesh iş sahəsinin {{ui:Bölün}} düyməsi və ya tətbiq etdiyiniz Subdivision surface modifikatoru) və ya {{ui:Təfsilat}} aktiv edin.

## Fırçalar

| Fırça | Düymə | Nə edir |
| --- | --- | --- |
| {{ui:Çəkmə}} | {{key:D}} | Fırçanın altındakı səthi qaldırır |
| {{ui:Gil}} | {{key:C}} | Əvvəlcə çuxurları doldurub, düz təbəqələr qurur |
| {{ui:Hamarla}} | {{key:S}} | Qabarcıqları hamarlayır; istənilən fırça ilə hamarlamaq üçün {{key:Shift}} basın |
| {{ui:Tut}} | {{key:G}} | Səthi göstəricini izləyərək dartır |
| {{ui:Şişir}} | {{key:I}} | Səthi öz istiqaməti boyunca şişirir |
| {{ui:Qırış}} | {{key:Shift+C}} | Kəskin oyuq kəsir |
| {{ui:Sıxış}} | {{key:P}} | Səthi fırçanın ortasına doğru çəkir |
| {{ui:Yastılaşdır}} | {{key:T}} | Səthi orta müstəvisinə doğru basır |
| {{ui:Maska}} | {{key:M}} | Səthi digər fırçalardan qoruyan maska çəkir |

Vurarkən {{key:Ctrl}} basın ki, əks istiqamətdə işləsin (qaldırmaq əvəzinə alçaltmaq, oyuq əvəzinə tirə, maskanı silmək), və ya {{ui:Götür}} aktiv edin.

## Ölçü və güc

Fırçanın ölçüsü ekranda pikseldədir, ona görə nə qədər yaxınlaşdırsanız da eyni hiss olunur: {{key:[}} və {{key:]}} onu kiçildir və böyüdür, {{key:Shift+[}} və {{key:Shift+]}} isə gücünü dəyişir. Panel hər ikisini göstərir.

Planşetdə qələmlə daha sərt basdıqda fırça böyüyür və güclənir; panel bunların hər ikisini söndürür.

## Güzgü, maska və detal

- {{ui:X üzrə güzgü}} ({{key:X}}) qırmızı boyunca hər iki tərəfi eyni anda formalaşdırır, üzlər və fiqurlar üçün.
- Maska heykəltəraşlıq edərkən tünd göstərilir. {{ui:Maskanı təmizlə}} ({{key:Alt+M}}) onu silir, {{ui:Maskanı çevir}} ({{key:Ctrl+I}}) maskalanmamışı maskalayır və maskalanmışı azad edir. Maska mesh ilə saxlanılır.
- {{ui:Təfsilat}} heykəltəraşlıq etdiyiniz yerə üçbucaq əlavə edir: panelində təyin olunan ölçüdən (ekranda piksel) uzun kənarlar fırçanın altında bölünür. Üçbucaqlardan ibarət mesh tələb edir və əvvəlcə birini yaratmağı təklif edir.

Hər vuruş bir geri qaytarma addımıdır.

:::note
Təfsilat yalnız üçbucaq əlavə edir; artıq kiçik olmuş üçbucaqları silmir. Mesh iş sahəsindəki Remesh bütün meshi yenidən hamarlayır.
:::

Həmçinin bax: [Meshi redaktə edin](topic:mesh-edit), [Meshlər](topic:meshes) və [Mesh üzərində modifikatorlar](topic:modifiers).
