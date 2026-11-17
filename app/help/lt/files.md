---
title: Atidarymas, įrašymas, importavimas ir eksportavimas
summary: ModelCraft failas, ką galite įkelti ir išsiųsti, kur keliauja failai ir kas keičiasi neprisijungus bei tarp naršyklių.
keywords: atidaryti, įrašyti, importuoti, eksportuoti, failas, 3dm, skp, atkurti, automatinis įrašymas, neseniai, darbalaukis, atidaryti 3D, perdavimas, atsisiųsti, modelcraft failas, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formatai, neprisijungus, įrašyti kaip
from: 3f09ab72
---

ModelCraft nuskaito ir įrašo failus jūsų kompiuteryje. Niekas neįkeliama: atidarytas failas nuskaitomas jūsų naršyklėje, o įrašytas failas yra atsisiuntimas. Žr. [Kur keliauja jūsų failai](common:your-files).

## Formatai trumpai

| Formatas | Atidaryti | Importuoti | Eksportuoti | Kam skirtas |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | taip | ne | {{ui:Save}} | Jūsų darbo failas. Išsaugo viską. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | taip | taip | {{ui:Save as}}, {{ui:Export}} | Atvaizdavimo ir scenų surinkimo programoms. ModelCraft savasis USD išsaugo viską. Žr. [Įrašyti, atidaryti ir eksportuoti USD](topic:usd). |
| SketchUp (`.skp`) | ne | taip | ne | Modelių iš SketchUp įkėlimui. Išsaugo grupes, komponentus, spalvas, tekstūras ant paviršių, žymas ir minkštus kraštus. Žr. [Įkelti SKP modelį](topic:import-sketchup-files). |
| Collada (`.dae`) | ne | taip | taip | Modelių keitimui su kitais 3D modeliavimo įrankiais. Išsaugo grupes, komponentus ir spalvas. |
| OBJ (`.obj`) | ne | taip | taip | Atvaizdavimo ir vizualizavimo programoms. |
| glTF (`.glb`, `.gltf`) | ne | taip | tik `.glb` | Žiniatinklio peržiūros programoms, žaidimų varikliams, AR. |
| STL (`.stl`) | ne | taip | taip | 3D spausdinimui (milimetrais). |
| PLY (`.ply`) | ne | taip | taip | Tinklai su spalvomis: skenavimai, spalvotas spausdinimas. |
| FBX (`.fbx`) | ne | taip | ne | Modeliams iš animacijos ir žaidimų programų (FBX 2011 ir naujesnis). |
| Alembic (`.abc`) | ne | taip | ne | Geometrijos talpyklos, pirmuoju kadru. |
| STEP (`.step`, `.stp`) | ne | taip | ne | Detalės iš detalių modeliavimo programų ir tiekėjų, kaip uždari tinklai tikru dydžiu. Žr. [Failų formatai išsamiai](topic:formats). |
| `.3dm` | ne | taip | ne | NURBS modeliai: polipaviršiai, tinklai, kreivės, blokai ir sluoksniai, kaip tinklai, kraštai, komponentai ir žymos. Žr. [Įkelti .3dm modelį](topic:import-3dm-files). |
| 3MF (`.3mf`) | ne | ne | taip | 3D spausdinimui, su spalvomis (milimetrais). Iš {{ui:Check for 3D printing (STL or 3MF)…}}: žr. [Paruošti modelį 3D spausdinimui](topic:print-3d). |
| IFC (`.ifc`) | ne | ne | taip | BIM programoms ir BimCraft. |
| DWG (`.dwg`) | ne | taip | taip | Situacijos planas ar aukšto planas, pagal kurį modeliuoti; modelio siuntimas į CAD programą. |
| DXF (`.dxf`) | ne | taip | taip | Tas pats, bet bet kuriai CAD programai. |

[Failų formatai išsamiai](topic:formats) nurodo, ką kiekvienas formatas išsaugo ir ko neišsaugo.

## ModelCraft failas

`.modelcraft` failas išsaugo visą modelį: geometriją, grupes, komponentus, vadovus, scenas, vienetus, kamerą ir stilių, kuriuos naudojote įrašymo metu. Atšaukimo istorijos jis neišsaugo.

### Modelio atidarymas

1. Spustelėkite {{ui:Open}} grupėje {{ui:File}} arba paspauskite {{key:Mod+O}}.
2. Jei ekrane esantis modelis turi neįrašytų pakeitimų, ModelCraft klausia: „Šis modelis turi neįrašytų pakeitimų. Pirmiausia įrašyti kopiją?“ Pasirinkite {{ui:Save a copy}}, {{ui:Discard changes}} arba {{ui:Cancel}}.
3. Pasirinkite `.modelcraft` failą.

