---
title: Animar calquera propiedade, dar forma con curvas e mesturar clips
summary: O espazo de traballo Animar crea chaves para o lugar, o xiro e o tamaño dun obxecto, o brillo, a abertura e a cor dunha lámpada, a lente e as chaves de forma dunha malla; as armaduras dobran unha malla con ósos e pesos pintados; a CI e as restricións fan que os ósos e os obxectos alcancen, miren, copien, se manteñan dentro de límites, colguen ou sigan a outros; os corpos ríxidos caen, apílanse e chócanse e gárdanse como chaves; os controladores fixan un valor a partir doutros; a vista Curvas da liña de tempo dá forma a cada cambio con manexadores Bézier e ciclos, e a vista Clips garda as animacións como accións que se volven colocar e mesturar.
keywords: física, corpo ríxido, corpos ríxidos, simulación, simular, soltar, caer, gravidade, colidir, colisión, apilar, rebote, fricción, calcular, calculado, ik, cinemática inversa, restrición, restricións, mirar a, seguir, copiar transformacións, copiar posición, copiar rotación, limitar rotación, límites, fillo de, pai, seguir trazado, trazado, polo, fabrik, cadea, armadura, armaduras, esqueleto, pel, pesos, pintura de pesos, grupos de vértices, pesos automáticos, pose, modo pose, cuaternión dual, interpolación lineal, chaves de forma, chave de forma, morfo, morfos, obxectivos de morfo, formas de mestura, facial, expresión, controlador, controladores, expresións, espazo de traballo animar, animar, animación, fotograma clave, chave, chaves, propiedade, propiedades, transformación, posición, rotación, escala, lámpada, luz, brillo, cor, lente, campo de visión, fov, editor de gráficos, curvas, curva, bezier, manexadores, tanxente, interpolación, ciclo, ciclos, repetir, bucle, vaivén, desfase, folla de exposición, seleccionar chaves, selección por caixa, copiar chaves, pegar chaves, estirar chaves, escalar chaves, clips, accións, nla, mesturar, mestura, influencia, gardar
from: 16d8e12f
---

A [liña de tempo](topic:animation) move a cámara e os grupos e compoñentes completos. O espazo de traballo **Animar** crea chaves para máis que iso, e a liña de tempo recibe dúas vistas máis para dar forma e reutilizar o que creou.

## Abrir

Escolla {{ui:Animar}} na lista de espazos de traballo da barra de ferramentas. A liña de tempo ábrese baixo a vista, a barra de ferramentas mostra os grupos de Animar ({{ui:Chaves}}, {{ui:Reproducir}}, {{ui:Liña de tempo}}) e o panel da dereita lista o que pode crear como chave no cabezal de reprodución.

## Crear unha chave para unha propiedade

O panel lista, no cabezal de reprodución:

- **Obxecto elixido**: o seu {{ui:Lugar}}, {{ui:Xiro (°)}} e {{ui:Tamaño}}, tres números cada un. Escriba un número e prema {{key:Enter}}: crease unha chave no cabezal e o obxecto muévese ata alí. O rombo ao lado dunha fila crea unha chave co valor actual; un rombo cheo indica que xa hai unha chave no cabezal.
- **Lámpadas**: o {{ui:Brillo (lm)}} de cada lámpada, a {{ui:Abertura (°)}} (lámpadas de foco) e a {{ui:Cor}}.
- **Cámara**: o {{ui:Ángulo da lente (°)}}, para un zoom mentres se move a cámara.

{{ui:Chave de transformación}} (ou {{key:I}}) crea unha chave para o lugar, o xiro e o tamaño de todos os grupos ou compoñentes elixidos ao mesmo tempo; {{ui:Cámara clave}} (ou {{key:K}}) crea unha chave para a cámara. Con {{ui:Chave automática}} activada, un grupo cuxo lugar, xiro e tamaño teñen chaves deste xeito recibe unha chave nova cada vez que o move.

