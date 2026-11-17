---
title: Izreži odprtino skozi steno
summary: Narišite okno ali vrata na steno z debelino in ju potisnite skozi, tako da dobi stena pravo luknjo.
keywords: okno, vrata, odprtina, luknja, stena, izrez, potisni skozi, praznina, debelina, fasada
from: 6b22f32c
---

Odprtina potrebuje steno z dvema stranema: škatlo ali steno, ki ste jo naredili z dvigom dolgega tankega pravokotnika. Ena sama ploskev, ki stoji sama, nima ničesar, skozi kar bi jo potisnili.

## Naredite steno za vajo

1. Pritisnite {{key:R}}, kliknite vogal na tleh in vnesite `6m,0.3m` (ali `20',12"`), nato {{key:Enter}}.
2. Pritisnite {{key:P}}, kliknite pravokotnik in vnesite `3m` (ali `10'`), nato {{key:Enter}}.

Imate steno, debelo 300 mm (12 in).

## Narišite odprtino

1. Zavrtite pogled, da vidite dolgo stran stene.
2. Pritisnite {{key:R}}.
3. Premaknite kazalec nad ploskev stene, nato kliknite, kam gre spodnji vogal okna. Opomba pravi „Na ploskvi“.
4. Vnesite širino in višino okna, na primer `1.2m,1.5m` (ali `4',5'`), in pritisnite {{key:Enter}}.

   Okno je zase ploskev znotraj ploskve stene, ki ima zdaj luknjo okoli sebe.

Za postavitev okna na točno razdaljo od vogala in tal najprej uporabite [vodila](topic:guides-measure): z {{ui:Merilni trak (T)}} povlecite vodilne črte z dna in koncev stene, nato začnite pravokotnik tam, kjer se dve vodili sekata (opomba pravi „Na vodilu“).

## Potisnite skozi

1. Pritisnite {{key:P}}.
2. Kliknite ploskev okna in jo potisnite v steno.
3. Premaknite, dokler se ne ustavi na zadnji ploskvi, nato kliknite. Ali vnesite debelino stene, `300` (ali `12`), in pritisnite {{key:Enter}}.

   ModelCraft se ustavi na ploskvi zadaj in jo odpre: stena ima zdaj luknjo skozi, obdajajo pa jo štiri stranske ploskve (boki, nadprag in polica). {{ui:Podatki o entiteti}} steno še vedno imenujejo zaprto telo, ko je združena.

Če potisnete manj kot celotno debelino, dobite vdolbino namesto luknje.

## Vrata

Narišite pravokotnik, ki se začne na spodnjem robu ploskve stene (opomba pravi „Na robu“ ali „Krajišče“), tako da odprtina sega do tal. Potisnite ga enako.

## Več oken enake velikosti

1. Naredite prvo odprtino.
2. Za naslednje narišite pravokotnike, nato dvakrat kliknite vsakega z {{ui:Potisni/povleci}}: dvojni klik ponovi zadnjo razdaljo. Glejte [Potiskanje in vlečenje](topic:push-pull#repeat-the-last-distance).

## Če ni prerezalo skozi

- Pravokotnik mora biti narisan **na** ploskvi stene. Če je bil narisan v zraku pred njo, je ločena ploskev: razveljavite ga z {{ui:Razveljavi}} in narišite znova, začenši na ploskvi.
- Potiskanje se ustavi na prvi ploskvi za odprtino. Če je v steni nekaj drugega na poti (notranja ploskev, ostala od prejšnjega risanja), se ustavi tam; izbrišite robove te ploskve in poskusite znova.
- Geometrija v ločeni skupini ni prerezana. Odprite skupino, ki vsebuje steno, in narišite odprtino znotraj nje.
