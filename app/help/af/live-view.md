---
title: Die lewe-aansig
summary: Die lewe-aansig is 'n venster langs die model wat dit in die werklike-tyd-voorkoms wys, met son en skaduwees, en elke verandering volg wat jy doen; loop daardeur, en stel die tyd van die dag en die maand.
keywords: deel, panorama, 360, toer, virtuele toer, alleenstaande kyker, aflyn kyker, stuur na 'n kliënt, video, stapvideo, verstrooi, verstrooiing, gras, weiveld, woud, rotse, plante, bome, skare, verf plante, lewe-aansig, werklike tyd, werklike-tyd-weergawe, stap, deurstap, eerste persoon, aanbieding, kliënt, tweede skerm, tweede venster, monitor, tyd van die dag, son, seisoen, maand, skaduwees, omgewingsokklusie, weerkaatsings, stuiterlig, globale verligting, webgpu, webgl
from: fca3b0d6
---

{{ui:Voer uit}} › {{ui:Lewe-aansig}} maak 'n paneel oor die program oop wat die model in die werklike-tyd-voorkoms wys: die lug en die son by jou model se plek en datum, die son se skaduwees, die voorkomste en materiale wat jy aan die vlakke gegee het, lampe, en lig wat van mure en vloere weerkaats word. Dit volg wat jy doen: draai die aansig en dit draai ook, verander die model en dit wys die verandering 'n oomblik later. Niks word opgelaai nie.

## Maak dit oop

