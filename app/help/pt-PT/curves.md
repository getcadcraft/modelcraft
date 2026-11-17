---
title: Objetos de curva
summary: Desenhar curvas de Bézier, NURBS e de segmentos retos, dar-lhes espessura, largura ou afilamento, preencher as planas, definir texto como curva e transformá-las em malhas.
keywords: curva, curvas, bezier, nurbs, spline, splines, trajetória, tubo, cano, cabo, corda, chanfro, extrudir, afilar, inclinação, raio, preencher, perfil, texto, letras, logótipo, curva para malha
from: 602bf077
---

Um **objeto de curva** é uma curva que faz uma forma: um tubo ao longo dela (chanfro), uma faixa (extrusão), um corno que se afila (afilamento) ou, quando é plana e fechada, uma placa preenchida ou letras. A forma segue a curva: mova um ponto e o tubo move-se com ele. Quando a forma estiver certa, transforme-a numa malha.

## Acrescentar uma curva

Escolha {{ui:Curva}} na lista de áreas de trabalho e prima {{ui:Acrescentar}}:

| Tipo | O que é |
| --- | --- |
| Curva de Bézier, círculo de Bézier | Passa pelos seus pontos; cada ponto tem duas pegas que definem a direção da curva |
| Curva NURBS, círculo NURBS, Caminho | Suave, desenhada em direção aos seus pontos (começa e termina nos pontos extremos); cada ponto tem um peso |
| Texto | O seu texto como contornos de letras planas e preenchidas |

Uma curva nova recebe um tubo fino para ser vista e selecionada; defina a sua profundidade de chanfro como 0 para uma curva nua.

Também pode partir de algo desenhado: selecione um arco, um círculo, um polígono ou uma curva desenhada na área de trabalho do Modelo e prima {{ui:Criar um objeto de curva}} em Informações da entidade. As linhas desenhadas mantêm-se.

## Editar os pontos

Clique duas vezes num objeto de curva (ou selecione-o e escolha {{ui:Curva}}) para o editar.

- Clique num ponto ou numa pega ({{key:Shift}} acrescenta ou retira); arraste-o para o mover. Arraste sobre espaço vazio para selecionar com uma caixa.
- {{ui:Prolongar}} ({{key:E}}, ou {{key:Ctrl}}+clique) acrescenta um ponto depois da extremidade selecionada, no cursor.
- {{ui:Subdividir}} ({{key:W}}) põe um ponto entre cada par de vizinhos selecionados; uma Bézier mantém a sua forma.
- {{ui:Mover}}, {{ui:Rodar}}, {{ui:Escala}} movem os pontos selecionados com o cursor (teclas de modelador {{key:G}} {{key:R}} {{key:S}}, teclas de empurrar/puxar {{key:M}} {{key:Q}} {{key:S}}); clique para manter, {{key:Esc}} para cancelar.
- {{ui:Fechar}} ({{key:C}}) fecha uma spline aberta ou abre uma fechada; {{ui:Inverter}} ({{key:Shift+R}}) percorre-a no sentido contrário.
- Pegas de Bézier: {{ui:Suavizar}} ({{key:V}}) coloca-as para uma curva suave, {{ui:Canto}} ({{key:Shift+V}}) aponta-as para os vizinhos, {{ui:Livre}} ({{key:Alt+V}}) deixa-as onde as pôs. Arrastar uma pega torna-a livre.
- {{ui:Bézier}}, {{ui:NURBS}} e {{ui:Poli}} mudam o tipo das splines selecionadas, mantendo os pontos.

Cada alteração é um passo de anular.

## Forma

As definições estão no painel (e em Informações da entidade na área de trabalho do Modelo):

- **Forma:** as curvas 3D seguem qualquer direção; uma curva plana fica no seu próprio plano e pode ser preenchida.
- **Preencher splines fechadas** (plana): os contornos tornam-se uma placa; um contorno dentro de outro é um furo, por isso as letras mantêm os seus furos.
- **Extrudir:** metade da largura da faixa (curvas abertas ou 3D), ou metade da espessura da placa (preenchida).
- **Profundidade do chanfro** e **arredondamento:** um tubo redondo ao longo da curva (com extrusão: uma faixa arredondada); numa forma preenchida, uma aresta arredondada.
- **Fechar as extremidades:** tampas num tubo aberto.
- **Afilar ao longo:** escala de forma uniforme ao longo de cada spline, por exemplo `1, 0.2` para um corno, `0, 1, 0` para um fuso.
- **Suavidade** e, para NURBS, **ordem**: quão fina é a curva desenhada e quão suave é (2 retas … 6 mais suave).
- Com pontos selecionados: **raio** (a espessura do tubo nesse ponto, vezes o chanfro), **inclinação** (roda a faixa em torno da curva) e, para NURBS, **peso**.

Os modificadores funcionam sobre um objeto de curva tal como sobre uma malha: uma Matriz ao longo dela, um Espelho, uma superfície de Subdivisão. Ver [Modificadores numa malha](topic:modifiers).

## Transformar numa malha

{{ui:Para malha}} (na área de trabalho Curva ou em Informações da entidade, {{ui:Curva para malha}}) transforma o objeto de curva na malha que mostra agora; os seus modificadores mantêm-se por cima. Depois edite-a na área de trabalho da Malha. Anular devolve-o à curva.

Ver também [Malhas](topic:meshes) e [Editar uma malha](topic:mesh-edit).
