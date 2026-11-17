---
title: Escriu mides exactes a la caixa de valors
summary: Totes les maneres d'escriure longituds, mides, punts, desplaçaments, angles, costats i còpies, i com es llegeixen les unitats i els números sense unitat.
keywords: caixa de valors, vcb, escriure, exacte, cota, longitud, unitats, peus, polzades, mètric, mil·límetres, coordenades, desplaçament, matriu, costats, angle, coma decimal
from: 0148dc3d
---

La caixa de valors és a la barra d'estat, a baix, amb una etiqueta que canvia segons l'eina. Mentre treballeu mostra la mida en directe; en qualsevol moment podeu escriure'n una d'exacta.

## Com escriure

1. Comenceu l'acció amb un clic (la primera cantonada, la cara, el punt des d'on moure).
2. Escriviu. No cal que feu clic a la caixa de valors: un dígit o un dels caràcters `. , - ' " [ < * /` envia allà el que escriviu.
3. Premeu {{key:Enter}}.

Premeu {{key:Esc}} a la caixa de valors per netejar-la i tornar a la vista. En una pantalla tàctil, toqueu la caixa de valors per mostrar el teclat.

Si ModelCraft no pot llegir el que heu escrit, la barra d'estat diu "Escriviu una longitud, com ara 3m, 10'6" o 4m,3m." Si l'eina no el pot fer servir, diu "No ha funcionat: …" amb el motiu.

## Longituds

| Tipus | Vol dir |
|---|---|
| `3m` `320cm` `3200mm` | Metres, centímetres, mil·límetres |
| `10'` `10ft` `10 feet` | Peus |
| `6"` `6in` `6 inches` | Polzades |
| `10'6"` `10' 6"` `10'-6 1/2"` | Peus i polzades, amb una fracció |
| `6 1/2"` `6-1/2"` `3/4"` | Polzades amb una fracció |
| `1.5ft` `.5m` | Decimals amb unitat |
| `120` | Un número sense unitat, en la unitat del model |

**Un número sense unitat fa servir la unitat del model**, tal com es mostra al selector de la part inferior dreta: polzades en un model en peus i polzades (així, `120` són 10 peus), mil·límetres en un model en mil·límetres, i així successivament. Escriure una unitat sempre preval, sigui quina sigui la unitat del model. Les cometes corbes i les marques de prima (’ ” ′ ″) també es llegeixen com a peus i polzades.

:::warning
Useu sempre un **punt** per als decimals: `2.5m`. Una coma separa dos valors, de manera que `2,5` vol dir 2 i 5 (dos valors), sigui quina sigui la vostra configuració d'idioma.
:::

## Càlculs

Qualsevol longitud pot ser un càlcul: sumeu `+`, resteu `-`, multipliqueu `*`, dividiu `/`, i useu parèntesis. No cal calculadora.

| Tipus | Vol dir |
|---|---|
| `2.5/3` | Un terç de 2.5 (en la unitat del model) |
| `12'6"+3/4"` | 12' 6 3/4" |
| `(24'-0")/3` | 8' |
| `2*450mm` | 900 mm |
| `4+7/16` | 4 7/16" en un model en peus i polzades |
| `3m-25cm` | 2.75 m |

Un número sense unitat és en la unitat del model quan és una longitud (`2.5/3` en un model en metres és 0.833 m), i un simple factor quan multiplica o divideix una longitud (`2*450mm`). Els angles i els factors també admeten càlculs: `90/2` és 45°. Dues longituds multiplicades fan una àrea, no una longitud, de manera que `2m*3m` es refusa.

Si ModelCraft no ho pot calcular, la barra d'estat diu què està malament i on, per exemple "Divisió per zero (caràcter 4)." Un parèntesi també obre la caixa de valors, de manera que podeu començar amb `(`.

Aquests conserven el seu propi significat: `/3`, `3x` i `*3` després d'una còpia, `24s` per als costats, i `/3` amb una aresta seleccionada (llavors [divideix l'aresta](topic:divide)).

## Per eina

