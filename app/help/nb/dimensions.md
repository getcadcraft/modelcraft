---
title: Mål og endre størrelse på det du tegnet
summary: Plasser måltilsettinger mellom hjørner, på buer og sirkler, eller mellom to kanter; skriv inn en ny lengde for å endre størrelsen på modellen. Skriv en kants lengde eller en gruppes bredde, dybde og høyde på nytt i Elementinfo.
keywords: mål, måltilsetting, måltilsettinger, endre størrelse, størrelse, lengde, bredde, dybde, høyde, strekk, drivende mål, annoter, mål etterpå, radius, diameter, vinkel, bue, sirkel, R, Ø
from: a1f815ec
---

Størrelser i ModelCraft er ikke låst når noe er tegnet. En måltilsetting viser en lengde på modellen, og når du skriver inn en ny lengde i den, endres modellen tilsvarende. Du kan også skrive en kants lengde, eller en gruppes bredde, dybde og høyde, på nytt i {{ui:Elementinfo}}.

## Plasser en måltilsetting

1. Trykk {{key:D}}, eller klikk {{ui:Mål}} på verktøylinjen.
2. Klikk et hjørne å måle fra. Den fanger hjørner, midtpunkter og kanter, slik tegning gjør.
3. Klikk det andre hjørnet.

   Eller klikk én gang på en **kant** (tipset sier «På kant») for å måle hele kanten med ett klikk.
4. Flytt pekeren dit mållinjen skal være, og klikk. Du kan også skrive inn forskyvningen, for eksempel `0.5m`, og trykke {{key:Enter}}.

   Mållinjen er vannrett for en vannrett kant, med mindre du ser på den fra siden. For en loddrett kant blir den i det loddrette planet som vender best mot deg.

Statuslinjen sier «Mål 4 m.». Måltilsettinger viser lengden i modellens enhet, og oppdateres når du endrer enhet i velgeren.

## Radius, diameter og vinkel

Det samme {{ui:Mål}}-verktøyet måler runde ting og vinkler:

- **En bue:** klikk buen. Tipset sier {{ui:Radius}}. Flytt pekeren dit teksten skal stå, og klikk: måltilsettingen leser **R 1.5 m**.
- **En sirkel:** klikk sirkelen. Du får en **diameter** (**Ø 3 m**) med en linje over sirkelen gjennom sentrum. Mangekanter fungerer på samme måte, med hjørnene sine på sirkelen.
- **Vinkelen mellom to kanter:** klikk én kant, og deretter en annen kant som møter den i et hjørne (mens du er over den, sier tipset {{ui:Vinkel mellom kantene}}). Flytt så inn i vinkelen du vil ha, og klikk. Innenfor hjørnet får du vinkelen mellom kantene; flytter du til den ene siden, får du vinkelen ved siden av den (for eksempel 150° i stedet for 30°). Hvor langt fra hjørnet du klikker, setter hvor buen går; eller skriv inn den avstanden.

For å bytte en radius til en diameter eller tilbake, velg måltilsettingen og velg i {{ui:Vis som}} i {{ui:Elementinfo}}.

**Endre størrelse med dem:** skriv inn en ny radius eller diameter rett etter at du har plassert en, eller velg den senere og skriv inn. Buen eller sirkelen beholder sitt sentrum og endrer størrelse; en flate den avgrenser (en skive, enden av et spor) endres med den. To ting måler bare:

- **En vinkelmåltilsetting** endrer aldri modellen. For å endre en vinkel, roter kantene med {{ui:Roter}}.
- **Sirkelen i enden av en sylinder** (en sirkel du trakk ut med {{ui:Trykk/trekk}}) kan ikke endres i størrelse fra måltilsettingen, fordi sidene da også måtte endres. Skaler sylinderen i stedet, om aksen sin.

## Endre størrelse på modellen med en måltilsetting

Rett etter at du har plassert en måltilsetting, skriv inn en ny lengde og trykk {{key:Enter}}: `6m`, `12'`, `3500` i en modell i millimeter. Modellen endrer seg til den størrelsen.

Senere, når som helst:

1. Med {{ui:Velg}} klikker du på måltilsettingens tekst eller linje. {{ui:Elementinfo}} sier **Mål** og viser sin {{ui:Lengde}}.
2. Skriv inn den nye lengden og trykk {{key:Enter}}. Du kan skrive rett inn i verdiboksen, eller i {{ui:Lengde}}-boksen i {{ui:Elementinfo}}.

