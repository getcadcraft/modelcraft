---
title: Render et bilde av modellen
summary: Lag et bilde som ser ut som dagslys: himmel, sol fra modellens sted og dato, myke skygger, glass- og metallutseende, og lagre det som PNG.
keywords: render, forhåndsinnstilling, forhåndsinnstillinger, scene-forhåndsinnstilling, interiør, eksteriør, snittvisning, natt, ett klikk, rendering, path tracing, path traced, ray tracing, global illumination, refleksjoner, refraksjon, høy kvalitet, foto, fotorealistisk, realistisk, bilde, illustrasjon, png, stillbilde, himmel, sol, dagslys, skygger, myke skygger, ambient occlusion, glass, metall, blank, materialer, eksponering, lysstyrke, overskyet, skumring, studio, presentasjon, tåke, dis, røyk, sky, volum, lysstråler, gudestråler, kaustikker, adaptiv sampling, støy
from: 517ba4d3
---

{{ui:Render et bilde…}} lager et bilde av visningen som ser ut som dagslys i stedet for en tegning: en himmel, sola der modellens sted og dato plasserer den, myke skygger, lys fra hele himmelen som gjør hjørner og sprekker mørkere, og farger som kan se ut som glass, metall eller blank maling. Modellen endres ikke.

## Render visningen

