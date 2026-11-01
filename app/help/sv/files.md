---
title: Öppna, spara, importera och exportera
summary: ModelCraft-filen, vad du kan ta in och skicka ut, vart filer tar vägen och vad som ändras offline och mellan webbläsare.
keywords: öppna, spara, importera, exportera, fil, 3dm, skp, återställ, spara automatiskt, senaste, skrivbord, öppna i 3d, överlämning, ladda ner, modelcraft-fil, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, format, offline, spara som
from: 0b4896d1
---

ModelCraft läser och skriver filer på din dator. Ingenting laddas upp: en fil du öppnar läses i din webbläsare, och en fil du sparar är en nedladdning. Se [Vart dina filer tar vägen](common:your-files).

## Format i korthet

| Format | Öppna | Importera | Exportera | Vad det är till för |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | ja | nej | {{ui:Spara}} | Din arbetsfil. Behåller allt. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | ja | ja | {{ui:Spara som}}, {{ui:Exportera}} | Renderings- och scensammansättningsprogram. ModelCrafts egen USD behåller allt. Se [Spara, öppna och exportera USD](topic:usd). |
| SketchUp (`.skp`) | nej | ja | nej | Att ta in modeller från SketchUp. Behåller grupper, komponenter, färger, texturer på ytor, taggar och mjuka kanter. Se [Ta in en SKP-modell](topic:import-sketchup-files). |
| Collada (`.dae`) | nej | ja | ja | Utbyte av modeller med andra 3D-modellerare. Behåller grupper, komponenter och färger. |
| OBJ (`.obj`) | nej | ja | ja | Renderings- och visualiseringsprogram. |
| glTF (`.glb`, `.gltf`) | nej | ja | endast `.glb` | Webbvisare, spelmotorer, AR. |
| STL (`.stl`) | nej | ja | ja | 3D-utskrift (i millimeter). |
| PLY (`.ply`) | nej | ja | ja | Nät med färger: skanningar, färgutskrift. |
| FBX (`.fbx`) | nej | ja | nej | Modeller från animations- och spelprogram (FBX 2011 och senare). |
| Alembic (`.abc`) | nej | ja | nej | Geometricacher, vid sitt första sampel. |
| STEP (`.step`, `.stp`) | nej | ja | nej | Delar från delmodellerare och leverantörer, som slutna nät i verklig storlek. Se [Filformat](topic:formats). |
| `.3dm` | nej | ja | nej | NURBS-modeller: polyytor, nät, kurvor, block och lager, som nät, kanter, komponenter och taggar. Se [Ta in en .3dm-modell](topic:import-3dm-files). |
| 3MF (`.3mf`) | nej | nej | ja | 3D-utskrift, med färger (i millimeter). Från {{ui:Kontrollera för 3D-utskrift (STL eller 3MF)…}}: se [Gör en modell klar för 3D-utskrift](topic:print-3d). |
| IFC (`.ifc`) | nej | nej | ja | BIM-program och BimCraft. |
| DWG (`.dwg`) | nej | ja | ja | En situationsplan eller planritning att modellera på; att skicka modellen till ett CAD-program. |
| DXF (`.dxf`) | nej | ja | ja | Samma sak, för vilket CAD-program som helst. |

[Filformat i detalj](topic:formats) listar exakt vad varje format behåller och utelämnar.

## ModelCraft-filen

En `.modelcraft`-fil behåller hela modellen: geometri, grupper, komponenter, hjälplinjer, scener, enheterna samt kameran och stilen du använde när du sparade. Den behåller inte ångrahistoriken.

### Öppna en modell

1. Klicka på {{ui:Öppna}} i gruppen {{ui:Fil}}, eller tryck på {{key:Mod+O}}.
2. Om modellen på skärmen har osparade ändringar frågar ModelCraft: ”Den här modellen har ändringar som inte är sparade. Spara en kopia först?” Välj {{ui:Spara en kopia}}, {{ui:Förkasta ändringar}} eller {{ui:Avbryt}}.
3. Välj `.modelcraft`-filen.

Modellen öppnas i de enheter den sparades i, med den kamera den sparades med. Du kan också släppa en `.modelcraft`-fil på 3D-vyn, eller klicka på en i listan över senaste filer på startkortet (webbläsare som kan öppna en fil igen, och skrivbordsappen).

:::desktop
I skrivbordsappen öppnas en `.modelcraft`-fil i ModelCraft när du dubbelklickar på den, och det gör även **Öppna med** på en Collada-, OBJ-, glTF-, DWG- eller DXF-fil (den importeras till en ny modell).
:::

### Spara en modell

Klicka på {{ui:Spara}} eller tryck på {{key:Mod+S}}. Webbläsaren laddar ner `<name>.modelcraft`, där namnet är filen du öppnade, eller ”Namnlös” för en ny modell.

:::desktop
I skrivbordsappen skriver {{ui:Spara}} över filen du öppnade. En ny modell frågar var den ska sparas.
:::

- {{ui:Spara som}} ({{key:Mod+Shift+S}}) sparar en kopia som en `.modelcraft`-fil eller som [USD](topic:usd); där webbläsaren kan frågar den efter namn och plats. Annars byter du namn på den nedladdade filen: nästa sparande efter att du öppnat den omdöpta filen använder det nya namnet.
- Varje sparande är en ny nedladdning. Beroende på webbläsarens inställningar går den direkt till din nedladdningsmapp eller frågar var den ska sparas. Om en fil med det namnet redan finns lägger de flesta webbläsare till ett nummer, till exempel `Untitled (1).modelcraft`.

:::chromium
För att välja mapp varje gång öppnar du webbläsarens inställningar, söker efter ”nedladdningar” och slår på ”Fråga var varje fil ska sparas före nedladdning”.
:::

