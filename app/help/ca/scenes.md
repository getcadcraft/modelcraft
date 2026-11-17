---
title: Desa vistes com a escenes
summary: Deseu una càmera i un estil com a escena, actualitzeu-la i canvieu-li el nom, i avanceu o reproduïu escenes per presentar un disseny.
keywords: escena, vista, vista desada, càmera, presentació, animació, reprodueix, presentació de diapositives, Page Up, Page Down, pestanyes, recorregut
from: 38680d6e
---

Una **escena** recorda una posició de la càmera, un estil i què està amagat: des d'on mireu, perspectiva o paral·lela, l'estil de les cares, les arestes, la configuració del sol, els grups amagats, les etiquetes desactivades i la secció de tall. Les escenes es desen al fitxer `.modelcraft`.

## Afegeix una escena

1. Configureu la vista: oriente, feu zoom, trieu un estil, definiu el sol.
2. Al tauler {{ui:Escenes}} de la dreta, feu clic a {{ui:Afegeix una escena}}.

   L'escena apareix a la llista, anomenada "Escena 1", "Escena 2" i així successivament, i com una pestanya a la part superior de la vista 3D. La barra d'estat diu "Escena 1 desada: aquesta càmera, estil i el que és amagat."

## Ves a una escena

- Feu clic a la seva pestanya sobre la vista 3D, o al seu nom a la llista {{ui:Escenes}}.
- O premeu {{key:PageDown}} per a la següent escena i {{key:PageUp}} per a l'anterior. {{ui:Següent}} i {{ui:Anterior}} sota la llista fan el mateix.

La càmera llisca cap a l'escena en una mica més de mig segon. Si l'ordinador està configurat per reduir el moviment, hi salta directament.

## Canvia, reanomena o suprimeix una escena

Cada escena de la llista té tres botons petits després del nom:

- **Actualitza** (les fletxes circulars): desa la càmera, l'estil i el que està amagat actuals dins d'aquella escena. "Escena 2 actualitzada."
- **Reanomena** (el llapis): obre un diàleg "Reanomena l'escena". Escriviu el nou nom i feu clic a {{ui:Desa}}.
- **Suprimeix** (la paperera): elimina l'escena. "Escena 2 suprimida. Ctrl+Z la torna."

Afegir, actualitzar, reanomenar i suprimir escenes són passos de desfer, com els canvis del model.

## Bloqueja la càmera d'una escena

Quan renderitzeu la mateixa vista una vegada i una altra mentre canvia el disseny, bloquegeu la càmera d'aquella escena perquè la vista no es mogui per accident.

1. A la llista {{ui:Escenes}}, feu clic al botó de **bloqueig** (el candau obert) després del nom de l'escena. Es tanca, i la pestanya de l'escena sobre la vista 3D mostra un petit candau. La barra d'estat diu "Escena 2: càmera bloquejada".
2. Aneu a l'escena quan vulgueu renderitzar: la càmera torna exactament a la vista desada, de manera que les imatges fetes des d'allà coincideixen amb les anteriors.

Mentre la càmera està bloquejada, **Actualitza** encara desa l'estil i el que està amagat dins de l'escena, però la càmera es queda on era, fins i tot si heu orbitat cap a una altra banda. Torneu a fer clic al candau per desbloquejar-la; després, Actualitza torna a desar la vista actual. Bloquejar i desbloquejar són passos de desfer, i el bloqueig es desa al fitxer `.modelcraft`.

## Presenta

1. Afegiu-ne dues o més.
2. Feu clic a {{ui:Reprodueix}} sota la llista. ModelCraft passa a la següent escena cada pocs segons i torna a la primera després de l'última.
3. Feu clic a {{ui:Atura}} (el mateix botó) o premeu {{key:Esc}} per aturar.

Per a un estudi del sol, afegiu una escena per hora només amb la {{ui:Hora}} canviada, i després reproduïu-les. Vegeu [Estils i ombres del sol](topic:styles-shadows#a-sun-study).

Per presentar sense les barres, premeu {{key:Ctrl+Shift+F}} dues vegades: pantalla completa i, després, pantalla completa amb les barres amagades. Les pestanyes d'escena es mantenen sobre la vista.

## Què mostra una escena

Una escena recorda què estava amagat quan es va desar: els grups i components que heu [amagat](topic:hide-isolate), les [etiquetes](topic:tags) que heu desactivat, i quins [plans de secció](topic:sections) tallen. Anar a l'escena torna a amagar i mostrar aquests elements. Així, una escena pot mostrar tota la casa, la següent la casa amb l'etiqueta de la coberta desactivada, i la següent una secció a través d'ella.

Les cares i arestes soltes amagades no formen part de les escenes. Anar a una escena no crea cap pas de desfer. Les escenes desades amb una versió anterior de ModelCraft deixen el que està amagat tal com és; feu clic a Actualitza per desar-ho dins.

## Exporta una animació

{{ui:Exporta l'animació}}, sota la llista, reprodueix les escenes de la primera a l'última, movent la càmera suaument entre elles, i desa la pel·lícula com a vídeo **WebM** (dos segons de moviment i una pausa curta per escena). Registra la vista tal com es veu, a la seva mida a la pantalla, en [vista de presentació](topic:styles-shadows#presentation-view) (sense eixos, guies ni selecció). Premeu {{key:Esc}} o torneu a fer clic al botó per aturar sense desar. WebM es reprodueix als navegadors i a VLC, i els editors de vídeo el converteixen.

Per a un recorregut renderitzat (cel, sol, ombres, materials) a una mida que trieu, useu {{ui:Renderitza vídeo…}} en lloc d'això: sense claus d'animació, pren les escenes, en ordre, com a camí de la càmera. Vegeu [Anima la càmera i els objectes](topic:animation).

## Coses a saber

- Canviar l'estil o moure la càmera després d'anar a una escena no canvia l'escena fins que feu clic a Actualitza.
- Les escenes no s'exporten a Collada, OBJ, glTF, STL ni IFC.
