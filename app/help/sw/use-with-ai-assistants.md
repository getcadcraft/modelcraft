---
title: Tumia ModelCraft pamoja na msaidizi wa AI
summary: Ruhusu msaidizi wako wa AI au hati yako itazame modeli na kujenga vigumu rahisi: ruhusa, kuunganisha kupitia CadCraft Studio, na kumbukumbu ya shughuli.
keywords: ai, msaidizi, wakala, mcp, model context protocol, hati, otomatiki, uundaji wa modeli, sanduku, silinda, tengeneza picha, foleni ya picha, ruhusa, kukata muunganisho, shughuli
from: 629cd0b7
---

## Utakachojifunza

Jinsi ya kumruhusu msaidizi wa AI (au hati uliyoandika) afanye kazi na ModelCraft, na jinsi ya kuamua anachoruhusiwa kugusa.

ModelCraft haina AI yake yenyewe na haituma chochote popote. Wewe ndiye unayeleta msaidizi: programu yoyote inayozungumza Model Context Protocol (MCP). ModelCraft inampa zana tu, na wewe ndiye unayechagua zipi.

## Iwashe

1. Fungua {{ui:Mipangilio}} (gia kwenye upau wa programu, au {{key:Mod+,}}) kisha nenda kwenye kichupo cha {{ui:ModelCraft}}.
2. Chini ya {{ui:Wasaidizi}}, weka alama kwenye **Ruhusu wasaidizi wa AI na hati zitumie ModelCraft**. Iko imezimwa mpaka uifanye.
3. Chagua anachoruhusiwa kufanya: **Soma** imewekwa alama mwanzoni; weka alama kwenye **Hariri**, **Hifadhi** au **Safirisha** pale tu unapozihitaji.

Zana zilizo nje ya ruhusa ulizoweka alama hazitolewi kwa msaidizi, na akiomba moja hata hivyo, ModelCraft inakataa na kuiandika kwenye kumbukumbu ya shughuli. Kuzima swichi kunamaliza miunganisho yote mara moja; {{ui:Weka upya mipangilio ya ModelCraft}} nayo inaizima.

## Unganisha msaidizi wako

Wasaidizi wanaunganishwa kupitia **CadCraft Studio** kwenye kompyuta yako: Studio inaendesha seva ndogo ambayo kompyuta hii pekee inaweza kuifikia, na inalindwa kwa tokeni ambayo Studio huitengeneza kila inapoanza. Kwenye Studio, chagua {{ui:Unganisha msaidizi}} kisha nakili anwani na tokeni kwenye msaidizi wako (Studio inaonyesha mipangilio kamili ya kubandika). Usiwahi kushiriki tokeni.

:::note
Kichupo cha kivinjari hakiwezi kufungua muunganisho kwa msaidizi: katika programu za kivinjari swichi haina athari mpaka utumie CadCraft Studio kwenye kompyuta yako.
:::

## Bado unadhibiti

- **Kila mabadiliko ni hatua moja ya kutendua**, yenye jina la msaidizi kama lebo yake (kwa mfano "Msaidizi: sanduku"). {{key:Mod+Z}} inarudisha nyuma mabadiliko ya mwisho ya msaidizi kwa ujumla wake.
- **Unajua pale mmoja anapounganishwa.** Kitufe kwenye upau wa programu kinataja msaidizi wakati umeunganishwa; bofya ili kuona anachoruhusiwa kufanya, au ili **Ukate** muunganisho naye.
- **Shughuli.** {{ui:Mipangilio}} › {{ui:ModelCraft}} › {{ui:Wasaidizi}} › {{ui:Shughuli}} inaorodhesha kila wito: wakati, zana ipi, na kama imekamilika au imekataliwa. {{ui:Hifadhi kumbukumbu}} inahifadhi nakala.

## Msaidizi anaweza kuomba nini

