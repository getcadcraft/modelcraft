---
title: Deschidere, salvare, import și export
summary: Fișierul ModelCraft, ce puteți aduce și trimite, unde ajung fișierele și ce se schimbă offline și între browsere.
keywords: deschidere, salvare, import, export, fișier, 3dm, skp, recuperare, salvare automată, recente, desktop, deschidere în 3D, predare, descărcare, fișier modelcraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formate, offline, salvare ca
from: 0b4896d1
---

ModelCraft citește și scrie fișiere pe calculator. Nimic nu se încarcă: un fișier deschis este citit în browser, iar un fișier salvat este o descărcare. Vedeți [Unde ajung fișierele](common:your-files).

## Formatele pe scurt

| Format | Deschidere | Import | Export | Pentru ce este |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | da | nu | {{ui:Salvare}} | Fișierul de lucru. Păstrează totul. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | da | da | {{ui:Salvare ca}}, {{ui:Exportare}} | Programe de randare și de asamblare a scenelor. USD-ul propriu al ModelCraft păstrează totul. Vedeți [Salvarea, deschiderea și exportul USD](topic:usd). |
| SketchUp (`.skp`) | nu | da | nu | Aducerea modelelor din SketchUp. Păstrează grupuri, componente, culori, texturi pe fețe, etichete și muchii moi. Vedeți [Aduceți un model SKP](topic:import-sketchup-files). |
| Collada (`.dae`) | nu | da | da | Schimbul de modele cu alți modelatori 3D. Păstrează grupuri, componente și culori. |
| OBJ (`.obj`) | nu | da | da | Programe de randare și de vizualizare. |
| glTF (`.glb`, `.gltf`) | nu | da | doar `.glb` | Vizualizatoare web, motoare de joc, AR. |
| STL (`.stl`) | nu | da | da | Imprimare 3D (în milimetri). |
| PLY (`.ply`) | nu | da | da | Plase cu culori: scanări, imprimare color. |
| FBX (`.fbx`) | nu | da | nu | Modele din programe de animație și jocuri (FBX 2011 și mai noi). |
| Alembic (`.abc`) | nu | da | nu | Cache-uri de geometrie, la primul lor eșantion. |
| STEP (`.step`, `.stp`) | nu | da | nu | Piese din modelatoare de piese și de la furnizori, ca plase închise la dimensiunea reală. Vedeți [Formate de fișiere](topic:formats). |
| `.3dm` | nu | da | nu | Modele NURBS: polisuprafețe, plase, curbe, blocuri și straturi, ca plase, muchii, componente și etichete. Vedeți [Aduceți un model .3dm](topic:import-3dm-files). |
| 3MF (`.3mf`) | nu | nu | da | Imprimare 3D, cu culori (în milimetri). Din {{ui:Verificare pentru imprimare 3D (STL sau 3MF)…}}: vedeți [Pregătirea unui model pentru imprimare 3D](topic:print-3d). |
| IFC (`.ifc`) | nu | nu | da | Programe BIM și BimCraft. |
| DWG (`.dwg`) | nu | da | da | Un plan de amplasament sau de nivel pe care să modelați; trimiterea modelului către un program CAD. |
| DXF (`.dxf`) | nu | da | da | Același lucru, pentru orice program CAD. |

[Formatele de fișiere în detaliu](topic:formats) listează exact ce păstrează fiecare format și ce lasă afară.

## Fișierul ModelCraft

Un fișier `.modelcraft` păstrează întregul model: geometria, grupurile, componentele, ghidurile, scenele, unitățile, precum și camera și stilul folosite la salvare. Nu păstrează istoricul anulărilor.

### Deschiderea unui model

1. Faceți clic pe {{ui:Deschidere}} din grupul {{ui:Fișier}} sau apăsați {{key:Mod+O}}.
2. Dacă modelul de pe ecran are modificări nesalvate, ModelCraft întreabă: „Modelul are modificări nesalvate. Salvați mai întâi o copie?” Alegeți {{ui:Salvare copie}}, {{ui:Renunțare la modificări}} sau {{ui:Anulare}}.
3. Alegeți fișierul `.modelcraft`.

