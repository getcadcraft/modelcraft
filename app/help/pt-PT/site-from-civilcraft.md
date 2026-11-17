---
title: Importar um local do CivilCraft
summary: Abra o ficheiro de endereço para local que o CivilCraft cria e adicione, à volta, os edifícios e o lote como massas e uma linha do perímetro do local, apenas os que assinalar.
keywords: local, civilcraft, endereço, lote, edifícios vizinhos, massas, contexto, ccsite, dados abertos, openstreetmap
from: f28e4a3b
---

O CivilCraft pode procurar um endereço e guardar o que as fontes de dados abertos conhecem à volta: edifícios vizinhos, o lote, e os contornos de cheias, de zonamento e de solos. O ModelCraft recebe esse ficheiro como sugestões. Nada é adicionado sem confirmação.

## Trazer o ficheiro

1. No CivilCraft, envie o local para o ModelCraft, ou guarde o ficheiro (termina em `.ccsite.json`).
2. No ModelCraft, abra ou largue o ficheiro. Abre-se uma lista com uma caixa de verificação para cada edifício e para o lote.
3. Escreva uma altura para os edifícios para os quais a fonte não deu nenhuma. Ao lado de cada um há uma linha que indica de onde vem a sua altura: o número de pisos, a 3 m cada, ou a altura que escreveu.
4. Prima {{ui:Add the ticked ones}}.

Os edifícios marcados tornam-se massas extrudidas num só componente, e o lote torna-se uma linha à volta do local. Tudo isto é um só passo de anulação. O ponto do endereço fica na origem, em metros a leste e a norte dela.

Os contornos de cheias, de zonamento e de solos são listados apenas para informação; não são desenhados.

Os dados vêm de fontes abertas e trazem a sua atribuição no fim da lista. As alturas que não foram indicadas são suposições; verifique-as antes de confiar nelas.
