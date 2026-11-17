---
title: Seleccionar obxectos
summary: Clic, dobre clic e triplo clic, arrastrar unha xanela ou unha caixa de cruzamento, engadir e quitar con teclas modificadoras, e eliminar.
keywords: seleccionar, selección, xanela, cruzamento, engadir á selección, desmarcar, seleccionar todo, triplo clic, dobre clic, eliminar, borrar
from: d56d1f89
---

{{ui:Seleccionar}} ({{key:Space}}) é a ferramenta coa que empeza ModelCraft, e á que volve {{key:Esc}}. As cousas seleccionadas tórnanse azuis, e {{ui:Información da entidade}} á dereita indica o que son.

## Clic

| Acción | Selecciona |
|---|---|
| Facer clic nunha cara ou nunha aresta | Esa cara ou esa aresta |
| Facer clic nun grupo ou compoñente | Todo o grupo ou compoñente |
| Facer dobre clic nunha cara | A cara e as súas arestas |
| Facer dobre clic nunha aresta | A aresta e as caras a cada lado |
| Facer dobre clic nun grupo ou compoñente | Ábreo para editar (ver [Grupos e compoñentes](topic:groups-components)) |
| Facer triplo clic nunha cara ou nunha aresta | Todo o conectado a ela: o obxecto completo |
| Facer clic no espazo baleiro | Nada (limpa a selección) |
| Facer dobre clic no espazo baleiro mentres se edita un grupo | Pecha o grupo |

As arestas son máis fáciles de acertar có das caras: cando o punteiro está a poucos píxeles dunha aresta, o clic toma a aresta.

## Arrastrar unha caixa

- **De esquerda a dereita** debuxa unha caixa sólida: unha selección por **xanela**. Só se seleccionan as cousas que quedan totalmente dentro dela.
- **De dereita a esquerda** debuxa unha caixa de trazos: unha selección por **cruzamento**. Selecciónase calquera cousa que a caixa toque, e unha cara selecciónase cando a caixa queda enteiramente dentro dela.

Un grupo ou compoñente conta como unha soa cousa: unha xanela ten que conter todo, e un cruzamento só ten que tocalo.

## Engadir e quitar

Manteña premida unha tecla mentres fai clic ou arrastra:

| Tecla | Efecto |
|---|---|
| {{key:Shift}} | Alterna: engade o que non está seleccionado e quita o que sí está |
| {{key:Mod}} | Engade |
| {{key:Shift}} e {{key:Mod}} xuntas | Quita |

Para seleccionar todo o modelo (ou todo o grupo que está editando), prema {{key:Mod+A}}.

## Limpar a selección

Prema {{key:Esc}} (coa ferramenta {{ui:Seleccionar}}), ou faga clic no espazo baleiro.

## Eliminar o seleccionado

Prema {{key:Delete}} ou {{key:Backspace}}. As caras, arestas, grupos e guías da selección elimínanse dun paso; {{key:Mod+Z}} devólveos.

Eliminar unha aresta elimina as caras que a necesitan, a non ser que a aresta só separase dúas caras no mesmo plano: entón as dúas caras únense nunha. Eliminar unha cara deixa as súas arestas. Ver [Eliminar e limpar](topic:erase).

## Seleccionar dentro dun grupo

Facer clic nun grupo selecciona o grupo completo. Para seleccionar unha cara dentro del, faga dobre clic no grupo para abrilo, e logo faga clic. Mentres un grupo está aberto, os clics só chegan ao que hai dentro; o resto aparece esmorecido. Prema {{key:Esc}} sen nada seleccionado, ou faga dobre clic no espazo baleiro, para pechalo.

O {{ui:Esquema}} á esquerda selecciona grupos e compoñentes polo nome, o que axuda cando están agochados detrás doutras cousas.
