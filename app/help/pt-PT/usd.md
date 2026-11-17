---
title: Guardar, abrir e exportar USD
summary: Guarde o modelo inteiro como USD (.usda, .usdc ou .usdz) sem perder nada, volte a abri-lo e importe cenas USD de outros programas 3D.
keywords: usd, usda, usdc, usdz, openusd, universal scene description, guardar como, exportar, importar, montagem de cena, archviz, openpbr, materialx, pacote
from: 73d299f9
---

USD é um formato de cenas que muitos programas 3D, de renderização e de archviz partilham. O ModelCraft escreve e lê USD. `.modelcraft` continua a ser o formato que {{ui:Guardar}} escreve; USD é uma escolha em {{ui:Guardar como}}.

## Guardar como USD

1. Escolha {{ui:Guardar como}} no grupo {{ui:Ficheiro}} (ou prima {{key:Mod+Shift+S}}).
2. Escolha o formato: {{ui:Texto (.usda)}} (legível, bom para controlo de versões), {{ui:Binário (.usdc)}} (o mais pequeno e o mais rápido) ou {{ui:Pacote (.usdz)}} (um único ficheiro com as texturas dentro).
3. O ficheiro é transferido (na aplicação para computador, escolhe onde fica guardado).

As mesmas opções estão em {{ui:Exportar}} › {{ui:USD (.usda, .usdc, .usdz)…}}.

## Nada se perde

Abra um ficheiro USD que o ModelCraft guardou e obtém o modelo exatamente como estava: faces com os seus furos, arestas suaves e ocultas, curvas, grupos e componentes, etiquetas, cenas, cotas, guias, planos de corte, luzes, texturas importadas e a vista. Outros programas veem o mesmo modelo como malhas, grupos, protótipos para componentes, materiais, luzes e câmaras.

:::note
Se outro programa alterar a geometria de um grupo ou componente, o ModelCraft abre essa parte como malha, com a alteração mantida, e indica quantas partes leu dessa forma. Uma colocação movida ou apagada noutro programa mantém-se movida ou apagada.
:::

## Abrir ou importar USD de outra pessoa

- {{ui:Abrir}} um ficheiro `.usd`, `.usda`, `.usdc` ou `.usdz` para começar um modelo a partir dele.
- {{ui:Importar}} um para o acrescentar ao modelo aberto. Arraste também os ficheiros a que ele se refere (outras camadas, texturas) juntamente com ele.

As malhas entram com as suas normais, coordenadas UV e cores; a geometria partilhada entra como componentes, os materiais como cores de pintura, as luzes como luzes e as câmaras como cenas, em metros e com Z para cima, quaisquer que sejam as unidades e o eixo vertical do ficheiro.

## Ainda não

A animação, os esqueletos e os grafos de nós MaterialX ainda não são lidos nem escritos como USD. As animações e os materiais de nós do próprio ModelCraft ficam guardados num ficheiro USD que ele escreveu, para o ModelCraft voltar a abrir, mas os outros programas não os veem. As camadas a que um ficheiro se refere e que o ModelCraft não consegue ler (por exemplo, um documento MaterialX) ficam de fora, com uma nota.
