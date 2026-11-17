---
title: Felsökning
summary: Symptom, orsaker och lösningar, från en tom 3D-vy till importer i fel storlek, med de meddelanden ModelCraft visar.
keywords: problem, fel, felmeddelande, fungerar inte, tom, webgl, grafik, långsam, meddelande, import misslyckades, fel storlek, kan inte markera, touch, tangenter fungerar inte, förlorat arbete
from: 6e7394be
---

## Den 3D-vyn är tom

**Symptom:** mitten av skärmen förblir tom, eller visar bara bakgrundsfärgen, och att klicka på verktyg gör ingenting.

**Orsak:** ModelCraft ritar med WebGL 2, webbläsarens 3D-grafik. Den saknas när webbläsaren är gammal, när hårdvaruacceleration är avstängd, eller när grafikdrivrutinen är blockerad.

**Lösning:**

:::chromium
1. Öppna webbläsarens inställningar och sök efter "grafikacceleration".
2. Slå på "Använd grafikacceleration när det är tillgängligt" och starta om webbläsaren.
3. Om den redan är på, skriv `chrome://gpu` i adressfältet (`edge://gpu` i Edge) och leta efter "WebGL2" i listan. Om det står att det är inaktiverat, uppdatera din grafikdrivrutin.
:::

:::firefox
1. Öppna **Inställningar**, sedan **Allmänt**, och bläddra ner till "Prestanda".
2. Avmarkera "Använd rekommenderade prestandainställningar", markera sedan "Använd hårdvaruacceleration när det är tillgängligt". Starta om Firefox.
3. Om det fortfarande misslyckas, skriv `about:support` i adressfältet och titta i avsnittet "Grafik" efter WebGL 2.
:::

:::safari
Uppdatera macOS och Safari. Nyare versioner av Safari har alltid WebGL 2 på. Om du ändrade experimentella funktioner under **Safari**, sedan **Inställningar**, sedan **Avancerat** (eller **Funktionsflaggor**), återställ dem.
:::

På en jobbdator, ett fjärrskrivbord eller en virtuell maskin kan 3D-grafiken vara blockerad av policy. Prova en annan dator. Se [Webbläsare och datorer](common:browsers).

## Tangenter gör inget, eller skriver i en ruta

**Orsak:** tangentbordsfokus ligger i ett panelfält: listan {{ui:Ytor}} i {{ui:Stil}}, en solinställning, fältet {{ui:Namn}} i {{ui:Entitetsinfo}}, eller enhetsväljaren. Bokstäver och piltangenter går då till det fältet.

**Lösning:** klicka i 3D-vyn och tryck sedan på tangenten igen. Tangenter gör också ingenting medan en dialogruta är öppen.

## Att skriva ett tal gör ingenting

- **Ingen riktning än.** En inskriven längd går dit pekaren pekar från första klicket. Flytta pekaren lite i den riktning du vill ha, och skriv sedan.
- **Fel tidpunkt.** De flesta verktyg tar ett inskrivet värde först efter första klicket: klicka på första hörnet, ytan eller punkten att flytta från först. {{ui:Cirkel}} och {{ui:Polygon}} tar ett antal sidor före första klicket.
- **"Skriv en längd, till exempel 3m, 10'6" eller 4m,3m."** ModelCraft kunde inte läsa det. Kontrollera om det finns ett decimalkomma (`2,5`): använd en punkt.

## En form startar på fel plats på en pekskärm

**Symptom:** med fingret är den första rektangeln bra, men nästa rektangel, cirkel eller linje startar där din föregående beröring slutade i stället för där du rörde.

**Orsak:** ett fel i den här versionen: på en pekskärm kommer verktyget ihåg den senaste fångstpunkten från föregående rörelse.

**Lösning:** tryck på verktygets knapp i verktygsfältet igen före varje ny form. Det startar verktyget på nytt, och första punkten hamnar där du rör.

## Att redigera en grupp ändrade en annan

**Symptom:** du kopierade en grupp med {{ui:Flytta}} och {{key:Ctrl}}, öppnade en kopia och redigerade den, och den andra kopian ändrades också. {{ui:Disposition}} visar båda med samma namn.

**Orsak:** i den här versionen gör kopiering av en grupp en andra placering av samma grupp, som med en komponent. Knappen {{ui:Gör unik}} i ModelCraft erbjuds bara för komponenter.

**Lösning:** markera kopian du vill ändra, klicka på {{ui:Skapa komponent}} i {{ui:Entitetsinfo}}, och sedan på {{ui:Gör unik}}. Den kopian har nu sitt eget innehåll. Eller {{ui:Spräng}} den.

