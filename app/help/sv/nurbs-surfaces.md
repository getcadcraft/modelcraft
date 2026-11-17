---
title: Fria ytor (NURBS)
summary: Släta kurvor och ytor för produktskal, bilkarossier och båtskrov — loft, svep, kurvnätverk, lappar i fyra kanter, övergångar, trimningar — med G0-, G1- och G2-kontinuitet mätt på de exakta ytorna, solider med union, subtrahera och skär, zebra- och krökningsvyer, ytor anpassade till en skanning med felet mätt, samt STEP- och IGES-filer.
keywords: nurbs, skanning, omvänd konstruktion, anpassa, nät till yta, punktmoln, stl, trimma, trimmad, hål, skär, solid, solider, boolesk, union, subtrahera, skär, differens, sy, sluten, fri form, freeform, yta, ytor, b-spline, bspline, kurva, spline, loft, svep, skena, nätverk, coons, lapp, övergång, matcha, kontinuitet, g0, g1, g2, tangent, krökning, zebra, kontrollpunkter, knutar, grad, step, iges, klass A
from: 09887405
---

Panelen {{ui:Ytor}} gör släta kurvor och ytor av det slag som används för produktskal, bilkarossier och båtskrov: NURBS, samma matematik som andra ytmodelleringsprogram använder. Allt mäts på de exakta ytorna, aldrig på trianglarna du ser. Storlekar i panelen anges i **millimeter**, oavsett vilken enhet modellen visar.

Öppna den från den högra panelen: {{ui:Ytor}} › {{ui:Öppna panelen Ytor}}. En modell som redan har ytor öppnar den av sig själv.

## Så fungerar ett kommando

1. Tryck på ett kommando (till exempel **Loft**). Panelen säger vad den fortfarande behöver: punkter, kurvor, en ytkant eller ett kurvslut.
2. Välj dem: klicka på dem i 3D-vyn, eller tryck på **Välj** (eller kant- och slutknapparna) bredvid varje i listan. För en kant, klicka nära den kanten på ytan.
3. Kontrollera alternativen (grad, tolerans, kontinuitet, …) och tryck på **Skapa**.

Kurvor från punkter tar de punkter som skrivits in, en per rad (`x, y, z` i mm), eller **Välj punkter i vyn**: varje klick använder samma fångst som ritverktygen; tryck på <kbd>Enter</kbd> eller dubbelklicka för att avsluta, <kbd>Esc</kbd> för att stoppa.

## Kurvor

- **Kurva genom punkter** går genom varje punkt. **Kurva med kontrollpunkter** följer i stället ett nät av punkter.
- **Infoga knut**, **Höj grad** och **Sänk grad** ändrar hur en kurva beskrivs utan att flytta den (sänkning nekas när kurvan skulle flyttas mer än toleransen). **Bygg om kurva** ger den ett nytt antal kontrollpunkter och säger hur långt den flyttades.
- **Matcha kurva** får ena kurvans ände att mötas med en annan med G0 (vidrör), G1 (samma riktning) eller G2 (även samma krökning). **Övergångskurva** lägger till en ny kurva mellan två ändar.
- **Foga ihop kurvor** och **Dela kurva**.

## Ytor

- **Loft** genom två eller fler kurvor, **Regelyta** mellan två, **Extrudera kurva**, **Revolvera kurva**.
- **Svep längs en skena** bär en profil längs en bana utan att vrida den; **Svep längs två skenor** håller profilens ändar på båda skenorna. Svep är anpassade: statusraden säger hur nära de höll sig till det sanna svepet.
- **Yta från ett kurvnätverk** går genom ett rutnät av kurvor (de första valen är profilerna, resten är guider). **Lapp från fyra kanter** fyller fyra kurvor som möts i sina hörn.
- **Matcha yta** får en ytkant att mötas med en granne med G0, G1 eller G2; **Övergångsyta** lägger till en yta mellan två kanter.
- **Förskjut yta**, **Förläng yta** (ytan fortsätter som den gick), **Bygg om yta**, samt knutar och grad för ytor.

## Kontrollera kvaliteten

