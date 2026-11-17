---
title: Skicka massa till BimCraft
summary: Lämna över tryck/dra-massor till BimCraft som massalternativ, med våningsplan, fotavtryck, bruttoyta och volym beräknade från varje solid.
keywords: massa, massning, koncept, alternativ, bimcraft, ifc, bim, tryck/dra, våningsplan, våningar, bruttoyta, fotavtryck, volym, skicka, lämna över, byggnadsmassa, steg 2
from: 73c51f3f
---

## Vad du gör

Gör om blocken du modellerat med tryck/dra till massalternativ som BimCraft förstår, så att konceptet fortsätter som en byggnadsmodell.

## Innan du börjar

Gör varje massa till en **grupp** eller **komponent** och ge den ett namn. Varje en blir ett alternativ. Lös geometri skickas inte.

## Skicka den

1. Markera grupperna att skicka. Med inget markerat går alla grupper och komponenter på översta nivån.
2. Välj {{ui:Exportera}} och sedan {{ui:Massa till BimCraft…}}.
3. Skriv in {{ui:Namn på alternativuppsättningen}} och {{ui:Våningshöjd}}.
4. Kontrollera listan: varje alternativs våningar, fotavtryck, bruttoyta och volym.
5. Välj **Skicka till BimCraft** för att öppna BimCraft i en ny flik med alternativen, eller {{ui:Spara som IFC}} för att ladda ner filen och öppna den där själv.

I BimCraft listas alternativen under ”Massalternativ i modellen”, där ett kan göras till aktuellt alternativ och utvecklas till väggar och bjälklag.

## Så blir en solid till en massa

- **Våningar** är solidens höjd delad med våningshöjden, avrundat och minst ett. Våningarna delar sedan solidens höjd lika, så ett 10 m högt block med 3 m våningar har 3 våningar på 3.33 m.
- **En våningsyta** är arean av solidens egna horisontella snitt på den våningens nivå. Ett block som trappar sig tillbaka har mindre övre våningar, och bruttoytan är deras summa.
- **Fotavtrycket** är konturen av snittet precis ovanför solidens bas.
- **Volymen** är solidens egen.

I IFC-filen är varje alternativ en byggnadselementproxy (fotavtrycket höjt till solidens höjd) med ett utrymme per våning som bär våningens bruttoyta. Alla alternativ delar en byggnad, med lika många våningsplan som det högsta alternativet.

## Förenklade former

Ett vanligt, upprätt block går över exakt som det modellerats. Allt annat skickas ändå, och listan anger varför formen förenklas:

- **Dess våningar är inte alla lika stora som basen** (den trappar sig tillbaka eller lutar): massan i BimCraft är basens kontur höjd till full höjd, men våningsytorna och volymen är solidens egna.
- **Solidet är inte slutet**: våningar vars snitt inte kan slutas mäts inte och räknas som noll. Sluta solidet ({{ui:Entitetsinfo}} säger "Solid: Ja") för fullständiga siffror.
- **Dess bas har fler än en kontur**: den största används som fotavtryck.

## Bra att veta

- {{ui:IFC för BimCraft (.ifc)}} är en annan export: den skickar bara former och namn, utan våningar eller ytor.
- Inget laddas upp. Filen överlämnas till BimCraft-fliken på den här datorn.
