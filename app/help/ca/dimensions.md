---
title: Acotar i canviar la mida del que heu dibuixat
summary: Col·loqueu cotes entre cantonades, sobre arcs i cercles, o entre dues arestes; escriviu una longitud nova per redimensionar el model. Torneu a escriure la longitud d'una aresta o l'amplada, la profunditat i l'alçada d'un grup a Informació de l'entitat.
keywords: cota, cotes, redimensiona, canvia la mida, edita la mida, longitud, amplada, profunditat, alçada, estira, cota de control, anota, mesura, a posteriori, radi, diàmetre, angle, angular, arc, cercle, R, Ø
from: a1f815ec
---

Les mides a ModelCraft no són fixes un cop s'ha dibuixat alguna cosa. Una cota mostra una longitud del model, i escriure'n una de nova la redimensiona perquè coincideixi amb el model. També podeu tornar a escriure la longitud d'una aresta, o l'amplada, la profunditat i l'alçada d'un grup, a {{ui:Informació de l'entitat}}.

## Col·locar una cota

1. Premeu {{key:D}}, o feu clic a {{ui:Cota}} a la barra d'eines.
2. Feu clic a una cantonada des de la qual mesurar. S'hi ajusta com en el dibuix: cantonades, punts mitjans i arestes.
3. Feu clic a la segona cantonada.

   O feu clic una sola vegada sobre una **aresta** (la indicació diu «Sobre aresta») per acotar tota l'aresta d'un sol clic.
4. Moveu el punter fins on hi ha d'anar la línia de cota i feu clic. També podeu escriure el desplaçament, com `0.5m`, i premeu {{key:Enter}}.

   La línia de cota es queda horitzontal per a una aresta horitzontal, tret que hi estigueu mirant de costat. Per a una aresta vertical es queda en el pla vertical que us encara millor.

La barra d'estat diu «Cota 4 m.». Les cotes mostren la seva longitud en la unitat del model i s'actualitzen quan canvieu la unitat al selector.

## Radi, diàmetre i angle

La mateixa eina {{ui:Cota}} acota arcs i angles:

- **Un arc:** feu clic a l'arc. La indicació diu {{ui:Radi}}. Moveu el punter fins on ha d'anar el text i feu clic: la cota diu **R 1.5 m**.
- **Un cercle:** feu clic al cercle. Obteniu un **diàmetre** (**Ø 3 m**) amb una línia que travessa el cercle pel seu centre. Els polígons funcionen igual, amb els seus cantons sobre el cercle.
- **L'angle entre dues arestes:** feu clic a una aresta, i després a una segona aresta que hi toca en una cantonada (mentre hi passeu per sobre, la indicació diu {{ui:Angle entre les arestes}}). Després mogueu-vos cap a l'angle que voleu, i feu clic. Dins de la cantonada obteniu l'angle entre les arestes; si us moveu a un costat, obteniu l'angle contigu (per exemple 150° en lloc de 30°). La distància de la cantonada on feu clic fixa on va l'arc; o escriviu aquella distància.

Per canviar un radi a diàmetre o al revés, seleccioneu la cota i trieu a {{ui:Mostra com a}} a {{ui:Informació de l'entitat}}.

**Redimensionar amb ells:** escriviu un radi o un diàmetre nou just després de col·locar-ne un, o seleccioneu-lo més tard i escriviu. L'arc o el cercle manté el seu centre i canvia de mida; una cara que limita (un disc, el final d'una ranura) canvia amb ell. Hi ha dues coses que només mesuren:

- **Una cota d'angle** no canvia mai el model. Per canviar un angle, gireu les arestes amb {{ui:Gira}}.
- **El cercle al final d'un cilindre** (un cercle que heu estirat amb {{ui:Prem/Estira}}) no es pot redimensionar des de la seva cota, perquè els seus costats també haurien de canviar. Escaleu el cilindre, al voltant del seu eix.

## Redimensionar el model amb una cota

Just després de col·locar una cota, escriviu una longitud nova i premeu {{key:Enter}}: `6m`, `12'`, `3500` en un model en mil·límetres. El model canvia a aquesta mida.

Més tard, en qualsevol moment:

1. Amb {{ui:Selecciona}}, feu clic al text o a la línia de la cota. {{ui:Informació de l'entitat}} diu **Cota** i mostra la seva {{ui:Longitud}}.
2. Escriviu la nova longitud i premeu {{key:Enter}}. Podeu escriure directament al quadre de valor, o al quadre {{ui:Longitud}} d'{{ui:Informació de l'entitat}}.

### Què es mou

Es mou la segona cantonada que heu fet clic, i també tot allò que hi ha més enllà:

- **Les dues cantonades en una sola peça** (l'amplada d'un bloc, l'alçada d'un mur): el costat de la cantonada mòbil es desplaça cap a fora o cap a dins, i les cares unides a ell s'estiren. Un bloc es manté com un sòlid tancat, i qualsevol cosa que estigui completament en aquell costat, com un component finestra, es mou amb ell.
- **Les cantonades en dues peces separades** (l'espai entre dos blocs): la peça de la cantonada mòbil es mou sencera, i l'espai canvia.
- **La cantonada mòbil dins d'un grup o component** en el qual no hi ha l'altra cantonada: es mou el grup sencer.
- **Les dues cantonades dins del mateix grup o component**: s'estira a l'interior. Un component canvia a tots els llocs on es col·loca, tal com passa sempre que l'editeu.

Per canviar quin extrem es mou, seleccioneu la cota i trieu a {{ui:Es mou}} a {{ui:Informació de l'entitat}}:

| Opció | Què passa |
|---|---|
| {{ui:Segon extrem}} (la predeterminada) | Es mou l'extrem en què heu fet clic en segon lloc |
| {{ui:Primer extrem}} | Es mou l'extrem en què heu fet clic en primer lloc |
| {{ui:Tots dos extrems (centrat)}} | Cada extrem es mou la meitat del canvi, de manera que el mig es queda quiet |

### Quan es rebutja un redimensionament

ModelCraft no canvia res i ho indica a la barra d'estat:

- «una cara es doblegaria fora del seu pla»: la cota va inclinada a través de la forma. Acoteu al llarg d'una aresta, o al llarg del vermell, verd o blau.
- «una cara es reduiria a res o es giraria del revés»: la longitud nova és massa curta per a la forma.
- «l'extrem que es mou no és en una cantonada del model»: aquell extrem es va col·locar en un espai buit o al mig d'una aresta. Trieu l'altre extrem a {{ui:Es mou}}, o col·loqueu la cota en dues cantonades.
- «una longitud ha de ser superior a zero».

Cada redimensionament és un sol pas: {{key:Mod+Z}} el desfa.

## Tornar a escriure una mida a Informació de l'entitat

No sempre necessiteu una cota:

- **Una aresta:** seleccioneu-la. La seva {{ui:Longitud}} a {{ui:Informació de l'entitat}} és un quadre on podeu escriure. Escriure una longitud al quadre de valor també funciona. Es mou l'extrem més enllà en vermell, després verd, després blau, i el que hi està unit s'estira. Per exemple, tornar a escriure l'aresta frontal inferior d'un bloc l'amplia cap a la dreta.
- **Un grup o component:** seleccioneu-lo. {{ui:Amplada (vermell)}}, {{ui:Profunditat (verd)}} i {{ui:Alçada (blau)}} són quadres. Es mou el seu costat més llunyà (dreta, darrere, dalt). Són els eixos propis del grup, abans de qualsevol gir que li haureu donat.

Premeu {{key:Enter}} per aplicar, o {{key:Esc}} per tornar a posar el valor antic.

## Les cotes segueixen el model

Una cota queda lligada a les dues cantonades on es va col·locar (una d'angle: a la seva cantonada i als extrems llunyans de les dues arestes; un radi o un diàmetre: al seu arc o cercle). Moveu, empenyeu/estireu o redimensioneu la geometria, i la cota la segueix i mostra la nova longitud. Continua lligada quan convertiu la geometria en un grup o component.

Si un extrem es va col·locar en un lloc que no és una cantonada (sobre una cara, o en un espai buit), o si la seva cantonada s'esborra, aquell extrem es queda on era. La cota continua mesurant, però només es pot redimensionar des de l'altre extrem.

## Eliminar cotes

- Una cota: seleccioneu-la i premeu {{key:Delete}}, o feu-hi clic amb l'{{ui:Esborrador}}.
- Totes les cotes: amb res seleccionat, feu clic a {{ui:Suprimeix totes les cotes}} a {{ui:Informació de l'entitat}}.

Les cotes es desen al fitxer `.modelcraft`. No s'exporten a altres formats, que només porten el model 3D. Un fitxer amb cotes encara s'obre en una versió anterior de ModelCraft, però sense elles.
