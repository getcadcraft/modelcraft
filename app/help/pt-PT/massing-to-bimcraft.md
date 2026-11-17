---
title: Enviar a volumetria para o BimCraft
summary: Envie os volumes modelados com empurrar/puxar para o BimCraft como opções de volumetria, com pisos, implantação, área bruta de pavimento e volume calculados a partir de cada sólido.
keywords: volumetria, massa, conceito, opções, bimcraft, ifc, bim, empurrar puxar, pisos, andares, área bruta de pavimento, implantação, volume, enviar, entregar, massa do edifício, fase 2
from: 73c51f3f
---

## O que vai fazer

Transforme os blocos que modelou com empurrar/puxar em opções de volumetria que o BimCraft compreende, para que o conceito prossiga como modelo de edifício.

## Antes de começar

Faça de cada massa um **grupo** ou um **componente** e dê-lhe um nome. Cada um torna-se numa opção. A geometria solta não é enviada.

## Enviar

1. Selecione os grupos a enviar. Sem nada selecionado, seguem todos os grupos e componentes de nível superior.
2. Escolha {{ui:Exportar}} e, depois, {{ui:Volumetria para BimCraft…}}.
3. Escreva o {{ui:Nome do conjunto de opções}} e a {{ui:Altura do piso}}.
4. Verifique a lista: os pisos, a implantação, a área bruta de pavimento e o volume de cada opção.
5. Escolha **Enviar para o BimCraft** para abrir o BimCraft num novo separador com as opções, ou {{ui:Guardar como IFC}} para transferir o ficheiro e abri-lo lá.

No BimCraft, as opções aparecem listadas em "Massing options in the model", onde uma pode ser tornada na opção atual e desenvolvida em paredes e lajes.

## Como um sólido se torna numa massa

- **Pisos:** o número de pisos é a altura do sólido a dividir pela altura do piso, arredondada, e nunca menos de um. Os pisos partilham depois a altura do sólido por igual, por isso um bloco de 10 m com pisos de 3 m tem 3 pisos de 3.33 m.
- **Área de um piso:** é a área da secção horizontal do próprio sólido ao nível desse piso. Um bloco com recuos tem pisos superiores mais pequenos, e a área bruta de pavimento é a soma destes.
- **A implantação** é o contorno da secção imediatamente acima da base do sólido.
- **O volume** é o do próprio sólido.

No ficheiro IFC, cada opção é um proxy de elemento de edifício (a implantação elevada à altura do sólido), com um espaço por piso que transporta a área bruta desse piso. Todas as opções partilham um edifício, com tantos pisos quanto a opção mais alta.

## Formas simplificadas

Um bloco simples e vertical passa exatamente como foi modelado. Tudo o resto é enviado na mesma, e a lista indica porque é que a forma foi simplificada:

- **Os pisos não têm todos a dimensão da base** (recua ou inclina-se): a massa no BimCraft é o contorno da base elevado à altura total, mas as áreas dos pisos e o volume são os do próprio sólido.
- **O sólido não está fechado**: os pisos cuja secção não pode ser fechada não são medidos e contam como nada. Feche o sólido ({{ui:Informações da entidade}} indica "Solid: Yes") para obter valores completos.
- **A base tem mais do que um contorno**: é usado como implantação o maior.

## Bom saber

- {{ui:IFC para o BimCraft (.ifc)}} é uma exportação diferente: envia apenas formas e nomes, sem pisos nem áreas.
- Nada é enviado. O ficheiro é entregue ao separador do BimCraft neste computador.
