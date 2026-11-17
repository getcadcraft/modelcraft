---
title: Prepare um modelo para impressão 3D
summary: Verifique se um modelo está fechado e com as faces voltadas para o lado certo, veja seu tamanho, sua base e seus balanços, corrija o que está errado e baixe-o como STL ou 3MF para o seu fatiador.
keywords: impressão 3d, impressora 3d, impressora, imprimir, fatiador, stl, 3mf, estanque, fechado, variedade, sólido, furos, do avesso, balanço, suportes, base, mesa, milímetros, exportar, corrigir, reparar, oco, tamanho da mesa, iniciante, espessura de parede, ferramentas de impressão
from: 948e19af
---

Um fatiador de impressora 3D precisa de uma forma fechada: sem furos, com todas as faces apontando para fora e nada atravessando a si mesmo. {{ui:Export}} › {{ui:Check for 3D printing (STL or 3MF)…}} verifica exatamente isso antes de você baixar o arquivo.

## Verificar e baixar

1. Selecione o que deseja imprimir: um ou mais grupos ou componentes, ou algumas faces. Sem nada selecionado, tudo o que está visível é impresso.
2. Clique em {{ui:Export}} no grupo {{ui:File}}, depois em {{ui:Check for 3D printing (STL or 3MF)…}}.

   O diálogo começa com uma linha: "Pronto para imprimir", quantos itens devem ser corrigidos antes de imprimir, ou quantos devem ser vistos antes. Cada problema tem três partes: o que está errado, por que importa e o que fazer. Depois vêm o tamanho em milímetros, o volume, o número de triângulos e a sua mesa de impressão.

3. Se o diálogo listar itens a corrigir, clique em {{ui:Fix what can be fixed}} (veja abaixo). A verificação roda de novo sozinha.
4. Clique em {{ui:Download 3MF}} ou {{ui:Download STL}}.

O que é impresso é o que você vê: faces ocultas, grupos e componentes ocultos, e qualquer coisa em uma etiqueta oculta ficam de fora. Os tamanhos são sempre em milímetros, a unidade que os fatiadores esperam, qualquer que seja a unidade do modelo.

:::tip
Prefira 3MF quando o seu fatiador o lê: ele mantém as cores e as unidades. O STL não tem nenhuma das duas coisas, e os fatiadores presumem milímetros.
:::

## O que a verificação procura

Estes impedem a impressão ou a estragam, e fazem o diálogo dizer "Não está pronto para imprimir":

| Problema | O que significa | O que fazer |
|---|---|---|
| Face em apenas um lado | Um furo: uma aresta tem face de um lado e nada do outro | Desenhe a face que falta (uma linha atravessando a abertura muitas vezes a fecha), ou use {{ui:Fix}} (abaixo) |
| Compartilhada por três ou mais faces | As faces se encontram em uma aleta ou em uma parede dentro de um sólido | Apague a face interna |
| Faces apontando em sentidos opostos | Algumas faces apontam para dentro, outras para fora | Selecione as faces que apontam para dentro e clique em {{ui:Reverse face}} em {{ui:Entity info}} |
| Do avesso | Uma peça fechada inteira aponta para dentro | Selecione as faces dela e inverta-as |
| Atravessa a si mesma | Uma parte se dobra através de si mesma | {{ui:Edit}} › {{ui:More}} › {{ui:Intersect with model}}, depois apague o que está dentro. Veja [Interseccionar faces](topic:intersect) |

Estes são avisos: o modelo imprime, mas dê uma olhada antes.

- **Peças separadas se sobrepõem**, ou **se encostam face a face**: os fatiadores costumam uni-las em uma só. Para um arquivo mais limpo, una-as com {{ui:Solids}} › {{ui:Union}}. Veja [Ferramentas de sólidos](topic:solids).
- **Nada fica plano na parte de baixo**: gire o modelo para que uma face repouse na mesa, ou o fatiador adicionará suportes ou uma base de sustentação.
- **Inclina-se mais de 45° da vertical**: essas faces precisam de suporte. O diálogo informa quanto da superfície precisa.
- **Menos de 1 mm de largura**: provavelmente modelado na unidade errada. Verifique a unidade na barra de status.

Uma peça oca (uma casca fechada dentro de outra) é válida: suas faces apontam para o oco, e o volume dela é descontado.

## Corrigir os problemas

Em **Onde estão os problemas**, o diálogo nomeia cada grupo ou componente que tem algo errado (faces soltas fora de grupos aparecem como "Faces fora de um grupo"), com o que está errado nele. Um componente posicionado várias vezes aparece uma só vez: corrigi-lo corrige todas as cópias.

- {{ui:Show}} abre esse grupo e seleciona as arestas e faces erradas, para que apareçam destacadas.
- {{ui:Fix what can be fixed}} corrige todas de uma vez: fecha furos cujas arestas estão planas, remove faces dentro da forma e arestas soltas, e vira as faces para o lado certo. É um único passo: {{key:Mod+Z}} desfaz. A verificação roda de novo e mostra o que sobrou.

O que ela não consegue corrigir (um furo cujas arestas não estão planas, uma peça que atravessa a si mesma) fica na lista com o que fazer manualmente. {{ui:Repair}} em **Ferramentas de impressão** vai além: fecha furos que não são planos, remove peças soltas e faces duplicadas, e lista cada correção. Veja [Suportes, espessura de parede, esvaziamento e reparo](topic:print-tools#repair). Você também pode corrigir um grupo por vez: selecione-o e use {{ui:Show problems}} e {{ui:Fix}} em {{ui:Entity info}}. Veja [Ferramentas de sólidos](topic:solids).

## Uma peça oca

{{ui:Hollow}} em **Ferramentas de impressão** esvazia uma peça com a espessura de parede que você informar, com furos de drenagem onde você clicar. Veja [Esvaziar](topic:print-tools#hollow).

Você também pode desenhar o oco sozinho: um grupo fechado dentro da peça, sem tocá-la, com todas as faces invertidas para apontar para o oco. A verificação o conta como oco e desconta seu volume; ele não aparece como algo a corrigir.

## A mesa da sua impressora

Escolha o tamanho da mesa da sua impressora em {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:3D printer bed}}. A verificação então avisa quando o modelo é maior que a mesa, girado de qualquer um dos dois jeitos. Veja [Configurações](topic:settings#3d-printer-bed).

## Ferramentas de impressão

Abaixo dos resultados do diálogo, **Ferramentas de impressão** abre {{ui:Supports preview}} (onde ficam os suportes e quanto deles), {{ui:Wall thickness}} (paredes finas demais para imprimir), {{ui:Hollow}} e {{ui:Repair}}. Veja [Suportes, espessura de parede, esvaziamento e reparo](topic:print-tools). {{ui:Split for printing}} corta um modelo grande demais para a mesa em peças com conectores e juntas numeradas: veja [Dividir um modelo grande para impressão](topic:print-split).

## Não verificado

A verificação não fatia: detalhes pequenos demais para o seu bico desenhar e os suportes reais são responsabilidade do seu fatiador. Veja [Ainda não implementado](topic:not-built-yet#3d-printing).
