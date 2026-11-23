---
title: Skivning för en hartsskrivare
summary: Skiva utskriftsstegets bädd för en hartsskrivare, gör detaljen ihålig och stötta den, titta igenom lagren, spara skrivarens fil och hitta din exponering med exponeringstestet.
keywords: harts, föreslå en lutning, sugkopp, avdragskraft, avstyvning, hartsutskrift, sla, msla, dlp, skivare, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, ihålig, ventilationshål, flotte, stöd, exponeringstest, exponeringsstege, kalibrering, lager, tillägg
from: 8cc12858
---

Hartstilläggen skivar det som finns på utskriftsbädden till lagerbilder för skrivarens skärm och sparar filen som skrivaren läser. De är gratis, inget är låst, och de är avstängda tills du slår på dem.

:::note
Ingen fil har laddats på en riktig skrivare än. Filerna har bara lästs tillbaka av CadCrafts egna läsare, och stöden är nya. Kontrollera lagren och kör din första utskrift för hand.
:::

## Vad du gör

Skiva en detalj för harts, kontrollera lagren, spara filen och kopiera den till din skrivare.

## Steg

1. Öppna {{ui:Inställningar}} › {{ui:Tillägg}} och slå på hartsskivartillägget och tillägget för din skrivares filformat (Elegoo GOO, SL1, Chitubox eller Anycubic). Du kan också trycka på {{ui:Lägg till hartsutskrift}} på kortet för utskriftssteget.
2. Lägg din detalj på bädden enligt [Lägg saker på utskriftsbädden](topic:print-stage) och välj sedan {{ui:Harts}} bredvid **Skriver ut med**.
3. Under **Inställningar för hartsutskrift** väljer du din **Skrivare** och ditt **Harts**. Kortet visar skärmstorleken i pixlar. Det här är tillverkarens publicerade storlekar, så kontrollera din; du kan redigera dem under Anpassad.
4. Ange **Lagerhöjd (mm)**, **Exponering (s)** och **Bottenexponering (s)**. Siffrorna för varje harts är bara en utgångspunkt.
5. Markera **Gör den ihålig, med ett ventilationshål** om du vill ha en ihålig detalj, och ange **Vägg (mm)** och **Hålbredd (mm)**.
6. Markera **Stöd och en flotte**, och välj **Stödtäthet**: Låg, Medel eller Hög.
7. Välj **Filformat**. Om kortet säger att ingen är tillagd än trycker du på knappen som säger Lägg till och formatets namn.
8. Tryck på {{ui:Förhandsgranska lager}} och flytta reglaget **Lager**. Svävande delar markeras med en ring. Raden under ger lagren, tiden samt hartset i mL, gram och kostnad.
9. Tryck på {{ui:Spara utskriftsfilen}}, kontrollera sammanfattningen och tryck på {{ui:Spara}}. Kopiera filen till din skrivare.

## Lutning, sugkoppar, stag och avdragsvärdet

Dessa fyra är uppskattningar utifrån detaljens form. Ingen har provats på en riktig skrivare, så betrakta var och en som ett tips och titta på lagren.

1. Tryck på {{ui:Föreslå en lutning}} under **Lutning (grader)**. CadCraft prövar lutningar från 0 till 60 grader och väljer den med minsta största lager, minst överhängande yta och ingen sugkopp. Den sätter **Lutning (grader)** och berättar vad den hittade. Viktningarna i poängsättningen är våra, inte en skrivartillverkares.
2. Efter {{ui:Förhandsgranska lager}} nämner en varning håligheter som bara öppnar sig mot filmen. En sådan hålighet kan hålla kvar sug när ett lager lossnar. Luta detaljen eller lägg till ett hål. Fickor som är smalare än cellstorleken i varningen syns inte.
3. Med **Stöd och en flotte** påslaget markerar du **Förstärk höga stöd** för att lägga till tvärstag mellan höga, tunna pelare.
4. Raden under förhandsvisningen anger det största lagret i cm2. Den visar en kraft bara om du anger en **Uppmätt avdragsspänning** under **Bottenlager, lyft och hastigheter**. Utan ett eget uppmätt värde visas bara arean.

## Hitta din exponering

1. Slå på exponeringstestets tillägg i {{ui:Inställningar}} › {{ui:Tillägg}}.
2. Tryck på {{ui:Lägg testdetaljen på bädden}}.
3. Tryck på {{ui:Spara exponeringsstegen}}. Du får en fil för varje exponering, i en zip-fil.
4. Skriv ut varje fil med samma harts och behåll den exponering med de skarpaste tunna pelarna och öppna hålen.

## Noteringar

- Skivningen körs i bakgrunden, så sidan är fortfarande användbar på en stor platta.
- Delar som inte är slutna solider utelämnas, och kortet säger det.
- Om din skrivare inte accepterar en fil har formatkortet alternativ för det som formatet lämnar öppet. Ändra ett, spara igen och berätta för oss vilket som fungerade.
- Anycubic-versionerna 517 och 518 skrivs inte.