Os xiros son tres ángulos, en torno a X, despois Y e despois Z. Un xiro con chave por riba de 180° segue na mesma dirección (190° queda en 190°, non en −170°), así que unha roda pode dar varias voltas.

:::tip
Un grupo con chave creada con {{ui:Chave seleccionada}} na liña de tempo ten chaves de posición completa. O botón de curva da súa fila convérteas en curvas de lugar, xiro e tamaño (a mesma posición en cada chave) para poder darlles forma en {{ui:Curvas}}.
:::

## Chaves de forma (morfos)

Unha **chave de forma** é outra forma da mesma [malla](topic:meshes): un sorriso nunha cara, o bulto dunha porta, unha folla dobrada. O seu control deslizante mestura desde a malla tal como está (0) ata esa forma (1); varias chaves suman.

1. Escolla unha malla no espazo de traballo Animar: o panel mostra as súas {{ui:Chaves de forma}}.
2. Prema {{ui:Engadir chave de forma}}. ModelCraft vai ao [espazo de traballo de Malla](topic:mesh-edit) coa nova chave en edición: mova puntos, extruya, esculpa; cambie a malla na forma que queira.
3. Volva a {{ui:Animar}} e prema {{ui:Feito}}. A malla volve ao que era, e a chave conserva o seu cambio.

Despois arrastre o control deslizante da chave (ou escriba un valor) para mesturala. O rombo crea o valor no cabezal, así que unha chave pode crecer e esvaecerse co tempo; cando ten unha pista, un valor novo créase no cabezal. O lapis volve editar a forma da chave (a malla amósaa completa ata {{ui:Feito}}; {{ui:Cancelar}} deixa a chave como estaba), o ollo desactiva a chave e o lixo elimínaa.

Un vértice que engada mentres edita unha chave pertence á propia malla: queda onde o puxo, en todas as formas.

:::note
As chaves de forma mudan a malla antes dos seus [modificadores](topic:modifiers): un modificador de subdivisión suaviza a forma mesturada. As imaxes e os vídeos renderizados mostran as chaves en cada imaxe.
:::

## Armaduras: ósos que dobran unha malla

Unha **armadura** é un conxunto de ósos dentro dunha [malla](topic:meshes). Poße os ósos e a malla séguelos, cada punto segundo indiquen os seus **pesos**.

1. Escolla a malla no espazo de traballo Animar e prema {{ui:Engadir unha armadura}} no panel (ou {{ui:Engadir óso}} no grupo {{ui:Esqueleto}}): o primeiro óso sobe polo centro da malla desde o seu pé.
2. Con un óso elixido, {{ui:Engadir un óso fillo}} engade o seguinte desde a súa punta. Estableza no panel o {{ui:Cabeza}}, a {{ui:Punta}}, a {{ui:Rotación (°)}} e de que {{ui:Depende de}} cada óso; un óso que depende doutro móvese con el. Desmarque {{ui:Move a malla}} para un óso que só dirixe a outros.
3. Prema {{ui:Pesos automáticos}}: cada óso toma os puntos máis próximos a el, e esa presa estendese suavemente pola malla, así que os puntos entre dous ósos compártenos. {{ui:Só os ósos máis próximos}} é unha división máis rápida e máis dura.

**Pousar** os ósos con {{ui:Pousar}} ({{key:P}}): prema un óso para elixilo, arrastre para xiralo en torno ao eixe da vista, e {{key:Shift}}-arrastre para movelo. Ou escriba o seu {{ui:Lugar}}, {{ui:Xiro (°)}} e {{ui:Tamaño}} en {{ui:Pousar}}; os xiros son nos eixos propios do óso, desde onde descansa. Os rombos e {{ui:Crear chave para toda a pose}} crean unha chave da pose no cabezal; cando un óso ten chaves, movelo crea unha chave alí. {{ui:Restablecer este óso}} e {{ui:Restablecer a pose}} devolven os ósos ao reposo.

