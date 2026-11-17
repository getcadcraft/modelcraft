---
title: A vista em tempo real
summary: Uma janela ao lado do modelo que o mostra com a aparência em tempo real, com sol e sombras, e acompanha cada alteração que você faz; percorra-o e defina a hora do dia e o mês.
keywords: compartilhar, panorama, 360, tour, tour virtual, visualizador independente, visualizador offline, enviar ao cliente, vídeo, vídeo de percurso, espalhar, espalhamento, grama, campo, floresta, rochas, plantas, árvores, multidão, pintar plantas, vista em tempo real, tempo real, renderização em tempo real, percurso, caminhar, primeira pessoa, apresentação, cliente, segunda tela, segunda janela, monitor, hora do dia, sol, estação, mês, sombras, oclusão ambiente, reflexos, luz refletida, iluminação global, webgpu, webgl
from: fca3b0d6
---

{{ui:Export}} › {{ui:Live view}} abre um painel sobre o aplicativo que mostra o modelo com a aparência em tempo real: o céu e o sol a partir do local e da data do seu modelo, as sombras do sol, as aparências e os materiais que você deu às faces, as lâmpadas e a luz refletida nas paredes e nos pisos. Ele acompanha o que você faz: gire a vista e ele também gira; altere o modelo e ele mostra a mudança logo depois. Nada é enviado.

## Abrir

1. Escolha {{ui:Export}} › {{ui:Live view}}. O painel abre no canto inferior direito.
2. Arraste a barra de título para mover; puxe o canto para aumentar.
3. {{ui:New window}} move o painel para uma janela própria, para uma segunda tela. {{ui:Export}} › {{ui:Live view in a new window}} o abre ali diretamente. Se o navegador bloquear janelas pop-up, ele abre como painel.
4. {{ui:Close}} fecha.

## Os controles

| Controle | O que faz |
|---|---|
| {{ui:Follow the view}} | Ligado: a vista em tempo real olha para onde olha a vista do ModelCraft. Caminhar o desliga |
| {{ui:Walk}} | Percorre o modelo (abaixo) |
| {{ui:Gravity}} | Ao caminhar: fica sobre os pisos e sobe escadas. Desligado: voa |
| {{ui:Time}} | A hora do dia, de 05:00 a 21:00. O sol se move enquanto você arrasta |
| {{ui:Month}} | O mês (no dia 21 dele), para ver o sol no inverno e no verão |
| {{ui:Quality}} | {{ui:For this computer}} (o que [a sua máquina](topic:your-machine) recebe), ou {{ui:Low}}, {{ui:Medium}} ou {{ui:High}} |

A linha inferior informa o que desenha a vista (WebGPU ou WebGL 2), a qualidade e a luz refletida.

## Percorrer o modelo

1. Gire a vista principal para onde quer ficar e escolha {{ui:Walk}}. Você fica sobre o piso abaixo do ponto de vista, com 1.6 m de altura.
2. Clique na vista em tempo real e use {{key:W}} {{key:A}} {{key:S}} {{key:D}} ou as teclas de seta. Segure {{key:Shift}} para correr. Arraste para olhar ao redor.
3. Degraus de até 40 cm são subidos (escadas); qualquer altura maior é uma parede. As paredes param você, e você desliza ao longo delas.
4. Com {{ui:Gravity}} desligado, você voa: {{key:E}} sobe, {{key:Q}} desce.
5. {{key:Esc}} para de caminhar.

## Espalhar plantas, rochas e pessoas

{{ui:Scatter}} na barra da vista em tempo real abre o painel de espalhamento ao lado da imagem. Um conjunto de espalhamento distribui itens da biblioteca de entorno (árvores, arbustos, grama, flores, rochas, pessoas, carros) sobre parte do modelo. Os itens são desenhados apenas na vista em tempo real: não são geometria do modelo, e a vista principal não os mostra.

1. **Preencher faces:** selecione faces (ou um grupo, como um terreno) no ModelCraft e depois escolha {{ui:Fill selection}}. O conjunto as cobre.
2. **Pintar:** escolha {{ui:Paint}} e arraste sobre a vista em tempo real. Com faces selecionadas, a pintura cai só nelas; sem seleção, cai em tudo que estiver sob o pincel, inclusive o solo. {{ui:Brush size}} define o pincel; {{ui:Eraser}} remove os pontos pintados.
3. Marque o que espalhar. O número ao lado de cada um é o seu peso: 3 e 1 geram três do primeiro para cada um do segundo.

| Controle | O que faz |
|---|---|
| {{ui:Per m²}} | Quantos itens por metro quadrado |
| {{ui:Keep away (m)}} | Nenhum item mais perto que isso de outros objetos, e nenhum sob um telhado ou uma mesa. 0 desliga |
| {{ui:Turn (°)}} | Quanto cada item é girado, ao acaso, em torno da vertical |
| {{ui:Steepest (°)}} | Nenhum item onde a superfície for mais inclinada |
| {{ui:Size}} | O menor e o maior tamanho, como fator do tamanho próprio do item |
| {{ui:Height from, to (m)}} | Apenas entre estas alturas (em branco = qualquer) |
| {{ui:Lean with the surface}} | 0 mantém os itens em pé; 1 os posiciona perpendiculares a um declive |
| {{ui:Seed}}, {{ui:Shuffle}} | A mesma semente sempre gera o mesmo espalhamento; Embaralhar escolhe outro |

