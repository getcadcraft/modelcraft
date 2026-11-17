---
title: Animera valfri egenskap, forma den som kurvor och blanda klipp
summary: Arbetsytan Animera nycklar ett objekts plats, vridning och storlek, en lampas ljusstyrka, spridning och färg, linsen och ett näts formnycklar; skelett böjer ett nät med ben och målade vikter; IK och villkor gör att ben och objekt når, tittar mot, kopierar, håller sig inom gränser, hänger från eller följer andra; stela kroppar faller, staplas och kolliderar och bakas till nycklar; drivare sätter ett värde från andra; tidslinjens vy Kurvor formar varje ändring med Bézier-handtag och cykler, och vyn Klipp sparar animeringar som åtgärder som du placerar ut igen och blandar.
keywords: fysik, stel kropp, stela kroppar, simulering, simulera, släppa, falla, tyngdkraft, kollidera, kollision, stapla, studsa, friktion, baka, bakad, ik, invers kinematik, villkor, titta mot, sikta, kopiera transformeringar, kopiera plats, kopiera rotation, begränsa rotation, gränser, underordnad till, förälder, följ bana, bana, pol, fabrik, kedja, skelett, rigg, riggning, ben, hud, skinning, vikter, viktmålning, vertexgrupper, automatiska vikter, benvärme, pose, posläge, dubbel kvaternion, linjär blandning, formnycklar, formnyckel, morf, morfer, blandformer, ansikte, uttryck, drivare, arbetsytan animera, animera, animering, nyckelbildruta, nyckel, nycklar, egenskap, egenskaper, transformering, plats, rotation, skala, lampa, ljus, ljusstyrka, färg, lins, synfält, fov, grafeditor, kurvor, kurva, bezier, handtag, tangent, interpolation, cykel, cykler, upprepa, loop, fram och tillbaka, förskjutning, dopesheet, markera nycklar, markeringsruta, kopiera nycklar, klistra in nycklar, sträck nycklar, skala nycklar, klipp, åtgärder, nla, blanda, blandning, påverkan, lagra undan
from: 16d8e12f
---

Den [tidslinjen](topic:animation) flyttar kameran och hela grupper och komponenter. Arbetsytan **Animera** nycklar mer än så, och tidslinjen får två vyer till för att forma och återanvända det du nyckat.

## Öppna den

Välj {{ui:Animate}} i listan över arbetsytor på verktygsfältet. Tidslinjen öppnas under vyn, verktygsfältet visar grupperna för Animera ({{ui:Keys}}, {{ui:Play}}, {{ui:Timeline}}) och panelen till höger listar vad du kan nyckla vid spelhuvudet.

## Nyckla en egenskap

Panelen listar, vid spelhuvudet:

- **Valt objekt**: dess {{ui:Place}}, {{ui:Turn (°)}} och {{ui:Size}}, tre tal var. Skriv ett tal och tryck {{key:Enter}}: det nyckas vid spelhuvudet och objektet flyttas dit. Diamanten bredvid en rad nyckar värdet så som det är nu; en fylld diamant betyder att det redan finns en nyckel vid spelhuvudet.
- **Lampor**: varje lampas {{ui:Brightness (lm)}}, {{ui:Spread (°)}} (spotlampor) och {{ui:Colour}}.
- **Kamera**: {{ui:Lens angle (°)}}, för en zoom medan kameran rör sig.

{{ui:Key transform}} (eller {{key:I}}) nyckar plats, vridning och storlek för varje vald grupp eller komponent på en gång; {{ui:Key camera}} (eller {{key:K}}) nyckar kameran. Med {{ui:Auto key}} på får en grupp vars plats, vridning och storlek nyckats på detta sätt en ny nyckel varje gång du flyttar den.

Vridningar är tre vinklar, kring X, sedan Y, sedan Z. En vridning som nyckats över 180° fortsätter åt samma håll (190° förblir 190°, inte −170°), så att ett hjul kan snurra flera varv.

:::tip
En grupp nyckad med {{ui:Key selected}} på tidslinjen har nycklar för hela placeringen. Kurvknappen på dess rad gör dem till kurvor för plats, vridning och storlek (samma placering vid varje nyckel) så att du kan forma dem i {{ui:Curves}}.
:::

## Formnycklar (morfer)

En **formnyckel** är en annan form av samma [nät](topic:meshes): ett leende på ett ansikte, en dörrs bula, ett böjt blad. Dess reglage blandar från nätet som det är (0) till den formen (1); flera nycklar adderas.

1. Välj ett nät i arbetsytan Animera: panelen visar dess {{ui:Shape keys}}.
2. Klicka {{ui:Add shape key}}. ModelCraft går till [arbetsytan Nät](topic:mesh-edit) med den nya nyckeln under redigering: flytta punkter, extrudera, skulptera. Ändra nätet till den form du vill ha.
3. Gå tillbaka till {{ui:Animate}} och klicka {{ui:Done}}. Nätet går tillbaka som det var, och nyckeln behåller din ändring.

