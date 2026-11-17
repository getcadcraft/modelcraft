---
title: Koristi ModelCraft s AI asistentom
summary: Dozvoli svom AI asistentu ili skripti da pogleda model i napravi jednostavna tijela: dozvole, povezivanje preko CadCraft Studija i dnevnik aktivnosti.
keywords: ai, asistent, agent, mcp, model context protocol, skripta, automatizacija, modeliranje, kutija, cilindar, render, red renderovanja, dozvole, prekini vezu, aktivnost
from: 629cd0b7
---

## Šta ćeš naučiti

Kako dozvoliti AI asistentu (ili skripti koju si napisao) da radi s ModelCraftom, i kako odrediti šta smije da dira.

ModelCraft nema vlastitu AI i ništa ne šalje nigdje. Asistenta donosiš sam: bilo koji program koji govori Model Context Protocol (MCP). ModelCraft mu daje samo alate, a ti biraš koje.

## Uključi

1. Otvori {{ui:Postavke}} (zupčanik u traci aplikacije ili {{key:Mod+,}}) i idi na karticu {{ui:ModelCraft}}.
2. Ispod {{ui:Asistenti}} označi **Dozvoli AI asistentima i skriptama da koriste ModelCraft**. Dok to ne uradiš, opcija je isključena.
3. Odaberi šta smije da radi: **Čitanje** je označeno na početku; označi **Uređivanje**, **Spasi** ili **Izvezi** samo kad ti zatreba.

Alati izvan dozvola koje si označio ne nude se asistentu. Ako ga ipak zatraži, ModelCraft ga odbija i upisuje u dnevnik aktivnosti. Isključivanjem prekidača odmah se prekidaju sve veze; i {{ui:Vrati postavke ModelCraft-a}} ga isključuje.

## Poveži asistenta

Asistenti se povezuju preko **CadCraft Studija** na tvom računaru: Studio pokreće mali server koji može dosegnuti samo ovaj računar, zaštićen tokenom koji pravi pri svakom pokretanju. U Studiju izaberi {{ui:Poveži asistenta}} i kopiraj adresu i token u svog asistenta (Studio prikazuje tačne postavke za lijepljenje). Token nikad ne dijeli.

:::note
Kartica preglednika ne može otvoriti vezu za asistenta: u aplikacijama u pregledniku prekidač nema efekta dok ne koristiš CadCraft Studio na svom računaru.
:::

## Ti ostaješ u kontroli

- **Svaka promjena je jedan korak poništavanja**, označen imenom koje joj asistent daje (na primjer „Assistant: box“). {{key:Mod+Z}} poništava asistentovu posljednju promjenu u cjelini.
- **Znaš kada je asistent povezan.** Dugme u traci aplikacije imenuje asistenta dok je povezan; klikni na njega da vidiš šta smije da radi ili da **Prekini vezu**.
- **Aktivnost.** {{ui:Postavke}} › {{ui:ModelCraft}} › {{ui:Asistenti}} › {{ui:Aktivnost}} prikazuje svaki poziv: kada, koji alat, da li je izvršen ili odbijen. {{ui:Sačuvaj dnevnik}} čuva kopiju.

## Šta asistent može da traži

| Alat | Dozvola | Šta radi |
|---|---|---|
| `app_info`, `model_describe` | Čitanje | Jedinica modela, veličina i svaka grupa i komponenta s mjestom gdje je, da li je zatvoreno tijelo i njegova zapremina |
| `view_screenshot` | Čitanje | Slika 3D prikaza kakav se vidi |
| `box_add`, `cylinder_add` | Uređivanje | Kutija ili cilindar kao nova grupa, na mjestu i u veličini koje ti ili asistent zadaš („3m“, „10'“ ili broj u jedinici modela) |
| `instance_move`, `instances_erase` | Uređivanje | Pomjera ili briše grupe i komponente |
| `faces_list`, `materials_list` | Čitanje | Površine grupe ili slobodne geometrije (smjer, površina i središte svake); materijali i boje kojima može da boji |
| `push_pull` | Uređivanje | Gura ili vuče površinu, kao što to radi {{ui:Gurni/povuci}} |
| `paint` | Uređivanje | Boji površine ili cijelu grupu bojom ili materijalom |
| `group_make` | Uređivanje | Pravi grupu ili komponentu od slobodnih površina i grupa |
| `scene_add`, `scene_show` | Uređivanje | Sprema pogled kao scenu; prelazi na sačuvanu scenu |
| `mesh_add` | Uređivanje | Objekat mreže za početak (kocka, sfera, cilindar …), kako ga dodaje radni prostor Mreža |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Čitanje / Uređivanje | Niz modifikatora mreže: zrcaljenje, niz, podjela površine, skošenje i ostali; ništa se ne primjenjuje zauvijek |
| `usd_export` | Izvoz | Model kao OpenUSD (.usda, .usdc ili .usdz), kako ga piše čuvanje modela kao USD ([USD](topic:usd)); u mapu koju si dozvolio u Studiju, inače kao preuzimanje |
| `render_still` | Izvoz | Renderovana slika prikaza ili sačuvane scene, kako je pravi dugme {{ui:Renderuj}} u dijalogu {{ui:Renderuj}}, s tvojim postavkama renderovanja osim ako ne traži druge (predložak scene: vanjski, unutrašnji, presjek, noć ili auto; brzo ili visoki kvalitet, veličina, uzorci, nebo); PNG koji može da pogleda, ili PNG, EXR ili datoteku renderovanja u mapi koju si dozvolio u Studiju ([Renderuj sliku](topic:render)) |
| `render_queue` | Izvoz | Dodaje visokokvalitetne slike u red dijaloga Renderuj (pogled ili sačuvane scene) i pokreće red; gotove slike idu u mapu koju si dozvolio, ili ostaju u {{ui:Red renderovanja}} u dijalogu Renderuj za tebe. Treba WebGPU |
| `link_push` | Uređivanje | Ažurira model povezan iz drugog programa (vidi [Drži .3dm model živim](topic:live-3dm-link)) |
| `link_status` | Čitanje | Kaže da li je povezani model još tu i kada je zadnji put ažuriran |
| `undo` | Uređivanje | Poništava vlastite korake |

Tijela koja asistent napravi ulaze kao grupe, pa se nikad ne spajaju s onim što si nacrtao. Nema alata koji sprema model: spašavanje ostaje na tebi, a izvoz ili renderovanje traže označeno **Izvezi**. Renderovanje ne mijenja ništa u modelu; renderovanje sačuvane scene pomjera pogled na nju, kao što to radi {{ui:Scene}}.

## Ako nešto ne radi

- **Asistent ne vidi alate ModelCraft-a:** provjeri da je prekidač uključen u ovom prozoru i da je prozor otvoren u Studiju.
- **„needs the edit permission“:** označi **Uređivanje** ispod {{ui:Asistenti}}, pa ponovo zatraži.
- **Greške „401“ ili „token“:** token se promijenio (Studio je ponovo pokrenut ili {{ui:Novi token}}). Kopiraj novi u postavke asistenta.

## Vidi i

- [Recepti za AI asistente](common:assistants-recipes): primjeri, svaki s alatima koje poziva.
