---
title: Öppna, spara, importera och exportera
summary: ModelCraft-filen, vad du kan ta in och skicka ut, var filer hamnar och vad som ändras offline och mellan webbläsare.
keywords: öppna, spara, importera, exportera, fil, 3dm, skp, återställ, spara automatiskt, senaste, skrivbord, öppna i 3D, överlämning, ladda ner, ModelCraft-fil, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, format, offline, spara som
from: 3f09ab72
---

ModelCraft läser och skriver filer på din dator. Inget laddas upp: en fil du öppnar läses i din webbläsare, och en fil du sparar är en nedladdning. Se [Var dina filer hamnar](common:your-files).

## Format i korthet

| Format | Öppna | Importera | Exportera | Till vad det används |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | ja | nej | {{ui:Spara}} | Din arbetsfil. Behåller allt. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | ja | ja | {{ui:Spara som}}, {{ui:Exportera}} | Renderings- och scenmonteringsprogram. ModelCrafts egna USD behåller allt. Se [Spara, öppna och exportera USD](topic:usd). |
| SketchUp (`.skp`) | nej | ja | nej | Att ta in modeller från SketchUp. Behåller grupper, komponenter, färger, texturer på ytor, taggar och mjuka kanter. Se [Ta in en SKP-modell](topic:import-sketchup-files). |
| Collada (`.dae`) | nej | ja | ja | Utbyte av modeller med andra 3D-modellerare. Behåller grupper, komponenter och färger. |
| OBJ (`.obj`) | nej | ja | ja | Rendering- och visualiseringsprogram. |
| glTF (`.glb`, `.gltf`) | nej | ja | endast `.glb` | Webbvisare, spelmotorer, AR. |
| STL (`.stl`) | nej | ja | ja | 3D-utskrift (i millimeter). |
| PLY (`.ply`) | nej | ja | ja | Nät med färger: skanningar, färgutskrift. |
| FBX (`.fbx`) | nej | ja | nej | Modeller från animations- och spelprogram (FBX 2011 och nyare). |
| Alembic (`.abc`) | nej | ja | nej | Geometricacher, vid deras första sampling. |
| STEP (`.step`, `.stp`) | nej | ja | nej | Delar från delmodellerare och leverantörer, som slutna nät i sann storlek. Se [Filformat](topic:formats). |
| `.3dm` | nej | ja | nej | NURBS-modeller: polyytor, nät, kurvor, block och lager, som nät, kanter, komponenter och taggar. Se [Ta in en .3dm-modell](topic:import-3dm-files). |
| 3MF (`.3mf`) | nej | nej | ja | 3D-utskrift, med färger (i millimeter). Från {{ui:Kontrollera för 3D-utskrift (STL eller 3MF)…}}: se [Förbered en modell för 3D-utskrift](topic:print-3d). |
| IFC (`.ifc`) | nej | nej | ja | BIM-program och BimCraft. |
| DWG (`.dwg`) | nej | ja | ja | En situationsplan eller planritning att modellera på; skicka modellen till ett CAD-program. |
| DXF (`.dxf`) | nej | ja | ja | Detsamma, för valfritt CAD-program. |

[Filformat i detalj](topic:formats) listar exakt vad varje format behåller och lämnar ut.

## ModelCraft-filen

En `.modelcraft`-fil behåller hela modellen: geometri, grupper, komponenter, hjälplinjer, scener, enheterna samt kameran och stilen du använde när du sparade. Den behåller inte ångringshistoriken.

### Öppna en modell

1. Klicka på {{ui:Öppna}} i gruppen {{ui:Fil}}, eller tryck på {{key:Mod+O}}.
2. Om modellen på skärmen har osparade ändringar frågar ModelCraft: ”Den här modellen har ändringar som inte är sparade. Spara en kopia först?” Välj {{ui:Spara en kopia}}, {{ui:Förkasta ändringar}} eller {{ui:Avbryt}}.
3. Välj `.modelcraft`-filen.

