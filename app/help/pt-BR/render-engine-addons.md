---
title: Adicionar um motor de renderização com um complemento
summary: O que um complemento pode acrescentar à lista de Motor da caixa de diálogo Renderizar, a permissão necessária para executar um programa e o que o Studio verifica e pergunta.
keywords: complemento, addon, motor, motor de renderização, desenvolvedor, engine.run, permissão, programa, script, assinado, studio, api
from: cd7a39ba
---

Um complemento (Configurações › Complementos) pode adicionar um motor à lista Motor de {{ui:Renderizar imagem…}}. O texto completo para autores de complementos está na seção 16 da especificação de complementos; em resumo:

- O complemento registra um motor com um id que começa pelo seu próprio nome, um nome, configurações opcionais e **um** programa a executar **ou** uma função em JavaScript que desenha a imagem.
- Um motor que executa um programa precisa da permissão **`engine.run`**, mostrada antes da instalação e em Configurações. Ele funciona apenas no Studio; no navegador aparece como um arquivo a salvar.
- O complemento informa o programa (um nome de arquivo simples, nunca um shell), um script que está **dentro do complemento assinado** e argumentos formados por marcadores e palavras simples. O Studio encontra o programa ou pede que você aponte para ele uma vez.
- Na primeira vez que um complemento executa um programa, o **Studio pergunta em uma caixa de diálogo própria**: qual complemento, qual programa, e que um script pode fazer tudo o que o programa pode. Permita apenas para um complemento em que você confia. Sua resposta fica lembrada para aquele complemento e aquele programa.
- O pacote (a cena em USD e um arquivo de configurações, com o arquivo glTF quando o complemento o pedir) e o script do complemento vão para uma pasta temporária nova, o programa é executado ali, e a imagem volta marcada com o nome do motor do complemento.

:::note
Complementos só podem adicionar motores de renderização a partir da API de complementos 1.4. Um exemplo completo de um renderizador de linha de comando de código aberto está no seu próprio repositório; ele ainda não foi executado nesse renderizador.
:::