### Hva som flyttes

Det andre hjørnet du klikket, flyttes, og alt bak det med:

- **Begge hjørnene på ett stykke** (en boks sin bredde, en vegg sin høyde): siden ved det flyttede hjørnet glir ut eller inn, og flater som henger sammen med den, strekkes. En boks blir fortsatt en lukket solid, og alt som står helt på den siden, for eksempel en vinduskomponent, flyttes med.
- **Hjørnene på to separate stykker** (gapet mellom to bokser): stykket til det flyttede hjørnet flyttes som helhet, og gapet endres.
- **Det flyttede hjørnet inne i en gruppe eller komponent** som det andre hjørnet ikke er i: hele gruppen flyttes.
- **Begge hjørnene inne i samme gruppe eller komponent**: den strekkes innvendig. En komponent endres overalt der den er plassert, slik redigering av den alltid gjør.

For å endre hvilken ende som flyttes, velg måltilsettingen og velg i {{ui:Flytter}} i {{ui:Elementinfo}}:

| Valg | Hva skjer |
|---|---|
| {{ui:Andre ende}} (standard) | Enden du klikket andre, flyttes |
| {{ui:Første ende}} | Enden du klikket først, flyttes |
| {{ui:Begge ender (sentrert)}} | Hver ende flytter halve endringen, slik at midten blir stående |

### Når en endring av størrelse avvises

ModelCraft endrer ingenting og sier hvorfor i statuslinjen:

- «a face would bend out of its plane»: måltilsettingen går skrått over formen. Mål langs en kant, eller langs rød, grønn eller blå.
- «a face would shrink to nothing or turn inside out»: den nye lengden er for kort for formen.
- «the end that moves is not on a corner of the model»: enden som skal flyttes, er plassert i tomt rom eller på midten av en kant. Velg den andre enden i {{ui:Flytter}}, eller plasser måltilsettingen mellom to hjørner.
- «a length must be above zero».

Hver endring av størrelse er ett steg: {{key:Mod+Z}} angrer den.

## Skriv en størrelse på nytt i Elementinfo

Du trenger ikke alltid en måltilsetting:

- **En kant:** velg den. Dens {{ui:Lengde}} i {{ui:Elementinfo}} er en boks du kan skrive i. Å skrive en lengde i verdiboksen fungerer også. Enden som ligger lengst frem langs rød, deretter grønn, deretter blå, flyttes, og det som er koblet til den, strekkes. For eksempel: skriver du på nytt den fremre nedre kanten av en boks, blir boksen bredere mot høyre.
- **En gruppe eller komponent:** velg den. {{ui:Bredde (rød)}}, {{ui:Dybde (grønn)}} og {{ui:Høyde (blå)}} er bokser. Dens fjerne side (høyre, bak, topp) flyttes. Dette er gruppens egne akser, før eventuell rotasjon du har gitt den.

Trykk {{key:Enter}} for å bruke, eller {{key:Esc}} for å sette den gamle verdien tilbake.

## Måltilsettinger følger modellen

En måltilsetting er festet til de to hjørnene den ble plassert på (en vinkel: til hjørnet og de fjerne endene av de to kantene; en radius eller diameter: til buen eller sirkelen). Flytt, trykk/trekk eller endre størrelse på geometrien, så følger måltilsettingen med og viser den nye lengden. Den blir værende festet når du gjør geometrien om til en gruppe eller komponent.

Er en ende plassert et sted som ikke er et hjørne (på en flate eller i tomt rom), eller er hjørnet slettet, blir enden der den var. Måltilsettingen måler fortsatt, men den kan bare endre størrelse fra sin andre ende.

## Fjern måltilsettinger

- Én måltilsetting: velg den og trykk {{key:Delete}}, eller klikk på den med {{ui:Viskelær}}.
- Alle måltilsettinger: med ingenting valgt, klikk {{ui:Slett alle måltilsettinger}} i {{ui:Elementinfo}}.

Måltilsettinger lagres i `.modelcraft`-filen. De eksporteres ikke til andre formater, som bare tar med 3D-modellen. En fil med måltilsettinger åpnes fortsatt i en eldre ModelCraft, bare uten dem.
