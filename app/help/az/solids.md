---
title: Cisim alətləri: birləşdirmə, çıxma, kəsişmə
summary: Qapalı qrupları və komponentləri birə birləşdirin, birini digərindən kəsin, və ya yalnız onların ortaq hissəsini saxlayın.
keywords: cisim, cisimlər, cisim yoxlayıcısı, cisim deyil, cismi düzəlt, deşik, sərgərdan kənar, içi-xaricə, birləşdir, qoşmaq, birləşdirmə, çıxar, fərq, kəs, deşik, kəsişmə, boolean, xarici qabıq
from: f35df1cc
---

Cisim alətləri **cisimləri** birləşdirir: üzləri qapalı həcm təşkil edən qruplar və komponentlər, hər kənar tam iki üzü birləşdirir. {{ui:Obyekt məlumatı}} {{ui:Bərk cisim}}: {{ui:Bəli}} deyir və həcmini göstərir.

Onlar {{ui:Təşkil}} qrupundakı {{ui:Cisimlər}} menyusundadır.

## Cisim olmayan şey

Qrupu və ya komponenti seçin. Cisim deyilsə, {{ui:Obyekt məlumatı}} səbəbini deyir, məsələn "Not a solid: 4 edges border a hole · 1 stray edge" (Cisim deyil: 4 kənar bir deşiyə sərhəddir · 1 sərgərdan kənar).

| Problem | Nə deməkdir |
|---|---|
| Kənarlar deşiyə sərhəddir | Bir üz çatışmır |
| Kənarları üç və daha çox üz paylaşır | Bir üz içəni bölür, və ya iki forma kənar boyunca toxunur |
| Formanın içindəki üzlər | Həcmin içində qalmış divar |
| Sərgərdan kənarlar | Heç bir üz təşkil etməyən xətlər |
| İçəri çevrilmiş üzlər | Ön üzləri qonşularına qarşı içəriyə baxır |

{{ui:Problemləri göstər}} seçilmiş bu kənarlar və üzlərlə açır, ki, onları görə biləsiniz. {{ui:Düzəlt}} sadə halları bir geri qaytarma addımında düzəldir: sərgərdan kənarları və formanın içindəki üzləri silir, üzləri düzgün istiqamətə çevirir və kənarı düz olan deşikləri bağlayır. Təhlükəsiz düzəldə bilmədiyi hər şeyi (düz olmayan deşik, çox üzün paylaşdığı kənar) sizə buraxır və nəyin qaldığını deyir.

## Birləşdir

1. İki və ya daha çox cisim seçin (birini klikləyin, digərləri üçün {{key:Ctrl}}+klik).
2. {{ui:Cisimlər}} › {{ui:Birləşdir}}.

Onlar bir qrupda bir cisim olur. Üst-üstə düşdükləri yerdə içəridəki üzlər yox olur.

## Çıxar

1. {{ui:Cisimlər}} › {{ui:Çıxar}}.
2. **Çıxarılacaq** cismi (kəsici) klikləyin.
3. **Kəsiləcək** cismi klikləyin.

İkinci cismin qalanı qalır; kəsici sərf olunur. Məsələn, bloka deşik açmaq üçün ona bir sütun keçirin, sütunu qrupa çevirin, sonra sütunu bloktan çıxarın.

## Kəsişdir

İki və ya daha çox cisim seçin, sonra {{ui:Cisimlər}} › {{ui:Kəsişdir}}. Yalnız hamısının paylaşdığı hissə saxlanılır.

## Bilməli olduqlarınız

- Nəticə yeni qrupdur. O, birinci cismin adını, rəngini və etiketini saxlayır (Çıxma üçün: kəsilən cismin). Onun üzlərinə boyanmış rənglər saxlanılmır.
- Nəticənin düz tərəfləri tək üzlərdir. Dairəvi tərəflər, çəkildikləri düz fasetlər kimi çıxır.
- Qrup və ya komponent cisim deyilsə, alət hansının olduğunu deyir və heç nəyi dəyişmir. Çatışmayan üzü və ya içərisindəki sərgərdan üzü axtarın.
- Açıq qrupun daxilində alətlər həmin qrupdakı qruplar və komponentlər üzərində işləyir.
- Hər alət bir geri qaytarma addımıdır.
- Cisim alətini ilk dəfə istifadə etdikdə onun mühərriki (manifold-3d) yüklənir, bu bir az vaxt apara bilər.
