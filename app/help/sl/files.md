---
title: Odpiranje, shranjevanje, uvoz in izvoz
summary: Datoteka ModelCraft, kaj lahko uvozite in izvozite, kam gredo datoteke ter kaj se spremeni brez povezave in med brskalniki.
keywords: odpri, shrani, uvozi, izvozi, datoteka, 3dm, skp, obnovi, samodejno shranjevanje, nedavno, namizje, odpri v 3D, predaja, prenesi, datoteka ModelCraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, oblike, brez povezave, shrani kot
from: 3f09ab72
---

ModelCraft bere in zapisuje datoteke na vašem računalniku. Nič se ne naloži: datoteka, ki jo odprete, se prebere v brskalniku, datoteka, ki jo shranite, pa je prenos. Glejte [Kam gredo vaše datoteke](common:your-files).

## Oblike na kratko

| Oblika | Odpri | Uvozi | Izvozi | Za kaj je |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | da | ne | {{ui:Save}} | Vaša delovna datoteka. Ohrani vse. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | da | da | {{ui:Save as}}, {{ui:Export}} | Programi za upodobitev in sestavljanje prizorov. Lastni USD programa ModelCraft ohrani vse. Glejte [Shranjevanje, odpiranje in izvoz USD](topic:usd). |
| SketchUp (`.skp`) | ne | da | ne | Uvoz modelov iz programa SketchUp. Ohrani skupine, komponente, barve, teksture na ploskvah, oznake in mehke robove. Glejte [Uvoz modela SKP](topic:import-sketchup-files). |
| Collada (`.dae`) | ne | da | da | Izmenjava modelov z drugimi programi za 3D-modeliranje. Ohrani skupine, komponente in barve. |
| OBJ (`.obj`) | ne | da | da | Programi za upodobitev in vizualizacijo. |
| glTF (`.glb`, `.gltf`) | ne | da | samo `.glb` | Spletni pregledovalniki, pogoni za igre, AR. |
| STL (`.stl`) | ne | da | da | 3D-tiskanje (v milimetrih). |
| PLY (`.ply`) | ne | da | da | Mreže z barvami: optični zajemi, barvni tisk. |
| FBX (`.fbx`) | ne | da | ne | Modeli iz programov za animacijo in igre (FBX 2011 in novejši). |
| Alembic (`.abc`) | ne | da | ne | Predpomnilniki geometrije, pri prvem vzorcu. |
| STEP (`.step`, `.stp`) | ne | da | ne | Deli iz programov za modeliranje delov in dobaviteljev, kot zaprte mreže v pravi velikosti. Glejte [Oblike datotek](topic:formats). |
| `.3dm` | ne | da | ne | Modeli NURBS: polploskve, mreže, krivulje, bloki in sloji, kot mreže, robovi, komponente in oznake. Glejte [Uvoz modela .3dm](topic:import-3dm-files). |
| 3MF (`.3mf`) | ne | ne | da | 3D-tiskanje, z barvami (v milimetrih). Iz {{ui:Check for 3D printing (STL or 3MF)…}}: glejte [Priprava modela za 3D-tiskanje](topic:print-3d). |
| IFC (`.ifc`) | ne | ne | da | Programi BIM in BimCraft. |
| DWG (`.dwg`) | ne | da | da | Situacijski ali tlorisni načrt za modeliranje; pošiljanje modela v program CAD. |
| DXF (`.dxf`) | ne | da | da | Enako, za poljuben program CAD. |

[Oblike datotek podrobno](topic:formats) natančno navaja, kaj vsaka oblika ohrani in kaj izpusti.

## Datoteka ModelCraft

Datoteka `.modelcraft` hrani celoten model: geometrijo, skupine, komponente, vodila, prizore, enote ter kamero in slog, ki ste ju uporabljali ob shranjevanju. Zgodovine razveljavitev ne hrani.

### Odpiranje modela

1. Kliknite {{ui:Open}} v skupini {{ui:File}} ali pritisnite {{key:Mod+O}}.
2. Če ima model na zaslonu neshranjene spremembe, ModelCraft vpraša: „Ta model ima neshranjene spremembe. Ali najprej shranim kopijo?“ Izberite {{ui:Save a copy}}, {{ui:Discard changes}} ali {{ui:Cancel}}.
3. Izberite datoteko `.modelcraft`.

