---
title: Die ModelCraft-skerm
summary: "'n Toer van die nutsbalk, die paneele aan elke kant, die 3D-aansig en die statusbalk, volgens hul name op die skerm."
keywords: skerm, uitleg, nutsbalk, paneele, uitlyner, entiteitinligting, styl, tonele, statusbalk, waardeblokkie, eenhede, koppelvlak, toer
from: 4a9a4516
---

Van bo na onder: die programbalk, die nutsbalk, die drie kolomme (linkerpaneele, 3D-aansig, regterpaneele) en die statusbalk.

## Die programbalk

Die dun balk heel bo hoort by elke CadCraft-program. Dit het die programnaam en weergawe, {{ui:Oor ModelCraft}}, die volskermknoppie en die {{ui:Papier}} / {{ui:Model}}-skakelaar.

- {{ui:Papier}} is die ligte tema en {{ui:Model}} die donker een. Die 3D-aansig verander sy kleure om te pas; jou model verander nie.
- Die volskermknoppie (dit lees {{ui:Volskerm}} eerste) en {{key:Ctrl+Shift+F}} wissel deur drie modusse: normaal, volskerm, en volskerm met die balke versteek. Met die balke versteek, wys na die boonste rand van die skerm (of tik daarop) om hulle terug te bring. {{key:Esc}} verlaat volskerm.

:::note
{{key:Ctrl+Shift+F}} gebruik die Control-sleutel op elke rekenaar, ook 'n Mac. Op iPhone, waar blaaiers geen volskerm het nie, wys en versteek die knoppie net die balke.
:::

## Die nutsbalk

Die nutsbalk is verdeel in benoemde groepe. Hou oor 'n knoppie om sy naam en sleutel te sien.

