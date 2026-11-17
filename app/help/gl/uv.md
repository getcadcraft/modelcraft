---
title: Dispor as UV dunha malla
summary: Marcar costuras, desdobrar, proxectar e empaquetar as coordenadas de textura dunha malla no espazo de traballo UV, e comprobalas cun cadriculado e as cores de estiramento.
keywords: uv, uvs, desdobrar, desdobramento, costura, costuras, textura, coordenadas de textura, atlas, empaquetar, empaquetado, illa, illas, cadriculado, estiramento, distorsión, proxección de caixa, proxección de cilindro, proxección de esfera, conforme, baseado en ángulos, lscm, abf
from: 00028f20
---

Unha textura é unha imaxe plana; unha malla non é plana. As súas **UV** indican onde cae cada esquina de cada cara na imaxe. O espazo de traballo UV créaas: vostede corta a malla ao longo das **costuras**, estende as pezas no plano (**desdobrar**) e as encaixa no cadrado (**empaquetar**).

## Abrilo

Seleccione unha malla e escolla {{ui:UV}} na lista de {{ui:Espazo de traballo}}. Un grupo ou compoñente convértese primeiro en malla, como no espazo de traballo Malla. A vista 3D pásase á metade esquerda; o **editor UV** á dereita mostra as caras da malla dispostas sobre o cadrado de textura. Seleccionar funciona como no espazo de traballo Malla, e o que selecciona nunha vista queda seleccionado na outra.

## Marcar costuras

As costuras son os lugares onde a malla pode cortarse; móstranse en vermello nas dúas vistas.

- Seleccione arestas ({{ui:Aresta}}, ou {{key:2}}) e prema {{ui:Marcar costura}} ({{key:Ctrl+E}}). {{ui:Borrar costura}} ({{key:Ctrl+Shift+E}}) quítaas.
- {{ui:Costuras en arestas vivas}} marca cada aresta viva e cada aresta onde as caras se atopan con máis de 60°: unha caixa cae nos seus seis lados.
- {{ui:Costuras desde as UV}} marca as costuras onde as UV xa se rompen, por exemplo despois dunha proxección.

Unha peza pechada necesita costuras para quedar plana: unha bola precisa polo menos un corte, e un tubo, un corte ao longo da súa lonxitude.

## Desdobrar

Seleccione as caras que quere dispoñer (ou ningunha, para toda a malla) e prema {{ui:Desdobrar}} ({{key:U}}). Cada peza entre costuras esténdese no plano, mantendo os seus ángulos o máis reais posible (aplanamento baseado en ángulos), e logo as pezas empaquétanse no cadrado. {{ui:Conforme}} desdobra mediante mapas conformes de mínimos cadrados: máis rápido, un pouco menos fiel en pezas moi curvas. Unha forma que se pode facer dunha folla plana, como o lateral dun cilindro cortado unha vez, desdóbrase sen estiramento ningún.

## Proxectar

Para formas sinxelas adoita bastar unha proxección:

| Proxección | Que fai |
| --- | --- |
| {{ui:Caixa}} | Cada cara sobre o lado da caixa ao que máis mira |
| {{ui:Cilindro}} | Arredor do eixe azul: en horizontal é o ángulo arredor, en vertical é a altura |
| {{ui:Esfera}} | Desde o centro: en horizontal é o ángulo arredor, en vertical é a latitude |
| {{ui:Desde a vista}} | Tal como se ven as caras na vista 3D agora |

Unha cara que cruza a unión do cilindro ou da esfera mantense nunha soa peza, así que as súas UV poden pasar un pouco do bordo dereito do cadrado; as texturas repítense aí.

## Dispor

- {{ui:Empaquetar}} encaixa as pezas (illas) no cadrado cun mesmo tamaño de texel, cada unha xirada para ocupar o menos espazo. O panel fixa o espazo que queda entre elas.
- {{ui:Xirar 90°}} e {{ui:Espellar}} xiran ou espellan as UV das caras seleccionadas.
- No editor UV, arrastre unha cara seleccionada para mover as UV da selección, ou sitúe o cursor no editor e prema {{key:R}} ou {{key:S}} e logo mova para xirar ou escalar (un clic conserva o cambio, {{key:Esc}} cancela). {{key:G}} move sen arrastrar. Prema dúas veces nunha cara (ou {{key:L}}) para seleccionar a súa illa completa. A roda fai zoom; arrastre co botón central ou dereito para desprazar; {{key:F}} volve ajustar o cadrado.

Cada cambio é un paso de desfacer.

## Comprobalas

- {{ui:Cadriculado}} mostra nunha malla, nas súas UV, un cadriculado con etiquetas: cadros regulares e cadrados indican que a textura se estende de xeito uniforme; as etiquetas mostran en que sentido corre.
- {{ui:Estiramento}} colorea cada cara segundo canto estiran as súas UV: azul significa ningún, pasando polo verde, ata vermello para moito estiramento. O panel escolle se mide **ángulos dobrados** ou **tamaño cambiado**, e mostra a media.

Ver tamén [Editar unha malla](topic:mesh-edit), [Mallas](topic:meshes) e [Modificadores nunha malla](topic:modifiers).