Model se odpre v enotah, v katerih je bil shranjen, s kamero, s katero je bil shranjen. Datoteko `.modelcraft` lahko tudi povlečete na 3D-pogled ali kliknete eno izmed nedavnih datotek na začetni kartici (brskalniki, ki lahko znova odprejo datoteko, in namizna aplikacija).

:::desktop
V namizni aplikaciji dvojni klik na datoteko `.modelcraft` odpre ModelCraft; enako naredi **Odpri z** pri datotekah Collada, OBJ, glTF, DWG ali DXF (datoteka se uvozi v nov model).
:::

### Shranjevanje modela

Kliknite {{ui:Save}} ali pritisnite {{key:Mod+S}}. Brskalnik prenese `<name>.modelcraft`, kjer je ime datoteka, ki ste jo odprli, oziroma „Untitled“ za nov model.

:::desktop
V namizni aplikaciji {{ui:Save}} zapiše datoteko, ki ste jo odprli, na isto mesto. Nov model vpraša, kam ga shraniti.
:::

- {{ui:Save as}} ({{key:Mod+Shift+S}}) shrani kopijo kot datoteko `.modelcraft` ali kot [USD](topic:usd); kjer brskalnik to dovoli, zahteva ime in mesto. Sicer datoteko preimenujte: naslednje shranjevanje po odprtju preimenovane datoteke uporabi novo ime.
- Vsako shranjevanje je nov prenos. Glede na nastavitve brskalnika datoteka gre naravnost v mapo s prenosi ali pa vpraša, kam jo shraniti. Če datoteka s tem imenom že obstaja, večina brskalnikov doda številko, na primer `Untitled (1).modelcraft`.

:::chromium
Če želite mapo izbirati vsakič, odprite nastavitve brskalnika, poiščite „prenosi“ in vklopite „Pred prenosom vprašaj, kam shraniti vsako datoteko“.
:::

:::firefox
Če želite mapo izbirati vsakič, odprite **Nastavitve**, nato **Splošno** in pod »Prenosi« izberite „Vedno vprašaj, kam želite shraniti datoteke“.
:::

:::safari
Če želite spremeniti, kam gredo prenosi, odprite **Safari**, nato **Nastavitve**, **Splošno** in nastavite „Lokacija za prenos datotek“.
:::

### Začetek novega modela

Kliknite {{ui:New}}. Če so neshranjene spremembe, ModelCraft najprej vpraša. Nov model se začne prazen, v enoti vaše jezikovne nastavitve (čevlji in palci v Združenih državah, milimetri drugje), brez prizorov.

### Če se brskalnik zapre pred shranjevanjem

ModelCraft v brskalniku nekaj sekund po vsaki spremembi shrani kopijo neshranjenega dela. Zapis poteka v ozadju, zato velik model ne upočasni dela. Če se zavihek ali brskalnik zapre pred shranjevanjem, vas ModelCraft ob naslednjem odprtju vpraša „Obnovite svoje delo?“. Obnovitev odpre model, kakršen je bil, vendar še ne shranjen v datoteko: shranite ga, da ga obdržite. Glejte [Obnovitev dela](common:recover).

### Iz programa CadCraft: Odpri v ModelCraftu

V programu za risanje CadCraft **Pogled**, nato **Več**, nato **Odpri v ModelCraftu** preda odprto risbo ModelCraftu v novem zavihku kot DWG. Pride tako, kot pride uvoženi DWG: črte na tleh, v skupini, pripravljene za modeliranje. Nič se ne naloži; datoteka gre prek lastnega shranjevanja vašega brskalnika.

## Uvoz

Uvoz doda datoteko modelu, ki ga imate odprtega; ne nadomesti ga.

1. Kliknite {{ui:Import}} v skupini {{ui:File}} ali spustite datoteko na 3D-pogled.
2. Izberite datoteko SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG ali DXF.

   Datoteka pride kot **ena skupina**, izbrana, pogled pa se približa, da jo prikaže. Vrstica stanja pove, kaj je prišlo, in našteje, kar ni bilo uvoženo, na primer „Ni uvoženo: 2 teksturi“.

3. Če želite neposredno urejati njeno geometrijo, dvakrat kliknite skupino in jo urejajte od znotraj ali kliknite {{ui:Explode}}.

Nekaj stvari, ki jih morate vedeti:

