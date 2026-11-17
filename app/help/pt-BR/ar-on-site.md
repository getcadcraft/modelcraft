---
title: Ver o modelo no local com um celular Android (AR)
summary: Segure um celular Android com Chrome e veja o modelo em tamanho real sobre a câmera, alinhado ao edifício por dois pontos em que você fica, com uma lente de raio-X e uma verificação rápida na próxima visita. Para observar, não para fazer locação.
keywords: ar, realidade aumentada, celular, android, chrome, webxr, no local, local, câmera, tamanho real, raio-X, alinhar, alinhamento, verificar novamente, arcore
from: 0f43b50b
---

{{ui:Ver no local (AR, celular)}} no menu {{ui:Vistas}} mostra o modelo em seu tamanho real sobre a câmera do celular. Funciona em um **celular Android com Chrome**, em uma página segura (https), onde o celular oferece suporte a AR. Em um iPhone ou iPad, um computador, ou um aplicativo Android que apenas mostra uma página web, o item informa o motivo de não poder iniciar; use a vista 3D nesses casos, ou abra esta página no Chrome do celular.

**Um celular serve para observar.** Não meça, não faça locação nem corte nada com base no que a tela mostra: o celular se desloca enquanto você anda, e o erro de apontamento cresce com a distância dos dois pontos em que você alinhou (alguns centímetros perto deles, mais longe). Nada aqui tem precisão de levantamento topográfico.

## Alinhar o modelo

1. Abra o modelo no celular e escolha {{ui:Ver no local (AR, celular)}}. Permita o uso da câmera.
2. O painel na parte inferior indica o primeiro ponto (um canto do modelo no chão). Fique ali no local, aponte o anel verde para o chão e toque em {{ui:Posicionar ponto}}.
3. Caminhe até o segundo ponto, a pelo menos meio metro de distância (quanto mais afastados, melhor o ajuste), e faça o mesmo.
4. O modelo aparece em tamanho real, girado e movido para se ajustar aos dois lugares. O painel informa o quanto os dois pontos concordam.

{{ui:Começar de novo}} limpa os pontos. O alinhamento fica salvo no arquivo do modelo, então, na próxima vez que você abrir o modelo no local, ele começa alinhado.

## Lente de raio-X

{{ui:Lente de raio-X}} mostra o modelo inteiro dentro de uma caixa à frente do celular (cerca de um metro e meio de largura e três metros de profundidade) e apenas um fantasma tênue dele no restante, para que você veja o que está atrás de uma parede sem perder a parede real.

## A próxima visita

Fique no primeiro ponto e toque em {{ui:Verificar novamente}}, depois em {{ui:Posicionar ponto}}. Com menos de 5 centímetros de diferença, o alinhamento é mantido. Com até meio metro, o modelo se move pela diferença. Acima disso, o painel pede que você aponte novamente para os dois lugares.

## Sair

{{ui:Sair do AR}} encerra a sessão. A imagem da câmera fica no navegador: nada é enviado.
