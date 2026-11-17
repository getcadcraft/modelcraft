---
title: Vindo de outros modeladores
summary: Como os hábitos de modelação por empurrar/puxar passam para o ModelCraft, tecla a tecla, e as diferenças que apanham as pessoas desprevenidas.
keywords: mudança, migrar, familiar, diferenças, modelador de empurrar/puxar, skp, atalhos, hábitos, comparar, caixa de medidas, lista de objetos, informações da entidade
from: 74ffd4ac
---

Se já modelou no SketchUp, o ModelCraft vai parecer-lhe familiar: a mesma ideia de faces e de empurrar/puxar, as mesmas letras das ferramentas, uma caixa de valores onde escreve sem clicar, inferência com os eixos vermelho, verde e azul, grupos, componentes, uma lista de objetos, informações da entidade e cenas. Esta página lista o que passa diretamente e, mais importante, o que não passa.

## Hábitos que se mantêm

| Está habituado a | No ModelCraft |
|---|---|
| Prima Space para Selecionar, L para Linha, R para Retângulo, C para Círculo | O mesmo: {{key:Space}}, {{key:L}}, {{key:R}}, {{key:C}} |
| Prima P para Empurrar/puxar, M para Mover, Q para Rodar, S para Escala, E para Borracha, T para Fita métrica | O mesmo: {{key:P}}, {{key:M}}, {{key:Q}}, {{key:S}}, {{key:E}}, {{key:T}} |
| Prima O para Orbitar, H para Deslocar a vista, Z para Zoom, Shift+Z para Zoom à extensão | O mesmo: {{key:O}}, {{key:H}}, {{key:Z}}, {{key:Shift+Z}} |
| Prima G para criar um componente | O mesmo: {{key:G}}. {{key:Shift+G}} cria um grupo |
| Escrever na caixa de medidas sem clicar nela | O mesmo, na caixa de valores em baixo. Prima {{key:Enter}} |
| Escrever `4m,3m` para um retângulo, `12s` para lados | O mesmo |
| Escrever `3x` ou `/3` depois de uma cópia com Mover | O mesmo; `*3` também funciona |
| Escrever `[x,y,z]` ou `<dx,dy,dz>` para um ponto ou deslocamento | O mesmo |
| Escrever um número simples num modelo em polegadas arquitetónicas e obter polegadas | O mesmo |
| Arrastar com o botão do meio para orbitar, Shift com o botão do meio para deslocar, roda para zoom no cursor | O mesmo |
| Duplo clique com Empurrar/puxar para repetir a distância | O mesmo |
| Teclas de seta para bloquear vermelho, verde, azul e paralelo | O mesmo: {{key:Right}} vermelho, {{key:Left}} verde, {{key:Up}} azul, {{key:Down}} paralelo |
| Manter Shift premido para bloquear uma inferência | O mesmo |
| Ctrl (Option num Mac) para copiar ao mover | {{key:Ctrl}}, {{key:Mod}} ou {{key:Alt}}, em qualquer computador |
| Shift para alternar, Ctrl para acrescentar, Shift+Ctrl para retirar da seleção | As mesmas teclas; num Mac use {{key:Mod}} onde diz Ctrl |
| Janela da esquerda para a direita, cruzamento da direita para a esquerda | O mesmo |
| Uma ferramenta Cota para indicar comprimentos | {{key:D}}, e mais: escreva um novo comprimento numa cota e o modelo redimensiona-se. Ver [Cotar e redimensionar](topic:dimensions) |
| Duplo clique numa face para face mais arestas; triplo clique para tudo o que está ligado | O mesmo |
| Duplo clique num grupo para o editar; Esc para fechar | O mesmo |
| Desenhar uma linha numa face para a dividir; apagar uma aresta entre faces coplanares para as unir | O mesmo |
| Empurrar um retângulo de janela através de uma parede para a cortar | O mesmo |
| Faces de trás em azul-acinzentado; Inverter faces | A mesma cor; {{ui:Inverter face}} em {{ui:Informações da entidade}} |
| Cenas como separadores sobre a vista, Page Up e Page Down | O mesmo, com {{ui:Reproduzir}} no painel {{ui:Cenas}} |
| Sombras pela data, hora, latitude e longitude, com o norte a verde | O mesmo, no painel {{ui:Estilo}} |

## Diferenças que apanham as pessoas desprevenidas

### Guardar é uma transferência

Não existe um Guardar que substitua o ficheiro que abriu, nem uma caixa Guardar como com nome, nem gravação automática, nem ficheiro de cópia de segurança. {{ui:Guardar}} ({{key:Mod+S}}) transfere um novo ficheiro `.modelcraft` de cada vez, normalmente para a pasta de transferências. Guarde com frequência e mude o nome ou mova os ficheiros manualmente. Ver [Abrir, guardar, importar e exportar](topic:files).

### Importa ficheiros .skp, mas não os guarda

