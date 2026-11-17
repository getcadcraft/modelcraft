---
title: Kasuta ModelCraftit tehisintellekti assistendiga
summary: Lase oma tehisintellekti assistendil või skriptil mudelit vaadata ja lihtsaid tahkisi luua: õigused, ühendamine CadCraft Studio kaudu ja tegevuslogi.
keywords: ai, assistent, agent, mcp, mudeli konteksti protokoll, skript, automatiseerimine, modelleerimine, kast, silinder, renderda, renderdamise järjekord, õigused, ühenduse katkestamine, tegevus
from: 629cd0b7
---

## Mida sa õpid

Kuidas lasta tehisintellekti assistendil (või sinu kirjutatud skriptil) ModelCraftiga töötada ja kuidas otsustada, mida see tohib puudutada.

ModelCraftil **pole oma tehisintellekti** ja ta ei saada kuhugi midagi. Assistendi toob sina: mis tahes programm, mis räägib mudeli konteksti protokolli (MCP). ModelCraft annab sellele ainult tööriistu, valiku teed sina.

## Lülita sisse

1. Ava {{ui:Sätted}} (hammasratas rakenduse ribal või {{key:Mod+,}}) ja mine vahekaardile {{ui:ModelCraft}}.
2. Jaotises {{ui:Assistendid}} märgi **Luba tehisintellekti assistentidel ja skriptidel ModelCraftit kasutada**. Algselt see on välja lülitatud, kuni sa selle sisse lülitad.
3. Vali, mida see tohib teha: **Lugemine** on algselt märgitud; märgi **Muuda**, **Salvesta** või **Ekspordi** ainult siis, kui neid vajad.