**Pintar pesos** ({{key:W}}) para o óso elixido: a malla amósase en reposo, cada cara coloreada segundo canto a sostén ese óso: vermello todo, azul nada. Pinte para engadir presa ({{key:Mod}} a quita, {{key:Shift}} suaviza); {{ui:Tamaño (px)}} e {{ui:Intensidade}} fixan o pincel. Con {{ui:Manter a suma dos pesos de cada punto en 1}} activada, dar máis peso a un óso quita o mesmo aos outros. Cada pincelada é un paso de desfacer do modelo.

{{ui:Pel}} escolle como se move un punto entre ósos: {{ui:Lineal (rápido)}} mestura os movementos dos ósos e aperta un pouco unha articulación dobrada; {{ui:Cuaternión dual (conserva o volume nas articulacións)}} xira o punto en torno á articulación, así que un cóbado ou un xeonllo conservan o grosor ({{ui:Tamaño}} dun óso non estira entón a pel).

:::note
As chaves de forma veñen primeiro, despois a armadura e despois os [modificadores](topic:modifiers). A vista, as imaxes e os vídeos amosan todos a malla posta en pose; os pesos da malla gárdanse con ela, e os ósos e a súa pose coa animación.
:::

## CI e restricións

Unha **restrición** move un óso ou un obxecto despois das súas chaves, segundo unha regra. Escolla o obxecto (ou, nunha armadura, o óso) e engada unha en {{ui:Restricións de…}}; varias funcionan na orde listada (as frechas cambianlla), e cada unha ten {{ui:Cantidade}} (de 0 a 1, con chave co seu rombo como calquera propiedade) e un interruptor de activación.

| Restrición | Para | Que fai |
|---|---|---|
| {{ui:Alcance (IK)}} | Ósos | O óso e os ósos dos que depende ({{ui:Ósos da cadea}}) dóbranse para que a súa punta alcance o destino. Con dous ósos e un {{ui:Polo (a curvatura apunta cara a el)}}, o cóbado ou o xeonllo apunta cara ao polo; as cadeas máis longas dóblanse suavemente. Fóra de alcance, a cadea apunta recta ao destino. |
| {{ui:Mirar a}} | Ambos | Xira para que o {{ui:Eixe que apunta}} mire ao destino, mantendo o {{ui:Eixe mantido cara arriba}} o máis cerca posible de arriba. |
| {{ui:Copiar transformacións}} | Ambos | Toma o lugar, o xiro ou o tamaño do destino: os que estean marcados. |
| {{ui:Límites}} | Ambos | Mantén o seu propio lugar, xiro (graos) ou tamaño entre un {{ui:mín}} e un {{ui:máx}} por eixe; deixe un par baleiro para deixar ese eixe libre. |
| {{ui:Fillo de}} | Ambos | Move con el destino como se dependese del, desde onde estaban ambos cando elixiu o destino. |
| {{ui:Seguir trazado}} | Obxectos | Sitúase sobre un [obxecto de curva](topic:curves) en {{ui:Ao longo da curva}} (0 o seu inicio, 1 o seu final; cree unha chave para que se desprace) e, con {{ui:Xirar ao longo da curva}}, mira na súa dirección. |

Un destino é outro obxecto do grupo aberto, un óso da mesma armadura, ou un {{ui:Un punto}} que escriba (o punto dun obxecto está nas coordenadas do modelo, e o dun óso nas da súa malla). Para unha perna en CI, sitúe o destino onde debe estar o pé e cree unha chave do destino, ou cree unha chave de {{ui:Cantidade}} para pasar a perna entre as chaves e a CI.

:::tip
Un obxecto que mira a outro que segue un trazado véo no trazado: ModelCraft calcula primeiro os destinos, sexa cal sexa a orde dos obxectos.
:::

## Física: soltar, apilar e colisionar

Deixe caer os obxectos e que choquen entre si, e despois conserve o resultado como chaves.

