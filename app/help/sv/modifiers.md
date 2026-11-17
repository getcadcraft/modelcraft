---
title: Modifierare på ett nät, en grupp eller en komponent
summary: Skala, spegla, matris, jämna ut, fasa, skär och böj ett nät utan att ändra det; upprepa eller skala en grupp eller komponent med samma stapel; gör det permanent när du är redo.
keywords: modifierare, stapel, grupp, komponent, skala, baka, redigera källa, icke-destruktiv, spegla, matris, radiell matris, subdivision, subdivisionsyta, jämna ut, fasa, solidifiera, tjocklek, boolesk, skär, förskjutning, brus, svetsa, decimera, förenkla, gitter, bur, kurvdeformation, böj, krympning, tillämpa
from: dd5ec1cb
---

En **modifierare** ändrar vad ett nät visar utan att ändra nätet självt. Spegla ena halvan av en del och modellera bara den halvan; runda en låda med en subdivisionsyta och fortsätt redigera lådan. Modifierare ligger i en **stapel** och arbetar i ordning, uppifrån och ned. Det du ser, exporterar, skriver ut och renderar är nätet med varje modifierare som är på.

## Lägg till en modifierare

1. Markera ett nät. I Modell-arbetsytan finns dess avsnitt **Modifierare** i {{ui:Entitetsinfo}}; i Nät-arbetsytan finns det i panelen till höger.
2. Välj en från {{ui:Lägg till en modifierare…}}. Den hamnar längst ned i stapeln.
3. Ändra dess inställningar under dess namn. Längder tar samma värden som värderutan, så `600mm`, `2'6"` och `(6m)/4` fungerar alla.

Varje ändring är ett ångra-steg: {{key:Mod+Z}} tar tillbaka den.

## Knapparna på varje modifierare

- Kryssrutan slår på eller av den.
- Skärmknappen visar eller döljer den i vyn (den stannar i stapeln).
- Kameraknappen visar eller döljer den i renderade bilder och videor, så att en modifierare kan vara bara för renderingar (eller bara för vyn).
- Pilarna flyttar den upp eller ned i stapeln. Ordningen spelar roll: spegling och sedan subdivision ger en mjuk söm, subdivision och sedan spegling gör det inte.
- {{ui:Verkställ}} gör formen till en del av nätet: modifierarna ovanför och denna görs på nätet självt och lämnar stapeln. Det är ett ångra-steg.
- Krysset tar bort den.

## Modifierarna

| Modifierare | Vad den gör |
| --- | --- |
| Skala | Skalar kring objektets origo, en faktor för röd, grön och blå. Även på en grupp eller komponent. |
| Spegling | Lägger till en speglad kopia tvärs över röd, grön eller blå genom nätets origo, och sammanfogar halvorna där de möts. |
| Matris | Kopierar i en rad (ett steg av sin egen storlek gånger de tal du anger, plus ett fast steg), runt en axel, eller längs en kurva i modellen. En grupp eller komponent tar raden. |
| Subdivisionsyta | Jämnar ut nätet med Catmull-Clark-subdivision. Skarpa kanter förblir veckade. Renderingar kan använda fler nivåer än vyn. |
| Fasa | Rundar varje kant som är skarpare än vinkeln du anger. |
| Solidifiera | Ger en yta en tjocklek och sluter kanten. |
| Boolesk | Skär bort, sammanfogar eller behåller överlappningen med ett annat objekt i modellen. Båda måste vara slutna solider. |
| Förskjutning | Flyttar ytan in eller ut med mjukt brus. Samma startvärde ger samma bulor varje gång. |
| Svetsa | Sammanfogar hörn som ligger närmare varandra än ett avstånd. |
| Decimera | Behåller en andel av trianglarna och tar bort de som ändrar formen minst. |
| Jämna ut | Slappnar av hörnen mot deras grannar. |
| Gitter | Böjer nätet med en bur: flytta burens punkter så följer nätet. |
| Kurvdeformation | Böjer nätet längs en kurva i modellen, längs röd, grön eller blå. |
| Krympning mot yta | Flyttar varje hörn till närmaste punkt på ett annat objekt. |

## På en grupp eller en komponent

En grupp eller komponent kan också behålla ett recept, så att en lampskärm kan vara en **Skala** och en **Matris** av en skärm, och ändrar du ett tal ändras lampan.

