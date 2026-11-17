---
title: Tags: vis og skjul sæt af ting
summary: Giv grupper og komponenter et tag, fx Møbler eller Vægge, og skjul eller vis alt med det tag på én gang.
keywords: tags, tag, lag, vis, skjul, synlighed, organiser, møbler, vægge, uden tag, omdøb tag, slet tag
from: c1a95a05
---

Et tag er et navn, du giver grupper og komponenter, fx **Møbler**, **Vægge** eller **Byggegrund**, så du kan skjule eller vise alt med det tag på én gang. Tags er det, CAD-programmer kalder lag. Til at skjule én ting ad gangen, se [Skjul, isolér og vis igen](topic:hide-isolate).

## Opret et tag

1. Klik på {{ui:Tilføj tag}} i {{ui:Tags}} til højre.
2. Skriv dets navn, og tryk på {{key:Enter}}.

For at omdøbe et tag klikker du på dets navn i {{ui:Tags}}, skriver det nye navn og trykker på {{key:Enter}}. To tags kan ikke have samme navn.

## Tag grupper og komponenter

1. Vælg en eller flere grupper eller komponenter.
2. Vælg tagget i {{ui:Tag}} under {{ui:Objektinfo}}. {{ui:Nyt tag…}} laver et nyt tag og tagger valget med det.

{{ui:Uden tag}} fjerner tagget. Tallet ved siden af hvert tag i {{ui:Tags}} viser, hvor mange grupper og komponenter der har det.

Tag grupper og komponenter, ikke løse flader og kanter: tegn de ting, du vil tagge, som grupper først (vælg dem, og tryk på {{key:Shift+G}}).

## Skjul og vis

Klik på øjet ved siden af et tag. Alt med tagget forsvinder fra synsfeltet, uanset hvor det er i modellen (også inde i andre grupper), og klik og fangst går forbi det. Klik på øjet igen for at vise det. Ting under {{ui:Uden tag}} vises altid.

Hvis du redigerer inde i en gruppe, hvis tag du skjuler, lukkes gruppen.

## Slet et tag

Klik på skraldespanden ved siden af. Det, der havde tagget, bliver {{ui:Uden tag}} og vises.

## Ting at vide

- Tags, deres navne og hvilke der er skjult, gemmes i ModelCraft-filen. Kopiering af en tagget gruppe til en anden model tager tagget med.
- At skjule og vise et tag, og alle andre ændringer af tags, er ét fortryd-trin.
- Eksport omfatter alt, også skjulte tags, ligesom for skjulte ting.
- Lag i DWG- og DXF-situationsplaner kommer ikke ind som tags endnu: hele tegningen kommer ind som én gruppe.
