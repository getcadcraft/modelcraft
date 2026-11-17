---
title: Presek ploskev
summary: Narišite črte, kjer se ploskve sekajo skozi druga drugo, da lahko potiskate, brišete ali barvate kose.
keywords: presek, presek ploskev, presek z modelom, presek z izborom, rez, odprtina, luknja, združi, črte, kjer se ploskve sekajo, boolova operacija
from: 6bc58526
---

Ko ena oblika poteka skozi drugo, ModelCraft ne riše črte, kjer se njuni ploskve stikajo: samo se prekrivata. **Presek** riše te črte kot robove, zato se ploskve tam razdelijo. Nato lahko potiskate/vlečete, brišete ali barvate kose.

Oba ukaza sta v {{ui:Edit}} › {{ui:More}}.

## Presek z modelom

Preseka izbrano z **vsako ploskvijo na zaslonu**.

Na primer, nosilec (skupina) poteka skozi steno (druga skupina), in želite odprtino v steni:

1. Dvakrat kliknite steno, da jo odprete, in izberite vse njene ploskve ({{key:Ctrl+A}}).
2. {{ui:Edit}} › {{ui:More}} › {{ui:Intersect with model}}.

Obris nosilca se nariše na obeh ploskvah stene, kot dve novi ploskvi. Eno od njiju potisnite skozi steno, da nastane odprtina, nato zaprite steno.

## Presek z izborom

Preseka izbrane ploskve, skupine in komponente **samo med seboj**. Izberite vsaj dve.

## Kam gredo črte

Črte so vedno narisane v **odprtem kontekstu**: v modelu, kadar nobena skupina ni odprta, ali v skupini, ki jo urejate. Skupine in komponente, ki niso odprte, se ne spremenijo. Če želite prerezati ploskve skupine, jo torej najprej odprite, kot v zgornjem primeru.

## Stvari, ki jih je treba vedeti

- Ploskve, ki ležijo v isti ravnini, se ne sekajo.
- Črte, ki na ploskvi zaprejo zanko, naredijo novo ploskev, kot narisane črte.
- Vsak presek je en korak razveljavitve. Če nič ne seka, se nič ne spremeni.
- Za zaprte oblike celotno delo v enem koraku opravijo [orodja za telesa](topic:solids) (Združi, Odštej).