Tööriistu, mis jäävad väljapoole sinu märgitud õigusi, assistendile ei pakuta. Kui assistent neist ühe ikkagi küsib, keeldub ModelCraft ja kirjutab selle tegevuslogisse. Lüliti väljalülitamine katkestab kõik ühendused korraga; {{ui:Lähtesta ModelCraft'i sätted}} lülitab selle samuti välja.

## Ühenda oma assistent

Assistendid ühenduvad sinu arvutis oleva **CadCraft Studio** kaudu: Studio käivitab väikese serveri, millele pääseb ligi ainult see arvuti, ning kaitseb seda žetooniga, mille ta igal käivitamisel loob. Studios vali {{ui:Ühenda assistent}} ja kopeeri aadress ning žetoon oma assistenti (Studio näitab täpseid sätteid, mida kleepida). Ära kunagi jaga žetooni.

:::note
Brauseriaken ei saa assistendile ühendust avada: brauserirakendustes ei mõju lüliti enne, kui kasutad oma arvutis CadCraft Studiot.
:::

## Sina jääd juhiks

- **Iga muudatus on üks tagasivõtmise samm**, mis on tähistatud assistendi enda nimetusega (näiteks „Assistent: kast“). {{key:Mod+Z}} võtab assistendi viimase muudatuse tervikuna tagasi.
- **Näed, millal assistent on ühendatud.** Rakenduse ribal olev nupp nimetab assistenti, kui see on ühendatud; klõpsa sellel, et näha, mida see tohib teha, või et **katkestada ühendus**.
- **Tegevus.** {{ui:Sätted}} › {{ui:ModelCraft}} › {{ui:Assistendid}} › {{ui:Tegevus}} loetleb iga päringu: millal, millist tööriista ning kas tehtud või tagasi lükatud. {{ui:Salvesta logi}} salvestab koopia.

## Mida assistent võib küsida

| Tööriist | Õigus | Mida see teeb |
|---|---|---|
| `app_info`, `model_describe` | Lugemine | Mudeli ühik, mõõtmed ning iga grupp ja komponent koos asukohaga, kas see on suletud tahkis ja selle maht |
| `view_screenshot` | Lugemine | Pilt 3D-vaatest sellisena, nagu see on |
| `box_add`, `cylinder_add` | Muuda | Kast või silinder uue grupina kohal ja mõõtmetega, mille sina või assistent annad („3m“, „10'“ või arv mudeli ühikus) |
| `instance_move`, `instances_erase` | Muuda | Teisaldab või kustutab grupid ja komponendid |
| `faces_list`, `materials_list` | Lugemine | Grupi või vaba geomeetria tahud (igaühe suund, pindala ja keskpunkt); materjalid ja värvid, millega see saab värvida |
| `push_pull` | Muuda | Lükkab või tõmbab tahku, nagu teeb {{ui:Lükka/tõmba}} |
| `paint` | Muuda | Värvib tahud või terve grupi värvi või materjaliga |
| `group_make` | Muuda | Teeb vabadest tahkudest ja gruppidest grupi või komponendi |
| `scene_add`, `scene_show` | Muuda | Salvestab vaate stseenina; viib salvestatud stseeni |
| `mesh_add` | Muuda | Võrkobjekt, millest alustada (kuup, sfäär, silinder …), nagu lisab Võrgu tööruum |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Lugemine / Muuda | Võrgu modifikaatorite virn: peegeldus, massiiv, alajaotus, fassett ja muud; midagi ei rakendata lõplikult |
| `usd_export` | Ekspordi | Mudel OpenUSD-vormingus (.usda, .usdc või .usdz), nagu mudeli salvestamine USD-na seda kirjutab ([USD](topic:usd)); sinu Studios lubatud kausta, muidu allalaadimisena |
| `render_still` | Ekspordi | Renderdatud pilt vaatest või salvestatud stseenist, nagu teeb dialoogi „{{ui:Renderda pilt…}}“ nupp {{ui:Renderda}}, sinu renderdussätetega, kui ta ei küsi teisi (stseenieelseadistus: väline, sisemine, lõige, öö või automaatne; kiire või kvaliteetne, suurus, valimid, taevas); PNG, mida ta saab vaadata, või PNG, EXR või renderdusfail sinu Studios lubatud kaustas ([Renderda pilt](topic:render)) |
| `render_queue` | Ekspordi | Lisab kvaliteetsed pildid renderdusdialoogi järjekorda (vaade või salvestatud stseenid) ja käivitab järjekorra; valmis pildid lähevad sinu lubatud kausta või jäävad sinu jaoks järjekorda {{ui:Renderdamise järjekord}}. Vajab WebGPU-d |
| `link_push` | Muuda | Uuendab mudelit, mis on seotud teisest programmist (vt [Hoia .3dm-mudel reaalajas](topic:live-3dm-link)) |
| `link_status` | Lugemine | Ütleb, kas seotud mudel on veel kohal ja millal see viimati uuendati |
| `undo` | Muuda | Võtab tagasi oma sammud |

Assistendi tehtud tahkised tulevad grupina, nii et need ei ühine kunagi sinu joonistatuga. Mudelit salvestavat tööriista pole: salvestamine jääb sinu hooleks ning eksport või renderdamine nõuab märgitud **Ekspordi**. Renderdus ei muuda mudelis midagi; salvestatud stseeni renderdamine viib vaate sinna, nagu teeb {{ui:Stseenid}}.

## Kui midagi ei tööta

- **Assistent ei näe ModelCraft-i tööriistu:** kontrolli, et lüliti oleks selles aknas sisse lülitatud ja et aken oleks Studios avatud.
- **„vajab muutmisõigust“:** märgi jaotises {{ui:Assistendid}} **Muuda** ja küsi siis uuesti.
- **„401“ või žetooni vead:** žetoon on muutunud (Studio taaskäivitati või {{ui:Uus žetoon}}). Kopeeri uus žetoon assistendi seadetesse.

## Vaata ka

- [Retseptid tehisintellekti assistentidele](common:assistants-recipes): töönäited, igaüks koos tööriistadega, mida see kasutab.
