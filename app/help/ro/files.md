---
title: Deschidere, salvare, import și export
summary: Fișierul ModelCraft, ce puteți aduce și trimite, unde ajung fișierele și ce se schimbă offline și între browsere.
keywords: deschidere, salvare, import, export, fișier, 3dm, skp, recuperare, salvare automată, recente, desktop, deschidere în 3D, predare, descărcare, fișier modelcraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formate, offline, salvare ca
from: 3f09ab72
---

ModelCraft citește și scrie fișiere pe calculator. Nimic nu se încarcă: un fișier pe care îl deschideți este citit în browser, iar un fișier pe care îl salvați este o descărcare. Consultați [Unde ajung fișierele](common:your-files).

## Formate pe scurt

| Format | Deschidere | Import | Exportare | Pentru ce este |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | da | nu | {{ui:Salvare}} | Fișierul de lucru. Păstrează totul. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | da | da | {{ui:Salvare ca}}, {{ui:Exportare}} | Programe de randare și de asamblare a scenelor. USD-ul propriu al ModelCraft păstrează totul. Consultați [Salvarea, deschiderea și exportul USD](topic:usd). |
| SketchUp (`.skp`) | nu | da | nu | Aducerea modelelor din SketchUp. Păstrează grupurile, componentele, culorile, texturile de pe fețe, etichetele și muchiile moi. Consultați [Aducerea unui model SKP](topic:import-sketchup-files). |
| Collada (`.dae`) | nu | da | da | Schimbul de modele cu alți modeleri 3D. Păstrează grupurile, componentele și culorile. |
| OBJ (`.obj`) | nu | da | da | Programe de randare și de vizualizare. |
| glTF (`.glb`, `.gltf`) | nu | da | doar `.glb` | Vizualizatoare web, motoare de joc, AR. |
| STL (`.stl`) | nu | da | da | Imprimare 3D (în milimetri). |
| PLY (`.ply`) | nu | da | da | Plase cu culori: scanări, imprimare color. |
| FBX (`.fbx`) | nu | da | nu | Modele din programe de animație și de jocuri (FBX 2011 și mai noi). |
| Alembic (`.abc`) | nu | da | nu | Cache-uri de geometrie, la primul lor cadru. |
| STEP (`.step`, `.stp`) | nu | da | nu | Piese din programe de modelare a pieselor și de la furnizori, ca plase închise la dimensiunea lor reală. Consultați [Formatele de fișiere](topic:formats). |
| `.3dm` | nu | da | nu | Modele NURBS: polisuprafețe, plase, curbe, blocuri și straturi, ca plase, muchii, componente și etichete. Consultați [Aducerea unui model .3dm](topic:import-3dm-files). |
| 3MF (`.3mf`) | nu | nu | da | Imprimare 3D, cu culori (în milimetri). Din {{ui:Verificare pentru imprimare 3D (STL sau 3MF)…}}: consultați [Pregătirea unui model pentru imprimare 3D](topic:print-3d). |
| IFC (`.ifc`) | nu | nu | da | Programe BIM și BimCraft. |
| DWG (`.dwg`) | nu | da | da | Un plan de situație sau un plan de nivel pe care să modelați; trimiterea modelului către un program CAD. |
| DXF (`.dxf`) | nu | da | da | Același lucru, pentru orice program CAD. |

[Formatele de fișiere în detaliu](topic:formats) enumeră exact ce păstrează fiecare format și ce lasă afară.

## Fișierul ModelCraft

Un fișier `.modelcraft` păstrează întregul model: geometria, grupurile, componentele, ghidajele, scenele, unitățile, precum și camera și stilul pe care le aveați când ați salvat. Nu păstrează istoricul anulărilor.

### Deschiderea unui model

1. Faceți clic pe {{ui:Deschidere}} din grupul {{ui:Fișier}}, sau apăsați {{key:Mod+O}}.
2. Dacă modelul de pe ecran are modificări nesalvate, ModelCraft întreabă: „Acest model are modificări care nu sunt salvate. Salvați mai întâi o copie?” Alegeți {{ui:Salvare copie}}, {{ui:Renunțare la modificări}} sau {{ui:Anulare}}.
3. Alegeți fișierul `.modelcraft`.

