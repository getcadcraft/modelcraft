---
title: Korištenje ModelCraft-a s AI pomoćnikom
summary: Neka vaš AI pomoćnik ili skripta pogledaju model i izrade jednostavna tijela, uz dopuštenja, povezivanje preko CadCraft Studija i dnevnik aktivnosti.
keywords: ai, pomoćnik, agent, mcp, model context protocol, skripta, automatizacija, modeliranje, kutija, valjak, render, red renderiranja, dopuštenja, odspoji, aktivnost
from: 629cd0b7
---

## Što ćete naučiti

Kako omogućiti AI pomoćniku (ili skripti koju ste napisali) da radi s ModelCraftom i kako odlučiti čega smije dirati.

ModelCraft **nema vlastitu AI** i ništa ne šalje nigdje. Pomoćnika donosite vi: bilo koji program koji govori Model Context Protocol (MCP). ModelCraft mu samo daje alate, a vi birate koje.

## Uključivanje

1. Otvorite {{ui:Postavke}} (zupčanik u traci aplikacije ili {{key:Mod+,}}) i idite na karticu {{ui:ModelCraft}}.
2. Pod {{ui:Pomoćnici}} označite **Dopusti AI pomoćnicima i skriptama da koriste ModelCraft**. Dok to ne učinite, isključeno je.
3. Odaberite što smije raditi: **Čitanje** je na početku označeno; označite **Uređivanje**, **Spremanje** ili **Izvoz** samo kad ih trebate.

Alati izvan dopuštenja koja ste označili ne nude se pomoćniku, a ako ga ipak zatraži, ModelCraft ga odbija i upisuje u dnevnik aktivnosti. Isključivanjem prekidača prekidaju se sve veze odjednom; {{ui:Vrati zadano postavke ModelCraft}} ga također isključuje.

## Povežite svog pomoćnika

Pomoćnici se povezuju preko **CadCraft Studija** na vašem računalu: Studio pokreće mali poslužitelj kojem može pristupiti samo ovo računalo, zaštićen tokenom koji se stvara pri svakom pokretanju. U Studiju odaberite {{ui:Poveži pomoćnika}} i kopirajte adresu i token u svog pomoćnika (Studio prikazuje točne postavke za lijepljenje). Token nikada ne dijelite.

:::note
Kartica preglednika ne može otvoriti vezu za pomoćnika: u aplikacijama u pregledniku prekidač nema učinka dok ne upotrijebite CadCraft Studio na svom računalu.
:::

## Vi ostajete u kontroli

- **Svaka promjena je jedan korak poništavanja**, označen imenom pomoćnika za nju (na primjer "Assistant: box"). {{key:Mod+Z}} poništava posljednju promjenu pomoćnika u cijelosti.
- **Znate kad je pomoćnik povezan.** Gumb u traci aplikacije imenuje pomoćnika dok je povezan; kliknite ga da vidite što smije raditi ili da ga **odspojite**.
- **Aktivnost.** {{ui:Postavke}} › {{ui:ModelCraft}} › {{ui:Pomoćnici}} › {{ui:Aktivnost}} popisuje svaki poziv: kada, koji alat, izvršen ili odbijen. {{ui:Spremi zapisnik}} čuva kopiju.

## Što pomoćnik može tražiti

| Alat | Dopuštenje | Što radi |
|---|---|---|
| `app_info`, `model_describe` | Čitanje | Jedinica modela, veličina i svaka grupa i komponenta s mjestom, je li zatvoreno tijelo i njegov volumen |
| `view_screenshot` | Čitanje | Slika 3D prikaza onakva kakva je prikazana |
| `box_add`, `cylinder_add` | Uređivanje | Kutija ili valjak kao nova grupa, na mjestu i u veličini koju vi ili pomoćnik zadate ("3m", "10'" ili broj u jedinici modela) |
| `instance_move`, `instances_erase` | Uređivanje | Pomiče ili briše grupe i komponente |
| `faces_list`, `materials_list` | Čitanje | Plohe grupe ili slobodne geometrije (smjer, površina i središte svake); materijali i boje kojima može bojati |
| `push_pull` | Uređivanje | Gura ili vuče plohu, kao što radi {{ui:Potisni/povuci}} |
| `paint` | Uređivanje | Boja plohe ili cijelu grupu bojom ili materijalom |
| `group_make` | Uređivanje | Izrađuje grupu ili komponentu od slobodnih ploha i grupa |
| `scene_add`, `scene_show` | Uređivanje | Sprema prikaz kao scenu; prelazi na spremljenu scenu |
| `mesh_add` | Uređivanje | Objekt mreže za početak (kocka, kugla, valjak …), kako ga dodaje radni prostor Mreža |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Čitanje / Uređivanje | Niz modifikatora mreže: zrcaljenje, niz, podjela, skošenje i ostali; ništa se ne primjenjuje trajno |
| `usd_export` | Izvoz | Model kao OpenUSD (.usda, .usdc ili .usdz), kako ga sprema spremanje modela kao USD ([USD](topic:usd)); u mapu koju ste dopustili u Studiju, inače preuzimanje |
| `render_still` | Izvoz | Renderirana slika prikaza ili spremljene scene, kako je izrađuje gumb {{ui:Renderiraj}} u dijaloškom okviru {{ui:Renderiraj}}, s vašim postavkama renderiranja, osim ako ne traži druge (unaprijed postavljena scena: vanjski, unutarnji, presjek, noć ili automatski; brzo ili visoka kvaliteta, veličina, uzorci, nebo); PNG koji može pogledati ili PNG, EXR ili datoteka renderiranja u mapi koju ste dopustili u Studiju ([Renderiranje slike](topic:render)) |
| `render_queue` | Izvoz | Dodaje slike visoke kvalitete u red dijaloškog okvira Renderiraj (prikaz ili spremljene scene) i pokreće red; gotove slike idu u mapu koju ste dopustili ili ostaju za vas u {{ui:Red renderiranja}} dijaloškog okvira Renderiraj. Treba WebGPU |
| `link_push` | Uređivanje | Ažurira model povezan iz drugog programa (vidi [Držite .3dm model živim](topic:live-3dm-link)) |
| `link_status` | Čitanje | Kaže je li povezani model još tu i kada je zadnji put ažuriran |
| `undo` | Uređivanje | Poništava vlastite korake |

Puna tijela koja pomoćnik izradi dolaze kao grupe, pa se nikad ne spajaju s onim što ste nacrtali. Nema alata koji sprema model: spremanje ostaje na vama, a izvoz ili renderiranje traže označeno **Izvoz**. Renderiranje ne mijenja ništa u modelu; renderiranje spremljene scene pomiče prikaz na nju, kao što radi {{ui:Scene}}.

## Ako nešto ne radi

- **Pomoćnik ne vidi ModelCraft alate:** provjerite je li prekidač uključen u ovom prozoru i je li prozor otvoren u Studiju.
- **"needs the edit permission" (treba dopuštenje za uređivanje):** označite **Uređivanje** pod {{ui:Pomoćnici}}, zatim ponovno zatražite.
- **Greške "401" ili "token":** token se promijenio (Studio je ponovno pokrenut ili {{ui:Novi token}}). Kopirajte novi u postavke pomoćnika.

## Pogledajte i

- [Recepti za AI pomoćnike](common:assistants-recipes): primjeri s postupkom, svaki s alatima koje poziva.
