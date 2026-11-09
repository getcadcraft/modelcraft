---
title: Odpiranje, shranjevanje, uvoz in izvoz
summary: Datoteka ModelCraft, kaj lahko uvozite in pošljete ven, kam gredo datoteke ter kaj se spremeni brez povezave in med brskalniki.
keywords: odpri, shrani, uvozi, izvozi, datoteka, 3dm, skp, obnovi, samodejno shranjevanje, nedavno, namizje, odpri v 3D, predaja, prenos, datoteka modelcraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formati, brez povezave, shrani kot
from: 0b4896d1
---

ModelCraft bere in zapisuje datoteke v vašem računalniku. Nič se ne naloži: datoteka, ki jo odprete, se prebere v vašem brskalniku, datoteka, ki jo shranite, pa je prenos. Glejte [Kam gredo vaše datoteke](common:your-files).

## Formati na prvi pogled

| Format | Odpri | Uvozi | Izvozi | Za kaj je |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | da | ne | {{ui:Shrani}} | Vaša delovna datoteka. Ohrani vse. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | da | da | {{ui:Shrani kot}}, {{ui:Izvozi}} | Programi za upodabljanje in sestavljanje prizorov. ModelCraftov lastni USD ohrani vse. Glejte [Shranjevanje, odpiranje in izvoz USD](topic:usd). |
| SketchUp (`.skp`) | ne | da | ne | Uvoz modelov iz SketchUpa. Ohrani skupine, komponente, barve, teksture na ploskvah, oznake in mehke robove. Glejte [Uvoz modela SKP](topic:import-sketchup-files). |
| Collada (`.dae`) | ne | da | da | Izmenjava modelov z drugimi 3D-modelirniki. Ohrani skupine, komponente in barve. |
| OBJ (`.obj`) | ne | da | da | Programi za upodabljanje in vizualizacijo. |
| glTF (`.glb`, `.gltf`) | ne | da | samo `.glb` | Spletni pregledovalniki, igralni pogoni, AR. |
| STL (`.stl`) | ne | da | da | 3D-tiskanje (v milimetrih). |
| PLY (`.ply`) | ne | da | da | Mreže z barvami: skeniranja, barvno tiskanje. |
| FBX (`.fbx`) | ne | da | ne | Modeli iz programov za animacijo in igre (FBX 2011 in novejši). |
| Alembic (`.abc`) | ne | da | ne | Predpomnilniki geometrije, na prvem vzorcu. |
| STEP (`.step`, `.stp`) | ne | da | ne | Deli iz programov za modeliranje delov in dobaviteljev, kot zaprte mreže v pravi velikosti. Glejte [Formati datotek](topic:formats). |
| `.3dm` | ne | da | ne | Modeli NURBS: poliploskve, mreže, krivulje, bloki in plasti, kot mreže, robovi, komponente in oznake. Glejte [Uvoz modela .3dm](topic:import-3dm-files). |
| 3MF (`.3mf`) | ne | ne | da | 3D-tiskanje, z barvami (v milimetrih). Iz {{ui:Preveri za 3D-tiskanje (STL ali 3MF)…}}: glejte [Priprava modela za 3D-tiskanje](topic:print-3d). |
| IFC (`.ifc`) | ne | ne | da | Programi BIM in BimCraft. |
| DWG (`.dwg`) | ne | da | da | Tloris parcele ali etaže, na katerem modelirate; pošiljanje modela v program CAD. |
| DXF (`.dxf`) | ne | da | da | Enako, za kateri koli program CAD. |

[Formati datotek podrobno](topic:formats) navaja natančno, kaj vsak format ohrani in kaj izpusti.

## Datoteka ModelCraft

Datoteka `.modelcraft` ohrani ves model: geometrijo, skupine, komponente, vodila, prizore, enote ter kamero in slog, ki ju imate med shranjevanjem. Ne ohrani zgodovine razveljavitev.

### Odpiranje modela

1. Kliknite {{ui:Odpri}} v skupini {{ui:Datoteka}} ali pritisnite {{key:Mod+O}}.
2. Če ima model na zaslonu neshranjene spremembe, vas ModelCraft vpraša: „Ta model ima neshranjene spremembe. Ali najprej shranite kopijo?“ Izberite {{ui:Shrani kopijo}}, {{ui:Zavrzi spremembe}} ali {{ui:Prekliči}}.
3. Izberite datoteko `.modelcraft`.

