---
title: Modificadors sobre una malla, un grup o un component
summary: Escalar, fer simetries, matrius, suavitzar, biselar, tallar i doblegar una malla sense canviar-la; repetir o escalar un grup o component amb la mateixa pila, i fer-ho permanent quan calgui.
keywords: modificador, modificadors, pila, grup, component, escala, fixa, no destructiu, simetria, matriu, matriu radial, subdivisió, superfície de subdivisió, suavitza, bisell, solidifica, gruix, booleà, talla, desplaça, soroll, solda, decima, simplifica, reticle, gàbia, deformació de corba, doblega, embolcall, aplica, edita l'origen
from: dd5ec1cb
---

Un **modificador** canvia el que mostra una malla sense canviar la malla en si. Feu la simetria d'una meitat d'una peça i modeleu només aquella meitat; arrodoniu una caixa amb una superfície de subdivisió i seguiu editant la caixa. Els modificadors estan en una **pila** i funcionen en ordre, de dalt a baix. El que veieu, exporteu, imprimiu i renderitzeu és la malla amb tots els modificadors activats.

## Afegeix un modificador

1. Seleccioneu una malla. A l'espai Model, la seva secció **Modificadors** és a {{ui:Entity info}}; a l'espai Malla, és al panell de la dreta.
2. Trieu-ne un a {{ui:Add a modifier…}}. Va a la part inferior de la pila.
3. Canvieu-ne la configuració sota el seu nom. Les longituds accepten els mateixos valors que la caixa de valor, així que `600mm`, `2'6"` i `(6m)/4` funcionen tots.

Cada canvi és un sol pas de desfer: {{key:Mod+Z}} el desfà.

## Els botons de cada modificador

- La casella activa o desactiva el modificador.
- El botó de pantalla el mostra o amaga a la vista (es queda a la pila).
- El botó de càmera el mostra o amaga a les imatges renderitzades i als vídeos, així que un modificador pot ser només per als renders (o només per a la vista).
- Les fletxes el pugen o baixen a la pila. L'ordre importa: fer la simetria i després subdividir dona una costura suau; subdividir i després fer la simetria no.
- {{ui:Apply}} fa que la forma formi part de la malla: els modificadors de sobre i aquest s'apliquen a la malla mateixa i surten de la pila. És un sol pas de desfer.
- La creu el treu.

## Els modificadors

| Modificador | Què fa |
| --- | --- |
| Escala | Escala respecte a l'origen de l'objecte, amb un factor per a vermell, verd i blau. També en un grup o component. |
| Simetria | Afegeix una còpia simètrica respecte a vermell, verd o blau a través de l'origen de la malla, i uneix les meitats on es troben. |
| Matriu | Copia en línia (un pas de la seva pròpia mida multiplicat pels nombres que doneu, més un pas fix), al voltant d'un eix, o al llarg d'una corba del model. Un grup o component adopta la mateixa línia. |
| Superfície de subdivisió | Suavitza la malla per subdivisió Catmull-Clark. Les arestes vives es mantenen plegades. Els renders poden fer servir més nivells que la vista. |
| Bisell | Arrodoneix cada aresta més aguda que l'angle que doneu. |
| Solidifica | Dona a una superfície un gruix i tanca la vora. |
| Booleà | Talla, uneix o manté el solapament amb un altre objecte del model. Tots dos han de ser sòlids tancats. |
| Desplaça | Mou la superfície cap a dins o cap a fora amb un soroll suau. La mateixa llavor dona les mateixes protuberàncies cada vegada. |
| Solda | Uneix els vèrtexs més a prop que una distància. |
| Decima | Manté una part dels triangles, eliminant els que menys canvien la forma. |
| Suavitza | Relaxa els vèrtexs cap als seus veïns. |
| Reticle | Doblega la malla amb una gàbia: moveu els punts de la gàbia i la malla els segueix. |
| Deformació de corba | Doblega la malla al llarg d'una corba del model, segons vermell, verd o blau. |
| Embolcall | Mou cada vèrtex sobre el punt més proper d'un altre objecte. |

## Sobre un grup o un component

Un grup o component també pot guardar una recepta, així que la pantalla d'una làmpada pot ser una **Escala** i una **Matriu** d'una sola pantalla, i canviar un número canvia la làmpada.

