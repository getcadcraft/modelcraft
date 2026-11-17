---
title: Sebenzisa i-ModelCraft nomsizi we-AI
summary: Vumela umsizi wakho we-AI noma isikripthi sakho sibheke imodeli futhi sakhe amasolidi alula: izimvume, ukuxhuma nge-CadCraft Studio, nerekhodi lomsebenzi.
keywords: ai, umsizi, ejenti, mcp, model context protocol, isikripthi, ukuzenzakalela, ukumodela, ibhokisi, isilinda, renda, uhlu lokurenda, izimvume, nqamula, umsebenzi
from: 629cd0b7
---

## Okuzofunda

Indlela yokuvumela umsizi we-AI (noma isikripthi osibhalile) ukuthi asebenze ne-ModelCraft, nendlela yokunquma okungathintwa yiwo.

I-ModelCraft **ayinayo i-AI yayo** futhi ayithumeli lutho noma kanjani. Wena uletha umsizi: noma yiliphi uhlelo olukhuluma i-Model Context Protocol (MCP). I-ModelCraft inika kuphela amathuluzi, futhi wena unquma ukuthi yimaphi.

## Yivule

1. Vula i-{{ui:Izilungiselelo}} (ugiya esiqeshini se-app bar, noma {{key:Mod+,}}) bese uya kuthebhu ye-{{ui:ModelCraft}}.
2. Ngaphansi kwe-{{ui:Abasizi}}, thikha **Vumela abasizi be-AI nezikripthi ukusebenzisa i-ModelCraft**. Ivaliwe kuze kube yilapho uyivula.
3. Khetha okungenza: **Funda** ithikiwe ekuqaleni; thikha **Hlela**, **Londoloza** noma **Khipha** kuphela uma uzidinga.

Amathuluzi angaphandle kwezimvume ozithikile awanikezwa umsizi, futhi uma eyicela noma kanjani, i-ModelCraft iyayenqaba ibhale kurekhodi lomsebenzi. Ukucima iswitshi kuvala wonke amaxhumanisi ngesikhathi esisodwa; {{ui:Setha kabusha izilungiselelo ze-ModelCraft}} nayo iyicima.

## Xhuma umsizi wakho

Abasizi baxhuma nge-**CadCraft Studio** kukhompyutha yakho: i-Studio iqalisa iseva encane okufinyelelwa yilo lolu khompyutha kuphela, evikelwe ithokheni eyenza yona ngalinye ngalinye lapho iqala. Ku-Studio, khetha {{ui:Xhuma umsizi}} bese ukopisha ikheli nethokheni ubifake kumsizi wakho (i-Studio ikhombisa izilungiselelo ezichaziwe okufanele uzinamathisele). Ungalabelani ithokheni.

:::note
Ithebhu yesiphequluli ayikwazi ukuvula ukuxhumeka komsizi: ezinhlelweni zesiphequluli iswitshi alisebenzi size usebenzise i-CadCraft Studio kukhompyutha yakho.
:::

## Ushiywe ulawula

- **Lonke ushintsho luyisinyathelo esisodwa sokuhlehlisa**, luphawulwe ngegama lomsizi (isibonelo "Umsizi: ibhokisi"). {{key:Mod+Z}} uthatha ushintsho lokugcina lomsizi njengoba lunjalo.
- **Uyazi lapho enye ixhunyiwe.** Inkinobho ku-app bar iqamba umsizi uma exhunyiwe; yiklikele ukuze ubone okungenziwa yiyo, noma ukuze uyi-**Nqamula**.
- **Umsebenzi.** {{ui:Izilungiselelo}} › {{ui:ModelCraft}} › {{ui:Abasizi}} › {{ui:Umsebenzi}} ukhombisa wonke amakholi: nini, yiliphi ithuluzi, aliqedwanga noma alinqatshiwe. {{ui:Gcina irekhodi}} igcina ikhophi.

## Yini umsizi angayicela

