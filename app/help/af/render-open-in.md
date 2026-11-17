---
title: Open die toneel in 'n ander program
summary: Stoor die toneel as 'n USD-lêer of 'n glTF-lêer vir enige program wat hulle lees, of open dit vanuit Studio in 'n program op hierdie rekenaar.
keywords: maak oop in, usd, gltf, glb, uitvoer, weergeeprogram, argviz, studio, stuur, oorhandiging, pakket, unreal-vouer
from: 812329d5
---

Kies 'n **Maak oop in**-inskrywing in die Enjin-lys van {{ui:Weergee 'n prent…}} om die toneel na 'n ander program te neem. Niks kom terug na die model nie.

## 'n Lêer vir enige program

- **USD-lêer** stoor die toneel as `.usdc` (of `.usdz` wanneer die model prente dra): dieselfde lêer as [Stoor as USD](topic:usd), met materiale, lampe en kameras. Dit behou instansiëring en die presiese materiaalwaardes. Die meeste renderers, speletjiemotors en kykers lees USD.

- **glTF-lêer (.glb)** stoor die ligter glTF 2.0-lêer met materiale, teksture en lampe; sien [Voer 'n model uit vir ander programme](topic:export-model) vir die formate wat ModelCraft skryf.

- **Unreal-projekvouer (.zip)** stoor die vouer wat [Stuur die toneel na 'n speletjiemotor](topic:render-unreal) skryf, vir 'n projek op enige rekenaar.

Al drie werk in die blaaier en in Studio.

## In Studio: maak dit in 'n program oop

Studio lys die programme wat dit op hierdie rekenaar vind wat die toneel kan oopmaak: usdview as dit op jou soekpad is, en die rekenaar se eie program vir die lêertipe. Kies een, kies USD of glTF waar dit albei lees, en klik {{ui:Weergee}}. Studio skryf die pakket in 'n nuwe vouer onder Dokumente (`CadCraft hand-off`; niks word oorskryf nie, elke stuur kry sy eie vouer) en begin die program daarop, en sê dan waar die lêers is.

| Program | Lees die beste |
|---|---|
| usdview | USD |
| Die rekenaar se eie program | Wat die rekenaar ook al vir die lêertipe het |

Studio begin net programme van hierdie vaste lys; dit laat nie loop wat die bladsy by naam vra nie, en dit begin nooit 'n program onder die GNU GPL-lisensie nie (sien [Teken die prent met 'n ander program](topic:render-other-program#programs-cadcraft-never-runs)). Enige program wat USD of glTF lees, open die lêer uit **'n Lêer vir enige program** hierbo.

:::note
Twinmotion, Enscape en ander visualiseringsprogramme is nie in die lys nie: CadCraft is nie met hulle nagegaan nie en maak geen eis oor hulle nie. 'n glTF- of USD-lêer vanaf hier is die roete in.
:::
