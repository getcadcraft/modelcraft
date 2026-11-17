---
title: Escribir medidas exactas na caixa de valores
summary: Todas as formas de escribir lonxitudes, tamaños, puntos, desfases, ángulos, lados e copias, e como se len as unidades e os números soltos.
keywords: caixa de valores, caixa de medidas, vcb, escribir, exacto, cota, lonxitude, unidades, pés, polgadas, métrico, milímetros, coordenadas, desfase, matriz, lados, ángulo, coma decimal
from: 0148dc3d
---

A caixa de valores está na barra de estado, na parte inferior, cunha etiqueta que cambia coa ferramenta. Mentres traballa, amosa o tamaño en vivo; en calquera momento pode escribir un exacto.

## Como escribir

1. Comece a acción cun clic (a primeira esquina, a cara, o punto desde onde se move).
2. Escriba. Non fai falta premer a caixa de valores: un díxito ou un dos caracteres `. , - ' " [ < * /` envía o que escribe alí.
3. Prema {{key:Enter}}.

Prema {{key:Esc}} na caixa de valores para borrala e volver á vista. Nunha pantalla táctil, toque a caixa de valores para abrir o teclado.

Se ModelCraft non pode ler o que escribiu, a barra de estado di: "Escriba unha lonxitude, como 3m, 10'6" ou 4m,3m." Se a ferramenta non o pode usar, di "Non funcionou: …" co motivo.

## Lonxitudes

| Escriba | Significa |
|---|---|
| `3m` `320cm` `3200mm` | Metros, centímetros, milímetros |
| `10'` `10ft` `10 feet` | Pés |
| `6"` `6in` `6 inches` | Polgadas |
| `10'6"` `10' 6"` `10'-6 1/2"` | Pés e polgadas, con fracción |
| `6 1/2"` `6-1/2"` `3/4"` | Polgadas con fracción |
| `1.5ft` `.5m` | Decimais con unidade |
| `120` | Un número solto, na unidade do modelo |

**Un número solto usa a unidade do modelo**, como se ve no selector da parte inferior dereita: polgadas nun modelo en pés e polgadas (así `120` son 10 pés), milímetros nun modelo en milímetros, e así por diante. Escribir unha unidade sempre gaña, sexa cal sexa a unidade do modelo. As comiñas curvas e os signos de prima (’ ” ′ ″) tamén se len como pés e polgadas.

:::warning
Use sempre un **punto** para os decimais: `2.5m`. A coma separa dous valores, así que `2,5` significa 2 e 5 (dous valores), sexan cales sexan os seus axustes de idioma.
:::

## Cálculos

Calquera lonxitude pode ser un cálculo: sume `+`, reste `-`, multiplique `*`, divida `/`, e use parénteses. Non fai falta calculadora.

| Escriba | Significa |
|---|---|
| `2.5/3` | Un terzo de 2.5 (na unidade do modelo) |
| `12'6"+3/4"` | 12' 6 3/4" |
| `(24'-0")/3` | 8' |
| `2*450mm` | 900 mm |
| `4+7/16` | 4 7/16" nun modelo en pés e polgadas |
| `3m-25cm` | 2.75 m |

Un número solto está na unidade do modelo cando é unha lonxitude (`2.5/3` nun modelo en metros é 0.833 m), e é un factor simple cando multiplica ou divide unha (`2*450mm`). Os ángulos e os factores admiten cálculos tamén: `90/2` é 45°. Dúas lonxitudes multiplicadas dan unha superficie, non unha lonxitude, así que `2m*3m` se rexeita.

Se ModelCraft non o pode calcular, a barra de estado di que está mal e onde, por exemplo "División por cero (carácter 4)." Un paréntese tamén inicia a caixa de valores, así que pode empezar con `(`.

Estes conservan o seu propio significado: `/3`, `3x` e `*3` despois dunha copia, `24s` para lados, e `/3` cunha aresta seleccionada (que [divide a aresta](topic:divide)).

## Por ferramenta

