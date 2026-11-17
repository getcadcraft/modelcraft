---
title: Dibuixa cares amb línies, rectangles, cercles i arcs
summary: Fes cares planes sobre el terra o sobre altres cares, parteix-les amb línies, i dibuixa cercles i polígons amb el nombre de costats que vulguis.
keywords: dibuixa, línia, rectangle, cercle, polígon, desfasament, interior, marc, vora, arc, corba, spline, suau, cable, camí, bombament, radi, cara, planta, petjada, parteix, costats, segments, contorn, llapis
from: b6d7b7dd
---

Tot en ModelCraft comença com una **cara** plana: una superfície tancada per arestes. Podeu dibuixar una cara directament amb {{ui:Rectangle}}, {{ui:Circle}} o {{ui:Polygon}}, o traçar-ne el contorn una aresta cada vegada amb {{ui:Line}}. Les cares són el que [Prem/Estira](topic:push-pull) converteix en sòlids.

## Dibuixa un rectangle

1. Premeu {{key:R}}.
2. Feu clic a la primera cantonada: sobre el terra, o sobre qualsevol cara del model.
3. Moveu el punter. El rectangle es queda sobre el terra (o sobre la cara on heu començat), i la caixa de valors ({{ui:Dimensions}}) mostra la seva amplada i fondària. La punta diu "Quadrat" quan els costats són iguals.

   Per dibuixar en un altre pla, apunteu-hi: una cara que passi per la primera cantonada posa el rectangle en aquesta cara, i si ajusteu el punter a un punt fora del pla (un punt final, una aresta, l'eix blau) el rectangle s'aixeca passant per les dues cantonades. Si torneu a ajustar-vos a un punt del primer pla, es torna a estendre. Per mantenir un sol pla, premeu una tecla de fletxa: {{key:Up}} manté el rectangle horitzontal (el pla blau), {{key:Right}} al pla vermell, {{key:Left}} al pla verd. Torneu a premer la mateixa tecla per desbloquejar-ho.
4. Feu clic a la cantonada oposta, o escriviu les dues mides separades per una coma i premeu {{key:Enter}}: `4m,3m`, `4000,3000` en un model en mil·límetres, o `12',10'6"` en peus i polzades.

   Apareix una cara amb quatre arestes al voltant.

Les mides escrites van en la direcció cap a on apuntàveu: si el punter és a l'esquerra de la primera cantonada quan escriviu, el rectangle creix cap a l'esquerra.

:::warning
La coma separa les dues mides, de manera que no pot ser el separador decimal. Escriviu `2.5m,3m`, mai `2,5m`.
:::

## Dibuixa un cercle o un polígon

1. Premeu {{key:C}} per a un cercle o {{key:N}} per a un polígon.
2. Per canviar el nombre de costats, escriviu-lo abans de fer clic: `12s` (o només `12`) i {{key:Enter}}. Un cercle comença amb 24 costats i un polígon amb 6. La punta mostra el nombre actual, i ModelCraft el conserva per al cercle següent fins que el canvieu o canvieu d'eina.
3. Feu clic al centre, sobre el terra o sobre una cara. Per centrar-lo en una cara, apunteu al mig de la cara ("Centre de la cara") o al mig d'una de les seves arestes ("Punt mitjà") amb el punter just a l'interior de la cara: el cercle es dibuixa en aquella cara, fins i tot a l'extrem estret d'una caixa llarga.
4. Feu clic per fixar el radi, o escriviu-lo ({{ui:Radi}} a la caixa de valors) i premeu {{key:Enter}}.

Un cercle és un polígon amb molts costats. Quan l'estireu amb Prem/Estira, els seus costats es suavitzen perquè el cilindre es llegeixi com una sola superfície suau.

## Dibuixa un arc

1. Premeu {{key:A}} ({{ui:Arc}}).
2. Feu clic on comença l'arc, i després on acaba (o escriviu la longitud entre tots dos).
3. Moveu el punter per fer bombar l'arc cap enfora, i feu clic. La punta diu "Semicercle" quan el bombament és la meitat de la distància entre els extrems. O escriviu fins a quina distància se separa el punt mig: `2` i {{key:Enter}}.

Per dibuixar un arc al voltant d'un punt, utilitzeu {{ui:Arc des del centre}}: feu clic al centre, després on comença l'arc (o escriviu el radi), i després on acaba (o escriviu l'angle en graus, com ara `90`). S'ajusta a passos de 15°.

Un arc començat sobre una cara es dibuixa sobre aquesta cara; altrament, descansa sobre el terra, o s'aixeca de peu quan els seus dos extrems són a alçades diferents. Un arc té 12 segments; escriviu `24s` mentre el dibuixeu per obtenir-ne més. Els arcs tanquen cares igual que les línies: un arc que travessa la cantonada d'un rectangle el divideix.

## Dibuixa una corba suau

{{ui:Corba}} dibuixa una línia suau que passa per cada punt on feu clic: un cable, el recorregut d'un passamà, una vora de jardí. Pot sortir del terra: els punts s'ajusten a cantonades, arestes i cares en qualsevol lloc, i les tecles de fletxa bloquegen el vermell, el verd o el blau igual que amb {{ui:Line}}.

1. Feu clic a {{ui:Corba}} al grup {{ui:Dibuix}}.
2. Feu clic als punts per on passa la corba. Escriviu `<0,0,1>` i premeu {{key:Enter}} per a un punt 1 per sobre de l'últim, `[x,y,z]` per a un lloc exacte, o una longitud per a un punt a aquella distància en direcció al punter.
3. Premeu {{key:Enter}} o feu doble clic per acabar. Feu clic de nou al primer punt per tancar la corba. {{key:Backspace}} retira l'últim punt.

Una corba se selecciona com una sola peça. Per canviar-la, seleccioneu-la i feu clic a {{ui:Edita els punts}} dins de {{ui:Informació de l'entitat}}: els seus punts es mostren com a quadrats. Feu clic a un i després feu clic on ha d'anar (o escriviu `<dx,dy,dz>`). {{key:Esc}} torna un punt a on era i acaba l'edició. Una corba plana i tancada fa una cara; una corba que delimita una cara ja no es pot editar.

## Desfasament: una vora dins o fora d'una cara

{{ui:Desfasament}} copia el contorn d'una cara a una distància fixada cap a dins (o cap a fora), per fer un marc, una vora, un ampit o el vidre d'una pantalla.

1. Premeu {{key:F}} i feu clic a la cara, o seleccioneu primer la cara i després premeu {{key:F}}.
2. Moveu el punter dins la cara per a un contorn interior, o fora per a un d'exterior. El contorn nou el segueix, i la punta indica la distància.
3. Feu clic, o escriviu la distància i premeu {{key:Enter}}.

La cara es divideix en dues: la cara interior i un marc al seu voltant (o un anell nou a l'exterior). Estireu o premeu qualsevol de les dues amb Prem/Estira de seguida: per a una pantalla, dibuixeu la caixa, estireu-la fins al seu gruix, desfaseu la cara frontal 30 mm cap a dins i empenyeu una mica la cara interior per al vidre. Els forats de la cara també es desfasen, i un arc o un cercle continua essent una sola corba (més petita o més gran).

- **Doble clic** a una cara amb {{ui:Desfasament}} per desfasar-la de nou per l'última distància.
- **Arestes:** seleccioneu una cadena d'arestes connectades en un mateix pla (per exemple, les dues línies d'una L), premeu {{key:F}}, moveu-vos cap al costat que voleu i escriviu la distància: es dibuixa una còpia paral·lela, amb cantonades a inglet.

- Quan la distància és més gran del que permet la cara, ModelCraft ho indica i no dibuixa res.

## Arcs, cercles i polígons són corbes

Feu clic a qualsevol segment d'un arc, d'un cercle o d'un polígon i se seleccionarà tota la corba. Després {{ui:Informació de l'entitat}} mostra el seu radi, els seus segments, el seu angle (en arcs) i la seva longitud. Escriviu-hi un radi nou per canviar-ne la mida des del seu centre; les cares dibuixades al seu pla el segueixen. Quan la cara d'una corba ja s'ha premut o estirat amb Prem/Estira, el seu radi es queda com està.

## Dibuixa amb línies

1. Premeu {{key:L}}.
2. Feu clic on comença la línia.
3. Feu clic on acaba, o escriviu una longitud i premeu {{key:Enter}}. La longitud escrita va en la direcció que indica el punter.
4. Continueu fent clic. Cada clic comença la línia següent des del final de l'anterior.
5. Tanqueu el contorn fent clic de nou al primer punt. Quan les línies tanquen un bucle pla, s'omple amb una cara i l'eina deixa d'encadenar. Premeu {{key:Esc}} per aturar-ho en qualsevol moment.

Les línies segueixen les direccions vermella, verda i blava quan us hi apropeu; la línia pren aquest color i la punta diu "Sobre l'eix vermell". Vegeu [Inferència i ajust](topic:inference) per saber com bloquejar una direcció i ajustar-se a punts.

### On va una línia quan no toca res

- Una línia que comença sobre una cara es queda en el pla d'aquesta cara.
- Una línia que comença sobre el terra, o en espai buit, es queda a nivell del seu punt inicial. Si mireu el model de cantell, va en el pla vertical que us encara.
- Per dibuixar una línia fins a un lloc exacte, escriviu un punt: `[x,y,z]` per a un punt del model, o `<dx,dy,dz>` per a un desplaçament des de l'inici. Vegeu [Escriu mides exactes](topic:value-box).

## Parteix una cara

Dibuixeu una línia que travessi una cara, d'una vora a una altra (o d'una vora a una altra a través d'altres línies). La cara es divideix en dues cares. Cada una conserva el seu costat i el seu color. El mateix passa amb un rectangle o un cercle dibuixat sobre una cara: la forma esdevé una cara pròpia dins de la més gran, que ara té un forat.

Així és com es disposen les habitacions sobre una llosa de terra, una finestra sobre un mur, o un graó sobre una escala: dibuixeu el contorn sobre la cara, i després premeu o estireu la cara nova.

## Cares que miren en la direcció equivocada

Cada cara té un davant i un darrere. El darrere es mostra en gris blavós. Les cares dibuixades sobre el terra miren cap amunt; les cares dibuixades sobre una altra cara miren igual que aquella.

Si una cara mostra el seu darrere on esperaveu el davant, seleccioneu-la i feu clic a {{ui:Inverteix la cara}} dins de {{ui:Informació de l'entitat}}.

## Què veieu mentre dibuixeu

- Un marcador de color on el punter s'ajusta, i el seu nom a la punta, a la part inferior esquerra.
- Una vista prèvia de la línia o la forma.
- La mida en directe a la caixa de valors. Hi podeu escriure a sobre en qualsevol moment.

## Si la forma no és on esperaveu

- En una pantalla tàctil, vegeu [Resolució de problemes](topic:troubleshooting#a-shape-starts-in-the-wrong-place-on-a-touch-screen).
- Si una línia s'ha ajustat a alguna cosa molt lluny darrere, gireu una mica la vista: els punts ocults darrere d'una cara mai no s'ajusten, però sí els de la seva vora.
- Premeu {{key:Mod+Z}} per desfer l'última forma; un sol pas desfà una línia o una forma.
