---
title: Importar um modelo .3dm
summary: Importe um ficheiro .3dm com as suas malhas, superfícies, curvas, blocos, camadas e cores; veja de onde vêm os triângulos e o que fica de fora.
keywords: 3dm, importar, nurbs, polissuperfície, brep, superfícies, malha de renderização, extrusão, curvas, blocos, camadas, etiquetas, cores, unidades, mudar, migrar
from: 3cf29879
---

O ModelCraft lê ficheiros `.3dm` com o seu próprio leitor, na própria página. Nada é enviado, e funciona sem ligação sempre que o ModelCraft funcione. Foram testados ficheiros guardados nos formatos das versões 5, 6, 7 e 8; os mais antigos (versões 2 a 4) deverão abrir também, mas ainda não foram experimentados.

## Importar o ficheiro

1. Clique em {{ui:Import}} no grupo {{ui:File}} (ou arraste o ficheiro `.3dm` para a vista 3D).
2. Escolha o ficheiro.

   A barra de estado diz "A ler chair.3dm…" enquanto lê, e depois o que entrou, por exemplo "Importado chair.3dm: 14 malhas (8330 faces), 8 curvas, 5 colocações de blocos, 3 camadas como etiquetas. Superfícies: 7 faces a partir das malhas guardadas no ficheiro, 29 trianguladas pelo CadCraft."

O modelo inteiro chega como um único grupo com o nome do ficheiro, selecionado, e a vista faz zoom para ele. Um {{key:Mod+Z}} tira tudo outra vez, incluindo as etiquetas.

## De onde vêm os triângulos

O ModelCraft trabalha com faces e malhas, por isso cada superfície do ficheiro entra como uma [malha](topic:meshes) de pequenos triângulos planos. Para cada face de uma polissuperfície (e de cada extrusão), o ModelCraft usa, por esta ordem:

1. **A malha de renderização guardada no ficheiro.** A maioria dos programas de modelação guarda a malha que mostrou no ecrã com cada superfície; quando existe, o ModelCraft usa-a tal como está.
2. **A sua própria triangulação**, quando o ficheiro não tem malha guardada: planos, superfícies NURBS, superfícies de revolução (esferas, cones, toros, formas de torno), curvas extrudidas e extrusões (com os seus furos e tampas), recortadas pelas arestas. As faces de uma polissuperfície partilham os pontos das arestas, por isso uma polissuperfície fechada entra como malha fechada. As áreas curvas são divididas até os triângulos ficarem dentro de cerca de 0.15 % do tamanho do objeto em relação à superfície real.
3. **Nada**, para uma face de um tipo de superfície que o ModelCraft ainda não lê. A barra de estado diz quantas faces são e de que tipo.

A parte "Superfícies:" da barra de estado diz quantas faces vieram de malhas guardadas e quantas o ModelCraft triangulou. As arestas dentro de uma face do ficheiro são suaves e as arestas entre duas faces são vincadas, por isso uma face curva sombreia de forma suave.

:::tip
Para as formas mais fiéis, guarde o ficheiro com as malhas de renderização no programa que o criou (normalmente é o padrão; uma opção "guardar pequeno" deixa-as de fora).
:::

## O que entra

- **Malhas** com as cores dos vértices e coordenadas de textura.
- **Polissuperfícies, superfícies e extrusões**, como descrito acima.
- **Curvas** (linhas, polilinhas, arcos, círculos, curvas NURBS e curvas unidas a partir delas) como [arestas](topic:curves), um grupo de arestas por camada.
- **Blocos** tornam-se [componentes](topic:groups-components): cada colocação de um bloco é uma colocação de um único componente, por isso editar uma cópia altera todas. Os blocos dentro de blocos são mantidos.
- **Camadas** tornam-se [etiquetas](topic:tags) com o nome completo da camada ("Furniture::Chairs"), ocultas quando a camada estava desligada. A colocação de cada objeto leva a etiqueta da sua camada.
- **Cores.** A cor de um objeto vem de onde o ficheiro indica: a sua própria cor, a da sua camada ou a cor base do seu material. Torna-se a pintura das suas faces.
- **Objetos ocultos entram ocultos**; {{ui:Unhide all}} mostra-os.
- **Unidades:** o ficheiro indica a sua unidade; o modelo entra com o tamanho real.

## O que fica de fora (e é indicado)

A parte "Notas:" da barra de estado nomeia tudo o que não entrou, com as quantidades:

- pontos e nuvens de pontos, texto, pontos de texto, cotas, chamadas, hachuras, luzes, planos de corte e detalhes de layout;
- objetos SubD: primeiro, transforme-os em malhas ou polissuperfícies no programa que criou o ficheiro;
- faces em superfícies deslocadas e outros tipos de superfície que o ModelCraft ainda não lê, quando o ficheiro não guardou malha para elas;
- blocos ligados a partir de outros ficheiros (só o ficheiro que importa é lido);
- extrusões com extremidades oblíquas (em meia-esquadria) entram com extremidades retas.

As texturas dos materiais, as definições de renderização, as vistas com nome, os grupos e o texto do utilizador não são lidos; um material dá apenas a sua cor base.

## Limites

Ficheiros até 300 MB. Um ficheiro danificado indica o problema e não acrescenta nada; um objeto que não pode ser lido fica de fora e é contado, e o resto entra.
