---
title: Nodos: construír un modelo cableando
summary: Cable números en puntos, puntos en curvas e curvas en superficies. Cambie un número e todo o que depende del reconstrúese. Cada nodo é tamén unha liña de CraftScript, e o grafo gárdase no ficheiro.
keywords: nodos, editor de nodos, programación visual, paramétrico, grafo, cables, portos, forma libre, freeform, nurbs, loft, extrusión, revolución, círculo, curva, superficie, serie, rango, aleatorio, lista, script, craftscript, grasshopper
from: 9c8e254f
---

O editor **Nodos** constrúe xeometría unindo caixas: cada caixa (un nodo) fai un pequeno traballo: crear un número, un punto, un círculo, un loft. Conecta o resultado dun ao punto de entrada do seguinte, e o modelo segue os cambios cando muda un número ao principio.

Ábrao desde o panel da dereita: {{ui:Nodes}} › {{ui:Nodes…}}. Un ficheiro que xa teña un grafo ábreo por si mesmo. É unha xanela sobre a vista 3D: arrastre a súa barra de título para mover, arrastre a esquina para cambiar o tamaño.

## Cablear

1. Escolla un nodo da lista da esquerda (escriba na caixa de busca para reducir; <kbd>Enter</kbd> engade a primeira coincidencia). Aparece no centro do lenzo.
2. Arrastre desde un punto redondo de **saída** á dereita dun nodo ata un punto redondo de **entrada** á esquerda doutro. O punto vólvese verde cando encaixa e vermello cando non; sitúe o punteiro sobre el para ver o motivo.
3. Unha entrada sen nada conectado mostra unha caixa para un valor escrito. Escriba un número e prema <kbd>Tab</kbd>: o resultado reconstrúese.
4. O pequeno círculo na barra de título dun nodo é o seu **ollo**. Un nodo co ollo activado debúxase na vista 3D: como liñas para as curvas, sombreado para as superficies, e puntos para os puntos.

Arrastre un nodo pola súa barra de título. Arrastre o fondo para desprazar, e xire a roda para facer zoom. <kbd>Delete</kbd> elimina o nodo seleccionado. {{ui:Tidy}} ordena os nodos en columnas, {{ui:Fit}} trae todos á vista, e {{ui:Undo}} e {{ui:Redo}} percorren as súas edicións.

## Tipos e unidades

Os portos teñen un tipo: número, sí/non, punto, vector, curva, superficie, malla, sólido, ou «xeometría» para calquera deles. Un punto pode alimentar unha entrada de vector e viceversa. Os números levan unidade: unha **lonxitude** está en milímetros e un **ángulo** en graos. Unha lonxitude non pode alimentar un ángulo, e unha lonxitude por unha lonxitude (unha superficie) é rexeitada, así que un cable mal feito detense no momento de facelo.

Un punto cadrado é unha **lista**. Cando unha lista chega a unha entrada de valor único, o nodo execútase unha vez por cada elemento e o seu resultado convértese en lista. A lista máis curta repite o seu último elemento. Por exemplo, unha **Serie** de alturas conectada a **Mover** fai unha pila de copias.

## Sólidos e booleanas como nodos

O grupo **Sólidos** fai corpos pechados coas mesmas superficies exactas do panel Superficies: **Sólido caixa**, **Sólido cilindro** e **Sólido esfera** (tamaños en mm), **Unir**, **Restar** e **Intersectar** (o segundo sólido tómase do primeiro; a tolerancia é canto poden separarse os triángulos do motor de sólidos das superficies exactas), **Filete entre caras** (as caras polo seu número no sólido, 1 para a primeira; un raio e, se é maior que 0, un raio no extremo), **Volume do sólido** (mm³) e **Sólido a malla** (para ver ou hornear). Un sólido ten o seu propio tipo de porto: un punto ou un número non se poden conectar a unha entrada de sólido, e o punto queda vermello. Os nodos booleanos e de filete usan o motor de sólidos do propio programa, que se carga a primeira vez que se abre o editor.

## Erros

Un nodo que non pode facer o seu traballo di por que, baixo o seu nome, en vermello («O raio debe ser maior que cero.»), e os nodos seguintes esperan. A mesma mensaxe é un Problema no panel Problemas, así que pode atopala desde alí.

## Cada nodo é unha liña de script

Prema {{ui:Script}} para ver o grafo como CraftScript: unha liña por nodo, como `n3 = nd_circle(n2, n1, [0 0 1]);`. Edite o texto e prema {{ui:Make the graph from this script}} para devolvelo a grafo. As mesmas funcións `nd_` funcionan nun CraftScript en PartCraft, así que un grafo pode executarse, repetirse ou probarse alí. Os números aleatorios sempre levan unha **semente**, para que o mesmo grafo dea o mesmo resultado en todos os ordenadores.

## Gardado co ficheiro

O grafo gárdase no ficheiro do modelo. Os nodos crean as súas propias curvas, superficies e mallas: non cambian as caras do modelo ata que o pida.

## Converter no modelo

Active o ollo dun nodo que cree unha superficie ou unha malla, e logo prema {{ui:Bake to model}} na xanela Nodos. Cada superficie ou malla mostrada convértese nun grupo de caras do modelo, en metros, que pode editar como calquera outra. É un paso de desfacer. O grafo permanece, pero a copia xa non o segue: cambie un número e converta de novo para unha nova. Os puntos e as curvas non son sólidos, así que quedan fóra, e a mensaxe di cantos son.
