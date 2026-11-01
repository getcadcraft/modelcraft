---
title: Comença amb ModelCraft
summary: Per a què serveix ModelCraft, com obrir-lo, i la teva primera caixa, des d'un rectangle fins a un model desat.
keywords: començar, primer model, inici, tutorial, introducció, caixa, massa, 3d, prem estira, inici ràpid, guiat, guia, principiant, nou en 3d
from: d47ad719
---

ModelCraft és un modelador 3D per al disseny inicial: estudis de volums, distribucions d'estances, formes de construcció senzilles i les ombres que projecten. Dibuixes formes planes, les puges fins a sòlids i continues treballant-hi dibuixant sobre les seves cares. S'executa al navegador web, i els teus models es queden al teu ordinador.

Si has fet servir SketchUp, la major part del que saps s'aplica: les mateixes lletres d'eina, prem/estira, una caixa de valor per a mides exactes, grups i components. [Venint d'altres modeladors](topic:coming-from) enumera el que és diferent.

## Obre ModelCraft

1. Obre ModelCraft en una versió actual de Chrome, Edge, Firefox o Safari. Consulta [Navegadors i ordinadors](common:browsers).
2. Espera que aparegui la vista 3D: una zona clara (o fosca) al mig, amb una targeta titulada "Comença a modelar".

La pantalla té una barra d'eines a dalt, el {{ui:Esquema}} i els {{ui:Components}} a l'esquerra, la vista 3D al mig, {{ui:Informació de l'entitat}}, {{ui:Estil}} i {{ui:Escenes}} a la dreta, i una barra d'estat a la part inferior amb la caixa de valor i les unitats. [La pantalla de ModelCraft](topic:workspace) explica cada part.

:::note
ModelCraft necessita WebGL, la funció de dibuix 3D del navegador. Si el centre de la pantalla queda buit i les eines no fan res, consulta [Resolució de problemes](topic:troubleshooting#the-3d-view-is-blank).
:::

## Comprova primer les unitats

Mira la cantonada inferior dreta. El selector d'unitats mostra en quines unitats es mesuren les longituds.

- Un model nou comença en **peus i polzades** quan el navegador està configurat als Estats Units (també Libèria i Myanmar), i en **mil·límetres** a tota la resta.
- Per canviar-ho, tria una altra unitat al selector: {{ui:ft i in}}, {{ui:in}}, {{ui:m}}, {{ui:cm}} o {{ui:mm}}. El model en si no canvia de mida; només canvia com es mostren les longituds i com es llegeixen els números sense unitat.

Un número que escrius sense unitat fa servir la unitat del model. En un model de peus i polzades, un número sense unitat són **polzades**, així que `120` vol dir 10 peus.

## Deixa que ModelCraft et guiï pel primer model

Nou en el 3D? A la targeta {{ui:Comença a modelar}}, fes clic a {{ui:Primer model guiat}} (també és a {{ui:Vistes}}). Una petita targeta et guia en quatre passos, des d'un rectangle pla fins a un model llest per a una impressora 3D:

1. Dibuixa un rectangle a terra.
2. Estira-la cap amunt per fer-ne una caixa.
3. Fes que la caixa sigui un sol objecte (un grup).
4. Comprova-la per a la impressió 3D, i després baixa un fitxer 3MF o STL.

La targeta observa el model, no els botons: avança quan el pas està fet, independentment de com l'hagis fet, i retrocedeix un pas quan desfàs. {{ui:Tria l'eina}} tria l'eina per tu. Tanca-la en qualsevol moment amb el {{ui:×}}.

## Dibuixa la primera caixa

1. Prem {{key:R}} per a l'eina {{ui:Rectangle}}, o fes clic a {{ui:Rectangle}} del grup {{ui:Dibuix}} de la barra d'eines.
2. Fes clic una vegada a terra, a prop del centre de la vista. Aquest és el primer cantó.
3. Mou el punter enrere. Un rectangle el segueix, i la caixa de valor de sota (amb l'etiqueta {{ui:Dimensions}}) mostra la mida.
4. Escriu la mida i prem {{key:Enter}}: per exemple `4m,3m`, o `16',12'` en peus i polzades. No cal que facis clic a la caixa de valor abans; en escriure un número hi va directament.

   Obtens un rectangle pla a terra. És una **cara**: una superfície amb arestes al voltant.

5. Prem {{key:P}} per a {{ui:Prem/Estira}}.
6. Fes clic al rectangle, mou el punter cap amunt i fes clic de nou. O bé fes clic al rectangle i escriu una alçada, com `3m` o `10'`, i prem {{key:Enter}}.

   El rectangle es converteix en una caixa amb una tapa, una base i quatre cares laterals.

7. Prem {{key:Space}} per tornar a {{ui:Selecciona}}, i després fes clic a la tapa de la caixa. {{ui:Informació de l'entitat}} a la dreta mostra la seva àrea.

:::tip
També pots arrossegar en lloc de fer dos clics: prem al primer cantó, arrossega i deixa anar al segon. Les dues maneres funcionen per a totes les eines de dibuix.
:::

## Mira al voltant

- **Òrbita:** arrossega amb el botó central (la roda), o prem {{key:O}} i arrossega amb el botó esquerre.
- **Desplaça:** arrossega amb el botó dret, o amb el botó central mentre mantens {{key:Shift}}.
- **Zoom:** gira la roda. Fa zoom cap al que hi ha sota el punter.
- **Veure-ho tot:** prem {{key:Shift+Z}}, o fes clic a {{ui:Extensió}}.

Amb un trackpad o una pantalla tàctil els gestos són diferents. Consulta [Òrbita, desplaçament i zoom](topic:orbit-pan-zoom).

## Desfer

Prem {{key:Mod+Z}} per desfer i {{key:Mod+Y}} per refer, o fes servir {{ui:Desfés}} i {{ui:Refés}} de la barra d'eines. ModelCraft recorda els últims 200 passos mentre el model és obert. L'historial no es desa al fitxer.

## Desa el model

1. Fes clic a {{ui:Desa}} al grup {{ui:Fitxer}}, o prem {{key:Mod+S}}.
2. El navegador baixa un fitxer amb el nom del model, com `Untitled.modelcraft`. La barra d'estat diu on ha anat: "Desat Untitled.modelcraft a les teves baixades."

**Desar és una baixada.** Cada desament crea una còpia nova a la carpeta de baixades; no sobreescriu el fitxer que has obert. Per mantenir una carpeta de projecte ordenada, mou o reanomena el fitxer allà tu mateix. [Obre, desa, importa i exporta](topic:files) explica per què i què més pots fer.

:::warning
ModelCraft no desa per si sol. Si tanques la pestanya amb canvis sense desar, el navegador pregunta primer si vols sortir de la pàgina. Tria quedar-te i després desa.
:::

## Obtén ajuda

Prem {{key:F1}} o fes clic a {{ui:Ajuda}} a la barra de l'aplicació per obrir aquesta ajuda al costat del model. Funciona sense connexió. Prem {{key:F1}} de nou, o {{key:Esc}} dins de l'ajuda, per tancar-la. Consulta [Utilitzar aquesta ajuda](common:help).

## Què cal fer a continuació

- [Dibuixa cares amb línies, rectangles i cercles](topic:draw-faces)
- [Prem i estira cares per fer-ne sòlids](topic:push-pull)
- [Escriu mides exactes a la caixa de valor](topic:value-box)
- [Totes les tecles i accions del ratolí](topic:keyboard)
