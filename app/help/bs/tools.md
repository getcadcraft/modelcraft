---
title: Lista alata
summary: Svaki ModelCraft alat s njegovom tipkom, šta radi svaki klik i šta možeš upisati u polje za vrijednost dok alat radi.
keywords: alati, traka s alatima, komande, lista, linija, pravougaonik, krug, poligon, odmak, luk, kriva, spline, prati me, provlačenje, luk sa 2 tačke, luk iz centra, odaberi, gurni povuci, pomjeri, rotiraj, skaliraj, gumica, mjerna traka, kota, orbita, pomjeri pogled, zumiraj, postavi komponentu
from: e08a274f
---

Savjet u statusnoj traci uvijek kaže šta trenutni alat traži sljedeće. {{key:Esc}} otkazuje ono što alat radi u sredini.

## Alati za crtanje

| Alat | Tipka | Klikovi | Upiši u polje za vrijednost |
|---|---|---|---|
| {{ui:Linija}} | {{key:L}} | Početak, pa svaka sljedeća tačka. Staje kad se površina zatvori ili na {{key:Esc}} | Dužinu prema pokazivaču; `[x,y,z]` tačku; `<dx,dy,dz>` pomak ({{ui:Dužina}}) |
| {{ui:Pravougaonik}} | {{key:R}} | Prvi ugao (tlo ili površina), suprotni ugao | Širinu i dubinu: `4m,3m` ({{ui:Kote}}) |
| {{ui:Krug}} | {{key:C}} | Centar (tlo ili površina), tačka na ivici | Prije prvog klika: stranice, `24s` ili `24` ({{ui:Stranice}}). Poslije: poluprečnik ({{ui:Poluprečnik}}) |
| {{ui:Poligon}} | {{key:N}} | Centar, ugao | Isto kao Krug; počinje sa 6 stranica |
| {{ui:Luk}} | {{key:A}} | Početak, kraj, pa ispupčenje | Dužinu tetive poslije početka ({{ui:Dužina}}); ispupčenje poslije kraja ({{ui:Ispupčenje}}); `12s` za segmente |
| {{ui:Uglomjer}} | — | Centar, tačku 0°, pa ugao | Ugao u stepenima ({{ui:Ugao}}) |
| {{ui:Prati me}} | — | Odaberi putanju, pa klikni površinu (ili klikni površinu, pa ivicu putanje) | — |
| {{ui:Boji}} | {{key:B}} | Površinu, grupu ili komponentu | — ({{key:Ctrl}} povezano, {{key:Shift}} sve te boje, {{key:Alt}} pokupi boju) |
| {{ui:Odmak}} | {{key:F}} | Površinu (ili prvo odaberi površinu ili ivice), pa stranu i udaljenost | Udaljenost ({{ui:Udaljenost}}); u površinu znači unutra |
| {{ui:Kriva}} | — | Tačke kroz koje kriva prolazi; {{key:Enter}} ili dvostruki klik završava | Dužinu duž pokazivača, `[x,y,z]` ili `<dx,dy,dz>` za sljedeću tačku |
| {{ui:Luk iz centra}} | — | Centar, početak, pa kraj | Poluprečnik poslije centra; ugao u stepenima poslije početka; `12s` za segmente |

## Alati za uređivanje

| Alat | Tipka | Klikovi | Upiši u polje za vrijednost |
|---|---|---|---|
| {{ui:Odaberi}} | {{key:Space}} | Klik, dvostruki klik, trostruki klik, prevuci okvir. Vidi [Odaberi stvari](topic:select) | Kad je odabrana jedna kota ili ivica: nova dužina, što mijenja veličinu modela |
| {{ui:Gurni/povuci}} | {{key:P}} | Površinu, pa udaljenost. Dvostruki klik na površinu ponavlja posljednju udaljenost | Udaljenost; negativna ide u suprotnom smjeru ({{ui:Udaljenost}}) |
| {{ui:Pomjeri}} | {{key:M}} | Od tačke do tačke. Drži {{key:Ctrl}} ili {{key:Alt}} za kopiranje | Udaljenost prema pokazivaču, `<dx,dy,dz>` ili `[x,y,z]` ({{ui:Udaljenost}}). Poslije kopiranja: `3x` ili `/3` |
| {{ui:Rotiraj}} | {{key:Q}} | Centar (na površini za okretanje u njenoj ravni), početni smjer, krajnji smjer | Ugao u stepenima ({{ui:Ugao}}) |
| {{ui:Skaliraj}} | {{key:S}} | Tačku koja ostaje, referentnu tačku, novu veličinu | Faktor: `2`, `0.5` ({{ui:Skaliraj}}) |
| {{ui:Gumica}} | {{key:E}} | Klik ili prevlačenje preko ivica, grupa, vodilica i kota | ništa |
| {{ui:Mjerna traka}} | {{key:T}} | Od ivice: paralelna vodilica. Od tačke: mjeri i ostavlja vodeću tačku | Pomak ({{ui:Odmak}}) ili udaljenost ({{ui:Dužina}}) |
| {{ui:Kota}} | {{key:D}} | Dva ugla (ili jedna ivica), pa gdje ide linija kote. Vidi [Kota i promjena veličine](topic:dimensions) | Pomak ({{ui:Odmak}}). Odmah poslije: nova dužina, što mijenja veličinu modela |

{{ui:Pomjeri}}, {{ui:Rotiraj}} i {{ui:Skaliraj}} rade nad odabirom. Ako ništa nije odabrano, prvo uzimaju ono na šta klikneš (površina donosi svoje ivice).

## Alati za kameru

| Alat | Tipka | Prevuci za |
|---|---|---|
| {{ui:Orbita}} | {{key:O}} | Okreni se oko dijela modela ispod pokazivača ({{key:Shift}} pomjera pogled) |
| {{ui:Pomjeri pogled}} | {{key:H}} | Pomjeri prikaz |
| {{ui:Zumiraj}} | {{key:Z}} | Zumiraj: gore je bliže, dolje dalje |
| {{ui:Obuhvat}} | {{key:Shift+Z}} | (dugme, ne alat) Uklopi cijeli model |

Mišem ih rijetko trebaš: prevlačenje srednjom tipkom kruži, prevlačenje desnom pomjera pogled, a točkić zumira uz bilo koji alat. Vidi [Orbita, pomjeranje i zumiranje](topic:orbit-pan-zoom).

## Organizovanje

| Dugme | Tipka | Radi |
|---|---|---|
| {{ui:Komponenta}} | {{key:G}} | Pretvara odabir u komponentu |
| {{ui:Grupa}} | {{key:Shift+G}} | Pretvara odabir u grupu |
| {{ui:Rastavi}} | nema | Vraća odabrane grupe i komponente u slobodnu geometriju |

## Postavljanje komponente

Nije na traci s alatima: klikni {{ui:Postavi}} pored komponente na panelu {{ui:Komponente}}. Klikni jednom gdje ide početna tačka komponente; alat se zatim vraća na {{ui:Odaberi}}.
