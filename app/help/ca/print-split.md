---
title: Divideix un model gran per imprimir
summary: Talla un model massa gran per a la impressora en peces que hi càpiguen, amb tacs, claus, cues d'oreneta, forats per a tassells o imants i el número de la unió a les dues cares, i descarrega totes les peces i una fulla de muntatge en un sol zip.
keywords: impressió 3D, divideix, inclinat, tall inclinat, tall oblic, divisor, tall, massa gran, mida del llit, volum d'impressió, peces, part, connectors, tacs, claus, cua d'oreneta, tassell, imant, joc, tolerància, números de peça, muntatge, vista explosionada, zip, stl, 3mf, llicència, license, clau USB, dongle
from: ee96ba77
---

Quan un model és més gran que el llit de la impressora, **Divideix per imprimir** el talla en peces que hi càpiguen, afegeix connectors perquè les peces encaixin en unir-les i grava el mateix número a les dues cares de cada unió. Obriu {{ui:Export}} › {{ui:Check for 3D printing (STL or 3MF)…}}; la línia **Eines d'impressió** del diàleg té {{ui:Divideix per imprimir}}. S'obre com una targeta sobre la vista.

Treballa sobre el que s'imprimeix: la selecció, o tot el que es mostra si no hi ha res seleccionat. El que s'imprimeix ha de ser un sòlid tancat; si la comprovació troba forats, useu [Repara](topic:print-tools#repair) primer.

S'executa a ModelCraft, al vostre ordinador: no hi ha servidor de llicències, no hi ha clau USB i no es puja res.

## Com tallar

- **Ajusta al llit, el mínim de peces**: indiqueu l'amplada, la profunditat i l'alçada del llit (surten de {{ui:Configuració}} › ModelCraft › impressora 3D). La targeta diu quantes peces calen i quina mida té cadascuna; talla el model en peces iguals, les mínimes que hi càpiguen. Una peça pot quedar de costat als fitxers si és el que la fa encaixar. Els connectors que sobresurten d'una peça compten en la seva mida.
- **En els llocs que indico**: trieu l'eix on tallar i escriviu on, en mil·límetres des de l'extrem baix del model, amb comes entre mig (`100, 200` fa tres peces).
  **Inclina** gira els talls fins a 60° sobre un dels altres dos eixos (un tall perpendicular a Z inclinat sobre X, per exemple): cada tall inclinat passa per la línia central del model a la seva posició, dóna més superfície per encolar a les peces i amaga millor la unió sobre una superfície inclinada. Els connectors es posen en angle recte respecte al tall.

Els plans de tall es dibuixen al voltant del model com a línies de guions mentre la targeta és oberta.

## Connectors

Cada lloc on dues peces es toquen rep connectors, col·locats per si mateixos on hi ha més espai: com a mínim la **paret mínima** més el **joc** més la seva pròpia mida, allunyats de l'exterior, i prou lluny de cada altre tall perquè mai no coincideixin dos forats. En una cara llarga se'n posen dos repartits al llarg, perquè les peces no puguin girar.

- **Tacs rodons**: un tac en una peça (amb la punta xamfrenada), un forat a l'altra.
- **Claus quadrades**: el mateix, quadrat, perquè una peça només pugui encaixar d'una manera.
- **Cues d'oreneta**: una llengüeta que llisca dins d'una ranura des del costat. Quan un extrem de la ranura trobaria un altre tall, la cua d'oreneta s'atura abans i llisca des de l'extrem obert. Les cues d'oreneta van bé per a talls en una sola direcció (una fila de llesques); en una graella, useu tacs o tassells.
- **Forats per a tassells**: un forat a cada costat; els passadors també s'imprimeixen (al zip).
- **Butxaques per a imants**: una butxaca a cada costat per a un imant rodó del diàmetre i gruix que indiqueu. Comproveu els pols abans d'encolar-los.
- **Cap (cola)**.

El **joc** és la distància a cada costat entre un tac i el seu forat (0.2 mm per començar). És exacte al número que doneu: els forats rodons es fan una mica més grans perquè les seves cares planes, no les cantonades, mantinguin aquest joc. Augmenteu-lo si les peces de la impressora surten massa ajustades.

Quan una unió no té lloc per a un connector (una paret fina, una àrea de contacte petita), la targeta ho diu: encoleu aquesta.

## Números de peça

Amb **Grava els números d'unió a les dues cares** activat, cada unió rep el número de les seves dues peces, com `3-4`, gravat 0.6 mm de profunditat a les dues cares, llegit en el sentit correcte a cada una. Els números comencen a 5 mm d'alçada i es fan més petits per encabir-s'hi, fins a 2.5 mm; una unió sense lloc per al seu número apareix en una llista. Les peces es numeren des de la capa inferior cap amunt.

## Vista prèvia, descàrrega, dividir el model

1. {{ui:Vista prèvia}} talla el model i diu quantes peces, unions i connectors hi ha, si totes les peces passen la comprovació d'impressió 3D i hi caben al llit, i llista la mida de cada peça. Un anell marca cada connector i cada número a la vista.
2. {{ui:Baixa les peces (.zip)}} desa un sol zip: un fitxer per peça (STL o 3MF, com trieu a **Fitxers**), cadascuna dreta sobre el llit; els passadors de tassell; i la **fulla de muntatge**: una imatge de les peces separades amb els seus números (`assembly.svg` i `assembly.png`) i una llista de les peces i les unions (`assembly.txt`).
3. {{ui:Divideix el model}} posa les peces al model en lloc dels grups o components seleccionats, amb els noms de la fulla de muntatge, en un sol pas: {{ui:Desfés}} torna a posar l'original. Necessita que hi hagi grups o components seleccionats per dividir; la descàrrega funciona amb el que s'imprimeix.

## Moure els connectors manualment

Després d'una vista prèvia, **Connectors manuals** us deixa corregir on van els connectors:

- {{ui:Mou-ne un}}: feu clic en un anell vermell de la vista (es torna verd) i després feu clic on hauria d'anar, sobre el tall.
- {{ui:Afegeix-ne un}}: feu clic a la vista on hauria d'anar un connector. Va sobre el pla de tall que arriba al vostre clic, entre les dues peces d'aquell punt.
- {{ui:Suprimeix-ne un}}: feu clic en un anell vermell per treure aquell connector.

Cada canvi es torna a comprovar com els automàtics: un punt massa a prop del contorn, un altre tall o un altre connector no es fa, i la targeta ho diu. {{ui:Automàtic de nou}} oblida les vostres posicions. Es conserven mentre el model, la selecció i els talls no canvien.

Una vista prèvia es manté fins que canvien el model, la selecció o un ajust; després la targeta demana tornar a fer la vista prèvia.

:::note
Cada peça es comprova com la comprovaria la comprovació d'impressió 3D abans de descarregar-la. El vostre laminador encara decideix com s'imprimeix cada peça: mireu-les totes allà i imprimiu primer una unió per veure com gestiona la vostra impressora el joc.
:::
