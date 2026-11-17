---
title: Formate de fișiere în detaliu
summary: Exact ce păstrează, convertește și lasă afară fiecare format pe care ModelCraft îl deschide, importă și exportă.
keywords: formate, tipuri de fișiere, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, cache, fbx, 3mf, ifc, dwg, dxf, unități, axe, Y în sus, Z în sus, milimetri, limite
from: c47d2d28
---

Modelul din ModelCraft este în metri, cu Z (albastru) în sus. Fiecare format de mai jos se convertește din sau către acesta.

## ModelCraft (.modelcraft)

| Ce | Detalii |
|---|---|
| Deschidere | {{ui:Deschidere}} ({{key:Mod+O}}) sau trageți pe vizualizare. Fișierele care se termină în `.json` sunt acceptate și ele |
| Salvare | {{ui:Salvare}} ({{key:Mod+S}}), ca descărcare |
| Păstrează | Totul: geometria, fețele și culorile lor, materialele și texturile importate, lămpile, muchiile moi, grupurile, componentele, numele, ghidajele, scenele, unitățile, precum și ultima cameră și ultimul stil |
| Lasă afară | Istoricul anulărilor |
| Limită | 200 MB |

Un fișier salvat cu un ModelCraft mai nou decât cel instalat este refuzat: „Acest model a fost salvat cu un ModelCraft mai nou (versiunea fișierului …). Actualizați ModelCraft pentru a-l deschide.” Un fișier care nu este un model ModelCraft afișează „Acest fișier nu este un model ModelCraft (nu este JSON).” sau „Acesta nu este un fișier ModelCraft pe care îl putem deschide: …”.

## USD (.usd, .usda, .usdc, .usdz)

Deschidere, import și {{ui:Salvare ca}} sau {{ui:Exportare}} › {{ui:USD (.usda, .usdc, .usdz)…}}. Un fișier USD salvat de ModelCraft se redeschide fără nicio pierdere; fișierele USD ale altor programe se deschid ca plase, grupuri, componente, lămpi și camere. Vedeți [Salvarea, deschiderea și exportul USD](topic:usd).

## Collada (.dae)

Import și export. Cel mai bun format pentru schimbul de modele cu alți modelatori 3D.

- **Export:** Collada 1.4.1, Z în sus, metri. Câte o geometrie pentru fiecare definiție de grup sau componentă; componentele sunt scrise o dată și plasate prin referință, deci rămân partajate. Fețele cu goluri sau cu contururi concave sunt împărțite în triunghiuri. Culorile devin materiale. Muchiile izolate sunt scrise ca linii. Numele care nu sunt valide în format sunt ajustate, iar numele exact se păstrează alături.
- **Import:** triunghiuri, poligoane (cu goluri), evantaie și benzi de triunghiuri devin fețe; liniile devin muchii. Transformările nodurilor, axa verticală a fișierului și unitatea lui se aplică. Un nod plasat în mai multe locuri, sau o geometrie folosită de mai multe noduri, intră ca o componentă; celelalte noduri intră ca grupuri. Culorile materialelor (difuze) devin culori ale fețelor.
- **Neimportate:** texturi, deformări de schelet (skin) și morfuri, camere, lumini, unele tipuri de transformări (look-at și skew) și referințe către alte fișiere. Bara de stare le numără.
- **Pierdute la export:** care muchii sunt moi. **La import,** suprafețele triangulate rămân triunghiuri, cu diagonalele netezite, astfel încât zonele plane să pară o singură suprafață.

## OBJ (.obj, .mtl)

Import și export.

