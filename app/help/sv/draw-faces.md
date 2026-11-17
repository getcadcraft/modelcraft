---
title: Rita ytor med linjer, rektanglar, cirklar och bågar
summary: Gör platta ytor på marken eller på andra ytor, dela dem med linjer, och rita cirklar och polygoner med det antal sidor du vill ha.
keywords: rita, linje, rektangel, cirkel, polygon, förskjutning, inre, ram, kant, båge, kurva, spline, mjuk, kabel, bana, bukt, radie, kurva, yta, planritning, fotavtryck, dela, sidor, segment, kontur, penna
from: b6d7b7dd
---

Allt i ModelCraft börjar som en platt **yta**: en yta som är sluten av kanter. Du kan rita en yta direkt med {{ui:Rektangel}}, {{ui:Cirkel}} eller {{ui:Polygon}}, eller teckna en kant i taget med {{ui:Linje}}. Ytor är det som [Tryck/dra](topic:push-pull) gör till solider.

## Rita en rektangel

1. Tryck på {{key:R}}.
2. Klicka på det första hörnet: på marken, eller på valfri yta i modellen.
3. Flytta pekaren. Rektangeln stannar på marken (eller på ytan du började på), och värderutan ({{ui:Mått}}) visar dess bredd och djup. Tipset säger "Kvadrat" när sidorna är lika långa.

   För att rita på ett annat plan, peka på det: en yta som går genom det första hörnet lägger rektangeln på den ytan. Att fånga en punkt utanför planet (en ändpunkt, en kant eller den blå axeln) ställer rektangeln upp genom båda hörnen. Fånga tillbaka till en punkt på det första planet, så ligger den ner igen. För att behålla ett plan, tryck på en piltangent: {{key:Up}} håller rektangeln vågrät (det blå planet), {{key:Right}} på det röda planet och {{key:Left}} på det gröna planet. Tryck på samma tangent igen för att låsa upp.
4. Klicka på motsatt hörn, eller skriv in de två måtten åtskilda av ett komma och tryck på {{key:Enter}}: `4m,3m`, `4000,3000` i en modell i millimeter, eller `12',10'6"` i fot och tum.

   En yta visas med fyra kanter runt sig.

De inskrivna måtten går i den riktning du pekade: om pekaren är till vänster om det första hörnet när du skriver, växer rektangeln åt vänster.

:::warning
Kommatecknet skiljer de två måtten åt, så det kan inte vara decimaltecken. Skriv `2.5m,3m`, aldrig `2,5m`.
:::

## Rita en cirkel eller en polygon

1. Tryck på {{key:C}} för en cirkel eller {{key:N}} för en polygon.
2. För att ändra antalet sidor, skriv in det innan du klickar: `12s` (eller bara `12`) och {{key:Enter}}. En cirkel börjar med 24 sidor och en polygon med 6. Tipset visar det aktuella antalet, och ModelCraft behåller det för nästa cirkel tills du ändrar det eller byter verktyg.
3. Klicka på mittpunkten, på marken eller på en yta. För att centrera den på en yta, peka med pekaren precis innanför ytan på ytans mitt ("Ytans centrum") eller på mitten av en av dess kanter ("Mittpunkt"): cirkeln ritas på ytan, även på den smala änden av en lång låda.
4. Klicka för att sätta radien, eller skriv in den ({{ui:Radie}} i värderutan) och tryck på {{key:Enter}}.

En cirkel är en polygon med många sidor. När du drar upp en cirkel med Tryck/dra mjukas dess sidor upp, så att cylindern uppfattas som en enda slät yta.

## Rita en båge

1. Tryck på {{key:A}} ({{ui:Båge}}).
2. Klicka där bågen börjar, sedan där den slutar (eller skriv in längden mellan dem).
3. Flytta pekaren för att bukta ut bågen, och klicka. Tipset säger "Halvcirkel" när bucklan är halva avståndet mellan ändarna. Eller skriv in hur långt mitten står ut: `2` och {{key:Enter}}.

För att i stället rita en båge runt en punkt, använd {{ui:Båge från centrum}}: klicka på centrum, sedan där bågen börjar (eller skriv in radien), sedan där den slutar (eller skriv in vinkeln i grader, till exempel `90`). Den fångar i steg om 15°.

En båge som startas på en yta ritas på den ytan; annars ligger den på marken, eller står upprätt när dess två ändar är på olika höjd. En båge har 12 segment; skriv `24s` medan du ritar för fler. Bågar stänger ytor precis som linjer gör: en båge över ett rektangelhörn delar den.

## Rita en mjuk kurva

{{ui:Kurva}} ritar en mjuk linje som går genom varje punkt du klickar på: en kabel, ett handledsräcke, en trädgårdskant. Den kan lämna marken: punkter fångar hörn, kanter och ytor var som helst, och piltangenterna låser röd, grön eller blå, som med {{ui:Linje}}.

1. Klicka på {{ui:Kurva}} i gruppen {{ui:Rita}}.
2. Klicka på punkterna som kurvan går genom. Skriv `<0,0,1>` och tryck på {{key:Enter}} för en punkt 1 ovanför den sista, `[x,y,z]` för en exakt plats, eller en längd för en punkt så långt mot pekaren.
3. Tryck på {{key:Enter}} eller dubbelklicka för att avsluta. Klicka på den första punkten igen för att stänga kurvan. {{key:Backspace}} tar tillbaka den sista punkten.

