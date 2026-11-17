---
title: Përdor ModelCraft me një asistent AI
summary: Lejo asistentin tënd AI ose skriptin të shohin modelin dhe të ndërtojnë trupa të thjeshtë: lejet, lidhja përmes CadCraft Studio dhe regjistri i aktivitetit.
keywords: ai, asistent, agjent, mcp, model context protocol, skript, automatizim, modelim, kuti, cilindër, rendero, radha e renderimit, leje, shkëput, aktivitet
from: 629cd0b7
---

## Çfarë do të mësosh

Si të lejosh një asistent AI (ose një skript që ke shkruar) të punojë me ModelCraft, dhe si të vendosësh çfarë lejohet të prekë.

ModelCraft **nuk ka AI të vet** dhe nuk dërgon asgjë askund. Ti sjell asistentin: çdo program që flet Model Context Protocol (MCP). ModelCraft i jep vetëm mjete, dhe ti zgjedh cilat.

## Ndiz

1. Hap {{ui:Cilësimet}} (ingranazhin në shiritin e aplikacionit, ose {{key:Mod+,}}) dhe shko te skheda {{ui:ModelCraft}}.
2. Te {{ui:Asistentët}}, shëno **Lejo asistentët AI dhe skriptet të përdorin ModelCraft**. Ai është i fikur derisa ta bësh këtë.
3. Zgjidh çfarë mund të bëjë: **Lexim** është i zgjedhur që në fillim; shëno **Redaktim**, **Ruaj** ose **Eksport** vetëm kur të duhen.

Mjetet jashtë lejeve që ke shënuar nuk i ofrohen asistentit, dhe nëse ai kërkon një të tillë, ModelCraft e refuzon dhe e shkruan në regjistrin e aktivitetit. Kur fik çelësin, çdo lidhje mbyllet menjëherë; {{ui:Rivendos cilësimet e ModelCraft}} e fik edhe atë.

## Lidh asistentin tënd

