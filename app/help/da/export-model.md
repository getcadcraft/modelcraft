---
title: Eksportér en model til andre programmer
summary: Vælg den rigtige eksport til rendering, nettet, 3D-print, BIM og BimCraft, og kontrollér, hvad hver enkelt beholder.
keywords: print, 3mf, pdf, papir, billede, png, foto, skærmbillede, render, gem visning, eksport, del, rendering, gltf, glb, collada, dae, obj, stl, 3D-print, ifc, bim, bimcraft, send, andre programmer
from: 9e13e80d
---

Eksport laver en kopi af modellen i et andet format. Gem også din `.modelcraft`-fil: det er den eneste fil, der beholder alt, og den eneste, ModelCraft åbner direkte.

## Eksportér

1. Gem først ({{key:Mod+S}}), så din arbejdsfil er sikker.
2. Klik på {{ui:Eksportér}} i gruppen {{ui:Fil}}.
3. Vælg formatet. Browseren downloader det, navngivet som modellen.

Hele modellen eksporteres. For at eksportere én del: gem, slet resten, eksportér, og fortryd eller åbn igen derefter.

## Hvilket format

| Du vil | Vælg | Noter |
|---|---|---|
| Åbne den i et andet 3D-modelleringsprogram | {{ui:Collada (.dae)}} | Beholder grupper, indlejrede grupper, komponenter (delt, ikke kopieret), navne og farver. Z op, meter. |
| Rendere den, eller bruge den i et visualiseringsprogram | {{ui:OBJ (.obj)}} eller {{ui:glTF binær (.glb)}} | OBJ er det mest læste; den skriver hver gruppeplacering som et separat objekt, men har ingen farver og ingen delte komponenter. glTF beholder komponenter og farver. |
| Lægge den på nettet, i en spilmotor eller i AR | {{ui:glTF binær (.glb)}} | Én fil med alt i sig. |
| Udskrive den i 3D | {{ui:Kontrollér til 3D-print (STL eller 3MF)…}} | Kontrollerer, at modellen er lukket og vender den rigtige vej, og skriver derefter STL eller 3MF i millimeter. Se [Gør en model klar til 3D-print](topic:print-3d). {{ui:STL til udskrivning (.stl, millimeter)}} skriver hele modellen uden kontrollen. |
| Åbne den i BimCraft eller et andet BIM-program | {{ui:IFC til BimCraft (.ifc)}} | Hver gruppe eller komponent på øverste niveau bliver til ét bygningselement. |

Statuslinjen bekræfter hver eksport, fx »Eksporteret House.stl (millimeter).« eller »Eksporteret House.dae (Collada 1.4.1, Z op, meter; komponenter forbliver delte).«

## Før du eksporterer

- **Grupper dine objekter.** Collada, glTF og IFC beholder grupper og komponenter som separate objekter. Løs geometri går ud som én klump; i IFC bliver den til ét element kaldet »Løs geometri«.
- **Navngiv dem.** Gruppe- og komponentnavne går ind i Collada og IFC, så en væg kaldet »Nordvæg« kommer ud som »Nordvæg«.
- **Kontrollér fladernes retning.** Flader, der viser blågrå på ydersiden, vil pege indad i eksporten. Ret dem med {{ui:Vend fladen om}} (se [Slet og ryd op](topic:erase#a-face-facing-the-wrong-way)).
- **Til udskrivning** skal delene være lukkede massive legemer: vælg hver gruppe og kontrollér, at {{ui:Objektinfo}} siger »Massivt legeme: Ja«. Skaler derefter modellen til den udskrevne størrelse, eller skaler den i printersoftwaren.

## Send en model til BimCraft

1. Gør hver bygningsdel til en gruppe eller komponent, og navngiv den.
2. Vælg {{ui:Eksportér}}, og derefter {{ui:IFC til BimCraft (.ifc)}}.
3. Åbn den downloadede `.ifc`-fil i BimCraft.

Til konceptmassing bruger du i stedet {{ui:Eksportér}} › {{ui:Massing til BimCraft…}}: hver gruppe går ud som en massingmulighed med etager, etageareal og volumen. Se [Send massing til BimCraft](topic:massing-to-bimcraft).

Den almindelige IFC-eksport har ingen direkte forbindelse mellem de to apps. IFC'en har én etage, og hvert element er en generisk bygningselement-proxy uden type eller egenskaber: den bærer kun form og navn. Lukkede grupper bliver til massive former; åbne bliver til overflader.

## Linjer uden flader

Kanter, der ikke er en del af nogen flade (hjælpelinjer, en importeret situationsplan), går ud i OBJ og Collada som linjer. glTF og STL har ingen plads til dem og udelader dem. Hjælpelinjer og scener eksporteres ikke til noget format.

## Gem visningen som et billede

{{ui:Eksportér}} › {{ui:Billede af visningen (.png)}} gemmer præcis det, 3D-visningen viser, i dens størrelse på skærmen. {{ui:Billede i dobbelt størrelse (.png)}} gemmer det dobbelt så bredt og dobbelt så højt (til print eller en skarp slide), med mål og markeringer tegnet om i den størrelse i stedet for strakt.

Til et billede, der ligner dagslys (himmel, sol, bløde skygger, glas), brug i stedet {{ui:Eksportér}} › {{ui:Render et billede…}}: se [Render et billede](topic:render).

Til et rent billede skal du først slå [præsentationsvisning](topic:styles-shadows#presentation-view) til ({{key:Shift+P}}): akser, hjælpelinjer, snitkonturer og valget udelades. Indstil kamera, stil og skygger, som du vil have dem, eller gå til en [scene](topic:scenes); for at gemme en bevægelig film af dine scener, brug {{ui:Eksportér animation}} i panelet {{ui:Scener}}.

## Udskriv visningen, eller gem den som PDF

- {{ui:Eksportér}} › {{ui:PDF af visningen (.pdf)}} gemmer en PDF på én side: visningen i dobbelt skærmstørrelse, med dens mål, på en A4-side (Letter, når modellen er i fod og tommer), liggende, med en linje under, der angiver filnavn, dato og enhed.
- {{ui:Eksportér}} › {{ui:Udskriv visningen…}} sender den samme side til din browsers udskriftsdialog. Vælg en printer, eller »Gem som PDF«.

Siden viser visningen, som den er: der er ingen skala på en perspektivisk visning. For en tegning i målestok slår du {{ui:Perspektiv}} fra og kigger fra {{ui:Top}} eller {{ui:Front}}, og tilføjer [mål](topic:dimensions) for de størrelser, der betyder noget. [Præsentationsvisning](topic:styles-shadows#presentation-view) udelader akser, hjælpelinjer og valget; mål bliver.
