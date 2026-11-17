---
title: Adicionar um motor de renderização com um suplemento
summary: O que um suplemento pode acrescentar à lista Motor da caixa Renderizar, a permissão de que precisa para executar um programa e o que o Studio verifica e pergunta.
keywords: suplemento, addon, motor, motor de renderização, programador, engine.run, permissão, programa, script, assinado, studio, api
from: cd7a39ba
---

Um suplemento (Definições › Suplementos) pode acrescentar um motor à lista Motor de {{ui:Renderizar uma imagem…}}. O texto completo para autores de suplementos é a secção 16 da especificação dos suplementos; em resumo:

- O suplemento regista um motor com um identificador que começa pelo seu próprio, um nome, definições opcionais e **ou** um programa a executar **ou** uma função em JavaScript que desenha a imagem.
- Um motor que executa um programa precisa da permissão **`engine.run`**, mostrada antes da instalação e nas Definições. Só é executado no Studio; no navegador aparece como um ficheiro a guardar.
- O suplemento indica o programa (um nome de ficheiro simples: nunca uma shell), um script que está **dentro do suplemento assinado**, e argumentos formados por marcadores e palavras simples. O Studio encontra o programa ou pede que o indique uma vez.
- Na primeira vez que um suplemento executa um programa, o Studio pergunta **numa caixa própria**: qual suplemento, qual programa, e que um script pode fazer tudo o que o programa pode. Autorize apenas um suplemento em que confie. A sua resposta fica registada para esse suplemento e programa.
- O pacote (a cena em USD e um ficheiro de definições, com o ficheiro glTF quando o suplemento o pede) e o script do suplemento vão para uma pasta temporária nova, o programa é executado aí, e a imagem regressa marcada com o nome do motor do suplemento.

:::note
Os suplementos só podem acrescentar motores de renderização a partir da API de suplementos 1.4. Um exemplo completo para um renderizador de linha de comandos de código aberto está no seu próprio repositório; ainda não foi executado nesse renderizador.
:::
