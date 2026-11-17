---
title: Posa coses al llit d'impressió i envia-les a una impressora
summary: Afegeix elements de la Biblioteca o el vostre propi model al llit de la impressora, ordena'ls, mira les capes laminades i envia la impressió per USB o per la xarxa, o desa el G-code, sense exportar abans un STL.
keywords: fase d'impressió, impressió 3D, impressora, llit, envia a la impressora 3D, laminador, gcode, g-code, usb, klipper, moonraker, octoprint, prusalink, biblioteca, organitza, ajusta-ho tot, vista prèvia de capes, farciment, suports, filament, pla, petg, complement, complement d'impressió 3D
from: abcf5d7e
---

La {{ui:Fase d'impressió}} disposa les coses al llit de la impressora, les lamina i les envia a la impressora. No cal exportar un fitxer abans. Pertany al complement d'impressió 3D, que està activat per defecte.

:::note
Encara no s'ha imprès res en una impressora real amb això. El laminador és nou: vigileu les primeres capes de la primera impressió i useu la vista prèvia de capes abans d'enviar-la.
:::

## Què hi fareu

Poseu un model al llit, comproveu que hi cap, mireu les capes laminades i envieu-lo a una impressora o deseu el G-code.

## Passos

1. Feu clic a {{ui:Fase d'impressió}} de la barra d'eines. S'obre una targeta sobre la vista i un contorn de línies de guions mostra el vostre llit.
2. Sota **Afegeix des de la Biblioteca**, escriviu un nom a la caixa de cerca, premeu {{ui:Cerca}} i premeu {{ui:Afegeix-ne un}} en un resultat. L'element cau al llit a la mida completa, o reduït perquè hi càpiga. Tot el que ja heu dibuixat o importat i es veu a la vista també és al llit.
3. Sota **Al llit**, comproveu la mida de cada element. Un element marcat com **Fora del llit** s'ha de moure. Moveu, gireu i escaleu les coses a la vista amb les eines habituals.
4. Premeu {{ui:Organitza al llit}} per separar els elements, o {{ui:Ajusta-ho tot al llit}} per reduir-los fins que hi càpiguen.
5. Sota **La vostra impressora**, trieu la mida del **Llit** o un dels perfils d'impressora.
6. Sota **Configuració d'impressió**, trieu el **Material**, la **Qualitat** i el **Farciment %**, i marqueu **Afegeix suports sota els voladissos** si la forma els necessita.
7. Premeu {{ui:Vista prèvia de capes}} i moveu el control lliscant **Capa** per mirar les capes laminades. Si després canvieu la fase o la configuració, torneu a premer {{ui:Vista prèvia de capes}}.
8. Sota **Connexió**, trieu {{ui:Cable USB}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} o {{ui:PrusaLink}}. Per a USB premeu {{ui:Connecta}}. Per a una impressora de xarxa, escriviu-ne l'**Adreça** (i la **Clau API** si la demana) i premeu {{ui:Prova la connexió}}.
9. Premeu {{ui:Envia a la impressora 3D}}. La targeta pregunta si el llit és lliure i si el material correcte és carregat, i mostra el temps, el material i les temperatures. Confirmeu per enviar.

Rebeu un missatge que la impressora s'està iniciant. {{ui:Atura la impressió}} apaga les resistències, el ventilador i els motors. Si només voleu un fitxer, premeu {{ui:Desa el G-code en lloc}}.

## Notes

- El USB necessita Chrome o Edge en un ordinador, i la pàgina ha de quedar oberta fins que acabi la impressió. Si la tanqueu, el flux s'atura.
- Una impressora de xarxa ha de permetre aquest lloc (a Moonraker afegiu-lo a `cors_domains`; a OctoPrint activeu el CORS i copieu una clau API). El navegador pot demanar accedir als dispositius de la vostra xarxa.
- Res no es connecta ni s'envia sense el vostre clic.
- La llista de laminadors és sota **Laminador**. {{ui:CadCraft bàsic (inclòs, el més ràpid)}} ve integrat. Kiri:Moto, PrusaSlicer, OrcaSlicer i la Bambu Lab P2S són complements independents que activeu des de la targeta o a {{ui:Configuració}} › {{ui:Complements}}. PrusaSlicer i OrcaSlicer usen la vostra pròpia còpia i funcionen des de CadCraft Studio en un ordinador.
- Les peces que no són sòlids tancats queden fora, i la targeta us diu quanta part de la forma representen.
- Per a impressores de resina, vegeu [Lamina per a una impressora de resina](topic:resin-printing). Per comprovar o reparar un model primer, vegeu [Suports, gruix de paret, buidatge i reparació](topic:print-tools).
