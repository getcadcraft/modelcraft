---
title: Isticmaal ModelCraft kaaliye AI ah
summary: U ogolow kaaliyahaaga AI ama qoraalkaaga inuu eego moodeelka oo dhiso jidh fudud: ogolaansho, xiriir iyada oo loo marayo CadCraft Studio, iyo diiwaanka waxqabadka.
keywords: ai, kaaliye, wakiil, mcp, model context protocol, qoraal, moodelayn, boks, silindar, rendar, safka rendarka, ogolaansho, ka jooji, waxqabad
from: 629cd0b7
---

## Waxa aad baran doontid

Sida kaaliye AI ah (ama qoraal aad qortay) loogu ogolaado inuu ModelCraft la shaqeeyo, iyo sida loo go'aamiyo waxa uu taaban karo.

ModelCraft **ma leh AI gaar ah** mana diro wax meel kasta. Kaaliyahaaga adiga ayaa keenaya: barnaamij kasta oo ku hadla Model Context Protocol (MCP). ModelCraft waxay siinaysaa qalab keliya, adna ayaad dooran doontaa kuwa.

## Shid

1. Fur {{ui:Dejinta}} (giraanta ku taal bar-ka app-ka, ama {{key:Mod+,}}) oo u gudub tab-ka {{ui:ModelCraft}}.
2. Hoosta {{ui:Kaaliyayaasha}}, calaamadi **Ogolow kaaliyayaasha AI iyo qoraallada inay isticmaalaan ModelCraft**. Waa la demiyay ilaa aad shidayso.
3. Dooro waxa ay sameyn karto: **Akhri** waa la calaamadiyay bilowga; calaamadi **Wax ka beddel**, **Kaydi** ama **Soo saar** kaliya marka aad u baahan tahay.

Qalabka aan ku jirin ogolaanshaha aad calaamadisay looma soo bandhigo kaaliyaha, haddii uu si kastaba u weydiiyo, ModelCraft way diidi doontaa oo waxay ku qori doontaa diiwaanka waxqabadka. Deminta badhanka waxay joojinaysaa dhammaan xiriirrada hal mar. {{ui:Dib u deji dejinta ModelCraft}} ayaa sidoo kale demisa.

## Ku xidh kaaliyahaaga

Kaaliyayaasha waxay ku xiriiraan **CadCraft Studio** kombiyuutarkaaga: Studio wuxuu socodsiiyaa server yar oo kaliya kombiyuutarkan gaari karo, oo lagu ilaaliyo calaamad (token) uu sameeyo mar kasta oo bilaabo. Studio-ga, dooro {{ui:Ku xidh kaaliye}} oo ku koobi cinwaanka iyo calaamadda kaaliyahaaga (Studio wuxuu muujinayaa dejinta saxda ah ee la dhejiyo). Calaamadda ha wadaagin marna.

:::note
Tab-ka browser-ka ma furi karo xiriir kaaliye: appsyada browser-ka badhanka ma saameeyo ilaa aad isticmaasho CadCraft Studio kombiyuutarkaaga.
:::

## Adigu waad xakamaynaysaa

- **Isbeddel kasta waa hal tallaabo oo ka noqo**, oo lagu calaamadiyay magaca kaaliyaha uu u isticmaalo (tusaale "Kaaliye: boks"). {{key:Mod+Z}} wuxuu soo celinayaa isbeddelkii ugu dambeeyay ee kaaliyaha oo dhammaan.
- **Waad ogaanaysaa marka mid la xidhay.** Badhanka bar-ka app-ka ayaa magaca kaaliyaha muujinaya intuu xiriir yahay; riix si aad u aragto waxa uu ogolaan karo, ama si aad u **Ka jooji**.
- **Waxqabadka.** {{ui:Dejinta}} › {{ui:ModelCraft}} › {{ui:Kaaliyayaasha}} › {{ui:Waxqabadka}} wuxuu liis ku sameeyaa wac kasta: goorta, qalabka, iyo in la dhammeeyay ama la diiday. {{ui:Kaydi diiwaanka}} wuxuu keydiyaa nuqul.

## Waxa kaaliyuhu weydiisan karo