Modellen öppnas i de enheter den sparades i, med kameran den sparades med. Du kan också släppa en `.modelcraft`-fil på 3D-vyn, eller klicka på en i listan över senaste filer på startkortet (webbläsare som kan öppna en fil igen, och skrivbordsappen).

:::desktop
I skrivbordsappen öppnas en `.modelcraft`-fil i ModelCraft om du dubbelklickar på den, och det gäller även **Öppna med** för en Collada-, OBJ-, glTF-, DWG- eller DXF-fil (den importeras till en ny modell).
:::

### Spara en modell

Klicka på {{ui:Spara}} eller tryck på {{key:Mod+S}}. Webbläsaren laddar ner `<namn>.modelcraft`, där namnet är filen du öppnade, eller ”Untitled” för en ny modell.

:::desktop
I skrivbordsappen sparar {{ui:Spara}} filen du öppnade på samma plats. En ny modell frågar var den ska sparas.
:::

- {{ui:Spara som}} ({{key:Mod+Shift+S}}) sparar en kopia som `.modelcraft`-fil eller som [USD](topic:usd); där webbläsaren kan, frågar den efter namn och plats. Annars byter du namn på den nedladdade filen: nästa sparning efter att du öppnat den omdöpta filen använder det nya namnet.
- Varje sparning är en ny nedladdning. Beroende på webbläsarens inställningar går den direkt till din mapp för nedladdningar eller frågar var den ska sparas. Om en fil med det namnet redan finns där lägger de flesta webbläsare till ett nummer, till exempel `Untitled (1).modelcraft`.

:::chromium
För att välja mapp varje gång: öppna webbläsarens inställningar, sök på ”nedladdningar” och aktivera ”Fråga var varje fil ska sparas innan nedladdning”.
:::

:::firefox
För att välja mapp varje gång: öppna **Inställningar**, sedan **Allmänt**, och under ”Nedladdningar” välj ”Fråga alltid var filer ska sparas”.
:::

:::safari
För att ändra var nedladdningar hamnar: öppna **Safari**, sedan **Inställningar**, sedan **Allmänt**, och ställ in ”Filnedladdningsplats”.
:::

### Starta en ny modell

Klicka på {{ui:Ny}}. Om det finns osparade ändringar frågar ModelCraft först. En ny modell startar tom, i ditt språkområdes enhet (fot och tum i USA, millimeter annars), utan scener.

### Om webbläsaren stängs innan du sparar

ModelCraft sparar en kopia av osparat arbete i din webbläsare ett par sekunder efter varje ändring. Kopian skrivs i bakgrunden, så en stor modell fördröjer dig inte medan den sparas. Om fliken eller webbläsaren stängs innan du sparar frågar ModelCraft nästa gång du öppnar det: ”Återställ ditt arbete?”. Återställning öppnar modellen så som den var, ännu inte sparad till en fil: spara den för att behålla den. Se [Återställ ditt arbete](common:recover).

### Från CadCraft: Öppna i ModelCraft

I ritprogrammet CadCraft skickar **Visa**, sedan **Mer**, sedan **Öppna i ModelCraft** den öppna ritningen till ModelCraft i en ny flik, som en DWG. Den kommer in på samma sätt som en importerad DWG: linjer på marken, i en grupp, redo att modellera på. Inget laddas upp; filen passerar webbläsarens egen lagring.

## Importera

Import lägger till en fil i modellen du har öppen; den ersätter inte modellen.

1. Klicka på {{ui:Importera}} i gruppen {{ui:Fil}}, eller släpp filen på 3D-vyn.
2. Välj en SketchUp-, Collada-, OBJ-, glTF-, FBX-, PLY-, STL-, Alembic-, STEP-, `.3dm`-, USD-, DWG- eller DXF-fil.

   Filen kommer in som **en grupp**, markerad, och vyn zoomar så att den visas. Statusfältet anger vad som kom in och listar det som inte kunde importeras, till exempel ”Inte importerat: 2 textur”.