{{ui:Importar}} lê ficheiros SketchUp com o leitor próprio do ModelCraft, na página: grupos, componentes, cores, texturas nas faces, etiquetas e arestas suaves passam. Ver [Formatos de ficheiro em detalhe](topic:formats#skp-files). O ModelCraft não consegue guardar `.skp`: para voltar atrás, exporte Collada a partir do ModelCraft e importe-o no SketchUp.

### Sem menu do botão direito

Arrastar com o botão direito desloca a vista; um clique com o botão direito não faz nada. Os comandos que encontraria no menu de contexto estão em {{ui:Informações da entidade}} ({{ui:Inverter face}}, {{ui:Editar}}, {{ui:Explodir}}, {{ui:Tornar único}}, {{ui:Criar componente}}) e no grupo {{ui:Organizar}} da barra de ferramentas.

### As unidades ficam na barra de estado

Não há Informações do modelo nem escolha de modelo predefinido. O seletor de unidades está em baixo, à direita. Um modelo novo começa em pés e polegadas nos EUA e em milímetros no resto, a partir da definição de idioma do navegador. Os decimais usam sempre ponto: `2.5m`, nunca `2,5m`, porque a vírgula separa sempre valores.

### A pintura tem materiais próprios

{{ui:Pintar}} ({{key:B}}) pinta cores sólidas e os materiais da secção {{ui:Materiais}}: tijolo, revestimento, cobertura, madeira, pedra e mais, desenhados pelo ModelCraft. Ainda não é possível carregar a sua própria imagem como material; as texturas que chegam com ficheiros importados são mantidas. Ver [Pintar com cores e materiais](topic:paint).

### A escala é uniforme, sem pontos de controlo

A escala não mostra uma caixa com pontos de controlo. Clique no ponto que fica fixo, um ponto de referência, e depois no novo tamanho ou num fator escrito. Escala sempre de forma uniforme em todas as direções. Para esticar numa só direção, use Empurrar/puxar ou mova uma face; escreva de novo a largura, a profundidade ou a altura de um grupo em {{ui:Informações da entidade}}; ou redimensione com uma [cota](topic:dimensions).

### Rodar escolhe o plano a partir de onde clica

Não há transferidor que se prenda às faces enquanto o cursor passa sobre elas com as teclas de seta para escolher o plano. Clique no centro numa face para rodar no plano dessa face, ou no chão para rodar em torno da vertical. As teclas de seta orbitam a vista antes do primeiro clique.

### Inferência a partir de pontos por onde passa

O ModelCraft prende-se a direções dos eixos a partir do **seu ponto inicial**, e a pontos, arestas e faces sob o cursor. Não segue uma direção a partir de um ponto apenas sobrevoado (a inferência pontilhada "a partir do ponto"). Para se alinhar com um canto distante, bloqueie o eixo com uma tecla de seta e passe o cursor sobre esse canto: o ponto bloqueado desliza para se alinhar com ele. Ou coloque uma [guia](topic:guides-measure).

### Paralelo usa a aresta por onde passou antes de começar

A inferência paralela e perpendicular usa a última aresta que o cursor cruzou **antes do primeiro clique**, não as arestas que passa enquanto desenha. Ver [Inferência e snap](topic:inference#parallel-and-perpendicular).

### Cópias de um grupo estão ligadas

Copiar um grupo com {{ui:Mover}} cria uma segunda colocação do mesmo grupo, por isso editar um altera ambos, tal como acontece com os componentes. O SketchUp torna os grupos independentes. Ver [Resolução de problemas](topic:troubleshooting#editing-one-group-changed-another).

### O espaço não desloca a vista

{{key:Space}} escolhe {{ui:Selecionar}}, como no SketchUp. Noutras aplicações web, manter Space premido desloca a vista; aqui não. Arraste com o botão direito para deslocar a vista.

### O deslocamento com dois dedos faz zoom

Num trackpad, defina em {{ui:Definições}} › {{ui:ModelCraft}} › Deslocamento: Trackpad. Dois dedos orbitam, {{key:Shift}} e dois dedos deslocam, um pinçar faz zoom. Ver [Orbitar, deslocar e zoom](topic:orbit-pan-zoom#on-a-trackpad).

Se as suas mãos conhecem as teclas do Blender e não as do SketchUp, escolha o estilo de menu {{ui:Modelador}}: {{key:G}}, {{key:R}} e {{key:S}} atuam sobre a seleção de uma só vez, {{key:E}} extrudir (empurrar/puxar), {{key:Shift+D}} duplica, e uma barra de menus no cabeçalho (Ficheiro, Editar, Vista, Selecionar, Acrescentar, Objeto, Malha) substitui a barra de ferramentas. Vindo do SketchUp, o estilo {{ui:Empurrar/puxar}} dá uma barra de menus própria sobre as mesmas letras das ferramentas. Ver [Menus, teclas e rato](topic:menus-keys-and-mouse).

### Sólidos empurrados uns contra os outros não se cortam

Empurrar/puxar corta através da face que está atrás no mesmo objeto, mas dois sólidos separados empurrados um contra o outro não se intersectam. Não existe Intersect Faces nem Solid Tools.

### O que falta

Mão livre, Aparar, Split e Outer Shell, os seus próprios materiais de imagem, extensões e uma ferramenta de layout para folhas não estão nesta versão. [Ainda não implementado](topic:not-built-yet) lista o que fazer em vez disso.

## Atalhos que o navegador mantém

O ModelCraft funciona num navegador, por isso alguns atalhos pertencem ao navegador, não à aplicação. {{key:Mod+N}} abre uma janela do navegador (use {{ui:Novo}}), e {{key:Mod+W}} fecha o separador. Se tiver alterações não guardadas, o navegador pergunta antes de fechar. Ver [Teclas, ratos e trackpads](common:keys#shortcuts-the-browser-keeps).
