---
title: Gebruik ModelCraft met 'n KI-assistent
summary: Laat jou eie KI-assistent of skrip na die model kyk en eenvoudige soliede bou: toestemmings, koppeling deur CadCraft Studio, en die bedrywighedslogboek.
keywords: ki, assistent, agent, mcp, model context protocol, skrip, outomatisering, modellering, boks, silinder, weergee, renderreeks, toestemmings, ontkoppel, bedrywighede
from: 629cd0b7
---

## Wat jy sal leer

Hoe om 'n KI-assistent (of 'n skrip wat jy geskryf het) met ModelCraft te laat werk, en hoe om te besluit wat dit mag aanraak.

ModelCraft het **geen KI van sy eie nie** en stuur niks iewers heen nie. Jy bring die assistent: enige program wat die Model Context Protocol (MCP) praat. ModelCraft gee dit net gereedskap, en jy kies watter.

## Skakel dit aan

1. Maak {{ui:Instellings}} oop (die rat in die programbalk, of {{key:Mod+,}}) en gaan na die {{ui:ModelCraft}}-oortjie.
2. Onder {{ui:Assistente}}, merk **Laat KI-assistente en skrips ModelCraft gebruik**. Dit is af totdat jy dit aanskakel.
3. Kies wat dit mag doen: **Lees** is van die begin af gemerk; merk **Wysig**, **Stoor** of **Voer uit** net wanneer jy dit nodig het.

Gereedskap buite die toestemmings wat jy gemerk het, word nie aan die assistent aangebied nie, en as dit tog een vra, weier ModelCraft dit en skryf dit in die bedrywighedslogboek. As jy die skakelaar afskakel, eindig elke koppeling onmiddellik; {{ui:Stel ModelCraft-instellings terug}} skakel dit ook af.

## Koppel jou assistent

Assistente koppel deur **CadCraft Studio** op jou rekenaar: Studio laat 'n klein bediener loop wat net hierdie rekenaar kan bereik, beskerm deur 'n token wat dit elke keer maak wanneer dit begin. Kies in Studio {{ui:Koppel 'n assistent}} en kopieer die adres en die token na jou assistent (Studio wys die presiese instellings om te plak). Deel die token nooit nie.

:::note
'n Blaaieroortjie kan nie 'n verbinding vir 'n assistent oopmaak nie: in die blaaierprogramme het die skakelaar geen uitwerking totdat jy CadCraft Studio op jou rekenaar gebruik nie.
:::

## Jy bly in beheer

- **Elke verandering is een ontdoen-stap**, benoem met die assistent se naam daarvoor (byvoorbeeld "Assistent: box"). {{key:Mod+Z}} neem die assistent se laaste verandering as geheel terug.
- **Jy weet wanneer een gekoppel is.** 'n Knoppie in die programbalk noem die assistent terwyl dit gekoppel is; klik daarop om te sien wat dit mag doen, of om dit te **Ontkoppel**.
- **Bedrywighede.** {{ui:Instellings}} › {{ui:ModelCraft}} › {{ui:Assistente}} › {{ui:Bedrywighede}} lys elke oproep: wanneer, watter gereedskap, en of dit klaar of geweier is. {{ui:Stoor die logboek}} hou 'n afskrif.

## Wat 'n assistent kan vra

| Gereedskap | Toestemming | Wat dit doen |
|---|---|---|
| `app_info`, `model_describe` | Lees | Die model se eenheid, grootte, en elke groep en komponent met waar dit is, of dit 'n geslote soliede is en sy volume |
| `view_screenshot` | Lees | 'n Prent van die 3D-aansig soos dit wys |
| `box_add`, `cylinder_add` | Wysig | 'n Boks of 'n silinder as 'n nuwe groep, op 'n plek en met 'n grootte wat jy of dit gee ("3m", "10'" of 'n getal in die model se eenheid) |
| `instance_move`, `instances_erase` | Wysig | Skuif of vee groepe en komponente uit |
| `faces_list`, `materials_list` | Lees | Die vlakke van 'n groep of van die losse meetkunde (elk se rigting, oppervlakte en middelpunt); die materiale en kleure waarmee dit kan verf |
| `push_pull` | Wysig | Stoot of trek 'n vlak, soos {{ui:Stoot/trek}} doen |
| `paint` | Wysig | Verf vlakke of 'n hele groep met 'n kleur of 'n materiaal |
| `group_make` | Wysig | Maak 'n groep of 'n komponent van losse vlakke en groepe |
| `scene_add`, `scene_show` | Wysig | Stoor die aansig as 'n tonele; gaan na 'n gestoorde tonele |
| `mesh_add` | Wysig | 'n Maas-voorwerp om mee te begin (kubus, sfeer, silinder ...), soos die Maas-werkruimte dit byvoeg |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Lees / Wysig | 'n Maas se modifiseerderstapel: spieël, skikking, onderverdeling, skuinskant en die res; niks word vir goed toegepas nie |
| `usd_export` | Voer uit | Die model as OpenUSD (.usda, .usdc of .usdz), soos die stoor van die model as USD dit skryf ([USD](topic:usd)); na 'n vouer wat jy in Studio toegelaat het, anders 'n aflaai |
| `render_still` | Voer uit | 'n Geweergeeude prent van die aansig of van 'n gestoorde tonele, soos die {{ui:Weergee}}-knoppie in die Weergee-dialoog dit maak, met jou Weergee-instellings tensy dit vir ander vra ('n tonele-voorinstelling: buite, binne, snit, nag of outomaties; vinnig of hoë gehalte, grootte, monsters, lug); 'n PNG wat dit kan nagaan, of 'n PNG-, EXR- of weergeeleer in 'n vouer wat jy in Studio toegelaat het ([Weergee 'n prent](topic:render)) |
| `render_queue` | Voer uit | Voeg hoë-gehalte prente by die Weergee-dialoog se {{ui:Renderreeks}} (die aansig, of gestoorde tonele) en laat die reeks loop; die voltooide prente gaan na 'n vouer wat jy toegelaat het, of bly vir jou in die Weergee-dialoog se {{ui:Renderreeks}}. Benodig WebGPU |
| `link_push` | Wysig | Werk 'n model op wat vanaf 'n ander program gekoppel is (sien [Hou 'n .3dm-model lewend](topic:live-3dm-link)) |
| `link_status` | Lees | Sê of 'n gekoppelde model nog hier is en wanneer dit laas opgedateer is |
| `undo` | Wysig | Neem sy eie stappe terug |

Soliede wat 'n assistent maak, kom as groepe, so hulle smelt nooit saam met wat jy geteken het nie. Daar is geen gereedskap wat die model stoor nie: stoor bly by jou, en uitvoer of weergee vereis dat **Voer uit** gemerk is. 'n Weergawe verander niks in die model nie; die weergee van 'n gestoorde tonele skuif die aansig daarheen, soos {{ui:Tonele}} doen.

## As iets nie werk nie

- **Die assistent sien geen ModelCraft-gereedskap nie:** kyk dat die skakelaar in hierdie venster aan is, en dat die venster in Studio oop is.
- **"vereis die wysigingstoestemming":** merk **Wysig** onder {{ui:Assistente}}, en vra dan weer.
- **"401"- of "token"-foute:** die token het verander (Studio is herbegin, of {{ui:Nuwe token}}). Kopieer die nuwe een in die assistent se instellings.

## Sien ook

- [Resepte vir KI-assistente](common:assistants-recipes): uitgewerkte voorbeelde, elk met die gereedskap wat dit roep.