Model se odpre v enotah, v katerih je bil shranjen, s kamero, s katero je bil shranjen. Datoteko `.modelcraft` lahko tudi spustite na 3D-pogled ali kliknete eno od nedavnih datotek na začetni kartici (brskalniki, ki znajo ponovno odpreti datoteko, in namizna aplikacija).

:::desktop
V namizni aplikaciji dvojni klik na datoteko `.modelcraft` odpre ModelCraft; enako naredi **Odpri z** pri datotekah Collada, OBJ, glTF, DWG ali DXF (uvozijo se v nov model).
:::

### Shranjevanje modela

Kliknite {{ui:Shrani}} ali pritisnite {{key:Mod+S}}. Brskalnik prenese `<ime>.modelcraft`, kjer je ime datoteka, ki ste jo odprli, ali „Untitled“ za nov model.

:::desktop
V namizni aplikaciji {{ui:Shrani}} zapiše odprto datoteko na istem mestu. Nov model vpraša, kam ga shraniti.
:::

- {{ui:Shrani kot}} ({{key:Mod+Shift+S}}) shrani kopijo kot datoteko `.modelcraft` ali kot [USD](topic:usd); kjer to dovoli brskalnik, vpraša za ime in mesto. Sicer datoteko, ki ste jo prenesli, preimenujte: naslednje shranjevanje po odprtju preimenovane datoteke uporabi novo ime.
- Vsako shranjevanje je nov prenos. Odvisno od nastavitev brskalnika gre datoteka naravnost v mapo s prenosi ali pa vpraša, kam jo shraniti. Če datoteka s tem imenom že obstaja, večina brskalnikov doda številko, na primer `Untitled (1).modelcraft`.

:::chromium
Če želite, da se mapa izbere vsakič, v nastavitvah brskalnika poiščite »prenos« in vklopite »Vprašaj, kam shraniti vsako datoteko pred prenosom«.
:::

:::firefox
Če želite, da se mapa izbere vsakič, odprite **Nastavitve**, nato **Splošno** in pod „Prenosi“ izberite „Vedno vprašaj, kam shraniti datoteke“.
:::

:::safari
Če želite spremeniti, kam gredo prenosi, odprite **Safari**, nato **Nastavitve**, nato **Splošno** in nastavite „Mesto za prenos datotek“.
:::

### Nov model

Kliknite {{ui:Novo}}. Če so neshranjene spremembe, vas ModelCraft najprej vpraša. Nov model se začne prazen, v enoti vašega jezika (čevlji in palci v Združenih državah, drugje milimetri), brez prizorov.

### Če se brskalnik zapre pred shranjevanjem

ModelCraft nekaj sekund po vsaki spremembi shrani kopijo neshranjenega dela v brskalniku. Če se zavihek ali brskalnik zapre, preden shranite, vas ModelCraft naslednjič, ko ga odprete, vpraša „Obnoviti vaše delo?“. Obnovitev odpre model, kakršen je bil, še ne shranjen v datoteko: shranite ga, da ga ohranite. Glejte [Obnova dela](common:recover).

### Iz CadCraft: Odpri v ModelCraft

V risalni aplikaciji CadCraft **Pogled**, nato **Več**, nato **Odpri v ModelCraft** preda odprto risbo ModelCraftu v novem zavihku kot DWG. Pride tako, kot pride uvožen DWG: črte na tleh, v skupini, pripravljene za modeliranje. Nič se ne naloži; datoteka gre prek lastnega shranjevanja brskalnika.

## Uvoz

Uvoz doda datoteko odprtemu modelu; ne nadomesti ga.

1. Kliknite {{ui:Uvozi}} v skupini {{ui:Datoteka}} ali spustite datoteko na 3D-pogled.
2. Izberite datoteko SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG ali DXF.

   Datoteka pride kot **ena skupina**, izbrana, in pogled se približa, da jo prikaže. Vrstica stanja pove, kaj je prišlo, in našteje, kar ni bilo uvoženo, na primer „Ni uvoženo: 2 teksturi“.