Modelul se deschide în unitățile în care a fost salvat, cu camera cu care a fost salvat. Puteți trage și un fișier `.modelcraft` pe vizualizarea 3D sau puteți face clic pe unul din lista fișierelor recente de pe cardul de start (browserele care pot redeschide un fișier și aplicația desktop).

:::desktop
În aplicația desktop, un dublu clic pe un fișier `.modelcraft` îl deschide în ModelCraft, la fel ca **Deschidere cu** pe un fișier Collada, OBJ, glTF, DWG sau DXF (este importat într-un model nou).
:::

### Salvarea unui model

Faceți clic pe {{ui:Salvare}} sau apăsați {{key:Mod+S}}. Browserul descarcă `<name>.modelcraft`, unde numele este fișierul pe care l-ați deschis sau "Untitled" pentru un model nou.

:::desktop
În aplicația desktop, {{ui:Salvare}} scrie fișierul deschis chiar în locul său. Un model nou întreabă unde să fie salvat.
:::

- {{ui:Salvare ca}} ({{key:Mod+Shift+S}}) salvează o copie ca fișier `.modelcraft` sau ca [USD](topic:usd); unde browserul permite, cere numele și locul. În caz contrar, redenumiți fișierul descărcat: următoarea salvare după ce deschideți fișierul redenumit folosește noul nume.
- Fiecare salvare este o descărcare nouă. În funcție de setările browserului, fișierul merge direct în dosarul de descărcări sau întreabă unde să fie salvat. Dacă există deja un fișier cu acest nume, majoritatea browserelor adaugă un număr, cum ar fi `Untitled (1).modelcraft`.

:::chromium
Pentru a alege dosarul de fiecare dată, deschideți setările browserului, căutați „descărcări” și activați „Întreabă unde să salveze fiecare fișier înainte de descărcare”.
:::

:::firefox
Pentru a alege dosarul de fiecare dată, deschideți **Setări**, apoi **General**, iar la „Descărcări” alegeți „Întreabă mereu unde să salvez fișierele”.
:::

:::safari
Pentru a schimba locul în care ajung descărcările, deschideți **Safari**, apoi **Setări**, apoi **General**, și setați „Locația descărcării fișierelor”.
:::

### Pornirea unui model nou

Faceți clic pe {{ui:Nou}}. Dacă există modificări nesalvate, ModelCraft întreabă mai întâi. Un model nou pornește gol, în unitatea setată pentru limbă (picioare și inci în Statele Unite, milimetri în rest), fără scene.

### Dacă browserul se închide înainte să salvați

ModelCraft păstrează o copie a lucrului nesalvat în browser, la câteva secunde după fiecare modificare. Copia se scrie în fundal, astfel încât un model mare nu vă încetinește în timp ce este păstrată. Dacă fila sau browserul se închid înainte să salvați, data următoare când deschideți ModelCraft întreabă „Recuperarea lucrării?”. Recuperarea deschide modelul așa cum era, încă nesalvat într-un fișier: salvați-l ca să îl păstrați. Consultați [Recuperarea lucrării](common:recover).

### Din CadCraft: Deschidere în ModelCraft

În aplicația de desen CadCraft, **Vizualizare**, apoi **Mai multe**, apoi **Deschidere în ModelCraft** trimite desenul deschis către ModelCraft, într-o filă nouă, ca DWG. Ajunge așa cum ajunge un DWG importat: linii pe teren, într-un grup, gata de modelat. Nimic nu se încarcă; fișierul trece prin spațiul de stocare al browserului.

## Import

Importul adaugă un fișier la modelul deschis; nu îl înlocuiește.

1. Faceți clic pe {{ui:Import}} din grupul {{ui:Fișier}}, sau trageți fișierul pe vizualizarea 3D.
2. Alegeți un fișier SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG sau DXF.

   Fișierul ajunge ca **un singur grup**, selectat, iar vizualizarea se apropie ca să îl arate. Bara de stare spune ce a sosit și enumeră ce nu s-a putut importa, de exemplu „Neimportat: 2 texturi”.

3. Pentru a lucra direct la geometria lui, faceți dublu clic pe grup ca să editați în interiorul lui, sau faceți clic pe {{ui:Descompunere}}.

De reținut:

