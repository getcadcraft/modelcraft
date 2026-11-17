---
title: Objetos de curva
summary: Desenhe curvas Bézier, NURBS e de segmentos retos, dê-lhes espessura, largura ou afilamento, preencha as planas, defina texto como curva e transforme-as em malhas.
keywords: curva, curvas, bézier, nurbs, spline, splines, caminho, tubo, cano, cabo, corda, bisel, extrusão, afilamento, inclinação, raio, preenchimento, perfil, texto, letras, logotipo, curva para malha
from: 602bf077
---

Um **objeto de curva** é uma curva que gera uma forma: um tubo ao longo dela (bisel), uma faixa (extrusão), uma corneta afilada (afilamento) ou — quando é plana e fechada — uma placa preenchida ou letras. A forma segue a curva: mova um ponto e o tubo se move com ele. Quando a forma estiver correta, transforme-a em uma malha.

## Adicionar uma curva

Escolha {{ui:Curva}} na lista de áreas de trabalho e pressione {{ui:Adicionar}}:

| Tipo | O que é |
| --- | --- |
| Curva Bézier, círculo Bézier | Passa pelos seus pontos; cada ponto tem duas alças que definem a direção da curva |
| Curva NURBS, círculo NURBS, Caminho | Suave, traçada em direção aos seus pontos (começa e termina nos pontos extremos); cada ponto tem um peso |
| Texto | Seu texto como contornos de letras planos e preenchidos |

Uma nova curva recebe um tubo fino para ser vista e selecionada; defina a profundidade do bisel como 0 para uma curva nua.

Você também pode partir de algo desenhado: selecione um arco, um círculo, um polígono ou uma curva desenhada na área de trabalho Modelo e pressione {{ui:Criar um objeto de curva}} em Informações da entidade. As linhas desenhadas permanecem.

## Editar os pontos

Clique duas vezes em um objeto de curva (ou selecione-o e escolha {{ui:Curva}}) para editá-lo.

- Clique em um ponto ou alça (Shift adiciona ou remove); arraste-o para mover. Arraste sobre um espaço vazio para selecionar com uma caixa.
- {{ui:Estender}} ({{key:E}}, ou {{key:Ctrl}}+clique) adiciona um ponto após a extremidade selecionada, no cursor.
- {{ui:Subdividir}} ({{key:W}}) coloca um ponto entre cada par de vizinhos selecionados; uma Bézier mantém sua forma.
- {{ui:Mover}}, {{ui:Girar}}, {{ui:Escala}} movem os pontos selecionados com o cursor (teclas de modelagem {{key:G}} {{key:R}} {{key:S}}, teclas de empurrar/puxar {{key:M}} {{key:Q}} {{key:S}}); clique para confirmar, {{key:Esc}} para cancelar.
- {{ui:Fechar}} ({{key:C}}) fecha uma spline aberta ou abre uma fechada; {{ui:Inverter}} ({{key:Shift+R}}) a percorre no sentido contrário.
- Alças Bézier: {{ui:Suavizar}} ({{key:V}}) as posiciona para uma curva suave, {{ui:Canto}} ({{key:Shift+V}}) as aponta para os vizinhos, {{ui:Livre}} ({{key:Alt+V}}) as deixa onde você as colocou. Arrastar uma alça a torna livre.
- {{ui:Bézier}}, {{ui:NURBS}} e {{ui:Poli}} alteram o tipo das splines selecionadas, mantendo os pontos.

Cada alteração é uma etapa de desfazer.

## Forma

As configurações ficam no painel (e em Informações da entidade na área de trabalho Modelo):

- **Forma:** curvas 3D seguem qualquer direção; uma curva plana permanece em seu próprio plano e pode ser preenchida.
- **Preencher splines fechadas** (planas): os contornos viram uma placa; um contorno dentro de outro é um furo, então as letras mantêm seus furos.
- **Extrusão:** metade da largura da faixa (curvas abertas ou 3D), ou metade da espessura da placa (preenchida).
- **Profundidade do bisel** e **arredondamento:** um tubo redondo ao longo da curva (com extrusão: uma faixa arredondada); em uma forma preenchida, uma borda arredondada.
- **Fechar as extremidades:** tampas em um tubo aberto.
- **Afilar ao longo:** escala de forma uniforme ao longo de cada spline, por exemplo `1, 0.2` para uma corneta, `0, 1, 0` para um fuso.
- **Suavidade** e, para NURBS, **ordem**: o quão finamente é traçada e o quão suave é (2 reto … 6 o mais suave).
- Com pontos selecionados: **raio** (a espessura do tubo ali, multiplicada pelo bisel), **inclinação** (gira a faixa em torno da curva) e, para NURBS, **peso**.

Os modificadores funcionam sobre um objeto de curva como em uma malha: uma Matriz ao longo dela, um Espelho, uma superfície de Subdivisão. Veja [Modificadores em uma malha](topic:modifiers).

## Transformar em malha

{{ui:Para malha}} (na área de trabalho Curva ou em Informações da entidade, {{ui:Curva para malha}}) transforma o objeto de curva na malha que ele mostra agora; seus modificadores permanecem por cima. Depois, edite-o na área de trabalho Malha. Desfazer o reverte.

Veja também [Malhas](topic:meshes) e [Editar uma malha](topic:mesh-edit).