Asistentët lidhen përmes **CadCraft Studio** në kompjuterin tënd: Studio nis një server të vogël që vetëm ky kompjuter mund ta arrijë, i mbrojtur nga një token që e krijon çdo herë kur nis. Në Studio, zgjidh {{ui:Lidh një asistent}} dhe kopjo adresën dhe tokenin në asistentin tënd (Studio tregon cilësimet e sakta për t'i ngjitur). Mos e ndaj kurrë tokenin.

:::note
Një skedë shfletuesi nuk mund të hapë një lidhje për një asistent: në aplikacionet e shfletuesit çelësi nuk ka efekt derisa të përdorësh CadCraft Studio në kompjuterin tënd.
:::

## Ti mbetesh përgjegjës

- **Çdo ndryshim është një hap zhbërjeje**, i etiketuar me emrin që i vë asistenti (për shembull "Asistent: kuti"). {{key:Mod+Z}} heq ndryshimin e fundit të asistentit si një e tërë.
- **Ti e di kur është i lidhur një.** Një buton në shiritin e aplikacionit e emëron asistentin ndërsa është i lidhur; kliko për të parë çfarë mund të bëjë, ose për ta **Shkëputur**.
- **Aktiviteti.** {{ui:Cilësimet}} › {{ui:ModelCraft}} › {{ui:Asistentët}} › {{ui:Aktiviteti}} liston çdo thirrje: kur, cilin mjet, dhe nëse u krye apo u refuzua. {{ui:Ruaj regjistrin}} mban një kopje.

## Çfarë mund të kërkojë një asistent

| Mjeti | Leja | Çfarë bën |
|---|---|---|
| `app_info`, `model_describe` | Lexim | Njësia e modelit, madhësia dhe çdo grup e komponent me vendin e vet, nëse është trup i mbyllur dhe vëllimi i tij |
| `view_screenshot` | Lexim | Një foto e pamjes 3D ashtu siç duket |
| `box_add`, `cylinder_add` | Redaktim | Një kuti ose cilindër si grup i ri, në një vend dhe madhësi që jep ti ose ai ("3m", "10'" ose një numër në njësinë e modelit) |
| `instance_move`, `instances_erase` | Redaktim | Zhvendos ose fshin grupe dhe komponentë |
| `faces_list`, `materials_list` | Lexim | Sipërfaqet e një grupi ose të gjeometrisë së lirë (drejtimi, sipërfaqja dhe qendra e secilës); materialet dhe ngjyrat me të cilat mund të lyejë |
| `push_pull` | Redaktim | Shtyn ose tërheq një sipërfaqe, ashtu si e bën {{ui:Shtyj/tërhiq}} |
| `paint` | Redaktim | Lyen sipërfaqe ose një grup të tërë me një ngjyrë ose material |
| `group_make` | Redaktim | Bën një grup ose një komponent nga sipërfaqe dhe grupe të lira |
| `scene_add`, `scene_show` | Redaktim | Ruan pamjen si skenë; shkon te një skenë e ruajtur |
| `mesh_add` | Redaktim | Një objekt rrjete për të nisur (kub, sferë, cilindër …), ashtu si e shton punëtoria e rrjetës |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Lexim / Redaktim | Stiva e modifikuesve të një rrjete: pasqyrë, varg, nënndarje, pjerrësi dhe të tjerë; asgjë nuk aplikohet përgjithmonë |
| `usd_export` | Eksport | Modeli si OpenUSD (.usda, .usdc ose .usdz), ashtu si e shkruan ruajtja e modelit si USD ([USD](topic:usd)); në një dosje që ke lejuar në Studio, përndryshe si shkarkim |
| `render_still` | Eksport | Një foto e renderuar e pamjes ose e një skene të ruajtur, ashtu si e bën butoni {{ui:Rendero}} i dialogut {{ui:Rendero}}, me cilësimet e tua të renderimit përveç nëse kërkon të tjera (një paracaktim skene: jashtë, brenda, prerje, natë ose auto; i shpejtë ose cilësi e lartë, madhësi, mostra, qiell); një PNG që mund ta shohë, ose një skedar PNG, EXR ose renderimi në një dosje që ke lejuar në Studio ([Rendero një foto](topic:render)) |
| `render_queue` | Eksport | Shton foto me cilësi të lartë te radha e dialogut {{ui:Rendero}} (pamja, ose skenat e ruajtura) dhe e ekzekuton radhën; fotot e gatshme shkojnë në një dosje që ke lejuar, ose mbeten te {{ui:Radha e renderimit}} e dialogut për ty. Kërkon WebGPU |
| `link_push` | Redaktim | Përditëson një model të lidhur nga një program tjetër (shih [Mbaj një model .3dm të gjallë](topic:live-3dm-link)) |
| `link_status` | Lexim | Thotë nëse një model i lidhur është ende këtu dhe kur është përditësuar për herë të fundit |
| `undo` | Redaktim | Heq hapat e veta të zhbërjes |

Trupat që bën një asistent hyjnë si grupe, kështu që nuk bashkohen kurrë me atë që ke vizatuar. Nuk ka mjet që ruan modelin: ruajtja mbetet te ti, dhe eksportimi ose renderimi kërkon **Eksport** të shënuar. Një renderim nuk ndryshon asgjë në model; renderimi i një skene të ruajtur e zhvendos pamjen te ajo, ashtu si bën {{ui:Skenat}}.

## Nëse diçka nuk funksionon

- **Asistenti nuk sheh mjete ModelCraft:** kontrollo që çelësi të jetë i ndezur në këtë dritare dhe që dritarja të jetë e hapur në Studio.
- **"duhet leja e redaktimit":** shëno **Redaktim** te {{ui:Asistentët}}, pastaj pyet përsëri.
- **Gabime "401" ose "token":** tokeni ndryshoi (Studio u rinis, ose {{ui:Token i ri}}). Kopjo tokenin e ri në cilësimet e asistentit.

## Shih edhe

- [Recetat për asistentët AI](common:assistants-recipes): shembuj të punuar, secili me mjetet që thërret.
