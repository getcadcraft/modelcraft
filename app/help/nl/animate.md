---
title: Elke eigenschap animeren, als krommen vormgeven en clips mengen
summary: De werkomgeving Animeren zet sleutels op de plaats, draaiing en grootte van een object, de helderheid, spreiding en kleur van een lamp, de lens en de vormsleutels van een mesh; skeletten buigen een mesh met botten en geschilderde gewichten; IK en beperkingen laten botten en objecten reiken, kijken, kopiëren, binnen grenzen blijven, aan andere hangen of andere volgen; starre lichamen vallen, stapelen en botsen en worden gebakken tot sleutels; drivers stellen een waarde in op basis van andere; de weergave Krommen van de tijdlijn vormt elke wijziging met Bézier-handvatten en cycli, en de weergave Clips bewaart animaties als acties die u opnieuw plaatst en mengt.
keywords: fysica, starre lichaam, starre lichamen, simulatie, simuleren, laten vallen, vallen, zwaartekracht, botsen, botsing, stapelen, stuiteren, wrijving, bakken, gebakken, ik, inverse kinematica, beperking, beperkingen, kijken naar, kijken, plaats kopiëren, draaiing kopiëren, draaiing beperken, limieten, kind van, ouder, pad volgen, pad, pool, fabrik, keten, skelet, rig, riggen, botten, bot, huid, skinnen, gewichten, gewichten schilderen, vertexgroepen, automatische gewichten, bot-warmte, pose, posemodus, dual quaternion, lineaire menging, vormsleutels, vormsleutel, morph, morphs, morphdoelen, blend shapes, gezichtsuitdrukking, driver, drivers, expressies, werkomgeving animeren, animeren, animatie, sleutelbeeld, sleutel, sleutels, eigenschap, eigenschappen, transformatie, plaats, draaiing, grootte, lamp, licht, helderheid, kleur, lens, zichtveld, fov, grafiekeditor, krommen, kromme, bézier, handvatten, raaklijn, interpolatie, cyclus, cycli, herhalen, lus, heen en weer, offset, dopesheet, sleutels selecteren, kader selecteren, sleutels kopiëren, sleutels plakken, sleutels uitrekken, sleutels schalen, clips, acties, nla, mengen, menging, invloed, voorraad
from: 16d8e12f
---

De [tijdlijn](topic:animation) verplaatst de camera en hele groepen en componenten. De werkomgeving **Animeren** zet sleutels op meer dan dat, en de tijdlijn krijgt twee extra weergaven om wat u gesleuteld heeft te vormen en opnieuw te gebruiken.

## Openen

Kies {{ui:Animeren}} in de lijst met werkomgevingen op de werkbalk. De tijdlijn opent onder de weergave, de werkbalk toont de groepen van Animeren ({{ui:Keys}}, {{ui:Afspelen}}, {{ui:Tijdlijn}}) en het paneel rechts somt op wat u op de afspeelkop kunt keyen.

## Een eigenschap keyen

Het paneel somt op, op de afspeelkop:

- **Gekozen object**: de waarden van {{ui:Plaatsen}}, {{ui:Draaiing (°)}} en {{ui:Afmeting}}, elk drie getallen. Typ een getal en druk op {{key:Enter}}: het wordt op de afspeelkop gekeyd en het object verplaatst zich daarheen. De ruit naast een rij keyt de waarde zoals hij nu is; een gevulde ruit betekent dat er al een sleutel op de afspeelkop staat.
- **Lampen**: de {{ui:Helderheid (lm)}}, {{ui:Spreiding (°)}} (spotlampen) en {{ui:Kleur}} van elke lamp.
- **Camera**: de {{ui:Lenshoek (°)}}, voor een zoom terwijl de camera beweegt.

{{ui:Transformatie keyen}} (of {{key:I}}) keyt de plaats, draaiing en grootte van elke gekozen groep of component in één keer; {{ui:Camerasleutel}} (of {{key:K}}) keyt de camera. Met {{ui:Automatische sleutel}} aan krijgt een groep waarvan plaats, draaiing en grootte zo gekeyd zijn een nieuwe sleutel telkens wanneer u hem verplaatst.

Draaiingen zijn drie hoeken, om X, dan Y, dan Z. Een draaiing boven 180° blijft dezelfde kant op draaien (190° blijft 190°, niet −170°), zodat een wiel meerdere keren kan rondgaan.

