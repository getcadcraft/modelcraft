---
title: Volumegereedschap: vereniging, aftrekken, doorsnede
summary: Voeg gesloten groepen en componenten samen tot één, snijd er één uit een andere, of houd alleen wat ze gemeen hebben.
keywords: volume, volumes, volume-inspector, geen volume, volume repareren, gat, losse rand, binnenstebuiten, vereniging, samenvoegen, combineren, aftrekken, verschil, snijden, doorsnede, snijpunt, boolean, buitenschil
from: f35df1cc
---

De volumegereedschappen combineren **volumes**: groepen en componenten waarvan de vlakken een inhoud sluiten, met elke rand die precies twee vlakken verbindt. {{ui:Entiteitsinformatie}} zegt {{ui:Volume}}: {{ui:Ja}} voor een volume, en toont de inhoud.

Ze staan in het menu {{ui:Volumes}} in de groep {{ui:Ordenen}}.

## Wanneer iets geen volume is

Selecteer de groep of component. Als het geen volume is, zegt {{ui:Entiteitsinformatie}} waarom, bijvoorbeeld "Geen volume: 4 randen grenzen aan een gat · 1 losse rand":

| Probleem | Wat het betekent |
|---|---|
| Randen grenzen aan een gat | Een vlak ontbreekt |
| Randen gedeeld door drie vlakken of meer | Een vlak verdeelt de binnenkant, of twee vormen raken elkaar langs een rand |
| Vlakken binnen de vorm | Een wand die binnen het volume is blijven staan |
| Losse randen | Lijnen die geen vlak begrenzen |
| Vlakken binnenstebuiten gekeerd | Hun voorkanten wijzen naar binnen, tegen hun buren in |

{{ui:Problemen tonen}} opent het met die randen en vlakken geselecteerd, zodat u ze kunt zien. {{ui:Repareren}} herstelt de eenvoudige gevallen in één stap ongedaan te maken: het verwijdert losse randen en vlakken binnen de vorm, draait vlakken de goede kant op, en sluit gaten waarvan de rand vlak ligt. Alles wat niet veilig hersteld kan worden (een gat dat niet vlak is, een rand gedeeld door veel vlakken) laat het voor u staan, en zegt wat er overblijft.

## Vereniging

1. Selecteer twee of meer volumes (klik op één, {{key:Ctrl}}+klik op de andere).
2. {{ui:Volumes}} › {{ui:Vereniging}}.

Ze worden één volume, in één groep. Waar ze overlapten, zijn de vlakken binnenin verdwenen.

## Aftrekken

1. {{ui:Volumes}} › {{ui:Aftrekken}}.
2. Klik op het volume dat u **wegneemt** (het snijgereedschap).
3. Klik op het volume dat u **snijdt**.

Wat van het tweede volume overblijft, blijft; het snijgereedschap is opgebruikt. Om bijvoorbeeld een gat door een blok te maken, tekent u een paal erdoorheen, maakt u de paal een groep, en trekt u de paal van het blok af.

## Doorsnede

Selecteer twee of meer volumes en kies dan {{ui:Volumes}} › {{ui:Doorsnede}}. Alleen het deel dat ze allemaal gemeen hebben, blijft over.

## Goed om te weten

- Het resultaat is een nieuwe groep. Het behoudt de naam, kleur en tag van het eerste volume (bij Aftrekken: het volume dat u snijdt). Kleuren die op de vlakken zijn geschilderd, blijven niet bewaard.
- Vlakke zijden van het resultaat zijn enkele vlakken. Ronde zijden worden de vlakke facetten waarmee ze getekend waren.
- Als een groep of component geen volume is, zegt het gereedschap welke, en verandert het niets. Zoek naar een ontbrekend vlak of een losse vlak erbinnen.
- Binnen een open groep werken de gereedschappen op de groepen en componenten in die groep.
- Elk gereedschap is één stap ongedaan maken.
- De eerste keer dat u een volumegereedschap gebruikt, wordt de engine (manifold-3d) geladen, wat even kan duren.
