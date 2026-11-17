---
title: Rever o modelo num visor de RV
summary: Percorrer o modelo em tamanho real num visor de RV: saltar, rodar, medir, cortar, colocar questões com uma imagem, ver como maqueta de mesa e encontrar os outros de uma sessão em direto.
keywords: rv, vr, realidade virtual, visor, webxr, xr, imersivo, quest, oculus, vive, index, pico, passeio virtual, teletransporte, revisão de projeto, revisão, medir, corte, questão, questões, bcf, maqueta de mesa, maqueta à escala, presença, avatares, em direto, em conjunto
from: fa2f591a
---

{{ui:Rever em RV}} coloca-o dentro do modelo com um visor de RV, em tamanho real. Fica de pé onde está a câmara da vista, no chão por baixo dela, virado para o mesmo lado. Nada é enviado para lado nenhum: o visor mostra o que o navegador desenha neste computador (ou no navegador do próprio visor).

## O que é preciso

- Um visor que o navegador consiga controlar (WebXR): o navegador do próprio visor autónomo, ou o Chrome ou o Edge num PC com um visor ligado.
- O ModelCraft aberto numa página segura (https), tal como acontece neste site.

Quando não há visor, {{ui:Rever em RV}} fica a cinzento e indica o motivo.

## Iniciar

1. Prepare a vista onde quer começar: num compartimento, ou no exterior a olhar para o edifício.
2. Clique em {{ui:Vistas}} no grupo {{ui:Câmara}} e depois em {{ui:Rever em RV}}.
3. Coloque o visor.

O menu está na parte de trás da mão esquerda. Aponte-o com o comando direito e puxe o gatilho para escolher um botão. (Com apenas uma mão, o menu flutua à frente do sítio onde começou.)

## Como fica

O visor mostra o modelo com o aspeto da [vista em direto](topic:live-view): os aspetos e os materiais que atribuiu às faces, o céu e o sol a partir do local e da data do modelo, com a respetiva sombra, lâmpadas, plantas e rochas dispersas, e a luz refletida em paredes e pisos (calculada neste computador enquanto olha à volta, e a acompanhá-lo ao mover-se). O brilho e a transformação de visualização (ACES ou AgX) são os de [Renderizar uma imagem](topic:render). A quantidade desenhada depende do que o navegador do visor tem, tal como no computador; a oclusão ambiental, os reflexos e o bloom ficam só no computador.

## Deslocar-se

- **Saltar:** em {{ui:Mover}}, aponte para um piso e puxe o gatilho; aterra aí. Ou empurre o manípulo para a frente para mirar, e solte para saltar. Só se pode aterrar em pisos e no solo (superfícies viradas para cima), nunca numa parede.
- **Rodar:** empurre o manípulo para a esquerda ou para a direita: roda 30° de cada vez.
- **Caminhar:** na área de jogo, basta caminhar.

## Medir

Escolha {{ui:Medir}} e, depois, puxe o gatilho em dois pontos. A distância aparece entre eles, nas unidades do modelo. Um ponto perto de um canto ajusta-se ao canto.

## Cortar e ver por dentro

Escolha {{ui:Corte}} e puxe o gatilho sobre uma superfície:

- numa parede (ou em qualquer coisa que não seja um piso): tudo o que fica entre a posição atual e essa superfície é cortado, para se ver para dentro. Funciona melhor do exterior, ou de um lado ao outro de um compartimento;
- num piso, de cima: um corte em planta a 1.2 m acima desse piso, para que as paredes mostrem a parte inferior.

{{ui:Limpar}} retira o corte e as medições. Se um plano de corte cortar o modelo na vista ao iniciar, o visor começa com ele.

## Colocar uma questão

Escolha {{ui:Questão}} e puxe o gatilho no sítio onde está o problema. Um alfinete numerado assinala-o, e o ModelCraft guarda a questão com uma imagem do que viu e do sítio onde estava. Ao sair da RV, as questões ficam na lista {{ui:Questões}}, à direita:

- o botão do olho mostra a questão a partir do sítio onde foi colocada;
- {{ui:Guardar como BCF}} transfere todas num ficheiro BCF, que os programas de revisão BIM abrem (com a câmara e a imagem incluídas);
- ficam também guardadas no ficheiro `.modelcraft`.

Acrescente um comentário a uma questão depois de sair da RV, num programa BCF: escrever no visor ainda não está implementado.

## Ver como maqueta de mesa

{{ui:Maqueta de mesa}} reduz o modelo para caber numa mesa à frente; ande à volta dele, ou rode-o com o manípulo. {{ui:Escala real}} devolve-o ao sítio onde estava.

## Com outros, em direto

Numa [sessão em direto](topic:work-live), quem está em RV vê os outros como uma cabeça e duas mãos, na sua própria cor, com o nome, e um ponto onde cada um aponta. As alterações feitas por qualquer pessoa chegam ao visor num instante. As pessoas à secretária ainda não são mostradas no visor.

## Sair

Escolha {{ui:Sair da RV}} (ou tire o visor e termine aí). A vista no ecrã move-se para onde estava a cabeça.

:::note
Testado apenas com um emulador de visor, ainda não com um visor real. Um modelo grande pode fazer a imagem do visor travar: oculte primeiro o que não precisa ([ocultar e isolar](topic:hide-isolate)).
:::