:::tip
Een groep die met {{ui:Sleutel van selectie}} op de tijdlijn gekeyd is, heeft sleutels voor de hele plaatsing. De krommeknop op de rij zet die om in krommen voor plaats, draaiing en grootte (dezelfde plaatsing op elke sleutel), zodat u ze in {{ui:Krommen}} kunt vormen.
:::

## Vormsleutels (morphs)

Een **vormsleutel** is een andere vorm van dezelfde [mesh](topic:meshes): een glimlach op een gezicht, een uitstulping van een deur, een gebogen blad. De schuif mengt van de mesh zoals hij is (0) naar die vorm (1); meerdere sleutels tellen op.

1. Kies een mesh in de werkomgeving Animeren: het paneel toont de {{ui:Vormsleutels}}.
2. Klik op {{ui:Vormsleutel toevoegen}}. ModelCraft gaat naar de [werkomgeving Mesh](topic:mesh-edit) met de nieuwe sleutel in bewerking: punten verplaatsen, extruderen, boetseren — verander de mesh in de vorm die u wilt.
3. Keer terug naar {{ui:Animeren}} en klik op {{ui:Gereed}}. De mesh gaat terug naar zijn oorspronkelijke vorm, en de sleutel bewaart uw wijziging.

Sleep daarna de schuif van de sleutel (of typ een waarde) om hem in te mengen. De ruit keyt de waarde op de afspeelkop, zodat een sleutel in de tijd kan groeien en wegfaden; zodra hij een spoor heeft, wordt een nieuwe waarde op de afspeelkop gekeyd. Het potlood bewerkt de vorm van de sleutel opnieuw (de mesh toont die volledig tot {{ui:Gereed}}; {{ui:Annuleren}} laat de sleutel zoals hij was), het oog zet de sleutel uit, de prullenbak verwijdert hem.

Een punt dat u toevoegt tijdens het bewerken van een sleutel hoort bij de mesh zelf: het blijft staan waar u het zette, in elke vorm.

:::note
Vormsleutels verplaatsen de mesh vóór zijn [modifiers](topic:modifiers): een Subdivision-modifier maakt de gemengde vorm glad. Gerenderde afbeeldingen en video's tonen de sleutels op elk beeld.
:::

## Skeletten: botten die een mesh buigen

Een **skelet** is een reeks botten binnen een [mesh](topic:meshes). Zet de botten in een pose en de mesh volgt, elk punt zoveel als zijn **gewichten** aangeven.

1. Kies de mesh in de werkomgeving Animeren en klik op {{ui:Een skelet toevoegen}} in het paneel (of op {{ui:Bot toevoegen}} in de groep {{ui:Rig}}): het eerste bot loopt van zijn voet omhoog door het midden van de mesh.
2. Met een gekozen bot voegt {{ui:Een kindbot toevoegen}} het volgende toe vanaf zijn {{ui:Punt}}. Stel de {{ui:Kop}}, {{ui:Punt}}, {{ui:Rol (°)}} van elk bot in en waaraan het {{ui:Hangt aan}} in het paneel; een bot dat aan een ander hangt beweegt met het andere mee. Vink {{ui:Verplaatst de mesh}} uit voor een bot dat alleen andere botten stuurt.
3. Klik op {{ui:Automatische gewichten}}: elk bot pakt de punten het dichtst bij zich vast, en die greep loopt gladjes uit over de mesh, zodat de punten tussen twee botten ze delen. {{ui:Alleen de dichtstbijzijnde botten}} is een snellere, scherpere verdeling.

**Posen** van de botten met {{ui:Pose}} ({{key:P}}): klik op een bot om het te kiezen, sleep om het rond de as van de weergave te draaien, {{key:Shift}}-slepen om het te verplaatsen. Of typ de {{ui:Plaatsen}}, {{ui:Draaiing (°)}} en {{ui:Afmeting}} onder {{ui:Pose}}; draaiingen zijn in de eigen assen van het bot, vanaf waar het in rust staat. De ruiten en {{ui:De hele pose keyen}} keyen de pose op de afspeelkop; zodra een bot sleutels heeft, keyt het posen die daar. {{ui:Dit bot herstellen}} en {{ui:De pose herstellen}} zetten de botten terug in rust.

