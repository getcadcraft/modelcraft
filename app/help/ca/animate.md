---
title: Anima qualsevol propietat, dona-li forma com a corbes i barreja clips
summary: L'espai de treball Anima crea claus per a la posició, el gir i la mida d'un objecte, la brillantor, l'obertura i el color d'una llum, l'objectiu i les claus de forma d'una malla; els esquelets doblen una malla amb ossos i pesos pintats; la cinemàtica inversa i les restriccions fan que els ossos i els objectes arribin, mirin, copiïn, es mantinguin dins de límits, penjin o segueixin uns altres; els cossos rígids cauen, s'apilen i xoquen i es calculen com a claus; els controladors fixen un valor a partir d'altres; la vista de Corbes de la línia de temps dona forma a cada canvi amb manetes Bézier i cicles, i la vista de Clips desa les animacions com a accions que tornareu a col·locar i barrejar.
keywords: física, cos rígid, cossos rígids, simulació, simula, deixar caure, cau, gravetat, col·lisió, xoca, apila, rebot, fricció, calcula, calculat, restricció, restriccions, cinemàtica inversa, ik, mira a, segueix, copia transformacions, copia la posició, copia la rotació, limita la rotació, límits, fill de, pare, segueix el camí, camí, pol, fabrik, cadena, esquelet, esquelets, rig, rigging, ossos, os, esquelet d'ossos, pell, pesos, pintura de pesos, grups de vèrtexs, pesos automàtics, postura, mode postura, quaternió dual, interpolació lineal, claus de forma, clau de forma, morfing, morfs, objectius de morfing, formes mescladores, facial, expressió, controlador, controladors, expressions, espai de treball Anima, anima, animació, fotograma clau, clau, claus, propietat, propietats, transformació, posició, rotació, escala, llum, brillantor, color, objectiu, camp de visió, fov, editor de gràfics, corbes, corba, bezier, manetes, tangent, interpolació, cicle, cicles, repeteix, bucle, ping pong, desplaçament, línia de claus, selecciona claus, selecció de caixa, copia claus, enganxa claus, estira claus, escala claus, clips, accions, nla, barreja, influència, emmagatzema
from: 16d8e12f
---

La [línia de temps](topic:animation) mou la càmera i els grups i components sencers. L'espai de treball **Anima** crea claus de més coses, i la línia de temps té dues vistes més per donar forma i reutilitzar el que heu definit amb claus.

## Obrir-lo

Trieu {{ui:Anima}} a la llista d'espais de treball de la barra d'eines. La línia de temps s'obre sota la vista, la barra d'eines mostra els grups d'Anima ({{ui:Claus}}, {{ui:Reprodueix}}, {{ui:Línia de temps}}) i el tauler de la dreta llista el que podeu definir amb claus al capçal de reproducció.

## Crear una clau per a una propietat

El tauler llista, al capçal de reproducció:

- **Objecte triat**: la seva {{ui:Col·loca}}, {{ui:Gir (°)}} i {{ui:Mida}}, tres números cadascun. Escriviu un número i premeu {{key:Enter}}: es crea una clau al capçal de reproducció i l'objecte s'hi mou. El rombe al costat d'una fila crea una clau amb el valor actual; un rombe ple indica que ja hi ha una clau al capçal de reproducció.
- **Llums**: la {{ui:Brillantor (lm)}} de cada llum, la {{ui:Obertura (°)}} (llums de focus) i el {{ui:Color}}.
- **Càmera**: l'{{ui:Angle de l'objectiu (°)}}, per fer zoom mentre la càmera es mou.

{{ui:Clau de transformació}} (o {{key:I}}) crea una clau de la posició, el gir i la mida de cada grup o component triat, de cop; {{ui:Clau de càmera}} (o {{key:K}}) crea una clau de la càmera. Amb {{ui:Clau automàtica}} activada, un grup la posició, el gir i la mida del qual tenen claus d'aquesta manera rep una clau nova cada vegada que el moveu.

Els girs són tres angles, al voltant de X, després Y i després Z. Un gir definit més enllà de 180° continua en el mateix sentit (190° es queda en 190°, no passa a −170°), de manera que una roda pot girar diverses vegades.

