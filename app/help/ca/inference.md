---
title: Inferència i ajust
summary: Què signifiquen els marcadors de colors, quin ajust guanya, i com bloquejar una direcció amb les tecles de fletxa o amb Shift.
keywords: inferència, ajust, referència a objectes, punt final, punt mitjà, centre de la cara, centre, sobre una aresta, sobre una cara, eix, eix vermell, eix verd, eix blau, paral·lel, perpendicular, bloqueig, shift, osnap
from: e78984e9
---

Mentre una eina de dibuix o d'edició treballa, ModelCraft mira què hi ha sota el punter i s'ajusta a allò més útil que hi ha a prop. Un marcador indica què ha trobat, i l'indicador de la part inferior esquerra en diu el nom.

## Marcadors i indicadors

| Indicador | Marcador | S'ajusta a |
|---|---|---|
| Punt final | Cercle verd | El final d'una aresta |
| Punt mitjà | Cercle cian | El mig d'una aresta |
| Centre de la cara | Cercle blau | El mig de la cara sota el punter |
| Punt guia | Gris | Un punt guia deixat per la cinta mètrica |
| Origen | Ocre | On es troben els eixos vermell, verd i blau |
| Sobre l'eix vermell / Sobre l'eix verd / Sobre l'eix blau | Una línia d'aquell color | Una línia des del punt inicial en aquella direcció |
| Paral·lel a l'aresta / Perpendicular a l'aresta | Línia magenta | Una línia des del punt inicial paral·lela o perpendicular a l'aresta recordada (vegeu més avall) |
| Bloquejat | Línia magenta | Una direcció que has bloquejat amb una tecla de fletxa o {{key:Shift}} |
| Sobre una aresta | Quadrat vermell | En qualsevol punt d'una aresta |
| Sobre una guia | Gris | En qualsevol punt d'una línia guia |
| Sobre una cara | Rombe blau | En qualsevol punt d'una cara |
| Sobre el pla | cap | El pla on has començat, quan el punter és sobre espai buit |
| Sobre el terra | cap | El terra (el pla vermell-verd), quan no hi ha res més |

Quan una línia d'eix des del punt inicial creua una aresta o una guia, ModelCraft s'ajusta al punt de creuament i l'indicador en nomena els dos, com ara "Sobre l'eix vermell, sobre una aresta".

## Quin ajust guanya

1. **Punts** a uns 12 píxels: primer els punts finals, després els punts guia, els punts mitjans, el centre de la cara sota el punter i l'origen.
2. **Direccions** des del punt inicial: els eixos vermell, verd i blau, i paral·lel o perpendicular a l'aresta recordada.
3. **Sobre una aresta** o una línia guia.
4. **Sobre una cara.**
5. **El pla de dibuix**, o el terra.

Les coses amagades darrere d'una cara mai no s'ajusten. Orbita per veure el punt que vols.

## Dibuixa sobre una cara des d'un punt

Un {{ui:Rectangle}}, {{ui:Cercle}} o {{ui:Polígon}} començat en una cantonada, un punt mitjà, una aresta o el centre d'una cara es dibuixa **en el pla de la cara sota el punter**, i talla aquella cara. Una aresta pertany a dues cares, de manera que el costat de l'aresta on és el punter decideix: per dibuixar a l'extrem d'una caixa llarga, comença des del mig d'una de les seves arestes amb el punter just dins de la cara de l'extrem.

## Paral·lel i perpendicular

ModelCraft recorda **l'última aresta per la qual el punter va passar abans del primer clic**. Començar en una cantonada o en una aresta compta com a haver passat per sobre d'aquella aresta. Un cop l'eina funciona, les altres arestes per les quals passes el punter no la reemplacen.

Per dibuixar una línia paral·lela a una aresta existent:

1. Prem {{key:L}} i passa el punter per sobre de l'aresta que vols seguir.
2. Mou-te fins al punt inicial, sense creuar altres arestes pel camí si pots, i fes clic.
3. Mou-te en la direcció paral·lela a aquella aresta. La línia es torna magenta i l'indicador diu "Paral·lel a l'aresta". La perpendicular funciona igual, dins del pla on dibuixes.

Si s'ha recordat l'aresta equivocada, prem {{key:Esc}}, passa el punter per sobre de l'aresta correcta i comença de nou.

## Bloqueja una direcció

Després del primer clic d'una eina, pots mantenir el següent punt en una sola línia:

| Tecla | Bloqueja a |
|---|---|
| {{key:Right}} | L'eix vermell |
| {{key:Left}} | L'eix verd |
| {{key:Up}} | L'eix blau (recte amunt) |
| {{key:Down}} | Paral·lel a l'aresta recordada (vegeu més amunt) |

Torna a prémer la mateixa fletxa per desbloquejar. La barra d'estat diu "Bloquejat a l'eix vermell. Torna a prémer la mateixa fletxa per desbloquejar."

Mentre està bloquejat, el punt es desplaça per la línia cap a on és el punter, i encara s'alinea amb els punts per sobre dels quals passes: passa el punter per sobre de la cantonada d'un altre cub per dibuixar una línia al llarg del vermell exactament fins a aquella cantonada.

**{{key:Shift}}** bloqueja la direcció en què estàs ajustat en aquell moment (un eix, o paral·lela), mentre el mantens premut. Deixa'l anar per desbloquejar.

Els bloquejos funcionen amb {{ui:Línia}}, {{ui:Rectangle}}, {{ui:Cercle}}, {{ui:Polígon}}, {{ui:Mou}}, {{ui:Escala}} i {{ui:Cinta}}. Abans del primer clic, les tecles de fletxa fan orbitar la vista.

## Dins d'un grup

Mentre edites dins d'un grup o component, els eixos són els propis del grup (es mouen amb ell, i giren si ha estat girat). Els ajustos encara troben punts i arestes fora del grup, de manera que pots alinear coses amb la resta del model.
