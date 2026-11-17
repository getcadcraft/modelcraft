---
title: Stoor aansigte as tonele
summary: Stoor 'n kamera en styl as 'n toneel, dateer dit op en hernoem dit, en blaai of speel deur tonele om 'n ontwerp aan te bied.
keywords: toneel, aansig, gestoorde aansig, kamera, aanbieding, animasie, speel, skyfievertoning, page up, page down, oortjies, wandeling
from: 38680d6e
---

'n **Toneel** onthou 'n kameraposisie, 'n styl en wat weggesteek is: waarvandaan jy kyk, perspektief of parallel, die vlakstyl, rande, die son-instellings, weggesteekte groepe, afgeskakelde etikette en die snit. Tonele word in die `.modelcraft`-lêer gestoor.

## Voeg 'n toneel by

1. Stel die aansig op: wentel, zoem, kies 'n styl, stel die son.
2. In die {{ui:Tonele}}-paneel regs, klik {{ui:Voeg toneel by}}.

   Die toneel verskyn in die lys, genoem "Toneel 1", "Toneel 2" en so aan, en as 'n oortjie bo-oor die 3D-aansig. Die statusbalk sê "Toneel 1 gestoor: hierdie kamera, styl en wat weggesteek is."

## Gaan na 'n toneel

- Klik sy oortjie oor die 3D-aansig, of sy naam in die {{ui:Tonele}}-lys.
- Of druk {{key:PageDown}} vir die volgende toneel en {{key:PageUp}} vir die vorige. {{ui:Volgende}} en {{ui:Vorige}} onder die lys doen dieselfde.

Die kamera gly na die toneel in 'n bietjie meer as 'n halwe sekonde. As jou rekenaar ingestel is om beweging te verminder, spring dit daarheen.

## Verander, hernoem of skrap 'n toneel

Elke toneel in die lys het drie klein knoppies na sy naam:

- **Dateer op** (die sirkelvormige pyltjies): stoor die huidige kamera, styl en wat weggesteek is in daardie toneel. "Toneel 2 opgedateer."
- **Hernoem** (die potlood): open 'n "Hernoem toneel"-dialoog. Tik die nuwe naam en klik {{ui:Stoor}}.
- **Skrap** (die asblik): verwyder die toneel. "Toneel 2 geskrap. Ctrl+Z bring dit terug."

Tonele byvoeg, opdateer, hernoem en skrap is stappe in ontdoen, soos veranderinge aan die model.

## Sluit 'n toneel se kamera

Wanneer jy dieselfde aansig weer en weer weergee soos die ontwerp verander, sluit die toneel se kamera sodat die aansig nooit per ongeluk beweeg nie.

1. Klik in die {{ui:Tonele}}-lys die **slot**-knoppie (die oop hangslot) na die toneel se naam. Dit sluit, en die toneel se oortjie oor die 3D-aansig wys 'n klein hangslot. Die statusbalk sê "Toneel 2: kamera gesluit."
2. Gaan na die toneel wanneer jy wil weergee: die kamera gaan terug na presies die gestoorde aansig, sodat prente wat daarvan gemaak is, met die vroeëres ooreenstem.

Terwyl die kamera gesluit is, stoor **Dateer op** steeds die styl en wat weggesteek is in die toneel, maar die kamera bly waar dit was, selfs al het jy weggewentel. Klik die hangslot weer om dit oop te sluit; Dateer op stoor dan die huidige aansig weer. Sluit en oopsluit is stappe in ontdoen, en die slot word in die `.modelcraft`-lêer gestoor.

## Bied aan

1. Voeg twee of meer tonele by.
2. Klik {{ui:Speel}} onder die lys. ModelCraft gaan elke paar sekondes na die volgende toneel en gaan na die laaste terug na die eerste.
3. Klik {{ui:Stop}} (dieselfde knoppie) of druk {{key:Esc}} om te stop.

Vir 'n sonstudie, voeg een toneel per uur by met slegs die {{ui:Tyd}} verander, en speel hulle dan. Sien [Styl en sonskaduwees](topic:styles-shadows#a-sun-study).

Om aan te bied sonder die balke, druk {{key:Ctrl+Shift+F}} twee keer: volskerm, dan volskerm met die balke weggesteek. Die toneel-oortjies bly oor die aansig.

## Wat 'n toneel wys

'n Toneel onthou wat weggesteek was toe jy dit gestoor het: groepe en komponente wat jy [versteek](topic:hide-isolate) het, [etikette](topic:tags) wat jy afgeskakel het, en watter [snitvlak](topic:sections) snitte. Om na die toneel te gaan, versteek en wys hulle weer. So kan een toneel die hele huis wys, die volgende die huis met die dak se etiket af, die volgende 'n snit daardeur.

Weggesteekte los vlakke en rande is nie deel van tonele nie. Om na 'n toneel te gaan, maak nie 'n ontdoenstap nie. Tonele wat deur 'n vroeëre bou van ModelCraft gestoor is, laat wat weggesteek is soos dit is; klik Dateer op om dit daarin te stoor.

## Voer 'n animasie uit

{{ui:Voer animasie uit}}, onder die lys, speel die tonele van die eerste tot die laaste, en beweeg die kamera glad tussen hulle, en stoor die fliek as 'n **WebM**-video (twee sekondes se beweging en 'n kort pouse per toneel). Dit neem die aansig op soos jy dit sien, op sy grootte op die skerm, in [aanbiedingsaansig](topic:styles-shadows#presentation-view) (geen asse, gidse of keuse nie). Druk {{key:Esc}} of klik die knoppie weer om te stop sonder om te stoor. WebM speel in blaaiers en VLC, en video-redigeerders skakel dit om.

Vir 'n weergegee wandeling (lug, son, skaduwees, materiale) by 'n grootte wat jy kies, gebruik eerder {{ui:Weergee video…}}: sonder animasiesleutels neem dit die tonele, in volgorde, as die kamera se pad. Sien [Animeer die kamera en voorwerpe](topic:animation).

## Dinge om te weet

- Verander van die styl of beweeg die kamera na die gaan na 'n toneel verander die toneel nie totdat jy Dateer op klik.
- Tonele word nie na Collada, OBJ, glTF, STL of IFC uitgevoer nie.