Modelis atsidaro vienetais, kuriais buvo įrašytas, su kamera, kuria buvo įrašytas. Taip pat galite nuvilkti `.modelcraft` failą į 3D vaizdą arba spustelėti vieną iš neseniai naudotų failų sąraše pradžios kortelėje (naršyklės, kurios gali iš naujo atidaryti failą, ir darbalaukio programa).

:::desktop
Darbalaukio programoje dukart spustelėjus `.modelcraft` failą, jis atidaromas ModelCraft. Taip pat **Atidaryti naudojant** atidaro Collada, OBJ, glTF, DWG ar DXF failą (jis importuojamas į naują modelį).
:::

### Modelio įrašymas

Spustelėkite {{ui:Save}} arba paspauskite {{key:Mod+S}}. Naršyklė atsisiunčia `<name>.modelcraft`, kur pavadinimas yra atidaryto failo pavadinimas arba „Be pavadinimo“ naujam modeliui.

:::desktop
Darbalaukio programoje {{ui:Save}} įrašo atidarytą failą į tą pačią vietą. Naujas modelis klausia, kur jį įrašyti.
:::

- {{ui:Save as}} ({{key:Mod+Shift+S}}) įrašo kopiją kaip `.modelcraft` failą arba kaip [USD](topic:usd); kur naršyklė leidžia, prašo pavadinimo ir vietos. Kitu atveju pervardykite atsisiųstą failą: kitas įrašymas, atidarius pervardytą failą, naudos naują pavadinimą.
- Kiekvienas įrašymas yra naujas atsisiuntimas. Priklausomai nuo naršyklės nustatymų, jis arba iškart nukeliauja į atsisiuntimų aplanką, arba klausia, kur įrašyti. Jei aplanke jau yra failas tokiu pavadinimu, dauguma naršyklių prideda numerį, pavyzdžiui, `Untitled (1).modelcraft`.

:::chromium
Norėdami kiekvieną kartą pasirinkti aplanką, atidarykite naršyklės nustatymus, ieškokite „downloads“ ir įjunkite „Ask where to save each file before downloading“.
:::

:::firefox
Norėdami kiekvieną kartą pasirinkti aplanką, atidarykite **Settings**, tada **General**, o skyriuje „Downloads“ pasirinkite „Always ask you where to save files“.
:::

:::safari
Norėdami pakeisti, kur keliauja atsisiuntimai, atidarykite **Safari**, tada **Settings**, tada **General**, ir nustatykite „File download location“.
:::

### Naujo modelio pradžia

Spustelėkite {{ui:New}}. Jei yra neįrašytų pakeitimų, ModelCraft pirmiausia paklausia. Naujas modelis prasideda tuščias, jūsų regiono vienetais (JAV – pėdomis ir coliais, kitur – milimetrais), be scenų.

### Jei naršyklė užsidaro prieš įrašant

ModelCraft kelias sekundes po kiekvieno pakeitimo naršyklėje išsaugo neįrašyto darbo kopiją. Kopija rašoma fone, todėl didelis modelis jūsų nesustabdo, kol ji išsaugoma. Jei skirtukas ar naršyklė užsidaro prieš įrašant, kitą kartą atidarę ModelCraft pamatysite klausimą „Atkurti jūsų darbą?“. Atkūrus modelis atsidaro toks, koks buvo, dar neįrašytas į failą: įrašykite jį, kad išsaugotumėte. Žr. [Atkurti jūsų darbą](common:recover).

### Iš CadCraft: atidaryti programoje ModelCraft

CadCraft braižymo programoje **Vaizdas**, tada **Daugiau**, tada **Atidaryti programoje ModelCraft** perduoda atvirą brėžinį ModelCraft naujame skirtuke kaip DWG. Jis atkeliauja taip, kaip importuotas DWG: linijos ant žemės, grupėje, paruoštos modeliuoti. Niekas neįkeliama; failas praeina per jūsų naršyklės saugyklą.

## Importavimas

Importuojant failas pridedamas prie atidaryto modelio; jis nepakeičia modelio.

1. Spustelėkite {{ui:Import}} grupėje {{ui:File}} arba numeskite failą ant 3D vaizdo.
2. Pasirinkite SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG ar DXF failą.

   Failas atkeliauja kaip **viena grupė**, pažymėta, o vaizdas priartėja, kad ją parodytų. Būsenos juostoje nurodoma, kas atkeliavo, ir išvardijama, ką nepavyko importuoti, pavyzdžiui, „Neimportuota: 2 tekstūros“.

3. Norėdami redaguoti jo geometriją tiesiogiai, dukart spustelėkite grupę, kad redaguotumėte jos viduje, arba spustelėkite {{ui:Explode}}.