## Tryck/dra gör inte det jag förväntade mig

- **"Push/pull works on a face. Click a face."** Du klickade på en kant eller på tomt utrymme. Håll pekaren över tills ytan markeras, och klicka sedan.
- **Ytan finns inuti en grupp.** Dubbelklicka på gruppen för att öppna den först.
- **Ett fönster skar inte igenom väggen.** Rektangeln måste ritas på väggens yta, inte framför den, och väggen måste ha en bakre yta. Se [Skär en öppning genom en vägg](topic:openings#if-it-did-not-cut-through).
- **Två lådor överlappar utan att slås ihop.** Solider som tryckts in i varandra skär eller sammanfogar inte varandra i den här versionen.

## En linje eller form gjorde ingen yta

En yta fylls bara i när kanterna sluter en plan slinga. Kontrollera att sista punkten fångade den första ("Endpoint", det vill säga {{ui:Ändpunkt}}), och att alla kanter ligger i ett och samma plan. En slinga som ligger något utanför planet förblir linjer. Rita om en av dess kanter och fånga hörnen.

## Jag kan inte markera eller radera en yta

- Med {{ui:Markera}} tar ett klick nära en kant kanten. Klicka närmare mitten av ytan.
- {{ui:Radergummi}} plockar inte ytor. Markera ytan och tryck på {{key:Delete}}, eller radera en av dess kanter.
- Om ytan tillhör en grupp eller komponent markerar klicket hela den. Dubbelklicka för att öppna den.

## "Select something to move first, or click on it."

{{ui:Flytta}}, {{ui:Rotera}} och {{ui:Skala}} behöver något att arbeta med: markera det först, eller starta verktyget genom att klicka på själva objektet (inte på tomt utrymme eller en hjälplinje).

## "Select some geometry first (drag a window, or triple-click to select everything connected)."

{{key:G}} och {{key:Shift+G}} behöver en markering. Hjälplinjer kan inte grupperas.

## Piltangenterna kretsar i stället för att låsa

Lås fungerar bara efter första klicket i ett ritnings- eller redigeringsverktyg. {{ui:Tryck/dra}} har inga lås, och i {{ui:Rotera}} ändrar de inte vridningen. Vid andra tillfällen kretsar piltangenterna runt vyn.

## Esc i helskärm

I helskärm kan webbläsaren använda första {{key:Esc}} för att lämna helskärmen. Tryck på {{key:Esc}} igen för att avbryta verktyget.

## Ingen mittknapp

Tryck på {{key:O}} för {{ui:Orbit}} och dra, eller använd piltangenterna. Se [Orbit, panorera och zooma](topic:orbit-pan-zoom#without-a-middle-button).

## Importer

| Meddelande | Vad du ska göra |
|---|---|
| "ModelCraft importerar SketchUp (.skp), Collada (.dae), OBJ, glTF (.glb/.gltf), FBX, PLY, STL, Alembic (.abc), DWG och DXF. … är inget av dessa." | Exportera modellen från det andra programmet i ett av dessa format |
| "Filen är över 300 MB." | Förenkla eller dela upp modellen i det andra programmet |
| "…för stor för att modelleras här (över 2 miljoner hörnpunkter)." | Samma |
| "Den här .gltf-filen behöver "…"…" | Dra in `.gltf`-filen tillsammans med dess `.bin`- och texturfiler, eller öppna `.glb`-versionen |
| "Den här glTF-filen behöver tillägget …, som ModelCraft inte läser än." | Exportera igen från det andra programmet utan det tillägget (KTX2-texturer, till exempel) |
| En OBJ importeras utan sina färger eller texturer | Dra in `.obj`-filen tillsammans med dess `.mtl`- och bildfiler |
| "Den här Alembic-filen använder den gamla HDF5-layouten…" | Spara den igen från det andra programmet som en Ogawa Alembic-fil |
| En FBX importeras utan sina texturer | Dra in `.fbx`-filen tillsammans med dess texturbilder, eller bädda in medierna vid export |
| "Den här FBX-filen är version …, vilken ModelCraft inte läser" | Exportera igen som FBX 2011 eller nyare |
| En STL eller PLY importeras 1,000 gånger för stor eller för liten | STL läses som millimeter och PLY som meter: skala den (se [Rotera och skala](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)) |
| "Det här är inte en Collada-fil (.dae)…" eller "…inte välformad XML…" | Filen är skadad eller inte Collada. Exportera den igen |
| "Den här Collada-filen har ingen geometri som ModelCraft kan importera." | Den innehåller bara kameror, ljus eller referenser till andra filer |
| "Det här är en binär DXF. Spara den som ASCII-DXF och försök igen." | Spara den igen från CAD-programmet som ASCII |
| "Det här är inte en DWG-ritning…" | Filen är inte en DWG, eller så är den skadad |
| "Ritningen kunde inte läsas (…). Den kan vara skadad, eller sparad i en DWG-version som läsaren inte hanterar…" | Parenteserna anger orsaken. Spara den som DXF, eller som DWG från AutoCAD 2000 till 2018, från CAD-programmet |
| "Ritningen når mer än 10,000 km från sin origo…" | Flytta ritningen nära 0,0 i CAD-programmet |

### Importen har fel storlek eller ligger på sidan

- **OBJ:** OBJ har ingen enhet; ModelCraft läser meter. En modell i millimeter importeras 1000 gånger för stor: [skala](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size) den med `0.001`; en modell i tum med `0.0254`.
- **OBJ på sidan:** ModelCraft förväntar sig OBJ-filer med Y uppåt. En fil som skrivits med Z uppåt importeras liggande. Rotera den 90° runt den röda axeln: klicka på {{ui:Rotera}}-centrum på en yta som vetter längs rött, eller öppna filen i sitt program och exportera med Y uppåt.
- **DWG eller DXF:** du valde fel enhet i dialogrutan "Ritningsenheter". Ångra och importera igen.

## Öppna filer

| Meddelande | Vad du ska göra |
|---|---|
| "Filen är inte en ModelCraft-modell (den är inte JSON)." | Använd {{ui:Importera}} för andra format |
| "Det här är inte en ModelCraft-fil som vi kan öppna: …" | Filen är skadad eller har ändrats för hand |
| "Modellen sparades av en nyare ModelCraft…" | Öppna den i den nyare versionen |
| "Filen är över 200 MB." | Modellen är för stor för att öppnas här |

## Jag förlorade arbete

ModelCraft sparar inte till en fil av sig själv. När du stänger eller laddar om en flik med osparade ändringar frågar webbläsaren först ("Lämna webbplatsen?" eller "Ladda om webbplatsen?"); välj att stanna kvar och spara. {{ui:Ny}} och {{ui:Öppna}} frågar också ("Osparade ändringar"). Om webbläsaren eller datorn kraschade, öppna ModelCraft igen i samma webbläsare: den erbjuder tillbaka det osparade arbetet ("Återställ ditt arbete?"; se [Återställ ditt arbete](common:recover)). Spara ofta med {{key:Mod+S}}.

## Min nedladdningsmapp fylls med kopior

Varje sparning är en ny nedladdning, med namnet `Untitled (1).modelcraft`, `Untitled (2).modelcraft` och så vidare. Ta bort de gamla, eller ställ in webbläsaren så att den frågar var varje fil ska sparas och skriver över den gamla filen själv. Se [Öppna, spara, importera och exportera](topic:files#save-a-model).

## Det går långsamt

- Varje steg i ångra behåller en kopia av modellen (ett [nät](topic:meshes) behåller bara det som ändrats), så vid en mycket stor import av tryck/dra-geometri tar varje redigering längre tid. Spräng eller radera det du inte behöver, spara och öppna igen: att öppna igen rensar också ångra-historiken.
- Solskuggor kostar mest. Avmarkera {{ui:Solskuggor}} medan du modellerar.

## Inga skuggor

{{ui:Solskuggor}} är av, solen är under horisonten vid tiden du valde ("Solen är under horisonten vid den här tiden."), eller stilen är {{ui:Trådmodell}}, som inte ritar några skuggor.

## "Den här webbläsaren tillät inte helskärm."

Vissa webbläsare och vissa inbäddade vyer nekar helskärm. Använd i stället webbläsarens egen helskärm ({{pick:mac=Control-Command-F|windows linux=F11}}).

## ModelCraft öppnas inte utan anslutning

ModelCraft öppnas offline först efter att den sparats för offlineanvändning i den webbläsaren: appfältets knapp måste visa {{ui:Redo för offline}}. Öppna den när du är online och klicka på {{ui:Spara för offline}}. Om knappen visar {{ui:Kunde inte spara}}, klicka på den igen med en bättre anslutning; {{ui:Offline är inte tillgängligt}} betyder att det här fönstret (ett privat fönster, eller en hanterad dator) inte kan behålla en kopia. Se [Arbeta offline](common:offline).
