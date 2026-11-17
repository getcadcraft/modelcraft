---
title: Vir mense wat van ander modelleerders af kom
summary: Hoe stoot/trek-modelleringsgewoontes na ModelCraft afbeeld, sleutel vir sleutel, en die verskille wat mense laat val.
keywords: oorskakel, migreer, bekend, verskille, stoot trek-modelleerder, skp, sneltoetse, gewoontes, vergelyk, metingsblokkie, uitlyner, entiteitinligting
from: 74ffd4ac
---

As jy in SketchUp gemodelleer het, sal ModelCraft bekend voel: dieselfde idee van vlakke en stoot/trek, dieselfde gereedskapletters, 'n waardeblokkie waarin jy tik sonder om te klik, afleiding met rooi, groen en blou asse, groepe, komponente, 'n Uitlyner, Entiteitinligting en tonele. Hierdie bladsy lys wat direk oorgaan en, belangriker, wat nie.

## Gewoontes wat oorgedra word

| Jy is gewoond aan | In ModelCraft |
|---|---|
| Druk Space vir Kies, L Lyn, R Reghoek, C Sirkel | Dieselfde: {{key:Space}}, {{key:L}}, {{key:R}}, {{key:C}} |
| Druk P Stoot/trek, M Skuif, Q Draai, S Skaal, E Uitveër, T Maatband | Dieselfde: {{key:P}}, {{key:M}}, {{key:Q}}, {{key:S}}, {{key:E}}, {{key:T}} |
| Druk O Wentel, H Pan, Z Zoem, Shift+Z Zoem na omvang | Dieselfde: {{key:O}}, {{key:H}}, {{key:Z}}, {{key:Shift+Z}} |
| Druk G om 'n komponent te maak | Dieselfde: {{key:G}}. {{key:Shift+G}} maak 'n groep |
| Tik in die Metingsblokkie sonder om dit te klik | Dieselfde, in die waardeblokkie onderaan. Druk {{key:Enter}} |
| Tik `4m,3m` vir 'n reghoek, `12s` vir sye | Dieselfde |
| Tik `3x` of `/3` na 'n Skuif-kopie | Dieselfde; `*3` werk ook |
| Tik `[x,y,z]` of `<dx,dy,dz>` vir 'n punt of verskuiwing | Dieselfde |
| Tik 'n kale getal in 'n argitektoniese duim-model en kry duim | Dieselfde |
| Middel-sleep om te wentel, Shift+middel-sleep om te pan, wiel om by die wyser te zoem | Dieselfde |
| Dubbelklik met Stoot/trek om die afstand te herhaal | Dieselfde |
| Pyltjiesleutels om rooi, groen, blou en parallel te sluit | Dieselfde: {{key:Right}} rooi, {{key:Left}} groen, {{key:Up}} blou, {{key:Down}} parallel |
| Hou Shift om 'n afleiding te sluit | Dieselfde |
| Ctrl (Option op 'n Mac) om te kopieer terwyl jy skuif | {{key:Ctrl}}, {{key:Mod}} of {{key:Alt}}, op enige rekenaar |
| Shift om te wissel, Ctrl om by te voeg, Shift+Ctrl om uit die keuse te verwyder | Dieselfde sleutels; op 'n Mac gebruik {{key:Mod}} waar daar Ctrl staan |
| Venster van links na regs, kruising van regs na links | Dieselfde |
| 'n Maat-gereedskap om lengtes te merk | {{key:D}}, en meer: tik 'n nuwe lengte in 'n maat en die model verander na daardie grootte. Sien [Maat en verander grootte](topic:dimensions) |
| Dubbelklik 'n vlak vir vlak plus rande; drievoudig klik vir alles wat verbind is | Dieselfde |
| Dubbelklik 'n groep om dit te redigeer; Esc om toe te maak | Dieselfde |
| Teken 'n lyn oor 'n vlak om dit te verdeel; vee 'n rand tussen gelyk-vlakke uit om hulle te heel | Dieselfde |
| Stoot 'n vensterreghoek deur 'n muur om dit te sny | Dieselfde |
| Agtervlakke in blougrys; Keer vlakke om | Dieselfde kleur; {{ui:Keer vlak om}} in {{ui:Entiteitinligting}} |
| Tonele as oortjies oor die aansig, Page Up en Page Down | Dieselfde, met {{ui:Speel}} in die {{ui:Tonele}}-paneel |
| Skaduwees uit datum, tyd, breedte- en lengtegraad, met noord op groen | Dieselfde, in die {{ui:Styl}}-paneel |

## Verskille wat mense laat val

### Stoor is 'n aflaai

Daar is geen Stoor wat die lêer oorskryf wat jy oopgemaak het nie, geen Stoor as-dialoog met 'n naam nie, geen outostoor nie en geen rugsteunlêer nie. {{ui:Stoor}} ({{key:Mod+S}}) laai elke keer 'n nuwe `.modelcraft`-lêer af, gewoonlik na jou aflaaivouer. Stoor gereeld, en hernoem of skuif die lêers self. Sien [Oopmaak, stoor, invoer en uitvoer](topic:files).

### Dit voer .skp-lêers in, maar stoor dit nie

{{ui:Voer in}} lees SketchUp-lêers met ModelCraft se eie leser, in die bladsy: groepe, komponente, kleure, teksture op vlakke, etikette en sagte rande kom oor. Sien [Lêerformate in detail](topic:formats#skp-files). ModelCraft kan nie `.skp` stoor nie: om terug te gaan, voer Collada uit uit ModelCraft en voer dit in SketchUp in.

### Geen regsklik-kieslys nie

Regs-sleep pan; 'n regsklik doen niks. Opdragte wat jy in die kontekskieslys sou vind, is in {{ui:Entiteitinligting}} ({{ui:Keer vlak om}}, {{ui:Redigeer}}, {{ui:Ontbind}}, {{ui:Maak uniek}}, {{ui:Maak komponent}}) en in die nutsbalk se {{ui:Organiseer}}-groep.

### Eenhede is in die statusbalk

Daar is geen Modelinligting of sjabloonkeuse nie. Die eenheidkieser is onderaan regs. 'n Nuwe model begin in voet en duim in die VSA en in millimeter elders, volgens jou blaaier se taalinstelling. Desimale gebruik altyd 'n punt: `2.5m`, nooit `2,5m` nie, want die komma skei altyd waardes.

### Verf het sy eie materiale

{{ui:Verf}} ({{key:B}}) verf volkleure en die materiale in die {{ui:Materiale}}-afdeling: baksteen, bekleding, dakbedekking, hout, klip en meer, wat deur ModelCraft geteken word. Jy kan nog nie jou eie prent as materiaal laai nie; teksture wat met ingevoerde lêers inkom, word behou. Sien [Verf met kleure en materiale](topic:paint).

### Skaal is eenvormig, sonder handvatsels

Skaal wys nie 'n boks met handvatsels nie. Klik die punt wat staan bly, 'n verwysingspunt, en dan die nuwe grootte of 'n getikte faktor. Dit skaal altyd eenvormig in alle rigtings. Om in een rigting te rek, stoot/trek of skuif 'n vlak, tik 'n groep se breedte, diepte of hoogte weer in {{ui:Entiteitinligting}}, of [verander grootte met 'n maat](topic:dimensions).

### Draai kies sy vlak waar jy klik

Daar is geen gradeboog wat aan vlakke vassit soos jy met die pyltjiesleutels oor 'n vlak hover om die vlak te kies nie. Klik die middelpunt op 'n vlak om in daardie vlak se vlak te draai, of op die grond om om die vertikale te draai. Die pyltjiesleutels wentel die aansig voor die eerste klik.

### Afleiding uit punte wat jy oorgaan

ModelCraft klik vas op asrigtings vanaf **jou beginpunt**, en op punte, rande en vlakke onder die wyser. Dit volg nie 'n rigting vanaf 'n punt wat jy net gehover het nie (die stippellyn "vanaf punt"-afleiding). Om met 'n verre hoek in lyn te kom, sluit die as met 'n pyltjiesleutel en hover oor daardie hoek: die vaste punt skuif tot in lyn daarmee. Of plaas 'n [gids](topic:guides-measure).

### Parallel gebruik die rand wat jy voor begin oorgesteek het

Die parallel- en loodregte afleiding gebruik die laaste rand wat die wyser **voor die eerste klik** oorgesteek het, nie rande wat jy tydens tekening hover nie. Sien [Afleiding en vaslê](topic:inference#parallel-and-perpendicular).

### Kopieë van 'n groep is gekoppel

'n Groep met {{ui:Skuif}} te kopieer, maak 'n tweede plasing van dieselfde groep, so as jy een wysig, verander albei, soos met komponente. SketchUp maak groepe onafhanklik. Sien [Probleemoplossing](topic:troubleshooting#editing-one-group-changed-another).

### Spasie pan nie

{{key:Space}} kies {{ui:Kies}}, soos in SketchUp. In sommige ander webprogramme pan Spasie as jy dit hou; hier nie. Regs-sleep pan in plaas daarvan.

### Tweevinger-rol zoem

Op 'n sensorpaneel, stel {{ui:Instellings}} › {{ui:ModelCraft}} › Rol na Sensorpaneel: twee vingers wentel, {{key:Shift}} en twee vingers pan, 'n knyp zoem. Sien [Wentel, pan en zoem](topic:orbit-pan-zoom#on-a-trackpad).

As jou hande Blender se sleutels ken eerder as SketchUp s'n, kies die {{ui:Modelleerder}}-kieslysstyl: {{key:G}}, {{key:R}} en {{key:S}} werk op die keuse terselfdertyd, {{key:E}} ekstrudeer (stoot/trek), {{key:Shift+D}} dupliseer, en 'n kopbalk-kieslys (Lêer, Redigeer, Aansig, Kies, Voeg by, Voorwerp, Vlakmodel) vervang die nutsbalk. Kom jy van SketchUp af, gee die {{ui:Stoot-trek}}-styl 'n kieslysbalk soos sy eie oor dieselfde gereedskapletters. Sien [Kieslyste, sleutels en muis](topic:menus-keys-and-mouse).

### Soliede voorwerpe wat in mekaar gestoot word, sny nie

Stoot/trek sny deur die vlak agter dit in dieselfde voorwerp, maar twee aparte soliede wat in mekaar gestoot word, sny nie. Daar is geen Intersect Faces nie en geen Solid Tools nie.

### Wat ontbreek

Vryhand, Trim, Split en Outer Shell, jou eie beeldmateriale, uitbreidings en 'n uitlegnutsding vir bladsye is nie in hierdie weergawe nie. [Nog nie gebou nie](topic:not-built-yet) lys wat om in plaas daarvan te doen.

## Sneltoetse wat die blaaier hou

ModelCraft loop in 'n blaaier, so 'n paar sneltoetse behoort aan die blaaier, nie aan die program nie. {{key:Mod+N}} maak 'n blaaiervenster oop (gebruik {{ui:Nuut}}), en {{key:Mod+W}} maak die oortjie toe. As jy ongestoorde veranderinge het, vra die blaaier voordat dit toemaak. Sien [Sleutels, muise en sensorpanele](common:keys#shortcuts-the-browser-keeps).
