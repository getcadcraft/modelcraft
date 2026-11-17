---
title: Debuxar caras con liñas, rectángulos, círculos e arcos
summary: Crear caras planas no chan ou noutras caras, dividilas con liñas, e debuxar círculos e polígonos co número de lados que queira.
keywords: debuxar, liña, rectángulo, círculo, polígono, desfasar, interior, marco, bordo, arco, curva, spline, suavizar, cable, traxectoria, abombamento, raio, curva, cara, planta, pegada, dividir, lados, segmentos, contorno, lapis
from: b6d7b7dd
---

Todo en ModelCraft comeza como unha **cara** plana: unha superficie pechada por arestas. Pode debuxar unha cara directamente con {{ui:Rectangle}}, {{ui:Circle}} ou {{ui:Polygon}}, ou trazar o contorno unha aresta de cada vez con {{ui:Line}}. As caras son o que [Empurrar/tirar](topic:push-pull) converte en sólidos.

## Debuxar un rectángulo

1. Prema {{key:R}}.
2. Prema o primeiro vértice: no chan, ou en calquera cara do modelo.
3. Mova o punteiro. O rectángulo queda no chan (ou na cara onde comezou), e a caixa de valores ({{ui:Dimensions}}) mostra o seu ancho e fondo. A suxestión di "Cadrado" cando os lados son iguais.

   Para debuxar noutro plano, sinale o plano: unha cara que pasa polo primeiro vértice pon o rectángulo nesa cara, e encaixar nun punto fóra do plano (un extremo, unha aresta ou o eixo azul) levanta o rectángulo a través dos dous vértices. Encaixe de novo nun punto do primeiro plano e volve quedar tombado. Para manter un plano, prema unha tecla de frecha: {{key:Up}} mantén o rectángulo nivelado (o plano azul), {{key:Right}} no plano vermello, {{key:Left}} no plano verde. Prema a mesma tecla de novo para desbloquear.
4. Prema o vértice oposto, ou escriba as dúas medidas separadas por unha coma e prema {{key:Enter}}: `4m,3m`, `4000,3000` nun modelo en milímetros, ou `12',10'6"` en pés e polgadas.

   Aparece unha cara con catro arestas ao seu redor.

As medidas escritas van na dirección á que apuntaba: se o punteiro está á esquerda do primeiro vértice cando escribe, o rectángulo crece cara á esquerda.

:::warning
A coma separa as dúas medidas, así que non pode ser o separador decimal. Escriba `2.5m,3m`, nunca `2,5m`.
:::

## Debuxar un círculo ou un polígono

1. Prema {{key:C}} para un círculo ou {{key:N}} para un polígono.
2. Para cambiar o número de lados, escríbao antes de facer clic: `12s` (ou só `12`) e {{key:Enter}}. Un círculo comeza con 24 lados e un polígono con 6. A suxestión mostra o número actual, e ModelCraft conserva o valor para o seguinte círculo ata que o cambie ou cambie de ferramenta.
3. Prema o centro, no chan ou nunha cara. Para centralo nunha cara, sinale o centro da cara ("Centro da cara") ou o punto medio dunha das súas arestas ("Punto medio") co punteiro xusto dentro desa cara: o círculo debuxase nesa cara, mesmo na beira estreita dunha caixa longa.
4. Prema para fixar o raio, ou escríbao ({{ui:Radius}} na caixa de valores) e prema {{key:Enter}}.

Un círculo é un polígono con moitos lados. Cando levanta un círculo con Empurrar/tirar, os seus lados suavízanse para que o cilindro se vexa como unha única superficie lisa.

## Debuxar un arco

1. Prema {{key:A}} ({{ui:Arc}}).
2. Prema onde comeza o arco e despois onde remata (ou escriba a lonxitude entre eles).
3. Mova o punteiro para abombar o arco cara a fóra, e prema. A suxestión di "Semicírculo" cando o abombamento é a metade da distancia entre os extremos. Ou escriba canto se separa o centro: `2` e {{key:Enter}}.

Para debuxar un arco ao redor dun punto, use {{ui:Arc center}}: prema o centro, despois onde comeza o arco (ou escriba o raio), e despois onde remata (ou escriba o ángulo en graos, como `90`). Encaixa en pasos de 15°.

Un arco comezado sobre unha cara debúxase nesa cara; en caso contrario queda no chan, ou érguese en vertical cando os seus dous extremos están a alturas diferentes. Un arco ten 12 segmentos; escriba `24s` mentres debuxa para ter máis. Os arcos pechan caras igual que as liñas: un arco que cruza a esquina dun rectángulo o divide.

## Debuxar unha curva suave

{{ui:Curve}} debuxa unha liña suave que pasa por cada punto que prema: un cable, o percorrido dun pasamán, un bordo de xardín. Pode separarse do chan: os puntos encaixan en vértices, arestas e caras en calquera lugar, e as teclas de frecha bloquean o vermello, o verde ou o azul igual que con {{ui:Line}}.

1. Prema {{ui:Curve}} no grupo {{ui:Draw}}.
2. Prema os puntos polos que pasa a curva. Escriba `<0,0,1>` e {{key:Enter}} para un punto 1 por enriba do último, `[x,y,z]` para un lugar exacto, ou unha lonxitude para un punto a esa distancia cara ao punteiro.
3. Prema {{key:Enter}} ou faga dobre clic para terminar. Prema de novo o primeiro punto para pechar a curva. {{key:Backspace}} retira o último punto.

