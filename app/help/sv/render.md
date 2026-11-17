---
title: Rendera en bild av modellen
summary: Gör en bild som ser ut som dagsljus: himmel, sol från modellens plats och datum, mjuka skuggor, glas- och metallutseenden, och spara den sedan som PNG.
keywords: rendera, förinställning, förinställningar, scenförinställning, interiör, exteriör, sektionsvy, natt, ett klick, rendering, path tracing, path traced, ray tracing, global illumination, reflektioner, refraktion, hög kvalitet, foto, fotorealistisk, realistisk, bild, png, stillbild, himmel, sol, dagsljus, skuggor, mjuka skuggor, ambient occlusion, glas, metall, blank, material, exponering, ljusstyrka, mulet, skymning, studio, presentation, dimma, dis, rök, moln, volym, ljusstrålar, gudastrålar, kaustik, adaptiv sampling, brus
from: 517ba4d3
---

{{ui:Rendera en bild…}} gör en bild av vyn som ser ut som dagsljus snarare än en ritning: en himmel, solen där modellens plats och datum placerar den, mjuka skuggor, ljus från hela himlen som mörkar hörn och springor, och färger som kan se ut som glas, metall eller blank färg. Modellen ändras inte.

## Rendera vyn

1. Ställ in vyn som du vill ha bilden: kretsa, zooma, välj en [scen](topic:scenes), dölj det som inte ska synas. Bilden använder vyns egen kamera.
2. Klicka på {{ui:Exportera}} i gruppen {{ui:Fil}} och sedan på {{ui:Rendera en bild…}}.
3. Välj en {{ui:Scen}} om den som är nedtryckt inte är den du vill ha (se [Scenförinställningar](topic:render#scene-presets-a-good-picture-in-one-click)), välj {{ui:Storlek}} och klicka sedan på {{ui:Rendera}}.

   Bilden fylls i medan den renderas och blir jämnare för varje pass. {{ui:Stopp}} (eller {{key:Esc}}) avslutar i förtid och behåller bilden så långt den har kommit.

4. Klicka på {{ui:Spara}} för att ladda ner den (en PNG om inte {{ui:Spara som}} säger något annat).

:::tip
Börja med {{ui:Utkast}} i {{ui:Vyns storlek}} för att kontrollera kameran och utseendet, rendera sedan {{ui:Bra}} eller {{ui:Bäst}} i större storlek för den slutliga bilden.
:::

## Scenförinställningar: en bra bild med ett klick

Överst i dialogen finns fyra {{ui:Scen}}-knappar. Varje knapp anger himlen, ljusstyrkan, marken, kantlinjerna, kvaliteten och solen med ett klick, så det finns inget att lära sig innan den första bilden. Klicka på en och sedan på {{ui:Rendera}}.

| Scen | Vad den anger | Används för |
|---|---|---|
| {{ui:Exteriör}} | Klar himmel, modellens egna sol, mark på | Byggnaden utifrån |
| {{ui:Interiör}} | Mulen himmel (jämnt ljus, inga hårda solfläckar), ett halvt bländarsteg ljusare | En vy inifrån ett rum |
| {{ui:Snittvy}} | Vit studio, ingen mark, kantlinjer i den snabba renderingen | En modell skuren av en sektion |
| {{ui:Natt}} | Solen under horisonten (midnatt mitt på vintern för platsens halva av jorden), ett bländarsteg ljusare | Lampor som lyser upp modellen. Utan lampor blir bilden mörk |

- {{ui:Välj för den här vyn}} väljer åt dig: {{ui:Snittvy}} när ett sektionssnitt är på, {{ui:Interiör}} när kameran är inne i modellen, annars {{ui:Exteriör}}. Första gången du öppnar dialogen börjar den så av sig själv.
- Alla inställningar nedan finns kvar och kan ändras. När du ändrar en inställning som scenen anger är ingen knapp nedtryckt längre, och raden under knapparna säger att inställningarna är dina egna. Klicka på scenen igen för att återställa dess värden.
- En scen rör inte motorn, läget, storleken, materialen, kameran eller lamporna.

:::note
Scenerna ger samma värden i ModelCraft och BimCraft. Hur den färdiga bilden ser ut beror på din modell och ditt grafikkort.
:::

## Inställningar

| Inställning | Vad den gör |
|---|---|
| {{ui:Storlek}} | Vyns storlek, dubbelt vyns storlek, Full HD, 4K eller en kvadrat. Fasta storlekar behåller vyns kamera och visar mer eller mindre på sidorna |
| {{ui:Läge}} | {{ui:Snabbt}}, eller {{ui:Hög kvalitet (path tracing)}} (nedan) med sin {{ui:Tidsgräns}} |
| {{ui:Kvalitet}} | Hur många pass (eller, i hög kvalitet, sampel) som medelvärdesbildas: {{ui:Utkast}} 16, {{ui:Bra}} 64, {{ui:Bäst}} 256. Fler pass ger jämnare skuggor och kanter och tar längre tid |
| {{ui:Himmelsblå}} | {{ui:Klar himmel}}, {{ui:Mulet}} (mjukt ljus, svaga skuggor), {{ui:Skymning}} (lågt, varmt ljus) eller {{ui:Vit studio}} (en enkel vit bakgrund) |
| {{ui:Sol}} | Solen kommer från datum, tid och plats i {{ui:Stil}} › sol. Markera {{ui:Använd ett annat datum och en annan tid för den här bilden}} för att prova en annan tid utan att ändra modellens stil |
| {{ui:Ljusstyrka}} | Ljusare eller mörkare, i steg (bländarsteg) |
| {{ui:Mark under modellen}} | En mark som tar emot skuggorna och tonar ut mot horisonten. Stäng av den för en modell som svävar |
| {{ui:Rita kanter}} | Ritar modellens kanter tunt över bilden, för ett ritat utseende |

När solen är under horisonten vid vald tid är det natt: himlen blir mörk och modellens [lampor](topic:lights) lyser upp den. Dialogen säger det.

Inställningarna sparas i `.modelcraft`-filen, så nästa bild av samma modell börjar där du slutade.

## Få färger att se ut som glas eller metall

Under {{ui:Material}} har varje färg på skärmen ett utseende: {{ui:Matt}}, {{ui:Satin}}, {{ui:Blank}}, {{ui:Metall}}, {{ui:Polerad metall}}, {{ui:Glas}} eller {{ui:Frostat glas}}. {{ui:Omålade ytor}} är ytorna som inte har någon egen färg.

För att göra fönster till glas, [måla](topic:paint) fönsterrutorna i en färg och ställ sedan den färgen på {{ui:Glas}}. Glas släpper igenom himlen och det som finns bakom, färgat av sin färg, och speglar himlen.

:::note
I {{ui:Snabbt}}-läget speglar glas och metall himlen, inte resten av modellen, och ljuset böjs inte genom glas. Läget {{ui:Hög kvalitet (path tracing)}} nedan gör båda.
:::

## Hög kvalitet

Välj {{ui:Läge}} › {{ui:Hög kvalitet (path tracing)}} för en bild som följer ljuset så som en kamera ser det:

- ljus studsar mellan ytor, så ett rum som lyses genom ett fönster, eller av en lampa, blir upplyst runtom och färger flyter över till grannarna;
- glas är riktigt glas: ljuset böjs genom det och det speglar modellen;
- metall och polerade ytor speglar resten av modellen;
- ljuspaneler lyser som paneler, med mjuka skuggor.

Det är mycket långsammare än {{ui:Snabbt}}: varje pass spårar ljuset för varje bildpunkt igen. Bilden börjar brusig och klarnar när sampel adderas, så börja smått ({{ui:Vyns storlek}}, {{ui:Utkast}}) och välj en {{ui:Tidsgräns}}: när den tar slut behålls bilden så långt den har kommit. {{ui:Stopp}} behåller den också. Det första passet väntar medan webbläsaren förbereder path tracern.

Där webbläsaren har WebGPU är path tracern CadCraft:s egen och körs på grafikkortet; raden under bilden säger {{ui:Path traced på grafikkortet (WebGPU)}}. Efter {{ui:Stopp}} eller tidsgränsen fortsätter {{ui:Återuppta}} med samma bild tills den har alla sina sampel; att ändra en inställning eller trycka på {{ui:Rendera}} igen börjar om. Utan WebGPU path traceas bilden i stället med WebGL (raden säger det) och {{ui:Återuppta}} erbjuds inte.

:::linux
Firefox och de flesta Chrome-installationer på Linux har ännu inget WebGPU, så hög kvalitet använder WebGL där.
:::

I det här läget ritas inga kanter, bibliotekstexturer visar sin färg och skrovlighet men inte sina bucklor ([material gjort med noder](topic:shading#in-high-quality-pictures) visar sin normal och sina bucklor), och ett sektionssnitt görs på modellen innan bilden startar.

{{ui:Ta bort brus (rensar kornigheten som blir kvar efter sampeln)}} är på som standard: när bilden är klar, eller stoppad, rensas den kornighet som finns kvar av ett neuralt nätverk som gjorts för detta (Intel Open Image Denoises publicerade nätverk, som körs på din egen dator: på grafikkortet, annars på processorn). En bild med få sampel blir ren; {{ui:Visa}} › {{ui:Bilden före brusborttagning}} visar den som den renderades.

## Rendera i vyn

Arbetsytan {{ui:Rendera}} kör path tracern i själva vyn: kretsa, redigera modellen eller ändra en lampa, så startar den om direkt. {{ui:Område}}: dra en rektangel så renderas bara den; {{ui:Hela vyn}} går tillbaka. {{ui:Fokus}}: klicka på det som ska vara skarpt, så fokuserar skärpedjupet dit. {{ui:Detalj}} anger hur många av vyns bildpunkter som renderas (färre är snabbare). {{ui:Paus}} stannar och fortsätter. Det kräver WebGPU: utan det säger arbetsytan det, och {{ui:Exportera}} › {{ui:Rendera en bild…}} fungerar fortfarande.

## Himlar och ljusprofiler på grafikkortet

Med WebGPU har hög kvalitet två himlar till:

- {{ui:Fysikalisk himmel}} räknar ut dagsljuset från solens höjd: en djup blå himmel överhead, ett blekt band vid horisonten, och en sol som blir varmare och svagare när den står lågt. {{ui:Dis}} går från en mycket klar dag (2) till en disig dag (10).
- {{ui:Himmelsbild (HDRI)}} lyser upp modellen med en panoramabild av en verklig plats. {{ui:Välj en bild…}} tar en equirectangular `.hdr`- eller `.exr`-fil; {{ui:Vrid}} vrider den runt modellen och {{ui:Bildens ljusstyrka}} gör den ljusare eller mörkare. Bilden har sin egen sol, så modellens sol läggs inte till. Den finns kvar bara medan sidan är öppen: efter att du öppnat den igen, välj den på nytt.

Varje lampa i listan {{ui:Lampor}} kan ta en tillverkares ljusprofil: {{ui:IES-profil…}} läser en IES-fil (LM-63), och lampan sprider då sitt ljus som armaturen gör (en smal downlight, en väggtvätt). Varje lampa med det namnet använder den, och lampan behåller sin egen ljusstyrka. Klicka på profilens namn för att sluta använda den.

Fönster av klart glas hjälper himlens ljus att hitta in i ett rum, så inomhusbilder under en himmel klarnar snabbare.

{{ui:Snabbt}}-läget och WebGL-path tracern visar {{ui:Fysikalisk himmel}} och {{ui:Himmelsbild (HDRI)}} som en klar himmel och ignorerar ljusprofiler.

## Kameran

{{ui:Kamera}} ställer in bilden som ett fotografi:

- {{ui:Exponering}}: behåll {{ui:Ljusstyrkereglage}}, eller välj {{ui:Kamerainställningar}} och ange {{ui:Bländare (f-tal)}}, {{ui:Slutartid}} och {{ui:ISO}} som på en kamera; EV-värdet bredvid dem är det vanliga exponeringsvärdet. f/16 vid 1/100 s och ISO 100 motsvarar en solig dag; en mörkare scen vill ha en vidare bländare, en långsammare slutare eller ett högre ISO. Detta fungerar i alla lägen.
- {{ui:Skärpedjup}} suddar det som är närmare eller längre bort än {{ui:Fokusavstånd (m)}}, så som en lins med den bländaren skulle göra (lämna tomt för att fokusera på det som finns i mitten av vyn). {{ui:Bländarform}} ger ur-fokus-highlights en rund eller bladad form.
- {{ui:Tvåpunktsperspektiv (lodräta linjer förblir lodräta)}} jämnar ut kameran och förskjuter bilden, som en arkitektonisk tilt-shift-lins gör, så att väggarna inte lutar när du tittar upp eller ner mot en byggnad.
- {{ui:Vitbalans}} anger vilken ljusfärg som visas som vitt: lägre (till exempel 3000 K) för varmt lampljus, högre för skugga och mulna dagar.
- {{ui:Projektion}}: {{ui:360°-panorama}} gör en 2:1-bild av allt runt kameran för panoramavisare; {{ui:360° stereopanorama}} staplar en vänsterögon- och en högerögonpanorama för headset; {{ui:Kubkarta (6 sidor)}} gör sex kvadratiska vyer i ett rutnät om 3 × 2. Bredden kommer från {{ui:Storlek}}.

Projektion, skärpedjup, tvåpunktsperspektiv och vitbalans behöver path tracern på grafikkortet (WebGPU), så de visas bara i {{ui:Hög kvalitet}}.

## Slutför bilden

{{ui:Bild}} gradera den högkvalitativa bilden som ett fotografi, och varje reglage ändrar den färdiga bilden direkt, utan att rendera igen:

- {{ui:Utseende (vytransform)}}: {{ui:ACES filmic}} (bilden som förut), {{ui:AgX}} (mjukare, behåller färg i mycket starkt ljus), {{ui:Filmic}} (en mild filmkurva) eller {{ui:Standard}} (enkelt; starkt ljus klipps till vitt).
- {{ui:Kontrast}} och {{ui:Högdagerkomprimering}} (ger tillbaka detaljer i mycket ljusa delar).
- {{ui:Bloom}} (en mjuk glöd runt starkt ljus), {{ui:Bländning}} med sina {{ui:Bländningsstrimmor}} (stjärnstrålar från de ljusaste punkterna) och {{ui:Vinjettering}} (mörkare hörn).
- {{ui:Färgtabell (.cube)…}} tillämpar en färggradering från en `.cube`-fil, med sin {{ui:Färgtabellens styrka}}; liksom en himmelsbild finns den kvar bara medan sidan är öppen.

## Spara bilden

{{ui:Spara som}} bredvid {{ui:Spara}} väljer filen: {{ui:PNG}}, {{ui:JPEG}} eller {{ui:WebP}} för delning (JPEG och WebP bara där webbläsaren kan skriva dem), och efter en rendering i hög kvalitet på grafikkortet även:

- {{ui:PNG, 16 bitar}}: den graderade bilden med finare steg mellan nyanserna, för utskrift eller vidare redigering.
- {{ui:EXR, alla lager (32-bitars flyttal)}}: bilden som den renderades (linjärt ljus, ingen gradering) med varje renderingselement och ljusgrupp som ett eget lager, för kompositeringsprogram.
- {{ui:Renderingsfil (.ccrender, för att gradera igen senare)}}: allt dialogen behöver för att blanda och gradera bilden igen. {{ui:Öppna en renderingsfil…}} hämtar tillbaka den, med sin blandning och sin gradering, utan att rendera.

## Blanda ljusen efter renderingen

Slå på {{ui:Ljusblandning (ändra varje ljus färg och ljusstyrka efter renderingen)}} innan du trycker på {{ui:Rendera}}. När bilden är klar (eller stoppad) listar {{ui:Blanda bilden}} dess ljus i grupper: himlen, solen och lamporna efter namn (varje lampa med samma namn är en grupp). Stäng av en grupp, ge den en färg eller gör den ljusare eller mörkare, så ändras bilden direkt, utan att renderas igen. {{ui:Spara blandning}} behåller blandningen under ett namn att välja igen senare; {{ui:Som renderad}} går tillbaka till bilden som den gjordes. {{ui:Spara}} sparar den blandade bilden.

{{ui:Renderingselement (albedo, normaler, djup, diffust, spekulärt, transmission, emission, ID)}} behåller bildens delar också. {{ui:Visa}} växlar vyn till en av dem: ytfärgerna (albedo), normalerna, djupet, det diffusa, spekulära och transmitterade ljuset (vart och ett direkt och indirekt), vad som glöder och himlen, och en färg per objekt eller per material för att göra masker.

Båda håller extra lager på grafikkortet. Vid stora storlekar kan ett grafikkort sakna plats; dialogen säger det och en mindre storlek fungerar.

## Renderingskön

Efter en uppsättning i hög kvalitet håller {{ui:Lägg till den här bilden i kön}} under {{ui:Renderingskö}} bilden som den är inställd nu. Videodialogens {{ui:Lägg till den här animeringen i kön}} gör detsamma för en hel animering, path traced bildruta för bildruta. {{ui:Starta kön}} renderar dem en efter en på den här datorn, och {{ui:Spara}} bredvid varje färdig ladda ner den. Om du stänger sidan finns kön kvar: öppna samma modell så fortsätter den där den stannade. Kön kräver WebGPU.

## Dimma, rök, brus och kaustik

Dessa finns i {{ui:Dimma, rök och brus}} och fungerar i {{ui:Hög kvalitet}} på grafikkortet; de andra motorerna utelämnar dem.

- {{ui:Dimma och dis}} fyller luften upp till en höjd med en dimma som solen, himlen och lamporna lyser upp. {{ui:Hur långt du kan se, i meter}} anger hur tjock den är (ungefär 100 m är ett lätt dis, 20 m en tjock dimma), {{ui:Dimmans höjd över marken, i meter}} är var den slutar, och {{ui:Ljusstrålar}} är hur mycket dimman glöder mot ljuset. Solljus lämnar dimman vid dess topp, så där sol kommer genom ett fönster eller mellan byggnader ser du det som ljusstrålar.
- {{ui:Rök eller moln}} lägger till en volym rök eller moln som lyses upp som dimman. {{ui:Typ}} är ett {{ui:Moln}}, en {{ui:Rökpelare}} eller {{ui:Från en volymfil (.ccvol)}}, CadCraft:s eget rutnätsformat. {{ui:Detalj}} och {{ui:Variation}} ändrar ett gjort moln eller en gjord pelare. {{ui:Storlek på dess längsta sida, i meter (0 = modellens storlek)}}, {{ui:Flytta X (m)}}, {{ui:Flytta Y (m)}}, {{ui:Flytta Z (m)}} och {{ui:Vrid}} placerar den (den börjar i mitten av modellen), {{ui:Tjocklek}} gör den tätare, {{ui:Framåtglöd}} gör den ljusare mot ljuset, och {{ui:Färg}} tonar den. En volymfil finns kvar bara medan sidan är öppen, precis som en himmelsbild.
- {{ui:Sluta tidigt där bilden är ren (adaptiv sampling)}} ger inga fler sampel till bildpunkter som har stabiliserats, så resten av bilden blir klar tidigare. {{ui:Brus att acceptera}} är hur mycket kornighet som finns kvar när en bildpunkt slutar. Raden under bilden säger hur många sampel en bildpunkt fick i genomsnitt.
- {{ui:Kaustik (ljus som böjs av glas eller studsar mot speglar)}} spårar ljus från lamporna och solen, så den ljusa fläcken under en glaskula, eller en speglas ljus på en vägg, blir ren i stället för kornig. Den är av när dimma, rök, {{ui:Blanda ljusen efter renderingen}} eller renderingselement är på, och den är gjord för bilder, inte för 360°-bilder, animeringar eller {{ui:Rendera}}-arbetsytan.

## Hur lång tid det tar

Bilden görs på din egen dator, av dess grafikkort; ingenting laddas upp. Hur lång tid det tar beror på kortet. Tiden växer med passen och bildpunkterna: {{ui:Bäst}} har 16 gånger så många pass som {{ui:Utkast}}, och en 4K-bild har ungefär fyra gånger så många bildpunkter som Full HD. En dator utan grafikkort renderar fortfarande, men långsammare.

:::note
Om dialogen säger att webbläsaren inte kan rendera bilder, saknar webbläsaren WebGL 2. Uppdatera den, eller slå på hårdvaruacceleration i dess inställningar.
:::