Tabellen **Delade kanter** listar varje kant som två ytor delar, med gapet (mm), vinkeln mellan dem (°) och krökningshoppet (1/mm), och om det gör den till G0, G1 eller G2. En kant som är sämre än du bad om finns också under **{{ui:Problem}}** (⚠-knappen i appfältet) med en åtgärd **Matcha**.

**Visa som** › **Zebrastrimmor** och **Krökning (Gauss)** kommer från den exakta ytan: strimmor som går obrutna över en kant betyder G1; strimmor som dessutom behåller sin bredd betyder G2. Krökning är blå där ytan är en sadel, röd där den är en kupol och vit där den är plan. **Kontrollpunkter** ritar kontrollnäten.

G0–G2 mäts i 33 punkter per kant. **G3 och "klass A"-kvalitet mäts inte** och påstås inte heller.

## Trimma en yta

Gruppen **Trimma** skär en yta utan att ändra dess form: ytan behåller alla sina kontrollpunkter, och bara den del som ligger innanför konturen visas, räknas och skrivs. **Trimma till en rektangel** och **Trimma med en cirkel** arbetar på en andel (0 till 1) av ytan i varje riktning, så de behöver inget val i vyn; **Trimma med en kurva** tar en sluten kurva som ligger på ytan (den projiceras in i ytan, och nekas med ord när den är öppen eller mer än toleransen bort). Bocka i **Skär ett hål** för att ta bort insidan av konturen; lämna den avbockad för att behålla bara insidan. En yta kan ha en behållen kontur och valfritt antal hål; en kontur som korsar en annan nekas. **Ta bort trimningen** visar hela ytan igen. Snittkanterna följer konturen exakt; panelens {{ui:Ångra}} tar tillbaka en trimning som vilket annat steg som helst.

STEP bär trimningen som ytans gränser och IGES som en trimmad yta (entitet 144); båda läser tillbaka den.

## Solider och booleska operationer

Gruppen **{{ui:Solider}}** gör ytor till slutna kroppar och kombinerar dem. En solid här är en uppsättning av panelens egna ytor som tillsammans sluter en volym; dess ytor förblir exakta NURBS-ytor med sina trimningar.

- **Lådsolid**, **Cylindersolid** och **Sfärsolid** gör en av angivna mått (i mm): en låda med sex plana ytor, en cylinder med en rund sida och två plana ändar trimmade till cirkeln, en sfär av en roterad yta.
- **Solid från ytor** grupperar ytor du själv gjort. Välj dem, eller ingen för att använda alla visade ytor som ännu inte är i en solid. De sys ihop inom toleransen: om de inte sluter sig ändras inget och panelen säger hur många kanter som förblir öppna och hur nära de måste mötas.
- **{{ui:Union}}**, **Subtrahera** (den andra solidet tas bort från det första) och **Skär** (bara det som båda har gemensamt) tar två solider: klicka på en yta av vardera i vyn, eller tryck på **Välj** i listan **{{ui:Solider}}**. Bocka i **Behåll båda solider** för att lämna dem bredvid resultatet.

En boolesk operation behåller varje yta på sin exakta yta och skär den med nya trimkonturer längs skärningen. Resultatraden ger de uppmätta siffrorna: hur långt solidmotorns punkter behövde flyttas för att ligga på de exakta ytorna (aldrig mer än toleransen), hur nära skärningspunkterna ligger båda ytorna (vanligen några miljondelar av en millimeter), volymen, och om de nya ytorna sluter sig igen när de sys om från sina exakta ytor. Volymer mäts på trianglar inom toleransen (0.05 mm om du inte anger en annan), så en sfärs eller cylinders volym blir något under den exakta: en mindre tolerans kommer närmare. En boolesk operation som inte kan göras rent (solider delar ingenting, en kontur skulle korsa sig själv) nekas med ord och ändrar ingenting. En boolesk operation är ett steg i panelens {{ui:Ångra}}.

I listan **{{ui:Solider}}** behåller **Ta isär** ytorna som vanliga ytor; papperskorgen tar bort solidet och dess ytor.

