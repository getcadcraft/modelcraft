---
title: Uporaba ModelCraft s pomočnikom z umetno inteligenco
summary: Naj vaš lastni pomočnik z umetno inteligenco ali skript pogleda model in gradi preprosta telesa: dovoljenja, povezava prek CadCraft Studio in dnevnik dejavnosti.
keywords: pomočnik, umetna inteligenca, ai, agent, mcp, model context protocol, skript, avtomatizacija, modeliranje, kvader, valj, upodobitev, vrsta upodobitev, dovoljenja, prekini povezavo, dejavnost
from: 629cd0b7
---

## Kaj se boste naučili

Kako lahko pomočnik z umetno inteligenco (ali skript, ki ste ga napisali) dela z ModelCraft in kako določite, česa se sme dotikati.

ModelCraft **nima lastne umetne inteligence** in ničesar ne pošilja nikamor. Pomočnika prinesete sami: katerikoli program, ki podpira Model Context Protocol (MCP). ModelCraft mu da le orodja, izberete pa, katera.

## Vklop

1. Odprite {{ui:Nastavitve}} (zobnik v vrstici aplikacije ali {{key:Mod+,}}) in pojdite na zavihek {{ui:ModelCraft}}.
2. V razdelku {{ui:Pomočniki}} označite **Dovoli pomočnikom z umetno inteligenco in skriptom uporabo ModelCraft**. Dokler tega ne storite, je izklopljeno.
3. Izberite, kaj sme početi: **Branje** je označeno na začetku; označite **Urejanje**, **Shrani** ali **Izvozi** le takrat, ko jih potrebujete.

Orodja, ki niso v označenih dovoljenjih, pomočniku niso ponujena, in če jih vseeno zahteva, ModelCraft zahtevo zavrne in jo zapiše v dnevnik dejavnosti. Izklop stikala prekine vse povezave naenkrat; {{ui:Ponastavi nastavitve ModelCraft}} ga prav tako izklopi.

## Povežite pomočnika

Pomočniki se povežejo prek **CadCraft Studio** na vašem računalniku: Studio zažene majhen strežnik, do katerega lahko dostopa samo ta računalnik, zaščiten z žetonom, ki ga ob vsakem zagonu ustvari. V Studiu izberite {{ui:Poveži pomočnika}} in naslov ter žeton kopirajte v svojega pomočnika (Studio pokaže točne nastavitve za prilepitev). Žetona nikoli ne delite.

:::note
Zavihek brskalnika ne more odpreti povezave za pomočnika: v aplikacijah v brskalniku stikalo nima učinka, dokler ne uporabite CadCraft Studio na svojem računalniku.
:::

## Ostanete v nadzoru

- **Vsaka sprememba je en korak razveljavitve**, označen z imenom pomočnika za to dejanje (na primer „Pomočnik: kvader“). {{key:Mod+Z}} vrne zadnjo spremembo pomočnika v celoti.
- **Vedeli boste, kdaj je povezan.** Gumb v vrstici aplikacije med povezavo navede pomočnika; kliknite ga, da vidite, kaj sme, ali da ga **prekinete povezavo**.
- **Dejavnost.** {{ui:Nastavitve}} › {{ui:ModelCraft}} › {{ui:Pomočniki}} › {{ui:Dejavnost}} izpiše vsak klic: kdaj, katero orodje in ali je bil opravljen ali zavrnjen. {{ui:Shrani dnevnik}} shrani kopijo.

## Kaj lahko pomočnik zahteva