Dra sedan nyckelns reglage (eller skriv ett värde) för att blanda in den. Diamanten nyckar värdet vid spelhuvudet, så en nyckel kan växa och tona bort över tid; när den har ett spår läggs ett nytt värde till vid spelhuvudet. Pennan redigerar nyckelns form igen (nätet visar den helt tills {{ui:Done}}; {{ui:Cancel}} lämnar nyckeln som den var), ögat stänger av nyckeln och papperskorgen tar bort den.

En punkt du lägger till när du redigerar en nyckel hör till nätet självt: den står kvar där du placerade den, i alla former.

:::note
Formnycklar flyttar nätet före dess [modifierare](topic:modifiers): en Subdivision-modifierare jämnar ut den blandade formen. Renderade bilder och videor visar nycklarna vid varje bildruta.
:::

## Skelett: ben som böjer ett nät

Ett **skelett** är en uppsättning ben inuti ett [nät](topic:meshes). Posera benen så följer nätet, varje punkt så mycket som dess **vikter** anger.

1. Välj nätet i arbetsytan Animera och klicka {{ui:Add an armature}} i panelen (eller {{ui:Add bone}} i gruppen {{ui:Rig}}): det första benet går upp genom mitten av nätet från dess fot.
2. Med ett ben valt lägger {{ui:Add a child bone}} till nästa från dess spets. Ställ in ett bens {{ui:Head}}, {{ui:Tip}}, {{ui:Roll (°)}} och vad det {{ui:Hangs from}} i panelen; ett ben som hänger från ett annat rör sig med det. Avmarkera {{ui:Moves the mesh}} för ett ben som bara styr andra.
3. Klicka {{ui:Automatic weights}}: varje ben tar hand om punkterna närmast sig, och greppet sprids mjukt över nätet, så att punkterna mellan två ben delar på dem. {{ui:Nearest bones only}} är en snabbare och hårdare delning.

**Posera** benen med {{ui:Pose}} ({{key:P}}): klicka på ett ben för att välja det, dra för att vrida det kring vyns axel, {{key:Shift}}-dra för att flytta det. Eller skriv dess {{ui:Place}}, {{ui:Turn (°)}} och {{ui:Size}} under {{ui:Pose}}; vridningar är i benets egna axlar, från dess vilolägen. Diamanterna och {{ui:Key the whole pose}} nyckar posen vid spelhuvudet; när ett ben har nycklar nyckas det där när du posar det. {{ui:Reset this bone}} och {{ui:Reset the pose}} sätter tillbaka benen i vila.

