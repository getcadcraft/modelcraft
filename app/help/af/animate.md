---
title: Animeer enige eienskap, vorm dit as kurwes, en meng klippe
summary: Die Animeer-werkruimte sleutel 'n voorwerp se plek, draai en grootte, 'n lamp se helderheid, spreiding en kleur, die lens en 'n vlakmodel se vormsleutels; skelette buig 'n vlakmodel met bene en geverfde gewigte; IK en beperkings laat bene en voorwerpe reik, kyk na, kopieer, binne perke bly, aan ander hang of ander volg; starre liggame val, stapel en bots en word na sleutels gebak; dryers stel 'n waarde uit ander; die tydlyn se Krommes-aansig vorm elke verandering met Bézier-handvatsels en siklusse, en sy Klippe-aansig stoor animasies as aksies wat jy weer plaas en meng.
keywords: fisika, starre liggaam, starre liggame, simulasie, simuleer, laat val, val, swaartekrag, bots, botsing, stapel, stuit, wrywing, bak, gebak, ik, omgekeerde kinematika, beperking, beperkings, kyk na, spoor na, mik, kopieer transformasies, kopieer ligging, kopieer rotasie, beperk rotasie, perke, kind van, ouer, volg pad, pad, pool, fabrik, ketting, skelet, skelette, rig, rigging, bene, been, vel, velbind, gewigte, gewigverf, gewigverwing, vertexgroepe, outomatiese gewigte, been-hitte, pose, posemodus, dubbel kwaternioen, lineêre meng, vormsleutels, vormsleutel, morf, morfs, morfteikens, mengvorms, gesigs, uitdrukking, dryer, dryers, uitdrukkings, animeer-werkruimte, animeer, animasie, sleutelraam, sleutel, sleutels, eienskap, eienskappe, transformasie, ligging, rotasie, skaal, lamp, lig, helderheid, kleur, lens, gesigsveld, grafiekredigeerder, krommes, kromme, bezier, handvatsels, raaklyn, interpolasie, siklus, siklusse, herhaal, lus, ping pong, verskuiwing, dopeblad, kies sleutels, boksseleksie, kopieer sleutels, plak sleutels, rek sleutels, skaal sleutels, klippe, aksies, nla, meng, mengsel, invloed, wegsteek
from: 16d8e12f
---

Die [tydlyn](topic:animation) skuif die kamera en hele groepe en komponente. Die **Animeer**-werkruimte sleutel meer as dit, en die tydlyn kry twee bykomende aansigte om te vorm en te hergebruik wat jy gesleutel het.

## Maak dit oop

Kies {{ui:Animeer}} in die werkruimtelys op die nutsbalk. Die tydlyn open onder die aansig, die nutsbalk wys die Animeer-groepe ({{ui:Sleutels}}, {{ui:Speel}}, {{ui:Tydlyn}}) en die paneel regs lys wat jy by die speelkop kan sleutel.

## Sleutel 'n eienskap

Die paneel lys, by die speelkop:

- **Gekose voorwerp**: sy {{ui:Plaas}}, {{ui:Draai (°)}} en {{ui:Grootte}}, drie getalle elk. Tik 'n getal en druk {{key:Enter}}: dit word by die speelkop gesleutel en die voorwerp beweeg daarheen. Die diamant langs 'n ry sleutel die waarde soos dit nou is; 'n gevulde diamant beteken daar is reeds 'n sleutel by die speelkop.
- **Lampe**: elke lamp se {{ui:Helderheid (lm)}}, {{ui:Spreiding (°)}} (spotlampe) en {{ui:Kleur}}.
- **Kamera**: die {{ui:Lenshoek (°)}}, vir 'n zoem terwyl die kamera beweeg.

{{ui:Sleutel-transformasie}} (of {{key:I}}) sleutel die plek, draai en grootte van elke gekose groep of komponent op een slag; {{ui:Sleutelkamera}} (of {{key:K}}) sleutel die kamera. Met {{ui:Outosleutel}} aan, kry 'n groep waarvan plek, draai en grootte op hierdie manier gesleutel is 'n nuwe sleutel elke keer as jy dit skuif.

Draaie is drie hoeke, om X, dan Y, dan Z. 'n Draai wat verby 180° gesleutel is, gaan steeds dieselfde rigting om (190° bly 190°, nie −170° nie), sodat 'n wiel verskeie kere kan draai.

