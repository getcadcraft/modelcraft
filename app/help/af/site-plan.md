---
title: Modelleer op 'n terreinplan vanaf 'n DWG of DXF
summary: Bring 'n CAD-terrein- of vloerplan in as lyne op die grond, beantwoord die eenhedevraag, en teken dit na in vlakke en massas.
keywords: terreinplan, dwg, dxf, cad, invoer, skets, skets-foto, handskets, servetskets, foto, papier, pengleure, dinamiese blokke, sigbaarheidstoestande, teks, arseringe, spline, ellips, 3D-vlak, naspoor, vloerplan, erf, eiendomslyn, eenhede, onderlaag, konteks
from: 3415dc96
---

ModelCraft kan die lyne van 'n 2D CAD-tekening, 'n terreinplan of 'n vloerplan invoer, en hulle op die grond lê sodat jy bo-op hulle kan modelleer.

## Voer die tekening in

1. Klik {{ui:Import}} in die {{ui:File}}-groep (of laat die lêer op die 3D-aansig val).
2. Kies 'n `.dwg`- of `.dxf`-lêer.

   'n Groot DWG neem 'n oomblik: die statusbalk sê "Lees plan.dwg…" totdat dit in is.

3. As die tekening nie sê wat sy eenhede is nie, vra 'n dialoog met die titel "Tekeningeenhede": "Wat is een tekeningeenheid?" Kies {{ui:Inches}}, {{ui:Feet}}, {{ui:Millimeters}} of {{ui:Meters}}. Die meeste Amerikaanse terreinplanne is in voet geteken, argitektoniese planne in duim, en metriese planne in millimeter.

   Die tekening kom as 'n groep rande op die grond, gekies, en die aansig zoem daarna. Die statusbalk sê hoeveel rande ingekom het, byvoorbeeld "Ingevoer site.dwg: 1697 rande op die grond, in 'n groep. Ontbind dit om direk daarop te teken."

## Wat inkom

- Lyne, polilyne (insluitend hulle bope), sirkels en bope, en blokke met alles daarin, uit **modelruimte** alleen. Krommes word kort reguit stukke.
- Lyne, polilyne, bope, sirkels, ellipse en splines land plat op die grond, as rande.
- **Arserings** word vlakke op die grond, met hulle eilandjies as gate, sodat jy 'n gearseerde gebied dadelik kan stoot/trek.
- **3D-vlakke** en soliede vulsels word vlakke; 3D-vlakke behou hulle hoogtes.
- **Teks** (enkellyn-teks, veellyn-teks en kenmerkwaardes) word as rande geteken in 'n eenvoudige enkelstreek-letterwerk, op die teks se eie hoogte, hoek en belyning. Sy lettertipe is nie die tekening se nie, so die woorde kan 'n bietjie langer of korter wees. Karakters waarvoor die letterwerk geen vorm het nie, word as klein blokkies geteken en getel.
- **Afmetings** word geteken soos die tekening hulle wys (hulle lyne, pyltjiekoppe en teks, as rande en vlakke).
- **Dinamiese blokke** kom in soos die tekening hulle wys: elke geplaaste blok in die sigbaarheidstoestand waarin dit gestoor is, en slegs daardie toestand se lyne. Die statusbalk lys hulle met die toestande wat gewys word en die ander toestande wat elkeen het, byvoorbeeld "Receptacle wys as Duplex ×38, GFI ×7 (toestande: Duplex, GFI)". ModelCraft wissel nie toestande nie.
- **3D-soliede, streke en liggame** (die tekening se ACIS-data) kom in as hulle eie groepe: 'n geslote soliede as 'n soliede, 'n streek of oop liggaam as vlakke. Plat vlakke kom heel in; geboë vlakke (silinders, keëls, sfere, torusse, eenvoudige spline-oppervlaktes) as klein driehoeke met sagte rande tussen hulle, sodat net die soliede se eie rande wys. 'n Vlak op 'n ander soort oppervlak word weggelaat en gelys: "Nog nie geteken nie (3D-soliede): …".
- Nie ingevoer nie: punte, tabelle, multilyne, beelde en ander voorwerptipes. Die statusbalk lys hulle volgens tipe, soos "Nie ingevoer nie: 12 POINT." Alles op 'n uitleg (papierruimte) word ook weggelaat, sonder om gelys te word.
- Lae word nie behou nie: alle lyne kom eenders in.

