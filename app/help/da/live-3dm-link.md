---
title: Hold en .3dm-model levende
summary: Ændr en model i det program, der har lavet den, og se ændringen her, fra Rhino 8 eller en Grasshopper-definition, uden at gemme og importere igen.
keywords: rhino, grasshopper, levende forbindelse, levende link, 3dm, nurbs, parametrisk, link, synkronisering, script, referencemodel, push
from: 331b0a7e
---

Bliv ved med at modellere, hvor du modellerer, og brug resultatet her: til at rendere det, belyse det eller lægge en scene om det. Hver ændring i det andet program opdaterer én gruppe i ModelCraft.

:::note
Forbindelsen kræver **CadCraft Studio** på samme computer. En browserfane kan ikke etablere forbindelsen. Intet sendes over internettet: scriptet taler med Studio på denne computers egen adresse, med et token.
:::

:::warning
Denne forbindelse er testet med scriptets filskriver og en stand-in for det andet program, endnu ikke inde i selve Rhino eller Grasshopper. Hvis noget fejler der, så fortæl os, hvad der stod.
:::

## Opsæt den

1. Åbn ModelCraft i Studio. Under {{ui:Indstillinger}} › {{ui:ModelCraft}} › {{ui:Assistenter}} sætter du kryds ved **Lad AI-assistenter og scripts bruge ModelCraft**, og klikker derefter på **Rediger**.
2. I Studio vælger du {{ui:Forbind en assistent}}. Den viser adressen og tokenet, som du indsætter nedenfor.
3. Download scriptet: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Fra Rhino

1. Kør `cadcraft_link.py` i Rhinos script-editor (Python 3 i Rhino 8).
2. Første gang indsætter du adressen og tokenet. De gemmes i `.cadcraft-link.json` i din hjemmemappe, aldrig i modellen. Studio laver et nyt token, hver gang det starter, så scriptet spørger igen dér.

Hele modellen kommer over som én gruppe, navngivet efter dokumentet, for eksempel "chair (linked)". Derefter kommer hver ændring over, når du holder en kort pause, og kun de objekter, der er ændret, sendes. Kør scriptet igen for at stoppe.

## Fra Grasshopper

Kør scriptet én gang i Rhino først, så adressen og tokenet gemmes.

1. Tilføj en Script-komponent (Python 3) og indsæt hele `cadcraft_link.py` i den.
2. Giv den disse inputs: `G` (geometrien, med listeadgang), `N` (et navn, valgfrit), `On` (en boolesk skifter) og `Target` (valgfrit: `model` eller `part`, hvis begge apps er åbne).
3. Sæt `On` til sand.

Hver løsning sender `G` over og erstatter det, komponenten sendte sidst. Dermed opdateres gruppen her, når du trækker i en skyder. Komponentens output `a` fortæller, hvad der skete. Hver komponent har sin egen gruppe.

## Hvad du kan gøre med gruppen

- **Flyt den, markér den, byg rundt om den.** Gruppens placering og dens markering bliver ved gennem hver opdatering, og det samme gælder alt ved siden af den.
- **Rediger ikke inde i den.** Hver opdatering erstatter det, der er inde i gruppen. Det andet program ejer disse objekter.
- **Fortryd.** Opdateringer, der ligger mindre end to sekunder fra hinanden, deler ét fortrydelsestrin, så {{key:Mod+Z}} tager et helt træk tilbage. Den næste opdatering bringer modellen tilbage, så den matcher.
- **Gem.** Den gemte fil beholder forbindelsen. Kør scriptet igen, når du har åbnet filen, så opdateres den samme gruppe.

## Hvad der kommer med

Masker, polyflader, flader og ekstruderinger kommer med som den maske, du ser på skærmen. SubD kommer som sin maske. Kurver kommer som kanter. Blokke kommer som separate objekter, der hvor de står (ikke som komponenter). Lag kommer som markeringer, og farver og enheder følger med. Se [Importér en .3dm-model](topic:import-3dm-files) for, hvordan de vises her.

Udeladt, med et antal i det andet program: punkter, tekst, målsætninger, lys og lignende.

**Kun én vej.** Ændringer her sendes ikke tilbage til det andet program.

## Hvis noget går galt

- **"Ingen ModelCraft- eller PartCraft-vindue tillader det":** Udfør trin 1 i opsætningen.
- **"Studio afviste tokenet":** Studio er blevet genstartet. Kopiér det nye token, og kør scriptet igen. Ved Grasshopper kører du det i Rhino først.
- **"Kan ikke nå CadCraft Studio":** Studio kører ikke, eller adressen er ændret.
