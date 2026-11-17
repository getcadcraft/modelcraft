---
title: Girar i escalar
summary: Girar coses al voltant d'un punt fent clic o escrivint graus, i redimensionar-les de manera uniforme amb un factor.
keywords: escala amb grips, estira, no uniforme, per eix, inverteix, reflecteix, còpia reflectida, inverteix al llarg de, gira, rotació, angle, graus, transportador, escala, redimensiona, amplia, redueix, factor, escala uniforme
from: 45cdcb49
---

## Gira

{{ui:Rotate}} ({{key:Q}}) gira la selecció al voltant d'un punt central. Necessita tres clics: el centre, una direcció inicial i la direcció final.

1. Seleccioneu allò que voleu girar. Si no hi ha res seleccionat, Gira agafa allò en què feu clic primer.
2. Premeu {{key:Q}}. Un anell segueix el punter, mostrant el pla en què girareu.
3. Feu clic al centre de la rotació.
   - Sobre el terra o en espai buit, l'anell està pla (blau): el gir és sobre un eix vertical, com girar un edifici sobre el seu solar.
   - Sobre una cara, l'anell està al pla d'aquella cara: el gir és sobre la pròpia direcció de la cara. Feu clic en una paret per girar alguna cosa sobre un eix horitzontal.
4. Feu clic en un punt que determini on comença l'angle, per exemple al llarg d'una aresta de la cosa que girareu.
5. Moveu el punter al voltant del centre. L'angle es mostra a la punta i a la casella de valor ({{ui:Angle}}). Encaixa en salts de 15° quan hi ha prop d'un.
6. Feu clic per acabar, o escriviu l'angle en graus i premeu {{key:Enter}}: `90`, `45`, `-30`.

   Els angles positius giren en sentit antihorari, vist des de la cara on mira l'anell.

Premeu {{key:Ctrl}} (o {{key:Alt}}) mentre gireu per girar una **còpia** i deixar l'original on és, com amb Mou; la punta indica si la còpia està activada, i tornar a premer la tecla la desactiva. Escriviu `3x` just després d'una còpia girada per fer més còpies al voltant del mateix centre.

Igual que Mou, girar una part de la geometria connectada retorça les cares que hi estan unides. Agrupeu primer les coses per girar-les senceres.

:::note
La punta diu que les tecles de fletxa escullen l'eix de rotació, però en aquesta versió orbiten la vista abans del primer clic. Per triar l'eix, feu clic al centre sobre una cara que mira en la direcció que voleu. Vegeu [Encara no implementat](topic:not-built-yet).
:::

## Escala

{{ui:Scale}} ({{key:S}}) redimensiona la selecció. Seleccioneu primer allò que voleu redimensionar, després premeu {{key:S}}: apareixen quadrats petits (grips) als cantons, a les arestes i als punts mitjans dels costats de la seva caixa.

### Estira o escala amb els grips

- Un grip de **cantonada** escala uniformement en totes les direccions, al voltant del cantó oposat.
- El grip del mig d'un **costat** estira només en aquella direcció, al voltant del costat oposat: fa una caixa més llarga sense fer-la més alta.
- El grip del mig d'una **aresta de la caixa** estira en les dues direccions que la travessen.
- Mantingueu premut {{key:Ctrl}} en fer clic en un grip per escalar al voltant del mig de la caixa.

Feu clic en un grip, moveu el punter i torneu a fer clic; o feu clic al grip i escriviu un factor (`2` duplica, `0.5` divideix per la meitat) i premeu {{key:Enter}}. Per donar a cada direcció un factor propi, escriviu-ne tres, per al vermell, verd i blau: `2,1,0.5`. Dins d'un grup obert, les direccions són les del propi grup.

### Escala al voltant de qualsevol punt

Feu clic en qualsevol lloc que no sigui un grip per escalar uniformement al voltant d'un punt propi. Calen tres clics:

1. Seleccioneu allò que voleu redimensionar. Si no hi ha res seleccionat, {{ui:Scale}} agafa allò en què feu clic primer.
2. Premeu {{key:S}}.
3. Feu clic al punt que es queda quiet (no sobre un grip), per exemple una cantonada inferior.
4. Feu clic en un punt de referència. La seva distància al primer punt compta com 1×.
5. Moveu el punter cap al primer punt o allunyant-lo. El factor es mostra a la punta i a la casella de valor ({{ui:Scale}}).
6. Feu clic per acabar, o escriviu un factor i premeu {{key:Enter}}: `2` duplica la mida, `0.5` la redueix a la meitat.

### Escala a una mida exacta

Per fer que alguna cosa tingui una longitud exacta, calculeu el factor: longitud nova dividida per longitud actual. En el mode de tres clics, la casella de valor fa aritmètica, així que escriviu `4.2/3.6` per fer que una paret de 3.6 m tingui 4.2 m de llarg. La casella de valor d'un grip només accepta nombres simples: calculeu el factor primer (4.2 dividit per 3.6 és aproximadament 1.1667). Seleccioneu primer l'aresta per llegir-ne la longitud actual a {{ui:Entity info}}.

### Corregeix una importació de mida incorrecta

Els fitxers OBJ no tenen unitat, de manera que un model dibuixat en mil·límetres arriba 1000 vegades massa gran. Seleccioneu el grup importat, premeu {{key:S}}, feu clic en un grip de cantonada, i escriviu `0.001` i premeu {{key:Enter}}. Per a un model dibuixat en polzades, escriviu `0.0254`.

## Coses a tenir en compte

- Escalar al voltant d'un punt amb els tres clics és uniforme. Per estirar només en una direcció, useu un grip de costat o d'aresta (vegeu més amunt).
- Escalar un grup o component canvia la còpia que heu escalat; les altres còpies d'un component mantenen la seva mida.
- Premeu {{key:Esc}} abans de l'últim clic per cancel·lar.

## Inverteix

{{ui:Edit}} › {{ui:More}} › {{ui:Flip along red}}, {{ui:Flip along green}} o {{ui:Flip along blue}} reflecteix la selecció en el lloc, a través del mig de la seva caixa: una escala de mà esquerra es converteix en una de dreta. Les cares continuen mirant cap a fora, i un grup o component es reflecteix com un tot (els seus interiors no es reescriuen).

{{ui:Flipped copy along red}} (i verd, blau) deixa l'original on és i posa una còpia reflectida al costat, a través de l'altra banda de la caixa de la selecció: l'altra porta d'un parell, l'altra ala d'un edifici. La geometria solta que hi toca s'uneix a l'original, com sempre fa la geometria que es toca; feu primer l'original un grup per mantenir-los separats.

Dins d'un grup obert, el vermell, el verd i el blau són els eixos propis del grup.
