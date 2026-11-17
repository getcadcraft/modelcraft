---
title: A vista em direto
summary: Uma janela ao lado do modelo que o mostra com o aspeto em tempo real, com sol e sombras, e que acompanha cada alteração feita; percorra-o a pé e defina a hora do dia e o mês.
keywords: partilhar, panorama, 360, visita, visita virtual, visualizador autónomo, visualizador offline, enviar a um cliente, vídeo, vídeo de percurso, dispersão, dispersar, relva, prado, floresta, rochas, plantas, árvores, multidão, pintar plantas, vista em direto, tempo real, renderização em tempo real, percurso, percorrer a pé, primeira pessoa, apresentação, cliente, segundo ecrã, segunda janela, monitor, hora do dia, sol, estação, mês, sombras, oclusão ambiente, reflexos, luz refletida, iluminação global, webgpu, webgl
from: fca3b0d6
---

{{ui:Exportar}} › {{ui:Vista em direto}} abre um painel sobre a aplicação que mostra o modelo com o aspeto em tempo real: o céu e o sol a partir do local e da data do modelo, as sombras do sol, os aspetos e materiais que atribuiu às faces, as lâmpadas e a luz refletida nas paredes e nos pavimentos. Acompanha o que faz: rode a vista e ele também roda; altere o modelo e mostra a alteração pouco depois. Nada é enviado.

## Abrir

1. Escolha {{ui:Exportar}} › {{ui:Vista em direto}}. O painel abre no canto inferior direito.
2. Arraste a barra de título para o mover e puxe um canto para o aumentar.
3. {{ui:Nova janela}} move-o para uma janela própria, para um segundo ecrã. {{ui:Exportar}} › {{ui:Vista em direto numa nova janela}} abre-o logo aí. Se o navegador bloquear janelas pop-up, abre-se como painel.
4. {{ui:Fechar}} fecha-o.

## Controlos

| Controlo | O que faz |
|---|---|
| {{ui:Seguir a vista}} | Ligada: a vista em direto olha para onde olha a vista do ModelCraft. Ao caminhar, desliga-se |
| {{ui:Caminhar}} | Percorre o modelo a pé (ver abaixo) |
| {{ui:Gravidade}} | Ao caminhar: anda sobre os pavimentos e sobe escadas. Desligada: voa |
| {{ui:Hora}} | A hora do dia, das 05:00 às 21:00. O sol move-se ao arrastar |
| {{ui:Mês}} | O mês (o dia 21 do mês), para ver o sol no inverno e no verão |
| {{ui:Qualidade}} | {{ui:Para este computador}} (o que a [máquina](topic:your-machine) suporta), ou {{ui:Baixa}}, {{ui:Média}} ou {{ui:Alta}} |

A linha inferior indica o que desenha a vista (WebGPU ou WebGL 2), a qualidade e a luz refletida.

## Percorrer o modelo a pé

1. Rode a vista principal para onde quer ficar e escolha {{ui:Caminhar}}. Fica de pé sobre o pavimento abaixo do ponto de vista, com 1.6 m de altura.
2. Clique na vista em direto e use {{key:W}} {{key:A}} {{key:S}} {{key:D}} ou as setas. Mantenha {{key:Shift}} premida para correr. Arraste para olhar à volta.
3. Os degraus até 40 cm são subidos (escadas); tudo o que for mais alto é uma parede. As paredes bloqueiam o movimento, e desliza-se ao longo delas.
4. Com {{ui:Gravidade}} desligada, voa: {{key:E}} sobe, {{key:Q}} desce.
5. {{key:Esc}} para de caminhar.

## Dispersar plantas, rochas e pessoas

{{ui:Dispersão}} na barra da vista em direto abre o painel de dispersão ao lado da imagem. Um conjunto de dispersão espalha elementos da biblioteca de entourage (árvores, arbustos, relva, flores, rochas, pessoas, carros) por parte do modelo. Os elementos são desenhados apenas na vista em direto: não são geometria do modelo, e a vista principal não os mostra.

1. **Preencher faces:** selecione faces (ou um grupo, como um terreno) no ModelCraft e escolha {{ui:Preencher seleção}}. O conjunto cobre-as.
2. **Pintar:** escolha {{ui:Pintar}} e arraste sobre a vista em direto. Com faces selecionadas, a pintura aplica-se só a elas; sem nada selecionado, aplica-se a tudo o que estiver sob o pincel, incluindo o solo. {{ui:Tamanho do pincel}} define o pincel; {{ui:Borracha}} retira as manchas pintadas.
3. Marque o que dispersar. O número ao lado de cada um é o respetivo peso: 3 e 1 dá três do primeiro por cada um do segundo.

