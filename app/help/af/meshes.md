---
title: Maasse
summary: Verander 'n groep of komponent in 'n maas — die soort voorwerp waarmee 3D-inhoudsgereedskap modelleer — en terug na stoot/trek-meetkunde.
keywords: maas, maasse, veelhoek, veelhoeke, n-hoek, vierhoek, vierhoeke, hoekpunte, halfrand, uv, uv's, omskakel, omskakel na maas, omskakel na meetkunde, onderverdeling, beeldhou, modellering, 3D-inhoud
from: e32363e8
---

ModelCraft het twee soorte meetkunde. **Stoot/trek-meetkunde** is wat jy teken: plat vlakke wat aan mekaar kleef, mekaar sny en heel. 'n **Maas** is die soort voorwerp waarmee 3D-inhoudsgereedskap modelleer: vlakke met enige aantal hoeke, elke hoek kan sy eie teksturkoördinate (UV's), normale en kleure dra, en elke hoekpunt waardes soos gewigte. 'n Maas word geplaas soos 'n groep of komponent, en staan langs stoot/trek-meetkunde in dieselfde model.

## Verander 'n groep of komponent in 'n maas

1. Kies 'n groep of komponent.
2. In {{ui:Entiteitinligting}}, klik {{ui:Skakel om na maas}}.

Sy vlakke word die maas se vlakke ('n vlak met gate kom as driehoeke in), harde rande bly skerp, sagte rande skakeer glad, en verf, materiale en ingevoerde teksture bly op hulle vlakke. Groepe en komponente binne dit word in die een maas saamgevoeg. Losse rande word uitgelaat: 'n maas hou vlakke. Elke plasing van 'n komponent wys die maas. Dit is een ontdoen-stap.

## Wat Entiteitinligting wys

Kies 'n maas om sy vlakke, hoekpunte en rande te sien, of dit 'n geslote soliede liggaam is (en sy volume), en sy grootte soos geplaas. 'n Maas met oop rande sê hoeveel.

## Skakel 'n maas terug na stoot/trek-meetkunde

Kies die maas en klik {{ui:Skakel om na meetkunde}}. Plat vlakke kom terug soos hulle was; 'n vlak wie se hoeke nie in een vlak is nie, kom terug as driehoeke. Skerp rande is hard, die ander sag. {{ui:Ontbind}} sit 'n maas se vlakke reguit in die groep rondom dit.

## Dinge om te weet

- Dubbelklik op 'n maas om [sy hoekpunte, rande en vlakke te wysig](topic:mesh-edit) in die Maas-werkruimte. Skakel dit om na meetkunde om dit met stoot/trek te wysig; skuif, draai, skaal, kopieer, verf, verberg en merk dit soos enige groep.
- Uitvoere, 3D-druk, weergawes en VR sien 'n maas as sy vlakke.
- 'n Lêer wat 'n maas hou, word as 'n nuwer weergawe van die `.modelcraft`-lêer gestoor, so ModelCraft 0.6 en ouer kan dit nie oopmaak nie; lêers sonder 'n maas maak daarin oop soos vroeër. Skakel maasse eers om na meetkunde om 'n lêer met iemand op 'n ouer weergawe te deel.
- Ontdoen op 'n maas hou net wat elke stap verander het, so selfs 'n baie groot maas ontdoen vinnig.

Sien ook [Groepe en komponente](topic:groups-components) en [Nog nie gebou nie](topic:not-built-yet).
