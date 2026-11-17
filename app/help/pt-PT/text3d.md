---
title: Texto 3D
summary: Acrescente letras a um modelo como faces, planas ou sólidas, assentes em qualquer face: uma placa, um número de polícia, um nome numa porta.
keywords: texto 3d, texto, letras, letreiro, placa, sinalética, número de polícia, etiqueta, gravar, tipo de letra, palavras
from: 923f5d93
---

{{ui:Texto 3D}} no grupo {{ui:Desenhar}} cria letras a partir de faces, que pode pintar, empurrar/puxar ou recortar num sólido.

## Acrescentar texto

1. Clique em {{ui:Texto 3D}}.
2. Escreva o texto. Prima {{key:Enter}} na caixa para uma segunda linha.
3. Defina a {{ui:Altura da letra}} (a altura de uma letra maiúscula, como `30cm` ou `1'`) e a {{ui:Profundidade}}:
   - `0` dá **letras planas**: faces assentes sobre aquilo onde as colocar, prontas a pintar ou a empurrar/puxar.
   - Uma profundidade como `5cm` dá **letras sólidas**: sólidos fechados que pode usar com as [ferramentas de sólidos](topic:solids).
4. Clique em {{ui:Colocar}} e depois clique onde o texto deve ficar.

Sobre uma face, o texto assenta nessa face, lido da esquerda para a direita: numa parede fica de pé; no chão ou numa mesa fica deitado ao longo do vermelho. Longe de qualquer face, fica no chão.

O texto é um **componente** com o próprio texto como nome, por isso todas as cópias mudam se editar uma, e aparece na lista {{ui:Componentes}} para voltar a colocar.

## Coisas a saber

- As letras são a fonte de traço único do próprio ModelCraft, engrossada: limpa e legível, sem escolha de tipo de letra por enquanto.
- Letras, algarismos e sinais comuns (incluindo letras acentuadas) são desenhados; um carácter que a fonte não tem aparece como uma pequena caixa.
- Para mudar as palavras, apague o texto e acrescente-o de novo.
- Para recortar letras numa superfície, crie letras sólidas, coloque-as a meio de um sólido dentro de um grupo e [subtraia-as](topic:solids).
