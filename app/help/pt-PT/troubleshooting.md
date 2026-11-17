---
title: Resolução de problemas
summary: Sintomas, causas e soluções, desde uma vista 3D em branco até importações com tamanho errado, com as mensagens que o ModelCraft mostra.
keywords: problema, falha, erro, não funciona, em branco, webgl, gráficos, lento, mensagem, importação falhou, tamanho errado, não consigo selecionar, toque, teclas não funcionam, trabalho perdido
from: 6e7394be
---

## A vista 3D está em branco

**Sintoma:** o centro do ecrã fica vazio, ou mostra apenas a cor de fundo, e clicar nas ferramentas não faz nada.

**Causa:** o ModelCraft desenha com WebGL 2, os gráficos 3D do navegador. Não está disponível quando o navegador é antigo, quando a aceleração por hardware está desligada ou quando o controlador gráfico está bloqueado.

**Solução:**

:::chromium
1. Abra as definições do navegador e pesquise "aceleração gráfica".
2. Ative "Utilizar aceleração gráfica quando disponível" e reinicie o navegador.
3. Se já estiver ativa, escreva `chrome://gpu` na barra de endereço (`edge://gpu` no Edge) e procure "WebGL2" na lista. Se indicar desativado, atualize o controlador gráfico.
:::

:::firefox
1. Abra **Definições**, depois **Geral**, e desloque até "Desempenho".
2. Desmarque "Utilizar as definições de desempenho recomendadas" e depois marque "Utilizar aceleração por hardware quando disponível". Reinicie o Firefox.
3. Se continuar a falhar, escreva `about:support` na barra de endereço e veja a secção "Gráficos" para WebGL 2.
:::

:::safari
Atualize o macOS e o Safari. As versões recentes do Safari têm sempre o WebGL 2 ativo. Se alterou funcionalidades experimentais em **Safari**, depois **Definições**, depois **Avançado** (ou **Feature Flags**), reponha-as.
:::

Num computador de trabalho, numa área de trabalho remota ou numa máquina virtual, os gráficos 3D podem estar bloqueados por política. Experimente outro computador. Ver [Navegadores e computadores](common:browsers).

## As teclas não fazem nada, ou escrevem numa caixa

**Causa:** o foco do teclado está num campo do painel: a lista {{ui:Faces}} em {{ui:Estilo}}, uma definição do sol, o campo {{ui:Nome}} em {{ui:Informações da entidade}}, ou o seletor de unidades. As letras e as setas vão então para esse campo.

**Solução:** clique na vista 3D e prima a tecla de novo. As teclas também não funcionam enquanto há uma caixa de diálogo aberta.

## Escrever um número não faz nada

- **Ainda não há direção.** Um comprimento escrito segue a direção do ponteiro a partir do primeiro clique. Mova o ponteiro um pouco na direção pretendida e depois escreva.
- **Momento errado.** A maioria das ferramentas aceita um valor escrito apenas depois do primeiro clique: clique primeiro no canto, na face ou no ponto a partir do qual se move. {{ui:Círculo}} e {{ui:Polígono}} aceitam um número de lados antes do primeiro clique.
- **"Escreva um comprimento, como 3m, 10'6" ou 4m,3m."** O ModelCraft não o conseguiu ler. Verifique se há uma vírgula decimal (`2,5`): use um ponto.

## Uma forma começa no sítio errado num ecrã tátil

**Sintoma:** com um dedo, o primeiro retângulo está bem, mas o seguinte retângulo, círculo ou linha começa onde o toque anterior terminou, em vez de onde tocou.

**Causa:** um erro nesta versão: num ecrã tátil, a ferramenta memoriza o último ponto de snap do gesto anterior.

**Solução:** toque de novo no botão da ferramenta na barra de ferramentas antes de cada nova forma. Isso reinicia a ferramenta, e o primeiro ponto fica onde toca.

## Editar um grupo alterou outro

**Sintoma:** copiou um grupo com {{ui:Mover}} e {{key:Ctrl}}, abriu uma das cópias e editou-a, e a outra também mudou. A {{ui:Estrutura}} mostra as duas com o mesmo nome.

**Causa:** nesta versão, copiar um grupo cria uma segunda colocação do mesmo grupo, como acontece com um componente. O botão {{ui:Tornar único}} do ModelCraft só é oferecido para componentes.

**Solução:** selecione a cópia que quer alterar, clique em {{ui:Criar componente}} em {{ui:Informações da entidade}} e depois em {{ui:Tornar único}}. Essa cópia passa a ter o seu próprio conteúdo. Ou {{ui:Explodir}} a cópia.

