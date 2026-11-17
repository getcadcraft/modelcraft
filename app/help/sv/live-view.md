---
title: Den levande vyn
summary: Ett fönster bredvid modellen som visar den i realtidsutseende, med sol och skuggor, och som följer varje ändring du gör. Gå igenom den och ställ in tid på dygnet och månaden.
keywords: dela, panorama, 360, rundtur, virtuell rundtur, fristående visare, offlinevisare, skicka till kund, video, genomgångsvideo, strö ut, spridning, gräs, äng, skog, stenar, växter, träd, folkmassa, måla växter, levande vy, realtid, realtidsrendering, genomgång, gå, gå igenom, förstapersons, presentation, kund, andra skärm, andra fönster, bildskärm, tid på dygnet, sol, årstid, månad, skuggor, ambient occlusion, reflektioner, studsljus, global belysning, webgpu, webgl
from: fca3b0d6
---

{{ui:Exportera}} › {{ui:Levande vy}} öppnar en panel över appen som visar modellen i realtidsutseende: himlen och solen utifrån modellens plats och datum, solens skuggor, de utseenden och material du gett ytorna, lampor och ljus som studsar från väggar och golv. Den följer vad du gör: vrider du vyn vrids den också, och ändrar du modellen visar den ändringen en stund senare. Inget laddas upp.

## Öppna den

1. Välj {{ui:Exportera}} › {{ui:Levande vy}}. Panelen öppnas i det nedre högra hörnet.
2. Dra i dess namnlist för att flytta den, dra i hörnet för att göra den större.
3. {{ui:Nytt fönster}} flyttar den till ett eget fönster, för en andra skärm. {{ui:Exportera}} › {{ui:Levande vy i ett nytt fönster}} öppnar den direkt där. Blockerar webbläsaren popup-fönster öppnas den som panel.
4. {{ui:Stäng}} stänger den.

## Kontrollerna

| Kontroll | Vad den gör |
|---|---|
| {{ui:Följ vyn}} | På: den levande vyn tittar dit ModelCraft-vyn tittar. När du går stängs den av |
| {{ui:Gå}} | Gå igenom modellen (nedan) |
| {{ui:Tyngdkraft}} | Vid gång: stå på golv och gå upp för trappor. Av: flyga |
| {{ui:Tid}} | Timmen på dygnet, från 05:00 till 21:00. Solen rör sig när du drar |
| {{ui:Månad}} | Månaden (den 21:a i den), så att du ser solen på vintern och sommaren |
| {{ui:Kvalitet}} | {{ui:För den här datorn}} (vad [din dator](topic:your-machine) får), eller {{ui:Låg}}, {{ui:Medel}} eller {{ui:Hög}} |

Raden längst ned visar vad som ritar vyn (WebGPU eller WebGL 2), kvaliteten och studsljuset.

## Gå igenom modellen

1. Vrid huvudvyn dit du vill stå och välj {{ui:Gå}}. Du står på golvet under vyns ögonpunkt, 1.6 m hög.
2. Klicka i den levande vyn och använd {{key:W}} {{key:A}} {{key:S}} {{key:D}} eller piltangenterna. Håll ned {{key:Shift}} för att springa. Dra för att se dig omkring.
3. Steg upp till 40 cm klättras (trappor); allt högre är en vägg. Väggar stoppar dig och du glider längs dem.
4. Med {{ui:Tyngdkraft}} av flyger du: {{key:E}} går upp, {{key:Q}} ner.
5. {{key:Esc}} avslutar gången.

## Sprid ut växter, stenar och människor

{{ui:Strö ut}} i verktygsraden i den levande vyn öppnar panelen för utspridning bredvid bilden. En spridningsuppsättning sprider objekt från entourage-biblioteket (träd, buskar, gräs, blommor, stenar, människor, bilar) över en del av modellen. Objekten ritas bara i den levande vyn: de är inte geometri i modellen, och huvudvyn visar dem inte.

1. **Fyll ytor:** markera ytor (eller en grupp, till exempel en terräng) i ModelCraft och välj {{ui:Fyll markeringen}}. Uppsättningen täcker dem.
2. **Måla:** välj {{ui:Måla}} och dra över den levande vyn. Med ytor markerade hamnar färgen bara på dem; med inget markerat hamnar den på allt under penseln, även marken. {{ui:Penselstorlek}} anger penseln; {{ui:Radergummi}} tar bort målade fläckar.
3. Markera vad som ska spridas. Siffran bredvid varje är dess vikt: 3 och 1 ger tre av den första för varje en av den andra.

