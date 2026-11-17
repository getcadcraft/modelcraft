---
title: Gør en model klar til 3D-print
summary: Tjek at en model er lukket og vender rigtigt, se dens størrelse, bund og overhæng, ret det, der er forkert, og download den som STL eller 3MF til din slicer.
keywords: 3D-print, 3D-printning, printer, print, slicer, stl, 3mf, vandtæt, lukket, manifold, legeme, huller, vendt indad, overhæng, understøtninger, bund, byggeplade, byggepladestørrelse, millimeter, eksport, ret, reparér, udhul, begynder, vægtykkelse, printværktøjer
from: 948e19af
---

En 3D-printers slicer har brug for en lukket form: ingen huller, hver flade vender udad, og intet går gennem sig selv. {{ui:Eksportér}} › {{ui:Kontrollér til 3D-print (STL eller 3MF)…}} kigger efter præcis det, før du downloader filen.

## Tjek og download

1. Vælg det, du vil printe: én eller flere grupper eller komponenter, eller nogle flader. Uden noget valgt printes alt, der vises.
2. Klik på {{ui:Eksportér}} i gruppen {{ui:Fil}}, og derefter på {{ui:Kontrollér til 3D-print (STL eller 3MF)…}}.

   Dialogen starter med én linje: "Klar til print", hvor mange ting der skal rettes før print, eller hvor mange der skal kigges på først. Hvert problem har tre dele: hvad der er galt, hvorfor det betyder noget, og hvad du skal gøre. Derefter kommer størrelsen i millimeter, volumen, antallet af trekanter og din printerplade.

3. Hvis dialogen lister ting, der skal rettes, klik på {{ui:Ret det, der kan rettes}} (se nedenfor). Kontrollen kører igen af sig selv.
4. Klik på {{ui:Download 3MF}} eller {{ui:Download STL}}.

Det, der printes, er det, du ser: skjulte flader, skjulte grupper og komponenter og alt på et skjult mærke udelades. Størrelser er altid i millimeter, den enhed slicere forventer, uanset hvilken enhed modellen viser.

:::tip
Foretræk 3MF, når din slicer kan læse det: det beholder farverne og enhederne. STL har hverken det ene eller det andet, og slicere antager millimeter.
:::

## Hvad tjekket kigger efter

Disse stopper en print eller ødelægger den, og får dialogen til at sige "Ikke klar til print":

| Problem | Hvad det betyder | Hvad du skal gøre |
|---|---|---|
| En flade på kun én side | Et hul: en kant har en flade på den ene side og ingenting på den anden | Tegn den manglende flade (en linje hen over spalten lukker den ofte), eller brug {{ui:Ret}} (nedenfor) |
| Delt af tre eller flere flader | Flader mødes i en finne eller en væg inde i et legeme | Slet den indre flade |
| Flader vender modsat | Nogle flader peger ind, nogle ud | Vælg fladerne, der vender indad, og klik på {{ui:Vend fladen om}} i {{ui:Objektinfo}} |
| Vendt indad | En hel lukket del peger indad | Vælg dens flader og vend dem |
| Går gennem sig selv | En del folder sig gennem sig selv | {{ui:Rediger}} › {{ui:Mere}} › {{ui:Skær med model}}, og slet derefter det, der er indeni. Se [Skær flader](topic:intersect) |

Disse er advarsler: modellen printes, men kig først.

- **Adskilte dele overlapper**, eller **møder hinanden flade mod flade**: slicere flettes dem normalt sammen til ét. For en renere fil, forén dem med {{ui:Massive legemer}} › {{ui:Forening}}. Se [Værktøjer til legemer](topic:solids).
- **Intet ligger fladt i bunden**: drej modellen, så en flade hviler på pladen, ellers tilføjer slicer understøtninger eller et raft.
- **Hælder udad mere end 45° fra lodret**: de flader har brug for støtte. Dialogen siger, hvor stor en del af overfladen det drejer sig om.
- **Under 1 mm på tværs**: sandsynligvis modelleret i den forkerte enhed. Tjek enheden i statuslinjen.

En hul del (et lukket skal inde i en anden) er fint: dens flader peger ind i hulrummet, og dens volumen trækkes fra.

## Ret problemerne

Under **Hvor problemerne er** navngiver dialogen hver gruppe eller komponent, der har noget galt (løse flader, der ikke er i en gruppe, vises som "Flader ikke i en gruppe"), med hvad der er galt i den. En komponent placeret flere gange vises én gang: retter du den, retter du hver kopi.

- {{ui:Vis}} åbner den gruppe og vælger de kanter og flader, der er forkerte, så de vises fremhævet.
- {{ui:Ret det, der kan rettes}} retter alle på én gang: den lukker huller, hvis kanter ligger fladt, fjerner flader inde i formen og løse kanter, og vender flader den rigtige vej ud. Det er ét trin: {{key:Mod+Z}} fortryder det. Kontrollen kører så igen og viser, hvad der er tilbage.

Det, den ikke kan rette (et hul, hvis kanter ikke ligger fladt, en del, der går gennem sig selv), bliver på listen med, hvad du skal gøre manuelt. {{ui:Reparér}} under **Printværktøjer** går længere: det lukker huller, der ikke er flade, fjerner løse stykker og dobbelte flader, og lister hver rettelse. Se [Understøtninger, vægtykkelse, udhulning og reparation](topic:print-tools#repair). Du kan også rette én gruppe ad gangen: vælg den, og brug derefter {{ui:Vis problemer}} og {{ui:Ret}} i {{ui:Objektinfo}}. Se [Værktøjer til legemer](topic:solids).

## En hul del

{{ui:Udhul}} under **Printværktøjer** udhuler en del til den vægtykkelse, du angiver, med afløbshuller, hvor du klikker. Se [Udhul](topic:print-tools#hollow).

Du kan også tegne hulrummet selv: en lukket gruppe inde i delen, uden at røre den, med alle sine flader vendt, så de peger ind i hulrummet. Kontrollen tæller den som et hulrum og trækker dets volumen fra; den vises ikke som noget, der skal rettes.

## Printerens byggeplade

Vælg din printers byggepladestørrelse i {{ui:Indstillinger}} › {{ui:ModelCraft}} › {{ui:3D-printerens byggeplade}}. Kontrollen advarer så, når modellen er større end pladen, drejet begge veje på den. Se [Indstillinger](topic:settings#3d-printer-bed).

## Printværktøjer

Under dialogens fund åbner **Printværktøjer** {{ui:Forhåndsvisning af støtte}} (hvor understøtninger skal, og ca. hvor meget), {{ui:Vægtykkelse}} (vægge for tynde til at printe), {{ui:Udhul}} og {{ui:Reparér}}. Se [Understøtninger, vægtykkelse, udhulning og reparation](topic:print-tools). {{ui:Del til print}} skærer en model, der er for stor til pladen, i stykker med forbindelsesstykker og nummererede samlinger: se [Del en stor model til print](topic:print-split).

## Ikke kontrolleret

Kontrollen slicer ikke: små detaljer, din dyse ikke kan tegne, og de rigtige understøtninger er din slicers. Se [Ikke lavet endnu](topic:not-built-yet#3d-printing).