1. Kies {{ui:Voer uit}} › {{ui:Lewe-aansig}}. Die paneel gaan oop in die onderste regterhoek.
2. Sleep sy titelbalk om dit te skuif, trek sy hoek om dit groter te maak.
3. {{ui:Nuwe venster}} skuif dit na 'n venster van sy eie, vir 'n tweede skerm. {{ui:Voer uit}} › {{ui:Lewe-aansig in 'n nuwe venster}} maak dit daar dadelik oop. As jou blaaier opspring-vensters blokkeer, open dit as die paneel.
4. {{ui:Maak toe}} sluit dit.

## Die kontroles

| Kontrole | Wat dit doen |
|---|---|
| {{ui:Volg die aansig}} | Aan: die lewe-aansig kyk waarheen ModelCraft se aansig kyk. Loop skakel dit af |
| {{ui:Stap}} | Loop deur die model (hieronder) |
| {{ui:Swaartekrag}} | Terwyl jy loop: staan op vloere en klim trappe. Af: vlieg |
| {{ui:Tyd}} | Die uur van die dag, van 05:00 tot 21:00. Die son beweeg wanneer jy sleep |
| {{ui:Maand}} | Die maand (die 21ste daarvan), sodat jy die son in winter en somer kan sien |
| {{ui:Gehalte}} | {{ui:Vir hierdie rekenaar}} (wat [jou masjien](topic:your-machine) kry), of {{ui:Laag}}, {{ui:Medium}} of {{ui:Hoog}} |

Die lyn onderaan sê wat die aansig teken (WebGPU of WebGL 2), die gehalte, en die weerkaatslig.

## Loop deur die model

1. Draai die hoofaansig na waar jy wil staan en kies {{ui:Stap}}. Jy staan op die vloer onder die aansig se oogpunt, 1,6 m hoog.
2. Klik op die lewe-aansig, en gebruik dan {{key:W}} {{key:A}} {{key:S}} {{key:D}} of die pyltjiesleutels. Hou {{key:Shift}} vas om te hardloop. Sleep om rond te kyk.
3. Trappe tot 40 cm word geklim; enigiets hoër is 'n muur. Mure stop jou en jy skuif langs hulle.
4. Met {{ui:Swaartekrag}} af vlieg jy: {{key:E}} gaan op, {{key:Q}} af.
5. {{key:Esc}} stop die loop.

## Verstrooi plante, rotse en mense

{{ui:Verstrooi}} in die lewe-aansig se balk maak die verstrooipaneel langs die prent oop. 'n Verstrooistel versprei items uit die entourage-biblioteek (bome, struike, gras, blomme, rotse, mense, motors) oor deel van die model. Die items word net in die lewe-aansig geteken: hulle is nie meetkunde in die model nie, en die hoofaansig wys hulle nie.

1. **Vul vlakke:** kies vlakke (of 'n groep, soos 'n terrein) in ModelCraft, en kies dan {{ui:Vul seleksie}}. Die stel bedek hulle.
2. **Verf:** kies {{ui:Verf}}, en sleep dan oor die lewe-aansig. Met vlakke gekies land die verf net op hulle; met niks gekies nie land dit op enigiets onder die kwas, die grond ingesluit. {{ui:Kwasgrootte}} stel die kwas; {{ui:Uitveër}} haal geverfde kolle weg.
3. Merk wat jy wil verstrooi. Die getal langs elkeen is sy gewig: 3 en 1 maak drie van die eerste vir elke een van die tweede.

| Kontrole | Wat dit doen |
|---|---|
| {{ui:Per m²}} | Hoeveel items op elke vierkante meter |
| {{ui:Hou weg (m)}} | Geen items nader as dit aan ander voorwerpe nie, en geen onder 'n dak of 'n tafel nie. 0 skakel dit af |
| {{ui:Draai (°)}} | Hoe ver elke item toevallig om die vertikale gedraai word |
| {{ui:Steilste (°)}} | Geen items waar die oppervlak steiler is nie |
| {{ui:Grootte}} | Die kleinste en grootste grootte, as 'n faktor van die item se eie grootte |
| {{ui:Hoogte vanaf, tot (m)}} | Slegs tussen hierdie hoogtes (leeg = enige) |
| {{ui:Leun met die oppervlak}} | 0 hou items regop; 1 staan hulle reghoekig op 'n helling |
| {{ui:Saad}}, {{ui:Skommel}} | Dieselfde saad gee altyd dieselfde verstrooiing; Skommel kies 'n ander |

Die stelle word in die .modelcraft-lêer gestoor en volg die vlakke wat hulle bedek wanneer jy dit verander. Hoeveel items die lewe-aansig op die meeste teken, word bepaal deur [jou masjien](topic:your-machine) se vlak: 20 000 vir {{ui:Net verwerker}}, 100 000 vir {{ui:Grafiekaart, basies}}, 'n miljoen vir {{ui:Grafiekaart, hoog}}. Die paneel sê hoeveel geplaas word van hoeveel die digtheid vra: minder word geplaas as die begroting bereik word, of waar voorwerpe hulle uithou. Items naby die kamera word as hulself geteken; verre items as eenvoudige vorms in hulle kleure.

:::note
Verstrooide items is in die lewe-aansig (en sy loop, panorama's en die alleenstaande kyker). Weergee 'n prent teken hulle nog nie.
:::

## Deel: panorama's, toere, 'n kyker, 'n video

{{ui:Deel}} in die lewe-aansig se balk maak lêers uit die lewe-aansig. Alles word op hierdie rekenaar gemaak; niks word opgelaai nie.

| Keuse | Wat jy kry |
|---|---|
| {{ui:360° panorama}} | 'n 360°-prent vanaf waar die aansig staan (of waar jy loop), as 'n ekwirektangulêre PNG wat panorama-kykers en die meeste foto-webwerwe oopmaak |
| {{ui:Voeg hierdie standpunt by die toer}}, dan {{ui:Stoor die toer}} | Een webblad met 'n panorama by elke standpunt en pyltjies na die standpunte wat elkeen kan sien ('n muur tussenin verberg die pyltjie) |
| {{ui:Stoor 'n kyker}} | Een webblad met die model in hierdie werklike-tyd-voorkoms: draai dit, loop daardeur, spring na sy gestoorde tonele. Dit open aflyn in 'n blaaier met WebGPU of WebGL 2, vanaf 'n gids, 'n USB-stokkie of 'n e-pos, sonder installasie en sonder rekening, en dit laai niks van die internet nie |
| {{ui:Video van die pad}} | Die tydlyn se kamerapad (of die gestoorde tonele in volgorde) as 'n video in hierdie werklike-tyd-voorkoms, op die lewe-aansig se grootte: WebM of MP4 waar die blaaier dit kan maak, anders genommerde prente in 'n ZIP |

Die panorama se grootte volg die gehalte: 1024, 2048 of 4096 pixels breed by Laag, Medium en Hoog. 'n Kykerlêer is ongeveer 5 MB plus die model.

:::note
Die toer en die kyker is gemaak om te wys, nie om te wysig nie: hulle hou die model soos dit is wanneer jy hulle stoor.
:::

## Gehalte

| | Laag | Medium | Hoog |
|---|---|---|---|
| Son-skaduwees | een skaduwee-kaart | drie kaskades | vier kaskades |
| Omgewingsokklusie (kontakskaduwees) | | ✓ | ✓, fyner |
| Weerkaatsings in metaal | | | ✓ |
| Gloed (wanneer Weergee 'n prent dit stel) | | ✓ | ✓ |
| Gladgemaakte rande | FXAA | oor verskeie rame (TAA) | oor verskeie rame (TAA) |
| Weerkaatslig | growwe | fyner | fynste |

{{ui:Vir hierdie rekenaar}} kies Laag op 'n rekenaar sonder bruikbare grafiekaart, Medium met 'n ingeboude grafiekskyfie, en Hoog met 'n afsonderlike grafiekaart. Laag is bedoel vir 'n 8 GB-skootrekenaar sonder grafiekaart.

## Weerkaatslig

Lig wat van 'n sonbeskene muur na die vloer weerkaats word, en die donkerder binnekant van 'n kamer, word bereken deur dieselfde padopspoorder wat [weergegee prente](topic:render) maak: dit weergee 'n klein panorama by punte deur die model, op die agtergrond op elke verwerkerkern. Terwyl dit werk, sê die onderste lyn {{ui:Weerkaatslig: 40 %}}; wanneer dit gereed is, neem die aansig dit op. Na 'n verandering begin dit weer.

:::note
Dit is 'n benadering vir 'n lewe-aansig, nie 'n weergegee prent nie: klein besonderhede tussen die punte kry die weerkaatslig van die punte naby hulle. Vir 'n klaar prent, gebruik [Weergee 'n prent](topic:render).
:::

## Helderheid en kleure

Die lewe-aansig gebruik dieselfde helderheid, witbalans, kontras en aansigtransformasie (ACES, AgX, filmies of standaard) as [Weergee 'n prent](topic:render): stel hulle daar en die lewe-aansig volg.

:::note
Blaaiers verskil. Waar die blaaier WebGPU het (Chrome en Edge op Windows, macOS en ChromeOS, Safari 26), gebruik die lewe-aansig dit; elders (die meeste blaaiers op Linux, ouer Apple-stelsels) gebruik dit WebGL 2 en lyk dit dieselfde.
:::
