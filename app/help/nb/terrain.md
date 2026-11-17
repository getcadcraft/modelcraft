---
title: Terreng: bakke fra høydekurver, og skulptering av den
summary: Lag bakke fra høydekurver eller som et rutenett, og hev og senk den deretter med en myk pensel.
keywords: terreng, bakke, landskap, topografi, høydekurver, konturlinjer, tomt, skråning, ås, haug, sandkasse, smoove, skulptere, fall, TIN
from: 407652b3
---

Terreng er bakke laget av trekanter, så den kan følge enhver form. Det er en gruppe: dobbeltklikk for å redigere den.

## Fra høydekurver

1. Få høydekurvene på riktige høyder: tegn dem, eller [importer en situasjonsplan](topic:site-plan) og flytt hver kurve opp til sin høyde.
2. Velg dem (alle kantene på alle kurvene).
3. {{ui:Rediger}} › {{ui:Mer}} › {{ui:Terreng fra valgte høydekurver}}.

ModelCraft kobler høydekurvepunktene med trekanter (en TIN) og myker opp hver kant innenfor, slik at bakken skyggelegges jevnt. Linjene selv blir stående; slett dem eller skjul dem når du ikke trenger dem. Svært tette høydekurver reduseres til 8 000 punkter.

## Et rutenett å skulptere

{{ui:Rediger}} › {{ui:Mer}} › {{ui:Terrengrutenett…}} ber om en bredde, en dybde og en cellestørrelse, og plasserer deretter et flatt rutenett av trekanter der du klikker på hjørnet. Små celler gir jevnere skulptering, men flere flater (høyst 200 × 200 celler).

## Skulptering: hev og senk bakken

1. Dobbeltklikk på terrenget for å åpne det.
2. {{ui:Rediger}} › {{ui:Mer}} › {{ui:Skulpter terreng}}. En sirkel viser penselen på bakken under pekeren.
3. Dra opp for å heve bakken under penselen, eller ned for å senke den. Midten flyttes mest, og bakken jevnes ut til ingenting ved sirkelens kant, slik at hauger og søkk blir glatte.

For å lage en haug med nøyaktig høyde: klikk én gang, skriv deretter høyden, for eksempel `1.5m` (minus senker den), og trykk {{key:Enter}}. For å endre penselen, skriv en lengde før du klikker: `5m` gir en pensel med radius 5 m.

Hver skulptering er ett trinn i angre.

## Ting å vite

- Skulptering flytter bare trekantflater, så hver flate forblir flat. Flater tegnet for hånd (rektangler, mangekanter) er ikke terreng: verktøyet sier fra om det.
- Skulptering flytter punkter rett opp og ned; den legger ikke til punkter. For mer detalj, lag et rutenett med mindre celler.
- Terreng eksporteres som enhver annen gruppe. I IFC er det en proxy for bygningselement, som alt annet.