| Controlo | O que faz |
|---|---|
| {{ui:Por m²}} | Quantos elementos por cada metro quadrado |
| {{ui:Afastamento (m)}} | Nenhum elemento mais perto do que isto de outros objetos, nem sob um telhado ou uma mesa. 0 desliga-a |
| {{ui:Rotação (°)}} | Quanto cada elemento é rodado ao acaso em torno da vertical |
| {{ui:Inclinação máxima (°)}} | Sem elementos onde a superfície for mais inclinada |
| {{ui:Tamanho}} | O tamanho mínimo e máximo, como fator do tamanho do próprio elemento |
| {{ui:Altura de, até (m)}} | Só entre estas alturas (em branco = qualquer) |
| {{ui:Inclinar com a superfície}} | 0 mantém os elementos na vertical; 1 põe-nos perpendiculares a um declive |
| {{ui:Semente}}, {{ui:Baralhar}} | A mesma semente dá sempre a mesma dispersão; Baralhar escolhe outra |

Os conjuntos são guardados no ficheiro .modelcraft e seguem as faces que cobrem quando as altera. O número máximo de elementos que a vista em direto desenha depende do nível de [a máquina](topic:your-machine): 20 000 para {{ui:Só processador}}, 100 000 para {{ui:Placa gráfica, básico}}, um milhão para {{ui:Placa gráfica, alto}}. O painel indica quantos são colocados e quantos a densidade pede: colocam-se menos quando o limite é atingido, ou onde os objetos os afastam. Os elementos perto da câmara são desenhados como são; os distantes, como formas simples nas respetivas cores.

:::note
Os elementos dispersos estão na vista em direto (e no respetivo percurso, nos panoramas e no visualizador autónomo). Renderizar uma imagem ainda não os desenha.
:::

## Partilhar: panoramas, visitas, um visualizador, um vídeo

{{ui:Partilhar}} na barra da vista em direto cria ficheiros a partir dela. Tudo é criado neste computador; nada é enviado.

| Escolha | O que obtém |
|---|---|
| {{ui:Panorama de 360°}} | Uma imagem de 360° a partir de onde está a vista (ou onde estiver a caminhar), em PNG equirretangular, que os visualizadores de panoramas e a maioria dos sites de fotografia abrem |
| {{ui:Adicionar este ponto à visita}}, depois {{ui:Guardar a visita}} | Uma página web com um panorama em cada ponto e setas para os pontos que cada um vê (uma parede pelo meio oculta a seta) |
| {{ui:Guardar um visualizador}} | Uma página web com o modelo neste aspeto em tempo real: rode-o, percorra-o a pé e salte para as cenas guardadas. Abre-se offline num navegador com WebGPU ou WebGL 2, a partir de uma pasta, de uma pen USB ou de um e-mail, sem instalação nem conta, e não carrega nada da internet |
| {{ui:Vídeo do percurso}} | O percurso da câmara na linha temporal (ou as cenas guardadas por ordem) como vídeo neste aspeto em tempo real, com o tamanho da vista em direto: WebM ou MP4 quando o navegador os consegue criar, ou então imagens numeradas num ZIP |

A dimensão do panorama segue a qualidade: 1024, 2048 ou 4096 pixels de largura em Baixa, Média e Alta. Um ficheiro de visualizador tem cerca de 5 MB, mais o modelo.

:::note
A visita e o visualizador são feitos para mostrar, não para editar: mantêm o modelo tal como está quando os guarda.
:::

## Qualidade

| | Baixa | Média | Alta |
|---|---|---|---|
| Sombras do sol | um mapa de sombras | três cascatas | quatro cascatas |
| Oclusão ambiente (sombras de contacto) | | ✓ | ✓, mais fina |
| Reflexos no metal | | | ✓ |
| Bloom (quando Renderizar uma imagem o define) | | ✓ | ✓ |
| Arestas suavizadas | FXAA | ao longo de vários fotogramas (TAA) | ao longo de vários fotogramas (TAA) |
| Luz refletida | grosseira | mais fina | a mais fina |

{{ui:Para este computador}} escolhe Baixa num computador sem placa gráfica utilizável, Média com um chip gráfico integrado, Alta com uma placa gráfica separada. Baixa destina-se a um portátil de 8 GB sem placa gráfica.

## Luz refletida

A luz refletida numa parede iluminada pelo sol para o pavimento, e o interior mais escuro de uma divisão, são calculados pelo mesmo traçador de caminhos que produz as [imagens renderizadas](topic:render): renderiza um pequeno panorama em pontos através do modelo, em segundo plano em cada núcleo do processador. Enquanto trabalha, a linha inferior indica {{ui:Luz refletida: 40 %}}; quando fica pronto, a vista incorpora-a. Após uma alteração, recomeça.

:::note
Trata-se de uma aproximação para uma vista em direto, e não de uma imagem renderizada: os pequenos detalhes entre os pontos recebem a luz refletida dos pontos mais próximos. Para uma imagem final, use [Renderizar uma imagem](topic:render).
:::

## Luminosidade e cores

A vista em direto usa a mesma luminosidade, equilíbrio de brancos, contraste e transformação de vista (ACES, AgX, filmic ou padrão) que [Renderizar uma imagem](topic:render): defina-os aí e a vista em direto segue-os.

:::note
Os navegadores são diferentes. Onde o navegador tem WebGPU (Chrome e Edge no Windows, macOS e ChromeOS, Safari 26), a vista em direto usa-o; nos restantes casos (a maioria dos navegadores no Linux, sistemas Apple mais antigos) usa WebGL 2 e tem o mesmo aspeto.
:::