:::firefox
För att välja mapp varje gång öppnar du **Inställningar**, sedan **Allmänt**, och under ”Filer och program” (nedladdningar) väljer du ”Fråga alltid var filer ska sparas”.
:::

:::safari
För att ändra vart nedladdningar går öppnar du **Safari**, sedan **Inställningar**, sedan **Allmänt**, och anger ”Plats för filnedladdning”.
:::

### Starta en ny modell

Klicka på {{ui:Ny}}. Om det finns osparade ändringar frågar ModelCraft först. En ny modell börjar tom, i enheten för ditt språkområde (fot och tum i USA, millimeter på andra håll), utan scener.

### Om webbläsaren stängs innan du sparat

ModelCraft behåller en kopia av osparat arbete i din webbläsare ett par sekunder efter varje ändring. Om fliken eller webbläsaren stängs innan du sparat frågar ModelCraft nästa gång du öppnar den ”Återställa ditt arbete?”. Vid återställning öppnas modellen som den var, ännu inte sparad i en fil: spara den för att behålla den. Se [Återställ ditt arbete](common:recover).

### Från CadCraft: Öppna i ModelCraft

I ritprogrammet CadCraft lämnar **Visa**, sedan **Mer**, sedan **Öppna i ModelCraft** över den öppna ritningen till ModelCraft i en ny flik, som en DWG. Den kommer in som en importerad DWG gör: linjer på marken, i en grupp, redo att modellera på. Ingenting laddas upp; filen går via webbläsarens egen lagring.

## Importera

Import lägger till en fil i den modell du har öppen; den ersätter den inte.

1. Klicka på {{ui:Importera}} i gruppen {{ui:Fil}}, eller släpp filen på 3D-vyn.
2. Välj en SketchUp-, Collada-, OBJ-, glTF-, FBX-, PLY-, STL-, Alembic-, STEP-, `.3dm`-, USD-, DWG- eller DXF-fil.

   Filen kommer in som **en grupp**, markerad, och vyn zoomar för att visa den. Statusfältet anger vad som kom in och listar allt som inte kunde importeras, till exempel ”Importerades inte: 2 texture”.

3. För att arbeta direkt med dess geometri dubbelklickar du på gruppen för att redigera inuti den, eller klickar på {{ui:Spräng}}.

Bra att veta:

- **Storlek och uppriktning:** Collada-filer anger sin enhet och vilken axel som är uppåt, och ModelCraft omvandlar dem. glTF är alltid i meter. OBJ-filer saknar enhet: ModelCraft läser dem som meter, med Y uppåt. Om en OBJ kommer in 1000 gånger för stor eller för liten använder du [Skala](topic:rotate-scale) med en faktor som `0.001` eller `1000`.
- **DWG och DXF** kommer in som linjer (kanter) på marken, inte som ytor. Om ritningen inte anger sin enhet frågar en dialogruta med titeln ”Ritningsenheter” vad en ritningsenhet är. Se [Modellera på en situationsplan](topic:site-plan).
- **Gränser:** filer över 300 MB avvisas för import, och över 200 MB för öppning. Filer med fler än 2 miljoner hörn eller ytor avvisas som för stora.

## Exportera

1. Klicka på {{ui:Exportera}} i gruppen {{ui:Fil}}.
2. Välj ett format: {{ui:glTF binär (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL för utskrift (.stl, millimeter)}}, {{ui:PLY med färger (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC för BimCraft (.ifc)}}, {{ui:DWG för CAD (.dwg, 2004)}} eller {{ui:DXF för CAD (.dxf, R12)}}.

Webbläsaren laddar ner filen, med modellens namn. Hela modellen exporteras, inte bara markeringen. En tom modell exporteras inte: ”Modellen är tom: rita något först.” Se [Exportera en modell till andra program](topic:export-model).

## Online och offline

Allt i ModelCraft körs på din dator, så att modellera, öppna, spara, importera och exportera fungerar utan anslutning när appen väl har lästs in.

För att öppna ModelCraft helt utan anslutning sparar du den för offlineanvändning medan du är online:

1. Klicka på {{ui:Spara för offline}} i appfältet överst.
2. Knappen räknar uppåt (”Sparar 40 av 212”) medan den sparar. ModelCraft sparar sina egna filer (bland dem sin DWG-läsare), den här hjälpen och 3D-biblioteket, så det kan ta en stund.
3. När knappen står {{ui:Redo för offline}} öppnas ModelCraft från samma adress utan anslutning, och DWG-import fungerar också offline.

Klicka senare på {{ui:Redo för offline}} för {{ui:Spara igen (hämta den senaste versionen)}} eller {{ui:Ta bort offlinekopian}}. Om knappen står {{ui:Kunde inte spara}} laddades inte alla filer ner: kontrollera anslutningen och klicka på den för att försöka igen. {{ui:Offline är inte tillgängligt}} betyder att det här webbläsarfönstret inte kan behålla en kopia (privata fönster och vissa hanterade datorer). Se [Arbeta offline](common:offline).

Molnsparande finns inte ännu. Varje modell finns där du sparar den.

:::offline
Du är offline. Du kan fortsätta modellera och spara. Om inte appfältet visar {{ui:Redo för offline}} ska du inte ladda om den här fliken förrän du är online igen.
:::

## Skrivbordsapp

:::desktop
Du använder ModelCraft i CadCraft Studio, skrivbordsappen med alla åtta appar. Filer öppnas och sparas där du väljer.
:::

:::web
ModelCraft körs i webbläsaren på Mac, Windows och Linux, och i CadCraft Studio, skrivbordsappen med alla åtta appar i en installation, från getcadcraft.com/download.
:::