- **Import:** trageți fișierul `.obj` împreună cu `.mtl` și imaginile texturilor (sau importați doar `.obj`: intră fără materiale, iar bara de stare numește fișierul `.mtl` pe care îl dorea). Citit în metri, cu Y în sus. Fiecare obiect (`o`, altfel `g`) devine o [plasă](topic:meshes), fețele sale păstrate așa cum sunt (patrulaterele rămân patrulatere). Coordonatele de textură, normalele și culorile pe vertex sunt păstrate. Imaginea de culoare a unui material (`map_Kd`, PNG, JPEG sau WebP) intră ca textură, cu opțiunile sale de scală și decalaj; altfel, culoarea sa (`Kd`). Muchiile unde normalele fișierului se rup sunt dure; fără normale, grupurile de netezire ale fișierului decid. Alte hărți (bump, normală), punctele, liniile și curbele sunt numărate și lăsate afară. OBJ nu are unitate, deci un model făcut în milimetri sau în inchi ajunge la dimensiunea greșită: scalați-l după import (vedeți [Rotirea și scalarea](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Export:** metri, Y în sus, coordonate globale. Un obiect pentru fiecare plasare de grup; componentele sunt scrise integral la fiecare plasare. Plasele își păstrează fețele, coordonatele de textură și normalele; fețele unite prin [muchii moi](topic:soften) primesc o normală pentru fiecare colț. Când modelul are culori, se descarcă un `.mtl` alături de `.obj`. Când are texturi importate, `.obj`, `.mtl` și imaginile se descarcă împreună, ca un singur `.zip`.
- **Limită:** 2 milioane de vârfuri sau fețe; 64 MB de text.

## glTF (.glb, .gltf)

Import și export, glTF 2.0.

- **Import:** un `.glb`, sau un `.gltf` împreună cu fișierele sale `.bin` și texturile: trageți-le pe vizualizare toate deodată (sau alegeți `.glb`). Un `.gltf` dat singur indică fișierul de care are nevoie: „Acest fișier .gltf are nevoie de „…”: deschideți versiunea .glb sau trageți .gltf împreună cu fișierele sale.”
  - **Plasele** intră ca [plase](topic:meshes), câte una pentru fiecare plasă din fișier, cu normalele, coordonatele de textură și culorile pe vertex ale fișierului păstrate. Muchiile unde normalele fișierului se rup sunt dure; restul sunt moi. O plasă folosită în mai multe locuri rămâne partajată.
  - **Nodurile** devin grupuri, numite ca în fișier. Plasele instanțiate (EXT_mesh_gpu_instancing) intră ca o singură plasă plasată de multe ori.
  - **Materialele:** o textură de culoare de bază (PNG, JPEG sau WebP) intră ca textură, plasată după coordonatele de textură ale fișierului (cu eventuala transformare a texturii), și este păstrată la salvare; altfel, culoarea de bază. Metalul, rugozitatea, hărțile normale, sticla, stratul transparent, pânza (sheen) și celelalte extensii de material sunt citite, dar nu sunt păstrate încă: bara de stare o spune.
  - **Lumini** (KHR_lights_punctual): luminile punctiforme și cele de tip spot devin [lămpi](topic:lights). Luminile direcționale sunt numărate: soarele luminează modelul.
  - **Camerele** devin [scene](topic:scenes).
  - **Personajele cu schelet** intră în poziția de repaus din fișier; oasele, animațiile și țintele de morfare sunt numărate și nu sunt păstrate încă.
  - **Fișierele comprimate** (Draco, meshopt) și datele cuantificate sunt citite. Decodoarele se încarcă doar pentru fișierele care le cer.
  - Punctele și liniile sunt numărate și lăsate afară (o plasă conține fețe). Texturile KTX2 sunt lăsate afară; fețele își păstrează culoarea.
- **Export** (`.glb`): glTF 2.0 binar, metri, Y în sus. Câte o plasă pentru fiecare definiție, deci componentele rămân partajate. Plasele își păstrează normalele, coordonatele de textură și culorile pe vertex; fețele unite prin [muchii moi](topic:soften) au normale netede. Culorile și materialele devin materiale (un material ca propria culoare); texturile importate sunt scrise ca texturi. Lămpile aprinse devin lumini punctiforme și de tip spot (lămpile de arie nu au echivalent glTF și sunt lăsate afară); scenele devin camere. Muchiile izolate sunt lăsate afară.
- **Limită:** fișiere de până la 300 MB; aproximativ 130 de milioane de numere de geometrie.

## STL (.stl)

Import și export.

- **Import:** binar sau ASCII. STL nu are unitate: se citește în **milimetri**, cum scriu imprimantele și exportul propriu al ModelCraft. Colțurile din același punct sunt unite, deci o piesă închisă intră ca o [plasă](topic:meshes) închisă. Culorile din fișier (convențiile VisCAM / SolidView și Materialise) colorează fețele.
- **Export,** pentru imprimare 3D: STL binar, **milimetri**, Z în sus. Doar triunghiuri: grupurile și muchiile izolate sunt lăsate afară. Fețele colorate își păstrează culoarea în convenția VisCAM / SolidView, pe care alte programe o ignoră dacă nu o citesc. Exportați solide închise pentru o imprimare curată.

## STEP (.step, .stp)

Doar import. STEP este formatul pe care îl trimit modelatorii de piese și furnizorii: fișiere AP203, AP214 și AP242.

- **Import:** ModelCraft citește fișierul singur, în pagină, și transformă fiecare solid într-o [plasă](topic:meshes) închisă de triunghiuri: fețele plane rămân plane, fețele curbe (cilindri, conuri, sfere, tori, suprafețe B-spline) devin multe mici fețe plane, cu muchiile din interiorul unei fețe curbe moi și muchiile dintre două fețe ascuțite. Fișierele STEP își declară unitatea; modelul intră la dimensiunea sa reală. Un ansamblu intră cu fiecare piesă acolo unde o plasează fișierul, fiecare piesă cu propria plasă, într-un grup numit după fișier. Culorile, numele pieselor din arborele ansamblului și toleranțele (PMI) nu sunt citite.
- **Mesaje:** ce a fost sărit sau desenat mai grosier se adaugă la linia de stare („Note: …”); un fișier fără solid, un fișier deteriorat sau unul care depășește limitele spune de ce și nu adaugă nimic.
- **Limită:** fișiere de până la 300 MB; 400 000 de fețe și 8 milioane de triunghiuri.

## .3dm

Doar import. Fișierele `.3dm` conțin modele NURBS: polisuprafețe, suprafețe, plase, curbe și blocuri.

- **Import:** ModelCraft citește fișierul singur, în pagină. Plasele intră așa cum sunt; fiecare față a unei polisuprafețe sau a unei extrudări vine din plasa de randare salvată cu ea în fișier, altfel ModelCraft o tesselează (planuri, suprafețe NURBS, suprafețe de revoluție, curbe extrudate, extrudări; decupate de muchiile lor, polisuprafețele închise ca plase închise). Fișierul își declară unitatea; modelul intră la dimensiunea sa reală. Curbele devin muchii, blocurile devin componente (blocurile din blocuri sunt păstrate), straturile devin etichete (ascunse când sunt dezactivate), culoarea obiectului (a sa, a stratului sau a materialului) colorează fețele. Pas cu pas: [Importul unui model .3dm](topic:import-3dm-files).
- **Mesaje:** linia de stare spune câte fețe au venit din plase salvate și câte au fost tesselate și numește ce a fost lăsat afară: puncte, nori de puncte, text, cote, hașuri, lumini, obiecte SubD, fețe pe tipuri de suprafețe încă necitite, blocuri legate.
- **Limită:** fișiere de până la 300 MB.

## PLY (.ply)

Import și export, pentru plase cu culori (scanări, imprimare 3D color, alți modelatori).

- **Import:** ASCII și binar. Fețele devin o [plasă](topic:meshes) cu normalele, coordonatele de textură și culorile pe vertex păstrate; fiecare față este colorată cu cea mai apropiată dintre cele 4,096 de culori, ca să vedeți culorile acum. PLY nu are unitate sau convenție de axe: coordonatele intră așa cum sunt (metri, Z în sus). Un PLY cu doar puncte este un nor de puncte: deschideți-l în BimCraft sau CivilCraft.
- **Export:** PLY binar cu poziții, normale și culori (și coordonate de textură când modelul le are), în metri, Z în sus.

## FBX (.fbx)

Doar import. Fișiere FBX 7 (din 2011 încoace), binare sau ASCII, citite de cititorul propriu al ModelCraft.

- Plasele intră ca [plase](topic:meshes) cu normalele, coordonatele de textură (fiecare set UV) și culorile pe vertex; o plasă folosită de mai multe obiecte rămâne partajată. Obiectele devin grupuri cu transformările lor (pivoturi, decalaje și pre-rotații incluse).
- Materiale: textura difuză — inclusă în fișier sau o imagine trasă împreună cu `.fbx` — intră ca textură (imaginile TGA sunt păstrate ca PNG); altfel, culoarea difuză. Celelalte setări de material așteaptă noul model de materiale.
- Axa verticală și unitatea fișierului se aplică: totul intră cu Z în sus, în metri.
- Luminile punctiforme și de tip spot devin [lămpi](topic:lights) (o intensitate FBX de 100 este lampa implicită a ModelCraft, 800 de lumeni: intensitățile FBX nu au unitate). Camerele devin [scene](topic:scenes).
- Personajele cu schelet intră în repaus; oasele și animațiile sunt numărate și nu sunt păstrate încă. Luminile direcționale și de arie, precum și geometria altceva decât plasele (NURBS, curbe), sunt numărate și lăsate afară.
- Fișierele FBX 6 și mai vechi sunt refuzate: salvați-le din nou ca FBX 2011 sau mai nou.

## Alembic (.abc)

Doar import: memorii cache de geometrie din programe de animație și efecte.

- Plasele (plase poligonale și de subdiviziune) intră ca [plase], cu coordonatele de textură și normalele lor; transformările devin grupuri. Alembic are Y în sus și este rotit la Z în sus; metri.
- O memorie cache cu multe eșantioane (o animație) intră cu primul eșantion; bara de stare spune câte are.
- Punctele, curbele, suprafețele NURBS, camerele și luminile sunt numărate și lăsate afară. Fișierele cu vechiul aspect HDF5 sunt refuzate: salvați-le din nou ca fișier Ogawa Alembic.

{{ui:Verificare pentru imprimare 3D (STL sau 3MF)…}} verifică mai întâi forma și scrie selecția sau tot ce se vede. Vedeți [Pregătirea unui model pentru imprimare 3D](topic:print-3d).

## 3MF (.3mf)

Doar export, din {{ui:Verificare pentru imprimare 3D (STL sau 3MF)…}}. Nucleul 3MF: o plasă în **milimetri**, Z în sus, cu culorile sale ca materiale. Majoritatea programelor de feliere (slicer) îl citesc și, spre deosebire de STL, își declară unitatea. Lucrurile ascunse sunt lăsate afară. Vedeți [Pregătirea unui model pentru imprimare 3D](topic:print-3d).

## Export DWG și DXF (.dwg, .dxf)

Pentru programe CAD. Modelul este scris în unitatea sa: inchi pentru modelele în picioare și inchi, altfel milimetri, centimetri sau metri (bara de stare o numește).

- **Fețele** devin fețe 3D (triunghiuri). Liniile din interiorul unei fețe și muchiile moi sunt scrise invizibile, astfel încât fețele arată ca în ModelCraft.
- **Muchiile izolate** devin linii.
- **Grupurile și componentele** devin blocuri: o componentă este scrisă o dată și plasată de câte ori este folosită, inclusiv copiile rotite și oglindite. Un grup care a fost întins după ce a fost rotit (deci este înclinat) este scris în locul său.
- **Culori:** DWG păstrează exact culoarea fiecărei fețe; DXF folosește cea mai apropiată dintre cele 255 de culori standard CAD.
- **Versiuni:** DWG este scris ca AutoCAD 2004 (AC1018), pe care îl deschid programele CAD din 2004 încoace. DXF este R12 (AC1009), versiunea pe care o citește orice program CAD; R12 nu are câmp pentru unitate, deci spuneți programului CAD ce unitate să folosească.
- **Nu se scriu:** ghidajele, cotele, scenele și camera.

## IFC (.ifc)

Doar export, pentru BimCraft și alte programe BIM. IFC4 cu un proiect, un amplasament, o clădire și nivelurile sale. Fiecare grup sau componentă de cel mai înalt nivel devine un proxy de element de construcție cu numele său; cele închise sunt scrise ca forme solide (brep-uri facetate), cele deschise ca modele de suprafață; golurile din fețe sunt păstrate. Geometria izolată de la cel mai înalt nivel devine un singur element numit „Loose geometry”. Fără tipuri, proprietăți sau materiale.

**Niveluri:** {{ui:Exportare}} › {{ui:Niveluri IFC…}} le enumeră, fiecare cu un nume și o cotă ({{ui:Adăugare nivel}}, sau {{ui:Estimare din model}}, care creează câte un nivel pentru fiecare înălțime pe care stau grupurile de cel mai înalt nivel). La export, fiecare grup sau componentă merge la nivelul situat la sau sub punctul său cel mai de jos și își păstrează poziția. Fără niveluri, totul merge pe un singur nivel, „Level 1”, la 0. Nivelurile sunt salvate în fișierul ModelCraft.

## DWG (.dwg) și DXF (.dxf)

Import ca linii pe sol (hașurile și fețele 3D ca fețe); export așa cum este descris mai sus. Vedeți [Modelarea pe un plan de amplasament](topic:site-plan).

- **Citit:** linii, polilinii (cu arce), polilinii 3D, cercuri, arce și referințe de bloc, inclusiv matrice, din spațiul model. Obiectele invizibile (precum stările ascunse ale unui bloc dinamic) sunt lăsate afară. Curbele devin 48 de bucăți drepte pe o rotație completă.
- **Citit din versiunea 0.4:** spline-uri și elipse (ca muchii), text, text pe mai multe rânduri și valori de atribute (ca muchii într-un scris cu o singură linie), hașuri (fețe cu goluri), fețe 3D și umpleri pline (fețe) și cote (desenate din blocurile de cotare ale desenului).
- **Citit din versiunea 0.7:** solide 3D, regiuni și corpuri (datele lor ACIS, DWG și DXF din orice versiune), fiecare ca propriu grup, cele închise ca solide. Fețele pe suprafețe care nu sunt plane, cilindri, conuri, sfere, tori sau suprafețe spline simple sunt lăsate afară și enumerate.
- **Necitite:** puncte, tabele, linii de indicație multiple, imagini și tot ce este în spațiul hârtie.
- **Unități:** preluate din desen atunci când acesta le indică. Dacă nu, ModelCraft întreabă.
- **DXF** trebuie să fie ASCII. DXF binar este refuzat.
- **Fișierele DWG** de la AutoCAD R13 până la formatul actual (AutoCAD 2018 și ulterior; AC1012 până la AC1032) sunt citite de cititorul DWG propriu al ModelCraft, în pagină; face parte din ModelCraft, deci funcționează offline ori de câte ori funcționează ModelCraft. Versiunile mai vechi (R12 și anterioare) și fișierele grav deteriorate nu pot fi citite; salvați-le ca DXF.
- **Limite:** coordonatele aflate la mai mult de 10,000 km de origine sau mai mult de 2 milioane de bucăți de linie sunt refuzate.

## Fișiere SKP

{{ui:Import}} (sau trageți fișierul pe vizualizare) citește fișierele SketchUp cu cititorul propriu al ModelCraft, în pagină: nimic nu este încărcat, iar funcționează offline ori de câte ori funcționează ModelCraft. Testat cu fișiere din SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 și 2026; alte versiuni ar trebui să se deschidă și ele, dar încă nu au fost încercate. Modelul intră ca un singur grup numit după fișier. Un {{key:Mod+Z}} îl scoate din nou. Pas cu pas: [Importul unui model SKP](topic:import-sketchup-files).

- **Păstrate:** fețele cu golurile lor, grupurile (ca grupuri) și componentele (ca componente, partajate), numele și plasările lor, culorile, etichetele de pe grupuri și componente, muchiile care nu fac parte dintr-o față, precum și muchiile moi și netede, astfel încât suprafețele curbe rămân netede.
- **Culori:** materialul propriu al unei fețe îi dă culoarea. Un material aplicat pe un grup sau o componentă devine vopseaua acelei plasări, astfel încât fețele din interior fără culoare proprie o preiau, ca în SketchUp; o componentă vopsită în două culori rămâne o singură componentă.
- **Etichetele** de pe grupuri și componente devin etichete ModelCraft, afișate sau ascunse așa cum erau. Etichetele de pe fețe și muchii izolate nu sunt păstrate (ModelCraft etichetează doar grupuri și componente); bara de stare le numără.
- **Lucrurile ascunse intră ascunse** (fețe, muchii, grupuri, componente, precum și fețe și muchii de pe o etichetă ascunsă), astfel încât vedeți ce arăta SketchUp; {{ui:Afișare tot}} le arată.
- **Texturi:** o față vopsită cu un material cu textură își păstrează textura, plasată ca în fișier, iar fișierul ModelCraft păstrează imaginea. O textură pe un grup sau o componentă întreagă, o textură lipsă din fișier sau o imagine pe care browserele nu o pot afișa (precum un fișier Photoshop) păstrează doar culoarea materialului.
- **Lăsate afară, numărate în bara de stare:** imaginile plasate în model. Textele, cotele, ghidajele, planurile de secțiune, scenele și stilurile nu sunt citite.
- **Unități:** fișierele SketchUp sunt în inchi în interior; ModelCraft le convertește, astfel încât dimensiunile ies corect în orice unitate.
- **Salvarea `.skp`** este încă nerealizată. Pentru a duce un model înapoi în SketchUp, exportați Collada (`.dae`).

## Neacceptate

ModelCraft nu poate deschide fișiere 3DS sau IFC și nu poate salva fișiere 3DS, FBX, STEP, `.3dm` sau SketchUp (`.skp`).