| Zana | Ruhusa | Kinachofanya |
|---|---|---|
| `app_info`, `model_describe` | Soma | Kitengo cha modeli, ukubwa, na kila kikundi na kijenzi kilipo, kama ni kigumu kilichofungwa na ujazo wake |
| `view_screenshot` | Soma | Picha ya mwonekano wa 3D kama unavyoonekana |
| `box_add`, `cylinder_add` | Hariri | Sanduku au silinda kama kikundi kipya, mahali na ukubwa unavyotoa wewe au yeye ("3m", "10'" au namba katika kitengo cha modeli) |
| `instance_move`, `instances_erase` | Hariri | Inahamisha au kufuta vikundi na vijenzi |
| `faces_list`, `materials_list` | Soma | Nyuso za kikundi au za jiometri huru (mwelekeo, eneo na katikati ya kila moja); nyenzo na rangi anazoweza kupaka nazo |
| `push_pull` | Hariri | Inasukuma au kuvuta uso, kama {{ui:Sukuma/vuta}} inavyofanya |
| `paint` | Hariri | Inapaka nyuso au kikundi kizima kwa rangi au nyenzo |
| `group_make` | Hariri | Inatengeneza kikundi au kijenzi cha nyuso huru na vikundi |
| `scene_add`, `scene_show` | Hariri | Inahifadhi mwonekano kama tukio; inaenda kwenye tukio lililohifadhiwa |
| `mesh_add` | Hariri | Kitu cha matundu cha kuanzia (kyubu, tufe, silinda …), kama {{ui:Matundu}} inavyokiongeza |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Soma / Hariri | Rafu ya virekebishaji vya matundu: kioo, safu, ugawanyaji wa uso, bevel na vingine; hakuna kinachotumika kwa kudumu |
| `usd_export` | Safirisha | Modeli kama OpenUSD (.usda, .usdc au .usdz), kama kuhifadhi modeli kama USD kunavyoandika ([USD](topic:usd)); kwenye folda uliyoruhusu kwenye Studio, vinginevyo upakuaji |
| `render_still` | Safirisha | Picha iliyotengenezwa ya mwonekano au ya tukio lililohifadhiwa, kama kitufe cha {{ui:Tengeneza picha}} kwenye kisanduku cha {{ui:Tengeneza picha}} kinavyofanya, kwa mipangilio yako ya Tengeneza picha isipoomba mingine (uwekaji wa tukio: nje, ndani, sehemu ya mkato, usiku au otomatiki; haraka au ubora wa juu, ukubwa, sampuli, anga); PNG anayoweza kuitazama, au faili la PNG, EXR au la utoaji kwenye folda uliyoruhusu kwenye Studio ([Tengeneza picha](topic:render)) |
| `render_queue` | Safirisha | Inaongeza picha za ubora wa juu kwenye foleni ya kisanduku cha Tengeneza picha (mwonekano, au matukio yaliyohifadhiwa) na kuendesha foleni; picha zilizokamilika zinaenda kwenye folda uliyoruhusu, au zinabaki kwenye {{ui:Foleni ya picha}} ya kisanduku cha Tengeneza picha kwa ajili yako. Inahitaji WebGPU |
| `link_push` | Hariri | Inasasisha modeli iliyounganishwa kutoka programu nyingine (angalia [Weka modeli ya .3dm hai](topic:live-3dm-link)) |
| `link_status` | Soma | Inasema kama modeli iliyounganishwa bado ipo na ilisasishwa mara ya mwisho lini |
| `undo` | Hariri | Inarudisha nyuma hatua zake yenyewe |

Vigumu vinavyotengenezwa na msaidizi vinaingia kama vikundi, kwa hiyo havichanganyiki kamwe na ulichochora. Hakuna zana inayohifadhi modeli: kuhifadhi kunabaki kwako, na kusafirisha au kutengeneza picha kunahitaji **Safirisha** iwekwe alama. Utengenezaji wa picha haubadilishi chochote kwenye modeli; kutengeneza picha ya tukio lililohifadhiwa kunahamisha mwonekano kwenda kwake, kama {{ui:Matukio}} inavyofanya.

## Ikiwa kitu hakifanyi kazi

- **Msaidizi haoni zana zozote za ModelCraft:** hakikisha swichi imewashwa kwenye dirisha hili, na kwamba dirisha liko wazi kwenye Studio.
- **"needs the edit permission":** weka alama kwenye **Hariri** chini ya {{ui:Wasaidizi}}, kisha uulize tena.
- **Hitilafu za "401" au "token":** tokeni imebadilika (Studio imeanzishwa upya, au umebofya {{ui:Tokeni mpya}}). Nakili mpya kwenye mipangilio ya msaidizi.

## Tazama pia

- [Mapishi ya wasaidizi wa AI](common:assistants-recipes): mifano iliyofanyiwa kazi, kila moja ikiwa na zana inazoita.