1. Escolla un grupo, compoñente ou malla e estableza o seu {{ui:Corpo ríxido}} en {{ui:Física}}: {{ui:Cae e colide}} (move) ou {{ui:Queda quieto, estorba}} (unha mesa, un muro, unha rampa). Dálle ao que cae a súa {{ui:Forma}}: {{ui:Caixa (os seus límites)}} ou {{ui:Esfera (redonda nos seus límites)}}, a súa {{ui:Masa (kg)}}, {{ui:Fricción}} e {{ui:Rebote}} (0 golpea sen rebote, 1 rebota ata a mesma altura).
2. En {{ui:Todo o modelo}}, estableza {{ui:Desde (s)}} e {{ui:Ata (s)}}, a {{ui:Gravidade (m/s², cara abaixo)}} e se hai {{ui:Un chan onde aterrar}} (e a súa altura).
3. Prema {{ui:Calcular física}} (no panel ou no grupo {{ui:Física}}). Cada obxecto que cae recibe unha chave de lugar, xiro e tamaño en cada imaxe entre os dous tempos; reprodúzaa como calquera animación.

Calcular de novo substitúe esas chaves; {{ui:Eliminar chaves calculadas}} quítaas. Os obxectos comezan en repouso, onde os sitúan as súas chaves, curvas e restricións en {{ui:Desde (s)}} (un movemento con chave anterior a ese punto non continúa na caída). Máis {{ui:Pasos por fotograma}} mantén máis estables as pilas altas; a barra de estado indica cando algo segue movéndose ao final.

:::note
As formas son caixas e esferas en torno aos límites de cada obxecto; unha caixa toca cos seus cantos, puntos medios das arestas e puntos medios das caras, así que as caixas apílanse e volcan como cabería esperar. Non se constrúen tecido, fluídos, unións entre obxectos nin formas exactas.
:::

## Controladores

Un **controlador** fixa unha chave de forma a partir doutras cousas en lugar de a man: abra o controlador dunha chave (o botón da calculadora), escriba unha **expresión** e dea a cada nome que lle corresponde o que lee ({{ui:Le}}): o tempo en segundos, a imaxe, o lugar, o xiro ou o tamaño dunha posición en X, Y ou Z, o brillo dunha lámpada, ou outra chave de forma. Por exemplo, con `v` lendo o xiro dunha porta en torno a Z, `clamp(v / 90, 0, 1)` abre unha forma á medida que se abre a porta.

As expresións usan números, os nomes, `+ - * / % ^` e paréntese, e as funcións `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg` con `pi` e `e`. Un erro sinálase e non cambia nada. O control deslizante dunha chave controlada amosa o valor do controlador; o controlador gaña á pista da chave ata que o quite.

## Elixir e cambiar chaves (vista Chaves)

{{ui:Chaves}} amosa unha fila por pista: a cámara, cada grupo que se move e cada propiedade («Lámpada 2 · Brillo (lm)»; as chaves de propiedade son redondas).

- Prema unha chave para elixila; {{key:Shift}}-clic ou {{key:Mod}}-clic engade ou quita chaves da selección. {{key:Shift}}-arrastre sobre as filas debuxa unha caixa que engade todas as chaves dentro dela.
- Arrastre unha chave elixida para movelas todas; {{key:Left}} / {{key:Right}} movénas un fotograma ({{key:Shift}}: dez).
- {{key:Mod+C}} copia as chaves elixidas, {{key:Mod+V}} pégaas desde o cabezal sobre as mesmas pistas (outra lapela de ModelCraft tamén as pode pegar).
- {{ui:Estirar}} separa as chaves elixidas desde o cabezal segundo o número que hai ao lado (2 = o dobre de separación; 0,5 achéganas).
- A lista de suavidade fixa como se move cada chave elixida.

## Dar forma ás curvas (vista Curvas)

{{ui:Curvas}} é un gráfico de cada número ao longo do tempo: tempo en horizontal, valor en vertical. Marque as curvas que quere amosar na lista da esquerda (X, Y e Z son vermello, verde e azul).

