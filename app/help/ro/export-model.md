---
title: Exportarea unui model pentru alte programe
summary: Alegeți exportul potrivit pentru randare, web, imprimare 3D, BIM și BimCraft și verificați ce păstrează fiecare.
keywords: imprimare, 3mf, pdf, hârtie, imagine, png, poză, captură de ecran, randare, salvare vizualizare, export, partajare, redare, gltf, glb, collada, dae, obj, stl, imprimare 3D, ifc, bim, bimcraft, trimitere, alte programe
from: 9e13e80d
---

Exportul face o copie a modelului într-un alt format. Păstrați și fișierul `.modelcraft`: este singurul fișier care păstrează totul și singurul pe care ModelCraft îl deschide direct.

## Exportul

1. Salvați mai întâi ({{key:Mod+S}}), ca fișierul de lucru să fie în siguranță.
2. Faceți clic pe {{ui:Exportare}} din grupul {{ui:Fișier}}.
3. Alegeți formatul. Browserul îl descarcă, numit ca modelul.

Se exportă întregul model. Pentru a exporta o parte, salvați, ștergeți restul, exportați, apoi anulați sau redeschideți.

## Ce format

| Doriți să | Alegeți | Observații |
|---|---|---|
| Să-l deschideți într-un alt program de modelare 3D | {{ui:Collada (.dae)}} | Păstrează grupurile, grupurile imbricate, componentele (partajate, nu copiate), numele și culorile. Z în sus, metri. |
| Să-l randați sau să-l folosiți într-un program de vizualizare | {{ui:OBJ (.obj)}} sau {{ui:glTF binar (.glb)}} | OBJ este cel mai larg citit; scrie fiecare plasare de grup ca obiect separat, dar nu are culori și nu are componente partajate. glTF păstrează componentele și culorile. |
| Să-l puneți pe web, într-un motor de joc sau în AR | {{ui:glTF binar (.glb)}} | Un singur fișier cu tot ce conține. |
| Să-l imprimați 3D | {{ui:Verificare pentru imprimare 3D (STL sau 3MF)…}} | Verifică dacă modelul este închis și dacă fețele sunt orientate corect, apoi scrie STL sau 3MF în milimetri. Vedeți [Pregătirea unui model pentru imprimare 3D](topic:print-3d). {{ui:STL pentru imprimare (.stl, milimetri)}} scrie întregul model fără verificare. |
| Să-l deschideți în BimCraft sau alt program BIM | {{ui:IFC pentru BimCraft (.ifc)}} | Fiecare grup sau componentă de cel mai înalt nivel devine un element de construcție. |

Bara de stare confirmă fiecare export, de exemplu „Exportat House.stl (milimetri).” sau „Exportat House.dae (Collada 1.4.1, Z în sus, metri; componentele rămân partajate).”

## Înainte de export

- **Grupați obiectele.** Collada, glTF și IFC păstrează grupurile și componentele ca obiecte separate. Geometria izolată iese ca o singură masă; în IFC devine un element numit „Loose geometry”.
- **Denumiți-le.** Numele grupurilor și componentelor ajung în Collada și IFC, deci un perete numit „Perete nord” ajunge ca „Perete nord”.
- **Verificați direcția fețelor.** Fețele care apar gri-albăstrui pe exterior vor fi orientate spre interior în export. Corectați-le cu {{ui:Inversare față}} (vedeți [Ștergerea și curățarea](topic:erase#a-face-facing-the-wrong-way)).
- **Pentru imprimare,** faceți piesele solide închise: selectați fiecare grup și verificați că {{ui:Informații entitate}} spune „Solid: Da”. Apoi scalați modelul la dimensiunea de imprimare sau scalați-l în software-ul imprimantei.

## Trimiterea unui model către BimCraft

1. Faceți din fiecare parte a clădirii un grup sau o componentă și denumiți-o.
2. Alegeți {{ui:Exportare}}, apoi {{ui:IFC pentru BimCraft (.ifc)}}.
3. Deschideți fișierul `.ifc` descărcat în BimCraft.

Pentru volumetria conceptuală, folosiți în schimb {{ui:Exportare}} › {{ui:Volumetrie în BimCraft…}}: fiecare grup merge ca o variantă de volumetrie cu niveluri, suprafețe de planșeu și volum. Vedeți [Trimiterea volumetriei către BimCraft](topic:massing-to-bimcraft).

Exportul IFC simplu nu are o legătură directă între cele două aplicații. IFC are un singur nivel, iar fiecare element este un proxy generic de element de construcție, fără tip sau proprietăți: păstrează doar forma și numele. Grupurile închise devin forme solide; cele deschise devin suprafețe.

## Linii fără fețe

Muchiile care nu fac parte din nicio față (linii de tip ghidaj, un plan de amplasament importat) intră în OBJ și Collada ca linii. glTF și STL nu au loc pentru ele și le lasă afară. Ghidajele și scenele nu se exportă în niciun format.

## Salvarea vizualizării ca imagine

{{ui:Exportare}} › {{ui:Imagine a vizualizării (.png)}} salvează exact ce arată vizualizarea 3D, la dimensiunea de pe ecran. {{ui:Imagine la dublul dimensiunii (.png)}} o salvează de două ori mai lată și de două ori mai înaltă (pentru imprimare sau o prezentare clară), cu cote și marcaje redesenate la noua dimensiune, nu întinse.

Pentru o imagine care arată ca la lumina zilei (cer, soare, umbre moi, sticlă), folosiți în schimb {{ui:Exportare}} › {{ui:Randare imagine…}}: vedeți [Randarea unei imagini](topic:render).

Pentru o imagine curată, activați mai întâi [vizualizarea de prezentare](topic:styles-shadows#presentation-view) ({{key:Shift+P}}): axele, ghidajele, conturele de secțiune și selecția nu se includ. Reglați camera, stilul și umbrele cum doriți sau mergeți la o [scenă](topic:scenes); pentru a salva un film în mișcare al scenelor, folosiți {{ui:Export animație}} din panoul {{ui:Scene}}.

## Tipărirea vizualizării sau salvarea ei ca PDF

- {{ui:Exportare}} › {{ui:PDF al vizualizării (.pdf)}} salvează un PDF de o pagină: vizualizarea la dublul dimensiunii de pe ecran, cu cotele ei, pe o pagină A4 (Letter când modelul este în picioare și inchi), pe orizontală, cu o linie dedesubt care indică numele fișierului, data și unitatea.
- {{ui:Exportare}} › {{ui:Imprimare vizualizare…}} deschide aceeași pagină în fereastra de imprimare a browserului. Alegeți o imprimantă sau „Salvare ca PDF”.

Pagina arată vizualizarea așa cum este: pe o vizualizare în perspectivă nu există scară. Pentru un desen la scară, dezactivați {{ui:Perspectivă}} și priviți din {{ui:Sus}} sau {{ui:Față}}, și adăugați [cote](topic:dimensions) pentru dimensiunile importante. [Vizualizarea de prezentare](topic:styles-shadows#presentation-view) lasă afară axele, ghidajele și selecția; cotele rămân.