1. Markera en grupp eller komponent. I {{ui:Entitetsinfo}} listar dess avsnitt **Modifierare** stapeln (tom från början).
2. Välj {{ui:Skala}} eller {{ui:Matris}} från {{ui:Lägg till en modifierare…}}. Gruppen blir en komponent som är **originalet, placerat av stapeln**. Originalet behålls: redigera det, så följer varje kopia direkt.
3. Skala tar en faktor för röd, grön och blå (`1, 1, 2` fördubblar höjden). Matris tar antalet kopior, ett steg som en andel av resultatets hittillsvarande storlek, och ett extra steg i längder.

Stapeln körs uppifrån och ned på originalets egna axlar kring dess origo, så ordningen spelar roll: en matris med tre kopior 3 m från varandra, och sedan Skala 2 på röd, placerar kopiorna 6 m från varandra; skala först och sedan matrisen håller dem 3 m från varandra. Kryssrutan, pilarna och krysset fungerar som på ett nät; knapparna för vy och kamera samt Verkställ på en enskild modifierare fungerar inte, eftersom en stapel på en grupp är en enda sak.

- {{ui:Redigera källa}} öppnar originalet på plats. Ändringar syns i varje kopia; när du stänger återvänder du dit du var.
- {{ui:Baka modifierare}} gör resultatet till vanliga kanter och ytor och tar bort stapeln, i ett ångra-steg. Kopior som överlappar förblir separat geometri: Baka är ingen sammanslagning.
- Kopior av komponenten delar receptet; {{ui:Gör unik}} skiljer det (originalet förblir delat).
- Stapeln sparas i filen, följer med vid kopiera och klistra in samt vid ångra, och Rensa oanvända behåller originalet. Ett program som inte känner till modifierare visar ändå kopiorna.
- Fram till Baka kan resultatet inte redigeras, sprängas, ändras i storlek eller töjas: det skulle byggas om vid nästa ändring. Varje sådant verktyg säger det.
- Gränserna är 32 modifierare och 1,000 kopior. En komponent gjord för att töjas (Töj) och en stapel kan inte dela en definition än.

## Subdivisionsyta

Subdivision jämnar ut ett nät med Catmull-Clark: varje yta blir fyrsidiga ytor, och varje nivå ger fyra gånger så många. En låda med två eller tre nivåer ser redan ut som en rundad form, och du fortsätter redigera lådan.

- **Nivåer i vyn** anger hur jämnt det är.
- **Nivåer i renderingar** anger hur jämna renderade bilder och videor är; renderingar kan använda fler nivåer än vyn.
- **Renderingar på den sanna släta ytan** placerar nätets punkter i renderingarna på gränsytan som nivåerna går mot, så att även två nivåer renderas lika jämnt som många.
- **Veck** håller kanter skarpa: i Nät-arbetsytan markerar du kanter och använder {{ui:Veck}} (1 förblir skarp, 0.5 rundar lite, 0 är slät). Se [Redigera ett nät](topic:mesh-edit).
- **Sänk vynivån på ett stort nät:** när de nivåer du begär skulle ge fler ytor än den här datorn hanterar väl, visar vyn en lägre nivå och säger vilken. {{ui:Verkställ}} använder alltid alla nivåer. Hur många ytor som gäller bestäms av din dators klass i {{ui:Inställningar}} › Rendering › Din dator.
- Öppna kanter behåller sina hörn och ligger kvar på linjen för sina kanter.

## Böj med en gitterbur

1. Lägg till en {{ui:Gitter}}-modifierare och tryck på {{ui:Lägg till en gitterbur runt nätet}}. En bur med 3 × 3 × 3 punkter visas runt nätet, ritad som trådar.
2. Öppna buren i Nät-arbetsytan (dubbelklicka på den) och flytta dess punkter. Nätet följer mjukt.

:::tip
En bur är ett nät som vilket annat som helst: dölj den med dess tagg när du är klar.
:::

## Stora nät

Små staplar beräknas på en gång. En stor beräknas i bakgrunden på varje kärna i datorn: vyn visar det senaste resultatet tills det nya är klart. Booleska operationer laddar solidmodeleraren första gången; vyn säger det en stund.

## Vad modifierare inte gör ännu

- Vikter per hörn (en avtagning målad på nätet) för Förskjutning, Jämna ut och Krympning mot yta.
- Modifierare utöver Skala och den linjära Matrisen på tryck/dra-geometri (grupper och komponenter): gör det till ett nät först ({{ui:Konvertera till nät}}). Spegling, en rund eller kurvmatris, Böj och Avsmalning på grupper kommer senare.
