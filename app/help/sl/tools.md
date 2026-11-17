---
title: Seznam orodij
summary: Vsako orodje ModelCraft s tipko, kaj naredi vsak klik in kaj lahko vnesete v polje za vrednost med delom.
keywords: orodja, orodna vrstica, ukazi, seznam, črta, pravokotnik, krožnica, mnogokotnik, odmik, lok, krivulja, zlepek, sledi poti, potegni po poti, lok z 2 točkama, lok iz središča, izberi, potisni povleci, premakni, zasukaj, merilo, radirka, merilni trak, kota, orbitiraj, pomik, povečava, postavi komponento
from: e08a274f
---

Namig v vrstici stanja vedno pove, kaj orodje želi naslednje. {{key:Esc}} prekliče, kar orodje trenutno izvaja.

## Orodja za risanje

| Orodje | Tipka | Kliki | Vnesite v polje za vrednost |
|---|---|---|---|
| {{ui:Črta (L)}} | {{key:L}} | Začetek, nato vsaka naslednja točka. Ustavi se, ko se ploskev zaključi, ali na {{key:Esc}} | Dolžina proti kazalcu; `[x,y,z]` točka; `<dx,dy,dz>` odmik ({{ui:Dolžina}}) |
| {{ui:Pravokotnik (R)}} | {{key:R}} | Prvi kot (tla ali ploskev), nasprotni kot | Širina in globina: `4m,3m` ({{ui:Kote}}) |
| {{ui:Krožnica (C)}} | {{key:C}} | Središče (tla ali ploskev), točka na robu | Pred prvim klikom: stranice, `24s` ali `24` ({{ui:Stranice}}). Potem: polmer ({{ui:Polmer}}) |
| {{ui:Mnogokotnik (N)}} | {{key:N}} | Središče, kot | Enako kot pri Krožnici; začne s 6 stranicami |
| {{ui:Lok (A)}} | {{key:A}} | Začetek, konec, nato izboklina | Dolžina tetive po začetku ({{ui:Dolžina}}); izboklina po koncu ({{ui:Izboklina}}); `12s` za segmente |
| {{ui:Kotomer}} | — | Središče, točka 0°, nato kot | Kot v stopinjah ({{ui:Kot}}) |
| {{ui:Sledi poti}} | — | Izberite pot, nato kliknite ploskev (ali kliknite ploskev, nato rob poti) | — |
| {{ui:Pobarvaj (B)}} | {{key:B}} | Ploskev, skupina ali komponenta | — ({{key:Ctrl}} povezano, {{key:Shift}} vse te barve, {{key:Alt}} prevzame barvo) |
| {{ui:Odmik (F)}} | {{key:F}} | Ploskev (ali najprej izberite ploskev ali robove), nato stran in razdalja | Razdalja ({{ui:Razdalja}}); v ploskev pomeni navznoter |
| {{ui:Krivulja}} | — | Točke, skozi katere gre krivulja; {{key:Enter}} ali dvoklik konča | Dolžina vzdolž kazalca, `[x,y,z]` ali `<dx,dy,dz>` za naslednjo točko |
| {{ui:Lok iz središča}} | — | Središče, začetek, nato konec | Polmer po središču; kot v stopinjah po začetku; `12s` za segmente |

## Orodja za urejanje

| Orodje | Tipka | Kliki | Vnesite v polje za vrednost |
|---|---|---|---|
| {{ui:Izberi}} | {{key:Space}} | Klik, dvoklik, trikratni klik, povlek okvirja. Glejte [Izbira stvari](topic:select) | Z eno izbrano koto ali robom: nova dolžina, ki spremeni velikost modela |
| {{ui:Potisni/povleci}} | {{key:P}} | Ploskev, nato razdalja. Dvokliknite ploskev, da ponovite zadnjo razdaljo | Razdalja; negativna gre v nasprotno smer ({{ui:Razdalja}}) |
| {{ui:Premakni (M)}} | {{key:M}} | Iz točke v točko. Držite {{key:Ctrl}} ali {{key:Alt}}, da kopirate | Razdalja proti kazalcu, `<dx,dy,dz>` ali `[x,y,z]` ({{ui:Razdalja}}). Po kopiranju: `3x` ali `/3` |
| {{ui:Zasukaj (Q)}} | {{key:Q}} | Središče (na ploskvi za zasuk v njeni ravnini), začetna smer, končna smer | Kot v stopinjah ({{ui:Kot}}) |
| {{ui:Merilo (S)}} | {{key:S}} | Točka, ki ostane, referenčna točka, nova velikost | Faktor: `2`, `0.5` ({{ui:Merilo (S)}}) |
| {{ui:Radirka (E)}} | {{key:E}} | Klik ali povlek čez robove, skupine, vodila in kote | nič |
| {{ui:Merilni trak (T)}} | {{key:T}} | Od roba: vzporedna vodilna črta. Od točke: izmeri in pusti vodilno točko | Odmik ({{ui:Odmik (F)}}) ali razdalja ({{ui:Dolžina}}) |
| {{ui:Kota (D)}} | {{key:D}} | Dva kota (ali en rob), nato kam gre merilna črta. Glejte [Kotiranje in spreminjanje velikosti](topic:dimensions) | Odmik ({{ui:Odmik (F)}}). Takoj po tem: nova dolžina, ki spremeni velikost modela |

{{ui:Premakni (M)}}, {{ui:Zasukaj (Q)}} in {{ui:Merilo (S)}} delujejo na izboru. Če nič ni izbrano, najprej vzamejo tisto, kar kliknete (ploskev prinese svoje robove).

## Orodja za kamero

| Orodje | Tipka | Povlecite za |
|---|---|---|
| {{ui:Orbitiraj}} | {{key:O}} | Obračanje okoli dela modela pod kazalcem ({{key:Shift}} premakne pogled) |
| {{ui:Pomik (H)}} | {{key:H}} | Drsenje pogleda |
| {{ui:Povečava (Z)}} | {{key:Z}} | Povečava: navzgor je povečava, navzdol pomanjšava |
| {{ui:Obseg}} | {{key:Shift+Z}} | (gumb, ne orodje) Prilagodi ves model |

Z miško teh redko potrebujete: srednji povlek orbitira, desni povlek pomika in kolesce povečuje z katerim koli orodjem. Glejte [Orbitiranje, pomik in povečava](topic:orbit-pan-zoom).

## Razvrščanje

| Gumb | Tipka | Naredi |
|---|---|---|
| {{ui:Komponenta (G)}} | {{key:G}} | Izbor spremeni v komponento |
| {{ui:Skupina}} | {{key:Shift+G}} | Izbor spremeni v skupino |
| {{ui:Razstavi}} | brez | Izbrane skupine in komponente spremeni nazaj v proste geometrije |

## Postavitev komponente

Ni na orodni vrstici: kliknite {{ui:Postavi}} ob komponenti na plošči {{ui:Komponente}}. Kliknite enkrat, kamor naj gre izhodišče komponente; orodje se nato vrne na {{ui:Izberi}}.
