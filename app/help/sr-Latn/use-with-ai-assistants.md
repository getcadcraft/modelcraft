---
title: Korišćenje ModelCraft-a uz AI asistenta
summary: Neka vaš AI asistent ili skripta pogleda model i pravi jednostavna tela, uz dozvole, povezivanje preko CadCraft Studija i dnevnik aktivnosti.
keywords: ai, asistent, agent, mcp, model context protocol, skripta, automatizacija, modelovanje, kutija, cilindar, render, red za renderovanje, dozvole, prekini vezu, aktivnost
from: 629cd0b7
---

## Šta ćete naučiti

Kako da dozvolite AI asistentu (ili skripti koju ste napisali) da radi sa ModelCraft-om, i kako da odlučite čemu sme da pristupi.

ModelCraft **nema sopstvenu AI** i ništa ne šalje nigde. Vi donosite asistenta: bilo koji program koji govori Model Context Protocol (MCP). ModelCraft mu daje samo alate, a vi birate koje.

## Uključite ga

1. Otvorite {{ui:Podešavanja}} (zupčanik u traci aplikacije, ili {{key:Mod+,}}) i idite na karticu {{ui:ModelCraft}}.
2. Pod {{ui:Asistenti}} štiklirajte **Dozvoli AI asistentima i skriptama da koriste ModelCraft**. Isključeno je dok to ne uradite.
3. Izaberite šta sme da radi: **Čitanje** je štiklirano na početku; štiklirajte **Izmena**, **Sačuvaj** ili **Izvezi** samo kad vam zatrebaju.

Alati van dozvola koje ste štiklirali asistentu se ne nude, a ako ih ipak zatraži, ModelCraft to odbija i upisuje u dnevnik aktivnosti. Isključivanje prekidača prekida sve veze odjednom; {{ui:Vrati podrazumevana ModelCraft podešavanja}} ga takođe isključuje.

## Povežite asistenta

Asistenti se povezuju preko **CadCraft Studija** na vašem računaru: Studio pokreće mali server kome može da pristupi samo ovaj računar, zaštićen tokenom koji se pravi svaki put kad se pokrene. U Studiju izaberite {{ui:Poveži asistenta}} i kopirajte adresu i token u asistenta (Studio prikazuje tačna podešavanja koja treba nalepiti). Nikada ne delite token.

:::note
Pregledač ne može da otvori vezu za asistenta: u aplikacijama u pregledaču prekidač nema učinka dok ne koristite CadCraft Studio na svom računaru.
:::

## Ostajete na kontroli

- **Svaka izmena je jedan korak opoziva**, označen imenom asistenta za nju (na primer „Asistent: kutija”). {{key:Mod+Z}} vraća poslednju izmenu asistenta u celini.
- **Znate kad je jedan povezan.** Dugme u traci aplikacije navodi asistenta dok je povezan; kliknite na njega da vidite šta sme, ili da ga **prekinete** (Disconnect).
- **Aktivnost.** {{ui:Podešavanja}} › {{ui:ModelCraft}} › {{ui:Asistenti}} › {{ui:Aktivnost}} navodi svaki poziv: kada, koji alat, da li je urađeno ili odbijeno. {{ui:Sačuvaj dnevnik}} čuva kopiju.

## Šta asistent može da zatraži

| Alat | Dozvola | Šta radi |
|---|---|---|
| `app_info`, `model_describe` | Čitanje | Jedinica modela, veličina, svaka grupa i komponenta sa mestom, da li je zatvoreno telo i njegova zapremina |
| `view_screenshot` | Čitanje | Slika 3D prikaza kakav se vidi |
| `box_add`, `cylinder_add` | Izmena | Kutija ili cilindar kao nova grupa, na mestu i veličine koju vi ili asistent zadate ("3m", "10'" ili broj u jedinici modela) |
| `instance_move`, `instances_erase` | Izmena | Pomera ili briše grupe i komponente |
| `faces_list`, `materials_list` | Čitanje | Površi grupe ili slobodne geometrije (smer, površina i središte svake); materijali i boje kojima može da boji |
| `push_pull` | Izmena | Gura ili vuče površ, kao što to radi {{ui:Guraj/vuci}} |
| `paint` | Izmena | Boji površi ili celu grupu bojom ili materijalom |
| `group_make` | Izmena | Pravi grupu ili komponentu od slobodnih površi i grupa |
| `scene_add`, `scene_show` | Izmena | Čuva pogled kao scenu; ide na sačuvanu scenu |
| `mesh_add` | Izmena | Mrežni objekat od kog se polazi (kocka, sfera, cilindar …), kako ga dodaje radni prostor {{ui:Mreža}} |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Čitanje / Izmena | Slog modifikatora mreže: ogledalo, niz, podela, skošenje i ostali; ništa se ne primenjuje trajno |
| `usd_export` | Izvezi | Model kao OpenUSD (.usda, .usdc ili .usdz), kako ga piše čuvanje modela kao USD ([USD](topic:usd)); u fasciklu koju ste dozvolili u Studiju, inače kao preuzimanje |
| `render_still` | Izvezi | Renderovana slika prikaza ili sačuvane scene, kako je pravi dugme {{ui:Renderuj}} u dijalogu {{ui:Renderuj}}, sa vašim podešavanjima renderovanja osim ako traži druga (pripremljena scena: spolja, unutra, presek, noć ili automatski; brzo ili visok kvalitet, veličina, uzorci, nebo); PNG koji može da pogleda, ili PNG, EXR ili datoteka renderovanja u fascikli koju ste dozvolili u Studiju ([Renderuj sliku](topic:render)) |
| `render_queue` | Izvezi | Dodaje slike visokog kvaliteta u red dijaloga Renderuj (prikaz ili sačuvane scene) i pokreće red; gotove slike idu u fasciklu koju ste dozvolili, ili ostaju u {{ui:Red za renderovanje}} u dijalogu za vas. Potreban je WebGPU |
| `link_push` | Izmena | Osvežava model povezan iz drugog programa (vidi [Održavanje .3dm modela živim](topic:live-3dm-link)) |
| `link_status` | Čitanje | Kaže da li je povezani model još tu i kad je poslednji put osvežen |
| `undo` | Izmena | Vraća sopstvene korake |

Tela koja asistent pravi ulaze kao grupe, pa se nikad ne stapaju sa onim što ste nacrtali. Nema alata koji čuva model: čuvanje ostaje na vama, a izvoz ili renderovanje traže da bude štiklirano **Izvezi**. Renderovanje ne menja ništa u modelu; renderovanje sačuvane scene pomera pogled na nju, kao što to radi {{ui:Scene}}.

## Ako nešto ne radi

- **Asistent ne vidi ModelCraft alate:** proverite da je prekidač uključen u ovom prozoru i da je prozor otvoren u Studiju.
- **„potrebna je dozvola za izmenu”:** štiklirajte **Izmena** pod {{ui:Asistenti}}, pa ponovo pitajte.
- **Greške „401” ili „token”:** token se promenio (Studio je ponovo pokrenut, ili {{ui:Novi token}}). Kopirajte novi u podešavanja asistenta.

## Pogledajte i

- [Recepti za AI asistente](common:assistants-recipes): primeri koji rade, svaki sa alatima koje poziva.