A curva selecciónase como unha soa peza. Para cambiala, selecciónea e prema {{ui:Edit points}} en {{ui:Entity info}}: os seus puntos móstranse como cadrados. Prema un, e despois onde debe ir (ou escriba `<dx,dy,dz>`). {{key:Esc}} devolve un punto ao seu sitio e remata a edición. Unha curva plana pechada fai unha cara; unha curva que delimita unha cara xa non se pode editar.

## Desfasar: un bordo dentro ou fóra dunha cara

{{ui:Offset}} copia o contorno dunha cara a unha distancia fixada cara a dentro (ou cara a fóra), para un marco, un bordo, un peitoril ou o vidro dunha pantalla.

1. Prema {{key:F}} e prema a cara, ou seleccione primeiro a cara e despois prema {{key:F}}.
2. Mova o punteiro cara ao interior da cara para un contorno interior, ou cara a fóra para un exterior. O novo contorno segue o punteiro, e a suxestión indica a distancia.
3. Prema, ou escriba a distancia e prema {{key:Enter}}.

A cara divídese en dúas: a cara interior e un marco ao seu redor (ou un novo anel por fóra). Empurre ou tire de calquera das dúas de inmediato: para unha pantalla, debuxe a caixa, empurre ata o seu grosor, desfase a cara frontal 30 mm cara a dentro e empurre un pouco a cara interior para o vidro. Os buratos da cara tamén se desfasan, e un arco ou un círculo segue sendo unha única curva (máis pequena ou máis grande).

- **Dobre clic** nunha cara con {{ui:Offset}} para desfasala de novo coa última distancia.
- **Arestas:** seleccione unha cadea de arestas conectadas nun mesmo plano (por exemplo, as dúas liñas dunha L), prema {{key:F}}, mova ao lado que queira e escriba a distancia: debúxase unha copia paralela, con ingletes nas esquinas.
- Cando a distancia é maior do que a cara permite, ModelCraft indícao e non debuxa nada.

## Arcos, círculos e polígonos son curvas

Prema calquera segmento dun arco, dun círculo ou dun polígono e selecciónase a curva completa. {{ui:Entity info}} mostra entón o seu raio, os seus segmentos, o seu ángulo (arcos) e a súa lonxitude. Escriba un novo raio aí para cambiar o tamaño arredor do seu centro; as caras debuxadas no seu plano seguen o cambio. Cando a cara dunha curva xa foi empurrada ou tirada, o seu raio queda como está.

## Debuxar con liñas

1. Prema {{key:L}}.
2. Prema onde comeza a liña.
3. Prema onde remata, ou escriba unha lonxitude e prema {{key:Enter}}. A lonxitude escrita vai na dirección que indica o punteiro.
4. Siga premendo. Cada clic comeza a seguinte liña desde o final da anterior.
5. Peche o contorno premendo de novo o primeiro punto. Cando as liñas pechan un bucle plano, énchese cunha cara e a ferramenta deixa de encadear. Prema {{key:Esc}} para parar en calquera momento.

As liñas seguen as direccións vermella, verde e azul cando se achega a elas; a liña toma esa cor e a suxestión di "No eixo vermello". Consulte [Inferencia e encaixe](topic:inference) para ver como bloquear unha dirección e encaixar en puntos.

### Onde vai unha liña cando non toca nada

- Unha liña que comeza sobre unha cara queda no plano desa cara.
- Unha liña que comeza no chan, ou no espazo baleiro, queda nivelada co seu punto de inicio. Se mira o modelo de lado, vai no plano vertical que lle queda de cara.
- Para debuxar unha liña ata un lugar exacto, escriba un punto: `[x,y,z]` para un punto do modelo, ou `<dx,dy,dz>` para un desprazamento desde o inicio. Consulte [Escribir medidas exactas](topic:value-box).

## Dividir unha cara

Debuxe unha liña atravesando unha cara, dunha aresta a outra (ou de aresta a aresta a través doutras liñas). A cara divídese en dúas caras. Cada unha conserva o seu lado e a súa cor. O mesmo ocorre cun rectángulo ou círculo debuxado sobre unha cara: a forma convértese nunha cara propia dentro da maior, que agora ten un burato.

Así se distribúen as habitacións nunha laxe de piso, unha xanela nun muro ou un chanzo nunha escaleira: debuxe o contorno sobre a cara e logo empurre ou tire da nova cara.

## Caras que miran á dirección contraria

Cada cara ten unha fronte e un dorso. O dorso vese azul-gris. As caras debuxadas no chan miran cara arriba; as caras debuxadas sobre outra cara miran igual que esta.

Se unha cara mostra o seu dorso onde espera a fronte, seleccióneaa e prema {{ui:Reverse face}} en {{ui:Entity info}}.

## Que ve mentres debuxa

- Un marcador de cor onde o punteiro encaixa, e o seu nome na suxestión abaixo á esquerda.
- Unha vista previa da liña ou da forma.
- A medida en directo na caixa de valores. Pode escribir sobre ela en calquera momento.

## Se a forma non está onde esperaba

- Nunha pantalla táctil, consulte [Resolución de problemas](topic:troubleshooting#a-shape-starts-in-the-wrong-place-on-a-touch-screen).
- Se unha liña encaixou en algo moi atrás, xire un pouco: os puntos ocultos detrás dunha cara nunca encaixan, pero os puntos do seu bordo sí.
- Prema {{key:Mod+Z}} para desfacer a última forma; un paso de desfacer elimina unha liña ou unha forma.
