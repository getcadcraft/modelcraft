---
title: Planos de corte: abrir o modelo
summary: Posicione um plano de corte para ver dentro do modelo, deslize-o, inverta-o ou desligue o corte.
keywords: corte, plano de corte, corte de seção, recorte, recortar, interior, planta baixa, fatia, seção transversal
from: 28c3a645
---

Um plano de corte abre o modelo ao meio, para que você veja e trabalhe dentro dele: a planta baixa de uma casa, o interior de um armário. O modelo não é alterado; o corte é apenas uma vista.

## Posicionar um

1. Clique em {{ui:Section}} no grupo {{ui:Camera}}.
2. Clique em uma face. O plano é posicionado nessa face, com quatro setas apontando para você.

   Clique longe de qualquer face para um plano perpendicular à direção em que você mais olha. Pressione antes uma tecla de seta para deixá-lo perpendicular ao vermelho ({{key:Right}}), ao verde ({{key:Left}}) ou ao azul ({{key:Up}}).

O lado para onde as setas apontam é **recortado**. Um plano posicionado sobre uma face ainda não corta nada: deslize-o para dentro do modelo.

## Deslizar, inverter, desligar

Clique no contorno do plano para selecioná-lo. Em {{ui:Entity info}}:

- {{ui:Along its arrows}} indica onde ele está. Digite uma nova distância e pressione {{key:Enter}} para deslizá-lo pelo modelo; digitar `-1m` em um plano que você posicionou em uma face frontal o move 1 m para dentro do modelo.
- {{ui:Reverse}} inverte as setas, para que o outro lado seja recortado.
- {{ui:Active (cuts the model)}}: um plano corta por vez. Marque a caixa de outro plano, ou posicione um novo, e esse outro passa a cortar.
- Renomeie-o em {{ui:Name}}; exclua-o com {{key:Delete}} ou com a {{ui:Eraser}}.

Onde o plano atravessa um sólido fechado, o corte é preenchido com uma cor escura. Geometria que não é fechada (uma face isolada, uma caixa aberta) é cortada, mas não é preenchida.

## Mostrar e ocultar

Em {{ui:Views}}:

- {{ui:Show section planes}} oculta os contornos e as setas dos planos (o corte continua).
- {{ui:Show section cuts}} desliga o corte e mostra o modelo inteiro, sem apagar os planos.

[Visualização de apresentação](topic:styles-shadows#presentation-view) também oculta os contornos.

## Coisas a saber

- O que é recortado não pode ser clicado nem encaixado, então você pode desenhar sobre o que o corte mostra.
- Os planos de corte, qual deles está ativo e as duas opções são salvos no arquivo ModelCraft. Cada alteração é uma etapa de desfazer.
- As exportações sempre contêm o modelo inteiro: um corte é uma vista, não uma edição.
