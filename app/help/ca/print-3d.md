---
title: Preparar un model per a la impressió 3D
summary: Comprovar que un model és tancat i que les cares miren cap al lloc correcte, veure'n la mida, la base i els voladissos, reparar el que falla i baixar-lo com a STL o 3MF per al laminador.
keywords: impressió 3d, impressora, imprimeix, laminador, stl, 3mf, estanc, tancat, manifold, sòlid, forats, del revés, voladís, suports, base, plataforma, mil·límetres, exporta, repara, arregla, buida, mida de la plataforma, principiant, gruix de paret, eines d'impressió
from: 948e19af
---

El laminador d'una impressora 3D necessita una forma tancada: sense forats, amb totes les cares apuntant cap enfora i sense passar a través de si mateixa. {{ui:Exporta}} › {{ui:Comprova la impressió 3D (STL o 3MF)…}} ho comprova abans de baixar el fitxer.

## Comprovar i baixar

1. Seleccioneu el que voleu imprimir: un o més grups o components, o algunes cares. Si no hi ha res seleccionat, s'imprimeix tot el visible.
2. Feu clic a {{ui:Exporta}} al grup {{ui:Fitxer}}, i després a {{ui:Comprova la impressió 3D (STL o 3MF)…}}.

   El diàleg comença amb una línia: "Preparat per imprimir", quantes coses cal arreglar abans d'imprimir, o quantes cal mirar primer. Cada problema té tres parts: què falla, per què importa i què fer. Després venen la mida en mil·límetres, el volum, el nombre de triangles i la plataforma de la impressora.

3. Si el diàleg enumera coses a arreglar, feu clic a {{ui:Arregla el que es pot arreglar}} (vegeu a sota). La comprovació es torna a fer sola.
4. Feu clic a {{ui:Baixa 3MF}} o a {{ui:Baixa STL}}.

Es imprimeix el que es veu: les cares amagades, els grups i components amagats, i qualsevol cosa en una etiqueta amagada es deixen fora. Les mides són sempre en mil·límetres, la unitat que espera qualsevol laminador, sigui quina sigui la unitat que mostri el model.

:::tip
Preferiu 3MF quan el vostre laminador el llegeixi: conserva els colors i les unitats. STL no té ni una cosa ni l'altra, i els laminadors suposen mil·límetres.
:::

## Què busca la comprovació

Aquests punts aturen una impressió o la fan malbé, i fan que el diàleg digui "No preparat per imprimir":

| Problema | Què vol dir | Què fer |
|---|---|---|
| Una cara només en un costat | Un forat: una aresta té una cara a un costat i res a l'altre | Dibuixeu la cara que falta (una línia de cantó a cantó sovint tanca el buit), o useu {{ui:Repara}} (més avall) |
| Compartida per tres o més cares | Les cares es troben en una aleta o en una paret dins d'un sòlid | Esborreu la cara interior |
| Cares que miren en direccions oposades | Algunes cares apunten cap a dins, unes altres cap a fora | Seleccioneu les cares que miren cap a dins i feu clic a {{ui:Inverteix la cara}} a {{ui:Informació de l'entitat}} |
| Del revés | Una peça tancada sencera apunta cap a dins | Seleccioneu-ne les cares i inverteix-les |
| Es travessa a si mateixa | Una peça es plega a través de si mateixa | {{ui:Edita}} › {{ui:Més}} › {{ui:Interseca amb el model}}, i després esborreu el que hi ha a dins. Vegeu [Interseca cares](topic:intersect) |

Són avisos: el model s'imprimeix, però convé mirar-ho primer.

- **Les parts separades se superposen**, o **es toquen cara a cara**: els laminadors solen fusionar-les en una. Per a un fitxer més net, uniu-les amb {{ui:Sòlids}} › {{ui:Unió}}. Vegeu [Eines de sòlids](topic:solids).
- **Res no queda pla a la base**: gireu el model perquè una cara descansi sobre la plataforma, o el laminador afegirà suports o una base de suport.
- **Surt cap enfora més de 45° de la vertical**: aquestes cares necessiten suport. El diàleg diu quina part de la superfície ho necessita.
- **Menys d'1 mm d'amplada**: probablement s'ha modelat en una unitat equivocada. Comproveu la unitat a la barra d'estat.

Una part buida (una closca tancada dins d'una altra) és correcta: les seves cares apunten cap a l'interior del buit, i el seu volum es resta.

## Arreglar els problemes

Sota **On són els problemes**, el diàleg indica cada grup o component que té alguna cosa malament (les cares soltes que no són en un grup es llisten com a "Cares fora de cap grup"), amb el que hi falla. Un component col·locat diverses vegades es llista una sola vegada: arreglar-lo arregla cada còpia.

- {{ui:Mostra}} obre aquell grup i selecciona les arestes i cares que fallen, perquè quedin ressaltades.
- {{ui:Arregla el que es pot arreglar}} les arregla totes de cop: tanca els forats les vores dels quals es troben planes, treu les cares dins de la forma i les arestes soltes, i gira les cares perquè quedin cap a fora. És un sol pas: {{key:Mod+Z}} ho desfà. La comprovació es torna a fer i mostra el que queda.

El que no pot arreglar (un forat les vores del qual no són planes, o una peça que es travessa a si mateixa) es queda a la llista amb el que cal fer a mà. {{ui:Repara}} sota **Eines d'impressió** va més enllà: tanca els forats que no són plans, treu les peces soltes i les cares duplicades, i llista cada correcció. Vegeu [Suports, gruix de paret, buidatge i reparació](topic:print-tools#repair). També podeu arreglar un grup cada vegada: seleccioneu-lo, i després useu {{ui:Mostra els problemes}} i {{ui:Repara}} a {{ui:Informació de l'entitat}}. Vegeu [Eines de sòlids](topic:solids).

## Una part buida

{{ui:Buida}} sota **Eines d'impressió** buida una part fins al gruix de paret que indiqueu, amb forats de drenatge on feu clic. Vegeu [Buida](topic:print-tools#hollow).

També podeu dibuixar el buit vosaltres mateixos: un grup tancat dins de la part, que no la toca, amb totes les seves cares invertides perquè apuntin cap al buit. La comprovació el compta com a buit i en resta el volum; no es llista com a cosa a arreglar.

## La plataforma de la impressora

Trieu la mida de la plataforma de la impressora a {{ui:Configuració}} › {{ui:ModelCraft}} › {{ui:Plataforma de la impressora 3D}}. La comprovació avisa aleshores quan el model és més gran que la plataforma, girat en qualsevol de les dues direccions. Vegeu [Configuració](topic:settings#3d-printer-bed).

## Eines d'impressió

Sota els resultats del diàleg, **Eines d'impressió** obre {{ui:Vista prèvia dels suports}} (on van els suports i quants n'hi ha, aproximadament), {{ui:Gruix de paret}} (parets massa primes per imprimir), {{ui:Buida}} i {{ui:Repara}}. Vegeu [Suports, gruix de paret, buidatge i reparació](topic:print-tools). {{ui:Divideix per imprimir}} talla un model massa gran per a la plataforma en peces amb connectors i unions numerades: vegeu [Dividir un model gran per imprimir](topic:print-split).

## No comprovat

La comprovació no fa el laminat: els detalls tan petits que la vostra broquera no pot dibuixar i els suports reals són feina del vostre laminador. Vegeu [Encara no implementat](topic:not-built-yet#3d-printing).
