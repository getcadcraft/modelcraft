---
title: Ver o modelo no local com um telemóvel Android (AR)
summary: Erga um telemóvel Android com o Chrome e veja o modelo em tamanho real sobre a câmara, alinhado com o edifício por dois pontos onde fica de pé, com uma lente de raio-X e uma verificação rápida na visita seguinte. Para observar, não para implantar.
keywords: ar, realidade aumentada, telemóvel, android, chrome, webxr, no local, local, câmara, tamanho real, raio-x, alinhar, alinhamento, verificar de novo, arcore
from: 0f43b50b
---

{{ui:Ver no local (AR, telemóvel)}} no menu {{ui:Vistas}} mostra o modelo com o seu tamanho real sobre a câmara do telemóvel. Funciona num **telemóvel Android com Chrome**, numa página segura (https), onde o telemóvel suporta AR. Num iPhone ou iPad, num computador, ou numa aplicação Android que só mostra uma página web, o item indica porque não pode arrancar; use aí a vista 3D, ou abra esta página no Chrome do telemóvel.

**Um telemóvel serve para observar.** Não meça, não implante nem corte nada a partir do que o ecrã mostra: o telemóvel desvia-se à medida que caminha, e o erro de apontamento cresce com a distância aos dois pontos em que alinhou (alguns centímetros perto deles, mais longe). Nada aqui tem precisão de levantamento topográfico.

## Alinhar o modelo

1. Abra o modelo no telemóvel e escolha {{ui:Ver no local (AR, telemóvel)}}. Permita o acesso à câmara.
2. O painel em baixo indica o primeiro ponto (um canto do modelo no chão). Fique aí no local, aponte o anel verde para o chão e toque em {{ui:Colocar ponto}}.
3. Caminhe até ao segundo ponto, a pelo menos meio metro (quanto mais afastados, melhor o ajuste), e faça o mesmo.
4. O modelo aparece em tamanho real, rodado e movido para encaixar nos dois locais. O painel indica o grau de concordância dos dois pontos.

{{ui:Recomeçar}} limpa os pontos. O alinhamento fica guardado no ficheiro do modelo, por isso, da próxima vez que o abrir no local, começa já alinhado.

## Lente de raio-X

{{ui:Lente de raio-X}} mostra o modelo inteiro dentro de uma caixa à frente do telemóvel (cerca de metro e meio de largura e três metros de profundidade) e apenas um fantasma ténue no resto, para que possa ver o que está atrás de uma parede sem perder a parede real.

## A visita seguinte

Fique no primeiro ponto e toque em {{ui:Verificar de novo}}, depois em {{ui:Colocar ponto}}. Se estiver a menos de 5 centímetros, o alinhamento mantém-se. Até meio metro de diferença, o modelo move-se pela diferença. Acima disso, o painel pede que aponte de novo para os dois locais.

## Sair

{{ui:Sair da AR}} termina a sessão. A imagem da câmara fica no navegador: nada é enviado.
