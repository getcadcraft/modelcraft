---
title: Målsæt og ændr størrelse på det, du har tegnet
summary: Placér målsætninger mellem hjørner, på buer og cirkler, eller mellem to kanter; skriv en ny længde for at ændre modellens størrelse. Skriv en kants længde eller en gruppes bredde, dybde og højde igen i Objektinfo.
keywords: målsætning, målsætninger, målsæt, ændr størrelse, størrelse, redigér størrelse, længde, bredde, dybde, højde, stræk, styrende målsætning, annotér, mål, bagefter, radius, diameter, vinkel, vinkelret, bue, cirkel, R, Ø
from: a1f815ec
---

Størrelser i ModelCraft er ikke låst fast, når noget er tegnet. En målsætning viser en længde på modellen, og hvis du skriver en ny længde i den, ændrer modellen sig til at passe. Du kan også skrive en kants længde om, eller en gruppes bredde, dybde og højde, i {{ui:Objektinfo}}.

## Placér en målsætning

1. Tryk {{key:D}}, eller klik på {{ui:Mål}} i værktøjslinjen.
2. Klik på et hjørne at måle fra. Den fanger hjørner, midtpunkter og kanter, ligesom ved tegning.
3. Klik på det andet hjørne.

   Eller klik én gang på en **kant** (tippet siger "På kant") for at målsætte hele kanten med ét klik.
4. Flyt markøren til, hvor målelinjen skal være, og klik. Du kan også skrive forskydningen, for eksempel `0.5m`, og trykke {{key:Enter}}.

   Målelinjen holder sig vandret for en vandret kant, medmindre du kigger på den fra siden. For en lodret kant forbliver den i det lodrette plan, der vender bedst mod dig.

Statuslinjen siger "Målsætning 4 m." Målsætninger viser deres længde i modellens enhed og opdateres, når du skifter enhed i vælgeren.

## Radius, diameter og vinkel

Det samme {{ui:Mål}}-værktøj målsætter runde ting og vinkler:

- **En bue:** klik på buen. Tippet siger {{ui:Radius}}. Flyt markøren til, hvor teksten skal være, og klik: målsætningen læser **R 1.5 m**.
- **En cirkel:** klik på cirklen. Du får en **diameter** (**Ø 3 m**) med en linje hen over cirklen gennem dens centrum. Polygoner virker på samme måde, med deres hjørner på cirklen.
- **Vinklen mellem to kanter:** klik på én kant, og derefter på en anden kant, der mødes med den i et hjørne (mens du er over den, siger tippet {{ui:Vinkel mellem kanterne}}). Flyt derefter ind i den vinkel, du vil have, og klik. Inde i hjørnet får du vinklen mellem kanterne; flytter du til den ene side, får du vinklen ved siden af (for eksempel 150° i stedet for 30°). Hvor langt fra hjørnet du klikker, bestemmer, hvor buen går; eller skriv den afstand.

For at skifte en radius til en diameter eller tilbage, vælg målsætningen og vælg i {{ui:Vis som}} i {{ui:Objektinfo}}.

**Ændr størrelse med dem:** skriv en ny radius eller diameter lige efter at have placeret en, eller vælg den senere og skriv. Buen eller cirklen beholder sit centrum og ændrer størrelse; en flade, den afgrænser (en skive, enden af et spor), ændrer sig med den. To ting måler kun:

- **En vinkelmålsætning** ændrer aldrig modellen. For at ændre en vinkel, roter kanterne med {{ui:Roter}}.
- **Cirklen for enden af en cylinder** (en cirkel du trak med {{ui:Skub/træk}}) kan ikke ændres i størrelse fra sin målsætning, fordi siderne så også skulle ændre sig. Skalér cylinderen i stedet, om dens akse.

## Ændr modellens størrelse med en målsætning

Lige efter at have placeret en målsætning, skriv en ny længde og tryk {{key:Enter}}: `6m`, `12'`, `3500` i en model i millimeter. Modellen ændrer sig til den størrelse.

Senere, når som helst:

1. Med {{ui:Vælg}} klik på målsætningens tekst eller linje. {{ui:Objektinfo}} siger **Målsætning** og viser dens {{ui:Længde}}.
2. Skriv den nye længde og tryk {{key:Enter}}. Du kan skrive direkte i værdiboksen eller i feltet {{ui:Længde}} i {{ui:Objektinfo}}.

