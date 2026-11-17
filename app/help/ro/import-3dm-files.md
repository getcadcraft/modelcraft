---
title: Importul unui model .3dm
summary: Importați un fișier .3dm cu plasele, suprafețele, curbele, blocurile, straturile și culorile sale; de unde vin triunghiurile și ce rămâne afară.
keywords: 3dm, import, nurbs, polysurface, brep, suprafețe, plasă de randare, extrudare, curbe, blocuri, straturi, etichete, culori, unități, comutare, migrare
from: 3cf29879
---

ModelCraft citește fișiere `.3dm` cu propriul cititor, în pagină. Nu se încarcă nimic, iar funcționează offline ori de câte ori funcționează ModelCraft. Fișierele salvate în formatele versiunilor 5, 6, 7 și 8 au fost testate; cele mai vechi (versiunile 2 până la 4) ar trebui să se deschidă, dar nu au fost încă încercate.

## Importați fișierul

1. Faceți clic pe {{ui:Import}} din grupul {{ui:Fișier}} (sau trageți fișierul `.3dm` pe vizualizarea 3D).
2. Alegeți fișierul.

   Bara de stare afișează „Se citește chair.3dm…” cât timp citește, apoi ce a intrat, de exemplu „Importat chair.3dm: 14 plase (8330 fețe), 8 curbe, 5 plasări de blocuri, 3 straturi ca etichete. Suprafețe: 7 fețe din plasele salvate în fișier, 29 tesselate de CadCraft.”

Modelul întreg ajunge ca un grup cu numele fișierului, selectat, iar vizualizarea face zoom pe el. Un {{key:Mod+Z}} îl înlătură din nou, cu etichetele cu tot.

## De unde vin triunghiurile

ModelCraft lucrează cu fețe și plase, așa că fiecare suprafață din fișier intră ca o [plasă](topic:meshes) de triunghiuri plate și mici. Pentru fiecare față a unei polysurface (și a fiecărei extrudări) ModelCraft ia, în această ordine:

1. **Plasa de randare salvată în fișier.** Majoritatea programelor de modelare salvează plasa pe care au arătat-o pe ecran cu fiecare suprafață; când există, ModelCraft o folosește așa cum este.
2. **Propria tesselare**, când fișierul nu are plasă salvată: planuri, suprafețe NURBS, suprafețe de rotație (sfere, conuri, tori, forme de strung), curbe extrudate și extrudări (cu găurile și capacele lor), decupate după muchiile lor. Fețele unei polysurface își împart punctele de muchie, deci o polysurface închisă intră ca o plasă închisă. Zonele curbe sunt împărțite până când triunghiurile se află în limita a aproximativ 0.15 % din dimensiunea obiectului față de suprafața reală.
3. **Nimic**, pentru o față de un tip de suprafață pe care ModelCraft nu îl citește încă. Bara de stare spune câte fețe și de ce fel sunt.

Partea „Suprafețe:” din bara de stare spune câte fețe au venit din plase salvate și câte a tesselat ModelCraft. Muchiile din interiorul unei fețe a fișierului sunt moi, iar cele dintre două fețe sunt ascuțite, astfel încât o față curbă se umbrește neted.

:::tip
Pentru cele mai fidele forme, salvați fișierul cu plasele de randare din programul care l-a creat (de obicei aceasta este varianta implicită; o opțiune de „salvare mică” le lasă afară).
:::

## Ce intră

- **Plase** cu culorile vârfurilor și coordonatele texturii.
- **Polysurface, suprafețe și extrudări**, așa cum s-a descris mai sus.
- **Curbe** (linii, polilinii, arce, cercuri, curbe NURBS și curbe unite din ele) ca [muchii](topic:curves), câte un grup de muchii pe strat.
- **Blocurile** devin [componente](topic:groups-components): fiecare plasare a unui bloc este o plasare a unei singure componente, deci editarea unei copii le schimbă pe toate. Blocurile din interiorul altor blocuri se păstrează.
- **Straturile** devin [etichete](topic:tags) cu numele complet al stratului („Furniture::Chairs”), ascunse dacă stratul era oprit. Plasarea fiecărui obiect poartă eticheta stratului său.
- **Culori.** Culoarea unui obiect vine din locul indicat de fișier: propria culoare, cea a stratului sau culoarea de bază a materialului. Devine vopseaua fețelor sale.
- **Obiectele ascunse intră ascunse**; {{ui:Afișare tot}} le arată.
- **Unități:** fișierul își indică unitatea; modelul intră la dimensiunea sa reală.

## Ce rămâne afară (și se spune)

Partea „Note:” din bara de stare numește tot ce nu a intrat, cu câte din fiecare:

- puncte și nori de puncte, text, puncte de text, cote, linii de indicație, hașuri, lumini, plane de decupare și detalii de aranjare în pagină;
- obiecte SubD: mai întâi transformați-le în plase sau polysurface în programul care a creat fișierul;
- fețe pe suprafețe decalate și alte tipuri de suprafață pe care ModelCraft nu le citește încă, atunci când fișierul nu a salvat plasă pentru ele;
- blocuri legate din alte fișiere (se citește doar fișierul pe care îl importați);
- extrudări cu capete înclinate (la mitră) intră cu capete drepte.

Texturile materialelor, setările de randare, vizualizările numite, grupurile și textul utilizatorului nu se citesc; un material dă doar culoarea sa de bază.

## Limite

Fișiere de până la 300 MB. Un fișier deteriorat spune ce nu este în regulă și nu adaugă nimic; un obiect care nu poate fi citit este lăsat afară și numărat, iar restul intră.
