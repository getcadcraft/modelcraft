---
title: Enviar a cena para um motor de jogo
summary: O Studio pode gravar a cena em um projeto do Unreal Engine e mantê-la sincronizada a cada envio; suas próprias edições ficam em uma camada que o CadCraft nunca grava. O plug-in que a abre ainda não foi lançado.
keywords: unreal, unreal engine, motor de jogo, link, enviar, palco usd, projeto, live, câmera cine, fila de renderização de filme
from: 9a765cc2
---

No CadCraft Studio, a lista de motores pode conter um **link** para um projeto do Unreal Engine. Em um só sentido: do CadCraft para o Unreal.

## Enviar a cena

1. Escolha o item Unreal na lista de motores. Na primeira vez, o Studio pede que você selecione a pasta do projeto (a que contém o arquivo `.uproject`); ele a memoriza.
2. Clique em {{ui:Send}}. O Studio grava `CadCraft/<nome do arquivo>/` dentro do projeto: a cena como arquivo USD, o arquivo de configurações, perfis de luz e dois pequenos arquivos de camada.
3. Altere o modelo, salve e envie novamente. Somente a cena e o arquivo de configurações são substituídos.

## Suas edições estão seguras

O palco que o Unreal abre é uma pequena camada raiz criada uma vez, com duas camadas abaixo dela: **a sua**, no topo (`<name>.user.usda`, vazia no início e nunca reescrita pelo CadCraft), e a cena do CadCraft, abaixo. As edições que você salvar na sua própria camada permanecem quando a cena for enviada de novo. Luzes e outros atores que você posicionar no nível do Unreal ficam fora do palco e também não são alterados.

## Sem o Studio

No navegador, ou em um computador onde o Studio não encontra o Unreal, escolha **Pasta do projeto Unreal (.zip)** na lista de motores e clique em {{ui:Render}}. Ele salva a mesma pasta como zip: descompacte-a na pasta `CadCraft` do seu projeto. Deixe **Incluir os arquivos do palco** marcado na primeira vez; desmarque nos envios seguintes, para que o zip contenha apenas a cena e o arquivo de configurações, e a sua camada nunca seja substituída.

:::note
O plug-in do Unreal que abre o palco, aplica o sol, as lâmpadas, as câmeras e a exposição, acompanha cada envio e renderiza uma câmera ainda **não foi lançado** e não foi executado no Unreal. Até lá, Enviar coloca os arquivos no projeto, e as ferramentas USD do próprio Unreal podem abri-los. O Windows é o primeiro sistema; o macOS vem depois.
:::