Os conjuntos são salvos no arquivo .modelcraft e seguem as faces que cobrem quando você as altera. O número máximo de itens que a vista em tempo real desenha depende do nível de [sua máquina](topic:your-machine): 20 000 com {{ui:Processor only}}, 100 000 com {{ui:Graphics card, basic}}, um milhão com {{ui:Graphics card, high}}. O painel informa quantos são posicionados, de quantos a densidade pede: menos são posicionados quando o limite é atingido, ou onde os objetos os impedem. Itens perto da câmera são desenhados como eles são; os distantes, como formas simples nas suas cores.

:::note
Os itens espalhados aparecem na vista em tempo real (e no seu percurso, nos panoramas e no visualizador independente). Renderizar imagem ainda não os desenha.
:::

## Compartilhar: panoramas, tours, um visualizador, um vídeo

{{ui:Share}} na barra da vista em tempo real gera arquivos a partir dela. Tudo é feito neste computador; nada é enviado.

| Escolha | O que você obtém |
|---|---|
| {{ui:360° panorama}} | Uma imagem de 360° a partir de onde a vista está (ou de onde você está caminhando), como PNG equirretangular, que os visualizadores de panoramas e a maioria dos sites de fotos abrem |
| {{ui:Add this spot to the tour}}, depois {{ui:Save the tour}} | Uma página da web com um panorama em cada ponto e setas para os pontos que cada um consegue ver (uma parede no meio oculta a seta) |
| {{ui:Save a viewer}} | Uma página da web com o modelo nesta aparência em tempo real: gire-o, percorra-o, pule para as suas cenas salvas. Abre offline em um navegador com WebGPU ou WebGL 2, a partir de uma pasta, de um pen drive ou de um e-mail, sem instalação e sem conta, e não carrega nada da internet |
| {{ui:Video of the path}} | O caminho da câmera da linha do tempo (ou as cenas salvas, em ordem) como vídeo nesta aparência em tempo real, no tamanho da vista em tempo real: WebM ou MP4 onde o navegador consegue gerá-los; caso contrário, imagens numeradas em um ZIP |

O tamanho do panorama segue a qualidade: 1024, 2048 ou 4096 pixels de largura em Baixa, Média e Alta. Um arquivo de visualizador tem cerca de 5 MB, mais o modelo.

:::note
O tour e o visualizador são feitos para mostrar, não para editar: eles mantêm o modelo como está quando você os salva.
:::

## Qualidade

| | Low | Medium | High |
|---|---|---|---|
| Sombras do sol | um mapa de sombra | três cascatas | quatro cascatas |
| Oclusão ambiente (sombras de contato) | | ✓ | ✓, mais fina |
| Reflexos no metal | | | ✓ |
| Bloom (quando Renderizar imagem o define) | | ✓ | ✓ |
| Bordas suavizadas | FXAA | ao longo de vários quadros (TAA) | ao longo de vários quadros (TAA) |
| Luz refletida | grossa | mais fina | a mais fina |

{{ui:For this computer}} escolhe Low em um computador sem placa de vídeo utilizável, Medium com um chip gráfico integrado, High com uma placa de vídeo separada. Low é indicado para um notebook de 8 GB sem placa de vídeo.

## Luz refletida

A luz que reflete de uma parede ensolarada sobre o piso, e o interior mais escuro de um ambiente, são calculados pelo mesmo traçador de caminhos que gera as [imagens renderizadas](topic:render): ele renderiza um pequeno panorama em pontos através do modelo, em segundo plano, em todos os núcleos do processador. Enquanto trabalha, a linha inferior mostra {{ui:Luz refletida: 40 %}}; quando fica pronta, a vista a incorpora. Após uma alteração, ele recomeça.

:::note
Isto é uma aproximação para a vista em tempo real, não uma imagem renderizada: pequenos detalhes entre os pontos recebem a luz refletida dos pontos próximos. Para uma imagem final, use [Renderizar imagem](topic:render).
:::

## Brilho e cores

A vista em tempo real usa o mesmo brilho, balanço de branco, contraste e transformação de vista (ACES, AgX, filmic ou padrão) de [Renderizar imagem](topic:render): defina-os lá e a vista em tempo real segue.

:::note
Os navegadores diferem. Onde o navegador tem WebGPU (Chrome e Edge no Windows, macOS e ChromeOS, Safari 26), a vista em tempo real o usa; nos demais (a maioria dos navegadores no Linux, sistemas Apple mais antigos), ela usa WebGL 2 e tem a mesma aparência.
:::