:::tip
Un grup definit amb claus amb {{ui:Clau de la selecció}} a la línia de temps té claus de col·locació completa. El botó de corba de la seva fila les converteix en corbes de posició, gir i mida (la mateixa col·locació a cada clau), perquè les pugueu donar forma a {{ui:Corbes}}.
:::

## Formes clau (morfs)

Una **clau de forma** és una altra forma de la mateixa [malla](topic:meshes): un somriure en una cara, l'abombament d'una porta, una fulla doblegada. El seu control lliscant barreja la malla tal com és (0) amb aquesta forma (1); diverses claus se sumen.

1. Trieu una malla a l'espai de treball Anima: el tauler mostra les seves {{ui:Claus de forma}}.
2. Feu clic a {{ui:Afegeix una clau de forma}}. ModelCraft va a l'[espai de treball de malla](topic:mesh-edit) amb la clau nova en edició: moveu punts, extruïu, escolpiu; canvieu la malla per la forma que voleu.
3. Torneu a {{ui:Anima}} i feu clic a {{ui:Fet}}. La malla torna a ser com era, i la clau conserva el vostre canvi.

Després arrossegueu el control lliscant de la clau (o escriviu un valor) per barrejar-la. El rombe crea una clau del valor al capçal de reproducció, de manera que una clau pot créixer i esvair-se amb el temps; quan ja té una pista, un valor nou es crea com a clau al capçal de reproducció. El llapis torna a editar la forma de la clau (la malla la mostra completa fins a {{ui:Fet}}; {{ui:Cancel·la}} deixa la clau com estava), l'ull desactiva la clau i la paperera l'elimina.

Un vèrtex que afegiu mentre editeu una clau pertany a la malla mateixa: es queda on el vau posar, en totes les formes.

:::note
Les claus de forma mouen la malla abans dels seus [modificadors](topic:modifiers): un modificador de Subdivisió suavitza la forma barrejada. Les imatges i els vídeos renderitzats mostren les claus a cada fotograma.
:::

## Esquelets: ossos que doblen una malla

Un **esquelet** és un conjunt d'ossos dins d'una [malla](topic:meshes). Poseu els ossos i la malla els segueix, cada punt tant com indiquen els seus **pesos**.

1. Trieu la malla a l'espai de treball Anima i feu clic a {{ui:Afegeix un esquelet}} al tauler (o a {{ui:Afegeix un os}} del grup {{ui:Esquelet}}): el primer os recorre el mig de la malla des de la seva base.
2. Amb un os triat, {{ui:Afegeix un os fill}} n'afegeix un altre des de la seva punta. Definiu a qualsevol os el seu {{ui:Cap}}, {{ui:Punta}}, {{ui:Gir (°)}} i de què {{ui:Penja de}} al tauler; un os que penja d'un altre es mou amb ell. Desmarqueu {{ui:Mou la malla}} per a un os que només dirigeix els altres.
3. Feu clic a {{ui:Pesos automàtics}}: cada os agafa els punts més propers a ell, i la influència es reparteix suaument per la malla, de manera que els punts entre dos ossos els comparteixen. {{ui:Només els ossos més propers}} és una divisió més ràpida i més dura.

**Poseu** els ossos amb {{ui:Posa}} ({{key:P}}): feu clic a un os per triar-lo, arrossegueu per girar-lo al voltant de l'eix de la vista, i {{key:Shift}}-arrossegueu per moure'l. O escriviu la seva {{ui:Col·loca}}, {{ui:Gir (°)}} i {{ui:Mida}} sota {{ui:Posa}}; els girs són als eixos propis de l'os, des de on descansa. Els rombes i {{ui:Clava tota la postura}} creen una clau de la postura al capçal de reproducció; quan un os ja té claus, posar-lo crea una clau allà. {{ui:Restableix aquest os}} i {{ui:Restableix la postura}} tornen els ossos al repòs.

