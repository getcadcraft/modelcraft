---
title: Exportera en modell för andra program
summary: Välj rätt export för rendering, webben, 3D-utskrift, BIM och BimCraft, och kontrollera vad varje export behåller.
keywords: skriv ut, 3mf, pdf, papper, bild, png, bildfil, skärmbild, render, spara vy, exportera, dela, rendering, gltf, glb, collada, dae, obj, stl, 3D-utskrift, ifc, bim, bimcraft, skicka, andra program
from: 9e13e80d
---

Export gör en kopia av modellen i ett annat format. Behåll också din `.modelcraft`-fil: den är den enda som behåller allt, och den enda ModelCraft öppnar direkt.

## Exportera

1. Spara först ({{key:Mod+S}}), så att din arbetsfil är säker.
2. Klicka på {{ui:Exportera}} i gruppen {{ui:Fil}}.
3. Välj formatet. Webbläsaren laddar ner det, med ett namn efter modellen.

Hela modellen exporteras. För att exportera en del: spara, radera resten, exportera, och ångra sedan eller öppna om.

## Vilket format

| Du vill | Välj | Anmärkningar |
|---|---|---|
| Öppna den i en annan 3D-modellerare | {{ui:Collada (.dae)}} | Behåller grupper, kapslade grupper, komponenter (delade, inte kopierade), namn och färger. Z uppåt, meter. |
| Rendera den, eller använda den i ett visualiseringsprogram | {{ui:OBJ (.obj)}} eller {{ui:glTF binär (.glb)}} | OBJ är det mest lästa; det skriver varje grupplacering som ett eget objekt, men har inga färger och inga delade komponenter. glTF behåller komponenter och färger. |
| Lägga den på webben, i en spelmotor eller i AR | {{ui:glTF binär (.glb)}} | En fil med allt i. |
| Skriva ut den i 3D | {{ui:Kontrollera för 3D-utskrift (STL eller 3MF)…}} | Kontrollerar att modellen är sluten och att ytorna vetter rätt, och skriver sedan STL eller 3MF i millimeter. Se [Förbered en modell för 3D-utskrift](topic:print-3d). {{ui:STL för utskrift (.stl, millimeter)}} skriver hela modellen utan kontrollen. |
| Öppna den i BimCraft eller ett annat BIM-program | {{ui:IFC för BimCraft (.ifc)}} | Varje grupp eller komponent på översta nivån blir ett byggnadselement. |

Statusfältet bekräftar varje export, till exempel "Exporterade House.stl (millimeter)." eller "Exporterade House.dae (Collada 1.4.1, Z uppåt, meter; komponenterna förblir delade)."

## Innan du exporterar

- **Gruppera dina objekt.** Collada, glTF och IFC behåller grupper och komponenter som separata objekt. Lös geometri går ut som en klump; i IFC blir den ett element som heter "Loose geometry".
- **Namnge dem.** Grupp- och komponentnamn går in i Collada och IFC, så en vägg som heter "North wall" kommer fram som "North wall".
- **Kontrollera ytornas riktning.** Ytor som visar blågrått på utsidan kommer att peka inåt i exporten. Rätta dem med {{ui:Vänd ytan}} (se [Radera och städa upp](topic:erase#a-face-facing-the-wrong-way)).
- **För utskrift** ska delarna vara slutna solider: markera varje grupp och kontrollera att {{ui:Entitetsinfo}} säger "Solid: Yes". Skala sedan modellen till utskriftsstorleken, eller skala den i skrivarens programvara.

## Skicka en modell till BimCraft

1. Gör varje byggnadsdel till en grupp eller komponent och namnge den.
2. Välj {{ui:Exportera}}, och sedan {{ui:IFC för BimCraft (.ifc)}}.
3. Öppna den nedladdade `.ifc`-filen i BimCraft.

För konceptuell massa, använd i stället {{ui:Exportera}} › {{ui:Massa till BimCraft…}}: varje grupp går ut som ett massaalternativ med våningar, golvareor och volym. Se [Skicka massa till BimCraft](topic:massing-to-bimcraft).

Den vanliga IFC-exporten har ingen direkt koppling mellan de två apparna. IFC:n har en våning, och varje element är en generisk byggnadselementproxy utan typ eller egenskaper: den bär bara form och namn. Slutna grupper blir solida former; öppna blir ytor.

## Linjer utan ytor

Kanter som inte ingår i någon yta (hjälplinjeliknande linjer, en importerad situationsplan) går ut i OBJ och Collada som linjer. glTF och STL har ingen plats för dem och utelämnar dem. Hjälplinjer och scener exporteras inte till något format.

## Spara vyn som bild

{{ui:Exportera}} › {{ui:Bild av vyn (.png)}} sparar exakt det 3D-vyn visar, i dess storlek på skärmen. {{ui:Bild i dubbel storlek (.png)}} sparar den dubbelt så bred och dubbelt så hög (för utskrift eller en skarp bild), med mått och markeringar ritade om i den storleken i stället för att töjas ut.

För en bild som ser ut som dagsljus (himmel, sol, mjuka skuggor, glas), använd i stället {{ui:Exportera}} › {{ui:Rendera en bild…}}: se [Rendera en bild](topic:render).

För en ren bild, slå på [presentationsvyn](topic:styles-shadows#presentation-view) ({{key:Shift+P}}) först: axlar, hjälplinjer, snittkonturer och markeringen lämnas ut. Ställ in kameran, stilen och skuggorna som du vill, eller gå till en [scen](topic:scenes). För att spara en rörlig film av dina scener, använd {{ui:Exportera animering}} i panelen {{ui:Scener}}.

## Skriv ut vyn eller spara den som PDF

- {{ui:Exportera}} › {{ui:PDF av vyn (.pdf)}} sparar en PDF på en sida: vyn i dubbel skärmstorlek, med dess mått, på en A4-sida (Letter när modellen är i fot och tum), liggande, med en linje under som anger filnamn, datum och enhet.
- {{ui:Exportera}} › {{ui:Skriv ut vyn…}} lägger samma sida framför din webbläsares utskriftsdialog. Välj en skrivare, eller "Spara som PDF".

Sidan visar vyn som den är: det finns ingen skala på en perspektivvy. För en ritning i skala, stäng av {{ui:Perspektiv}} och titta från {{ui:Ovanifrån}} eller {{ui:Framifrån}}, och lägg till [mått](topic:dimensions) för de storlekar som spelar roll. [Presentationsvyn](topic:styles-shadows#presentation-view) lämnar ut axlar, hjälplinjer och markeringen; måtten står kvar.
