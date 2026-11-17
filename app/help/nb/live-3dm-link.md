---
title: Hold en .3dm-modell live
summary: Endre en modell i programmet som laget den, og se endringen her, fra Rhino 8 eller en Grasshopper-definisjon, uten å lagre og importere på nytt.
keywords: rhino, grasshopper, live-kobling, live-forbindelse, 3dm, nurbs, parametrisk, kobling, synkronisering, skript, referansemodell, send
from: 331b0a7e
---

Fortsett å modellere der det gjøres, og bruk resultatet her: til å gjengi det, belyse det eller lage en scene rundt det. Hver endring i det andre programmet oppdaterer én gruppe i ModelCraft.

:::note
Koblingen krever **CadCraft Studio** på samme datamaskin. En nettleserfane kan ikke ta imot forbindelsen. Ingenting sendes over internett: skriptet snakker med Studio på denne datamaskinens egen adresse, med et token.
:::

:::warning
Denne koblingen er testet med skriptets filskriver og en erstatning for det andre programmet, ikke ennå inne i Rhino eller Grasshopper selv. Hvis noe feiler der, si fra om hva det sa.
:::

## Sett den opp

1. I Studio, åpne ModelCraft. Under {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:Assistants}}, kryss av for **La AI-assistenter og skript bruke ModelCraft**, og klikk deretter **Rediger**.
2. I Studio, velg {{ui:Connect an assistant}}. Den viser adressen og tokenet som du limer inn nedenfor.
3. Last ned skriptet: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Fra Rhino

1. Kjør `cadcraft_link.py` i Rhinos skriptredigering (Python 3 i Rhino 8).
2. Første gang limes adressen og tokenet inn. De lagres i `.cadcraft-link.json` i hjemmemappen, aldri i modellen. Studio lager et nytt token hver gang det starter, så skriptet spør igjen da.

Hele modellen kommer over som én gruppe, med navnet etter dokumentet, for eksempel «chair (linked)». Etter det sendes hver endring over når det har vært en kort pause, og bare objektene som er endret, sendes. Kjør skriptet igjen for å stoppe.

## Fra Grasshopper

Kjør skriptet én gang i Rhino først, slik at adressen og tokenet lagres.

1. Legg til en skriptkomponent (Python 3), og lim inn hele `cadcraft_link.py` i den.
2. Gi den disse inngangene: `G` (geometrien, med listetilgang), `N` (et navn, valgfritt), `On` (en boolsk bryter) og `Target` (valgfritt: `model` eller `part`, hvis begge programmene er åpne).
3. Sett `On` til sann.

Hver løsning sender `G` over og erstatter det komponenten sendte sist, slik at å dra i en glidebryter oppdaterer gruppen her. Utdata `a` forteller hva som skjedde. Hver komponent har sin egen gruppe.

## Hva som kan gjøres med gruppen

- **Flytt den, merk den, bygg rundt den.** Plasseringen av gruppen og merket består gjennom hver oppdatering, og det samme gjør alt ved siden av den.
- **Ikke rediger inni den.** Hver oppdatering erstatter innholdet i gruppen. Det andre programmet eier disse objektene.
- **Angre.** Oppdateringer som kommer innen to sekunder etter hverandre, deler ett angrestrinn, slik at {{key:Mod+Z}} tar tilbake et helt dra. Neste oppdatering bringer modellen tilbake i samsvar.
- **Lagre.** Den lagrede filen beholder koblingen. Kjør skriptet igjen etter at filen er åpnet på nytt, så oppdateres den samme gruppen.

## Hva som kommer over

Nett, polyflater, flater og ekstruderinger som nettet du ser på skjermen, SubD som sitt nett, kurver som kanter, blokker som separate objekter der de står (ikke som komponenter), layers som merker, farger og enheter. Se [Importer en .3dm-modell](topic:import-3dm-files) for hvordan disse vises her.

Utelatt, med et antall i det andre programmet: punkter, tekst, måltilsettinger, lys og lignende.

**Bare én vei.** Endringer her sendes ikke tilbake til det andre programmet.

## Hvis noe går galt

- **«No ModelCraft or PartCraft window allows it»:** gjør trinn 1 av oppsettet.
- **«Studio refused the token»:** Studio har startet på nytt. Kopier det nye tokenet, og kjør skriptet igjen. For Grasshopper: kjør det i Rhino først.
- **«Cannot reach CadCraft Studio»:** Studio kjører ikke, eller adressen har endret seg.