**Pinta els pesos** ({{key:W}}) per a l'os triat: la malla es mostra en repòs, cada cara pintada segons quant la reté aquell os: vermell tot, blau res. Pinteu per afegir influència ({{key:Mod}} la treu, {{key:Shift}} suavitza); {{ui:Mida (px)}} i {{ui:Intensitat}} regulen el pinzell. Amb {{ui:Fes que els pesos de cada punt sumin 1}} activat, donar més pes a un os en treu la mateixa quantitat als altres. Cada traç és un pas del desfer del model.

{{ui:Pell}} tria com es mou un punt entre ossos: {{ui:Lineal (ràpid)}} barreja els moviments dels ossos i aplana una mica una articulació doblegada; {{ui:Quaternió dual (manté el volum a les articulacions)}} fa girar el punt al voltant de l'articulació, de manera que un colze o un genoll conserven el gruix (la {{ui:Mida}} d'un os no estira la pell llavors).

:::note
Primer van les claus de forma, després l'esquelet i després els [modificadors](topic:modifiers). La vista, les imatges i els vídeos mostren tots la malla posada; els pesos d'una malla es desen amb ella, i els ossos i la seva postura amb l'animació.
:::

## Cinemàtica inversa i restriccions

Una **restricció** mou un os o un objecte després de les seves claus, segons una regla. Trieu l'objecte (o, en un esquelet, l'os) i afegiu-ne una sota {{ui:Restriccions de …}}; diverses s'executen en l'ordre en què apareixen (les fletxes el canvien), i cadascuna té {{ui:Quant}} (de 0 a 1, definit amb clau amb el seu rombo com qualsevol propietat) i un interruptor d'activació.

| Restricció | Per a | Què fa |
|---|---|---|
| {{ui:Abast (IK)}} | Ossos | L'os i els ossos d'on penja ({{ui:Ossos de la cadena}}) es doblegan perquè la seva punta arribi a l'objectiu. Amb dos ossos i un {{ui:Pol (la doblegada apunta cap a ell)}}, el colze o el genoll apunta cap al pol; les cadenes més llargues es doblen suaument. Fora de l'abast, la cadena apunta directament a l'objectiu. |
| {{ui:Mira a}} | Tots dos | Gira perquè l'{{ui:Eix que apunta}} miri a l'objectiu, mantenint l'{{ui:Eix mantingut amunt}} tan a prop d'amunt com pugui. |
| {{ui:Copia transformacions}} | Tots dos | Pren la posició, el gir o la mida de l'objectiu: els que estiguin marcats. |
| {{ui:Límits}} | Tots dos | Manté la seva pròpia posició, gir (en graus) o mida entre un {{ui:mín}} i un {{ui:màx}} per eix; deixeu buit un parell per deixar lliure aquest eix. |
| {{ui:Fill de}} | Tots dos | Es mou amb l'objectiu com si hi penjés, a partir d'on eren tots dos quan vau triar l'objectiu. |
| {{ui:Segueix el camí}} | Objectes | Es posa sobre un [objecte de corba](topic:curves) a {{ui:Al llarg de la corba}} (0 al seu inici, 1 al seu final; definiu-ho amb clau per fer-lo viatjar), i amb {{ui:Gira al llarg de la corba}} mira al llarg d'ella. |

Un objectiu és un altre objecte del grup obert, un os del mateix esquelet, o un {{ui:Un punt}} que escriviu (el punt d'un objecte és en les coordenades del model, el d'un os en les de la seva malla). Per a una cama amb cinemàtica inversa, poseu l'objectiu on ha d'anar el peu i definiu-lo amb clau, o definiu {{ui:Quant}} amb clau per passar la cama entre les claus i la cinemàtica inversa.

:::tip
Un objecte que mira un que segueix un camí el veu sobre el camí: ModelCraft calcula primer els objectius, sigui quin sigui l'ordre dels objectes.
:::

## Física: deixar caure, apilar i xocar

Deixeu caure els objectes i fer-se xocar entre ells, i després conserveu el resultat com a claus.