### Hvad der flytter sig

Det andet hjørne, du klikkede på, flytter sig, og alt bag det med:

- **Begge hjørner på ét stykke** (en kasses bredde, en vægs højde): siden ved det flyttende hjørne glider ud eller ind, og flader, der hænger sammen med den, strækkes. En boks forbliver et lukket legeme, og alt, der sidder helt på den side, for eksempel en vinduekomponent, flytter sig med.
- **Hjørnerne på to adskilte stykker** (mellemrummet mellem to bokse): det flyttende hjørnes stykke flytter sig helt, og mellemrummet ændrer sig.
- **Det flyttende hjørne inde i en gruppe eller komponent**, som det andet hjørne ikke er i: hele gruppen flytter sig.
- **Begge hjørner inde i den samme gruppe eller komponent**: den strækkes indefra. En komponent ændrer sig overalt, hvor den er placeret, ligesom redigering af den altid gør.

For at ændre hvilken ende der flytter sig, vælg målsætningen og vælg i {{ui:Flytter}} i {{ui:Objektinfo}}:

| Valg | Hvad sker der |
|---|---|
| {{ui:Anden ende}} (standard) | Enden, du klikkede anden gang, flytter sig |
| {{ui:Første ende}} | Enden, du klikkede først, flytter sig |
| {{ui:Begge ender (centreret)}} | Hver ende flytter halvdelen af ændringen, så midten bliver stående |

### Når en ændring af størrelse afvises

ModelCraft ændrer intet og siger hvorfor i statuslinjen:

- "en flade ville bøje ud af sit plan": målsætningen går skråt hen over formen. Målsæt langs en kant, eller langs rød, grøn eller blå.
- "en flade ville krympe til ingenting eller vende vrangen ud": den nye længde er for kort til formen.
- "enden der flytter sig er ikke på et hjørne af modellen": den ende blev placeret i tomt rum eller på midten af en kant. Vælg den anden ende i {{ui:Flytter}}, eller placér målsætningen på to hjørner.
- "en længde skal være større end nul".

Hver ændring af størrelse er ét trin: {{key:Mod+Z}} fortryder den.

## Skriv en størrelse om i Objektinfo

Du har ikke altid brug for en målsætning:

- **En kant:** vælg den. Dens {{ui:Længde}} i {{ui:Objektinfo}} er en boks, du kan skrive i. At skrive en længde i værdiboksen virker også. Enden længst ude langs rød, derefter grøn, derefter blå flytter sig, og det, der er forbundet med den, strækkes. For eksempel: at skrive den forreste nederste kant af en boks om gør boksen bredere mod højre.
- **En gruppe eller komponent:** vælg den. {{ui:Bredde (rød)}}, {{ui:Dybde (grøn)}} og {{ui:Højde (blå)}} er bokse. Dens fjerne side (højre, bag, top) flytter sig. Det er gruppens egne akser, før enhver drejning, du har givet den.

Tryk {{key:Enter}} for at anvende, eller {{key:Esc}} for at sætte den gamle værdi tilbage.

## Målsætninger følger modellen

En målsætning er knyttet til de to hjørner, den blev placeret på (en vinkel: til dens hjørne og de fjerne ender af dens to kanter; en radius eller diameter: til dens bue eller cirkel). Flytter, skub/træk eller ændrer du størrelse på geometrien, følger målsætningen med og viser den nye længde. Den forbliver knyttet, når du gør geometrien til en gruppe eller komponent.

Hvis en ende blev placeret et sted, der ikke er et hjørne (på en flade eller i tomt rum), eller dens hjørne bliver slettet, bliver enden, hvor den var. Målsætningen måler stadig, men den kan kun ændre størrelse fra sin anden ende.

## Fjern målsætninger

- En målsætning: vælg den og tryk {{key:Delete}}, eller klik på den med {{ui:Viskelæder}}.
- Alle målsætninger: med intet valgt, klik på {{ui:Slet alle mål}} i {{ui:Objektinfo}}.

Målsætninger gemmes i `.modelcraft`-filen. De eksporteres ikke til andre formater, som kun bærer 3D-modellen. En fil med målsætninger åbner stadig i en ældre ModelCraft, bare uden dem.