Aan sy linkerkant bepaal die lys {{ui:Werkruimte}} waarvoor die nutsbalk en die regterpaneel dien: {{ui:Model}} (stoot/trek-modellering, die toer hieronder), {{ui:Maas}} ([wysig 'n maas](topic:mesh-edit)), {{ui:Kurwe}} ([kurwe-voorwerpe](topic:curves)), {{ui:UV}} ([lê UV's uit](topic:uv)), {{ui:Beeldhou}} ([beeldhou](topic:sculpt)), {{ui:Skakering}} ([materiale met nodusse](topic:shading)), {{ui:Animeer}} ([animeer](topic:animate)) en {{ui:Weergee}} ([weergee in die aansig](topic:render#render-in-the-view)).

| Groep | Knoppies |
|---|---|
| Lêer | {{ui:Nuut}}, {{ui:Maak oop}}, {{ui:Stoor}}, {{ui:Voer in}}, {{ui:Voer uit}} ('n kieslys van formate) |
| Teken | {{ui:Lyn}} ({{key:L}}), {{ui:Reghoek}} ({{key:R}}), {{ui:Sirkel}} ({{key:C}}), {{ui:Veelhoek}} ({{key:N}}) |
| Wysig | {{ui:Kies}} ({{key:Space}}), {{ui:Stoot/trek}} ({{key:P}}), {{ui:Skuif}} ({{key:M}}), {{ui:Draai}} ({{key:Q}}), {{ui:Skaal}} ({{key:S}}), {{ui:Uitveër}} ({{key:E}}), {{ui:Maatband}} ({{key:T}}) |
| Organiseer | {{ui:Komponent}} ({{key:G}}), {{ui:Groep}} ({{key:Shift+G}}), {{ui:Ontbind}} |
| Redigeer | {{ui:Ontdoen}} ({{key:Mod+Z}}), {{ui:Herdoen}} ({{key:Mod+Y}}), {{ui:Kopieer}} ({{key:Mod+C}}), {{ui:Plak}} ({{key:Mod+V}}), {{ui:Meer}} (een kieslys: knip, kopieer, plak, plak op dieselfde plek {{key:Mod+Shift+V}}, dupliseer {{key:Mod+D}}, skrap, kies alles, kies niks, en die sleutelstyl) |
| Kamera | {{ui:Wentel}} ({{key:O}}), {{ui:Pan}} ({{key:H}}), {{ui:Zoem}} ({{key:Z}}), {{ui:Omvang}} ({{key:Shift+Z}}), {{ui:Aansigte}} (een kieslys) |

Die sleutels wat getoon word, is die stoot/trek-sleutels; met die Modelleerder-styl gekies in [ModelCraft-instellings](topic:settings), wys die wenke daardie sleutels. Die gereedskap wat jy gebruik, word ingedruk getoon. Op 'n smal skerm rol die nutsbalk sywaarts.

Die kieslys {{ui:Aansigte}} het {{ui:Iso}}, {{ui:Bo}}, {{ui:Voor}}, {{ui:Regs}}, {{ui:Agter}}, {{ui:Links}} en {{ui:Onder}}, elk ingepas op die model, en {{ui:Perspektief}}, wat tussen perspektief en parallelle projeksie wissel.

## Die 3D-aansig

Die middel van die skerm. Die rooi, groen en blou lyne is die asse: rooi en groen lê op die grond, blou wys op, en **noord is die groen as**. Waar hulle ontmoet, is die oorsprong.

- Wanneer jy begin, lys 'n kaart met die titel "Begin modelleer" die eerste paar sleutels. Dit verdwyn wanneer jy 'n tekengereedskap kies of in die aansig klik.
- Terwyl 'n gereedskap werk, wys die aansig **inferensiemerkers**: klein gekleurde vorms waar die wyser vasvang, 'n groen sirkel by 'n eindpunt, 'n siaan een by 'n middelpunt, 'n rooi vierkant op 'n rand, 'n blou ruit op 'n vlak. Sien [Afleiding en vasvang](topic:inference).
- Gekose dinge word blou. 'n Vlak wat van agter gesien word, is blougrys.
- Wanneer jy 'n groep oopmaak om dit te wysig, verdwyn alles buite dit, en die asse skuif na die groep se eie asse.
- Wanneer 'n model tonele het, verskyn 'n ry toneeloortjies bo-oor die aansig.
- Laat 'n lêer êrens op die aansig val om dit oop te maak of in te voer.

## Die linkerpaneele

**{{ui:Uitlyner}}** lys die groepe en komponente in die model, geneste soos hulle in die model geneste is. 'n Komponent wat meer as een keer gebruik word, wys hoeveel keer, soos "Venster (4)".

- Klik op 'n naam om dit te kies. Dubbelklik om dit vir wysiging oop te maak.
- **Soek op naam** (wys sodra daar twee of meer groepe is) hou net die rye oor wie se naam pas, saam met die groepe waarin hulle is. {{key:Esc}} maak dit skoon.
- Die **oog** aan die einde van 'n ry versteek of wys daardie groep of komponent (soos {{ui:Wysig}} › {{ui:Meer}} › {{ui:Versteek}} doen). 'n Etiketikoon beteken dit is versteek deur sy [etiket](topic:tags).
- **Hernoem op die plek:** klik op 'n ry, druk dan {{key:F2}}, tik, en druk {{key:Enter}} ({{key:Esc}} hou die ou naam).
- **Sleep 'n ry** na die middel van 'n ander groep se ry om dit binne daardie groep te skuif, na die boonste of onderste rand van 'n ry om dit net voor of na daardie ry te plaas, of na die kop {{ui:Uitlyner}} om dit na die boonste vlak te skuif. Dit bly waar dit in die model is, en behou sy kleur, etiket en naam. 'n Groep kan nie binne homself gaan nie. Elke skuif is een ontdoen-stap. Sien [Rangskik in die Uitlyner](topic:groups-components#rearrange-in-the-outliner).
- Terwyl jy binne 'n groep wysig, lees 'n lyn "Wysig: Model › …", en 'n knoppie {{ui:Maak groep toe}} verskyn. Dit maak elke oop vlak in een keer toe.

**{{ui:Komponente}}** lys elke komponentdefinisie met hoeveel kopieë geplaas is ("3×") en 'n knoppie {{ui:Plaas}} wat nog 'n kopie byvoeg waar jy klik.

## Die regterpaneele

**{{ui:Entiteitinligting}}** beskryf wat gekies is. Sy kop verander om te sê wat dit is:

| Kop | Wys | Knoppies |
|---|---|---|
| Model (niks gekies nie) | Vlakke, rande, groepe, komponente en hoeveel daarvan geplaas is, leidrade, algemene grootte | {{ui:Skrap alle leidrade}} (wanneer daar leidrade is) |
| Vlak | Oppervlakte, aantal gate | {{ui:Keer vlak om}} |
| Rand | Lengte | geen |
| Groep of komponent | Naam (tik om te hernoem), hoeveel keer dit geplaas is, of dit 'n geslote soliede is, sy volume, sy grootte | {{ui:Wysig}}, {{ui:Ontbind}}, {{ui:Maak uniek}} ('n komponent wat meer as een keer geplaas is), {{ui:Maak komponent}} ('n groep) |
| Leidraadpunt of leidraadlyn | niks | {{ui:Skrap}} |
| Verskeie dinge | Hoeveel vlakke, rande, groepe en leidrade, die totale oppervlakte van die vlakke | {{ui:Maak komponent (G)}}, {{ui:Maak groep (Shift+G)}} |

**{{ui:Styl}}** stel in hoe die model geteken word: {{ui:Vlakke}} ({{ui:Skaduwee}}, {{ui:Versteekte lyn}}, {{ui:Draadraamwerk}}, {{ui:Röntgen}}), {{ui:Wys rande}}, en {{ui:Sonskaduwees}} met die datum, tyd en plek van die son. Sien [Style en sonskaduwees](topic:styles-shadows).

**{{ui:Tonele}}** stoor aansigte: {{ui:Voeg toneel by}}, die lys tonele, en {{ui:Vorige}}, {{ui:Speel}} en {{ui:Volgende}}. Sien [Stoor aansigte as tonele](topic:scenes).

## Die statusbalk

Langs die onderkant, van links na regs:

1. **Die wenk**: wat die gereedskap volgende wil hê, of waarop die wyser vasvang ("Eindpunt", "Op rooi as").
2. **Boodskappe**: wat net gebeur het ("Stoot/trek ontdoen.", "Ingevoer site.dxf: 1697 rande op die grond, in 'n groep.") of waarom iets nie gewerk het nie.
3. **Die waardeblokkie**: die etiket verander met die gereedskap ({{ui:Lengte}}, {{ui:Afmetings}}, {{ui:Radius}}, {{ui:Sye}}, {{ui:Afstand}}, {{ui:Hoek}}, {{ui:Skaal}}, {{ui:Verskuiwing}}). Dit wys die lewendige grootte terwyl jy werk, en neem wat jy tik. Sien [Tik presiese groottes in die waardeblokkie](topic:value-box).
4. **Die sleutelstyl**: {{ui:Sleutels: Stoot/trek}} of {{ui:Sleutels: Modelleerder}} skakel die sleutelbordkortpaaie en muisknoppies tegelyk (dieselfde as in [ModelCraft-instellings](topic:settings)).
5. **{{ui:Vasvang}} en {{ui:Bots}}**: vasvang aan punte, rande en asse, en soliede voorwerpe wat stop waar hulle raak. Deurgestreep = af. Klik om te wissel. Sien [ModelCraft-instellings](topic:settings).
6. **Die eenhedekieser**: die eenhede waarin lengtes gewys word. Sien [Begin met ModelCraft](topic:getting-started#check-the-units-first).

## Op 'n smal skerm

Onder ongeveer 760 pixels breed ('n foon, of 'n smal venster), hou die 3D-aansig die skerm. Die nutsbalk is een ry wat sywaarts rol, en die paneele maak oop as blaaie vanaf die balk onderaan die skerm.
