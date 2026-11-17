---
title: Încă nerealizat
summary: Ce nu face încă această versiune a ModelCraft și ce să faceți în schimb, astăzi.
keywords: lipsă, încă nu, limitări, plan de viitor, materiale, texturi, text, straturi, tăiere, divizare, cloud, desktop
from: 179fa5e4
---

ModelCraft este o versiune timpurie. Această pagină listează ce nu face încă, ca să nu le căutați degeaba, și cea mai apropiată cale de a face treaba astăzi.

## Unelte de desen

| Încă nu | În schimb, astăzi |
|---|---|
| Desen cu mâna liberă | Faceți clic pe puncte cu {{ui:Curbă}} |
| Schimbarea numărului de segmente al unui arc sau cerc după desenare | Ștergeți-l și desenați-l din nou, după ce scrieți `24s` |
| Alegerea unui font pentru [text 3D](topic:text3d) sau editarea cuvintelor după plasare | Ștergeți-l și adăugați textul din nou |
| Schimbarea unui unghi scriind într-o cotă unghiulară, sau a dimensiunii unui cilindru din cota cercului lui | Rotiți muchiile cu {{ui:Rotire}}; scalați cilindrul cu {{ui:Scalare}} |
| Cote în fișierele de model exportate | Cotele apar în imagini, tipăriri și PDF-uri ale vederii; fișierele de model conțin doar geometrie |
| Tăiere, Divizare și Scobire în coajă | Grupuri închise [Reuniune, Scădere și Intersectare](topic:solids) sau [intersectați fețele](topic:intersect) și ștergeți ce nu vă trebuie |
| Alegerea axei de rotație cu tastele săgeată | Faceți clic pe centrul {{ui:Rotire}} pe o față orientată în direcția în care trebuie să indice axa |
| Blocări pe mai multe inferențe deodată | Blocați o direcție cu o tastă săgeată, apoi fixați-vă pe un punct |
| Redimensionarea pe o pantă sau dintr-un capăt de cotă care nu este pe un colț | Plasați cota pe două colțuri, de-a lungul unei muchii sau pe roșu, verde ori albastru |

## Animație

