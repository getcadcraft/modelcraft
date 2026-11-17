---
title: Nät
summary: Gör om en grupp eller komponent till ett nät, den sortens objekt som 3D-innehållsverktyg modellerar med, och tillbaka till tryck/dra-geometri.
keywords: nät, polygon, polygoner, n-gon, fyrhörning, fyrhörningar, hörn, halvkant, uv, uvs, konvertera, konvertera till nät, konvertera till geometri, subdivision, skulptera, modellering, 3D-innehåll
from: e32363e8
---

ModelCraft har två slags geometri. **Tryck/dra-geometri** är det du ritar: plana ytor som sitter ihop, skär varandra och läker. Ett **nät** är den sortens objekt som 3D-innehållsverktyg modellerar med: ytor med valfritt antal hörn, där varje hörn kan bära sina egna texturkoordinater (UV), normaler och färger, och där hörnen dessutom kan ha värden som vikter. Ett nät placeras som en grupp eller komponent och ligger bredvid tryck/dra-geometri i samma modell.

## Gör en grupp eller komponent till ett nät

1. Markera en grupp eller komponent.
2. I {{ui:Entitetsinfo}} klickar du på {{ui:Konvertera till nät}}.

Dess ytor blir nätets ytor (en yta med hål kommer in som trianglar), hårda kanter förblir skarpa, mjuka kanter skuggas mjukt, och färg, material och importerade texturer ligger kvar på sina ytor. Grupper och komponenter inuti den sammanfogas till ett enda nät. Lösa kanter lämnas utanför: ett nät behåller ytor. Varje placering av en komponent visar nätet. Det är ett ångra-steg.

## Vad Entitetsinfo visar

Markera ett nät för att se dess ytor, hörn och kanter, om det är en sluten solid (och dess volym), och dess storlek som placerat. Ett nät med öppna kanter säger hur många.

## Gör ett nät till tryck/dra-geometri igen

Markera nätet och klicka på {{ui:Konvertera till geometri}}. Plana ytor kommer tillbaka som de var; en yta vars hörn inte ligger i ett plan kommer tillbaka som trianglar. Hårda kanter är skarpa, de övriga mjuka. {{ui:Spräng}} lägger nätets ytor direkt i gruppen runt det.

## Bra att veta

- Dubbelklicka på ett nät för att [redigera dess hörn, kanter och ytor](topic:mesh-edit) i Nät-arbetsytan. Gör det till geometri för att redigera det med tryck/dra; flytta, rotera, skala, kopiera, måla, dölj och tagga det som vilken grupp som helst.
- Exporter, 3D-utskrift, renderingar och VR ser ett nät som sina ytor.
- En fil som innehåller ett nät sparas som en nyare version av .modelcraft-filen, så ModelCraft 0.6 och äldre kan inte öppna den; filer utan nät öppnas i dem som tidigare. Konvertera näten till geometri först för att dela en fil med någon på en äldre version.
- Ångra på ett nät behåller bara det varje steg ändrade, så även ett mycket stort nät ångras snabbt.

Se även [Grupper och komponenter](topic:groups-components) och [Finns inte ännu](topic:not-built-yet).
