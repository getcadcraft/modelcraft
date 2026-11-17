---
title: Cortar unha abertura nun muro
summary: Debuxe unha xanela ou porta nun muro con grosor e empurre a través dela, para que o muro teña un burato real.
keywords: xanela, porta, abertura, burato, muro, cortar, empurrar a través, oco, grosor, fachada
from: 6b22f32c
---

Unha abertura precisa un muro con dous lados: unha caixa, ou un muro que fixo tirando dun rectángulo longo e fino cara arriba. Unha cara soa en pé non ten onde empurrar a través.

## Faga un muro para practicar

1. Prema {{key:R}}, prema unha esquina no chan e escriba `6m,0.3m` (ou `20',12"`), logo {{key:Enter}}.
2. Prema {{key:P}}, prema o rectángulo e escriba `3m` (ou `10'`), logo {{key:Enter}}.

Ten un muro de 300 mm (12 in) de grosor.

## Debuxar a abertura

1. Oriente a vista para ver o lado longo do muro.
2. Prema {{key:R}}.
3. Pase o punteiro pola cara do muro, logo prema onde vai a esquina inferior da xanela. A suxestión di «Sobre a cara».
4. Escriba o ancho e a altura da xanela, como `1.2m,1.5m` (ou `4',5'`), e prema {{key:Enter}}.

   A xanela é unha cara propia dentro da cara do muro, que agora ten un burato ao seu redor.

Para colocala a unha distancia exacta da esquina e do chan, use primeiro [guías](topic:guides-measure): con {{ui:Tape}}, arrastre liñas-guía desde o bordo inferior e o bordo final do muro, logo comece o rectángulo onde se cruzan dúas guías (a suxestión di «Sobre a guía»).

## Empurrar a través

1. Prema {{key:P}}.
2. Prema a cara da xanela e empurrea cara ao muro.
3. Mova ata que se pare na cara posterior, logo prema. Ou escriba o grosor do muro, `300` (ou `12`), e prema {{key:Enter}}.

   ModelCraft para na cara de atrás e a abre: o muro ten agora un burato directo, con catro caras laterais (xambas, dintel e peitoril) que o forran. {{ui:Entity info}} segue chamándolle sólido pechado cando está agrupado.

Se empurra menos do grosor completo, obtén un rebaixe en vez dun burato.

## Unha porta

Debuxe o rectángulo comezando no bordo inferior da cara do muro (a suxestión di «Sobre o bordo» ou «Extremo»), para que a abertura chegue ao chan. Empúrreo a través do mesmo xeito.

## Moitas xanelas do mesmo tamaño

1. Faga a primeira abertura.
2. Para as seguintes, debuxe os rectángulos, logo faga dobre clic en cada un con {{ui:Push/pull}}: un dobre clic repite a última distancia. Vexa [Empurrar e tirar](topic:push-pull#repeat-the-last-distance).

## Se non cortou a través

- O rectángulo debe debuxarse **sobre** a cara do muro. Se se debuxou no aire diante dela, é unha cara separada: desfaga e debuxe de novo, comezando na cara.
- O empuxe para na primeira cara detrás da abertura. Se hai algo máis no medio do muro (unha cara interior deixada de debuxos anteriores), para aí; borre os bordos desa cara e probe de novo.
- A xeometría nun grupo separado non se corta. Abra o grupo que contén o muro e debuxe a abertura dentro del.