3. Om du vill arbeta med dess geometri direkt, dubbelklicka på gruppen för att redigera inuti den, eller klicka på {{ui:Spräng}}.

Några saker att veta:

- **Storlek och uppåtriktning:** Collada-filer anger sin enhet och vilken axel som är upp, och ModelCraft konverterar dem. glTF är alltid i meter. OBJ-filer innehåller ingen enhet: ModelCraft läser dem som meter, med Y uppåt. Om en OBJ kommer in 1000 gånger för stor eller för liten, använd [Skala](topic:rotate-scale) med en faktor som `0.001` eller `1000`.
- **DWG och DXF** kommer in som linjer (kanter) på marken, inte som ytor. Om ritningen inte anger sin enhet frågar en dialogruta med titeln ”Ritningsenheter” vad en ritningsenhet är. Se [Modellera på en situationsplan](topic:site-plan).
- **Gränser:** filer över 300 MB avvisas vid import, och över 200 MB vid öppning. Filer med fler än 2 miljoner hörn eller ytor avvisas som för stora. En OBJ över 64 MB avvisas innan den läses. Textfiler (Collada, OBJ, ASCII-STL, USD-text) läses en bit i taget, cirka 4 MB, så inget enskilt textblock håller en hel fil; en 16 MB OBJ använde cirka 0,5 GB minne medan den öppnades i vårt test.

## Exportera

1. Klicka på {{ui:Exportera}} i gruppen {{ui:Fil}}.
2. Välj ett format: {{ui:glTF binär (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL för utskrift (.stl, millimeter)}}, {{ui:PLY med färger (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC för BimCraft (.ifc)}}, {{ui:DWG för CAD (.dwg, 2004)}} eller {{ui:DXF för CAD (.dxf, R12)}}.

Webbläsaren laddar ner filen, namngiven efter modellen. Hela modellen exporteras, inte bara markeringen. glTF-, Collada- och OBJ-filer skrivs i bakgrunden, så ModelCraft fortsätter att fungera medan en stor modell exporteras; nedladdningen startar när filen är klar. En tom modell exporteras inte: ”Modellen är tom: rita något först.” Se [Exportera en modell till andra program](topic:export-model).

## Online och offline

Allt i ModelCraft körs på din dator, så modellering, öppning, sparande, import och export fungerar alla utan anslutning när appen har laddats.

För att öppna ModelCraft utan någon anslutning alls, spara den för offlineanvändning medan du är online:

1. Klicka på {{ui:Spara för offline}} i appfältet högst upp.
2. Knappen räknar upp (”Sparar 40 av 212”) medan den sparar. ModelCraft sparar sina egna filer (bland dem dess DWG-läsare), denna hjälp och 3D-biblioteket, så det kan ta en stund.
3. När knappen visar {{ui:Redo för offline}} öppnas ModelCraft från samma adress utan anslutning, och DWG-import fungerar offline också.

Klicka på {{ui:Redo för offline}} senare för {{ui:Spara igen (hämta den senaste versionen)}} eller {{ui:Ta bort offlinekopian}}. Om knappen visar {{ui:Kunde inte spara}} har vissa filer inte laddats ner: kontrollera anslutningen och klicka för att försöka igen. {{ui:Offline är inte tillgängligt}} betyder att det här webbläsarfönstret inte kan behålla en kopia (privata fönster och vissa administrerade datorer). Se [Arbeta offline](common:offline).

Molnsparande finns inte ännu. Varje modell finns där du sparar den.

:::offline
Du är offline. Du kan fortsätta modellera och spara. Om appfältet inte visar {{ui:Redo för offline}} ska du inte ladda om den här fliken förrän du är online igen.
:::

## Skrivbordsapp

:::desktop
Du använder ModelCraft i CadCraft Studio, skrivbordsappen med alla åtta apparna. Filer öppnas och sparas där du väljer.
:::

:::web
ModelCraft körs i webbläsaren på Mac, Windows och Linux, och i CadCraft Studio, skrivbordsappen med alla åtta apparna i en installation, från getcadcraft.com/download.
:::
