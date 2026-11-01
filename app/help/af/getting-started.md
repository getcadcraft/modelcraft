---
title: Begin met ModelCraft
summary: Waarvoor ModelCraft is, hoe om dit oop te maak, en jou eerste blok van 'n reghoek tot 'n gestoorde model.
keywords: begin, eerste model, begin, handleiding, inleiding, blok, massastudie, 3d, stoot trek, vinnige begin, begeleid, gids, beginner, nuut met 3d
from: d47ad719
---

ModelCraft is 'n 3D-modelleerder vir vroeë ontwerp: massastudies, kamerindelings, vinnige gebouvorms en die skadu's wat hulle werp. Jy teken plat vorms, trek hulle op tot soliede voorwerpe, en werk daarmee voort deur op hulle vlakke te teken. Dit loop in jou webblaaier, en jou modelle bly op jou rekenaar.

As jy al SketchUp gebruik het, dra die meeste van wat jy weet oor: dieselfde gereedskapletters, stoot/trek, 'n waardeblokkie vir presiese groottes, groepe en komponente. [Van ander modelleerders af](topic:coming-from) lys wat anders is.

## Maak ModelCraft oop

1. Maak ModelCraft oop in 'n huidige weergawe van Chrome, Edge, Firefox of Safari. Sien [Blaaiers en rekenaars](common:browsers).
2. Wag tot die 3D-aansig verskyn: 'n ligte (of donker) gebied in die middel met 'n kaart met die titel "Begin modelleer".

Die skerm het 'n nutsbalk langs die bokant, die {{ui:Uitlyner}} en {{ui:Komponente}} aan die linkerkant, die 3D-aansig in die middel, {{ui:Entiteitinligting}}, {{ui:Styl}} en {{ui:Tonele}} aan die regterkant, en 'n statusbalk langs die onderkant met die waardeblokkie en die eenhede. [Die ModelCraft-skerm](topic:workspace) verduidelik elke deel.

