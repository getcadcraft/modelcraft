---
title: Escala per factors i marge de contracció
summary: Escaleu una selecció amb un factor per a cada eix al voltant d'un punt que trieu, o feu un patró més gran pel percentatge que es contrau una peça de fosa.
keywords: escala, no uniforme, factor, percentatge, estirament, contracció, encongiment, fosa, colada, patró, fundició, marge, redimensiona
from: 37e1bbff
---

L'eina d'escala ({{key:S}}) escala uniformement o arrossega una nansa per estirar una o dues direccions. **Escala per factors…** (menú Eines, o el grup Modifica) és la forma escrita: un número per a cada un dels tres eixos.

1. Seleccioneu arestes, cares, grups o components.
2. Obriu {{ui:Escala per factors…}}. Escriviu un factor per al vermell, el verd i el blau. Un factor pot ser `1.015`, `101.5%` o `+1.5%` (i `-2%` per fer-lo més petit). {{ui:El mateix en els tres eixos}} copia el primer als altres dos.
3. Trieu què **es queda quiet**: el centre de la selecció, la seva cantonada més baixa, el centre de la seva base o l'origen.
4. La línia sota els camps mostra la mida ara i després. {{ui:Escala}} ho fa en un sol pas de desfer.

Els eixos són els del grup que teniu obert (els del model, al nivell superior). Un grup o component que està girat surt inclinat si els factors són diferents; escaleu el grup que el conté. El contingut d'un component no es toca, de manera que les altres còpies es mantenen igual.

## Marge de contracció

Una peça de fosa es contrau en refredar-se, per això el seu patró es fa més gran. A **Marge de contracció**, escriviu el percentatge per a cada eix (la vostra fundició o el vostre fabricant de patrons us el dona per al vostre metall; el 1.5 % d'aquí és només un exemple) i premeu {{ui:Usa com a factors}}.

- **El percentatge mateix** fa el factor 1 més el percentatge: 1.5 % dóna 1.015, el que marca una regla de contracció.
- **Exactament el necessari** fa el factor 1 dividit per 1 menys el percentatge: 1.5 % dóna 1.0152, de manera que la fosa surt a la mida de la peça després de contraure's aquesta quantitat.

Els últims percentatges es recorden en aquest navegador.

:::note
El percentatge és cosa vostra: ModelCraft no sap res del vostre metall, del motlle ni del procés.
:::
