---
title: Lamina per a una impressora de resina
summary: Lamina el llit d'impressió de l'etapa d'impressió per a una impressora de resina, buida i subjecta la peça, revisa les capes, desa el fitxer de la impressora i troba la teva exposició amb la prova d'exposició.
keywords: resina, suggereix una inclinació, ventosa, força de desenganxament, contravents, impressió en resina, sla, msla, dlp, laminador, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, buidat, forat de ventilació, base de suport, suports, prova d'exposició, escala d'exposició, calibratge, capes, complement
from: 8cc12858
---

Els complements de resina laminen el que hi ha al llit d'impressió en imatges de capa per a la pantalla de la teva impressora, i desen el fitxer que llegeix la impressora. Són gratuïts, sense res bloquejat, i estan desactivats fins que els activis.

:::note
Encara no s'ha carregat cap fitxer en una impressora real. Els fitxers només els han llegit els lectors propis de CadCraft, i els suports són nous. Revisa les capes i fes la primera impressió a mà.
:::

## Què faràs

Lamina una peça per a resina, revisa les capes, desa el fitxer i copia'l a la impressora.

## Passos

1. Obriu {{ui:Configuració}} › {{ui:Complements}} i activeu el complement de laminat per a resina i el complement del format de fitxer de la vostra impressora (Elegoo GOO, SL1, Chitubox o Anycubic). També podeu prémer {{ui:Afegeix impressió en resina}} a la targeta de l'etapa d'impressió.
2. Poseu la peça al llit d'impressió tal com a [Posa les coses al llit d'impressió](topic:print-stage) i després trieu {{ui:Resina}} al costat de **Impressió amb**.
3. A **Configuració d'impressió en resina**, trieu la vostra **Impressora** i la vostra **Resina**. La targeta mostra la mida de la pantalla en píxels. Són les mides publicades pel fabricant, així que comproveu la vostra; les podeu editar a Personalitzat.
4. Definiu **Alçada de capa (mm)**, **Exposició (s)** i **Exposició inferior (s)**. Els valors de cada resina només són un punt de partida.
5. Marqueu **Buida-la, amb un forat de ventilació** si voleu una peça buida, i definiu **Paret (mm)** i **Amplada del forat (mm)**.
6. Marqueu **Suports i una base** i trieu la **Densitat de suports**: Lleugera, Mitjana o Alta.
7. Trieu el **Format de fitxer**. Si la targeta diu que encara no n'hi ha cap d'afegit, premeu el botó que diu Afegeix i el nom del format.
8. Premeu {{ui:Previsualitza les capes}} i moveu el control lliscant **Capa**. Les peces flotants es marquen amb un cercle. La línia de sota indica les capes, el temps i la resina en mL, grams i cost.
9. Premeu {{ui:Desa el fitxer d'impressió}}, comproveu el resum i premeu {{ui:Desa}}. Copieu el fitxer a la vostra impressora.

## Inclinació, ventoses, reforços i la figura de desenganxament

Aquests quatre són estimacions a partir de la forma de la peça. Cap no s'ha provat en una impressora real, així que preneu-los com una pista i mireu les capes.

1. Premeu {{ui:Suggereix una inclinació}} sota **Inclinació (graus)**. CadCraft prova inclinacions de 0 a 60 graus i tria la que té la capa més gran més petita, la superfície amb menys voladís i sense ventosa. Estableix **Inclinació (graus)** i diu què ha trobat. Els pesos de la puntuació són nostres, no del fabricant de la impressora.
2. Després de {{ui:Previsualitza les capes}}, un avís indica les cavitats que només s'obren cap a la pel·lícula. Una cavitat així pot retenir succió quan una capa es desenganxa. Inclineu la peça o afegiu un forat. Les butxaques més estretes que la mida de cel·la de l'avís no es veuen.
3. Amb **Suports i una base** activat, marqueu **Reforça els suports alts** per afegir reforços transversals entre pilars alts i prims.
4. La línia sota la vista prèvia indica la capa més gran en cm2. Només mostra una força si introduïu una **Tensió de desenganxament que heu mesurat** sota **Capes inferiors, elevació i velocitats**. Sense el vostre propi valor mesurat, només mostra l'àrea.

## Troba la teva exposició

1. Activeu el complement de la prova d'exposició a {{ui:Configuració}} › {{ui:Complements}}.
2. Premeu {{ui:Posa la peça de prova al llit}}.
3. Premeu {{ui:Desa l'escala d'exposició}}. Obtindreu un fitxer per a cada exposició, dins d'un fitxer zip.
4. Imprimiu cada fitxer amb la mateixa resina i quedeu-vos amb l'exposició que deixi els pilars prims i els forats oberts més nítids.

## Notes

- Laminar s'executa en segon pla, així que la pàgina continua utilitzable amb una placa gran.
- Les peces que no són sòlids tancats es deixen fora, i la targeta ho indica.
- Si la impressora rebutja un fitxer, la targeta del format té opcions per al que el format deixa obert. Canvieu-ne una, torneu a desar i digueu-nos quina ha funcionat.
- Les versions 517 i 518 d'Anycubic no s'escriuen.
