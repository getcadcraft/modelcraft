---
title: Escolher o programa que desenha a imagem
summary: A escolha de Motor na caixa Renderizar: os nossos dois motores, outros programas no CadCraft Studio e o que a web faz em vez disso.
keywords: renderizar, motor, renderizador, motor de renderização, plug-in, plugin, studio, programa externo, desenhado por, fila, motor de suplemento
from: be4b056a
---

{{ui:Renderizar uma imagem…}} tem uma escolha **Motor** acima de Modo. Os nossos dois motores estão sempre lá e funcionam em todo o lado; os suplementos podem acrescentar mais, e no CadCraft Studio a lista inclui também os programas que assumem a cena.

| Motor | O que faz | Onde |
|---|---|---|
| Integrado: Rápido | A imagem fixa rápida: luz do dia, sombras suaves, aspeto de vidro e metal, em segundos | No navegador e no Studio |
| Integrado: Path tracer | Luz que ressalta entre superfícies na sua placa gráfica ou no processador, a fila de renderização e os outros computadores da sua rede | No navegador e no Studio |
| Um motor de suplemento | Desenha e devolve a imagem: veja [Desenhar a imagem com outro programa](topic:render-other-program) | No navegador (um motor escrito em JavaScript) ou no Studio (um motor que executa um programa) |
| Um programa que assume a cena | O Studio põe a cena na sua pasta e mantém-na em sintonia | Studio |
| Abrir em … | Guarda a cena e abre-a num programa; nada volta: veja [Abrir a cena noutro programa](topic:render-open-in) | A web guarda o ficheiro |

## Como se comporta a escolha

- Escolher Rápido ou Path tracer muda o Modo com ele, e vice-versa. Nada mais na caixa muda para quem nunca usa outro motor.
- Um motor que não está disponível fica na lista com a razão ("não encontrado", "precisa de uma versão mais recente"); não o pode escolher. No navegador, um motor que só funciona no Studio mostra "guarda um ficheiro": {{ui:Renderizar uma imagem…}} guarda então a cena e as suas definições num ficheiro que leva a esse programa.
- A escolha é guardada com as definições de renderização do ficheiro, e o motor escolhido por último é o motor inicial dos ficheiros que não têm escolha própria.
- Uma imagem de outro programa indica qual programa a desenhou e a sua versão, na caixa e na fila de renderização. As promessas da página [Renderizar](topic:render) cobrem **os nossos** motores apenas: outro programa trata a luz, o tom e a amostragem à sua maneira, por isso duas imagens de uma cena são semelhantes em câmara, sol, lâmpadas e exposição, não pixel a pixel.

## O que cada motor recebe

A cena segue para outro programa como um **pacote**: o modelo como ficheiro USD (o mesmo que [Guardar como USD](topic:usd) escreve), e um ficheiro de definições que contém o que um importador de USD não pode ser de confiança: os valores exatos dos materiais, as lâmpadas que estão ligadas com a sua potência e perfis de luz, o sol, o céu, a exposição e a câmara tal como a caixa a desenharia. Nada é enviado para lado nenhum.

## A fila de renderização

Uma imagem ou uma animação para outro programa pode esperar na [fila de renderização](topic:render#the-render-queue) como as nossas; o seu trabalho lembra qual motor lhe corresponde. Uma animação segue para o programa numa só execução.
