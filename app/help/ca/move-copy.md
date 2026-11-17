---
title: Moure, copiar i fer matrius
summary: Moure elements fent clic o per una distància exacta, copiar-los amb una tecla modificadora i fer una fila de còpies equidistants.
keywords: mou, copia, duplica, matriu, fila, espaiat, divideix, desfasament, estira, columnes, repeteix, còpia múltiple
from: 280245fc
---

{{ui:Mou}} ({{key:M}}) mou el que hi hagi seleccionat d'un punt a un altre. Si manteniu premuda una tecla modificadora, es converteix en una còpia, i després d'una còpia podeu escriure quantes més en voleu.

## Moure alguna cosa

1. Seleccioneu el que voleu moure (vegeu [Seleccioneu elements](topic:select)). Si no hi ha res seleccionat, {{ui:Mou}} agafa l'element en què feu clic.
2. Premeu {{key:M}}.
3. Feu clic en un punt des d'on moure. Trieu alguna cosa significativa, com una cantonada: aquest punt anirà exactament on feu clic després.
4. Moveu el punter. La selecció el segueix. S'ajusta a punts, arestes i a les direccions vermella, verda i blava, com ho fa una línia.
5. Feu clic on ha d'anar el punt, o escriviu una distància i premeu {{key:Enter}}.

   El consell de la barra d'estat torna a "Feu clic en un punt des d'on moure…" per al següent moviment.

Una distància escrita va en la direcció que apunteu. També podeu escriure un desplaçament exacte, `<2m,0,0>` (2 m al llarg del vermell), o una destinació exacta per al punt que heu triat, `[0,0,0]` (l'origen). Vegeu [Introduïu mides exactes](topic:value-box).

Per moure només al llarg d'un eix, premeu una tecla de fletxa després del primer clic: {{key:Right}} es bloqueja al vermell, {{key:Left}} al verd, {{key:Up}} al blau. Torneu a premer la mateixa fletxa per desbloquejar-ho.

## Moure una part d'una forma l'estira

La geometria que no està agrupada està connectada. Si seleccioneu una cara o unes quantes arestes i les moveu, les cares unides a elles s'estiren per seguir-les. Moveu la cara superior d'una caixa cap al costat i la caixa s'inclinarà; moveu una aresta del terrat i el terrat canviarà de pendent. Les cares que ja no poden quedar planes es plegaran en triangles.

Per moure un objecte sencer sense estirar-lo, seleccioneu-lo tot primer (feu-hi triple clic) o, millor, feu-lo un grup o un component (vegeu [Grups i components](topic:groups-components)).

## Copiar alguna cosa

1. Seleccioneu el que voleu copiar.
2. Premeu {{key:M}}.
3. Manteniu premut {{key:Ctrl}} (o {{key:Alt}}) i feu clic en el punt des d'on moure. En un Mac, {{key:Mod}} o {{key:Alt}} fan el mateix. El consell diu "Ctrl mou en lloc", cosa que vol dir que esteu copiant.

   També podeu prémer i deixar anar {{key:Ctrl}} o {{key:Alt}} després del primer clic per canviar entre moure i copiar.

4. Feu clic on ha d'anar la còpia, o escriviu una distància i premeu {{key:Enter}}.

   L'original es queda on estava, i la còpia queda seleccionada.

## Copia, retalla, enganxa i duplica

- {{key:Mod+C}} copia la selecció, {{key:Mod+X}} la retalla (la copia i després la esborra), {{ui:Copia}} i {{ui:Enganxa}} també són botons al grup {{ui:Edita}} de la barra d'eines, i {{ui:Més}} al costat té retallar, enganxar al mateix lloc i duplicar.
- {{key:Mod+V}} enganxa: un contorn de la còpia segueix el punter, s'ajusta com qualsevol eina, i un clic la deixa amb la cantonada inferior allà. {{key:Esc}} cancel·la.
- {{key:Mod+Shift+V}} enganxa al mateix lloc, exactament on era la còpia; és útil per moure alguna cosa a un grup que heu obert.
- {{key:Mod+D}} ({{key:Shift+D}} a l'estil Modeler) duplica: es fa una còpia que es mou amb el punter de seguida; feu clic per deixar-la, escriviu una distància, o premeu {{key:Esc}} per acabar-la. Tot seguit, escriviu `3x` per tenir més còpies seguides.

Un grup enganxat esdevé un grup nou. Un component enganxat és una altra col·locació del mateix component, de manera que editar-ne un encara canvia tots. Les còpies també s'enganxen en una altra pestanya de ModelCraft en aquest navegador (hi entren com a definicions noves).

## Una fila de còpies

Just després d'una còpia, mentre {{ui:Mou}} sigui encara l'eina:

- Escriviu `3x` (o `*3`) i premeu {{key:Enter}} per tenir tres còpies seguides, cadascuna a la mateixa distància que la primera. Obteniu tres còpies noves a més de l'original.
- Escriviu `/3` i premeu {{key:Enter}} per dividir: tres còpies repartides de manera uniforme entre l'original i on heu col·locat la primera còpia, l'última a aquell punt. Feu-ho servir per omplir un tram: col·loqueu una còpia a l'extrem llunyà i després dividiu.

Podeu escriure un altre nombre tot seguit: `5x` substitueix la fila `3x`. El consell us ho recorda: "Copiat. Escriviu 3x per a més còpies seguides, o /3 per dividir la distància."

### Exemple: columnes cada 6 metres

1. Feu una columna i convertiu-la en component ({{key:G}}), de manera que, més endavant, totes les còpies canviïn juntes.
2. Premeu {{key:M}}, manteniu premut {{key:Ctrl}} i feu clic a la cantonada de la base de la columna.
3. Mogueu-vos al llarg de l'eix vermell i escriviu `6m`, i després {{key:Enter}}.
4. Escriviu `4x` i {{key:Enter}}. Teniu cinc columnes, separades 6 m.

## Coses a tenir en compte

- Premeu {{key:Esc}} abans del segon clic per cancel·lar; tot torna al seu lloc.
- {{ui:Mou}} funciona dins del grup que editeu. Per moure un grup sencer, tanqueu-lo primer i seleccioneu-lo des de fora.
- Amb **{{ui:Col·lisió}}** activat (a baix a la dreta, i a [configuració de ModelCraft](topic:settings#solids-stop-where-they-touch)), un moviment s'atura on la selecció toca un altre sòlid en lloc de travessar-lo. Feu clic a {{ui:Col·lisió}} per desactivar-ho en un moviment que ha de travessar-lo.
- Per posar una còpia dins d'un altre grup: copieu-la, obriu l'altre grup i enganxeu-la ({{key:Mod+Shift+V}} la deixa al mateix lloc).