:::tip
'n Groep wat met {{ui:Sleutel gekies}} op die tydlyn gesleutel is, het sleutels vir die hele plasing. Die kromme-knoppie op sy ry maak dit plek-, draai- en groottekrommes (dieselfde plasing by elke sleutel) sodat jy dit in {{ui:Krommes}} kan vorm.
:::

## Vormsleutels (morfs)

'n **Vormsleutel** is 'n ander vorm van dieselfde [vlakmodel](topic:meshes): 'n glimlag op 'n gesig, 'n deur se uitbult, 'n gebuigde blaar. Die skuiwer meng van die vlakmodel soos dit is (0) na daardie vorm (1); verskeie sleutels tel bymekaar op.

1. Kies 'n vlakmodel in die Animeer-werkruimte: die paneel wys sy {{ui:Vormsleutels}}.
2. Klik {{ui:Voeg vormsleutel by}}. ModelCraft gaan na die [vlakmodel-werkruimte](topic:mesh-edit) met die nuwe sleutel wat geredigeer word: skuif punte, ekstrudeer, beeldhou — verander die vlakmodel na die vorm wat jy wil hê.
3. Kom terug na {{ui:Animeer}} en klik {{ui:Klaar}}. Die vlakmodel gaan terug soos dit was, en die sleutel hou jou verandering.

Sleep dan die sleutel se skuiwer (of tik 'n waarde) om dit in te meng. Die diamant sleutel die waarde by die speelkop, sodat 'n sleutel oor tyd kan groei en verdwyn; sodra dit 'n spoor het, word 'n nuwe waarde by die speelkop gesleutel. Die potlood redigeer die sleutel se vorm weer (die vlakmodel wys dit volledig tot {{ui:Klaar}}; {{ui:Kanselleer}} laat die sleutel soos dit was), die oog skakel die sleutel af, die bak verwyder dit.

'n Punt wat jy byvoeg terwyl jy 'n sleutel redigeer, behoort aan die vlakmodel self: dit bly waar jy dit gemaak het, in elke vorm.

:::note
Vormsleutels skuif die vlakmodel voor sy [modifiseerders](topic:modifiers): 'n Onderverdelingsmodifiseerder gladmaak die gemengde vorm. Weergegewe prente en video's wys die sleutels by elke raam.
:::

## Skelette: bene wat 'n vlakmodel buig

'n **Skelet** is 'n stel bene binne 'n [vlakmodel](topic:meshes). Plaas die bene en die vlakmodel volg, elke punt so ver as sy **gewigte** sê.

1. Kies die vlakmodel in die Animeer-werkruimte en klik {{ui:Voeg 'n skelet by}} in die paneel (of {{ui:Voeg been by}} in die {{ui:Rig}}-groep): die eerste been loop op in die middel van die vlakmodel vanaf sy voet.
2. Met 'n been gekies, voeg {{ui:Voeg 'n kindbeen by}} die volgende een by vanaf sy punt. Stel enige been se {{ui:Kop}}, {{ui:Punt}}, {{ui:Rol (°)}} en wat dit {{ui:Hang aan}} in die paneel; 'n been wat aan 'n ander hang, beweeg saam daarmee. Ontmerk {{ui:Beweeg die vlakmodel}} vir 'n been wat net ander stuur.
3. Klik {{ui:Outomatiese gewigte}}: elke been neem die punte wat die naaste daaraan is, en die houvat versprei glad oor die vlakmodel, sodat die punte tussen twee bene hulle deel. {{ui:Slegs naaste bene}} is 'n vinniger, harder verdeling.

**Plaas** die bene met {{ui:Pose}} ({{key:P}}): klik 'n been om dit te kies, sleep om dit om die aansig se as te draai, {{key:Shift}}-sleep om dit te skuif. Of tik sy {{ui:Plaas}}, {{ui:Draai (°)}} en {{ui:Grootte}} onder {{ui:Pose}}; draaie is in die been se eie asse, vanaf waar dit rus. Die diamante en {{ui:Sleutel die hele pose}} sleutel die pose by die speelkop; sodra 'n been sleutels het, sleutel om dit te plaas dit daar. {{ui:Stel hierdie been terug}} en {{ui:Stel die pose terug}} sit die bene terug in rus.

**Verf gewigte** ({{key:W}}) vir die gekose been: die vlakmodel wys in rus, elke vlak gekleur volgens hoeveel daardie been dit hou — rooi alles, blou niks. Verf om houvat by te voeg ({{key:Mod}} neem dit weg, {{key:Shift}} gladmaak); {{ui:Grootte (px)}} en {{ui:Sterkte}} stel die kwas. Met {{ui:Hou elke punt se gewigte op 1}} verwyder die gee van meer aan een been dieselfde van die ander. Elke streek is een stap van die model se ontdoen.

{{ui:Vel}} kies hoe 'n punt tussen bene beweeg: {{ui:Lineêr (vinnig)}} meng die bene se bewegings, en knyp 'n gebuigde gewrig 'n bietjie; {{ui:Dubbel kwaternioen (behou volume by gewrigte)}} draai die punt om die gewrig, sodat 'n elmboog of 'n knie sy dikte behou ('n been se {{ui:Grootte}} rek dan nie die vel nie).

