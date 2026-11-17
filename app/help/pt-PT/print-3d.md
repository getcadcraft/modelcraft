---
title: Preparar um modelo para impressão 3D
summary: Verifique se um modelo está fechado e as faces apontam para o lado certo, veja o seu tamanho, base e balanços, corrija o que estiver errado, e transfira-o como STL ou 3MF para o seu fatiador.
keywords: impressão 3D, impressora, imprimir, fatiador, stl, 3mf, estanque, fechado, manifold, sólido, furos, do avesso, balanço, suportes, base, tamanho da base, milímetros, exportar, corrigir, reparar, oco, principiante, espessura das paredes, ferramentas de impressão
from: 948e19af
---

O fatiador de uma impressora 3D precisa de uma forma fechada: sem furos, com todas as faces viradas para fora, e nada que se atravesse a si próprio. {{ui:Export}} › {{ui:Check for 3D printing (STL or 3MF)…}} procura exatamente isso antes de transferir o ficheiro.

## Verificar e transferir

1. Selecione o que quer imprimir: um ou mais grupos ou componentes, ou algumas faces. Sem nada selecionado, imprime-se tudo o que estiver visível.
2. Clique em {{ui:Export}} no grupo {{ui:File}}, depois em {{ui:Check for 3D printing (STL or 3MF)…}}.

   O diálogo começa com uma linha: «Pronto para imprimir», quantos problemas corrigir antes de imprimir, ou quantos ver primeiro. Cada problema tem três partes: o que está errado, porque importa e o que fazer. Depois seguem o tamanho em milímetros, o volume, o número de triângulos e a base da sua impressora.

3. Se o diálogo listar coisas a corrigir, clique em {{ui:Fix what can be fixed}} (veja abaixo). A verificação volta a correr sozinha.
4. Clique em {{ui:Download 3MF}} ou {{ui:Download STL}}.

Imprime-se o que se vê: faces ocultas, grupos e componentes ocultos, e tudo o que estiver numa etiqueta oculta fica de fora. Os tamanhos são sempre em milímetros, a unidade que os fatiadores esperam, seja qual for a unidade que o modelo mostra.

:::tip
Prefira o 3MF quando o seu fatiador o ler: mantém as cores e as unidades. O STL não tem nenhuma das duas, e os fatiadores assumem milímetros.
:::

## O que a verificação procura

Estes problemas impedem uma impressão ou estragam-na, e fazem o diálogo dizer «Não está pronto para imprimir»:

| Problema | O que significa | O que fazer |
|---|---|---|
| Uma face de um só lado | Um furo: uma aresta tem uma face de um lado e nada do outro | Desenhe a face em falta (uma linha sobre o vão costuma fechá-la), ou use {{ui:Fix}} (abaixo) |
| Partilhada por três ou mais faces | As faces encontram-se numa aleta ou numa parede dentro de um sólido | Apague a face interior |
| Faces voltadas em sentidos opostos | Algumas faces apontam para dentro, outras para fora | Selecione as faces voltadas para dentro e clique em {{ui:Reverse face}} em {{ui:Entity info}} |
| Do avesso | Uma peça fechada inteira aponta para dentro | Selecione as suas faces e inverta-as |
| Atravessa-se a si própria | Uma peça dobra-se através de si própria | {{ui:Edit}} › {{ui:More}} › {{ui:Intersect with model}}, depois apague o que está dentro. Veja [Interseccionar faces](topic:intersect) |

Estes são avisos: o modelo imprime, mas veja primeiro.

- **Peças separadas sobrepõem-se**, ou **encontram-se face a face**: os fatiadores costumam fundi-las numa só. Para um ficheiro mais limpo, una-as com {{ui:Solids}} › {{ui:Union}}. Veja [Ferramentas de sólidos](topic:solids).
- **Nada assenta plano na base**: rode o modelo para que uma face assente na base, ou o fatiador acrescenta suportes ou uma jangada.
- **Inclina-se para fora mais de 45° da vertical**: essas faces precisam de suporte. O diálogo indica quanto da superfície precisa.
- **Menos de 1 mm de largura**: provavelmente modelado na unidade errada. Verifique a unidade na barra de estado.

Uma peça oca (uma casca fechada dentro de outra) está bem: as suas faces apontam para dentro do oco, e o seu volume é descontado.

## Corrigir os problemas

Em **Onde estão os problemas**, o diálogo indica cada grupo ou componente com algo errado (faces soltas que não estejam num grupo aparecem como «Faces fora de um grupo»), com o que está errado nele. Um componente colocado várias vezes aparece uma só vez: corrigi-lo corrige todas as cópias.

- {{ui:Show}} abre esse grupo e seleciona as arestas e faces erradas, para ficarem destacadas.
- {{ui:Fix what can be fixed}} corrige todos de uma vez: fecha os furos cujas arestas estão planas, remove faces dentro da forma e arestas soltas, e volta as faces para o lado certo. É um só passo: {{key:Mod+Z}} anula-o. A verificação volta a correr e mostra o que resta.

O que não consegue corrigir (um furo cujas arestas não estão planas, uma peça que atravessa a si própria) fica na lista com o que fazer à mão. {{ui:Repair}} em **Ferramentas de impressão** vai mais longe: fecha os furos que não são planos, remove peças soltas e faces duplicadas, e lista todas as correções. Veja [Suportes, espessura das paredes, esvaziar e reparar](topic:print-tools#repair). Também pode corrigir um grupo de cada vez: selecione-o e use {{ui:Show problems}} e {{ui:Fix}} em {{ui:Entity info}}. Veja [Ferramentas de sólidos](topic:solids).

## Uma peça oca

{{ui:Hollow}} em **Ferramentas de impressão** esvazia uma peça com a espessura de parede que indicar, com furos de drenagem onde clicar. Veja [Esvaziar](topic:print-tools#hollow).

Também pode desenhar o oco por si: um grupo fechado dentro da peça, sem lhe tocar, com todas as faces invertidas para ficarem voltadas para dentro do oco. A verificação conta-o como oco e desconta-lhe o volume; não é listado como algo a corrigir.

## A base da sua impressora

Escolha o tamanho da base da sua impressora em {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:3D printer bed}}. A verificação avisa então quando o modelo é maior do que a base, rodado de qualquer forma sobre ela. Veja [Definições](topic:settings#3d-printer-bed).

## Ferramentas de impressão

Nos resultados do diálogo, **Ferramentas de impressão** abre {{ui:Supports preview}} (onde vão os suportes e quanto, aproximadamente), {{ui:Wall thickness}} (paredes demasiado finas para imprimir), {{ui:Hollow}} e {{ui:Repair}}. Veja [Suportes, espessura das paredes, esvaziar e reparar](topic:print-tools). {{ui:Split for printing}} corta um modelo demasiado grande para a base em peças com conectores e juntas numeradas: veja [Dividir um modelo grande para impressão](topic:print-split).

## Não verificado

A verificação não fatia: os detalhes minúsculos que o bico não consegue desenhar e os suportes reais são do seu fatiador. Veja [Ainda não implementado](topic:not-built-yet#3d-printing).