| Kontroll | Vad den gör |
|---|---|
| {{ui:Per m²}} | Hur många objekt det blir per kvadratmeter |
| {{ui:Håll avstånd (m)}} | Inga objekt närmare än detta till andra objekt, och inga under ett tak eller bord. 0 stänger av det |
| {{ui:Vridning (°)}} | Hur mycket varje objekt vrids slumpmässigt runt vertikalen |
| {{ui:Brantast (°)}} | Inga objekt där ytan är brantare |
| {{ui:Storlek}} | Minsta och största storlek, som en faktor av objektets egen storlek |
| {{ui:Höjd från, till (m)}} | Bara mellan dessa höjder (tomt = valfri) |
| {{ui:Luta med ytan}} | 0 håller objekten upprätta; 1 ställer dem vinkelrätt mot en lutning |
| {{ui:Startvärde}}, {{ui:Blanda}} | Samma startvärde ger alltid samma utspridning; Blanda väljer en annan |

Uppsättningarna sparas i .modelcraft-filen och följer ytorna de täcker när du ändrar dem. Hur många objekt den levande vyn högst ritar bestäms av [din dators](topic:your-machine) nivå: 20 000 för {{ui:Bara processor}}, 100 000 för {{ui:Grafikkort, grundläggande}}, en miljon för {{ui:Grafikkort, högt}}. Panelen visar hur många som placerats av hur många täthet kräver: färre placeras när budgeten nås, eller där objekt håller dem borta. Objekt nära kameran ritas som de är; långt bort som enkla former i sina färger.

:::note
Utspridda objekt finns i den levande vyn (och i dess gång, panoramor och den fristående visaren). Rendera en bild ritar dem ännu inte.
:::

## Dela: panoramor, rundturer, en visare, en video

{{ui:Dela}} i verktygsraden i den levande vyn skapar filer från den levande vyn. Allt görs på den här datorn; inget laddas upp.

| Val | Vad du får |
|---|---|
| {{ui:360°-panorama}} | En 360°-bild från var vyn står (eller där du går), som en equirectangular PNG som panoramavisare och de flesta fotosidor öppnar |
| {{ui:Lägg till den här platsen i rundturen}}, sedan {{ui:Spara rundturen}} | En webbsida med ett panorama vid varje plats och pilar till de platser var och en kan se (en vägg mellan dem döljer pilen) |
| {{ui:Spara en visare}} | En webbsida med modellen i det här realtidsutseendet: vrid den, gå igenom den, hoppa till dess sparade scener. Den öppnas offline i en webbläsare med WebGPU eller WebGL 2, från en mapp, ett USB-minne eller ett e-postmeddelande, utan installation och konto, och laddar inget från internet |
| {{ui:Video av banan}} | Tidslinjens kamerabana (eller de sparade scenerna i ordning) som en video i det här realtidsutseendet, i den levande vyns storlek: WebM eller MP4 där webbläsaren kan skapa dem, annars numrerade bilder i en ZIP |

Panoramats bredd följer kvaliteten: 1024, 2048 eller 4096 pixlar på Låg, Medel respektive Hög. En visarfil är cirka 5 MB plus modellen.

:::note
Rundturen och visaren är gjorda för att visa, inte för att redigera: de behåller modellen som den är när du sparar dem.
:::

## Kvalitet

| | Låg | Medel | Hög |
|---|---|---|---|
| Solskuggor | en skuggkarta | tre kaskader | fyra kaskader |
| Ambient occlusion (kontaktskuggor) | | ✓ | ✓, finare |
| Reflektioner i metall | | | ✓ |
| Bloom (när Rendera en bild aktiverar den) | | ✓ | ✓ |
| Utjämnade kanter | FXAA | över flera bildrutor (TAA) | över flera bildrutor (TAA) |
| Studsljus | grovt | finare | finast |

{{ui:För den här datorn}} väljer Låg på en dator utan användbart grafikkort, Medel med ett inbyggt grafikchip, och Hög med ett separat grafikkort. Låg är avsett för en 8 GB-laptop utan grafikkort.

## Studsljus

Ljus som studsar från en solbelyst vägg mot golvet, och den mörkare insidan av ett rum, beräknas av samma path tracer som gör [renderade bilder](topic:render): den renderar ett litet panorama i punkter genom modellen, i bakgrunden på varje processorkärna. Medan den arbetar visar understa raden {{ui:Studsljus: 40 %}}; när den är klar tar vyn emot den. Efter en ändring börjar den om.

:::note
Det här är en approximation för en levande vy, inte en renderad bild: små detaljer mellan punkterna får studsljuset från närliggande punkter. För en färdig bild, använd [Rendera en bild](topic:render).
:::

## Ljusstyrka och färger

Den levande vyn använder samma ljusstyrka, vitbalans, kontrast och vyomvandling (ACES, AgX, filmic eller standard) som [Rendera en bild](topic:render): ställ in dem där, så följer den levande vyn med.

:::note
Webbläsare skiljer sig åt. Där webbläsaren har WebGPU (Chrome och Edge på Windows, macOS och ChromeOS, Safari 26) använder den levande vyn det; annars (de flesta webbläsare på Linux, äldre Apple-system) använder den WebGL 2 och ser likadan ut.
:::