| Încă nu | În schimb, astăzi |
|---|---|
| Animarea fețelor, muchiilor, a orei din zi a soarelui, a stilului sau a ceea ce este ascuns | Faceți partea mobilă grup sau componentă; randați un videoclip separat pentru altă oră din zi |
| O cameră care urmează o cale desenată sau privește un obiect în mișcare | Puneți mai multe chei de cameră pe parcurs ([Animare](topic:animation)) |
| Sunet în videoclipuri și videoclipuri de calitate înaltă (cu trasare de raze) fără WebGPU | Adăugați sunetul într-un editor video; fără WebGPU, randați videoclipul cu randatorul rapid ([Randarea videoclipului](topic:animation#render-the-video)) |
| Lămpi animate (strălucire, răspândire, culoare) într-un videoclip randat, un unghi de obiectiv animat fără chei de cameră într-un videoclip, animarea materialelor sau a setărilor de randare | Lămpile se animează în vedere; pentru un videoclip, puneți și camera cu chei pentru un zoom; randați videoclipuri separate pentru setări diferite de lămpi ([Animarea oricărei proprietăți](topic:animate)) |
| Oglindirea greutăților sau a oaselor de la o parte la alta, plicuri vizibile ale oaselor, greutăți umbrite punct cu punct (se afișează pe față), vederea plasei în poziție în timp ce pictați greutăți | Pictați ambele părți sau faceți o jumătate și folosiți un modificator Oglindire înainte de a adăuga scheletul; comutați între Pictare greutăți și Poziție ca să verificați |
| Oase citite din fișiere glTF, FBX sau USD ca schelet și scheletele scrise în aceste fișiere | Modelele cu schelet intră în repaus cu greutățile fișierului; adăugați oasele în ordinea articulațiilor fișierului, apoi {{ui:Folosire greutăți din fișier}} ([Animare](topic:animate)) |
| Mutarea unei ținte IK sau a unui pol trăgând-o în vedere, un spațiu al constrângerii (local sau global) de ales, întinderea lanțurilor IK, IK de-a lungul unei curbe | Scrieți punctul țintei sau vizați un obiect și mutați-l; păstrați lanțurile la lungimile lor |
| Haine, fluide, corpuri moi, articulații și balamale între corpuri rigide, coliziunea cu forma exactă a unui obiect (doar cutii și bile în jurul lui), o simulare live în timp ce redați, o viteză sau o rotație inițială (corpurile pornesc în repaus) | Coaceți corpurile rigide și redați cheile; construiți o balama din chei; împărțiți o formă ciudată în cutii (grupuri) |
| Exportul animației în glTF sau alte fișiere de model | Randați un videoclip; fișierul `.modelcraft` și un [fișier USD](topic:usd) salvat de ModelCraft o păstrează pentru ModelCraft |
| Scrierea unui comentariu sau a unui titlu la o problemă în VR, note vocale, mutarea unui plan de secțiune cu mâna în VR | Plasați problema în VR, apoi adăugați cuvintele într-un program BCF; setați un plan de secțiune în vedere înainte să intrați: vezi [Revizuirea modelului cu o cască VR](topic:vr-review) |
| Persoane la birou în VR (apar doar persoanele din VR), înregistrarea unei plimbări VR | Rugați-le să se alăture în VR sau faceți o [animație](topic:animation) a plimbării |

## Plase

| Încă nu | În schimb, astăzi |
|---|---|
| Sculptare pe niveluri (multirezoluție) și Detaliu care elimină triunghiurile devenite mici | [Sculptați](topic:sculpt) o plasă subdivizată; {{ui:Remeshare}} ca s-o uniformizați din nou |
| Un remesh în fețe cu patru laturi care urmează forma | {{ui:Remeshare}} (triunghiuri uniforme), apoi refaceți-o cu [Retopologie](topic:mesh-edit#retopology) |
| Greutăți pictate pe vârfuri pentru modificatori (Deplasare, Netezire și Înfășurare lucrează pe toată plasa) | Aplicați modificatorul, apoi sculptați sau editați părțile care au nevoie |
| Copierea și lipirea vârfurilor, muchiilor sau fețelor, o tăietură cu cuțitul care se termină în interiorul unei fețe, muchii de sârmă fără față | Duplicați plasa în Model; tăiați cu cuțitul de la muchie la muchie; [extrudați](topic:mesh-edit#change-the-shape) muchiile deschise în fețe |

## Organizare și vizualizare

| Încă nu | În schimb, astăzi |
|---|---|
| Straturi din planuri de sit DWG și DXF ca etichete | Planul de sit intră ca un singur grup: descompuneți-l și grupați piesele pe care vreți să le etichetați |
| Mai multe secțiuni deodată, o casetă de secțiune sau conturul unei secțiuni exportat ca desen | Un [plan de secțiune](topic:sections) taie o dată; exportați vederea ca imagine |
| Afișarea muchiilor moi punctate sau înmuierea cât trageți de un cursor | [Înmuiere după unghi](topic:soften) în Informații entitate, apoi {{ui:Anulare}} ca să încercați alt unghi |
| O bibliotecă online de modele de căutat sau componente cu opțiuni de ales (culoare, stil) | [Biblioteca de pornire](topic:starter); importați modele Collada, OBJ sau glTF; [întindeți](topic:stretch) o copie la dimensiune |
| Plasarea plantelor din biblioteca de plante | [Împrăștiați](topic:live-view#scatter-plants-rocks-and-people) plante în vederea live sau plasați un copac din biblioteca de pornire |
| Copii independente ale unui grup | Faceți-l componentă, apoi {{ui:Creare unică}} (vezi [Depanare](topic:troubleshooting#editing-one-group-changed-another)) |

## Randare

| Încă nu | În schimb, astăzi |
|---|---|
| Randarea în vedere (spațiul de lucru {{ui:Randare}}), coada de randare și opțiunile de cameră, imagine de cer, ceață și amestecul de lumini fără WebGPU | {{ui:Randare imagine…}} în {{ui:Calitate înaltă}} folosește acolo trasorul de raze WebGL, fără acele opțiuni ([Randarea unei imagini](topic:render#high-quality)) |
| Un alt program care desenează imaginea Randare fără un supliment de motor de randare (CadCraft nu rulează niciodată un program sub licența GNU GPL); camere panoramice sau stereo și o imagine de cer printr-un alt program; modulul pentru Unreal Engine (fișierele se scriu, modulul care le deschide nu este lansat) | Motoarele noastre Fast și Path tracer; motorul unui supliment ([desenați imaginea cu alt program](topic:render-other-program)); un dosar de fișier USD, glTF sau Unreal din lista Motor, ca să-l duceți în orice program |
| Plante și pietre împrăștiate în {{ui:Randare imagine…}} | Apar în [vederea live](topic:live-view), în panoramele, vizualizatorul și videoclipul ei |

## Materiale și culori

| Încă nu | În schimb, astăzi |
|---|---|
| Intrările altele decât culoarea de bază, rugozitatea, metalitatea, opacitatea, normala și emisia care se schimbă pe o suprafață în imaginile de calitate înaltă (ele folosesc media lor) | [Creați materiale cu noduri](topic:shading): conectați-le oricum, vederea le arată variind |
| Deplasarea pe fețele trase și împinse | Convertiți obiectul în plasă pentru deplasare |
| Partajarea propriilor materiale în Bibliotecă din aplicație și hărțile ARM/ORM sau EXR împachetate într-un set de texturi importat | Păstrați-le în fișier; importați hărțile separate ca PNG sau JPEG |
| Materialele fișierului în sesiunile Live TeamWork (rămân pe calculatorul care le-a făcut) | Salvați fișierul și partajați-l |
| Decalcomanii care se îndoaie pe suprafețe curbe, decalcomanii în Anulare sau pictarea texturilor mai multor fețe deodată peste o cusătură | Plasați decalcomanii mai mici pe fiecare piesă; pictați fiecare parte a unei cusături separat |
| Coacerea pe fețe trase și împinse, coacerea mai multor obiecte într-o singură imagine, o cușcă modelată manual sau lumină coaptă de la lămpi | Convertiți în plasă și desfășurați-o; coaceți fiecare obiect; măriți distanța de căutare; randați o imagine pentru lumina lămpilor |
| Pictarea rugozității, metalității sau înălțimii, pictarea cu imagini (ștampile) și pictarea texturilor mai mare de 512 × 512 | Pictați culoarea de bază aici; faceți celelalte hărți într-un editor de imagini și importați-le ca set de texturi |
| Texturi în exporturile Collada, STL, PLY, 3MF, IFC, DWG și DXF, și grafurile de noduri ale materialelor fișierului în modelele exportate | Aceste formate primesc culoarea fiecărui material; glTF și OBJ păstrează texturile importate; exportați un material singur ca [MaterialX](topic:shading#materialx); [USD](topic:usd) păstrează tot modelul pentru ModelCraft |
| Texturi în fișiere Collada | Sunt numărate și lăsate afară la import; texturile din fișierele `.skp` și `.glb` intră |

## Fișiere

| Încă nu | În schimb, astăzi |
|---|---|
| Salvarea fișierelor SketchUp și a textului și cotelor din ele | [Importul](topic:import-sketchup-files) păstrează fețele, culorile și texturile; exportați Collada (`.dae`) ca să reveniți în SketchUp |
| Cote și ghiduri în exporturile DWG și DXF | Adăugați-le în programul CAD după export |
| Puncte, tabele și multilinii de indicație din DWG și DXF | Sunt numărate și lăsate afară; textul intră ca litere cu o singură linie, nu cu fontul desenului |
| Suprafețe, plase, tabele și multilinii de indicație din DWG și DXF; fețele solidelor 3D pe suprafețe trase, lofate sau alte suprafețe libere | Sunt numărate și lăsate afară la fel (solidele 3D în sine intră). Exportați acele părți din programul CAD ca OBJ sau Collada și importați-le |
| Tipuri, proprietăți sau materiale IFC | Exportul IFC are [etaje](topic:formats#ifc-ifc) și elemente generice; adăugați restul într-un program BIM |
| Trimiterea unui model direct în BimCraft | Exportați {{ui:IFC pentru BimCraft (.ifc)}} și deschideți-l în BimCraft |
| Muchii libere în glTF și STL | Folosiți OBJ sau Collada pentru desen în linii |
| Materiale glTF și FBX dincolo de culoarea de bază (metal, rugozitate, hărți normale, sticlă, strat lucios, catifelare…) | Sunt citite și listate; ModelCraft păstrează culoarea de bază sau textura. Refaceți aspectul în [spațiul de lucru Umbrire](topic:shading) |
| Oase, animații și ținte de morfare glTF | Modelele cu schelet intră stând în repaus; animați în [cronologie](topic:animation) |
| Culori și numele pieselor ansamblului din fișiere STEP | Piesele intră ca plase la dimensiunea lor reală; [pictați](topic:paint) și denumiți-le după import |
| Obiecte SubD, text, cote și lumini din fișiere `.3dm` | Vedeți [ce este lăsat afară](topic:import-3dm-files#what-is-left-out-and-said); transformați SubD în plase în programul care a făcut fișierul |
| Texturi KTX2 și variante de material în glTF | Exportați cu texturi PNG sau JPEG; se folosește varianta implicită |
| Scrierea instanțierii glTF (EXT_mesh_gpu_instancing) | Componentele sunt scrise o dată și plasate de multe ori, ceea ce citește orice vizualizator |
| Animația Alembic (fiecare eșantion al unei memorii cache), punctele și curbele Alembic, scrierea Alembic | Intră primul eșantion; animați în [cronologie](topic:animation); scrieți glTF, USD sau OBJ |
| Hărți de relief și normale în materialele OBJ | Intră doar imaginea de culoare (`map_Kd`) |
| Oase și animație FBX, exportul FBX, fișiere FBX 6 | Modelele cu schelet intră în repaus; exportați glTF; salvați fișierele vechi ca FBX 2011 sau mai nou |
| Scheletele Collada, morfările, camerele, luminile, transformările look-at și skew, referințele externe | Sunt lăsate afară la import și numărate în mesaj |
| Fișiere de rezervă | {{ui:Salvare ca}} ({{key:Mod+Shift+S}}) salvează o altă copie. După o cădere, ModelCraft vă oferă lucrul nesalvat înapoi („Recuperarea lucrării?”) |
| Salvarea în cloud și sincronizarea între calculatoare | Nu este disponibilă încă. Salvați fișierele pe calculator și copiați-le unde aveți nevoie |

## Imprimare 3D

| Încă nu | În schimb, astăzi |
|---|---|
| Suporturi reale ale slicerului (interfețe, plută, modelul exact al suportului) | [Previzualizarea suporturilor](topic:print-tools#supports-preview) arată unde și cât; previzualizarea slicerului arată cele reale |
| Descurcarea unei piese care trece prin ea însăși sau a muchiilor unde se întâlnesc trei sau mai multe fețe | [Reparare](topic:print-tools#repair) le listează cu locul lor; folosiți [Intersectarea fețelor](topic:intersect) și ștergeți ce este înăuntru |
| Modele de umplere și o rețea în interiorul unei piese goale | [Golire](topic:print-tools#hollow) o lasă goală; slicerul adaugă umplere unei piese pline |
| Detalii prea mici pentru duză (altele decât pereții) | [Grosimea peretelui](topic:print-tools#wall-thickness) găsește pereții subțiri; previzualizarea straturilor din slicer arată restul |

## Performanță

Anularea păstrează o copie a modelului pentru fiecare pas ([plasa](topic:meshes) păstrează doar ce s-a schimbat), deci importurile foarte mari de geometrie trasă și împinsă fac fiecare editare mai lentă. Păstrați importurile ușoare și salvați și redeschideți ca să goliți istoricul.

## Aplicații și platforme

- **Desktop:** ModelCraft rulează în browser pe Mac, Windows și Linux și în CadCraft Studio, aplicația desktop cu toate cele opt aplicații într-o singură instalare. Pe Android, CadCraft Studio se instalează din fișierul APK de pe getcadcraft.com/download. Încă nu există versiune pentru iPad sau iPhone.
- **Atingere:** vezi [Orbitare, pan și zoom](topic:orbit-pan-zoom) pentru gesturile cu degetele. Presiunea unui creion stabilește pensula din [Sculptare](topic:sculpt); în rest, presiunea și înclinarea creionului nu se folosesc.
- **Foi:** ModelCraft [tipărește o vedere pe pagină](topic:export-model#print-the-view-or-save-it-as-a-pdf); nu există machete de foi cu mai multe vederi sau cu cartuș. Exportați în DWG/DXF potrivite pentru CadCraft, pentru desene la scară.