En kurva markeras som en enda del. För att ändra den, markera den och klicka på {{ui:Redigera punkter}} i {{ui:Entitetsinfo}}: dess punkter visas som kvadrater. Klicka på en, och klicka sedan där den ska gå (eller skriv `<dx,dy,dz>`). {{key:Esc}} återställer en punkt och avslutar redigeringen. En sluten plan kurva blir en yta; en kurva som avgränsar en yta kan inte redigeras längre.

## Förskjutning: en kant inuti eller utanför en yta

{{ui:Förskjut}} kopierar en ytas kontur ett bestämt avstånd inåt (eller utåt), till exempel för en ram, en kant, en fönsterbräda eller glaset i en skärm.

1. Tryck på {{key:F}} och klicka på ytan, eller markera ytan först och tryck sedan på {{key:F}}.
2. Flytta pekaren in i ytan för en inre kontur, eller ut ur den för en yttre. Den nya konturen följer med, och tipset säger hur långt.
3. Klicka, eller skriv in avståndet och tryck på {{key:Enter}}.

Ytan delas i två: den inre ytan och en ram runt den (eller en ny ring utanför). Tryck eller dra någon av dem direkt: för en skärm, rita lådan, tryck ut den till dess tjocklek, förskjut framsidan 30 mm inåt och tryck in den inre ytan lite för glaset. Hål i ytan förskjuts också, och en båge eller cirkel förblir en (mindre eller större) kurva.

- **Dubbelklicka** på en yta med {{ui:Förskjut}} för att förskjuta den med senaste avståndet igen.
- **Kanter:** markera en kedja av sammanhängande kanter i ett plan (till exempel de två linjerna i ett L), tryck på {{key:F}}, flytta till den sida du vill ha och skriv in avståndet: en parallell kopia ritas, med geringsskurna hörn.
- När avståndet är större än ytan tillåter säger ModelCraft det och ritar inget.

## Bågar, cirklar och polygoner är kurvor

Klicka på valfritt segment på en båge, en cirkel eller en polygon, så markeras hela kurvan. {{ui:Entitetsinfo}} visar då dess radie, dess segment, dess vinkel (för bågar) och dess längd. Skriv in en ny radie där för att ändra storleken runt dess centrum; ytor ritade i dess plan följer med. När en kurvas yta har tryckts eller dragits, står dess radie kvar.

## Rita med linjer

1. Tryck på {{key:L}}.
2. Klicka där linjen börjar.
3. Klicka där den slutar, eller skriv in en längd och tryck på {{key:Enter}}. Den inskrivna längden går i den riktning pekaren visar.
4. Fortsätt klicka. Varje klick startar nästa linje från slutet av den föregående.
5. Stäng konturen genom att klicka på den första punkten igen. När linjerna sluter en plan slinga fylls den med en yta, och verktyget slutar kedja. Tryck på {{key:Esc}} för att stoppa när som helst.

Linjer följer de röda, gröna och blå riktningarna när du kommer nära dem; linjen blir den färgen och tipset säger "På röd axel". Se [Riktningar och fångst](topic:inference) för hur du låser en riktning och fångar punkter.

### Vart en linje går när den inte rör något

- En linje som startar på en yta stannar i den ytans plan.
- En linje som startar på marken, eller i tomt utrymme, står kvar vågrätt med sin startpunkt. Om du ser modellen från kanten går den i stället i det vertikala planet som vetter mot dig.
- För att rita en linje till en exakt plats, skriv in en punkt: `[x,y,z]` för en punkt i modellen, eller `<dx,dy,dz>` för en förskjutning från startpunkten. Se [Skriv in exakta mått](topic:value-box).

## Dela en yta

Rita en linje över en yta, från en kant till en annan (eller från kant till kant via andra linjer). Ytan delas i två ytor. Var och en behåller sin sida och sin färg. Samma sak gäller för en rektangel eller cirkel ritad på en yta: formen blir en egen yta inuti den större, som nu har ett hål.

Så lägger du ut rum på en golvplatta, ett fönster i en vägg eller ett steg i en trappa: rita konturen på ytan och tryck eller dra sedan den nya ytan.

## Ytor som vetter åt fel håll

Varje yta har en framsida och en baksida. Baksidan visas blågrå. Ytor ritade på marken vetter uppåt; ytor ritade på en annan yta vetter åt samma håll som den.

Om en yta visar sin baksida där du väntar dig framsidan, markera den och klicka på {{ui:Vänd ytan}} i {{ui:Entitetsinfo}}.

## Vad du ser när du ritar

- En färgad markering där pekaren fångar, och dess namn i tipset nere till vänster.
- En förhandsvisning av linjen eller formen.
- Det levande måttet i värderutan. Du kan skriva över det när som helst.

## Om formen inte är där du väntade dig

- På en pekskärm, se [Felsökning](topic:troubleshooting#a-shape-starts-in-the-wrong-place-on-a-touch-screen).
- Om en linje fångade något långt bakom, vrid vyn lite: punkter som är dolda bakom en yta fångas aldrig, men punkter på dess kant gör det.
- Tryck på {{key:Mod+Z}} för att ångra den senaste formen; ett steg tar bort en linje eller en form.