1. Still inn visningen slik du vil ha bildet: roter, zoom, velg en [scene](topic:scenes), skjul det som ikke skal vises. Bildet bruker visningens eget kamera.
2. Klikk {{ui:Eksporter}} i gruppen {{ui:Fil}}, deretter {{ui:Render et bilde…}}.
3. Velg en {{ui:Scene}} hvis den som er trykket ikke er det du vil ha (se [Scenoppsett](topic:render#scene-presets-a-good-picture-in-one-click)), velg {{ui:Størrelse}}, og klikk {{ui:Render}}.

   Bildet fylles ut mens det rendres, og blir jevnere for hvert pass. {{ui:Stopp}} (eller {{key:Esc}}) avslutter tidlig og beholder bildet så langt.

4. Klikk {{ui:Lagre}} for å laste det ned (en PNG med mindre {{ui:Lagre som}} sier noe annet).

:::tip
Start med {{ui:Utkast}} i {{ui:Visningens størrelse}} for å sjekke kameraet og utseendet, og render deretter {{ui:God}} eller {{ui:Best}} i større størrelse for det endelige bildet.
:::

## Scenoppsett: et godt bilde med ett klikk

Øverst i dialogen er det fire {{ui:Scene}}-knapper. Hver setter himmelen, lysstyrken, underlaget, kantlinjene, kvaliteten og solen med ett klikk, så det er ingenting å lære før det første bildet. Klikk på en, og deretter {{ui:Render}}.

| Scene | Hva den setter | Bruk den til |
|---|---|---|
| {{ui:Eksteriør}} | Klar himmel, modellens egen sol, underlag på | Bygningen utenfra |
| {{ui:Interiør}} | Overskyet himmel (jevnt lys, ingen harde solflekker), et halvt blenderstopp lysere | En visning fra innsiden av et rom |
| {{ui:Snittvisning}} | Hvitt studio, ingen underlag, kantlinjer i den raske renderingen | En modell kuttet av et snitt |
| {{ui:Natt}} | Solen under horisonten (midnatt midtvinter for stedets halvkule), ett blenderstopp lysere | Lamper som lyser opp modellen. Uten lamper blir bildet mørkt |

- {{ui:Velg for denne visningen}} velger for deg: {{ui:Snittvisning}} når et snitt er på, {{ui:Interiør}} når kameraet er inne i modellen, ellers {{ui:Eksteriør}}. Første gang du åpner dialogen, starter den slik av seg selv.
- Alle innstillinger står under og kan endres. Når du endrer én, er ikke lenger scenen aktiv: ingen knapp er trykket, og linjen under knappene sier at innstillingene er dine egne. Klikk scenen igjen for å sette verdiene tilbake.
- En scene endrer ikke motoren, modusen, størrelsen, materialene, kameraet eller lampene.

:::note
Scenene gir de samme verdiene i ModelCraft og BimCraft. Hvordan det ferdige bildet ser ut, avhenger av modellen og grafikkortet ditt.
:::

## Innstillinger

| Innstilling | Hva den gjør |
|---|---|
| {{ui:Størrelse}} | Visningens størrelse, to ganger visningens størrelse, Full HD, 4K eller et kvadrat. Faste størrelser beholder visningens kamera og viser mer eller mindre på sidene |
| {{ui:Modus}} | {{ui:Rask}}, eller {{ui:Høy kvalitet (path tracing)}} (nedenfor) med sin {{ui:Tidsgrense}} |
| {{ui:Kvalitet}} | Hvor mange pass (eller, i høy kvalitet, samples) som gjennomsnittes: {{ui:Utkast}} 16, {{ui:God}} 64, {{ui:Best}} 256. Flere pass gir jevnere skygger og kanter, men tar lengre tid |
| {{ui:Himmelblå}} | {{ui:Klar himmel}}, {{ui:Overskyet}} (mykt lys, svake skygger), {{ui:Skumring}} (lavt, varmt lys) eller {{ui:Hvitt studio}} (en enkel hvit bakgrunn) |
| {{ui:Sol}} | Solen kommer fra dato, tid og sted i {{ui:Stil}} › sol. Kryss av {{ui:Bruk en annen dato og tid for dette bildet}} for å prøve en annen tid uten å endre modellens stil |
| {{ui:Lysstyrke}} | Lysere eller mørkere, i trinn (blenderstopp) |
| {{ui:Bakke under modellen}} | Et underlag som tar skyggene og går over i horisonten. Slå det av for en modell som flyter |
| {{ui:Tegn kanter}} | Tegner modellens kanter tynt over bildet, for et tegnet utseende |

Når solen står under horisonten på det valgte tidspunktet, er det natt: himmelen blir mørk, og modellens [lamper](topic:lights) lyser den opp. Dialogen sier fra om det.

Innstillingene lagres i `.modelcraft`-filen, så neste bilde av den samme modellen starter der du slapp.

## Lag farger som ser ut som glass eller metall

Under {{ui:Materialer}} har hver farge på skjermen et utseende: {{ui:Matt}}, {{ui:Silkematt}}, {{ui:Blank}}, {{ui:Metall}}, {{ui:Polert metall}}, {{ui:Glass}} eller {{ui:Matt glass}}. {{ui:Umalte flater}} er flatene som ikke har egen farge.

For å gjøre vinduer til glass, [mal](topic:paint) rutene med én farge, og sett deretter den fargen til {{ui:Glass}}. Glass lar himmelen og det som er bak vise seg, farget av sin farge, og reflekterer himmelen.

:::note
I {{ui:Rask}}-modus reflekterer glass og metall himmelen, ikke resten av modellen, og lys bøyes ikke gjennom glass. Modusen {{ui:Høy kvalitet (path tracing)}} nedenfor gjør begge deler.
:::

## Høy kvalitet

Velg {{ui:Modus}} › {{ui:Høy kvalitet (path tracing)}} for et bilde som følger lyset slik et kamera ser det:

- lys spretter mellom flatene, så et rom som lyses inn gjennom et vindu, eller av en lampe, blir lyst rundt hele veggen, og farger smitter over på naboene;
- glass er ekte glass: lys bøyes gjennom det, og det reflekterer modellen;
- metall og polerte flater reflekterer resten av modellen;
- lyspaneler lyser som paneler, med myke skygger.

Det er mye tregere enn {{ui:Rask}}: hvert pass sporer lyset for hver piksel på nytt. Bildet starter kornet og blir klart etter hvert som samplene legges sammen. Start derfor lite ({{ui:Visningens størrelse}}, {{ui:Utkast}}) og velg en {{ui:Tidsgrense}}: når den er brukt opp, beholdes bildet så langt. {{ui:Stopp}} beholder det også. Det første passet venter mens nettleseren forbereder path tracer.

Der nettleseren har WebGPU, er path tracer CadCraft sin egen og kjører på grafikkortet; linjen under bildet sier {{ui:Path traced på grafikkortet (WebGPU)}}. Etter {{ui:Stopp}} eller tidsgrensen fortsetter {{ui:Fortsett}} med samme bilde til alle samplene er tatt. Endrer du en innstilling, eller trykker {{ui:Render}} igjen, starter det på nytt. Uten WebGPU blir bildet path traced med WebGL i stedet (linjen sier det), og {{ui:Fortsett}} tilbys ikke.

:::linux
Firefox og de fleste Chrome-oppsett på Linux har ikke WebGPU ennå, så høy kvalitet bruker WebGL der.
:::

I denne modusen tegnes ikke kanter. Bibliotekteksturer viser farge og ruhet, men ikke relieffet sitt (et [materiale laget med noder](topic:shading#in-high-quality-pictures) viser normalen og relieffet sitt). Et snitt lages på modellen før bildet starter.

{{ui:Fjern støy (fjerner kornet som er igjen etter samplene)}} er på som standard: når bildet er ferdig, eller stoppet, fjernes kornet som er igjen av et nevralt nettverk laget for dette (Intel Open Image Denoise sitt publiserte nettverk, kjørt på din egen datamaskin: på grafikkortet, ellers på prosessoren). Et bilde med få samples blir rent. {{ui:Vis}} › {{ui:Bildet før støyfjerning}} viser det slik det ble rendret.

## Render i visningen

{{ui:Render}}-arbeidsområdet kjører path tracer i selve visningen: roter, rediger modellen eller endre et lys, så starter den på nytt med en gang. {{ui:Område}}: dra en rektangel, så rendres bare den; {{ui:Hele visningen}} går tilbake. {{ui:Fokus}}: klikk på det som skal være skarpt, så fokuserer dybdeskarpheten der. {{ui:Detalj}} angir hvor mange av visningens piksler som rendres (færre er raskere). {{ui:Pause}} stopper og går videre. Det krever WebGPU: uten det sier arbeidsområdet fra om det, og {{ui:Eksporter}} › {{ui:Render et bilde…}} fungerer fortsatt.

## Himler og lysprofiler på grafikkortet

Med WebGPU har høy kvalitet to himler til:

- {{ui:Fysisk himmel}} regner ut dagslyset fra solens høyde: en dyp blå himmel rett over, et blekt bånd ved horisonten, og en sol som blir varmere og svakere etter hvert som den går lavt. {{ui:Dis}} går fra en veldig klar dag (2) til en disig dag (10).
- {{ui:Himmelbilde (HDRI)}} lyser modellen med et panoramabilde av et ekte sted. {{ui:Velg et bilde…}} tar en equirectangular `.hdr`- eller `.exr`-fil; {{ui:Drei}} dreier den rundt modellen, og {{ui:Bildets lysstyrke}} gjør den lysere eller mørkere. Bildet har sin egen sol, så modellens sol legges ikke til. Det beholdes bare så lenge siden er åpen: etter å ha åpnet den på nytt, velg det igjen.

Hver lampe i {{ui:Lamper}}-listen kan ta en produsents lysprofil: {{ui:IES-profil…}} leser en IES-fil (LM-63), og lampen kaster lyset slik den armaturen gjør (en smal downlight, en veggvasker). Hver lampe med det navnet bruker den, og lampen beholder sin egen lysstyrke. Klikk på profilens navn for å slutte å bruke den.

Vinduer med klart glass hjelper himmelens lys å finne veien inn i et rom, så innendørsbilder under en himmel blir klare raskere.

{{ui:Rask}}-modusen og WebGL-path tracer viser {{ui:Fysisk himmel}} og {{ui:Himmelbilde (HDRI)}} som en klar himmel, og ignorerer lysprofiler.

## Kameraet

{{ui:Kamera}} setter opp bildet som et fotografi:

- {{ui:Eksponering}}: behold {{ui:Lysstyrkeglidebryter}}, eller velg {{ui:Kamerainnstillinger}} og sett {{ui:Blenderåpning (f-tall)}}, {{ui:Lukkertid}} og {{ui:ISO}} som på et kamera. EV-verdien ved siden av dem er den vanlige eksponeringsverdien. f/16 ved 1/100 s og ISO 100 tilsvarer en solrik dag; en mørkere scene krever en større blenderåpning, lengre lukkertid eller høyere ISO. Dette fungerer i alle moduser.
- {{ui:Dybdeskarphet}} gjør uskarpt det som er nærmere eller lenger unna enn {{ui:Fokusavstand (m)}}, slik en linse med den f-verdien ville gjort (la feltet stå tomt for å fokusere på det som er midt i visningen). {{ui:Blenderform}} gir uskarpe høylys en rund eller bladet form.
- {{ui:Topunktsperspektiv (loddrette linjer forblir loddrette)}} retter opp kameraet og forskyver bildet, slik en arkitektonisk tilt-shift-linse gjør, så vegger ikke heller når du ser opp eller ned på en bygning.
- {{ui:Hvitbalanse}} setter hvilken lysfarge som vises som hvit: lavere (for eksempel 3000 K) for varmt lampelys, høyere for skygge og overskyede dager.
- {{ui:Projeksjon}}: {{ui:360°-panorama}} lager et 2:1-bilde av alt rundt kameraet for panoramavisere; {{ui:360° stereopanorama}} stabler et panorama for venstre og høyre øye for hodesett; {{ui:Kubekart (6 flater)}} lager seks kvadratiske visninger i et rutenett på 3 × 2. Bredden kommer fra {{ui:Størrelse}}.

Projeksjon, dybdeskarphet, topunktsperspektiv og hvitbalanse trenger path tracer på grafikkortet (WebGPU), så de vises bare i {{ui:Høy kvalitet}}.

## Fullfør bildet

{{ui:Bilde}} graderer høykvalitetsbildet som et fotografi. Hver kontroll endrer det ferdige bildet med en gang, uten å rendre på nytt:

- {{ui:Utseende (visningstransformasjon)}}: {{ui:ACES filmic}} (bildet som før), {{ui:AgX}} (mykere, beholder farge i svært sterkt lys), {{ui:Filmic}} (en mild filmkurve) eller {{ui:Standard}} (enkelt; sterkt lys klippes til hvitt).
- {{ui:Kontrast}} og {{ui:Høylyskomprimering}} (henter tilbake detaljer i svært lyse deler).
- {{ui:Bloom}} (en myk glød rundt sterkt lys), {{ui:Gjenskinn}} med sine {{ui:Gjenskinnsstriper}} (stjerneformede stråler fra de lyseste punktene) og {{ui:Vignett}} (mørkere hjørner).
- {{ui:Fargetabell (.cube)…}} bruker en fargegradering fra en `.cube`-fil, med sin {{ui:Fargetabellens styrke}}. Som et himmelbilde beholdes den bare så lenge siden er åpen.

## Lagre bildet

{{ui:Lagre som}} ved siden av {{ui:Lagre}} velger filen: {{ui:PNG}}, {{ui:JPEG}} eller {{ui:WebP}} for deling (JPEG og WebP bare der nettleseren kan skrive dem). Etter en høykvalitetsrendering på grafikkortet finnes også:

- {{ui:PNG, 16 bit}}: det graderte bildet med finere trinn mellom nyanser, for utskrift eller videre redigering.
- {{ui:EXR, alle lag (32-bit flyttall)}}: bildet slik det ble rendret (lineært lys, ingen gradering), med hvert renderelement og hver lysgruppe som eget lag, for komponeringsprogrammer.
- {{ui:Renderfil (.ccrender, for å gradere på nytt senere)}}: alt dialogen trenger for å blande og gradere bildet på nytt. {{ui:Åpne en renderfil…}} henter det tilbake, med blandingen og graderingen, uten å rendre.

## Bland lysene etter renderingen

Slå på {{ui:Lysblanding (endre fargen og lysstyrken til hvert lys etter renderingen)}} før du trykker {{ui:Render}}. Når bildet er ferdig (eller stoppet), lister {{ui:Bland bildet}} lysene i grupper: himmelen, solen, og lampene etter navn (hver lampe med samme navn er én gruppe). Slå av en gruppe, gi den en farge, eller gjør den lysere eller mørkere, så endrer bildet seg med en gang, uten å rendre på nytt. {{ui:Lagre blanding}} beholder blandingen under et navn du kan velge igjen senere. {{ui:Som rendret}} går tilbake til bildet slik det ble laget. {{ui:Lagre}} lagrer det blandede bildet.

{{ui:Renderelementer (albedo, normaler, dybde, diffust, spekulært, transmisjon, emisjon, ID-er)}} beholder bildets deler også. {{ui:Vis}} bytter visningen til en av dem: overflatefargene (albedo), normalene, dybden, det diffuse, spekulære og transmitterte lyset (hvert direkte og indirekte), det som gløder og himmelen, og en farge per objekt eller per materiale for å lage masker.

Begge beholder ekstra lag på grafikkortet. Ved store størrelser kan grafikkortet mangle plass; dialogen sier fra om det, og en mindre størrelse fungerer.

## Renderkøen

Etter et oppsett i høy kvalitet holder {{ui:Legg dette bildet i køen}} under {{ui:Renderkø}} bildet slik det er satt nå. Videodialogens {{ui:Legg denne animasjonen i køen}} gjør det samme for en hel animasjon, path tracet bilde for bilde. {{ui:Start køen}} rendrer dem etter hverandre på denne datamaskinen, og {{ui:Lagre}} ved siden av hver ferdig en laster den ned. Lukker du siden, beholdes køen: åpner du den samme modellen, fortsetter den der den stoppet. Køen krever WebGPU.

## Tåke, røyk, støy og kaustikker

Disse ligger i {{ui:Tåke, røyk og støy}} og fungerer i {{ui:Høy kvalitet}} på grafikkortet. De andre motorene utelater dem.

- {{ui:Tåke og dis}} fyller luften opp til en høyde med en dis som solen, himmelen og lampene lyser opp. {{ui:Hvor langt du kan se, i meter}} angir hvor tykk den er (omtrent 100 m er et lett dis, 20 m en tykk tåke). {{ui:Tåkehøyde over bakken, i meter}} er hvor den slutter, og {{ui:Lysstråler}} er hvor mye disen gløder mot lyset. Sollys forlater tåken på toppen, så der sol kommer gjennom et vindu eller mellom bygninger, ser du det som lysstråler.
- {{ui:Røyk eller sky}} legger til ett volum med røyk eller sky som lyses som tåken. {{ui:Slag}} er en {{ui:Sky}}, en {{ui:Røyksøyle}} eller {{ui:Fra en volumfil (.ccvol)}}, CadCraft sitt eget rutenettformat. {{ui:Detalj}} og {{ui:Variasjon}} endrer en laget sky eller søyle. {{ui:Lengden på lengste side, i meter (0 = modellens størrelse)}}, {{ui:Flytt X (m)}}, {{ui:Flytt Y (m)}}, {{ui:Flytt Z (m)}} og {{ui:Drei}} plasserer den (den starter midt i modellen). {{ui:Tykkelse}} gjør den tettere, {{ui:Foroverglød}} gjør den lysere mot lyset, og {{ui:Farge}} farger den. En volumfil beholdes bare så lenge siden er åpen, som et himmelbilde.
- {{ui:Stopp tidlig der bildet er rent (adaptiv sampling)}} gir ikke flere samples til piksler som har satt seg, så resten av bildet blir ferdig tidligere. {{ui:Støy som godtas}} er hvor mye korn som er igjen når en piksel stopper. Linjen under bildet sier hvor mange samples en piksel fikk i snitt.
- {{ui:Kaustikker (lys brutt av glass eller kastet av speil)}} sporer lys fra lampene og solen, så den lyse flekken under en glasskule, eller et speils lys på en vegg, blir ren i stedet for kornete. Den er av når tåke, røyk, {{ui:Lysblanding (endre fargen og lysstyrken til hvert lys etter renderingen)}} eller renderelementer er på, og den er laget for bilder, ikke for 360°-bilder, animasjoner eller Render-arbeidsområdet.

## Hvor lang tid det tar

Bildet lages på din egen datamaskin, av grafikkortet; ingenting lastes opp. Hvor lang tid det tar, avhenger av kortet. Tiden øker med passene og pikslene: {{ui:Best}} har 16 ganger så mange pass som {{ui:Utkast}}, og et 4K-bilde har omtrent fire ganger så mange piksler som Full HD. En datamaskin uten grafikkort rendrer også, men saktere.

:::note
Hvis dialogen sier at nettleseren ikke kan rendre bilder, har nettleseren ikke WebGL 2. Oppdater den, eller slå på maskinvareakselerasjon i innstillingene.
:::
