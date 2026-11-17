---
title: Modificadores nunha malla, un grupo ou un compoñente
summary: Escale, espelle, faga matrices, suavice, biselle, corte e dobre unha malla sen cambiala; repita ou escale un grupo ou compoñente coa mesma pila e faga permanente cando estea listo.
keywords: modificador, modificadores, pila, grupo, compoñente, escalar, fixar, editar orixe, non destrutivo, espellar, matriz, matriz radial, subdivisión, superficie de subdivisión, suavizar, biselar, solidificar, grosor, booleano, cortar, desprazar, ruído, soldar, diezmar, simplificar, rede, gaiola, deformación por curva, dobrar, envolver, aplicar
from: dd5ec1cb
---

Un **modificador** cambia o que mostra unha malla sen cambiar a propia malla. Espelle unha metade dunha peza e modele só esa metade; redondee unha caixa cunha superficie de subdivisión e siga editando a caixa. Os modificadores van nunha **pila** e actúan en orde, de arriba abaixo. O que se ve, se exporta, se imprime e se renderiza é a malla con todos os modificadores activos.

## Engadir un modificador

1. Seleccione unha malla. No espazo de traballo Modelo a súa sección **Modificadores** está en {{ui:Información da entidade}}; no espazo de traballo Malla, está no panel da dereita.
2. Escolla un en {{ui:Engadir un modificador…}}. Vai á parte inferior da pila.
3. Cambie os seus axustes baixo o nome. As lonxitudes admiten os mesmos valores que o cadro de valor, así que `600mm`, `2'6"` e `(6m)/4` funcionan.

Cada cambio é un paso de desfacer: {{key:Mod+Z}} o desfai.

## Os botóns de cada modificador

- A caixa activa ou desactiva o modificador.
- O botón de pantalla mostra ou oculta o modificador na vista (segue na pila).
- O botón de cámara mostra ou oculta o modificador nas imaxes e vídeos renderizados, así que un modificador pode ser só para renderizados (ou só para a vista).
- As frechas suben ou baixan o modificador pola pila. A orde importa: espellar e logo subdividir dá unha xuntura suave; subdividir e logo espellar non.
- {{ui:Aplicar}} fai da forma parte da malla: os modificadores por enriba deste e este mesmo aplícanse á propia malla e saen da pila. É un paso de desfacer.
- A cruz elimina o modificador.

## Os modificadores

| Modificador | Que fai |
| --- | --- |
| Escalar | Escala arredor da orixe do obxecto, cun factor para vermello, verde e azul. Tamén nun grupo ou compoñente. |
| Espellar | Engade unha copia espellada a través de vermello, verde ou azul pola orixe da malla, e une as metades onde se atopan. |
| Matriz | Copia en liña (un paso do seu propio tamaño multiplicado polos números que dea, máis un paso fixo), ao redor dun eixe, ou ao longo dunha curva do modelo. Un grupo ou compoñente segue a liña. |
| Superficie de subdivisión | Suaviza a malla por subdivisión de Catmull-Clark. Os bordos afiados quedan pregados. Os renderizados poden usar máis niveis que a vista. |
| Biselar | Redondea cada bordo máis agudo que o ángulo que dea. |
| Solidificar | Dá a unha superficie un grosor e pecha o bordo. |
| Booleano | Corta, une ou conserva a superposición con outro obxecto do modelo. Os dous deben ser sólidos pechados. |
| Desprazar | Move a superficie cara a dentro ou cara a fóra por ruído suave. A mesma semente dá sempre os mesmos bultos. |
| Soldar | Une vértices máis próximos que unha distancia. |
| Diezmar | Conserva unha parte dos triángulos, quitando os que menos cambian a forma. |
| Suavizar | Relaxa os vértices cara aos seus veciños. |
| Rede | Dobra a malla cunha gaiola: mova os puntos da gaiola e a malla segue. |
| Deformación por curva | Dobra a malla ao longo dunha curva do modelo, ao longo de vermello, verde ou azul. |
| Envolver | Move cada vértice ao punto máis próximo doutro obxecto. |

## Nun grupo ou compoñente

Un grupo ou compoñente tamén pode gardar unha receita, así que a pantalla dunha lámpada pode ser un **Escalar** e unha **Matriz** dunha pantalla, e cambiar un número cambia a lámpada.