| Orodje | Dovoljenje | Kaj počne |
|---|---|---|
| `app_info`, `model_describe` | Branje | Enota modela, velikost ter vsaka skupina in komponenta z mestom, ali je zaprto telo in njegova prostornina |
| `view_screenshot` | Branje | Slika 3D pogleda, kakor je prikazan |
| `box_add`, `cylinder_add` | Urejanje | Kvader ali valj kot nova skupina na mestu in v velikosti, ki ju vi ali pomočnik navedete („3m“, „10'“ ali število v enoti modela) |
| `instance_move`, `instances_erase` | Urejanje | Premakne ali izbriše skupine in komponente |
| `faces_list`, `materials_list` | Branje | Ploskve skupine ali proste geometrije (smer, ploščina in središče vsake); materiali in barve, s katerimi lahko barva |
| `push_pull` | Urejanje | Potisne ali povleče ploskev, kot to naredi {{ui:Potisni/povleci}} |
| `paint` | Urejanje | Pobarva ploskve ali celotno skupino z barvo ali materialom |
| `group_make` | Urejanje | Naredi skupino ali komponento iz prostih ploskev in skupin |
| `scene_add`, `scene_show` | Urejanje | Shrani pogled kot prizor; preklopi na shranjen prizor |
| `mesh_add` | Urejanje | Predmet mreže, iz katerega začnete (kocka, krogla, valj …), kakor ga doda delovno okolje Mreža |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Branje / Urejanje | Sklad modifikatorjev mreže: zrcali, matrika, podrazdelitev, skos in ostali; nič ni trajno uporabljeno |
| `usd_export` | Izvozi | Model kot OpenUSD (.usda, .usdc ali .usdz), kakor ga zapiše shranjevanje modela kot USD ([USD](topic:usd)); v mapo, ki ste jo dovolili v Studiu, sicer kot prenos |
| `render_still` | Izvozi | Upodobljena slika pogleda ali shranjenega prizora, kakor jo naredi gumb {{ui:Upodobi}} v pogovornem oknu {{ui:Upodobi}}, z vašimi nastavitvami upodabljanja, razen če zahteva druge (prednastavitev prizora: zunanjost, notranjost, prerez, noč ali samodejno; hitro ali visoka kakovost, velikost, vzorci, nebo); PNG, ki ga lahko pogleda, ali PNG, EXR ali datoteka upodobitve v mapi, ki ste jo dovolili v Studiu ([Upodobi sliko](topic:render)) |
| `render_queue` | Izvozi | Doda visokokakovostne slike v {{ui:Vrsta upodobitev}} v pogovornem oknu Upodobi (pogled ali shranjeni prizori) in zažene vrsto; končane slike gredo v mapo, ki ste jo dovolili, ali ostanejo v {{ui:Vrsta upodobitev}} v pogovornem oknu Upodobi. Potrebuje WebGPU |
| `link_push` | Urejanje | Posodobi model, povezan iz drugega programa (glejte [Ohranjanje modela .3dm v živo](topic:live-3dm-link)) |
| `link_status` | Branje | Pove, ali povezani model še obstaja in kdaj je bil nazadnje posodobljen |
| `undo` | Urejanje | Razveljavi lastne korake |

Telesa, ki jih ustvari pomočnik, pridejo kot skupine, zato se nikoli ne zlijejo s tem, kar ste narisali. Orodja za shranjevanje modela ni: shranjevanje ostane vaše, izvoz ali upodabljanje pa zahtevata označeno **Izvozi**. Upodabljanje ne spremeni modela; upodobitev shranjenega prizora premakne pogled nanj, kakor to naredi {{ui:Prizori}}.

## Če kaj ne deluje

- **Pomočnik ne vidi orodij ModelCraft:** preverite, ali je stikalo v tem oknu vklopljeno in ali je okno odprto v Studiu.
- **„potrebuje dovoljenje za urejanje“:** označite **Urejanje** pod {{ui:Pomočniki}}, nato ga ponovno vprašajte.
- **Napake „401“ ali „token“:** žeton se je spremenil (Studio se je znova zagnal ali {{ui:Nov žeton}}). Novi žeton kopirajte v nastavitve pomočnika.

## Glejte tudi

- [Recepti za pomočnike z umetno inteligenco](common:assistants-recipes): obdelani primeri, vsak s orodji, ki jih kliče.
