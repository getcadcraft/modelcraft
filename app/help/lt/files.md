---
title: Atidarymas, įrašymas, importavimas ir eksportavimas
summary: ModelCraft failas, ką galima įkelti ir išsiųsti, kur keliauja failai ir kas keičiasi neprisijungus bei tarp naršyklių.
keywords: atidaryti, įrašyti, importuoti, eksportuoti, failas, 3dm, skp, atkurti, automatinis įrašymas, naujausi, darbalaukis, atidaryti 3D, perdavimas, atsisiųsti, modelcraft failas, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formatai, neprisijungus, įrašyti kaip
from: 0b4896d1
---

ModelCraft skaito ir rašo failus jūsų kompiuteryje. Nieko neįkeliama: atidaromas failas nuskaitomas jūsų naršyklėje, o įrašomas failas yra atsisiuntimas. Žr. [Kur keliauja jūsų failai](common:your-files).

## Formatai trumpai

| Formatas | Atidaryti | Importuoti | Eksportuoti | Paskirtis |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | taip | ne | {{ui:Įrašyti}} | Jūsų darbo failas. Išsaugo viską. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | taip | taip | {{ui:Įrašyti kaip}}, {{ui:Eksportuoti}} | Atvaizdavimo ir scenų surinkimo programos. ModelCraft USD failas išsaugo viską. Žr. [USD įrašymas, atidarymas ir eksportavimas](topic:usd). |
| SketchUp (`.skp`) | ne | taip | ne | Modelių įkėlimas iš SketchUp. Išsaugo grupes, komponentus, spalvas, tekstūras ant paviršių, žymes ir minkštas briaunas. Žr. [SKP modelio įkėlimas](topic:import-sketchup-files). |
| Collada (`.dae`) | ne | taip | taip | Keitimasis modeliais su kitais 3D modeliavimo įrankiais. Išsaugo grupes, komponentus ir spalvas. |
| OBJ (`.obj`) | ne | taip | taip | Atvaizdavimo ir vizualizavimo programos. |
| glTF (`.glb`, `.gltf`) | ne | taip | tik `.glb` | Žiniatinklio peržiūros įrankiai, žaidimų varikliai, AR. |
| STL (`.stl`) | ne | taip | taip | 3D spausdinimas (milimetrais). |
| PLY (`.ply`) | ne | taip | taip | Tinkliniai modeliai su spalvomis: skenavimai, spalvotas spausdinimas. |
| FBX (`.fbx`) | ne | taip | ne | Modeliai iš animacijos ir žaidimų programų (FBX 2011 ir naujesni). |
| Alembic (`.abc`) | ne | taip | ne | Geometrijos talpyklos, pirmu kadru. |
| STEP (`.step`, `.stp`) | ne | taip | ne | Detalės iš detalių modeliavimo programų ir tiekėjų, kaip uždari tinkleliai tikruoju dydžiu. Žr. [Failų formatai](topic:formats). |
| `.3dm` | ne | taip | ne | NURBS modeliai: polipaviršiai, tinkleliai, kreivės, blokai ir sluoksniai, kaip tinkleliai, briaunos, komponentai ir žymės. Žr. [Importuoti .3dm modelį](topic:import-3dm-files). |
| 3MF (`.3mf`) | ne | ne | taip | 3D spausdinimas su spalvomis (milimetrais). Iš {{ui:Tikrinti, ar tinka 3D spausdinimui (STL arba 3MF)…}}: žr. [Paruošimas 3D spausdinimui](topic:print-3d). |
| IFC (`.ifc`) | ne | ne | taip | BIM programos ir BimCraft. |
| DWG (`.dwg`) | ne | taip | taip | Situacijos ar aukšto planas, pagal kurį modeliuoti; modelio siuntimas į CAD programą. |
| DXF (`.dxf`) | ne | taip | taip | Tas pats, bet bet kuriai CAD programai. |

[Failų formatai išsamiai](topic:formats) nurodo, ką kiekvienas formatas išsaugo ir ko neišsaugo.

## ModelCraft failas

`.modelcraft` faile išsaugomas visas modelis: geometrija, grupės, komponentai, pagalbinės linijos, scenos, vienetai, taip pat kamera ir stilius, kuriuos naudojote įrašydami. Anuliavimo istorija neišsaugoma.

### Modelio atidarymas

1. Spustelėkite {{ui:Atidaryti}} grupėje {{ui:Failas}} arba paspauskite {{key:Mod+O}}.
2. Jei ekrane esantis modelis turi neįrašytų pakeitimų, ModelCraft klausia: „Šis modelis turi neįrašytų pakeitimų. Pirmiausia įrašyti kopiją?“ Pasirinkite {{ui:Įrašyti kopiją}}, {{ui:Atmesti pakeitimus}} arba {{ui:Atšaukti}}.
3. Pasirinkite `.modelcraft` failą.

