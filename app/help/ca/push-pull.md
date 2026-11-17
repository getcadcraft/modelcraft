---
title: Prem i estira cares per fer sòlids
summary: Transformeu una cara en una caixa, feu un edifici més alt o més baix, afegiu un cos sortint o un rebaix, i repetiu una distància amb un doble clic.
keywords: prem estira, extrudeix, alçada, sòlid, caixa, massa, més alt, rebaix, cos sortint, repeteix, doble clic, volum, nivell, sobre cara, a ras, mateixa alçada
from: dc093c91
---

{{ui:Prem/Estira}} ({{key:P}}) mou una cara en la seva pròpia direcció: amunt i avall per a un terra, cap a dins i cap a fora per a una paret. El que passa depèn de la cara.

## Fer un sòlid a partir d'una cara

1. Dibuixeu una cara, per exemple un rectangle sobre el terra ([Dibuixa cares](topic:draw-faces)).
2. Premeu {{key:P}}.
3. Passeu el punter per sobre de la cara. Es ressalta.
4. Feu clic a la cara i després mogueu el punter. La cara puja (o s'enfonsa) i se'n formen parets des de les seves vores. La caixa del valor ({{ui:Distància}}) i la indicació mostren la distància.
5. Feu clic per acabar, o escriviu una distància i premeu {{key:Enter}}: `3m`, `10'`, `2700` en un model en mil·límetres.

   Ara teniu un sòlid tancat. Seleccioneu-lo tot i agrupeu-lo (vegeu [Grups i components](topic:groups-components)): {{ui:Informació de l'entitat}} mostra després "Sòlid: Sí" i el seu volum.

Una cara solitària pot anar en qualsevol de les dues direccions: estireu-la cap amunt per a una massa sobre el terra, o premeu-la cap avall per a un pou o una fonamentació.

:::tip
En lloc de fer dos clics, premeu sobre la cara, arrossegueu i deixeu anar. En una pantalla tàctil és la manera natural: premeu, arrossegueu, aixequeu.
:::

## Estirar fins a l'alçada d'una altra cosa

Mentre estireu, passeu el punter per sobre d'una cantonada, un punt mitjà, una vora o una guia d'una altra part del model. La cara s'ajusta a aquella alçada i un marcador en mostra el punt. Serveix per fer que dos blocs tinguin la mateixa alçada, o per aturar-vos a una línia guia que heu col·locat amb la [cinta mètrica](topic:guides-measure).

També podeu passar el punter per sobre d'una cara paral·lela a la que empenyeu, com el dalt d'un altre bloc o el dalt de la caixa sobre la qual es posa una columna. La indicació diu "Sobre la cara", i la cara que empenyeu acaba al mateix nivell. Per exemple, premeu cap avall la cara interior d'un tub fins que quedi al mateix nivell que la caixa que hi ha sota el tub.

Una cara en angle respecte a la que empenyeu no fixa cap nivell. La distància segueix el punter. Igual passa amb una cara darrere la que empenyeu.

Quan una cara empesa acaba enrasada amb les cares del voltant, les seves parets desapareixen. No queden parets d'alçada zero, i el contorn que heu dibuixat es queda a la cara, de manera que la podeu tornar a empènyer més tard. Per tornar-la a fer una sola cara, esborreu les vores del contorn amb l'{{ui:Esborrador}}: les dues cares s'uneixen.

## Fer una caixa més alta o més baixa

Useu {{ui:Prem/Estira}} sobre el dalt d'una caixa. Com que les parets ja pugen rectes des d'aquí, el dalt simplement es mou: la caixa es fa més alta o més baixa, i no es fan vores noves.

- Empènyer el dalt fins a baix del tot elimina la caixa. ModelCraft s'atura a alçada zero; mai no gira la caixa del revés.
- Igual passa amb qualsevol cara on totes les veïnes segueixen la seva direcció, com el final d'una paret.

## Afegir un cos sortint o un rebaix

1. Dibuixeu un rectangle a la cara lateral d'una caixa (comenceu-lo sobre la cara; es queda al pla de la cara).
2. Premeu {{key:P}} i estireu el rectangle nou **cap enfora**. Afegeix material: un cos sortint, una xemeneia, una marquesina.
3. O empenyeu-lo **cap endins**. Talla un rebaix: un porxo, un nínxol, una entrada endarrerida.

Quan les parets de la part nova s'alineen amb cares que ja hi són, s'uneixen en una sola cara, i així no us queden línies sobrants en una paret plana.

## Empènyer fins al final

Empènyer una cara cap a un sòlid s'atura a la primera cara que hi ha darrere. Quan hi arriba, talla una obertura de banda a banda. Així es fan les finestres i les portes en una paret amb gruix. Vegeu [Talla una obertura en una paret](topic:openings).

## Escriure una distància

Després de fer clic a la cara, escriviu la distància i premeu {{key:Enter}}.

- La distància escrita va en la direcció en què us movíeu. Si encara no us heu mogut, va cap al davant de la cara (fora d'un sòlid, amunt des del terra).
- Escriviu un nombre negatiu, com `-500`, per anar en l'altra direcció.
- Si canvieu d'opinió abans de fer clic, premeu {{key:Esc}}. La cara torna enrere.

## Repetir l'última distància

Després d'un estirament, feu doble clic en una altra cara amb {{ui:Prem/Estira}} encara seleccionat. Es mou la mateixa distància. És la manera ràpida de donar el mateix gruix o la mateixa alçada a diverses parets o diversos terres.

ModelCraft recorda la distància fins que canvieu a una altra eina.

## Coses a saber

- {{ui:Prem/Estira}} treballa amb una cara cada cop. Si feu clic en alguna cosa que no és una cara, la barra d'estat diu "Prem/Estira treballa sobre una cara. Feu clic en una cara."
- Per empènyer o estirar una cara dins d'un grup o component, obriu-lo primer (feu doble clic sobre ell).
- Amb **Col·lisió** activada, una empenta o un estirament que topa amb un altre sòlid s'atura on toca, i la indicació diu amb què toca (el nom de l'objecte, o "geometria solta en aquest grup") i ressalta les cares que ha trobat. Una butxaca que empenyeu dins del seu propi sòlid (per exemple una cara desplaçada que torneu a empènyer cap avall) forma part d'aquest sòlid i mai no l'aturen les seves parets.
- Dos sòlids empesos un dins de l'altre no es tallen ni s'uneixen: les seves cares simplement es travessen. Vegeu [Encara no implementat](topic:not-built-yet).
