---
title: Solução de problemas
summary: Sintomas, causas e correções, desde uma vista 3D em branco até importações com tamanho errado, com as mensagens que o ModelCraft mostra.
keywords: problema, erro, não funciona, em branco, webgl, gráficos, lento, mensagem, falha na importação, tamanho errado, não consigo selecionar, toque, teclas não funcionam, trabalho perdido
from: 6e7394be
---

## A vista 3D está em branco

**Sintoma:** o centro da tela fica vazio, ou mostra só a cor de fundo, e clicar nas ferramentas não faz nada.

**Causa:** o ModelCraft desenha com WebGL 2, o recurso gráfico 3D do navegador. Ele não está disponível quando o navegador é antigo, quando a aceleração por hardware está desligada ou quando o driver de vídeo está bloqueado.

**Correção:**

:::chromium
1. Abra as configurações do navegador e pesquise por "aceleração de hardware".
2. Ative "Usar aceleração de hardware quando disponível" e reinicie o navegador.
3. Se já estiver ativada, digite `chrome://gpu` na barra de endereços (`edge://gpu` no Edge) e procure "WebGL2" na lista. Se estiver desabilitado, atualize o driver de vídeo.
:::

:::firefox
1. Abra **Configurações**, depois **Geral**, e role até "Desempenho".
2. Desmarque "Usar configurações de desempenho recomendadas" e marque "Usar aceleração de hardware quando disponível". Reinicie o Firefox.
3. Se ainda falhar, digite `about:support` na barra de endereços e veja a seção "Gráficos" para WebGL 2.
:::

:::safari
Atualize o macOS e o Safari. As versões recentes do Safari sempre têm o WebGL 2 ativado. Se você alterou recursos experimentais em **Safari**, depois **Configurações**, depois **Avançado** (ou **Feature Flags**), redefina-os.
:::

Em um computador de trabalho, área de trabalho remota ou máquina virtual, os gráficos 3D podem ser bloqueados por política. Tente outro computador. Veja [Navegadores e computadores](common:browsers).

## As teclas não respondem, ou digitam em uma caixa

**Causa:** o foco do teclado está em um campo do painel: a lista {{ui:Faces}} em {{ui:Estilo}}, uma configuração do sol, o campo {{ui:Nome}} em {{ui:Informações da entidade}}, ou o seletor de unidades. Letras e setas vão então para esse campo.

**Correção:** clique na vista 3D e pressione a tecla de novo. As teclas também não funcionam enquanto uma caixa de diálogo estiver aberta.

## Digitar um número não faz nada

- **Ainda não há direção.** Um comprimento digitado segue a direção em que o ponteiro está a partir do primeiro clique. Mova o ponteiro um pouco na direção desejada e depois digite.
- **Momento errado.** A maioria das ferramentas aceita um valor digitado somente depois do primeiro clique: clique no primeiro canto, na face ou no ponto de onde mover primeiro. {{ui:Círculo}} e {{ui:Polígono}} aceitam um número de lados antes do primeiro clique.
- **"Digite um comprimento, como 3m, 10'6" ou 4m,3m."** O ModelCraft não conseguiu lê-lo. Verifique se há vírgula decimal (`2,5`): use ponto.

## Uma forma começa no lugar errado em uma tela de toque

**Sintoma:** com o dedo, o primeiro retângulo está certo, mas o próximo retângulo, círculo ou linha começa onde seu toque anterior terminou, e não onde você tocou.

**Causa:** um erro nesta versão: em uma tela de toque, a ferramenta lembra o último ponto de snap do gesto anterior.

**Correção:** toque de novo no botão da ferramenta na barra de ferramentas antes de cada nova forma. Isso reinicia a ferramenta, e o primeiro ponto cai onde você tocar.

## Editar um grupo alterou outro

**Sintoma:** você copiou um grupo com {{ui:Mover}} e {{key:Ctrl}}, abriu uma cópia e a editou, e a outra cópia também mudou. O {{ui:Estrutura}} mostra as duas com o mesmo nome.

**Causa:** nesta versão, copiar um grupo cria uma segunda inserção do mesmo grupo, como acontece com um componente. O botão {{ui:Tornar único}} do ModelCraft só é oferecido para componentes.

**Correção:** selecione a cópia que você quer alterar, clique em {{ui:Criar componente}} em {{ui:Informações da entidade}} e depois em {{ui:Tornar único}}. Essa cópia passa a ter o próprio conteúdo. Ou {{ui:Explodir}} a cópia.