1. Trieu un grup, un component o una malla i definiu el seu {{ui:Cos rígid}} a {{ui:Física}}: {{ui:Cau i xoca}} (es mou) o {{ui:Es queda quiet i fa d'obstacle}} (una taula, un mur, una rampa). Doneu a un objecte que cau la seva {{ui:Forma}} (la {{ui:Caixa (els seus límits)}} o la {{ui:Bola (rodona dins dels seus límits)}}), la seva {{ui:Massa (kg)}}, la {{ui:Fricció}} i el {{ui:Rebot}} (0 talla, 1 rebota fins a la mateixa alçada).
2. A {{ui:Tot el model}}, definiu {{ui:Des de (s)}} i {{ui:Fins a (s)}}, la {{ui:Gravetat (m/s², cap avall)}} i si hi ha {{ui:Un terra on aterrar}} (i la seva alçada).
3. Feu clic a {{ui:Calcula la física}} (al tauler o al grup {{ui:Física}}). Cada objecte que cau rep una clau de posició, gir i mida a cada fotograma entre els dos temps; reprodueixeu-la com qualsevol animació.

Tornar a calcular substitueix aquestes claus; {{ui:Suprimeix les claus calculades}} les treu. Els objectes comencen en repòs, on les seves claus, corbes i restriccions els posen a {{ui:Des de (s)}} (un moviment amb clau abans d'aquest temps no continua durant la caiguda). Més {{ui:Passos per fotograma}} fa les pilones altes més estables; la barra d'estat indica quan alguna cosa encara es mou al final.

:::note
Les formes són caixes i boles al voltant dels límits de cada objecte; una caixa toca amb els seus cantons, els punts mitjans de les arestes i els punts mitjans de les cares, de manera que les caixes s'apilen i es bolquen com cal esperar. Els teixits, els fluids, les unions entre objectes i les formes exactes no estan implementats.
:::

## Controladors

Un **controlador** fixa una clau de forma a partir d'altres coses, en lloc de fer-ho a mà: obriu el controlador d'una clau (el botó de la calculadora), escriviu una **expressió** i doneu a cada nom que hi aparegui allò que llegeix ({{ui:Llegeix}}): el temps en segons, el fotograma, la posició, el gir o la mida d'una col·locació als eixos X, Y o Z, la brillantor d'una llum, o una altra clau de forma. Per exemple, amb `v` llegint el gir d'una porta al voltant de Z, `clamp(v / 90, 0, 1)` obre una forma a mesura que s'obre la porta.

Les expressions fan servir números, els noms, `+ - * / % ^` i parèntesis, i les funcions `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg` amb `pi` i `e`. Un error queda assenyalat i no canvia res. El control lliscant d'una clau controlada mostra el valor del controlador; el controlador té prioritat sobre la pista de la clau fins que el traieu.

## Triar i canviar claus (vista de Claus)

{{ui:Claus}} mostra una fila per pista: la càmera, cada grup que es mou i cada propietat («Llum 2 · Brillantor (lm)»; les claus de propietat són rodones).

- Feu clic a una clau per triar-la; {{key:Shift}}-clic o {{key:Mod}}-clic afegeix o treu claus de la selecció. {{key:Shift}}-arrossegar sobre les files dibuixa una caixa que afegeix totes les claus que hi hagi.
- Arrossegueu una clau triada per moure-les totes; {{key:Left}} / {{key:Right}} les mouen un fotograma ({{key:Shift}}: deu).
- {{key:Mod+C}} copia les claus triades, {{key:Mod+V}} les enganxa des del capçal de reproducció a les mateixes pistes (una altra pestanya de ModelCraft també les pot enganxar).
- {{ui:Estirament}} separa les claus triades des del capçal de reproducció segons el número que hi ha al costat (2 = dues vegades més separades; 0.5 les acosta).
- La llista de suavitat fixa com es mou cada clau triada cap a la següent.

## Donar forma a les corbes (vista de Corbes)

{{ui:Corbes}} és un gràfic de cada número al llarg del temps: el temps és horitzontal, el valor és vertical. Marqueu les corbes que voleu mostrar a la llista de l'esquerra (X, Y i Z són vermell, verd i blau).

- Feu clic a una clau (un quadrat) per triar-la, {{key:Shift}}-clic per triar-ne més, o arrossegueu una caixa. Arrossegueu una clau triada per canviar-ne el temps i el valor; amb diverses triades, arrossegar les mou en el temps.
- Una clau triada mostra les seves dues **manetes**. Arrossegueu-ne una per donar forma a la corba en aquell costat. {{ui:Manetes}} indica com es comporten: {{ui:Automàtica}} (una corba suau que passa per les claus del voltant), {{ui:Apuntant a la clau següent}}, {{ui:Alineada}} (les dues es mantenen en línia recta, de manera que la corba no té cap angle) o {{ui:Lliure}}.
- {{ui:Des de les claus triades}} fixa com cada clau triada passa a la següent: {{ui:Corba (manetes)}}, {{ui:Suavitza}}, {{ui:Constant}}, {{ui:Lenta a l'inici i al final}} o {{ui:Manté}}.
- {{ui:Abans}} i {{ui:Després}} fixen què fa una corba fora de les seves claus: {{ui:Manté}} (es queda amb el primer o l'últim valor), {{ui:Repeteix}}, {{ui:D'una banda a l'altra}} o {{ui:Repeteix i continua}} (cada repetició comença on va acabar l'anterior: una roda continua rodant, un caminant continua caminant).
- La roda fa zoom ({{key:Mod}}: només valors; {{key:Shift}}: només temps); arrossegueu amb el botó del mig o amb {{key:Alt}} per desplaçar-vos; {{ui:Mostra-ho tot}} o {{key:Home}} ajusta totes les corbes mostrades. Feu clic a un espai buit per moure el capçal de reproducció fins allà. {{key:Delete}} suprimeix les claus triades.

Les manetes no es creuen entre elles en el temps, de manera que una corba mai no va enrere.

## Reutilitzar animacions (vista de Clips)

Un **clip** reprodueix una animació desada (una **acció») a la línia de temps. Els clips es barregen en ordre, les files inferiors per sobre de les superiors; les pistes pròpies de la línia de temps van per sobre de tots els clips.

1. Definiu amb claus els grups i les llums com de costum, i després feu clic a {{ui:Crea un clip}} a {{ui:Clips}} i doneu un nom a l'acció. Les pistes es converteixen en l'acció i un clip la reprodueix on eren (la càmera es queda a la línia de temps).
2. Per tornar-la a usar, trieu l'acció i feu clic a {{ui:Afegeix clip}}: un clip nou comença al capçal de reproducció.
3. Arrossegueu un clip al llarg de la seva fila per moure'l; feu-hi clic per fixar {{ui:Inici (s)}}, {{ui:Velocitat}} (2 = dues vegades més ràpid), {{ui:Repeticions}}, {{ui:Quant}} (de 0 a 1), {{ui:Barreja}} ({{ui:Substitueix}}, o {{ui:Afegeix a sobre}} dels clips anteriors), {{ui:Fora del clip}} (res, mantenir el seu final, o mantenir els dos extrems) i {{ui:Silencia}}. Les fletxes canvien l'ordre; la paperera n'elimina el clip (una acció que cap clip no fa servir ja s'elimina amb ell).

Un clip amb un {{ui:Quant}} inferior al total es barreja amb allò que hi ha a sota: el clip anterior, o la llum o la posició tal com és sense l'animació.

## Què es reprodueix on

| Què | A la vista | En un vídeo renderitzat |
|---|---|---|
| Claus de càmera, angle de l'objectiu amb claus de càmera | Sí | Sí |
| Posició, gir i mida (claus, corbes, clips) | Sí | Sí |
| Brillantor, obertura i color de les llums | Sí | Encara no: el vídeo usa les llums tal com són quan comença (vegeu [encara no implementat](topic:not-built-yet)) |
| Angle de l'objectiu sense claus de càmera | Sí | Encara no: definiu també la càmera amb claus |
| Claus de forma i controladors | Sí | Sí |
| Esquelets (malles posades) | Sí | Sí |
| Cinemàtica inversa i restriccions | Sí | Sí |
| Física calculada (claus) | Sí | Sí |

Tot es desa al fitxer `.modelcraft` amb la resta de l'animació, i {{ui:Desfés}} i {{ui:Refés}} de la línia de temps desfan qualsevol d'aquests canvis.