- **Dimensiunea și direcția în sus:** fișierele Collada spun ce unitate au și ce axă este în sus, iar ModelCraft le convertește. glTF este mereu în metri. Fișierele OBJ nu au unitate: ModelCraft le citește în metri, cu Y în sus. Dacă un OBJ vine de 1000 de ori mai mare sau mai mic, folosiți [Scalare](topic:rotate-scale) cu un factor precum `0.001` sau `1000`.
- **DWG și DXF** vin ca linii (muchii) pe teren, nu ca fețe. Dacă desenul nu spune unitatea, o casetă de dialog intitulată „Unități de desen” întreabă ce înseamnă o unitate de desen. Consultați [Modelarea pe un plan de situație](topic:site-plan).
- **Limite:** fișierele peste 300 MB sunt refuzate la import și peste 200 MB la deschidere. Fișierele cu mai mult de 2 milioane de vârfuri sau fețe sunt refuzate ca fiind prea mari. Un OBJ de peste 64 MB este refuzat înainte de a fi citit. Fișierele text (Collada, OBJ, STL ASCII, USD text) sunt citite pe bucăți de aproximativ 4 MB, astfel încât niciun bloc de text nu ține un fișier întreg; un OBJ de 16 MB a folosit aproximativ 0.5 GB de memorie la deschidere, în testul nostru.

## Exportare

1. Faceți clic pe {{ui:Exportare}} din grupul {{ui:Fișier}}.
2. Alegeți un format: {{ui:glTF binar (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL pentru imprimare (.stl, milimetri)}}, {{ui:PLY cu culori (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC pentru BimCraft (.ifc)}}, {{ui:DWG pentru CAD (.dwg, 2004)}} sau {{ui:DXF pentru CAD (.dxf, R12)}}.

Browserul descarcă fișierul, numit ca modelul. Se exportă întregul model, nu doar selecția. Fișierele glTF, Collada și OBJ sunt scrise în fundal, astfel încât ModelCraft continuă să funcționeze cât timp un model mare se exportă; descărcarea începe când fișierul este gata. Un model gol nu se exportă: „Modelul este gol: desenați ceva mai întâi.” Consultați [Exportarea unui model pentru alte programe](topic:export-model).

## Online și offline

Totul în ModelCraft rulează pe calculator, deci modelarea, deschiderea, salvarea, importul și exportul funcționează fără conexiune, după ce aplicația este încărcată.

Pentru a deschide ModelCraft fără nicio conexiune, salvați-l pentru utilizare offline cât timp sunteți online:

1. Faceți clic pe {{ui:Salvare pentru offline}} din bara de aplicație de sus.
2. Butonul numără în sus („Salvare 40 din 212”) cât timp salvează. ModelCraft își salvează propriile fișiere (printre care și cititorul DWG), acest ajutor și biblioteca 3D, așa că poate dura.
3. Când butonul afișează {{ui:Pregătit pentru offline}}, ModelCraft se deschide de la aceeași adresă fără conexiune, iar importul DWG funcționează și offline.

Faceți clic pe {{ui:Pregătit pentru offline}} mai târziu pentru {{ui:Salvare din nou (obținere a celei mai noi versiuni)}} sau {{ui:Eliminare a copiei offline}}. Dacă butonul afișează {{ui:Nu s-a putut salva}}, unele fișiere nu s-au descărcat: verificați conexiunea și faceți clic din nou pentru a încerca. {{ui:Modul offline nu este disponibil}} înseamnă că această fereastră de browser nu poate păstra o copie (ferestrele private și unele calculatoare administrate). Consultați [Lucrul offline](common:offline).

Salvarea în cloud nu este disponibilă încă. Fiecare model se află acolo unde îl salvați.

:::offline
Sunteți offline. Puteți continua să modelați și să salvați. Dacă bara de aplicație nu afișează {{ui:Pregătit pentru offline}}, nu reîncărcați această filă până nu reveniți online.
:::

## Aplicația desktop

:::desktop
Folosiți ModelCraft în CadCraft Studio, aplicația desktop cu toate cele opt aplicații. Fișierele se deschid și se salvează unde alegeți.
:::

:::web
ModelCraft rulează în browser pe Mac, Windows și Linux, și în CadCraft Studio, aplicația desktop cu toate cele opt aplicații dintr-o singură instalare, de la getcadcraft.com/download.
:::
