---
title: Revisa el model amb un casc de RV
summary: Passegeu pel model a mida real amb un casc de RV: salteu, gireu, mesureu, talleu-lo, col·loqueu incidències amb una imatge, vegeu-lo com a model de sobre taula i trobeu els altres d'una sessió en directe.
keywords: rv, realitat virtual, casc, webxr, xr, immersiu, quest, oculus, vive, index, pico, passeig, recorregut, teletransport, revisió de disseny, revisió, mesura, secció, talla, incidència, incidències, bcf, sobre taula, model a escala, presència, avatars, en directe, junts
from: fa2f591a
---

{{ui:Revisa en RV}} us posa dins del model amb un casc de RV, a mida real. Us situeu on és la càmera de la vista, a terra sota d'ella, mirant en la mateixa direcció. No es puja res: el casc mostra el que el navegador dibuixa en aquest ordinador (o en el navegador propi del casc).

## Què necessiteu

- Un casc que el navegador pugui controlar (WebXR): el navegador propi d'un casc autònom, o Chrome o Edge en un PC amb un casc connectat.
- ModelCraft obert en una pàgina segura (https), com ho està en aquest lloc.

Quan no hi ha cap casc, {{ui:Revisa en RV}} apareix en gris i diu per què.

## Començar

1. Prepareu la vista on voleu començar: dins d'una sala, o a fora mirant l'edifici.
2. Feu clic a {{ui:Vistes}} al grup {{ui:Càmera}}, i després a {{ui:Revisa en RV}}.
3. Poseu-vos el casc.

El menú és al dors de la mà esquerra. Apunteu-hi amb el comandament dret i premeu el gallet per triar un botó. (Amb només una mà, el menú flota davant d'on vau començar.)

## Com es veu

El casc mostra el model amb l'aspecte de la [vista en directe](topic:live-view): els acabats i materials que heu donat a les cares, el cel i el sol segons el lloc i la data del model amb la seva ombra, llums, plantes i roques escampades, i la llum que rebota a les parets i als terres (calculada en aquest ordinador mentre mireu al voltant, i que us segueix quan us moveu). La brillantor i la transformació de vista (ACES o AgX) són les de [Renderitza una imatge](topic:render). Quant dibuixa depèn del que tingui el navegador del casc, igual que a l'escriptori; l'oclusió ambiental, els reflexos i el halo es queden a l'escriptori.

## Desplaceu-vos

- **Salt:** a {{ui:Mou}}, apunteu a un terra i premeu el gallet; hi aterrareu. O empenyeu la palanca endavant per apuntar, i deixeu-la anar per saltar. Només podeu aterrar en terres i sòls (superfícies que miren amunt), mai en una paret.
- **Gir:** empenyeu la palanca cap a l'esquerra o la dreta: gireu 30° cada vegada.
- **Camina:** a l'àrea de joc, simplement camineu.

## Mesura

Trieu {{ui:Mesura}}, i després premeu el gallet sobre dos punts. La distància es mostra entre ells, en les unitats del model. Un punt proper a una cantonada s'ajusta a la cantonada.

## Talleu-lo

Trieu {{ui:Secció}} i premeu el gallet sobre una superfície:

- sobre una paret (o qualsevol cosa que no sigui un terra): tot el que hi ha entre vosaltres i aquella superfície es talla, de manera que hi veieu a dins. Funciona millor des de fora, o a través d'una sala;
- sobre un terra, des de dalt: un tall en planta a 1.2 m per sobre d'aquell terra, de manera que les parets mostren la seva part inferior.

{{ui:Neteja}} elimina el tall i les mesures. Si un pla de secció talla el model a la vista quan comenceu, el casc comença amb ell.

## Col·loqueu una incidència

Trieu {{ui:Incidència}} i premeu el gallet on hi ha el problema. Un marcador numerat la senyala, i ModelCraft guarda la incidència amb una imatge del que veieu i del lloc on éreu. Quan sortiu de la RV, les incidències són a la llista {{ui:Incidències}} de la dreta:

- el botó de l'ull mostra la incidència des d'on es va col·locar;
- {{ui:Desa com a BCF}} les baixa totes en un fitxer BCF, que els programes de revisió BIM obren (inclosa la càmera i la imatge);
- també es desen al fitxer `.modelcraft`.

Afegiu un comentari a una incidència després de sortir de la RV, en un programa BCF: escriure al casc encara no està implementat.

## Vegeu-lo com a model de sobre taula

{{ui:Sobre taula}} redueix el model perquè càpiga en una taula davant vostre; passegeu-hi al voltant, o gireu-lo amb la palanca. {{ui:Mida real}} us torna on éreu.

## Amb altres, en directe

En una [sessió en directe](topic:work-live), tothom a la RV veu els altres com un cap i dues mans del seu propi color, amb el seu nom, i un punt on apunta cadascun. Les edicions que fa qualsevol arriben al vostre casc en un moment. Les persones a l'escriptori encara no es mostren al casc.

## Sortiu

Trieu {{ui:Surt de la RV}} (o traieu-vos el casc i acabeu-ho allà). La vista de la pantalla es mou on era el vostre cap.

:::note
Provat només amb un emulador de casc, encara no amb un casc real. Un model gran pot fer que el casc vagi a batzegades: oculteu primer el que no necessiteu ([oculta i aïlla](topic:hide-isolate)).
:::