**Gewichten schilderen** ({{key:W}}) voor het gekozen bot: de mesh toont in rust, elk vlak gekleurd naar hoeveel dat bot het vasthoudt — rood helemaal, blauw niets. Schilder om greep toe te voegen ({{key:Mod}} neemt hem weg, {{key:Shift}} maakt glad); {{ui:Grootte (px)}} en {{ui:Sterkte}} stellen het penseel in. Met {{ui:De gewichten van elk punt optellen tot 1}} neemt meer geven aan één bot evenveel weg van de andere. Elke streek is één stap ongedaan maken van het model.

{{ui:Huid}} bepaalt hoe een punt tussen botten beweegt: {{ui:Lineair (snel)}} mengt de bewegingen van de botten en knijpt een gebogen gewricht iets dicht; {{ui:Dual quaternion (behoudt volume bij gewrichten)}} draait het punt in plaats daarvan rond het gewricht, zodat een elleboog of knie zijn dikte houdt (de {{ui:Afmeting}} van een bot rekt de huid dan niet uit).

:::note
Vormsleutels komen eerst, dan het skelet, dan de [modifiers](topic:modifiers). De weergave, afbeeldingen en video's tonen allemaal de gepose mesh; de gewichten van een mesh worden met hem opgeslagen, de botten en hun pose met de animatie.
:::

## IK en beperkingen

Een **beperking** verplaatst een bot of object na zijn sleutels, volgens een regel. Kies het object (of, in een skelet, het bot) en voeg er een toe onder {{ui:Beperkingen van …}}; meerdere lopen in de volgorde waarin ze staan (de pijlen wijzigen die volgorde), en elk heeft {{ui:Hoeveel}} (0 tot 1, gekeyd met zijn ruit zoals elke eigenschap) en een aan/uit-schakelaar.

| Beperking | Voor | Wat het doet |
|---|---|---|
| {{ui:Bereiken (IK)}} | Botten | Het bot en de botten waaraan het hangt ({{ui:Botten in de keten}}) buigen zodat zijn punt het doel bereikt. Met twee botten en een {{ui:Pool (de buiging wijst ernaartoe)}} wijst de elleboog of knie naar de pool; langere ketens buigen gelijkmatig. Buiten bereik wijst de keten recht naar het doel. |
| {{ui:Kijken naar}} | Beide | Draait zodat de {{ui:As die wijst}} naar het doel wijst, en houdt de {{ui:As die omhoog blijft}} zo dicht mogelijk bij omhoog. |
| {{ui:Transformaties kopiëren}} | Beide | Neemt de plaats, draaiing of grootte van het doel over — die aangevinkt zijn. |
| {{ui:Limieten}} | Beide | Houdt zijn eigen plaats, draaiing (graden) of grootte tussen een {{ui:min}} en een {{ui:max}} per as; laat een paar leeg om die as vrij te laten. |
| {{ui:Kind van}} | Beide | Beweegt met het doel alsof het eraan hangt, vanaf waar beide stonden toen u het doel koos. |
| {{ui:Pad volgen}} | Objecten | Zit op een [krommeobject](topic:curves) op {{ui:Langs de kromme}} (0 het begin, 1 het eind; keyen om te reizen), en met {{ui:Langs de kromme draaien}} kijkt het langs het pad. |

Een doel is een ander object in de open groep, een bot van hetzelfde skelet, of {{ui:Een punt}} dat u typt (het punt van een object staat in de coördinaten van het model, dat van een bot in die van zijn mesh). Voor een IK-been: zet het doel waar de voet moet komen en keyt u het doel, of keyt u {{ui:Hoeveel}} om het been tussen de sleutels aan IK over te dragen.

:::tip
Een object dat kijkt naar een object dat een pad volgt, ziet het op het pad: ModelCraft berekent eerst de doelen, ongeacht de volgorde van de objecten.
:::

## Fysica: laten vallen, stapelen en botsen

Laat objecten vallen en tegen elkaar aan slaan, en bewaar daarna het resultaat als sleutels.

