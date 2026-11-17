---
title: Lista alata
summary: Svaki ModelCraft alat sa svojim tasterom, šta radi svaki klik i šta možeš da ukucaš u polje vrednosti dok alat radi.
keywords: alati, traka alata, komande, lista, linija, pravougaonik, krug, poligon, odmak, luk, kriva, splajn, prati me, sweep, luk preko 2 tačke, luk iz centra, izaberi, guraj/vuci, premesti, rotiraj, skaliraj, gumica, merna traka, kota, orbitiraj, pomeri pogled, zumiraj, postavi komponentu
from: e08a274f
---

Traka sa statusom uvek kaže šta trenutni alat traži sledeće. {{key:Esc}} otkazuje ono što alat radi u tom trenutku.

## Alati za crtanje

| Alat | Taster | Klikovi | Ukucaj u polje vrednosti |
|---|---|---|---|
| {{ui:Linija}} | {{key:L}} | Početak, pa svaka sledeća tačka. Staje kad se površ zatvori ili na {{key:Esc}} | Dužina prema pokazivaču; `[x,y,z]` za tačku; `<dx,dy,dz>` za pomeraj ({{ui:Dužina}}) |
| {{ui:Pravougaonik}} | {{key:R}} | Prvi ugao (tlo ili površ), suprotni ugao | Širina i dubina: `4m,3m` ({{ui:Kote}}) |
| {{ui:Krug}} | {{key:C}} | Centar (tlo ili površ), tačka na ivici | Pre prvog klika: broj stranica, `24s` ili `24` ({{ui:Stranice}}). Posle: poluprečnik ({{ui:Poluprečnik}}) |
| {{ui:Poligon}} | {{key:N}} | Centar, ugao | Isto kao Krug; počinje sa 6 stranica |
| {{ui:Luk}} | {{key:A}} | Početak, kraj, pa ispupčenje | Dužina tetive posle početka ({{ui:Dužina}}); ispupčenje posle kraja ({{ui:Ispupčenje}}); `12s` za segmente |
| {{ui:Uglomer}} | — | Centar, tačka 0°, pa ugao | Ugao u stepenima ({{ui:Ugao}}) |
| {{ui:Prati me}} | — | Izaberi putanju, pa klikni površ (ili klikni površ, pa ivicu putanje) | — |
| {{ui:Boji}} | {{key:B}} | Površ, grupa ili komponenta | — ({{key:Ctrl}} povezano, {{key:Shift}} sve te boje, {{key:Alt}} uzmi boju) |
| {{ui:Odmak}} | {{key:F}} | Površ (ili prvo izaberi površ ili ivice), pa stranu i rastojanje | Rastojanje ({{ui:Razdaljina}}); u površ znači unutra |
| {{ui:Kriva}} | — | Tačke kroz koje kriva prolazi; {{key:Enter}} ili dvostruki klik završava | Dužina duž pokazivača, `[x,y,z]` ili `<dx,dy,dz>` za sledeću tačku |
| {{ui:Luk iz centra}} | — | Centar, početak, pa kraj | Poluprečnik posle centra; ugao u stepenima posle početka; `12s` za segmente |

## Alati za uređivanje

| Alat | Taster | Klikovi | Ukucaj u polje vrednosti |
|---|---|---|---|
| {{ui:Izaberi}} | {{key:Space}} | Klik, dvostruki klik, trostruki klik, prevlačenje okvira. Vidi [Izaberi stvari](topic:select) | Kad je izabrana jedna dimenzija ili ivica: nova dužina, koja menja veličinu modela |
| {{ui:Guraj/vuci}} | {{key:P}} | Površ, pa rastojanje. Dvostruki klik na površ ponavlja poslednje rastojanje | Rastojanje; negativno ide u suprotnom smeru ({{ui:Razdaljina}}) |
| {{ui:Premesti}} | {{key:M}} | Od tačke do tačke. Drži {{key:Ctrl}} ili {{key:Alt}} da kopiraš | Rastojanje prema pokazivaču, `<dx,dy,dz>` ili `[x,y,z]` ({{ui:Razdaljina}}). Posle kopiranja: `3x` ili `/3` |
| {{ui:Rotiraj}} | {{key:Q}} | Centar (na površi, da okrećeš u njenoj ravni), pravac početka, pravac kraja | Ugao u stepenima ({{ui:Ugao}}) |
| {{ui:Skaliraj}} | {{key:S}} | Tačka koja ostaje, referentna tačka, nova veličina | Faktor: `2`, `0.5` ({{ui:Skaliraj}}) |
| {{ui:Gumica}} | {{key:E}} | Klik ili prevlačenje preko ivica, grupa, vodilica i kota | ništa |
| {{ui:Merna traka}} | {{key:T}} | Od ivice: paralelna vodilica. Od tačke: meri i ostavlja tačku vodilice | Odmak ({{ui:Odmak}}) ili rastojanje ({{ui:Dužina}}) |
| {{ui:Kota}} | {{key:D}} | Dva ugla (ili jedna ivica), pa gde ide kotna linija. Vidi [Kotiranje i promena veličine](topic:dimensions) | Odmak ({{ui:Odmak}}). Odmah posle: nova dužina, koja menja veličinu modela |

{{ui:Premesti}}, {{ui:Rotiraj}} i {{ui:Skaliraj}} rade nad izborom. Ako ništa nije izabrano, uzimaju ono na šta prvo klikneš (površ donosi i svoje ivice).

## Alati za kameru

| Alat | Taster | Prevuci da |
|---|---|---|
| {{ui:Orbitiraj}} | {{key:O}} | Okreće se oko dela modela ispod pokazivača ({{key:Shift}} pomera pogled) |
| {{ui:Pomeri pogled}} | {{key:H}} | Pomera prikaz |
| {{ui:Zumiraj}} | {{key:Z}} | Zumira: nagore je bliže, nadole dalje |
| {{ui:Sve}} | {{key:Shift+Z}} | (dugme, a ne alat) Uklapa ceo model |

Mišem ovo retko treba: srednjim tasterom prevlačenje okreće, desnim pomera pogled, a točkić zumira uz svaki alat. Vidi [Orbitiranje, pomeranje i zumiranje](topic:orbit-pan-zoom).

## Organizovanje

| Dugme | Taster | Radi |
|---|---|---|
| {{ui:Komponenta}} | {{key:G}} | Od izbora pravi komponentu |
| {{ui:Grupa}} | {{key:Shift+G}} | Od izbora pravi grupu |
| {{ui:Rastavi}} | nema | Vraća izabrane grupe i komponente u slobodnu geometriju |

## Postavi komponentu

Nije na traci alata: klikni {{ui:Postavi}} pored komponente u panelu {{ui:Komponente}}. Klikni jednom tamo gde ide ishodište komponente; alat se zatim vraća na {{ui:Izaberi}}.
