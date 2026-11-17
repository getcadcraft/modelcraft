---
title: Změkčení a vyhlazení hran
summary: Skryjte hrany mezi plochami, které se stýkají v mělkém úhlu, aby zakřivené tvary působily jako jediný hladký povrch, v ModelCraft i v exportovaných souborech.
keywords: změkčit, vyhladit, měkké hrany, hladké stínování, skrýt hrany, fasety, fasetovaný, zakřivený, normály, ztvrdit, úhel
from: 52d32453
---

Zakřivený tvar v ModelCraft se skládá z rovných ploch. **Měkké** hrany mezi těmito plochami se nekreslí a plochy, které spojují, se stínují jako jeden hladký povrch, takže válec s 24 stranami vypadá kulatě.

Když kružnici vytáhnete pomocí {{ui:Tlač/tah}}, její strany se změkčí za vás. U ostatních tvarů změkčujte podle úhlu.

## Změkčení podle úhlu

1. Vyberte, co změkčit: plochy a hrany, nebo skupinu či komponentu (všechny její hrany).
2. V {{ui:Informace o prvku}} zadejte úhel do pole {{ui:Změkčit do}}, například `20`, a klikněte na {{ui:Změkčit}}.

Každá hrana ve výběru, jejíž dvě plochy se stáčejí o tento úhel nebo méně, se stane měkkou; hrany s ostřejším zlomem se stanou tvrdými. Boky hranolu s 12 stranami se stáčejí o 30° a jeho okraje o 90°, takže `31` změkčí jen boky.

{{ui:Ztvrdit vše}} znovu učiní každou hranu ve výběru tvrdou. Každé použití je jeden krok zpět.

## Co je dobré vědět

- Změkčí se pouze hrany mezi přesně dvěma plochami. Volné hrany zůstanou, jaké jsou.
- Hladké stínování funguje jen přes měkké hrany: plocha bez měkké hrany se stíní naplocho.
- Měkké hrany se uchovávají v souboru ModelCraft. Exporty **glTF (.glb)** a **OBJ** nesou hladké stínování (normálu na každý roh), takže i jiné programy zobrazí stejný povrch. Collada a STL exportují rovné plochy.
- Měkké hrany jsou skryté ve všech stylech ploch, včetně {{ui:Rentgen}} a {{ui:Drátový}}. Abyste je viděli, vyberte tvar a klikněte na {{ui:Ztvrdit vše}}; zpět vrátí změkčení.