1. Seleccione un grupo ou compoñente. En {{ui:Información da entidade}} a súa sección **Modificadores** lista a pila (baleira ao principio).
2. Escolla {{ui:Escalar}} ou {{ui:Matriz}} en {{ui:Engadir un modificador…}}. O grupo convértese nun compoñente que é **o orixinal, colocado pola pila**. O orixinal consérvase: edítelo e cada copia segue de inmediato.
3. Escalar toma un factor para vermello, verde e azul (`1, 1, 2` duplica a altura). Matriz toma o número de copias, un paso como fracción do tamaño do resultado ata agora, e un paso extra en lonxitudes.

A pila executa de arriba abaixo sobre os eixos propios do orixinal, arredor da súa orixe, así que a orde importa: unha Matriz de tres copias separadas 3 m e logo Escalar 2 en vermello pon as copias a 6 m; Escalar primeiro e logo a Matriz mantenas a 3 m. A caixa, as frechas e a cruz funcionan como nunha malla; os botóns de vista e cámara e Aplicar nun modificador non, porque unha pila nun grupo é unha soa cousa.

- {{ui:Editar orixe}} abre o orixinal no seu sitio. Os cambios aparecen en cada copia; ao pechalo volve ao punto onde estaba.
- {{ui:Fixar modificadores}} fai que o resultado sexa bordos e caras simples e quita a pila, nun paso de desfacer. As copias que se solapan seguen como xeometría separada: Fixar non é unha unión.
- As copias do compoñente comparten a receita; {{ui:Facer único}} sepárao (o orixinal segue compartido).
- A pila gárdase no ficheiro, vai con copiar e pegar e co desfacer, e Purgar sen uso conserva o orixinal. Un programa que non coñece os modificadores segue mostrando as copias.
- Ata Fixar, o resultado non se pode entrar, desagrupar, cambiar de tamaño nin estirar: reconstruiríase no seguinte cambio. Cada acción o indica.
- Os límites son 32 modificadores e 1.000 copias. Un compoñente pensado para estirar e unha pila non poden compartir definición por agora.

## Superficie de subdivisión

A subdivisión suaviza unha malla por Catmull-Clark: cada cara convértese en caras de catro lados, e cada nivel dá catro veces máis. Unha caixa con dous ou tres niveis xa se le como unha forma redondeada, e segue editando a caixa.

- **Niveis na vista** fixa canto de suave é.
- **Niveis nos renderizados** fixa canto de suaves son as imaxes e vídeos renderizados; os renderizados poden usar máis niveis que a vista.
- **Renderizados sobre a superficie suave real** pon os puntos dunha malla renderizada sobre a superficie límite á que tenden os niveis, así que mesmo dous niveis se renderizan tan suaves como moitos.
- **Pregados** mantén os bordos afiados: no espazo de traballo Malla, seleccione bordos e use {{ui:Pregar}} (1 mantén o afiado, 0,5 redondea un pouco, 0 é suave). Vexa [Editar unha malla](topic:mesh-edit).
- **Baixe o nivel da vista nunha malla grande:** cando os niveis pedidos darían máis caras das que este ordenador manexa ben na vista, a vista mostra un nivel máis baixo e di cal. {{ui:Aplicar}} usa sempre todos os niveis. O número de caras fíxao a clase do seu equipo en {{ui:Configuración}} › Renderizado › O seu equipo.
- Os bordos abertos conservan as súas esquinas e quedan na liña dos seus bordos.

## Dobrar cunha gaiola de rede

1. Engada un modificador {{ui:Rede}} e prema {{ui:Engadir unha gaiola de rede ao redor da malla}}. Aparece unha gaiola de 3 × 3 × 3 puntos ao redor da malla, debuxada como alambres.
2. Abra a gaiola no espazo de traballo Malla (faga dobre clic nela) e mova os seus puntos. A malla segue suavemente.

:::tip
Unha gaiola é unha malla coma calquera outra: ocúltea coa súa etiqueta cando remate.
:::

## Mallas grandes

As pilas pequenas calcúlanse de inmediato. Unha grande calcúlase en segundo plano en cada núcleo do ordenador: a vista segue mostrando o último resultado ata que o novo estea listo. Os booleanos cargan o modelador de sólidos a primeira vez; a vista indícao un momento.

## Que aínda non fan os modificadores

- Pesos por vértice (unha atenuación pintada na malla) para Desprazar, Suavizar e Envolver.
- Modificadores distintos de Escalar e da Matriz lineal en xeometría de empurrar e tirar (grupos e compoñentes): convértaa primeiro en malla ({{ui:Converter en malla}}). Espellar, unha Matriz circular ou en curva, Dobrar e Afinar en grupos chegarán máis tarde.
