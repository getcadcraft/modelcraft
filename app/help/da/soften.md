---
title: Blødgør og glat kanter
summary: Skjul kanterne mellem flader, der mødes i en lav vinkel, så buede former læses som én glat overflade, i ModelCraft og i eksporterede filer.
keywords: blødgør, glat, bløde kanter, glat skygning, skjul kanter, facetter, facetteret, buet, normaler, hærd, vinkel
from: 52d32453
---

En buet form i ModelCraft er lavet af flade flader. **Bløde** kanter mellem disse flader tegnes ikke, og fladerne, de forbinder, skygges som én glat overflade, så en cylinder med 24 sider ser rund ud.

Når du trækker en cirkel op med {{ui:Skub/træk}}, blødgøres dens sider for dig. For andre former blødgør du efter vinkel.

## Blødgør efter vinkel

1. Vælg det, der skal blødgøres: flader og kanter, eller en gruppe eller komponent (alle dens kanter).
2. I {{ui:Objektinfo}} skriver du en vinkel i {{ui:Blødgør op til}}, for eksempel `20`, og klikker på {{ui:Blødgør}}.

Hver kant i valget, hvis to flader drejer med den vinkel eller mindre, bliver blød; kanter med en skarpere drejning bliver hårde. Et 12-sidet prismes sider drejer 30° og dets kanter 90°, så `31` blødgør kun siderne.

{{ui:Hærd alle}} gør alle kanter i valget hårde igen. Hver er ét fortrydelsestrin.

## Ting at vide

- Kun kanter mellem præcis to flader blødgøres. Løse kanter forbliver, som de er.
- Glat skygning virker kun på tværs af bløde kanter: en flade uden bløde kanter skygges flad.
- Bløde kanter gemmes i ModelCraft-filen. Eksporter til **glTF (.glb)** og **OBJ** bærer den glatte skygning (en normal pr. hjørne), så andre programmer viser den samme overflade. Collada og STL eksporterer flade flader.
- Bløde kanter skjules i alle fladestile, også {{ui:Røntgen}} og {{ui:Trådmodel}}. For at se dem, vælg formen og klik på {{ui:Hærd alle}}; fortryd gendanner blødgøringen.
