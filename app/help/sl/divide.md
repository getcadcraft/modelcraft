---
title: Razdelitev roba ali krivulje na enake dele
summary: Razdelite črto na enake kose ali določite loku ali krožnici novo število odsekov z orodjem Razdeli.
keywords: razdeli, razdeli rob, enaki deli, enaki odseki, razdeli robove, odseki, razdeli, odseki loka, odseki krožnice, točke vzdolž črte
from: 5c3ce3ed
---

{{ui:Divide}} razreže rob na enake dele, pri vsakem rezu je oglišče. Oglišča uporabite za lovljenje, za začetek črt ali za potiskanje in vlečenje delov ploskve.

## Razdelitev roba

1. Kliknite {{ui:Divide}} v orodni vrstici ali izberite rob in kliknite {{ui:Divide…}} v {{ui:Entity info}}.
2. Pokažite na rob. Oznake kažejo, kje bodo rezi: na sredini roba sta dva dela; premaknite proti koncu za več delov.
3. Kliknite, da ga razdelite na prikazane dele. Lahko pa vnesete število, na primer `5` (ali `5s`, ali `/5`), in pritisnete {{key:Enter}}: razdeli se takoj.

Deli ostanejo izbrani in to je en korak razveljavitve. Ploskev, ki ji rob pripada, ohrani svojo obliko in dobi nova oglišča.

## Razdelitev loka ali krožnice

Pokažite na poljuben odsek loka ali krožnice: razdeli se kot celota.

- Lok ali krožnica, katere oglišč ne uporablja nič drugega in leži na svoji ploskvi, se **nariše znova s toliko odseki** na pravem loku. Krajišči ostaneta na mestu, ostane ena krivulja, zato jo še vedno izberete z enim klikom in spremenite polmer v {{ui:Entity info}}. Krožnica s 24 stranicami, razdeljena na 8, postane osmerokotnik.
- Vsaka druga krivulja — rob potegnjenega valja, krivulja, narisana z {{ui:Curve}}, lok s črtami, pritrjenimi na oglišča — dobi nova oglišča na enakih dolžinah vzdolž nje, nič se ne premakne.

## Z bližnjicami za modelirnik

Orodje je enako tudi z bližnjicami za modelirnik (Nastavitve › ModelCraft › Bližnjice ali slog menija Modeler), kjer je v meniju {{ui:Mesh}} kot {{ui:Subdivide edges}}.

## Na kaj paziti

- Vnesena števila segajo od 2 do 1000; premikanje kazalca da do 100.
- Krivulja, narisana z {{ui:Curve}}, ohrani svoje točke: po {{ui:Edit points}} se nariše znova iz njih, nova oglišča pa izginejo.

Glejte tudi [Risanje ploskev s črtami, pravokotniki, krožnicami in loki](topic:draw-faces) in [Vnos natančnih velikosti v polju z vrednostjo](topic:value-box).