1. Kies een groep, component of mesh en stel zijn {{ui:Star lichaam}} in onder {{ui:Fysica}}: {{ui:Valt en botst}} (hij beweegt) of {{ui:Blijft staan, zit in de weg}} (een tafel, een muur, een helling). Geef een vallend object zijn {{ui:Vorm}} — {{ui:Kubus (zijn omhullende)}} of {{ui:Bol (rond zijn omhullende)}} — zijn {{ui:Massa (kg)}}, {{ui:Wrijving}} en {{ui:Stuiteren}} (0 dreunt, 1 stuitert net zo hoog terug).
2. Onder {{ui:Het hele model}} stelt u {{ui:Van (s)}} en {{ui:Tot (s)}} in, de {{ui:Zwaartekracht (m/s², omlaag)}} en of er {{ui:Een grond om op te landen}} is (en de hoogte daarvan).
3. Klik op {{ui:Fysica bakken}} (in het paneel of in de groep {{ui:Fysica}}). Elk vallend object krijgt een sleutel voor plaats, draaiing en grootte op elk beeld tussen de twee tijden; speel het af zoals elke animatie.

Opnieuw bakken vervangt die sleutels; {{ui:Gebakken keys verwijderen}} haalt ze weg. De objecten beginnen in rust, waar hun sleutels, krommen en beperkingen ze zetten op {{ui:Van (s)}} (een gekeyde beweging ervoor gaat niet door in de val). Meer {{ui:Stappen per beeld}} houdt hoge stapels stabieler; de statusbalk meldt wanneer iets aan het eind nog beweegt.

:::note
Vormen zijn kubussen en bollen rond de omhullende van elk object; een kubus raakt met zijn hoeken, randmiddens en vlakmiddens, zodat kubussen stapelen en omvallen zoals u verwacht. Stof, vloeistoffen, verbindingen tussen objecten en exacte vormen zijn nog niet beschikbaar.
:::

## Drivers

Een **driver** stelt een vormsleutel in op basis van andere dingen in plaats van met de hand: open de driver van een sleutel (de rekenmachineknop), schrijf een **expressie** en geef elke naam erin op wat hij leest ({{ui:Leest}}): de tijd in seconden, het beeld, de plaats, draaiing of grootte van een plaatsing langs X, Y of Z, de helderheid van een lamp, of een andere vormsleutel. Bijvoorbeeld, met `v` die de draaiing van een deur om Z leest, opent `clamp(v / 90, 0, 1)` een vorm terwijl de deur opengaat.

Expressies gebruiken getallen, de namen, `+ - * / % ^` en haakjes, en de functies `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg` met `pi` en `e`. Een fout wordt aangewezen en verandert niets. De schuif van een gedreven sleutel toont de waarde van de driver; de driver wint van het spoor van de sleutel tot u hem verwijdert.

## Sleutels kiezen en wijzigen (weergave Keys)

{{ui:Keys}} toont per spoor een rij: de camera, elke bewegende groep, en elke eigenschap ("Lamp 2 · Helderheid (lm)"; eigenschapssleutels zijn rond).

- Klik op een sleutel om hem te kiezen; {{key:Shift}}-klik of {{key:Mod}}-klik voegt sleutels toe aan de keuze of haalt ze eruit. {{key:Shift}}-slepen over de rijen tekent een kader dat elke sleutel erin toevoegt.
- Sleep een gekozen sleutel om ze allemaal te verplaatsen; {{key:Left}} / {{key:Right}} verplaatsen ze een beeld ({{key:Shift}}: tien).
- {{key:Mod+C}} kopieert de gekozen sleutels, {{key:Mod+V}} plakt ze vanaf de afspeelkop op dezelfde sporen (een ander ModelCraft-tabblad kan ze ook plakken).
- {{ui:Rek}} spreidt de gekozen sleutels uit vanaf de afspeelkop met het getal ernaast (2 = twee keer zo ver uit elkaar; 0.5 trekt ze samen).
- De lijst met versnelling stelt in hoe elke gekozen sleutel verdergaat.

## Krommen vormen (weergave Krommen)

{{ui:Krommen}} is een grafiek van elk getal in de tijd: tijd langs, waarde omhoog. Vink de krommen aan die in de lijst links getoond moeten worden (X, Y en Z zijn rood, groen en blauw).