- Prema unha chave (un cadrado) para elixila, {{key:Shift}}-clic para mais, ou arrastre unha caixa. Arrastre unha chave elixida para cambiar o seu tempo e valor; con varias elixidas, arrastrar móveas ao longo do tempo.
- Unha chave elixida amosa os seus dous **manexadores**. Arrastre un para dar forma á curva a ese lado. {{ui:Manexadores}} indica como se comportan: {{ui:Automático}} (unha curva suave polas chaves próximas), {{ui:Apuntando á seguinte chave}}, {{ui:Aliñado}} (os dous quedan nunha liña recta, así que a curva non ten esquina) ou {{ui:Libre}}.
- {{ui:Desde as chaves elixidas}} fixa como cada chave elixida pasa á seguinte: {{ui:Curva (manexadores)}}, {{ui:Suavizar}}, {{ui:Constante}}, {{ui:Lenta ao entrar e ao saír}} ou {{ui:Manter}}.
- {{ui:Antes}} e {{ui:Despois}} fixan o que fai unha curva fóra das súas chaves: {{ui:Manter}} (queda no primeiro ou no último valor), {{ui:Repetir}}, {{ui:De lado a lado}}, ou {{ui:Repetir e continuar}} (cada repetición comeza onde acabou a anterior: unha roda segue rodando, un camiñante segue camiñando).
- A roda fai zoom ({{key:Mod}}: só valores; {{key:Shift}}: só tempo); arrastre co botón central ou con {{key:Alt}} para desprazar; {{ui:Amosar todo}} ou {{key:Home}} axusta todas as curvas amosadas. Prema un espazo baleiro para levar o cabezal ata alí. {{key:Delete}} elimina as chaves elixidas.

Os manexadores non se cruzan no tempo, así que unha curva nunca volve atrás.

## Reutilizar animacións (vista Clips)

Un **clip** reproduce unha animación gardada (unha **acción**) na liña de tempo. Os clips mestúranse en orde, as filas inferiores por riba das superiores; as pistas propias da liña de tempo van por riba de todos os clips.

1. Cree chaves nos grupos e lámpadas como de costume, e logo prema {{ui:Facer un clip}} en {{ui:Clips}} e dea un nome á acción. As pistas pasan a ser a acción, e un clip reprodúcea onde estaban (a cámara queda na liña de tempo).
2. Para usala de novo, elixa a acción e prema {{ui:Engadir clip}}: un clip novo comeza no cabezal.
3. Arrastre un clip pola súa fila para movelo; prema nel para fixar {{ui:Inicio (s)}}, {{ui:Velocidade}} (2 = o dobre de rápido), {{ui:Repeticións}}, {{ui:Cantidade}} (de 0 a 1), {{ui:Mestura}} ({{ui:Substituír}}, ou {{ui:Engadir enriba}} dos clips anteriores), {{ui:Fóra do clip}} (nada, manter o seu final, ou manter os dous extremos) e {{ui:Silenciar}}. As frechas cambian a orde; o lixo elimina o clip (unha acción que xa non usa ningún clip vai con el).

Un clip cunha {{ui:Cantidade}} inferior á total mestúrase co que hai debaixo: o clip anterior, ou a lámpada ou posición tal como están sen a animación.

## Que se reproduce onde

| Que | Na vista | Nun vídeo renderizado |
|---|---|---|
| Chaves da cámara, ángulo da lente con chaves da cámara | Si | Si |
| Lugar, xiro e tamaño (chaves, curvas, clips) | Si | Si |
| Brillo, abertura e cor das lámpadas | Si | Aínda non: o vídeo usa as lámpadas tal como están ao comezar (ver [o que aínda non está construído](topic:not-built-yet)) |
| Ángulo da lente sen chaves da cámara | Si | Aínda non: cree tamén unha chave da cámara |
| Chaves de forma e controladores | Si | Si |
| Armaduras (mallas en pose) | Si | Si |
| CI e restricións | Si | Si |
| Física calculada (chaves) | Si | Si |

Todo se garda no ficheiro `.modelcraft` xunto co resto da animación, e o {{ui:Desfacer}} e o {{ui:Refacer}} da liña de tempo desfán calquera deses cambios.
