---
title: Vopsirea cu culori și materiale
summary: Dați fețelor, grupurilor și componentelor o culoare uniformă sau un material precum cărămidă, placare, șindrilă sau lemn, și păstrați-le la export.
keywords: vopsire, culoare, culori, material, materiale, textură, texturi, cărămidă, placare, șindrilă, acoperiș, lemn, piatră, gresie, beton, tencuială, iarbă, pietriș, sticlă, metal, găleată de vopsea, umplere, mostră, pipetă, implicit, glb, obj, mtl, collada
from: b1500523
---

Culorile vă ajută să deosebiți părțile unui model, iar **materialele** (cărămidă, placare, acoperiș, lemn, piatră, gresie, beton, tencuială, iarbă, sticlă, metal) îl fac să arate din ce este construit. Amândouă se aplică în același fel.

## Alegerea unei culori

Secțiunea {{ui:Culori}} din dreapta arată un rând de culori uniforme, {{ui:Implicit}} (cea tăiată cu o linie: fără culoare) și o mostră {{ui:+}} pentru orice altă culoare. Faceți clic pe una ca să o faceți culoarea curentă. Unealta de vopsire pornește cu ea.

## Vopsirea

1. Apăsați {{key:B}} ({{ui:Vopsire}}), sau, dacă nu este nimic selectat, faceți clic pe o culoare. (Dacă ceva este selectat, un clic pe o culoare vopsește imediat selecția.)
2. Faceți clic pe o față ca să o vopsiți.
3. Faceți clic pe un grup sau pe o componentă ca să vopsiți acea copie: fețele ei care nu au culoare proprie preiau această culoare. Fețele pe care le-ați vopsit în interiorul ei își păstrează culoarea.

Pentru a vopsi mai multe lucruri deodată, selectați-le mai întâi și apoi faceți clic pe o culoare, sau faceți clic pe oricare dintre ele cu {{ui:Vopsire}}. Este un singur pas de anulare.

| Țineți apăsat | Și faceți clic pe o față | Ce se vopsește |
|---|---|---|
| — | | Acea față |
| {{key:Ctrl}} | | Fiecare față conectată la ea care are aceeași culoare |
| {{key:Shift}} | | Fiecare față de culoarea aceea din grupul în care lucrați |
| {{key:Alt}} | | Nimic: preluați în schimb acea culoare |

Pentru a readuce o față fără culoare, alegeți {{ui:Implicit}} și faceți clic pe ea.

## Vopsirea cu un material

Secțiunea {{ui:Materiale}}, sub {{ui:Culori}}, listează biblioteca de materiale pe categorii: cărămidă și bloc, placare, acoperiș, lemn, piatră, gresie, beton, tencuială, teren, sticlă și metal. Treceți cu cursorul peste o mostră ca să vedeți numele ei. Faceți clic pe una, apoi vopsiți exact ca la o culoare: {{key:B}}, apoi faceți clic pe fețe, grupuri sau componente; sau selectați mai întâi și faceți clic pe material.

- În stilul **Umbrit**, fețele arată textura materialului. Linia ascunsă, cadrul de sârmă și razele X arată culoarea lui.
- Texturile merg **orizontal pe fiecare față** și **în sus pe ea**: rândurile de cărămidă rămân orizontale pe fiecare perete, șindrilele coboară pe panta acoperișului, scândurile de pe podea urmează axa roșie. Au dimensiunea lor reală (o cărămidă are cam 215 mm în lungime), astfel încât arată corect de la orice distanță.
- Într-o [imagine randată](topic:render), materialele își păstrează textura, rugozitatea și, pentru sticlă și metal, strălucirea.
- {{key:Alt}}-clic cu {{ui:Vopsire}} preia și materialul unei fețe.

Texturile sunt desenate de ModelCraft însuși, deci funcționează offline și sunt libere de folosit pentru orice (CC0).

## Componente și culori

O culoare vopsită pe o față **din interiorul** unei componente apare pe fiecare copie, pentru că toate copiile împart o definiție comună. O culoare vopsită pe o **copie** din exterior (cu componenta închisă) aparține doar acelei copii, astfel încât două copii ale aceleiași componente pot avea culori diferite. {{ui:Informații entitate}} arată culoarea unei fețe, a unui grup sau a unei componente selectate.

## Culorile din fișiere

- Fișierul ModelCraft păstrează fiecare culoare și fiecare material.
- Celelalte formate primesc **culoarea materialului** (aspectul său de departe) în locul texturii: glTF, Collada, OBJ, DWG și DXF, precum și verificarea pentru imprimare 3D. În glTF, Collada și OBJ, materialul își păstrează numele, cum ar fi `Material_brick-red`.
- **glTF (.glb)** și **Collada (.dae)**: fiecare culoare devine un material. O componentă afișată în culori diferite este scrisă o dată pentru fiecare culoare. glTF scrie și texturile importate ca texturi.
- **OBJ**: exportul descarcă două fișiere, `.obj` și un fișier de materiale `.mtl` cu culorile. Păstrați-le în același dosar. Cu texturi importate, `.obj`, `.mtl` și imaginile vin ca un singur `.zip`.
- **DWG** păstrează culorile exacte; **DXF** folosește cea mai apropiată dintre cele 255 de culori CAD standard.
- **STL** și **PLY** poartă culori: STL în convenția VisCAM / SolidView (programele care nu o citesc o ignoră), PLY ca o culoare pentru fiecare punct. Consultați [Formatele de fișiere în detaliu](topic:formats).

:::tip
Pentru a modela un ecran, vopsiți rama în gri cărbune și sticla în albastru, după ce ați [decalat](topic:draw-faces) fața din față.
:::
