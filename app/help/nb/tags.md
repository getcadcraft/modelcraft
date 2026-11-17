---
title: Etiketter: vis og skjul sett med ting
summary: Gi grupper og komponenter en etikett, for eksempel Møbler eller Vegger, og skjul eller vis alt med den etiketten på en gang.
keywords: etiketter, etikett, layers, layer, vis, skjul, synlighet, organiser, møbler, vegger, uten etikett, gi etikett nytt navn, slett etikett
from: c1a95a05
---

En etikett er et navn du gir grupper og komponenter, for eksempel **Møbler**, **Vegger** eller **Tomt**, slik at alt med den etiketten kan skjules eller vises på en gang. Etiketter er det CAD-programmene kaller layers. For å skjule én ting om gangen, se [Skjul, isoler og vis igjen](topic:hide-isolate).

## Lag en etikett

1. Klikk {{ui:Legg til etikett}} i {{ui:Etiketter}} til høyre.
2. Skriv navnet og trykk {{key:Enter}}.

For å gi en etikett nytt navn, klikk navnet i {{ui:Etiketter}}, skriv det nye og trykk {{key:Enter}}. To etiketter kan ikke ha samme navn.

## Gi grupper og komponenter etiketter

1. Velg én eller flere grupper eller komponenter.
2. I {{ui:Elementinfo}} velges etiketten i {{ui:Etikett}}. {{ui:Ny etikett…}} lager en ny og gir utvalget den.

{{ui:Uten etikett}} fjerner etiketten. Tallet ved siden av hver etikett i {{ui:Etiketter}} viser hvor mange grupper og komponenter som har den.

Gi etiketter til grupper og komponenter, ikke til løse flater og kanter: tegn tingene du vil etikettere som grupper først (velg dem, {{key:Shift+G}}).

## Skjul og vis

Klikk øyet ved siden av en etikett. Alt med den etiketten forsvinner fra visningen, uansett hvor det er i modellen (også inne i andre grupper), og klikk og fangst går forbi det. Klikk øyet igjen for å vise det. Ting med {{ui:Uten etikett}} vises alltid.

Redigeres det inne i en gruppe hvis etikett er skjult, lukkes gruppen.

## Slett en etikett

Klikk søppelkurven ved siden av den. Det som hadde etiketten, blir {{ui:Uten etikett}} og vises.

## Ting å vite

- Etiketter, navnene deres og hvilke som er skjult, lagres i ModelCraft-filen. Kopieres en gruppe med etikett over i en annen modell, følger etiketten med.
- Å skjule og vise en etikett, og alle andre endringer av etiketter, er ett trinn i angre.
- Eksport inkluderer alt, også skjulte etiketter, slik det gjelder for andre skjulte ting.
- Layere i DWG- og DXF-situasjonsplaner importeres ikke som etiketter ennå: hele tegningen importeres som én gruppe.
