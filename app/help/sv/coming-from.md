---
title: Från andra modelleringsprogram
summary: Hur vanorna från push/pull-modellering motsvarar ModelCraft, tangent för tangent, och de skillnader som överraskar folk.
keywords: byte, migrera, bekant, skillnader, push pull-modellerare, skp, genvägar, vanor, jämför, måttlåda, disposition, entitetsinfo
from: 74ffd4ac
---

Om du har modellerat i SketchUp kommer ModelCraft att kännas bekant: samma idé om ytor och push/pull, samma verktygsbokstäver, en värderuta du skriver i utan att klicka, inferens med röda, gröna och blå axlar, grupper, komponenter, en Disposition, Entitetsinfo och scener. Den här sidan listar vad som överförs direkt och, viktigare, vad som inte gör det.

## Vanor som följer med

| Du är van vid | I ModelCraft |
|---|---|
| Tryck Space för Markera, L för Linje, R för Rektangel, C för Cirkel | Samma: {{key:Space}}, {{key:L}}, {{key:R}}, {{key:C}} |
| Tryck P för Tryck/dra, M för Flytta, Q för Rotera, S för Skala, E för Radergummi, T för Måttband | Samma: {{key:P}}, {{key:M}}, {{key:Q}}, {{key:S}}, {{key:E}}, {{key:T}} |
| Tryck O för Kretsa, H för Panorera, Z för Zooma, Shift+Z för Zooma till utsträckning | Samma: {{key:O}}, {{key:H}}, {{key:Z}}, {{key:Shift+Z}} |
| Tryck G för att skapa en komponent | Samma: {{key:G}}. {{key:Shift+G}} skapar en grupp |
| Skriv i måttlådan utan att klicka i den | Samma, i värderutan längst ner. Tryck {{key:Enter}} |
| Skriv `4m,3m` för en rektangel, `12s` för sidor | Samma |
| Skriv `3x` eller `/3` efter en Flytta-kopiering | Samma; `*3` fungerar också |
| Skriv `[x,y,z]` eller `<dx,dy,dz>` för en punkt eller ett förskjutning | Samma |
| Skriv ett blankt tal i en modell i arkitektoniska tum och få tum | Samma |
| Mellanknappsdra för att kretsa, Shift+mellanknappsdra för att panorera, hjulet zoomar vid markören | Samma |
| Dubbelklicka med Push/Pull för att upprepa avståndet | Samma |
| Piltangenterna för att låsa röd, grön, blå och parallell | Samma: {{key:Right}} röd, {{key:Left}} grön, {{key:Up}} blå, {{key:Down}} parallell |
| Håll Shift för att låsa en inferens | Samma |
| Ctrl (Option på en Mac) för att kopiera vid flyttning | {{key:Ctrl}}, {{key:Mod}} eller {{key:Alt}}, på vilken dator som helst |
| Shift för att växla, Ctrl för att lägga till, Shift+Ctrl för att ta bort från markeringen | Samma tangenter; på en Mac använd {{key:Mod}} där det står Ctrl |
| Fönster vänster till höger, korsande höger till vänster | Samma |
| Ett mått-verktyg för att märka längder | {{key:D}}, och mer: skriv en ny längd i ett mått så ändras modellen till den. Se [Mått och ändra storlek](topic:dimensions) |
| Dubbelklicka en yta för yta plus kanter; tredubbelklicka för allt sammanhängande | Samma |
| Dubbelklicka en grupp för att redigera den; Esc för att stänga | Samma |
| Dra en linje över en yta för att dela den; radera en kant mellan samplanära ytor för att läka dem | Samma |
| Tryck en fönsterruta genom en vägg för att skära den | Samma |
| Baksidor i blågrått; Vänd ytor | Samma färg; {{ui:Reverse face}} i {{ui:Entity info}} |
| Scener som flikar över vyn, Page Up och Page Down | Samma, med {{ui:Play}} i panelen {{ui:Scenes}} |
| Skuggor från datum, tid, latitud och longitud, med norr på grönt | Samma, i panelen {{ui:Style}} |

## Skillnader som överraskar folk

### Att spara är en nedladdning

Det finns ingen Spara som skriver över filen du öppnade, ingen Spara som-dialog med ett namn, ingen autospara och ingen säkerhetskopia. {{ui:Save}} ({{key:Mod+S}}) laddar ner en ny `.modelcraft`-fil varje gång, oftast till din mapp för nedladdningar. Spara ofta, och byt namn på och flytta filerna själv. Se [Öppna, spara, importera och exportera](topic:files).

### Den importerar .skp-filer, men sparar dem inte

