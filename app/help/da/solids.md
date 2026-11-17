---
title: Massive legemer: forening, træk fra, fællesmængde
summary: Sammenføj lukkede grupper og komponenter til én, skær den ene ud af den anden, eller behold kun det, de har til fælles.
keywords: massivt legeme, massive legemer, inspektør for massive legemer, ikke massiv, ret massivt legeme, hul, løs kant, vendt forkert, forening, sammenføj, kombiner, flet, træk fra, differens, skær, skæring, fællesmængde, boolesk, ydre skal
from: f35df1cc
---

De massive værktøjer kombinerer **massive legemer**: grupper og komponenter, hvis flader lukker et volumen, med hver kant forbindende præcis to flader. {{ui:Objektinfo}} siger {{ui:Massivt legeme}}: {{ui:Ja}} for ét, og viser dets volumen.

De ligger i menuen {{ui:Massive legemer}} i gruppen {{ui:Organisér}}.

## Når noget ikke er et massivt legeme

Vælg gruppen eller komponenten. Når den ikke er et massivt legeme, siger {{ui:Objektinfo}} hvorfor, for eksempel »Ikke et massivt legeme: 4 kanter grænser op til et hul · 1 løs kant«:

| Problem | Hvad det betyder |
|---|---|
| Kanter grænser op til et hul | En flade mangler |
| Kanter delt af tre flader eller flere | En flade deler det indre, eller to former rører langs en kant |
| Flader inde i formen | En væg tilbage inde i volumenet |
| Løse kanter | Linjer, der ikke afgrænser nogen flade |
| Flader vendt forkert | Deres forsider vender ind, mod deres naboer |

{{ui:Vis problemer}} åbner det med disse kanter og flader valgt, så du kan se dem. {{ui:Ret}} lapper de enkle tilfælde i ét fortrydelsestrin: den fjerner løse kanter og flader inde i formen, vender flader den rigtige vej ud, og lukker huller, hvis kant ligger fladt. Det, den ikke kan lappe sikkert (et hul, der ikke er fladt, en kant delt af mange flader), lader den være til dig, og siger, hvad der er tilbage.

## Forening

1. Vælg to eller flere massive legemer (klik på ét, {{key:Ctrl}}+klik på de andre).
2. {{ui:Massive legemer}} › {{ui:Forening}}.

De bliver ét massivt legeme i én gruppe. Hvor de overlappede, er fladerne indeni væk.

## Træk fra

1. {{ui:Massive legemer}} › {{ui:Træk fra}}.
2. Klik på det massive legeme, der skal **tages væk** (skæreværktøjet).
3. Klik på det massive legeme, der skal **skæres**.

Det, der er tilbage af det andet massive legeme, bliver; skæreværktøjet bruges op. For eksempel, for at lave et hul gennem en blok: tegn en stolpe gennem den, gør stolpen til en gruppe, og træk derefter stolpen fra blokken.

## Fællesmængde

Vælg to eller flere massive legemer, og derefter {{ui:Massive legemer}} › {{ui:Fællesmængde}}. Kun den del, de alle deler, beholdes.

## Ting at vide

- Resultatet er en ny gruppe. Den beholder navnet, farven og tagget fra det første massive legeme (ved Træk fra: det, du skar i). Farver malet på dets flader bevares ikke.
- Flade sider i resultatet er enkelte flader. Runde sider bliver til de flade facetter, de blev tegnet med.
- Hvis en gruppe eller komponent ikke er et massivt legeme, siger værktøjet hvilken, og ændrer intet. Led efter en manglende flade eller en løs flade inde i den.
- Inde i en åben gruppe arbejder værktøjerne på grupperne og komponenterne i den gruppe.
- Hvert værktøj er ét fortrydelsestrin.
- Første gang du bruger et massivt værktøj, indlæses dets motor (manifold-3d), hvilket kan tage et øjeblik.
