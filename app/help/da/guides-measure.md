---
title: Mål og placér hjælpelinjer
summary: Læs længder og arealer, mål mellem to punkter med målebåndet, og læg hjælpelinjer og hjælpepunkter ud, som du kan tegne efter.
keywords: mål, målebånd, vinkelmåler, vinkel, vinklet hjælpelinje, hjælpelinje, konstruktionslinje, afstand, målsætning, længde, areal, forskyd, layout, hjælpepunkt
from: de6d04d9
---

## Læs størrelser uden at måle

Vælg noget og kig på {{ui:Objektinfo}}:

- En kant viser sin **længde**.
- En flade viser sit **areal** og hvor mange huller den har.
- Flere flader viser deres **samlede areal**.
- En gruppe eller komponent viser sin **størrelse** (bredde × dybde × højde af boksen omkring den) og, hvis den er et lukket massivt legeme, sit **rumfang**.
- Når intet er valgt, viser {{ui:Objektinfo}} størrelsen af hele modellen.

Længder og arealer bruger enheden i vælgeren nederst til højre. En model i millimeter viser arealer fra 0.01 m² og op i kvadratmeter (et 4 × 3 m rum vises som »12 m²«).

Mens du tegner, viser værdifeltet den aktuelle længde, størrelse, radius eller afstand, så du sjældent behøver at måle bagefter.

For at ændre en størrelse efter tegning, vælg en kant eller gruppe og skriv længden eller størrelsen igen i {{ui:Objektinfo}}. Eller placér en [målsætning](topic:dimensions) og skriv en ny længde i den.

## Mål mellem to punkter

1. Tryk {{key:T}} for {{ui:Målebånd}}.
2. Klik på et punkt: et hjørne, et midtpunkt, et punkt på en flade eller jorden. (Klik på en kant gør noget andet; se nedenfor.)
3. Flyt til andet punkt. Spidsen og værdifeltet ({{ui:Længde}}) viser afstanden. Den fanger punkter og de røde, grønne og blå retninger.
4. Klik. Statuslinjen siger »Målt 4' 6«.«, og et **hjælpepunkt** efterlades i andet punkt.

For at efterlade hjælpepunktet i en præcis afstand i stedet, skriv den efter det første klik og tryk {{key:Enter}}: det placeres i den retning, du peger.

## Placér en hjælpelinje

En hjælpelinje er en endeløs stiplet linje, parallel med en kant, i en afstand du vælger. Brug hjælpelinjer til at lægge en tilbagerykning, en etagehøjde eller hvor et vindue starter.

1. Tryk {{key:T}}.
2. Klik på en **kant** (ikke på dens ende). Teksten siger »På kant«.
3. Flyt væk fra kanten, til den side hjælpelinjen skal ligge. En stiplet linje følger efter, parallelt med kanten, og værdifeltet ({{ui:Forskyd}}) viser afstanden.
4. Klik, eller skriv forskydningen og tryk {{key:Enter}}: `1.5m`, `5'`.

   Statuslinjen siger »Hjælpelinje 1.5 m fra kanten.«

At starte på en eksisterende hjælpelinje laver en ny hjælpelinje parallelt med den, så du kan lægge et gitter trinvis ud fra én hjælpelinje.

Hvis du skriver en forskydning uden først at flytte væk fra kanten, kan ModelCraft ikke se, hvilken side du mener: »Flyt væk fra kanten først for at vise, hvilken side.«

## En hjælpelinje i en vinkel: Vinkelmåler

1. Klik på {{ui:Vinkelmåler}} i gruppen {{ui:Rediger}}.
2. Klik på centrum: punktet hjælpelinjen går igennem. På en flade ligger vinkelmåleren på den flade; ellers ligger den fladt. Efter dette klik står {{key:Right}}, {{key:Left}} eller {{key:Up}} den lodret mod rød, grøn eller blå i stedet (tryk igen for at fortryde).
3. Klik på et punkt, der sætter 0°, f.eks. langs en kant.
4. Flyt til den ønskede vinkel og klik: den fanger i trin på 15°. Eller skriv vinklen i grader, f.eks. `22.5`, og tryk {{key:Enter}}; hjælpelinjen går til den side, markøren er på.

Hjælpelinjen går gennem centrum i den vinkel. Tegn langs den med {{ui:Linje}} til en tagvinkel, en affasning eller en skråtstillet væg.

## Tegn efter hjælpelinjer

Tegneværktøjerne fanger hjælpelinjer (»På hjælpelinje«) og hjælpepunkter (»Hjælpepunkt«), og hvor en hjælpelinje krydser en akseretning. Start et rektangel, hvor to hjælpelinjer krydser, for at placere det nøjagtigt.

## Fjern hjælpelinjer

- En hjælpelinje: klik på den med {{ui:Vælg}} og tryk {{key:Delete}}, eller klik på den med {{ui:Viskelæder}}.
- Alle hjælpelinjer: når intet er valgt, klik på {{ui:Slet alle hjælpelinjer}} i {{ui:Objektinfo}}.

Hjælpelinjer gemmes i `.modelcraft`-filen. De eksporteres ikke til andre formater.
