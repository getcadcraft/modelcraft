---
title: Enviar a cena para um motor de jogo
summary: O Studio pode escrever a cena num projeto do Unreal Engine e mantê-la atualizada a cada envio; as suas próprias alterações ficam numa camada que o CadCraft nunca escreve. A extensão que a abre ainda não foi lançada.
keywords: unreal, unreal engine, motor de jogo, ligação, enviar, palco usd, projeto, live, câmara cine, fila de renderização de filme
from: 9a765cc2
---

No CadCraft Studio, a lista Engine pode conter uma **ligação** a um projeto do Unreal Engine. Apenas num sentido: do CadCraft para o Unreal.

## Enviar a cena

1. Escolha a entrada Unreal na lista Engine. Na primeira vez, o Studio pede que selecione a pasta do projeto (a que contém o ficheiro `.uproject`); fica guardada.
2. Clique em {{ui:Enviar}}. O Studio escreve `CadCraft/<nome do ficheiro>/` dentro do projeto: a cena como ficheiro USD, o ficheiro de definições, perfis de luz e dois pequenos ficheiros de camada.
3. Altere o modelo, guarde e envie de novo. Apenas a cena e o ficheiro de definições são substituídos.

## As suas edições estão seguras

O palco que o Unreal abre é uma pequena camada raiz criada uma vez, com duas camadas por baixo: **a sua** por cima (`<name>.user.usda`, vazia no início, nunca reescrita pelo CadCraft) e a cena do CadCraft por baixo. As edições que guardar na sua própria camada mantêm-se quando a cena for enviada de novo. As luzes e os outros atores que colocar no nível do Unreal ficam fora do palco e também não são alterados.

## Sem o Studio

No navegador, ou num computador onde o Studio não encontra o Unreal, escolha **Pasta de projeto Unreal (.zip)** na lista Engine e clique em {{ui:Renderizar}}. Guarda a mesma pasta como zip: descompacte-o para a pasta `CadCraft` do seu projeto. Deixe **Incluir os ficheiros do palco** marcado na primeira vez; desmarque-o nos envios seguintes, para que o zip contenha apenas a cena e o ficheiro de definições e a sua própria camada nunca seja substituída.

:::note
A extensão do Unreal que abre o palco, aplica o sol, as lâmpadas, as câmaras e a exposição, acompanha cada envio e renderiza uma câmara ainda **não foi lançada** e não foi executada no Unreal. Até lá, Enviar coloca os ficheiros no projeto, e as ferramentas USD do próprio Unreal podem abri-los. O Windows é o primeiro sistema; o macOS segue-se.
:::
