---
title: Escolher qual programa desenha a imagem
summary: A escolha de Motor na caixa de diálogo Renderizar: os nossos dois motores, outros programas no CadCraft Studio e o que a web faz no lugar.
keywords: renderizar, motor, renderizador, motor de renderização, plug-in, plugin, studio, programa externo, desenhado por, fila, motor de complemento
from: be4b056a
---

{{ui:Renderizar imagem…}} tem uma escolha **Motor** acima de Modo. Os nossos dois motores estão sempre disponíveis e funcionam em qualquer lugar; complementos podem adicionar mais, e no CadCraft Studio a lista também traz os programas que assumem a cena.

| Motor | O que faz | Onde |
|---|---|---|
| Embutido: Rápido | A imagem rápida: luz do dia, sombras suaves, aparência de vidro e metal, em segundos | No navegador e no Studio |
| Embutido: Path tracer | Luz que reflete entre superfícies na sua placa de vídeo ou no processador, a fila de renderização e os outros computadores da sua rede | No navegador e no Studio |
| Motor de um complemento | Ele desenha e devolve a imagem: veja [Desenhar a imagem com outro programa](topic:render-other-program) | O navegador (um motor escrito em JavaScript) ou o Studio (um motor que executa um programa) |
| Um programa que assume a cena | O Studio coloca a cena na pasta dele e a mantém sincronizada | Studio |
| Abrir em … | Salva a cena e a abre em um programa; nada volta: veja [Abrir a cena em outro programa](topic:render-open-in) | A web salva o arquivo |

## Como a escolha funciona

- Escolher Rápido ou o Path tracer muda o Modo junto, e vice-versa. Nada mais na caixa de diálogo muda para quem nunca usa outro motor.
- Um motor que não está disponível continua na lista com o motivo ("não encontrado", "precisa de uma versão mais nova"); você não pode escolhê-lo. No navegador, um motor que só funciona no Studio mostra "salva um arquivo": {{ui:Renderizar imagem…}} então salva a cena e as suas configurações em um arquivo que você leva a esse programa.
- A escolha é salva com as configurações de renderização do arquivo, e o motor escolhido por último é o motor inicial para arquivos que não têm escolha própria.
- Uma imagem de outro programa informa qual programa a desenhou e a sua versão, na caixa de diálogo e na fila de renderização. As garantias da página [Renderizar](topic:render) valem apenas para os **nossos** motores: outro programa ilumina, ajusta tons e amostra à sua maneira, então duas imagens da mesma cena são parecidas em câmera, sol, lâmpadas e exposição, mas não pixel a pixel.

## O que cada motor recebe

A cena vai para outro programa como um **pacote**: o modelo como um arquivo USD (o mesmo arquivo que [Salvar como USD](topic:usd) grava) e um arquivo de configurações que guarda o que um importador USD não pode ser confiado a levar: os valores exatos dos materiais, as lâmpadas que estão ligadas com a sua potência e os seus perfis de luz, o sol, o céu, a exposição e a câmera como a caixa de diálogo a desenharia. Nada é enviado a lugar algum.

## A fila de renderização

Uma imagem ou uma animação para outro programa pode esperar na [fila de renderização](topic:render#the-render-queue) como as nossas; o seu trabalho lembra qual motor ele é para. Uma animação vai para o programa em uma única execução.
