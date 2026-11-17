---
title: Salvar, abrir e exportar USD
summary: Salve o modelo inteiro como USD (.usda, .usdc ou .usdz) sem perder nada, abra-o novamente e importe cenas USD de outros programas 3D.
keywords: usd, usda, usdc, usdz, openusd, universal scene description, salvar como, exportar, importar, montagem de cena, archviz, openpbr, materialx, pacote
from: 73d299f9
---

USD é um formato de cena que muitos programas 3D, de renderização e de archviz compartilham. O ModelCraft grava e lê USD. `.modelcraft` continua sendo o formato que {{ui:Salvar}} grava; USD é uma opção em {{ui:Salvar como}}.

## Salvar como USD

1. Escolha {{ui:Salvar como}} no grupo {{ui:Arquivo}} (ou pressione {{key:Mod+Shift+S}}).
2. Escolha o formato: {{ui:Texto (.usda)}} (legível, bom para controle de versão), {{ui:Binário (.usdc)}} (o menor e o mais rápido) ou {{ui:Pacote (.usdz)}} (um único arquivo com as texturas dentro).
3. O arquivo é baixado (no aplicativo para desktop, você escolhe onde ele é salvo).

As mesmas opções estão em {{ui:Exportar}} › {{ui:USD (.usda, .usdc, .usdz)…}}.

## Nada se perde

Abra um arquivo USD salvo pelo ModelCraft e você recebe o modelo de volta exatamente: faces com seus furos, arestas suaves e ocultas, curvas, grupos e componentes, etiquetas, cenas, cotas, guias, planos de corte, luzes, texturas importadas e a vista. Outros programas veem o mesmo modelo como malhas, grupos, protótipos para componentes, materiais, luzes e câmeras.

:::note
Se outro programa alterar a geometria de um grupo ou componente, o ModelCraft abre essa parte como uma malha com a alteração mantida, e informa quantas partes leu dessa forma. Uma inserção movida ou apagada em outro programa continua movida ou apagada.
:::

## Abrir ou importar USD de outra pessoa

- {{ui:Abrir}} um arquivo `.usd`, `.usda`, `.usdc` ou `.usdz` para começar um modelo a partir dele.
- {{ui:Importar}} um deles para adicioná-lo ao modelo aberto. Coloque junto com ele os arquivos a que ele se refere (outras camadas, texturas).

As malhas entram com suas normais, coordenadas UV e cores; a geometria compartilhada entra como componentes; os materiais, como cores de pintura; as luzes, como luzes; e as câmeras, como cenas. Tudo em metros, com Z para cima, qualquer que sejam a unidade e o eixo vertical do arquivo.

## Ainda não

Animação, esqueletos e grafos de nós MaterialX ainda não são lidos nem gravados como USD. As animações e os materiais de nós próprios do ModelCraft são mantidos em um arquivo USD que ele salvou, para o ModelCraft abrir de novo, mas outros programas não os veem. Camadas a que um arquivo se refere e que o ModelCraft não consegue ler (por exemplo, um documento MaterialX) ficam de fora, com uma nota.