## Empurrar/puxar não faz o que eu esperava

- **"Empurrar/puxar funciona sobre uma face. Clique numa face."** Clicou numa aresta ou num espaço vazio. Passe o ponteiro até a face ficar realçada e depois clique.
- **A face está dentro de um grupo.** Faça duplo clique no grupo para o abrir primeiro.
- **Uma janela não recortou a parede.** O retângulo tem de ser desenhado sobre a face da parede, e não à frente dela, e a parede tem de ter uma face de trás. Ver [Recortar uma abertura numa parede](topic:openings#if-it-did-not-cut-through).
- **Duas caixas sobrepostas não se fundem.** Sólidos empurrados um contra o outro não se recortam nem se unem nesta versão.

## Uma linha ou forma não criou uma face

Uma face só se preenche quando as arestas fecham um circuito plano. Verifique se o último ponto ficou preso ao primeiro ("Extremidade"), e se todas as arestas estão no mesmo plano. Um circuito ligeiramente fora do plano fica como linhas. Desenhe de novo uma das arestas, usando o snap nos cantos.

## Não consigo selecionar nem apagar uma face

- Com {{ui:Selecionar}}, um clique perto de uma aresta escolhe a aresta. Clique mais perto do meio da face.
- A {{ui:Borracha}} não escolhe faces. Selecione a face e prima {{key:Delete}}, ou apague uma das suas arestas.
- Se pertencer a um grupo ou componente, o clique seleciona tudo. Faça duplo clique para o abrir.

## "Selecione primeiro algo para mover, ou clique nele."

{{ui:Mover}}, {{ui:Rodar}} e {{ui:Escala}} precisam de algo sobre que atuar: selecione-o primeiro, ou inicie a ferramenta clicando no próprio elemento (não num espaço vazio nem numa guia).

## "Selecione primeiro alguma geometria (arraste uma janela, ou faça triplo clique para selecionar tudo o que está ligado)."

{{key:G}} e {{key:Shift+G}} precisam de uma seleção. As guias não podem ser agrupadas.

## As setas do teclado fazem órbita em vez de bloquear

Os bloqueios só funcionam depois do primeiro clique de uma ferramenta de desenho ou de edição. {{ui:Empurrar/puxar}} não tem bloqueios, e em {{ui:Rodar}} não alteram a rotação. Nos outros casos, as setas fazem órbita à vista.

## Esc em ecrã inteiro

Em ecrã inteiro, o navegador pode usar o primeiro {{key:Esc}} para sair do ecrã inteiro. Prima {{key:Esc}} de novo para cancelar a ferramenta.

## Sem botão do meio

Prima {{key:O}} para {{ui:Órbita}} e arraste, ou use as setas do teclado. Ver [Órbita, deslocar e zoom](topic:orbit-pan-zoom#without-a-middle-button).

## Importações

| Mensagem | O que fazer |
|---|---|
| "O ModelCraft importa SketchUp (.skp), Collada (.dae), OBJ, glTF (.glb/.gltf), FBX, PLY, STL, Alembic (.abc), DWG e DXF. … não é nenhum destes." | Exporte o modelo do outro programa num destes formatos |
| "Este ficheiro tem mais de 300 MB." | Simplifique ou divida o modelo no outro programa |
| "…grande demais para modelar aqui (mais de 2 milhões de vértices)." | O mesmo |
| "Este ficheiro .gltf precisa de "…"…" | Arraste o `.gltf` juntamente com os seus ficheiros `.bin` e de texturas, ou abra a versão `.glb` |
| "Este ficheiro glTF precisa da extensão …, que o ModelCraft ainda não lê." | Exporte de novo a partir do outro programa sem essa extensão (texturas KTX2, por exemplo) |
| Um OBJ entra sem as suas cores ou texturas | Arraste o `.obj` juntamente com o seu `.mtl` e as imagens |
| "Este ficheiro Alembic usa o antigo esquema HDF5…" | Guarde-o de novo no outro programa como ficheiro Ogawa Alembic |
| Um FBX entra sem as suas texturas | Arraste o `.fbx` juntamente com as imagens de textura, ou incorpore os media ao exportar |
| "Este ficheiro FBX é da versão …, que o ModelCraft não lê" | Exporte de novo como FBX 2011 ou posterior |
| Um STL ou PLY entra 1 000 vezes maior ou menor | O STL é lido em milímetros e o PLY em metros: escale-o (ver [Rodar e escalar](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)) |
| "Isto não é um ficheiro Collada (.dae)…" ou "…não bem formado XML…" | O ficheiro está danificado ou não é Collada. Exporte-o de novo |
| "Este ficheiro Collada não tem geometria que o ModelCraft possa importar." | Tem apenas câmaras, luzes ou referências a outros ficheiros |
| "Este é um DXF binário. Guarde-o como DXF ASCII e tente de novo." | Guarde-o de novo a partir do programa CAD, em ASCII |
| "Isto não é um desenho DWG…" | O ficheiro não é DWG, ou está danificado |
| "Não foi possível ler este desenho (…). Pode estar danificado, ou guardado numa versão DWG que o leitor não suporta…" | Os parênteses indicam o motivo. Guarde-o como DXF, ou como DWG do AutoCAD 2000 a 2018, a partir do programa CAD |
| "Este desenho ultrapassa 10 000 km da sua origem…" | Mova o desenho para perto de 0,0 no programa CAD |

### A importação tem tamanho errado ou está deitada de lado

- **OBJ:** o OBJ não tem unidade; o ModelCraft lê metros. Um modelo em milímetros entra 1000 vezes maior: [escale-o](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size) com `0.001`; um modelo em polegadas com `0.0254`.
- **OBJ deitado de lado:** o ModelCraft espera ficheiros OBJ com Y para cima. Um ficheiro escrito com Z para cima entra deitado. Rode-o 90° em torno do eixo vermelho: clique no centro de {{ui:Rodar}} sobre uma face virada ao longo do vermelho, ou abra o ficheiro no seu programa e exporte-o com Y para cima.
- **DWG ou DXF:** escolheu a unidade errada na caixa de diálogo "Unidades do desenho". Anule e importe de novo.

## Abrir ficheiros

| Mensagem | O que fazer |
|---|---|
| "Este ficheiro não é um modelo do ModelCraft (não é JSON)." | Use {{ui:Importar}} para outros formatos |
| "Este não é um ficheiro do ModelCraft que possa ser aberto: …" | O ficheiro está danificado ou foi alterado à mão |
| "Este modelo foi guardado por um ModelCraft mais recente…" | Abra-o na versão mais recente |
| "Este ficheiro tem mais de 200 MB." | O modelo é grande demais para abrir aqui |

## Perdi trabalho

O ModelCraft não guarda sozinho num ficheiro. Quando fecha ou recarrega um separador com alterações não guardadas, o navegador pergunta primeiro ("Sair do site?" ou "Recarregar o site?"); escolha ficar e guardar. Novo e Abrir também perguntam ("Alterações não guardadas"). Se o navegador ou o computador falhar, abra o ModelCraft de novo no mesmo navegador: ele oferece de volta o trabalho não guardado ("Recuperar o seu trabalho?"; ver [Recuperar o seu trabalho](common:recover)). Guarde com frequência com {{key:Mod+S}}.

## A pasta de transferências enche-se de cópias

Cada gravação é uma nova transferência, com o nome `Untitled (1).modelcraft`, `Untitled (2).modelcraft` e assim sucessivamente. Apague as antigas, ou configure o navegador para perguntar onde guardar cada ficheiro e substituir o antigo por si. Ver [Abrir, guardar, importar e exportar](topic:files#save-a-model).

## Fica lento

- Cada passo de anular guarda uma cópia do modelo (uma [malha](topic:meshes) guarda apenas o que mudou), por isso, numa importação muito grande de geometria empurrada/puxada, cada edição demora mais. Explode ou apague o que não precisar, guarde e reabra: reabrir também limpa o histórico de anulação.
- As sombras do sol são as mais pesadas. Desmarque {{ui:Sombras do sol}} enquanto modela.

## Sem sombras

{{ui:Sombras do sol}} está desligado, o sol está abaixo do horizonte na hora escolhida ("O sol está abaixo do horizonte nesta hora."), ou o estilo é {{ui:Arames}}, que não desenha sombras.

## "Este navegador não permitiu o ecrã inteiro."

Alguns navegadores e algumas vistas incorporadas recusam o ecrã inteiro. Use antes o ecrã inteiro do próprio navegador ({{pick:mac=Control-Command-F|windows linux=F11}}).

## O ModelCraft não abre sem ligação

O ModelCraft só abre offline depois de ter sido guardado para uso offline nesse navegador: o botão da barra da aplicação tem de indicar {{ui:Pronto para offline}}. Abra-o com ligação e clique em {{ui:Guardar para offline}}. Se o botão indicar {{ui:Não foi possível guardar}}, clique de novo com uma ligação melhor; {{ui:Offline indisponível}} significa que esta janela (uma janela privada, ou um computador gerido) não consegue guardar uma cópia. Ver [Trabalhar offline](common:offline).