{{ui:Import}} läser SketchUp-filer med ModelCrafts egen läsare, i sidan: grupper, komponenter, färger, texturer på ytor, taggar och mjuka kanter kommer med. Se [Filformat i detalj](topic:formats#skp-files). ModelCraft kan inte spara `.skp`: för att gå tillbaka, exportera Collada från ModelCraft och importera den i SketchUp.

### Ingen högerklicksmeny

Högerdra panorerar; ett högerklick gör ingenting. Kommandon du skulle hitta i en kontextmeny finns i {{ui:Entity info}} ({{ui:Reverse face}}, {{ui:Edit}}, {{ui:Explode}}, {{ui:Make unique}}, {{ui:Make component}}) och i verktygsfältets grupp {{ui:Organize}}.

### Enheter finns i statusfältet

Det finns ingen Modellinfo eller mallval. Enhetsväljaren finns nere till höger. En ny modell startar i fot och tum i USA och i millimeter annars, utifrån språkinställningen i din webbläsare. Decimaler skrivs alltid med punkt: `2.5m`, aldrig `2,5m`, eftersom kommatecknet alltid skiljer värden åt.

### Färg har egna material

{{ui:Paint}} ({{key:B}}) målar heltäckande färger och materialen i avsnittet {{ui:Materials}}: tegel, fasadpanel, takbeläggning, trä, sten och mer, ritade av ModelCraft. Du kan inte ladda in en egen bild som material än; texturer som kommer med importerade filer behålls. Se [Måla med färger och material](topic:paint).

### Skala är jämnt, utan handtag

Skala visar ingen låda med handtag. Klicka på punkten som står kvar, en referenspunkt, och sedan på den nya storleken eller en inskriven faktor. Den skalar alltid jämnt åt alla håll. För att töja i en riktning, tryck/dra eller flytta en yta, skriv om en grupps bredd, djup eller höjd i {{ui:Entity info}}, eller [ändra storlek med ett mått](topic:dimensions).

### Rotera väljer sitt plan från var du klickar

Det finns ingen gradskiva som fastnar på ytor när du hovrar med piltangenterna för att välja plan. Klicka i mitten av en yta för att vrida i ytans plan, eller på marken för att vrida kring den lodräta. Piltangenterna kretsar vyn före första klicket.

### Inferens från punkter du passerar

ModelCraft fångar axelriktningar från **din startpunkt**, och punkter, kanter och ytor under pekaren. Den spårar inte en riktning från en punkt du bara hovrat över (den streckade ”från punkt”-inferensen). För att rikta in dig mot ett avlägset hörn, lås axeln med en piltangent och hovra över hörnet: den låsta punkten glider så att den passar in mot det. Eller placera en [hjälplinje](topic:guides-measure).

### Parallell använder kanten du passerade innan du började

Den parallella och vinkelräta inferensen använder den senaste kant som pekaren korsade **före första klicket**, inte kanter du hovrar över medan du ritar. Se [Inferens och fångst](topic:inference#parallel-and-perpendicular).

### Kopior av en grupp är länkade

Att kopiera en grupp med {{ui:Move}} gör en andra placering av samma grupp, så att redigering av en ändrar båda, som med komponenter. SketchUp gör grupper oberoende. Se [Felsökning](topic:troubleshooting#editing-one-group-changed-another).

### Mellanslag panorerar inte

{{key:Space}} väljer {{ui:Select}}, som i SketchUp. I vissa andra webbappar panoreras det om man håller Space; här gör det inte det. Högerdra panorerar i stället.

### Tvåfingerscroll zoomar

På en styrplatta: ställ in {{ui:Settings}} › {{ui:ModelCraft}} › Rullning till Styrplatta: två fingrar kretsar, {{key:Shift}} och två fingrar panorerar, en nyp zoomar. Se [Kretsa, panorera och zooma](topic:orbit-pan-zoom#on-a-trackpad).

Om dina händer kan Blenders tangenter bättre än SketchUps kan du välja menystilen {{ui:Modeler}}: {{key:G}}, {{key:R}} och {{key:S}} verkar på markeringen på en gång, {{key:E}} extruderar (push/pull), {{key:Shift+D}} duplicerar, och en menyrad i huvudet (Fil, Redigera, Visa, Markera, Lägg till, Objekt, Nät) ersätter verktygsfältet. Om du kommer från SketchUp ger stilen {{ui:Push-pull}} en menyrad som liknar dess egen över samma verktygsbokstäver. Se [Menyer, tangenter och mus](topic:menus-keys-and-mouse).

### Solider som pressats in i varandra skärs inte

Push/pull skär genom ytan bakom den i samma objekt, men två separata solider som pressas in i varandra skär inte varandra. Det finns ingen Skär ytor och inga Solidverktyg.

### Det som saknas

Frihand, Trimma, Dela och Yttre skal, egna bildmaterial, tillägg och ett layoutverktyg för blad finns inte i den här versionen. [Vad som inte är byggt ännu](topic:not-built-yet) listar vad du gör i stället.

## Genvägar som webbläsaren behåller

ModelCraft körs i en webbläsare, så några genvägar hör till webbläsaren, inte till appen. {{key:Mod+N}} öppnar ett webbläsarfönster (använd {{ui:New}}), och {{key:Mod+W}} stänger fliken. Har du osparade ändringar frågar webbläsaren innan den stängs. Se [Tangenter, möss och styrplattor](common:keys#shortcuts-the-browser-keeps).