**Måla vikter** ({{key:W}}) för det valda benet: nätet visas i vila, varje yta färgad efter hur mycket det benet håller den: rött allt, blått inget. Måla för att lägga till grepp ({{key:Mod}} tar bort det, {{key:Shift}} jämnar ut); {{ui:Size (px)}} och {{ui:Strength}} ställer in penseln. Med {{ui:Keep each point's weights adding up to 1}} tar det att ge ett ben mer lika mycket från de andra. Varje penndrag är ett steg i modellens ångra.

{{ui:Skin}} väljer hur en punkt mellan ben rör sig: {{ui:Linear (fast)}} blandar benens rörelser och klämmer lite på en böjd led; {{ui:Dual quaternion (keeps volume at joints)}} vrider punkten runt leden i stället, så att en armbåge eller ett knä behåller sin tjocklek (ett bens {{ui:Size}} töjer då inte huden).

:::note
Formnycklar kommer först, sedan skelettet, sedan [modifierarna](topic:modifiers). Vyn, bilder och videor visar alla det posade nätet; ett nätets vikter sparas med nätet, och benen och deras pose sparas med animeringen.
:::

## IK och villkor

Ett **villkor** flyttar ett ben eller ett objekt efter dess nycklar, enligt en regel. Välj objektet (eller, i ett skelett, benet) och lägg till ett under {{ui:Constraints of …}} (Villkor för …); flera körs i den ordning de står (pilarna ändrar ordningen), och varje har {{ui:How much}} (0 till 1, nyckas med sin diamant som vilken egenskap som helst) och en på/av-knapp.

| Villkor | För | Vad det gör |
|---|---|---|
| {{ui:Reach (IK)}} | Ben | Benet och de ben det hänger från ({{ui:Bones in the chain}}) böjs så att dess spets når målet. Med två ben och en {{ui:Pole (the bend points to it)}} pekar armbågen eller knät mot polen; längre kedjor böjs mjukt. Utom räckhåll pekar kedjan rakt mot målet. |
| {{ui:Look at}} | Båda | Vrids så att {{ui:Axis that points}} vetter mot målet, och håller {{ui:Axis kept up}} så nära uppåt som den kan. |
| {{ui:Copy transforms}} | Båda | Tar målets plats, vridning eller storlek, de som är ikryssade. |
| {{ui:Limits}} | Båda | Håller sin egen plats, vridning (grader) eller storlek mellan ett {{ui:min}} och ett {{ui:max}} per axel; lämna ett par tomt för att lämna den axeln fri. |
| {{ui:Child of}} | Båda | Rör sig med målet som om den hängde från det, från där båda var när du valde målet. |
| {{ui:Follow path}} | Objekt | Sitter på ett [kurvobjekt](topic:curves) vid {{ui:Along the curve}} (0 dess start, 1 dess slut; nyckla den för att färdas), och med {{ui:Turn along the curve}} vetter den längs den. |

Ett mål är ett annat objekt i den öppna gruppen, ett ben i samma skelett, eller {{ui:A point}} som du skriver in (ett objekts punkt är i modellens koordinater, ett bens i dess nätets). För ett IK-ben: placera målet där foten ska vara och nyckla målet, eller nyckla {{ui:How much}} för att överlämna benet mellan nycklarna och IK:n.

:::tip
Ett objekt som tittar mot ett som följer en bana ser det på banan: ModelCraft räknar ut målen först, oavsett ordningen på objekten.
:::

## Fysik: falla, stapla och kollidera

Låt objekt falla och stöta mot varandra, och behåll resultatet som nycklar.

1. Välj en grupp, komponent eller ett nät och ställ in dess {{ui:Rigid body}} under {{ui:Physics}}: {{ui:Falls and collides}} (den rör sig) eller {{ui:Stays put, gets in the way}} (ett bord, en vägg, en ramp). Ge ett fallande objekt dess {{ui:Shape}}, {{ui:Box (its bounds)}} eller {{ui:Ball (round its bounds)}}, sin {{ui:Mass (kg)}}, {{ui:Friction}} och {{ui:Bounce}} (0 duns, 1 studsar tillbaka lika högt).
2. Under {{ui:The whole model}} anger du {{ui:From (s)}} och {{ui:To (s)}}, {{ui:Gravity (m/s², down)}} och om det finns {{ui:A ground to land on}} (och dess höjd).
3. Klicka {{ui:Bake physics}} (i panelen eller gruppen {{ui:Physics}}). Varje fallande objekt får en nyckel för plats, vridning och storlek på varje bildruta mellan de två tiderna; spela upp den som vilken animering som helst.

Om du bakar igen ersätts de nycklarna; {{ui:Remove baked keys}} tar bort dem. Objekten startar i vila, där deras nycklar, kurvor och villkor placerar dem vid {{ui:From (s)}} (en nyckelrörelse före det fortsätter inte in i fallet). Fler {{ui:Steps a frame}} gör höga staplar stadigare; statusfältet säger när något fortfarande rör sig i slutet.

:::note
Former är lådor och klot runt varje objekts begränsningsvolym. En låda tar i med sina hörn, kantmittpunkter och ytmittpunkter, så lådor staplas och välter som man väntar sig. Tyg, vätskor, leder mellan objekt och exakta former är inte byggda.
:::

## Drivare

En **drivare** sätter en formnyckel från andra saker i stället för för hand: öppna en nyckels drivare (räknarknappen), skriv ett **uttryck** och ange för varje namn i det vad det läser ({{ui:Reads}}): tiden i sekunder, bildrutan, en placerings plats, vridning eller storlek längs X, Y eller Z, en lampas ljusstyrka eller en annan formnyckel. Till exempel, med `v` som läser en dörrs vridning kring Z, öppnar `clamp(v / 90, 0, 1)` en form när dörren öppnas.

Uttryck använder tal, namnen, `+ - * / % ^` och parenteser, och funktionerna `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg` med `pi` och `e`. Ett fel påpekas och ändrar ingenting. En styrd nycklars reglage visar drivarens värde; drivaren går före nyckelns spår tills du tar bort den.

## Välj och ändra nycklar (vyn Nycklar)

{{ui:Keys}} visar en rad per spår: kameran, varje rörlig grupp och varje egenskap (”Lampa 2 · Ljusstyrka (lm)”; egenskapsnycklar är runda).

- Klicka på en nyckel för att välja den; {{key:Shift}}-klick eller {{key:Mod}}-klick lägger till eller tar bort nycklar från urvalet. {{key:Shift}}-dra över raderna för att rita en ruta som lägger till varje nyckel i den.
- Dra en vald nyckel för att flytta alla; {{key:Left}} / {{key:Right}} flyttar dem en bildruta ({{key:Shift}}: tio).
- {{key:Mod+C}} kopierar de valda nycklarna, {{key:Mod+V}} klistrar in dem från spelhuvudet på samma spår (en annan ModelCraft-flik kan också klistra in dem).
- {{ui:Stretch}} sprider de valda nycklarna ut från spelhuvudet med talet bredvid (2 = dubbelt så långt isär; 0.5 drar ihop dem).
- Mjukhetslistan anger hur varje vald nyckel rör sig vidare.

## Forma kurvorna (vyn Kurvor)

{{ui:Curves}} är en graf över varje tal i tiden: tid längs, värde uppåt. Bocka i de kurvor som ska visas i listan till vänster (X, Y och Z är röd, grön och blå).

- Klicka på en nyckel (en kvadrat) för att välja den, {{key:Shift}}-klicka för fler, eller dra en ruta. Dra en vald nyckel för att ändra dess tid och värde; med flera valda flyttar dra dem längs tiden.
- En vald nyckel visar sina två **handtag**. Dra ett för att forma kurvan på den sidan. {{ui:Handles}} anger hur de beter sig: {{ui:Automatic}} (en mjuk kurva genom nycklarna omkring), {{ui:Pointing at the next key}}, {{ui:Aligned}} (de två ligger kvar på en rak linje, så kurvan har inget hörn) eller {{ui:Free}}.
- {{ui:From the chosen keys}} sätter hur varje vald nyckel rör sig vidare till nästa: {{ui:Curve (handles)}}, {{ui:Smooth}}, {{ui:Steady}}, {{ui:Slow in and out}} eller {{ui:Hold}}.
- {{ui:Before}} och {{ui:After}} sätter vad en kurva gör utanför sina nycklar: {{ui:Hold}} (stannar vid första eller sista värdet), {{ui:Repeat}}, {{ui:Back and forth}} eller {{ui:Repeat and carry on}} (varje upprepning börjar där den förra slutade: ett hjul fortsätter rulla, en gående fortsätter gå).
- Hjulet zoomar ({{key:Mod}}: bara värden, {{key:Shift}}: bara tid); dra med mittenknappen eller med {{key:Alt}} för att panorera; {{ui:Show all}} eller {{key:Home}} anpassar alla synliga kurvor. Klicka på tom yta för att flytta spelhuvudet dit. {{key:Delete}} tar bort de valda nycklarna.

Handtagen hålls från att korsa varandra i tid, så en kurva går aldrig baklänges.

## Återanvänd animeringar (vyn Klipp)

Ett **klipp** spelar en sparad animering (en **åtgärd**) på tidslinjen. Klipp blandas i ordning, de nedre raderna över de övre; tidslinjens egna spår går över alla klipp.

1. Nyckla grupperna och lamporna som vanligt, klicka sedan {{ui:Make a clip}} i {{ui:Clips}} och ge åtgärden ett namn. Spåren blir åtgärden, och ett klipp spelar den där de var (kameran stannar på tidslinjen).
2. För att använda den igen, välj åtgärden och klicka {{ui:Add clip}}: ett nytt klipp startar vid spelhuvudet.
3. Dra ett klipp längs dess rad för att flytta det; klicka på det för att ställa in {{ui:Start (s)}}, {{ui:Speed}} (2 = dubbelt så snabbt), {{ui:Repeats}}, {{ui:How much}} (0 till 1), {{ui:Mix}} ({{ui:Replace}}, eller {{ui:Add on top}} av klippen före det), {{ui:Outside the clip}} (inget, håll dess slut, eller håll båda ändarna) och {{ui:Mute}}. Pilarna ändrar ordningen; papperskorgen tar bort det (en åtgärd som inget klipp använder längre går med).

Ett klipp med mindre än full {{ui:How much}} blandas från det som ligger under: klippet före det, eller lampan eller placeringen som den är utan animeringen.

## Vad spelas var

| Vad | I vyn | I en renderad video |
|---|---|---|
| Kameranycklar, linsvinkel med kameranycklar | Ja | Ja |
| Plats, vridning och storlek (nycklar, kurvor, klipp) | Ja | Ja |
| Lampans ljusstyrka, spridning och färg | Ja | Inte än: videon använder lamporna som de är när den startar (se [vad som inte är byggt ännu](topic:not-built-yet)) |
| Linsvinkel utan kameranycklar | Ja | Inte än: nyckla kameran också |
| Formnycklar och drivare | Ja | Ja |
| Skelett (posade nät) | Ja | Ja |
| IK och villkor | Ja | Ja |
| Bakad fysik (nycklar) | Ja | Ja |

Allt sparas i `.modelcraft`-filen tillsammans med resten av animeringen, och tidslinjens {{ui:Undo}} och {{ui:Redo}} tar tillbaka vilket som helst av det.
