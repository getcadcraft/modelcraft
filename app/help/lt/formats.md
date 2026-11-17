---
title: Failų formatai išsamiai
summary: Tiksliai, ką kiekvienas ModelCraft atidaromas, importuojamas ir eksportuojamas formatas išsaugo, konvertuoja ir palieka.
keywords: formatai, failų tipai, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, talpykla, fbx, 3mf, ifc, dwg, dxf, vienetai, ašys, Y aukštyn, Z aukštyn, milimetrai, ribos
from: c47d2d28
---

ModelCraft modelis yra metrais, o Z (mėlyna) ašis nukreipta aukštyn. Kiekvienas toliau nurodytas formatas konvertuojamas į jį arba iš jo.

## ModelCraft (.modelcraft)

| Kas | Išsamiau |
|---|---|
| Atidaryti | {{ui:Atidaryti}} ({{key:Mod+O}}) arba numesti į vaizdą. Failai, pasibaigiantys `.json`, taip pat priimami |
| Įrašyti | {{ui:Įrašyti}} ({{key:Mod+S}}), kaip parsisiuntimas |
| Išsaugo | Viską: geometriją, paviršius ir jų spalvas, medžiagas ir importuotas tekstūras, lempas, švelnias kraštines, grupes, komponentus, pavadinimus, kreipiamąsias linijas, scenas, vienetus, paskutinę kamerą bei stilių |
| Palieka | Anuliavimo istoriją |
| Riba | 200 MB |

Failas, įrašytas naujesne ModelCraft versija nei jūsų, atmetamas: „Šis modelis įrašytas naujesne ModelCraft versija (failo versija …). Atnaujinkite ModelCraft, kad galėtumėte jį atidaryti.“ Failas, kuris nėra ModelCraft modelis, rodo: „Šis failas nėra ModelCraft modelis (nėra JSON).“ arba „Tai nėra ModelCraft failas, kurio galime atidaryti: …“.

## USD (.usd, .usda, .usdc, .usdz)

Atidaryti, importuoti ir {{ui:Įrašyti kaip}} arba {{ui:Eksportuoti}} › {{ui:USD (.usda, .usdc, .usdz)…}}. USD failas, kurį įrašė ModelCraft, atsidaro vėl nieko nepraradęs; kitų programų USD failai atidaromi kaip [tinkleliai](topic:meshes), grupės, komponentai, lempos ir kameros. Žr. [Įrašyti, atidaryti ir eksportuoti USD](topic:usd).

## Collada (.dae)

Importas ir eksportas. Geriausias formatas keistis modeliais su kitais 3D modeliuotojais.

- **Eksportas:** Collada 1.4.1, Z aukštyn, metrais. Viena geometrija kiekvienam grupės ar komponento apibrėžimui; komponentai įrašomi vieną kartą ir įdedami nuoroda, todėl lieka bendri. Paviršiai su skylėmis arba įgaubtais kontūrais suskaidomi į trikampius. Spalvos tampa medžiagomis. Laisvos kraštinės įrašomos kaip linijos. Pavadinimai, kurie šiame formate neleidžiami, koreguojami, o tikslus pavadinimas išsaugomas šalia.
- **Importas:** trikampiai, daugiakampiai (su skylėmis), trikampių vėduokliai ir juostos tampa paviršiais; linijos – kraštinėmis. Taikomos mazgų transformacijos, failo aukštyn nukreipta ašis ir jo vienetas. Mazgas, įdėtas keliose vietose, arba geometrija, naudojama keliuose mazguose, įkeliama kaip komponentas; kiti mazgai – kaip grupės. Medžiagų spalvos (difuzinės) tampa paviršių spalvomis.
- **Neimportuojama:** tekstūros, apvalkalai (skins) ir morfai, kameros, šviesos, kai kurie transformacijų tipai (look-at ir skew) bei nuorodos į kitus failus. Būsenos juosta juos suskaičiuoja.
- **Prarandama eksportuojant:** kurios kraštinės yra švelnios. **Importuojant** trikampinti paviršiai lieka trikampiais, o įstrižainės sušvelninamos, kad plokšti plotai vis tiek atrodytų kaip vienas paviršius.

## OBJ (.obj, .mtl)

Importas ir eksportas.