3. Če želite delati neposredno na njeni geometriji, dvakrat kliknite skupino, da urejate znotraj nje, ali kliknite {{ui:Razstavi}}.

Nekaj stvari, ki jih je treba vedeti:

- **Velikost in smer navzgor:** datoteke Collada povedo svojo enoto in katera os kaže navzgor, ModelCraft pa ju pretvori. glTF je vedno v metrih. Datoteke OBJ nimajo enote: ModelCraft jih bere kot metre, z osjo Y navzgor. Če OBJ pride 1000-krat preveč velik ali premajhen, uporabite [Merilo](topic:rotate-scale) s faktorjem, na primer `0.001` ali `1000`.
- **DWG in DXF** prideta kot črte (robovi) na tleh, ne kot ploskve. Če risba ne pove svoje enote, pogovorno okno z naslovom „Enote risbe“ vpraša, kaj pomeni ena enota risbe. Glejte [Model na situacijskem načrtu](topic:site-plan).
- **Omejitve:** datoteke, večje od 300 MB, se za uvoz zavrnejo, in večje od 200 MB za odpiranje. Datoteke z več kot 2 milijonoma oglišč ali ploskev so zavrnjene kot prevelike.

## Izvoz

1. Kliknite {{ui:Izvozi}} v skupini {{ui:Datoteka}}.
2. Izberite format: {{ui:glTF binarno (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL za tiskanje (.stl, milimetri)}}, {{ui:PLY z barvami (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC za BimCraft (.ifc)}}, {{ui:DWG za CAD (.dwg, 2004)}} ali {{ui:DXF za CAD (.dxf, R12)}}.

Brskalnik prenese datoteko, poimenovano kot model. Izvozi se ves model, ne samo izbor. Prazen model se ne izvozi: „Model je prazen: najprej nekaj narišite.“ Glejte [Izvoz modela za druge programe](topic:export-model).

## Na spletu in brez povezave

Vse v ModelCraftu teče na vašem računalniku, zato modeliranje, odpiranje, shranjevanje, uvoz in izvoz delujejo brez povezave, ko je aplikacija naložena.

Če želite odpreti ModelCraft brez kakršne koli povezave, ga shranite za delo brez povezave, medtem ko ste na spletu:

1. Kliknite {{ui:Shrani za delo brez povezave}} v vrstici aplikacije na vrhu.
2. Gumb med shranjevanjem šteje navzgor („Shranjevanje: 40 od 212“). ModelCraft shrani svoje datoteke (med njimi tudi bralnik DWG), to pomoč in knjižnico 3D, zato lahko traja nekaj časa.
3. Ko gumb piše {{ui:Pripravljeno za delo brez povezave}}, se ModelCraft odpre z istega naslova brez povezave, uvoz DWG pa deluje tudi brez povezave.

Pozneje kliknite {{ui:Pripravljeno za delo brez povezave}} za {{ui:Shrani znova (pridobi najnovejšo različico)}} ali {{ui:Odstrani kopijo brez povezave}}. Če gumb piše {{ui:Shranjevanje ni uspelo}}, nekatere datoteke niso bile prenesene: preverite povezavo in kliknite znova. {{ui:Delo brez povezave ni na voljo}} pomeni, da to okno brskalnika ne more hraniti kopije (zasebna okna in nekateri upravljani računalniki). Glejte [Delo brez povezave](common:offline).

Shranjevanje v oblak še ni na voljo. Vsak model je tam, kjer ga shranite.

:::offline
Ste brez povezave. Še naprej lahko modelirate in shranjujete. Dokler vrstica aplikacije ne prikazuje {{ui:Pripravljeno za delo brez povezave}}, tega zavihka ne osvežujte, dokler spet ne boste na spletu.
:::

## Namizna aplikacija

:::desktop
Uporabljate ModelCraft v CadCraft Studio, namizni aplikaciji z vsemi osmimi aplikacijami. Datoteke se odprejo in shranijo tam, kjer izberete.
:::

:::web
ModelCraft deluje v brskalniku na Macu, Windowsu in Linuxu ter v CadCraft Studio, namizni aplikaciji z vsemi osmimi aplikacijami v eni namestitvi, na naslovu getcadcraft.com/download.
:::
