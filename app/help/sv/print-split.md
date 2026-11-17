---
title: Dela en stor modell för utskrift
summary: Skär en modell som är för stor för din skrivare i delar som får plats på bädden, med tappar, nycklar, svalstjärtar, dymlingshål eller magnethål och fogens nummer på båda sidor, och ladda ner varje del och ett monteringsblad i en zip-fil.
keywords: 3d-utskrift, dela, snedskärning, vinklat snitt, snett snitt, delare, skär, för stor, bäddstorlek, byggvolym, delar, kopplingar, tappar, nycklar, svalstjärt, dymling, magnet, spel, tolerans, delnummer, montering, sprängvy, zip, stl, 3mf, licens, usb-nyckel, dongel
from: ee96ba77
---

När en modell är större än skrivarens bädd delar **Dela för utskrift** upp den i delar som får plats, lägger till kopplingar så att delarna passar ihop när du sätter ihop dem, och graverar samma nummer på båda sidor av varje fog. Öppna {{ui:Exportera}} › {{ui:Kontrollera för 3D-utskrift (STL eller 3MF)…}}; dialogrutans rad **Utskriftsverktyg** har {{ui:Dela för utskrift}}. Det öppnas som ett kort över vyn.

Det fungerar på det som skrivs ut: markeringen, eller allt som visas när inget är markerat. Det som skrivs ut måste vara en sluten solid; om kontrollen hittar hål, använd först [Reparera](topic:print-tools#repair).

Det körs i ModelCraft, på din dator: ingen licensserver, ingen USB-nyckel, inget laddas upp.

## Så skärs det

- **Passa bädden, minsta antal delar**: ange bäddens bredd, djup och höjd (de hämtas från {{ui:Inställningar}} › ModelCraft › 3D-skrivare). Kortet visar hur många delar det blir och hur stor var och en är; modellen delas i lika stora delar, så få som får plats. En del kan ligga på sidan i filerna om det är det som gör att den passar. Kopplingar som sticker ut från en del räknas med i dess storlek.
- **Vid platser jag anger**: välj axeln att skära över och skriv var, i millimeter från modellens låga ände, med kommatecken emellan (`100, 200` ger tre delar).
  **Snedställ** vrider snitten med upp till 60° kring en av de två andra axlarna (ett snitt över Z snedställt kring X, till exempel): varje snedställt snitt går genom modellens mittlinje på sin plats, ger delarna mer limyta och döljer fogen bättre på en sluttande yta. Kopplingar står vinkelrätt mot snittet.

Snittplanen ritas runt modellen som streckade linjer medan kortet är öppet.

## Kopplingar

Varje ställe där två delar möts får kopplingar, placerade där det finns mest utrymme: minst **minsta vägg** plus **spelet** plus deras egen storlek från utsidan, och tillräckligt långt från varje annat snitt så att två hål aldrig möts. På en lång yta sprids två kopplingar längs den, så att delarna inte kan vridas.

- **Runda tappar**: en tapp på ena delen (avfasad i spetsen), ett hål på den andra.
- **Fyrkantiga nycklar**: samma sak, kvadratiska, så att en del bara kan sitta på ett sätt.
- **Svalstjärtar**: en tunga som glider in i ett spår från sidan. Där ena änden av spåret skulle möta ett annat snitt stannar svalstjärten innan och glider in från den öppna änden. Svalstjärtar passar snitt i en riktning (en rad skivor); i ett rutnät, använd tappar eller dymlingar.
- **Dymlingshål**: ett hål på varje sida; pinnarna skrivs också ut (i zip-filen).
- **Magnetfickor**: en ficka på varje sida för en rund magnet med den diameter och tjocklek du anger. Kontrollera polerna innan du limmar fast dem.
- **Ingen (lim)**.

**Spelet** är glappet på varje sida mellan en tapp och dess hål (0,2 mm att börja med). Det stämmer med det tal du anger: runda hål görs något större så att deras plana sidor, inte hörnen, behåller det glappet. Höj det om din skrivares delar kommer ut för trånga.

När en fog saknar utrymme för en koppling (en tunn vägg, ett litet kontaktområde) säger kortet det: limma den fogen.

## Delnummer

Med **Gravera fognumren på båda sidor** på får varje fog numret för sina två delar, till exempel `3-4`, graverat 0,6 mm djupt på båda sidor och läsbart åt rätt håll på var och en. Numren startar 5 mm höga och blir mindre för att få plats, ner till 2,5 mm; en fog utan plats för sitt nummer listas. Delarna numreras från det nedersta lagret och uppåt.

## Förhandsgranska, ladda ner, dela modellen

1. {{ui:Preview}} delar modellen och visar hur många delar, fogar och kopplingar det finns, om varje del klarar 3D-utskriftskontrollen och får plats på bädden, och listar varje dels storlek. En ring markerar varje koppling och nummer i vyn.
2. {{ui:Download the pieces (.zip)}} sparar en zip-fil: en fil per del (STL eller 3MF, enligt ditt val under **Filer**), var och en stående på bädden; dymlingspinnarna; och **monteringsbladet** — en bild av delarna isärdragna med sina nummer (`assembly.svg` och `assembly.png`) och en lista över delarna och fogarna (`assembly.txt`).
3. {{ui:Split the model}} lägger delarna i modellen i stället för de markerade grupperna eller komponenterna, namngivna som på monteringsbladet, i ett steg: {{ui:Undo}} lägger tillbaka originalet. Det krävs att grupperna eller komponenterna som ska delas är markerade; nedladdningen fungerar på allt som skrivs ut.

## Flytta kopplingarna själv

Efter en förhandsvisning låter **Kopplingar för hand** dig rätta var kopplingarna sitter:

- {{ui:Move one}}: klicka på en röd ring i vyn (den blir grön), klicka sedan där den ska sitta på snittet.
- {{ui:Add one}}: klicka i vyn där en koppling ska sitta. Den hamnar på snittplanet som ditt klick når, mellan de två delarna där.
- {{ui:Remove one}}: klicka på en röd ring för att ta bort den kopplingen.

Varje ändring kontrolleras igen som de automatiska: en plats för nära konturen, ett annat snitt eller en annan koppling görs inte, och kortet säger det. {{ui:Automatic again}} glömmer dina platser. De behålls så länge modellen, markeringen och snitten är oförändrade.

En förhandsvisning finns kvar tills modellen, markeringen eller en inställning ändras; då ber kortet dig förhandsgranska igen.

:::note
Varje del kontrolleras som 3D-utskriftskontrollen skulle kontrollera den innan du laddar ner. Din slicer avgör ändå hur varje del skrivs ut: titta på var och en där, och skriv ut en fog först för att se hur din skrivare hanterar spelet.
:::
