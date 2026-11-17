---
title: Enviar a volumetria para o BimCraft
summary: Envie volumes de push/pull ao BimCraft como opções de volumetria, com pavimentos, área de implantação, área bruta e volume calculados a partir de cada sólido.
keywords: volumetria, massa, conceito, opções, bimcraft, ifc, bim, push pull, pavimentos, andares, área bruta, implantação, volume, enviar, entregar, massa do edifício, etapa 2
from: 73c51f3f
---

## O que você vai fazer

Transforme os blocos que modelou com push/pull em opções de volumetria que o BimCraft entende, para que o conceito continue como um modelo de edifício.

## Antes de começar

Transforme cada volume em um **grupo** ou **componente** e dê a ele um nome. Cada um se torna uma opção. Geometria solta não é enviada.

## Enviar

1. Selecione os grupos a enviar. Sem nada selecionado, todo grupo e componente de nível superior é enviado.
2. Escolha {{ui:Export}}, depois {{ui:Massing to BimCraft…}}.
3. Digite o {{ui:Name of the option set}} e a {{ui:Floor height}}.
4. Confira a lista: os pavimentos, a área de implantação, a área bruta e o volume de cada opção.
5. Escolha **Enviar para o BimCraft** para abrir o BimCraft em uma nova aba com as opções, ou {{ui:Save as IFC}} para baixar o arquivo e abri-lo ali por conta própria.

No BimCraft, as opções aparecem listadas em "Opções de volumetria no modelo", onde uma delas pode ser definida como a opção atual e desenvolvida em paredes e pisos.

## Como um sólido vira volume

- **Pavimentos** são a altura do sólido dividida pela altura do pavimento, arredondada, e no mínimo um. Os pavimentos então dividem igualmente a altura do sólido: um bloco de 10 m com pavimentos de 3 m tem 3 pavimentos de 3.33 m.
- **A área de um pavimento** é a área da seção horizontal própria do sólido na altura desse pavimento. Um bloco que recua tem pavimentos superiores menores, e a área bruta é a soma deles.
- **A implantação** é o contorno da seção logo acima da base do sólido.
- **O volume** é o próprio volume do sólido.

No arquivo IFC, cada opção é um elemento proxy (IfcBuildingElementProxy) com a implantação elevada até a altura do sólido, com um espaço por pavimento que carrega a área bruta do pavimento. Todas as opções compartilham um só edifício, com tantos pavimentos quanto a opção mais alta.

## Formas simplificadas

Um bloco reto e vertical simples é enviado exatamente como foi modelado. Qualquer outra forma também é enviada, e a lista informa por que a forma foi simplificada:

- **Nem todos os pavimentos têm o tamanho da base** (ele recua ou tem inclinação): o volume no BimCraft é o contorno da base elevado à altura total, mas as áreas dos pavimentos e o volume são os do próprio sólido.
- **O sólido não é fechado**: pavimentos cuja seção não pode ser fechada não são medidos e contam como nada. Feche o sólido ({{ui:Entity info}} mostra "Sólido: Sim") para obter valores completos.
- **A base tem mais de um contorno**: o maior é usado como implantação.

## Bom saber

- {{ui:IFC for BimCraft (.ifc)}} é outra exportação: envia apenas formas e nomes, sem pavimentos nem áreas.
- Nada é enviado para a internet. O arquivo é entregue à aba do BimCraft neste computador.
