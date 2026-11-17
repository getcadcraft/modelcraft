---
title: Net
summary: Lav en gruppe eller komponent om til et net — den slags objekt, 3D-indholdsværktøjer modellerer med — og tilbage til skub/træk-geometri.
keywords: net, net, polygon, polygoner, n-gon, firkant, firkanter, hjørnepunkter, halvkant, uv, uv'er, konvertér, konvertér til net, konvertér til geometri, underinddeling, skulpturering, modellering, 3d-indhold
from: e32363e8
---

ModelCraft har to slags geometri. **Skub/træk-geometri** er det, du tegner: flade flader, der sidder sammen, skærer hinanden og heler. Et **net** er den slags objekt, 3D-indholdsværktøjer modellerer med: flader med et vilkårligt antal hjørner, hvor hvert hjørne kan bære sine egne teksturkoordinater (UV'er), normaler og farver, og hvert hjørnepunkt værdier såsom vægte. Et net placeres som en gruppe eller komponent og står ved siden af skub/træk-geometri i samme model.

## Lav en gruppe eller komponent om til et net

1. Vælg en gruppe eller komponent.
2. I {{ui:Objektinfo}} klikker du på {{ui:Konvertér til net}}.

Dens flader bliver nettets flader (en flade med huller kommer som trekanter), hårde kanter forbliver skarpe, bløde kanter skygges glat, og maling, materialer og importerede teksturer bliver på deres flader. Grupper og komponenter inde i den samles til det ene net. Løse kanter udelades: et net beholder flader. Hver placering af en komponent viser nettet. Det er ét trin i fortrydelsen.

## Hvad Objektinfo viser

Vælg et net for at se dets flader, hjørnepunkter og kanter, om det er et lukket legeme (og dets volumen), og dets størrelse som placeret. Et net med åbne kanter siger, hvor mange.

## Lav et net tilbage til skub/træk-geometri

Vælg nettet og klik på {{ui:Konvertér til geometri}}. Flade flader kommer tilbage, som de var; en flade, hvis hjørner ikke ligger i ét plan, kommer tilbage som trekanter. Skarpe kanter er hårde, de andre bløde. {{ui:Eksplodér}} lægger et nets flader direkte i gruppen omkring det.

## Ting at vide

- Dobbeltklik på et net for at [redigere dets hjørnepunkter, kanter og flader](topic:mesh-edit) i arbejdsområdet Net. Konvertér det til geometri for at redigere det med skub/træk; flyt, roter, skalér, kopiér, mal, skjul og markér det som enhver anden gruppe.
- Eksporter, 3D-print, renderinger og VR ser et net som dets flader.
- En fil, der indeholder et net, gemmes som en nyere version af `.modelcraft`-filen, så ModelCraft 0.6 og ældre kan ikke åbne den; filer uden et net åbnes i dem som før. Konvertér net til geometri først for at dele en fil med en, der har en ældre version.
- Fortryd på et net gemmer kun det, hvert trin ændrede, så selv et meget stort net fortrydes hurtigt.

Se også [Grupper og komponenter](topic:groups-components) og [Ikke bygget endnu](topic:not-built-yet).
