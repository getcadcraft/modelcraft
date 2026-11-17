---
title: Komponenter, der kan strækkes
summary: Lav én kopi af en komponent bredere, dybere eller højere, mens dens dele beholder deres størrelse: et længere bord med de samme ben, en højere boghylde med hylderne spredt ud, et gelænder hvor stolperne gentages.
keywords: dynamisk komponent, stræk, ændr størrelse på komponent, parametrisk, navngivne størrelser, gentag, array, ben, hylder, gelænder, regler, variable
from: b4c40f43
---

Skalering af en komponent gør alt i den større, også ben og skinner. **Stræk denne kopi** ændrer en komponents bredde, dybde eller højde, mens hver del følger en regel: en bordplade vokser, mens dens ben beholder deres tykkelse og bliver ved enderne.

Det virker på komponenter bygget af dele, altså grupper eller komponenter inde i komponenten, som alt i [startbiblioteket](topic:starter) er.

## Stræk en kopi

1. Vælg komponenten.
2. Klik på {{ui:Stræk denne kopi…}} i {{ui:Objektinfo}}.
3. Skriv den nye {{ui:Bredde (rød)}}, {{ui:Dybde (grøn)}} og {{ui:Højde (blå)}}, og klik på {{ui:Stræk}}.

Kun den kopi ændres: den bliver en komponent for sig selv, som husker den original, den kommer fra. Stræk den igen når som helst, så beregnes den forfra ud fra originalen, og intet glider. Andre kopier af originalen forbliver, som de var.

## Reglerne

Åbn komponenten (dobbeltklik på den), og vælg en af dens dele. {{ui:Objektinfo}} viser {{ui:Når komponenten strækkes}} med en regel langs rød, grøn og blå:

| Regel | Hvad delen gør | Eksempel |
|---|---|---|
| {{ui:Stræk}} | Vokser med komponenten; dens afstande til begge sider bevares | En bordplade |
| {{ui:Bliv ved starten}} / {{ui:Bliv ved slutningen}} | Beholder sin størrelse og sin afstand til den side | Ben |
| {{ui:Flyt forholdsmæssigt}} | Beholder sin størrelse; dens midte flytter sig forholdsmæssigt | Hylder, et dørhåndtag |
| {{ui:Skalér forholdsmæssigt}} | Både plads og størrelse skaleres forholdsmæssigt | Trinene i en trappe |
| {{ui:Gentag}} | Kopier af den, med jævne mellemrum ({{ui:Hver}}), fra hvor den starter til den fjerne side | Stolperne i et gelænder |

{{ui:Automatisk}} (som standard) finder selv ud af det og viser hvilken: {{ui:Stræk}}, når delen spænder over komponenten, {{ui:Flyt forholdsmæssigt}}, når den ligger nogenlunde midt i, ellers bliver den ved den side, den er tættest på.

## Ting at vide

- Delenes egne former deles, så en strakt kopi er let. Hvis du redigerer en del, ændres den i hver kopi.
- En strakt kopi følger ikke senere ændringer af originalens regler eller opstilling: stræk den igen for at få dem med.
- Flader tegnet løst i komponenten (ikke i en del) beholder deres størrelse; gør dem til en del, hvis de skal følge med.
- Regler og hvad hver kopi blev strakt fra, gemmes i ModelCraft-filen.
