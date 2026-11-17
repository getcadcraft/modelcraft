---
title: Exportar um modelo para outros programas
summary: Escolher a exportação certa para renderização, a web, impressão 3D, BIM e BimCraft, e verificar o que cada uma mantém.
keywords: imprimir, 3mf, pdf, papel, imagem, png, fotografia, captura de ecrã, renderizar, guardar vista, exportar, partilhar, render, renderização, gltf, glb, collada, dae, obj, stl, impressão 3D, ifc, bim, bimcraft, enviar, outro software
from: 9e13e80d
---

Exportar cria uma cópia do modelo noutro formato. Guarde também o seu ficheiro `.modelcraft`: é o único ficheiro que mantém tudo, e o único que o ModelCraft abre diretamente.

## Exportar

1. Guarde primeiro ({{key:Mod+S}}), para que o seu ficheiro de trabalho fique seguro.
2. Clique em {{ui:Export}} no grupo {{ui:File}}.
3. Escolha o formato. O navegador transfere-o, com o nome do modelo.

Exporta-se o modelo inteiro. Para exportar apenas uma parte, guarde, apague o resto, exporte, e depois anule ou reabra.

## Qual formato

| Quer | Escolha | Notas |
|---|---|---|
| Abri-lo noutro modelador 3D | {{ui:Collada (.dae)}} | Mantém grupos, grupos aninhados, componentes (partilhados, não copiados), nomes e cores. Z para cima, metros. |
| Renderizá-lo, ou usá-lo num programa de visualização | {{ui:OBJ (.obj)}} ou {{ui:glTF binary (.glb)}} | OBJ é o formato mais amplamente lido; escreve a colocação de cada grupo como um objeto separado, mas não tem cores nem componentes partilhados. glTF mantém componentes e cores. |
| Publicá-lo na web, num motor de jogo ou em RA | {{ui:glTF binary (.glb)}} | Um ficheiro com tudo lá dentro. |
| Imprimi-lo em 3D | {{ui:Check for 3D printing (STL or 3MF)…}} | Verifica se o modelo está fechado e se as faces estão voltadas para o lado certo, e depois escreve STL ou 3MF em milímetros. Veja [Preparar um modelo para impressão 3D](topic:print-3d). {{ui:STL for printing (.stl, millimeters)}} escreve o modelo inteiro sem a verificação. |
| Abri-lo no BimCraft ou noutro programa BIM | {{ui:IFC for BimCraft (.ifc)}} | Cada grupo ou componente de topo torna-se um elemento de edifício. |

A barra de estado confirma cada exportação, por exemplo «Exportado House.stl (milímetros).» ou «Exportado House.dae (Collada 1.4.1, Z para cima, metros; os componentes mantêm-se partilhados).»

## Antes de exportar

- **Agrupe os seus objetos.** Collada, glTF e IFC mantêm grupos e componentes como objetos separados. A geometria solta sai como um só bloco; em IFC torna-se um elemento chamado «Geometria solta».
- **Dê-lhes nomes.** Os nomes de grupos e componentes entram no Collada e no IFC, por isso uma parede chamada «Parede norte» chega como «Parede norte».
- **Verifique a direção das faces.** As faces com azul-acinzentado no exterior ficarão viradas para dentro na exportação. Corrija-as com {{ui:Reverse face}} (veja [Apagar e limpar](topic:erase#a-face-facing-the-wrong-way)).
- **Para a impressão,** faça com que as peças sejam sólidos fechados: selecione cada grupo e verifique se {{ui:Entity info}} diz «Sólido: Sim». Depois escale o modelo para o tamanho impresso, ou escale-o no software da impressora.

## Enviar um modelo para o BimCraft

1. Faça de cada parte do edifício um grupo ou componente e dê-lhe um nome.
2. Escolha {{ui:Export}}, depois {{ui:IFC for BimCraft (.ifc)}}.
3. Abra o ficheiro `.ifc` transferido no BimCraft.

Para a volumetria de conceito, use {{ui:Export}} › {{ui:Massing to BimCraft…}} em vez disso: cada grupo segue como uma opção de volumetria com pisos, áreas de piso e volume. Veja [Enviar volumetria para o BimCraft](topic:massing-to-bimcraft).

A exportação IFC simples não cria nenhuma ligação direta entre as duas aplicações. O IFC tem um piso, e cada elemento é um proxy genérico de elemento de edifício, sem tipo nem propriedades: leva apenas a forma e o nome. Os grupos fechados tornam-se formas sólidas; os abertos tornam-se superfícies.

## Linhas sem faces

As arestas que não fazem parte de nenhuma face (linhas tipo guia, uma planta de implantação importada) vão para OBJ e Collada como linhas. O glTF e o STL não têm onde as pôr e deixam-nas de fora. As guias e as cenas não são exportadas para nenhum formato.

## Guardar a vista como imagem

{{ui:Export}} › {{ui:Image of the view (.png)}} guarda exatamente o que a vista 3D mostra, com o tamanho que tem no ecrã. {{ui:Image at twice the size (.png)}} guarda-a com o dobro da largura e o dobro da altura (para impressão ou um diapositivo nítido), com as cotas e as marcas redesenhadas a esse tamanho em vez de esticadas.

Para uma imagem que pareça luz do dia (céu, sol, sombras suaves, vidro), use {{ui:Export}} › {{ui:Render a picture…}} em vez disso: veja [Renderizar uma imagem](topic:render).

Para uma imagem limpa, ative primeiro a [vista de apresentação](topic:styles-shadows#presentation-view) ({{key:Shift+P}}): os eixos, as guias, os contornos de corte e a seleção ficam de fora. Defina a câmara, o estilo e as sombras como quiser, ou vá para uma [cena](topic:scenes); para guardar um filme em movimento das suas cenas, use {{ui:Export animation}} no painel {{ui:Scenes}}.

## Imprimir a vista, ou guardá-la como PDF

- {{ui:Export}} › {{ui:PDF of the view (.pdf)}} guarda um PDF de uma página: a vista com o dobro do seu tamanho no ecrã, com as suas cotas, numa folha A4 (Letter quando o modelo está em pés e polegadas), na horizontal, com uma linha por baixo com o nome do ficheiro, a data e a unidade.
- {{ui:Export}} › {{ui:Print the view…}} coloca a mesma página na caixa de diálogo de impressão do seu navegador. Escolha uma impressora, ou «Guardar como PDF».

A página mostra a vista tal como está: não há escala numa vista em perspetiva. Para um desenho à escala, desligue {{ui:Perspective}} e olhe de {{ui:Top}} ou {{ui:Front}}, e acrescente [cotas](topic:dimensions) para as medidas que importam. A [vista de apresentação](topic:styles-shadows#presentation-view) deixa de fora os eixos, as guias e a seleção; as cotas ficam.