Modelul se deschide în unitățile în care a fost salvat, cu camera cu care a fost salvat. Puteți și trage un fișier `.modelcraft` peste vizualizarea 3D sau faceți clic pe unul din lista {{ui:Recente}} de pe cardul de pornire (browserele care pot redeschide un fișier și aplicația desktop).

:::desktop
În aplicația desktop, dublu-clic pe un fișier `.modelcraft` îl deschide în ModelCraft, la fel ca **Deschidere cu** pentru un fișier Collada, OBJ, glTF, DWG sau DXF (este importat într-un model nou).
:::

### Salvarea unui model

Faceți clic pe {{ui:Salvare}} sau apăsați {{key:Mod+S}}. Browserul descarcă `<name>.modelcraft`, unde numele este fișierul deschis sau „Untitled” pentru un model nou.

:::desktop
În aplicația desktop, {{ui:Salvare}} scrie fișierul deschis chiar în locul lui. Un model nou întreabă unde să fie salvat.
:::

- {{ui:Salvare ca}} ({{key:Mod+Shift+S}}) salvează o copie ca fișier `.modelcraft` sau ca [USD](topic:usd); acolo unde browserul poate, cere numele și locul. Altfel, redenumiți fișierul descărcat: următoarea salvare după ce deschideți fișierul redenumit folosește noul nume.
- Fiecare salvare este o descărcare nouă. În funcție de setările browserului, ajunge direct în dosarul de descărcări sau întreabă unde să fie salvat. Dacă există deja un fișier cu acel nume, majoritatea browserelor adaugă un număr, cum ar fi `Untitled (1).modelcraft`.

:::chromium
Pentru a alege dosarul de fiecare dată, deschideți setările browserului, căutați secțiunea de descărcări și activați opțiunea care întreabă unde să fie salvat fiecare fișier înainte de descărcare.
:::

:::firefox
Pentru a alege dosarul de fiecare dată, deschideți **Setări**, apoi **General**, iar la secțiunea de descărcări alegeți opțiunea care cere întotdeauna unde să fie salvate fișierele.
:::

:::safari
Pentru a schimba unde ajung descărcările, deschideți **Safari**, apoi **Setări**, apoi **General**, și setați locul de descărcare a fișierelor.
:::

### Pornirea unui model nou

Faceți clic pe {{ui:Nou}}. Dacă există modificări nesalvate, ModelCraft întreabă mai întâi. Un model nou pornește gol, în unitatea din regiune (picioare și țoli în Statele Unite, milimetri în rest), fără scene.

### Dacă browserul se închide înainte de salvare

ModelCraft păstrează o copie a lucrului nesalvat în browser, la câteva secunde după fiecare modificare. Dacă fila sau browserul se închid înainte de salvare, la următoarea deschidere a ModelCraft întreabă „Recuperarea lucrării?”. Recuperarea deschide modelul așa cum era, dar încă nesalvat într-un fișier: salvați-l ca să-l păstrați. Vedeți [Recuperarea lucrării](common:recover).

### Din CadCraft: Deschidere în ModelCraft

În aplicația de desenare CadCraft, **Vizualizare**, apoi **Mai multe**, apoi **Deschidere în ModelCraft** trimite desenul deschis către ModelCraft, într-o filă nouă, ca DWG. Ajunge cum ajunge un DWG importat: linii pe sol, într-un grup, gata de modelat. Nimic nu se încarcă; fișierul trece prin spațiul de stocare propriu al browserului.

## Import

Importul adaugă un fișier la modelul deschis; nu îl înlocuiește.

1. Faceți clic pe {{ui:Import}} din grupul {{ui:Fișier}} sau trageți fișierul peste vizualizarea 3D.
2. Alegeți un fișier SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG sau DXF.

   Fișierul ajunge ca **un singur grup**, selectat, iar vizualizarea face zoom ca să-l arate. Bara de stare spune ce a intrat și enumeră orice nu s-a putut importa, cum ar fi „Neimportat: 2 texturi”.