- **Importas:** įmeskite `.obj` kartu su jo `.mtl` ir tekstūrų paveikslėliais (arba importuokite vieną `.obj`: jis atkeliauja be medžiagų, o būsenos juosta nurodo, kurio `.mtl` jam reikėjo). Skaitoma metrais, Y aukštyn. Kiekvienas objektas (`o`, kitu atveju `g`) tampa [tinkleliu](topic:meshes), jo paviršiai išlaikomi tokie, kokie yra (keturkampiai lieka keturkampiais). Tekstūros koordinatės, normalės ir viršūnių spalvos išsaugomos. Medžiagos spalvos paveikslėlis (`map_Kd`, PNG, JPEG arba WebP) įkeliamas kaip tekstūra su savo mastelio ir poslinkio parinktimis; kitu atveju – jos spalva (`Kd`). Kraštinės, kur failo normalės lūžta, yra kietos; kai normalių nėra, lemia failo glotninimo grupės. Kiti žemėlapiai (bump, normal), taškai, linijos ir kreivės suskaičiuojami ir praleidžiami. OBJ neturi vieneto, todėl modelis, sukurtas milimetrais ar coliais, atkeliauja neteisingo dydžio: po importo pakeiskite mastelį (žr. [Pasukimas ir mastelis](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Eksportas:** metrais, Y aukštyn, pasaulio koordinatės. Vienas objektas kiekvienam grupės išdėstymui; komponentai įrašomi visi kiekvienoje vietoje. Tinkleliai išlaiko savo paviršius, tekstūros koordinates ir normales; paviršiai, sujungti [švelniomis kraštinėmis](topic:soften), gauna normalę kiekviename kampe. Kai modelis turi spalvų, šalia `.obj` parsisiunčia `.mtl`. Kai yra importuotų tekstūrų, `.obj`, `.mtl` ir paveikslėliai parsisiunčia kartu kaip vienas `.zip`.
- **Riba:** 2 milijonai viršūnių arba paviršių; 64 MB teksto.

## glTF (.glb, .gltf)

Importas ir eksportas, glTF 2.0.

- **Importas:** `.glb` arba `.gltf` kartu su jo `.bin` ir tekstūrų failais: numeskite juos į vaizdą visus iš karto (arba pasirinkite `.glb`). Vienas `.gltf` nurodo failą, kurio jam reikia: „Šiam `.gltf` failui reikia ‚…‘: atidarykite `.glb` versiją arba numeskite `.gltf` kartu su jo failais.“
  - **Tinkleliai** atkeliauja kaip [tinkleliai](topic:meshes), po vieną kiekvienam failo tinkleliui, su failo normalėmis, tekstūros koordinatėmis ir viršūnių spalvomis. Kraštinės, kur failo normalės lūžta, yra kietos; likusios – švelnios. Tinklelis, naudojamas keliose vietose, lieka bendras.
  - **Mazgai** tampa grupėmis, pavadintomis kaip faile. Instancijuoti tinkleliai (EXT_mesh_gpu_instancing) atkeliauja kaip vienas tinklelis, įdėtas daug kartų.
  - **Medžiagos:** pagrindinės spalvos tekstūra (PNG, JPEG arba WebP) atkeliauja kaip tekstūra, išdėstyta pagal failo tekstūros koordinates (su bet kokia tekstūros transformacija), ir išsaugoma įrašant; kitu atveju – pagrindinė spalva. Metalas, šiurkštumas, normalių žemėlapiai, stiklas, skaidrusis lakas, švytėjimas ir kiti medžiagų plėtiniai nuskaitomi, bet kol kas neišsaugomi: būsenos juosta apie tai praneša.
  - **Šviesos** (KHR_lights_punctual): taškinės ir prožektorių šviesos tampa [lempomis](topic:lights). Kryptinės šviesos suskaičiuojamos: saulė apšviečia modelį.
  - **Kameros** tampa [scenomis](topic:scenes).
  - **Odos (skinned) personažai** atkeliauja stovintys taip, kaip juos fiksuoja failas; jų kaulai, animacijos ir morfų taikiniai suskaičiuojami, bet kol kas neišsaugomi.
  - **Suspausti failai** (Draco, meshopt) ir kvantuoti duomenys nuskaitomi. Dekoderiai įkeliami tik tam failui, kuriam jų reikia.
  - Taškai ir linijos suskaičiuojami ir praleidžiami (tinklelis laiko paviršius). KTX2 tekstūros praleidžiamos; paviršiai išlaiko savo spalvą.
- **Eksportas** (`.glb`): glTF 2.0 dvejetainis, metrais, Y aukštyn. Vienas tinklelis kiekvienam apibrėžimui, todėl komponentai lieka bendri. Tinkleliai išlaiko savo normales, tekstūros koordinates ir viršūnių spalvas; paviršiai, sujungti [švelniomis kraštinėmis](topic:soften), turi lygias normales. Spalvos ir medžiagos tampa medžiagomis (medžiaga kaip jos spalva); importuotos tekstūros įrašomos kaip tekstūros. Įjungtos lempos tampa taškinėmis ir prožektorių šviesomis (plotinės lempos neturi glTF atitikmens ir praleidžiamos); scenos tampa kameromis. Laisvos kraštinės praleidžiamos.
- **Riba:** failai iki 300 MB; apie 130 milijonų geometrijos skaičių.

## STL (.stl)

Importas ir eksportas.

- **Importas:** dvejetainis arba ASCII. STL neturi vieneto: jis nuskaitomas kaip **milimetrai**, taip, kaip juos įrašo spausdintuvai ir paties ModelCraft eksportas. Kampai tame pačiame taške sujungiami, todėl uždara dalis atkeliauja kaip uždarasis [tinklelis](topic:meshes). Failo spalvos (VisCAM / SolidView ir Materialise konvencijos) nudažo paviršius.
- **Eksportas** 3D spausdinimui: dvejetainis STL, **milimetrai**, Z aukštyn. Tik trikampiai: grupės ir laisvos kraštinės praleidžiamos. Nudažyti paviršiai išsaugo spalvą pagal VisCAM / SolidView konvenciją, kurią kitos programos ignoruoja, jei jos jos neskaito. Švariam spausdinimui eksportuokite uždarus kūnus.

## STEP (.step, .stp)

Tik importas. STEP – tai, ką siunčia detalių modeliuotojai ir tiekėjai: AP203, AP214 ir AP242 failai.

- **Importas:** ModelCraft pats nuskaito failą puslapyje ir kiekvieną kūną paverčia uždaru [tinkleliu](topic:meshes) iš trikampių: plokšti paviršiai lieka plokšti, kreivieji (cilindrai, kūgiai, sferos, torai, B-splaino paviršiai) tampa daugybe mažų plokščių; kraštinės vieno kreivojo paviršiaus viduje yra švelnios, o tarp dviejų paviršių – aštrios. STEP failai nurodo savo vienetą; modelis atkeliauja tikru dydžiu. Surinkimas atkeliauja su kiekviena detale ten, kur ją padeda failas, kiekviena detalė – savu tinkleliu grupėje, pavadintoje pagal failą. Spalvos, surinkimo medžio detalių pavadinimai ir toleranciniai (PMI) nenuskaitomi.
- **Pranešimai:** tai, kas praleista arba nubraižyta grubiau, pridedama į būsenos eilutę („Pastabos: …“); failas be kūno, pažeistas failas ar failas, viršijantis ribas, nurodo priežastį ir nieko nepridės.
- **Riba:** failai iki 300 MB; 400 000 paviršių ir 8 milijonai trikampių.

## .3dm

Tik importas. `.3dm` failai saugo NURBS modelius: daugiapaviršius, paviršius, tinklelius, kreives ir blokus.

- **Importas:** ModelCraft nuskaito failą pats, puslapyje. Tinkleliai atkeliauja tokie, kokie yra; kiekvienas daugiapaviršio ar ištraukimo paviršius atkeliauja iš atvaizdavimo tinklelio, įrašyto kartu su failu, o jei jo nėra, ModelCraft jį tinkliuoja (plokštumos, NURBS paviršiai, sukimo paviršiai, ištrauktos kreivės, ištraukimai; apkirpti pagal savo kraštines, uždari daugiapaviršiai kaip uždari tinkleliai). Kreivės tampa kraštinėmis, blokai – komponentais (blokai blokuose išsaugomi), sluoksniai – žymomis (paslepiamos, kai išjungtos), objekto spalva (jo paties, jo sluoksnio arba medžiagos) nudažo paviršius. Failas nurodo savo vienetą; modelis atkeliauja tikru dydžiu. Žingsnis po žingsnio: [Importuoti .3dm modelį](topic:import-3dm-files).
- **Pranešimai:** būsenos eilutėje nurodoma, kiek paviršių atkeliavo iš įrašytų tinklelių ir kiek buvo tinkliuota, ir įvardijama, kas praleista: taškai, taškų debesys, tekstas, matmenys, brūkšniuotės, šviesos, SubD objektai, paviršiai paviršių tipų, kurių dar nenuskaitoma, susieti blokai.
- **Riba:** failai iki 300 MB.

## PLY (.ply)

Importas ir eksportas tinkleliams su spalvomis (skenavimai, spalvotas 3D spausdinimas, kiti modeliuotojai).

- **Importas:** ASCII ir dvejetainis. Paviršiai tampa [tinkleliu](topic:meshes) su išsaugotomis normalėmis, tekstūros koordinatėmis ir viršūnių spalvomis; kiekvienas paviršius nudažomas artimiausia iš 4 096 spalvų, kad dabar matytumėte spalvas. PLY neturi nei vieneto, nei ašių konvencijos: koordinatės atkeliauja tokios, kokios yra (metrais, Z aukštyn). PLY, kuriame yra tik taškai, yra taškų debesis: atidarykite jį BimCraft arba CivilCraft.
- **Eksportas:** dvejetainis PLY su pozicijomis, normalėmis ir spalvomis (ir tekstūros koordinatėmis, kai modelis jas turi), metrais, Z aukštyn.

## FBX (.fbx)

Tik importas. FBX 7 failai (nuo 2011 m.), dvejetainiai arba ASCII, nuskaitomi paties ModelCraft skaitytuvu.

- Tinkleliai atkeliauja kaip [tinkleliai](topic:meshes) su savo normalėmis, tekstūros koordinatėmis (kiekvienu UV rinkiniu) ir viršūnių spalvomis; tinklelis, kurį naudoja keli objektai, lieka bendras. Objektai tampa grupėmis su savo transformacijomis (įskaitant sukimo centrus, poslinkius ir išankstinius pasukimus).
- Medžiagos: difuzinė tekstūra – įterpta į failą arba paveikslėlis, numestas kartu su `.fbx` – atkeliauja kaip tekstūra (TGA paveikslėliai išsaugomi kaip PNG); kitu atveju – difuzinė spalva. Kiti medžiagų nustatymai laukia naujo medžiagų modelio.
- Taikoma failo aukštyn nukreipta ašis ir vienetas: viskas atkeliauja Z aukštyn, metrais.
- Taškinės ir prožektorių šviesos tampa [lempomis](topic:lights) (100 FBX intensyvumas yra numatytoji ModelCraft lempa, 800 liumenų: FBX intensyvumai neturi vieneto). Kameros tampa [scenomis](topic:scenes).
- Odos (skinned) personažai atkeliauja poilsio pozoje; kaulai ir animacijos suskaičiuojami, bet kol kas neišsaugomi. Krypčių ir plotinės šviesos bei geometrija, kuri nėra tinkleliai (NURBS, kreivės), suskaičiuojamos ir praleidžiamos.
- FBX 6 ir senesni failai atmetami: įrašykite juos iš naujo kaip FBX 2011 ar naujesnį.

## Alembic (.abc)

Tik importas: geometrijos talpyklos iš animacijos ir efektų programų.

- Tinkleliai (daugiakampiai ir padalijimo tinkleliai) atkeliauja kaip [tinkleliai](topic:meshes), su savo tekstūros koordinatėmis ir normalėmis; transformacijos tampa grupėmis. Alembic yra Y aukštyn ir pasukamas į Z aukštyn; metrais.
- Talpykla su daugybe mėginių (animacija) atkeliauja su pirmuoju mėginiu; būsenos juosta nurodo, kiek jų yra.
- Taškai, kreivės, NURBS paviršiai, kameros ir šviesos suskaičiuojami ir praleidžiami. Failai senuoju HDF5 išdėstymu atmetami: įrašykite juos iš naujo kaip Ogawa Alembic failą.

{{ui:Tikrinti, ar tinka 3D spausdinimui (STL arba 3MF)…}} pirmiausia patikrina formą ir įrašo pasirinkimą arba viską, kas rodoma. Žr. [Paruošti modelį 3D spausdinimui](topic:print-3d).

## 3MF (.3mf)

Tik eksportas, iš {{ui:Tikrinti, ar tinka 3D spausdinimui (STL arba 3MF)…}}. 3MF pagrindas: vienas tinklelis **milimetrais**, Z aukštyn, su spalvomis kaip medžiagomis. Dauguma pjaustymo programų jį skaito, ir, skirtingai nuo STL, jis nurodo savo vienetą. Paslėpti dalykai praleidžiami. Žr. [Paruošti modelį 3D spausdinimui](topic:print-3d).

## DWG ir DXF eksportas (.dwg, .dxf)

CAD programoms. Modelis įrašomas savo vienetu: coliais modeliams pėdomis ir coliais, kitu atveju milimetrais, centimetrais ar metrais (būsenos juosta nurodo, kuris).

- **Paviršiai** tampa 3D paviršiais (trikampiais). Linijos paviršiaus viduje ir švelnios kraštinės įrašomos nematomos, todėl paviršiai atrodo kaip ModelCraft paviršiai.
- **Laisvos kraštinės** tampa linijomis.
- **Grupės ir komponentai** tampa blokais: komponentas įrašomas vieną kartą ir įdedamas tiek kartų, kiek naudojamas, įskaitant pasuktas ir veidrodines kopijas. Grupė, kuri buvo ištempta po pasukimo (todėl įstrižai), įrašoma vietoje.
- **Spalvos:** DWG tiksliai išsaugo kiekvieno paviršiaus spalvą; DXF naudoja artimiausią iš 255 standartinių CAD spalvų.
- **Versijos:** DWG įrašomas kaip AutoCAD 2004 (AC1018), kurį atidaro CAD programos nuo 2004 m. DXF – R12 (AC1009), versija, kurią skaito kiekviena CAD programa; R12 neturi vieneto lauko, todėl nurodykite CAD programai, kurį vienetą naudoti.
- **Neįrašoma:** kreipiamosios linijos, matmenys, scenos ir kamera.

## IFC (.ifc)

Tik eksportas, BimCraft ir kitoms BIM programoms. IFC4 su projektu, vietove, pastatu ir jo aukštais. Kiekviena aukščiausio lygio grupė ar komponentas tampa vienu statybinio elemento atstovu (proxy) su savo pavadinimu; uždarieji įrašomi kaip tūrinės formos (briaunotieji brep), atvirieji – kaip paviršių modeliai; skylės paviršiuose išsaugomos. Laisva aukščiausio lygio geometrija tampa vienu elementu pavadinimu „Laisva geometrija“. Tipų, savybių ar medžiagų nėra.

**Aukštai:** {{ui:Eksportuoti}} › {{ui:IFC aukštai…}} išvardija juos, kiekvieną su pavadinimu ir aukščio žyme ({{ui:Pridėti aukštą}} arba {{ui:Nustatyti pagal modelį}}, kuris sukuria po vieną aukštą kiekvienam aukščiui, ant kurio stovi jūsų aukščiausio lygio grupės). Eksportuojant kiekviena grupė ar komponentas patenka į aukštą, esantį ties jo žemiausiu tašku arba žemiau jo, ir išlaiko savo vietą. Jei aukštų nėra, viskas patenka į vieną aukštą „Lygis 1“, 0 aukštyje. Aukštai išsaugomi ModelCraft faile.

## DWG (.dwg) ir DXF (.dxf)

Importuojama kaip linijos ant žemės (brūkšniuotės ir 3D paviršiai kaip paviršiai); eksportas aprašytas aukščiau. Žr. [Modeliavimas ant situacijos plano](topic:site-plan).

- **Nuskaitoma:** linijos, polilinijos (su lankais), 3D polilinijos, apskritimai, lankai ir blokų nuorodos, įskaitant masyvus, iš modelio erdvės. Nematomi objektai (pavyzdžiui, dinaminio bloko paslėptos būsenos) praleidžiami. Kreivės tampa 48 tiesiomis atkarpomis per pilną apsisukimą.
- **Nuskaitoma nuo 0.4 versijos:** splainai ir elipsės (kaip kraštinės), tekstas, daugiaeilis tekstas ir atributų reikšmės (kaip kraštinės vienlinijiniu šriftu), brūkšniuotės (paviršiai su skylėmis), 3D paviršiai ir užpildyti plotai (paviršiai), bei matmenys (nubraižomi pagal paties brėžinio matmenų blokus).
- **Nuskaitoma nuo 0.7 versijos:** 3D kūnai, sritys ir korpusai (jų ACIS duomenys, DWG ir DXF visų versijų), kiekvienas kaip atskira grupė, uždarieji – kaip kūnai. Paviršiai ne plokštumose, cilindruose, kūgiuose, sferose, toruose ir paprastuose splaino paviršiuose praleidžiami ir išvardijami.
- **Nenuskaitoma:** taškai, lentelės, daugiašakės nuorodos, paveikslėliai ir viskas popieriaus erdvėje.
- **Vienetai:** paimami iš brėžinio, jei jis juos nurodo. Jei ne, ModelCraft klausia.
- **DXF** turi būti ASCII. Dvejetainis DXF atmetamas.
- **DWG** failai nuo AutoCAD R13 iki dabartinio formato (AutoCAD 2018 ir naujesni; AC1012 iki AC1032) nuskaitomi paties ModelCraft DWG skaitytuvu puslapyje; jis yra ModelCraft dalis, todėl veikia neprisijungus visada, kai veikia ModelCraft. Senesnės versijos (R12 ir ankstesnės) ir stipriai pažeisti failai nenuskaitomi; įrašykite juos kaip DXF.
- **Ribos:** koordinatės, didesnės nei 10 000 km nuo pradžios taško, arba daugiau nei 2 milijonai linijų dalių, atmetamos.

## SKP failai

{{ui:Importuoti}} (arba numeskite failą į vaizdą) nuskaito SketchUp failus paties ModelCraft skaitytuvu, puslapyje: niekas neįkeliama, ir tai veikia neprisijungus visada, kai veikia ModelCraft. Išbandyta su SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 ir 2026 failais; kitos versijos turėtų atsidaryti, bet dar nebandytos. Modelis atkeliauja kaip viena grupė, pavadinta pagal failą. Vienas {{key:Mod+Z}} jį vėl pašalina. Žingsnis po žingsnio: [Importuoti SKP modelį](topic:import-sketchup-files).

- **Išsaugoma:** paviršiai su skylėmis, grupės (kaip grupės) ir komponentai (kaip komponentai, bendri), jų pavadinimai ir išdėstymai, spalvos, žymos ant grupių ir komponentų, kraštinės, kurios nėra paviršiaus dalis, bei švelnios ir lygios kraštinės, todėl kreivieji paviršiai lieka lygūs.
- **Spalvos:** paviršiaus savoji medžiaga suteikia jo spalvą. Medžiaga, nudažyta ant grupės ar komponento, tampa tam išdėstymui skirtu dažu, todėl vidiniai paviršiai be savo spalvos ją perima, kaip SketchUp; komponentas, nudažytas dviem spalvomis, lieka vienu komponentu.
- **Žymos** ant grupių ir komponentų tampa ModelCraft žymomis, rodomomis arba paslepiamomis, kaip buvo. Žymos ant laisvų paviršių ir kraštinių neišsaugomos (ModelCraft žymi tik grupes ir komponentus); būsenos juosta jas suskaičiuoja.
- **Paslėpti dalykai atkeliauja paslėpti** (paviršiai, kraštinės, grupės, komponentai, bei paviršiai ir kraštinės su paslėpta žyma), todėl matote tai, ką rodė SketchUp; {{ui:Rodyti visus}} parodo juos.
- **Tekstūros:** paviršius, nudažytas tekstūrine medžiaga, išlaiko savo tekstūrą, išdėstytą kaip faile, o ModelCraft failas išsaugo paveikslėlį. Tekstūra visai grupei ar komponentui, faile trūkstama tekstūra arba paveikslėlis, kurio naršyklės nerodo (pavyzdžiui, Photoshop failas), išsaugo tik medžiagos spalvą.
- **Praleista, ir suskaičiuota būsenos juostoje:** modelyje išdėstyti paveikslėliai. Tekstas, matmenys, kreipiamosios linijos, pjūvio plokštumos, scenos ir stiliai nenuskaitomi.
- **Vienetai:** SketchUp failų viduje naudojami coliai; ModelCraft juos konvertuoja, todėl dydžiai išeina teisingi bet kuriuo vienetu.
- **`.skp` įrašymas** dar neįgyvendintas. Norėdami grąžinti modelį į SketchUp, eksportuokite Collada (`.dae`).

## Nepalaikoma

ModelCraft negali atidaryti 3DS ar IFC failų, ir negali įrašyti 3DS, FBX, STEP, `.3dm` ar SketchUp (`.skp`) failų.