| Ithuluzi | Imvume | Okwenzayo |
|---|---|---|
| `app_info`, `model_describe` | Funda | Iyunithi yemodeli, usayizi, nawo wonke amaqembu nezingxenye, nokuthi zikuphi, ukuthi ingabe isolidi evaliwe nevolumu yayo |
| `view_screenshot` | Funda | Isithombe se-3D view njengoba sibonakala |
| `box_add`, `cylinder_add` | Hlela | Ibhokisi noma isilinda njengeqembu elisha, endaweni nosayizi onikezwa wena noma yona ("3m", "10'" noma inani kuyunithi yemodeli) |
| `instance_move`, `instances_erase` | Hlela | Ihambisa noma isule amaqembu nezingxenye |
| `faces_list`, `materials_list` | Funda | Izinhlangothi zeqembu noma zejiyomethri ekhululekile (ngayinye nokuqondisa kwayo, indawo nesikhungo); izinto nemibala engapeyintwa ngayo |
| `push_pull` | Hlela | Isunduza noma ihudula uhlangothi, njengoba {{ui:Sunduza/hudula}} yenza |
| `paint` | Hlela | Upeyinta izinhlangothi noma iqembu lonke ngombala noma impahla |
| `group_make` | Hlela | Yenza iqembu noma ingxenye yezinhlangothi ezikhululekile namaqembu |
| `scene_add`, `scene_show` | Hlela | Ilondoloza ukubuka njengemboniso; iya kumboniso olondoloziwe |
| `mesh_add` | Hlela | Into ye-mesh yokuqala (ikhyubhu, ibhola, isilinda …), njengoba i-Mesh workspace iyingeza |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Funda / Hlela | Isitaki sezinguquli se-mesh: bonisa, i-array, indawo yokuhlukaniswa, i-bevel nezinye; akukho okusetshenziswa ngokuphelele |
| `usd_export` | Khipha | Imodeli njenge-OpenUSD (`.usda`, `.usdc` noma `.usdz`), njengoba ukulondoloza imodeli njenge-USD kubhala ([USD](topic:usd)); efolda oyivumele ku-Studio, uma kungenjalo kuba yidawunilodi |
| `render_still` | Khipha | Isithombe esirendiwe sokubuka noma semboniso elondoloziwe, njengenkinobho ethi {{ui:Renda}} yedayalogi ye-{{ui:Renda}} yenza, nezilungiselelo zakho zokurenda ngaphandle uma icela ezinye (ukusethwa kwemboniso: ngaphandle, ngaphakathi, isigaba, ebusuku noma ozenzakalelayo; okusheshayo noma ikhwalithi ephezulu, usayizi, izampula, ibhodwe); i-PNG ayikwazi ukuyibheka, noma i-PNG, EXR noma ifayela lokurenda kufolda oyivumele ku-Studio ([Renda isithombe](topic:render)) |
| `render_queue` | Khipha | Yengeza izithombe ezikhwalithi ephezulu kuhlu lokurenda ledayalogi ye-Render (ukubuka, noma imiboniso elondoloziwe) bese iqhuba uhlu; izithombe eziqediwe ziya kufolda oyivumele, noma zihlale kuhlu {{ui:Uhlu lokurenda}} ledayalogi ye-Render ngawe. Idinga i-WebGPU |
| `link_push` | Hlela | Ibuyekeza imodeli exhunywe kolunye uhlelo (bona [Gcina imodeli ye-.3dm ibukeka](topic:live-3dm-link)) |
| `link_status` | Funda | Ithi imodeli exhunywe isekhona yini nokuthi yabuyekezwa nini ngokugcina |
| `undo` | Hlela | Ihlehlisa izinyathelo zayo |

Izinto umsizi azenzayo zifika njengamaqembu, ngakho azihlanganisi nalokho okudwebile. Akukho ithuluzi elilondoloza imodeli: ukulondoloza kusalele kuwe, futhi ukukhipha noma ukurenda kudinga ukuthi **Khipha** ithikiwe. Ukurenda akushintshi lutho emodelini; ukurenda imboniso elondoloziwe kuhambisa ukubuka kuyo, njengoba {{ui:Imiboniso}} yenza.

## Uma into ingasebenzi

- **Umsizi awubonanga amathuluzi e-ModelCraft:** hlola ukuthi iswitshi ivuliwe kule window, nokuthi le window ivulekile ku-Studio.
- **"kudinga imvume yokuhlela":** thikha **Hlela** ngaphansi kwe-{{ui:Abasizi}}, bese ubuza futhi.
- **Amaphutha "401" noma "token":** ithokheni ishintshile (i-Studio iqalile kabusha, noma {{ui:Ithokheni entsha}}). Kopisha eyintsha ezilungiselelweni zomsizi.

## Bheka futhi

- [Izindlela zokupheka zabasizi be-AI](common:assistants-recipes): izibonelo ezisebenzayo, ngayinye namathuluzi ayo.