3. Ca să lucrați direct la geometria lui, faceți dublu-clic pe grup ca să editați în interior, sau faceți clic pe {{ui:Descompunere}}.

Câteva lucruri de știut:

- **Dimensiune și direcția în sus:** fișierele Collada spun ce unitate au și ce axă este în sus, iar ModelCraft le convertește. glTF este întotdeauna în metri. Fișierele OBJ nu au unitate: ModelCraft le citește în metri, cu Y în sus. Dacă un OBJ intră de 1000 de ori prea mare sau prea mic, folosiți [Scalare](topic:rotate-scale) cu un factor precum `0.001` sau `1000`.
- **DWG și DXF** intră ca linii (muchii) pe sol, nu ca fețe. Dacă desenul nu spune ce unitate are, o casetă de dialog intitulată „Unități de desen” întreabă ce înseamnă o unitate de desen. Vedeți [Modelare pe un plan de amplasament](topic:site-plan).
- **Limite:** fișierele peste 300 MB sunt refuzate la import, iar cele peste 200 MB la deschidere. Fișierele cu mai mult de 2 milioane de vârfuri sau fețe sunt refuzate ca prea mari.

## Export

1. Faceți clic pe {{ui:Exportare}} din grupul {{ui:Fișier}}.
2. Alegeți un format: {{ui:glTF binar (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL pentru imprimare (.stl, milimetri)}}, {{ui:PLY cu culori (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC pentru BimCraft (.ifc)}}, {{ui:DWG pentru CAD (.dwg, 2004)}} sau {{ui:DXF pentru CAD (.dxf, R12)}}.

Browserul descarcă fișierul, cu numele modelului. Se exportă întregul model, nu doar selecția. Un model gol nu se exportă: „Modelul este gol: desenați mai întâi ceva.” Vedeți [Exportarea unui model pentru alte programe](topic:export-model).

## Online și offline

Totul în ModelCraft rulează pe calculator, deci modelarea, deschiderea, salvarea, importul și exportul funcționează fără conexiune, odată ce aplicația este încărcată.

Ca să deschideți ModelCraft fără nicio conexiune, salvați-l pentru utilizare offline cât timp sunteți online:

1. Faceți clic pe {{ui:Salvare pentru offline}} din bara de aplicații de sus.
2. Butonul numără în sus („Se salvează 40 din 212”) cât timp salvează. ModelCraft își salvează propriile fișiere (printre ele și cititorul DWG), acest ajutor și biblioteca 3D, deci poate dura puțin.
3. Când butonul afișează {{ui:Pregătit pentru offline}}, ModelCraft se deschide de la aceeași adresă fără conexiune, iar importul DWG funcționează și offline.

Faceți clic mai târziu pe {{ui:Pregătit pentru offline}} pentru {{ui:Salvare din nou (obținere a celei mai noi versiuni)}} sau {{ui:Eliminare a copiei offline}}. Dacă butonul afișează {{ui:Nu s-a putut salva}}, unele fișiere nu s-au descărcat: verificați conexiunea și faceți clic din nou ca să încercați. {{ui:Modul offline nu este disponibil}} înseamnă că această fereastră de browser nu poate păstra o copie (ferestrele private și unele calculatoare administrate). Vedeți [Lucrul offline](common:offline).

Salvarea în cloud este încă nerealizată. Fiecare model stă acolo unde îl salvați.

:::offline
Sunteți offline. Puteți continua modelarea și salvarea. Dacă bara de aplicații nu afișează {{ui:Pregătit pentru offline}}, nu reîncărcați această filă până nu reveniți online.
:::

## Aplicația desktop

:::desktop
Folosiți ModelCraft în CadCraft Studio, aplicația desktop cu toate cele opt aplicații. Fișierele se deschid și se salvează unde alegeți.
:::

:::web
ModelCraft rulează în browser pe Mac, Windows și Linux, și în CadCraft Studio, aplicația desktop cu toate cele opt aplicații dintr-o singură instalare, de la getcadcraft.com/download.
:::