| Qalab | Ogolaansho | Waxa uu sameeyo |
|---|---|---|
| `app_info`, `model_describe` | Akhri | Cutubka moodeelka, cabbirkiisa, iyo koox kasta iyo komponent kasta meesha ay ku yaalliin, haba yihiin jidh xidhan iyo mugga |
| `view_screenshot` | Akhri | Sawir ka mid ah aragta 3D sida ay muuqato |
| `box_add`, `cylinder_add` | Wax ka beddel | Boks ama silindar oo koox cusub ah, meel iyo cabbir adiga ama isagu siiyo ("3m", "10'" ama tiro ku jira cutubka moodeelka) |
| `instance_move`, `instances_erase` | Wax ka beddel | Wuxuu guuraa ama tirtiraa kooxaha iyo komponentada |
| `faces_list`, `materials_list` | Akhri | Dhinacyada kooxda ama joomatriga furan (jihada kasta, balaadhka iyo dhexdhexaadka); agabka iyo midabada uu ku rinjiyayn karo |
| `push_pull` | Wax ka beddel | Wuxuu riixaa ama jiidaa dhinac, sida {{ui:Riix/jiid}} sameysa |
| `paint` | Wax ka beddel | Wuxuu rinjiyaa dhinacyada ama kooxda oo dhan midab ama agab |
| `group_make` | Wax ka beddel | Wuxuu sameeyaa koox ama komponent ka dhigan dhinacyo kala go' iyo kooxo |
| `scene_add`, `scene_show` | Wax ka beddel | Wuxuu aragta u kaydiyaa muuqaal; wuxuu u gudbaa muuqaal la kaydiyay |
| `mesh_add` | Wax ka beddel | Shay mesh ah oo lagu bilaabo (kuub, kubbad, silindar …), sida goobta shaqada Mesh ku daraysa |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Akhri / Wax ka beddel | Xirmada beddelayaasha mesh-ka: mirror, array, subdivision, bevel iyo kuwa kale; waxba si joogto ah looma dabaqo |
| `usd_export` | Soo saar | Moodeelka sida OpenUSD (.usda, .usdc ama .usdz), sida loo kaydiyo moodeelka USD ahaan ([USD](topic:usd)); foolder aad Studio-ga ku ogolaatay, haddii kale soo dejin |
| `render_still` | Soo saar | Sawir la rendariyay oo ah aragta ama muuqaal la kaydiyay, sida badhanka {{ui:Soo saar}} ee wada-hadalka {{ui:Soo saar}} sameeyo, iyo dejintaada rendarka haddii aysan weydiinin kuwo kale (preset muuqaal: dibadda, gudaha, goyn, habeen ama auto; degdeg ama tayo sare, cabbir, tusaale, samada); PNG uu eegi karo, ama PNG, EXR ama fayl rendar foolder aad Studio-ga ku ogolaatay ([Rendar sawir](topic:render)) |
| `render_queue` | Soo saar | Wuxuu ku daraa sawirro tayo sare ah wada-hadalka rendarka (aragta, ama muuqaalada la kaydiyay) oo socodsiiyaa safka; sawirrada dhammaystiran waxay u gaaraan foolder aad ogolaatay, ama waxay ku sii jiraan {{ui:Safka rendarka}} wada-hadalka rendarka. Wuxuu u baahan yahay WebGPU |
| `link_push` | Wax ka beddel | Wuxuu cusboonaysiiyaa moodeel laga xidhay barnaamij kale (eeg [Ilaali moodeel .3dm oo toos ah](topic:live-3dm-link)) |
| `link_status` | Akhri | Wuxuu sheegaa haddii moodeelka xidhan uu weli jiro iyo goorta uu ugu dambeyntii cusboonaysiiyay |
| `undo` | Wax ka beddel | Wuxuu soo celinayaa tallaabooyinkiisa |

Jidhadka kaaliyuhu sameeyo waxay yimaadaan kooxo, sidaas darteed marna ma isku darmaan waxa aad naqshadeysay. Ma jiro qalab kaydiya moodeelka: kaydinta waa adiga, dhoofinta ama rendarka waxay u baahan yihiin **Soo saar** la calaamadiyay. Rendar ma beddelo moodeelka; rendarka muuqaal la kaydiyay wuxuu u gudbaa aragta sida {{ui:Muuqaallada}} sameyso.

## Haddii wax shaqeynin

- **Kaaliyuhu ma arko qalabka ModelCraft:** hubi in badhanka uu daaqaddan ku shidan yahay, iyo in daaqaddu furan tahay Studio.
- **"Waxay u baahan tahay ogolaanshaha wax ka beddelka":** calaamadi **Wax ka beddel** hoosta {{ui:Kaaliyayaasha}}, ka dibna weydii mar kale.
- **Khaladaadka "401" ama "token":** calaamaddu way isbeddeshay (Studio ayaa dib u bilaabay, ama {{ui:Calaamad cusub}}). Ku koobi calaamadda cusub dejinta kaaliyaha.

## Eeg sidoo kale

- [Tusaalooyinka kaaliyayaasha AI](common:assistants-recipes): tusaalooyin dhab ah, mid kasta oo leh qalabka uu isticmaalo.
