---
title: Estilos e sombras do sol
summary: Mostrar o modelo sombreado, como liñas ocultas, como estrutura de arame ou transparente, e estudar as sombras que proxecta en calquera data, hora e lugar.
keywords: vista de presentación, vista limpa, ocultar guías, ocultar eixos, estilo, sombreado, liña oculta, estrutura de arame, raios X, bordos, sombras, sol, estudo solar, solar, data, hora, latitude, lonxitude, fuso horario, norte
from: 09c95329
---

O panel {{ui:Style}} da dereita cambia a forma en que se debuxa o modelo. Nada del cambia o modelo en si, e non forma parte de desfacer. Cada [escena](topic:scenes) garda o seu propio estilo, e o ficheiro garda o estilo que tiña ao gardalo.

## Caras

Escolla un na lista {{ui:Faces}}:

| Estilo | Aspecto |
|---|---|
| {{ui:Shaded}} | Caras sólidas, con luz suave. As caras vistas por detrás son azul grisáceo. Mostranse as cores importadas. |
| {{ui:Hidden line}} | Caras na cor de fondo con bordos en tinta: un debuxo lineal limpo, sen as liñas ocultas. Branco en {{ui:Paper}}, escuro en {{ui:Model}}. |
| {{ui:Wireframe}} | Só bordos. As caras non se debuxan, pero contan igualmente ao facer clic e ao encaixar: non se pode seleccionar a través delas. |
| {{ui:X-ray}} | Caras transparentes, para ver o que hai detrás ou dentro. Como en {{ui:Wireframe}}, os clics e os encaixes seguen parando na cara máis próxima. |

{{ui:Show edges}} activa ou desactiva os bordos en todos os estilos agás {{ui:Wireframe}}. Desactivado, {{ui:Hidden line}} case non mostra nada, xa que as súas caras coinciden co fondo. Os bordos suaves, como os lados dun círculo empurrado, non se debuxan nunca.

## Activar as sombras do sol

1. Marque {{ui:Sun shadows}}. Actívanse os axustes do sol que hai debaixo, e o modelo proxecta sombras sobre si mesmo e sobre o chan.
2. Fixe o lugar:
   - {{ui:Latitude}}: o norte é positivo, o sur negativo (Nova York está arredor de 40.7; Sídney, arredor de -33.9).
   - {{ui:Longitude}}: o leste é positivo, o oeste negativo (Nova York está arredor de -74.0).
   - {{ui:UTC offset}}: a diferenza horaria do lugar respecto de UTC, en horas, como `-5` para Nova York no inverno. ModelCraft non aplica o horario de verán; use `-4` para Nova York no verán.
3. Fixe a {{ui:Date}} (mes e día) e arrastre o control deslizante de {{ui:Time}}. A hora avanza en pasos de 15 minutos e mostrase ao lado do control, como «3:00 pm».

Unha liña baixo os axustes indica onde está o sol, como «Sol 52° sobre o horizonte, 250° desde o norte. O norte é o eixe verde.» De noite di «O sol está baixo nesta hora.»

Un modelo novo comeza co sol o 21 de xuño ás 3:00 pm, na latitude 40, na lonxitude -105 e cun desfase UTC de -7.

## Orientar o modelo ao norte

O norte de ModelCraft é sempre o **eixe verde**. Para estudar un lugar real, xire o modelo para que o seu lado norte mire ao longo do verde: seleccione todo ({{key:Mod+A}}), prema {{key:Q}}, faga clic nun centro no chan e xire o modelo polo ángulo do lugar respecto do norte (véxase [Xirar e escalar](topic:rotate-scale)).

## Un estudo solar

1. Axuste o lugar e a data.
2. Engada unha escena ({{ui:Add scene}} en {{ui:Scenes}}).
3. Mova o control deslizante da hora e engada outra escena. Repita para cada hora que queira.
4. Prema en {{ui:Play}} para avanzar por elas. Véxase [Gardar vistas como escenas](topic:scenes).

## Cousas que debe saber

- Nun modelo moi grande as sombras poden verse dentadas, xa que un único mapa de sombras cobre todo o modelo.
- As sombras non se debuxan en {{ui:Wireframe}}.
- A posición do sol segue o cálculo solar da NOAA e é precisa até unha fracción de grao, o que abonda para estudos de volume. Ignórase a refracción atmosférica, así que os ángulos moi baixos do sol ao nacer e ao pór poden diferir lixeiramente.

## Vista de presentación

{{ui:Views}} › {{ui:Presentation view}} (ou {{key:Shift+P}}) mostra só o modelo: quitan os eixes, as liñas e os puntos guía, os contornos dos planos de corte (o corte queda), as marcas das lámpadas, a caixa dun grupo aberto, as marcas e as suxestións de encaixe, e o realce da selección. Úsea para ver o modelo con claridade ou antes dunha captura de pantalla. As ferramentas seguen funcionando e seguen encaixando; só non se ven as marcas. Prema {{key:Shift+P}} de novo para recuperalas. As cotas quedan, porque forman parte do debuxo. Mentres edita dentro dun grupo, o resto do modelo xa non se esvaece: móstrase tal como é, coas texturas incluídas.