| Ferramenta | Etiqueta | Escriba |
|---|---|---|
| {{ui:Liña}} | {{ui:Lonxitude}} | Unha lonxitude (cara ao punteiro), ou un punto ou desfase (abaixo) |
| {{ui:Rectángulo}} | {{ui:Cotas}} | Dúas lonxitudes: `4m,3m`, `12',10'`. Un punto e coma tamén vale: `4m;3m` |
| {{ui:Círculo}}, {{ui:Polígono}} | {{ui:Lados}}, despois {{ui:Raio}} | Antes do primeiro clic, o número de lados: `12s` ou `12` (3 a 999). Despois, o raio |
| {{ui:Empurrar/tirar}} | {{ui:Distancia}} | Unha lonxitude. Unha negativa vai no outro sentido |
| {{ui:Mover}} | {{ui:Distancia}} | Unha lonxitude (cara ao punteiro), ou un punto ou desfase. Despois dunha copia: `3x`, `*3`, `/3` |
| {{ui:Xirar}} | {{ui:Ángulo}} | Graos: `90`, `-45`, `22.5` |
| {{ui:Escalar}} | {{ui:Escalar}} | Un factor superior a 0: `2`, `0.5`, `1.25` |
| {{ui:Cinta métrica}} | {{ui:Desfasar}} ou {{ui:Lonxitude}} | Unha lonxitude |
| {{ui:Dividir}} | {{ui:Partes}} | Cantas partes iguais: `5`, `5s` ou `/5` (2 a 1000). Ver [Dividir unha aresta ou curva en partes iguais](topic:divide) |
| {{ui:Cota}} | {{ui:Desfasar}}, despois {{ui:Lonxitude}} | Onde vai a liña de cota; xusto despois de colocala, unha nova lonxitude redimensiona o modelo |
| {{ui:Seleccionar}} | {{ui:Valor}} | Con unha cota ou aresta seleccionada, unha nova lonxitude redimensiona o modelo. Ver [Cota e redimensionamento](topic:dimensions) |

## Puntos e desfases

Para {{ui:Liña}} e {{ui:Mover}}, despois do primeiro clic:

- `[x,y,z]` vai a ese punto exacto do modelo (nos eixos propios do grupo cando edita dentro dun grupo). Exemplo: `[0,0,3m]` está a 3 m xusto enriba da orixe.
- `<dx,dy,dz>` vai a esa distancia desde o primeiro punto ao longo dos eixos vermello, verde e azul. Exemplo: `<0,0,10'>` está a 10 pés xusto arriba.

Cada un dos tres valores pode ter a súa propia unidade: `<12',0,6">`.

## Copias despois de mover

Xusto despois dunha copia con {{ui:Mover}}:

| Escriba | Fai |
|---|---|
| `3x` ou `*3` | 3 copias seguidas á mesma separación |
| `/3` | 3 copias repartidas uniformemente desde o orixinal ata a primeira copia |

Ata 500 copias. Ver [Mover, copiar e crear matrices](topic:move-copy#a-row-of-copies).

## As lonxitudes escritas precisan unha dirección

Unha soa lonxitude escrita vai no sentido que sinala o punteiro desde o primeiro clic. Se escribe xusto despois de premer, antes de moverse, aínda non hai dirección e non pasa nada. Mova o punteiro un pouco cara a onde quere ir e logo escriba.

## A unidade do modelo

Cambie a unidade no selector da parte inferior dereita: {{ui:pés e polgadas}}, in, ft, yd, mi, mil, µm, mm, cm, m ou km, sempre que estean activadas en {{ui:Configuración}} › {{ui:General}} › {{ui:Unidades}} (a propia unidade do modelo sempre está). Unha lonxitude escrita con calquera marca de unidade lese nesa unidade. Ver [Unidades, valores escritos e listas de unidades](common:unit-lists). Cambia como se amosan as lonxitudes e como se len os números soltos; o modelo segue co mesmo tamaño. A unidade gárdase no ficheiro.

Así se amosan os tamaños:

| Unidade | Lonxitudes | Superficies | Volumes |
|---|---|---|---|
| pés e polgadas | `10' 6 1/2"` (ata 1/16") | sq ft | cu ft |
| in | `126 1/2"` | sq in | cu in |
| m | `3.2 m` | m² | m³ |
| cm | `320 cm` | cm² | cm³ |
| mm | `3200 mm` | m² desde 0.01 m², se non mm² | m³ desde 0.01 m³, se non mm³ |

Un modelo novo comeza en pés e polgadas cando o idioma do navegador está configurado nunha rexión dos Estados Unidos (e Liberia e Myanmar), e en milímetros no resto. Usa a unidade marcada con estrela en {{ui:Configuración}} › {{ui:General}} › {{ui:Unidades}}, se ModelCraft a ten. Ou cambie o selector despois de {{ui:Novo}}.
