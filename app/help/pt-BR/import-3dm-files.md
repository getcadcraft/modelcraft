---
title: Importar um modelo .3dm
summary: Importe um arquivo .3dm com suas malhas, superfícies, curvas, blocos, camadas e cores; de onde vêm os triângulos e o que fica de fora.
keywords: 3dm, importar, nurbs, polissuperfície, brep, superfícies, malha de renderização, extrusão, curvas, blocos, camadas, etiquetas, cores, unidades, trocar, migrar
from: 3cf29879
---

O ModelCraft lê arquivos `.3dm` com o próprio leitor, na página. Nada é enviado, e funciona offline sempre que o ModelCraft funciona. Arquivos salvos nos layouts das versões 5, 6, 7 e 8 foram testados; os mais antigos (versões 2 a 4) devem abrir também, mas ainda não foram testados.

## Importar o arquivo

1. Clique em {{ui:Importar}} no grupo {{ui:Arquivo}} (ou solte o arquivo `.3dm` na vista 3D).
2. Escolha o arquivo.

   A barra de status diz "Lendo chair.3dm…" enquanto lê, e depois o que foi importado, por exemplo "Importado chair.3dm: 14 malhas (8330 faces), 8 curvas, 5 posicionamentos de blocos, 3 camadas como etiquetas. Superfícies: 7 faces das malhas salvas no arquivo, 29 tesseladas pelo CadCraft."

O modelo inteiro chega como um grupo com o nome do arquivo, selecionado, e a vista dá zoom nele. Um {{key:Mod+Z}} remove tudo de novo, inclusive as etiquetas.

## De onde vêm os triângulos

O ModelCraft modela com faces e malhas, então toda superfície do arquivo chega como uma [malha](topic:meshes) de pequenos triângulos planos. Para cada face de uma polissuperfície (e cada extrusão), o ModelCraft usa, nesta ordem:

1. **A malha de renderização salva no arquivo.** A maioria dos programas de modelagem salva a malha que mostrou na tela com cada superfície; quando ela existe, o ModelCraft a usa como está.
2. **Sua própria tesselação**, quando o arquivo não tem malha salva: planos, superfícies NURBS, superfícies de revolução (esferas, cones, toros, formas de torno), curvas extrudadas e extrusões (com seus furos e tampas), recortadas pelas arestas. Faces de uma mesma polissuperfície compartilham os pontos de suas arestas, então uma polissuperfície fechada chega como uma malha fechada. Áreas curvas são divididas até que os triângulos fiquem dentro de cerca de 0.15 % do tamanho do objeto em relação à superfície real.
3. **Nada**, para uma face de um tipo de superfície que o ModelCraft ainda não lê. A barra de status diz quantas faces, e de que tipo.

A parte "Superfícies:" da barra de status diz quantas faces vieram de malhas salvas e quantas o ModelCraft tesselou. Arestas dentro de uma mesma face do arquivo são suaves, e arestas entre duas faces são vivas, então uma face curva sombreia de forma suave.

:::tip
Para as formas mais fiéis, salve o arquivo com suas malhas de renderização no programa que o criou (normalmente é o padrão; uma opção "salvar pequeno" as deixa de fora).
:::

## O que entra

- **Malhas** com suas cores de vértice e coordenadas de textura.
- **Polissuperfícies, superfícies e extrusões**, como descrito acima.
- **Curvas** (linhas, polilinhas, arcos, círculos, curvas NURBS e curvas unidas a partir delas) como [arestas](topic:curves), um grupo de arestas por camada.
- **Blocos** viram [componentes](topic:groups-components): cada inserção de um bloco é uma inserção de um único componente, então editar uma cópia altera todas. Blocos dentro de blocos são mantidos.
- **Camadas** viram [etiquetas](topic:tags) com o nome completo da camada ("Furniture::Chairs"), ocultas quando a camada estava desligada. A inserção de cada objeto carrega a etiqueta da sua camada.
- **Cores.** A cor de um objeto vem de onde o arquivo indica: a própria cor, a da sua camada ou a cor base do seu material. Ela se torna a pintura de suas faces.
- **Objetos ocultos chegam ocultos**; {{ui:Reexibir tudo}} os mostra.
- **Unidades:** o arquivo informa sua unidade; o modelo entra no seu tamanho real.

## O que fica de fora (e é informado)

A parte "Notas:" da barra de status nomeia tudo o que não entrou, com a quantidade:

- pontos e nuvens de pontos, textos, pontos de texto, cotas, linhas de chamada, hachuras, luzes, planos de corte e detalhes de layout;
- objetos SubD: converta-os em malhas ou polissuperfícies no programa que criou o arquivo antes;
- faces em superfícies deslocadas e outros tipos de superfície que o ModelCraft ainda não lê, quando o arquivo não salvou malha para elas;
- blocos vinculados de outros arquivos (só o arquivo que você importa é lido);
- extrusões com extremidades inclinadas (em meia-esquadria) entram com extremidades retas.

Texturas de material, configurações de renderização, vistas nomeadas, grupos e textos do usuário não são lidos; um material fornece apenas a cor base.

## Limites

Arquivos de até 300 MB. Um arquivo danificado informa o problema e não adiciona nada; um objeto que não pode ser lido é deixado de fora e contado, e o restante entra.
