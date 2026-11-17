---
title: Exportar um modelo para outros programas
summary: Escolha a exportação certa para renderização, a web, impressão 3D, BIM e BimCraft, e confira o que cada uma mantém.
keywords: imprimir, 3mf, pdf, papel, imagem, png, figura, captura de tela, renderizar, salvar vista, exportar, compartilhar, render, renderização, gltf, glb, collada, dae, obj, stl, impressão 3D, ifc, bim, bimcraft, enviar, outros programas
from: 9e13e80d
---

Exportar cria uma cópia do modelo em outro formato. Mantenha também o seu arquivo `.modelcraft`: ele é o único que guarda tudo, e o único que o ModelCraft abre diretamente.

## Exportar

1. Salve primeiro ({{key:Mod+S}}), para que o seu arquivo de trabalho fique seguro.
2. Clique em {{ui:Exportar}} no grupo {{ui:Arquivo}}.
3. Escolha o formato. O navegador baixa o arquivo, com o nome do modelo.

O modelo inteiro é exportado. Para exportar uma parte, salve, apague o restante, exporte e depois desfaça ou reabra.

## Qual formato

| Você quer | Escolha | Observações |
|---|---|---|
| Abri-lo em outro modelador 3D | {{ui:Collada (.dae)}} | Mantém grupos, grupos aninhados, componentes (compartilhados, não copiados), nomes e cores. Z para cima, metros. |
| Renderizá-lo, ou usá-lo em um programa de visualização | {{ui:OBJ (.obj)}} ou {{ui:glTF binário (.glb)}} | OBJ é o mais amplamente lido; ele grava cada posicionamento de grupo como um objeto separado, mas não tem cores nem componentes compartilhados. glTF mantém componentes e cores. |
| Colocá-lo na web, em um motor de jogos ou em RA | {{ui:glTF binário (.glb)}} | Um arquivo com tudo dentro. |
| Imprimi-lo em 3D | {{ui:Verificar para impressão 3D (STL ou 3MF)…}} | Verifica se o modelo está fechado e voltado para o lado certo, depois grava STL ou 3MF em milímetros. Veja [Preparar um modelo para impressão 3D](topic:print-3d). {{ui:STL para impressão (.stl, milímetros)}} grava o modelo inteiro sem a verificação. |
| Abri-lo no BimCraft ou em outro programa BIM | {{ui:IFC para o BimCraft (.ifc)}} | Cada grupo ou componente de nível superior vira um elemento de construção. |

A barra de status confirma cada exportação, por exemplo "Exportado House.stl (milímetros)." ou "Exportado House.dae (Collada 1.4.1, Z para cima, metros; componentes continuam compartilhados)."

## Antes de exportar

- **Agrupe os seus objetos.** Collada, glTF e IFC mantêm grupos e componentes como objetos separados. Geometria solta sai como um único bloco; no IFC ela vira um elemento chamado "Loose geometry".
- **Dê nomes a eles.** Os nomes de grupos e componentes entram no Collada e no IFC, então uma parede chamada "Parede norte" chega como "Parede norte".
- **Confira a direção das faces.** Faces em cinza-azulado do lado de fora vão apontar para dentro na exportação. Corrija-as com {{ui:Inverter face}} (veja [Apagar e limpar](topic:erase#a-face-facing-the-wrong-way)).
- **Para impressão,** deixe as peças como sólidos fechados: selecione cada grupo e confira se {{ui:Informações da entidade}} diz "Sólido: Sim". Depois, dimensione o modelo para o tamanho impresso, ou faça isso no software da impressora.

## Enviar um modelo para o BimCraft

1. Transforme cada parte da construção em um grupo ou componente e dê um nome a ele.
2. Escolha {{ui:Exportar}}, depois {{ui:IFC para o BimCraft (.ifc)}}.
3. Abra o arquivo `.ifc` baixado no BimCraft.

Para volumetria conceitual, use {{ui:Exportar}} › {{ui:Volumetria para BimCraft…}} no lugar: cada grupo segue como uma opção de volumetria, com pavimentos, áreas de piso e volume. Veja [Enviar volumetria para o BimCraft](topic:massing-to-bimcraft).

A exportação IFC simples não tem ligação direta entre os dois aplicativos. O IFC tem um pavimento, e cada elemento é um building element proxy genérico, sem tipo nem propriedades: ele carrega apenas forma e nome. Grupos fechados viram formas sólidas; os abertos viram superfícies.

## Linhas sem faces

Arestas que não fazem parte de nenhuma face (linhas tipo guia, uma planta de implantação importada) vão para OBJ e Collada como linhas. glTF e STL não têm lugar para elas e as deixam de fora. Guias e cenas não são exportadas para nenhum formato.

## Salvar a vista como imagem

{{ui:Exportar}} › {{ui:Imagem da vista (.png)}} salva exatamente o que a vista 3D mostra, no tamanho que aparece na tela. {{ui:Imagem em tamanho dobrado (.png)}} salva com o dobro da largura e o dobro da altura (para impressão ou um slide nítido), com cotas e marcas redesenhadas nesse tamanho, em vez de esticadas.

Para uma imagem que pareça luz do dia (céu, sol, sombras suaves, vidro), use {{ui:Exportar}} › {{ui:Renderizar imagem…}}: veja [Renderizar uma imagem](topic:render).

Para uma imagem limpa, ative antes a [vista de apresentação](topic:styles-shadows#presentation-view) ({{key:Shift+P}}): os eixos, as guias, os contornos de corte e a seleção ficam de fora. Ajuste a câmera, o estilo e as sombras do jeito que quiser, ou vá para uma [cena](topic:scenes); para salvar um filme em movimento das suas cenas, use {{ui:Exportar animação}} no painel {{ui:Cenas}}.

## Imprimir a vista ou salvá-la como PDF

- {{ui:Exportar}} › {{ui:PDF da vista (.pdf)}} salva um PDF de uma página: a vista com o dobro do tamanho na tela, com as suas cotas, em uma página A4 (Letter quando o modelo está em pés e polegadas), na horizontal, com uma linha embaixo informando o nome do arquivo, a data e a unidade.
- {{ui:Exportar}} › {{ui:Imprimir a vista…}} coloca a mesma página na caixa de diálogo de impressão do navegador. Escolha uma impressora, ou "Salvar como PDF".

A página mostra a vista como ela está: não há escala em uma vista em perspectiva. Para um desenho em escala, desative {{ui:Perspectiva}} e olhe de {{ui:Superior}} ou {{ui:Frontal}}, e adicione [cotas](topic:dimensions) para as medidas que importam. A [vista de apresentação](topic:styles-shadows#presentation-view) deixa de fora os eixos, as guias e a seleção; as cotas permanecem.
