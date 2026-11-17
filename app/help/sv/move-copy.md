---
title: Flytta, kopiera och skapa matriser
summary: Flytta saker genom att klicka eller med ett exakt avstånd, kopiera dem med en modifieringstangent och skapa en rad med jämnt fördelade kopior.
keywords: flytta, kopiera, duplicera, matris, rad, avstånd, dela, förskjut, töj, kolumner, upprepa, flera kopior
from: 280245fc
---

{{ui:Flytta}} ({{key:M}}) flyttar det som är markerat från en punkt till en annan. Om du håller ned en modifieringstangent blir det en kopia, och efter en kopia kan du skriva hur många till du vill ha.

## Flytta något

1. Markera det du vill flytta (se [Markera saker](topic:select)). Om inget är markerat tar Flytta det du klickar på.
2. Tryck på {{key:M}}.
3. Klicka på en punkt att flytta från. Välj något meningsfullt, till exempel ett hörn: den punkten hamnar exakt där du klickar nästa gång.
4. Flytta pekaren. Markeringen följer med. Den fångar punkter, kanter och de röda, gröna och blå riktningarna, precis som en linje gör.
5. Klicka där punkten ska hamna, eller skriv ett avstånd och tryck på {{key:Enter}}.

   Statusfältets tips återgår till "Klicka på en punkt att flytta från…" för nästa flytt.

Ett inskrivet avstånd går i den riktning du pekar. Du kan också skriva en exakt förskjutning, `<2m,0,0>` (2 m längs rött), eller en exakt destination för punkten du valde, `[0,0,0]` (origo). Se [Skriv in exakta mått](topic:value-box).

För att flytta längs bara en axel trycker du på en piltangent efter det första klicket: {{key:Right}} låser till rött, {{key:Left}} till grönt, {{key:Up}} till blått. Tryck på samma pil igen för att låsa upp.

## Att flytta en del av en form töjer den

Geometri som inte är grupperad är kopplad. Om du markerar en yta eller några kanter och flyttar dem följer de anslutna ytorna med och töjs. Flyttar du den översta ytan på en låda åt sidan lutar lådan; flyttar du en kant på taket ändras takets lutning. Ytor som inte längre kan ligga plant veckas till trianglar.

För att flytta ett helt objekt utan att det töjs, markera allt först (tripla-klicka på det), eller ännu hellre gör det till en grupp eller komponent (se [Grupper och komponenter](topic:groups-components)).

## Kopiera något

1. Markera det du vill kopiera.
2. Tryck på {{key:M}}.
3. Håll ned {{key:Ctrl}} (eller {{key:Alt}}) och klicka på punkten att flytta från. På en Mac gör {{key:Mod}} eller {{key:Alt}} samma sak. Tipset säger "Ctrl flyttar i stället", vilket betyder att du kopierar.

   Du kan också trycka ned och släppa {{key:Ctrl}} eller {{key:Alt}} efter det första klicket för att växla mellan flytt och kopiering.

4. Klicka där kopian ska hamna, eller skriv ett avstånd och tryck på {{key:Enter}}.

   Originalet står kvar där det var, och kopian är markerad.

## Kopiera, klipp ut, klistra in och duplicera

- {{key:Mod+C}} kopierar markeringen, {{key:Mod+X}} klipper ut den (kopierar och raderar), {{ui:Kopiera}} och {{ui:Klistra in}} finns också som knappar i verktygsfältets grupp {{ui:Redigera}}, och {{ui:Mer}} bredvid dem har klipp ut, klistra in på plats och duplicera.
- {{key:Mod+V}} klistrar in: en kontur av kopian följer pekaren och fångar punkter som alla verktyg gör, och ett klick sätter ned den med dess nedersta hörn där. {{key:Esc}} avbryter.
- {{key:Mod+Shift+V}} klistrar in på plats, exakt där kopian kom ifrån, vilket är användbart när du vill flytta något in i en grupp du har öppnat.
- {{key:Mod+D}} ({{key:Shift+D}} i Modeler-stilen) duplicerar: en kopia skapas och följer pekaren direkt. Klicka för att sätta ned den, skriv ett avstånd, eller tryck på {{key:Esc}} för att släppa den. Direkt efteråt kan du skriva `3x` för fler kopior i rad.

En inklistrad grupp blir en ny grupp. En inklistrad komponent är en ny placering av samma komponent, så när du redigerar en ändras alla. Kopior klistras också in i en annan ModelCraft-flik i den här webbläsaren (där de kommer in som nya definitioner).

## En rad med kopior

Direkt efter en kopiering, medan {{ui:Flytta}} fortfarande är verktyget:

- Skriv `3x` (eller `*3`) och tryck på {{key:Enter}} för tre kopior i rad, var och en med samma avstånd som den första kopian. Du får tre nya kopior utöver originalet.
- Skriv `/3` och tryck på {{key:Enter}} för att i stället dela: tre kopior fördelas jämnt från originalet till platsen där du satte den första kopian, och den sista hamnar på just den platsen. Använd detta för att fylla ut ett spann: placera en kopia i andra änden och dela sedan.

Du kan skriva ett annat tal direkt efteråt: `5x` ersätter raden med `3x`. Tipset påminner dig: "Kopierad. Skriv 3x för fler kopior i rad, eller /3 för att dela avståndet."

### Exempel: pelare var sjätte meter

1. Gör en pelare och gör den till en komponent ({{key:G}}), så att alla kopior ändras tillsammans senare.
2. Tryck på {{key:M}}, håll ned {{key:Ctrl}} och klicka på pelarens nedre hörn.
3. Flytta längs den röda axeln och skriv `6m`, tryck sedan på {{key:Enter}}.
4. Skriv `4x` och tryck på {{key:Enter}}. Du har fem pelare, 6 m från varandra.

## Att tänka på

- Tryck på {{key:Esc}} före det andra klicket för att avbryta; allt går tillbaka dit det var.
- Flytta fungerar inne i den grupp du redigerar. För att flytta en hel grupp, stäng den först och markera den utifrån.
- Med **{{ui:Kollision}}** på (nere till höger och i [ModelCraft-inställningar](topic:settings#solids-stop-where-they-touch)) stannar en flytt där markeringen tar i en annan solid, i stället för att gå igenom den. Klicka på {{ui:Kollision}} för att stänga av det för en flytt som ska gå igenom.
- För att lägga en kopia i en annan grupp: kopiera den, öppna den andra gruppen och klistra in ({{key:Mod+Shift+V}} behåller den på samma plats).