| Eina | Etiqueta | Tipus |
|---|---|---|
| {{ui:Línia}} | {{ui:Longitud}} | Una longitud (cap al punter), o un punt o un desplaçament (més avall) |
| {{ui:Rectangle}} | {{ui:Cotes}} | Dues longituds: `4m,3m`, `12',10'`. També funciona un punt i coma: `4m;3m` |
| {{ui:Cercle}}, {{ui:Polígon}} | {{ui:Costats}}, després {{ui:Radi}} | Abans del primer clic, el nombre de costats: `12s` o `12` (de 3 a 999). Després, el radi |
| {{ui:Prem/Estira}} | {{ui:Distància}} | Una longitud. Una de negativa va en sentit contrari |
| {{ui:Mou}} | {{ui:Distància}} | Una longitud (cap al punter), o un punt o un desplaçament. Després d'una còpia: `3x`, `*3`, `/3` |
| {{ui:Gira}} | {{ui:Angle}} | Graus: `90`, `-45`, `22.5` |
| {{ui:Escala}} | {{ui:Escala}} | Un factor superior a 0: `2`, `0.5`, `1.25` |
| {{ui:Cinta}} | {{ui:Desfasament}} o {{ui:Longitud}} | Una longitud |
| {{ui:Divideix}} | {{ui:Parts}} | Quantes parts iguals: `5`, `5s` o `/5` (de 2 a 1000). Vegeu [Divideix una aresta o corba en parts iguals](topic:divide) |
| {{ui:Cota}} | {{ui:Desfasament}}, després {{ui:Longitud}} | On va la línia de cota; just després de col·locar-la, una nova longitud redimensiona el model |
| {{ui:Selecciona}} | {{ui:Valor}} | Amb una cota o una aresta seleccionada, una nova longitud redimensiona el model. Vegeu [Cota i redimensiona](topic:dimensions) |

## Punts i desplaçaments

Per a {{ui:Línia}} i {{ui:Mou}}, després del primer clic:

- `[x,y,z]` va a aquest punt exacte del model (en els eixos propis del grup quan editeu dins d'un grup). Exemple: `[0,0,3m]` són 3 m directament per sobre de l'origen.
- `<dx,dy,dz>` va fins a aquesta distància des del primer punt al llarg dels eixos vermell, verd i blau. Exemple: `<0,0,10'>` són 10 peus directament cap amunt.

Cadascun dels tres valors pot tenir la seva pròpia unitat: `<12',0,6">`.

## Còpies després d'un moviment

Just després d'una còpia amb {{ui:Mou}}:

| Tipus | Fa |
|---|---|
| `3x` o `*3` | 3 còpies en fila amb el mateix espaiat |
| `/3` | 3 còpies repartides uniformement des de l'original fins a la primera còpia |

Fins a 500 còpies. Vegeu [Mou, copia i crea matrius](topic:move-copy#a-row-of-copies).

## Les longituds escrites necessiten una direcció

Una única longitud escrita va en la direcció en què apunta el punter des del primer clic. Si escriviu just després de fer clic, abans de moure's, encara no hi ha direcció i no passa res. Mogueu una mica el punter cap on voleu anar, i després escriviu.

## La unitat del model

Canvieu la unitat al selector de la part inferior dreta: {{ui:ft i in}}, in, ft, yd, mi, mil, µm, mm, cm, m o km, segons les que estiguin activades a {{ui:Configuració}} › {{ui:General}} › {{ui:Unitats}} (la unitat pròpia del model sempre hi és). Una longitud escrita amb la marca de qualsevol unitat es llegeix en aquesta unitat. Vegeu [Unitats, valors escrits i llistes d'unitats](common:unit-lists). Canvia la manera com es mostren les longituds i com es llegeixen els números sense unitat; el model conserva la mateixa mida. La unitat es desa al fitxer.

Com es mostren les mides:

| Unitat | Longituds | Àrees | Volums |
|---|---|---|---|
| ft i in | `10' 6 1/2"` (fins a 1/16") | peus quadrats | peus cúbics |
| in | `126 1/2"` | polzades quadrades | polzades cúbiques |
| m | `3.2 m` | m² | m³ |
| cm | `320 cm` | cm² | cm³ |
| mm | `3200 mm` | m² des de 0.01 m², si no mm² | m³ des de 0.01 m³, si no mm³ |

Un model nou comença en peus i polzades quan l'idioma del navegador està configurat en una regió dels Estats Units (i Libèria i Myanmar), i en mil·límetres a la resta del món. S'usa en lloc d'això una unitat marcada amb estrella a {{ui:Configuració}} › {{ui:General}} › {{ui:Unitats}}, quan ModelCraft la tingui. O canvieu el selector després de {{ui:Nou}}.
