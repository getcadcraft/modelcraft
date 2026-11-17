---
title: Zjemnenie a vyhladenie hrán
summary: Skryte hrany medzi plochami, ktoré sa stretávajú v plytkom uhle, aby zakrivené tvary pôsobili ako jeden hladký povrch, v ModelCrafte aj v exportovaných súboroch.
keywords: zjemniť, vyhladiť, mäkké hrany, hladké tieňovanie, skryť hrany, facety, fasetovaný, zakrivený, normály, zatvrdiť, uhol
from: 52d32453
---

Zakrivený tvar v ModelCrafte je tvorený rovnými plochami. **Mäkké** hrany medzi týmito plochami sa nekreslia a plochy, ktoré spájajú, sa tieňujú ako jeden hladký povrch, takže valec s 24 stranami vyzerá okrúhly.

Keď kružnicu vytiahnete nástrojom {{ui:Tlač/ťah}}, jej strany sa zjemnia automaticky. Pri iných tvaroch zjemnite podľa uhla.

## Zjemnenie podľa uhla

1. Vyberte, čo zjemniť: plochy a hrany, alebo skupinu či komponent (všetky ich hrany).
2. V {{ui:Informácie o entite}} zadajte uhol do {{ui:Zjemniť do}}, napríklad `20`, a kliknite na {{ui:Zjemniť}}.

Každá hrana vo výbere, ktorej dve plochy sa otáčajú o tento uhol alebo menej, sa stane mäkkou; hrany s ostrejším zlomom sa stanú tvrdými. Bočné steny 12-stranného hranola sa otáčajú o 30° a jeho okraje o 90°, takže `31` zjemní iba bočné steny.

{{ui:Zatvrdiť všetko}} opäť zatvrdí každú hranu vo výbere. Každá takáto akcia je jeden krok späť.

## Dôležité informácie

- Zjemnia sa iba hrany medzi presne dvoma plochami. Voľné hrany zostanú, aké sú.
- Hladké tieňovanie funguje iba cez mäkké hrany: plocha bez mäkkej hrany sa tieni naplocho.
- Mäkké hrany sa uchovávajú v súbore ModelCraftu. Exporty **glTF (.glb)** a **OBJ** nesú hladké tieňovanie (normálu na každý roh), takže ostatné programy zobrazia rovnaký povrch. Collada a STL exportujú rovné plochy.
- Mäkké hrany sú skryté v každom štýle plôch, aj v {{ui:Röntgen}} a {{ui:Drôtený}}. Ak ich chcete vidieť, vyberte tvar a kliknite na {{ui:Zatvrdiť všetko}}; späť vráti zjemnenie.
