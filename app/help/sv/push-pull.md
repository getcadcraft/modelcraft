---
title: Tryck och dra ytor till solider
summary: Gör en yta till en låda, gör en byggnad högre eller lägre, lägg till en utbyggnad eller ett urtag, och upprepa ett avstånd med ett dubbelklick.
keywords: tryck dra, extrudera, höjd, solid, låda, massa, högre, urtag, utbuktning, upprepa, dubbelklick, volym, nivå, på yta, plan, samma höjd
from: dc093c91
---

{{ui:Push/pull}} ({{key:P}}) flyttar en yta längs sin egen riktning: upp och ner för ett golv, in och ut för en vägg. Vad som händer beror på ytan.

## Gör en solid av en yta

1. Rita en yta, till exempel en rektangel på marken ([Rita ytor](topic:draw-faces)).
2. Tryck på {{key:P}}.
3. För musen över ytan. Den lyser upp.
4. Klicka på ytan och flytta pekaren. Ytan stiger (eller sjunker) och sidor växer från dess kanter. Värderutan ({{ui:Distance}}) och tipset visar avståndet.
5. Klicka för att avsluta, eller skriv ett avstånd och tryck på {{key:Enter}}: `3m`, `10'`, `2700` i en modell i millimeter.

   Nu har du en sluten solid. Markera allt och gruppera det (se [Grupper och komponenter](topic:groups-components)): {{ui:Entity info}} visar då "Solid: Ja" och dess volym.

En ensam yta kan gå åt båda hållen: dra upp den för en massa ovanför marken, tryck ner den för en grop eller en grund.

:::tip
I stället för att klicka två gånger, tryck på ytan, dra och släpp. På en pekskärm är det det naturliga sättet: tryck, dra, lyft.
:::

## Dra till höjden av något annat

Medan du drar, för musen över ett hörn, en mittpunkt, en kant eller en hjälplinje på en annan del av modellen. Ytan fastnar på den höjden och en markör visar punkten. Använd det för att göra två block lika höga, eller för att stanna vid en hjälplinje du placerat med [måttbandet](topic:guides-measure).

Du kan också föra musen över en yta som är parallell med den du trycker, till exempel toppen av ett annat block eller toppen av lådan som en pelare står på. Tipset säger "På yta", och ytan du trycker slutar i nivå med den. Tryck till exempel innerytan på ett rör nedåt tills den är i nivå med lådan under röret.

En yta i en vinkel mot den du trycker sätter ingen nivå. Avståndet följer pekaren. Så gör även en yta bakom den du trycker.

När en tryckt yta slutar i nivå med ytorna runt den igen försvinner dess sidor. Inga sidor med noll höjd blir kvar, och konturen du ritade finns kvar på ytan, så du kan trycka igen senare. För att göra den till en enda yta igen, radera konturens kanter med {{ui:Eraser}}: de två ytorna förenas.

## Gör en låda högre eller lägre

Tryck/dra toppen av en låda. Eftersom sidorna redan går rakt upp från den flyttas toppen bara: lådan blir högre eller lägre, och inga nya kanter görs.

- Trycker du toppen hela vägen ner till botten tas lådan bort. ModelCraft stannar vid noll höjd; den vänder aldrig lådan ut och in.
- Detsamma gäller för varje yta vars grannar alla går längs dess riktning, till exempel änden på en vägg.

## Lägg till en utbyggnad eller ett urtag

1. Rita en rektangel på sidan av en låda (börja på ytan; den stannar i ytans plan).
2. Tryck på {{key:P}} och dra den nya rektangeln **ut**. Det lägger till material: en utbyggnad, en skorsten, ett skyddstak.
3. Eller tryck den **in**. Det skär ett urtag: en veranda, en nisch, en indragen entré.

När den nya delens sidor linjerar med ytor som redan finns slås de ihop till en yta, så du får inga lösa streck på en plan vägg.

## Tryck hela vägen igenom

Att trycka en yta in i en solid stannar vid den första yta som ligger bakom. När den når den ytan skärs en öppning igenom. Så gör du fönster och dörrar i en vägg med tjocklek. Se [Skär en öppning genom en vägg](topic:openings).

## Skriv in ett avstånd

Efter att du klickat på ytan skriver du avståndet och trycker på {{key:Enter}}.

- Det inskrivna avståndet går åt det håll du rörde dig. Om du inte har flyttat än går det mot ytans framsida (ut ur en solid, upp från marken).
- Skriv ett negativt tal, till exempel `-500`, för att gå åt andra hållet.
- Om du ändrar dig före klicket trycker du på {{key:Esc}}. Ytan går tillbaka.

## Upprepa det senaste avståndet

Efter en tryck/dra dubbelklickar du på en annan yta med {{ui:Push/pull}} fortfarande valt. Den flyttas med samma avstånd. Det är det snabba sättet att ge flera väggar eller flera golv samma tjocklek eller höjd.

ModelCraft minns avståndet tills du byter till ett annat verktyg.

## Bra att veta

- Tryck/dra fungerar på en yta i taget. Om du klickar på något som inte är en yta säger statusraden "Push/pull fungerar på en yta. Klicka på en yta."
- För att trycka/dra en yta inuti en grupp eller komponent, öppna den först (dubbelklicka på den).
- Med **Kollision** på stannar en tryckning eller dragning som går in i en annan solid där den tar i, och tipset säger vad den tar i (objektets namn, eller "lös geometri i den här gruppen") och markerar ytorna den mötte. En ficka du trycker in i sin egen solid (till exempel en förskjuten yta som trycks tillbaka ner) hör till den solidet och stoppas aldrig av dess väggar.
- Två solider som trycks in i varandra skär eller förenar inte varandra: deras ytor bara går igenom. Se [Finns inte ännu](topic:not-built-yet).