**{{ui:Lägg till i modellen}}** (i listan **{{ui:Solider}}**) lägger en kopia av solidet i modellen som en enda sluten grupp, med dess ytor som trianglar inom 0.05 mm, i ett steg i modellens Ångra. Den fungerar sedan med modellens egna {{ui:Union}}, Subtrahera och Skär, dra-och-skjut och kontrollen för 3D-utskrift; den exakta solidet stannar i panelen.

## Rundningar och förtjockning

**Rundning mellan ytor** rundar kanten där två ytor av en solid möts: välj de två ytorna (i vyn, eller med **Välj** i listan), skriv in **radien** och, för en radie som ändras längs kanten, **radien vid slutet** (0 behåller en radie). En kula med den radien rullas längs kanten och tar på båda ytorna; rundningen är den exakta cirkelbågen den lämnar i varje punkt, sammanfogad till en yta, och de två ytorna trimmas där kulan tar på dem. En yttre kant förlorar material, ett innerhörn får det. Resultatraden anger vad som uppmättes: hur långt rundningsytan ligger från den rullande kulan mellan punkterna den byggdes från (punkter läggs till tills den ligger inom en fjärdedel av toleransen), den största vinkeln mellan rundningen och varje yta längs beröringslinjerna, och samma siffror som en union. En radie som inte passar (kulan skulle lämna en yta, eller en yta kurvar tätare än radien) nekas, med den yta som namnges; ingenting ändras.

**Runda flera kanter** rundar många kanter i ett steg: välj de två ytorna för första kanten, sedan de två ytorna för nästa, och så vidare (en yta kan ingå i flera par, till exempel översta ytan på en låda i fyra av dem); alla kanter får den radie du skriver. Varje rundning beräknas på solidet som det var, och sedan skärs de en efter en, så ordningen spelar ingen roll. Där två rundade kanter möts i ett hörn vars övriga kanter förblir skarpa, går de två rundningarna in i varandra längs deras skärningskurva (en veck). Där tre rundade yttre kanter från tre plana ytor som står i rät vinkel mot varandra möts med en radie, blir hörnet en **sfärlapp** som tangerar alla tre rundningarna (avmarkera **Hörn** för att få det vikta hörnet i stället); en kant måste vara minst dubbelt så lång som radien där båda dess ändar är sådana hörn. Resultatraden säger hur många kanter som rundades och hur hörnen blev. Inre kanter kan också rundas tillsammans, men ett resultat som inte sluter sig igen rapporteras bara (raden säger det), så kontrollera det.

**Förtjockna till en solid** ger en yta en tjocklek: välj den, skriv in **tjockleken**, och bocka i **Andra sidan** för att växa den åt andra hållet. Förskjutningsytan anpassas till ytan och mäts mot den (resultatraden anger största skillnaden från tjockleken); väggar följer varje kant och varje trimkontur. Om ytan kurvar tätare än tjockleken på den sidan, eller någon annan del av den ligger närmare än tjockleken, nekas det, med ytan och platsen namngivna, och ingenting ändras.

## Ångra, filen, STEP och IGES

Panelen har en egen {{ui:Ångra}} och {{ui:Gör om}} (ett steg per kommando). Ytorna sparas i `.modelcraft`-filen tillsammans med modellen; de ingår inte i modellens egna ångra, precis som filens material inte gör det.

**STEP…** (AP242) och **IGES…** sparar kurvorna och ytorna precis som de är (B-spline-kurvor och ytor, inget omvandlas till trianglar). Varje yta är en egen yta med sin trimning; en solid skrivs som ett enda slutet skal, med varje kant delad av sina två ytor, som andra CAD-program väntar sig (statusraden anger hur många solider som gick ut på det sättet). I IGES skrivs samma solid som en enda manifold solid B-rep (entitet 186 över slutet skal 514, ytor 510, slingor 508, en kantlista 504 och en hörnlista 502); en solid vars ytor inte parar ihop sig kant för kant skrivs som separata ytor, och raden säger det. **Importera…** läser en sådan solid tillbaka som en solid, från STEP och från IGES. Den läser kurvor och ytor skrivna på det sättet, samt `.ccnurbs`-lappuppsättningar; andra programs STEP-solider öppnas med {{ui:Fil}} › Importera som nät.

