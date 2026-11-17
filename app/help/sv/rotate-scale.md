---
title: Rotera och skala
summary: Vrid saker kring en punkt genom att klicka eller skriva grader, och ändra storlek jämnt med en faktor.
keywords: skalhandtag, töj, icke-enhetlig, per axel, vänd, spegla, spegelkopia, vänd längs, rotera, vrid, vinkel, grader, gradskiva, skala, ändra storlek, förstora, förminska, faktor, enhetlig skala
from: 45cdcb49
---

## Rotera

{{ui:Rotera}} ({{key:Q}}) vrider markeringen kring en mittpunkt. Det tar tre klick: mittpunkten, en startriktning och slutriktningen.

1. Markera det du vill vrida. Om inget är markerat tar Rotera det du klickar på först.
2. Tryck på {{key:Q}}. En ring följer pekaren och visar planet du vrider i.
3. Klicka på rotationens mittpunkt.
   - På marken eller i tomt utrymme ligger ringen plant (blå): vridningen sker kring en lodrät axel, som när man vrider en byggnad på sin tomt.
   - På en yta ligger ringen i ytans plan: vridningen sker kring ytans egen riktning. Klicka på en vägg för att vrida något kring en vågrät axel.
4. Klicka på en punkt som anger var vinkeln börjar, till exempel längs en kant på det du vrider.
5. Flytta pekaren runt mittpunkten. Vinkeln visas i spetsen och i värderutan ({{ui:Vinkel}}). Den hakar i steg om 15° när du kommer nära ett.
6. Klicka för att avsluta, eller skriv vinkeln i grader och tryck på {{key:Enter}}: `90`, `45`, `-30`.

   Positiva vinklar vrids moturs, sett från den sida ringen vetter mot.

Tryck på {{key:Ctrl}} (eller {{key:Alt}}) medan du roterar för att vrida en **kopia** och låta originalet vara kvar, som med Flytta; tipset visar om kopiering är på, och att trycka på tangenten igen stänger av den. Skriv `3x` direkt efter en roterad kopia för fler kopior runt samma mittpunkt.

Liksom vid Flytta vrider du delar av sammanhängande geometri, och ytorna som sitter fast i den vrids med. Gruppera saker först för att vrida dem hela.

:::note
Tipset säger att piltangenterna väljer rotationsaxeln, men i den här versionen kretsar de i stället runt vyn innan det första klicket. För att välja axel, klicka på mittpunkten på en yta som vetter åt det håll du vill. Se [Finns inte ännu](topic:not-built-yet).
:::

## Skala

{{ui:Skala}} ({{key:S}}) ändrar storlek på markeringen. Markera det du vill ändra storlek på först, tryck sedan på {{key:S}}: små rutor (handtag) visas på hörnen, kanterna och mitten av sidorna på dess låda.

### Töj eller skala med handtagen

- Ett **hörnhandtag** skalar jämnt i alla riktningar, kring det motsatta hörnet.
- Handtaget i mitten av en **sida** töjer bara längs den riktningen, kring motsatt sida: gör en låda längre utan att göra den högre.
- Handtaget i mitten av en **lådkant** töjer i de två riktningarna över den.
- Håll {{key:Ctrl}} när du klickar på ett handtag för att skala kring lådans mitt i stället.

Klicka på ett handtag, flytta pekaren och klicka igen; eller klicka på handtaget, skriv en faktor (`2` fördubblar, `0.5` halverar) och tryck på {{key:Enter}}. För att ge varje riktning sin egen faktor, skriv tre, för röd, grön och blå: `2,1,0.5`. I en öppen grupp är riktningarna gruppens egna.

### Skala kring valfri punkt

Klicka någon annanstans än på ett handtag för att skala jämnt kring en punkt du själv väljer. Det tar tre klick:

1. Markera det du vill ändra storlek på. Om inget är markerat tar Skala det du klickar på först.
2. Tryck på {{key:S}}.
3. Klicka på punkten som står kvar (inte på ett handtag), till exempel ett nedre hörn.
4. Klicka på en referenspunkt. Dess avstånd från den första punkten räknas som 1×.
5. Flytta pekaren mot eller bort från den första punkten. Faktorn visas i spetsen och i värderutan ({{ui:Skala}}).
6. Klicka för att avsluta, eller skriv en faktor och tryck på {{key:Enter}}: `2` fördubblar storleken, `0.5` halverar den.

### Skala till exakt storlek

För att göra något till en exakt längd, räkna ut faktorn: ny längd delat med nuvarande längd. I läget med tre klick räknar värderutan ut uttryck, så skriv `4.2/3.6` för att göra en 3,6 m lång vägg 4,2 m lång. Ett handtags värderuta tar bara vanliga tal: räkna ut faktorn först (4,2 delat med 3,6 är cirka 1,1667). Markera kanten först för att läsa dess nuvarande längd i {{ui:Entitetsinfo}}.

### Rätta en import som kom in i fel storlek

OBJ-filer saknar enhet, så en modell ritad i millimeter kommer in 1000 gånger för stor. Markera den importerade gruppen, tryck på {{key:S}}, klicka på ett hörnhandtag, skriv `0.001` och tryck på {{key:Enter}}. För en modell ritad i tum, skriv `0.0254`.

## Att tänka på

- Att skala kring en punkt med tre klick är enhetligt. För att töja bara i en riktning, använd ett sid- eller kanthandtag (se ovan).
- Att skala en grupp eller komponent ändrar kopian du skalade; andra kopior av en komponent behåller sin storlek.
- Tryck på {{key:Esc}} före sista klicket för att avbryta.

## Vänd

{{ui:Redigera}} › {{ui:Mer}} › {{ui:Vänd längs rött}}, {{ui:Vänd längs grönt}} eller {{ui:Vänd längs blått}} speglar markeringen på plats, genom mitten av dess låda: en trappa för vänsterhänt blir en för högerhänt. Ytor behåller sin utåtvända riktning, och en grupp eller komponent speglas som helhet (dess insida skrivs inte om).

{{ui:Vänd kopia längs rött}} (och grönt, blått) lämnar originalet kvar och lägger en spegelvänd kopia bredvid det, över markeringens låda på andra sidan: den andra dörren i ett par, den andra flygeln på en byggnad. Lös geometri som rör vid där ansluts till originalet, som beröring alltid gör; gör originalet till en grupp först för att hålla dem åtskilda.

I en öppen grupp är rött, grönt och blått gruppens egna axlar.
