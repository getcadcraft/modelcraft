---
title: Segueix-me: fes passar una cara al llarg d'un camí
summary: Fes canonades, cables, passamans, motllures i anells fent passar una cara al llarg d'arestes, arcs o una corba.
keywords: segueix-me, barreja, camí, canonada, cable, tub, passamà, motllura, canalera, anell, tor, torn, extruir al llarg de
from: ec7b3839
---

{{ui:Segueix-me}} mou una cara al llarg d'un camí i construeix el sòlid pel qual passa. La cara conserva la seva forma i es manté perpendicular al camí, i a cada cantonada del camí les peces es troben en un inglet net.

## Fes un cable

1. Dibuixeu el camí: una {{ui:Corba}} que passi pels punts per on passa el cable (pot pujar i baixar), o {{ui:Línia}}s i {{ui:Arc}}s units d'extrem a extrem.
2. Al començament del camí, dibuixeu la secció del cable: un {{ui:Cercle}} petit travessant el camí. Comenceu el cercle al punt final del camí i gireu-lo perquè miri al llarg del camí; o dibuixeu-lo sobre una cara que creuï el camí en aquell lloc.
3. Seleccioneu el camí (un clic selecciona tota una corba o un arc; {{key:Ctrl}}+clic n'afegeix més arestes).
4. Feu clic a {{ui:Segueix-me}} del grup {{ui:Modifica}}, i després feu clic al cercle.

El tub és un sòlid tancat, amb costats suaus (llisos).

## Sense seleccionar primer el camí

Feu clic a {{ui:Segueix-me}}, feu clic a la cara i després feu clic a qualsevol aresta del camí. El camí és la cadena d'arestes que passa per aquella aresta, fins al punt on se n'ajunten tres o més.

## Coses a tenir en compte

- **Camins tancats** (un cercle, una corba tancada, el contorn d'un rectangle) fan un anell: la cara s'esgota i l'anell es tanca sobre si mateix. Dibuixeu un cercle sobre el terra com a camí i un cercle petit dret travessant-lo per fer una rosquilla.
- **Fora del camí:** la cara no ha de tocar el camí. Un perfil dibuixat al costat d'un camí es desplaça al seu costat, com una motllura al llarg de la part superior d'un mur.
- **El camí no pot bifurcar-se**, i ha de ser una sola cadena connectada. ModelCraft ho indica quan no ho és.
- **Una cara que descansa al llarg del camí** (al mateix pla que la primera aresta del camí) no es pot fer passar: gireu-la perquè creuï el camí.
- És un sol pas per desfer.
