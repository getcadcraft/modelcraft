---
title: Slicing for en harpiksskriver
summary: Slice utskriftsplaten for en harpiksskriver, gjør delen hul og støtt den, gå gjennom layerne, lagre skriverens fil, og finn eksponeringen din med eksponeringstesten.
keywords: harpiks, foreslå helning, sugekopp, avløsningskraft, avstivning, harpiksutskrift, sla, msla, dlp, slicer, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, hul, lufthull, flåte, støtter, eksponeringstest, eksponeringsstige, kalibrering, layers, tillegg
from: 8cc12858
---

Harpiks-tilleggene slicer det som står på utskriftsplaten til layerbilder for skriverens skjerm, og lagrer filen skriveren leser. De er gratis, uten låste funksjoner, og er av til du slår dem på.

:::note
Ingen fil er lastet på en ekte skriver ennå. Filene er bare lest tilbake av CadCraft sine egne lesere, og støttene er nye. Sjekk layerne, og kjør den første utskriften manuelt.
:::

## Hva du gjør

Slice en del for harpiks, sjekk layerne, lagre filen og kopier den til skriveren.

## Steg

1. Åpne {{ui:Innstillinger}} › {{ui:Tillegg}} og slå på harpiks-slicer-tillegget og tillegget for skriverens filformat (Elegoo GOO, SL1, Chitubox eller Anycubic). Du kan også trykke {{ui:Legg til harpiksutskrift}} på kortet for utskriftstrinnet.
2. Plasser delen på plata som i [Plasser ting på utskriftsplaten](topic:print-stage), og velg {{ui:Harpiks}} ved siden av **Utskrift med**.
3. Under **Innstillinger for harpiksutskrift** velger du **Skriver** og **Harpiks**. Kortet viser skjermstørrelsen i piksler. Dette er produsentens publiserte størrelser, så sjekk din; du kan redigere dem under **Egendefinert**.
4. Sett **Layer-høyde (mm)**, **Eksponering (s)** og **Bunneksponering (s)**. Tallene for hver harpiks er bare et utgangspunkt.
5. Kryss av for **Gjør den hul, med et lufthull** hvis du vil ha en hul del, og sett **Vegg (mm)** og **Hullbredde (mm)**.
6. Kryss av for **Støtter og flåte**, og velg **Støttetetthet**: Lett, Middels eller Tung.
7. Velg **Filformat**. Hvis kortet sier at ingen er lagt til ennå, trykk på knappen som sier Legg til, og navnet på formatet.
8. Trykk {{ui:Forhåndsvis layers}} og flytt **Layer**-glidebryteren. Frittliggende deler er merket med en ring. Linjen under gir antall layers, tid og harpiks i mL, gram og kostnad.
9. Trykk {{ui:Lagre utskriftsfilen}}, sjekk oppsummeringen og trykk {{ui:Lagre}}. Kopier filen til skriveren.

## Helning, sugekopper, avstivning og avløsningstall

Disse fire er anslag basert på delens form. Ingen er prøvd på en ekte skriver, så se på hver av dem som et hint, og sjekk layerne.

1. Trykk {{ui:Foreslå helning}} under **Helning (grader)**. CadCraft prøver helninger fra 0 til 60 grader og velger den med den minste største layeren, minst overhengende flate og ingen sugekopp. Den setter **Helning (grader)** og forteller hva den fant. Vektingen i poengsummen er vår egen, ikke en skriverprodusents.
2. Etter {{ui:Forhåndsvis layers}} nevner en advarsel hulrom som bare åpner seg mot filmen. Et slikt hulrom kan holde på sug når et lag løsner. Vinkle delen eller legg til et hull. Lommer smalere enn cellestørrelsen i advarselen blir ikke oppdaget.
3. Med **Støtter og flåte** på kryss du av for **Avstiv høye støtter** for å legge til tverrstivere mellom høye, tynne søyler.
4. Linjen under forhåndsvisningen gir den største layeren i cm2. Den viser en kraft bare hvis du skriver inn en **Målt avløsningsspenning** under **Bunnlag, løft og hastigheter**. Uten ditt eget målte tall vises bare arealet.

## Finn eksponeringen din

1. Slå på eksponeringstest-tillegget i {{ui:Innstillinger}} › {{ui:Tillegg}}.
2. Trykk {{ui:Legg testdelen på skriverplaten}}.
3. Trykk {{ui:Lagre eksponeringsstigen}}. Du får én fil for hver eksponering, i en zip-fil.
4. Skriv ut hver fil med samme harpiks, og behold eksponeringen med de skarpeste tynne søylene og åpne hull.

## Merknader

- Skjæringen kjører i bakgrunnen, så siden forblir brukbar på en stor plate.
- Deler som ikke er lukkede volumlegemer, blir utelatt, og kortet sier fra om det.
- Hvis skriveren avviser en fil, har formatkortet valg for det formatet lar stå åpent. Endre ett, lagre på nytt, og fortell oss hvilket som fungerte.
- Anycubic-versjonene 517 og 518 skrives ikke.