:::note
Vormsleutels kom eerste, dan die skelet, dan die [modifiseerders](topic:modifiers). Die aansig, prente en video's wys almal die gepose vlakmodel; 'n vlakmodel se gewigte word saam daarmee gestoor, die bene en hul pose saam met die animasie.
:::

## IK en beperkings

'n **Beperking** skuif 'n been of 'n voorwerp na sy sleutels, volgens 'n reël. Kies die voorwerp (of, in 'n skelet, die been) en voeg een by onder {{ui:Beperkings van …}}; verskeie loop in die volgorde wat gelys is (die pyltjies verander dit), en elk het {{ui:Hoeveel}} (0 tot 1, gesleutel met sy diamant soos enige eienskap) en 'n aan/af-skakelaar.

| Beperking | Vir | Wat dit doen |
|---|---|---|
| {{ui:Reik (IK)}} | Bene | Die been en die bene waaraan dit hang ({{ui:Bene in die ketting}}) buig sodat sy punt die teiken bereik. Met twee bene en 'n {{ui:Pool (die buiging wys daarheen)}}, wys die elmboog of knie na die pool; langer kettings buig glad. Buite bereik wys die ketting reguit na die teiken. |
| {{ui:Kyk na}} | Albei | Draai sodat die {{ui:As wat wys}} na die teiken wys, en hou die {{ui:As wat op gehou word}} so na bo as wat dit kan. |
| {{ui:Kopieer transformasies}} | Albei | Neem die teiken se plek, draai of grootte — die wat aangeklik is. |
| {{ui:Perke}} | Albei | Hou sy eie plek, draai (grade) of grootte tussen 'n {{ui:min}} en 'n {{ui:maks}} per as; laat 'n paar leeg om daardie as vry te laat. |
| {{ui:Kind van}} | Albei | Beweeg saam met die teiken asof dit daaraan hang, vanaf waar albei was toe jy die teiken gekies het. |
| {{ui:Volg pad}} | Voorwerpe | Sit op 'n [kromme-voorwerp](topic:curves) by {{ui:Langs die kromme}} (0 sy begin, 1 sy einde; sleutel dit om te reis), en met {{ui:Draai langs die kromme}} wys dit langs die kromme. |

'n Teiken is nog 'n voorwerp in die oop groep, 'n been van dieselfde skelet, of {{ui:'n Punt}} wat jy tik ('n voorwerp se punt is in die model se koördinate, 'n been se punt in sy vlakmodel se koördinate). Vir 'n IK-been, plaas die teiken waar die voet moet wees en sleutel die teiken, of sleutel {{ui:Hoeveel}} om die been tussen die sleutels en die IK oor te gee.

:::tip
'n Voorwerp wat na een kyk wat 'n pad volg, sien dit op die pad: ModelCraft werk eers die teikens uit, ongeag die volgorde van die voorwerpe.
:::

## Fisika: laat val, stapel en bots

Laat voorwerpe val en teen mekaar stamp, en hou dan die resultaat as sleutels.