Keletas dalykų, kuriuos verta žinoti:

- **Dydis ir viršus:** Collada failai nurodo savo vienetą ir kuri ašis yra viršuje; ModelCraft juos konvertuoja. glTF visada yra metrais. OBJ failuose vienetų nėra: ModelCraft juos skaito kaip metrus, su Y viršuje. Jei OBJ atkeliauja 1000 kartų per didelis arba per mažas, naudokite [Mastelis](topic:rotate-scale) su koeficientu, pavyzdžiui `0.001` arba `1000`.
- **DWG ir DXF** atkeliauja kaip linijos (kraštai) ant žemės, o ne kaip paviršiai. Jei brėžinys nenurodo savo vieneto, atsiranda dialogas pavadinimu „Brėžinio vienetai“, kuris klausia, koks yra vienas brėžinio vienetas. Žr. [Modeliavimas ant situacijos plano](topic:site-plan).
- **Ribos:** failai, didesni nei 300 MB, atmetami importuojant, o didesni nei 200 MB – atidarant. Failai su daugiau nei 2 milijonais viršūnių ar paviršių atmetami kaip per dideli. OBJ, didesnis nei 64 MB, atmetamas prieš skaitant. Tekstiniai failai (Collada, OBJ, ASCII STL, USD tekstas) skaitomi po dalį, apie 4 MB, todėl joks vienas teksto blokas neturi viso failo; 16 MB OBJ mūsų bandymuose atidarant naudojo apie 0.5 GB atminties.

## Eksportavimas

1. Spustelėkite {{ui:Export}} grupėje {{ui:File}}.
2. Pasirinkite formatą: {{ui:glTF binary (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL for printing (.stl, millimeters)}}, {{ui:PLY with colours (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC for BimCraft (.ifc)}}, {{ui:DWG for CAD (.dwg, 2004)}} arba {{ui:DXF for CAD (.dxf, R12)}}.

Naršyklė atsisiunčia failą, pavadintą kaip modelis. Eksportuojamas visas modelis, o ne tik pasirinkimas. glTF, Collada ir OBJ failai rašomi fone, todėl ModelCraft toliau veikia, kol didelis modelis eksportuojamas; atsisiuntimas prasideda, kai failas paruoštas. Tuščias modelis neeksportuojamas: „Modelis tuščias: pirmiausia nubraižykite ką nors.“ Žr. [Modelio eksportavimas kitoms programoms](topic:export-model).

## Prisijungus ir neprisijungus

Viskas ModelCraft veikia jūsų kompiuteryje, todėl modeliavimas, atidarymas, įrašymas, importavimas ir eksportavimas veikia be ryšio, kai programa jau įkelta.

Norėdami atidaryti ModelCraft visiškai be ryšio, prisijungę įrašykite jį naudojimui neprisijungus:

1. Spustelėkite {{ui:Save for offline}} viršutinėje programos juostoje.
2. Mygtukas skaičiuoja („Įrašoma 40 iš 212“), kol įrašo. ModelCraft įrašo savo failus (tarp jų ir DWG skaitiklį), šią pagalbą ir 3D biblioteką, todėl tai gali trukti.
3. Kai mygtuke rodoma {{ui:Offline ready}}, ModelCraft atsidaro iš to paties adreso be ryšio, o DWG importas veikia ir neprisijungus.

Vėliau spustelėkite {{ui:Offline ready}}, kad pasirinktumėte {{ui:Save again (get the newest version)}} arba {{ui:Remove the offline copy}}. Jei mygtuke rodoma {{ui:Could not save}}, kai kurie failai neatsisiųsti: patikrinkite ryšį ir spustelėkite, kad bandytumėte dar kartą. {{ui:Offline not available}} reiškia, kad šis naršyklės langas negali saugoti kopijos (privatūs langai ir kai kurie valdomi kompiuteriai). Žr. [Darbas neprisijungus](common:offline).

Debesies įrašymas dar neprieinamas. Kiekvienas modelis yra ten, kur jį įrašote.

:::offline
Esate neprisijungę. Galite toliau modeliuoti ir įrašyti. Nebent programos juostoje rodoma {{ui:Offline ready}}, neperkraukite šio skirtuko, kol vėl nebūsite prisijungę.
:::

## Darbalaukio programa

:::desktop
Naudojate ModelCraft programoje CadCraft Studio – darbalaukio programoje su visomis aštuoniomis programomis. Failai atsidaro ir įrašomi ten, kur pasirenkate.
:::

:::web
ModelCraft veikia naršyklėje Mac, Windows ir Linux sistemose bei programoje CadCraft Studio – darbalaukio programoje su visomis aštuoniomis programomis viename diegimo pakete, iš getcadcraft.com/download.
:::
