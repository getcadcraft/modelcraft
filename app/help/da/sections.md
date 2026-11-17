---
title: Snitplaner: skær modellen op
summary: Placér et snitplan for at se ind i modellen, skub det igennem, vend det om, eller slå snittet fra.
keywords: snit, snitplan, snitlinje, skær, udskæring, klip, inde i, plantegning, skive, tværsnit
from: 28c3a645
---

Et snitplan skærer modellen op, så du kan se og arbejde inde i den: en plantegning af et hus, indersiden af et skab. Modellen ændres ikke; snittet er kun en visning.

## Placér et

1. Klik på {{ui:Snit}} i gruppen {{ui:Kamera}}.
2. Klik på en flade. Planet placeres på den flade, med fire pile, der peger mod dig.

   Klik et sted væk fra en flade for at få en planfirkant vinkelret på den retning, du kigger mest i. Tryk først på en piletast for at stille den vinkelret på rød ({{key:Right}}), grøn ({{key:Left}}) eller blå ({{key:Up}}) i stedet.

Siden, pilene peger på, er **skåret væk**. Et plan placeret på en flade skærer endnu intet: skub det ind i modellen.

## Skub det, vend det, slå det fra

Klik på planets kontur for at vælge den. I {{ui:Objektinfo}}:

- {{ui:Langs dets pile}} siger, hvor det sidder. Skriv en ny afstand og tryk på {{key:Enter}} for at skubbe det igennem modellen; skriver du `-1m` på et plan, du placerede på en forside, flyttes det 1 m ind i modellen.
- {{ui:Vend om}} vender pilene rundt, så den anden side skæres væk.
- {{ui:Aktivt (skærer modellen)}}: ét plan skærer ad gangen. Sæt flueben i et andet plans boks, eller placér et nyt, og det skærer i stedet.
- Omdøb det i {{ui:Navn}}; slet det med {{key:Delete}} eller {{ui:Viskelæder}}.

Hvor planet går igennem et lukket fast legeme, udfyldes snittet med en mørk farve. Geometri, der ikke er lukket (en enkelt flade, en åben boks), skæres, men udfyldes ikke.

## Vis og skjul

I {{ui:Visninger}}:

- {{ui:Vis snitplaner}} skjuler planernes konturer og pile (snittet bliver).
- {{ui:Vis snit}} slår snittet fra og viser hele modellen uden at slette planerne.

[Præsentationsvisning](topic:styles-shadows#presentation-view) skjuler også konturerne.

## Ting at vide

- Det, der er skåret væk, kan ikke klikkes på eller snappes til, så du kan tegne på det, snittet viser.
- Snitplaner, hvilket der er aktivt, og de to kontakter gemmes i ModelCraft-filen. Hver ændring er ét fortrydelsestrin.
- Eksporter indeholder altid hele modellen: et snit er en visning, ikke en redigering.