:::note
ModelCraft benodig WebGL, die 3D-tekenfunksie van jou blaaier. As die middel van die skerm leeg bly en die gereedskap niks doen nie, sien [Foutoplossing](topic:troubleshooting#the-3d-view-is-blank).
:::

## Kontroleer eers die eenhede

Kyk na die onderste regterhoek. Die eenhedekieser wys in watter eenhede lengtes gemeet word.

- 'n Nuwe model begin in **voet en duim** as jou blaaier op die Verenigde State ingestel is (ook Liberië en Mianmar), en in **millimeter** oral anders.
- Om dit te verander, kies 'n ander eenheid in die kieser: {{ui:vt en duim}}, {{ui:in}}, {{ui:m}}, {{ui:cm}} of {{ui:mm}}. Die model self verander nie in grootte nie; net hoe lengtes gewys word en hoe kaal getalle gelees word.

'n Getal wat jy sonder 'n eenheid tik, gebruik die model se eenheid. In 'n voet-en-duim-model is 'n kaal getal **duim**, dus beteken `120` 10 voet.

## Laat ModelCraft jou eerste model begelei

Nuut met 3D? Klik op die kaart {{ui:Begin modelleer}} op {{ui:Begeleide eerste model}} (dit is ook in {{ui:Aansigte}}). 'n Klein kaart lei jou deur vier stappe, van 'n plat reghoek tot 'n model gereed vir 'n 3D-drukker:

1. Teken 'n reghoek op die grond.
2. Trek dit op tot 'n boks.
3. Maak die boks een voorwerp ('n groep).
4. Kontroleer dit vir 3D-druk, en laai dan 'n 3MF- of STL-lêer af.

Die kaart hou die model dop, nie die knoppies nie: dit gaan na die volgende stap wanneer die stap klaar is, hoe jy dit ook gedoen het, en gaan 'n stap terug wanneer jy ontdoen. {{ui:Kies die gereedskap}} kies die gereedskap vir jou. Maak dit enige tyd toe met die {{ui:×}}.

## Teken jou eerste boks

1. Druk {{key:R}} vir die {{ui:Reghoek}}-gereedskap, of klik op {{ui:Reghoek}} in die {{ui:Teken}}-groep van die nutsbalk.
2. Klik een keer op die grond naby die middel van die aansig. Dit is die eerste hoek.
3. Beweeg die wyser weg. 'n Reghoek volg dit, en die waardeblokkie onderaan (genoem {{ui:Afmetings}}) wys sy grootte.
4. Tik die grootte en druk {{key:Enter}}: byvoorbeeld `4m,3m`, of `16',12'` in voet en duim. Jy hoef nie eers in die waardeblokkie te klik nie; as jy 'n getal tik, gaan dit daarheen.

   Jy kry 'n plat reghoek op die grond. Dit is 'n **vlak**: 'n oppervlak met rande om dit.

5. Druk {{key:P}} vir {{ui:Stoot/trek}}.
6. Klik op die reghoek, beweeg die wyser op, en klik weer. Of klik op die reghoek en tik 'n hoogte, soos `3m` of `10'`, en druk dan {{key:Enter}}.

   Die reghoek word 'n boks met 'n bokant, 'n onderkant en vier sye.

7. Druk {{key:Space}} om terug na {{ui:Kies}} te gaan, en klik dan op die bokant van die boks. {{ui:Entiteitinligting}} aan die regterkant wys sy oppervlakte.

:::tip
Jy kan ook sleep in plaas van twee keer klik: druk op die eerste hoek, sleep, en laat los op die tweede. Albei maniere werk vir elke tekengereedskap.
:::

## Kyk rond

- **Wentel:** sleep met die middelmuisknoppie (die wiel), of druk {{key:O}} en sleep met die linkerknoppie.
- **Pan:** sleep met die regterknoppie, of met die middelknoppie terwyl jy {{key:Shift}} hou.
- **Zoem:** draai die wiel. Dit zoem na wat ook al onder die wyser is.
- **Sien alles:** druk {{key:Shift+Z}}, of klik op {{ui:Omvang}}.

Op 'n snuffelpad of 'n aanraakskerm is die gebare anders. Sien [Wentel, pan en zoem](topic:orbit-pan-zoom).

## Ontdoen

Druk {{key:Mod+Z}} om te ontdoen en {{key:Mod+Y}} om te herdoen, of gebruik {{ui:Ontdoen}} en {{ui:Herdoen}} in die nutsbalk. ModelCraft onthou die laaste 200 stappe terwyl die model oop is. Die geskiedenis word nie in die lêer gestoor nie.

## Stoor jou model

1. Klik op {{ui:Stoor}} in die {{ui:Lêer}}-groep, of druk {{key:Mod+S}}.
2. Die blaaier laai 'n lêer af wat na jou model genoem is, soos `Untitled.modelcraft`. Die statusbalk sê waarheen dit gegaan het: "Gestoor Untitled.modelcraft na jou aflaaie."

**Stoor is 'n aflaai.** Elke stoor maak 'n nuwe kopie in jou aflaaie-vouer; dit skryf nie oor die lêer wat jy oopgemaak het nie. Om 'n netjiese projekvouer te hou, skuif of hernoem die lêer daar self. [Maak oop, stoor, voer in en voer uit](topic:files) verduidelik waarom en wat jy nog kan doen.

:::warning
ModelCraft stoor nie self nie. As jy die oortjie toemaak met ongestoorde veranderinge, vra die blaaier eers ("Verlaat bladsy?"). Kies om te bly, en stoor dan.
:::

## Kry hulp

Druk {{key:F1}} of klik op {{ui:Hulp}} in die programbalk om hierdie hulp langs die model oop te maak. Dit werk sonder 'n verbinding. Druk {{key:F1}} weer, of {{key:Esc}} binne die hulp, om dit toe te maak. Sien [Gebruik hierdie hulp](common:help).

## Waarheen om nou te gaan

- [Teken vlakke met lyne, reghoeke en sirkels](topic:draw-faces)
- [Stoot en trek vlakke in soliede voorwerpe](topic:push-pull)
- [Tik presiese groottes in die waardeblokkie](topic:value-box)
- [Elke sleutel- en muisaksie](topic:keyboard)
