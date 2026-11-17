---
title: Myk opp og jevn ut kanter
summary: Skjul kantene mellom flater som møtes i en flat vinkel, slik at buede former leses som én jevn overflate, i ModelCraft og i eksporterte filer.
keywords: myk opp, jevn, myke kanter, jevn skyggelegging, skjul kanter, facetter, facettert, buet, normaler, gjør hard, vinkel
from: 52d32453
---

En buet form i ModelCraft er laget av flate flater. **Myke** kanter mellom disse flatene tegnes ikke, og flatene de forbinder skyggelegges som én jevn overflate, slik at en sylinder med 24 sider ser rund ut.

Når du trekker en sirkel opp med {{ui:Trykk/trekk}}, blir sidene myknet for deg. For andre former myk opp etter vinkel.

## Myk opp etter vinkel

1. Velg det du skal myke opp: flater og kanter, eller en gruppe eller komponent (alle kantene).
2. I {{ui:Elementinfo}}, skriv en vinkel i {{ui:Myk opp til}}, for eksempel `20`, og klikk {{ui:Myk opp}}.

Hver kant i utvalget der de to flatene svinger med denne vinkelen eller mindre, blir myk; kanter med en skarpere sving blir harde. En 12-sidet prismes sider svinger 30° og kantene 90°, så `31` myker opp bare sidene.

{{ui:Gjør alle harde}} gjør hver kant i utvalget hard igjen. Hver er ett angrertrinn.

## Ting å vite

- Bare kanter mellom nøyaktig to flater myknes. Løse kanter blir som de er.
- Jevn skyggelegging virker bare over myke kanter: en flate uten myk kant skyggelegges flatt.
- Myke kanter lagres i ModelCraft-filen. **glTF (.glb)**- og **OBJ**-eksport bærer den jevne skyggeleggingen (en normal per hjørne), så andre programmer viser samme overflate. Collada og STL eksporterer flate flater.
- Myke kanter skjules i alle flatestiler, {{ui:Røntgen}} og {{ui:Trådramme}} også. For å se dem, velg formen og klikk {{ui:Gjør alle harde}}; angre henter myknet tilbake.
