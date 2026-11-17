---
title: Hafðu .3dm líkan lifandi
summary: Breyttu líkani í forritinu sem bjó það til og sjáðu breytinguna hér, úr Rhino 8 eða Grasshopper skilgreiningu, án þess að vista og flytja inn aftur.
keywords: rhino, grasshopper, lifandi tenging, lifandi samband, 3dm, nurbs, parametrískt, tenging, samstilling, handrit, viðmiðunarlíkan, ýta
from: 331b0a7e
---

Haltu áfram að móta þar sem þú mótar, og notaðu niðurstöðuna hér: til að myndgera hana, lýsa henni eða raða senu í kringum hana. Hver breyting í hinu forritinu uppfærir einn hóp í ModelCraft.

:::note
Tengingin krefst **CadCraft Studio** á sömu tölvu. Vafraflipi getur ekki haldið tengingunni. Ekkert fer um internetið: handritið ræðir við Studio á eigin vistfangi þessarar tölvu, með auðkennislykli.
:::

:::warning
Þessi tenging hefur verið prófuð með skráarritara handritsins og staðgengli fyrir hitt forritið, ekki enn inni í Rhino eða Grasshopper sjálfum. Ef eitthvað bregst þar, segðu okkur hvaða skilaboð komu.
:::

## Setja upp

1. Í Studio, opnaðu ModelCraft. Í {{ui:Stillingar}} › {{ui:ModelCraft}} › {{ui:Aðstoðarmenn}}, hakaðu við **Leyfa gervigreindar-aðstoðarmönnum og handritum að nota ModelCraft**, og síðan **Breyta**.
2. Í Studio, veldu {{ui:Tengja aðstoðarmann}}. Þar birtast vistfangið og auðkennislykillinn sem þú límir inn hér að neðan.
3. Sæktu handritið: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Úr Rhino

1. Keyrðu `cadcraft_link.py` í handritaritli Rhino (Python 3 í Rhino 8).
2. Í fyrsta skipti skaltu líma inn vistfangið og auðkennislykilinn. Þau eru geymd í `.cadcraft-link.json` í heimamöppunni þinni, aldrei í líkaninu. Studio býr til nýjan auðkennislykil í hvert skipti sem það ræsist, svo handritið spyr aftur þá.

Allt líkanið kemur yfir sem einn hópur sem er nefndur eftir skjalinu, til dæmis "chair (linked)". Eftir það kemur hver breyting yfir þegar þú staldrar við augnablik, og aðeins hlutirnir sem breyttust eru sendir. Keyrðu handritið aftur til að stöðva það.

## Úr Grasshopper

Keyrðu handritið einu sinni í Rhino fyrst, svo vistfangið og auðkennislykillinn séu vistuð.

1. Bættu við Script-íhlut (Python 3) og límdu allt `cadcraft_link.py` í hann.
2. Gefðu honum þessi inntök: `G` (rúmfræðin, með listaaðgangi), `N` (nafn, valfrjálst), `On` (rofi með sanngildi) og `Target` (valfrjálst: `model` eða `part`, ef bæði forritin eru opin).
3. Stilltu `On` á satt.

Hver keyrsla sendir `G` yfir og kemur í stað þess sem íhluturinn sendi síðast, svo það uppfærir hópinn hér þegar þú dregur skyggi. Úttakið `a` segir hvað gerðist. Hver íhlutur hefur sinn eigin hóp.

## Hvað þú getur gert við hópinn

- **Færðu hann, merktu hann og byggðu í kringum hann.** Staðsetning hópsins og merkið hans haldast í gegnum allar uppfærslur, og allt sem er við hliðina líka.
- **Ekki breyta inni í honum.** Hver uppfærsla skiptir út því sem er inni í hópnum. Hitt forritið á þessa hluti.
- **Afturköllun.** Uppfærslur innan tveggja sekúndna frá hvor annarri deila einu afturkallsskrefi, svo {{key:Mod+Z}} tekur til baka heilan drátt. Næsta uppfærsla færir líkanið aftur í samræmi.
- **Vista.** Vistaða skráin geymir tenginguna. Keyrðu handritið aftur eftir að þú opnar hana, og sami hópur uppfærist.

## Hvað kemur yfir

Möskvar, marghyrningar, yfirborð og útdrættir sem möskvinn sem þú sérð á skjánum, SubD sem sinn möskva, ferlar sem jaðrar, blokkir sem aðskildir hlutir þar sem þeir standa (ekki sem íhlutir), lög sem merki, litir og einingar. Sjá [Flytja inn .3dm líkan](topic:import-3dm-files) um hvernig þeir birtast hér.

Skilið eftir, með fjölda í hinu forritinu: punktar, texti, málsetningar, ljós og þess háttar.

**Aðeins ein leið.** Breytingar hér fara ekki til baka í hitt forritið.

## Ef eitthvað fer úrskeiðis

- **"No ModelCraft or PartCraft window allows it":** gerðu skref 1 í uppsetningunni.
- **"Studio refused the token":** Studio hefur endurræst sig. Afritaðu nýja auðkennislykilinn og keyrðu handritið aftur. Fyrir Grasshopper, keyrðu það fyrst í Rhino.
- **"Cannot reach CadCraft Studio":** Studio er ekki í gangi, eða vistfangið hefur breyst.
