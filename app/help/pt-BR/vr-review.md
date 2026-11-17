---
title: Revisar o modelo em um headset de RV
summary: Percorra o modelo em tamanho real em um headset de RV: pule, gire, meça, corte o modelo, coloque problemas com uma imagem, veja-o como um modelo sobre a mesa e encontre os outros de uma sessão ao vivo.
keywords: rv, realidade virtual, headset, webxr, xr, imersivo, quest, oculus, vive, index, pico, percorrer, passeio, teletransporte, revisão de projeto, revisão, medir, corte, problema, problemas, bcf, sobre a mesa, modelo em escala, presença, avatares, ao vivo, juntos
from: fa2f591a
---

{{ui:Revisar em RV}} coloca você dentro do modelo com um headset de RV, em tamanho real. Você fica onde está a câmera da vista, no chão abaixo dela, olhando para o mesmo lado. Nada é enviado: o headset mostra o que o navegador desenha neste computador (ou no próprio navegador do headset).

## O que você precisa

- Um headset que o navegador consiga controlar (WebXR): o navegador próprio de um headset independente, ou Chrome ou Edge em um PC com um headset conectado.
- O ModelCraft aberto em uma página segura (https), como é neste site.

Quando não há um headset, {{ui:Revisar em RV}} fica cinza e diz o motivo.

## Começar

1. Ajuste a vista onde você quer começar: em um cômodo, ou do lado de fora olhando para o prédio.
2. Clique em {{ui:Vistas}} no grupo {{ui:Câmera}}, depois em {{ui:Revisar em RV}}.
3. Coloque o headset.

O menu fica nas costas da sua mão esquerda. Aponte para ele com o controle direito e aperte o gatilho para escolher um botão. (Com apenas uma mão, o menu flutua na frente de onde você começou.)

## Como fica

O headset mostra o modelo com o aspecto da [vista em tempo real](topic:live-view): os visuais e materiais que você deu às faces, o céu e o sol a partir do lugar e da data do seu modelo com a sombra dele, luminárias, plantas e pedras espalhadas, e a luz refletida em paredes e pisos (calculada neste computador enquanto você olha ao redor, e acompanhando você conforme se move). O brilho e a transformação de visualização (ACES ou AgX) são os de [Renderizar uma imagem](topic:render). Quanto ele desenha depende do que o navegador do headset tem, como no computador; a oclusão ambiental, os reflexos e o brilho ficam no computador.

## Mover-se

- **Pular:** em {{ui:Mover}}, aponte para um piso e aperte o gatilho; você pousa ali. Ou empurre o analógico para a frente para mirar, e solte para pular. Você só pode pousar em pisos e no chão (superfícies voltadas para cima), nunca em uma parede.
- **Girar:** empurre o analógico para a esquerda ou para a direita: você gira 30° cada vez.
- **Caminhar:** na sua área livre, simplesmente ande.

## Medir

Escolha {{ui:Medir}} e aperte o gatilho em dois pontos. A distância aparece entre eles, nas unidades do modelo. Um ponto próximo a um canto se encaixa no canto.

## Cortar o modelo

Escolha {{ui:Corte}} e aperte o gatilho sobre uma superfície:

- em uma parede (ou qualquer coisa que não seja um piso): tudo entre você e aquela superfície é removido, para que você veja para dentro. Isto funciona melhor de fora, ou atravessando um cômodo;
- em um piso, de cima: um corte em planta a 1.2 m sobre aquele piso, para que as paredes mostrem a parte inferior.

{{ui:Limpar}} remove o corte e as medições. Se um plano de corte cortar o modelo na vista quando você começar, o headset começa com ele.

## Colocar um problema

Escolha {{ui:Problema}} e aperte o gatilho onde está o problema. Um alfinete numerado o marca, e o ModelCraft guarda o problema com uma imagem do que você viu e de onde estava. Quando você sai da RV, os problemas ficam na lista {{ui:Problemas}} à direita:

- o botão de olho mostra o problema de onde ele foi colocado;
- {{ui:Salvar como BCF}} baixa todos como um arquivo BCF, que os programas de revisão BIM abrem (câmera e imagem incluídas);
- eles também são salvos no arquivo `.modelcraft`.

Adicione um comentário a um problema depois de sair da RV, em um programa BCF: digitar no headset ainda não está implementado.

## Ver como um modelo sobre a mesa

{{ui:Sobre a mesa}} reduz o modelo para caber em uma mesa à sua frente; ande em volta dele, ou gire-o com o analógico. {{ui:Tamanho real}} coloca você de volta onde estava.

## Com outros, ao vivo

Em uma [sessão ao vivo](topic:work-live), todos na RV veem os outros como uma cabeça e duas mãos na cor própria de cada um, com o nome, e um ponto onde cada um aponta. As edições feitas por qualquer pessoa chegam ao seu headset em um instante. As pessoas na mesa ainda não aparecem no headset.

## Sair

Escolha {{ui:Sair da RV}} (ou tire o headset e encerre ali mesmo). A vista na tela vai para onde estava a sua cabeça.

:::note
Testado apenas com um emulador de headset, ainda não com um headset real. Um modelo grande pode fazer o headset travar: oculte primeiro o que você não precisa ([ocultar e isolar](topic:hide-isolate)).
:::