## Empurrar/puxar não faz o que eu esperava

- **"Empurrar/puxar funciona em uma face. Clique em uma face."** Você clicou em uma aresta ou em um espaço vazio. Passe o ponteiro até a face ficar destacada e depois clique.
- **A face está dentro de um grupo.** Clique duas vezes no grupo para abri-lo primeiro.
- **Uma janela não cortou a parede.** O retângulo precisa ser desenhado sobre a face da parede, não na frente dela, e a parede precisa ter uma face traseira. Veja [Cortar uma abertura em uma parede](topic:openings#if-it-did-not-cut-through).
- **Duas caixas se sobrepõem sem se unir.** Sólidos empurrados um contra o outro não se cortam nem se unem nesta versão.

## Uma linha ou forma não criou uma face

Uma face só é preenchida quando as arestas fecham um laço plano. Verifique se o último ponto se encaixou no primeiro ("Extremidade") e se todas as arestas estão em um mesmo plano. Um laço levemente fora do plano continua como linhas. Desenhe de novo uma de suas arestas, com snap nos cantos.

## Não consigo selecionar ou apagar uma face

- Com {{ui:Selecionar}}, um clique perto de uma aresta seleciona a aresta. Clique mais perto do meio da face.
- A {{ui:Borracha}} não escolhe faces. Selecione a face e pressione {{key:Delete}}, ou apague uma de suas arestas.
- Se ela pertencer a um grupo ou componente, o clique seleciona o conjunto inteiro. Clique duas vezes para abri-lo.

## "Selecione algo para mover primeiro, ou clique sobre ele."

{{ui:Mover}}, {{ui:Girar}} e {{ui:Escala}} precisam de algo para atuar: selecione antes, ou inicie a ferramenta clicando sobre o próprio item (não em um espaço vazio ou em uma guia).

## "Selecione alguma geometria primeiro (arraste uma janela, ou dê um triplo clique para selecionar tudo o que está conectado)."

{{key:G}} e {{key:Shift+G}} precisam de uma seleção. Guias não podem ser agrupadas.

## As setas do teclado orbitam em vez de travar

Os bloqueios funcionam somente após o primeiro clique de uma ferramenta de desenho ou edição. {{ui:Empurrar/puxar}} não tem bloqueios, e em {{ui:Girar}} eles não mudam o giro. Em outros momentos, as setas do teclado orbitam a vista.

## Esc em tela cheia

Em tela cheia, o navegador pode usar o primeiro {{key:Esc}} para sair da tela cheia. Pressione {{key:Esc}} de novo para cancelar a ferramenta.

## Sem botão do meio

Pressione {{key:O}} para {{ui:Órbita}} e arraste, ou use as setas do teclado. Veja [Órbita, pan e zoom](topic:orbit-pan-zoom#without-a-middle-button).

## Importações

| Mensagem | O que fazer |
|---|---|
| "O ModelCraft importa SketchUp (.skp), Collada (.dae), OBJ, glTF (.glb/.gltf), FBX, PLY, STL, Alembic (.abc), DWG e DXF. … não é nenhum deles." | Exporte o modelo do outro programa em um destes formatos |
| "Este arquivo tem mais de 300 MB." | Simplifique ou divida o modelo no outro programa |
| "…grande demais para modelar aqui (mais de 2 milhões de vértices)." | O mesmo |
| "Este arquivo .gltf precisa de "…"…" | Coloque o `.gltf` junto com seus arquivos `.bin` e de textura, ou abra a versão `.glb` |
| "Este arquivo glTF precisa da extensão …, que o ModelCraft ainda não lê." | Exporte de novo pelo outro programa sem essa extensão (texturas KTX2, por exemplo) |
| Um OBJ entra sem suas cores ou texturas | Coloque o `.obj` junto com seu `.mtl` e as imagens |
| "Este arquivo Alembic usa o formato HDF5 antigo…" | Salve de novo pelo outro programa como arquivo Alembic Ogawa |
| Um FBX entra sem suas texturas | Coloque o `.fbx` junto com as imagens de textura, ou incorpore a mídia ao exportar |
| "Este arquivo FBX é da versão …, que o ModelCraft não lê" | Exporte de novo como FBX 2011 ou mais recente |
| Um STL ou PLY entra 1,000 vezes maior ou menor | O STL é lido em milímetros e o PLY em metros: redimensione-o (veja [Girar e escalar](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)) |
| "Este não é um arquivo Collada (.dae)…" ou "…XML mal formado…" | O arquivo está danificado ou não é Collada. Exporte-o de novo |
| "Este arquivo Collada não tem geometria que o ModelCraft possa importar." | Ele contém apenas câmeras, luzes ou referências a outros arquivos |
| "Este é um DXF binário. Salve-o como DXF ASCII e tente novamente." | Salve de novo pelo programa CAD como ASCII |
| "Este não é um desenho DWG…" | O arquivo não é um DWG, ou está danificado |
| "Este desenho não pôde ser lido (…). Pode estar danificado, ou salvo em uma versão DWG que o leitor não processa…" | Os parênteses indicam o motivo. Salve como DXF, ou como DWG do AutoCAD 2000 a 2018, pelo programa CAD |
| "Este desenho ultrapassa 10,000 km da sua origem…" | Mova o desenho para perto de 0,0 no programa CAD |

### O import está com o tamanho errado ou deitado

- **OBJ:** o OBJ não tem unidade; o ModelCraft lê em metros. Um modelo em milímetros entra 1000 vezes maior: [redimensione-o](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size) com `0.001`; um modelo em polegadas, com `0.0254`.
- **OBJ deitado:** o ModelCraft espera arquivos OBJ com Y para cima. Um arquivo com Z para cima entra deitado. Gire-o 90° em torno do eixo vermelho: clique no centro de {{ui:Girar}} sobre uma face voltada ao longo do vermelho, ou abra o arquivo no programa de origem e exporte com Y para cima.
- **DWG ou DXF:** você escolheu a unidade errada na caixa de diálogo "Unidades do desenho". Desfaça e importe de novo.

## Abrir arquivos

| Mensagem | O que fazer |
|---|---|
| "Este arquivo não é um modelo do ModelCraft (não é JSON)." | Use {{ui:Importar}} para outros formatos |
| "Este não é um arquivo do ModelCraft que possamos abrir: …" | O arquivo está danificado ou foi alterado manualmente |
| "Este modelo foi salvo por um ModelCraft mais recente…" | Abra-o na versão mais recente |
| "Este arquivo tem mais de 200 MB." | O modelo é grande demais para abrir aqui |

## Perdi trabalho

O ModelCraft não salva em arquivo sozinho. Quando você fecha ou recarrega uma aba com alterações não salvas, o navegador pergunta antes ("Sair do site?" ou "Recarregar o site?"); escolha permanecer e salve. Novo e Abrir também perguntam ("Alterações não salvas"). Se o navegador ou o computador travou, abra o ModelCraft de novo no mesmo navegador: ele oferece de volta o trabalho não salvo ("Recuperar seu trabalho?"; veja [Recuperar seu trabalho](common:recover)). Salve com frequência com {{key:Mod+S}}.

## A pasta de downloads enche de cópias

Cada salvamento é um novo download, chamado `Untitled (1).modelcraft`, `Untitled (2).modelcraft` e assim por diante. Apague os antigos, ou configure o navegador para perguntar onde salvar cada arquivo e sobrescrever o antigo por conta própria. Veja [Abrir, salvar, importar e exportar](topic:files#save-a-model).

## Fica lento

- Cada passo do desfazer guarda uma cópia do modelo (uma [malha](topic:meshes) guarda apenas o que mudou), então, em uma importação muito grande de geometria empurrada e puxada, cada edição demora mais. Explode ou apague o que não precisa, salve e reabra: reabrir também limpa o histórico de desfazer.
- As sombras do sol custam mais. Desmarque {{ui:Sombras do sol}} enquanto modela.

## Sem sombras

{{ui:Sombras do sol}} está desligado, o sol está abaixo do horizonte no horário escolhido ("O sol está abaixo do horizonte neste horário."), ou o estilo é {{ui:Estrutura de arame}}, que não desenha sombras.

## "Este navegador não permitiu a tela cheia."

Alguns navegadores e algumas vistas incorporadas recusam a tela cheia. Use a tela cheia do próprio navegador ({{pick:mac=Control-Command-F|windows linux=F11}}).

## O ModelCraft não abre sem conexão

O ModelCraft só abre offline depois de ter sido salvo para uso offline naquele navegador: o botão da barra do aplicativo deve mostrar {{ui:Pronto para uso offline}}. Abra-o com conexão e clique em {{ui:Salvar para uso offline}}. Se o botão mostrar {{ui:Não foi possível salvar}}, clique de novo com uma conexão melhor; {{ui:Offline indisponível}} significa que esta janela (uma janela privativa ou um computador gerenciado) não pode manter uma cópia. Veja [Trabalhar offline](common:offline).
