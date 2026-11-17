---
title: Trazer um terreno do CivilCraft
summary: Abra o arquivo de endereço para terreno que o CivilCraft cria e adicione as edificações e o lote ao redor como massas e uma linha do terreno, apenas as que você marcar.
keywords: terreno, civilcraft, endereço, lote, edificações vizinhas, massas, contexto, ccsite, dados abertos, openstreetmap
from: f28e4a3b
---

O CivilCraft pode buscar um endereço e salvar o que as fontes de dados abertos conhecem ao redor: edificações vizinhas, o lote, e os contornos de enchente, zoneamento e solo. A ModelCraft usa esse arquivo como sugestões. Nada é adicionado até que você confirme.

## Trazer o arquivo

1. No CivilCraft, envie o terreno à ModelCraft, ou salve o arquivo (ele termina em `.ccsite.json`).
2. Na ModelCraft, abra ou solte o arquivo. Abre-se uma lista com uma caixa de seleção para cada edificação e para o lote.
3. Digite uma altura para as edificações cuja fonte não informou. Uma linha ao lado de cada uma informa de onde vem a altura: o número de pavimentos, de 3 m cada, ou a altura que você digitou.
4. Pressione {{ui:Adicionar os marcados}}.

As edificações marcadas viram massas extrudadas em um componente, e o lote vira uma linha ao redor do terreno. Tudo isso é uma única etapa de desfazer. O ponto do endereço fica na origem, em metros a leste e ao norte dela.

Contornos de enchente, zoneamento e solo são listados apenas para referência; não são desenhados.

Os dados vêm de fontes abertas e trazem a sua atribuição no fim da lista. Alturas que não foram informadas são suposições, então verifique-as antes de confiar nelas.
