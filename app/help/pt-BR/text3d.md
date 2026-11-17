---
title: Texto 3D
summary: Adicione letras a um modelo como faces, planas ou sólidas, apoiadas em qualquer face: uma placa, um número de casa, um nome numa porta.
keywords: texto 3d, texto, letras, letreiro, placa, sinalização, número da casa, rótulo, gravar, fonte, palavras
from: 923f5d93
---

{{ui:Texto 3D}} no grupo {{ui:Desenhar}} cria letras feitas de faces, que você pode pintar, empurrar ou puxar, ou cortar em um sólido.

## Adicionar texto

1. Clique em {{ui:Texto 3D}}.
2. Digite o texto. Pressione {{key:Enter}} na caixa para uma segunda linha.
3. Defina a {{ui:Altura da letra}} (a altura de uma letra maiúscula, como `30cm` ou `1'`) e a {{ui:Profundidade}}:
   - `0` gera **letras planas**: faces deitadas sobre a superfície onde você as posiciona, prontas para pintar ou para empurrar e puxar.
   - Uma profundidade como `5cm` gera **letras sólidas**, sólidos fechados que você pode usar com as [ferramentas de sólidos](topic:solids).
4. Clique em {{ui:Inserir}} e depois clique onde o texto deve ficar.

Sobre uma face, o texto fica apoiado nela, lido da esquerda para a direita: numa parede, fica em pé; no chão ou numa mesa, fica deitado ao longo do vermelho. Longe de qualquer face, fica no chão.

O texto é um **componente** com o nome dele, então todas as cópias mudam se você editar uma, e ele aparece na lista {{ui:Componentes}} para inserir de novo.

## Coisas a saber

- As letras usam a fonte de traço único própria do ModelCraft, engrossada: limpa e legível, sem escolha de tipo de letra por enquanto.
- Letras, algarismos e sinais comuns (inclusive letras acentuadas) são desenhados; um caractere que a fonte não tem aparece como uma pequena caixa.
- Para mudar as palavras, apague o texto e adicione-o de novo.
- Para cortar letras em uma superfície, crie letras sólidas, posicione-as pela metade dentro de um sólido de grupo e [subtraia-as](topic:solids).