- Klik op een sleutel (een vierkant) om hem te kiezen, {{key:Shift}}-klik voor meer, of sleep een kader. Sleep een gekozen sleutel om zijn tijd en waarde te wijzigen; met meerdere gekozen sleutels verplaatst slepen ze langs de tijd.
- Een gekozen sleutel toont zijn twee **handvatten**. Sleep er een om de kromme aan die kant te vormen. {{ui:Handvatten}} zegt hoe ze zich gedragen: {{ui:Automatisch}} (een gladde kromme door de sleutels eromheen), {{ui:Wijzend naar de volgende key}}, {{ui:Uitgelijnd}} (de twee blijven op één rechte lijn, zodat de kromme geen hoek heeft) of {{ui:Vrij}}.
- {{ui:Van de gekozen keys}} stelt in hoe elke gekozen sleutel naar de volgende gaat: {{ui:Kromme (handvatten)}}, {{ui:Gladmaken}}, {{ui:Gelijkmatig}}, {{ui:Langzaam in- en uitgaan}} of {{ui:Vasthouden}}.
- {{ui:Ervoor}} en {{ui:Erna}} stellen in wat een kromme doet buiten zijn sleutels: {{ui:Vasthouden}} (blijft op de eerste of laatste waarde), {{ui:Herhalen}}, {{ui:Heen en weer}}, of {{ui:Herhalen en doorgaan}} (elke herhaling begint waar de vorige eindigde: een wiel blijft rollen, een wandelaar blijft lopen).
- Het wiel zoomt ({{key:Mod}}: alleen waarden; {{key:Shift}}: alleen tijd); slepen met de middelste knop of met {{key:Alt}} verschuift het beeld; {{ui:Alles tonen}} of {{key:Home}} past elke getoonde kromme in beeld. Klik op lege ruimte om de afspeelkop daarheen te zetten. {{key:Delete}} verwijdert de gekozen sleutels.

Handvatten worden ervan weerhouden elkaar in de tijd te kruisen, zodat een kromme nooit achteruit loopt.

## Animaties hergebruiken (weergave Clips)

Een **clip** speelt een opgeslagen animatie (een **actie**) af op de tijdlijn. Clips worden in volgorde gemengd, de lagere rijen over de hogere; de eigen sporen van de tijdlijn gaan boven elke clip.

1. Key de groepen en lampen zoals gewoonlijk, klik daarna op {{ui:Een clip maken}} in {{ui:Clips}} en geef de actie een naam. De sporen worden de actie, en een clip speelt die af waar ze stonden (de camera blijft op de tijdlijn).
2. Om hem opnieuw te gebruiken, kies de actie en klik op {{ui:Clip toevoegen}}: een nieuwe clip begint op de afspeelkop.
3. Sleep een clip langs zijn rij om hem te verplaatsen; klik erop om {{ui:Start (s)}}, {{ui:Snelheid}} (2 = twee keer zo snel), {{ui:Herhalingen}}, {{ui:Hoeveel}} (0 tot 1), {{ui:Mix}} ({{ui:Vervangen}}, of {{ui:Erbovenop optellen}} op de clips ervoor), {{ui:Buiten de clip}} (niets, zijn eind vasthouden, of beide einden vasthouden) en {{ui:Dempen}} in te stellen. De pijlen wijzigen de volgorde; de prullenbak verwijdert hem (een actie die geen clip meer gebruikt, gaat mee weg).

Een clip op minder dan volledig {{ui:Hoeveel}} mengt met wat eronder ligt: de clip ervoor, of de lamp of plaatsing zoals die is zonder de animatie.

## Wat waar speelt

| Wat | In de weergave | In een gerenderde video |
|---|---|---|
| Camerasleutels, lenshoek met camerasleutels | Ja | Ja |
| Plaats, draaiing en grootte (sleutels, krommen, clips) | Ja | Ja |
| Lamphelderheid, spreiding en kleur | Ja | Nog niet beschikbaar: de video gebruikt de lampen zoals ze zijn bij de start (zie [nog niet beschikbaar](topic:not-built-yet)) |
| Lenshoek zonder camerasleutels | Ja | Nog niet beschikbaar: keyt de camera ook |
| Vormsleutels en drivers | Ja | Ja |
| Armaturen (gepose meshes) | Ja | Ja |
| IK en beperkingen | Ja | Ja |
| Gebakken fysica (sleutels) | Ja | Ja |

Alles wordt opgeslagen in het `.modelcraft`-bestand met de rest van de animatie, en de {{ui:Ongedaan maken}} en {{ui:Opnieuw}} van de tijdlijn nemen elk daarvan terug.
