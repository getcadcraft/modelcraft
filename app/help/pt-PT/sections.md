---
title: Planos de corte: abrir o modelo
summary: Coloque um plano de corte para ver o interior do modelo, deslize-o, inverta-o ou desligue o corte.
keywords: corte, plano de corte, secção, corte transversal, recorte, interior, planta, fatia, secção transversal
from: 28c3a645
---

Um plano de corte abre o modelo, para que possa ver e trabalhar no seu interior: a planta de uma casa, o interior de um armário. O modelo não é alterado; o corte é apenas uma vista.

## Colocar um plano

1. Clique em {{ui:Corte}} no grupo {{ui:Câmara}}.
2. Clique numa face. O plano fica nessa face, com quatro setas apontadas para si.

   Clique fora de qualquer face para colocar um plano quadrado em relação à direção em que mais olha. Prima antes uma tecla de seta para o pôr quadrado em relação ao vermelho ({{key:Right}}), ao verde ({{key:Left}}) ou ao azul ({{key:Up}}).

O lado para onde apontam as setas é **cortado e removido**. Um plano colocado numa face ainda não corta nada: deslize-o para dentro do modelo.

## Deslizar, inverter, desligar

Clique no contorno do plano para o selecionar. Em {{ui:Informações da entidade}}:

- {{ui:Ao longo das setas}} indica onde ele está. Escreva uma nova distância e prima {{key:Enter}} para o deslizar através do modelo; escrever `-1m` num plano colocado numa face da frente move-o 1 m para dentro do modelo.
- {{ui:Inverter}} roda as setas, para que o outro lado seja o cortado e removido.
- {{ui:Ativo (corta o modelo)}}: só um plano corta de cada vez. Marque a caixa de outro plano, ou coloque um novo, e esse passa a cortar.
- Mude-lhe o nome em {{ui:Nome}}; elimine-o com {{key:Delete}} ou com a {{ui:Borracha}}.

Onde o plano atravessa um sólido fechado, o corte é preenchido com uma cor escura. A geometria que não é fechada (uma face isolada, uma caixa aberta) é cortada mas não preenchida.

## Mostrar e ocultar

Em {{ui:Vistas}}:

- {{ui:Mostrar planos de corte}} oculta os contornos e as setas dos planos (o corte mantém-se).
- {{ui:Mostrar cortes}} desliga o corte e mostra o modelo inteiro, sem eliminar os planos.

A [vista de apresentação](topic:styles-shadows#presentation-view) oculta também os contornos.

## Coisas a saber

- O que fica cortado e removido não pode ser clicado nem apanhado pelo snap, por isso pode desenhar sobre aquilo que o corte mostra.
- Os planos de corte, o que está ativo e os dois interruptores ficam guardados no ficheiro do ModelCraft. Cada alteração é um passo de anulação.
- As exportações contêm sempre o modelo inteiro: um corte é uma vista, não uma edição.