Modelis atsidaro vienetais, kuriais buvo įrašytas, ir su kamera, su kuria buvo įrašytas. Taip pat galite nuvilkti `.modelcraft` failą ant 3D vaizdo arba spustelėti vieną iš neseniai naudotų failų sąrašo pradžios kortelėje (naršyklės, kurios gali vėl atidaryti failą, ir darbalaukio programa).

:::desktop
Darbalaukio programoje dukart spustelėjus `.modelcraft` failą jis atidaromas ModelCraft, taip pat ir **Atidaryti su** Collada, OBJ, glTF, DWG ar DXF failui (jis importuojamas į naują modelį).
:::

### Modelio įrašymas

Spustelėkite {{ui:Įrašyti}} arba paspauskite {{key:Mod+S}}. Naršyklė atsisiunčia `<pavadinimas>.modelcraft`, kur pavadinimas yra atidaryto failo, o naujam modeliui - „Untitled“.

:::desktop
Darbalaukio programoje {{ui:Įrašyti}} įrašo atidarytą failą toje pačioje vietoje. Naujas modelis klausia, kur jį įrašyti.
:::

- {{ui:Įrašyti kaip}} ({{key:Mod+Shift+S}}) įrašo kopiją kaip `.modelcraft` failą arba kaip [USD](topic:usd); kur naršyklė leidžia, ji paprašo pavadinimo ir vietos. Kitaip pervardykite atsisiųstą failą: kitas įrašymas, atidarius pervadintą failą, naudos naują pavadinimą.
- Kiekvienas įrašymas yra naujas atsisiuntimas. Priklausomai nuo naršyklės nustatymų, jis arba iš karto patenka į atsisiuntimų aplanką, arba klausia, kur įrašyti. Jei tokio pavadinimo failas jau yra, dauguma naršyklių prideda numerį, pavyzdžiui, `Untitled (1).modelcraft`.

:::chromium
Norėdami kiekvieną kartą pasirinkti aplanką, atidarykite naršyklės nustatymus, ieškokite „atsisiuntimai“ ir įjunkite „Klausti, kur įrašyti kiekvieną failą prieš atsisiunčiant“.
:::

:::firefox
Norėdami kiekvieną kartą pasirinkti aplanką, atidarykite **Nustatymai**, tada **Bendra**, ir skiltyje „Atsisiuntimai“ pasirinkite „Visada klausti, kur įrašyti failus“.
:::

:::safari
Norėdami pakeisti, kur atsisiunčiami failai, atidarykite **Safari**, tada **Nustatymai**, tada **Bendra**, ir nustatykite „Atsisiunčiamų failų vieta“.
:::

### Naujo modelio pradžia

Spustelėkite {{ui:Naujas}}. Jei yra neįrašytų pakeitimų, ModelCraft pirma paklausia. Naujas modelis prasideda tuščias, jūsų vietovės vienetais (JAV - pėdomis ir coliais, kitur - milimetrais), be scenų.

### Jei naršyklė užsidaro prieš įrašant

ModelCraft kelioms sekundėms po kiekvieno pakeitimo naršyklėje išsaugo neįrašyto darbo kopiją. Jei skirtukas ar naršyklė užsidaro prieš įrašant, kitą kartą atidarę ModelCraft pamatysite klausimą „Atkurti jūsų darbą?“. Atkūrus modelis atsidaro taip, kaip buvo, bet dar neįrašytas į failą: įrašykite jį, kad išsaugotumėte. Žr. [Darbo atkūrimas](common:recover).

### Iš CadCraft: atidaryti ModelCraft

CadCraft braižymo programoje **Vaizdas**, tada **Daugiau**, tada **Atidaryti ModelCraft** perduoda atvirą brėžinį ModelCraft naujame skirtuke kaip DWG. Jis pasiekia taip, kaip importuotas DWG: linijos ant žemės, grupėje, paruoštos modeliuoti. Nieko neįkeliama; failas perduodamas per jūsų naršyklės saugyklą.

## Importavimas

Importuojant failas pridedamas prie atidaryto modelio; jis jo nepakeičia.

1. Spustelėkite {{ui:Importuoti}} grupėje {{ui:Failas}} arba nuvilkite failą ant 3D vaizdo.
2. Pasirinkite SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG ar DXF failą.

   Failas atkeliauja kaip **viena grupė**, pažymėta, o vaizdas priartėja, kad ją parodytų. Būsenos juostoje nurodoma, kas atkeliavo, ir išvardijama, ko nepavyko importuoti, pavyzdžiui: „Neimportuota: 2 tekstūros“.

