---
title: Popis alata
summary: Svaki alat ModelCraft s tipkom, što radi svaki klik i što možete upisati u okvir za vrijednost dok alat radi.
keywords: alati, alatna traka, naredbe, popis, linija, pravokutnik, kružnica, poligon, odmakni, luk, krivulja, spline, prati putanju, provuci, luk s 2 točke, luk iz središta, odaberi, potisni/povuci, pomakni, zakreni, skaliraj, gumica, mjerna vrpca, kota, orbit, pan, zumiranje, postavi komponentu
from: e08a274f
---

Savjet u statusnoj traci uvijek kaže što trenutni alat traži sljedeće. {{key:Esc}} otkazuje ono što alat upravo radi.

## Alati za crtanje

| Alat | Tipka | Klikovi | Upišite u okvir za vrijednost |
|---|---|---|---|
| {{ui:Linija}} | {{key:L}} | Početak, zatim svaka sljedeća točka. Staje kad se zatvori ploha ili na {{key:Esc}} | Duljina prema pokazivaču; `[x,y,z]` točka; `<dx,dy,dz>` pomak ({{ui:Duljina}}) |
| {{ui:Pravokutnik}} | {{key:R}} | Prvi kut (na tlu ili plohi), suprotni kut | Širina i dubina: `4m,3m` ({{ui:Kote}}) |
| {{ui:Kružnica}} | {{key:C}} | Središte (na tlu ili plohi), točka na rubu | Prije prvog klika: stranice, `24s` ili `24` ({{ui:Stranice}}). Poslije: polumjer ({{ui:Radijus}}) |
| {{ui:Poligon}} | {{key:N}} | Središte, kut | Isto kao kod kružnice; počinje sa 6 stranica |
| {{ui:Luk}} | {{key:A}} | Početak, kraj, zatim izbočina | Duljina tetive nakon početka ({{ui:Duljina}}); izbočina nakon kraja ({{ui:Izbočenje}}); `12s` za segmente |
| {{ui:Kutomjer}} | — | Središte, točka 0°, zatim kut | Kut u stupnjevima ({{ui:Kut}}) |
| {{ui:Prati putanju}} | — | Odaberite stazu, zatim kliknite plohu (ili kliknite plohu, pa brid staze) | — |
| {{ui:Oboji}} | {{key:B}} | Ploha, grupa ili komponenta | — ({{key:Ctrl}} povezano, {{key:Shift}} sva ta boja, {{key:Alt}} preuzmi boju) |
| {{ui:Odmakni}} | {{key:F}} | Ploha (ili prvo odaberite plohu ili bridove), zatim strana i udaljenost | Udaljenost ({{ui:Udaljenost}}); unutar plohe znači prema unutra |
| {{ui:Krivulja}} | — | Točke kroz koje krivulja prolazi; {{key:Enter}} ili dvostruki klik završava | Duljina duž pokazivača, `[x,y,z]` ili `<dx,dy,dz>` za sljedeću točku |
| {{ui:Luk iz središta}} | — | Središte, početak, zatim kraj | Polumjer nakon središta; kut u stupnjevima nakon početka; `12s` za segmente |

## Alati za uređivanje

| Alat | Tipka | Klikovi | Upišite u okvir za vrijednost |
|---|---|---|---|
| {{ui:Odaberi}} | {{key:Space}} | Klik, dvostruki klik, trostruki klik, povlačenje okvira. Vidi [Odabir stvari](topic:select) | Uz jednu odabranu kotu ili brid: nova duljina, koja mijenja veličinu modela |
| {{ui:Potisni/povuci}} | {{key:P}} | Ploha, zatim udaljenost. Dvostrukim klikom na plohu ponavlja se zadnja udaljenost | Udaljenost; negativna ide u suprotnom smjeru ({{ui:Udaljenost}}) |
| {{ui:Pomakni}} | {{key:M}} | Od točke do točke. Držite {{key:Ctrl}} ili {{key:Alt}} za kopiranje | Udaljenost prema pokazivaču, `<dx,dy,dz>` ili `[x,y,z]` ({{ui:Udaljenost}}). Nakon kopiranja: `3x` ili `/3` |
| {{ui:Zakreni}} | {{key:Q}} | Središte (na plohi za okretanje u njezinoj ravnini), početni smjer, završni smjer | Kut u stupnjevima ({{ui:Kut}}) |
| {{ui:Skaliraj}} | {{key:S}} | Točka koja ostaje, referentna točka, nova veličina | Faktor: `2`, `0.5` ({{ui:Skaliraj}}) |
| {{ui:Gumica}} | {{key:E}} | Klik ili povlačenje preko bridova, grupa, pomoćnih linija i kota | ništa |
| {{ui:Mjerna vrpca}} | {{key:T}} | Od brida: paralelna pomoćna linija. Od točke: mjeri i ostavlja pomoćnu točku | Odmak ({{ui:Odmakni}}) ili udaljenost ({{ui:Duljina}}) |
| {{ui:Kota}} | {{key:D}} | Dva kuta (ili jedan brid), zatim gdje ide linija kote. Vidi [Kotiranje i promjena veličine](topic:dimensions) | Odmak ({{ui:Odmakni}}). Odmah nakon: nova duljina, koja mijenja veličinu modela |

{{ui:Pomakni}}, {{ui:Zakreni}} i {{ui:Skaliraj}} rade na odabiru. Ako ništa nije odabrano, prvo uzimaju ono što kliknete (ploha donosi svoje bridove).

## Alati za kameru

| Alat | Tipka | Povucite za |
|---|---|---|
| {{ui:Orbit}} | {{key:O}} | Okretanje oko dijela modela pod pokazivačem ({{key:Shift}} pomiče) |
| {{ui:Pan}} | {{key:H}} | Pomicanje pogleda |
| {{ui:Zumiranje}} | {{key:Z}} | Zumiranje: gore za približavanje, dolje za udaljavanje |
| {{ui:Opseg}} | {{key:Shift+Z}} | (gumb, a ne alat) Prilagodi cijeli model |

Ovim alatima rijetko trebate služiti s mišem: povlačenje srednjom tipkom okreće, povlačenje desnom tipkom pomiče, a kotačić zumira uz bilo koji alat. Vidi [Orbit, pan i zumiranje](topic:orbit-pan-zoom).

## Organiziranje

| Gumb | Tipka | Radi |
|---|---|---|
| {{ui:Komponenta}} | {{key:G}} | Od odabira pravi komponentu |
| {{ui:Grupa}} | {{key:Shift+G}} | Od odabira pravi grupu |
| {{ui:Rastavi}} | nema | Vraća odabrane grupe i komponente u slobodnu geometriju |

## Postavi komponentu

Nije na alatnoj traci: kliknite {{ui:Postavi}} pored komponente na ploči {{ui:Komponente}}. Kliknite jednom tamo gdje ide ishodište komponente; alat se zatim vraća na {{ui:Odaberi}}.