1. Seleccioneu un grup o component. A {{ui:Entity info}}, la seva secció **Modificadors** mostra la pila (buida al principi).
2. Trieu {{ui:Scale}} o {{ui:Array}} des de {{ui:Add a modifier…}}. El grup esdevé un component que és **l'original, col·locat per la pila**. L'original es manté: editeu-lo i cada còpia el segueix de seguida.
3. Escala agafa un factor per a vermell, verd i blau (`1, 1, 2` duplica l'alçada). Matriu agafa el nombre de còpies, un pas com a fracció de la mida del resultat fins ara, i un pas extra en longituds.

La pila s'executa de dalt a baix sobre els eixos propis de l'original, respecte al seu origen, així que l'ordre importa: una Matriu de tres còpies separades 3 m, després Escala 2 en vermell, posa les còpies a 6 m; si escaleu primer i després feu la Matriu, les manté a 3 m. La casella, les fletxes i la creu funcionen com en una malla; els botons de vista i de càmera, i Aplica en un modificador, no funcionen, perquè una pila en un grup és una sola cosa.

- {{ui:Edit source}} obre l'original al lloc. Els canvis es mostren a totes les còpies; en tancar-lo, torneu on éreu.
- {{ui:Bake modifiers}} fa que el resultat siguin arestes i cares simples, i treu la pila, en un sol pas de desfer. Les còpies que se superposen es queden com a geometria separada: fixar no és una unió.
- Les còpies del component comparteixen la recepta; {{ui:Make unique}} la separa (l'original es manté compartit).
- La pila es desa al fitxer, es porta amb copiar i enganxar i amb el desfer, i Purga els no utilitzats manté l'original. Un programa que no coneix els modificadors encara mostra les còpies.
- Fins a Fixar, el resultat no es pot editar, explotar, redimensionar ni estirar: es reconstruiria en el següent canvi. Cada acció ho indica.
- Els límits són 32 modificadors i 1,000 còpies. Un component fet per estirar (Stretch) i una pila encara no poden compartir una definició.

## Superfície de subdivisió

La subdivisió suavitza una malla per Catmull-Clark: cada cara esdevé cares de quatre costats, i cada nivell en fa quatre vegades més. Una caixa amb dos o tres nivells ja es llegeix com una forma arrodonida, i seguiu editant la caixa.

- **Nivells a la vista** defineix com de suau és.
- **Nivells als renders** defineix com de suaus són les imatges renderitzades i els vídeos; els renders poden fer servir més nivells que la vista.
- **Renders sobre la superfície suau real** posa els punts d'una malla renderitzada sobre la superfície límit cap a la qual tendeixen els nivells, així que fins i tot dos nivells es renderitzen tan suaus com molts.
- **Els plecs** mantenen les arestes vives: a l'espai Malla, seleccioneu arestes i useu {{ui:Crease}} (1 es manté viu, 0.5 arrodoneix una mica, 0 és suau). Vegeu [Edita una malla](topic:mesh-edit).
- **Baixeu el nivell de vista en una malla gran:** quan els nivells que demaneu donarien més cares de les que aquest ordinador gestiona bé a la vista, la vista mostra un nivell més baix i ho indica. {{ui:Apply}} sempre usa tots els nivells. Quantes cares: ho defineix la classe del vostre equip a Configuració › Renderització › El vostre equip.
- Les vores obertes mantenen els seus cantons i es queden a la línia de les seves arestes.

## Doblega amb una gàbia de reticle

1. Afegiu un modificador {{ui:Lattice}} i premeu {{ui:Add a lattice cage round the mesh}}. Apareix una gàbia de 3 × 3 × 3 punts al voltant de la malla, dibuixada com a fils.
2. Obriu la gàbia a l'espai Malla (feu-hi doble clic) i moveu-ne els punts. La malla els segueix amb suavitat.

:::tip
Una gàbia és una malla com qualsevol altra: amagueu-la amb la seva etiqueta quan acabeu.
:::

## Malles grans

Les piles petites es calculen de seguida. Una de gran es calcula en segon pla a cada nucli de l'ordinador: la vista mostra l'últim resultat fins que el nou és a punt. Els booleans carreguen el modelador de sòlids la primera vegada; la vista ho diu durant un moment.

## Què no fan encara els modificadors

- Pesos per vèrtex (una atenuació pintada a la malla) per a Desplaça, Suavitza i Embolcall.
- Modificadors que no siguin Escala ni la Matriu lineal sobre geometria de prem/estira (grups i components): convertiu-los primer en malla ({{ui:Convert to mesh}}). La simetria, una matriu radial o en corba, Doblega i Afila en grups arribaran més endavant.