- **Velikost in smer navzgor:** datoteke Collada navajajo svojo enoto in katera os kaže navzgor; ModelCraft ju pretvori. glTF je vedno v metrih. Datoteke OBJ ne nosijo enote: ModelCraft jih prebere kot metre, z osjo Y navzgor. Če pride OBJ 1000-krat prevelik ali premajhen, uporabite [Merilo](topic:rotate-scale) s faktorjem, na primer `0.001` ali `1000`.
- **DWG in DXF** prideta kot črte (robovi) na tleh, ne kot ploskve. Če risba ne navaja svoje enote, dialog z naslovom „Enote risbe“ vpraša, kaj je ena enota risbe. Glejte [Modeliranje na situacijskem načrtu](topic:site-plan).
- **Omejitve:** datoteke nad 300 MB se pri uvozu zavrnejo, pri odpiranju pa nad 200 MB. Datoteke z več kot 2 milijonoma oglišč ali ploskev so zavrnjene kot prevelike. OBJ nad 64 MB je zavrnjen, preden se prebere. Besedilne datoteke (Collada, OBJ, ASCII STL, besedilni USD) se berejo po kosih, po približno 4 MB, zato noben kos besedila ne drži celotne datoteke; 16 MB OBJ je v našem testu med odpiranjem porabil približno 0.5 GB pomnilnika.

## Izvoz

1. Kliknite {{ui:Export}} v skupini {{ui:File}}.
2. Izberite obliko: {{ui:glTF binary (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL for printing (.stl, millimeters)}}, {{ui:PLY with colours (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC for BimCraft (.ifc)}}, {{ui:DWG for CAD (.dwg, 2004)}} ali {{ui:DXF for CAD (.dxf, R12)}}.

Brskalnik prenese datoteko, poimenovano kot model. Izvozi se ves model, ne samo izbor. Datoteke glTF, Collada in OBJ se pišejo v ozadju, zato ModelCraft med izvozom velikega modela še vedno deluje; prenos se začne, ko je datoteka pripravljena. Prazen model se ne izvozi: „Model je prazen: najprej nekaj narišite.“ Glejte [Izvoz modela za druge programe](topic:export-model).

## Na spletu in brez povezave

V ModelCraftu vse deluje na vašem računalniku, zato modeliranje, odpiranje, shranjevanje, uvoz in izvoz delujejo brez povezave, ko je aplikacija naložena.

Če želite odpreti ModelCraft brez kakršne koli povezave, ga med povezavo shranite za delo brez povezave:

1. Kliknite {{ui:Save for offline}} v vrstici aplikacije na vrhu.
2. Gumb med shranjevanjem šteje navzgor („Shranjevanje: 40 od 212“). ModelCraft shrani svoje datoteke (med njimi tudi bralnik DWG), to pomoč in 3D-knjižnico, zato lahko traja nekaj časa.
3. Ko gumb kaže {{ui:Offline ready}}, se ModelCraft odpre z istega naslova brez povezave, uvoz DWG pa deluje tudi brez povezave.

Kliknite {{ui:Offline ready}} pozneje, če želite {{ui:Save again (get the newest version)}} ali {{ui:Remove the offline copy}}. Če gumb kaže {{ui:Could not save}}, nekatere datoteke niso bile prenesene: preverite povezavo in kliknite, da poskusite znova. {{ui:Offline not available}} pomeni, da to okno brskalnika ne more hraniti kopije (zasebna okna in nekateri upravljani računalniki). Glejte [Delo brez povezave](common:offline).

Shranjevanje v oblak še ni na voljo. Vsak model je tam, kamor ga shranite.

:::offline
Trenutno ste brez povezave. Še naprej lahko modelirate in shranjujete. Če vrstica aplikacije ne kaže {{ui:Offline ready}}, ne osvežujte tega zavihka, dokler spet niste na spletu.
:::

## Namizna aplikacija

:::desktop
Uporabljate ModelCraft v programu CadCraft Studio, namizni aplikaciji z vsemi osmimi aplikacijami. Datoteke se odpirajo in shranjujejo tam, kjer izberete.
:::

:::web
ModelCraft deluje v brskalniku na Macu, Windows in Linuxu ter v programu CadCraft Studio, namizni aplikaciji z vsemi osmimi aplikacijami v eni namestitvi, s strani getcadcraft.com/download.
:::