## Ytor från en skanning (omvänd konstruktion)

Markera det skannade nätet i modellen (inget markerat betyder allt som visas), öppna {{ui:Ytor}} och välj **Anpassa ytor till skanningen** i gruppen **Skanning**. Verktyget letar efter **plan**, **cylindrar**, **sfärer** och **koner** (de exakta ytor en bearbetad del består av; varje rad visar radien eller halva vinkeln den hittade), hittar **rundningar** (avrundade kanter och hörn: en liten cylinder eller sfär som tangerar två eller fler andra ytor, visad med sin radie och de ytor den förbinder), **ringrundningar** (en torus: den avrundade kanten där en plan yta möter en cylinder eller kon, visad med sin radie och sin ringradie) och **variabla rundningar** (en avrundad kant vars radie ändras längs den, visad med radien vid varje ände), anpassar **en fri lapp** till en slät, lite krökt del, och skär varje yta till konturen av den del av skanningen den kom från, så att hål och hörn bevaras. Alternativ: **toleransen** (hur långt, i mm, en skanningspunkt får ligga från ett plan eller en cylinder och ändå höra till den, och målet för en fri lapp), **minsta delen** (en andel av ytarean) och **flest ytor**. Samma skanning och samma alternativ ger alltid samma ytor.

Resultatet är en tabell, en rad per yta: dess typ, hur många trianglar den kom från, och felet **mätt från skanningen till ytan** (rms, det största, och andelen punkter inom toleransen). De mätta punkterna är skanningens hörn och mitten av varje triangel. Felet mäts inte åt andra hållet (från yta till skanning), så en yta som sträcker sig utanför skanningen skulle inte synas. Noten under tabellen säger också hur stor del av arean som var för liten för att anpassas. I vyn färgas skanningspunkterna efter deras **avvikelsekarta**: blå på ytan, grön halvvägs till toleransen, röd vid toleransen eller mer (avmarkera **Visa avvikelsekartan** för att dölja den). Delar som viker tillbaka på sig själva (ett slutet rör anpassat med fria lappar, till exempel) listas som inte anpassade, och tvingas aldrig in i en enda yta.

**Sy ihop ytorna till en solid** syr ihop varje visad yta som inte finns i en solid till en enda sluten solid. Skanningsytor möts bara inom skanningens egna fel, så det prövar det minsta sammanfogningsavståndet som sluter sig (aldrig mer än det **syavstånd** du angett) och nekar med ord när ytorna inte sluter sig. Det fyller aldrig ett gap. En låda med avrundade kanter syr ihop när dess rundningar hittats som egna ytor; sammanfogningsavståndet som slöt sig anges i resultatet. Solidet fungerar sedan med Union, Subtrahera, Skär och **Lägg till i modellen**.

Vad den inte gör: en **ringrundning** (en torus) letas bara runt axeln för en cylinder eller kon som redan hittats, och en **variabel rundning** bara längs en ganska rak kant (dess sektioner skärs vinkelrätt mot en riktning); annars blir de fria lappar när de är tillräckligt släta och utelämnas annars. Sfärer, koner och rundningar hittas med slumpmässig sampling, så en mycket liten (några trianglar) kan missas. Avvikelsekartan visar avståndet från skanningen till ytorna, inte åt andra hållet. Mycket stora skanningar (över 300 000 trianglar) nekas här. Ytor av en cylinder med full varv skärs runt hål, med sömmen placerad där inget hål finns. Kontrollera varje yta mot din skanning innan du litar på den.

## Finns inte ännu

Att runda kanter som möts i ett hörn på krökta ytor eller med olika radier (en hörnblandning), en rundning mellan ytor som inte möts, en inre rundning som slutar på en lutande eller krökt yta, och booleska operationer och rundningar beräknade direkt på ytorna utan trianglar (här arbetar solidmotorn på trianglar inom toleransen, och varje punkt sätts sedan tillbaka på de exakta ytorna).