As die tekening ver van sy oorsprong is (staatsvlakkoördinate, byvoorbeeld), word dit steeds ingevoer, maar dit kan ver van ModelCraft se oorsprong beland. Tekeninge wat meer as 10,000 km van hulle oorsprong af strek, word geweier: skuif die tekening eers nader aan 0,0 in die CAD-program.

## Teken dit na in vlakke

Die ingevoerde lyne sluit selde op hulself netjies in vlakke. Twee maniere om te werk:

**Hou die plan as 'n onderlaag (aanbeveel)**

1. Laat die plan as sy eie groep.
2. Teken jou gebou bo-op met {{ui:Rectangle}} en {{ui:Line}}, en vang aan die plan se hoeke ("Eindpunt") en rande ("Op rand") vas.
3. Stoot/trek jou vlakke op. Die plan bly onaangeraak daaronder, en jy kan die hele groep later met een klik uitvee.

Vasvang werk oor groepe: jy kan aan die plan se hoeke vasvang sonder om dit oop te maak.

**Teken op die plan se eie lyne**

1. Kies die plangroep en klik {{ui:Explode}}. Sy lyne word losse rande.
2. Waar 'n geslote omtrek 'n vlak moet wees, teken een lyn oor enige van sy rande met {{ui:Line}}, van hoek tot hoek. Wanneer die omtrek geslote en plat is, vul die vlak gewoonlik in. As nie, soek na 'n gaping of 'n oorvleueling in die omtrek en teken daaroor.
3. Stoot/trek dit.

Dit werk die beste op 'n skoon plan. Op 'n besige opmeting is naspoor bo-op vinniger.

## Probleme

- "Dit is 'n binêre DXF. Stoor dit as ASCII-DXF en probeer weer." Stoor die DXF weer uit die CAD-program as ASCII (teks).
- "…het geen lyne, bope of sirkels in modelruimte om in te voer nie." Die tekening is waarskynlik heeltemal op uitlegte, of heeltemal teks en arserings.
- "Hierdie tekening kon nie gelees word nie (…). Dit kan beskadig wees, of gestoor in 'n DWG-weergawe wat die leser nie hanteer nie…" Die hakies sê waarom, byvoorbeeld "DWG-weergawe AC1009 word nie ondersteun nie". Stoor dit as 'n DXF, of as 'n DWG vanaf AutoCAD 2000 tot 2018, uit die CAD-program.
- Die plan is die verkeerde grootte: jy het die verkeerde eenheid gekies. Ontdoen ({{key:Mod+Z}}) en voer weer in, of [skaal](topic:rotate-scale) die groep met die regte faktor (12 tussen voet en duim, 25.4 tussen duim en millimeter).

Om kontoerlyne in grond te verander wat jy kan vorm, sien [Terrein](topic:terrain).

## Vanaf 'n foto van 'n handskets

**Lêer › Voer 'n skets-foto in…** neem 'n foto van 'n skets op papier (JPEG, PNG of TIFF, direk van 'n foon af is goed) en maak dieselfde soort rande op die grond. Sê watter papier dit is (of laat dit die vel vind, geneem as A4) en die skets se skaal, 1 : 100 byvoorbeeld. Die papier se rand word gevind en die foto reggetrek, die ink word in lyne en bope nagespoor, en elke pengleur (swart, rooi, blou, groen) word 'n eie groep met 'n etiket (**Skets swart**, **Skets rooi**, …), almal binne een groep wat na die foto genoem is. Dit is een ontdoenstap, en alles gebeur op hierdie rekenaar: niks word êrens gestuur nie.

As geen papierrand gevind kan word nie, word die hele foto as die vel geneem, en die statuslyn sê so: meet iets wat jy ken en skaal die groep as dit verkeerd is. Teken die lyne soos hierbo na in vlakke.
