---
title: Render et billede af modellen
summary: Lav et billede, der ser ud som dagslys: himmel, sol fra din models sted og dato, bløde skygger, glas- og metaludseende, og gem det derefter som en PNG.
keywords: render, forudindstilling, forudindstillinger, scene-forudindstilling, interiør, eksteriør, snitvisning, nat, ét klik, rendering, path tracing, path traced, ray tracing, global illumination, refleksioner, refraktion, høj kvalitet, foto, fotorealistisk, realistisk, billede, image, png, still, himmel, sol, dagslys, skygger, bløde skygger, ambient occlusion, glas, metal, blank, materialer, eksponering, lysstyrke, overskyet, skumring, studie, præsentation, tåge, dis, røg, sky, volumen, lysstråler, gudestråler, kaustikker, adaptiv sampling, støj
from: 517ba4d3
---

{{ui:Render et billede…}} laver et billede af visningen, der ligner dagslys frem for en tegning: en himmel, solen der står, hvor din models sted og dato placerer den, bløde skygger, lys fra hele himlen, der gør hjørner og huller mørkere, og farver, der kan ligne glas, metal eller blank maling. Modellen ændres ikke.

## Render visningen

1. Stil visningen op, som du vil have billedet: kredsløb, zoom, vælg en [scene](topic:scenes), skjul det, der ikke skal vises. Billedet bruger visningens eget kamera.
2. Klik på {{ui:Eksportér}} i gruppen {{ui:Fil}}, og derefter på {{ui:Render et billede…}}.
3. Vælg en {{ui:Scene}}, hvis den trykkede ikke er den, du vil have (se [scene-forudindstillingerne](topic:render#scene-presets-a-good-picture-in-one-click)), vælg {{ui:Størrelse}}, og klik derefter på {{ui:Render}}.

   Billedet fyldes ud, mens det renderes, og bliver glattere for hvert gennemløb. {{ui:Stop}} (eller {{key:Esc}}) afslutter tidligt og beholder billedet, som det er nået til.

4. Klik på {{ui:Gem}} for at downloade det (en PNG, medmindre {{ui:Gem som}} siger andet).

:::tip
Start med {{ui:Kladde}} ved {{ui:Visningens størrelse}} for at kontrollere kameraet og udseendet, og render derefter {{ui:God}} eller {{ui:Bedst}} i en større størrelse til det endelige billede.
:::

## Scene-forudindstillinger: et godt billede med ét klik

Øverst i dialogen er fire {{ui:Scene}}-knapper. Hver sætter himmel, lysstyrke, jord, kantlinjer, kvalitet og solen med ét klik, så der ikke er noget at lære, før det første billede. Klik på en, og klik derefter på {{ui:Render}}.

| Scene | Hvad den sætter | Brug den til |
|---|---|---|
| {{ui:Udvendig}} | Klar himmel, modellens egen sol, jord til | Bygningen udefra |
| {{ui:Indvendig}} | Overskyet himmel (jævnt lys, ingen hårde solpletter), en halv stop lysere | En visning indefra et rum |
| {{ui:Snitvisning}} | Hvidt studie, ingen jord, kantlinjer i den hurtige render | En model skåret af et snit |
| {{ui:Nat}} | Solen nede (midnat i midtvinteren for stedets halvdel af verden), en stop lysere | Lamper, der lyser modellen. Uden lamper bliver billedet mørkt |

- {{ui:Vælg til denne visning}} vælger for dig: {{ui:Snitvisning}}, når et snit er slået til, {{ui:Indvendig}}, når kameraet er inde i modellen, ellers {{ui:Udvendig}}. Første gang du åbner dialogen, starter den sådan af sig selv.
- Alle indstillinger ligger nedenfor og kan ændres. Når du ændrer en, som scenen sætter, er ingen knap trykket, og linjen under knapperne siger, at indstillingerne er dine egne. Klik på scenen igen for at få dens værdier tilbage.
- En scene rører ikke motoren, tilstanden, størrelsen, materialerne, kameraet eller lamperne.

:::note
Scenerne giver de samme værdier i ModelCraft og BimCraft. Hvordan det færdige billede ser ud, afhænger af din model og dit grafikkort.
:::

## Indstillinger

| Indstilling | Hvad den gør |
|---|---|
| {{ui:Størrelse}} | Visningens størrelse, dobbelt visningens størrelse, Full HD, 4K eller et kvadrat. Faste størrelser beholder visningens kamera og viser lidt mere eller mindre i siderne |
| {{ui:Tilstand}} | {{ui:Hurtig}}, eller {{ui:Høj kvalitet (path traced)}} (nedenfor) med dens {{ui:Tidsgrænse}} |
| {{ui:Kvalitet}} | Hvor mange gennemløb (eller i høj kvalitet, samples) der midles: {{ui:Kladde}} 16, {{ui:God}} 64, {{ui:Bedst}} 256. Flere gennemløb giver blødere skygger og kanter og tager længere tid |
| {{ui:Himmelblå}} | {{ui:Klar himmel}}, {{ui:Overskyet}} (blødt lys, svage skygger), {{ui:Skumring}} (lavt, varmt lys) eller {{ui:Hvidt studie}} (en almindelig hvid baggrund) |
| {{ui:Sol}} | Solen kommer fra datoen, tidspunktet og stedet under {{ui:Stil}} › sol. Sæt flueben i {{ui:Brug en anden dato og et andet tidspunkt til dette billede}} for at prøve et andet tidspunkt uden at ændre modellens stil |
| {{ui:Lysstyrke}} | Lysere eller mørkere, i trin (stops) |
| {{ui:Terræn under modellen}} | En jord, der tager skyggerne og toner ud mod horisonten. Slå den fra for en model, der svæver |
| {{ui:Tegn kanter}} | Tegner modellens kanter tyndt over billedet, for et tegnet udseende |

Når solen står under horisonten på det valgte tidspunkt, er det nat: himlen bliver mørk, og modellens [lamper](topic:lights) lyser den op. Dialogen siger det.

Indstillingerne gemmes i `.modelcraft`-filen, så det næste billede af den samme model starter, hvor du slap.

## Få farver til at ligne glas eller metal

Under {{ui:Materialer}} har hver farve på skærmen et udseende: {{ui:Mat}}, {{ui:Satin}}, {{ui:Blank}}, {{ui:Metal}}, {{ui:Poleret metal}}, {{ui:Glas}} eller {{ui:Matteret glas}}. {{ui:Umalede flader}} er de flader, der ikke har en farve af deres egen.

For at gøre vinduer til glas, [mal](topic:paint) vinduesrudene i én farve, og sæt derefter farven til {{ui:Glas}}. Glas lader himlen og det, der er bagved, skinne igennem, farvet af sin farve, og reflekterer himlen.

:::note
I {{ui:Hurtig}}-tilstand reflekterer glas og metal himlen, ikke resten af modellen, og lys bøjes ikke gennem glas. {{ui:Høj kvalitet (path traced)}}-tilstanden nedenfor gør begge dele.
:::

## Høj kvalitet

Vælg {{ui:Tilstand}} › {{ui:Høj kvalitet (path traced)}} for et billede, der følger lyset, sådan som et kamera ser det:

- lyset hopper mellem flader, så et rum oplyst gennem et vindue eller af en lampe er lyst rundt om, og farver smitter af på deres naboer;
- glas er rigtigt glas: lyset bøjes gennem det, og det reflekterer modellen;
- metal og polerede flader reflekterer resten af modellen;
- lyspaneler lyser som paneler med bløde skygger.

Det er meget langsommere end {{ui:Hurtig}}: hvert gennemløb sporer lyset for hver pixel igen. Billedet starter kornet og bliver rent, efterhånden som samplene lægges sammen, så start småt ({{ui:Visningens størrelse}}, {{ui:Kladde}}) og vælg en {{ui:Tidsgrænse}}: når den løber ud, beholdes billedet, som det er nået til. {{ui:Stop}} beholder det også. Det første gennemløb venter, mens browseren klargør path traceren.

Hvor browseren har WebGPU, er path traceren CadCrafts egen og kører på grafikkortet; linjen under billedet siger {{ui:Path traced på grafikkortet (WebGPU)}}. Efter {{ui:Stop}} eller tidsgrænsen fortsætter {{ui:Genoptag}} med samme billede, indtil det har alle sine samples; ændrer du en indstilling eller trykker på {{ui:Render}} igen, starter det forfra. Uden WebGPU path traces billedet med WebGL i stedet (linjen siger det), og {{ui:Genoptag}} tilbydes ikke.

:::linux
Firefox og de fleste Chrome-opsætninger på Linux har endnu ingen WebGPU, så høj kvalitet bruger WebGL dér.
:::

I denne tilstand tegnes kanter ikke, og bibliotekets teksturer viser deres farve og ruhed, men ikke deres ujævnheder (et [materiale lavet med noder](topic:shading#in-high-quality-pictures) viser sin normal og ujævnheder). Et snit laves på modellen, før billedet starter.

{{ui:Fjern støj (fjerner kornet, der er tilbage efter samplene)}} er slået til som standard: når billedet er færdigt, eller er stoppet, fjernes det tilbageværende korn af et neuralt netværk lavet til dette (Intel Open Image Denoises offentliggjorte netværk, kørt på din egen computer: på grafikkortet, ellers på processoren). Et billede med få samples bliver rent; {{ui:Vis}} › {{ui:Billedet før støjfjernelse}} viser det, som det blev renderet.

## Render i visningen

Arbejdsområdet {{ui:Render}} kører path traceren i selve visningen: kredsløb, redigér modellen eller ændr et lys, og den starter igen med det samme. {{ui:Område}}: træk en firkant, og kun den renderes; {{ui:Hele visningen}} går tilbage. {{ui:Fokus}}: klik på det, der skal være skarpt, og dybdeskarpheden fokuserer der. {{ui:Detalje}} sætter, hvor mange af visningens pixels der renderes (færre er hurtigere). {{ui:Pause}} stopper og fortsætter. Den kræver WebGPU: uden den siger arbejdsområdet det, og {{ui:Eksportér}} › {{ui:Render et billede…}} virker stadig.

## Himle og lysprofiler på grafikkortet

Med WebGPU har høj kvalitet to himle mere:

- {{ui:Fysisk himmel}} udregner dagslyset ud fra solens højde: en dyb blå farve oppe, et blegt bånd ved horisonten, og en sol, der bliver varmere og svagere, jo lavere den står. {{ui:Dis}} går fra en meget klar dag (2) til en disig (10).
- {{ui:Himmelbillede (HDRI)}} lyser modellen med et panoramabillede af et rigtigt sted. {{ui:Vælg et billede…}} tager en equirectangular `.hdr`- eller `.exr`-fil; {{ui:Drej}} drejer den rundt om modellen, og {{ui:Billedets lysstyrke}} gør den lysere eller mørkere. Billedet har sin egen sol, så modellens sol lægges ikke til. Det huskes kun, mens siden er åben: efter genåbning skal du vælge det igen.

Hver lampe i listen {{ui:Lamper}} kan få en producents lysprofil: {{ui:IES-profil…}} læser en IES-fil (LM-63), og lampen kaster så sit lys, som armaturet gør (en smal downlight, en vægvasker). Alle lamper med det navn bruger den, og lampen beholder sin egen lysstyrke. Klik på profilens navn for at holde op med at bruge den.

Vinduer af klart glas hjælper himlens lys med at finde vej ind i et rum, så billeder af indvendige rum under en himmel bliver rene hurtigere.

{{ui:Hurtig}}-tilstanden og WebGL-path traceren viser {{ui:Fysisk himmel}} og {{ui:Himmelbillede (HDRI)}} som en klar himmel og ignorerer lysprofiler.

## Kameraet

{{ui:Kamera}} opsætter billedet som et fotografi:

- {{ui:Eksponering}}: behold {{ui:Lysstyrkeskyder}}, eller vælg {{ui:Kameraindstillinger}} og sæt {{ui:Blænde (f-tal)}}, {{ui:Lukkertid}} og {{ui:ISO}}, som på et kamera; EV'en ved siden af dem er den sædvanlige eksponeringsværdi. f/16 ved 1/100 s og ISO 100 svarer til en solrig dag; en mørkere scene vil have en større blænde, en langsommere lukkertid eller en højere ISO. Dette virker i alle tilstande.
- {{ui:Dybdeskarphed}} slører det, der er nærmere eller længere væk end {{ui:Fokusafstand (m)}}, som en linse med den blænde ville gøre (lad feltet stå tomt for at fokusere på det, der er midt i visningen); {{ui:Blændeform}} giver lys i det ufokuserede område en rund eller bladet form.
- {{ui:Topunktsperspektiv (lodrette linjer forbliver lodrette)}} retter kameraet op og forskyder billedet, som en arkitektonisk tilt-shift-linse gør, så vægge ikke hælder, når du kigger op eller ned på en bygning.
- {{ui:Hvidbalance}} sætter, hvilken lysfarve der vises som hvid: lavere (f.eks. 3000 K) for varmt lampelys, højere for skygge og overskyede dage.
- {{ui:Projektion}}: {{ui:360°-panorama}} laver et 2:1-billede af alt rundt om kameraet til panoramavisere; {{ui:360°-stereopanorama}} stabler et venstre-øje- og et højre-øje-panorama til headsets; {{ui:Kubekort (6 flader)}} laver seks kvadratiske visninger i et 3 × 2-gitter. Bredden kommer fra {{ui:Størrelse}}.

Projektion, dybdeskarphed, topunktsperspektiv og hvidbalance kræver path traceren på grafikkortet (WebGPU), så de vises kun i {{ui:Høj kvalitet}}.

## Færdiggør billedet

{{ui:Billede}} graderer billedet i høj kvalitet som et fotografi, og hver styring ændrer det færdige billede med det samme, uden at renderes igen:

- {{ui:Udseende (visningstransformation)}}: {{ui:ACES filmic}} (billedet som før), {{ui:AgX}} (blødere, bevarer farve i meget kraftigt lys), {{ui:Filmic}} (en blid filmkurve) eller {{ui:Standard}} (rent; kraftigt lys bliver klippet til hvidt).
- {{ui:Kontrast}} og {{ui:Komprimering af højlys}} (henter detaljer frem i meget lyse dele).
- {{ui:Bloom}} (en blød glød omkring kraftigt lys), {{ui:Blænding}} med dens {{ui:Blændingsstriber}} (stjerneformede stråler fra de lyseste punkter) og {{ui:Vignettering}} (mørkere hjørner).
- {{ui:Farvetabel (.cube)…}} anvender en farvegradering fra en `.cube`-fil, med dens {{ui:Farvetabellens styrke}}; ligesom et himmelbillede holdes den kun, mens siden er åben.

## Gem billedet

{{ui:Gem som}} ved siden af {{ui:Gem}} vælger filen: {{ui:PNG}}, {{ui:JPEG}} eller {{ui:WebP}} til deling (JPEG og WebP kun, hvor browseren kan skrive dem), og efter en render i høj kvalitet på grafikkortet også:

- {{ui:PNG, 16 bit}}: det gradede billede med finere trin mellem nuancerne, til udskrivning eller videre redigering.
- {{ui:EXR, hvert lag (32-bit float)}}: billedet som renderet (lineært lys, ingen gradering) med hvert renderelement og hver lysgruppe som sit eget lag, til compositing-programmer.
- {{ui:Renderfil (.ccrender, til at gradere igen senere)}}: alt, dialogen skal bruge for at blande og gradere billedet igen. {{ui:Åbn en renderfil…}} henter den tilbage, med dens blanding og gradering, uden at renderes.

## Bland lysene efter renderingen

Slå {{ui:Lysblanding (ændr hvert lys' farve og lysstyrke efter renderingen)}} til, før du trykker på {{ui:Render}}. Når billedet er færdigt (eller stoppet), lister {{ui:Bland billedet}} dets lys i grupper: himlen, solen og lamperne efter navn (hver lampe med samme navn er én gruppe). Slå en gruppe fra, giv den en farve, eller gør den lysere eller mørkere, og billedet ændrer sig med det samme, uden at renderes igen. {{ui:Gem blanding}} gemmer blandingen under et navn, så du kan vælge den igen senere; {{ui:Som renderet}} går tilbage til billedet, som det blev lavet. {{ui:Gem}} gemmer det blandede billede.

{{ui:Renderelementer (albedo, normaler, dybde, diffus, spejlende, transmission, emission, ID'er)}} gemmer også billedets dele. {{ui:Vis}} skifter visningen til en af dem: overfladefarverne (albedo), normalerne, dybden, det diffuse, spejlende og transmitterede lys (hver direkte og indirekte), hvad der lyser, og himlen, og en farve pr. objekt eller pr. materiale til at lave masker.

Begge gemmer ekstra lag på grafikkortet. Ved store størrelser har et grafikkort måske ikke plads; dialogen siger det, og en mindre størrelse virker.

## Renderkøen

Efter en opsætning i høj kvalitet holder {{ui:Føj dette billede til køen}} under {{ui:Renderkø}} billedet, som det er indstillet nu; videodialogens {{ui:Føj denne animation til køen}} gør det samme for en hel animation, path traced billede for billede. {{ui:Start køen}} renderer dem et efter et på denne computer, og {{ui:Gem}} ved siden af hver færdig gemmer den. Lukker du siden, beholdes køen: åbn den samme model, og den fortsætter, hvor den stoppede. Køen kræver WebGPU.

## Tåge, røg, støj og kaustikker

Disse findes i {{ui:Tåge, røg og støj}} og virker i {{ui:Høj kvalitet}} på grafikkortet; de andre motorer udelader dem.

- {{ui:Tåge og dis}} fylder luften op til en højde med en tåge, som solen, himlen og lamperne lyser. {{ui:Hvor langt du kan se, i meter}} sætter, hvor tyk den er (ca. 100 m er let dis, 20 m en tyk tåge), {{ui:Tågens højde over jorden, i meter}} er, hvor den slutter, og {{ui:Lysstråler}} er, hvor meget tågen gløder mod lyset. Sollys forlader tågen øverst, så hvor sol kommer ind gennem et vindue eller mellem bygninger, ser du det som lysstråler.
- {{ui:Røg eller sky}} tilføjer ét volumen af røg eller sky, lyst som tågen. {{ui:Slags}} er en {{ui:Sky}}, en {{ui:Røgsøjle}} eller {{ui:Fra en volumenfil (.ccvol)}}, CadCrafts eget gitterformat. {{ui:Detalje}} og {{ui:Variation}} ændrer en lavet sky eller søjle, {{ui:Længste sides størrelse, i meter (0 = modellens størrelse)}}, {{ui:Flyt X (m)}}, {{ui:Flyt Y (m)}}, {{ui:Flyt Z (m)}} og {{ui:Drej}} placerer den (den starter midt i modellen), {{ui:Tykkelse}} gør den tættere, {{ui:Fremadrettet glød}} gør den lysere mod lyset, og {{ui:Farve}} farver den. En volumenfil holdes kun, mens siden er åben, ligesom et himmelbillede.
- {{ui:Stop tidligt, hvor billedet er rent (adaptiv sampling)}} giver ikke flere samples til pixels, der er faldet til ro, så resten af billedet bliver færdigt hurtigere. {{ui:Støj, der accepteres}} er, hvor meget korn der er tilbage, når en pixel stopper. Linjen under billedet siger, hvor mange samples en pixel fik i gennemsnit.
- {{ui:Kaustikker (lys brudt af glas eller kastet af spejle)}} sporer lys fra lamperne og solen, så den lyse plet under en glaskugle, eller et spejls lys på en væg, bliver ren i stedet for kornet. Den er slået fra, mens tåge, røg, {{ui:Lysblanding (ændr hvert lys' farve og lysstyrke efter renderingen)}} eller renderelementer er slået til, og den er lavet til billeder, ikke til 360°-billeder, animationer eller arbejdsområdet Render.

## Hvor lang tid det tager

Billedet laves på din egen computer af dens grafikkort; intet uploades. Hvor lang tid det tager, afhænger af kortet. Tiden vokser med gennemløbene og pixlene: {{ui:Bedst}} har 16 gange så mange gennemløb som {{ui:Kladde}}, og et 4K-billede har ca. fire gange så mange pixels som Full HD. En computer uden grafikkort renderer stadig, bare langsommere.

:::note
Hvis dialogen siger, at browseren ikke kan rendere billeder, har browseren ikke WebGL 2. Opdatér den, eller slå hardwareacceleration til i dens indstillinger.
:::
