---
title: ModelCraft-instellings
summary: Kies die sleutelstyl wat jy ken, maak 'n trackpad-wentelbeweging en -panbeweging sonder die kameraknoppies, en skakel vasvang en soliede botsings aan of af.
keywords: instellings, voorkeure, beheer, sleutelstyl, sleutelkaart, sneltoetse, blender, trackpad, touchpad, rol, wentel, knyp, vasvang, bots, botsing, oorvleuel, sny, deurgaan
from: caf77d5b
---

Open {{ui:Settings}} met die rat in die programbalk, of met {{key:Mod+,}}. Die eerste oortjie, {{ui:ModelCraft}}, bevat die instellings wat by hierdie program hoort; {{ui:General}} bevat die instellings wat elke CadCraft-program deel (tema, werkbalk, paneele). ModelCraft se instellings bestaan net in die program: jy verander hulle hier, en hierdie blaaier onthou hulle.

## Beheer: watter sleutels en muisknoppies

Twee sleutelstyle. Wissel tussen hulle hier, met {{ui:Keys: Push-pull}} / {{ui:Keys: Modeler}} onderaan regs in die aansig, of aan die einde van die werkbalk se {{ui:More}}-kieslys:

- **Stoot/trek-styl** (die begin; die letters van stoot/trek-modelleerders soos SketchUp): 'n letter kies 'n gereedskap — {{key:L}} lyn, {{key:R}} reghoek, {{key:P}} stoot/trek, {{key:M}} skuif, {{key:Q}} draai, {{key:S}} skaal, {{key:G}} maak komponent. Sien [Sleutels en muisaksies](topic:keyboard).
- **Modelleerder-styl** (die sleutels van mesh-modelleerders soos Blender): kies eers, en tree dan dadelik op die seleksie op. {{key:G}} skuif dit, {{key:R}} draai dit en {{key:S}} skaal dit vanaf waar die wyser is — geen eerste klik nodig nie. Terwyl dit skuif, sluit {{key:X}}, {{key:Y}} of {{key:Z}} die rooi, groen of blou as; 'n getikte getal stel die afstand (of grade, of faktor), en 'n klik of {{key:Enter}} sit dit neer; {{key:Esc}} of 'n regsklik plaas dit terug. Dan is jy terug in {{ui:Select}}.

Die sleutelstyl is dieselfde keuse as die kieslysstyl: die Modelleerder-sleutelstyl is die {{ui:Modeler}}-kieslysstyl, en om een te kies, kies jy die ander. Sien [Kieslyste, sleutels en muis](topic:menus-keys-and-mouse). Die volledige Modelleerder-lys is in [Sleutels en muisaksies](topic:keyboard#modeler-keys). Die wenkafbeeldings op die werkbalk en die beginkaart volg die styl wat jy kies.

## Rol: muiswiel of trackpad

- **Bepaal self** (die begin): ModelCraft hou die rol dop. Sywaartse of fyn rol, soos 'n trackpad stuur, wentel; hele wielklikke zoem.
- **Muiswiel**: rol zoem altyd na die wyser toe.
- **Trackpad**: veeg met twee vingers om te wentel, hou {{key:Shift}} vas en veeg om te pan, knyp om te zoem. Jy het nooit die {{ui:Orbit}}-, {{ui:Pan}}- of {{ui:Zoom}}-knoppies nodig nie.

'n Knyp zoem in elke keuse. As "Bepaal self" vir jou muis of trackpad verkeerd raai, kies die een wat jy het.

:::tip
In die Modelleerder-styl kan jy ook wentel deur {{key:Alt}} vas te hou en te sleep, en pan met {{key:Alt+Shift}} en 'n sleep — handig op 'n skootrekenaar sonder 'n middelknoppie.
:::

## Vasvang

**Vasvang aan punte, rande en asse** (aan by die begin) trek die wyser na eindpunte, middelpunte, rande, gidse en die rooi, groen en blou asse — sien [Afleiding](topic:inference). Skakel dit af wanneer jy iets vryelik naby ander geometrie wil plaas sonder dat dit spring. Vlakke, die grond en die asvergrendelings werk steeds met vasvang af.

Die {{ui:Snap}}-knoppie onderaan regs in die aansig doen dieselfde vir hierdie sessie se werk (dit word ook gestoor). In die Modelleerder-styl skakel {{key:Shift+Tab}} dit.

## Soliede stop waar hulle raak

**Stop soliede waar hulle raak** (aan by die begin) keer dat 'n muur deur 'n ander muur gesleep word. Met {{ui:Move}} (en {{key:G}}, en plak-dan-skuif met {{key:Mod+D}}) gly die seleksie tot by die ander soliede en stop om dit te raak; met {{ui:Push/pull}} stop 'n vlak waar dit 'n ander soliede ontmoet. Om op iets te rus en langs dit te gly is in orde — net die beweging na binne in die voorwerp word gestop. Dinge wat reeds oorvleuel wanneer jy begin, kan steeds uitmekaar getrek word.

Om iets doelbewus deur te stoot, klik {{ui:Collide}} onderaan regs (of skakel die instelling af), maak die skuif, en klik dit weer.

:::note
Botsings word gekontroleer vir skuif en stoot/trek. {{ui:Rotate}} en {{ui:Scale}} kontroleer hulle nog nie, en los geometrie wat raak, sluit steeds saam, soos altyd: hou afsonderlike dinge in [groepe](topic:groups-components) sodat hulle afsonderlik bly.
:::

## 3D-drukker se bed

Die grootte van jou drukker se bed: {{ui:Not set}} (die begin), 180 × 180 × 180, 220 × 220 × 250, 256 × 256 × 256 of 300 × 300 × 400 mm. Kies die grootte wat die naaste aan jou drukker se bouvolume is. [Kontroleer vir 3D-druk](topic:print-3d) sê dan wanneer 'n model groter as die bed is; met {{ui:Not set}} word die grootte nie gekontroleer nie.

## Wentel en pan

**Wentel om wat onder die wyser is** (aan by die begin): wentel draai om die deel van die model onder die wyser, en pan hou daardie punt onder die wyser; oor leë ruimte gebruik albei die middel van die aansig. Skakel dit af om altyd om die middel van die aansig te wentel. **Wentelspoed** en **Pan-spoed** wissel van 0.25× tot 3× (1× is die begin) en werk op die muis, die trackpad, aanraking en die pyltjiesleutels. Sien [Wentel, pan en zoem](topic:orbit-pan-zoom).

## Hoekaanwyser

Wat in die hoek van die 3D-aansig wys: **Aansigkubus** (die begin; regs bo — klik 'n vlak, rand of hoek om daarvandaan te kyk, sleep om te wentel, sleep sy kompasring om die model te draai), **Asikoon** ('n klein X-, Y-, Z-merker links onder wat met die aansig draai: X rooi, Y groen, Z blou) of **Geen**. Sien [Die aansigkubus](topic:view-cube).