1. Kies 'n groep, komponent of vlakmodel en stel sy {{ui:Starre liggaam}} onder {{ui:Fisika}}: {{ui:Val en bots}} (dit beweeg) of {{ui:Bly staan, pas in die weg}} (’n tafel, 'n muur, 'n hellingbaan). Gee 'n vallende een sy {{ui:Vorm}} — {{ui:Blok (sy grense)}} of {{ui:Bal (rond sy grense)}} — sy {{ui:Massa (kg)}}, {{ui:Wrywing}} en {{ui:Stuit}} (0 bons dood, 1 stuit so hoog terug).
2. Onder {{ui:Die hele model}}, stel {{ui:Vanaf (s)}} en {{ui:Tot (s)}}, die {{ui:Swaartekrag (m/s², af)}} en of daar {{ui:'n Grond om op te land}} is (en sy hoogte).
3. Klik {{ui:Bak fisika}} (in die paneel of die {{ui:Fisika}}-groep). Elke vallende voorwerp kry 'n plek-, draai- en groottesleutel op elke raam tussen die twee tye; speel dit soos enige animasie.

Weer bak vervang daardie sleutels; {{ui:Verwyder gebakte sleutels}} haal dit af. Die voorwerpe begin in rus, waar hul sleutels, krommes en beperkings hulle plaas by {{ui:Vanaf (s)}} ('n gesleutelde beweging daarvoor gaan nie in die val voort nie). Meer {{ui:Stappe per raam}} hou hoë stapels stabieler; die statusbalk sê wanneer iets aan die einde nog beweeg.

:::note
Vorms is bokse en balle rondom elke voorwerp se grense; 'n boks raak met sy hoeke, randmiddes en vlakmiddes, so bokse stapel en kantel soos jy sou verwag. Materiaal, vloeistowwe, gewrigte tussen voorwerpe en presiese vorms is nie gebou nie.
:::

## Dryers

'n **Dryer** stel 'n vormsleutel uit ander dinge in plaas van met die hand: maak 'n sleutel se dryer oop (die sakrekenaarknoppie), skryf 'n **uitdrukking**, en gee elke naam daarin wat dit lees ({{ui:Lees}}): die tyd in sekondes, die raam, 'n plasing se plek, draai of grootte langs X, Y of Z, 'n lamp se helderheid, of 'n ander vormsleutel. Byvoorbeeld, met `v` wat 'n deur se draai om Z lees, open `clamp(v / 90, 0, 1)` 'n vorm soos die deur oopgaan.

Uitdrukkings gebruik getalle, die name, `+ - * / % ^` en hakies, en die funksies `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg` met `pi` en `e`. 'n Fout word aangewys en verander niks nie. 'n Gedrewe sleutel se skuiwer wys die dryer se waarde; die dryer wen van die sleutel se spoor totdat jy dit verwyder.

## Kies en verander sleutels (Sleutels-aansig)

{{ui:Sleutels}} wys 'n ry per spoor: die kamera, elke bewegende groep, en elke eienskap (“Lamp 2 · Helderheid (lm)”; eienskapsleutels is rond).

- Klik 'n sleutel om dit te kies; {{key:Shift}}-klik of {{key:Mod}}-klik voeg sleutels by of verwyder hulle uit die keuse. {{key:Shift}}-sleep oor die rye trek 'n boks wat elke sleutel daarin byvoeg.
- Sleep 'n gekose sleutel om almal saam te skuif; {{key:Left}} / {{key:Right}} skuif hulle een raam ({{key:Shift}}: tien).
- {{key:Mod+C}} kopieer die gekose sleutels, {{key:Mod+V}} plak hulle vanaf die speelkop op dieselfde spore ('n ander ModelCraft-oortjie kan hulle ook plak).
- {{ui:Rek}} versprei die gekose sleutels uit die speelkop uit volgens die getal daarnaas (2 = twee keer so ver uitmekaar; 0.5 trek hulle nader).
- Die versagtingslys stel hoe elke gekose sleutel na die volgende beweeg.

## Vorm die krommes (Krommes-aansig)

{{ui:Krommes}} is 'n grafiek van elke getal oor tyd: tyd langs, waarde op. Merk die krommes aan wat in die lys aan die linkerkant wys (X, Y en Z is rooi, groen en blou).

- Klik 'n sleutel (’n vierkant) om dit te kies, {{key:Shift}}-klik vir meer, of sleep 'n boks. Sleep 'n gekose sleutel om sy tyd en waarde te verander; met verskeie gekies, skuif sleep hulle saam in tyd.
- 'n Gekose sleutel wys sy twee **handvatsels**. Sleep een om die kromme aan daardie kant te vorm. {{ui:Handvatsels}} sê hoe hulle optree: {{ui:Outomaties}} (’n gladde kromme deur die sleutels rondom), {{ui:Wys na die volgende sleutel}}, {{ui:Uitgelyn}} (die twee bly in 'n reguit lyn, sodat die kromme geen hoek het nie) of {{ui:Vry}}.
- {{ui:Uit die gekose sleutels}} stel hoe elke gekose sleutel na die volgende beweeg: {{ui:Kromme (handvatsels)}}, {{ui:Gladmaak}}, {{ui:Gelykmatig}}, {{ui:Stadig in en uit}} of {{ui:Hou}}.
- {{ui:Voor}} en {{ui:Na}} stel wat 'n kromme buite sy sleutels doen: {{ui:Hou}} (bly by die eerste of laaste waarde), {{ui:Herhaal}}, {{ui:Heen en weer}}, of {{ui:Herhaal en gaan voort}} (elke herhaling begin waar die laaste een geëindig het: 'n wiel rol aan, 'n loper loop aan).
- Die wiel zoem ({{key:Mod}}: slegs waardes; {{key:Shift}}: slegs tyd); sleep met die middelknoppie of met {{key:Alt}} om te pan; {{ui:Wys alles}} of {{key:Home}} pas elke gewysde kromme in. Klik op leë ruimte om die speelkop daarheen te skuif. {{key:Delete}} verwyder die gekose sleutels.

Handvatsels word verhoed om in tyd oor mekaar te kruis, so 'n kromme loop nooit agteruit nie.

## Hergebruik animasies (Klippe-aansig)

'n **Klip** speel 'n gestoorde animasie (’n **aksie**) op die tydlyn. Klippe word in volgorde gemeng, die laer rye oor die hoër een; die tydlyn se eie spore gaan bo elke klip.

1. Sleutel die groepe en lampe soos gewoonlik, en klik dan {{ui:Maak 'n klip}} in {{ui:Klippe}} en gee die aksie 'n naam. Die spore word die aksie, en 'n klip speel dit waar hulle was (die kamera bly op die tydlyn).
2. Om dit weer te gebruik, kies die aksie en klik {{ui:Voeg klip by}}: 'n nuwe klip begin by die speelkop.
3. Sleep 'n klip langs sy ry om dit te skuif; klik dit om {{ui:Begin (s)}}, {{ui:Spoed}} (2 = twee keer so vinnig), {{ui:Herhalings}}, {{ui:Hoeveel}} (0 tot 1), {{ui:Meng}} ({{ui:Vervang}}, of {{ui:Voeg bo-op by}} die klippe voor dit), {{ui:Buite die klip}} (niks, hou sy einde, of hou albei eindes) en {{ui:Demp}} te stel. Die pyltjies verander die volgorde; die bak verwyder dit (’n aksie wat geen klip meer gebruik nie, gaan saam daarmee).

'n Klip met minder as volle {{ui:Hoeveel}} meng van wat onder dit is: die klip voor dit, of die lamp of plasing soos dit is sonder die animasie.

## Wat waar speel

| Wat | In die aansig | In 'n gerendeerde video |
|---|---|---|
| Kamera-sleutels, lenshoek met kamera-sleutels | Ja | Ja |
| Plek, draai en grootte (sleutels, krommes, klippe) | Ja | Ja |
| Lamp-helderheid, spreiding en kleur | Ja | Nog nie: die video gebruik die lampe soos hulle is wanneer dit begin (sien [wat nog nie gebou is nie](topic:not-built-yet)) |
| Lenshoek sonder kamera-sleutels | Ja | Nog nie: sleutel die kamera ook |
| Vormsleutels en dryers | Ja | Ja |
| Skelette (gepose vlakmodelle) | Ja | Ja |
| IK en beperkings | Ja | Ja |
| Gebakte fisika (sleutels) | Ja | Ja |

Alles word in die `.modelcraft`-lêer gestoor saam met die res van die animasie, en die tydlyn se {{ui:Ontdoen}} en {{ui:Herdoen}} neem enigiets daarvan terug.
