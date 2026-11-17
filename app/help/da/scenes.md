---
title: Gem visninger som scener
summary: Gem et kamera og en stil som en scene, opdatér og omdøb den, og gå frem og tilbage mellem scener eller afspil dem for at præsentere et design.
keywords: scene, visning, gemt visning, kamera, præsentation, animation, afspil, diashow, page up, page down, faner, rundtur
from: 38680d6e
---

En **scene** husker en kameraposition, en stil og det, der er skjult: hvorfra du ser, perspektiv eller parallel, flade-stilen, kanter, solindstillingerne, skjulte grupper, slukkede tags og snitplanen. Scener gemmes i `.modelcraft`-filen.

## Tilføj en scene

1. Stil visningen op: kredsløb, zoom, vælg en stil, sæt solen.
2. I panelet {{ui:Scener}} til højre, klik på {{ui:Tilføj scene}}.

   Scenen vises i listen, navngivet "Scene 1", "Scene 2" og så videre, og som en fane øverst i 3D-visningen. Statuslinjen siger "Scene 1 gemt: dette kamera, denne stil og det, der er skjult."

## Gå til en scene

- Klik på dens fane over 3D-visningen, eller på dens navn i listen {{ui:Scener}}.
- Eller tryk på {{key:PageDown}} for næste scene og {{key:PageUp}} for den forrige. {{ui:Næste}} og {{ui:Forrige}} under listen gør det samme.

Kameraet glider hen til scenen på lidt over et halvt sekund. Hvis din computer er indstillet til at reducere bevægelse, springer det derhen i stedet.

## Ændr, omdøb eller slet en scene

Hver scene i listen har tre små knapper efter sit navn:

- **Opdatér** (de cirkulære pile): gemmer det nuværende kamera, den nuværende stil og det skjulte i den scene. "Scene 2 opdateret."
- **Omdøb** (blyanten): åbner en dialog "Omdøb scene". Skriv det nye navn og klik på {{ui:Gem}}.
- **Slet** (papirkurven): fjerner scenen. "Scene 2 slettet. Ctrl+Z henter den tilbage."

Tilføjelse, opdatering, omdøbning og sletning af scener er trin i fortrydelse, ligesom ændringer i modellen.

## Lås en scenes kamera

Når du renderer den samme visning igen og igen, mens designet ændrer sig, så lås den scenes kamera, så visningen aldrig flytter sig ved et uheld.

1. I listen {{ui:Scener}} klik på **lås**-knappen (den åbne hængelås) efter scenens navn. Den lukkes, og scenens fane over 3D-visningen viser en lille hængelås. Statuslinjen siger "Scene 2: kamera låst."
2. Gå til scenen, når du vil renderere: kameraet vender tilbage til præcis den gemte visning, så billeder lavet ud fra den flugter med de tidligere.

Mens kameraet er låst, gemmer **Opdatér** stadig stilen og det skjulte i scenen, men kameraet bliver, hvor det var, selv hvis du har kredset væk. Klik på hængelåsen igen for at låse op; Opdatér gemmer så den aktuelle visning igen. Låsning og oplåsning er trin i fortrydelse, og låsen gemmes i `.modelcraft`-filen.

## Præsentér

1. Tilføj to eller flere scener.
2. Klik på {{ui:Afspil}} under listen. ModelCraft går til næste scene hver få sekunder og tilbage til den første efter den sidste.
3. Klik på {{ui:Stop}} (den samme knap) eller tryk på {{key:Esc}} for at stoppe.

Til et solstudie: tilføj en scene pr. time med kun {{ui:Tid}} ændret, og afspil dem derefter. Se [Stile og solskygger](topic:styles-shadows#a-sun-study).

For at præsentere uden værktøjslinjerne, tryk på {{key:Ctrl+Shift+F}} to gange: fuld skærm, og derefter fuld skærm med linjerne skjult. Scenefanerne bliver over visningen.

## Hvad en scene viser

En scene husker, hvad der var skjult, da du gemte den: grupper og komponenter, du har [skjult](topic:hide-isolate), [tags](topic:tags), du har slukket, og hvilket [snitplan](topic:sections) der skærer. At gå til scenen skjuler og viser dem igen. Så én scene kan vise hele huset, den næste huset med tagets tag slukket, den næste et snit gennem det.

Skjulte løse flader og kanter er ikke en del af scener. At gå til en scene laver ikke et fortrydelsestrin. Scener gemt af en tidligere ModelCraft-version lader det skjulte være, som det er; klik på Opdatér for at gemme det i dem.

## Eksportér en animation

{{ui:Eksportér animation}}, under listen, afspiller scenerne fra den første til den sidste og flytter kameraet blødt mellem dem, og gemmer filmen som en **WebM**-video (to sekunders bevægelse og en kort pause pr. scene). Den optager visningen, som du ser den, i sin størrelse på skærmen, i [præsentationsvisning](topic:styles-shadows#presentation-view) (uden akser, hjælpelinjer eller valg). Tryk på {{key:Esc}} eller klik på knappen igen for at stoppe uden at gemme. WebM afspilles i browsere og VLC, og videoredigeringsprogrammer kan konvertere den.

For en renderet rundtur (himmel, sol, skygger, materialer) i en størrelse, du vælger, brug {{ui:Render video…}} i stedet: uden animationsnøgler tager den scenerne i rækkefølge som kameraets sti. Se [Animér kameraet og objekterne](topic:animation).

## Ting at vide

- Ændrer du stilen eller flytter kameraet, efter at du er gået til en scene, ændres scenen ikke, før du klikker på Opdatér.
- Scener eksporteres ikke til Collada, OBJ, glTF, STL eller IFC.