3. Norėdami dirbti tiesiogiai su jos geometrija, dukart spustelėkite grupę, kad redaguotumėte jos viduje, arba spustelėkite {{ui:Suskaidyti}}.

Kai kas, ką verta žinoti:

- **Dydis ir viršus:** Collada failuose nurodyta, kokie jų vienetai ir kuri ašis yra viršuje; ModelCraft juos konvertuoja. glTF visada yra metrais. OBJ failuose vienetų nėra: ModelCraft juos skaito kaip metrus, su Y ašimi viršuje. Jei OBJ atkeliauja 1000 kartų per didelis ar per mažas, naudokite [Mastelis](topic:rotate-scale) su koeficientu, pavyzdžiui, `0.001` arba `1000`.
- **DWG ir DXF** atkeliauja kaip linijos (briaunos) ant žemės, o ne kaip paviršiai. Jei brėžinys nenurodo savo vieneto, dialogas pavadinimu „Brėžinio vienetai“ klausia, koks vienas brėžinio vienetas yra. Žr. [Modeliavimas ant situacijos plano](topic:site-plan).
- **Ribos:** failai, didesni nei 300 MB, importui atmetami, o atidarymui - didesni nei 200 MB. Failai, turintys daugiau nei 2 milijonus viršūnių ar paviršių, atmetami kaip per dideli.

## Eksportavimas

1. Spustelėkite {{ui:Eksportuoti}} grupėje {{ui:Failas}}.
2. Pasirinkite formatą: {{ui:glTF dvejetainis (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL spausdinimui (.stl, milimetrais)}}, {{ui:PLY su spalvomis (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC BimCraft (.ifc)}}, {{ui:DWG CAD (.dwg, 2004)}} arba {{ui:DXF CAD (.dxf, R12)}}.

Naršyklė atsisiunčia failą, pavadintą kaip modelis. Eksportuojamas visas modelis, o ne tik pažymėtas pasirinkimas. Tuščias modelis neeksportuojamas: „Modelis tuščias: pirmiausia nubraižykite ką nors.“ Žr. [Modelio eksportavimas į kitas programas](topic:export-model).

## Prisijungus ir neprisijungus

Viskas ModelCraft veikia jūsų kompiuteryje, todėl modeliavimas, atidarymas, įrašymas, importavimas ir eksportavimas veikia be ryšio, kai programa įkelta.

Norėdami atidaryti ModelCraft visiškai be ryšio, prisijungę įrašykite jį naudojimui neprisijungus:

1. Spustelėkite {{ui:Įrašyti neprisijungus}} viršutinėje programos juostoje.
2. Mygtukas rodo eigą („Įrašoma 40 iš 212“), kol įrašo. ModelCraft įrašo savo failus (tarp jų ir DWG skaitiklį), šią pagalbą ir 3D biblioteką, todėl tai gali užtrukti.
3. Kai mygtuke rodoma {{ui:Paruošta neprisijungus}}, ModelCraft atsidaro iš to paties adreso be ryšio, o DWG importas veikia ir be ryšio.

Vėliau spustelėkite {{ui:Paruošta neprisijungus}}, kad {{ui:Įrašyti dar kartą (gauti naujausią versiją)}} arba {{ui:Pašalinti kopiją neprisijungus}}. Jei mygtuke rodoma {{ui:Nepavyko įrašyti}}, dalis failų neatsisiųsti: patikrinkite ryšį ir spustelėkite dar kartą. {{ui:Naudojimas neprisijungus negalimas}} reiškia, kad šis naršyklės langas negali išsaugoti kopijos (privatūs langai ir kai kurie valdomi kompiuteriai). Žr. [Darbas neprisijungus](common:offline).

Debesies įrašymas dar neprieinamas. Kiekvienas modelis yra ten, kur jį įrašote.

:::offline
Esate neprisijungę. Galite toliau modeliuoti ir įrašyti. Jei viršutinėje programos juostoje nerodoma {{ui:Paruošta neprisijungus}}, neperkraukite šio skirtuko, kol vėl nebūsite prisijungę.
:::

## Darbalaukio programa

:::desktop
Naudojate ModelCraft programoje CadCraft Studio, darbalaukio programoje su visomis aštuoniomis programomis. Failai atidaromi ir įrašomi ten, kur pasirinksite.
:::

:::web
ModelCraft veikia naršyklėje Mac, Windows ir Linux sistemose ir CadCraft Studio, darbalaukio programoje su visomis aštuoniomis programomis viename diegimo pakete, iš getcadcraft.com/download.
:::
