---
title: Compoñentes que se estiran
summary: Crear unha copia dun compoñente máis ancha, máis profunda ou máis alta mentres as súas pezas conservan o seu tamaño: unha mesa máis longa coas mesmas patas, unha estante máis alta coas baldas máis separadas, unha barandilla cuns piares que se repiten.
keywords: compoñente dinámico, estirar, redimensionar compoñente, paramétrico, tamaños con nome, repetir, matriz, patas, baldas, barandilla, regras, variables
from: b4c40f43
---

Escalar un compoñente fai que todo o que contén medre, incluídas as patas e os travesanos. **Estirar esta copia** cambia a largura, a profundidade ou a altura dun compoñente, e cada peza segue unha regra: o tablero dunha mesa crece, e as súas patas conservan o grosor e quedan nos extremos.

Funciona con compoñentes formados por pezas, é dicir, grupos ou compoñentes dentro do compoñente, como son todos os elementos da [biblioteca inicial](topic:starter).

## Estirar unha copia

1. Seleccione o compoñente.
2. En {{ui:Entity info}}, prema en {{ui:Stretch this copy…}}.
3. Escriba a nova {{ui:Width (red)}}, {{ui:Depth (green)}} e {{ui:Height (blue)}}, e prema en {{ui:Stretch}}.

Só cambia esa copia: convértese nun compoñente propio, que recorda o orixinal do que procede. Estírea de novo cando queira e reconstrúese desde o orixinal, así que non se desvía nada. As demais copias do orixinal quedan como estaban.

## As regras

Abra o compoñente (faga dobre clic) e seleccione unha das súas pezas. {{ui:Entity info}} mostra {{ui:When the component stretches}}, cunha regra ao longo do vermello, do verde e do azul:

| Regra | Que fai a peza | Por exemplo |
|---|---|---|
| {{ui:Stretch}} | Crece co compoñente; as súas distancias a ambos os lados conservanse | O tablero dunha mesa |
| {{ui:Stay at the start}} / {{ui:Stay at the end}} | Conserva o seu tamaño e a súa distancia a ese lado | Patas |
| {{ui:Move in proportion}} | Conserva o seu tamaño; o seu centro móvese en proporción | Baldas, o tirador dunha porta |
| {{ui:Scale in proportion}} | Tanto o seu lugar como o seu tamaño cambian en proporción | Os chanzos dunha escaleira |
| {{ui:Repeat}} | Copias dela, cada certo ({{ui:Every}}), desde onde comeza ata o lado oposto | Os piares dunha barandilla |

{{ui:Automatic}} (o valor inicial) calcula unha regra e indica cal: {{ui:Stretch}} cando a peza abarca o compoñente, {{ui:Move in proportion}} cando está máis ou menos no medio, e en caso contrario queda no lado máis próximo.

## Cousas que debe saber

- As formas propias das pezas compártense, así que unha copia estirada é lixeira. Editar unha peza cambia esa peza en todas as copias.
- Unha copia estirada non segue os cambios posteriores nas regras ou na disposición do orixinal: estírea de novo para incorporalos.
- As caras debuxadas soltas no compoñente (non dentro dunha peza) conservan o seu tamaño; conviértaas nunha peza para que sigan o estiramento.
- As regras e o orixinal do que procede cada copia gárdanse no ficheiro de ModelCraft.
