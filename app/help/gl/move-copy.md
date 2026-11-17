---
title: Mover, copiar e crear matrices
summary: Mover cousas premendo nun punto ou por unha distancia exacta, copialas cunha tecla modificadora e facer unha fila de copias igualmente espazadas.
keywords: mover, copiar, duplicar, matriz, fila, espazamento, dividir, desfasar, estirar, columnas, repetir, copia múltiple
from: 280245fc
---

{{ui:Move}} ({{key:M}}) move o que estea seleccionado dun punto a outro. Mantendo premida unha tecla modificadora faise unha copia, e despois de copiar pode escribir cantas máis quere.

## Mover algo

1. Seleccione o que quere mover (vexa [Seleccionar cousas](topic:select)). Se non hai nada seleccionado, {{ui:Move}} toma o que preme.
2. Prema {{key:M}}.
3. Prema un punto desde o que mover. Escolla algo significativo, como unha esquina: ese punto caerá exactamente onde prema despois.
4. Mova o punteiro. A selección sígueo. Axústase a puntos, bordos e ás direccións vermella, verde e azul, como o fai unha liña.
5. Prema onde debe quedar o punto, ou escriba unha distancia e prema {{key:Enter}}.

   A suxestión da barra de estado volve a «Seleccione un punto desde o que mover…» para o seguinte movemento.

A distancia escrita vai na dirección á que apunta. Tamén pode escribir un desprazamento exacto, `<2m,0,0>` (2 m ao longo do vermello), ou un destino exacto para o punto escollido, `[0,0,0]` (a orixe). Vexa [Escribir tamaños exactos](topic:value-box).

Para mover só nun eixe, prema unha tecla de frecha despois do primeiro clic: {{key:Right}} bloquea no vermello, {{key:Left}} no verde, {{key:Up}} no azul. Prema a mesma frecha de novo para desbloquear.

## Mover parte dunha forma estírea

A xeometría que non está agrupada está conectada. Se selecciona unha cara ou algúns bordos e os move, as caras unidas a eles estíranse para seguilos. Mova a cara superior dunha caixa cara ao lado e a caixa inclínase; mova un bordo do tellado e o tellado cambia de pendente. As caras que xa non poden quedar planas pregáranse en triángulos.

Para mover un obxecto enteiro sen estirar, seleccióneo todo primeiro (prema tres veces), ou mellor, fágao un grupo ou compoñente (vexa [Grupos e compoñentes](topic:groups-components)).

## Copiar algo

1. Seleccione o que quere copiar.
2. Prema {{key:M}}.
3. Mantenha premida {{key:Ctrl}} (ou {{key:Alt}}) e prema o punto desde o que mover. En Mac, {{key:Mod}} ou {{key:Alt}} fan o mesmo. A suxestión di «Ctrl move en troca», o que significa que está copiando.

   Tamén pode premer e soltar {{key:Ctrl}} ou {{key:Alt}} despois do primeiro clic para cambiar entre mover e copiar.

4. Prema onde debe ir a copia, ou escriba unha distancia e prema {{key:Enter}}.

   O orixinal queda onde estaba, e a copia queda seleccionada.

## Copiar, cortar, pegar e duplicar

- {{key:Mod+C}} copia a selección, {{key:Mod+X}} corta (copia e logo borra), {{ui:Copy}} e {{ui:Paste}} son tamén botóns no grupo {{ui:Edit}} da barra de ferramentas, e {{ui:More}} xunto a eles ten cortar, pegar no mesmo sitio e duplicar.
- {{key:Mod+V}} pega: un contorno da copia segue o punteiro, axustándose como calquera ferramenta, e un clic déixao co seu esquina inferior aí. {{key:Esc}} cancela.
- {{key:Mod+Shift+V}} pega no mesmo sitio, exactamente de onde veu a copia; é útil para mover algo a un grupo que teña aberto.
- {{key:Mod+D}} ({{key:Shift+D}} no estilo Modeler) duplica: fai unha copia que se move co punteiro de inmediato; prema para deixala, escriba unha distancia, ou prema {{key:Esc}} para soltala. Logo, escriba `3x` para máis copias seguidas.

Un grupo pegado convértese nun grupo novo. Un compoñente pegado é outra colocación do mesmo compoñente, así que editar un cambia tamén todos. As copias tamén se pegan noutra lapela de ModelCraft neste navegador (entran como definicións novas alí).

## Unha fila de copias

Logo de copiar, mentres {{ui:Move}} segue sendo a ferramenta:

- Escriba `3x` (ou `*3`) e prema {{key:Enter}} para tres copias seguidas, cada unha coa mesma separación que a primeira copia. Obtense tres copias novas ademais do orixinal.
- Escriba `/3` e prema {{key:Enter}} para dividir: tres copias repartidas igualmente desde o orixinal ata onde puxo a primeira copia, a última nese punto. Use isto para encher un tramo: coloque unha copia no extremo lonxano e logo divida.

Pode escribir outro número logo: `5x` substitúe a fila `3x`. A suxestión lémbrao: «Copiado. Escriba 3x para máis copias seguidas, ou /3 para dividir a distancia.»

### Exemplo: columnas cada 6 metros

1. Cree unha columna e fágaa compoñente ({{key:G}}), para que todas as copias cambien xuntas despois.
2. Prema {{key:M}}, mantenha premida {{key:Ctrl}} e prema a esquina da base da columna.
3. Mova ao longo do eixe vermello e escriba `6m`, logo {{key:Enter}}.
4. Escriba `4x` e {{key:Enter}}. Terá cinco columnas, separadas 6 m.

## Cousas a ter en conta

- Prema {{key:Esc}} antes do segundo clic para cancelar; todo volve ao seu sitio.
- {{ui:Move}} funciona dentro do grupo que está editando. Para mover un grupo enteiro, péchello primeiro e selecciónao desde fóra.
- Con {{ui:Collide}} activado (abaixo á dereita, e en [configuración de ModelCraft](topic:settings#solids-stop-where-they-touch)), un movemento detense onde a selección toca outro sólido en vez de atravesalo. Prema {{ui:Collide}} para desactivalo nun movemento que debe atravesalo.
- Para pór unha copia dentro doutro grupo: cópiea, abra o outro grupo e pegue ({{key:Mod+Shift+V}} mantena no mesmo sitio).
